import { test } from 'node:test';
import assert from 'node:assert/strict';
import { registerAll } from '../src/activities/index';
import { getActivity, listActivities } from '../src/core/registry';
import { initialStep, stepReducer, canSubmit, outcomeOf } from '../src/core/engine';
import { parseNumber, shuffled } from '../src/activities/util';
import { toVigesimal } from '../src/activities/shared';
import { mayaTotal } from '../src/activities/maya-number';
import { setStorageAdapter, recordLesson, getProgress, emptyProgress, nivel, reviewJournalEntry, JOURNAL_STATUS_META, type Progress } from '../src/core/progress';
import { parseDosificacion } from '../scripts/build-cnb.mjs';
import { COURSE, evaluateBadges } from '../src/content/index';
import { mediaReplacementSummary } from '../src/media/mockRegistry';
import { isShortAnswerReady } from '../src/activities/short-answer';

registerAll();

test('registro: 17 actividades, tipos únicos', () => {
  const types = listActivities().map((a) => a.type);
  assert.equal(new Set(types).size, types.length);
  assert.ok(types.length >= 17);
});

test('numeración maya: vigesimal y cuenta larga', () => {
  assert.deepEqual(toVigesimal(0), [0]);
  assert.deepEqual(toVigesimal(45), [5, 2]);
  assert.deepEqual(toVigesimal(365), [5, 18]);
  assert.equal(mayaTotal([5, 2]), 45);
  assert.equal(mayaTotal([0, 1, 1], true), 380); // 1 tun + 1 winal
  assert.equal(mayaTotal([5, 2, 0, 1], true), 7245);
});

test('parseNumber acepta fracciones, mixtos y coma decimal', () => {
  assert.equal(parseNumber('3/4'), 0.75);
  assert.equal(parseNumber('1 1/2'), 1.5);
  assert.equal(parseNumber('0,75'), 0.75);
  assert.equal(parseNumber('-3'), -3);
  assert.equal(parseNumber('1/0'), null);
  assert.equal(parseNumber(''), null);
});

test('barajado determinista', () => {
  const a = [1, 2, 3, 4, 5];
  assert.deepEqual(shuffled(a, 'x'), shuffled(a, 'x'));
  assert.notDeepEqual(shuffled(a, 'x'), a);
});

