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
const browser = await chromium.launch();
const errors = [];
const origin = 'http://socrates.claude.test/';
async function createPage({ system = 'dark', app = 'dark', complete = true, width = 390 } = {}) {
  const context = await browser.newContext({ viewport: { width, height: 844 }, colorScheme: system, reducedMotion: 'reduce', serviceWorkers: 'block', isMobile: true, hasTouch: true });
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
  const flowPage = await createPage({width:375});
  await go(flowPage, '#/aws-leccion/global-infrastructure');
  await flowPage.getByRole('button', {name:/Practicar/}).click();
  const flowPractice = PRACTICES['global-infrastructure'];
  for (const item of flowPractice.items) {
    const target = flowPractice.targets.find(target => target.id === item.target);
    await flowPage.getByRole('button', {name:`Colocar en ${target.label}`, exact:true}).click();
  }
  await flowPage.getByRole('button', {name:'Continuar al recorrido'}).click();
  await flowPage.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  const movedStep = [...flowPractice.flow].reverse()[1];
  await flowPage.getByRole('button', {name:`Subir paso: ${movedStep.text}`, exact:true}).focus();
  await flowPage.keyboard.press('Enter');
  await flowPage.waitForTimeout(50);
  const positionControl = flowPage.getByRole('combobox', {name:`Posición de ${movedStep.text}`, exact:true});
  assert.equal(await positionControl.inputValue(), '0');
  assert.equal(await positionControl.evaluate(el => el === document.activeElement), true, 'Boundary move keeps focus on an enabled control of the moved step');
  const positionBox = await positionControl.boundingBox();
  assert(positionBox.y >= 0 && positionBox.y + positionBox.height <= 844, 'Moved step control remains visible');
  await flowPage.close();
  const page = await createPage({width:375});
  await go(page, '#/aws-leccion/cloud-value');
  await page.locator('.aws-reader').waitFor();
  assert.equal(await page.getByRole('button', {name:/Concepto 1 de/}).count(), 1, 'Concepts must use an explicit disclosure');
  await page.getByRole('button', {name:/Concepto 1 de/}).click();
  await page.locator('.aws-reader__index button').nth(2).click();
  assert.match(await page.locator('.aws-reading-card h2').textContent(), new RegExp(course.domains[0].lessons[0].sections[2].heading));
  assert.equal(await page.locator('.aws-reader__index').isVisible(), false);
  await page.getByRole('button', {name:/Practicar/}).click();
  assert.equal(await page.locator('.assignment-active').count(), 1, 'One active decision');
  assert.equal(await page.locator('.assignment-target').count(), PRACTICES['cloud-value'].targets.length);

  // Each destination must be touchable while the active item remains visible.
  await page.locator('.assignment-work').evaluate(el => el.scrollIntoView({block:'start'}));
  const visibleTargets = await page.locator('.assignment-target').evaluateAll(elements => elements.every(el => {
    const r = el.getBoundingClientRect(); return r.top >= 0 && r.bottom <= innerHeight && r.height >= 44;
  }));
  assert.equal(visibleTargets, true, 'Current destinations fit together on the phone');
  await page.screenshot({path:`${shots}/mobile-practice-375.png`});
  const practice = PRACTICES['cloud-value'];
  const place = async target => {
    const button = page.getByRole('button', {name:`Colocar en ${practice.targets.find(t => t.id === target).label}`, exact:true});
    await button.scrollIntoViewIfNeeded();
    const box = await button.boundingBox();
    await page.touchscreen.tap(box.x+box.width/2, box.y+box.height/2);
  };
  await place(practice.items[0].target);
  await page.getByRole('button',{name:'Deshacer',exact:true}).click();
  assert.equal(await page.locator('.assignment-active p').textContent(),practice.items[0].text);
  for(const [i,item] of practice.items.entries()) {
    assert.equal(await page.locator('.assignment-active p').textContent(),item.text);
    await place(i===0 ? practice.targets.find(t=>t.id!==item.target).id : item.target);
  }
  await page.getByRole('button',{name:'Comprobar conexiones'}).click();
  await page.getByText('Revisa estas conexiones',{exact:true}).waitFor();
  await page.getByRole('button',{name:/Explorar/}).click();
  await page.getByRole('button',{name:/Practicar/}).click();
  await page.getByRole('button',{name:`Editar: ${practice.items[0].text}`,exact:true}).click();
  await page.getByRole('button',{name:'Cancelar edición'}).click();
  assert.equal(await page.locator('.assignment-active').count(),0,'Cancel keeps all assignments');
  await page.getByRole('button',{name:`Editar: ${practice.items[0].text}`,exact:true}).click();
  await page.getByRole('button',{name:'Devolver a pendientes'}).click();
  assert.equal(await page.getByRole('button',{name:'Comprobar conexiones'}).isDisabled(),true);
  await place(practice.items[0].target);
  await page.getByRole('button',{name:'Comprobar conexiones'}).click();
  await page.getByText('¡Lo conectaste todo!',{exact:true}).waitFor();
  assert.equal(await page.getByRole('button',{name:/^Editar:/}).count(),0);
  assert.equal(await page.evaluate(()=>localStorage.getItem('socrates.aws-progress.v1')),null);
  await page.getByRole('button',{name:'Reiniciar práctica',exact:true}).click();
  await page.getByRole('dialog').waitFor();
  await page.keyboard.press('Escape');
  await page.getByText('¡Lo conectaste todo!',{exact:true}).waitFor();
  await page.getByRole('button',{name:'Reiniciar práctica',exact:true}).click();
  await page.getByRole('button',{name:'Sí, reiniciar práctica',exact:true}).click();
  assert.equal(await page.locator('.assignment-active p').textContent(),practice.items[0].text);
  for(const width of [320,375,390,430,768,1280]) {
    await page.setViewportSize({width,height:844});
    await assertFits(page);
    assert.equal(await page.locator('.assignment-target').evaluateAll(els=>els.every(el=>el.getBoundingClientRect().right<=innerWidth)),true);
  }
  await page.setViewportSize({width:844,height:390}); await assertFits(page);
  await page.setViewportSize({width:375,height:844});
  await page.addStyleTag({content:'html{font-size:200% !important}'}); await assertFits(page);
  assert.equal(await page.locator('.aws-phases').evaluate(el=>el.scrollWidth<=el.clientWidth),true,'Phase labels fit at 200% text');
  // Reach the longest actual card with keyboard, then verify touch without auto-scroll.
  for (const [index, item] of practice.items.slice(0, -1).entries()) {
    await page.getByRole('button', {name:`Colocar en ${practice.targets.find(target => target.id === item.target).label}`, exact:true}).focus();
    await page.keyboard.press('Enter');
    await page.waitForFunction(expected => document.querySelector('.assignment-active p')?.textContent === expected, practice.items[index + 1].text);
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  }
  assert.equal(await page.locator('.assignment-active p').textContent(), practice.items.at(-1).text);
  const compactContext = page.getByRole('button', {name:'Ficha 7 de 7 · Consultar ficha', exact:true});
  await compactContext.waitFor();
  await compactContext.focus(); await page.keyboard.press('Enter');
  assert.equal(await page.locator('.assignment-active').evaluate(el => el === document.activeElement), true, 'Compact context returns focus to the complete card');
  const target = page.getByRole('button', {name:'Colocar en Nube híbrida', exact:true});
  const touchSession = await page.context().newCDPSession(page);
  let visibleTarget;
  for (let attempt = 0; attempt < 16; attempt++) {
    await page.evaluate(() => new Promise(resolve => {
      let previous = scrollY, stableFrames = 0;
      const frame = () => {
        stableFrames = Math.abs(scrollY - previous) < .5 ? stableFrames + 1 : 0;
        previous = scrollY;
        if (stableFrames >= 8) resolve(); else requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }));
    visibleTarget = await target.evaluate(el => {
      const r = el.getBoundingClientRect();
      const x = r.left + r.width / 2, y = r.top + r.height / 2;
      return r.top >= 0 && r.bottom <= innerHeight && el.contains(document.elementFromPoint(x,y)) ? {x,y} : null;
    });
    if (visibleTarget) break;
    const above = await target.evaluate(el => el.getBoundingClientRect().bottom < innerHeight / 2);
    const start = above ? 350 : 650;
    await touchSession.send('Input.dispatchTouchEvent', {type:'touchStart',touchPoints:[{x:4,y:start}]});
    for (let step = 1; step <= 10; step++) {
      await touchSession.send('Input.dispatchTouchEvent', {type:'touchMove',touchPoints:[{x:4,y:start + (above ? 20 : -20) * step}]});
      await page.waitForTimeout(30);
    }
    await page.waitForTimeout(120);
    await touchSession.send('Input.dispatchTouchEvent', {type:'touchEnd',touchPoints:[]});
    await page.waitForTimeout(100);
  }
  await touchSession.detach();
  await page.screenshot({path:`${shots}/mobile-practice-large-text-destinations.png`});
  assert(visibleTarget, 'Longest card leaves a fully visible, uncovered destination at 200% text');
  await page.touchscreen.tap(visibleTarget.x,visibleTarget.y);
  await page.locator('.assignment-active').waitFor({state:'detached'});
  assert.equal(await page.locator('.assignment-active').count(),0,'Visible touch destination completes the final assignment');
  await page.screenshot({path:`${shots}/mobile-practice-large-text.png`,fullPage:true});
  await go(page,'#/ajustes');
  await page.getByRole('button',{name:/Sexto primaria/i}).click();
  await go(page,'#/sistema');
  const matchCard=page.locator('.ds-card').filter({has:page.locator('code').filter({hasText:/^match$/})});
  await matchCard.getByRole('button',{name:'Probar',exact:true}).click();
  const firstLeft=await page.locator('.assignment-active p').textContent();
  const firstTarget=page.locator('.assignment-target').first();
  await firstTarget.focus(); await page.keyboard.press('Enter');
  const secondLeft=await page.locator('.assignment-active p').textContent();
  assert.notEqual(firstLeft,secondLeft);
  assert.match(await firstTarget.textContent(),/Reemplazará la pareja/);
  await firstTarget.click();
  assert.equal(await page.locator('.assignment-active p').textContent(),firstLeft);
  assert.match(await page.locator('.assignment-announcement').textContent(),/queda pendiente/);
  await page.getByRole('button',{name:'Deshacer',exact:true}).click();
  assert.equal(await page.locator('.assignment-active p').textContent(),secondLeft);
  await matchCard.getByRole('button',{name:'Cerrar',exact:true}).click();
  // Real curriculum examples, one per registered activity, rendered in the app shell.
  const cards=page.locator('.ds-card').filter({has:page.getByRole('button',{name:/^(Probar|Cerrar)$/,exact:true})});
  assert.equal(await cards.count(),28);
  for(let i=0;i<28;i++) {
    const card=cards.nth(i);
    await card.getByRole('button',{name:'Probar',exact:true}).click();
    const type=await card.locator('code').first().textContent();
    if(type==='highlight') {
      assert.equal(await card.locator('.act-hl__w').evaluateAll(els=>els.every(el=>el.getBoundingClientRect().height>=44)),true,'Words have separated touch targets');
      await card.locator('.act-hl__w').first().click();
      assert.equal(await card.locator('.act-hl__w').first().getAttribute('aria-pressed'),'true');
      await card.locator('.act-hl__w').first().click();
      assert.equal(await card.locator('.act-hl__w').first().getAttribute('aria-pressed'),'false');
    }
    if(type==='dilemma') {
      await card.locator('.ds-tile').first().click();
      assert.equal(await card.locator('.act-consequence').evaluate(el=>el===document.activeElement),true,'Consequence receives focus after choosing');
      await card.getByRole('button',{name:'Explorar otra decisión'}).click();
      assert.equal(await card.locator('.ds-tile').first().evaluate(el=>el===document.activeElement),true,'Return to decisions preserves keyboard context');
    }
    assert.equal(await card.locator('.sy__sandbox').evaluate(el=>[...el.querySelectorAll('button,input,select,textarea')].filter(e=>e.checkVisibility()).every(e=>{const r=e.getBoundingClientRect();return r.left>=-1&&r.right<=innerWidth+1})),true,`Real activity controls fit: ${type}`);
    await card.getByRole('button',{name:'Cerrar',exact:true}).click();
  }
  assert.deepEqual(errors,[]);
  console.log('PASS: concepts, touch destinations, undo/edit/cancel/return/correct/reset, phase persistence, responsive geometry');
} finally { await browser.close(); }
