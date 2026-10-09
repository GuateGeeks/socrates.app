import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { build } from 'esbuild';
import { chromium } from 'playwright';
import { PRACTICES } from '../src/aws/practice.ts';
import { defaultLearnerProfile } from '../src/core/learner-profile.ts';

const course = JSON.parse(readFileSync('content/aws-cloud-practitioner.json', 'utf8'));
const bundle = await build({ entryPoints: ['src/main.tsx'], bundle: true, write: false, outdir: '/tmp/aws-guided-practice', format: 'iife', jsx: 'automatic', alias: { '@': resolve('src') }, define: { 'process.env.NODE_ENV': '"production"' }, logLevel: 'silent', plugins: [{ name: 'course', setup(build) {
  build.onLoad({ filter: /[/\\]aws[/\\]content\.ts$/ }, () => ({ contents: `export async function loadAwsCourse(){return ${JSON.stringify(course)}}` }));
  build.onLoad({ filter: /[/\\]core[/\\]cloud-sync\.ts$/ }, () => ({ contents: 'export async function startCloudSession(){return null} export async function syncLearnerProfile(){}' }));
  build.onLoad({ filter: /[/\\]firebase\.ts$/ }, () => ({ contents: 'export const auth={},firestore={},realtime={}; export async function initializeAnalytics(){return null}' }));
} }] });
const script = bundle.outputFiles.find(file => file.path.endsWith('.js')).text.replace(/<\/script/gi, '<\\/script');
const css = bundle.outputFiles.find(file => file.path.endsWith('.css')).text;
const html = `<!doctype html><html lang="es"><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>${css}</style></head><body><div id="root"></div><script>${script}</script></body></html>`;
const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
try {
  const context = await browser.newContext({ viewport: { width: 375, height: 812 }, reducedMotion: 'reduce' });
  await context.route('**/*', route => route.request().url().startsWith('http://socrates.test/') ? route.fulfill({ contentType: 'text/html', body: html }) : route.abort());
  await context.addInitScript(profile => localStorage.setItem('socrates.learner.v1', JSON.stringify(profile)), { ...defaultLearnerProfile(), displayName: 'Ixchel', activeProgram: 'aws-cloud-practitioner', enrolledPrograms: ['aws-cloud-practitioner'], onboardingComplete: true, onboardingStep: 'ready' });
  const page = await context.newPage();
  page.setDefaultTimeout(5000);
  for (const [id, practice] of Object.entries(PRACTICES)) {
    await page.goto(`http://socrates.test/#/aws-leccion/${id}`);
    await page.getByRole('button', { name: /Practicar/ }).click();
    if (id === 'cloud-value') {
      const firstChoice = await page.locator('.aws-practice-choices button').first().boundingBox();
      assert(firstChoice.y + firstChoice.height < 730, 'The first decision and its answer must fit in the first phone viewport');
    }
    if (id === 'cloud-value') await page.screenshot({ path: '/tmp/aws-guided-practice-mobile.png', fullPage: true });
    const total = practice.items.length + (practice.flow?.length ?? 0);
    for (const [index, item] of practice.items.entries()) {
      await page.getByText(`Decisión ${index + 1} de ${total}`, { exact: true }).waitFor();
      assert.equal(await page.locator('.aws-practice-question').count(), 1);
      assert.equal(await page.locator('.aws-practice-question').textContent(), item.text);
      if (id === 'cloud-value') assert.equal(await page.locator('.aws-practice-choices button').count(), 3, 'Only relevant concepts are shown for each cloud scenario');
      assert.equal(await page.getByRole('progressbar', { name: 'Avance de la práctica' }).getAttribute('aria-valuenow'), String(index));
      if (index === 0) {
        const currentGroup = practice.targets.find(target => target.id === item.target).group;
        const wrong = practice.targets.find(target => target.id !== item.target && target.group === currentGroup);
        await page.getByRole('button', { name: wrong.label, exact: true }).click();
        await page.getByRole('region', { name: 'Práctica guiada' }).getByRole('button', { name: 'Comprobar', exact: true }).click();
        await page.getByText('Inténtalo de nuevo', { exact: true }).waitFor();
        await page.getByRole('button', { name: 'Volver a intentar' }).click();
      }
      await page.getByRole('button', { name: practice.targets.find(target => target.id === item.target).label, exact: true }).click();
      await page.getByRole('region', { name: 'Práctica guiada' }).getByRole('button', { name: 'Comprobar', exact: true }).click();
      await page.getByText('¡Muy bien!', { exact: true }).waitFor();
      await page.getByRole('button', { name: index + 1 === total ? 'Ver resultado' : 'Continuar' }).click();
    }
    for (const [index, step] of (practice.flow ?? []).entries()) {
      await page.getByText(`Decisión ${practice.items.length + index + 1} de ${total}`, { exact: true }).waitFor();
      await page.getByRole('button', { name: step.text, exact: true }).click();
      await page.getByRole('region', { name: 'Práctica guiada' }).getByRole('button', { name: 'Comprobar', exact: true }).click();
      await page.getByRole('button', { name: index + 1 === practice.flow.length ? 'Ver resultado' : 'Continuar' }).click();
    }
    await page.getByText(`${total} de ${total} decisiones resueltas`, { exact: true }).waitFor();
    assert.equal(await page.evaluate(() => localStorage.getItem('socrates.aws-progress.v1')), null);
    await page.getByRole('button', { name: 'Continuar a las preguntas' }).click();
    await page.locator('#aws-question').waitFor();
    assert.equal(await page.getByRole('button', { name: 'Comenzar comprobación' }).count(), 0, 'The practice result advances directly to the first question');
  }
  console.log('PASS: four AWS practices use one decision, immediate feedback, direct advancement and a result.');
} finally { await browser.close(); }
