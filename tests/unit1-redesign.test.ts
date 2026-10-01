import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { registerAll } from '../src/activities/index';
import { getActivity } from '../src/core/registry';
import { WEEKS } from '../src/content/index';
import type { Lesson, StepBase } from '../src/core/types';
import { MEDIA_ASSETS } from '../src/media/assets';
import { mediaBacklogRows } from '../src/media/mockRegistry';

registerAll();

const EXPECTED = [
  [1, 'Nuestro lugar en mapas y palabras', 'Mapa y voz de nuestro lugar'],
  [2, 'Un mercado saludable y respetuoso', 'Un puesto sano y respetuoso'],
  [3, 'Un camino seguro a la escuela', 'Ruta segura a la escuela'],
  [4, 'Crecer, cuidarnos y participar', 'Campaña: crecer con cuidado'],
  [5, 'Una escuela que todas las personas pueden recorrer', 'Mapa táctil para toda la escuela'],
  [6, 'Una refacción nutritiva con recursos locales', 'Una refacción local que nutre'],
  [7, 'Investigamos y protegemos el agua', 'Informe sobre el agua de la comunidad'],
  [8, 'Datos confiables para ahorrar energía', 'Panel de energía de nuestra escuela'],
] as const;

const unitWeeks = WEEKS.filter((week) => week.unidad === 1 && week.kind === 'aprendizaje');
const weekOne = unitWeeks.find((week) => week.semana === 1);
assert.ok(weekOne, 'Falta semana 1');
const weekOneBank = weekOne.bank;
assert.ok(weekOneBank, 'Semana 1 sin banco');
const weekTwo = unitWeeks.find((week) => week.semana === 2);
assert.ok(weekTwo, 'Falta semana 2');
const weekTwoBank = weekTwo.bank;
assert.ok(weekTwoBank, 'Semana 2 sin banco');
const weekThree = unitWeeks.find((week) => week.semana === 3);
assert.ok(weekThree, 'Falta semana 3');
const weekThreeBank = weekThree.bank;
assert.ok(weekThreeBank, 'Semana 3 sin banco');
const weekFour = unitWeeks.find((week) => week.semana === 4);
assert.ok(weekFour, 'Falta semana 4');
const weekFourBank = weekFour.bank;
assert.ok(weekFourBank, 'Semana 4 sin banco');
const weekFive = unitWeeks.find((week) => week.semana === 5);
assert.ok(weekFive, 'Falta semana 5');
const weekFiveBank = weekFive.bank;
assert.ok(weekFiveBank, 'Semana 5 sin banco');
const weekSix = unitWeeks.find((week) => week.semana === 6);
assert.ok(weekSix, 'Falta semana 6');
const weekSixBank = weekSix.bank;
assert.ok(weekSixBank, 'Semana 6 sin banco');
const weekSeven = unitWeeks.find((week) => week.semana === 7);
assert.ok(weekSeven, 'Falta semana 7');
const weekSevenBank = weekSeven.bank;
assert.ok(weekSevenBank, 'Semana 7 sin banco');

const PRIMARY_AREAS = new Set(['mat', 'l1', 'cnt', 'ccss', 'l2', 'l3', 'fc', 'art', 'ef', 'pyd']);
const INSTRUCTION_TYPES = new Set(['explain', 'worked-example', 'flashcards']);

function comparableEntries(value: unknown): string[] {
  if (!value || typeof value !== 'object') return [];
  const step = value as {
    type?: string;
    prompt?: string;
    props?: {
      answer?: string | number;
      tolerance?: number;
      unit?: string;
      stimulus?: string;
      pairs?: Array<{ left?: string; right?: string }>;
      buckets?: Array<{ id?: string; label?: string }>;
      items?: Array<{ id?: string; text?: string; bucket?: string }>;
      options?: Array<{ id?: string; text?: string }>;
      correct?: string[];
      statements?: Array<{ text?: string; answer?: boolean }>;
      text?: string;
      distractors?: string[];
      questions?: Array<{
        q?: string;
        options?: Array<{ id?: string; text?: string }>;
        correct?: string;
      }>;
    };
  };
  const normalize = (text: string | undefined) => (text ?? '')
    .trim()
    .toLocaleLowerCase('es')
    .replace(/^(medio|un|uno|dos|cuatro) tiempos?$/, (duration) => ({
      medio: '0.5',
      un: '1',
      uno: '1',
      dos: '2',
      cuatro: '4',
    })[duration.split(' ')[0]] ?? duration)
    .replace(/ tiempos?$/, '');
  const props = step.props ?? {};
  if (step.type === 'number-input') {
    const givens = ((step.prompt ?? '') + ' ' + (props.stimulus ?? '')).match(/-?\d+(?:[.,]\d+)?/g) ?? [];
    return [
      'prompt:' + normalize(step.prompt),
      'givens:' + givens.join(','),
      'answer:' + String(props.answer ?? ''),
      'tolerance:' + String(props.tolerance ?? ''),
      'unit:' + normalize(props.unit),
    ];
  }
  if (step.type === 'match') {
    return (props.pairs ?? []).map((pair) => `${normalize(pair.left)}=>${normalize(pair.right)}`);
  }
  if (step.type === 'sort') {
    const labels = new Map((props.buckets ?? []).map((bucket) => [bucket.id, normalize(bucket.label)]));
    return (props.items ?? []).map((item) => `${normalize(item.text)}=>${labels.get(item.bucket) ?? ''}`);
  }
  if (step.type === 'order') {
    return (props.items ?? []).map((item) => normalize(item.text));
  }
  if (step.type === 'choice') {
    const correct = new Set(props.correct ?? []);
    return (props.options ?? []).map((option) => `${normalize(option.text)}=>${correct.has(option.id ?? '')}`);
  }
  if (step.type === 'true-false') {
    return (props.statements ?? []).map((statement) => `${normalize(statement.text)}=>${statement.answer}`);
  }
  if (step.type === 'fill-blank') {
    const answers = [...(props.text ?? '').matchAll(/\[\[([^\]]+)\]\]/g)]
      .map((match) => `answer:${normalize(match[1])}`);
    return [...answers, ...(props.distractors ?? []).map((item) => `distractor:${normalize(item)}`)];
  }
  if (step.type === 'reading') {
    return (props.questions ?? []).map((question) => {
      const answer = question.options?.find((option) => option.id === question.correct)?.text;
      return `${normalize(question.q)}=>${normalize(answer)}`;
    });
  }
  return [];
}

test('La comparación estructurada detecta una proposición reutilizada entre choice y true-false', () => {
  const choice = {
    type: 'choice',
    prompt: 'Una máquina ficticia muestra un triángulo ámbar en el panel. ¿Qué estado comunica?',
    props: {
      options: [{ id: 'a', text: 'El filtro de enfriamiento necesita reemplazo inmediato' }],
      correct: ['a'],
    },
  };
  const trueFalse = {
    type: 'true-false',
    prompt: 'Evalúa las afirmaciones del manual de mantenimiento.',
    props: {
      statements: [{
        text: 'El triángulo ámbar indica que el filtro de enfriamiento requiere reemplazo inmediato.',
        answer: true,
      }],
    },
  };

  assert.equal(repeatsStructuredFact(choice, trueFalse), true);
});

test('La comparación estructurada usa el contexto de fill-blank sin confundir respuestas comunes', () => {
  const fill = {
    type: 'fill-blank',
    prompt: 'Completa el protocolo de la máquina ficticia.',
    props: {
      text: 'Si la palanca azul vibra dos veces, la persona operadora debe [[desconectar la energía]].',
      distractors: ['aumentar la velocidad'],
    },
  };
  const repeatedChoice = {
    type: 'choice',
    prompt: 'La palanca azul de la máquina vibra dos veces. ¿Qué debe hacer la persona operadora?',
    props: {
      options: [{ id: 'a', text: 'Desconectar la energía' }],
      correct: ['a'],
    },
  };
  const unrelatedChoice = {
    type: 'choice',
    prompt: 'Terminó la demostración de una lámpara portátil. ¿Cuál es el último paso?',
    props: {
      options: [{ id: 'a', text: 'Desconectar la energía' }],
      correct: ['a'],
    },
  };

  assert.equal(repeatsStructuredFact(fill, repeatedChoice), true);
  assert.equal(repeatsStructuredFact(fill, unrelatedChoice), false);
});

test('La comparación estructurada conserva datos y respuesta de entradas numéricas', () => {
  const entries = comparableEntries({
    type: 'number-input',
    prompt: 'Un círculo de radio 3 cm tiene diámetro de 6 cm. ¿Cuánto mide el radio?',
    props: { answer: 3, tolerance: 0.1, unit: 'cm', stimulus: '6 ÷ 2' },
  });
  assert.deepEqual(entries, [
    'prompt:un círculo de radio 3 cm tiene diámetro de 6 cm. ¿cuánto mide el radio?',
    'givens:3,6,6,2',
    'answer:3',
    'tolerance:0.1',
    'unit:cm',
  ]);
});

test('La frescura numérica detecta una respuesta reutilizada en retroalimentación del mismo tipo', () => {
  const bankItem = {
    type: 'number-input',
    prompt: 'Un octágono regular tiene ocho ángulos iguales. ¿Cuánto mide cada uno?',
    props: { answer: 135, unit: '°' },
  };
  const lessonAssessment = {
    type: 'number-input',
    prompt: 'Un octágono tiene ocho lados. ¿Cuánto suman sus ángulos interiores?',
    props: {
      answer: 1080,
      unit: '°',
      misconceptions: [
        { value: 135, msg: '135° mide cada ángulo si el octágono es regular.' },
      ],
    },
  };

  const unrelatedSameAnswer = {
    type: 'number-input',
    prompt: 'Una figura en forma de I tiene varios segmentos en su borde. ¿Cuántos lados tiene?',
    props: { answer: 12 },
  };
  const equivalentPayload = {
    type: 'number-input',
    prompt: 'En un octágono regular, los ocho ángulos son iguales. ¿Cuál es su medida?',
    props: { answer: 135, unit: '°' },
  };

  assert.equal(repeatsStructuredFact(bankItem, lessonAssessment), true);
  assert.equal(repeatsStructuredFact(bankItem, unrelatedSameAnswer), false);
  assert.equal(repeatsStructuredFact(bankItem, equivalentPayload), true);
});

test('La comparación estructurada detecta hechos no numéricos parafraseados', () => {
  const assessment = {
    type: 'choice',
    prompt: 'La uncinaria puede afectar la sangre. ¿Qué daño causa?',
    props: {
      options: [{ id: 'a', text: 'La uncinaria puede provocar anemia y cansancio' }],
      correct: ['a'],
    },
  };
  const guidedPractice = {
    type: 'choice',
    prompt: '¿Qué daño causa la uncinaria en el cuerpo?',
    props: {
      options: [{ id: 'a', text: 'La uncinaria causa anemia, palidez y cansancio' }],
      correct: ['a'],
    },
  };

  assert.equal(repeatsStructuredFact(assessment, guidedPractice), true);
});

test('La comparación estructurada detecta la reutilización parcial de pares', () => {
  const assessment = {
    type: 'sort',
    prompt: 'Clasifica los parásitos según dónde viven.',
    props: {
      buckets: [{ id: 'ecto', label: 'Ectoparásito (por fuera)' }, { id: 'endo', label: 'Endoparásito (por dentro)' }],
      items: [
        { text: 'Pulga', bucket: 'ecto' },
        { text: 'Giardia', bucket: 'endo' },
      ],
    },
  };
  const guidedPractice = {
    type: 'sort',
    prompt: 'Ubica cada organismo por el lugar que ocupa en el hospedero.',
    props: {
      buckets: [{ id: 'ecto', label: 'Ectoparásito (por fuera)' }, { id: 'endo', label: 'Endoparásito (por dentro)' }],
      items: [
        { text: 'Piojo', bucket: 'ecto' },
        { text: 'Pulga', bucket: 'ecto' },
        { text: 'Giardia', bucket: 'endo' },
        { text: 'Tenia', bucket: 'endo' },
      ],
    },
  };

  assert.equal(repeatsStructuredFact(assessment, guidedPractice), true);
});

test('La comparación estructurada tolera el mismo número en conceptos distintos', () => {
  const geometry = {
    type: 'number-input',
    prompt: 'Un polígono tiene doce lados. ¿Cuántos vértices tiene?',
    props: { answer: 12 },
  };
  const music = {
    type: 'number-input',
    prompt: 'Una secuencia tiene doce pulsos. ¿Cuántos pulsos escuchaste?',
    props: { answer: 12, unit: 'pulsos' },
  };

  assert.equal(repeatsStructuredFact(geometry, music), false);
});

test('La comparación estructurada detecta reutilización significativa entre tipos de actividad', () => {
  const challengeChoice = {
    type: 'choice',
    prompt: 'Un anuncio muestra una bicicleta tachada dentro de un círculo rojo. ¿Qué comunica?',
    props: {
      options: [
        { id: 'a', text: 'En ese espacio no se permite circular en bicicleta' },
        { id: 'b', text: 'Hay un taller de bicicletas' },
      ],
      correct: ['a'],
    },
  };
  const lessonSort = {
    type: 'sort',
    prompt: 'Clasifica cada señal según su familia.',
    props: {
      buckets: [{ id: 'reg', label: 'Reglamentaria' }, { id: 'inf', label: 'Informativa' }],
      items: [
        { text: 'Círculo rojo con una bicicleta tachada', bucket: 'reg', feedback: 'La marca tachada prohíbe el paso de bicicletas.' },
      ],
    },
  };

  assert.equal(repeatsStructuredFact(challengeChoice, lessonSort), true);
});

test('La comparación estructurada permite el mismo objeto cuando evalúa conceptos distintos', () => {
  const serviceSign = {
    type: 'choice',
    prompt: 'Una señal azul muestra una bicicleta y una llave inglesa. ¿Qué informa?',
    props: {
      options: [{ id: 'a', text: 'Hay un taller de reparación de bicicletas' }],
      correct: ['a'],
    },
  };
  const prohibitionSign = {
    type: 'sort',
    prompt: 'Clasifica cada señal según su familia.',
    props: {
      buckets: [{ id: 'reg', label: 'Reglamentaria' }],
      items: [{ text: 'Círculo rojo con una bicicleta tachada', bucket: 'reg' }],
    },
  };

  assert.equal(repeatsStructuredFact(serviceSign, prohibitionSign), false);
});

test('La comparación estructurada detecta un solo par reutilizado entre tipos', () => {
  const lessonMatch = {
    type: 'match',
    prompt: 'Relaciona cada aviso vial con su función.',
    props: { pairs: [{ left: 'Rombo amarillo: puente angosto', right: 'Advierte un peligro' }] },
  };
  const bankSort = {
    type: 'sort',
    prompt: 'Clasifica el aviso según la función que cumple.',
    props: {
      buckets: [{ id: 'adv', label: 'Advierte un peligro' }],
      items: [{ text: 'ROMBO amarillo — puente angosto', bucket: 'adv' }],
    },
  };

  assert.equal(repeatsStructuredFact(bankSort, lessonMatch), true);
});

test('La comparación de reto y banco detecta un hecho único aunque esté parafraseado', () => {
  const challengeChoice = {
    type: 'choice',
    prompt: 'En el laboratorio observan que una glándula libera un mensajero químico directamente a pequeños vasos sanguíneos, sin usar conductos. ¿Cómo actúa esa glándula?',
    props: {
      options: [
        { id: 'a', text: 'Como endocrina, porque su producto entra directamente a la sangre' },
        { id: 'b', text: 'Como exocrina, porque su producto sale por un conducto' },
      ],
      correct: ['a'],
    },
  };
  const bankSort = {
    type: 'sort',
    prompt: 'Clasifica cada caso según la vía de secreción descrita.',
    props: {
      buckets: [
        { id: 'endo', label: 'Secreción endocrina' },
        { id: 'exo', label: 'Secreción exocrina' },
      ],
      items: [
        { text: 'El producto entra directamente a la sangre sin pasar por un conducto', bucket: 'endo' },
      ],
    },
  };

  assert.equal(repeatsStructuredFact(bankSort, challengeChoice), true);
});

test('La comparación estructurada no confunde una respuesta común entre conceptos distintos', () => {
  const communityChoice = {
    type: 'choice',
    prompt: '¿Por qué se limpia una fuente de agua comunitaria?',
    props: { options: [{ id: 'a', text: 'Protege a la comunidad' }], correct: ['a'] },
  };
  const passwordChoice = {
    type: 'choice',
    prompt: '¿Por qué no se comparte una contraseña escolar?',
    props: { options: [{ id: 'a', text: 'Protege a la comunidad' }], correct: ['a'] },
  };

  assert.equal(repeatsStructuredFact(communityChoice, passwordChoice), false);
});

test('La comparación estructurada distingue sincronización de repetición ordenada', () => {
  const synchronizedChoice = {
    type: 'choice',
    prompt: 'Observa el video. ¿Qué hace que todos los pasos caigan al mismo tiempo?',
    explain: 'Todos siguen el pulso de la música: un paso en cada latido. Cuando el cuerpo sigue un pulso común, el grupo se mueve sincronizado.',
    props: {
      options: [{ id: 'a', text: 'Todos siguen el mismo pulso de la música' }],
      correct: ['a'],
    },
  };
  const orderedPattern = {
    type: 'true-false',
    prompt: 'Decide si cada acción mantiene un patrón de ocho tiempos.',
    props: {
      statements: [
        { text: 'Repetir dos veces una secuencia de cuatro pulsos completa ocho tiempos.', answer: true },
        { text: 'Cambiar el orden de los pasos en cada repetición conserva el mismo patrón.', answer: false },
      ],
    },
  };

  assert.equal(repeatsStructuredFact(orderedPattern, synchronizedChoice), false);
});

test('La comparación estructurada distingue cambio observado de una estrategia de práctica', () => {
  const observedChange = {
    type: 'choice',
    prompt: 'Una camioneta sale de la parada. ¿Cómo cambia su velocidad en los primeros segundos?',
    explain: 'Va aumentando la velocidad poco a poco: está acelerando. Al llegar a la siguiente parada hace lo contrario: desacelera.',
    props: {
      options: [
        { id: 'a', text: 'Arranca a toda velocidad de golpe', feedback: 'Nada pasa de quieto a muy rápido de golpe: la velocidad aumenta poco a poco.' },
        { id: 'b', text: 'Aumenta la velocidad poco a poco' },
        { id: 'c', text: 'Siempre va a la misma velocidad', feedback: 'Al salir de la parada su velocidad cambia: empieza en cero.' },
      ],
      correct: ['b'],
    },
  };
  const practiceStrategy = {
    type: 'true-false',
    prompt: 'Decide si cada afirmación sobre una secuencia de operación es correcta.',
    props: {
      statements: [{
        text: 'Practicar despacio antes de aumentar la velocidad favorece el control.',
        answer: true,
      }],
    },
  };

  assert.equal(repeatsStructuredFact(practiceStrategy, observedChange), false);
});

test('La comparación estructurada normaliza variantes sin firmas curriculares', () => {
  assert.equal(factValuesMatch('No se permite el paso de bicicletas.', 'Prohíbe el paso de bicicleta'), true);
  const helperSource = [
    structuredAssessment,
    customStructuredPayload,
    factValuesMatch,
    repeatsStructuredFact,
  ].map(String).join('\n');
  assert.doesNotMatch(
    helperSource,
    /cromosom|ene[aá]gono|que es un gen|46-cromosomas|biciclet|cautiousMovementCues|movimiento-cauteloso/i,
  );
  const collisionConfigSource = [
    JSON.stringify([...CUSTOM_STRUCTURED_PATHS]),
    meaningfulCollisionTokens,
    valuesAtStructuredPath,
    customStructuredPayload,
    repeatsStructuredFact,
  ].map(String).join('\n');
  assert.doesNotMatch(
    collisionConfigSource,
    /scenarioCollisionTokens|skillVocabulary|energ|nivel|movim|patro|pulso|ritmo|tiemp|traye|veloc/i,
  );
});

test('La comparación estructurada detecta una respuesta parafraseada con contexto compartido', () => {
  const challenge = {
    type: 'choice',
    prompt: '¿Qué movimiento comunica mejor que una persona busca avanzar con cuidado por un espacio reducido?',
    props: {
      options: [{ id: 'a', text: 'Pasos cortos y lentos, mirada al frente y trayectoria controlada' }],
      correct: ['a'],
    },
  };
  const lesson = {
    type: 'choice',
    prompt: 'Para representar a una persona que avanza con cautela por una ruta estrecha, ¿qué secuencia comunica mejor esa intención?',
    props: {
      options: [{ id: 'a', text: 'Pasos lentos en línea curva, nivel medio, mirada al frente y energía suave' }],
      correct: ['a'],
    },
  };

  assert.equal(repeatsStructuredFact(challenge, lesson), true);
});

test('La comparación estructurada detecta reutilización desde un pulse-lab hacia otro tipo', () => {
  const pulseLab = {
    type: 'pulse-lab',
    prompt: '¡Tu secuencia! **Calentamiento:** muévete por el espacio en trayectoria recta, curva y zigzag, cambiando de nivel cuando alguien diga “bajo”, “medio” o “alto”. **Parte principal:** crea una secuencia de 4 partes de 8 tiempos sobre “La milpa crece”. Usa al menos 2 niveles, 2 trayectorias y cambios de velocidad.',
    props: {
      seconds: 15,
      rounds: [
        { label: 'En reposo' },
        { label: 'Después de tu secuencia', exercise: { name: 'Secuencia expresiva de 4 × 8 tiempos', icon: 'Sparkles', seconds: 90 } },
      ],
    },
  };
  const reusedChoice = {
    type: 'choice',
    prompt: 'Quieres representar una semilla que brota y crece. ¿Qué secuencia comunica mejor esa transformación?',
    props: {
      options: [
        { id: 'a', text: 'Empieza encogido en nivel bajo y lento; luego se eleva, abre los brazos y acelera' },
        { id: 'b', text: 'Permanece inmóvil en nivel medio' },
      ],
      correct: ['a'],
    },
  };

  assert.equal(repeatsStructuredFact(reusedChoice, pulseLab), true);
});

test('La comparación estructurada conserva vocabulario significativo de campos personalizados', () => {
  const pulseLab = {
    type: 'pulse-lab',
    prompt: 'Movimiento con nivel, trayectoria, velocidad, energía, pulso y ritmo durante un patrón de ocho tiempos.',
    props: {
      seconds: 15,
      rounds: [
        { label: 'Nivel bajo con ritmo lento' },
        {
          label: 'Nivel alto con ritmo rápido',
          exercise: { name: 'Trayectoria curva con energía fuerte', icon: 'Activity', seconds: 60 },
        },
      ],
    },
  };
  const reusedChoice = {
    type: 'choice',
    prompt: '¿Cuál opción muestra movimiento, nivel alto, ritmo rápido y trayectoria curva?',
    props: {
      options: [
        { id: 'a', text: 'Una trayectoria curva con energía fuerte' },
        { id: 'b', text: 'Una trayectoria recta con energía suave' },
      ],
      correct: ['a'],
    },
  };

  assert.equal(repeatsStructuredFact(reusedChoice, pulseLab), true);
});

test('La comparación estructurada permite el mismo tema cuando cambia la habilidad evaluada', () => {
  const pulseLab = {
    type: 'pulse-lab',
    prompt: 'Crea una secuencia expresiva sobre “La milpa crece” usando niveles, trayectorias y cambios de velocidad.',
    props: {
      seconds: 15,
      rounds: [
        { label: 'En reposo' },
        { label: 'Después de la secuencia', exercise: { name: 'Movimiento expresivo', icon: 'Sparkles', seconds: 60 } },
      ],
    },
  };
  const rhythmChoice = {
    type: 'choice',
    prompt: 'La danza también representa el crecimiento de la milpa. ¿Qué acción mantiene el pulso musical?',
    props: {
      options: [
        { id: 'a', text: 'Dar una palmada en cada pulso de la música' },
        { id: 'b', text: 'Cambiar el ritmo al azar' },
      ],
      correct: ['a'],
    },
  };

  assert.equal(repeatsStructuredFact(rhythmChoice, pulseLab), false);
});

test('La comparación estructurada distingue actividades personalizadas con escenarios diferentes', () => {
  const firstLab = {
    type: 'pulse-lab',
    prompt: 'Representa una tormenta que empieza suave y termina con lluvia intensa.',
    props: {
      seconds: 15,
      rounds: [
        { label: 'Antes de la secuencia' },
        { label: 'Después de la secuencia', exercise: { name: 'Secuencia expresiva', seconds: 60 } },
      ],
    },
  };
  const secondLab = {
    type: 'pulse-lab',
    prompt: 'Representa una puerta pesada que se abre y luego vuelve a cerrarse.',
    props: {
      seconds: 15,
      rounds: [
        { label: 'Antes de la secuencia' },
        { label: 'Después de la secuencia', exercise: { name: 'Secuencia expresiva', seconds: 60 } },
      ],
    },
  };

  assert.equal(repeatsStructuredFact(secondLab, firstLab), false);
});

test('La frescura agrega evidencia reutilizada entre prompt y campos personalizados distintos', () => {
  const customPractice = {
    type: 'pulse-lab',
    prompt: 'Practica una secuencia de pase manteniendo el equilibrio durante el desplazamiento.',
    props: {
      rounds: [
        { label: 'Apoyo contrario al brazo ejecutor' },
        { label: 'Control final', exercise: { name: 'Liberación durante la fase aérea', seconds: 45 } },
      ],
    },
  };
  const reusedAssessment = {
    type: 'choice',
    prompt: '¿Qué ejecución conserva la técnica de la secuencia practicada?',
    props: {
      options: [{ id: 'a', text: 'Mantiene el equilibrio, impulsa con el pie contrario y libera en el momento aéreo' }],
      correct: ['a'],
    },
  };

  assert.equal(repeatsStructuredFact(reusedAssessment, customPractice), true);
});

test('La frescura agrega evidencia dividida entre prompt y un solo campo personalizado', () => {
  const customPractice = {
    type: 'pulse-lab',
    prompt: 'Practica una recepcion amortiguada mientras avanzas con control por el espacio.',
    props: {
      rounds: [
        { label: 'Pase adelantado', exercise: { name: 'Recorrido cooperativo', seconds: 45 } },
      ],
    },
  };
  const reusedAssessment = {
    type: 'choice',
    prompt: 'En la practica de recepcion con control, que combinacion conserva la tecnica?',
    props: {
      options: [{ id: 'a', text: 'Recepcion amortiguada y pase adelantado' }],
      correct: ['a'],
    },
  };

  assert.equal(repeatsStructuredFact(reusedAssessment, customPractice), true);
});

test('La frescura permite tema y un token comun cuando cambia la segunda evidencia', () => {
  const customPractice = {
    type: 'pulse-lab',
    prompt: 'Practica una recepcion amortiguada mientras avanzas con control por el espacio.',
    props: {
      rounds: [
        { label: 'Pase adelantado', exercise: { name: 'Recorrido cooperativo', seconds: 45 } },
      ],
    },
  };
  const distinctAssessment = {
    type: 'choice',
    prompt: 'En la practica de recepcion con control, que accion protege la pelota despues de recibir?',
    props: {
      options: [{ id: 'a', text: 'Recepcion segura y giro protector' }],
      correct: ['a'],
    },
  };

  assert.equal(repeatsStructuredFact(distinctAssessment, customPractice), false);
});

test('La frescura permite campos relacionados cuando cambian la decisión y la respuesta', () => {
  const customPractice = {
    type: 'pulse-lab',
    prompt: 'Practica una secuencia expresiva sobre una tormenta y controla el movimiento.',
    props: {
      rounds: [
        { label: 'Apoyo estable' },
        { label: 'Cierre sereno', exercise: { name: 'Trayectoria curva y energía suave', seconds: 45 } },
      ],
    },
  };
  const distinctAssessment = {
    type: 'choice',
    prompt: 'En otra secuencia sobre una tormenta, ¿qué mantiene el pulso musical?',
    props: {
      options: [{ id: 'a', text: 'Dar una palmada en cada pulso' }],
      correct: ['a'],
    },
  };

  assert.equal(repeatsStructuredFact(distinctAssessment, customPractice), false);
});

test('La frescura separa parametros de practica de una correccion tecnica nueva', () => {
  const bilateralPractice = {
    type: 'pulse-lab',
    prompt: 'Realiza seis pases bilaterales por arriba del hombro con salto: tres con la izquierda y tres con la derecha, alternando altura media y alta.',
    props: {
      rounds: [
        { label: 'Después de los pases', exercise: { name: 'Decisión de altura', seconds: 60 } },
        { label: 'Después de las finalizaciones', exercise: { name: 'Caída equilibrada', seconds: 45 } },
      ],
    },
  };
  const unseenDiagnosis = {
    type: 'choice',
    prompt: 'En una ejecución observada, una estudiante usa la mano izquierda hacia una altura media y se impulsa con el mismo pie. ¿Qué falla debe corregir?',
    props: {
      options: [{ id: 'a', text: 'Debe impulsarse con el pie derecho, contrario a la mano izquierda' }],
      correct: ['a'],
    },
  };

  assert.equal(repeatsStructuredFact(unseenDiagnosis, bilateralPractice), false);
});

test('La frescura detecta una respuesta repetida en prompts largos aunque cambie la referencia CNB', () => {
  const lesson = {
    type: 'choice',
    cnb: ['art:3.2.1'],
    prompt: 'Durante la revisión del plano escolar, el equipo compara materiales seguros, bordes firmes, contraste visual, símbolos consistentes y una ruta continua antes de decidir qué muestra distingue mejor dos espacios vecinos al tacto.',
    props: {
      options: [{ id: 'a', text: 'Fieltro suave junto a cartón corrugado' }],
      correct: ['a'],
    },
  };
  const retagged = {
    type: 'choice',
    cnb: ['fc:3.2.1'],
    prompt: 'Al revisar el mapa de la escuela, otro grupo contrasta materiales seguros, límites firmes, claves estables y el recorrido completo. ¿Qué par permite diferenciar mejor dos zonas contiguas mediante el tacto?',
    props: {
      options: [{ id: 'x', text: 'Fieltro suave y cartón corrugado' }],
      correct: ['x'],
    },
  };

  assert.equal(repeatsStructuredFact(retagged, lesson), true);
});

test('La frescura permite un tema común cuando cambian la tarea y la respuesta', () => {
  const coordinateTask = {
    type: 'choice',
    prompt: 'Durante la revisión del mapa táctil escolar, el equipo comprueba la entrada, la dirección, el aula y los baños. Si la biblioteca está dos unidades a la izquierda y cuatro arriba del origen, ¿qué coordenada le corresponde?',
    props: { options: [{ id: 'a', text: '(-2, 4)' }], correct: ['a'] },
  };
  const textureTask = {
    type: 'choice',
    prompt: 'Durante la revisión del mapa táctil escolar, el equipo comprueba la entrada, la dirección, el aula y los baños. ¿Qué material permite distinguir una zona lisa de otra acanalada?',
    props: { options: [{ id: 'b', text: 'Cartón corrugado' }], correct: ['b'] },
  };

  assert.equal(repeatsStructuredFact(textureTask, coordinateTask), false);
});

test('La frescura detecta una actividad personalizada retaggeada aunque sus campos auxiliares sean genéricos', () => {
  const customPractice = {
    type: 'pulse-lab',
    cnb: ['ef:2.1.13'],
    prompt: 'En una estación de balonmano observa cuatro ejecuciones durante el recorrido completo de práctica del equipo escolar. Antes de responder, compara postura, coordinación, dirección, impulso, equilibrio, trayectoria, distancia, precisión, potencia, recepción, desplazamiento, ataque, defensa, portería, marcador, cronómetro, silbato, uniforme, cancha y momento de salida. La ejecución correcta despega con el pie contrario, lleva el balón por arriba del hombro y lo suelta durante el salto hacia las manos elevadas de la pareja.',
    props: {
      seconds: 20,
      rounds: [
        { label: 'Antes de comenzar' },
        { label: 'Después de la actividad', exercise: { name: 'Estación técnica', seconds: 60 } },
      ],
    },
  };
  const retaggedAssessment = {
    type: 'choice',
    cnb: ['ef:2.1.9'],
    prompt: 'En otra estación de balonmano se comparan cuatro ejecuciones. ¿Cuál aplica la técnica correcta?',
    props: {
      options: [{ id: 'a', text: 'Despega con el pie contrario, lleva el balón por arriba del hombro y lo suelta durante el salto hacia las manos elevadas' }],
      correct: ['a'],
    },
  };

  assert.equal(repeatsStructuredFact(retaggedAssessment, customPractice), true);
});

