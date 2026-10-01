/**
 * L3 (inglés) · Unidad 1 · Semana 6
 * Seguir instrucciones escritas: verbos en imperativo y palabras de secuencia; instrucciones
 * de un juego (la lotería) y de un proyecto manual (un barrilete pequeño).
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's06-l3-1',
    title: 'First, then, finally: reading instructions',
    icon: 'ListOrdered',
    minutes: 14,
    gancho: 'En el baño de un hotel en Antigua hay un cartel: "Please turn off the light." ¿Sabrías qué hacer?',
    objetivos: [
      'Interpretar instrucciones y carteles en inglés',
    ],
    resumen: [
      'Las instrucciones empiezan con un verbo y no llevan pronombre: Cut the paper. Draw a circle.',
      'Please hace la instrucción más amable: Please close the door. Don\'t + verbo prohíbe: Don\'t run.',
      'Palabras de secuencia: first (primero), next (luego), then (después), after that (después de eso), finally (por último).',
      'Para seguir instrucciones: lee todo una vez, luego haz un paso a la vez en orden.',
    ],
    media: {
      id: 's06-l3-1-signs', kind: 'image', title: 'Signs with instructions', aspect: '4:3',
      alt: 'Cuatro carteles escolares en inglés: "Wash your hands", "Please close the door", "Don\'t run", "Turn off the light".',
      brief: 'Ilustración de un pasillo escolar con cuatro carteles claros, cada uno con un pictograma y texto en inglés: (1) lavamanos con gotas: "Wash your hands"; (2) puerta: "Please close the door"; (3) niño corriendo tachado en rojo: "Don\'t run"; (4) foco con interruptor: "Turn off the light". Letras grandes, fondo claro, sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'conocer', title: 'Instructions start with a verb',
          prompt: 'Las instrucciones (el **imperativo**) tienen una forma muy sencilla. Toca cada tarjeta.' },
        { icon: 'ClipboardList', body: 'En instrucciones **no** se escribe "you": el verbo va primero. Español: "Corta el papel". Inglés: "**Cut** the paper".', reveal: [
          { icon: 'Zap', front: 'Verbo primero', back: '**Cut** the paper. **Draw** a circle. **Open** your book.' },
          { icon: 'Heart', front: 'Please', back: 'Hace la instrucción amable: **Please** sit down. Sit down, **please**.' },
          { icon: 'Ban', front: 'Don\'t', back: 'Para prohibir: **Don\'t** touch. **Don\'t** eat in class. (Don\'t = do not)' },
        ] },
      ),
      S.cards(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'conocer', title: 'Instruction verbs',
          prompt: 'Estos verbos aparecen en casi todas las instrucciones de manualidades, recetas y juegos. Léelos en voz alta y voltea cada tarjeta.',
          media: { id: 's06-l3-1-verbs', kind: 'audio', title: 'Instruction verbs', duration: 30,
            alt: 'Una voz en inglés dice verbos de instrucción con un ejemplo cada uno.',
            brief: 'Audio de 30 s. Voz adulta, inglés claro, sin música. Texto exacto con 1 s de pausa: "cut – cut the paper", "fold – fold the paper in half", "draw – draw a circle", "color – color it blue", "glue – glue the picture", "write – write your name", "put – put the seeds in the hole", "mix – mix the fruit", "water – water the plant".' } },
        { cards: [
          { icon: 'Scissors', front: 'cut', back: 'cortar · _Cut the paper._' },
          { icon: 'Copy', front: 'fold', back: 'doblar · _Fold the paper in half._ (a la mitad)' },
          { icon: 'Pencil', front: 'draw', back: 'dibujar · _Draw a circle._' },
          { icon: 'Palette', front: 'color', back: 'colorear · _Color it blue._' },
          { icon: 'Droplet', front: 'glue', back: 'pegar · _Glue the picture._' },
          { icon: 'PenLine', front: 'write', back: 'escribir · _Write your name._' },
          { icon: 'Hand', front: 'put', back: 'poner · _Put the seeds in the hole._' },
          { icon: 'RefreshCw', front: 'mix', back: 'mezclar · _Mix the fruit._' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'conocer', title: 'Sequence words',
          prompt: 'Las **palabras de secuencia** te dicen el orden de los pasos. Toca cada tarjeta.' },
        { icon: 'ListOrdered', body: 'Consejo: **lee todas las instrucciones una vez** antes de empezar. Luego sigue un paso a la vez.', reveal: [
          { icon: 'Flag', front: 'First', back: '**Primero.** _First, wash your hands._' },
          { icon: 'ArrowRight', front: 'Next / Then', back: '**Luego, después.** _Next, cut the mango. Then, put it in a bowl._' },
          { icon: 'ArrowRight', front: 'After that', back: '**Después de eso.** _After that, mix the fruit._' },
          { icon: 'Trophy', front: 'Finally', back: '**Por último.** _Finally, eat and enjoy!_' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer', title: 'Worked example',
          prompt: 'Mira cómo Samuel sigue unas instrucciones de dibujo, paso a paso.' },
        { icon: 'Pencil', problem: 'Instrucciones: _"First, draw a big circle. Then, color it yellow. Finally, draw a small blue square under the circle."_ ¿Qué dibujo queda?',
          steps: [
            { text: '**First, draw a big circle**: dibuja un círculo grande.' },
            { text: '**Then, color it yellow**: píntalo de amarillo. ("it" = el círculo)', why: '"It" se refiere a lo último que se mencionó: el círculo.' },
            { text: '**Finally, draw a small blue square under the circle**: un cuadrado pequeño azul **debajo** del círculo.', why: 'Recuerda: under = debajo de (semana 1). Small = pequeño.' },
          ],
          answer: 'Un **círculo grande amarillo** con un **cuadrado pequeño azul debajo**.',
          tip: 'Subraya el verbo de cada paso (draw, color, draw) y los detalles (big, yellow, under).' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'conocer',
          prompt: 'Mira los carteles de la lección. El cartel con el niño tachado dice: _"**Don\'t run**."_ ¿Qué te pide?',
          explain: '**Don\'t run** = No corras. Las instrucciones en inglés empiezan con un verbo (run = correr) y **Don\'t** las vuelve prohibición. Hoy aprenderás a leerlas y seguirlas.' },
        { options: [
          { id: 'a', text: 'Que no corras', icon: 'Footprints' },
          { id: 'b', text: 'Que corras rápido', icon: 'Rabbit', feedback: '"Don\'t" significa "no": es una prohibición.' },
          { id: 'c', text: 'Que cierres la puerta', icon: 'DoorClosed', feedback: 'Ese es otro cartel: "Please close the door".' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: une cada instrucción con su significado.',
          hint: 'Busca primero el verbo de cada instrucción: open, write, fold, don\'t…',
          explain: 'Open = abrir, write = escribir, fold = doblar, don\'t talk = no hablen, put = poner.' },
        { leftTitle: 'Instruction', rightTitle: 'Significa', pairs: [
          { id: 'i1', left: 'Open your book.', right: 'Abre tu libro.' },
          { id: 'i2', left: 'Write your name.', right: 'Escribe tu nombre.' },
          { id: 'i3', left: 'Fold the paper in half.', right: 'Dobla el papel a la mitad.' },
          { id: 'i4', left: 'Don\'t talk, please.', right: 'No hablen, por favor.' },
          { id: 'i5', left: 'Put your pencil on the desk.', right: 'Pon tu lápiz sobre el escritorio.' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer',
          prompt: 'Lee estas **instrucciones para sembrar un árbol** y ordénalas. Pistas: _dig_ = cavar, _hole_ = agujero, _seedling_ = arbolito, _soil_ = tierra.',
          explain: 'First (cavar) → next (poner el arbolito) → then (cubrir) → after that (regar) → finally (cuidar). Las palabras de secuencia te dan el orden.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'o1', text: 'First, dig a hole in the ground.', icon: 'Shovel' },
          { id: 'o2', text: 'Next, put the seedling in the hole.', icon: 'Sprout' },
          { id: 'o3', text: 'Then, cover the roots with soil.', icon: 'Layers' },
          { id: 'o4', text: 'After that, water the seedling.', icon: 'Droplets' },
          { id: 'o5', text: 'Finally, take care of your tree every week.', icon: 'TreePine' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer',
          prompt: 'Sigue las instrucciones: _"Draw a tree. Draw a red bird on the tree. Then, draw a dog behind the tree."_ ¿Cuál dibujo es correcto?',
          explain: 'Árbol + pájaro rojo **sobre** el árbol (on) + perro **detrás** del árbol (behind). Seguir instrucciones exige atender cada detalle.' },
        { options: [
          { id: 'a', text: 'Un árbol con un pájaro rojo encima y un perro detrás del árbol' },
          { id: 'b', text: 'Un árbol con un pájaro rojo debajo y un perro enfrente', feedback: 'Revisa: "on the tree" es encima y "behind" es detrás.' },
          { id: 'c', text: 'Un árbol con un perro rojo encima', feedback: 'El rojo es el pájaro (a red bird), y el perro va detrás.' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer',
          prompt: 'Completa la receta de **ensalada de frutas** con los verbos del banco.',
          explain: 'Wash (lavar), cut (cortar), put (poner), mix (mezclar). La palabra de secuencia te ayuda a imaginar cada paso.' },
        { text: 'Fruit salad\nFirst, [[wash]] the fruit.\nNext, ask an adult to help you and [[cut]] the fruit into small pieces.\nThen, [[put]] the pieces in a bowl.\nFinally, [[mix]] the fruit and enjoy!', distractors: ['draw', 'fold'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.3.1'], prompt: 'Boleto de salida: en el laboratorio hay un cartel: _"Don\'t touch the plants."_ ¿Qué debes hacer?' },
        { options: [
          { id: 'a', text: 'Tocar las plantas con cuidado' },
          { id: 'b', text: 'No tocar las plantas' },
          { id: 'c', text: 'Regar las plantas' },
        ], correct: ['b'] },
      ),
      S.order(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.3.1'], prompt: 'Ordena las instrucciones para hacer una tarjeta.' },
        { items: [
          { id: 'o1', text: 'First, fold the paper in half.' },
          { id: 'o2', text: 'Then, draw a flower on the front.' },
          { id: 'o3', text: 'After that, write a message inside.' },
          { id: 'o4', text: 'Finally, give the card to a friend.' },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's06-l3-2',
    title: 'Read and assemble: a reusable mini kite',
    icon: 'Wind',
    minutes: 15,
    gancho: 'Un manual breve en inglés puede guiar un armado real. ¿Puedes leerlo, ensamblar el kit y comprobar su estabilidad?',
    objetivos: [
      'Interpretar instrucciones y partes de un manual en inglés',
    ],
    resumen: [
      'Un manual organiza la información en Materials, Steps y Safety.',
      'Los verbos iniciales indican la acción: slide, press, attach, hook y test.',
      'Las palabras first, then y finally ayudan a seguir el orden.',
      'El kit reutilizable ya viene preparado; el ensayo breve se hace sobre una mesa o con flujo de aire bajo.',
    ],
    media: {
      id: 's06-l3-2-kite-kit', kind: 'diagram', title: 'Prepared reusable mini-kite kit', aspect: '4:3',
      alt: 'Kit reutilizable con cuerpo liviano precortado, dos varillas, brida prearmada, cola, línea corta y pestañas reutilizables, junto a un manual de cuatro pasos.',
      brief: 'Mock honesto de un kit escolar reutilizable preparado centralmente o adquirido comercialmente. Mostrar el cuerpo liviano precortado con mangas marcadas, dos varillas reutilizables, brida previamente amarrada (pre-tied bridle), cola con lazo, línea corta de prueba y pestañas despegables reutilizables (peel/reusable tabs). A un lado, una tarjeta de manual con cuatro viñetas: slide, press, attach and hook, test. La preparación centralizada evita trabajo artesanal docente repetido; las piezas se guardan por juego para reutilizarlas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'conocer', title: 'Parts of a manual',
          prompt: 'Un manual breve separa **Materials**, **Steps** y **Safety**. El kit preparado permite concentrarse en leer y seguir el inglés.' },
        { icon: 'BookOpen', body: 'Lee todo antes de tocar las piezas. Los verbos al inicio indican qué hacer.', reveal: [
          { icon: 'Package', front: 'Materials', back: 'Prepared body, rods, pre-tied bridle, tail, short line and reusable tabs.' },
          { icon: 'ListOrdered', front: 'Steps', back: 'Acciones numeradas: slide, press, attach, hook, test.' },
          { icon: 'ShieldCheck', front: 'Safety', back: 'Keep the test on the table. Use only low airflow.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer', title: 'Model: read before acting',
          prompt: 'Mira cómo se interpreta una instrucción del manual.' },
        { icon: 'ListChecks', problem: 'Instruction: “Press the reusable tabs over the rod ends.”',
          steps: [
            { text: 'Busco el verbo: **press** significa presiona.' },
            { text: 'Identifico el objeto: **the reusable tabs**, las pestañas reutilizables.' },
            { text: 'Ubico el lugar: **over the rod ends**, sobre los extremos de las varillas.' },
          ],
          answer: 'Presiona las pestañas reutilizables sobre los extremos de las varillas.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer',
          prompt: 'Con ayuda: ¿en qué parte del manual buscas cómo hacer la prueba segura?',
          hint: 'Materials dice qué hay; Steps indica el orden; Safety explica cómo evitar riesgos.',
          explain: 'La condición “on the table, with low airflow” aparece en **Safety**.' },
        { options: [
          { id: 'a', text: 'Safety' },
          { id: 'b', text: 'Materials' },
          { id: 'c', text: 'Title' },
        ], correct: ['a'] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer', title: 'Mini-kite kit manual',
          prompt: 'Lee el manual conciso. Pistas: _slide_ = desliza, _press_ = presiona, _attach_ = coloca, _hook_ = engancha, _steady_ = estable.' },
        { genre: 'Manual', heading: 'Assemble and test a mini kite', passage:
          'Materials: one prepared reusable mini-kite kit.\n\nSafety: Keep the kite on the table. Use only low airflow.\n\n1. Slide the two rods into the marked sleeves.\n2. Press the reusable tabs over the rod ends.\n3. Attach the tail and hook the short line to the pre-tied bridle.\n4. Test the kite above the table. Is it steady?',
          questions: [
            { q: 'What do you attach before the short line?', options: [
              { id: 'a', text: 'The tail' },
              { id: 'b', text: 'The body' },
              { id: 'c', text: 'The manual' },
            ], correct: 'a' },
            { q: 'Where do you test the mini kite?', options: [
              { id: 'a', text: 'Above the table' },
              { id: 'b', text: 'Outside for ten minutes' },
              { id: 'c', text: 'Near an open door' },
            ], correct: 'a' },
          ] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer',
          prompt: 'Follow the manual. Ensambla y prueba el **kit preparado reutilizable** de mini barrilete.' },
        { goal: 'Aplicar un manual en inglés para ensamblar y observar un modelo reutilizable.',
          steps: [
            { title: 'Slide', detail: 'Slide the rods into the marked sleeves.' },
            { title: 'Press', detail: 'Press the peel/reusable tabs over the rod ends.' },
            { title: 'Attach and hook', detail: 'Attach the tail; hook the short line to the pre-tied bridle.' },
            { title: 'Test and observe', detail: 'Haz una prueba de estabilidad sobre la mesa con flujo de aire bajo y registra una observación: steady, tilts left o tilts right.' },
          ],
          evidence: 'Mini barrilete ensamblado y una observación registrada tras la prueba breve de mesa.',
          rubric: ['Seguí las operaciones en orden', 'Usé las pestañas y piezas reutilizables', 'La prueba fue breve y segura', 'Registré una observación'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer',
          prompt: 'Sin mirar el manual, ordena las instrucciones del kit.' },
        { labels: { start: 'First', end: 'Finally' }, items: [
          { id: 'a', text: 'Slide the rods into the sleeves.' },
          { id: 'b', text: 'Press the reusable tabs.' },
          { id: 'c', text: 'Attach the tail and hook the line.' },
          { id: 'd', text: 'Test it above the table.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.3.1'], prompt: 'Boleto de salida: ¿qué instrucción pertenece a **Safety** en este manual?' },
        { options: [
          { id: 'a', text: 'Use only low airflow.' },
          { id: 'b', text: 'The kit has two rods.' },
          { id: 'c', text: 'Press the tabs.' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.3.1'], prompt: 'Completa la última instrucción del manual con el verbo enseñado.' },
        { text: 'Finally, [[test]] the mini kite above the table.', distractors: ['materials', 'tail'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l3'], cnb: [], ambito: 'ser', prompt: 'How did the manual help you assemble the kit?' },
        { statements: ['Distingo Materials, Steps y Safety', 'Interpreto slide, press, attach, hook y test', 'Registro una observación después de una prueba segura'],
          commitments: ['Leeré todo el manual antes de ensamblar', 'Guardaré las piezas para que otro grupo reutilice el kit'] },
      ),
    ],
  }),
];
