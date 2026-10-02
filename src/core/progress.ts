import { useSyncExternalStore } from 'react';
import { AREAS, type Ambito, type AreaId } from '@/cnb/model';
import { areaOf, indicadorOf, lookup } from '@/cnb/catalog';
import { isShortAnswerValueReady, type ShortAnswerValue } from '@/activities/short-answer-value';
import { isCulturalConservationAuthoredReady } from '@/activities/cultural-conservation-value';
import { LEGACY_JOURNAL_REQUIREMENTS } from './legacy-journal-requirements';
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
  review?: {
    criteria: string[];
    selfChecks: boolean[];
    minWords?: number;
    consultationMinWords?: number;
    evidenceKind?: string;
    masteryEligible?: boolean;
  };
  reviewedAt?: string;
}

export function canApproveJournalEntry(entry: JournalEntry): boolean {
  return entry.status === 'pending-review' && entry.review?.masteryEligible !== false;
}

export interface LowActivitySnapshot { sound: boolean; reducedMotion: boolean }
export interface LowActivityPracticeReceipt {
  id: string;
  action: 'activation' | 'maintenance';
  startedAt: number;
  completedAt?: number;
  /** Duración monotónica medida; el reloj de pared solo se conserva para auditoría. */
  elapsedMs?: number;
  before: LowActivitySnapshot;
  after: LowActivitySnapshot;
  restored: boolean;
  restoredAt?: number;
  restoredTo?: LowActivitySnapshot;
  maintenanceCompleted: boolean;
}
export const LOW_ACTIVITY_MAINTENANCE_MS = 25_000;

interface LiveLowActivityProof {
  receipt: LowActivityPracticeReceipt;
  monotonicStartedAt: number;
  monotonicCompletedAt?: number;
}

interface LowActivityClock {
  wallNow(): number;
  monotonicNow(): number;
}

