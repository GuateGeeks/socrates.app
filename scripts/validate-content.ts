/**
 * Validador de contenido — `npm run validate` (opciones: --semanas=5,6,7  --strict  --quiet)
 *
 * Garantiza que todo lo publicado esté alineado al CNB y funcione:
 *  1. Cada paso usa una actividad registrada y sus props pasan la validación de esa actividad.
 *  2. Cada referencia CNB (indicador o contenido) EXISTE en el catálogo de la dosificación.
 *  3. Las respuestas-clave son consistentes: check(solution(props)) debe ser correcto.
 *  4. Estructura del año: semanas de aprendizaje = 4 lecciones + Reto semanal; banco de ítems;
 *     proyecto integrador; ids con prefijo de semana; medios con ficha de producción.
 *  5. Plan anual: cada contenido asignado a una semana en plan.json se trabaja en esa semana.
 *  6. Multidisciplinariedad y metodología E-A-E (explorar/construir → aplicar → comprobar → reflexionar).
 *  7. Íconos: todo nombre de ícono existe en Lucide (si está instalado).
 *  8. Materias (v3): cada semana de aprendizaje tiene las lecciones de cada materia que pide el horario
 *     (horario.ts), con ids sNN-<area>-<k>, enseñanza explícita, práctica y boleto de salida; cada
 *     materia cubre en su unidad TODOS los contenidos del plan de esa materia; la semana cierra con
 *     1 Taller interdisciplinario + 1 Reto.   Opciones: --unidad=1 (limita errores a esa unidad) · --materia=mat,l1
 */
import { readFileSync, existsSync } from 'node:fs';
import { registerAll } from '../src/activities/index';
import { getActivity } from '../src/core/registry';
import { lookup, areaOf, getCatalog } from '../src/cnb/catalog';
import { WEEKS, COURSE, missionAreas } from '../src/content/index';
import { MATERIA_UNITS } from '../src/content/sexto/materias/index';
import { LECCIONES_POR_SEMANA, MATERIAS } from '../src/content/sexto/horario';
import { WHEEL_CICLO_II } from '../src/cnb/model';
import type { Lesson, Mission, StepBase, MediaSlot } from '../src/core/types';

registerAll();
const argv = process.argv.slice(2);
const unidadArg = Number(argv.find((a) => a.startsWith('--unidad='))?.split('=')[1] ?? 0);
const only = argv.find((a) => a.startsWith('--semanas='))?.split('=')[1].split(',').map(Number)
  ?? (unidadArg ? Array.from({ length: 10 }, (_, i) => (unidadArg - 1) * 10 + i + 1) : undefined);
const strict = argv.includes('--strict');
/** --materia=mat,l1 → solo cuentan como errores los de esas materias (útil cuando varios autores trabajan en paralelo) */
const materiaArg = argv.find((a) => a.startsWith('--materia='))?.split('=')[1].split(',');
const quiet = argv.includes('--quiet');
const plan = JSON.parse(readFileSync(new URL('../src/content/sexto/plan.json', import.meta.url), 'utf8')) as {
  unidades: { unidad: number; semanas: { semana: number; tipo: string; contenidos?: Record<string, string[]> }[] }[];
};
const planWeeks = new Map(plan.unidades.flatMap((u) => u.semanas).map((s) => [s.semana, s]));

let iconNames: Set<string> | null = null;
const iconFile = new URL('./lucide-names.json', import.meta.url);
if (existsSync(iconFile)) iconNames = new Set(JSON.parse(readFileSync(iconFile, 'utf8')) as string[]);

const errors: string[] = [];
const migracionPendiente: number[] = [];
const materiasPendientes: string[] = [];
const warnings: string[] = [];
const pending: number[] = [];
const stepIds = new Set<string>();
const lessonIds = new Set<string>();
const mediaIds = new Set<string>();
const coveredInd = new Set<string>();
const coveredCont = new Set<string>();
let steps = 0, lessons = 0, media = 0;

const inScope = (w: Mission) => !only || only.includes(w.semana ?? -1);
const err = (w: Mission, msg: string) => (inScope(w) ? errors : warnings).push(msg);

