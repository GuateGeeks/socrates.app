import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 6 · Unidad 1 "Conociendo nuestras raíces"
 * Tema generador: Raíces que sostienen
 * Lo que nos sostiene por dentro (una alimentación variada desde la leche materna) y lo que sostiene
 * a un país (conocer su historia, del viaje de 1492 a la firma de la paz, y rechazar la violencia).
 * Cierre: Taller "Una refacción que nutre" (CNT · Matemáticas · PyD · L1) y Reto.
 */
export default semana({
  id: 's06',
  unidad: 1,
  semana: 6,
  kind: 'aprendizaje',
  temaGenerador: 'Raíces que sostienen',
  title: 'Raíces que nos sostienen',
  subtitle: 'Conjuntos, la oración, nutrición y lactancia, de 1492 a la paz, y cultura de paz',
  icon: 'TreePine',
  color: 'var(--area-cnt)',
  contexto: 'Un árbol se sostiene por sus raíces; una persona, por lo que come desde que nace y por lo que aprende de su historia. Esta semana conocerás los nutrientes de los alimentos, el valor de la leche materna y la olla familiar guatemalteca; viajarás de 1492 a las Guerras Mundiales y al conflicto armado interno, hasta la firma de la paz en 1996, y aprenderás a reconocer y detener la violencia. En Matemáticas trabajarás con conjuntos y diagramas de Venn, y en Comunicación y Lenguaje con la oración y el plan de tu mini-investigación. El viernes lo juntarás en un proyecto para la feria escolar: una refacción que de verdad nutre.',
  ejes: ['sostenible', 'vida-ciudadana', 'valores', 'multiculturalidad'],
  media: {
    id: 's06-portada', kind: 'video', title: 'Del bosque al chorro de mi casa', aspect: '16:9', duration: 60,
    alt: 'Recorrido de una gota de lluvia que cae en un bosque de pino, se infiltra en la tierra, sale en un nacimiento y llega al chorro de una casa.',
    brief: 'Video animado 2D de 60 s. Una gota de lluvia cae sobre un bosque de pino y encino del altiplano, baja por las raíces, viaja bajo tierra (corte transversal con capas de suelo) y brota en un nacimiento; de ahí una tubería comunitaria la lleva a la pila de una casa donde una niña llena un cántaro. Segunda mitad: la misma ladera sin árboles, la gota corre por encima, arrastra tierra y el nacimiento se ve seco. Texto final en pantalla: "Las raíces sostienen el agua. ¿Qué raíces sostienen a tu comunidad?". Música de marimba suave, narración en español de Guatemala, sin marcas.',
  },
  badge: { id: 'medalla-s06', name: 'Guardián de raíces', icon: 'TreePine', desc: 'Completaste la semana 6 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Viernes: Taller interdisciplinario ───────────────────────── */
    lesson({
      id: 's06-d5-taller',
      kind: 'taller',
      day: 5,
      title: 'Una refacción que nutre: proyecto para la feria',
      icon: 'Salad',
      minutes: 19,
      gancho: 'En la tienda escolar casi todos compran churros y gaseosa. ¿Podría tu grado ofrecer una refacción sabrosa, nutritiva y que alcance con el dinero?',
      objetivos: [
        'Usar los nutrientes y la olla familiar para diseñar una refacción variada',
        'Organizar los ingredientes con conjuntos y diagramas de Venn para tomar decisiones',
        'Planificar el proyecto para la feria: objetivo, presupuesto y cronograma',
      ],
      resumen: [
        'Una refacción completa combina energía (carbohidratos), construcción (proteínas) y regulación (vitaminas y minerales), con agua pura en lugar de bebidas azucaradas.',
        'La intersección de dos conjuntos muestra lo que cumple las dos condiciones: por ejemplo, alimentos con proteína que además se producen en la comunidad.',
        'Un proyecto tiene objetivo, actividades, presupuesto (cantidad × precio, y luego el total), cronograma y evaluación.',
        'El cronograma se planifica hacia atrás, desde la fecha de la feria.',
      ],
      media: {
        id: 's06-taller-portada', kind: 'image', title: 'El stand de la refacción', aspect: '16:9',
        alt: 'Stand escolar con una olla de barro dibujada en un cartel, tostadas con frijol y huevo, naranjas en rodajas y un garrafón de agua pura.',
        brief: 'Ilustración de un stand en una feria escolar guatemalteca: mesa con mantel típico, tostadas con frijol y huevo duro, rodajas de naranja, güisquil en ensalada y un garrafón de agua pura con vasos. Detrás, un cartel con la olla familiar dibujada y un diagrama de Venn de dos círculos. Estudiantes diversos (niñas y niños) atienden con redecilla y delantal. Colores cálidos, sin marcas comerciales.',
      },
      steps: [
        S.choice(
          { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer',
            prompt: 'La encuesta del grado dice que la refacción más comprada es **churros y gaseosa**. ¿Qué le **falta** a esa refacción?',
            explain: 'Los churros dan sobre todo energía (carbohidratos y grasas) y la gaseosa, azúcar. Les faltan **proteínas** para construir el cuerpo y **vitaminas y minerales** para regularlo.' },
          { options: [
            { id: 'a', text: 'Proteínas, vitaminas y minerales', icon: 'Egg' },
            { id: 'b', text: 'Más azúcar para tener energía', icon: 'Candy', feedback: 'Ya tiene mucha azúcar. Lo que falta es lo que construye y regula el cuerpo.' },
            { id: 'c', text: 'No le falta nada: llena el estómago', icon: 'CircleCheck', feedback: 'Llenar no es lo mismo que nutrir: ningún alimento tiene todos los nutrientes.' },
          ], correct: ['a'] },
        ),
        S.explain(
          { fase: 'construir', areas: ['pyd', 'cnt', 'mat', 'l1'], cnb: ['pyd:4.1.1'], ambito: 'conocer', title: 'Nuestro proyecto para la feria',
            prompt: 'Tu grado presentará en la **feria escolar** el proyecto "Refacción que nutre". Usarás cuatro cosas que aprendiste esta semana. Toca cada tarjeta.' },
          { icon: 'ClipboardList', body: 'Un proyecto es un conjunto de **actividades planificadas** para lograr un **objetivo**, en un tiempo definido y con recursos.', reveal: [
            { icon: 'Salad', front: 'Ciencias Naturales', back: 'Los **nutrientes** y la **olla familiar** dicen qué debe llevar la refacción.' },
            { icon: 'CircleDot', front: 'Matemáticas', back: 'Los **conjuntos** y el **diagrama de Venn** ayudan a elegir ingredientes que cumplan dos condiciones a la vez.' },
            { icon: 'Calculator', front: 'Productividad y Desarrollo', back: 'El **presupuesto**: cantidad × precio de cada cosa, y luego el total.' },
            { icon: 'CalendarDays', front: 'Comunicación y Lenguaje', back: 'Un **objetivo** que empieza con verbo y un **cronograma** hecho hacia atrás desde la fecha de la feria.' },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'hacer',
            prompt: 'Estos ingredientes se consiguen en la aldea. Clasifícalos por su **función principal** en el cuerpo.',
            hint: 'Energía: maíz, cereales, grasas. Construir: frijol, huevo, queso. Regular: frutas y verduras.',
            explain: 'Con un ingrediente de cada grupo la refacción queda **completa**: por ejemplo, tortilla + frijol + naranja.' },
          { buckets: [
            { id: 'ene', label: 'Dan energía', icon: 'Zap', color: 'var(--c-maiz-strong)' },
            { id: 'con', label: 'Construyen y reparan', icon: 'Hammer', color: 'var(--area-cnt)' },
            { id: 'reg', label: 'Regulan y defienden', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          ], items: [
            { id: 'i1', text: 'Tortilla de maíz', bucket: 'ene' },
            { id: 'i2', text: 'Frijol', bucket: 'con' },
            { id: 'i3', text: 'Huevo', bucket: 'con' },
            { id: 'i4', text: 'Naranja', bucket: 'reg' },
            { id: 'i5', text: 'Güisquil', bucket: 'reg' },
            { id: 'i6', text: 'Aguacate', bucket: 'ene', feedback: 'El aguacate aporta sobre todo grasas: una reserva de energía.' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['mat', 'cnt'], cnb: ['mat:3.2.1'], ambito: 'hacer',
            prompt: 'Sea **P** = alimentos con mucha proteína = {frijol, huevo, queso, pollo}. Sea **C** = alimentos que se producen en la comunidad = {frijol, huevo, maíz, güisquil, naranja}. Queremos proteína **y** producto local. ¿Cuál es **P ∩ C**?',
            hint: 'La intersección tiene solo los elementos que están en P **y también** en C.',
            explain: 'P ∩ C = {frijol, huevo}. En el diagrama de Venn van en la parte donde se cruzan los óvalos: son la mejor proteína para la refacción, porque además apoyan a las familias productoras.',
            media: { id: 's06-taller-venn', kind: 'diagram', title: 'Proteína y producto local', aspect: '4:3',
              alt: 'Diagrama de Venn con dos óvalos: P (proteína) y C (de la comunidad); en el cruce, frijol y huevo.',
              brief: 'Diagrama de Venn de dos óvalos que se cruzan. Óvalo izquierdo "P: mucha proteína" (color de CNT) con queso y pollo solo en su parte. Óvalo derecho "C: se produce en la comunidad" (color de Matemáticas) con maíz, güisquil y naranja. En el cruce: frijol y huevo, resaltados. Íconos sencillos de cada alimento con su nombre. Fondo claro, estilo plano.' } },
          { options: [
            { id: 'a', text: '{frijol, huevo}' },
            { id: 'b', text: '{frijol, huevo, queso, pollo, maíz, güisquil, naranja}', feedback: 'Esa es la unión P ∪ C: todo lo que está en uno o en otro.' },
            { id: 'c', text: '{queso, pollo}', feedback: 'Esos son P − C: tienen proteína, pero no se producen en la comunidad.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.2.1'], ambito: 'hacer',
            prompt: 'Con los mismos P = {frijol, huevo, queso, pollo} y C = {frijol, huevo, maíz, güisquil, naranja}: ¿cuántos elementos tiene **P ∪ C**?',
            hint: 'Junta los dos conjuntos, pero escribe una sola vez los que se repiten.',
            explain: 'P ∪ C = {frijol, huevo, queso, pollo, maíz, güisquil, naranja}: **7 elementos**. Frijol y huevo se cuentan una sola vez.' },
          { answer: 7, unit: 'elementos', misconceptions: [
            { value: 9, msg: 'Contaste dos veces el frijol y el huevo. En la unión no se repiten elementos.' },
            { value: 2, msg: '2 es la cantidad de la intersección. La unión reúne todo.' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:5.3.1'], ambito: 'hacer',
            prompt: 'El grado debe elegir el **menú de la semana**. ¿Cuál sigue mejor la **olla familiar**?',
            explain: 'La olla pide cereales, frutas y verduras **todos los días**, alimentos de origen animal **varias veces por semana** y azúcares y grasas **en poca cantidad**, con agua pura.' },
          { options: [
            { id: 'a', text: 'Todos los días tortilla o tostada con fruta y agua pura; frijol 3 días y huevo 2 días' },
            { id: 'b', text: 'Pan dulce y gaseosa los cinco días, porque es lo que más se vende', feedback: 'Azúcares todos los días: justo lo que la olla dice comer en poca cantidad.' },
            { id: 'c', text: 'Solo pollo frito los cinco días', feedback: 'Faltan frutas y verduras, y las frituras van en poca cantidad.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1', 'pyd'], cnb: ['l1:8.2.1'], ambito: 'hacer',
            prompt: 'Toda planificación empieza con un buen **objetivo**. ¿Cuál está mejor escrito?',
            explain: 'Un buen objetivo **empieza con un verbo** y dice exactamente qué se quiere lograr.' },
          { options: [
            { id: 'a', text: 'Ofrecer en la feria una refacción con proteína, fruta y agua pura que cueste menos de Q5' },
            { id: 'b', text: 'La refacción', feedback: 'Es solo el tema: no dice qué se quiere lograr.' },
            { id: 'c', text: 'Que todo salga bonito', feedback: 'Es un deseo vago: no empieza con un verbo de acción ni se puede comprobar.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['pyd', 'mat'], cnb: ['pyd:4.1.1'], ambito: 'hacer',
            prompt: 'Presupuesto para **30 refacciones** (precios supuestos):\n- 3 libras de frijol a **Q9** la libra\n- 1 cartón de 30 huevos a **Q36**\n- 30 naranjas a **Q1** cada una\n¿Cuál es el **total** en quetzales?',
            hint: 'Primero cantidad × precio de cada cosa; después suma los tres resultados.',
            explain: 'Frijol: 3 × 9 = Q27. Huevos: Q36. Naranjas: 30 × 1 = Q30. Total: 27 + 36 + 30 = **Q93**, un poco más de Q3 por refacción.' },
          { answer: 93, unit: 'quetzales', misconceptions: [
            { value: 75, msg: 'Sumaste 9 + 36 + 30: falta multiplicar las 3 libras de frijol por Q9.' },
            { value: 46, msg: 'Sumaste solo los precios (9 + 36 + 1). Multiplica cada precio por su cantidad.' },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['l1', 'pyd'], cnb: ['l1:8.2.1'], ambito: 'hacer',
            prompt: 'La feria es dentro de **tres semanas**. Ordena las actividades del **cronograma**, de la primera a la última.',
            explain: 'Se planifica hacia atrás: lo que depende de otra cosa va después. Sin encuesta no sabes qué gusta; sin menú no puedes hacer presupuesto; sin permiso no puedes preparar el stand.' },
          { items: [
            { id: 'c1', text: 'Semana 1: encuestar qué refacción compran y cuál les gustaría' },
            { id: 'c2', text: 'Semana 1: elegir el menú con la olla familiar' },
            { id: 'c3', text: 'Semana 2: calcular el presupuesto' },
            { id: 'c4', text: 'Semana 2: presentar la propuesta a la dirección' },
            { id: 'c5', text: 'Semana 3: preparar el stand y el cartel' },
            { id: 'c6', text: 'Día de la feria: ofrecer la refacción y escuchar opiniones' },
          ], labels: { start: 'Primero', end: 'Último' } },
        ),
        S.project(
          { fase: 'aplicar', areas: ['pyd', 'cnt', 'l1'], cnb: ['pyd:4.3.1', 'pyd:4.1.1'], ambito: 'hacer',
            prompt: 'Arma la **ficha del proyecto** para tu stand. Puedes hacerla en tu cuaderno o en un cartel.' },
          { goal: 'Presentar en la feria escolar el proyecto "Refacción que nutre" con todas sus partes.',
            steps: [
              { title: 'Problema y objetivo', detail: 'Escribe por qué hace falta (qué dice la encuesta) y el objetivo que empieza con verbo.' },
              { title: 'Menú', detail: 'Dibuja la refacción y marca qué nutriente aporta cada ingrediente. Usa el diagrama de Venn para mostrar por qué elegiste frijol y huevo.' },
              { title: 'Presupuesto', detail: 'Haz la tabla: ingrediente, cantidad, precio, subtotal y total.' },
              { title: 'Cronograma', detail: 'Copia el cronograma de tres semanas y pon responsables.' },
              { title: 'Evaluación', detail: 'Escribe cómo sabrán si funcionó: por ejemplo, cuántas refacciones se vendieron y qué opinaron los compañeros.' },
            ],
            evidence: 'Ficha o cartel del proyecto con el menú, el diagrama de Venn, el presupuesto y el cronograma.',
            rubric: ['El objetivo empieza con verbo y se puede comprobar', 'El menú combina energía, proteína y vitaminas', 'El presupuesto multiplica y suma bien', 'El cronograma está ordenado y tiene responsables'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.3'],
            prompt: 'Con P = {frijol, huevo, queso, pollo} y C = {frijol, huevo, maíz, güisquil, naranja}: ¿cuántos elementos tiene la diferencia **C − P**?' },
          { answer: 3, unit: 'elementos' },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.3.1'],
            prompt: '¿Qué cambio en la refacción ayuda más a **prevenir la caries y la obesidad**?' },
          { options: [
            { id: 'a', text: 'Tomar agua pura en lugar de gaseosa' },
            { id: 'b', text: 'Comprar dos gaseosas pequeñas en vez de una grande' },
            { id: 'c', text: 'Comer los churros más rápido' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['pyd', 'cnt', 'mat', 'l1'], cnb: ['pyd:4.3.1'] },
          ['Diseño una refacción con energía, proteína y vitaminas', 'Uso la intersección y la unión para decidir', 'Calculo un presupuesto', 'Planifico un proyecto con objetivo y cronograma'],
          ['Cambiaré la gaseosa por agua pura en mi refacción', 'Presentaré mi ficha del proyecto en la feria', 'Compartiré la olla familiar con mi familia']),
      ],
    }),

    /* ───────────────────────── Viernes: Reto semanal ───────────────────────── */
    lesson({
      id: 's06-d5-reto',
      kind: 'reto',
      day: 5,
      title: 'Reto de la semana 6',
      icon: 'Trophy',
      minutes: 14,
      objetivos: ['Demostrar lo que aprendiste esta semana en tus materias', 'Obtener la medalla "Guardián de raíces" (70 % o más)'],
      resumen: ['Superé el reto de la semana 6: conjuntos, la oración, nutrición y lactancia, de 1492 a la paz, cultura de paz, la r y la respiración.'],
      media: {
        id: 's06-d5-reto', kind: 'image', title: 'Medalla Guardián de raíces', aspect: '1:1',
        alt: 'Medalla verde con un árbol de raíces profundas, una mazorca y una paloma.',
        brief: 'Ilustración de medalla circular verde y dorada: un árbol con raíces visibles que forman un diagrama de Venn, una mazorca a un lado y una paloma de la paz al otro. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024, estilo plano.',
      },
      steps: [
        S.tf({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.1.1'], prompt: 'Sea T = {Tikal, Quiriguá, Iximché}. ¿Verdadero o falso?' },
          { statements: [
            { text: 'Iximché ∈ T', answer: true },
            { text: 'Copán ∈ T', answer: false, why: 'Copán no está en la lista: Copán ∉ T.' },
            { text: '{Tikal, Iximché} ⊂ T', answer: true },
            { text: 'El conjunto vacío ∅ es subconjunto de T.', answer: true, why: '∅ es subconjunto de cualquier conjunto.' },
          ] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.1.1'], prompt: 'Un conjunto de 5 elementos tiene 32 subconjuntos. ¿Cuántos subconjuntos tiene un conjunto de **6 elementos**?' },
          { answer: 64, unit: 'subconjuntos' }),
        S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.3'], prompt: 'A = {2, 3, 5, 7} y B = {1, 3, 5, 7, 9}. ¿Cuál es **B − A**?' },
          { options: [
            { id: 'a', text: '{1, 9}' },
            { id: 'b', text: '{2}' },
            { id: 'c', text: '{3, 5, 7}' },
            { id: 'd', text: '{1, 2, 9}' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.6'], prompt: 'En "_En la feria vendieron atol las señoras de la aldea_", ¿cuál es el **sujeto**?' },
          { options: [
            { id: 'a', text: 'las señoras de la aldea' },
            { id: 'b', text: 'En la feria' },
            { id: 'c', text: 'atol' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.6'], prompt: '¿Cuál es una oración **unimembre**?' },
          { options: [
            { id: 'a', text: '¡Qué aroma tan rico!' },
            { id: 'b', text: 'Mi abuela cocina pepián.' },
            { id: 'c', text: 'Los niños juegan en el patio.' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.1.1'], prompt: '¿Qué nutriente aporta **principalmente** el aguacate?' },
          { options: [
            { id: 'a', text: 'Grasas' },
            { id: 'b', text: 'Proteínas' },
            { id: 'c', text: 'Agua solamente' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.2.1'], prompt: '¿Durante cuánto tiempo se recomienda dar **solo leche materna** al bebé?' },
          { options: [
            { id: 'a', text: 'Los primeros 6 meses' },
            { id: 'b', text: 'Solo el primer mes' },
            { id: 'c', text: 'Hasta los 5 años, sin otros alimentos' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.4.4'], prompt: '¿Por qué los europeos buscaron **rutas por mar** hacia Asia en el siglo XV?' },
          { options: [
            { id: 'a', text: 'Querían especias, seda y oro, y las rutas por tierra eran difíciles y caras' },
            { id: 'b', text: 'Porque en Europa no había barcos' },
            { id: 'c', text: 'Porque ya conocían el continente americano' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.5.5', 'ccss:6.5.6'], prompt: '¿Con qué acuerdo y en qué fecha terminó el conflicto armado interno de Guatemala?' },
          { options: [
            { id: 'a', text: 'El Acuerdo de Paz Firme y Duradera, el 29 de diciembre de 1996' },
            { id: 'b', text: 'El Tratado de Versalles, en 1919' },
            { id: 'c', text: 'La fundación de la ONU, en 1945' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.2.1'], prompt: 'Durante todo el mes, un grupo esconde la mochila de Luis y se burla de él; Luis es más pequeño y no puede defenderse. ¿Qué es?' },
          { options: [
            { id: 'a', text: 'Acoso escolar: se repite, es a propósito y hay desigualdad de poder' },
            { id: 'b', text: 'Un conflicto normal entre iguales' },
            { id: 'c', text: 'Una broma sin importancia' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.2'], prompt: '¿En qué palabra la **r** suena **fuerte**?' },
          { options: [
            { id: 'a', text: 'Enrique' },
            { id: 'b', text: 'pera' },
            { id: 'c', text: 'tres' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:3.1.2'], prompt: '¿Cómo se hace la **respiración abdominal lenta**?' },
          { options: [
            { id: 'a', text: 'Inhalar por la nariz inflando el abdomen y exhalar despacio por la boca' },
            { id: 'b', text: 'Respirar rápido por la boca subiendo los hombros' },
            { id: 'c', text: 'Aguantar la respiración todo lo posible' },
          ], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 1 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.2'], prompt: 'A = {a, b, c}, B = {b, c, d} y C = {d, e}. ¿Cuál es **(A ∩ B) ∪ C**?' },
      { options: [{ id: 'a', text: '{b, c, d, e}' }, { id: 'b', text: '{b, c}' }, { id: 'c', text: '{a, b, c, d, e}' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.1'], prompt: 'M = {lunes, martes} y S = {sábado, domingo}. ¿Cuál es **M ∩ S**?' },
      { options: [{ id: 'a', text: '∅ (son conjuntos disjuntos)' }, { id: 'b', text: '{lunes, martes, sábado, domingo}' }, { id: 'c', text: '{lunes}' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.6'], prompt: 'En "_Los estudiantes de sexto sembraron pinos_", ¿cuál es el **núcleo del sujeto**?' },
      { options: [{ id: 'a', text: 'estudiantes' }, { id: 'b', text: 'sexto' }, { id: 'c', text: 'sembraron' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.3.1'], prompt: 'Según la olla familiar, ¿qué alimentos van en **poca cantidad**?' },
      { options: [{ id: 'a', text: 'Azúcares y grasas' }, { id: 'b', text: 'Frutas y verduras' }, { id: 'c', text: 'Tortillas y frijol' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.5.5'], prompt: '¿Qué países fueron los grandes rivales de la **Guerra Fría**?' },
      { options: [{ id: 'a', text: 'Estados Unidos y la Unión Soviética' }, { id: 'b', text: 'Guatemala y México' }, { id: 'c', text: 'España y Portugal' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.2.1'], prompt: 'Te llega un video que se burla de un compañero. Como **testigo**, ¿qué ayuda a detener el ciberacoso?' },
      { options: [{ id: 'a', text: 'No reenviarlo, acompañar a tu compañero y avisar a un adulto' }, { id: 'b', text: 'Reenviarlo a pocos amigos' }, { id: 'c', text: 'Poner un emoji de risa' }], correct: ['a'] }),
    S.order({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.3.1'], prompt: 'Order the instructions to make a paper hat. (Ordena las instrucciones.)' },
      { items: [{ id: 'a', text: 'First, take a sheet of paper.' }, { id: 'b', text: 'Then, fold it in half.' }, { id: 'c', text: 'After that, fold the corners down.' }, { id: 'd', text: 'Finally, put it on your head.' }] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:3.1.6'], prompt: 'Van a jugar al mediodía, a pleno sol. ¿Qué vestuario conviene?' },
      { options: [{ id: 'a', text: 'Ropa fresca, gorra, bloqueador y calzado deportivo bien amarrado' }, { id: 'b', text: 'Chumpa gruesa y sandalias' }, { id: 'c', text: 'Collares y aretes largos' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:4.1.1'], prompt: 'Un proyecto necesita **4 bolsas de tierra a Q15** y **2 regaderas a Q20**. ¿Cuál es el presupuesto total en quetzales?' },
      { answer: 100, unit: 'quetzales' }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.4'], prompt: 'En un dibujo con **punteado**, ¿cómo logras una zona más **oscura**?' },
      { options: [{ id: 'a', text: 'Poniendo los puntos más juntos' }, { id: 'b', text: 'Poniendo los puntos más separados' }, { id: 'c', text: 'Borrando los puntos' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.1'], prompt: 'En Guatemala, "**casa**" y "**caza**" se pronuncian igual. ¿Cómo sabes cuál escuchaste en "_Los perros salieron de caza_"?' },
      { options: [{ id: 'a', text: 'Por el contexto: las demás palabras de la oración' }, { id: 'b', text: 'Por el sonido de la z' }, { id: 'c', text: 'No se puede saber nunca' }], correct: ['a'] }),
  ],
});
