import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import type { StepBase } from '../src/core/types';
import mat from '../src/content/sexto/materias/mat/u2';
import l2 from '../src/content/sexto/materias/l2/u2';
import pyd from '../src/content/sexto/materias/pyd/u2';

const graded = new Set(['choice', 'sort', 'order', 'match', 'number-input', 'true-false', 'fill-blank', 'highlight', 'reading', 'maya-number', 'polygon-lab', 'coordinate-map', 'chart-builder']);
const plan = JSON.parse(readFileSync(new URL('../src/content/sexto/plan.json', import.meta.url), 'utf8'));
const weeks = plan.unidades.find((unit: { unidad: number }) => unit.unidad === 2).semanas.filter((week: { tipo: string }) => week.tipo === 'aprendizaje');
const units = [mat, l2, pyd];
const counts = { mat: 5, l2: 2, pyd: 1 } as const;
const rank = { explorar: 0, construir: 1, aplicar: 2, comprobar: 3, reflexionar: 4 } as const;

for (const unit of units) {
  const area = unit.area as keyof typeof counts;
  test(`U2 ${area}: ocho semanas y cobertura del plan`, () => {
    assert.equal(Object.keys(unit.semanas).length, 8);
    for (const week of weeks) {
      const lessons = unit.semanas[week.semana] ?? [];
      assert.equal(lessons.length, counts[area], `${area} semana ${week.semana}`);
      const taught = new Set(lessons.flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb)));
      for (const ref of week.contenidos[area]) assert.ok(taught.has(ref), `${area} semana ${week.semana}: falta ${ref}`);
    }
  });

  test(`U2 ${area}: enseñanza, práctica y salidas independientes`, () => {
    for (const week of weeks) for (const [index, lesson] of (unit.semanas[week.semana] ?? []).entries()) {
      assert.equal(lesson.id, `s${week.semana}-${area}-${index + 1}`);
      assert.ok(lesson.minutes >= 8 && lesson.minutes <= 20);
      assert.ok(lesson.steps.length >= 9 && lesson.steps.length <= 14);
      assert.ok(lesson.media?.brief && lesson.media.alt && lesson.media.id);
      assert.ok(lesson.steps.filter((step) => ['explain', 'reading', 'worked-example'].includes(step.type)).length >= 2);
      assert.ok(lesson.steps.some((step) => step.type === 'worked-example'));
      for (const step of lesson.steps.filter((item) => item.type === 'worked-example')) {
        assert.ok((step.props as { steps?: unknown[] }).steps!.length >= 2, `${lesson.id}: ejemplo con un solo paso`);
      }
      for (const step of lesson.steps.filter((item) => item.type === 'true-false')) {
        const statements = (step.props as { statements?: { answer: boolean }[] }).statements!;
        assert.ok(statements.length >= 2, `${lesson.id}: verdadero/falso con una sola afirmación`);
        assert.deepEqual(new Set(statements.map((item) => item.answer)), new Set([true, false]), `${lesson.id}: faltan verdaderas o falsas`);
      }
      assert.ok(lesson.steps.some((step) => step.fase === 'construir' && graded.has(step.type) && step.hint && step.explain));
      assert.ok(lesson.steps.some((step) => step.fase === 'aplicar' && graded.has(step.type) && !step.hint));
      const exits = lesson.steps.filter((step) => step.fase === 'comprobar' && graded.has(step.type));
      assert.equal(exits.length, 2);
      assert.ok(exits.every((step) => !step.hint && !step.explain));
      assert.ok(lesson.steps.every((step, i) => i === 0 || rank[step.fase] >= rank[lesson.steps[i - 1].fase]));
      assert.ok(lesson.steps.every((step) => step.areas[0] === area));
    }
  });
}

test('U2 Matemáticas semana 11 enseña superficie de los cuatro sólidos del CNB', () => {
  const text = JSON.stringify(mat.semanas[11]).toLowerCase();
  for (const solid of ['prisma', 'cilindro', 'pirámide', 'cono']) {
    assert.ok(text.includes(solid), `Falta superficie de ${solid}`);
  }
});

test('U2 Productividad pide un producto de aplicación en cada semana', () => {
  for (const week of weeks) {
    const lesson = pyd.semanas[week.semana][0];
    assert.ok(lesson.steps.some((step) => step.fase === 'aplicar' && step.type === 'project'), `Semana ${week.semana} sin producto`);
  }
});

test('U2 alterna la posición de respuestas correctas en las tres áreas', () => {
  for (const unit of units) {
    const choices = weeks.flatMap((week: { semana: number }) => unit.semanas[week.semana].flatMap((lesson) => lesson.steps.filter((step) => step.type === 'choice')));
    const positions = new Set(choices.flatMap((step: StepBase) => (step.props as { correct: string[] }).correct));
    assert.ok(positions.size >= 3, `${unit.area}: respuestas siempre en la misma posición`);
  }
});

test('U2 Matemáticas semana 18 evalúa fracciones completas y ofrece un cierre', () => {
  for (const lesson of mat.semanas[18]) {
    const exits = lesson.steps.filter((step) => step.fase === 'comprobar');
    assert.ok(exits.every((step) => step.type === 'fill-blank'), `${lesson.id}: salida sin numerador y denominador`);
    assert.ok(exits.every((step) => ((step.props as { text: string }).text.match(/\[\[/g) ?? []).length >= 2));
    assert.ok(lesson.steps.some((step) => step.fase === 'reflexionar'));
  }
});

test('U2 L2 ofrece guion oral y transcripción para semanas de escucha', () => {
  for (const week of [11, 12, 13, 14, 15]) for (const lesson of l2.semanas[week]) {
    const oral = lesson.steps.filter((step) => step.media?.kind === 'audio');
    assert.ok(oral.length >= 2, `${lesson.id}: faltan estímulos orales`);
    assert.ok(oral.every((step) => /texto exacto/i.test(step.media!.brief) && /transcripci[oó]n/i.test(step.media!.brief)));
  }
});

test('U2 L2 incluye producción oral o escrita revisable', () => {
  for (const week of weeks) for (const lesson of l2.semanas[week.semana]) {
    const expected = week.semana <= 15 ? 'project' : 'short-answer';
    assert.ok(lesson.steps.some((step) => step.fase === 'aplicar' && step.type === expected), `${lesson.id}: falta ${expected}`);
  }
});

test('U2 L2 y PyD usan dos afirmaciones de salida independientes', () => {
  for (const unit of [l2, pyd]) for (const week of weeks) for (const lesson of unit.semanas[week.semana]) {
    const tf = lesson.steps.find((step) => step.fase === 'comprobar' && step.type === 'true-false');
    assert.ok(tf);
    const statements = (tf.props as { statements: { text: string }[] }).statements;
    assert.ok(!/en este caso/i.test(statements[1].text), `${lesson.id}: segunda afirmación derivada de la primera salida`);
  }
});
