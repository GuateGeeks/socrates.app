import test from 'node:test';
import assert from 'node:assert/strict';
import { SURVEY_QUESTIONS, createSurveySubmission, emptySurveyAnswers, firstSurveyInputId, focusSurveyError, loadSurveyDraft, saveSurveyDraft, validateSurveyAnswers } from '../src/core/beta-survey';
import { href, parse } from '../src/core/router';

test('beta survey contains exactly ten focused questions', () => {
  assert.equal(SURVEY_QUESTIONS.length, 10);
  assert.deepEqual(SURVEY_QUESTIONS.map((question) => question.id), [
    'role', 'overall', 'clarity', 'engagement', 'difficulty', 'visuals', 'navigation',
    'interactivity', 'bestPart', 'firstImprovement',
  ]);
  assert.ok(SURVEY_QUESTIONS.every((question) => !/CNB|curr[ií]culo/i.test(question.label)));
});

test('survey validation identifies unanswered and malformed responses', () => {
  const answers = emptySurveyAnswers();
  assert.deepEqual(validateSurveyAnswers(answers), ['role', 'overall', 'clarity', 'engagement', 'difficulty', 'visuals', 'navigation', 'interactivity', 'bestPart', 'firstImprovement']);
  const valid = {
    role: 'student', overall: 4, clarity: 5, engagement: 4, difficulty: 3,
    visuals: 5, navigation: 4, interactivity: 4,
    bestPart: 'Las actividades.', firstImprovement: 'Mejorar la velocidad.',
  } as const;
  assert.deepEqual(validateSurveyAnswers(valid), []);
  assert.deepEqual(validateSurveyAnswers({ ...valid, overall: 6, bestPart: 'x'.repeat(501) }), ['overall', 'bestPart']);
});

test('named submission trims profile name and comments before storage', () => {
  const answers = { role: 'student' as const, overall: 4, clarity: 5, engagement: 4, difficulty: 3,
    visuals: 5, navigation: 4, interactivity: 4, bestPart: '  Las actividades.  ',
    firstImprovement: '  Mejorar la velocidad.  ' };
  assert.deepEqual(createSurveySubmission('  Ixchel  ', answers), {
    version: 1, displayName: 'Ixchel',
    answers: { ...answers, bestPart: 'Las actividades.', firstImprovement: 'Mejorar la velocidad.' },
  });
  assert.throws(() => createSurveySubmission(' ', answers), /nombre de tu perfil/);
  assert.throws(() => createSurveySubmission('Ixchel', { ...answers, overall: 0 }), /diez respuestas/);
});

test('survey has a stable route back from Settings', () => {
  assert.deepEqual(parse('#/encuesta-beta'), { name: 'encuesta-beta' });
  assert.equal(href({ name: 'encuesta-beta' }), '#/encuesta-beta');
});

test('invalid survey response points focus at its first real control', () => {
  assert.equal(firstSurveyInputId('role'), 'survey-input-role');
  assert.equal(firstSurveyInputId('clarity'), 'survey-input-clarity');
  assert.equal(firstSurveyInputId('bestPart'), 'answer-bestPart');
});

test('survey error focus waits until its description exists', () => {
  let focused = false;
  const input = { focus: () => { focused = true; } };
  const elements = new Map<string, { focus?: () => void }>([['survey-input-role', input]]);
  const root = { getElementById: (id: string) => elements.get(id) ?? null };
  assert.equal(focusSurveyError(root, 'role'), false);
  assert.equal(focused, false);
  elements.set('survey-error-role', {});
  assert.equal(focusSurveyError(root, 'role'), true);
  assert.equal(focused, true);
});

test('local survey draft preserves answers and recovers from malformed storage', () => {
  const storage = new Map<string, string>();
  const prior = globalThis.localStorage;
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: {
    getItem: (key: string) => storage.get(key) ?? null,
    setItem: (key: string, value: string) => { storage.set(key, value); },
  } });
  try {
    const answers = { ...emptySurveyAnswers(), role: 'student' as const, overall: 4, bestPart: 'Las actividades.' };
    saveSurveyDraft({ version: 1, answers, submittedAt: 123 });
    assert.deepEqual(loadSurveyDraft(), { version: 1, answers, submittedAt: 123 });
    storage.set('socrates.beta-survey.v1', '{bad json');
    assert.deepEqual(loadSurveyDraft().answers, emptySurveyAnswers());
  } finally {
    if (prior === undefined) delete (globalThis as { localStorage?: Storage }).localStorage;
    else Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: prior });
  }
});
