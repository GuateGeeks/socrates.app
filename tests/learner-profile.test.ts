import test from 'node:test';
import assert from 'node:assert/strict';
import {
  advanceOnboarding, completeOnboarding, defaultLearnerProfile,
  loadLearnerProfile, saveLearnerProfile, validateLearnerName,
  selectProgram,
} from '../src/core/learner-profile';

class MemoryStore {
  data = new Map<string, string>();
  getItem(key: string) { return this.data.get(key) ?? null; }
  setItem(key: string, value: string) { this.data.set(key, value); }
}

test('learner profile defaults to an incomplete welcome step', () => {
  const profile = defaultLearnerProfile(100);
  assert.equal(profile.onboardingStep, 'welcome');
  assert.equal(profile.onboardingComplete, false);
  assert.equal(profile.avatar, 'Bird');
  assert.equal(profile.updatedAt, 100);
  assert.equal(profile.activeProgram, null);
});

test('learner name validation trims and bounds the value', () => {
  assert.deepEqual(validateLearnerName('  Ada  '), { valid: true, value: 'Ada' });
  assert.equal(validateLearnerName('   ').valid, false);
  assert.equal(validateLearnerName('a'.repeat(31)).valid, false);
});

test('profile checkpoints persist and malformed fields fall back safely', () => {
  const store = new MemoryStore();
  const next = advanceOnboarding({ ...defaultLearnerProfile(1), displayName: 'Ada' }, 'avatar', 2);
  saveLearnerProfile(next, store);
  assert.deepEqual(loadLearnerProfile(store, 3), next);
  store.setItem('socrates.learner.v1', JSON.stringify({ displayName: 9, avatar: 'Dragon', dailyGoal: 999 }));
  const safe = loadLearnerProfile(store, 4);
  assert.equal(safe.displayName, '');
  assert.equal(safe.avatar, 'Bird');
  assert.equal(safe.dailyGoal, 50);
});

test('completion trims the name and marks setup complete', () => {
  const profile = { ...defaultLearnerProfile(1), displayName: '  Ada  ', activeProgram: 'aws-cloud-practitioner' as const, onboardingStep: 'ready' as const };
  const done = completeOnboarding(profile, 5);
  assert.equal(done.displayName, 'Ada');
  assert.equal(done.onboardingComplete, true);
  assert.deepEqual(done.enrolledPrograms, ['aws-cloud-practitioner']);
  assert.equal(done.updatedAt, 5);
});

test('setup requires an enrolled program', () => {
  const profile = { ...defaultLearnerProfile(1), displayName: 'Ada', onboardingStep: 'ready' as const };
  assert.equal(completeOnboarding(profile, 5).onboardingComplete, false);
});

test('existing completed profiles continue in CNB', () => {
  const store = new MemoryStore();
  store.setItem('socrates.learner.v1', JSON.stringify({ ...defaultLearnerProfile(1), displayName: 'Ada', onboardingComplete: true }));
  const profile = loadLearnerProfile(store, 5);
  assert.equal(profile.activeProgram, 'cnb-sexto');
  assert.deepEqual(profile.enrolledPrograms, ['cnb-sexto']);
});

test('switching programs retains both enrollments', () => {
  const cnb = selectProgram(defaultLearnerProfile(1), 'cnb-sexto', 2);
  const aws = selectProgram(cnb, 'aws-cloud-practitioner', 3);
  assert.equal(aws.activeProgram, 'aws-cloud-practitioner');
  assert.deepEqual(aws.enrolledPrograms, ['cnb-sexto', 'aws-cloud-practitioner']);
  assert.deepEqual(selectProgram(aws, 'cnb-sexto', 4).enrolledPrograms, aws.enrolledPrograms);
});
