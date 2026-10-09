import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseAwsCourse } from '../src/aws/course';
import { emptyAwsProgress, recordAwsResult } from '../src/aws/progress';
import { awsJourney } from '../src/aws/journey';
import { href, parse } from '../src/core/router';

const course = parseAwsCourse(JSON.parse(readFileSync(new URL('../content/aws-cloud-practitioner.json', import.meta.url), 'utf8')));
assert.ok(course);

test('old AWS path links lead to the single module catalog', () => {
  assert.deepEqual(parse('#/aws-ruta'), { name: 'aws-curriculum' });
  assert.deepEqual(parse(href({ name: 'aws-curriculum' })), { name: 'aws-curriculum' });
});

test('journey starts at the first lesson with no earned milestones', () => {
  const journey = awsJourney(course, emptyAwsProgress());
  assert.equal(journey.completed, 0);
  assert.equal(journey.total, 19);
  assert.equal(journey.next?.id, course.domains[0].lessons[0].id);
  assert.equal(journey.domains[0].completed, 0);
  assert.equal(journey.earned.length, 0);
});

test('journey reflects saved results and moves to the next domain', () => {
  let progress = emptyAwsProgress();
  for (const lesson of course.domains[0].lessons) {
    progress = recordAwsResult(progress, lesson.id, 0.8, '2026-10-09');
  }
  const journey = awsJourney(course, progress);
  assert.equal(journey.completed, course.domains[0].lessons.length);
  assert.equal(journey.next?.id, course.domains[1].lessons[0].id);
  assert.equal(journey.domains[0].completed, journey.domains[0].total);
  assert.ok(journey.earned.some(item => item.id === 'first-lesson'));
  assert.ok(journey.earned.some(item => item.id === 'first-domain'));
  assert.ok(!journey.earned.some(item => item.id === 'all-lessons'));
});
