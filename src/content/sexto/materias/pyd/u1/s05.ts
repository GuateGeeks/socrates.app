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
    objetivos: ['Aplicar técnica y criterios preventivos al usar herramientas con máquinas simples'],
    resumen: [
      'Una herramienta es un objeto que ayuda a hacer un trabajo. Las máquinas simples (palanca, plano inclinado, cuña, rueda y eje, polea y tornillo) reducen la fuerza necesaria o cambian su dirección. Muchas culturas las usan desde hace siglos.',
      'El rodillo manual redondeado es una rueda y eje de baja fuerza: permite presionar cierres y tiras reutilizables con presión controlada sobre una mesa estable.',
      'Criterios preventivos: ANTES revisar su estado y usar equipo de protección (zapatos cerrados, guantes); DURANTE mantener distancia y el espacio despejado; DESPUÉS limpiarla, guardarla y reportar daños.',
      'Para usar el rodillo: revisar mango, rueda y eje; mantener los dedos fuera de la trayectoria; detenerse si está flojo, dañado o trabado.',
    ],
    media: {
      id: 's05-pyd-1-maquinas-huerto', kind: 'image', title: 'Máquinas simples en el huerto escolar', aspect: '16:9',
      alt: 'Mesa estable con un rodillo manual redondeado, una carretilla, una rampa, una polea, un azadón y un molino, cada objeto rotulado por su máquina simple.',
      brief: 'Ilustración didáctica de herramientas y máquinas simples. En primer plano, estudiante usa un rodillo manual redondeado de goma sobre una mesa estable: etiqueta "rueda y eje", dedos fuera de la trayectoria y flecha de presión controlada. Al fondo: carretilla (palanca + rueda), tabla inclinada, polea de pozo, azadón apoyado y molino de mano. Recuadro de seguridad del rodillo: revisar mango, rueda y eje; detenerse si está flojo, dañado o trabado. Sin filos en uso ni marcas comerciales.',
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
          { icon: 'RotateCw', front: 'Rueda y eje', back: 'Una rueda unida a un eje que gira. Ejemplos: la carreta, la manivela del molino y el **rodillo manual** que presiona cierres reutilizables.' },
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
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:3.2.3', 'pyd:3.2.4'], ambito: 'conocer', title: 'Técnica del rodillo manual',
          prompt: 'El rodillo manual de goma es una rueda y eje de baja fuerza. Toca cada regla antes de usarlo.' },
        { icon: 'RotateCw', body: 'El rodillo sirve para presionar tiras o cierres sobre una **mesa estable**, no para golpear ni jugar.', reveal: [
          { icon: 'Search', front: 'Revisar', back: 'Comprueba que el mango, la rueda y el eje estén firmes y giren sin trabarse.' },
          { icon: 'PanelTop', front: 'Superficie estable', back: 'Coloca la pieza plana sobre una mesa estable y despejada.' },
          { icon: 'Hand', front: 'Dedos fuera', back: 'Sujeta el mango y mantén los dedos fuera de la trayectoria del rodillo.' },
          { icon: 'Gauge', front: 'Presión controlada', back: 'Haz una pasada lenta con presión controlada; no inclines ni aplastes la herramienta.' },
          { icon: 'OctagonX', front: 'Detenerse', back: 'No uses el rodillo y reporta el daño si el mango está flojo o la rueda está dañada o trabada.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:3.2.4'], ambito: 'conocer', title: 'Criterios preventivos: antes, durante y después',
          prompt: '**Prevenir** es actuar **antes** de que ocurra un accidente. Toca cada momento.' },
        { icon: 'ShieldCheck', body: 'Las herramientas con **filo** (machete, hacha, tijeras de podar) las usan **personas adultas**, o se usan solo con su **supervisión**.', reveal: [
          { icon: 'Search', front: 'Antes', back: '**Revisa** que el mango no esté rajado ni flojo y que la rueda tenga aire. Ponte **zapatos cerrados** y **guantes**. Pide permiso y supervisión.' },
          { icon: 'Users', front: 'Durante', back: 'Mantén **distancia** de otras personas (al menos dos brazos). Despeja el lugar. Al transportar, lleva filos o puntas hacia abajo y camina. **Nunca** apuntes una herramienta hacia alguien ni juegues con ella.' },
          { icon: 'Archive', front: 'Después', back: '**Limpia** la herramienta, guárdala en **su lugar** con el filo protegido y **reporta** si algo se dañó.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:3.2.3', 'pyd:3.2.4'], ambito: 'hacer', title: 'Ejemplo resuelto: fijar una tira reutilizable',
          prompt: 'Mira cómo Keyla usa el rodillo manual para fijar una tira con cierre removible.' },
        { icon: 'RotateCw', problem: 'Una tira táctil ya está alineada sobre su cierre de gancho y felpa. Keyla debe presionarla sin desplazarla.',
          steps: [
            { text: '**Antes:** revisa mango, rueda y eje; el rodillo gira libremente.' },
            { text: 'Coloca la base sobre una **mesa estable** y alinea la tira.' },
            { text: 'Toma el mango y mantiene los **dedos fuera de la trayectoria**.' },
            { text: 'Hace una pasada lenta con **presión controlada**.', why: 'La rueda distribuye la presión sobre la tira.' },
            { text: 'Comprueba que la tira quedó firme; limpia y guarda el rodillo.' },
          ],
          answer: 'La tira queda firme mediante una pasada controlada y una comprobación final segura.',
          tip: 'Revisar → estabilizar → alejar dedos → rodar → comprobar y guardar.' },
      ),
      S.order(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:3.2.3', 'pyd:3.2.4'], ambito: 'hacer', prompt: 'Ordena el uso seguro del **rodillo manual** para fijar una tira reutilizable.',
          explain: 'Revisar → apoyar en superficie estable → mantener dedos fuera → aplicar presión controlada → comprobar y guardar.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'z1', text: 'Revisar mango, rueda y eje', icon: 'Search' },
          { id: 'z2', text: 'Apoyar la base en una mesa estable', icon: 'PanelTop' },
          { id: 'z3', text: 'Mantener los dedos fuera de la trayectoria', icon: 'Hand' },
          { id: 'z4', text: 'Hacer una pasada con presión controlada', icon: 'Gauge' },
          { id: 'z5', text: 'Comprobar la tira, limpiar y guardar', icon: 'Archive' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:3.2.3', 'pyd:3.2.4'], ambito: 'hacer',
          prompt: 'El rodillo manual se traba a mitad de la pasada. ¿Qué acción aplica el criterio preventivo?',
          explain: 'Detente, no fuerces el eje y reporta el daño para usar un rodillo seguro.' },
        { options: [
          { id: 'a', text: 'Detenerse y reportar que el eje está trabado' },
          { id: 'b', text: 'Presionar con más fuerza', feedback: 'Forzar una herramienta trabada puede dañarla o desplazar la pieza.' },
          { id: 'c', text: 'Poner los dedos frente a la rueda para destrabarla', feedback: 'Los dedos siempre permanecen fuera de la trayectoria.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:3.2.4'], prompt: 'Antes de usar un rodillo manual, ¿qué criterio preventivo aplicas?' },
        { options: [
          { id: 'a', text: 'Revisar que mango, rueda y eje estén firmes' },
          { id: 'b', text: 'Usarlo aunque la rueda esté dañada' },
          { id: 'c', text: 'Probarlo sobre una superficie inestable' },
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
