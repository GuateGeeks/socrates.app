/**
 * L3 (inglés) · Unidad 1 · Semana 3
 * Contar lo que viví: el pasado simple de verbos frecuentes y la narración de impresiones
 * en tres oraciones (qué hice, qué vi, cómo me sentí).
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's03-l3-1',
    title: 'Yesterday I… : talking about the past',
    icon: 'History',
    minutes: 14,
    gancho: 'Hoy es lunes y tu amiga de Belice te pregunta: "What did you do on Sunday?" ¿Cómo le cuentas lo que hiciste?',
    objetivos: ['Narrar acciones pasadas con marcadores de tiempo y verbos regulares e irregulares frecuentes'],
    resumen: [
      'Para hablar de lo que ya pasó se usa el pasado simple (simple past).',
      'Verbos regulares: se agrega -ed: play → played, visit → visited, watch → watched. Si terminan en e, solo -d: dance → danced.',
      'Verbos irregulares: cambian de forma y hay que aprenderlos: go → went, see → saw, eat → ate, have → had, get up → got up, am/is → was.',
      'Palabras de tiempo: yesterday (ayer), last Sunday (el domingo pasado), this morning (esta mañana).',
    ],
    media: {
      id: 's03-l3-1-sunday', kind: 'animation', title: 'Sofia\'s Sunday', aspect: '16:9', duration: 45,
      alt: 'Una niña recorre su domingo en cuatro escenas: se levanta temprano, va al mercado, come tamales y juega fútbol; bajo cada escena aparece el verbo en pasado.',
      brief: 'Animación 2D de 45 s en cuatro escenas con transición de calendario (DOMINGO). (1) Sofía se levanta con el sol: texto "I got up early." (2) Camina al mercado con su mamá: "I went to the market." (3) Come un tamal con la familia: "I ate a tamal." (4) Juega fútbol con amigos en la cancha: "I played football." En cada escena el verbo en pasado aparece resaltado en color y el presente (get up, go, eat, play) se transforma con un efecto de "giro". Narración en inglés lento y claro con subtítulos en inglés.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'conocer', title: 'Regular verbs: + ed',
          prompt: 'La mayoría de verbos forman el pasado agregando **-ed** al final. ¡Y sirve igual para I, you, he, she, we, they! Toca cada tarjeta.' },
        { icon: 'Plus', body: 'En español el pasado cambia con cada persona (yo jugué, ella jugó). En inglés es más fácil: **I played, she played, they played**.', reveal: [
          { icon: 'Plus', front: '+ ed', back: 'play → **played** · walk → **walked** · visit → **visited** · watch → **watched** · cook → **cooked**' },
          { icon: 'PenLine', front: 'Termina en e: + d', back: 'dance → **danced** · like → **liked** · live → **lived**' },
          { icon: 'CalendarDays', front: 'Palabras de tiempo', back: '**yesterday** (ayer) · **last Sunday** (el domingo pasado) · **last week** (la semana pasada) · **this morning** (esta mañana)' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'conocer',
          prompt: 'Lee: _"**Yesterday** I **played** football with my cousins."_ ¿Cuándo jugó fútbol?',
          explain: '**Yesterday** = ayer, y **played** es el pasado de **play** (jugar). Hoy aprenderás a contar en inglés lo que ya pasó.' },
        { options: [
          { id: 'a', text: 'Ayer', icon: 'History' },
          { id: 'b', text: 'Mañana', icon: 'CalendarDays', feedback: 'Mañana (el día siguiente) se dice "tomorrow". "Yesterday" es ayer.' },
          { id: 'c', text: 'Ahora mismo', icon: 'Clock', feedback: 'Ahora sería "now". Las pistas "yesterday" y "-ed" indican pasado.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'conocer', title: 'Irregular verbs',
          prompt: 'Algunos verbos muy usados **no** llevan -ed: cambian de forma. Mira la animación de la lección, repite cada pareja en voz alta y toca las tarjetas.' },
        { icon: 'RefreshCw', body: 'Estos verbos irregulares se aprenden de memoria, como un vocabulario nuevo. ¡Son los que más vas a usar!', reveal: [
          { icon: 'Sunrise', front: 'get up → got up', back: 'levantarse → me levanté. _I **got up** early._' },
          { icon: 'Footprints', front: 'go → went', back: 'ir → fui. _I **went** to the market._' },
          { icon: 'Eye', front: 'see → saw', back: 'ver → vi. _I **saw** a quetzal._' },
          { icon: 'Utensils', front: 'eat → ate', back: 'comer → comí. _I **ate** a tamal._' },
          { icon: 'Gift', front: 'have → had', back: 'tener → tuve. _I **had** a great day._' },
          { icon: 'Smile', front: 'am / is → was', back: 'estar / ser → estuve, fue. _I **was** happy. It **was** fun._' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'hacer', title: 'Worked example',
          prompt: 'Mira cómo Diego pasa dos oraciones del presente al pasado.' },
        { icon: 'History', problem: 'Diego escribió: _"I visit my grandmother. I eat pepián."_ Pero eso fue **last Sunday**. ¿Cómo lo corrige?',
          steps: [
            { text: 'Agrega la palabra de tiempo al inicio: **Last Sunday**, …' },
            { text: '**visit** es regular: + ed → **visited**.', why: 'No termina en e, así que se agrega -ed completo.' },
            { text: '**eat** es irregular: no es "eated", es **ate**.', why: 'Los verbos irregulares tienen su propia forma de pasado.' },
          ],
          answer: '**Last Sunday, I visited my grandmother. I ate pepián.**',
          tip: 'Pregúntate: ¿es un verbo de la lista de irregulares? Si no, agrega -ed.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: ¿estos pasados son **regulares** (con -ed) o **irregulares** (cambian)?',
          hint: 'Si termina en -ed o -d, es regular. Si la palabra cambia de otra forma, es irregular.',
          explain: 'Regulares: played, danced, watched. Irregulares: went (go), saw (see), ate (eat).' },
        { buckets: [
          { id: 'r', label: 'Regular (+ed)', icon: 'Plus' },
          { id: 'i', label: 'Irregular', icon: 'RefreshCw' },
        ], items: [
          { id: 'v1', text: 'played', bucket: 'r' },
          { id: 'v2', text: 'went', bucket: 'i' },
          { id: 'v3', text: 'danced', bucket: 'r', feedback: 'Dance termina en e: solo se agrega -d. Es regular.' },
          { id: 'v4', text: 'saw', bucket: 'i' },
          { id: 'v5', text: 'watched', bucket: 'r' },
          { id: 'v6', text: 'ate', bucket: 'i' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'hacer',
          prompt: 'Une cada verbo en presente con su pasado.',
          explain: 'Go → went, see → saw, have → had, cook → cooked, get up → got up.' },
        { leftTitle: 'Present', rightTitle: 'Past', pairs: [
          { id: 'p1', left: 'go', right: 'went' },
          { id: 'p2', left: 'see', right: 'saw' },
          { id: 'p3', left: 'have', right: 'had' },
          { id: 'p4', left: 'cook', right: 'cooked' },
          { id: 'p5', left: 'get up', right: 'got up' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'hacer',
          prompt: 'Completa lo que hizo Sofía el domingo. Usa el pasado de los verbos entre paréntesis.',
          explain: 'Got up (get up), went (go), ate (eat), played (play). Tres son irregulares y uno regular.' },
        { text: 'Last Sunday, I [[got up]] early (get up). I [[went]] to the market with my mom (go). We [[ate]] tamales (eat). In the afternoon, I [[played]] football (play).', distractors: ['goed', 'eated', 'play'] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'hacer', title: 'Reading',
          prompt: 'Lee el diario de Tomás y responde. Pistas: _lake_ = lago, _boat_ = lancha, _tired_ = cansado.',
          media: { id: 's03-l3-1-diary', kind: 'audio', title: 'Tomas\'s diary', duration: 30,
            alt: 'Un niño lee en inglés su diario sobre un paseo al lago.',
            brief: 'Audio de 30 s. Voz de niño de unos 12 años con inglés claro y lento, sin música. Texto exacto: "Yesterday I visited Lake Atitlán with my family. We went across the lake by boat. I saw three volcanoes! We ate fish and tortillas for lunch. In the evening, I was tired but very happy."' } },
        { genre: 'Diary', heading: 'Tomás\'s diary', passage:
          'Yesterday I visited Lake Atitlán with my family. We went across the lake by boat. I saw three volcanoes!\n\nWe ate fish and tortillas for lunch. In the evening, I was tired but very happy.',
          questions: [
            { q: 'Where did Tomás go?', options: [
              { id: 'a', text: 'To Lake Atitlán' },
              { id: 'b', text: 'To the market' },
              { id: 'c', text: 'To school' },
            ], correct: 'a' },
            { q: 'What did he see?', options: [
              { id: 'a', text: 'Three volcanoes' },
              { id: 'b', text: 'Three boats' },
              { id: 'c', text: 'A quetzal' },
            ], correct: 'a' },
            { q: 'Busca en el texto: ¿cuál es el pasado de **eat**?', options: [
              { id: 'a', text: 'ate' },
              { id: 'b', text: 'eated' },
              { id: 'c', text: 'went' },
            ], correct: 'a', why: '"We ate fish and tortillas." Eat es irregular: ate.' },
          ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'hacer',
          prompt: 'Ordena las palabras para decir: "El sábado pasado vi un quetzal".',
          explain: 'Last Saturday (cuándo) + I (quién) + saw (qué hizo) + a quetzal (qué).' },
        { labels: { start: 'Primera', end: 'Última' }, items: [
          { id: 'o1', text: 'Last' },
          { id: 'o2', text: 'Saturday' },
          { id: 'o3', text: 'I' },
          { id: 'o4', text: 'saw' },
          { id: 'o5', text: 'a' },
          { id: 'o6', text: 'quetzal.' },
        ] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.3.3'], prompt: 'Boleto de salida: escribe el pasado. (Ayer caminé al parque y vi a mis amigos.)' },
        { text: 'Yesterday I [[walked]] to the park and I [[saw]] my friends.', distractors: ['walk', 'seed'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.3.3'], prompt: '¿Cuál oración habla del **pasado** y está bien escrita?' },
        { options: [
          { id: 'a', text: 'Last week I goed to the river.' },
          { id: 'b', text: 'Last week I went to the river.' },
          { id: 'c', text: 'Last week I go to the river.' },
        ], correct: ['b'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's03-l3-2',
    title: 'My impressions in three sentences',
    icon: 'Sparkles',
    minutes: 15,
    gancho: '"I got up early. I saw the sun shining, and I thought: what a beautiful morning! I am happy." Con solo tres oraciones, ¿ya sabes cómo se sintió quien lo escribió?',
    objetivos: ['Narrar en tres oraciones una experiencia, una observación y una impresión personal'],
    resumen: [
      'Una impresión es lo que sientes o piensas de algo que viviste.',
      'Receta de tres oraciones: 1) What I did: I went… / I got up… 2) What I saw or heard: I saw… / I heard… 3) How I felt: I felt happy. / I thought it was beautiful!',
      'Sentimientos: happy (feliz), excited (emocionado), tired (cansado), surprised (sorprendido), calm (tranquilo).',
      'Impresiones: beautiful (hermoso), amazing (increíble), fun (divertido), delicious (delicioso), noisy (ruidoso).',
    ],
    media: {
      id: 's03-l3-2-morning', kind: 'image', title: 'A beautiful morning', aspect: '16:9',
      alt: 'Una niña abre la ventana de su casa al amanecer y sonríe al ver el sol salir detrás de un volcán.',
      brief: 'Ilustración cálida al amanecer: una niña de 11-12 años abre la ventana de madera de su casa en un pueblo del altiplano y sonríe; afuera, el sol sale detrás de un volcán y hay milpa y neblina suave. Tres globitos pequeños con íconos (un despertador, un ojo con el sol, un corazón) que representan las tres oraciones: lo que hice, lo que vi, lo que sentí. Sin texto.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'conocer', title: 'The three-sentence recipe',
          prompt: 'Para contar una impresión en inglés, usa esta receta de **tres oraciones**. Toca cada paso.' },
        { icon: 'ListOrdered', body: 'Usa el **pasado** que aprendiste el martes (went, saw, ate, was). Para "sentí" se dice **I felt** (pasado de feel).', reveal: [
          { icon: 'Footprints', front: '1. What I did', back: 'Lo que hiciste: _I **went** to the fair._ · _I **got up** early._ · _I **visited** my aunt._' },
          { icon: 'Eye', front: '2. What I saw or heard', back: 'Lo que viste u oíste: _I **saw** a big Ferris wheel._ · _I **heard** the marimba._' },
          { icon: 'Heart', front: '3. How I felt', back: 'Tu impresión: _I **felt** happy._ · _I **was** excited._ · _I **thought** it was amazing!_' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'conocer',
          prompt: 'Lee: _"I got up early. I saw the sun shining, and I thought: what a beautiful morning! I am happy."_ ¿Cómo se siente quien lo escribió?',
          explain: '**Happy** = feliz, y **beautiful** = hermoso. Con tres oraciones contó qué hizo, qué vio y cómo se sintió. Hoy aprenderás a escribir así tus propias impresiones.' },
        { options: [
          { id: 'a', text: 'Feliz', icon: 'Smile' },
          { id: 'b', text: 'Enojado', icon: 'Frown', feedback: 'Busca la palabra "happy" al final: significa feliz.' },
          { id: 'c', text: 'Aburrido', icon: 'Meh', feedback: 'Dice "what a beautiful morning!" y "I am happy": no está aburrido.' },
        ], correct: ['a'] },
      ),
      S.cards(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'conocer', title: 'Feelings and impressions',
          prompt: 'Escucha y repite cada adjetivo. Voltea la tarjeta para ver su significado y un ejemplo.',
          media: { id: 's03-l3-2-adjectives', kind: 'audio', title: 'Feelings and impressions', duration: 35,
            alt: 'Una voz en inglés dice adjetivos de sentimientos e impresiones con un ejemplo cada uno.',
            brief: 'Audio de 35 s. Voz adulta, inglés claro y expresivo (la entonación refleja cada emoción), sin música. Texto exacto, con 1 s de pausa: "happy – I felt happy." "excited – I was excited." "tired – I was tired." "surprised – I was surprised." "beautiful – It was beautiful." "amazing – It was amazing!" "delicious – It was delicious." "fun – It was fun." "calm – I felt calm."' } },
        { cards: [
          { icon: 'Smile', front: 'happy', back: 'feliz · _I felt happy._' },
          { icon: 'PartyPopper', front: 'excited', back: 'emocionado/a · _I was excited._' },
          { icon: 'Moon', front: 'tired', back: 'cansado/a · _I was tired._' },
          { icon: 'Sparkles', front: 'surprised', back: 'sorprendido/a · _I was surprised._' },
          { icon: 'Flower', front: 'beautiful', back: 'hermoso/a · _It was beautiful._' },
          { icon: 'Star', front: 'amazing', back: 'increíble · _It was amazing!_' },
          { icon: 'Utensils', front: 'delicious', back: 'delicioso/a · _It was delicious._' },
          { icon: 'PartyPopper', front: 'fun', back: 'divertido/a · _It was fun!_' },
          { icon: 'Leaf', front: 'calm', back: 'tranquilo/a · _I felt calm._' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'hacer', title: 'Worked example',
          prompt: 'Mira cómo Keila escribe su impresión de un día en la playa de Livingston, Izabal.' },
        { icon: 'Waves', problem: 'Keila fue a la playa con su familia, vio muchos pelícanos y se sintió muy emocionada. ¿Cómo lo cuenta en tres oraciones?',
          steps: [
            { text: 'Oración 1 (what I did): **I went to the beach with my family.**', why: 'Go es irregular: went.' },
            { text: 'Oración 2 (what I saw): **I saw many pelicans.**', why: 'See es irregular: saw. Pelican + s = pelicans.' },
            { text: 'Oración 3 (how I felt): **I was very excited!**', why: '"Very" (muy) hace más fuerte al adjetivo.' },
          ],
          answer: '**I went to the beach with my family. I saw many pelicans. I was very excited!**',
          tip: 'Hice → vi → sentí. Tres oraciones cortas y claras bastan.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: ¿qué parte de la receta es cada oración?',
          hint: 'Busca el verbo: went, visited → hice. Saw, heard → vi u oí. Felt, was + adjetivo → sentí.',
          explain: 'Did: I went to the fair / I visited my cousins. Saw or heard: I saw fireworks / I heard the marimba. Felt: I felt surprised / It was fun!' },
        { buckets: [
          { id: 'd', label: '1. What I did', icon: 'Footprints' },
          { id: 's', label: '2. What I saw or heard', icon: 'Eye' },
          { id: 'f', label: '3. How I felt', icon: 'Heart' },
        ], items: [
          { id: 'x1', text: 'I went to the fair.', bucket: 'd' },
          { id: 'x2', text: 'I saw fireworks.', bucket: 's' },
          { id: 'x3', text: 'I felt surprised.', bucket: 'f' },
          { id: 'x4', text: 'I visited my cousins.', bucket: 'd' },
          { id: 'x5', text: 'I heard the marimba.', bucket: 's' },
          { id: 'x6', text: 'It was fun!', bucket: 'f', feedback: '"It was fun" es tu impresión: dice cómo te pareció.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'hacer',
          prompt: 'Pablo caminó 3 horas para subir a un volcán. Al llegar arriba, ¿qué adjetivo describe mejor **cómo estaba su cuerpo**?',
          explain: 'Después de caminar tanto, Pablo estaba **tired** (cansado). ¡Quizás también happy por la vista!' },
        { options: [
          { id: 'a', text: 'I was tired.' },
          { id: 'b', text: 'It was delicious.', feedback: '"Delicious" describe comida, no cómo se siente tu cuerpo.' },
          { id: 'c', text: 'I was noisy.', feedback: '"Noisy" es ruidoso: describe un lugar con mucho ruido.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'hacer',
          prompt: 'Ordena las tres oraciones de Andrea según la receta: hice → vi → sentí.',
          explain: 'Primero lo que hizo (went), luego lo que vio (saw) y al final su impresión (was amazing).' },
        { labels: { start: '1', end: '3' }, items: [
          { id: 'o1', text: 'I went to the Sumpango kite festival.' },
          { id: 'o2', text: 'I saw giant kites of many colors.' },
          { id: 'o3', text: 'It was amazing!' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'hacer', title: 'Reading',
          prompt: 'Lee las impresiones de dos estudiantes y responde. Pistas: _smell_ = olor, _bread_ = pan, _loud_ = fuerte (sonido).' },
        { genre: 'Short texts', heading: 'Our weekend', passage:
          'Luis: Last Saturday I helped my dad at the bakery. I saw the bread come out of the oven. The smell was delicious, and I felt proud.\n\nMarta: On Sunday I went to a concert in the park. I heard a big marimba and a drum. The music was loud, but it was fun!',
          questions: [
            { q: 'What did Luis do?', options: [
              { id: 'a', text: 'He helped his dad at the bakery.' },
              { id: 'b', text: 'He went to a concert.' },
              { id: 'c', text: 'He played football.' },
            ], correct: 'a' },
            { q: 'What did Marta hear?', options: [
              { id: 'a', text: 'A marimba and a drum' },
              { id: 'b', text: 'A bird and the rain' },
              { id: 'c', text: 'Her dad' },
            ], correct: 'a' },
            { q: '¿Cómo se sintió Luis? (Pista: _proud_ = orgulloso)', options: [
              { id: 'a', text: 'Orgulloso' },
              { id: 'b', text: 'Aburrido' },
              { id: 'c', text: 'Asustado' },
            ], correct: 'a', why: '"I felt proud": se sintió orgulloso de ayudar a su papá.' },
          ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.3.3'], ambito: 'hacer',
          prompt: 'Your turn! Piensa en algo que viviste esta semana. Escribe **tres oraciones en inglés**: qué hiciste, qué viste u oíste, y cómo te sentiste.' },
        { minWords: 12, placeholder: 'I went… I saw… I felt…',
          model: 'On Wednesday I walked to school with my sister. I saw a rainbow over the mountains. I felt very happy!',
          rubric: ['Escribí tres oraciones en inglés', 'La primera dice qué hice, con un verbo en pasado', 'La segunda dice qué vi u oí (saw / heard)', 'La tercera dice cómo me sentí con un adjetivo (happy, excited, tired…)'] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.3.3'], prompt: 'Boleto de salida: completa la narración de Ana. (Fui al río. Vi muchos peces. Me sentí tranquila.)' },
        { text: 'I [[went]] to the river. I [[saw]] many fish. I [[felt]] calm.', distractors: ['go', 'see', 'feel'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.3.3'], prompt: '¿Cuál oración expresa una **impresión** (cómo se sintió o qué le pareció)?' },
        { options: [
          { id: 'a', text: 'I got up at six.' },
          { id: 'b', text: 'I went to the park.' },
          { id: 'c', text: 'It was a beautiful day!' },
        ], correct: ['c'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l3'], cnb: [], ambito: 'ser', prompt: 'How do you feel? ¿Cómo te fue esta semana?' },
        { statements: ['Uso el pasado de verbos regulares (-ed)', 'Recuerdo pasados irregulares: went, saw, ate, had, was', 'Cuento una experiencia en tres oraciones: hice, vi, sentí'],
          commitments: ['Cada noche diré en inglés una cosa que hice ese día', 'Escribiré mis tres oraciones del fin de semana', 'Aprenderé dos verbos irregulares nuevos'] },
      ),
    ],
  }),
];
