/**
 * Brief para autores de MATERIAS:  tsx scripts/area-brief.ts <area> <unidad> [--material]
 *  - competencias del grado del área
 *  - por semana de aprendizaje de la unidad: contenidos del plan (id, tipo, texto) agrupados por indicador
 *  - con --material: pasos YA escritos en las semanas integradas (sNN.ts) que trabajan esa área,
 *    para reutilizar buenas explicaciones, contextos y actividades (abrir el archivo y buscar el id).
 */
import { readFileSync } from 'node:fs';
import { WEEKS } from '../src/content/index';
import { LECCIONES_POR_SEMANA, HORARIO, DIAS } from '../src/content/sexto/horario';

const [area, u, flag] = process.argv.slice(2);
const unidad = Number(u);
if (!area || !unidad) { console.log('uso: tsx scripts/area-brief.ts <area> <unidad> [--material]'); process.exit(1); }
const cat = JSON.parse(readFileSync(new URL('../src/cnb/generated/sexto-grado.json', import.meta.url), 'utf8'));
const plan = JSON.parse(readFileSync(new URL('../src/content/sexto/plan.json', import.meta.url), 'utf8'));
const A = cat.areas[area];
const idx: Record<string, { k: any; i: any; c: any }> = {};
for (const c of A.competencias) for (const i of c.indicadores) for (const k of i.contenidos) idx[k.id] = { k, i, c };

console.log(`# ${A.nombre} (${area}) · Unidad ${unidad}`);
console.log(`Lecciones por semana: ${LECCIONES_POR_SEMANA[area]} → días: ${([1, 2, 3, 4, 5] as const).filter((d) => HORARIO[d].includes(area as never)).map((d) => DIAS[d - 1]).join(', ')}`);
console.log('\n## Competencias de grado');
for (const c of A.competencias) console.log(`- ${c.id}: ${c.text}`);
const weeks = plan.unidades.find((x: any) => x.unidad === unidad).semanas.filter((s: any) => s.tipo === 'aprendizaje');
for (const w of weeks) {
  const ids: string[] = w.contenidos?.[area] ?? [];
  const wk = WEEKS.find((x) => x.semana === w.semana);
  console.log(`\n## Semana ${w.semana} — tema de la semana: "${wk?.temaGenerador ?? ''}" (${ids.length} contenidos del plan)`);
  let last = '';
  for (const id of ids) {
    const { k, i } = idx[id];
    if (i.id !== last) { console.log(`  Indicador ${i.id}: ${i.text}`); last = i.id; }
    console.log(`    - ${id} [${k.tipo}] ${k.text}`);
  }
  if (flag === '--material' && wk) {
    const steps = [...wk.lessons.filter((l) => l.kind !== 'materia').flatMap((l) => l.steps), ...(wk.bank ?? [])]
      .filter((s) => s.areas.includes(area as never));
    if (steps.length) console.log(`  Material existente en s${String(w.semana).padStart(2, '0')}.ts (${steps.length} pasos):`);
    for (const s of steps) console.log(`    · ${s.id} [${s.type}/${s.fase}] ${s.prompt.replace(/\s+/g, ' ').slice(0, 150)}  {${s.cnb.join(',')}}`);
  }
}
