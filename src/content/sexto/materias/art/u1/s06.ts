/**
 * Expresión Artística · Unidad 1 · Semana 6 — Creación de texturas con distintos materiales.
 * Progresión: de encontrar texturas (semana 5) a CREARLAS: texturas visuales dibujadas con puntos,
 * líneas y tramas → texturas táctiles con materiales (pegar, arrugar, rasgar, estampar, modelar)
 * en un cuadro en relieve.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Texturas dibujadas ───────────────────────── */
  lesson({
    id: 's06-art-1',
    title: 'Texturas dibujadas: puntos, líneas y tramas',
    icon: 'PenTool',
    minutes: 14,
    gancho: 'Con un solo lápiz, ¿podrías dibujar algo que parezca peludo como un perro, duro como una piedra o áspero como la corteza de una ceiba?',
    objetivos: [
      'Crear texturas visuales con puntos, líneas y tramas',
    ],
    resumen: [
      'Una textura visual se puede crear repitiendo marcas: puntos, líneas rectas, líneas curvas, círculos o tramas.',
      'Punteado: muchos puntos; donde están más juntos se ve más oscuro. Rayado: líneas paralelas. Trama cruzada (achurado): líneas que se cruzan.',
      'Mientras más juntas y numerosas son las marcas, más oscura se ve la zona; mientras más separadas, más clara.',
      'Cada marca sugiere un material: líneas cortas y curvas = pelo o pasto; líneas onduladas largas = madera o agua; punteado = arena o piedra; trama cruzada = sombras o tejidos.',
    ],
    media: {
      id: 's06-art-1-marcas', kind: 'diagram', title: 'Catálogo de marcas', aspect: '4:3',
      alt: 'Una cuadrícula de 8 cuadros con texturas dibujadas en tinta negra: punteado, rayado, trama cruzada, líneas onduladas, espirales, líneas cortas curvas, círculos pequeños y escamas.',
      brief: 'Lámina en blanco y negro, dibujada a mano con lápiz o tinta, cuadrícula 4×2. Cada cuadro muestra una marca repetida, con su nombre debajo: punteado, rayado, trama cruzada, ondas, espirales, pelitos (líneas cortas curvas), círculos, escamas. En la fila de abajo, tres cuadros muestran degradado de claro a oscuro con punteado, rayado y trama cruzada (las marcas se juntan hacia la derecha). Trazo firme, legible en celular.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'conocer', title: 'Marcas que crean texturas',
          prompt: 'Una **textura visual** se crea **repitiendo una marca** muchas veces. Toca cada tarjeta para conocer las principales.' },
        { icon: 'PenTool', body: 'Sirven con lápiz, lapicero, marcador o tinta. Lo importante es **repetir con paciencia**.', reveal: [
          { icon: 'CircleDot', front: 'Punteado', back: 'Muchos **puntos**. Sugiere arena, piedra, tierra o piel. Se hace tocando el papel con la punta, sin arrastrar.' },
          { icon: 'AlignJustify', front: 'Rayado', back: 'Líneas **paralelas** en una misma dirección. Sugiere madera, lluvia o sombras suaves.' },
          { icon: 'Hash', front: 'Trama cruzada', back: 'Capas de rayado que **se cruzan** (también se llama achurado). Sugiere tejidos, canastos o sombras oscuras.' },
          { icon: 'Waves', front: 'Ondas y curvas', back: 'Líneas **onduladas** largas: agua, vetas de madera, viento. Líneas **cortas y curvas**: pelo, plumas, pasto.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'conocer', title: 'Más juntas, más oscuro',
          prompt: 'Con marcas puedes crear **zonas claras y oscuras** sin cambiar de lápiz. El secreto es la **densidad**: cuántas marcas hay y qué tan juntas están.' },
        { icon: 'Contrast', body: 'Mira la fila de abajo del catálogo: las marcas **se juntan** hacia la derecha y el cuadro se oscurece.', reveal: [
          { icon: 'Sun', front: 'Zona clara', back: 'Pocas marcas, **separadas**. El blanco del papel se ve mucho.' },
          { icon: 'CloudSun', front: 'Zona media', back: 'Más marcas, un poco más **juntas**.' },
          { icon: 'Moon', front: 'Zona oscura', back: 'Muchas marcas, **muy juntas**, o una segunda capa cruzada encima.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'hacer', title: 'Ejemplo resuelto: una tinaja de barro con textura',
          prompt: 'Mira cómo Sofía da textura y volumen a una **tinaja** con un solo lapicero negro.' },
        { icon: 'PenTool', problem: 'Sofía dibujó el contorno de una tinaja de barro. Quiere que parezca de barro rugoso y redonda, sin usar colores.',
          steps: [
            { text: 'Elige la marca: **punteado**, porque el barro cocido se siente granuloso.' },
            { text: 'Decide de dónde viene la luz: **de la izquierda**.' },
            { text: 'En el lado izquierdo pone **pocos puntos, separados** (zona clara).', why: 'Donde da la luz, el papel blanco debe verse más.' },
            { text: 'Hacia la derecha pone **cada vez más puntos y más juntos** (zona oscura).', why: 'El cambio gradual de densidad hace que la tinaja se vea redonda.' },
            { text: 'En el borde de la boca usa **rayado** curvo para que se note el grosor del barro.' },
          ],
          answer: 'Con **punteado** y cambios de **densidad**, la tinaja parece **de barro** y **redonda**, usando un solo lapicero.',
          tip: 'Paciencia: el punteado es lento, pero el resultado es muy fino. Trabaja por zonas pequeñas.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'conocer',
          prompt: 'Observa el catálogo de marcas. ¿Cuál usarías para dibujar el **pelo de un perro**?',
          explain: 'Las **líneas cortas y curvas** repetidas en la misma dirección parecen pelitos. Cada marca sugiere una textura distinta: hoy aprenderás a **crearlas** tú.' },
        { options: [
          { id: 'a', text: 'Líneas cortas y curvas (pelitos)', icon: 'Dog' },
          { id: 'b', text: 'Puntos muy separados', icon: 'CircleDot', feedback: 'Los puntos sugieren arena o piedra, no pelo.' },
          { id: 'c', text: 'Escamas', icon: 'Fish', feedback: 'Las escamas sugieren pescados o reptiles.' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'hacer',
          prompt: 'Une cada material con la marca que mejor lo representa.',
          hint: 'Piensa en cómo se siente cada material y qué marca se le parece.',
          explain: 'Punteado = granuloso; ondas largas = agua o vetas; pelitos = pelo o pasto; trama cruzada = tejido.' },
        { leftTitle: 'Material', rightTitle: 'Marca', pairs: [
          { id: 'ar', left: 'Arena de la playa', leftIcon: 'Sun', right: 'Punteado' },
          { id: 'ag', left: 'Agua de un río', leftIcon: 'Waves', right: 'Líneas onduladas largas' },
          { id: 'ov', left: 'Lana de una oveja', leftIcon: 'Cloud', right: 'Líneas cortas y curvas' },
          { id: 'ca', left: 'Un canasto de palma', leftIcon: 'ShoppingBasket', right: 'Trama cruzada' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'hacer',
          prompt: 'Ordena estos cuadros de rayado del **más claro** al **más oscuro**.',
          explain: 'La oscuridad aumenta con la cantidad y cercanía de las líneas, y más aún con una capa cruzada encima.' },
        { items: [
          { id: 'a', text: '4 líneas muy separadas' },
          { id: 'b', text: '10 líneas separadas' },
          { id: 'c', text: '20 líneas muy juntas' },
          { id: 'd', text: '20 líneas juntas + otra capa cruzada encima' },
        ], labels: { start: 'Más claro', end: 'Más oscuro' } },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'hacer',
          prompt: 'Mateo dibuja el tronco de un pino. Quiere que se vea la **corteza rugosa** y el lado del tronco que está **en sombra**. ¿Qué plan es el mejor?',
          explain: 'Las líneas verticales irregulares sugieren las grietas de la corteza, y juntarlas o cruzarlas en un lado crea la sombra.' },
        { options: [
          { id: 'a', text: 'Líneas verticales irregulares, más juntas y con trama cruzada en el lado de la sombra' },
          { id: 'b', text: 'Pintar el tronco de un solo tono gris parejo', feedback: 'Así no se nota la textura ni la sombra.' },
          { id: 'c', text: 'Puntos separados por igual en todo el tronco', feedback: 'El punteado parejo no muestra la sombra y no parece corteza.' },
        ], correct: ['a'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'hacer',
          prompt: '**En casa:** dibuja un **animal de Guatemala** usando solo marcas de textura (sin colorear).' },
        { goal: 'Crear un dibujo en blanco y negro donde las texturas dibujadas muestren de qué está hecho el animal.',
          steps: [
            { title: 'Elige tu animal', detail: 'Por ejemplo: un armadillo (caparazón con escamas), un tacuazín (pelo), un quetzal (plumas) o un manatí (piel lisa con arrugas).' },
            { title: 'Contorno', detail: 'Dibuja su silueta grande con lápiz suave.' },
            { title: 'Texturas', detail: 'Rellena cada parte con una marca distinta: escamas, pelitos, rayado, punteado. Usa al menos 3 marcas.' },
            { title: 'Luz y sombra', detail: 'Decide de dónde viene la luz y junta más las marcas en el lado contrario.' },
          ],
          evidence: 'Tu dibujo terminado, con los nombres de las marcas que usaste escritos al lado.',
          rubric: ['Usé al menos 3 marcas distintas', 'Cada marca tiene sentido para el material', 'Hay zonas claras y oscuras según la densidad'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.4'], prompt: '¿Cómo se logra una zona **más oscura** con punteado?' },
        { options: [
          { id: 'a', text: 'Poniendo más puntos y más juntos' },
          { id: 'b', text: 'Poniendo puntos más separados' },
          { id: 'c', text: 'Cambiando los puntos por un borrador' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.4'], prompt: 'Une cada marca con su nombre.' },
        { pairs: [
          { id: 'p', left: 'Muchos puntos pequeños', right: 'Punteado' },
          { id: 'r', left: 'Líneas paralelas en una dirección', right: 'Rayado' },
          { id: 't', left: 'Líneas que se cruzan en capas', right: 'Trama cruzada' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Texturas con materiales ───────────────────────── */
  lesson({
    id: 's06-art-2',
    title: 'Texturas con materiales: el cuadro en relieve',
    icon: 'Layers',
    minutes: 15,
    gancho: 'Una tapita, un puñado de aserrín, un pedazo de tela vieja y una hoja seca. Para muchos es basura; para una artista, son texturas esperando una obra. ¿Qué harías tú con ellos?',
    objetivos: [
      'Crear texturas táctiles transformando materiales: pegar, arrugar, rasgar, enrollar, estampar y modelar',
    ],
    resumen: [
      'Una textura táctil se crea con materiales y técnicas: pegar granos o semillas, arrugar o rasgar papel, enrollar tiras, pegar hilos, estampar con objetos y marcar plastilina o masa de papel con herramientas.',
      'Un mismo material puede dar texturas distintas: el papel liso, arrugado, rasgado o enrollado se siente diferente.',
      'Para un cuadro en relieve: base firme (cartón), un boceto, goma blanca, pocas texturas bien distintas y tiempo de secado.',
      'Reutilizar materiales cuida el ambiente. Trabaja seguro: sin vidrio ni objetos filosos, sin llevarte nada a la boca y lavándote las manos al terminar.',
    ],
    media: {
      id: 's06-art-2-cuadro', kind: 'video', title: 'Un cuadro que se puede tocar', aspect: '9:16', duration: 60,
      alt: 'Unas manos arman sobre cartón un paisaje de volcán y lago: pegan arena en el volcán, papel arrugado en las nubes, tiras de papel enrollado en el lago, semillas en la orilla y estampan hojas con pintura en el cielo.',
      brief: 'Video vertical de 60 s, plano cenital sobre una mesa cubierta con periódico. Muestra en secuencias cortas: (1) boceto a lápiz de un volcán, un lago y un cielo sobre cartón; (2) goma blanca y arena volcánica espolvoreada en el volcán, se sacude el sobrante; (3) papel de china arrugado para las nubes; (4) tiras de papel enrolladas y pegadas en ondas para el lago; (5) frijoles o semillas en la orilla; (6) estampado con una hoja pintada; (7) plastilina marcada con un tenedor de plástico para una casita. Rótulos: pegar, arrugar, enrollar, estampar, marcar. Cierre: una mano con los ojos tapados recorre el cuadro. Música suave, sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'conocer', title: 'Seis técnicas para crear texturas',
          prompt: 'Estas técnicas convierten materiales sencillos en texturas. Toca cada una.' },
        { icon: 'Layers', body: 'Muchas obras de **técnica mixta** combinan varias de ellas. Todas se pueden hacer con materiales reciclados.', reveal: [
          { icon: 'Droplet', front: 'Pegar granos', back: 'Unta goma y espolvorea **arena, aserrín, café molido usado o semillas**. Sacude el sobrante cuando seque. Da textura granulosa.' },
          { icon: 'FileText', front: 'Arrugar y rasgar', back: '**Arruga** papel de china o periódico para relieves irregulares; **rasga** con los dedos para bordes suaves con pelusa.' },
          { icon: 'RotateCw', front: 'Enrollar y trenzar', back: '**Enrolla** tiras de papel o **trenza** lana o hilo y pégalos en líneas u ondas: relieves ordenados.' },
          { icon: 'Stamp', front: 'Estampar', back: 'Pinta un objeto con relieve (una hoja, una esponja, media papa tallada por un adulto, una tapita) y **presiónalo** sobre el papel.' },
          { icon: 'Hand', front: 'Modelar y marcar', back: 'Extiende **plastilina, barro o masa de papel** y márcala con un tenedor de plástico, un palito o una concha.' },
          { icon: 'Scissors', front: 'Collage de telas', back: 'Recorta y pega **retazos** de tela, costal o fieltro: cada tela tiene su propia textura.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'hacer', title: 'Ejemplo resuelto: un volcán que se puede tocar',
          prompt: 'Mira cómo Andrés planifica y hace su **cuadro en relieve** del volcán de su pueblo (como en el video).' },
        { icon: 'Mountain', problem: 'Andrés tiene un cartón, goma blanca, arena, papel de china, periódico, frijoles viejos que ya no sirven para cocinar y plastilina.',
          steps: [
            { text: '**Boceto:** dibuja a lápiz en el cartón el volcán, el cielo, un lago y una casita.', why: 'Planificar evita pegar materiales donde no van.' },
            { text: '**Asigna texturas bien distintas:** volcán = arena (granuloso); nubes = papel de china arrugado (irregular y suave); lago = tiras de periódico enrolladas (ondas ordenadas); orilla = frijoles (bultos duros); casita = plastilina marcada con tenedor.', why: 'Como aprendiste en el mapa táctil, texturas distintas se reconocen mejor.' },
            { text: '**Trabaja de atrás hacia adelante:** primero el cielo y el volcán, después el lago y al final la casita.', why: 'Así no aplastas lo que ya pegaste.' },
            { text: '**Deja secar** acostado toda una noche antes de colgarlo o tocarlo mucho.' },
          ],
          answer: 'Un cuadro con **cinco texturas táctiles** bien distintas, creadas con **cuatro técnicas**: pegar granos (arena en el volcán y frijoles en la orilla), arrugar, enrollar y modelar.',
          tip: 'Usa poca goma en cada zona: si pones mucha, el cartón se moja y se deforma.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'conocer',
          prompt: 'Un mismo papel puede sentirse muy distinto. Clasifica cada forma de transformarlo según la textura que crees que da.',
          explain: 'Al **transformar** un material cambias su textura. Arrugar da relieve irregular; enrollar da cilindros ordenados; rasgar deja bordes con pelusa.' },
        { buckets: [
          { id: 'irr', label: 'Relieve irregular', icon: 'Mountain', color: 'var(--area-art)' },
          { id: 'ord', label: 'Relieve ordenado', icon: 'AlignJustify', color: 'var(--area-l1)' },
          { id: 'lis', label: 'Liso', icon: 'Square', color: 'var(--c-ok)' },
        ], items: [
          { id: 'x1', text: 'Papel arrugado y vuelto a estirar', bucket: 'irr' },
          { id: 'x2', text: 'Tiras de papel enrolladas, pegadas en fila', bucket: 'ord' },
          { id: 'x3', text: 'Papel pegado plano y sin arrugas', bucket: 'lis' },
          { id: 'x4', text: 'Papel doblado en acordeón', bucket: 'ord' },
          { id: 'x5', text: 'Bolitas de papel de distintos tamaños', bucket: 'irr' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'hacer',
          prompt: 'Une cada efecto que quieres lograr con la técnica que lo produce.',
          hint: 'Repasa las seis tarjetas de técnicas.',
          explain: 'Cada técnica deja una "huella" distinta en el material.' },
        { leftTitle: 'Quiero…', rightTitle: 'Técnica', pairs: [
          { id: 'g', left: 'Un suelo granuloso de playa', right: 'Pegar arena' },
          { id: 'n', left: 'Nubes con relieve irregular', right: 'Arrugar papel de china' },
          { id: 'h', left: 'La huella de las nervaduras de una hoja', right: 'Estampar con una hoja pintada' },
          { id: 't', left: 'Un techo de teja con rayitas', right: 'Marcar plastilina con un tenedor' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'hacer',
          prompt: 'Valeria quiere representar un **campo de trigo** en su cuadro, con líneas en relieve que parezcan espigas. ¿Qué técnica le conviene?',
          explain: 'Las tiras enrolladas o la lana trenzada, pegadas en líneas, crean un relieve ordenado parecido a las espigas.' },
        { options: [
          { id: 'a', text: 'Pegar tiras de papel enrolladas o lana trenzada en líneas' },
          { id: 'b', text: 'Pegar papel aluminio liso', feedback: 'El aluminio liso no da la sensación de espigas.' },
          { id: 'c', text: 'Pintar con un solo color plano', feedback: 'Así no se crea una textura táctil.' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'ser',
          prompt: 'Trabajo seguro y responsable. ¿Verdadero o falso?',
          explain: 'Crear texturas es divertido si cuidas tu cuerpo, el ambiente y a los demás.' },
        { statements: [
          { text: 'Puedo usar pedacitos de vidrio para dar brillo a mi cuadro.', answer: false, why: 'El vidrio corta. Usa papel aluminio o papel brillante.' },
          { text: 'Reutilizar cartón, retazos y papel usado cuida el ambiente.', answer: true },
          { text: 'Si uso semillas, elijo las que ya no sirven para comer.', answer: true },
          { text: 'Al terminar, me lavo las manos y guardo los materiales.', answer: true },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'hacer',
          prompt: 'Planifica tu **cuadro en relieve** sobre un lugar que quieras (tu casa, el mercado, un río, el campo). Escribe: qué lugar es, qué **4 partes** tendrá, qué **textura** y **técnica** usarás en cada parte, y qué **materiales reciclados** usarás.' },
        { minWords: 40, placeholder: 'Mi cuadro será… La parte 1… con… La parte 2…',
          model: 'Mi cuadro será el mercado de mi pueblo. El suelo será de aserrín pegado, para que se sienta granuloso. El techo de las ventas será de cartón corrugado de una caja vieja, que tiene rayas ordenadas. Los canastos serán de lana trenzada pegada en espiral. Las frutas serán bolitas de plastilina marcadas con un palito. Usaré cartón de caja, lana sobrante y aserrín de la carpintería de mi tío.',
          rubric: ['Nombra el lugar y 4 partes', 'Asigna una textura distinta a cada parte', 'Nombra la técnica de cada textura', 'Usa materiales reciclados y seguros'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.4'], ambito: 'hacer',
          prompt: '**En casa:** realiza el cuadro en relieve que planificaste.' },
        { goal: 'Crear un cuadro con al menos 4 texturas táctiles hechas con técnicas distintas.',
          steps: [
            { title: 'Prepara', detail: 'Cubre la mesa con periódico. Reúne cartón, goma blanca y tus materiales reciclados.' },
            { title: 'Boceto', detail: 'Dibuja a lápiz las partes de tu cuadro sobre el cartón.' },
            { title: 'Crea texturas', detail: 'Trabaja de atrás hacia adelante, con poca goma en cada zona. Usa al menos 4 técnicas.' },
            { title: 'Seca y prueba', detail: 'Deja secar una noche. Luego, con los ojos cerrados, recorre tu cuadro: ¿distingues cada parte?' },
          ],
          evidence: 'Tu cuadro terminado con un título y una lista de las técnicas que usaste.',
          rubric: ['Tiene al menos 4 texturas distintas', 'Usé técnicas diferentes', 'Los materiales están firmes y secos', 'Trabajé con orden y seguridad'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.4'], prompt: '¿Qué técnica consiste en **pintar un objeto con relieve y presionarlo** sobre el papel?' },
        { options: [
          { id: 'a', text: 'Estampar' },
          { id: 'b', text: 'Arrugar' },
          { id: 'c', text: 'Rasgar' },
          { id: 'd', text: 'Frotado' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.4'], prompt: 'Clasifica cada textura: ¿es **táctil** (se siente) o **visual** (solo se ve)?' },
        { buckets: [
          { id: 't', label: 'Táctil', icon: 'Hand', color: 'var(--area-art)' },
          { id: 'v', label: 'Visual', icon: 'Eye', color: 'var(--area-l1)' },
        ], items: [
          { id: 'z1', text: 'Arena pegada con goma', bucket: 't' },
          { id: 'z2', text: 'Punteado dibujado con lapicero', bucket: 'v' },
          { id: 'z3', text: 'Plastilina marcada con un tenedor', bucket: 't' },
          { id: 'z4', text: 'Trama cruzada hecha con lápiz', bucket: 'v' },
        ] },
      ),
      cierre({ areas: ['art'], cnb: ['art:3.2.4'] },
        ['Creo texturas visuales con puntos, líneas y tramas', 'Creo texturas táctiles pegando, arrugando, enrollando, estampando y modelando', 'Trabajo con materiales reciclados de forma segura'],
        ['Terminaré mi animal dibujado con texturas', 'Haré mi cuadro en relieve', 'Guardaré materiales reciclados para futuras obras'])
    ],
  }),
];
