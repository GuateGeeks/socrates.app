import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { PRACTICES, checkPractice, practiceReady, type PracticeValue } from '../src/aws/practice';
import { parseAwsCourse } from '../src/aws/course';

test('guided practices belong to existing lessons and cover all four domains', () => {
  const course = parseAwsCourse(JSON.parse(readFileSync(new URL('../content/aws-cloud-practitioner.json', import.meta.url), 'utf8')))!;
  assert.equal(Object.keys(PRACTICES).length, 4);
  for (const domain of course.domains) {
    assert.equal(domain.lessons.filter(lesson => PRACTICES[lesson.id]).length, 1);
  }
  for (const [id, practice] of Object.entries(PRACTICES)) {
    assert.ok(course.domains.some(domain => domain.lessons.some(lesson => lesson.id === id)));
    assert.equal(new Set(practice.items.map(item => item.id)).size, practice.items.length);
    for (const item of practice.items) {
      assert.ok(practice.targets.some(target => target.id === item.target));
      assert.ok(item.explanation.length > 20);
    }
  }
});

test('cloud concepts include public, private and hybrid deployment scenarios', () => {
  const practice = PRACTICES['cloud-value'];
  for (const model of ['public', 'private', 'hybrid']) {
    assert.ok(practice.items.some(item => item.target === model), `Missing deployment model: ${model}`);
  }
});

test('assignments must be complete and valid before checking', () => {
  const practice = PRACTICES['shared-responsibility'];
  assert.equal(practiceReady(practice, {}), false);
  const invalid = Object.fromEntries(practice.items.map(item => [item.id, 'unknown']));
  assert.equal(practiceReady(practice, { assignments: invalid }), false);
  assert.equal(checkPractice(practice, {}).correct, false);
  const wrong = Object.fromEntries(practice.items.map(item => [item.id, practice.targets.find(target => target.id !== item.target)!.id]));
  assert.equal(practiceReady(practice, { assignments: wrong }), true);
  assert.equal(checkPractice(practice, { assignments: wrong }).correct, false);
  const value = { assignments: Object.fromEntries(practice.items.map(item => [item.id, item.target])) };
  const before = JSON.stringify(value);
  assert.equal(checkPractice(practice, value).correct, true);
  assert.equal(JSON.stringify(value), before);
});

test('service flow requires exact unique steps as well as correct associations', () => {
  const practice = PRACTICES['global-infrastructure'];
  const value: PracticeValue = { assignments: Object.fromEntries(practice.items.map(item => [item.id, item.target])) };
  assert.equal(practiceReady(practice, value), false);
  const correctOrder = practice.flow!.map(step => step.id);
  assert.equal(practiceReady(practice, { ...value, order: correctOrder.map(() => correctOrder[0]) }), false);
  assert.equal(practiceReady(practice, { ...value, order: [...correctOrder, 'extra'] }), false);
  const wrongOrder = [...correctOrder].reverse();
  assert.equal(practiceReady(practice, { ...value, order: wrongOrder }), true);
  assert.equal(checkPractice(practice, { ...value, order: wrongOrder }).correct, false);
  assert.equal(checkPractice(practice, { ...value, order: correctOrder }).correct, true);
});
