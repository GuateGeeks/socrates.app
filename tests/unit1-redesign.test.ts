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

function semanticAssessmentFacts(value: unknown): string[] {
  const text = JSON.stringify(value)
    .toLocaleLowerCase('es')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[*]+/g, '');
  const facts: string[] = [];
  if (/cromosom/.test(text) && /\b46\b/.test(text) && /\b23\b/.test(text) && /par(?:es)?/.test(text)) {
    facts.push('46-cromosomas-en-23-pares');
  }
  if (/eneagono/.test(text) && /lado/.test(text) && /(?:"answer":9|"text":"9")/.test(text)) {
    facts.push('eneagono-tiene-9-lados');
  }
  if (/que es un gen/.test(text) && /adn/.test(text) && /instruccion|caracteristica/.test(text)) {
    facts.push('definicion-directa-de-gen');
  }
  return facts;
}

test('Las firmas de frescura reconocen hechos repetidos aunque cambie el formato', () => {
  const directGeneDefinition = {
    type: 'choice',
    prompt: '¿Qué es un **gen**?',
    props: {
      options: [{ id: 'a', text: 'Un pedazo de ADN con la instrucción para una característica' }],
      correct: ['a'],
    },
  };
  assert.ok(
    semanticAssessmentFacts(directGeneDefinition).includes('definicion-directa-de-gen'),
    'La firma debe ignorar el énfasis Markdown del concepto',
  );
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

type StructuredFact = { context: Set<string>; values: string[]; role: 'answer' | 'support' };

function normalizeFactText(value: unknown): string {
  return String(value ?? '')
    .toLocaleLowerCase('es')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[·*_"¿?¡!.,;:()[\]{}]/g, ' ')
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
    context: factTokens((step.prompt ?? '') + ' ' + String(context ?? '') + ' ' + values.join(' ')),
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
      ...(props.items ?? []).map((item) => makeFact(item.text, [item.text, labels.get(item.bucket)])),
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
  const left = structuredAssessment(candidate);
  const right = structuredAssessment(source);
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
    const candidateContext = meaningfulNumericContext(candidateFact.context);
    const sourceContext = meaningfulNumericContext(sourceFact.context);
    const sharedContext = [...candidateContext].filter((token) => sourceContext.has(token)).length;
    return sameValue
      && candidateContext.size >= 2
      && sharedContext >= 2
      && directionalOverlap(candidateContext, sourceContext) >= (numericValue ? 0.35 : 0.3);
  };
  const candidateFacts = left.facts.filter((fact) => fact.role === 'answer');
  const pairedFacts = candidateFacts.filter(isPairFact);
  const repeatedPairs = pairedFacts.filter((candidateFact) => (
    right.facts.some((sourceFact) => isPairFact(sourceFact) && matches(candidateFact, sourceFact))
  ));
  if (repeatedPairs.length >= 2) return true;
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
const WEEK_THREE_CONCRETE_OBJECT = /(?:^|[^\p{L}])(?:ruedas?|tablillas?|escenarios?|señales? informativas?|rutas?|carreteras?|motocicletas?|motos?|autobuses?|buses?)(?=$|[^\p{L}])/iu;

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
        if (practice.areas[0] !== assessment.areas[0] || practice.type !== assessment.type) continue;
        if (repeatsStructuredFact(assessment, practice)) {
          reused.push(source + '/' + assessment.areas[0] + '/' + assessment.type + ' <= ' + normalizeFactText(practice.prompt));
          break;
        }
      }
    }
  }

  for (const [source, steps] of [['reto', challenge.steps], ['banco', weekTwoBank]] as const) {
    for (const assessment of steps.filter((step) => getActivity(step.type)?.graded)) {
      const assessmentFacts = semanticAssessmentFacts(assessment);
      if (assessmentFacts.length === 0) continue;
      for (const practice of subjectSteps.filter((step) => getActivity(step.type)?.graded)) {
        if (practice.areas[0] !== assessment.areas[0]) continue;
        const practiceFacts = new Set(semanticAssessmentFacts(practice));
        for (const fact of assessmentFacts) {
          if (practiceFacts.has(fact)) {
            reused.push(`${source}/${assessment.areas[0]}/hecho:${fact}`);
          }
        }
      }
    }
  }

  const gradedChallenge = nestedGradedAssessments(challenge.steps);
  for (const assessment of weekTwoBank.filter((step) => getActivity(step.type)?.graded)) {
    const repeatedLessonSource = subjectSteps.find((source) => (
      source.areas[0] === assessment.areas[0]
      && source.type === assessment.type
      && repeatsStructuredFact(assessment, source)
    ));
    const assessmentStructure = structuredAssessment(assessment);
    const repeatedChallengeFact = gradedChallenge.some((source) => {
      if (source.areas[0] !== assessment.areas[0]) return false;
      const sourceStructure = structuredAssessment(source);
      const sameAnswer = assessmentStructure.facts.some((candidateFact) => sourceStructure.facts.some((sourceFact) => (
        candidateFact.values.some((value) => sourceFact.values.includes(value))
      )));
      return sameAnswer && directionalOverlap(assessmentStructure.prompt, sourceStructure.prompt) >= 0.5;
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

test('Semana 3 construye una ruta segura con prerrequisitos, producto y carga factibles', () => {
  const workshop = weekThree.lessons.find((lesson) => lesson.kind === 'taller');
  assert.ok(workshop, 'Semana 3 sin taller');
  assert.equal(workshop.title, 'Ruta segura a la escuela');
  assert.ok(workshop.minutes <= 20, `Taller declara ${workshop.minutes} minutos`);
  assert.ok(workshop.steps.length >= 10 && workshop.steps.length <= 14, `Taller tiene ${workshop.steps.length} pasos`);

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
  assert.ok(firstProjectIndex >= 0 && firstProjectIndex <= 3, 'La producción debe empezar tras no más de tres pasos breves');
  assert.ok(projects.length >= 4, 'La ruta, el análisis, la señal y la integración deben construirse por etapas');
  assert.ok(workshop.steps.slice(firstProjectIndex, -1).length >= 7, 'La mayoría del taller debe dedicarse al producto y su revisión');

  const productText = JSON.stringify(projects).toLocaleLowerCase('es');
  assert.match(productText, /representaci[oó]n.+ruta|ruta.+representaci[oó]n/s);
  assert.match(productText, /riesgo.+(?:evidencia|observ|registro)|(?:evidencia|observ|registro).+riesgo/s);
  assert.match(productText, /señal.+(?:forma|color|[ií]cono)|(?:forma|color|[ií]cono).+señal/s);
  assert.match(productText, /depende|seg[uú]n|si .+ entonces|con la evidencia/s, 'La conclusión de seguridad debe ser condicional');
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
        if (practice.areas[0] !== assessment.areas[0] || practice.type !== assessment.type) continue;
        if (repeatsStructuredFact(assessment, practice)) {
          reused.push(source + '/' + assessment.areas[0] + '/' + assessment.type + ' <= ' + normalizeFactText(practice.prompt));
          break;
        }
      }
    }
  }

  const gradedChallenge = nestedGradedAssessments(challenge.steps);
  for (const assessment of weekThreeBank.filter((step) => getActivity(step.type)?.graded)) {
    const assessmentStructure = structuredAssessment(assessment);
    const repeatedChallengeFact = gradedChallenge.some((source) => {
      if (source.areas[0] !== assessment.areas[0]) return false;
      const sourceStructure = structuredAssessment(source);
      const sameAnswer = assessmentStructure.facts.some((candidateFact) => sourceStructure.facts.some((sourceFact) => (
        candidateFact.values.some((value) => sourceFact.values.includes(value))
      )));
      return sameAnswer && directionalOverlap(assessmentStructure.prompt, sourceStructure.prompt) >= 0.5;
    });
    if (repeatedChallengeFact) reused.push(`banco/${assessment.areas[0]}/estructura: ${normalizeFactText(assessment.prompt)}`);
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
