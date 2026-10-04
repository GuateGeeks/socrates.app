import test from 'node:test';
import assert from 'node:assert/strict';
import { emptyAwsProgress, recordAwsResult, parseAwsProgress, chooseAwsProgress } from '../src/aws/progress';

test('records attempts and keeps the best score for a lesson', () => {
  const first = recordAwsResult(emptyAwsProgress(), 'cloud-value', 0.75, '2026-10-03', 10);
  const second = recordAwsResult(first, 'cloud-value', 0.5, '2026-10-04', 20);
  assert.deepEqual(second.lessons['cloud-value'], { bestScore: 0.75, attempts: 2, completedAt: '2026-10-04' });
  assert.equal(first.lessons['cloud-value'].attempts, 1);
  assert.equal(second.updatedAt, 20);
});

test('rejects malformed remote progress and selects the newer valid copy', () => {
  const local = recordAwsResult(emptyAwsProgress(), 'cloud-value', 1, '2026-10-03', 10);
  const remote = recordAwsResult(emptyAwsProgress(), 'cost-tools', 0.5, '2026-10-04', 20);
  assert.equal(chooseAwsProgress(local, remote), remote);
  assert.equal(chooseAwsProgress(local, { ...remote, lessons: { bad: { bestScore: 9 } } }), local);
  assert.equal(parseAwsProgress({ version: 1, lessons: {}, updatedAt: NaN }), null);
});
