/**
 * Agenda de una semana (para integradores y revisores):  tsx scripts/week-agenda.ts 3 [4 5 …]
 * Lista por día las lecciones de materia con su título, objetivos, ideas clave y contenidos CNB.
 */
import { WEEKS } from '../src/content/index';
import { DIAS } from '../src/content/sexto/horario';
for (const n of process.argv.slice(2).map(Number)) {
  const w = WEEKS.find((x) => x.semana === n);
  if (!w) { console.log(`Semana ${n} no existe`); continue; }
  console.log(`\n=== SEMANA ${n} · Unidad ${w.unidad} · tema actual: "${w.temaGenerador}" ===`);
  for (const d of [1, 2, 3, 4, 5]) {
    const ls = w.lessons.filter((l) => (l.day ?? 1) === d);
    if (!ls.length) continue;
    console.log(`\n## ${DIAS[d - 1]}`);
    for (const l of ls) {
      const cnb = [...new Set(l.steps.flatMap((s) => s.cnb))].join(', ');
      console.log(`- [${l.kind ?? 'leccion'}${l.area ? `/${l.area}` : ''}] ${l.id} — ${l.title} (${l.minutes} min, ${l.steps.length} pasos)`);
      if (l.objetivos?.length) console.log(`    objetivos: ${l.objetivos.join(' | ')}`);
      if (l.resumen?.length) console.log(`    ideas clave: ${l.resumen.join(' | ')}`);
      console.log(`    cnb: ${cnb}`);
    }
  }
}
