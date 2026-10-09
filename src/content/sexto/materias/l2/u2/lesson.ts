import { lesson, S } from '../../../../dsl';

type Choice = { prompt: string; correct: string; wrong: [string, string] };
export interface LanguageTopic {
  title: string;
  cnb: string[];
  idea: string;
  rule: string;
  model: { problem: string; steps: string[]; answer: string };
  guided: [{ left: string; right: string }, { left: string; right: string }];
  apply: Choice;
  exits: [Choice, { text: string; answer: boolean; why: string }];
  contrast: { text: string; answer: boolean; why: string };
  production?: { prompt: string; model: string; rubric: string[] };
}

function choices(item: Choice, shift: number) {
  const entries = [{ text: item.correct, correct: true }, { text: item.wrong[0], correct: false }, { text: item.wrong[1], correct: false }];
  const rotated = [...entries.slice(shift), ...entries.slice(0, shift)];
  const ids = ['a', 'b', 'c'];
  return { options: rotated.map((entry, i) => ({ id: ids[i], text: entry.text })), correct: [ids[rotated.findIndex((entry) => entry.correct)]] };
}

export function languageLessons(week: number, topics: LanguageTopic[]) {
  return topics.map((topic, index) => {
    const id = `s${week}-l2-${index + 1}`;
    const meta = (fase: 'explorar' | 'construir' | 'aplicar' | 'comprobar') => ({ fase, areas: ['l2' as const], cnb: topic.cnb });
    const oral = week <= 15;
    const audio = (suffix: string, script: string) => ({
      id: `${id}-${suffix}`, kind: 'audio' as const, title: `Guion oral: ${topic.title}`, duration: 25,
      alt: `Lectura pausada del caso de ${topic.title.toLowerCase()}, con transcripción visible en la consigna.`,
      brief: `Audio MP3 de 25 s con voz adulta, ritmo claro y pausas entre ideas. Texto exacto: “${script}”. Accesibilidad: transcripción íntegra visible en la consigna, control para repetir y guion exacto para subtítulos. Producción en español del corpus suministrado; si se adapta a idioma maya, validar guion y pronunciación con hablantes competentes antes de grabar.`,
    });
    return lesson({
      id, title: topic.title, icon: 'MessagesSquare', minutes: 14,
      gancho: topic.model.problem, objetivos: [topic.title], resumen: [topic.idea, topic.rule],
      media: { id: `${id}-guia`, kind: 'diagram', title: `Guía visual: ${topic.title}`, aspect: '16:9',
        alt: `Dos ejemplos legibles para practicar ${topic.title.toLowerCase()} con un procedimiento y una respuesta.`,
        brief: `Infografía original de ${topic.title.toLowerCase()}. Mostrar el corpus exacto “${topic.model.problem}” y la solución “${topic.model.answer}”; colocar los pasos “${topic.model.steps.join(' → ')}” en orden de lectura. Usar letra grande, contraste alto, dos columnas y subtítulos textuales. Dimensiones: 1600x900. No atribuir pronunciación o reglas a un idioma maya sin validación de hablantes.`,
      },
      steps: [
        S.explain({ ...meta('explorar'), title: oral ? 'Lee la transcripción y prepara la escucha' : 'Observa el corpus', prompt: topic.model.problem, ...(oral ? { media: audio('modelo-audio', topic.model.problem) } : {}) }, { icon: oral ? 'Ear' : 'Eye', body: topic.idea }),
        S.explain({ ...meta('construir'), title: 'Regla de trabajo', prompt: 'Aplica esta regla al corpus suministrado.' }, { icon: 'BookOpen', body: topic.rule }),
        S.cards({ ...meta('construir'), prompt: 'Voltea las tres pistas antes de practicar.' }, { cards: [
          { front: '¿Qué observo?', back: topic.idea, icon: 'Eye' },
          { front: '¿Qué procedimiento uso?', back: topic.rule, icon: 'ListChecks' },
          { front: '¿Qué muestra el caso?', back: topic.model.answer, icon: 'MessagesSquare' },
        ] }),
        S.ejemplo({ ...meta('construir'), title: 'Ejemplo resuelto', prompt: 'Sigue el razonamiento antes de responder.' }, { icon: 'Search', problem: topic.model.problem, steps: topic.model.steps.map((text) => ({ text })), answer: topic.model.answer, tip: topic.rule }),
        S.match({ ...meta('construir'), prompt: `Con ayuda, relaciona las piezas de ${topic.title.toLowerCase()}.`, hint: topic.rule, explain: `${topic.guided[0].left} se relaciona con ${topic.guided[0].right}; ${topic.guided[1].left} con ${topic.guided[1].right}.` }, { leftTitle: 'Pista', rightTitle: 'Interpretación', pairs: topic.guided.map((pair, i) => ({ id: String(i), ...pair })) }),
        S.choice({ ...meta('aplicar'), prompt: topic.apply.prompt, explain: `Respuesta: ${topic.apply.correct}. ${topic.rule}`, ...(oral ? { media: audio('aplicacion-audio', topic.apply.prompt) } : {}) }, choices(topic.apply, (week + index) % 3)),
        ...(oral ? [S.project({ ...meta('aplicar'), title: 'Práctica oral individual · 2 min', prompt: 'Usa el caso suministrado. Puedes ensayar en voz baja si necesitas privacidad. La app no graba ni almacena tu voz.' }, {
          goal: `Explicar oralmente en 30 segundos una idea sobre: ${topic.model.problem}`,
          steps: [
            { title: 'Organiza', detail: `Elige una idea verificable: ${topic.model.answer}` },
            { title: 'Ensaya', detail: 'Di la idea, una razón y una pregunta o conclusión en aproximadamente 30 segundos.' },
            { title: 'Revisa', detail: 'Comprueba que distinguiste lo dicho en el caso de tu propia opinión.' },
          ],
          evidence: 'Ensayo oral individual y autoevaluación en la app; no se crea grabación.',
          rubric: ['Mi voz fue clara', 'Usé información del caso sin inventar datos', 'Expliqué una razón o formulé una pregunta pertinente'],
        })] : [S.write({ ...meta('aplicar'), title: 'Producción escrita breve', prompt: topic.production!.prompt }, {
          minWords: 16, placeholder: 'Escribe dos oraciones y explica tu elección.', model: topic.production!.model, rubric: topic.production!.rubric,
        })]),
        S.choice({ ...meta('comprobar'), prompt: topic.exits[0].prompt }, choices(topic.exits[0], (week + index + 1) % 3)),
        S.tf({ ...meta('comprobar'), prompt: 'Decide sobre estos dos casos nuevos sin pistas.' }, { statements: [topic.exits[1], topic.contrast] }),
        S.reflect({ fase: 'reflexionar', areas: ['l2'], cnb: topic.cnb, prompt: '¿Qué pista usarás la próxima vez?' }, { statements: [topic.idea], commitments: [topic.rule] }),
      ],
    });
  });
}
