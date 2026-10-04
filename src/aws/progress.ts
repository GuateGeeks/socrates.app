import { useSyncExternalStore } from 'react';

export interface AwsLessonProgress { bestScore: number; attempts: number; completedAt: string }
export interface AwsProgress {
  version: 1;
  lessons: Record<string, AwsLessonProgress>;
  updatedAt: number;
}

const KEY = 'socrates.aws-progress.v1';
const listeners = new Set<() => void>();

export function emptyAwsProgress(): AwsProgress { return { version: 1, lessons: {}, updatedAt: 0 }; }

export function parseAwsProgress(value: unknown): AwsProgress | null {
  if (!value || typeof value !== 'object') return null;
  const p = value as Partial<AwsProgress>;
  if (p.version !== 1 || typeof p.updatedAt !== 'number' || !Number.isFinite(p.updatedAt) || p.updatedAt < 0
    || !p.lessons || typeof p.lessons !== 'object' || Array.isArray(p.lessons)) return null;
  for (const lesson of Object.values(p.lessons)) {
    if (!lesson || typeof lesson !== 'object' || typeof lesson.bestScore !== 'number'
      || !Number.isFinite(lesson.bestScore) || lesson.bestScore < 0 || lesson.bestScore > 1
      || !Number.isInteger(lesson.attempts) || lesson.attempts < 1
      || typeof lesson.completedAt !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(lesson.completedAt)) return null;
  }
  return p as AwsProgress;
}

export function chooseAwsProgress(local: AwsProgress, remote: unknown): AwsProgress {
  const valid = parseAwsProgress(remote);
  return valid && valid.updatedAt > local.updatedAt ? valid : local;
}

export function recordAwsResult(progress: AwsProgress, lessonId: string, score: number, date: string, now = Date.now()): AwsProgress {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(lessonId) || !Number.isFinite(score) || score < 0 || score > 1
    || !/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('Resultado de lección inválido');
  const previous = progress.lessons[lessonId];
  return {
    version: 1,
    lessons: { ...progress.lessons, [lessonId]: {
      bestScore: Math.max(previous?.bestScore ?? 0, score),
      attempts: (previous?.attempts ?? 0) + 1,
      completedAt: date,
    } },
    updatedAt: now,
  };
}

function loadAwsProgress(): AwsProgress {
  try { return parseAwsProgress(JSON.parse(localStorage.getItem(KEY) ?? 'null')) ?? emptyAwsProgress(); }
  catch { return emptyAwsProgress(); }
}

let state = typeof localStorage === 'undefined' ? emptyAwsProgress() : loadAwsProgress();
export function getAwsProgress() { return state; }
export function subscribeAwsProgress(listener: () => void) { listeners.add(listener); return () => listeners.delete(listener); }
export function useAwsProgress() { return useSyncExternalStore(subscribeAwsProgress, getAwsProgress); }
export function importAwsProgress(progress: AwsProgress) {
  const parsed = parseAwsProgress(progress);
  if (!parsed) return;
  state = parsed;
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* local storage may be unavailable */ }
  listeners.forEach((listener) => listener());
}
export function saveAwsResult(lessonId: string, score: number) {
  const date = new Date().toISOString().slice(0, 10);
  importAwsProgress(recordAwsResult(state, lessonId, score, date));
}
export function resetAwsProgress() { importAwsProgress({ ...emptyAwsProgress(), updatedAt: Date.now() }); }
