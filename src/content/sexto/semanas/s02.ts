import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 2 · Unidad 1 "Conociendo nuestras raíces"
 * Tema generador: Día de mercado en mi pueblo
 * Cierre semanal (v3): las 27 lecciones de materia viven en src/content/sexto/materias/<area>/u1/s02.ts.
 * El viernes: Taller "Un puesto sano en el mercadito escolar" (Productividad + Ciencias Naturales +
 * L2 + Inglés) y Reto semanal.
 */
export default semana({
  id: 's02',
  unidad: 1,
  semana: 2,
  kind: 'aprendizaje',
  temaGenerador: 'Día de mercado en mi pueblo',
  title: 'Día de mercado en mi pueblo',
  subtitle: 'Polígonos, genes y seres de una o muchas células, parásitos, población y patrimonio, y respeto al comprar y vender',
  icon: 'Store',
  color: 'var(--area-cnt)',
  contexto: 'En Guatemala, el día de mercado reúne a familias k’iche’, kaqchikel, q’eqchi’, garífunas, xinkas y ladinas que venden, compran y conversan. Esta semana descubrirás los polígonos de los tejidos y de la arquitectura maya, cómo los genes pasan de madres y padres a hijos, qué seres viven con una sola célula y cómo prevenir los parásitos que viajan en el agua y los alimentos. También leerás datos de la población del mundo, valorarás el patrimonio y los 25 idiomas de Guatemala, comprarás en inglés, usarás palabras de respeto y pensarás ideas de emprendimiento para tu comunidad.',
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
      title: 'Taller: un puesto sano en el mercadito escolar',
      icon: 'Store',
      minutes: 18,
      gancho: 'Si tu grado organizara un mercadito en la escuela, ¿qué venderías, cómo cuidarías la salud de tus clientes y cómo los atenderías?',
      objetivos: [
        'Generar la idea de un puesto uniendo una necesidad, un recurso y un saber de la comunidad',
        'Escribir instrucciones de higiene que prevengan los parásitos',
        'Atender a los clientes con palabras de respeto en español y en inglés',
      ],
      resumen: [
        'Necesidad + recurso + saber = idea productiva. Un buen equipo emprendedor suma saberes, habilidades y actitudes.',
        'La fruta que se come cruda puede llevar huevecillos y quistes de parásitos: manos limpias, agua clorada y comida tapada los previenen.',
        'Un instructivo tiene título, materiales y pasos en orden con palabras como primero, después, luego y finalmente.',
        'Con personas mayores o desconocidas usamos usted y títulos (don, doña, Sr., Licda.); en inglés: Can I help you? · How much is it? · Here you are.',
      ],
      media: {
        id: 's02-d5-taller-puesto', kind: 'image', title: 'El mercadito escolar', aspect: '4:3',
        alt: 'Patio de escuela con puestos hechos con mesas y manteles tejidos; un puesto de vasitos de fruta tapados, un cartel de precios en quetzales y una estación para lavarse las manos.',
        brief: 'Ilustración plana y alegre de un mercadito escolar en el patio de una escuela pública guatemalteca: mesas con manteles de tela típica, un puesto de fruta picada en vasos tapados, un recipiente con chorro y jabón para lavarse las manos, un bote de basura con tapa, un cartel "Fruta fresca · Q2.00 / Fresh fruit" y niñas y niños de distintos pueblos atendiendo a una señora mayor. Sin marcas comerciales ni rostros identificables.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'l2'], cnb: ['pyd:1.4.4'], ambito: 'emprender', title: 'Se organiza el mercadito',
            prompt: 'El viernes habrá **mercadito escolar**: cada equipo de sexto planea un puesto. El equipo de **Marta** quiere hacerlo bien. Toca cada tarjeta para ver qué necesitan de lo que aprendiste esta semana.' },
          { icon: 'Store', body: 'Un buen puesto es **útil**, **sano** y **respetuoso**.', reveal: [
            { icon: 'Lightbulb', front: 'Productividad', back: 'Una **idea** que una necesidad, un recurso y un saber, y un equipo con buen **perfil emprendedor**.' },
            { icon: 'Microscope', front: 'Ciencias Naturales', back: 'Evitar que los **parásitos** lleguen a la comida.' },
            { icon: 'ListOrdered', front: 'L2', back: 'Un **instructivo** claro y **palabras de respeto** para atender.' },
            { icon: 'Languages', front: 'Inglés', back: 'Vender a visitantes: **Can I help you? · How much is it?**' },
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
        S.choice(
          { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.2.1'], ambito: 'emprender',
            prompt: 'Para que el puesto funcione, el equipo necesita **actitudes** emprendedoras. ¿Cuáles de estas son **actitudes**? Elige todas las correctas.',
            hint: 'Las actitudes son **cómo actúas**. Los saberes son lo que conoces y las habilidades, lo que sabes hacer.',
            explain: 'Responsabilidad, honestidad y perseverancia son actitudes. Saber los precios es un saber; pelar y picar fruta es una habilidad.' },
          { multiple: true, options: [
            { id: 'a', text: 'Llegar a tiempo a atender el puesto (responsabilidad)', icon: 'Clock' },
            { id: 'b', text: 'Dar el vuelto exacto aunque el cliente no se dé cuenta (honestidad)', icon: 'HandCoins' },
            { id: 'c', text: 'Seguir intentando aunque el primer día se venda poco (perseverancia)', icon: 'Repeat' },
            { id: 'd', text: 'Conocer el precio de la fruta en el mercado', icon: 'Tag', feedback: 'Eso es un **saber**: algo que se conoce.' },
            { id: 'e', text: 'Pelar y picar fruta rápido', icon: 'Hand', feedback: 'Eso es una **habilidad**: algo que se sabe hacer.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.reading(
          { fase: 'construir', areas: ['cnt', 'l1'], cnb: ['cnt:1.5.1', 'cnt:1.5.2', 'cnt:1.5.3'], ambito: 'conocer',
            prompt: 'Antes de vender comida, el equipo pide consejo al centro de salud. Lee el aviso y responde.' },
          { genre: 'Aviso', heading: 'Fruta sana, niñez sana', passage:
            'Las frutas y verduras que se comen crudas pueden llevar **huevecillos de lombrices** y **quistes de ameba o de giardia**, tan pequeños que no se ven. Llegan a la fruta por el agua sucia, la tierra o las manos sin lavar.\n\nSi una persona se los traga, los parásitos se quedan a vivir en su intestino. Allí **le roban nutrientes** y pueden causarle diarrea, dolor de estómago, desnutrición y anemia.\n\nPara vender fruta en la escuela: lávese las manos con agua y jabón; lave la fruta con agua clorada; una persona adulta corta la fruta con tabla y cuchillo limpios; tape la comida para que no se paren las moscas. Si alguien tiene síntomas, que acuda al centro de salud y **no se automedique**.',
            questions: [
              { q: 'Los parásitos del aviso viven **dentro** del intestino. ¿Qué tipo de parásitos son?', options: [
                { id: 'a', text: 'Ectoparásitos' },
                { id: 'b', text: 'Endoparásitos' },
                { id: 'c', text: 'Plantas' },
              ], correct: 'b', why: 'Endo = dentro. Los ectoparásitos, como piojos y pulgas, viven por fuera del cuerpo.' },
              { q: 'Según el aviso, ¿por qué los parásitos pueden causar **desnutrición**?', options: [
                { id: 'a', text: 'Porque le roban nutrientes a la persona' },
                { id: 'b', text: 'Porque hacen que la fruta sepa mal' },
                { id: 'c', text: 'Porque dan mucha sed' },
              ], correct: 'a' },
              { q: '¿Por dónde llegan los huevecillos y quistes a la fruta?', options: [
                { id: 'a', text: 'Por el agua sucia, la tierra o las manos sin lavar' },
                { id: 'b', text: 'Por el sol' },
                { id: 'c', text: 'Nacen solos dentro de la fruta sana' },
              ], correct: 'a' },
            ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.5.3'], ambito: 'hacer',
            prompt: 'Revisa cómo trabaja el puesto. ¿Cada acción **previene** los parásitos o **aumenta el riesgo**?',
            hint: 'Piensa en los caminos de los parásitos: agua sucia, tierra, manos sin lavar y moscas.',
            explain: 'Manos limpias, agua clorada y comida tapada cierran el paso a los parásitos. El agua destapada, las moscas y los billetes tocados antes de servir lo abren.' },
          { buckets: [
            { id: 'prev', label: 'Previene', icon: 'ShieldCheck', color: 'var(--c-ok)' },
            { id: 'riesgo', label: 'Aumenta el riesgo', icon: 'TriangleAlert', color: 'var(--c-hint)' },
          ], items: [
            { id: 'a1', text: 'Lavarse las manos con agua y jabón antes de servir', bucket: 'prev' },
            { id: 'a2', text: 'Lavar la fruta con agua clorada', bucket: 'prev' },
            { id: 'a3', text: 'Tapar los vasitos de fruta', bucket: 'prev' },
            { id: 'a4', text: 'Lavar la fruta con agua de un tonel destapado', bucket: 'riesgo', feedback: 'El agua destapada puede tener huevecillos y larvas.' },
            { id: 'a5', text: 'Dejar la fruta picada al aire, donde se paran las moscas', bucket: 'riesgo' },
            { id: 'a6', text: 'Cobrar con billetes y servir sin lavarse las manos', bucket: 'riesgo', feedback: 'Los billetes pasan por muchas manos: hay que lavarse antes de tocar la comida.' },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['l2', 'cnt'], cnb: ['l2:2.1.1', 'cnt:1.5.3'], ambito: 'hacer',
            prompt: 'El equipo escribe un **instructivo** para su puesto: "Cómo preparar vasitos de fruta seguros". Ordena los pasos.',
            hint: 'Fíjate en las palabras de orden: primero, después, luego, a continuación, finalmente.',
            explain: 'Las palabras de orden y los verbos de acción (lava, corta, sirve, tapa) hacen que cualquiera pueda seguir las instrucciones.' },
          { items: [
            { id: 'p1', text: 'Primero, lávate las manos con agua y jabón.', icon: 'HandHelping' },
            { id: 'p2', text: 'Después, lava la fruta con agua clorada.', icon: 'Droplets' },
            { id: 'p3', text: 'Luego, una persona adulta pela y corta la fruta sobre una tabla limpia.', icon: 'UtensilsCrossed' },
            { id: 'p4', text: 'A continuación, sirve la fruta en vasos limpios y tápalos.', icon: 'CupSoda' },
            { id: 'p5', text: 'Finalmente, echa las cáscaras en un bote con tapa y limpia la mesa.', icon: 'Trash2' },
          ], labels: { start: 'Primer paso', end: 'Último paso' } },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.1'], ambito: 'conocer',
            prompt: 'El instructivo ya tiene **título** y **pasos**. Según lo que aprendiste, ¿qué parte le falta?',
            hint: 'Piensa en las tres partes de un instructivo.',
            explain: 'Un instructivo tiene título, **materiales** y pasos. Con la lista de materiales (jabón, agua clorada, tabla, vasos con tapa, bote con tapa) se prepara todo antes de empezar.' },
          { options: [
            { id: 'a', text: 'La lista de materiales' },
            { id: 'b', text: 'Un final sorpresa', feedback: 'Eso es propio de un cuento, no de un instructivo.' },
            { id: 'c', text: 'La opinión de quien lo escribió', feedback: 'Un instructivo dice qué hacer; no necesita opiniones.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l2', 'ccss'], cnb: ['l2:1.3.1'], ambito: 'convivir',
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
          { fase: 'aplicar', areas: ['l3'], cnb: ['l3:1.1.2'], ambito: 'hacer',
            prompt: 'Unos visitantes que hablan inglés quieren **dos naranjas**. El precio es **Q10**. Completa el diálogo y luego dramatízalo en voz alta con alguien de tu casa.',
            hint: 'Can I help you? · Can I have…? · Here you are. · How much is it? · It\'s … quetzales.',
            explain: 'Estas frases de compra sirven en cualquier mercado: saludar, ofrecer ayuda, pedir, entregar y preguntar el precio.' },
          { text: 'SELLER: Good morning! Can I [[help]] you?\nVISITOR: Yes. Can I have two [[oranges]], please?\nSELLER: Here you [[are]].\nVISITOR: How [[much]] is it?\nSELLER: It\'s [[ten]] quetzales.\nVISITOR: Thank you!\nSELLER: You\'re welcome.', distractors: ['orange', 'many', 'twenty'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['pyd', 'cnt', 'l2', 'l3'], cnb: ['pyd:1.4.4', 'pyd:1.2.1', 'cnt:1.5.3', 'l2:2.1.1', 'l2:1.3.1'], ambito: 'emprender', title: 'Producto: la ficha de mi puesto',
            prompt: 'Ahora planea **tu propio puesto** para un mercadito escolar (puede ser de comida, artesanía o un servicio). Sigue los pasos y autoevalúate.' },
          { goal: 'Diseñar un puesto **útil, sano y respetuoso** para el mercadito escolar.',
            steps: [
              { title: 'La idea', detail: 'Escribe la necesidad, el recurso y el saber que usarás, y la idea que resulta.' },
              { title: 'El equipo', detail: 'Anota un saber, una habilidad y una actitud que aporta cada integrante (o tú, si trabajas solo).' },
              { title: 'Instructivo de higiene', detail: 'Escribe título, materiales y 4 o 5 pasos con palabras de orden para que tu producto sea seguro.' },
              { title: 'Atender con respeto', detail: 'Escribe un saludo con usted y un título (don, doña, Sr., Sra., Licda.) y dos frases en inglés para visitantes.' },
              { title: 'Cartel de precios', detail: 'Haz un cartel con el nombre del puesto, los productos y sus precios en quetzales.' },
            ],
            evidence: 'Una ficha en tu cuaderno o un cartel con la idea, el instructivo y los saludos.',
            rubric: [
              'Mi idea une una necesidad, un recurso y un saber de la comunidad',
              'Mi instructivo tiene título, materiales y pasos en orden',
              'Incluí al menos tres medidas para prevenir parásitos o cuidar la limpieza',
              'Mis saludos usan usted y títulos bien escritos, en español y en inglés',
            ] },
        ),
        cierre({ areas: ['pyd', 'cnt', 'l2'], cnb: ['pyd:1.4.4', 'l2:1.3.1'] },
          ['Genero una idea productiva con la fórmula necesidad + recurso + saber', 'Escribo instrucciones de higiene en orden', 'Atiendo a otras personas con palabras de respeto'],
          ['Me lavaré las manos con agua y jabón antes de comer', 'Saludaré con respeto a las personas mayores del mercado', 'Preguntaré en casa qué saberes de mi familia podrían ser un emprendimiento']),
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
      resumen: ['Superé el reto de la semana 2: polígonos, genes y células, parásitos, población y patrimonio, orden alfabético, música, inglés y derechos de la niñez.'],
      media: {
        id: 's02-d5-reto', kind: 'image', title: 'Medalla Guía del mercado', aspect: '1:1',
        alt: 'Medalla dorada con un canasto de frutas y un rombo de tejido maya.',
        brief: 'Ilustración de medalla circular dorada con un canasto de frutas guatemaltecas (aguacate, mango, güisquil) sobre un fondo de rombos de tejido. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024.',
      },
      steps: [
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.8'], prompt: 'Los ángulos interiores de un pentágono suman 540°. Cuatro de sus ángulos miden **100°, 110°, 120° y 95°**. ¿Cuánto mide el quinto ángulo?' },
          { answer: 115, unit: '°', misconceptions: [
            { value: 425, msg: 'Esa es la suma de los cuatro ángulos. Réstala a 540°.' },
            { value: 295, msg: 'Un pentágono suma 540°, no 720° (esa es la suma del hexágono).' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.6'], prompt: 'Un hexágono tiene sus **6 lados de 5 cm**, pero sus ángulos **no** son todos iguales. ¿Cómo se clasifica?' },
          { options: [
            { id: 'a', text: 'Regular, porque sus lados son iguales' },
            { id: 'b', text: 'Irregular, porque no cumple las dos condiciones' },
            { id: 'c', text: 'No es un polígono' },
          ], correct: ['b'] },
        ),
        S.order(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.2'], prompt: 'Ordena estas palabras alfabéticamente.' },
          { items: [
            { id: 'w1', text: 'cacao' }, { id: 'w2', text: 'chile' }, { id: 'w3', text: 'cuna' }, { id: 'w4', text: 'lima' },
            { id: 'w5', text: 'llama' }, { id: 'w6', text: 'nuez' }, { id: 'w7', text: 'ñame' },
          ], labels: { start: 'Primera (A)', end: 'Última (Z)' } },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.2'], prompt: 'Las palabras guía de una página del diccionario son **pájaro** y **palma**. ¿Cuál de estas palabras está en esa página?' },
          { options: [
            { id: 'a', text: 'paleta' },
            { id: 'b', text: 'pato' },
            { id: 'c', text: 'padre' },
            { id: 'd', text: 'pan' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.4.1'], prompt: '¿Cuántos cromosomas recibe cada persona de su **padre**?' },
          { options: [
            { id: 'a', text: '23' },
            { id: 'b', text: '46' },
            { id: 'c', text: '92' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.1'], prompt: 'Clasifica cada parásito según dónde vive.' },
          { buckets: [
            { id: 'ecto', label: 'Ectoparásito (por fuera)', icon: 'Bug' },
            { id: 'endo', label: 'Endoparásito (por dentro)', icon: 'Activity' },
          ], items: [
            { id: 'x1', text: 'Piojo', bucket: 'ecto' },
            { id: 'x2', text: 'Garrapata', bucket: 'ecto' },
            { id: 'x3', text: 'Pulga', bucket: 'ecto' },
            { id: 'x4', text: 'Tenia', bucket: 'endo' },
            { id: 'x5', text: 'Ameba', bucket: 'endo' },
            { id: 'x6', text: 'Lombriz intestinal', bucket: 'endo' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.1.1'], prompt: 'Un país tiene muchos nacimientos y la mayoría de su población es **muy joven**. Según sus indicadores, ¿qué necesita con más urgencia?' },
          { options: [
            { id: 'a', text: 'Escuelas y, más adelante, empleos' },
            { id: 'b', text: 'Más asilos para personas mayores' },
            { id: 'c', text: 'Nada: los indicadores no sirven para decidir' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.5'], prompt: 'Clasifica este patrimonio de Guatemala.' },
          { buckets: [
            { id: 'mat', label: 'Material', icon: 'Landmark' },
            { id: 'inm', label: 'Inmaterial', icon: 'Music' },
            { id: 'nat', label: 'Natural', icon: 'Mountain' },
          ], items: [
            { id: 'p1', text: 'La iglesia colonial de San Andrés Xecul', bucket: 'mat' },
            { id: 'p2', text: 'Una vasija maya antigua en un museo', bucket: 'mat' },
            { id: 'p3', text: 'La receta tradicional del pepián', bucket: 'inm' },
            { id: 'p4', text: 'El idioma q’eqchi’', bucket: 'inm' },
            { id: 'p5', text: 'Las pozas de Semuc Champey', bucket: 'nat' },
            { id: 'p6', text: 'El volcán de Agua', bucket: 'nat' },
          ] },
        ),
        S.fill(
          { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.2'], prompt: 'Complete the dialogue. (Quieres **tres tomates** y cuestan **Q15**.)' },
          { text: 'Can I have three [[tomatoes]], please?\nHow [[much]] is it?\nIt\'s [[fifteen]] quetzales.', distractors: ['tomatos', 'many', 'fifty'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.2'], prompt: 'Una melodía tiene estas notas seguidas: **Sol – Fa – Mi – Re – Do**. ¿Cómo es su movimiento?' },
          { options: [
            { id: 'a', text: 'Baja por grado conjunto' },
            { id: 'b', text: 'Sube por grado conjunto' },
            { id: 'c', text: 'Baja por saltos' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.2'], prompt: '¿A quiénes protege la Convención sobre los Derechos del Niño?' },
          { options: [
            { id: 'a', text: 'A toda persona menor de 18 años' },
            { id: 'b', text: 'Solo a quienes van a la escuela' },
            { id: 'c', text: 'Solo a menores de 5 años' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.3'], prompt: 'Vienes corriendo rápido y quieres **frenar con seguridad**. ¿Qué haces?' },
          { options: [
            { id: 'a', text: 'Doy pasos cortos, doblo las rodillas y llevo el tronco un poco hacia atrás' },
            { id: 'b', text: 'Me detengo de golpe con las piernas rectas' },
            { id: 'c', text: 'Me inclino hacia adelante y alargo los pasos' },
          ], correct: ['a'] },
        ),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 1 (el primer área = área principal) */
  bank: [
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.9'], prompt: 'Con el compás abierto a **3 cm** trazas un círculo y marcas 6 puntos seguidos sobre él. Al unirlos formas un hexágono regular. ¿Cuánto mide cada lado del hexágono?' },
      { answer: 3, unit: 'cm', misconceptions: [{ value: 6, msg: '6 cm sería el diámetro. Cada lado del hexágono mide lo mismo que el radio.' }] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.7'], prompt: '¿Cuántos lados tiene un **eneágono**?' },
      { options: [{ id: 'a', text: '9' }, { id: 'b', text: '11' }, { id: 'c', text: '7' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.8', 'mat:1.1.6'], prompt: '¿Cuánto mide **cada** ángulo interior de un hexágono regular?' },
      { options: [{ id: 'a', text: '120°' }, { id: 'b', text: '108°' }, { id: 'c', text: '720°' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.1'], prompt: '"Don Luis compra 4 libras de tomate a Q5 la libra y paga con un billete de Q50. Su hija tiene 11 años. ¿Cuánto le dan de vuelto?" ¿Qué dato **sobra**?' },
      { options: [{ id: 'a', text: 'La edad de la hija' }, { id: 'b', text: 'El precio de la libra' }, { id: 'c', text: 'El billete de Q50' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.2'], prompt: 'Quieres buscar la palabra **"corrieron"** en el diccionario. ¿Qué forma buscas?' },
      { options: [{ id: 'a', text: 'correr' }, { id: 'b', text: 'corrieron' }, { id: 'c', text: 'corrida' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.4.1'], prompt: '¿Qué es un **gen**?' },
      { options: [
        { id: 'a', text: 'Un pedazo de ADN con la instrucción para una característica' },
        { id: 'b', text: 'Un organelo que produce energía' },
        { id: 'c', text: 'Un parásito que vive en el intestino' },
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
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.2'], prompt: 'El derecho a opinar y ser escuchado pertenece al grupo de derechos de…' },
      { options: [{ id: 'a', text: 'Participación' }, { id: 'b', text: 'Supervivencia' }, { id: 'c', text: 'Protección' }], correct: ['a'] }),
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