const productionLowActivityClock: LowActivityClock = {
  wallNow: () => Date.now(),
  monotonicNow: () => globalThis.performance.now(),
};
let lowActivityClock = productionLowActivityClock;
const liveLowActivityProofs = new Map<string, LiveLowActivityProof>();

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
  /** Comprobante local de la práctica de baja actividad más reciente. No acredita dominio por sí solo. */
  lowActivityPractice?: LowActivityPracticeReceipt;
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
    const masteryEligible = entry.review?.masteryEligible !== false;
    const checksShapeValid = Array.isArray(entry.review?.selfChecks)
      && entry.review.selfChecks.every((item) => typeof item === 'boolean')
      && (masteryEligible
        ? entry.review.selfChecks.length === entry.review?.criteria?.length && entry.review.selfChecks.every((item) => item === true)
        : entry.review.selfChecks.length === 0);
    const persistedMinWords = entry.review?.minWords;
    const legacyRequirement = persistedMinWords === undefined && typeof entry.stepId === 'string'
      ? LEGACY_JOURNAL_REQUIREMENTS[entry.stepId]
      : undefined;
    const minWordsValid = persistedMinWords === undefined
      ? Boolean(legacyRequirement)
      : Number.isInteger(persistedMinWords) && persistedMinWords > 0;
    const consultationMinWords = entry.review?.consultationMinWords ?? 8;
    const consultationMinWordsValid = Number.isInteger(consultationMinWords) && consultationMinWords > 0;
    const evidenceKindValid = entry.review?.evidenceKind === undefined || typeof entry.review.evidenceKind === 'string';
    const reviewValid = criteriaValid && checksShapeValid && minWordsValid && consultationMinWordsValid && evidenceKindValid;
    const minWords = persistedMinWords ?? legacyRequirement?.minWords;
    let responseChecks: boolean[] | undefined;
    if (typeof entry.value === 'string' && criteriaValid && minWords !== undefined) {
      try {
        const parsed: unknown = JSON.parse(entry.value);
        if (entry.review?.evidenceKind === 'cultural-conservation-practice') {
          if (isCulturalConservationAuthoredReady(parsed, entry.review.criteria.length, minWords, consultationMinWords)) {
            responseChecks = parsed.checks;
          }
        } else if (isShortAnswerValueReady(parsed, entry.review!.criteria.length, minWords)) {
          responseChecks = (parsed as ShortAnswerValue).checks;
        }
      } catch { /* Los diarios ordinarios y valores dañados no son evidencia evaluable. */ }
    }
    const responseValid = Boolean(responseChecks) && checksShapeValid && Array.isArray(entry.review?.selfChecks)
      && entry.review.selfChecks.every((check, index) => check === responseChecks![index]);
    const review = reviewValid
      ? {
          criteria: [...entry.review!.criteria], selfChecks: [...entry.review!.selfChecks],
          ...(entry.review!.minWords !== undefined ? { minWords: entry.review!.minWords } : {}),
          ...(entry.review!.consultationMinWords !== undefined ? { consultationMinWords: entry.review!.consultationMinWords } : {}),
          ...(entry.review!.evidenceKind !== undefined ? { evidenceKind: entry.review!.evidenceKind } : {}),
          ...(entry.review!.masteryEligible !== undefined ? { masteryEligible: entry.review!.masteryEligible } : {}),
        }
      : undefined;
    const validPrimaryRefs = primaryArea ? validCnb.filter((ref) => areaOf(ref) === primaryArea) : [];
    const assessmentValid = responseValid && cnbShapeValid && !storedAreaInvalid && Boolean(primaryArea)
      && validPrimaryRefs.length > 0 && reviewValid;
    const assessmentStatus = status === 'pending-review' || status === 'approved' || status === 'needs-revision';
    const safeStatus = assessmentStatus && !assessmentValid ? 'legacy'
      : assessmentStatus && !masteryEligible ? 'needs-revision'
      : status;
    const storedCredits = Array.isArray(entry.creditedRefs)
      ? entry.creditedRefs.filter((ref): ref is string => typeof ref === 'string' && Boolean(lookup(ref)))
      : [];
    const creditedRefs = !assessmentValid || !masteryEligible ? [] : storedCredits.length > 0
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
  const lowActivityPractice = hydrateLowActivityPractice(raw.lowActivityPractice);
  return {
    ...base, ...raw, journal, settings: { ...base.settings, ...raw.settings },
    ...(lowActivityPractice ? { lowActivityPractice } : { lowActivityPractice: undefined }),
  };
}

function isSnapshot(value: unknown): value is LowActivitySnapshot {
  if (!value || typeof value !== 'object') return false;
  const snapshot = value as Partial<LowActivitySnapshot>;
  return typeof snapshot.sound === 'boolean' && typeof snapshot.reducedMotion === 'boolean';
}

function sameLowActivitySnapshot(a: LowActivitySnapshot, b: LowActivitySnapshot) {
  return a.sound === b.sound && a.reducedMotion === b.reducedMotion;
}

function validTimestamp(value: unknown, now: number) {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= now;
}

