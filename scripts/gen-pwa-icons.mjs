import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const output = new URL('../public/icons/', import.meta.url);
const source = new URL('../public/icon.svg', import.meta.url);
await mkdir(output, { recursive: true });
for (const size of [192, 512]) {
  await sharp(fileURLToPath(source)).resize(size, size).png().toFile(fileURLToPath(new URL(`icon-${size}.png`, output)));
  const inner = Math.round(size * .72);
  const pad = Math.floor((size - inner) / 2);
  await sharp(fileURLToPath(source)).resize(inner, inner).extend({ top: pad, bottom: size - inner - pad, left: pad, right: size - inner - pad, background: '#1F6F8B' }).png().toFile(fileURLToPath(new URL(`maskable-${size}.png`, output)));
}
console.log('✔ PWA icons generated');