function checkIcon(w: Mission, where: string, name?: string) {
  if (!name || !iconNames) return;
  if (!iconNames.has(name)) err(w, `${where} ícono Lucide inexistente: "${name}"`);
}
function collectIcons(obj: unknown, out: string[] = []): string[] {
  if (Array.isArray(obj)) obj.forEach((x) => collectIcons(x, out));
  else if (obj && typeof obj === 'object') for (const [k, v] of Object.entries(obj)) {
    if ((k === 'icon' || k === 'leftIcon' || k === 'rightIcon') && typeof v === 'string') out.push(v);
    else collectIcons(v, out);
  }
  return out;
}
function checkMedia(w: Mission, where: string, m?: MediaSlot) {
  if (!m) return;
  media++;
  if (mediaIds.has(m.id)) err(w, `${where} id de medio duplicado: ${m.id}`);
  mediaIds.add(m.id);
  if (!m.title || !m.alt) err(w, `${where} medio sin title/alt`);
  if (!m.brief || m.brief.length < 60) err(w, `${where} medio "${m.id}" con ficha de producción (brief) muy corta`);
  if ((m.kind === 'video' || m.kind === 'animation' || m.kind === 'audio') && !m.duration) warnings.push(`${where} medio ${m.id} sin duración sugerida`);
}

function checkStep(w: Mission, l: Lesson, s: StepBase, where: string, examMode: boolean) {
  steps++;
  if (stepIds.has(s.id)) err(w, `${where} id de paso duplicado: ${s.id}`);
  stepIds.add(s.id);
  const def = getActivity(s.type);
  if (!def) { err(w, `${where} actividad desconocida "${s.type}"`); return; }
  for (const e of def.validate?.(s.props as never) ?? []) err(w, `${where} ${s.type}: ${e}`);
  if (!s.areas?.length) err(w, `${where} sin áreas`);
  if (!s.prompt?.trim()) err(w, `${where} sin consigna`);
  checkMedia(w, where, s.media);
  for (const ic of collectIcons(s.props)) checkIcon(w, where, ic);
  for (const ref of s.cnb) {
    const n = lookup(ref);
    if (!n) { err(w, `${where} referencia CNB inexistente: ${ref}`); continue; }
    if (n.kind === 'contenido') { coveredCont.add(ref); coveredInd.add(n.indicador.id); }
    else if (n.kind === 'indicador') coveredInd.add(ref);
    if (!s.areas.includes(areaOf(ref))) warnings.push(`${where} referencia ${ref} de un área no listada en "areas"`);
  }
  if (def.graded) {
    if (!def.check) err(w, `${where} actividad calificada sin check()`);
    else if (def.solution) {
      try {
        const r = def.check(s.props as never, def.solution(s.props as never) as never);
        if (!r.correct) err(w, `${where} la solución no pasa su propio check() → clave de respuesta incorrecta`);
      } catch (e) { err(w, `${where} error al verificar solución: ${(e as Error).message}`); }
    }
    if (s.cnb.length === 0) err(w, `${where} actividad calificada sin referencia CNB`);
  }
  if (examMode && !def.graded) err(w, `${where} en un reto/banco solo se permiten actividades calificadas (${s.type})`);
  if (examMode && s.hint) warnings.push(`${where} los retos no muestran pistas (hint ignorado)`);
  void l;
}

const TEACH = new Set(['explain', 'reading', 'worked-example']);
function checkMateria(w: Mission, l: Lesson, sid: string, where: string) {
  const a = l.area!;
  const same = w.lessons.filter((x) => x.kind === 'materia' && x.area === a);
  const k = same.indexOf(l) + 1;
  if (l.id !== `${sid}-${a}-${k}`) err(w, `${where} id esperado "${sid}-${a}-${k}"`);
  if (l.steps.length < 8) err(w, `${where} lección de materia con ${l.steps.length} pasos (mínimo 8)`);
  if (l.steps.length > 18) warnings.push(`${where} ${l.steps.length} pasos: quizá es demasiado larga para una sesión`);
  if (!(l.minutes >= 8 && l.minutes <= 20)) err(w, `${where} minutes=${l.minutes} (una lección de materia dura 8-20 min)`);
  if (l.steps.filter((s) => TEACH.has(s.type)).length < 2) err(w, `${where} necesita ≥2 pasos de enseñanza explícita (explain/reading)`);
  const fases = new Set(l.steps.map((s) => s.fase));
  if (!fases.has('explorar')) err(w, `${where} no parte de "explorar"`);
  if (!fases.has('construir')) err(w, `${where} sin fase "construir" (enseñanza/práctica guiada)`);
  if (!fases.has('aplicar')) err(w, `${where} sin fase "aplicar" (práctica independiente)`);
  const comprobar = l.steps.filter((s) => s.fase === 'comprobar');
  if (comprobar.length < 2) err(w, `${where} el boleto de salida necesita ≥2 pasos "comprobar"`);
  if (comprobar.some((s) => !getActivity(s.type)?.graded)) err(w, `${where} los pasos "comprobar" deben ser calificados`);
  const graded = l.steps.filter((s) => getActivity(s.type)?.graded).length;
  if (graded < 4) err(w, `${where} solo ${graded} pasos calificados (mínimo 4: práctica + boleto)`);
  const foreign = l.steps.filter((s) => s.areas[0] !== a);
  if (foreign.length) err(w, `${where} ${foreign.length} pasos cuya área principal no es "${a}" (areas[0] debe ser la materia; otras áreas solo como secundarias)`);
  if (!l.steps.some((s) => s.cnb.some((c) => c.startsWith(`${a}:`)))) err(w, `${where} no referencia contenidos de ${a}`);
  if ((l.resumen?.length ?? 0) < 2) err(w, `${where} resumen con menos de 2 ideas clave`);
}

