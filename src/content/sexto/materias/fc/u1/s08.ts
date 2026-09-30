/**
 * Formación Ciudadana · Unidad 1 · Semana 8 — Detectives de la verdad.
 * Progresión: ubicar en el mapa los departamentos y pueblos más afectados por la violencia del
 * conflicto armado interno, según la Comisión para el Esclarecimiento Histórico, y leer un mapa
 * temático → memoria y no repetición: por qué recordar, cómo honrar con respeto y propuestas
 * para una cultura de paz, con repaso espiral de la unidad.
 * Tema sensible: lenguaje respetuoso, sin detalles de violencia, con invitación a conversar.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. El mapa de la memoria ───────────────────────── */
  lesson({
    id: 's08-fc-1',
    title: 'Un mapa para no olvidar',
    icon: 'Map',
    minutes: 15,
    gancho: 'Los mapas no solo muestran ríos y carreteras. Algunos muestran lo que vivieron las personas. ¿Qué nos puede enseñar un mapa de la memoria?',
    objetivos: [
      'Explicar qué fue la Comisión para el Esclarecimiento Histórico y qué investigó',
      'Ubicar los departamentos y los pueblos más afectados por la violencia del conflicto armado interno',
      'Leer un mapa temático: título, leyenda, colores y conclusión',
    ],
    resumen: [
      'El conflicto armado interno duró de 1960 a 1996. Quien más sufrió fue la población civil, sobre todo las comunidades mayas del área rural.',
      'La Comisión para el Esclarecimiento Histórico (CEH) fue creada por los Acuerdos de Paz; en 1999 presentó su informe "Guatemala, memoria del silencio".',
      'Según la CEH, entre los departamentos más afectados están Quiché, Huehuetenango, Chimaltenango, Alta Verapaz y Baja Verapaz, en el norte, el noroccidente y el centro del país.',
      'La mayoría de las víctimas pertenecían a pueblos mayas, como el ixil, el k’iche’, el q’anjob’al, el chuj, el mam, el achi, el q’eqchi’ y el kaqchikel. La CEH señaló que la discriminación contra los pueblos indígenas influyó en esa violencia.',
    ],
    media: {
      id: 's08-fc-1-mapa-memoria', kind: 'diagram', title: 'Mapa de la memoria', aspect: '3:4',
      alt: 'Mapa de Guatemala por departamentos; Quiché, Huehuetenango, Chimaltenango, Alta Verapaz y Baja Verapaz resaltados en violeta con sus nombres.',
      brief: 'Mapa político de Guatemala con sus 22 departamentos en gris claro y nombres pequeños. Resaltar en un violeta respetuoso (no rojo) Quiché, Huehuetenango, Chimaltenango, Alta Verapaz y Baja Verapaz, con su nombre en letra más grande. Leyenda en la esquina: "Violeta: departamentos más afectados por la violencia del conflicto armado interno, según la Comisión para el Esclarecimiento Histórico (1999)". Rosa de los vientos. Pequeñas flores blancas junto a la leyenda como símbolo de memoria. Sin cifras, sin imágenes de violencia, sin armas.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'ser',
          prompt: 'Hoy hablaremos de un tema serio de nuestra historia, con respeto. Si algo te hace sentir triste, está bien: puedes conversarlo con tu familia o tu maestra. Para empezar: ¿para qué crees que sirve un **mapa de la memoria**?',
          explain: 'Un mapa de la memoria muestra **dónde** ocurrieron hechos importantes para que no se olviden. Ayuda a **honrar** a quienes sufrieron y a entender que la violencia no afectó a todo el país por igual.' },
        { options: [
          { id: 'a', text: 'Para saber dónde ocurrió algo importante y recordarlo con respeto', icon: 'MapPin' },
          { id: 'b', text: 'Para culpar a los que viven hoy en esos lugares', icon: 'Gavel', feedback: 'La memoria no busca culpar a comunidades; busca la verdad, honrar a las víctimas y que no se repita.' },
          { id: 'c', text: 'Para decorar la pared del aula', icon: 'Image', feedback: 'Un mapa de la memoria es mucho más que un adorno: nos enseña sobre nuestra historia.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'conocer', title: 'Buscar la verdad después de la guerra',
          prompt: 'Recuerda: el conflicto armado interno duró de **1960 a 1996**. Al firmar la paz, el país decidió **investigar la verdad**. Toca cada tarjeta.' },
        { icon: 'Search', body: 'Conocer la verdad no es para odiar a nadie: es para **honrar a las víctimas**, ayudar a sanar y que **nunca más** vuelva a pasar.', reveal: [
          { icon: 'Users', front: '¿Quiénes sufrieron más?', back: 'La **población civil**: personas que no participaban en la guerra. Sobre todo, **comunidades mayas del área rural**.' },
          { icon: 'Landmark', front: 'La CEH', back: 'La **Comisión para el Esclarecimiento Histórico** fue creada por los **Acuerdos de Paz**. Escuchó a miles de testigos en todo el país.' },
          { icon: 'BookOpen', front: 'Su informe', back: 'En **1999** presentó el informe **"Guatemala, memoria del silencio"**, que explica qué pasó, dónde y a quiénes afectó.' },
          { icon: 'Flower2', front: 'Un día para recordar', back: 'El **25 de febrero**, fecha en que se entregó el informe, es el **Día Nacional de la Dignidad de las Víctimas** del conflicto armado interno.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'conocer',
          prompt: 'Lee con respeto. Este texto recuerda a personas y comunidades que sufrieron.',
          media: { id: 's08-fc-1-regiones', kind: 'image', title: 'Norte, noroccidente y centro', aspect: '4:3',
            alt: 'Mapa sencillo de Guatemala dividido en regiones, con el norte, el noroccidente y el centro señalados con flechas y los cinco departamentos nombrados.',
            brief: 'Mapa simplificado de Guatemala con contorno de departamentos. Flechas suaves y etiquetas: "Noroccidente: Huehuetenango y Quiché", "Norte: Alta Verapaz y Baja Verapaz", "Centro: Chimaltenango". Montañas del altiplano dibujadas con líneas suaves. Colores pastel, rosa de los vientos, sin cifras ni imágenes de violencia.' } },
        { genre: 'Texto informativo', heading: 'La violencia no afectó a todo el país por igual', passage:
          'La Comisión para el Esclarecimiento Histórico estudió **en qué lugares** hubo más violencia durante el conflicto armado interno. Su informe muestra que la violencia no afectó a todo el país por igual.\n\nEntre los departamentos más afectados están **Quiché** y **Huehuetenango**, en el **noroccidente**; **Alta Verapaz** y **Baja Verapaz**, en el **norte**; y **Chimaltenango**, en el **centro** del país. Muchas de esas comunidades estaban en el área rural, en montañas y valles lejos de la capital.\n\nLa mayoría de las víctimas pertenecían a pueblos **mayas**, como el ixil, el k’iche’, el q’anjob’al, el chuj, el mam, el achi, el q’eqchi’ y el kaqchikel. La Comisión explicó que la **discriminación** contra los pueblos indígenas influyó en que la violencia contra ellos fuera tan grave.\n\nHoy, muchas comunidades construyen **monumentos, murales y museos comunitarios de la memoria**. Recordar honra a las víctimas, ayuda a sus familias a sanar y enseña que los conflictos deben resolverse con diálogo y respeto a los derechos humanos.',
          questions: [
            { q: '¿En qué región están Quiché y Huehuetenango?', options: [
              { id: 'a', text: 'En el noroccidente' },
              { id: 'b', text: 'En la costa sur' },
              { id: 'c', text: 'En el oriente' },
            ], correct: 'a' },
            { q: '¿A qué pueblos pertenecían la mayoría de las víctimas?', options: [
              { id: 'a', text: 'A pueblos mayas' },
              { id: 'b', text: 'A pueblos de otros continentes' },
              { id: 'c', text: 'El texto no lo dice' },
            ], correct: 'a' },
            { q: 'Según la Comisión, ¿qué influyó en que la violencia contra los pueblos indígenas fuera tan grave?', options: [
              { id: 'a', text: 'La discriminación contra los pueblos indígenas' },
              { id: 'b', text: 'Que vivían cerca de la capital' },
              { id: 'c', text: 'Que no tenían idiomas propios' },
            ], correct: 'a', why: 'Esto muestra por qué luchar contra la discriminación, como aprendiste en la semana 3, es también construir la paz.' },
          ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'],
          prompt: 'Según el texto que leíste, ¿cuáles están entre los **departamentos más afectados**? Marca **todos** los que aparecen en la lista.',
          hint: 'Son cinco. Vuelve a leer el segundo párrafo: dos del noroccidente, dos del norte y uno del centro.',
          explain: 'Quiché, Huehuetenango, Alta Verapaz, Baja Verapaz y Chimaltenango. Retalhuleu y Sacatepéquez no están en esa lista.' },
        { multiple: true, layout: 'grid', options: [
          { id: 'a', text: 'Quiché', icon: 'MapPin' },
          { id: 'b', text: 'Huehuetenango', icon: 'MapPin' },
          { id: 'c', text: 'Retalhuleu', icon: 'MapPin' },
          { id: 'd', text: 'Alta Verapaz', icon: 'MapPin' },
          { id: 'e', text: 'Baja Verapaz', icon: 'MapPin' },
          { id: 'f', text: 'Chimaltenango', icon: 'MapPin' },
          { id: 'g', text: 'Sacatepéquez', icon: 'MapPin' },
        ], correct: ['a', 'b', 'd', 'e', 'f'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'conocer', title: 'Los pueblos y sus territorios',
          prompt: 'Cada pueblo maya vive, sobre todo, en ciertos territorios. Así se relaciona **dónde** ocurrió la violencia con **a quiénes** afectó. Toca cada departamento.' },
        { icon: 'MapPin', body: 'Estos pueblos siguen vivos: hablan sus idiomas, cultivan, tejen y enseñan a sus hijos. La memoria también es **celebrar que siguen aquí**.', reveal: [
          { icon: 'Mountain', front: 'Quiché', back: 'Territorio de los pueblos **k’iche’** e **ixil** (el área ixil incluye Nebaj, Chajul y Cotzal).' },
          { icon: 'MountainSnow', front: 'Huehuetenango', back: 'Territorio de los pueblos **mam**, **q’anjob’al** y **chuj**, entre otros.' },
          { icon: 'Trees', front: 'Alta Verapaz', back: 'Territorio del pueblo **q’eqchi’**, uno de los más numerosos del país.' },
          { icon: 'Sun', front: 'Baja Verapaz', back: 'Territorio del pueblo **achi**, por ejemplo en Rabinal.' },
          { icon: 'Home', front: 'Chimaltenango', back: 'Territorio del pueblo **kaqchikel**.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: 'Une cada departamento con un pueblo maya que vive en él.',
          hint: 'Revisa las tarjetas: Rabinal está en Baja Verapaz; el área ixil está en Quiché.',
          explain: 'Ubicar a los pueblos en su territorio ayuda a entender el mapa de la memoria: la violencia se concentró en regiones donde viven comunidades mayas.' },
        { leftTitle: 'Departamento', rightTitle: 'Pueblo', pairs: [
          { id: 'p1', left: 'Baja Verapaz', leftIcon: 'MapPin', right: 'Achi' },
          { id: 'p2', left: 'Alta Verapaz', leftIcon: 'MapPin', right: 'Q’eqchi’' },
          { id: 'p3', left: 'Chimaltenango', leftIcon: 'MapPin', right: 'Kaqchikel' },
          { id: 'p4', left: 'Quiché', leftIcon: 'MapPin', right: 'Ixil' },
          { id: 'p5', left: 'Huehuetenango', leftIcon: 'MapPin', right: 'Chuj' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: leer un mapa temático',
          prompt: 'Un **mapa temático** muestra un solo tema con colores. Mira cómo se lee el mapa de la memoria.' },
        { icon: 'Map', problem: 'Tienes el mapa de la memoria de esta lección. ¿Qué dice y qué podemos concluir?',
          steps: [
            { text: '**Leo el título:** "Mapa de la memoria". Ya sé que el tema es la memoria del conflicto armado.' },
            { text: '**Leo la leyenda:** el violeta marca los departamentos más afectados según la CEH (1999).', why: 'La leyenda es la "llave" del mapa: sin ella, los colores no significan nada.' },
            { text: '**Busco los colores:** hay cinco departamentos en violeta: Quiché, Huehuetenango, Alta Verapaz, Baja Verapaz y Chimaltenango.' },
            { text: '**Miro la ubicación:** casi todos están en el **norte y el noroccidente**, en zonas de montaña donde viven muchas comunidades mayas.' },
          ],
          answer: 'Conclusión: la violencia del conflicto armado se concentró en el **norte, el noroccidente y el centro**, y afectó sobre todo a **pueblos mayas del área rural**.',
          tip: 'Título → leyenda → colores → ubicación → conclusión.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:5.2.1'],
          prompt: 'En el mapa de la memoria, Huehuetenango y Quiché están en violeta. ¿Qué conclusión **correcta** puedes sacar?',
          explain: 'El mapa muestra dónde fue más grave la violencia. No habla de las personas que viven hoy ni dice que en otros lugares no pasó nada.' },
        { options: [
          { id: 'a', text: 'Que estuvieron entre los departamentos más afectados por la violencia del conflicto armado' },
          { id: 'b', text: 'Que en el resto del país no pasó absolutamente nada', feedback: 'Cuidado: el mapa marca los más afectados, pero hubo víctimas en muchos otros lugares.' },
          { id: 'c', text: 'Que las personas que viven ahí hoy son culpables', feedback: 'Un mapa de la memoria nunca culpa a las comunidades; honra a las víctimas.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: 'Clasifica cada departamento más afectado según su **región**.',
          explain: 'Noroccidente: Huehuetenango y Quiché. Norte: Alta y Baja Verapaz. Centro: Chimaltenango.' },
        { buckets: [
          { id: 'noc', label: 'Noroccidente', icon: 'Mountain', color: 'var(--area-fc)' },
          { id: 'nor', label: 'Norte', icon: 'Trees', color: 'var(--c-ok)' },
          { id: 'cen', label: 'Centro', icon: 'MapPin', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'r1', text: 'Huehuetenango', bucket: 'noc' },
          { id: 'r2', text: 'Quiché', bucket: 'noc' },
          { id: 'r3', text: 'Alta Verapaz', bucket: 'nor' },
          { id: 'r4', text: 'Baja Verapaz', bucket: 'nor' },
          { id: 'r5', text: 'Chimaltenango', bucket: 'cen' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: 'Según la Comisión para el Esclarecimiento Histórico, ¿qué población fue la **más afectada** por la violencia del conflicto armado?' },
        { options: [
          { id: 'a', text: 'Comunidades mayas del área rural' },
          { id: 'b', text: 'Personas de otros países' },
          { id: 'c', text: 'Solo personas de la capital' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Quiché y Alta Verapaz están entre los departamentos más afectados según la CEH.', answer: true },
          { text: 'La leyenda de un mapa explica qué significan sus colores.', answer: true },
          { text: 'El pueblo achi vive sobre todo en Petén.', answer: false, why: 'El pueblo achi vive sobre todo en Baja Verapaz, por ejemplo en Rabinal.' },
          { text: 'La CEH presentó su informe "Guatemala, memoria del silencio" en 1999.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Memoria, dignidad y nunca más ───────────────────────── */
  lesson({
    id: 's08-fc-2',
    title: 'Memoria para construir la paz',
    icon: 'Flower2',
    minutes: 15,
    gancho: 'Tu abuela o tu abuelo guarda historias que no están en los libros. ¿Por qué será importante escucharlas?',
    objetivos: [
      'Explicar para qué sirve la memoria histórica: verdad, dignidad, sanar y no repetir',
      'Distinguir formas respetuosas de recordar de acciones que vuelven a herir',
      'Proponer una acción para que la violencia no se repita, usando lo aprendido en la unidad',
    ],
    resumen: [
      'La memoria histórica es recordar juntos lo que pasó para conocer la verdad, devolver la dignidad a las víctimas, ayudar a sanar y lograr que nunca más se repita.',
      'Se recuerda con respeto: escuchando a los mayores, visitando monumentos y museos comunitarios, participando en actos del 25 de febrero, pintando murales. Burlarse, negar lo que pasó o discriminar a las víctimas vuelve a herir.',
      'La no repetición se construye cada día con lo que aprendimos: respetar los derechos humanos, rechazar la discriminación, participar, elegir líderes democráticos y resolver los conflictos con diálogo.',
    ],
    media: {
      id: 's08-fc-2-mural', kind: 'image', title: 'El mural de la memoria', aspect: '16:9',
      alt: 'Jóvenes y personas mayores de una comunidad maya pintan juntos un mural con flores, maíz, un árbol con raíces y palomas.',
      brief: 'Ilustración cálida y esperanzadora. Pared de adobe en una aldea del altiplano. Una abuela con traje maya cuenta una historia mientras jóvenes (niñas y niños) pintan un mural: un gran árbol con raíces profundas, mazorcas de colores, flores blancas y palomas; en la parte de abajo, espacios con nombres ilegibles (no reales) escritos a mano. Luz de tarde. Sin armas, sin escenas de violencia, sin textos legibles excepto "Nunca más" pintado en el mural.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'ser',
          prompt: 'Una comunidad de Baja Verapaz pinta cada año un mural con los nombres de las personas que murieron en el conflicto armado. ¿Por qué crees que lo hacen?',
          explain: 'Lo hacen para **recordar** y **honrar** a sus seres queridos, para que las nuevas generaciones conozcan la **verdad** y para que **nunca más** se repita. A eso se le llama **memoria histórica**.' },
        { options: [
          { id: 'a', text: 'Para honrar a sus seres queridos y que no se olvide lo que pasó', icon: 'Flower2' },
          { id: 'b', text: 'Para que la gente tenga miedo', icon: 'EyeOff', feedback: 'La memoria no busca asustar, sino honrar, enseñar y prevenir.' },
          { id: 'c', text: 'Porque les sobra pintura', icon: 'Paintbrush', feedback: 'Un mural de la memoria tiene un sentido profundo para la comunidad.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'conocer', title: '¿Para qué sirve la memoria histórica?',
          prompt: 'La **memoria histórica** es recordar juntos lo que pasó en un país. Tiene **cuatro propósitos**. Toca cada tarjeta.' },
        { icon: 'Flower2', body: 'Recordar no es vivir en el pasado: es **cuidar el futuro**.', reveal: [
          { icon: 'Search', front: 'Verdad', back: 'Saber **qué pasó** realmente, con información investigada, como la del informe de la CEH.' },
          { icon: 'Crown', front: 'Dignidad', back: 'Reconocer que las víctimas eran **personas con nombre, familia y derechos**, no números.' },
          { icon: 'HeartPulse', front: 'Sanar', back: 'Que las familias puedan **hablar, llorar y ser escuchadas**; que su dolor sea reconocido.' },
          { icon: 'ShieldCheck', front: 'No repetición', back: 'Aprender para que **nunca más** se resuelvan los conflictos con violencia contra la población.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'ser', prompt: 'Lee este relato (los personajes son inventados, pero la situación es como la de muchas familias) y responde.' },
        { genre: 'Relato', heading: 'Las flores de doña Tomasa', passage:
          'Cada 25 de febrero, doña Tomasa se levanta temprano y corta flores blancas del patio. Su nieta Ixchel, de doce años, la acompaña al monumento de la aldea, donde están escritos muchos nombres. Entre ellos, el de su tío abuelo.\n\n—¿Por qué venimos todos los años, abuela? —pregunta Ixchel.\n\n—Porque durante mucho tiempo no se podía hablar de esto —responde doña Tomasa—. Tuvimos miedo y guardamos silencio. Ahora podemos decir sus nombres en voz alta. Cuando tú lo recuerdas, él no desaparece del todo.\n\nEsa tarde, Ixchel y sus compañeros de sexto entrevistan a varias abuelas y abuelos. Con sus relatos preparan un periódico mural para la escuela. En la última línea escriben: "Recordamos para que nunca más un conflicto se resuelva con violencia".',
          questions: [
            { q: '¿Qué hace doña Tomasa cada 25 de febrero?', options: [
              { id: 'a', text: 'Lleva flores al monumento de la aldea' },
              { id: 'b', text: 'Se queda en casa sin hablar con nadie' },
              { id: 'c', text: 'Va al mercado a vender flores' },
            ], correct: 'a' },
            { q: '¿Qué quiere decir la abuela con "cuando tú lo recuerdas, él no desaparece del todo"?', options: [
              { id: 'a', text: 'Que recordar a las víctimas les devuelve su dignidad y las mantiene presentes' },
              { id: 'b', text: 'Que su tío abuelo va a regresar' },
              { id: 'c', text: 'Que es mejor olvidar' },
            ], correct: 'a', why: 'Nombrar a las víctimas es una forma de dignificarlas.' },
            { q: '¿Qué propósito de la memoria cumple el periódico mural de sexto?', options: [
              { id: 'a', text: 'La no repetición: enseñar a otros para que no vuelva a pasar' },
              { id: 'b', text: 'Ganar un concurso de dibujo' },
              { id: 'c', text: 'Buscar culpables en la escuela' },
            ], correct: 'a' },
          ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: 'Clasifica: ¿es una forma **respetuosa** de recordar, o una acción que **vuelve a herir**?',
          hint: 'Pregúntate: ¿esta acción honra a las víctimas y a sus familias, o las ofende, las niega o las discrimina?',
          explain: 'Recordar con respeto honra a las víctimas. Negar, burlarse o discriminar vuelve a causar dolor.' },
        { buckets: [
          { id: 'res', label: 'Recuerda con respeto', icon: 'Flower2', color: 'var(--c-ok)' },
          { id: 'her', label: 'Vuelve a herir', icon: 'X', color: 'var(--c-bad)' },
        ], items: [
          { id: 'f1', text: 'Escuchar con atención el relato de una abuela', bucket: 'res' },
          { id: 'f2', text: 'Decir "eso nunca pasó, son inventos"', bucket: 'her', feedback: 'Negar lo que la CEH investigó y lo que las familias vivieron vuelve a herirlas.' },
          { id: 'f3', text: 'Visitar un museo comunitario de la memoria en silencio y con respeto', bucket: 'res' },
          { id: 'f4', text: 'Hacer bromas sobre el tema en el recreo', bucket: 'her' },
          { id: 'f5', text: 'Participar en el acto escolar del 25 de febrero', bucket: 'res' },
          { id: 'f6', text: 'Burlarse de un compañero por el idioma maya de su familia', bucket: 'her', feedback: 'La discriminación influyó en la violencia del pasado; repetirla hoy es lo contrario a la memoria.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'emprender', title: 'Ejemplo resuelto: una propuesta de no repetición',
          prompt: 'La memoria se convierte en **acción**. Mira cómo un grado armó su propuesta usando lo aprendido en la unidad.' },
        { icon: 'Lightbulb', problem: 'El grado de sexto quiere proponer **una acción** para que en su escuela la violencia no se repita.',
          steps: [
            { text: '**Parto de un problema real:** en el recreo hay apodos y burlas por el idioma o la ropa de algunos compañeros.', why: 'Aprendimos (semanas 3 y 6) que la discriminación y la violencia verbal son el inicio de problemas más grandes.' },
            { text: '**Propongo una acción concreta:** una "Semana de la memoria y el respeto": entrevistas a abuelos, un mural y un acuerdo de convivencia sin apodos.' },
            { text: '**Decido cómo participar todos:** se vota en asamblea de grado y se forman comisiones (entrevistas, mural, acuerdo).', why: 'Así se practica la participación democrática de la semana 5.' },
            { text: '**Digo cómo lo comprobaremos:** al final del mes, una encuesta anónima: ¿hay menos apodos?' },
          ],
          answer: 'Una buena propuesta de no repetición **parte de un problema real**, es **concreta**, es **participativa** y se puede **comprobar**.',
          tip: 'Problema real → acción concreta → participación → comprobación.' },
      ),
      S.match(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:5.2.1', 'fc:1.2.1', 'fc:3.1.1', 'fc:4.2.2'], ambito: 'conocer',
          prompt: 'Repaso de la unidad: cada aprendizaje es una herramienta para la **no repetición**. Une cada idea con su explicación.',
          explain: 'Todo lo que aprendiste en la unidad sirve para construir una paz con justicia.' },
        { leftTitle: 'Idea', rightTitle: 'Cómo ayuda a la no repetición', pairs: [
          { id: 'u1', left: 'Derechos humanos', leftIcon: 'Scale', right: 'Toda persona tiene dignidad y derechos que nadie puede quitarle' },
          { id: 'u2', left: 'Liderazgo democrático', leftIcon: 'Users', right: 'Quien dirige escucha, rinde cuentas y no decide solo' },
          { id: 'u3', left: 'Cultura de paz', leftIcon: 'HeartHandshake', right: 'Los conflictos se resuelven con diálogo y no con violencia' },
          { id: 'u4', left: 'Respeto a la diversidad', leftIcon: 'Globe', right: 'Ningún pueblo es superior; la discriminación se rechaza' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'emprender',
          prompt: 'Escribe tu **propuesta de no repetición** para tu escuela o comunidad. Usa el ejemplo: problema real, acción concreta, cómo participarán todos y cómo se comprobará.' },
        { minWords: 40, placeholder: 'En mi escuela he visto que… Propongo…',
          model: 'En mi escuela he visto que algunos se burlan de los compañeros que hablan q’eqchi’. Propongo que cada lunes un compañero enseñe un saludo en su idioma a todo el grado y que hagamos un cartel con palabras de los idiomas de nuestras familias. La comisión de cultura organizará los turnos. Después de un mes preguntaremos si hay menos burlas.',
          rubric: ['Nombré un problema real de violencia o discriminación', 'Propuse una acción concreta y posible', 'Expliqué cómo participarán todos', 'Dije cómo se comprobará si funciona'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: '¿Cuál es una forma **respetuosa** de mantener la memoria histórica?' },
        { options: [
          { id: 'a', text: 'Entrevistar con respeto a personas mayores y compartir sus relatos en un periódico mural' },
          { id: 'b', text: 'Decir que lo que pasó es un invento' },
          { id: 'c', text: 'Evitar hablar del tema para siempre' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'El 25 de febrero es el Día Nacional de la Dignidad de las Víctimas del conflicto armado interno.', answer: true },
          { text: 'Uno de los propósitos de la memoria histórica es que la violencia no se repita.', answer: true },
          { text: 'Recordar a las víctimas sirve para odiar a otras comunidades.', answer: false, why: 'La memoria busca verdad, dignidad, sanar y no repetición, nunca el odio.' },
          { text: 'Chimaltenango está entre los departamentos más afectados según la CEH.', answer: true },
        ] },
      ),
      cierre({ areas: ['fc'], cnb: ['fc:5.2.1'] },
        ['Ubico en el mapa los departamentos y pueblos más afectados por el conflicto armado', 'Explico para qué sirve la memoria histórica', 'Propongo acciones para que la violencia no se repita'],
        ['Escucharé con respeto las historias de las personas mayores de mi familia', 'Participaré en el acto del 25 de febrero de mi escuela', 'Rechazaré la discriminación cuando la vea']),
    ],
  }),
];
