import test from 'node:test';
import assert from 'node:assert/strict';
import { startRetriedCloudSync } from '../src/core/retry-cloud-sync';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

test('retries a failed connection and stops the eventual listener', async () => {
  let attempts = 0;
  let disconnected = 0;
  const stop = startRetriedCloudSync(async () => {
    attempts++;
    if (attempts === 1) throw new Error('offline');
    return () => { disconnected++; };
  }, 1);
  await wait(30);
  assert.equal(attempts, 2);
  stop();
  assert.equal(disconnected, 1);
});

test('stopping before a pending connection finishes closes it', async () => {
  let finish!: (unsubscribe: () => void) => void;
  let disconnected = 0;
  const stop = startRetriedCloudSync(() => new Promise((resolve) => { finish = resolve; }), 1);
  await Promise.resolve();
  stop();
  finish(() => { disconnected++; });
  await wait(0);
  assert.equal(disconnected, 1);
});
