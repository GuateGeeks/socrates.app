import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 19 · Unidad 2 "Consolidando nuestras relaciones" · PROYECTO INTEGRADOR
 * Tema generador: Feria Red de la Milpa
 * Integra las semanas 11-18: milpa y Tierra, redes y cooperación, crecer con respeto,
 * decidir con información, alimento y memoria, bosques y libertades, comercio con el mundo
 * y el aire que compartimos (barriletes). Cada equipo monta un puesto con un proyecto
 * productivo o de servicio que fortalece las relaciones entre las familias.
 */
export default semana({
  id: 's19',
  unidad: 2,
  semana: 19,
  kind: 'proyecto',
  temaGenerador: 'Feria Red de la Milpa',
  title: 'Feria Red de la Milpa',
  subtitle: 'Proyecto: una feria escolar que une familias, salud y ambiente',
  icon: 'Store',
  color: 'var(--area-pyd)',
  contexto: 'En muchas comunidades las familias casi no se conocen, la refacción se llena de golosinas y se cortan árboles cerca de los nacimientos de agua. Esta semana tu grado organizará la Feria Red de la Milpa: cinco puestos con proyectos productivos y de servicio (refacción nutritiva, vivero, radio de la feria, barriletes con mensaje y trueque justo) para que las familias se relacionen, intercambien lo que producen y se comprometan a cuidar su salud y su ambiente.',
  ejes: ['vida-ciudadana', 'sostenible', 'trabajo', 'multiculturalidad', 'valores'],
  media: {
    id: 's19-portada', kind: 'video', title: 'Así se arma una feria que une', aspect: '16:9', duration: 60,
    alt: 'El patio de una escuela se transforma en una feria con cinco puestos de cartón y tela, familias que recorren, barriletes colgados y una mesa de trueque.',
    brief: 'Video en cámara rápida (animación 2D o dramatización con estudiantes, sin rostros identificables en primer plano) de 60 s. Un patio escolar vacío se llena de cinco puestos rotulados: "Refacción de la milpa" (atol, frijol, fruta), "Vivero y aire limpio" (arbolitos en bolsas), "Radio de la feria" (mesa con micrófono de cartón y bocina), "Barriletes con mensaje" (barriletes de papel de china) y "Trueque justo" (canastos con maíz, huevos y verduras). Llegan familias maya, garífuna, xinka y ladinas; una niña en silla de ruedas recorre sin obstáculos. Texto final: "Cuando compartimos, la comunidad crece". Música de marimba alegre.',
  },
  badge: { id: 'medalla-s19', name: 'Tejedor de redes', icon: 'Handshake', desc: 'Completaste el proyecto integrador de la Unidad 2' },
  lessons: [
    /* ───────────────────────── Día 1: Planificar e investigar ───────────────────────── */
    lesson({
      id: 's19-d1-planificar',
      title: 'Planificar e investigar',
      icon: 'ClipboardList',
      minutes: 15,
      day: 1,
      kind: 'proyecto',
      gancho: 'Si tu comunidad tuviera una feria para conocerse mejor, ¿qué puesto te gustaría atender y qué problema ayudaría a resolver?',
      objetivos: ['Comprender el reto de la feria y su rúbrica', 'Relacionar cada puesto con una necesidad real de la comunidad', 'Diseñar instrumentos para investigar', 'Organizar el equipo, los roles y el calendario'],
      resumen: [
        'La Feria Red de la Milpa tiene cinco puestos: Refacción de la milpa, Vivero y aire limpio, Radio de la feria, Barriletes con mensaje y Trueque justo.',
        'Cada puesto es un proyecto productivo o de servicio que responde a una necesidad de la escuela o la comunidad.',
        'Para investigar se usan instrumentos como la encuesta, la entrevista, la observación y la consulta de documentos, anotando siempre la fuente.',
        'Planificar es decidir qué, cómo, quién, cuándo y con qué recursos se hará el trabajo.',
      ],
      media: {
        id: 's19-d1-plano', kind: 'diagram', title: 'Plano de la Feria Red de la Milpa', aspect: '4:3',
        alt: 'Plano del patio escolar visto desde arriba con cinco puestos en círculo, una ruta de visita y una manta central de compromisos.',
        brief: 'Plano cenital de un patio escolar. Cinco puestos en forma de círculo, cada uno con ícono y color: 1 Refacción de la milpa (mazorca y taza, amarillo), 2 Vivero y aire limpio (arbolito, verde), 3 Radio de la feria (micrófono, azul), 4 Barriletes con mensaje (barrilete hexagonal, naranja), 5 Trueque justo (canasto y manos, violeta). En el centro, una "Manta de compromisos" hecha de retazos de tela. Flechas punteadas marcan la ruta desde la entrada. Rampas señaladas con el símbolo de accesibilidad. Estilo plano, legible en celular.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'ccss', 'fc'], cnb: ['pyd:4.1.2', 'ccss:4.1.2'], ambito: 'emprender', title: 'El reto: una feria que teje redes',
            prompt: 'Durante ocho semanas estudiaste la milpa, las redes entre seres vivos, tu salud, la historia, el bosque, el comercio y el aire. Ahora lo pondrás al servicio de tu comunidad. Toca cada tarjeta para conocer el reto.' },
          { icon: 'Store', body: 'Una **feria escolar** no es solo para vender: es un lugar para **encontrarse**, **intercambiar** y **aprender juntos**.', reveal: [
            { icon: 'Target', front: 'La necesidad', back: 'Las familias casi no se conocen, la refacción tiene muchas golosinas y se cortan árboles cerca de los nacimientos. Relaciones débiles hacen comunidades frágiles.' },
            { icon: 'Package', front: 'El producto', back: 'Una feria con **5 puestos**. Cada puesto es un proyecto **productivo** (produce algo) o **de servicio** (ayuda a alguien).' },
            { icon: 'Users', front: 'El público', back: 'Familias, estudiantes de otros grados, vecinas y vecinos, el COCODE y personal del centro de salud.' },
            { icon: 'HeartHandshake', front: 'El compromiso', back: 'Al salir, cada familia cose un retazo con un compromiso en la **Manta de compromisos**.' },
          ] },
        ),
        S.project(
          { fase: 'construir', areas: ['pyd', 'l1', 'art', 'fc'], cnb: ['pyd:4.1.2', 'pyd:4.3.2', 'l1:2.3.2', 'fc:3.2.3'], ambito: 'emprender',
            prompt: 'Esta es la **guía completa** del proyecto. Léela con tu equipo y vuelve a ella cada día.' },
          { goal: 'Organizar la Feria Red de la Milpa: cinco puestos con proyectos productivos o de servicio que fortalezcan las relaciones entre las familias y ayuden a cuidar la salud, el bosque, el aire y el comercio justo en la comunidad.',
            steps: [
              { title: '1. Formar equipos y elegir puesto', detail: 'Equipos de 4 o 5 con roles rotativos: coordinación, investigación, diseño, producción y vocería. Cada equipo elige uno de los 5 puestos y lo presenta al gobierno escolar.' },
              { title: '2. Investigar la necesidad', detail: 'Diseñar un instrumento (encuesta de 5 preguntas o guía de entrevista), aplicarlo a por lo menos 10 familias y consultar una fuente escrita. Anotar siempre la fuente.' },
              { title: '3. Diseñar el puesto', detail: 'Bocetar el puesto: nombre, producto o servicio, un cálculo (receta, volumen, precio o reparto), una gráfica de la encuesta y una actividad para el público.' },
              { title: '4. Producir', detail: 'Preparar el producto o servicio con materiales locales y reciclados, calcular cantidades y costos, escribir el cartel del puesto (borrador, revisión y versión final).' },
              { title: '5. Presentar en la feria', detail: 'Atender el puesto con cortesía, explicar en 2 minutos qué problema resuelve, invitar al público a participar y registrar cuántas personas visitaron.' },
              { title: '6. Evaluar y mejorar', detail: 'Analizar los datos y comentarios de los visitantes, escribir un plan de mejora y un compromiso que continúe después de la feria.' },
            ],
            evidence: 'Instrumento de investigación con sus resultados, boceto del puesto, cálculos, cartel final, gráfica de visitantes y plan de mejora del equipo.',
            rubric: [
              'El puesto responde a una necesidad real, comprobada con datos de la encuesta o entrevista',
              'Integra al menos tres áreas (por ejemplo, ciencias, matemáticas y arte)',
              'Los cálculos (cantidades, volumen, precios) son correctos y están explicados',
              'Es accesible e incluyente: letra grande, rampas, trato respetuoso a todas las culturas',
              'El equipo repartió roles con equidad entre niñas y niños y cumplió el calendario',
              'Propone un compromiso concreto que continúe después de la feria',
            ] },
        ),
        S.match(
          { fase: 'construir', areas: ['pyd', 'cnt', 'ccss', 'art'], cnb: ['pyd:4.1.2', 'cnt:5.3.2', 'cnt:6.3.2', 'ccss:3.4.2', 'art:4.3.3'], ambito: 'emprender',
            prompt: 'Une cada **puesto** con la **necesidad** de la comunidad que ayuda a resolver.',
            explain: 'Un proyecto tiene sentido cuando responde a una necesidad. Cada puesto usa lo que aprendiste en la unidad: nutrientes, reforestación, comercio y tradiciones.' },
          { leftTitle: 'Puesto', rightTitle: 'Necesidad', pairs: [
            { id: 'ref', left: 'Refacción de la milpa', leftIcon: 'Utensils', right: 'Niñas y niños comen golosinas y se cansan en clase' },
            { id: 'viv', left: 'Vivero y aire limpio', leftIcon: 'Sprout', right: 'Se cortan árboles cerca del nacimiento de agua' },
            { id: 'rad', left: 'Radio de la feria', leftIcon: 'Radio', right: 'Circulan rumores que nadie comprueba' },
            { id: 'bar', left: 'Barriletes con mensaje', leftIcon: 'Wind', right: 'Las nuevas generaciones olvidan el sentido de la tradición' },
            { id: 'tru', left: 'Trueque justo', leftIcon: 'ShoppingBasket', right: 'Los productores venden muy barato a intermediarios' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l2', 'pyd', 'ccss'], cnb: ['l2:1.1.6', 'pyd:2.1.1', 'ccss:5.3.2'], ambito: 'hacer',
            prompt: 'El equipo del puesto **Refacción de la milpa** diseña su **encuesta**. Clasifica cada pregunta: ¿sirve para el instrumento o conviene cambiarla?',
            hint: 'Una buena pregunta de encuesta es clara, se puede contar y no ofende ni empuja una respuesta.',
            explain: 'Las preguntas útiles dan datos que se pueden contar y graficar. Las preguntas que juzgan o que ya traen la respuesta dañan la investigación.' },
          { buckets: [
            { id: 'si', label: 'Sirve para la encuesta', icon: 'ClipboardCheck', color: 'var(--c-ok)' },
            { id: 'no', label: 'Conviene cambiarla', icon: 'RefreshCw', color: 'var(--c-hint)' },
          ], items: [
            { id: 'q1', text: '¿Qué trajiste hoy de refacción? (fruta, tortilla con frijol, golosina, nada)', bucket: 'si' },
            { id: 'q2', text: '¿Cuántos días de la semana desayunas antes de venir?', bucket: 'si' },
            { id: 'q3', text: '¿Te gustaría una refacción con atol y fruta? (sí, no, tal vez)', bucket: 'si' },
            { id: 'q4', text: '¿Por qué tu familia te da comida tan mala?', bucket: 'no', feedback: 'Juzga y ofende a la familia. Una encuesta debe ser respetuosa.' },
            { id: 'q5', text: '¿Verdad que las golosinas son malas?', bucket: 'no', feedback: 'La pregunta ya trae la respuesta: empuja a decir "sí".' },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['l1', 'pyd'], cnb: ['l1:2.3.2', 'pyd:4.1.2'], ambito: 'emprender',
            prompt: 'Arma el **calendario** de la semana del proyecto: ordena las tareas del primer al último día.',
            explain: 'Un calendario claro permite que cada integrante sepa qué hacer y evita dejar todo para el final.' },
          { items: [
            { id: 'k1', text: 'Formar equipos, elegir puesto y aplicar la encuesta' },
            { id: 'k2', text: 'Bocetar el puesto y hacer los cálculos' },
            { id: 'k3', text: 'Producir el producto o servicio y escribir el cartel' },
            { id: 'k4', text: 'Ensayar y abrir la feria al público' },
            { id: 'k5', text: 'Analizar los resultados y escribir el plan de mejora' },
          ], labels: { start: 'Día 1', end: 'Día 5' } },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'l1', 'pyd'], cnb: ['fc:3.1.2', 'l1:2.3.2'], ambito: 'convivir', prompt: 'Tu equipo reparte los roles. ¿Qué harías tú?' },
          { scene: { icon: 'Users', text: 'Al repartir roles, **Esteban** dice: "Yo coordino y decido todo, porque soy el que más sabe. Las niñas que hagan los carteles".' }, options: [
            { id: 'a', icon: 'ThumbsUp', text: 'Aceptar para no discutir', consequence: 'Esteban decide solo. Ixchel y Keyla, que tenían buenas ideas para el puesto, dejan de participar.', values: ['Conformismo'], constructive: false },
            { id: 'b', icon: 'Vote', text: 'Proponer que cada quien diga qué rol le gustaría y que la coordinación rote cada día', consequence: 'Todos participan. Keyla coordina el martes y organiza muy bien la compra de materiales.', values: ['Liderazgo democrático', 'Equidad', 'Diálogo'], constructive: true },
            { id: 'c', icon: 'Megaphone', text: 'Gritarle a Esteban que es un creído', consequence: 'Se pelean y el equipo pierde la primera tarde de trabajo.', values: ['Irrespeto'], constructive: false },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l1', 'pyd', 'fc'], cnb: ['l1:2.3.2', 'pyd:4.1.2', 'fc:3.2.3'], ambito: 'emprender',
            prompt: 'Escribe el **plan de tu equipo**: nombre del puesto, la necesidad que resuelve, el rol de cada integrante y el instrumento que usarán para investigar.' },
          { minWords: 40, placeholder: 'Puesto… Necesidad… Roles: … Instrumento: …',
            model: 'Puesto: Vivero y aire limpio. Necesidad: en la ladera del nacimiento se han cortado muchos árboles y el agua baja turbia en invierno. Roles: Keyla coordina, Esteban investiga, Ixchel diseña, Marvin produce y yo seré vocera; la coordinación rota cada día. Instrumento: una encuesta de 5 preguntas a 12 familias sobre de dónde viene su agua y si sembrarían un árbol, y una entrevista al guardabosques de la comunidad.',
            rubric: ['Nombra el puesto y la necesidad', 'Reparte roles con equidad', 'Describe un instrumento de investigación concreto', 'Indica a quién se aplicará'] },
        ),
        cierre({ areas: ['pyd', 'fc'], cnb: ['fc:3.2.3'] }, ['Entiendo el reto y la rúbrica de la feria', 'Mi puesto responde a una necesidad real', 'Mi equipo repartió roles con equidad'],
          ['Aplicaré la encuesta a mi familia y a mis vecinos antes de mañana', 'Anotaré la fuente de cada dato', 'Cumpliré mi rol en el equipo']),
      ],
    }),

    /* ───────────────────────── Día 2: Diseñar ───────────────────────── */
    lesson({
      id: 's19-d2-disenar',
      title: 'Diseñar el puesto',
      icon: 'PenTool',
      minutes: 15,
      day: 2,
      kind: 'proyecto',
      gancho: '¿Cuánta comida, cuánta tierra o cuánto papel necesitas para que tu puesto no se quede corto ni desperdicie?',
      objetivos: ['Organizar en una gráfica los datos de la encuesta', 'Calcular cantidades para una receta y volúmenes para el vivero', 'Diseñar un cartel con figura y fondo bien contrastados', 'Bocetar tu puesto con todas sus partes'],
      resumen: [
        'Una gráfica de barras muestra de un vistazo los resultados de la encuesta y justifica la necesidad del puesto.',
        'Para ampliar una receta se multiplica cada ingrediente por el mismo número.',
        'El volumen de un prisma rectangular es largo × ancho × alto; sirve para saber cuánta tierra cabe en una caja o bolsa.',
        'En un cartel, la figura principal debe resaltar sobre el fondo con colores contrastantes.',
      ],
      media: {
        id: 's19-d2-boceto', kind: 'image', title: 'Boceto de un puesto de feria', aspect: '4:3',
        alt: 'Boceto a lápiz de un puesto con mesa, toldo de costales, cartel con título, gráfica de barras y una mesita para el público.',
        brief: 'Ilustración tipo boceto a lápiz y colores sobre papel cuadriculado del puesto "Refacción de la milpa": mesa con mantel de tela típica sin diseño identificable, toldo de costales reciclados, cartel superior con el título grande "¿Qué hay en tu refacción?", gráfica de barras de la encuesta pegada a un lado, ollas de barro con atol y un canasto con fruta. Notas al margen con flechas: "letra grande", "precio claro", "rampa", "pregunta al público". Medidas anotadas (mesa 1.20 m).',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['art', 'pyd', 'l1'], cnb: ['art:3.2.3', 'pyd:4.1.2'], ambito: 'hacer', title: 'Cuatro claves para un buen puesto',
            prompt: 'Antes de construir, se **diseña**. Toca cada clave para un puesto que atraiga a las familias.' },
          { icon: 'PenTool', body: 'Un buen diseño comunica **una idea principal** con pocas palabras y mucha imagen.', reveal: [
            { icon: 'Newspaper', front: 'Figura y fondo', back: 'La imagen principal (figura) debe **resaltar** sobre el fondo: colores oscuros sobre claros o al revés.' },
            { icon: 'BarChart3', front: 'Datos a la vista', back: 'Una gráfica de la encuesta demuestra que la necesidad es **real**.' },
            { icon: 'Calculator', front: 'Cálculos exactos', back: 'Cantidades, volúmenes y precios bien calculados evitan que falte o se desperdicie.' },
            { icon: 'Hand', front: 'Para participar', back: 'Una actividad para el público: probar, sembrar, grabar un mensaje o intercambiar.' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['ccss', 'mat', 'cnt'], cnb: ['ccss:5.3.2', 'cnt:5.3.2'], ambito: 'hacer',
            prompt: 'Supongamos que el equipo preguntó a **40 estudiantes**: "¿Qué trajiste hoy de refacción?". Resultados: golosinas 16, tortilla con frijol 10, fruta 8, nada 6. Construye la gráfica para el cartel del puesto.',
            explain: '22 de 40 estudiantes (16 + 6) trajeron golosinas o nada. Esa es la necesidad que justifica una refacción con proteínas, carbohidratos y vitaminas.' },
          { categories: [
            { id: 'gol', label: 'Golosinas', icon: 'Package', color: 'var(--area-cnt)' },
            { id: 'tor', label: 'Tortilla y frijol', icon: 'Circle', color: 'var(--area-pyd)' },
            { id: 'fru', label: 'Fruta', icon: 'Apple', color: 'var(--c-ok)' },
            { id: 'nad', label: 'Nada', icon: 'X', color: 'var(--c-hint)' },
          ], data: [16, 10, 8, 6], max: 20, step: 2, unit: 'estudiantes', source: 'Encuesta hipotética del equipo' },
        ),
        S.recipe(
          { fase: 'construir', areas: ['mat', 'cnt', 'pyd'], cnb: ['mat:4.2.4', 'cnt:5.1.2'], ambito: 'hacer',
            prompt: 'La receta de **atol de maíz con canela** rinde para **6** personas. El puesto espera **24** visitantes. Calcula las cantidades.',
            explain: 'De 6 a 24 se multiplica por 4. El maíz aporta carbohidratos (energía) y la leche aporta proteínas y calcio.' },
          { dish: 'Atol de maíz con canela', icon: 'Coffee', baseServings: 6, targetServings: 24, ingredients: [
            { name: 'Masa de maíz', icon: 'Wheat', qty: 2, unit: 'libras' },
            { name: 'Leche', icon: 'Milk', qty: 3, unit: 'litros' },
            { name: 'Rajas de canela', icon: 'TreeDeciduous', qty: 2, unit: 'rajas' },
            { name: 'Panela', icon: 'Square', qty: 1, unit: 'bloque' },
          ], ask: [0, 1, 3] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'cnt'], cnb: ['mat:1.4.3', 'mat:1.4.2'], ambito: 'hacer',
            prompt: 'El puesto **Vivero y aire limpio** sembrará arbolitos en cajas de madera reciclada con forma de **prisma rectangular** de **30 cm de largo, 20 cm de ancho y 15 cm de alto**. ¿Cuántos centímetros cúbicos de tierra caben en una caja?',
            hint: 'Volumen del prisma rectangular = largo × ancho × alto.',
            explain: '30 × 20 × 15 = 9,000 cm³, es decir, 9 litros de tierra por caja (1 litro = 1,000 cm³).' },
          { answer: 9000, unit: 'cm³', stimulus: '30 cm × 20 cm × 15 cm = ?', misconceptions: [
            { value: 65, msg: 'Sumaste las medidas. El volumen se obtiene multiplicándolas.' },
            { value: 600, msg: 'Ese es el área de la base (30 × 20). Falta multiplicar por la altura.' },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['art', 'fc'], cnb: ['art:3.2.3', 'fc:1.2.5'], ambito: 'convivir',
            prompt: 'A la feria vendrán abuelas que no leen letra pequeña, niños pequeños y una vecina en silla de ruedas. Clasifica cada decisión de diseño.',
            explain: 'Diseñar pensando en todas las personas es respetar sus derechos: nadie se queda fuera de la feria.' },
          { buckets: [
            { id: 'inc', label: 'Incluye a más personas', icon: 'HeartHandshake', color: 'var(--c-ok)' },
            { id: 'exc', label: 'Deja a personas fuera', icon: 'EyeOff', color: 'var(--area-cnt)' },
          ], items: [
            { id: 'd1', text: 'Letras oscuras y grandes sobre fondo claro', bucket: 'inc' },
            { id: 'd2', text: 'Mesa a una altura que alcance una persona sentada', bucket: 'inc' },
            { id: 'd3', text: 'Rampa de tablas en el escalón de la entrada', bucket: 'inc' },
            { id: 'd4', text: 'Letras amarillas sobre fondo blanco', bucket: 'exc', feedback: 'La figura casi no se distingue del fondo: falta contraste.' },
            { id: 'd5', text: 'Pasillos llenos de cajas entre los puestos', bucket: 'exc' },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['art', 'pyd', 'l1'], cnb: ['art:3.2.3', 'pyd:4.1.2'], ambito: 'hacer',
            prompt: 'Describe el **boceto** de tu puesto: nombre y título del cartel, qué figura resaltará sobre el fondo, qué gráfica o cálculo mostrarás y qué actividad hará el público.',
            media: { id: 's19-d2-carteles', kind: 'image', title: 'Figura y fondo en carteles', aspect: '16:9',
              alt: 'Dos carteles iguales lado a lado: uno con buen contraste entre la mazorca y el fondo, otro donde la mazorca casi desaparece.',
              brief: 'Ilustración comparativa de dos carteles verticales con el mismo diseño: una mazorca de maíz amarilla y el título "Refacción de la milpa". Cartel A (rotulado "Se lee bien"): mazorca amarilla sobre fondo azul oscuro, letras blancas gruesas. Cartel B (rotulado "Se pierde"): mazorca amarilla sobre fondo amarillo claro, letras celestes delgadas. Marcas de verificación y equis pequeñas. Estilo plano, sin marcas comerciales.' } },
          { minWords: 35, placeholder: 'Nuestro puesto se llamará… El título del cartel… La figura principal… Mostraremos… El público podrá…',
            model: 'Nuestro puesto se llamará Refacción de la milpa. El cartel dirá "¿Qué hay en tu refacción?" con letras blancas sobre fondo café oscuro, y la figura principal será una mazorca amarilla grande para que resalte. Mostraremos la gráfica de la encuesta y la receta de atol calculada para 24 personas. El público podrá probar el atol y armar su plato con tarjetas de proteínas, carbohidratos y vitaminas.',
            rubric: ['Propone un título claro', 'Explica cómo resaltará la figura sobre el fondo', 'Incluye una gráfica o cálculo', 'Describe una actividad para el público'] },
        ),
        cierre({ areas: ['art', 'mat'], cnb: ['art:3.2.3'] }, ['Organicé los datos de la encuesta en una gráfica', 'Calculé cantidades y volúmenes para mi puesto', 'Mi cartel tiene buen contraste entre figura y fondo'],
          ['Traeré materiales reciclados para construir el puesto', 'Revisaré mis cálculos con un compañero', 'Pediré opinión a mi familia sobre el boceto']),
      ],
    }),

    /* ───────────────────────── Día 3: Crear y producir ───────────────────────── */
    lesson({
      id: 's19-d3-crear',
      title: 'Crear y producir',
      icon: 'Hammer',
      minutes: 15,
      day: 3,
      kind: 'proyecto',
      gancho: '¿Cómo se convierten unas cajas, papel de china y granos de maíz en una feria de verdad?',
      objetivos: ['Producir con seguridad y cuidando el ambiente', 'Revisar la exactitud de los carteles', 'Repartir en paquetes iguales con el máximo común divisor', 'Fijar precios justos para el trueque y la venta'],
      resumen: [
        'Las herramientas se usan con supervisión, sobre una mesa firme, y los sobrantes se separan para reciclar.',
        'Un cartel debe tener datos exactos: revisar la información es parte de la honestidad.',
        'El máximo común divisor (MCD) indica el mayor número de paquetes iguales que se pueden armar sin que sobre nada.',
        'El comercio es justo cuando quien produce recibe un pago que cubre su trabajo y sus costos.',
      ],
      media: {
        id: 's19-d3-taller', kind: 'video', title: 'Taller de producción de la feria', aspect: '16:9', duration: 50,
        alt: 'Manos de estudiantes arman un barrilete de papel de china, llenan cajas con tierra, empacan semillas y rotulan un cartel.',
        brief: 'Video de 50 s con planos cerrados de manos (sin rostros identificables): cortar papel de china con tijeras de punta roma, pegar varillas de caña con engrudo para un barrilete hexagonal, llenar una caja de madera con tierra y sembrar un arbolito, contar granos de frijol en bolsitas iguales, rotular un cartel con marcador grueso. Sobreimpresos: "Corta lejos de tu cuerpo", "Separa los sobrantes para reciclar". Música de marimba suave.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'cnt'], cnb: ['pyd:5.4.1', 'cnt:6.3.2'], ambito: 'hacer', title: 'Producir sin dañar',
            prompt: 'Hoy se produce. Una feria que cuida el ambiente también cuida **cómo** se hacen las cosas. Toca cada tarjeta.' },
          { icon: 'Recycle', body: 'Un proyecto es **sostenible** cuando produce lo que la comunidad necesita sin dañar el agua, el aire ni el suelo.', reveal: [
            { icon: 'Scissors', front: 'Herramientas', back: 'Tijeras de punta roma sobre mesa firme; el cúter, solo una persona adulta.' },
            { icon: 'Leaf', front: 'Materiales', back: 'Papel de china, caña, cajas reutilizadas, tela y hojas de maxán en lugar de duroport y plástico.' },
            { icon: 'Sprout', front: 'El vivero', back: 'Especies nativas de la región; los árboles ayudan a que la lluvia se infiltre y **mejoran la calidad del aire**.' },
            { icon: 'Trash2', front: 'Sobrantes', back: 'Separar orgánico (para abono) y reciclable; no quemar basura.' },
          ] },
        ),
        S.fill(
          { fase: 'construir', areas: ['cnt', 'ccss', 'art', 'fc'], cnb: ['cnt:6.3.2', 'cnt:5.1.2', 'art:4.3.3', 'fc:5.1.3'], ambito: 'conocer',
            prompt: 'Revisa la **exactitud** de los carteles antes de colgarlos. Completa cada uno con el dato correcto que aprendiste en la unidad.',
            explain: 'Un cartel con errores confunde al público. Por eso, revisar los datos es parte de la honestidad intelectual.' },
          { text: 'Vivero: los árboles absorben dióxido de carbono y liberan [[oxígeno]], por eso mejoran la calidad del aire.\nRefacción: el frijol y el huevo aportan [[proteínas]], que construyen y reparan los músculos.\nBarriletes: los barriletes gigantes de Sumpango se elevan el [[1 de noviembre]], Día de Todos los Santos.\nTrueque justo: el intercambio es [[desigual]] cuando un país vende materias primas baratas y compra productos procesados caros.',
            distractors: ['nitrógeno', 'grasas', '15 de septiembre', 'equilibrado'] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'pyd'], cnb: ['mat:4.3.5'], ambito: 'hacer',
            prompt: 'El puesto de **Trueque justo** tiene **36 elotes** y **24 güisquiles**. Quieren armar **canastas iguales**, con la misma cantidad de elotes y de güisquiles en cada una, sin que sobre nada. ¿Cuál es el **mayor número de canastas** que pueden armar?',
            hint: 'Busca el máximo común divisor (MCD) de 36 y 24 con la factorización prima.',
            explain: '36 = 2 × 2 × 3 × 3 y 24 = 2 × 2 × 2 × 3. Factores comunes: 2 × 2 × 3 = 12. Se arman 12 canastas, cada una con 3 elotes y 2 güisquiles.' },
          { answer: 12, unit: 'canastas', stimulus: 'MCD(36, 24) = ?', misconceptions: [
            { value: 72, msg: '72 es el mínimo común múltiplo. Para repartir en grupos iguales sin que sobre, se busca el máximo común divisor.' },
            { value: 6, msg: '6 sí divide a ambos, pero hay un divisor común mayor.' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'pyd', 'fc'], cnb: ['mat:4.2.4', 'fc:5.1.3'], ambito: 'emprender',
            prompt: 'Supongamos que para hacer **10 bolsitas de pepitoria** doña Candelaria gasta Q30 en semillas y Q10 en bolsas, y quiere ganar Q2 por cada bolsita por su trabajo. ¿A cuánto debe vender **cada bolsita** para que el precio sea justo?',
            hint: 'Primero suma los costos y divídelos entre 10; después suma la ganancia por bolsita. Respeta los paréntesis.',
            explain: '(30 + 10) ÷ 10 + 2 = 40 ÷ 10 + 2 = 4 + 2 = Q6. Un precio justo cubre los costos y paga el trabajo de quien produce.' },
          { answer: 6, unit: 'quetzales', stimulus: '(30 + 10) ÷ 10 + 2 = ?', misconceptions: [
            { value: 4, msg: 'Así solo recupera sus costos: no recibe pago por su trabajo.' },
            { value: 33, msg: 'Olvidaste los paréntesis: primero se suma 30 + 10 y después se divide.' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'ccss', 'pyd'], cnb: ['fc:5.1.3', 'ccss:8.2.2', 'pyd:4.3.2'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
          { scene: { icon: 'ShoppingBasket', text: 'Un comprador llega al puesto de Trueque justo y ofrece **comprar todas las bolsitas de pepitoria a Q3** cada una "porque así es el mercado". Doña Candelaria calculó que el precio justo es Q6. Tu equipo quiere vender todo rápido.' }, options: [
            { id: 'a', icon: 'Coins', text: 'Aceptar Q3 para terminar rápido', consequence: 'Se vende todo, pero doña Candelaria pierde dinero y no recibe pago por su trabajo.', values: ['Prisa', 'Injusticia'], constructive: false },
            { id: 'b', icon: 'Handshake', text: 'Explicar con datos cuánto cuesta producir y negociar un precio que cubra costos y trabajo', consequence: 'El comprador entiende el cálculo y acuerdan Q5.50 por una compra grande. Doña Candelaria gana algo por su trabajo y el comprador ahorra un poco.', values: ['Negociación', 'Justicia', 'Diálogo'], constructive: true },
            { id: 'c', icon: 'X', text: 'Echar al comprador del puesto', consequence: 'Se pierde la venta y la feria gana mala fama.', values: ['Intolerancia'], constructive: false },
          ] },
        ),
        S.rhythm(
          { fase: 'aplicar', areas: ['art', 'mat', 'l1'], cnb: ['art:1.1.9', 'mat:4.4.2'], ambito: 'hacer',
            prompt: 'La **Radio de la feria** necesita una cortinilla musical para anunciar cada puesto. Compón un compás de **4 tiempos** que tenga al menos una **blanca** y una **corchea**. ¡La tocarán con marimba o con palmas!',
            hint: 'Blanca = 2 tiempos; negra = 1; corchea = 1/2. La suma debe dar 4.',
            explain: 'Por ejemplo: blanca + negra + corchea + corchea = 2 + 1 + ½ + ½ = 4 tiempos. ¡Sumaste fracciones con música!' },
          { beats: 4, allowed: ['blanca', 'negra', 'corchea'], mustInclude: ['blanca', 'corchea'], showFractions: true },
        ),
        cierre({ areas: ['pyd', 'fc'], cnb: ['pyd:5.4.1'] }, ['Produje con seguridad y cuidando el ambiente', 'Nuestros carteles tienen datos exactos', 'Calculé repartos y precios justos'],
          ['Terminaré mi parte del puesto', 'Separaré los sobrantes para reciclar', 'Ensayaré la cortinilla con mi equipo']),
      ],
    }),

    /* ───────────────────────── Día 4: Presentar y compartir ───────────────────────── */
    lesson({
      id: 's19-d4-presentar',
      title: 'Presentar y compartir',
      icon: 'Megaphone',
      minutes: 14,
      day: 4,
      kind: 'proyecto',
      gancho: '¿Cómo logras que una abuela, un niño de primero y la presidenta del COCODE se detengan en tu puesto y participen?',
      objetivos: ['Presentar tu puesto con una apertura interesante y calma', 'Escribir un anuncio para la radio de la feria', 'Distinguir hechos de opiniones en los mensajes', 'Responder con respeto ante situaciones de exclusión'],
      resumen: [
        'Una buena presentación empieza con una apertura interesante (pregunta, dato sorprendente u objeto) y se sostiene con calma, buena postura y contacto visual.',
        'Un anuncio de radio es breve, claro, dice qué, cuándo y dónde, e invita a participar.',
        'En la radio de la feria solo se transmiten hechos comprobados; las opiniones se presentan como opiniones.',
        'Ante un comentario que discrimina, se responde con calma, con datos y con respeto.',
      ],
      media: {
        id: 's19-d4-radio', kind: 'audio', title: 'Anuncio de la Radio de la feria', duration: 40,
        alt: 'Grabación de dos locutores infantiles que anuncian los puestos de la feria con cortinilla de marimba.',
        brief: 'Audio de 40 s: cortinilla de marimba (4 tiempos), luego una niña y un niño locutores dicen: "¡Buenos días, comunidad! Esta es la Radio de la Feria Red de la Milpa. ¿Sabían que 22 de 40 estudiantes vinieron hoy sin una refacción nutritiva? Visiten el puesto Refacción de la milpa, junto a la cancha, hasta las once. ¡Los esperamos!". Voces claras y cálidas, acento guatemalteco, sin ruido de fondo; cierre con la cortinilla.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1', 'l2'], cnb: ['l1:2.2.1', 'l1:2.2.2'], ambito: 'convivir', title: 'Presentar tu puesto en 2 minutos',
            prompt: 'Cada equipo tiene **2 minutos** para presentar su puesto a cada grupo de visitantes. Toca cada momento.' },
          { icon: 'Mic', body: 'Mantén la **calma**: pies firmes, hombros sueltos, mira a las personas y habla sin prisa.', reveal: [
            { icon: 'Lightbulb', front: '1. Apertura interesante', back: '"¿Sabían que 22 de cada 40 estudiantes vinieron hoy sin una refacción nutritiva?"' },
            { icon: 'Target', front: '2. El problema y la solución', back: '"Por eso preparamos atol de maíz con leche y fruta: energía y proteínas para aprender."' },
            { icon: 'Hand', front: '3. Participación', back: '"Arme su plato con estas tarjetas: ¿qué le falta?"' },
            { icon: 'HeartHandshake', front: '4. Compromiso y despedida', back: '"¿Qué cambiaría en su refacción? Escríbalo en la manta. ¡Muchas gracias!"' },
          ] },
        ),
        S.highlight(
          { fase: 'construir', areas: ['l1', 'l2'], cnb: ['l1:4.3.2', 'l2:1.2.7'], ambito: 'conocer',
            prompt: 'La **Radio de la feria** recibió este mensaje. Antes de transmitirlo, marca las **opiniones** (lo que alguien piensa o siente); lo demás son hechos que se pueden comprobar.',
            explain: 'La radio puede transmitir opiniones, pero debe presentarlas como opiniones ("dice doña Ana que…"). Los hechos se comprueban con datos o fuentes.' },
          { target: 'opiniones', text: 'El puesto de vivero entregará 60 arbolitos de pino y aliso. {El atol de la feria es el más rico del mundo.} La feria termina a las once de la mañana. {Los barriletes de este año son los más bonitos que ha habido.} El puesto de trueque está junto a la cancha. {Todos deberían preferir el trueque en lugar del mercado.}' },
        ),
        S.choice(
          { fase: 'construir', areas: ['l1', 'l2', 'pyd'], cnb: ['l1:3.1.1', 'l1:2.2.1'], ambito: 'convivir',
            prompt: '¿Qué debe tener un buen **anuncio de radio** para la feria? Elige todas las correctas.',
            explain: 'La radio llega a quienes no leen o están lejos: el mensaje debe ser breve, claro y decir qué, cuándo y dónde.' },
          { multiple: true, options: [
            { id: 'a', text: 'Una apertura que llame la atención', icon: 'Lightbulb' },
            { id: 'b', text: 'Qué ofrece el puesto, dónde está y a qué hora', icon: 'MapPin' },
            { id: 'c', text: 'Una invitación a participar', icon: 'Megaphone' },
            { id: 'd', text: 'Rumores sobre otros puestos', icon: 'MessageCircle', feedback: 'Los rumores no comprobados dañan la confianza y las relaciones en la comunidad.' },
            { id: 'e', text: 'Explicaciones muy largas con muchos datos', icon: 'Timer', feedback: 'En la radio el mensaje debe ser breve: el público no puede releerlo.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'l1'], cnb: ['ef:3.1.7', 'l1:2.2.2'], ambito: 'ser',
            prompt: 'Es normal sentir nervios antes de presentar. Mide tu pulso, luego haz **1 minuto de postura y respiración**: pies separados al ancho de la cadera, espalda recta, hombros sueltos, inhala en 4 y exhala en 6. Vuelve a medir.' },
          { seconds: 15, rounds: [
            { label: 'Antes (con nervios)' },
            { label: 'Después de la postura y la respiración', exercise: { name: 'Postura correcta y respiración 4-6', icon: 'Wind', seconds: 60 } },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'l2', 'ef'], cnb: ['fc:2.3.1', 'ef:4.1.13', 'l2:1.2.7'], ambito: 'convivir', prompt: 'Durante la feria, ¿qué harías?' },
          { scene: { icon: 'MessageCircle', text: 'En el puesto de barriletes, una familia garífuna de Livingston comparte cómo celebra con tambores y danza. Un visitante dice en voz alta: "Eso no es de aquí, aquí solo valen nuestras costumbres".' }, options: [
            { id: 'a', icon: 'VolumeX', text: 'Quedarme callado y seguir con mi presentación', consequence: 'La familia se siente fuera de lugar y se retira pronto del puesto.', values: ['Evasión'], constructive: false },
            { id: 'b', icon: 'HeartHandshake', text: 'Explicar con calma que el pueblo garífuna es parte de Guatemala y que la feria celebra todas las culturas; invitar al visitante a escuchar', consequence: 'El visitante escucha los tambores y pregunta por su ritmo. La familia agradece el respeto.', values: ['Respeto', 'Interculturalidad', 'Valentía'], constructive: true },
            { id: 'c', icon: 'Megaphone', text: 'Burlarme del visitante frente a todos', consequence: 'El ambiente se pone tenso y el mensaje de la feria se pierde.', values: ['Irrespeto'], constructive: false },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l1', 'l2', 'pyd'], cnb: ['l1:2.2.1', 'l1:3.1.1', 'pyd:4.3.2'], ambito: 'emprender',
            prompt: 'Escribe el **anuncio de radio** de tu puesto (máximo 50 palabras): apertura interesante, qué ofrece, dónde y a qué hora, y una invitación a participar.' },
          { minWords: 30, placeholder: '¡Buenos días, comunidad! ¿Sabían que…? En el puesto… Los esperamos en… hasta…',
            model: '¡Buenos días, comunidad! ¿Sabían que un árbol ayuda a que la lluvia se infiltre y llegue al nacimiento? En el puesto Vivero y aire limpio regalamos arbolitos de aliso y les enseñamos a sembrarlos. Estamos junto a la entrada, hasta las once. ¡Vengan, siembren con nosotros y cuiden el agua de todos!',
            rubric: ['Tiene una apertura interesante', 'Dice qué ofrece, dónde y cuándo', 'Usa solo datos comprobados', 'Invita a participar con cortesía'] },
        ),
        cierre({ areas: ['l1', 'fc'], cnb: ['l1:2.2.1'] }, ['Presenté mi puesto con calma y una apertura interesante', 'Mi anuncio de radio es breve y claro', 'Respondí con respeto a todas las personas'],
          ['Ensayaré mi presentación frente a mi familia', 'Saludaré con cortesía a cada visitante', 'Solo compartiré información comprobada']),
      ],
    }),

    /* ───────────────────────── Día 5: Evaluar y mejorar ───────────────────────── */
    lesson({
      id: 's19-d5-evaluar',
      title: 'Evaluar y mejorar',
      icon: 'ClipboardCheck',
      minutes: 15,
      day: 5,
      kind: 'proyecto',
      gancho: 'La feria terminó. ¿Cómo sabes si de verdad fortaleció las relaciones en tu comunidad?',
      objetivos: ['Analizar los datos de visitantes y participación', 'Interpretar comentarios para mejorar', 'Repasar las ideas clave de la unidad', 'Escribir un plan de mejora y un compromiso comunitario'],
      resumen: [
        'Evaluar con datos (conteos y encuestas) y con comentarios permite saber qué funcionó y qué mejorar.',
        'La retroalimentación útil es concreta y respetuosa: "dos estrellas y un deseo".',
        'Un proyecto termina con un compromiso real que continúa, como cuidar los árboles sembrados o repetir la refacción nutritiva.',
      ],
      media: {
        id: 's19-d5-manta', kind: 'image', title: 'La Manta de compromisos', aspect: '3:4',
        alt: 'Manta hecha de retazos de tela cosidos, cada uno con un compromiso escrito por una familia.',
        brief: 'Ilustración vertical de una manta colgada en el corredor de la escuela, hecha de retazos cuadrados de tela de colores cosidos entre sí. Cada retazo tiene un compromiso escrito a mano con texto genérico o ilegible (por ejemplo "Cuidaré mi arbolito", "Llevaré fruta en la refacción", "Compraré directo al productor"). Al pie, niñas y niños de distintos pueblos riegan arbolitos en cajas de madera. Colores cálidos, luz de mañana.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'l1'], cnb: ['pyd:2.1.1'], ambito: 'emprender', title: 'Dos estrellas y un deseo',
            prompt: 'Evaluar no es buscar culpables: es **aprender para mejorar**. Toca cada tarjeta.' },
          { icon: 'Star', body: 'Usen la técnica **"dos estrellas y un deseo"**: dos cosas que salieron bien y una que desean mejorar.', reveal: [
            { icon: 'BarChart3', front: 'Evaluar con datos', back: 'El conteo de visitantes dice **cuántas** personas participaron en cada puesto.' },
            { icon: 'MessagesSquare', front: 'Evaluar con palabras', back: 'Los comentarios del libro de visitas dicen **por qué**.' },
            { icon: 'RefreshCw', front: 'Mejorar', back: 'Con esa información, el equipo decide qué cambiar y qué continuar.' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['ccss', 'mat', 'pyd'], cnb: ['ccss:5.3.2', 'pyd:4.3.2'], ambito: 'hacer',
            prompt: 'Supongamos que cada puesto contó a las personas que participaron: Refacción 45, Vivero 30, Radio 15, Barriletes 35, Trueque 25. Construye la gráfica.',
            explain: 'La Radio tuvo menos participación: quizá estaba lejos o no tenía una actividad clara. Los datos no culpan a nadie; muestran qué mejorar.' },
          { categories: [
            { id: 'ref', label: 'Refacción', icon: 'Utensils', color: 'var(--area-mat)' },
            { id: 'viv', label: 'Vivero', icon: 'Sprout', color: 'var(--c-ok)' },
            { id: 'rad', label: 'Radio', icon: 'Radio', color: 'var(--area-l1)' },
            { id: 'bar', label: 'Barriletes', icon: 'Wind', color: 'var(--area-art)' },
            { id: 'tru', label: 'Trueque', icon: 'ShoppingBasket', color: 'var(--area-pyd)' },
          ], data: [45, 30, 15, 35, 25], max: 50, step: 5, unit: 'personas', source: 'Conteo hipotético de la feria' },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'pyd', 'fc'], cnb: ['l1:4.2.5', 'pyd:2.1.1'], ambito: 'emprender', prompt: 'Lee los comentarios del **libro de visitas** y responde.' },
          { genre: 'Comentarios', heading: 'Libro de visitas de la Feria Red de la Milpa', passage:
            '"Nunca había hablado con la familia de la otra aldea. Ahora vamos a intercambiar huevos por güisquiles cada semana." — Doña Rosa, vecina.\n\n"El atol estaba rico y aprendí qué le falta a mi refacción. Pero la fila era muy larga." — Brandon, 3.º primaria.\n\n"Me llevé un arbolito de aliso. ¿Quién me explica cómo cuidarlo después?" — Don Aurelio.\n\n"No encontré la Radio de la feria: estaba detrás de la bodega." — Profesora Wendy.',
            questions: [
              { q: '¿Qué relación nueva nació gracias a la feria, según doña Rosa?', options: [
                { id: 'a', text: 'Un intercambio semanal de productos entre dos familias' },
                { id: 'b', text: 'Una pelea entre aldeas' },
                { id: 'c', text: 'Un nuevo trabajo en la escuela' },
              ], correct: 'a' },
              { q: '¿Qué explica mejor la baja participación en la Radio?', options: [
                { id: 'a', text: 'Estaba en un lugar difícil de encontrar' },
                { id: 'b', text: 'A nadie le gusta la radio' },
                { id: 'c', text: 'Los locutores hablaban otro idioma' },
              ], correct: 'a', why: 'La profesora Wendy dice que estaba detrás de la bodega: la ubicación afectó la participación.' },
              { q: '¿Cuál sería un buen compromiso para el puesto de Vivero, según don Aurelio?', options: [
                { id: 'a', text: 'Visitar a las familias para enseñar a cuidar los arbolitos después de la feria' },
                { id: 'b', text: 'Dejar de regalar arbolitos' },
                { id: 'c', text: 'Vender los arbolitos más caros' },
              ], correct: 'a' },
            ] },
        ),
        S.cards(
          { fase: 'construir', areas: ['cnt', 'mat', 'ccss', 'fc', 'art'], cnb: ['cnt:5.1.2', 'cnt:1.5.4', 'mat:4.3.5', 'ccss:6.4.9', 'fc:5.1.3', 'cnt:7.3.2', 'art:4.3.3'], ambito: 'conocer',
            prompt: 'Antes de la **Semana de validación**, repasa las ideas clave de la unidad que usaste en la feria. Intenta responder antes de voltear cada tarjeta.' },
          { cards: [
            { icon: 'Salad', front: '¿Qué nutrientes construyen y cuáles dan energía?', back: 'Las proteínas construyen y reparan; los carbohidratos y las grasas dan energía.' },
            { icon: 'Handshake', front: '¿Qué es el mutualismo?', back: 'Una relación en la que dos seres vivos se benefician, como el frijol y las bacterias de sus raíces.' },
            { icon: 'Calculator', front: '¿Para qué sirve el MCD?', back: 'Para repartir en el mayor número de grupos iguales sin que sobre nada.' },
            { icon: 'Flag', front: '¿Qué hechos de Europa influyeron en la Independencia de América?', back: 'Las ideas de la Ilustración y la Revolución Francesa sobre libertad e igualdad.' },
            { icon: 'Scale', front: '¿Qué es el intercambio desigual?', back: 'Cuando un país vende materias primas baratas y compra productos procesados caros.' },
            { icon: 'Thermometer', front: '¿Qué causa el efecto invernadero aumentado?', back: 'Gases como el dióxido de carbono, que atrapan más calor y calientan el planeta.' },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['pyd', 'cnt', 'fc'], cnb: ['pyd:5.4.1', 'pyd:4.3.2', 'fc:3.2.3'], ambito: 'emprender',
            prompt: 'Escribe el **plan de mejora** de tu equipo con "dos estrellas y un deseo", y un **compromiso comunitario** concreto que continuará después de la feria (qué, quiénes, cuándo).' },
          { minWords: 45, placeholder: 'Estrella 1… Estrella 2… Deseo… Nuestro compromiso comunitario es…',
            model: 'Estrella 1: entregamos 30 arbolitos de aliso a familias de tres aldeas. Estrella 2: explicamos con datos por qué el bosque protege el nacimiento. Deseo: la próxima vez daremos una hoja con los cuidados del arbolito y pondremos el puesto más cerca de la entrada. Nuestro compromiso comunitario es visitar a las familias el primer sábado de cada mes, con el apoyo del COCODE, para revisar y regar los arbolitos durante la temporada seca.',
            rubric: ['Nombra dos logros concretos', 'Propone una mejora basada en datos o comentarios', 'Plantea un compromiso con qué, quiénes y cuándo', 'Valora el trabajo en equipo y las relaciones que nacieron'] },
        ),
        cierre({ areas: ['pyd', 'fc'], cnb: ['pyd:4.1.2'] }, ['Analicé los resultados de la feria con datos y comentarios', 'Propuse mejoras concretas', 'Me comprometí con una acción para mi comunidad', 'Integré lo aprendido en la Unidad 2'],
          ['Cumpliré el compromiso comunitario de mi equipo', 'Repasaré las tarjetas antes de la Semana de validación', 'Seguiré en contacto con las familias que conocí en la feria']),
      ],
    }),
  ],
});