test('La frescura no confunde redacción escolar común entre áreas distintas', () => {
  const science = {
    type: 'choice',
    prompt: 'Lee el caso escolar y elige la evidencia que apoya mejor la conclusión.',
    props: { options: [{ id: 'a', text: 'La planta con luz produjo hojas nuevas' }], correct: ['a'] },
  };
  const citizenship = {
    type: 'choice',
    prompt: 'Lee el caso escolar y elige la evidencia que apoya mejor la conclusión.',
    props: { options: [{ id: 'b', text: 'El acta registra una votación abierta del consejo' }], correct: ['b'] },
  };

  assert.equal(repeatsStructuredFact(citizenship, science), false);
});

test('Los contratos de frescura no usan referencias CNB como puerta de comparación', () => {
  assert.doesNotMatch(String(repeatsStructuredFact), /custom\.prompt\.size/);
  const testFile = readFileSync(new URL(import.meta.url), 'utf8');
  assert.doesNotMatch(testFile, /practice\.cnb\.some\(\(ref\) => assessment\.cnb\.includes\(ref\)\)/);
});

type StructuredFact = { context: Set<string>; values: string[]; role: 'answer' | 'support' };

function normalizeFactText(value: unknown): string {
  return String(value ?? '')
    .toLocaleLowerCase('es')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[·*_"“”‘’«»¿?¡!.,;:()[\]{}—–-]/g, ' ')
    .replace(/\btres\b/g, '3')
    .replace(/\s+/g, ' ')
    .trim();
}

function factTokens(value: unknown): Set<string> {
  const stop = new Set(['una', 'uno', 'unos', 'unas', 'para', 'como', 'cada', 'estas', 'estos', 'esta', 'este', 'que', 'del', 'las', 'los', 'con', 'por', 'sus']);
  return new Set(normalizeFactText(value)
    .split(' ')
    .filter((token) => token.length > 1 && !stop.has(token))
    .map((token) => (token.length > 5 ? token.slice(0, 5) : token)));
}

const CUSTOM_STRUCTURED_PATHS = new Map<string, string[]>([
  ['pulse-lab', ['rounds.*.label', 'rounds.*.exercise.name']],
]);

function meaningfulCollisionTokens(value: unknown): Set<string> {
  const generic = new Set([
    'activ', 'al', 'comun', 'cual', 'de', 'el', 'en', 'hacer', 'la', 'lo', 'mejor', 'o', 'parte', 'poco', 'propi', 'quier', 'repre',
    'se', 'secue', 'su', 'tema', 'trans', 'un', 'usar',
  ]);
  return new Set([...factTokens(value)].filter((token) => !generic.has(token) && !/^\d+$/.test(token)));
}

function valuesAtStructuredPath(value: unknown, path: string[]): string[] {
  if (path.length === 0) return typeof value === 'string' ? [value] : [];
  const [segment, ...rest] = path;
  if (segment === '*') {
    return Array.isArray(value) ? value.flatMap((entry) => valuesAtStructuredPath(entry, rest)) : [];
  }
  if (!value || typeof value !== 'object') return [];
  return valuesAtStructuredPath((value as Record<string, unknown>)[segment], rest);
}

function customStructuredPayload(value: unknown): { prompt: Set<string>; fields: Map<string, Set<string>> } | undefined {
  if (!value || typeof value !== 'object') return undefined;
  const step = value as { type?: string; prompt?: string; props?: unknown };
  const paths = step.type ? CUSTOM_STRUCTURED_PATHS.get(step.type) : undefined;
  if (!paths) return undefined;
  const fields = new Map<string, Set<string>>();
  for (const path of paths) {
    const tokens = meaningfulCollisionTokens(valuesAtStructuredPath(step.props, path.split('.')).join(' '));
    if (tokens.size > 0) fields.set(path, tokens);
  }
  if (fields.size === 0) return undefined;
  return {
    prompt: meaningfulCollisionTokens(step.prompt),
    fields,
  };
}

function canonicalFactValues(value: unknown): string[] {
  const normalized = normalizeFactText(value);
  if (!normalized) return [];
  const values = [normalized];
  const tokens = normalized.split(' ');
  if (tokens.length > 1 && tokens.every((token) => token === tokens[0])) {
    values.push(`${tokens.length} ${tokens[0]}s`);
  }
  return values;
}

function structuredAssessment(value: unknown): { prompt: Set<string>; facts: StructuredFact[] } {
  if (!value || typeof value !== 'object') return { prompt: new Set(), facts: [] };
  const step = value as {
    type?: string; prompt?: string; explain?: string;
    props?: {
      answer?: string | number; unit?: string; stimulus?: string;
      misconceptions?: Array<{ value?: string | number; msg?: string }>;
      options?: Array<{ id?: string; text?: string; feedback?: string }>; correct?: string[];
      buckets?: Array<{ id?: string; label?: string }>;
      items?: Array<{ text?: string; bucket?: string; feedback?: string }>;
      pairs?: Array<{ left?: string; right?: string }>;
      statements?: Array<{ text?: string; answer?: boolean; why?: string }>;
      text?: string;
      questions?: Array<{ q?: string; options?: Array<{ id?: string; text?: string }>; correct?: string }>;
    };
  };
  const props = step.props ?? {};
  const prompt = factTokens(step.prompt);
  const makeFact = (context: unknown, values: unknown[], role: StructuredFact['role'] = 'answer'): StructuredFact => ({
    context: factTokens((step.prompt ?? '') + ' ' + String(context ?? '')),
    values: values.flatMap(canonicalFactValues),
    role,
  });
  const numericValues = (value: unknown): string[] => (
    String(value ?? '').match(/-?\d+(?:[.,]\d+)?\s*(?:°|cm|m|km|%|quetzales?|pulsos?)?/gi) ?? []
  ).map((item) => normalizeFactText(item));
  const supportText = [
    step.explain,
    ...(props.misconceptions ?? []).map((item) => [item.value, item.msg].filter(Boolean).join(' ')),
    ...(props.options ?? []).map((item) => item.feedback),
    ...(props.items ?? []).map((item) => item.feedback),
    ...(props.statements ?? []).map((item) => item.why),
  ].filter((item): item is string => Boolean(item));
  const supportFacts = supportText.flatMap((item) => [
    makeFact(item, [item], 'support'),
    makeFact(item, numericValues(item), 'support'),
  ]).filter((fact) => fact.values.length > 0);
  if (step.type === 'choice') {
    const correct = new Set(props.correct ?? []);
    return { prompt, facts: [
      ...(props.options ?? []).filter((option) => correct.has(option.id ?? '')).map((option) => makeFact('', [option.text])),
      ...supportFacts,
    ] };
  }
  if (step.type === 'number-input') {
    return { prompt, facts: [
      makeFact(props.stimulus, [props.answer, String(props.answer ?? '') + ' ' + (props.unit ?? '')]),
      ...supportFacts,
    ] };
  }
  if (step.type === 'sort') {
    const labels = new Map((props.buckets ?? []).map((bucket) => [bucket.id, bucket.label]));
    return { prompt, facts: [
      ...(props.items ?? []).map((item) => makeFact(item.text, [item.text, labels.get(item.bucket), item.feedback])),
      ...supportFacts,
    ] };
  }
  if (step.type === 'match') return { prompt, facts: (props.pairs ?? []).map((pair) => makeFact(pair.left, [pair.left, pair.right])) };
  if (step.type === 'order') return { prompt, facts: (props.items ?? []).map((item) => makeFact(item.text, [item.text])) };
  if (step.type === 'true-false') return { prompt, facts: [
    ...(props.statements ?? []).map((item) => makeFact(item.text, [String(item.text) + '=' + item.answer])),
    ...supportFacts,
  ] };
  if (step.type === 'fill-blank') {
    const answers = [...(props.text ?? '').matchAll(/\[\[([^\]]+)\]\]/g)].map((match) => match[1]);
    return { prompt, facts: answers.map((answer) => makeFact(props.text, [answer])) };
  }
  if (step.type === 'reading') {
    return { prompt, facts: (props.questions ?? []).map((question) => {
      const answer = question.options?.find((option) => option.id === question.correct)?.text;
      return makeFact(question.q, [answer]);
    }) };
  }
  if (step.explain) return { prompt, facts: supportFacts };
  return { prompt, facts: [] };
}

function directionalOverlap(left: Set<string>, right: Set<string>): number {
  if (left.size === 0 || right.size === 0) return 0;
  return [...left].filter((token) => right.has(token)).length / left.size;
}

function meaningfulNumericContext(tokens: Set<string>): Set<string> {
  const generic = new Set(['cuant', 'mide', 'medir', 'cada', 'valor', 'respu', 'total', 'forma', 'tiene', 'grado', 'cm', 'km']);
  return new Set([...tokens].filter((token) => !generic.has(token) && !/^-?\d+(?:[.,/]\d+)?°?$/.test(token)));
}

function factValuesMatch(left: string, right: string): boolean {
  const numericFact = /^-?\d+(?:[.,]\d+)?(?:\s*(?:°|cm|m|km|%|quetzales?|pulsos?))?$/i;
  const leftNumber = numericFact.test(left) ? left.match(/-?\d+(?:[.,]\d+)?/) : null;
  const rightNumber = numericFact.test(right) ? right.match(/-?\d+(?:[.,]\d+)?/) : null;
  if (leftNumber && rightNumber) {
    return Number(leftNumber[0].replace(',', '.')) === Number(rightNumber[0].replace(',', '.'));
  }
  if (leftNumber || rightNumber) return false;
  if (left === right || (left.length >= 5 && right.includes(left)) || (right.length >= 5 && left.includes(right))) return true;
  const leftTokens = factTokens(left);
  const rightTokens = factTokens(right);
  const shared = [...leftTokens].filter((token) => rightTokens.has(token)).length;
  return shared >= 2 && (
    directionalOverlap(leftTokens, rightTokens) >= 0.5
    || directionalOverlap(rightTokens, leftTokens) >= 0.5
  );
}

function repeatsStructuredFact(candidate: unknown, source: unknown): boolean {
  const candidateType = (candidate as { type?: string } | undefined)?.type;
  const sourceType = (source as { type?: string } | undefined)?.type;
  const crossType = Boolean(candidateType && sourceType && candidateType !== sourceType);
  const left = structuredAssessment(candidate);
  const right = structuredAssessment(source);
  const customReuse = (
    assessmentValue: unknown,
    assessment: { prompt: Set<string>; facts: StructuredFact[] },
    custom: { prompt: Set<string>; fields: Map<string, Set<string>> } | undefined,
  ): boolean => {
    if (!custom) return false;
    const assessmentPrompt = (assessmentValue as { prompt?: string } | undefined)?.prompt;
    const assessmentPromptTokens = meaningfulCollisionTokens(assessmentPrompt);
    const answerTokens = meaningfulCollisionTokens(
      assessment.facts
        .filter((fact) => fact.role === 'answer')
        .flatMap((fact) => fact.values)
        .join(' '),
    );
    const fieldTokens = new Set([...custom.fields.values()].flatMap((tokens) => [...tokens]));
    const customContent = new Set([...custom.prompt, ...fieldTokens]);
    const sharedPrompt = [...assessmentPromptTokens].filter((token) => custom.prompt.has(token));
    const sharedAnswer = [...answerTokens].filter((token) => customContent.has(token));
    const sharedAnswerPrompt = [...answerTokens].filter((token) => custom.prompt.has(token)).length;
    const sharedAnswerFields = [...custom.fields.values()].map((tokens) => (
      [...answerTokens].filter((token) => tokens.has(token)).length
    ));
    const sharedAnswerField = Math.max(0, ...sharedAnswerFields);
    const relatedPrompt = sharedPrompt.length >= 1
      && directionalOverlap(assessmentPromptTokens, custom.prompt) >= 0.2;
    const diagnosisTask = /\b(?:error|falla|ajuste|correg\w*)\b/.test(normalizeFactText(assessmentPrompt));
    const equivalentPromptAndAnswer = relatedPrompt
      && sharedAnswer.length >= 2
      && sharedAnswerPrompt >= 2
      && (!diagnosisTask || directionalOverlap(answerTokens, custom.prompt) >= 0.5);
    const structuredEntryReuse = relatedPrompt
      && sharedAnswerField >= 2;
    const contributingFields = sharedAnswerFields.filter((count) => count > 0).length;
    const evidenceSources = Number(sharedAnswerPrompt > 0) + contributingFields;
    const aggregateEvidence = sharedAnswerPrompt
      + sharedAnswerFields.reduce((sum, count) => sum + count * 1.5, 0);
    const promptOnlyAnswerTokens = [...answerTokens].filter((token) => (
      custom.prompt.has(token) && !fieldTokens.has(token)
    ));
    const fieldOnlyAnswerTokens = [...answerTokens].filter((token) => (
      fieldTokens.has(token) && !custom.prompt.has(token)
    ));
    const promptAndFieldEvidence = promptOnlyAnswerTokens.length >= 1
      && fieldOnlyAnswerTokens.length >= 1;
    const mixedEvidenceReuse = relatedPrompt
      && sharedAnswer.length >= 2
      && (promptAndFieldEvidence || contributingFields >= 2)
      && evidenceSources >= 2
      && aggregateEvidence >= 2.5;
    return equivalentPromptAndAnswer || structuredEntryReuse || mixedEvidenceReuse;
  };
  if (
    customReuse(candidate, left, customStructuredPayload(source))
    || customReuse(source, right, customStructuredPayload(candidate))
  ) return true;

  const numericPattern = /^-?\d+(?:[.,]\d+)?(?:\s*\D+)?$/;
  const isNumericFact = (fact: StructuredFact) => fact.values.some((item) => numericPattern.test(item));
  const isPairFact = (fact: StructuredFact) => !isNumericFact(fact) && fact.values.length >= 2;
  const matches = (candidateFact: StructuredFact, sourceFact: StructuredFact): boolean => {
    const numericValue = isNumericFact(candidateFact) && isNumericFact(sourceFact);
    const candidateValueTokens = factTokens(candidateFact.values.join(' '));
    const sourceValueTokens = factTokens(sourceFact.values.join(' '));
    const sharedValues = [...candidateValueTokens].filter((token) => sourceValueTokens.has(token)).length;
    const pairedEntry = isPairFact(candidateFact) && isPairFact(sourceFact);
    const candidateEntry = normalizeFactText(candidateFact.values[0]);
    const sourceEntry = normalizeFactText(sourceFact.values[0]);
    const sameEntry = candidateEntry === sourceEntry
      || (candidateEntry.length >= 5 && sourceEntry.includes(candidateEntry))
      || (sourceEntry.length >= 5 && candidateEntry.includes(sourceEntry));
    const samePair = pairedEntry
      && sameEntry
      && factValuesMatch(candidateFact.values[1], sourceFact.values[1]);
    const samePhrase = !pairedEntry
      && !numericValue
      && candidateValueTokens.size >= 3
      && sourceValueTokens.size >= 3
      && sharedValues >= 2
      && (directionalOverlap(candidateValueTokens, sourceValueTokens) >= 0.6
        || directionalOverlap(sourceValueTokens, candidateValueTokens) >= 0.6)
      && (directionalOverlap(left.prompt, right.prompt) >= 0.55
        || directionalOverlap(right.prompt, left.prompt) >= 0.55);
    const sameValue = numericValue
      ? candidateFact.values.some((candidateValue) => (
        sourceFact.values.some((sourceValue) => factValuesMatch(candidateValue, sourceValue))
      ))
      : sourceFact.role === 'answer' && (samePair || samePhrase);
    if (samePair) return true;
    const candidateContext = meaningfulNumericContext(candidateFact.context);
    const sourceContext = meaningfulNumericContext(sourceFact.context);
    const sharedContext = [...candidateContext].filter((token) => sourceContext.has(token)).length;
    return sameValue
      && candidateContext.size >= 2
      && sharedContext >= 2
      && directionalOverlap(candidateContext, sourceContext) >= (numericValue ? 0.35 : 0.3);
  };
  const candidateFacts = left.facts.filter((fact) => fact.role === 'answer');
  const sourceFacts = right.facts.filter((fact) => fact.role === 'answer');
  const pairedFacts = candidateFacts.filter(isPairFact);
  const repeatedPairs = pairedFacts.filter((candidateFact) => (
    right.facts.some((sourceFact) => isPairFact(sourceFact) && matches(candidateFact, sourceFact))
  ));
  if (repeatedPairs.length >= (crossType ? 1 : 2)) return true;
  const pairMatchesSingle = (
    pair: StructuredFact,
    single: StructuredFact,
    singlePrompt: Set<string>,
  ): boolean => {
    const entry = meaningfulCollisionTokens(pair.values[0]);
    const category = meaningfulCollisionTokens(pair.values.slice(1).join(' '));
    const singleAnswer = meaningfulCollisionTokens(single.values.join(' '));
    const singleContent = new Set([...singlePrompt, ...singleAnswer]);
    const sharedEntry = [...entry].filter((token) => singleContent.has(token)).length;
    const sharedCategory = [...category].filter((token) => singleAnswer.has(token)).length;
    return entry.size >= 3
      && sharedEntry >= 3
      && directionalOverlap(entry, singleContent) >= 0.45
      && sharedCategory >= 1;
  };
  if (crossType && (
    candidateFacts.some((candidateFact) => isPairFact(candidateFact) && sourceFacts.some((sourceFact) => (
      !isPairFact(sourceFact) && pairMatchesSingle(candidateFact, sourceFact, right.prompt)
    )))
    || sourceFacts.some((sourceFact) => isPairFact(sourceFact) && candidateFacts.some((candidateFact) => (
      !isPairFact(candidateFact) && pairMatchesSingle(sourceFact, candidateFact, left.prompt)
    )))
  )) return true;
  const contextualReuse = candidateFacts.some((candidateFact) => right.facts.some((sourceFact) => {
    const candidateScenario = meaningfulCollisionTokens([...candidateFact.context].join(' '));
    const sourceScenario = meaningfulCollisionTokens([...sourceFact.context].join(' '));
    const candidateResponseText = (isPairFact(candidateFact) ? candidateFact.values.slice(1) : candidateFact.values).join(' ');
    const sourceResponseText = (isPairFact(sourceFact) ? sourceFact.values.slice(1) : sourceFact.values).join(' ');
    const candidateResponse = meaningfulCollisionTokens(candidateResponseText);
    const sourceResponse = meaningfulCollisionTokens(sourceResponseText);
    const sharedScenario = [...candidateScenario].filter((token) => sourceScenario.has(token)).length;
    const sharedResponse = [...candidateResponse].filter((token) => sourceResponse.has(token)).length;
    const scenarioOverlap = directionalOverlap(candidateScenario, sourceScenario) >= 0.3
      || directionalOverlap(sourceScenario, candidateScenario) >= 0.3;
    const responseOverlap = directionalOverlap(candidateResponse, sourceResponse) >= 0.3
      || directionalOverlap(sourceResponse, candidateResponse) >= 0.3;
    const crossTypeAnswerReuse = sourceFact.role === 'answer'
      && ((sharedScenario >= 3 && sharedResponse >= 2 && scenarioOverlap && responseOverlap)
        || (sharedScenario >= 2 && sharedResponse >= 3 && responseOverlap));
    const crossTypeSupportReuse = sourceFact.role === 'support'
      && sharedScenario >= 2
      && sharedResponse >= 4
      && responseOverlap;
    return (crossType && (
      crossTypeAnswerReuse
      || crossTypeSupportReuse
    )) || (
      !crossType
      && sharedScenario >= 2
      && sharedResponse >= 4
      && responseOverlap
      && normalizeFactText(candidateResponseText) !== normalizeFactText(sourceResponseText)
      && factValuesMatch(candidateResponseText, sourceResponseText)
    );
  }));
  if (contextualReuse) return true;
  return candidateFacts.filter((fact) => !isPairFact(fact)).some((candidateFact) => (
    right.facts.some((sourceFact) => matches(candidateFact, sourceFact))
  ));
}

function quantifiedActionCount(value: unknown): number {
  const activeText = normalizeFactText(value);
  return [...activeText.matchAll(/\b(\d+)\s+(pases?|lanzamientos?|saltos?|veces|repeticiones?|intentos?|finalizaciones?|frotados?)\b/g)]
    .reduce((sum, match) => sum + Number(match[1]), 0);
}

function lessonWorkload(lesson: Lesson): {
  nestedItems: number;
  complexity: number;
  longResponse: boolean;
} {
  const countItems = (value: unknown): number => {
    if (!value || typeof value !== 'object') return 0;
    if (Array.isArray(value)) return value.reduce((sum, item) => sum + countItems(item), 0);
    return Object.entries(value as Record<string, unknown>).reduce((sum, [key, item]) => {
      if (['options', 'items', 'pairs', 'statements', 'questions', 'reveal', 'cards', 'steps', 'rounds'].includes(key) && Array.isArray(item)) return sum + item.length;
      return sum;
    }, 0);
  };
  const nestedItems = lesson.steps.reduce((sum, step) => sum + countItems(step.props), 0);
  const serialized = JSON.stringify(lesson.steps.map((step) => ({ ...step, media: undefined })));
  const textWords = serialized.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+/g)?.length ?? 0;
  const mediaSeconds = [lesson.media, ...lesson.steps.map((step) => step.media)]
    .reduce((sum, media) => sum + Number(media?.duration ?? 0), 0);
  const activeText = normalizeFactText(JSON.stringify(lesson.steps.filter((step) => step.fase === 'aplicar')));
  const repetitions = quantifiedActionCount(activeText);
  const setupActions = activeText.match(/\b(?:buscar|recolectar|conseguir|recortar|triturar|preparar|mezclar|distribuir|montar|cocinar)\b/g)?.length ?? 0;
  const evidenceWriting = activeText.match(/\b(?:anota|anoten|registra|registren|escribe|escriban|documenta|documenten)\b/g)?.length ?? 0;
  const complexity = lesson.steps.length + nestedItems / 4 + mediaSeconds / 60 + textWords / 600
    + repetitions / 10 + setupActions * 0.5 + evidenceWriting * 0.5;
  const longResponse = lesson.steps.some((step) => step.type === 'short-answer'
    && Number((step.props as { minWords?: number }).minWords ?? 0) > lesson.minutes * 3);
  return { nestedItems, complexity, longResponse };
}

function mediaBriefFailure(media: { kind: string; brief: string; alt: string }): string | undefined {
  const brief = normalizeFactText(media.brief);
  const timed = /audio|video|animation/.test(media.kind);
  if (timed && !/\b\d{1,3}\s*(?:s|segundos?|minutos?)\b/.test(brief)) return 'sin duracion';
  if (!timed && !/\b\d{3,4}\s*[x×]\s*\d{3,4}\b/.test(brief)) return 'sin dimensiones';
  if (!/(?:subtitulos|transcripcion|guion exacto|sin musica|contraste|legible|letra grande|rotulos grandes|texto grande|sin texto|texto exacto)/.test(brief)) return 'sin detalle de accesibilidad';
  if (!media.alt.trim() || media.alt.length < 30) return 'alt insuficiente';
  return undefined;
}

function unsupportedCausality(value: unknown): boolean {
  const text = normalizeFactText(value);
  return /(?:bosque|vegetacion|arboles?|reforestar|tala).{0,100}(?:garantiza|asegura|impide que.{0,30}se seque|hace que.{0,30}(?:se infiltre|haya agua)|provoca.{0,30}(?:que se seque|la falta de agua))/.test(text)
    || /sin (?:bosque|arboles?|raices).{0,80}(?:no se infiltra|el nacimiento se seca|se seca el nacimiento)/.test(text)
    || /(?:humo|exposicion al humo).{0,80}(?:causa|provoca).{0,40}(?:gripe|influenza)/.test(text);
}

function sourceSupportFailures(packet: unknown, model: unknown): string[] {
  const serialize = (value: unknown) => normalizeFactText(typeof value === 'object' ? JSON.stringify(value) : value);
  const packetText = serialize(packet);
  const modelText = serialize(model);
  const labels = (text: string) => new Set([...text.matchAll(/fuente\s+([a-c0-9])\b/g)].map((match) => match[1]));
  const visibleLabels = labels(packetText);
  const failures = [...labels(modelText)]
    .filter((label) => !visibleLabels.has(label))
    .map((label) => `fuente ${label} no suministrada`);
  for (const claim of [
    /institucion publica de salud/,
    /(?:hervir|hervido)/,
    /(?:clorar|cloracion|clorada)/,
  ]) {
    if (claim.test(modelText) && !claim.test(packetText)) failures.push(`afirmacion no sustentada: ${claim.source}`);
  }
  return failures;
}

function sharesConceptGroups(left: unknown, right: unknown, groups: RegExp[]): boolean {
  const serialize = (value: unknown) => normalizeFactText(typeof value === 'object' ? JSON.stringify(value) : value);
  const leftText = serialize(left);
  const rightText = serialize(right);
  return groups.every((group) => group.test(leftText) && group.test(rightText));
}

function semanticCnbFailures(step: Pick<StepBase, 'cnb' | 'prompt' | 'props'>): string[] {
  const text = normalizeFactText(JSON.stringify({ prompt: step.prompt, props: step.props }));
  const failures: string[] = [];
  if (/(?:bosque|cobertura vegetal|erosion|infiltracion|caudal)/.test(text)
    && step.cnb.some((ref) => ref.startsWith('cnt:'))
    && !step.cnb.includes('cnt:6.3.1')) failures.push('relacion bosque-agua sin cnt:6.3.1');
  if (/\b(?:xlix|numero romano)\b/.test(text) && !step.cnb.includes('mat:4.1.2')) failures.push('numeracion romana sin mat:4.1.2');
  return failures;
}

function nestedGradedAssessments(values: unknown[]): Array<{ type: string; prompt?: string; areas: string[] }> {
  const found: Array<{ type: string; prompt?: string; areas: string[] }> = [];
  const visit = (value: unknown): void => {
    if (Array.isArray(value)) { value.forEach(visit); return; }
    if (!value || typeof value !== 'object') return;
    const record = value as Record<string, unknown>;
    if (typeof record.type === 'string' && Array.isArray(record.areas) && getActivity(record.type)?.graded) {
      found.push(record as { type: string; prompt?: string; areas: string[] });
    }
    Object.values(record).forEach(visit);
  };
  visit(values);
  return found;
}

const PRIMARY_ICON_FIELDS = new Set([
  'text',
  'title',
  'front',
  'body',
  'label',
  'prompt',
  'problem',
]);
const SUPPORTING_ICON_FIELDS = new Set(['back', 'alt', 'brief']);

const CONCRETE_OBJECT = /(?:^|[^\p{L}])(?:comidas?|alimentos?|mercados?|escuelas?|parques?|casas?|edificios?|tiendas?|hospital(?:es)?|iglesias?|calles?|puentes?|rivers?|r[ií]os?|monta(?:n|ñ)as?|volc[aá]n(?:es)?|[aá]rbol(?:es)?|fruits?|frutas?|pan(?:es)?|ma[ií](?:z|ces)|frijoles?|huevos?|tortillas?|ventanas?|panelas?|pozos?|canchas?|herramientas?|tables?|mesas?)(?=$|[^\p{L}])/iu;
const WEEK_TWO_CONCRETE_OBJECT = /(?:^|[^\p{L}])(?:c[eé]lulas?|oranges?|naranjas?)(?=$|[^\p{L}])/iu;
const WEEK_THREE_CONCRETE_OBJECT = /(?:^|[^\p{L}])(?:mesopotamia|mesopot[aá]micos?|ruedas?|tablillas?|escenarios?|señales?|letreros?|carteles?|informativas?|rutas?|carreteras?|motocicletas?|motos?|autobuses?|buses?)(?=$|[^\p{L}])/iu;

function inspectConcreteIcon(value: unknown, path: string, failures: string[]): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) => inspectConcreteIcon(item, `${path}[${index}]`, failures));
    return;
  }
  if (!value || typeof value !== 'object') return;
  const record = value as Record<string, unknown>;
  const icon = typeof record.icon === 'string' ? record.icon : undefined;
  const primaryWords = Object.entries(record)
    .filter(([key, item]) => PRIMARY_ICON_FIELDS.has(key) && typeof item === 'string' && item.trim())
    .map(([, item]) => item)
    .join(' ');
  const words = primaryWords || Object.entries(record)
    .filter(([key, item]) => SUPPORTING_ICON_FIELDS.has(key) && typeof item === 'string' && item.trim())
    .map(([, item]) => item)
    .join(' ');
  if (
    (icon === 'Circle' || icon === 'Square')
    && (
      CONCRETE_OBJECT.test(words)
      || (path.startsWith('s02.') && WEEK_TWO_CONCRETE_OBJECT.test(words))
      || (path.startsWith('s03.') && WEEK_THREE_CONCRETE_OBJECT.test(words))
    )
  ) {
    failures.push(`${path}: ${icon} representa "${words}"`);
  }
  Object.entries(record).forEach(([key, item]) => inspectConcreteIcon(item, `${path}.${key}`, failures));
}

test('El escáner de íconos distingue conceptos de Semana 3 de geometría genuina', () => {
  const failures: string[] = [];
  inspectConcreteIcon([
    { icon: 'Circle', front: 'Mesopotamia', back: 'Los mesopotámicos escribían sobre tablillas.' },
    { icon: 'Square', front: 'Señal informativa', back: 'El letrero orienta a la comunidad.' },
    { icon: 'Circle', front: 'Círculo', back: 'Figura cuyos puntos están a la misma distancia del centro.' },
    { icon: 'Square', front: 'Cuadrado', back: 'Figura geométrica de cuatro lados iguales.' },
  ], 's03.fixture', failures);

  assert.equal(failures.length, 2);
  assert.match(failures[0], /Mesopotamia/);
  assert.match(failures[1], /Señal informativa/);
});

test('Unidad 1 usa las ocho investigaciones aprobadas', () => {
  assert.equal(unitWeeks.length, 8);
  for (const [number, title, workshopTitle] of EXPECTED) {
    const week = unitWeeks.find((item) => item.semana === number);
    assert.ok(week, `Falta semana ${number}`);
    assert.equal(week.title, title);
    assert.equal(week.temaGenerador, title);
    assert.equal(week.lessons.find((lesson) => lesson.kind === 'taller')?.title, workshopTitle);
  }
});

test('Unidad 1 limita cada taller a dos, tres o cuatro áreas reales', () => {
  for (const week of unitWeeks) {
    const workshop = week.lessons.find((lesson) => lesson.kind === 'taller');
    assert.ok(workshop, `Semana ${week.semana} sin taller`);
    const contributors = new Set(
      workshop.steps
        .filter((step) => step.fase === 'construir' || step.fase === 'aplicar')
        .flatMap((step) => step.areas),
    );
    assert.ok(
      contributors.size >= 2 && contributors.size <= 4,
      `Semana ${week.semana}: taller tiene ${contributors.size} áreas contribuyentes en construir/aplicar (${[...contributors].join(', ')})`,
    );
  }
});

