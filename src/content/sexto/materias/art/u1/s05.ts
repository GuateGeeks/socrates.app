/**
 * Expresión Artística · Unidad 1 · Semana 5 — Texturas del entorno inmediato.
 * Progresión: qué es una textura (táctil y visual), vocabulario para nombrarlas y cómo "capturarlas"
 * con la técnica del frotado → usar texturas del entorno en una obra accesible: el mapa táctil
 * para personas con discapacidad visual.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Texturas que se tocan y que se ven ───────────────────────── */
  lesson({
    id: 's05-art-1',
    title: 'Texturas que se tocan y texturas que se ven',
    icon: 'Hand',
    minutes: 14,
    gancho: 'Compara al tacto tu mesa, tu ropa, una hoja de árbol y una piedra. ¿Qué palabras distinguen mejor sus superficies?',
    objetivos: ['Comunicar diferencias entre texturas táctiles y visuales con vocabulario preciso'],
    resumen: [
      'La textura es cómo se siente o cómo parece que se siente una superficie.',
      'Textura táctil: la que se percibe al tocar (la corteza de un árbol, un petate). Textura visual: la que se ve en una imagen plana pero no se siente al tocarla (una foto de una piedra).',
      'Palabras para describir texturas: rugosa, áspera, lisa, suave, esponjosa, dura, blanda, ondulada, granulosa, pegajosa.',
      'Las texturas pueden ser naturales (hojas, piedras, cortezas) o artificiales, hechas por las personas (tejidos, petates, ladrillos, telas).',
      'Frotado: se pone una hoja delgada sobre una superficie con relieve y se frota con crayón acostado; la textura aparece dibujada.',
    ],
    media: {
      id: 's05-art-1-texturas', kind: 'image', title: 'Un mosaico de texturas de Guatemala', aspect: '4:3',
      alt: 'Nueve fotografías cercanas en cuadrícula: corteza de pino, petate de palma, tejido de güipil, piedra de río, hoja de maíz, arena volcánica, ladrillo, algodón y tapa de olla de barro.',
      brief: 'Mosaico fotográfico 3×3, fotos macro con luz lateral que resalte el relieve: corteza de pino, petate de palma o tule, tejido de güipil (detalle de hilos, sin identificar comunidad concreta), piedra de río lisa, hoja de milpa seca, arena volcánica negra, ladrillo, mota de algodón, barro cocido. Cada foto con una etiqueta pequeña con su nombre. Sin personas ni marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'conocer',
          prompt: 'Compara textura real y textura visual antes de crear un registro.' },
        { icon: 'Hand', body: 'La textura táctil se percibe al tocar una superficie; la visual se representa con líneas, puntos y contraste. Un frotado transfiere al papel el relieve de una superficie segura.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'conocer',
          prompt: 'Observa el mosaico. Si pasaras la mano por cada foto **impresa en papel**, ¿qué sentirías?',
          explain: 'En el papel todo se siente **liso**: la foto solo **muestra** la textura. A eso le llamamos **textura visual**. La textura que se siente de verdad al tocar es **táctil**.' },
        { options: [
          { id: 'a', text: 'La aspereza de la corteza y la suavidad del algodón', icon: 'Hand', feedback: 'Eso lo sentirías tocando los objetos reales. La foto impresa es plana.' },
          { id: 'b', text: 'Todas se sentirían lisas, como el papel', icon: 'FileText' },
          { id: 'c', text: 'Solo la arena se sentiría rugosa', icon: 'Mountain', feedback: 'Aunque la arena se vea rugosa, en la foto impresa no hay granos reales.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'conocer', title: '¿Qué es la textura?',
          prompt: 'La **textura** es **cómo se siente, o cómo parece que se siente, una superficie**. Es uno de los elementos básicos del arte, junto con la línea, la forma y el color. Toca cada tarjeta.' },
        { icon: 'Hand', body: 'Los artistas usan la textura para que sus obras despierten el sentido del **tacto**, aunque solo las veamos.', reveal: [
          { icon: 'Hand', front: 'Textura táctil', back: 'Se percibe **al tocar**: la corteza de un árbol, un petate, un tejido, la arena. Tiene **relieve** real.' },
          { icon: 'Eye', front: 'Textura visual', back: 'Se **ve** pero no se siente: una foto o un dibujo de madera, de piedra o de pelo. Al tocarla, el papel es liso.' },
          { icon: 'Leaf', front: 'Natural', back: 'Creada por la naturaleza: hojas, piedras, cortezas, plumas, conchas, tierra.' },
          { icon: 'Home', front: 'Artificial', back: 'Hecha por las personas: tejidos, petates, canastos, ladrillos, telas, cerámica.' },
        ] },
      ),
      S.cards(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'conocer',
          prompt: 'Aprende palabras para **describir texturas**. Lee el frente, piensa en un ejemplo y voltea la tarjeta.' },
        { cards: [
          { front: 'Rugosa', back: 'Con arrugas o bultos irregulares. Ej.: corteza de pino, piel del güisquil.', icon: 'Mountain' },
          { front: 'Lisa', back: 'Sin bultos ni asperezas. Ej.: piedra de río, vidrio, hoja de plátano.', icon: 'Circle' },
          { front: 'Granulosa', back: 'Formada por granitos. Ej.: arena volcánica, azúcar, tierra seca.', icon: 'Sparkles' },
          { front: 'Ondulada', back: 'Con ondas que suben y bajan. Ej.: lámina, cartón corrugado.', icon: 'Waves' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: capturar una textura con frotado',
          prompt: 'El **frotado** es una técnica para "copiar" texturas táctiles en papel. Mira cómo lo hace Marta.',
          media: {
            id: 's05-art-1-frotado', kind: 'video', title: 'La técnica del frotado', aspect: '9:16', duration: 40,
            alt: 'Manos de niña colocan una hoja de papel sobre una hoja de árbol y la frotan con un crayón acostado; poco a poco aparecen las nervaduras.',
            brief: 'Video vertical de 40 s, plano cenital. (1) Una hoja de árbol con nervaduras marcadas sobre la mesa, con la cara rugosa hacia arriba. (2) Encima, una hoja de papel bond delgado sujetada con una mano. (3) Un crayón sin envoltura, acostado, frota con suavidad en una sola dirección: aparecen las nervaduras. (4) Repite sobre una moneda, un petate y una corteza, con otros colores. Rótulos: "crayón acostado", "suave y en una dirección". Sin marcas visibles.',
          } },
        { icon: 'Brush', problem: 'Marta quiere llevar a su cuaderno la textura de una **hoja de aguacate** y de un **petate**.',
          steps: [
            { text: 'Pone la hoja de aguacate sobre la mesa con las **nervaduras hacia arriba** (el lado con más relieve).' },
            { text: 'Coloca encima una **hoja de papel delgado** y la sujeta firme con una mano para que no se mueva.', why: 'Si el papel se mueve, la textura sale doble y borrosa.' },
            { text: 'Quita el papel de envoltura al crayón y lo frota **acostado**, con suavidad y **en una sola dirección**.', why: 'Con el crayón acostado solo se pinta lo que sobresale: así aparece el relieve.' },
            { text: 'Repite en otra parte de la hoja sobre el petate, con otro color, y rotula cada muestra.' },
          ],
          answer: 'Con el **frotado**, la textura **táctil** de la hoja y del petate queda convertida en una textura **visual** en su cuaderno.',
          tip: 'Busca superficies con relieve marcado: cortezas, monedas, tejidos, rejillas, suelas de zapato.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'conocer',
          prompt: 'Clasifica cada ejemplo: ¿textura **táctil** o **visual**?',
          hint: 'Pregúntate: si lo toco, ¿siento el relieve o solo papel o pantalla lisa?',
          explain: 'Los objetos reales tienen textura táctil. Las fotos, dibujos y frotados muestran texturas visuales.' },
        { buckets: [
          { id: 't', label: 'Táctil', icon: 'Hand', color: 'var(--area-art)' },
          { id: 'v', label: 'Visual', icon: 'Eye', color: 'var(--area-l1)' },
        ], items: [
          { id: 'x1', text: 'Un canasto de palma', bucket: 't' },
          { id: 'x2', text: 'La foto de un volcán en un libro', bucket: 'v' },
          { id: 'x3', text: 'El frotado de una moneda en mi cuaderno', bucket: 'v', feedback: 'La moneda es táctil, pero el frotado en el papel es una textura visual.' },
          { id: 'x4', text: 'Un güipil tejido', bucket: 't' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'conocer',
          prompt: 'Une cada elemento de tu entorno con la palabra que mejor describe su textura.',
          explain: 'Describir con precisión es el primer paso para usar las texturas en una obra.' },
        { leftTitle: 'Elemento', rightTitle: 'Textura', pairs: [
          { id: 'p', left: 'Piedra de río', leftIcon: 'Circle', right: 'Lisa' },
          { id: 'a', left: 'Arena volcánica', leftIcon: 'Mountain', right: 'Granulosa' },
          { id: 'c', left: 'Corteza de pino', leftIcon: 'TreePine', right: 'Rugosa' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer',
          prompt: 'Pedro hizo un frotado sobre una corteza, pero le salió una mancha pareja sin ninguna textura. ¿Qué error pudo cometer?',
          explain: 'Si se frota con la **punta** o apretando mucho, se pinta todo por igual. El crayón **acostado** y con presión suave solo marca lo que sobresale.' },
        { options: [
          { id: 'a', text: 'Frotó con la punta del crayón y apretando muy fuerte' },
          { id: 'b', text: 'Usó un papel delgado', feedback: 'El papel delgado es lo correcto: deja sentir el relieve.' },
          { id: 'c', text: 'Eligió una corteza con mucho relieve', feedback: 'Mientras más relieve, mejor sale el frotado.' },
        ], correct: ['a'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer',
          prompt: 'Realiza en clase un ensayo breve con **tres superficies preparadas y seguras**: cartón corrugado, un retazo limpio de petate y una placa de hojas con nervaduras.' },
        { goal: 'Producir tres frotados y comparar la textura visual que registra cada superficie.',
          steps: [
            { title: 'Prepara la hoja', detail: 'Divide una hoja delgada en tres espacios y coloca el primero sobre una superficie preparada.' },
            { title: 'Haz tres frotados', detail: 'Sujeta el papel y pasa el crayón acostado con presión suave una vez sobre cada superficie.' },
            { title: 'Compara y rotula', detail: 'Debajo de los tres frotados escribe una comparación concisa, por ejemplo: “El corrugado deja líneas; el petate, una trama; la placa de hojas, nervaduras”.' },
          ],
          evidence: 'Una hoja con tres frotados y un rótulo comparativo.',
          rubric: ['Los tres registros muestran diferencias visibles', 'El rótulo compara las huellas con vocabulario preciso'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.1'], prompt: 'Un dibujo muy realista de la piel de un lagarto, en una hoja de papel, tiene textura…' },
        { options: [
          { id: 'a', text: 'Táctil, porque se ve rugosa' },
          { id: 'b', text: 'Visual, porque se ve rugosa pero al tocarla es lisa' },
          { id: 'c', text: 'No tiene textura' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.1'], prompt: 'Clasifica cada textura según su origen.' },
        { buckets: [
          { id: 'n', label: 'Natural', icon: 'Leaf', color: 'var(--c-ok)' },
          { id: 'a', label: 'Artificial', icon: 'Home', color: 'var(--area-art)' },
        ], items: [
          { id: 'y1', text: 'Concha de playa', bucket: 'n' },
          { id: 'y2', text: 'Petate', bucket: 'a' },
          { id: 'y3', text: 'Hoja de milpa', bucket: 'n' },
          { id: 'y4', text: 'Ladrillo', bucket: 'a' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. El mapa táctil ───────────────────────── */
  lesson({
    id: 's05-art-2',
    title: 'Arte para leer con las manos: el mapa táctil',
    icon: 'Map',
    minutes: 15,
    gancho: 'Un caso ficticio propone un mapa de la escuela. ¿Cómo pueden el relieve, la textura y el contraste comunicar con claridad sin inventar una consulta?',
    objetivos: ['Diseñar una clave táctil mediante tres texturas seguras y claramente contrastantes'],
    resumen: [
      'Las personas ciegas y con baja visión usan estrategias, formatos y apoyos diversos. Algunas personas ciegas pueden preferir información táctil; otras pueden elegir audio, texto digital u orientación personal.',
      'Una clave táctil sencilla puede usar tres texturas no braille claramente distintas: EVA lisa, plástico corrugado y corcho rugoso.',
      'Las muestras preparadas y reutilizables se fijan con cierre de gancho y felpa removible; llegan listas para comparar, ordenar y volver a guardar.',
      'La clase usa símbolos táctiles que no son braille. No se debe imitar, inventar ni copiar braille sin transcripción profesional y revisión de una persona competente.',
    ],
    media: {
      id: 's05-art-2-mapa', kind: 'image', title: 'Muestrario táctil reutilizable', aspect: '4:3',
      alt: 'Tres muestras grandes y separadas de EVA lisa, plástico corrugado y corcho rugoso, junto a una clave breve de alto contraste.',
      brief: 'Mock durable para aula: tablero pequeño con tres muestras preparadas y reutilizables, grandes y separadas: EVA lisa, plástico corrugado y corcho rugoso. Cada muestra usa cierre de gancho y felpa removible con esquinas redondeadas. A la derecha, clave concisa con una muestra y un nombre grande por textura. Mostrar símbolos táctiles no braille y una bandeja rotulada; no imitar braille. Todas las piezas quedan firmes y listas para reutilizar.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'conocer',
          prompt: 'Compara cómo tres texturas preparadas pueden comunicar diferencias.' },
        { icon: 'Map', body: 'Una clave táctil asigna un significado estable a cada textura. El contraste visual puede apoyar a algunas personas con baja visión, mientras que cada persona elige los formatos y apoyos que le resultan útiles.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer',
          prompt: '¿Qué par del muestrario se distingue con mayor claridad al tacto?',
          explain: 'La EVA **lisa** y el plástico **corrugado** ofrecen un contraste claro y estable.' },
        { options: [
          { id: 'a', text: 'EVA lisa y plástico corrugado', icon: 'Contrast' },
          { id: 'b', text: 'Dos piezas de EVA lisa', icon: 'Layers', feedback: 'Tienen la misma textura y no crean contraste táctil.' },
          { id: 'c', text: 'Dos piezas de plástico corrugado', icon: 'Layers', feedback: 'Repetir una textura no permite distinguir significados.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'conocer', title: 'Tres texturas, tres cualidades',
          prompt: 'Recorre cada muestra preparada con dos dedos y nombra su cualidad principal.' },
        { icon: 'Hand', body: 'El muestrario reutilizable limita la comparación a **tres texturas** claramente distintas.', reveal: [
          { icon: 'Waves', front: 'EVA lisa', back: 'La superficie es continua y sin canales.' },
          { icon: 'Rows3', front: 'Plástico corrugado', back: 'Los canales paralelos producen una sensación acanalada.' },
          { icon: 'Mountain', front: 'Corcho rugoso', back: 'Los granos firmes producen una superficie irregular.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer', title: 'Una clave breve y consistente',
          prompt: 'Una clave comunica cuando cada textura conserva un solo significado.' },
        { icon: 'ListChecks', body: 'La clave concisa usa una muestra, un nombre grande y un significado por fila.', reveal: [
          { icon: 'Contrast', front: 'Contraste', back: 'Las tres texturas deben distinguirse sin depender solo del color.' },
          { icon: 'List', front: 'Consistencia', back: 'Si el corcho significa oficina, conserva ese significado en todo el plano.' },
          { icon: 'ShieldCheck', front: 'Seguridad', back: 'Las muestras tienen esquinas redondeadas y cierres removibles firmes.' },
          { icon: 'Shapes', front: 'No es braille', back: 'Son texturas y símbolos táctiles no braille. No imites, inventes ni copies braille.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: una clave de tres filas',
          prompt: 'Mira cómo se construye una clave táctil breve con el kit preparado.' },
        { icon: 'Map', problem: 'La clave debe distinguir aula, corredor y oficina mediante las tres muestras reutilizables.',
          steps: [
            { text: '**Aula → EVA lisa**.' },
            { text: '**Corredor → plástico corrugado**.', why: 'Los canales contrastan con la EVA lisa.' },
            { text: '**Oficina → corcho rugoso**.', why: 'La superficie irregular se diferencia de las otras dos.' },
            { text: 'Cada muestra se fija con **gancho y felpa removible** junto a su nombre.' },
          ],
          answer: 'Tres texturas contrastantes y una **clave concisa** de tres filas.',
          tip: 'Recorre dos muestras seguidas para comprobar el contraste táctil.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer',
          prompt: 'Haz una discriminación táctil breve: clasifica cada descripción según la muestra preparada.',
          hint: 'Compara los rasgos: sin canales, canales paralelos o granos irregulares.',
          explain: 'La comparación táctil distingue EVA lisa, plástico corrugado y corcho rugoso.' },
        { buckets: [
          { id: 'lis', label: 'EVA lisa', icon: 'Waves', color: 'var(--area-l1)' },
          { id: 'cor', label: 'Plástico corrugado', icon: 'Rows3', color: 'var(--area-ef)' },
          { id: 'rug', label: 'Corcho rugoso', icon: 'Mountain', color: 'var(--area-art)' },
        ], items: [
          { id: 't1', text: 'Superficie continua, sin canales', bucket: 'lis' },
          { id: 't2', text: 'Canales paralelos y firmes', bucket: 'cor' },
          { id: 't3', text: 'Granos irregulares que se sienten al recorrer', bucket: 'rug' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer',
          prompt: 'Una clave ya usa EVA lisa para las aulas. ¿Qué muestra preparada conviene para un corredor vecino?',
          explain: 'El plástico corrugado ofrece un contraste táctil claro frente a la EVA lisa.' },
        { options: [
          { id: 'a', text: 'Otra pieza de EVA lisa', feedback: 'Repetir la textura no distingue los espacios vecinos.' },
          { id: 'b', text: 'Plástico corrugado' },
          { id: 'c', text: 'Una etiqueta impresa sin relieve', feedback: 'El texto impreso no crea contraste táctil.' },
        ], correct: ['b'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer',
          prompt: 'Arma una clave breve con el muestrario reutilizable.' },
        { goal: 'Organizar tres texturas claramente distintas en una clave concisa.',
          steps: [
            { title: 'Ordena', detail: 'Coloca EVA lisa, plástico corrugado y corcho rugoso en tres filas separadas.' },
            { title: 'Fija', detail: 'Usa los cierres de gancho y felpa removibles ya instalados.' },
            { title: 'Rotula', detail: 'Asigna un significado y un nombre grande a cada muestra.' },
          ],
          evidence: 'Clave concisa de tres filas con cierres removibles.',
          rubric: ['Usé exactamente tres texturas', 'Cada muestra tiene un significado', 'Las tres texturas se distinguen al tacto'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.1'], prompt: 'Comprueba la clave táctil de tres texturas.' },
        { statements: [
          { text: 'La EVA lisa y el plástico corrugado ofrecen cualidades táctiles distintas.', answer: true },
          { text: 'Una textura puede cambiar de significado en cada parte del mismo plano.', answer: false, why: 'La clave debe conservar un código consistente.' },
          { text: 'Estas muestras son símbolos táctiles no braille.', answer: true },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.1'], prompt: '¿Cuál clave comunica con mayor claridad mediante textura?' },
        { options: [
          { id: 'a', text: 'Tres muestras contrastantes, separadas y con significado estable' },
          { id: 'b', text: 'Tres muestras iguales con nombres diferentes' },
          { id: 'c', text: 'Texturas sin clave ni significado acordado' },
        ], correct: ['a'] },
      ),
      cierre({ areas: ['art'], cnb: ['art:3.2.1'] },
        ['Distingo EVA lisa, plástico corrugado y corcho rugoso', 'Mantengo una clave táctil breve y consistente'],
        ['Guardaré el muestrario reutilizable completo', 'No imitaré braille con símbolos inventados']),
    ],
  }),
];
