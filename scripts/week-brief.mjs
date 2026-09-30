#!/usr/bin/env node
/** Muestra los contenidos del CNB asignados a una semana (para autores).  node scripts/week-brief.mjs 5 */
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const cat = JSON.parse(readFileSync(join(root, 'src/cnb/generated/sexto-grado.json'), 'utf8'));
const plan = JSON.parse(readFileSync(join(root, 'src/content/sexto/plan.json'), 'utf8'));
const idx = {};
for (const [area, a] of Object.entries(cat.areas)) for (const c of a.competencias) for (const i of c.indicadores) for (const k of i.contenidos) idx[k.id] = { area, k, i, c };
for (const n of process.argv.slice(2).map(Number)) {
  const w = plan.unidades.flatMap((u) => u.semanas).find((s) => s.semana === n);
  if (!w) { console.log(`Semana ${n} no existe`); continue; }
  console.log(`\n=== SEMANA ${n} · Unidad ${Math.ceil(n / 10)} · ${w.tipo}${w.total ? ` · ${w.total} contenidos` : ''} ===`);
  if (!w.contenidos) { console.log('(sin contenidos asignados: semana de proyecto o validación)'); continue; }
  for (const [area, ids] of Object.entries(w.contenidos)) {
    console.log(`\n## ${cat.areas[area].nombre} (${area})`);
    let lastInd = '';
    for (const id of ids) {
      const { k, i } = idx[id];
      if (i.id !== lastInd) { console.log(`  Indicador ${i.id}: ${i.text}`); lastInd = i.id; }
      console.log(`    - ${id} [${k.tipo}] ${k.text}`);
    }
  }
}