test('Semana 1 mantiene un taller ejecutable con productos escalonados', () => {
  const workshop = weekOne.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 1 sin taller');
  assert.ok(workshop.minutes <= 20, `Taller declara ${workshop.minutes} minutos`);
  assert.ok(
    workshop.steps.length >= 10 && workshop.steps.length <= 14,
    `Semana 1: taller tiene ${workshop.steps.length} pasos`,
  );

  type ProjectStep = {
    title?: string;
    prompt: string;
    props?: {
      goal?: string;
      steps?: Array<{ title?: string; detail?: string }>;
      evidence?: string;
      rubric?: string[];
    };
  };
  const projects = workshop.steps.filter((step) => step.type === 'project') as ProjectStep[];
  const projectText = (project: ProjectStep) => JSON.stringify({
    title: project.title,
    prompt: project.prompt,
    ...project.props,
  }).toLocaleLowerCase('es');
  const mapProject = projects.find((project) => /mapa/.test(projectText(project)));
  const oralProject = projects.find((project) => /presentación oral/.test(projectText(project)));

  assert.ok(mapProject, 'Falta un producto de mapa');
  assert.ok(oralProject, 'Falta un producto de presentación oral');
  assert.ok(
    workshop.steps.indexOf(mapProject as typeof workshop.steps[number])
      < workshop.steps.indexOf(oralProject as typeof workshop.steps[number]),
    'El mapa debe construirse antes de la presentación',
  );

  const mapText = projectText(mapProject);
  assert.match(mapText, /norte/);
  assert.match(mapText, /clave/);
  assert.match(mapText, /cuatro anotaciones/);
  assert.ok((mapProject.props?.steps?.length ?? 0) >= 2, 'El mapa no tiene elaboración por etapas');

  const oralText = projectText(oralProject);
  assert.match(oralText, /45 segundos/);
  assert.match(oralText, /ensaya/);
  assert.match(oralText, /presenta/);
  assert.ok((oralProject.props?.steps?.length ?? 0) >= 2, 'La presentación no tiene preparación y ejecución');

  const categoryCheck = workshop.steps.find((step) => (
    step.type === 'match'
    && step.areas.includes('fc')
    && Array.isArray((step as { props?: { pairs?: unknown[] } }).props?.pairs)
  )) as { props?: { pairs?: unknown[] } } | undefined;
  assert.equal(categoryCheck?.props?.pairs?.length, 4, 'El taller debe preparar exactamente cuatro categorías de anotación');
});

test('Semana 1 no atribuye convenciones cartográficas locales a ccss:1.2.1', () => {
  const week = unitWeeks.find((item) => item.semana === 1);
  assert.ok(week, 'Falta semana 1');
  const workshopIndex = week.lessons.findIndex((lesson) => lesson.kind === 'taller');
  assert.notEqual(workshopIndex, -1, 'Semana 1 sin taller');

  const ccssLessons = week.lessons
    .slice(0, workshopIndex)
    .filter((lesson) => lesson.area === 'ccss');
  const ccssInstruction = JSON.stringify(
    ccssLessons.flatMap((lesson) => lesson.steps)
      .filter((step) => step.cnb.includes('ccss:1.2.1')),
  ).toLocaleLowerCase('es');
  for (const convention of ['orientación', 'símbolo', 'clave', 'anotación']) {
    assert.ok(
      !ccssInstruction.includes(convention),
      `ccss:1.2.1 no respalda la convención "${convention}"`,
    );
  }
});

test('Semana 1 enseña las convenciones del mapa en L1 antes de recuperarlas en el taller', () => {
  const week = unitWeeks.find((item) => item.semana === 1);
  assert.ok(week, 'Falta semana 1');
  const workshopIndex = week.lessons.findIndex((lesson) => lesson.kind === 'taller');
  assert.notEqual(workshopIndex, -1, 'Semana 1 sin taller');

  const l1Lessons = week.lessons
    .slice(0, workshopIndex)
    .filter((lesson) => lesson.area === 'l1');
  const mapInstruction = JSON.stringify(
    l1Lessons.flatMap((lesson) => lesson.steps)
      .filter((step) => (
        step.cnb.includes('l1:3.2.1')
        && step.cnb.includes('l1:3.3.1')
      )),
  ).toLocaleLowerCase('es');
  for (const convention of ['orientación', 'norte', 'símbolo', 'clave', 'anotación']) {
    assert.ok(mapInstruction.includes(convention), `L1 no enseña la convención "${convention}"`);
  }

  const workshop = week.lessons[workshopIndex];
  const workshopReview = workshop.steps.find((step) => (
    step.type === 'match'
    && step.fase === 'construir'
    && step.areas.length === 1
    && step.areas[0] === 'l1'
    && step.cnb.includes('l1:3.2.1')
    && step.cnb.includes('l1:3.3.1')
  ));
  assert.ok(workshopReview, 'El taller no recupera las convenciones cartográficas desde L1');
  assert.match(workshopReview.prompt.toLocaleLowerCase('es'), /recupera.+comunicación y lenguaje/s);
});

test('Semana 1 enseña antes de presentar cualquier interacción calificada', () => {
  const failures: string[] = [];
  for (const lesson of weekOne.lessons.filter((item) => item.kind === 'materia')) {
    const firstInstruction = lesson.steps.findIndex((step) => INSTRUCTION_TYPES.has(step.type));
    const firstGraded = lesson.steps.findIndex((step) => getActivity(step.type)?.graded);
    if (firstInstruction < 0 || firstGraded < 0 || firstInstruction > firstGraded) {
      failures.push(`${lesson.id}: instrucción=${firstInstruction + 1}, calificada=${firstGraded + 1}`);
    }
  }
  assert.deepEqual(failures, []);
});

test('Semana 1 reserva explorar para actividades no calificadas', () => {
  const failures = weekOne.lessons
    .filter((lesson) => lesson.kind === 'materia')
    .flatMap((lesson) => lesson.steps
      .filter((step) => step.fase === 'explorar' && Boolean(getActivity(step.type)?.graded))
      .map((step) => `${lesson.id}: ${step.type}`));
  assert.deepEqual(failures, []);
});

test('Semana 1 mantiene un flujo de fases monotónico en cada materia', () => {
  const phaseRank = new Map([
    ['explorar', 0],
    ['construir', 1],
    ['aplicar', 2],
    ['comprobar', 3],
    ['reflexionar', 4],
  ]);
  const failures: string[] = [];
  for (const lesson of weekOne.lessons.filter((item) => item.kind === 'materia')) {
    for (let index = 1; index < lesson.steps.length; index += 1) {
      const previous = phaseRank.get(lesson.steps[index - 1].fase);
      const current = phaseRank.get(lesson.steps[index].fase);
      if (previous === undefined || current === undefined || current < previous) {
        failures.push(`${lesson.id}: ${lesson.steps[index - 1].fase} -> ${lesson.steps[index].fase}`);
      }
    }
  }
  assert.deepEqual(failures, []);
});

test('CCSS enseña el efecto de la altitud antes de evaluarlo', () => {
  const lesson = weekOne.lessons.find((item) => item.id === 's01-ccss-2');
  assert.ok(lesson, 'Falta s01-ccss-2');
  const assessedIndex = lesson.steps.findIndex((step) => (
    Boolean(getActivity(step.type)?.graded)
    && /altitud|altura|más alto/i.test(JSON.stringify(step))
  ));
  assert.ok(assessedIndex >= 0, 'CCSS no evalúa el efecto de la altitud');
  const priorInstruction = lesson.steps
    .slice(0, assessedIndex)
    .filter((step) => INSTRUCTION_TYPES.has(step.type))
    .map((step) => JSON.stringify(step))
    .join(' ')
    .toLocaleLowerCase('es');
  assert.match(priorInstruction, /altitud|altura/);
  assert.match(priorInstruction, /(más alto|al subir).*(más frío|temperatura baja)/s);
});

test('Ciencias enseña pared y vacuola antes de evaluar la firmeza vegetal', () => {
  const lesson = weekOne.lessons.find((item) => item.id === 's01-cnt-3');
  assert.ok(lesson, 'Falta s01-cnt-3');
  const assessedIndex = lesson.steps.findIndex((step) => (
    Boolean(getActivity(step.type)?.graded)
    && /lechuga|firme|cubierta rígida/i.test(JSON.stringify(step))
  ));
  assert.ok(assessedIndex >= 0, 'Ciencias no evalúa la firmeza vegetal');
  const priorInstruction = lesson.steps
    .slice(0, assessedIndex)
    .filter((step) => INSTRUCTION_TYPES.has(step.type))
    .map((step) => JSON.stringify(step))
    .join(' ')
    .toLocaleLowerCase('es');
  assert.match(priorInstruction, /pared celular/);
  assert.match(priorInstruction, /vacuola/);
  assert.match(priorInstruction, /firme/);
});

test('Semana 1 guía la construcción de un mapa en L1 antes de una transferencia independiente', () => {
  const mapLesson = weekOne.lessons.find((lesson) => (
    lesson.kind === 'materia'
    && lesson.area === 'l1'
    && lesson.steps.some((step) => step.cnb.includes('l1:3.3.1'))
  ));
  assert.ok(mapLesson, 'Falta la lección L1 de mapas');

  const underMapRefs = (step: typeof mapLesson.steps[number]) => (
    step.cnb.includes('l1:3.2.1') && step.cnb.includes('l1:3.3.1')
  );
  const modelIndex = mapLesson.steps.findIndex((step) => underMapRefs(step) && step.type === 'worked-example');
  const guidedIndex = mapLesson.steps.findIndex((step, index) => (
    index > modelIndex
    && underMapRefs(step)
    && step.fase === 'construir'
    && Boolean(getActivity(step.type)?.graded)
    && typeof step.hint === 'string'
    && typeof step.explain === 'string'
  ));
  const transferIndex = mapLesson.steps.findIndex((step, index) => (
    index > guidedIndex
    && underMapRefs(step)
    && step.fase === 'aplicar'
    && step.type === 'project'
    && !step.hint
  ));

  assert.ok(modelIndex >= 0, 'L1 no modela la lectura y construcción del mapa');
  assert.ok(guidedIndex > modelIndex, 'L1 no ofrece construcción guiada con retroalimentación');
  assert.ok(transferIndex > guidedIndex, 'L1 no ofrece transferencia independiente de construcción');

  const model = JSON.stringify(mapLesson.steps[modelIndex].props).toLocaleLowerCase('es');
  const guided = JSON.stringify(mapLesson.steps[guidedIndex].props).toLocaleLowerCase('es');
  const transfer = JSON.stringify(mapLesson.steps[transferIndex].props).toLocaleLowerCase('es');
  for (const [stage, payload] of [['modelo', model], ['guía', guided], ['transferencia', transfer]] as const) {
    assert.match(payload, /norte|orient|flecha.+n/, `${stage}: falta orientación`);
    assert.match(payload, /símbolo/, `${stage}: faltan símbolos`);
    assert.match(payload, /clave/, `${stage}: falta clave`);
    assert.match(payload, /anotación|evidencia/, `${stage}: falta anotación de evidencia`);
    assert.match(payload, /línea|vincul/, `${stage}: no conecta evidencia con un lugar`);
  }
});

test('Semana 1 evalúa las diez áreas primarias en reto y banco', () => {
  const challenge = weekOne.lessons.find((lesson) => lesson.kind === 'reto');
  assert.ok(challenge, 'Semana 1 sin reto');
  const challengeAreas = new Set(
    challenge.steps
      .filter((step) => step.fase === 'comprobar' && getActivity(step.type)?.graded)
      .map((step) => step.areas[0]),
  );
  const bankAreas = new Set(
    weekOneBank
      .filter((step) => getActivity(step.type)?.graded)
      .map((step) => step.areas[0]),
  );
  assert.deepEqual(challengeAreas, PRIMARY_AREAS);
  assert.deepEqual(bankAreas, PRIMARY_AREAS);
});

test('Semana 1 evalúa composición de correo en L1 sin terminología retirada', () => {
  const bankItem = weekOneBank.find((step) => step.areas[0] === 'l1');
  assert.ok(bankItem, 'Semana 1 no tiene ítem de banco para L1');
  const serialized = JSON.stringify(bankItem).toLocaleLowerCase('es');
  assert.doesNotMatch(serialized, /lenguaje sonoro|nota de voz/);
  assert.ok(bankItem.cnb.includes('l1:3.4.2'));
  assert.equal(bankItem.hint, undefined);
  assert.equal(bankItem.explain, undefined);
  assert.equal(bankItem.type, 'choice', 'El banco debe pedir elegir un correo completo en contexto');

  const props = bankItem.props as {
    options?: Array<{ id: string; text: string }>;
    correct?: string[];
  };
  const correct = (props.options ?? [])
    .filter((option) => props.correct?.includes(option.id))
    .map((option) => option.text)
    .join(' ')
    .toLocaleLowerCase('es');
  for (const element of ['asunto', 'saludo', 'petición', 'firma']) {
    assert.match(correct, new RegExp(element), `La respuesta correcta no incluye ${element}`);
  }
});

test('Semana 1 no reutiliza payloads de práctica guiada en reto o banco', () => {
  const guided = weekOne.lessons
    .filter((lesson) => lesson.kind === 'materia')
    .flatMap((lesson) => lesson.steps);
  const challenge = weekOne.lessons.find((lesson) => lesson.kind === 'reto');
  assert.ok(challenge, 'Semana 1 sin reto');

  const reused: string[] = [];
  for (const [source, steps] of [['reto', challenge.steps], ['banco', weekOneBank]] as const) {
    for (const assessment of steps) {
      const entries = comparableEntries(assessment);
      if (entries.length < 2) continue;
      for (const practice of guided) {
        if (practice.type !== assessment.type || practice.areas[0] !== assessment.areas[0]) continue;
        const practiceEntries = new Set(comparableEntries(practice));
        if (entries.every((entry) => practiceEntries.has(entry))) {
          reused.push(`${source}/${assessment.areas[0]}/${assessment.type}`);
          break;
        }
      }
    }
  }
  assert.deepEqual(reused, []);
});

test('Semana 2 preserva las lecciones y referencias CNB aprobadas', () => {
  const expectedLessonCounts = new Map([
    ['mat', 5], ['l1', 5], ['cnt', 3], ['ccss', 3], ['l2', 2],
    ['l3', 2], ['fc', 2], ['art', 2], ['ef', 2], ['pyd', 1],
  ]);
  const expectedCnb = new Set([
    'mat:1.1.6', 'mat:1.1.7', 'mat:1.1.8', 'mat:1.1.9', 'mat:1.1.10',
    'l1:4.2.1', 'l1:4.2.2',
    'cnt:1.4.1', 'cnt:2.1.1', 'cnt:1.5.1', 'cnt:1.5.2', 'cnt:1.5.3',
    'ccss:2.3.1', 'ccss:2.1.1', 'ccss:3.1.1', 'ccss:3.2.5', 'ccss:3.2.6',
    'l2:1.3.1', 'l2:2.1.1', 'l3:1.1.2', 'fc:1.2.2', 'art:1.1.2',
    'ef:1.3.3', 'ef:1.3.5', 'ef:1.3.6', 'pyd:1.2.1', 'pyd:1.4.4',
  ]);
  const lessons = weekTwo.lessons.filter((lesson) => lesson.kind === 'materia');
  const actualCounts = new Map<string, number>();
  for (const lesson of lessons) {
    const area = lesson.area;
    assert.ok(area, `${lesson.id} no declara área`);
    actualCounts.set(area, (actualCounts.get(area) ?? 0) + 1);
  }
  assert.deepEqual(actualCounts, expectedLessonCounts);
  assert.deepEqual(new Set(lessons.flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb))), expectedCnb);
});

test('Semana 2 enseña antes de calificar y mantiene fases monotónicas', () => {
  const phaseRank = new Map([
    ['explorar', 0], ['construir', 1], ['aplicar', 2], ['comprobar', 3], ['reflexionar', 4],
  ]);
  const failures: string[] = [];
  for (const lesson of weekTwo.lessons.filter((item) => item.kind === 'materia')) {
    const firstInstruction = lesson.steps.findIndex((step) => INSTRUCTION_TYPES.has(step.type));
    const firstGraded = lesson.steps.findIndex((step) => getActivity(step.type)?.graded);
    if (firstInstruction < 0 || firstGraded < 0 || firstInstruction > firstGraded) {
      failures.push(`${lesson.id}: instrucción=${firstInstruction + 1}, calificada=${firstGraded + 1}`);
    }
    lesson.steps.forEach((step, index) => {
      if (step.fase === 'explorar' && getActivity(step.type)?.graded) {
        failures.push(`${lesson.id}: explorar calificado en paso ${index + 1}`);
      }
      if (index > 0 && (phaseRank.get(step.fase) ?? -1) < (phaseRank.get(lesson.steps[index - 1].fase) ?? -1)) {
        failures.push(`${lesson.id}: ${lesson.steps[index - 1].fase} -> ${step.fase}`);
      }
    });
  }
  assert.deepEqual(failures, []);
});

test('Semana 2 ofrece guía, aplicación independiente y dos salidas sin pistas por materia', () => {
  const failures: string[] = [];
  for (const lesson of weekTwo.lessons.filter((item) => item.kind === 'materia')) {
    const guided = lesson.steps.some((step) => (
      step.fase === 'construir'
      && Boolean(getActivity(step.type)?.graded)
      && Boolean(step.hint)
      && Boolean(step.explain)
    ));
    const independent = lesson.steps.some((step) => (
      step.fase === 'aplicar'
      && Boolean(getActivity(step.type)?.graded)
      && !step.hint
    ));
    const exits = lesson.steps.filter((step) => (
      step.fase === 'comprobar'
      && Boolean(getActivity(step.type)?.graded)
      && !step.hint
      && !step.explain
    ));
    if (!guided || !independent || exits.length < 2) {
      failures.push(`${lesson.id}: guía=${guided}, aplicación=${independent}, salidas=${exits.length}`);
    }
  }
  assert.deepEqual(failures, []);
});

test('Semana 2 modela y guía el procedimiento de higiene antes del taller', () => {
  const workshopIndex = weekTwo.lessons.findIndex((lesson) => lesson.kind === 'taller');
  assert.ok(workshopIndex > 0, 'Semana 2 no ubica el taller después de las materias');
  const priorSteps = weekTwo.lessons
    .slice(0, workshopIndex)
    .filter((lesson) => lesson.kind === 'materia')
    .flatMap((lesson) => lesson.steps);
  const usesHygieneRefs = (step: (typeof priorSteps)[number]) => (
    step.cnb.includes('l2:2.1.1') && step.cnb.includes('cnt:1.5.3')
  );
  const model = priorSteps.find((step) => step.type === 'worked-example' && usesHygieneRefs(step));
  const guided = priorSteps.find((step) => (
    step.fase === 'construir'
    && Boolean(getActivity(step.type)?.graded)
    && Boolean(step.hint)
    && Boolean(step.explain)
    && usesHygieneRefs(step)
  ));
  assert.ok(model, 'Falta modelar el procedimiento seguro con L2 y CNT');
  assert.ok(guided, 'Falta practicar con guía el procedimiento seguro con L2 y CNT');

  const prerequisiteText = JSON.stringify([model, guided]).toLocaleLowerCase('es');
  assert.match(prerequisiteText, /persona adulta.+(?:cort|cuchillo)|(?:cort|cuchillo).+persona adulta/s);
  assert.match(prerequisiteText, /(?:tap|cubr|prote).+moscas|moscas.+(?:tap|cubr|prote)/s);
  assert.match(prerequisiteText, /(?:separ|lejos).+dinero.+(?:comida|alimento)|dinero.+(?:separ|lejos).+(?:comida|alimento)|(?:comida|alimento).+(?:separ|lejos).+dinero/s);
  assert.match(prerequisiteText, /(?:primero|antes de (?:preparar|tocar)).{0,100}(?:lav|limpi).+manos|(?:lav|limpi).+manos.{0,100}antes de (?:preparar|tocar)/s);
  assert.match(prerequisiteText, /(?:cobr|dinero).+(?:lav|limpi).+manos|(?:lav|limpi).+manos.+(?:cobr|dinero)/s);

  const workshop = weekTwo.lessons[workshopIndex];
  const retrievalText = JSON.stringify(workshop).toLocaleLowerCase('es');
  assert.match(retrievalText, /recupera|retoma|aplica.+procedimiento/s);
  assert.match(retrievalText, /l2:2\.1\.1/);
  assert.match(retrievalText, /cnt:1\.5\.3/);
  assert.doesNotMatch(retrievalText, /agua clorada|bote (?:de basura )?con tapa|limpia (?:la )?mesa/);

  const safetyFacts = (text: string) => {
    const facts = new Set<string>();
    if (/agua (?:potable|apta para (?:el )?consumo)/.test(text)) facts.add('agua-apta');
    if (/(?:separ|lejos).+dinero.+(?:comida|alimento)|dinero.+(?:separ|lejos).+(?:comida|alimento)|(?:comida|alimento).+(?:separ|lejos).+dinero/s.test(text)) facts.add('dinero-separado');
    if (/persona adulta.+(?:cort|cuchillo)|(?:cort|cuchillo).+persona adulta/s.test(text)) facts.add('cuchillo-adulto');
    if (/(?:tap|cubr|prote).+(?:comida|alimento|fruta)|(?:comida|alimento|fruta).+(?:tap|cubr|prote)/s.test(text)) facts.add('alimento-tapado');
    if (/(?:primero|antes de (?:preparar|tocar)).{0,100}(?:lav|limpi).+manos|(?:lav|limpi).+manos.{0,100}antes de (?:preparar|tocar)/s.test(text)) facts.add('manos-antes-preparar');
    if (/(?:cobr|dinero).+(?:lav|limpi).+manos|(?:lav|limpi).+manos.+(?:cobr|dinero)/s.test(text)) facts.add('manos-despues-dinero');
    return facts;
  };
  const expectedSafety = new Set(['agua-apta', 'dinero-separado', 'cuchillo-adulto', 'alimento-tapado', 'manos-antes-preparar', 'manos-despues-dinero']);
  assert.deepEqual(safetyFacts(prerequisiteText), expectedSafety, 'L2 debe enseñar los seis hechos de seguridad');
  assert.deepEqual(safetyFacts(retrievalText), expectedSafety, 'El taller debe recuperar solo los seis hechos enseñados');

  const hygieneProject = workshop.steps.find((step) => step.type === 'project' && /higiene/i.test(step.title ?? '')) as typeof workshop.steps[number] & {
    props: { steps?: Array<{ title?: string; detail?: string }>; rubric?: string[] };
  };
  assert.ok(hygieneProject, 'Falta una etapa de construcción del procedimiento de higiene');
  assert.deepEqual(safetyFacts(normalizeFactText(JSON.stringify(hygieneProject.props.steps))), expectedSafety);
  assert.deepEqual(safetyFacts(normalizeFactText(hygieneProject.props.rubric?.join(' '))), expectedSafety);
});

test('Semana 2 construye un puesto sano y respetuoso con alcance y evidencia factibles', () => {
  const workshop = weekTwo.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 2 sin taller');
  assert.equal(workshop.title, 'Un puesto sano y respetuoso');
  assert.ok(workshop.minutes <= 20, `Taller declara ${workshop.minutes} minutos`);
  assert.ok(workshop.steps.length >= 10 && workshop.steps.length <= 14, `Taller tiene ${workshop.steps.length} pasos`);

  const allowedAreas = new Set(['cnt', 'pyd', 'l2', 'l3', 'fc']);
  const contributors = new Set(
    workshop.steps
      .filter((step) => step.fase === 'construir' || step.fase === 'aplicar')
      .flatMap((step) => step.areas),
  );
  assert.ok(contributors.size >= 2 && contributors.size <= 4);
  assert.ok([...contributors].every((area) => allowedAreas.has(area)), `Áreas fuera de alcance: ${[...contributors]}`);

  const workshopIndex = weekTwo.lessons.indexOf(workshop);
  const priorCnb = new Set(
    weekTwo.lessons
      .slice(0, workshopIndex)
      .filter((lesson) => lesson.kind === 'materia')
      .flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb)),
  );
  assert.ok(workshop.steps.every((step) => step.cnb.every((ref) => priorCnb.has(ref))), 'El taller introduce CNB no enseñado');

  const projects = workshop.steps.filter((step) => step.type === 'project');
  const firstProjectIndex = workshop.steps.findIndex((step) => step.type === 'project');
  assert.ok(firstProjectIndex >= 0 && firstProjectIndex <= 3, 'La creación debe empezar después de no más de tres pasos breves');
  const preProductItems = workshop.steps.slice(0, firstProjectIndex).reduce((total, step) => {
    const props = step.props as Record<string, unknown>;
    const collections = ['options', 'items', 'pairs', 'statements', 'questions'];
    return total + collections.reduce((count, key) => count + (Array.isArray(props[key]) ? props[key].length : 0), 0);
  }, 0);
  assert.ok(preProductItems <= 9, 'La preparación previa exige ' + preProductItems + ' respuestas');
  assert.ok(projects.length >= 4, 'La oferta, higiene, servicio e integración final deben construirse por etapas');
  assert.ok(workshop.steps.slice(firstProjectIndex, -1).length >= 6, 'La mayoría del taller debe dedicarse a producir y revisar');

  const project = projects.at(-1) as typeof projects[number] & {
    props: { steps?: unknown[]; rubric?: unknown[]; evidence?: string };
  };
  assert.ok(project, 'Falta la revisión final del plan integrado');
  assert.equal(project.props.rubric?.length, 3, 'La rúbrica final debe corresponder a los tres componentes');
  const stageTitles = projects.map((step) => normalizeFactText(step.title)).join(' ');
  assert.match(stageTitles, /oferta/);
  assert.match(stageTitles, /higiene/);
  assert.match(stageTitles, /servicio/);
  assert.match(stageTitles, /integr|revis|final/);
  const projectText = JSON.stringify(project).toLocaleLowerCase('es');
  assert.match(projectText, /plan.+puesto|puesto.+plan/s);
  assert.match(projectText, /procedimiento.+higiene|higiene.+procedimiento/s);
  assert.match(projectText, /primero/);
  assert.match(projectText, /respeto|respetuos/);
  assert.match(projectText, /oferta/);
  assert.doesNotMatch(projectText, /distribuci[oó]n del puesto/);
});

test('Semana 2 evita absolutos inexactos sobre ADN y cromosomas', () => {
  const genetics = weekTwo.lessons.find((lesson) => lesson.id === 's02-cnt-1');
  assert.ok(genetics, 'Falta la lección de genética');
  assert.ok(genetics.resumen, 'La lección de genética no tiene resumen');
  const summary = genetics.resumen.join(' ').toLocaleLowerCase('es');
  assert.doesNotMatch(summary, /(?:adn.+)?n[uú]cleo de (?:cada|todas?) (?:las? )?c[eé]lulas?/);
  assert.doesNotMatch(summary, /46 cromosomas en (?:cada|todas?) (?:las? )?c[eé]lulas?/);
});

test('Semana 2 distingue la ameba común de una ameba parásita que causa enfermedad', () => {
  const parasites = weekTwo.lessons.find((lesson) => lesson.id === 's02-cnt-3');
  assert.ok(parasites, 'Falta la lección de parásitos');
  const segments = JSON.stringify(parasites).split(/[.!?]/).map(normalizeFactText).filter((segment) => (
    /ameba/.test(segment) && /(endoparasit|diarrea|dolor|enferm|contamin)/.test(segment)
  ));
  assert.ok(segments.length > 0, 'La lección no explica la ameba parásita');
  assert.ok(
    segments.every((segment) => /ameba parasita|entamoeba histolytica/.test(segment)),
    'Referencias genéricas a la ameba como patógena: ' + segments.join(' | '),
  );
});

test('Semana 2 evalúa contenido enseñado, sin pistas y con payloads frescos', () => {
  const subjectSteps = weekTwo.lessons
    .filter((lesson) => lesson.kind === 'materia')
    .flatMap((lesson) => lesson.steps);
  const taughtCnb = new Set(subjectSteps.flatMap((step) => step.cnb));
  const challenge = weekTwo.lessons.find((lesson) => lesson.kind === 'reto');
  assert.ok(challenge, 'Semana 2 sin reto');
  const assessments = [...challenge.steps, ...weekTwoBank].filter((step) => getActivity(step.type)?.graded);
  assert.ok(assessments.every((step) => !step.hint && !step.explain), 'Reto o banco contiene pistas');
  assert.ok(assessments.every((step) => step.cnb.every((ref) => taughtCnb.has(ref))), 'Reto o banco evalúa CNB no enseñado');

  const challengeAreas = new Set(challenge.steps.filter((step) => getActivity(step.type)?.graded).map((step) => step.areas[0]));
  const bankAreas = new Set(weekTwoBank.filter((step) => getActivity(step.type)?.graded).map((step) => step.areas[0]));
  assert.ok(challengeAreas.size >= 6, `Reto cubre ${challengeAreas.size} materias`);
  assert.deepEqual(bankAreas, PRIMARY_AREAS);

  const reused: string[] = [];
  for (const [source, steps] of [['reto', challenge.steps], ['banco', weekTwoBank]] as const) {
    for (const assessment of steps) {
      if (!getActivity(assessment.type)?.graded) continue;
      for (const practice of subjectSteps) {
        if (practice.areas[0] !== assessment.areas[0]) continue;
        if (repeatsStructuredFact(assessment, practice)) {
          reused.push(source + '/' + assessment.areas[0] + '/' + assessment.type + ' <= ' + normalizeFactText(practice.prompt));
          break;
        }
      }
    }
  }

  const gradedChallenge = nestedGradedAssessments(challenge.steps);
  for (const assessment of weekTwoBank.filter((step) => getActivity(step.type)?.graded)) {
    const repeatedLessonSource = subjectSteps.find((source) => (
      source.areas[0] === assessment.areas[0]
      && repeatsStructuredFact(assessment, source)
    ));
    const repeatedChallengeFact = gradedChallenge.some((source) => {
      if (source.areas[0] !== assessment.areas[0]) return false;
      return repeatsStructuredFact(assessment, source);
    });
    if (repeatedLessonSource || repeatedChallengeFact) {
      const lessonContext = repeatedLessonSource ? ` <= ${normalizeFactText(repeatedLessonSource.prompt)}` : '';
      reused.push(`banco/${assessment.areas[0]}/estructura: ${normalizeFactText(assessment.prompt)}${lessonContext}`);
    }
  }
  assert.deepEqual(reused, []);
});

test('Semana 3 preserva las lecciones y referencias CNB aprobadas con una idea central', () => {
  const expectedLessonCounts = new Map([
    ['mat', 5], ['l1', 5], ['cnt', 3], ['ccss', 3], ['l2', 2],
    ['l3', 2], ['fc', 2], ['art', 2], ['ef', 2], ['pyd', 1],
  ]);
  const expectedCnb = new Set([
    'mat:1.1.11', 'mat:1.2.1', 'mat:1.3.1', 'mat:1.3.2',
    'l1:4.2.3', 'l1:5.1.7',
    'cnt:1.4.1', 'cnt:2.1.2', 'cnt:2.2.1', 'cnt:2.3.1',
    'ccss:3.2.1', 'ccss:3.3.1', 'ccss:3.4.1',
    'l2:2.1.2', 'l2:2.1.3', 'l2:2.1.5',
    'l3:1.3.3', 'fc:1.2.3', 'fc:2.1.1', 'art:2.2.1',
    'ef:1.4.1', 'ef:1.4.2', 'ef:1.4.3', 'ef:1.4.12', 'ef:1.4.14',
    'pyd:2.3.1', 'pyd:2.3.2',
  ]);
  const lessons = weekThree.lessons.filter((lesson) => lesson.kind === 'materia');
  const actualCounts = new Map<string, number>();
  const unfocused: string[] = [];
  for (const lesson of lessons) {
    const area = lesson.area;
    assert.ok(area, `${lesson.id} no declara área`);
    actualCounts.set(area, (actualCounts.get(area) ?? 0) + 1);
    const objectiveCount = lesson.objetivos?.length ?? 0;
    if (objectiveCount !== 1) unfocused.push(`${lesson.id}: ${objectiveCount} objetivos`);
  }
  assert.deepEqual(actualCounts, expectedLessonCounts);
  assert.deepEqual(new Set(lessons.flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb))), expectedCnb);
  assert.deepEqual(unfocused, []);
});

test('Semana 3 enseña antes de calificar y mantiene fases monotónicas', () => {
  const phaseRank = new Map([
    ['explorar', 0], ['construir', 1], ['aplicar', 2], ['comprobar', 3], ['reflexionar', 4],
  ]);
  const failures: string[] = [];
  for (const lesson of weekThree.lessons.filter((item) => item.kind === 'materia')) {
    const firstInstruction = lesson.steps.findIndex((step) => INSTRUCTION_TYPES.has(step.type));
    const firstGraded = lesson.steps.findIndex((step) => getActivity(step.type)?.graded);
    if (firstInstruction < 0 || firstGraded < 0 || firstInstruction > firstGraded) {
      failures.push(`${lesson.id}: instrucción=${firstInstruction + 1}, calificada=${firstGraded + 1}`);
    }
    lesson.steps.forEach((step, index) => {
      if (step.fase === 'explorar' && getActivity(step.type)?.graded) {
        failures.push(`${lesson.id}: explorar calificado en paso ${index + 1}`);
      }
      if (index > 0 && (phaseRank.get(step.fase) ?? -1) < (phaseRank.get(lesson.steps[index - 1].fase) ?? -1)) {
        failures.push(`${lesson.id}: ${lesson.steps[index - 1].fase} -> ${step.fase}`);
      }
    });
  }
  assert.deepEqual(failures, []);
});

