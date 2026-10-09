import test from 'node:test';
import assert from 'node:assert/strict';
import plan from '../src/content/sexto/plan.json' with { type: 'json' };
import cnt from '../src/content/sexto/materias/cnt/u2';
import ccss from '../src/content/sexto/materias/ccss/u2';
import l3 from '../src/content/sexto/materias/l3/u2';
import ef from '../src/content/sexto/materias/ef/u2';

const units = { cnt, ccss, l3, ef } as const;
const counts = { cnt: 3, ccss: 3, l3: 2, ef: 2 } as const;
const unitPlan = plan.unidades.find((item) => item.unidad === 2)!;
const order = ['explorar', 'construir', 'aplicar', 'comprobar', 'reflexionar'];
const correctPositions = new Set<string>();
const trueFalseOrders = new Set<string>();

for (const [area, unit] of Object.entries(units)) {
  test(`${area}: ocho semanas con las lecciones del horario y cobertura CNB`, () => {
    assert.ok(unit.hilo && unit.hilo.length > 70);
    for (const week of unitPlan.semanas.slice(0, 8)) {
      if (!week.contenidos) throw new Error(`Falta plan de semana ${week.semana}`);
      const lessons = unit.semanas[week.semana];
      assert.equal(lessons?.length, counts[area as keyof typeof counts], `${area} semana ${week.semana}`);
      const required = new Set(week.contenidos[area as keyof typeof counts]);
      const taught = new Set(lessons.flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb)));
      for (const ref of required) assert.ok(taught.has(ref), `${area} s${week.semana}: falta ${ref}`);
      for (const lesson of lessons) {
        assert.equal(lesson.area, area);
        assert.ok(lesson.title.length > 12 && lesson.title.length < 70 && !lesson.title.includes('…'), `${lesson.id}: título incompleto`);
        assert.ok(lesson.steps.length >= 8, `${lesson.id}: pocos pasos`);
        const phases = lesson.steps.map((step) => order.indexOf(step.fase));
        assert.ok(phases.every((phase) => phase >= 0));
        assert.deepEqual(phases, [...phases].sort((a, b) => a - b), `${lesson.id}: fases desordenadas`);
        for (const phase of ['explorar', 'construir', 'aplicar']) assert.ok(lesson.steps.some((step) => step.fase === phase), `${lesson.id}: falta ${phase}`);
        const exits = lesson.steps.filter((step) => step.fase === 'comprobar');
        assert.ok(exits.length >= 2, `${lesson.id}: dos evidencias de salida`);
        assert.ok(exits.every((step) => !step.hint && !step.explain), `${lesson.id}: salida con pista`);
        const guided = lesson.steps.filter((step) => step.fase === 'construir' && step.type === 'choice');
        assert.ok(exits.every((exit) => guided.every((item) => exit.prompt !== item.prompt)), `${lesson.id}: salida repetida`);
        assert.notEqual(exits[0].prompt, exits[1].prompt, `${lesson.id}: salidas indistinguibles`);
        assert.ok(lesson.steps.some((step) => step.type === 'worked-example'), `${lesson.id}: falta ejemplo resuelto`);
        const worked = lesson.steps.find((step) => step.type === 'worked-example')!;
        const application = lesson.steps.find((step) => step.fase === 'aplicar' && (step.type === 'short-answer' || step.type === 'project'))!;
        assert.ok(application && application.prompt.includes('Nuevo caso:') && application.prompt.length > 95, `${lesson.id}: falta caso autónomo concreto`);
        const modelCase = (worked.props as { problem: string }).problem;
        assert.ok(!application.prompt.includes(modelCase), `${lesson.id}: práctica repite ejemplo`);
        assert.ok(!exits[0].prompt.includes(modelCase), `${lesson.id}: salida repite ejemplo`);
        for (const choice of lesson.steps.filter((step) => step.type === 'choice')) {
          const props = choice.props as { options: { id: string; text: string }[]; correct: string[] };
          assert.equal(props.options.length, 2);
          assert.notEqual(props.options[0].text, props.options[1].text);
          correctPositions.add(props.correct[0]);
        }
        const statements = (exits[1].props as { statements: { answer: boolean }[] }).statements;
        trueFalseOrders.add(statements.map((item) => item.answer ? 'V' : 'F').join(''));
        assert.doesNotMatch(JSON.stringify(lesson), /En este tema:|¿qué idea general usarías|¿qué ejemplo concreto corresponde/);
        if (area === 'ef') {
          const practice = lesson.steps.find((step) => step.type === 'project' && step.fase === 'aplicar');
          assert.ok(practice, `${lesson.id}: falta práctica física adaptable`);
          assert.match(JSON.stringify(practice.props), /ritmo seguro|ritmo cómodo|forma segura|espacio seguro|Despeja un espacio/);
        }
      }
    }
  });
}

test('Las respuestas correctas alternan de posición', () => {
  assert.deepEqual([...correctPositions].sort(), ['a', 'b']);
  assert.deepEqual([...trueFalseOrders].sort(), ['FV', 'VF']);
});

test('CNT 1.1.2 explica el origen del cielo y la tierra en la cosmovisión maya', () => {
  const lesson = cnt.semanas[11][0];
  assert.ok(lesson.steps.every((step) => step.cnb.includes('cnt:1.1.2')));
  assert.match(lesson.resumen!.join(' '), /universo.*cielo.*mar.*tierra.*montañas/i);
  const worked = lesson.steps.find((step) => step.type === 'worked-example')!;
  assert.match((worked.props as { problem: string }).problem, /cielo.*mar.*tierra.*montañas/i);
  const application = lesson.steps.find((step) => step.fase === 'aplicar' && step.type === 'short-answer')!;
  assert.match(application.prompt, /personas de maíz.*formación de tierra y montañas/i);
  const firstExit = lesson.steps.find((step) => step.fase === 'comprobar')!;
  assert.match(firstExit.prompt, /palabra de los creadores.*montañas y valles/i);
});

test('EF presenta en español los títulos de sus dieciséis lecciones', () => {
  const titles = Object.values(ef.semanas).flat().map((lesson) => lesson.title);
  assert.equal(titles.length, 16);
  assert.ok(titles.every((title) => !/\b(move|joints|practice|space|relay|rhythm|throw|bounce|receive|explore|rules|respect|organize)\b/i.test(title)));
  assert.deepEqual(titles.slice(0, 2), ['Coordinar partes del cuerpo', 'Articulaciones, respiración y circulación']);
});
