/**
 * Matemáticas · Unidad 1 · Semana 1 — Triángulos, paralelogramos y figuras congruentes.
 * Progresión: tipos de ángulo → triángulos según sus ángulos → suma de 180° → paralelogramos
 * (clasificar) → trazar paralelogramos y diseñar → figuras congruentes.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Triángulos según sus ángulos ───────────────────────── */
  lesson({
    id: 's01-mat-1',
    title: 'Triángulos según sus ángulos',
    icon: 'Triangle',
    minutes: 13,
    gancho: 'El techo de una casa, una escuadra y una señal de tránsito tienen forma de triángulo. ¿Son todos el mismo tipo de triángulo?',
    objetivos: [
      'Reconocer ángulos agudos, rectos y obtusos comparándolos con la esquina de una hoja',
      'Clasificar triángulos en acutángulos, rectángulos y obtusángulos',
    ],
    resumen: [
      'Un ángulo es la abertura entre dos lados que se unen en un punto llamado vértice. Se mide en grados (°).',
      'Ángulo agudo: menos de 90°. Recto: exactamente 90°. Obtuso: más de 90° y menos de 180°.',
      'Triángulo acutángulo: sus 3 ángulos son agudos. Rectángulo: tiene un ángulo recto. Obtusángulo: tiene un ángulo obtuso.',
      'Para clasificar un triángulo, busca su ángulo más grande y compáralo con 90°.',
    ],
    media: {
      id: 's01-mat-1-familias', kind: 'animation', title: 'Tres familias de triángulos', aspect: '16:9', duration: 40,
      alt: 'Un triángulo cuyo vértice superior se mueve: cuando un ángulo llega a 90° aparece un cuadradito; si lo pasa, el triángulo se vuelve obtusángulo.',
      brief: 'Animación 2D de 40 s sobre fondo cuadriculado claro. Un triángulo con un vértice arrastrable: su ángulo mayor se colorea verde si es menor de 90°, azul con un cuadradito si mide 90° y naranja si pasa de 90°; la etiqueta cambia entre "acutángulo", "rectángulo" y "obtusángulo". Cierra con los tres tipos lado a lado junto a objetos reales: una señal de tránsito triangular, una escuadra de carpintero y un techo muy abierto. Narración en español neutro, subtítulos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.1'], ambito: 'conocer', title: 'Tres tipos de ángulo',
          prompt: 'Un **ángulo** es la abertura entre dos lados que se juntan en un punto, el **vértice**. Se mide en **grados (°)**. Toca cada tarjeta.',
          media: { id: 's01-mat-1-angulos', kind: 'diagram', title: 'Agudo, recto y obtuso', aspect: '16:9',
            alt: 'Tres ángulos dibujados con su medida: 45° (agudo, verde), 90° (recto, azul, con un cuadradito) y 130° (obtuso, naranja). Detrás de cada uno, la esquina de una hoja en gris para comparar.',
            brief: 'Diagrama plano con tres ángulos grandes en fila, cada uno con sus dos lados en negro y el arco coloreado: 45° en verde con la palabra "agudo", 90° en azul con un cuadradito en el vértice y la palabra "recto", 130° en naranja con la palabra "obtuso". Detrás de cada ángulo, en gris claro, la silueta de la esquina de una hoja para comparar. Rotular el vértice con un punto. Fondo blanco, trazos gruesos.' } },
        { icon: 'Ruler', body: 'Compara siempre con la esquina de una hoja: **90°**. Si abres los lados hasta formar una línea recta, el ángulo mide **180°** (ángulo llano).', reveal: [
          { icon: 'ChevronUp', front: 'Agudo', back: 'Mide **menos de 90°**: es más cerrado que la esquina de la hoja. Ejemplos: 30°, 60°, 89°.' },
          { icon: 'Square', front: 'Recto', back: 'Mide **exactamente 90°**. Se marca con un cuadradito en el vértice.' },
          { icon: 'ChevronsLeftRight', front: 'Obtuso', back: 'Mide **más de 90° y menos de 180°**: es más abierto que la esquina de la hoja. Ejemplos: 100°, 135°, 170°.' },
        ] },
      ),
      S.choice(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.1'], ambito: 'conocer',
          prompt: 'Mira las esquinas de estos objetos. ¿Cuál tiene una esquina **igual a la de una hoja de cuaderno**?',
          explain: 'La esquina de una hoja forma un **ángulo recto** (90°). Hoy la usaremos como "regla" para comparar todos los ángulos.' },
        { layout: 'grid', options: [
          { id: 'a', text: 'La punta de un machete', icon: 'Sword', feedback: 'La punta del machete es más cerrada que la esquina de una hoja.' },
          { id: 'b', text: 'La esquina de un pizarrón', icon: 'Square' },
          { id: 'c', text: 'Un abanico muy abierto', icon: 'Wind', feedback: 'Un abanico muy abierto forma una abertura más grande que la esquina de la hoja.' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Clasifica cada medida en su tipo de ángulo.',
          hint: 'Compara cada número con 90: ¿es menor, igual o mayor?',
          explain: 'Todo se decide comparando con 90°: menos es agudo, igual es recto, más (sin llegar a 180°) es obtuso.' },
        { buckets: [
          { id: 'ag', label: 'Agudo (< 90°)', icon: 'ChevronUp', color: 'var(--c-ok)' },
          { id: 're', label: 'Recto (= 90°)', icon: 'Square', color: 'var(--area-mat)' },
          { id: 'ob', label: 'Obtuso (> 90°)', icon: 'ChevronsLeftRight', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: '35°', bucket: 'ag' },
          { id: 'x2', text: '90°', bucket: 're' },
          { id: 'x3', text: '145°', bucket: 'ob' },
          { id: 'x4', text: '89°', bucket: 'ag', feedback: '89 es menor que 90, aunque por poquito: es agudo.' },
          { id: 'x5', text: '91°', bucket: 'ob', feedback: '91 ya pasa de 90: es obtuso.' },
          { id: 'x6', text: '12°', bucket: 'ag' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.1'], ambito: 'conocer', title: 'Los triángulos se nombran por su ángulo mayor',
          prompt: 'Todo triángulo tiene **3 ángulos**. Al menos **dos** de ellos siempre son agudos. Por eso, para clasificarlo, basta con mirar su ángulo **más grande**.' },
        { icon: 'Triangle', body: 'Un triángulo **nunca** tiene dos ángulos rectos ni dos obtusos: sus lados no alcanzarían a cerrarse.', reveal: [
          { icon: 'Triangle', front: 'Acutángulo', back: 'Sus **tres** ángulos son agudos. Ejemplo: 60°, 60°, 60°, como una señal de "ceda el paso".' },
          { icon: 'Square', front: 'Rectángulo', back: 'Tiene **un** ángulo recto. Ejemplo: 90°, 30°, 60°, como la escuadra del carpintero.' },
          { icon: 'Tent', front: 'Obtusángulo', back: 'Tiene **un** ángulo obtuso. Ejemplo: 120°, 35°, 25°, como algunos techos muy abiertos.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo se clasifica un triángulo paso a paso.' },
        { icon: 'Search', problem: 'Don Mateo corta una pieza de madera triangular con ángulos de **25°**, **65°** y **90°**. ¿Qué tipo de triángulo es?',
          steps: [
            { text: 'Busco el ángulo más grande: **90°**.', why: 'Los otros dos siempre serán agudos; el mayor es el que decide.' },
            { text: 'Comparo con 90°: es **exactamente 90°**, un ángulo recto.' },
            { text: 'Un triángulo con un ángulo recto se llama **rectángulo**.' },
          ],
          answer: 'Es un triángulo **rectángulo**.',
          tip: 'Mayor < 90° → acutángulo · Mayor = 90° → rectángulo · Mayor > 90° → obtusángulo.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Ahora tú, con ayuda: un triángulo tiene ángulos de **30°, 40° y 110°**. ¿Qué tipo es?',
          hint: 'Busca el ángulo mayor. ¿Es menor, igual o mayor que 90°?',
          explain: 'El mayor es 110°, que pasa de 90°: el triángulo es **obtusángulo**.' },
        { options: [
          { id: 'a', text: 'Acutángulo', feedback: 'Dos ángulos son agudos, pero 110° no lo es. Basta un ángulo obtuso para cambiar el nombre.' },
          { id: 'r', text: 'Rectángulo', feedback: 'Ninguno mide exactamente 90°.' },
          { id: 'o', text: 'Obtusángulo' },
        ], correct: ['o'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Clasifica cada triángulo por sus ángulos.',
          explain: 'Busca primero el ángulo mayor de cada triángulo y compáralo con 90°.' },
        { buckets: [
          { id: 'ac', label: 'Acutángulo', icon: 'Triangle', color: 'var(--c-ok)' },
          { id: 're', label: 'Rectángulo', icon: 'Square', color: 'var(--area-mat)' },
          { id: 'ob', label: 'Obtusángulo', icon: 'Tent', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 't1', text: '90°, 45°, 45°', bucket: 're' },
          { id: 't2', text: '70°, 70°, 40°', bucket: 'ac' },
          { id: 't3', text: '130°, 30°, 20°', bucket: 'ob' },
          { id: 't4', text: '60°, 30°, 90°', bucket: 're', feedback: 'El 90° está al final, pero cuenta igual: es rectángulo.' },
          { id: 't5', text: '100°, 50°, 30°', bucket: 'ob' },
          { id: 't6', text: '80°, 55°, 45°', bucket: 'ac' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Las señales de "ceda el paso" tienen forma de triángulo con **tres ángulos iguales de 60°**. ¿Qué tipo de triángulo son?',
          explain: '60° es menor que 90°, y los tres ángulos son de 60°: es **acutángulo**.' },
        { options: [
          { id: 'a', text: 'Acutángulo', icon: 'Triangle' },
          { id: 'r', text: 'Rectángulo', icon: 'Square', feedback: 'Para ser rectángulo necesita un ángulo de exactamente 90°.' },
          { id: 'o', text: 'Obtusángulo', icon: 'Tent', feedback: 'Ningún ángulo pasa de 90°.' },
        ], correct: ['a'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Un triángulo es **rectángulo**. ¿Cuántos de sus ángulos son **agudos**?',
          explain: 'Tiene un ángulo recto y los otros **2** son agudos (en todo triángulo, al menos dos ángulos son agudos).' },
        { answer: 2, misconceptions: [
          { value: 0, msg: 'Solo uno es recto; los otros dos tienen que ser más pequeños.' },
          { value: 3, msg: 'Si los tres fueran agudos, no habría ángulo recto.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Un triángulo tiene ángulos de **95°, 50° y 35°**. ¿Cómo se llama?' },
        { options: [
          { id: 'a', text: 'Acutángulo' },
          { id: 'r', text: 'Rectángulo' },
          { id: 'o', text: 'Obtusángulo' },
        ], correct: ['o'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Un ángulo de 90° es un ángulo recto.', answer: true },
          { text: 'Un ángulo de 120° es agudo.', answer: false, why: '120° es mayor que 90°: es obtuso.' },
          { text: 'Un triángulo puede tener dos ángulos obtusos.', answer: false, why: 'Sus lados no alcanzarían a cerrarse.' },
          { text: 'Un triángulo con ángulos de 50°, 60° y 70° es acutángulo.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. La suma de 180° ───────────────────────── */
  lesson({
    id: 's01-mat-2',
    title: 'El ángulo que falta: la regla de los 180°',
    icon: 'Scissors',
    minutes: 14,
    gancho: 'Si recortas un triángulo de papel y juntas sus tres esquinas, pasa algo sorprendente. ¿Qué crees que se forma?',
    objetivos: [
      'Descubrir que los tres ángulos de cualquier triángulo suman 180°',
      'Calcular el ángulo que falta en un triángulo y luego clasificarlo',
    ],
    resumen: [
      'Los tres ángulos de cualquier triángulo suman 180°, sin importar su tamaño ni su forma.',
      'Para hallar el ángulo que falta: suma los dos que conoces y resta ese resultado a 180°.',
      'En un triángulo rectángulo, los dos ángulos agudos suman 90°.',
      'Si tres medidas no suman 180°, no pueden ser los ángulos de un triángulo.',
    ],
    media: {
      id: 's01-mat-2-esquinas', kind: 'video', title: 'Las tres esquinas forman una línea', aspect: '16:9', duration: 50,
      alt: 'Unas manos recortan un triángulo de papel, arrancan sus tres esquinas y las juntan: forman media vuelta, una línea recta.',
      brief: 'Video de 50 s en mesa de madera, plano cenital. Unas manos de niña o niño dibujan un triángulo cualquiera en papel de color, pintan cada esquina de un color (rojo, azul, amarillo), lo recortan con tijeras de punta redonda, arrancan las tres esquinas con los dedos y las juntan con los vértices en un mismo punto: se forma una línea recta. Aparece el texto "180°". Se repite rápido con un triángulo muy distinto (largo y delgado) con el mismo resultado. Narración en español: "¡Siempre suman 180 grados!". Sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.1'], ambito: 'conocer', title: 'La regla de los 180°',
          prompt: 'Los tres ángulos de **cualquier** triángulo suman **180°**. Grande o pequeño, acutángulo u obtusángulo: siempre 180°. Toca cada tarjeta.' },
        { icon: 'Triangle', body: 'Ángulo 1 + ángulo 2 + ángulo 3 = **180°**', reveal: [
          { icon: 'Scissors', front: 'Compruébalo en casa', back: 'Dibuja un triángulo, colorea sus esquinas, recórtalo y junta las tres esquinas: formarán una línea recta (180°).' },
          { icon: 'Calculator', front: 'El ángulo que falta', back: 'Si conoces dos ángulos, súmalos y **resta** el resultado a 180°.' },
          { icon: 'Lightbulb', front: '¿Por qué solo un ángulo grande?', back: 'Dos ángulos rectos ya suman 90° + 90° = 180° y no quedaría nada para el tercero. Por eso un triángulo tiene como máximo un ángulo recto u obtuso.' },
        ] },
      ),
      S.choice(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.1'], ambito: 'conocer',
          prompt: 'Recortas un triángulo de papel, arrancas sus **tres esquinas** y las juntas con las puntas en un mismo lugar. ¿Qué crees que se forma?',
          explain: '¡Se forma una **línea recta**! Una línea recta es un ángulo llano: **180°**. Eso pasa con cualquier triángulo.' },
        { options: [
          { id: 'a', text: 'Un círculo completo', icon: 'Circle', feedback: 'Un círculo completo serían 360°. Las tres esquinas juntas alcanzan solo la mitad.' },
          { id: 'b', text: 'Una línea recta (media vuelta)', icon: 'Minus' },
          { id: 'c', text: 'Una esquina de hoja (90°)', icon: 'Square', feedback: 'Juntas son más abiertas que la esquina de una hoja: llegan a formar una línea recta.' },
        ], correct: ['b'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Así se calcula el ángulo que falta.' },
        { icon: 'Calculator', problem: 'Un banderín triangular para la feria tiene dos ángulos de **48°** y **75°**. ¿Cuánto mide el tercero? ¿Qué tipo de triángulo es?',
          steps: [
            { text: 'Sumo los ángulos que conozco: 48° + 75° = **123°**.' },
            { text: 'Resto a 180°: 180° − 123° = **57°**.', why: 'Los tres juntos deben sumar 180°; lo que falta para llegar es el tercer ángulo.' },
            { text: 'Compruebo: 48 + 75 + 57 = 180. ✔' },
            { text: 'El mayor es 75°, menor que 90°: los tres son agudos.' },
          ],
          answer: 'El tercer ángulo mide **57°** y el banderín es un triángulo **acutángulo**.',
          tip: 'Suma, resta a 180 y comprueba sumando los tres.' },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Ahora tú, con ayuda: un triángulo tiene ángulos de **90°** y **35°**. ¿Cuánto mide el tercero?',
          hint: 'Primero suma 90 + 35. Luego resta ese resultado a 180.',
          explain: '90 + 35 = 125 y 180 − 125 = 55. El tercer ángulo mide 55°.' },
        { answer: 55, unit: '°', stimulus: '90° + 35° + ? = 180°', misconceptions: [
          { value: 125, msg: '125 es la suma de los dos ángulos que conoces. Falta restarla a 180.' },
          { value: 305, msg: 'Sumaste todo. Recuerda: el total debe ser 180°, así que hay que restar.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.1'], ambito: 'conocer', title: 'Atajos que salen de la regla',
          prompt: 'Con la regla de los 180° descubres datos útiles sin medir. Toca cada tarjeta.' },
        { icon: 'Sparkles', body: 'Estos atajos te ahorran pasos.', reveal: [
          { icon: 'Square', front: 'Triángulo rectángulo', back: 'El recto ya ocupa 90°. Los otros dos suman **90°**. Si uno mide 30°, el otro mide 60°.' },
          { icon: 'Triangle', front: 'Tres ángulos iguales', back: '180° ÷ 3 = **60°** cada uno.' },
          { icon: 'Tent', front: 'Dos ángulos iguales', back: 'Resta el ángulo distinto a 180° y divide lo que queda entre 2. Si el distinto mide 100°: (180 − 100) ÷ 2 = **40°** cada uno.' },
        ] },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Una escuadra es un triángulo rectángulo. Uno de sus ángulos agudos mide **27°**. ¿Cuánto mide el otro ángulo agudo?',
          hint: 'En un triángulo rectángulo, los dos ángulos agudos suman 90°.',
          explain: '90 − 27 = 63. El otro ángulo mide 63°. (Compruebo: 90 + 27 + 63 = 180.)' },
        { answer: 63, unit: '°', misconceptions: [
          { value: 153, msg: 'Restaste 27 a 180, pero olvidaste que el ángulo recto ya ocupa 90°.' },
          { value: 117, msg: 'Sumaste 90 + 27. Ahora resta ese resultado a 180.' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'El techo de un rancho forma un triángulo. El ángulo de arriba mide **120°** y los dos ángulos de abajo son **iguales**. ¿Cuánto mide cada ángulo de abajo?',
          explain: '180 − 120 = 60 y 60 ÷ 2 = 30. Cada ángulo de abajo mide 30°.' },
        { answer: 30, unit: '°', misconceptions: [
          { value: 60, msg: '60° es lo que miden los dos juntos. Divide entre 2.' },
          { value: 20, msg: 'Ten cuidado: no se divide 60 entre 3. El ángulo de arriba ya está contado.' },
        ] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: '¿Pueden ser estos los ángulos de un triángulo? Suma y decide.',
          explain: 'Solo son posibles si la suma da exactamente 180°.' },
        { statements: [
          { text: '60°, 60° y 60°', answer: true, why: '60 + 60 + 60 = 180.' },
          { text: '100°, 50° y 40°', answer: false, why: '100 + 50 + 40 = 190: se pasa de 180.' },
          { text: '90°, 45° y 45°', answer: true, why: '90 + 45 + 45 = 180.' },
          { text: '90°, 90° y 10°', answer: false, why: 'Suma 190 y además tendría dos ángulos rectos.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Doña Rosa corta una servilleta por su diagonal y obtiene un triángulo con dos ángulos de **45°**. ¿Cuánto mide el tercer ángulo y qué tipo de triángulo es?',
          explain: '45 + 45 = 90 y 180 − 90 = 90. El tercer ángulo es recto: triángulo **rectángulo**.' },
        { options: [
          { id: 'a', text: '90°, rectángulo' },
          { id: 'b', text: '45°, acutángulo', feedback: 'Si los tres midieran 45°, sumarían solo 135°.' },
          { id: 'c', text: '100°, obtusángulo', feedback: 'Revisa la resta: 180 − 90 = 90.' },
        ], correct: ['a'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Un triángulo tiene ángulos de **65°** y **70°**. ¿Cuánto mide el tercero?' },
        { answer: 45, unit: '°' },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Dos ángulos de un triángulo miden **30°** y **50°**. ¿Qué tipo de triángulo es?' },
        { options: [
          { id: 'a', text: 'Acutángulo' },
          { id: 'r', text: 'Rectángulo' },
          { id: 'o', text: 'Obtusángulo' },
        ], correct: ['o'] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Paralelogramos ───────────────────────── */
  lesson({
    id: 's01-mat-3',
    title: 'La familia de los paralelogramos',
    icon: 'Square',
    minutes: 14,
    gancho: 'Una puerta, una casilla de ajedrez y el rombo de un güipil tienen cuatro lados. ¿Qué otra cosa tienen en común?',
    objetivos: [
      'Reconocer lados paralelos y perpendiculares',
      'Identificar los paralelogramos: rectángulo, cuadrado, rombo y romboide',
      'Clasificar un paralelogramo por sus lados y sus ángulos',
    ],
    resumen: [
      'Dos líneas son paralelas si nunca se juntan aunque las alargues. Son perpendiculares si se cruzan formando ángulos rectos.',
      'Un paralelogramo es un cuadrilátero con dos pares de lados paralelos. Sus lados opuestos miden lo mismo y sus ángulos opuestos también.',
      'Rectángulo: 4 ángulos rectos. Cuadrado: 4 ángulos rectos y 4 lados iguales. Rombo: 4 lados iguales sin ángulos rectos. Romboide: ni ángulos rectos ni 4 lados iguales.',
      'Se usa el nombre más preciso, pero todo cuadrado es también un rectángulo especial y un rombo especial.',
    ],
    media: {
      id: 's01-mat-3-familia', kind: 'diagram', title: 'Árbol de los cuadriláteros', aspect: '4:3',
      alt: 'Esquema en forma de árbol: cuadriláteros se dividen en paralelogramos, trapecios y trapezoides; los paralelogramos se dividen en rectángulo, cuadrado, rombo y romboide.',
      brief: 'Diagrama en árbol, fondo claro. Arriba "Cuadriláteros (4 lados)". Tres ramas: "Paralelogramos (2 pares de lados paralelos)", "Trapecios (1 par)" y "Trapezoides (ningún par)". De paralelogramos salen cuatro figuras dibujadas con marcas: rectángulo (cuadraditos en las 4 esquinas), cuadrado (cuadraditos y rayitas iguales en los lados), rombo (rayitas iguales, sin cuadraditos) y romboide. Lados paralelos marcados con flechitas del mismo color. Líneas limpias, colores suaves.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.2'], ambito: 'conocer', title: 'Paralelas y perpendiculares',
          prompt: 'Para entender los paralelogramos necesitas dos palabras. Toca cada tarjeta.' },
        { icon: 'Ruler', body: 'Un **cuadrilátero** es una figura de 4 lados. Un **paralelogramo** es un cuadrilátero con **dos pares de lados paralelos**.', reveal: [
          { icon: 'Pause', front: 'Paralelas', back: 'Van siempre a la misma distancia y **nunca se juntan**. Ejemplo: los bordes largos de una regla.' },
          { icon: 'Plus', front: 'Perpendiculares', back: 'Se cruzan formando **ángulos rectos** (90°). Ejemplo: las líneas de una cruz o la esquina de una ventana.' },
          { icon: 'X', front: 'Contraejemplo: trapecio', back: 'Tiene **solo un par** de lados paralelos. Por eso **no** es paralelogramo.' },
        ] },
      ),
      S.choice(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.2'], ambito: 'conocer',
          prompt: 'Imagina que alargas estas líneas muchísimo. ¿Cuál par **nunca** se juntaría?',
          explain: 'Los rieles de una vía de tren van siempre a la misma distancia: son **paralelos**. Nunca se juntan.' },
        { options: [
          { id: 'a', text: 'Los dos rieles de una vía de tren', icon: 'Train' },
          { id: 'b', text: 'Las dos manecillas de un reloj', icon: 'Clock', feedback: 'Las manecillas se unen en el centro del reloj.' },
          { id: 'c', text: 'Las dos orillas de una carretera que se angosta', icon: 'Route', feedback: 'Si el camino se angosta, sus orillas se van acercando y terminarían juntándose.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.2'], prompt: '¿Es paralelogramo o no? Clasifica cada figura según su descripción.',
          hint: 'Pregúntate: ¿tiene 4 lados y **dos pares** de lados paralelos?',
          explain: 'Un paralelogramo necesita 4 lados y dos pares de lados paralelos. Un solo par no alcanza.' },
        { buckets: [
          { id: 'si', label: 'Paralelogramo', icon: 'Check', color: 'var(--c-ok)' },
          { id: 'no', label: 'No es paralelogramo', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'a', text: 'Una puerta rectangular', bucket: 'si' },
          { id: 'b', text: 'Un triángulo', bucket: 'no', feedback: 'Tiene 3 lados: ni siquiera es cuadrilátero.' },
          { id: 'c', text: 'Un cuadrilátero con un solo par de lados paralelos', bucket: 'no', feedback: 'Eso es un trapecio: le falta el segundo par.' },
          { id: 'd', text: 'Un rombo de un güipil', bucket: 'si' },
          { id: 'e', text: 'Una casilla de un tablero de ajedrez', bucket: 'si' },
          { id: 'f', text: 'Un cuadrilátero sin lados paralelos', bucket: 'no' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.2'], ambito: 'conocer', title: 'Los cuatro paralelogramos',
          prompt: 'Todos los paralelogramos tienen **lados opuestos iguales** y **ángulos opuestos iguales**. Se distinguen por dos preguntas: ¿tiene ángulos rectos? ¿tiene los 4 lados iguales? Toca cada uno.',
          media: { id: 's01-mat-3-cuatro', kind: 'diagram', title: 'Rectángulo, cuadrado, rombo y romboide', aspect: '16:9',
            alt: 'Cuatro paralelogramos sobre cuadrícula con sus medidas: rectángulo de 6 por 3, cuadrado de 4 por 4, rombo de lado 4 inclinado, romboide de 6 por 3 inclinado.',
            brief: 'Cuatro figuras sobre papel cuadriculado, en fila, cada una con su nombre debajo. Rectángulo 6×3 cuadritos con cuadraditos de ángulo recto en las esquinas. Cuadrado 4×4 con cuadraditos y rayitas de igualdad en los 4 lados. Rombo con 4 lados iguales marcados con rayitas y ángulos de 60° y 120° rotulados. Romboide con lados 6 y 3 inclinado, ángulos 60° y 120°. Los pares de lados paralelos marcados con flechitas del mismo color. Estilo limpio, colores de la marca de matemáticas.' } },
        { icon: 'Shapes', body: 'Fíjate en los **ángulos** y en los **lados**, y usa siempre el nombre **más preciso**. Ojo: el cuadrado cumple lo del rectángulo (4 rectos) y lo del rombo (4 lados iguales); es un caso especial de los dos.', reveal: [
          { icon: 'RectangleHorizontal', front: 'Rectángulo', back: '**4 ángulos rectos** y lados opuestos iguales. Cuando sus lados no son todos iguales (dos largos y dos cortos), lo llamamos rectángulo. Ejemplo: una puerta.' },
          { icon: 'Square', front: 'Cuadrado', back: '**4 ángulos rectos y 4 lados iguales**. Ejemplo: una casilla de ajedrez.' },
          { icon: 'Diamond', front: 'Rombo', back: '**4 lados iguales**, pero **sin** ángulos rectos: dos ángulos agudos y dos obtusos. Ejemplo: los rombos de muchos güipiles.' },
          { icon: 'Layers', front: 'Romboide', back: '**Sin** ángulos rectos y **sin** 4 lados iguales: dos lados largos y dos cortos, inclinados. Es como un rectángulo "empujado".' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Así se clasifica un paralelogramo con dos preguntas.' },
        { icon: 'ListChecks', problem: 'Una baldosa tiene 4 lados de **20 cm** cada uno y ángulos de **70°, 110°, 70° y 110°**. ¿Qué paralelogramo es?',
          steps: [
            { text: 'Pregunta 1: ¿tiene ángulos rectos? **No**: 70° es agudo y 110° es obtuso.', why: 'Sin ángulos rectos, no puede ser rectángulo ni cuadrado.' },
            { text: 'Pregunta 2: ¿tiene 4 lados iguales? **Sí**: todos miden 20 cm.' },
            { text: '4 lados iguales y sin ángulos rectos → **rombo**.' },
          ],
          answer: 'La baldosa es un **rombo**.',
          tip: 'Con rectos: 4 lados iguales → cuadrado; si no → rectángulo. Sin rectos: 4 lados iguales → rombo; si no → romboide.' },
      ),
      S.match(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.2'], prompt: 'Une cada descripción con su paralelogramo.',
          hint: 'Haz las dos preguntas: ¿ángulos rectos? ¿4 lados iguales?',
          explain: 'Los ángulos rectos separan rectángulo y cuadrado de rombo y romboide; los lados iguales separan cada pareja.' },
        { leftTitle: 'Descripción', rightTitle: 'Paralelogramo', pairs: [
          { id: 'p1', left: '4 ángulos rectos, lados de 8 y 5 cm', right: 'Rectángulo' },
          { id: 'p2', left: '4 ángulos rectos, 4 lados de 6 cm', right: 'Cuadrado' },
          { id: 'p3', left: 'Sin ángulos rectos, 4 lados de 6 cm', right: 'Rombo' },
          { id: 'p4', left: 'Sin ángulos rectos, lados de 8 y 5 cm', right: 'Romboide' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.2'], prompt: 'Una mesa tiene lados de **120 cm, 60 cm, 120 cm y 60 cm** y ángulos de **60°, 120°, 60° y 120°**. ¿Qué forma tiene?',
          explain: 'No tiene ángulos rectos y sus lados no son todos iguales: es un **romboide**.' },
        { options: [
          { id: 'a', text: 'Rectángulo', feedback: 'El rectángulo necesita 4 ángulos rectos.' },
          { id: 'b', text: 'Rombo', feedback: 'El rombo tiene los 4 lados iguales; aquí hay lados de 120 y de 60.' },
          { id: 'c', text: 'Romboide' },
          { id: 'd', text: 'Cuadrado', feedback: 'El cuadrado necesita ángulos rectos y lados iguales.' },
        ], correct: ['c'] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.2'], prompt: '¿Verdadero o falso? Piensa en las dos preguntas.',
          explain: 'Un cuadrado cumple todo lo del rectángulo (4 rectos) y todo lo del rombo (4 lados iguales).' },
        { statements: [
          { text: 'Todo cuadrado es también un rectángulo.', answer: true, why: 'Tiene 4 ángulos rectos, igual que el rectángulo.' },
          { text: 'Todo rectángulo es también un cuadrado.', answer: false, why: 'Un rectángulo de 8 × 5 cm no tiene sus 4 lados iguales.' },
          { text: 'Un trapecio es un paralelogramo.', answer: false, why: 'Tiene solo un par de lados paralelos.' },
          { text: 'En un paralelogramo, los lados opuestos miden lo mismo.', answer: true },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.2'], prompt: 'En un romboide, uno de sus ángulos mide **65°**. ¿Cuánto mide el ángulo **opuesto** a él?',
          explain: 'En todo paralelogramo los ángulos opuestos son iguales: también mide 65°.' },
        { answer: 65, unit: '°', misconceptions: [{ value: 115, msg: '115° mide el ángulo de al lado, no el opuesto. Los opuestos son iguales.' }] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.2'], prompt: '¿Qué paralelogramo tiene **4 lados iguales** y **ningún ángulo recto**?' },
        { options: [
          { id: 'a', text: 'Cuadrado' },
          { id: 'b', text: 'Rombo' },
          { id: 'c', text: 'Rectángulo' },
          { id: 'd', text: 'Romboide' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.2'], prompt: '¿Tiene 4 ángulos rectos? Clasifica.' },
        { buckets: [
          { id: 'si', label: 'Sí, 4 ángulos rectos', icon: 'Check' },
          { id: 'no', label: 'No tiene ángulos rectos', icon: 'X' },
        ], items: [
          { id: 'a', text: 'Cuadrado', bucket: 'si' },
          { id: 'b', text: 'Rombo', bucket: 'no' },
          { id: 'c', text: 'Rectángulo', bucket: 'si' },
          { id: 'd', text: 'Romboide', bucket: 'no' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 4. Trazar paralelogramos y diseñar ───────────────────────── */
  lesson({
    id: 's01-mat-4',
    title: 'Trazo paralelogramos y creo diseños',
    icon: 'PenTool',
    minutes: 15,
    gancho: 'Antes de tejer, muchas tejedoras dibujan su diseño en papel cuadriculado. ¿Cómo se dibuja un rombo perfecto?',
    objetivos: [
      'Trazar rectángulos, cuadrados, rombos y romboides en papel cuadriculado',
      'Crear un diseño que combine diferentes paralelogramos',
    ],
    resumen: [
      'En papel cuadriculado, las líneas de la cuadrícula ya son paralelas y perpendiculares: ayudan a trazar ángulos rectos.',
      'Rectángulo y cuadrado: cuenta cuadritos para cada lado y sigue las líneas de la cuadrícula.',
      'Romboide: traza la base, luego la base de arriba del mismo largo pero corrida hacia un lado, y une los extremos.',
      'Rombo: traza dos diagonales perpendiculares que se corten en su punto medio y une sus cuatro puntas.',
    ],
    media: {
      id: 's01-mat-4-trazo', kind: 'animation', title: 'Cómo trazar los cuatro paralelogramos', aspect: '16:9', duration: 60,
      alt: 'Sobre papel cuadriculado, un lápiz traza un rectángulo contando cuadritos, luego un romboide corriendo la base de arriba y un rombo a partir de dos diagonales en cruz.',
      brief: 'Animación 2D de 60 s, vista de una hoja cuadriculada con lápiz y regla. (1) Rectángulo de 6×3 cuadritos: se cuentan los cuadritos en voz alta. (2) Cuadrado de 4×4. (3) Romboide: base de 5 cuadritos, 3 cuadritos arriba se traza otra línea de 5 corrida 2 cuadritos a la derecha, se unen extremos. (4) Rombo: una diagonal horizontal de 6 cuadritos y una vertical de 4 que se cruzan en su punto medio; se unen las cuatro puntas. Los lados paralelos se iluminan del mismo color. Narración en español, subtítulos.',
    },
    steps: [
      S.ejemplo(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.2'], ambito: 'hacer', title: 'Trazar un rectángulo y un romboide',
          prompt: 'Sigue los pasos. Si tienes cuaderno cuadriculado, hazlo a la par.' },
        { icon: 'PenTool', problem: 'Traza un **rectángulo** de 6 × 3 cuadritos y un **romboide** con la misma base.',
          steps: [
            { text: 'Rectángulo: traza una línea de **6 cuadritos** sobre una línea de la cuadrícula (base).' },
            { text: 'Desde cada extremo sube **3 cuadritos** en línea recta y une las puntas con otra línea de 6.', why: 'Las líneas verticales de la cuadrícula forman ángulos rectos con las horizontales.' },
            { text: 'Romboide: traza otra base de **6 cuadritos**. Sube 3 cuadritos, pero **córrete 2 a la derecha** y traza la línea de arriba, también de 6.' },
            { text: 'Une los extremos de ambas líneas con dos lados inclinados.', why: 'Las dos líneas de 6 son paralelas y los lados inclinados también, porque se corrieron lo mismo.' },
          ],
          answer: 'Obtienes un rectángulo (con 4 rectos) y un romboide "empujado" hacia la derecha.',
          tip: 'Si corres la línea de arriba, la figura se inclina, pero sigue siendo paralelogramo.' },
      ),
      S.choice(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.2'], ambito: 'conocer',
          prompt: 'Una tejedora dibuja su diseño en **papel cuadriculado** antes de tejer. ¿Por qué le ayuda la cuadrícula?',
          explain: 'Las líneas de la cuadrícula ya son **paralelas** y se cruzan en **ángulos rectos**; contar cuadritos permite trazar lados exactos y repetir el diseño.' },
        { options: [
          { id: 'a', text: 'Porque puede contar cuadritos y hacer lados exactos', icon: 'Ruler' },
          { id: 'b', text: 'Porque así el diseño sale de más colores', icon: 'Palette', feedback: 'Los colores los elige ella; la cuadrícula ayuda con las medidas.' },
          { id: 'c', text: 'Porque el papel cuadriculado es más resistente', icon: 'FileText', feedback: 'No se trata de la resistencia del papel, sino de sus líneas.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.2'], prompt: 'Para trazar un **rombo** se usan sus diagonales. Ordena los pasos.',
          hint: 'Primero van las dos diagonales en cruz; al final se unen las puntas.',
          explain: 'Las diagonales de un rombo son perpendiculares y se cortan a la mitad. Al unir sus cuatro puntas, los 4 lados salen iguales.' },
        { items: [
          { id: 'o1', text: 'Traza una diagonal horizontal de 6 cuadritos.' },
          { id: 'o2', text: 'Marca su punto medio (a 3 cuadritos de cada extremo).' },
          { id: 'o3', text: 'Por ese punto traza una diagonal vertical de 4 cuadritos: 2 arriba y 2 abajo.' },
          { id: 'o4', text: 'Une las cuatro puntas con la regla.' },
        ], labels: { start: 'Primero', end: 'Al final' } },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.2', 'mat:1.1.3'], ambito: 'conocer', title: 'Diagonales que deciden la forma',
          prompt: 'Las **diagonales** unen esquinas opuestas. Si las trazas en cruz y cortándose por la mitad, siempre obtienes un paralelogramo. Toca cada tarjeta.' },
        { icon: 'Plus', body: 'Cambia el largo de las diagonales y cambia el paralelogramo.', reveal: [
          { icon: 'Diamond', front: 'Diagonales en cruz (90°), de distinto largo', back: 'Obtienes un **rombo**. Ejemplo: 6 y 4 cuadritos.' },
          { icon: 'Square', front: 'Diagonales en cruz (90°), del mismo largo', back: 'Obtienes un **cuadrado** (inclinado como un diamante).' },
          { icon: 'Grid3x3', front: 'Para diseñar', back: 'Repite una figura trazada: córrela siempre el mismo número de cuadritos y tendrás una franja, como en una faja o un petate.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.2'], prompt: 'Trazaste dos diagonales **del mismo largo** (4 cuadritos cada una) que se cruzan en ángulo recto por su punto medio. Al unir las puntas, ¿qué figura obtienes?',
          hint: 'Mira la tarjeta: diagonales en cruz y del mismo largo…',
          explain: 'Diagonales iguales y perpendiculares que se cortan a la mitad forman un **cuadrado**, aunque se vea girado como un diamante.' },
        { options: [
          { id: 'a', text: 'Un cuadrado (girado)' },
          { id: 'b', text: 'Un romboide', feedback: 'Un romboide no tiene diagonales en cruz perpendicular.' },
          { id: 'c', text: 'Un rombo que no es cuadrado', feedback: 'Eso pasaría si las diagonales tuvieran distinto largo.' },
        ], correct: ['a'] },
      ),
      S.loom(
        { fase: 'aplicar', areas: ['mat', 'art'], cnb: ['mat:1.1.3'], ambito: 'hacer',
          prompt: 'Diseña una **faja** con un **rombo** grande en el centro y un **cuadrado** pequeño en cada esquina. Completa la mitad derecha como reflejo de la izquierda.',
          explain: 'Tu diseño combina paralelogramos distintos: un rombo en el centro y cuadrados en las esquinas.' },
        { motif: 'Faja de rombos y cuadrados', palette: ['#d6246e', '#1d9bd7', '#eeae1f'], half: [
          [1, 1, null, 0],
          [1, 1, 0, 2],
          [null, 0, 2, 2],
          [null, 0, 2, 2],
          [1, 1, 0, 2],
          [1, 1, null, 0],
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.3'], prompt: 'Un petate tiene una franja con **3 rombos y 2 rectángulos**. La franja se repite **6 veces**. ¿Cuántos paralelogramos tiene el diseño completo?',
          explain: 'Cada franja tiene 3 + 2 = 5 paralelogramos, y 5 × 6 = 30.' },
        { answer: 30, misconceptions: [
          { value: 11, msg: 'Sumaste 3 + 2 + 6. La franja se repite: hay que multiplicar.' },
          { value: 18, msg: 'Contaste solo los rombos (3 × 6). Faltan los rectángulos.' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['mat', 'art'], cnb: ['mat:1.1.3'], ambito: 'hacer',
          prompt: 'En tu cuaderno cuadriculado, **crea tu propio diseño** para una faja o un piso con **al menos tres paralelogramos distintos**. Luego descríbelo aquí: qué figuras usaste, cuántos cuadritos mide cada una y cómo se repiten.' },
        { minWords: 25, placeholder: 'Mi diseño tiene…',
          model: 'Mi diseño tiene una franja que se repite 4 veces. En el centro hay un rombo con diagonales de 6 y 4 cuadritos. A cada lado hay un cuadrado de 2 × 2 cuadritos, y abajo un romboide de base 4 corrido 1 cuadrito. Lo pinté de rojo, azul y amarillo.',
          rubric: ['Usé al menos tres paralelogramos distintos', 'Di las medidas en cuadritos', 'Expliqué cómo se repite el diseño'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.2'], prompt: 'En papel cuadriculado trazas una línea de 5 cuadritos, subes 2 cuadritos **corriéndote 3 a la derecha** y trazas otra línea de 5. Al unir los extremos, ¿qué obtienes?' },
        { options: [
          { id: 'a', text: 'Un rectángulo' },
          { id: 'b', text: 'Un romboide' },
          { id: 'c', text: 'Un cuadrado' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.2', 'mat:1.1.3'], prompt: 'Un diseño usa estas piezas. ¿Qué paralelogramo es cada una?' },
        { buckets: [
          { id: 'cu', label: 'Cuadrado', icon: 'Square' },
          { id: 'ro', label: 'Rombo', icon: 'Diamond' },
          { id: 're', label: 'Rectángulo', icon: 'RectangleHorizontal' },
        ], items: [
          { id: 'a', text: '3 × 3 cuadritos, esquinas rectas', bucket: 'cu' },
          { id: 'b', text: 'Diagonales en cruz de 8 y 2 cuadritos', bucket: 'ro' },
          { id: 'c', text: '7 × 2 cuadritos, esquinas rectas', bucket: 're' },
          { id: 'd', text: 'Diagonales en cruz de 4 y 6 cuadritos', bucket: 'ro' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 5. Figuras congruentes ───────────────────────── */
  lesson({
    id: 's01-mat-5',
    title: 'Figuras congruentes: iguales en forma y tamaño',
    icon: 'Copy',
    minutes: 15,
    gancho: 'Para que un piso quede parejo, todas las baldosas deben encajar igualito. ¿Cómo sabes si dos figuras son exactamente iguales?',
    objetivos: [
      'Identificar figuras congruentes comparando lados y ángulos',
      'Trazar una figura congruente a otra en papel cuadriculado',
    ],
    resumen: [
      'Dos figuras son congruentes si tienen la misma forma y el mismo tamaño: sus lados correspondientes miden lo mismo y sus ángulos correspondientes también.',
      'No importa la posición, el color ni si una está girada o reflejada: si encajan exactamente una sobre otra, son congruentes.',
      'Dos figuras con la misma forma pero distinto tamaño NO son congruentes.',
      'Para trazar una figura congruente, copia cada lado con el mismo número de cuadritos y en la misma dirección.',
    ],
    media: {
      id: 's01-mat-5-baldosas', kind: 'image', title: 'Un piso de baldosas congruentes', aspect: '4:3',
      alt: 'Piso de un corredor colonial con baldosas cuadradas de dos colores; dos baldosas se levantan y se superponen para mostrar que encajan exactamente.',
      brief: 'Ilustración de un corredor de casa antigua de Antigua Guatemala con piso de baldosas cuadradas en dos colores (rojo barro y crema). En primer plano, una baldosa aparece levantada y colocada encima de otra, con una línea punteada mostrando que coinciden en todos sus bordes; texto pequeño: "congruentes". A un lado, una baldosa más pequeña con el mismo dibujo, con una X suave y la etiqueta "misma forma, otro tamaño". Estilo plano cálido, sin personas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.4'], ambito: 'conocer', title: '¿Qué significa congruente?',
          prompt: 'Dos figuras son **congruentes** cuando tienen **la misma forma y el mismo tamaño**. Toca cada tarjeta.' },
        { icon: 'Copy', body: 'Para comprobarlo, compara **lados correspondientes** (los que ocupan el mismo lugar) y **ángulos correspondientes**.', reveal: [
          { icon: 'Ruler', front: 'Lados', back: 'Cada lado de una figura mide lo mismo que su lado correspondiente en la otra.' },
          { icon: 'Triangle', front: 'Ángulos', back: 'Cada ángulo de una figura mide lo mismo que su ángulo correspondiente en la otra.' },
          { icon: 'RotateCw', front: 'Posición', back: 'No importa si una está **girada**, **volteada** o en otro lugar, ni de qué color es.' },
          { icon: 'X', front: 'Contraejemplo', back: 'Un cuadrado de 3 cm y uno de 5 cm tienen la misma forma, pero **no** son congruentes: su tamaño es distinto.' },
        ] },
      ),
      S.choice(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.4'], ambito: 'conocer',
          prompt: 'Tienes dos tortillas hechas con el mismo molde y una tortillita pequeña. ¿Cuáles **encajarían exactamente** una sobre otra?',
          explain: 'Las dos del mismo molde tienen la misma forma **y** el mismo tamaño. La pequeña tiene la misma forma, pero no el mismo tamaño.' },
        { options: [
          { id: 'a', text: 'Las dos tortillas del mismo molde', icon: 'Pizza' },
          { id: 'b', text: 'Una tortilla del molde y la tortillita', icon: 'CircleDot', feedback: 'Son redondas las dos, pero de distinto tamaño: no encajan exactamente.' },
          { id: 'c', text: 'Todas, porque todas son redondas', icon: 'Layers', feedback: 'Ser redondas no basta: también deben ser del mismo tamaño.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.4'], prompt: 'El triángulo A tiene lados de **3, 4 y 5 cm**. ¿Cuál de estos triángulos es **congruente** con A?',
          hint: 'Busca uno con exactamente las mismas tres medidas, aunque estén en otro orden.',
          explain: 'El triángulo con lados de 5, 3 y 4 cm tiene las mismas medidas en otro orden: está girado, pero es congruente.' },
        { options: [
          { id: 'a', text: 'Lados de 6, 8 y 10 cm', feedback: 'Tiene la misma forma, pero es el doble de grande: no es congruente.' },
          { id: 'b', text: 'Lados de 5, 3 y 4 cm' },
          { id: 'c', text: 'Lados de 3, 4 y 6 cm', feedback: 'Un lado es distinto (6 en lugar de 5).' },
        ], correct: ['b'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.5'], ambito: 'hacer', title: 'Trazar una figura congruente',
          prompt: 'En papel cuadriculado, copiar una figura es como seguir un camino. Observa.' },
        { icon: 'PenTool', problem: 'Copia en otro lugar de la hoja el romboide que tiene: base de **4 cuadritos**, lado inclinado que sube **2** y se corre **1** a la derecha.',
          steps: [
            { text: 'Elige un punto de inicio nuevo en la hoja.' },
            { text: 'Traza la base: **4 cuadritos** a la derecha.', why: 'El mismo número de cuadritos asegura la misma longitud.' },
            { text: 'Desde el inicio, sube **2** y córrete **1** a la derecha; marca ese punto. Haz lo mismo desde el final de la base.', why: 'Así el lado inclinado tiene la misma longitud y el mismo ángulo.' },
            { text: 'Une los dos puntos de arriba (otra línea de 4) y los lados inclinados.' },
          ],
          answer: 'Tu romboide es **congruente** con el original: mismos lados y mismos ángulos.',
          tip: 'Sin cuadrícula, usa regla para los lados y transportador para los ángulos.' },
      ),
      S.tf(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.4', 'mat:1.1.5'], prompt: '¿Verdadero o falso?',
          hint: 'Congruente = misma forma y mismo tamaño. La posición no importa.',
          explain: 'Girar, voltear o mover una figura no cambia sus lados ni sus ángulos.' },
        { statements: [
          { text: 'Si giro un triángulo, el triángulo girado es congruente con el original.', answer: true },
          { text: 'Un rectángulo de 4 × 2 cuadritos y uno de 8 × 4 cuadritos son congruentes.', answer: false, why: 'El segundo es el doble de grande.' },
          { text: 'Para copiar una figura congruente en cuadrícula, cada lado debe medir los mismos cuadritos.', answer: true },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.4'], prompt: '¿Son congruentes estos pares de figuras?',
          explain: 'Compara lado por lado y ángulo por ángulo.' },
        { buckets: [
          { id: 'si', label: 'Congruentes', icon: 'Check', color: 'var(--c-ok)' },
          { id: 'no', label: 'No congruentes', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'a', text: 'Dos cuadrados de 5 cm de lado', bucket: 'si' },
          { id: 'b', text: 'Un cuadrado de 4 cm y un rombo de 4 cm de lado con ángulos de 60° y 120°', bucket: 'no', feedback: 'Los lados miden igual, pero los ángulos no: 90° no es igual a 60°.' },
          { id: 'c', text: 'Dos rectángulos de 7 × 3 cm, uno acostado y otro parado', bucket: 'si', feedback: 'Solo cambió la posición.' },
          { id: 'd', text: 'Dos triángulos de 60°, 60° y 60°, uno con lados de 2 cm y otro de 3 cm', bucket: 'no', feedback: 'Misma forma, distinto tamaño.' },
          { id: 'e', text: 'Un triángulo y su reflejo en un espejo', bucket: 'si' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.5', 'mat:1.1.1'], prompt: 'Trazaste un triángulo congruente con otro que tiene ángulos de **50°** y **70°**. ¿Cuánto mide el **tercer** ángulo de tu copia?',
          explain: 'El original mide 180 − 50 − 70 = 60°. Como tu copia es congruente, su tercer ángulo también mide 60°.' },
        { answer: 60, unit: '°', misconceptions: [{ value: 120, msg: '120 es la suma de los dos ángulos conocidos. Réstala a 180.' }] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.4'], prompt: 'Un albañil va a cubrir un piso sin dejar huecos ni encimar piezas. ¿Por qué pide que todas las baldosas sean **congruentes**?',
          explain: 'Si todas son congruentes, cada baldosa encaja exactamente junto a las demás y el piso queda parejo.' },
        { options: [
          { id: 'a', text: 'Para que todas encajen igual y el piso quede parejo', icon: 'Blocks' },
          { id: 'b', text: 'Para que sean todas del mismo color', icon: 'Palette', feedback: 'El color no tiene que ver con la congruencia.' },
          { id: 'c', text: 'Para que pesen menos', icon: 'Scale', feedback: 'Lo importante es la forma y el tamaño, no el peso.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.4'], prompt: 'El rectángulo R mide **6 cm × 2 cm**. ¿Cuál es congruente con R?' },
        { options: [
          { id: 'a', text: 'Un rectángulo de 3 cm × 1 cm' },
          { id: 'b', text: 'Un rectángulo de 2 cm × 6 cm, parado' },
          { id: 'c', text: 'Un romboide de lados 6 cm y 2 cm' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.4', 'mat:1.1.2', 'mat:1.1.1'], prompt: 'Repaso de la semana. ¿Verdadero o falso?' },
        { statements: [
          { text: 'Dos figuras congruentes tienen la misma forma y el mismo tamaño.', answer: true },
          { text: 'Un cuadrado de 3 cm y otro de 6 cm son congruentes.', answer: false },
          { text: 'Un rombo tiene 4 lados iguales.', answer: true },
          { text: 'Un triángulo con ángulos de 90°, 60° y 30° es obtusángulo.', answer: false },
        ] },
      ),
      cierre({ areas: ['mat'], cnb: [] },
        ['Clasifico triángulos por sus ángulos y calculo el ángulo que falta', 'Distingo rectángulo, cuadrado, rombo y romboide', 'Reconozco y trazo figuras congruentes'],
        ['Buscaré paralelogramos en mi casa y en el mercado', 'Haré el experimento de las tres esquinas con mi familia', 'Revisaré mis trazos contando cuadritos con cuidado']),
    ],
  }),
];