test('Semana 3 ofrece guía, transferencia independiente y dos salidas justas por materia', () => {
  const failures: string[] = [];
  for (const lesson of weekThree.lessons.filter((item) => item.kind === 'materia')) {
    const guided = lesson.steps.some((step) => (
      step.fase === 'construir'
      && Boolean(getActivity(step.type)?.graded)
      && Boolean(step.hint)
      && Boolean(step.explain)
    ));
    const independent = lesson.steps.some((step) => (
      step.fase === 'aplicar'
      && Boolean(getActivity(step.type)?.graded)
      && !step.hint
    ));
    const exits = lesson.steps.filter((step) => (
      step.fase === 'comprobar'
      && Boolean(getActivity(step.type)?.graded)
      && !step.hint
      && !step.explain
    ));
    if (!guided || !independent || exits.length < 2) {
      failures.push(`${lesson.id}: guía=${guided}, transferencia=${independent}, salidas=${exits.length}`);
    }
  }
  assert.deepEqual(failures, []);
});

test('Semana 3 mantiene s03-l1-2 en una secuencia sustantiva de 9 a 14 actividades', () => {
  const lesson = weekThree.lessons.find((item) => item.id === 's03-l1-2');
  assert.ok(lesson, 'Falta s03-l1-2');
  assert.ok(lesson.steps.length >= 9 && lesson.steps.length <= 14, `s03-l1-2 tiene ${lesson.steps.length} actividades`);
  assert.ok(lesson.minutes >= 14, `s03-l1-2 asigna solo ${lesson.minutes} minutos a ${lesson.steps.length} actividades`);
  assert.equal(lesson.steps.filter((step) => step.fase === 'comprobar').length, 2);
});

test('Semana 3 condiciona la congruencia lateral de prismas y pirámides', () => {
  const lesson = weekThree.lessons.find((item) => item.id === 's03-mat-5');
  assert.ok(lesson, 'Falta s03-mat-5');
  const text = normalizeFactText(JSON.stringify(lesson));
  const solidsLesson = weekThree.lessons.find((item) => item.id === 's03-mat-4');
  assert.ok(solidsLesson, 'Falta s03-mat-4');
  const solidsText = normalizeFactText(JSON.stringify(solidsLesson));

  assert.doesNotMatch(solidsText, /prisma dos bases iguales y paralelas caras laterales rectangulares/);
  assert.match(solidsText, /prisma recto.{0,120}caras laterales.{0,40}rectangulos/);
  assert.doesNotMatch(text, /piramide de base regular todas sus caras laterales .*congruent/);
  assert.doesNotMatch(text, /base regular caras laterales iguales/);
  assert.match(text, /piramide recta.{0,160}(?:cuspide|vertice).{0,80}centro.{0,180}caras laterales.{0,80}congruent/);
  assert.match(text, /prisma recto.{0,160}base regular.{0,180}caras laterales.{0,80}congruent/);

  const firstCondition = lesson.steps.findIndex((step) => (
    /piramide recta/.test(normalizeFactText(JSON.stringify(step)))
    && /(?:cuspide|vertice).+centro/.test(normalizeFactText(JSON.stringify(step)))
  ));
  const relevantAssessments = lesson.steps
    .map((step, index) => ({ step, index, text: normalizeFactText(JSON.stringify(step)) }))
    .filter(({ step, text: stepText }) => getActivity(step.type)?.graded && /caras laterales congruent/.test(stepText));
  assert.ok(firstCondition >= 0, 'Falta enseñar la condición de la pirámide recta');
  assert.ok(relevantAssessments.length >= 2, 'Faltan evaluaciones de congruencia lateral');
  assert.ok(relevantAssessments.every(({ index }) => index > firstCondition), 'Se evalúa antes de enseñar la condición');
  assert.ok(relevantAssessments.every(({ text: stepText }) => /piramide recta|prisma recto/.test(stepText)), 'Una evaluación omite la condición geométrica');
});

test('Semana 3 usa una clasificación de glándulas con respuestas únicas en el banco', () => {
  const assessment = weekThreeBank.find((step) => step.areas[0] === 'cnt');
  assert.ok(assessment, 'Falta el ítem CNT del banco');
  assert.equal(assessment.type, 'sort', 'La clasificación no debe depender de distractores válidos en un espacio en blanco');
  const props = assessment.props as {
    buckets?: Array<{ id: string; label: string }>;
    items?: Array<{ text: string; bucket: string }>;
  };
  const buckets = new Map((props.buckets ?? []).map((bucket) => [bucket.id, normalizeFactText(bucket.label)]));
  assert.equal(props.items?.length, 2);
  assert.equal(new Set((props.items ?? []).map((item) => item.bucket)).size, 2);
  assert.ok((props.items ?? []).every((item) => buckets.has(item.bucket)));
  assert.match([...buckets.values()].join(' '), /interna.+externa|endocrina.+exocrina/);
  assert.match(normalizeFactText(JSON.stringify(props.items)), /sangre/);
  assert.match(normalizeFactText(JSON.stringify(props.items)), /conducto/);
});

test('Semana 3 presenta la evacuación como dirección designada sujeta a riesgos actuales', () => {
  const lesson = weekThree.lessons.find((item) => item.id === 's03-l2-1');
  assert.ok(lesson, 'Falta s03-l2-1');
  const text = normalizeFactText(JSON.stringify(lesson));

  assert.doesNotMatch(text, /flecha indica la ruta segura/);
  assert.doesNotMatch(text, /flecha garantiza|ruta garantiza|libre de riesgos/);
  assert.match(text, /direccion (?:designada|indicada) para evacuar|ruta de evacuacion designada/);
  assert.match(text, /riesgos? actuales?|condiciones? del momento|instrucciones? de (?:una persona adulta|las autoridades?)/);
});

test('Semana 3 construye una ruta segura con prerrequisitos, producto y carga factibles', () => {
  const workshop = weekThree.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 3 sin taller');
  assert.equal(workshop.title, 'Ruta segura a la escuela');
  assert.ok(workshop.minutes <= 20, `Taller declara ${workshop.minutes} minutos`);
  assert.ok(workshop.steps.length >= 10 && workshop.steps.length <= 14, `Taller tiene ${workshop.steps.length} pasos`);

  const minuteLabels = workshop.steps.map((step) => {
    const label = `${step.title ?? ''} ${step.prompt}`;
    const match = label.match(/(?:^|[· ])(\d+) min(?:\.|utos?)?(?:$|[ .])/i);
    return match ? Number(match[1]) : 0;
  });
  assert.ok(minuteLabels.every((minutes) => minutes > 0), 'Cada paso, incluida la reflexión, debe tener minutos explícitos');
  assert.ok(
    minuteLabels.reduce((total, minutes) => total + minutes, 0) <= workshop.minutes,
    `La agenda etiqueta ${minuteLabels.reduce((total, minutes) => total + minutes, 0)} minutos para ${workshop.minutes} disponibles`,
  );

  const contributors = new Set(
    workshop.steps
      .filter((step) => step.fase === 'construir' || step.fase === 'aplicar')
      .flatMap((step) => step.areas),
  );
  assert.deepEqual(contributors, new Set(['mat', 'l2', 'art', 'pyd']));

  const workshopIndex = weekThree.lessons.indexOf(workshop);
  const priorCnb = new Set(
    weekThree.lessons
      .slice(0, workshopIndex)
      .filter((lesson) => lesson.kind === 'materia')
      .flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb)),
  );
  assert.ok(workshop.steps.every((step) => step.cnb.every((ref) => priorCnb.has(ref))), 'El taller introduce CNB no enseñado');

  const projects = workshop.steps.filter((step) => step.type === 'project');
  const firstProjectIndex = workshop.steps.findIndex((step) => step.type === 'project');
  assert.ok(firstProjectIndex >= 0 && firstProjectIndex <= 2, 'La producción debe empezar tras no más de dos pasos breves');
  const preProductAssessments = workshop.steps.slice(0, firstProjectIndex).filter((step) => getActivity(step.type)?.graded);
  assert.ok(preProductAssessments.length <= 1, 'Debe haber como máximo una interacción de recuperación antes del producto');
  assert.ok(
    preProductAssessments.reduce((total, step) => total + comparableEntries(step).length, 0) <= 2,
    'La recuperación previa debe limitarse a dos elementos esenciales',
  );
  assert.ok(projects.length >= 4, 'La ruta, el análisis, la señal y la integración deben construirse por etapas');
  assert.ok(workshop.steps.slice(firstProjectIndex, -1).length >= 7, 'La mayoría del taller debe dedicarse al producto y su revisión');

  const projectActions = projects.reduce((total, step) => {
    const props = step.props as { steps?: unknown[] };
    return total + (props.steps?.length ?? 0);
  }, 0);
  assert.ok(projectActions <= 10, `El producto exige ${projectActions} operaciones internas`);

  const routeProject = projects.find((step) => /representacion de la ruta/i.test(normalizeFactText(step.title)));
  const signProject = projects.find((step) => /senal/i.test(normalizeFactText(step.title)));
  assert.ok(routeProject, 'Falta una etapa específica para representar la ruta');
  assert.ok(signProject, 'Falta una etapa específica para diseñar la señal');
  assert.match(routeProject.title ?? '', /[· ]5 min/i, 'La ruta necesita la mayor asignación de tiempo');
  assert.ok(((routeProject.props as { steps?: unknown[] }).steps?.length ?? 0) <= 2, 'La ruta debe agrupar sus rasgos en dos operaciones');
  assert.doesNotMatch(normalizeFactText(JSON.stringify(routeProject.props)), /clave|tres referencias/);
  assert.ok(((signProject.props as { steps?: unknown[] }).steps?.length ?? 0) <= 2, 'La señal debe limitarse a dos operaciones');
  assert.ok(((signProject.props as { rubric?: unknown[] }).rubric?.length ?? 0) <= 2, 'La señal debe tener como máximo dos criterios');
  assert.match(normalizeFactText(JSON.stringify(signProject.props)), /(?:hasta|maximo|no mas de) 3 palabras/);
  assert.doesNotMatch(normalizeFactText(JSON.stringify(signProject.props)), /tecnica mixta|pastel|tinta/);

  const peerCheck = workshop.steps.find((step) => /prueba|comprob/i.test(step.title ?? ''));
  assert.ok(peerCheck, 'Falta una comprobación simple con otra persona');
  assert.notEqual(peerCheck.type, 'write', 'La comprobación breve no debe exigir escritura');
  assert.doesNotMatch(normalizeFactText(JSON.stringify(peerCheck.props)), /minwords|modelo/);
  assert.ok((peerCheck.prompt.match(/\bque\b/gi) ?? []).length <= 2, 'La comprobación debe limitarse a dos preguntas');

  const productText = JSON.stringify(projects).toLocaleLowerCase('es');
  assert.match(productText, /representaci[oó]n.+ruta|ruta.+representaci[oó]n/s);
  assert.match(productText, /riesgo.+(?:evidencia|observ|registro)|(?:evidencia|observ|registro).+riesgo/s);
  assert.match(productText, /señal.+(?:forma|color|[ií]cono)|(?:forma|color|[ií]cono).+señal/s);
  assert.match(productText, /depende|seg[uú]n|si .+ entonces|con la evidencia/s, 'La conclusión de seguridad debe ser condicional');
  assert.doesNotMatch(productText, /dos (?:cadenas|evidencias)|t[eé]cnica mixta|pastel|tinta/);
});

test('Semana 3 evalúa las diez áreas con contenido enseñado y payloads frescos', () => {
  const subjectSteps = weekThree.lessons
    .filter((lesson) => lesson.kind === 'materia')
    .flatMap((lesson) => lesson.steps);
  const taughtCnb = new Set(subjectSteps.flatMap((step) => step.cnb));
  const challenge = weekThree.lessons.find((lesson) => lesson.kind === 'reto');
  assert.ok(challenge, 'Semana 3 sin reto');
  const assessments = [...challenge.steps, ...weekThreeBank].filter((step) => getActivity(step.type)?.graded);
  assert.ok(assessments.every((step) => !step.hint && !step.explain), 'Reto o banco contiene pistas');
  assert.ok(assessments.every((step) => step.cnb.every((ref) => taughtCnb.has(ref))), 'Reto o banco evalúa CNB no enseñado');

  const challengeAreas = new Set(challenge.steps.filter((step) => getActivity(step.type)?.graded).map((step) => step.areas[0]));
  const bankAreas = new Set(weekThreeBank.filter((step) => getActivity(step.type)?.graded).map((step) => step.areas[0]));
  assert.deepEqual(challengeAreas, PRIMARY_AREAS);
  assert.deepEqual(bankAreas, PRIMARY_AREAS);

  const reused: string[] = [];
  for (const [source, steps] of [['reto', challenge.steps], ['banco', weekThreeBank]] as const) {
    for (const assessment of steps.filter((step) => getActivity(step.type)?.graded)) {
      for (const practice of subjectSteps) {
        if (practice.areas[0] !== assessment.areas[0]) continue;
        if (repeatsStructuredFact(assessment, practice)) {
          reused.push(source + '/' + assessment.areas[0] + '/' + assessment.type + ' <= ' + normalizeFactText(practice.prompt));
          break;
        }
      }
    }
  }

  const gradedChallenge = nestedGradedAssessments(challenge.steps);
  for (const assessment of weekThreeBank.filter((step) => getActivity(step.type)?.graded)) {
    const repeatedChallengeFact = gradedChallenge.some((source) => {
      if (source.areas[0] !== assessment.areas[0]) return false;
      return repeatsStructuredFact(assessment, source);
    });
    if (repeatedChallengeFact) reused.push(`banco/${assessment.areas[0]}/estructura: ${normalizeFactText(assessment.prompt)}`);
  }
  assert.deepEqual(reused, []);
});

test('Semana 4 preserva 27 lecciones, su cobertura CNB y una idea central por lección', () => {
  const expectedLessonCounts = new Map([
    ['mat', 5], ['l1', 5], ['cnt', 3], ['ccss', 3], ['l2', 2],
    ['l3', 2], ['fc', 2], ['art', 2], ['ef', 2], ['pyd', 1],
  ]);
  const expectedCnb = new Set([
    'mat:1.3.3', 'mat:1.3.4', 'mat:1.3.5', 'mat:1.3.6', 'mat:1.3.7',
    'l1:5.1.8', 'l1:5.1.9',
    'cnt:2.3.2', 'cnt:3.1.1', 'cnt:3.2.1', 'cnt:3.3.1',
    'ccss:4.1.1', 'ccss:4.1.5', 'ccss:4.2.2', 'ccss:5.1.1', 'ccss:5.1.4', 'ccss:8.1.1',
    'l2:2.2.1', 'l2:2.2.2', 'l3:2.2.1', 'fc:3.1.1', 'art:3.1.2',
    'ef:2.1.2', 'ef:2.1.3', 'pyd:2.5.3',
  ]);
  const lessons = weekFour.lessons.filter((lesson) => lesson.kind === 'materia');
  const actualCounts = new Map<string, number>();
  const failures: string[] = [];
  for (const lesson of lessons) {
    const area = lesson.area;
    assert.ok(area, `${lesson.id} no declara área`);
    actualCounts.set(area, (actualCounts.get(area) ?? 0) + 1);
    if ((lesson.objetivos?.length ?? 0) !== 1) failures.push(`${lesson.id}: ${lesson.objetivos?.length ?? 0} objetivos`);
    if (lesson.steps.length < 9 || lesson.steps.length > 14) failures.push(`${lesson.id}: ${lesson.steps.length} pasos`);
  }
  assert.deepEqual(actualCounts, expectedLessonCounts);
  assert.deepEqual(new Set(lessons.flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb))), expectedCnb);
  assert.deepEqual(failures, []);
});

test('Semana 4 enseña y modela antes de calificar con fases monotónicas', () => {
  const phaseRank = new Map([
    ['explorar', 0], ['construir', 1], ['aplicar', 2], ['comprobar', 3], ['reflexionar', 4],
  ]);
  const failures: string[] = [];
  for (const lesson of weekFour.lessons.filter((item) => item.kind === 'materia')) {
    const firstInstruction = lesson.steps.findIndex((step) => INSTRUCTION_TYPES.has(step.type));
    const firstGraded = lesson.steps.findIndex((step) => getActivity(step.type)?.graded);
    if (firstInstruction < 0 || firstGraded < 0 || firstInstruction > firstGraded) {
      failures.push(`${lesson.id}: instrucción=${firstInstruction + 1}, calificada=${firstGraded + 1}`);
    }
    lesson.steps.forEach((step, index) => {
      if (step.fase === 'explorar' && getActivity(step.type)?.graded) failures.push(`${lesson.id}: explorar calificado`);
      if (index > 0 && (phaseRank.get(step.fase) ?? -1) < (phaseRank.get(lesson.steps[index - 1].fase) ?? -1)) {
        failures.push(`${lesson.id}: ${lesson.steps[index - 1].fase} -> ${step.fase}`);
      }
    });
  }
  assert.deepEqual(failures, []);
});

test('Semana 4 ofrece práctica guiada, transferencia y dos salidas justas', () => {
  const failures: string[] = [];
  for (const lesson of weekFour.lessons.filter((item) => item.kind === 'materia')) {
    const guided = lesson.steps.some((step) => step.fase === 'construir'
      && Boolean(getActivity(step.type)?.graded) && Boolean(step.hint) && Boolean(step.explain));
    const transfer = lesson.steps.some((step) => step.fase === 'aplicar'
      && Boolean(getActivity(step.type)?.graded) && !step.hint);
    const exits = lesson.steps.filter((step) => step.fase === 'comprobar'
      && Boolean(getActivity(step.type)?.graded) && !step.hint && !step.explain);
    if (!guided || !transfer || exits.length < 2) {
      failures.push(`${lesson.id}: guía=${guided}, transferencia=${transfer}, salidas=${exits.length}`);
    }
  }
  assert.deepEqual(failures, []);
});

test('Semana 4 trata crecimiento y cuidado con ciencia, fuentes confiables y respeto', () => {
  assert.equal(weekFour.title, 'Crecer, cuidarnos y participar');
  assert.equal(weekFour.temaGenerador, 'Crecer, cuidarnos y participar');
  const framing = normalizeFactText(`${weekFour.contexto} ${weekFour.subtitle}`);
  assert.match(framing, /cambios? (?:del|en el) cuerpo|cambios? corporales|pubertad/);
  assert.match(framing, /cuidado|cuidarnos/);
  assert.match(framing, /fuentes? confiables?|informacion confiable/);
  assert.match(framing, /liderazgo/);
  assert.match(framing, /participa/);

  const science = weekFour.lessons.filter((lesson) => lesson.area === 'cnt');
  const scienceText = normalizeFactText(JSON.stringify(science));
  assert.match(scienceText, /cada (?:cuerpo|persona).{0,100}(?:ritmo|diferente)|variacion normal/);
  assert.match(scienceText, /persona adulta de confianza/);
  assert.match(scienceText, /profesional de salud|centro de salud/);
  assert.match(scienceText, /fuente confiable|informacion confiable/);
  assert.doesNotMatch(scienceText, /todos los (?:ninos|varones).{0,80}siempre|todas las (?:ninas|mujeres).{0,80}siempre/);
  assert.doesNotMatch(scienceText, /(?:sucio|vergonzoso|anormal|culpa).{0,60}(?:cuerpo|pubertad|menstruacion|sexualidad)/);
  assert.doesNotMatch(scienceText, /diagnostica|tienes la enfermedad|seguro que tienes/);
});

test('Semana 4 distingue las caras laterales de prismas rectos y oblicuos', () => {
  const math = weekFour.lessons.filter((lesson) => lesson.area === 'mat');
  const mathText = normalizeFactText(JSON.stringify(math));
  assert.match(mathText, /prisma recto.{0,100}caras? laterales?.{0,40}rectangul/);
  assert.match(mathText, /prisma oblicuo.{0,100}caras? laterales?.{0,40}paralelogram/);
  assert.doesNotMatch(mathText, /(?:caras? laterales? de (?:un|los) prismas?|prismas?:? (?:sus )?caras? laterales?|prismas?:? laterales).{0,30}(?:son )?rectangul/);
});

test('Semana 4 explica la ovogénesis sin convertirla en un óvulo completo por ciclo', () => {
  const science = weekFour.lessons.filter((lesson) => lesson.area === 'cnt');
  const scienceAndAssessment = normalizeFactText(JSON.stringify({ science, challenge: weekFour.lessons.find((lesson) => lesson.kind === 'reto'), bank: weekFourBank }));
  assert.match(scienceAndAssessment, /una celula funcional grande.{0,100}cuerpos polares|cuerpos polares.{0,100}una celula funcional grande/);
  assert.match(scienceAndAssessment, /ovocito secundario.{0,100}(?:puede|podria) ser liberado/);
  assert.match(scienceAndAssessment, /meiosis ii.{0,100}solo.{0,60}(?:si ocurre|cuando ocurre) la fecundacion/);
  assert.match(scienceAndAssessment, /ovulo.{0,100}(?:lenguaje|termino) (?:comun|simplificado)/);
  assert.doesNotMatch(scienceAndAssessment, /madura (?:un|el) ovulo (?:en|cada)|cada celula inicial.{0,80}(?:forma|produce) (?:un|1) ovulo/);
});

test('El reto L3 de Semana 4 transfiere solo palabras y patrones enseñados', () => {
  const l3Lessons = weekFour.lessons.filter((lesson) => lesson.area === 'l3');
  const taughtText = normalizeFactText(JSON.stringify(l3Lessons));
  const challenge = weekFour.lessons.find((lesson) => lesson.kind === 'reto');
  assert.ok(challenge, 'Semana 4 sin reto');
  const l3Assessment = challenge.steps.find((step) => step.areas.includes('l3'));
  assert.ok(l3Assessment, 'El reto no evalúa L3');
  const assessmentText = normalizeFactText(JSON.stringify(l3Assessment));
  assert.doesNotMatch(assessmentText, /\bkind\b|\bshare\b|\bhome\b/);
  const answers = [...JSON.stringify(l3Assessment).matchAll(/\[\[([a-z]+)\]\]/gi)].map((match) => normalizeFactText(match[1]));
  assert.ok(answers.length >= 2, 'La transferencia debe recuperar al menos dos palabras');
  assert.ok(answers.every((word) => new RegExp(`\\b${word}\\b`).test(taughtText)), `Palabras no enseñadas: ${answers.join(', ')}`);
  assert.match(assessmentText, /ee|ea|oo|sh|th|silent|muda|spelling|correctly spelled/);
});

test('Semana 4 enseña ea, oo y las dos voces de th como patrones con excepciones', () => {
  const l3 = weekFour.lessons.filter((lesson) => lesson.area === 'l3');
  const phonicsLesson = l3.find((lesson) => normalizeFactText(JSON.stringify(lesson)).includes('mother'));
  assert.ok(phonicsLesson, 'Falta la lección de patrones de pronunciación');
  const text = normalizeFactText(JSON.stringify(phonicsLesson));
  assert.match(text, /(?:en estas|en las) palabras|palabras (?:seleccionadas|aprendidas|estudiadas)/);
  assert.match(text, /excepciones|no siempre/);
  assert.match(text, /th.{0,100}(?:sin vibracion|no vibra).{0,100}(?:three|thank)/);
  assert.match(text, /th.{0,100}(?:con vibracion|vibra).{0,100}mother/);
  assert.doesNotMatch(text, /ee y ea suenan como una i larga|oo suena como u/);

  const sheepOptions = phonicsLesson.steps.flatMap((step) => {
    const props = step.props as { options?: Array<{ text?: string; icon?: string }> } | undefined;
    return props?.options ?? [];
  }).filter((option) => normalizeFactText(option.text ?? '').includes('sheep'));
  assert.ok(sheepOptions.length > 0, 'Falta el ejemplo sheep');
  assert.ok(sheepOptions.every((option) => option.icon === 'PawPrint'), 'Sheep debe usar un icono semántico de animal');
});

test('s04-mat-5 ensambla cuatro sólidos con un kit preparado dentro de quince minutos', () => {
  const lesson = weekFour.lessons.find((item) => item.id === 's04-mat-5');
  assert.ok(lesson, 'Falta s04-mat-5');
  assert.ok(lesson.minutes >= 10 && lesson.minutes <= 15);
  assert.ok(lesson.steps.length >= 9 && lesson.steps.length <= 10, `La lección tiene ${lesson.steps.length} pantallas`);
  const lessonText = normalizeFactText(JSON.stringify(lesson));
  assert.match(lessonText, /plantillas?.{0,80}(?:preparadas?|precortadas?)|kit.{0,80}(?:preparado|precortado)/);
  assert.match(lessonText, /reutilizable/);
  assert.match(lessonText, /velcro|gancho y felpa|broche|encastre|autoajustable/);
  assert.match(lessonText, /bases? (?:circulares|curvas).{0,120}(?:velcro|broche|encastre)|(?:velcro|broche|encastre).{0,120}bases? (?:circulares|curvas)/);
  const studentStepsText = normalizeFactText(JSON.stringify(lesson.steps));
  assert.doesNotMatch(studentStepsText, /(?:aplica|pega|corta).{0,40}(?:cinta|adhesiv)|(?:retira|despega).{0,40}(?:protector|adhesiv)/);
  assert.doesNotMatch(studentStepsText, /(?:estudiante|alumno|tu).{0,60}(?:traza|recorta|corta)|(?:traza|recorta|corta).{0,60}(?:estudiante|alumno|tu)/);

  const projects = lesson.steps.filter((step) => step.type === 'project');
  assert.equal(projects.length, 1);
  const project = projects[0] as typeof projects[number] & {
    props: { steps?: Array<{ title: string; detail: string }> };
  };
  const projectIndex = lesson.steps.indexOf(project);
  assert.ok(projectIndex >= 3 && projectIndex <= 4, 'Debe enseñar, modelar y comenzar el armado sin demora');
  const preparation = normalizeFactText(JSON.stringify(lesson.steps.slice(0, projectIndex)));
  assert.match(preparation, /linea punteada|doblez/);
  assert.match(preparation, /broche|encastre|gancho y felpa|velcro/);
  assert.match(preparation, /modelo|ejemplo/);

  const production = normalizeFactText(JSON.stringify(project));
  for (const solid of ['prisma recto', 'piramide recta', 'cilindro', 'cono']) assert.match(production, new RegExp(solid));
  assert.match(production, /cuatro modelos (?:armados|ensamblados|terminados)|4 modelos (?:armados|ensamblados|terminados)/);
  assert.match(production, /dobl|enroll|unir|ensambl/);
  assert.doesNotMatch(production, /\b(?:traza|dibuja|recorta|corta|usa tijeras|usa compas)\b/);
  assert.doesNotMatch(production, /adhesiv|cinta|papel protector|despega/);
  assert.match(lessonText, /solo (?:dobla|pliega).{0,40}enrolla.{0,60}(?:encaja|abrocha|cierra)/);

  const stages = project.props.steps ?? [];
  assert.ok(stages.length >= 3 && stages.length <= 5, `El proyecto tiene ${stages.length} etapas`);
  const stageMinutes = stages.map((stage) => Number(`${stage.title} ${stage.detail}`.match(/(\d+) min/i)?.[1] ?? 0));
  assert.ok(stageMinutes.every((minutes) => minutes > 0), 'Cada etapa manual debe declarar minutos');
  const assemblyMinutes = stageMinutes.reduce((sum, minutes) => sum + minutes, 0);
  assert.ok(assemblyMinutes >= 8 && assemblyMinutes <= 9, `El ensamblaje recibe ${assemblyMinutes} minutos`);
  const manualOperations = stages.reduce((total, stage) => total
    + (normalizeFactText(stage.detail).match(/\b(?:dobla|enrolla|une|cierra|fija|presiona|coloca|rotula|compara)\b/g)?.length ?? 0), 0);
  assert.ok(manualOperations <= 10, `El producto exige ${manualOperations} operaciones manuales`);
  assert.match(production, /velcro|gancho y felpa|broche|encastre|autoajustable/);
  assert.match(production, /etiqueta|rotul|compara/);

  const brief = normalizeFactText(lesson.media?.brief ?? '');
  assert.match(brief, /15 (?:juegos|sets|kits).{0,80}(?:parejas|sobres)|(?:parejas|sobres).{0,80}15 (?:juegos|sets|kits)/);
  assert.match(brief, /troquelad|die.?cut/);
  assert.match(brief, /premarcad|pre.?scored/);
  assert.match(brief, /lavable.{0,80}(?:polipropileno|cartulina)|(?:polipropileno|cartulina).{0,80}lavable/);
  assert.match(brief, /reutilizable/);
  assert.match(brief, /(?:velcro|gancho y felpa|broche|encastre).{0,100}(?:preinstalad|instalad)|(?:preinstalad|instalad).{0,100}(?:velcro|gancho y felpa|broche|encastre)/);
  assert.match(brief, /sobre.{0,80}(?:rotulad|etiquetad)|(?:rotulad|etiquetad).{0,80}sobre/);
  assert.match(brief, /(?:svg|pdf).{0,160}(?:(?:dieline|troquel|lineas de corte).{0,160}(?:proveedor|fabricacion)|(?:proveedor|fabricacion).{0,160}(?:dieline|troquel|lineas de corte))/);
  assert.match(brief, /prototipo.{0,100}(?:armado|ensamblaje)|(?:armado|ensamblaje).{0,100}prototipo/);
  assert.match(brief, /lista de (?:fabricacion|compra|adquisicion|produccion)/);
  assert.match(brief, /durabilidad/);
  assert.match(brief, /seguridad/);
  assert.match(brief, /accesibilidad/);
  assert.match(brief, /alternativa.{0,120}(?:imprimible|baja tecnologia).{0,160}opcional/s);
  assert.match(brief, /rutina docente normal.{0,80}(?:2 minutos|dos minutos)/);
  assert.match(brief, /docente.{0,140}(?:distribuye|entrega).{0,100}(?:recoge|recolecta)/s);
  assert.match(brief, /rutina docente normal.{0,240}no (?:recorta|corta).{0,40}(?:marca|dobla).{0,40}(?:aplica|pega).{0,40}adhesiv.{0,40}(?:cada clase|cada sesion)/s);
  assert.doesNotMatch(brief, /14 tiras|210 tiras/);

  const postProject = lesson.steps.slice(projectIndex + 1);
  const exits = postProject.filter((step) => step.fase === 'comprobar' && getActivity(step.type)?.graded);
  assert.equal(exits.length, 2, 'Después del armado solo deben quedar dos salidas calificadas');
  assert.ok(postProject.length <= 4, `Quedan ${postProject.length} pantallas después del producto`);
});

