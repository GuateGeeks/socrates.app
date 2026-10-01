/**
 * L3 (inglés) · Unidad 1 · Semana 1
 * Where is it? Preposiciones de lugar: in, on, under (objetos del aula) y next to, behind,
 * in front of, between (lugares de la comunidad).
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's01-l3-1',
    title: 'In, on, under: ¿dónde está?',
    icon: 'Backpack',
    minutes: 13,
    gancho: 'Se te perdió el lápiz y tu compañera de intercambio solo habla inglés. ¿Cómo le preguntas dónde está?',
    objetivos: [
      'Nombrar en inglés objetos del aula',
      'Usar in, on y under para decir dónde está algo',
      'Preguntar y responder: Where is the…? It is…',
    ],
    resumen: [
      'Objetos del aula: book (libro), pencil (lápiz), notebook (cuaderno), backpack (mochila), table (mesa), chair (silla), box (caja).',
      'in = dentro de · on = sobre, encima de (tocando) · under = debajo de.',
      'Decimos "The book is on the table", not "in the table": in es dentro, on es encima.',
      'Pregunta: Where is the pencil? Respuesta: It is in the box. (It is = It\'s)',
    ],
    media: {
      id: 's01-l3-1-objetos', kind: 'audio', title: 'Classroom objects', duration: 40,
      alt: 'Una voz en inglés dice objetos del aula y oraciones con in, on y under.',
      brief: 'Audio de 40 s. Voz adulta con inglés claro y pausado (acento estadounidense o británico estándar), sin música. Cada palabra dos veces con 1 s de pausa: "book", "pencil", "notebook", "backpack", "table", "chair", "box". Luego, oraciones con 2 s de pausa: "The book is on the table." "The pencil is in the box." "The backpack is under the chair." "Where is the notebook? It\'s in the backpack."',
    },
    steps: [
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'conocer', title: 'Prepositions of place: in, on, under',
          prompt: 'Las **preposiciones de lugar** dicen **dónde** está algo. Toca cada tarjeta.' },
        { icon: 'MapPin', body: 'Cuidado: en español decimos "en la mesa" y "en la caja" con la misma palabra, pero en inglés son **distintas**. We say: **"The book is on the table"**, not "in the table".', reveal: [
          { icon: 'Package', front: 'in', back: '**Dentro de.** _The pencil is **in** the box._ (El lápiz está dentro de la caja.)' },
          { icon: 'ArrowUp', front: 'on', back: '**Sobre, encima de** (tocando la superficie). _The book is **on** the table._ (El libro está sobre la mesa.)' },
          { icon: 'ArrowDown', front: 'under', back: '**Debajo de.** _The backpack is **under** the chair._ (La mochila está debajo de la silla.)' },
        ] },
      ),
      S.choice(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'conocer',
          prompt: 'Observa la imagen y lee: _"The cat is **on** the box."_ ¿Dónde está el gato?',
          explain: '**On** significa "sobre" o "encima de". El gato está encima de la caja. Hoy aprenderás tres palabras para decir dónde están las cosas.',
          media: { id: 's01-l3-1-gato', kind: 'image', title: 'The cat is on the box', aspect: '4:3',
            alt: 'Un gato atigrado sentado encima de una caja de cartón cerrada, en un aula.',
            brief: 'Ilustración sencilla y alegre: un gato atigrado sentado ENCIMA de una caja de cartón cerrada, en el piso de un aula con pupitres al fondo. Nada dentro ni debajo de la caja para que no haya confusión. Sin texto.' } },
        { options: [
          { id: 'a', text: 'Encima de la caja', icon: 'ArrowUp' },
          { id: 'b', text: 'Dentro de la caja', icon: 'Package', feedback: 'Dentro de la caja sería "in the box".' },
          { id: 'c', text: 'Debajo de la caja', icon: 'ArrowDown', feedback: 'Debajo sería "under the box".' },
        ], correct: ['a'] },
      ),
      S.cards(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'conocer', title: 'Classroom objects',
          prompt: 'Escucha el audio de la lección y repite cada palabra en voz alta. Voltea la tarjeta para ver su significado y cómo se pronuncia aproximadamente.' },
        { cards: [
          { icon: 'Book', front: 'book', back: 'libro · se dice parecido a "buk"' },
          { icon: 'Pencil', front: 'pencil', back: 'lápiz · "pén-sil"' },
          { icon: 'Notebook', front: 'notebook', back: 'cuaderno · "nóut-buk"' },
          { icon: 'Backpack', front: 'backpack', back: 'mochila · "bák-pak"' },
          { icon: 'Table', front: 'table', back: 'mesa · "téi-bol"' },
          { icon: 'Package', front: 'box', back: 'caja · "boks"' },
          { icon: 'Armchair', front: 'chair', back: 'silla · "cher"' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'hacer', title: 'Worked example',
          prompt: 'Mira cómo se arma una respuesta completa en inglés.' },
        { icon: 'MessageCircle', problem: 'Tu amiga pregunta: _"Where is the notebook?"_ (¿Dónde está el cuaderno?). El cuaderno está **dentro de la mochila**. ¿Qué respondes?',
          steps: [
            { text: 'Empieza con **It is** (o su forma corta **It\'s**) = "Está".', why: 'En inglés siempre se dice quién o qué: "it" (eso) reemplaza a "the notebook".' },
            { text: 'Elige la preposición: dentro de = **in**.' },
            { text: 'Agrega el lugar con **the**: **the backpack**.', why: '"The" significa el, la, los o las.' },
          ],
          answer: '**It\'s in the backpack.** (Está dentro de la mochila.)',
          tip: 'Pregunta: Where is the…? → Respuesta: It\'s + in/on/under + the + lugar.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: la pelota está **debajo** de la mesa. ¿Qué oración lo dice?',
          hint: 'Debajo de = under. Encima de = on. Dentro de = in.',
          explain: '**Under** = debajo de. _The ball is under the table._' },
        { options: [
          { id: 'a', text: 'The ball is on the table.', feedback: 'On = encima. La pelota estaría sobre la mesa.' },
          { id: 'b', text: 'The ball is under the table.' },
          { id: 'c', text: 'The ball is in the table.', feedback: 'Una pelota no puede estar dentro de una mesa. Busca "debajo de".' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'hacer',
          prompt: 'Lee cada situación en español y colócala en la preposición inglesa correcta.',
          hint: 'Dentro → in. Encima, tocando → on. Debajo → under.',
          explain: 'Dentro de la mochila, la caja o el vaso → in. Encima de la silla o el escritorio → on. Debajo de la cama o la silla → under.' },
        { buckets: [
          { id: 'in', label: 'in', icon: 'Package' },
          { id: 'on', label: 'on', icon: 'ArrowUp' },
          { id: 'un', label: 'under', icon: 'ArrowDown' },
        ], items: [
          { id: 'x1', text: 'El cuaderno está dentro de la mochila.', bucket: 'in' },
          { id: 'x2', text: 'El gato duerme sobre la silla.', bucket: 'on' },
          { id: 'x3', text: 'Los zapatos están debajo de la cama.', bucket: 'un' },
          { id: 'x4', text: 'Los crayones están en la caja.', bucket: 'in', feedback: '"En la caja" quiere decir dentro de ella: in.' },
          { id: 'x5', text: 'El libro está en el escritorio.', bucket: 'on', feedback: '"En el escritorio" quiere decir encima de él: on. ¡Por eso decimos "on the table", not "in the table"!' },
          { id: 'x6', text: 'El perro está debajo de la silla.', bucket: 'un' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'hacer',
          prompt: 'Ordena las palabras para decir: "El lápiz está sobre el cuaderno".',
          explain: 'The pencil (qué) + is (está) + on (sobre) + the notebook (dónde).' },
        { labels: { start: 'Primera palabra', end: 'Última palabra' }, items: [
          { id: 'o1', text: 'The' },
          { id: 'o2', text: 'pencil' },
          { id: 'o3', text: 'is' },
          { id: 'o4', text: 'on' },
          { id: 'o5', text: 'the' },
          { id: 'o6', text: 'notebook.' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'hacer',
          prompt: 'Mira la escena del aula y completa con **in**, **on** o **under**.',
          explain: 'El libro está encima de la mesa (on), la mochila debajo de la silla (under) y los lápices dentro de la caja (in).',
          media: { id: 's01-l3-1-aula', kind: 'image', title: 'Our classroom', aspect: '4:3',
            alt: 'Un aula: un libro encima de la mesa, una mochila debajo de la silla y lápices dentro de una caja.',
            brief: 'Ilustración clara de un rincón de aula guatemalteca: una mesa de madera con un libro rojo ENCIMA; junto a ella, una silla con una mochila azul DEBAJO del asiento, en el piso; sobre la mesa, una caja abierta con varios lápices DENTRO. Objetos grandes y bien separados para que se vean las relaciones. Sin texto ni marcas.' } },
        { text: 'The book is [[on]] the table. The backpack is [[under]] the chair. The pencils are [[in]] the box.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'hacer',
          prompt: 'Your friend asks: _"Where is my notebook?"_ Está debajo de tu silla. ¿Qué respondes?',
          explain: '**It\'s under your chair.** "Your" significa "tu": tu silla.' },
        { options: [
          { id: 'a', text: 'It\'s under your chair.' },
          { id: 'b', text: 'It\'s in your chair.', feedback: '"In" sería dentro de la silla. Debajo es "under".' },
          { id: 'c', text: 'Where is your chair?', feedback: 'Eso es otra pregunta. Tu amiga necesita una respuesta.' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.1'], prompt: 'Boleto de salida: completa en inglés. (El libro está sobre la silla. La caja está debajo de la mesa.)' },
        { text: 'The book is [[on]] the chair. The box is [[under]] the table.', distractors: ['in'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.1'], prompt: '¿Cuál oración está **bien dicha** en inglés para "El cuaderno está en la mesa"?' },
        { options: [
          { id: 'a', text: 'The notebook is in the table.' },
          { id: 'b', text: 'The notebook is on the table.' },
          { id: 'c', text: 'The notebook is under the table.' },
        ], correct: ['b'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's01-l3-2',
    title: 'Next to, behind, in front of: my town',
    icon: 'Map',
    minutes: 14,
    gancho: 'Un turista te pregunta en el parque: "Where is the market?" ¿Podrías explicarle en inglés dónde queda?',
    objetivos: [
      'Nombrar en inglés lugares de la comunidad',
      'Usar next to, behind, in front of y between',
      'Describir dónde están los lugares en un mapa sencillo',
    ],
    resumen: [
      'Lugares: school (escuela), park (parque), market (mercado), church (iglesia), store (tienda), house (casa), bus stop (parada de bus).',
      'next to = a la par de · behind = detrás de · in front of = enfrente de · between = entre (dos cosas).',
      'Between siempre une dos lugares con and: The store is between the school and the park.',
      'Seguimos usando in, on y under para objetos: The map is on the wall.',
    ],
    media: {
      id: 's01-l3-2-town', kind: 'diagram', title: 'Map of San Pedro', aspect: '16:9',
      alt: 'Mapa sencillo de un pueblo con rótulos en inglés: church, park, school, store, market, bus stop y una casa.',
      brief: 'Mapa ilustrado, vista desde arriba con edificios en perspectiva ligera, estilo amable. Una calle principal horizontal. Arriba de la calle, de izquierda a derecha: "school", "store", "park". El "park" tiene árboles y una fuente. Frente al parque, al otro lado de la calle (abajo): "church". Detrás de la escuela (más arriba): "market" con toldos de colores. A la par de la iglesia, a su derecha: "bus stop" con una camioneta. Una "house" pequeña a la izquierda de la iglesia. Rótulos grandes en inglés, en minúscula. Sin marcas comerciales.',
    },
    steps: [
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'conocer', title: 'More prepositions of place',
          prompt: 'Estas preposiciones sirven para ubicar lugares y personas. Toca cada tarjeta y compara con el mapa.' },
        { icon: 'MapPin', body: 'Fíjate: **in front of** y **next to** tienen varias palabras, pero funcionan como una sola.', reveal: [
          { icon: 'ArrowLeftRight', front: 'next to', back: '**A la par de, al lado de.** _The bus stop is **next to** the church._' },
          { icon: 'ArrowUpFromLine', front: 'behind', back: '**Detrás de.** _The market is **behind** the school._' },
          { icon: 'ArrowDownToLine', front: 'in front of', back: '**Enfrente de.** _The church is **in front of** the park._' },
          { icon: 'Columns', front: 'between', back: '**Entre** dos cosas, unidas con **and**. _The store is **between** the school **and** the park._' },
        ] },
      ),
      S.choice(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'conocer',
          prompt: 'Mira el mapa de la lección. Lee: _"The store is **between** the school and the park."_ ¿Qué crees que significa **between**?',
          explain: 'La tienda está en medio de la escuela y el parque: **between** = entre. Con las pistas del mapa pudiste deducirlo. Hoy aprenderás más palabras para ubicar lugares.' },
        { options: [
          { id: 'a', text: 'Entre (en medio de dos lugares)', icon: 'ArrowLeftRight' },
          { id: 'b', text: 'Dentro de', icon: 'Package', feedback: 'Dentro de es "in". Mira el mapa: la tienda está en medio de dos lugares.' },
          { id: 'c', text: 'Muy lejos de', icon: 'Route', feedback: 'En el mapa la tienda está justo en medio de la escuela y el parque, no lejos.' },
        ], correct: ['a'] },
      ),
      S.cards(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'conocer', title: 'Places in town',
          prompt: 'Escucha y repite cada lugar en voz alta. Voltea la tarjeta para ver su significado.',
          media: { id: 's01-l3-2-places', kind: 'audio', title: 'Places in town', duration: 30,
            alt: 'Una voz en inglés dice nombres de lugares del pueblo.',
            brief: 'Audio de 30 s. Voz adulta, inglés claro y pausado, sin música. Cada palabra dos veces con 1 s de pausa: "school", "park", "market", "church", "store", "house", "bus stop". Al final: "The store is between the school and the park."' } },
        { cards: [
          { icon: 'School', front: 'school', back: 'escuela · "skul"' },
          { icon: 'Trees', front: 'park', back: 'parque · "park"' },
          { icon: 'Store', front: 'market', back: 'mercado · "már-ket"' },
          { icon: 'Church', front: 'church', back: 'iglesia · "cherch"' },
          { icon: 'ShoppingBasket', front: 'store', back: 'tienda · "stor"' },
          { icon: 'Bus', front: 'bus stop', back: 'parada de bus · "bas stop"' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'hacer', title: 'Worked example',
          prompt: 'Mira cómo Carlos le explica a un turista dónde está la parada de bus.' },
        { icon: 'Bus', problem: 'A tourist asks: _"Excuse me, where is the bus stop?"_ En el mapa, la parada está **a la par de la iglesia**. ¿Qué responde Carlos?',
          steps: [
            { text: 'Empieza con **It\'s** (Está).' },
            { text: 'A la par de = **next to**.', why: 'Se escriben dos palabras, pero es una sola idea.' },
            { text: 'Agrega el lugar de referencia: **the church**.' },
            { text: 'Junta todo en orden: It\'s + next to + the church. Carlos además señala la iglesia con la mano para ayudar más.', why: 'Un gesto acompaña la respuesta y la hace más clara.' },
          ],
          answer: '**It\'s next to the church.** (Está a la par de la iglesia.)',
          tip: 'Siempre necesitas un lugar de referencia: next to the…, behind the…, between the… and the…' },
      ),
      S.coord(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: en este mapa hay tres casas sin nombre (A, B y C). Lee y toca la correcta: _"The **store** is **between** the school and the park."_',
          hint: 'Between = entre. Busca la casa que está en medio de la escuela y el parque.',
          explain: 'La casa B está justo entre la escuela y el parque: esa es la tienda (store).' },
        { range: { xmin: 0, xmax: 10, ymin: 0, ymax: 6 }, markers: [
          { id: 'school', label: 'school', emoji: '🏫', x: 2, y: 4 },
          { id: 'b', label: 'B', emoji: '🏠', x: 5, y: 4 },
          { id: 'park', label: 'park', emoji: '🌳', x: 8, y: 4 },
          { id: 'a', label: 'A', emoji: '🏠', x: 2, y: 1 },
          { id: 'c', label: 'C', emoji: '🏠', x: 8, y: 1 },
        ], task: { kind: 'identify', markerId: 'b' } },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'hacer',
          prompt: 'Mira el mapa de la lección y completa las oraciones.',
          explain: 'El mercado está detrás de la escuela (behind), la iglesia enfrente del parque (in front of) y la parada de bus a la par de la iglesia (next to).' },
        { text: 'The market is [[behind]] the school. The church is [[in front of]] the park. The bus stop is [[next to]] the church.', distractors: ['under', 'between'] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'hacer',
          prompt: 'Mira el mapa de la lección. True or false?' },
        { statements: [
          { text: 'The store is between the school and the park.', answer: true },
          { text: 'The market is in front of the church.', answer: false, why: 'The market is behind the school.' },
          { text: 'The bus stop is next to the church.', answer: true },
          { text: 'The park is under the school.', answer: false, why: '"Under" es debajo de. Un parque no puede estar debajo de una escuela: the park is next to the store.' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'hacer', title: 'Reading',
          prompt: 'Lee lo que escribió Ana sobre su comunidad y responde. Pistas: _my_ = mi, _near_ = cerca, _big_ = grande, _small_ = pequeño, _I like_ = me gusta.' },
        { genre: 'Description', heading: 'My town', passage:
          'Hello! My name is Ana. I live in San Pedro. My house is small. It is next to the bus stop.\n\nMy school is big. The store is between my school and the park. The market is behind my school.\n\nI like the park. It has many trees. On Sundays, I play in the park with my brother.',
          questions: [
            { q: 'Where is Ana\'s house?', options: [
              { id: 'a', text: 'Next to the bus stop' },
              { id: 'b', text: 'Behind the park' },
              { id: 'c', text: 'In the market' },
            ], correct: 'a' },
            { q: 'What is between the school and the park?', options: [
              { id: 'a', text: 'The store' },
              { id: 'b', text: 'The church' },
              { id: 'c', text: 'Ana\'s house' },
            ], correct: 'a' },
            { q: '¿Qué hace Ana los domingos?', options: [
              { id: 'a', text: 'Juega en el parque con su hermano' },
              { id: 'b', text: 'Va al mercado con su mamá' },
              { id: 'c', text: 'Estudia en la escuela' },
            ], correct: 'a', why: '"On Sundays, I play in the park with my brother." Play = jugar, brother = hermano.' },
          ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.1'], ambito: 'hacer',
          prompt: 'Escribe **dos oraciones en inglés** sobre tu comunidad o tu casa. Usa dos preposiciones distintas (next to, behind, in front of, between, in, on, under).' },
        { minWords: 10, placeholder: 'My school is next to…',
          model: 'My house is behind the church. The store is next to my school.',
          rubric: ['Escribí dos oraciones en inglés', 'Usé dos preposiciones de lugar distintas', 'Cada oración tiene un lugar de referencia (the church, my school…)'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.1'], prompt: 'Boleto de salida: ¿qué significa _"The park is **in front of** the church"_?' },
        { options: [
          { id: 'a', text: 'El parque está enfrente de la iglesia.' },
          { id: 'b', text: 'El parque está detrás de la iglesia.' },
          { id: 'c', text: 'El parque está dentro de la iglesia.' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.1'], prompt: 'Completa en inglés: "La tienda está **entre** la escuela y el mercado. El perro está **detrás de** la casa."' },
        { text: 'The store is [[between]] the school and the market. The dog is [[behind]] the house.', distractors: ['next to', 'on'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l3'], cnb: [], ambito: 'ser', prompt: 'How are you? ¿Cómo te fue esta semana?' },
        { statements: ['Nombro objetos del aula y lugares del pueblo en inglés', 'Uso in, on y under correctamente', 'Uso next to, behind, in front of y between para ubicar lugares'],
          commitments: ['Diré en inglés dónde están tres cosas de mi casa', 'Enseñaré a alguien de mi familia la diferencia entre "in" y "on"', 'Dibujaré un mapa de mi comunidad con rótulos en inglés'] },
      ),
    ],
  }),
];
