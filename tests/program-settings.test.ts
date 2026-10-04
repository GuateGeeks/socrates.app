import test from 'node:test';
import assert from 'node:assert/strict';
import { emptyProgress } from '../src/core/progress';
import { defaultLearnerProfile } from '../src/core/learner-profile';
import { preferencesForProgram } from '../src/core/program-settings';

test('AWS preferences come from the learner profile without changing CNB settings', () => {
  const cnb = emptyProgress().settings;
  const learner = { ...defaultLearnerProfile(1), theme: 'dark' as const, sound: false, haptics: false, reducedMotion: true };
  const aws = preferencesForProgram('aws-cloud-practitioner', cnb, learner);
  assert.equal(aws.theme, 'dark');
  assert.equal(aws.sound, false);
  assert.equal(aws.reducedMotion, true);
  assert.equal(cnb.theme, 'auto');
  assert.equal(preferencesForProgram('cnb-sexto', cnb, learner), cnb);
});
