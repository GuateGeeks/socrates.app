/**
 * L3 (inglés) · Unidad 1 · Semana 6
 * Seguir instrucciones escritas: verbos en imperativo y palabras de secuencia; instrucciones
 * de un juego (la lotería) y de un proyecto manual (un barrilete pequeño).
 */
import { lesson, S } from '../../../../dsl';

function preparedLesson(draft: Parameters<typeof lesson>[0]) {
  const first = draft.steps[0];
  const objective = draft.objetivos?.[0] ?? draft.title;
  const firstIdea = draft.resumen?.[0] ?? objective;
  const secondIdea = draft.resumen?.[1] ?? firstIdea;
  const cnb = [...new Set(draft.steps.flatMap((step) => step.cnb))];
  const normalized = draft.steps.map((step) => (
    step.fase === 'explorar' ? { ...step, fase: 'construir' as const } : step
  ));
  const construction = normalized.filter((step) => step.fase === 'construir');
  const ungraded = new Set(['explain', 'worked-example', 'flashcards', 'short-answer', 'project', 'reflection', 'pulse-lab']);
  const guided = construction.find((step) => !ungraded.has(step.type));
  let building = construction.slice(0, 4);
  if (guided && !building.includes(guided)) building = [...building.slice(0, 3), guided];
  building = building.map((step) => step === guided ? {
    ...step,
    hint: step.hint ?? 'Vuelve al criterio del modelo y descarta una opción a la vez.',
    explain: step.explain ?? firstIdea,
  } : step);
  const compact = [
    ...building,
    ...normalized.filter((step) => step.fase === 'aplicar').slice(0, 2),
    ...normalized.filter((step) => step.fase === 'comprobar'),
    ...normalized.filter((step) => step.fase === 'reflexionar'),
  ];
  return lesson({
    ...draft,
    objetivos: [objective],
    steps: [
      S.explain(
        { fase: 'explorar', areas: first.areas, cnb, ambito: 'conocer', title: 'Activa lo que sabes',
          prompt: `Antes del modelo, recuerda una experiencia relacionada con este resultado: **${objective}**.` },
        { icon: 'Brain', body: 'No se califica: nombra lo que ya sabes y una duda que quieras resolver.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: first.areas, cnb, ambito: first.ambito ?? 'hacer', title: 'Enfoque y modelo',
          prompt: `Activa lo que sabes y observa cómo se aplica este resultado: **${objective}**.` },
        { icon: draft.icon, problem: firstIdea, steps: [
          { text: `Identifica el criterio central: **${objective}**.` },
          { text: secondIdea },
        ], answer: secondIdea,
          tip: 'Nombra el criterio y comprueba cada dato antes de responder.' },
      ),
      ...compact,
    ],
  });
}

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  preparedLesson({
    id: 's06-l3-1',
    title: 'First, then, finally: reading instructions',
    icon: 'ListOrdered',
    minutes: 14,
    gancho: 'En el baño de un hotel en Antigua hay un cartel: "Please turn off the light." ¿Sabrías qué hacer?',
    objetivos: [
      'Interpretar instrucciones y carteles en inglés',
      'Usar palabras de secuencia: first, next, then, after that, finally',
      'Seguir instrucciones escritas en inglés paso a paso',
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
      S.choice(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'conocer',
          prompt: 'Mira los carteles de la lección. El cartel con el niño tachado dice: _"**Don\'t run**."_ ¿Qué te pide?',
          explain: '**Don\'t run** = No corras. Las instrucciones en inglés empiezan con un verbo (run = correr) y **Don\'t** las vuelve prohibición. Hoy aprenderás a leerlas y seguirlas.' },
        { options: [
          { id: 'a', text: 'Que no corras', icon: 'Footprints' },
          { id: 'b', text: 'Que corras rápido', icon: 'Rabbit', feedback: '"Don\'t" significa "no": es una prohibición.' },
          { id: 'c', text: 'Que cierres la puerta', icon: 'DoorClosed', feedback: 'Ese es otro cartel: "Please close the door".' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'conocer', title: 'Instructions start with a verb',
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
  preparedLesson({
    id: 's06-l3-2',
    title: 'Let\'s play and make: lotería and a mini kite',
    icon: 'Wind',
    minutes: 15,
    gancho: 'En la feria del pueblo se juega lotería, y en noviembre el cielo se llena de barriletes. ¿Te animas a jugar y construir siguiendo instrucciones en inglés?',
    objetivos: [
      'Interpretar instrucciones y partes de un manual en inglés',
      'Reconocer las partes de un manual: materiales, pasos y avisos de seguridad',
      'Construir un objeto sencillo siguiendo instrucciones escritas',
    ],
    resumen: [
      'Las instrucciones de un juego dicen qué necesitas, cómo se juega y quién gana.',
      'Un manual o proyecto tiene: título, materials (materiales), steps (pasos numerados) y safety (avisos de seguridad).',
      'Vocabulario del juego: board (tablero), card (carta), bean (frijol), caller (quien canta las cartas), row (fila), winner (ganador).',
      'Lee todo antes de empezar, sigue los pasos en orden y pide ayuda a un adulto cuando el manual lo indica.',
    ],
    media: {
      id: 's06-l3-2-loteria', kind: 'image', title: 'Playing lotería', aspect: '16:9',
      alt: 'Una familia juega lotería en una mesa: cada persona tiene un tablero con dibujos y frijoles encima; una niña canta las cartas.',
      brief: 'Ilustración cálida de una familia guatemalteca (abuelo, mamá, niña y niño) jugando lotería en una mesa de madera. Cada uno tiene un tablero de 4 × 4 con dibujos sencillos (sol, luna, gallo, árbol, estrella, mano…) y frijoles negros sobre algunas casillas. La niña sostiene una baraja y muestra una carta con un sol. Rótulos pequeños en inglés señalando: "board", "card", "beans", "caller", "row". Sin marcas ni diseños de lotería comerciales.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'conocer',
          prompt: 'Mira la imagen de la lección. ¿Qué crees que significa **beans** en el juego?',
          explain: '**Beans** = frijoles. En la lotería se usan frijoles para marcar las casillas del tablero (board). Hoy leerás las reglas en inglés.' },
        { options: [
          { id: 'a', text: 'Los frijoles para marcar', icon: 'CircleDot' },
          { id: 'b', text: 'El tablero', icon: 'Square', feedback: 'El tablero se llama "board".' },
          { id: 'c', text: 'La persona que canta las cartas', icon: 'Megaphone', feedback: 'Esa persona es el "caller".' },
        ], correct: ['a'] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer', title: 'Game instructions',
          prompt: 'Lee las instrucciones del juego. Pistas: _players_ = jugadores, _each_ = cada, _shout_ = gritar, _cover_ = cubrir, _row_ = fila, _wins_ = gana.' },
        { genre: 'Instructions', heading: 'How to play Lotería', passage:
          'Players: 3 or more. You need: one board for each player, a deck of cards and many beans.\n\n1. Give one board and some beans to each player.\n2. One person is the caller. The caller mixes the cards.\n3. The caller takes one card and says its name: "The sun!"\n4. If you have the sun on your board, cover it with a bean.\n5. When you cover a full row, shout "¡Lotería!"\n6. The first player to shout "¡Lotería!" with a correct row wins.',
          questions: [
            { q: 'What do you use to cover the pictures?', options: [
              { id: 'a', text: 'Beans' },
              { id: 'b', text: 'Cards' },
              { id: 'c', text: 'Pencils' },
            ], correct: 'a' },
            { q: 'Who says the name of each card?', options: [
              { id: 'a', text: 'The caller' },
              { id: 'b', text: 'All the players' },
              { id: 'c', text: 'The winner' },
            ], correct: 'a' },
            { q: '¿Cuándo debes gritar "¡Lotería!"?', options: [
              { id: 'a', text: 'Cuando cubres una fila completa' },
              { id: 'b', text: 'Cuando cubres una sola casilla' },
              { id: 'c', text: 'Cuando el caller mezcla las cartas' },
            ], correct: 'a', why: 'Paso 5: "When you cover a full row, shout ¡Lotería!"' },
          ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: el caller dice _"The moon!"_ y tú **no** tienes la luna en tu tablero. Según las instrucciones, ¿qué haces?',
          hint: 'Lee el paso 4: "**If** you have the sun on your board, cover it". ¿Y si no la tienes?',
          explain: 'Solo cubres una casilla **si** tienes esa figura. Si no la tienes, esperas la siguiente carta.' },
        { options: [
          { id: 'a', text: 'No pongo frijol y espero la siguiente carta' },
          { id: 'b', text: 'Pongo un frijol en cualquier casilla', feedback: 'Las instrucciones dicen que cubres solo si tienes esa figura.' },
          { id: 'c', text: 'Grito "¡Lotería!"', feedback: 'Solo se grita cuando completas una fila.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer',
          prompt: 'Ordena lo que pasa en una partida de lotería. Intenta hacerlo sin mirar el texto.',
          hint: 'Primero se reparte, luego el caller prepara y canta las cartas, y al final alguien grita "¡Lotería!".',
          explain: 'Repartir tableros → el caller mezcla → canta una carta → cubres si la tienes → gritas al completar una fila.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'o1', text: 'Give a board and beans to each player.' },
          { id: 'o2', text: 'The caller mixes the cards.' },
          { id: 'o3', text: 'The caller says the name of a card.' },
          { id: 'o4', text: 'Cover the picture with a bean.' },
          { id: 'o5', text: 'Shout "¡Lotería!" when you cover a full row.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'conocer', title: 'Parts of a project manual',
          prompt: 'Los manuales de proyectos (para construir o armar algo) tienen partes fijas. Conocerlas te ayuda a encontrar lo que necesitas. Toca cada tarjeta.' },
        { icon: 'BookOpen', body: 'Antes de empezar: **lee todo el manual**, reúne los materiales y revisa los avisos de seguridad.', reveal: [
          { icon: 'Package', front: 'Materials', back: 'La lista de lo que necesitas: _paper, two thin sticks, string, glue, tape_.' },
          { icon: 'ListOrdered', front: 'Steps', back: 'Pasos **numerados** con verbos de instrucción: _1. Cross the sticks. 2. Tie them…_' },
          { icon: 'ShieldCheck', front: 'Safety', back: 'Avisos para cuidarte: _Ask an adult to help you. Don\'t fly your kite near power lines._' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer', title: 'Project manual',
          prompt: 'Lee el manual para hacer un **barrilete pequeño**. Pistas: _stick_ = varita, _string_ = pita, _tie_ = amarrar, _cross_ = cruzar, _tail_ = cola, _strips_ = tiras, _bottom_ = parte de abajo, _power lines_ = cables de electricidad.',
          media: { id: 's06-l3-2-kite', kind: 'diagram', title: 'How to make a mini kite', aspect: '3:4',
            alt: 'Diagrama en cinco pasos numerados para armar un barrilete pequeño de papel con dos varitas en cruz, pita y una cola de tiras de papel.',
            brief: 'Lámina vertical tipo manual con 5 viñetas numeradas y el texto en inglés de cada paso (el mismo de la lectura). 1: dos varitas delgadas (una larga y una corta) cruzadas formando una cruz. 2: manos amarrando el centro con pita. 3: la cruz colocada sobre papel de china de color y el papel doblado y pegado sobre las varitas. 4: una cola de tiras de papel pegada abajo. 5: pita larga amarrada al centro; un niño la vuela en un campo abierto, lejos de cables. Recuadro "Safety" con un ícono de adulto ayudando. Estilo inspirado en los barriletes de Sumpango, colores vivos, sin texto adicional.' } },
        { genre: 'Manual', heading: 'Make a mini kite', passage:
          'Materials: tissue paper, two thin sticks (one long and one short), string, glue, scissors.\n\nSafety: Ask an adult to help you with the scissors. Don\'t fly your kite near power lines.\n\n1. Cross the two sticks.\n2. Tie the center with string.\n3. Put the sticks on the paper. Fold the edges of the paper over the sticks and glue them.\n4. Make a long tail with strips of paper and glue it to the bottom.\n5. Tie a long string to the center. Go to an open field and fly your kite!',
          questions: [
            { q: 'How many sticks do you need?', options: [
              { id: 'a', text: 'Two' },
              { id: 'b', text: 'One' },
              { id: 'c', text: 'Five' },
            ], correct: 'a' },
            { q: 'What do you do in step 2?', options: [
              { id: 'a', text: 'Tie the center with string' },
              { id: 'b', text: 'Fly the kite' },
              { id: 'c', text: 'Make a tail' },
            ], correct: 'a' },
            { q: 'Según la parte de **Safety**, ¿dónde NO debes volar tu barrilete?', options: [
              { id: 'a', text: 'Cerca de cables de electricidad' },
              { id: 'b', text: 'En un campo abierto' },
              { id: 'c', text: 'Con un adulto' },
            ], correct: 'a', why: '"Don\'t fly your kite near power lines." Los cables pueden causar accidentes graves.' },
          ] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer',
          prompt: 'Según el manual del barrilete, ¿verdadero o falso?' },
        { statements: [
          { text: 'The tail goes at the bottom of the kite.', answer: true },
          { text: 'You use the scissors alone, without help.', answer: false, why: 'Safety: "Ask an adult to help you with the scissors."' },
          { text: 'You tie the two sticks before you glue the paper.', answer: true, why: 'Primero se amarran las varitas en el centro (paso 2) y después se pega el papel (paso 3).' },
        ] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:3.3.1'], ambito: 'hacer',
          prompt: 'Let\'s make it! Construye tu barrilete pequeño siguiendo el manual en inglés. Si no tienes varitas, puedes usar palitos de paleta o de bambú delgado.' },
        { goal: 'Seguir un manual escrito en inglés para construir un barrilete pequeño, respetando el orden de los pasos y los avisos de seguridad.',
          steps: [
            { title: 'Read', detail: 'Read all the manual first. (Lee todo el manual primero.)' },
            { title: 'Materials', detail: 'Get the materials: tissue paper, two thin sticks, string, glue and scissors.' },
            { title: 'Safety', detail: 'Ask an adult to help you with the scissors.' },
            { title: 'Make', detail: 'Follow steps 1 to 5 in order. Check each step on the diagram.' },
            { title: 'Fly', detail: 'Fly your kite in an open field, far from power lines.' },
          ],
          evidence: 'Una foto o dibujo de tu barrilete, y en tu cuaderno los cinco pasos del manual con una marca ✔ en cada uno que completaste.',
          rubric: ['Leí todo el manual antes de empezar', 'Seguí los pasos en orden', 'Respeté los avisos de seguridad', 'Puedo explicar cada paso con el verbo en inglés (cross, tie, fold, glue, fly)'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.3.1'], prompt: 'Boleto de salida: en un manual, ¿en qué parte buscas **qué cosas necesitas**?' },
        { options: [
          { id: 'a', text: 'Materials' },
          { id: 'b', text: 'Safety' },
          { id: 'c', text: 'Finally' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.3.1'], prompt: 'Completa las instrucciones de la lotería. (Cubre la figura con un frijol. Grita "¡Lotería!" cuando completes una fila.)' },
        { text: '[[Cover]] the picture with a bean. [[Shout]] "¡Lotería!" when you cover a full row.', distractors: ['Draw', 'Cut'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l3'], cnb: [], ambito: 'ser', prompt: 'How was your week? ¿Cómo te fue?' },
        { statements: ['Reconozco verbos de instrucción: cut, fold, draw, put, mix', 'Uso first, next, then, after that y finally', 'Sigo las instrucciones escritas de un juego o un proyecto'],
          commitments: ['Jugaré lotería con mi familia diciendo las cartas en inglés', 'Escribiré en inglés las instrucciones de algo que sé hacer', 'Leeré siempre todas las instrucciones antes de empezar'] },
      ),
    ],
  }),
];
