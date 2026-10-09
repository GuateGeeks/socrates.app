#!/usr/bin/env node
/**
 * Prueba E2E del ciclo escolar completo en teléfono y tableta (Playwright):
 *  1. Recorre TODAS las lecciones del año (y las extra), paso a paso, resolviendo con la clave de
 *     respuesta vía gancho de prueba: cada actividad se renderiza, "Comprobar" da correcto y se
 *     llega a la pantalla de cierre.
 *  2. Interacciones reales (toques, teclado, arrastre) en actividades clave.
 *  3. Recorrido por todas las pantallas y capturas en tests/screens/.
 *
 *   npm run e2e            (o: node scripts/build-standalone.mjs && node tests/e2e.mjs [--quick])
 */
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const url = pathToFileURL(join(root, 'dist-standalone/index.html')).href;
const shots = join(root, 'tests/screens');
const quick = process.argv.includes('--quick');
const unidad = Number(process.argv.find((a) => a.startsWith('--unidad='))?.split('=')[1] ?? 0);
const semana = Number(process.argv.find((a) => a.startsWith('--semana='))?.split('=')[1] ?? 0);
mkdirSync(shots, { recursive: true });

const tsx = process.env.TSX ?? 'npx --no-install tsx';
const course = JSON.parse(execSync(`${tsx} -e "import('./src/content/index.ts').then(m=>console.log(JSON.stringify([...m.WEEKS, ...m.COURSE.missions].map(w=>({id:w.id,semana:w.semana,lessons:w.lessons.map(l=>({id:l.id,kind:l.kind,steps:l.steps.length}))})))))"`, { cwd: root, encoding: 'utf8' }).trim().split('\n').pop());

const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
const errors = [];
let passed = 0, lessonsOk = 0;
const seen = new Set();

async function newPage(viewport, isMobile, savedState) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 2, isMobile, hasTouch: isMobile, locale: 'es-GT' });
  await ctx.addInitScript(() => { window.__SOCRATES_TEST__ = true; });
  if (savedState) await ctx.addInitScript((entries) => {
    for (const [key, value] of entries) localStorage.setItem(key, value);
  }, savedState);
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error' && !/fonts\.g|ERR_|net::/.test(m.text())) errors.push(`console: ${m.text()}`); });
  return page;
}
const primary = (page) => page.locator('.ds-actionbar .ds-btn--lg');

async function playLesson(page, w, l, shotTypes) {
  if (!l.steps) return true;
  await page.evaluate(() => { delete window.__lp; });
  await page.goto(`${url}#/leccion/${w.id}/${l.id}`);
  const mounted = await page.waitForFunction(() => window.__lp, null, { timeout: 5000 }).then(() => true).catch(() => false);
  if (!mounted) { errors.push(`${w.id}/${l.id}: la lección no montó (${(await page.textContent('body')).slice(0, 120)})`); await page.screenshot({ path: join(shots, `FAIL-${l.id}-mount.png`) }); return false; }
  await page.evaluate(() => window.__lp.start());
  for (let i = 0; i < l.steps; i++) {
    const okWait = await page.waitForFunction((n) => window.__lp && window.__lp.started && window.__lp.index === n, i, { timeout: 5000 }).then(() => true).catch(() => false);
    if (!okWait) { errors.push(`${w.id}/${l.id}: no avanzó al paso ${i + 1} (${await page.evaluate(() => JSON.stringify(window.__lp ?? null))})`); await page.screenshot({ path: join(shots, `FAIL-${l.id}-${i}.png`) }); return false; }
    const type = await page.evaluate(() => window.__lp.type);
    if (shotTypes && !seen.has(type)) { seen.add(type); await page.waitForTimeout(300); await page.screenshot({ path: join(shots, `step-${type}.png`) }); }
    await page.evaluate(() => window.__lp.solve());
    const btn = primary(page);
    await page.waitForFunction(() => {
      const action = document.querySelector('.ds-actionbar .ds-btn--lg');
      return action instanceof HTMLButtonElement && !action.disabled;
    }, null, { timeout: 1500 }).catch(() => false);
    if (!(await btn.isEnabled())) { errors.push(`${w.id}/${l.id} paso ${i + 1} (${type}): botón deshabilitado tras resolver`); return false; }
    const label = await btn.innerText();
    await btn.click({ force: true });
    if (/Comprobar/.test(label)) {
      if (!(await page.locator('.ds-actionbar.is-correct').count())) { errors.push(`${w.id}/${l.id} paso ${i + 1} (${type}): la solución no se marcó como correcta`); return false; }
      await primary(page).click({ force: true });
    }
    passed++;
  }
  const done = await page.waitForSelector('.lc', { timeout: 5000 }).then(() => true).catch(() => false);
  if (!done) errors.push(`${w.id}/${l.id}: no llegó a la pantalla de cierre`);
  return done;
}

