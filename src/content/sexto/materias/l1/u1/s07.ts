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
      'Diferenciar un tema de una pregunta de investigación',
      'Delimitar un tema amplio: qué aspecto, dónde y cuándo',
      'Escribir preguntas abiertas que se puedan investigar',
    ],
    resumen: [
      'El tema es el asunto general (el agua, la energía). La pregunta de investigación dice exactamente qué quieres averiguar.',
      'Delimitar es hacer el tema más pequeño y concreto: elegir un aspecto, un lugar y un tiempo.',
      'Las preguntas abiertas (¿cómo?, ¿por qué?, ¿de dónde?) permiten investigar; las cerradas se responden con sí o no.',
      'Una buena pregunta de investigación se puede responder buscando información, en el tiempo que tienes.',
    ],
    media: {
      id: 's07-l1-1-embudo', kind: 'diagram', title: 'El embudo de la pregunta', aspect: '3:4',
      alt: 'Un embudo: arriba, ancho, dice "La energía"; en medio, "La energía en mi comunidad"; abajo, en la punta, "¿Qué usan las familias de mi aldea para cocinar y por qué?".',
      brief: 'Diagrama vertical de un embudo con tres franjas de color que se van angostando. Franja 1 (ancha, arriba): "TEMA: La energía". Franja 2: "Delimito: la energía en mi comunidad, hoy". Franja 3 (angosta): "PREGUNTA: ¿Qué usan las familias de mi aldea para cocinar y por qué?". A la derecha, tres etiquetas con flechas: "¿Qué aspecto?", "¿Dónde?", "¿Cuándo?". Fondo claro, letra grande.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'conocer',
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
          { icon: 'Globe', front: 'Tema', back: 'Es el **asunto general**: _la energía, el agua, los oficios, las fiestas_. Es muy amplio.' },
          { icon: 'Filter', front: 'Delimitar', back: 'Hacer el tema más pequeño respondiendo: **¿qué aspecto?** (para cocinar), **¿dónde?** (en mi aldea), **¿cuándo?** (hoy, este año).' },
          { icon: 'HelpCircle', front: 'Pregunta de investigación', back: 'Dice **exactamente** qué quieres averiguar: _¿Qué usan las familias de mi aldea para cocinar y por qué?_' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer', title: 'Ejemplo resuelto: pasar por el embudo',
          prompt: 'Mira cómo Daniela convierte un tema amplio en una pregunta.' },
        { icon: 'Filter', problem: 'Tema: **los oficios**. Daniela tiene dos semanas y vive en un pueblo donde hay varias panaderías.',
          steps: [
            { text: '**¿Qué aspecto?** De todos los oficios, elige uno cercano: **la panadería**.' },
            { text: '**¿Dónde?** En su pueblo, donde puede visitar y preguntar.', why: 'Un lugar cercano permite observar y entrevistar: son fuentes que sí puede alcanzar.' },
            { text: '**¿Qué quiere saber?** Cómo es el trabajo de un panadero.' },
            { text: 'Redacta una **pregunta abierta**: "¿Cómo es un día de trabajo de un panadero en mi pueblo?"' },
          ],
          answer: 'Pregunta de investigación: **¿Cómo es un día de trabajo de un panadero en mi pueblo?**',
          tip: 'Si tu pregunta se puede responder con un "sí" o un "no", ábrela con ¿cómo?, ¿por qué?, ¿qué? o ¿de dónde?' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], prompt: 'Clasifica: ¿es un **tema amplio** o una **pregunta de investigación** delimitada?',
          hint: 'Una pregunta delimitada dice qué aspecto y, casi siempre, dónde o cuándo.' },
        { buckets: [
          { id: 'tema', label: 'Tema amplio', icon: 'Globe', color: 'var(--c-maiz-strong)' },
          { id: 'preg', label: 'Pregunta delimitada', icon: 'Target', color: 'var(--area-l1)' },
        ], items: [
          { id: 'q1', text: 'Los animales', bucket: 'tema' },
          { id: 'q2', text: '¿Qué aves visitan el patio de la escuela por la mañana?', bucket: 'preg' },
          { id: 'q3', text: 'La electricidad', bucket: 'tema' },
          { id: 'q4', text: '¿Cómo se prepara el pepián en mi familia?', bucket: 'preg' },
          { id: 'q5', text: 'Las fiestas', bucket: 'tema' },
          { id: 'q6', text: '¿Por qué se celebra la feria de mi municipio en esa fecha?', bucket: 'preg' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'conocer', title: 'Preguntas abiertas y cerradas',
          prompt: 'No todas las preguntas sirven igual para investigar. Toca cada tarjeta.' },
        { icon: 'MessageCircle', body: 'Para investigar, prefiere las preguntas **abiertas**: te obligan a buscar, comparar y explicar.', reveal: [
          { icon: 'Lock', front: 'Cerrada', back: 'Se responde con **sí o no**, o con un solo dato: "¿Hay panaderías en mi pueblo?" → Sí. Se acaba ahí.' },
          { icon: 'Unlock', front: 'Abierta', back: 'Pide una explicación: "¿**Cómo** trabajan las panaderías de mi pueblo?", "¿**Por qué** se hornea de madrugada?".' },
          { icon: 'X', front: 'No se investiga', back: 'Las preguntas de **gusto personal** ("¿Cuál es el pan más rico?") o que nadie puede averiguar ("¿Qué pensaba el primer panadero del mundo?").' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer',
          prompt: 'Ahora tú. La pregunta "**¿Usan leña en mi aldea?**" es cerrada. ¿Cuál es la mejor forma de **abrirla**?',
          hint: 'Busca la que empieza con una palabra que pide explicación y sigue hablando de la leña en la aldea.',
          explain: 'Con "¿Para qué… y de dónde…?" la respuesta ya no es un simple sí: hay que investigar usos y origen.' },
        { options: [
          { id: 'a', text: '¿Para qué usan leña las familias de mi aldea y de dónde la obtienen?' },
          { id: 'b', text: '¿Usan mucha leña en mi aldea?', feedback: 'Sigue siendo casi cerrada: "sí, mucha".' },
          { id: 'c', text: '¿Qué es la energía del universo?', feedback: 'Se abrió… ¡pero se fue lejísimos del tema!' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer', prompt: 'Une cada tema amplio con una pregunta de investigación **delimitada** sobre ese tema.',
          explain: 'Cada pregunta toma un aspecto del tema y lo ubica en un lugar cercano.' },
        { leftTitle: 'Tema', rightTitle: 'Pregunta delimitada', pairs: [
          { id: 'm1', left: 'La energía', leftIcon: 'Zap', right: '¿Cómo llega la electricidad hasta las casas de mi colonia?' },
          { id: 'm2', left: 'La basura', leftIcon: 'Trash2', right: '¿Qué hacen con la basura las familias de mi cuadra?' },
          { id: 'm3', left: 'Los idiomas', leftIcon: 'Languages', right: '¿Qué idiomas hablan las personas de mi familia y dónde los aprendieron?' },
          { id: 'm4', left: 'Los juegos', leftIcon: 'Puzzle', right: '¿A qué jugaban mis abuelos cuando tenían mi edad?' },
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
          { id: 'a', text: '¿Cómo se cultiva el café en las fincas de mi municipio?' },
          { id: 'b', text: 'El café' },
          { id: 'c', text: '¿Te gusta el café?' },
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
      'Dividir la pregunta de investigación en preguntas clave',
      'Usar qué, quién, dónde, cuándo, cómo, por qué y para qué',
      'Descartar preguntas que no ayudan a la investigación',
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
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'conocer',
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
          prompt: 'Ahora tú. Investigación: "**¿Qué organizaciones trabajan por la convivencia pacífica en mi comunidad?**". Elige **todas** las preguntas clave útiles.',
          hint: 'Aplica los filtros: ¿está relacionada?, ¿es clara?, ¿se puede investigar?',
          explain: 'Las preguntas clave guían la búsqueda: quiénes son, qué hacen, cómo se participa. La del color favorito es de gusto personal.' },
        { multiple: true, options: [
          { id: 'a', text: '¿Qué organizaciones de servicio hay en mi comunidad?', icon: 'Search' },
          { id: 'b', text: '¿Qué actividades realizan para promover la convivencia?', icon: 'Users' },
          { id: 'c', text: '¿Cómo pueden participar niñas y niños?', icon: 'Hand' },
          { id: 'd', text: '¿Cuál es mi color favorito?', icon: 'Palette', feedback: 'No se relaciona con el tema y es de gusto personal.' },
        ], correct: ['a', 'b', 'c'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer',
          prompt: 'Investigación de Daniela: "**¿Cómo es un día de trabajo de un panadero en mi pueblo?**". ¿Qué preguntas sirven como preguntas clave?',
          explain: 'Sirven las que ayudan a describir el día del panadero. Las que hablan de gustos o se alejan del pueblo no ayudan.' },
        { buckets: [
          { id: 'si', label: 'Sirve', icon: 'Check', color: 'var(--c-ok)' },
          { id: 'no', label: 'No sirve', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'k1', text: '¿A qué hora empieza a trabajar?', bucket: 'si' },
          { id: 'k2', text: '¿Qué ingredientes y herramientas usa?', bucket: 'si' },
          { id: 'k3', text: '¿Cuál pan es el más sabroso del mundo?', bucket: 'no' },
          { id: 'k4', text: '¿Cómo aprendió el oficio?', bucket: 'si' },
          { id: 'k5', text: '¿Quién inventó el primer pan de la historia?', bucket: 'no', feedback: 'Se aleja de la pregunta: habla de la historia mundial del pan, no del panadero de tu pueblo.' },
          { id: 'k6', text: '¿A quiénes vende su pan?', bucket: 'si' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer',
          prompt: 'Investigación: "¿Qué usan las familias de mi aldea para cocinar y por qué?". Une cada **palabra de pregunta** con la pregunta clave que forma.',
          explain: 'Cada palabra de pregunta abre una parte distinta del tema.' },
        { leftTitle: 'Palabra', rightTitle: 'Pregunta clave', pairs: [
          { id: 'w1', left: '¿Qué…?', right: '¿Qué combustibles usan: leña, gas u otro?' },
          { id: 'w2', left: '¿Dónde…?', right: '¿Dónde consiguen la leña o el gas?' },
          { id: 'w3', left: '¿Por qué…?', right: '¿Por qué prefieren ese combustible?' },
          { id: 'w4', left: '¿Cómo…?', right: '¿Cómo afecta el humo a la salud dentro de la cocina?' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer',
          prompt: 'Escribe tu **pregunta de investigación** y, debajo, **entre 4 y 6 preguntas clave**. Revísalas con los cuatro filtros: relacionada, clara, investigable, no repetida.' },
        { minWords: 30, placeholder: 'Pregunta de investigación: ¿…?\n1. ¿…?\n2. ¿…?\n3. ¿…?\n4. ¿…?',
          model: 'Pregunta de investigación: ¿Cómo es un día de trabajo de un panadero en mi pueblo?\n1. ¿A qué hora empieza y termina su jornada?\n2. ¿Qué ingredientes y herramientas usa?\n3. ¿Qué panes prepara y cómo los hornea?\n4. ¿Cómo aprendió el oficio?\n5. ¿Qué dificultades tiene su trabajo?',
          rubric: [
            'Escribí mi pregunta de investigación',
            'Escribí entre 4 y 6 preguntas clave',
            'Todas se relacionan con mi pregunta y son claras',
            'Ninguna se repite ni es de gusto personal',
            'Usé signos de interrogación de apertura y cierre',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.2'], prompt: 'Investigación: "¿Cómo se elabora la cerámica en mi comunidad?". ¿Cuál **no** es una buena pregunta clave?' },
        { options: [
          { id: 'a', text: '¿Qué color me gusta más para una olla?' },
          { id: 'b', text: '¿De dónde sacan el barro?' },
          { id: 'c', text: '¿Cómo cuecen las piezas?' },
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
    gancho: 'Para saber cuántos habitantes tiene tu municipio, ¿le preguntas a tu vecino o buscas en otro lugar?',
    objetivos: [
      'Distinguir fuentes de información escritas y tecnológicas',
      'Elegir la fuente adecuada según lo que se quiere averiguar',
      'Reconocer que las personas también pueden ser fuentes de información',
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
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'conocer',
          prompt: 'Para investigar **cuántos habitantes tiene tu municipio**, ¿qué fuente es más confiable?',
          explain: 'El Instituto Nacional de Estadística (INE) es la institución que hace los censos del país. Una opinión o un rumor no son datos confiables.' },
        { options: [
          { id: 'a', text: 'Los datos del censo publicados por el Instituto Nacional de Estadística', icon: 'BarChart3' },
          { id: 'b', text: 'Lo que calcula a ojo un vecino', icon: 'User', feedback: 'Tu vecino puede saber mucho del pueblo, pero no ha contado a todos los habitantes.' },
          { id: 'c', text: 'Un mensaje en cadena que alguien reenvió', icon: 'MessageCircle', feedback: 'No sabemos quién lo escribió ni de dónde sacó el dato.' },
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
          hint: '¿Está impresa en papel (escrita) o necesita un aparato para consultarla (tecnológica)?' },
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
          explain: 'Documentos oficiales para leyes y acuerdos; el INE para población; medios locales para noticias recientes; personas para conocer cómo funciona algo de la comunidad.' },
        { leftTitle: 'Quiero saber…', rightTitle: 'Fuente', pairs: [
          { id: 'n1', left: 'Qué dicen los Acuerdos de Paz', leftIcon: 'ScrollText', right: 'El texto de los acuerdos en un libro o documento oficial' },
          { id: 'n2', left: 'Cuántos habitantes tiene mi municipio', leftIcon: 'BarChart3', right: 'Los datos del censo del Instituto Nacional de Estadística' },
          { id: 'n3', left: 'Qué pasó ayer en la feria del pueblo', leftIcon: 'Newspaper', right: 'El periódico o la radio local' },
          { id: 'n4', left: 'Cómo se organiza el COCODE de mi comunidad', leftIcon: 'Users', right: 'Una entrevista a un miembro del COCODE' },
          { id: 'n5', left: 'Qué significa la palabra "cronograma"', leftIcon: 'BookOpen', right: 'Un diccionario' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer',
          prompt: 'Daniela investiga "¿Cómo es un día de trabajo de un panadero en mi pueblo?". ¿Cuál es su **fuente principal**?',
          explain: 'Nadie sabe mejor cómo es su día que el propio panadero. Un libro puede ayudar con información general sobre el pan, pero no sobre el panadero de su pueblo.' },
        { options: [
          { id: 'a', text: 'Una entrevista al panadero y la observación de su trabajo' },
          { id: 'b', text: 'Una enciclopedia sobre la historia del pan en Europa', feedback: 'Habla del pan en general, no del panadero de su pueblo.' },
          { id: 'c', text: 'Un video de recetas de pasteles', feedback: 'No responde cómo es el día de trabajo del panadero.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer',
          prompt: 'Copia **tres** de tus preguntas clave y escribe junto a cada una **qué fuente** usarás y de **qué tipo** es (escrita, tecnológica o persona). Usa al menos **dos tipos** distintos.' },
        { minWords: 30, placeholder: '1. ¿…? → Fuente: … (tipo: …)\n2. ¿…? → …\n3. ¿…? → …',
          model: '1. ¿Cómo aprendió el oficio? → Fuente: entrevista a don Julio, el panadero (persona).\n2. ¿Qué ingredientes usa? → Fuente: observación en la panadería y el libro de Ciencias Naturales sobre la levadura (escrita).\n3. ¿Qué panes tradicionales hay en Guatemala? → Fuente: un video educativo de una institución cultural (tecnológica).',
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
          { id: 'e2', left: '¿Cómo se previene la gripe, según el personal de salud?', right: 'Folleto o sitio web del Ministerio de Salud' },
          { id: 'e3', left: '¿Cómo se celebraba la feria hace 50 años?', right: 'Entrevista a una persona mayor del pueblo' },
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
    gancho: 'Un anuncio dice: "¡Con este imán tendrás electricidad gratis para siempre!". ¿Le crees? ¿Cómo lo averiguas?',
    objetivos: [
      'Aplicar cinco preguntas para evaluar si una fuente es confiable',
      'Distinguir un texto que informa de uno que quiere vender o convencer sin pruebas',
      'Comparar dos fuentes sobre el mismo tema',
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
      brief: 'Animación 2D de 50 s. Una pantalla muestra un texto sobre energía; una lupa recorre sus partes y aparece un ícono por pregunta: persona (¿Quién lo escribió?), calendario (¿Cuándo?), diana (¿Para qué: informar o vender?), libro (¿De dónde saca sus datos?), dos documentos lado a lado (¿Otras fuentes dicen lo mismo?). Cada respuesta se marca con un cheque verde. Luego un anuncio con estrellas y "¡GRATIS PARA SIEMPRE!" recibe tachas rojas. Narración en español, subtítulos. Sin marcas.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'conocer',
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
          prompt: 'Lee **dos fuentes** que encontró Mateo sobre la electricidad en Guatemala. Aplica las cinco preguntas y responde.',
          hint: 'Fíjate en quién escribió cada texto, para qué y si explica de dónde saca lo que dice.' },
        { genre: 'Dos fuentes para comparar', heading: '¿De dónde viene la electricidad?', passage:
          'FUENTE A. Libro de Ciencias Naturales para sexto grado, capítulo "La energía", edición reciente.\n\n' +
          '"La electricidad que llega a nuestras casas se produce en centrales generadoras. En Guatemala hay varias formas de producirla. En las hidroeléctricas, la fuerza del agua de los ríos hace girar unas máquinas llamadas turbinas. En algunos ingenios, se quema el bagazo, que es lo que sobra de la caña de azúcar después de exprimirla. En las plantas geotérmicas se aprovecha el calor que hay bajo la tierra cerca de los volcanes. También hay parques de paneles solares y de aerogeneradores que usan el sol y el viento, y plantas que queman combustibles como el búnker o el carbón. Después, la electricidad viaja por cables de alta tensión y llega a las casas a través de la red de distribución."\n\n' +
          'FUENTE B. Anuncio compartido en una red social, sin nombre de autor ni fecha.\n\n' +
          '"¡¡ATENCIÓN!! Las empresas no quieren que sepas esto: con nuestro IMÁN MÁGICO tendrás electricidad GRATIS PARA SIEMPRE. Solo pégalo en tu contador y la factura bajará a cero. ¡Miles de personas ya lo usan! Últimas unidades a Q99. ¡Compra YA!"',
          questions: [
            { q: '¿Quién escribió la Fuente A?', options: [
              { id: 'a', text: 'Los autores de un libro de texto de Ciencias Naturales' },
              { id: 'b', text: 'No se sabe' },
              { id: 'c', text: 'Una empresa que vende imanes' },
            ], correct: 'a', why: 'La Fuente A dice su origen: un libro de Ciencias para sexto, edición reciente.' },
            { q: '¿Cuál es la intención principal de la Fuente B?', options: [
              { id: 'a', text: 'Vender un producto' },
              { id: 'b', text: 'Explicar cómo se produce la electricidad' },
              { id: 'c', text: 'Informar sobre los volcanes' },
            ], correct: 'a', why: '"Últimas unidades a Q99. ¡Compra YA!": su propósito es vender.' },
            { q: '¿Qué señales muestran que la Fuente B **no** es confiable?', options: [
              { id: 'a', text: 'No tiene autor ni fecha, promete algo exagerado y no explica de dónde saca lo que dice' },
              { id: 'b', text: 'Está escrita con palabras difíciles' },
              { id: 'c', text: 'Es demasiado larga' },
            ], correct: 'a', why: 'Faltan autor y fecha, hay promesas exageradas ("gratis para siempre") y ninguna prueba.' },
            { q: 'Mateo necesita explicar **cómo se produce la electricidad en Guatemala**. ¿Qué debe hacer?', options: [
              { id: 'a', text: 'Usar la Fuente A y compararla con otra fuente confiable' },
              { id: 'b', text: 'Usar la Fuente B porque "miles de personas ya lo usan"' },
              { id: 'c', text: 'Mezclar las dos fuentes por igual' },
            ], correct: 'a', why: 'La Fuente A es confiable; comparar con otra fuente seria (otro libro, un sitio de una institución) la confirma.' },
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
          prompt: 'Dos fuentes dan datos distintos sobre la altura del volcán Tajumulco: un blog personal sin fecha y el sitio de una institución geográfica oficial. ¿Qué dato usarías?',
          explain: 'La institución oficial es especialista en medir el territorio y dice de dónde vienen sus datos. Ante una diferencia, confía en la fuente experta y, si puedes, confirma con una tercera.' },
        { options: [
          { id: 'a', text: 'El de la institución geográfica oficial, y lo confirmaría con otra fuente seria' },
          { id: 'b', text: 'El del blog, porque es más fácil de leer', feedback: 'Que sea fácil de leer no lo hace confiable.' },
          { id: 'c', text: 'Sacaría un promedio de los dos', feedback: 'Promediar un dato confiable con uno dudoso no da un dato correcto.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer',
          prompt: 'Elige **una fuente** que usarás en tu mini-investigación (un libro, un folleto, un sitio web o una persona). Respóndele las **cinco preguntas** y decide si es confiable.' },
        { minWords: 35, placeholder: 'Fuente: …\n¿Quién? …\n¿Cuándo? …\n¿Para qué? …\n¿Datos? …\n¿Coincide? …\nConclusión: …',
          model: 'Fuente: libro de Ciencias Naturales de sexto grado.\n¿Quién? Autores de un libro escolar revisado para escuelas.\n¿Cuándo? Edición de hace dos años.\n¿Para qué? Para enseñar, no vende nada.\n¿Datos? Explica el ciclo del agua con dibujos y ejemplos.\n¿Coincide? Sí, con lo que me explicó el conserje sobre el nacimiento.\nConclusión: es confiable para mi pregunta sobre el origen del agua.',
          rubric: [
            'Nombré la fuente',
            'Respondí las cinco preguntas',
            'Mi conclusión se basa en las respuestas',
            'Escribí con oraciones claras',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3'], prompt: '¿Cuál fuente es **más confiable** para saber cómo prevenir el dengue?' },
        { options: [
          { id: 'a', text: 'Un folleto del Ministerio de Salud con fecha reciente' },
          { id: 'b', text: 'Un audio anónimo que circula en un chat' },
          { id: 'c', text: 'Un anuncio que vende un repelente "milagroso"' },
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
      'Elegir palabras clave para buscar información en libros e internet',
      'Buscar de forma segura en fuentes tecnológicas',
      'Registrar los datos de cada fuente en una ficha',
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
      brief: 'Ilustración de una ficha de cartulina rayada, con clip, sobre un cuaderno. Campos escritos a mano con letra clara: "Autor: (institución o persona)", "Título: Ciencias Naturales 6", "Año: 2024", "Editorial o sitio: (nombre genérico)", "¿Qué información me dio?: el ciclo del agua, pág. 34". Al lado, una segunda ficha para una entrevista: "Persona: don Rafael, conserje de la escuela; Fecha: 12 de marzo". Sin marcas reales.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'conocer',
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
          prompt: 'Mira cómo Daniela prepara su búsqueda sobre el panadero.' },
        { icon: 'Key', problem: 'Pregunta clave de Daniela: "¿Qué hace la levadura en la masa del pan?"',
          steps: [
            { text: 'Quito las palabras de relleno: ¿qué, hace, la, en, del.' },
            { text: 'Me quedan las palabras que nombran: **levadura**, **masa**, **pan**.', why: 'Son sustantivos: nombran el tema.' },
            { text: 'En el libro de Ciencias busco "levadura" en el índice: está en la **L**, página 58.' },
            { text: 'En internet, con mi papá, escribo: "levadura masa pan" y elijo el resultado de un museo de ciencias.' },
          ],
          answer: 'Palabras clave: **levadura, masa, pan**. Fuentes: libro (índice, pág. 58) y sitio de una institución educativa.',
          tip: 'Si no aparece nada, cambia una palabra por un sinónimo: "fermentación" en lugar de "levadura".' },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer',
          prompt: 'Toca las **palabras clave** de esta pregunta de investigación.',
          hint: 'Busca las palabras que nombran el tema, las personas, el lugar y la acción principal (¿para qué usan los combustibles?). Deja fuera palabras de relleno como "qué", "usan", "las", "de", "mi", "para".',
          explain: 'Combustibles, cocinar, familias y aldea nombran lo esencial. Con ellas puedes buscar en un índice o en internet.' },
        { target: 'palabras clave', text: '¿Qué {combustibles} usan las {familias} de mi {aldea} para {cocinar}?' },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3', 'l1:8.2.4'], ambito: 'conocer', title: 'La ficha de la fuente',
          prompt: 'Cada vez que uses una fuente, anota sus datos en una **ficha**. Observa la imagen y toca cada tarjeta.' },
        { icon: 'FileText', body: 'La ficha te permite volver a la fuente, comprobar un dato y, sobre todo, **decir de dónde sacaste la información** (lo verás la próxima semana).', reveal: [
          { icon: 'BookOpen', front: 'Libro', back: 'Autor, título, año, editorial y **páginas** que usaste.' },
          { icon: 'Monitor', front: 'Sitio web o video', back: 'Institución o autor, título del artículo o video, nombre del sitio y **fecha en que lo consultaste**.' },
          { icon: 'Mic', front: 'Entrevista', back: 'Nombre de la persona, qué hace o por qué sabe del tema, y **fecha** de la entrevista.' },
          { icon: 'PenLine', front: 'Qué me dio', back: 'Una línea con la información que te sirvió: "explica qué es el bagazo".' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], ambito: 'hacer',
          prompt: 'Completa la ficha de la **entrevista** que hizo Sofía.',
          explain: 'En una entrevista se registra quién es la persona, por qué sabe del tema, la fecha y qué información dio.' },
        { text: 'Tipo de fuente: [[entrevista]]. Persona: don Rafael, [[conserje]] de la escuela desde hace 15 años. Fecha: 12 de marzo. Qué información me dio: el agua viene de un [[nacimiento]] en el cerro y llega por [[tubería]] hasta el tanque.',
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
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3'], prompt: 'Pregunta: "¿Cómo se elabora la cerámica en Chinautla?". ¿Cuáles son las mejores **palabras clave**?' },
        { options: [
          { id: 'a', text: 'cerámica, Chinautla, elaboración' },
          { id: 'b', text: 'cómo, se, en' },
          { id: 'c', text: 'cosas de barro bonitas' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3', 'l1:4.2.2'], prompt: 'Buscas "turbina" en el **índice alfabético** de un libro. ¿Entre qué palabras aparecerá?' },
        { options: [
          { id: 'a', text: 'Entre "tubería" y "volcán"' },
          { id: 'b', text: 'Entre "agua" y "bagazo"' },
          { id: 'c', text: 'Entre "tubería" y "tierra"' },
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
