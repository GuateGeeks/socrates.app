import { test } from 'node:test';
import assert from 'node:assert/strict';
import { diagnostico } from '../src/content/sexto/diagnostico';
import { registerAll } from '../src/activities';
import { getActivity } from '../src/core/registry';

test('el diagnóstico permite formar una fracción equivalente manipulando mitades', () => {
  registerAll();
  const step = diagnostico.steps[2];
  assert.equal(step.type, 'fraction-model');
  const activity = getActivity(step.type);
  assert.ok(activity);
  const props = step.props as { sourceNumerator: number; sourceDenominator: number; targetDenominator: number };
  assert.deepEqual([props.sourceNumerator, props.sourceDenominator, props.targetDenominator], [2, 4, 2]);
  assert.equal(activity.isReady?.(props as never, [true, false] as never), true);
  assert.equal(activity.check?.(props as never, [true, false] as never).correct, true);
  assert.equal(activity.check?.(props as never, [true, true] as never).correct, false);
});
