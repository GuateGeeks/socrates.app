/**
 * L3 (inglés) · Unidad 1 · Semana 5
 * Armar oraciones en inglés: pronombre + verbo + sustantivo (con la -s de he/she/it) y el lugar
 * de los adjetivos y los adverbios.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's05-l3-1',
    title: 'Who does what? Pronoun + verb + noun',
    icon: 'Blocks',
    minutes: 14,
    gancho: 'En español puedes decir "Toco marimba" sin decir "yo". En inglés, ¿se puede decir solo "Play marimba"?',
    objetivos: ['Construir oraciones en presente con pronombre, verbo y sustantivo en orden correcto'],
    resumen: [
      'Pronombres: I (yo), you (tú, usted, ustedes), he (él), she (ella), it (animal o cosa), we (nosotros), they (ellos, ellas).',
      'En inglés el pronombre (o el nombre) casi siempre se dice: "I play", no solo "play".',
      'Orden básico: quién + qué hace + qué cosa: She plays the marimba.',
      'En presente, con he, she, it el verbo lleva -s: I play → she plays; we eat → he eats.',
    ],
    media: {
      id: 's05-l3-1-blocks', kind: 'animation', title: 'Sentence blocks', aspect: '16:9', duration: 40,
      alt: 'Bloques de colores se encajan en orden: un bloque azul "She", uno naranja "plays" y uno verde "the marimba".',
      brief: 'Animación 2D de 40 s. Tres rieles de colores rotulados "WHO? (pronoun)" en azul, "DOES WHAT? (verb)" en naranja y "WHAT? (noun)" en verde. Caen bloques y encajan: "She" + "plays" + "the marimba"; una marimba sonando aparece a la derecha. Luego "They" + "grow" + "corn" con una milpa, y "He" + "eats" + "tortillas". Cuando aparece he/she, la -s del verbo brilla en amarillo. Narración en inglés lento con subtítulos en español.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'conocer',
          prompt: 'Build a sentence in the order subject, verb, object.' },
        { icon: 'Blocks', body: 'A subject pronoun tells who acts: I, you, he, she, it, we, or they. In the simple present, add -s to most verbs with he, she, and it: She reads signs.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'conocer',
          prompt: '¿Cuál de estas oraciones suena **correcta** en inglés?',
          explain: '**She plays the marimba.** Primero quién (she), luego qué hace (plays) y al final qué cosa (the marimba). Hoy aprenderás este orden.' },
        { options: [
          { id: 'a', text: 'Plays she the marimba.', feedback: 'En inglés la persona va primero, antes del verbo.' },
          { id: 'b', text: 'She plays the marimba.' },
          { id: 'c', text: 'The marimba she plays.', feedback: 'Así suena raro en inglés: primero quién, luego qué hace, luego qué cosa.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'conocer', title: 'Subject pronouns',
          prompt: 'Los **pronombres** reemplazan el nombre de quien hace la acción. Repite cada uno en voz alta y toca las tarjetas.' },
        { icon: 'Users', body: 'El pronombre **I** (yo) siempre se escribe con **mayúscula**, aunque esté en medio de la oración.', reveal: [
          { icon: 'User', front: 'I', back: '**yo** · _I am Ana._' },
          { icon: 'Hand', front: 'you', back: '**tú, usted o ustedes** · _You are my friend._' },
          { icon: 'User', front: 'he / she', back: '**he** = él · **she** = ella · _He is Luis. She is Rosa._' },
          { icon: 'Dog', front: 'it', back: 'Para **un animal o una cosa**: _It is a dog. It is big._' },
          { icon: 'Users', front: 'we / they', back: '**we** = nosotros/as · **they** = ellos/ellas (personas, animales o cosas) · _We are students. They are cousins._' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'conocer', title: 'The order and the -s',
          prompt: 'Dos reglas para armar oraciones en presente. Toca cada tarjeta.' },
        { icon: 'Blocks', body: 'Orden: **WHO (pronoun) + DOES WHAT (verb) + WHAT (noun)**.', reveal: [
          { icon: 'ListOrdered', front: 'El orden', back: '_They_ (quién) _grow_ (qué hacen) _corn_ (qué cosa). → Ellos siembran maíz.' },
          { icon: 'AlertCircle', front: 'No te olvides del pronombre', back: 'Español: "Siembran maíz". Inglés: "**They** grow corn". Sin pronombre la oración queda incompleta.' },
          { icon: 'Plus', front: 'He, she, it + s', back: 'I play · you play · we play · they play… pero **he plays**, **she plays**, **it plays**. También: eat → **eats**, grow → **grows**.' },
          { icon: 'Info', front: 'Casos especiales', back: 'Verbos que terminan en -ch, -sh, -o agregan **-es**: watch → watch**es**, go → go**es**. Y **have** → **has**: _She has a dog._' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'hacer', title: 'Worked example',
          prompt: 'Mira cómo se traduce una oración paso a paso.' },
        { icon: 'Languages', problem: '¿Cómo se dice en inglés: "Mi hermano come tortillas"? (brother = hermano, eat = comer)',
          steps: [
            { text: '¿Quién? **My brother**. Es un "él": he.', why: 'Puedes usar el nombre (my brother) o el pronombre (he).' },
            { text: '¿Qué hace? **eat**. Como es "él", agrega -s: **eats**.' },
            { text: '¿Qué cosa? **tortillas**.' },
            { text: 'Junta los bloques en orden: quién + verbo + cosa.' },
          ],
          answer: '**My brother eats tortillas.** (o **He eats tortillas.**)',
          tip: 'Si quien hace la acción es él, ella o una cosa, busca la -s del verbo.' },
      ),
      S.match(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: ¿qué pronombre reemplaza a cada nombre?',
          hint: 'Piensa: ¿es un hombre, una mujer, un animal o cosa, un grupo contigo o un grupo sin ti?',
          explain: 'Carlos → he. Doña Marta → she. The dog → it. My friends → they. Ana and I → we.' },
        { leftTitle: 'Nombre', rightTitle: 'Pronoun', pairs: [
          { id: 'p1', left: 'Carlos', right: 'he' },
          { id: 'p2', left: 'Doña Marta', right: 'she' },
          { id: 'p3', left: 'the dog', right: 'it' },
          { id: 'p4', left: 'my friends', right: 'they' },
          { id: 'p5', left: 'Ana and I', right: 'we' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'hacer',
          prompt: 'Clasifica cada palabra según su tipo.',
          hint: 'Pronoun: quién (I, she…). Verb: acción (play, eat…). Noun: cosa, lugar o persona (corn, school…).',
          explain: 'Pronouns: I, she, they. Verbs: play, eat, grow. Nouns: corn, school, ball.' },
        { buckets: [
          { id: 'p', label: 'Pronoun', icon: 'User' },
          { id: 'v', label: 'Verb', icon: 'Zap' },
          { id: 'n', label: 'Noun', icon: 'Tag' },
        ], items: [
          { id: 'w1', text: 'she', bucket: 'p' },
          { id: 'w2', text: 'eat', bucket: 'v' },
          { id: 'w3', text: 'corn', bucket: 'n' },
          { id: 'w4', text: 'they', bucket: 'p' },
          { id: 'w5', text: 'grow', bucket: 'v' },
          { id: 'w6', text: 'school', bucket: 'n' },
          { id: 'w7', text: 'I', bucket: 'p' },
          { id: 'w8', text: 'ball', bucket: 'n' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'hacer',
          prompt: 'Ordena las palabras para decir: "Nosotros comemos frijoles".',
          explain: 'We (quién) + eat (qué hacemos) + beans (qué cosa).' },
        { labels: { start: 'Primera', end: 'Última' }, items: [
          { id: 'o1', text: 'We' },
          { id: 'o2', text: 'eat' },
          { id: 'o3', text: 'beans.' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'hacer',
          prompt: 'Completa con el verbo correcto. Atención a la **-s** de he, she, it.',
          explain: 'I play (sin -s). My sister plays (ella → -s). They grow (sin -s). My dad has (have → has con he).' },
        { text: 'I [[play]] football. My sister [[plays]] the guitar. My grandparents [[grow]] coffee. My dad [[has]] a truck.', distractors: ['grows', 'have'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'hacer',
          prompt: 'Tu compañero escribió: _"Watches TV my cat."_ ¿Cuál es la oración corregida?',
          explain: '**My cat watches TV.** Primero quién (my cat), luego qué hace (watches, con -es porque termina en ch) y luego qué cosa (TV).' },
        { options: [
          { id: 'a', text: 'My cat watches TV.' },
          { id: 'b', text: 'My cat watch TV.', feedback: 'El orden está bien, pero "my cat" es "it": el verbo lleva -es → watches.' },
          { id: 'c', text: 'TV watches my cat.', feedback: '¡Así la televisión estaría mirando al gato!' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.3'], prompt: 'Boleto de salida: ordena para decir "Ella lee un libro".' },
        { items: [
          { id: 'o1', text: 'She' },
          { id: 'o2', text: 'reads' },
          { id: 'o3', text: 'a' },
          { id: 'o4', text: 'book.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.3'], prompt: '¿Qué oración está **bien escrita**?' },
        { options: [
          { id: 'a', text: 'He play marimba.' },
          { id: 'b', text: 'He plays the marimba.' },
          { id: 'c', text: 'Plays the marimba.' },
        ], correct: ['b'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's05-l3-2',
    title: 'How is it? How do you do it? Adjectives and adverbs',
    icon: 'Palette',
    minutes: 15,
    gancho: 'En español decimos "una casa grande". En inglés, ¿será "a house big" o "a big house"?',
    objetivos: ['Construir oraciones en inglés con adjetivos y adverbios en orden correcto'],
    resumen: [
      'El adjetivo describe al sustantivo y va ANTES de él: a red backpack, a tall volcano. Nunca lleva plural: two big dogs.',
      'El adjetivo también va después de is / are: The house is big.',
      'El adverbio dice CÓMO se hace la acción. Muchos se forman con -ly: slow → slowly, quiet → quietly, careful → carefully.',
      'Algunos adverbios son especiales: fast (rápido) y well (bien). El adverbio suele ir al final: She sings beautifully.',
    ],
    media: {
      id: 's05-l3-2-turtle', kind: 'animation', title: 'The fast rabbit and the slow turtle', aspect: '16:9', duration: 45,
      alt: 'Un conejo café corre rápido y una tortuga verde camina despacio; aparecen oraciones con adjetivos y adverbios.',
      brief: 'Animación 2D de 45 s en un camino de tierra junto a una milpa. Un conejo café pequeño y una tortuga verde grande. Aparece el texto "a small brown rabbit" con "small" y "brown" subrayados en verde (adjetivos, antes del sustantivo). Luego el conejo corre: "The rabbit runs fast." con "fast" en morado (adverbio). La tortuga avanza: "The turtle walks slowly." con "slowly" en morado. Cierre: la tortuga llega con calma: "The turtle walks carefully." Narración en inglés lento con subtítulos en español.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'conocer',
          prompt: 'Choose whether a word describes a noun or an action.' },
        { icon: 'Gauge', body: 'An adjective describes a noun: a clear sign. An adverb describes how an action happens: read carefully. Many English adverbs end in -ly, but some, such as fast, do not.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'conocer',
          prompt: '¿Cómo se dice **"una casa grande"** en inglés?',
          explain: 'En inglés el adjetivo va **antes** del sustantivo: **a big house**. Es al revés que en español. Hoy aprenderás dónde van los adjetivos y los adverbios.' },
        { options: [
          { id: 'a', text: 'a house big', icon: 'Home', feedback: 'Así lo diríamos en español. En inglés el adjetivo va antes.' },
          { id: 'b', text: 'a big house', icon: 'Home' },
          { id: 'c', text: 'a bigs house', icon: 'Home', feedback: 'En inglés los adjetivos nunca llevan -s.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'conocer', title: 'Adjectives',
          prompt: 'Los **adjetivos** dicen **cómo es** algo. Toca cada tarjeta.' },
        { icon: 'Palette', body: 'Adjetivos útiles: big, small, tall, red, blue, green, happy, beautiful, delicious, old, new.', reveal: [
          { icon: 'ArrowRight', front: 'Antes del sustantivo', back: 'a **red** backpack (una mochila roja) · a **tall** volcano (un volcán alto) · **delicious** tamales.' },
          { icon: 'Minus', front: 'Sin plural', back: 'Español: dos perros grande**s**. Inglés: two **big** dogs. El adjetivo **no cambia**.' },
          { icon: 'Equal', front: 'Después de is / are', back: 'The volcano **is tall**. The tamales **are delicious**.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'conocer', title: 'Adverbs',
          prompt: 'Los **adverbios** dicen **cómo se hace una acción**. Mira la animación de la lección y toca cada tarjeta.' },
        { icon: 'Zap', body: 'El adjetivo acompaña a una **cosa**; el adverbio acompaña a una **acción**. Compara: _a **slow** turtle_ (adjetivo) / _it walks **slowly**_ (adverbio).', reveal: [
          { icon: 'Plus', front: 'Adjetivo + ly', back: 'slow → **slowly** (despacio) · quiet → **quietly** (en silencio) · careful → **carefully** (con cuidado) · beautiful → **beautifully** (hermosamente)' },
          { icon: 'Rabbit', front: 'Especiales', back: '**fast** (rápido) no cambia: _He runs **fast**._ · good → **well** (bien): _She sings **well**._' },
          { icon: 'ListOrdered', front: '¿Dónde va?', back: 'Casi siempre **al final**, después del verbo o de la cosa: _She sings **beautifully**._ · _He reads the book **slowly**._' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'hacer', title: 'Worked example',
          prompt: 'Mira cómo se arma una oración con todas las piezas.' },
        { icon: 'Blocks', problem: '¿Cómo se dice: "Mi abuela hace tamales deliciosos con cuidado"?',
          steps: [
            { text: 'Quién: **My grandmother** (she).' },
            { text: 'Qué hace: make → **makes** (con -s, porque es "she").' },
            { text: 'Qué cosa, con su adjetivo **antes**: **delicious tamales**.', why: 'El adjetivo va antes del sustantivo y no lleva plural.' },
            { text: 'Cómo lo hace: careful + ly → **carefully**, al final.' },
          ],
          answer: '**My grandmother makes delicious tamales carefully.**',
          tip: 'Quién + verbo + (adjetivo + sustantivo) + adverbio.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: ¿es un **adjetivo** (cómo es algo) o un **adverbio** (cómo se hace)?',
          hint: 'Muchos adverbios terminan en -ly. Recuerda también los especiales: fast y well.',
          explain: 'Adjectives: big, happy, red, slow. Adverbs: slowly, quietly, well.' },
        { buckets: [
          { id: 'adj', label: 'Adjective', icon: 'Palette' },
          { id: 'adv', label: 'Adverb', icon: 'Zap' },
        ], items: [
          { id: 'x1', text: 'big', bucket: 'adj' },
          { id: 'x2', text: 'slowly', bucket: 'adv' },
          { id: 'x3', text: 'happy', bucket: 'adj' },
          { id: 'x4', text: 'quietly', bucket: 'adv' },
          { id: 'x5', text: 'red', bucket: 'adj' },
          { id: 'x6', text: 'well', bucket: 'adv', feedback: '"Well" es el adverbio de "good": She sings well.' },
          { id: 'x7', text: 'slow', bucket: 'adj', feedback: 'Sin -ly describe a una cosa: a slow turtle.' },
        ] },
      ),
      S.order(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'hacer',
          prompt: 'Ordena las palabras para decir: "Ella tiene una mochila roja".',
          hint: 'Quién + verbo + a + adjetivo + sustantivo.',
          explain: 'She (quién) + has (verbo) + a + red (adjetivo) + backpack (sustantivo).' },
        { labels: { start: 'Primera', end: 'Última' }, items: [
          { id: 'o1', text: 'She' },
          { id: 'o2', text: 'has' },
          { id: 'o3', text: 'a' },
          { id: 'o4', text: 'red' },
          { id: 'o5', text: 'backpack.' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'hacer',
          prompt: '¿Adjetivo o adverbio? Elige la palabra correcta.',
          explain: 'Quiet (adjetivo) describe la biblioteca. Quietly (adverbio) dice cómo leemos. Careful describe a la conductora; carefully dice cómo maneja.' },
        { text: 'The library is [[quiet]]. We read [[quietly]]. My aunt is a [[careful]] driver. She drives [[carefully]].' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'hacer',
          prompt: 'Describe lo que hacen los niños en el recreo: juegan felizmente en el patio grande.',
          explain: '**The children play happily in the big yard.** Adjetivo antes del sustantivo (big yard) y adverbio después del verbo (play happily).' },
        { options: [
          { id: 'a', text: 'The children play happily in the big yard.' },
          { id: 'b', text: 'The children play happy in the yard big.', feedback: 'Dos errores: la acción necesita adverbio (happily) y el adjetivo va antes (big yard).' },
          { id: 'c', text: 'Happily the children the big yard play.', feedback: 'El orden está mezclado: quién + verbo + cómo + dónde.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'hacer',
          prompt: 'Ordena las palabras para decir: "Mi hermano toca el tambor fuerte (con fuerza)".',
          explain: 'My brother (quién) + plays (verbo con -s) + the drum (qué cosa) + loudly (cómo).' },
        { labels: { start: 'Primera', end: 'Última' }, items: [
          { id: 'o1', text: 'My' },
          { id: 'o2', text: 'brother' },
          { id: 'o3', text: 'plays' },
          { id: 'o4', text: 'the' },
          { id: 'o5', text: 'drum' },
          { id: 'o6', text: 'loudly.' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:2.2.3'], ambito: 'hacer',
          prompt: 'Escribe **dos oraciones en inglés** sobre tu familia: una con un **adjetivo antes de un sustantivo** y otra con un **adverbio** que diga cómo alguien hace algo.' },
        { minWords: 10, placeholder: 'My mom has a… My brother runs…',
          model: 'My grandfather has a small farm. My sister sings beautifully.',
          rubric: ['Escribí dos oraciones en inglés', 'Usé un adjetivo antes de un sustantivo (a small farm)', 'Usé un adverbio después del verbo (sings beautifully)', 'Usé la -s con he o she cuando tocaba'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.3'], prompt: 'Boleto de salida: ¿qué oración está bien escrita?' },
        { options: [
          { id: 'a', text: 'I have two dogs bigs.' },
          { id: 'b', text: 'I have two big dogs.' },
          { id: 'c', text: 'I have two bigs dogs.' },
        ], correct: ['b'] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.3'], prompt: 'Completa: "La tortuga camina despacio. El conejo corre rápido."' },
        { text: 'The turtle walks [[slowly]]. The rabbit runs [[fast]].', distractors: ['slow', 'fastly'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l3'], cnb: [], ambito: 'ser', prompt: 'How was your week? ¿Cómo te fue?' },
        { statements: ['Uso los pronombres I, you, he, she, it, we, they', 'Ordeno oraciones: quién + verbo + cosa', 'Pongo el adjetivo antes del sustantivo', 'Uso adverbios como slowly, fast y well'],
          commitments: ['Describiré en inglés tres cosas de mi casa con adjetivos', 'Diré en inglés cómo hace algo cada persona de mi familia', 'Revisaré la -s de he y she cuando escriba'] },
      ),
    ],
  }),
];
