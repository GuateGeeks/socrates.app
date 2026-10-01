/**
 * Comunicación y Lenguaje L1 · Unidad 1 · Semana 4
 * Hilo de la semana: del texto dramático a la escena. La tipografía del guion teatral, las formas
 * de iniciación al juego dramático (juego de roles, pantomima, títeres y marionetas) y los
 * recursos de apoyo para escenificar. La semana cierra preparando una escena informativa sobre
 * crecer con cuidado, comprobar datos y pedir apoyo.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's04-l1-1',
    title: 'Cómo se escribe un guion de teatro',
    icon: 'ScrollText',
    minutes: 14,
    gancho: 'Si le das a tu grupo un guion desordenado, ¿cómo sabrá cada quien qué decir y cuándo moverse?',
    objetivos: [
      "Escribir una escena con la estructura y la tipografía del guion teatral",
    ],
    resumen: [
      'Un guion teatral empieza con el título y la lista de personajes (con una breve descripción de cada uno).',
      'Se indica el acto y la escena, y una acotación inicial describe el lugar y el momento.',
      'El nombre del personaje va en MAYÚSCULAS, seguido de dos puntos y su diálogo. Las acotaciones van entre paréntesis y en cursiva.',
      'La palabra "Telón" o "Fin" indica el final de un acto o de la obra.',
    ],
    media: {
      id: 's04-l1-1-guion', kind: 'diagram', title: 'Anatomía de un guion', aspect: '3:4',
      alt: 'Página de guion con flechas de colores que señalan: título, lista de personajes, acto y escena, acotación inicial, nombre en mayúsculas, diálogo, acotación en cursiva y la palabra Telón.',
      brief: 'Diagrama vertical de una página de guion escolar titulada "La semilla viajera". Bloques y etiquetas con flechas: "Título" (centrado, grande), "Personajes" (lista: SEMILLA, VIENTO, NIÑA ROSA), "Acto I – Escena 1" (negrita), "Acotación inicial" (cursiva, entre paréntesis: "Un campo de milpa al amanecer"), "NOMBRE EN MAYÚSCULAS + dos puntos", "Diálogo", "Acotación dentro del diálogo" (cursiva, paréntesis) y "Telón" al final. Colores distintos para cada tipo de elemento. Letra grande y clara.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:5.1.8'], title: 'Idea central', prompt: 'Una escena sobre crecimiento necesita un guion claro: aprende cómo se organizan personajes, diálogos y acotaciones.' },
        { icon: 'BookOpenCheck', body: "Un guion teatral empieza con el título y la lista de personajes (con una breve descripción de cada uno)." },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'conocer',
          prompt: '¿Cuál de estas líneas está escrita **como en un guion de teatro**?',
          explain: 'En un guion, el nombre va en mayúsculas y seguido de dos puntos; lo que se actúa va entre paréntesis y en cursiva. Así cada actor encuentra rápido su parte.' },
        { options: [
          { id: 'a', text: 'Rosa dijo que tenía hambre mientras se sobaba la panza.', feedback: 'Así se escribe en un cuento: hay un narrador que cuenta.' },
          { id: 'b', text: 'ROSA: (se soba la panza) ¡Tengo un hambre de león!' },
          { id: 'c', text: '—Tengo hambre —dijo Rosa.', feedback: 'Este es el diálogo de un cuento, con guion largo y narrador ("dijo Rosa").' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'conocer', title: 'La tipografía del guion',
          prompt: 'La **tipografía** es la forma en que se presentan las letras en la página: mayúsculas, cursivas, negritas, paréntesis. El guion tiene reglas propias. Observa el diagrama y toca cada tarjeta.' },
        { icon: 'ScrollText', body: 'Estas reglas no son un capricho: sirven para que actrices, actores y equipo técnico **encuentren rápido** lo que les toca.', reveal: [
          { icon: 'Heading', front: 'Título y personajes', back: 'Arriba, el **título**. Debajo, la **lista de personajes** con una breve descripción: "ROSA, niña de 11 años, muy curiosa".' },
          { icon: 'Layers', front: 'Acto y escena', back: 'En **negrita**: "Acto I – Escena 1". Así se sabe en qué parte de la obra estamos.' },
          { icon: 'Info', front: 'Acotación inicial', back: 'Al empezar cada escena, entre paréntesis y en cursiva, se describe **dónde y cuándo** ocurre: _(Un campo de milpa al amanecer. Se oye un gallo.)_' },
          { icon: 'Type', front: 'NOMBRE: diálogo', back: 'El nombre del personaje en **MAYÚSCULAS**, seguido de **dos puntos** y lo que dice. Sin comillas ni guiones.' },
          { icon: 'Italic', front: '(Acotaciones)', back: 'Dentro del diálogo, **entre paréntesis y en cursiva**: gestos, movimientos, tono. _(Se ríe.)_ _(Susurrando.)_' },
          { icon: 'Flag', front: 'Telón o Fin', back: 'Indica que termina un acto o la obra.' },
        ] },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer',
          prompt: 'Toca los **nombres de los personajes** en este guion.',
          hint: 'Los nombres están en mayúsculas y van seguidos de dos puntos, antes de cada diálogo.',
          explain: 'Los nombres en mayúsculas ayudan a cada actor a encontrar sus líneas de un vistazo. Fíjate que "Rosa" dentro de un diálogo no cuenta: ahí es parte de lo que dice el personaje.' },
        { target: 'nombres de personajes', text: '{SEMILLA}: (tiritando) ¡Qué frío hace aquí dentro de la tierra!\n{VIENTO}: (sopla fuerte) ¡Despierta, pequeña! Ya viene la lluvia.\n{SEMILLA}: ¿Y si no crezco? ¿Y si Rosa se olvida de mí?\n{ROSA}: (entra con un guacal de agua) Nunca me olvido de mis semillas.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer', title: 'Ejemplo resuelto: ordenar un guion',
          prompt: 'Un compañero escribió su escena sin formato. Mira cómo se corrige paso a paso.' },
        { icon: 'Wrench', problem: 'Texto sin formato: "La semilla viajera. Escena 1. Es de noche en la milpa. Semilla —con miedo—: ¿Quién anda ahí? Viento dice riendo: soy yo, tu amigo."',
          steps: [
            { text: 'El **título** va solo y destacado: **La semilla viajera**.' },
            { text: 'Agrego la **lista de personajes**: SEMILLA, pequeña y miedosa. VIENTO, juguetón.', why: 'Así el grupo sabe cuántos actores necesita.' },
            { text: 'Escribo **Escena 1** en negrita y la **acotación inicial** entre paréntesis: _(De noche, en la milpa.)_' },
            { text: 'Pongo cada nombre en **MAYÚSCULAS con dos puntos**, y lo que se actúa entre paréntesis: SEMILLA: _(con miedo)_ ¿Quién anda ahí?' },
            { text: 'Quito "dice" y paso "riendo" a acotación: VIENTO: _(riendo)_ Soy yo, tu amigo.', why: 'En el guion no hay narrador: palabras como "dice" sobran.' },
          ],
          answer: '**La semilla viajera**\nPersonajes: SEMILLA, pequeña y miedosa. VIENTO, juguetón.\n**Escena 1**\n_(De noche, en la milpa.)_\nSEMILLA: _(con miedo)_ ¿Quién anda ahí?\nVIENTO: _(riendo)_ Soy yo, tu amigo.',
          tip: 'Pregunta clave: ¿esto se DICE (diálogo) o se HACE (acotación)?' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer',
          prompt: 'Ahora tú. ¿Cuál es la forma **correcta** de escribir en un guion que la abuela habla bajito mientras teje?',
          hint: 'Recuerda: nombre en mayúsculas y dos puntos; lo que se hace, entre paréntesis.',
          explain: 'Nombre en mayúsculas + dos puntos + acotación entre paréntesis + diálogo.' },
        { options: [
          { id: 'a', text: 'ABUELA: (bajito, sin dejar de tejer) Este hilo rojo es para tu güipil.' },
          { id: 'b', text: 'La abuela, bajito: "Este hilo rojo es para tu güipil".', feedback: 'Falta el nombre en mayúsculas y la acotación entre paréntesis; las comillas no se usan en el guion.' },
          { id: 'c', text: 'ABUELA: bajito sin dejar de tejer este hilo rojo es para tu güipil.', feedback: 'La acotación se mezcló con el diálogo: el actor diría "bajito sin dejar de tejer" en voz alta.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer', prompt: 'Ordena las partes de la primera página de un guion, de arriba hacia abajo.',
          explain: 'Título → personajes → acto y escena → acotación inicial → diálogos.' },
        { labels: { start: 'Arriba', end: 'Abajo' }, items: [
          { id: 'g1', text: 'La tormenta en el cafetal' },
          { id: 'g2', text: 'Personajes: DON TOMÁS, caficultor. ANA, su hija. EL TRUENO.' },
          { id: 'g3', text: 'Acto I – Escena 1' },
          { id: 'g4', text: '(Un cafetal en la montaña. Nubes negras en el cielo.)' },
          { id: 'g5', text: 'DON TOMÁS: (mira al cielo) Ana, hay que cubrir los costales.' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer',
          prompt: 'Pasa este fragmento a **formato de guion**, con título, lista de personajes, escena, acotación inicial, nombres en mayúsculas y acotaciones:\n\n"_Era la hora del recreo. Sofía mostró a Daniel un mensaje anónimo que afirmaba que todos los cuerpos cambian a la misma edad. Daniel abrió el libro de Ciencias y propuso comprobar el dato con la maestra._"' },
        { minWords: 35, placeholder: 'Título\nPersonajes: …\nEscena 1\n(…)\nMARCOS: (…) …\nLUISA: (…) …',
          model: 'Comprobemos antes de compartir\nPersonajes: SOFÍA, curiosa. DANIEL, cuidadoso con la información.\nEscena 1\n(En el patio, Sofía muestra un papel.)\nSOFÍA: (preocupada) Aquí dice que todos cambiamos a la misma edad.\nDANIEL: (abre el libro de Ciencias) Cada cuerpo tiene su ritmo. Comprobemos el dato con la maestra antes de compartirlo.',
          rubric: [
            'Tiene título y lista de personajes',
            'Indiqué la escena y escribí una acotación inicial',
            'Los nombres van en mayúsculas seguidos de dos puntos',
            'Las acciones están entre paréntesis, no mezcladas con el diálogo',
            'No usé palabras de narrador como "dijo"',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: 'En un guion teatral, ¿cómo se escribe el nombre del personaje antes de su diálogo?' },
        { options: [
          { id: 'a', text: 'En mayúsculas y seguido de dos puntos' },
          { id: 'b', text: 'Entre paréntesis y en cursiva' },
          { id: 'c', text: 'Entre comillas al final del diálogo' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: 'Clasifica cada línea de un guion.' },
        { buckets: [
          { id: 'dia', label: 'Diálogo (se dice)', icon: 'MessageCircle', color: 'var(--area-l1)' },
          { id: 'aco', label: 'Acotación (se hace)', icon: 'Info', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: '¡Qué lindo amanecer!', bucket: 'dia' },
          { id: 'x2', text: '(Se estira y bosteza.)', bucket: 'aco' },
          { id: 'x3', text: '(Suena un trueno a lo lejos.)', bucket: 'aco' },
          { id: 'x4', text: 'Vamos, que ya empieza a llover.', bucket: 'dia' },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's04-l1-2',
    title: 'Juego de roles: ponerse en el lugar del otro',
    icon: 'Users',
    minutes: 13,
    gancho: '¿Alguna vez has jugado a ser vendedor, maestra o doctor? Sin saberlo, ya hacías teatro.',
    objetivos: [
      "Improvisar un juego de roles que escucha, acepta y responde con respeto",
    ],
    resumen: [
      'El juego dramático es una forma sencilla de empezar a hacer teatro: se juega a ser otra persona, sin necesidad de escenario ni guion completo.',
      'En el juego de roles cada participante representa un papel en una situación (vendedor y comprador, vecinos, autoridades) y actúa como lo haría esa persona.',
      'Reglas: escuchar al compañero, aceptar lo que propone y agregar algo ("sí, y además…"), mantenerse en el personaje y respetar a todos.',
      'El juego de roles ayuda a ensayar situaciones reales y a entender cómo piensan y sienten otras personas.',
    ],
    media: {
      id: 's04-l1-2-roles', kind: 'video', title: 'Juego de roles en el mercado', aspect: '16:9', duration: 55,
      alt: 'Dos estudiantes improvisan una escena entre una vendedora y un comprador en un mercado hecho con pupitres; el resto del grupo observa.',
      brief: 'Video de 55 s en un aula. Con pupitres y canastos se arma un "mercado". Una niña hace de vendedora de frutas y un niño de comprador que quiere regatear. Improvisan con respeto y humor: él pide rebaja, ella le ofrece una ñapa (fruta de regalo) si compra más. En pantalla aparecen tres rótulos en momentos clave: "Escucha", "Acepta y agrega", "Mantente en tu personaje". El grupo aplaude al final. Sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:5.1.8'], title: 'Idea central', prompt: 'Un juego de roles permite ensayar cómo pedir información confiable y escuchar sin burlas.' },
        { icon: 'BookOpenCheck', body: "El juego dramático es una forma sencilla de empezar a hacer teatro: se juega a ser otra persona, sin necesidad de escenario ni guion completo." },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'conocer',
          prompt: 'En un juego de roles, tu compañera hace de vendedora y dice: **"¡Aguacates frescos, a cinco quetzales!"**. Tú eres el comprador. ¿Qué respuesta **mantiene vivo** el juego?',
          hint: 'Elige la respuesta que acepta la situación y permite que el diálogo continúe.',
          explain: 'La primera respuesta acepta la situación y agrega algo nuevo (la duda sobre el precio). Así la escena avanza. Hoy aprenderás cómo funciona el juego de roles.' },
        { options: [
          { id: 'a', text: '"¡Buenos días, seño! ¿Y si le compro tres, me los deja a doce?"', icon: 'MessageCircle' },
          { id: 'b', text: '"No quiero jugar a esto."', icon: 'X', feedback: 'Así el juego se acaba antes de empezar.' },
          { id: 'c', text: '"Yo no soy comprador, soy astronauta."', icon: 'Rocket', feedback: 'Cambiar de personaje sin razón rompe la escena: la compañera no sabe cómo seguir.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'conocer', title: 'El juego dramático',
          prompt: 'El **juego dramático** es la puerta de entrada al teatro. Toca cada tarjeta.' },
        { icon: 'Drama', body: 'En el juego dramático no importa tener un escenario perfecto: importa **imaginar**, **representar** y **comunicarse**.', reveal: [
          { icon: 'Users', front: 'Juego de roles', back: 'Cada quien representa un **papel** en una situación: vecinos que resuelven un problema, una entrevista, una visita al centro de salud. Se actúa como lo haría esa persona.' },
          { icon: 'Sparkles', front: 'Improvisación', back: 'Se inventan los diálogos **en el momento**, sin guion escrito. Solo se acuerda la situación y los personajes.' },
          { icon: 'Heart', front: 'Para qué sirve', back: 'Para **ensayar** situaciones reales (pedir ayuda, resolver un conflicto) y **ponerse en el lugar del otro**: entender qué piensa y siente.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'convivir', title: 'Las cuatro reglas del juego de roles',
          prompt: 'Para que el juego funcione, todos siguen estas reglas. Toca cada tarjeta.' },
        { icon: 'ListChecks', body: 'Las reglas hacen que el juego sea **seguro y divertido** para todos.', reveal: [
          { icon: 'Ear', front: '1. Escucha', back: 'Pon atención a lo que dice tu compañero: tu respuesta depende de eso.' },
          { icon: 'Plus', front: '2. Acepta y agrega', back: 'No niegues lo que el otro propone: acéptalo y **agrega** algo nuevo. Es la regla del "**sí, y además…**".' },
          { icon: 'User', front: '3. Mantente en tu personaje', back: 'Habla y muévete como lo haría tu personaje hasta que termine la escena.' },
          { icon: 'HeartHandshake', front: '4. Respeta', back: 'Nada de burlas hacia personas reales, grupos o culturas. Se representa un **papel**, no se ridiculiza a nadie.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer', title: 'Ejemplo resuelto: "sí, y además…"',
          prompt: 'Mira cómo avanza una improvisación cuando cada quien acepta y agrega.' },
        { icon: 'MessagesSquare', problem: 'Situación: dos vecinos encuentran un perro perdido en la calle. Personajes: DOÑA ELENA y JOSUÉ.',
          steps: [
            { text: 'DOÑA ELENA: "¡Mira, Josué! Este perrito anda solo y tiene collar."' },
            { text: 'JOSUÉ **acepta y agrega**: "Sí, y además el collar tiene una plaquita con un número de teléfono."', why: 'Acepta lo que propuso Elena y aporta una idea nueva que hace avanzar la historia.' },
            { text: 'DOÑA ELENA **acepta y agrega**: "Entonces llamemos. Y mientras, démosle agua, que se ve cansado."' },
            { text: 'Si Josué hubiera dicho "No, no tiene collar", la escena se habría trabado.', why: 'Negar lo que el otro propone deja a tu compañero sin camino.' },
          ],
          answer: 'Cada intervención acepta lo anterior y agrega algo: la historia fluye y los personajes resuelven la situación juntos.',
          tip: '"Sí, y además…" es la frase mágica de la improvisación.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer',
          prompt: 'Ahora tú. Situación: dos estudiantes ven que el chorro de la escuela está goteando. MARÍA dice: **"¡Se está desperdiciando el agua!"** ¿Qué respuesta sigue la regla "sí, y además"?',
          explain: 'La respuesta correcta acepta el problema y propone una acción: la escena avanza.' },
        { options: [
          { id: 'a', text: '"Sí, y además se va a inundar el pasillo. Vamos a avisarle al director."' },
          { id: 'b', text: '"No está goteando, estás viendo mal."', feedback: 'Niega lo que propuso María: la escena se traba.' },
          { id: 'c', text: '(Se queda callado y se va.)', feedback: 'Abandonar la escena deja sola a tu compañera.' },
        ], correct: ['a'] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['l1', 'fc'], cnb: ['l1:5.1.8'], ambito: 'convivir',
          prompt: 'Durante un juego de roles, a Byron le toca hacer de abuelo. Algunos compañeros le piden que imite de forma burlona la manera de hablar de un señor real de la comunidad. ¿Qué harías tú?' },
        { scene: { icon: 'Users', text: 'Todos se ríen y esperan que Byron haga la imitación. El señor es muy conocido en la aldea.' },
          options: [
            { id: 'a', icon: 'HeartHandshake', text: 'Hacer un abuelo inventado, sabio y divertido, sin imitar a nadie real', consequence: 'La escena es graciosa y nadie sale herido. El grupo aprende que el humor no necesita burlarse de nadie.', values: ['respeto', 'creatividad'], constructive: true },
            { id: 'b', icon: 'Megaphone', text: 'Hacer la imitación porque todos se están riendo', consequence: 'El grupo se ríe un momento, pero si el señor o su familia se enteran, se sentirán ofendidos. Se rompió la regla del respeto.', values: ['presión del grupo'], constructive: false },
            { id: 'c', icon: 'MessageCircle', text: 'Decir con calma: "Mejor hagamos un personaje inventado; burlarse de alguien real no es justo"', consequence: 'Algunos se quejan al principio, pero la maestra y varios compañeros te apoyan. La escena sigue con respeto.', values: ['valentía', 'respeto'], constructive: true },
          ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer',
          prompt: 'Prepara un **juego de roles** sobre una persona joven que busca información confiable acerca de un cambio de la pubertad. Escribe la situación, dos personajes respetuosos y las tres primeras líneas usando "sí, y además…". No inventes diagnósticos.' },
        { minWords: 30, placeholder: 'Situación: …\nPersonajes: …\nLínea 1: …\nLínea 2: …\nLínea 3: …',
          model: 'Situación: una estudiante pregunta dónde aclarar una duda sobre su crecimiento.\nPersonajes: ESTUDIANTE, curiosa. TÍA, escucha con calma.\nESTUDIANTE: Me preocupa crecer a un ritmo distinto que mis amigas.\nTÍA: Sí, y además es común que cada cuerpo cambie a su ritmo. Podemos revisar tu libro de Ciencias.\nESTUDIANTE: Gracias, y además quisiera anotar mis preguntas para hablar con una profesional de salud.',
          rubric: [
            'Describí una situación clara',
            'Cada personaje tiene una característica',
            'Las líneas aceptan lo anterior y agregan algo nuevo',
            'La escena es respetuosa con todas las personas',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: '¿Qué es un **juego de roles**?' },
        { options: [
          { id: 'a', text: 'Representar un papel en una situación, actuando como lo haría esa persona' },
          { id: 'b', text: 'Leer en silencio un guion completo' },
          { id: 'c', text: 'Mover muñecos con hilos' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En la improvisación los diálogos se inventan en el momento.', answer: true },
          { text: 'La regla "sí, y además" consiste en negar lo que propone tu compañero.', answer: false, why: 'Consiste en aceptar lo que propone y agregar algo nuevo.' },
          { text: 'Mantenerse en el personaje ayuda a que la escena sea creíble.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 3 ─────────────────────────────
  lesson({
    id: 's04-l1-3',
    title: 'La pantomima: contar sin palabras',
    icon: 'Hand',
    minutes: 13,
    gancho: '¿Podrías contar que estás tortillando, que se te quemó una tortilla y que te soplaste los dedos… sin decir una sola palabra?',
    objetivos: [
      "Comunicar una historia completa mediante las técnicas de la pantomima",
    ],
    resumen: [
      'La pantomima (o mímica) es una representación sin palabras: todo se comunica con gestos, movimientos y expresiones del rostro.',
      'Técnicas: movimientos claros y un poco exagerados, objetos imaginarios que mantienen su forma y su peso, y una cara que muestra lo que siente el personaje.',
      'Una buena pantomima cuenta una historia: inicio (qué hace el personaje), problema (algo inesperado) y final (cómo se resuelve).',
    ],
    media: {
      id: 's04-l1-3-mimo', kind: 'video', title: 'Tortillas imaginarias', aspect: '16:9', duration: 45,
      alt: 'Una joven actriz, sin objetos reales, hace como que tortea masa, pone la tortilla en un comal imaginario, se quema los dedos y los sopla; al final sonríe y "come" la tortilla.',
      brief: 'Video de 45 s sobre fondo liso. Una joven con ropa neutra (sin maquillaje de payaso para evitar miedo) representa sin palabras: toma una bolita de masa imaginaria, la palmea con ritmo, la coloca en un comal imaginario (mantiene siempre la misma altura y tamaño), se quema los dedos, los sopla con cara exagerada, voltea la tortilla y la come feliz. Cámara fija de cuerpo entero. Sin música durante la acción; al final, texto "¿Qué objetos imaginarios viste?".',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:5.1.8'], title: 'Idea central', prompt: 'La pantomima puede mostrar cuidado y apoyo sin usar palabras: los gestos deben contar una historia.' },
        { icon: 'BookOpenCheck', body: "La pantomima (o mímica) es una representación sin palabras: todo se comunica con gestos, movimientos y expresiones del rostro." },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'conocer',
          prompt: 'Mira el video. La actriz **no dijo nada** y no tenía objetos reales. ¿Qué historia contó?',
          explain: 'Con gestos claros y objetos imaginarios contó una historia completa. Eso es una **pantomima**.' },
        { options: [
          { id: 'a', text: 'Que hacía tortillas, se quemó los dedos y al final se comió una', icon: 'Utensils' },
          { id: 'b', text: 'Que estaba aplaudiendo en un concierto', icon: 'Music', feedback: 'El palmeo tenía un ritmo parecido, pero fíjate en el comal y en cómo se sopló los dedos.' },
          { id: 'c', text: 'No se puede saber sin palabras', icon: 'HelpCircle', feedback: 'Sí se puede: los gestos, bien hechos, cuentan historias.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'conocer', title: 'Las técnicas de la pantomima',
          prompt: 'La **pantomima** es teatro sin palabras. Parece fácil, pero tiene técnica. Toca cada tarjeta.' },
        { icon: 'Hand', body: 'En la pantomima, **el cuerpo es el único lenguaje**. Por eso cada movimiento debe ser claro.', reveal: [
          { icon: 'Maximize2', front: 'Gestos claros y grandes', back: 'Los movimientos se hacen **un poco exagerados** y **despacio**, para que todo el público los vea y los entienda.' },
          { icon: 'Box', front: 'Objetos imaginarios', back: 'Si tomas una olla imaginaria, tus manos deben mantener **su forma y su tamaño**. Si es pesada, tu cuerpo se inclina. Si la sueltas, ya no está.' },
          { icon: 'Smile', front: 'El rostro', back: 'La cara muestra lo que siente el personaje: sorpresa, dolor, alegría, miedo. **Exagera** un poco la expresión.' },
          { icon: 'Route', front: 'Una historia', back: 'Inicio (qué hace el personaje), problema (algo inesperado) y final (cómo termina). Sin historia, solo son gestos sueltos.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer', prompt: 'Une cada acción con la forma de representarla en pantomima.',
          hint: 'Imagina que tienes el objeto en las manos: ¿cómo se mueve tu cuerpo?',
          explain: 'Para que el público "vea" un objeto imaginario, el cuerpo debe mostrar su forma, su peso y cómo se usa.' },
        { leftTitle: 'Acción', rightTitle: 'Cómo se representa', pairs: [
          { id: 'p1', left: 'Cargar un costal pesado', right: 'Doblar las rodillas, inclinarse y caminar despacio con esfuerzo' },
          { id: 'p2', left: 'Beber algo muy caliente', right: 'Soplar, tomar un sorbito y hacer cara de "¡quema!"' },
          { id: 'p3', left: 'Abrir una puerta', right: 'Tomar una manija invisible, girarla y empujar' },
          { id: 'p4', left: 'Sentir frío', right: 'Abrazarse, frotar los brazos y temblar' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer', title: 'Ejemplo resuelto: planificar una pantomima',
          prompt: 'Mira cómo Diego planifica una pantomima de 30 segundos.' },
        { icon: 'ClipboardList', problem: 'Tema: "Un día en la milpa". Diego debe contarlo sin palabras.',
          steps: [
            { text: '**Inicio**: sale de su casa, se estira, toma un azadón imaginario (cuida que siempre tenga el mismo largo) y camina hacia la milpa.' },
            { text: '**Problema**: mientras trabaja, mira al cielo, pone la mano en la frente… ¡empieza a llover! Se cubre la cabeza.', why: 'El problema da interés a la historia: algo inesperado pasa.' },
            { text: '**Final**: corre a guardarse bajo un árbol, sonríe, extiende la mano para sentir la lluvia y mira feliz la milpa: la lluvia es buena para el maíz.' },
            { text: 'Anota **tres expresiones** del rostro: cansancio, sorpresa y alegría.' },
          ],
          answer: 'Una pantomima con inicio, problema y final, con un objeto imaginario constante y tres emociones claras.',
          tip: 'Ensaya frente a alguien: si adivina la historia sin que expliques nada, ¡lo lograste!' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer',
          prompt: 'Ahora tú. En su pantomima, Sara "toma" un balde imaginario lleno de agua, pero lo levanta con un dedo y lo mueve rapidísimo. ¿Qué técnica olvidó?',
          hint: 'Piensa en cómo cargarías de verdad un balde lleno.',
          explain: 'Los objetos imaginarios deben mostrar su peso: un balde lleno se carga con esfuerzo, con las dos manos o con el cuerpo inclinado.' },
        { options: [
          { id: 'a', text: 'Mostrar el peso del objeto imaginario' },
          { id: 'b', text: 'Usar palabras para explicar', feedback: 'En la pantomima no se usan palabras.' },
          { id: 'c', text: 'Ponerse un vestuario', feedback: 'El vestuario no es el problema: lo es cómo mueve el balde.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer', prompt: 'Ordena esta pantomima para que tenga sentido: "El barrilete rebelde".',
          explain: 'Inicio (prepara y eleva el barrilete), problema (se enreda) y final (lo recupera).' },
        { labels: { start: 'Inicio', end: 'Final' }, items: [
          { id: 'b1', text: 'Sostiene un barrilete imaginario y corre para elevarlo' },
          { id: 'b2', text: 'Suelta hilo feliz, mirando cada vez más arriba' },
          { id: 'b3', text: 'El barrilete se enreda en un árbol: tira del hilo con cara de preocupación' },
          { id: 'b4', text: 'Sube al árbol con cuidado, lo desenreda y lo abraza sonriendo' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer',
          prompt: 'Planifica una **pantomima** de 30 segundos: una persona recibe una burla sobre su crecimiento, busca apoyo y otra persona la escucha. Escribe inicio, problema, final, un objeto imaginario y tres emociones. No imites ni ridiculices a una persona real.' },
        { minWords: 30, placeholder: 'Tema: …\nInicio: …\nProblema: …\nFinal: …\nObjeto imaginario: …\nEmociones: …',
          model: 'Tema: Buscar apoyo.\nInicio: leo un mensaje imaginario en una tableta y sonrío.\nProblema: aparece una burla; bajo la mirada y cierro la tableta con tristeza.\nFinal: me acerco a una docente, le muestro el mensaje y ella escucha; respiro con alivio.\nObjeto imaginario: la tableta, siempre del mismo tamaño.\nEmociones: alegría, tristeza, alivio.',
          rubric: [
            'Mi pantomima tiene inicio, problema y final',
            'Elegí un objeto imaginario y pensé en su forma y peso',
            'Anoté tres emociones que mostraré con el rostro',
            'La presenté y alguien adivinó la historia',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: '¿Qué forma de juego dramático se actúa **sin palabras**, solo con gestos y movimientos?' },
        { options: [
          { id: 'a', text: 'La pantomima' },
          { id: 'b', text: 'El juego de roles' },
          { id: 'c', text: 'La lectura dramatizada' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En la pantomima conviene hacer los movimientos un poco exagerados y despacio.', answer: true },
          { text: 'Un objeto imaginario puede cambiar de tamaño cuando uno quiera.', answer: false, why: 'Debe mantener su forma y tamaño para que el público lo "vea".' },
          { text: 'Una pantomima también cuenta una historia con inicio, problema y final.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 4 ─────────────────────────────
  lesson({
    id: 's04-l1-4',
    title: 'Títeres y marionetas',
    icon: 'Smile',
    minutes: 14,
    gancho: 'Con un calcetín viejo y dos botones puedes crear un personaje que hable, cante y haga reír. ¿Cómo es posible?',
    objetivos: [
      "Distinguir y manejar títeres y marionetas para comunicar un mensaje",
    ],
    resumen: [
      'Títeres de guante (o guiñol): se meten en la mano como un guante; con los dedos se mueven la cabeza y los brazos.',
      'Títeres de dedo: pequeños, uno en cada dedo. Títeres de varilla: se mueven con palitos desde abajo. Títeres de sombra: siluetas que se proyectan con luz sobre una tela.',
      'Marionetas: muñecos que se mueven desde arriba con hilos atados a una cruceta.',
      'Para manejar un títere: el muñeco mira al público, mueve la boca solo cuando habla y se mantiene a la misma altura, como si caminara sobre un piso.',
    ],
    media: {
      id: 's04-l1-4-titeres', kind: 'image', title: 'Familia de títeres', aspect: '16:9',
      alt: 'Cinco tipos de muñecos teatrales rotulados: títere de guante hecho con calcetín, títeres de dedo, títere de varilla, silueta de sombra detrás de una tela iluminada y una marioneta con hilos.',
      brief: 'Ilustración en cinco paneles en fila: (1) títere de guante hecho con calcetín, botones y lana, con la mano visible dentro; (2) cuatro títeres de dedo de papel (quetzal, jaguar, niña, abuelo); (3) títere de varilla de cartón con palitos de bambú; (4) una tela blanca iluminada por una linterna, con la silueta de un venado en sombra; (5) marioneta de madera con hilos atados a una cruceta sostenida desde arriba. Rótulos grandes bajo cada panel. Materiales reciclados, colores alegres.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:5.1.8'], title: 'Idea central', prompt: 'Un títere puede comunicar una duda con respeto si se maneja con técnica y una voz clara.' },
        { icon: 'BookOpenCheck', body: "Títeres de guante (o guiñol): se meten en la mano como un guante; con los dedos se mueven la cabeza y los brazos." },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'conocer',
          prompt: 'Observa la imagen. ¿Qué diferencia hay entre el títere de calcetín y la marioneta?',
          explain: 'El títere de guante se mueve con la mano **desde abajo, por dentro**; la marioneta se mueve **desde arriba, con hilos**. Hoy conocerás todos los tipos.' },
        { options: [
          { id: 'a', text: 'El títere de calcetín se mueve con la mano por dentro; la marioneta, desde arriba con hilos', icon: 'Hand' },
          { id: 'b', text: 'Ninguna: son exactamente lo mismo', icon: 'Copy', feedback: 'Mira de dónde sale la mano o los hilos en cada uno.' },
          { id: 'c', text: 'La marioneta solo se usa en el cine', icon: 'Film', feedback: 'Las marionetas se usan en el teatro desde hace muchísimos años.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'conocer', title: 'Tipos de títeres',
          prompt: 'Los **títeres** son muñecos que cobran vida gracias a una persona llamada **titiritero** o **titiritera**. Toca cada tarjeta.' },
        { icon: 'Smile', body: 'El teatro de títeres existe en muchas culturas del mundo desde hace siglos. Se presenta en un **teatrino**: un pequeño escenario detrás del cual se esconden quienes manejan los muñecos.', reveal: [
          { icon: 'Hand', front: 'De guante (guiñol)', back: 'Se meten en la mano **como un guante**. Un dedo mueve la cabeza y otros dos los brazos. Los de calcetín abren y cierran la boca.' },
          { icon: 'PenTool', front: 'De dedo', back: '**Pequeños**, uno por dedo. Ideales para historias con muchos personajes y poco espacio.' },
          { icon: 'Ruler', front: 'De varilla', back: 'Se sostienen y mueven con **palitos o varillas desde abajo**. Pueden mover brazos con varillas extra.' },
          { icon: 'Sun', front: 'De sombra', back: 'Siluetas recortadas que se colocan entre una **luz** y una **tela o papel**: el público ve la sombra.' },
          { icon: 'Link', front: 'Marionetas', back: 'Muñecos que se mueven **desde arriba con hilos** atados a una cruz de madera (cruceta). Son las más difíciles de manejar.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer', prompt: 'Clasifica cada descripción según el tipo de muñeco.',
          hint: 'Pregunta clave: ¿desde dónde se mueve? ¿Por dentro, desde abajo con palitos, desde arriba con hilos, o con luz?',
          explain: 'La forma de moverlo define el tipo: guante (por dentro), varilla (desde abajo), marioneta (desde arriba), sombra (con luz).' },
        { buckets: [
          { id: 'gua', label: 'Títere de guante', icon: 'Hand', color: 'var(--area-l1)' },
          { id: 'var', label: 'Títere de varilla', icon: 'Ruler', color: 'var(--c-ok)' },
          { id: 'mar', label: 'Marioneta', icon: 'Link', color: 'var(--c-maiz-strong)' },
          { id: 'som', label: 'Títere de sombra', icon: 'Sun', color: 'var(--area-art)' },
        ], items: [
          { id: 's1', text: 'Un calcetín con botones de ojos que abre la boca', bucket: 'gua' },
          { id: 's2', text: 'Un jaguar de cartón pegado a un palito de bambú', bucket: 'var' },
          { id: 's3', text: 'Un muñeco de madera colgado de cinco hilos', bucket: 'mar' },
          { id: 's4', text: 'La silueta de un venado detrás de una sábana iluminada', bucket: 'som' },
          { id: 's5', text: 'Un muñeco de tela en el que metes toda la mano', bucket: 'gua' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer', title: 'Cómo dar vida a un títere',
          prompt: 'Un títere mal manejado parece un trapo; uno bien manejado parece vivo. Toca cada tarjeta.' },
        { icon: 'Sparkles', body: 'El secreto está en que **el público olvide la mano** y solo vea al personaje.', reveal: [
          { icon: 'Eye', front: 'Mira al público', back: 'El títere debe mirar hacia el público (o hacia el personaje con quien habla), no al techo.' },
          { icon: 'MessageCircle', front: 'Boca con las sílabas', back: 'Abre la boca del títere **una vez por sílaba** mientras habla. Cuando otro habla, el tuyo se queda quieto y escucha.' },
          { icon: 'Minus', front: 'Altura constante', back: 'Mantén el títere a la **misma altura**, como si caminara sobre un piso invisible. Si baja y sube sin razón, parece que se hunde.' },
          { icon: 'Volume2', front: 'Una voz propia', back: 'Dale a cada títere una **voz diferente** (más aguda, más grave, más lenta) y úsala siempre igual.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer',
          prompt: 'Mientras el títere de la abuela habla, el títere del niño **mueve la boca sin parar**. ¿Qué problema causa?',
          explain: 'El público no sabe quién está hablando. Solo mueve la boca el títere que habla; los demás se quedan quietos y "escuchan".' },
        { options: [
          { id: 'a', text: 'El público no sabe cuál de los dos está hablando' },
          { id: 'b', text: 'Ninguno: se ve más divertido', feedback: 'Puede ser gracioso un momento, pero confunde al público.' },
          { id: 'c', text: 'Que el títere se rompe', feedback: 'El problema no es del material, sino de la comunicación.' },
        ], correct: ['a'] },
      ),
      S.ejemplo(
        { fase: 'aplicar', areas: ['l1', 'art'], cnb: ['l1:5.1.9'], ambito: 'hacer', title: 'Actividad en casa: tu títere de calcetín',
          prompt: 'Sigue los pasos para hacer tu propio títere. Materiales: un calcetín viejo, dos botones o tapitas, lana o tiras de tela, un pedazo de cartón y pegamento (o hilo y aguja con ayuda de un adulto).' },
        { icon: 'Scissors', problem: 'Hacer un títere de guante que abra y cierre la boca.',
          steps: [
            { text: 'Mete la mano en el calcetín: los cuatro dedos arriba y el pulgar abajo. Empuja la punta del calcetín hacia adentro para formar la **boca**.' },
            { text: 'Recorta un óvalo de cartón, dóblalo a la mitad y pégalo dentro de la boca para que sea firme.', why: 'El cartón hace que la boca se abra y cierre con claridad.' },
            { text: 'Pega o cose los **ojos** (botones o tapitas) arriba de la boca.' },
            { text: 'Agrega **pelo** con lana y detalles con tela: un sombrero, un rebozo, orejas de animal.' },
            { text: 'Ponle un **nombre** y elige su **voz**.' },
          ],
          answer: '¡Listo! Tu títere de guante tiene boca, ojos, pelo, nombre y voz propia.',
          tip: 'Si usas aguja o tijeras, pide ayuda a un adulto. Los materiales reciclados funcionan igual de bien.' },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer',
          prompt: 'Presenta a tu títere de la campaña: escribe cómo se llama, qué tipo es, cómo es su voz y una línea de diálogo respetuosa que recomiende comprobar información o pedir apoyo.' },
        { minWords: 20, placeholder: 'Nombre: …\nTipo: …\nVoz: …\nDiálogo: NOMBRE: (…) …',
          model: 'Nombre: Clara\nTipo: títere de guante hecho con un calcetín\nVoz: cálida y pausada\nDiálogo: CLARA: (muestra un libro al público) Antes de repetir un rumor sobre el cuerpo, comprobemos la información con una fuente confiable.',
          rubric: [
            'Dije el nombre y el tipo de títere',
            'Describí cómo es su voz',
            'Escribí una línea con formato de guion y una acotación',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: 'Un muñeco que se mueve **desde arriba con hilos** es…' },
        { options: [
          { id: 'a', text: 'Una marioneta' },
          { id: 'b', text: 'Un títere de guante' },
          { id: 'c', text: 'Un títere de sombra' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: 'Al manejar un títere, ¿cuándo debe moverse su boca?' },
        { options: [
          { id: 'a', text: 'Solo cuando ese personaje habla, una vez por sílaba' },
          { id: 'b', text: 'Todo el tiempo, para que parezca vivo' },
          { id: 'c', text: 'Nunca' },
        ], correct: ['a'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 5 ─────────────────────────────
  lesson({
    id: 's04-l1-5',
    title: 'Recursos para escenificar: máscaras, vestuario, decorado y sonido',
    icon: 'Palette',
    minutes: 15,
    gancho: 'Con una luz tranquila, un libro de utilería y un sonido breve, el público puede reconocer un lugar de escucha y cuidado. ¿Cómo lo logra el teatro?',
    objetivos: [
      "Elegir recursos de escenificación que apoyen una escena sin distraer",
    ],
    resumen: [
      'Recursos que caracterizan al personaje: vestuario, maquillaje, máscaras y utilería personal (un bastón, un canasto). Ayudan a saber quién es, su edad y su carácter.',
      'Recursos que crean el ambiente: decorado o escenografía (el lugar), iluminación (el momento del día o la emoción) y efectos de sonido (lluvia, viento, pasos).',
      'Los efectos de sonido se pueden hacer con objetos: semillas en un bote suenan a lluvia; sacudir una lámina, a trueno; dos medios cocos, a caballo.',
      'Los recursos se eligen según lo que pide la escena: deben ayudar a contar la historia, no distraer.',
    ],
    media: {
      id: 's04-l1-5-teatrino', kind: 'video', title: 'Crecer con cuidado en el teatrino', aspect: '16:9', duration: 75,
      alt: 'Dos títeres representan a una estudiante que tiene una duda y a una persona adulta que escucha y muestra un libro de Ciencias.',
      brief: 'Video de 75 s de un teatrino de cartón con fondo de biblioteca escolar. Dos títeres de guante representan a una estudiante con una duda y a una persona adulta que escucha sin juzgar y muestra un libro de Ciencias. Una campanilla suave marca el inicio, una tarjeta grande dice “Fuente confiable” y una luz cálida ilumina el diálogo. Al final se muestran los recursos detrás del teatrino. No representar cambios corporales ni usar disfraces que caricaturicen profesiones o identidades.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:5.1.9'], title: 'Idea central', prompt: 'La campaña necesita recursos de escena que aclaren el mensaje sin exponer ni caricaturizar a nadie.' },
        { icon: 'BookOpenCheck', body: "Recursos que caracterizan al personaje: vestuario, maquillaje, máscaras y utilería personal (un bastón, un canasto). Ayudan a saber quién es, su edad y su carácter." },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.9'], ambito: 'conocer',
          prompt: 'Mira el video. ¿Qué recursos hacen que la escena parezca un espacio tranquilo para escuchar y comprobar información?',
          explain: 'El fondo de biblioteca, la luz cálida, la campanilla y el libro de utilería construyen el ambiente y apoyan la acción.' },
        { options: [
          { id: 'a', text: 'El fondo de biblioteca, la luz cálida, la campanilla y el libro', icon: 'BookOpenCheck' },
          { id: 'b', text: 'Solo los diálogos', icon: 'MessageCircle', feedback: 'Los diálogos cuentan la historia, pero el ambiente lo crean otros recursos.' },
          { id: 'c', text: 'Que lo filmaron en un centro de salud verdadero', icon: 'Camera', feedback: 'Fue en un teatrino de cartón: el ambiente se creó con recursos sencillos.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.9'], ambito: 'conocer', title: 'Recursos que caracterizan al personaje',
          prompt: 'Algunos recursos ayudan a saber **quién es** cada personaje. Toca cada tarjeta.' },
        { icon: 'Shirt', body: 'Al ver a un personaje, el público debe entender rápido su edad, su oficio, su carácter o si es humano, animal o ser mágico.', reveal: [
          { icon: 'Shirt', front: 'Vestuario', back: 'La ropa del personaje: un delantal para la vendedora, un sombrero y un morral para el agricultor, un rebozo para la abuela.' },
          { icon: 'Brush', front: 'Maquillaje', back: 'Cambia el rostro: arrugas para parecer mayor, manchas para un jaguar, mejillas rojas para mostrar frío. Usa pinturas lavables y seguras para la piel.' },
          { icon: 'Drama', front: 'Máscaras', back: 'Cubren el rostro y transforman al actor en otro ser. En Guatemala hay una gran tradición de **máscaras de madera** para danzas como la del Venado.' },
          { icon: 'Hand', front: 'Títeres', back: 'Otra forma de dar vida a un personaje: el muñeco **es** el personaje.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.9'], ambito: 'conocer', title: 'Recursos que crean el ambiente',
          prompt: 'Otros recursos ayudan a saber **dónde y cuándo** ocurre la escena, y qué se siente. Toca cada tarjeta.' },
        { icon: 'Mountain', body: 'El **ambiente** transporta al público a otro lugar sin moverse de su asiento.', reveal: [
          { icon: 'Image', front: 'Decorado (escenografía)', back: 'Representa el **lugar**: un fondo pintado con volcanes, un petate y una olla para una cocina, pupitres para una escuela.' },
          { icon: 'Lightbulb', front: 'Iluminación', back: 'Indica el **momento** (luz naranja = amanecer; luz tenue = noche) y la **emoción** (luz fuerte = alegría; penumbra = misterio). Con linternas y papel de colores se logra mucho.' },
          { icon: 'Volume2', front: 'Efectos de sonido', back: 'Semillas en un bote = **lluvia**. Sacudir una lámina = **trueno**. Dos medios cocos = **caballo**. Soplar por un tubo = **viento**.' },
          { icon: 'Music', front: 'Música', back: 'Una melodía de marimba, una flauta o un tambor pueden marcar el inicio, un cambio de escena o una emoción.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.1.9'], ambito: 'hacer', prompt: 'Organiza los recursos de escenificación para la obra de títeres "Crecer con cuidado".',
          hint: '¿Este recurso cambia al personaje, o cambia el lugar y el ambiente?',
          explain: 'Unos recursos transforman al personaje y otros transforman el espacio. Los dos son necesarios para que el público "entre" en la historia.',
          media: {
            id: 's04-l1-5-mesa', kind: 'image', title: 'Detrás del teatrino', aspect: '4:3',
            alt: 'Mesa con dos títeres, un libro de cartón, un gafete, un fondo de biblioteca, una campanilla y una linterna con papel amarillo.',
            brief: 'Fotografía o ilustración cenital de una mesa escolar con materiales reciclados: dos títeres de calcetín, un libro de cartón, un gafete sencillo, un fondo pintado como biblioteca, una tarjeta “Fuente confiable”, una campanilla y una linterna con papel amarillo. Cada objeto tiene una etiqueta pequeña. Sin símbolos médicos engañosos ni marcas.',
          } },
        { buckets: [
          { id: 'per', label: 'Caracteriza al personaje', icon: 'User', color: 'var(--area-l1)' },
          { id: 'amb', label: 'Crea el ambiente', icon: 'Mountain', color: 'var(--area-art)' },
        ], items: [
          { id: 'r1', text: 'Libro que lleva quien comprueba el dato', bucket: 'per' },
          { id: 'r2', text: 'Gafete de la persona orientadora', bucket: 'per' },
          { id: 'r3', text: 'Mochila de la estudiante', bucket: 'per' },
          { id: 'r4', text: 'Fondo pintado como biblioteca', bucket: 'amb' },
          { id: 'r5', text: 'Campanilla suave al inicio', bucket: 'amb', feedback: 'Es un efecto de sonido que marca el inicio sin tapar las voces.' },
          { id: 'r6', text: 'Luz cálida y moderada para el diálogo', bucket: 'amb' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.9'], ambito: 'hacer', prompt: 'Une cada acotación del guion con el recurso que la hace posible.',
          explain: 'Las acotaciones del guion le dicen al equipo técnico qué recursos preparar.' },
        { leftTitle: 'Acotación', rightTitle: 'Recurso', pairs: [
          { id: 'a1', left: '(Suena una notificación.)', right: 'Dos golpecitos suaves en una campanilla' },
          { id: 'a2', left: '(La conversación se vuelve tranquila.)', right: 'Luz cálida de intensidad moderada' },
          { id: 'a3', left: '(La orientadora muestra dónde comprobó el dato.)', right: 'Libro de utilería con una marca visible' },
          { id: 'a4', left: '(Aparece el mensaje final.)', right: 'Tarjeta grande: “Pregunta y comprueba”' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.9', 'l1:5.1.8'], ambito: 'hacer',
          prompt: 'Lee este fragmento de la campaña y decide qué recursos necesita la escena.' },
        { genre: 'Guion para títeres', heading: 'Pregunta y comprueba (fragmento)', passage:
          '**Personajes:** ESTUDIANTE (títere con mochila). ORIENTADORA (títere con un libro).\n\n**Escena 1**\n\n_(Biblioteca escolar. Suena una notificación breve. Una luz cálida ilumina la mesa.)_\n\nESTUDIANTE: _(muestra una tarjeta, inquieta)_ Recibí un mensaje sobre los cambios del cuerpo. No dice quién lo escribió.\n\nORIENTADORA: _(escucha y abre el libro)_ Hiciste bien en preguntar antes de compartirlo. Busquemos una fuente confiable.\n\nESTUDIANTE: _(más tranquila)_ ¿Y si todavía tengo una pregunta personal?\n\nORIENTADORA: Puedes conversar con una persona adulta de confianza o un profesional de salud. _(Muestra la tarjeta “Pregunta y comprueba”.)_',
          questions: [
            { q: '¿Qué efecto de sonido se necesita **al inicio**?', options: [
              { id: 'a', text: 'Una notificación breve' },
              { id: 'b', text: 'Un caballo galopando' },
              { id: 'c', text: 'Un trueno fuerte' },
            ], correct: 'a', why: 'La acotación inicial indica una notificación breve.' },
            { q: '¿Qué recurso usa la orientadora para mostrar que comprueba el mensaje?', options: [
              { id: 'a', text: 'Un libro de utilería' },
              { id: 'b', text: 'Una máscara' },
              { id: 'c', text: 'Una capa' },
            ], correct: 'a', why: 'La acotación indica que abre el libro y busca una fuente.' },
            { q: '¿Qué tarjeta debe aparecer al final?', options: [
              { id: 'a', text: 'Pregunta y comprueba' },
              { id: 'b', text: 'Comparte de inmediato' },
              { id: 'c', text: 'Guarda todas tus dudas' },
            ], correct: 'a', why: 'La última acotación nombra esa tarjeta.' },
          ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.9'], ambito: 'hacer',
          prompt: 'Eres parte del equipo técnico de **"Crecer con cuidado"**. Haz una lista de recursos para la escena: dos que caractericen a los personajes sin estereotipos y dos que creen un ambiente tranquilo. Para cada uno, di con qué material sencillo lo harías.' },
        { minWords: 30, placeholder: 'Personajes:\n1. …\n2. …\nAmbiente:\n3. …\n4. …',
          model: 'Personajes:\n1. Libro para quien comprueba el dato: cartón doblado con una portada.\n2. Gafete de la orientadora: papel y lana, sin disfrazar ni caricaturizar.\nAmbiente:\n3. Música instrumental tranquila: palmas suaves o un audio a volumen moderado.\n4. Letrero “Escuchamos con respeto”: cartón reutilizado y marcadores.',
          rubric: [
            'Incluí dos recursos para los personajes',
            'Incluí dos recursos para el ambiente',
            'Para cada recurso dije un material sencillo',
            'Los recursos corresponden a lo que pide el guion',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.9'], prompt: 'Una campanilla que marca el inicio de la escena es…' },
        { options: [
          { id: 'a', text: 'Un efecto de sonido' },
          { id: 'b', text: 'Un vestuario' },
          { id: 'c', text: 'Un maquillaje' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.9'], prompt: 'Clasifica cada recurso.' },
        { buckets: [
          { id: 'per', label: 'Caracteriza al personaje', icon: 'User', color: 'var(--area-l1)' },
          { id: 'amb', label: 'Crea el ambiente', icon: 'Mountain', color: 'var(--area-art)' },
        ], items: [
          { id: 'z1', text: 'Libro que lleva la orientadora', bucket: 'per' },
          { id: 'z2', text: 'Luz cálida para una conversación tranquila', bucket: 'amb' },
          { id: 'z3', text: 'Mochila de la estudiante', bucket: 'per' },
          { id: 'z4', text: 'Fondo pintado como biblioteca', bucket: 'amb' },
        ] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l1'], cnb: [], ambito: 'ser', prompt: '¿Cómo te fue esta semana en el mundo del teatro?' },
        { statements: [
          'Escribo un guion con la tipografía correcta',
          'Participo en un juego de roles con respeto',
          'Cuento una historia con pantomima',
          'Distingo títeres, marionetas y recursos para escenificar',
        ], commitments: [
          'Terminaré mi títere de calcetín y le daré una voz',
          'Presentaré una pantomima o un juego de roles a mi familia',
          'Buscaré en mi casa objetos que sirvan para efectos de sonido',
        ] },
      ),
    ],
  }),
];
