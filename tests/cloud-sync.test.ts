import test from 'node:test';
import assert from 'node:assert/strict';
import { emptyProgress } from '../src/core/progress';
import { chooseSnapshot, makeCloudSnapshot, parseCloudSnapshot } from '../src/core/cloud-sync';

test('cloud snapshots round-trip valid progress', () => {
  const local = emptyProgress();
  const envelope = makeCloudSnapshot(local, 10);
  assert.deepEqual(parseCloudSnapshot(envelope), envelope);
});

test('invalid remote snapshots never replace local progress', () => {
  const local = makeCloudSnapshot(emptyProgress(), 10);
  assert.deepEqual(chooseSnapshot(local, { schemaVersion: 8 }), local);
});

test('newest valid snapshot wins and ties preserve local', () => {
  const a = emptyProgress();
  const b = { ...emptyProgress(), xp: 20 };
  const local = makeCloudSnapshot(a, 10);
  assert.equal(chooseSnapshot(local, makeCloudSnapshot(b, 11)).snapshot.xp, 20);
  assert.equal(chooseSnapshot(local, makeCloudSnapshot(b, 10)).snapshot.xp, 0);
});