function hydrateLowActivityPractice(value: unknown): LowActivityPracticeReceipt | undefined {
  if (!value || typeof value !== 'object') return undefined;
  const receipt = value as Partial<LowActivityPracticeReceipt>;
  const now = Date.now();
  if (typeof receipt.id !== 'string' || receipt.id.length < 8
    || (receipt.action !== 'activation' && receipt.action !== 'maintenance')
    || !validTimestamp(receipt.startedAt, now)
    || !isSnapshot(receipt.before) || !isSnapshot(receipt.after)
    || typeof receipt.restored !== 'boolean' || typeof receipt.maintenanceCompleted !== 'boolean') return undefined;
  const startedAt = receipt.startedAt as number;
  let migratedElapsedMs = receipt.elapsedMs;

  if (receipt.action === 'activation') {
    if (!validTimestamp(receipt.completedAt, now) || receipt.completedAt! < startedAt
      || isLowActivityMode(receipt.before) || !isLowActivityMode(receipt.after)
      || sameLowActivitySnapshot(receipt.before, receipt.after) || receipt.maintenanceCompleted) return undefined;
    if (receipt.restored && (!validTimestamp(receipt.restoredAt, now) || receipt.restoredAt! < receipt.completedAt!
      || !isSnapshot(receipt.restoredTo) || !sameLowActivitySnapshot(receipt.restoredTo, receipt.before))) return undefined;
    if (!receipt.restored && (receipt.restoredAt !== undefined || receipt.restoredTo !== undefined)) return undefined;
  } else {
    if (receipt.restored || receipt.restoredAt !== undefined || receipt.restoredTo !== undefined
      || !isLowActivityMode(receipt.before) || !isLowActivityMode(receipt.after)) return undefined;
    if (receipt.maintenanceCompleted) {
      if (!validTimestamp(receipt.completedAt, now)) return undefined;
      if (typeof migratedElapsedMs !== 'number' || !Number.isFinite(migratedElapsedMs)) {
        const legacyWallElapsed = receipt.completedAt! - startedAt;
        if (legacyWallElapsed < LOW_ACTIVITY_MAINTENANCE_MS) return undefined;
        migratedElapsedMs = legacyWallElapsed;
      }
      if (migratedElapsedMs < LOW_ACTIVITY_MAINTENANCE_MS) return undefined;
    } else if (receipt.completedAt !== undefined) return undefined;
  }
  const hydrated = structuredClone(receipt) as LowActivityPracticeReceipt;
  if (receipt.action === 'maintenance' && receipt.maintenanceCompleted) hydrated.elapsedMs = migratedElapsedMs;
  return hydrated;
}

let adapter: StorageAdapter = localStorageAdapter;
let state: Progress = hydrate(adapter.load());
const listeners = new Set<() => void>();

export function setStorageAdapter(a: StorageAdapter) {
  adapter = a;
  state = hydrate(a.load());
  liveLowActivityProofs.clear();
  emit();
}
function emit() { listeners.forEach((l) => l()); }
export function getProgress(): Progress { return state; }
export function updateProgress(fn: (p: Progress) => Progress) { state = fn(state); adapter.save(state); emit(); }
export function resetProgress() { updateProgress(() => ({ ...emptyProgress(), settings: state.settings, profile: state.profile })); }

function currentLowActivitySnapshot(): LowActivitySnapshot {
  return { sound: state.settings.sound, reducedMotion: state.settings.reducedMotion };
}

function lowActivityProofId(now: number) {
  const uuid = globalThis.crypto?.randomUUID?.();
  return uuid ? `low-${uuid}` : `low-${now}-${Math.random().toString(36).slice(2)}`;
}

function sameLowActivityReceipt(a: LowActivityPracticeReceipt, b: LowActivityPracticeReceipt) {
  return a.id === b.id && a.action === b.action && a.startedAt === b.startedAt
    && a.completedAt === b.completedAt && a.elapsedMs === b.elapsedMs
    && a.restored === b.restored && a.restoredAt === b.restoredAt
    && a.maintenanceCompleted === b.maintenanceCompleted
    && sameLowActivitySnapshot(a.before, b.before) && sameLowActivitySnapshot(a.after, b.after)
    && (a.restoredTo === undefined ? b.restoredTo === undefined
      : b.restoredTo !== undefined && sameLowActivitySnapshot(a.restoredTo, b.restoredTo));
}

/** A persisted receipt is audit history; only a helper-created proof in this JS session is authoritative. */
export function hasLiveLowActivityProof(receipt: LowActivityPracticeReceipt): boolean {
  const live = liveLowActivityProofs.get(receipt.id);
  return Boolean(live && sameLowActivityReceipt(live.receipt, receipt));
}

