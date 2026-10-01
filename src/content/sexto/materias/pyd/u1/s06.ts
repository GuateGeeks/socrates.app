/**
 * Productividad y Desarrollo · Unidad 1 · Semana 6 — Raíces que sostienen.
 * Construcción básica de un proyecto escolar con proyección a la comunidad (partes,
 * elección con datos, presupuesto) y activación del proyecto personal para la feria escolar.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's06-pyd-1',
    title: 'Construir un proyecto escolar y presentarlo en la feria',
    icon: 'ClipboardList',
    minutes: 15,
    gancho: '"Sembremos árboles" es una buena idea. Pero, ¿cuántos?, ¿dónde?, ¿quién?, ¿con qué dinero? Una idea se vuelve proyecto cuando responde esas preguntas.',
    objetivos: [
      'Explicar qué es un proyecto y sus partes',
    ],
    resumen: [
      'Un proyecto es un conjunto de actividades planificadas para lograr un objetivo, en un tiempo definido y con recursos. Puede ser hacia dentro de la escuela, hacia la comunidad o para mejorar los ingresos de familias con pocos recursos.',
      'Partes de un proyecto: nombre, problema (¿por qué?), objetivo (¿para qué?), actividades (¿qué haremos?), recursos y presupuesto (¿con qué?), responsables (¿quién?), cronograma (¿cuándo?) y evaluación (¿cómo sabremos si funcionó?).',
      'El presupuesto suma el costo de todos los recursos: cantidad × precio de cada cosa, y luego el total.',
      'En una feria escolar interactiva cada proyecto se presenta con un stand, una demostración y una explicación corta; se escuchan las opiniones para mejorar.',
    ],
    media: {
      id: 's06-pyd-1-feria', kind: 'video', title: 'Nuestra feria de proyectos', aspect: '16:9', duration: 60,
      alt: 'Video animado de una feria escolar: stands con un vivero, un filtro de agua casero, un huerto en llantas y un rincón de lectura; estudiantes explican y visitantes preguntan.',
      brief: 'Video animado de 60 s en el patio de una escuela rural guatemalteca decorado con papel de china. Cuatro stands de estudiantes (grupos mixtos): (1) vivero de arbolitos en bolsas, (2) cosecha de agua de lluvia con un tonel y canaleta, (3) huerto en llantas recicladas, (4) rincón de lectura con cajas. En cada stand: cartel con nombre y objetivo, una demostración, y un estudiante que explica en 30 segundos. Familias y vecinos preguntan y dejan comentarios en tarjetas. Narración: "Un proyecto se planifica, se hace y se comparte". Subtítulos, sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:4.1.1'], ambito: 'conocer', title: '¿Qué es un proyecto?',
          prompt: 'Un **proyecto** es un conjunto de **actividades planificadas** para lograr un **objetivo**, en un **tiempo** definido y con **recursos**. Según a quién beneficia, hay varios tipos. Toca cada uno.' },
        { icon: 'ClipboardList', body: 'Un buen proyecto escolar puede empezar dentro de la escuela y **proyectarse** hacia la comunidad.', reveal: [
          { icon: 'School', front: 'Hacia dentro de la escuela', back: 'Mejora la escuela: un rincón de lectura, turnos de limpieza, un botiquín.' },
          { icon: 'Users', front: 'Hacia la comunidad', back: 'Beneficia a vecinos y familias: reforestar el nacimiento de agua, limpiar el río, un vivero para la aldea.' },
          { icon: 'PiggyBank', front: 'Para mejorar ingresos', back: 'Ayuda a familias con pocos recursos: enseñar a hacer abono para vender, un huerto que produzca hortalizas para el mercado.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:4.1.1'], ambito: 'conocer', title: 'Las partes de un proyecto',
          prompt: 'Cada parte del proyecto **responde una pregunta**. Toca cada tarjeta.' },
        { icon: 'ListChecks', body: 'Si a tu proyecto le falta una respuesta, le falta una parte.', reveal: [
          { icon: 'Search', front: 'Problema y objetivo', back: '**Problema:** ¿por qué lo hacemos? **Objetivo:** ¿para qué? Ejemplo: "Producir 200 arbolitos para reforestar el nacimiento".' },
          { icon: 'ListOrdered', front: 'Actividades', back: '¿**Qué** haremos, paso a paso? Llenar bolsas, sembrar semillas, regar, trasplantar.' },
          { icon: 'Coins', front: 'Recursos y presupuesto', back: '¿**Con qué**? Materiales, herramientas y cuánto cuestan: **cantidad × precio**, y el total.' },
          { icon: 'Users', front: 'Responsables', back: '¿**Quién** hace cada actividad? Todos tienen una tarea.' },
          { icon: 'CalendarDays', front: 'Cronograma', back: '¿**Cuándo**? Qué se hace cada semana o cada mes.' },
          { icon: 'ClipboardCheck', front: 'Evaluación', back: '¿**Cómo sabremos** si funcionó? Por ejemplo: contar cuántos arbolitos sobrevivieron.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:4.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto: el presupuesto del vivero',
          prompt: 'El **presupuesto** dice cuánto cuesta el proyecto. Mira cómo se calcula (precios supuestos).' },
        { icon: 'Calculator', problem: 'Para el vivero se necesitan **200 bolsas** a **Q0.50** cada una, **semillas** por **Q35** y **abono** por **Q40**. ¿Cuánto cuesta el proyecto?',
          steps: [
            { text: '**Bolsas:** cantidad × precio = 200 × Q0.50 = **Q100**.', why: 'Medio quetzal por bolsa: 2 bolsas cuestan Q1, así que 200 bolsas cuestan Q100.' },
            { text: '**Semillas:** Q35 (un solo paquete).' },
            { text: '**Abono:** Q40.' },
            { text: '**Total:** Q100 + Q35 + Q40 = **Q175**.' },
            { text: '**¿De dónde saldrá el dinero?** Venta de refacciones Q100 y donación de la cooperativa Q75. Q100 + Q75 = Q175. ✔' },
          ],
          answer: 'El vivero cuesta **Q175** y el grado ya sabe **de dónde** obtendrá ese dinero.',
          tip: 'Cantidad × precio de cada recurso → sumar todo → decir de dónde saldrá el dinero.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:4.1.1'], ambito: 'emprender',
          prompt: '¿Cuál de estas es un **proyecto** y no solo una idea?',
          explain: 'Un proyecto dice **qué**, **cuánto**, **dónde**, **quién**, **cuándo** y **con qué**. Por eso se puede hacer y se puede evaluar.' },
        { options: [
          { id: 'a', text: '"Hay que cuidar el ambiente."', icon: 'Leaf', feedback: 'Es un buen deseo, pero no dice qué se hará ni cómo.' },
          { id: 'b', text: '"Sembraremos 50 árboles en la orilla del río en junio; cada grado cuida 10; pediremos los arbolitos a la municipalidad."', icon: 'TreePine' },
          { id: 'c', text: '"Algún día haremos algo por el río."', icon: 'Waves', feedback: 'No dice qué, cuándo ni quién. Todavía es solo una idea.' },
        ], correct: ['b'] },
      ),
      S.match(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:4.1.1'], prompt: 'Une cada parte del proyecto "Vivero escolar" con lo que dice.',
          hint: 'Piensa qué pregunta responde cada frase: ¿para qué?, ¿con qué?, ¿quién?, ¿cuándo?, ¿cómo sabremos?',
          explain: 'Cada parte responde una pregunta distinta; juntas forman el plan completo.' },
        { leftTitle: 'Parte', rightTitle: 'En el proyecto del vivero', pairs: [
          { id: 'v1', left: 'Objetivo', leftIcon: 'Target', right: 'Producir 200 arbolitos para el nacimiento de agua' },
          { id: 'v2', left: 'Presupuesto', leftIcon: 'Coins', right: 'Bolsas, semillas y abono: Q175 en total' },
          { id: 'v3', left: 'Responsables', leftIcon: 'Users', right: 'La comisión de ambiente de sexto y dos padres de familia' },
          { id: 'v4', left: 'Cronograma', leftIcon: 'CalendarDays', right: 'Sembrar en marzo y trasplantar en junio' },
          { id: 'v5', left: 'Evaluación', leftIcon: 'ClipboardCheck', right: 'Contar en agosto cuántos árboles siguen vivos' },
        ] },
      ),
      S.chart(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:4.1.1'], ambito: 'hacer',
          prompt: 'Los proyectos se eligen **con datos**. Supongamos que los 30 estudiantes de sexto votaron: vivero comunitario **12**, huerto escolar **8**, centro de reciclaje **6** y rincón de lectura **4**. Construye la gráfica de barras con los votos.',
          hint: 'Cada raya de la escala vale 2 votos. Sube cada barra hasta su número.',
          explain: 'La gráfica muestra que el **vivero comunitario** ganó con 12 votos: será el proyecto del grado.' },
        { source: 'Votación de sexto grado (datos supuestos)', max: 14, step: 2, unit: 'votos', categories: [
          { id: 'viv', label: 'Vivero comunitario', icon: 'Sprout', color: 'var(--c-ok)' },
          { id: 'hue', label: 'Huerto escolar', icon: 'Carrot', color: 'var(--c-maiz-strong)' },
          { id: 'rec', label: 'Centro de reciclaje', icon: 'Recycle', color: 'var(--area-cnt)' },
          { id: 'lec', label: 'Rincón de lectura', icon: 'BookOpen', color: 'var(--area-l1)' },
        ], data: [12, 8, 6, 4] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:4.3.1'], ambito: 'conocer', title: 'La feria escolar interactiva',
          prompt: 'En una **feria escolar interactiva** cada estudiante o grupo **activa** su proyecto: lo muestra funcionando y conversa con los visitantes. Toca cada tarjeta.' },
        { icon: 'PartyPopper', body: 'La feria no es un concurso de quién tiene el cartel más bonito: es un lugar para **compartir, aprender y mejorar** los proyectos.', reveal: [
          { icon: 'Store', front: 'El stand', back: 'Una mesa con un **cartel** (nombre, problema, objetivo) y el producto o una maqueta.' },
          { icon: 'Hand', front: 'La demostración', back: 'Muestra el proyecto **funcionando**: cómo se llena una bolsa del vivero, cómo filtra el agua el filtro casero.' },
          { icon: 'Mic', front: 'La explicación corta', back: 'En **un minuto**: qué problema resuelve, cómo funciona y a quién ayuda. Habla claro y mira a tu público.' },
          { icon: 'MessageCircle', front: 'La retroalimentación', back: 'Los visitantes dejan **comentarios y preguntas**. Escúchalos: te ayudan a mejorar tu proyecto.' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.1.1'], ambito: 'hacer',
          prompt: 'Otro grupo hará un proyecto de **cosecha de agua de lluvia** para el huerto. Necesita **3 toneles** a **Q60** cada uno y **una canaleta** de **Q45**. ¿Cuál es el **presupuesto total**?',
          explain: '3 × Q60 = Q180 en toneles. Q180 + Q45 = Q225 en total.' },
        { answer: 225, unit: 'quetzales', misconceptions: [
          { value: 105, msg: 'Contaste un solo tonel. Son 3 toneles: 3 × 60.' },
          { value: 180, msg: 'Ese es el costo de los toneles. Falta sumar la canaleta.' },
        ] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.3.1', 'pyd:4.1.1'], ambito: 'emprender',
          prompt: 'Planifica tu **proyecto personal** para la feria escolar. Puede ser pequeño, pero debe tener todas sus partes.' },
        { goal: 'Diseñar un proyecto personal sencillo, con todas sus partes, listo para presentarlo en la feria escolar.',
          steps: [
            { title: 'Problema y objetivo', detail: 'Escribe qué problema de tu escuela o comunidad quieres atender y para qué lo harás.' },
            { title: 'Actividades, responsables y cronograma', detail: 'Haz una lista de 3 a 5 actividades, di quién te ayudará en cada una (familia, compañeros) y en qué semana la harás.' },
            { title: 'Recursos y presupuesto', detail: 'Anota cada material con su cantidad y precio. Multiplica y suma el total. Prefiere materiales reciclados.' },
            { title: 'Evaluación', detail: 'Escribe cómo sabrás si funcionó (algo que puedas contar u observar).' },
            { title: 'Preparar la feria', detail: 'Haz un cartel con nombre, problema y objetivo; prepara una demostración y practica tu explicación de un minuto.' },
          ],
          evidence: 'Ficha del proyecto (en tu cuaderno) y cartel para el stand de la feria.',
          rubric: ['Mi proyecto tiene problema, objetivo, actividades, presupuesto, responsables, cronograma y evaluación', 'El presupuesto está bien calculado', 'Es posible con los recursos que tengo', 'Puedo explicarlo en un minuto con una demostración'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:4.1.1'], prompt: '¿Cuál es un **proyecto escolar con proyección a la comunidad**?' },
        { options: [
          { id: 'a', text: 'Un vivero escolar que produce arbolitos para reforestar el nacimiento de agua de la aldea' },
          { id: 'b', text: 'Decorar solo el escritorio de la maestra' },
          { id: 'c', text: 'Una fiesta privada del grado' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:4.1.1', 'pyd:4.3.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'El cronograma dice cuándo se hará cada actividad.', answer: true },
          { text: 'Si un proyecto necesita 4 cajas a Q5 cada una, las cajas cuestan Q20.', answer: true },
          { text: 'La evaluación de un proyecto se escribe solo si sobra tiempo.', answer: false, why: 'La evaluación es una parte necesaria: dice cómo sabremos si el proyecto funcionó.' },
          { text: 'En una feria interactiva se muestra el proyecto funcionando y se escuchan comentarios.', answer: true },
        ] },
      ),
      cierre({ areas: ['pyd'], cnb: ['pyd:4.1.1', 'pyd:4.3.1'] },
        ['Nombro las partes de un proyecto', 'Calculo el presupuesto de un proyecto sencillo', 'Planifico mi proyecto personal para la feria'],
        ['Terminaré la ficha de mi proyecto personal esta semana', 'Practicaré mi explicación de un minuto con mi familia'])
    ],
  }),
];
