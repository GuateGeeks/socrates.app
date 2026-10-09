import type { Course, Lesson, Mission, Unit } from '@/core/types';
import type { Progress } from '@/core/progress';
import type { AreaId } from '@/cnb/model';
import { ODEC_CICLO_II } from '@/cnb/model';
import { indicadorOf } from '@/cnb/catalog';
import { buildValidationWeek } from './assemble';
import { withProductionReadyMedia } from '@/media/productionMetadata';
import { MATERIA_UNITS } from './sexto/materias';
import { diaDe, ordenEnDia } from './sexto/horario';
import { diagnostico } from './sexto/diagnostico';
import s01 from './sexto/semanas/s01';
import s02 from './sexto/semanas/s02';
import s03 from './sexto/semanas/s03';
import s04 from './sexto/semanas/s04';
import s05 from './sexto/semanas/s05';
import s06 from './sexto/semanas/s06';
import s07 from './sexto/semanas/s07';
import s08 from './sexto/semanas/s08';
import s09 from './sexto/semanas/s09';
import s11 from './sexto/semanas/s11';
import s12 from './sexto/semanas/s12';
import s13 from './sexto/semanas/s13';
import s14 from './sexto/semanas/s14';
import s15 from './sexto/semanas/s15';
import s16 from './sexto/semanas/s16';
import s17 from './sexto/semanas/s17';
import s18 from './sexto/semanas/s18';
import s19 from './sexto/semanas/s19';
import s21 from './sexto/semanas/s21';
import s22 from './sexto/semanas/s22';
import s23 from './sexto/semanas/s23';
import s24 from './sexto/semanas/s24';
import s25 from './sexto/semanas/s25';
import s26 from './sexto/semanas/s26';
import s27 from './sexto/semanas/s27';
import s28 from './sexto/semanas/s28';
import s29 from './sexto/semanas/s29';
import s31 from './sexto/semanas/s31';
import s32 from './sexto/semanas/s32';
import s33 from './sexto/semanas/s33';
import s34 from './sexto/semanas/s34';
import s35 from './sexto/semanas/s35';
import s36 from './sexto/semanas/s36';
import s37 from './sexto/semanas/s37';
import s38 from './sexto/semanas/s38';
import s39 from './sexto/semanas/s39';
import m1 from './sexto/extras/m1-tiempo-maya';
import m2 from './sexto/extras/m2-tejidos';
import m3 from './sexto/extras/m3-celula';
import m4 from './sexto/extras/m4-marimba';
import m5 from './sexto/extras/m5-paz';
import m6 from './sexto/extras/m6-energia';
import m7 from './sexto/extras/m7-mercado';
import m8 from './sexto/extras/m8-planeta';

/**
 * Curso de Sexto Primaria: 4 unidades × 10 semanas × 5 lecciones.
 *   semanas 1-8 de cada unidad → aprendizaje (4 lecciones + Reto semanal)
 *   semana 9 → Proyecto integrador · semana 10 → Semana de validación (armada con los bancos)
 * Las misiones destacadas originales quedan como "lecciones extra" en la semana más afín.
 */
const AUTHORED: Mission[] = [s01, s02, s03, s04, s05, s06, s07, s08, s09, s11, s12, s13, s14, s15, s16, s17, s18, s19, s21, s22, s23, s24, s25, s26, s27, s28, s29, s31, s32, s33, s34, s35, s36, s37, s38, s39];
const EXTRAS: Mission[] = [m1, m2, m3, m4, m5, m6, m7, m8].map((m) => ({ ...m, kind: 'aprendizaje' as const }));

/** Lecciones de materia por semana (con su día según el horario). */
const MATERIA_BY_WEEK = new Map<number, Lesson[]>();
for (const u of MATERIA_UNITS) for (const [w, ls] of Object.entries(u.semanas)) {
  const list = MATERIA_BY_WEEK.get(+w) ?? [];
  ls.forEach((l, k) => list.push({ ...l, kind: 'materia', area: u.area, day: diaDe(u.area, k) }));
  MATERIA_BY_WEEK.set(+w, list);
}
const KIND_ORDER: Record<string, number> = { diagnostico: 0, materia: 1, leccion: 2, taller: 3, reto: 4 };
/** Agenda de la semana: por día; dentro del día, materias en el orden del horario, luego taller y reto. */
function withMaterias(w: Mission): Mission {
  const extra = MATERIA_BY_WEEK.get(w.semana ?? 0) ?? [];
  if (!extra.length) return w;
  const lessons = [...extra, ...w.lessons].sort((a, b) =>
    (a.kind === 'diagnostico' ? -1 : 0) - (b.kind === 'diagnostico' ? -1 : 0)
    || (a.day ?? 5) - (b.day ?? 5)
    || (KIND_ORDER[a.kind ?? 'leccion'] ?? 2) - (KIND_ORDER[b.kind ?? 'leccion'] ?? 2)
    || (a.area && b.area ? ordenEnDia(a.area, a.day ?? 5) - ordenEnDia(b.area, b.day ?? 5) : 0));
  return { ...w, lessons };
}

