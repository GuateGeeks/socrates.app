import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const url = pathToFileURL(resolve('dist-standalone/index.html')).href;
const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true });
  page.setDefaultTimeout(6000);
  await page.goto(url);
  await page.locator('.onboarding__panel').waitFor();
  await page.getByRole('button', { name: 'Continuar' }).click();

  for (const grade of ['4.º Primaria', '5.º Primaria', '1.º Básico', '2.º Básico', '3.º Básico']) {
    await page.getByText(grade, { exact: true }).waitFor();
    assert.equal(await page.getByRole('button', { name: grade }).count(), 0, `${grade} no debe poder seleccionarse`);
  }
  assert.equal(await page.locator('.onboarding__future-grade').count(), 5);
  await page.getByText('Formación adicional', { exact: true }).waitFor();
  await page.waitForTimeout(400);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
  await page.setViewportSize({ width: 320, height: 844 });
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, 'grados sin desbordamiento a 320 px con texto ampliado');
  if (process.env.CAPTURE_YEAR === '1') await page.screenshot({ path: '/private/tmp/socrates-program-choice-zoom.png', fullPage: true });
  await page.evaluate(() => { document.documentElement.style.fontSize = ''; });
  await page.setViewportSize({ width: 390, height: 844 });
  if (process.env.CAPTURE_YEAR === '1') await page.screenshot({ path: '/private/tmp/socrates-program-choice.png', fullPage: true });
  const aws = page.getByRole('radio', { name: /AWS Certified Cloud Practitioner/ });
  await aws.click();
  assert.equal(await aws.getAttribute('aria-checked'), 'true');
  await page.getByRole('radio', { name: /Sexto Primaria/ }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.locator('.onboarding__field input').fill('Ixchel');
  for (let step = 0; step < 4; step++) await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('button', { name: 'Entrar a Socrates' }).click();

  await page.goto(`${url}#/anio`);
  await page.getByRole('heading', { name: 'Mi año escolar' }).waitFor();
  await page.waitForTimeout(400);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
  await page.setViewportSize({ width: 320, height: 844 });
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, 'Mi año sin desbordamiento a 320 px con texto ampliado');
  const navLabelsOverlap = await page.locator('.ds-tabbar nav a span:last-child').evaluateAll((labels) => {
    const bounds = labels.map((label) => label.getBoundingClientRect());
    return bounds.some((rect, index) => index > 0 && rect.left < bounds[index - 1].right - 1);
  });
  assert.equal(navLabelsOverlap, false, 'los nombres de la navegación no deben montarse unos sobre otros');
  if (process.env.CAPTURE_YEAR === '1') await page.screenshot({ path: '/private/tmp/socrates-year-zoom.png', fullPage: true });
  await page.evaluate(() => { document.documentElement.style.fontSize = ''; });
  await page.setViewportSize({ width: 390, height: 844 });
  if (process.env.CAPTURE_YEAR === '1') await page.screenshot({ path: '/private/tmp/socrates-year.png', fullPage: true });
  assert.equal(await page.locator('#year-week,.yr__weeks').count(), 0, 'Mi año no debe mostrar el selector de 40 semanas ni el listado completo');
  assert.equal(await page.locator('.yr__unit').count(), 4);
  assert.equal(await page.getByText(/de 10 semanas/).count(), 4);
  assert.equal(await page.getByText(/249 lecciones/).count(), 0);
  await page.getByRole('button', { name: /Unidad 3/ }).click();
  const chosenTitle = page.getByRole('heading', { name: /Semana 21/ });
  await chosenTitle.waitFor();
  await page.waitForFunction(() => {
    const rect = document.getElementById('year-selected-title')?.getBoundingClientRect();
    return rect && rect.y >= 0 && rect.y < 700;
  }, null, { timeout: 1500 });
  await page.getByRole('button', { name: 'Semana anterior' }).click();
  await page.getByRole('heading', { name: /Semana 20/ }).waitFor();
  await page.getByRole('button', { name: /Unidad 1/ }).click();
  await page.getByRole('button', { name: 'Semana siguiente' }).click();
  await page.getByRole('heading', { name: /Semana 2/ }).waitFor();
  await page.getByRole('button', { name: 'Abrir semana' }).click();
  await page.getByRole('button', { name: 'Volver al año' }).waitFor();

  await page.goto(`${url}#/ajustes`);
  await page.waitForTimeout(400);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
  assert.equal(await page.locator('.settings__future-grade').count(), 5);
  await page.getByText('Formación adicional', { exact: true }).waitFor();
  if (process.env.CAPTURE_YEAR === '1') await page.screenshot({ path: '/private/tmp/socrates-settings-grades.png', fullPage: true });
  console.log('✔ Mi año secuencial y grados futuros visibles sin acceso');
} finally {
  await browser.close();
}