for (const w of [...WEEKS, ...COURSE.missions]) {
  const isExtra = COURSE.missions.includes(w);
  const sid = `s${String(w.semana ?? 0).padStart(2, '0')}`;
  const kind = w.kind ?? 'aprendizaje';
  if (!isExtra && w.lessons.filter((l) => l.kind !== 'diagnostico').length === 0) { pending.push(w.semana ?? 0); if (strict || inScope(w) && only) err(w, `[${sid}] semana sin lecciones`); continue; }
  checkIcon(w, `[${w.id}]`, w.icon); checkIcon(w, `[${w.id}] insignia`, w.badge.icon);
  checkMedia(w, `[${w.id}]`, w.media);
  if (!isExtra && kind !== 'validacion') {
    if (!w.contexto || w.contexto.length < 80) err(w, `[${sid}] contexto ausente o muy breve`);
    if (w.temaGenerador === 'En preparación') err(w, `[${sid}] temaGenerador sin definir`);
    const areas = missionAreas(w);
    if (areas.length < 4) err(w, `[${sid}] integra solo ${areas.length} áreas (mínimo 4)`);
  }
  if (!isExtra && kind === 'aprendizaje') {
    const ls = w.lessons.filter((l) => l.kind !== 'diagnostico');
    const lec = ls.filter((l) => (l.kind ?? 'leccion') === 'leccion');
    const mats = ls.filter((l) => l.kind === 'materia');
    const taller = ls.filter((l) => l.kind === 'taller');
    const reto = ls.filter((l) => l.kind === 'reto');
    const nuevo = taller.length > 0;
    if (nuevo) {
      if (taller.length !== 1 || reto.length !== 1 || lec.length) err(w, `[${sid}] el cierre semanal debe ser 1 taller + 1 reto (tiene ${taller.length} taller, ${reto.length} reto, ${lec.length} lecciones integradas)`);
    } else {
      migracionPendiente.push(w.semana ?? 0);
      if (strict) err(w, `[${sid}] semana en formato anterior (4 lecciones integradas): falta convertirla a Taller + Reto`);
      if (lec.length !== 4 || reto.length !== 1) err(w, `[${sid}] debe tener 4 lecciones + 1 reto (tiene ${lec.length} + ${reto.length})`);
    }
    // Materias del horario
    for (const a of MATERIAS) {
      const n = mats.filter((l) => l.area === a).length;
      const unitAuthored = MATERIA_UNITS.some((u) => u.area === a && u.unidad === w.unidad && Object.keys(u.semanas).length);
      if (!unitAuthored) continue;
      if (n !== LECCIONES_POR_SEMANA[a]) err(w, `[${sid}] ${a}: ${n} lecciones (el horario pide ${LECCIONES_POR_SEMANA[a]})`);
    }
    if ((w.bank ?? []).length < 8) err(w, `[${sid}] banco de ítems con ${(w.bank ?? []).length} ítems (mínimo 8)`);
    const bankAreas = new Set((w.bank ?? []).map((s) => s.areas[0]));
    if (bankAreas.size < 5) err(w, `[${sid}] el banco cubre solo ${bankAreas.size} áreas principales (mínimo 5)`);
    const stepMedia = w.lessons.flatMap((l) => l.steps).filter((s) => s.media).length;
    if (stepMedia < 2) err(w, `[${sid}] solo ${stepMedia} pasos con medio propio (mínimo 2 por semana)`);
    // Plan anual (formato anterior: por semana; formato de materias: por materia y unidad, más abajo)
    const pw = planWeeks.get(w.semana ?? 0);
    if (pw?.contenidos && !mats.length) {
      const refs = new Set(w.lessons.flatMap((l) => l.steps.flatMap((s) => s.cnb)).concat((w.bank ?? []).flatMap((s) => s.cnb)));
      const missing = Object.values(pw.contenidos).flat().filter((c) => !refs.has(c));
      if (missing.length) err(w, `[${sid}] ${missing.length} contenidos del plan sin trabajar: ${missing.join(', ')}`);
    }
  }
  if (!isExtra && kind === 'proyecto') {
    if (w.lessons.length !== 5) err(w, `[${sid}] el proyecto debe tener 5 lecciones (tiene ${w.lessons.length})`);
    if (!w.lessons.some((l) => l.steps.some((s) => s.type === 'project'))) err(w, `[${sid}] el proyecto no usa la actividad "project"`);
  }
  for (const [i, s] of (w.bank ?? []).entries()) checkStep(w, w.lessons[0], s, `[${sid}/banco-${i + 1}]`, true);

  for (const l of w.lessons) {
    lessons++;
    const where = `[${w.id}/${l.id}]`;
    if (lessonIds.has(l.id)) err(w, `${where} id de lección duplicado`);
    lessonIds.add(l.id);
    if (!isExtra && kind !== 'validacion' && l.kind !== 'diagnostico') {
      if (!l.id.startsWith(`${sid}-`)) err(w, `${where} el id de lección debe empezar con "${sid}-"`);
      if (!l.icon) err(w, `${where} lección sin ícono`);
      if (!l.media) err(w, `${where} lección sin medio principal (media)`);
      if (!l.objetivos?.length) err(w, `${where} sin objetivos`);
      if (!l.resumen?.length) err(w, `${where} sin resumen (ideas clave para el cuaderno)`);
      checkIcon(w, where, l.icon);
      checkMedia(w, where, l.media);
    }
    const exam = l.kind === 'reto' || l.kind === 'evaluacion' && kind !== 'validacion';
    const fases = new Set(l.steps.map((s) => s.fase));
    if (!isExtra && l.kind === 'materia') checkMateria(w, l, sid, where);
    if (!isExtra && l.kind === 'taller') {
      if (l.steps.length < 8) err(w, `${where} taller con ${l.steps.length} pasos (mínimo 8)`);
      if (new Set(l.steps.map((s) => s.areas[0])).size < 2) err(w, `${where} el taller debe integrar al menos 2 materias`);
      if (l.day !== 5) err(w, `${where} el taller va el viernes (day: 5)`);
    }
    if (!isExtra && (l.kind ?? 'leccion') === 'leccion') {
      if (l.steps.length < 6) err(w, `${where} lección con ${l.steps.length} pasos (mínimo 6)`);
      for (const f of ['aplicar', 'comprobar', 'reflexionar'] as const) if (!fases.has(f)) err(w, `${where} sin fase "${f}"`);
      if (!fases.has('explorar')) err(w, `${where} no parte de "explorar"`);
      const comprobar = l.steps.filter((s) => s.fase === 'comprobar');
      if (comprobar.some((s) => !getActivity(s.type)?.graded)) err(w, `${where} los pasos "comprobar" deben ser calificados`);
      if (new Set(l.steps.flatMap((s) => s.areas)).size < 2) warnings.push(`${where} lección de una sola área`);
    }
    if (l.kind === 'reto' && l.steps.filter((s) => getActivity(s.type)?.graded).length < 6) err(w, `${where} el reto necesita ≥6 ítems calificados`);
    for (const s of l.steps) checkStep(w, l, s, `${where}/${s.id}`, exam && l.kind === 'reto');
  }
}

