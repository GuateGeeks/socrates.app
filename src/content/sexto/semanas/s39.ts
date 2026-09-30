import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 39 · Unidad 4 "Fortaleciendo nuestro futuro" · PROYECTO INTEGRADOR
 * Tema generador: Expo Futuro: la comunidad que soñamos y construimos
 * Integra las semanas 31-38: crecer con futuro, redes que nos sostienen, reporteros de la comunidad,
 * herencias que construyen futuro, nutrir la vida y la paz, noticias para un futuro verde,
 * Centroamérica casa común y pronosticar el futuro. Cinco comisiones preparan una "Agenda del
 * futuro" para su comunidad, la presentan en la Expo Futuro y guardan cartas en una cápsula del tiempo.
 */
export default semana({
  id: 's39',
  unidad: 4,
  semana: 39,
  kind: 'proyecto',
  temaGenerador: 'Expo Futuro: la comunidad que soñamos y construimos',
  title: 'Expo Futuro',
  subtitle: 'Proyecto: una agenda del futuro para nuestra comunidad',
  icon: 'Rocket',
  color: 'var(--area-pyd)',
  contexto: 'En Sololá, a la orilla del lago de Atitlán, conviven familias kaqchikeles, tz\'utujiles, k\'iche\' y ladinas. El lago es fuente de agua, pesca, turismo y cultura, pero la basura, las aguas sucias y la tala lo ponen en riesgo; algunos municipios, como San Pedro La Laguna, ya prohibieron las bolsas plásticas desechables. Esta semana, al final del año, tu grado organiza la Expo Futuro: cinco comisiones preparan una Agenda del futuro con propuestas de ciencia, economía, ciudadanía, cultura y salud, la presentan a las familias, al COCODE y a la municipalidad, y guardan cartas en una cápsula del tiempo.',
  ejes: ['sostenible', 'vida-ciudadana', 'multiculturalidad', 'trabajo', 'equidad'],
  media: {
    id: 's39-portada', kind: 'video', title: 'Así se prepara la Expo Futuro', aspect: '16:9', duration: 60,
    alt: 'Estudiantes junto al lago de Atitlán siembran árboles, calculan un presupuesto, graban un reportaje, ensayan una danza y presentan sus propuestas a la comunidad.',
    brief: 'Video de 60 s (animación 2D o dramatización con estudiantes, sin rostros identificables en primer plano). Apertura: vista del lago de Atitlán con sus volcanes al amanecer. Cinco escenas con el nombre de la comisión en pantalla: (1) "Ciencia verde": niñas y niños llenan bolsitas de vivero y miden la temperatura; (2) "Economía con futuro": una niña suma un presupuesto en quetzales en un pliego; (3) "Ciudadanía y paz": un grupo escribe una propuesta dirigida al COCODE; (4) "Voces y memoria": un niño con micrófono graba un reportaje y otra lee un poema; (5) "Cuerpo y comunidad": juegos tradicionales inclusivos, con una niña en silla de ruedas. Cierre: una caja de madera (cápsula del tiempo) que se cierra con cartas adentro y el texto "El futuro se construye hoy". Música de marimba. Personajes con trajes de Sololá y Santiago Atitlán y ropa urbana.',
  },
  badge: { id: 'medalla-s39', name: 'Constructor del futuro', icon: 'Rocket', desc: 'Completaste el proyecto integrador de la Unidad 4' },
  lessons: [
    /* ───────────────────────── Día 1: Planificar e investigar ───────────────────────── */
    lesson({
      id: 's39-d1-planificar',
      title: 'Planificar e investigar',
      icon: 'ClipboardList',
      minutes: 15,
      day: 1,
      kind: 'proyecto',
      gancho: '¿Cómo te imaginas tu comunidad dentro de 15 años, cuando tengas unos 26? ¿Qué tendría que empezar a cambiar desde hoy?',
      objetivos: ['Comprender el reto de la Expo Futuro y su rúbrica', 'Relacionar cada comisión con lo aprendido en la unidad', 'Elegir la técnica de investigación adecuada', 'Organizar la comisión con roles equitativos'],
      resumen: [
        'La Expo Futuro tiene cinco comisiones: Ciencia verde, Economía con futuro, Ciudadanía y paz, Voces y memoria, y Cuerpo y comunidad.',
        'El producto final es una Agenda del futuro: una propuesta fundamentada por comisión, presentada en la Expo y entregada al COCODE y a la municipalidad.',
        'Para investigar en la comunidad se usan la encuesta (muchas personas, preguntas cerradas), la entrevista (pocas personas, preguntas abiertas) y la observación directa, anotando siempre la fuente.',
        'Un proyecto comunitario funciona cuando se reparten roles con equidad y se coordinan varias instituciones.',
      ],
      media: {
        id: 's39-d1-comisiones', kind: 'diagram', title: 'Las cinco comisiones de la Expo Futuro', aspect: '4:3',
        alt: 'Estrella de cinco puntas; en cada punta, una comisión con su ícono y color, y en el centro el lago de Atitlán.',
        brief: 'Diagrama en forma de estrella de cinco puntas. Centro: silueta del lago de Atitlán con sus tres volcanes y el texto "Agenda del futuro". Puntas: 1 "Ciencia verde" (arbolito y termómetro, verde); 2 "Economía con futuro" (monedas y bolsa de tela, amarillo); 3 "Ciudadanía y paz" (edificio con columnas y manos, violeta); 4 "Voces y memoria" (micrófono y libro, azul); 5 "Cuerpo y comunidad" (persona corriendo y corazón, naranja). Bajo cada punta, 2 o 3 palabras de lo que aporta. Estilo plano, letra grande legible en celular.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'fc', 'ccss'], cnb: ['pyd:4.2.2', 'fc:5.1.6'], ambito: 'emprender', title: 'El reto: diseñar el futuro',
            prompt: 'En ocho semanas estudiaste cómo crecen los seres vivos y las comunidades, las redes de la naturaleza, la investigación, las herencias, la nutrición y la paz, el ambiente, Centroamérica y las instituciones. Ahora lo usarás para **proponer el futuro de tu comunidad**. Toca cada tarjeta.' },
          { icon: 'Rocket', body: 'Un buen futuro no llega solo: se **planifica con datos**, se **acuerda con otros** y se **empieza hoy**.', reveal: [
            { icon: 'Target', front: 'La necesidad', back: 'El lago y la comunidad enfrentan basura, aguas sucias, tala, pocas oportunidades de empleo juvenil y poca información para decidir.' },
            { icon: 'FileText', front: 'El producto', back: 'Una **Agenda del futuro** con cinco propuestas fundamentadas, una por comisión, y un stand en la **Expo Futuro**.' },
            { icon: 'Users', front: 'El público', back: 'Familias, docentes, el **COCODE**, la municipalidad y estudiantes de otros grados.' },
            { icon: 'Archive', front: 'El cierre', back: 'Cada estudiante escribe una **carta a su yo del futuro** y el grado la guarda en una **cápsula del tiempo**.' },
          ] },
        ),
        S.project(
          { fase: 'construir', areas: ['pyd', 'fc', 'l1', 'l2', 'art', 'cnt', 'mat'], cnb: ['pyd:4.2.2', 'pyd:2.5.2', 'pyd:5.5.1', 'fc:5.1.6', 'l2:1.3.4', 'l1:8.3.2', 'art:1.2.2', 'cnt:6.4.4'], ambito: 'emprender',
            prompt: 'Esta es la **guía completa** del proyecto. Léela con tu comisión y vuelve a ella cada día.' },
          { goal: 'Elaborar una Agenda del futuro para la comunidad con cinco propuestas fundamentadas (ciencia y ambiente, economía, ciudadanía, cultura y comunicación, salud y convivencia), presentarla en la Expo Futuro ante familias, COCODE y municipalidad, y cerrar el año con una cápsula del tiempo.',
            steps: [
              { title: '1. Formar comisiones y roles', detail: 'Cinco comisiones de 4 o 5 integrantes con roles rotativos: coordinación, investigación, cálculo y datos, diseño y vocería. Repartir los roles con equidad entre niñas y niños.' },
              { title: '2. Investigar', detail: 'Elegir la técnica adecuada (encuesta, entrevista u observación), aplicar al menos una, consultar una fuente escrita o digital confiable y anotar cada fuente.' },
              { title: '3. Diseñar la propuesta', detail: 'Organizar los datos en una gráfica y en un mapa conceptual, calcular porcentajes, promedios o presupuestos, y escribir la propuesta con el problema, los datos, la solución y el acuerdo que se pide.' },
              { title: '4. Crear y producir', detail: 'Elaborar el producto del stand con materiales reciclados: vivero, presupuesto y bolsas de tela, manual ciudadano, reportaje y poemas, o festival de juegos y refacción saludable.' },
              { title: '5. Presentar en la Expo Futuro', detail: 'Cada comisión explica su propuesta en 3 minutos con voz clara, datos y un cierre memorable. Se coordina con la municipalidad, el centro de salud y el COCODE, y se firma la Agenda.' },
              { title: '6. Evaluar, mejorar y guardar', detail: 'Analizar las opiniones de los visitantes, escribir un plan de mejora con responsables y fechas y guardar las cartas en la cápsula del tiempo.' },
            ],
            evidence: 'Plan de la comisión, registro de encuestas o entrevistas con sus fuentes, gráfica y mapa conceptual, cálculos, propuesta escrita, producto del stand (vivero, presupuesto, manual, reportaje, poemas o juegos), fotografías de la Expo, plan de mejora y carta al futuro.',
            rubric: [
              'La propuesta responde a una necesidad real de la comunidad, demostrada con datos y fuentes',
              'Integra al menos tres áreas (por ejemplo, ciencias, matemáticas y comunicación)',
              'Los cálculos (porcentajes, promedios, presupuestos, conversiones) son correctos y están explicados',
              'Cuida el ambiente e incluye a todas las personas y pueblos',
              'La comisión repartió roles con equidad y se coordinó con otras instituciones',
              'Termina con un compromiso concreto, con responsables y fechas',
            ] },
        ),
        S.match(
          { fase: 'construir', areas: ['pyd', 'cnt', 'mat', 'fc', 'l1', 'l2', 'ef'], cnb: ['cnt:6.3.4', 'pyd:5.1.1', 'fc:3.6.1', 'l2:5.4.4', 'ef:4.1.11'], ambito: 'conocer',
            prompt: 'Cada comisión usa lo que aprendiste en la unidad. Une cada **comisión** con su **propuesta** para la Agenda del futuro.',
            explain: 'Cada propuesta combina conocimientos de varias semanas: reforestación y clima, emprendimiento sostenible, instituciones y democracia, periódico y memoria, juego inclusivo y nutrición.' },
          { leftTitle: 'Comisión', rightTitle: 'Propuesta', pairs: [
            { id: 'cv', left: 'Ciencia verde', leftIcon: 'Sprout', right: 'Un vivero de árboles nativos para reforestar la cuenca del lago' },
            { id: 'ec', left: 'Economía con futuro', leftIcon: 'Coins', right: 'Un emprendimiento de bolsas de tela que reemplacen las plásticas' },
            { id: 'cp', left: 'Ciudadanía y paz', leftIcon: 'Landmark', right: 'Un manual ciudadano y una solicitud escrita al COCODE' },
            { id: 'vm', left: 'Voces y memoria', leftIcon: 'Mic', right: 'Un reportaje y un periódico con leyendas, poemas y noticias del lago' },
            { id: 'cc', left: 'Cuerpo y comunidad', leftIcon: 'HeartPulse', right: 'Un festival de juegos inclusivos con refacción nutritiva' },
          ] },
        ),
        S.cards(
          { fase: 'construir', areas: ['cnt', 'ccss', 'fc', 'mat', 'l1', 'l2', 'pyd'], cnb: ['cnt:7.3.4', 'ccss:8.3.5', 'ccss:8.4.3', 'mat:6.1.2', 'l2:3.3.3', 'pyd:5.3.1'], ambito: 'conocer',
            prompt: 'Antes de investigar, repasa las **ideas clave de la unidad** que usarán las comisiones. Voltea cada tarjeta.' },
          { cards: [
            { icon: 'CloudSun', front: '¿Cómo contrarrestamos el calentamiento global?', back: 'Sembrando árboles, ahorrando energía, caminando o usando bicicleta, reciclando y sin quemar basura.' },
            { icon: 'Home', front: '¿Qué condiciones determinan la calidad de vida?', back: 'Educación, salud, vivienda, recreación, empleo y acceso al agua.' },
            { icon: 'Landmark', front: '¿Quién hace las leyes y quién defiende la Constitución?', back: 'El Congreso (Organismo Legislativo) hace las leyes; la Corte de Constitucionalidad defiende la Constitución.' },
            { icon: 'Percent', front: '¿Cómo se calcula un porcentaje?', back: 'Parte ÷ total × 100. Si 18 de 60 personas opinan algo: 18 ÷ 60 × 100 = 30 %.' },
            { icon: 'Microscope', front: '¿Dato científico u opinión?', back: 'Un dato científico se comprueba con evidencia; una opinión expresa un punto de vista.' },
            { icon: 'Recycle', front: '¿Qué es la responsabilidad socioambiental?', back: 'Que empresas, comunidades y personas produzcan y consuman cuidando el ambiente y a las personas.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['pyd', 'ccss', 'l1'], cnb: ['pyd:2.2.2', 'l1:8.1.3'], ambito: 'hacer',
            prompt: 'Cada comisión necesita **investigar**. Une cada pregunta con la **técnica o fuente** más útil.',
            explain: 'La encuesta sirve para conocer la opinión de muchas personas; la entrevista, para profundizar con quien sabe; la observación, para registrar lo que pasa; y las fuentes digitales oficiales, para datos confiables.' },
          { leftTitle: 'Pregunta', rightTitle: 'Técnica o fuente', pairs: [
            { id: 't1', left: '¿Qué problema del lago preocupa más a las familias del barrio?', leftIcon: 'Users', right: 'Encuesta a 80 familias' },
            { id: 't2', left: '¿Cómo era el lago hace 50 años?', leftIcon: 'Mic', right: 'Entrevista a una abuela pescadora' },
            { id: 't3', left: '¿Cuánta basura llega a la orilla después de la lluvia?', leftIcon: 'Eye', right: 'Observación y conteo en la playa pública' },
            { id: 't4', left: '¿Qué funciones tiene el Concejo Municipal?', leftIcon: 'Laptop', right: 'Sitio oficial del gobierno y libro de Ciencias Sociales' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'ef', 'pyd'], cnb: ['ef:4.2.2', 'fc:2.3.3'], ambito: 'convivir', prompt: 'Tu comisión reparte los roles. ¿Qué harías tú?' },
          { scene: { icon: 'Users', text: 'En la comisión Economía con futuro, **Byron** dice: "Los cálculos los hacemos los hombres y las niñas que decoren". **Ixchel** es muy buena en matemáticas y **Mateo** quiere aprender a diseñar.' }, options: [
            { id: 'a', icon: 'EyeOff', text: 'Aceptar lo que dice Byron para no discutir', consequence: 'Ixchel se queda sin hacer lo que mejor sabe, Mateo no aprende a diseñar y el presupuesto tiene errores.', values: ['Desigualdad'], constructive: false },
            { id: 'b', icon: 'RefreshCw', text: 'Proponer que cada quien elija un rol según sus habilidades e intereses y que los roles roten', consequence: 'Ixchel coordina los cálculos, Mateo diseña las bolsas y Byron aprende a ser vocero. Todos aportan y aprenden.', values: ['Equidad de género', 'Cooperación', 'Respeto'], constructive: true },
            { id: 'c', icon: 'Megaphone', text: 'Burlarse de Byron delante de todos', consequence: 'Byron se enoja y la comisión pierde tiempo peleando.', values: ['Irrespeto'], constructive: false },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l1', 'pyd', 'fc'], cnb: ['pyd:4.2.2', 'pyd:2.2.2'], ambito: 'emprender',
            prompt: 'Escribe el **plan de tu comisión**: nombre, necesidad que atenderán, propuesta inicial, rol de cada integrante, técnica de investigación y dos fuentes que consultarán.' },
          { minWords: 40, placeholder: 'Comisión… Necesidad… Propuesta… Roles: … Técnica: … Fuentes: …',
            model: 'Comisión: Ciencia verde. Necesidad: en las laderas cercanas al lago se han talado árboles y cuando llueve la tierra baja al agua. Propuesta: un vivero escolar de árboles nativos. Roles: Ana coordina, José investiga, Rosa lleva los datos, Pedro diseña y yo soy vocera; rotamos cada día. Técnica: entrevista a un guardabosques y observación de la ladera. Fuentes: la entrevista y el libro de Ciencias Naturales.',
            rubric: ['Nombra la comisión y la necesidad', 'Propone una idea inicial relacionada con la unidad', 'Reparte roles con equidad', 'Elige una técnica y al menos dos fuentes'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['pyd', 'mat'], cnb: ['pyd:2.2.2'], prompt: 'La comisión Voces y memoria quiere saber **qué opinan 100 estudiantes** de la escuela sobre el periódico escolar. ¿Qué técnica conviene más?' },
          { options: [
            { id: 'a', text: 'Una encuesta con preguntas cerradas', icon: 'ClipboardList' },
            { id: 'b', text: 'Una entrevista larga a cada estudiante', icon: 'Mic', feedback: 'Con 100 personas tardarían muchísimo. La entrevista sirve para profundizar con pocas personas.' },
            { id: 'c', text: 'Observar el lago desde la orilla', icon: 'Eye', feedback: 'La observación registra lo que pasa, pero no recoge opiniones.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['pyd', 'fc'], cnb: ['pyd:4.2.2'] }, ['Entiendo el reto de la Expo Futuro, su rúbrica y lo que usará mi comisión', 'Elegí una técnica de investigación adecuada', 'Mi comisión repartió roles con equidad'],
          ['Aplicaré mi encuesta o entrevista antes de mañana y anotaré la fuente', 'Preguntaré a mis compañeros qué rol quieren antes de decidir', 'Contaré en casa qué propondrá mi comisión']),
      ],
    }),

    /* ───────────────────────── Día 2: Diseñar ───────────────────────── */
    lesson({
      id: 's39-d2-disenar',
      title: 'Diseñar la propuesta',
      icon: 'PenTool',
      minutes: 15,
      day: 2,
      kind: 'proyecto',
      gancho: '¿Qué convence más a un alcalde: "el lago está feo" o "32 de cada 80 familias dicen que el agua sucia es el mayor problema"?',
      objetivos: ['Organizar en una gráfica los datos de la investigación', 'Calcular porcentajes y usar la regla de tres', 'Distinguir datos comprobados de opiniones', 'Estructurar una propuesta fundamentada'],
      resumen: [
        'Una propuesta fundamentada tiene cuatro partes: el problema, los datos que lo demuestran, la solución y el acuerdo que se pide.',
        'Los porcentajes permiten comparar: parte ÷ total × 100.',
        'La regla de tres simple resuelve proporciones: si 4 bolsas de abono alcanzan para 36 bolsitas, 10 alcanzan para 90.',
        'Una propuesta seria se apoya en datos comprobados y fuentes, no solo en opiniones.',
      ],
      media: {
        id: 's39-d2-propuesta', kind: 'diagram', title: 'Las cuatro partes de una propuesta', aspect: '4:3',
        alt: 'Escalera de cuatro peldaños: problema, datos, solución y acuerdo, con un ícono en cada uno.',
        brief: 'Diagrama en forma de escalera que sube de izquierda a derecha, con cuatro peldaños de colores: 1 "Problema" (signo de alerta): "El agua del lago se ensucia"; 2 "Datos" (gráfica de barras): "40 % de las familias lo señala"; 3 "Solución" (bombilla): "Vivero y campaña sin plástico"; 4 "Acuerdo" (apretón de manos): "Pedimos al COCODE un terreno para el vivero". Arriba de la escalera, una bandera con "Agenda del futuro". Estilo plano, colores claros, texto grande.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l2', 'l1', 'fc'], cnb: ['l2:1.3.4', 'l2:3.1.1'], ambito: 'emprender', title: 'Una propuesta que convence',
            prompt: 'Una **propuesta fundamentada** no es solo una buena idea: explica por qué es necesaria y qué se pide. Toca cada parte.' },
          { icon: 'Lightbulb', body: 'Las autoridades y las familias apoyan más una propuesta cuando entienden el problema y ven **datos**.', reveal: [
            { icon: 'Info', front: '1. Problema', back: 'Qué pasa y a quién afecta: "La basura plástica llega al lago".' },
            { icon: 'BarChart3', front: '2. Datos', back: 'Encuestas, conteos, fuentes: "30 de cada 80 familias usan más de 5 bolsas plásticas al día".' },
            { icon: 'Lightbulb', front: '3. Solución', back: 'Qué proponemos hacer, con quién y cuándo.' },
            { icon: 'Handshake', front: '4. Acuerdo', back: 'Qué pedimos: "Solicitamos al COCODE un espacio en el mercado para vender bolsas de tela".' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['mat', 'ccss', 'cnt'], cnb: ['mat:6.2.1', 'ccss:8.3.5'], ambito: 'hacer',
            prompt: 'Supongamos que la comisión Ciudadanía y paz encuestó a **80 familias**: "¿Qué debe mejorar primero en la comunidad?". Resultados: agua limpia del lago 32, manejo de la basura 24, empleo para jóvenes 16, espacios de recreación 8. Construye la gráfica.',
            explain: 'La gráfica muestra que el agua limpia es la prioridad, seguida de la basura. Estas dos se relacionan: si se maneja bien la basura, el lago se ensucia menos.' },
          { categories: [
            { id: 'agua', label: 'Agua limpia del lago', icon: 'Droplets', color: 'var(--area-l1)' },
            { id: 'basura', label: 'Manejo de la basura', icon: 'Trash2', color: 'var(--area-cnt)' },
            { id: 'empleo', label: 'Empleo para jóvenes', icon: 'Briefcase', color: 'var(--area-pyd)' },
            { id: 'recre', label: 'Espacios de recreación', icon: 'Bike', color: 'var(--area-ef)' },
          ], data: [32, 24, 16, 8], max: 40, step: 4, unit: 'familias', source: 'Encuesta hipotética de la comisión' },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'ccss'], cnb: ['mat:6.1.2', 'mat:6.1.3'], ambito: 'hacer',
            prompt: 'Con los datos de la encuesta, ¿qué **porcentaje** de las 80 familias eligió el **agua limpia del lago**?',
            hint: 'Parte ÷ total × 100. También puedes simplificar: 32 de 80 es lo mismo que 4 de 10.',
            explain: '32 ÷ 80 = 0.4 → 0.4 × 100 = **40 %**. En la propuesta se puede escribir: "4 de cada 10 familias consideran que el agua del lago es la prioridad".' },
          { answer: 40, unit: '%', misconceptions: [
            { value: 32, msg: 'Ese es el número de familias. Falta calcular qué parte del total representa.' },
            { value: 2.5, msg: 'Dividiste el total entre la parte. Es parte ÷ total: 32 ÷ 80.' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'cnt', 'pyd'], cnb: ['mat:5.2.1', 'cnt:6.3.4'], ambito: 'hacer',
            prompt: 'La comisión **Ciencia verde** prepara el vivero. Supongamos que con **4 bolsas de abono** se llenan **36 bolsitas** para arbolitos. ¿Cuántas bolsitas se llenan con **10 bolsas** de abono?',
            hint: 'Regla de tres: 4 es a 36 como 10 es a ¿? Primero averigua cuántas bolsitas llena una sola bolsa de abono.',
            explain: '36 ÷ 4 = 9 bolsitas por bolsa de abono; 9 × 10 = **90 bolsitas**. Con la regla de tres: 36 × 10 ÷ 4 = 90.' },
          { answer: 90, unit: 'bolsitas', stimulus: '4 bolsas de abono → 36 bolsitas  |  10 bolsas de abono → ?', misconceptions: [
            { value: 42, msg: 'Sumaste 6 a las 36. En una proporción se multiplica: cada bolsa de abono llena 9 bolsitas.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l2', 'cnt', 'fc'], cnb: ['l2:3.3.3', 'cnt:8.2.4'], ambito: 'conocer',
            prompt: 'Para fundamentar la propuesta, la comisión separa lo que está **comprobado con datos o ciencia** de lo que es **opinión o creencia sin comprobar**. Clasifica.',
            explain: 'La propuesta se apoya en datos comprobados. Las opiniones se respetan, pero no bastan para convencer. Las creencias sin comprobar se revisan con investigación.' },
          { buckets: [
            { id: 'dato', label: 'Dato comprobado', icon: 'BadgeCheck', color: 'var(--c-ok)' },
            { id: 'opi', label: 'Opinión o creencia sin comprobar', icon: 'MessageCircle', color: 'var(--c-hint)' },
          ], items: [
            { id: 'd1', text: 'En la encuesta, 32 de 80 familias eligieron el agua limpia', bucket: 'dato' },
            { id: 'd2', text: 'Los árboles sujetan el suelo con sus raíces y reducen la erosión', bucket: 'dato' },
            { id: 'd3', text: 'El lago de Atitlán es el más bonito del mundo', bucket: 'opi' },
            { id: 'd4', text: 'La basura que se tira al lago "desaparece sola"', bucket: 'opi', feedback: 'Es una creencia falsa: el plástico tarda cientos de años en degradarse.' },
            { id: 'd5', text: 'En el conteo de la orilla se encontraron 150 bolsas plásticas en una mañana (dato de la comisión)', bucket: 'dato' },
            { id: 'd6', text: 'Creo que a nadie le importa el lago', bucket: 'opi' },
          ] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l1', 'l2', 'pyd'], cnb: ['l2:1.3.4', 'l1:2.1.5'], ambito: 'emprender',
            prompt: 'Completa la **propuesta fundamentada** de la comisión Economía con futuro con las palabras de enlace correctas.',
            explain: '"Porque" introduce la razón, "por eso" la consecuencia, "según" la fuente y "solicitamos" el acuerdo. Así la propuesta es clara y convincente.' },
          { text: 'Proponemos vender bolsas de tela típica [[porque]] la basura plástica ensucia el lago. [[Según]] nuestra encuesta, 3 de cada 8 familias usan más de cinco bolsas plásticas al día. [[Por eso]], [[solicitamos]] al COCODE un espacio en el mercado los días de plaza.',
            distractors: ['aunque', 'nunca'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['art', 'pyd', 'l1', 'l2'], cnb: ['art:2.2.4', 'pyd:5.3.1', 'l2:1.3.4'], ambito: 'hacer',
            prompt: 'Escribe la **propuesta de tu comisión** con sus cuatro partes y describe el **boceto** del stand: qué imagen, gráfica o símbolo usarán y qué materiales reciclados necesitan.',
            media: { id: 's39-d2-bocetos', kind: 'image', title: 'Bocetos de los stands', aspect: '16:9',
              alt: 'Cinco bocetos a lápiz sobre una mesa: un vivero, una bolsa de tela con precio, un manual, un periódico y un circuito de juegos.',
              brief: 'Fotografía o ilustración cenital de una mesa de aula con cinco hojas de boceto a lápiz y colores, cada una con su etiqueta: "Ciencia verde" (vivero con bolsitas y un termómetro), "Economía con futuro" (bolsa de tela con diseño de güipil y una tabla de costos), "Ciudadanía y paz" (portada de un manual con un edificio y manos), "Voces y memoria" (primera plana de periódico "El lago que queremos"), "Cuerpo y comunidad" (circuito de juegos con rampa). Alrededor: cartón, tapitas, retazos de tela y goma. Sin rostros ni marcas.' } },
          { minWords: 50, placeholder: 'Problema… Datos… Solución… Acuerdo que pedimos… Boceto del stand…',
            model: 'Problema: las laderas cercanas al lago están sin árboles y la tierra baja al agua cuando llueve. Datos: en nuestra encuesta, 32 de 80 familias eligieron el agua limpia del lago como prioridad, y el guardabosques nos contó que la ladera perdió muchos árboles en diez años. Solución: un vivero escolar con 90 arbolitos nativos para sembrar en junio. Acuerdo: pedimos al COCODE un terreno y a la municipalidad agua para regar. Boceto: el stand tendrá las bolsitas del vivero, una gráfica de barras y un dibujo de raíces sujetando el suelo, hecho con cartón reciclado.',
            rubric: ['Incluye problema, datos, solución y acuerdo', 'Usa al menos un dato de la investigación', 'La solución cuida el ambiente o a las personas', 'Describe un boceto con materiales reciclados'] },
        ),
        cierre({ areas: ['pyd', 'mat'], cnb: ['pyd:4.2.2'] }, ['Organicé datos en una gráfica y calculé porcentajes y reglas de tres', 'Separé datos comprobados de opiniones', 'Escribí una propuesta con sus cuatro partes'],
          ['Revisaré mis cálculos con otra comisión', 'Traeré materiales reciclados para el stand', 'Mostraré la propuesta a mi familia y anotaré sus sugerencias']),
      ],
    }),

    /* ───────────────────────── Día 3: Crear y producir ───────────────────────── */
    lesson({
      id: 's39-d3-crear',
      title: 'Crear y producir',
      icon: 'Hammer',
      minutes: 15,
      day: 3,
      kind: 'proyecto',
      gancho: '¿Qué puedes crear con retazos de tela, cartón, semillas, un celular y tu voz para que la gente recuerde tu propuesta?',
      objetivos: ['Calcular el presupuesto del stand en quetzales', 'Ajustar una receta nutritiva a más personas', 'Componer un ritmo para el lema de la comisión', 'Producir un texto para el reportaje o el periódico, también en inglés'],
      resumen: [
        'Un presupuesto suma los costos de los materiales y los compara con el dinero disponible.',
        'Para ajustar una receta se multiplican todas las cantidades por el mismo número.',
        'Un lema con ritmo se recuerda mejor: la duración de las figuras musicales debe completar el compás.',
        'La tecnología (celular, grabadora, computadora) se usa con ética: pedir permiso para grabar, citar las fuentes y cuidar los datos de las personas.',
      ],
      media: {
        id: 's39-d3-taller', kind: 'video', title: 'Taller de producción de la Expo', aspect: '16:9', duration: 50,
        alt: 'Estudiantes llenan bolsitas de vivero, cosen bolsas de tela, graban un reportaje con un celular y ensayan un lema con tambor.',
        brief: 'Video de 50 s en un aula-taller con luz natural. Tomas de manos (sin rostros en primer plano): (1) llenar bolsitas negras con tierra y semillas; (2) cortar y coser retazos de tela típica para hacer una bolsa, con tijeras de punta roma; (3) un niño sostiene un celular horizontal mientras una niña con micrófono de juguete narra frente al lago; (4) un grupo marca un ritmo con un tambor y palmas mientras dice el lema "¡Sin plástico, el lago brilla!"; (5) una pizarra con el presupuesto en quetzales. Sobreimpresos con el nombre de cada comisión. Música de marimba suave.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'l1', 'fc', 'art'], cnb: ['pyd:3.4.1', 'art:1.2.2'], ambito: 'hacer', title: 'Producir con ética y seguridad',
            prompt: 'Hoy cada comisión fabrica su producto. Usarán herramientas y **tecnología**: tijeras, celular, computadora. Toca cada regla.' },
          { icon: 'ShieldCheck', body: 'Producir bien es producir con **seguridad**, **ética** y **cuidado del ambiente**.', reveal: [
            { icon: 'Scissors', front: 'Seguridad', back: 'Tijeras de punta roma, guantes para la tierra y un adulto cuando se use algo caliente o filoso.' },
            { icon: 'Camera', front: 'Grabar con permiso', back: 'Antes de grabar o fotografiar a alguien, **pide permiso**. Si es menor de edad, también a su familia.' },
            { icon: 'BookOpen', front: 'Citar fuentes', back: 'En el periódico y el reportaje, di **de dónde** viene cada dato: "Según la encuesta de la comisión…".' },
            { icon: 'Recycle', front: 'Materiales reciclados', back: 'Cartón, retazos de tela, botellas y tapitas: menos basura y menos gasto.' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'pyd'], cnb: ['mat:7.5.1', 'pyd:5.1.1'], ambito: 'hacer',
            prompt: 'Supongamos que la comisión Economía con futuro compra: **6 pliegos de papel a Q2.50** cada uno, **2 marcadores a Q8.50** cada uno, **1 carrete de hilo de Q25** y **30 botones a Q0.50** cada uno. El COCODE les donó **Q100**. ¿Cuántos quetzales les **sobran**?',
            hint: 'Primero multiplica cada cantidad por su precio, luego suma todo y réstalo de Q100.',
            explain: 'Papel: 6 × 2.50 = Q15. Marcadores: 2 × 8.50 = Q17. Hilo: Q25. Botones: 30 × 0.50 = Q15. Total: 15 + 17 + 25 + 15 = Q72. Sobran 100 − 72 = **Q28**.' },
          { answer: 28, unit: 'quetzales', allowDecimal: true, stimulus: '6 × Q2.50 + 2 × Q8.50 + Q25 + 30 × Q0.50 = ?   ·   Q100 − ? = ?', misconceptions: [
            { value: 72, msg: 'Ese es el total de gastos. Falta restarlo de los Q100 donados.' },
            { value: 63.5, msg: 'Parece que sumaste los precios sin multiplicar por las cantidades.' },
          ] },
        ),
        S.recipe(
          { fase: 'construir', areas: ['cnt', 'mat', 'ef'], cnb: ['cnt:5.1.4', 'ef:3.2.2', 'mat:5.2.1'], ambito: 'hacer',
            prompt: 'La comisión Cuerpo y comunidad servirá una **refacción nutritiva** en el festival de juegos: licuado de banano con leche y avena. La leche aporta calcio y proteínas para crecer. La receta es para **4 personas**; ajústala para **24**.',
            hint: '24 personas son 6 veces 4 personas. Multiplica cada ingrediente por 6.',
            explain: 'Todo se multiplica por 6: 1 litro → 6 litros de leche, 4 → 24 bananos, 8 → 48 cucharadas de avena. Mantener la proporción conserva el sabor y la nutrición.' },
          { dish: 'Licuado de banano con leche y avena', icon: 'Milk', baseServings: 4, targetServings: 24, ingredients: [
            { name: 'Leche', icon: 'Milk', qty: 1, unit: 'litro(s)' },
            { name: 'Banano', icon: 'Apple', qty: 4, unit: 'unidades' },
            { name: 'Avena', icon: 'Wheat', qty: 8, unit: 'cucharadas' },
          ], ask: [0, 2] },
        ),
        S.rhythm(
          { fase: 'aplicar', areas: ['art', 'l1', 'mat'], cnb: ['art:1.1.6'], ambito: 'hacer',
            prompt: 'La comisión Voces y memoria compone el ritmo de su lema **"¡Sin plás-ti-co, el la-go bri-lla!"**. Crea un compás de **4 tiempos** que use al menos una **corchea** (medio tiempo) y una **blanca** (dos tiempos).',
            hint: 'Dos corcheas juntas valen un tiempo, como una negra. La blanca vale dos.',
            explain: 'Cuando la duración de las figuras suma exactamente 4 tiempos, el lema cabe en el compás y se puede repetir con palmas o tambor.' },
          { beats: 4, allowed: ['blanca', 'negra', 'corchea'], mustInclude: ['corchea', 'blanca'], showFractions: true },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l3', 'l1', 'ccss'], cnb: ['l3:3.2.3', 'l3:4.2.4'], ambito: 'hacer',
            prompt: 'La Expo tendrá visitantes que hablan inglés. Practica el **informe breve en inglés** que publicarán después de la actividad especial. Complétalo. (_sunny_ = soleado, _trees_ = árboles, _families_ = familias, _clean_ = limpio.)',
            explain: 'Un informe sobre una actividad especial dice qué pasó, cuándo, quiénes participaron y cómo estuvo el tiempo.' },
          { text: 'On Friday, our school had the Future Expo. It was [[sunny]] and warm. Many [[families]] visited our stands. We planted ninety [[trees]] to keep the lake [[clean]].',
            distractors: ['dirty', 'cars'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l2', 'l1', 'art', 'cnt'], cnb: ['l2:5.4.4', 'l2:5.3.7', 'art:1.2.2'], ambito: 'hacer',
            prompt: 'Escribe tu aporte al producto de tu comisión: una **noticia** breve para el periódico "El lago que queremos" (qué, quién, cuándo, dónde, por qué) **o** un **poema** de dos estrofas con rima sobre el futuro del lago.',
            media: { id: 's39-d3-periodico', kind: 'image', title: 'Primera plana: El lago que queremos', aspect: '3:4',
              alt: 'Primera plana de un periódico escolar con titular, foto dibujada del lago, una gráfica y un poema en un recuadro.',
              brief: 'Maqueta de periódico escolar tamaño carta, vertical. Cabezal: "El lago que queremos · Edición especial Expo Futuro". Titular grande: "Sexto grado propone una agenda para el futuro". Ilustración del lago de Atitlán con volcanes y un grupo sembrando árboles. Columna lateral con una gráfica de barras de la encuesta y un recuadro con un poema corto titulado "Agua que canta". Pie: "Fuente: encuesta de la comisión". Tipografía legible, sin logotipos.' } },
          { minWords: 45, placeholder: 'Noticia: qué, quién, cuándo, dónde y por qué… o poema de dos estrofas…',
            model: 'Sexto grado prepara 90 arbolitos para cuidar el lago. El viernes, en la escuela oficial de Sololá, la comisión Ciencia verde presentó un vivero con 90 arbolitos nativos que sembrará en la ladera cercana al lago. Lo hicieron porque, según su encuesta, el agua limpia es la prioridad de 4 de cada 10 familias, y las raíces evitan que la tierra baje al agua. El COCODE ofreció un terreno y la municipalidad prestará agua para regar.',
            rubric: ['Responde qué, quién, cuándo, dónde y por qué (o tiene dos estrofas con rima)', 'Incluye un dato o una imagen poética sobre el lago', 'Cita la fuente del dato o usa lenguaje poético', 'Revisa la ortografía y la puntuación'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['pyd', 'l1'], cnb: ['pyd:3.4.1'], prompt: 'Mientras graban el reportaje, una vendedora del mercado aparece en el video. ¿Qué es lo **ético**?' },
          { options: [
            { id: 'a', text: 'Pedirle permiso antes de publicar el video y respetar si dice que no', icon: 'Handshake' },
            { id: 'b', text: 'Publicarlo sin preguntar, porque el mercado es público', icon: 'Camera', feedback: 'Aunque sea un lugar público, la imagen de una persona es suya: hay que pedir permiso.' },
            { id: 'c', text: 'Editar el video para que parezca que dijo otra cosa', icon: 'Film', feedback: 'Cambiar lo que alguien dijo es engañar y viola la ética del periodismo.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['pyd', 'art'], cnb: ['pyd:2.5.2'] }, ['Calculé el presupuesto del stand y ajusté una receta nutritiva', 'Compuse un ritmo para el lema', 'Usé la tecnología con ética y seguridad'],
          ['Terminaré mi parte del producto antes de la Expo', 'Pediré permiso antes de fotografiar a alguien', 'Reutilizaré materiales en lugar de comprar nuevos']),
      ],
    }),

    /* ───────────────────────── Día 4: Presentar y compartir ───────────────────────── */
    lesson({
      id: 's39-d4-presentar',
      title: 'Presentar en la Expo Futuro',
      icon: 'Megaphone',
      minutes: 15,
      day: 4,
      kind: 'proyecto',
      gancho: 'Tienes tres minutos frente al alcalde, el COCODE y tus familias. ¿Cómo harás para que recuerden tu propuesta mañana?',
      objetivos: ['Estructurar una exposición de tres minutos', 'Proyectar la voz y cerrar de forma memorable', 'Atender a visitantes con cortesía, también en inglés', 'Responder a una crítica con argumentos y respeto'],
      resumen: [
        'Una exposición tiene apertura (saludo y pregunta que atrapa), desarrollo (problema, datos y solución) y cierre memorable (frase corta y acuerdo).',
        'Proyectar la voz es hablar desde el abdomen, con pausas y mirando al público, para que llegue a todas las personas.',
        'En inglés se saluda con cortesía: "Good morning", "Welcome", "Nice to meet you", "Thank you for coming".',
        'Ante una crítica, se escucha, se agradece y se responde con datos, sin ofender.',
      ],
      media: {
        id: 's39-d4-expo', kind: 'image', title: 'La Expo Futuro', aspect: '16:9',
        alt: 'Patio escolar con cinco stands decorados, familias recorriéndolos y una mesa donde autoridades comunitarias firman un documento.',
        brief: 'Ilustración amplia y alegre del patio de una escuela de Sololá con el lago y los volcanes al fondo. Cinco stands de cartón reciclado con rótulos: "Ciencia verde" (vivero), "Economía con futuro" (bolsas de tela colgadas), "Ciudadanía y paz" (manuales), "Voces y memoria" (periódicos y una bocina), "Cuerpo y comunidad" (circuito de juegos con rampa). Familias kaqchikeles, tz\'utujiles y ladinas, una pareja de turistas y una persona mayor con bastón recorren los stands. Al fondo, una mesa con un pliego grande "Agenda del futuro" que firman integrantes del COCODE. Sin personas reales ni marcas.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1', 'l2', 'fc'], cnb: ['l1:2.1.4', 'l1:2.2.4'], ambito: 'convivir', title: 'Tres minutos que se recuerdan',
            prompt: 'Cada comisión presenta en **tres minutos**. Toca cada parte de la exposición.' },
          { icon: 'Mic', body: 'Una exposición clara tiene **apertura**, **desarrollo** y **cierre**, y una voz que llega hasta la última fila.', reveal: [
            { icon: 'Hand', front: 'Apertura', back: 'Saludo respetuoso y una pregunta que atrapa: "¿Se imaginan el lago sin plástico en 2040?".' },
            { icon: 'BarChart3', front: 'Desarrollo', back: 'Problema, **datos** (con la gráfica) y la solución de la comisión.' },
            { icon: 'Star', front: 'Cierre memorable', back: 'Una frase corta que se repite y el acuerdo que se pide: "¡Sin plástico, el lago brilla! Pedimos un espacio en el mercado".' },
            { icon: 'Volume2', front: 'Proyectar la voz', back: 'Respira profundo, habla desde el abdomen, haz pausas y mira a todo el público.' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['l1', 'l2', 'pyd'], cnb: ['l1:2.2.4', 'l2:1.3.4'], ambito: 'hacer',
            prompt: 'Ordena las partes de la exposición de la comisión **Ciencia verde**.',
            explain: 'Primero se atrapa la atención, luego se presentan el problema y los datos, después la solución y, al final, el cierre con el acuerdo que se pide.' },
          { items: [
            { id: 'p1', text: '"¡Buenos días! ¿Saben cuántos árboles se cortaron en esta ladera?"' },
            { id: 'p2', text: '"Cuando llueve, la tierra sin raíces baja al lago y lo ensucia."' },
            { id: 'p3', text: '"En nuestra encuesta, 4 de cada 10 familias dicen que el agua limpia es la prioridad."' },
            { id: 'p4', text: '"Por eso preparamos un vivero con 90 arbolitos nativos."' },
            { id: 'p5', text: '"¡Raíces hoy, lago limpio mañana! Pedimos al COCODE un terreno para sembrarlos."' },
          ], labels: { start: 'Inicio', end: 'Final' } },
        ),
        S.pulse(
          { fase: 'construir', areas: ['ef', 'l1'], cnb: ['ef:4.2.10', 'l1:2.1.4'], ambito: 'ser',
            prompt: 'Antes de presentar, prepara tu cuerpo y tu voz. Mide tu pulso en reposo, haz la rutina de respiración y relajación, y vuelve a medirlo. Notarás que la calma ayuda a hablar con claridad.' },
          { seconds: 15, rounds: [
            { label: 'Antes de la rutina (nervios de la Expo)' },
            { label: 'Después de respirar y relajarte', exercise: { name: 'Respirar lento (4 tiempos inhalar, 4 exhalar), soltar hombros y decir "ma-me-mi-mo-mu" en voz alta', icon: 'Wind', seconds: 45 } },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l3', 'fc'], cnb: ['l3:5.3.1', 'l3:5.3.3'], ambito: 'convivir',
            prompt: 'Una pareja de visitantes llega al stand y dice: _"Good morning! Can we see your project?"_. ¿Qué respuesta es **cortés y adecuada**?',
            explain: 'Con visitantes que no conocemos usamos un saludo formal y amable. "What\'s up?" es informal: se usa con amigos.' },
          { options: [
            { id: 'a', text: '"Good morning! Welcome. Nice to meet you. Of course, come and see!"', icon: 'Smile' },
            { id: 'b', text: '"What\'s up? Come on, come on!"', icon: 'MessageCircle', feedback: 'Son expresiones informales entre amigos. Con visitantes es mejor un saludo formal.' },
            { id: 'c', text: '"No."', icon: 'X', feedback: 'Responder así es descortés. Recibir con amabilidad es parte del proyecto.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'l3', 'pyd'], cnb: ['mat:7.4.1', 'mat:7.5.1'], ambito: 'hacer',
            prompt: 'La pareja quiere comprar una **bolsa de tela** que cuesta **Q62** y pagar en dólares. Supongamos que hoy **1 dólar = Q7.75**. ¿Cuántos **dólares** deben pagar?',
            hint: 'Para pasar de quetzales a dólares, divide entre el tipo de cambio.',
            explain: '62 ÷ 7.75 = **8 dólares**. Comprueba: 8 × 7.75 = 62. Para pasar de dólares a quetzales se multiplica; de quetzales a dólares se divide.' },
          { answer: 8, unit: 'dólares', allowDecimal: true, misconceptions: [
            { value: 480.5, msg: 'Multiplicaste. Para pasar de quetzales a dólares se divide.' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'l1', 'ccss'], cnb: ['fc:4.1.1', 'l1:2.1.5'], ambito: 'convivir', prompt: 'Durante la Expo, un visitante critica una propuesta. ¿Qué harías tú?' },
          { scene: { icon: 'MessagesSquare', text: 'Un señor dice en voz alta: "Eso de las bolsas de tela no sirve, los niños no saben de negocios". Tu comisión se pone nerviosa y alguien quiere contestarle de mal modo.' }, options: [
            { id: 'a', icon: 'Megaphone', text: 'Responderle: "Usted no sabe nada"', consequence: 'Se arma una discusión, otras familias se alejan del stand y nadie escucha la propuesta.', values: ['Irrespeto'], constructive: false },
            { id: 'b', icon: 'BarChart3', text: 'Agradecerle, escuchar su duda y mostrarle el presupuesto y la encuesta', consequence: 'El señor ve que las cuentas están claras y pregunta cuánto cuesta una bolsa. Termina sugiriendo venderlas en el día de plaza.', values: ['Diálogo', 'Respeto', 'Cultura de paz'], constructive: true },
            { id: 'c', icon: 'EyeOff', text: 'Ignorarlo y quedarse callados', consequence: 'El señor se va con la misma idea y la comisión pierde la oportunidad de explicar.', values: ['Pasividad'], constructive: false },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l1', 'fc', 'pyd'], cnb: ['l1:2.2.4', 'l1:2.1.5', 'fc:3.6.1'], ambito: 'convivir',
            prompt: 'Escribe el **guion de tu exposición** (un minuto): apertura con pregunta, un dato, la solución y un **cierre memorable** con el acuerdo que pides.' },
          { minWords: 45, placeholder: 'Buenos días… ¿Sabían que…? Según… Proponemos… ¡…! Pedimos…',
            model: 'Buenos días, familias, COCODE y visitantes. ¿Sabían que en una sola mañana contamos 150 bolsas plásticas en la orilla del lago? Según nuestra encuesta, 3 de cada 8 familias usan más de cinco bolsas al día. Proponemos bolsas de tela típica hechas por jóvenes de la comunidad. ¡Sin plástico, el lago brilla! Pedimos al COCODE un espacio en el mercado los días de plaza.',
            rubric: ['Tiene apertura con saludo y pregunta', 'Presenta un dato con su fuente', 'Explica la solución', 'Termina con una frase memorable y un acuerdo concreto'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1', 'l2'], cnb: ['l1:2.2.4', 'l1:2.1.4'], prompt: '¿Cuál es el **mejor cierre** para una exposición?' },
          { options: [
            { id: 'a', text: 'Una frase corta y memorable con el acuerdo que se pide', icon: 'Star' },
            { id: 'b', text: '"Bueno… eso era todo, creo"', icon: 'MessageCircle', feedback: 'Un cierre dudoso hace que el público olvide la propuesta.' },
            { id: 'c', text: 'Leer otra vez toda la presentación en voz baja', icon: 'VolumeX', feedback: 'Repetir todo en voz baja cansa al público. El cierre debe ser breve y claro.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['l1', 'fc'], cnb: ['fc:4.1.1'] }, ['Presenté con apertura, datos y un cierre memorable, proyectando mi voz', 'Atendí a visitantes con cortesía, también en inglés', 'Respondí a una crítica con respeto y datos'],
          ['Practicaré mi exposición frente a mi familia', 'Escucharé las críticas sin enojarme', 'Saludaré con cortesía a quien visite mi comunidad']),
      ],
    }),

    /* ───────────────────────── Día 5: Evaluar y mejorar ───────────────────────── */
    lesson({
      id: 's39-d5-evaluar',
      title: 'Evaluar, mejorar y mirar al futuro',
      icon: 'Archive',
      minutes: 15,
      day: 5,
      kind: 'proyecto',
      gancho: 'Si abrieras una caja dentro de unos 15 años y encontraras una carta tuya de hoy, ¿qué te gustaría leer?',
      objetivos: ['Analizar la opinión de los visitantes con promedio y moda', 'Interpretar comentarios para mejorar', 'Escribir un plan de mejora con responsables y fechas', 'Escribir una carta a tu yo del futuro con tu proyecto de vida'],
      resumen: [
        'El promedio se calcula sumando todos los datos y dividiendo entre la cantidad de datos; la moda es el dato que más se repite.',
        'Evaluar un proyecto es comparar lo planificado con lo logrado, escuchar al público y proponer mejoras concretas.',
        'Un plan de mejora dice qué se hará, quién lo hará y para cuándo.',
        'Un proyecto de vida une lo personal, lo familiar y lo comunitario: quién soy hoy, qué quiero lograr y cómo aportaré a mi comunidad.',
      ],
      media: {
        id: 's39-d5-capsula', kind: 'image', title: 'La cápsula del tiempo', aspect: '1:1',
        alt: 'Caja de madera abierta con cartas enrolladas, una semilla, una foto de grupo dibujada y una copia de la Agenda del futuro.',
        brief: 'Ilustración cenital de una caja de madera reciclada abierta sobre un petate. Adentro: cartas enrolladas con listones de colores, una bolsita de semillas de árbol, una copia pequeña del periódico "El lago que queremos", una hoja titulada "Agenda del futuro" con firmas y un dibujo del grupo de sexto frente al lago. En la tapa, pintado a mano: "Abrir en 2040". Colores cálidos, estilo acuarela, sin rostros detallados.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'mat', 'l1'], cnb: ['pyd:4.2.2', 'mat:6.4.1'], ambito: 'emprender', title: 'Evaluar para mejorar',
            prompt: 'La Expo terminó. Ahora toca **evaluar**: ¿qué salió bien, qué se puede mejorar y qué haremos después? Toca cada tarjeta.' },
          { icon: 'ClipboardCheck', body: 'Evaluar no es buscar culpables: es **aprender** para que el proyecto siga creciendo.', reveal: [
            { icon: 'Star', front: 'Calificaciones', back: 'Cada visitante calificó el stand de 1 a 5 estrellas. Con esos datos calculamos el **promedio** y la **moda**.' },
            { icon: 'Sigma', front: 'Promedio', back: 'Suma todas las calificaciones y divide entre cuántas son.' },
            { icon: 'BarChart3', front: 'Moda', back: 'Es la calificación que **más se repite**.' },
            { icon: 'MessageCircle', front: 'Comentarios', back: 'Las opiniones escritas explican el porqué de los números y dan ideas para mejorar.' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'pyd'], cnb: ['mat:6.4.1'], ambito: 'hacer',
            prompt: 'Supongamos que 10 visitantes calificaron el stand de Economía con futuro: **5, 4, 5, 3, 5, 4, 5, 4, 5, 5**. ¿Cuál es el **promedio**?',
            hint: 'Suma las 10 calificaciones y divide entre 10.',
            explain: '5 + 4 + 5 + 3 + 5 + 4 + 5 + 4 + 5 + 5 = 45; 45 ÷ 10 = **4.5 estrellas**. La **moda** es 5, porque aparece 6 veces.' },
          { answer: 4.5, unit: 'estrellas', allowDecimal: true, stimulus: 'Calificaciones: 5 · 4 · 5 · 3 · 5 · 4 · 5 · 4 · 5 · 5', misconceptions: [
            { value: 5, msg: 'Esa es la moda (el dato que más se repite). El promedio se obtiene sumando y dividiendo.' },
            { value: 45, msg: 'Esa es la suma. Falta dividir entre las 10 calificaciones.' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['mat', 'ccss', 'pyd'], cnb: ['mat:6.2.1', 'pyd:2.5.2'], ambito: 'hacer',
            prompt: 'Supongamos que al salir, cada visitante marcó **en qué propuesta quiere participar**. Resultados: vivero 45, bolsas de tela 30, festival de juegos 25, periódico 15, manual ciudadano 10. Construye la gráfica.',
            explain: 'La gráfica muestra que el vivero y las bolsas de tela tienen más voluntarios: son las propuestas con más posibilidades de continuar. Las demás necesitan más difusión.' },
          { categories: [
            { id: 'viv', label: 'Vivero', icon: 'Sprout', color: 'var(--c-ok)' },
            { id: 'bol', label: 'Bolsas de tela', icon: 'ShoppingBasket', color: 'var(--area-pyd)' },
            { id: 'jue', label: 'Festival de juegos', icon: 'PersonStanding', color: 'var(--area-ef)' },
            { id: 'per', label: 'Periódico', icon: 'Newspaper', color: 'var(--area-l1)' },
            { id: 'man', label: 'Manual ciudadano', icon: 'Landmark', color: 'var(--area-fc)' },
          ], data: [45, 30, 25, 15, 10], max: 50, step: 5, unit: 'personas', source: 'Boletas hipotéticas de la Expo' },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'l2', 'pyd', 'fc'], cnb: ['l2:5.4.8', 'pyd:5.5.1', 'fc:3.6.1'], ambito: 'emprender', prompt: 'Lee los comentarios que dejaron los visitantes en el buzón de la Expo y responde.' },
          { genre: 'Comentarios del buzón', heading: '¿Qué opinaron los visitantes?', passage:
            '"El vivero me encantó. Como presidenta del COCODE, ofrezco el terreno junto al campo de fútbol. Solo falta quién riegue los arbolitos en vacaciones." — Doña Candelaria\n\n"Las bolsas de tela son bonitas, pero Q62 es caro para el mercado. Tal vez hagan unas más pequeñas y baratas." — Don Esteban, vendedor\n\n"No entendí bien la gráfica del manual ciudadano: los números eran muy pequeños." — Estudiante de cuarto grado\n\n"El festival de juegos incluyó a mi hija, que usa silla de ruedas. ¡Gracias por pensar en todos!" — Una madre de familia',
            questions: [
              { q: '¿Qué ofreció el COCODE?', options: [
                { id: 'a', text: 'Un terreno para el vivero' },
                { id: 'b', text: 'Dinero para comprar bolsas plásticas' },
                { id: 'c', text: 'Un micrófono para el periódico' },
              ], correct: 'a' },
              { q: '¿Qué problema debe resolver la comisión Ciencia verde para que el vivero funcione?', options: [
                { id: 'a', text: 'Organizar turnos para regar en vacaciones' },
                { id: 'b', text: 'Cambiar el color de las bolsas' },
                { id: 'c', text: 'Hacer la gráfica más grande' },
              ], correct: 'a', why: 'Doña Candelaria señala que falta quién riegue en vacaciones.' },
              { q: '¿Qué mejora sugiere el comentario de don Esteban?', options: [
                { id: 'a', text: 'Hacer bolsas más pequeñas y a menor precio' },
                { id: 'b', text: 'Dejar de vender bolsas' },
                { id: 'c', text: 'Venderlas solo a turistas' },
              ], correct: 'a' },
              { q: '¿Qué muestra el último comentario sobre el proyecto?', options: [
                { id: 'a', text: 'Que la inclusión fue un logro valorado por las familias' },
                { id: 'b', text: 'Que el festival fue aburrido' },
                { id: 'c', text: 'Que nadie visitó los stands' },
              ], correct: 'a' },
            ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['pyd', 'fc', 'l1'], cnb: ['pyd:2.5.2', 'pyd:5.5.1', 'fc:3.6.1'], ambito: 'emprender',
            prompt: 'Escribe el **plan de mejora** de tu comisión: un logro, algo que mejorar (usa un comentario o un dato), la acción concreta, **quién** la hará, **con qué institución** se coordinará y **para cuándo**.' },
          { minWords: 40, placeholder: 'Logramos… Podemos mejorar… Haremos… Responsables… Nos coordinaremos con… Fecha…',
            model: 'Logramos que 45 visitantes quieran participar en el vivero y que el COCODE nos preste un terreno. Podemos mejorar el riego, porque en vacaciones nadie cuidaría los arbolitos. Haremos turnos de riego con familias voluntarias: Rosa y José arman el calendario y lo comparten con el COCODE y la municipalidad, que prestará una manguera. La primera siembra será la última semana de mayo, al inicio de las lluvias.',
            rubric: ['Nombra un logro con un dato', 'Identifica una mejora a partir de un comentario o dato', 'Propone una acción concreta con responsables', 'Menciona una institución con la que se coordinará y una fecha'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['fc', 'l1', 'pyd'], cnb: ['fc:5.1.6'], ambito: 'ser',
            prompt: 'Escribe tu **carta a tu yo del futuro** para la cápsula del tiempo: quién eres hoy, qué aprendiste este año, qué quieres lograr en tu vida y cómo quieres ayudar a tu familia y a tu comunidad.',
            media: { id: 's39-d5-carta', kind: 'audio', title: 'Una carta al futuro', duration: 45,
              alt: 'Voz de una niña que lee en voz alta una carta a su yo del futuro, con sonido suave de marimba y del lago.',
              brief: 'Audio de 45 s: sonido ambiente de olas suaves del lago y pájaros; una niña de 12 años lee con calma una carta ficticia: "Querida yo de 2040: hoy tengo 12 años y aprendí que los datos ayudan a decidir… Quiero ser enfermera y volver a mi comunidad… Espero que el vivero sea ya un bosque". Marimba muy suave de fondo al final. Voz natural, español de Guatemala, sin nombres reales.' } },
          { minWords: 50, placeholder: 'Querida/o yo del futuro: hoy tengo… Este año aprendí… Quiero lograr… Para mi familia… Para mi comunidad…',
            model: 'Querido yo de 2040: hoy tengo 12 años y termino sexto grado. Este año aprendí a investigar con encuestas, a calcular presupuestos y a defender mis ideas con datos. Quiero estudiar agronomía para ayudar a que los cultivos resistan el calor. A mi familia le prometo seguir estudiando y apoyar a mi hermanita. A mi comunidad, cuidar el vivero que sembramos. Espero que cuando leas esto el lago esté más limpio y que tú sigas siendo amable.',
            rubric: ['Describe quién es hoy y qué aprendió', 'Propone una meta personal realista', 'Incluye un compromiso con su familia y su comunidad', 'Escribe con orden, ortografía y puntuación cuidadas'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['mat', 'pyd'], cnb: ['mat:6.4.1'], prompt: 'Las calificaciones del stand de Cuerpo y comunidad fueron: **4, 5, 5, 3, 5**. ¿Cuál es la **moda**?' },
          { options: [
            { id: 'a', text: '5, porque es la calificación que más se repite', icon: 'Star' },
            { id: 'b', text: '4.4, porque es el promedio', icon: 'Sigma', feedback: '4.4 sí es el promedio (22 ÷ 5), pero la pregunta pide la moda: el dato que más se repite.' },
            { id: 'c', text: '3, porque es la más baja', icon: 'Minus', feedback: 'La moda no es el dato más bajo, sino el que aparece más veces.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['pyd', 'fc'], cnb: ['fc:5.1.6'] }, ['Analicé los resultados con promedio, moda y comentarios', 'Propuse mejoras concretas con responsables, instituciones y fechas', 'Escribí mi carta al futuro con metas personales, familiares y comunitarias'],
          ['Seguiré participando en una propuesta de la Agenda del futuro', 'Guardaré mi carta y releeré mis metas al empezar el próximo año', 'Invitaré a mi familia a una acción por el lago o por mi comunidad']),
      ],
    }),
  ],
});
