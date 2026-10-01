/**
 * Matemáticas · Unidad 1 · Semana 4 — Prismas, pirámides, conos y cilindros.
 * Progresión: las bases deciden (prisma o pirámide) → reglas para contar caras, aristas y vértices →
 * la altura de un sólido → desarrollos planos en cuadrícula → construir sólidos (y repaso).
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Prismas y pirámides ───────────────────────── */
  lesson({
    id: 's04-mat-1',
    title: 'Prismas y pirámides: las bases deciden',
    icon: 'Box',
    minutes: 13,
    gancho: 'Una troje para guardar maíz, una caja y el techo de una torre. ¿Cómo sabes si un sólido es prisma o pirámide?',
    objetivos: [
      "Clasificar y nombrar prismas y pirámides a partir de sus bases",
    ],
    resumen: [
      'Prisma: tiene DOS bases congruentes y paralelas. En un prisma recto, las caras laterales son rectángulos; en un prisma oblicuo, las caras laterales son paralelogramos inclinados.',
      'Pirámide: tiene UNA base; sus caras laterales son triángulos que se juntan en la cúspide.',
      'Se nombran por el polígono de la base: prisma triangular, prisma hexagonal, pirámide cuadrangular, pirámide pentagonal…',
      'Una pirámide tiene tantas caras laterales como lados tiene su base; un prisma también.',
    ],
    media: {
      id: 's04-mat-1-bases', kind: 'diagram', title: 'Prismas y pirámides lado a lado', aspect: '16:9',
      alt: 'Arriba, tres prismas rectos (triangular, rectangular y hexagonal) y un prisma oblicuo, con sus dos bases pintadas de azul. Abajo, tres pirámides con su única base pintada de naranja.',
      brief: 'Diagrama en dos filas. Fila de arriba "Prismas rectos: 2 bases": prisma triangular, rectangular y hexagonal con sus dos bases coloreadas de azul y caras laterales rectangulares en gris claro; al final, un prisma oblicuo con caras laterales en forma de paralelogramo. Fila de abajo "Pirámides: 1 base": pirámide triangular, cuadrangular y hexagonal con la base en naranja y caras triangulares en gris, cúspide marcada con punto. Debajo de cada sólido, su nombre. Aristas ocultas punteadas. Fondo blanco.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.3.3'], title: 'Idea central', prompt: 'Observa cómo las bases permiten elegir el soporte para un cartel de la campaña.' },
        { icon: 'Box', body: 'Un prisma tiene dos bases congruentes y paralelas; una pirámide tiene una base y termina en una cúspide. El polígono de la base da nombre al sólido.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.3'], ambito: 'conocer',
          prompt: 'Pones una caja de cartón y un adorno en forma de pirámide sobre la mesa. ¿Cuál tiene **arriba** una cara **igual** a la que lo sostiene abajo?',
          explain: 'La caja tiene una cara igual arriba y abajo: **dos bases**. La pirámide termina en punta: tiene **una sola base**.' },
        { options: [
          { id: 'a', text: 'La caja', icon: 'Box' },
          { id: 'b', text: 'La pirámide', icon: 'Triangle', feedback: 'La pirámide termina en una punta; arriba no tiene cara.' },
          { id: 'c', text: 'Ninguna de las dos', icon: 'X', feedback: 'Mira la tapa de la caja: es igual al fondo.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.3'], ambito: 'conocer', title: 'Las bases dan el nombre',
          prompt: 'La **base** es la cara que "sostiene" al sólido y le da su nombre. Contar las bases te dice si es prisma o pirámide. Toca cada tarjeta.' },
        { icon: 'Layers', body: 'Primero cuenta las bases; después mira qué polígono son.', reveal: [
          { icon: 'Box', front: 'Prisma', back: '**Dos bases** congruentes y paralelas. En los prismas **rectos**, las caras laterales son rectángulos; en los **oblicuos**, son paralelogramos inclinados.' },
          { icon: 'Triangle', front: 'Pirámide', back: '**Una base**. Caras laterales: **triángulos** que se juntan en un punto, la **cúspide**.' },
          { icon: 'Tag', front: 'Apellido', back: 'El polígono de la base es el "apellido": base de 6 lados → prisma **hexagonal** o pirámide **hexagonal**.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.3'], prompt: 'Clasifica estos objetos: ¿son **prismas** o **pirámides**?',
          hint: 'Pregúntate: ¿tiene dos bases iguales (prisma) o termina en punta (pirámide)?',
          explain: 'Dos bases congruentes → prisma. Una base y cúspide → pirámide.' },
        { buckets: [
          { id: 'pr', label: 'Prisma', icon: 'Box', color: 'var(--area-mat)' },
          { id: 'pi', label: 'Pirámide', icon: 'Triangle', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'a', text: 'Una caja de cardamomo', bucket: 'pr' },
          { id: 'b', text: 'El techo en punta de una torre de base cuadrada', bucket: 'pi' },
          { id: 'c', text: 'Un lápiz de 6 caras sin sacarle punta', bucket: 'pr' },
          { id: 'd', text: 'Una tienda de campaña con frente triangular', bucket: 'pr', feedback: 'Tiene dos triángulos congruentes (frente y atrás): es un prisma triangular acostado.' },
          { id: 'e', text: 'Un adorno de 4 caras triangulares iguales', bucket: 'pi', feedback: 'Es una pirámide triangular: cualquier cara puede servir de base.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.3'], ambito: 'hacer', title: 'Ejemplo resuelto: ponerle nombre',
          prompt: 'Así se nombra un sólido en dos pasos.' },
        { icon: 'Tag', problem: 'Una troje moderna tiene **dos hexágonos** congruentes, uno abajo y otro arriba, unidos perpendicularmente por **6 rectángulos**. ¿Cómo se llama?',
          steps: [
            { text: '¿Cuántas bases? **Dos** hexágonos congruentes y paralelos → es un **prisma**.' },
            { text: '¿Qué polígono es la base? Un **hexágono** (6 lados).' },
            { text: 'Nombre completo: **prisma hexagonal recto**.', why: 'Tiene 6 caras laterales rectangulares, una por cada lado de la base.' },
          ],
          answer: 'Es un **prisma hexagonal recto**.',
          tip: 'Una pirámide con base de 5 lados sería una pirámide pentagonal, con 5 triángulos alrededor.' },
      ),
      S.match(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.3'], prompt: 'Une cada descripción con el nombre del sólido.',
          hint: 'Dos bases → prisma; una base con triángulos → pirámide. Luego mira el polígono.',
          explain: 'Cantidad de bases + polígono de la base = nombre completo.' },
        { leftTitle: 'Descripción', rightTitle: 'Sólido', pairs: [
          { id: 'p1', left: '2 triángulos y 3 rectángulos', right: 'Prisma triangular recto' },
          { id: 'p2', left: '1 cuadrado y 4 triángulos', right: 'Pirámide cuadrangular' },
          { id: 'p3', left: '2 pentágonos y 5 rectángulos', right: 'Prisma pentagonal recto' },
          { id: 'p4', left: '1 hexágono y 6 triángulos', right: 'Pirámide hexagonal' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.3'], ambito: 'conocer', title: 'Casos que confunden',
          prompt: 'Revisa estos casos antes de practicar solo. Toca cada tarjeta.' },
        { icon: 'AlertTriangle', body: 'La posición del sólido no cambia su nombre.', reveal: [
          { icon: 'Tent', front: 'Prisma acostado', back: 'Una tienda de campaña tiene sus dos triángulos al frente y atrás: sigue siendo **prisma triangular**, aunque esté acostado.' },
          { icon: 'Dice5', front: 'El cubo', back: 'Es un **prisma** cuadrangular especial: cualquier par de caras opuestas sirve como bases.' },
          { icon: 'Cylinder', front: 'Cilindro y cono', back: 'Sus bases son círculos (no polígonos): **no** son prismas ni pirámides, aunque se parecen. El cilindro tiene 2 bases como un prisma; el cono, 1 base y punta como una pirámide.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.3'], prompt: 'Un pedazo de queso tiene forma de sólido con **dos triángulos congruentes** a los lados y **tres rectángulos**. ¿Qué es?',
          explain: 'Dos bases triangulares congruentes y caras laterales rectangulares → **prisma triangular recto**.' },
        { options: [
          { id: 'a', text: 'Pirámide triangular', feedback: 'Una pirámide tiene una sola base y termina en punta.' },
          { id: 'b', text: 'Prisma triangular recto' },
          { id: 'c', text: 'Prisma rectangular', feedback: 'Las bases son las dos caras congruentes que están frente a frente: aquí son triángulos.' },
        ], correct: ['b'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.3'], prompt: 'Una pirámide tiene **7 caras laterales** triangulares. ¿Cuántos lados tiene su base?',
          explain: 'Hay una cara lateral por cada lado de la base: la base tiene 7 lados (es un heptágono).' },
        { answer: 7, misconceptions: [{ value: 8, msg: 'Las caras laterales no incluyen la base. Hay una por cada lado de la base.' }] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.3'], prompt: 'Clasifica cada sólido por su descripción.',
          explain: 'Bases de polígonos: prisma (2) o pirámide (1). Bases circulares: cuerpos redondos.' },
        { buckets: [
          { id: 'pr', label: 'Prisma', icon: 'Box' },
          { id: 'pi', label: 'Pirámide', icon: 'Triangle' },
          { id: 're', label: 'Cuerpo redondo', icon: 'Cylinder' },
        ], items: [
          { id: 'a', text: 'Dos octágonos y ocho rectángulos: prisma recto', bucket: 'pr' },
          { id: 'b', text: 'Un pentágono y cinco triángulos', bucket: 'pi' },
          { id: 'c', text: 'Dos círculos y una superficie curva', bucket: 're' },
          { id: 'd', text: 'Un círculo, una superficie curva y una punta', bucket: 're' },
          { id: 'e', text: 'Un triángulo abajo y tres triángulos que se juntan arriba', bucket: 'pi' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.3'], prompt: 'Un sólido tiene **dos cuadrados congruentes** y **cuatro rectángulos**. ¿Cómo se llama?' },
        { options: [
          { id: 'a', text: 'Pirámide cuadrangular' },
          { id: 'b', text: 'Prisma cuadrangular recto' },
          { id: 'c', text: 'Cilindro' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.3'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Una pirámide tiene dos bases.', answer: false },
          { text: 'En los prismas rectos, las caras laterales son rectángulos.', answer: true },
          { text: 'En los prismas oblicuos, las caras laterales son paralelogramos.', answer: true },
          { text: 'Una pirámide hexagonal tiene 6 caras laterales.', answer: true },
          { text: 'Un prisma acostado deja de ser prisma.', answer: false },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Reglas para contar ───────────────────────── */
  lesson({
    id: 's04-mat-2',
    title: 'Caras, aristas y vértices: reglas que no fallan',
    icon: 'Sigma',
    minutes: 15,
    gancho: '¿Te imaginas contar las aristas de un prisma de 8 lados sin tenerlo enfrente? Con una regla, se puede.',
    objetivos: [
      "Calcular caras, aristas y vértices de prismas y pirámides a partir de su base",
    ],
    resumen: [
      'Si la base tiene n lados, un PRISMA tiene: n + 2 caras (n laterales + 2 bases), 3 × n aristas y 2 × n vértices.',
      'Si la base tiene n lados, una PIRÁMIDE tiene: n + 1 caras (n laterales + 1 base), 2 × n aristas y n + 1 vértices.',
      'Cilindro: 2 bases circulares y una superficie lateral curva, sin vértices. Cono: 1 base circular, una superficie lateral curva y 1 vértice.',
      'Comprobación: en prismas y pirámides, caras + vértices = aristas + 2.',
    ],
    media: {
      id: 's04-mat-2-reglas', kind: 'animation', title: 'Contando por pisos', aspect: '16:9', duration: 45,
      alt: 'Un prisma hexagonal se ilumina por partes: primero las aristas de la base de abajo, luego las de arriba y luego las que las unen; aparece 6 + 6 + 6 = 18.',
      brief: 'Animación 2D de 45 s. Un prisma hexagonal gira lentamente. Se iluminan en rojo las 6 aristas de la base inferior ("6"), luego las 6 de la superior ("6") y luego las 6 verticales ("6"): aparece "3 × 6 = 18 aristas". Después se iluminan los vértices de abajo y de arriba: "2 × 6 = 12 vértices". Luego una pirámide hexagonal: 6 aristas de la base + 6 que suben = "2 × 6 = 12"; 6 vértices + cúspide = "7". Narración en español.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.3.4'], title: 'Idea central', prompt: 'Una estructura para exhibir mensajes debe poder describirse: usa las reglas de caras, aristas y vértices.' },
        { icon: 'BookOpenCheck', body: "Si la base tiene n lados, un PRISMA tiene: n + 2 caras (n laterales + 2 bases), 3 × n aristas y 2 × n vértices." },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.4'], ambito: 'conocer',
          prompt: 'Una troje moderna tiene forma de **prisma hexagonal**. Sin contarlas una por una, ¿cuántas **aristas** crees que tiene?',
          explain: 'Tiene **18**: 6 abajo, 6 arriba y 6 que las unen. Hoy aprenderás esta regla.' },
        { options: [
          { id: 'a', text: '6', feedback: 'Esas son solo las de una base.' },
          { id: 'b', text: '12', feedback: 'Esas son las de las dos bases. Faltan las que las unen.' },
          { id: 'c', text: '18' },
        ], correct: ['c'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.4'], ambito: 'conocer', title: 'La regla del prisma',
          prompt: 'Llama **n** al número de lados de la base. Toca cada tarjeta para ver de dónde sale cada regla.',
          media: { id: 's04-mat-2-tabla', kind: 'diagram', title: 'Tabla de prismas y pirámides', aspect: '4:3',
            alt: 'Tabla con prismas y pirámides de base triangular, cuadrada, pentagonal y hexagonal, con su número de caras, aristas y vértices.',
            brief: 'Tabla limpia con dibujo pequeño de cada sólido en la primera columna. Filas: prisma triangular (5 caras, 9 aristas, 6 vértices), prisma cuadrangular (6, 12, 8), prisma pentagonal (7, 15, 10), prisma hexagonal (8, 18, 12), pirámide triangular (4, 6, 4), pirámide cuadrangular (5, 8, 5), pirámide pentagonal (6, 10, 6), pirámide hexagonal (7, 12, 7). Última fila con las reglas: prisma n + 2, 3n, 2n; pirámide n + 1, 2n, n + 1. Colores suaves alternos.' } },
        { icon: 'Box', body: 'Prisma con base de **n** lados:', reveal: [
          { icon: 'Layers', front: 'Caras: n + 2', back: '**n caras laterales** (paralelogramos, una por lado) + **2 bases**. Si el prisma es recto, esos paralelogramos son rectángulos.' },
          { icon: 'Minus', front: 'Aristas: 3 × n', back: '**n** abajo + **n** arriba + **n** que las unen.' },
          { icon: 'CircleDot', front: 'Vértices: 2 × n', back: '**n** abajo + **n** arriba.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.4'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Usa la regla con la troje hexagonal.' },
        { icon: 'Calculator', problem: 'Describe el **prisma hexagonal recto**: caras laterales, caras-base, total de caras, aristas y vértices.',
          steps: [
            { text: 'La base es un hexágono: **n = 6**.' },
            { text: 'Caras: 6 laterales (rectángulos) + 2 bases (hexágonos) = **8 caras**.' },
            { text: 'Aristas: 3 × 6 = **18**. Vértices: 2 × 6 = **12**.' },
            { text: 'Compruebo: caras + vértices = 8 + 12 = 20; aristas + 2 = 18 + 2 = 20. ✔', why: 'Esta relación se cumple en todos los prismas y pirámides.' },
          ],
          answer: '6 caras laterales rectangulares, 2 bases hexagonales: **8 caras, 18 aristas y 12 vértices**.' },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.4'], prompt: '¿Cuántas **aristas** tiene un **prisma pentagonal**?',
          hint: 'Base de 5 lados. Aristas del prisma: 3 × n.',
          explain: '3 × 5 = 15 aristas (5 abajo, 5 arriba y 5 que las unen).' },
        { answer: 15, misconceptions: [
          { value: 10, msg: 'Contaste solo las de las dos bases. Faltan las 5 que las unen.' },
          { value: 7, msg: '7 son las caras. Pregunta por aristas.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.4'], ambito: 'conocer', title: 'La regla de la pirámide',
          prompt: 'En la pirámide hay **una** base y una **cúspide**. Toca cada tarjeta.' },
        { icon: 'Triangle', body: 'Pirámide con base de **n** lados:', reveal: [
          { icon: 'Layers', front: 'Caras: n + 1', back: '**n caras laterales** (triángulos) + **1 base**.' },
          { icon: 'Minus', front: 'Aristas: 2 × n', back: '**n** en la base + **n** que suben a la cúspide.' },
          { icon: 'CircleDot', front: 'Vértices: n + 1', back: '**n** en la base + **1** cúspide.' },
          { icon: 'Cone', front: 'Cilindro y cono', back: 'Cilindro: 2 bases circulares, superficie lateral curva, sin vértices. Cono: 1 base circular, superficie lateral curva y 1 vértice.' },
        ] },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.4'], prompt: '¿Cuántos **vértices** tiene una **pirámide hexagonal**?',
          hint: 'Vértices de la pirámide: n + 1. ¿Cuánto vale n en un hexágono?',
          explain: '6 vértices en la base + 1 cúspide = 7.' },
        { answer: 7, misconceptions: [
          { value: 6, msg: 'Olvidaste la cúspide.' },
          { value: 12, msg: '12 es el número de aristas de la pirámide hexagonal.' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.4'], prompt: 'Una caja de regalo tiene forma de **prisma octagonal** (base de 8 lados). ¿Cuántas **caras** tiene en total?',
          explain: '8 caras laterales + 2 bases = 10 caras.' },
        { answer: 10, misconceptions: [
          { value: 8, msg: 'Contaste solo las caras laterales. Suma las 2 bases.' },
          { value: 24, msg: '24 son las aristas (3 × 8).' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.4'], prompt: 'Une cada cuerpo con la descripción de sus caras laterales y sus bases.',
          explain: 'Prismas: caras laterales con forma de paralelogramo y 2 bases; si son rectos, esas caras son rectángulos. Pirámides: laterales triangulares y 1 base. Cilindro y cono: superficie lateral curva.' },
        { leftTitle: 'Cuerpo', rightTitle: 'Caras', pairs: [
          { id: 'p1', left: 'Prisma triangular recto', right: '3 rectángulos y 2 triángulos' },
          { id: 'p2', left: 'Pirámide cuadrangular', right: '4 triángulos y 1 cuadrado' },
          { id: 'p3', left: 'Cilindro', right: 'Superficie curva y 2 círculos' },
          { id: 'p4', left: 'Cono', right: 'Superficie curva y 1 círculo' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.4'], prompt: 'Reto: una pirámide tiene **10 aristas**. ¿Cuántos **vértices** tiene?',
          explain: 'Aristas = 2 × n, entonces n = 10 ÷ 2 = 5 (base pentagonal). Vértices = 5 + 1 = 6.' },
        { answer: 6, misconceptions: [
          { value: 5, msg: 'Encontraste n = 5, pero falta la cúspide.' },
          { value: 11, msg: 'No se suma 1 a las aristas. Primero halla n: 10 ÷ 2.' },
        ] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.4'], prompt: '¿Cuántas **aristas** tiene un **prisma heptagonal** (base de 7 lados)?' },
        { answer: 21 },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.4'], prompt: '¿Cuántas **caras** tiene una **pirámide octagonal** (base de 8 lados)?' },
        { options: [
          { id: 'a', text: '8' },
          { id: 'b', text: '9' },
          { id: 'c', text: '10' },
          { id: 'd', text: '16' },
        ], correct: ['b'] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Altura ───────────────────────── */
  lesson({
    id: 's04-mat-3',
    title: 'La altura de los sólidos',
    icon: 'Ruler',
    minutes: 13,
    gancho: 'Un cono de tránsito tiene un costado inclinado. Si lo mides por el costado, ¿estás midiendo su altura?',
    objetivos: [
      "Identificar la altura perpendicular de prismas, pirámides, cilindros y conos",
    ],
    resumen: [
      'La altura de un prisma o de un cilindro es la distancia entre sus dos bases, medida en línea recta y perpendicular (formando ángulo recto con la base).',
      'La altura de una pirámide o de un cono es la distancia de la cúspide a la base, medida en línea recta y perpendicular.',
      'Un costado o arista inclinada NO es la altura: siempre mide más que ella.',
      'La altura de sólidos apilados se suma.',
    ],
    media: {
      id: 's04-mat-3-altura', kind: 'diagram', title: 'La altura se mide derecho', aspect: '16:9',
      alt: 'Cuatro sólidos con su altura marcada en rojo como una línea recta con un cuadradito de ángulo recto en la base: prisma, cilindro, pirámide y cono; en el cono, el costado inclinado aparece en gris con una X.',
      brief: 'Diagrama de cuatro sólidos en fila: prisma rectangular, cilindro, pirámide cuadrangular y cono. En cada uno, la altura como línea roja vertical con cuadradito de 90° donde toca la base, rotulada "h". En la pirámide y el cono, además, la arista/costado inclinado en gris con rótulo "no es la altura". Fondo blanco, trazos claros.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.3.5'], title: 'Idea central', prompt: 'Para que un panel informativo quepa en el aula, su altura se mide perpendicularmente a la base.' },
        { icon: 'BookOpenCheck', body: "La altura de un prisma o de un cilindro es la distancia entre sus dos bases, medida en línea recta y perpendicular (formando ángulo recto con la base)." },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.5'], ambito: 'conocer',
          prompt: 'Quieres saber qué tan alto es un cono de tránsito. ¿Cómo lo mides?',
          explain: 'Se mide en **línea recta** desde la punta hasta el piso, formando ángulo recto con el piso. Eso es la **altura**.' },
        { options: [
          { id: 'a', text: 'Con la cinta pegada al costado inclinado', icon: 'Slash', feedback: 'El costado inclinado es más largo que la altura.' },
          { id: 'b', text: 'En línea recta desde la punta hasta el piso', icon: 'ArrowDown' },
          { id: 'c', text: 'Alrededor de la base', icon: 'Circle', feedback: 'Eso sería el contorno de la base, no la altura.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.5'], ambito: 'conocer', title: '¿Qué es la altura de un sólido?',
          prompt: 'La **altura** es una distancia medida en **línea recta y perpendicular** a la base (formando 90°). Toca cada tarjeta.' },
        { icon: 'Ruler', body: 'Piensa en una plomada: un hilo con una piedrita que cuelga derecho.', reveal: [
          { icon: 'Box', front: 'Prisma y cilindro', back: 'Distancia **entre sus dos bases**.' },
          { icon: 'Triangle', front: 'Pirámide y cono', back: 'Distancia **de la cúspide a la base**, bajando derecho.' },
          { icon: 'X', front: 'Error frecuente', back: 'Medir por la arista o el costado inclinado. Ese camino es **más largo** que la altura.' },
          { icon: 'RotateCw', front: 'Acostado', back: 'Si un cilindro está acostado (como un tubo), su altura sigue siendo la distancia entre sus bases: el **largo** del tubo.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.5'], prompt: 'Un cono mide **70 cm** en línea recta desde la punta hasta el suelo. Su costado inclinado mide **74 cm**. ¿Cuál es su **altura**?',
          hint: 'La altura baja derecho, no por el costado.',
          explain: 'La altura es la distancia recta y perpendicular: **70 cm**. Los 74 cm son del costado inclinado.' },
        { options: [
          { id: 'a', text: '70 cm' },
          { id: 'b', text: '74 cm', feedback: 'Ese es el costado inclinado; siempre mide más que la altura.' },
          { id: 'c', text: '144 cm', feedback: 'No se suman: solo una de esas medidas es la altura.' },
        ], correct: ['a'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.5'], ambito: 'hacer', title: 'Ejemplo resuelto: la troje',
          prompt: 'Algunos objetos combinan sólidos. Sus alturas se suman.' },
        { icon: 'Warehouse', problem: 'Una troje tiene un cuerpo en forma de **cilindro de 2 m** de altura y un techo en forma de **cono de 1 m** de altura. ¿Qué altura tiene toda la troje?',
          steps: [
            { text: 'Altura del cilindro: distancia entre sus bases = **2 m**.' },
            { text: 'Altura del cono: de la punta a su base = **1 m**.' },
            { text: 'El cono está encima del cilindro: 2 + 1 = **3 m**.', why: 'Las alturas de sólidos apilados se suman.' },
          ],
          answer: 'La troje mide **3 m** de alto.',
          tip: 'Si el techo tuviera un costado inclinado de 1.5 m, esa medida no se suma: solo cuenta la altura.' },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.5'], prompt: 'Un tubo de drenaje (cilindro) está **acostado** en el suelo. Sus bases están a **3 m** una de la otra. ¿Cuál es la altura del cilindro en metros?',
          hint: 'La altura de un cilindro es la distancia entre sus bases, aunque esté acostado.',
          explain: 'La distancia entre las bases es 3 m: esa es la altura del cilindro.' },
        { answer: 3, unit: 'm' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.5'], prompt: 'Una pirámide cuadrangular de cartón tiene: lado de la base **18 cm**; cada cara triangular mide **15 cm** desde la cúspide hasta el centro de su borde de abajo, **inclinada** sobre la cara; y la distancia recta de la cúspide a la base es **12 cm**. ¿Cuál es su altura?',
          explain: 'La altura es la distancia recta y perpendicular de la cúspide a la base: **12 cm**. Los 15 cm se miden inclinados sobre una cara.' },
        { options: [
          { id: 'a', text: '18 cm', feedback: 'Eso mide un lado de la base.' },
          { id: 'b', text: '15 cm', feedback: 'Esa medida va inclinada sobre una cara; la altura baja derecho.' },
          { id: 'c', text: '12 cm' },
        ], correct: ['c'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.5'], prompt: 'En una tienda apilan **5 cajas** de fósforos gigantes, una sobre otra. Cada caja tiene **8 cm** de altura. ¿Qué altura tiene la pila?',
          explain: '8 cm × 5 = 40 cm.' },
        { answer: 40, unit: 'cm', misconceptions: [{ value: 13, msg: 'Sumaste 8 + 5. Son 5 cajas de 8 cm cada una.' }] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.5'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La arista lateral de una pirámide es su altura.', answer: false, why: 'La arista es inclinada; la altura baja derecho desde la cúspide.' },
          { text: 'La altura de un prisma es la distancia entre sus dos bases.', answer: true },
          { text: 'El costado de un cono siempre mide más que su altura.', answer: true },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.5'], prompt: 'Construiste un cilindro con cartulina. ¿Cómo mides su **altura**?' },
        { options: [
          { id: 'a', text: 'Alrededor de la base circular' },
          { id: 'b', text: 'En línea recta de una base a la otra' },
          { id: 'c', text: 'Midiendo el diámetro de la base' },
        ], correct: ['b'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.5'], prompt: 'Se apilan **3 botes** cilíndricos de **12 cm** de altura cada uno. ¿Qué altura tiene la torre?' },
        { answer: 36, unit: 'cm' },
      ),
    ],
  }),

  /* ───────────────────────── 4. Desarrollos planos ───────────────────────── */
  lesson({
    id: 's04-mat-4',
    title: 'Desarrollos planos en hoja cuadriculada',
    icon: 'Grid3x3',
    minutes: 15,
    gancho: 'Si desarmas con cuidado una caja de pasta de dientes, queda una figura plana. ¿Podrías dibujarla y armarla de nuevo?',
    objetivos: [
      "Reconocer y trazar desarrollos planos de sólidos geométricos",
    ],
    resumen: [
      'El desarrollo plano es la figura que se obtiene al "desarmar" un sólido: todas sus caras unidas por algunas aristas.',
      'Cubo: 6 cuadrados congruentes (por ejemplo, en forma de cruz). Prisma rectangular: 6 rectángulos en 3 pares.',
      'Pirámide: la base y un triángulo pegado a cada lado de la base. Prisma recto: 2 bases y un rectángulo por cada lado de la base; en un prisma oblicuo se usan paralelogramos inclinados.',
      'Cilindro: 2 círculos y un rectángulo cuyo largo es el contorno del círculo. Cono: 1 círculo y una figura en forma de abanico.',
    ],
    media: {
      id: 's04-mat-4-desarrollos', kind: 'diagram', title: 'Sólidos y sus desarrollos', aspect: '16:9',
      alt: 'Cinco sólidos, cada uno con su desarrollo plano al lado sobre papel cuadriculado: cubo (cruz de 6 cuadrados), prisma rectangular, pirámide cuadrangular (estrella), cilindro (rectángulo con dos círculos) y cono (abanico con un círculo).',
      brief: 'Diagrama en dos filas sobre fondo cuadriculado claro. Cada sólido en perspectiva y, a su derecha, su desarrollo plano con líneas de doblez punteadas: cubo → cruz de 6 cuadrados; prisma rectangular → 6 rectángulos (3 pares de colores); pirámide cuadrangular → cuadrado con 4 triángulos (estrella); cilindro → rectángulo con dos círculos arriba y abajo; cono → sector circular (abanico) con un círculo tocando su arco. Caras congruentes del mismo color.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.3.6'], title: 'Idea central', prompt: 'Los envases y soportes de la campaña se construyen a partir de desarrollos planos.' },
        { icon: 'BookOpenCheck', body: "El desarrollo plano es la figura que se obtiene al \"desarmar\" un sólido: todas sus caras unidas por algunas aristas." },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.6'], ambito: 'conocer',
          prompt: 'Desarmas con cuidado una caja de pasta de dientes (prisma rectangular) sin separar sus caras. ¿Qué obtienes?',
          explain: 'Obtienes una **figura plana de rectángulos unidos**: su **desarrollo plano**. Si lo doblas por las líneas, vuelves a armar la caja.' },
        { options: [
          { id: 'a', text: 'Una figura plana formada por rectángulos unidos', icon: 'LayoutGrid' },
          { id: 'b', text: 'Un solo rectángulo grande', icon: 'RectangleHorizontal', feedback: 'La caja tiene 6 caras: aparecen varios rectángulos unidos.' },
          { id: 'c', text: 'Un círculo', icon: 'Circle', feedback: 'Una caja no tiene caras redondas.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.6'], ambito: 'conocer', title: 'El desarrollo plano',
          prompt: 'El **desarrollo plano** de un sólido es la figura plana con **todas sus caras** unidas, que al doblarse forma el sólido. Toca cada tarjeta.' },
        { icon: 'Grid3x3', body: 'Para dibujar un desarrollo, piensa: ¿cuántas caras tiene y qué forma tiene cada una?', reveal: [
          { icon: 'Square', front: 'Cubo', back: '**6 cuadrados** congruentes. Una forma común: una fila de 4 con uno arriba y uno abajo (una cruz).' },
          { icon: 'Box', front: 'Prisma recto', back: '**2 bases** y un **rectángulo por cada lado** de la base. Un prisma oblicuo lleva paralelogramos inclinados.' },
          { icon: 'Triangle', front: 'Pirámide', back: 'La **base** y un **triángulo** pegado a cada lado de la base.' },
          { icon: 'Cylinder', front: 'Cilindro', back: '**2 círculos** y un **rectángulo**. El largo del rectángulo debe ser igual al contorno del círculo (un poco más de 3 veces su diámetro).' },
          { icon: 'Cone', front: 'Cono', back: '**1 círculo** y una figura en forma de **abanico** que se enrolla.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.6'], prompt: 'Une cada desarrollo plano con el sólido que forma al doblarlo.',
          hint: 'Cuenta las caras y mira su forma.',
          explain: 'La forma y el número de las caras del desarrollo te dicen qué sólido es.' },
        { leftTitle: 'Desarrollo', rightTitle: 'Sólido', pairs: [
          { id: 'p1', left: '6 cuadrados iguales en forma de cruz', right: 'Cubo' },
          { id: 'p2', left: '1 cuadrado con 4 triángulos alrededor', right: 'Pirámide cuadrangular' },
          { id: 'p3', left: '1 rectángulo y 2 círculos', right: 'Cilindro' },
          { id: 'p4', left: '1 abanico y 1 círculo', right: 'Cono' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.6'], ambito: 'hacer', title: 'Trazar el desarrollo de un cubo',
          prompt: 'Sigue los pasos en tu cuaderno cuadriculado.',
          media: { id: 's04-mat-4-cubo', kind: 'animation', title: 'Del papel al cubo', aspect: '1:1', duration: 35,
            alt: 'Sobre una hoja cuadriculada se traza una cruz de seis cuadrados de 3 × 3 cuadritos; luego la figura se dobla en el aire hasta formar un cubo.',
            brief: 'Animación 2D cuadrada de 35 s. Una hoja cuadriculada: un lápiz traza una fila de 4 cuadrados de 3 × 3 cuadritos, luego uno arriba y otro abajo del segundo cuadrado. Las líneas interiores se vuelven punteadas ("doblez"). La figura se levanta y se dobla en 3D hasta cerrar un cubo, con las caras del mismo color. Texto en pantalla: "6 caras congruentes". Sin narración.' } },
        { icon: 'Square', problem: 'Traza el desarrollo de un cubo cuyas aristas miden **3 cuadritos**.',
          steps: [
            { text: 'Traza una fila de **4 cuadrados** de 3 × 3 cuadritos, pegados uno junto al otro.', why: 'Estos 4 serán las caras de alrededor del cubo.' },
            { text: 'Sobre el **segundo** cuadrado, traza otro de 3 × 3 (será la tapa).' },
            { text: 'Debajo del mismo segundo cuadrado, traza otro de 3 × 3 (será el fondo).' },
            { text: 'Marca con línea punteada las aristas interiores: por ahí se dobla.' },
          ],
          answer: 'Obtienes una **cruz de 6 cuadrados**: el desarrollo del cubo.',
          tip: 'Hay 11 formas distintas de desarrollo para un cubo, pero no cualquier arreglo de 6 cuadrados funciona.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.6'], prompt: '¿Cuál de estos arreglos de 6 cuadrados **no** sirve para armar un cubo?',
          hint: 'Imagina que doblas: ¿alguna cara queda encima de otra y otra cara queda sin cubrir?',
          explain: 'Con 6 cuadrados en una sola fila, al doblar, los cuadrados dan la vuelta y se enciman: no se forman la tapa ni el fondo.' },
        { options: [
          { id: 'a', text: 'Fila de 4 con un cuadrado arriba y otro abajo del segundo (cruz)', feedback: 'Esta es la cruz del ejemplo: sí funciona.' },
          { id: 'b', text: 'Los 6 cuadrados en una sola fila' },
          { id: 'c', text: 'Fila de 4 con un cuadrado arriba del primero y otro abajo del cuarto', feedback: 'Este arreglo sí funciona: pruébalo con papel.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.6'], ambito: 'conocer', title: 'Prismas y pirámides en cuadrícula',
          prompt: 'La cuadrícula ayuda a que las aristas que se unen **midan lo mismo**. Toca cada tarjeta.' },
        { icon: 'Ruler', body: 'Regla de oro: dos lados que se pegan deben tener la **misma longitud**.', reveal: [
          { icon: 'Box', front: 'Prisma rectangular recto 4 × 2 × 3', back: 'Fila de 4 rectángulos de alto 3: anchos 4, 2, 4, 2. Arriba y abajo, dos rectángulos de 4 × 2.' },
          { icon: 'Triangle', front: 'Pirámide cuadrangular', back: 'Un cuadrado al centro y, pegado a cada lado, un triángulo cuya base mide lo mismo que el lado del cuadrado.' },
          { icon: 'Paperclip', front: 'Pestañas', back: 'Agrega pestañas (tiras pequeñas) en algunos bordes para poder pegar.' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.6', 'mat:1.3.4'], prompt: 'Vas a dibujar el desarrollo de un **prisma hexagonal recto**. ¿Cuántas figuras (caras) debe tener en total?',
          explain: '2 hexágonos (bases) + 6 rectángulos (uno por lado) = 8 figuras.' },
        { answer: 8, misconceptions: [{ value: 6, msg: 'Faltan las dos bases hexagonales.' }] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.6'], prompt: 'El desarrollo de un cubo está formado por 6 cuadrados de **3 × 3 cuadritos**. ¿Cuántos cuadritos de la hoja ocupa en total?',
          explain: 'Cada cuadrado ocupa 3 × 3 = 9 cuadritos. 6 × 9 = 54 cuadritos.' },
        { answer: 54, misconceptions: [
          { value: 18, msg: 'Multiplicaste 6 × 3. Cada cuadrado tiene 3 × 3 = 9 cuadritos.' },
          { value: 9, msg: 'Ese es un solo cuadrado. El desarrollo tiene 6.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.6'], prompt: 'Un desarrollo tiene **2 triángulos** y **3 rectángulos**. ¿Qué sólido forma?',
          explain: 'Dos bases triangulares y un rectángulo por cada lado del triángulo: **prisma triangular recto**.' },
        { options: [
          { id: 'a', text: 'Pirámide triangular', feedback: 'La pirámide triangular solo tiene triángulos (4).' },
          { id: 'b', text: 'Prisma triangular recto' },
          { id: 'c', text: 'Prisma rectangular', feedback: 'El prisma rectangular tiene 6 rectángulos.' },
        ], correct: ['b'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.6'], prompt: '¿Qué sólido se forma al doblar un desarrollo con **un hexágono y seis triángulos**?' },
        { options: [
          { id: 'a', text: 'Prisma hexagonal' },
          { id: 'b', text: 'Pirámide hexagonal' },
          { id: 'c', text: 'Cono' },
        ], correct: ['b'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.6'], prompt: '¿Cuántas figuras tiene el desarrollo plano de una **pirámide cuadrangular**?' },
        { answer: 5 },
      ),
    ],
  }),

  /* ───────────────────────── 5. Construir sólidos ───────────────────────── */
  lesson({
    id: 's04-mat-5',
    title: 'Armo cuatro sólidos con plantillas preparadas',
    icon: 'Hammer',
    minutes: 15,
    gancho: 'Tienes cuatro plantillas pequeñas listas para doblar. ¿Cómo puedes convertirlas en un prisma, una pirámide, un cilindro y un cono?',
    objetivos: [
      "Construir un prisma recto, una pirámide recta, un cilindro y un cono con plantillas preparadas",
    ],
    resumen: [
      'El kit preparado incluye cuatro plantillas mini precortadas y premarcadas: prisma triangular recto, pirámide cuadrangular recta, cilindro y cono.',
      'Línea punteada significa doblar; números iguales indican bordes que se unen; las pestañas quedan por dentro y se fijan con tiras de cinta ya preparadas.',
      'Prisma y pirámide se forman al doblar caras planas. Cilindro y cono se forman al enrollar una superficie curva y colocar su base o sus bases.',
      'Las piezas y las tiras de cinta ya vienen precortadas: no se usan tijeras, cuchillas ni grapas.',
    ],
    media: {
      id: 's04-mat-5-kit', kind: 'diagram', title: 'Kit mini de cuatro sólidos', aspect: '4:3',
      alt: 'Cuatro plantillas pequeñas, precortadas y premarcadas, para armar un prisma triangular recto, una pirámide cuadrangular recta, un cilindro y un cono.',
      brief: 'Lámina imprimible en tamaño carta al 100 %, fondo blanco y trazos negros gruesos. Incluye cuatro plantillas mini separadas y rotuladas: 1) prisma triangular recto, tira de tres rectángulos con dos triángulos congruentes; 2) pirámide cuadrangular recta, cuadrado con cuatro triángulos congruentes; 3) cilindro, rectángulo con pestaña lateral y dos círculos con pestañas radiales anchas; 4) cono, sector circular con pestaña lateral y un círculo-base con pestañas radiales anchas. Contorno exterior continuo para que una persona adulta prepare el kit; dobleces punteados ya marcados; pestañas grises; bordes que se unen llevan números iguales. Añadir una leyenda: "punteada = doblar · números iguales = unir". Las piezas deben medir entre 4 y 6 cm armadas y admitir cinta adhesiva escolar. Nota de preparación docente: entregar las cuatro piezas ya recortadas y premarcadas, junto con suficientes tiras cortas de cinta precortada. Reemplazar el mock con PDF/SVG accesible listo para impresión y una miniatura PNG.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.3.7'], title: 'Idea central', prompt: 'Con plantillas mini ya preparadas puedes construir cuatro sólidos mediante dobleces, rollos y uniones simples.' },
        { icon: 'PackageCheck', body: 'Hoy terminarás cuatro modelos: un prisma recto, una pirámide recta, un cilindro y un cono.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.7'], ambito: 'conocer', title: 'Lee el kit antes de armar',
          prompt: 'Cada pareja recibe cuatro plantillas mini precortadas y premarcadas, tiras cortas de cinta ya preparadas, cuatro etiquetas y un lápiz.' },
        { icon: 'PackageOpen', body: 'Las piezas ya están listas: **no se usan tijeras, cuchillas ni grapas**.', reveal: [
          { icon: 'FoldHorizontal', front: 'Línea punteada', back: 'Haz el **doblez** hacia adentro y presiónalo una vez.' },
          { icon: 'ListOrdered', front: 'Números iguales', back: 'Los bordes con el mismo número deben quedar juntos.' },
          { icon: 'Paperclip', front: 'Pestaña gris', back: 'Queda por dentro; un trozo corto de **cinta** mantiene la unión.' },
          { icon: 'Rotate3D', front: 'Curva', back: 'El rectángulo del cilindro y el sector del cono se **enrollan** antes de cerrar.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.7'], ambito: 'hacer', title: 'Modelo: cerrar el prisma',
          prompt: 'Observa una demostración breve antes de tocar el kit.' },
        { icon: 'Box', problem: 'La docente arma el prisma triangular recto preparado.',
          steps: [
            { text: 'Repasa con los dedos las líneas punteadas para levantar las caras.' },
            { text: 'Junta los bordes con números iguales; las pestañas quedan dentro.' },
            { text: 'Coloca un trozo corto de cinta en cada unión y presiona.', why: 'No hace falta cinta en los dobleces que ya unen dos caras.' },
          ],
          answer: 'Queda un prisma recto cerrado, con **dos bases triangulares** y **tres caras laterales rectangulares**.',
          tip: 'Primero da forma; después fija. Así puedes corregir una unión antes de cerrarla.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.7'], prompt: 'En una plantilla preparada, ¿qué haces con dos bordes marcados con el número 3?',
          hint: 'Revisa la convención de los números iguales.',
          explain: 'Los números iguales señalan bordes que deben encontrarse; se juntan y se fijan con un trozo corto de cinta.' },
        { options: [
          { id: 'a', text: 'Los unes y fijas con cinta', icon: 'Link' },
          { id: 'b', text: 'Los dejas en lados opuestos', icon: 'MoveHorizontal', feedback: 'El mismo número indica que forman una unión.' },
          { id: 'c', text: 'Los arrancas', icon: 'X', feedback: 'El kit ya tiene la forma necesaria; no se quitan bordes.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.7'], prompt: 'Ordena la rutina de ensamblaje.',
          hint: 'Primero reconoce la pieza; fija las uniones después de darle forma.',
          explain: 'Identificar → doblar o enrollar → unir números iguales → fijar → comprobar.' },
        { items: [
          { id: 'a', text: 'Identificar el sólido y sus bases' },
          { id: 'b', text: 'Doblar líneas punteadas o enrollar la superficie curva' },
          { id: 'c', text: 'Juntar bordes con números iguales' },
          { id: 'd', text: 'Fijar las pestañas con cinta' },
          { id: 'e', text: 'Comprobar que el modelo cierre' },
        ], labels: { start: 'Primero', end: 'Al final' } },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.7'], prompt: '¿Qué diferencia el inicio del cilindro y del cono?',
          hint: 'Mira la forma de la superficie que se enrolla.',
          explain: 'Para el cilindro se enrolla un rectángulo; para el cono se enrolla un sector circular, parecido a un abanico.' },
        { options: [
          { id: 'a', text: 'Cilindro: rectángulo; cono: sector circular', icon: 'Cylinder' },
          { id: 'b', text: 'Cilindro: triángulo; cono: cuadrado', icon: 'Shapes', feedback: 'Esas formas no producen sus superficies curvas.' },
          { id: 'c', text: 'Los dos empiezan con cuatro triángulos', icon: 'Triangle', feedback: 'Cuatro triángulos corresponden a una pirámide cuadrangular.' },
        ], correct: ['a'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.7'], ambito: 'hacer',
          prompt: 'Ensambla el **kit preparado de cuatro sólidos** con tu pareja. Trabajen en paralelo: cada integrante arma un modelo plano y uno curvo; luego intercambien para comprobar las uniones.' },
        { goal: 'Obtener cuatro modelos terminados: un prisma recto, una pirámide recta, un cilindro y un cono.',
          steps: [
            { title: '1 min · Organiza el kit', detail: 'Separa las cuatro plantillas precortadas, las etiquetas y los trozos de cinta; identifica las bases de cada sólido.' },
            { title: '2 min · Prisma y pirámide', detail: 'En paralelo, dobla las líneas punteadas, presiona las pestañas hacia dentro y une los bordes con números iguales usando cinta.' },
            { title: '2 min · Cilindro y cono', detail: 'En paralelo, enrolla cada superficie curva, fija la unión lateral con cinta y coloca la base o las bases preparadas.' },
            { title: '1 min · Etiqueta y compara', detail: 'Rotula cada modelo con su nombre. Compara cuáles tienen vértices y cuáles tienen superficie curva.' },
          ],
          evidence: 'Cuatro modelos armados y de pie, cada uno con su etiqueta: prisma recto, pirámide recta, cilindro y cono.',
          rubric: ['Armamos los cuatro modelos terminados', 'Las pestañas quedaron dentro y las uniones cierran', 'Cada etiqueta corresponde al sólido', 'Comparamos vértices y superficies curvas'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.7', 'mat:1.3.3'], prompt: 'Mira tus cuatro modelos y clasifica cada observación.',
          explain: 'Prisma y pirámide tienen solo caras planas; cilindro y cono incluyen una superficie curva.' },
        { buckets: [
          { id: 'p', label: 'Solo caras planas', icon: 'Box' },
          { id: 'c', label: 'Tiene superficie curva', icon: 'Cylinder' },
        ], items: [
          { id: 'a', text: 'Prisma recto', bucket: 'p' },
          { id: 'b', text: 'Pirámide recta', bucket: 'p' },
          { id: 'c', text: 'Cilindro', bucket: 'c' },
          { id: 'd', text: 'Cono', bucket: 'c' },
        ] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.7', 'mat:1.3.4'], prompt: 'Compara los modelos que acabas de armar.',
          explain: 'Las bases y superficies permiten comprobar si cada modelo quedó bien ensamblado.' },
        { statements: [
          { text: 'El prisma recto armado tiene dos bases congruentes.', answer: true },
          { text: 'La pirámide recta armada termina en una cúspide.', answer: true },
          { text: 'El cilindro armado tiene un vértice.', answer: false, why: 'Tiene dos bases circulares y una superficie curva, pero no vértices.' },
          { text: 'El cono armado tiene una base circular.', answer: true },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.7'], prompt: '¿Qué acción convierte correctamente una plantilla preparada en un sólido?' },
        { options: [
          { id: 'a', text: 'Dar forma, unir números iguales y fijar las pestañas' },
          { id: 'b', text: 'Separar todas las caras antes de doblar' },
          { id: 'c', text: 'Cubrir las líneas punteadas sin doblarlas' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.7'], prompt: 'Une cada modelo con la pieza que se enrolla o dobla para darle forma.' },
        { pairs: [
          { id: 'a', left: 'Prisma recto', right: 'Tira de rectángulos con dos bases congruentes' },
          { id: 'b', left: 'Pirámide recta', right: 'Base con triángulos que llegan a la cúspide' },
          { id: 'c', left: 'Cilindro', right: 'Rectángulo que se enrolla y dos círculos' },
          { id: 'd', left: 'Cono', right: 'Sector circular que se enrolla y un círculo' },
        ] },
      ),
      cierre({ areas: ['mat'], cnb: [] },
        ['Construí un prisma recto y una pirámide recta', 'Construí un cilindro y un cono', 'Usé dobleces, rollos, pestañas y cinta', 'Comparé caras, bases, vértices y superficies'],
        ['Guardaré los cuatro modelos para explicar sus diferencias', 'Pediré ayuda si una plantilla preparada se daña', 'Usaré solo los materiales indicados para cada construcción']),
    ],
  }),
];