// Materias: cada unidad de materia escrita cubre todas las semanas de aprendizaje y todos sus contenidos del plan
for (const u of MATERIA_UNITS) {
  const tag = `[${u.area}/u${u.unidad}]`;
  const learning = plan.unidades.find((x) => x.unidad === u.unidad)!.semanas.filter((s) => s.tipo === 'aprendizaje');
  const wk = WEEKS.find((w) => w.unidad === u.unidad)!;
  const inU = !unidadArg || unidadArg === u.unidad;
  const push = (m: string) => (inU && !only ? errors : inU ? errors : warnings).push(m);
  if (!Object.keys(u.semanas).length) { materiasPendientes.push(`${u.area}/u${u.unidad}`); if (strict) push(`${tag} materia sin escribir`); continue; }
  for (const s of learning) if (!u.semanas[s.semana]?.length) push(`${tag} falta la semana ${s.semana}`);
  for (const key of Object.keys(u.semanas)) if (!learning.some((s) => s.semana === +key)) push(`${tag} semana ${key} no es de aprendizaje en la unidad ${u.unidad}`);
  const refs = new Set(Object.values(u.semanas).flat().flatMap((l) => l.steps.flatMap((s) => s.cnb)));
  const want = learning.flatMap((s) => s.contenidos?.[u.area] ?? []);
  const missing = want.filter((c) => !refs.has(c));
  if (missing.length) push(`${tag} ${missing.length} contenidos del plan sin enseñar: ${missing.join(', ')}`);
  void wk;
}

