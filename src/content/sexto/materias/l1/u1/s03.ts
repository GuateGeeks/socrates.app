/**
 * Comunicación y Lenguaje L1 · Unidad 1 · Semana 3
 * Hilo de la semana: primero, saber dónde buscar (materiales de consulta y cómo decidir si una
 * información es pertinente). Después, entrar al teatro: el texto dramático, su estructura y
 * sus tipos, como preparación para escenificar en la semana 4.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's03-l1-1',
    title: '¿Dónde busco? Los materiales de consulta',
    icon: 'Library',
    minutes: 13,
    gancho: 'Si quisieras saber qué significa una palabra, dónde queda un río o qué pasó ayer en tu departamento, ¿buscarías en el mismo lugar?',
    objetivos: ['Elegir una fuente de consulta pertinente según la información que se necesita'],
    resumen: [
      'Diccionario: significado y escritura de las palabras. Enciclopedia: explicaciones sobre muchos temas. Atlas: mapas. Periódico: noticias recientes. Libro de texto: temas de cada materia.',
      'Las personas que saben de un tema (abuelos, artesanos, autoridades comunitarias, personal de salud) también son una fuente valiosa: se les consulta con una entrevista.',
      'Algunos sitios de internet de instituciones confiables también sirven; conviene usarlos con ayuda de un adulto.',
      'Antes de buscar, pregúntate qué necesitas saber exactamente; eso te dice qué material usar.',
    ],
    media: {
      id: 's03-l1-1-biblioteca', kind: 'image', title: 'La biblioteca de la escuela', aspect: '16:9',
      alt: 'Estantería de una biblioteca escolar con secciones rotuladas: diccionarios, enciclopedias, atlas, periódicos y libros de texto. Una niña consulta un atlas abierto.',
      brief: 'Ilustración de una biblioteca escolar sencilla en Guatemala: estantes de madera con carteles "Diccionarios", "Enciclopedias", "Atlas", "Periódicos" y "Libros de texto". Una niña con corte de pelo corto consulta un atlas con el mapa de Guatemala; un niño lee un periódico en una mesa. Por la ventana se ven montañas. Sin marcas de editoriales.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'conocer', title: 'Cada material tiene su especialidad',
          prompt: 'Los **materiales de consulta** son los que usamos para buscar información, no para leerlos de principio a fin. Toca cada tarjeta.' },
        { icon: 'Library', body: 'Elegir bien el material te ahorra tiempo y te da información **pertinente**: la que de verdad responde lo que necesitas.', reveal: [
          { icon: 'Book', front: 'Diccionario', back: 'Significado de las palabras, cómo se escriben y, a veces, sinónimos. Ordenado alfabéticamente.' },
          { icon: 'Library', front: 'Enciclopedia', back: 'Explicaciones sobre muchísimos temas: animales, países, inventos, personajes. Puede tener uno o muchos tomos, o estar en formato digital.' },
          { icon: 'Map', front: 'Atlas', back: 'Colección de **mapas**: ubicación de países, departamentos, ríos, montañas, climas, población.' },
          { icon: 'Newspaper', front: 'Periódico', back: 'Noticias **recientes**: lo que pasó ayer o esta semana en la comunidad, el país y el mundo.' },
          { icon: 'GraduationCap', front: 'Libro de texto', back: 'Explica los temas de una **materia escolar** en orden, con ejemplos y ejercicios.' },
          { icon: 'Users', front: 'Personas de la comunidad', back: 'Abuelas y abuelos, artesanos, comadronas, agricultores, autoridades comunitarias: saben cosas que **no están en los libros**. Se les consulta con una entrevista respetuosa.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'conocer',
          prompt: 'Necesitas saber **en qué departamento está el lago de Izabal**. ¿Qué material consultarías primero?',
          explain: 'Un **atlas** es un libro de mapas: muestra dónde está cada lugar. Hoy conocerás para qué sirve cada material de consulta.' },
        { options: [
          { id: 'a', text: 'Un diccionario', icon: 'Book', feedback: 'El diccionario explica el significado de las palabras, no la ubicación de los lugares.' },
          { id: 'b', text: 'Un atlas', icon: 'Map' },
          { id: 'c', text: 'Un libro de cuentos', icon: 'BookOpen', feedback: 'Los cuentos son para disfrutar historias, no para ubicar lugares.' },
        ], correct: ['b'] },
      ),
      S.match(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'hacer', prompt: 'Une cada necesidad con el material más adecuado.',
          hint: 'Pregúntate qué tipo de información necesitas: ¿un significado, un lugar, algo reciente, una explicación?',
          explain: 'Cada material responde un tipo de pregunta. A veces se usan varios para un mismo trabajo.' },
        { leftTitle: 'Necesito saber…', rightTitle: 'Consulto…', pairs: [
          { id: 'n1', left: 'Qué significa "artesanía"', right: 'Diccionario' },
          { id: 'n2', left: 'Por dónde pasa el río Motagua', right: 'Atlas' },
          { id: 'n3', left: 'Qué decidió ayer la municipalidad', right: 'Periódico' },
          { id: 'n4', left: 'Cómo se preparaba el atol en la aldea hace 50 años', right: 'Una abuela o un abuelo de la comunidad' },
          { id: 'n5', left: 'Cómo viven las ballenas', right: 'Enciclopedia' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'hacer', title: 'Ejemplo resuelto: un tema, varios materiales',
          prompt: 'A veces un trabajo necesita varios materiales. Mira cómo lo planea Kevin.' },
        { icon: 'ClipboardList', problem: 'Kevin investigará sobre **el quetzal**: qué significa su nombre, dónde vive, qué come y si está en peligro.',
          steps: [
            { text: '"¿Dónde vive?" → **atlas** (mapa de bosques nubosos) y **enciclopedia**.', why: 'Es una pregunta de ubicación y de características del ave.' },
            { text: '"¿Qué come?" → **enciclopedia** o libro de Ciencias Naturales.' },
            { text: '"¿Qué significa su nombre?" → **diccionario** (algunos explican el origen de las palabras).' },
            { text: '"¿Está en peligro hoy?" → **periódico** o sitio de una institución de conservación, porque es información **actual**.', why: 'Una enciclopedia vieja podría tener datos que ya cambiaron.' },
          ],
          answer: 'Kevin usará atlas, enciclopedia, diccionario y periódico: un material para cada pregunta.',
          tip: 'Divide tu tema en preguntas y busca el mejor material para cada una.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'hacer',
          prompt: 'Ahora tú. Quieres saber **qué noticias hubo esta semana** sobre el clima en tu departamento. ¿Qué material es el más adecuado?',
          hint: 'La clave está en "esta semana": ¿qué material trae información reciente?',
          explain: 'Para información reciente se consulta el periódico (impreso o digital) o las noticias de radio y televisión.' },
        { options: [
          { id: 'a', text: 'El periódico de esta semana', icon: 'Newspaper' },
          { id: 'b', text: 'Un atlas', icon: 'Map', feedback: 'El atlas muestra climas en general, pero no noticias de esta semana.' },
          { id: 'c', text: 'Una enciclopedia de hace diez años', icon: 'Library', feedback: 'No puede tener noticias de esta semana.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'hacer', prompt: 'Clasifica cada pregunta según el material que consultarías primero.',
          explain: 'Diccionario para palabras, atlas para lugares, persona de la comunidad para saberes y memorias locales.' },
        { buckets: [
          { id: 'dic', label: 'Diccionario', icon: 'Book', color: 'var(--area-l1)' },
          { id: 'atl', label: 'Atlas', icon: 'Map', color: 'var(--c-ok)' },
          { id: 'per', label: 'Persona de la comunidad', icon: 'Users', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'p1', text: '¿Cómo se escribe "ahorita": junto o separado?', bucket: 'dic' },
          { id: 'p2', text: '¿Qué departamentos tienen frontera con México?', bucket: 'atl' },
          { id: 'p3', text: '¿Cómo se celebraba la feria del pueblo cuando mi abuela era niña?', bucket: 'per' },
          { id: 'p4', text: '¿Qué significa "cosecha"?', bucket: 'dic' },
          { id: 'p5', text: '¿Qué plantas medicinales usa la comadrona de la aldea?', bucket: 'per', feedback: 'Es un saber local: nadie lo sabe mejor que ella. Pregúntale con respeto y pide permiso para anotarlo.' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'hacer',
          prompt: 'Elige un tema que te interese de tu comunidad (un río, una comida, una fiesta, un oficio). Escribe **dos preguntas** sobre ese tema y, al lado de cada una, **qué material o persona** consultarías y por qué.' },
        { minWords: 25, placeholder: 'Tema: …\n1. ¿…? → Consultaré… porque…\n2. ¿…? → …',
          model: 'Tema: el pepián\n1. ¿Qué ingredientes lleva el pepián? → Consultaré a mi abuela, porque ella lo cocina desde niña.\n2. ¿En qué regiones de Guatemala se prepara? → Consultaré una enciclopedia o un libro sobre comida guatemalteca, porque tienen información de todo el país.',
          rubric: [
            'Escribí un tema y dos preguntas',
            'Elegí un material o persona para cada pregunta',
            'Expliqué por qué ese material es adecuado',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.3'], prompt: '¿Qué material de consulta es una colección de **mapas**?' },
        { options: [
          { id: 'a', text: 'El atlas' },
          { id: 'b', text: 'El diccionario' },
          { id: 'c', text: 'El periódico' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.3'], prompt: 'Quieres saber **cómo se teje un petate** de tule en tu comunidad. ¿Cuál es la mejor fuente?' },
        { options: [
          { id: 'a', text: 'Una persona de la comunidad que teje petates' },
          { id: 'b', text: 'Un atlas' },
          { id: 'c', text: 'Un diccionario' },
        ], correct: ['a'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's03-l1-2',
    title: '¿Me sirve esta información? La pertinencia',
    icon: 'Filter',
    minutes: 14,
    gancho: 'Buscas qué come el quetzal y encuentras un texto larguísimo sobre aves. ¿Tienes que leerlo todo?',
    objetivos: ['Localizar información pertinente para una pregunta usando títulos, índices y subtítulos'],
    resumen: [
      'Una información es pertinente cuando responde tu pregunta o ayuda a responderla.',
      'Para decidir rápido, mira el título, el índice y los subtítulos del material: si no hablan de tu tema, probablemente no te sirve.',
      'Un texto puede ser interesante y correcto, pero no pertinente: si no responde tu pregunta, déjalo para otro momento.',
    ],
    media: {
      id: 's03-l1-2-filtro', kind: 'animation', title: 'El filtro de la pregunta', aspect: '16:9', duration: 35,
      alt: 'Una pregunta escrita arriba funciona como colador: varios papelitos con información caen; solo los que responden la pregunta pasan al frasco.',
      brief: 'Animación 2D de 35 s. Arriba, un colador con la etiqueta "¿Qué come el quetzal?". Caen tarjetas: "Come frutos como el aguacatillo" (pasa, se pone verde), "El quetzal es el ave nacional" (rebota, gris), "También come insectos y pequeños animales" (pasa), "La moneda de Guatemala se llama quetzal" (rebota). Texto final: "Pertinente = responde mi pregunta". Colores planos, voz en off breve.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'conocer', title: '¿Qué es información pertinente?',
          prompt: 'Toca cada tarjeta para aprender a filtrar la información.' },
        { icon: 'Filter', body: '**Pertinente** significa que **viene al caso**: responde tu pregunta o te ayuda a responderla. Tu pregunta funciona como un **filtro**.', reveal: [
          { icon: 'HelpCircle', front: '1. Ten clara tu pregunta', back: 'Escríbela antes de buscar. Sin pregunta, todo parece importante y te pierdes.' },
          { icon: 'Heading', front: '2. Mira títulos e índice', back: 'Revisa el título del libro, el índice y los subtítulos. Si ninguno habla de tu tema, busca otro material.' },
          { icon: 'Search', front: '3. Lee rápido y luego despacio', back: 'Recorre el texto rápidamente buscando palabras de tu pregunta. Cuando las encuentres, lee esa parte con atención.' },
          { icon: 'Check', front: '4. Pregúntate: ¿responde?', back: 'Si la información responde tu pregunta, anótala. Si es interesante pero no responde, **no la uses** en este trabajo.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'conocer',
          prompt: 'Tu pregunta es: **"¿Qué come el quetzal?"**. ¿Cuál de estas oraciones te sirve para responderla?',
          explain: 'Las otras dos oraciones son verdaderas, pero no responden la pregunta. La información que sí la responde se llama **pertinente**.' },
        { options: [
          { id: 'a', text: '"El quetzal es el ave nacional de Guatemala."', icon: 'Bird', feedback: 'Es cierto, pero no dice qué come.' },
          { id: 'b', text: '"Se alimenta principalmente de frutos, como el aguacatillo, y también de insectos."', icon: 'Apple' },
          { id: 'c', text: '"La moneda de Guatemala también se llama quetzal."', icon: 'Coins', feedback: 'Es cierto, pero habla de la moneda, no del ave.' },
        ], correct: ['b'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'hacer', title: 'Ejemplo resuelto: usar el índice',
          prompt: 'Mira cómo decide Rosa qué parte de un libro le sirve.' },
        { icon: 'ListOrdered', problem: 'Pregunta de Rosa: **"¿Cómo se forma un volcán?"** Índice del libro "La Tierra que pisamos": 1. El planeta Tierra, pág. 5 · 2. Las capas de la Tierra, pág. 12 · 3. Volcanes: cómo nacen y crecen, pág. 20 · 4. Los volcanes de Guatemala, pág. 28 · 5. Cuidemos el suelo, pág. 36.',
          steps: [
            { text: 'Busco en el índice palabras de mi pregunta: "volcán", "forma".' },
            { text: 'El capítulo 3, **"Volcanes: cómo nacen y crecen"**, responde directamente "¿cómo se forma?".', why: '"Nacen" es otra forma de decir "se forman".' },
            { text: 'El capítulo 4 habla de volcanes, pero de **cuáles hay** en Guatemala: es interesante, pero no responde mi pregunta.' },
            { text: 'Voy directo a la **página 20**.' },
          ],
          answer: 'El capítulo pertinente es el 3 (página 20).',
          tip: 'Un capítulo puede hablar de tu tema sin responder tu pregunta. Fíjate en lo que preguntas exactamente.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'hacer',
          prompt: 'Ahora tú. Con el mismo índice del ejemplo, tu pregunta es: **"¿Qué puedo hacer para cuidar el suelo de mi comunidad?"** ¿Qué capítulo es pertinente?',
          hint: 'Busca en el índice una palabra que aparezca en tu pregunta.',
          explain: 'El capítulo 5, "Cuidemos el suelo", responde directamente la pregunta.' },
        { options: [
          { id: 'a', text: 'Capítulo 2: Las capas de la Tierra', feedback: 'Habla de la Tierra por dentro, no de cómo cuidar el suelo.' },
          { id: 'b', text: 'Capítulo 5: Cuidemos el suelo' },
          { id: 'c', text: 'Capítulo 4: Los volcanes de Guatemala', feedback: 'No habla de cuidar el suelo.' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'hacer',
          prompt: 'Práctica guiada: investigas **por qué se contamina el río de tu comunidad**. Clasifica estos títulos según ayuden o no a responder.',
          hint: 'Busca palabras relacionadas con las causas de contaminación del río, no solo la palabra “agua”.',
          explain: 'Un título es pertinente cuando apunta a la pregunta exacta. “Aves del humedal” se relaciona con el río, pero no explica por qué se contamina.' },
        { buckets: [
          { id: 'si', label: 'Pertinente', icon: 'CheckCircle' },
          { id: 'no', label: 'No pertinente', icon: 'X' },
        ], items: [
          { id: 'a', text: 'Basura y aguas residuales: causas de contaminación del río', bucket: 'si' },
          { id: 'b', text: 'Aves que viven cerca de los humedales', bucket: 'no' },
          { id: 'c', text: 'Cómo llegan los desechos de las calles al agua', bucket: 'si' },
          { id: 'd', text: 'Deportes que se practican en lagos', bucket: 'no' },
        ] },
      ),
      S.highlight(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'hacer',
          prompt: 'Tu pregunta: **"¿Dónde vive el quetzal?"**. Lee el texto y toca **solo las frases pertinentes**.',
          explain: 'Solo las frases sobre bosques nubosos y lugares donde se protege al quetzal responden "¿dónde vive?". Su canto y la moneda son datos interesantes, pero no pertinentes para esta pregunta.' },
        { target: 'frases pertinentes', text: 'El quetzal tiene plumas verdes brillantes. {Vive en los bosques nubosos de las montañas}, donde casi siempre hay neblina. Su canto es suave y repetido. {En Baja Verapaz hay un área protegida llamada Biotopo del Quetzal.} Su nombre también se usa para la moneda del país.' },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.3'], ambito: 'hacer',
          prompt: 'Lee la situación y decide qué materiales son pertinentes.' },
        { genre: 'Situación', heading: 'La investigación de Marvin', passage:
          'Marvin quiere responder esta pregunta: **"¿Qué tradiciones se celebran en mi municipio durante la feria patronal?"**\n\nEn la biblioteca encontró cuatro materiales:\n\n1. Un libro llamado "Fiestas y tradiciones de los municipios de Guatemala", con un capítulo sobre su departamento.\n2. Un atlas con mapas del clima.\n3. Un folleto de la municipalidad sobre el programa de la feria de este año.\n4. Una enciclopedia sobre los dinosaurios.\n\nAdemás, su abuelo le dijo que desde niño participa en el baile de la feria.',
          questions: [
            { q: '¿Qué material **no** es pertinente para la pregunta de Marvin?', options: [
              { id: 'a', text: 'La enciclopedia de dinosaurios' },
              { id: 'b', text: 'El folleto de la municipalidad' },
              { id: 'c', text: 'El libro de fiestas y tradiciones' },
            ], correct: 'a', why: 'Los dinosaurios no tienen relación con la feria de su municipio.' },
            { q: '¿Por qué el abuelo es una fuente valiosa?', options: [
              { id: 'a', text: 'Porque conoce la tradición por experiencia propia desde hace muchos años' },
              { id: 'b', text: 'Porque sabe dibujar mapas' },
              { id: 'c', text: 'Porque tiene muchos libros' },
            ], correct: 'a', why: 'Las personas que viven una tradición saben detalles que no aparecen en los libros.' },
            { q: 'El atlas del clima, ¿es pertinente?', options: [
              { id: 'a', text: 'No, porque su pregunta no es sobre el clima' },
              { id: 'b', text: 'Sí, porque todos los libros sirven para todo' },
            ], correct: 'a', why: 'Un material puede ser bueno, pero si no responde tu pregunta no es pertinente.' },
          ] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.3'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Una información pertinente es la que responde tu pregunta.', answer: true },
          { text: 'Si un texto es interesante, siempre es pertinente para tu trabajo.', answer: false, why: 'Puede ser interesante sin responder tu pregunta.' },
          { text: 'El índice de un libro ayuda a saber rápido si el libro tiene lo que buscas.', answer: true },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.3'], prompt: 'Tu pregunta es: **"¿Cómo se cultiva el café?"** ¿Qué capítulo es pertinente?' },
        { options: [
          { id: 'a', text: '"Siembra y cuidado del cafetal"' },
          { id: 'b', text: '"Historia de las monedas"' },
          { id: 'c', text: '"Recetas de postres"' },
        ], correct: ['a'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 3 ─────────────────────────────
  lesson({
    id: 's03-l1-3',
    title: 'El texto dramático: diálogos, personajes y acotaciones',
    icon: 'Drama',
    minutes: 14,
    gancho: 'Un cuento se lee; una obra de teatro se lee… y también se actúa. ¿Crees que se escriben igual?',
    objetivos: ['Interpretar un texto dramático distinguiendo personajes, diálogos y acotaciones'],
    resumen: [
      'El texto dramático está escrito para ser representado en un escenario por actrices y actores frente a un público.',
      'La historia avanza por medio de los diálogos: lo que dicen los personajes. No hay narrador que cuente todo.',
      'Las acotaciones son indicaciones del autor, entre paréntesis y en cursiva: dicen dónde ocurre la escena, cómo se mueven los personajes, cómo hablan y qué sonidos hay. No se leen en voz alta como diálogo.',
      'Antes del diálogo se escribe el nombre del personaje que habla.',
    ],
    media: {
      id: 's03-l1-3-teatro', kind: 'video', title: 'Del papel al escenario', aspect: '16:9', duration: 60,
      alt: 'Una página de guion teatral se transforma en una escena actuada: las acotaciones se convierten en movimientos y los diálogos en voces.',
      brief: 'Video de 60 s. Primero, plano cenital de una página de guion con el fragmento "La carta de doña Chus" (nombres en mayúsculas, acotaciones en cursiva). Luego transición a un pequeño escenario escolar con telón de tela: dos estudiantes actúan la escena; cada vez que se cumple una acotación, aparece resaltada en pantalla ("mira el sobre, sorprendida"). Música suave de marimba al inicio y al final. Actores niños de 11-12 años, vestuario sencillo. Sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'conocer', title: 'Los elementos del texto dramático',
          prompt: 'El **texto dramático** es el que se escribe para ser **representado**. Toca cada tarjeta.' },
        { icon: 'Drama', body: 'En un cuento, el narrador nos cuenta la historia. En el teatro, **los personajes la viven frente a nosotros**: la historia avanza con lo que dicen y hacen.', reveal: [
          { icon: 'Users', front: 'Personajes', back: 'Quienes participan en la historia. Al inicio de la obra suele haber una **lista de personajes**. En el texto, el nombre va antes de cada intervención, muchas veces en MAYÚSCULAS.' },
          { icon: 'MessagesSquare', front: 'Diálogos', back: 'Lo que **dicen** los personajes. Son el corazón del texto dramático: por ellos sabemos qué piensan, qué sienten y qué pasa. Cuando un personaje habla solo, se llama **monólogo**.' },
          { icon: 'Info', front: 'Acotaciones', back: 'Indicaciones del autor, **entre paréntesis y en cursiva**: lugar, tiempo, movimientos, gestos, tono de voz, sonidos, luces. **No se dicen** en voz alta: se actúan.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'conocer',
          prompt: 'Compara estos dos fragmentos. ¿Cuál está escrito para **ser actuado** en un escenario?\n\n**A:** Doña Chus abrió la puerta y vio al cartero, que le entregó una carta con cara de preocupación.\n\n**B:** DOÑA CHUS: _(abre la puerta)_ ¡Buenos días, don Beto! ¿Qué me trae hoy?',
          explain: 'El fragmento B tiene el nombre del personaje, lo que dice (diálogo) y una indicación entre paréntesis (acotación). Esa es la forma del **texto dramático**.' },
        { options: [
          { id: 'a', text: 'El fragmento A', feedback: 'El A tiene un narrador que cuenta lo que pasa: es un texto narrativo, como un cuento.' },
          { id: 'b', text: 'El fragmento B' },
        ], correct: ['b'] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'conocer',
          prompt: 'Lee este texto dramático. Fíjate en quién habla y en las acotaciones. Luego responde.' },
        { genre: 'Texto dramático', heading: 'La carta de doña Chus (obra breve en un acto)', passage:
          '**Personajes:** DOÑA CHUS, vendedora de atol. BETO, el cartero del pueblo. LUPITA, nieta de doña Chus.\n\n_(Una esquina del mercado, temprano en la mañana. DOÑA CHUS sirve atol en una olla grande. Entra BETO con su bolsa de cartas, un poco cansado.)_\n\nBETO: ¡Buenos días, doña Chus! Hoy le traigo algo especial.\n\nDOÑA CHUS: _(sin dejar de servir)_ A mí nadie me escribe, Beto. Ha de ser para otra Chus.\n\nBETO: _(le muestra el sobre, sonriendo)_ "Para Jesusa Ajcot, la del atol más rico del mercado". ¿Cuántas Chus conoce con ese atol?\n\n_(DOÑA CHUS deja el cucharón. Toma el sobre con las dos manos, despacio.)_\n\nDOÑA CHUS: _(en voz baja)_ Es la letra de mi hijo… el que se fue a trabajar lejos.\n\nLUPITA: _(entra corriendo)_ ¡Abuela, abuela! ¿Es carta de mi papá? ¡Léala, léala!\n\nDOÑA CHUS: _(le da el sobre, con los ojos brillantes)_ Léela tú, mija. Tú lees más bonito que yo.\n\n_(LUPITA abre el sobre. BETO se quita la gorra y se queda a escuchar. Se apaga la luz poco a poco.)_',
          questions: [
            { q: '¿Cuántos personajes participan en la escena?', options: [
              { id: 'a', text: 'Tres: doña Chus, Beto y Lupita' },
              { id: 'b', text: 'Dos: doña Chus y Beto' },
              { id: 'c', text: 'Cuatro, contando al hijo' },
            ], correct: 'a', why: 'La lista de personajes y los nombres antes de cada diálogo lo muestran. El hijo se menciona, pero no aparece en escena.' },
            { q: '¿Qué información nos da la acotación "(en voz baja)"?', options: [
              { id: 'a', text: 'Cómo debe hablar la actriz: está conmovida' },
              { id: 'b', text: 'Algo que doña Chus dice en voz alta' },
              { id: 'c', text: 'El lugar donde ocurre la escena' },
            ], correct: 'a', why: 'Las acotaciones indican el tono de voz; aquí muestran la emoción del personaje.' },
            { q: '¿Por qué doña Chus le pide a Lupita que lea la carta?', options: [
              { id: 'a', text: 'Porque está emocionada y confía en cómo lee su nieta' },
              { id: 'b', text: 'Porque está enojada con su hijo' },
              { id: 'c', text: 'Porque la carta es para Lupita' },
            ], correct: 'a', why: 'Es una inferencia: sus ojos brillantes y su frase "Tú lees más bonito que yo" muestran emoción y cariño.' },
            { q: '¿Qué acotación indica el **final** de la obra?', options: [
              { id: 'a', text: '"Se apaga la luz poco a poco."' },
              { id: 'b', text: '"(entra corriendo)"' },
              { id: 'c', text: '"(sin dejar de servir)"' },
            ], correct: 'a', why: 'Apagar la luz poco a poco es una forma de cerrar una obra o una escena en el teatro.' },
          ] },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'hacer',
          prompt: 'Toca todas las **acotaciones** de este fragmento.',
          hint: 'Las acotaciones van entre paréntesis y no son palabras que el personaje dice.',
          explain: 'Las acotaciones se actúan, no se dicen: indican gestos, movimientos y sonidos.' },
        { target: 'acotaciones', text: 'BETO: {(toca la puerta tres veces)} ¡Correo!\nLUPITA: {(abre y bosteza)} Buenos días, don Beto.\nBETO: Traigo un paquete pesado. {(Lo pone en el suelo con cuidado.)}\nLUPITA: {(con sorpresa)} ¡Es de mi tía de Cobán!' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'conocer', prompt: 'Clasifica cada característica: ¿es de un **texto narrativo** (cuento) o de un **texto dramático** (teatro)?',
          hint: 'Piensa: ¿hay un narrador que cuenta, o personajes que hablan directamente?',
          explain: 'Los dos cuentan historias con personajes y conflicto, pero de forma distinta: el cuento con un narrador y el teatro con diálogos y acotaciones.' },
        { buckets: [
          { id: 'nar', label: 'Texto narrativo', icon: 'BookOpen', color: 'var(--area-l1)' },
          { id: 'dra', label: 'Texto dramático', icon: 'Drama', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 't1', text: 'Un narrador cuenta lo que pasa', bucket: 'nar' },
          { id: 't2', text: 'La historia avanza por los diálogos', bucket: 'dra' },
          { id: 't3', text: 'Tiene acotaciones entre paréntesis', bucket: 'dra' },
          { id: 't4', text: 'Está escrito para ser representado ante un público', bucket: 'dra' },
          { id: 't5', text: 'Se organiza en párrafos con descripciones del narrador', bucket: 'nar' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'hacer', title: 'Ejemplo resuelto: de cuento a texto dramático',
          prompt: 'Mira cómo se convierte una parte de un cuento en texto dramático.' },
        { icon: 'RefreshCw', problem: 'Cuento: "Lupita entró a la cocina muy asustada y le dijo a su abuela que había visto un tacuazín en el patio. La abuela se rio y le dijo que no tuviera miedo."',
          steps: [
            { text: 'Identifico a los **personajes**: LUPITA y ABUELA.' },
            { text: 'Lo que el narrador **describe** (entrar asustada, reírse) pasa a **acotaciones**: _(entra corriendo, asustada)_, _(riéndose)_.', why: 'En el teatro no hay narrador: las acciones se indican para actuarlas.' },
            { text: 'Lo que los personajes **dicen** se escribe como **diálogo**, con sus propias palabras.' },
          ],
          answer: 'LUPITA: _(entra corriendo, asustada)_ ¡Abuela! ¡Hay un tacuazín en el patio!\nABUELA: _(riéndose)_ No tengas miedo, mija. Él tiene más miedo que tú.',
          tip: 'Narrador que describe → acotación. Personaje que habla → diálogo.' },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'hacer',
          prompt: 'Convierte este fragmento de cuento en **texto dramático**: "_Beto llegó con una carta mojada por la lluvia. Doña Chus se preocupó, pero Lupita dijo que todavía se podía leer y la abrió con cuidado._" Escribe los nombres de los personajes, los diálogos y al menos **dos acotaciones**.' },
        { minWords: 25, placeholder: 'BETO: (…) …\nDOÑA CHUS: …\nLUPITA: …',
          model: 'BETO: (entra sacudiéndose el agua del sombrero) Doña Chus, perdone… la carta se mojó con la lluvia.\nDOÑA CHUS: (preocupada, se lleva las manos a la cara) ¡Ay, no! ¿Y si ya no se puede leer?\nLUPITA: (toma el sobre y lo mira contra la luz) Tranquila, abuela, la letra todavía se ve. (Lo abre con mucho cuidado.)',
          rubric: [
            'Escribí el nombre del personaje antes de cada diálogo',
            'Los personajes hablan directamente (no hay narrador)',
            'Usé al menos dos acotaciones entre paréntesis',
            'Las acotaciones indican gestos, movimientos o tono de voz',
          ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'hacer',
          prompt: 'Una estudiante adapta una noticia sobre un bus detenido por un derrumbe. ¿Qué fragmento la convierte correctamente en texto dramático?' },
        { options: [
          { id: 'a', text: 'PILOTO: (mira la carretera y frena) Hay piedras en el camino. PASAJERA: Avisemos a la comunidad.' },
          { id: 'b', text: 'El piloto vio el derrumbe. Luego una pasajera habló. Fin.' },
          { id: 'c', text: '(La noticia dice que ayer hubo lluvia y explica tres causas del derrumbe.)' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.7'], prompt: 'En un texto dramático, ¿qué son las **acotaciones**?' },
        { options: [
          { id: 'a', text: 'Indicaciones del autor sobre lugar, gestos, movimientos o tono de voz' },
          { id: 'b', text: 'Lo que dicen los personajes en voz alta' },
          { id: 'c', text: 'El título de la obra' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.7'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En el texto dramático, la historia avanza principalmente por medio de los diálogos.', answer: true },
          { text: 'Las acotaciones se leen en voz alta como parte del diálogo.', answer: false, why: 'Se actúan, no se dicen.' },
          { text: 'Antes de cada diálogo se escribe el nombre del personaje que habla.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 4 ─────────────────────────────
  lesson({
    id: 's03-l1-4',
    title: 'Actos, escenas y conflicto: cómo se arma una obra',
    icon: 'Layers',
    minutes: 14,
    gancho: 'Cuando ves una obra de teatro, a veces se cierra el telón y luego se abre en otro lugar. ¿Por qué crees que la dividen así?',
    objetivos: ['Explicar cómo actos, escenas y conflicto organizan el planteamiento, nudo y desenlace de una obra'],
    resumen: [
      'Estructura externa: la obra se divide en actos (grandes partes, separadas por la caída del telón o un cambio de luces) y los actos en escenas (cambian cuando entra o sale un personaje).',
      'Estructura interna: planteamiento (se presentan personajes y situación), nudo (crece el conflicto) y desenlace (el conflicto se resuelve).',
      'El conflicto es el problema o choque de deseos que mueve la obra: sin conflicto, no hay historia.',
    ],
    media: {
      id: 's03-l1-4-estructura', kind: 'diagram', title: 'La estructura de una obra', aspect: '16:9',
      alt: 'Diagrama con una línea que sube como montaña: planteamiento al inicio, nudo en la subida y la cima, desenlace en la bajada. Debajo, bloques de actos divididos en escenas.',
      brief: 'Diagrama en dos niveles. Arriba, una línea de tensión en forma de montaña con tres zonas rotuladas y coloreadas: "Planteamiento" (inicio plano, verde), "Nudo" (subida y cima, naranja, con un rayo en la cima que dice "conflicto"), "Desenlace" (bajada, azul). Abajo, una barra dividida en "Acto I" y "Acto II", cada uno partido en pequeñas "Escena 1, 2, 3". Estilo limpio, colores planos, textos grandes.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'conocer', title: 'Estructura externa: cómo se divide la obra',
          prompt: 'La **estructura externa** es la forma en que se ve dividida la obra. Toca cada tarjeta.' },
        { icon: 'Layers', body: 'Así como un libro se divide en capítulos, una obra de teatro se divide en **actos** y **escenas**.', reveal: [
          { icon: 'Square', front: 'Acto', back: 'Cada una de las **grandes partes** de la obra. Se separan cerrando el telón, apagando las luces o con un cambio de escenografía. Las obras cortas pueden tener un solo acto.' },
          { icon: 'Users', front: 'Escena', back: 'Parte de un acto. Cambia cuando **entra o sale un personaje**. Por ejemplo: cuando Lupita entra corriendo, empieza una nueva escena.' },
          { icon: 'Image', front: 'Cuadro', back: 'Algunas obras usan cuadros: partes que cambian de **lugar o de decorado** (el mercado, la casa, el camino).' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'conocer',
          prompt: 'Recuerda "La carta de doña Chus". ¿Cuál era el **problema** o la **tensión** de la escena?',
          explain: 'La tensión estaba en la carta: ¿de quién es?, ¿qué dirá? Ese problema que mantiene al público atento se llama **conflicto**. Hoy verás cómo se organiza una obra alrededor de él.' },
        { options: [
          { id: 'a', text: 'Doña Chus no creía que la carta fuera para ella, y luego se emociona al saber que es de su hijo', icon: 'Mail' },
          { id: 'b', text: 'El atol estaba frío', icon: 'Coffee', feedback: 'Eso no pasa en la escena. Relee cuál es el centro de la historia.' },
          { id: 'c', text: 'No había ningún problema', icon: 'X', feedback: 'Toda obra tiene algo que crea tensión, aunque sea pequeño.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'conocer', title: 'Estructura interna: el recorrido de la historia',
          prompt: 'La **estructura interna** es cómo avanza la historia. Observa el diagrama y toca cada tarjeta.' },
        { icon: 'TrendingUp', body: 'El **conflicto** es el problema o choque de deseos entre personajes. Todo gira alrededor de él.', reveal: [
          { icon: 'Flag', front: 'Planteamiento', back: 'Se presentan los **personajes**, el **lugar** y la **situación** inicial. Aparece el problema.' },
          { icon: 'Zap', front: 'Nudo', back: 'El conflicto **crece**: hay obstáculos, discusiones, sorpresas. Es el momento de más tensión.' },
          { icon: 'CheckCircle', front: 'Desenlace', back: 'El conflicto **se resuelve**, bien o mal. La obra termina.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'hacer', title: 'Ejemplo resuelto: analizar una obra',
          prompt: 'Mira cómo se analiza la estructura de una obra corta.' },
        { icon: 'Search', problem: 'Resumen de la obra "El puente de la aldea" (un acto, tres escenas): Escena 1: la lluvia se lleva el puente y los niños no pueden ir a la escuela. Escena 2: los vecinos discuten; unos quieren esperar a la municipalidad y otros quieren construirlo ya. Escena 3: todos acuerdan construir un puente provisional juntos mientras llega la ayuda.',
          steps: [
            { text: '**Estructura externa**: 1 acto con 3 escenas.' },
            { text: '**Planteamiento** (escena 1): se presenta la aldea y el problema, sin puente no hay escuela.' },
            { text: '**Nudo** (escena 2): el conflicto crece con la discusión entre vecinos.', why: 'Aquí chocan dos deseos: esperar o actuar.' },
            { text: '**Desenlace** (escena 3): se resuelve con un acuerdo.' },
          ],
          answer: 'Un acto, tres escenas; planteamiento, nudo y desenlace; conflicto: cómo recuperar el paso a la escuela.',
          tip: 'Pregunta clave para hallar el conflicto: ¿qué quiere cada personaje y qué se lo impide?' },
      ),
      S.order(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'hacer', prompt: 'Ahora tú. Ordena las partes de la obra "El tambor perdido".',
          hint: 'Primero se presenta la situación; luego crece el problema; al final se resuelve.',
          explain: 'Planteamiento (se presenta el problema), nudo (crece la tensión) y desenlace (se resuelve).' },
        { labels: { start: 'Inicio', end: 'Final' }, items: [
          { id: 'e1', text: 'Planteamiento: el grupo de danza de la escuela se prepara para el desfile, pero el tambor desapareció.' },
          { id: 'e2', text: 'Nudo: todos se culpan entre sí y el grupo casi se separa; faltan solo dos horas.' },
          { id: 'e3', text: 'Nudo: la conserje cuenta que guardó el tambor en la bodega para protegerlo de la lluvia.' },
          { id: 'e4', text: 'Desenlace: el grupo se pide disculpas, recupera el tambor y desfila a tiempo.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'conocer',
          prompt: 'En una obra, la escena 2 termina cuando **sale** el personaje de la abuela. ¿Qué pasa según la estructura externa?',
          explain: 'Cuando entra o sale un personaje, cambia la escena.' },
        { options: [
          { id: 'a', text: 'Empieza una nueva escena' },
          { id: 'b', text: 'Se termina la obra', feedback: 'La salida de un personaje no termina la obra: solo cambia la escena.' },
          { id: 'c', text: 'Empieza el desenlace', feedback: 'El desenlace depende de si el conflicto se resuelve, no de la salida de un personaje.' },
        ], correct: ['a'] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'hacer',
          prompt: 'Lee el resumen de esta obra y responde.' },
        { genre: 'Resumen de obra dramática', heading: '"El mensaje del volcán" (dos actos)', passage:
          '**Acto I.** En una aldea al pie de un volcán, don Andrés siente temblores pequeños y ve salir más humo que de costumbre. Quiere avisar a todos, pero algunos vecinos se burlan: "Siempre echa humo", dicen.\n\n**Acto II.** Su nieta Karla propone escuchar a las autoridades de protección civil y organizar un simulacro. Al principio pocos participan, pero luego se suman más familias. Cuando llega el aviso oficial de evacuación preventiva, la aldea ya sabe qué hacer y todos salen en orden.',
          questions: [
            { q: '¿Cuál es el conflicto principal?', options: [
              { id: 'a', text: 'Don Andrés quiere prevenir un peligro, pero los vecinos no le creen' },
              { id: 'b', text: 'Karla no quiere ir a la escuela' },
              { id: 'c', text: 'El volcán es muy bonito' },
            ], correct: 'a', why: 'Hay un choque entre lo que quiere don Andrés (avisar) y la actitud de los vecinos (burlarse).' },
            { q: '¿En qué parte está el desenlace?', options: [
              { id: 'a', text: 'Al final del Acto II, cuando todos evacúan en orden' },
              { id: 'b', text: 'Al inicio del Acto I' },
              { id: 'c', text: 'Cuando los vecinos se burlan' },
            ], correct: 'a', why: 'El conflicto se resuelve cuando la aldea, preparada, actúa en orden.' },
            { q: '¿Qué mensaje transmite la obra?', options: [
              { id: 'a', text: 'Prepararse y escuchar a las autoridades protege a la comunidad' },
              { id: 'b', text: 'Hay que burlarse de quien avisa un peligro' },
              { id: 'c', text: 'Los volcanes no son peligrosos' },
            ], correct: 'a', why: 'La historia muestra que la preparación salvó a la aldea.' },
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.7'], prompt: '¿En qué parte de la estructura interna **crece** el conflicto y hay más tensión?' },
        { options: [
          { id: 'a', text: 'En el nudo' },
          { id: 'b', text: 'En el planteamiento' },
          { id: 'c', text: 'En el desenlace' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.7'], prompt: 'Une cada término con su definición.' },
        { pairs: [
          { id: 'd1', left: 'Acto', right: 'Gran parte de la obra, separada por el telón o las luces' },
          { id: 'd2', left: 'Escena', right: 'Parte que cambia cuando entra o sale un personaje' },
          { id: 'd3', left: 'Conflicto', right: 'Problema o choque de deseos que mueve la historia' },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 5 ─────────────────────────────
  lesson({
    id: 's03-l1-5',
    title: 'Tipos de obras y el mundo del teatro',
    icon: 'Theater',
    minutes: 14,
    gancho: 'Algunas obras te hacen reír a carcajadas y otras te dejan pensando en silencio. ¿Por qué serán tan distintas?',
    objetivos: ['Distinguir tipos de obras y reconocer los recursos humanos y escénicos que hacen posible el teatro'],
    resumen: [
      'Comedia: situaciones graciosas y final feliz; a veces se burla de defectos para que reflexionemos.',
      'Tragedia: conflicto muy serio que termina en desgracia para los personajes principales.',
      'Drama: mezcla momentos serios y alegres; su final puede ser feliz o triste, y se parece a la vida real.',
      'El teatro lo hacen muchas personas: dramaturgo (escribe la obra), director (guía la puesta en escena), actores y actrices, técnicos (luces, sonido, escenografía) y el público.',
      'El Rabinal Achí, de Rabinal, Baja Verapaz, es un drama danzado de origen prehispánico que la UNESCO reconoció como patrimonio cultural inmaterial de la humanidad.',
    ],
    media: {
      id: 's03-l1-5-mascaras', kind: 'image', title: 'Las dos máscaras del teatro', aspect: '1:1',
      alt: 'Las dos máscaras que simbolizan el teatro: una sonriente (comedia) y una triste (tragedia), sobre un telón rojo.',
      brief: 'Ilustración simbólica: dos máscaras teatrales clásicas, una sonriente y una triste, sobre un telón rojo. Debajo, rótulos "Comedia" y "Tragedia", y en medio una tercera máscara con expresión neutral-pensativa rotulada "Drama". Estilo gráfico sencillo, colores cálidos, sin texto adicional.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'conocer', title: 'Tipos de obras dramáticas',
          prompt: 'Desde la antigüedad, las obras de teatro se agrupan según su tono y su final. Toca cada tarjeta.' },
        { icon: 'Theater', body: 'Las dos máscaras (una ríe y otra llora) son el símbolo del teatro en todo el mundo.', reveal: [
          { icon: 'Smile', front: 'Comedia', back: 'Situaciones **graciosas**, enredos y confusiones. Termina **bien**. A veces se burla de defectos humanos (la envidia, la tacañería) para que reflexionemos riendo.' },
          { icon: 'CloudRain', front: 'Tragedia', back: 'Conflicto muy **serio**: los personajes luchan contra algo más fuerte que ellos (el destino, el poder). Termina en **desgracia**.' },
          { icon: 'Scale', front: 'Drama', back: '**Mezcla** momentos serios y alegres, como la vida real. Su final puede ser feliz o triste. "La carta de doña Chus" se acerca a este tipo.' },
          { icon: 'Hand', front: 'Obras para niñas y niños', back: 'También hay **teatro infantil** y de **títeres**, que suele combinar humor, aventura y una enseñanza. Lo verás la próxima semana.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'conocer',
          prompt: 'Una obra trata de un señor muy tacaño que esconde su dinero en lugares tan raros que al final ni él lo encuentra, y todos terminan riendo. ¿Qué tipo de obra crees que es?',
          explain: 'Situaciones graciosas, burla de un defecto (la tacañería) y final alegre: es una **comedia**. Hoy conocerás los tipos de obras dramáticas.' },
        { options: [
          { id: 'a', text: 'Una comedia', icon: 'Smile' },
          { id: 'b', text: 'Una tragedia', icon: 'CloudRain', feedback: 'En una tragedia el final es de desgracia; aquí todos terminan riendo.' },
          { id: 'c', text: 'Una noticia', icon: 'Newspaper', feedback: 'Una noticia informa hechos reales; esto es una obra de teatro.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'hacer', prompt: 'Clasifica cada obra según su tipo.',
          hint: 'Fíjate en el tono (gracioso o serio) y en el final (feliz, triste o mezclado).',
          explain: 'Comedia = risa y final feliz. Tragedia = seriedad y final de desgracia. Drama = mezcla, como la vida.' },
        { buckets: [
          { id: 'com', label: 'Comedia', icon: 'Smile', color: 'var(--c-ok)' },
          { id: 'tra', label: 'Tragedia', icon: 'CloudRain', color: 'var(--area-l1)' },
          { id: 'dra', label: 'Drama', icon: 'Scale', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'o1', text: 'Dos vecinos confunden sus gallinas y arman un enredo divertido que termina en una gran fiesta.', bucket: 'com' },
          { id: 'o2', text: 'Un rey orgulloso desafía a los dioses y lo pierde todo al final.', bucket: 'tra' },
          { id: 'o3', text: 'Una familia enfrenta la enfermedad del abuelo; hay momentos tristes y alegres, y al final se unen más.', bucket: 'dra' },
          { id: 'o4', text: 'Un vendedor presumido intenta engañar a todos y termina engañado; el público ríe.', bucket: 'com' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'conocer', title: 'Los recursos del teatro: quién y dónde',
          prompt: 'Una obra escrita cobra vida gracias a muchas personas y a un espacio. Toca cada tarjeta.' },
        { icon: 'Users', body: 'El teatro es un **arte colectivo**: nadie lo hace solo.', reveal: [
          { icon: 'PenLine', front: 'Dramaturgo o dramaturga', back: 'Quien **escribe** el texto dramático.' },
          { icon: 'Megaphone', front: 'Director o directora', back: 'Decide **cómo se representa**: dónde se para cada actor, cómo habla, qué luces y música hay.' },
          { icon: 'Drama', front: 'Actrices y actores', back: 'Dan vida a los personajes con su **voz, cuerpo y emociones**.' },
          { icon: 'Lightbulb', front: 'Equipo técnico', back: 'Se encarga de la **escenografía**, el vestuario, las **luces** y el **sonido**.' },
          { icon: 'Drama', front: 'Escenario', back: 'El **espacio** donde se actúa: puede ser un teatro, un patio, una plaza o el salón de clases.' },
          { icon: 'Users', front: 'Público', back: 'Quienes **miran**. Sin público, el teatro no está completo.' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'ser',
          prompt: 'Guatemala tiene una tradición teatral muy antigua. Lee y responde.' },
        { genre: 'Texto expositivo', heading: 'El Rabinal Achí: teatro que viene de lejos', passage:
          'En Rabinal, Baja Verapaz, se representa desde hace siglos una obra que combina **teatro, danza y música**: el **Rabinal Achí**. Su origen es prehispánico, es decir, de antes de la llegada de los españoles, y se transmitió de generación en generación.\n\nLa obra cuenta el enfrentamiento entre dos guerreros de pueblos rivales. Los personajes hablan en idioma **achi** y se mueven al ritmo de trompetas y tambores. Los danzantes usan **máscaras** y trajes especiales.\n\nPor su valor, la UNESCO la reconoció como **patrimonio cultural inmaterial de la humanidad**. Esto significa que es importante no solo para Guatemala, sino para todo el mundo, y que debemos cuidarla y transmitirla.',
          questions: [
            { q: '¿Qué artes combina el Rabinal Achí?', options: [
              { id: 'a', text: 'Teatro, danza y música' },
              { id: 'b', text: 'Pintura y escultura' },
              { id: 'c', text: 'Solo poesía escrita' },
            ], correct: 'a', why: 'Lo dice el primer párrafo.' },
            { q: 'Según el texto, ¿qué significa "prehispánico"?', options: [
              { id: 'a', text: 'De antes de la llegada de los españoles' },
              { id: 'b', text: 'Que se escribió en España' },
              { id: 'c', text: 'Que es muy moderno' },
            ], correct: 'a', why: 'El texto lo explica después de "es decir".' },
            { q: '¿Por qué es importante que las nuevas generaciones conozcan el Rabinal Achí?', options: [
              { id: 'a', text: 'Porque es parte de la memoria y la identidad de los pueblos, y puede perderse si no se transmite' },
              { id: 'b', text: 'Porque es la única obra que existe' },
              { id: 'c', text: 'Porque es una comedia muy graciosa' },
            ], correct: 'a', why: 'Una tradición oral vive mientras las personas la aprenden y la siguen representando.' },
          ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.7'], ambito: 'hacer', prompt: 'Tu grado prepara una obra para el día de la familia. Une cada tarea con la persona que la realiza.',
          explain: 'Cada persona aporta algo distinto; el teatro necesita trabajo en equipo.' },
        { leftTitle: 'Tarea', rightTitle: 'Quién la hace', pairs: [
          { id: 'q1', left: 'Escribe los diálogos y las acotaciones', right: 'Dramaturga' },
          { id: 'q2', left: 'Decide dónde se para cada actor en el escenario', right: 'Director' },
          { id: 'q3', left: 'Hace sonar el trueno con una lámina', right: 'Equipo técnico' },
          { id: 'q4', left: 'Aplaude y se emociona con la obra', right: 'Público' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.7'], prompt: 'Una obra mezcla momentos serios y alegres, se parece a la vida real y termina con la familia reconciliada. ¿Qué tipo de obra es?' },
        { options: [
          { id: 'a', text: 'Drama' },
          { id: 'b', text: 'Tragedia' },
          { id: 'c', text: 'Comedia' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.3'], prompt: 'Repaso: quieres saber **qué obras de teatro** se presentarán este mes en tu ciudad. ¿Qué material consultas?' },
        { options: [
          { id: 'a', text: 'El periódico o la cartelera cultural reciente' },
          { id: 'b', text: 'Un atlas' },
          { id: 'c', text: 'Un diccionario' },
        ], correct: ['a'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l1'], cnb: [], ambito: 'ser', prompt: '¿Cómo te fue esta semana?' },
        { statements: [
          'Elijo el material de consulta adecuado para cada pregunta',
          'Distingo la información pertinente de la que no lo es',
          'Reconozco personajes, diálogos y acotaciones en un texto dramático',
          'Identifico actos, escenas, conflicto y tipos de obras',
        ], commitments: [
          'Preguntaré a una persona mayor de mi familia qué obras o danzas tradicionales conoce',
          'Escribiré una escena corta con acotaciones',
          'Antes de buscar información, escribiré mi pregunta',
        ] },
      ),
    ],
  }),
];
