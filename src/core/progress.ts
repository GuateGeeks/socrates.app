import { useSyncExternalStore } from 'react';
import { AREAS, type Ambito, type AreaId } from '@/cnb/model';
import { areaOf, indicadorOf, lookup } from '@/cnb/catalog';
import { isShortAnswerValueReady, type ShortAnswerValue } from '@/activities/short-answer-value';
import type { Lesson, Mission, StepBase } from './types';
import { getActivity } from './registry';

/* ============================================================================
 * Progreso del estudiante. Persistencia detrás de un adaptador (hoy localStorage;
 * mañana sincronización con el backend de Socrates sin tocar la UI).
 * La evaluación se registra POR INDICADOR DE LOGRO (Fig. 3-4: "Proceso de evaluación").
 * ========================================================================== */

export interface Evidence { ok: number; total: number; last: string }
export interface LessonRecord { stars: 0 | 1 | 2 | 3; score: number; completedAt: string; runs: number }
export interface Settings {
  sound: boolean; haptics: boolean; reducedMotion: boolean; theme: 'auto' | 'light' | 'dark';
  /** inicio del ciclo escolar (lunes de la semana 1), YYYY-MM-DD */
  startDate: string;
  /** meta diaria de puntos */
  dailyGoal: number;
  /** muestra las fichas de producción de imágenes y videos */
  producerMode: boolean;
}
/** Caja de Leitner para repaso espaciado (1 = mañana, 2 = 3 días, 3 = 7 días, 4 = 16 días, 5 = dominado). */
export interface ReviewCard { missionId: string; lessonId: string; stepId: string; box: number; due: string }
export interface NoteEntry { text: string; lessonId: string; missionId: string; title: string; at: string }
export type JournalStatus = 'pending-review' | 'approved' | 'needs-revision' | 'self-recorded' | 'legacy';
export const JOURNAL_STATUS_META: Record<JournalStatus, { label: string }> = {
  'pending-review': { label: 'Pendiente de revisión' },
  approved: { label: 'Aprobada' },
  'needs-revision': { label: 'Necesita revisión' },
  'self-recorded': { label: 'Registro ordinario' },
  legacy: { label: 'Registro anterior' },
};
export interface JournalEntry {
  stepId: string;
  value: string;
  at: string;
  status: JournalStatus;
  primaryArea?: AreaId;
  cnb: string[];
  /** Referencias que este espacio estable ya acreditó; sobreviven a reenvíos. */
  creditedRefs: string[];
  creditedAt?: string;
  review?: { criteria: string[]; selfChecks: boolean[]; minWords?: number };
  reviewedAt?: string;
}

export interface Progress {
  version: 1;
  profile: { name: string; avatar: string };
  xp: number;
  streak: { count: number; last: string };
  lessons: Record<string, LessonRecord>;
  evidence: Record<string, Evidence>;
  ambitos: Record<Ambito, number>;
  areasXp: Partial<Record<AreaId, number>>;
  badges: Record<string, string>;
  /** respuestas abiertas/reflexivas (visibles para el docente) */
  journal: Record<string, JournalEntry>;
  daily: Record<string, number>;
  settings: Settings;
  /** evidencia por CONTENIDO (granularidad fina de la dosificación) */
  contenidos?: Record<string, Evidence>;
  /** cola de repaso espaciado: clave = stepId */
  review?: Record<string, ReviewCard>;
  reviewDone?: number;
  /** cuaderno: ideas clave guardadas (clave = id único) */
  notebook?: Record<string, NoteEntry>;
}

export interface StorageAdapter { load(): Progress | null; save(p: Progress): void }

const KEY = 'socrates.progress.v1';
export const localStorageAdapter: StorageAdapter = {
  load() {
    try { const raw = localStorage.getItem(KEY); return raw ? (JSON.parse(raw) as Progress) : null; } catch { return null; }
  },
  save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { /* modo privado / sin espacio */ } },
};

export function emptyProgress(): Progress {
  return {
    version: 1,
    profile: { name: '', avatar: '🦜' },
    xp: 0,
    streak: { count: 0, last: '' },
    lessons: {},
    evidence: {},
    ambitos: { conocer: 0, ser: 0, hacer: 0, convivir: 0, emprender: 0 },
    areasXp: {},
    badges: {},
    journal: {},
    daily: {},
    settings: { sound: true, haptics: true, reducedMotion: false, theme: 'auto', startDate: defaultStart(), dailyGoal: 50, producerMode: false },
    contenidos: {},
    review: {},
    reviewDone: 0,
    notebook: {},
  };
}