const units: Unit[] = ODEC_CICLO_II.map((o) => {
  const weeks = AUTHORED.filter((w) => w.unidad === o.unidad)
    .sort((a, b) => (a.semana ?? 0) - (b.semana ?? 0))
    .map(withMaterias)
    .map((week) => o.unidad <= 2 ? withProductionReadyMedia(week) : week);
  return { n: o.unidad, tema: o.tema, icon: o.icon, color: o.color, weeks: [...weeks, buildValidationWeek(o.unidad, weeks)] };
});

// Diagnóstico inicial al comienzo de la semana 1
const w1 = units[0].weeks[0];
if (w1 && !w1.lessons.some((l) => l.id === diagnostico.id)) w1.lessons = [diagnostico, ...w1.lessons];

export const COURSE: Course = { id: 'sexto-primaria', grado: 'sexto-grado', title: 'Sexto Primaria', units, missions: EXTRAS };

/** Semanas del año en orden (1..40). */
export const WEEKS: Mission[] = units.flatMap((u) => u.weeks);

/* ------------------ lecciones extra → semana más afín (por indicadores) ------------------ */
const extraHome = new Map<string, { mission: Mission; lesson: Lesson }[]>();
for (const m of EXTRAS) for (const l of m.lessons) {
  const inds = new Set(l.steps.flatMap((s) => s.cnb.map(indicadorOf)));
  let best: Mission | undefined; let score = 0;
  for (const w of WEEKS) {
    if (w.kind !== 'aprendizaje' || !w.lessons.length) continue;
    const wi = new Set(w.lessons.flatMap((x) => x.steps.flatMap((s) => s.cnb.map(indicadorOf))));
    const sc = [...inds].filter((i) => wi.has(i)).length;
    if (sc > score) { score = sc; best = w; }
  }
  best ??= WEEKS.find((w) => w.unidad === m.unidad && w.kind === 'aprendizaje');
  if (best) extraHome.set(best.id, [...(extraHome.get(best.id) ?? []), { mission: m, lesson: l }]);
}
export function extrasOf(weekId: string) { return extraHome.get(weekId) ?? []; }

/* ------------------------------------ consultas ------------------------------------ */
/** Lecciones de un día (1-5) de una semana; el diagnóstico va con el día 1. */
export function lessonsOfDay(w: Mission, day: number): Lesson[] {
  return w.lessons.filter((l) => (l.day ?? 1) === day || (day === 1 && l.kind === 'diagnostico'));
}
/** Recorrido anual de una materia: [{ semana, mission, lesson }] en orden. */
export function trackOf(area: AreaId): { mission: Mission; lesson: Lesson }[] {
  return WEEKS.flatMap((mission) => mission.lessons.filter((l) => l.area === area).map((lesson) => ({ mission, lesson })));
}
/** Minutos estimados de una lista de lecciones. */
export function minutesOf(ls: Lesson[]): number { return ls.reduce((s, l) => s + (l.minutes || 10), 0); }

export function getMission(id: string): Mission | undefined { return WEEKS.find((m) => m.id === id) ?? EXTRAS.find((m) => m.id === id); }
export function getLesson(mid: string, lid: string): { mission: Mission; lesson: Lesson } | undefined {
  const mission = getMission(mid); const lesson = mission?.lessons.find((l) => l.id === lid);
  return mission && lesson ? { mission, lesson } : undefined;
}
/** Lecciones del año en orden (sin extras). */
export function allLessons(): { mission: Mission; lesson: Lesson }[] {
  return WEEKS.flatMap((mission) => mission.lessons.map((lesson) => ({ mission, lesson })));
}
/** Todas, incluidas las extras (para catálogos y validación). */
export function everyLesson(): { mission: Mission; lesson: Lesson }[] {
  return [...allLessons(), ...EXTRAS.flatMap((mission) => mission.lessons.map((lesson) => ({ mission, lesson })))];
}
export function nextLessonAfter(mid: string, lid: string) {
  const all = allLessons(); const i = all.findIndex((x) => x.mission.id === mid && x.lesson.id === lid);
  return i >= 0 ? all[i + 1] : undefined;
}
export function firstIncomplete(p: Progress) { return allLessons().find((x) => !p.lessons[x.lesson.id]); }
export function missionAreas(m: Mission): AreaId[] {
  return [...new Set(m.lessons.flatMap((l) => l.steps.flatMap((s) => s.areas)))];
}
export function missionIndicadores(m: Mission): string[] {
  return [...new Set(m.lessons.flatMap((l) => l.steps.flatMap((s) => s.cnb)))];
}
export function weekProgress(p: Progress, w: Mission) {
  const done = w.lessons.filter((l) => p.lessons[l.id]).length;
  return { done, total: w.lessons.length, pct: w.lessons.length ? done / w.lessons.length : 0 };
}

