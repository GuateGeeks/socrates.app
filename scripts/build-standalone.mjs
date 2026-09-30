#!/usr/bin/env node
/**
 * Genera una versión de UN SOLO ARCHIVO HTML (JS + CSS en línea) para:
 *  - abrir sin servidor (doble clic) en computadoras de escuela sin internet,
 *  - compartir por USB / WhatsApp,
 *  - publicar como demo.
 *
 *   node scripts/build-standalone.mjs            → dist-standalone/index.html
 *   node scripts/build-standalone.mjs --fragment → dist-standalone/fragment.html (sin <html>/<head>, para incrustar)
 */
import { build } from 'esbuild';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const fragment = process.argv.includes('--fragment');
const out = join(root, 'dist-standalone');
mkdirSync(out, { recursive: true });

const res = await build({
  entryPoints: [join(root, 'src/main.tsx')],
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2020',
  jsx: 'automatic',
  write: false,
  outdir: out,
  alias: { '@': join(root, 'src') },
  loader: { '.json': 'json', '.css': 'css' },
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'none',
  logLevel: 'warning',
});

const js = res.outputFiles.find((f) => f.path.endsWith('.js')).text.replace(/<\/script/gi, '<\\/script');
const css = res.outputFiles.find((f) => f.path.endsWith('.css'))?.text ?? '';
const icon = readFileSync(join(root, 'public/icon.svg'), 'utf8');
const font = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nunito:wght@500;700;800;900&display=swap" rel="stylesheet">';

const body = `<div id="root"></div>\n<style>${css}</style>\n<script>${js}</script>`;
const html = fragment
  ? `<title>Socrates Aprende</title>\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n${font}\n${body}`
  : `<!doctype html>
<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#1F6F8B"><title>Socrates Aprende</title>
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(icon)}">${font}</head>
<body>${body}</body></html>`;
const file = join(out, fragment ? 'fragment.html' : 'index.html');
writeFileSync(file, html);
console.log(`✔ ${file} (${(html.length / 1024).toFixed(0)} KB)`);