// ---------- 1. Todo el año ----------
const phone = await newPage({ width: 390, height: 844 }, true);
await phone.goto(url);
await phone.waitForSelector('.onboarding__panel, #onb-name', { timeout: 10000 });
if (await phone.locator('.onboarding__panel').count()) {
  await phone.getByRole('button', { name: 'Continuar' }).click();
  await phone.getByRole('radio', { name: /Sexto Primaria/ }).click();
  await phone.getByRole('button', { name: 'Continuar' }).click();
  await phone.locator('.onboarding__field input').fill('Ixchel');
  for (let step = 0; step < 4; step++) await phone.getByRole('button', { name: 'Continuar' }).click();
  await phone.getByRole('button', { name: 'Entrar a Socrates' }).click();
} else {
  await phone.fill('#onb-name', 'Ixchel');
  await phone.click('text=¡Empezar a aprender!');
}
await phone.screenshot({ path: join(shots, '01-hoy.png') });
const savedState = await phone.evaluate(() => Object.entries(localStorage));
const toPlay = quick ? course.filter((w) => [1, 9, 10].includes(w.semana) || !w.semana).slice(0, 5)
  : unidad ? course.filter((w) => w.semana && Math.ceil(w.semana / 10) === unidad && (!semana || w.semana === semana)) : course;
for (const w of toPlay) {
  for (const l of w.lessons) {
    if (await playLesson(phone, w, l, true)) lessonsOk++;
    if (w.semana === 1 && l.id.endsWith('reto')) await phone.screenshot({ path: join(shots, '03-cierre-reto.png'), fullPage: true });
  }
  if (unidad) console.log(`Semana ${w.semana}: ${lessonsOk} lecciones recorridas, ${errors.length} errores`);
}

if (unidad) {
  const tablet = await newPage({ width: 820, height: 1180 }, true, savedState);
  for (const w of toPlay) for (const l of w.lessons.filter((lesson) =>
    lesson.id.endsWith('taller') || lesson.kind === 'proyecto' || lesson.kind === 'evaluacion')) {
    if (await playLesson(tablet, w, l, false)) lessonsOk++;
  }
  for (const week of [11, 19, 20]) {
    await phone.goto(`${url}#/semana/s${week}`);
    if (!(await phone.locator('.ds-page').count())) errors.push(`semana ${week}: pantalla no renderizó`);
  }
  if (unidad === 2) {
    const probe = await newPage({ width: 390, height: 844 }, true, savedState);
    await probe.goto(`${url}#/leccion/s11/s11-d5-taller`);
    await probe.waitForFunction(() => window.__lp);
    await probe.evaluate(() => window.__lp.start());
    for (let step = 0; step < 4; step++) {
      await probe.waitForFunction((index) => window.__lp.started && window.__lp.index === index, step);
      await probe.evaluate(() => window.__lp.solve());
      await probe.waitForTimeout(25);
      const label = await primary(probe).innerText();
      await primary(probe).click({ force: true });
      if (/Comprobar/.test(label)) {
        await probe.locator('.ds-actionbar.is-correct').waitFor();
        await primary(probe).click({ force: true });
      }
    }
    await probe.waitForFunction(() => window.__lp.index === 4);
    await probe.getByRole('button', { name: /Consultar a las tejedoras, contar visitas/ }).click();
    await primary(probe).click({ force: true });
    if (!(await probe.locator('.ds-actionbar.is-correct').count())) errors.push('s11 taller: decisión real no se marcó como correcta');
    else passed++;
  }
  await browser.close();
  console.log(`\nE2E Unidad ${unidad}: ${lessonsOk} recorridos completos · ${passed} pasos OK`);
  if (errors.length) {
    console.log(`✖ ${errors.length} errores:`);
    errors.slice(0, 80).forEach((error) => console.log(`  ${error}`));
    process.exit(1);
  }
  console.log('✔ Sin errores');
  process.exit(0);
}

