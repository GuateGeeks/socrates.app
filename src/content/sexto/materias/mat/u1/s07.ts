/**
 * Matemáticas · Unidad 1 · Semana 7 — Del producto cartesiano a los números grandes.
 * Progresión: producto cartesiano (cierra el tema de conjuntos y enlaza con los pares ordenados) →
 * conjuntos numéricos N, Z y fraccionarios → leer y escribir cantidades hasta 999,999,999 →
 * cuántas unidades, decenas, centenas, millares y millones hay en una cantidad → números romanos hasta M.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Producto cartesiano ───────────────────────── */
  lesson({
    id: 's07-mat-1',
    title: 'El producto cartesiano',
    icon: 'Grid3x3',
    minutes: 13,
    gancho: 'En la refacción puedes elegir una bebida y un pan. ¿Cuántas refacciones distintas puedes armar?',
    objetivos: [
      'Formar el producto cartesiano A × B de dos conjuntos con dos o tres elementos',
      'Organizar los pares en una tabla o en un diagrama de árbol',
      'Calcular cuántos pares tiene A × B',
    ],
    resumen: [
      'El producto cartesiano A × B es el conjunto de todos los pares ordenados (a, b): el primer elemento sale de A y el segundo de B.',
      'Una tabla de doble entrada o un diagrama de árbol ayudan a no olvidar ningún par.',
      'Número de pares de A × B = (elementos de A) × (elementos de B).',
      'El orden importa: (azul, sol) está en A × B, pero (sol, azul) está en B × A.',
    ],
    media: {
      id: 's07-mat-1-refaccion', kind: 'image', title: 'Refacción para elegir', aspect: '4:3',
      alt: 'Una mesa de refacción escolar con dos tipos de atol y tres tipos de pan; una niña señala una bebida y un pan.',
      brief: 'Ilustración de una tienda escolar guatemalteca. A la izquierda, dos ollas rotuladas "atol de elote" y "atol de plátano". A la derecha, tres canastos: "pan dulce", "tamalito", "champurradas". Una niña de 11 años señala una olla y un canasto con cara de estar decidiendo. Arriba, líneas punteadas unen cada olla con cada canasto (6 líneas). Estilo plano, colores cálidos.',
    },
    steps: [
      S.number(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:3.2.4'], ambito: 'conocer',
          prompt: 'Bebidas: {atol de elote, atol de plátano}. Panes: {pan dulce, tamalito, champurrada}. Si eliges **una bebida y un pan**, ¿cuántas refacciones distintas puedes armar?',
          explain: 'Cada bebida se combina con cada uno de los 3 panes: 2 × 3 = **6** refacciones. Cada combinación es un **par ordenado** (bebida, pan).' },
        { answer: 6, misconceptions: [{ value: 5, msg: 'Sumaste 2 + 3. Cada bebida se combina con los 3 panes: 3 + 3.' }] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.4'], ambito: 'conocer', title: '¿Qué es el producto cartesiano?',
          prompt: 'El **producto cartesiano** de A y B se escribe **A × B** (se lee "A cruz B"). Es el conjunto de **todos** los pares ordenados (a, b) donde **a** viene de A y **b** viene de B. Toca cada tarjeta.' },
        { icon: 'Grid3x3', body: 'Se llama "cartesiano" por lo mismo que el plano cartesiano: trabaja con **pares ordenados**.', reveal: [
          { icon: 'ListOrdered', front: 'Par ordenado', back: 'En (a, b), primero va el elemento de A y después el de B. El orden importa, como en (x, y).' },
          { icon: 'Table', front: 'Tabla de doble entrada', back: 'Los elementos de A en las filas y los de B en las columnas: cada casilla es un par.' },
          { icon: 'GitBranch', front: 'Diagrama de árbol', back: 'De cada elemento de A salen ramas hacia todos los elementos de B.' },
          { icon: 'X', front: '¿Cuántos pares?', back: 'Si A tiene 2 elementos y B tiene 3, A × B tiene **2 × 3 = 6** pares.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.4'], ambito: 'hacer', title: 'Ejemplo resuelto: el mural',
          prompt: 'Para un mural, cada estudiante combina un color con un símbolo.',
          media: { id: 's07-mat-1-tabla', kind: 'diagram', title: 'A × B en tabla y en árbol', aspect: '16:9',
            alt: 'A la izquierda, una tabla con filas rojo y azul y columnas maíz, quetzal y sol; cada casilla tiene un par. A la derecha, un diagrama de árbol con las mismas 6 combinaciones.',
            brief: 'Diagrama con dos partes. Izquierda: tabla de doble entrada; filas "rojo" y "azul" (con manchitas de color), columnas "maíz", "quetzal", "sol" (con dibujos sencillos); en cada casilla, el par escrito: (rojo, maíz), (rojo, quetzal), (rojo, sol), (azul, maíz), (azul, quetzal), (azul, sol). Derecha: diagrama de árbol; de "rojo" y de "azul" salen tres ramas cada uno hacia maíz, quetzal y sol. Abajo: "2 × 3 = 6 pares". Fondo blanco.' } },
        { icon: 'Palette', problem: 'A = {rojo, azul} y B = {maíz, quetzal, sol}. Escribe **A × B**.',
          steps: [
            { text: 'Tomo el primer elemento de A, **rojo**, y lo combino con cada elemento de B: (rojo, maíz), (rojo, quetzal), (rojo, sol).' },
            { text: 'Tomo el segundo, **azul**: (azul, maíz), (azul, quetzal), (azul, sol).', why: 'Así recorro A en orden y no olvido ningún par.' },
            { text: 'Cuento: 2 × 3 = **6** pares.' },
          ],
          answer: 'A × B = {(rojo, maíz), (rojo, quetzal), (rojo, sol), (azul, maíz), (azul, quetzal), (azul, sol)}.',
          tip: 'Cada par empieza con un elemento de A, porque A se escribe primero en A × B.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.4'], prompt: 'Con A = {rojo, azul} y B = {maíz, quetzal, sol}, ¿qué par **sí** pertenece a A × B?',
          hint: 'En A × B, el primer lugar es para un color (de A) y el segundo para un símbolo (de B).',
          explain: '(azul, sol): azul viene de A y sol de B, en ese orden.' },
        { options: [
          { id: 'a', text: '(sol, azul)', feedback: 'Está al revés: ese par pertenece a B × A.' },
          { id: 'b', text: '(azul, sol)' },
          { id: 'c', text: '(rojo, azul)', feedback: 'Azul no está en B.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.4'], ambito: 'conocer', title: 'A × B y B × A',
          prompt: '¿Es lo mismo A × B que B × A? Toca cada tarjeta.' },
        { icon: 'ArrowRightLeft', body: 'Tienen **la misma cantidad** de pares, pero **no los mismos** pares.', reveal: [
          { icon: 'Grid3x3', front: 'A × B', back: '(rojo, maíz), (rojo, quetzal)… el color va primero.' },
          { icon: 'Grid3x3', front: 'B × A', back: '(maíz, rojo), (quetzal, rojo)… el símbolo va primero.' },
          { icon: 'Calculator', front: 'La cantidad', back: 'A × B: 2 × 3 = 6. B × A: 3 × 2 = 6. Es igual, porque en la multiplicación el orden no cambia el producto.' },
        ] },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.4'],
          prompt: 'Supongamos que la escuela quiere un ensayo de cada instrumento en cada día. C = {tambor, marimba, chirimía} y D = {lunes, miércoles, viernes}. ¿Cuántos pares tiene **C × D**?',
          hint: 'Multiplica los elementos de C por los elementos de D.',
          explain: '3 × 3 = 9 pares, desde (tambor, lunes) hasta (chirimía, viernes).' },
        { answer: 9, misconceptions: [{ value: 6, msg: 'Sumaste 3 + 3. En el producto cartesiano se multiplica: 3 × 3.' }] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.2.4'], prompt: 'A = {1, 2} y B = {x, y, z}. Completa **A × B** en el orden de la tabla.',
          explain: 'Primero el 1 con x, y, z; después el 2 con x, y, z.' },
        { text: 'A × B = {(1, x), (1, y), [[(1, z)]], (2, x), [[(2, y)]], (2, z)}', distractors: ['(z, 1)', '(y, 2)', '(1, 2)'] },
      ),
      S.coord(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.2.4', 'mat:1.5.3'],
          prompt: 'A = {1, 2, 3} y B = {1, 2}. Los pares de A × B son puntos del plano. El par **(3, 2)** pertenece a A × B: ubícalo.',
          explain: 'Primero x = 3 (derecha) y después y = 2 (arriba). A × B tiene 3 × 2 = 6 puntos: (1, 1), (1, 2), (2, 1), (2, 2), (3, 1) y (3, 2).' },
        { range: { xmin: 0, xmax: 5, ymin: 0, ymax: 5 }, task: { kind: 'place', x: 3, y: 2, emoji: '⭐', label: 'Par (3, 2)' } },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.2.4'],
          prompt: 'Supongamos que una cooperativa de tejedoras hace camisas en **3 tallas** {pequeña, mediana, grande} y **4 colores** {rojo, azul, verde, morado}. ¿Cuántas camisas diferentes (talla, color) ofrece?',
          explain: 'Es el producto cartesiano Tallas × Colores: 3 × 4 = 12 pares.' },
        { answer: 12, misconceptions: [{ value: 7, msg: 'Sumaste 3 + 4. Cada talla se combina con los 4 colores.' }] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.4'], prompt: 'A = {p, q} y B = {1, 2, 3}. ¿Qué par **no** pertenece a A × B?' },
        { options: [
          { id: 'a', text: '(p, 3)' },
          { id: 'b', text: '(q, 1)' },
          { id: 'c', text: '(1, p)' },
        ], correct: ['c'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.4'], prompt: 'A = {sol, luna, estrella} y B = {verde, amarillo}. ¿Cuántos pares tiene **B × A**?' },
        { answer: 6 },
      ),
    ],
  }),

  /* ───────────────────────── 2. Conjuntos numéricos ───────────────────────── */
  lesson({
    id: 's07-mat-2',
    title: 'Naturales, enteros y fraccionarios',
    icon: 'Hash',
    minutes: 14,
    gancho: 'Con unos números cuentas elotes, con otros mides el frío de una helada y con otros repartes una pizza. ¿Son todos de la misma familia?',
    objetivos: [
      'Identificar los elementos de los conjuntos de números naturales, enteros y fraccionarios',
      'Clasificar un número en el conjunto más pequeño al que pertenece',
      'Reconocer que los naturales están dentro de los enteros, y los enteros dentro de los fraccionarios',
    ],
    resumen: [
      'Naturales (N): los números para contar, 1, 2, 3, 4, … En esta lección no incluimos el 0 en N (algunos libros sí lo incluyen).',
      'Enteros (Z): los naturales, el cero y los negativos: …, −3, −2, −1, 0, 1, 2, 3, …',
      'Fraccionarios: los números que se pueden escribir como fracción a/b, con a y b enteros y b distinto de 0, como 3/4, −1/2 o 0.5 = 1/2.',
      'Todo natural es entero y todo entero es fraccionario (5 = 5/1). Por eso N ⊂ Z ⊂ fraccionarios.',
    ],
    media: {
      id: 's07-mat-2-familias', kind: 'image', title: 'Tres familias de números', aspect: '16:9',
      alt: 'Tres escenas: una niña cuenta elotes, un termómetro marca 2 grados bajo cero y una familia reparte un pastel en cuartos.',
      brief: 'Ilustración horizontal en tres escenas unidas: 1) una niña cuenta elotes en un canasto con los números 1, 2, 3 flotando; 2) un termómetro en una ventana con escarcha marca −2 °C; 3) una familia reparte un pastel en 4 partes iguales y aparece "1/4" junto a un trozo. Estilo plano, colores cálidos, poco texto.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:3.3.1'], ambito: 'conocer',
          prompt: '¿Qué número **no** sirve para contar cuántos elotes hay en un canasto?',
          explain: 'No existen "−3 elotes" en un canasto. Para contar usamos 1, 2, 3, …: los **números naturales**. Los negativos pertenecen a otro conjunto más grande: los **enteros**.' },
        { options: [
          { id: 'a', text: '12', feedback: 'Doce elotes sí se pueden contar.' },
          { id: 'b', text: '−3' },
          { id: 'c', text: '1', feedback: 'Un elote sí se puede contar.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.3.1'], ambito: 'conocer', title: 'Tres conjuntos de números',
          prompt: 'Los números forman **conjuntos**, cada uno más grande que el anterior. Toca cada tarjeta.',
          media: { id: 's07-mat-2-anidados', kind: 'diagram', title: 'N dentro de Z dentro de los fraccionarios', aspect: '4:3',
            alt: 'Tres óvalos uno dentro de otro. El pequeño N contiene 1, 2, 3, 15. El mediano Z agrega 0, −1, −7. El grande agrega 1/2, 3/4, −2/5 y 0.5.',
            brief: 'Diagrama de tres óvalos anidados. Óvalo interior (naranja) rotulado "Naturales N" con 1, 2, 3, 15. Óvalo medio (azul) rotulado "Enteros Z" con 0, −1, −7 en la parte que no es N. Óvalo exterior (verde) rotulado "Fraccionarios" con 1/2, 3/4, −2/5 y 0.5 en la parte que no es Z. Una nota: "5 = 5/1: los enteros también se pueden escribir como fracción". Fondo blanco, números grandes.' } },
        { icon: 'Layers', body: 'Cada conjunto **contiene** al anterior, como óvalos uno dentro de otro.', reveal: [
          { icon: 'Hash', front: 'Naturales N', back: '1, 2, 3, 4, … Sirven para **contar**. No tienen fin. (Algunos libros incluyen el 0; aquí empezamos en 1.)' },
          { icon: 'Thermometer', front: 'Enteros Z', back: '…, −3, −2, −1, **0**, 1, 2, 3, … Son los naturales, el cero y los **negativos**.' },
          { icon: 'PieChart', front: 'Fraccionarios', back: 'Los que se escriben como **a/b**, con a y b enteros y b distinto de 0: 1/2, 3/4, −2/5. Los decimales como 0.5 = 1/2 o 2.5 = 5/2 también lo son.' },
          { icon: 'Check', front: 'Unos dentro de otros', back: 'Todo natural es entero y todo entero es fraccionario: 5 = 5/1. Por eso **N ⊂ Z ⊂ fraccionarios**.' },
        ] },
      ),
      S.tf(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.3.1'], prompt: '¿Verdadero o falso?',
          hint: 'Recuerda los óvalos: N está dentro de Z, y Z dentro de los fraccionarios.',
          explain: 'Los negativos son enteros, pero no naturales; y cualquier entero se puede escribir como fracción.' },
        { statements: [
          { text: '−4 es un número entero.', answer: true },
          { text: '−4 es un número natural.', answer: false, why: 'Los naturales son 1, 2, 3, …; no incluyen negativos.' },
          { text: '9 es natural, entero y fraccionario a la vez.', answer: true },
          { text: '3/4 es un número entero.', answer: false, why: '3/4 está entre 0 y 1: no es entero.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.3.1'], ambito: 'hacer', title: 'Ejemplo resuelto: ¿a qué conjunto pertenece?',
          prompt: 'Busquemos el conjunto **más pequeño** al que pertenece cada número.' },
        { icon: 'Search', problem: 'Clasifica: **7**, **−3**, **3/4**, **2.5** y **8/2**.',
          steps: [
            { text: '7 sirve para contar: es **natural** (y también entero y fraccionario).' },
            { text: '−3 es negativo: es **entero**, pero no natural.' },
            { text: '3/4 y 2.5 (= 5/2) están entre dos enteros: son **fraccionarios**, pero no enteros.' },
            { text: '8/2 parece fracción, pero 8 ÷ 2 = 4: ¡es el **natural** 4!', why: 'Antes de clasificar una fracción, revisa si la división es exacta.' },
          ],
          answer: 'Naturales: 7 y 8/2. Entero no natural: −3. Fraccionarios no enteros: 3/4 y 2.5.',
          tip: 'Error frecuente: creer que todo lo que tiene raya de fracción no es entero. Divide primero.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.3.1'], prompt: 'Coloca cada número en el conjunto **más pequeño** al que pertenece.',
          hint: '¿Sirve para contar? → natural. ¿Es negativo sin parte fraccionaria? → entero. ¿Está entre dos enteros? → fraccionario.',
          explain: '6/3 = 2 es natural. −10 es entero. 1/3, −1/2 y 0.75 son fraccionarios que no son enteros.' },
        { buckets: [
          { id: 'n', label: 'Natural', icon: 'Hash', color: 'var(--c-maiz-strong)' },
          { id: 'z', label: 'Entero (no natural)', icon: 'Thermometer', color: 'var(--area-mat)' },
          { id: 'q', label: 'Fraccionario (no entero)', icon: 'PieChart' },
        ], items: [
          { id: 'a', text: '15', bucket: 'n' },
          { id: 'b', text: '−10', bucket: 'z' },
          { id: 'c', text: '1/3', bucket: 'q' },
          { id: 'd', text: '6/3', bucket: 'n', feedback: '6 ÷ 3 = 2: es natural.' },
          { id: 'e', text: '−1/2', bucket: 'q' },
          { id: 'f', text: '0.75', bucket: 'q', feedback: '0.75 = 3/4: fraccionario.' },
          { id: 'g', text: '−1', bucket: 'z' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.3.1'], ambito: 'conocer', title: 'Los conjuntos numéricos en la vida diaria',
          prompt: 'Cada conjunto sirve para algo distinto. Toca cada tarjeta.' },
        { icon: 'Lightbulb', body: 'Elige el conjunto según lo que quieras expresar.', reveal: [
          { icon: 'ShoppingBasket', front: 'Contar', back: '28 estudiantes, 150 elotes, 3 hermanos: **naturales**.' },
          { icon: 'Snowflake', front: 'Arriba y abajo de un punto', back: 'Temperaturas bajo cero, sótanos, deudas: **enteros** (con negativos).' },
          { icon: 'Ruler', front: 'Partes y medidas', back: '1/2 libra de frijol, 3/4 de hora, 1.5 metros de tela: **fraccionarios**.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.3.1'], prompt: 'Marca **todos** los conjuntos a los que pertenece el número **−6**.',
          explain: '−6 es entero (es negativo y no tiene parte fraccionaria) y también fraccionario (−6 = −6/1). No es natural.' },
        { multiple: true, options: [
          { id: 'a', text: 'Naturales', feedback: 'Los naturales no incluyen negativos.' },
          { id: 'b', text: 'Enteros' },
          { id: 'c', text: 'Fraccionarios' },
        ], correct: ['b', 'c'] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.3.1'], prompt: 'Completa con **∈** (pertenece) o **∉** (no pertenece). N = naturales, Z = enteros.',
          explain: 'Los negativos ∉ N pero ∈ Z. 1/2 no es entero. 12 pertenece a los dos.' },
        { text: '−5 [[∉]] N\n−5 [[∈]] Z\n1/2 [[∉]] Z\n12 [[∈]] N', distractors: ['⊂'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.3.1'], prompt: 'En la lista **3, −2, 1/4, 10, −7, 6/3, 2.5**, ¿cuántos números son **enteros**?',
          explain: 'Son enteros: 3, −2, 10, −7 y 6/3 (= 2). Son 5. Los números 1/4 y 2.5 no son enteros.' },
        { answer: 5, misconceptions: [
          { value: 4, msg: 'Revisa 6/3: 6 ÷ 3 = 2, así que también es entero.' },
          { value: 2, msg: 'Contaste solo los negativos. Los naturales también son enteros.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.3.1'], prompt: '¿Qué número es **entero pero no natural**?' },
        { options: [
          { id: 'a', text: '8' },
          { id: 'b', text: '−9' },
          { id: 'c', text: '2/5' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.3.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: '10/5 es un número natural.', answer: true },
          { text: '1.5 es un número entero.', answer: false },
          { text: 'Todo número natural es también entero.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Números hasta 999,999,999 ───────────────────────── */
  lesson({
    id: 's07-mat-3',
    title: 'Leer y escribir números hasta 999,999,999',
    icon: 'Binary',
    minutes: 15,
    gancho: 'Presupuestos de un país, habitantes de una región, kilómetros hasta la Luna… ¿Cómo se lee un número de nueve cifras sin enredarse?',
    objetivos: [
      'Leer cantidades de hasta nueve cifras usando las clases de unidades, millares y millones',
      'Escribir con cifras cantidades dictadas en palabras, colocando bien los ceros',
    ],
    resumen: [
      'Las cifras se agrupan de tres en tres, de derecha a izquierda: clase de las unidades, de los millares (mil) y de los millones. Cada grupo se separa con una coma: 245,380,017.',
      'Para leer: lee cada grupo como un número de hasta tres cifras y di "millones" o "mil" al terminar su grupo.',
      'Para escribir: separa lo que va antes de "millones", lo que va antes de "mil" y lo demás. Cada grupo necesita 3 cifras; completa con ceros.',
      'Se dice "un millón" (en singular) y "mil", no "un mil".',
    ],
    media: {
      id: 's07-mat-3-clases', kind: 'animation', title: 'Las clases de un número grande', aspect: '16:9', duration: 40,
      alt: 'El número 245,380,017 se separa en tres cajas de colores: millones, millares y unidades; una voz lo lee caja por caja.',
      brief: 'Animación 2D de 40 s. Aparece el número 245380017 sin comas. De derecha a izquierda, las cifras se agrupan de tres en tres en cajas de colores: verde "unidades" (017), azul "millares" (380), naranja "millones" (245), y aparecen las comas. Una narradora lee cada caja mientras se ilumina: "doscientos cuarenta y cinco millones… trescientos ochenta mil… diecisiete". Al final, el texto completo en pantalla. Narración en español de Guatemala, subtítulos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:4.1.1'], ambito: 'conocer',
          prompt: 'Supongamos que un país tiene **17,000,000** de habitantes. ¿Cómo se lee?',
          explain: 'Se lee "diecisiete millones". El grupo de la izquierda (17) va seguido de la palabra **millones**. Hoy aprenderás a leer cualquier número de hasta nueve cifras.' },
        { options: [
          { id: 'a', text: 'Diecisiete mil', feedback: 'Diecisiete mil es 17,000: tiene tres ceros menos.' },
          { id: 'b', text: 'Diecisiete millones' },
          { id: 'c', text: 'Ciento setenta mil', feedback: 'Eso sería 170,000.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.1', 'mat:4.1.3'], ambito: 'conocer', title: 'Las clases: grupos de tres cifras',
          prompt: 'Nuestro sistema es **decimal**: cada lugar vale 10 veces más que el de su derecha. Las cifras se agrupan de **tres en tres**. Toca cada tarjeta.',
          media: { id: 's07-mat-3-tabla', kind: 'diagram', title: 'Tabla de valor posicional hasta las centenas de millón', aspect: '16:9',
            alt: 'Tabla de nueve columnas agrupadas en tres clases: millones (CMi, DMi, UMi), millares (CM, DM, UM) y unidades (C, D, U), con el número 245,380,017 escrito cifra por cifra.',
            brief: 'Tabla horizontal de 9 columnas con tres bloques de color: naranja "Millones" (centenas de millón, decenas de millón, unidades de millón), azul "Millares" (centenas de millar, decenas de millar, unidades de millar) y verde "Unidades" (centenas, decenas, unidades). En la fila de abajo, el número 2 4 5 | 3 8 0 | 0 1 7, una cifra por casilla. Debajo de cada bloque, cómo se lee: "doscientos cuarenta y cinco millones", "trescientos ochenta mil", "diecisiete". Fondo blanco, letras grandes.' } },
        { icon: 'Table', body: 'De derecha a izquierda: **unidades**, **millares** y **millones**. Cada clase tiene unidades, decenas y centenas.', reveal: [
          { icon: 'Hash', front: 'Clase de las unidades', back: 'Unidades (U), decenas (D) y centenas (C): de 0 a 999.' },
          { icon: 'Hash', front: 'Clase de los millares', back: 'Unidades de millar, decenas de millar y centenas de millar. Se lee con la palabra **mil**.' },
          { icon: 'Hash', front: 'Clase de los millones', back: 'Unidades de millón, decenas de millón y centenas de millón. Se lee con la palabra **millones**.' },
          { icon: 'Maximize', front: 'El más grande', back: '999,999,999: novecientos noventa y nueve millones novecientos noventa y nueve mil novecientos noventa y nueve.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto: leer un número',
          prompt: 'Así se lee un número de nueve cifras, clase por clase.' },
        { icon: 'BookOpenText', problem: 'Lee **245,380,017**.',
          steps: [
            { text: 'Millones: 245 → "doscientos cuarenta y cinco **millones**".' },
            { text: 'Millares: 380 → "trescientos ochenta **mil**".' },
            { text: 'Unidades: 017 → "diecisiete".', why: 'Los ceros a la izquierda de una clase no se leen.' },
          ],
          answer: 'Doscientos cuarenta y cinco millones trescientos ochenta mil diecisiete.',
          tip: 'Si una clase es 000, se salta: 5,000,300 se lee "cinco millones trescientos".' },
      ),
      S.fill(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.1'], prompt: 'Supongamos que un departamento tiene **1,520,408** habitantes. Completa cómo se lee.',
          hint: 'Clases: 1 | 520 | 408. El primero es "un millón".',
          explain: 'Un millón quinientos veinte mil cuatrocientos ocho.' },
        { text: 'Un [[millón]] [[quinientos veinte]] mil [[cuatrocientos ocho]].', distractors: ['millones', 'cincuenta y dos', 'cuatrocientos ochenta'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto: escribir con cifras',
          prompt: 'Al escribir, lo difícil son los **ceros**. Cada clase debe tener 3 cifras.' },
        { icon: 'PenLine', problem: 'Escribe con cifras: "**cuarenta millones seiscientos mil treinta**".',
          steps: [
            { text: 'Antes de "millones" dice cuarenta → clase de millones: **40**.' },
            { text: 'Antes de "mil" dice seiscientos → clase de millares: **600**.' },
            { text: 'Después de "mil" dice treinta → clase de unidades: **030**.', why: 'Treinta tiene 2 cifras; completo con un 0 a la izquierda para tener 3.' },
            { text: 'Junto las clases: **40,600,030**.' },
          ],
          answer: '40,600,030',
          tip: 'Después de la clase de la izquierda, todas las demás clases llevan exactamente 3 cifras.' },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.1'], prompt: 'Escribe con cifras (sin comas): "**trescientos cinco millones siete mil noventa**".',
          hint: 'Clases: 305 | 007 | 090.',
          explain: '305,007,090. Las clases de millares y unidades necesitan ceros: 007 y 090.' },
        { answer: 305007090, misconceptions: [
          { value: 305790, msg: 'Faltan ceros: cada clase después de los millones necesita 3 cifras (007 y 090).' },
          { value: 30507090, msg: 'Revisa la clase de los millares: siete mil se escribe 007.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.1'], ambito: 'conocer', title: 'Errores frecuentes',
          prompt: 'Cuidado con estas trampas. Toca cada tarjeta.' },
        { icon: 'TriangleAlert', body: 'La mayoría de errores vienen de los ceros y del singular.', reveal: [
          { icon: 'Circle', front: 'Olvidar ceros', back: '"Dos millones cinco mil" es 2,005,000, no 25,000.' },
          { icon: 'Type', front: 'Un millón', back: '1,000,000 es "un millón". 2,000,000 ya es "dos millones".' },
          { icon: 'Type', front: 'Mil, no "un mil"', back: '1,300 se lee "mil trescientos". 21,000 se lee "veintiún mil".' },
          { icon: 'Hash', front: 'Comas de 3 en 3', back: 'Las comas se ponen contando 3 cifras **desde la derecha**: 12,400,000.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.1'], prompt: '¿Cómo se lee **900,015,200**?',
          explain: 'Clases 900 | 015 | 200: novecientos millones quince mil doscientos.' },
        { options: [
          { id: 'a', text: 'Novecientos millones quince mil doscientos' },
          { id: 'b', text: 'Novecientos mil quince doscientos', feedback: 'El 900 está en la clase de los millones.' },
          { id: 'c', text: 'Nueve millones ciento cincuenta y dos mil', feedback: 'Eso sería 9,152,000.' },
        ], correct: ['a'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.1'], prompt: 'Supongamos que una municipalidad aprueba "**doce millones cuatrocientos mil** quetzales" para un mercado nuevo. Escribe la cantidad con cifras (sin comas).',
          explain: '12 | 400 | 000 → 12,400,000.' },
        { answer: 12400000, unit: 'Q', misconceptions: [{ value: 12400, msg: 'Falta la clase de los millones: doce millones… lleva seis cifras después del 12.' }] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.1'], prompt: 'Ordena de **menor a mayor**.',
          explain: 'Primero compara cuántas cifras tiene cada número; si tienen las mismas, compara cifra por cifra desde la izquierda.' },
        { items: [
          { id: 'a', text: '8,765,432' },
          { id: 'b', text: '12,000,500' },
          { id: 'c', text: '120,005,000' },
          { id: 'd', text: '120,050,000' },
          { id: 'e', text: '210,000,000' },
        ], labels: { start: 'Menor', end: 'Mayor' } },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.1'], prompt: '¿Cómo se escribe con cifras "**ochenta millones cinco mil trece**"?' },
        { options: [
          { id: 'a', text: '80,513' },
          { id: 'b', text: '80,005,013' },
          { id: 'c', text: '80,050,013' },
        ], correct: ['b'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.1'], prompt: '¿Cómo se lee **603,070,400**?' },
        { options: [
          { id: 'a', text: 'Seiscientos tres millones setenta mil cuatrocientos' },
          { id: 'b', text: 'Seiscientos treinta millones setecientos cuatro mil' },
          { id: 'c', text: 'Sesenta y tres millones setenta mil cuatrocientos' },
        ], correct: ['a'] },
      ),
    ],
  }),

  /* ───────────────────────── 4. Unidades, decenas… millones en una cantidad ───────────────────────── */
  lesson({
    id: 's07-mat-4',
    title: '¿Cuántas decenas, centenas o millares hay?',
    icon: 'Banknote',
    minutes: 14,
    gancho: 'En el banco te cambian Q36,700 por billetes de Q100. ¿Cuántos billetes te dan?',
    objetivos: [
      'Reconocer el valor de cada cifra según su posición',
      'Determinar cuántas unidades, decenas, centenas, millares y millones completos hay en una cantidad',
    ],
    resumen: [
      'El valor de una cifra depende de su lugar: en 7,352,819 el 3 vale 300,000 (3 centenas de millar).',
      '"¿Qué cifra está en las decenas?" pide UNA cifra. "¿Cuántas decenas hay?" pide TODAS las decenas completas.',
      'Para saber cuántas decenas, centenas o millares completos hay, tapa las cifras a la derecha de ese lugar: lo que queda es la respuesta. En 5,280 hay 528 decenas, 52 centenas y 5 millares.',
      'Es como cambiar dinero: Q36,700 alcanzan para 367 billetes de Q100.',
    ],
    media: {
      id: 's07-mat-4-billetes', kind: 'image', title: 'Cambiar dinero en billetes', aspect: '4:3',
      alt: 'Una ventanilla de banco donde una señora recibe fajos de billetes de 100 quetzales; en un pizarrón se ve la cantidad 36,700.',
      brief: 'Ilustración de la ventanilla de un banco genérico guatemalteco (sin logotipos ni nombres reales). Una señora con su hija recibe fajos de billetes genéricos de color rojo con el número 100 (sin reproducir diseños reales de billetes). Un pizarrón detrás muestra "Q36,700 = 367 billetes de Q100", con las dos últimas cifras (00) tapadas por una mano dibujada. Estilo plano, colores suaves.',
    },
    steps: [
      S.number(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:4.1.3'], ambito: 'conocer',
          prompt: 'Supongamos que tienes **Q3,500** y los cambias por billetes de **Q100**. ¿Cuántos billetes recibes?',
          explain: 'Q3,500 = 35 grupos de Q100: recibes **35** billetes. Tapa las dos últimas cifras (00) y lee lo que queda: 35. Hoy verás por qué funciona.' },
        { answer: 35, misconceptions: [{ value: 5, msg: 'El 5 es la cifra de las centenas, pero hay más centenas "escondidas" en los millares: 3 millares = 30 centenas.' }] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.3'], ambito: 'conocer', title: 'El valor de cada cifra',
          prompt: 'En el sistema decimal, **10** de un lugar forman **1** del lugar de la izquierda. Toca cada tarjeta.' },
        { icon: 'Layers', body: '10 unidades = 1 decena · 10 decenas = 1 centena · 10 centenas = 1 millar · 1,000 millares = 1 millón.', reveal: [
          { icon: 'Hash', front: 'Valor de una cifra', back: 'En 7,352,819 el **3** está en las centenas de millar: vale **300,000**.' },
          { icon: 'Hash', front: 'La misma cifra, otro valor', back: 'En 7,352,819 el **8** vale 800, pero en 8,000,000 el 8 vale ocho millones.' },
          { icon: 'Plus', front: 'Descomponer', back: '7,352,819 = 7,000,000 + 300,000 + 50,000 + 2,000 + 800 + 10 + 9.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.3'], prompt: '¿Cuánto vale el **5** en **7,352,819**?',
          hint: 'Nombra los lugares desde la derecha: unidades, decenas, centenas, unidades de millar, decenas de millar…',
          explain: 'El 5 está en las decenas de millar: vale 50,000.' },
        { options: [
          { id: 'a', text: '5', feedback: 'Solo valdría 5 si estuviera en las unidades.' },
          { id: 'b', text: '5,000', feedback: 'Ese sería su valor en las unidades de millar. Está un lugar más a la izquierda.' },
          { id: 'c', text: '50,000' },
          { id: 'd', text: '500,000', feedback: 'Ese lugar lo ocupa el 3.' },
        ], correct: ['c'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.3'], ambito: 'conocer', title: '"¿Qué cifra?" o "¿cuántas?"',
          prompt: 'Estas dos preguntas parecen iguales, pero no lo son. Toca cada tarjeta.' },
        { icon: 'CircleHelp', body: 'Truco: para saber **cuántas** decenas, centenas o millares hay, **tapa** las cifras que están a la derecha de ese lugar.', reveal: [
          { icon: 'Search', front: '¿Qué cifra está en las decenas de 5,280?', back: 'Una sola cifra: **8**.' },
          { icon: 'Hand', front: '¿Cuántas decenas hay en 5,280?', back: 'Tapo la cifra de las unidades (0): quedan **528** decenas. (528 × 10 = 5,280.)' },
          { icon: 'Hand', front: '¿Cuántas centenas completas?', back: 'Tapo las dos últimas (80): **52** centenas. Sobran 80.' },
          { icon: 'Hand', front: '¿Cuántos millares completos?', back: 'Tapo las tres últimas (280): **5** millares.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.3'], ambito: 'hacer', title: 'Ejemplo resuelto: una cantidad grande',
          prompt: 'Apliquemos el truco a una cantidad de millones.' },
        { icon: 'Calculator', problem: 'Supongamos que un municipio recibe **Q4,528,000** para un parque. ¿Cuántos millares y cuántos millones completos hay?',
          steps: [
            { text: 'Millares: tapo las tres cifras de la derecha (000). Quedan **4,528** millares.', why: '4,528 × 1,000 = 4,528,000.' },
            { text: 'Millones: tapo las seis cifras de la derecha (528,000). Queda **4** millones completos.' },
            { text: 'Lo que sobra (528,000) no alcanza para otro millón.' },
          ],
          answer: 'Hay 4,528 millares y 4 millones completos.' },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.3'], prompt: '¿Cuántas **centenas** completas hay en **36,700**? (Son los billetes de Q100 del inicio.)',
          hint: 'Tapa las dos últimas cifras.',
          explain: 'Tapo 00 y quedan 367 centenas: 367 billetes de Q100.' },
        { answer: 367, misconceptions: [
          { value: 7, msg: '7 es la cifra que está en las centenas. La pregunta es cuántas centenas hay en total.' },
          { value: 36, msg: 'Esos son los millares. Para centenas tapa solo dos cifras.' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.3'], prompt: 'Descompón **3,406,250** según el valor de cada cifra.',
          explain: '3 millones, 4 centenas de millar, 0 decenas de millar, 6 millares, 2 centenas, 5 decenas y 0 unidades.' },
        { text: '3,406,250 = [[3]] millones + [[4]] centenas de millar + 0 decenas de millar + [[6]] millares + 2 centenas + [[5]] decenas + 0 unidades', distractors: ['0', '2', '40'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.3'], prompt: 'Supongamos que una fábrica empaca **1,284,500** lápices en cajas de **100**. ¿Cuántas cajas llenas salen?',
          explain: 'Cajas de 100 = centenas. Tapo las dos últimas cifras: 12,845 cajas.' },
        { answer: 12845, misconceptions: [{ value: 128450, msg: 'Tapaste una sola cifra (eso da decenas). Para cajas de 100, tapa dos.' }] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.3'], prompt: '¿Cuántos **millones** completos hay en **845,000,000**?',
          explain: 'Tapo las seis cifras de la derecha: quedan 845 millones.' },
        { options: [
          { id: 'a', text: '8', feedback: '8 es la cifra de las centenas de millón. Pregunta cuántos millones hay en total.' },
          { id: 'b', text: '845' },
          { id: 'c', text: '845,000', feedback: 'Esos son los millares.' },
        ], correct: ['b'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.3'], prompt: '¿Cuántas **decenas** completas hay en **9,436**?' },
        { answer: 943 },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.3'], prompt: '¿Cuánto vale el **7** en **270,154,003**?' },
        { options: [
          { id: 'a', text: '7,000,000' },
          { id: 'b', text: '70,000,000' },
          { id: 'c', text: '700,000' },
        ], correct: ['b'] },
      ),
    ],
  }),

  /* ───────────────────────── 5. Números romanos ───────────────────────── */
  lesson({
    id: 's07-mat-5',
    title: 'Los números romanos hasta M',
    icon: 'Landmark',
    minutes: 15,
    gancho: 'Vivimos en el siglo XXI. En relojes, libros y placas aparecen letras que en realidad son números. ¿Cómo se leen?',
    objetivos: [
      'Leer y escribir números romanos hasta M (1,000)',
      'Aplicar las reglas de suma, resta y repetición de los símbolos romanos',
    ],
    resumen: [
      'Siete símbolos: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1,000.',
      'Suma: si un símbolo está a la derecha de otro igual o mayor, se suma (VI = 6, XX = 20).',
      'Resta: I antes de V o X, X antes de L o C, y C antes de D o M se restan (IV = 4, XL = 40, CM = 900).',
      'I, X, C y M se repiten hasta 3 veces seguidas; V, L y D nunca se repiten. Para escribir, descompón el número: 894 = 800 + 90 + 4 = DCCC + XC + IV.',
    ],
    media: {
      id: 's07-mat-5-romanos', kind: 'image', title: 'Números romanos a nuestro alrededor', aspect: '4:3',
      alt: 'Un collage con un reloj de números romanos, la portada de un libro con "Capítulo XIV" y un cartel con "Siglo XXI".',
      brief: 'Ilustración en collage: 1) un reloj de pared antiguo con números romanos del I al XII; 2) un libro abierto con el título "Capítulo XIV"; 3) un cartel escolar que dice "Siglo XXI"; 4) una placa conmemorativa genérica con el año escrito en romanos. Estilo plano, colores sobrios, letras claras y legibles.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:4.1.2'], ambito: 'conocer',
          prompt: 'En un reloj con números romanos, justo antes del **X** (diez) está el número 9. ¿Cómo crees que se escribe?',
          explain: 'Se escribe **IX**: una I antes de la X significa "uno menos que diez". Los romanos escribían números con letras y con reglas de suma y resta.' },
        { options: [
          { id: 'a', text: 'VIIII', feedback: 'Con las reglas que usamos hoy, un símbolo no se repite 4 veces: se usa la resta.' },
          { id: 'b', text: 'IX' },
          { id: 'c', text: 'XI', feedback: 'XI es 10 + 1 = 11. El orden de las letras importa.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.2'], ambito: 'conocer', title: 'Los siete símbolos',
          prompt: 'Los antiguos romanos escribían los números con **siete letras**. Hoy aún se usan en siglos, capítulos, relojes y nombres de reyes o papas. Toca cada tarjeta.' },
        { icon: 'Landmark', body: '**I** = 1 · **V** = 5 · **X** = 10 · **L** = 50 · **C** = 100 · **D** = 500 · **M** = 1,000', reveal: [
          { icon: 'Plus', front: 'Regla de la suma', back: 'Un símbolo a la derecha de otro **igual o mayor** se suma: VI = 5 + 1 = 6; LX = 60; CCL = 250.' },
          { icon: 'Minus', front: 'Regla de la resta', back: 'Un símbolo menor a la **izquierda** de uno mayor se resta. Solo estos casos: **IV** = 4, **IX** = 9, **XL** = 40, **XC** = 90, **CD** = 400, **CM** = 900.' },
          { icon: 'Repeat', front: 'Regla de la repetición', back: 'I, X, C y M se repiten hasta **3 veces**: III = 3, XXX = 30, CCC = 300. **V, L y D nunca se repiten** (10 no es VV, es X).' },
          { icon: 'Clock', front: 'Un dato curioso', back: 'En algunos relojes antiguos el 4 aparece como IIII por tradición, pero la forma correcta es **IV**.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto: leer un romano',
          prompt: 'Para leer, separa el número en **bloques**: primero los que restan (dos letras) y luego los que suman.' },
        { icon: 'BookOpenText', problem: '¿Qué número es **CDXLIX**?',
          steps: [
            { text: 'Separo en bloques: CD | XL | IX.', why: 'Cada bloque tiene una letra menor delante de una mayor: son restas.' },
            { text: 'CD = 500 − 100 = **400**.' },
            { text: 'XL = 50 − 10 = **40**.' },
            { text: 'IX = 10 − 1 = **9**.' },
            { text: 'Sumo los bloques: 400 + 40 + 9.' },
          ],
          answer: 'CDXLIX = **449**.' },
      ),
      S.match(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.2'], prompt: 'Une cada número romano con su valor.',
          hint: 'Si una letra menor está antes de una mayor, se resta.',
          explain: 'XIV = 10 + 4; XL = 50 − 10; XC = 100 − 10; CD = 500 − 100; CM = 1,000 − 100.' },
        { leftTitle: 'Romano', rightTitle: 'Decimal', pairs: [
          { id: 'a', left: 'XIV', right: '14' },
          { id: 'b', left: 'XL', right: '40' },
          { id: 'c', left: 'XC', right: '90' },
          { id: 'd', left: 'CD', right: '400' },
          { id: 'e', left: 'CM', right: '900' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto: escribir en romanos',
          prompt: 'Para escribir, descompón el número en centenas, decenas y unidades, y escribe cada parte por separado.' },
        { icon: 'PenLine', problem: 'Escribe **894** en números romanos.',
          steps: [
            { text: 'Descompongo: 894 = 800 + 90 + 4.' },
            { text: '800 = 500 + 300 = **DCCC**.' },
            { text: '90 = 100 − 10 = **XC**.' },
            { text: '4 = 5 − 1 = **IV**.', why: 'No se escribe IIII: la I no se repite 4 veces.' },
            { text: 'Junto las partes en orden: DCCC + XC + IV.' },
          ],
          answer: '894 = **DCCCXCIV**.',
          tip: 'Error frecuente: escribir 999 como IM. Esa resta no está permitida; se descompone: 900 + 90 + 9 = CM + XC + IX.' },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.2'], prompt: '¿Qué número es **CCLXXVIII**?',
          hint: 'Aquí no hay restas: todas las letras van de mayor a menor. Suma CC + L + XX + VIII.',
          explain: 'CC = 200, L = 50, XX = 20, VIII = 8. Total: 278.' },
        { answer: 278 },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.2'], prompt: '¿Cómo se escribe **999** en números romanos?',
          explain: '999 = 900 + 90 + 9 = CM + XC + IX = CMXCIX.' },
        { options: [
          { id: 'a', text: 'IM', feedback: 'La I solo puede restarse de V y de X.' },
          { id: 'b', text: 'CMXCIX' },
          { id: 'c', text: 'DCCCCLXXXXVIIII', feedback: 'C, X e I no se repiten más de 3 veces seguidas.' },
        ], correct: ['b'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.2'], prompt: 'En un libro de cuentos, el último capítulo es el **LXVII**. ¿Cuántos capítulos tiene el libro?',
          explain: 'L = 50, X = 10, VII = 7. Total: 67 capítulos.' },
        { answer: 67 },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'El siglo XXI es el siglo veintiuno.', answer: true },
          { text: 'VV es la forma correcta de escribir 10.', answer: false, why: 'La V no se repite: 10 es X.' },
          { text: 'CD vale 400 y DC vale 600.', answer: true },
          { text: 'XXXX es la forma correcta de escribir 40.', answer: false, why: '40 se escribe XL.' },
        ] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.2'], prompt: '¿Qué número es **DCCXLV**?' },
        { answer: 745 },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.2'], prompt: '¿Cómo se escribe **649** en números romanos?' },
        { options: [
          { id: 'a', text: 'DCXLIX' },
          { id: 'b', text: 'DCIL' },
          { id: 'c', text: 'CDXLIX' },
        ], correct: ['a'] },
      ),
      cierre({ areas: ['mat'], cnb: [] },
        ['Formo el producto cartesiano de dos conjuntos', 'Distingo números naturales, enteros y fraccionarios', 'Leo y escribo números hasta 999,999,999', 'Leo y escribo números romanos hasta M'],
        ['Buscaré números romanos en libros, relojes o placas de mi comunidad', 'Leeré en voz alta una cantidad grande de una noticia', 'Contaré cuántas combinaciones de ropa puedo formar']),
    ],
  }),
];
