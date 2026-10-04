import type { LearnerProfile } from './learner-profile';
import type { Settings } from './progress';
import type { ProgramId } from './programs';

/** AWS uses profile preferences without writing to CNB's progress snapshot. */
export function preferencesForProgram(program: ProgramId | null, cnb: Settings, profile: LearnerProfile): Settings {
  return program === 'aws-cloud-practitioner'
    ? { ...cnb, theme: profile.theme, sound: profile.sound, haptics: profile.haptics,
      reducedMotion: profile.reducedMotion, dailyGoal: profile.dailyGoal }
    : cnb;
}
