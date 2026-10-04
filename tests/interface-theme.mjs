import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
const css = ['src/design-system/tokens.css', 'src/design-system/global.css', 'src/aws/aws.css', 'src/startup/startup.css', 'src/screens/screens.css', 'src/screens/encuesta-beta.css', 'src/activities/activities.css']
  .map(file => readFileSync(file, 'utf8').replace(/^@import.*$/gm, '')).join('\n');
const luminance = rgb => rgb.slice(0, 3).map(v => v / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4)
  .reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0);
const errors = [];
try {
  for (const system of ['light', 'dark']) for (const app of ['auto', 'light', 'dark']) {
    await page.emulateMedia({ colorScheme: system });
    await page.setContent(`<style>${css}</style><div class="aws-page">
      <a class="aws-back">Volver al temario</a><p class="ds-muted">Descripción</p>
      <div class="aws-options"><button class="is-selected"><span>A</span>Respuesta</button></div>
      <div class="aws-feedback is-correct">Correcto</div><div class="aws-feedback">Revisa</div>
      <button class="ds-btn">Continuar</button><button class="ds-btn ds-btn--ok">Correcto</button>
      <button class="ds-btn ds-btn--bad">Error</button>
      <p class="ds-section-title">Sección</p><span class="ds-chip ds-chip--solid test-gold" style="--chip:var(--c-maiz)">Explorar</span><span class="we-num" style="--mission:var(--c-maiz)">1</span><span class="ms__lv--destacado">Destacado</span><span class="yr__now">Hoy</span><span class="ds-chip ds-chip--solid" style="--chip:var(--c-ok-fill, var(--c-ok))">Producido</span><div class="lrow is-done"><span class="lrow__ico">✓</span></div><span class="survey-intro__icon">✓</span></div>
      <div class="onboarding"><label class="onboarding__field">Nombre<input value="Ixchel"></label>
      <div class="onboarding__prefs"><label>Tema<select><option>Claro</option></select></label></div></div>`);
    await page.evaluate(theme => {
      if (theme === 'auto') delete document.documentElement.dataset.theme;
      else document.documentElement.dataset.theme = theme;
    }, app);
    const expected = app === 'auto' ? system : app;
    assert.ok((await page.evaluate(() => getComputedStyle(document.documentElement).colorScheme)).includes(expected));
    for (const selector of ['.aws-back', '.ds-muted', '.aws-options button', '.aws-options button span', '.aws-feedback.is-correct', '.aws-feedback:not(.is-correct)', '.ds-btn', '.ds-btn--ok', '.ds-btn--bad', '.ds-section-title', '.onboarding input', '.onboarding select', '.ms__lv--destacado', '.yr__now', '.ds-chip--solid:not(.test-gold)', '.lrow__ico', '.survey-intro__icon', '.test-gold', '.we-num']) {
      const colors = await page.locator(selector).first().evaluate(el => {
        const color = getComputedStyle(el).color;
        let node = el;
        while (node && getComputedStyle(node).backgroundColor === 'rgba(0, 0, 0, 0)') node = node.parentElement;
        // Canvas normalizes rgb(), color(srgb ...) and color-mix() to 0–255 channels.
        const canvas = document.createElement('canvas'); canvas.width = canvas.height = 1;
        const ctx = canvas.getContext('2d');
        const channels = value => { ctx.clearRect(0, 0, 1, 1); ctx.fillStyle = value; ctx.fillRect(0, 0, 1, 1); return [...ctx.getImageData(0, 0, 1, 1).data]; };
        return { color: channels(color), background: channels(node ? getComputedStyle(node).backgroundColor : 'white') };
      });
      const fg = luminance(colors.color);
      const bg = luminance(colors.background);
      const ratio = (Math.max(fg, bg) + .05) / (Math.min(fg, bg) + .05);
      if (ratio < 4.5) errors.push(`${system}/${app} ${selector}: ${ratio.toFixed(2)} ${JSON.stringify(colors)}`);
    }
  }
  assert.deepEqual(errors, [], 'Text contrast must be at least 4.5:1');
  console.log('PASS: six system/app theme combinations, 19 text/control pairs each.');
} finally { await browser.close(); }
