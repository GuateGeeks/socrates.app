import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import l1 from '../src/content/sexto/materias/l1/u2';
import fc from '../src/content/sexto/materias/fc/u2';
import art from '../src/content/sexto/materias/art/u2';

const plan = JSON.parse(readFileSync('src/content/sexto/plan.json', 'utf8'));
const unit = plan.unidades.find((entry: { unidad: number }) => entry.unidad === 2);
const expected = { l1: 5, fc: 2, art: 2 } as const;
const areas = { l1, fc, art };
const phases = ['explorar', 'construir', 'aplicar', 'comprobar', 'reflexionar'];

for (const [area, authored] of Object.entries(areas)) {
  test(`${area}: horario, CNB y secuencia pedagógica de la unidad 2`, () => {
    const seen = new Set<string>();
    for (let week = 11; week <= 18; week++) {
      const lessons = authored.semanas[week];
      assert.equal(lessons?.length, expected[area as keyof typeof expected], `semana ${week}`);
      for (const [index, item] of lessons.entries()) {
        assert.equal(item.id, `s${week}-${area}-${index + 1}`);
        assert.ok(item.media?.brief && item.media?.alt, `${item.id}: medio con brief y alt`);
        assert.ok(item.steps.some((step) => step.type === 'explain' && step.fase === 'construir'), `${item.id}: enseñanza`);
        assert.ok(item.steps.some((step) => step.type === 'worked-example'), `${item.id}: ejemplo`);
        assert.ok(item.steps.some((step) => step.fase === 'construir' && step.hint), `${item.id}: guía`);
        assert.ok(item.steps.some((step) => step.fase === 'aplicar'), `${item.id}: aplicación`);
        const exits = item.steps.filter((step) => step.fase === 'comprobar');
        assert.ok(exits.length >= 2 && exits.every((step) => !step.hint), `${item.id}: dos salidas sin pistas`);
        let previous = 0;
        for (const step of item.steps) {
          const position = phases.indexOf(step.fase ?? '');
          assert.ok(position >= previous, `${item.id}: fases en orden`);
          previous = position;
          for (const id of step.cnb) seen.add(id);
        }
      }
      const assigned = unit.semanas.find((entry: { semana: number }) => entry.semana === week).contenidos[area];
      for (const id of assigned) assert.ok(lessons.some((lesson) => lesson.steps.some((step) => step.cnb.includes(id))), `${area} semana ${week}: ${id}`);
    }
  });
}

test('Arte exige creación práctica y Ciudadana explora consecuencias de decisiones', () => {
  for (const lessons of Object.values(art.semanas)) for (const item of lessons) {
    assert.ok(item.steps.some((step) => step.type === 'project' && step.fase === 'aplicar'), `${item.id}: falta producto artístico`);
  }
  for (const lessons of Object.values(fc.semanas)) for (const item of lessons) {
    assert.ok(item.steps.some((step) => step.type === 'dilemma' && step.fase === 'aplicar'), `${item.id}: falta dilema`);
  }
});

test('Las opciones correctas cambian de posición y los prompts no se reciclan literalmente', () => {
  for (const [area, authored] of Object.entries(areas)) {
    const positions = new Set<string>();
    const prompts = new Set<string>();
    for (const lessons of Object.values(authored.semanas)) for (const item of lessons) {
      assert.ok(item.title.length <= 70, `${item.id}: título excesivo`);
      for (const step of item.steps) {
        assert.ok(!prompts.has(step.prompt), `${area}: pregunta reciclada: ${step.prompt}`);
        prompts.add(step.prompt);
        if (step.type === 'choice') positions.add((step.props as { correct: string[] }).correct[0]);
      }
    }
    assert.deepEqual(positions, new Set(['a', 'b', 'c']), `${area}: posición correcta predecible`);
  }
});

test('Las lecciones de escucha presentan estímulos que se pueden oír', () => {
  for (const item of l1.semanas[11].slice(0, 4)) {
    assert.ok(item.media?.kind === 'audio' || item.media?.kind === 'video', `${item.id}: escucha sin audio`);
    assert.ok(item.media?.duration, `${item.id}: falta duración del estímulo`);
  }
});

test('La primera evidencia de salida exige explicar, sin opciones que delaten la respuesta', () => {
  for (const authored of Object.values(areas)) for (const lessons of Object.values(authored.semanas)) for (const item of lessons) {
    const exit = item.steps.find((step) => step.fase === 'comprobar');
    assert.equal(exit?.type, 'short-answer', item.id);
  }
});

test('La lección de acentuación enseña los tres encuentros vocálicos del CNB', () => {
  const item = l1.semanas[17][2];
  assert.match(item.resumen?.join(' ') ?? '', /diptongo/);
  assert.match(item.resumen?.join(' ') ?? '', /triptongo/);
  assert.match(item.resumen?.join(' ') ?? '', /hiato/);
});

test('La correlación territorial se modela con un indicador y una fuente simulada explícita', () => {
  const example = fc.semanas[12][0].steps.find((step) => step.type === 'worked-example');
  assert.match(JSON.stringify(example?.props), /indicador/i);
  assert.match(JSON.stringify(example?.props), /simulad/i);
});

test('Verdadero/falso no repite siempre el mismo orden de respuestas', () => {
  for (const authored of Object.values(areas)) {
    const firstAnswers = new Set<boolean>();
    for (const lessons of Object.values(authored.semanas)) for (const item of lessons) {
      const step = item.steps.find((candidate) => candidate.type === 'true-false');
      assert.ok(step, item.id);
      firstAnswers.add((step.props as { statements: Array<{ answer: boolean }> }).statements[0].answer);
    }
    assert.deepEqual(firstAnswers, new Set([true, false]));
  }
});

test('Las afirmaciones falsas explican el error después de responder', () => {
  for (const authored of Object.values(areas)) for (const lessons of Object.values(authored.semanas)) for (const item of lessons) {
    const step = item.steps.find((candidate) => candidate.type === 'true-false');
    const statements = (step?.props as { statements: Array<{ answer: boolean; why?: string }> }).statements;
    assert.ok(statements.filter((statement) => !statement.answer).every((statement) => statement.why && statement.why.length > 20), item.id);
  }
});

test('La enseñanza de lectura y escucha cubre las categorías expresas del CNB', () => {
  const reading = l1.semanas[13][1].resumen?.join(' ').toLowerCase() ?? '';
  for (const term of ['selectiva', 'personal', 'individual', 'coral', 'dramatizada', 'voz alta', 'silenciosa', 'reflexiva']) {
    assert.ok(reading.includes(term), `L1 s13: ${term}`);
  }
  const listening = l1.semanas[11][1].resumen?.join(' ').toLowerCase() ?? '';
  for (const term of ['memoria', 'conciencia', 'percepción', 'discriminación']) {
    assert.ok(listening.includes(term), `L1 s11: ${term}`);
  }
});