/** Applies a modest, reversible local practice by reducing optional app activity. */
export function activateLowActivityMode(): LowActivityPracticeReceipt | null {
  const before = currentLowActivitySnapshot();
  if (isLowActivityMode(before)) return null;
  const startedAt = lowActivityClock.wallNow();
  const monotonicStartedAt = lowActivityClock.monotonicNow();
  const after = { sound: false, reducedMotion: true };
  const receipt: LowActivityPracticeReceipt = {
    id: lowActivityProofId(startedAt), action: 'activation', startedAt, completedAt: lowActivityClock.wallNow(),
    before, after, restored: false, maintenanceCompleted: false,
  };
  updateProgress((p) => ({
    ...p,
    settings: { ...p.settings, ...after },
    lowActivityPractice: receipt,
  }));
  liveLowActivityProofs.set(receipt.id, {
    receipt: structuredClone(receipt), monotonicStartedAt, monotonicCompletedAt: lowActivityClock.monotonicNow(),
  });
  return structuredClone(receipt);
}

/** Restores only the settings changed by activateLowActivityMode. */
export function restoreLowActivityMode(proofId: string): LowActivityPracticeReceipt | null {
  const receipt = state.lowActivityPractice;
  const live = liveLowActivityProofs.get(proofId);
  if (!receipt || !live || !sameLowActivityReceipt(live.receipt, receipt)
    || receipt.id !== proofId || receipt.action !== 'activation' || receipt.restored
    || !sameLowActivitySnapshot(currentLowActivitySnapshot(), receipt.after)) return null;
  const restoredAt = lowActivityClock.wallNow();
  const restored: LowActivityPracticeReceipt = {
    ...receipt, restored: true, restoredAt, restoredTo: { ...receipt.before },
  };
  updateProgress((p) => ({
    ...p,
    settings: { ...p.settings, ...receipt.before },
    lowActivityPractice: restored,
  }));
  live.receipt = structuredClone(restored);
  return structuredClone(restored);
}

export function startLowActivityMaintenance(): LowActivityPracticeReceipt | null {
  const before = currentLowActivitySnapshot();
  if (!isLowActivityMode(before)) return null;
  const startedAt = lowActivityClock.wallNow();
  const monotonicStartedAt = lowActivityClock.monotonicNow();
  const receipt: LowActivityPracticeReceipt = {
    id: lowActivityProofId(startedAt), action: 'maintenance', startedAt,
    before, after: { ...before }, restored: false, maintenanceCompleted: false,
  };
  updateProgress((p) => ({ ...p, lowActivityPractice: receipt }));
  liveLowActivityProofs.set(receipt.id, { receipt: structuredClone(receipt), monotonicStartedAt });
  return structuredClone(receipt);
}

export function completeLowActivityMaintenance(proofId: string): LowActivityPracticeReceipt | null {
  const receipt = state.lowActivityPractice;
  const now = lowActivityClock.wallNow();
  const monotonicNow = lowActivityClock.monotonicNow();
  const current = currentLowActivitySnapshot();
  const live = liveLowActivityProofs.get(proofId);
  if (!receipt || !live || !sameLowActivityReceipt(live.receipt, receipt)
    || receipt.id !== proofId || receipt.action !== 'maintenance' || receipt.maintenanceCompleted
    || !isLowActivityMode(current) || monotonicNow < live.monotonicStartedAt
    || monotonicNow - live.monotonicStartedAt < LOW_ACTIVITY_MAINTENANCE_MS) return null;
  const completed: LowActivityPracticeReceipt = {
    ...receipt, completedAt: now, elapsedMs: monotonicNow - live.monotonicStartedAt,
    after: current, maintenanceCompleted: true,
  };
  updateProgress((p) => ({ ...p, lowActivityPractice: completed }));
  live.receipt = structuredClone(completed);
  live.monotonicCompletedAt = monotonicNow;
  return structuredClone(completed);
}

export function lowActivityMaintenanceRemaining(proofId: string): number | null {
  const live = liveLowActivityProofs.get(proofId);
  if (!live || live.receipt.action !== 'maintenance' || live.receipt.maintenanceCompleted) return null;
  return Math.max(0, LOW_ACTIVITY_MAINTENANCE_MS - (lowActivityClock.monotonicNow() - live.monotonicStartedAt));
}

