export const AVATARS = ['Bird', 'Fox', 'Rabbit', 'Turtle', 'Cat', 'Dog'] as const;
export const DAILY_GOALS = [30, 50, 100] as const;
export const ONBOARDING_STEPS = ['welcome', 'name', 'avatar', 'goal', 'preferences', 'ready'] as const;
export type Avatar = typeof AVATARS[number];
export type DailyGoal = typeof DAILY_GOALS[number];
export type OnboardingStep = typeof ONBOARDING_STEPS[number];

export interface LearnerProfile {
  schemaVersion: 1;
  displayName: string;
  avatar: Avatar;
  dailyGoal: DailyGoal;
  theme: 'auto' | 'light' | 'dark';
  sound: boolean;
  haptics: boolean;
  reducedMotion: boolean;
  onboardingStep: OnboardingStep;
  onboardingComplete: boolean;
  updatedAt: number;
}

export interface KeyValueStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

const KEY = 'socrates.learner.v1';
const themes = ['auto', 'light', 'dark'] as const;
const includes = <T extends readonly unknown[]>(values: T, value: unknown): value is T[number] => values.includes(value);

export function defaultLearnerProfile(now = Date.now()): LearnerProfile {
  return {
    schemaVersion: 1, displayName: '', avatar: 'Bird', dailyGoal: 50, theme: 'auto',
    sound: true, haptics: true, reducedMotion: false, onboardingStep: 'welcome',
    onboardingComplete: false, updatedAt: now,
  };
}

export function validateLearnerName(input: string): { valid: boolean; value: string } {
  const value = input.trim().replace(/\s+/g, ' ');
  return { valid: value.length > 0 && value.length <= 30, value };
}

function hydrate(value: unknown, now: number): LearnerProfile {
  const base = defaultLearnerProfile(now);
  if (!value || typeof value !== 'object') return base;
  const raw = value as Partial<LearnerProfile>;
  return {
    ...base,
    displayName: typeof raw.displayName === 'string' && raw.displayName.length <= 30 ? raw.displayName : base.displayName,
    avatar: includes(AVATARS, raw.avatar) ? raw.avatar : base.avatar,
    dailyGoal: includes(DAILY_GOALS, raw.dailyGoal) ? raw.dailyGoal : base.dailyGoal,
    theme: includes(themes, raw.theme) ? raw.theme : base.theme,
    sound: typeof raw.sound === 'boolean' ? raw.sound : base.sound,
    haptics: typeof raw.haptics === 'boolean' ? raw.haptics : base.haptics,
    reducedMotion: typeof raw.reducedMotion === 'boolean' ? raw.reducedMotion : base.reducedMotion,
    onboardingStep: includes(ONBOARDING_STEPS, raw.onboardingStep) ? raw.onboardingStep : base.onboardingStep,
    onboardingComplete: raw.onboardingComplete === true,
    updatedAt: typeof raw.updatedAt === 'number' && Number.isFinite(raw.updatedAt) ? raw.updatedAt : base.updatedAt,
  };
}

export function loadLearnerProfile(store: KeyValueStore = localStorage, now = Date.now()): LearnerProfile {
  try { return hydrate(JSON.parse(store.getItem(KEY) ?? 'null'), now); } catch { return defaultLearnerProfile(now); }
}

export function saveLearnerProfile(profile: LearnerProfile, store: KeyValueStore = localStorage): void {
  try { store.setItem(KEY, JSON.stringify(profile)); } catch { /* storage can be unavailable */ }
}

export function updateLearnerProfile(patch: Partial<LearnerProfile>, store: KeyValueStore = localStorage, now = Date.now()): LearnerProfile {
  const next = { ...loadLearnerProfile(store, now), ...patch, updatedAt: now };
  saveLearnerProfile(next, store);
  return next;
}

export function advanceOnboarding(profile: LearnerProfile, step: OnboardingStep, now = Date.now()): LearnerProfile {
  return { ...profile, onboardingStep: step, updatedAt: now };
}

export function completeOnboarding(profile: LearnerProfile, now = Date.now()): LearnerProfile {
  const name = validateLearnerName(profile.displayName);
  if (!name.valid) return profile;
  return { ...profile, displayName: name.value, onboardingStep: 'ready', onboardingComplete: true, updatedAt: now };
}