/** Ciclo escolar guatemalteco: inicia a mediados de enero (tercer lunes). */
export function defaultStart(now = new Date()): string {
  const y = now.getMonth() >= 10 ? now.getFullYear() + 1 : now.getFullYear();
  const d = new Date(y, 0, 1);
  const firstMon = 1 + ((8 - d.getDay()) % 7);
  return `${y}-01-${String(firstMon + 14).padStart(2, '0')}`;
}
function hydrate(raw: Progress | null): Progress {
  const base = emptyProgress();
  if (!raw) return base;
  const journal = Object.fromEntries(Object.entries(raw.journal ?? {}).map(([key, value]) => {
    const entry = value && typeof value === 'object' ? value as Partial<JournalEntry> : {};
    const statuses: JournalStatus[] = ['pending-review', 'approved', 'needs-revision', 'self-recorded', 'legacy'];
    const status = statuses.includes(entry.status as JournalStatus) ? entry.status as JournalStatus : 'legacy';
    const cnbShapeValid = Array.isArray(entry.cnb) && entry.cnb.length > 0
      && entry.cnb.every((ref) => typeof ref === 'string' && Boolean(lookup(ref)));
    const cnb = Array.isArray(entry.cnb) ? entry.cnb.filter((ref): ref is string => typeof ref === 'string') : [];
    const validCnb = cnb.filter((ref) => Boolean(lookup(ref)));
    // Los registros anteriores no guardaban areas: el primer ref valido conserva el orden autorado del paso.
    const inferredArea = validCnb.length > 0 ? areaOf(validCnb[0]) : undefined;
    const storedAreaValid = typeof entry.primaryArea === 'string' && entry.primaryArea in AREAS;
    const storedAreaInvalid = entry.primaryArea !== undefined && !storedAreaValid;
    const primaryArea = storedAreaValid ? entry.primaryArea : entry.primaryArea === undefined ? inferredArea : undefined;
    const criteriaValid = Array.isArray(entry.review?.criteria) && entry.review.criteria.length > 0
      && entry.review.criteria.every((item) => typeof item === 'string' && item.trim().length > 0);
    const checksValid = Array.isArray(entry.review?.selfChecks)
      && entry.review.selfChecks.every((item) => typeof item === 'boolean')
      && entry.review.selfChecks.length === entry.review?.criteria?.length
      && entry.review.selfChecks.every((item) => item === true);
    const minWordsValid = entry.review?.minWords === undefined
      || (Number.isInteger(entry.review.minWords) && entry.review.minWords! > 0);
    const reviewValid = criteriaValid && checksValid && minWordsValid;
    const minWords = entry.review?.minWords ?? 8;
    let response: ShortAnswerValue | undefined;
    if (typeof entry.value === 'string' && criteriaValid) {
      try {
        const parsed: unknown = JSON.parse(entry.value);
        if (isShortAnswerValueReady(parsed, entry.review!.criteria.length, minWords)) response = parsed;
      } catch { /* Los diarios ordinarios y valores dañados no son evidencia evaluable. */ }
    }
    const responseValid = Boolean(response) && checksValid && Array.isArray(entry.review?.selfChecks)
      && entry.review.selfChecks.every((check, index) => check === response!.checks[index]);
    const review = reviewValid
      ? {
          criteria: [...entry.review!.criteria], selfChecks: [...entry.review!.selfChecks],
          ...(entry.review!.minWords !== undefined ? { minWords: entry.review!.minWords } : {}),
        }
      : undefined;
    const validPrimaryRefs = primaryArea ? validCnb.filter((ref) => areaOf(ref) === primaryArea) : [];
    const assessmentValid = responseValid && cnbShapeValid && !storedAreaInvalid && Boolean(primaryArea)
      && validPrimaryRefs.length > 0 && reviewValid;
    const assessmentStatus = status === 'pending-review' || status === 'approved' || status === 'needs-revision';
    const safeStatus = assessmentStatus && !assessmentValid ? 'legacy' : status;
    const storedCredits = Array.isArray(entry.creditedRefs)
      ? entry.creditedRefs.filter((ref): ref is string => typeof ref === 'string' && Boolean(lookup(ref)))
      : [];
    const creditedRefs = !assessmentValid ? [] : storedCredits.length > 0
      ? [...new Set(storedCredits)]
      : status === 'approved' ? [...new Set(validPrimaryRefs)] : [];
    const creditedAt = typeof entry.creditedAt === 'string'
      ? entry.creditedAt
      : creditedRefs.length > 0 ? entry.reviewedAt ?? entry.at : undefined;
    return [key, {
      stepId: typeof entry.stepId === 'string' ? entry.stepId : key.split('/').at(-1) ?? key,
      value: typeof entry.value === 'string' ? entry.value : '',
      at: typeof entry.at === 'string' ? entry.at : '',
      status: safeStatus,
      ...(primaryArea ? { primaryArea } : {}),
      cnb,
      creditedRefs,
      ...(creditedAt ? { creditedAt } : {}),
      ...(review ? { review } : {}),
      ...(typeof entry.reviewedAt === 'string' ? { reviewedAt: entry.reviewedAt } : {}),
    } satisfies JournalEntry];
  }));
  return { ...base, ...raw, journal, settings: { ...base.settings, ...raw.settings } };
}

