import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { isAwsAnswerCorrect, parseAwsCourse } from '../src/aws/course';

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

test('accepts multiple-response questions and scores exact selections', () => {
  const question = { id: 'q2', prompt: 'Elige dos ventajas', options: ['Elasticidad', 'Capacidad fija', 'Agilidad', 'Compra anticipada', 'Hardware propio'], correctOptions: [0, 2], explanation: 'Elasticidad y agilidad.' };
  const lesson = { ...sample.domains[0].lessons[0], questions: [question] };
  const course = parseAwsCourse({ ...sample, domains: [{ ...sample.domains[0], lessons: [lesson] }] });
  assert.ok(course);
  assert.equal(isAwsAnswerCorrect(question, [2, 0]), true);
  assert.equal(isAwsAnswerCorrect(question, [0]), false);
  assert.equal(isAwsAnswerCorrect(question, [0, 1, 2]), false);
  assert.equal(isAwsAnswerCorrect(question, [0, 0]), false);
  assert.equal(parseAwsCourse({ ...sample, domains: [{ ...sample.domains[0], lessons: [{ ...lesson, questions: [{ ...question, correctOptions: [0, 0] }] }] }] }), null);
});

test('source catalog covers every CLF-C02 task with practice', () => {
  const raw = JSON.parse(readFileSync(new URL('../content/aws-cloud-practitioner.json', import.meta.url), 'utf8'));
  const course = parseAwsCourse(raw);
  assert.ok(course);
  assert.deepEqual(course.domains.map((domain) => domain.weight), [24, 30, 34, 12]);
  const codes = course.domains.flatMap((domain) => domain.lessons.map((lesson) => lesson.taskCode));
  assert.deepEqual(codes, ['1.1', '1.2', '1.3', '1.4', '2.1', '2.2', '2.3', '2.4', '3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8', '4.1', '4.2', '4.3']);
  for (const lesson of course.domains.flatMap((domain) => domain.lessons)) {
    assert.ok(lesson.sections.length >= 2, lesson.id);
    assert.ok(lesson.questions.length >= 2, lesson.id);
  }
  assert.ok(course.domains.flatMap((domain) => domain.lessons).some((lesson) => lesson.questions.some((question) => 'correctOptions' in question)));
});

test('practice answers are distributed and legacy lessons assess their stated objectives', () => {
  const raw = JSON.parse(readFileSync(new URL('../content/aws-cloud-practitioner.json', import.meta.url), 'utf8'));
  const course = parseAwsCourse(raw);
  assert.ok(course);
  const lessons = course.domains.flatMap((domain) => domain.lessons);
  const single = lessons.flatMap((lesson) => lesson.questions).filter((question) => question.correctOption !== undefined);
  const counts = [0, 1, 2, 3].map((index) => single.filter((question) => question.correctOption === index).length);
  assert.ok(Math.max(...counts) <= Math.ceil(single.length * 0.4), `Answer positions are unbalanced: ${counts.join(', ')}`);
  const prompts = (code: string) => lessons.find((lesson) => lesson.taskCode === code)?.questions.map((question) => `${question.prompt} ${question.options.join(' ')}`).join(' ') ?? '';
  assert.match(prompts('3.2'), /ubicaciones perif[eé]ricas/i);
  assert.match(prompts('3.2'), /regiones/i);
  assert.match(prompts('4.2'), /facturaci[oó]n unificada/i);
  assert.match(prompts('4.2'), /etiquetas/i);
  assert.match(prompts('4.2'), /Pricing Calculator|calculadora/i);
  assert.doesNotMatch(prompts('4.2'), /Spot/i);
});