test('Semana 4 construye una campaña dramática breve con cuatro áreas ya enseñadas', () => {
  const workshop = weekFour.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 4 sin taller');
  assert.equal(workshop.title, 'Campaña: crecer con cuidado');
  assert.ok(workshop.minutes <= 20, `Taller declara ${workshop.minutes} minutos`);
  assert.ok(workshop.steps.length >= 10 && workshop.steps.length <= 14, `Taller tiene ${workshop.steps.length} pasos`);

  const minuteLabels = workshop.steps.map((step) => {
    const label = `${step.title ?? ''} ${step.prompt}`;
    const match = label.match(/(?:^|[· ])(\d+) min(?:\.|utos?)?(?:$|[ .])/i);
    return match ? Number(match[1]) : 0;
  });
  assert.ok(minuteLabels.every((minutes) => minutes > 0), 'Cada paso debe indicar minutos');
  assert.ok(minuteLabels.reduce((sum, minutes) => sum + minutes, 0) <= 18, 'La agenda no reserva tiempo para leer y navegar');

  const contributors = new Set(workshop.steps
    .filter((step) => step.fase === 'construir' || step.fase === 'aplicar')
    .flatMap((step) => step.areas));
  assert.deepEqual(contributors, new Set(['cnt', 'l1', 'fc', 'art']));
  const workshopIndex = weekFour.lessons.indexOf(workshop);
  const priorCnb = new Set(weekFour.lessons.slice(0, workshopIndex)
    .filter((lesson) => lesson.kind === 'materia')
    .flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb)));
  assert.ok(workshop.steps.every((step) => step.cnb.every((ref) => priorCnb.has(ref))), 'El taller introduce CNB no enseñado');

  const projects = workshop.steps.filter((step) => step.type === 'project');
  const firstProject = workshop.steps.findIndex((step) => step.type === 'project');
  assert.ok(firstProject >= 0 && firstProject <= 2, 'La producción comienza demasiado tarde');
  assert.ok(projects.length >= 3, 'La campaña debe producirse por etapas');
  const preProductItems = workshop.steps.slice(0, firstProject).reduce((total, step) => {
    const props = step.props as Record<string, unknown> | undefined;
    return total + Object.values(props ?? {}).reduce<number>((count, value) => count + (Array.isArray(value) ? value.length : 0), 0);
  }, 0);
  assert.ok(preProductItems <= 3, `Hay ${preProductItems} elementos antes de producir`);
  const productText = normalizeFactText(JSON.stringify(projects));
  assert.match(productText, /escena dramatica|campana informativa/);
  assert.match(productText, /exactitud cientifica|cientificamente correcto/);
  assert.match(productText, /lenguaje respetuoso|respeto/);
  assert.match(productText, /fuente confiable/);
  assert.doesNotMatch(productText, /reformatea|pasa el dialogo a formato/);

  const script = workshop.steps.find((step) => step.type === 'short-answer');
  assert.ok(script, 'Falta redactar el mensaje breve');
  const scriptProps = script.props as { minWords?: number; model?: string };
  const modelWords = (scriptProps.model ?? '').match(/[\p{L}\p{N}]+/gu)?.length ?? 0;
  assert.ok((scriptProps.minWords ?? 0) >= 18 && (scriptProps.minWords ?? 0) <= 24, 'El mensaje debe pedir entre 18 y 24 palabras');
  assert.ok(modelWords >= 18 && modelWords <= 24, `El modelo tiene ${modelWords} palabras`);

  const enactedDecision = projects.find((step) => step.areas.includes('fc')
    && /acuerd|negoci|decid.*junt|elijan.*junt/.test(normalizeFactText(JSON.stringify(step)))
    && /mensaje|rol/.test(normalizeFactText(JSON.stringify(step))));
  assert.ok(enactedDecision, 'FC debe vivirse al acordar un mensaje o rol compartido');
  const rehearsal = projects.find((step) => /ensay|lectura en voz alta|represent/.test(normalizeFactText(`${step.title ?? ''} ${step.prompt}`)));
  assert.ok(rehearsal, 'Falta un ensayo o lectura real del mensaje');
  const review = workshop.steps.find((step) => /revision|revis/i.test(`${step.title ?? ''} ${step.prompt}`));
  assert.ok(review, 'Falta revisión del producto');
  assert.match(normalizeFactText(JSON.stringify(review)), /exactitud cientifica/);
  assert.match(normalizeFactText(JSON.stringify(review)), /respeto/);
  const revision = workshop.steps.find((step) => /revision dirigida|correccion dirigida|mejora dirigida|corrige una/.test(normalizeFactText(JSON.stringify(step))));
  assert.ok(revision, 'Falta una revisión dirigida del producto');
  const artProjects = projects.filter((step) => step.areas.includes('art'));
  assert.ok(artProjects.length >= 1 && artProjects.length <= 2, `Arte interviene en ${artProjects.length} etapas`);
  const artText = normalizeFactText(JSON.stringify(artProjects));
  assert.match(artText, /fragmentos? instrumentales?|musica/);
  assert.match(artText, /caracter|intensidad|volumen/);
  assert.match(artText, /elige|escojan|seleccion/);
  assert.match(artText, /razon|porque/);
  assert.doesNotMatch(artText, /graba|edita|mezcla|compone|crea (?:una )?(?:musica|cancion)/);
  const artDecision = artProjects.find((step) => /elige|escojan|seleccion/.test(normalizeFactText(JSON.stringify(step))));
  assert.ok(artDecision, 'Falta decidir entre dos fragmentos con un criterio musical');
  const decisionText = normalizeFactText(JSON.stringify(artDecision));
  assert.match(decisionText, /fragmento a.{0,240}fragmento b|dos fragmentos/);
  const cueMedia = artDecision.media;
  assert.ok(cueMedia?.kind === 'audio' && Number(cueMedia.duration ?? 0) <= 15, 'La comparación debe usar un audio breve');
  const rehearsalWithCue = artProjects.find((step) => /ensay|lectura en voz alta/.test(normalizeFactText(`${step.title ?? ''} ${step.prompt}`))
    && /5 segundos|cinco segundos/.test(normalizeFactText(JSON.stringify(step))));
  assert.ok(rehearsalWithCue, 'El fragmento elegido debe sonar cinco segundos en el ensayo real');
  const artWorkItems = artProjects.reduce((total, step) => total
    + (((step.props as { steps?: unknown[] } | undefined)?.steps?.length) ?? 0), 0);
  assert.ok(artWorkItems <= 4, `Arte añade ${artWorkItems} operaciones internas`);
  assert.match(normalizeFactText(`${workshop.objetivos?.join(' ') ?? ''} ${workshop.resumen?.join(' ') ?? ''}`), /musica|fragmento instrumental/);
  assert.equal(workshop.steps.at(-1)?.type, 'reflection');
});

test('Semana 4 mantiene una carga estructurada razonable por lección', () => {
  const countItems = (value: unknown): number => {
    if (!value || typeof value !== 'object') return 0;
    if (Array.isArray(value)) return value.reduce((sum, item) => sum + countItems(item), 0);
    return Object.entries(value as Record<string, unknown>).reduce((sum, [key, item]) => {
      if (['options', 'items', 'pairs', 'statements', 'questions', 'reveal', 'cards', 'steps', 'rounds'].includes(key) && Array.isArray(item)) {
        return sum + item.length;
      }
      return sum;
    }, 0);
  };
  const failures: string[] = [];
  for (const lesson of weekFour.lessons.filter((item) => item.kind === 'materia')) {
    const nestedItems = lesson.steps.reduce((sum, step) => sum + countItems(step.props), 0);
    const serialized = JSON.stringify(lesson.steps.map((step) => ({ ...step, media: undefined })));
    const textWords = serialized.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+/g)?.length ?? 0;
    const mediaSeconds = [lesson.media, ...lesson.steps.map((step) => step.media)]
      .reduce((sum, media) => sum + Number(media?.duration ?? 0), 0);
    const manualActions = normalizeFactText(serialized)
      .match(/\b(?:dobla|enrolla|une|cierra|presiona|recorta|traza|lanza|pasa|ensaya|representa|escribe|dibuja|rotula)\b/g)?.length ?? 0;
    const complexity = lesson.steps.length + nestedItems / 4 + mediaSeconds / 60 + textWords / 600 + manualActions / 10;
    const complexityBudget = lesson.minutes * 2 - 2;
    const longResponse = lesson.steps.find((step) => step.type === 'short-answer'
      && Number((step.props as { minWords?: number }).minWords ?? 0) > lesson.minutes * 3);
    if (lesson.steps.length > 14 || nestedItems > lesson.minutes * 3 || complexity > complexityBudget || longResponse) {
      failures.push(`${lesson.id}: pantallas=${lesson.steps.length}, elementos=${nestedItems}, complejidad=${complexity.toFixed(2)}/${complexityBudget}, respuestaLarga=${Boolean(longResponse)}`);
    }
  }
  assert.deepEqual(failures, []);
});

test('Las lecciones CNT de pubertad y reproducción caben en quince minutos', () => {
  const lessons = weekFour.lessons.filter((item) => item.area === 'cnt'
    && item.minutes === 15
    && item.steps.some((step) => step.cnb.some((ref) => ['cnt:2.3.2', 'cnt:3.1.1', 'cnt:3.2.1'].includes(ref))));
  assert.equal(lessons.length, 2);
  const countItems = (value: unknown): number => {
    if (!value || typeof value !== 'object') return 0;
    if (Array.isArray(value)) return value.reduce((sum, item) => sum + countItems(item), 0);
    return Object.entries(value as Record<string, unknown>).reduce((sum, [key, item]) => (
      sum + (['options', 'items', 'pairs', 'statements', 'questions', 'reveal', 'cards', 'steps', 'rounds'].includes(key) && Array.isArray(item) ? item.length : 0)
    ), 0);
  };
  for (const lesson of lessons) {
    const nestedItems = lesson.steps.reduce((sum, step) => sum + countItems(step.props), 0);
    assert.ok(lesson.steps.length >= 9 && lesson.steps.length <= 11, `${lesson.id}: ${lesson.steps.length} pantallas`);
    assert.ok(nestedItems <= 34, `${lesson.id}: ${nestedItems} elementos simples`);
    const modelIndex = lesson.steps.findIndex((step) => step.type === 'worked-example');
    const firstGradedIndex = lesson.steps.findIndex((step) => getActivity(step.type)?.graded);
    assert.ok(modelIndex >= 0 && modelIndex < firstGradedIndex, `${lesson.id}: el modelo debe preceder la primera actividad calificada`);
    assert.ok(lesson.steps.some((step) => step.fase === 'construir' && getActivity(step.type)?.graded && step.hint), `${lesson.id}: falta guia con retroalimentacion`);
    assert.ok(lesson.steps.some((step) => step.fase === 'aplicar' && getActivity(step.type)?.graded && !step.hint), `${lesson.id}: falta transferencia independiente`);
    const exits = lesson.steps.filter((step) => step.fase === 'comprobar' && getActivity(step.type)?.graded);
    assert.equal(exits.length, 2, `${lesson.id}: necesita dos salidas`);
    assert.ok(exits.every((step) => !step.hint), `${lesson.id}: las salidas no deben tener pistas`);
  }
});

test('La lección CNT de cuidado cabe en 17 minutos sin perder modelado ni dos salidas', () => {
  const lesson = weekFour.lessons.find((item) => item.area === 'cnt'
    && item.steps.some((step) => step.cnb.includes('cnt:3.3.1')));
  assert.ok(lesson, 'Falta la lección cnt:3.3.1');
  assert.ok(lesson.steps.length >= 9 && lesson.steps.length <= 11, `Tiene ${lesson.steps.length} pantallas`);
  assert.ok(lesson.steps.some((step) => step.type === 'worked-example'), 'Falta el modelo explícito');
  assert.ok(lesson.steps.some((step) => step.fase === 'construir' && getActivity(step.type)?.graded && step.hint), 'Falta práctica guiada');
  assert.ok(lesson.steps.some((step) => step.fase === 'aplicar' && getActivity(step.type)?.graded && !step.hint), 'Falta transferencia independiente');
  assert.equal(lesson.steps.filter((step) => step.fase === 'comprobar' && getActivity(step.type)?.graded).length, 2);
  const responses = lesson.steps.filter((step) => step.type === 'short-answer');
  assert.ok(responses.every((step) => Number((step.props as { minWords?: number }).minWords ?? 0) <= 18));
  assert.match(normalizeFactText(JSON.stringify(lesson)), /intimidad|respeto/);
});

test('Educación Física limita la práctica a ocho lanzamientos o pases registrados', () => {
  const lessons = weekFour.lessons.filter((lesson) => lesson.area === 'ef');
  assert.ok(lessons.length > 0);
  for (const lesson of lessons) {
    const text = normalizeFactText(JSON.stringify(lesson));
    assert.ok(lesson.steps.length <= 11, `${lesson.id}: ${lesson.steps.length} pantallas`);
    assert.match(text, /8 (?:lanzamientos|pases).{0,30}(?:en total|totales)|(?:en total|total de) 8 (?:lanzamientos|pases)/);
    assert.match(text, /registro|anota|marcas|tanteo/);
    assert.match(text, /vuelta a la calma|enfriamiento/);
    assert.doesNotMatch(text, /10 (?:botes|rodados|pases|lanzamientos)|5 con cada mano/);
    assert.ok(!lesson.steps.some((step) => step.type === 'chart-builder'), `${lesson.id}: la gráfica no cabe en la práctica`);
  }
});

test('Semana 4 evalúa contenido enseñado en diez áreas con payloads frescos', () => {
  const subjectSteps = weekFour.lessons.filter((lesson) => lesson.kind === 'materia').flatMap((lesson) => lesson.steps);
  const taughtCnb = new Set(subjectSteps.flatMap((step) => step.cnb));
  const challenge = weekFour.lessons.find((lesson) => lesson.kind === 'reto');
  assert.ok(challenge, 'Semana 4 sin reto');
  const assessments = [...challenge.steps, ...weekFourBank].filter((step) => getActivity(step.type)?.graded);
  assert.ok(assessments.every((step) => !step.hint && !step.explain), 'Reto o banco contiene pistas');
  assert.ok(assessments.every((step) => step.cnb.every((ref) => taughtCnb.has(ref))), 'Reto o banco evalúa CNB no enseñado');
  const challengeAreas = new Set(challenge.steps.filter((step) => getActivity(step.type)?.graded).map((step) => step.areas[0]));
  const bankAreas = new Set(weekFourBank.filter((step) => getActivity(step.type)?.graded).map((step) => step.areas[0]));
  assert.deepEqual(challengeAreas, PRIMARY_AREAS);
  assert.deepEqual(bankAreas, PRIMARY_AREAS);

  const reused: string[] = [];
  for (const [source, steps] of [['reto', challenge.steps], ['banco', weekFourBank]] as const) {
    for (const assessment of steps.filter((step) => getActivity(step.type)?.graded)) {
      const repeatedLesson = subjectSteps.find((practice) => practice.areas[0] === assessment.areas[0]
        && repeatsStructuredFact(assessment, practice));
      if (repeatedLesson) reused.push(`${source}/${assessment.areas[0]} <= ${normalizeFactText(repeatedLesson.prompt)}`);
    }
  }
  const gradedChallenge = nestedGradedAssessments(challenge.steps);
  for (const assessment of weekFourBank.filter((step) => getActivity(step.type)?.graded)) {
    if (gradedChallenge.some((source) => source.areas[0] === assessment.areas[0]
      && repeatsStructuredFact(assessment, source))) {
      reused.push(`banco/${assessment.areas[0]}/estructura: ${normalizeFactText(assessment.prompt)}`);
    }
  }
  assert.deepEqual(reused, []);
});

test('Semana 4 usa iconos descriptivos para objetos concretos', () => {
  const failures: string[] = [];
  inspectConcreteIcon(weekFour, weekFour.id, failures);
  assert.deepEqual(failures, []);
});

test('Semana 5 preserva 27 lecciones, cobertura CNB y una idea central por leccion', () => {
  const expectedLessonCounts = new Map([
    ['mat', 5], ['l1', 5], ['cnt', 3], ['ccss', 3], ['l2', 2],
    ['l3', 2], ['fc', 2], ['art', 2], ['ef', 2], ['pyd', 1],
  ]);
  const expectedCnb = new Set([
    'mat:1.5.1', 'mat:1.5.2', 'mat:1.5.3', 'mat:2.1.1', 'mat:2.1.2',
    'l1:5.2.2', 'l1:7.1.2',
    'cnt:3.5.1', 'cnt:4.1.1', 'cnt:4.2.1',
    'ccss:5.1.4', 'ccss:5.3.1', 'ccss:6.2.1', 'ccss:6.3.1', 'ccss:6.3.5',
    'l2:1.2.2', 'l2:2.2.3', 'l2:2.2.5', 'l2:3.3.4', 'l3:2.2.3',
    'fc:3.2.1', 'fc:3.2.2', 'art:3.2.1',
    'ef:2.1.5', 'ef:2.1.9', 'ef:2.1.13', 'pyd:3.2.3', 'pyd:3.2.4',
  ]);
  const lessons = weekFive.lessons.filter((lesson) => lesson.kind === 'materia');
  const actualCounts = new Map<string, number>();
  const failures: string[] = [];
  for (const lesson of lessons) {
    const area = lesson.area;
    assert.ok(area, `${lesson.id} no declara area`);
    actualCounts.set(area, (actualCounts.get(area) ?? 0) + 1);
    if ((lesson.objetivos?.length ?? 0) !== 1) failures.push(`${lesson.id}: ${lesson.objetivos?.length ?? 0} objetivos`);
    if (lesson.steps.length < 9 || lesson.steps.length > 14) failures.push(`${lesson.id}: ${lesson.steps.length} pasos`);
  }
  assert.deepEqual(actualCounts, expectedLessonCounts);
  assert.deepEqual(new Set(lessons.flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb))), expectedCnb);
  assert.deepEqual(failures, []);
});

test('Semana 5 expresa un resultado central y lo sostiene desde la ensenanza hasta las salidas', () => {
  const actionVerbs = /(?:aplicar|calcular|cambiar|caracterizar|clasificar|combinar|comparar|completar|comunicar|construir|crear|describir|diferenciar|disenar|distinguir|elegir|ejecutar|escribir|evaluar|explicar|formar|identificar|organizar|ordenar|planificar|practicar|reconocer|registrar|relacionar|representar|resolver|seleccionar|seguir|transferir|ubicar|usar)/;
  const actionStems = new Set([...factTokens(actionVerbs.source)]);
  const failures: string[] = [];
  for (const lesson of weekFive.lessons.filter((item) => item.kind === 'materia')) {
    const rawObjective = (lesson.objetivos ?? []).join(' ');
    const objective = normalizeFactText(rawObjective);
    const compound = rawObjective.includes(';')
      || /(?:^|\s)[1-4][.)]\s/.test(rawObjective)
      || new RegExp(`(?:;|,|\\by\\b)\\s*${actionVerbs.source}\\b`).test(objective);
    if (compound) failures.push(`${lesson.id}: objetivo compuesto`);

    const concepts = new Set([...meaningfulCollisionTokens(objective)]
      .filter((token) => !actionStems.has(token) && token.length >= 4));
    const sharesConcept = (steps: typeof lesson.steps): boolean => {
      const tokens = meaningfulCollisionTokens(JSON.stringify(steps));
      return [...concepts].some((token) => tokens.has(token));
    };
    const teaching = lesson.steps.filter((step) => step.fase === 'construir' && INSTRUCTION_TYPES.has(step.type));
    const guided = lesson.steps.filter((step) => step.fase === 'construir' && getActivity(step.type)?.graded && step.hint);
    const transfer = lesson.steps.filter((step) => step.fase === 'aplicar' && getActivity(step.type)?.graded && !step.hint);
    const exits = lesson.steps.filter((step) => step.fase === 'comprobar' && getActivity(step.type)?.graded);
    const missingStages = [
      [concepts.size === 0, 'concepto'],
      [!sharesConcept(teaching), 'modelo'],
      [!sharesConcept(guided), 'guia'],
      [!sharesConcept(transfer), 'transferencia'],
      [exits.some((step) => !sharesConcept([step])), 'salidas'],
    ].filter(([missing]) => missing).map(([, stage]) => stage);
    if (missingStages.length > 0) failures.push(`${lesson.id}: falta ${missingStages.join(', ')}`);
  }
  assert.deepEqual(failures, []);
});

test('Semana 5 ensena y modela antes de calificar con fases monotonicas', () => {
  const phaseRank = new Map([
    ['explorar', 0], ['construir', 1], ['aplicar', 2], ['comprobar', 3], ['reflexionar', 4],
  ]);
  const failures: string[] = [];
  for (const lesson of weekFive.lessons.filter((item) => item.kind === 'materia')) {
    const firstInstruction = lesson.steps.findIndex((step) => INSTRUCTION_TYPES.has(step.type));
    const firstGraded = lesson.steps.findIndex((step) => getActivity(step.type)?.graded);
    if (firstInstruction < 0 || firstGraded < 0 || firstInstruction > firstGraded) {
      failures.push(`${lesson.id}: instruccion=${firstInstruction + 1}, calificada=${firstGraded + 1}`);
    }
    lesson.steps.forEach((step, index) => {
      if (step.fase === 'explorar' && getActivity(step.type)?.graded) failures.push(`${lesson.id}: explorar calificado`);
      if (index > 0 && (phaseRank.get(step.fase) ?? -1) < (phaseRank.get(lesson.steps[index - 1].fase) ?? -1)) {
        failures.push(`${lesson.id}: ${lesson.steps[index - 1].fase} -> ${step.fase}`);
      }
    });
  }
  assert.deepEqual(failures, []);
});

test('Semana 5 ofrece guia, transferencia independiente y dos salidas justas', () => {
  const failures: string[] = [];
  for (const lesson of weekFive.lessons.filter((item) => item.kind === 'materia')) {
    const guided = lesson.steps.some((step) => step.fase === 'construir'
      && Boolean(getActivity(step.type)?.graded) && Boolean(step.hint) && Boolean(step.explain));
    const transfer = lesson.steps.some((step) => step.fase === 'aplicar'
      && Boolean(getActivity(step.type)?.graded) && !step.hint);
    const exits = lesson.steps.filter((step) => step.fase === 'comprobar'
      && Boolean(getActivity(step.type)?.graded) && !step.hint && !step.explain);
    if (!guided || !transfer || exits.length < 2) {
      failures.push(`${lesson.id}: guia=${guided}, transferencia=${transfer}, salidas=${exits.length}`);
    }
  }
  assert.deepEqual(failures, []);
});

test('El presupuesto cuenta frotados y repeticiones cuantificadas aunque repitan frase', () => {
  assert.equal(quantifiedActionCount('Realiza 3 frotados preparados.'), 3);
  assert.equal(quantifiedActionCount('Haz 3 pases al caminar y luego 3 pases al trotar.'), 6);
});

test('Semana 5 mantiene una carga estructurada razonable por leccion', () => {
  const countItems = (value: unknown): number => {
    if (!value || typeof value !== 'object') return 0;
    if (Array.isArray(value)) return value.reduce((sum, item) => sum + countItems(item), 0);
    return Object.entries(value as Record<string, unknown>).reduce((sum, [key, item]) => {
      if (['options', 'items', 'pairs', 'statements', 'questions', 'reveal', 'cards', 'steps', 'rounds'].includes(key) && Array.isArray(item)) {
        return sum + item.length;
      }
      return sum;
    }, 0);
  };
  const failures: string[] = [];
  for (const lesson of weekFive.lessons.filter((item) => item.kind === 'materia')) {
    const nestedItems = lesson.steps.reduce((sum, step) => sum + countItems(step.props), 0);
    const serialized = JSON.stringify(lesson.steps.map((step) => ({ ...step, media: undefined })));
    const textWords = serialized.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+/g)?.length ?? 0;
    const mediaSeconds = [lesson.media, ...lesson.steps.map((step) => step.media)]
      .reduce((sum, media) => sum + Number(media?.duration ?? 0), 0);
    const manualActions = normalizeFactText(serialized)
      .match(/\b(?:dobla|enrolla|une|cierra|presiona|recorta|traza|lanza|pasa|ensaya|representa|escribe|dibuja|rotula)\b/g)?.length ?? 0;
    const activeText = normalizeFactText(JSON.stringify(lesson.steps.filter((step) => (
      step.fase === 'aplicar' || ['project-builder', 'pulse-lab'].includes(step.type)
    ))));
    const repetitions = quantifiedActionCount(activeText);
    const setupActions = activeText.match(/\b(?:buscar|recolectar|conseguir|recortar|triturar|preparar|mezclar|distribuir|montar)\b/g)?.length ?? 0;
    const wetProcesses = activeText.match(/\b(?:pegamento|cola|adhesivo humedo|pintura humeda|secar|secado)\b/g)?.length ?? 0;
    const collaboration = activeText.match(/\b(?:en parejas|en equipos|en grupos|companer[oa]|turnos?)\b/g)?.length ?? 0;
    const evidenceWriting = activeText.match(/\b(?:anota|anoten|registra|registren|escribe|escriban|documenta|documenten)\b/g)?.length ?? 0;
    const complexity = lesson.steps.length + nestedItems / 4 + mediaSeconds / 60 + textWords / 600 + manualActions / 10
      + repetitions / 10 + setupActions * 0.5 + wetProcesses * 1.5 + collaboration * 0.25 + evidenceWriting * 0.5;
    const complexityBudget = lesson.minutes * 2 - 2;
    const longResponse = lesson.steps.find((step) => step.type === 'short-answer'
      && Number((step.props as { minWords?: number }).minWords ?? 0) > lesson.minutes * 3);
    if (lesson.minutes < 10 || lesson.minutes > 15 || lesson.steps.length < 9 || lesson.steps.length > 14
      || nestedItems > lesson.minutes * 3 || complexity > complexityBudget || longResponse) {
      failures.push(`${lesson.id}: pantallas=${lesson.steps.length}, elementos=${nestedItems}, complejidad=${complexity.toFixed(2)}/${complexityBudget}, respuestaLarga=${Boolean(longResponse)}`);
    }
  }
  assert.deepEqual(failures, []);
});

test('Arte 1 realiza un ensayo breve de tres frotados con superficies preparadas', () => {
  const lesson = weekFive.lessons.find((item) => item.id === 's05-art-1');
  assert.ok(lesson, 'Falta s05-art-1');
  const objective = normalizeFactText((lesson.objetivos ?? []).join(' '));
  assert.doesNotMatch(objective, /;/);
  const application = normalizeFactText(JSON.stringify(lesson.steps.filter((step) => step.fase === 'aplicar')));
  assert.match(application, /superficies? preparadas?|muestras? preparadas?/);
  assert.match(application, /3 frotados|tres frotados/);
  assert.match(application, /comparacion|compara/);
  assert.match(application, /rotulo|rotula|etiqueta/);
  assert.doesNotMatch(application, /en casa|familia|buscar|recolectar|conseguir|camino a la escuela|6 frotados|seis frotados/);
  assert.equal(lesson.steps.filter((step) => step.fase === 'comprobar' && getActivity(step.type)?.graded).length, 2);
});

test('EF 1 usa una practica bilateral breve y un circuito cooperativo sin partido', () => {
  const lesson = weekFive.lessons.find((item) => item.id === 's05-ef-1');
  assert.ok(lesson, 'Falta s05-ef-1');
  const objective = normalizeFactText((lesson.objetivos ?? []).join(' '));
  assert.doesNotMatch(objective, /;/);
  const practice = lesson.steps.find((step) => step.type === 'pulse-lab');
  assert.ok(practice, 'Falta practica motriz breve');
  const text = normalizeFactText(JSON.stringify(practice));
  assert.match(text, /calentamiento|movilidad/);
  assert.match(text, /bilateral|ambos lados/);
  assert.match(text, /caminando|caminata/);
  assert.match(text, /trotando|trote/);
  assert.match(text, /circuito cooperativo|recorrido cooperativo/);
  assert.match(text, /vuelta a la calma|enfriamiento/);
  assert.match(text, /\b[2-6] pases\b/);
  assert.doesNotMatch(text, /10 pases|diez pases|partido|competencia|dos equipos|intercept/);
  assert.equal(lesson.steps.filter((step) => step.fase === 'comprobar' && getActivity(step.type)?.graded).length, 2);
});

test('Arte 2 usa un kit reutilizable de tres texturas y una discriminacion tactil breve', () => {
  const lesson = weekFive.lessons.find((item) => item.id === 's05-art-2');
  assert.ok(lesson, 'Falta s05-art-2');
  const text = normalizeFactText(JSON.stringify(lesson));
  assert.match(text, /muestras? (?:tactiles )?(?:preparadas?|reutilizables?)|muestrario reutilizable/);
  assert.match(text, /gancho y felpa|cierre removible|sujetador removible/);
  assert.match(text, /3 texturas|tres texturas/);
  assert.match(text, /lisa/);
  assert.match(text, /corrugada|acanalada/);
  assert.match(text, /rugos[oa]/);
  assert.match(text, /clave (?:breve|concisa)|leyenda (?:breve|concisa)/);
  assert.match(text, /discriminar|distinguir.{0,50}tacto|comparacion tactil/);
  assert.doesNotMatch(text, /buscar|recolectar|conseguir materiales|arena pegada|hojas secas|algodon|pegamento|cola|adhesivo humedo|secar|secado/);
  assert.doesNotMatch(text, /4 a 6 texturas|cuatro texturas|cinco texturas|prueba.{0,50}pares|consulta especializada pendiente/);
  assert.equal(lesson.steps.filter((step) => step.fase === 'comprobar' && getActivity(step.type)?.graded).length, 2);
});

test('EF 2 practica seis secuencias integradas con ambos lados y las tres finalizaciones', () => {
  const lesson = weekFive.lessons.find((item) => item.id === 's05-ef-2');
  assert.ok(lesson, 'Falta s05-ef-2');
  const text = normalizeFactText(JSON.stringify(lesson));
  assert.match(text, /6 secuencias|seis secuencias/);
  assert.match(text, /3 pases con (?:la )?izquierda.{0,50}3 con (?:la )?derecha|3 por cada mano/);
  assert.match(text, /directa/);
  assert.match(text, /suspension/);
  assert.match(text, /pique/);
  assert.match(text, /registro|tanteo|marcas/);
  assert.doesNotMatch(text, /6 pases.{0,160}3 finalizaciones|10 pases|5 con cada mano|5 veces directo|5 en suspension|5 con pique|3 contra 3|minipartido|partido corto/);
  assert.equal(lesson.steps.filter((step) => step.fase === 'comprobar' && getActivity(step.type)?.graded).length, 2);
});

test('EF 2 ensena y evalua la secuencia reglada de avance, pase y finalizacion', () => {
  const lesson = weekFive.lessons.find((item) => item.id === 's05-ef-2');
  assert.ok(lesson, 'Falta s05-ef-2');
  const objective = normalizeFactText((lesson.objetivos ?? []).join(' '));
  assert.match(objective, /secuencia/);
  assert.match(objective, /avance/);
  assert.match(objective, /pase/);
  assert.match(objective, /finalizacion/);

  const firstScored = lesson.steps.findIndex((step) => getActivity(step.type)?.graded && step.cnb.includes('ef:2.1.13'));
  assert.ok(firstScored > 0, 'Falta una actividad calificada para ef:2.1.13');
  const taught = normalizeFactText(JSON.stringify(lesson.steps.slice(0, firstScored)));
  assert.match(taught, /(?:maximo de )?3 pasos.{0,80}(?:bote|botar|drible)|(?:bote|botar|drible).{0,80}(?:maximo de )?3 pasos/);
  assert.match(taught, /directa/);
  assert.match(taught, /suspension|salto/);
  assert.match(taught, /(?:con )?pique|bota una vez/);

  const model = lesson.steps.find((step) => step.type === 'worked-example' && step.cnb.includes('ef:2.1.13'));
  assert.ok(model, 'Falta modelado integrado bajo ef:2.1.13');
  const modelText = normalizeFactText(JSON.stringify(model));
  assert.match(modelText, /3 pasos/);
  assert.match(modelText, /bote|botar|drible/);
  assert.match(modelText, /pase/);
  assert.match(modelText, /finalizacion|meta|gol/);

  const practice = lesson.steps.find((step) => step.type === 'pulse-lab' && step.cnb.includes('ef:2.1.13'));
  assert.ok(practice, 'Falta practica breve de la secuencia completa');
  const practiceText = normalizeFactText(JSON.stringify(practice));
  assert.match(practiceText, /6 secuencias|seis secuencias/);
  assert.match(practiceText, /3 pasos.{0,80}(?:bote|botar)|(?:bote|botar).{0,80}3 pasos/);
  assert.match(practiceText, /izquierda/);
  assert.match(practiceText, /derecha/);
  assert.match(practiceText, /directa/);
  assert.match(practiceText, /suspension/);
  assert.match(practiceText, /pique/);
  assert.doesNotMatch(practiceText, /6 pases.{0,160}3 finalizaciones|10 pases|partido/);

  const transfer = lesson.steps.find((step) => step.fase === 'aplicar'
    && getActivity(step.type)?.graded && step.cnb.includes('ef:2.1.13') && !step.hint);
  assert.ok(transfer, 'Falta transferencia independiente de ef:2.1.13');
  assert.match(normalizeFactText(JSON.stringify(transfer)), /3 pasos|bote|directa|suspension|pique/);
  const exit = lesson.steps.find((step) => step.fase === 'comprobar'
    && getActivity(step.type)?.graded && step.cnb.includes('ef:2.1.13') && !step.hint && !step.explain);
  assert.ok(exit, 'Falta salida sin pistas para ef:2.1.13');
  assert.match(normalizeFactText(JSON.stringify(exit)), /3 pasos/);
  assert.match(normalizeFactText(JSON.stringify(exit)), /bote|botar|drible/);
  assert.match(normalizeFactText(JSON.stringify(exit)), /finalizacion|directa|suspension|pique/);
});

