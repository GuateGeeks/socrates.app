/**
 * Matemáticas · Unidad 1 · Semana 2 — Polígonos.
 * Progresión: qué es un polígono y sus nombres (hasta 10 lados) → regulares e irregulares →
 * suma de ángulos interiores (pentágono, hexágono) → diseños con círculos → polígonos en la cultura maya.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Polígonos hasta de 10 lados ───────────────────────── */
  lesson({
    id: 's02-mat-1',
    title: 'Polígonos: nombres hasta 10 lados',
    icon: 'Hexagon',
    minutes: 13,
    gancho: 'La señal de ALTO, una celda de panal y una pizarra son figuras con lados rectos. ¿Sabes cómo se llama cada una?',
    objetivos: [
      'Reconocer qué es un polígono y cuáles figuras no lo son',
      'Nombrar y describir polígonos de 3 a 10 lados',
    ],
    resumen: [
      'Un polígono es una figura plana y cerrada formada por segmentos rectos que no se cruzan.',
      'Sus partes son: lados, vértices, ángulos interiores y diagonales. Un polígono tiene tantos lados como vértices y ángulos.',
      'Nombres: triángulo (3), cuadrilátero (4), pentágono (5), hexágono (6), heptágono (7), octágono (8), eneágono (9) y decágono (10).',
      'El círculo no es polígono porque su borde es curvo.',
    ],
    media: {
      id: 's02-mat-1-nombres', kind: 'image', title: 'Polígonos en el camino al mercado', aspect: '16:9',
      alt: 'Calle de un pueblo con una señal de alto octagonal, un panal hexagonal en un árbol, una ventana rectangular y un kiosco de techo octagonal; cada figura con su nombre.',
      brief: 'Ilustración de una calle de pueblo guatemalteco camino al mercado. Resaltar con contorno de color: señal de ALTO (octágono), panal de abejas en un árbol (hexágonos), ventana (cuadrilátero), banderín triangular, kiosco del parque con un recuadro que muestra su techo visto desde arriba (octágono), y una baldosa de 5 lados en la banqueta. Cada figura con una etiqueta pequeña: nombre y número de lados. Estilo plano, colores vivos, sin marcas ni texto adicional.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.7'], ambito: 'conocer',
          prompt: 'Tres figuras del camino al mercado. ¿Cuál **no** está formada solo por lados rectos?',
          explain: 'La tortilla es redonda: su borde es **curvo**. Las figuras hechas solo de lados rectos y cerradas se llaman **polígonos**.' },
        { layout: 'grid', options: [
          { id: 'a', text: 'La señal de ALTO', icon: 'Octagon', feedback: 'La señal de ALTO tiene 8 lados rectos.' },
          { id: 'b', text: 'Una tortilla', icon: 'Circle' },
          { id: 'c', text: 'Una ventana', icon: 'Square', feedback: 'La ventana tiene 4 lados rectos.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.7'], ambito: 'conocer', title: '¿Qué es un polígono?',
          prompt: 'Un **polígono** es una figura **plana** y **cerrada** formada por **segmentos rectos** que no se cruzan. Toca cada tarjeta para conocer sus partes.',
          media: { id: 's02-mat-1-partes', kind: 'diagram', title: 'Partes de un polígono', aspect: '4:3',
            alt: 'Un pentágono con sus partes rotuladas: un lado, un vértice, un ángulo interior y una diagonal punteada.',
            brief: 'Diagrama de un pentágono irregular grande en el centro. Flechas y rótulos: "lado" (un segmento en azul), "vértice" (punto rojo en una esquina), "ángulo interior" (arco amarillo dentro de una esquina) y "diagonal" (línea punteada que une dos vértices no vecinos). Debajo, tres contraejemplos pequeños tachados suavemente: un círculo ("borde curvo"), una figura abierta ("no cerrada") y una figura en forma de moño con lados que se cruzan ("lados cruzados"). Fondo blanco.' } },
        { icon: 'Hexagon', body: 'Un polígono tiene **tantos lados como vértices y ángulos**.', reveal: [
          { icon: 'Minus', front: 'Lado', back: 'Cada segmento recto del borde.' },
          { icon: 'CircleDot', front: 'Vértice', back: 'El punto donde se juntan dos lados.' },
          { icon: 'Slash', front: 'Diagonal', back: 'Segmento que une dos vértices que **no** son vecinos.' },
          { icon: 'X', front: 'No son polígonos', back: 'El círculo (borde curvo), una figura abierta y una figura cuyos lados se cruzan.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.7'], prompt: '¿Es polígono o no?',
          hint: 'Revisa tres cosas: ¿es cerrada?, ¿todos sus lados son rectos?, ¿sus lados no se cruzan?',
          explain: 'Basta con que falle una de las tres condiciones para que no sea polígono.' },
        { buckets: [
          { id: 'si', label: 'Polígono', icon: 'Check', color: 'var(--c-ok)' },
          { id: 'no', label: 'No es polígono', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'a', text: 'Un triángulo', bucket: 'si' },
          { id: 'b', text: 'La boca de un cántaro (círculo)', bucket: 'no', feedback: 'Su borde es curvo.' },
          { id: 'c', text: 'Una letra V (dos segmentos abiertos)', bucket: 'no', feedback: 'No es cerrada.' },
          { id: 'd', text: 'Una celda de panal (6 lados)', bucket: 'si' },
          { id: 'e', text: 'Un cuadrilátero con 4 lados rectos', bucket: 'si' },
          { id: 'f', text: 'Una figura en forma de moño: dos triángulos unidos por la punta, con lados que se cruzan', bucket: 'no', feedback: 'Sus lados se cruzan.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.7'], ambito: 'conocer', title: 'El nombre dice cuántos lados',
          prompt: 'El nombre de cada polígono viene del griego y **cuenta sus lados**. Toca cada tarjeta.' },
        { icon: 'ListOrdered', body: 'Truco: la primera parte del nombre es el número. **Penta** = 5, **hexa** = 6, **hepta** = 7, **octa** = 8, **enea** = 9, **deca** = 10.', reveal: [
          { icon: 'Triangle', front: '3 y 4 lados', back: '**Triángulo** (3) y **cuadrilátero** (4).' },
          { icon: 'Pentagon', front: '5 y 6 lados', back: '**Pentágono** (5) y **hexágono** (6), como las celdas de un panal.' },
          { icon: 'Octagon', front: '7 y 8 lados', back: '**Heptágono** (7) y **octágono** (8), como la señal de ALTO.' },
          { icon: 'Star', front: '9 y 10 lados', back: '**Eneágono** (9), también llamado nonágono, y **decágono** (10).' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.7'], prompt: 'Une cada polígono con su número de lados.',
          hint: 'Usa el truco: penta 5, hexa 6, hepta 7, octa 8, enea 9, deca 10.',
          explain: 'El prefijo del nombre te dice el número de lados.' },
        { leftTitle: 'Polígono', rightTitle: 'Lados', pairs: [
          { id: 'p1', left: 'Pentágono', right: '5 lados' },
          { id: 'p2', left: 'Heptágono', right: '7 lados' },
          { id: 'p3', left: 'Octágono', right: '8 lados' },
          { id: 'p4', left: 'Eneágono', right: '9 lados' },
          { id: 'p5', left: 'Decágono', right: '10 lados' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.7'], ambito: 'hacer', title: 'Describir un polígono',
          prompt: 'Describir un polígono es decir su nombre y contar sus partes. Observa.' },
        { icon: 'Octagon', problem: 'Describe la señal de **ALTO**.',
          steps: [
            { text: 'Cuento los lados: **8**. Entonces es un **octágono**.' },
            { text: 'Tiene tantos vértices y ángulos como lados: **8 vértices** y **8 ángulos**.', why: 'Cada vértice une dos lados y forma un ángulo.' },
            { text: 'Es plana, cerrada y de lados rectos que no se cruzan: sí es polígono.' },
          ],
          answer: 'La señal de ALTO es un **octágono**: 8 lados, 8 vértices y 8 ángulos.',
          tip: 'Lados = vértices = ángulos, en cualquier polígono.' },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.7'], prompt: 'Para una fiesta, arman una mesa en forma de **heptágono**. En cada **lado** se sienta una persona y en cada **vértice** ponen un florero. ¿Cuántas personas y floreros hay **en total**?',
          explain: 'Un heptágono tiene 7 lados y 7 vértices: 7 personas + 7 floreros = 14.' },
        { answer: 14, misconceptions: [
          { value: 7, msg: 'Contaste solo personas o solo floreros. Súmalos.' },
          { value: 16, msg: 'Revisa: hepta = 7, no 8.' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.7'], prompt: 'Completa la descripción.',
          explain: 'Hexágono = 6 lados; eneágono = 9 lados; decágono = 10 lados.' },
        { text: 'Una celda de panal es un [[hexágono]]: tiene [[6]] lados y 6 vértices. Un polígono de 9 lados se llama [[eneágono]] y uno de 10 lados, [[decágono]].',
          distractors: ['octágono', '8', 'heptágono'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.7'], prompt: 'Una figura cerrada tiene **8 vértices** y lados rectos. ¿Cómo se llama?',
          explain: 'Vértices = lados. Con 8 lados es un **octágono**.' },
        { options: [
          { id: 'a', text: 'Hexágono', feedback: 'El hexágono tiene 6 vértices.' },
          { id: 'b', text: 'Octágono' },
          { id: 'c', text: 'Decágono', feedback: 'El decágono tiene 10.' },
        ], correct: ['b'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.7'], prompt: '¿Cuántos **lados** tiene un **eneágono**?' },
        { answer: 9 },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.7'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Un círculo es un polígono.', answer: false, why: 'Su borde es curvo.' },
          { text: 'Un pentágono tiene 5 vértices.', answer: true },
          { text: 'Un heptágono tiene 8 lados.', answer: false, why: 'Tiene 7.' },
          { text: 'Una diagonal une dos vértices que no son vecinos.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Regulares e irregulares ───────────────────────── */
  lesson({
    id: 's02-mat-2',
    title: 'Polígonos regulares e irregulares',
    icon: 'Shapes',
    minutes: 13,
    gancho: 'Las celdas de un panal son todas iguales por dentro y por fuera. ¿Qué las hace tan especiales?',
    objetivos: [
      'Distinguir un polígono regular de uno irregular',
      'Explicar por qué el rombo y el rectángulo no son regulares',
    ],
    resumen: [
      'Un polígono es regular si tiene TODOS sus lados iguales y TODOS sus ángulos iguales.',
      'Si falla una de las dos condiciones, es irregular.',
      'El rombo tiene lados iguales pero ángulos distintos; el rectángulo tiene ángulos iguales pero lados distintos: ambos son irregulares.',
      'Ejemplos de regulares: triángulo equilátero, cuadrado, pentágono y hexágono regulares, la señal de ALTO.',
    ],
    media: {
      id: 's02-mat-2-panal', kind: 'image', title: 'El panal: hexágonos regulares', aspect: '4:3',
      alt: 'Acercamiento a un panal de abejas: celdas de seis lados iguales, una de ellas resaltada con sus seis lados y sus seis ángulos de 120° marcados.',
      brief: 'Ilustración realista-suave de un panal de abejas de un apiario comunitario (sin marcas). Una celda resaltada en color con cada lado marcado con una rayita igual y cada ángulo con un arco y la etiqueta "120°". A la par, en recuadro, un hexágono irregular (lados distintos) para comparar, con la etiqueta "irregular". Fondo cálido, abejas pequeñas amigables.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.6'], ambito: 'conocer',
          prompt: '¿Qué tienen de especial las celdas de un panal de abejas?',
          explain: 'Cada celda es un hexágono con **seis lados iguales** y **seis ángulos iguales**. A esos polígonos se les llama **regulares**.' },
        { options: [
          { id: 'a', text: 'Todos sus lados y todos sus ángulos son iguales', icon: 'Hexagon' },
          { id: 'b', text: 'Son redondas', icon: 'Circle', feedback: 'Mira bien: tienen seis lados rectos.' },
          { id: 'c', text: 'Cada una tiene lados de distinto tamaño', icon: 'Shapes', feedback: 'Si así fuera, no encajarían tan bien unas con otras.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.6'], ambito: 'conocer', title: 'Regular = dos condiciones',
          prompt: 'Un polígono es **regular** si cumple **dos** condiciones a la vez. Si falla una, es **irregular**. Toca cada tarjeta.' },
        { icon: 'ListChecks', body: '**Regular** = todos los lados iguales **y** todos los ángulos iguales.', reveal: [
          { icon: 'Ruler', front: 'Condición 1: lados', back: 'Todos sus lados miden lo mismo.' },
          { icon: 'Triangle', front: 'Condición 2: ángulos', back: 'Todos sus ángulos miden lo mismo.' },
          { icon: 'Check', front: 'Ejemplos regulares', back: 'Triángulo equilátero (lados iguales y ángulos de 60°), cuadrado, celda de panal, señal de ALTO.' },
          { icon: 'Shapes', front: 'Irregular no es "feo"', back: 'Solo significa que sus lados o sus ángulos no son todos iguales. Un terreno, una casa o una hoja de árbol suelen ser irregulares.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.6'], ambito: 'hacer', title: 'Ejemplo resuelto: la casita',
          prompt: 'A veces una figura parece regular, pero no lo es. Revisa las dos condiciones.' },
        { icon: 'Home', problem: 'La fachada de una casita es un pentágono con sus **5 lados de 3 m** (una pared cuadrada con un techo en punta). Sus ángulos miden **90°, 90°, 150°, 60° y 150°**. ¿Es regular?',
          steps: [
            { text: 'Condición 1, lados: los 5 miden 3 m. **Se cumple.**' },
            { text: 'Condición 2, ángulos: hay de 90°, de 150° y de 60°. **No se cumple.**', why: 'Para ser regular, los 5 ángulos deberían ser iguales (108° cada uno).' },
            { text: 'Como falla una condición, es **irregular**.' },
          ],
          answer: 'La fachada es un pentágono **irregular**, aunque sus lados sean iguales.',
          tip: 'Revisa siempre las dos condiciones: lados y ángulos.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.6'], prompt: '¿Regular o irregular?',
          hint: 'Pregunta 1: ¿todos los lados iguales? Pregunta 2: ¿todos los ángulos iguales? Deben cumplirse las dos.',
          explain: 'Solo son regulares los que tienen lados iguales **y** ángulos iguales.' },
        { buckets: [
          { id: 're', label: 'Regular', icon: 'Hexagon', color: 'var(--c-ok)' },
          { id: 'ir', label: 'Irregular', icon: 'Shapes', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'a', text: 'Cuadrado de 5 cm', bucket: 're' },
          { id: 'b', text: 'Rectángulo de 8 × 3 cm', bucket: 'ir', feedback: 'Sus ángulos son iguales, pero sus lados no.' },
          { id: 'c', text: 'Triángulo con ángulos de 60°, 60° y 60°', bucket: 're' },
          { id: 'd', text: 'Rombo con ángulos de 70° y 110°', bucket: 'ir', feedback: 'Sus lados son iguales, pero sus ángulos no.' },
          { id: 'e', text: 'Terreno de 5 lados: 12, 9, 15, 10 y 8 m', bucket: 'ir' },
          { id: 'f', text: 'Octágono de la señal de ALTO', bucket: 're' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.6'], ambito: 'conocer', title: 'Dos trampas frecuentes',
          prompt: 'Estas dos figuras engañan a mucha gente. Toca cada una.' },
        { icon: 'AlertTriangle', body: 'Cumplir **una sola** condición no alcanza.', reveal: [
          { icon: 'Diamond', front: 'El rombo', back: 'Lados iguales ✔, ángulos iguales ✘ (dos agudos y dos obtusos). **Irregular.**' },
          { icon: 'RectangleHorizontal', front: 'El rectángulo', back: 'Ángulos iguales ✔ (4 rectos), lados iguales ✘. **Irregular.**' },
          { icon: 'Square', front: 'El cuadrado', back: 'Lados iguales ✔ y ángulos iguales ✔. Es el **cuadrilátero regular**.' },
        ] },
      ),
      S.tf(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.6'], prompt: '¿Verdadero o falso?',
          hint: 'Recuerda las dos trampas: el rombo y el rectángulo.',
          explain: 'Un polígono regular necesita las dos condiciones a la vez.' },
        { statements: [
          { text: 'Un rectángulo es un polígono regular porque todos sus ángulos miden 90°.', answer: false, why: 'Le falta la condición de los lados iguales.' },
          { text: 'El cuadrado es un polígono regular.', answer: true },
          { text: 'Si un polígono tiene todos sus lados iguales, siempre es regular.', answer: false, why: 'Mira el rombo: lados iguales, ángulos distintos.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.6'],
          prompt: 'En el mercado ves estos objetos. ¿Cuáles tienen forma de **polígono regular**? (Elige todos los correctos.)',
          explain: 'La canasta hexagonal de lados y ángulos iguales y la baldosa cuadrada son regulares. El mantel rectangular y el terreno de lados distintos no.' },
        { multiple: true, options: [
          { id: 'a', text: 'Tapadera de canasta: hexágono de lados y ángulos iguales', icon: 'ShoppingBasket' },
          { id: 'b', text: 'Mantel de 2 m × 1 m', icon: 'RectangleHorizontal', feedback: 'Sus lados no son todos iguales.' },
          { id: 'c', text: 'Baldosa cuadrada de 30 cm', icon: 'Square' },
          { id: 'd', text: 'Parqueo en forma de trapecio', icon: 'Car', feedback: 'Un trapecio no tiene todos sus lados iguales.' },
        ], correct: ['a', 'c'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.6'], prompt: 'Un pentágono **regular** tiene un lado de **7 cm**. ¿Cuántos centímetros mide cada uno de sus otros lados?',
          explain: 'En un polígono regular todos los lados miden lo mismo: 7 cm.' },
        { answer: 7, unit: 'cm', misconceptions: [{ value: 35, msg: '35 sería la suma de los 5 lados. La pregunta es cuánto mide cada lado.' }] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.6'], prompt: 'Un rombo tiene lados de 6 cm y ángulos de **50° y 130°**. ¿Por qué **no** es regular?' },
        { options: [
          { id: 'a', text: 'Porque sus lados no son iguales' },
          { id: 'b', text: 'Porque sus ángulos no son todos iguales' },
          { id: 'c', text: 'Porque tiene 4 lados' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.6'], prompt: 'Clasifica.' },
        { buckets: [
          { id: 're', label: 'Regular', icon: 'Hexagon' },
          { id: 'ir', label: 'Irregular', icon: 'Shapes' },
        ], items: [
          { id: 'a', text: 'Hexágono con 6 lados de 4 cm y 6 ángulos de 120°', bucket: 're' },
          { id: 'b', text: 'Triángulo con lados de 3, 4 y 5 cm', bucket: 'ir' },
          { id: 'c', text: 'Romboide de 9 × 4 cm', bucket: 'ir' },
          { id: 'd', text: 'Triángulo equilátero', bucket: 're' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Suma de ángulos interiores ───────────────────────── */
  lesson({
    id: 's02-mat-3',
    title: 'Los ángulos del pentágono y del hexágono',
    icon: 'Pentagon',
    minutes: 14,
    gancho: 'Ya sabes que un triángulo suma 180°. ¿Y si el polígono tiene 5 o 6 lados?',
    objetivos: [
      'Dividir un polígono en triángulos trazando diagonales desde un vértice',
      'Establecer la suma de los ángulos interiores de un pentágono (540°) y un hexágono (720°)',
      'Calcular cada ángulo de un polígono regular',
    ],
    resumen: [
      'Desde un vértice, un polígono de n lados se divide en (n − 2) triángulos.',
      'Suma de ángulos interiores = número de triángulos × 180°. Cuadrilátero: 360°. Pentágono: 540°. Hexágono: 720°.',
      'En un polígono regular, cada ángulo = suma de ángulos ÷ número de lados. Pentágono regular: 108°. Hexágono regular: 120°.',
    ],
    media: {
      id: 's02-mat-3-triangular', kind: 'animation', title: 'Divide y vencerás: triángulos dentro de polígonos', aspect: '16:9', duration: 45,
      alt: 'Desde un vértice rojo salen diagonales que dividen un cuadrilátero en 2 triángulos, un pentágono en 3 y un hexágono en 4; en cada caso aparece la multiplicación por 180°.',
      brief: 'Animación 2D de 45 s. Aparece un cuadrilátero con un vértice rojo; salen diagonales que lo dividen en 2 triángulos de colores y aparece "2 × 180° = 360°". Se transforma en pentágono: 3 triángulos, "3 × 180° = 540°". Luego hexágono: 4 triángulos, "4 × 180° = 720°". Al final, una tabla: lados, triángulos, suma. Resaltar que los triángulos son siempre 2 menos que los lados. Narración en español neutro, subtítulos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.8'], ambito: 'conocer',
          prompt: 'Haz una predicción: ¿cuánto crees que suman los **5 ángulos interiores** de un pentágono?',
          explain: 'Suman **540°**. Hoy descubrirás por qué, usando lo que ya sabes de los triángulos.' },
        { options: [
          { id: 'a', text: '180°', feedback: 'Eso suma un triángulo. El pentágono es más grande: sus ángulos suman más.' },
          { id: 'b', text: '360°', feedback: 'Eso suma un cuadrilátero. El pentágono tiene un ángulo más.' },
          { id: 'c', text: '540°' },
        ], correct: ['c'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.8'], ambito: 'conocer', title: 'El truco de los triángulos',
          prompt: 'Elige **un solo vértice** y traza desde él todas las diagonales posibles. El polígono queda dividido en triángulos, y cada triángulo aporta **180°**. Toca cada tarjeta.' },
        { icon: 'Triangle', body: 'Suma de ángulos = número de triángulos × **180°**', reveal: [
          { icon: 'Square', front: 'Cuadrilátero (4 lados)', back: 'Se divide en **2** triángulos: 2 × 180° = **360°**.' },
          { icon: 'Pentagon', front: 'Pentágono (5 lados)', back: 'Se divide en **3** triángulos: 3 × 180° = **540°**.' },
          { icon: 'Hexagon', front: 'Hexágono (6 lados)', back: 'Se divide en **4** triángulos: 4 × 180° = **720°**.' },
          { icon: 'Lightbulb', front: 'El patrón', back: 'Siempre hay **2 triángulos menos que lados**. Los dos lados vecinos del vértice elegido no forman triángulo nuevo.' },
        ] },
      ),
      S.polygon(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.8'], ambito: 'hacer',
          prompt: 'Explora con **+** y **−**. Desde el vértice rojo, ¿en cuántos triángulos queda dividido el **pentágono**?',
          hint: 'Cambia a 5 lados y cuenta los triángulos de colores.',
          explain: 'El pentágono se divide en 3 triángulos (5 − 2 = 3).' },
        { sides: 5, ask: 'triangles', scaffold: true },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.8'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Así se calcula la suma de ángulos del pentágono y del hexágono.' },
        { icon: 'Calculator', problem: '¿Cuánto suman los ángulos interiores de un **pentágono**? ¿Y los de un **hexágono**?',
          steps: [
            { text: 'Pentágono: 5 lados → 5 − 2 = **3 triángulos**.' },
            { text: '3 × 180° = **540°**.', why: 'Los ángulos de los 3 triángulos juntos forman exactamente los ángulos del pentágono.' },
            { text: 'Hexágono: 6 lados → 6 − 2 = **4 triángulos**.' },
            { text: '4 × 180° = **720°**.' },
          ],
          answer: 'Pentágono: **540°**. Hexágono: **720°**.',
          tip: 'Suma = (lados − 2) × 180°. Sirve para cualquier polígono.' },
      ),
      S.polygon(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.8'], ambito: 'hacer',
          prompt: 'Ahora tú: ¿cuánto suman los ángulos interiores de un **hexágono**?',
          hint: 'Cuenta los triángulos del hexágono y multiplica por 180°.',
          explain: '4 triángulos × 180° = 720°.' },
        { sides: 6, ask: 'sum', scaffold: true },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.8', 'mat:1.1.6'], ambito: 'conocer', title: 'Cada ángulo de un polígono regular',
          prompt: 'Si el polígono es **regular**, todos sus ángulos son iguales. Entonces basta con **repartir** la suma entre el número de ángulos. Toca cada tarjeta.' },
        { icon: 'Divide', body: 'Cada ángulo = suma ÷ número de lados', reveal: [
          { icon: 'Pentagon', front: 'Pentágono regular', back: '540° ÷ 5 = **108°** cada ángulo.' },
          { icon: 'Hexagon', front: 'Hexágono regular', back: '720° ÷ 6 = **120°** cada ángulo.' },
          { icon: 'Bug', front: '¿Por qué el panal no deja huecos?', back: 'En cada esquina se juntan 3 hexágonos: 3 × 120° = **360°**, una vuelta completa. ¡Encajan perfecto!' },
        ] },
      ),
      S.polygon(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.8', 'mat:1.1.6'], ambito: 'hacer',
          prompt: 'Una tapadera de canasta es un **hexágono regular**. ¿Cuánto mide **cada** uno de sus ángulos?',
          explain: '720° ÷ 6 = 120°.' },
        { sides: 6, ask: 'interior-regular' },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.8'], prompt: 'Un terreno tiene forma de **pentágono irregular**. Cuatro de sus ángulos miden **100°, 110°, 120° y 90°**. ¿Cuánto mide el quinto ángulo?',
          explain: 'La suma debe ser 540°. 100 + 110 + 120 + 90 = 420, y 540 − 420 = 120°.' },
        { answer: 120, unit: '°', stimulus: '100° + 110° + 120° + 90° + ? = 540°', misconceptions: [
          { value: 420, msg: '420 es la suma de los cuatro ángulos conocidos. Réstala a 540.' },
          { value: 300, msg: 'Usaste 720°, que es la suma del hexágono. El pentágono suma 540°.' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.8'], prompt: 'Un hexágono tiene cinco ángulos de **120°, 120°, 120°, 120° y 100°**. ¿Cuánto mide el sexto?',
          explain: 'Suma del hexágono: 720°. Los cinco conocidos suman 580°. 720 − 580 = 140°.' },
        { answer: 140, unit: '°', misconceptions: [
          { value: 120, msg: 'No es regular: uno de sus ángulos mide 100°, así que el sexto no puede ser 120°.' },
          { value: 580, msg: 'Esa es la suma de los cinco conocidos. Réstala a 720.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.8', 'mat:1.1.6'], prompt: '¿Cuánto mide **cada** ángulo de un **pentágono regular**?' },
        { options: [
          { id: 'a', text: '90°' },
          { id: 'b', text: '108°' },
          { id: 'c', text: '120°' },
          { id: 'd', text: '540°' },
        ], correct: ['b'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.8'], prompt: 'Un hexágono tiene cinco ángulos de **115°** cada uno. ¿Cuánto mide el sexto ángulo?' },
        { answer: 145, unit: '°' },
      ),
    ],
  }),

  /* ───────────────────────── 4. Diseños con círculos ───────────────────────── */
  lesson({
    id: 's02-mat-4',
    title: 'Diseños con círculos y compás',
    icon: 'CircleDot',
    minutes: 15,
    gancho: 'Si tiras una piedra al lago, se forman círculos que crecen. ¿Cómo podrías dibujar círculos así de perfectos?',
    objetivos: [
      'Reconocer centro, radio y diámetro de un círculo',
      'Trazar una roseta de seis pétalos con compás',
      'Crear diseños con círculos siguiendo un patrón',
    ],
    resumen: [
      'Todos los puntos del borde de un círculo (la circunferencia) están a la misma distancia del centro: esa distancia es el radio.',
      'El diámetro atraviesa el círculo pasando por el centro y mide el doble del radio.',
      'Con el compás abierto a la medida del radio, se pueden marcar 6 puntos seguidos sobre la circunferencia: al unirlos se forma un hexágono regular.',
      'Patrones con círculos: concéntricos (mismo centro), en fila (se trasladan) y rosetas (centros sobre la circunferencia).',
    ],
    media: {
      id: 's02-mat-4-circulos', kind: 'image', title: 'Círculos a nuestro alrededor', aspect: '16:9',
      alt: 'Ondas concéntricas en el agua de un lago, un comal visto desde arriba y un plato de barro decorado con una roseta de seis pétalos.',
      brief: 'Composición en tres paneles: (1) ondas concéntricas en el agua tranquila de un lago al amanecer; (2) un comal de barro sobre el fuego visto desde arriba, con su centro, un radio y un diámetro marcados con líneas finas y rotulados; (3) un plato de cerámica artesanal con una roseta de seis pétalos pintada. Estilo ilustración cálida, sin marcas ni texto adicional.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.9'], ambito: 'conocer',
          prompt: '¿Qué herramienta te ayuda a dibujar un círculo **perfecto**?',
          explain: 'El **compás** mantiene siempre la misma abertura mientras giras: así todos los puntos quedan a la misma distancia del centro.' },
        { options: [
          { id: 'a', text: 'Una regla', icon: 'Ruler', feedback: 'La regla traza líneas rectas, no curvas.' },
          { id: 'b', text: 'Un compás', icon: 'Compass' },
          { id: 'c', text: 'Una escuadra', icon: 'Triangle', feedback: 'La escuadra sirve para ángulos rectos.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.9'], ambito: 'conocer', title: 'Partes del círculo',
          prompt: 'Un círculo se construye desde su **centro**. Toca cada tarjeta.' },
        { icon: 'CircleDot', body: 'Todos los puntos del borde (la **circunferencia**) están a la **misma distancia** del centro.', reveal: [
          { icon: 'CircleDot', front: 'Centro', back: 'El punto del medio. Ahí va la punta del compás.' },
          { icon: 'Minus', front: 'Radio', back: 'La distancia del centro al borde. Es la **abertura del compás**.' },
          { icon: 'MoveHorizontal', front: 'Diámetro', back: 'Cruza de borde a borde pasando por el centro. Mide **2 radios**.' },
          { icon: 'Hand', front: 'Sin compás', back: 'Amarra un lápiz a un cordel; sostén el otro extremo con un dedo en el centro y gira con el cordel estirado. ¡Cuidado con la punta del compás si usas uno!' },
        ] },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.9'], prompt: 'Abres el compás **4 cm** y trazas un círculo. ¿Cuánto mide su **diámetro**?',
          hint: 'La abertura del compás es el radio. El diámetro mide dos radios.',
          explain: '4 cm × 2 = 8 cm.' },
        { answer: 8, unit: 'cm', misconceptions: [
          { value: 4, msg: '4 cm es el radio. El diámetro es el doble.' },
          { value: 2, msg: 'Dividiste entre 2; el diámetro es el doble del radio, no la mitad.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.9'], ambito: 'hacer', title: 'La roseta de seis pétalos',
          prompt: 'Un diseño clásico que puedes hacer solo con compás. Sigue los pasos.',
          media: { id: 's02-mat-4-roseta', kind: 'animation', title: 'Trazo de la roseta', aspect: '1:1', duration: 45,
            alt: 'Un compás traza un círculo; luego, sin cambiar la abertura, traza arcos desde puntos del borde hasta formar una flor de seis pétalos y un hexágono.',
            brief: 'Animación 2D cuadrada de 45 s, vista de una hoja blanca. (1) Compás con abertura de 3 cm traza un círculo. (2) Sin cambiar la abertura, apoya la punta en un punto del borde y traza un arco que pasa por el centro. (3) Repite desde cada punto donde el arco cortó el borde: seis arcos forman una flor de 6 pétalos. (4) Los 6 puntos del borde se unen con regla: aparece un hexágono regular en otro color. Texto en pantalla: "abertura = radio". Sin narración, música suave.' } },
        { icon: 'Flower', problem: 'Traza una **roseta** de seis pétalos con un círculo de radio 3 cm.',
          steps: [
            { text: 'Abre el compás **3 cm**, pincha el centro y traza el círculo.' },
            { text: '**Sin cambiar la abertura**, pincha un punto cualquiera del borde y traza un arco que pase por el centro y corte el borde en dos puntos.', why: 'Como la abertura sigue siendo el radio, el arco llega justo al centro.' },
            { text: 'Pincha en uno de esos puntos nuevos y repite. Continúa alrededor: harás **6 arcos**.' },
            { text: 'Los 6 arcos forman una flor. Si unes con regla los 6 puntos del borde, obtienes un **hexágono regular**.', why: 'Cada lado del hexágono mide lo mismo que el radio.' },
          ],
          answer: 'Una roseta de 6 pétalos dentro de un círculo, con un hexágono regular escondido.',
          tip: 'La abertura del compás nunca cambia: por eso el diseño sale parejo.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.9', 'mat:1.1.6'], prompt: 'En la roseta, cada lado del hexágono mide **lo mismo que el radio**. Si el radio es de 3 cm, ¿qué clase de hexágono obtienes?',
          hint: 'Si todos los lados miden 3 cm y la figura es pareja, ¿es regular o irregular?',
          explain: 'Todos sus lados miden 3 cm y todos sus ángulos son iguales: es un **hexágono regular**.' },
        { options: [
          { id: 'a', text: 'Un hexágono regular de lado 3 cm' },
          { id: 'b', text: 'Un hexágono irregular', feedback: 'Todos los lados miden lo mismo (el radio) y los ángulos también son iguales.' },
          { id: 'c', text: 'Un hexágono regular de lado 6 cm', feedback: '6 cm sería el diámetro. Cada lado mide un radio.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.9'], ambito: 'conocer', title: 'Patrones con círculos',
          prompt: 'Con círculos se crean diseños que siguen una **regla** o **patrón**. Toca cada tipo.' },
        { icon: 'Repeat', body: 'Un patrón es una regla que se repite.', reveal: [
          { icon: 'Target', front: 'Concéntricos', back: 'Varios círculos con **el mismo centro** y radios distintos. Como las ondas en el lago o un tiro al blanco.' },
          { icon: 'MoreHorizontal', front: 'En fila', back: 'Círculos iguales que se **trasladan** la misma distancia, uno tras otro. Como las cuentas de un collar.' },
          { icon: 'Flower2', front: 'Rosetas y entrelazados', back: 'El centro de cada círculo nuevo está **sobre el borde** del anterior. Así se forman flores y cadenas.' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.9'], prompt: '¿Qué patrón de círculos describe cada diseño?',
          explain: 'Concéntricos: mismo centro. En fila: se trasladan. Roseta: centros sobre el borde del anterior.' },
        { buckets: [
          { id: 'co', label: 'Concéntricos', icon: 'Target' },
          { id: 'fi', label: 'En fila', icon: 'MoreHorizontal' },
          { id: 'ro', label: 'Roseta', icon: 'Flower2' },
        ], items: [
          { id: 'a', text: 'Un tiro al blanco de 4 anillos', bucket: 'co' },
          { id: 'b', text: 'Una cenefa de círculos iguales que se tocan', bucket: 'fi' },
          { id: 'c', text: 'Una flor de 6 pétalos trazada con compás', bucket: 'ro' },
          { id: 'd', text: 'Las ondas cuando cae una gota en una pila', bucket: 'co' },
          { id: 'e', text: 'Un collar de cuentas redondas iguales', bucket: 'fi' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.9'], prompt: 'Para una cenefa, Andrea traza en fila **5 círculos** de **radio 2 cm** que se tocan uno con otro. ¿Cuántos centímetros mide la fila de largo?',
          explain: 'Cada círculo mide 2 × 2 = 4 cm de diámetro. 5 círculos × 4 cm = 20 cm.' },
        { answer: 20, unit: 'cm', misconceptions: [
          { value: 10, msg: 'Usaste el radio (2 cm). Lo que ocupa cada círculo a lo largo es su diámetro.' },
          { value: 8, msg: 'Revisa: son 5 círculos, no 2.' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.9'], prompt: 'Un diseño tiene círculos **concéntricos**. El primero tiene radio de 1 cm y cada círculo nuevo tiene **1 cm más de radio**. ¿Cuánto mide el **diámetro** del cuarto círculo?',
          explain: 'Radios: 1, 2, 3, 4 cm. El cuarto tiene radio 4 cm y diámetro 8 cm.' },
        { answer: 8, unit: 'cm', misconceptions: [{ value: 4, msg: '4 cm es el radio del cuarto círculo. Pregunta el diámetro.' }] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['mat', 'art'], cnb: ['mat:1.1.9'], ambito: 'hacer',
          prompt: 'En casa, con compás o con cordel y lápiz, **crea un diseño** para decorar un plato o un cuaderno que combine **al menos dos patrones** de círculos. Describe tu regla.' },
        { minWords: 20, placeholder: 'Mi diseño…',
          model: 'Mi diseño tiene tres círculos concéntricos de radio 2, 3 y 4 cm. Alrededor puse una fila de círculos pequeños de radio 1 cm que se tocan. En el centro tracé una roseta de 6 pétalos.',
          rubric: ['Usé al menos dos patrones de círculos', 'Dije las medidas de los radios', 'Expliqué la regla que se repite'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.9'], prompt: 'Un círculo tiene **radio de 7 cm**. ¿Cuánto mide su diámetro?' },
        { answer: 14, unit: 'cm' },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.9'], prompt: '¿Qué tienen en común los círculos **concéntricos**?' },
        { options: [
          { id: 'a', text: 'Tienen el mismo radio' },
          { id: 'b', text: 'Tienen el mismo centro' },
          { id: 'c', text: 'Están en fila y se tocan' },
        ], correct: ['b'] },
      ),
    ],
  }),

  /* ───────────────────────── 5. Polígonos en la cultura maya ───────────────────────── */
  lesson({
    id: 's02-mat-5',
    title: 'Polígonos en la cultura maya',
    icon: 'Landmark',
    minutes: 15,
    gancho: 'Si volaras sobre una pirámide maya de Tikal, ¿qué figuras verías desde arriba?',
    objetivos: [
      'Identificar polígonos regulares e irregulares en la arquitectura y los tejidos mayas',
      'Interpretar cómo se usa la geometría en diseños de tu cultura',
      'Repasar polígonos, sus nombres y sus ángulos',
    ],
    resumen: [
      'Las pirámides mayas escalonadas, vistas desde arriba, muestran cuadrados o rectángulos uno dentro de otro: cada cuerpo es más pequeño que el de abajo.',
      'En los tejidos aparecen rombos, triángulos, cuadrados y zigzags hechos con simetría.',
      'Para interpretar un diseño: nombra sus polígonos, di si son regulares o irregulares y busca el patrón que se repite.',
      'El significado de los diseños puede variar entre comunidades: vale la pena preguntar a quienes tejen.',
    ],
    media: {
      id: 's02-mat-5-tikal', kind: 'image', title: 'Geometría en Tikal y en un güipil', aspect: '16:9',
      alt: 'A la izquierda, un templo escalonado de Tikal visto de frente y desde arriba, con sus cuerpos como rectángulos uno dentro de otro. A la derecha, un güipil con rombos, triángulos y zigzags.',
      brief: 'Ilustración en dos mitades. Izquierda: un templo maya escalonado de Tikal (Petén) entre la selva; un recuadro muestra su vista desde arriba como rectángulos de colores uno dentro de otro, con la etiqueta "vista desde arriba". Derecha: la parte frontal de un güipil con franjas de rombos, triángulos en zigzag y cuadrados, con uno de los rombos resaltado con contorno. Sin personas identificables, sin reproducir un diseño específico de una comunidad; colores inspirados en textiles del altiplano.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['mat', 'ccss'], cnb: ['mat:1.1.10'], ambito: 'conocer',
          prompt: 'Una pirámide maya escalonada tiene varios "pisos" o cuerpos, cada uno más pequeño que el de abajo. **Vista desde arriba**, ¿qué verías?',
          explain: 'Verías **cuadriláteros uno dentro de otro**: cada cuerpo es un rectángulo o cuadrado más pequeño, encima del anterior.' },
        { options: [
          { id: 'a', text: 'Círculos uno dentro de otro', icon: 'Target', feedback: 'Los cuerpos de estas pirámides tienen lados rectos, no curvos.' },
          { id: 'b', text: 'Cuadriláteros uno dentro de otro', icon: 'Square' },
          { id: 'c', text: 'Un solo triángulo', icon: 'Triangle', feedback: 'De frente puede parecer un triángulo; desde arriba se ven los cuerpos escalonados.' },
        ], correct: ['b'] },
      ),
      S.reading(
        { fase: 'construir', areas: ['mat', 'ccss'], cnb: ['mat:1.1.10'], ambito: 'conocer',
          prompt: 'Lee este texto sobre la geometría en la cultura maya y responde.' },
        { heading: 'Geometría que se construye y se teje', genre: 'texto expositivo',
          passage: 'Los antiguos mayas construyeron grandes ciudades como Tikal, en Petén. Sus templos son pirámides escalonadas: varios cuerpos de piedra, uno encima de otro, cada uno más pequeño que el de abajo. Vistos desde arriba, esos cuerpos forman rectángulos o cuadrados uno dentro de otro. Para construirlos se necesitaba medir, trazar ángulos rectos y repetir formas.\n\nEn muchas ciudades mayas también había canchas para el juego de pelota. Su forma, vista desde arriba, se parece a una letra I mayúscula: un rectángulo largo en el centro y dos rectángulos más anchos en los extremos.\n\nLa geometría sigue viva en los tejidos. En güipiles, fajas y cortes aparecen rombos, triángulos, cuadrados y zigzags. Las tejedoras cuentan hilos para que cada figura sea igual a la otra y para que el diseño sea simétrico. Muchas tejedoras explican que sus figuras tienen significados, por ejemplo relacionados con la naturaleza o con el universo, y esos significados pueden cambiar de una comunidad a otra.',
          questions: [
            { q: '¿Qué forma tienen los cuerpos de una pirámide escalonada vistos desde arriba?', options: [
              { id: 'a', text: 'Rectángulos o cuadrados uno dentro de otro' },
              { id: 'b', text: 'Círculos concéntricos' },
              { id: 'c', text: 'Hexágonos' },
            ], correct: 'a', why: 'El texto dice que forman rectángulos o cuadrados uno dentro de otro.' },
            { q: '¿Por qué las tejedoras cuentan hilos?', options: [
              { id: 'a', text: 'Para gastar menos hilo' },
              { id: 'b', text: 'Para que las figuras sean iguales y el diseño simétrico' },
              { id: 'c', text: 'Para tejer más rápido' },
            ], correct: 'b', why: 'Contar hilos asegura figuras congruentes y simetría.' },
            { q: 'Si quieres saber qué significa un rombo en el güipil de tu comunidad, ¿qué es lo más adecuado?', options: [
              { id: 'a', text: 'Suponer que significa lo mismo en todos los pueblos' },
              { id: 'b', text: 'Preguntar con respeto a una tejedora de tu comunidad' },
              { id: 'c', text: 'Decir que no significa nada' },
            ], correct: 'b', why: 'El texto dice que los significados pueden cambiar entre comunidades; quienes tejen son la mejor fuente.' },
          ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.10', 'mat:1.1.6'], ambito: 'conocer', title: 'Cómo interpretar un diseño',
          prompt: 'Interpretar un diseño con ojos de matemático es responder tres preguntas. Toca cada tarjeta.' },
        { icon: 'Search', body: 'Nombrar, clasificar y buscar el patrón.', reveal: [
          { icon: 'Tag', front: '1. ¿Qué polígonos hay?', back: 'Nómbralos por su número de lados: triángulos, cuadrados, rombos, rectángulos…' },
          { icon: 'Hexagon', front: '2. ¿Regulares o irregulares?', back: 'El cuadrado y el triángulo equilátero son regulares. El rombo (sin ángulos rectos) y el rectángulo son irregulares.' },
          { icon: 'Repeat', front: '3. ¿Qué se repite?', back: 'Busca la simetría (una mitad refleja la otra) y la franja que se repite a lo largo.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.10', 'mat:1.1.6'], prompt: 'Estos polígonos aparecen en construcciones y tejidos mayas. ¿Son regulares o irregulares?',
          hint: 'Regular: todos los lados iguales y todos los ángulos iguales.',
          explain: 'Cuadrados y triángulos equiláteros son regulares; rombos sin ángulos rectos y rectángulos, irregulares.' },
        { buckets: [
          { id: 're', label: 'Regular', icon: 'Hexagon', color: 'var(--c-ok)' },
          { id: 'ir', label: 'Irregular', icon: 'Shapes', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'a', text: 'Cuerpo cuadrado de una pirámide, vista desde arriba', bucket: 're' },
          { id: 'b', text: 'Rombo de un güipil con ángulos de 60° y 120°', bucket: 'ir' },
          { id: 'c', text: 'Rectángulo central de una cancha de juego de pelota', bucket: 'ir' },
          { id: 'd', text: 'Triángulo de un zigzag con sus 3 lados iguales', bucket: 're' },
          { id: 'e', text: 'Estela de piedra: rectángulo de 3 m × 1 m', bucket: 'ir' },
        ] },
      ),
      S.loom(
        { fase: 'aplicar', areas: ['mat', 'art'], cnb: ['mat:1.1.10'], ambito: 'hacer',
          prompt: 'Teje un **rombo** con un **rombo más pequeño adentro**, como en muchas fajas. Completa la mitad derecha reflejando la izquierda.',
          explain: 'El reflejo produce dos mitades congruentes: el rombo completo queda simétrico.' },
        { motif: 'Rombo dentro de rombo', palette: ['#c0283b', '#1c9a6b', '#eeae1f'], half: [
          [null, null, null, 0],
          [null, null, 0, 1],
          [null, 0, 1, 2],
          [0, 1, 2, 2],
          [null, 0, 1, 2],
          [null, null, 0, 1],
          [null, null, null, 0],
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.10', 'mat:1.1.7'], prompt: 'Vista desde arriba, una cancha de juego de pelota tiene forma de **I mayúscula**: un rectángulo largo y dos rectángulos más anchos en los extremos. Si recorres **todo el borde** de la figura completa, ¿cuántos lados tiene ese polígono?',
          hint: 'Dibuja una I con "sombrero" y "zapatos" y cuenta los segmentos del contorno uno por uno.',
          explain: 'Cada extremo ancho aporta 5 lados visibles (arriba, dos costados y dos pedacitos por dentro) y el centro aporta 2 lados largos: 5 + 5 + 2 = 12. Es un polígono irregular de 12 lados.' },
        { answer: 12, misconceptions: [
          { value: 4, msg: 'Eso sería un solo rectángulo. La I tiene "escalones" que agregan lados.' },
          { value: 8, msg: 'Casi: no olvides los pedacitos de borde por dentro de cada extremo.' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.8'], prompt: 'Repaso: un bordado tiene un **octágono**. ¿Cuánto suman sus ángulos interiores?',
          explain: 'Octágono: 8 − 2 = 6 triángulos. 6 × 180° = 1,080°.' },
        { answer: 1080, unit: '°', misconceptions: [
          { value: 1440, msg: 'Multiplicaste 8 × 180. Recuerda: son 2 triángulos menos que lados.' },
          { value: 135, msg: '135° mide cada ángulo si el octágono es regular. Te piden la suma.' },
        ] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.6', 'mat:1.1.7', 'mat:1.1.8', 'mat:1.1.9'], prompt: 'Repaso de la semana. ¿Verdadero o falso?' },
        { statements: [
          { text: 'Un decágono tiene 10 lados.', answer: true },
          { text: 'El rectángulo es un polígono regular.', answer: false, why: 'Sus lados no son todos iguales.' },
          { text: 'El diámetro mide el doble del radio.', answer: true },
          { text: 'Un hexágono se divide en 6 triángulos desde un vértice.', answer: false, why: 'Se divide en 6 − 2 = 4.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.10'], prompt: 'Una faja tiene rombos con sus 4 lados iguales y ángulos de **45° y 135°**, separados por cuadrados. ¿Qué afirmación es correcta?' },
        { options: [
          { id: 'a', text: 'Los rombos son irregulares y los cuadrados son regulares' },
          { id: 'b', text: 'Los rombos y los cuadrados son regulares' },
          { id: 'c', text: 'Los rombos son regulares y los cuadrados irregulares' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.10', 'mat:1.1.7'], prompt: 'Vista desde arriba, una plataforma maya tiene **8 lados iguales y 8 ángulos iguales**. ¿Cómo se describe?' },
        { options: [
          { id: 'a', text: 'Octágono regular' },
          { id: 'b', text: 'Hexágono regular' },
          { id: 'c', text: 'Octágono irregular' },
        ], correct: ['a'] },
      ),
      cierre({ areas: ['mat'], cnb: [] },
        ['Nombro polígonos de hasta 10 lados', 'Distingo polígonos regulares e irregulares', 'Calculo la suma de ángulos de pentágonos y hexágonos', 'Creo diseños con círculos'],
        ['Buscaré polígonos en los tejidos de mi familia o comunidad', 'Preguntaré a una tejedora qué significan sus figuras', 'Haré una roseta con compás o cordel']),
    ],
  }),
];
