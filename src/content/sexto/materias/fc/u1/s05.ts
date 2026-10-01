/**
 * Formación Ciudadana · Unidad 1 · Semana 5 — Herencias que nos hacen crecer.
 * Progresión: qué es participar y cómo hacerlo en la familia, la escuela y la comunidad →
 * el gobierno del aula y de la escuela: elegir, proponer, servir y rendir cuentas.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Participación social ───────────────────────── */
  lesson({
    id: 's05-fc-1',
    title: 'Participar en casa, en la escuela y en la comunidad',
    icon: 'Hand',
    minutes: 14,
    gancho: '¿Alguna vez te preguntaron tu opinión para decidir algo en tu familia? ¿Cómo te sentiste?',
    objetivos: ['Aplicar un proceso de participación informada, respetuosa e inclusiva'],
    resumen: [
      'Participar es tomar parte en las decisiones y acciones de un grupo: informarse, opinar, proponer, actuar y evaluar.',
      'La niñez tiene derecho a opinar y ser escuchada en lo que le afecta (Convención sobre los Derechos del Niño). Participar también es una responsabilidad: cumplir lo que se acuerda.',
      'En la familia se participa compartiendo tareas y opinando en las decisiones; en la escuela, en comisiones y asambleas; en la comunidad, en jornadas de limpieza, reforestación, festivales y consultas.',
      'Una buena participación es voluntaria, informada y respetuosa, e incluye a todas las personas.',
    ],
    media: {
      id: 's05-fc-1-tres-espacios', kind: 'image', title: 'Tres espacios para participar', aspect: '16:9',
      alt: 'Tres escenas: una familia que decide junta en la mesa, una asamblea de grado que vota a mano alzada y una jornada comunitaria de reforestación.',
      brief: 'Ilustración en tres paneles, estilo plano y colores cálidos. (1) "En la familia": una familia guatemalteca alrededor de la mesa con tortillas; la niña habla y los adultos escuchan; al fondo, un cartel de tareas del hogar repartidas entre todos (niños, niñas y adultos). (2) "En la escuela": asamblea de grado votando a mano alzada, una estudiante anota en el pizarrón. (3) "En la comunidad": vecinos de todas las edades siembran arbolitos en una ladera, un joven con carretilla, una abuela con pala. Sin textos adicionales ni logotipos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:3.2.1'], ambito: 'conocer',
          prompt: 'Reconoce la participación como una acción informada y compartida.' },
        { icon: 'UsersRound', body: 'Participar no es decidir por otras personas: implica informarse, expresar ideas, escuchar experiencias distintas y colaborar. Para identificar barreras escolares, se consulta a quienes recorren esos espacios.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.2.1'], ambito: 'convivir',
          prompt: 'En tu familia van a decidir qué hacer el domingo. ¿Qué acción es **participar**?',
          explain: 'Participar no es solo estar presente: es **tomar parte** en las decisiones y en las acciones. Opinar con respeto y ayudar a organizar es participar.' },
        { options: [
          { id: 'a', text: 'Dar tu idea con respeto y ayudar a preparar lo que se decida', icon: 'Hand' },
          { id: 'b', text: 'Quedarte callado y quejarte después', icon: 'VolumeX', feedback: 'Si no opinas en el momento, tu idea no se toma en cuenta. Quejarse después no ayuda a decidir.' },
          { id: 'c', text: 'Exigir que se haga solo lo que tú quieres', icon: 'Megaphone', feedback: 'Participar es aportar tu idea y escuchar las de los demás, no imponer.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.2.1'], ambito: 'conocer', title: '¿Qué es participar?',
          prompt: '**Participar** es tomar parte en las decisiones y acciones del grupo al que perteneces. Toca cada tarjeta.' },
        { icon: 'Hand', body: 'Participar es un **derecho** (tu voz cuenta) y una **responsabilidad** (cumplir lo que el grupo acuerda).', reveal: [
          { icon: 'MessageCircle', front: 'Un derecho', back: 'La **Convención sobre los Derechos del Niño** dice que las niñas y los niños tienen derecho a **opinar y ser escuchados** en los asuntos que les afectan.' },
          { icon: 'ListChecks', front: 'Una responsabilidad', back: 'Si participas en un acuerdo, te comprometes a **cumplirlo**: llegar a la jornada, hacer tu parte, respetar el resultado de una votación.' },
          { icon: 'Users', front: 'Voluntaria e incluyente', back: 'Nadie debe ser obligado ni excluido. Una buena participación invita a **todas** las personas: niñas, niños, jóvenes, adultos y ancianos.' },
          { icon: 'Brain', front: 'Informada y respetuosa', back: 'Antes de opinar, **infórmate**. Al opinar, **respeta** a quien piensa distinto.' },
        ] },
      ),
      S.order(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.2.1'], prompt: 'La participación sigue un camino. Ordena los **pasos de la participación** de un grupo que quiere mejorar algo.',
          hint: 'No se puede opinar bien sin saber qué pasa, ni evaluar algo que aún no se ha hecho.',
          explain: 'Informarse → opinar → proponer → decidir y actuar → evaluar. Evaluar permite empezar de nuevo, mejorando.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'p1', text: 'Informarse: ¿qué problema hay y por qué?', icon: 'Search' },
          { id: 'p2', text: 'Opinar: escuchar lo que piensa cada persona', icon: 'MessageCircle' },
          { id: 'p3', text: 'Proponer: presentar ideas de solución', icon: 'Lightbulb' },
          { id: 'p4', text: 'Decidir y actuar: elegir una idea y hacer cada quien su parte', icon: 'Hammer' },
          { id: 'p5', text: 'Evaluar: ¿funcionó?, ¿qué mejoramos?', icon: 'ClipboardCheck' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.2.1'], ambito: 'conocer', title: 'Tres espacios para participar',
          prompt: 'Participas en más lugares de los que crees. Toca cada espacio.' },
        { icon: 'Home', body: 'Empieza por lo cercano: la participación en casa y en la escuela te prepara para participar en tu comunidad y en tu país.', reveal: [
          { icon: 'Home', front: 'En la familia', back: 'Compartir las **tareas del hogar** entre todos (niñas y niños por igual), opinar en las decisiones familiares y cuidar a quien lo necesita.' },
          { icon: 'School', front: 'En la escuela', back: 'Participar en **comisiones** (limpieza, deporte, lectura, huerto), en la **asamblea de grado** y en el **gobierno escolar**.' },
          { icon: 'Trees', front: 'En la comunidad', back: 'Unirse a **jornadas** de limpieza o reforestación, a festivales culturales y a consultas del COCODE o la municipalidad.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.2.1'], prompt: '¿En qué espacio ocurre cada forma de participar?',
          hint: 'Piensa dónde sucede: dentro de la casa, dentro de la escuela o en la aldea, barrio o municipio.',
          explain: 'La participación empieza en la familia, sigue en la escuela y se extiende a la comunidad.' },
        { buckets: [
          { id: 'fam', label: 'Familia', icon: 'Home', color: 'var(--c-maiz-strong)' },
          { id: 'esc', label: 'Escuela', icon: 'School', color: 'var(--area-fc)' },
          { id: 'com', label: 'Comunidad', icon: 'Trees', color: 'var(--c-ok)' },
        ], items: [
          { id: 'e1', text: 'Turnarse para lavar los trastos después de la cena', bucket: 'fam' },
          { id: 'e2', text: 'Ser parte de la comisión de lectura del grado', bucket: 'esc' },
          { id: 'e3', text: 'Sembrar árboles en la jornada de la aldea', bucket: 'com' },
          { id: 'e4', text: 'Opinar a dónde ir de paseo con tus papás', bucket: 'fam' },
          { id: 'e5', text: 'Votar en la asamblea de grado', bucket: 'esc' },
          { id: 'e6', text: 'Responder una consulta del COCODE sobre el parque infantil', bucket: 'com' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: participar para mejorar algo',
          prompt: 'Mira cómo un grupo de niñas y niños usó los pasos de la participación.' },
        { icon: 'Trash2', problem: 'En la calle que lleva a la escuela de San Andrés hay basura tirada todos los días. Un grupo de 6.º grado decide hacer algo.',
          steps: [
            { text: '**Informarse:** durante una semana anotan dónde se acumula la basura: casi toda está junto a la tienda y la parada de buses.' },
            { text: '**Opinar:** en la asamblea de grado cada quien da su idea; escuchan también a la señora de la tienda.' },
            { text: '**Proponer:** tres ideas: poner un basurero, hacer carteles y pedir a la municipalidad que pase el camión.' },
            { text: '**Decidir y actuar:** votan por el basurero y los carteles; la señora de la tienda se compromete a vaciarlo. Cada quien tiene una tarea.', why: 'Incluir a la vecina hizo que la solución fuera de todos, no solo del grado.' },
            { text: '**Evaluar:** un mes después cuentan: hay mucha menos basura. Deciden pedir otro basurero en la parada.' },
          ],
          answer: 'Con los **cinco pasos**, el grado participó de forma **informada, incluyente y responsable**, y logró un cambio real.',
          tip: 'Pequeñas acciones bien organizadas también transforman la comunidad.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:3.2.1'], prompt: 'En una asamblea de la comunidad, el presidente dice: "Los jóvenes y las niñas no opinan aquí". ¿Qué principio de la buena participación **no** se está cumpliendo?',
          explain: 'La participación debe ser **incluyente**: todas las personas tienen derecho a opinar sobre lo que les afecta, también la niñez y la juventud.' },
        { options: [
          { id: 'a', text: 'Que sea incluyente', icon: 'Users' },
          { id: 'b', text: 'Que sea en un salón grande', icon: 'Building', feedback: 'El lugar no es lo importante. Fíjate en a quién se deja fuera.' },
          { id: 'c', text: 'Que sea rápida', icon: 'Timer', feedback: 'La rapidez no es un principio de la participación. El problema es la exclusión.' },
        ], correct: ['a'] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:3.2.1'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
        { scene: { icon: 'Trees', text: 'El sábado hay una **jornada de reforestación** en tu aldea. Te comprometiste a ir, pero tus amigos te invitan a jugar a la misma hora.' },
          options: [
            { id: 'a', icon: 'Trophy', text: 'Ir a jugar sin avisar a nadie', consequence: 'En la jornada faltó una persona para la tarea que te tocaba y otros tuvieron que hacerla. Tu palabra pierde valor.', values: ['Irresponsabilidad'], constructive: false },
            { id: 'b', icon: 'Sprout', text: 'Cumplir tu compromiso e invitar a tus amigos a la jornada; juegan después', consequence: 'Siembran más árboles que nunca y luego juegan juntos. Tus amigos quieren volver el próximo año.', values: ['Responsabilidad', 'Participación'], constructive: true },
            { id: 'c', icon: 'MessageCircle', text: 'Si de verdad no puedes ir, avisar con tiempo y proponer otra forma de ayudar', consequence: 'Los organizadores buscan quién te reemplace y tú ayudas a regar los arbolitos el lunes.', values: ['Honestidad', 'Responsabilidad'], constructive: true },
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.2.1'], prompt: '¿Cuál es un ejemplo de **participación social en la comunidad**?' },
        { options: [
          { id: 'a', text: 'Unirse a una jornada de limpieza del río de la aldea' },
          { id: 'b', text: 'Ver televisión toda la tarde' },
          { id: 'c', text: 'Tirar basura en la calle' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Las niñas y los niños tienen derecho a opinar sobre lo que les afecta.', answer: true },
          { text: 'Participar es solo estar presente en una reunión.', answer: false, why: 'Participar es tomar parte: opinar, proponer, actuar y evaluar.' },
          { text: 'Compartir las tareas del hogar es una forma de participar en la familia.', answer: true },
          { text: 'El último paso de la participación es evaluar si funcionó.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Gobierno del aula y de la escuela ───────────────────────── */
  lesson({
    id: 's05-fc-2',
    title: 'El gobierno escolar: elegir, proponer y servir',
    icon: 'Vote',
    minutes: 15,
    gancho: 'Imagina que tu escuela va a elegir a su gobierno escolar mañana. ¿Por quién votarías: por el más popular o por quien tenga las mejores propuestas?',
    objetivos: ['Evaluar la participación y las propuestas del gobierno escolar'],
    resumen: [
      'El gobierno escolar es una organización de estudiantes elegida por voto que representa a sus compañeros, organiza proyectos y trabaja con docentes y dirección. En cada grado también puede haber una directiva de aula.',
      'Cargos frecuentes: presidencia, vicepresidencia, secretaría, tesorería y vocales. Las comisiones (limpieza, deporte, cultura, lectura, huerto) organizan el trabajo.',
      'Una elección democrática sigue pasos: convocatoria, inscripción de planillas, campaña con propuestas, votación secreta, conteo público, toma de posesión y rendición de cuentas.',
      'Una buena propuesta responde a un problema real, es posible con los recursos de la escuela, dice cómo se hará y se puede comprobar si se cumplió.',
    ],
    media: {
      id: 's05-fc-2-eleccion', kind: 'video', title: 'Así elegimos a nuestro gobierno escolar', aspect: '16:9', duration: 75,
      alt: 'Video animado que muestra una elección en una escuela guatemalteca: planillas con carteles, estudiantes votando detrás de una mampara, conteo en voz alta y juramentación.',
      brief: 'Video animado de 75 s. Escenas: (1) Cartel de convocatoria en el corredor. (2) Tres planillas mixtas (niñas y niños) presentan propuestas en carteles: "Rincón de lectura", "Torneo con equipos mixtos", "Huerto escolar". (3) Día de votación: mesa electoral con estudiantes, papeleta sencilla, mampara de cartón, urna transparente, dedo marcado con tinta. (4) Conteo en voz alta frente a todos, rayitas en el pizarrón. (5) Toma de posesión y, meses después, la planilla ganadora presenta su informe en el periódico mural. Narración en español, subtítulos. Sin logotipos de partidos ni nombres reales.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:3.2.2'], ambito: 'conocer',
          prompt: 'Relaciona representación estudiantil, propuestas y bien común.' },
        { icon: 'Vote', body: 'El gobierno escolar representa al estudiantado mediante elección y servicio. Una propuesta responsable parte de una necesidad comprobada, consulta a las personas afectadas y plantea acciones posibles.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.2.2'], ambito: 'convivir',
          prompt: 'Hay elección de gobierno escolar. ¿En qué te fijarías **más** para decidir tu voto?',
          explain: 'Lo más importante son las **propuestas**: ¿resuelven un problema real? ¿se pueden cumplir? Un voto responsable mira ideas, no popularidad ni regalos.' },
        { options: [
          { id: 'a', text: 'En sus propuestas y en si se pueden cumplir', icon: 'ClipboardList' },
          { id: 'b', text: 'En quién regala más dulces', icon: 'Gift', feedback: 'Un regalo dura un momento; un mal gobierno escolar dura todo el año. Fíjate en las propuestas.' },
          { id: 'c', text: 'En quién es mi mejor amigo', icon: 'Heart', feedback: 'La amistad es valiosa, pero para gobernar importan las ideas y la responsabilidad.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.2.2'], ambito: 'conocer', title: '¿Qué es el gobierno escolar?',
          prompt: 'El **gobierno escolar** es una organización de estudiantes **elegida por voto** que representa a sus compañeros y organiza proyectos para mejorar la escuela. Toca cada tarjeta.' },
        { icon: 'School', body: 'Gobernar la escuela es **servir**: escuchar a los compañeros, trabajar con docentes y dirección, y rendir cuentas.', reveal: [
          { icon: 'Users', front: 'Cargos', back: '**Presidencia** (coordina), **vicepresidencia** (apoya y reemplaza), **secretaría** (escribe actas), **tesorería** (cuida y reporta el dinero) y **vocales** (apoyan comisiones).' },
          { icon: 'ClipboardList', front: 'Comisiones', back: 'Grupos de trabajo: limpieza y ambiente, deporte, cultura, lectura, huerto, disciplina y convivencia.' },
          { icon: 'LayoutGrid', front: 'Gobierno del aula', back: 'En cada grado, una **directiva de aula** organiza tareas, turnos y acuerdos del grado.' },
          { icon: 'FileText', front: 'Actas', back: 'Documento donde la secretaría anota lo que se **acordó** en cada reunión, con fecha y firmas.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.2.2'], prompt: 'Une cada cargo con su función principal.',
          hint: 'Recuerda las tarjetas: la secretaría escribe las actas y la tesorería cuida el dinero (el "tesoro") del grupo.',
          explain: 'Cada cargo tiene una responsabilidad clara; así el trabajo se reparte y nadie decide solo.' },
        { leftTitle: 'Cargo', rightTitle: 'Función', pairs: [
          { id: 'c1', left: 'Presidencia', leftIcon: 'Crown', right: 'Coordina las reuniones y representa al grupo' },
          { id: 'c2', left: 'Secretaría', leftIcon: 'PenLine', right: 'Escribe las actas de los acuerdos' },
          { id: 'c3', left: 'Tesorería', leftIcon: 'Coins', right: 'Cuida el dinero e informa cómo se usa' },
          { id: 'c4', left: 'Vocales', leftIcon: 'Users', right: 'Apoyan y coordinan las comisiones' },
        ] },
      ),
      S.order(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.2.2'], prompt: 'Ordena los pasos de una **elección escolar democrática**.',
          hint: 'Primero se anuncia la elección; lo último es informar lo que se hizo en el año.',
          explain: 'Convocatoria → planillas → campaña → votación secreta → conteo público → toma de posesión → rendición de cuentas.' },
        { labels: { start: 'Inicio', end: 'Final' }, items: [
          { id: 'o1', text: 'Se publica la convocatoria con fechas y reglas', icon: 'Megaphone' },
          { id: 'o2', text: 'Se inscriben las planillas con sus candidatos', icon: 'Users' },
          { id: 'o3', text: 'Cada planilla presenta sus propuestas en la campaña', icon: 'ClipboardList' },
          { id: 'o4', text: 'Los estudiantes votan en secreto', icon: 'Vote' },
          { id: 'o5', text: 'Se cuentan los votos frente a todos', icon: 'ListOrdered' },
          { id: 'o6', text: 'La planilla ganadora toma posesión', icon: 'Award' },
          { id: 'o7', text: 'El gobierno escolar rinde cuentas de su trabajo', icon: 'FileText' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.2.2'], ambito: 'hacer', title: 'Ejemplo resuelto: ¿es una buena propuesta?',
          prompt: 'Las propuestas se evalúan con **cuatro preguntas**. Mira cómo se comparan dos propuestas.' },
        { icon: 'Lightbulb', problem: 'Planilla Verde propone: **"Vamos a construir una piscina."** Planilla Azul propone: **"Crearemos un rincón de lectura en el corredor con libros donados y cajas recicladas, abierto en el recreo; cada mes contaremos cuántos libros se prestaron."**',
          steps: [
            { text: '**¿Responde a un problema real?** Verde: no dice qué problema resuelve. Azul: sí, la biblioteca está cerrada en el recreo.' },
            { text: '**¿Es posible con los recursos de la escuela?** Verde: no, una piscina cuesta muchísimo. Azul: sí, usa donaciones y material reciclado.', why: 'Prometer lo imposible engaña a los votantes.' },
            { text: '**¿Dice cómo se hará?** Verde: no. Azul: sí (libros donados, cajas, horario de recreo).' },
            { text: '**¿Se puede comprobar si se cumplió?** Verde: no dice cómo. Azul: sí, contarán los préstamos cada mes.' },
          ],
          answer: 'La propuesta de la **Planilla Azul** es buena: real, posible, explica cómo y se puede comprobar. La de la Verde es una **promesa imposible**.',
          tip: 'Problema real → posible → cómo → se puede comprobar.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.2.2'], prompt: 'Clasifica estas propuestas de campaña: ¿**realista y útil** o **promesa vacía**?',
          hint: 'Usa las cuatro preguntas: problema real, posible, cómo, comprobable.',
          explain: 'Las propuestas realistas se pueden cumplir con los recursos de la escuela y dicen cómo; las promesas vacías suenan bonito pero no se pueden cumplir o no dicen nada concreto.' },
        { buckets: [
          { id: 'ok', label: 'Realista y útil', icon: 'Check', color: 'var(--c-ok)' },
          { id: 'va', label: 'Promesa vacía', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'q1', text: 'Organizar turnos por grado para limpiar el patio cada viernes', bucket: 'ok' },
          { id: 'q2', text: '"Haremos la mejor escuela del mundo"', bucket: 'va', feedback: 'Suena bonito, pero no dice qué problema resuelve ni cómo.' },
          { id: 'q3', text: 'Quitar todas las tareas para siempre', bucket: 'va' },
          { id: 'q4', text: 'Un torneo de fútbol y básquetbol con equipos mixtos en el recreo', bucket: 'ok' },
          { id: 'q5', text: 'Sembrar un huerto con semillas donadas por las familias', bucket: 'ok' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:3.2.2'], ambito: 'convivir',
          prompt: 'Un candidato te ofrece una bolsa de dulces a cambio de tu voto. ¿Qué decisión permite evaluar las propuestas y proteger una elección libre?' },
        { options: [
          { id: 'a', text: 'Aceptar los dulces y votar por quien los regaló' },
          { id: 'b', text: 'Rechazar el regalo, comparar las propuestas y reportar la oferta a la comisión electoral' },
          { id: 'c', text: 'Aceptar los dulces y votar al azar para que nadie se entere' },
        ], correct: ['b'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:3.2.2'], ambito: 'emprender',
          prompt: 'Imagina que te postulas al gobierno escolar. Escribe **una propuesta** que pase las cuatro preguntas: ¿qué problema real resuelve?, ¿con qué recursos?, ¿cómo lo harás? y ¿cómo se comprobará que cumpliste?' },
        { minWords: 40, placeholder: 'Mi propuesta es… porque en mi escuela…',
          model: 'Mi propuesta es poner dos toneles para recolectar agua de lluvia junto al huerto, porque en época seca las plantas se mueren y el chorro de la escuela no alcanza. Pediremos los toneles usados a las familias y la comisión de ambiente los limpiará y pondrá una canaleta del techo. Cada viernes anotaremos cuántas cubetas de agua usamos del tonel; así todos podrán comprobar si funciona.',
          rubric: ['Nombré un problema real de mi escuela', 'Mi propuesta es posible con recursos de la escuela o la comunidad', 'Expliqué cómo se hará y quién lo hará', 'Dije cómo se comprobará que se cumplió'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.2.2'], prompt: '¿Qué oración describe una **participación democrática** en el gobierno escolar?' },
        { options: [
          { id: 'a', text: 'Las planillas presentaron propuestas y los estudiantes votaron en secreto.' },
          { id: 'b', text: 'El director eligió solo al presidente, sin votación.' },
          { id: 'c', text: 'Ganó la planilla que regaló más refacciones.' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.2.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La tesorería del gobierno escolar cuida el dinero e informa cómo se usa.', answer: true },
          { text: 'Los votos se deben contar frente a todos para que haya transparencia.', answer: true },
          { text: '"Construiremos un estadio" es una propuesta realista para un gobierno escolar.', answer: false, why: 'Es una promesa imposible con los recursos de una escuela.' },
          { text: 'Después de ganar, el gobierno escolar ya no tiene que informar nada.', answer: false, why: 'Debe rendir cuentas de su trabajo a todos los estudiantes.' },
        ] },
      ),
      cierre({ areas: ['fc'], cnb: ['fc:3.2.1', 'fc:3.2.2'] },
        ['Explico qué es participar y dónde puedo hacerlo', 'Conozco los cargos y los pasos de la elección del gobierno escolar', 'Distingo una propuesta realista de una promesa vacía'],
        ['Votaré por propuestas y no por regalos', 'Me uniré a una comisión de mi grado o escuela', 'Propondré en casa repartir las tareas del hogar entre todos']),
    ],
  }),
];
