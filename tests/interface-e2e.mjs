// Self-contained app test. Only remote content, analytics and cloud writes are replaced.
// Run: node --import tsx tests/interface-e2e.mjs
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { readFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { chromium } from 'playwright';
import { PRACTICES } from '../src/aws/practice.ts';
import { defaultLearnerProfile } from '../src/core/learner-profile.ts';
import { emptyProgress } from '../src/core/progress.ts';

const course = JSON.parse(readFileSync('content/aws-cloud-practitioner.json', 'utf8'));
const shots = resolve(tmpdir(), 'socrates-interface-screens');
mkdirSync(shots, { recursive: true });
const bundle = await build({
  entryPoints: ['src/main.tsx'], bundle: true, minify: true, write: false, outdir: '/tmp/interface-bundle',
  format: 'iife', jsx: 'automatic', alias: { '@': resolve('src') },
  define: { 'process.env.NODE_ENV': '"production"' }, logLevel: 'silent',
  plugins: [{ name: 'local-data', setup(build) {
    build.onLoad({ filter: /[/\\]aws[/\\]content\.ts$/ }, () => ({ contents: `export async function loadAwsCourse(){return ${JSON.stringify(course)}}` }));
    build.onLoad({ filter: /[/\\]core[/\\]cloud-sync\.ts$/ }, () => ({ contents: 'export async function startCloudSession(){return null} export async function syncLearnerProfile(){}' }));
    build.onLoad({ filter: /[/\\]firebase\.ts$/ }, () => ({ contents: 'export const auth={},firestore={},realtime={}; export async function initializeAnalytics(){return null}' }));
  } }],
});
const js = bundle.outputFiles.find(file => file.path.endsWith('.js')).text.replace(/<\/script/gi, '<\\/script');
const css = bundle.outputFiles.find(file => file.path.endsWith('.css')).text;
const html = `<!doctype html><html lang="es"><head><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color"><style>${css}</style></head><body><div id="root"></div><script>${js}</script></body></html>`;
const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
const errors = [];
const origin = 'http://socrates.claude.test/';
async function createPage({ system = 'dark', app = 'dark', complete = true, width = 390 } = {}) {
  const context = await browser.newContext({ viewport: { width, height: 844 }, colorScheme: system, reducedMotion: 'reduce', serviceWorkers: 'block' });
  await context.route('**/*', route => route.request().url().startsWith(origin) ? route.fulfill({ contentType: 'text/html', body: html }) : route.abort());
  const profile = { ...defaultLearnerProfile(), displayName: 'Ixchel', theme: app, sound: false, haptics: false,
    activeProgram: 'aws-cloud-practitioner', enrolledPrograms: ['aws-cloud-practitioner', 'cnb-sexto'], onboardingComplete: complete, onboardingStep: complete ? 'ready' : 'name' };
  const cnb = emptyProgress();
  cnb.profile.name = 'Ixchel'; cnb.settings.theme = 'light'; cnb.settings.sound = false; cnb.settings.haptics = false;
  await context.addInitScript(({ profile, cnb }) => {
    if (!localStorage.getItem('socrates.learner.v1')) {
      localStorage.setItem('socrates.learner.v1', JSON.stringify(profile));
      localStorage.setItem('socrates.progress.v1', JSON.stringify(cnb));
    }
  }, { profile, cnb });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.setDefaultTimeout(10000);
  return page;
}
async function go(page, hash) {
  await page.goto(origin + hash);
  await page.locator('.aws-page,.ds-page,.onboarding').first().waitFor();
}
async function assertFits(page) {
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `Horizontal overflow at ${page.url()}`);
  const clipped = await page.locator('.aws-phases,.aws-reader,.aws-reading-card,.aws-full-reading,.aws-practice,.aws-quiz').evaluateAll(elements => elements.filter(el => {
    if (!el.checkVisibility()) return false;
    const rect = el.getBoundingClientRect();
    return rect.left < -1 || rect.right > innerWidth + 1;
  }).map(el => el.className));
  assert.deepEqual(clipped, [], 'No cards or controls clipped by overflow-x: clip');
}
async function assertTheme(page, theme) {
  await page.waitForFunction(theme => getComputedStyle(document.documentElement).colorScheme.includes(theme), theme);
  const background = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  assert.equal(background, theme === 'light' ? 'rgb(255, 248, 236)' : 'rgb(18, 23, 34)');
}
try {
  console.log('App fixture built. Checking themes and interactions…');
  // Actual root, settings and native controls in all app/system combinations.
  for (const system of ['light', 'dark']) for (const app of ['auto', 'light', 'dark']) {
    const page = await createPage({ system, app, width: 375 });
    await go(page, '#/ajustes');
    await assertTheme(page, app === 'auto' ? system : app);
    await assertFits(page);
    await page.getByRole('button', { name: 'Claro', exact: true }).click();
    await assertTheme(page, 'light');
    await page.reload(); await page.locator('.ds-page').waitFor(); await assertTheme(page, 'light');
    await page.getByRole('button', { name: 'Oscuro', exact: true }).click(); await assertTheme(page, 'dark');
    await page.getByRole('button', { name: 'Auto', exact: true }).click();
    await page.emulateMedia({ colorScheme: system === 'light' ? 'dark' : 'light' });
    await assertTheme(page, system === 'light' ? 'dark' : 'light');
    await page.context().close();
  }
  const onboarding = await createPage({ complete: false, app: 'light' });
  await go(onboarding, '#/'); await assertTheme(onboarding, 'light');
  assert.equal(await onboarding.locator('.onboarding input').evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(255, 255, 255)');
  await onboarding.context().close();

  const page = await createPage({ width: 375 });
  for (const [id, practice] of Object.entries(PRACTICES)) {
    await go(page, `#/aws-leccion/${id}`);
    await assertFits(page);
    assert.equal(await page.getByRole('progressbar', { name: 'Progreso de la lección' }).getAttribute('aria-valuenow'), '1');
    await page.getByRole('button', { name: /Practicar/ }).click();
    assert.equal(await page.getByRole('progressbar', { name: 'Avance de la práctica' }).getAttribute('aria-valuenow'), '0');
    assert.equal(await page.getByText('Consultar el escenario', { exact: true }).isVisible(), true);
    const lab = page.getByRole('region', { name: 'Práctica guiada' });
    assert.equal(await lab.getByRole('button', { name: 'Comprobar', exact: true }).isDisabled(), true);
    const firstTarget = practice.targets.find(target => target.id === practice.items[0].target);
    await lab.getByRole('button', { name: firstTarget.label, exact: true }).click();
    await page.getByRole('button', { name: 'Consultar contenido' }).click();
    await page.getByRole('button', { name: /Practicar/ }).click();
    assert.equal(await lab.getByRole('button', { name: firstTarget.label, exact: true }).getAttribute('aria-pressed'), 'true', 'Returning to the practice preserves the current choice');
    for (const [i, item] of practice.items.entries()) {
      assert.equal(await page.locator('.aws-practice-question').textContent(), item.text);
      await lab.getByRole('button', { name: practice.targets.find(target => target.id === item.target).label, exact: true }).click();
      await lab.getByRole('button', { name: 'Comprobar', exact: true }).click();
      await page.getByText('¡Muy bien!', { exact: true }).waitFor();
      await lab.getByRole('button', { name: i + 1 === practice.items.length && !practice.flow ? 'Ver resultado' : 'Continuar' }).click();
    }
    for (const [i, step] of (practice.flow ?? []).entries()) {
      await lab.getByRole('button', { name: step.text, exact: true }).click();
      await lab.getByRole('button', { name: 'Comprobar', exact: true }).click();
      await lab.getByRole('button', { name: i + 1 === practice.flow.length ? 'Ver resultado' : 'Continuar' }).click();
    }
    await page.getByText(`${practice.items.length + (practice.flow?.length ?? 0)} de ${practice.items.length + (practice.flow?.length ?? 0)} decisiones resueltas`, { exact: true }).waitFor();
    assert.equal(await page.evaluate(() => localStorage.getItem('socrates.aws-progress.v1')), null, 'Formative work must not record a quiz result');
    await assertFits(page);
    await page.screenshot({ path: `${shots}/${id}-practice-dark.png`, fullPage: true });
    await page.getByRole('button', { name: 'Continuar a las preguntas' }).click();
    await page.locator('#aws-question').waitFor();
  }
  // Quiz drafts, confirmed answers, exact scoring and repeat attempts.
  await go(page, '#/aws-leccion/cloud-value');
  await page.getByRole('button', { name: /Comprobar/, exact: false }).click();
  await page.getByRole('button', { name: 'Comenzar comprobación' }).click();
  const lesson = course.domains[0].lessons[0];
  for (const [i, question] of lesson.questions.entries()) {
    await page.locator('.aws-options button').nth(question.correctOption).click();
    if (i === 0) {
      await page.getByRole('button', { name: 'Consultar contenido' }).click();
      await page.getByRole('button', { name: /Comprobar/ }).click();
      assert.equal(await page.locator('.aws-options button[aria-pressed="true"]').count(), 1);
    }
    await page.getByRole('button', { name: 'Comprobar respuesta' }).click();
    await page.getByRole('button', { name: i === lesson.questions.length - 1 ? 'Ver resultados' : 'Siguiente pregunta' }).click();
  }
  await page.getByText('100 % de aciertos', { exact: true }).waitFor();
  const recorded = await page.evaluate(() => JSON.parse(localStorage.getItem('socrates.aws-progress.v1')));
  assert.equal(recorded.lessons['cloud-value'].bestScore, 1);
  assert.equal(recorded.lessons['cloud-value'].attempts, 1);
  await page.screenshot({ path: `${shots}/result-dark.png`, fullPage: true });
  await page.getByRole('button', { name: 'Repasar contenido' }).click();
  await page.getByRole('button', { name: /Comprobar/ }).click();
  await page.getByText('100 % de aciertos', { exact: true }).waitFor();
  await page.getByRole('button', { name: 'Repetir comprobación' }).click();
  await page.getByRole('button', { name: 'Sí, comenzar de nuevo' }).click();
  assert.equal(await page.locator('.aws-options button[aria-pressed="true"]').count(), 0);
  for (const [i, question] of lesson.questions.entries()) {
    await page.locator('.aws-options button').nth(i === 0 ? (question.correctOption + 1) % question.options.length : question.correctOption).click();
    await page.getByRole('button', { name: 'Comprobar respuesta' }).click();
    if (i === 0) await page.getByText('Revisa este concepto', { exact: true }).waitFor();
    await page.getByRole('button', { name: i === lesson.questions.length - 1 ? 'Ver resultados' : 'Siguiente pregunta' }).click();
  }
  await page.getByText('50 % de aciertos', { exact: true }).waitFor();
  const repeated = await page.evaluate(() => JSON.parse(localStorage.getItem('socrates.aws-progress.v1')));
  assert.equal(repeated.lessons['cloud-value'].bestScore, 1);
  assert.equal(repeated.lessons['cloud-value'].attempts, 2);
  await go(page, '#/aws-leccion/well-architected');
  assert.equal(await page.getByRole('button', { name: /Practicar/ }).count(), 0);
  await page.getByRole('button', { name: 'Siguiente', exact: true }).click();
  assert.equal(await page.locator('.aws-reader__index [aria-current]').textContent(), '2' + course.domains[0].lessons[1].sections[1].heading);
  // Main screen appearance at phone/tablet/desktop sizes.
  for (const width of [375, 820, 1280]) for (const theme of ['light', 'dark']) {
    await page.setViewportSize({ width, height: 900 });
    await go(page, '#/ajustes');
    await page.getByRole('button', { name: theme === 'light' ? 'Claro' : 'Oscuro', exact: true }).click();
    for (const route of ['#/', '#/aws-temario', '#/aws-dominio/cloud-concepts', '#/aws-leccion/cloud-value']) {
      await go(page, route); await assertFits(page); await assertTheme(page, theme);
    }
    await page.screenshot({ path: `${shots}/reader-${theme}-${width}.png`, fullPage: true });
  }
  // Different legacy preferences must not fight on a program switch or reload.
  await go(page, '#/ajustes');
  await page.getByRole('button', { name: /Sexto primaria/i }).click();
  await page.locator('.ds-page').waitFor(); await assertTheme(page, 'light');
  await go(page, '#/ajustes');
  await page.getByRole('button', { name: 'Oscuro', exact: true }).click(); await assertTheme(page, 'dark');
  await page.reload(); await page.locator('.ds-page').waitFor(); await assertTheme(page, 'dark');
  await page.setViewportSize({ width: 375, height: 812 });
  for (const theme of ['light', 'dark']) {
    await go(page, '#/ajustes');
    await page.getByRole('button', { name: theme === 'light' ? 'Claro' : 'Oscuro', exact: true }).click();
    for (const route of ['#/', '#/anio', '#/materias', '#/cuaderno', '#/encuesta-beta']) {
      await go(page, route); await assertFits(page); await assertTheme(page, theme);
    }
    await page.screenshot({ path: `${shots}/cnb-survey-${theme}.png`, fullPage: true });
    await go(page, '#/leccion/s01/s01-d5-taller');
    await page.locator('.lp-intro').waitFor();
    await page.getByRole('button', { name: /Empezar/ }).click();
    await page.locator('.ds-actionbar').waitFor(); await assertFits(page); await assertTheme(page, theme);
    await page.evaluate(() => Promise.all(document.getAnimations().filter(animation => animation.effect?.getTiming().iterations !== Infinity).map(animation => animation.finished.catch(() => {}))));
    await page.screenshot({ path: `${shots}/cnb-lesson-${theme}.png`, fullPage: true });
  }
  assert.deepEqual(errors, [], 'No browser runtime errors');
  console.log(`PASS: theme matrix, four interactive labs, quiz, persistence, responsive layout. Screenshots: ${shots}`);
} finally { await browser.close(); }