test('CCSS 1 valora la investigacion para responder preocupaciones colectivas', () => {
  const lesson = weekFive.lessons.find((item) => item.id === 's05-ccss-1');
  assert.ok(lesson, 'Falta s05-ccss-1');
  const objective = normalizeFactText((lesson.objetivos ?? []).join(' '));
  assert.match(objective, /seleccionar/);
  assert.match(objective, /justificar/);
  assert.match(objective, /tecnica|herramienta/);
  assert.match(objective, /preocupacion colectiva|problema colectivo/);

  const tagged = lesson.steps.filter((step) => step.cnb.includes('ccss:5.1.4'));
  assert.ok(tagged.length >= 4, 'ccss:5.1.4 debe recorrer ensenanza y evaluacion');
  const text = normalizeFactText(JSON.stringify(tagged));
  assert.match(text, /preocupacion|problema|necesidad/);
  assert.match(text, /comunitaria|comunidad|colectiva/);
  assert.match(text, /nacional|pais/);
  assert.match(text, /evidencia|datos/);
  assert.match(text, /decision|decidir|propuesta/);

  const model = tagged.find((step) => step.type === 'worked-example');
  const guided = tagged.find((step) => step.fase === 'construir'
    && getActivity(step.type)?.graded && step.hint && step.explain);
  const transfer = tagged.find((step) => step.fase === 'aplicar'
    && getActivity(step.type)?.graded && !step.hint);
  const exit = tagged.find((step) => step.fase === 'comprobar'
    && getActivity(step.type)?.graded && !step.hint && !step.explain);
  assert.ok(model, 'Falta modelo de como la investigacion responde una preocupacion');
  assert.ok(guided, 'Falta juicio guiado sobre el valor de la investigacion');
  assert.ok(transfer, 'Falta aplicacion independiente de ccss:5.1.4');
  assert.ok(exit, 'Falta salida sin pistas de ccss:5.1.4');
  assert.match(normalizeFactText(JSON.stringify(exit)), /evidencia|datos/);
  assert.match(normalizeFactText(JSON.stringify(exit)), /decision|preocupacion|problema/);
});

test('Productividad ensena el rodillo y el taller lo usa con evidencia de tecnica segura', () => {
  const lesson = weekFive.lessons.find((item) => item.id === 's05-pyd-1');
  const workshop = weekFive.lessons.find((item) => item.id === 's05-d5-taller');
  assert.ok(lesson && workshop, 'Falta Productividad o taller');
  const lessonText = normalizeFactText(JSON.stringify(lesson));
  assert.match(lessonText, /rodillo manual|brayer/);
  assert.match(lessonText, /rueda y eje/);
  assert.match(lessonText, /superficie estable|mesa estable/);
  assert.match(lessonText, /dedos.{0,40}fuera (?:del|de la) (?:recorrido|trayectoria|paso)/);
  assert.match(lessonText, /presion controlada|presionar sin exceso/);
  assert.match(lessonText, /revisar.{0,60}(?:rodillo|mango|eje)/);
  assert.match(lessonText, /detener|no usar.{0,40}(?:dano|danado|flojo|trabado)/);
  const taughtIndex = lesson.steps.findIndex((step) => /rodillo manual|brayer/.test(normalizeFactText(JSON.stringify(step)))
    && INSTRUCTION_TYPES.has(step.type));
  const appliedIndex = lesson.steps.findIndex((step) => /rodillo manual|brayer/.test(normalizeFactText(JSON.stringify(step)))
    && step.fase === 'aplicar');
  assert.ok(taughtIndex >= 0 && appliedIndex > taughtIndex, 'El rodillo debe ensenarse antes de aplicarse');

  const productUse = workshop.steps.find((step) => step.type === 'project'
    && step.areas.includes('pyd')
    && /rodillo manual|brayer/.test(normalizeFactText(JSON.stringify(step))));
  assert.ok(productUse, 'El taller no usa el rodillo en el producto');
  const useText = normalizeFactText(JSON.stringify(productUse));
  assert.match(useText, /presionar.{0,80}(?:tiras|cierres|texturas|ruta)/);
  assert.match(useText, /dedos.{0,40}fuera/);
  assert.match(useText, /evidencia|lista|verificar|comprobar/);
  assert.match(normalizeFactText(JSON.stringify(workshop.media)), /rodillo manual|brayer/);
  assert.ok(workshop.minutes >= 18 && workshop.minutes <= 20);
});

test('Semana 5 evita presentar una preferencia como necesidad universal de personas ciegas', () => {
  const text = normalizeFactText(JSON.stringify(weekFive));
  assert.doesNotMatch(text, /(?:una persona ciega|las personas ciegas) (?:necesita|necesitan|usa|usan|prefiere|prefieren|lee|leen)/);
  assert.match(text, /algunas personas ciegas pueden (?:preferir|usar)|personas ciegas pueden elegir/);
  assert.match(text, /formatos|apoyos|estrategias/);
});

test('Semana 5 distingue prueba entre pares de consulta especializada pendiente', () => {
  const workshop = weekFive.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 5 sin taller');
  const text = normalizeFactText(JSON.stringify(workshop));
  assert.match(text, /criterios publicados|caso ficticio|brief ficticio/);
  assert.match(text, /prueba.{0,80}pares?.{0,80}ojos abiertos|pares?.{0,80}ojos abiertos.{0,80}prueba/);
  assert.match(text, /claridad|usabilidad/);
  assert.match(text, /retroalimentacion|comentario|observacion/);
  assert.match(text, /consulta especializada pendiente/);
  assert.match(text, /proximo paso|siguiente paso|solicitar.{0,80}(?:consulta|revision)/);
  assert.doesNotMatch(text, /observaciones? (?:recogidas?|documentadas?) con consentimiento/);
  assert.doesNotMatch(text, /persona consultada pidio|usuaria (?:ciega )?pidio|prueba previa autorizada/);
  assert.doesNotMatch(text, /(?:cerrar|cubrir|vendar).{0,50}ojos|simular.{0,50}(?:ceguera|discapacidad)/);
});

test('Semana 5 no fabrica evidencia local de consulta o prueba', () => {
  const allowed = weekFive.lessons.filter((lesson) => lesson.kind === 'materia' && ['art', 'fc'].includes(lesson.area ?? ''));
  const text = normalizeFactText(JSON.stringify([weekFive.contexto, weekFive.media, ...allowed]));
  assert.doesNotMatch(text, /observaciones? (?:recogidas?|documentadas?) con consentimiento/);
  assert.doesNotMatch(text, /persona consultada pidio|usuaria (?:ciega )?pidio|prueba previa autorizada/);
  assert.match(text, /consulta especializada pendiente/);
});

test('Semana 5 evalua semanticamente el pase con salto por arriba del hombro', () => {
  const challenge = weekFive.lessons.find((lesson) => lesson.kind === 'reto');
  assert.ok(challenge, 'Semana 5 sin reto');
  const challengeEf = challenge.steps.find((step) => step.areas.includes('ef'));
  const bankEf = weekFiveBank.find((step) => step.areas.includes('ef'));
  assert.ok(challengeEf && bankEf, 'Faltan evaluaciones EF en reto o banco');
  for (const [source, step] of [['reto', challengeEf], ['banco', bankEf]] as const) {
    const text = normalizeFactText(JSON.stringify(step));
    assert.notEqual(step.type, 'number-input', `${source}: no debe evaluar aritmetica`);
    assert.notEqual(step.type, 'order', `${source}: no debe evaluar una lista memorizada`);
    assert.notEqual(step.type, 'match', `${source}: no debe evaluar rotulos`);
    assert.ok(step.cnb.includes('ef:2.1.9'), `${source}: falta ef:2.1.9`);
    assert.match(text, /por arriba del hombro/);
    assert.match(text, /salto|saltar/);
    assert.match(text, /fotogramas?|secuencia observada|video (?:nuevo|sin narracion)|ejecucion observada/);
    assert.match(text, /error|falla|ajuste/);
    assert.match(text, /corregir|correccion|debe (?:soltar|impulsarse|saltar)/);
    assert.ok(!step.hint && !step.explain, `${source}: la evaluacion debe ir sin pistas`);
  }
  const challengeText = normalizeFactText(JSON.stringify(challengeEf));
  const bankText = normalizeFactText(JSON.stringify(bankEf));
  assert.match(challengeText, /derecha/);
  assert.match(challengeText, /altura alta|pase alto|por encima/);
  assert.match(challengeText, /despues de (?:caer|aterrizar)|suelo antes de soltar/);
  assert.match(challengeText, /punto mas alto|fase aerea/);
  assert.match(bankText, /izquierda/);
  assert.match(bankText, /altura media|pase medio|al pecho/);
  assert.match(bankText, /mismo pie|pie izquierdo.{0,50}mano izquierda/);
  assert.match(bankText, /pie contrario|pie derecho/);
  assert.ok(!repeatsStructuredFact(challengeEf, bankEf), 'Reto y banco EF reutilizan la misma respuesta');
});

test('Semana 5 usa simbolos tactiles y no imita braille', () => {
  const relevant = weekFive.lessons.filter((lesson) => lesson.kind === 'taller' || lesson.area === 'art');
  const text = normalizeFactText(JSON.stringify(relevant));
  assert.doesNotMatch(text, /puntos? en relieve.{0,30}(?:simul|imit).{0,20}braille|braille (?:falso|simulado|inventado)/);
  assert.match(text, /simbolos tactiles (?:no braille|que no son braille)|texturas no braille/);
  assert.match(text, /no (?:se debe )?(?:imitar|inventar|copiar).{0,50}braille|braille.{0,50}(?:transcripcion profesional|validado)/,
    'Falta advertencia de integridad Braille');
});

test('Semana 5 aborda accesibilidad con consulta, prueba y limites honestos', () => {
  assert.equal(weekFive.title, 'Una escuela que todas las personas pueden recorrer');
  assert.equal(weekFive.temaGenerador, 'Una escuela que todas las personas pueden recorrer');
  const text = normalizeFactText(JSON.stringify(weekFive));
  assert.match(text, /coordenadas|pares ordenados/);
  assert.match(text, /participa/);
  assert.match(text, /textura/);
  assert.match(text, /accesibilidad|accesible/);
  assert.match(text, /herramientas?.{0,50}segur|segur.{0,50}herramientas?/);
  assert.match(text, /consulta especializada pendiente/);
  assert.match(text, /prueba.{0,100}pares?.{0,80}ojos abiertos|pares?.{0,80}ojos abiertos.{0,100}prueba/);
  assert.match(text, /no (?:elimina|resuelve|garantiza).{0,120}(?:todas las barreras|accesibilidad universal|acceso para todas)/);
  assert.match(text, /barreras (?:fisicas|de comunicacion|sensoriales|actitudinales)/);
  assert.doesNotMatch(text, /simula(?:r|mos)?.{0,80}(?:ceguera|discapacidad)|vend(?:a|ar).{0,50}(?:ojos|vista)/);
  assert.doesNotMatch(text, /hablamos por|en nombre de las personas con discapacidad/);
});

test('Semana 5 aplica cuatro prerrequisitos en un mapa tactil viable y comprobable', () => {
  const workshop = weekFive.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 5 sin taller');
  assert.equal(workshop.title, 'Mapa táctil para toda la escuela');
  assert.ok(workshop.minutes <= 20, `Taller declara ${workshop.minutes} minutos`);
  assert.ok(workshop.steps.length >= 10 && workshop.steps.length <= 14, `Taller tiene ${workshop.steps.length} pasos`);
  const minuteLabels = workshop.steps.map((step) => {
    const match = `${step.title ?? ''} ${step.prompt}`.match(/(?:^|\D)(\d+)\s*min(?:uto)?s?/i);
    return match ? Number(match[1]) : 0;
  });
  assert.ok(minuteLabels.every((minutes) => minutes > 0), 'Cada paso del taller debe declarar su tiempo');
  assert.ok(minuteLabels.reduce((sum, minutes) => sum + minutes, 0) <= workshop.minutes, 'La agenda excede el tiempo del taller');

  const contributors = new Set(workshop.steps
    .filter((step) => step.fase === 'construir' || step.fase === 'aplicar')
    .flatMap((step) => step.areas));
  assert.deepEqual(contributors, new Set(['mat', 'art', 'fc', 'pyd']));
  const workshopIndex = weekFive.lessons.indexOf(workshop);
  const priorCnb = new Set(weekFive.lessons.slice(0, workshopIndex)
    .filter((lesson) => lesson.kind === 'materia')
    .flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb)));
  assert.ok(workshop.steps.every((step) => step.cnb.every((ref) => priorCnb.has(ref))), 'El taller introduce CNB no ensenado');

  const text = normalizeFactText(JSON.stringify(workshop));
  assert.match(text, /plano tactil|mapa tactil/);
  assert.match(text, /coordenadas|pares ordenados/);
  assert.match(text, /leyenda|clave/);
  assert.match(text, /ruta accesible/);
  assert.match(text, /texturas?.{0,80}(?:distintas|contraste)|contraste.{0,80}texturas?/);
  assert.match(text, /prueba.{0,100}pares?.{0,80}ojos abiertos|pares?.{0,80}ojos abiertos.{0,100}prueba/);
  assert.match(text, /consulta especializada pendiente/);
  assert.match(text, /corrige|revision|revisa|mejora/);
  assert.equal(workshop.steps.at(-1)?.type, 'reflection');

  const projects = workshop.steps.filter((step) => step.type === 'project');
  assert.ok(projects.length >= 3, 'El producto debe construirse, probarse y revisarse');
  const firstProject = workshop.steps.findIndex((step) => step.type === 'project');
  assert.ok(firstProject >= 0 && firstProject <= 3, 'El taller debe empezar a producir pronto');
  assert.ok(workshop.steps.slice(0, firstProject).every((step) => !getActivity(step.type)?.graded), 'No debe haber examen antes del producto');
  assert.ok(workshop.steps.slice(firstProject, -1).length >= 7, 'La mayoria del taller debe dedicarse al producto');
});

test('El taller conserva una sola correspondencia entre clave, lugares y ruta tactil', () => {
  const workshop = weekFive.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 5 sin taller');
  const alignment = workshop.steps.find((step) => step.type === 'match'
    && /destino/.test(normalizeFactText(JSON.stringify(step))));
  assert.ok(alignment, 'Falta la correspondencia estructurada de destinos');
  const pairs = (alignment.props as { pairs?: Array<{ left?: string; right?: string }> }).pairs ?? [];
  const assignments = new Map(pairs.map((pair) => [normalizeFactText(pair.left), normalizeFactText(pair.right)]));
  assert.match(assignments.get('aula') ?? '', /eva lisa/);
  assert.match(assignments.get('direccion') ?? '', /corcho rugoso/);
  assert.match(assignments.get('banos') ?? '', /corcho rugoso/);
  assert.match(assignments.get('bebedero') ?? '', /corcho rugoso/);

  const key = workshop.steps.find((step) => step.type === 'project'
    && /(?:leyenda|clave)/.test(normalizeFactText(JSON.stringify(step))));
  assert.ok(key, 'Falta la clave tactil del producto');
  const keyText = normalizeFactText(JSON.stringify(key));
  assert.match(keyText, /eva lisa.{0,50}(?:aprendizaje|aula)/);
  assert.match(keyText, /corcho rugoso.{0,50}(?:servicios|direccion|banos|bebedero)/);
  assert.match(keyText, /plastico corrugado.{0,50}(?:circulacion|ruta|corredor)/);

  const route = workshop.steps.find((step) => step.type === 'project'
    && step.areas.includes('pyd')
    && /ruta/.test(normalizeFactText(JSON.stringify(step))));
  assert.ok(route, 'Falta la construccion de la ruta');
  const routeText = normalizeFactText(JSON.stringify(route));
  assert.match(routeText, /plastico corrugado/);
  assert.match(routeText, /ruta|circulacion/);
  const revision = normalizeFactText(JSON.stringify(workshop.steps.find((step) => (
    step.type === 'project' && /revision/.test(normalizeFactText(`${step.title} ${step.prompt}`))
  ))));
  assert.match(revision, /eva|corcho|corrugado/);
  assert.match(revision, /clave.{0,80}(?:lugares|destinos|ruta)|(?:lugares|destinos|ruta).{0,80}clave/);
});

test('Semana 5 declara un kit tactil durable con preparacion docente realista', () => {
  const workshop = weekFive.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 5 sin taller');
  const mediaText = normalizeFactText(JSON.stringify([workshop.media, ...workshop.steps.map((step) => step.media)]));
  assert.match(mediaText, /reutilizable|durable|lavable/);
  assert.match(mediaText, /preparad[oa]|precortad[oa]|pre cortad[oa]/);
  assert.match(mediaText, /(?:maximo|menos de|en) 2 minutos|dos minutos/);
  assert.match(mediaText, /reemplazo|alternativa/);
  assert.doesNotMatch(mediaText, /docente.{0,80}(?:recorta|corta|pega).{0,80}(?:cada clase|cada sesion)/);
});

test('Semana 5 evalua diez areas con contenido ensenado y payloads frescos', () => {
  const subjectSteps = weekFive.lessons.filter((lesson) => lesson.kind === 'materia').flatMap((lesson) => lesson.steps);
  const taughtCnb = new Set(subjectSteps.flatMap((step) => step.cnb));
  const challenge = weekFive.lessons.find((lesson) => lesson.kind === 'reto');
  assert.ok(challenge, 'Semana 5 sin reto');
  const assessments = [...challenge.steps, ...weekFiveBank].filter((step) => getActivity(step.type)?.graded);
  assert.ok(assessments.every((step) => !step.hint && !step.explain), 'Reto o banco contiene pistas');
  assert.ok(assessments.every((step) => step.cnb.every((ref) => taughtCnb.has(ref))), 'Reto o banco evalua CNB no ensenado');
  const challengeAreas = new Set(challenge.steps.filter((step) => getActivity(step.type)?.graded).map((step) => step.areas[0]));
  const bankAreas = new Set(weekFiveBank.filter((step) => getActivity(step.type)?.graded).map((step) => step.areas[0]));
  assert.deepEqual(challengeAreas, PRIMARY_AREAS);
  assert.deepEqual(bankAreas, PRIMARY_AREAS);

  const reused: string[] = [];
  for (const [source, steps] of [['reto', challenge.steps], ['banco', weekFiveBank]] as const) {
    for (const assessment of steps.filter((step) => getActivity(step.type)?.graded)) {
      const repeatedLesson = subjectSteps.find((practice) => practice.areas[0] === assessment.areas[0]
        && repeatsStructuredFact(assessment, practice));
      if (repeatedLesson) reused.push(`${source}/${assessment.areas[0]} <= ${normalizeFactText(repeatedLesson.prompt)}`);
    }
  }
  const gradedChallenge = nestedGradedAssessments(challenge.steps);
  for (const assessment of weekFiveBank.filter((step) => getActivity(step.type)?.graded)) {
    if (gradedChallenge.some((source) => source.areas[0] === assessment.areas[0]
      && repeatsStructuredFact(assessment, source))) {
      reused.push(`banco/${assessment.areas[0]}/estructura: ${normalizeFactText(assessment.prompt)}`);
    }
  }
  assert.deepEqual(reused, []);
});

test('Semana 5 usa iconos descriptivos para objetos concretos', () => {
  const failures: string[] = [];
  inspectConcreteIcon(weekFive, weekFive.id, failures);
  assert.deepEqual(failures, []);
});

test('Semana 6 preserva 27 lecciones, cobertura CNB y un resultado central por leccion', () => {
  const expectedLessonCounts = new Map([
    ['mat', 5], ['l1', 5], ['cnt', 3], ['ccss', 3], ['l2', 2],
    ['l3', 2], ['fc', 2], ['art', 2], ['ef', 2], ['pyd', 1],
  ]);
  const expectedCnb = new Set([
    'art:3.2.4',
    'ccss:6.4.4', 'ccss:6.5.1', 'ccss:6.5.5', 'ccss:6.5.6',
    'cnt:5.1.1', 'cnt:5.2.1', 'cnt:5.3.1',
    'ef:2.1.17', 'ef:2.2.4', 'ef:3.1.2', 'ef:3.1.6',
    'fc:4.2.1',
    'l1:4.2.1', 'l1:7.1.2', 'l1:7.2.6', 'l1:8.2.1',
    'l2:4.1.1', 'l2:4.1.2', 'l3:3.3.1',
    'mat:1.5.2', 'mat:1.5.3', 'mat:3.1.1', 'mat:3.2.1', 'mat:3.2.2', 'mat:3.2.3',
    'pyd:4.1.1', 'pyd:4.3.1',
  ]);
  const lessons = weekSix.lessons.filter((lesson) => lesson.kind === 'materia');
  const actualCounts = new Map<string, number>();
  const failures: string[] = [];
  for (const lesson of lessons) {
    const area = lesson.area;
    assert.ok(area, `${lesson.id} no declara area`);
    actualCounts.set(area, (actualCounts.get(area) ?? 0) + 1);
    if ((lesson.objetivos?.length ?? 0) !== 1) failures.push(`${lesson.id}: ${lesson.objetivos?.length ?? 0} objetivos`);
    if (lesson.steps.length < 9 || lesson.steps.length > 14) failures.push(`${lesson.id}: ${lesson.steps.length} pasos`);
  }
  assert.deepEqual(actualCounts, expectedLessonCounts);
  assert.deepEqual(new Set(lessons.flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb))), expectedCnb);
  assert.deepEqual(failures, []);
});

test('Semana 6 declara lecciones autoradas sin preparedLesson ni modelos genericos', () => {
  const areas = ['art', 'ccss', 'cnt', 'ef', 'fc', 'l1', 'l2', 'l3', 'mat', 'pyd'];
  for (const area of areas) {
    const source = readFileSync(`src/content/sexto/materias/${area}/u1/s06.ts`, 'utf8');
    assert.doesNotMatch(source, /preparedLesson|compactConstruct|firstIdea|secondIdea/,
      `${area}/s06 conserva el selector generico`);
  }
  for (const lesson of weekSix.lessons.filter((item) => item.kind === 'materia')) {
    const generic = lesson.steps.filter((step) => /activa lo que sabes|enfoque y modelo|criterio central/i
      .test(`${step.title ?? ''} ${step.prompt} ${JSON.stringify(step.props)}`));
    assert.deepEqual(generic, [], `${lesson.id} conserva pasos generados`);
  }
});

test('Semana 6 sostiene el resultado central en modelo, guia, transferencia y salidas', () => {
  const actionVerbs = /(?:aplicar|calcular|caracterizar|clasificar|combinar|comparar|completar|comunicar|construir|crear|describir|diferenciar|disenar|distinguir|elegir|ejecutar|escribir|evaluar|explicar|formar|identificar|organizar|ordenar|planificar|practicar|reconocer|registrar|relacionar|representar|resolver|seleccionar|seguir|transferir|ubicar|usar)/;
  const actionStems = new Set([...factTokens(actionVerbs.source)]);
  const failures: string[] = [];
  for (const lesson of weekSix.lessons.filter((item) => item.kind === 'materia')) {
    const rawObjective = (lesson.objetivos ?? []).join(' ');
    const objective = normalizeFactText(rawObjective);
    const compound = rawObjective.includes(';')
      || /(?:^|\s)[1-4][.)]\s/.test(rawObjective)
      || new RegExp(`(?:;|,|\\by\\b)\\s*${actionVerbs.source}\\b`).test(objective);
    if (compound) failures.push(`${lesson.id}: objetivo compuesto`);
    const concepts = new Set([...meaningfulCollisionTokens(objective)]
      .filter((token) => !actionStems.has(token) && token.length >= 4));
    const matchingConcepts = (steps: typeof lesson.steps): Set<string> => {
      const tokens = meaningfulCollisionTokens(JSON.stringify(steps));
      return new Set([...concepts].filter((token) => tokens.has(token)));
    };
    const sharesConcept = (steps: typeof lesson.steps): boolean => {
      const required = Math.min(2, concepts.size);
      return matchingConcepts(steps).size >= required;
    };
    const sharesAnyConcept = (steps: typeof lesson.steps): boolean => matchingConcepts(steps).size >= 1;
    const teaching = lesson.steps.filter((step) => step.fase === 'construir' && INSTRUCTION_TYPES.has(step.type));
    const guided = lesson.steps.filter((step) => step.fase === 'construir' && getActivity(step.type)?.graded && step.hint && step.explain);
    const transfer = lesson.steps.filter((step) => step.fase === 'aplicar' && getActivity(step.type)?.graded && !step.hint);
    const exits = lesson.steps.filter((step) => step.fase === 'comprobar' && getActivity(step.type)?.graded);
    const outcomeBreadth = sharesConcept([...teaching, ...guided, ...transfer, ...exits]);
    const exitPairSharesOutcome = exits.every((step) => sharesAnyConcept([step]));
    const missingStages = [
      [concepts.size === 0 || !outcomeBreadth, 'concepto'], [!sharesAnyConcept(teaching), 'modelo'], [!sharesAnyConcept(guided), 'guia'],
      [!sharesAnyConcept(transfer), 'transferencia'], [exits.length < 2 || !exitPairSharesOutcome, 'salidas'],
    ].filter(([missing]) => missing).map(([, stage]) => stage);
    if (missingStages.length > 0) failures.push(`${lesson.id}: falta ${missingStages.join(', ')}`);
  }
  assert.deepEqual(failures, []);
});

test('Semana 6 ensena diferencia simetrica antes de guia, transferencia y salidas', () => {
  const lesson = weekSix.lessons.find((item) => item.id === 's06-mat-4');
  assert.ok(lesson, 'Falta s06-mat-4');
  const mentionsSymmetricDifference = (step: typeof lesson.steps[number]) => (
    /diferencia simetrica|a delta b|a Δ b/.test(normalizeFactText(JSON.stringify(step)))
  );
  const teaching = lesson.steps.findIndex((step) => step.fase === 'construir'
    && INSTRUCTION_TYPES.has(step.type) && mentionsSymmetricDifference(step));
  const model = lesson.steps.findIndex((step) => step.fase === 'construir'
    && step.type === 'worked-example' && mentionsSymmetricDifference(step));
  const guide = lesson.steps.findIndex((step) => step.fase === 'construir'
    && Boolean(getActivity(step.type)?.graded) && step.hint && step.explain && mentionsSymmetricDifference(step));
  const transfer = lesson.steps.findIndex((step) => step.fase === 'aplicar'
    && Boolean(getActivity(step.type)?.graded) && mentionsSymmetricDifference(step));
  const exits = lesson.steps
    .map((step, index) => ({ step, index }))
    .filter(({ step }) => step.fase === 'comprobar' && mentionsSymmetricDifference(step));
  assert.ok(teaching >= 0 && model > teaching && guide > model && transfer > guide,
    `orden simetrico: ensenanza=${teaching}, modelo=${model}, guia=${guide}, transferencia=${transfer}`);
  assert.ok(exits.length >= 1 && exits.every(({ index }) => index > transfer), 'La salida simetrica debe seguir la transferencia');
});

test('Semana 6 no concentra todas las referencias CNB en pasos genericos', () => {
  for (const lesson of weekSix.lessons.filter((item) => item.kind === 'materia')) {
    const lessonRefs = new Set(lesson.steps.flatMap((step) => step.cnb));
    for (const step of lesson.steps) {
      const text = normalizeFactText(`${step.title ?? ''} ${step.prompt}`);
      const generic = /activa lo que sabes|enfoque y modelo|recuerda una experiencia|criterio central/.test(text);
      const stepRefs = new Set(step.cnb);
      assert.ok(!generic || stepRefs.size < lessonRefs.size,
        `${lesson.id}/${step.id} concentra todas las referencias en un paso generico`);
    }
  }
});

test('Semanas 1 a 6 alinean verbos de resultado con evidencia del mismo tipo', () => {
  const lessons = unitWeeks
    .filter((week) => (week.semana ?? 99) <= 6)
    .flatMap((week) => week.lessons.filter((lesson) => lesson.kind === 'materia'));
  const evidenceByVerb = [
    { verb: /(?:^|\by\s+)pronunciar\b/, label: 'pronunciar', apply: new Set(['project']) },
    { verb: /(?:^|\by\s+)ejecutar\b/, label: 'ejecutar', apply: new Set(['project', 'pulse-lab', 'rhythm']) },
    { verb: /(?:^|\by\s+)construir\b/, label: 'construir', apply: new Set([
      'project', 'short-answer', 'fill-blank', 'order', 'symmetry-loom', 'polygon-lab', 'coordinate-map',
    ]) },
    { verb: /(?:^|\by\s+)presentar\b/, label: 'presentar', apply: new Set(['project', 'short-answer']) },
    { verb: /(?:^|\by\s+)demostrar\b/, label: 'demostrar', apply: new Set(['project', 'short-answer', 'pulse-lab', 'rhythm']) },
  ];
  const contrastVerbs = /(?:^|\by\s+)(?:comparar|diferenciar|distinguir|clasificar)\b|\bcomparando\w*/;
  const contrastTypes = new Set([
    'explain', 'worked-example', 'choice', 'sort', 'match', 'order', 'true-false', 'dilemma', 'reading', 'highlight',
  ]);
  const reasoningTypes = new Set(['short-answer', 'project', 'dilemma']);
  const hasReasoningResponse = (step: typeof lessons[number]['steps'][number]): boolean => {
    if (reasoningTypes.has(step.type)) return true;
    if (step.type !== 'choice') return false;
    const props = step.props as { options?: Array<{ id?: string; text?: string }>; correct?: string[] };
    const correct = new Set(props.correct ?? []);
    return (props.options ?? []).some((option) => correct.has(option.id ?? '')
      && /\b(?:porque|para que|ya que|debido a|permite|ayuda a)\b/.test(normalizeFactText(option.text)));
  };
  const failures: string[] = [];
  for (const lesson of lessons) {
    const objective = normalizeFactText((lesson.objetivos ?? []).join(' '));
    const apply = lesson.steps.filter((step) => step.fase === 'aplicar');
    const exits = lesson.steps.filter((step) => step.fase === 'comprobar');
    const model = lesson.steps.filter((step) => step.fase === 'construir');
    for (const rule of evidenceByVerb) {
      if (rule.verb.test(objective) && !apply.some((step) => rule.apply.has(step.type))) {
        failures.push(`${lesson.id}: ${rule.label} sin evidencia de produccion o desempeno`);
      }
    }
    if (contrastVerbs.test(objective)) {
      if (!model.some((step) => contrastTypes.has(step.type))) failures.push(`${lesson.id}: contraste sin modelo`);
      if (!apply.some((step) => contrastTypes.has(step.type))) failures.push(`${lesson.id}: contraste sin transferencia`);
      if (!exits.some((step) => contrastTypes.has(step.type))) failures.push(`${lesson.id}: contraste sin salida`);
    }
    if (/(?:^|\by\s+)calcular\b/.test(objective)) {
      if (!apply.some((step) => step.type === 'number-input')) failures.push(`${lesson.id}: calcular sin transferencia numerica`);
      if (!exits.some((step) => step.type === 'number-input')) failures.push(`${lesson.id}: calcular sin salida numerica`);
    }
    if (/(?:^|\by\s+)justificar\b/.test(objective)) {
      if (!apply.some(hasReasoningResponse)) failures.push(`${lesson.id}: justificar sin respuesta razonada aplicada`);
      if (!exits.some(hasReasoningResponse)) failures.push(`${lesson.id}: justificar sin respuesta razonada de salida`);
    }
  }
  assert.deepEqual(failures, []);
});

test('Semana 6 asigna referencias CNB segun la operacion de conjuntos evaluada', () => {
  const assessments = [
    ...weekSix.lessons.flatMap((lesson) => lesson.steps),
    ...weekSixBank,
  ].filter((step) => step.areas.includes('mat') && step.fase === 'comprobar' && getActivity(step.type)?.graded);
  const failures: string[] = [];
  for (const step of assessments) {
    const text = normalizeFactText(JSON.stringify(step));
    if (/\bdelta\b|Δ/.test(JSON.stringify(step))) {
      if (!step.cnb.includes('mat:3.2.3')) failures.push(`${step.id}: diferencia simetrica sin mat:3.2.3`);
      continue;
    }
    const operators = (JSON.stringify(step).match(/[∪∩−]/g) ?? []).length;
    if ((/[()]/.test(JSON.stringify(step)) && operators >= 2) || /operacion combinada/.test(text)) {
      if (!step.cnb.includes('mat:3.2.2')) failures.push(`${step.id}: operacion combinada sin mat:3.2.2`);
    } else if (operators >= 1 && !step.cnb.includes('mat:3.2.1')) {
      failures.push(`${step.id}: union, interseccion o diferencia sin mat:3.2.1`);
    }
  }
  assert.deepEqual(failures, []);
});