/** Explicit test support. Never accepts elapsed time through production helpers. */
export const __lowActivityTest = {
  setClock(clock: LowActivityClock) {
    lowActivityClock = clock;
    liveLowActivityProofs.clear();
  },
  finishMaintenance(proofId: string) {
    const live = liveLowActivityProofs.get(proofId);
    if (!live) return null;
    live.monotonicStartedAt = lowActivityClock.monotonicNow() - LOW_ACTIVITY_MAINTENANCE_MS;
    return completeLowActivityMaintenance(proofId);
  },
  clearSession() { liveLowActivityProofs.clear(); },
  reset() {
    lowActivityClock = productionLowActivityClock;
    liveLowActivityProofs.clear();
  },
};

export function isLowActivityMode(settings: Pick<Settings, 'sound' | 'reducedMotion'>): boolean {
  return !settings.sound && settings.reducedMotion;
}
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
  // A pending-review production owns mastery for its indicator. Companion teaching or
  // auto-graded practice may still affect lesson score, but cannot bypass human review.
  const reviewGatedIndicators = new Set(
    [...lesson.steps, ...outcomes.map((outcome) => outcome.step)]
      .filter((step) => getActivity(step.type)?.evidenceMode === 'journal-pending-review')
      .flatMap((step) => step.cnb.map(indicadorOf)),
  );
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
        const credit = o.graded ? (o.firstTry && o.correct ? 1 : o.correct ? 0.5 : 0) : 1;
        if (o.graded) {
          const b = byIndicator[ind] ?? { ok: 0, total: 0 };
          byIndicator[ind] = { ok: b.ok + (o.correct ? 1 : 0), total: b.total + 1 };
        }
        if (reviewGatedIndicators.has(ind)) continue;
        const e = n.evidence[ind] ?? { ok: 0, total: 0, last: d };
        n.evidence[ind] = { ok: e.ok + credit, total: e.total + 1, last: d };
        if (credit < 1) weak.add(ind);
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
        const props = o.step.props as { rubric?: string[]; minWords?: number; consultationMinWords?: number };
        const response = o.value as { checks?: boolean[] } | undefined;
        const journalKey = `${lesson.id}/${o.step.id}`;
        const previous = n.journal[journalKey];
        const pendingReview = def?.evidenceMode === 'journal-pending-review';
        const readyForJournal = !pendingReview || !def?.isReady || def.isReady(o.step.props as never, o.value as never);
        if (!readyForJournal) continue;
        const masteryEligible = !pendingReview || !def?.isMasteryEligible
          || def.isMasteryEligible(o.step.props as never, o.value as never);
        n.journal[journalKey] = {
          stepId: o.step.id,
          value,
          at: d,
          status: pendingReview ? masteryEligible ? 'pending-review' : 'needs-revision' : 'self-recorded',
          primaryArea: o.step.areas[0],
          cnb: [...o.step.cnb],
          creditedRefs: [...(previous?.creditedRefs ?? [])],
          ...(previous?.creditedAt ? { creditedAt: previous.creditedAt } : {}),
          ...(pendingReview && props.rubric
            ? { review: {
                criteria: [...props.rubric], selfChecks: [...(response?.checks ?? [])], minWords: props.minWords ?? 8,
                ...(props.consultationMinWords !== undefined ? { consultationMinWords: props.consultationMinWords } : {}),
                ...(o.step.type !== 'short-answer' ? { evidenceKind: o.step.type } : {}),
                ...(!masteryEligible ? { masteryEligible: false } : {}),
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
    if (!entry) return p;
    if (entry.review?.masteryEligible === false) {
      if (entry.status !== 'pending-review') return p;
      const n = structuredClone(p);
      n.journal[key].status = 'needs-revision';
      n.journal[key].reviewedAt = today();
      n.journal[key].creditedRefs = [];
      return n;
    }
    if (!canApproveJournalEntry(entry)) return p;
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
