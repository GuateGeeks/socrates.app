import test from 'node:test';
import assert from 'node:assert/strict';
import { parseAwsCourse } from '../src/aws/course';

const sample = {
  schemaVersion: 1, programId: 'aws-cloud-practitioner', published: true,
  examCode: 'CLF-C02', title: 'AWS Certified Cloud Practitioner', description: 'Preparación inicial',
  sourceUrl: 'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',
  domains: [{ id: 'cloud-concepts', title: 'Conceptos de la nube', weight: 24, lessons: [{
    id: 'value-of-cloud', title: 'Valor de la nube', minutes: 10, summary: 'Conceptos básicos',
    sections: [{ heading: 'Elasticidad', body: 'Ajustar recursos a la demanda.' }],
    questions: [{ id: 'q1', prompt: '¿Qué es elasticidad?', options: ['Ajustar recursos', 'Comprar hardware'], correctOption: 0, explanation: 'Se adapta a la demanda.' }],
  }] }],
};

test('accepts a published course with readable lessons and questions', () => {
  const course = parseAwsCourse(sample);
  assert.equal(course?.domains[0].lessons[0].questions[0].correctOption, 0);
});

test('rejects unpublished or malformed course documents', () => {
  assert.equal(parseAwsCourse({ ...sample, published: false }), null);
  assert.equal(parseAwsCourse({ ...sample, domains: [{ ...sample.domains[0], lessons: [{ ...sample.domains[0].lessons[0], questions: [{ ...sample.domains[0].lessons[0].questions[0], correctOption: 9 }] }] }] }), null);
  assert.equal(parseAwsCourse({ ...sample, domains: [{ ...sample.domains[0], lessons: [{ ...sample.domains[0].lessons[0], sections: [] }] }] }), null);
});

test('rejects duplicate lesson IDs across domains', () => {
  assert.equal(parseAwsCourse({ ...sample, domains: [sample.domains[0], { ...sample.domains[0], id: 'security' }] }), null);
});
