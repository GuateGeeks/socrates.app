import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const url = pathToFileURL(resolve('dist-standalone/index.html')).href;
const browser = await chromium.launch({
  ...(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {}),
  ...(process.env.NO_WEBGL === '1' ? { args: ['--disable-webgl', '--disable-webgl2'] } : {}),
});
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true });
  page.setDefaultTimeout(7000);
  await page.addInitScript(() => { window.__SOCRATES_TEST__ = true; });
  await page.goto(url);
  await page.locator('.onboarding__panel').waitFor();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: /Sexto Primaria/ }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.locator('.onboarding__field input').fill('Ixchel');
  for (let step = 0; step < 4; step++) await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('button', { name: 'Entrar a Socrates' }).click();
  await page.goto(`${url}#/leccion/s01/s01-d0-diagnostico`);
  await page.getByRole('button', { name: 'Empezar' }).click();
  const action = page.locator('.ds-actionbar .ds-btn--lg');
  for (let index = 0; index < 10; index++) {
    await page.waitForFunction((i) => window.__lp?.index === i, index).catch(async (error) => {
      console.error(`Esperando paso ${index}`, await page.evaluate(() => ({ hook: window.__lp, text: document.body.innerText.slice(-500) })));
      throw error;
    });
    if (index === 2) {
      if (process.env.NO_WEBGL === '1') {
        await page.locator('.fraction-model__fallback').waitFor();
        await page.getByRole('button', { name: 'Pintar parte 1 de 2' }).click();
        assert.equal(await page.getByText(/Pintaste 1 de 2 partes/).count(), 1);
      } else {
        const canvas = page.locator('.fraction-model__scene canvas');
        await canvas.waitFor();
        const box = await canvas.boundingBox();
        assert.ok(box && box.width > 200);
        let interacted = false;
        for (const [x, y] of [[0.72, 0.53], [0.78, 0.42], [0.68, 0.65]]) {
          await canvas.click({ position: { x: box.width * x, y: box.height * y } });
          interacted = await page.getByText(/Pintaste 1 de 2 partes/).count() > 0;
          if (interacted) break;
        }
        assert.ok(interacted, 'Tocar la pieza 3D debe pintarla');
      }
      if (process.env.CAPTURE_DIAGNOSTIC === '1') await page.screenshot({ path: '/private/tmp/socrates-diagnostic-3d.png' });
    }
    await page.evaluate(() => window.__lp.solve());
    await action.waitFor();
    await page.waitForFunction(() => {
      const button = document.querySelector('.ds-actionbar .ds-btn--lg');
      return button instanceof HTMLButtonElement && !button.disabled;
    });
    const label = await action.innerText();
    await action.click({ force: true });
    if (/Comprobar/.test(label)) {
      await page.locator('.ds-actionbar.is-correct').waitFor().catch(async (error) => {
        console.error(`La respuesta del paso ${index} no llegó a correcto`, await page.evaluate(() => document.body.innerText.slice(-500)));
        throw error;
      });
      await action.click({ force: true });
    }
  }
  await page.getByRole('heading', { name: '¿Cómo te pareció Socrates?' }).waitFor();
  if (process.env.CAPTURE_DIAGNOSTIC === '1') await page.screenshot({ path: '/private/tmp/socrates-survey-invite.png' });
  await page.getByRole('button', { name: 'Calificar la plataforma' }).click();
  await page.getByRole('heading', { name: 'Encuesta beta' }).waitFor();
  assert.equal(await page.evaluate(() => localStorage.getItem('socrates.survey-invite.v1')), 'seen');
  console.log(`✔ Modelo de fracciones ${process.env.NO_WEBGL === '1' ? 'sin WebGL' : '3D'} e invitación a encuesta tras la primera lección`);
} finally {
  await browser.close();
}
