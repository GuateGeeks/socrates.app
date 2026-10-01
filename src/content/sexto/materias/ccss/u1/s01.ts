/**
 * Ciencias Sociales · Unidad 1 · Semana 1 — Mi lugar en el planeta.
 * Progresión: ubicar lugares con latitud y longitud → cómo la latitud y la altitud deciden el
 * clima y los ecosistemas → fenómenos naturales que ponen en riesgo a la población y cómo prepararnos.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Latitud y longitud ───────────────────────── */
  lesson({
    id: 's01-ccss-1',
    title: 'Latitud y longitud: la dirección de cada lugar',
    icon: 'Globe',
    minutes: 14,
    gancho: 'Tu casa tiene una dirección para que el cartero la encuentre. ¿Cómo le darías la "dirección" de Guatemala a alguien que está al otro lado del mundo?',
    objetivos: [
      'Reconocer el ecuador, el meridiano de Greenwich, los paralelos y los meridianos',
      'Explicar qué miden la latitud y la longitud',
      'Ubicar un punto en un mapa cuadriculado con sus coordenadas geográficas',
    ],
    resumen: [
      'Los paralelos son líneas imaginarias horizontales; el más importante es el ecuador (0°), que divide la Tierra en hemisferio norte y hemisferio sur.',
      'Los meridianos son líneas imaginarias que van de polo a polo; el meridiano de Greenwich (0°) divide la Tierra en hemisferio este (oriente) y hemisferio oeste (occidente).',
      'La latitud es la distancia en grados desde el ecuador hacia el norte o el sur (de 0° a 90°). La longitud es la distancia en grados desde Greenwich hacia el este o el oeste (de 0° a 180°).',
      'Guatemala está aproximadamente entre los 13° y 18° de latitud norte y entre los 88° y 92° de longitud oeste.',
    ],
    media: {
      id: 's01-ccss-1-red', kind: 'animation', title: 'La red de líneas imaginarias', aspect: '16:9', duration: 45,
      alt: 'Un globo terráqueo gira; aparecen el ecuador y los paralelos en azul, luego Greenwich y los meridianos en naranja, y finalmente un punto se ubica sobre Guatemala.',
      brief: 'Animación 2D de 45 s. Un globo terráqueo gira despacio. (1) Aparece el ecuador en azul con la etiqueta "Ecuador 0°" y luego otros paralelos cada 30° (30° N, 60° N, 30° S, 60° S). (2) Aparece el meridiano de Greenwich en naranja "0°" y meridianos cada 30° hacia el este y el oeste. (3) Una lupa se acerca a Centroamérica y un punto marca Guatemala con la leyenda "aprox. 15° N, 90° O". Narración en español: "Latitud: cuánto al norte o al sur. Longitud: cuánto al este o al oeste." Subtítulos. Colores planos, sin banderas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:1.2.1'], ambito: 'conocer', title: 'Líneas que no se ven, pero sirven',
          prompt: 'Para ubicar lugares, los geógrafos dibujan sobre la Tierra una **red de líneas imaginarias**. No existen en el suelo: están en mapas y globos. Toca cada tarjeta.',
          media: { id: 's01-ccss-1-hemisferios', kind: 'diagram', title: 'Cuatro hemisferios', aspect: '16:9',
            alt: 'Dos globos: el primero cortado por el ecuador en norte y sur; el segundo cortado por el meridiano de Greenwich en este y oeste. Guatemala marcada en norte y oeste.',
            brief: 'Diagrama con dos globos terráqueos lado a lado. Globo 1: el ecuador en azul grueso; mitad superior rotulada "Hemisferio norte" y mitad inferior "Hemisferio sur". Globo 2: el meridiano de Greenwich en naranja grueso; mitad izquierda "Hemisferio oeste (occidente)" y mitad derecha "Hemisferio este (oriente)". En ambos, un punto rojo pequeño sobre Guatemala con la etiqueta "Guatemala". Fondo blanco, textos grandes.' } },
        { icon: 'Globe', body: 'Guatemala está en el hemisferio **norte** (arriba del ecuador) y en el hemisferio **oeste** (a la izquierda de Greenwich).', reveal: [
          { icon: 'Minus', front: 'Paralelos', back: 'Círculos **horizontales** que rodean la Tierra. El más largo es el **ecuador (0°)**. Los paralelos llegan hasta 90° en cada polo.' },
          { icon: 'Circle', front: 'Ecuador', back: 'Divide la Tierra en **hemisferio norte** y **hemisferio sur**. Pasa por países como Ecuador, Colombia y Brasil.' },
          { icon: 'Slash', front: 'Meridianos', back: 'Semicírculos que van **de polo a polo**. Todos se juntan en el Polo Norte y en el Polo Sur.' },
          { icon: 'MapPin', front: 'Meridiano de Greenwich', back: 'Es el meridiano **0°**. Pasa por Greenwich, en Londres (Inglaterra), y divide la Tierra en **este** y **oeste**.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:1.2.1'], ambito: 'conocer',
          prompt: 'En una sala de cine, tu boleto dice **"Fila F, asiento 12"**. ¿Por qué necesitas **dos** datos para encontrar tu lugar?',
          explain: 'Con un solo dato habría muchos lugares posibles. Con **dos datos que se cruzan** hay un solo lugar. La Tierra funciona igual: usamos **latitud** y **longitud**.' },
        { options: [
          { id: 'a', text: 'Porque la fila dice qué tan adelante y el asiento dice qué tan a un lado: juntos marcan un solo lugar', icon: 'Target' },
          { id: 'b', text: 'Porque así el boleto se ve más bonito', icon: 'Sparkles', feedback: 'No es por adorno: con solo "fila F" habría muchos asientos posibles.' },
          { id: 'c', text: 'No hace falta: con la fila es suficiente', icon: 'X', feedback: 'En la fila F hay muchos asientos. Necesitas el número para saber cuál es el tuyo.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:1.2.1'], prompt: 'Clasifica cada descripción: ¿habla de un **paralelo** o de un **meridiano**?',
          hint: 'Los paralelos son horizontales y nunca se tocan. Los meridianos van de un polo al otro y se juntan en los polos.',
          explain: 'Paralelos: horizontales, miden la latitud, el principal es el ecuador. Meridianos: de polo a polo, miden la longitud, el principal es Greenwich.' },
        { buckets: [
          { id: 'par', label: 'Paralelo', icon: 'Minus', color: 'var(--area-ccss)' },
          { id: 'mer', label: 'Meridiano', icon: 'Slash', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'p1', text: 'El ecuador', bucket: 'par' },
          { id: 'p2', text: 'Greenwich', bucket: 'mer' },
          { id: 'p3', text: 'Línea que va del Polo Norte al Polo Sur', bucket: 'mer' },
          { id: 'p4', text: 'Círculo horizontal que rodea la Tierra', bucket: 'par' },
          { id: 'p5', text: 'Se usa para medir la latitud', bucket: 'par', feedback: 'La latitud se cuenta desde el ecuador, recorriendo los paralelos hacia el norte o el sur.' },
          { id: 'p6', text: 'Se usa para medir la longitud', bucket: 'mer' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:1.2.1'], ambito: 'conocer', title: 'Latitud y longitud',
          prompt: 'Las **coordenadas geográficas** son dos números en **grados (°)** que dicen dónde está un lugar. Toca cada tarjeta.' },
        { icon: 'Compass', body: 'Se escriben así: **15° N, 90° O**. Primero la latitud (con N o S) y luego la longitud (con E u O).', reveal: [
          { icon: 'ArrowUpDown', front: 'Latitud', back: 'Cuántos grados está un lugar **al norte (N) o al sur (S) del ecuador**. Va de 0° (ecuador) a 90° (polos).' },
          { icon: 'ArrowLeftRight', front: 'Longitud', back: 'Cuántos grados está un lugar **al este (E) o al oeste (O) de Greenwich**. Va de 0° a 180°.' },
          { icon: 'MapPin', front: 'Guatemala', back: 'Está aproximadamente entre **13° y 18° N** y entre **88° y 92° O**. La capital queda cerca de **15° N, 90° O**.' },
          { icon: 'AlertTriangle', front: 'Error frecuente', back: 'Escribir solo "15°" no basta: **15° N** y **15° S** son lugares muy lejanos. Siempre di la dirección.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:1.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: leer un mapa cuadriculado',
          prompt: 'En los mapas escolares a veces se usa una **cuadrícula**. Supongamos que en este mapa **cada cuadro mide 10°**: el eje horizontal es el ecuador y el vertical es Greenwich.' },
        { icon: 'Map', problem: 'Un barco está **3 cuadros a la izquierda** de Greenwich y **2 cuadros arriba** del ecuador. ¿Cuáles son sus coordenadas?',
          steps: [
            { text: 'Arriba del ecuador es **norte**. 2 cuadros × 10° = **20° N**.', why: 'La latitud se cuenta hacia arriba (N) o hacia abajo (S) desde el ecuador.' },
            { text: 'A la izquierda de Greenwich es **oeste**. 3 cuadros × 10° = **30° O**.', why: 'La longitud se cuenta hacia la derecha (E) o la izquierda (O) desde Greenwich.' },
            { text: 'Se escribe primero la latitud y luego la longitud: **20° N, 30° O**.' },
            { text: 'En la cuadrícula del plano, ese punto es **(−3, 2)**: x negativa porque va al oeste, y positiva porque va al norte.' },
          ],
          answer: 'El barco está en **20° N, 30° O**.',
          tip: 'Truco: norte y este son como los números positivos del plano; sur y oeste, como los negativos.' },
      ),
      S.coord(
        { fase: 'construir', areas: ['ccss', 'mat'], cnb: ['ccss:1.2.1'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda. En este mapa cuadriculado **cada cuadro = 10°**. Coloca la lancha en **30° N, 20° E**.',
          hint: 'Este = a la derecha (x positiva): 20° son 2 cuadros. Norte = arriba (y positiva): 30° son 3 cuadros.',
          explain: '20° E → x = 2; 30° N → y = 3. El punto es (2, 3).' },
        { range: { xmin: -5, xmax: 5, ymin: -4, ymax: 4 }, task: { kind: 'place', x: 2, y: 3, emoji: '🚤', label: 'la lancha' } },
      ),
      S.coord(
        { fase: 'aplicar', areas: ['ccss', 'mat'], cnb: ['ccss:1.2.1'], ambito: 'hacer',
          prompt: 'Mismo mapa (cada cuadro = 10°). Una estación científica está en **20° S, 40° O**. Colócala.',
          explain: '40° O → 4 cuadros a la izquierda (x = −4). 20° S → 2 cuadros abajo (y = −2). El punto es (−4, −2).' },
        { range: { xmin: -5, xmax: 5, ymin: -4, ymax: 4 }, task: { kind: 'place', x: -4, y: -2, emoji: '🏕️', label: 'la estación' } },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:1.2.1'], ambito: 'conocer',
          prompt: 'Un lugar está en **0° de latitud**. ¿Qué sabemos seguro de él?',
          explain: 'Latitud 0° significa que está **sobre el ecuador**. Su longitud puede ser cualquiera: por eso hay muchos lugares con latitud 0°.' },
        { options: [
          { id: 'a', text: 'Está sobre el ecuador' },
          { id: 'b', text: 'Está en el Polo Norte', feedback: 'El Polo Norte está a 90° N, lo más lejos posible del ecuador.' },
          { id: 'c', text: 'Está en Greenwich', feedback: 'Greenwich es la longitud 0°, no la latitud 0°.' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:1.2.1'], prompt: '¿Verdadero o falso? Piensa en dónde está Guatemala.',
          explain: 'Guatemala está al norte del ecuador y al oeste de Greenwich; por eso sus coordenadas llevan N y O.' },
        { statements: [
          { text: 'Guatemala está en el hemisferio norte.', answer: true },
          { text: 'Guatemala está en el hemisferio este.', answer: false, why: 'Está a la izquierda (al oeste) del meridiano de Greenwich.' },
          { text: 'La longitud de Guatemala se escribe con la letra O (oeste).', answer: true },
          { text: 'Si un lugar está en 15° S, está al norte del ecuador.', answer: false, why: 'La S significa sur: está debajo del ecuador.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.2.1'], prompt: '¿Qué mide la **longitud**?' },
        { options: [
          { id: 'a', text: 'La distancia en grados al este o al oeste del meridiano de Greenwich' },
          { id: 'b', text: 'La distancia en grados al norte o al sur del ecuador' },
          { id: 'c', text: 'La altura de un lugar sobre el nivel del mar' },
        ], correct: ['a'] },
      ),
      S.coord(
        { fase: 'comprobar', areas: ['ccss', 'mat'], cnb: ['ccss:1.2.1'], prompt: 'Cada cuadro = 10°. Coloca el avión en **10° N, 30° O**.' },
        { range: { xmin: -5, xmax: 5, ymin: -4, ymax: 4 }, task: { kind: 'place', x: -3, y: 1, emoji: '✈️', label: 'el avión' } },
      ),
    ],
  }),

  /* ───────────────────────── 2. Latitud, altitud, clima y ecosistemas ───────────────────────── */
  lesson({
    id: 's01-ccss-2',
    title: 'Zonas climáticas, altitud y ecosistemas',
    icon: 'MountainSnow',
    minutes: 15,
    gancho: 'Quetzaltenango y Puerto San José están casi a la misma latitud. ¿Por qué en uno usas chumpa y en el otro buscas sombra?',
    objetivos: [
      'Relacionar la latitud con las zonas climáticas del mundo',
      'Explicar cómo la altitud cambia la temperatura (pisos térmicos)',
      'Reconocer los grandes ecosistemas de los continentes',
    ],
    resumen: [
      'Por la latitud, la Tierra tiene tres grandes zonas climáticas: cálida o tropical (entre los trópicos), templadas y frías o polares.',
      'La altitud es la altura sobre el nivel del mar. Mientras más alto, más frío: la temperatura baja unos 6 °C por cada 1,000 metros.',
      'En Guatemala hay pisos térmicos: tierras cálidas (costas y Petén), templadas (como la capital) y frías (como Quetzaltenango y el altiplano).',
      'El clima decide qué ecosistema hay en cada lugar: selva tropical, sabana, desierto, bosque templado, taiga, tundra, arrecife y otros.',
    ],
    media: {
      id: 's01-ccss-2-zonas', kind: 'diagram', title: 'Zonas climáticas de la Tierra', aspect: '4:3',
      alt: 'Globo terráqueo con franjas de colores: roja entre los trópicos, verde en las zonas templadas y azul en los polos, con las líneas y latitudes rotuladas.',
      brief: 'Diagrama de un globo terráqueo de frente con franjas horizontales coloreadas: zona cálida o tropical (naranja) entre el Trópico de Cáncer (23.5° N) y el Trópico de Capricornio (23.5° S); zonas templadas (verde) entre los trópicos y los círculos polares (66.5°); zonas frías o polares (azul claro) más allá de los círculos polares. Rotular cada línea con su nombre y latitud. Rayos de Sol entrando casi verticales en el ecuador y muy inclinados en los polos. Un punto marca Guatemala dentro de la zona cálida.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:1.2.1'], ambito: 'conocer', title: 'La latitud y las zonas climáticas',
          prompt: 'La Tierra es redonda, así que los rayos del Sol **no llegan igual** a todas partes. Cerca del ecuador llegan casi directos y calientan más; cerca de los polos llegan inclinados y calientan menos. Toca cada tarjeta.' },
        { icon: 'Sun', body: 'Dos paralelos marcan la zona más cálida: el **Trópico de Cáncer** (unos 23.5° N) y el **Trópico de Capricornio** (unos 23.5° S).', reveal: [
          { icon: 'Sun', front: 'Zona cálida o tropical', back: 'Entre los dos trópicos. Hace calor casi todo el año. Guatemala está aquí, por eso no tenemos invierno con nieve: tenemos **época seca** y **época lluviosa**.' },
          { icon: 'Leaf', front: 'Zonas templadas', back: 'Entre los trópicos y los círculos polares. Tienen **cuatro estaciones**: primavera, verano, otoño e invierno. Ejemplo: gran parte de Europa.' },
          { icon: 'Snowflake', front: 'Zonas frías o polares', back: 'Más allá de los círculos polares (unos 66.5°). Muy frías casi todo el año. Ejemplo: la Antártida.' },
        ] },
      ),
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:1.2.1'], ambito: 'conocer', title: 'La altitud: más alto, más frío',
          prompt: 'La **altitud** es la altura de un lugar **sobre el nivel del mar** (msnm). Al subir una montaña, el aire es más delgado y guarda menos calor: la temperatura baja, en promedio, **unos 6 °C por cada 1,000 metros**.',
          media: { id: 's01-ccss-2-pisos', kind: 'diagram', title: 'Pisos térmicos de Guatemala', aspect: '16:9',
            alt: 'Corte de una montaña de Guatemala desde la costa del Pacífico hasta un volcán, con tres franjas: cálida abajo, templada en medio y fría arriba, con lugares de ejemplo.',
            brief: 'Perfil lateral de Guatemala de sur a norte: costa del Pacífico al nivel del mar, bocacosta, altiplano y un volcán. Tres franjas de color: tierra cálida (0 a 1,000 m aprox., naranja) con Puerto San José y una palmera; tierra templada (1,000 a 2,000 m aprox., verde) con la Ciudad de Guatemala (unos 1,500 m) y un cafetal; tierra fría (más de 2,000 m, azul) con Quetzaltenango (unos 2,330 m) y pinos. Un termómetro al lado muestra que la temperatura baja al subir. Rótulos grandes; alturas con "aprox.".' } },
        { icon: 'Mountain', body: 'Por eso en un mismo país tropical, como Guatemala, hay **pisos térmicos**: franjas de clima según la altura (los límites son aproximados).', reveal: [
          { icon: 'Sun', front: 'Tierra cálida (0 a 1,000 m)', back: 'Costa del Pacífico, Izabal y Petén. Ejemplos: Puerto San José, Puerto Barrios, Flores. Cultivos: caña de azúcar, banano, palma.' },
          { icon: 'CloudSun', front: 'Tierra templada (1,000 a 2,000 m)', back: 'Ejemplos: Ciudad de Guatemala (unos 1,500 m), Cobán. Clima agradable; buen lugar para el café.' },
          { icon: 'Snowflake', front: 'Tierra fría (más de 2,000 m)', back: 'Altiplano occidental. Ejemplos: Quetzaltenango (unos 2,330 m), Totonicapán. Puede haber heladas en diciembre y enero. Cultivos: trigo, papa, hortalizas.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:1.2.1'], ambito: 'conocer',
          prompt: 'Dos lugares de Guatemala están a una latitud parecida: **Puerto San José** (a la orilla del mar) y **Quetzaltenango** (en las montañas, a más de 2,300 m). ¿Cuál crees que es más frío?',
          explain: '¡Quetzaltenango! Aunque estén a una latitud parecida, **la altitud** ayuda a explicar la diferencia de temperatura.' },
        { options: [
          { id: 'a', text: 'Quetzaltenango, porque está más alto', icon: 'Mountain' },
          { id: 'b', text: 'Puerto San José, porque está junto al mar', icon: 'Waves', feedback: 'Puerto San José está al nivel del mar. Recuerda: al aumentar la altitud, la temperatura suele bajar.' },
          { id: 'c', text: 'Los dos tienen el mismo clima', icon: 'Equal', feedback: 'Tienen latitud parecida, pero la diferencia de altitud influye mucho en la temperatura.' },
        ], correct: ['a'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss', 'mat'], cnb: ['ccss:1.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: estimar la temperatura',
          prompt: 'Supongamos que usamos la regla aproximada: **la temperatura baja 6 °C por cada 1,000 m que subes**.' },
        { icon: 'Thermometer', problem: 'En una playa del Pacífico (nivel del mar) hace **30 °C**. ¿Qué temperatura aproximada habría a la misma hora en un pueblo a **2,000 m** de altitud?',
          steps: [
            { text: 'Calculo cuántos "miles de metros" subo: 2,000 ÷ 1,000 = **2**.' },
            { text: 'Cada 1,000 m baja 6 °C, así que baja 2 × 6 = **12 °C**.', why: 'Es una regla de promedio: el valor real cambia con el viento, las nubes y la hora.' },
            { text: 'Resto: 30 − 12 = **18 °C**.' },
          ],
          answer: 'Arriba haría aproximadamente **18 °C**: fresco, aunque en la playa haga calor.',
          tip: 'Por eso las personas de tierra fría cultivan papa y trigo, y en la costa se cultiva caña de azúcar.' },
      ),
      S.match(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:1.2.1'], prompt: 'Une cada lugar con su **piso térmico** según su altitud aproximada.',
          hint: 'Recuerda: menos de 1,000 m es cálido; entre 1,000 y 2,000 m, templado; más de 2,000 m, frío.',
          explain: 'La altitud explica por qué en un país pequeño como Guatemala hay climas tan distintos.' },
        { leftTitle: 'Lugar', rightTitle: 'Piso térmico', pairs: [
          { id: 'fl', left: 'Flores, Petén (unos 130 m)', leftIcon: 'TreePine', right: 'Tierra cálida' },
          { id: 'gc', left: 'Ciudad de Guatemala (unos 1,500 m)', leftIcon: 'Building2', right: 'Tierra templada' },
          { id: 'xe', left: 'Quetzaltenango (unos 2,330 m)', leftIcon: 'MountainSnow', right: 'Tierra fría' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:2.2.1'], ambito: 'conocer', title: 'El clima decide el ecosistema',
          prompt: 'Un **ecosistema** es un conjunto de seres vivos (plantas, animales, hongos) que viven juntos en un lugar con su clima, su suelo y su agua. Según la latitud, la altitud y las lluvias, cada continente tiene ecosistemas distintos. Toca cada tarjeta.' },
        { icon: 'Trees', body: 'Un mismo tipo de ecosistema puede aparecer en varios continentes si el clima es parecido.', reveal: [
          { icon: 'Trees', front: 'Selva tropical', back: 'Calor y mucha lluvia. **Amazonía** (América del Sur), cuenca del Congo (África), Petén (Guatemala).' },
          { icon: 'Sun', front: 'Desierto', back: 'Casi sin lluvia. **Sahara** (África), Atacama (América del Sur), Gobi (Asia). En Guatemala hay zonas muy secas en el valle del Motagua.' },
          { icon: 'Wheat', front: 'Sabana', back: 'Pastizales con pocos árboles y una época seca larga. Muy extensa en **África**.' },
          { icon: 'TreePine', front: 'Taiga y bosque templado', back: 'La **taiga** (bosques de pinos y abetos) cubre el norte de Asia, Europa y América. Los bosques templados pierden sus hojas en otoño, como en Europa.' },
          { icon: 'Snowflake', front: 'Tundra y hielo polar', back: 'Suelo helado con musgos, cerca del Polo Norte. La **Antártida** está cubierta de hielo.' },
          { icon: 'Fish', front: 'Arrecife de coral y manglar', back: 'Mares cálidos. La **Gran Barrera de Coral** (Oceanía) y el **Sistema Arrecifal Mesoamericano**, frente a México, Belice, Guatemala y Honduras.' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:2.2.1'], prompt: 'Une cada ecosistema con un lugar del mundo donde se encuentra.',
          explain: 'Observa que el ecosistema depende del clima, no del país: la selva aparece en América y en África porque ambas tienen zonas cálidas y lluviosas.' },
        { leftTitle: 'Ecosistema', rightTitle: 'Lugar', pairs: [
          { id: 'se', left: 'Selva tropical', leftIcon: 'Trees', right: 'Amazonía, América del Sur' },
          { id: 'de', left: 'Desierto', leftIcon: 'Sun', right: 'Sahara, África' },
          { id: 'ta', left: 'Taiga', leftIcon: 'TreePine', right: 'Norte de Rusia, Asia' },
          { id: 'ar', left: 'Arrecife de coral', leftIcon: 'Fish', right: 'Gran Barrera, Oceanía' },
          { id: 'hi', left: 'Hielo polar', leftIcon: 'Snowflake', right: 'Antártida' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['ccss', 'mat'], cnb: ['ccss:1.2.1'], ambito: 'hacer',
          prompt: 'Supongamos que en la costa hay **28 °C**. Con la regla de **6 °C menos por cada 1,000 m**, ¿qué temperatura aproximada habría en un cerro a **3,000 m**?',
          explain: '3,000 m son 3 veces 1,000 m: baja 3 × 6 = 18 °C. Entonces 28 − 18 = 10 °C.' },
        { answer: 10, unit: '°C', misconceptions: [
          { value: 22, msg: 'Restaste solo 6 °C. Pero subiste 3,000 m: son 3 veces 6 °C.' },
          { value: 46, msg: 'Al subir la temperatura baja, no sube. Hay que restar.' },
        ] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Guatemala está en la zona cálida o tropical de la Tierra.', answer: true },
          { text: 'Mientras más alto está un lugar, más calor hace.', answer: false, why: 'Al subir, la temperatura baja: unos 6 °C por cada 1,000 m.' },
          { text: 'Las zonas polares reciben los rayos del Sol muy inclinados.', answer: true },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:2.2.1'], prompt: 'Un lugar tiene calor todo el año, llueve muchísimo y hay árboles altísimos con gran variedad de animales. ¿Qué ecosistema es?' },
        { options: [
          { id: 'a', text: 'Selva tropical' },
          { id: 'b', text: 'Tundra' },
          { id: 'c', text: 'Desierto' },
        ], correct: ['a'] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Fenómenos naturales y zonas vulnerables ───────────────────────── */
  lesson({
    id: 's01-ccss-3',
    title: 'Fenómenos naturales: conocer para prevenir',
    icon: 'CloudRain',
    minutes: 15,
    gancho: 'En Guatemala tiembla con frecuencia y cada año llegan lluvias fuertes. ¿Por qué nos pasa tan seguido? ¿Qué podemos hacer para estar a salvo?',
    objetivos: [
      'Describir terremotos, erupciones, huracanes y depresiones tropicales',
      'Distinguir entre fenómeno natural, amenaza, vulnerabilidad y desastre',
      'Reconocer los riesgos de vivir en zonas vulnerables y cómo prevenirlos',
    ],
    resumen: [
      'Los fenómenos geológicos nacen dentro de la Tierra: terremotos, erupciones volcánicas y tsunamis. Los hidrometeorológicos nacen en la atmósfera y el agua: huracanes, depresiones y tormentas tropicales, inundaciones y sequías.',
      'Guatemala está donde se juntan tres placas tectónicas (Norteamérica, Caribe y Cocos) y entre dos océanos: por eso tiene temblores, volcanes activos y temporales de lluvia.',
      'Un fenómeno natural se vuelve desastre cuando encuentra a una población vulnerable: casas en laderas, orillas de ríos, construcciones débiles o falta de preparación.',
      'Prevenir salva vidas: plan familiar de emergencia, mochila de emergencia, rutas de evacuación y seguir las indicaciones de la CONRED.',
    ],
    media: {
      id: 's01-ccss-3-placas', kind: 'animation', title: '¿Por qué tiembla en Guatemala?', aspect: '16:9', duration: 50,
      alt: 'Mapa de Centroamérica con tres placas tectónicas de colores que se empujan; aparecen los volcanes de la cadena volcánica y la falla del Motagua.',
      brief: 'Animación 2D de 50 s. Mapa de Centroamérica visto desde arriba. Tres placas con colores suaves y rotuladas: Placa de Norteamérica, Placa del Caribe y Placa de Cocos. Flechas muestran que la placa de Cocos se mete debajo de la del Caribe frente a la costa del Pacífico; aparecen triángulos de volcanes a lo largo del altiplano. Luego se resalta la falla del Motagua entre Norteamérica y Caribe. Un sismógrafo dibuja una línea que tiembla. Narración en español: "Guatemala está donde se juntan tres placas: por eso tenemos temblores y volcanes." Sin escenas de destrucción ni personas heridas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:1.3.1'], ambito: 'conocer', title: 'Fenómenos que nacen dentro de la Tierra',
          prompt: 'La capa exterior de la Tierra está partida en enormes piezas llamadas **placas tectónicas**, que se mueven muy despacio. Cuando chocan o se rozan, liberan energía. Toca cada tarjeta.' },
        { icon: 'Mountain', body: 'Guatemala está donde se juntan **tres placas**: Norteamérica, Caribe y Cocos. También forma parte del **Cinturón de Fuego del Pacífico**, una franja con muchos volcanes y sismos alrededor del océano Pacífico.', reveal: [
          { icon: 'Activity', front: 'Terremoto o sismo', back: 'Movimiento brusco del suelo cuando las placas liberan energía. El 4 de febrero de **1976** un fuerte terremoto, originado en la **falla del Motagua**, causó grandes daños en Guatemala.' },
          { icon: 'Flame', front: 'Erupción volcánica', back: 'Salida de lava, ceniza y gases por un volcán. En Guatemala hay volcanes activos como el de **Fuego**, el **Pacaya** y el **Santiaguito**.' },
          { icon: 'Waves', front: 'Tsunami', back: 'Olas gigantes causadas por un terremoto bajo el mar. En 2004, un tsunami en el océano Índico afectó a varios países de Asia.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:1.3.1'], ambito: 'conocer', title: 'Fenómenos del agua y el aire',
          prompt: 'Sobre los mares cálidos se forman **ciclones tropicales**: grandes remolinos de nubes, viento y lluvia. Se nombran según la **fuerza de sus vientos**. Toca cada tarjeta.',
          media: { id: 's01-ccss-3-ciclon', kind: 'animation', title: 'De depresión a huracán', aspect: '16:9', duration: 40,
            alt: 'Vista satelital animada de un remolino de nubes sobre el mar que crece y gira más rápido; la etiqueta cambia de depresión tropical a tormenta tropical y a huracán.',
            brief: 'Animación 2D estilo imagen de satélite, 40 s. Sobre un mar azul cálido se forma un remolino de nubes. Un velocímetro en la esquina muestra la velocidad del viento. Etiquetas que cambian: "Depresión tropical: vientos de menos de 63 km/h", "Tormenta tropical: de 63 a 118 km/h", "Huracán: 119 km/h o más" (en este momento se ve el ojo del huracán). Al final, el remolino toca tierra y se debilita. Narración en español con subtítulos. Sin imágenes de daños.' } },
        { icon: 'CloudRain', body: 'No solo el viento es peligroso: la **lluvia de muchos días** provoca **inundaciones** y **deslizamientos** de tierra en laderas.', reveal: [
          { icon: 'Cloud', front: 'Depresión tropical', back: 'La etapa más débil (vientos de **menos de 63 km/h**), pero puede traer lluvia durante días.' },
          { icon: 'CloudRain', front: 'Tormenta tropical', back: 'Vientos de **63 a 118 km/h**. Desde esta etapa recibe un nombre propio. La tormenta tropical **Agatha** (2010) causó graves inundaciones y deslaves en Guatemala.' },
          { icon: 'Wind', front: 'Huracán', back: 'Vientos de **119 km/h o más**. En 1998, el huracán **Mitch** causó enormes inundaciones en Centroamérica.' },
          { icon: 'Sun', front: 'Sequía', back: 'Falta de lluvia por mucho tiempo. Afecta las cosechas; en Guatemala ocurre con más frecuencia en el llamado **Corredor Seco**.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:1.3.1'], ambito: 'conocer',
          prompt: 'Usa lo aprendido para clasificar: ¿este fenómeno viene **de dentro de la Tierra** o **del agua y el aire**?',
          explain: 'Los fenómenos **geológicos** nacen dentro de la Tierra; los **hidrometeorológicos** se relacionan con el agua y el aire.' },
        { buckets: [
          { id: 'geo', label: 'De dentro de la Tierra', icon: 'Mountain', color: 'var(--c-maiz-strong)' },
          { id: 'hid', label: 'Del agua y el aire', icon: 'CloudRain', color: 'var(--area-ccss)' },
        ], items: [
          { id: 'f1', text: 'Terremoto', bucket: 'geo' },
          { id: 'f2', text: 'Huracán', bucket: 'hid' },
          { id: 'f3', text: 'Erupción volcánica', bucket: 'geo' },
          { id: 'f4', text: 'Depresión tropical', bucket: 'hid' },
          { id: 'f5', text: 'Sequía', bucket: 'hid' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:1.3.1'], prompt: 'Une cada fenómeno natural con su descripción.',
          hint: 'Fíjate en la fuerza del viento para los ciclones: menos de 63 km/h, de 63 a 118 km/h o 119 km/h y más. El terremoto viene de las placas.',
          explain: 'Los ciclones tropicales se nombran por la fuerza de su viento; el terremoto nace del movimiento de las placas tectónicas.' },
        { leftTitle: 'Fenómeno', rightTitle: 'Descripción', pairs: [
          { id: 'dt', left: 'Depresión tropical', leftIcon: 'Cloud', right: 'Remolino con vientos de menos de 63 km/h y lluvia de varios días' },
          { id: 'tt', left: 'Tormenta tropical', leftIcon: 'CloudRain', right: 'Vientos de 63 a 118 km/h; desde aquí recibe nombre propio' },
          { id: 'hu', left: 'Huracán', leftIcon: 'Wind', right: 'Vientos de 119 km/h o más, con un "ojo" en el centro' },
          { id: 'te', left: 'Terremoto', leftIcon: 'Activity', right: 'Movimiento brusco del suelo cuando las placas liberan energía' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:1.3.1'], ambito: 'conocer', title: 'Fenómeno no es lo mismo que desastre',
          prompt: 'Un temblor en un desierto vacío no hace daño a nadie. El mismo temblor en una ciudad con casas débiles puede ser un **desastre**. La diferencia está en la **vulnerabilidad**. Toca cada tarjeta.' },
        { icon: 'ShieldCheck', body: 'No podemos evitar los fenómenos naturales, pero **sí podemos reducir la vulnerabilidad**. Eso se llama **prevención**.', reveal: [
          { icon: 'Zap', front: 'Amenaza', back: 'El fenómeno que **podría** ocurrir: un sismo, una crecida del río, una erupción.' },
          { icon: 'Home', front: 'Vulnerabilidad', back: 'Lo que hace que una población salga más dañada: vivir en **laderas inestables** o a la **orilla de ríos**, casas mal construidas, no tener plan de emergencia.' },
          { icon: 'TriangleAlert', front: 'Riesgo', back: 'La posibilidad de sufrir daño. **Más amenaza y más vulnerabilidad = más riesgo.**' },
          { icon: 'Shield', front: 'Prevención', back: 'Plan familiar, **mochila de emergencia**, rutas de evacuación, no construir en zonas peligrosas y atender los avisos de la **CONRED** (Coordinadora Nacional para la Reducción de Desastres).' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:1.3.1'], prompt: 'Clasifica cada situación: ¿**aumenta** la vulnerabilidad o la **reduce**?',
          hint: 'Pregúntate: si llega un sismo o un temporal, ¿esta situación protege a la familia o la pone en peligro?',
          explain: 'La vulnerabilidad se reduce con buenas decisiones: dónde y cómo construir, y estar preparados.' },
        { buckets: [
          { id: 'mas', label: 'Aumenta la vulnerabilidad', icon: 'TriangleAlert', color: 'var(--c-bad)' },
          { id: 'menos', label: 'Reduce la vulnerabilidad', icon: 'ShieldCheck', color: 'var(--c-ok)' },
        ], items: [
          { id: 'v1', text: 'Construir una casa a la orilla de un río que se desborda', bucket: 'mas' },
          { id: 'v2', text: 'Tener una mochila de emergencia lista', bucket: 'menos' },
          { id: 'v3', text: 'Practicar simulacros de sismo en la escuela', bucket: 'menos' },
          { id: 'v4', text: 'Cortar los árboles de una ladera donde hay casas', bucket: 'mas', feedback: 'Las raíces sostienen el suelo. Sin árboles, la lluvia provoca deslizamientos.' },
          { id: 'v5', text: 'Tirar basura en los tragantes de la calle', bucket: 'mas', feedback: 'Los tragantes tapados hacen que el agua de lluvia inunde las calles.' },
          { id: 'v6', text: 'Acordar en familia un punto de reunión', bucket: 'menos' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:1.3.1'], ambito: 'hacer',
          prompt: 'Está temblando fuerte y estás en el aula. Ordena lo que debes hacer.',
          explain: 'Durante el sismo: **agáchate, cúbrete y sujétate** lejos de ventanas. Cuando pare, sal con calma por la ruta de evacuación, sin correr, y espera en el punto de reunión.' },
        { items: [
          { id: 'o1', text: 'Mantener la calma y alejarte de ventanas y objetos que puedan caer' },
          { id: 'o2', text: 'Agacharte, cubrirte la cabeza y sujetarte (por ejemplo, bajo un escritorio firme)' },
          { id: 'o3', text: 'Cuando deje de temblar, salir en orden por la ruta de evacuación, sin correr' },
          { id: 'o4', text: 'Esperar en el punto de reunión y seguir las indicaciones de tu maestra o maestro' },
        ], labels: { start: 'Primero', end: 'Al final' } },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:1.3.1'], ambito: 'conocer',
          prompt: 'Escuchas en la radio: _"Una depresión tropical se acerca a la costa del Pacífico; se espera lluvia fuerte durante tres días."_ ¿Qué familia está en **mayor riesgo**?',
          explain: 'Una depresión tropical tiene vientos débiles, pero su **lluvia prolongada** hace crecer los ríos y afloja las laderas. Las familias en esas zonas deben estar atentas a la evacuación.' },
        { options: [
          { id: 'a', text: 'Una familia cuya casa está a la orilla de un río, al pie de un cerro', icon: 'Home' },
          { id: 'b', text: 'Una familia con casa firme en terreno plano, lejos de ríos', icon: 'ShieldCheck', feedback: 'Esa familia también debe estar atenta, pero su vulnerabilidad es mucho menor.' },
          { id: 'c', text: 'Nadie: una depresión es muy débil y no causa daños', icon: 'X', feedback: 'Sus vientos son débiles, pero la lluvia de varios días puede causar inundaciones y deslaves.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.3.1'], prompt: '¿Por qué en Guatemala hay tantos temblores y volcanes?' },
        { options: [
          { id: 'a', text: 'Porque está donde se juntan tres placas tectónicas' },
          { id: 'b', text: 'Porque está en la zona tropical y hace calor' },
          { id: 'c', text: 'Porque llueve mucho en la época lluviosa' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.3.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Un huracán tiene vientos más fuertes que una depresión tropical.', answer: true },
          { text: 'Vivir en una ladera sin árboles reduce el riesgo de deslizamientos.', answer: false, why: 'Sin raíces que sostengan el suelo, la lluvia provoca más deslizamientos.' },
          { text: 'Un fenómeno natural se vuelve desastre cuando afecta a una población vulnerable.', answer: true },
        ] },
      ),
      cierre({ areas: ['ccss'], cnb: [] }, ['Ubico lugares con latitud y longitud', 'Explico por qué la altitud cambia el clima', 'Sé qué hacer para reducir el riesgo ante un fenómeno natural'],
        ['Revisaré con mi familia si tenemos un punto de reunión y una mochila de emergencia', 'Buscaré en un mapa las coordenadas aproximadas de mi municipio']),
    ],
  }),
];
