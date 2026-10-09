import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as survey from '../src/core/beta-survey';
import { emptyProgress } from '../src/core/progress';

test('invita a opinar solo al terminar la primera lección', () => {
  const progress = emptyProgress();
  const offer = (survey as Record<string, unknown>).shouldOfferSurveyAfterLesson as
    (lessons: typeof progress.lessons, submittedAt: number | null, dismissed: boolean) => boolean;
  progress.lessons.primera = { stars: 2, score: 0.8, completedAt: '2026-10-05', runs: 1 };
  assert.equal(offer(progress.lessons, null, false), true);
  assert.equal(offer(progress.lessons, null, true), false);
  assert.equal(offer(progress.lessons, Date.now(), false), false);
  progress.lessons.segunda = { stars: 2, score: 0.8, completedAt: '2026-10-05', runs: 1 };
  assert.equal(offer(progress.lessons, null, false), false);
});
