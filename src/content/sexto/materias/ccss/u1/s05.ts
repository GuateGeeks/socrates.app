/**
 * Ciencias Sociales · Unidad 1 · Semana 5 — Investigar y conocer los primeros pueblos.
 * Progresión: herramientas para recoger y registrar información → cómo cambiaron las sociedades
 * cazadoras, recolectoras y agrícolas → las primeras civilizaciones de ríos: Mesopotamia y Egipto,
 * y un esquema de sus aportes.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Herramientas de investigación ───────────────────────── */
  lesson({
    id: 's05-ccss-1',
    title: 'Herramientas para investigar la sociedad',
    icon: 'ClipboardList',
    minutes: 15,
    gancho: 'Quieres saber cuántos estudiantes de tu escuela desayunan antes de venir. ¿Preguntarías uno por uno sin anotar nada? ¿Cómo lo harías para no olvidar ni confundirte?',
    objetivos: ['Conocer la encuesta, la entrevista, la observación y la ficha de lectura; elegir la herramienta adecuada según lo que se quiere averiguar; registrar y organizar datos en una tabla de conteo'],
    resumen: [
      'Encuesta: las mismas preguntas cerradas a muchas personas; sirve para contar y comparar.',
      'Entrevista: conversación con preguntas abiertas a una persona que sabe del tema; sirve para conocer experiencias y detalles.',
      'Observación con guía o lista de cotejo: mirar con atención y anotar lo que pasa. Ficha de lectura: anotar datos e ideas de libros, periódicos y otras fuentes, con su referencia.',
      'Todo lo recogido se registra por escrito (tablas, fichas, diario de campo) y se organiza para sacar conclusiones. Se pide permiso y se respeta la privacidad de las personas.',
    ],
    media: {
      id: 's05-ccss-1-kit', kind: 'image', title: 'El kit del investigador social', aspect: '4:3',
      alt: 'Mesa con un cuaderno de campo, una hoja de encuesta con casillas, una grabadora o celular, una lista de cotejo con marcas y fichas de lectura con referencias.',
      brief: 'Ilustración cenital de una mesa escolar con los materiales de un investigador de sexto grado: un cuaderno de campo abierto con notas y fecha, una hoja de encuesta con preguntas y casillas para marcar, un celular sobre la mesa como grabadora (sin marca), una lista de cotejo con marcas de verificación, tres fichas de lectura con título, autor y año, un lápiz y un borrador. Cada objeto con una etiqueta: Encuesta, Entrevista, Observación, Ficha de lectura, Diario de campo. Colores alegres.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:5.3.1'], ambito: 'conocer',
          prompt: 'Elige una herramienta de investigación según la información que necesitas.' },
        { icon: 'ClipboardList', body: 'La observación registra lo que ocurre; la entrevista recoge experiencias; la encuesta compara respuestas; y la revisión documental aporta antecedentes. Investigar accesibilidad exige consentimiento y escuchar a quienes usan los espacios.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:5.3.1'], ambito: 'conocer',
          prompt: 'Quieres saber **cuántos** de los 30 estudiantes de tu grado desayunan antes de venir. ¿Qué harías?',
          explain: 'Una **pregunta igual para todos** y una **tabla para anotar** permiten contar sin olvidar. Eso es, en pequeño, una **encuesta**. Hoy conocerás esta y otras herramientas.' },
        { options: [
          { id: 'a', text: 'Hacer la misma pregunta a todos y anotar cada respuesta en una tabla', icon: 'ClipboardList' },
          { id: 'b', text: 'Preguntar a dos amigos y suponer que todos son iguales', icon: 'Users', feedback: 'Dos personas no representan a 30. Tu conclusión podría estar equivocada.' },
          { id: 'c', text: 'Preguntar a todos, pero sin anotar: me acordaré', icon: 'Brain', feedback: 'Con 30 respuestas es muy fácil olvidar o confundirse. Los investigadores siempre registran.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:5.3.1'], ambito: 'conocer', title: 'Cuatro herramientas para recoger información',
          prompt: 'Los científicos sociales usan **herramientas** (también llamadas instrumentos) para recoger información de forma ordenada. Toca cada tarjeta.' },
        { icon: 'ClipboardList', body: 'La herramienta se elige según **la pregunta**: ¿quiero contar a muchas personas, conocer una historia a fondo, ver lo que pasa o saber lo que dicen los libros?', reveal: [
          { icon: 'ClipboardList', front: 'Encuesta (cuestionario)', back: 'Las **mismas preguntas**, casi siempre **cerradas** (sí/no, opciones), a **muchas personas**. Sirve para **contar** y **comparar**. Ejemplo: ¿cuántas familias tienen huerto?' },
          { icon: 'Mic', front: 'Entrevista', back: 'Conversación con **preguntas abiertas** a **una persona** que conoce el tema. Sirve para conocer **experiencias, historias y opiniones**. Ejemplo: preguntar a la abuela cómo era la aldea.' },
          { icon: 'Eye', front: 'Observación', back: '**Mirar con atención** y anotar lo que pasa, usando una **guía** o **lista de cotejo**. Ejemplo: contar cuántos carros pasan frente a la escuela en 10 minutos.' },
          { icon: 'BookOpen', front: 'Ficha de lectura', back: 'Anotar ideas y datos de **fuentes escritas** (libros, periódicos, sitios oficiales) con su **referencia**: autor, título y año.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:5.3.1'], prompt: 'Une cada necesidad de investigación con la herramienta más adecuada.',
          hint: 'Muchas personas y contar → encuesta. Una historia larga de una persona → entrevista. Ver lo que ocurre → observación. Lo que dicen los libros → ficha de lectura.',
          explain: 'Elegir bien la herramienta ahorra tiempo y da información confiable.' },
        { leftTitle: 'Quiero saber…', rightTitle: 'Herramienta', pairs: [
          { id: 'n1', left: 'Cuántas familias del barrio separan la basura', leftIcon: 'Recycle', right: 'Encuesta' },
          { id: 'n2', left: 'Cómo era la escuela cuando la fundaron, según el primer maestro', leftIcon: 'Mic', right: 'Entrevista' },
          { id: 'n3', left: 'Si los estudiantes cruzan por la pasarela o por la calle', leftIcon: 'Eye', right: 'Observación' },
          { id: 'n4', left: 'Qué dicen los libros sobre la fundación del municipio', leftIcon: 'BookOpen', right: 'Ficha de lectura' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:5.3.1', 'ccss:5.1.4'], ambito: 'convivir', title: 'Registrar con orden y con respeto',
          prompt: 'Recoger datos no basta: hay que **registrarlos** bien y tratar a las personas con **respeto**. Toca cada tarjeta.' },
        { icon: 'NotebookPen', body: 'Lo que no se anota, se olvida o se cambia. Un buen registro es la base de conclusiones confiables.', reveal: [
          { icon: 'Notebook', front: 'Diario de campo', back: 'Un cuaderno donde anotas **fecha, lugar**, lo que viste y oíste, y tus dudas.' },
          { icon: 'Table', front: 'Tabla de conteo', back: 'Una tabla con las opciones de respuesta y **palitos** o números para contar cada una. Luego se suma el total.' },
          { icon: 'Handshake', front: 'Pedir permiso', back: 'Antes de entrevistar o grabar, **explica para qué** es y pide permiso. Si alguien no quiere responder, se respeta.' },
          { icon: 'Lock', front: 'Cuidar la privacidad', back: 'No publiques nombres ni datos personales sin permiso. En una encuesta, puedes no pedir el nombre.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss', 'mat'], cnb: ['ccss:5.3.1'], ambito: 'hacer', title: 'Ejemplo resuelto: organizar una encuesta',
          prompt: 'Mira cómo el grado de Andrea organizó los datos de su encuesta.' },
        { icon: 'Table', problem: 'Preguntaron a 20 estudiantes: "¿Cómo llegas a la escuela?". Las respuestas anotadas fueron: a pie, a pie, bus, a pie, bicicleta, bus, a pie, a pie, moto, bus, a pie, a pie, bicicleta, a pie, bus, a pie, a pie, moto, a pie, bus. ¿Cómo se organizan y qué se concluye?',
          steps: [
            { text: 'Hago una tabla con cada opción y cuento: **a pie 11**, **bus 5**, **bicicleta 2**, **moto 2**.' },
            { text: 'Compruebo el total: 11 + 5 + 2 + 2 = **20**. Coincide con las personas encuestadas.', why: 'Si el total no coincide, me equivoqué al contar o al anotar.' },
            { text: 'Busco la respuesta más frecuente: **a pie** (11 de 20, más de la mitad).' },
          ],
          answer: 'Conclusión: la mayoría llega **a pie**. Por eso, una buena propuesta sería pedir un paso peatonal seguro frente a la escuela.',
          tip: 'Una conclusión siempre debe salir de los datos, no de lo que uno cree antes de investigar.' },
      ),
      S.number(
        { fase: 'aplicar', areas: ['ccss', 'mat'], cnb: ['ccss:5.3.1'], ambito: 'hacer',
          prompt: 'Otra encuesta en la escuela: "¿Tienes huerto en casa?". La tabla de conteo quedó así: **Sí: 13**, **No: 17**. ¿A cuántas personas se encuestó en total?',
          explain: '13 + 17 = 30 personas. Comprobar el total es parte de registrar bien los datos.' },
        { answer: 30, unit: 'personas', misconceptions: [{ value: 4, msg: 'Restaste. Para saber el total de encuestados hay que sumar todas las respuestas.' }] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:5.3.1'], ambito: 'conocer',
          prompt: 'Vas a entrevistar a don Tomás, el señor más anciano de la aldea, sobre cómo era el mercado cuando era niño. ¿Cuál es la **mejor** pregunta para una entrevista?',
          explain: 'En una entrevista conviene hacer **preguntas abiertas**, que invitan a contar historias. Las preguntas de sí/no son mejores para encuestas.' },
        { options: [
          { id: 'a', text: '¿Cómo era el mercado cuando usted era niño y qué se vendía?' },
          { id: 'b', text: '¿Había mercado? Sí o no.', feedback: 'Es una pregunta cerrada: don Tomás solo diría "sí" y perderías su historia.' },
          { id: 'c', text: '¿Verdad que antes todo era mejor?', feedback: 'Esa pregunta empuja a una respuesta. Un buen investigador no pone palabras en la boca del entrevistado.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.3.1'], prompt: 'Quieres saber **cuántas** familias de tu colonia reciclan. ¿Qué herramienta usas?' },
        { options: [
          { id: 'a', text: 'Una encuesta con la misma pregunta para muchas familias' },
          { id: 'b', text: 'Una entrevista larga a una sola vecina' },
          { id: 'c', text: 'Una ficha de lectura de un libro de otro país' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.3.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Antes de grabar una entrevista hay que pedir permiso.', answer: true },
          { text: 'En una ficha de lectura no importa anotar de qué libro salió la información.', answer: false, why: 'La referencia (autor, título, año) permite comprobar la información.' },
          { text: 'Una lista de cotejo sirve para registrar lo que observas.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Cazadores, recolectores y agricultores ───────────────────────── */
  lesson({
    id: 's05-ccss-2',
    title: 'De cazadores y recolectores a agricultores',
    icon: 'Wheat',
    minutes: 15,
    gancho: 'Hace miles de años no había milpas, ni aldeas, ni mercados. ¿Cómo conseguían su comida las primeras personas? ¿Qué cambió cuando alguien sembró la primera semilla?',
    objetivos: ['Describir la forma de vida de las sociedades cazadoras y recolectoras; explicar cómo la agricultura transformó la vida humana; ordenar la evolución de las formas de vida en Mesoamérica'],
    resumen: [
      'Durante la mayor parte de la historia, los seres humanos fueron cazadores y recolectores: nómadas, en grupos pequeños, con herramientas de piedra, hueso y madera, y el fuego.',
      'Con la agricultura, las personas se volvieron sedentarias: formaron aldeas, domesticaron plantas y animales, hicieron cerámica y guardaron excedentes.',
      'Los excedentes permitieron que algunas personas se dedicaran a otros oficios, que creciera la población y que surgieran el comercio, las jerarquías y, con el tiempo, las ciudades.',
      'En Mesoamérica, el maíz se domesticó a partir de una planta silvestre, el teocintle, hace unos 9,000 años. Junto con el frijol, la calabaza y el chile formó la milpa, base de la vida de los pueblos mayas.',
    ],
    media: {
      id: 's05-ccss-2-cambio', kind: 'animation', title: 'Del campamento a la aldea', aspect: '16:9', duration: 50,
      alt: 'Animación que muestra un grupo de cazadores-recolectores que se mueve con las estaciones y luego, con el paso del tiempo, una aldea con milpas, casas de bajareque y cerámica.',
      brief: 'Animación 2D de 50 s en dos partes. Parte 1: un grupo pequeño de cazadores y recolectores en un paisaje de Mesoamérica, con refugios temporales, fuego, herramientas de piedra; recogen frutos y se desplazan siguiendo a los animales (flechas de movimiento). Parte 2: un reloj de arena indica que pasan miles de años; aparece una aldea con casas de bajareque y techo de paja, milpas con maíz, frijol y calabaza, vasijas de cerámica y una troje con mazorcas guardadas. Contador en pantalla: "nómadas → sedentarios". Mostrar una mazorca pequeña de teocintle junto a una mazorca actual. Narración en español con subtítulos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:6.2.1'], ambito: 'conocer',
          prompt: 'Relaciona agricultura, permanencia y organización de las primeras aldeas.' },
        { icon: 'Wheat', body: 'La domesticación de plantas y animales permitió producir alimentos con mayor regularidad. Muchas comunidades se volvieron sedentarias, almacenaron excedentes y organizaron nuevas tareas.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.2.1'], ambito: 'conocer',
          prompt: 'Imagina que tu grupo vive solo de lo que caza y recolecta. Cuando se acaban los frutos y los animales se van a otro lugar, ¿qué tienen que hacer?',
          explain: '**Mudarse** a donde haya alimento. Por eso esas sociedades eran **nómadas**: no tenían un lugar fijo para vivir.' },
        { options: [
          { id: 'a', text: 'Moverse a otro lugar donde haya comida', icon: 'Footprints' },
          { id: 'b', text: 'Ir a comprar al mercado', icon: 'ShoppingBasket', feedback: '¡Todavía no existían los mercados! Aparecieron mucho después, con la agricultura y el comercio.' },
          { id: 'c', text: 'Esperar en el mismo lugar sin comer', icon: 'Clock', feedback: 'Sin agricultura, quedarse donde no hay alimento pone en peligro al grupo.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.2.1'], ambito: 'conocer', title: 'Las sociedades cazadoras y recolectoras',
          prompt: 'Durante cientos de miles de años, **todos** los seres humanos vivieron de cazar, pescar y recolectar. Las personas llegaron al continente americano hace miles de años y vivieron así mucho tiempo. Toca cada tarjeta.' },
        { icon: 'Footprints', body: 'Eran expertos en conocer la naturaleza: sabían qué plantas se comen, cuáles curan y cuándo migran los animales.', reveal: [
          { icon: 'Footprints', front: 'Nómadas', back: 'Se desplazaban según las estaciones y los animales. Vivían en **cuevas** o refugios temporales.' },
          { icon: 'Users', front: 'Grupos pequeños', back: 'Bandas de unas pocas familias. Compartían el alimento y las decisiones se tomaban en grupo.' },
          { icon: 'Hammer', front: 'Herramientas', back: 'De **piedra** tallada, hueso y madera: puntas de lanza, raspadores, cuchillos de obsidiana.' },
          { icon: 'Flame', front: 'El fuego', back: 'Uno de sus grandes logros: para cocinar, calentarse, protegerse de animales y reunirse.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.2.1'], ambito: 'conocer', title: 'La gran revolución: la agricultura',
          prompt: 'Poco a poco, algunos grupos notaron que las semillas que caían al suelo germinaban. Empezaron a **sembrar** y a **domesticar** plantas y animales. Esto cambió la vida humana para siempre. Toca cada tarjeta.',
          media: { id: 's05-ccss-2-teocintle', kind: 'image', title: 'Del teocintle al maíz', aspect: '16:9',
            alt: 'Comparación en fila: una espiga pequeña de teocintle con pocos granos duros, mazorcas intermedias y una mazorca de maíz actual grande.',
            brief: 'Ilustración científica en fila horizontal, de izquierda a derecha: una espiga de teocintle (planta silvestre, pequeña, de unos 5 cm, con pocos granos duros), dos mazorcas intermedias que muestran la selección hecha por los agricultores a lo largo de miles de años, y una mazorca de maíz actual con granos de colores (amarillo, blanco, morado, rojo). Flecha de tiempo debajo: "hace unos 9,000 años → hoy". Fondo claro, estilo de lámina educativa.' } },
        { icon: 'Sprout', body: 'La agricultura surgió en **varios lugares del mundo** de forma independiente: en el **Cercano Oriente** (trigo y cebada), en **China** (arroz y mijo) y en **Mesoamérica** (maíz, frijol, calabaza, chile).', reveal: [
          { icon: 'Home', front: 'Sedentarismo', back: 'Para cuidar sus cultivos, las personas se quedaron en un lugar: formaron **aldeas** con casas permanentes.' },
          { icon: 'Package', front: 'Excedentes', back: 'Si se cosecha más de lo que se come, se **guarda**. Aparecieron la **cerámica** para almacenar y cocinar, y las trojes.' },
          { icon: 'Hammer', front: 'Nuevos oficios', back: 'Como no todos tenían que buscar comida, surgieron alfareros, tejedores, constructores, comerciantes y sacerdotes.' },
          { icon: 'Crown', front: 'Organización y poder', back: 'Creció la población. Aparecieron **jefes** y **jerarquías**, y con el tiempo **ciudades** y estados.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.2.1'], prompt: 'Clasifica cada característica según el tipo de sociedad.',
          hint: 'Si se mueve de un lugar a otro, es cazadora-recolectora. Si siembra y se queda, es agrícola.',
          explain: 'La gran diferencia es producir el alimento (agricultura) o tomarlo de la naturaleza (caza y recolección).' },
        { buckets: [
          { id: 'cr', label: 'Cazadora-recolectora', icon: 'Footprints', color: 'var(--c-maiz-strong)' },
          { id: 'ag', label: 'Agrícola', icon: 'Wheat', color: 'var(--c-ok)' },
        ], items: [
          { id: 'c1', text: 'Vive en refugios temporales y cuevas', bucket: 'cr' },
          { id: 'c2', text: 'Construye aldeas permanentes', bucket: 'ag' },
          { id: 'c3', text: 'Sigue a los animales según la estación', bucket: 'cr' },
          { id: 'c4', text: 'Guarda granos en vasijas de cerámica', bucket: 'ag' },
          { id: 'c5', text: 'Grupos pequeños de pocas familias', bucket: 'cr' },
          { id: 'c6', text: 'Tiene artesanos y comerciantes especializados', bucket: 'ag', feedback: 'Los excedentes de la cosecha permitieron que algunas personas se dedicaran a otros oficios.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['ccss', 'l1'], cnb: ['ccss:6.2.1'], ambito: 'conocer', prompt: 'Lee y responde.' },
        { genre: 'Texto informativo', heading: 'La milpa: un regalo de Mesoamérica', passage:
          'Hace unos 9,000 años, en el sur de lo que hoy es México, los primeros agricultores empezaron a cultivar una planta silvestre llamada **teocintle**. Sus espigas eran pequeñas y tenían pocos granos. Generación tras generación, guardaron para sembrar las semillas de las plantas más grandes. Así, muy poco a poco, el teocintle se transformó en el **maíz**.\n\nLos pueblos de Mesoamérica sembraron el maíz junto con el **frijol**, la **calabaza** y el **chile**. A esta forma de cultivo se le llama **milpa**. Las plantas se ayudan entre sí: el frijol se enreda en la caña del maíz y ayuda a nutrir el suelo, y las hojas grandes de la calabaza guardan la humedad.\n\nCon la milpa, las aldeas mayas tuvieron alimento suficiente para crecer. Hoy la milpa sigue viva en muchas comunidades de Guatemala: es alimento, trabajo, conocimiento y cultura.',
          questions: [
            { q: '¿De qué planta silvestre viene el maíz?', options: [
              { id: 'a', text: 'Del teocintle' },
              { id: 'b', text: 'Del trigo' },
              { id: 'c', text: 'Del arroz' },
            ], correct: 'a' },
            { q: '¿Cómo lograron los agricultores que el maíz tuviera mazorcas grandes?', options: [
              { id: 'a', text: 'Guardando para sembrar las semillas de las plantas más grandes, durante muchas generaciones' },
              { id: 'b', text: 'En un solo año, con abono' },
              { id: 'c', text: 'Trayendo semillas de Europa' },
            ], correct: 'a' },
            { q: '¿Por qué la milpa fue importante para el crecimiento de las aldeas?', options: [
              { id: 'a', text: 'Porque dio alimento suficiente y variado para que la población creciera' },
              { id: 'b', text: 'Porque obligó a la gente a ser nómada' },
              { id: 'c', text: 'Porque solo se usaba para adornar' },
            ], correct: 'a', why: 'Los excedentes agrícolas permiten que la población crezca y se organice.' },
          ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:6.2.1'], ambito: 'conocer',
          prompt: 'Ordena cómo evolucionó la forma de vida en Mesoamérica.',
          explain: 'Primero se cazaba y recolectaba; luego se domesticaron plantas; después surgieron aldeas agrícolas y, mucho más tarde, las grandes ciudades mayas como Tikal.' },
        { items: [
          { id: 'e1', text: 'Grupos nómadas cazan y recolectan' },
          { id: 'e2', text: 'Se empieza a cultivar el teocintle y a domesticar plantas' },
          { id: 'e3', text: 'Surgen aldeas agrícolas con milpas y cerámica' },
          { id: 'e4', text: 'Crecen ciudades con templos, gobernantes y comercio, como Tikal' },
        ], labels: { start: 'Más antiguo', end: 'Más reciente' } },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:6.2.1'], ambito: 'conocer',
          prompt: 'Un grupo de arqueólogos encuentra en un sitio: restos de casas permanentes, muchas vasijas grandes de cerámica y granos de maíz carbonizados. ¿Qué tipo de sociedad vivió allí?',
          explain: 'Casas permanentes (sedentarismo), vasijas para guardar (excedentes) y maíz (cultivo): son pistas de una **sociedad agrícola**.' },
        { options: [
          { id: 'a', text: 'Una sociedad agrícola' },
          { id: 'b', text: 'Una sociedad cazadora-recolectora nómada', feedback: 'Los nómadas no construían casas permanentes ni necesitaban tantas vasijas para almacenar.' },
          { id: 'c', text: 'No se puede saber nada', feedback: 'Los restos materiales son pistas: con ellos la arqueología reconstruye cómo vivía la gente.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.2.1'], prompt: '¿Qué cambio importante produjo la agricultura en la forma de vida?' },
        { options: [
          { id: 'a', text: 'Las personas se volvieron sedentarias y formaron aldeas' },
          { id: 'b', text: 'Las personas dejaron de usar herramientas' },
          { id: 'c', text: 'Las personas se volvieron más nómadas' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Los cazadores y recolectores vivían en grupos pequeños.', answer: true },
          { text: 'La milpa combina maíz, frijol, calabaza y chile.', answer: true },
          { text: 'Los excedentes de la agricultura hicieron que nadie tuviera oficios distintos.', answer: false, why: 'Al contrario: permitieron que surgieran alfareros, tejedores, comerciantes y otros oficios.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Mesopotamia y Egipto ───────────────────────── */
  lesson({
    id: 's05-ccss-3',
    title: 'Mesopotamia y Egipto: civilizaciones de ríos',
    icon: 'Sun',
    minutes: 15,
    gancho: 'Si hoy sabes que una hora tiene 60 minutos y que el año tiene 365 días, es gracias a pueblos que vivieron hace más de 5,000 años junto a unos ríos. ¿Cuáles?',
    objetivos: ['Ubicar Mesopotamia y Egipto y explicar la importancia de sus ríos; identificar sus avances tecnológicos y agrícolas; organizar sus aportes en un esquema político, económico y cultural'],
    resumen: [
      'Mesopotamia ("tierra entre ríos") se desarrolló entre los ríos Tigris y Éufrates, en el actual Irak. Egipto creció a lo largo del río Nilo, en el norte de África.',
      'Ambas controlaron el agua con canales y diques para regar sus cultivos de trigo y cebada. Las crecidas del Nilo dejaban cada año un limo fértil sobre los campos.',
      'Aportes de Mesopotamia: la escritura cuneiforme, la rueda, el arado, el sistema de base 60 (60 minutos, 60 segundos) y el Código de Hammurabi. Aportes de Egipto: calendario de 365 días, jeroglíficos y papiro, pirámides, avances en medicina y geometría.',
      'Eran gobiernos autoritarios: reyes y faraones concentraban el poder y se decían elegidos por los dioses. Un esquema ordena los aportes en políticos, económicos y culturales.',
    ],
    media: {
      id: 's05-ccss-3-mapa', kind: 'diagram', title: 'El Cercano Oriente antiguo', aspect: '4:3',
      alt: 'Mapa del Cercano Oriente con el río Nilo en Egipto y los ríos Tigris y Éufrates en Mesopotamia, con franjas verdes fértiles a su alrededor rodeadas de desierto.',
      brief: 'Mapa del Cercano Oriente antiguo en tonos arena. El río Nilo en azul con su delta, rodeado de una franja verde angosta, rotulado "Egipto"; los ríos Tigris y Éufrates en azul con la zona verde entre ellos, rotulada "Mesopotamia"; una curva verde que las une rotulada "Media Luna Fértil". Rotular también el mar Mediterráneo, el mar Rojo y el golfo Pérsico. Íconos pequeños: una pirámide en Egipto y un zigurat en Mesopotamia. Escala aproximada y rosa de los vientos. Sin fronteras modernas; nota: "Mesopotamia está en el actual Irak".',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:6.3.1'], ambito: 'conocer',
          prompt: 'Ubica las civilizaciones fluviales y relaciona el agua con su desarrollo.' },
        { icon: 'Landmark', body: 'Mesopotamia se desarrolló entre los ríos Tigris y Éufrates; Egipto, junto al Nilo. El riego favoreció la agricultura y también requirió organización colectiva.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.3.1'], ambito: 'conocer',
          prompt: 'Mira el mapa: alrededor de los ríos hay franjas verdes y, más allá, **desierto**. ¿Por qué crees que las primeras grandes civilizaciones crecieron junto a ríos?',
          explain: 'El río daba **agua para beber y regar**, **suelo fértil**, peces y un **camino** para los barcos. Sin el Nilo, Egipto sería casi todo desierto.' },
        { options: [
          { id: 'a', text: 'Porque el río daba agua para los cultivos, suelo fértil y un camino para transportarse', icon: 'Waves' },
          { id: 'b', text: 'Porque en el desierto llueve mucho', icon: 'CloudRain', feedback: 'En el desierto casi no llueve: por eso el agua del río era tan valiosa.' },
          { id: 'c', text: 'Porque los ríos protegían del frío', icon: 'Snowflake', feedback: 'Es una región calurosa. El valor del río estaba en el agua y el suelo fértil.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.3.1'], ambito: 'conocer', title: 'Mesopotamia: la tierra entre ríos',
          prompt: 'Hace más de 5,000 años, en la llanura entre los ríos **Tigris** y **Éufrates** (hoy Irak), los **sumerios** fundaron algunas de las primeras ciudades del mundo. Toca cada tarjeta.' },
        { icon: 'Waves', body: 'Los ríos se desbordaban de forma impredecible. Para aprovecharlos, construyeron **canales de riego** y **diques**: una gran obra de ingeniería y de organización.', reveal: [
          { icon: 'ScrollText', front: 'Escritura cuneiforme', back: 'Marcas en forma de cuña sobre **tablillas de arcilla**, hacia el año 3200 a. C. Al principio servía para llevar cuentas de granos y animales.' },
          { icon: 'Circle', front: 'La rueda y el arado', back: 'La **rueda** sirvió para alfareros y carros. El **arado** jalado por bueyes permitió cultivar más tierra.' },
          { icon: 'Clock', front: 'Base 60', back: 'Contaban en grupos de **60**. De ellos heredamos que una hora tenga 60 minutos y un círculo 360°.' },
          { icon: 'Gavel', front: 'Código de Hammurabi', back: 'Uno de los primeros conjuntos de **leyes escritas**, del rey Hammurabi de Babilonia (hacia 1750 a. C.). Las leyes quedaron talladas en piedra para que todos las conocieran.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.3.1'], ambito: 'conocer', title: 'Egipto: el regalo del Nilo',
          prompt: 'A lo largo del **río Nilo**, en el norte de África, se formó el reino de Egipto, gobernado por los **faraones**. Toca cada tarjeta.',
          media: { id: 's05-ccss-3-nilo', kind: 'animation', title: 'Las crecidas del Nilo', aspect: '16:9', duration: 40,
            alt: 'Animación del ciclo del Nilo: el río crece, cubre los campos, baja dejando lodo oscuro y los campesinos siembran y cosechan.',
            brief: 'Animación 2D de 40 s en un corte lateral del valle del Nilo. (1) Inundación: el río crece y cubre los campos. (2) El agua baja y deja una capa oscura de limo fértil. (3) Campesinos egipcios siembran trigo y cebada y usan un shaduf (palanca con cubeta) para sacar agua a los canales. (4) Cosecha y graneros llenos. Un calendario circular marca las tres estaciones egipcias: inundación, siembra y cosecha. Narración en español con subtítulos. Colores ocre, verde y azul.' } },
        { icon: 'Sun', body: 'Por las crecidas, los egipcios necesitaban saber **cuándo** llegaría el agua. Observando el cielo crearon un **calendario de 365 días**.', reveal: [
          { icon: 'Waves', front: 'Las crecidas', back: 'Cada año el Nilo se desbordaba y dejaba **limo**, un lodo muy fértil. Después sembraban trigo, cebada y lino.' },
          { icon: 'Triangle', front: 'Pirámides y geometría', back: 'Construyeron **pirámides** como tumbas de los faraones. Usaron geometría para medir terrenos después de cada crecida.' },
          { icon: 'Feather', front: 'Jeroglíficos y papiro', back: 'Escribían con **jeroglíficos** (dibujos y signos) sobre **papiro**, un papel hecho con una planta del río.' },
          { icon: 'Stethoscope', front: 'Medicina', back: 'Conocían remedios con plantas, sabían tratar fracturas y estudiaron el cuerpo humano.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.3.1'], prompt: '¿De qué civilización es cada aporte?',
          hint: 'Mesopotamia: arcilla, rueda, base 60, Hammurabi. Egipto: Nilo, papiro, pirámides, 365 días.',
          explain: 'Las dos civilizaciones inventaron escrituras diferentes: cuneiforme (Mesopotamia) y jeroglífica (Egipto).' },
        { buckets: [
          { id: 'mes', label: 'Mesopotamia', icon: 'Waves', color: 'var(--area-ccss)' },
          { id: 'egi', label: 'Egipto', icon: 'Triangle', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'm1', text: 'Escritura cuneiforme en arcilla', bucket: 'mes' },
          { id: 'm2', text: 'Calendario de 365 días', bucket: 'egi' },
          { id: 'm3', text: 'Código de Hammurabi', bucket: 'mes' },
          { id: 'm4', text: 'Pirámides como tumbas de reyes', bucket: 'egi' },
          { id: 'm5', text: 'Sistema de base 60', bucket: 'mes' },
          { id: 'm6', text: 'Papiro para escribir', bucket: 'egi' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.3.5', 'ccss:6.3.1'], ambito: 'hacer', title: 'Cómo hacer un esquema de aportes',
          prompt: 'Un **esquema** organiza la información en grupos para verla de un vistazo. Para las civilizaciones se usan tres ramas. Toca cada tarjeta.' },
        { icon: 'Network', body: 'Pregúntate de cada aporte: ¿tiene que ver con **quién manda y las leyes**, con **producir y comerciar**, o con **saberes, arte y creencias**?', reveal: [
          { icon: 'Crown', front: 'Político', back: 'Gobierno y leyes. En ambas civilizaciones el poder era **autoritario**: el rey o el faraón concentraba el poder y se decía elegido por los dioses; el pueblo no elegía a sus gobernantes. Aporte: **leyes escritas** (Hammurabi).' },
          { icon: 'Coins', front: 'Económico', back: 'Producción y comercio: **canales de riego**, **arado**, **rueda**, agricultura de trigo y cebada, comercio por ríos y caravanas.' },
          { icon: 'BookOpen', front: 'Cultural', back: 'Saberes, arte y creencias: **escritura**, **calendario**, matemáticas, **medicina**, astronomía, pirámides y zigurats.' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:6.3.5'], ambito: 'hacer', prompt: 'Completa el **esquema**: ¿cada aporte es político, económico o cultural?',
          explain: 'Un mismo invento puede tocar varias ramas (la escritura también servía para cobrar impuestos), pero en el esquema lo ponemos donde más aporta.' },
        { buckets: [
          { id: 'pol', label: 'Político', icon: 'Crown', color: 'var(--area-ccss)' },
          { id: 'eco', label: 'Económico', icon: 'Coins', color: 'var(--c-maiz-strong)' },
          { id: 'cul', label: 'Cultural', icon: 'BookOpen', color: 'var(--c-ok)' },
        ], items: [
          { id: 'q1', text: 'Leyes escritas del Código de Hammurabi', bucket: 'pol' },
          { id: 'q2', text: 'Canales de riego para los cultivos', bucket: 'eco' },
          { id: 'q3', text: 'Calendario de 365 días', bucket: 'cul' },
          { id: 'q4', text: 'Faraón con poder absoluto', bucket: 'pol' },
          { id: 'q5', text: 'El arado jalado por bueyes', bucket: 'eco' },
          { id: 'q6', text: 'Escritura jeroglífica', bucket: 'cul' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:6.3.1'], ambito: 'conocer',
          prompt: 'Si hoy miras un reloj y ves que una hora tiene **60 minutos**, ¿qué civilización antigua estás recordando sin saberlo?',
          explain: 'El sistema de base 60 de **Mesopotamia** sigue vivo en la forma en que medimos el tiempo y los ángulos.' },
        { options: [
          { id: 'a', text: 'Mesopotamia' },
          { id: 'b', text: 'Egipto', feedback: 'Egipto nos dejó el calendario de 365 días. Los 60 minutos vienen de Mesopotamia.' },
          { id: 'c', text: 'Roma', feedback: 'Los romanos usaron otros números; la base 60 es de Mesopotamia.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.3.1'], prompt: '¿Por qué las crecidas del Nilo eran importantes para la agricultura egipcia?' },
        { options: [
          { id: 'a', text: 'Porque dejaban un limo fértil sobre los campos' },
          { id: 'b', text: 'Porque destruían todos los cultivos cada año' },
          { id: 'c', text: 'Porque llevaban arena del desierto a los campos' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.3.1', 'ccss:6.3.5'], prompt: 'Une cada civilización o aporte con su descripción.' },
        { pairs: [
          { id: 'x1', left: 'Mesopotamia', right: 'Entre los ríos Tigris y Éufrates' },
          { id: 'x2', left: 'Egipto', right: 'A lo largo del río Nilo' },
          { id: 'x3', left: 'Código de Hammurabi', right: 'Aporte político: leyes escritas' },
          { id: 'x4', left: 'Canales de riego', right: 'Aporte económico: más cosechas' },
        ] },
      ),
      cierre({ areas: ['ccss'], cnb: [] }, ['Elijo la herramienta adecuada para investigar', 'Explico cómo la agricultura cambió la vida humana', 'Organizo en un esquema los aportes de Mesopotamia y Egipto'],
        ['Entrevistaré a una persona mayor sobre cómo se cultivaba la milpa antes', 'Buscaré en casa un objeto que use una idea de Mesopotamia o Egipto (reloj, calendario, rueda)']),
    ],
  }),
];
