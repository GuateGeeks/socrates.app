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
    objetivos: ['Distinguir y comunicar texturas táctiles y visuales mediante vocabulario preciso y la técnica del frotado'],
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
          { front: 'Áspera', back: 'Raspa un poco al tocar. Ej.: lija, ladrillo, piedra de moler.', icon: 'Hammer' },
          { front: 'Lisa', back: 'Sin bultos ni asperezas. Ej.: piedra de río, vidrio, hoja de plátano.', icon: 'Circle' },
          { front: 'Suave', back: 'Agradable y delicada al tacto. Ej.: algodón, pluma, lana.', icon: 'Feather' },
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
          { id: 'x5', text: 'Un dibujo de las plumas de un quetzal', bucket: 'v' },
          { id: 'x6', text: 'La corteza de un árbol de la escuela', bucket: 't' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'conocer',
          prompt: 'Une cada elemento de tu entorno con la palabra que mejor describe su textura.',
          explain: 'Describir con precisión es el primer paso para usar las texturas en una obra.' },
        { leftTitle: 'Elemento', rightTitle: 'Textura', pairs: [
          { id: 'p', left: 'Piedra de río', leftIcon: 'Circle', right: 'Lisa' },
          { id: 'a', left: 'Arena volcánica', leftIcon: 'Mountain', right: 'Granulosa' },
          { id: 'l', left: 'Lana de oveja', leftIcon: 'Cloud', right: 'Suave' },
          { id: 'c', left: 'Corteza de pino', leftIcon: 'TreePine', right: 'Rugosa' },
          { id: 'm', left: 'Lámina de un techo', leftIcon: 'Home', right: 'Ondulada' },
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
          prompt: '**En casa:** sal a una **cacería de texturas** en tu casa, patio o camino a la escuela.' },
        { goal: 'Reunir 6 frotados de texturas distintas de tu entorno y describir cada una.',
          steps: [
            { title: 'Explora con las manos', detail: 'Toca con cuidado paredes, cortezas, hojas, tejidos, petates, monedas, suelas. Evita espinas, vidrios y superficies sucias.' },
            { title: 'Haz los frotados', detail: 'Con papel delgado y crayón acostado, captura 6 texturas: 3 naturales y 3 artificiales.' },
            { title: 'Rotula', detail: 'Escribe debajo de cada una: qué es, si es natural o artificial y una palabra que la describa (rugosa, lisa…).' },
            { title: 'Adivinanza', detail: 'Enseña tus frotados a alguien de tu familia y pídele que adivine de qué objeto salió cada uno.' },
          ],
          evidence: 'Una hoja con 6 frotados rotulados.',
          rubric: ['Capturé 6 texturas distintas', 'Incluí naturales y artificiales', 'Describí cada una con una palabra precisa'] },
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
    gancho: 'Una compañera ciega participa en el diseño de un mapa de la escuela. ¿Cómo pueden el relieve, la textura, el contraste y sus observaciones orientar el trabajo?',
    objetivos: ['Planificar un mapa táctil seguro con texturas contrastantes, leyenda y revisión de personas usuarias'],
    resumen: [
      'Las personas ciegas y con baja visión usan estrategias y apoyos diversos. Algunos mapas táctiles combinan relieve, textura, contraste y rótulos; se consulta a quienes los usarán.',
      'Un mapa táctil representa cada lugar con una textura distinta: por ejemplo, arena para la tierra, papel aluminio liso para el agua, algodón para las nubes, hojas secas para el bosque.',
      'Reglas: pocas texturas y muy distintas entre sí, bordes marcados con lana o hilo pegado, leyenda táctil (una muestra de cada textura con su significado) y nada que corte, pinche o se despegue.',
      'El sistema braille, inventado por el francés Louis Braille, permite leer con los dedos mediante puntos en relieve, en celdas de hasta 6 puntos.',
    ],
    media: {
      id: 's05-art-2-mapa', kind: 'image', title: 'Un mapa que se lee con las manos', aspect: '4:3',
      alt: 'Manos que recorren un mapa en relieve de una comunidad hecho con arena, papel aluminio, hojas secas y algodón, con una leyenda de texturas en un costado.',
      brief: 'Fotografía o ilustración realista de un mapa táctil escolar sobre cartón grueso: un río con papel aluminio alisado (liso), la tierra con arena pegada (granulosa), un bosque con hojas secas trituradas (crujiente), el campo de fútbol con fieltro (suave), las calles marcadas con lana gruesa pegada, la escuela con un cuadrito de cartón corrugado (ondulado). En el lado derecho, una leyenda con una muestra de cada textura y puntos en relieve simulando braille. Encuadre cenital con dos manos de niña o niño explorando. Sin rostros.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'conocer',
          prompt: 'Aprende cómo textura y contraste comunican en un mapa táctil.' },
        { icon: 'Map', body: 'Una clave táctil asigna una textura distinta a cada tipo de lugar y mantiene ese código en todo el mapa. El contraste visual apoya a personas con visión parcial; la utilidad se comprueba consultando y probando con posibles usuarios.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'convivir',
          prompt: 'Una usuaria ciega pidió distinguir dos zonas vecinas al tacto. ¿Qué cambio responde a esa consulta?',
          explain: 'El **relieve y las texturas distintas** pueden comunicar límites cuando responden a una necesidad consultada y se prueban con personas usuarias.' },
        { options: [
          { id: 'a', text: 'Usar solamente dos colores brillantes', icon: 'Palette', feedback: 'El contraste puede ayudar a algunas personas con baja visión, pero no responde por sí solo a la necesidad táctil expresada.' },
          { id: 'b', text: 'Texturas y relieves que se sientan con los dedos', icon: 'Hand' },
          { id: 'c', text: 'Letras más pequeñas para que quepa todo', icon: 'Type', feedback: 'Las letras impresas no se sienten al tacto.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'convivir', title: 'Ver con las manos',
          prompt: 'En tu comunidad hay personas con **discapacidad visual**: algunas son **ciegas** y otras tienen **baja visión**. Toca cada tarjeta para conocer cómo el arte puede incluirlas.' },
        { icon: 'HandHeart', body: 'Una obra puede reducir algunas barreras cuando ofrece más de una forma de percibirla y se revisa con sus posibles usuarios. Ningún recurso aislado garantiza acceso para todas las personas.', reveal: [
          { icon: 'Hand', front: 'El tacto', back: 'Las yemas de los dedos son muy sensibles: distinguen lo liso de lo rugoso, lo blando de lo duro y hasta puntitos muy pequeños.' },
          { icon: 'CircleDot', front: 'El braille', back: 'Es un sistema de lectura con **puntos en relieve**, en celdas de hasta **6 puntos**. Lo inventó el francés **Louis Braille**, que era ciego, cuando era joven.' },
          { icon: 'Map', front: 'Mapas y láminas táctiles', back: 'Representan lugares y formas con **relieve y texturas**; su utilidad depende del propósito, el diseño y la prueba con usuarios.' },
          { icon: 'MessageCircle', front: 'Pregunta, prueba y revisa', back: 'Consulta a personas con discapacidad visual, solicita su consentimiento para probar el prototipo y cambia lo que no funcione.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer', title: 'Cinco reglas del mapa táctil',
          prompt: 'Un mapa táctil no es un dibujo con cosas pegadas al azar. Sigue estas reglas. Toca cada tarjeta.' },
        { icon: 'ListChecks', body: 'Piensa siempre en **cómo se siente** cada parte, no en cómo se ve.', reveal: [
          { icon: 'Layers', front: '1. Pocas texturas', back: 'Usa **4 a 6** texturas como máximo. Muchas texturas juntas confunden a los dedos.' },
          { icon: 'Contrast', front: '2. Muy distintas', back: 'Cada textura debe sentirse **claramente diferente**: liso junto a rugoso, suave junto a áspero. Dos texturas parecidas se confunden.' },
          { icon: 'Route', front: '3. Bordes en relieve', back: 'Marca caminos y límites con **lana, pita o hilo grueso** pegado. Los dedos siguen las líneas como carreteras.' },
          { icon: 'List', front: '4. Leyenda táctil', back: 'En un costado, pega una **muestra de cada textura** con su significado (en letra grande y, si puedes, en braille).' },
          { icon: 'ShieldCheck', front: '5. Seguro y firme', back: 'Nada que **corte o pinche** (vidrio, clavos, espinas, alambre). Todo bien pegado para que no se despegue al tocar.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: la leyenda del mapa de la aldea',
          prompt: 'Mira cómo el grupo de Juan elige las texturas para el mapa de su aldea, cerca de un lago.' },
        { icon: 'Map', problem: 'El mapa debe mostrar: **el lago**, **la tierra** de las casas, **el bosque**, **la cancha** y **los caminos**. Tienen arena, papel aluminio, hojas secas, fieltro, lana gruesa y también algodón.',
          steps: [
            { text: '**Lago → papel aluminio alisado**: se siente **liso y frío**, como el agua quieta.' },
            { text: '**Tierra → arena pegada**: se siente **granulosa**, muy distinta del aluminio.', why: 'Liso junto a granuloso: el contraste ayuda a encontrar la orilla.' },
            { text: '**Bosque → hojas secas trituradas**: **crujientes y rugosas**.' },
            { text: '**Cancha → fieltro**: **suave**. Deciden **no** usar algodón, porque también es suave y se confundiría con el fieltro.', why: 'Regla 2: cada textura debe sentirse claramente diferente.' },
            { text: '**Caminos → lana gruesa pegada** en línea. Luego arman la **leyenda** con una muestra de cada material.' },
          ],
          answer: 'Cinco texturas **bien distintas** (liso, granuloso, crujiente, suave y línea en relieve) y una **leyenda táctil**.',
          tip: 'Compara cada muestra al tacto y luego solicita una prueba con consentimiento: tu experiencia no reemplaza la de otra persona.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer',
          prompt: 'Clasifica estos materiales de tu entorno según la textura que ofrecen al tacto.',
          hint: 'Compara las muestras directamente: ¿raspan, resbalan o se hunden?',
          explain: 'Tener materiales de los tres grupos te permite hacer un mapa con texturas bien distintas.' },
        { buckets: [
          { id: 'rug', label: 'Rugosa o áspera', icon: 'Mountain', color: 'var(--area-art)' },
          { id: 'lis', label: 'Lisa', icon: 'Waves', color: 'var(--area-l1)' },
          { id: 'sua', label: 'Suave o esponjosa', icon: 'Cloud', color: 'var(--area-ef)' },
        ], items: [
          { id: 't1', text: 'Arena pegada con goma', bucket: 'rug' },
          { id: 't2', text: 'Corteza de árbol', bucket: 'rug' },
          { id: 't3', text: 'Papel aluminio alisado', bucket: 'lis' },
          { id: 't4', text: 'Bolsa plástica estirada', bucket: 'lis' },
          { id: 't5', text: 'Algodón', bucket: 'sua' },
          { id: 't6', text: 'Retazo de felpa', bucket: 'sua' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer',
          prompt: 'En un mapa táctil de Guatemala, ¿qué material representa mejor el **mar liso**?',
          explain: 'El papel aluminio alisado es liso y se distingue de inmediato de la arena o la corteza de la tierra firme.' },
        { options: [
          { id: 'a', text: 'Papel aluminio alisado' },
          { id: 'b', text: 'Arena', feedback: 'La arena es granulosa: sirve mejor para la tierra o la playa.' },
          { id: 'c', text: 'Corteza de árbol', feedback: 'La corteza es rugosa: sirve mejor para montañas o bosques.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer',
          prompt: 'Revisa el plan de Carla. ¿Qué parte **no cumple** las reglas del mapa táctil?',
          explain: 'Los vidrios de colores pueden cortar. Un mapa táctil se toca con las yemas de los dedos: todo debe ser seguro.' },
        { options: [
          { id: 'a', text: 'Los ríos con lana gruesa pegada', feedback: 'Eso sí cumple: la lana marca el recorrido en relieve.' },
          { id: 'b', text: 'Los lagos con pedacitos de vidrio de colores' },
          { id: 'c', text: 'Una leyenda con una muestra de cada textura', feedback: 'Eso sí cumple: la leyenda es indispensable.' },
        ], correct: ['b'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'convivir',
          prompt: '**En casa:** crea un **mapa táctil** de tu cuarto, tu casa o el camino a tu escuela.' },
        { goal: 'Hacer un prototipo sencillo con 4 a 5 texturas, una leyenda y un plan de prueba con personas usuarias.',
          steps: [
            { title: 'Dibuja el plano', detail: 'En un cartón (de una caja), dibuja a lápiz los lugares principales: por ejemplo, tu casa, la calle, la tienda y un árbol.' },
            { title: 'Elige texturas', detail: 'Busca en tu entorno materiales seguros y bien distintos: arena, hojas secas, tela, papel aluminio, cartón corrugado, lana.' },
            { title: 'Pega y marca', detail: 'Pega cada textura con goma blanca. Marca los caminos con lana o pita. Deja secar bien.' },
            { title: 'Leyenda y prueba', detail: 'Arma la leyenda táctil. Consulta a una persona que podría usar el mapa y, si acepta, pídele realizar una tarea; registra sus observaciones y reconoce que su experiencia es propia.' },
          ],
          evidence: 'Tu mapa táctil y una nota sobre qué tan fácil fue para la otra persona recorrerlo.',
          rubric: ['Usé de 4 a 5 texturas bien distintas', 'Marqué caminos con relieve', 'Hice una leyenda táctil', 'Mi mapa es seguro y no se despega'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En un mapa táctil conviene usar muchas texturas parecidas.', answer: false, why: 'Se deben usar pocas texturas y muy distintas entre sí.' },
          { text: 'La leyenda táctil tiene un pedacito de cada textura con su significado.', answer: true },
          { text: 'El braille es un sistema de lectura con puntos en relieve.', answer: true },
          { text: 'Los colores brillantes son suficientes para que una persona ciega lea un mapa.', answer: false, why: 'Una persona ciega necesita relieve y texturas.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.1'], prompt: 'Para marcar los **caminos** de un mapa táctil, ¿qué material conviene?' },
        { options: [
          { id: 'a', text: 'Lana o pita gruesa pegada en línea' },
          { id: 'b', text: 'Una línea hecha con lápiz' },
          { id: 'c', text: 'Alambre con puntas' },
        ], correct: ['a'] },
      ),
      cierre({ areas: ['art'], cnb: ['art:3.2.1'] },
        ['Distingo texturas táctiles y visuales', 'Describo texturas con palabras precisas', 'Elijo texturas distintas y seguras para un mapa táctil'],
        ['Haré mi cacería de texturas', 'Probaré mi mapa con consentimiento y escucharé la opinión de la persona usuaria', 'Identificaré qué barreras no resuelve mi obra']),
    ],
  }),
];
