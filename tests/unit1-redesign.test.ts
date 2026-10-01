import { test } from 'node:test';
import assert from 'node:assert/strict';
import { registerAll } from '../src/activities/index';
import { getActivity } from '../src/core/registry';
import { WEEKS } from '../src/content/index';

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
    const sharedAnswerField = Math.max(
      0,
      ...[...custom.fields.values()].map((tokens) => (
        [...answerTokens].filter((token) => tokens.has(token)).length
      )),
    );
    const weightedAnswerOverlap = sharedAnswerPrompt + (2 * sharedAnswerField);
    return sharedPrompt.length >= 1
      && sharedAnswer.length >= 2
      && (weightedAnswerOverlap >= 2 || sharedPrompt.length >= 2);
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
  assert.ok(minuteLabels.reduce((sum, minutes) => sum + minutes, 0) <= workshop.minutes, 'La agenda excede el tiempo disponible');

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
  const productText = normalizeFactText(JSON.stringify(projects));
  assert.match(productText, /escena dramatica|campana informativa/);
  assert.match(productText, /exactitud cientifica|cientificamente correcto/);
  assert.match(productText, /lenguaje respetuoso|respeto/);
  assert.match(productText, /fuente confiable/);
  const review = workshop.steps.find((step) => /revision|revis/i.test(`${step.title ?? ''} ${step.prompt}`));
  assert.ok(review, 'Falta revisión del producto');
  assert.match(normalizeFactText(JSON.stringify(review)), /exactitud cientifica/);
  assert.match(normalizeFactText(JSON.stringify(review)), /respeto/);
  assert.equal(workshop.steps.at(-1)?.type, 'reflection');
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
