/**
 * L3 (inglés) · Unidad 1 · Semana 7
 * ¿Qué pasó antes? El pasado continuo (was/were + -ing) para lo que estaba pasando y el pasado
 * simple para lo que ocurrió; describir lo que sucedió antes de lo que muestra una ilustración.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's07-l3-1',
    title: 'What were they doing? Was / were + -ing',
    icon: 'Clock',
    minutes: 14,
    gancho: 'Ayer a las 5 de la tarde se fue la luz en tu colonia. ¿Qué estaba haciendo cada persona de tu casa en ese momento?',
    objetivos: [
      'Describir acciones en progreso durante un evento pasado con was o were',
    ],
    resumen: [
      'El pasado continuo dice lo que estaba pasando en un momento del pasado: It was raining. (Estaba lloviendo.)',
      'I / he / she / it + was · you / we / they + were · y el verbo con -ing: She was reading. They were playing.',
      'Ortografía del -ing: play → playing; si termina en e, se quita: make → making; algunos verbos cortos duplican la consonante: run → running, swim → swimming, sit → sitting.',
      'Combina con el pasado simple: We were eating when the lights went out. (Estábamos comiendo cuando se fue la luz.)',
    ],
    media: {
      id: 's07-l3-1-blackout', kind: 'image', title: 'The blackout', aspect: '4:3',
      alt: 'Una familia sentada a la mesa a la luz de candelas; el foco y el televisor están apagados y afuera llueve fuerte.',
      brief: 'Ilustración nocturna de una familia guatemalteca (abuela, papá, mamá, niña y niño) sentada a la mesa con dos candelas encendidas. El foco del techo y el televisor están apagados; por la ventana se ve lluvia fuerte y un poste de luz apagado. En la mesa, un rompecabezas a medio armar y tazas de café. Colores cálidos de candela, sin texto.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:4.3.3'], title: 'Actions during a water event',
          prompt: 'El pasado continuo cuenta una acción que estaba en progreso: **was / were + verb-ing**.' },
        { icon: 'Clock3', body: '**They were checking the water when it started to rain.** La acción larga estaba ocurriendo cuando sucedió otra.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'conocer',
          prompt: 'Mira la imagen de la lección. La niña cuenta: _"**It was raining** and the lights went out."_ ¿Qué significa **It was raining**?',
          explain: '**It was raining** = Estaba lloviendo. Describe algo que **estaba pasando** en ese momento del pasado. Hoy aprenderás a formar estas oraciones.' },
        { options: [
          { id: 'a', text: 'Estaba lloviendo', icon: 'CloudRain' },
          { id: 'b', text: 'Va a llover', icon: 'Cloud', feedback: 'Eso sería futuro. "Was" es pasado.' },
          { id: 'c', text: 'Hace sol', icon: 'Sun', feedback: 'Raining viene de rain (llover). En la imagen llueve fuerte.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'conocer', title: 'Past continuous: was / were + -ing',
          prompt: 'Para decir lo que **estaba pasando**, se usan dos piezas: **was** o **were** + el verbo con **-ing**. Toca cada tarjeta.' },
        { icon: 'Clock', body: 'Es como el "estaba …ando / …iendo" del español: estaba jugando = **was playing**.', reveal: [
          { icon: 'User', front: 'was', back: 'Con **I, he, she, it**: _I **was** sleeping. She **was** cooking. It **was** raining._' },
          { icon: 'Users', front: 'were', back: 'Con **you, we, they**: _We **were** eating. They **were** playing._' },
          { icon: 'Plus', front: '+ ing', back: 'El verbo agrega **-ing**: read → read**ing**, watch → watch**ing**, cook → cook**ing**.' },
          { icon: 'Ban', front: 'Negativo', back: 'Agrega **not**: _I **was not** (wasn\'t) sleeping. They **were not** (weren\'t) listening._' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'conocer', title: 'Spelling -ing',
          prompt: 'Casi siempre solo agregas -ing, pero hay dos casos especiales. Toca cada tarjeta.' },
        { icon: 'PenLine', body: 'Revisa cómo termina el verbo antes de agregar -ing.', reveal: [
          { icon: 'Plus', front: 'Regla general', back: 'play → **playing** · read → **reading** · rain → **raining**' },
          { icon: 'Minus', front: 'Termina en e', back: 'Se quita la e: make → **making** · dance → **dancing** · write → **writing**' },
          { icon: 'Copy', front: 'Consonante doble', back: 'Algunos verbos cortos (consonante + vocal + consonante) duplican la última letra: run → **running** · swim → **swimming** · sit → **sitting**' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'hacer', title: 'Worked example',
          prompt: 'Mira cómo se arma una oración en pasado continuo.' },
        { icon: 'Blocks', problem: '¿Cómo se dice: "Mis primos estaban nadando en el río"? (cousins = primos, swim = nadar)',
          steps: [
            { text: '¿Quién? **My cousins** = they → usa **were**.', why: 'Son varios: they, we y you van con were.' },
            { text: 'Verbo: swim + ing. Es corto y termina en vocal + consonante → se duplica la m: **swimming**.' },
            { text: 'Agrega dónde: **in the river**.' },
          ],
          answer: '**My cousins were swimming in the river.**',
          tip: 'Quién + was/were + verbo-ing + resto.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: ¿cada sujeto va con **was** o con **were**?',
          hint: 'Una sola persona o cosa (I, he, she, it) → was. Varias o "you" → were.',
          explain: 'Was: I, my mom, the dog. Were: we, my friends, you.' },
        { buckets: [
          { id: 'was', label: 'was', icon: 'User' },
          { id: 'were', label: 'were', icon: 'Users' },
        ], items: [
          { id: 'x1', text: 'I', bucket: 'was' },
          { id: 'x2', text: 'we', bucket: 'were' },
          { id: 'x3', text: 'my mom', bucket: 'was', feedback: 'My mom = she → was.' },
          { id: 'x4', text: 'my friends', bucket: 'were', feedback: 'My friends = they → were.' },
          { id: 'x5', text: 'the dog', bucket: 'was', feedback: 'The dog = it → was.' },
          { id: 'x6', text: 'you', bucket: 'were', feedback: '"You" siempre va con were, aunque sea una sola persona.' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'hacer',
          prompt: 'Cuando se fue la luz ayer, ¿qué estaba haciendo cada uno? Completa con **was** o **were** y el verbo con -ing.',
          explain: 'Grandma was cooking (she → was). Dad and I were watching (we → were). My brother was writing (write sin e + ing). The dog was sleeping.' },
        { text: 'Grandma [[was]] cooking. Dad and I [[were]] watching TV. My brother was [[writing]] a letter. The dog was [[sleeping]].', distractors: ['writeing', 'sleepping'] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'hacer', title: 'Reading',
          prompt: 'Lee lo que cuenta Julia sobre el apagón y responde. Pistas: _suddenly_ = de repente, _lit_ = encendimos (pasado de light), _homework_ = tarea.',
          media: { id: 's07-l3-1-julia', kind: 'audio', title: 'Julia\'s story', duration: 30,
            alt: 'Una niña cuenta en inglés qué estaba haciendo su familia cuando se fue la luz.',
            brief: 'Audio de 30 s. Voz de niña de unos 11 años, inglés claro y lento, sin música; sonido suave de lluvia de fondo. Texto exacto: "Yesterday at seven o\'clock, it was raining a lot. My mom was cooking dinner. My brother and I were doing our homework. Suddenly, the lights went out! We lit two candles and finished a puzzle together."' } },
        { genre: 'Story', heading: 'The blackout', passage:
          'Yesterday at seven o\'clock, it was raining a lot. My mom was cooking dinner. My brother and I were doing our homework.\n\nSuddenly, the lights went out! We lit two candles and finished a puzzle together.',
          questions: [
            { q: 'What was Julia\'s mom doing?', options: [
              { id: 'a', text: 'She was cooking dinner.' },
              { id: 'b', text: 'She was sleeping.' },
              { id: 'c', text: 'She was doing homework.' },
            ], correct: 'a' },
            { q: 'What were Julia and her brother doing?', options: [
              { id: 'a', text: 'They were doing their homework.' },
              { id: 'b', text: 'They were playing football.' },
              { id: 'c', text: 'They were watching TV.' },
            ], correct: 'a' },
            { q: '¿Qué oración dice algo que **ocurrió de repente** (pasado simple) y no algo que "estaba pasando"?', options: [
              { id: 'a', text: 'The lights went out.' },
              { id: 'b', text: 'It was raining a lot.' },
              { id: 'c', text: 'My mom was cooking dinner.' },
            ], correct: 'a', why: '"Went out" es pasado simple: una acción que pasó en un momento. Las otras usan was/were + -ing: lo que estaba pasando.' },
          ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'hacer',
          prompt: 'Une cada oración en español con su versión en inglés.',
          explain: 'Estaba = was (I, he, she, it). Estaban / estábamos = were (they, we).' },
        { leftTitle: 'Español', rightTitle: 'English', pairs: [
          { id: 'm1', left: 'Ella estaba bailando.', right: 'She was dancing.' },
          { id: 'm2', left: 'Estábamos corriendo.', right: 'We were running.' },
          { id: 'm3', left: 'Ellos estaban comiendo.', right: 'They were eating.' },
          { id: 'm4', left: 'Yo no estaba durmiendo.', right: 'I wasn\'t sleeping.' },
        ] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.3.3'], prompt: 'Boleto de salida: completa. (Estaba lloviendo. Los niños estaban jugando.)' },
        { text: 'It [[was]] raining. The children [[were]] playing.' },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.3.3'], prompt: '¿Qué oración está **bien escrita**?' },
        { options: [
          { id: 'a', text: 'He were running.' },
          { id: 'b', text: 'He was runing.' },
          { id: 'c', text: 'He was running.' },
        ], correct: ['c'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's07-l3-2',
    title: 'Picture detectives: what happened before?',
    icon: 'Search',
    minutes: 15,
    gancho: 'Ves una foto: la calle está mojada y hay charcos, pero ya salió el sol. Sin que nadie te lo diga, ¿qué pasó antes?',
    objetivos: [
      'Inferir un evento pasado a partir de pistas visuales y describirlo en inglés',
    ],
    resumen: [
      'Método del detective: 1) mira las pistas, 2) piensa qué las causó, 3) dilo en pasado.',
      'Pasado simple para lo que ocurrió: It rained. The cat broke the vase. (Pasados útiles: went, saw, ate, fell, broke.)',
      'Pasado continuo para lo que estaba pasando: He was playing in the rain.',
      'Lo que se ve en la imagen se dice en presente: The street is wet. Lo que pasó antes, en pasado: It rained a lot.',
    ],
    media: {
      id: 's07-l3-2-puddles', kind: 'image', title: 'After the storm', aspect: '16:9',
      alt: 'Una calle de pueblo con charcos y ramas caídas; sale el sol y un niño con las botas llenas de lodo sostiene una pelota.',
      brief: 'Ilustración de una calle empedrada de un pueblo guatemalteco justo después de una tormenta: charcos grandes que reflejan el cielo, hojas y ramas pequeñas en el suelo, techos goteando, un arcoíris tenue y el sol saliendo entre nubes. En primer plano, un niño sonriente con las botas y el pantalón llenos de lodo sostiene una pelota de fútbol sucia. Un paraguas cerrado y mojado recostado en una puerta. Sin texto.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:4.3.3'], title: 'Clues, not certainty',
          prompt: 'Una imagen muestra pistas. En inglés distinguimos lo visible ahora de una inferencia sobre lo ocurrido antes.' },
        { icon: 'Search', body: '**The ground is wet** es observación. **It rained** es una inferencia apoyada por esa pista.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'conocer',
          prompt: 'Mira la imagen de la lección: charcos, ramas en el suelo, techos goteando. **What happened before the picture?**',
          explain: 'Las pistas (charcos, ramas, techos mojados) indican que **it rained a lot** (llovió mucho). Eres un detective de imágenes: hoy aprenderás a contar en inglés lo que pasó antes.' },
        { options: [
          { id: 'a', text: 'It rained a lot.', icon: 'CloudRain' },
          { id: 'b', text: 'It will rain tomorrow.', icon: 'Calendar', feedback: '"Will rain" es futuro. Buscamos lo que pasó antes de la imagen.' },
          { id: 'c', text: 'It snowed.', icon: 'Snowflake', feedback: 'No hay nieve en la imagen: hay agua y charcos.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'conocer', title: 'The picture detective method',
          prompt: 'Para describir lo que ocurrió **antes** de una ilustración, sigue tres pasos. Toca cada tarjeta.' },
        { icon: 'Search', body: 'Usa el **presente** para lo que ves en la imagen y el **pasado** para lo que ocurrió antes.', reveal: [
          { icon: 'Eye', front: '1. Look for clues', back: 'Busca pistas: algo mojado (wet), roto (broken), sucio (dirty), vacío (empty). _The street is wet._' },
          { icon: 'Brain', front: '2. Think', back: 'Pregúntate: ¿qué causó esa pista? Mojado → llovió. Roto → algo se cayó.' },
          { icon: 'History', front: '3. Say it in the past', back: 'Lo que **ocurrió**: _It **rained**. The glass **fell**._ Lo que **estaba pasando**: _The boy **was playing** in the rain._' },
          { icon: 'BookOpen', front: 'Pasados útiles', back: 'rain → **rained** · fall → **fell** · break → **broke** · eat → **ate** · run → **ran** · play → **played**' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'hacer', title: 'Worked example',
          prompt: 'Mira cómo Marcos describe lo que le pasó antes al niño de la imagen.' },
        { icon: 'Search', problem: 'En la imagen, el niño tiene las botas llenas de lodo y la pelota sucia. ¿Qué pasó antes?',
          steps: [
            { text: 'Pistas: **muddy boots** (botas con lodo) y **a dirty ball** (pelota sucia). En presente: _His boots are muddy._' },
            { text: 'Piensa: la pelota y el lodo indican que jugaba fútbol mientras llovía.' },
            { text: 'Lo que estaba pasando: **He was playing football in the rain.**', why: 'Was + playing: una acción que duraba.' },
            { text: 'Lo que ocurrió: **He fell in the mud.**', why: 'Fell (pasado de fall) es una acción de un momento.' },
          ],
          answer: '**He was playing football in the rain. He fell in the mud.**',
          tip: 'Pista → causa → oración en pasado.' },
      ),
      S.match(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: une cada pista con lo que probablemente pasó antes.',
          hint: 'Pregúntate: ¿qué causó cada pista? Plato vacío → alguien comió…',
          explain: 'Empty plate → someone ate the food. Broken window → a ball hit it. Wet clothes → he was walking in the rain. Tired baby with red eyes → she was crying a lot.' },
        { leftTitle: 'Clue (en la imagen)', rightTitle: 'Before', pairs: [
          { id: 'c1', left: 'an empty plate', right: 'Someone ate the food.' },
          { id: 'c2', left: 'a broken window and a ball', right: 'A ball hit the window.' },
          { id: 'c3', left: 'wet clothes and an umbrella', right: 'He was walking in the rain.' },
          { id: 'c4', left: 'a tired baby with red eyes', right: 'She was crying a lot.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'hacer',
          prompt: 'Mira la imagen: un florero roto en el piso, agua derramada y un gato escondido debajo del sofá. **Which sentence describes what happened before?**',
          hint: 'Busca la oración en **pasado** que explique el florero roto y el gato escondido.',
          explain: '**The cat jumped on the table and broke the vase.** Jumped (regular) y broke (irregular, de break) cuentan lo que ocurrió antes.',
          media: { id: 's07-l3-2-vase', kind: 'image', title: 'The broken vase', aspect: '4:3',
            alt: 'Una sala con un florero roto en el piso, agua y flores regadas, y un gato asustado que mira desde debajo del sofá.',
            brief: 'Ilustración de una sala sencilla: al pie de una mesita, un florero de barro roto en tres pedazos, agua derramada y flores regadas en el piso. Debajo del sofá asoman los ojos grandes y culpables de un gato. En la mesita, huellas pequeñas de patitas. Tono gracioso, sin personas, sin texto.' } },
        { options: [
          { id: 'a', text: 'The cat jumped on the table and broke the vase.' },
          { id: 'b', text: 'The cat is sleeping on the table.', feedback: 'Eso está en presente, y en la imagen el gato está debajo del sofá.' },
          { id: 'c', text: 'Mom will buy new flowers.', feedback: '"Will buy" es futuro: no dice qué pasó antes.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'hacer',
          prompt: 'Vuelve a la imagen del apagón (la familia con candelas). ¿Cada oración dice lo que se ve **en la imagen** (presente) o lo que pasó **antes** (pasado)?',
          explain: 'In the picture (presente): the family is sitting…, they are using candles, the TV is off. Before (pasado): it was raining, the lights went out, grandma lit two candles.' },
        { buckets: [
          { id: 'now', label: 'In the picture (now)', icon: 'Image' },
          { id: 'before', label: 'Before the picture', icon: 'History' },
        ], items: [
          { id: 'x1', text: 'The family is sitting at the table.', bucket: 'now' },
          { id: 'x2', text: 'The lights went out.', bucket: 'before' },
          { id: 'x3', text: 'They are using candles.', bucket: 'now' },
          { id: 'x4', text: 'It was raining a lot.', bucket: 'before' },
          { id: 'x5', text: 'The TV is off.', bucket: 'now' },
          { id: 'x6', text: 'Grandma lit two candles.', bucket: 'before', feedback: '"Lit" es el pasado de light (encender): alguien las encendió antes.' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'hacer',
          prompt: 'Imagina esta ilustración: en la cocina hay un plato vacío con migajas de pastel, y el perro tiene crema en la nariz. Completa lo que pasó antes.',
          explain: 'Mom was sleeping (she → was: acción que duraba), jumped y ate (acciones que ocurrieron). ¡El perro se comió el pastel!' },
        { text: 'Mom [[was]] sleeping. The dog [[jumped]] on the chair and [[ate]] the cake!', distractors: ['were', 'eats', 'jump'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:4.3.3'], ambito: 'hacer',
          prompt: 'Mira la imagen: un barrilete atorado en lo alto de un árbol y una niña mirando hacia arriba con la pita rota en la mano. Escribe **dos oraciones en inglés** sobre lo que pasó antes: una con **was/were + -ing** y otra en pasado simple.',
          media: { id: 's07-l3-2-kite-tree', kind: 'image', title: 'The kite in the tree', aspect: '4:3',
            alt: 'Un barrilete de colores atorado en la copa de un árbol alto; abajo, una niña mira hacia arriba con un pedazo de pita rota en la mano.',
            brief: 'Ilustración de un campo abierto con un árbol alto (ciprés o pino). En la copa, un barrilete de papel de china de colores atorado entre las ramas, con su cola colgando. Abajo, una niña de 11 años mira hacia arriba con cara de sorpresa y sostiene un pedazo corto de pita rota. Hojas moviéndose por el viento. Cielo azul con nubes, sin texto.' } },
        { minWords: 12, placeholder: 'She was flying… The wind…',
          model: 'She was flying her kite in the field. The wind was very strong, and the kite fell into the tree.',
          rubric: ['Escribí dos oraciones en inglés sobre lo que pasó antes', 'Usé was o were + verbo con -ing', 'Usé un verbo en pasado simple (fell, broke, flew…)', 'Mis oraciones se basan en pistas de la imagen'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.3.3'], prompt: 'Boleto de salida: en una ilustración, un niño tiene una curita en la rodilla y a su lado hay una bicicleta. ¿Qué pasó antes?' },
        { options: [
          { id: 'a', text: 'He was riding his bike and he fell.' },
          { id: 'b', text: 'He is going to buy a bike.' },
          { id: 'c', text: 'He rides his bike every day.' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.3.3'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Para decir lo que pasó antes de una imagen usamos el pasado: It rained.', answer: true },
          { text: '"The street is wet" describe lo que pasó antes de la imagen.', answer: false, why: 'Está en presente: describe lo que se ve ahora. Lo que pasó antes sería "It rained".' },
          { text: '"Broke" es el pasado de "break" (romper).', answer: true },
        ] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l3'], cnb: [], ambito: 'ser', prompt: 'How was your week? ¿Cómo te fue?' },
        { statements: ['Formo oraciones con was / were + -ing', 'Busco pistas en una imagen para deducir qué pasó antes', 'Distingo lo que se ve ahora (presente) de lo que pasó antes (pasado)'],
          commitments: ['Miraré una foto familiar y diré en inglés qué estaba pasando', 'Jugaré a "detective de imágenes" con alguien de mi casa', 'Repasaré los pasados irregulares: went, saw, ate, fell, broke'] },
      ),
    ],
  }),
];
