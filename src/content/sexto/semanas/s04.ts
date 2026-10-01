import { S, lesson, semana } from '../../dsl';

/**
 * SEMANA 4 · Unidad 1
 * Tema generador: Crecer, cuidarnos y participar
 * Las 27 lecciones de materia viven en src/content/sexto/materias/<area>/u1/s04.ts.
 */
export default semana({
  id: 's04',
  unidad: 1,
  semana: 4,
  kind: 'aprendizaje',
  temaGenerador: 'Crecer, cuidarnos y participar',
  title: 'Crecer, cuidarnos y participar',
  subtitle: 'Cambios del cuerpo, cuidado ético, información confiable, liderazgo y participación',
  icon: 'HeartHandshake',
  color: 'var(--area-cnt)',
  contexto: 'Crecer trae cambios corporales, preguntas y nuevas responsabilidades. Esta semana estudiarás la pubertad y el aparato reproductor con lenguaje científico y respetuoso, distinguirás información confiable de rumores y reconocerás cuándo conviene conversar con una persona adulta de confianza o un profesional de salud, sin intentar diagnosticar. También practicarás liderazgos que escuchan, informan y hacen participar; usarás el teatro, la voz, la música y otros saberes para comunicar cuidado. Cada cuerpo cambia a su ritmo: la variación es normal y ninguna diferencia justifica burlas, vergüenza o estereotipos.',
  ejes: ['vida-familiar', 'equidad', 'vida-ciudadana', 'seguridad'],
  media: {
    id: 's04-portada', kind: 'image', title: 'Crecer con información y apoyo', aspect: '16:9',
    alt: 'Estudiantes diversos preparan una campaña escolar con un guion, un cartel de fuentes confiables y una lista de acuerdos de respeto.',
    brief: 'Ilustración educativa luminosa de estudiantes guatemaltecos diversos preparando una campaña en un aula. En la mesa hay un guion teatral, tarjetas con los rótulos "familia", "docente" y "centro de salud", una lista de acuerdos de respeto y materiales de arte. Una docente acompaña sin dominar la actividad. Ropa completa, posturas naturales, sin representar cambios corporales de forma exagerada ni estereotipada, sin marcas.',
  },
  badge: { id: 'medalla-s04', name: 'Comunicador del cuidado', icon: 'HeartHandshake', desc: 'Completaste la semana 4 y superaste su reto' },
  lessons: [
    lesson({
      id: 's04-d5-taller',
      kind: 'taller',
      day: 5,
      title: 'Campaña: crecer con cuidado',
      icon: 'Drama',
      minutes: 19,
      gancho: '¿Cómo puede una escena breve responder una duda sobre crecer sin asustar, avergonzar ni repetir rumores?',
      objetivos: ['Crear una campaña informativa con una escena dramática científicamente correcta, respetuosa y participativa, acompañada por música elegida con criterio'],
      resumen: [
        'Una campaña de salud usa información comprobable y dice de dónde procede.',
        'Una escena informativa presenta una duda, una respuesta clara y una acción de cuidado.',
        'El lenguaje respetuoso reconoce que cada cuerpo cambia a su ritmo y evita burlas, estereotipos y diagnósticos.',
        'Un fragmento instrumental se elige por su carácter e intensidad: debe apoyar el mensaje sin tapar las voces.',
        'Un liderazgo democrático escucha al equipo, reparte tareas y revisa el producto con criterios comunes.',
      ],
      media: {
        id: 's04-d5-taller-campana', kind: 'image', title: 'Mesa de campaña escolar', aspect: '16:9',
        alt: 'Guion de una escena breve, tarjetas de fuentes confiables, títeres sencillos y una lista de revisión sobre ciencia y respeto.',
        brief: 'Vista cenital de una mesa escolar. Se ven un guion titulado "Crecer con cuidado", dos títeres de papel, tarjetas que dicen "libro de Ciencias", "persona adulta de confianza" y "centro de salud", una nota anónima marcada como rumor, y una lista de revisión con dos casillas: exactitud científica y lenguaje respetuoso. Sin imágenes anatómicas ni marcas comerciales.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:2.3.2'], ambito: 'conocer', title: 'Punto de partida · 1 min',
            prompt: 'La campaña no diagnostica ni promete que todos los cuerpos cambian igual. Presenta información general, reconoce la variación normal y orienta a pedir ayuda cuando una duda preocupa.' },
          { icon: 'ShieldCheck', body: 'Una respuesta responsable combina un dato científico sencillo, lenguaje respetuoso y una fuente confiable.', reveal: [
            { icon: 'BookOpenCheck', front: 'Dato', back: 'Debe coincidir con lo estudiado en Ciencias y no convertir una variación normal en un problema.' },
            { icon: 'HeartHandshake', front: 'Respeto', back: 'Habla de personas y cuerpos sin burlas, culpa, vergüenza ni estereotipos.' },
            { icon: 'Stethoscope', front: 'Orientación', back: 'Ante dolor, preocupación o una pregunta personal, recomienda hablar con una persona adulta de confianza o un profesional de salud.' },
          ] },
        ),
        S.project(
          { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:2.3.2', 'fc:3.1.1'], ambito: 'convivir', title: 'Etapa 1: acuerdo compartido · 2 min',
            prompt: 'En pareja, escuchen dos propuestas y acuerden una sola duda para la campaña: ritmos de la pubertad, cuidado de la intimidad o información confiable. Elijan juntos quién preguntará y quién responderá.' },
          { goal: 'Negociar un mensaje y dos roles para una escena dramática informativa.',
            steps: [
              { title: 'Escuchen', detail: 'Cada integrante propone una duda y explica por qué puede ayudar a otras personas.' },
              { title: 'Acuerden', detail: 'Elijan juntos una duda y repartan los dos roles; ninguna persona decide por todo el equipo.' },
            ],
            evidence: 'Una duda compartida y dos roles acordados.',
            rubric: ['La decisión incorpora las voces de ambas personas', 'La escena tendrá una sola idea central'] },
        ),
        S.project(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.2', 'cnt:3.3.1'], ambito: 'conocer', title: 'Etapa 2: verifica la ciencia · 2 min',
            prompt: 'Anota el dato científico que usarás y la fuente confiable que permite comprobarlo.' },
          { goal: 'Sostener la campaña informativa con información verificable.',
            steps: [
              { title: 'Dato', detail: 'Escribe un dato enseñado esta semana, sin añadir diagnósticos ni reglas absolutas.' },
              { title: 'Fuente', detail: 'Nombra el libro o lección de Ciencias y una persona adulta de confianza o profesional de salud a quien se podría consultar.' },
            ],
            evidence: 'Dato científicamente correcto y fuente confiable identificada.',
            rubric: ['El dato tiene exactitud científica', 'La fuente confiable se puede identificar'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l1', 'cnt'], cnb: ['l1:5.1.8', 'cnt:2.3.2'], ambito: 'hacer', title: 'Etapa 3: mensaje de la escena · 2 min',
            prompt: 'Escriban un mensaje de 18 a 24 palabras que pueda repartirse entre dos voces: dato científico, respeto y una orientación hacia una fuente confiable.' },
          { minWords: 18, placeholder: 'VOZ 1: Cada cuerpo...\nVOZ 2: Si algo te preocupa...',
            model: 'Cada cuerpo cambia a su ritmo. Si algo te preocupa, consulta una fuente confiable y habla con una persona adulta.',
            rubric: ['Tiene entre 18 y 24 palabras', 'Comunica un dato científico sin diagnosticar', 'Usa lenguaje respetuoso y orienta hacia una fuente confiable'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'hacer', title: 'Etapa 4: elige el fragmento · 2 min',
            prompt: 'Escuchen dos fragmentos instrumentales de cinco segundos. Elijan A o B según su carácter e intensidad y escriban una oración: “Elegimos ___ porque ___”.',
            media: {
              id: 's04-d5-taller-fragmentos', kind: 'audio', title: 'Dos fragmentos para la escena', duration: 12,
              alt: 'Fragmento A: marimba instrumental tranquila y suave. Fragmento B: percusión instrumental festiva de intensidad moderada.',
              brief: 'Audio de 12 s, sin voces ni marcas. Fragmento A: 5 s de marimba instrumental original o de dominio público, tempo lento, carácter tranquilo e intensidad suave. Pausa de 1 s. Fragmento B: 5 s de percusión instrumental original o de dominio público, tempo moderado, carácter festivo e intensidad moderada. Cierre con 1 s de silencio. Ambos fragmentos deben oírse con claridad a volumen moderado.',
            } },
          { goal: 'Valorar música breve y elegir la que apoye mejor la campaña.',
            steps: [
              { title: 'Comparen', detail: 'Identifiquen el carácter y la intensidad de A y B; no hace falta describir otros elementos.' },
              { title: 'Decidan', detail: 'Escojan un fragmento y anoten una razón de una sola oración vinculada con el mensaje, el respeto o la claridad de las voces.' },
            ],
            evidence: 'Fragmento A o B seleccionado y una oración que justifica la decisión con un criterio musical aprendido.',
            rubric: ['La razón usa carácter, intensidad o volumen', 'La elección apoya el mensaje y permite escuchar las voces'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['cnt', 'l1'], cnb: ['cnt:2.3.2', 'l1:5.1.8'], ambito: 'conocer', title: 'Control de concisión · 1 min',
            prompt: 'Antes de ensayar, ¿qué debe conservar el mensaje breve?' },
          { options: [
            { id: 'a', text: 'Dejar la duda, un dato, una fuente confiable y la orientación final' },
            { id: 'b', text: 'Agregar otros tres cambios corporales y dos consejos' },
            { id: 'c', text: 'Quitar la fuente y sustituirla por “lo vi en internet”' },
          ], correct: ['a'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['l1', 'fc', 'art'], cnb: ['l1:5.1.8', 'fc:3.1.1', 'art:3.1.2'], ambito: 'hacer', title: 'Etapa 5: ensayo breve · 1 min',
            prompt: 'Hagan una lectura en voz alta de 30 segundos: reproduzcan solo cinco segundos del fragmento elegido, deténganlo y representen los dos roles; después intercambien una observación.' },
          { goal: 'Ensayar la escena informativa con la música elegida, voz clara y escucha mutua.',
            steps: [
              { title: 'Inicien', detail: 'Usen el fragmento seleccionado durante 5 segundos y deténganlo antes de hablar para que no tape las voces.' },
              { title: 'Lean y comprueben', detail: 'Representen la escena una vez; confirmen que se entiendan la idea central y la orientación final, y que el carácter musical apoye el mensaje.' },
            ],
            evidence: 'Una lectura completa que usa cinco segundos del fragmento elegido y una observación oral.',
            rubric: ['Ambas personas cumplen el rol acordado', 'La música se detiene antes de las voces', 'El mensaje se entiende sin hablar deprisa'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['cnt', 'l1', 'fc'], cnb: ['cnt:2.3.2', 'cnt:3.3.1', 'l1:5.1.8', 'fc:3.1.1'], ambito: 'convivir', title: 'Etapa 6: revisión entre pares · 2 min',
            prompt: 'Otra pareja escucha la escena y marca solo dos criterios: exactitud científica y lenguaje respetuoso.' },
          { goal: 'Revisar la campaña informativa antes de presentarla.',
            steps: [
              { title: 'Ciencia', detail: 'Marca sí o por revisar: el dato es científicamente correcto, tiene fuente confiable y no diagnostica.' },
              { title: 'Respeto', detail: 'Marca sí o por revisar: reconoce variaciones normales y evita burlas, culpa y estereotipos.' },
            ],
            evidence: 'Dos marcas y una observación breve sobre uno de los criterios.',
            rubric: ['La revisión comprueba exactitud científica', 'La revisión comprueba respeto'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['cnt', 'l1'], cnb: ['cnt:2.3.2', 'l1:5.1.8'], ambito: 'hacer', title: 'Etapa 7: revisión dirigida · 1 min',
            prompt: 'Corrige una sola frase según la observación recibida. Conserva el mensaje entre 18 y 24 palabras y encierra el cambio.' },
          { minWords: 18, placeholder: 'Versión corregida del mensaje...',
            model: 'Cada cuerpo cambia a su ritmo. Si algo te preocupa, consulta una fuente confiable y habla con una persona adulta.',
            rubric: ['La corrección dirigida responde a la observación', 'Mantiene exactitud científica y respeto', 'Conserva la fuente confiable'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['cnt', 'l1', 'fc'], cnb: ['cnt:2.3.2', 'l1:5.1.8', 'fc:3.1.1'], ambito: 'hacer', title: 'Etapa 8: presentación final · 1 min',
            prompt: 'Representen o lean la escena final de 30 segundos con los dos roles acordados.' },
          { goal: 'Presentar una escena dramática informativa breve y revisada.',
            steps: [
              { title: 'Presenten', detail: 'Una voz plantea la duda y la otra comunica el dato, la fuente y la acción de cuidado.' },
              { title: 'Entreguen', detail: 'Junten el mensaje corregido, las dos marcas de revisión y la razón de la elección musical.' },
            ],
            evidence: 'Campaña informativa presentada y producto breve revisado.',
            rubric: ['Mantiene exactitud científica y fuente confiable', 'Usa lenguaje respetuoso', 'Ambas personas participan en la escena'] },
        ),
        S.reflect(
          { fase: 'reflexionar', areas: ['cnt', 'l1', 'fc', 'art'], cnb: ['cnt:2.3.2', 'l1:5.1.8', 'fc:3.1.1', 'art:3.1.2'], ambito: 'ser',
            prompt: 'Cierre · 1 min. Revisa tu aporte y elige un compromiso para comunicar cuidado.' },
          { statements: ['Comprobé la ciencia', 'Usé lenguaje respetuoso', 'Escuché al equipo', 'Mejoré el producto después de revisarlo'],
            commitments: ['Consultaré una fuente confiable antes de compartir información de salud', 'No haré bromas sobre los cambios del cuerpo', 'Pediré ayuda adulta o profesional ante una preocupación de salud'] },
        ),
      ],
    }),

    lesson({
      id: 's04-d5-reto',
      kind: 'reto',
      day: 5,
      title: 'Reto de la semana 4',
      icon: 'Trophy',
      minutes: 14,
      objetivos: ['Demostrar lo aprendido en las diez áreas de la semana'],
      resumen: ['Resolví situaciones nuevas sobre crecimiento, comunicación, participación, arte, movimiento y producción.'],
      media: {
        id: 's04-d5-reto', kind: 'image', title: 'Medalla Comunicador del cuidado', aspect: '1:1',
        alt: 'Medalla dorada con un libro abierto, dos globos de diálogo y manos que se apoyan.',
        brief: 'Medalla circular dorada. En el centro, un libro abierto con una marca de verificación; detrás, dos globos de diálogo y dos manos que se apoyan. Borde con un patrón geométrico inspirado en tejidos guatemaltecos. Fondo transparente, sin texto ni marcas.',
      },
      steps: [
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.4'], prompt: 'Un soporte para carteles es un prisma nonagonal. ¿Cuántos vértices tiene?' },
          { answer: 18, unit: 'vértices' },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: '¿Cuál fragmento combina diálogo y acotación con formato teatral correcto?' },
          { options: [
            { id: 'a', text: 'PAULA: (respira hondo) Voy a pedir ayuda.' },
            { id: 'b', text: 'Paula respiró hondo y dijo que iba a pedir ayuda.' },
            { id: 'c', text: '(PAULA respira hondo: voy a pedir ayuda.)' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.2'], prompt: 'Clasifica cada afirmación sobre los cambios corporales.' },
          { buckets: [
            { id: 'c', label: 'Científicamente cuidadosa', icon: 'BadgeCheck' },
            { id: 'r', label: 'Rumor o generalización', icon: 'MessageCircleWarning' },
          ], items: [
            { id: 'a', text: 'La pubertad no comienza a la misma edad en todas las personas', bucket: 'c' },
            { id: 'b', text: 'La piel con acné demuestra que alguien no se baña', bucket: 'r' },
            { id: 'd', text: 'Una duda personal de salud puede consultarse con un profesional', bucket: 'c' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.1.1'], prompt: 'Un grupo investiga cómo participan estudiantes de distintas edades en el gobierno escolar. ¿Qué ciencia social estudia principalmente los grupos y sus relaciones?' },
          { options: [
            { id: 'a', text: 'Sociología' },
            { id: 'b', text: 'Arqueología' },
            { id: 'c', text: 'Geografía física' },
          ], correct: ['a'] },
        ),
        S.fill(
          { fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.1'], prompt: 'Complete the new sentence with the correctly spelled **ee** words.' },
          { text: 'I see a [[green]] [[sheep]] near the [[tree]].', distractors: ['grin', 'ship', 'tre'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: 'La coordinadora escucha dos propuestas, publica los costos y luego organiza una votación. ¿Qué rasgo demuestra?' },
          { options: [
            { id: 'a', text: 'Liderazgo democrático con información y participación' },
            { id: 'b', text: 'Liderazgo autoritario porque permite votar' },
            { id: 'c', text: 'Falta de liderazgo porque escucha antes de decidir' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['art'], cnb: ['art:3.1.2'], prompt: 'Clasifica decisiones musicales para una campaña escolar.' },
          { buckets: [
            { id: 'a', label: 'Aporta al mensaje', icon: 'Volume2' },
            { id: 'd', label: 'Distrae o falta al respeto', icon: 'VolumeX' },
          ], items: [
            { id: 'm1', text: 'Entrada instrumental breve y de volumen moderado', bucket: 'a' },
            { id: 'm2', text: 'Letra que se burla de los cuerpos de otras personas', bucket: 'd' },
            { id: 'm3', text: 'Cierre tranquilo que permite oír la última orientación', bucket: 'a' },
          ] },
        ),
        S.fill(
          { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.3'], prompt: 'Completa con la forma de lanzamiento adecuada para una situación nueva.' },
          { text: 'Para enviar la pelota por el aire hasta una compañera distante, sin bote ni salto, uso el lanzamiento [[directo]] por arriba del hombro.', distractors: ['rodado', 'en suspensión'] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.2.1'], prompt: 'Une cada parte del mensaje oral con la manera de decirla.' },
          { pairs: [
            { id: 'a', left: '¿Dónde puedo preguntar?', right: 'Entonación ascendente de pregunta' },
            { id: 'b', left: 'Cada cuerpo tiene su ritmo.', right: 'Volumen claro y final descendente' },
            { id: 'c', left: '¡Tratémonos con respeto!', right: 'Energía expresiva sin gritar' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.5.3'], prompt: 'Antes de recomendar un cultivo nuevo, ¿qué conjunto de datos permite justificar la decisión?' },
          { options: [
            { id: 'a', text: 'Temperatura, lluvias, tipo de suelo, pendiente y disponibilidad de agua' },
            { id: 'b', text: 'Solo el color preferido de quien compra la semilla' },
            { id: 'c', text: 'Únicamente el nombre del terreno' },
          ], correct: ['a'] },
        ),
      ],
    }),
  ],

  bank: [
    S.number(
      { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.4'], prompt: 'Una pirámide decagonal tiene una base de diez lados. ¿Cuántas caras tiene en total?' },
      { answer: 11, unit: 'caras' },
    ),
    S.sort(
      { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: 'Clasifica cada línea de una escena informativa.' },
      { buckets: [
        { id: 'd', label: 'Diálogo', icon: 'MessageCircle' },
        { id: 'a', label: 'Acotación', icon: 'Drama' },
      ], items: [
        { id: 'x', text: 'JORGE: Podemos consultar el libro de Ciencias.', bucket: 'd' },
        { id: 'y', text: '(Se sientan en círculo y escuchan.)', bucket: 'a' },
      ] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.3.1'], prompt: 'Dos personas adultas cuidan a su bebé. ¿Qué decisión muestra paternidad y maternidad responsables?' },
      { options: [
        { id: 'a', text: 'Compartir alimentación, citas de salud, afecto y cuidados según sus posibilidades' },
        { id: 'b', text: 'Dejar todo el cuidado a una sola persona por costumbre' },
        { id: 'c', text: 'Atender únicamente los gastos y no dedicar tiempo ni protección' },
      ], correct: ['a'] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.1.4'], prompt: '¿Qué pregunta se puede investigar con observaciones o entrevistas en la comunidad?' },
      { options: [
        { id: 'a', text: '¿Cómo participan las familias en las reuniones del barrio?' },
        { id: 'b', text: '¿Cuál es el mejor color del mundo?' },
        { id: 'c', text: '¿Qué pensará cada persona dentro de veinte años?' },
      ], correct: ['a'] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.2.2'], prompt: 'Al recitar “abro los brazos para recibir ayuda”, ¿qué gesto corresponde al significado?' },
      { options: [
        { id: 'a', text: 'Abrir los brazos al decir “abro”' },
        { id: 'b', text: 'Dar la espalda y taparse la cara' },
        { id: 'c', text: 'Mover los pies sin relación con el verso' },
      ], correct: ['a'] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.1'], prompt: 'Choose the correct word: “I have ___ pencils: one for me and one for you.”' },
      { options: [
        { id: 'a', text: 'two' },
        { id: 'b', text: 'to' },
        { id: 'c', text: 'too' },
      ], correct: ['a'] },
    ),
    S.sort(
      { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: 'Clasifica la evidencia sobre el consejo estudiantil.' },
      { buckets: [
        { id: 'd', label: 'Gestión democrática', icon: 'Vote' },
        { id: 'a', label: 'Gestión autoritaria', icon: 'Gavel' },
      ], items: [
        { id: 'x', text: 'Publica el presupuesto y recibe preguntas', bucket: 'd' },
        { id: 'y', text: 'Cambia las reglas para impedir nuevas candidaturas', bucket: 'a' },
      ] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['art'], cnb: ['art:3.1.2'], prompt: '¿Qué reseña musical expresa una valoración con razones?' },
      { options: [
        { id: 'a', text: 'La elegiría: su tempo moderado deja oír el diálogo y su letra habla de apoyo' },
        { id: 'b', text: 'Es la mejor porque sí' },
        { id: 'c', text: 'Es mala porque no está de moda' },
      ], correct: ['a'] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.3'], prompt: '¿Qué distingue una ejecución en suspensión de una ejecución directa por arriba del hombro?' },
      { options: [
        { id: 'a', text: 'Los pies se separan momentáneamente del suelo antes de soltar el implemento' },
        { id: 'b', text: 'El implemento avanza siempre pegado al suelo' },
        { id: 'c', text: 'Se elimina el movimiento del tronco y de las piernas' },
      ], correct: ['a'] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.5.3'], prompt: 'Un suelo deja escapar el agua muy rápido. ¿Qué descripción corresponde?' },
      { options: [
        { id: 'a', text: 'Es arenoso y puede necesitar riego más frecuente' },
        { id: 'b', text: 'Es arcilloso y siempre queda encharcado' },
        { id: 'c', text: 'El tipo de suelo no influye en la producción' },
      ], correct: ['a'] },
    ),
  ],
});
