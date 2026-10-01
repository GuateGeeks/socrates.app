/**
 * Productividad y Desarrollo · Unidad 1 · Semana 5 — Herencias que nos hacen crecer.
 * Herramientas y máquinas simples que usan las culturas (palanca, plano inclinado, cuña,
 * rueda y eje, polea, tornillo): técnica adecuada de manejo y criterios preventivos.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's05-pyd-1',
    title: 'Herramientas y máquinas simples: usarlas bien y con seguridad',
    icon: 'Wrench',
    minutes: 15,
    gancho: 'Un costal de abono pesa mucho. ¿Cómo lo moverías hasta el huerto sin lastimarte la espalda?',
    objetivos: ['Reconocer las seis máquinas simples en herramientas de la casa, el campo y la escuela; usar las herramientas con la técnica adecuada; aplicar criterios preventivos antes, durante y después de usar una herramienta'],
    resumen: [
      'Una herramienta es un objeto que ayuda a hacer un trabajo. Las máquinas simples (palanca, plano inclinado, cuña, rueda y eje, polea y tornillo) reducen la fuerza necesaria o cambian su dirección. Muchas culturas las usan desde hace siglos.',
      'Técnica adecuada: usar cada herramienta para lo que fue hecha, sujetarla bien, trabajar con buena postura (al levantar, doblar las rodillas y mantener la espalda recta) y hacerlo sin prisa.',
      'Criterios preventivos: ANTES revisar su estado y usar equipo de protección (zapatos cerrados, guantes); DURANTE mantener distancia y el espacio despejado; DESPUÉS limpiarla, guardarla y reportar daños.',
      'Las herramientas con filo (machete, hacha, tijeras de podar) las usan personas adultas o se usan solo con su supervisión.',
    ],
    media: {
      id: 's05-pyd-1-maquinas-huerto', kind: 'image', title: 'Máquinas simples en el huerto escolar', aspect: '16:9',
      alt: 'Huerto escolar con una carretilla, una rampa de tabla, un pozo con polea, un azadón y un molino de mano, cada uno con una etiqueta de máquina simple.',
      brief: 'Ilustración de un huerto escolar en Guatemala. Estudiantes con zapatos cerrados y guantes: una niña empuja una carretilla (etiqueta "palanca + rueda"), un niño sube un costal por una tabla inclinada ("plano inclinado"), un adulto saca agua de un pozo con polea ("polea"), un azadón apoyado en la cerca ("cuña: su filo"), un molino de mano para maíz en una mesa ("rueda y eje: la manivela"). Etiquetas limpias con íconos. Un adulto supervisa. Nadie sostiene herramientas con filo apuntando a otros. Sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:3.2.3'], ambito: 'conocer',
          prompt: 'Relaciona cada herramienta con su función y sus cuidados.' },
        { icon: 'Wrench', body: 'Una herramienta adecuada facilita una tarea solo si está en buen estado y se usa con técnica segura. Antes se inspecciona; durante se mantiene el área despejada; después se limpia y guarda.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:3.2.3'], ambito: 'hacer',
          prompt: 'Debes llevar un costal de abono de 25 libras desde la entrada hasta el huerto. ¿Qué harías?',
          explain: 'La **carretilla** es una máquina simple: con ella el peso se reparte entre la rueda y tus brazos, y haces **mucha menos fuerza**. Hoy aprenderás cómo funcionan estas máquinas y cómo usarlas con seguridad.' },
        { options: [
          { id: 'a', text: 'Usar una carretilla', icon: 'Truck' },
          { id: 'b', text: 'Cargarlo solo en la espalda doblándome', icon: 'User', feedback: 'Doblar la espalda con peso puede lastimarla. Es mejor usar una herramienta o pedir ayuda.' },
          { id: 'c', text: 'Arrastrarlo por el suelo', icon: 'Route', feedback: 'El costal se puede romper y cuesta más fuerza. Hay una forma más fácil.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:3.2.3'], ambito: 'conocer', title: 'Las seis máquinas simples',
          prompt: 'Una **máquina simple** es un invento sencillo que **reduce la fuerza** que hacemos o **cambia su dirección**. Hay seis. Toca cada una.' },
        { icon: 'Wrench', body: 'Muchos pueblos las usan desde hace siglos: son una **herencia tecnológica** de la humanidad.', reveal: [
          { icon: 'Scale', front: 'Palanca', back: 'Una barra que gira sobre un punto de apoyo. Ejemplos: **carretilla**, pinzas, **tijeras**, un palo para mover una piedra.' },
          { icon: 'Triangle', front: 'Plano inclinado', back: 'Una **rampa**: subir por ella cuesta menos fuerza que levantar directo. Ejemplo: una tabla para subir costales al pick-up.' },
          { icon: 'Pickaxe', front: 'Cuña', back: 'Un borde afilado que **separa o corta**. Ejemplos: el filo del **hacha**, del **machete** y del **azadón**.' },
          { icon: 'RotateCw', front: 'Rueda y eje', back: 'Una rueda unida a un eje que gira. Ejemplos: la **carreta**, la manivela del **molino de mano** para el maíz.' },
          { icon: 'Anchor', front: 'Polea', back: 'Una rueda con una cuerda que **cambia la dirección** de la fuerza: jalas hacia abajo y la cubeta sube. Ejemplo: el **pozo**.' },
          { icon: 'Hammer', front: 'Tornillo', back: 'Un plano inclinado enrollado. Sujeta y aprieta con poca fuerza. Ejemplos: tornillos, tapas de frascos, la prensa.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:3.2.3'], prompt: 'Une cada herramienta con la **máquina simple** que tiene.',
          hint: 'Piensa qué hace: ¿gira?, ¿corta?, ¿es una rampa?, ¿sube algo jalando una cuerda?',
          explain: 'Reconocer la máquina simple te ayuda a entender cómo usar la herramienta con menos esfuerzo.' },
        { leftTitle: 'Herramienta', rightTitle: 'Máquina simple', pairs: [
          { id: 'h1', left: 'Pozo con cubeta y cuerda', leftIcon: 'Droplet', right: 'Polea' },
          { id: 'h2', left: 'Filo del hacha', leftIcon: 'Pickaxe', right: 'Cuña' },
          { id: 'h3', left: 'Tabla para subir costales', leftIcon: 'Triangle', right: 'Plano inclinado' },
          { id: 'h4', left: 'Manivela del molino de maíz', leftIcon: 'RotateCw', right: 'Rueda y eje' },
          { id: 'h5', left: 'Tijeras', leftIcon: 'Scissors', right: 'Palanca' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:3.2.3'], ambito: 'conocer', title: 'La técnica adecuada',
          prompt: 'Usar bien una herramienta hace el trabajo **más fácil, más rápido y más seguro**. Toca cada regla.' },
        { icon: 'Hand', body: 'La mayoría de accidentes con herramientas pasan por **prisa**, **mala postura** o **usar la herramienta equivocada**.', reveal: [
          { icon: 'Target', front: 'Cada herramienta para su trabajo', back: 'El azadón es para aflojar tierra, no para golpear piedras; las tijeras de papel no son para cortar alambre.' },
          { icon: 'Hand', front: 'Sujetar bien', back: 'Toma la herramienta por el **mango**, con las dos manos si es grande, y con las manos secas.' },
          { icon: 'PersonStanding', front: 'Buena postura', back: 'Para levantar peso: **dobla las rodillas**, mantén la **espalda recta** y sube con la fuerza de las piernas.' },
          { icon: 'Timer', front: 'Sin prisa y con descansos', back: 'El cansancio y la prisa causan accidentes. Trabaja a ritmo constante y descansa.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:3.2.4'], ambito: 'conocer', title: 'Criterios preventivos: antes, durante y después',
          prompt: '**Prevenir** es actuar **antes** de que ocurra un accidente. Toca cada momento.' },
        { icon: 'ShieldCheck', body: 'Las herramientas con **filo** (machete, hacha, tijeras de podar) las usan **personas adultas**, o se usan solo con su **supervisión**.', reveal: [
          { icon: 'Search', front: 'Antes', back: '**Revisa** que el mango no esté rajado ni flojo y que la rueda tenga aire. Ponte **zapatos cerrados** y **guantes**. Pide permiso y supervisión.' },
          { icon: 'Users', front: 'Durante', back: 'Mantén **distancia** de otras personas (al menos dos brazos). Despeja el lugar. **Nunca** apuntes una herramienta hacia alguien ni juegues con ella.' },
          { icon: 'Archive', front: 'Después', back: '**Limpia** la herramienta, guárdala en **su lugar** con el filo protegido y **reporta** si algo se dañó.' },
          { icon: 'Route', front: 'Al transportar', back: 'Lleva las herramientas con el **filo o las puntas hacia abajo** y camina, no corras.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:3.2.3', 'pyd:3.2.4'], ambito: 'hacer', title: 'Ejemplo resuelto: la carretilla en la jornada del huerto',
          prompt: 'Mira cómo Keyla aplica la técnica y la prevención para mover abono con la carretilla.' },
        { icon: 'Truck', problem: 'Keyla debe llevar tres costales de abono al huerto. La carretilla está en la bodega y hay una pequeña rampa de bajada.',
          steps: [
            { text: '**Antes:** revisa que la rueda tenga aire y que los mangos no estén flojos. Se pone zapatos cerrados y guantes.' },
            { text: '**Carga:** pone el peso **cerca de la rueda**, no junto a los mangos.', why: 'La carretilla es una palanca: si la carga está cerca de la rueda (el punto de apoyo), Keyla hace mucha menos fuerza.' },
            { text: '**Postura:** dobla las rodillas, espalda recta, y levanta los mangos con las piernas.' },
            { text: '**Durante:** baja la rampa despacio, sosteniendo firme, y avisa "¡permiso!" a los compañeros.' },
            { text: '**Después:** limpia la carretilla y la guarda en la bodega. Avisa que la rueda está un poco baja de aire.' },
          ],
          answer: 'Keyla movió el abono **con menos esfuerzo** (técnica) y **sin accidentes** (prevención).',
          tip: 'Revisar → cargar bien → buena postura → cuidado al moverse → limpiar, guardar y reportar.' },
      ),
      S.order(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:3.2.3', 'pyd:3.2.4'], ambito: 'hacer', prompt: 'Vas a aflojar la tierra de un tablón con el **azadón**. Ordena los pasos seguros.',
          explain: 'Revisar la herramienta → protegerte → despejar y guardar distancia → trabajar con buena postura → limpiar y guardar.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'z1', text: 'Revisar que el mango esté firme y sin rajaduras', icon: 'Search' },
          { id: 'z2', text: 'Ponerte zapatos cerrados y guantes', icon: 'ShieldCheck' },
          { id: 'z3', text: 'Verificar que nadie esté cerca (dos brazos de distancia)', icon: 'Users' },
          { id: 'z4', text: 'Trabajar con buena postura y a ritmo constante', icon: 'PersonStanding' },
          { id: 'z5', text: 'Limpiar el azadón y guardarlo en la bodega', icon: 'Archive' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:3.2.3'], ambito: 'hacer',
          prompt: 'Con la carretilla, ¿dónde conviene colocar la carga más pesada para hacer **menos fuerza**?',
          explain: 'La carretilla es una palanca: la rueda es el punto de apoyo. Si la carga está **cerca de la rueda**, tus brazos levantan menos peso.' },
        { options: [
          { id: 'a', text: 'Cerca de la rueda' },
          { id: 'b', text: 'Junto a los mangos', feedback: 'Así la carga queda lejos del punto de apoyo y tus brazos soportan casi todo el peso.' },
          { id: 'c', text: 'Da igual dónde se ponga', feedback: 'En una palanca la posición sí importa: cambia la fuerza que necesitas.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:3.2.4'], prompt: 'Antes de usar un azadón, ¿qué **criterio preventivo** aplicas?' },
        { options: [
          { id: 'a', text: 'Revisar que el mango esté firme y usar zapatos cerrados' },
          { id: 'b', text: 'Usarlo lo más rápido posible' },
          { id: 'c', text: 'Prestárselo a un niño pequeño para que practique solo' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:3.2.3', 'pyd:3.2.4'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La polea del pozo cambia la dirección de la fuerza: jalas hacia abajo y la cubeta sube.', answer: true },
          { text: 'El filo del machete es un ejemplo de cuña.', answer: true },
          { text: 'Para levantar algo pesado conviene doblar la espalda y dejar las piernas rectas.', answer: false, why: 'Se doblan las rodillas y se mantiene la espalda recta.' },
          { text: 'Después de usar una herramienta basta con dejarla donde se terminó el trabajo.', answer: false, why: 'Hay que limpiarla, guardarla en su lugar y reportar daños.' },
        ] },
      ),
      cierre({ areas: ['pyd'], cnb: ['pyd:3.2.3', 'pyd:3.2.4'] },
        ['Reconozco las seis máquinas simples en herramientas cotidianas', 'Uso las herramientas con la técnica adecuada', 'Aplico criterios preventivos antes, durante y después'],
        ['Revisaré las herramientas antes de usarlas', 'Guardaré cada herramienta en su lugar después de usarla']),
    ],
  }),
];
