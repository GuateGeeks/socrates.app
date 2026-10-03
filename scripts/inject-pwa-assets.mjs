import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const dist = resolve('dist');
const files = [];
function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name !== 'sw.js') files.push(`./${relative(dist, path).replaceAll('\\', '/')}`);
  }
}
walk(dist);
const serviceWorker = join(dist, 'sw.js');
const source = readFileSync(serviceWorker, 'utf8').replace(/const SHELL = \[[^;]+;/, `const SHELL = ${JSON.stringify(files)};`);
writeFileSync(serviceWorker, source);
console.log(`✔ ${files.length} production assets added to the offline shell`);
