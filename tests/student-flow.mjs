import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { resolve } from 'node:path';
import { chromium } from 'playwright';

const entry = `import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import '@/design-system/global.css';
import '@/activities/activities.css';
import '@/activities/precision.css';
import fill from '@/activities/fill-blank';
import reflection from '@/activities/reflection';
const defs={fill,reflection};
const root=createRoot(document.getElementById('root'));
function Fixture({type,props}) {
  const [value,setValue]=useState(); const [ready,setReady]=useState(false);
  const C=defs[type].Component;
  return <><C step={{id:'student-flow'}} props={props} value={value} onChange={setValue}
    status="answering" api={{setReady}} /><output id="answer">{JSON.stringify(value)}</output>
    <output id="ready">{String(defs[type].isReady?.(props,value) ?? ready)}</output></>;
}
window.mount=(type,props)=>root.render(<Fixture key={type} type={type} props={props}/>);`;
const bundle = await build({ stdin: { contents: entry, resolveDir: resolve('.'), loader: 'tsx' },
  bundle: true, write: false, outdir: '/tmp/student-flow', format: 'iife', jsx: 'automatic',
  alias: { '@': resolve('src') }, define: { 'process.env.NODE_ENV': '"production"' }, logLevel: 'silent' });
const js = bundle.outputFiles.find((file) => file.path.endsWith('.js')).text.replace(/<\/script/gi, '<\\/script');
const css = bundle.outputFiles.find((file) => file.path.endsWith('.css')).text;
const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, locale: 'es-GT' });
  await page.setContent(`<style>${css}#root{max-width:650px;margin:auto;padding:16px}</style><div id="root"></div><script>${js}</script>`);
  await page.evaluate(() => window.mount('fill', {
    text: 'El [[sol]] calienta. La [[luna]] ilumina.',
    distractors: ['agua', 'nube', 'fuego', 'árbol', 'río'],
  }));
  await page.getByText('El', { exact: false }).first().waitFor();
  if (process.env.CAPTURE_STUDENT_FLOW) await page.screenshot({ path: '/private/tmp/socrates-fill-student.png' });
  assert.equal(await page.getByText('Consultar texto completo').count(), 0, 'sin panel extra antes de terminar');
  assert.ok(await page.locator('.act-fb__bank button').count() <= 4, 'máximo cuatro opciones por frase');
  assert.doesNotMatch(await page.locator('.act-fb__text').first().textContent(), /La.*ilumina/);
  await page.getByRole('button', { name: 'sol', exact: true }).click();
  await page.getByRole('button', { name: 'Siguiente frase' }).click();
  assert.match(await page.locator('.act-fb__text').first().textContent(), /La.*ilumina/);
  assert.doesNotMatch(await page.locator('.act-fb__text').first().textContent(), /calienta/);
  await page.getByRole('button', { name: 'luna', exact: true }).click();
  assert.equal(await page.locator('#ready').textContent(), 'true');
  assert.equal(await page.getByText('Consultar texto completo').count(), 1);

  await page.evaluate(() => window.mount('reflection', {
    statements: ['Escucho a mis compañeros', 'Comparto mis ideas'], commitments: ['Seguir escuchando'],
  }));
  await page.getByText('Escucho a mis compañeros').waitFor();
  if (process.env.CAPTURE_STUDENT_FLOW) await page.screenshot({ path: '/private/tmp/socrates-reflection-student.png' });
  assert.equal(await page.getByRole('button', { name: 'Revisar mis respuestas' }).count(), 0);
  assert.equal(await page.getByRole('button', { name: 'Siguiente' }).isDisabled(), true);
  assert.equal(await page.getByRole('button', { name: 'Siguiente' }).getAttribute('class'), 'ds-btn');
  await page.getByRole('radio', { name: 'Con ayuda' }).click();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('radio', { name: '¡Sí, solo!' }).click();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('button', { name: 'Seguir escuchando' }).click();
  assert.equal(await page.getByRole('button', { name: 'Revisar mis respuestas' }).count(), 1);
  await page.waitForFunction(() => document.querySelector('#ready')?.textContent === 'true');
  assert.equal(await page.locator('#ready').textContent(), 'true');
  console.log('✔ Ejercicios secuenciales de completar y autoevaluación');
} finally {
  await browser.close();
}
