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
      brief: 'Mapa político de Guatemala con sus 22 departamentos en gris claro y nombres pequeños. Resaltar en un violeta respetuoso (no rojo) Quiché, Huehuetenango, Chimaltenango, Alta Verapaz y Baja Verapaz, con su nombre en letra más grande. Leyenda: "Departamentos incluidos en esta selección didáctica a partir de Guatemala: memoria del silencio, CEH, 1999. Un mismo color no establece un orden ni una clasificación entre ellos". Rosa de los vientos. Pequeñas flores blancas junto a la leyenda como símbolo de memoria. Sin cifras, imágenes de violencia ni armas. Target: public/media/s08-fc-1-mapa-memoria.svg. Accesibilidad: formato final 1600×900 px, contraste alto, patrón además del color y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'ser', title: 'Leer un mapa atribuido a la CEH', prompt: 'Lee el límite de la leyenda antes de interpretar el mapa.' },
        { icon: 'Map', body: 'El paquete ubica departamentos y pueblos documentados por la **CEH**. El color ayuda a localizar y no clasifica cuánto sufrió cada comunidad.' },
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
            brief: 'Mapa simplificado de Guatemala con contorno de departamentos. Flechas suaves y etiquetas: "Noroccidente: Huehuetenango y Quiché", "Norte: Alta Verapaz y Baja Verapaz", "Centro: Chimaltenango". Montañas del altiplano dibujadas con líneas suaves. Colores pastel, rosa de los vientos, sin cifras ni imágenes de violencia. Target: public/media/s08-fc-1-regiones.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.' } },
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
            { text: '**Leo la leyenda:** el violeta identifica una selección didáctica basada en el informe de la CEH (1999); no ordena ni clasifica los departamentos entre sí.', why: 'La leyenda es la "llave" del mapa y también declara el límite de lo que el color permite concluir.' },
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
    title: 'Pueblos y departamentos en el mapa de la CEH',
    icon: 'MapPinned',
    minutes: 15,
    gancho: '¿Cómo se localiza información histórica sin convertir un color del mapa en una competencia de sufrimiento?',
    objetivos: [
      'Localizar pueblos y departamentos afectados por la violencia usando un paquete atribuido a la CEH',
    ],
    resumen: [
      'El paquete didáctico atribuye sus datos a la Comisión para el Esclarecimiento Histórico (CEH) y localiza departamentos y pueblos documentados.',
      'Quiché, Huehuetenango, Chimaltenango, Alta Verapaz y Baja Verapaz aparecen en la ficha; también pueblos ixil, k’iche’, q’anjob’al, chuj, mam, achi, q’eqchi’ y kaqchikel.',
      'Los colores solo ayudan a localizar categorías de la leyenda. No ordenan gravedad, sufrimiento ni cantidad de víctimas.',
    ],
    media: {
      id: 's08-fc-2-mural', kind: 'image', title: 'Paquete cartográfico atribuido a la CEH', aspect: '16:9',
      alt: 'Mapa didáctico de Guatemala junto a tarjetas de departamentos y pueblos mayas, con fuente CEH y una leyenda que aclara que el color no mide sufrimiento.',
      brief: 'Imagen didáctica 1600×900, trauma-aware y sin escenas de violencia. Mostrar un mapa esquemático de Guatemala y tarjetas separadas: Quiché–ixil/k’iche’, Huehuetenango–q’anjob’al/chuj/mam, Baja Verapaz–achi, Alta Verapaz–q’eqchi’, Chimaltenango–kaqchikel. Encabezado: “Síntesis didáctica basada en CEH, Guatemala: memoria del silencio (1999)”. Leyenda visible: “El color localiza; no mide gravedad, sufrimiento ni número de víctimas”. Alto contraste y patrones además del color. Target: public/media/s08-fc-2-mural.jpg. Accesibilidad: formato final 1600×900 px, patrones distinguibles, texto grande y descripción alternativa equivalente.',
    },
    steps: [
      S.reflect(
        { fase: 'explorar', areas: ['fc'], cnb: [], ambito: 'ser', prompt: 'Antes de abrir el paquete CEH, elige una disposición respetuosa para leer memoria histórica.' },
        { statements: ['Puedo pausar si el tema me incomoda', 'Localizar no significa comparar sufrimiento'], commitments: ['Usaré nombres, fuente y leyenda con respeto'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'conocer', title: 'Paquete suministrado CEH', prompt: 'Lee los pueblos y departamentos incluidos en la fuente.' },
        { icon: 'Map', body: '**Departamentos:** Quiché, Huehuetenango, Chimaltenango, Alta Verapaz y Baja Verapaz. **Pueblos:** ixil, k’iche’, q’anjob’al, chuj, mam, achi, q’eqchi’ y kaqchikel.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'conocer', title: 'Cómo leer la leyenda',
          prompt: 'Localiza con nombre, región y fuente; no conviertas el color en una jerarquía.' },
        { icon: 'Palette', body: 'El color y el patrón distinguen fichas del mapa. **No representan ranking, gravedad, severidad, sufrimiento ni cantidad de víctimas.**' },
      ),
      S.match(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: 'Guía: localiza cada pueblo en el departamento indicado por el paquete CEH.',
          hint: 'Usa solo las tres tarjetas visibles del paquete.', explain: 'El paquete ubica ixil en Quiché, achi en Baja Verapaz y q’eqchi’ en Alta Verapaz; no compara sufrimiento.' },
        { leftTitle: 'Pueblo', rightTitle: 'Departamento', pairs: [
          { id: 'g1', left: 'Pueblo ixil (CEH)', right: 'Quiché' },
          { id: 'g2', left: 'Pueblo achi (CEH)', right: 'Baja Verapaz' },
          { id: 'g3', left: 'Pueblo q’eqchi’ (CEH)', right: 'Alta Verapaz' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'conocer', title: 'Ejemplo resuelto: localizar sin jerarquizar',
          prompt: 'Mira cómo se redacta una ubicación cuidadosa.' },
        { icon: 'MapPinned', problem: 'La tarjeta CEH nombra al pueblo achi y a Baja Verapaz.',
          steps: [
            { text: 'Nombra la fuente: **según la síntesis didáctica basada en la CEH (1999)**.' },
            { text: 'Localiza: **el pueblo achi aparece asociado con Baja Verapaz**.' },
            { text: 'Aclara el límite: **el color no permite comparar gravedad ni sufrimiento**.' },
          ],
          answer: 'Según la ficha CEH, el pueblo achi se localiza en Baja Verapaz; el mapa no establece un ranking de afectación.',
          tip: 'Fuente → pueblo → departamento → límite de la leyenda.' },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'conocer', prompt: 'Aplicación: localiza tarjetas nuevas del paquete CEH por departamento.',
          explain: 'La ficha localiza k’iche’ en Quiché, mam en Huehuetenango y kaqchikel en Chimaltenango.' },
        { buckets: [
          { id: 'qui', label: 'Quiché', icon: 'MapPin' }, { id: 'hue', label: 'Huehuetenango', icon: 'MapPin' }, { id: 'chi', label: 'Chimaltenango', icon: 'MapPin' },
        ], items: [
          { id: 'a1', text: 'Pueblo k’iche’ — fuente CEH', bucket: 'qui' },
          { id: 'a2', text: 'Pueblo mam — fuente CEH', bucket: 'hue' },
          { id: 'a3', text: 'Pueblo kaqchikel — fuente CEH', bucket: 'chi' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:5.2.1'], ambito: 'emprender',
          prompt: 'Escribe una oración que localice un pueblo y un departamento del paquete CEH, cite la fuente y aclare que el color no mide sufrimiento.' },
        { minWords: 22, placeholder: 'Según la ficha CEH… El color…',
          model: 'Según la síntesis didáctica basada en la CEH, el pueblo chuj aparece en Huehuetenango. El color ayuda a localizar y no mide gravedad ni sufrimiento.',
          rubric: ['Nombra pueblo y departamento', 'Atribuye a la CEH', 'Aclara el límite del color'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: 'Según otra tarjeta del paquete CEH, ¿dónde localizas al pueblo q’anjob’al?' },
        { options: [
          { id: 'a', text: 'Huehuetenango' }, { id: 'b', text: 'Baja Verapaz' }, { id: 'c', text: 'Chimaltenango' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: 'Salida final: localiza dos pueblos con tarjetas CEH nuevas.' },
        { leftTitle: 'Pueblo', rightTitle: 'Departamento', pairs: [
          { id: 'e1', left: 'Pueblo chuj (CEH)', right: 'Huehuetenango' },
          { id: 'e2', left: 'Pueblo kaqchikel (CEH)', right: 'Chimaltenango' },
        ] },
      ),
      cierre({ areas: ['fc'], cnb: ['fc:5.2.1'] },
        ['Localizo pueblos y departamentos con el paquete CEH', 'Cito la fuente sin jerarquizar el sufrimiento'],
        ['Leeré mapas históricos con cuidado y respeto']),
    ],
  }),
];
