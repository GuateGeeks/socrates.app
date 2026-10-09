import { lesson, S } from '../../../../dsl';

type Choice = { prompt: string; correct: string; wrong: [string, string] };
export interface ProductivityTopic {
  title: string;
  cnb: string[];
  principle: string;
  method: string;
  model: { case: string; steps: string[]; result: string };
  guided: [{ left: string; right: string }, { left: string; right: string }];
  apply: Choice;
  exit: [Choice, { text: string; answer: boolean; why: string }];
  contrast: { text: string; answer: boolean; why: string };
}
function choice(item: Choice, shift: number) {
  const entries = [{ text: item.correct, correct: true }, { text: item.wrong[0], correct: false }, { text: item.wrong[1], correct: false }];
  const rotated = [...entries.slice(shift), ...entries.slice(0, shift)];
  const ids = ['a', 'b', 'c'];
  return { options: rotated.map((entry, i) => ({ id: ids[i], text: entry.text })), correct: [ids[rotated.findIndex((entry) => entry.correct)]] };
}
export function productivityLesson(week: number, topic: ProductivityTopic) {
  const id = `s${week}-pyd-1`;
  const meta = (fase: 'explorar' | 'construir' | 'aplicar' | 'comprobar') => ({ fase, areas: ['pyd' as const], cnb: topic.cnb });
  return [lesson({
    id, title: topic.title, icon: 'Sprout', minutes: 14,
    gancho: topic.model.case, objetivos: [topic.title], resumen: [topic.principle, topic.method],
    media: { id: `${id}-caso`, kind: 'diagram', title: `Caso de proyecto: ${topic.title}`, aspect: '16:9',
      alt: `Caso simulado que muestra una necesidad, una propuesta y criterios de revisión para ${topic.title.toLowerCase()}.`,
      brief: `Diagrama de decisiones para un caso simulado: “${topic.model.case}”. Tres recuadros muestran “${topic.model.steps.join('”; “')}” y una salida “${topic.model.result}”. Etiquetar claramente hechos, propuestas y datos que faltan. Dimensiones: 1600x900, alto contraste y texto grande. No representar a una comunidad real sin fuente verificada.`,
    },
    steps: [
      S.explain({ ...meta('explorar'), title: 'Situación inicial', prompt: topic.model.case }, { icon: 'Search', body: topic.principle }),
      S.explain({ ...meta('construir'), title: 'Método para decidir', prompt: 'Conoce los criterios antes de decidir.' }, { icon: 'ListChecks', body: topic.method }),
      S.cards({ ...meta('construir'), prompt: 'Revisa tres criterios antes de tomar una decisión.' }, { cards: [
        { front: '¿Qué principio importa?', back: topic.principle, icon: 'Lightbulb' },
        { front: '¿Cómo decido?', back: topic.method, icon: 'ListChecks' },
        { front: '¿Qué permite decir el caso?', back: topic.model.result, icon: 'Search' },
      ] }),
      S.ejemplo({ ...meta('construir'), title: 'Modelo resuelto', prompt: 'Observa cómo se usa evidencia sin inventar resultados.' }, { icon: 'Lightbulb', problem: topic.model.case, steps: topic.model.steps.map((text) => ({ text })), answer: topic.model.result, tip: topic.method }),
      S.match({ ...meta('construir'), prompt: 'Con ayuda, relaciona cada elemento con su función.', hint: topic.method, explain: `${topic.guided[0].left}: ${topic.guided[0].right}. ${topic.guided[1].left}: ${topic.guided[1].right}.` }, { leftTitle: 'Elemento', rightTitle: 'Función', pairs: topic.guided.map((pair, i) => ({ id: String(i), ...pair })) }),
      S.choice({ ...meta('aplicar'), prompt: topic.apply.prompt, explain: `La opción viable es: ${topic.apply.correct}.` }, choice(topic.apply, week % 3)),
      S.project({ ...meta('aplicar'), title: 'Miniproducto individual · 3 min', prompt: `En una hoja, aplica ${topic.title.toLowerCase()} al caso simulado. Conserva el papel para revisarlo; esta actividad no captura ni almacena la hoja.` }, {
        goal: `Preparar una decisión breve y revisable sobre: ${topic.model.case}`,
        steps: [
          { title: 'Dato disponible', detail: `Anota el dato del caso que sí puedes usar: ${topic.guided[0].left}.` },
          { title: 'Decisión provisional', detail: `Escribe una propuesta que siga este criterio: ${topic.method}` },
          { title: 'Límite y revisión', detail: 'Añade qué dato faltaría consultar antes de afirmar un resultado real.' },
        ],
        evidence: 'Una ficha breve en papel con dato, propuesta provisional y límite; se conserva fuera de la app.',
        rubric: ['Separé un dato suministrado de una suposición', 'Propuse una acción viable y segura', 'Indiqué qué falta verificar'],
      }),
      S.choice({ ...meta('comprobar'), prompt: topic.exit[0].prompt }, choice(topic.exit[0], (week + 1) % 3)),
      S.tf({ ...meta('comprobar'), prompt: 'Evalúa dos casos nuevos sin ayuda.' }, { statements: [topic.exit[1], topic.contrast] }),
      S.reflect({ fase: 'reflexionar', areas: ['pyd'], cnb: topic.cnb, prompt: 'Piensa en una decisión que podrías revisar con evidencia.' }, { statements: [topic.principle], commitments: [topic.method] }),
    ],
  })];
}
