// Self-contained app test. Only remote content, analytics and cloud writes are replaced.
// Run: node --import tsx tests/mobile-navigation.mjs
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { chromium } from 'playwright';
import { defaultLearnerProfile } from '../src/core/learner-profile.ts';
import { emptyProgress } from '../src/core/progress.ts';

const course = JSON.parse(readFileSync('content/aws-cloud-practitioner.json', 'utf8'));
const bundle = await build({
  entryPoints: ['src/main.tsx'], bundle: true, minify: true, write: false, outdir: '/tmp/interface-bundle',
  format: 'iife', jsx: 'automatic', alias: { '@': resolve('src') },
  define: { 'process.env.NODE_ENV': '"production"' }, logLevel: 'silent',
  plugins: [{ name: 'local-data', setup(build) {
    // Exercise progress changes without replacing the real store or completing a whole unit here.
    build.onLoad({ filter: /[/\\]main\.tsx$/ }, ({ path }) => ({ loader: 'tsx', contents: readFileSync(path, 'utf8') + `
      import { updateProgress as updateTestProgress } from '@/core/progress';
      import { WEEKS as testWeeks, firstIncomplete as testFirstIncomplete } from '@/content';
      window.completeTestUnit = (unit) => {
        let nextUnit;
        updateTestProgress(progress => {
          const lessons = { ...progress.lessons };
          for (const week of testWeeks.filter(week => week.unidad === unit)) {
            for (const lesson of week.lessons) lessons[lesson.id] = { stars: 3, score: 1, completedAt: '2026-10-03', runs: 1 };
          }
          const next = { ...progress, lessons };
          nextUnit = testFirstIncomplete(next)?.mission.unidad;
          return next;
        });
        return nextUnit;
      };
    ` }));
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
  const context = await browser.newContext({ viewport: { width, height: 844 }, colorScheme: system, hasTouch: true, reducedMotion: 'reduce', serviceWorkers: 'block' });
  await context.route('**/*', route => route.request().url().startsWith(origin) ? route.fulfill({ contentType: 'text/html', body: html }) : route.abort());
  const profile = { ...defaultLearnerProfile(), displayName: 'Ixchel', theme: app, sound: false, haptics: false,
    activeProgram: 'cnb-sexto', enrolledPrograms: ['aws-cloud-practitioner', 'cnb-sexto'], onboardingComplete: complete, onboardingStep: complete ? 'ready' : 'name' };
  const cnb = emptyProgress();
  for (let i = 0; i < 45; i++) {
    cnb.notebook['note-' + i] = {text: 'Idea de prueba ' + i, title: i === 44 ? 'Nota única' : 'Lección ' + i, missionId: 's01', lessonId: 'fixture', at: '2026-10-03'};
    cnb.journal['evidence-' + i] = {value: 'Evidencia de prueba ' + i, status: 'pending-review', cnb: [], at: '2026-10-03'};
  }
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
const failures = [];
async function test(name, work) {
  const page = await createPage({ width: 375 });
  try { await work(page); console.log('PASS', name); }
  catch (error) { failures.push(name + ': ' + error.message); console.error('FAIL', name, error.message); }
  finally { await page.context().close(); }
}
try {
  await test('year retains its initial group and week after progress advances', async page => {
    await go(page, '#/anio');
    const initialGroup = await page.locator('.yr__uhead[aria-expanded="true"]').getAttribute('aria-controls');
    const initialWeek = await page.getByLabel('Ir a la semana').inputValue();
    assert.equal(initialGroup, 'unit-1');
    // Do not touch either selection: the automatically chosen values must persist too.
    await page.getByRole('button', { name: 'Abrir semana', exact: true }).click();
    await page.getByRole('button', { name: 'Volver al año' }).waitFor();
    assert.equal(await page.evaluate(() => window.completeTestUnit(1)), 2);
    await page.getByRole('button', { name: 'Volver al año' }).click();
    assert.equal(await page.locator('.yr__uhead[aria-expanded="true"]').getAttribute('aria-controls'), initialGroup);
    assert.equal(await page.getByLabel('Ir a la semana').inputValue(), initialWeek);
  });
  await test('year opens one unit and remembers direct week selection', async page => {
    await go(page, '#/anio');
    assert.equal(await page.locator('.yr__unit [aria-expanded="true"]').count(), 1);
    const chooser = page.getByLabel('Ir a la semana');
    await chooser.selectOption({ index: 22 });
    const selected = await chooser.inputValue();
    await page.getByRole('button', { name: 'Abrir semana', exact: true }).click();
    await page.getByRole('button', { name: 'Volver al año' }).click();
    assert.equal(await chooser.inputValue(), selected);
    assert.equal(await page.locator('.yr__unit [aria-expanded="true"]').count(), 1);
    const week = page.locator('.yr__week').nth(7);
    await week.scrollIntoViewIfNeeded();
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const position = await page.evaluate(() => scrollY);
    assert.ok(position > 100);
    await week.click();
    await page.getByRole('button', {name:'Volver al año'}).click();
    await page.locator('.yr__week').first().waitFor();
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    assert.ok(Math.abs(await page.evaluate(() => scrollY) - position) < 3, 'Year restores scroll position after visiting a week');
  });
  await test('notebook pages results, resets search and retains filter on return', async page => {
    await go(page, '#/cuaderno');
    assert.equal(await page.locator('.nb__entry').count(), 20);
    await page.getByRole('button', { name: 'Página siguiente' }).click();
    assert.equal(await page.locator('.pagination').innerText().then(t => t.includes('21–40 de 45')), true);
    await page.getByLabel('Buscar en mi cuaderno').fill('Nota única');
    assert.equal(await page.locator('.nb__entry').count(), 1);
    assert.equal(await page.getByRole('button', { name: 'Página anterior' }).isDisabled(), true);
    await page.evaluate(() => { location.hash = '#/perfil'; });
    await page.getByText('Vista docente', {exact:true}).waitFor();
    await page.evaluate(() => { location.hash = '#/cuaderno'; });
    await page.getByLabel('Buscar en mi cuaderno').waitFor();
    assert.equal(await page.getByLabel('Buscar en mi cuaderno').inputValue(), 'Nota única');
  });
  await test('media pages all results and resets both filters and search', async page => {
    await go(page, '#/medios');
    assert.equal(await page.locator('.md__row').count(), 20);
    await page.getByRole('button', {name:'Página siguiente'}).click();
    await page.getByLabel('Tipo de medio').selectOption('audio');
    assert.equal(await page.getByRole('button', { name: 'Página anterior' }).isDisabled(), true);
    await page.getByLabel('Buscar medios').fill('no existe este medio 999999');
    assert.equal(await page.locator('.md__row').count(), 0);
    await page.getByText('No hay medios con estos filtros.').waitFor();
  });
  await test('teacher disclosures and paginated evidence', async page => {
    await go(page, '#/docente');
    assert.equal(await page.locator('.dc__competency[open]').count(), 0);
    await page.locator('.dc__competency summary').first().click();
    assert.equal(await page.locator('.dc__competency[open]').count(), 1);
    await page.getByLabel('Solo cubiertos').check();
    const coveredIndicators = await page.locator('.dc__competency[open] .dc__inds > li').count();
    await page.getByRole('button', {name:'Volver',exact:true}).click();
    await page.getByText('Vista docente', {exact:true}).click();
    assert.equal(await page.getByLabel('Solo cubiertos').isChecked(), true, 'Coverage filter survives leaving and returning');
    assert.equal(await page.locator('.dc__competency[open]').count(), 1);
    assert.equal(await page.locator('.dc__competency[open] .dc__inds > li').count(), coveredIndicators);
    await page.getByRole('tab', {name:'Plan semanal'}).click();
    assert.equal(await page.locator('.dc__plan-card').count(), 40);
    await page.getByRole('tab', {name:'Evidencias'}).click();
    assert.equal(await page.locator('.dc__journal-entry').count(), 20);
    await page.getByRole('button', {name:'Página siguiente'}).click();
    await page.getByLabel('Buscar evidencias').fill('de prueba 44');
    assert.equal(await page.locator('.dc__journal-entry').count(), 1);
    assert.equal(await page.getByRole('button', { name: 'Página anterior' }).isDisabled(), true);
  });
  await test('gallery keeps a single activity open', async page => {
    await go(page, '#/sistema');
    await page.getByRole('button', {name:'Probar', exact:true}).nth(0).click();
    await page.getByRole('button', {name:'Probar', exact:true}).nth(0).click();
    assert.equal(await page.locator('.sy__sandbox').count(), 1);
  });
  await test('survey stages preserve draft and reveal invalid fields', async page => {
    await go(page, '#/encuesta-beta');
    assert.equal(await page.locator('.survey-question').count(), 3);
    await page.getByLabel('Estudiante', {exact:true}).check();
    await page.locator('input[name="survey-overall"][value="4"]').check();
    await page.locator('input[name="survey-clarity"][value="5"]').check();
    await page.getByRole('button', {name:'Siguiente paso'}).click();
    assert.equal(await page.locator('.survey-question').count(), 4);
    await page.getByRole('button', {name:'Siguiente paso'}).click();
    assert.equal(await page.locator('.survey-question').count(), 3);
    await page.getByLabel('¿Qué es lo que más te gustó o te ayudó?').fill('Las actividades');
    await page.getByRole('button', {name:'Revisar respuestas'}).click();
    assert.equal(await page.locator('.survey-review li').count(), 10);
    await page.getByRole('button', {name:'Enviar respuestas',exact:true}).click();
    assert.equal(await page.locator('.survey-question').count(), 4);
    assert.equal(await page.evaluate(() => document.activeElement.id), 'survey-input-engagement');
    for (const id of ['engagement','difficulty','visuals','navigation']) await page.locator(`input[name="survey-${id}"][value="4"]`).check();
    await page.getByRole('button', {name:'Siguiente paso'}).click();
    await page.locator('input[name="survey-interactivity"][value="4"]').check();
    await page.getByRole('button', {name:'Revisar respuestas'}).click();
    await page.getByRole('button', {name:'Enviar respuestas',exact:true}).click();
    assert.equal(await page.evaluate(() => document.activeElement.id), 'answer-firstImprovement');
    await page.reload();
    const draft = await page.evaluate(() => JSON.parse(localStorage.getItem('socrates.beta-survey.v1')));
    assert.equal(draft.answers.bestPart, 'Las actividades');
    assert.equal(draft.answers.overall, 4);
  });
  await test('day navigation returns to selected day and supports visible touch', async page => {
    await go(page, '#/anio');
    await page.getByRole('button', {name:'Abrir semana',exact:true}).click();
    const day = page.getByRole('button', {name:'Miércoles',exact:true});
    // Bring the day selector into view with a finger gesture, never Playwright auto-scroll.
    const touch = await page.context().newCDPSession(page);
    for (let attempt = 0; attempt < 8; attempt++) {
      const rect = await day.boundingBox();
      if (rect && rect.y >= 0 && rect.y + rect.height < 750) break;
      const startY = rect && rect.y < 0 ? 260 : 700;
      const direction = rect && rect.y < 0 ? 1 : -1;
      await touch.send('Input.dispatchTouchEvent', {type:'touchStart',touchPoints:[{x:350,y:startY}]});
      for (let step = 1; step <= 6; step++) await touch.send('Input.dispatchTouchEvent', {type:'touchMove',touchPoints:[{x:350,y:startY + direction * step * 45}]});
      await touch.send('Input.dispatchTouchEvent', {type:'touchEnd',touchPoints:[]});
      await page.waitForTimeout(120);
    }
    await touch.detach();
    const box = await day.boundingBox();
    assert.ok(box && box.y >= 0 && box.y + box.height <= 844);
    await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
    assert.equal(await day.getAttribute('aria-pressed'), 'true');
    const missionHash = await page.evaluate(() => location.hash);
    await page.locator('.agenda .lrow').first().click();
    await page.evaluate(hash => { location.hash = hash; }, missionHash);
    await page.getByRole('button', {name:'Miércoles',exact:true}).waitFor();
    assert.equal(await page.getByRole('button', {name:'Miércoles',exact:true}).getAttribute('aria-pressed'), 'true');
    await page.setViewportSize({width:320,height:844});
    assert.equal(await page.locator('.day-select select').inputValue(), '3');
    await page.locator('.day-select select').selectOption('5');
    await page.setViewportSize({width:430,height:844});
    assert.equal(await page.getByRole('button', {name:'Viernes',exact:true}).getAttribute('aria-pressed'), 'true');
  });
  await test('catalog controls fit phone, landscape, tablet, desktop and enlarged text', async page => {
    await go(page, '#/');
    for (const [width,height] of [[320,844],[375,844],[390,844],[430,844],[768,844],[1280,844],[844,390]]) {
      await page.setViewportSize({width,height});
      for (const theme of ['light','dark']) {
        await page.evaluate(theme => {document.documentElement.dataset.theme = theme;}, theme);
        for (const route of ['#/','#/anio','#/materias','#/materia/mat','#/cuaderno','#/medios','#/docente','#/explorar/mat','#/perfil','#/logros','#/ajustes','#/encuesta-beta']) {
          await page.evaluate(async route => {
            location.hash = route;
            await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
          }, route);
          for (const zoom of [100,200]) {
            await page.evaluate(zoom => {document.documentElement.style.fontSize = zoom + '%';}, zoom);
            const bad = await page.locator('.mobile-screen button,.mobile-screen select,.mobile-screen textarea,.mobile-screen summary,.mobile-screen .chips,.mobile-screen .daytabs').evaluateAll(elements => elements.filter(el => {
              if (!el.checkVisibility()) return false;
              const rect = el.getBoundingClientRect();
              return rect.left < -1 || rect.right > innerWidth + 1 || (el.matches('button,select,textarea,summary') && rect.height < 43);
            }).map(el => ({tag:el.tagName, text:el.textContent.slice(0,70), rect:el.getBoundingClientRect().toJSON()})));
            assert.deepEqual(bad, [], route + ' at ' + width + 'px, ' + theme + ', text ' + zoom + '%');
            assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, route + ' horizontal overflow at ' + width + ', text ' + zoom);
          }
          await page.evaluate(() => { document.documentElement.style.fontSize = ''; });
        }
      }
    }
  });
  const onboarding = await createPage({ complete: false, app: 'light', width: 320 });
  try {
    await go(onboarding, '#/');
    for (const step of ['welcome','program','name','avatar','goal','preferences','ready']) {
      await onboarding.evaluate(step => {
        const profile = JSON.parse(localStorage.getItem('socrates.learner.v1'));
        profile.onboardingStep = step;
        localStorage.setItem('socrates.learner.v1', JSON.stringify(profile));
      }, step);
      await onboarding.reload();
      await onboarding.locator('.onboarding').waitFor();
      await onboarding.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
      const clipped = await onboarding.locator('.onboarding button,.onboarding select,.onboarding input,.onboarding h1').evaluateAll(elements => elements.filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.left < -1 || rect.right > innerWidth + 1;
      }).map(el => ({tag:el.tagName,text:el.textContent,rect:el.getBoundingClientRect().toJSON()})));
      assert.deepEqual(clipped, [], 'Onboarding ' + step + ' fits 320px with 200% text');
    }
    console.log('PASS onboarding at 320px with 200% text');
  } finally { await onboarding.context().close(); }
  assert.deepEqual(errors, [], 'No browser runtime errors');
  assert.deepEqual(failures, []);
  console.log('Mobile navigation tests passed.');
} finally { await browser.close(); }