function exactAudioScript(step: StepBase): string | undefined {
  if (step.media?.kind !== 'audio') return undefined;
  return step.media.brief.match(/Texto exacto:\s*"([^"]+)"/i)?.[1];
}

function scoredListeningFailures(lesson: Lesson): string[] {
  const failures: string[] = [];
  for (const step of lesson.steps.filter((item) => item.cnb.includes('l2:4.1.2') && getActivity(item.type)?.graded)) {
    if (step.media?.kind !== 'audio') {
      failures.push(`${step.id}: evaluacion auditiva sin audio propio`);
      continue;
    }
    const script = exactAudioScript(step);
    if (!script) failures.push(`${step.id}: audio sin guion exacto`);
    const props = step.props as {
      text?: string;
      options?: Array<{ id?: string; text?: string }>;
      correct?: string[];
    };
    const assessedWords = step.type === 'fill-blank'
      ? [...(props.text ?? '').matchAll(/\[\[([^\]]+)\]\]/g)].map((match) => match[1])
      : (props.options ?? [])
        .filter((option) => (props.correct ?? []).includes(option.id ?? ''))
        .map((option) => option.text?.split(/[: (]/, 1)[0] ?? '');
    const normalizedScript = normalizeFactText(script);
    for (const word of assessedWords) {
      if (!new RegExp(`(?:^| )${normalizeFactText(word)}(?: |$)`).test(normalizedScript)) {
        failures.push(`${step.id}: el guion no contiene la respuesta auditiva ${word}`);
      }
    }
    const visible = normalizeFactText(`${step.prompt} ${step.media.alt}`);
    if (script && visible.includes(normalizeFactText(script))) failures.push(`${step.id}: consigna o texto alternativo revela el estimulo`);
    const rawBrief = step.media.brief;
    const brief = normalizeFactText(rawBrief);
    for (const [label, pattern] of [
      ['voz', /\bvoz\b/],
      ['acento', /espanol de guatemala|acento guatemalteco/],
      ['ritmo', /ritmo|pausad/],
      ['silencio', /silencio|pausa/],
      ['duracion', /duracion/],
      ['politica de transcripcion', /transcripcion.{0,120}(?:despues de responder|docente|accesibilidad)/],
      ['ruta de reemplazo', /public\/media\/[a-z0-9-]+\.mp3/i],
    ] as const) {
      if (!pattern.test(label === 'ruta de reemplazo' ? rawBrief : brief)) failures.push(`${step.id}: ficha sin ${label}`);
    }
  }
  return failures;
}

test('La evidencia auditiva calificada exige audio propio y no acepta el audio general de la leccion', () => {
  const audio = {
    id: 'fixture-audio', kind: 'audio' as const, title: 'Estimulo auditivo', duration: 6,
    alt: 'Audio de una oracion breve para identificar una palabra.',
    brief: 'Audio MP3. Texto exacto: "Trae la taza azul." Voz adulta, acento guatemalteco, ritmo pausado; 2 s de silencio. Duracion: 6 s. Transcripcion disponible despues de responder o por mediacion docente para accesibilidad. Reemplazo: public/media/fixture-audio.mp3.',
  };
  const assessment: StepBase = {
    id: 'fixture-step', type: 'choice', fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.2'],
    prompt: 'Escucha y elige el objeto que se menciona.', media: audio,
    props: { options: [{ id: 'a', text: 'taza' }, { id: 'b', text: 'casa' }], correct: ['a'] },
  };
  const baseLesson: Lesson = { id: 'fixture', title: 'Fixture', minutes: 1, steps: [assessment] };
  assert.deepEqual(scoredListeningFailures(baseLesson), []);
  assert.deepEqual(
    scoredListeningFailures({ ...baseLesson, media: audio, steps: [{ ...assessment, media: undefined }] }),
    ['fixture-step: evaluacion auditiva sin audio propio'],
  );
});

test('Semana 6 usa estimulos auditivos especificos y honestamente registrados para cada evaluacion l2:4.1.2', () => {
  const l2Lessons = weekSix.lessons.filter((lesson) => lesson.area === 'l2');
  const weeklyAssessments = [
    ...weekSix.lessons.filter((lesson) => lesson.kind === 'reto').flatMap((lesson) => lesson.steps),
    ...weekSixBank,
  ].filter((step) => step.areas.includes('l2'));
  const failures: string[] = [];
  for (const lesson of l2Lessons) {
    failures.push(...scoredListeningFailures(lesson));
  }
  for (const step of weeklyAssessments) {
    const text = normalizeFactText(JSON.stringify(step));
    const hasAudio = step.media?.kind === 'audio';
    if (step.cnb.includes('l2:4.1.2') && (!hasAudio || !/\b(?:audio|dictado|escucha|oye|oyes|oiste|oir)\b/.test(text))) {
      failures.push(`${step.id}: evaluacion semanal visual usa l2:4.1.2`);
    }
    if (/r inicial|rr entre vocales|r suave|r fuerte/.test(text) && !hasAudio && !step.cnb.includes('l2:4.1.1')) {
      failures.push(`${step.id}: regla visual sin l2:4.1.1`);
    }
  }
  const backlog = new Map(mediaBacklogRows().map((row) => [row.slot.id, row]));
  for (const step of l2Lessons.flatMap((lesson) => lesson.steps)
    .filter((item) => item.cnb.includes('l2:4.1.2') && getActivity(item.type)?.graded)) {
    if (!step.media) continue;
    const row = backlog.get(step.media.id);
    if (!row) failures.push(`${step.id}: audio sin registro de backlog`);
    else {
      if (MEDIA_ASSETS[step.media.id] || row.replacement.produced) failures.push(`${step.id}: mock declarado como producido`);
      if (row.replacement.fileTarget !== `public/media/${step.media.id}.mp3`) failures.push(`${step.id}: ruta de reemplazo inconsistente`);
    }
  }
  assert.deepEqual(failures, []);
});

test('CNT1 Semana 6 evidencia una sola relacion alimento nutriente funcion en toda la secuencia', () => {
  const lesson = weekSix.lessons.find((item) => item.id === 's06-cnt-1');
  assert.ok(lesson, 'Falta s06-cnt-1');
  assert.equal((lesson.objetivos ?? []).length, 1);
  assert.match(normalizeFactText((lesson.objetivos ?? []).join(' ')),
    /relacionar alimentos cotidianos con sus nutrientes y funciones.{0,80}distinguiendo alimento de nutriente/);
  const dimensions = (step: typeof lesson.steps[number]) => {
    const text = normalizeFactText(JSON.stringify(step));
    return {
      distinction: /\balimento\w*.{0,100}\bnutriente\w*|\bnutriente\w*.{0,100}\balimento\w*/.test(text),
      source: /tortilla|frijol|huevo|aguacate|papaya|guayaba|zanahoria|papa|arroz/.test(text),
      function: /energia|constru|repar|procesos|transporta|regula|huesos|sangre/.test(text),
    };
  };
  const model = lesson.steps.find((step) => step.type === 'worked-example');
  assert.ok(model, 'Falta modelo CNT1');
  assert.deepEqual(dimensions(model), { distinction: true, source: true, function: true });
  const guided = lesson.steps.filter((step) => step.fase === 'construir' && step.hint && step.explain);
  assert.ok(guided.some((step) => step.type === 'sort') && guided.some((step) => step.type === 'match'));
  const guidedEvidence = dimensions({ ...guided[0], props: guided.map((step) => step.props) });
  assert.deepEqual(guidedEvidence, { distinction: true, source: true, function: true });
  const transfer = lesson.steps.filter((step) => step.fase === 'aplicar' && getActivity(step.type)?.graded);
  assert.ok(transfer.length >= 2);
  assert.ok(transfer.some((step) => step.type === 'sort') && transfer.some((step) => step.type === 'match'));
  const transferEvidence = dimensions({ ...transfer[0], props: transfer.map((step) => step.props) });
  assert.deepEqual(transferEvidence, { distinction: true, source: true, function: true });
  const exits = lesson.steps.filter((step) => step.fase === 'comprobar' && getActivity(step.type)?.graded);
  assert.equal(exits.length, 2);
  assert.ok(exits.every((step) => Object.values(dimensions(step)).every(Boolean)), 'Una salida no evidencia el resultado integrado');
});

test('L2-1 Semana 6 evalua reglas visuales de r y rr, no pronunciacion sin registro', () => {
  const lesson = weekSix.lessons.find((item) => item.id === 's06-l2-1');
  assert.ok(lesson, 'Falta s06-l2-1');
  assert.match(normalizeFactText((lesson.objetivos ?? []).join(' ')), /relacionar.{0,80}(?:escritura|posicion).{0,100}(?:sonido suave|sonido fuerte)/);
  assert.doesNotMatch(normalizeFactText((lesson.objetivos ?? []).join(' ')), /pronunciar/);
  const hasRuleEvidence = (step: typeof lesson.steps[number]): boolean => {
    const text = normalizeFactText(JSON.stringify(step));
    return /\brr\b|r al inicio|entre vocales|despues de [nls]|posicion/.test(text)
      && /r suave|r fuerte|sonido suave|sonido fuerte/.test(text);
  };
  const model = lesson.steps.find((step) => step.type === 'worked-example');
  const guided = lesson.steps.find((step) => step.fase === 'construir' && step.hint && step.explain);
  const transfer = lesson.steps.filter((step) => step.fase === 'aplicar' && getActivity(step.type)?.graded);
  const exits = lesson.steps.filter((step) => step.fase === 'comprobar' && getActivity(step.type)?.graded);
  assert.ok(model && hasRuleEvidence(model), 'El modelo no demuestra la regla grafema-sonido');
  assert.ok(guided && hasRuleEvidence(guided), 'La guia no aplica la regla grafema-sonido');
  assert.ok(transfer.length >= 2 && transfer.every(hasRuleEvidence), 'La transferencia no se limita a la regla visual');
  assert.ok(exits.length === 2 && exits.every(hasRuleEvidence), 'Las dos salidas deben evaluar la regla visual');
});

test('Semana 6 ensena antes de calificar, reserva explorar y mantiene fases monotonicas', () => {
  const phaseRank = new Map([
    ['explorar', 0], ['construir', 1], ['aplicar', 2], ['comprobar', 3], ['reflexionar', 4],
  ]);
  const failures: string[] = [];
  for (const lesson of weekSix.lessons.filter((item) => item.kind === 'materia')) {
    const firstInstruction = lesson.steps.findIndex((step) => INSTRUCTION_TYPES.has(step.type));
    const firstModel = lesson.steps.findIndex((step) => step.type === 'worked-example');
    const firstGraded = lesson.steps.findIndex((step) => getActivity(step.type)?.graded);
    if (firstInstruction < 0 || firstModel < 0 || firstGraded < 0
      || firstInstruction > firstModel || firstModel > firstGraded) {
      failures.push(`${lesson.id}: instruccion=${firstInstruction + 1}, modelo=${firstModel + 1}, calificada=${firstGraded + 1}`);
    }
    lesson.steps.forEach((step, index) => {
      if (step.fase === 'explorar' && getActivity(step.type)?.graded) failures.push(`${lesson.id}: explorar calificado`);
      if (index > 0 && (phaseRank.get(step.fase) ?? -1) < (phaseRank.get(lesson.steps[index - 1].fase) ?? -1)) {
        failures.push(`${lesson.id}: ${lesson.steps[index - 1].fase} -> ${step.fase}`);
      }
    });
  }
  assert.deepEqual(failures, []);
});

test('Semana 6 ofrece guia con retroalimentacion, transferencia independiente y dos salidas', () => {
  const failures: string[] = [];
  for (const lesson of weekSix.lessons.filter((item) => item.kind === 'materia')) {
    const guided = lesson.steps.some((step) => step.fase === 'construir'
      && Boolean(getActivity(step.type)?.graded) && Boolean(step.hint) && Boolean(step.explain));
    const transfer = lesson.steps.some((step) => step.fase === 'aplicar'
      && Boolean(getActivity(step.type)?.graded) && !step.hint);
    const exits = lesson.steps.filter((step) => step.fase === 'comprobar'
      && Boolean(getActivity(step.type)?.graded) && !step.hint && !step.explain);
    if (!guided || !transfer || exits.length < 2) {
      failures.push(`${lesson.id}: guia=${guided}, transferencia=${transfer}, salidas=${exits.length}`);
    }
  }
  assert.deepEqual(failures, []);
});

test('Semana 6 mantiene carga estructurada creible dentro de quince minutos', () => {
  const countItems = (value: unknown): number => {
    if (!value || typeof value !== 'object') return 0;
    if (Array.isArray(value)) return value.reduce((sum, item) => sum + countItems(item), 0);
    return Object.entries(value as Record<string, unknown>).reduce((sum, [key, item]) => {
      if (['options', 'items', 'pairs', 'statements', 'questions', 'reveal', 'cards', 'steps', 'rounds'].includes(key) && Array.isArray(item)) return sum + item.length;
      return sum;
    }, 0);
  };
  const failures: string[] = [];
  for (const lesson of weekSix.lessons.filter((item) => item.kind === 'materia')) {
    const nestedItems = lesson.steps.reduce((sum, step) => sum + countItems(step.props), 0);
    const serialized = JSON.stringify(lesson.steps.map((step) => ({ ...step, media: undefined })));
    const textWords = serialized.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+/g)?.length ?? 0;
    const mediaSeconds = [lesson.media, ...lesson.steps.map((step) => step.media)]
      .reduce((sum, media) => sum + Number(media?.duration ?? 0), 0);
    const activeText = normalizeFactText(JSON.stringify(lesson.steps.filter((step) => step.fase === 'aplicar')));
    const repetitions = quantifiedActionCount(activeText);
    const setupActions = activeText.match(/\b(?:buscar|recolectar|conseguir|recortar|triturar|preparar|mezclar|distribuir|montar|cocinar)\b/g)?.length ?? 0;
    const evidenceWriting = activeText.match(/\b(?:anota|anoten|registra|registren|escribe|escriban|documenta|documenten)\b/g)?.length ?? 0;
    const complexity = lesson.steps.length + nestedItems / 4 + mediaSeconds / 60 + textWords / 600
      + repetitions / 10 + setupActions * 0.5 + evidenceWriting * 0.5;
    const longResponse = lesson.steps.find((step) => step.type === 'short-answer'
      && Number((step.props as { minWords?: number }).minWords ?? 0) > lesson.minutes * 3);
    if (lesson.minutes < 10 || lesson.minutes > 15 || lesson.steps.length < 9 || lesson.steps.length > 14
      || nestedItems > lesson.minutes * 3 || complexity > lesson.minutes * 2 - 2 || longResponse) {
      failures.push(`${lesson.id}: pasos=${lesson.steps.length}, elementos=${nestedItems}, complejidad=${complexity.toFixed(2)}, larga=${Boolean(longResponse)}`);
    }
  }
  assert.deepEqual(failures, []);
});

test('L3 Semana 6 arma y prueba un mini barrilete reutilizable sin preparacion estudiantil', () => {
  const lesson = weekSix.lessons.find((item) => item.id === 's06-l3-2');
  assert.ok(lesson, 'Falta s06-l3-2');
  assert.ok(lesson.steps.length >= 9 && lesson.steps.length <= 10, `L3 tiene ${lesson.steps.length} pasos`);
  const text = normalizeFactText(JSON.stringify(lesson));
  assert.match(text, /kit.{0,60}(?:preparado|prearmado).{0,80}reutilizable|kit reutilizable.{0,80}(?:preparado|prearmado)/);
  assert.match(text, /cuerpo.{0,40}precortad|precortad.{0,40}cuerpo/);
  assert.match(text, /bridle.{0,40}pre tied|bridle.{0,40}previamente amarrad|brid[ae].{0,40}prearmad/);
  assert.match(text, /pestanas? (?:despegables|reutilizables)|peel.{0,30}(?:tabs|reusable)/);
  const application = lesson.steps.filter((step) => step.fase === 'aplicar');
  const applicationText = normalizeFactText(JSON.stringify(application));
  assert.doesNotMatch(applicationText, /tijeras?|scissors|recort|cut(?:ting)?|pegamento|glue|secad|drying|consigue|reune los materiales|get the materials/);
  assert.doesNotMatch(applicationText, /campo abierto|open field|vuela tu barrilete|fly your kite|cables de electricidad|power lines/);
  const assembly = application.find((step) => step.type === 'project');
  assert.ok(assembly, 'Falta aplicacion de armado');
  const operations = (assembly.props as { steps?: unknown[] }).steps ?? [];
  assert.ok(operations.length >= 3 && operations.length <= 4, `Armado declara ${operations.length} operaciones`);
  const assemblyText = normalizeFactText(JSON.stringify(assembly));
  assert.match(assemblyText, /mesa|tabletop|flujo de aire bajo|low airflow/);
  assert.match(assemblyText, /observacion|observation/);
  const kitMedia = [lesson.media, ...lesson.steps.map((step) => step.media)]
    .find((media) => /kit|barrilete|kite/.test(normalizeFactText(JSON.stringify(media))));
  assert.ok(kitMedia, 'Falta medio descriptivo del kit');
  assert.match(normalizeFactText(JSON.stringify(kitMedia)), /preparacion centralizada|preparado centralmente|commercial|comercial/);
});

test('PyD Semana 6 completa un solo canvas de proyecto dentro de quince minutos', () => {
  const lesson = weekSix.lessons.find((item) => item.id === 's06-pyd-1');
  assert.ok(lesson, 'Falta s06-pyd-1');
  assert.ok(lesson.steps.length >= 9 && lesson.steps.length <= 10, `PyD tiene ${lesson.steps.length} pasos`);
  const text = normalizeFactText(JSON.stringify(lesson));
  assert.match(text, /canvas.{0,40}(?:preparado|impreso).{0,40}una pagina|(?:plantilla|canvas) de una pagina.{0,40}(?:preparad|impres)/);
  assert.doesNotMatch(text, /stand|cartel para|demostracion|maqueta|explicacion de un minuto|practica tu explicacion|ensay/);
  assert.ok(!lesson.steps.some((step) => step.type === 'chart-builder'), 'El canvas no requiere una grafica preliminar');
  const canvas = lesson.steps.find((step) => step.type === 'project');
  assert.ok(canvas, 'Falta el canvas aplicado');
  const canvasText = normalizeFactText(JSON.stringify(canvas));
  for (const field of [/objetivo/, /actividad 1/, /actividad 2/, /responsable/, /fecha/, /presupuesto/]) assert.match(canvasText, field);
  const label = lesson.steps.find((step) => step.type === 'short-answer'
    && /etiqueta|label/.test(normalizeFactText(`${step.title ?? ''} ${step.prompt}`)));
  assert.ok(label, 'Falta una etiqueta visual concisa');
  assert.ok(Number((label.props as { minWords?: number }).minWords ?? 99) <= 8, 'La etiqueta debe ser concisa');
  assert.match(text, /20 segundos|20 second|lista de cotejo|checklist/);
  assert.ok(lesson.steps.findIndex((step) => step.type === 'project') <= 3, 'El canvas empieza demasiado tarde');
});

test('PyD Semana 6 modela y evalua una mini feria con retroalimentacion y revision acotadas', () => {
  const lesson = weekSix.lessons.find((item) => item.id === 's06-pyd-1');
  assert.ok(lesson, 'Falta s06-pyd-1');
  assert.ok(lesson.minutes <= 15 && lesson.steps.length >= 9 && lesson.steps.length <= 10);
  assert.match(normalizeFactText((lesson.objetivos ?? []).join(' ')), /presentar.{0,80}mejorar|mejorar.{0,80}presentar/);

  const modelIndex = lesson.steps.findIndex((step) => step.type === 'worked-example'
    && step.cnb.includes('pyd:4.3.1'));
  assert.ok(modelIndex >= 0, 'Falta un modelo de participacion en feria');
  const modelText = normalizeFactText(JSON.stringify(lesson.steps[modelIndex]));
  assert.match(modelText, /20 segundos/);
  assert.match(modelText, /visitante.{0,120}(?:pregunta|comentario)/);
  assert.match(modelText, /(?:criterio|respetuos)/);
  assert.match(modelText, /(?:registra|anota).{0,100}(?:retroalimentacion|comentario)/);
  assert.match(modelText, /revis[ao].{0,80}(?:campo|actividad|fecha|presupuesto|objetivo)/);

  const guidedIndex = lesson.steps.findIndex((step) => step.cnb.includes('pyd:4.3.1')
    && Boolean(step.hint) && Boolean(step.explain));
  assert.ok(guidedIndex > modelIndex, 'Falta practica guiada de retroalimentacion despues del modelo');
  const fairIndex = lesson.steps.findIndex((step) => step.fase === 'aplicar'
    && step.cnb.includes('pyd:4.3.1')
    && /mini feria|visitante/.test(normalizeFactText(JSON.stringify(step))));
  assert.ok(fairIndex > guidedIndex, 'La mini feria debe ocurrir despues del modelo y la guia');
  const fairText = normalizeFactText(JSON.stringify(lesson.steps[fairIndex]));
  assert.match(fairText, /20 segundos/);
  assert.match(fairText, /un(?:a)? (?:pregunta|comentario)/);
  assert.match(fairText, /(?:registra|anota).{0,100}(?:retroalimentacion|comentario)/);
  assert.match(fairText, /revisa un campo|corrige un campo|mejora un campo/);
  assert.match(fairText, /cambien roles|roles cambian|una ronda evaluada/);
  assert.doesNotMatch(fairText, /un minuto|dos minutos|cartel|stand|demostracion/);
  assert.ok((fairText.match(/20 segundos/g) ?? []).length <= 2, 'La exposicion oral se multiplica');
  assert.ok((fairText.match(/\b(?:anota|registra|escribe)\b/g) ?? []).length <= 2,
    'La mini feria exige demasiada escritura');

  const firstScored43 = lesson.steps.findIndex((step) => step.cnb.includes('pyd:4.3.1')
    && (step.fase === 'aplicar' || step.fase === 'comprobar')
    && Boolean(getActivity(step.type)?.graded));
  assert.ok(firstScored43 > guidedIndex, 'No se debe calificar 4.3.1 antes del modelo y la guia');
  const exits = lesson.steps.filter((step) => step.fase === 'comprobar'
    && step.cnb.includes('pyd:4.3.1') && Boolean(getActivity(step.type)?.graded));
  assert.equal(exits.length, 2, 'La participacion en feria necesita dos salidas');
  assert.ok(exits.every((step) => !step.hint && !step.explain));
  assert.match(normalizeFactText(JSON.stringify(exits)), /retroalimentacion|comentario|pregunta/);

  const bankItem = weekSixBank.find((step) => step.areas.includes('pyd'));
  assert.ok(bankItem, 'Falta item PyD del banco');
  const bankText = normalizeFactText(JSON.stringify(bankItem));
  assert.match(bankText, /presentar y recoger comentarios/);
  assert.ok(exits.every((step) => !normalizeFactText(JSON.stringify(step)).includes('presentar y recoger comentarios')),
    'Las salidas no deben copiar la respuesta del banco');
});

test('Semana 6 usa lenguaje nutricional preciso, respetuoso y adaptable', () => {
  assert.equal(weekSix.title, 'Una refacción nutritiva con recursos locales');
  assert.equal(weekSix.temaGenerador, 'Una refacción nutritiva con recursos locales');
  const text = normalizeFactText(JSON.stringify(weekSix));
  assert.match(text, /alergias?|restricciones? alimentarias?|intolerancias?/);
  assert.match(text, /adult[oa].{0,80}(?:apoyo|acompan|supervis)|(?:apoyo|acompan|supervis).{0,80}adult[oa]/);
  assert.match(text, /precios? (?:del escenario|ilustrativos?|supuestos?)/);
  assert.match(text, /puede variar|segun (?:la comunidad|el lugar|la temporada|la disponibilidad|el presupuesto)/);
  assert.match(text, /tortilla|maiz/);
  assert.match(text, /frijol/);
  assert.match(text, /banano|papaya|naranja|guisquil|aguacate|pepitoria/);
  assert.doesNotMatch(text, /alimentos? (?:buenos?|malos?)|comida (?:buena|mala)/);
  assert.doesNotMatch(text, /\bgarantiza(?:n)? (?:la )?salud\b|\bevita(?:n)? todas? las enfermedades\b|\bcura(?:n)?\b|\badelgaza(?:n)?\b/);
  assert.doesNotMatch(text, /debes dejar de comer|nunca comas|prohibid[oa] comer|elimina de tu dieta/);
  assert.doesNotMatch(text, /se consigue en (?:toda|cualquier) comunidad|todas las familias tienen/);
});

test('Semana 6 ensena funciones de micronutrientes sin prometer prevenir enfermedades', () => {
  const scienceLessons = weekSix.lessons.filter((lesson) => lesson.area === 'cnt');
  const scienceAssessments = [
    ...weekSix.lessons.filter((lesson) => lesson.kind === 'reto').flatMap((lesson) => lesson.steps),
    ...weekSixBank,
  ].filter((step) => step.areas.includes('cnt'));
  const text = normalizeFactText(JSON.stringify([...scienceLessons, ...scienceAssessments]));
  assert.doesNotMatch(text, /para no enfermar|(?:evitar|prevenir) resfriados|vitaminas?.{0,80}(?:evitan?|previenen?|impiden?) (?:enfermedades?|resfriados?)/);
  assert.match(text, /micronutrientes?|vitaminas? y minerales?.{0,120}(?:procesos|funcionamiento inmunitario|crecimiento|sangre|huesos|nervios)/);

  const nutrientLesson = scienceLessons.find((lesson) => lesson.id === 's06-cnt-1');
  assert.ok(nutrientLesson, 'Falta la leccion de nutrientes');
  const scoredText = normalizeFactText(JSON.stringify(nutrientLesson.steps
    .filter((step) => getActivity(step.type)?.graded)));
  assert.match(scoredText, /funcionamiento normal del sistema inmunitario/);
  assert.doesNotMatch(scoredText, /resfriados?|no enfermar/);
});

test('Semana 6 contextualiza la variedad escolar sin contradecir la lactancia exclusiva', () => {
  const schoolAgeContent = [
    ...weekSix.lessons.filter((lesson) => lesson.id === 's06-cnt-1' || lesson.id === 's06-cnt-3'),
    ...weekSix.lessons.filter((lesson) => lesson.kind === 'taller' || lesson.kind === 'reto'),
    ...weekSixBank,
  ];
  const schoolAgeText = normalizeFactText(JSON.stringify(schoolAgeContent));
  assert.doesNotMatch(schoolAgeText, /ningun alimento (?:los )?tiene todos|un solo alimento tiene todos los nutrientes/);
  assert.match(schoolAgeText, /(?:refaccion|menu|combinacion).{0,160}(?:ayuda|puede).{0,80}(?:cubrir|reunir).{0,80}(?:funciones|necesidades|nutrientes)/);
  assert.match(schoolAgeText, /ningun (?:ingrediente|alimento) de (?:una|la) refaccion.{0,120}(?:por si solo|solo).{0,120}(?:todo|todas las necesidades)/);

  const lactation = weekSix.lessons.find((lesson) => lesson.id === 's06-cnt-2');
  assert.ok(lactation, 'Falta la leccion de lactancia');
  const lactationText = normalizeFactText(JSON.stringify(lactation));
  assert.match(lactationText, /lactancia materna exclusiva.{0,80}primeros 6 meses/);
  assert.match(lactationText, /desde los 6 meses.{0,120}alimentos complementarios/);
});

test('Semana 6 construye los cuatro componentes del producto con prerrequisitos y tiempo realistas', () => {
  const workshop = weekSix.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 6 sin taller');
  assert.equal(workshop.title, 'Una refacción local que nutre');
  assert.ok(workshop.minutes <= 20, `Taller declara ${workshop.minutes} minutos`);
  assert.ok(workshop.steps.length >= 10 && workshop.steps.length <= 12, `Taller tiene ${workshop.steps.length} pasos`);
  const minuteLabels = workshop.steps.map((step) => {
    const match = `${step.title ?? ''} ${step.prompt}`.match(/(?:^|\D)(\d+)\s*min(?:uto)?s?/i);
    return match ? Number(match[1]) : 0;
  });
  assert.ok(minuteLabels.every((minutes) => minutes > 0), 'Cada paso del taller debe declarar su tiempo');
  const labeledMinutes = minuteLabels.reduce((sum, minutes) => sum + minutes, 0);
  assert.ok(labeledMinutes >= 17 && labeledMinutes <= 18, `La agenda etiqueta ${labeledMinutes} minutos`);
  assert.ok(workshop.minutes - labeledMinutes >= 2, 'El taller no deja margen real para transiciones');
  const contributors = new Set(workshop.steps
    .filter((step) => step.fase === 'construir' || step.fase === 'aplicar')
    .flatMap((step) => step.areas));
  assert.deepEqual(contributors, new Set(['cnt', 'mat', 'l1', 'pyd']));
  const workshopIndex = weekSix.lessons.indexOf(workshop);
  const priorCnb = new Set(weekSix.lessons.slice(0, workshopIndex)
    .filter((lesson) => lesson.kind === 'materia')
    .flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb)));
  assert.ok(workshop.steps.every((step) => step.cnb.every((ref) => priorCnb.has(ref))), 'El taller introduce CNB no ensenado');
  const text = normalizeFactText(JSON.stringify(workshop));
  for (const component of [/menu.{0,100}justific/, /comparacion.{0,80}conjuntos|conjuntos.{0,80}comparacion/, /presupuesto/, /esquema del proyecto|plan del proyecto/]) {
    assert.match(text, component);
  }
  assert.match(text, /alergias?|restricciones? alimentarias?|intolerancias?/);
  assert.match(text, /precios? (?:del escenario|ilustrativos?|supuestos?)/);
  assert.match(text, /cantidad.{0,30}precio.{0,40}subtotal|subtotal.{0,40}total/);
  assert.match(text, /revision|revisa|verifica|comprueba/);
  assert.match(text, /plantilla (?:preparada|impresa) de una pagina|plantilla de una pagina (?:preparada|impresa)/);
  assert.doesNotMatch(text, /dividan la ficha|dibujen la plantilla|rotulen (?:la|las|cuatro)/);
  assert.equal(workshop.steps.at(-1)?.type, 'reflection');
  const projects = workshop.steps.filter((step) => step.type === 'project');
  assert.ok(projects.length >= 3, 'El producto debe construirse y revisarse en pasos de proyecto');
  assert.ok(workshop.steps.findIndex((step) => step.type === 'project') <= 1, 'El taller debe empezar a producir tras el encargo');
});

test('El taller de Semana 6 limita escritura, calculos, campos y revision entre pares', () => {
  const workshop = weekSix.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 6 sin taller');
  const writes = workshop.steps.filter((step) => step.type === 'short-answer');
  const calculations = workshop.steps.filter((step) => step.type === 'number-input');
  const peerSteps = workshop.steps.filter((step) => /\b(?:par|pares|intercamb\w*)\b/.test(normalizeFactText(`${step.title ?? ''} ${step.prompt}`)));
  assert.equal(writes.length, 1, 'Debe haber una sola propuesta breve');
  assert.ok(Number((writes[0].props as { minWords?: number }).minWords) >= 14
    && Number((writes[0].props as { minWords?: number }).minWords) <= 18, 'La propuesta debe pedir 14-18 palabras');
  assert.equal(calculations.length, 1, 'El producto usa un solo calculo de presupuesto');
  assert.equal(peerSteps.length, 1, 'Debe haber una sola tarea entre pares');
  const peerText = normalizeFactText(JSON.stringify(peerSteps[0]));
  assert.match(peerText, /un criterio|una revision|una correccion/);
  const outline = workshop.steps.find((step) => step.type === 'project'
    && /esquema|proyecto/.test(normalizeFactText(`${step.title ?? ''} ${step.prompt}`)));
  assert.ok(outline, 'Falta el esquema conciso del proyecto');
  const outlineText = normalizeFactText(JSON.stringify(outline));
  for (const field of [/objetivo/, /actividad 1/, /actividad 2/, /responsable/, /fecha/, /revision/]) assert.match(outlineText, field);
});