let adapter: StorageAdapter = localStorageAdapter;
let state: Progress = hydrate(adapter.load());
const listeners = new Set<() => void>();

export function setStorageAdapter(a: StorageAdapter) { adapter = a; state = hydrate(a.load()); emit(); }
function emit() { listeners.forEach((l) => l()); }
export function getProgress(): Progress { return state; }
export function updateProgress(fn: (p: Progress) => Progress) { state = fn(state); adapter.save(state); emit(); }
export function resetProgress() { updateProgress(() => ({ ...emptyProgress(), settings: state.settings, profile: state.profile })); }
export function subscribe(l: () => void) { listeners.add(l); return () => listeners.delete(l); }
export function useProgress<T>(select: (p: Progress) => T): T {
  return useSyncExternalStore(subscribe, () => select(state), () => select(state));
}

/* ------------------------------------------------------------------ */

export const today = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const dayDiff = (a: string, b: string) => Math.round((new Date(b + 'T12:00').getTime() - new Date(a + 'T12:00').getTime()) / 86400000);

export type NivelLogro = 'sin-evidencia' | 'en-proceso' | 'logrado' | 'destacado';
export function nivel(e?: Evidence): NivelLogro {
  if (!e || e.total === 0) return 'sin-evidencia';
  const r = e.ok / e.total;
  if (r >= 0.9 && e.total >= 2) return 'destacado';
  if (r >= 0.6) return 'logrado';
  return 'en-proceso';
}
export const NIVEL_LABEL: Record<NivelLogro, string> = {
  'sin-evidencia': 'Por iniciar', 'en-proceso': 'En proceso', logrado: 'Logrado', destacado: 'Destacado',
};
export function mastery(e?: Evidence): number { return !e || e.total === 0 ? 0 : e.ok / e.total; }

export interface StepOutcome { step: StepBase; graded: boolean; correct: boolean; firstTry: boolean; score: number; value?: unknown }
export interface LessonSummary { xpGained: number; stars: 0 | 1 | 2 | 3; score: number; newBadges: string[]; indicadores: string[]; streak: number; areas: AreaId[]; weak: string[]; contenidos: number; byIndicator: Record<string, { ok: number; total: number }> }

export const XP = { firstTry: 10, retry: 5, open: 6, lessonBonus: 20, perfectBonus: 15 } as const;

export function starsFor(score: number): 1 | 2 | 3 { return score >= 0.9 ? 3 : score >= 0.65 ? 2 : 1; }

