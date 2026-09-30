import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 9 · Unidad 1 "Conociendo nuestras raíces" · PROYECTO INTEGRADOR
 * Tema generador: Museo vivo de nuestras raíces
 * Integra las semanas 1-8: planeta y recursos, cuerpo y salud, figuras y numeración maya,
 * historia y memoria, cultura de paz, ambiente, investigación y emprendimiento.
 */
export default semana({
  id: 's09',
  unidad: 1,
  semana: 9,
  kind: 'proyecto',
  temaGenerador: 'Museo vivo de nuestras raíces',
  title: 'Museo vivo de nuestras raíces',
  subtitle: 'Proyecto: una exposición para que la comunidad se conozca y se cuide',
  icon: 'Landmark',
  color: 'var(--area-pyd)',
  contexto: 'Muchas familias no conocen de dónde viene el agua que toman, qué riesgos naturales tiene su comunidad ni las historias que guardan sus abuelas y abuelos. Esta semana tu grado montará un Museo vivo en la escuela: estaciones con mapas, datos en numerales mayas, arte con texturas, memoria y juegos tradicionales, para que la comunidad se conozca, se valore y se comprometa a cuidar sus raíces.',
  ejes: ['multiculturalidad', 'sostenible', 'vida-ciudadana', 'valores', 'trabajo'],
  media: {
    id: 's09-portada', kind: 'video', title: 'Así se arma un museo vivo', aspect: '16:9', duration: 60,
    alt: 'Estudiantes transforman su aula en un museo con estaciones: un mapa de la comunidad, una línea del tiempo, numerales mayas con maíz, un mural con texturas y una esquina de juegos tradicionales.',
    brief: 'Video en cámara rápida (animación 2D o dramatización con estudiantes, sin rostros identificables en primer plano) de 60 s: un aula vacía se llena de estaciones de museo hechas con cartón reciclado. Estaciones rotuladas: "Agua y bosque", "Memoria y paz", "Números de mis abuelos", "Arte para tocar", "Juegos de antes". Al final entran familias, abuelas y niños pequeños; una niña guía la visita. Texto final: "Conocer nuestras raíces es el primer paso para cuidarlas". Música de marimba alegre.',
  },
  badge: { id: 'medalla-s09', name: 'Curador de raíces', icon: 'Landmark', desc: 'Completaste el proyecto integrador de la Unidad 1' },
  lessons: [
    /* ───────────────────────── Día 1: Planificar e investigar ───────────────────────── */
    lesson({
      id: 's09-d1-planificar',
      title: 'Planificar e investigar',
      icon: 'ClipboardList',
      minutes: 15,
      day: 1,
      kind: 'proyecto',
      gancho: 'Si tus vecinos visitaran un museo sobre su propia comunidad, ¿qué te gustaría que descubrieran?',
      objetivos: ['Comprender el reto del proyecto y su rúbrica', 'Formular preguntas de investigación para tu estación', 'Elegir las herramientas para recoger información', 'Organizar el equipo, los roles y el calendario'],
      resumen: [
        'El Museo vivo tiene cinco estaciones: Agua y bosque, Memoria y paz, Números de mis abuelos, Arte para tocar y Juegos de antes.',
        'Cada equipo formula preguntas clave, elige fuentes confiables y usa herramientas como entrevistas, encuestas y observación.',
        'Planificar es decidir qué, cómo, quién, cuándo y con qué recursos se hará el trabajo.',
      ],
      media: {
        id: 's09-d1-estaciones', kind: 'diagram', title: 'Plano del Museo vivo', aspect: '4:3',
        alt: 'Plano de un aula vista desde arriba con cinco estaciones numeradas y una ruta de visita con flechas.',
        brief: 'Plano cenital de un aula convertida en museo. Cinco estaciones en forma de mesas o paneles, cada una con ícono y color: 1 Agua y bosque (árbol y gota, verde), 2 Memoria y paz (paloma y libro, violeta), 3 Números de mis abuelos (caracol y maíz, magenta), 4 Arte para tocar (mano y pincel, naranja), 5 Juegos de antes (trompo, amarillo). Flechas punteadas marcan la ruta desde la puerta de entrada hasta la salida, donde hay un "Árbol de compromisos". Estilo plano, legible en celular.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'ccss', 'l1'], cnb: ['pyd:4.1.1', 'ccss:3.2.5'], ambito: 'emprender', title: 'El reto: un museo de la comunidad',
            prompt: 'Durante ocho semanas investigaste el planeta, tu cuerpo, las figuras, los números, la historia y la paz. Ahora vas a **compartirlo** con tu comunidad. Toca cada tarjeta para conocer el reto.' },
          { icon: 'Landmark', body: 'Un **museo vivo** no solo muestra objetos: invita a tocar, jugar, preguntar y comprometerse.', reveal: [
            { icon: 'Target', front: 'La necesidad', back: 'Muchas familias no conocen de dónde viene su agua, qué riesgos tiene la comunidad ni la historia de sus abuelos. Lo que no se conoce, no se cuida.' },
            { icon: 'Package', front: 'El producto', back: 'Una exposición con **5 estaciones** hechas con materiales reciclados, guiada por ustedes.' },
            { icon: 'Users', front: 'El público', back: 'Familias, abuelas y abuelos, estudiantes de otros grados y autoridades comunitarias.' },
            { icon: 'Sprout', front: 'El compromiso', back: 'Al salir, cada visitante escribe un compromiso en el **Árbol de compromisos**: cuidar el agua, el bosque o la paz.' },
          ] },
        ),
        S.project(
          { fase: 'construir', areas: ['pyd', 'l1', 'art', 'fc'], cnb: ['pyd:4.1.1', 'pyd:4.3.1', 'l1:8.2.1', 'fc:3.2.1'], ambito: 'emprender',
            prompt: 'Esta es la **guía completa** del proyecto. Léela con tu equipo y vuelve a ella cada día.' },
          { goal: 'Montar un Museo vivo con cinco estaciones que ayude a la comunidad a conocer y cuidar sus raíces: su agua y sus bosques, su historia y su memoria, sus números, su arte y sus juegos.',
            steps: [
              { title: '1. Formar equipos y elegir estación', detail: 'Equipos de 4 o 5 con roles rotativos: coordinación, investigación, diseño, producción y guía. Cada equipo elige una de las 5 estaciones.' },
              { title: '2. Investigar', detail: 'Escribir 3 preguntas clave, consultar fuentes escritas y tecnológicas, y hacer al menos una entrevista o encuesta en la comunidad. Anotar siempre la fuente.' },
              { title: '3. Diseñar', detail: 'Bocetar la estación: título, 1 mapa o gráfica, 1 dato en numeral maya, 1 elemento para tocar (texturas) y 1 actividad interactiva para el público.' },
              { title: '4. Producir', detail: 'Construir la estación con cartón, tela, semillas y materiales reciclados. Escribir la cédula (texto del museo) con borrador, revisión y versión final.' },
              { title: '5. Ensayar y presentar', detail: 'Ensayar la guía de 2 minutos: saludo cortés, dato sorprendente, actividad y pregunta al público. Presentar el día del museo.' },
              { title: '6. Evaluar y mejorar', detail: 'Analizar la encuesta de visitantes, conversar sobre lo que funcionó y escribir un plan de mejora y un compromiso comunitario.' },
            ],
            evidence: 'Fotografías o dibujos de la estación terminada, la cédula final, la gráfica de la encuesta de visitantes y el plan de mejora del equipo.',
            rubric: [
              'La estación presenta información correcta y cita sus fuentes',
              'Integra al menos tres áreas (por ejemplo, ciencias, matemáticas y arte)',
              'Es accesible: letra grande, texturas o audio para distintas personas',
              'Muestra respeto por todas las culturas y por la memoria de las víctimas',
              'El equipo repartió roles y cumplió el calendario',
              'Invita al público a comprometerse con una acción concreta',
            ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['l1', 'cnt'], cnb: ['l1:8.2.2'], ambito: 'conocer',
            prompt: 'Tu equipo eligió la estación **Agua y bosque**. ¿Cuáles son buenas **preguntas de investigación**? Elige todas las correctas.',
            explain: 'Las buenas preguntas son claras, se pueden investigar y apuntan a lo importante para la comunidad.' },
          { multiple: true, options: [
            { id: 'a', text: '¿De qué nacimiento o pozo viene el agua de nuestra comunidad?', icon: 'Droplets' },
            { id: 'b', text: '¿Cuánto bosque hay arriba de ese nacimiento y quién lo cuida?', icon: 'Trees' },
            { id: 'c', text: '¿Qué riesgos naturales (deslaves, inundaciones) tiene la comunidad?', icon: 'CloudRain' },
            { id: 'd', text: '¿A quién le gusta más el color verde?', icon: 'Palette', feedback: 'Es una pregunta de gusto personal: no ayuda a la investigación.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.match(
          { fase: 'construir', areas: ['ccss', 'l1'], cnb: ['ccss:5.3.1', 'l1:8.2.3'], ambito: 'hacer',
            prompt: 'Cada estación necesita una **herramienta** para recoger información. Une cada necesidad con la herramienta más adecuada.',
            explain: 'Las herramientas de las Ciencias Sociales permiten obtener información directamente de la comunidad y de los documentos.' },
          { leftTitle: 'Necesidad', rightTitle: 'Herramienta', pairs: [
            { id: 'h1', left: 'Conocer lo que recuerdan los abuelos de la firma de la paz', leftIcon: 'Mic', right: 'Entrevista con preguntas preparadas' },
            { id: 'h2', left: 'Saber de dónde viene el agua de 30 familias', leftIcon: 'ClipboardList', right: 'Encuesta con opciones' },
            { id: 'h3', left: 'Registrar qué juegos se juegan en el recreo', leftIcon: 'Eye', right: 'Observación con lista de cotejo' },
            { id: 'h4', left: 'Saber cuándo se fundó el municipio', leftIcon: 'Library', right: 'Consulta de documentos en la biblioteca' },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['l1', 'pyd'], cnb: ['l1:8.2.1'], ambito: 'emprender',
            prompt: 'Arma el **calendario** de la semana del proyecto: ordena las tareas del primer al último día.',
            explain: 'Un calendario claro permite que cada integrante sepa qué hacer y evita dejar todo para el final.' },
          { items: [
            { id: 'k1', text: 'Formar equipos, elegir estación e investigar' },
            { id: 'k2', text: 'Bocetar la estación y preparar los datos' },
            { id: 'k3', text: 'Construir la estación y escribir la cédula' },
            { id: 'k4', text: 'Ensayar y abrir el museo al público' },
            { id: 'k5', text: 'Analizar la encuesta y escribir el plan de mejora' },
          ], labels: { start: 'Día 1', end: 'Día 5' } },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l1', 'pyd', 'fc'], cnb: ['l1:8.2.1', 'pyd:4.1.1', 'fc:3.2.1'], ambito: 'emprender',
            prompt: 'Escribe el **plan de tu equipo**: nombre de la estación, rol de cada integrante, tus tres preguntas de investigación y las fuentes o herramientas que usarán.' },
          { minWords: 40, placeholder: 'Estación… Roles: … Preguntas: 1… 2… 3… Fuentes y herramientas: …',
            model: 'Estación: Números de mis abuelos. Roles: Ana coordina, Kevin investiga, Rosa diseña, Pedro produce y yo seré guía. Preguntas: 1) ¿Quiénes en la comunidad conocen los numerales mayas? 2) ¿Cómo se usaban para contar en el mercado? 3) ¿Cuántas familias siembran milpa? Fuentes y herramientas: entrevista a don Tomás, un anciano que aprendió a contar en maya; encuesta a 30 familias sobre la milpa; libro de matemática maya de la biblioteca.',
            rubric: ['Nombra la estación y los roles', 'Escribe tres preguntas claras', 'Indica fuentes y herramientas concretas', 'Reparte el trabajo de forma equitativa'] },
        ),
        cierre({ areas: ['pyd', 'fc'], cnb: ['fc:3.2.1'] }, ['Entiendo el reto y la rúbrica del proyecto', 'Mi equipo tiene roles y preguntas claras', 'Sé qué herramientas usaré para investigar'],
          ['Haré mi entrevista o encuesta antes de mañana', 'Anotaré la fuente de cada dato', 'Cumpliré mi rol en el equipo']),
      ],
    }),

    /* ───────────────────────── Día 2: Diseñar ───────────────────────── */
    lesson({
      id: 's09-d2-disenar',
      title: 'Diseñar la estación',
      icon: 'PenTool',
      minutes: 14,
      day: 2,
      kind: 'proyecto',
      gancho: '¿Qué hace que una exposición sea tan interesante que no quieres irte?',
      objetivos: ['Organizar los datos de tu investigación en una gráfica', 'Representar datos con numerales mayas', 'Diseñar una estación accesible para todas las personas', 'Bocetar con volumen, movimiento y texturas'],
      resumen: [
        'Una gráfica de barras muestra de un vistazo los resultados de una encuesta.',
        'Representar datos con numerales mayas conecta la información con la herencia de nuestros pueblos.',
        'Una estación accesible usa letra grande, contraste, texturas para tocar y audio o lectura en voz alta.',
      ],
      media: {
        id: 's09-d2-boceto', kind: 'image', title: 'Boceto de una estación', aspect: '4:3',
        alt: 'Boceto a lápiz de un panel de cartón con título, una gráfica de barras, un numeral maya hecho con semillas y un recuadro con texturas.',
        brief: 'Ilustración tipo boceto a lápiz y colores sobre papel cuadriculado de la estación "Agua y bosque": panel de cartón en tres partes (tríptico); a la izquierda título grande y mapa de la comunidad con el nacimiento; al centro una gráfica de barras de la encuesta y el número de familias encuestadas en numeral maya hecho con maíz y frijol; a la derecha un recuadro con corteza, musgo y piedra para tocar. Notas al margen con flechas: "letra grande", "texturas", "pregunta al público".',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['art', 'pyd', 'l1'], cnb: ['art:3.2.7', 'pyd:4.1.1'], ambito: 'hacer', title: 'Cuatro claves de diseño',
            prompt: 'Antes de construir, se **diseña**. Toca cada clave para una estación que atrape al público.' },
          { icon: 'PenTool', body: 'Un buen diseño cuenta una idea principal con pocas palabras y mucha imagen.', reveal: [
            { icon: 'Newspaper', front: 'Título que atrapa', back: 'Una pregunta o frase corta: "¿De dónde viene tu agua?"' },
            { icon: 'BarChart3', front: 'Datos a la vista', back: 'Una gráfica o mapa en lugar de párrafos largos.' },
            { icon: 'Hand', front: 'Para tocar y jugar', back: 'Texturas, piezas que se mueven o un juego corto para el público.' },
            { icon: 'Eye', front: 'Para todas las personas', back: 'Letra grande, colores con buen contraste y alguien que lea en voz alta.' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['ccss', 'mat', 'cnt'], cnb: ['ccss:5.3.1', 'cnt:6.3.1'], ambito: 'hacer',
            prompt: 'Supongamos que tu equipo encuestó a **30 familias**: "¿De dónde viene el agua de tu casa?". Resultados: chorro municipal 12, nacimiento 9, pozo 6, camión cisterna 3. Construye la gráfica para tu estación.',
            explain: 'La gráfica muestra que 9 familias dependen directamente del nacimiento: cuidar el bosque de arriba es cuidar su agua.' },
          { categories: [
            { id: 'cho', label: 'Chorro', icon: 'Droplet', color: 'var(--area-l1)' },
            { id: 'nac', label: 'Nacimiento', icon: 'Mountain', color: 'var(--c-quetzal)' },
            { id: 'poz', label: 'Pozo', icon: 'Circle', color: 'var(--area-pyd)' },
            { id: 'cam', label: 'Cisterna', icon: 'Truck', color: 'var(--area-cnt)' },
          ], data: [12, 9, 6, 3], max: 15, step: 3, unit: 'familias', source: 'Encuesta hipotética del equipo' },
        ),
        S.maya(
          { fase: 'construir', areas: ['mat', 'art'], cnb: ['mat:4.1.5'], ambito: 'hacer',
            prompt: 'En la estación escribirán el total de familias encuestadas (**30**) con un numeral maya hecho con granos de maíz y frijol. Constrúyelo primero aquí.',
            hint: '30 = 1 × 20 + 10.',
            explain: 'Un punto en el nivel del 20 y dos barras en el nivel del 1: 20 + 10 = 30.' },
          { mode: 'build', target: 30, levels: 2, scaffold: true },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['art', 'fc'], cnb: ['art:3.2.4', 'fc:1.1.2'], ambito: 'convivir',
            prompt: 'Al museo vendrán abuelas que no leen bien letra pequeña, niños pequeños y un vecino con discapacidad visual. Clasifica cada decisión de diseño.',
            explain: 'Diseñar pensando en todas las personas es una forma de convivencia solidaria: nadie se queda fuera del museo.' },
          { buckets: [
            { id: 'inc', label: 'Incluye a más personas', icon: 'HeartHandshake', color: 'var(--c-ok)' },
            { id: 'exc', label: 'Deja a personas fuera', icon: 'EyeOff', color: 'var(--area-cnt)' },
          ], items: [
            { id: 'd1', text: 'Texturas de corteza, tela y semillas para tocar', bucket: 'inc' },
            { id: 'd2', text: 'Letra grande y colores con buen contraste', bucket: 'inc' },
            { id: 'd3', text: 'Un guía que lee en voz alta y responde preguntas', bucket: 'inc' },
            { id: 'd4', text: 'Párrafos largos con letra pequeña', bucket: 'exc' },
            { id: 'd5', text: 'Objetos que no se pueden tocar ni escuchar', bucket: 'exc' },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['art', 'pyd'], cnb: ['art:3.2.7', 'art:3.2.4'], ambito: 'hacer',
            prompt: 'Describe el **boceto** de tu estación: ¿qué título tendrá?, ¿qué imagen o gráfica pondrás al centro?, ¿qué texturas usarás? y ¿cómo darás volumen y movimiento a los dibujos?',
            media: { id: 's09-d2-texturas', kind: 'image', title: 'Muestrario de texturas recicladas', aspect: '1:1',
              alt: 'Cuadrícula de nueve cuadros con materiales: corteza, tela de corte, cartón corrugado, lija, algodón, semillas, papel arrugado, arena y hojas secas.',
              brief: 'Fotografía cenital (o ilustración realista) de una cuadrícula 3 × 3 de cuadros de cartón de 10 cm, cada uno cubierto con un material reciclado o natural: corteza, retazo de tela típica sin diseño identificable, cartón corrugado, lija, algodón, semillas de frijol y maíz, papel arrugado, arena y hojas secas. Iluminación lateral suave para resaltar el relieve. Etiqueta pequeña bajo cada cuadro.' } },
          { minWords: 35, placeholder: 'El título será… En el centro… Las texturas… Para dar volumen y movimiento…',
            model: 'El título será "¿De dónde viene tu agua?". En el centro pondremos un mapa de la comunidad con el nacimiento y el bosque, y a la par la gráfica de la encuesta. Usaremos corteza y musgo para que se toque el bosque, y papel celeste arrugado para el río. Para dar volumen sombrearemos las montañas con verde oscuro, y para dar movimiento dibujaremos el río con líneas curvas y gotas que bajan en diagonal.',
            rubric: ['Propone un título atractivo', 'Incluye un dato, gráfica o mapa', 'Usa texturas para hacerla accesible', 'Explica cómo dará volumen y movimiento'] },
        ),
        cierre({ areas: ['art', 'pyd'], cnb: ['art:3.2.7'] }, ['Organicé los datos en una gráfica', 'Diseñé una estación accesible', 'Mi boceto combina información, arte y juego'],
          ['Traeré materiales reciclados para construir', 'Revisaré que la letra de la estación se lea desde lejos', 'Pediré opinión de mi equipo sobre el boceto']),
      ],
    }),

    /* ───────────────────────── Día 3: Crear y producir ───────────────────────── */
    lesson({
      id: 's09-d3-crear',
      title: 'Crear y producir',
      icon: 'Hammer',
      minutes: 15,
      day: 3,
      kind: 'proyecto',
      gancho: '¿Cómo se convierte un montón de cartón y semillas en una estación de museo?',
      objetivos: ['Usar herramientas con seguridad', 'Escribir la cédula de la estación en etapas', 'Resolver los conflictos del equipo con diálogo', 'Componer la fanfarria de inauguración'],
      resumen: [
        'Las tijeras, cúteres y pegamentos se usan con supervisión, sobre una mesa firme y guardándolos al terminar.',
        'La cédula de museo es un texto breve y exacto; se escribe con borrador, revisión, corrección y versión final.',
        'Los desacuerdos del equipo se resuelven escuchando a todos, buscando alternativas y cumpliendo el acuerdo.',
      ],
      media: {
        id: 's09-d3-taller', kind: 'video', title: 'Taller de producción', aspect: '16:9', duration: 45,
        alt: 'Estudiantes cortan cartón con tijeras de punta roma, pegan semillas en un numeral maya y pintan un mural pequeño.',
        brief: 'Video corto de 45 s, planos cerrados de manos (sin rostros identificables): cortar cartón con tijeras de punta roma sobre una mesa firme, pegar granos de maíz y frijol formando un numeral maya, pintar montañas con degradado, rotular una cédula con marcador grueso. Sobreimpresos de seguridad: "Corta lejos de tu cuerpo", "Guarda las herramientas al terminar". Música de marimba suave.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'ef'], cnb: ['pyd:3.2.3', 'pyd:3.2.4'], ambito: 'hacer', title: 'Producción segura',
            prompt: 'Hoy se construye. Antes, repasa las **reglas de seguridad** con herramientas. Toca cada tarjeta.' },
          { icon: 'HardHat', body: 'Un buen taller es ordenado: cada herramienta tiene su lugar y su responsable.', reveal: [
            { icon: 'Scissors', front: 'Tijeras y cúter', back: 'Las tijeras son una **máquina simple** (dos palancas unidas). Corta **lejos de tu cuerpo**, sobre una mesa firme; el cúter solo con una persona adulta.' },
            { icon: 'Droplet', front: 'Pegamentos y pinturas', back: 'Usa poca cantidad, en un lugar ventilado, y lávate las manos al terminar.' },
            { icon: 'Recycle', front: 'Materiales', back: 'Prefiere cartón, tela y semillas **reutilizados**; separa los sobrantes para reciclar.' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['l1', 'pyd'], cnb: ['l1:8.2.7'], ambito: 'hacer',
            prompt: 'La **cédula** es el texto que acompaña a cada estación. Ordena cómo la escribirá tu equipo.',
            explain: 'La cédula debe ser breve (40 a 60 palabras), exacta y citar la fuente al pie.' },
          { items: [
            { id: 'c1', text: 'Revisar las notas de la investigación' },
            { id: 'c2', text: 'Escribir un primer borrador' },
            { id: 'c3', text: 'Pedir a otro equipo que lo revise' },
            { id: 'c4', text: 'Corregir datos, ortografía y claridad' },
            { id: 'c5', text: 'Escribir la versión final con letra grande' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.fill(
          { fase: 'construir', areas: ['cnt', 'ccss', 'mat'], cnb: ['cnt:6.3.1', 'ccss:6.5.5', 'mat:4.1.6'], ambito: 'conocer',
            prompt: 'Revisa la **exactitud** de estas cédulas antes de imprimirlas. Completa cada una con el dato correcto que aprendiste en la unidad.',
            explain: 'Una cédula con errores confunde al público. Por eso, revisar los datos es parte de la honestidad intelectual.' },
          { text: 'Agua y bosque: las raíces ayudan a que la lluvia se [[infiltre]] y recargue los nacimientos.\nMemoria y paz: el Acuerdo de Paz Firme y Duradera se firmó en [[1996]].\nNúmeros de mis abuelos: el sistema maya es [[vigesimal]] y usa punto, barra y caracol.',
            distractors: ['evapore', '1954', 'decimal'] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'ccss', 'l1'], cnb: ['fc:1.1.2', 'ccss:8.2.1', 'l1:8.2.4'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
          { scene: { icon: 'Users', text: 'Falta un día para el museo. **Byron** no ha traído materiales y **Glenda** propone copiar la cédula de otro equipo "para terminar rápido". El equipo empieza a discutir.' }, options: [
            { id: 'a', icon: 'Megaphone', text: 'Regañar a Byron frente a todos', consequence: 'Byron se siente humillado y se aleja. El equipo pierde tiempo y ánimo.', values: ['Impaciencia'], constructive: false },
            { id: 'b', icon: 'MessagesSquare', text: 'Hacer una pausa: escuchar a Byron, repartir de nuevo las tareas y escribir nuestra propia cédula', consequence: 'Byron explica que no tenía cartón en casa; se compromete a pintar. Terminan juntos y la cédula es suya.', values: ['Diálogo', 'Honestidad', 'Solidaridad'], constructive: true },
            { id: 'c', icon: 'Copy', text: 'Copiar la cédula del otro equipo', consequence: 'Dos estaciones dicen lo mismo y el otro equipo se molesta. El trabajo pierde valor.', values: ['Deshonestidad'], constructive: false },
          ] },
        ),
        S.rhythm(
          { fase: 'aplicar', areas: ['art', 'mat'], cnb: ['art:1.1.2'], ambito: 'hacer',
            prompt: 'El museo se inaugura con una **fanfarria de marimba**. Compón un compás de **4 tiempos** que tenga al menos una **negra** y una **corchea**, y tócalo. ¡Tu equipo lo tocará con palmas en la apertura!',
            hint: 'Negra = 1 tiempo; corchea = 1/2 tiempo; blanca = 2 tiempos.',
            explain: 'Por ejemplo: negra + negra + corchea + corchea + negra = 1 + 1 + ½ + ½ + 1 = 4 tiempos.' },
          { beats: 4, allowed: ['blanca', 'negra', 'corchea'], mustInclude: ['negra', 'corchea'], showFractions: true },
        ),
        cierre({ areas: ['pyd', 'fc'], cnb: ['pyd:3.2.3'] }, ['Usé las herramientas con seguridad', 'Nuestra cédula es exacta y original', 'Resolví los desacuerdos con diálogo'],
          ['Terminaré mi parte de la estación', 'Guardaré las herramientas y reciclaré los sobrantes', 'Ensayaré la fanfarria con mi equipo']),
      ],
    }),

    /* ───────────────────────── Día 4: Presentar y compartir ───────────────────────── */
    lesson({
      id: 's09-d4-presentar',
      title: 'Presentar y compartir',
      icon: 'Megaphone',
      minutes: 14,
      day: 4,
      kind: 'proyecto',
      gancho: '¿Cómo logras que una abuela, un niño de primero y el alcalde escuchen con interés tu estación?',
      objetivos: ['Guiar una visita manteniendo la atención del público', 'Cuidar la entonación, la fluidez y el volumen', 'Usar expresiones de cortesía y respeto', 'Responder con respeto ante comentarios discriminatorios'],
      resumen: [
        'Para mantener la atención: saluda, mira al público, usa gestos, cambia el tono de voz, muestra objetos y haz una pregunta.',
        'Una buena guía habla con volumen suficiente, a ritmo tranquilo y con entonación variada.',
        'Las expresiones de cortesía (buenos días, señora, don, por favor, gracias) muestran respeto a cada visitante.',
        'Ante un comentario que discrimina, se responde con calma, con datos y con respeto, sin burlas.',
      ],
      media: {
        id: 's09-d4-guia', kind: 'animation', title: 'Una guía de museo en 2 minutos', aspect: '9:16', duration: 60,
        alt: 'Animación vertical de una niña guía que saluda, cuenta un dato, invita a tocar texturas y hace una pregunta al público.',
        brief: 'Animación vertical (formato celular) de 60 s dividida en cuatro momentos rotulados: "1. Saludo cortés" (la guía dice "Buenos días, señoras y señores, bienvenidos"), "2. Dato sorprendente" (señala la gráfica), "3. ¡A tocar!" (una abuela toca las texturas), "4. Pregunta al público" ("¿Qué harían ustedes para cuidar el nacimiento?"). Iconos de volumen y reloj como indicadores. Personajes diversos, subtítulos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1', 'l2'], cnb: ['l1:2.1.6', 'l2:2.2.1'], ambito: 'convivir', title: 'La guía de 2 minutos',
            prompt: 'Cada guía tiene **2 minutos** por grupo de visitantes. Toca cada momento de la presentación.' },
          { icon: 'Mic', body: 'Recuerda la voz: **volumen** para que te escuchen al fondo, **fluidez** sin correr y **entonación** que suba en las preguntas.', reveal: [
            { icon: 'Handshake', front: '1. Saludo', back: '"Buenos días, señoras y señores. Soy Ana y les doy la bienvenida a la estación Agua y bosque."' },
            { icon: 'Lightbulb', front: '2. Dato sorprendente', back: '"9 de cada 30 familias toman agua directamente de un nacimiento."' },
            { icon: 'Hand', front: '3. Actividad', back: '"Toquen la corteza y el musgo: así se siente el bosque que guarda el agua."' },
            { icon: 'MessageCircle', front: '4. Pregunta y despedida', back: '"¿Qué harían ustedes para cuidarlo? Muchas gracias por su visita."' },
          ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['l1', 'l2'], cnb: ['l1:2.1.6', 'l2:2.2.1'], ambito: 'convivir',
            prompt: 'Durante la guía, ¿qué acciones mantienen la **atención del público**? Elige todas las correctas.',
            explain: 'El contacto visual, los objetos y las preguntas convierten al público en participante.' },
          { multiple: true, options: [
            { id: 'a', text: 'Mirar a las personas y usar gestos', icon: 'Eye' },
            { id: 'b', text: 'Mostrar las texturas y la gráfica mientras hablo', icon: 'Hand' },
            { id: 'c', text: 'Hacer una pregunta al público', icon: 'MessageCircle' },
            { id: 'd', text: 'Leer el cartel dándole la espalda al público', icon: 'VolumeX', feedback: 'Si das la espalda, el público deja de escucharte.' },
            { id: 'e', text: 'Hablar muy rápido para terminar antes', icon: 'Timer', feedback: 'Hablar rápido quita fluidez y claridad.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'fc'], cnb: ['ef:3.1.2'], ambito: 'ser',
            prompt: 'Es normal sentir nervios antes de presentar. Mide tu pulso, luego haz **1 minuto de respiración lenta** (inhala 4, exhala 6) con los hombros sueltos, y vuelve a medir. ¡Ya puedes presentar!' },
          { seconds: 15, rounds: [
            { label: 'Antes de respirar (con nervios)' },
            { label: 'Después de respirar lento', exercise: { name: 'Respiración 4-6 de pie, con los pies firmes', icon: 'Wind', seconds: 60 } },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'ccss'], cnb: ['ccss:3.2.6', 'fc:1.2.3'], ambito: 'convivir', prompt: 'Durante tu guía, ¿qué harías?' },
          { scene: { icon: 'MessageCircle', text: 'En la estación **Memoria y paz**, un visitante dice en voz alta: "Eso pasó hace mucho, no hay que hablar de eso. Además, las costumbres de los pueblos mayas ya son cosa del pasado".' }, options: [
            { id: 'a', icon: 'VolumeX', text: 'Quedarme callado y pasar a otra estación', consequence: 'El comentario queda sin respuesta y otros visitantes se sienten incómodos.', values: ['Evasión'], constructive: false },
            { id: 'b', icon: 'HeartHandshake', text: 'Agradecer su opinión y explicar con calma que recordar honra a las víctimas y que las culturas mayas están vivas hoy', consequence: 'El visitante escucha y pregunta por el mural. Una abuela agradece que se hable con respeto.', values: ['Respeto', 'Valentía', 'Interculturalidad'], constructive: true },
            { id: 'c', icon: 'Megaphone', text: 'Burlarme del visitante frente a todos', consequence: 'El ambiente se pone tenso y el mensaje de paz se pierde.', values: ['Irrespeto'], constructive: false },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l2', 'l1'], cnb: ['l2:1.3.1', 'l1:2.1.6'], ambito: 'convivir',
            prompt: 'Escribe el **guion de tu guía de 2 minutos**: saludo con expresiones de cortesía y títulos de respeto (señora, don, profesora), un dato sorprendente, la actividad para el público y una pregunta de cierre.' },
          { minWords: 45, placeholder: 'Buenos días… Les doy la bienvenida… ¿Sabían que…? Los invito a… ¿Qué harían ustedes…? Muchas gracias…',
            model: 'Buenos días, señoras y señores, profesora Marta y don Julián. Les doy la bienvenida a la estación Números de mis abuelos. ¿Sabían que los mayas usaron el cero hace más de mil años? Los invito a formar su edad con granos de maíz y frijol, como en este numeral. Para terminar, ¿qué números de su vida les gustaría escribir en maya? Muchas gracias por su visita, pueden pasar a la siguiente estación.',
            rubric: ['Saluda con expresiones de cortesía y títulos de respeto', 'Incluye un dato correcto y sorprendente', 'Invita al público a una actividad', 'Cierra con una pregunta y agradece'] },
        ),
        cierre({ areas: ['l1', 'fc'], cnb: ['l1:2.1.6'] }, ['Guié la visita manteniendo la atención', 'Hablé con buen volumen, fluidez y entonación', 'Respondí con respeto a todas las personas'],
          ['Ensayaré mi guía frente a mi familia', 'Saludaré con cortesía a cada visitante', 'Escucharé las preguntas del público con paciencia']),
      ],
    }),

    /* ───────────────────────── Día 5: Evaluar y mejorar ───────────────────────── */
    lesson({
      id: 's09-d5-evaluar',
      title: 'Evaluar y mejorar',
      icon: 'ClipboardCheck',
      minutes: 15,
      day: 5,
      kind: 'proyecto',
      gancho: 'El museo terminó. ¿Cómo sabes si de verdad ayudó a tu comunidad?',
      objetivos: ['Analizar la encuesta de visitantes', 'Interpretar comentarios para mejorar', 'Repasar las ideas clave de la unidad', 'Escribir un plan de mejora y un compromiso comunitario'],
      resumen: [
        'Evaluar con datos (encuestas) y con comentarios permite saber qué funcionó y qué mejorar.',
        'La retroalimentación útil es concreta y respetuosa: "dos estrellas y un deseo".',
        'Un proyecto termina con un compromiso real con la comunidad, como sembrar árboles o cuidar un nacimiento.',
      ],
      media: {
        id: 's09-d5-arbol', kind: 'image', title: 'El Árbol de compromisos', aspect: '3:4',
        alt: 'Mural de un gran árbol de papel cuyas hojas son tarjetas con compromisos escritos por las familias.',
        brief: 'Ilustración vertical de un mural escolar: tronco de papel kraft y ramas extendidas; en lugar de hojas, decenas de tarjetas verdes con compromisos escritos a mano (texto ilegible o genérico, por ejemplo "Cuidaré el agua", "No quemaré basura", "Contaré la historia de mi abuela"). Al pie del árbol, niñas y niños riegan arbolitos reales en bolsas del vivero. Colores alegres, luz de tarde.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'l1'], cnb: ['pyd:2.3.1'], ambito: 'emprender', title: 'Dos estrellas y un deseo',
            prompt: 'Evaluar no es buscar culpables: es **aprender para mejorar**. Toca cada tarjeta.' },
          { icon: 'Star', body: 'Usen la técnica **"dos estrellas y un deseo"**: dos cosas que salieron bien y una que desean mejorar.', reveal: [
            { icon: 'BarChart3', front: 'Evaluar con datos', back: 'La encuesta de visitantes dice cuántas personas quedaron satisfechas.' },
            { icon: 'MessagesSquare', front: 'Evaluar con palabras', back: 'Los comentarios del libro de visitas dicen **por qué**.' },
            { icon: 'RefreshCw', front: 'Mejorar', back: 'Con esa información, el equipo decide qué cambiar la próxima vez.' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['ccss', 'mat', 'pyd'], cnb: ['ccss:5.3.1'], ambito: 'hacer',
            prompt: 'Supongamos que 34 visitantes respondieron "¿Qué te pareció el Museo vivo?": Excelente 18, Bueno 10, Regular 4, Por mejorar 2. Construye la gráfica.',
            explain: '28 de 34 visitantes (18 + 10) lo calificaron como excelente o bueno. Aun así, 6 personas dan pistas de qué mejorar.' },
          { categories: [
            { id: 'exc', label: 'Excelente', icon: 'Star', color: 'var(--c-ok)' },
            { id: 'bue', label: 'Bueno', icon: 'ThumbsUp', color: 'var(--c-quetzal)' },
            { id: 'reg', label: 'Regular', icon: 'Minus', color: 'var(--c-hint)' },
            { id: 'mej', label: 'Por mejorar', icon: 'Wrench', color: 'var(--area-cnt)' },
          ], data: [18, 10, 4, 2], max: 20, step: 2, unit: 'visitantes', source: 'Encuesta hipotética de visitantes' },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'pyd', 'fc'], cnb: ['l1:8.2.7', 'pyd:2.3.1'], ambito: 'emprender', prompt: 'Lee los comentarios del **libro de visitas** y responde.' },
          { genre: 'Comentarios', heading: 'Libro de visitas del Museo vivo', passage:
            '"Me encantó tocar el musgo y la corteza. No sabía que nuestro nacimiento dependía de ese bosque." — Doña Ofelia, abuela.\n\n"La estación de juegos fue la más divertida, pero había mucha gente y no todos pudimos jugar." — Kevin, 2.º primaria.\n\n"Gracias por hablar con respeto de la historia de nuestras comunidades. Faltó un mapa más grande." — Profesor Andrés.\n\n"Las letras de la estación de números eran muy pequeñas; no las pude leer desde lejos." — Don Mateo.',
            questions: [
              { q: '¿Qué aprendió doña Ofelia en el museo?', options: [
                { id: 'a', text: 'Que el nacimiento de su comunidad depende del bosque' },
                { id: 'b', text: 'A jugar trompo' },
                { id: 'c', text: 'A escribir números romanos' },
              ], correct: 'a' },
              { q: '¿Qué mejora sugieren a la vez Kevin y don Mateo?', options: [
                { id: 'a', text: 'Que más personas puedan participar y ver bien: turnos en los juegos y letra más grande' },
                { id: 'b', text: 'Que el museo sea más corto' },
                { id: 'c', text: 'Que no se invite a niños pequeños' },
              ], correct: 'a', why: 'Los dos comentarios hablan de accesibilidad: que todas las personas puedan participar.' },
              { q: '¿Cuál sería un buen "deseo" para el equipo de la estación de números?', options: [
                { id: 'a', text: 'Rotular con letra grande y buen contraste' },
                { id: 'b', text: 'Quitar los numerales mayas' },
                { id: 'c', text: 'No hacer caso a don Mateo' },
              ], correct: 'a' },
            ] },
        ),
        S.cards(
          { fase: 'construir', areas: ['cnt', 'mat', 'ccss', 'fc'], cnb: ['cnt:6.3.1', 'mat:4.1.6', 'ccss:6.5.5', 'fc:4.2.2', 'cnt:1.4.1', 'mat:1.1.8'], ambito: 'conocer',
            prompt: 'Antes de la **Semana de validación**, repasa las ideas clave de la unidad que presentaste en el museo. Intenta responder antes de voltear cada tarjeta.' },
          { cards: [
            { icon: 'Dna', front: '¿Qué guarda el núcleo de la célula?', back: 'El ADN, organizado en cromosomas; los genes son partes del ADN.' },
            { icon: 'Droplets', front: '¿Por qué reforestar protege el agua?', back: 'Las raíces ayudan a que la lluvia se infiltre y recargue los mantos acuíferos.' },
            { icon: 'Shell', front: '¿Cuánto vale cada nivel maya?', back: 'De abajo hacia arriba: ×1, ×20, ×400, ×8,000.' },
            { icon: 'Handshake', front: '¿Cuándo se firmó la paz en Guatemala?', back: 'El 29 de diciembre de 1996, con el Acuerdo de Paz Firme y Duradera.' },
            { icon: 'HeartHandshake', front: 'Cultura de paz vs. cultura de violencia', back: 'La paz usa diálogo, respeto y cooperación; la violencia usa fuerza, burla y venganza.' },
            { icon: 'Hexagon', front: '¿Cuánto suman los ángulos de un hexágono?', back: '720°: se divide en 4 triángulos de 180°.' },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['pyd', 'cnt', 'fc'], cnb: ['pyd:4.3.1', 'pyd:5.5.2', 'fc:3.2.1'], ambito: 'emprender',
            prompt: 'Escribe el **plan de mejora** de tu equipo con "dos estrellas y un deseo", y un **compromiso comunitario** concreto que continuará después del museo (qué, quiénes, cuándo).' },
          { minWords: 45, placeholder: 'Estrella 1… Estrella 2… Deseo… Nuestro compromiso comunitario es…',
            model: 'Estrella 1: los visitantes disfrutaron tocar las texturas del bosque. Estrella 2: explicamos con datos de dónde viene el agua. Deseo: la próxima vez haremos un mapa más grande y letras que se lean desde lejos. Nuestro compromiso comunitario es sembrar 30 arbolitos de aliso del vivero en la ladera del nacimiento, con apoyo del COCODE, el primer sábado de la temporada de lluvia, y regarlos por turnos.',
            rubric: ['Nombra dos logros concretos', 'Propone una mejora realista basada en los comentarios', 'Plantea un compromiso comunitario con qué, quiénes y cuándo', 'Muestra valoración del trabajo en equipo'] },
        ),
        cierre({ areas: ['pyd', 'fc'], cnb: ['pyd:4.3.1'] }, ['Analicé los resultados del museo con datos y comentarios', 'Propuse mejoras concretas', 'Me comprometí con una acción para mi comunidad'],
          ['Cumpliré el compromiso comunitario de mi equipo', 'Repasaré las tarjetas antes de la Semana de validación', 'Contaré en casa lo que aprendí del museo']),
      ],
    }),
  ],
});
