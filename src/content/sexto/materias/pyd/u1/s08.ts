/**
 * Productividad y Desarrollo · Unidad 1 · Semana 8 — Detectives de la verdad.
 * Práctica voluntaria en la conservación de los recursos naturales desde la propia cultura
 * (milpa, bosques comunales, abono, semillas nativas, cuidado de nacimientos) mediante una
 * práctica voluntaria, segura y completamente preparada para el aula.
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
    ],
    resumen: [
      'Muchos pueblos de Guatemala conservan la naturaleza desde su cultura: la milpa (maíz, frijol y ayote juntos) cuida el suelo; los bosques comunales se protegen entre todos; se hace abono con restos de cosecha; se guardan semillas nativas y se respetan los nacimientos de agua.',
      'El voluntariado es dar tu tiempo y tu esfuerzo de forma libre, sin pago, por el bien común. A tu edad se participa con permiso de la familia y con adultos responsables.',
      'Una ficha de práctica conserva información útil: nombre, propósito, materiales, cuidados y fuente. En esta lección se trabaja solo con fichas suministradas.',
      'Una acción voluntaria escolar ofrece opciones, permite no participar y usa materiales preparados, sin exigir visitas, entrevistas ni recolección externa.',
    ],
    media: {
      id: 's08-pyd-1-rincon-saberes', kind: 'image', title: 'El rincón de saberes verdes', aspect: '16:9',
      alt: 'Un rincón de la escuela con estantes de cajas rotuladas (agua, suelo, bosque, semillas), frascos con semillas nativas, un mapa de la comunidad y una abuela contando una historia a estudiantes.',
      brief: 'Ilustración cálida de un rincón en el salón de una escuela rural guatemalteca. Estantes de madera con cajas de cartón decoradas y rotuladas con íconos: gota ("Agua"), montón de tierra ("Suelo"), árbol ("Bosque"), mazorca ("Semillas"). Frascos de vidrio con semillas de maíz de colores, frijol y ayote. En la pared, un mapa dibujado a mano de la aldea con el nacimiento de agua y el bosque comunal marcados, y un calendario de siembra. Una abuela con traje maya conversa con cuatro estudiantes que toman notas en fichas. Un vecino dona una fotografía antigua. Sin marcas ni textos largos. Target: public/media/s08-pyd-1-rincon-saberes.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
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
          prompt: 'Una acción para conservar estos saberes puede ser **voluntaria**. Toca cada tarjeta.' },
        { icon: 'HandHeart', body: 'Ser voluntario no es solo "ayudar": es **comprometerse** y cumplir, como cualquier trabajo importante.', reveal: [
          { icon: 'Heart', front: '¿Qué es?', back: 'Dar tu **tiempo y esfuerzo** de forma **libre** y **sin pago**, para el **bien común**.' },
          { icon: 'Sprout', front: '¿Qué puedes hacer aquí?', back: 'Rotular sobres de muestra, ordenar fichas suministradas o dibujar una guía para conservar semillas secas.' },
          { icon: 'ShieldCheck', front: 'Con seguridad', back: 'Usar solo papel, lápiz y muestras preparadas; no ingerir semillas ni usar herramientas cortantes.' },
          { icon: 'ListChecks', front: 'Con compromiso', back: 'Si te apuntas, **cumple**: llega a tiempo, haz tu parte y avisa si no puedes.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'conocer', title: 'Una ficha de práctica verificable',
          prompt: 'Los saberes se pierden si nadie los registra. Una **ficha suministrada** permite estudiarlos sin atribuir prácticas inventadas a una familia o comunidad. Toca cada tarjeta.' },
        { icon: 'Library', body: 'La ficha declara que es un caso didáctico y distingue la práctica descrita de una experiencia personal.', reveal: [
          { icon: 'FileText', front: 'Nombre', back: 'Identifica la práctica: **guardar semillas secas en sobres rotulados**.' },
          { icon: 'Target', front: 'Propósito', back: 'Conservar semillas identificadas y protegidas de humedad.' },
          { icon: 'Package', front: 'Materiales', back: 'Sobres de muestra, etiquetas y lápiz ya preparados en el aula.' },
          { icon: 'ShieldCheck', front: 'Cuidados y fuente', back: 'No ingerir las semillas; registrar la fecha del caso y citar la **ficha didáctica suministrada**.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'emprender', title: 'Ejemplo resuelto: el "Rincón de saberes verdes"',
          prompt: 'Mira cómo sexto prepara una acción breve sin salir del aula.' },
        { icon: 'Library', problem: 'El paquete trae sobres de muestra y una ficha didáctica sobre semillas secas. El grupo quiere conservar la información con una actividad voluntaria.',
          steps: [
            { text: '**Elegir:** cada estudiante decide libremente entre rotular un sobre, dibujar la secuencia o revisar etiquetas.' },
            { text: '**Leer:** identifican en la ficha el propósito, los materiales y los cuidados.' },
            { text: '**Preparar:** usan únicamente sobres de muestra, etiquetas y lápices del aula.' },
            { text: '**Revisar:** comprueban nombre, fecha del caso y condición “seca” sin abrir ni ingerir la muestra.' },
            { text: '**Registrar:** guardan el producto en una carpeta de aula con la fuente suministrada visible.' },
          ],
          answer: 'La acción conserva una práctica documentada sin exigir trabajo externo y respeta la participación voluntaria.',
          tip: 'Elegir → leer → preparar → revisar → registrar.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'Ayuda a ordenar las fichas del rincón. ¿En qué caja va cada una?',
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
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'emprender', prompt: 'Ordena los pasos de la acción voluntaria preparada en el aula.',
          explain: 'Elegir libremente → leer la ficha → preparar → revisar → registrar.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'o1', text: 'Elegir libremente una tarea', icon: 'HandHeart' },
          { id: 'o2', text: 'Leer la ficha suministrada', icon: 'BookOpen' },
          { id: 'o3', text: 'Preparar el sobre o la guía con materiales del aula', icon: 'Package' },
          { id: 'o4', text: 'Revisar rótulo, fecha y cuidado', icon: 'ListChecks' },
          { id: 'o5', text: 'Registrar la fuente y guardar el producto', icon: 'Archive' },
        ] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'emprender',
          prompt: 'El paquete suministrado describe una práctica de guardar semillas secas en sobres rotulados. Diseña una acción voluntaria de aula; no entrevistes, visites ni recolectes materiales fuera.' },
        { goal: 'Planificar una acción voluntaria, segura y breve para conservar una práctica cultural documentada.',
          steps: [
            { title: 'Fuente', detail: 'Copia el nombre de la ficha suministrada y aclara que es un caso didáctico.' },
            { title: 'Tarea elegida', detail: 'Escoge rotular sobres de papel o dibujar una guía; participar es voluntario.' },
            { title: 'Recursos', detail: 'Usa solo sobres de muestra, lápiz y fichas preparados en el aula.' },
            { title: 'Cuidado', detail: 'No ingerir semillas; lavarse las manos y evitar herramientas cortantes.' },
            { title: 'Verificación', detail: 'Revisar que cada sobre tenga nombre, fecha del caso y condición seca.' },
          ],
          evidence: 'Plan breve en el cuaderno con tarea, recursos, cuidado y verificación.',
          rubric: ['La participación es voluntaria', 'Uso una práctica suministrada', 'La acción es segura y verificable'] },
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
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'El voluntariado es un trabajo que se hace de forma libre y sin pago, por el bien común.', answer: true },
          { text: 'Una actividad sigue siendo voluntaria si se castiga a quien elige no participar.', answer: false, why: 'Participar debe ser una elección libre y debe existir una alternativa segura.' },
          { text: 'Guardar semillas criollas ayuda a conservar la variedad de maíces adaptados a cada lugar.', answer: true },
          { text: 'Ordenar las fichas por temas hace más fácil encontrar la información.', answer: true },
        ] },
      ),
      cierre({ areas: ['pyd'], cnb: ['pyd:5.5.2'] },
        ['Reconozco prácticas culturales que conservan la naturaleza', 'Explico qué hace voluntaria y segura una acción', 'Registro una práctica usando una ficha suministrada'],
        ['Puedo elegir una tarea segura del aula', 'Citaré la ficha suministrada sin inventar experiencias']),
    ],
  }),
];
