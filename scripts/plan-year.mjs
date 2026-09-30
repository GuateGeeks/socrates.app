#!/usr/bin/env node
/**
 * plan-year.mjs — Distribuye TODOS los contenidos del CNB de un grado en el ciclo escolar.
 *
 *   node scripts/plan-year.mjs [grado]      → src/content/<grado>/plan.json
 *
 * Calendario (40 semanas, 5 lecciones por semana):
 *   Unidad n (n = 1..4) = 10 semanas:
 *     semanas 1-8  → aprendizaje (4 lecciones + 1 Reto semanal de validación)
 *     semana 9     → Proyecto integrador
 *     semana 10    → Semana de validación (evaluación de unidad armada con los bancos de ítems)
 *
 * Reglas de asignación:
 *   1. Se respeta la columna "Unidades" de la dosificación (un contenido solo va a una unidad marcada).
 *   2. Contenidos marcados en varias unidades se reparten para equilibrar la carga por área,
 *      conservando el orden de la dosificación (secuencia pedagógica).
 *   3. Dentro de cada unidad, los contenidos de cada área se reparten en orden en las 8 semanas.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const grado = process.argv[2] ?? 'sexto-grado';
const cat = JSON.parse(readFileSync(join(root, 'src/cnb/generated', `${grado}.json`), 'utf8'));
const WEEKS_PER_UNIT = 8;

const units = [1, 2, 3, 4].map((u) => ({ unidad: u, areas: {} }));
// Paso 1: contenidos de una sola unidad (fijos). Paso 2: los de varias unidades, del más
// restringido al más flexible, a la unidad permitida con menos carga global (equilibrio del año).
const all = [];
let seq = 0;
for (const [area, a] of Object.entries(cat.areas)) {
  for (const c of a.competencias) for (const i of c.indicadores) for (const k of i.contenidos) all.push({ area, id: k.id, allowed: k.unidades.length ? k.unidades : [1], seq: seq++ });
}
const load = [0, 0, 0, 0, 0];
const assigned = new Map();
for (const k of all.filter((x) => x.allowed.length === 1)) { assigned.set(k.id, k.allowed[0]); load[k.allowed[0]]++; }
for (const k of all.filter((x) => x.allowed.length > 1).sort((a, b) => a.allowed.length - b.allowed.length || a.seq - b.seq)) {
  const u = k.allowed.reduce((best, x) => (load[x] < load[best] ? x : best), k.allowed[0]);
  assigned.set(k.id, u); load[u]++;
}
for (const k of all) (units[assigned.get(k.id) - 1].areas[k.area] ??= []).push(k.id);

const plan = { grado, semanasPorUnidad: 10, leccionesPorSemana: 5, unidades: [] };
for (const u of units) {
  const weeks = Array.from({ length: WEEKS_PER_UNIT }, (_, w) => ({ semana: (u.unidad - 1) * 10 + w + 1, tipo: 'aprendizaje', contenidos: {} }));
  for (const [area, ids] of Object.entries(u.areas)) {
    ids.forEach((id, i) => {
      const w = Math.min(WEEKS_PER_UNIT - 1, Math.floor((i * WEEKS_PER_UNIT) / ids.length));
      (weeks[w].contenidos[area] ??= []).push(id);
    });
  }
  for (const w of weeks) w.total = Object.values(w.contenidos).reduce((s, l) => s + l.length, 0);
  plan.unidades.push({
    unidad: u.unidad,
    total: Object.values(u.areas).reduce((s, l) => s + l.length, 0),
    semanas: [
      ...weeks,
      { semana: (u.unidad - 1) * 10 + 9, tipo: 'proyecto' },
      { semana: (u.unidad - 1) * 10 + 10, tipo: 'validacion' },
    ],
  });
}
const out = join(root, 'src/content', grado.replace('-grado', ''), 'plan.json');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(plan, null, 1));
console.log(`✔ ${out}`);
for (const u of plan.unidades) console.log(`  Unidad ${u.unidad}: ${u.total} contenidos · semanas ${u.semanas.filter((s) => s.tipo === 'aprendizaje').map((s) => s.total).join(' / ')}`);
