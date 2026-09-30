#!/usr/bin/env node
/**
 * gen-icons.mjs — `npm run icons`
 * 1. Lee la lista de íconos de lucide-react instalado → scripts/lucide-names.json (la usa el validador).
 * 2. Escanea src/ en busca de nombres de íconos en uso (cadenas PascalCase que existen en Lucide).
 * 3. Genera src/design-system/icons.generated.ts importando SOLO esos íconos (bundle pequeño).
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pkgDir = join(root, 'node_modules', 'lucide-react');
if (!existsSync(pkgDir)) { console.error('✖ lucide-react no está instalado. Ejecuta `npm install`.'); process.exit(1); }

let names;
try {
  const mod = await import('lucide-react');
  names = Object.keys(mod).filter((k) => /^[A-Z]/.test(k) && !k.endsWith('Icon') && !k.startsWith('Lucide') && k !== 'Icon' && k !== 'createLucideIcon');
} catch {
  const cached = join(root, 'scripts', 'lucide-names.json');
  if (existsSync(cached)) names = JSON.parse(readFileSync(cached, 'utf8'));
}
if (!names) {
  const dts = readFileSync(join(pkgDir, 'dist', 'lucide-react.d.ts'), 'utf8');
  names = [...dts.matchAll(/declare const ([A-Z][A-Za-z0-9]+):/g)].map((m) => m[1]).filter((k) => !k.endsWith('Icon') && !k.startsWith('Lucide'));
}
const all = new Set(names);
writeFileSync(join(root, 'scripts', 'lucide-names.json'), JSON.stringify([...all].sort()));

const used = new Set();
const unknown = new Map();
function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!/\.(tsx?|mjs)$/.test(f) || f === 'icons.generated.ts') continue;
    const src = readFileSync(p, 'utf8');
    for (const m of src.matchAll(/['"]([A-Z][A-Za-z0-9]+)['"]/g)) if (all.has(m[1])) used.add(m[1]);
    // nombres explícitos de ícono que no existen → error
    for (const m of src.matchAll(/(?:icon|Icon|leftIcon|rightIcon)\s*[:=]\s*\{?\s*['"]([A-Za-z0-9]+)['"]/g)) if (!all.has(m[1])) unknown.set(m[1], [...(unknown.get(m[1]) ?? []), p.replace(root + '/', '')]);
    for (const m of src.matchAll(/<Icon[^>]*\sname=["']([A-Za-z0-9]+)["']/g)) if (!all.has(m[1])) unknown.set(m[1], [...(unknown.get(m[1]) ?? []), p.replace(root + '/', '')]);
  }
}
walk(join(root, 'src'));
const list = [...used].sort();
writeFileSync(join(root, 'src/design-system/icons.generated.ts'),
  `// ARCHIVO GENERADO por \`npm run icons\` — no editar a mano. ${list.length} íconos de Lucide (ISC).\n` +
  `import type { ComponentType } from 'react';\n` +
  `import {\n${list.map((n) => `  ${n},`).join('\n')}\n} from 'lucide-react';\n\n` +
  `export type IconComponent = ComponentType<Record<string, unknown>>;\n` +
  `export const ICONS: Record<string, IconComponent> = {\n${list.map((n) => `  ${n},`).join('\n')}\n} as unknown as Record<string, IconComponent>;\n` +
  `export const ICON_NAMES: string[] = ${JSON.stringify(list)};\n`);
console.log(`✔ ${all.size} íconos en Lucide · ${list.length} en uso → src/design-system/icons.generated.ts`);
if (unknown.size) {
  console.log(`⚠ ${unknown.size} nombres de ícono inexistentes:`);
  for (const [n, files] of unknown) console.log(`  ${n}  (${[...new Set(files)].slice(0, 3).join(', ')})`);
}
