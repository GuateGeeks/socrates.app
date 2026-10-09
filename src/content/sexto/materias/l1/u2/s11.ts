import { lesson, S } from '../../../../dsl';

export interface Unit2Topic {
  area: 'l1' | 'fc' | 'art'; week: number; number: number;
  title: string; icon: string; cnb: string[];
  question: string; idea: string; method: string; example: string;
  guided: string; answer: string; wrong: [string, string];
  task: string; model: string;
  transfer: string; transferAnswer: string; transferWrong: [string, string];
  exit: string; exitAnswer: string; exitWrong: [string, string];
  trueStatement: string; falseStatement: string;
  mediaScript?: string;
}

/** Cada dato es una decisión de autoría; esta función conserva las nueve etapas comprobables. */
export function makeUnit2Lesson(t: Unit2Topic) {
  const id = `s${t.week}-${t.area}-${t.number}`;
  const meta = (fase: 'explorar' | 'construir' | 'aplicar' | 'comprobar') => ({ fase, areas: [t.area], cnb: t.cnb });
  const listeningMedia = t.area === 'l1' && t.week === 11 && t.number <= 4;
  const mediaKind = listeningMedia ? (t.number <= 2 ? 'audio' : 'video') : 'image';
  const choices = (answer: string, wrong: [string, string], offset: number) => {
    const position = (t.week + t.number + offset) % 3;
    const texts = [wrong[0], wrong[1]];
    texts.splice(position, 0, answer);
    return { options: texts.map((text, i) => ({ id: ['a', 'b', 'c'][i], text })), correct: [['a', 'b', 'c'][position]] };
  };
  return lesson({
    id, title: t.title, icon: t.icon, minutes: 14,
    gancho: t.question,
    objetivos: [t.idea, t.method],
    resumen: [t.idea, t.method],
    media: listeningMedia
      ? { id: `${id}-modelo`, kind: mediaKind, title: `Escucha y observa: ${t.title}`, duration: 35,
          ...(mediaKind === 'video' ? { aspect: '16:9' as const } : {}),
          alt: `Transcripción y descripción accesible: ${t.mediaScript ?? t.example}`,
          brief: `${mediaKind === 'audio' ? 'Audio' : 'Video'} original de 35 s en español guatemalteco, con voces naturales y sin música que oculte palabras. Guion exacto: «${t.mediaScript ?? t.example}». ${mediaKind === 'video' ? 'Mostrar gestos y expresiones que acompañan las frases, subtítulos completos y planos del rostro y manos.' : 'Añadir transcripción íntegra visible.'} Dejar dos segundos de silencio tras cada intervención para que el estudiante recuerde lo oído. No mostrar la respuesta de las preguntas de salida.` }
      : { id: `${id}-modelo`, kind: 'image', title: `Modelo visual: ${t.title}`, aspect: '4:3',
          alt: `Dos escenas que muestran cómo resolver el caso «${t.example}» siguiendo esta idea: ${t.idea}`,
          brief: `Crear una lámina didáctica original de 1600 × 1200 píxeles, con letra legible y alto contraste. Mostrar el caso «${t.example}» en dos cuadros: primero la observación y después la decisión explicada con flechas. Incluir la idea «${t.idea}». Personas y objetos de Guatemala contemporánea sin estereotipos ni marcas. No incorporar la respuesta de las preguntas de salida. Descripción alternativa equivalente y texto editable para revisión docente.` },
    steps: [
      S.explain({ ...meta('explorar'), title: 'Observa el problema', prompt: t.question, ambito: 'conocer' },
        { icon: t.icon, body: `Antes de responder, observa esta situación: ${t.example}` }),
      S.explain({ ...meta('construir'), title: 'La idea clave', prompt: `Para comprender «${t.example}», identifica esta idea y su procedimiento.`, ambito: 'conocer' },
        { icon: 'Lightbulb', body: `**${t.idea}** ${t.method}` }),
      S.ejemplo({ ...meta('construir'), title: 'Ejemplo resuelto', prompt: `Así se piensa con un caso: ${t.example}`, ambito: 'hacer' },
        { icon: 'ListChecks', problem: t.example, steps: [{ text: `Identifico qué sucede: ${t.example}`, why: t.idea }, { text: `Resuelvo el caso: ${t.model}`, why: t.method }], answer: t.model }),
      S.choice({ ...meta('construir'), prompt: t.guided, hint: `Vuelve a la idea clave: ${t.idea}`, explain: t.method, ambito: 'hacer' },
        choices(t.answer, t.wrong, 0)),
      S.choice({ ...meta('aplicar'), prompt: t.transfer, explain: `La opción adecuada es: ${t.transferAnswer}`, ambito: 'hacer' },
        choices(t.transferAnswer, t.transferWrong, 1)),
      ...(t.area === 'art' ? [] : [S.write({ ...meta('aplicar'), prompt: t.task, ambito: 'hacer' },
        { minWords: 20, placeholder: 'Escribe tu respuesta y explica por qué...', model: t.model,
          rubric: ['Uso la idea de la lección', 'Doy una razón basada en el caso', 'La respuesta es clara y respetuosa'] })]),
      ...(t.area === 'art'
        ? [S.project({ ...meta('aplicar'), title: `Crea: ${t.title}`, prompt: t.task, ambito: 'hacer' },
            { goal: t.task, steps: [{ title: 'Prepara', detail: t.method }, { title: 'Crea y prueba', detail: `${t.task} Compara el resultado con el modelo: ${t.model}` }],
              evidence: `Producto propio en el cuaderno o con materiales disponibles: ${t.task}`, rubric: ['Produje una evidencia propia', 'Puedo explicar mis decisiones', 'Revisé el resultado con un criterio de la lección'] })]
        : t.area === 'fc'
          ? [S.dilemma({ ...meta('aplicar'), title: `Decisión: ${t.title}`, prompt: `Explora qué podría pasar después en este caso: ${t.transfer}`, ambito: 'convivir' },
              { scene: { icon: t.icon, text: t.transfer }, options: [
                { id: 'a', text: t.transferWrong[0], consequence: `Esta respuesta deja sin resolver una parte importante del caso. ${t.idea}`, values: ['Revisar consecuencias'], constructive: false },
                { id: 'b', text: t.transferAnswer, consequence: `La decisión permite actuar con más cuidado: ${t.method}`, values: ['Diálogo', 'Responsabilidad'], constructive: true },
                { id: 'c', text: t.transferWrong[1], consequence: `Conviene detenerse y escuchar a las personas afectadas. ${t.method}`, values: ['Escucha'], constructive: false },
              ] })]
          : [S.explain({ ...meta('aplicar'), title: 'Revisa tu decisión', prompt: `Revisa tu respuesta sobre «${t.title}» con el criterio aprendido.`, ambito: 'conocer' },
              { icon: 'SearchCheck', body: `La respuesta necesita una razón comprobable. ${t.method}` })]),
      S.write({ ...meta('comprobar'), prompt: `${t.exit} Explica brevemente la razón de tu respuesta.` },
        { minWords: 12, placeholder: 'Respondo y explico mi razón...', model: `${t.exitAnswer}. ${t.method}`,
          rubric: ['Respondí la pregunta con precisión', 'Expliqué por qué, con una idea de la lección'] }),
      S.tf({ ...meta('comprobar'), prompt: `Sobre «${t.title}», decide si cada afirmación nueva es verdadera o falsa.` },
        { statements: (t.week + t.number) % 2 === 0
          ? [{ text: t.trueStatement, answer: true }, { text: t.falseStatement, answer: false, why: t.idea }]
          : [{ text: t.falseStatement, answer: false, why: t.idea }, { text: t.trueStatement, answer: true }] }),
    ],
  });
}