test('máquina de estados: incorrecto → reintento → correcto', () => {
  const def = getActivity('choice')!;
  const step = { id: 's', type: 'choice', fase: 'aplicar' as const, areas: ['mat' as const], cnb: [], prompt: '?', props: { options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B', feedback: 'no' }], correct: ['a'] } };
  let s = initialStep();
  assert.equal(canSubmit(def, step, s), false);
  s = stepReducer(s, { type: 'change', value: ['b'] });
  assert.equal(canSubmit(def, step, s), true);
  s = stepReducer(s, { type: 'check', def, step });
  assert.equal(s.status, 'incorrect');
  assert.equal(s.result?.feedback, 'no');
  s = stepReducer(s, { type: 'retry' });
  s = stepReducer(s, { type: 'change', value: ['a'] });
  s = stepReducer(s, { type: 'check', def, step });
  assert.equal(s.status, 'correct');
  const o = outcomeOf(def, s);
  assert.equal(o.firstTry, false);
  assert.equal(o.correct, true);
  // una vez correcto, no se puede cambiar la respuesta
  assert.equal(stepReducer(s, { type: 'change', value: ['b'] }), s);
});

test('revelar solución la aplica como valor', () => {
  const def = getActivity('number-input')!;
  const step = { id: 'n', type: 'number-input', fase: 'aplicar' as const, areas: ['mat' as const], cnb: [], prompt: '?', props: { answer: 42 } };
  const s = stepReducer(initialStep(), { type: 'reveal', def, step });
  assert.equal(s.status, 'revealed');
  assert.equal(s.value, '42');
});

test('recordLesson: XP, estrellas, evidencia por indicador e insignias', () => {
  let mem: Progress | null = null;
  setStorageAdapter({ load: () => mem, save: (p) => { mem = p; } });
  const mission = COURSE.missions[0];
  const lesson = mission.lessons[0];
  const outcomes = lesson.steps.map((step) => ({ step, graded: getActivity(step.type)!.graded, correct: true, firstTry: true, score: 1 }));
  const sum = recordLesson(mission, lesson, outcomes, evaluateBadges);
  assert.equal(sum.stars, 3);
  assert.ok(sum.xpGained > 50);
  assert.ok(sum.newBadges.includes('primer-paso'));
  const p = getProgress();
  assert.equal(p.lessons[lesson.id].stars, 3);
  assert.ok(Object.keys(p.evidence).includes('mat:4.1'));
  assert.equal(nivel(p.evidence['mat:4.1']), 'destacado');
  assert.equal(p.streak.count, 1);
  setStorageAdapter({ load: () => emptyProgress(), save: () => {} });
});

test('respuesta escrita exige texto sustantivo y completar la rubrica', () => {
  const props = { minWords: 8, model: 'Un modelo breve.', rubric: ['Inclui evidencia', 'Explique mi decision'] };
  assert.equal(isShortAnswerReady(props, { text: 'agua agua agua agua agua agua agua agua', checks: [true, true], seen: true }), false);
  assert.equal(isShortAnswerReady(props, { text: 'Compare dos fuentes y explique una diferencia clara', checks: [true, false], seen: true }), false);
  assert.equal(isShortAnswerReady(props, { text: 'Compare dos fuentes y explique una diferencia clara', checks: [true, true], seen: true }), true);
});

test('respuesta escrita se guarda pendiente de revision sin acreditar dominio', () => {
  let mem: Progress | null = null;
  setStorageAdapter({ load: () => mem, save: (p) => { mem = p; } });
  const mission = COURSE.missions[0];
  const step = {
    id: 'journal-fixture', type: 'short-answer', fase: 'aplicar' as const, areas: ['l1' as const],
    cnb: ['l1:3.4.2'], prompt: 'Escribe una respuesta.',
    props: { minWords: 6, model: 'Modelo.', rubric: ['Inclui evidencia', 'Revise claridad'] },
  };
  const lesson = { id: 'journal-lesson', title: 'Diario', minutes: 5, steps: [step] };
  recordLesson(mission, lesson, [{
    step, graded: false, correct: true, firstTry: true, score: 1,
    value: { text: 'Esta respuesta incluye evidencia y una explicacion clara', checks: [true, true], seen: true },
  }], () => []);

  const progress = getProgress();
  assert.equal(progress.evidence['l1:3.4'], undefined);
  assert.equal(progress.contenidos?.['l1:3.4.2'], undefined);
  assert.deepEqual(progress.journal['journal-lesson/journal-fixture'], {
    stepId: 'journal-fixture',
    value: JSON.stringify({ text: 'Esta respuesta incluye evidencia y una explicacion clara', checks: [true, true], seen: true }),
    at: progress.lessons['journal-lesson'].completedAt,
    status: 'pending-review',
    primaryArea: 'l1',
    cnb: ['l1:3.4.2'],
    review: { criteria: ['Inclui evidencia', 'Revise claridad'], selfChecks: [true, true] },
  });
  setStorageAdapter({ load: () => emptyProgress(), save: () => {} });
});

test('hidratacion recupera el area segura de diarios pendientes creados antes de guardarla', () => {
  const stored = {
    ...emptyProgress(),
    journal: {
      'lesson/step': {
        stepId: 'step', value: '{}', at: '2026-01-21', status: 'pending-review', cnb: ['l1:3.4.2'],
        review: { criteria: ['Es claro'], selfChecks: [true] },
      },
    },
  } as unknown as Progress;
  setStorageAdapter({ load: () => stored, save: () => {} });
  assert.equal(getProgress().journal['lesson/step'].status, 'pending-review');
  assert.equal(getProgress().journal['lesson/step'].primaryArea, 'l1');
  setStorageAdapter({ load: () => emptyProgress(), save: () => {} });
});

test('estados del diario exponen etiquetas docentes distintas y accesibles', () => {
  assert.deepEqual(Object.fromEntries(Object.entries(JOURNAL_STATUS_META).map(([status, value]) => [status, value.label])), {
    'pending-review': 'Pendiente de revisión',
    approved: 'Aprobada',
    'needs-revision': 'Necesita revisión',
    'self-recorded': 'Registro ordinario',
    legacy: 'Registro anterior',
  });
});

test('aprobar un diario acredita sus referencias de la misma area exactamente una vez y persiste', () => {
  let mem: Progress | null = null;
  setStorageAdapter({ load: () => mem, save: (p) => { mem = structuredClone(p); } });
  const mission = COURSE.missions[0];
  const step = {
    id: 'approval-fixture', type: 'short-answer', fase: 'aplicar' as const, areas: ['l1' as const],
    cnb: ['l1:3.4.1', 'l1:3.4.2', 'ccss:7.1.3'], prompt: 'Escribe.',
    props: { minWords: 6, model: 'Modelo.', rubric: ['Inclui evidencia'] },
  };
  recordLesson(mission, { id: 'approval-lesson', title: 'Diario', minutes: 5, steps: [step] }, [{
    step, graded: false, correct: true, firstTry: true, score: 1,
    value: { text: 'Escribi una respuesta con evidencia concreta suficiente', checks: [true], seen: true },
  }], () => []);

  reviewJournalEntry('approval-lesson/approval-fixture', 'approve');
  const approved = structuredClone(getProgress());
  assert.equal(approved.journal['approval-lesson/approval-fixture'].status, 'approved');
  assert.match(approved.journal['approval-lesson/approval-fixture'].reviewedAt ?? '', /^\d{4}-\d{2}-\d{2}$/);
  assert.deepEqual(approved.evidence['l1:3.4'], { ok: 1, total: 1, last: approved.journal['approval-lesson/approval-fixture'].reviewedAt });
  assert.deepEqual(approved.contenidos?.['l1:3.4.1'], { ok: 1, total: 1, last: approved.journal['approval-lesson/approval-fixture'].reviewedAt });
  assert.deepEqual(approved.contenidos?.['l1:3.4.2'], { ok: 1, total: 1, last: approved.journal['approval-lesson/approval-fixture'].reviewedAt });
  assert.equal(approved.evidence['ccss:7.1'], undefined, 'una referencia de otra area no debe recibir credito');
  assert.equal(approved.contenidos?.['ccss:7.1.3'], undefined);
  assert.deepEqual(mem, approved, 'la decisión debe persistirse mediante el adaptador');

  reviewJournalEntry('approval-lesson/approval-fixture', 'approve');
  assert.deepEqual(getProgress(), approved, 'aprobar de nuevo no debe duplicar dominio');
  setStorageAdapter({ load: () => emptyProgress(), save: () => {} });
});

test('solicitar revision persiste la decision sin acreditar dominio ni permitir aprobacion tardia directa', () => {
  let mem: Progress | null = null;
  const pending = {
    ...emptyProgress(),
    journal: {
      'lesson/step': {
        stepId: 'step', value: '{}', at: '2026-01-21', status: 'pending-review', primaryArea: 'l1', cnb: ['l1:3.4.2'],
        review: { criteria: ['Es claro'], selfChecks: [true] },
      },
    },
  } as unknown as Progress;
  setStorageAdapter({ load: () => pending, save: (p) => { mem = structuredClone(p); } });
  reviewJournalEntry('lesson/step', 'revision');
  assert.equal(getProgress().journal['lesson/step'].status, 'needs-revision');
  assert.match(getProgress().journal['lesson/step'].reviewedAt ?? '', /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(getProgress().evidence['l1:3.4'], undefined);
  assert.deepEqual(mem, getProgress());

  reviewJournalEntry('lesson/step', 'approve');
  assert.equal(getProgress().journal['lesson/step'].status, 'needs-revision');
  assert.equal(getProgress().evidence['l1:3.4'], undefined);
  setStorageAdapter({ load: () => emptyProgress(), save: () => {} });
});

test('hidratacion normaliza diarios v1 antiguos como registros legacy sin evidencia revisable', () => {
  const legacy = {
    ...emptyProgress(),
    journal: {
      'old-lesson/old-step': { stepId: 'old-step', value: 'Reflexion guardada antes de las revisiones.', at: '2026-01-20' },
    },
  } as unknown as Progress;
  setStorageAdapter({ load: () => legacy, save: () => {} });

  assert.deepEqual(getProgress().journal['old-lesson/old-step'], {
    stepId: 'old-step',
    value: 'Reflexion guardada antes de las revisiones.',
    at: '2026-01-20',
    status: 'legacy',
    cnb: [],
  });
  assert.equal(getProgress().evidence['l1:3.4'], undefined);
  setStorageAdapter({ load: () => emptyProgress(), save: () => {} });
});

test('parser CNB: competencias, indicadores, contenidos y unidades', () => {
  const md = `---\nfuente: x\n---\n| A | B | C | D |  |  |  |\n| --- | --- | --- | --- | --- | --- | --- |\n| Competencias | Indicadores de logro | Contenidos | Unidades |  |  |  |\n|  |  |  | 1 | 2 | 3 | 4 |\n| 1. Compite. | 1.1. Indica. | 1.1.1. Identificación de algo. | X |  |  |  |\n|  |  | 1.1.2 Cálculo de otra cosa. |  | X | X |  |\n|  |  | ...continuación. |  |  |  |  |\n|  | 1.2 Otro. | 1.2.1. Valoración del trabajo. |  |  |  | X |`;
  const r = parseDosificacion(md, 'mat');
  assert.equal(r.competencias.length, 1);
  const [i1, i2] = r.competencias[0].indicadores;
  assert.equal(i1.id, 'mat:1.1');
  assert.equal(i1.contenidos.length, 2);
  assert.deepEqual(i1.contenidos[1].unidades, [2, 3]);
  assert.match(i1.contenidos[1].text, /continuación/);
  assert.equal(i1.contenidos[0].tipo, 'declarativo');
  assert.equal(i1.contenidos[1].tipo, 'procedimental');
  assert.equal(i2.contenidos[0].tipo, 'actitudinal');
});

/* ---------------- v2: nuevas actividades, repaso, calendario, semana de validación ---------------- */
import { parseBlanks } from '../src/activities/fill-blank';
import { tokenize } from '../src/activities/highlight';
import { recordReview, dueReviews, addDays, schoolWeek, today as todayFn } from '../src/core/progress';
import { WEEKS } from '../src/content/index';

test('fill-blank: espacios con alternativas', () => {
  const parts = parseBlanks('El [[núcleo|nucleo]] guarda el [[ADN]].');
  const blanks = parts.filter((p) => p.t === 'blank');
  assert.equal(blanks.length, 2);
  const def = getActivity('fill-blank')!;
  assert.equal(def.check!({ text: 'El [[núcleo|nucleo]] guarda el [[ADN]].' }, ['Nucleo', 'adn']).correct, true);
  assert.equal(def.check!({ text: 'El [[núcleo]] guarda el [[ADN]].' }, ['membrana', 'ADN']).correct, false);
});

test('highlight: objetivos entre llaves y puntuación no seleccionable', () => {
  const t = tokenize('La {niña} corre, {rápido}.');
  assert.deepEqual(t.filter((x) => x.target).map((x) => x.w), ['niña', 'rápido']);
  const def = getActivity('highlight')!;
  const sol = def.solution!({ text: 'La {niña} corre, {rápido}.' });
  assert.equal(def.check!({ text: 'La {niña} corre, {rápido}.' }, sol).correct, true);
});

test('true-false exige verdaderas y falsas', () => {
  const def = getActivity('true-false')!;
  assert.ok(def.validate!({ statements: [{ text: 'a', answer: true }, { text: 'b', answer: true }] }).length > 0);
  assert.equal(def.check!({ statements: [{ text: 'a', answer: true }, { text: 'b', answer: false }] }, [true, false]).correct, true);
});

test('repaso espaciado (Leitner): acierto sube de caja, error vuelve a la 1', () => {
  let mem: Progress | null = { ...emptyProgress(), review: { x: { missionId: 'm', lessonId: 'l', stepId: 'x', box: 1, due: todayFn() } } };
  setStorageAdapter({ load: () => mem, save: (p) => { mem = p; } });
  assert.equal(dueReviews(getProgress()).length, 1);
  recordReview('x', true);
  assert.equal(getProgress().review!.x.box, 2);
  assert.equal(getProgress().review!.x.due, addDays(todayFn(), 3));
  recordReview('x', false);
  assert.equal(getProgress().review!.x.box, 1);
  assert.equal(dueReviews(getProgress()).length, 0);
  setStorageAdapter({ load: () => emptyProgress(), save: () => {} });
});

test('calendario escolar: semana según fecha de inicio', () => {
  assert.equal(schoolWeek('2027-01-18', '2027-01-18'), 1);
  assert.equal(schoolWeek('2027-01-18', '2027-01-25'), 2);
  assert.equal(schoolWeek('2027-01-18', '2027-01-10'), 0);
  assert.equal(schoolWeek('2027-01-18', '2028-01-18'), 41);
});

test('año: 40 semanas y semanas de validación armadas desde los bancos', () => {
  assert.equal(WEEKS.length, 40);
  const v = WEEKS.find((w) => w.semana === 10)!;
  assert.equal(v.kind, 'validacion');
  assert.ok(v.lessons.length >= 5);
  assert.equal(v.lessons[v.lessons.length - 1].id, 's10-d5-portafolio');
  const ids = v.lessons.flatMap((l) => l.steps.map((s) => s.id));
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(v.lessons[0].steps.every((s) => s.fase === 'comprobar'));
});

test('medios: el registro interno lista maquetas y cómo reemplazarlas', () => {
  const summary = mediaReplacementSummary();
  assert.ok(summary.total >= 500);
  assert.equal(summary.produced, 0);
  assert.equal(summary.mocked, summary.total);
  assert.ok(summary.rows.every((r) => r.replacement.fileTarget.startsWith('public/media/')));
  assert.ok(summary.rows.every((r) => r.replacement.registrySnippet.includes(r.slot.id)));
  assert.ok(summary.rows.some((r) => r.slot.brief.length >= 60));
});