/** Registra el resultado de una lección y devuelve el resumen para la pantalla de cierre. */
export function recordLesson(mission: Mission, lesson: Lesson, outcomes: StepOutcome[], evaluateBadges: (p: Progress, m: Mission) => string[]): LessonSummary {
  const graded = outcomes.filter((o) => o.graded);
  const score = graded.length ? graded.reduce((s, o) => s + (o.firstTry ? o.score : o.score * 0.5), 0) / graded.length : 1;
  const stars = starsFor(score);
  let xpGained = XP.lessonBonus + (stars === 3 ? XP.perfectBonus : 0);
  const d = today();
  const indicadores = new Set<string>();
  const areas = new Set<AreaId>();
  const weak = new Set<string>();
  const byIndicator: Record<string, { ok: number; total: number }> = {};
  let contenidos = 0;
  let newBadges: string[] = [];
  let streakCount = 0;

  updateProgress((p) => {
    const n: Progress = structuredClone(p);
    for (const o of outcomes) {
      const def = getActivity(o.step.type);
      const gain = o.graded ? (o.correct ? (o.firstTry ? XP.firstTry : XP.retry) : 2) : XP.open;
      xpGained += gain;
      const amb = o.step.ambito ?? (o.graded ? (o.step.fase === 'aplicar' ? 'hacer' : 'conocer') : 'ser');
      n.ambitos[amb] = (n.ambitos[amb] ?? 0) + gain;
      for (const a of o.step.areas) { n.areasXp[a] = (n.areasXp[a] ?? 0) + gain; areas.add(a); }
      for (const ref of o.step.cnb) {
        const ind = indicadorOf(ref);
        indicadores.add(ind);
        areas.add(areaOf(ind));
        if (!o.graded && def?.evidenceMode === 'journal-pending-review') continue;
        const e = n.evidence[ind] ?? { ok: 0, total: 0, last: d };
        const credit = o.graded ? (o.firstTry && o.correct ? 1 : o.correct ? 0.5 : 0) : 1;
        n.evidence[ind] = { ok: e.ok + credit, total: e.total + 1, last: d };
        if (credit < 1) weak.add(ind);
        if (o.graded) {
          const b = byIndicator[ind] ?? { ok: 0, total: 0 };
          byIndicator[ind] = { ok: b.ok + (o.correct ? 1 : 0), total: b.total + 1 };
        }
        if (ref.split(':')[1]?.split('.').length === 3) {
          n.contenidos ??= {};
          const c = n.contenidos[ref] ?? { ok: 0, total: 0, last: d };
          n.contenidos[ref] = { ok: c.ok + credit, total: c.total + 1, last: d };
          contenidos++;
        }
      }
      // Repaso espaciado: lo que no salió a la primera vuelve a aparecer mañana
      if (o.graded && !(o.firstTry && o.correct)) {
        n.review ??= {};
        n.review[o.step.id] = { missionId: mission.id, lessonId: lesson.id, stepId: o.step.id, box: 1, due: addDays(d, 1) };
      }
      if (!o.graded && o.value !== undefined) {
        const value = typeof o.value === 'string' ? o.value : JSON.stringify(o.value);
        const props = o.step.props as { rubric?: string[]; minWords?: number };
        const response = o.value as { checks?: boolean[] } | undefined;
        const journalKey = `${lesson.id}/${o.step.id}`;
        const previous = n.journal[journalKey];
        n.journal[journalKey] = {
          stepId: o.step.id,
          value,
          at: d,
          status: def?.evidenceMode === 'journal-pending-review' ? 'pending-review' : 'self-recorded',
          primaryArea: o.step.areas[0],
          cnb: [...o.step.cnb],
          creditedRefs: [...(previous?.creditedRefs ?? [])],
          ...(previous?.creditedAt ? { creditedAt: previous.creditedAt } : {}),
          ...(def?.evidenceMode === 'journal-pending-review' && props.rubric
            ? { review: {
                criteria: [...props.rubric], selfChecks: [...(response?.checks ?? [])], minWords: props.minWords ?? 8,
              } }
            : {}),
        };
      }
    }
    const prev = n.lessons[lesson.id];
    n.lessons[lesson.id] = {
      stars: Math.max(prev?.stars ?? 0, stars) as 1 | 2 | 3,
      score: Math.max(prev?.score ?? 0, score),
      completedAt: d,
      runs: (prev?.runs ?? 0) + 1,
    };
    // Cuaderno: ideas clave de la lección
    for (const [i, text] of (lesson.resumen ?? []).entries()) {
      n.notebook ??= {};
      n.notebook[`${lesson.id}#${i}`] = { text, lessonId: lesson.id, missionId: mission.id, title: lesson.title, at: d };
    }
    // racha diaria
    if (n.streak.last !== d) {
      n.streak = { count: n.streak.last && dayDiff(n.streak.last, d) === 1 ? n.streak.count + 1 : 1, last: d };
    }
    streakCount = n.streak.count;
    n.xp += xpGained;
    n.daily[d] = (n.daily[d] ?? 0) + xpGained;
    newBadges = evaluateBadges(n, mission).filter((b) => !n.badges[b]);
    for (const b of newBadges) n.badges[b] = d;
    return n;
  });

  return { xpGained, stars, score, newBadges, indicadores: [...indicadores], streak: streakCount, areas: [...areas], weak: [...weak], contenidos, byIndicator };
}

