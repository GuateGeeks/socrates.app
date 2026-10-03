import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('manifest declares regular and maskable install icons', () => {
  const manifest = JSON.parse(readFileSync('public/manifest.webmanifest', 'utf8'));
  assert.equal(manifest.id, './');
  assert.equal(manifest.display, 'standalone');
  assert.ok(manifest.icons.some((x: { sizes: string; purpose?: string }) => x.sizes === '512x512' && x.purpose === 'any'));
  assert.ok(manifest.icons.some((x: { sizes: string; purpose?: string }) => x.sizes === '512x512' && x.purpose === 'maskable'));
});

test('service worker bypasses Firebase and supports offline navigation', () => {
  const sw = readFileSync('public/sw.js', 'utf8');
  assert.match(sw, /googleapis|firebaseio/);
  assert.match(sw, /navigate/);
  assert.match(sw, /SKIP_WAITING/);
});

test('html includes iOS install metadata', () => {
  const html = readFileSync('index.html', 'utf8');
  assert.match(html, /apple-mobile-web-app-capable/);
  assert.match(html, /apple-touch-icon/);
});
