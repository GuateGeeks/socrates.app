/**
 * Matemáticas · Unidad 1 · Semana 6 — Conjuntos: subconjuntos y operaciones.
 * Progresión: qué es un conjunto y qué es un subconjunto → encontrar TODOS los subconjuntos (3 a 5 elementos) →
 * unión e intersección con diagramas de Venn (2 y 3 conjuntos) → diferencia y diferencia simétrica →
 * operaciones combinadas con paréntesis + repaso espiral.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Conjuntos y subconjuntos ───────────────────────── */
  lesson({
    id: 's06-mat-1',
    title: 'Conjuntos, elementos y subconjuntos',
    icon: 'Shapes',
    minutes: 13,
    gancho: 'En la milpa crecen juntos el maíz, el frijol y el ayote. Si los agrupas, formas un conjunto. ¿Y si solo tomas el maíz y el frijol?',
    objetivos: [
      'Resolver conjuntos y subconjuntos',
    ],
    resumen: [
      'Un conjunto es una colección de objetos bien definida; cada objeto es un elemento. Se escribe con llaves: M = {maíz, frijol, ayote}.',
      'En un conjunto no se repiten elementos y el orden no importa: {maíz, frijol} = {frijol, maíz}.',
      '∈ significa "pertenece a" y ∉ "no pertenece a": frijol ∈ M, chile ∉ M.',
      'B es subconjunto de A (B ⊂ A) si TODOS los elementos de B están en A. El conjunto vacío ∅ y el mismo A siempre son subconjuntos de A.',
    ],
    media: {
      id: 's06-mat-1-milpa', kind: 'image', title: 'La milpa como conjunto', aspect: '4:3',
      alt: 'Una milpa con maíz, frijol y ayote rodeada por una cuerda que forma un gran óvalo; dentro, un óvalo más pequeño encierra solo el maíz y el frijol.',
      brief: 'Ilustración de una milpa guatemalteca vista desde arriba: matas de maíz, enredaderas de frijol y plantas de ayote con flores amarillas. Una cuerda de color forma un óvalo grande que las encierra a las tres (rotulado "M"). Dentro, una cuerda de otro color forma un óvalo pequeño que encierra solo maíz y frijol (rotulado "B"). Fuera del óvalo grande, una planta de chile. Estilo plano, colores tierra, sin más texto.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:3.1.1'], ambito: 'conocer', title: '¿Qué es un conjunto?',
          prompt: 'Un **conjunto** es una colección de objetos bien definida. Cada objeto es un **elemento**. Toca cada tarjeta.' },
        { icon: 'Shapes', body: 'Los conjuntos se nombran con **letra mayúscula** y sus elementos se escriben entre **llaves { }**, separados por comas.', reveal: [
          { icon: 'Braces', front: 'Por extensión', back: 'M = {maíz, frijol, ayote}. Se escriben todos los elementos.' },
          { icon: 'ArrowRightLeft', front: 'El orden no importa', back: '{maíz, frijol} y {frijol, maíz} son el **mismo** conjunto.' },
          { icon: 'CopyX', front: 'No se repiten', back: 'Las letras de la palabra MAMÁ forman el conjunto {m, a}: cada elemento se escribe **una sola vez**.' },
          { icon: 'Check', front: '∈ y ∉', back: 'frijol **∈** M se lee "frijol pertenece a M". chile **∉** M: "chile no pertenece a M".' },
          { icon: 'Circle', front: 'Conjunto vacío', back: 'El conjunto sin elementos se escribe **∅** o { }. Ejemplo: los meses con 40 días.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.1.1'], ambito: 'conocer', title: 'Subconjuntos',
          prompt: 'B es **subconjunto** de A si **todos** los elementos de B también están en A. Se escribe **B ⊂ A**. Toca cada tarjeta.' },
        { icon: 'CircleDot', body: 'Piensa en un óvalo pequeño **dentro** de uno grande.', reveal: [
          { icon: 'Check', front: 'Ejemplo', back: '{maíz, frijol} ⊂ M, porque maíz y frijol están en M.' },
          { icon: 'X', front: 'Contraejemplo', back: '{frijol, chile} **no** es subconjunto de M: el chile no está en M. Basta **un** elemento de fuera.' },
          { icon: 'Circle', front: 'El vacío', back: '∅ es subconjunto de **cualquier** conjunto: no tiene ningún elemento que esté fuera.' },
          { icon: 'Copy', front: 'El mismo conjunto', back: 'M ⊂ M: todo conjunto es subconjunto de sí mismo.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto: ¿es subconjunto?',
          prompt: 'Revisar un subconjunto es como pasar lista: elemento por elemento.' },
        { icon: 'ListChecks', problem: 'H = {tomate, cebolla, chile, cilantro}. ¿Es **{cebolla, cilantro}** subconjunto de H? ¿Y **{tomate, ajo}**?',
          steps: [
            { text: '{cebolla, cilantro}: ¿cebolla ∈ H? Sí. ¿cilantro ∈ H? Sí.', why: 'Todos sus elementos están en H.' },
            { text: 'Entonces **{cebolla, cilantro} ⊂ H**.' },
            { text: '{tomate, ajo}: ¿tomate ∈ H? Sí. ¿ajo ∈ H? **No**.', why: 'Con un solo elemento fuera, ya no es subconjunto.' },
            { text: 'Entonces {tomate, ajo} **no es** subconjunto de H.' },
          ],
          answer: '{cebolla, cilantro} ⊂ H, pero {tomate, ajo} no es subconjunto de H.',
          tip: 'Error frecuente: pensar que basta con que "algunos" elementos estén en el conjunto grande. Tienen que estar TODOS.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.1.1'], ambito: 'conocer',
          prompt: '¿Cuál de estas colecciones está **bien definida**, es decir, cualquiera puede decir sin dudar qué va dentro?',
          explain: '"Los días de la semana" está bien definido: todas las personas estarían de acuerdo en cuáles son. "Las frutas más ricas" depende del gusto de cada quien. En matemáticas, un **conjunto** debe estar bien definido.' },
        { options: [
          { id: 'a', text: 'Las frutas más ricas', icon: 'Apple', feedback: 'Lo que es "rico" cambia de persona a persona: no está bien definido.' },
          { id: 'b', text: 'Los días de la semana', icon: 'CalendarDays' },
          { id: 'c', text: 'Los estudiantes altos del grado', icon: 'Ruler', feedback: '¿Desde cuántos centímetros alguien es "alto"? No está claro.' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.1.1'], prompt: 'Sea M = {maíz, frijol, ayote}. ¿Verdadero o falso?',
          hint: 'Revisa elemento por elemento qué hay dentro de las llaves.',
          explain: 'El orden no cambia un conjunto, y chile no está en M.' },
        { statements: [
          { text: 'ayote ∈ M', answer: true },
          { text: 'chile ∈ M', answer: false, why: 'Chile no está en la lista de M: chile ∉ M.' },
          { text: '{frijol, ayote, maíz} es el mismo conjunto que M.', answer: true },
          { text: 'M tiene 4 elementos.', answer: false, why: 'M tiene 3 elementos: maíz, frijol y ayote.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.1.1'], prompt: 'H = {tomate, cebolla, chile, cilantro}. ¿Cuáles son subconjuntos de H?',
          hint: 'Revisa cada elemento. Si uno solo no está en H, no es subconjunto.',
          explain: 'Son subconjuntos los que tienen todos sus elementos dentro de H, incluidos ∅ y el mismo H.' },
        { buckets: [
          { id: 'si', label: 'Es subconjunto de H', icon: 'Check', color: 'var(--c-maiz-strong)' },
          { id: 'no', label: 'No es subconjunto de H', icon: 'X', color: 'var(--area-mat)' },
        ], items: [
          { id: 'a', text: '{chile}', bucket: 'si' },
          { id: 'b', text: '{tomate, cilantro}', bucket: 'si' },
          { id: 'c', text: '{cebolla, papa}', bucket: 'no', feedback: 'La papa no está en H.' },
          { id: 'd', text: '∅', bucket: 'si', feedback: 'El vacío es subconjunto de cualquier conjunto.' },
          { id: 'e', text: '{tomate, cebolla, chile, cilantro}', bucket: 'si', feedback: 'Es el mismo H: todo conjunto es subconjunto de sí mismo.' },
          { id: 'f', text: '{güisquil}', bucket: 'no' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.1.1'], prompt: 'Forma el conjunto L con las **letras** de la palabra **GUATEMALA**. ¿Cuántos elementos tiene L?',
          explain: 'L = {g, u, a, t, e, m, l}. La "a" aparece varias veces en la palabra, pero en el conjunto se escribe una sola vez: 7 elementos.' },
        { answer: 7, misconceptions: [{ value: 9, msg: 'Contaste todas las letras de la palabra. En un conjunto, las letras repetidas se escriben una sola vez.' }] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.1.1'], prompt: 'D = {lunes, martes, miércoles, jueves, viernes}, los días de clase. Completa con **∈**, **∉** o **⊂**.',
          explain: '∈ y ∉ relacionan un elemento con un conjunto; ⊂ relaciona un conjunto con otro conjunto.' },
        { text: 'martes [[∈]] D\ndomingo [[∉]] D\n{lunes, viernes} [[⊂]] D', distractors: ['=', '∅'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.1.1'], prompt: 'P = {pino, aliso, ciprés, encino}, los árboles de un vivero. ¿Cuál **no** es subconjunto de P?',
          explain: 'El aguacate no está en P, así que {aliso, aguacate} no es subconjunto de P.' },
        { options: [
          { id: 'a', text: '{encino}', feedback: 'El encino está en P: sí es subconjunto.' },
          { id: 'b', text: '{aliso, aguacate}' },
          { id: 'c', text: '∅', feedback: 'El vacío es subconjunto de todo conjunto.' },
          { id: 'd', text: '{ciprés, pino, aliso}', feedback: 'Los tres están en P: sí es subconjunto.' },
        ], correct: ['b'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.1.1'], prompt: 'Resuelve el subconjunto: F = {mango, papaya, piña, sandía}. ¿Cuál **sí** es subconjunto de F?' },
        { options: [
          { id: 'a', text: '{mango, banano}' },
          { id: 'b', text: '{sandía, piña}' },
          { id: 'c', text: '{naranja}' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.1.1'], prompt: 'Comprueba pertenencia y subconjuntos en C = {rojo, azul, verde}. ¿Verdadero o falso?' },
        { statements: [
          { text: 'azul ∈ C', answer: true },
          { text: '{rojo, negro} ⊂ C', answer: false, why: 'Negro no está en C.' },
          { text: '∅ ⊂ C', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Todos los subconjuntos ───────────────────────── */
  lesson({
    id: 's06-mat-2',
    title: 'Encontrar todos los subconjuntos',
    icon: 'ListTree',
    minutes: 14,
    gancho: 'Con maíz, frijol y ayote, ¿de cuántas maneras distintas puedes llenar tu canasta, si también cuenta la canasta vacía?',
    objetivos: [
      'Hacer la lista completa de subconjuntos de un conjunto de 3 a 5 elementos, de forma ordenada',
    ],
    resumen: [
      'Para no olvidar ninguno, ordena los subconjuntos por tamaño: de 0 elementos (∅), de 1, de 2, … hasta el conjunto completo.',
      'Un conjunto de 3 elementos tiene 8 subconjuntos; de 4 elementos, 16; de 5 elementos, 32.',
      'Cada elemento nuevo duplica la cantidad, porque cada subconjunto anterior puede ir sin él o con él.',
      'No olvides el vacío ∅ ni el conjunto completo: los dos siempre cuentan.',
    ],
    media: {
      id: 's06-mat-2-canastas', kind: 'image', title: 'Ocho canastas diferentes', aspect: '16:9',
      alt: 'Ocho canastas en fila: una vacía, tres con un producto (maíz, frijol o ayote), tres con dos productos y una con los tres.',
      brief: 'Ilustración horizontal de ocho canastas tejidas guatemaltecas en fila, agrupadas por tamaño con separaciones: 1) una canasta vacía rotulada "∅"; 2) tres canastas con un solo producto cada una (mazorca, frijoles, ayote); 3) tres canastas con dos productos (maíz y frijol, maíz y ayote, frijol y ayote); 4) una canasta con los tres. Debajo de cada grupo, el número 1, 3, 3, 1 y al final "= 8". Estilo plano, colores cálidos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:3.1.1'], ambito: 'conocer', title: 'La lista ordenada por tamaño',
          prompt: 'El secreto para no olvidar ningún subconjunto es **ordenarlos por tamaño**. Toca cada grupo.' },
        { icon: 'ListOrdered', body: 'Empieza por el más pequeño (el vacío) y termina con el más grande (el conjunto completo).', reveal: [
          { icon: 'Circle', front: '0 elementos', back: '∅ → **1** subconjunto.' },
          { icon: 'Dot', front: '1 elemento', back: '{maíz}, {frijol}, {ayote} → **3** subconjuntos.' },
          { icon: 'Link', front: '2 elementos', back: '{maíz, frijol}, {maíz, ayote}, {frijol, ayote} → **3** subconjuntos. Truco: junta el primero con cada uno de los que siguen, luego el segundo con los que siguen.' },
          { icon: 'Layers', front: '3 elementos', back: '{maíz, frijol, ayote} → **1** subconjunto.' },
          { icon: 'Sigma', front: 'Total', back: '1 + 3 + 3 + 1 = **8** subconjuntos.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.1.1'], ambito: 'conocer', title: 'Cada elemento nuevo duplica',
          prompt: '¿Qué pasa si agregas un elemento más? Cada subconjunto que ya tenías puede ir **sin** el nuevo o **con** el nuevo. Por eso la cantidad se **duplica**.',
          media: { id: 's06-mat-2-duplica', kind: 'diagram', title: 'Los subconjuntos se duplican', aspect: '16:9',
            alt: 'Tabla de cinco filas: 1 elemento, 2 subconjuntos; 2 elementos, 4; 3 elementos, 8; 4 elementos, 16; 5 elementos, 32; con flechas "×2" entre filas.',
            brief: 'Diagrama tipo tabla con dos columnas: "Elementos del conjunto" (1, 2, 3, 4, 5) y "Número de subconjuntos" (2, 4, 8, 16, 32). Entre cada fila, una flecha curva con "×2". A la derecha, un ejemplo pequeño: los 4 subconjuntos de {maíz, frijol} (∅, {maíz}, {frijol}, {maíz, frijol}) y cómo al agregar "ayote" cada uno aparece dos veces: sin ayote y con ayote. Colores suaves, fondo blanco.' } },
        { icon: 'Copy', body: '1 elemento → 2 · 2 elementos → 4 · 3 elementos → 8 · 4 elementos → **16** · 5 elementos → **32**.', reveal: [
          { icon: 'Plus', front: 'De {maíz, frijol} a M', back: 'Los 4 de antes (∅, {maíz}, {frijol}, {maíz, frijol}) **sin** ayote, más esos mismos 4 **con** ayote: 4 + 4 = 8.' },
          { icon: 'Calculator', front: 'Regla rápida', back: 'Multiplica 2 por sí mismo tantas veces como elementos haya: 2 × 2 × 2 × 2 = 16 para 4 elementos.' },
          { icon: 'TriangleAlert', front: 'Cuidado', back: 'La regla te dice **cuántos** hay. Para **encontrarlos** todos, sigue haciendo la lista ordenada por tamaño.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto: un conjunto de 4 elementos',
          prompt: 'Hagamos la lista completa de los subconjuntos de un conjunto de 4 elementos.' },
        { icon: 'ListTree', problem: 'Encuentra todos los subconjuntos de **H = {tomate, cebolla, chile, cilantro}**.',
          steps: [
            { text: '0 elementos: ∅ → **1**.' },
            { text: '1 elemento: {tomate}, {cebolla}, {chile}, {cilantro} → **4**.' },
            { text: '2 elementos: {tomate, cebolla}, {tomate, chile}, {tomate, cilantro}, {cebolla, chile}, {cebolla, cilantro}, {chile, cilantro} → **6**.', why: 'Tomate con los 3 que siguen, cebolla con los 2 que siguen, chile con el último: 3 + 2 + 1 = 6.' },
            { text: '3 elementos: basta **quitar uno** cada vez: sin tomate, sin cebolla, sin chile, sin cilantro → **4**.' },
            { text: '4 elementos: H completo → **1**.' },
          ],
          answer: '1 + 4 + 6 + 4 + 1 = **16** subconjuntos, igual que dice la regla 2 × 2 × 2 × 2.',
          tip: 'Los de 3 elementos se encuentran rápido "quitando uno" a H.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.1.1'], ambito: 'conocer',
          prompt: 'M = {maíz, frijol, ayote}. ¿Cuántos **subconjuntos** crees que tiene M? (Recuerda: ∅ y el mismo M también cuentan.)',
          explain: 'Tiene **8**. Muchos piensan en 3 o en 6, pero al hacer una lista ordenada aparecen todos. ¡Vamos a comprobarlo!' },
        { options: [
          { id: 'a', text: '3', feedback: 'Esos serían solo los de un elemento.' },
          { id: 'b', text: '6', feedback: 'Te faltan algunos: ¿contaste el vacío y el conjunto completo?' },
          { id: 'c', text: '8' },
        ], correct: ['c'] },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.1.1'],
          prompt: 'C = {rojo, azul, verde}. Marca **todos** los subconjuntos de C que tienen **exactamente 2 elementos**.',
          hint: 'Junta rojo con cada color que sigue; luego azul con el que sigue. Deben salir 3.',
          explain: 'Los de 2 elementos son {rojo, azul}, {rojo, verde} y {azul, verde}.' },
        { multiple: true, options: [
          { id: 'a', text: '{rojo, azul}' },
          { id: 'b', text: '{rojo, verde}' },
          { id: 'c', text: '{azul, verde}' },
          { id: 'd', text: '{rojo}', feedback: 'Tiene un solo elemento.' },
          { id: 'e', text: '{azul, amarillo}', feedback: 'El amarillo no está en C: no es subconjunto.' },
          { id: 'f', text: '{rojo, azul, verde}', feedback: 'Tiene 3 elementos.' },
        ], correct: ['a', 'b', 'c'] },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.1.1'], prompt: '¿Cuántos subconjuntos tiene un conjunto de **5 elementos**, como {lunes, martes, miércoles, jueves, viernes}?',
          hint: 'Un conjunto de 4 elementos tiene 16. Cada elemento nuevo duplica.',
          explain: '16 × 2 = 32. También: 2 × 2 × 2 × 2 × 2 = 32.' },
        { answer: 32, misconceptions: [
          { value: 10, msg: 'Multiplicaste 5 × 2. La regla es duplicar una vez por cada elemento: 2, 4, 8, 16, 32.' },
          { value: 25, msg: 'Multiplicaste 5 × 5. Duplica una vez por cada elemento: 2, 4, 8, 16, 32.' },
          { value: 30, msg: 'Quizá olvidaste el vacío y el conjunto completo. Son 32.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.1.1'],
          prompt: 'Ana quiere escribir todos los subconjuntos de P = {pino, aliso, ciprés}. Ya anotó:\n∅, {pino}, {aliso}, {ciprés}, {pino, aliso}, {aliso, ciprés}, {pino, aliso, ciprés}.\n¿Cuál le **falta**?',
          explain: 'Deben ser 8; Ana tiene 7. Entre los de 2 elementos le falta **{pino, ciprés}**.' },
        { options: [
          { id: 'a', text: '{pino, ciprés}' },
          { id: 'b', text: '{aliso, pino}', feedback: 'Es igual a {pino, aliso}: el orden no importa y ya lo anotó.' },
          { id: 'c', text: 'No falta ninguno', feedback: 'Un conjunto de 3 elementos tiene 8 subconjuntos, y Ana tiene 7.' },
        ], correct: ['a'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.1.1'],
          prompt: 'Supongamos que en la refacción puedes ponerle a tu tostada cualquier combinación de **guacamole, frijol, salsa y queso** (o dejarla sola). ¿Cuántas tostadas diferentes se pueden preparar?',
          explain: 'Cada tostada corresponde a un subconjunto de {guacamole, frijol, salsa, queso}. Con 4 elementos hay 16 subconjuntos, incluido ∅ (la tostada sola).' },
        { answer: 16, misconceptions: [
          { value: 15, msg: 'También cuenta la tostada sola: es el subconjunto vacío.' },
          { value: 8, msg: 'Ese número es para 3 ingredientes. Con 4 se duplica.' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.1.1'],
          prompt: 'Para una exposición hay que elegir **3 de estos 4** estudiantes: Ana, Beto, Carla y Dany. ¿Cuántos grupos de 3 distintos se pueden formar?',
          explain: 'Elegir 3 de 4 es lo mismo que dejar fuera a 1: sin Ana, sin Beto, sin Carla o sin Dany. Son 4 grupos (los subconjuntos de 3 elementos).' },
        { answer: 4, misconceptions: [{ value: 24, msg: 'En un conjunto el orden no importa: {Ana, Beto, Carla} es el mismo grupo que {Carla, Ana, Beto}.' }] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.1.1'], prompt: '¿Qué lista tiene **todos** los subconjuntos de {sol, luna}?' },
        { options: [
          { id: 'a', text: '{sol}, {luna}' },
          { id: 'b', text: '{sol}, {luna}, {sol, luna}' },
          { id: 'c', text: '∅, {sol}, {luna}, {sol, luna}' },
        ], correct: ['c'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.1.1'], prompt: '¿Cuántos subconjuntos tiene V = {a, e, i, o}?' },
        { answer: 16 },
      ),
    ],
  }),

  /* ───────────────────────── 3. Unión e intersección ───────────────────────── */
  lesson({
    id: 's06-mat-3',
    title: 'Unión e intersección con diagramas de Venn',
    icon: 'Combine',
    minutes: 14,
    gancho: 'Dos grupos siembran árboles en el vivero escolar. ¿Qué especies sembraron entre los dos? ¿Cuáles sembraron ambos?',
    objetivos: [
      'Resolver unión e intersección de conjuntos',
    ],
    resumen: [
      'Un diagrama de Venn dibuja cada conjunto como un óvalo; los elementos comunes van en la parte donde los óvalos se cruzan.',
      'Unión A ∪ B: todos los elementos que están en A, en B o en ambos, sin repetir.',
      'Intersección A ∩ B: solo los elementos que están en A y también en B. Si no hay comunes, A ∩ B = ∅ (conjuntos disjuntos).',
      'Con tres conjuntos, el centro del diagrama guarda los elementos que están en los tres.',
    ],
    media: {
      id: 's06-mat-3-vivero', kind: 'image', title: 'El vivero escolar', aspect: '4:3',
      alt: 'Dos grupos de estudiantes en un vivero escolar con bolsitas de arbolitos; cada grupo tiene un rótulo con las especies que siembra.',
      brief: 'Ilustración de un vivero escolar al aire libre en Guatemala: hileras de bolsitas negras con arbolitos. A la izquierda, el grupo de Ana con un rótulo "A: pino, aliso, aguacate"; a la derecha, el grupo de Luis con un rótulo "B: aguacate, jocote, aliso, ciprés". En el centro, una maestra señala un pizarrón con dos óvalos cruzados. Estudiantes diversos, colores verdes y tierra, estilo plano.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:3.2.1'], ambito: 'conocer', title: 'Diagrama de Venn, unión e intersección',
          prompt: 'Un **diagrama de Venn** dibuja cada conjunto como un óvalo. Los óvalos se cruzan si tienen elementos en común. Toca cada tarjeta.',
          media: { id: 's06-mat-3-venn2', kind: 'diagram', title: 'Venn de dos conjuntos', aspect: '16:9',
            alt: 'Dos óvalos cruzados, A y B. Solo en A: pino. En el cruce: aliso y aguacate. Solo en B: jocote y ciprés. Debajo, dos copias: una con todo sombreado (A ∪ B) y otra con solo el cruce sombreado (A ∩ B).',
            brief: 'Diagrama con tres paneles. Panel grande arriba: rectángulo con dos óvalos cruzados, A (verde) y B (azul). Solo en A: "pino"; en el cruce: "aliso", "aguacate"; solo en B: "jocote", "ciprés". Abajo, dos paneles pequeños: el primero con ambos óvalos completamente sombreados y el rótulo "A ∪ B = {pino, aliso, aguacate, jocote, ciprés}"; el segundo con solo el cruce sombreado y el rótulo "A ∩ B = {aliso, aguacate}". Fondo blanco, letras grandes.' } },
        { icon: 'Combine', body: 'El **cruce** de los óvalos guarda los elementos que están en los dos conjuntos.', reveal: [
          { icon: 'Merge', front: 'Unión A ∪ B', back: 'Todos los elementos de A **o** de B, sin repetir. Se lee "A unión B". Es TODO lo sombreado.' },
          { icon: 'SquaresIntersect', front: 'Intersección A ∩ B', back: 'Solo los elementos que están en A **y también** en B. Se lee "A intersección B". Es el cruce.' },
          { icon: 'CircleOff', front: 'Disjuntos', back: 'Si dos conjuntos no tienen elementos comunes, sus óvalos no se cruzan y A ∩ B = ∅.' },
          { icon: 'TriangleAlert', front: 'Error frecuente', back: 'En la unión, un elemento común se escribe **una sola vez**: aliso no va dos veces.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: el vivero',
          prompt: 'Así se llenan el diagrama y las operaciones.' },
        { icon: 'Trees', problem: 'A = {pino, aliso, aguacate} y B = {aguacate, jocote, aliso, ciprés}. Encuentra **A ∩ B** y **A ∪ B**.',
          steps: [
            { text: 'Busco los comunes: aliso y aguacate. Los escribo en el **cruce**.', why: 'Siempre se empieza por el cruce.' },
            { text: 'Lo que queda de A (pino) va en la parte "solo A". Lo que queda de B (jocote, ciprés) va en "solo B".' },
            { text: '**A ∩ B = {aliso, aguacate}**.' },
            { text: '**A ∪ B = {pino, aliso, aguacate, jocote, ciprés}**: todo lo del diagrama, sin repetir.' },
          ],
          answer: 'A ∩ B tiene 2 elementos y A ∪ B tiene 5.',
          tip: 'Comprueba: 3 elementos de A + 4 de B = 7, pero los 2 comunes se contaron dos veces: 7 − 2 = 5.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.1'], ambito: 'conocer',
          prompt: 'El grupo de Ana siembra A = {pino, aliso, aguacate}. El de Luis siembra B = {aguacate, jocote, aliso, ciprés}. ¿Qué especies siembran **los dos grupos**?',
          explain: 'Aliso y aguacate están en las dos listas. Ese es el conjunto **intersección**. Hoy aprenderás a encontrarlo con un dibujo.' },
        { options: [
          { id: 'a', text: 'Aliso y aguacate' },
          { id: 'b', text: 'Pino y ciprés', feedback: 'El pino solo lo siembra Ana y el ciprés solo Luis.' },
          { id: 'c', text: 'Todas las especies', feedback: 'Eso sería juntar las dos listas. Busca las que se repiten.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.1'],
          prompt: 'Otro grado tiene C = {encino, pino, café, limón} y D = {limón, café, matilisguate}. Coloca cada especie en su parte del diagrama de Venn.',
          hint: 'Primero busca las que están en las dos listas: van al cruce.',
          explain: 'Café y limón están en los dos conjuntos: C ∩ D = {café, limón}.' },
        { buckets: [
          { id: 'c', label: 'Solo en C', icon: 'CircleDot' },
          { id: 'cd', label: 'En C y en D (cruce)', icon: 'SquaresIntersect', color: 'var(--c-maiz-strong)' },
          { id: 'd', label: 'Solo en D', icon: 'CircleDot' },
        ], items: [
          { id: 'a', text: 'encino', bucket: 'c' },
          { id: 'b', text: 'pino', bucket: 'c' },
          { id: 'e', text: 'café', bucket: 'cd' },
          { id: 'f', text: 'limón', bucket: 'cd' },
          { id: 'g', text: 'matilisguate', bucket: 'd' },
        ] },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.1'], prompt: 'Con los mismos C = {encino, pino, café, limón} y D = {limón, café, matilisguate}: ¿cuántos elementos tiene **C ∪ D**?',
          hint: 'Cuenta todo lo que colocaste en el diagrama, una sola vez.',
          explain: 'C ∪ D = {encino, pino, café, limón, matilisguate}: 5 elementos.' },
        { answer: 5, misconceptions: [
          { value: 7, msg: 'Contaste café y limón dos veces. En la unión, cada elemento va una sola vez.' },
          { value: 2, msg: 'Ese es el número de elementos de la intersección. La unión los junta todos.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.1'], ambito: 'conocer', title: 'Tres conjuntos',
          prompt: 'Con **tres** conjuntos, los óvalos se cruzan formando **7 partes**. Toca cada tarjeta. Usaremos A = {1, 2, 3, 4}, B = {3, 4, 5} y C = {4, 5, 6}.',
          media: { id: 's06-mat-3-venn3', kind: 'diagram', title: 'Venn de tres conjuntos', aspect: '1:1',
            alt: 'Tres óvalos cruzados A, B y C. Solo A: 1 y 2. A y B: 3. Centro (A, B y C): 4. B y C: 5. Solo C: 6.',
            brief: 'Diagrama cuadrado con tres óvalos de colores (A rojo arriba a la izquierda, B azul arriba a la derecha, C amarillo abajo) que se cruzan formando 7 regiones. Números: 1 y 2 en "solo A"; 3 en "A y B, no C"; 4 en el centro de los tres; 5 en "B y C, no A"; 6 en "solo C". Las regiones vacías quedan en blanco. Una flecha señala el centro con el texto "A ∩ B ∩ C". Fondo blanco.' } },
        { icon: 'CircleDashed', body: 'Llena el diagrama **del centro hacia afuera**: primero lo que está en los tres, luego lo que está en dos, al final lo que está en uno solo.', reveal: [
          { icon: 'Target', front: 'Centro: A ∩ B ∩ C', back: 'El 4 está en los tres: A ∩ B ∩ C = {4}.' },
          { icon: 'SquaresIntersect', front: 'En dos conjuntos', back: 'El 3 está en A y B (no en C). El 5 está en B y C (no en A).' },
          { icon: 'Merge', front: 'Unión de los tres', back: 'A ∪ B ∪ C = {1, 2, 3, 4, 5, 6}: todos, sin repetir.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.2.1'],
          prompt: 'Resuelve la intersección. Supongamos estos clubes de la escuela:\nFútbol F = {Ana, Luis, Rosa, Juan}\nMarimba M = {Rosa, Pedro, Ana}\nAjedrez J = {Juan, Rosa, Mía}\n¿Quién está en **los tres** clubes (F ∩ M ∩ J)?',
          explain: 'Solo Rosa aparece en las tres listas: F ∩ M ∩ J = {Rosa}.' },
        { options: [
          { id: 'a', text: 'Ana', feedback: 'Ana está en fútbol y marimba, pero no en ajedrez.' },
          { id: 'b', text: 'Rosa' },
          { id: 'c', text: 'Juan', feedback: 'Juan está en fútbol y ajedrez, pero no en marimba.' },
        ], correct: ['b'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.2.1'],
          prompt: 'Resuelve la unión. Con los mismos clubes F = {Ana, Luis, Rosa, Juan}, M = {Rosa, Pedro, Ana} y J = {Juan, Rosa, Mía}: ¿cuántos estudiantes distintos hay en **F ∪ M ∪ J**?',
          explain: 'F ∪ M ∪ J = {Ana, Luis, Rosa, Juan, Pedro, Mía}: 6 estudiantes.' },
        { answer: 6, misconceptions: [{ value: 10, msg: 'Sumaste 4 + 3 + 3, pero algunos estudiantes están en más de un club. Cuenta a cada persona una sola vez.' }] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.2.1'], prompt: 'P = {2, 4, 6, 8} y Q = {1, 3, 5}. ¿Verdadero o falso?',
          explain: 'P tiene pares y Q impares: no comparten ningún elemento.' },
        { statements: [
          { text: 'P ∩ Q = ∅', answer: true },
          { text: 'P y Q son disjuntos.', answer: true },
          { text: 'P ∪ Q tiene 6 elementos.', answer: false, why: 'P ∪ Q = {1, 2, 3, 4, 5, 6, 8}: tiene 7 elementos.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.1'], prompt: 'Resuelve la unión: R = {2, 4, 6, 8} y T = {3, 6, 9}. ¿Cuál es **R ∪ T**?' },
        { options: [
          { id: 'a', text: '{6}' },
          { id: 'b', text: '{2, 3, 4, 6, 8, 9}' },
          { id: 'c', text: '{2, 3, 4, 6, 6, 8, 9}' },
        ], correct: ['b'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.1'], prompt: 'Resuelve la intersección: V = {a, e, i, o, u} y W = {a, b, c, d, e}. ¿Cuántos elementos tiene **V ∩ W**?' },
        { answer: 2 },
      ),
    ],
  }),

  /* ───────────────────────── 4. Diferencia y diferencia simétrica ───────────────────────── */
  lesson({
    id: 's06-mat-4',
    title: 'Diferencia y diferencia simétrica',
    icon: 'SquareSplitHorizontal',
    minutes: 14,
    gancho: 'Ana y Luis comparan sus canastas de fruta. ¿Qué tiene Ana que Luis no tiene? ¿Y qué frutas tiene solo uno de los dos?',
    objetivos: [
      'Resolver diferencias entre conjuntos',
    ],
    resumen: [
      'Diferencia A − B: los elementos de A que NO están en B. En el Venn, es la parte "solo A".',
      'A − B y B − A casi siempre son distintos: el orden importa.',
      'Diferencia simétrica A Δ B: los elementos que están en uno solo de los dos conjuntos (no en ambos).',
      'A Δ B = (A − B) ∪ (B − A). También: A Δ B = (A ∪ B) − (A ∩ B).',
    ],
    media: {
      id: 's06-mat-4-canastas', kind: 'image', title: 'Dos canastas de fruta', aspect: '4:3',
      alt: 'Ana y Luis sostienen canastas de fruta. La de Ana tiene mango, piña, banano y papaya; la de Luis tiene piña, papaya y naranja.',
      brief: 'Ilustración en un mercado guatemalteco: una niña (Ana) y un niño (Luis) muestran sus canastas. Canasta de Ana: mango, piña, banano, papaya. Canasta de Luis: piña, papaya, naranja. Entre ambos, flotando, un diagrama de Venn sencillo con esas frutas dibujadas en sus regiones (piña y papaya en el cruce). Estilo plano, colores vivos, sin texto adicional.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:3.2.1'], ambito: 'conocer', title: 'La diferencia A − B',
          prompt: 'La **diferencia A − B** (se lee "A menos B") es el conjunto de elementos que están en A pero **no** en B. Toca cada tarjeta.' },
        { icon: 'Minus', body: 'Al conjunto A se le "quitan" los elementos que comparte con B.', reveal: [
          { icon: 'CircleDot', front: 'En el Venn', back: 'A − B es la parte de A que **no** toca a B: la zona "solo A".' },
          { icon: 'ArrowRightLeft', front: 'El orden importa', back: 'Con las canastas: A − B = {mango, banano}, pero B − A = {naranja}. ¡Son distintos!' },
          { icon: 'Circle', front: 'Puede quedar vacío', back: 'Si todos los elementos de A están en B, entonces A − B = ∅.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: A − B y B − A',
          prompt: 'Observa cómo se calcula cada diferencia.' },
        { icon: 'Minus', problem: 'A = {1, 2, 3, 4, 5} y B = {4, 5, 6, 7}. Encuentra **A − B** y **B − A**.',
          steps: [
            { text: 'Comunes: 4 y 5. Esos se "quitan".', why: 'La diferencia nunca incluye elementos comunes.' },
            { text: 'A − B: de A quito 4 y 5 → **{1, 2, 3}**.' },
            { text: 'B − A: de B quito 4 y 5 → **{6, 7}**.' },
          ],
          answer: 'A − B = {1, 2, 3} y B − A = {6, 7}.',
          tip: 'Lee la operación en voz alta: "lo que está en A y no en B".' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.1'], ambito: 'conocer',
          prompt: 'Canasta de Ana: A = {mango, piña, banano, papaya}. Canasta de Luis: B = {piña, papaya, naranja}. ¿Qué frutas tiene Ana que Luis **no** tiene?',
          explain: 'Mango y banano. A esto se le llama **diferencia**: A − B = {mango, banano}.' },
        { options: [
          { id: 'a', text: 'Mango y banano' },
          { id: 'b', text: 'Piña y papaya', feedback: 'Esas las tienen los dos.' },
          { id: 'c', text: 'Naranja', feedback: 'La naranja la tiene Luis, no Ana.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.1'], prompt: 'J = {lunes, martes, miércoles} y K = {martes, jueves}. ¿Cuál es **J − K**?',
          hint: 'Empieza con J y quítale lo que también está en K.',
          explain: 'Martes está en los dos; se quita. J − K = {lunes, miércoles}.' },
        { options: [
          { id: 'a', text: '{lunes, miércoles}' },
          { id: 'b', text: '{jueves}', feedback: 'Eso es K − J: lo que está en K y no en J.' },
          { id: 'c', text: '{martes}', feedback: 'Martes es el elemento común; la diferencia lo quita.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.3'], ambito: 'conocer', title: 'La diferencia simétrica A Δ B',
          prompt: 'La **diferencia simétrica A Δ B** (se lee "A delta B") reúne los elementos que están en **uno solo** de los dos conjuntos. Toca cada tarjeta.',
          media: { id: 's06-mat-4-delta', kind: 'diagram', title: 'Diferencia y diferencia simétrica', aspect: '16:9',
            alt: 'Tres diagramas de Venn de A y B. En el primero, sombreada solo la parte de A que no toca B (A − B). En el segundo, solo la parte de B (B − A). En el tercero, ambas partes sombreadas y el cruce en blanco (A Δ B).',
            brief: 'Tres diagramas de Venn iguales en fila, con óvalos A (verde) y B (azul). 1) Sombreada solo la zona "solo A", rótulo "A − B". 2) Sombreada solo la zona "solo B", rótulo "B − A". 3) Sombreadas las zonas "solo A" y "solo B", con el cruce en blanco, rótulo "A Δ B = (A − B) ∪ (B − A)". Letras grandes, fondo blanco.' } },
        { icon: 'Triangle', body: 'En el Venn, A Δ B es todo lo sombreado **menos el cruce**.', reveal: [
          { icon: 'Merge', front: 'Primera forma', back: 'A Δ B = (A − B) ∪ (B − A). Junta las dos diferencias.' },
          { icon: 'Eraser', front: 'Segunda forma', back: 'A Δ B = (A ∪ B) − (A ∩ B). Toma la unión y bórrale los comunes.' },
          { icon: 'Apple', front: 'Con las canastas', back: 'A Δ B = {mango, banano, naranja}: las frutas que tiene **solo uno** de los dos niños.' },
          { icon: 'ArrowRightLeft', front: '¿Y el orden?', back: 'Aquí no importa: A Δ B = B Δ A. Por eso se llama "simétrica".' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.3'], ambito: 'hacer', title: 'Ejemplo resuelto: el vivero',
          prompt: 'Calculemos una diferencia simétrica paso a paso.' },
        { icon: 'Trees', problem: 'P = {pino, aliso, ciprés} y Q = {aliso, encino}. Encuentra **P Δ Q**.',
          steps: [
            { text: 'P − Q = {pino, ciprés}.' },
            { text: 'Q − P = {encino}.' },
            { text: 'Junto las dos: P Δ Q = **{pino, ciprés, encino}**.', why: 'El aliso está en ambos, por eso queda fuera.' },
          ],
          answer: 'P Δ Q = {pino, ciprés, encino}.',
          tip: 'Comprueba con la segunda forma: P ∪ Q = {pino, aliso, ciprés, encino}; le quito el común (aliso) y queda lo mismo.' },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.3'], prompt: 'G = {a, e, i, o, u} y H = {a, b, c, d, e}. ¿Cuántos elementos tiene **G Δ H**?',
          hint: 'Los comunes son a y e. Quédate con todo lo demás de los dos conjuntos.',
          explain: 'G − H = {i, o, u} y H − G = {b, c, d}. G Δ H = {i, o, u, b, c, d}: 6 elementos.' },
        { answer: 6, misconceptions: [
          { value: 3, msg: 'Contaste solo una de las diferencias. La simétrica junta las dos.' },
          { value: 2, msg: 'Esos son los elementos comunes: justo los que la diferencia simétrica deja fuera.' },
          { value: 8, msg: 'Esa es la unión. Quita los elementos comunes (a y e).' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.2.1'], prompt: 'A = {2, 4, 6, 8, 10, 12} (pares hasta 12) y B = {3, 6, 9, 12} (múltiplos de 3 hasta 12). ¿Cuántos elementos tiene **A − B**?',
          explain: 'Los comunes son 6 y 12. A − B = {2, 4, 8, 10}: 4 elementos.' },
        { answer: 4, misconceptions: [
          { value: 2, msg: 'Ese es el número de elementos de B − A = {3, 9}. Aquí es A − B.' },
          { value: 6, msg: 'Olvidaste quitar los elementos comunes (6 y 12).' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.2.3'],
          prompt: 'Transfiere la **diferencia simétrica**. En una encuesta, a quienes les gusta el **atol de elote**: E = {Sara, Tito, Uriel, Vilma}. A quienes les gusta el **atol de plátano**: P = {Uriel, Vilma, Wendy}. ¿Cuál es **E Δ P**, las personas a quienes les gusta solo uno de los dos atoles?',
          explain: 'Les gusta solo uno de los dos: E Δ P = {Sara, Tito, Wendy}. Uriel y Vilma disfrutan los dos.' },
        { options: [
          { id: 'a', text: 'E ∩ P = {Uriel, Vilma}', feedback: 'Esos son a quienes les gustan los dos.' },
          { id: 'b', text: 'E Δ P = {Sara, Tito, Wendy}' },
          { id: 'c', text: 'E − P = {Sara, Tito}', feedback: 'Te falta Wendy, a quien solo le gusta el de plátano.' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.2.1', 'mat:3.2.3'], prompt: 'M = {1, 2, 3} y N = {3, 4}. ¿Verdadero o falso?' },
        { statements: [
          { text: 'M − N = {1, 2}', answer: true },
          { text: 'N − M = {1, 2}', answer: false, why: 'N − M = {4}: lo que está en N y no en M.' },
          { text: 'M Δ N = {1, 2, 4}', answer: true },
          { text: 'M Δ N = N Δ M', answer: true },
        ] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.1'], prompt: 'Resuelve la diferencia: C = {rojo, azul, verde, blanco} y D = {verde, negro, blanco}. ¿Cuál es **D − C**?' },
        { text: 'D − C = [[{negro}]].', distractors: ['{rojo, azul}', '{verde, blanco}'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.3'], prompt: 'Resuelve la diferencia simétrica con C = {rojo, azul, verde, blanco} y D = {verde, negro, blanco}: ¿cuál es **C Δ D**?' },
        { options: [
          { id: 'a', text: '{rojo, azul, negro}' },
          { id: 'b', text: '{verde, blanco}' },
          { id: 'c', text: '{rojo, azul, verde, blanco, negro}' },
        ], correct: ['a'] },
      ),
    ],
  }),

  /* ───────────────────────── 5. Operaciones combinadas ───────────────────────── */
  lesson({
    id: 's06-mat-5',
    title: 'Operaciones combinadas con conjuntos',
    icon: 'Braces',
    minutes: 15,
    gancho: 'Tres comisiones de la escuela: limpieza, huerto y reciclaje. ¿Quiénes están en limpieza y huerto, pero no en reciclaje? Para responder hay que combinar operaciones.',
    objetivos: [
      'Resolver operaciones combinadas de conjuntos',
    ],
    resumen: [
      'En una operación combinada, primero se resuelve lo que está entre paréntesis, igual que en aritmética.',
      'Escribe el resultado de cada paso antes de seguir: así evitas errores.',
      'Los paréntesis cambian el resultado: (A ∪ B) ∩ C no es lo mismo que A ∪ (B ∩ C).',
      'Un diagrama de Venn de tres conjuntos ayuda a comprobar el resultado.',
    ],
    media: {
      id: 's06-mat-5-comisiones', kind: 'image', title: 'Las comisiones de la escuela', aspect: '4:3',
      alt: 'Tres grupos de estudiantes trabajan en la escuela: uno barre el patio, otro riega el huerto y otro separa botellas en recipientes de reciclaje.',
      brief: 'Ilustración de una escuela rural guatemalteca con tres escenas: la comisión de limpieza barre el patio, la de huerto riega hortalizas y la de reciclaje separa botellas y papel en recipientes de colores. Algunos niños aparecen en dos escenas (con la misma ropa) para sugerir que están en más de una comisión. Estilo plano, alegre, sin texto.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:3.2.2'], ambito: 'conocer', title: 'Cómo resolver operaciones combinadas',
          prompt: 'Una **operación combinada** usa dos o más operaciones con conjuntos. Sigue estos pasos. Toca cada tarjeta.' },
        { icon: 'ListOrdered', body: 'Trabaja por partes y escribe cada resultado intermedio.', reveal: [
          { icon: 'Parentheses', front: '1. Paréntesis', back: 'Resuelve primero lo que está entre paréntesis. Anota el resultado con un nombre, por ejemplo X.' },
          { icon: 'ArrowRight', front: '2. Siguiente operación', back: 'Usa ese resultado X con el conjunto que falta.' },
          { icon: 'CircleDashed', front: '3. Comprueba con Venn', back: 'Sombrea en un diagrama de tres conjuntos: primero el paréntesis, luego el resto.' },
          { icon: 'Merge', front: 'Recuerda', back: '∪ junta · ∩ deja los comunes · − quita lo del segundo · Δ deja lo que está en uno solo.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.2'], ambito: 'hacer', title: 'Ejemplo resuelto: (A ∩ B) ∪ C',
          prompt: 'Usaremos A = {1, 2, 3, 4}, B = {3, 4, 5} y C = {4, 5, 6}.' },
        { icon: 'Braces', problem: 'Calcula **(A ∩ B) ∪ C**.',
          steps: [
            { text: 'Paréntesis: A ∩ B = **{3, 4}**.', why: 'Son los elementos que están en A y en B.' },
            { text: 'Ahora uno ese resultado con C: {3, 4} ∪ {4, 5, 6}.' },
            { text: 'Junto sin repetir: **{3, 4, 5, 6}**.' },
          ],
          answer: '(A ∩ B) ∪ C = {3, 4, 5, 6}.',
          tip: 'Escribir el resultado del paréntesis evita confundirse en el segundo paso.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.2'], ambito: 'conocer',
          prompt: 'En aritmética, en (2 + 3) × 4 se resuelve primero el paréntesis. En **(A ∩ B) ∪ C**, ¿qué harías primero?',
          explain: 'Igual que en aritmética: primero lo que está **entre paréntesis**, A ∩ B. Después, la unión con C.' },
        { options: [
          { id: 'a', text: 'A ∩ B' },
          { id: 'b', text: 'B ∪ C', feedback: 'B ∪ C no está entre paréntesis. El paréntesis manda.' },
          { id: 'c', text: 'Da igual el orden', feedback: 'El orden sí cambia el resultado, como verás hoy.' },
        ], correct: ['a'] },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.2'], prompt: 'Resuelve la operación combinada de conjuntos: con A = {1, 2, 3, 4}, B = {3, 4, 5} y C = {4, 5, 6}, ¿cuántos elementos tiene **(A ∪ B) − C**?',
          hint: 'Primero A ∪ B. Después quítale los elementos que están en C.',
          explain: 'A ∪ B = {1, 2, 3, 4, 5}. Le quito 4 y 5 (están en C): {1, 2, 3}. Tiene 3 elementos.' },
        { answer: 3, misconceptions: [{ value: 5, msg: 'Ese es A ∪ B. Falta quitarle los elementos que están en C.' }] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.2'], ambito: 'hacer', title: 'Los paréntesis cambian el resultado',
          prompt: 'Mismos conjuntos, mismas operaciones, paréntesis en distinto lugar.' },
        { icon: 'Parentheses', problem: 'Compara **(A ∪ B) ∩ C** con **A ∪ (B ∩ C)**.',
          steps: [
            { text: '(A ∪ B) ∩ C: A ∪ B = {1, 2, 3, 4, 5}; con C quedan los comunes → **{4, 5}**.' },
            { text: 'A ∪ (B ∩ C): B ∩ C = {4, 5}; unido con A → **{1, 2, 3, 4, 5}**.' },
            { text: 'Los resultados son **distintos**.', why: 'Por eso los paréntesis son obligatorios cuando hay dos operaciones diferentes.' },
          ],
          answer: '(A ∪ B) ∩ C = {4, 5}, pero A ∪ (B ∩ C) = {1, 2, 3, 4, 5}.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:3.2.2'], prompt: 'Con A = {1, 2, 3, 4}, B = {3, 4, 5} y C = {4, 5, 6}: ¿cuál es **A ∩ (B ∪ C)**?',
          hint: 'Primero B ∪ C = {3, 4, 5, 6}. Luego busca qué tiene en común con A.',
          explain: 'B ∪ C = {3, 4, 5, 6}. Sus comunes con A son 3 y 4: A ∩ (B ∪ C) = {3, 4}.' },
        { options: [
          { id: 'a', text: '{3, 4}' },
          { id: 'b', text: '{4}', feedback: 'Ese es A ∩ B ∩ C. Aquí primero se une B con C.' },
          { id: 'c', text: '{1, 2, 3, 4, 5, 6}', feedback: 'Esa es la unión de los tres. La última operación es una intersección.' },
        ], correct: ['a'] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.2.2', 'mat:3.2.3'], ambito: 'hacer', prompt: 'Lee los datos de las comisiones y responde.' },
        { heading: 'Las comisiones de sexto grado', genre: 'Datos del grado',
          passage: 'Supongamos que en sexto grado se formaron tres comisiones:\n\nLimpieza: L = {Ana, Beto, Carla, Dany}\n\nHuerto: H = {Carla, Dany, Emy, Fito}\n\nReciclaje: R = {Dany, Fito, Gaby}',
          questions: [
            { q: '¿Quiénes están en limpieza y huerto, pero **no** en reciclaje? Es decir, (L ∩ H) − R.',
              options: [{ id: 'a', text: '{Carla}' }, { id: 'b', text: '{Carla, Dany}' }, { id: 'c', text: '{Dany}' }], correct: 'a',
              why: 'L ∩ H = {Carla, Dany}; a eso le quito a Dany, que está en R: queda {Carla}.' },
            { q: '¿Cuál es (H ∩ R) ∪ L?',
              options: [{ id: 'a', text: '{Dany, Fito}' }, { id: 'b', text: '{Ana, Beto, Carla, Dany, Fito}' }, { id: 'c', text: '{Ana, Beto, Carla, Dany, Emy, Fito, Gaby}' }], correct: 'b',
              why: 'H ∩ R = {Dany, Fito}; unido con L: {Ana, Beto, Carla, Dany, Fito}.' },
            { q: '¿Quiénes están en **solo una** de las comisiones de limpieza y huerto (L Δ H)?',
              options: [{ id: 'a', text: '{Carla, Dany}' }, { id: 'b', text: '{Ana, Beto}' }, { id: 'c', text: '{Ana, Beto, Emy, Fito}' }], correct: 'c',
              why: 'L − H = {Ana, Beto} y H − L = {Emy, Fito}; juntos: {Ana, Beto, Emy, Fito}.' },
          ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:3.2.2', 'mat:3.1.1'],
          prompt: 'Repaso: con L = {Ana, Beto, Carla, Dany} y H = {Carla, Dany, Emy, Fito}, el conjunto L ∩ H = {Carla, Dany}. ¿Cuántos **subconjuntos** tiene L ∩ H?',
          explain: 'Un conjunto de 2 elementos tiene 4 subconjuntos: ∅, {Carla}, {Dany} y {Carla, Dany}.' },
        { answer: 4, misconceptions: [{ value: 2, msg: 'Olvidaste el vacío y el conjunto completo: ∅, {Carla}, {Dany}, {Carla, Dany}.' }] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.2'], prompt: 'Resuelve la operación combinada de conjuntos: P = {a, b, c, d}, Q = {c, d, e} y R = {d, e, f}. ¿Cuál es **(P ∩ Q) ∪ R**?' },
        { options: [
          { id: 'a', text: '{d}' },
          { id: 'b', text: '{c, d, e, f}' },
          { id: 'c', text: '{a, b, c, d, e, f}' },
        ], correct: ['b'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.2'], prompt: 'Resuelve la operación combinada con P = {a, b, c, d}, Q = {c, d, e} y R = {d, e, f}: ¿cuántos elementos tiene **(P ∪ Q) − R**?' },
        { answer: 3 },
      ),
      cierre({ areas: ['mat'], cnb: [] },
        ['Escribo conjuntos y reconozco subconjuntos', 'Encuentro todos los subconjuntos de un conjunto', 'Uso el diagrama de Venn para la unión, la intersección y las diferencias', 'Resuelvo operaciones combinadas respetando los paréntesis'],
        ['Haré un diagrama de Venn con los gustos de mi familia', 'Contaré de cuántas formas puedo combinar los ingredientes de mi refacción', 'Explicaré a alguien la diferencia entre ∪ y ∩'])
    ],
  }),
];
