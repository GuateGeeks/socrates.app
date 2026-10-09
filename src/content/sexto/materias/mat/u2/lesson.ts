import { lesson, S } from '../../../../dsl';

type Item = { prompt: string; answer: number; unit?: string; fraction?: string };
export interface MathTopic {
  title: string;
  icon: string;
  cnb: string[];
  idea: string;
  rule: string;
  model: { problem: string; steps: string[]; answer: string };
  items: [Item, Item, Item, Item];
  mistake: string;
}

export function mathLessons(week: number, topics: MathTopic[]) {
  return topics.map((topic, index) => {
    const id = `s${week}-mat-${index + 1}`;
    const cnb = topic.cnb;
    const meta = (fase: 'explorar' | 'construir' | 'aplicar' | 'comprobar') => ({ fase, areas: ['mat' as const], cnb });
    const assess = (item: Item, fase: 'construir' | 'aplicar' | 'comprobar') => {
      const guided = fase === 'construir';
      const review = fase !== 'comprobar';
      const help = { ...(guided ? { hint: topic.rule } : {}), ...(review ? { explain: item.fraction ? `El resultado completo en mínima expresión es ${item.fraction}.` : `El resultado es ${item.answer}${item.unit ?? ''}. Comprueba la operación.` } : {}) };
      if (item.fraction) {
        const [numerator, denominator] = item.fraction.split('/').map(Number);
        return S.fill({ ...meta(fase), prompt: `${item.prompt} Escribe numerador y denominador en mínima expresión.`, ...help }, {
          text: `Fracción final: [[${numerator}]] / [[${denominator}]].`,
          distractors: [String(numerator + 1), String(denominator + 1)],
        });
      }
      return S.number({ ...meta(fase), prompt: item.prompt, ...help }, { answer: item.answer, unit: item.unit });
    };
    const choiceOptions = [
      { text: topic.rule, correct: true },
      { text: topic.mistake, correct: false },
      { text: `Detenerse después de «${topic.model.steps[0]}» y declarar la tarea terminada`, correct: false },
    ];
    const shift = (week + index) % 3;
    const rotated = [...choiceOptions.slice(shift), ...choiceOptions.slice(0, shift)];
    return lesson({
      id, title: topic.title, icon: topic.icon, minutes: 14,
      gancho: topic.model.problem,
      objetivos: [topic.title],
      resumen: [topic.idea, topic.rule],
      media: {
        id: `${id}-modelo`, kind: 'diagram', title: `Modelo visual: ${topic.title}`, aspect: '16:9',
        alt: `Diagrama paso a paso que muestra cómo resolver ${topic.title.toLowerCase()} con datos y unidades legibles.`,
        brief: `Diagrama didáctico original de ${topic.title.toLowerCase()}: mostrar el problema “${topic.model.problem}”, las operaciones “${topic.model.steps.join(' → ')}” y el resultado “${topic.model.answer}”. Diferenciar dato, operación y respuesta por posición y texto; alto contraste y tipografía grande. Dimensiones: 1600x900. No usar imágenes genéricas de objetos.`,
      },
      steps: [
        S.explain({ ...meta('explorar'), title: 'Pregunta inicial', prompt: topic.model.problem }, { icon: topic.icon, body: `Antes de calcular, identifica los datos y la unidad. ${topic.idea}` }),
        S.explain({ ...meta('construir'), title: 'Regla y contraejemplo', prompt: `Aprende la regla para ${topic.title.toLowerCase()}.` }, { icon: 'Lightbulb', body: topic.rule }),
        S.cards({ ...meta('construir'), prompt: 'Voltea las tres tarjetas: concepto, regla y error frecuente.' }, { cards: [
          { front: '¿Qué representa?', back: topic.idea, icon: topic.icon },
          { front: '¿Qué procedimiento sigo?', back: topic.rule, icon: 'ListChecks' },
          { front: '¿Qué error debo evitar?', back: topic.mistake, icon: 'CircleAlert' },
        ] }),
        S.ejemplo({ ...meta('construir'), title: 'Ejemplo resuelto', prompt: 'Sigue cada operación y verifica la respuesta.' }, { icon: 'ListChecks', problem: topic.model.problem, steps: topic.model.steps.map((text) => ({ text })), answer: topic.model.answer, tip: topic.rule }),
        assess(topic.items[0], 'construir'),
        assess(topic.items[1], 'aplicar'),
        S.choice({ ...meta('aplicar'), prompt: `¿Qué procedimiento completo sirve para ${topic.title.toLowerCase()}?`, explain: topic.rule }, { options: rotated.map((item, i) => ({ id: ['a', 'b', 'c'][i], text: item.text })), correct: [(['a', 'b', 'c'] as const)[rotated.findIndex((item) => item.correct)]] }),
        assess(topic.items[2], 'comprobar'),
        assess(topic.items[3], 'comprobar'),
        S.reflect({ fase: 'reflexionar', areas: ['mat'], cnb, prompt: `Al terminar ${topic.title.toLowerCase()}, ¿qué error revisarás en tu procedimiento?` }, { statements: [topic.idea], commitments: [`Comprobaré mi respuesta: ${topic.rule}`] }),
      ],
    });
  });
}