export function reviewJournalEntry(key: string, decision: 'approve' | 'revision'): void {
  updateProgress((p) => {
    const entry = p.journal[key];
    if (!entry || entry.status !== 'pending-review') return p;
    const reviewedAt = today();
    const n = structuredClone(p);
    const next = n.journal[key];
    next.status = decision === 'approve' ? 'approved' : 'needs-revision';
    next.reviewedAt = reviewedAt;
    if (decision === 'revision' || !entry.primaryArea) return n;

    const refs = [...new Set(entry.cnb.filter((ref) => lookup(ref) && areaOf(ref) === entry.primaryArea))];
    const creditedRefs = new Set(entry.creditedRefs);
    const newRefs = refs.filter((ref) => !creditedRefs.has(ref));
    const creditedIndicators = new Set([...creditedRefs].map(indicadorOf));
    const newIndicators = new Set(newRefs.map(indicadorOf).filter((indicator) => !creditedIndicators.has(indicator)));
    for (const indicator of newIndicators) {
      const evidence = n.evidence[indicator] ?? { ok: 0, total: 0, last: reviewedAt };
      n.evidence[indicator] = { ok: evidence.ok + 1, total: evidence.total + 1, last: reviewedAt };
    }
    n.contenidos ??= {};
    for (const ref of newRefs) {
      if (lookup(ref)?.kind !== 'contenido') continue;
      const evidence = n.contenidos[ref] ?? { ok: 0, total: 0, last: reviewedAt };
      n.contenidos[ref] = { ok: evidence.ok + 1, total: evidence.total + 1, last: reviewedAt };
    }
    next.creditedRefs = [...creditedRefs, ...newRefs];
    if (newRefs.length > 0) next.creditedAt = reviewedAt;
    return n;
  });
}

/* ------------------------- Repaso espaciado (Leitner) ------------------------- */
const INTERVALS = [0, 1, 3, 7, 16, 35];
export function addDays(d: string, n: number) {
  const x = new Date(d + 'T12:00'); x.setDate(x.getDate() + n); return today(x);
}
export function dueReviews(p: Progress, d = today()): ReviewCard[] {
  return Object.values(p.review ?? {}).filter((c) => c.box < 5 && c.due <= d).sort((a, b) => a.due.localeCompare(b.due));
}
/** Registra el resultado de un ejercicio de repaso: acierto → sube de caja; error → vuelve a la caja 1. */
export function recordReview(stepId: string, correct: boolean) {
  updateProgress((p) => {
    const card = p.review?.[stepId];
    if (!card) return p;
    const box = correct ? Math.min(5, card.box + 1) : 1;
    const d = today();
    return { ...p, reviewDone: (p.reviewDone ?? 0) + 1, xp: p.xp + (correct ? 5 : 1), daily: { ...p.daily, [d]: (p.daily[d] ?? 0) + (correct ? 5 : 1) },
      review: { ...p.review, [stepId]: { ...card, box, due: addDays(d, INTERVALS[box] ?? 35) } } };
  });
}

/* ------------------------- Cuaderno ------------------------- */
export function saveNote(key: string, note: NoteEntry) { updateProgress((p) => ({ ...p, notebook: { ...(p.notebook ?? {}), [key]: note } })); }
export function removeNote(key: string) { updateProgress((p) => { const nb = { ...(p.notebook ?? {}) }; delete nb[key]; return { ...p, notebook: nb }; }); }

/* ------------------------- Calendario escolar ------------------------- */
/** Semana del ciclo (1-40) según la fecha de inicio; 0 = antes de empezar, 41 = terminó. */
export function schoolWeek(startDate: string, d = today()): number {
  const days = dayDiff(startDate, d);
  if (days < 0) return 0;
  return Math.min(41, Math.floor(days / 7) + 1);
}
