import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 14 · Unidad 2 "Consolidando nuestras relaciones"
 * Tema generador: Decido con información
 * Incluye contenidos sensibles del CNB (VIH, drogas): enfoque científico, preventivo y sin estigma.
 */
export default semana({
  id: 's14',
  unidad: 2,
  semana: 14,
  kind: 'aprendizaje',
  temaGenerador: 'Decido con información',
  title: 'Decido con información',
  subtitle: 'Historia y fuentes, salud, operaciones, liderazgo y proyecto de vida',
  icon: 'Search',
  color: 'var(--area-ccss)',
  contexto: 'Cada día recibimos información: en la radio, en el celular, de amistades y familiares. Pero no toda es verdadera ni útil. Esta semana investigarás como una historiadora, aprenderás a proteger tu salud con datos científicos, ordenarás operaciones sin errores y descubrirás qué tipo de liderazgo ayuda a tu comunidad, para construir con información tu propio proyecto de vida.',
  ejes: ['vida-ciudadana', 'seguridad', 'valores', 'vida-familiar'],
  media: {
    id: 's14-portada', kind: 'video', title: 'Detectives de la información', aspect: '16:9', duration: 55,
    alt: 'Animación de una niña y un niño con lupas que revisan un libro antiguo, una fotografía vieja, un mensaje de celular y un mapa, y luego escriben su plan de vida.',
    brief: 'Animación 2D de 55 s con estilo de cuaderno de detective: dos estudiantes (niña maya con güipil y niño ladino con uniforme escolar) examinan con lupas: (1) una fotografía antigua de su escuela; (2) un mensaje de celular dudoso que se marca "¿Verdadero?"; (3) una tabla de datos; (4) un cartel de salud. Al final escriben en un cuaderno "Mi proyecto de vida" con metas dibujadas. Texto en pantalla: "Investigo, comparo, decido". Música ligera. Sin marcas comerciales.',
  },
  badge: { id: 'medalla-s14', name: 'Detective de la verdad', icon: 'Search', desc: 'Completaste la semana 14 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's14-d1-historia-ciencia',
      title: 'La historia también es ciencia',
      icon: 'History',
      minutes: 15,
      day: 1,
      gancho: '¿Cómo era tu escuela hace 50 años? ¿Cómo podrías averiguarlo sin una máquina del tiempo?',
      objetivos: ['Definir la historia como ciencia: su objeto, finalidad, método y fuentes', 'Distinguir fuentes primarias y secundarias', 'Diferenciar hechos, opiniones y generalizaciones', 'Interpretar una línea de tiempo y ordenar una historia en inglés'],
      resumen: [
        'La historia es la ciencia que estudia el pasado de los seres humanos en sociedad; su finalidad es comprender el presente y conservar la memoria.',
        'Su método: hacer preguntas, buscar fuentes, compararlas y criticarlas, interpretar y comunicar los resultados.',
        'Fuentes primarias: producidas en la época estudiada (documentos, fotografías, objetos, estelas, testimonios de testigos). Fuentes secundarias: escritas después, a partir de otras (libros de historia, enciclopedias).',
        'Un hecho se comprueba; una opinión expresa lo que alguien piensa; una generalización afirma algo de "todos" o "siempre" y casi nunca es exacta.',
        'Un informe de observación tiene título, objetivo, procedimiento, observaciones y conclusiones.',
      ],
      media: {
        id: 's14-d1-fuentes', kind: 'image', title: 'Las pistas de la historia', aspect: '16:9',
        alt: 'Mesa de trabajo con una fotografía antigua de una escuela, una carta amarillenta, una vasija maya, un libro de historia y una grabadora.',
        brief: 'Ilustración cenital de una mesa de madera con objetos rotulados en dos grupos: "Fuentes primarias" (fotografía en blanco y negro de una escuela rural, carta antigua amarillenta, vasija maya pintada, grabadora con el testimonio de un abuelo) y "Fuentes secundarias" (libro de texto de historia, enciclopedia). Lupa y cuaderno de notas abierto. Estilo plano cálido, sin personas.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'l1'], cnb: ['ccss:6.1.1'], ambito: 'conocer', title: 'La historia como ciencia',
            prompt: 'La historia no es solo recordar fechas: es una **ciencia** con un método, como la biología o la física. Toca cada tarjeta.' },
          { icon: 'History', body: 'Quienes estudian historia trabajan como detectives: hacen preguntas y buscan **pistas** del pasado. Se apoyan en otras ciencias como la arqueología, la geografía y la antropología.', reveal: [
            { icon: 'Users', front: 'Objeto de estudio', back: 'El **pasado de los seres humanos** que viven en sociedad: cómo vivían, qué hacían y por qué cambiaron.' },
            { icon: 'Target', front: 'Finalidad', back: '**Comprender el presente**, conservar la memoria de los pueblos y aprender del pasado para no repetir errores.' },
            { icon: 'ListOrdered', front: 'Método', back: '1) Preguntar, 2) buscar fuentes, 3) compararlas y criticarlas, 4) interpretar, 5) comunicar.' },
            { icon: 'Archive', front: 'Fuentes', back: 'Todo lo que da información del pasado: documentos, objetos, fotografías, edificios, testimonios.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['ccss'], cnb: ['ccss:5.1.2', 'ccss:5.2.1'], ambito: 'conocer',
            prompt: 'Tu grado investiga **cómo era la escuela hace 50 años**. Clasifica las fuentes en **primarias** (de esa época) o **secundarias** (hechas después, con base en otras).',
            hint: 'Pregúntate: ¿se hizo en el momento de los hechos o alguien lo escribió después?',
            explain: 'Las fuentes primarias son testigos directos del pasado. Las secundarias las interpretan. Una buena investigación usa las dos y las compara.' },
          { buckets: [
            { id: 'pri', label: 'Fuente primaria', icon: 'Camera', color: 'var(--area-ccss)' },
            { id: 'sec', label: 'Fuente secundaria', icon: 'Library', color: 'var(--area-l1)' },
          ], items: [
            { id: 'f1', text: 'Fotografía del primer grupo de graduados', icon: 'Image', bucket: 'pri' },
            { id: 'f2', text: 'Testimonio del abuelo que estudió ahí', icon: 'Mic', bucket: 'pri', feedback: 'El abuelo vivió los hechos: su testimonio es una fuente primaria (aunque la grabes hoy).' },
            { id: 'f3', text: 'Libro de actas escrito por la directora de entonces', icon: 'ScrollText', bucket: 'pri' },
            { id: 'f4', text: 'Artículo de enciclopedia sobre la educación en Guatemala', icon: 'Book', bucket: 'sec' },
            { id: 'f5', text: 'Libro de historia escrito este año', icon: 'BookOpen', bucket: 'sec' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'ccss'], cnb: ['l1:4.3.1', 'ccss:5.1.2', 'ccss:6.1.1'], ambito: 'conocer', prompt: 'Lee la crónica de la investigación y responde.' },
          { genre: 'Crónica', heading: 'Lo que contó don Anselmo', passage:
            'Para su investigación, el grado de Lucía visitó a **don Anselmo**, de 72 años, que estudió en la escuela cuando era niño. Él contó que las clases eran en un salón de adobe con techo de teja y que los estudiantes llevaban su propio banquito.\n\nLuego, en la dirección, encontraron un **libro de actas** de 1975 que decía que ese año se construyó un aula nueva de block. También vieron una **fotografía** en la que aparece el salón de adobe.\n\nLucía recordó lo que había aprendido en semanas anteriores: una sola fuente puede equivocarse, por eso hay que **comparar**. El testimonio, el acta y la foto coincidían. Con esas pistas, el grado escribió un informe y lo compartió con la comunidad.',
            questions: [
              { q: '¿Qué fuentes usó el grado?', options: [
                { id: 'a', text: 'Un testimonio, un libro de actas y una fotografía' },
                { id: 'b', text: 'Solo internet' },
                { id: 'c', text: 'Una novela de aventuras' },
              ], correct: 'a' },
              { q: '¿Qué **conocimiento previo** ayudó a Lucía a confiar en los datos?', options: [
                { id: 'a', text: 'Que hay que comparar varias fuentes porque una sola puede equivocarse' },
                { id: 'b', text: 'Que las personas mayores siempre se equivocan' },
                { id: 'c', text: 'Que las fotos siempre mienten' },
              ], correct: 'a', why: 'Relacionar lo que ya sabes con lo que lees te ayuda a comprender y evaluar el texto.' },
              { q: 'Según el método de la historia, ¿qué paso hizo el grado al final?', options: [
                { id: 'a', text: 'Comunicar los resultados en un informe' },
                { id: 'b', text: 'Olvidar lo investigado' },
                { id: 'c', text: 'Inventar datos que faltaban' },
              ], correct: 'a' },
            ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l1', 'l2', 'ccss'], cnb: ['l1:4.3.2'], ambito: 'conocer',
            prompt: 'Al investigar hay que separar **hechos**, **opiniones** y **generalizaciones**. Clasifica cada frase.',
            hint: 'Las generalizaciones suelen usar "todos", "nadie", "siempre" o "nunca".',
            explain: 'Los hechos se comprueban con fuentes; las opiniones se respetan pero no se comprueban; las generalizaciones exageran y pueden llevar a prejuicios.' },
          { buckets: [
            { id: 'hec', label: 'Hecho', icon: 'BadgeCheck', color: 'var(--c-ok)' },
            { id: 'opi', label: 'Opinión', icon: 'MessageCircle', color: 'var(--c-hint)' },
            { id: 'gen', label: 'Generalización', icon: 'Users', color: 'var(--area-ccss)' },
          ], items: [
            { id: 'h1', text: 'En 1975 se construyó un aula de block.', bucket: 'hec' },
            { id: 'h2', text: 'La escuela de antes era más bonita.', bucket: 'opi' },
            { id: 'h3', text: 'Todos los abuelos recuerdan mal el pasado.', bucket: 'gen' },
            { id: 'h4', text: 'La fotografía muestra un salón de adobe.', bucket: 'hec' },
            { id: 'h5', text: 'Creo que estudiar antes era más difícil.', bucket: 'opi' },
            { id: 'h6', text: 'Los jóvenes nunca se interesan por la historia.', bucket: 'gen' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['l2', 'ccss', 'mat'], cnb: ['l2:2.1.4'], ambito: 'hacer',
            prompt: 'Interpreta la **línea de tiempo**. ¿Cuántos años pasaron entre la Independencia de Centroamérica y la firma del Acuerdo de Paz Firme y Duradera?',
            hint: 'Resta el año más antiguo al más reciente.',
            explain: '1996 − 1821 = 175 años. Las líneas de tiempo, tablas y mapas son recursos gráficos que resumen mucha información.' },
          { answer: 175, unit: 'años',
            stimulus: '**Línea de tiempo de Guatemala**\n\n1524 · Llegada de los conquistadores españoles\n1821 · Independencia de Centroamérica (15 de septiembre)\n1944 · Revolución de Octubre\n1996 · Firma del Acuerdo de Paz Firme y Duradera (29 de diciembre)',
            misconceptions: [{ value: 472, msg: 'Usaste 1524; la Independencia fue en 1821.' }, { value: 52, msg: 'Usaste 1944; la Independencia fue en 1821.' }] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['l3', 'ccss'], cnb: ['l3:3.3.2'], ambito: 'hacer',
            prompt: 'English time! Put the events of this story **in order**. Look at the sequence words: _first, then, next, after that, finally_.',
            explain: 'Sequence words help us organize events in a story: first → then → next → after that → finally.' },
          { items: [
            { id: 's1', text: 'First, a farmer found an old carved stone in his field.' },
            { id: 's2', text: 'Then, he called the local teacher.' },
            { id: 's3', text: 'Next, archaeologists came and cleaned the stone.' },
            { id: 's4', text: 'After that, they read the Maya numbers on it.' },
            { id: 's5', text: 'Finally, they wrote a report for the museum.' },
          ], labels: { start: 'First', end: 'Finally' } },
        ),
        S.order(
          { fase: 'aplicar', areas: ['ccss', 'cnt', 'l1'], cnb: ['ccss:5.3.2'], ambito: 'hacer',
            prompt: 'Vas a escribir el **informe** de tu investigación sobre la escuela. Ordena sus partes.',
            explain: 'Un informe de observación o experimentación permite que otras personas entiendan qué hiciste, qué encontraste y qué concluiste.' },
          { items: [
            { id: 'i1', text: 'Título' },
            { id: 'i2', text: 'Objetivo o pregunta de investigación' },
            { id: 'i3', text: 'Procedimiento: qué fuentes consultamos y cómo' },
            { id: 'i4', text: 'Observaciones y resultados' },
            { id: 'i5', text: 'Conclusiones' },
          ], labels: { start: 'Inicio', end: 'Final' } },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.1.1', 'ccss:5.2.1', 'ccss:5.1.2'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'La historia estudia el pasado de los seres humanos en sociedad.', answer: true },
            { text: 'Una enciclopedia escrita hoy es una fuente primaria sobre 1975.', answer: false, why: 'Se escribió después, con base en otras fuentes: es secundaria.' },
            { text: 'Una estela maya es una fuente primaria para estudiar a los mayas.', answer: true },
            { text: 'El método de la historia consiste en aceptar la primera fuente que encuentras.', answer: false, why: 'Hay que comparar y criticar las fuentes.' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.3.2'], prompt: '¿Cuál de estas frases es una **generalización**?' },
          { options: [
            { id: 'a', text: '"Todas las personas de la ciudad son egoístas."', icon: 'Users' },
            { id: 'b', text: '"La Independencia fue en 1821."', icon: 'Calendar', feedback: 'Es un hecho: se comprueba con documentos.' },
            { id: 'c', text: '"Me gusta la clase de historia."', icon: 'Heart', feedback: 'Es una opinión personal.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['ccss', 'l1'], cnb: ['ccss:5.3.2'] }, ['Explico por qué la historia es una ciencia', 'Distingo fuentes primarias y secundarias', 'Separo hechos, opiniones y generalizaciones'],
          ['Entrevistaré a una persona mayor sobre cómo era mi comunidad', 'Buscaré una fotografía antigua en casa y anotaré de qué año es', 'Revisaré si una noticia es un hecho o una opinión antes de creerla']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's14-d2-salud-decisiones',
      title: 'Decisiones que cuidan la vida',
      icon: 'ShieldCheck',
      minutes: 15,
      day: 2,
      gancho: 'Si alguien te dijera que el VIH se contagia por un abrazo, ¿cómo sabrías si es verdad?',
      objetivos: ['Explicar cómo se transmite y cómo no se transmite el VIH', 'Identificar enfermedades asociadas al consumo de drogas', 'Explicar cómo las drogas afectan a la sociedad y que su tráfico y tenencia están penados por la ley', 'Identificar la idea principal, la conclusión y la intención de un texto'],
      resumen: [
        'El VIH es un virus que debilita las defensas del cuerpo; el SIDA es la etapa avanzada de la infección. Con tratamiento, las personas con VIH pueden llevar una vida larga y saludable.',
        'El VIH se transmite por relaciones sexuales sin protección, por contacto con sangre infectada (por ejemplo, compartir agujas o jeringas) y de madre a hijo durante el embarazo, el parto o la lactancia si no hay tratamiento.',
        'El VIH NO se transmite por abrazos, besos en la mejilla, compartir platos, baños, piscinas ni por picaduras de mosquito. Discriminar a una persona con VIH es injusto.',
        'El consumo de drogas causa enfermedades: tabaco (cáncer de pulmón y enfermedades del corazón), alcohol (daño al hígado), inhalantes (daño al cerebro); compartir jeringas transmite VIH y hepatitis.',
        'La tenencia, el tráfico y el consumo de drogas dañan a las familias y comunidades; en Guatemala, la Ley contra la Narcoactividad castiga el tráfico y la posesión de drogas.',
      ],
      media: {
        id: 's14-d2-defensas', kind: 'animation', title: 'El cuerpo y sus defensas', aspect: '16:9', duration: 50,
        alt: 'Animación de glóbulos blancos como guardianes que protegen el cuerpo; un virus los debilita y un medicamento los ayuda a recuperarse.',
        brief: 'Animación 2D de 50 s con metáfora sencilla, sin imágenes de enfermedad grave: los glóbulos blancos son guardianes con escudos que patrullan la sangre. Llega el VIH (partícula gris) y debilita a algunos guardianes, por eso otros gérmenes pueden entrar. Aparece el tratamiento (cápsula) que frena al virus y los guardianes se recuperan. Mensajes en pantalla: "El VIH debilita las defensas", "Con tratamiento se puede vivir bien", "Infórmate y no discrimines". Narración tranquila en español con subtítulos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'fc'], cnb: ['cnt:3.5.2'], ambito: 'conocer', title: 'Información que protege',
            prompt: 'Sobre el VIH circulan muchos **mitos**. La ciencia nos da información segura para **cuidarnos** y para **no discriminar**. Toca cada tarjeta.' },
          { icon: 'ShieldCheck', body: 'Si tienes preguntas sobre este tema, conversa con tu familia, tu docente o el centro de salud. Preguntar es de personas responsables.', reveal: [
            { icon: 'Shield', front: '¿Qué es el VIH?', back: 'El **Virus de Inmunodeficiencia Humana**. Ataca las **defensas** del cuerpo (glóbulos blancos).' },
            { icon: 'HeartPulse', front: '¿Y el SIDA?', back: 'Es la **etapa avanzada** de la infección, cuando las defensas están muy débiles. Con tratamiento a tiempo se puede evitar.' },
            { icon: 'Pill', front: '¿Tiene tratamiento?', back: 'Sí. Los medicamentos **antirretrovirales** controlan el virus y permiten una vida larga. Aún no hay cura, por eso la **prevención** es clave.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:3.5.2'], ambito: 'conocer',
            prompt: 'Observa la infografía y clasifica: ¿por esta vía **se transmite** el VIH o **no se transmite**?',
            hint: 'El VIH se transmite solo por algunos líquidos del cuerpo: sangre, líquidos sexuales y leche materna.',
            explain: 'Convivir, jugar, estudiar o compartir la comida con una persona con VIH no representa riesgo. Conocer las vías reales de transmisión evita el miedo y la discriminación.',
            media: { id: 's14-d2-vias', kind: 'diagram', title: 'Infografía: vías de transmisión del VIH', aspect: '4:3',
              alt: 'Infografía en dos columnas: a la izquierda, íconos de jeringa, gota de sangre, madre embarazada y un símbolo de relación sin protección; a la derecha, abrazo, plato compartido, mosquito tachado y piscina.',
              brief: 'Infografía educativa en dos columnas con íconos planos y respetuosos (sin cuerpos desnudos ni imágenes explícitas). Columna roja "SÍ se transmite": jeringa compartida, gota de sangre, silueta de mujer embarazada con un bebé (con nota "prevenible con tratamiento"), y un ícono abstracto de dos corazones con la frase "relaciones sexuales sin protección". Columna verde "NO se transmite": abrazo entre amigos, plato y vaso compartidos, baño, piscina, mosquito, apretón de manos. Título: "Infórmate y no discrimines".' } },
          { buckets: [
            { id: 'si', label: 'Sí se transmite', icon: 'Droplet', color: 'var(--c-hint)' },
            { id: 'no', label: 'No se transmite', icon: 'HeartHandshake', color: 'var(--c-ok)' },
          ], items: [
            { id: 'v1', text: 'Compartir agujas o jeringas', icon: 'Syringe', bucket: 'si' },
            { id: 'v2', text: 'Contacto con sangre infectada', icon: 'Droplet', bucket: 'si' },
            { id: 'v3', text: 'De madre a hijo sin tratamiento (embarazo, parto o lactancia)', icon: 'Baby', bucket: 'si' },
            { id: 'v4', text: 'Relaciones sexuales sin protección', icon: 'Heart', bucket: 'si' },
            { id: 'v5', text: 'Abrazar o saludar de mano', icon: 'Handshake', bucket: 'no' },
            { id: 'v6', text: 'Compartir platos y vasos', icon: 'Utensils', bucket: 'no' },
            { id: 'v7', text: 'Picadura de mosquito', icon: 'Bug', bucket: 'no', feedback: 'El mosquito no transmite el VIH: el virus no sobrevive ni se reproduce en él.' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['cnt', 'ef'], cnb: ['cnt:4.1.2'], ambito: 'conocer', title: 'Las drogas y la salud',
            prompt: 'Una **droga** es una sustancia que cambia el funcionamiento del cerebro y del cuerpo. Algunas son legales para personas adultas (alcohol, tabaco) y otras son ilegales. Todas pueden dañar la salud.' },
          { icon: 'Stethoscope', body: 'Las drogas pueden causar **adicción**: la persona siente que no puede dejarlas aunque le hagan daño.', reveal: [
            { icon: 'Wind', front: 'Tabaco', back: 'Daña los **pulmones** y el **corazón**: puede causar cáncer de pulmón y bronquitis crónica.' },
            { icon: 'Droplets', front: 'Alcohol', back: 'Daña el **hígado** (cirrosis) y el cerebro. Causa accidentes y violencia.' },
            { icon: 'Brain', front: 'Inhalantes', back: 'Pegamentos y solventes que se aspiran: dañan el **cerebro** de forma permanente.' },
            { icon: 'Syringe', front: 'Drogas inyectadas', back: 'Compartir jeringas transmite **VIH** y **hepatitis B y C**.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.1.2'], ambito: 'conocer',
            prompt: 'Une cada forma de consumo con una **enfermedad** que puede causar.',
            explain: 'La mejor forma de prevenir estas enfermedades es no empezar a consumir drogas.' },
          { leftTitle: 'Consumo', rightTitle: 'Enfermedad', pairs: [
            { id: 'tab', left: 'Fumar tabaco', leftIcon: 'Wind', right: 'Cáncer de pulmón' },
            { id: 'alc', left: 'Beber alcohol en exceso', leftIcon: 'Droplets', right: 'Cirrosis (daño del hígado)' },
            { id: 'iny', left: 'Compartir jeringas', leftIcon: 'Syringe', right: 'VIH y hepatitis' },
            { id: 'inh', left: 'Aspirar solventes', leftIcon: 'Brain', right: 'Daño cerebral permanente' },
          ] },
        ),
        S.reading(
          { fase: 'aplicar', areas: ['l1', 'cnt', 'fc'], cnb: ['cnt:4.3.1', 'l1:4.2.5'], ambito: 'convivir', prompt: 'Lee el texto y responde. Fíjate en la **idea introductoria**, la **idea principal** y la **conclusión**.' },
          { genre: 'Artículo de opinión escolar', heading: 'Las drogas no solo dañan a quien las consume', passage:
            'Muchas personas creen que consumir drogas es un asunto privado. Sin embargo, sus efectos llegan mucho más lejos.\n\n**Las drogas dañan a toda la comunidad.** Cuando alguien se vuelve adicto, su familia sufre: se gastan los ahorros, hay peleas y los hijos pueden quedar sin cuidado. El **tráfico** de drogas trae violencia a los barrios y usa a jóvenes para vender o transportar. Por eso, en Guatemala la **Ley contra la Narcoactividad** castiga con cárcel el tráfico y la tenencia de drogas, y la ley prohíbe vender alcohol y tabaco a menores de edad.\n\nEn conclusión, prevenir el consumo de drogas es tarea de todos: familias, escuelas y autoridades. Si en tu comunidad hay deporte, arte y espacios seguros para la juventud, habrá menos personas en riesgo.',
            questions: [
              { q: '¿Cuál es la **idea principal** del texto?', options: [
                { id: 'a', text: 'Las drogas dañan a toda la comunidad, no solo a quien las consume' },
                { id: 'b', text: 'Las drogas son un asunto privado' },
                { id: 'c', text: 'El deporte es aburrido' },
              ], correct: 'a' },
              { q: '¿Qué **intención** tiene el autor?', options: [
                { id: 'a', text: 'Convencer al lector de que la prevención es tarea de todos' },
                { id: 'b', text: 'Vender un producto' },
                { id: 'c', text: 'Contar un cuento de terror' },
              ], correct: 'a', why: 'Es un texto argumentativo: presenta razones para convencer.' },
              { q: '**Predice:** si una comunidad abre una escuela de fútbol y un grupo de música para jóvenes, ¿qué es más probable?', options: [
                { id: 'a', text: 'Que menos jóvenes estén en riesgo de consumir drogas' },
                { id: 'b', text: 'Que aumente el tráfico de drogas' },
                { id: 'c', text: 'Que nada cambie nunca' },
              ], correct: 'a' },
              { q: '¿Por qué la ley castiga el tráfico de drogas?', options: [
                { id: 'a', text: 'Porque trae violencia y daña a familias y comunidades' },
                { id: 'b', text: 'Porque es un deporte peligroso' },
                { id: 'c', text: 'Porque no afecta a nadie' },
              ], correct: 'a' },
            ] },
        ),
        S.highlight(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.5'], ambito: 'conocer',
            prompt: 'Algunas palabras anuncian que viene la **conclusión** de un texto. Toca **todas** las que encuentres.',
            explain: '"En conclusión", "por eso", "en resumen" y "finalmente" introducen ideas concluyentes. Reconocerlas te ayuda a encontrar lo más importante.' },
          { target: 'conectores de conclusión', text: 'Hacer deporte fortalece el cuerpo. {Por eso}, es una buena alternativa al consumo de drogas. Además, hace amistades sanas. {En resumen}, el deporte protege. {Finalmente}, cada comunidad puede crear espacios seguros. {En conclusión}, prevenir es tarea de todos.' },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['cnt', 'fc', 'l2'], cnb: ['cnt:4.3.1'], ambito: 'ser', prompt: '¿Qué harías tú?' },
          { scene: { icon: 'Users', text: 'Después de un partido, unos muchachos mayores le ofrecen a **Byron** un cigarro y una bebida alcohólica: "Probá, no pasa nada, todos lo hacen".' }, options: [
            { id: 'a', icon: 'ThumbsUp', text: 'Aceptar para no quedar mal', consequence: 'Byron se siente mal y tiene miedo de que le vuelvan a presionar. Empezar es el primer paso hacia la adicción.', values: ['Presión de grupo'], constructive: false },
            { id: 'b', icon: 'Hand', text: 'Decir con firmeza: "No, gracias. Yo cuido mi salud" y alejarse', consequence: 'Algunos se burlan, pero Byron se siente orgulloso. Otro compañero se va con él.', values: ['Autoestima', 'Asertividad', 'Autocuidado'], constructive: true },
            { id: 'c', icon: 'MessageCircle', text: 'Rechazar y contarlo a su entrenadora o a su familia', consequence: 'La entrenadora habla con el grupo sobre los riesgos y organiza actividades para los mayores. El ambiente mejora.', values: ['Responsabilidad', 'Confianza'], constructive: true },
          ] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.5.2', 'cnt:4.1.2'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'El VIH se puede transmitir al compartir jeringas.', answer: true },
            { text: 'Si abrazas a una persona con VIH, te puedes infectar.', answer: false, why: 'El VIH no se transmite por abrazos ni por la convivencia diaria.' },
            { text: 'El consumo excesivo de alcohol daña el hígado.', answer: true },
            { text: 'Fumar tabaco solo afecta el cabello.', answer: false, why: 'Daña los pulmones y el corazón, y puede causar cáncer.' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt', 'l1'], cnb: ['cnt:4.3.1', 'l1:4.2.5'], prompt: '¿Por qué el tráfico de drogas afecta la vida en sociedad? Elige **todas** las correctas.' },
          { multiple: true, options: [
            { id: 'a', text: 'Trae violencia a los barrios', icon: 'Flame' },
            { id: 'b', text: 'Usa a jóvenes para vender o transportar drogas', icon: 'Users' },
            { id: 'c', text: 'Es un delito penado por la ley', icon: 'Gavel' },
            { id: 'd', text: 'Mejora la salud de la comunidad', icon: 'HeartPulse', feedback: 'Al contrario: causa enfermedades, adicciones y violencia.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        cierre({ areas: ['cnt', 'fc'], cnb: ['cnt:4.3.1'] }, ['Explico cómo se transmite y cómo no se transmite el VIH', 'Nombro enfermedades causadas por las drogas', 'Sé decir "no" ante la presión de grupo'],
          ['Trataré con respeto a cualquier persona, sin importar su salud', 'Diré "no" con firmeza si me ofrecen drogas', 'Conversaré con mi familia sobre lo que aprendí hoy']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's14-d3-operaciones-en-juego',
      title: 'Operaciones en juego',
      icon: 'Calculator',
      minutes: 15,
      day: 3,
      gancho: 'En el torneo de lanzamiento, dos jueces sumaron los mismos puntos y obtuvieron resultados distintos. ¿Quién tenía razón?',
      objetivos: ['Resolver operaciones combinadas respetando la jerarquía y los paréntesis', 'Encontrar el término que falta en una operación', 'Lanzar lejos y pasar el implemento por detrás de la cintura', 'Analizar cómo formar un grupo musical equilibrado'],
      resumen: [
        'Jerarquía de las operaciones: 1) paréntesis, 2) multiplicaciones y divisiones (de izquierda a derecha), 3) sumas y restas (de izquierda a derecha).',
        'En una operación abierta falta un término: se encuentra con la operación inversa (la suma se deshace con resta; la multiplicación, con división).',
        'Para lanzar lejos: pie contrario adelante, brazo atrás, impulso de piernas y tronco, y soltar arriba y hacia adelante.',
        'Un grupo musical equilibrado tiene instrumentos de ritmo, de melodía y de armonía, y roles claros.',
        'La mímica comunica con gestos y movimientos, sin palabras.',
      ],
      media: {
        id: 's14-d3-torneo', kind: 'video', title: 'Torneo de lanzamiento y gimnasia rítmica', aspect: '16:9', duration: 60,
        alt: 'Estudiantes en una cancha escolar lanzan pelotitas lejos, se pasan una pelota por detrás de la cintura y hacen una rutina con cintas.',
        brief: 'Video de 60 s en una cancha de escuela pública (tomas de espaldas o a distancia, sin rostros reconocibles): (1) técnica de lanzamiento de pelota pequeña en cámara lenta, con rótulos "pie contrario adelante", "brazo atrás", "soltar arriba"; (2) pases por detrás de la cintura y recepción alta, media y rodada; (3) rutina breve de gimnasia rítmica con cintas de colores al ritmo de marimba; (4) pizarra con los puntos del torneo. Música animada.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['mat', 'ef'], cnb: ['mat:4.2.4'], ambito: 'conocer', title: 'El orden sí importa',
            prompt: 'En el torneo, cada lanzamiento largo vale **5 puntos** y cada corto **2**. Ana hizo 3 largos y 2 cortos: **3 × 5 + 2 × 2**. Un juez dijo 34 y otro 19. Descubre quién tiene razón con la **jerarquía de operaciones**.' },
          { icon: 'ListOrdered', body: 'Para que todas las personas obtengan el mismo resultado, las operaciones se resuelven en un **orden acordado**.', reveal: [
            { icon: 'Layers', front: '1.º Paréntesis', back: 'Lo que está entre **( )** se resuelve primero.' },
            { icon: 'X', front: '2.º × y ÷', back: 'Luego multiplicaciones y divisiones, **de izquierda a derecha**.' },
            { icon: 'Plus', front: '3.º + y −', back: 'Al final sumas y restas, de izquierda a derecha.' },
            { icon: 'Check', front: '¿Quién acertó?', back: '3 × 5 = 15 y 2 × 2 = 4 → 15 + 4 = **19**. El juez que dijo 34 sumó antes de multiplicar.' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'ef'], cnb: ['mat:4.2.4'], ambito: 'hacer',
            prompt: 'El equipo de Kevin tenía **40 puntos**. Le restaron una penalización de **(6 + 2) × 3**. ¿Cuántos puntos le quedaron? Resuelve **40 − (6 + 2) × 3**.',
            hint: 'Primero el paréntesis, luego la multiplicación y al final la resta.',
            explain: '(6 + 2) = 8; 8 × 3 = 24; 40 − 24 = 16.' },
          { answer: 16, unit: 'puntos',
            misconceptions: [{ value: 96, msg: 'Restaste 40 − 8 antes de multiplicar: la multiplicación va antes que la resta.' }, { value: 40, msg: 'Ignoraste el paréntesis: resolviste 40 − 6 + 2 × 3. Primero se resuelve (6 + 2) = 8.' }] },
        ),
        S.explain(
          { fase: 'construir', areas: ['mat'], cnb: ['mat:4.2.3'], ambito: 'conocer', title: 'Operaciones abiertas',
            prompt: 'A veces **falta un término**. Para encontrarlo, usa la **operación inversa**.' },
          { icon: 'Puzzle', body: 'La suma y la resta son inversas; la multiplicación y la división también.', reveal: [
            { icon: 'Plus', front: '□ + 35 = 82', back: '82 − 35 = **47**. Comprueba: 47 + 35 = 82.' },
            { icon: 'X', front: '6 × □ = 54', back: '54 ÷ 6 = **9**. Comprueba: 6 × 9 = 54.' },
            { icon: 'Slash', front: '□ ÷ 4 = 12', back: '12 × 4 = **48**. Comprueba: 48 ÷ 4 = 12.' },
          ] },
        ),
        S.fill(
          { fase: 'construir', areas: ['mat'], cnb: ['mat:4.2.3'], ambito: 'hacer',
            prompt: 'Completa las **operaciones abiertas** del marcador del torneo.',
            hint: 'Usa la operación inversa y comprueba.',
            explain: '85 − 47 = 38; 63 ÷ 7 = 9; 120 ÷ 15 = 8.' },
          { text: '47 + [[38]] = 85\n[[9]] × 7 = 63\n120 ÷ [[8]] = 15',
            distractors: ['132', '56', '7'] },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'art'], cnb: ['ef:2.1.1', 'ef:2.1.6', 'ef:1.4.22'], ambito: 'hacer',
            prompt: 'En un espacio abierto y seguro: 1) **Lanza** una pelotita de papel o calcetín lo más lejos que puedas (pie contrario adelante, brazo atrás, suelta arriba). 2) **Pasa** la pelota por **detrás de tu cintura** de una mano a otra y recíbela **alta**, **media** y **rodada** de un compañero. 3) Haz una rutina de **gimnasia rítmica** con una cinta de papel siguiendo una canción. Mide tu pulso.' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después de lanzamientos y pases', exercise: { name: 'Lanzar lejos y pases por detrás de la cintura', icon: 'Target', seconds: 45 } },
            { label: 'Después de la rutina de gimnasia rítmica', exercise: { name: 'Rutina con cinta al ritmo de la música', icon: 'Music', seconds: 45 } },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['art', 'mat'], cnb: ['art:2.1.1'], ambito: 'convivir',
            prompt: 'Tu grado quiere formar un **grupo musical**. Para que suene equilibrado se necesitan instrumentos de **ritmo**, de **melodía** y de **armonía** (acordes). Clasifica los instrumentos según su función principal en el grupo.',
            explain: 'Al integrar un grupo también se analiza: cuántas personas tocan cada parte, quién dirige, qué repertorio se adapta al nivel de todos y cuándo ensayar.' },
          { buckets: [
            { id: 'rit', label: 'Ritmo', icon: 'Drum', color: 'var(--area-art)' },
            { id: 'mel', label: 'Melodía', icon: 'Music', color: 'var(--area-l1)' },
            { id: 'arm', label: 'Armonía (acordes)', icon: 'Guitar', color: 'var(--area-pyd)' },
          ], items: [
            { id: 'i1', text: 'Tambor', bucket: 'rit' },
            { id: 'i2', text: 'Sonaja de semillas', bucket: 'rit' },
            { id: 'i3', text: 'Flauta dulce', bucket: 'mel' },
            { id: 'i4', text: 'Chirimía', bucket: 'mel' },
            { id: 'i5', text: 'Guitarra rasgueada', bucket: 'arm' },
          ] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['l2', 'ef', 'art'], cnb: ['l2:2.2.4'], ambito: 'convivir',
            prompt: 'Juego de **mímica**: tus compañeros representan sin palabras. Une cada gesto con el mensaje que comunica. ¡Luego inventa tu propia mímica en casa!',
            explain: 'En la mímica, el cuerpo entero comunica: la cara, las manos, la postura y el desplazamiento.' },
          { leftTitle: 'Gesto', rightTitle: 'Mensaje', pairs: [
            { id: 'g1', left: 'Mano sobre los ojos mirando lejos', leftIcon: 'Eye', right: 'Busco algo a lo lejos' },
            { id: 'g2', left: 'Brazo atrás, paso adelante y soltar', leftIcon: 'Target', right: 'Lanzo una pelota' },
            { id: 'g3', left: 'Dedo índice sobre los labios', leftIcon: 'VolumeX', right: 'Silencio, por favor' },
            { id: 'g4', left: 'Frotarse los brazos y temblar', leftIcon: 'Snowflake', right: 'Tengo frío' },
          ] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.4'], prompt: 'Resuelve respetando la jerarquía: **(12 + 8) ÷ 4 + 3 × 5**' },
          { answer: 20, misconceptions: [{ value: 40, msg: 'Sumaste 5 + 3 antes de multiplicar: primero 3 × 5 = 15.' }, { value: 29, msg: 'Revisa el paréntesis: primero (12 + 8) = 20.' }] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.3'], prompt: 'Encuentra el término que falta: **□ × 8 = 96**' },
          { answer: 12, misconceptions: [{ value: 768, msg: 'Multiplicaste; para deshacer una multiplicación se divide: 96 ÷ 8.' }, { value: 88, msg: 'Restaste; la inversa de la multiplicación es la división.' }] },
        ),
        cierre({ areas: ['mat', 'ef'], cnb: ['ef:1.4.22'] }, ['Resuelvo operaciones combinadas en el orden correcto', 'Encuentro el término que falta con la operación inversa', 'Lanzo y paso el implemento con buena técnica'],
          ['Inventaré 3 operaciones combinadas para mi familia', 'Practicaré lanzamientos con mi mano no dominante', 'Enseñaré a alguien una rutina de gimnasia rítmica']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's14-d4-liderazgo-proyecto',
      title: 'Líderes y proyecto de vida',
      icon: 'Compass',
      minutes: 15,
      day: 4,
      gancho: '¿Cómo es la persona líder que te gustaría seguir? ¿Y qué persona quieres ser tú en 10 años?',
      objetivos: ['Construir perfiles de liderazgo democrático y autoritario', 'Argumentar por qué y cómo erradicar el trabajo infantil', 'Organizar un texto con títulos, subtítulos, márgenes e imágenes', 'Construir tu proyecto de vida'],
      resumen: [
        'El liderazgo democrático escucha, consulta, reparte tareas y rinde cuentas; el autoritario decide solo, impone y no acepta críticas.',
        'Un argumento tiene una postura, razones que la apoyan y una conclusión. Erradicar el trabajo infantil protege el derecho a la educación, la salud y el juego.',
        'Un texto bien organizado usa título, subtítulos, márgenes, imágenes y recursos tipográficos (negrita, viñetas) para guiar al lector.',
        'Un proyecto de vida incluye quién soy (fortalezas), qué sueño (metas), cómo lo lograré (pasos) y quién me puede apoyar.',
      ],
      media: {
        id: 's14-d4-camino', kind: 'image', title: 'Mi camino hacia el futuro', aspect: '16:9',
        alt: 'Ilustración de un camino que sube por una montaña con banderines de metas: terminar la primaria, el básico, aprender un oficio o profesión y ayudar a la comunidad.',
        brief: 'Ilustración horizontal de un sendero que sube una montaña guatemalteca con milpas y pinos. En el camino, 4 banderines con íconos: libro ("terminar la primaria"), mochila ("estudiar el básico y diversificado"), herramientas y birrete ("aprender un oficio o profesión"), manos unidas ("aportar a mi comunidad"). Al pie del camino, una niña y un niño de espaldas con mochilas. Paleta de amanecer, estilo plano.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['fc', 'l2'], cnb: ['fc:3.1.2'], ambito: 'convivir', title: 'Dos formas de liderar',
            prompt: 'En el gobierno escolar, en un equipo o en la comunidad, hay distintas formas de **liderar**. Toca cada tarjeta.' },
          { icon: 'Flag', body: 'Un líder no es quien manda más fuerte, sino quien ayuda al grupo a lograr sus metas.', reveal: [
            { icon: 'Users', front: 'Liderazgo democrático', back: '**Escucha** a todos, **consulta** antes de decidir, reparte tareas, acepta críticas y **rinde cuentas**.' },
            { icon: 'Gavel', front: 'Liderazgo autoritario', back: '**Decide solo**, impone órdenes, no permite opinar y castiga a quien no está de acuerdo.' },
            { icon: 'Scale', front: '¿Cuál fortalece la democracia?', back: 'El democrático: todas las personas participan, se respetan los derechos y las decisiones se toman juntas.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['fc'], cnb: ['fc:3.1.2'], ambito: 'convivir',
            prompt: 'Construye los dos **perfiles**: clasifica cada característica.',
            explain: 'Un perfil es la descripción de cómo actúa una persona. Conocerlos te ayuda a elegir bien a tus representantes y a liderar mejor.' },
          { buckets: [
            { id: 'dem', label: 'Perfil democrático', icon: 'HeartHandshake', color: 'var(--c-ok)' },
            { id: 'aut', label: 'Perfil autoritario', icon: 'Lock', color: 'var(--c-hint)' },
          ], items: [
            { id: 'p1', text: 'Hace asambleas para escuchar propuestas', bucket: 'dem' },
            { id: 'p2', text: '"Aquí se hace lo que yo digo"', bucket: 'aut' },
            { id: 'p3', text: 'Informa en qué se gastó el dinero del grado', bucket: 'dem' },
            { id: 'p4', text: 'Castiga a quien opina diferente', bucket: 'aut' },
            { id: 'p5', text: 'Reparte tareas según las habilidades de cada quien', bucket: 'dem' },
            { id: 'p6', text: 'Toma todas las decisiones sin consultar', bucket: 'aut' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'pyd'], cnb: ['l1:5.1.1', 'pyd:2.4.1'], ambito: 'conocer',
            prompt: 'Observa cómo Yessenia organizó su **proyecto de vida** en una página. Fíjate en los **bloques de texto**: título, subtítulos, márgenes, imagen y negritas.',
            media: { id: 's14-d4-pagina', kind: 'image', title: 'La página del proyecto de vida de Yessenia', aspect: '3:4',
              alt: 'Página de cuaderno con título grande centrado, cuatro subtítulos en color, márgenes amplios, un dibujo de un estetoscopio y palabras en negrita.',
              brief: 'Maqueta de una hoja tamaño carta vista de frente, con diseño limpio: título grande centrado "Mi proyecto de vida"; márgenes marcados con línea punteada; 4 bloques con subtítulos de color ("Quién soy", "Mis sueños", "Mis pasos", "Quién me apoya"), cada uno con 2-3 viñetas; palabras clave en negrita; en la esquina superior derecha, dibujo de un estetoscopio y una mochila. Letra legible manuscrita o tipográfica. Sin nombre real.' } },
          { genre: 'Texto personal organizado en bloques', heading: 'Mi proyecto de vida — Yessenia, 12 años', passage:
            '**Quién soy:** Soy responsable, me gustan las ciencias y ayudo a mi abuela con sus plantas medicinales.\n\n**Mis sueños:** Quiero ser **enfermera** y trabajar en el centro de salud de mi municipio.\n\n**Mis pasos:** 1) Terminar la primaria con buenas notas. 2) Estudiar el ciclo básico y el diversificado. 3) Buscar una beca para estudiar enfermería. 4) Mientras tanto, aprender primeros auxilios.\n\n**Quién me apoya:** Mi mamá, mi maestra y mi tío, que es promotor de salud.',
            questions: [
              { q: '¿Para qué sirven los **subtítulos** en esta página?', options: [
                { id: 'a', text: 'Para separar las ideas en bloques y encontrarlas rápido' },
                { id: 'b', text: 'Solo para decorar' },
                { id: 'c', text: 'Para ocupar espacio' },
              ], correct: 'a' },
              { q: '¿Por qué Yessenia escribió "enfermera" en **negrita**?', options: [
                { id: 'a', text: 'Para destacar la palabra más importante de su sueño' },
                { id: 'b', text: 'Porque se equivocó' },
                { id: 'c', text: 'Porque es el título' },
              ], correct: 'a', why: 'Los recursos tipográficos (negrita, cursiva, viñetas) resaltan lo importante.' },
              { q: '¿Qué parte del proyecto de vida explica **cómo** logrará su meta?', options: [
                { id: 'a', text: 'Mis pasos' },
                { id: 'b', text: 'Quién soy' },
                { id: 'c', text: 'Quién me apoya' },
              ], correct: 'a' },
            ] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['pyd', 'l1', 'fc'], cnb: ['pyd:2.4.1', 'l1:5.1.1'], ambito: 'emprender',
            prompt: 'Ahora construye **tu proyecto de vida**. Sigue la guía y hazlo en una hoja o en tu cuaderno, con buena organización.' },
          { goal: 'Diseñar una página con tu proyecto de vida que muestre quién eres, qué sueñas, qué pasos darás para mejorar tu calidad de vida y la de tu familia, y quién te puede apoyar.',
            steps: [
              { title: 'Quién soy', detail: 'Escribe 3 fortalezas, 2 cosas que te gustan y 1 aspecto que quieres mejorar.' },
              { title: 'Mis sueños', detail: 'Escribe una meta para dentro de 5 años y otra para dentro de 10 años. Piensa en estudio, trabajo, salud y comunidad.' },
              { title: 'Mis pasos', detail: 'Enumera al menos 4 pasos concretos, del más cercano al más lejano (por ejemplo: terminar sexto, estudiar el básico…).' },
              { title: 'Quién me apoya', detail: 'Nombra personas e instituciones que te pueden ayudar: familia, docentes, becas, centro de salud, municipalidad.' },
              { title: 'Diseña la página', detail: 'Usa título, subtítulos, márgenes, una imagen o dibujo y negritas para lo más importante.' },
            ],
            evidence: 'Una página con tu proyecto de vida organizada en 4 bloques, compartida con tu familia.',
            rubric: ['Incluye fortalezas reales', 'Las metas son claras y posibles', 'Los pasos están en orden y son concretos', 'Nombra apoyos', 'Usa título, subtítulos, márgenes e imagen'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['fc', 'l1'], cnb: ['fc:2.4.2'], ambito: 'convivir',
            prompt: 'Para el debate escolar, ¿cuál es el **argumento más sólido** para erradicar el trabajo infantil?',
            explain: 'Un buen argumento tiene una postura clara, razones basadas en derechos y datos, y una conclusión. Recuerda lo que aprendiste la semana pasada sobre el trabajo infantil y las oportunidades.' },
          { options: [
            { id: 'a', text: '"Hay que erradicarlo porque impide estudiar, pone en riesgo la salud y hace que la pobreza pase a la siguiente generación. Por eso necesitamos becas y apoyo a las familias."', icon: 'Scale' },
            { id: 'b', text: '"Hay que erradicarlo porque no me gusta."', icon: 'ThumbsUp', feedback: 'Es solo una opinión sin razones.' },
            { id: 'c', text: '"Todos los que trabajan de niños son flojos para estudiar."', icon: 'Users', feedback: 'Es una generalización injusta, no un argumento.' },
          ], correct: ['a'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['fc', 'l2', 'pyd'], cnb: ['fc:2.4.2', 'l2:1.2.7'], ambito: 'convivir',
            prompt: 'Escribe tu **opinión argumentada**: ¿**cómo** podría tu comunidad erradicar el trabajo infantil? Incluye tu postura, dos razones y una propuesta.' },
          { model: 'Pienso que el trabajo infantil se debe erradicar porque todos los niños tienen derecho a estudiar y a jugar, y porque quien deja la escuela tiene menos oportunidades de adulto. Propongo que la municipalidad dé becas a las familias con menos ingresos y que la escuela avise cuando un estudiante deja de asistir.',
            rubric: ['Expresa una postura clara', 'Da al menos dos razones', 'Incluye una propuesta concreta', 'Usa conectores como "porque" y "por eso"'],
            minWords: 30, placeholder: 'Pienso que… porque… Propongo que…' },
        ),
        S.match(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.2'], prompt: 'Une cada acción con el tipo de liderazgo.' },
          { leftTitle: 'Acción', rightTitle: 'Liderazgo', pairs: [
            { id: 'a', left: 'Consulta al grupo antes de decidir', right: 'Democrático' },
            { id: 'b', left: 'Impone su decisión y no acepta críticas', right: 'Autoritario' },
          ] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['l1', 'pyd', 'fc'], cnb: ['l1:5.1.1', 'pyd:2.4.1', 'fc:2.4.2'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'Los subtítulos ayudan a organizar un texto en bloques.', answer: true },
            { text: 'Un proyecto de vida solo incluye sueños, sin pasos para lograrlos.', answer: false, why: 'También incluye los pasos concretos y los apoyos.' },
            { text: 'Erradicar el trabajo infantil protege el derecho a la educación.', answer: true },
            { text: 'Los márgenes de una hoja son un error de diseño.', answer: false, why: 'Los márgenes dan orden y hacen el texto más fácil de leer.' },
          ] },
        ),
        cierre({ areas: ['pyd', 'fc'], cnb: ['pyd:2.4.1'] }, ['Distingo el liderazgo democrático del autoritario', 'Argumento contra el trabajo infantil', 'Construí mi proyecto de vida'],
          ['Compartiré mi proyecto de vida con mi familia', 'Pegaré mi proyecto en un lugar donde lo vea seguido', 'Practicaré un liderazgo que escucha en mi grupo de trabajo']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's14-d5-reto',
      title: 'Reto de la semana 14',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar que sabes decidir con información', 'Obtener la medalla "Detective de la verdad" (70 % o más)'],
      resumen: ['Superé el reto de la semana 14: historia y fuentes, VIH y drogas, operaciones, liderazgo y proyecto de vida.'],
      media: {
        id: 's14-d5-reto', kind: 'image', title: 'Medalla Detective de la verdad', aspect: '1:1',
        alt: 'Medalla dorada con una lupa sobre un libro abierto y una estrella.',
        brief: 'Medalla circular dorada con relieve de una lupa grande sobre un libro abierto del que salen una estrella y un signo de check. Borde con motivo de tejido guatemalteco. Cinta con los colores de las áreas del CNB. Estilo plano con brillo suave, fondo transparente, 1024×1024.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.1.1'], prompt: '¿Cuál es la finalidad de la historia como ciencia?' },
          { options: [{ id: 'a', text: 'Comprender el presente a partir del pasado' }, { id: 'b', text: 'Memorizar fechas sin sentido' }, { id: 'c', text: 'Inventar relatos' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.1.2', 'ccss:5.2.1'], prompt: '¿Fuente primaria o secundaria?' },
          { buckets: [{ id: 'p', label: 'Primaria', icon: 'Camera' }, { id: 's', label: 'Secundaria', icon: 'Library' }],
            items: [{ id: 'a', text: 'Carta escrita en 1900', bucket: 'p' }, { id: 'b', text: 'Libro de texto actual sobre 1900', bucket: 's' }, { id: 'c', text: 'Vasija maya', bucket: 'p' }, { id: 'd', text: 'Enciclopedia', bucket: 's' }] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.5.2'], prompt: '¿Por cuál de estas vías **sí** se puede transmitir el VIH?' },
          { options: [{ id: 'a', text: 'Compartir jeringas' }, { id: 'b', text: 'Compartir un lápiz' }, { id: 'c', text: 'Un abrazo' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.1.2'], prompt: 'Une cada droga con un daño que causa.' },
          { pairs: [{ id: 't', left: 'Tabaco', right: 'Cáncer de pulmón' }, { id: 'a', left: 'Alcohol', right: 'Daño del hígado' }, { id: 'i', left: 'Inhalantes', right: 'Daño cerebral' }] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.4'], prompt: 'Resuelve: 50 − 4 × (3 + 7)' },
          { answer: 10, misconceptions: [{ value: 460, msg: 'Resolviste de izquierda a derecha sin respetar la jerarquía.' }] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.3'], prompt: 'Encuentra el término que falta: 135 − □ = 58' },
          { answer: 77, misconceptions: [{ value: 193, msg: 'Sumaste; aquí lo que falta es lo que se restó: 135 − 58.' }] }),
        S.sort({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.2'], prompt: '¿Democrático o autoritario?' },
          { buckets: [{ id: 'd', label: 'Democrático', icon: 'Users' }, { id: 'a', label: 'Autoritario', icon: 'Lock' }],
            items: [{ id: 'x', text: 'Rinde cuentas', bucket: 'd' }, { id: 'y', text: 'No acepta críticas', bucket: 'a' }, { id: 'z', text: 'Escucha propuestas', bucket: 'd' }] }),
        S.order({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.3.2'], prompt: 'Put the story in order.' },
          { items: [{ id: 'a', text: 'First, Ana woke up early.' }, { id: 'b', text: 'Then, she had breakfast.' }, { id: 'c', text: 'Next, she walked to school.' }, { id: 'd', text: 'Finally, she met her friends.' }] }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.3.2'], prompt: '"Todos los jóvenes pasan el día entero en el celular." Esta frase es…' },
          { options: [{ id: 'a', text: 'Una generalización' }, { id: 'b', text: 'Un hecho comprobado' }, { id: 'c', text: 'Una receta' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.4.1'], prompt: '¿Qué parte del proyecto de vida describe las acciones concretas para lograr una meta?' },
          { options: [{ id: 'a', text: 'Los pasos' }, { id: 'b', text: 'El título' }, { id: 'c', text: 'Los márgenes' }], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 2 */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.1.2'], prompt: '¿Cuál es una fuente **primaria** para estudiar la época de la Independencia?' },
      { options: [{ id: 'a', text: 'El Acta de Independencia de 1821' }, { id: 'b', text: 'Un video animado hecho este año' }, { id: 'c', text: 'Un resumen en un libro escolar actual' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.3.2'], prompt: '¿Qué parte de un informe resume lo que aprendiste al final?' },
      { options: [{ id: 'a', text: 'Las conclusiones' }, { id: 'b', text: 'El título' }, { id: 'c', text: 'El procedimiento' }], correct: ['a'] }),
    S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.5.2'], prompt: '¿Verdadero o falso?' },
      { statements: [{ text: 'El VIH no se transmite por compartir platos.', answer: true }, { text: 'Los mosquitos transmiten el VIH.', answer: false }] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.1.2', 'cnt:4.3.1'], prompt: '¿Qué enfermedades se pueden adquirir al compartir jeringas?' },
      { options: [{ id: 'a', text: 'VIH y hepatitis' }, { id: 'b', text: 'Resfriado común' }, { id: 'c', text: 'Caries' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.4'], prompt: 'Resuelve: 6 + 18 ÷ 3 × 2' },
      { answer: 18, misconceptions: [{ value: 9, msg: 'Multiplicaste 3 × 2 antes de dividir: × y ÷ se resuelven de izquierda a derecha.' }, { value: 16, msg: 'Sumaste 6 + 18 primero: la suma se resuelve al final.' }, { value: 12, msg: 'Revisa: 18 ÷ 3 = 6; 6 × 2 = 12; y falta sumar 6.' }] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.3'], prompt: 'Encuentra el término que falta: □ ÷ 9 = 7' },
      { answer: 63 }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.5'], prompt: '¿Qué conector introduce una **conclusión**?' },
      { options: [{ id: 'a', text: 'En resumen' }, { id: 'b', text: 'Había una vez' }, { id: 'c', text: 'Por ejemplo' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.4'], prompt: 'En una línea de tiempo aparecen 1821 (Independencia) y 1944 (Revolución de Octubre). ¿Cuántos años hay entre ambos hechos?' },
      { options: [{ id: 'a', text: '123 años' }, { id: 'b', text: '223 años' }, { id: 'c', text: '23 años' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.1'], prompt: 'Para lanzar lejos una pelota pequeña con la mano derecha, ¿qué pie va adelante?' },
      { options: [{ id: 'a', text: 'El izquierdo (el contrario)' }, { id: 'b', text: 'El derecho' }, { id: 'c', text: 'Los dos juntos' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.2'], prompt: 'Una presidenta del gobierno escolar informa en qué se gastó el dinero y pide opiniones. Su liderazgo es…' },
      { options: [{ id: 'a', text: 'Democrático' }, { id: 'b', text: 'Autoritario' }, { id: 'c', text: 'Indiferente' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:2.1.1'], prompt: 'Al formar un grupo musical, ¿qué instrumento se encarga principalmente del **ritmo**?' },
      { options: [{ id: 'a', text: 'El tambor' }, { id: 'b', text: 'La flauta' }, { id: 'c', text: 'La chirimía' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.4.1'], prompt: '¿Qué meta de un proyecto de vida es más clara y posible?' },
      { options: [{ id: 'a', text: '"Terminar el básico y estudiar para ser técnico agrícola"' }, { id: 'b', text: '"Ser feliz algún día"' }, { id: 'c', text: '"Nada"' }], correct: ['a'] }),
  ],
});
