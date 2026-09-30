import { S, lesson } from '../dsl';

/**
 * Diagnóstico inicial (día 0 de la semana 1). Mide el punto de partida en aprendizajes de
 * quinto grado que sostienen los indicadores de sexto. No da medalla ni penaliza: sus
 * resultados alimentan el repaso inteligente y la vista docente.
 */
export const diagnostico = lesson({
  id: 's01-d0-diagnostico',
  title: '¿Desde dónde empiezo?',
  icon: 'Compass',
  minutes: 10,
  kind: 'diagnostico',
  day: 0,
  gancho: 'Antes de empezar el año, veamos qué recuerdas de quinto grado.',
  objetivos: ['Mostrar lo que ya sabes', 'Descubrir qué conviene repasar'],
  resumen: ['Hice mi diagnóstico inicial: ahora sé por dónde empezar a repasar.'],
  media: {
    id: 's01-d0-bienvenida', kind: 'video', title: 'Bienvenida a Sexto', aspect: '16:9', duration: 50,
    alt: 'Tzunún, la mascota colibrí, da la bienvenida al año escolar y explica cómo funciona la plataforma.',
    brief: 'Animación 2D de 50 s con la mascota Tzunún (colibrí verde con pecho rojo). Muestra el camino del año (4 unidades, 40 semanas), una lección con sus fases (Explorar, Construir, Reto, Comprobar, Reflexionar), el Repaso inteligente y el Cuaderno. Tono cálido, voz infantil, subtítulos en español.',
  },
  steps: [
    S.explain({ fase: 'explorar', areas: ['fc', 'l1'], cnb: [], prompt: '¡Bienvenida y bienvenido a **Sexto Primaria**! Este diagnóstico **no es un examen**: nos ayuda a saber qué recuerdas.' },
      { icon: 'Compass', body: 'Responde con calma. Si no sabes algo, está bien: el **Repaso inteligente** te ayudará después.' }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.4'], prompt: 'Calcula: **125 × 4 + 30 ÷ 5**', explain: 'Primero multiplicaciones y divisiones: 500 + 6 = 506.' },
      { answer: 506, misconceptions: [{ value: 106, msg: 'Recuerda: se multiplica y divide antes de sumar.' }] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.4.1'], prompt: '¿Qué fracción es equivalente a **2/4**?' },
      { options: [{ id: 'a', text: '1/2' }, { id: 'b', text: '2/8' }, { id: 'c', text: '4/2' }], correct: ['a'] }),
    S.slider({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.5.1'], prompt: 'Ubica **0.75** en la recta numérica.' },
      { min: 0, max: 1, step: 0.05, answer: 0.75, start: 0, visual: 'line', ticks: [{ value: 0, label: '0' }, { value: 0.5, label: '0.5' }, { value: 1, label: '1' }] }),
    S.highlight({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.1.1'], prompt: 'Toca los **sustantivos** (nombres de personas, animales, cosas o lugares).' },
      { text: 'La {niña} llevó su {mochila} al {mercado} de {Chichicastenango}.', target: 'sustantivos' }),
    S.reading({ fase: 'comprobar', areas: ['l1', 'cnt'], cnb: ['l1:4.1.1'], prompt: 'Lee y responde.' },
      { genre: 'Texto informativo', passage: 'El quetzal vive en los bosques nubosos de Guatemala. Se alimenta principalmente de frutos, como el aguacatillo. Es el ave nacional y aparece en la bandera y en la moneda.',
        questions: [
          { q: '¿De qué se alimenta principalmente el quetzal?', options: [{ id: 'a', text: 'De frutos como el aguacatillo' }, { id: 'b', text: 'De peces' }, { id: 'c', text: 'De semillas de maíz' }], correct: 'a' },
          { q: '¿Dónde vive el quetzal?', options: [{ id: 'a', text: 'En el desierto' }, { id: 'b', text: 'En los bosques nubosos' }, { id: 'c', text: 'En la playa' }], correct: 'b' },
        ] }),
    S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.1.2'], prompt: 'Clasifica a los animales.' },
      { buckets: [{ id: 'v', label: 'Vertebrados', icon: 'Bone' }, { id: 'i', label: 'Invertebrados', icon: 'Bug' }],
        items: [{ id: 'a', text: 'Jaguar', bucket: 'v' }, { id: 'b', text: 'Mariposa', bucket: 'i' }, { id: 'c', text: 'Tortuga', bucket: 'v' }, { id: 'd', text: 'Lombriz', bucket: 'i' }] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.4'], prompt: '¿Cuáles son los cuatro pueblos de Guatemala?' },
      { options: [{ id: 'a', text: 'Maya, garífuna, xinka y ladino/mestizo' }, { id: 'b', text: 'Maya, azteca, inca y ladino' }, { id: 'c', text: 'Solo el pueblo maya' }], correct: ['a'] }),
    S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.1'], prompt: 'Complete in English.' },
      { text: 'Good [[morning]]! My name [[is]] Ana.', distractors: ['are', 'night'] }),
    S.reflect({ fase: 'reflexionar', ambito: 'ser', areas: ['fc'], cnb: [], prompt: '¿Cómo te sientes al empezar sexto grado?' },
      { statements: ['Me siento con ganas de aprender', 'Sé pedir ayuda cuando algo me cuesta', 'Puedo organizar mi tiempo para estudiar un poco cada día'],
        commitments: ['Haré una lección cada día de clases', 'Usaré el Repaso inteligente cada semana', 'Anotaré mis dudas para preguntarlas'] }),
  ],
});