// Cobertura
const cat = getCatalog();
let totCont = 0, totInd = 0;
const rows = WHEEL_CICLO_II.map((a) => {
  const comps = cat.areas[a]?.competencias ?? [];
  const inds = comps.flatMap((c) => c.indicadores.map((i) => i.id));
  const conts = comps.flatMap((c) => c.indicadores.flatMap((i) => i.contenidos.map((k) => k.id)));
  totCont += conts.length; totInd += inds.length;
  const ci = inds.filter((i) => coveredInd.has(i)).length;
  const cc = conts.filter((k) => coveredCont.has(k)).length;
  const bar = (x: number, t: number) => '█'.repeat(Math.round((x / Math.max(1, t)) * 16)).padEnd(16, '·');
  return `${a.padEnd(5)} indicadores ${String(ci).padStart(3)}/${String(inds.length).padEnd(3)} ${bar(ci, inds.length)}   contenidos ${String(cc).padStart(3)}/${String(conts.length).padEnd(3)} ${bar(cc, conts.length)}`;
});

if (materiaArg) {
  const mine = (e: string) => materiaArg.some((a) => e.includes(`-${a}-`) || e.includes(`[${a}/u`) || e.includes(`] ${a}: `));
  const other = errors.filter((e) => !mine(e));
  errors.splice(0, errors.length, ...errors.filter(mine));
  if (other.length) warnings.push(`(${other.length} errores de otras materias/archivos omitidos por --materia)`);
}
const weeksAuthored = WEEKS.filter((w) => w.lessons.length > 0).length;
console.log(`\nSocrates · validación de contenido${only ? ` (semanas ${only.join(', ')})` : ''}`);
console.log(`Semanas con contenido ${weeksAuthored}/40 · Lecciones ${lessons} · Pasos ${steps} · Medios ${media}`);
console.log(`Cobertura CNB: indicadores ${coveredInd.size}/${totInd} (${Math.round((coveredInd.size / totInd) * 100)}%) · contenidos ${coveredCont.size}/${totCont} (${Math.round((coveredCont.size / totCont) * 100)}%)`);
if (!quiet) rows.forEach((r) => console.log('  ' + r));
if (pending.length) console.log(`\n… ${pending.length} semanas pendientes de autoría: ${pending.join(', ')}`);
const matLessons = WEEKS.flatMap((w) => w.lessons).filter((l) => l.kind === 'materia').length;
console.log(`Lecciones de materia: ${matLessons}/${32 * Object.values(LECCIONES_POR_SEMANA).reduce((a, b) => a + b, 0)}`);
if (materiasPendientes.length) console.log(`… materias × unidad pendientes (${materiasPendientes.length}/40): ${materiasPendientes.join(' ')}`);
if (migracionPendiente.length) console.log(`… semanas por convertir a Taller + Reto (${migracionPendiente.length}/32): ${migracionPendiente.join(', ')}`);
if (!iconNames) console.log('\n(ℹ lucide-names.json no encontrado: no se validaron nombres de íconos — ejecuta `npm run icons`)');
if (warnings.length && !quiet) { console.log(`\n⚠ ${warnings.length} advertencias`); warnings.slice(0, 60).forEach((w) => console.log('  ' + w)); if (warnings.length > 60) console.log(`  … y ${warnings.length - 60} más`); }
if (errors.length) { console.log(`\n✖ ${errors.length} errores`); errors.forEach((e) => console.log('  ' + e)); process.exit(1); }
console.log('\n✔ Contenido válido');
