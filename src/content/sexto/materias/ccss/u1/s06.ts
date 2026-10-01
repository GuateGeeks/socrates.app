/**
 * Ciencias Sociales · Unidad 1 · Semana 6 — Grandes cambios que conectaron y dividieron al mundo.
 * Progresión: los factores que llevaron a los europeos a América (Renacimiento, imprenta, navegación,
 * comercio) → causas y consecuencias de las dos Guerras Mundiales → la Guerra Fría y su relación con el
 * conflicto armado interno de Guatemala y su impacto en la población civil.
 * Tema sensible (conflicto armado): lenguaje respetuoso, sin detalles gráficos, con invitación a conversar.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. ¿Por qué llegaron los europeos a América? ───────────────────────── */
  lesson({
    id: 's06-ccss-1',
    title: 'Por qué los europeos cruzaron el océano',
    icon: 'Sailboat',
    minutes: 15,
    gancho: 'En 1492, tres barcos cruzaron el océano Atlántico y llegaron a unas islas del Caribe. ¿Por qué no pasó cien años antes? ¿Qué había cambiado en Europa?',
    objetivos: [
      'Identificar los factores que favorecieron los viajes europeos: Renacimiento, imprenta, comercio e innovaciones de navegación',
    ],
    resumen: [
      'El Renacimiento (siglos XV y XVI) despertó en Europa el interés por observar, experimentar y explorar el mundo.',
      'La imprenta de tipos móviles de Gutenberg (hacia 1450) permitió copiar rápido libros y mapas, y así se difundieron los conocimientos.',
      'Europa quería especias, seda y oro de Asia; cuando las rutas por tierra se volvieron difíciles y caras, buscó rutas por mar. Portugal rodeó África y Castilla financió a Colón, que llegó a América en 1492.',
      'Innovaciones como la brújula, el astrolabio, la carabela y mejores mapas hicieron posibles los viajes largos. Para los pueblos originarios, la llegada europea significó conquista, enfermedades y pérdida de tierras, pero también resistencia y el inicio de una nueva sociedad mestiza.',
    ],
    media: {
      id: 's06-ccss-1-carabela', kind: 'image', title: 'A bordo de una carabela', aspect: '16:9',
      alt: 'Ilustración en corte de una carabela del siglo XV con sus velas, la tripulación, un navegante que usa un astrolabio y una brújula sobre una mesa de mapas.',
      brief: 'Ilustración en corte lateral de una carabela del siglo XV navegando en el Atlántico. Rótulos con flechas: "velas latinas triangulares: permiten navegar con viento de lado", "casco ligero y rápido", "bodega con agua, alimentos y mercancías". En cubierta, un navegante mide la altura del Sol con un astrolabio; junto a él, una mesa con una brújula y un mapa dibujado a mano. Personas genéricas, no retratos. Colores de madera y mar, estilo de libro de historia.',
    },
    steps: [
      S.ejemplo(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:6.4.4'], ambito: 'conocer', title: 'Modelo: relacionar factores y viajes',
          prompt: 'Observa cómo una necesidad comercial se relaciona con una innovación de navegación.' },
        { icon: 'Route', problem: 'Las especias de Asia eran valiosas en Europa, pero las rutas terrestres eran largas y costosas. ¿Cómo favoreció esto los viajes por mar?',
          steps: [
            { text: 'Identifico la necesidad: comerciantes y reyes buscaban una ruta más directa hacia Asia.' },
            { text: 'Identifico los medios: carabelas, brújulas, astrolabios y mejores mapas.' },
            { text: 'Relaciono los factores: el interés comercial impulsó viajes que las innovaciones hicieron posibles.' },
          ],
          answer: 'Los viajes europeos fueron favorecidos por comercio, nuevas ideas, difusión de mapas e innovaciones de navegación.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.4.4'], ambito: 'conocer', title: 'Cambios en Europa: ideas y libros',
          prompt: 'Entre los siglos XV y XVI, Europa vivió cambios que la impulsaron a explorar. Toca cada tarjeta.' },
        { icon: 'Lightbulb', body: 'Ningún hecho histórico tiene una sola causa. Los viajes fueron posibles por **varios factores** a la vez.', reveal: [
          { icon: 'Palette', front: 'El Renacimiento', back: 'Movimiento que nació en **Italia**. Valoró la observación, la ciencia, el arte y la curiosidad. Artistas y sabios como **Leonardo da Vinci** estudiaban la naturaleza y dibujaban inventos.' },
          { icon: 'BookOpen', front: 'La imprenta', back: 'Hacia **1450**, **Johannes Gutenberg** usó **tipos móviles** de metal para imprimir. Antes, cada libro se copiaba a mano. Ahora se imprimían cientos: libros de navegación y **mapas** llegaron a más gente.' },
          { icon: 'Coins', front: 'Expansión comercial', back: 'Comerciantes y reyes querían **especias, seda y oro** de Asia. Las rutas por tierra eran largas, peligrosas y caras, con muchos intermediarios; sobre todo después de **1453**, cuando el Imperio otomano tomó Constantinopla.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.4.4'], ambito: 'conocer', title: 'Innovaciones para navegar lejos',
          prompt: 'Para cruzar océanos sin ver tierra por semanas hacían falta **nuevas herramientas**. Toca cada tarjeta.',
          media: { id: 's06-ccss-1-instrumentos', kind: 'animation', title: 'Cómo se orientaba un navegante', aspect: '16:9', duration: 45,
            alt: 'Animación que muestra una brújula que siempre apunta al norte y un astrolabio con el que se mide la altura del Sol para calcular la latitud.',
            brief: 'Animación 2D de 45 s. (1) Una brújula sobre una mesa de barco: aunque el barco gire, la aguja sigue apuntando al norte; texto "La brújula indica la dirección". (2) Un navegante apunta un astrolabio al Sol del mediodía; una línea muestra el ángulo; un globo al lado marca una línea de latitud; texto "El astrolabio ayuda a calcular la latitud". (3) Una carabela con velas triangulares avanza con viento de lado. Narración en español con subtítulos. Recordar la lección de latitud de la semana 1.' } },
        { icon: 'Compass', body: 'Recuerda la **latitud** que aprendiste en la semana 1: los navegantes la calculaban midiendo la altura del Sol o de las estrellas.', reveal: [
          { icon: 'Compass', front: 'Brújula', back: 'Una aguja imantada que **siempre apunta al norte**. Se inventó en **China** y llegó a Europa. Permitía saber la dirección aun con el cielo nublado.' },
          { icon: 'Sun', front: 'Astrolabio', back: 'Instrumento para medir la **altura del Sol o de las estrellas** sobre el horizonte y así calcular la **latitud**.' },
          { icon: 'Sailboat', front: 'Carabela', back: 'Barco **ligero y rápido**, con velas triangulares que permitían navegar incluso con el viento de lado.' },
          { icon: 'Map', front: 'Mejores mapas', back: 'Cartas de navegación con costas, puertos y rumbos, copiadas en la imprenta y mejoradas con cada viaje.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.4.4'], prompt: 'Une cada factor con lo que aportó a los viajes.',
          hint: 'Piensa en para qué servía cada cosa: ideas, copiar libros, orientarse, calcular la latitud, navegar rápido.',
          explain: 'Los viajes fueron posibles por la suma de ideas nuevas, tecnología y el deseo de comerciar.' },
        { leftTitle: 'Factor', rightTitle: 'Aporte', pairs: [
          { id: 'f1', left: 'Renacimiento', leftIcon: 'Palette', right: 'Curiosidad por explorar y observar el mundo' },
          { id: 'f2', left: 'Imprenta', leftIcon: 'BookOpen', right: 'Difundir rápido libros y mapas' },
          { id: 'f3', left: 'Brújula', leftIcon: 'Compass', right: 'Saber hacia dónde está el norte' },
          { id: 'f4', left: 'Astrolabio', leftIcon: 'Sun', right: 'Calcular la latitud con los astros' },
          { id: 'f5', left: 'Carabela', leftIcon: 'Sailboat', right: 'Navegar rápido y con viento de lado' },
        ] },
      ),
      S.order(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.4.4'], ambito: 'conocer',
          prompt: 'Ordena los hechos del **más antiguo al más reciente**.',
          hint: 'Fíjate en los años: 1450, 1453, 1492, 1498, 1524.',
          explain: 'Portugal buscó la ruta rodeando África (Vasco da Gama llegó a la India en 1498); Castilla apostó por navegar hacia el oeste con Colón (1492), sin saber que había un continente en medio.' },
        { items: [
          { id: 'o1', text: 'Hacia 1450 · Gutenberg imprime con tipos móviles' },
          { id: 'o2', text: '1453 · El Imperio otomano toma Constantinopla' },
          { id: 'o3', text: '1492 · Colón llega a una isla del Caribe' },
          { id: 'o4', text: '1498 · Vasco da Gama llega a la India rodeando África' },
          { id: 'o5', text: '1524 · Los españoles, con Pedro de Alvarado, entran al territorio de Guatemala' },
        ], labels: { start: 'Más antiguo', end: 'Más reciente' } },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['ccss', 'l1'], cnb: ['ccss:6.4.4'], ambito: 'convivir', prompt: 'Un mismo hecho se puede mirar desde distintos lugares. Lee y responde.' },
        { genre: 'Texto histórico', heading: 'Dos miradas sobre 1492', passage:
          'Para muchos europeos de la época, el viaje de Colón fue un **"descubrimiento"**: encontraron tierras que no conocían y que pronto quisieron conquistar para obtener oro, tierras y personas que trabajaran para ellos.\n\nPero América no estaba vacía. Aquí vivían millones de personas de muchos pueblos, con ciudades, idiomas, calendarios y saberes propios, como los mayas en Guatemala. Para ellos, la llegada europea fue el inicio de la **conquista**: guerras, pérdida de tierras, trabajo forzado y enfermedades nuevas, como la viruela, que causaron muchísimas muertes. Pueblos como el k’iche’ y el kaqchikel **resistieron**.\n\nCon el tiempo, se mezclaron personas, idiomas, alimentos y costumbres de América, Europa y África. Por eso los historiadores hoy prefieren hablar de **encuentro y choque de culturas**, y escuchar todas las voces.',
          questions: [
            { q: '¿Por qué el texto dice que "América no estaba vacía"?', options: [
              { id: 'a', text: 'Porque aquí ya vivían millones de personas con sus propias culturas' },
              { id: 'b', text: 'Porque los europeos llevaban muchos animales' },
              { id: 'c', text: 'Porque Colón llegó con muchas personas' },
            ], correct: 'a' },
            { q: 'Para los pueblos originarios, ¿qué significó la llegada europea?', options: [
              { id: 'a', text: 'El inicio de la conquista, con guerras, pérdida de tierras y enfermedades' },
              { id: 'b', text: 'Solo un intercambio de regalos' },
              { id: 'c', text: 'No les afectó en nada' },
            ], correct: 'a' },
            { q: '¿Por qué es importante conocer las dos miradas?', options: [
              { id: 'a', text: 'Para comprender la historia completa y respetar la experiencia de todos los pueblos' },
              { id: 'b', text: 'Para decidir qué pueblo es mejor' },
              { id: 'c', text: 'No es importante: basta con una' },
            ], correct: 'a', why: 'Las Ciencias Sociales buscan comprender, escuchando varias fuentes y perspectivas.' },
          ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:6.4.4'], prompt: 'Clasifica: ¿es un factor de **ideas y conocimiento**, de **tecnología** o de **comercio y dinero**?',
          explain: 'Ideas + tecnología + interés comercial: los tres juntos explican por qué los viajes ocurrieron en ese momento.' },
        { buckets: [
          { id: 'ide', label: 'Ideas y conocimiento', icon: 'Lightbulb', color: 'var(--area-ccss)' },
          { id: 'tec', label: 'Tecnología', icon: 'Compass', color: 'var(--c-ok)' },
          { id: 'com', label: 'Comercio y dinero', icon: 'Coins', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'k1', text: 'El Renacimiento valora la observación', bucket: 'ide' },
          { id: 'k2', text: 'La carabela con velas triangulares', bucket: 'tec' },
          { id: 'k3', text: 'El deseo de comprar especias más baratas', bucket: 'com' },
          { id: 'k4', text: 'El astrolabio', bucket: 'tec' },
          { id: 'k5', text: 'Reyes que financian viajes para obtener oro', bucket: 'com' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.4.4'], prompt: '¿Qué innovación permitió **difundir rápidamente** libros y mapas en Europa?' },
        { options: [
          { id: 'a', text: 'La imprenta de tipos móviles' },
          { id: 'b', text: 'La brújula' },
          { id: 'c', text: 'El papiro' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.4.4'], prompt: '¿Cuál fue una razón comercial de los viajes europeos?' },
        { options: [
          { id: 'a', text: 'Encontrar rutas por mar hacia Asia para conseguir especias y seda' },
          { id: 'b', text: 'Vender computadoras en América' },
          { id: 'c', text: 'Aprender idiomas mayas' },
        ], correct: ['a'] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Las Guerras Mundiales ───────────────────────── */
  lesson({
    id: 's06-ccss-2',
    title: 'Las Guerras Mundiales: causas y consecuencias',
    icon: 'History',
    minutes: 15,
    gancho: 'En el siglo XX hubo dos guerras tan grandes que participaron países de casi todos los continentes. ¿Cómo empieza un conflicto así? ¿Qué aprendió el mundo después?',
    objetivos: [
      'Identificar las causas de la Primera y la Segunda Guerra Mundial',
    ],
    resumen: [
      'Primera Guerra Mundial (1914-1918). Causas: rivalidad entre potencias europeas por territorios y colonias, alianzas militares, carrera de armamento y nacionalismo. Detonante: el asesinato del heredero al trono de Austria-Hungría en Sarajevo (1914).',
      'Consecuencias de la Primera: millones de muertos, caída de imperios, nuevos países en Europa, el Tratado de Versalles (1919) y la Sociedad de Naciones.',
      'Segunda Guerra Mundial (1939-1945). Causas: la crisis económica de 1929, el resentimiento por el Tratado de Versalles, gobiernos totalitarios (nazismo en Alemania, fascismo en Italia) y su expansión. Inició cuando Alemania invadió Polonia.',
      'Consecuencias de la Segunda: decenas de millones de muertos, el Holocausto, las bombas atómicas sobre Hiroshima y Nagasaki, la creación de la ONU (1945), la Declaración Universal de los Derechos Humanos (1948) y el inicio de la Guerra Fría.',
    ],
    media: {
      id: 's06-ccss-2-linea', kind: 'diagram', title: 'Dos guerras en el siglo XX', aspect: '16:9',
      alt: 'Línea del tiempo de 1900 a 1950 con dos franjas marcadas: 1914-1918 y 1939-1945, y los hechos clave antes y después de cada guerra.',
      brief: 'Línea del tiempo horizontal de 1900 a 1950. Dos franjas grises: "Primera Guerra Mundial 1914-1918" y "Segunda Guerra Mundial 1939-1945". Hechos marcados con íconos simples: 1914 Sarajevo (detonante), 1919 Tratado de Versalles y Sociedad de Naciones, 1929 crisis económica (gráfica que cae), 1939 invasión de Polonia, 1945 fin de la guerra y fundación de la ONU (logo genérico de una paloma, no el oficial), 1948 Declaración Universal de los Derechos Humanos (pergamino). Sin imágenes de armas, soldados ni violencia. Colores sobrios.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:6.5.1'], ambito: 'conocer', title: 'La Primera Guerra Mundial (1914-1918)',
          prompt: 'A inicios del siglo XX, las grandes potencias de Europa competían por territorios, colonias y comercio. La tensión crecía. Toca cada tarjeta.' },
        { icon: 'History', body: 'Se enfrentaron dos bandos: los **Aliados** (entre ellos Francia, Reino Unido, Rusia y, desde 1917, Estados Unidos) y las **Potencias Centrales** (Alemania, Austria-Hungría y el Imperio otomano, entre otros).', reveal: [
          { icon: 'Link', front: 'Causas', back: '**Rivalidad** entre potencias por colonias y mercados, **alianzas** que obligaban a los países a apoyarse, **carrera de armamento** y **nacionalismo** extremo.' },
          { icon: 'Zap', front: 'Detonante', back: 'En **1914**, en **Sarajevo**, fue asesinado el heredero al trono de Austria-Hungría. Por las alianzas, un conflicto entre dos países arrastró a muchos otros.' },
          { icon: 'Flag', front: 'Consecuencias', back: '**Millones de muertos**, caída de imperios (el austrohúngaro, el ruso, el otomano, el alemán), nuevos países en el mapa, y el **Tratado de Versalles** (1919), que impuso duras condiciones a Alemania. Se creó la **Sociedad de Naciones** para evitar otra guerra.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.5.1'], ambito: 'conocer', title: 'La Segunda Guerra Mundial (1939-1945)',
          prompt: 'Solo 21 años después empezó una guerra todavía más grande. Toca cada tarjeta. Es un tema serio: si algo te hace sentir mal, conversa con tu familia o tu maestra.' },
        { icon: 'Globe', body: 'Se enfrentaron los **Aliados** (entre ellos Reino Unido, Francia, la Unión Soviética, Estados Unidos y China) contra el **Eje** (Alemania, Italia y Japón).', reveal: [
          { icon: 'TrendingDown', front: 'Causas', back: 'La **crisis económica de 1929** dejó a millones sin trabajo; en Alemania creció el **resentimiento por el Tratado de Versalles**; surgieron gobiernos **totalitarios** que eliminaban libertades (el **nazismo** de Hitler en Alemania, el **fascismo** en Italia) y querían conquistar territorios.' },
          { icon: 'Zap', front: 'Inicio', back: 'El 1 de septiembre de **1939**, Alemania invadió **Polonia**. Reino Unido y Francia le declararon la guerra.' },
          { icon: 'Flower', front: 'Consecuencias humanas', back: '**Decenas de millones** de muertos, muchos de ellos civiles. En el **Holocausto**, el régimen nazi persiguió y asesinó a millones de judíos y a otros grupos. En 1945, Estados Unidos lanzó **bombas atómicas** sobre Hiroshima y Nagasaki, en Japón.' },
          { icon: 'Handshake', front: 'Consecuencias para el mundo', back: 'En **1945** se fundó la **ONU** (Organización de las Naciones Unidas) para mantener la paz. En **1948** se aprobó la **Declaración Universal de los Derechos Humanos**. El mundo quedó dividido en dos bloques: empezó la **Guerra Fría**.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.5.1'], ambito: 'hacer', title: 'Ejemplo: una cadena de causas',
          prompt: 'Las consecuencias de una guerra pueden convertirse en causas de la siguiente. Mira cómo se encadenan.' },
        { icon: 'Link', problem: '¿Cómo se relaciona la Primera Guerra Mundial con la Segunda?',
          steps: [
            { text: 'La Primera Guerra termina y el **Tratado de Versalles** (1919) impone a Alemania pagar grandes sumas y perder territorios. → **Consecuencia** de la Primera.' },
            { text: 'Muchos alemanes sienten **resentimiento** y el país queda debilitado.' },
            { text: 'Llega la **crisis económica de 1929**: desempleo y pobreza en muchos países.', why: 'Cuando la gente está desesperada, algunos líderes prometen soluciones rápidas y culpan a otros.' },
            { text: 'Crece el **nazismo**, que elimina libertades y busca conquistar territorios. → **Causa** de la Segunda Guerra.' },
          ],
          answer: 'Una consecuencia de la Primera Guerra (el trato a Alemania en Versalles), junto con la crisis de 1929, se convirtió en **causa** de la Segunda.',
          tip: 'Por eso la ONU buscó después resolver los conflictos con diálogo y no con castigos que dejen heridas abiertas.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.5.1'], ambito: 'conocer',
          prompt: 'Para entender la historia, hay que distinguir **causas** (por qué pasó) y **consecuencias** (qué pasó después). Practica con un caso cotidiano: en el recreo, dos grupos se pelearon por la cancha.',
          explain: 'Las causas vienen **antes** y explican el hecho; las consecuencias vienen **después**. Con las guerras mundiales usaremos esta misma lupa.' },
        { buckets: [
          { id: 'ca', label: 'Causa', icon: 'ArrowRight', color: 'var(--c-maiz-strong)' },
          { id: 'co', label: 'Consecuencia', icon: 'Flag', color: 'var(--area-ccss)' },
        ], items: [
          { id: 'e1', text: 'Los dos grupos querían la cancha a la misma hora', bucket: 'ca' },
          { id: 'e2', text: 'La directora creó un horario para usar la cancha', bucket: 'co' },
          { id: 'e3', text: 'Nadie habló antes para ponerse de acuerdo', bucket: 'ca' },
          { id: 'e4', text: 'Dos niños terminaron en la enfermería', bucket: 'co' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.5.1'], prompt: '¿Causa o consecuencia de las Guerras Mundiales?',
          hint: 'Pregúntate: ¿esto ocurrió antes y ayudó a que empezara la guerra, o ocurrió después por culpa de la guerra?',
          explain: 'La crisis de 1929 y las alianzas vinieron antes (causas); la ONU y la Declaración de los Derechos Humanos vinieron después (consecuencias).' },
        { buckets: [
          { id: 'ca', label: 'Causa', icon: 'Link', color: 'var(--c-maiz-strong)' },
          { id: 'co', label: 'Consecuencia', icon: 'Flag', color: 'var(--area-ccss)' },
        ], items: [
          { id: 'g1', text: 'Alianzas militares entre potencias europeas', bucket: 'ca' },
          { id: 'g2', text: 'Creación de la ONU en 1945', bucket: 'co' },
          { id: 'g3', text: 'La crisis económica de 1929', bucket: 'ca' },
          { id: 'g4', text: 'La Declaración Universal de los Derechos Humanos', bucket: 'co' },
          { id: 'g5', text: 'Gobiernos totalitarios que querían conquistar territorios', bucket: 'ca' },
          { id: 'g6', text: 'La caída de varios imperios', bucket: 'co', feedback: 'Al terminar la Primera Guerra desaparecieron los imperios austrohúngaro, ruso, otomano y alemán.' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:6.5.1'], ambito: 'conocer',
          prompt: 'Ordena los hechos del **más antiguo al más reciente**.',
          explain: '1914 → 1919 → 1929 → 1939 → 1945. Entre las dos guerras pasaron solo 21 años.' },
        { items: [
          { id: 't1', text: '1914 · Empieza la Primera Guerra Mundial' },
          { id: 't2', text: '1919 · Tratado de Versalles' },
          { id: 't3', text: '1929 · Crisis económica mundial' },
          { id: 't4', text: '1939 · Alemania invade Polonia y empieza la Segunda Guerra' },
          { id: 't5', text: '1945 · Termina la guerra y se funda la ONU' },
        ], labels: { start: 'Más antiguo', end: 'Más reciente' } },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:6.5.1'], ambito: 'ser',
          prompt: 'Después de dos guerras terribles, los países crearon la **ONU** y aprobaron la **Declaración Universal de los Derechos Humanos**. ¿Qué lección querían dejar?',
          explain: 'La lección fue que los conflictos entre países deben resolverse con **diálogo y acuerdos**, y que **toda persona** tiene derechos que ningún gobierno puede quitarle.' },
        { options: [
          { id: 'a', text: 'Que los conflictos deben resolverse con diálogo y que todas las personas tienen derechos' },
          { id: 'b', text: 'Que el país con más armas siempre tiene la razón', feedback: 'Precisamente, la ONU nació para que la fuerza no decida los conflictos.' },
          { id: 'c', text: 'Que cada país debe aislarse de los demás', feedback: 'La ONU buscó lo contrario: que los países cooperen y dialoguen.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.5.1'], prompt: '¿Qué organización se creó en 1945 para mantener la paz mundial?' },
        { options: [
          { id: 'a', text: 'La Organización de las Naciones Unidas (ONU)' },
          { id: 'b', text: 'La Sociedad de Naciones' },
          { id: 'c', text: 'El Imperio otomano' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.5.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La crisis económica de 1929 fue una de las causas de la Segunda Guerra Mundial.', answer: true },
          { text: 'La Primera Guerra Mundial ocurrió entre 1939 y 1945.', answer: false, why: 'La Primera fue de 1914 a 1918; la Segunda, de 1939 a 1945.' },
          { text: 'La Declaración Universal de los Derechos Humanos es una consecuencia de la Segunda Guerra Mundial.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Guerra Fría y conflicto armado interno ───────────────────────── */
  lesson({
    id: 's06-ccss-3',
    title: 'La Guerra Fría y el conflicto armado en Guatemala',
    icon: 'Flower2',
    minutes: 15,
    gancho: '¿Has escuchado a tus abuelos hablar de "los tiempos del conflicto" o de "la violencia"? ¿Qué pasó en Guatemala y por qué es importante recordarlo?',
    objetivos: [
      'Relacionar la Guerra Fría con el conflicto armado guatemalteco',
    ],
    resumen: [
      'La Guerra Fría (1945-1991) fue la rivalidad entre Estados Unidos (capitalismo) y la Unión Soviética (comunismo). No se enfrentaron directamente, pero apoyaron a gobiernos y grupos armados en otros países.',
      'En ese contexto, en 1954 fue derrocado el gobierno de Jacobo Árbenz con apoyo de Estados Unidos, y en 1960 inició el conflicto armado interno. También hubo causas internas: la desigualdad en el acceso a la tierra, la exclusión de los pueblos indígenas y la falta de participación política.',
      'Se enfrentaron el ejército del Estado y grupos guerrilleros, pero quienes más sufrieron fueron las personas civiles, sobre todo las comunidades mayas del área rural: muertes, desapariciones, desplazamiento y miedo.',
      'El conflicto terminó con la firma del Acuerdo de Paz Firme y Duradera, el 29 de diciembre de 1996. La Comisión para el Esclarecimiento Histórico documentó lo sucedido. Recordar honra a las víctimas y ayuda a que no se repita.',
    ],
    media: {
      id: 's06-ccss-3-linea', kind: 'diagram', title: 'Línea del tiempo: del mundo a Guatemala', aspect: '16:9',
      alt: 'Línea del tiempo con dos carriles: arriba hechos mundiales de la Guerra Fría, abajo hechos de Guatemala hasta la firma de la paz en 1996.',
      brief: 'Línea del tiempo horizontal de 1944 a 2000 con dos carriles. Carril "Mundo": 1945 fin de la Segunda Guerra Mundial e inicio de la Guerra Fría; 1991 disolución de la Unión Soviética. Carril "Guatemala": 1944 Revolución de Octubre; 1954 derrocamiento del gobierno de Jacobo Árbenz; 1960 inicio del conflicto armado interno; 1985 nueva Constitución; 1996 Acuerdo de Paz Firme y Duradera (con una paloma blanca estilizada); 1999 informe "Guatemala, memoria del silencio". Colores sobrios, sin imágenes de armas ni de violencia.',
    },
    steps: [
      S.ejemplo(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:6.5.5'], ambito: 'conocer', title: 'Modelo: reconocer una rivalidad indirecta',
          prompt: 'Mira cómo se reconoce la relación central de la Guerra Fría.' },
        { icon: 'Globe', problem: 'Dos potencias rivales no se enfrentan directamente, pero apoyan bandos opuestos en conflictos de otros países.',
          steps: [
            { text: 'Identifico a las potencias rivales: Estados Unidos y la Unión Soviética.' },
            { text: 'Compruebo que no hubo una guerra directa entre ellas.' },
            { text: 'Relaciono su competencia con apoyos políticos, económicos o militares en otros países.' },
          ],
          answer: 'Es una característica de la Guerra Fría: rivalidad mundial y conflictos indirectos entre 1945 y 1991.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.5.5'], ambito: 'conocer', title: 'Una guerra "fría"',
          prompt: 'Después de la Segunda Guerra Mundial, el mundo quedó dividido en **dos bloques** que competían por su influencia. Toca cada tarjeta.',
          media: { id: 's06-ccss-3-bloques', kind: 'image', title: 'El mundo en dos bloques', aspect: '16:9',
            alt: 'Mapamundi con países coloreados en dos tonos: el bloque de Estados Unidos y el bloque de la Unión Soviética; los países no alineados en gris.',
            brief: 'Mapamundi simplificado de la época de la Guerra Fría (hacia 1960) con dos colores suaves: azul para Estados Unidos y sus aliados, rojo claro para la Unión Soviética y sus aliados; países no alineados en gris. Leyenda sencilla con los dos bloques y "no alineados". Una flecha discreta señala Centroamérica. Sin banderas ni símbolos militares.' } },
        { icon: 'Globe', body: 'Se llamó **"fría"** porque Estados Unidos y la Unión Soviética **no se enfrentaron directamente**, pero apoyaron a gobiernos y grupos armados en otros países, donde sí hubo guerras "calientes".', reveal: [
          { icon: 'Calendar', front: '¿Cuándo?', back: 'Desde **1945** hasta **1991**, cuando se disolvió la Unión Soviética.' },
          { icon: 'Users', front: '¿Quiénes?', back: '**Estados Unidos** (capitalismo: propiedad privada y libre mercado) y la **Unión Soviética** (comunismo: el Estado controla la economía), con sus aliados.' },
          { icon: 'Map', front: '¿Dónde?', back: 'En muchos lugares: Corea, Vietnam, Cuba, Centroamérica y África. América Latina era vista por Estados Unidos como su **zona de influencia**.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.5.5'], ambito: 'conocer', title: 'Guatemala en tiempos de la Guerra Fría',
          prompt: 'El conflicto guatemalteco tuvo **causas internas** y un **contexto mundial**. Toca cada tarjeta, en orden.' },
        { icon: 'MapPin', body: 'Un conflicto casi nunca tiene una sola causa. Los historiadores buscan **las internas** (del propio país) y **las externas** (del mundo).', reveal: [
          { icon: 'Sprout', front: '1944-1954', back: 'Tras la **Revolución de Octubre de 1944**, hubo gobiernos electos que hicieron reformas. El gobierno de **Jacobo Árbenz** repartió tierras que no se cultivaban (reforma agraria).' },
          { icon: 'Globe', front: '1954', back: 'Con apoyo de **Estados Unidos**, que temía la influencia comunista en plena Guerra Fría, fue **derrocado** el gobierno de Árbenz. Siguieron gobiernos, en su mayoría, militares.' },
          { icon: 'Scale', front: 'Causas internas', back: '**Desigualdad** en el acceso a la tierra, **pobreza**, **exclusión** de los pueblos indígenas y **falta de participación política**: muchas personas no podían expresar sus demandas de forma pacífica.' },
          { icon: 'CalendarDays', front: '1960-1996', back: 'Se formaron grupos **guerrilleros** que se enfrentaron al **ejército** del Estado. Fue el **conflicto armado interno**, que duró **36 años**.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['ccss', 'l1'], cnb: ['ccss:6.5.6', 'ccss:6.5.5'], ambito: 'conocer',
          prompt: 'Lee con atención y respeto. Es un tema serio: si algo te hace sentir triste o tienes preguntas, conversa con tu familia o tu maestra.' },
        { genre: 'Texto informativo', heading: 'Lo que dejó el conflicto armado', passage:
          'Durante el conflicto armado interno se enfrentaron el ejército del Estado y grupos guerrilleros. Pero quienes más sufrieron fueron las personas que no participaban en la guerra: la **población civil**.\n\nMuchas familias perdieron a sus seres queridos; otras tuvieron que huir de sus comunidades y algunas se refugiaron en México. Aldeas enteras fueron destruidas. Las **comunidades mayas del área rural** fueron las más afectadas. También se perdió la confianza entre vecinos y muchas personas vivieron con miedo durante años.\n\nDespués de la firma de la paz, la **Comisión para el Esclarecimiento Histórico** escuchó a miles de testigos. En 1999 presentó su informe "Guatemala, memoria del silencio". Concluyó que hubo más de 200,000 personas muertas o desaparecidas, que la gran mayoría de las violaciones a los derechos humanos fueron cometidas por fuerzas del Estado, y que la guerrilla también cometió abusos.\n\nConocer esta historia no es para odiar a nadie. Es para **honrar a las víctimas**, entender el valor de los derechos humanos y aprender a resolver los conflictos con diálogo.',
          questions: [
            { q: '¿Quiénes fueron los más afectados por el conflicto, según el texto?', options: [
              { id: 'a', text: 'La población civil, sobre todo las comunidades mayas del área rural' },
              { id: 'b', text: 'Solo los soldados' },
              { id: 'c', text: 'Los países de Europa' },
            ], correct: 'a' },
            { q: '¿Qué hizo la Comisión para el Esclarecimiento Histórico?', options: [
              { id: 'a', text: 'Escuchó a testigos y escribió un informe sobre lo que pasó' },
              { id: 'b', text: 'Organizó las elecciones de 1985' },
              { id: 'c', text: 'Firmó un tratado con la Unión Soviética' },
            ], correct: 'a' },
            { q: 'Según el último párrafo, ¿para qué sirve conocer esta historia?', options: [
              { id: 'a', text: 'Para honrar a las víctimas y aprender a resolver conflictos con diálogo' },
              { id: 'b', text: 'Para buscar culpables entre los compañeros' },
              { id: 'c', text: 'Para olvidar lo que pasó' },
            ], correct: 'a', why: 'La memoria histórica ayuda a que estos hechos no se repitan.' },
          ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.5.6'], ambito: 'conocer',
          prompt: 'Evalúa el impacto: ¿cada situación fue un **efecto del conflicto en la sociedad civil** o un **paso hacia la paz y la memoria**?',
          hint: 'Un efecto del conflicto es un daño que sufrió la población. Un paso hacia la paz busca reparar, recordar o dialogar.',
          explain: 'Evaluar un conflicto es mirar sus daños y también lo que la sociedad hizo para salir de él.' },
        { buckets: [
          { id: 'ef', label: 'Efecto en la sociedad civil', icon: 'CloudRain', color: 'var(--c-maiz-strong)' },
          { id: 'pz', label: 'Paso hacia la paz y la memoria', icon: 'Flower2', color: 'var(--c-ok)' },
        ], items: [
          { id: 'i1', text: 'Familias desplazadas que huyeron de sus aldeas', bucket: 'ef' },
          { id: 'i2', text: 'La firma del Acuerdo de Paz Firme y Duradera en 1996', bucket: 'pz' },
          { id: 'i3', text: 'Personas refugiadas en México', bucket: 'ef' },
          { id: 'i4', text: 'Un informe que escucha a las víctimas y documenta lo ocurrido', bucket: 'pz' },
          { id: 'i5', text: 'Miedo y desconfianza entre vecinos durante años', bucket: 'ef' },
          { id: 'i6', text: 'Comunidades que construyen monumentos de la memoria', bucket: 'pz' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:6.5.5'], ambito: 'conocer',
          prompt: 'Ordena estos hechos del **más antiguo al más reciente**.',
          explain: 'La Guerra Fría fue el contexto mundial (1945-1991); el conflicto guatemalteco (1960-1996) terminó con la firma de la paz.' },
        { items: [
          { id: 'h1', text: '1945 · Termina la Segunda Guerra Mundial y empieza la Guerra Fría' },
          { id: 'h2', text: '1954 · Derrocan al gobierno de Jacobo Árbenz' },
          { id: 'h3', text: '1960 · Inicia el conflicto armado interno' },
          { id: 'h4', text: '1991 · Se disuelve la Unión Soviética' },
          { id: 'h5', text: '1996 · Se firma el Acuerdo de Paz Firme y Duradera' },
        ], labels: { start: 'Más antiguo', end: 'Más reciente' } },
      ),
      S.write(
        { fase: 'aplicar', areas: ['ccss', 'l1'], cnb: ['ccss:6.5.6'], ambito: 'ser',
          prompt: 'Evalúa con tus palabras: ¿la violencia armada resolvió los problemas de desigualdad y exclusión que había en Guatemala? Explica **por qué** y di **qué camino** crees que sí ayuda a resolver los problemas de un país.' },
        { minWords: 30, placeholder: 'Yo creo que...', model: 'Yo creo que la violencia armada no resolvió los problemas, porque causó miles de muertes y desplazamientos, y la mayoría de las víctimas fueron personas civiles que no participaban en la guerra. Muchas comunidades quedaron más pobres y con miedo. El camino que sí ayuda es el diálogo, respetar los derechos humanos y que todas las personas puedan participar y opinar sin miedo.',
          rubric: ['Doy una respuesta clara (sí o no)', 'Explico el impacto en la población civil', 'Propongo un camino pacífico', 'Escribo con respeto hacia las víctimas'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.5.5', 'ccss:6.5.6'], prompt: '¿Cuál afirmación relaciona correctamente la Guerra Fría con el conflicto armado interno?' },
        { options: [
          { id: 'a', text: 'La rivalidad entre Estados Unidos y la Unión Soviética influyó en el conflicto, que tuvo también causas internas y afectó sobre todo a la población civil' },
          { id: 'b', text: 'La Guerra Fría fue una batalla directa entre Guatemala y la Unión Soviética' },
          { id: 'c', text: 'El conflicto armado interno terminó en 1945' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.5.5', 'ccss:6.5.6'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'El conflicto armado interno de Guatemala duró de 1960 a 1996.', answer: true },
          { text: 'La Guerra Fría se llamó así porque ocurrió en países con mucha nieve.', answer: false, why: 'Se llamó "fría" porque las dos potencias no se enfrentaron directamente.' },
          { text: 'Las comunidades mayas del área rural fueron de las más afectadas por la violencia.', answer: true },
        ] },
      ),
      cierre({ areas: ['ccss'], cnb: [] }, ['Explico qué factores llevaron a los europeos a América', 'Distingo causas y consecuencias de las Guerras Mundiales', 'Relaciono la Guerra Fría con el conflicto armado interno'],
        ['Preguntaré con respeto a una persona mayor qué recuerda de la firma de la paz', 'Resolveré un desacuerdo esta semana con diálogo']),
    ],
  }),
];
