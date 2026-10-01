/**
 * Comunicación y Lenguaje L1 · Unidad 1 · Semana 7
 * Hilo de la semana: investigar con rumbo. Continúa la mini-investigación planificada en la
 * semana 6: primero se transforma el tema en una pregunta de investigación y en preguntas clave;
 * después se eligen fuentes escritas y tecnológicas adecuadas, se evalúa si son confiables y se
 * aprende a buscar con palabras clave y a registrar cada fuente (base para la semana 8).
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's07-l1-1',
    title: 'Del tema a la pregunta de investigación',
    icon: 'HelpCircle',
    minutes: 13,
    gancho: '"Voy a investigar el agua." ¿Toda el agua del planeta? ¿La de los ríos? ¿La de tu casa? Un tema sin pregunta es un camino sin destino.',
    objetivos: [
      'Escribir una pregunta investigable y delimitada sobre el agua',
    ],
    resumen: [
      'El tema es el asunto general (el agua). La pregunta de investigación dice exactamente qué quieres averiguar.',
      'Delimitar es hacer el tema más pequeño y concreto: elegir un aspecto, un lugar y un tiempo.',
      'Las preguntas abiertas (¿cómo?, ¿por qué?, ¿de dónde?) permiten investigar; las cerradas se responden con sí o no.',
      'Una buena pregunta de investigación se puede responder buscando información, en el tiempo que tienes.',
    ],
    media: {
      id: 's07-l1-1-embudo', kind: 'diagram', title: 'El embudo de la pregunta', aspect: '3:4',
      alt: 'Un embudo pasa de "El agua" a "El agua de la escuela" y termina en la pregunta "¿De dónde viene el agua que llega a nuestra escuela?".',
      brief: 'Diagrama vertical de un embudo con tres franjas que se angostan. Texto exacto: arriba, "TEMA: El agua"; centro, "DELIMITO: el agua de la escuela, hoy"; abajo, "PREGUNTA: ¿De dónde viene el agua que llega a nuestra escuela?". A la derecha: "¿Qué aspecto?", "¿Dónde?", "¿Cuándo?". Fondo claro, letra grande, iconos descriptivos de gota, escuela y lupa; no usar círculos o cuadrados como objetos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.2'], title: 'Del tema a una pregunta posible',
          prompt: '“El agua” es un tema amplio. Una investigación escolar necesita una pregunta abierta que indique el aspecto, el lugar y un periodo o situación.' },
        { icon: 'MessageCircleQuestion', body: 'Una buena pregunta puede responderse con fuentes disponibles y no presupone la respuesta.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'conocer',
          prompt: 'Tienes **dos semanas** para investigar. ¿Cuál de estas opciones podrías responder mejor?',
          explain: 'La segunda es una pregunta concreta: dice qué (de dónde viene el agua), dónde (la escuela) y se puede averiguar preguntando y observando. "El agua" es un tema enorme.' },
        { options: [
          { id: 'a', text: 'El agua', icon: 'Droplets', feedback: 'Es un tema tan grande que no sabrías por dónde empezar.' },
          { id: 'b', text: '¿De dónde viene el agua que llega a nuestra escuela?', icon: 'Search' },
          { id: 'c', text: 'Todo sobre el agua en el mundo', icon: 'Globe', feedback: 'Ni un equipo de científicos podría investigar "todo" en dos semanas.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'conocer', title: 'Tema y pregunta de investigación',
          prompt: 'Investigar empieza con una **pregunta**. Observa el embudo y toca cada tarjeta.' },
        { icon: 'Filter', body: 'La pregunta es la brújula de la investigación: todo lo que busques debe ayudar a responderla.', reveal: [
          { icon: 'Globe', front: 'Tema', back: 'Es el **asunto general**: _el agua_. Todavía es demasiado amplio para una investigación escolar.' },
          { icon: 'Filter', front: 'Delimitar', back: 'Hacer el tema más pequeño respondiendo: **¿qué aspecto?** (origen), **¿dónde?** (en la escuela), **¿cuándo?** (actualmente).' },
          { icon: 'HelpCircle', front: 'Pregunta de investigación', back: 'Dice **exactamente** qué quieres averiguar: _¿De dónde viene el agua que llega a nuestra escuela?_' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer', title: 'Ejemplo resuelto: pasar por el embudo',
          prompt: 'Mira cómo Daniela convierte un tema amplio en una pregunta.' },
        { icon: 'Filter', problem: 'Tema: **el agua**. Daniela tiene dos semanas y puede consultar los registros disponibles de su escuela.',
          steps: [
            { text: '**¿Qué aspecto?** De todo lo relacionado con el agua, elige su **origen y recorrido**.' },
            { text: '**¿Dónde?** En su escuela, donde hay fuentes disponibles.', why: 'Un lugar cercano permite revisar mapas, fichas y testimonios ya documentados.' },
            { text: '**¿Qué quiere saber?** De dónde viene el agua que llega a los chorros.' },
            { text: 'Redacta una **pregunta abierta**: "¿De dónde viene el agua de la escuela y cómo llega a los chorros?"' },
          ],
          answer: 'Pregunta de investigación: **¿De dónde viene el agua de la escuela y cómo llega a los chorros?**',
          tip: 'Si tu pregunta se puede responder con un "sí" o un "no", ábrela con ¿cómo?, ¿por qué?, ¿qué? o ¿de dónde?' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], prompt: 'Clasifica: ¿es un **tema amplio** o una **pregunta de investigación** delimitada?',
          hint: 'Una pregunta delimitada dice qué aspecto y, casi siempre, dónde o cuándo.' },
        { buckets: [
          { id: 'tema', label: 'Tema amplio', icon: 'Globe', color: 'var(--c-maiz-strong)' },
          { id: 'preg', label: 'Pregunta delimitada', icon: 'Target', color: 'var(--area-l1)' },
        ], items: [
          { id: 'q1', text: 'El agua', bucket: 'tema' },
          { id: 'q2', text: '¿Qué fuentes aparecen en el mapa del caso escolar?', bucket: 'preg' },
          { id: 'q3', text: 'La calidad del agua', bucket: 'tema' },
          { id: 'q4', text: '¿Qué evidencia presenta el caso sobre el tratamiento del agua?', bucket: 'preg' },
          { id: 'q5', text: 'El cuidado del agua', bucket: 'tema' },
          { id: 'q6', text: '¿Qué fuga registra la tabla de observación de esta semana?', bucket: 'preg' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'conocer', title: 'Preguntas abiertas y cerradas',
          prompt: 'No todas las preguntas sirven igual para investigar. Toca cada tarjeta.' },
        { icon: 'MessageCircle', body: 'Para investigar, prefiere las preguntas **abiertas**: te obligan a buscar, comparar y explicar.', reveal: [
          { icon: 'Lock', front: 'Cerrada', back: 'Se responde con **sí o no**, o con un solo dato: "¿Hay un tanque en la escuela?". Se acaba ahí.' },
          { icon: 'Unlock', front: 'Abierta', back: 'Pide una explicación: "¿**Cómo** llega el agua al tanque?", "¿**Por qué** cambia su disponibilidad?".' },
          { icon: 'X', front: 'No se investiga', back: 'Las preguntas de **gusto personal** ("¿Cuál agua sabe mejor?") o imposibles con las fuentes y el tiempo disponibles.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer',
          prompt: 'Ahora tú. La pregunta "**¿Hay agua en el tanque?**" es cerrada. ¿Cuál es la mejor forma de **abrirla**?',
          hint: 'Busca la que pide explicar el origen y recorrido del agua del tanque.',
          explain: 'Con "¿De dónde… y cómo…?" la respuesta ya no es un simple sí: hay que investigar origen y recorrido.' },
        { options: [
          { id: 'a', text: '¿De dónde viene el agua del tanque y cómo llega hasta allí?' },
          { id: 'b', text: '¿Hay mucha agua en el tanque?', feedback: 'Sigue siendo casi cerrada y no pide explicar el sistema.' },
          { id: 'c', text: '¿Por qué todos los océanos son salados?', feedback: 'Es abierta, pero se aleja del sistema de agua investigado.' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer', prompt: 'Une cada tema amplio con una pregunta de investigación **delimitada** sobre ese tema.',
          explain: 'Cada pregunta toma un aspecto del tema y lo ubica en un lugar cercano.' },
        { leftTitle: 'Tema', rightTitle: 'Pregunta delimitada', pairs: [
          { id: 'm1', left: 'Fuentes de agua', leftIcon: 'Waves', right: '¿Qué fuentes abastecen el sistema descrito en el caso de la escuela?' },
          { id: 'm2', left: 'Recorrido del agua', leftIcon: 'Route', right: '¿Por qué lugares pasa el agua antes de llegar al tanque?' },
          { id: 'm3', left: 'Calidad del agua', leftIcon: 'Microscope', right: '¿Qué evidencias permiten juzgar si el agua es apta para un uso?' },
          { id: 'm4', left: 'Cuidado del agua', leftIcon: 'HandHeart', right: '¿Qué acción factible puede reducir una pérdida observada?' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer',
          prompt: 'Vuelve al tema de **tu mini-investigación** (semana 6). Escríbelo y pásalo por el embudo: aspecto, lugar, tiempo. Termina con tu **pregunta de investigación** abierta.' },
        { minWords: 25, placeholder: 'Tema: …\nAspecto: …\nLugar: …\nTiempo: …\nMi pregunta: ¿…?',
          model: 'Tema: el agua.\nAspecto: de dónde viene y cómo llega.\nLugar: mi escuela.\nTiempo: hoy en día.\nMi pregunta: ¿De dónde viene el agua que llega a nuestra escuela y cómo llega hasta los chorros?',
          rubric: [
            'Escribí el tema y lo delimité con aspecto, lugar y tiempo',
            'Mi pregunta es abierta (no se responde con sí o no)',
            'Mi pregunta se puede investigar en dos semanas con fuentes a mi alcance',
            'Usé los signos de interrogación de apertura y cierre',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.2'], prompt: '¿Cuál es una **pregunta de investigación** bien delimitada?' },
        { options: [
          { id: 'a', text: '¿Cómo llega el agua desde el tanque hasta los chorros de la escuela?' },
          { id: 'b', text: 'El agua' },
          { id: 'c', text: '¿Te gusta el agua fría?' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: '"¿Hay un río en mi pueblo?" es una pregunta cerrada.', answer: true },
          { text: 'Delimitar un tema significa hacerlo más grande.', answer: false, why: 'Delimitar es hacerlo más pequeño y concreto: un aspecto, un lugar, un tiempo.' },
          { text: '"¿Cuál es el color más bonito?" no es una buena pregunta de investigación.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's07-l1-2',
    title: 'Las preguntas clave que guían la búsqueda',
    icon: 'ListChecks',
    minutes: 14,
    gancho: 'Una pregunta grande se responde con varias preguntas pequeñas. ¿Cuáles son las que de verdad importan?',
    objetivos: [
      'Seleccionar preguntas clave que guían una investigación sobre el agua',
    ],
    resumen: [
      'Las preguntas clave son preguntas más pequeñas que, juntas, responden la pregunta de investigación.',
      'Se construyen con qué, quién, dónde, cuándo, cómo, por qué y para qué.',
      'Una pregunta clave es buena si está relacionada con el tema, es clara, se puede responder buscando información y no repite otra.',
      'Entre 4 y 6 preguntas clave bastan para una investigación escolar.',
    ],
    media: {
      id: 's07-l1-2-red', kind: 'diagram', title: 'Red de preguntas clave', aspect: '1:1',
      alt: 'Al centro, la pregunta "¿De dónde viene el agua que llega a nuestra escuela?"; alrededor, cinco preguntas clave unidas con líneas: nacimiento, recorrido, quién la cuida, tratamiento y cómo cuidarla.',
      brief: 'Mapa radial: círculo central azul con la pregunta de investigación "¿De dónde viene el agua que llega a nuestra escuela?". Cinco burbujas alrededor, cada una con un ícono y una pregunta: gota "¿De qué nacimiento o pozo sale?"; camino "¿Por dónde viaja hasta la escuela?"; personas "¿Quién se encarga de mantener el sistema?"; filtro "¿Se limpia o se trata antes de usarla?"; mano "¿Cómo podemos cuidarla?". Colores suaves, letra grande.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.2'], title: 'Una pregunta grande necesita rutas',
          prompt: 'Las preguntas clave dividen la investigación en partes relacionadas, claras y posibles de responder.' },
        { icon: 'ListChecks', body: 'Qué, quién, dónde, cuándo, cómo, por qué y para qué ayudan a buscar evidencia distinta.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'conocer',
          prompt: 'Sofía investiga "**¿De dónde viene el agua que llega a nuestra escuela?**". ¿Cuál de estas preguntas le **ayuda** a responderla?',
          explain: 'Saber de qué nacimiento o pozo sale el agua es una parte de la respuesta. Las otras preguntas se alejan del tema.' },
        { options: [
          { id: 'a', text: '¿De qué nacimiento o pozo sale el agua?', icon: 'Droplet' },
          { id: 'b', text: '¿Cuántos años tiene la maestra?', icon: 'User', feedback: 'No tiene relación con el agua de la escuela.' },
          { id: 'c', text: '¿Por qué el mar es salado?', icon: 'Waves', feedback: 'Es interesante, pero no ayuda a responder la pregunta de Sofía.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'conocer', title: 'Las palabras que abren preguntas',
          prompt: 'Las **preguntas clave** dividen la pregunta grande en partes. Estas palabras te ayudan a encontrarlas. Toca cada tarjeta.' },
        { icon: 'HelpCircle', body: 'No necesitas usar todas: elige las que tengan sentido para tu tema.', reveal: [
          { icon: 'Package', front: '¿Qué?', back: '¿Qué es? ¿Qué partes tiene? _¿Qué tipo de sistema lleva el agua?_' },
          { icon: 'Users', front: '¿Quién?', back: 'Personas o instituciones. _¿Quién mantiene la tubería?_' },
          { icon: 'MapPin', front: '¿Dónde?', back: 'Lugares. _¿Dónde está el nacimiento?_' },
          { icon: 'Clock', front: '¿Cuándo?', back: 'Tiempo. _¿Cuándo se construyó el tanque?_' },
          { icon: 'Wrench', front: '¿Cómo?', back: 'Procesos y formas. _¿Cómo llega el agua hasta los chorros?_' },
          { icon: 'Lightbulb', front: '¿Por qué? / ¿Para qué?', back: 'Causas y finalidades. _¿Por qué a veces falta el agua? ¿Para qué sirve el tanque?_' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'conocer', title: '¿Cómo sé si una pregunta clave es buena?',
          prompt: 'Revisa cada pregunta con estos cuatro filtros. Toca cada tarjeta.' },
        { icon: 'Filter', body: 'Si una pregunta no pasa algún filtro, corrígela o descártala.', reveal: [
          { icon: 'Link', front: 'Relacionada', back: '¿Ayuda a responder la pregunta de investigación? Si no, fuera.' },
          { icon: 'Eye', front: 'Clara', back: '¿Se entiende sin explicación? "¿Y lo del agua?" no es clara.' },
          { icon: 'Search', front: 'Investigable', back: '¿Se puede responder buscando, preguntando u observando? Las opiniones de gusto no se investigan.' },
          { icon: 'Copy', front: 'No repetida', back: '"¿De dónde sale el agua?" y "¿Cuál es el origen del agua?" preguntan lo mismo: deja una.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer', title: 'Ejemplo resuelto: la red de Sofía',
          prompt: 'Observa la red de preguntas clave de Sofía y cómo la depuró.' },
        { icon: 'Share2', problem: 'Pregunta de investigación: "¿De dónde viene el agua que llega a nuestra escuela?". Primera lista de Sofía: 1) ¿De qué nacimiento o pozo sale? 2) ¿Por dónde viaja? 3) ¿Cuál es el origen del agua? 4) ¿Quién mantiene el sistema? 5) ¿Me gusta el agua fría? 6) ¿Se trata antes de usarla? 7) ¿Cómo podemos cuidarla?',
          steps: [
            { text: 'La 3 **repite** la 1 (origen = de dónde sale). La quito.' },
            { text: 'La 5 es de **gusto personal**: no se investiga. La quito.', why: 'Las preguntas clave buscan información, no preferencias.' },
            { text: 'Las demás están relacionadas, son claras e investigables: se quedan.' },
            { text: 'Ordeno de lo básico a lo más complejo: origen → recorrido → quién lo mantiene → tratamiento → cuidado.' },
          ],
          answer: 'Cinco preguntas clave: ¿De qué nacimiento o pozo sale? · ¿Por dónde viaja hasta la escuela? · ¿Quién mantiene el sistema? · ¿Se trata antes de usarla? · ¿Cómo podemos cuidarla?',
          tip: 'Cuando tengas tus preguntas clave, cada una puede ser un párrafo de tu informe.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer',
          prompt: 'Ahora tú. Investigación: "**¿Cómo se cuida el agua en el caso escolar presentado?**". Elige **todas** las preguntas clave útiles.',
          hint: 'Aplica los filtros: ¿está relacionada?, ¿es clara?, ¿se puede investigar?',
          explain: 'Las preguntas clave buscan pérdidas registradas, acciones documentadas y una respuesta factible. La del color favorito es de gusto personal.' },
        { multiple: true, options: [
          { id: 'a', text: '¿Qué pérdidas de agua aparecen en el registro del caso?', icon: 'Search' },
          { id: 'b', text: '¿Qué acciones de cuidado ya están documentadas?', icon: 'Users' },
          { id: 'c', text: '¿Qué acción factible puede realizar el grupo?', icon: 'Hand' },
          { id: 'd', text: '¿Cuál es mi color favorito?', icon: 'Palette', feedback: 'No se relaciona con el tema y es de gusto personal.' },
        ], correct: ['a', 'b', 'c'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer',
          prompt: 'Investigación de Daniela: "**¿Cómo llega el agua al tanque del caso escolar?**". ¿Qué preguntas sirven como preguntas clave?',
          explain: 'Sirven las que ayudan a explicar el origen, el recorrido y el mantenimiento del sistema. Gustos y temas lejanos no ayudan.' },
        { buckets: [
          { id: 'si', label: 'Sirve', icon: 'Check', color: 'var(--c-ok)' },
          { id: 'no', label: 'No sirve', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'k1', text: '¿De qué fuente sale el agua del caso?', bucket: 'si' },
          { id: 'k2', text: '¿Por qué tuberías pasa antes del tanque?', bucket: 'si' },
          { id: 'k3', text: '¿Cuál bebida sabe mejor?', bucket: 'no' },
          { id: 'k4', text: '¿Quién revisa el sistema descrito?', bucket: 'si' },
          { id: 'k5', text: '¿Cuánta agua existe en otros planetas?', bucket: 'no', feedback: 'Se aleja del sistema escolar que delimita la investigación.' },
          { id: 'k6', text: '¿Qué registro muestra el recorrido?', bucket: 'si' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer',
          prompt: 'Investigación: "¿Cómo funciona el sistema de agua del caso escolar?". Une cada **palabra de pregunta** con la pregunta clave que forma.',
          explain: 'Cada palabra de pregunta abre una parte distinta del tema.' },
        { leftTitle: 'Palabra', rightTitle: 'Pregunta clave', pairs: [
          { id: 'w1', left: '¿Qué…?', right: '¿Qué componentes tiene el sistema?' },
          { id: 'w2', left: '¿Dónde…?', right: '¿Dónde se almacena el agua?' },
          { id: 'w3', left: '¿Por qué…?', right: '¿Por qué se revisa la tubería?' },
          { id: 'w4', left: '¿Cómo…?', right: '¿Cómo llega el agua hasta los chorros?' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer',
          prompt: 'Escribe tu **pregunta de investigación** y, debajo, **entre 4 y 6 preguntas clave**. Revísalas con los cuatro filtros: relacionada, clara, investigable, no repetida.' },
        { minWords: 30, placeholder: 'Pregunta de investigación: ¿…?\n1. ¿…?\n2. ¿…?\n3. ¿…?\n4. ¿…?',
          model: 'Pregunta de investigación: ¿Cómo llega el agua al tanque del caso escolar?\n1. ¿De qué fuente sale?\n2. ¿Por dónde viaja?\n3. ¿Quién mantiene el sistema?\n4. ¿Qué registro describe el recorrido?\n5. ¿Qué acción ayudaría a cuidarlo?',
          rubric: [
            'Escribí mi pregunta de investigación',
            'Escribí entre 4 y 6 preguntas clave',
            'Todas se relacionan con mi pregunta y son claras',
            'Ninguna se repite ni es de gusto personal',
            'Usé signos de interrogación de apertura y cierre',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.2'], prompt: 'Investigación: "¿Cómo se almacena el agua en el caso escolar?". ¿Cuál **no** es una buena pregunta clave?' },
        { options: [
          { id: 'a', text: '¿Qué color de tanque me gusta más?' },
          { id: 'b', text: '¿Qué capacidad tiene el tanque del escenario?' },
          { id: 'c', text: '¿Cómo entra y sale el agua del tanque?' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Las preguntas clave, juntas, ayudan a responder la pregunta de investigación.', answer: true },
          { text: 'Mientras más preguntas clave, aunque se repitan, mejor.', answer: false, why: 'Las repetidas no aportan: bastan entre 4 y 6 preguntas distintas.' },
          { text: '"¿Por qué…?" sirve para preguntar por causas.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 3 ─────────────────────────────
  lesson({
    id: 's07-l1-3',
    title: 'Fuentes escritas y tecnológicas',
    icon: 'Library',
    minutes: 13,
    gancho: 'Para saber de dónde viene el agua de una escuela, ¿basta un rumor o hace falta buscar fuentes relacionadas con el sistema?',
    objetivos: [
      'Elegir la fuente adecuada según lo que se quiere averiguar',
    ],
    resumen: [
      'Una fuente de información es todo aquello de donde obtenemos datos para responder nuestras preguntas.',
      'Fuentes escritas: libros, enciclopedias, diccionarios, periódicos, revistas, folletos y documentos oficiales.',
      'Fuentes tecnológicas: sitios web de instituciones, videos educativos, bases de datos, mapas digitales, programas de radio o televisión.',
      'Las personas también son fuentes (entrevistas). Cada pregunta necesita la fuente adecuada; conviene usar más de una.',
    ],
    media: {
      id: 's07-l1-3-fuentes', kind: 'image', title: 'Un mundo de fuentes', aspect: '16:9',
      alt: 'Mesa de trabajo con un libro abierto, una enciclopedia, un periódico, una computadora mostrando un mapa, un radio y una niña que entrevista a una señora mayor.',
      brief: 'Ilustración cálida de una mesa en una biblioteca comunitaria. A la izquierda, fuentes escritas: libro abierto, enciclopedia, diccionario, periódico doblado, folleto. A la derecha, fuentes tecnológicas: computadora con un mapa en pantalla, tableta con un video educativo (sin logotipos), radio antiguo. Al fondo, una niña con cuaderno entrevista a una señora mayor con traje típico. Rótulos: "Escritas", "Tecnológicas", "Personas". Sin marcas comerciales.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.3'], title: 'Cada pregunta pide una fuente',
          prompt: 'Una fuente sirve cuando puede aportar el tipo de evidencia que la pregunta necesita: documentos, recursos tecnológicos u observaciones y testimonios identificados.' },
        { icon: 'Library', body: 'Elegir bien la fuente evita buscar una respuesta en el lugar equivocado.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'conocer',
          prompt: 'Para investigar el **recorrido del agua en un sistema escolar**, ¿qué fuente es más pertinente?',
          explain: 'Un plano identificado del sistema muestra el recorrido. Una opinión o un mensaje sin origen no aportan esa evidencia.' },
        { options: [
          { id: 'a', text: 'Un plano identificado del sistema y su ficha técnica', icon: 'Map' },
          { id: 'b', text: 'Lo que una persona imagina al ver un chorro', icon: 'User', feedback: 'La apariencia del chorro no muestra todo el recorrido.' },
          { id: 'c', text: 'Un mensaje reenviado sin autor ni fuente', icon: 'MessageCircle', feedback: 'No sabemos quién lo escribió ni de dónde obtuvo el dato.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'conocer', title: 'Tipos de fuentes',
          prompt: 'Una **fuente de información** es todo aquello de donde sacamos datos para responder nuestras preguntas. Toca cada tarjeta.' },
        { icon: 'Library', body: 'Ninguna fuente sirve para todo. La clave es preguntarse: **¿quién sabe esto de verdad?**', reveal: [
          { icon: 'BookOpen', front: 'Escritas', back: 'Están impresas en papel: **libros** de texto, **enciclopedias**, **diccionarios**, **periódicos**, **revistas**, **folletos**, **documentos oficiales** (leyes, actas, informes).' },
          { icon: 'Monitor', front: 'Tecnológicas', back: 'Usan un aparato: **sitios web** de instituciones, **videos** educativos, **bases de datos**, **mapas digitales**, programas de **radio** o **televisión**.' },
          { icon: 'Users', front: 'Personas', back: 'Quien vive o conoce el tema: un agricultor, una comadrona, el conserje, una autoridad comunitaria. Se consultan con una **entrevista**.' },
          { icon: 'Layers', front: 'Mejor si son varias', back: 'Si dos o tres fuentes dicen lo mismo, puedes confiar más en el dato.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3'], prompt: 'Clasifica cada fuente.',
          hint: '¿Está impresa en papel (escrita) o necesita un aparato para consultarla (tecnológica)?',
          explain: 'Una fuente escrita queda en papel; una tecnológica requiere un dispositivo para consultarla.' },
        { buckets: [
          { id: 'esc', label: 'Escrita', icon: 'BookOpen', color: 'var(--area-l1)' },
          { id: 'tec', label: 'Tecnológica', icon: 'Monitor', color: 'var(--area-cnt)' },
        ], items: [
          { id: 'f1', text: 'Enciclopedia de la biblioteca', bucket: 'esc' },
          { id: 'f2', text: 'Video educativo sobre el ciclo del agua', bucket: 'tec' },
          { id: 'f3', text: 'Periódico impreso del domingo', bucket: 'esc' },
          { id: 'f4', text: 'Mapa digital del municipio', bucket: 'tec' },
          { id: 'f5', text: 'Folleto del centro de salud', bucket: 'esc' },
          { id: 'f6', text: 'Sitio web de un ministerio', bucket: 'tec' },
          { id: 'f7', text: 'Programa de radio sobre agricultura', bucket: 'tec' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer', title: 'Ejemplo resuelto: una fuente para cada pregunta',
          prompt: 'Sofía decide qué fuente usará para cada una de sus preguntas clave.' },
        { icon: 'Library', problem: 'Preguntas clave de Sofía sobre el agua de la escuela.',
          steps: [
            { text: '"¿De qué nacimiento o pozo sale?" → **Persona**: el conserje o el comité de agua, que conocen el sistema.' },
            { text: '"¿Por dónde viaja?" → **Observación** del recorrido de la tubería con el conserje + **mapa digital** del lugar.', why: 'Ver el lugar y comparar con un mapa da un dato más seguro que solo imaginarlo.' },
            { text: '"¿Se trata antes de usarla?" → **Escrita**: el libro de Ciencias Naturales (qué es potabilizar) y **persona**: el comité de agua.' },
            { text: '"¿Cómo podemos cuidarla?" → **Tecnológica**: un video educativo de una institución; **escrita**: un folleto del centro de salud.' },
          ],
          answer: 'Sofía usará fuentes escritas, tecnológicas y personas, y cada pregunta tiene al menos una fuente adecuada.',
          tip: 'Anota junto a cada pregunta la fuente que usarás: así tu búsqueda tiene un plan.' },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer', prompt: 'Une cada necesidad con la **mejor** fuente.',
          explain: 'Cada necesidad pide evidencia distinta: definiciones, recorridos, tratamiento documentado o funcionamiento del sistema.' },
        { leftTitle: 'Quiero saber…', rightTitle: 'Fuente', pairs: [
          { id: 'n1', left: 'Qué significa "potabilizar"', leftIcon: 'BookOpen', right: 'Un diccionario o libro de Ciencias' },
          { id: 'n2', left: 'Por dónde pasa una tubería del caso', leftIcon: 'Route', right: 'El plano identificado del sistema' },
          { id: 'n3', left: 'Qué tratamiento registra el caso', leftIcon: 'FileText', right: 'La ficha técnica o informe del sistema' },
          { id: 'n4', left: 'Cómo se revisa una llave del sistema', leftIcon: 'Users', right: 'Un testimonio documentado de la persona responsable' },
          { id: 'n5', left: 'Qué cambios muestran varios registros', leftIcon: 'BarChart3', right: 'La tabla fechada de observaciones' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer',
          prompt: 'Daniela investiga "¿Por dónde viaja el agua en el sistema del caso?". ¿Cuál es su **fuente principal**?',
          explain: 'El plano identificado y su ficha describen ese recorrido. Un texto general sobre agua no muestra el sistema específico.' },
        { options: [
          { id: 'a', text: 'El plano identificado del sistema y su ficha' },
          { id: 'b', text: 'Una enciclopedia general sobre océanos', feedback: 'Habla del agua en general, no del recorrido del sistema.' },
          { id: 'c', text: 'Un video publicitario de agua embotellada', feedback: 'No describe el sistema del caso.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer',
          prompt: 'Copia **tres** de tus preguntas clave y escribe junto a cada una **qué fuente** usarás y de **qué tipo** es (escrita, tecnológica o persona). Usa al menos **dos tipos** distintos.' },
        { minWords: 30, placeholder: '1. ¿…? → Fuente: … (tipo: …)\n2. ¿…? → …\n3. ¿…? → …',
          model: '1. ¿Por dónde viaja el agua? → Fuente: plano identificado del sistema (escrita).\n2. ¿Qué significa potabilizar? → Fuente: libro de Ciencias Naturales (escrita).\n3. ¿Qué acción reduce una fuga? → Fuente: video educativo de una institución pública (tecnológica).',
          rubric: [
            'Escribí tres preguntas clave con una fuente para cada una',
            'Indiqué el tipo de cada fuente',
            'Usé al menos dos tipos de fuentes',
            'Cada fuente puede responder de verdad la pregunta',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3'], prompt: '¿Cuál es una **fuente tecnológica**?' },
        { options: [
          { id: 'a', text: 'Un video educativo de un museo' },
          { id: 'b', text: 'Un diccionario impreso' },
          { id: 'c', text: 'Una revista de papel' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3'], prompt: 'Une cada pregunta con la fuente más adecuada.' },
        { leftTitle: 'Pregunta', rightTitle: 'Fuente', pairs: [
          { id: 'e1', left: '¿Qué significa "caudal"?', right: 'Diccionario' },
          { id: 'e2', left: '¿Qué tratamiento describe el caso?', right: 'Ficha técnica identificada del sistema' },
          { id: 'e3', left: '¿Cómo se reparó una fuga registrada?', right: 'Informe fechado de mantenimiento' },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 4 ─────────────────────────────
  lesson({
    id: 's07-l1-4',
    title: '¿Es confiable esta fuente?',
    icon: 'ShieldCheck',
    minutes: 15,
    gancho: 'Un anuncio dice: "¡Este filtro vuelve potable cualquier agua para siempre!". ¿Le crees? ¿Cómo lo averiguas?',
    objetivos: [
      'Aplicar cinco preguntas para evaluar si una fuente es confiable',
    ],
    resumen: [
      'Antes de usar una fuente, pregúntate: ¿quién lo escribió?, ¿cuándo?, ¿para qué?, ¿de dónde saca sus datos?, ¿otras fuentes dicen lo mismo?',
      'Son más confiables las fuentes de instituciones o personas expertas, con fecha, que explican de dónde vienen sus datos.',
      'Desconfía de textos sin autor, con promesas exageradas, que solo quieren vender o que piden reenviar "urgente".',
      'Si dos fuentes confiables coinciden, el dato es más seguro.',
    ],
    media: {
      id: 's07-l1-4-lupa', kind: 'animation', title: 'Cinco preguntas antes de creer', aspect: '16:9', duration: 50,
      alt: 'Una lupa pasa sobre un texto y van apareciendo cinco preguntas: quién, cuándo, para qué, de dónde salen los datos y qué dicen otras fuentes.',
      brief: 'Animación 2D de 50 s. Una pantalla muestra una guía identificada sobre calidad del agua; una lupa recorre autor, fecha, propósito, evidencia y comparación con otra fuente. Después aparece un anuncio sin autor: "¡FILTRO MÁGICO! Vuelve potable cualquier agua para siempre"; la animación marca la afirmación como no comprobada. Narración en español de Guatemala, subtítulos, sin marcas. No mostrar resultados de laboratorio inventados.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.3', 'l1:4.2.1'], title: 'La confianza se justifica',
          prompt: 'Una fuente no es confiable solo por verse formal. Hay que revisar autoría, fecha, propósito, evidencia y coincidencia con otras fuentes.' },
        { icon: 'ShieldCheck', body: 'El juicio sobre una fuente debe mencionar criterios observables, no gustos.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'conocer',
          prompt: 'En un grupo de chat alguien envía: "**URGENTE: mañana cortarán el agua en todo el país. Reenvía a todos.**" No tiene firma. ¿Qué haces?',
          explain: 'Un mensaje sin autor, alarmante y que pide reenviar "urgente" suele ser falso. Lo correcto es verificarlo en una fuente oficial antes de creerlo o compartirlo.' },
        { options: [
          { id: 'a', text: 'Verifico en una fuente oficial (la municipalidad, la radio local) antes de creerlo o reenviarlo', icon: 'ShieldCheck' },
          { id: 'b', text: 'Lo reenvío a todos por si acaso', icon: 'Megaphone', feedback: 'Si es falso, estarías ayudando a asustar a mucha gente.' },
          { id: 'c', text: 'Lo creo porque dice "urgente"', icon: 'AlertTriangle', feedback: 'La palabra "urgente" no hace verdadera una noticia.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'conocer', title: 'Las cinco preguntas del buen investigador',
          prompt: 'No todo lo impreso o lo que aparece en internet es verdad. Antes de usar una fuente, hazle estas preguntas. Toca cada tarjeta.' },
        { icon: 'ShieldCheck', body: 'Una fuente confiable **no te pide que le creas**: te muestra quién es y de dónde saca lo que dice.', reveal: [
          { icon: 'User', front: '1. ¿Quién lo escribió?', back: 'Una institución (ministerio, universidad, museo) o una persona experta es más confiable que un texto **sin autor**.' },
          { icon: 'Calendar', front: '2. ¿Cuándo?', back: 'Para temas que cambian (población, precios, tecnología), busca información **reciente**.' },
          { icon: 'Target', front: '3. ¿Para qué?', back: '¿Quiere **informar** o quiere **vender** o convencerte sin pruebas? Los anuncios exageran.' },
          { icon: 'BookOpen', front: '4. ¿De dónde saca sus datos?', back: 'Un buen texto dice de dónde vienen sus datos (un censo, un estudio, una entrevista).' },
          { icon: 'Copy', front: '5. ¿Otras fuentes coinciden?', back: 'Compara con otra fuente confiable. Si dicen lo mismo, el dato es más seguro.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3', 'l1:4.2.1'], ambito: 'hacer',
          prompt: 'Lee **dos fuentes de ejemplo** que encontró Mateo sobre la calidad del agua. Aplica las cinco preguntas y responde.',
          hint: 'Fíjate en quién escribió cada texto, para qué y si explica de dónde saca lo que dice.',
          explain: 'La fuente A identifica su origen y explica procesos; la B intenta vender con promesas sin autor, fecha ni evidencia.' },
        { genre: 'Dos fuentes simuladas para comparar', heading: '¿La apariencia demuestra que el agua es potable?', passage:
          'FUENTE A. Guía escolar de salud, con institución responsable, fecha reciente y referencias a normas de calidad.\n\n' +
          '"El agua transparente no es automáticamente potable. Para decidir si es apta para beber se necesitan controles adecuados y registros del tratamiento, porque algunos contaminantes no se observan a simple vista. El origen del agua, por sí solo, tampoco permite asegurar su calidad."\n\n' +
          'FUENTE B. Anuncio simulado compartido en una red social, sin autor, fecha ni pruebas.\n\n' +
          '"¡FILTRO MÁGICO! Vuelve potable cualquier agua para siempre. No necesita mantenimiento ni pruebas. Miles lo recomiendan. Últimas unidades a Q99. ¡Compra ya!"',
          questions: [
            { q: '¿Quién escribió la Fuente A?', options: [
              { id: 'a', text: 'La institución responsable de una guía escolar de salud' },
              { id: 'b', text: 'No se sabe' },
              { id: 'c', text: 'La persona anónima del anuncio' },
            ], correct: 'a', why: 'La Fuente A identifica una institución responsable, fecha y referencias.' },
            { q: '¿Cuál es la intención principal de la Fuente B?', options: [
              { id: 'a', text: 'Vender un producto' },
              { id: 'b', text: 'Explicar cómo se comprueba la calidad del agua' },
              { id: 'c', text: 'Informar sobre el recorrido de una tubería' },
            ], correct: 'a', why: '"Últimas unidades a Q99. ¡Compra ya!" muestra que su propósito es vender.' },
            { q: '¿Qué señales muestran que la Fuente B **no** es confiable?', options: [
              { id: 'a', text: 'No tiene autor ni fecha, promete algo exagerado y no explica de dónde saca lo que dice' },
              { id: 'b', text: 'Está escrita con palabras difíciles' },
              { id: 'c', text: 'Es demasiado larga' },
            ], correct: 'a', why: 'Faltan autor y fecha, hay promesas exageradas ("gratis para siempre") y ninguna prueba.' },
            { q: 'Mateo necesita explicar **cómo se juzga si el agua es apta para beber**. ¿Qué debe hacer?', options: [
              { id: 'a', text: 'Usar la Fuente A y compararla con otra fuente confiable' },
              { id: 'b', text: 'Usar la Fuente B porque "miles de personas ya lo usan"' },
              { id: 'c', text: 'Mezclar las dos fuentes por igual' },
            ], correct: 'a', why: 'La Fuente A ofrece criterios y referencias; compararla con otra fuente especializada fortalece el juicio.' },
          ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer', title: 'Ejemplo resuelto: revisar un sitio web',
          prompt: 'Mira cómo Sofía evalúa un sitio web que encontró sobre el agua.' },
        { icon: 'Monitor', problem: 'Sofía encuentra un artículo en internet: "Cómo cuidar el agua en casa".',
          steps: [
            { text: '**¿Quién?** Al final de la página dice que lo publica una institución pública de salud. ✔' },
            { text: '**¿Cuándo?** Tiene fecha de este año. ✔', why: 'Para consejos de salud conviene información actual.' },
            { text: '**¿Para qué?** Explica y da consejos; no vende nada. ✔' },
            { text: '**¿Datos?** Menciona recomendaciones de salud y explica por qué hay que hervir o clorar el agua. ✔' },
            { text: '**¿Coincide?** Compara con su libro de Ciencias: también dice que hay que hervir el agua para beber si no es segura. ✔' },
          ],
          answer: 'El artículo pasa las cinco preguntas: Sofía puede usarlo como fuente y anotar sus datos.',
          tip: 'Si una fuente falla en "¿quién?" y "¿para qué?", busca otra.' },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer', prompt: '¿Es una señal de fuente **confiable** o de fuente **dudosa**?',
          explain: 'Autor, fecha, datos con origen y coincidencia con otras fuentes dan confianza. Sin autor, con exageraciones o pidiendo reenviar, desconfía.' },
        { buckets: [
          { id: 'ok', label: 'Confiable', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          { id: 'du', label: 'Dudosa', icon: 'AlertTriangle', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'c1', text: 'Dice quién lo escribió y dónde trabaja', bucket: 'ok' },
          { id: 'c2', text: '"¡Reenvía a 10 personas o tendrás mala suerte!"', bucket: 'du' },
          { id: 'c3', text: 'Explica de qué estudio vienen sus datos', bucket: 'ok' },
          { id: 'c4', text: 'Promete resultados milagrosos', bucket: 'du' },
          { id: 'c5', text: 'Coincide con lo que dice el libro de texto', bucket: 'ok' },
          { id: 'c6', text: 'No tiene autor, fecha ni origen', bucket: 'du' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer',
          prompt: 'Dos fuentes describen de forma distinta el tratamiento del agua de un sistema: un mensaje sin fecha y una ficha técnica identificada. ¿Cuál usarías?',
          explain: 'La ficha identificada permite revisar responsable, fecha y datos. Ante una diferencia, se compara con otra fuente pertinente.' },
        { options: [
          { id: 'a', text: 'La ficha técnica identificada, y la confirmaría con otra fuente pertinente' },
          { id: 'b', text: 'El mensaje, porque es más corto', feedback: 'Que sea corto no lo hace confiable.' },
          { id: 'c', text: 'Sacaría un promedio de los dos', feedback: 'Promediar un dato confiable con uno dudoso no da un dato correcto.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer',
          prompt: 'Elige **una fuente** que usarás en tu mini-investigación (un libro, un folleto, un sitio web o una persona). Respóndele las **cinco preguntas** y decide si es confiable.' },
        { minWords: 35, placeholder: 'Fuente: …\n¿Quién? …\n¿Cuándo? …\n¿Para qué? …\n¿Datos? …\n¿Coincide? …\nConclusión: …',
          model: 'Ejemplo hipotético. Fuente: guía escolar sobre agua.\n¿Quién? Institución responsable identificada.\n¿Cuándo? Tiene fecha de publicación.\n¿Para qué? Informar.\n¿Datos? Explica el ciclo del agua y cita sus referencias.\n¿Coincide? Sus conceptos coinciden con un libro de Ciencias.\nConclusión: puede apoyar conceptos generales; no demuestra hechos de una comunidad específica.',
          rubric: [
            'Nombré la fuente',
            'Respondí las cinco preguntas',
            'Mi conclusión se basa en las respuestas',
            'Escribí con oraciones claras',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3'], prompt: '¿Cuál fuente es **más confiable** para conocer recomendaciones sobre agua para consumo?' },
        { options: [
          { id: 'a', text: 'Un folleto de una institución de salud con fecha y referencias' },
          { id: 'b', text: 'Un audio anónimo que circula en un chat' },
          { id: 'c', text: 'Un anuncio que vende un filtro "milagroso"' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Todo lo que aparece en internet es verdad.', answer: false, why: 'En internet cualquiera puede publicar; hay que evaluar cada fuente.' },
          { text: 'Si dos fuentes confiables coinciden, el dato es más seguro.', answer: true },
          { text: 'Un texto que solo quiere venderte algo puede exagerar.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 5 ─────────────────────────────
  lesson({
    id: 's07-l1-5',
    title: 'Buscar con palabras clave y registrar la fuente',
    icon: 'Search',
    minutes: 15,
    gancho: 'Si escribes en un buscador "cosas del agua que llega a la escuela de mi aldea en la montaña", ¿qué encontrarás? Probablemente… nada útil.',
    objetivos: [
      'Registrar una búsqueda sobre el agua con palabras clave y ficha de fuente',
    ],
    resumen: [
      'Las palabras clave son las 2 a 4 palabras más importantes de tu pregunta: sustantivos y lugares (agua potable, nacimiento, Guatemala).',
      'En un libro, busca las palabras clave en el índice (en orden alfabético) o en la tabla de contenido.',
      'En internet: usa palabras clave, agrega "Guatemala" si hace falta, prefiere sitios de instituciones y nunca compartas datos personales. Busca con un adulto.',
      'La ficha de la fuente registra: autor, título, año o fecha, y editorial o sitio. La necesitarás para citar con honestidad.',
    ],
    media: {
      id: 's07-l1-5-ficha', kind: 'image', title: 'Ficha de una fuente', aspect: '4:3',
      alt: 'Una tarjeta de cartulina con los campos Autor, Título, Año, Editorial o sitio, Qué información me dio, llenos con los datos de un libro de Ciencias Naturales.',
      brief: 'Ilustración de una ficha de cartulina rayada, con clip, sobre un cuaderno. Campos escritos a mano con letra clara: "Autor: institución de ejemplo", "Título: Ciencias Naturales 6", "Año: 2024", "Editorial o sitio: ejemplo", "¿Qué información me dio?: el ciclo del agua, pág. 34". Al lado, una ficha rotulada "ENTREVISTA SIMULADA · PERSONAJE FICTICIO" con "don Rafael, conserje del caso; fecha del escenario: 12 de marzo". Sin marcas ni fuentes reales inventadas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.3', 'l1:8.2.4', 'l1:4.2.2'], title: 'Buscar y dejar rastro',
          prompt: 'Las palabras clave localizan información; la ficha registra quién la publicó, cuándo, dónde y qué dato se tomó.' },
        { icon: 'NotebookPen', body: 'Sin ficha, un hallazgo queda separado de su fuente y no puede revisarse.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'conocer',
          prompt: 'Quieres saber **cómo se potabiliza el agua**. ¿Qué escribirías en un buscador?',
          explain: 'Las palabras clave son pocas y precisas: "potabilizar agua" o "potabilización del agua". Las frases largas y las palabras vagas ("cosas", "eso") confunden al buscador.' },
        { options: [
          { id: 'a', text: 'potabilización del agua', icon: 'Search' },
          { id: 'b', text: 'hola quiero saber cosas del agua que se toma y eso', icon: 'MessageCircle', feedback: 'Demasiadas palabras vagas: "cosas", "eso", "hola" no ayudan a buscar.' },
          { id: 'c', text: 'agua', icon: 'Droplet', feedback: 'Es tan general que aparecerán millones de resultados sobre cualquier cosa del agua.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'conocer', title: 'Las palabras clave',
          prompt: 'Las **palabras clave** son las palabras más importantes de tu pregunta. Sirven para buscar en índices, catálogos y buscadores. Toca cada tarjeta.' },
        { icon: 'Key', body: 'Casi siempre son **sustantivos** (y a veces un lugar, una fecha o el verbo de la acción principal): son las palabras que nombran el tema.', reveal: [
          { icon: 'Filter', front: 'Cómo encontrarlas', back: 'Escribe tu pregunta y quita las palabras de relleno (¿cómo?, de, el, que, se). Quédate con lo que nombra el tema: "¿De dónde viene el **agua** de la **escuela**?" → _agua, escuela, nacimiento_.' },
          { icon: 'BookOpen', front: 'En un libro', back: 'Busca la palabra clave en el **índice alfabético** del final o en la **tabla de contenido** del inicio. Te dice la página.' },
          { icon: 'Monitor', front: 'En internet', back: 'Escribe 2 a 4 palabras clave. Si hace falta, agrega el lugar: "potabilización agua **Guatemala**". Prueba sinónimos si no encuentras.' },
          { icon: 'Shield', front: 'Con seguridad', back: 'Busca **con un adulto**, prefiere sitios de instituciones y **nunca** escribas tu nombre completo, dirección, teléfono ni fotos.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer', title: 'Ejemplo resuelto: de la pregunta a las palabras clave',
          prompt: 'Mira cómo Daniela prepara una búsqueda sobre tratamiento del agua.' },
        { icon: 'Key', problem: 'Pregunta clave de Daniela: "¿Qué métodos se usan para potabilizar el agua?"',
          steps: [
            { text: 'Quito las palabras de relleno: ¿qué, se, usan, para, el.' },
            { text: 'Me quedan las palabras que nombran: **métodos**, **potabilizar**, **agua**.', why: 'Nombran el proceso y el tema.' },
            { text: 'En el libro de Ciencias busco "potabilización" en el índice.' },
            { text: 'En internet, con una persona adulta, escribo "métodos potabilización agua" y elijo una fuente institucional.' },
          ],
          answer: 'Palabras clave: **métodos, potabilización, agua**. Fuentes posibles: libro de Ciencias y sitio de una institución de salud.',
          tip: 'Si no aparece nada, cambia una palabra por un sinónimo: "tratamiento" en lugar de "potabilización".' },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer',
          prompt: 'Toca las **palabras clave** de esta pregunta de investigación.',
          hint: 'Busca las palabras que nombran el tema, el lugar y la acción principal. Deja fuera palabras de relleno como "cómo", "el", "a" y "de".',
          explain: 'Agua, tanque, escuela y llega nombran lo esencial de la pregunta.' },
        { target: 'palabras clave', text: '¿Cómo {llega} el {agua} al {tanque} de la {escuela}?' },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3', 'l1:8.2.4'], ambito: 'conocer', title: 'La ficha de la fuente',
          prompt: 'Cada vez que uses una fuente, anota sus datos en una **ficha**. Observa la imagen y toca cada tarjeta.' },
        { icon: 'FileText', body: 'La ficha te permite volver a la fuente, comprobar un dato y, sobre todo, **decir de dónde sacaste la información** (lo verás la próxima semana).', reveal: [
          { icon: 'BookOpen', front: 'Libro', back: 'Autor, título, año, editorial y **páginas** que usaste.' },
          { icon: 'Monitor', front: 'Sitio web o video', back: 'Institución o autor, título del artículo o video, nombre del sitio y **fecha en que lo consultaste**.' },
          { icon: 'Mic', front: 'Entrevista', back: 'Nombre de la persona, qué hace o por qué sabe del tema, y **fecha** de la entrevista.' },
          { icon: 'PenLine', front: 'Qué me dio', back: 'Una línea con la información que te sirvió: "explica qué es la potabilización".' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer',
          prompt: 'Completa la ficha de una **entrevista simulada** del caso de Sofía. No representa una consulta real.',
          explain: 'En una entrevista se registra quién es la persona, por qué sabe del tema, la fecha y qué información dio.' },
        { text: 'Tipo de fuente: [[entrevista]]. Personaje ficticio: don Rafael, [[conserje]] de la escuela del caso. Fecha del escenario: 12 de marzo. Afirmación por comprobar: el agua viene de un [[nacimiento]] y llega por [[tubería]] hasta el tanque.',
          distractors: ['enciclopedia', 'alcalde', 'volcán'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'ser', prompt: 'Al buscar en internet, ¿es una práctica **segura** o **peligrosa**?',
          explain: 'Buscar con un adulto y en sitios de instituciones es seguro. Compartir datos personales o descargar programas desconocidos te pone en riesgo.' },
        { buckets: [
          { id: 'seg', label: 'Segura', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          { id: 'pel', label: 'Peligrosa', icon: 'AlertTriangle', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'i1', text: 'Buscar acompañado de un adulto', bucket: 'seg' },
          { id: 'i2', text: 'Escribir mi dirección para "ganar un premio"', bucket: 'pel' },
          { id: 'i3', text: 'Preferir sitios de instituciones educativas o públicas', bucket: 'seg' },
          { id: 'i4', text: 'Descargar un programa desconocido que promete tareas hechas', bucket: 'pel' },
          { id: 'i5', text: 'Cerrar una página que me incomoda y avisar a un adulto', bucket: 'seg' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer',
          prompt: 'Para **tu mini-investigación**: escribe las **palabras clave** de dos de tus preguntas clave y llena **una ficha** de una fuente que ya consultaste o que consultarás.' },
        { minWords: 30, placeholder: 'Pregunta 1: … → palabras clave: …\nPregunta 2: … → palabras clave: …\nFicha: tipo… / autor o persona… / título… / fecha… / qué me dio…',
          model: 'Pregunta 1: ¿De qué nacimiento sale el agua? → palabras clave: nacimiento, agua, escuela.\nPregunta 2: ¿Se trata antes de usarla? → palabras clave: potabilización, cloro, agua.\nFicha: libro / autores de Ciencias Naturales 6 / "El agua y la salud" / edición de hace dos años / explica que clorar o hervir el agua elimina microbios (pág. 41).',
          rubric: [
            'Elegí palabras clave que nombran el tema (sin palabras de relleno)',
            'Llené la ficha con tipo, autor o persona, título y fecha',
            'Anoté qué información me dio la fuente',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3'], prompt: 'Pregunta: "¿Cómo llega el agua al tanque de la escuela?". ¿Cuáles son las mejores **palabras clave**?' },
        { options: [
          { id: 'a', text: 'agua, tanque, escuela, recorrido' },
          { id: 'b', text: 'cómo, el, al, de' },
          { id: 'c', text: 'cosas líquidas interesantes' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3', 'l1:4.2.2'], prompt: 'Buscas "tubería" en el **índice alfabético** de un libro. ¿Entre qué palabras aparecerá?' },
        { options: [
          { id: 'a', text: 'Entre "tratamiento" y "volumen"' },
          { id: 'b', text: 'Entre "agua" y "caudal"' },
          { id: 'c', text: 'Entre "volumen" y "zona"' },
        ], correct: ['a'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l1'], cnb: [], ambito: 'ser', prompt: '¿Cómo va tu investigación?' },
        { statements: [
          'Tengo una pregunta de investigación clara y abierta',
          'Escribí entre 4 y 6 preguntas clave',
          'Sé qué fuentes escritas y tecnológicas usaré y si son confiables',
          'Busco con palabras clave y registro mis fuentes en fichas',
        ], commitments: [
          'Haré la entrevista o consulta que tengo en mi cronograma',
          'Llenaré una ficha por cada fuente que use',
          'Buscaré en internet solo con un adulto y en sitios confiables',
        ] },
      ),
    ],
  }),
];