/* ------------------------- Insignias ------------------------- */
export interface BadgeDef { name: string; emoji?: string; icon: string; desc: string; test?: (p: Progress) => boolean }

export const BADGES: Record<string, BadgeDef> = {
  'primer-paso': { name: 'Primer paso', icon: 'Footprints', desc: 'Completaste tu primera lección', test: (p) => Object.keys(p.lessons).length >= 1 },
  'racha-3': { name: 'Racha de 3 días', icon: 'Flame', desc: 'Aprendiste 3 días seguidos', test: (p) => p.streak.count >= 3 },
  'racha-7': { name: 'Semana imparable', icon: 'Flame', desc: 'Aprendiste 7 días seguidos', test: (p) => p.streak.count >= 7 },
  'racha-30': { name: 'Mes de constancia', icon: 'CalendarCheck', desc: 'Aprendiste 30 días seguidos', test: (p) => p.streak.count >= 30 },
  'estrellas-10': { name: 'Cielo estrellado', icon: 'Star', desc: 'Reuniste 10 estrellas', test: (p) => Object.values(p.lessons).reduce((s, l) => s + l.stars, 0) >= 10 },
  'estrellas-100': { name: 'Constelación', icon: 'Sparkles', desc: 'Reuniste 100 estrellas', test: (p) => Object.values(p.lessons).reduce((s, l) => s + l.stars, 0) >= 100 },
  'multidisciplinar': { name: 'Mente integral', icon: 'Brain', desc: 'Practicaste en 8 áreas del CNB', test: (p) => Object.keys(p.areasXp).length >= 8 },
  'todas-areas': { name: 'Rueda completa', icon: 'CircleDot', desc: 'Practicaste en las 10 áreas del Ciclo II', test: (p) => Object.keys(p.areasXp).length >= 10 },
  'xp-500': { name: '500 puntos', icon: 'Gem', desc: 'Llegaste a 500 puntos', test: (p) => p.xp >= 500 },
  'xp-5000': { name: '5,000 puntos', icon: 'Crown', desc: 'Llegaste a 5,000 puntos', test: (p) => p.xp >= 5000 },
  'repaso-10': { name: 'Memoria de jaguar', icon: 'RefreshCw', desc: 'Resolviste 10 ejercicios de repaso', test: (p) => (p.reviewDone ?? 0) >= 10 },
  'cuaderno-20': { name: 'Buen apunte', icon: 'NotebookPen', desc: 'Guardaste 20 ideas en tu cuaderno', test: (p) => Object.keys(p.notebook ?? {}).length >= 20 },
  'constructor-paz': { name: 'Voz de paz', icon: 'Bird', desc: 'Elegiste caminos de diálogo', test: (p) => (p.ambitos.convivir ?? 0) >= 60 },
  ...Object.fromEntries(WEEKS.map((m) => [m.badge.id, { name: m.badge.name, icon: m.badge.icon ?? 'Medal', desc: m.badge.desc }])),
  ...Object.fromEntries(EXTRAS.map((m) => [m.badge.id, { name: m.badge.name, icon: m.badge.icon ?? 'Award', emoji: m.badge.emoji, desc: m.badge.desc }])),
};

export function evaluateBadges(p: Progress, m: Mission): string[] {
  const out: string[] = [];
  for (const [id, b] of Object.entries(BADGES)) if (b.test?.(p)) out.push(id);
  // Medalla de semana: todas las lecciones hechas y el reto (si existe) aprobado con ≥70 %
  const reto = m.lessons.find((l) => l.kind === 'reto');
  const retoOk = !reto || (p.lessons[reto.id]?.score ?? 0) >= 0.7;
  if (m.lessons.length && m.lessons.every((l) => p.lessons[l.id]) && retoOk) out.push(m.badge.id);
  return out;
}
