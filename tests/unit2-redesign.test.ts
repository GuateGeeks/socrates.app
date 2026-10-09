import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WEEKS } from '../src/content/index';
import { HORARIO } from '../src/content/sexto/horario';
import plan from '../src/content/sexto/plan.json' with { type: 'json' };

const learning = WEEKS.filter((week) => week.unidad === 2 && week.kind === 'aprendizaje');
const areaDays = Object.values(HORARIO).flat();
const required = plan.unidades.find((unit) => unit.unidad === 2)!.semanas.filter((week) => week.tipo === 'aprendizaje');
const phaseOrder = new Map([['explorar', 0], ['construir', 1], ['aplicar', 2], ['comprobar', 3], ['reflexionar', 4]]);

test('Unidad 2 conserva el horario de materias y cierra con taller y reto', () => {
  assert.equal(learning.length, 8);
  for (const week of learning) {
    const subjects = week.lessons.filter((lesson) => lesson.kind === 'materia');
    assert.equal(subjects.length, 27, `semana ${week.semana}: total de materias`);
    assert.equal(week.lessons.filter((lesson) => lesson.kind === 'taller').length, 1, `semana ${week.semana}: taller`);
    assert.equal(week.lessons.filter((lesson) => lesson.kind === 'reto').length, 1, `semana ${week.semana}: reto`);
    assert.equal(week.lessons.filter((lesson) => lesson.kind === 'leccion').length, 0, `semana ${week.semana}: lecciones integradas antiguas`);
    for (const area of new Set(areaDays)) {
      assert.equal(subjects.filter((lesson) => lesson.area === area).length,
        areaDays.filter((item) => item === area).length, `semana ${week.semana}: ${area}`);
    }
  }
});

test('Unidad 2 enseña cada contenido del plan en la semana y materia asignadas', () => {
  for (const planned of required) {
    const week = learning.find((item) => item.semana === planned.semana)!;
    assert.ok(week, `falta semana ${planned.semana}`);
    for (const [area, codes] of Object.entries(planned.contenidos ?? {})) {
      const refs = new Set(week.lessons.filter((lesson) => lesson.kind === 'materia' && lesson.area === area)
        .flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb)));
      for (const code of codes) assert.ok(refs.has(code), `semana ${planned.semana}, ${area}: ${code}`);
    }
  }
});

test('Unidad 2 avanza de exploración a dos salidas independientes', () => {
  for (const week of learning) for (const lesson of week.lessons.filter((item) => item.kind === 'materia')) {
    assert.ok(lesson.steps.length >= 8, `${lesson.id}: menos de ocho pasos`);
    assert.equal(lesson.steps[0].fase, 'explorar', `${lesson.id}: inicio`);
    for (let index = 1; index < lesson.steps.length; index += 1) {
      assert.ok((phaseOrder.get(lesson.steps[index].fase) ?? -1) >= (phaseOrder.get(lesson.steps[index - 1].fase) ?? -1),
        `${lesson.id}: fases fuera de orden`);
    }
    assert.ok(lesson.steps.some((step) => step.fase === 'construir' && ['explain', 'reading', 'worked-example'].includes(step.type)),
      `${lesson.id}: sin enseñanza explícita en construir`);
    assert.ok(lesson.steps.some((step) => step.fase === 'aplicar' && !step.hint), `${lesson.id}: sin aplicación autónoma`);
    const exits = lesson.steps.filter((step) => step.fase === 'comprobar');
    assert.ok(exits.length >= 2, `${lesson.id}: faltan salidas`);
    assert.ok(exits.every((step) => !step.hint && !step.explain), `${lesson.id}: salida con pista o explicación`);
  }
});

test('Los talleres integran áreas acotadas y los retos repasan seis o más materias', () => {
  for (const week of learning) {
    const workshop = week.lessons.find((lesson) => lesson.kind === 'taller')!;
    const challenge = week.lessons.find((lesson) => lesson.kind === 'reto')!;
    assert.ok(workshop, `semana ${week.semana}: falta taller`);
    assert.ok(challenge, `semana ${week.semana}: falta reto`);
    const areas = new Set(workshop.steps.flatMap((step) => step.areas));
    assert.ok(areas.size >= 2 && areas.size <= 4, `semana ${week.semana}: taller con ${areas.size} materias`);
    assert.ok(new Set(challenge.steps.map((step) => step.areas[0])).size >= 6,
      `semana ${week.semana}: reto con menos de seis materias`);
  }
});

test('Las fichas multimedia de la Unidad 2 incluyen datos de producción accesible', () => {
  for (const week of learning) {
    const workshop = week.lessons.find((lesson) => lesson.kind === 'taller')!;
    assert.match(workshop.media?.brief ?? '', /Dimensiones:\s*1600x900/, `semana ${week.semana}: dimensiones`);
    assert.match(workshop.media?.brief ?? '', /Accesibilidad:/, `semana ${week.semana}: accesibilidad`);
  }
});

test('La respuesta del taller no queda siempre en la misma posición', () => {
  const positions = learning.map((week) => {
    const choice = week.lessons.find((lesson) => lesson.kind === 'taller')?.steps.find((step) => step.type === 'choice');
    return (choice?.props as { correct?: string[] } | undefined)?.correct?.[0];
  });
  assert.ok(new Set(positions).size >= 3, `posiciones observadas: ${positions.join(', ')}`);
});

test('La unidad concluye con proyecto de cinco sesiones y validación por áreas', () => {
  const project = WEEKS.find((week) => week.semana === 19)!;
  const validation = WEEKS.find((week) => week.semana === 20)!;
  assert.equal(project.kind, 'proyecto');
  assert.equal(project.lessons.length, 5);
  assert.deepEqual(project.lessons.map((lesson) => lesson.day), [1, 2, 3, 4, 5]);
  assert.equal(validation.kind, 'validacion');
  for (const area of new Set(areaDays)) {
    assert.ok(validation.lessons.some((lesson) => lesson.id.endsWith(`evaluacion-${area}`) && lesson.steps.length > 0),
      `validación: falta ${area}`);
  }
  const portfolio = validation.lessons.find((lesson) => lesson.id.endsWith('portafolio'))!;
  const reflection = portfolio.steps.find((step) => step.type === 'short-answer')!;
  const model = (reflection.props as { model: string; minWords: number }).model;
  assert.ok(model.split(/\s+/).length >= 15 && !model.includes('…'), 'el portafolio necesita un modelo completo');
});

test('El proyecto ofrece datos para los cinco puestos y recoge el prototipo del día 3', () => {
  const project = WEEKS.find((week) => week.semana === 19)!;
  const design = project.lessons.find((lesson) => lesson.day === 2)!;
  const supplied = design.steps.find((step) => step.type === 'reading' && step.prompt.includes('encuesta hipotética común'));
  assert.ok(supplied, 'faltan datos comunes antes de diseñar');
  const passage = (supplied.props as { passage: string }).passage;
  for (const priority of ['refacción', 'árboles', 'radio', 'barriletes', 'intercambiar']) {
    assert.match(passage, new RegExp(priority, 'i'), `falta dato para ${priority}`);
  }
  const production = project.lessons.find((lesson) => lesson.day === 3)!;
  assert.ok(production.steps.some((step) => step.type === 'project' && step.prompt.includes('Dibuja en una hoja')),
    'el día 3 no pide dibujar el prototipo');
  assert.ok(production.steps.some((step) => step.type === 'short-answer' && step.prompt.includes('Registra la evidencia')),
    'el día 3 no recoge evidencia revisable del prototipo');
});
