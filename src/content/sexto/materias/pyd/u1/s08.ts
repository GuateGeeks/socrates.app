/**
 * Productividad y Desarrollo · Unidad 1 · Semana 8 — Detectives de la verdad.
 * Práctica voluntaria en la conservación de los recursos naturales desde la propia cultura
 * (milpa, bosques comunales, abono, semillas nativas, cuidado de nacimientos) y organización,
 * con participación de la comunidad, de un centro de información comunitaria que guarde esos
 * saberes.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's08-pyd-1',
    title: 'Guardianes de la naturaleza y de los saberes de mi comunidad',
    icon: 'Sprout',
    minutes: 15,
    gancho: 'Tu abuela siembra maíz, frijol y ayote juntos en la misma milpa. ¿Sabías que así también está cuidando el suelo?',
    objetivos: [
      'Reconocer prácticas culturales de Guatemala que conservan el agua, el suelo, el bosque y las semillas',
      'Explicar qué es el voluntariado y cómo participar de forma segura',
      'Organizar, con la comunidad, un centro de información que guarde estos saberes',
    ],
    resumen: [
      'Muchos pueblos de Guatemala conservan la naturaleza desde su cultura: la milpa (maíz, frijol y ayote juntos) cuida el suelo; los bosques comunales se protegen entre todos; se hace abono con restos de cosecha; se guardan semillas nativas y se respetan los nacimientos de agua.',
      'El voluntariado es dar tu tiempo y tu esfuerzo de forma libre, sin pago, por el bien común. A tu edad se participa con permiso de la familia y con adultos responsables.',
      'Un centro de información comunitaria es un lugar (un rincón de la escuela, la biblioteca o el salón comunal) donde se reúne y se comparte información útil de la comunidad: historias, mapas, fotos, fichas de saberes, calendarios de siembra.',
      'Funciona si participa la comunidad: las abuelas y los abuelos comparten saberes, las familias donan fotos o documentos, los estudiantes hacen fichas y los vecinos lo visitan y lo usan.',
    ],
    media: {
      id: 's08-pyd-1-rincon-saberes', kind: 'image', title: 'El rincón de saberes verdes', aspect: '16:9',
      alt: 'Un rincón de la escuela con estantes de cajas rotuladas (agua, suelo, bosque, semillas), frascos con semillas nativas, un mapa de la comunidad y una abuela contando una historia a estudiantes.',
      brief: 'Ilustración cálida de un rincón en el salón de una escuela rural guatemalteca. Estantes de madera con cajas de cartón decoradas y rotuladas con íconos: gota ("Agua"), montón de tierra ("Suelo"), árbol ("Bosque"), mazorca ("Semillas"). Frascos de vidrio con semillas de maíz de colores, frijol y ayote. En la pared, un mapa dibujado a mano de la aldea con el nacimiento de agua y el bosque comunal marcados, y un calendario de siembra. Una abuela con traje maya conversa con cuatro estudiantes que toman notas en fichas. Un vecino dona una fotografía antigua. Sin marcas ni textos largos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'conocer',
          prompt: '¿Por qué crees que muchas familias siembran **maíz, frijol y ayote juntos** en la milpa?',
          explain: 'Las tres plantas se **ayudan**: el maíz sirve de tutor al frijol, el frijol enriquece el suelo con nitrógeno y las hojas grandes del ayote cubren la tierra, guardan humedad y frenan la maleza. Es un saber cultural que **conserva el suelo**.' },
        { options: [
          { id: 'a', text: 'Porque las plantas se ayudan entre sí y cuidan el suelo', icon: 'Sprout' },
          { id: 'b', text: 'Porque no hay espacio para sembrarlas separadas', icon: 'Square', feedback: 'No es por falta de espacio: es una técnica que beneficia a las tres plantas y al suelo.' },
          { id: 'c', text: 'Porque así se ve más bonito', icon: 'Flower', feedback: 'Puede verse bonito, pero la razón es que las plantas se ayudan y protegen la tierra.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'conocer', title: 'Conservar desde nuestra cultura',
          prompt: 'Los pueblos de Guatemala tienen **saberes** que cuidan la naturaleza desde hace generaciones. Toca cada práctica.' },
        { icon: 'Leaf', body: 'Estos saberes son una **herencia**: si nadie los practica ni los anota, se pueden perder.', reveal: [
          { icon: 'Wheat', front: 'La milpa', back: 'Maíz, frijol y ayote juntos: **protegen y enriquecen el suelo** y dan alimento variado.' },
          { icon: 'Trees', front: 'Bosques comunales', back: 'Bosques que la comunidad **cuida entre todos** con reglas propias. Por ejemplo, los **48 Cantones de Totonicapán** protegen de forma comunitaria un gran bosque que da agua a muchas familias.' },
          { icon: 'Recycle', front: 'Abono y rastrojo', back: 'Devolver a la tierra los **restos de la cosecha** y de la cocina en forma de abono, en vez de quemarlos.' },
          { icon: 'Archive', front: 'Semillas nativas', back: 'Guardar e intercambiar **semillas criollas** de maíz y frijol, adaptadas al clima de cada lugar.' },
          { icon: 'Droplet', front: 'Respeto a los nacimientos', back: 'Cuidar el **bosque alrededor** de los nacimientos de agua y no contaminarlos: el agua es de todos.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'Une cada práctica cultural con el **recurso natural** que conserva.',
          hint: 'Pregúntate: ¿qué protege cada práctica: el agua, el suelo, el bosque o la variedad de semillas?',
          explain: 'Cada saber tradicional protege un recurso distinto; juntos sostienen la vida de la comunidad.' },
        { leftTitle: 'Práctica', rightTitle: 'Recurso que conserva', pairs: [
          { id: 'c1', left: 'Sembrar maíz, frijol y ayote juntos', leftIcon: 'Wheat', right: 'La fertilidad del suelo' },
          { id: 'c2', left: 'Cuidar los árboles alrededor del nacimiento', leftIcon: 'Droplet', right: 'El agua' },
          { id: 'c3', left: 'Guardar semillas criollas cada cosecha', leftIcon: 'Archive', right: 'La variedad de maíces y frijoles' },
          { id: 'c4', left: 'Turnarse para vigilar el bosque comunal', leftIcon: 'Trees', right: 'El bosque' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'conocer', title: 'El voluntariado: dar tiempo por el bien común',
          prompt: 'Practicar estos saberes también es una forma de **voluntariado**. Toca cada tarjeta.' },
        { icon: 'HandHeart', body: 'Ser voluntario no es solo "ayudar": es **comprometerse** y cumplir, como cualquier trabajo importante.', reveal: [
          { icon: 'Heart', front: '¿Qué es?', back: 'Dar tu **tiempo y esfuerzo** de forma **libre** y **sin pago**, para el **bien común**.' },
          { icon: 'Sprout', front: '¿Qué puedes hacer?', back: 'Ayudar en un **vivero**, sembrar árboles en una jornada, recoger basura del río, guardar semillas con tu familia, registrar saberes de los mayores.' },
          { icon: 'ShieldCheck', front: 'Con seguridad', back: 'Siempre con **permiso de tu familia** y con **adultos responsables**. Nada de acercarse a barrancos, ríos crecidos ni usar herramientas con filo solo.' },
          { icon: 'ListChecks', front: 'Con compromiso', back: 'Si te apuntas, **cumple**: llega a tiempo, haz tu parte y avisa si no puedes.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.3.2'], ambito: 'conocer', title: 'Un centro de información comunitaria',
          prompt: 'Los saberes se pierden si nadie los guarda. Un **centro de información comunitaria** los reúne y los comparte. Toca cada tarjeta.' },
        { icon: 'Library', body: 'La información de la comunidad es **de la comunidad**: por eso su centro se organiza **con** ella, no solo para ella.', reveal: [
          { icon: 'Home', front: '¿Qué es?', back: 'Un lugar (un rincón de la escuela, la biblioteca o el salón comunal) donde se **guarda y se comparte** información útil de la comunidad.' },
          { icon: 'FileText', front: '¿Qué guarda?', back: '**Fichas** de saberes, historias de los mayores, **mapas** de la aldea, fotos antiguas, calendarios de siembra, contactos útiles.' },
          { icon: 'Users', front: '¿Quiénes participan?', back: 'Abuelas y abuelos **comparten saberes**; familias **donan** fotos y documentos; estudiantes **hacen fichas** y ordenan; vecinos **lo visitan** y lo usan.' },
          { icon: 'Megaphone', front: '¿Cómo se promueve?', back: 'Invitando en asambleas, con carteles y anuncios en la radio comunitaria, y abriéndolo en horarios en que la gente pueda llegar.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.3.2', 'pyd:5.5.2'], ambito: 'emprender', title: 'Ejemplo resuelto: el "Rincón de saberes verdes"',
          prompt: 'Mira cómo el grado de sexto organizó un centro de información **con** la comunidad.' },
        { icon: 'Library', problem: 'En la aldea, muchos jóvenes ya no saben cómo se guardan las semillas ni por qué se cuida el bosque del nacimiento. Sexto quiere que esos saberes no se pierdan.',
          steps: [
            { text: '**Invitar:** en la reunión de padres y en la asamblea del COCODE explican la idea e invitan a participar.', why: 'Si la comunidad participa desde el inicio, siente el centro como suyo y lo usa.' },
            { text: '**Recoger:** cada estudiante entrevista a una persona mayor sobre una práctica (semillas, milpa, abono, bosque) y escribe una **ficha**.' },
            { text: '**Ordenar:** clasifican las fichas en cajas por tema: Agua, Suelo, Bosque y Semillas. Una familia dona un estante.' },
            { text: '**Abrir y compartir:** abren el rincón el día de mercado; los mayores cuentan sus historias y los vecinos pueden consultar las fichas.' },
            { text: '**Mantener:** una comisión de voluntarios cuida el rincón y cada mes agrega nuevas fichas.' },
          ],
          answer: 'El rincón guarda los saberes **de** la comunidad, **con** la comunidad. Así la información sirve para conservar la naturaleza.',
          tip: 'Invitar → recoger → ordenar → abrir y compartir → mantener.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.3.2'], prompt: 'Ayuda a ordenar las fichas del rincón. ¿En qué caja va cada una?',
          hint: 'Lee de qué recurso habla cada ficha: agua, suelo, bosque o semillas.',
          explain: 'Ordenar por temas hace que la información sea fácil de encontrar y de usar.' },
        { buckets: [
          { id: 'agu', label: 'Agua', icon: 'Droplet', color: 'var(--area-cnt)' },
          { id: 'sue', label: 'Suelo', icon: 'Layers', color: 'var(--c-maiz-strong)' },
          { id: 'bos', label: 'Bosque', icon: 'Trees', color: 'var(--c-ok)' },
          { id: 'sem', label: 'Semillas', icon: 'Wheat', color: 'var(--area-pyd)' },
        ], layout: 'grid2', items: [
          { id: 'f1', text: 'Cómo protegía la aldea su nacimiento de agua hace 50 años', bucket: 'agu' },
          { id: 'f2', text: 'Receta de abono con restos de cocina y rastrojo', bucket: 'sue' },
          { id: 'f3', text: 'Las reglas del turno para vigilar el bosque comunal', bucket: 'bos' },
          { id: 'f4', text: 'Cómo guarda doña Juana el maíz amarillo para la próxima siembra', bucket: 'sem' },
          { id: 'f5', text: 'Por qué se hacen curvas a nivel en la ladera', bucket: 'sue' },
          { id: 'f6', text: 'Qué árboles nativos se usan para reforestar', bucket: 'bos' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.3.2'], ambito: 'emprender', prompt: 'Ordena los pasos para organizar un centro de información **con la participación de la comunidad**.',
          explain: 'Invitar → recoger saberes → ordenar → abrir y compartir → mantener con voluntarios.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'o1', text: 'Invitar a familias y vecinos en una asamblea', icon: 'Megaphone' },
          { id: 'o2', text: 'Entrevistar a los mayores y escribir fichas', icon: 'NotebookPen' },
          { id: 'o3', text: 'Ordenar las fichas por temas', icon: 'Archive' },
          { id: 'o4', text: 'Abrir el rincón y compartir con la comunidad', icon: 'Library' },
          { id: 'o5', text: 'Mantenerlo con una comisión de voluntarios', icon: 'HandHeart' },
        ] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2', 'pyd:1.3.2'], ambito: 'emprender',
          prompt: 'Sé guardián o guardiana: registra un saber de tu comunidad y planifica una acción voluntaria para practicarlo.' },
        { goal: 'Escribir una ficha de un saber cultural que conserva la naturaleza y planificar una acción voluntaria segura para practicarlo.',
          steps: [
            { title: 'Elige a quién entrevistar', detail: 'Una abuela, un abuelo o una persona mayor de tu familia o comunidad, con permiso de tu familia.' },
            { title: 'Pregunta', detail: '¿Qué práctica usaban para cuidar el agua, el suelo, el bosque o las semillas? ¿Cómo se hace? ¿Por qué es importante?' },
            { title: 'Escribe la ficha', detail: 'Título, tema (agua, suelo, bosque o semillas), quién te lo contó, cómo se hace y para qué sirve. Agrega un dibujo.' },
            { title: 'Planifica tu acción voluntaria', detail: 'Elige cómo practicarlo: guardar semillas con tu familia, ayudar en el vivero o en una jornada de reforestación. Anota cuándo y con qué adulto.' },
            { title: 'Comparte', detail: 'Lleva tu ficha al rincón de saberes de tu escuela o proponle a tu maestra iniciar uno.' },
          ],
          evidence: 'Ficha de saber cultural con dibujo y plan de una acción voluntaria.',
          rubric: ['Mi ficha explica cómo se hace la práctica y qué recurso conserva', 'Dije quién me compartió el saber, con respeto', 'Mi acción voluntaria es segura y cuenta con un adulto', 'Compartí mi ficha para que otros la conozcan'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: '¿Qué práctica tradicional ayuda a **conservar el suelo**?' },
        { options: [
          { id: 'a', text: 'Sembrar maíz, frijol y ayote juntos en la milpa' },
          { id: 'b', text: 'Quemar el rastrojo cada año' },
          { id: 'c', text: 'Talar los árboles de la ladera' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.3.2', 'pyd:5.5.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'El voluntariado es un trabajo que se hace de forma libre y sin pago, por el bien común.', answer: true },
          { text: 'Un centro de información comunitaria funciona mejor si solo lo organizan los estudiantes, sin la comunidad.', answer: false, why: 'Funciona mejor cuando la comunidad participa: comparte saberes, dona materiales y lo usa.' },
          { text: 'Guardar semillas criollas ayuda a conservar la variedad de maíces adaptados a cada lugar.', answer: true },
          { text: 'Ordenar las fichas por temas hace más fácil encontrar la información.', answer: true },
        ] },
      ),
      cierre({ areas: ['pyd'], cnb: ['pyd:5.5.2', 'pyd:1.3.2'] },
        ['Reconozco prácticas culturales que conservan la naturaleza', 'Explico qué es el voluntariado y cómo participar con seguridad', 'Sé cómo organizar con la comunidad un centro de información'],
        ['Entrevistaré a una persona mayor sobre un saber de la naturaleza', 'Me apuntaré como voluntario en una jornada de mi comunidad']),
    ],
  }),
];
