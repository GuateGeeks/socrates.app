import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const url = pathToFileURL(resolve('dist-standalone/index.html')).href;
const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true });
  page.setDefaultTimeout(5000);
  page.on('pageerror', (error) => console.error(error.message));
  await page.goto(url);
  await page.locator('.onboarding__panel').waitFor();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: /Sexto Primaria/ }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.locator('.onboarding__field input').fill('Ixchel');
  for (let step = 0; step < 4; step++) await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('button', { name: 'Entrar a Socrates' }).click();
  await page.goto(`${url}#/perfil`);
  await page.getByRole('heading', { name: 'Ixchel' }).waitFor();
  await page.getByRole('button', { name: 'Editar mi nombre o grado' }).click();
  await page.getByRole('heading', { name: 'Mis datos y ajustes' }).waitFor();
  assert.equal(await page.getByLabel('Tu nombre').inputValue(), 'Ixchel');
  assert.equal(await page.getByRole('button', { name: /Sexto Primaria · disponible/ }).getAttribute('aria-pressed'), 'true');
  for (const route of ['docente', 'medios', 'sistema']) {
    await page.goto(`${url}#/${route}`);
    await page.getByRole('heading', { name: 'Ixchel' }).waitFor();
    assert.equal(await page.getByText(/Vista docente|Medios por producir|Sistema de diseño/).count(), 0, route);
  }
  await page.goto(`${url}#/explorar`);
  await page.getByRole('heading', { name: 'Mis materias' }).waitFor();
  assert.equal(await page.getByText('Explorar el CNB').count(), 0);
  console.log('✔ Los datos de ingreso se pueden revisar desde Perfil');
} finally {
  await browser.close();
}
