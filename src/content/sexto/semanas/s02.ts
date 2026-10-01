import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 2 · Unidad 1 "Conociendo nuestras raíces"
 * Tema generador: Un mercado saludable y respetuoso
 * Cierre semanal (v3): las 27 lecciones de materia viven en src/content/sexto/materias/<area>/u1/s02.ts.
 * El viernes: Taller "Un puesto sano y respetuoso" (Productividad + Ciencias Naturales + L2)
 * y Reto semanal.
 */
export default semana({
  id: 's02',
  unidad: 1,
  semana: 2,
  kind: 'aprendizaje',
  temaGenerador: 'Un mercado saludable y respetuoso',
  title: 'Un mercado saludable y respetuoso',
  subtitle: 'Investigamos alimentos seguros, intercambios respetuosos, recursos locales y formas útiles de comunicar',
  icon: 'Store',
  color: 'var(--area-cnt)',
  contexto: 'Un mercado sirve a la comunidad cuando ofrece alimentos manipulados con higiene, aprovecha con cuidado los recursos locales y trata a cada persona con respeto. Esta semana investigarás cómo reducir el riesgo de parásitos sin hacer promesas exageradas de salud, cómo comunicar una oferta con claridad en español y en inglés y cómo convertir una necesidad, un recurso y un saber familiar en una idea posible. Las demás materias aportarán sus propios conceptos para comprender las formas, los seres vivos, la población, el patrimonio, la música, los derechos y el movimiento que también forman parte de la vida comunitaria.',
  ejes: ['multiculturalidad', 'vida-familiar', 'trabajo', 'equidad'],
  media: {
    id: 's02-portada', kind: 'video', title: 'Un día de mercado', aspect: '16:9', duration: 60,
    alt: 'Recorrido por un mercado guatemalteco al amanecer: puestos de verduras, tejidos de colores, vendedoras que saludan y niños que ayudan a sus familias.',
    brief: 'Video de 60 s (o animación 2D ilustrada) de un mercado de pueblo del altiplano al amanecer. Tomas: toldos que se abren, canastos con aguacates y güisquiles, güipiles con rombos colgados, una vendedora que saluda "Buenos días, doña", un puesto de agua pura, un celular usado para cobrar. Sobreimpresos: "Salud", "Figuras", "Personas", "Ideas". Marimba suave de fondo. Cierre con la pregunta "¿Qué descubres en el mercado de tu pueblo?". Sin marcas comerciales ni rostros identificables en primer plano.',
  },
  badge: { id: 'medalla-s02', name: 'Guía del mercado', icon: 'Store', desc: 'Completaste la semana 2 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Viernes: Taller interdisciplinario ───────────────────────── */
    lesson({
      id: 's02-d5-taller',
      kind: 'taller',
      day: 5,
      title: 'Un puesto sano y respetuoso',
      icon: 'Store',
      minutes: 18,
      gancho: 'Si tu grado organizara un mercadito en la escuela, ¿qué venderías, cómo cuidarías la salud de tus clientes y cómo los atenderías?',
      objetivos: [
        'Planear una oferta sencilla que una una necesidad, un recurso y un saber de la comunidad',
        'Escribir un procedimiento concreto de higiene para manipular alimentos',
        'Atender a cada cliente con lenguaje respetuoso y útil',
      ],
      resumen: [
        'Necesidad + recurso + saber = idea productiva. Una oferta simple dice qué se ofrece y a qué precio.',
        'Lavarse las manos con agua y jabón antes de preparar, lavar los alimentos con agua apta para consumo, separar el dinero de la comida, dejar el cuchillo a una persona adulta, mantener el alimento tapado y volver a lavarse las manos después de manejar dinero ayuda a reducir riesgos de contaminación.',
        'Un instructivo tiene título, materiales y pasos en orden con palabras como primero, después, luego y finalmente.',
        'Con personas mayores o desconocidas usamos usted, títulos como don o doña y expresiones como buenos días, por favor y gracias.',
      ],
      media: {
        id: 's02-d5-taller-puesto', kind: 'image', title: 'El mercadito escolar', aspect: '4:3',
        alt: 'Patio de escuela con puestos hechos con mesas y manteles tejidos; un puesto de vasitos de fruta tapados, un cartel de precios en quetzales y una estación para lavarse las manos.',
        brief: 'Ilustración plana y alegre de un mercadito escolar en el patio de una escuela pública guatemalteca: mesas con manteles de tela típica, un puesto de fruta picada en vasos tapados, un recipiente con chorro y jabón para lavarse las manos, un recipiente tapado para la fruta, un cartel "Fruta fresca · Q2.00 / Fresh fruit" y niñas y niños de distintos pueblos atendiendo a una señora mayor. Sin marcas comerciales ni rostros identificables.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'cnt', 'l2'], cnb: ['pyd:1.4.4', 'cnt:1.5.3', 'l2:2.1.1', 'l2:1.3.1'], ambito: 'emprender', title: 'Misión y tiempo · 1 min',
            prompt: 'En **18 minutos** recuperarás dos decisiones breves y dedicarás la mayor parte del tiempo a construir, revisar y corregir el plan de tu puesto.' },
          { icon: 'Timer', body: 'El plan tendrá una **oferta sencilla**, un **procedimiento de higiene** y **frases de servicio respetuoso**.', reveal: [
            { icon: 'Lightbulb', front: 'Productividad', back: 'Necesidad + recurso local + saber familiar.' },
            { icon: 'ShieldCheck', front: 'Ciencias y L2', back: 'El procedimiento seguro que ya modelaste y ordenaste.' },
            { icon: 'MessagesSquare', front: 'L2', back: 'Saludo, oferta y despedida con usted y palabras de cortesía.' },
          ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.4.4'], ambito: 'emprender',
            prompt: 'Recuperación rápida · 1 min. Hay poca fruta lista en el recreo, la familia tiene mangos y sabe preparar vasitos. ¿Qué oferta une necesidad, recurso y saber?',
            hint: 'Usa la fórmula que ya aprendiste.',
            explain: 'La oferta responde a la necesidad y aprovecha un recurso y un saber disponibles.' },
          { options: [
            { id: 'a', text: 'Vasitos de mango a un precio sencillo', icon: 'Citrus' },
            { id: 'b', text: 'Juguetes comprados lejos de la comunidad', icon: 'ToyBrick' },
            { id: 'c', text: 'Un producto que nadie sabe preparar', icon: 'CircleHelp' },
          ], correct: ['a'] },
        ),
        S.order(
          { fase: 'construir', areas: ['cnt', 'l2'], cnb: ['cnt:1.5.3', 'l2:2.1.1'], ambito: 'hacer',
            prompt: 'Recuperación del procedimiento · 2 min. Ordena los cuidados modelados en L2 antes de escribir tu versión.',
            hint: 'Empieza por organizar roles y lavarse las manos antes de preparar; termina con el nuevo lavado después de manejar dinero.',
            explain: 'El orden recupera los seis cuidados enseñados: manos lavadas antes de preparar, agua apta para consumo, dinero separado, cuchillo a cargo de una persona adulta, alimento tapado y nuevo lavado de manos después de manejar dinero.' },
          { items: [
            { id: 'h1', text: 'Antes de empezar, separa el dinero de la comida y asigna quién cobrará.', icon: 'BadgeDollarSign' },
            { id: 'h2', text: 'Primero, antes de preparar, quienes servirán se lavan las manos con agua y jabón.', icon: 'HandHelping' },
            { id: 'h3', text: 'Una persona adulta lava el alimento con agua apta para consumo y usa el cuchillo.', icon: 'UtensilsCrossed' },
            { id: 'h4', text: 'Sirve el alimento y mantenlo tapado.', icon: 'Container' },
            { id: 'h5', text: 'Quien cobra mantiene el dinero separado y no toca la comida.', icon: 'HandCoins' },
            { id: 'h6', text: 'Después de manejar dinero, se lava las manos con agua y jabón antes de tocar alimentos.', icon: 'RefreshCcw' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.project(
          { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.4.4'], ambito: 'emprender', title: 'Etapa 1: escribe la oferta · 2 min',
            prompt: 'Empieza tu hoja con el nombre del puesto y una oferta que puedas explicar en una sola oración.' },
          { goal: 'Definir una oferta sencilla y posible.',
            steps: [
              { title: 'Producto y precio · 1 min', detail: 'Escribe qué ofrecerás y a qué precio.' },
              { title: 'Por qué es posible · 1 min', detail: 'Añade la necesidad, el recurso local y el saber familiar que reúne.' },
            ],
            evidence: 'Nombre del puesto y una oración de oferta con precio.',
            rubric: ['La oferta dice qué se ofrece y a qué precio', 'Responde a una necesidad y usa un recurso y un saber disponibles'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['cnt', 'l2'], cnb: ['cnt:1.5.3', 'l2:2.1.1'], ambito: 'hacer', title: 'Etapa 2: procedimiento de higiene · 4 min',
            prompt: 'Debajo de la oferta, escribe el procedimiento breve que recuperaste. No agregues cuidados que no fueron enseñados.' },
          { goal: 'Dejar una secuencia clara que otra persona pueda seguir.',
            steps: [
              { title: 'Materiales', detail: 'Anota jabón, agua apta para consumo, recipientes con tapa, un cuchillo para uso de una persona adulta y un lugar separado para el dinero.' },
              { title: 'Cinco pasos', detail: 'Como preparación, separa el dinero de la comida y asigna quién cobra. **Primero**, antes de preparar, lávense las manos con agua y jabón. **Después**, una persona adulta lava el alimento con agua apta para consumo y usa el cuchillo. **Luego**, sirve y mantén el alimento tapado. **A continuación**, cobra sin tocar la comida y mantén el dinero separado. **Finalmente**, después de manejar dinero, lávate las manos con agua y jabón antes de tocar alimentos.' },
            ],
            evidence: 'Materiales y cinco pasos breves con palabras de orden.',
            rubric: [
              'Incluye lavarse las manos antes de preparar, agua apta para consumo, dinero separado de la comida, cuchillo reservado para una persona adulta, alimento tapado y lavado de manos después de manejar dinero',
              'Los cinco pasos usan palabras de orden y se pueden seguir sin adivinar',
            ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.3.1'], ambito: 'convivir',
            prompt: 'Antes de escribir · 1 min. ¿Qué estructura sirve para atender con respeto a una persona mayor?',
            explain: 'El servicio respetuoso saluda, ofrece con claridad y cierra con agradecimiento.' },
          { options: [
            { id: 'a', text: '“Buenos días, doña Rosa. ¿En qué le puedo servir?” · oferta · “Gracias”' },
            { id: 'b', text: '“¿Qué quiere?” · precio · silencio' },
            { id: 'c', text: '“Ey, vos” · oferta · “Apúrese”' },
          ], correct: ['a'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.3.1'], ambito: 'convivir', title: 'Etapa 3: lenguaje de servicio · 2 min',
            prompt: 'Añade tres frases que realmente usarías al atender a una persona mayor o desconocida.' },
          { goal: 'Preparar un intercambio breve, claro y respetuoso.',
            steps: [
              { title: 'Saludo y oferta · 1 min', detail: 'Escribe un saludo con usted y don o doña, y una frase para ofrecer el producto con por favor.' },
              { title: 'Despedida · 1 min', detail: 'Añade una despedida breve con gracias.' },
            ],
            evidence: 'Saludo, oferta y despedida.',
            rubric: ['El saludo usa usted y un título', 'La oferta y la despedida usan por favor y gracias de manera natural'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['pyd', 'cnt', 'l2'], cnb: ['pyd:1.4.4', 'cnt:1.5.3', 'l2:2.1.1', 'l2:1.3.1'], ambito: 'emprender', title: 'Etapa 4: integra y revisa el plan final · 3 min',
            prompt: 'Ordena lo que ya escribiste, corrige una cosa y entrega el **plan de tu puesto sano y respetuoso**.' },
          { goal: 'Entregar un plan breve, completo y realizable.',
            steps: [
              { title: 'Integra · 2 min', detail: 'Coloca arriba la oferta; al centro, el procedimiento de higiene numerado que empieza con **primero**; y al final, las tres frases de servicio respetuoso.' },
              { title: 'Corrige · 1 min', detail: 'Revisa la rúbrica y corrige una sola cosa que falte o no se entienda.' },
            ],
            evidence: 'Una hoja con oferta simple, procedimiento de higiene y tres frases de servicio respetuoso.',
            rubric: [
              'La oferta indica qué se ofrece, el precio y un recurso y saber disponibles',
              'El procedimiento incluye lavarse las manos antes de preparar, agua apta para consumo, dinero separado de la comida, cuchillo para una persona adulta, alimento tapado y lavado de manos después de manejar dinero',
              'El servicio usa usted, un título, por favor y gracias',
            ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['pyd', 'cnt', 'l2'], cnb: ['pyd:1.4.4', 'cnt:1.5.3', 'l2:2.1.1', 'l2:1.3.1'], ambito: 'hacer',
            prompt: 'Revisión rápida · 1 min. Decide qué está listo y qué debes corregir en tu hoja.',
            explain: 'La revisión comprueba solo los tres componentes pedidos y los cuidados ya aprendidos.' },
          { buckets: [
            { id: 'listo', label: 'Listo', icon: 'BadgeCheck' },
            { id: 'corregir', label: 'Corregir', icon: 'Pencil' },
          ], items: [
            { id: 'r1', text: 'La oferta dice producto y precio', bucket: 'listo' },
            { id: 'r2', text: 'El procedimiento empieza con las manos limpias antes de preparar', bucket: 'listo' },
            { id: 'r3', text: 'La misma persona cobra y sirve sin volver a lavarse las manos', bucket: 'corregir' },
            { id: 'r4', text: 'El saludo usa usted y una palabra de cortesía', bucket: 'listo' },
          ] },
        ),
        cierre({ areas: ['pyd', 'cnt', 'l2'], cnb: ['pyd:1.4.4', 'cnt:1.5.3', 'l2:2.1.1', 'l2:1.3.1'] },
          ['Creé una oferta posible', 'Escribí un procedimiento completo y ordenado', 'Preparé frases de servicio respetuoso'],
          ['Me lavaré las manos antes de preparar alimentos y después de manejar dinero', 'Mantendré separados el dinero y la comida', 'Trataré a cada cliente con respeto']),
      ],
    }),

    /* ───────────────────────── Viernes: Reto semanal ───────────────────────── */
    lesson({
      id: 's02-d5-reto',
      kind: 'reto',
      day: 5,
      title: 'Reto de la semana 2',
      icon: 'Trophy',
      minutes: 14,
      objetivos: ['Demostrar lo que aprendiste esta semana en todas tus materias', 'Obtener la medalla "Guía del mercado" (70 % o más)'],
      resumen: ['Superé el reto de la semana 2: geometría, lectura, ciencias, población y patrimonio, comunicación respetuosa en español e inglés, música, derechos, movimiento y emprendimiento.'],
      media: {
        id: 's02-d5-reto', kind: 'image', title: 'Medalla Guía del mercado', aspect: '1:1',
        alt: 'Medalla dorada con un canasto de frutas y un rombo de tejido maya.',
        brief: 'Ilustración de medalla circular dorada con un canasto de frutas guatemaltecas (aguacate, mango, güisquil) sobre un fondo de rombos de tejido. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024.',
      },
      steps: [
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.8'], prompt: 'Un rótulo pentagonal tiene cuatro ángulos de **95°, 105°, 110° y 125°**. ¿Cuánto mide el quinto ángulo?' },
          { answer: 105, unit: '°', misconceptions: [
            { value: 435, msg: 'Esa es la suma de los cuatro ángulos conocidos.' },
            { value: 285, msg: 'Usaste 720°, que corresponde a un hexágono.' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.3.1'], prompt: 'Una persona mayor llega al puesto. ¿Cuál frase usa un título y el trato de **usted** correctamente?' },
          { options: [
            { id: 'a', text: 'Buenos días, doña Marta. ¿Qué desea usted?' },
            { id: 'b', text: 'Buenos días, Doña. Marta. ¿Qué querés?' },
            { id: 'c', text: '¡Ey, Marta! Decime qué vas a llevar.' },
          ], correct: ['a'] },
        ),
        S.order(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.2'], prompt: 'Ordena estas palabras alfabéticamente.' },
          { items: [
            { id: 'w1', text: 'cacao' }, { id: 'w2', text: 'chile' }, { id: 'w3', text: 'cuna' }, { id: 'w4', text: 'lima' },
            { id: 'w5', text: 'llama' }, { id: 'w6', text: 'nuez' }, { id: 'w7', text: 'ñame' },
          ], labels: { start: 'Primera (A)', end: 'Última (Z)' } },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.4.4'], prompt: '¿Qué propuesta une una necesidad, un recurso local y un saber familiar?' },
          { options: [
            { id: 'a', text: 'Preparar tortillas con el maíz de la parcela y la receta de la abuela para vender donde no hay tortillería' },
            { id: 'b', text: 'Comprar aparatos caros sin saber quién los necesita' },
            { id: 'c', text: 'Ofrecer algo que la familia no sabe hacer con materiales que no consigue' },
            { id: 'd', text: 'Copiar el puesto vecino sin observar qué hace falta' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.3'], prompt: 'Después de trabajar con tierra y antes de preparar comida, ¿qué medida reduce una ruta de exposición a parásitos?' },
          { options: [
            { id: 'a', text: 'Lavarse las manos con agua y jabón' },
            { id: 'b', text: 'Compartir utensilios sin lavarlos' },
            { id: 'c', text: 'Tomar medicamentos sin diagnóstico' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.1'], prompt: 'En cada relación de parasitismo, identifica al hospedero.' },
          { leftTitle: 'Caso', rightTitle: 'Hospedero', pairs: [
            { id: 'a', left: 'Una garrapata se alimenta de la sangre de un perro', right: 'El perro' },
            { id: 'b', left: 'Una planta parásita extrae agua y nutrientes de un árbol', right: 'El árbol' },
          ] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.1.1'], prompt: 'Una muestra ficticia y fechada indica que en Región Lago 45% de la población tiene menos de 18 años. Evalúa qué permite inferir ese único indicador.' },
          { statements: [
            { text: 'El dato permite preguntar por la capacidad de escuelas y servicios juveniles, pero requiere información local adicional.', answer: true },
            { text: 'El porcentaje demuestra que todas las familias de Región Lago tienen las mismas necesidades.', answer: false },
          ] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.5'], prompt: 'Clasifica ejemplos distintos del patrimonio de Guatemala.' },
          { buckets: [
            { id: 'mat', label: 'Material', icon: 'Landmark' },
            { id: 'inm', label: 'Inmaterial', icon: 'Music' },
            { id: 'nat', label: 'Natural', icon: 'Mountain' },
          ], items: [
            { id: 'p1', text: 'El sitio arqueológico Quiriguá', bucket: 'mat' },
            { id: 'p2', text: 'Una pieza antigua de cerámica', bucket: 'mat' },
            { id: 'p3', text: 'El baile del torito', bucket: 'inm' },
            { id: 'p4', text: 'La receta del kak’ik transmitida en una familia', bucket: 'inm' },
            { id: 'p5', text: 'El volcán Tajumulco', bucket: 'nat' },
            { id: 'p6', text: 'La selva de Petén', bucket: 'nat' },
          ] },
        ),
        S.fill(
          { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.2'], prompt: 'Complete the dialogue. (Quieres **cuatro papas** y cuestan **Q20**.)' },
          { text: 'Can I have four [[potatoes]], please?\nHow [[much]] is it?\nIt\'s [[twenty]] quetzales.', distractors: ['potatos', 'many', 'twelve'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.2'], prompt: 'Una melodía avanza **Do – Re – Mi – Fa – Sol**. ¿Cómo es su movimiento?' },
          { options: [
            { id: 'a', text: 'Sube por grado conjunto' },
            { id: 'b', text: 'Baja por grado conjunto' },
            { id: 'c', text: 'Sube por saltos' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.2'], prompt: 'Una niña opina sobre una decisión escolar y las personas adultas la escuchan. ¿Qué grupo de derechos se respeta?' },
          { options: [
            { id: 'a', text: 'Participación' },
            { id: 'b', text: 'Supervivencia' },
            { id: 'c', text: 'Protección contra la explotación' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.3'], prompt: 'Decide si cada observación describe una **velocidad constante**.' },
          { statements: [
            { text: 'Una corredora recorre la misma distancia en cada segundo.', answer: true },
            { text: 'Un corredor avanza cada segundo una distancia mayor que la anterior.', answer: false },
          ] },
        ),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 1 (el primer área = área principal) */
  bank: [
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.9'], prompt: 'Para dibujar un rótulo circular, abres el compás a **6 cm**. ¿Cuánto medirá el diámetro del círculo?' },
      { answer: 12, unit: 'cm', misconceptions: [{ value: 6, msg: '6 cm es el radio. El diámetro mide dos radios.' }] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.7'], prompt: 'Un marco cerrado tiene **diez lados** y diez vértices. ¿Cómo se llama ese polígono?' },
      { options: [{ id: 'a', text: 'Decágono' }, { id: 'b', text: 'Eneágono' }, { id: 'c', text: 'Hexágono' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.8'], prompt: 'Un marco cuadrilateral irregular tiene tres ángulos de **83°, 96° y 112°**. ¿Cuánto mide el cuarto ángulo?' },
      { answer: 69, unit: '°' }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.1'], prompt: '"Don Luis compra 4 libras de tomate a Q5 la libra y paga con un billete de Q50. Su hija tiene 11 años. ¿Cuánto le dan de vuelto?" ¿Qué dato **sobra**?' },
      { options: [{ id: 'a', text: 'La edad de la hija' }, { id: 'b', text: 'El precio de la libra' }, { id: 'c', text: 'El billete de Q50' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.2'], prompt: 'Quieres buscar la palabra **"corrieron"** en el diccionario. ¿Qué forma buscas?' },
      { options: [{ id: 'a', text: 'correr' }, { id: 'b', text: 'corrieron' }, { id: 'c', text: 'corrida' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.2'], prompt: '¿Qué daño puede causar un parásito intestinal sin que el síntoma por sí solo confirme un diagnóstico?' },
      { options: [
        { id: 'a', text: 'Consumir nutrientes o irritar el intestino' },
        { id: 'b', text: 'Crear cloroplastos en la sangre' },
        { id: 'c', text: 'Convertir una célula en piedra' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.1.1'], prompt: '¿Qué ser vivo es **unicelular**?' },
      { options: [{ id: 'a', text: 'El paramecio' }, { id: 'b', text: 'La lombriz de tierra' }, { id: 'c', text: 'El perro' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.1.1'], prompt: '¿Qué continente tiene **más de la mitad** de la población del mundo?' },
      { options: [{ id: 'a', text: 'Asia' }, { id: 'b', text: 'Europa' }, { id: 'c', text: 'Oceanía' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.5'], prompt: 'Un archivo presta a la escuela una reproducción autorizada de un antiguo registro de mercado. ¿Qué plan contribuye a conservarlo durante la exposición?' },
      { options: [
        { id: 'a', text: 'Anotar su procedencia, colocarlo en un soporte que no lo dañe y devolverlo en la fecha acordada' },
        { id: 'b', text: 'Recortar una parte para repartir recuerdos entre visitantes' },
        { id: 'c', text: 'Quitar la información de origen y presentarlo como propiedad de la escuela' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.1'], prompt: '¿Cuál paso pertenece a un instructivo claro para ordenar una mesa de venta?' },
      { options: [
        { id: 'a', text: 'Finalmente, guarda los utensilios limpios en un recipiente tapado.' },
        { id: 'b', text: 'La mesa quedó muy bonita y alegre.' },
        { id: 'c', text: 'Tal vez alguien ordene todo algún día.' },
      ], correct: ['a'] }),
    S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.2'], prompt: 'Complete the service exchange. El mango cuesta Q12.' },
      { text: 'SELLER: Can I [[help]] you?\nCUSTOMER: How much is the mango?\nSELLER: It is [[twelve]] quetzales.\nCUSTOMER: Thank you!\nSELLER: You are [[welcome]].', distractors: ['many', 'twenty', 'please'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.2'], prompt: 'Un compás de **2/4** ya tiene una negra. ¿Qué figura falta para completarlo?' },
      { options: [
        { id: 'a', text: 'Una negra' },
        { id: 'b', text: 'Una blanca' },
        { id: 'c', text: 'Una redonda' },
      ], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.5'], prompt: 'En una secuencia, Rosa corre, gira y lanza una pelota. ¿Cuántas habilidades simples combina?' },
      { answer: 3, unit: 'habilidades' }),

    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.2'], prompt: 'Una comunidad ya tiene escuela, pero muchas familias aún no cuentan con agua apta para consumo. ¿Qué conclusión se apoya en esos datos?' },
      { options: [
        { id: 'a', text: 'Hay un avance, pero todavía no se cumplen plenamente todos los derechos' },
        { id: 'b', text: 'Todos los derechos ya están garantizados porque existe una escuela' },
        { id: 'c', text: 'Ningún derecho se cumple en la comunidad' },
      ], correct: ['a'] }),
    S.sort({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.3.2'], prompt: 'Clasifica acciones para organizar con participación un centro de información comunitaria.' },
      { buckets: [
        { id: 'p', label: 'Promueve participación', icon: 'Users' },
        { id: 'n', label: 'No la promueve', icon: 'UserX' },
      ], items: [
        { id: 'i1', text: 'Explicar para qué se solicitan los aportes', bucket: 'p' },
        { id: 'i2', text: 'Asignar roles de recepción y clasificación', bucket: 'p' },
        { id: 'i3', text: 'Ocultar cómo se usarán las fichas', bucket: 'n' },
        { id: 'i4', text: 'Devolver una síntesis con datos pendientes', bucket: 'p' },
      ] }),
  ],
});
