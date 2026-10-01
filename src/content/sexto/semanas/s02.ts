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
        'Lavar los alimentos con agua apta para consumo, separar el dinero de la comida, dejar el cuchillo a una persona adulta, mantener el alimento tapado y lavarse las manos después de manejar dinero ayuda a reducir riesgos de contaminación.',
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
          { fase: 'explorar', areas: ['pyd', 'l2'], cnb: ['pyd:1.4.4'], ambito: 'emprender', title: 'Se organiza el mercadito',
            prompt: 'Recupera lo aprendido: el equipo de **Marta** planea un puesto y necesita tomar tres decisiones que ya practicaste esta semana.' },
          { icon: 'Store', body: 'El plan del puesto debe ser **posible**, **higiénico** y **respetuoso**.', reveal: [
            { icon: 'Lightbulb', front: 'Productividad', back: 'Una **oferta sencilla** que una necesidad, un recurso local y un saber.' },
            { icon: 'Microscope', front: 'Ciencias Naturales', back: 'Un **procedimiento de higiene** que reduzca el riesgo de contaminación.' },
            { icon: 'MessagesSquare', front: 'L2', back: 'Frases claras y **respetuosas** para saludar, ofrecer y despedirse.' },
          ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.4.4'], ambito: 'emprender',
            prompt: 'El equipo de Marta anota: **Necesidad:** en el recreo casi no hay fruta lista para comer. **Recurso:** la familia de Marta tiene palos de mango y de naranja. **Saber:** su abuela prepara curtido de mango y fresco de naranja. ¿Qué idea une las tres cosas?',
            hint: 'Usa la fórmula: necesidad + recurso + saber = idea productiva.',
            explain: 'La idea responde a la necesidad (fruta en el recreo), usa el recurso (mangos y naranjas de la familia) y aprovecha el saber de la abuela.' },
          { options: [
            { id: 'a', text: 'Vender vasitos de mango y fresco de naranja en el recreo', icon: 'Citrus' },
            { id: 'b', text: 'Vender juguetes de plástico comprados en la ciudad', icon: 'ToyBrick', feedback: 'No usa ningún recurso ni saber de la familia, ni responde a la necesidad de fruta.' },
            { id: 'c', text: 'Regalar las naranjas a la tienda del pueblo', icon: 'Gift', feedback: 'No responde a la necesidad del recreo ni genera ingresos para el equipo.' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.5.3'], ambito: 'hacer',
            prompt: 'Recupera y aplica el procedimiento que practicaste: ¿cada acción **previene** la contaminación o **aumenta el riesgo**?',
            hint: 'Recuerda los cinco cuidados: agua apta para consumo, dinero separado, cuchillo a cargo de una persona adulta, alimento tapado y manos lavadas después de manejar dinero.',
            explain: 'Las acciones preventivas aplican el procedimiento modelado en L2. Las otras invierten uno de sus cuidados y aumentan el riesgo de contaminación.' },
          { buckets: [
            { id: 'prev', label: 'Previene', icon: 'ShieldCheck', color: 'var(--c-ok)' },
            { id: 'riesgo', label: 'Aumenta el riesgo', icon: 'TriangleAlert', color: 'var(--c-hint)' },
          ], items: [
            { id: 'a1', text: 'Lavar la fruta con agua apta para consumo', bucket: 'prev' },
            { id: 'a2', text: 'Mantener el dinero separado de la comida', bucket: 'prev' },
            { id: 'a3', text: 'Tapar los vasitos de fruta', bucket: 'prev' },
            { id: 'a4', text: 'Dejar que una niña o un niño use el cuchillo', bucket: 'riesgo', feedback: 'El cuchillo queda a cargo de una persona adulta.' },
            { id: 'a5', text: 'Poner los billetes junto a la fruta lista para servir', bucket: 'riesgo' },
            { id: 'a6', text: 'Tocar comida después de cobrar sin lavarse las manos', bucket: 'riesgo', feedback: 'Después de manejar dinero, hay que lavarse las manos antes de tocar alimentos.' },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['l2', 'cnt'], cnb: ['l2:2.1.1', 'cnt:1.5.3'], ambito: 'hacer',
            prompt: 'Retoma el **procedimiento** que modelaste en L2 y Ciencias: ordena sus pasos para el puesto.',
            hint: 'Fíjate en las palabras de orden y recupera los cinco cuidados del procedimiento de L2.',
            explain: 'Este orden aplica solo lo aprendido: agua apta para consumo, dinero separado, cuchillo a cargo de una persona adulta, alimento tapado y lavado de manos después de manejar dinero.' },
          { items: [
            { id: 'p1', text: 'Primero, separa el dinero de la comida y asigna a la persona que cobrará.', icon: 'BadgeDollarSign' },
            { id: 'p2', text: 'Después, lávate las manos con agua y jabón.', icon: 'HandHelping' },
            { id: 'p3', text: 'Luego, lava la fruta con agua apta para consumo y deja que una persona adulta use el cuchillo.', icon: 'UtensilsCrossed' },
            { id: 'p4', text: 'A continuación, sirve la fruta y mantenla tapada.', icon: 'CupSoda' },
            { id: 'p5', text: 'Quien cobra maneja el dinero sin tocar la comida.', icon: 'Banknote' },
            { id: 'p6', text: 'Finalmente, después de manejar dinero, lávate las manos antes de tocar alimentos.', icon: 'Hand' },
          ], labels: { start: 'Primer paso', end: 'Último paso' } },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.1'], ambito: 'conocer',
            prompt: 'El instructivo ya tiene **título** y **pasos**. Según lo que aprendiste, ¿qué parte le falta?',
            hint: 'Piensa en las tres partes de un instructivo.',
            explain: 'Un instructivo tiene título, **materiales** y pasos. Para este procedimiento se prepara jabón, agua apta para consumo, un cuchillo que usará una persona adulta, recipientes con tapa y un lugar separado para el dinero.' },
          { options: [
            { id: 'a', text: 'La lista de materiales' },
            { id: 'b', text: 'Un final sorpresa', feedback: 'Eso es propio de un cuento, no de un instructivo.' },
            { id: 'c', text: 'La opinión de quien lo escribió', feedback: 'Un instructivo dice qué hacer; no necesita opiniones.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.3.1'], ambito: 'convivir',
            prompt: 'Llega al puesto **doña Chayo**, una señora mayor de la comunidad. ¿Cuál es el saludo más respetuoso?',
            hint: 'Con personas mayores, desconocidas o con autoridad usamos **usted** y un título como don o doña.',
            explain: 'Usar "usted" y el título "doña" antes del nombre muestra respeto. En muchos idiomas mayas también hay formas especiales para dirigirse a las personas: pregunta en tu familia cómo se hace.' },
          { options: [
            { id: 'a', text: '"Buenos días, doña Chayo. ¿En qué le puedo servir?"' },
            { id: 'b', text: '"¿Qué querés, vos?"', feedback: '"Vos" es para amistades y familia de confianza, y la pregunta suena brusca.' },
            { id: 'c', text: '"¡Ey! ¿Va a comprar o no?"', feedback: 'No saluda ni usa palabras de cortesía.' },
          ], correct: ['a'] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.3.1'], ambito: 'hacer',
            prompt: 'Completa el cartel de bienvenida del mercadito con los **títulos** bien escritos.',
            hint: 'Las abreviaturas de títulos empiezan con mayúscula y llevan punto. Don y doña se escriben con minúscula antes del nombre.',
            explain: 'Licda. es la abreviatura de licenciada: empieza con mayúscula y lleva punto. "doña" va con minúscula dentro de la oración.' },
          { text: 'Hoy nos visitan la [[Licda.]] Ana Pérez, nutricionista del centro de salud, y [[doña]] Rosario Tuy, que enseñará a preparar fresco de súchiles.', distractors: ['licda', 'Doña.'] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.3.1'], ambito: 'hacer',
            prompt: 'Completa el intercambio de servicio y luego léelo en voz alta con tono amable.',
            hint: 'Usa un saludo, usted, por favor y gracias.',
            explain: 'Un intercambio útil saluda, ofrece el producto con claridad, confirma el pedido y agradece.' },
          { text: 'VENDEDORA: [[Buenos días]], doña Elena. ¿En qué le puedo servir?\nCLIENTA: Quisiera dos vasos de fruta, [[por favor]].\nVENDEDORA: Con gusto. Aquí tiene [[usted]].\nCLIENTA: Muchas gracias.\nVENDEDORA: Gracias a usted.', distractors: ['Qué quiere', 'vos', 'rápido'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['pyd', 'cnt', 'l2'], cnb: ['pyd:1.4.4', 'cnt:1.5.3', 'l2:2.1.1', 'l2:1.3.1'], ambito: 'emprender', title: 'Producto: plan de un puesto sano y respetuoso',
            prompt: 'Elabora el **plan de tu puesto** en una hoja. Usa solo decisiones que ya practicaste y completa cada parte.' },
          { goal: 'Diseñar un plan de puesto **posible, higiénico y respetuoso** para el mercadito escolar.',
            steps: [
              { title: 'Oferta simple', detail: 'Escribe qué ofrecerás, a qué precio y qué necesidad, recurso local y saber familiar reúne.' },
              { title: 'Procedimiento de higiene', detail: 'Anota materiales y cuatro pasos breves: **primero**, separa el dinero de la comida y asigna quién cobra; **después**, lava el alimento con agua apta para consumo y deja el cuchillo a una persona adulta; **luego**, sirve y mantén el alimento tapado; **finalmente**, después de manejar dinero, lávate las manos antes de tocar alimentos.' },
              { title: 'Servicio respetuoso', detail: 'Escribe un saludo con usted y don o doña, una frase para ofrecer el producto y una despedida con gracias.' },
            ],
            evidence: 'Una hoja con una oferta simple, un procedimiento de higiene de cuatro pasos y tres frases de servicio respetuoso.',
            rubric: [
              'Mi oferta es sencilla y usa un recurso y un saber disponibles',
              'Mi procedimiento tiene materiales y cuatro pasos: usa agua apta para consumo, separa dinero y comida, reserva el cuchillo para una persona adulta, mantiene el alimento tapado y exige lavarse las manos después de manejar dinero',
              'Mi lenguaje de servicio usa usted, un título y palabras de cortesía',
            ] },
        ),
        cierre({ areas: ['pyd', 'cnt', 'l2'], cnb: ['pyd:1.4.4', 'l2:1.3.1'] },
          ['Genero una idea productiva con la fórmula necesidad + recurso + saber', 'Escribo instrucciones de higiene en orden', 'Atiendo a otras personas con palabras de respeto'],
          ['Después de manejar dinero, me lavaré las manos antes de tocar alimentos', 'Saludaré con respeto a las personas mayores del mercado', 'Preguntaré en casa qué saberes de mi familia podrían ser un emprendimiento']),
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
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.4.1'], prompt: 'Una investigadora observa una estructura formada por ADN enrollado que contiene muchos genes. ¿Qué estructura observa?' },
          { options: [
            { id: 'a', text: 'Un cromosoma' },
            { id: 'b', text: 'Un gen' },
            { id: 'c', text: 'Una célula reproductora' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.1'], prompt: 'Clasifica estos parásitos por el lugar donde viven en el hospedero.' },
          { buckets: [
            { id: 'ecto', label: 'Ectoparásito (por fuera)', icon: 'Bug' },
            { id: 'endo', label: 'Endoparásito (por dentro)', icon: 'Activity' },
          ], items: [
            { id: 'x1', text: 'Ácaro de la sarna', bucket: 'ecto' },
            { id: 'x2', text: 'Pulga', bucket: 'ecto' },
            { id: 'x3', text: 'Garrapata', bucket: 'ecto' },
            { id: 'x4', text: 'Giardia', bucket: 'endo' },
            { id: 'x5', text: 'Oxiuro', bucket: 'endo' },
            { id: 'x6', text: 'Tenia', bucket: 'endo' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.1.1'], prompt: 'Un municipio tiene una población joven que crece con rapidez. ¿Qué decisión se apoya mejor en ese dato?' },
          { options: [
            { id: 'a', text: 'Planificar más aulas y oportunidades de empleo futuro' },
            { id: 'b', text: 'Cerrar escuelas porque habrá menos estudiantes' },
            { id: 'c', text: 'Ignorar la edad de la población al planificar servicios' },
          ], correct: ['a'] },
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
            { id: 'p4', text: 'El idioma garífuna', bucket: 'inm' },
            { id: 'p5', text: 'El lago de Atitlán', bucket: 'nat' },
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
          { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.3'], prompt: 'Decide si estas acciones ayudan a **desacelerar con control**.' },
          { statements: [
            { text: 'Acortar los pasos y flexionar las rodillas de manera gradual ayuda a frenar.', answer: true },
            { text: 'Bloquear las rodillas y detenerse de golpe es una técnica de frenado controlado.', answer: false },
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
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.8', 'mat:1.1.6'], prompt: 'Un rótulo tiene forma de **octágono regular**. ¿Cuánto mide cada ángulo interior?' },
      { answer: 135, unit: '°' }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.1'], prompt: '"Don Luis compra 4 libras de tomate a Q5 la libra y paga con un billete de Q50. Su hija tiene 11 años. ¿Cuánto le dan de vuelto?" ¿Qué dato **sobra**?' },
      { options: [{ id: 'a', text: 'La edad de la hija' }, { id: 'b', text: 'El precio de la libra' }, { id: 'c', text: 'El billete de Q50' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.2'], prompt: 'Quieres buscar la palabra **"corrieron"** en el diccionario. ¿Qué forma buscas?' },
      { options: [{ id: 'a', text: 'correr' }, { id: 'b', text: 'corrieron' }, { id: 'c', text: 'corrida' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.4.1'], prompt: 'Una instrucción para el grupo sanguíneo ocupa un tramo de ADN. ¿Cómo se llama ese tramo?' },
      { options: [
        { id: 'a', text: 'Gen' },
        { id: 'b', text: 'Cromosoma completo' },
        { id: 'c', text: 'Núcleo' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.1.1'], prompt: '¿Qué ser vivo es **unicelular**?' },
      { options: [{ id: 'a', text: 'El paramecio' }, { id: 'b', text: 'La lombriz de tierra' }, { id: 'c', text: 'El perro' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.3'], prompt: 'Una persona cree que tiene lombrices. ¿Qué es lo correcto para eliminarlas?' },
      { options: [
        { id: 'a', text: 'Ir al centro de salud y seguir el tratamiento indicado' },
        { id: 'b', text: 'Tomar cualquier pastilla que tenga un vecino' },
        { id: 'c', text: 'Esperar a que se vayan solas' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.1.1'], prompt: '¿Qué continente tiene **más de la mitad** de la población del mundo?' },
      { options: [{ id: 'a', text: 'Asia' }, { id: 'b', text: 'Europa' }, { id: 'c', text: 'Oceanía' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:2.1.1'], prompt: '¿Cuál de estos recursos naturales es **no renovable**?' },
      { options: [{ id: 'a', text: 'El gas natural' }, { id: 'b', text: 'La energía del viento' }, { id: 'c', text: 'Un bosque reforestado' }], correct: ['a'] }),
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
    S.tf({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.5', 'ef:1.3.6'], prompt: 'Decide si cada afirmación sobre una combinación motriz es verdadera o falsa.' },
      { statements: [
        { text: 'Correr, saltar una línea y continuar corriendo combina habilidades simples.', answer: true },
        { text: 'Caer con las rodillas rígidas ayuda a amortiguar el salto.', answer: false },
        { text: 'Practicar despacio antes de aumentar la velocidad favorece el control.', answer: true },
      ] }),

    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.2'], prompt: 'Después de una tormenta, una familia recibe agua apta para consumo, alimentos y atención médica. ¿Qué grupo de derechos se está atendiendo?' },
      { options: [{ id: 'a', text: 'Supervivencia' }, { id: 'b', text: 'Participación' }, { id: 'c', text: 'Desarrollo' }], correct: ['a'] }),
    S.sort({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.2.1'], prompt: 'Clasifica lo que necesita una tejedora que quiere vender sus güipiles.' },
      { buckets: [
        { id: 's', label: 'Saber', icon: 'Brain' },
        { id: 'h', label: 'Habilidad', icon: 'Hammer' },
        { id: 'a', label: 'Actitud', icon: 'Heart' },
      ], items: [
        { id: 'i1', text: 'Conocer el significado de los diseños', bucket: 's' },
        { id: 'i2', text: 'Tejer en telar de cintura', bucket: 'h' },
        { id: 'i3', text: 'Ser paciente con los trabajos largos', bucket: 'a' },
        { id: 'i4', text: 'Calcular cuánto hilo necesita', bucket: 'h' },
        { id: 'i5', text: 'Ser honesta con el precio', bucket: 'a' },
      ] }),
  ],
});