export default [
  makeUnit2Lesson({ area: 'l1', week: 11, number: 1, title: 'Escuchar para encontrar la idea principal', icon: 'Ear', cnb: ['l1:1.1.1'],
    mediaScript: 'Atención, estudiantes: este jueves limpiaremos el patio escolar. Traigan una bolsa reutilizable y reúnanse a las nueve junto a la biblioteca. Repetimos: limpieza del patio, jueves a las nueve.',
    question: 'Después de oír un anuncio sobre una jornada de limpieza, ¿qué dato contarías primero?',
    idea: 'La idea principal dice de qué trata todo el mensaje; los detalles precisan cuándo, dónde o cómo.', method: 'Pregunto «¿qué quiere comunicar la persona?» y luego anoto dos datos que apoyan esa respuesta.',
    example: 'Un aviso invita a limpiar el patio escolar el jueves y a llevar una bolsa reutilizable.', model: 'Idea principal: se invita a limpiar el patio. Detalles: será el jueves y conviene llevar una bolsa reutilizable.',
    guided: 'Si el aviso dice «habrá lectura compartida el lunes en la biblioteca», ¿cuál es la idea principal?', answer: 'Habrá una lectura compartida', wrong: ['La biblioteca queda lejos', 'El lunes es el primer día de clases'],
    transfer: 'Escuchas «traigan agua para la caminata del viernes». ¿Qué deberías recordar primero?', transferAnswer: 'Llevar agua para la caminata', transferWrong: ['Que toda caminata es larga', 'Que el viernes no hay clase'],
    task: 'Escribe la idea principal y dos detalles de un aviso escolar que recuerdes o inventa uno breve.',
    exit: 'Un mensaje explica cómo separar papel y plástico. ¿Cuál resume mejor el mensaje?', exitAnswer: 'Cómo separar materiales para reciclar', exitWrong: ['Qué color tiene el papel', 'Dónde se fabrica el plástico'],
    trueStatement: 'La idea principal abarca el mensaje completo.', falseStatement: 'Un dato de fecha siempre es la idea principal.' }),
  makeUnit2Lesson({ area: 'l1', week: 11, number: 2, title: 'Escuchar, recordar y distinguir sonidos', icon: 'AudioLines', cnb: ['l1:1.1.2'],
    mediaScript: 'Primera voz: abre el cuaderno, dibuja el río y marca el puente. Pausa. Segunda voz: abre el cuaderno, dibuja el río y marca el puente. Después una voz pregunta: ¿dije río o ruido?',
    question: '¿Cómo compruebas que oíste bien una instrucción con tres pasos?', idea: 'Las destrezas de escucha incluyen conciencia auditiva (atender al sonido), percepción (reconocerlo), discriminación (distinguir sonidos próximos) y memoria auditiva (retener su orden).', method: 'Miro a quien habla, separo las acciones, distingo palabras parecidas, repito mentalmente el orden y pido aclaración cuando hace falta.',
    example: 'Una compañera dice: «abre el cuaderno, dibuja el río y marca el puente».', model: 'Repito en orden: abrir cuaderno, dibujar río, marcar puente. Si no oigo «río», pregunto antes de dibujar.',
    guided: 'Oyes «primero observa, después dibuja». ¿Qué acción va antes?', answer: 'Observar', wrong: ['Dibujar', 'Entregar'],
    transfer: 'No distingues si dijeron «casa» o «taza». ¿Qué haces?', transferAnswer: 'Pides que repitan la palabra en contexto', transferWrong: ['Inventas una palabra', 'Ignoras toda la instrucción'],
    task: 'Redacta una instrucción oral de tres pasos y explica cómo la recordarías.', exit: '¿Qué habilidad ayuda a mantener el orden de tres indicaciones escuchadas?', exitAnswer: 'La memoria auditiva', exitWrong: ['La lectura rápida', 'La escritura decorativa'],
    trueStatement: 'Pedir que repitan una palabra dudosa ayuda a comprender.', falseStatement: 'Discriminar sonidos significa adivinar sin volver a escuchar.' }),
  makeUnit2Lesson({ area: 'l1', week: 11, number: 3, title: 'Reconocer la intención al escuchar y mirar', icon: 'MessageSquare', cnb: ['l1:1.1.3'],
    mediaScript: 'Escena uno: una niña mira al cielo, señala nubes oscuras y dice con voz preocupada: «Va a llover; guardemos los libros». Escena dos: la misma niña sonríe y pregunta: «¿Vamos a jugar bajo techo?»',
    question: 'La misma frase puede sonar como pregunta o advertencia. ¿Qué cambia?', idea: 'La intención de un mensaje se reconoce por palabras, entonación, expresión facial y contexto.', method: 'Comparo lo dicho con la voz y el gesto; luego decido si informa, pregunta, invita o advierte.',
    example: 'Una niña señala una nube oscura y dice «va a llover» con tono de advertencia.', model: 'Las palabras informan sobre el clima; el gesto y el tono indican que quiere que busquemos resguardo.',
    guided: 'Alguien sonríe y dice «¿vienes al juego?». ¿Qué intención predomina?', answer: 'Invitar', wrong: ['Prohibir', 'Narrar un hecho pasado'],
    transfer: 'Una persona señala un piso mojado y dice «cuidado». ¿Cómo interpretas el mensaje?', transferAnswer: 'Como advertencia para evitar un resbalón', transferWrong: ['Como invitación a correr', 'Como relato de una fiesta'],
    task: 'Escribe una frase que cambie de intención según el tono o el gesto y describe ambos casos.', exit: 'Una voz interrogativa dice «¿ya salimos?». ¿Qué intención muestra?', exitAnswer: 'Preguntar', exitWrong: ['Ordenar silencio', 'Describir un paisaje'],
    trueStatement: 'El contexto ayuda a interpretar la intención.', falseStatement: 'Los gestos nunca aportan información al mensaje oral.' }),
  makeUnit2Lesson({ area: 'l1', week: 11, number: 4, title: 'Cuando el tono y el gesto concuerdan', icon: 'Hand', cnb: ['l1:1.2.2'],
    mediaScript: 'Escena uno: un alumno abre las manos, sonríe y dice con voz cálida: «Todos pueden participar». Escena dos: otro mira al piso y dice con voz entrecortada: «Todo está bien». La cámara permite ver gesto y postura sin etiquetar emociones.',
    question: '¿Creerías a alguien que dice «estoy tranquilo» mientras tiembla y grita?', idea: 'Hay congruencia cuando las palabras, el tono y los gestos comunican una intención compatible.', method: 'Describo cada señal sin juzgar a la persona; si hay duda, pregunto con respeto qué quiso expresar.',
    example: 'Un estudiante dice «pueden participar» con voz amable y abre las manos hacia el grupo.', model: 'Las palabras invitan; la voz amable y las manos abiertas apoyan esa invitación.',
    guided: 'Una expositora anuncia una buena noticia sonriendo y con voz animada. ¿Hay congruencia?', answer: 'Sí: las señales acompañan el contenido', wrong: ['No: sonreír siempre contradice un anuncio', 'No se puede considerar la voz'],
    transfer: 'Un compañero dice «todo está bien» con voz entrecortada. ¿Qué respuesta es respetuosa?', transferAnswer: 'Preguntarle en privado si necesita apoyo', transferWrong: ['Burlarse de su voz', 'Declarar delante del grupo que miente'],
    task: 'Describe una escena con palabras, tono y gesto congruentes; después propón una pregunta para aclarar una escena incongruente.', exit: 'Una invitación dicha con sonrisa y brazos abiertos muestra...', exitAnswer: 'Señales verbales y no verbales congruentes', exitWrong: ['Una contradicción segura', 'Ausencia de comunicación'],
    trueStatement: 'Se puede preguntar con respeto cuando las señales no coinciden.', falseStatement: 'Un gesto aislado prueba con certeza lo que siente otra persona.' }),
  makeUnit2Lesson({ area: 'l1', week: 11, number: 5, title: 'Abrir una exposición con una pregunta', icon: 'Megaphone', cnb: ['l1:2.2.1'],
    question: '¿Qué inicio te haría escuchar una exposición sobre el agua de tu comunidad?', idea: 'Una apertura interesante presenta el tema y despierta curiosidad sin prometer datos que no se comprobarán.', method: 'Inicio con una pregunta cercana o un objeto, anticipo el tema y paso a la primera idea.',
    example: 'Una exposición trata sobre ahorrar agua en la escuela.', model: '«¿Cuánta agua se desperdicia cuando dejamos el chorro abierto? Hoy veremos tres maneras de cuidarla.»',
    guided: '¿Cuál apertura invita a pensar en el tema del reciclaje?', answer: '«¿A dónde va el papel que tiramos? Hoy seguiremos su camino.»', wrong: ['«Mi tema es algo.»', '«No sé qué decir.»'],
    transfer: 'Vas a hablar de la biblioteca. ¿Qué comienzo es pertinente?', transferAnswer: '«¿Qué historia te gustaría encontrar aquí? Revisemos cómo elegir un libro.»', transferWrong: ['«Todos deben leer el mismo libro que yo.»', '«Después hablaré de fútbol.»'],
    task: 'Escribe una apertura de dos frases para una exposición sobre un tema de tu comunidad.', exit: '¿Qué debe hacer una buena primera frase?', exitAnswer: 'Despertar curiosidad sobre el tema real', exitWrong: ['Revelar todas las conclusiones', 'Cambiar a un tema sin relación'],
    trueStatement: 'Una pregunta cercana puede iniciar una exposición.', falseStatement: 'Una apertura eficaz necesita exagerar datos aunque no sean ciertos.' }),
];