// ---------- 2. Pantallas ----------
const routes = ['#/', '#/anio', '#/semana/s01', '#/semana/s10', '#/repaso', '#/explorar', '#/explorar/cnt', '#/cuaderno', '#/perfil', '#/logros', '#/docente', '#/medios', '#/sistema', '#/ajustes'];
for (const r of routes) {
  await phone.goto(url + r); await phone.waitForTimeout(450);
  await phone.screenshot({ path: join(shots, `screen-${r.replace(/[^a-z0-9]/gi, '_') || 'hoy'}.png`), fullPage: true });
  if (!(await phone.locator('.ds-page').count())) errors.push(`pantalla ${r} no renderizó`); else passed++;
}
await phone.goto(`${url}#/leccion/s01/s01-d1-planeta`); await phone.waitForTimeout(400);
await phone.screenshot({ path: join(shots, '02-intro-leccion.png'), fullPage: true });

// ---------- 3. Interacciones reales ----------
const p2 = await newPage({ width: 390, height: 844 }, true, savedState);
async function openStep(page, mission, lesson, index) {
  await page.goto(`${url}#/perfil`); await page.waitForTimeout(100);
  await page.evaluate(() => { delete window.__lp; }).catch(() => {});
  await page.goto(`${url}#/leccion/${mission}/${lesson}`);
  await page.waitForFunction(() => window.__lp);
  await page.getByRole('button', { name: /^(Empezar|Repetir)/ }).click();
  for (let i = 0; i < index; i++) {
    await page.waitForFunction((n) => window.__lp.index === n, i);
    await page.evaluate(() => window.__lp.solve()); const t = await primary(page).innerText(); await primary(page).click(); if (/Comprobar/.test(t)) await primary(page).click();
  }
  await page.waitForFunction((n) => window.__lp.index === n, index);
}
async function expectCorrect(page, what) {
  if (await page.locator('.ds-actionbar.is-correct').count()) passed++;
  else { errors.push(`interacción real falló: ${what}`); await page.screenshot({ path: join(shots, `FAIL-${what.replace(/\W+/g, '_')}.png`) }); }
}
// sort (toque-toque): hecho / opinión en s01-d1 paso 2
await openStep(p2, 's01', 's01-d1-planeta', 1);
const sortAns = { 'El Génesis es': 'Hecho', 'La Tierra gira': 'Hecho', 'El clima de la costa': 'Opinión', 'Quetzaltenango está': 'Hecho', 'Creo que los volcanes': 'Opinión' };
for (const [item, bucket] of Object.entries(sortAns)) {
  await p2.click(`.act-pool .act-token:has-text("${item}")`);
  await p2.click(`.act-bucket:has(.act-bucket__label:has-text("${bucket}"))`);
}
await primary(p2).click(); await expectCorrect(p2, 'sort (toque-toque)');
// true-false real (s01-d1 paso 7)
await openStep(p2, 's01', 's01-d1-planeta', 6);
const tf = [true, false, false, true];
for (let i = 0; i < tf.length; i++) await p2.locator('.act-tf').nth(i).locator(tf[i] ? '.act-tf__btn.t' : '.act-tf__btn.f').click();
await primary(p2).click(); await expectCorrect(p2, 'true-false (toques)');
// fill-blank real (s01-d2 paso 4)
await openStep(p2, 's01', 's01-d2-celulas-movimiento', 3);
for (const [index, word] of ['ADN', 'cromosomas', 'gen', '46'].entries()) {
  await p2.click(`.act-fb__bank .act-token:text-is("${word}")`);
  if (index < 3) await p2.getByRole('button', { name: 'Siguiente frase' }).click();
}
await p2.screenshot({ path: join(shots, '06-fill-real.png') });
await primary(p2).click(); await expectCorrect(p2, 'fill-blank (banco de palabras)');
// numpad real (diagnóstico paso 2)
await openStep(p2, 's01', 's01-d0-diagnostico', 1);
for (const k of ['5', '0', '6']) await p2.click(`.act-key[aria-label="${k}"]`);
await primary(p2).click(); await expectCorrect(p2, 'number-input (teclado)');

// ---------- 4. Tableta ----------
const tab = await newPage({ width: 820, height: 1180 }, true, savedState);
for (const [r, n] of [['#/', '09-tablet-hoy'], ['#/anio', '10-tablet-anio'], ['#/semana/s01', '11-tablet-semana']]) {
  await tab.goto(url + r); await tab.waitForTimeout(450); await tab.screenshot({ path: join(shots, `${n}.png`) });
}

await browser.close();
console.log(`\nE2E: ${lessonsOk} lecciones completas · ${passed} verificaciones OK`);
if (errors.length) { console.log(`✖ ${errors.length} errores:`); errors.slice(0, 80).forEach((e) => console.log('  ' + e)); process.exit(1); }
console.log('✔ Sin errores');
