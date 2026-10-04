import test from 'node:test';
import assert from 'node:assert/strict';
import { href, parse } from '../src/core/router';

test('AWS curriculum and lesson URLs round-trip without entering CNB routes', () => {
  const curriculum = { name: 'aws-curriculum' } as const;
  const domain = { name: 'aws-domain', domainId: 'cloud-concepts' } as const;
  const lesson = { name: 'aws-lesson', lessonId: 'cloud-value' } as const;
  assert.deepEqual(parse(href(curriculum)), curriculum);
  assert.deepEqual(parse(href(domain)), domain);
  assert.deepEqual(parse(href(lesson)), lesson);
});
