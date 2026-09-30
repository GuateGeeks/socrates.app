/**
 * L3 (inglés) · Unidad 1 · Semana 2
 * At the market: vocabulario de frutas, verduras, números y precios; dramatización de una compra
 * con frases de cortesía.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's02-l3-1',
    title: 'At the market: fruits, vegetables and prices',
    icon: 'ShoppingBasket',
    minutes: 14,
    gancho: 'En el mercado de tu pueblo hay aguacates, mangos, tomates y cebollas. ¿Sabes decirlos en inglés?',
    objetivos: [
      'Nombrar en inglés frutas y verduras del mercado',
      'Formar el plural: one tomato, two tomatoes',
      'Preguntar y decir precios: How much is it? It\'s ten quetzales.',
    ],
    resumen: [
      'Fruits: banana, mango, orange (naranja), avocado (aguacate). Vegetables: tomato, onion (cebolla), carrot (zanahoria), potato (papa), corn (maíz).',
      'Plural: casi siempre se agrega -s (bananas, carrots). Tomato y potato agregan -es: tomatoes, potatoes. Mango acepta mangoes o mangos.',
      'Números para precios: ten (10), eleven (11), twelve (12), fifteen (15), twenty (20).',
      'How much is it? = ¿Cuánto cuesta? · It\'s five quetzales. = Cuesta cinco quetzales.',
    ],
    media: {
      id: 's02-l3-1-market', kind: 'image', title: 'The market stall', aspect: '16:9',
      alt: 'Un puesto de mercado guatemalteco con canastos de frutas y verduras; cada canasto tiene un cartel con su nombre en inglés y su precio.',
      brief: 'Ilustración colorida de un puesto de mercado guatemalteco bajo un toldo. Canastos con carteles de cartón escritos a mano, nombre en inglés y precio en quetzales: "bananas Q10", "mangoes Q12", "avocados Q15", "tomatoes Q8", "onions Q6", "carrots Q5", "potatoes Q7". Una vendedora con delantal sonríe detrás del puesto. Precios hipotéticos (no reales). Sin marcas.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'conocer',
          prompt: 'Muchas palabras en inglés se parecen al español. En el cartel dice **"avocados"**. ¿Qué venden en ese canasto?',
          explain: '**Avocado** = aguacate. Palabras como avocado, tomato y chocolate nacieron en el náhuatl, un idioma originario de México, y llegaron al inglés a través del español. Hoy aprenderás el vocabulario del mercado.' },
        { options: [
          { id: 'a', text: 'Aguacates', icon: 'Egg' },
          { id: 'b', text: 'Zanahorias', icon: 'Carrot', feedback: 'Zanahoria se dice "carrot".' },
          { id: 'c', text: 'Uvas', icon: 'Grape', feedback: 'Uva se dice "grape".' },
        ], correct: ['a'] },
      ),
      S.cards(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'conocer', title: 'Fruits and vegetables',
          prompt: 'Escucha y repite cada palabra en voz alta. Voltea la tarjeta para ver su significado y una pista de pronunciación.',
          media: { id: 's02-l3-1-vocab', kind: 'audio', title: 'Fruits and vegetables', duration: 40,
            alt: 'Una voz en inglés dice nombres de frutas y verduras.',
            brief: 'Audio de 40 s. Voz adulta, inglés claro y pausado, sin música. Cada palabra dos veces con 1 s de pausa: "banana", "mango", "orange", "avocado", "tomato", "onion", "carrot", "potato", "corn". Luego: "one tomato, two tomatoes", "one potato, two potatoes".' } },
        { cards: [
          { icon: 'Banana', front: 'banana', back: 'banano · "ba-NÁ-na"' },
          { icon: 'Apple', front: 'mango', back: 'mango · "MÉIN-gou"' },
          { icon: 'Circle', front: 'orange', back: 'naranja · "Ó-rinch"' },
          { icon: 'Egg', front: 'avocado', back: 'aguacate · "a-vo-KÁ-dou"' },
          { icon: 'Cherry', front: 'tomato', back: 'tomate · "to-MÉI-tou"' },
          { icon: 'Layers', front: 'onion', back: 'cebolla · "Á-nion"' },
          { icon: 'Carrot', front: 'carrot', back: 'zanahoria · "KÉ-rot"' },
          { icon: 'Salad', front: 'potato', back: 'papa · "po-TÉI-tou"' },
          { icon: 'Wheat', front: 'corn', back: 'maíz · "korn"' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'conocer', title: 'One, two… plural!',
          prompt: 'Para hablar de **más de uno**, el inglés cambia la palabra, igual que el español. Toca cada tarjeta.' },
        { icon: 'Plus', body: 'En inglés el adjetivo y el artículo no cambian: **the** tomato, **the** tomatoes. Solo cambia el sustantivo.', reveal: [
          { icon: 'Plus', front: 'Regla general: + s', back: 'one banana → two banana**s** · one carrot → three carrot**s** · one onion → four onion**s**.' },
          { icon: 'AlertCircle', front: 'Tomato y potato: + es', back: 'one tomato → two tomato**es** · one potato → five potato**es**. Con **mango** se aceptan las dos formas: mango**es** o mango**s**.' },
          { icon: 'Wheat', front: 'Corn', back: '**Corn** se usa casi siempre sin plural, como "maíz": _I buy corn._ Para contar se dice **ears of corn** (mazorcas).' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'conocer', title: 'Numbers and prices',
          prompt: 'Para comprar necesitas los números. Repite en voz alta. Toca cada tarjeta.' },
        { icon: 'Coins', body: 'Pregunta: **How much is it?** (¿Cuánto cuesta?) · Respuesta: **It\'s … quetzales.** Si es más de una cosa, también se dice **How much are they?**', reveal: [
          { icon: 'Hash', front: '1-10', back: 'one, two, three, four, five, six, seven, eight, nine, **ten**' },
          { icon: 'Hash', front: '11-15', back: '**eleven** (11), **twelve** (12), **thirteen** (13), **fourteen** (14), **fifteen** (15)' },
          { icon: 'Hash', front: '16-20', back: '**sixteen** (16), **seventeen** (17), **eighteen** (18), **nineteen** (19), **twenty** (20)' },
          { icon: 'Info', front: 'Truco', back: 'Del 13 al 19 terminan en **-teen**: thir**teen**, four**teen**… Di la terminación con fuerza: "four-TEEN".' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'hacer', title: 'Worked example',
          prompt: 'Mira cómo Rosa pregunta un precio en el puesto de la imagen.' },
        { icon: 'ShoppingBasket', problem: 'Rosa quiere mangos. El cartel dice "mangoes Q12". ¿Cómo pregunta y qué le responden?',
          steps: [
            { text: 'Rosa señala los mangos y pregunta: **"How much are the mangoes?"**', why: 'Son varios mangos: "are" en lugar de "is".' },
            { text: 'La vendedora mira el cartel: Q12 = **twelve quetzales**.' },
            { text: 'Responde: **"They\'re twelve quetzales."** (They are = ellos/ellas son o están.)' },
          ],
          answer: '— How much are the mangoes? — **They\'re twelve quetzales.**',
          tip: 'Una cosa: How much is it? → It\'s… · Varias: How much are they? → They\'re…' },
      ),
      S.match(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: une cada palabra en inglés con su significado.',
          hint: 'Algunas se parecen al español (tomato, banana). Para las demás, repasa las tarjetas.',
          explain: 'Onion = cebolla, carrot = zanahoria, potato = papa, orange = naranja, corn = maíz.' },
        { leftTitle: 'English', rightTitle: 'Español', pairs: [
          { id: 'm1', left: 'onion', right: 'cebolla' },
          { id: 'm2', left: 'carrot', right: 'zanahoria' },
          { id: 'm3', left: 'potato', right: 'papa' },
          { id: 'm4', left: 'orange', right: 'naranja' },
          { id: 'm5', left: 'corn', right: 'maíz' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'hacer',
          prompt: 'Completa la lista de compras con el **plural** correcto.',
          explain: 'Bananas y onions: + s. Tomatoes y potatoes: + es.' },
        { text: 'Shopping list: three [[bananas]], two [[onions]], four [[tomatoes]] and five [[potatoes]].', distractors: ['tomatos', 'potatos', 'banana'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'hacer',
          prompt: 'La vendedora dice: _"The avocados are **fifteen** quetzales."_ Escribe el precio en número.',
          explain: 'Fifteen = 15. Recuerda: los números del 13 al 19 terminan en -teen.' },
        { answer: 15, unit: 'quetzales', misconceptions: [
          { value: 50, msg: 'Fifty sería 50. Fifteen termina en -teen: es del 13 al 19.' },
          { value: 5, msg: 'Five es 5. Fifteen es five + teen: 15.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'hacer',
          prompt: 'Quieres saber cuánto cuesta **una piña** (pineapple). ¿Qué preguntas?',
          explain: 'Es una sola piña: **How much is it?** o **How much is the pineapple?**' },
        { options: [
          { id: 'a', text: 'How much is the pineapple?' },
          { id: 'b', text: 'Where is the pineapple?', feedback: '"Where" pregunta dónde está, no cuánto cuesta.' },
          { id: 'c', text: 'How much are the pineapple?', feedback: 'Es una sola piña: se usa "is", no "are".' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.2'], prompt: 'Boleto de salida: completa en inglés. (—¿Cuánto cuesta? —Cuesta doce quetzales.)' },
        { text: '— How [[much]] is it? — It\'s [[twelve]] quetzales.', distractors: ['many', 'twenty'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.2'], prompt: '¿Cuál es el plural correcto de **tomato**?' },
        { options: [
          { id: 'a', text: 'tomatos' },
          { id: 'b', text: 'tomatoes' },
          { id: 'c', text: 'tomato' },
        ], correct: ['b'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's02-l3-2',
    title: 'Let\'s act! Buying at the market',
    icon: 'Theater',
    minutes: 15,
    gancho: 'Los actores aprenden sus líneas repitiéndolas y actuándolas. ¿Y si aprendes inglés igual, actuando una compra en el mercado?',
    objetivos: [
      'Usar frases de cortesía para comprar en inglés',
      'Ordenar y completar un diálogo de compra',
      'Participar en una dramatización para practicar el vocabulario',
    ],
    resumen: [
      'Saludar: Good morning! / Good afternoon! · Ofrecer ayuda: Can I help you?',
      'Pedir: Can I have three tomatoes, please? · Preguntar el precio: How much is it?',
      'Al dar algo: Here you are. · Agradecer: Thank you! · Responder: You\'re welcome.',
      'Dramatizar ayuda a recordar: repites las frases con tu voz, gestos y objetos. Equivocarse es parte de aprender.',
    ],
    media: {
      id: 's02-l3-2-dialogue', kind: 'audio', title: 'At the market (dialogue)', duration: 40,
      alt: 'Diálogo en inglés entre una vendedora y un niño que compra tomates en el mercado.',
      brief: 'Audio de 40 s con dos voces: vendedora adulta (Seller) y niño de unos 11 años (Buyer). Inglés claro y lento; ambiente suave de mercado de fondo, sin música. Texto exacto: Seller: "Good morning! Can I help you?" Buyer: "Good morning. Can I have three tomatoes, please?" Seller: "Sure. Here you are." Buyer: "How much is it?" Seller: "It\'s six quetzales." Buyer: "Here you are. Thank you!" Seller: "You\'re welcome. Have a nice day!" Después, repetir el diálogo con un silencio de 3 s tras cada línea del Seller para que el niño diga la línea del Buyer.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'conocer',
          prompt: 'La vendedora te da tus tomates y dice: _"Here you are."_ ¿Qué es lo más amable que puedes responder?',
          explain: '**Thank you!** (¡Gracias!). En inglés, como en español, la cortesía abre puertas. Hoy practicarás una compra completa… ¡actuando!' },
        { options: [
          { id: 'a', text: 'Thank you!', icon: 'Heart' },
          { id: 'b', text: 'Good night!', icon: 'Moon', feedback: '"Good night" se usa para despedirse en la noche o antes de dormir.' },
          { id: 'c', text: 'How much is it?', icon: 'Coins', feedback: 'Es una pregunta útil, pero primero agradece lo que te entregaron.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'convivir', title: 'Polite phrases',
          prompt: 'Estas frases hacen que una compra sea amable. Escucha el diálogo de la lección y toca cada tarjeta.' },
        { icon: 'MessagesSquare', body: '**Please** (por favor) y **thank you** (gracias) son las palabras mágicas en cualquier idioma.', reveal: [
          { icon: 'Sun', front: 'Saludar', back: '**Good morning!** (Buenos días) · **Good afternoon!** (Buenas tardes) · **Hello!** (¡Hola!)' },
          { icon: 'HandHeart', front: 'Ofrecer ayuda', back: '**Can I help you?** (¿Le puedo ayudar?) — lo dice quien vende.' },
          { icon: 'ShoppingBasket', front: 'Pedir', back: '**Can I have** two mangoes, **please**? (¿Me da dos mangos, por favor?)' },
          { icon: 'Hand', front: 'Entregar', back: '**Here you are.** (Aquí tiene.) — lo dice quien entrega algo: la fruta o el dinero.' },
          { icon: 'Smile', front: 'Agradecer y responder', back: '**Thank you!** → **You\'re welcome.** (¡Gracias! → De nada.) · Despedirse: **Have a nice day!** (¡Que tenga buen día!)' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'hacer', title: 'Dialogue',
          prompt: 'Escucha el audio de la lección mientras lees el diálogo. Luego responde.' },
        { genre: 'Dialogue', heading: 'At the market', passage:
          'Seller: Good morning! Can I help you?\n\nBuyer: Good morning. Can I have three tomatoes, please?\n\nSeller: Sure. Here you are.\n\nBuyer: How much is it?\n\nSeller: It\'s six quetzales.\n\nBuyer: Here you are. Thank you!\n\nSeller: You\'re welcome. Have a nice day!',
          questions: [
            { q: 'What does the buyer want?', options: [
              { id: 'a', text: 'Three tomatoes' },
              { id: 'b', text: 'Six tomatoes' },
              { id: 'c', text: 'Three onions' },
            ], correct: 'a' },
            { q: 'How much is it?', options: [
              { id: 'a', text: 'Six quetzales' },
              { id: 'b', text: 'Three quetzales' },
              { id: 'c', text: 'Sixteen quetzales' },
            ], correct: 'a', why: '"It\'s six quetzales": six = 6.' },
            { q: '¿Quién dice "Here you are" y por qué lo dicen las dos personas?', options: [
              { id: 'a', text: 'Los dos: la vendedora al entregar los tomates y el comprador al entregar el dinero' },
              { id: 'b', text: 'Solo la vendedora, para saludar' },
              { id: 'c', text: 'Solo el comprador, para despedirse' },
            ], correct: 'a', why: '"Here you are" se dice al entregar algo, sea fruta o dinero.' },
          ] },
      ),
      S.order(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: ordena este otro diálogo de compra.',
          hint: 'Toda compra empieza con un saludo y termina con gracias. En medio: pedir, entregar, preguntar el precio.',
          explain: 'Saludo → pedir → entregar → precio → pagar y agradecer → despedida.' },
        { labels: { start: 'Empieza', end: 'Termina' }, items: [
          { id: 'o1', text: 'Seller: Good afternoon! Can I help you?' },
          { id: 'o2', text: 'Buyer: Can I have two mangoes, please?' },
          { id: 'o3', text: 'Seller: Here you are.' },
          { id: 'o4', text: 'Buyer: How much is it?' },
          { id: 'o5', text: 'Seller: It\'s ten quetzales.' },
          { id: 'o6', text: 'Buyer: Here you are. Thank you!' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'ser', title: 'How to act a dialogue',
          prompt: 'Dramatizar es una de las mejores formas de aprender un idioma: la voz, los gestos y los objetos ayudan a recordar. Toca cada consejo.' },
        { icon: 'Theater', body: 'No necesitas un escenario: basta con una mesa, unas frutas de verdad o dibujadas y alguien con quien actuar.', reveal: [
          { icon: 'Users', front: 'Roles', back: 'Una persona es **Seller** y otra **Buyer**. Después cambian de papel.' },
          { icon: 'Apple', front: 'Objetos', back: 'Usa frutas o verduras de tu cocina y billetes de papel dibujados.' },
          { icon: 'Volume2', front: 'Voz y gestos', back: 'Habla despacio y claro. Sonríe al saludar y extiende la mano al decir "Here you are".' },
          { icon: 'Heart', front: 'Ánimo', back: 'Si olvidas una palabra, mira el diálogo y sigue. **Equivocarse es parte de aprender**; nadie nace sabiendo inglés.' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'hacer',
          prompt: 'Une cada frase con la **respuesta** más adecuada.',
          explain: 'Cada frase de cortesía tiene su respuesta: Thank you → You\'re welcome; How much is it? → It\'s … quetzales.' },
        { leftTitle: 'Dices…', rightTitle: 'Te responden…', pairs: [
          { id: 'r1', left: 'Good morning!', right: 'Good morning! Can I help you?' },
          { id: 'r2', left: 'Can I have an orange, please?', right: 'Sure. Here you are.' },
          { id: 'r3', left: 'How much is it?', right: 'It\'s two quetzales.' },
          { id: 'r4', left: 'Thank you!', right: 'You\'re welcome.' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'hacer',
          prompt: 'Completa el diálogo con las palabras del banco.',
          explain: 'Help (ayudar), have (pedir: Can I have…?), much (How much…?), welcome (You\'re welcome).' },
        { text: 'Seller: Hello! Can I [[help]] you?\nBuyer: Can I [[have]] four carrots, please?\nBuyer: How [[much]] is it?\nSeller: It\'s eight quetzales.\nBuyer: Thank you!\nSeller: You\'re [[welcome]].', distractors: ['many', 'please'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'convivir',
          prompt: 'Your turn! Dramatiza una compra en el mercado con alguien de tu familia o un compañero.' },
        { goal: 'Actuar en inglés una compra completa en el mercado, usando frases de cortesía, frutas o verduras y precios.',
          steps: [
            { title: 'Prepara', detail: 'Pon en una mesa 3 frutas o verduras (reales o dibujadas) con un cartel de precio en inglés: "bananas – ten quetzales".' },
            { title: 'Ensaya', detail: 'Lee en voz alta el diálogo "At the market" con tu compañero. Tú eres Buyer.' },
            { title: 'Actúa', detail: 'Actúa la compra sin leer, cambiando la fruta y el precio. Usa gestos al entregar ("Here you are").' },
            { title: 'Cambia de papel', detail: 'Ahora tú eres Seller. Repite con otra fruta.' },
          ],
          evidence: 'Escribe en tu cuaderno el diálogo que actuaste, o pide que te graben un audio corto si es posible.',
          rubric: ['Saludé y me despedí en inglés', 'Pedí algo con "Can I have…, please?"', 'Pregunté el precio y entendí el número', 'Usé Thank you / You\'re welcome', 'Participé con ganas, aunque me equivocara'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.2'], prompt: 'Boleto de salida: quieres pedir dos aguacates de forma amable. ¿Qué dices?' },
        { options: [
          { id: 'a', text: 'Can I have two avocados, please?' },
          { id: 'b', text: 'You\'re welcome, two avocados.' },
          { id: 'c', text: 'Where is two avocados?' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.2'], prompt: 'Completa: el vendedor te entrega las naranjas. Tú agradeces y él responde.' },
        { text: 'Seller: Here you [[are]]. Buyer: Thank [[you]]! Seller: You\'re [[welcome]].', distractors: ['is', 'please'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l3'], cnb: [], ambito: 'ser', prompt: 'How was your week? ¿Cómo te fue?' },
        { statements: ['Nombro frutas y verduras en inglés', 'Pregunto y entiendo precios del 1 al 20', 'Uso frases de cortesía para comprar', 'Me animé a actuar un diálogo en inglés'],
          commitments: ['Nombraré en inglés lo que compremos en casa esta semana', 'Actuaré el diálogo con otra persona de mi familia', 'Practicaré los números del 11 al 20'] },
      ),
    ],
  }),
];