test('El conjunto P del taller usa una regla de clasificacion y una interseccion coherente', () => {
  const workshop = weekSix.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 6 sin taller');
  const setStep = workshop.steps.find((step) => step.areas.includes('mat')
    && /l .* p|interseccion|l ∩ p/.test(normalizeFactText(step.prompt)));
  assert.ok(setStep, 'Falta una comparacion de conjuntos L y P');
  const text = normalizeFactText(JSON.stringify(setStep));
  assert.match(text, /p .*clasificad.{0,80}(?:grupo|categoria).{0,40}proteina/);
  assert.match(text, /pueden contener|pueden aportar.{0,80}varios nutrientes/);
  assert.match(text, /l .*tortilla.*frijol.*banano.*papaya/);
  assert.match(text, /p .*frijol.*huevo.*queso.*pepitoria/);
  assert.match(text, /l ∩ p.*frijol|interseccion.*frijol/);
});

test('El presupuesto del taller usa precios ilustrativos y aritmetica internamente consistente', () => {
  const workshop = weekSix.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 6 sin taller');
  const budget = workshop.steps.find((step) => step.type === 'number-input'
    && /presupuesto|total/.test(normalizeFactText(step.prompt)));
  assert.ok(budget, 'Falta calculo estructurado del presupuesto');
  const budgetProps = budget.props as { answer?: number; stimulus?: string };
  assert.match(normalizeFactText(`${budget.prompt} ${budgetProps.stimulus ?? ''}`), /precios? (?:del escenario|ilustrativos?|supuestos?)/);
  const quantitiesAndPrices = [...`${budget.prompt} ${budgetProps.stimulus ?? ''}`
    .matchAll(/(\d+(?:[.,]\d+)?)\s+[^\n]*?\bQ\s?(\d+(?:[.,]\d+)?)/gi)]
    .map((match) => [Number(match[1].replace(',', '.')), Number(match[2].replace(',', '.'))] as const);
  assert.ok(quantitiesAndPrices.length >= 3, 'El presupuesto debe incluir al menos tres rubros calculables');
  const expected = quantitiesAndPrices.reduce((sum, [quantity, price]) => sum + quantity * price, 0);
  assert.equal(budgetProps.answer, expected);
});

test('El taller relaciona menu, conjuntos y presupuesto por cobertura, no por igualdad', () => {
  const workshop = weekSix.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 6 sin taller');
  const menu = workshop.steps.find((step) => step.type === 'project'
    && /menu/.test(normalizeFactText(`${step.title ?? ''} ${step.prompt}`)));
  const sets = workshop.steps.find((step) => step.areas.includes('mat')
    && /l .* p|interseccion|l ∩ p/.test(normalizeFactText(step.prompt)));
  const budget = workshop.steps.find((step) => step.type === 'number-input'
    && /presupuesto|total/.test(normalizeFactText(step.prompt)));
  assert.ok(menu && sets && budget, 'Faltan componentes relacionables');
  const parseSet = (label: string, value: string): Set<string> => {
    const match = value.match(new RegExp(`\\b${label}\\s*=[^{}]*\\{([^}]+)\\}`, 'i'));
    assert.ok(match, `Falta conjunto declarado ${label}`);
    return new Set(match[1].split(',').map((item) => normalizeFactText(item)));
  };
  const selected = parseSet('M', JSON.stringify(menu));
  const available = parseSet('L', sets.prompt);
  const proteinGroup = parseSet('P', sets.prompt);
  assert.ok([...selected].every((ingredient) => available.has(ingredient)), 'M debe ser subconjunto de L');
  assert.ok(proteinGroup.has('frijol') && selected.has('frijol'), 'El ingrediente proteico seleccionado debe pertenecer a P');
  assert.ok([...proteinGroup].some((ingredient) => !selected.has(ingredient)), 'P debe poder contener alternativas no seleccionadas');
  const budgetText = normalizeFactText(budget.prompt);
  assert.ok([...selected].every((ingredient) => budgetText.includes(ingredient)), 'El presupuesto debe cubrir cada ingrediente de M');
  const review = workshop.steps.find((step) => /revision entre pares/.test(normalizeFactText(step.title)));
  assert.ok(review, 'Falta revision entre pares');
  const reviewText = normalizeFactText(JSON.stringify(review));
  assert.match(reviewText, /seleccionad.{0,100}(?:clasificad|conjunto)/);
  assert.match(reviewText, /cada ingrediente.{0,100}presupuesto/);
  assert.match(reviewText, /alternativas?.{0,100}no seleccionad/);
  assert.doesNotMatch(reviewText, /mismos ingredientes|ingredientes coinciden|nombran los mismos ingredientes/);
  const reflectionText = normalizeFactText(JSON.stringify(workshop.steps.at(-1)));
  assert.match(reflectionText, /costo total.{0,80}(?:limite|presupuesto)|(?:limite|presupuesto).{0,80}costo total/);
  assert.doesNotMatch(reflectionText, /costo por persona|costo unitario|por refaccion/);
});

test('Semana 6 evalua diez areas con contenido ensenado y payloads frescos', () => {
  const subjectSteps = weekSix.lessons.filter((lesson) => lesson.kind === 'materia').flatMap((lesson) => lesson.steps);
  const taughtCnb = new Set(subjectSteps.flatMap((step) => step.cnb));
  const challenge = weekSix.lessons.find((lesson) => lesson.kind === 'reto');
  assert.ok(challenge, 'Semana 6 sin reto');
  const assessments = [...challenge.steps, ...weekSixBank].filter((step) => getActivity(step.type)?.graded);
  assert.ok(assessments.every((step) => !step.hint && !step.explain), 'Reto o banco contiene pistas');
  assert.ok(assessments.every((step) => step.cnb.every((ref) => taughtCnb.has(ref))), 'Reto o banco evalua CNB no ensenado');
  const challengeAreas = new Set(challenge.steps.filter((step) => getActivity(step.type)?.graded).map((step) => step.areas[0]));
  const bankAreas = new Set(weekSixBank.filter((step) => getActivity(step.type)?.graded).map((step) => step.areas[0]));
  assert.deepEqual(challengeAreas, PRIMARY_AREAS);
  assert.deepEqual(bankAreas, PRIMARY_AREAS);
  const reused: string[] = [];
  for (const [source, steps] of [['reto', challenge.steps], ['banco', weekSixBank]] as const) {
    for (const assessment of steps.filter((step) => getActivity(step.type)?.graded)) {
      const repeatedLesson = subjectSteps.find((practice) => practice.areas[0] === assessment.areas[0]
        && repeatsStructuredFact(assessment, practice));
      if (repeatedLesson) reused.push(`${source}/${assessment.areas[0]} <= ${normalizeFactText(repeatedLesson.prompt)}`);
    }
  }
  const gradedChallenge = nestedGradedAssessments(challenge.steps);
  for (const assessment of weekSixBank.filter((step) => getActivity(step.type)?.graded)) {
    if (gradedChallenge.some((source) => source.areas[0] === assessment.areas[0]
      && repeatsStructuredFact(assessment, source))) {
      reused.push(`banco/${assessment.areas[0]}/estructura: ${normalizeFactText(assessment.prompt)}`);
    }
  }
  assert.deepEqual(reused, []);
});

test('El reto CCSS de Semana 6 evalua una relacion historica ensenada, no aritmetica', () => {
  const challenge = weekSix.lessons.find((lesson) => lesson.kind === 'reto');
  assert.ok(challenge, 'Semana 6 sin reto');
  const item = challenge.steps.find((step) => step.areas[0] === 'ccss');
  assert.ok(item, 'Reto sin CCSS');
  assert.equal(item.type, 'choice');
  assert.ok(item.cnb.includes('ccss:6.5.1'));
  const prompt = normalizeFactText(item.prompt);
  assert.match(prompt, /causa|consecuencia|relacion/);
  assert.doesNotMatch(prompt, /cuantos anos|resta|diferencia entre fechas/);
  const props = item.props as { options?: Array<{ id: string; text: string }>; correct?: string[] };
  assert.equal(props.correct?.length, 1);
  assert.ok((props.options?.length ?? 0) >= 3);
  assert.equal(new Set(props.options?.map((option) => normalizeFactText(option.text))).size, props.options?.length);
});

test('El banco L3 de Semana 6 da una secuencia completa con un solo conector valido', () => {
  const item = weekSixBank.find((step) => step.areas[0] === 'l3');
  assert.ok(item, 'Banco sin L3');
  const text = normalizeFactText(JSON.stringify(item));
  assert.match(text, /first/);
  assert.match(text, /then|next/);
  assert.match(text, /finally/);
  assert.match(text, /wash|add|serve|clean|prepare/);
  if (item.type === 'fill-blank') {
    const props = item.props as { text?: string; distractors?: string[] };
    assert.equal([...(props.text ?? '').matchAll(/\[\[([^\]]+)\]\]/g)].length, 1);
    assert.ok((props.distractors?.length ?? 0) >= 2);
  } else if (item.type === 'choice') {
    const props = item.props as { correct?: string[] };
    assert.equal(props.correct?.length, 1);
  } else assert.fail(`Tipo L3 no verificable: ${item.type}`);
});

test('Semana 6 usa iconos descriptivos para objetos concretos', () => {
  const failures: string[] = [];
  inspectConcreteIcon(weekSix, weekSix.id, failures);
  assert.deepEqual(failures, []);
});

test('Semana 7 preserva 27 lecciones, cobertura CNB y un resultado central por leccion', () => {
  const expectedLessonCounts = new Map([
    ['mat', 5], ['l1', 5], ['cnt', 3], ['ccss', 3], ['l2', 2],
    ['l3', 2], ['fc', 2], ['art', 2], ['ef', 2], ['pyd', 1],
  ]);
  const plan = JSON.parse(readFileSync('src/content/sexto/plan.json', 'utf8')) as {
    unidades: Array<{ unidad: number; semanas: Array<{ semana: number; contenidos: Record<string, string[]> }> }>;
  };
  const plannedWeek = plan.unidades.find((unit) => unit.unidad === 1)?.semanas.find((week) => week.semana === 7);
  assert.ok(plannedWeek, 'plan.json no contiene Unidad 1 Semana 7');
  const expectedCnb = new Set(Object.values(plannedWeek.contenidos).flat());
  const documentedTransfers = new Map([
    ['cnt:6.1.1', { fromWeek: 6, reason: 'La morbilidad se interpreta junto con condiciones ambientales sin atribuir causalidad automática.' }],
    ['cnt:6.2.1', { fromWeek: 6, reason: 'El crecimiento poblacional se estudia en la lección de expansión urbana y áreas verdes.' }],
    ['cnt:6.3.1', { fromWeek: 6, reason: 'La relación bosque-agua se enseña con condiciones y límites de inferencia.' }],
    ['ccss:6.6.6', { fromWeek: 6, reason: 'La organización comunitaria se compara con redes de cooperación regional según su escala y participantes.' }],
    ['ccss:6.7.1', { fromWeek: 6, reason: 'La mediación juvenil analiza condiciones sociales que influyen en el acceso y la convivencia.' }],
    ['ccss:6.7.4', { fromWeek: 6, reason: 'La participación juvenil se estudia como práctica de apertura democrática con avances y desafíos.' }],
  ] as const);
  const unitPlan = plan.unidades.find((unit) => unit.unidad === 1);
  assert.ok(unitPlan);
  for (const [ref, transfer] of documentedTransfers) {
    const sourceWeek = unitPlan.semanas.find((week) => week.semana === transfer.fromWeek);
    assert.ok(sourceWeek && Object.values(sourceWeek.contenidos).flat().includes(ref), `${ref}: transferencia sin origen en plan.json`);
    assert.ok(transfer.reason.length >= 40, `${ref}: transferencia sin justificación curricular`);
    expectedCnb.add(ref);
  }
  const lessons = weekSeven.lessons.filter((lesson) => lesson.kind === 'materia');
  const actualCounts = new Map<string, number>();
  const failures: string[] = [];
  for (const lesson of lessons) {
    assert.ok(lesson.area, `${lesson.id} no declara area`);
    actualCounts.set(lesson.area, (actualCounts.get(lesson.area) ?? 0) + 1);
    if ((lesson.objetivos?.length ?? 0) !== 1) failures.push(`${lesson.id}: ${lesson.objetivos?.length ?? 0} objetivos`);
    if (lesson.steps.length < 9 || lesson.steps.length > 14) failures.push(`${lesson.id}: ${lesson.steps.length} pasos`);
    if (lesson.minutes > 15) failures.push(`${lesson.id}: ${lesson.minutes} minutos`);
  }
  assert.deepEqual(actualCounts, expectedLessonCounts);
  assert.deepEqual(new Set(lessons.flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb))), expectedCnb);
  assert.deepEqual(failures, []);
});

test('Semana 7 mantiene carga estructurada creible dentro de quince minutos', () => {
  const failures: string[] = [];
  for (const lesson of weekSeven.lessons.filter((item) => item.kind === 'materia')) {
    const { nestedItems, complexity, longResponse } = lessonWorkload(lesson);
    if (lesson.minutes < 10 || lesson.minutes > 15 || lesson.steps.length < 9 || lesson.steps.length > 14
      || nestedItems > lesson.minutes * 3 || complexity > lesson.minutes * 2 - 2 || longResponse) {
      failures.push(`${lesson.id}: pasos=${lesson.steps.length}, elementos=${nestedItems}, complejidad=${complexity.toFixed(2)}, larga=${longResponse}`);
    }
  }
  assert.deepEqual(failures, []);
});

test('Semana 7 usa secuencias autoradas con ensenanza, guia, transferencia y dos salidas', () => {
  const phaseRank = new Map([
    ['explorar', 0], ['construir', 1], ['aplicar', 2], ['comprobar', 3], ['reflexionar', 4],
  ]);
  const failures: string[] = [];
  for (const area of ['art', 'ccss', 'cnt', 'ef', 'fc', 'l1', 'l2', 'l3', 'mat', 'pyd']) {
    const source = readFileSync(`src/content/sexto/materias/${area}/u1/s07.ts`, 'utf8');
    if (/preparedLesson|compactConstruct|firstIdea|secondIdea/.test(source)) failures.push(`${area}: selector generico`);
  }
  for (const lesson of weekSeven.lessons.filter((item) => item.kind === 'materia')) {
    const firstInstruction = lesson.steps.findIndex((step) => INSTRUCTION_TYPES.has(step.type));
    const firstGraded = lesson.steps.findIndex((step) => getActivity(step.type)?.graded);
    if (firstInstruction < 0 || firstGraded < 0 || firstInstruction > firstGraded) {
      failures.push(`${lesson.id}: ensenanza=${firstInstruction + 1}, calificada=${firstGraded + 1}`);
    }
    lesson.steps.forEach((step, index) => {
      if (step.fase === 'explorar' && getActivity(step.type)?.graded) failures.push(`${lesson.id}: explorar calificado`);
      if (index > 0 && (phaseRank.get(step.fase) ?? -1) < (phaseRank.get(lesson.steps[index - 1].fase) ?? -1)) {
        failures.push(`${lesson.id}: ${lesson.steps[index - 1].fase} -> ${step.fase}`);
      }
    });
    const guided = lesson.steps.some((step) => step.fase === 'construir'
      && Boolean(getActivity(step.type)?.graded) && Boolean(step.hint) && Boolean(step.explain));
    const transfer = lesson.steps.some((step) => step.fase === 'aplicar'
      && Boolean(getActivity(step.type)?.graded) && !step.hint);
    const exits = lesson.steps.filter((step) => step.fase === 'comprobar'
      && Boolean(getActivity(step.type)?.graded) && !step.hint && !step.explain);
    if (!guided || !transfer || exits.length < 2) {
      failures.push(`${lesson.id}: guia=${guided}, transferencia=${transfer}, salidas=${exits.length}`);
    }
  }
  assert.deepEqual(failures, []);
});

test('Semana 7 distingue escenarios, observaciones e inferencias y califica sus afirmaciones sobre agua', () => {
  const text = normalizeFactText(JSON.stringify(weekSeven));
  assert.equal(unsupportedCausality('Reforestar garantiza agua y evita que el nacimiento se seque.'), true);
  assert.equal(unsupportedCausality('La vegetacion puede favorecer la infiltracion segun el suelo, la pendiente y la lluvia.'), false);
  assert.equal(unsupportedCausality(weekSeven), false, 'Semana 7 contiene una causalidad ambiental o sanitaria no sustentada');
  assert.doesNotMatch(text, /agua entubada (?:es|esta) potable|agua de nacimiento (?:es|esta) (?:sucia|contaminada|insegura)/);
  assert.doesNotMatch(text, /(?:el bosque|los bosques|reforestar).{0,80}(?:garantiza|asegura).{0,60}(?:agua|calidad|cantidad)/);
  assert.doesNotMatch(text, /sin bosque.{0,80}(?:el nacimiento se seca|no se infiltra|no se guarda)/);
  assert.match(text, /puede(?:n)? ayudar|puede(?:n)? contribuir|segun (?:el suelo|las condiciones|la evidencia|el caso)/);
  assert.match(text, /datos? (?:del escenario|hipoteticos?|simulados?|de ejemplo)|caso (?:hipotetico|simulado)/);
  assert.doesNotMatch(text, /(?:entrevistamos|consultamos|medimos|comprobamos) (?:a|con|el|la|los|las|en) (?:nuestra|nuestro|la comunidad|el cocode|el nacimiento)/);
});

test('CNT1 trata humo, influenza y datos sanitarios como riesgo, asociacion e hipotesis', () => {
  const lesson = weekSeven.lessons.find((item) => item.id === 's07-cnt-1');
  assert.ok(lesson, 'Falta s07-cnt-1');
  const text = normalizeFactText(JSON.stringify(lesson));
  assert.match(text, /humo.{0,100}(?:puede aumentar|aumenta el riesgo|se asocia)/);
  assert.match(text, /(?:gripe|influenza).{0,40}(?:virus|viral)|(?:virus|viral).{0,40}(?:gripe|influenza)/);
  assert.match(text, /(?:otras explicaciones|explicaciones alternativas|tambien pueden influir).{0,120}(?:virus|ventilacion|hacinamiento|epoca|temporada)/);
  assert.doesNotMatch(text, /(?:imagen|ilustracion|escena).{0,100}(?:demuestra|prueba).{0,80}(?:causa|casos|enfermedad)/);
});

test('L1-4 y L1-5 resuelven la investigacion con paquetes atribuidos y autosuficientes', () => {
  const lessons = ['s07-l1-4', 's07-l1-5'].map((id) => weekSeven.lessons.find((item) => item.id === id));
  assert.ok(lessons.every(Boolean), 'Falta una leccion L1 de fuentes');
  for (const lesson of lessons) {
    assert.ok(lesson);
    const application = normalizeFactText(JSON.stringify(lesson.steps.filter((step) => step.fase === 'aplicar' || step.fase === 'reflexionar')));
    assert.match(application, /(?:paquete|tarjeta|ficha|fuente) [abc123]/, `${lesson.id}: falta paquete suministrado`);
    assert.match(application, /autor|institucion responsable|fecha|procedencia/, `${lesson.id}: faltan atribuciones visibles`);
    assert.doesNotMatch(application, /(?:busca|consulta|visita|entrevista|pregunta a|habla con|investiga en) (?:un|una|tu|el|la|internet|sitio|libro|persona|familia|comunidad)|(?:ya consultaste|consultaras|vas a consultar|entrevistaras)/, `${lesson.id}: exige una fuente externa`);
  }
});

test('Los modelos de fuentes solo usan tarjetas y afirmaciones visibles en el paquete', () => {
  assert.deepEqual(
    sourceSupportFailures('FUENTE A. Equipo escolar, 2025.', 'FUENTE C. Institucion publica de salud: hervir o clorar.'),
    [
      'fuente c no suministrada',
      'afirmacion no sustentada: institucion publica de salud',
      'afirmacion no sustentada: (?:hervir|hervido)',
      'afirmacion no sustentada: (?:clorar|cloracion|clorada)',
    ],
  );
  const lesson = weekSeven.lessons.find((item) => item.id === 's07-l1-4');
  assert.ok(lesson, 'Falta s07-l1-4');
  const packet = lesson.steps.find((step) => step.type === 'reading'
    && /tarjetas didacticas/.test(normalizeFactText((step.props as { genre?: string }).genre)))?.props;
  const models = lesson.steps
    .filter((step) => step.type === 'worked-example' || typeof (step.props as { model?: unknown }).model === 'string')
    .map((step) => step.props);
  assert.ok(packet && models.length >= 2, 'L1-4 necesita paquete y modelos resueltos');
  assert.deepEqual(models.flatMap((model) => sourceSupportFailures(packet, model)), []);
});

test('Arte 2 alinea el modelo y el boceto breve con agua y movimiento', () => {
  assert.equal(sharesConceptGroups(
    'Dibuja agua con curvas repetidas.',
    'Pintare tambores en la playa con arena.',
    [/(?:agua|rio|arroyo|gota|corriente)/, /(?:curva|diagonal|repet|movimiento)/],
  ), false);
  const lesson = weekSeven.lessons.find((item) => item.id === 's07-art-2');
  assert.ok(lesson, 'Falta s07-art-2');
  const application = lesson.steps.filter((step) => step.fase === 'aplicar');
  const drawing = application.find((step) => step.type === 'project');
  const model = lesson.steps.find((step) => step.type === 'worked-example');
  assert.ok(drawing && model, 'Arte 2 necesita un modelo breve y un boceto aplicable');
  assert.equal(sharesConceptGroups(
    drawing.prompt,
    model.props,
    [/(?:agua|rio|arroyo|gota|corriente)/, /(?:curva|diagonal|repet|movimiento)/],
  ), true, 'El modelo no responde al boceto de agua y movimiento');
  assert.ok(application.length <= 2, `Arte 2 acumula ${application.length} actividades de aplicacion`);
  assert.doesNotMatch(normalizeFactText(JSON.stringify(lesson)), /cuadricula|pared grande|mural multicultural|preguntar a personas de la comunidad/);
});

test('PyD y CCSS1 alinean objetivo, aplicacion y salidas con evidencia semantica', () => {
  const pyd = weekSeven.lessons.find((item) => item.id === 's07-pyd-1');
  const ccss = weekSeven.lessons.find((item) => item.id === 's07-ccss-1');
  assert.ok(pyd && ccss, 'Faltan PyD o CCSS1');
  const pydObjective = normalizeFactText((pyd.objetivos ?? []).join(' '));
  const pydApplication = normalizeFactText(JSON.stringify(pyd.steps.filter((step) => step.fase === 'aplicar')));
  const pydExits = normalizeFactText(JSON.stringify(pyd.steps.filter((step) => step.fase === 'comprobar')));
  assert.match(pydObjective, /disenar.{0,80}accion (?:ambiental )?(?:factible|viable)/);
  for (const field of [/causa/, /evidencia/, /responsabl/, /recurso/, /verific|indicador/]) {
    assert.match(pydApplication, field, `PyD aplicacion no evidencia ${field}`);
    assert.match(pydExits, field, `PyD salidas no evidencian ${field}`);
  }
  const ccssObjective = normalizeFactText((ccss.objetivos ?? []).join(' '));
  const ccssApplication = normalizeFactText(JSON.stringify(ccss.steps.filter((step) => step.fase === 'aplicar')));
  const ccssExits = normalizeFactText(JSON.stringify(ccss.steps.filter((step) => step.fase === 'comprobar')));
  assert.match(ccssObjective, /comparar.{0,80}procesos? de paz/);
  for (const field of [/acuerdo/, /actor/, /participacion/]) {
    assert.match(ccssApplication, field, `CCSS1 aplicacion no compara ${field}`);
    assert.match(ccssExits, field, `CCSS1 salidas no comparan ${field}`);
  }
});

test('CCSS distribuye las transferencias sin cargar resultados ajenos en la comparacion de paz', () => {
  const lessons = ['s07-ccss-1', 's07-ccss-2', 's07-ccss-3'].map((id) => weekSeven.lessons.find((item) => item.id === id));
  assert.ok(lessons.every(Boolean), 'Faltan lecciones de CCSS');
  const refs = lessons.map((lesson) => new Set(lesson!.steps.flatMap((step) => step.cnb)));
  assert.deepEqual(refs[0], new Set(['ccss:7.2.1']), 'CCSS1 debe evaluar solo la comparacion de procesos de paz');
  assert.deepEqual(refs[1], new Set(['ccss:7.1.2', 'ccss:7.2.5', 'ccss:6.7.1', 'ccss:6.7.4']));
  assert.deepEqual(refs[2], new Set(['ccss:7.1.3', 'ccss:6.6.6']));
  const firstText = normalizeFactText(JSON.stringify(lessons[0]));
  assert.doesNotMatch(firstText, /\bsica\b|\boea\b|condiciones socioeconomicas|apertura democratica/);
});

test('Los mocks de Semana 7 tienen especificacion de formato, produccion y accesibilidad', () => {
  assert.equal(mediaBriefFailure({ kind: 'image', brief: 'Una imagen bonita.', alt: 'Una escena suficientemente descrita para probar.' }), 'sin dimensiones');
  assert.equal(mediaBriefFailure({ kind: 'audio', brief: 'Audio con voz clara.', alt: 'Una pista suficientemente descrita para probar.' }), 'sin duracion');
  const failures: string[] = [];
  const visit = (value: unknown): void => {
    if (Array.isArray(value)) { value.forEach(visit); return; }
    if (!value || typeof value !== 'object') return;
    const record = value as Record<string, unknown>;
    if (typeof record.id === 'string' && typeof record.kind === 'string'
      && typeof record.brief === 'string' && typeof record.alt === 'string') {
      const failure = mediaBriefFailure(record as { kind: string; brief: string; alt: string });
      if (failure) failures.push(`${record.id}: ${failure}`);
    }
    Object.values(record).forEach(visit);
  };
  visit(weekSeven);
  assert.deepEqual(failures, []);
});

test('Semana 7 construye un informe viable con preguntas, fuentes, hallazgos y accion', () => {
  const workshop = weekSeven.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 7 sin taller');
  assert.equal(workshop.title, 'Informe sobre el agua de la comunidad');
  assert.ok(workshop.minutes <= 20, `Taller declara ${workshop.minutes} minutos`);
  assert.ok(workshop.steps.length >= 10 && workshop.steps.length <= 14, `Taller tiene ${workshop.steps.length} pasos`);
  const contributors = new Set(workshop.steps
    .filter((step) => step.fase === 'construir' || step.fase === 'aplicar')
    .flatMap((step) => step.areas));
  assert.deepEqual(contributors, new Set(['l1', 'cnt', 'fc', 'pyd']));
  const workshopIndex = weekSeven.lessons.indexOf(workshop);
  const priorCnb = new Set(weekSeven.lessons.slice(0, workshopIndex)
    .filter((lesson) => lesson.kind === 'materia')
    .flatMap((lesson) => lesson.steps.flatMap((step) => step.cnb)));
  assert.ok(workshop.steps.every((step) => step.cnb.every((ref) => priorCnb.has(ref))), 'El taller introduce CNB no ensenado');
  const text = normalizeFactText(JSON.stringify(workshop));
  for (const component of [/pregunta de investigacion/, /juicio|evaluacion.{0,40}fuente|fuente.{0,40}(?:confiable|dudosa)/, /hallazgo/, /accion (?:viable|factible)/]) {
    assert.match(text, component);
  }
  assert.match(text, /caso (?:hipotetico|simulado)|datos? (?:del escenario|simulados?|de ejemplo)/);
  assert.match(text, /evidencia.{0,100}(?:no basta|limite|inferencia)|(?:no basta|limite).{0,100}evidencia/);
  assert.doesNotMatch(text, /investiga en tu comunidad|entrevista a|consulta (?:a|con)|mide (?:el|la)|visita (?:el|la)/);
  assert.equal(workshop.steps.at(-1)?.type, 'reflection');
});

test('Semana 7 asigna referencias CNB que corresponden a la evidencia evaluada', () => {
  assert.deepEqual(
    semanticCnbFailures({ cnb: ['cnt:6.4.1'], prompt: 'Compara cobertura vegetal, erosion e infiltracion.', props: {} }),
    ['relacion bosque-agua sin cnt:6.3.1'],
  );
  assert.deepEqual(
    semanticCnbFailures({ cnb: ['mat:4.1.3'], prompt: 'Que numero representa XLIX?', props: {} }),
    ['numeracion romana sin mat:4.1.2'],
  );
  const workshop = weekSeven.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop);
  const failures = [...workshop.steps, ...weekSevenBank]
    .flatMap((step) => semanticCnbFailures(step).map((failure) => `${step.prompt}: ${failure}`));
  assert.deepEqual(failures, []);
});

test('Semana 7 evalua diez areas con contenido ensenado y payloads frescos', () => {
  const subjectSteps = weekSeven.lessons.filter((lesson) => lesson.kind === 'materia').flatMap((lesson) => lesson.steps);
  const taughtCnb = new Set(subjectSteps.flatMap((step) => step.cnb));
  const challenge = weekSeven.lessons.find((lesson) => lesson.kind === 'reto');
  assert.ok(challenge, 'Semana 7 sin reto');
  const assessments = [...challenge.steps, ...weekSevenBank].filter((step) => getActivity(step.type)?.graded);
  assert.ok(assessments.every((step) => !step.hint && !step.explain), 'Reto o banco contiene pistas');
  assert.ok(assessments.every((step) => step.cnb.every((ref) => taughtCnb.has(ref))), 'Reto o banco evalua CNB no ensenado');
  const challengeAreas = new Set(challenge.steps.filter((step) => getActivity(step.type)?.graded).map((step) => step.areas[0]));
  const bankAreas = new Set(weekSevenBank.filter((step) => getActivity(step.type)?.graded).map((step) => step.areas[0]));
  assert.deepEqual(challengeAreas, PRIMARY_AREAS);
  assert.deepEqual(bankAreas, PRIMARY_AREAS);
  const reused: string[] = [];
  for (const [source, steps] of [['reto', challenge.steps], ['banco', weekSevenBank]] as const) {
    for (const assessment of steps.filter((step) => getActivity(step.type)?.graded)) {
      const repeatedLesson = subjectSteps.find((practice) => practice.areas[0] === assessment.areas[0]
        && repeatsStructuredFact(assessment, practice));
      if (repeatedLesson) reused.push(`${source}/${assessment.areas[0]} <= ${normalizeFactText(repeatedLesson.prompt)}`);
    }
  }
  const gradedChallenge = nestedGradedAssessments(challenge.steps);
  for (const assessment of weekSevenBank.filter((step) => getActivity(step.type)?.graded)) {
    if (gradedChallenge.some((source) => source.areas[0] === assessment.areas[0]
      && repeatsStructuredFact(assessment, source))) reused.push(`banco/${assessment.areas[0]}`);
  }
  assert.deepEqual(reused, []);
});

test('Unidad 1 no repite una interacción tres veces seguidas', () => {
  for (const week of unitWeeks) for (const lesson of week.lessons) {
    for (let index = 2; index < lesson.steps.length; index += 1) {
      const types = lesson.steps.slice(index - 2, index + 1).map((step) => step.type);
      assert.ok(new Set(types).size > 1, `${lesson.id}: repite ${types[0]} tres veces`);
    }
  }
});

test('Unidad 1 evalúa al menos seis materias en cada reto', () => {
  for (const week of unitWeeks) {
    const challenge = week.lessons.find((lesson) => lesson.kind === 'reto');
    assert.ok(challenge, `Semana ${week.semana} sin reto`);
    const assessedAreas = new Set(
      challenge.steps
        .filter((step) => step.fase === 'comprobar' && getActivity(step.type)!.graded)
        .map((step) => step.areas[0]),
    );
    assert.ok(
      assessedAreas.size >= 6,
      `Semana ${week.semana}: reto evalúa ${assessedAreas.size} materias en actividades calificadas de comprobar`,
    );
  }
});

test('Unidad 1 no usa formas genéricas para objetos concretos', () => {
  const failures: string[] = [];
  unitWeeks.forEach((week) => inspectConcreteIcon(week, week.id, failures));
  assert.deepEqual(failures, []);
});
