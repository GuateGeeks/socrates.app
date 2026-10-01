/**
 * Matemáticas · Unidad 1 · Semana 3 — Movimientos en el plano, perímetro y cuerpos geométricos.
 * Progresión: simetría (reflexión) → traslación y rotación → perímetro de polígonos →
 * elementos de los cuerpos (caras, aristas, vértices) → caras congruentes.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Simetría ───────────────────────── */
  lesson({
    id: 's03-mat-1',
    title: 'Simetría: el espejo de las figuras',
    icon: 'FlipHorizontal',
    minutes: 13,
    gancho: 'Si doblas por la mitad una hoja con una mariposa pintada, las dos alas quedan encima una de la otra. ¿Por qué?',
    objetivos: ['Aplicar la simetría para reconocer ejes y reflejar figuras en una cuadrícula'],
    resumen: [
      'Una figura es simétrica si una línea (el eje de simetría) la divide en dos mitades que son reflejo una de la otra.',
      'Al reflejar, cada punto queda a la misma distancia del eje, pero del otro lado. La figura reflejada es congruente con la original.',
      'Ejes de simetría: rectángulo 2, rombo 2, cuadrado 4, triángulo equilátero 3, romboide 0. Un polígono regular tiene tantos ejes como lados.',
    ],
    media: {
      id: 's03-mat-1-mariposa', kind: 'animation', title: 'Doblar y reflejar', aspect: '16:9', duration: 35,
      alt: 'Una hoja con media mariposa pintada se dobla por una línea punteada y, al abrirse, aparece la otra mitad reflejada.',
      brief: 'Animación 2D de 35 s. Una hoja blanca con una línea punteada vertical; a la izquierda, media mariposa de colores. La hoja se dobla por la línea, se presiona y se abre: aparece la otra mitad igual, reflejada. Luego flechas muestran que un punto del ala izquierda y su reflejo están a la misma distancia de la línea. Texto final: "eje de simetría". Música suave, narración breve en español.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.11'], ambito: 'conocer', title: 'El eje de simetría',
          prompt: 'Una figura es **simétrica** si una línea la divide en **dos mitades que son reflejo** una de la otra, como en un espejo. Esa línea es el **eje de simetría**. Toca cada tarjeta.' },
        { icon: 'FlipHorizontal', body: 'Reflejar una figura es "voltearla" sobre el eje, como al doblar una hoja.', reveal: [
          { icon: 'Ruler', front: 'Misma distancia', back: 'Cada punto y su reflejo están a la **misma distancia** del eje, pero en lados opuestos.' },
          { icon: 'Copy', front: 'Figura congruente', back: 'La figura reflejada tiene los mismos lados y ángulos: es **congruente** con la original.' },
          { icon: 'X', front: 'Contraejemplo', back: 'Si doblas un romboide por cualquier línea, sus mitades no coinciden: **no tiene** ejes de simetría.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.11'], ambito: 'conocer',
          prompt: '¿Cuál de estos objetos puedes doblar por una línea de modo que **sus dos mitades queden (casi) una sobre otra**?',
          explain: 'Una hoja de aguacate, doblada por su vena central, tiene dos mitades casi iguales. En la naturaleza la simetría casi nunca es perfecta; en las figuras geométricas sí puede serlo. Esa línea se llama **eje de simetría**.' },
        { options: [
          { id: 'a', text: 'Una hoja de aguacate, por su vena central', icon: 'Leaf' },
          { id: 'b', text: 'Una piedra de río cualquiera', icon: 'Mountain', feedback: 'Una piedra cualquiera no suele tener dos mitades iguales.' },
          { id: 'c', text: 'Un garabato hecho sin pensar', icon: 'PenLine', feedback: 'Un garabato casi nunca tiene dos mitades iguales.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: '¿Tiene al menos un eje de simetría?',
          hint: 'Imagina que doblas la figura. ¿Hay alguna línea donde las dos mitades coinciden?',
          explain: 'Cuadrado, triángulo equilátero, círculo y la letra A tienen ejes; el romboide y la letra F no.' },
        { buckets: [
          { id: 'si', label: 'Simétrica', icon: 'Check', color: 'var(--c-ok)' },
          { id: 'no', label: 'No simétrica', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'a', text: 'Un cuadrado', bucket: 'si' },
          { id: 'b', text: 'La letra A', bucket: 'si' },
          { id: 'c', text: 'Un romboide', bucket: 'no', feedback: 'Ningún doblez hace coincidir sus mitades.' },
          { id: 'd', text: 'La letra F', bucket: 'no' },
          { id: 'e', text: 'Un triángulo equilátero', bucket: 'si' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.11'], ambito: 'conocer', title: '¿Cuántos ejes tiene?',
          prompt: 'Algunas figuras tienen **más de un** eje de simetría. Toca cada tarjeta.',
          media: { id: 's03-mat-1-ejes', kind: 'diagram', title: 'Ejes de simetría de los polígonos', aspect: '16:9',
            alt: 'Rectángulo con 2 ejes, cuadrado con 4, rombo con 2, triángulo equilátero con 3 y hexágono regular con 6, dibujados con líneas punteadas rojas.',
            brief: 'Diagrama en fila de cinco figuras con sus ejes de simetría como líneas punteadas rojas y el número debajo: rectángulo (2: vertical y horizontal, NO las diagonales), cuadrado (4: vertical, horizontal y dos diagonales), rombo (2: sus dos diagonales), triángulo equilátero (3: de cada vértice al punto medio del lado opuesto), hexágono regular (6). Aparte, un romboide con "0". Fondo blanco, trazos claros.' } },
        { icon: 'Asterisk', body: 'Un **polígono regular** tiene tantos ejes de simetría como lados.', reveal: [
          { icon: 'RectangleHorizontal', front: 'Rectángulo', back: '**2 ejes**: uno vertical y uno horizontal. ¡Las diagonales no son ejes!' },
          { icon: 'Square', front: 'Cuadrado', back: '**4 ejes**: vertical, horizontal y las dos diagonales.' },
          { icon: 'Diamond', front: 'Rombo', back: '**2 ejes**: sus dos diagonales.' },
          { icon: 'Triangle', front: 'Triángulo equilátero', back: '**3 ejes**: de cada vértice al punto medio del lado de enfrente.' },
        ] },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: 'Una celda de panal es un **hexágono regular**. ¿Cuántos ejes de simetría tiene?',
          hint: 'En un polígono regular: tantos ejes como lados.',
          explain: 'El hexágono regular tiene 6 lados, entonces tiene 6 ejes de simetría.' },
        { answer: 6, misconceptions: [{ value: 3, msg: 'Contaste solo los ejes que pasan por vértices. También hay 3 que pasan por la mitad de los lados.' }] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.11'], ambito: 'hacer', title: 'Reflejar en cuadrícula',
          prompt: 'Así se refleja una figura contando cuadritos desde el eje.' },
        { icon: 'Grid3x3', problem: 'Un triángulo tiene un vértice a **1** cuadrito del eje, otro a **4** y otro a **2**, todos a la izquierda. Refléjalo a la derecha.',
          steps: [
            { text: 'Vértice a 1 cuadrito a la izquierda → lo marco a **1** cuadrito a la derecha, en la misma fila.', why: 'El reflejo queda a la misma distancia del eje, del otro lado.' },
            { text: 'Vértice a 4 → lo marco a **4** a la derecha. Vértice a 2 → a **2** a la derecha.' },
            { text: 'Uno los tres puntos nuevos.' },
          ],
          answer: 'Obtengo un triángulo congruente, "volteado" como en un espejo.',
          tip: 'Nunca cambies de fila: el reflejo en un eje vertical solo cambia de lado.' },
      ),
      S.loom(
        { fase: 'aplicar', areas: ['mat', 'art'], cnb: ['mat:1.1.11'], ambito: 'hacer',
          prompt: 'Completa la faja por **simetría**: la mitad derecha debe ser el reflejo de la izquierda.',
          explain: 'Cada hilo de color queda a la misma distancia del eje, del otro lado.' },
        { motif: 'Faja de pájaros y zigzag', palette: ['#1d9bd7', '#e8782a', '#8db32c'], half: [
          [0, null, null, null],
          [null, 0, null, 1],
          [null, null, 0, 1],
          [2, 2, null, 0],
          [null, null, 0, 1],
          [null, 0, null, 1],
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: 'Elige **todas** las letras mayúsculas que tienen un **eje de simetría vertical** (una línea de arriba abajo).',
          explain: 'A, M, T y U se pueden doblar por una línea vertical. La R y la L no.' },
        { multiple: true, layout: 'grid', options: [
          { id: 'a', text: 'A' },
          { id: 'm', text: 'M' },
          { id: 'r', text: 'R', feedback: 'La R tiene una "patita" solo a un lado.' },
          { id: 't', text: 'T' },
          { id: 'l', text: 'L', feedback: 'La L solo tiene brazo hacia la derecha.' },
          { id: 'u', text: 'U' },
        ], correct: ['a', 'm', 't', 'u'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: 'En una cuadrícula, el eje de simetría es una línea vertical. Un punto está **3 cuadritos a la izquierda** del eje. Su reflejo, ¿a cuántos cuadritos está **del punto original**?',
          explain: 'El reflejo queda 3 cuadritos a la derecha del eje. De un punto al otro hay 3 + 3 = 6 cuadritos.' },
        { answer: 6, misconceptions: [{ value: 3, msg: '3 es la distancia al eje. Te piden la distancia entre el punto y su reflejo.' }] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: '¿Cuántos ejes de simetría tiene un **cuadrado**?' },
        { answer: 4 },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Las diagonales de un rectángulo son ejes de simetría.', answer: false, why: 'Si doblas un rectángulo por su diagonal, las mitades no coinciden.' },
          { text: 'Un punto y su reflejo están a la misma distancia del eje.', answer: true },
          { text: 'Un pentágono regular tiene 5 ejes de simetría.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Traslación y rotación ───────────────────────── */
  lesson({
    id: 's03-mat-2',
    title: 'Deslizar y girar: traslación y rotación',
    icon: 'RotateCw',
    minutes: 14,
    gancho: 'Un cajón se abre deslizándose; una puerta se abre girando. ¿Las figuras también pueden moverse así?',
    objetivos: ['Aplicar traslaciones y rotaciones indicando dirección, distancia, centro y amplitud del giro'],
    resumen: [
      'Traslación: la figura se desliza una distancia en una dirección, sin girar ni voltearse. Todos sus puntos se mueven lo mismo.',
      'Rotación: la figura gira alrededor de un punto fijo (centro de giro). Cuarto de vuelta = 90°, media vuelta = 180°, tres cuartos = 270°, vuelta completa = 360°.',
      'Simetría (reflexión): la figura se voltea sobre un eje, como en un espejo.',
      'En los tres movimientos la figura no cambia de forma ni de tamaño: queda congruente.',
    ],
    media: {
      id: 's03-mat-2-movimientos', kind: 'image', title: 'Tres movimientos en una faja', aspect: '16:9',
      alt: 'Una faja tejida con tres franjas: en la primera un mismo pájaro se repite en fila; en la segunda una figura aparece girada; en la tercera dos figuras se reflejan en un eje.',
      brief: 'Ilustración de una faja tejida horizontal dividida en tres franjas rotuladas: "traslación" (un pájaro estilizado que se repite hacia la derecha siempre igual, con flechas de desplazamiento), "rotación" (una flor de cuatro pétalos con una figura que gira un cuarto de vuelta cada vez, con flecha curva y punto de giro) y "simetría" (dos figuras enfrentadas con eje punteado). Colores de textil guatemalteco, estilo plano, sin reproducir un diseño específico de una comunidad.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.11'], ambito: 'conocer', title: 'Tres movimientos',
          prompt: 'Las figuras se pueden mover de tres maneras **sin cambiar su forma ni su tamaño**. Toca cada tarjeta.',
          media: { id: 's03-mat-2-anim', kind: 'animation', title: 'Traslación, rotación y reflexión', aspect: '16:9', duration: 40,
            alt: 'Una bandera triangular sobre cuadrícula se desliza 4 cuadritos, luego gira un cuarto de vuelta alrededor de un punto y al final se refleja sobre una línea.',
            brief: 'Animación 2D de 40 s sobre cuadrícula. Un banderín triangular amarillo: (1) se desliza 4 cuadritos a la derecha dejando una "sombra" de su posición inicial; flecha recta con la etiqueta "traslación". (2) Gira 90° alrededor de un punto rojo; flecha curva con "rotación: cuarto de vuelta". (3) Se voltea sobre una línea punteada; etiqueta "simetría (reflexión)". Al final, las tres copias con un visto bueno: "misma forma, mismo tamaño". Narración en español.' } },
        { icon: 'Move', body: 'Las tres dan figuras **congruentes**.', reveal: [
          { icon: 'MoveRight', front: 'Traslación', back: 'Se **desliza**: hay que decir **cuánto** y **hacia dónde** (por ejemplo, 3 cuadritos a la derecha). No gira ni se voltea.' },
          { icon: 'RotateCw', front: 'Rotación', back: '**Gira** alrededor de un punto fijo, el **centro de giro**. Se dice cuánto gira: ¼ de vuelta (90°), ½ vuelta (180°)…' },
          { icon: 'FlipHorizontal', front: 'Simetría (reflexión)', back: 'Se **voltea** sobre un eje, como en un espejo.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.11'], ambito: 'conocer',
          prompt: '¿Cuál de estos movimientos es **deslizar sin girar**?',
          explain: 'El cajón se desliza en línea recta sin girar: eso es una **traslación**. La puerta y la rueda **giran**: eso es una **rotación**.' },
        { options: [
          { id: 'a', text: 'Abrir un cajón', icon: 'Archive' },
          { id: 'b', text: 'Abrir una puerta', icon: 'DoorOpen', feedback: 'La puerta gira alrededor de sus bisagras.' },
          { id: 'c', text: 'Una rueda de bicicleta andando', icon: 'Bike', feedback: 'La rueda gira alrededor de su centro.' },
        ], correct: ['a'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.11'], ambito: 'hacer', title: 'Trasladar en cuadrícula',
          prompt: 'En una traslación, **todos** los vértices se mueven igual.' },
        { icon: 'MoveRight', problem: 'Traslada un cuadrado **5 cuadritos a la derecha y 2 hacia arriba**.',
          steps: [
            { text: 'Tomo un vértice y cuento 5 cuadritos a la derecha y 2 hacia arriba. Marco el punto nuevo.' },
            { text: 'Hago exactamente lo mismo con los otros tres vértices.', why: 'Si un vértice se moviera distinto, la figura se deformaría.' },
            { text: 'Uno los cuatro puntos nuevos.' },
          ],
          answer: 'El cuadrado queda en otro lugar, igualito y sin girar.',
          tip: 'Para describir una traslación di siempre: cuántos cuadritos y en qué dirección.' },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: 'En la cuadrícula, un vértice está en la **columna 4**. La figura se traslada **5 cuadritos a la derecha**. ¿En qué columna queda ese vértice?',
          hint: 'Deslizar a la derecha es sumar columnas.',
          explain: '4 + 5 = 9. Queda en la columna 9.' },
        { answer: 9, misconceptions: [{ value: 1, msg: 'Moviste hacia la izquierda. A la derecha se suma.' }] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.11'], ambito: 'conocer', title: 'Medir un giro',
          prompt: 'Una **vuelta completa** mide **360°**. Las manecillas del reloj ayudan a imaginar los giros. Toca cada tarjeta.' },
        { icon: 'Clock', body: 'El sentido de las manecillas del reloj se llama **sentido horario**; el contrario, **antihorario**.', reveal: [
          { icon: 'Clock3', front: '¼ de vuelta', back: 'De las 12 a las 3: **90°**.' },
          { icon: 'Clock6', front: '½ vuelta', back: 'De las 12 a las 6: **180°**. La figura queda "de cabeza".' },
          { icon: 'Clock9', front: '¾ de vuelta', back: 'De las 12 a las 9: **270°**.' },
          { icon: 'RefreshCw', front: 'Vuelta completa', back: '**360°**: la figura regresa a su posición inicial.' },
        ] },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: 'Una figura gira en sentido horario desde "las 12" hasta "las 6". ¿Cuántos grados giró?',
          hint: 'De las 12 a las 6 es media vuelta.',
          explain: 'Media vuelta = 360° ÷ 2 = 180°.' },
        { answer: 180, unit: '°', misconceptions: [{ value: 90, msg: '90° es solo un cuarto de vuelta (de las 12 a las 3).' }] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: '¿Qué movimiento se muestra en cada caso?',
          explain: 'Desliza = traslación; gira = rotación; se voltea como en espejo = simetría.' },
        { buckets: [
          { id: 'tr', label: 'Traslación', icon: 'MoveRight' },
          { id: 'ro', label: 'Rotación', icon: 'RotateCw' },
          { id: 'si', label: 'Simetría', icon: 'FlipHorizontal' },
        ], items: [
          { id: 'a', text: 'Las aspas de un molino de viento', bucket: 'ro' },
          { id: 'b', text: 'Un pájaro tejido que se repite en fila en una faja, siempre igual', bucket: 'tr' },
          { id: 'c', text: 'Tu cara reflejada en el agua del lago', bucket: 'si' },
          { id: 'd', text: 'Una canasta que se empuja sobre la mesa sin girarla', bucket: 'tr' },
          { id: 'e', text: 'La manecilla de un reloj', bucket: 'ro' },
          { id: 'f', text: 'Las dos alas de una mariposa', bucket: 'si' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: 'Una rueda de la feria gira **¼ de vuelta** cada minuto. ¿Cuántos grados habrá girado en **3 minutos**?',
          explain: '¼ de vuelta = 90°. En 3 minutos: 90° × 3 = 270° (tres cuartos de vuelta).' },
        { answer: 270, unit: '°', misconceptions: [
          { value: 90, msg: 'Eso es lo que gira en un minuto. Son 3 minutos.' },
          { value: 360, msg: 'Una vuelta completa necesitaría 4 minutos.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: 'En un diseño de azulejo, una hoja aparece **4 veces alrededor de un punto**, cada una girada un cuarto de vuelta respecto a la anterior. ¿Qué movimiento se usó?',
          explain: 'Las hojas giran alrededor de un punto: es una **rotación** de 90° cada vez. Cuatro giros de 90° completan 360°.' },
        { options: [
          { id: 'a', text: 'Traslación', feedback: 'En la traslación la figura no gira.' },
          { id: 'b', text: 'Rotación' },
          { id: 'c', text: 'Simetría', feedback: 'En la simetría la figura se voltea sobre una línea; aquí gira alrededor de un punto.' },
        ], correct: ['b'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: 'Una figura gira **media vuelta** alrededor de un punto. ¿Cuántos grados giró?' },
        { options: [
          { id: 'a', text: '90°' },
          { id: 'b', text: '180°' },
          { id: 'c', text: '360°' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En una traslación, la figura se desliza sin girar.', answer: true },
          { text: 'Al rotar una figura, cambia su tamaño.', answer: false, why: 'Rotar solo cambia su posición; queda congruente.' },
          { text: 'Una vuelta completa mide 360°.', answer: true },
          { text: 'Si trasladas un triángulo, cada vértice se mueve una distancia diferente.', answer: false, why: 'Todos los vértices se mueven lo mismo.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Perímetro ───────────────────────── */
  lesson({
    id: 's03-mat-3',
    title: 'El perímetro: medir el contorno',
    icon: 'Fence',
    minutes: 14,
    gancho: 'Don Efraín quiere cercar su parcela de café con alambre. ¿Cómo sabe cuántos metros comprar?',
    objetivos: ['Resolver problemas de perímetro en polígonos regulares e irregulares, incluso con un lado desconocido'],
    resumen: [
      'El perímetro es la medida del contorno de una figura: se suman todos sus lados.',
      'Polígono regular: perímetro = número de lados × medida de un lado.',
      'Rectángulo: perímetro = 2 × largo + 2 × ancho.',
      'Si conoces el perímetro y faltan lados, resta los lados conocidos al perímetro.',
      'El perímetro se mide en unidades de longitud (m, cm). No es lo mismo que el espacio de adentro (área).',
    ],
    media: {
      id: 's03-mat-3-parcela', kind: 'image', title: 'Cercando la parcela', aspect: '16:9',
      alt: 'Parcela de café en una ladera, con forma de pentágono irregular; un agricultor recorre el borde con una cinta métrica y cada lado tiene su medida.',
      brief: 'Ilustración de una parcela de café en una ladera del altiplano con forma de pentágono irregular vista en perspectiva aérea suave. Cada lado rotulado con su medida (20 m, 15 m, 18 m, 22 m, 25 m). Un agricultor con sombrero mide un lado con cinta métrica; postes y alambre en parte del borde. Una línea de color recorre todo el contorno con la palabra "perímetro". Estilo plano cálido, sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.2.1'], ambito: 'conocer', title: '¿Qué es el perímetro?',
          prompt: 'El **perímetro** es la medida del **contorno** de una figura. Se calcula **sumando todos sus lados**. Toca cada tarjeta.' },
        { icon: 'Fence', body: 'Perímetro = lado + lado + lado + …', reveal: [
          { icon: 'Shapes', front: 'Polígono irregular', back: 'Suma los lados uno por uno. No te saltes ninguno.' },
          { icon: 'Hexagon', front: 'Polígono regular', back: 'Todos los lados miden igual: **lados × medida**. Hexágono regular de 3 m: 6 × 3 = 18 m.' },
          { icon: 'RectangleHorizontal', front: 'Rectángulo', back: 'Tiene dos largos y dos anchos: **2 × largo + 2 × ancho**.' },
          { icon: 'X', front: 'Cuidado', back: 'El perímetro es el **borde**, no el espacio de adentro. Se mide en m o cm.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.2.1'], ambito: 'conocer',
          prompt: 'Para saber cuánto alambre comprar, ¿qué necesita medir don Efraín?',
          explain: 'Necesita la medida de **todo el borde**: el **perímetro**.' },
        { options: [
          { id: 'a', text: 'Solo el lado más largo', icon: 'Ruler', feedback: 'El alambre debe rodear toda la parcela, no solo un lado.' },
          { id: 'b', text: 'La medida de todo el borde de la parcela', icon: 'Fence' },
          { id: 'c', text: 'Cuántas matas de café caben adentro', icon: 'Sprout', feedback: 'Eso tiene que ver con el espacio de adentro, no con el borde.' },
        ], correct: ['b'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Así calcula don Efraín el alambre para su parcela.' },
        { icon: 'Calculator', problem: 'La parcela tiene forma de **pentágono irregular** con lados de **20 m, 15 m, 18 m, 22 m y 25 m**. ¿Cuántos metros de alambre necesita para una vuelta?',
          steps: [
            { text: 'Anoto los 5 lados para no olvidar ninguno: 20, 15, 18, 22, 25.' },
            { text: 'Sumo agrupando decenas fáciles: 20 + 15 + 25 = **60**; 18 + 22 = **40**.', why: 'Buscar parejas que den números redondos facilita el cálculo mental.' },
            { text: '60 + 40 = **100 m**.' },
          ],
          answer: 'El perímetro es **100 m**: necesita 100 m de alambre por vuelta.',
          tip: 'Cuenta los sumandos: deben ser tantos como lados.' },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.2.1'], prompt: 'Un puesto del mercado tiene forma de **hexágono regular** de **3 m** por lado. ¿Cuál es su perímetro?',
          hint: 'Regular: multiplica el número de lados por la medida de un lado.',
          explain: '6 × 3 m = 18 m.' },
        { answer: 18, unit: 'm', misconceptions: [
          { value: 9, msg: 'Sumaste 6 + 3. Son 6 lados de 3 m cada uno: multiplica.' },
          { value: 15, msg: 'Revisa cuántos lados tiene un hexágono: hexa = 6.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.2.1'], ambito: 'hacer', title: 'El lado que falta',
          prompt: 'A veces conoces el perímetro y debes encontrar un lado. Se trabaja "al revés".' },
        { icon: 'Search', problem: 'Un triángulo tiene **perímetro de 30 cm**. Dos de sus lados miden **8 cm** y **12 cm**. ¿Cuánto mide el tercero?',
          steps: [
            { text: 'Sumo los lados que conozco: 8 + 12 = **20 cm**.' },
            { text: 'Resto al perímetro: 30 − 20 = **10 cm**.', why: 'Lo que falta para completar el contorno es el lado desconocido.' },
            { text: 'Compruebo: 8 + 12 + 10 = 30. ✔' },
          ],
          answer: 'El tercer lado mide **10 cm**.',
          tip: 'En un cuadrado, divide el perímetro entre 4 para encontrar el lado.' },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.2.1'], prompt: 'Un rectángulo tiene **perímetro de 50 cm** y su **largo** mide **15 cm**. ¿Cuánto mide su **ancho**?',
          hint: 'Los dos largos suman 30 cm. ¿Cuánto queda para los dos anchos? Luego reparte entre 2.',
          explain: '2 × 15 = 30; 50 − 30 = 20; 20 ÷ 2 = 10 cm.' },
        { answer: 10, unit: 'cm', misconceptions: [
          { value: 35, msg: 'Restaste solo un largo. El rectángulo tiene dos largos.' },
          { value: 20, msg: '20 cm miden los dos anchos juntos. Divide entre 2.' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.2.1'], prompt: 'Un huerto escolar rectangular mide **12 m de largo** y **7 m de ancho**. Lo cercarán con **3 vueltas** de alambre. ¿Cuántos metros de alambre necesitan?',
          explain: 'Perímetro: 2 × 12 + 2 × 7 = 24 + 14 = 38 m. Tres vueltas: 38 × 3 = 114 m.' },
        { answer: 114, unit: 'm', misconceptions: [
          { value: 38, msg: 'Ese es el perímetro de una vuelta. Son 3 vueltas.' },
          { value: 57, msg: 'Sumaste 12 + 7 y multiplicaste por 3; faltó contar los 4 lados (2 largos y 2 anchos).' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.2.1'], prompt: 'Une cada borde con su perímetro. Usa el camino más corto: multiplica si el polígono es regular, suma si es irregular.',
          explain: 'Octágono: 8 × 25 = 200 cm. Cuadrado: 4 × 12 = 48 cm. Rectángulo: 2 × 15 + 2 × 5 = 40 cm. Triángulo: 10 + 12 + 14 = 36 cm.' },
        { leftTitle: 'Borde', rightTitle: 'Perímetro', pairs: [
          { id: 'p1', left: 'Mesa en forma de octágono regular de 25 cm de lado', right: '200 cm' },
          { id: 'p2', left: 'Azulejo cuadrado de 12 cm de lado', right: '48 cm' },
          { id: 'p3', left: 'Marco rectangular de 15 cm × 5 cm', right: '40 cm' },
          { id: 'p4', left: 'Banderín triangular de 10, 12 y 14 cm', right: '36 cm' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.2.1'], prompt: 'Lucía hace un marco **cuadrado de 6 cm** de lado y Pedro un marco **rectangular de 8 cm por 4 cm**. ¿Quién usa más cartón para el borde?',
          explain: 'Cuadrado: 4 × 6 = 24 cm. Rectángulo: 2 × 8 + 2 × 4 = 24 cm. ¡Tienen el mismo perímetro aunque su forma sea distinta!' },
        { options: [
          { id: 'a', text: 'Lucía', feedback: 'Calcula los dos perímetros antes de decidir.' },
          { id: 'b', text: 'Pedro', feedback: 'Que el rectángulo sea más largo no significa que tenga más borde.' },
          { id: 'c', text: 'Los dos usan lo mismo: 24 cm' },
        ], correct: ['c'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.2.1'], prompt: 'Un terreno tiene forma de cuadrilátero irregular con lados de **13 m, 22 m, 16 m y 19 m**. ¿Cuál es su perímetro?' },
        { answer: 70, unit: 'm' },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.2.1'], prompt: 'Un cuadrado tiene **perímetro de 36 cm**. ¿Cuánto mide cada lado?' },
        { answer: 9, unit: 'cm' },
      ),
    ],
  }),

  /* ───────────────────────── 4. Cuerpos geométricos ───────────────────────── */
  lesson({
    id: 's03-mat-4',
    title: 'Cuerpos geométricos: caras, aristas y vértices',
    icon: 'Box',
    minutes: 14,
    gancho: 'Una caja de cardamomo, un bote de agua y un cono de tránsito ocupan espacio. ¿En qué se diferencian de una figura dibujada en papel?',
    objetivos: ['Describir prismas, pirámides, cilindros y conos por sus caras, aristas y vértices'],
    resumen: [
      'Un cuerpo geométrico ocupa espacio: tiene largo, ancho y alto. Una figura plana solo tiene largo y ancho.',
      'Cara: superficie plana. Arista: línea donde se juntan dos caras. Vértice: punto donde se juntan varias aristas.',
      'Prisma recto: dos bases iguales y paralelas; sus caras laterales son rectángulos. Pirámide: una base y caras laterales triangulares que se juntan en un vértice (cúspide).',
      'Cilindro: dos bases circulares y una superficie curva; no tiene vértices. Cono: una base circular, una superficie curva y un vértice.',
    ],
    media: {
      id: 's03-mat-4-cuerpos', kind: 'image', title: 'Cuerpos geométricos del mercado', aspect: '16:9',
      alt: 'Mesa de mercado con una caja de cardamomo (prisma), un bote de agua (cilindro), un cono de helado (cono) y un pequeño adorno en forma de pirámide.',
      brief: 'Ilustración de una mesa de mercado guatemalteco con objetos reales etiquetados con el nombre del cuerpo: caja de cartón de cardamomo (prisma rectangular), bote de agua (cilindro), barquillo de helado (cono), adorno de piedra con forma de pirámide de base cuadrada y un dado (cubo). Cada objeto con sus aristas resaltadas en línea fina de color. Estilo plano, sin marcas comerciales.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.3.1'], ambito: 'conocer', title: 'Las partes de un cuerpo',
          prompt: 'Toma una caja cualquiera de tu casa y busca estas tres partes. Toca cada tarjeta.',
          media: { id: 's03-mat-4-partes', kind: 'diagram', title: 'Cara, arista y vértice', aspect: '4:3',
            alt: 'Una caja en perspectiva con una cara sombreada en azul, una arista resaltada en rojo y un vértice marcado con un punto amarillo.',
            brief: 'Diagrama de un prisma rectangular (caja) en perspectiva con aristas ocultas en línea punteada. Una cara sombreada en azul con rótulo "cara (superficie plana)", una arista resaltada en rojo con rótulo "arista (donde se juntan dos caras)" y un vértice con punto amarillo y rótulo "vértice (donde se juntan aristas)". Fondo blanco, rótulos grandes y legibles.' } },
        { icon: 'Box', body: 'Así se describen los cuerpos: contando sus caras, aristas y vértices.', reveal: [
          { icon: 'Square', front: 'Cara', back: 'Cada **superficie plana** del cuerpo. Una caja tiene 6.' },
          { icon: 'Minus', front: 'Arista', back: 'La **línea** donde se juntan dos caras. Una caja tiene 12.' },
          { icon: 'CircleDot', front: 'Vértice', back: 'El **punto** donde se juntan varias aristas (las esquinas). Una caja tiene 8.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.1'], ambito: 'conocer',
          prompt: '¿Es una figura plana (se dibuja en papel) o un cuerpo que ocupa espacio?',
          explain: 'Los cuerpos tienen largo, ancho **y alto**. Las figuras planas solo tienen largo y ancho.' },
        { buckets: [
          { id: 'pl', label: 'Figura plana', icon: 'Square' },
          { id: 'cu', label: 'Cuerpo geométrico', icon: 'Box' },
        ], items: [
          { id: 'a', text: 'Un cuadrado dibujado', bucket: 'pl' },
          { id: 'b', text: 'Una caja de cardamomo', bucket: 'cu' },
          { id: 'c', text: 'Un bote de agua', bucket: 'cu' },
          { id: 'd', text: 'Un triángulo recortado de papel', bucket: 'pl', feedback: 'El papel es tan delgado que lo tratamos como figura plana.' },
          { id: 'e', text: 'Un cono de tránsito', bucket: 'cu' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.1'], ambito: 'hacer', title: 'Contar sin perderse',
          prompt: 'Con un orden, contar partes es fácil. Mira cómo se cuenta en una caja.' },
        { icon: 'ListOrdered', problem: 'Cuenta las caras, aristas y vértices de una **caja** (prisma rectangular).',
          steps: [
            { text: 'Caras: arriba 1, abajo 1 y alrededor 4 → **6 caras**.' },
            { text: 'Aristas: 4 en la cara de arriba, 4 en la de abajo y 4 paradas que las unen → **12 aristas**.', why: 'Contar por "pisos" evita contar dos veces la misma arista.' },
            { text: 'Vértices: 4 arriba y 4 abajo → **8 vértices**.' },
          ],
          answer: 'La caja tiene **6 caras, 12 aristas y 8 vértices**.',
          tip: 'Cuenta siempre por partes: arriba, abajo y alrededor.' },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.1'], prompt: 'Una **pirámide de base cuadrada** tiene una base con 4 esquinas y una punta arriba. ¿Cuántos **vértices** tiene?',
          hint: 'Cuenta abajo (las esquinas de la base) y arriba (la punta).',
          explain: '4 vértices en la base + 1 en la punta = 5 vértices.' },
        { answer: 5, misconceptions: [{ value: 4, msg: 'Te faltó la punta de arriba (la cúspide).' }] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.1'], ambito: 'conocer', title: 'Cuatro familias de cuerpos',
          prompt: 'Hoy conoces cuatro familias. Toca cada una.' },
        { icon: 'Shapes', body: 'Los prismas y pirámides tienen solo caras planas. El cilindro y el cono tienen una **superficie curva** (por eso ruedan).', reveal: [
          { icon: 'Box', front: 'Prisma recto', back: '**Dos bases** iguales y paralelas (abajo y arriba). Sus caras laterales son **rectángulos**. Ejemplo: una caja.' },
          { icon: 'Triangle', front: 'Pirámide', back: '**Una base** y caras laterales **triangulares** que se juntan en un vértice: la **cúspide**.' },
          { icon: 'Cylinder', front: 'Cilindro', back: '**Dos bases circulares** y una superficie curva. **No tiene vértices.** Ejemplo: un bote.' },
          { icon: 'Cone', front: 'Cono', back: '**Una base circular**, una superficie curva y **un vértice** en la punta. Ejemplo: un cono de tránsito.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.1'], prompt: 'Une cada objeto con el cuerpo geométrico que se le parece.',
          hint: 'Fíjate: ¿tiene superficie curva? ¿cuántas bases? ¿termina en punta?',
          explain: 'Caja: prisma. Bote: cilindro. Cono de tránsito: cono. Techo de una torre en punta con base cuadrada: pirámide.' },
        { leftTitle: 'Objeto', rightTitle: 'Cuerpo', pairs: [
          { id: 'p1', left: 'Caja de cardamomo', right: 'Prisma' },
          { id: 'p2', left: 'Bote de agua', right: 'Cilindro' },
          { id: 'p3', left: 'Cono de tránsito', right: 'Cono' },
          { id: 'p4', left: 'Techo en punta de una torre, con base cuadrada', right: 'Pirámide' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.1'], prompt: 'Una **pirámide de base triangular** tiene 3 aristas en la base y una arista que sube desde cada esquina de la base hasta la punta. ¿Cuántas **aristas** tiene en total?',
          explain: '3 aristas en la base + 3 que suben a la punta = 6 aristas.' },
        { answer: 6, misconceptions: [{ value: 3, msg: 'Contaste solo las de la base. Faltan las que suben a la punta.' }] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.1'], prompt: 'Un **prisma triangular** (como una pieza de queso) tiene un triángulo abajo y otro arriba. ¿Cuántos **vértices** tiene?',
          explain: '3 vértices en el triángulo de abajo + 3 en el de arriba = 6.' },
        { answer: 6, misconceptions: [{ value: 3, msg: 'Contaste solo una base. El prisma tiene dos.' }] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Un cilindro no tiene vértices.', answer: true },
          { text: 'Las caras laterales de una pirámide son rectángulos.', answer: false, why: 'Son triángulos que se juntan en la cúspide.' },
          { text: 'Una arista es la línea donde se juntan dos caras.', answer: true },
          { text: 'El cono tiene dos bases circulares.', answer: false, why: 'Tiene una sola base circular.' },
        ] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.1'], prompt: '¿Cuántas **aristas** tiene un **cubo** (como un dado)?' },
        { answer: 12 },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.1'], prompt: '¿Qué cuerpo tiene **una base circular** y **un vértice**?' },
        { options: [
          { id: 'a', text: 'Cilindro' },
          { id: 'b', text: 'Cono' },
          { id: 'c', text: 'Pirámide' },
        ], correct: ['b'] },
      ),
    ],
  }),

  /* ───────────────────────── 5. Caras congruentes ───────────────────────── */
  lesson({
    id: 's03-mat-5',
    title: 'Caras congruentes en los cuerpos',
    icon: 'Package',
    minutes: 14,
    gancho: 'Si desarmas una caja de zapatos, ¿cuántas piezas iguales encuentras?',
    objetivos: ['Identificar y justificar cuáles caras son congruentes en prismas, pirámides y cilindros'],
    resumen: [
      'Las dos bases de un prisma y de un cilindro siempre son congruentes.',
      'En una caja (prisma rectangular) las caras opuestas son congruentes: hay 3 pares. En un cubo, las 6 caras son congruentes.',
      'En una pirámide recta de base regular, con la cúspide sobre el centro, todas las caras laterales son triángulos congruentes.',
      'En un prisma recto de base regular, las caras laterales son rectángulos congruentes.',
      'El cono tiene una sola base: no tiene caras planas congruentes entre sí.',
    ],
    media: {
      id: 's03-mat-5-caja', kind: 'animation', title: 'Una caja que se desarma', aspect: '16:9', duration: 35,
      alt: 'Una caja se abre y queda extendida en el plano; las caras congruentes se iluminan del mismo color de dos en dos.',
      brief: 'Animación 2D de 35 s. Una caja de cartón sin marcas (30 × 20 × 10 cm) gira, se abre y queda desplegada sobre la mesa. Las caras se colorean por pares congruentes: las dos de 30 × 20 en azul, las dos de 30 × 10 en verde y las dos de 20 × 10 en amarillo, con sus medidas. Luego un cubo desplegado con sus 6 caras del mismo color. Narración: "caras congruentes: misma forma y mismo tamaño".',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.3.2'], ambito: 'conocer', title: 'Caras congruentes',
          prompt: 'Dos caras son **congruentes** si tienen la misma forma y el mismo tamaño (encajarían una sobre otra). Toca cada cuerpo.' },
        { icon: 'Copy', body: 'Pista general: las **bases** de prismas y cilindros siempre son congruentes.', reveal: [
          { icon: 'Box', front: 'Prisma rectangular', back: 'Caras opuestas congruentes: **3 pares**.' },
          { icon: 'Dice5', front: 'Cubo', back: 'Sus **6 caras** son cuadrados congruentes.' },
          { icon: 'Cylinder', front: 'Cilindro', back: 'Sus **2 bases** son círculos congruentes.' },
          { icon: 'Triangle', front: 'Pirámide recta de base regular', back: 'Si la **cúspide está sobre el centro** de la base, todas sus **caras laterales** son triángulos congruentes. Con base cuadrada: 4 triángulos iguales.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.2'], ambito: 'conocer',
          prompt: 'En una caja de zapatos, ¿qué caras son **iguales** en forma y tamaño?',
          explain: 'Las caras **opuestas** (la de arriba y la de abajo, las de los lados, la de enfrente y la de atrás) son **congruentes**.' },
        { options: [
          { id: 'a', text: 'Las caras opuestas', icon: 'Copy' },
          { id: 'b', text: 'Todas las caras', icon: 'Layers', feedback: 'Eso pasa en un cubo; en una caja de zapatos hay caras largas y caras cortas.' },
          { id: 'c', text: 'Ninguna', icon: 'X', feedback: 'Mira la tapa y el fondo: miden lo mismo.' },
        ], correct: ['a'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.2'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Así se encuentran las caras congruentes de una caja con medidas.' },
        { icon: 'Package', problem: 'Una caja de cardamomo mide **30 cm de largo, 20 cm de ancho y 10 cm de alto**. ¿Qué caras son congruentes?',
          steps: [
            { text: 'Tapa y fondo: rectángulos de **30 × 20**. Son 2 caras congruentes.' },
            { text: 'Frente y atrás: rectángulos de **30 × 10**. Otras 2 congruentes.' },
            { text: 'Lados izquierdo y derecho: rectángulos de **20 × 10**. Otras 2 congruentes.', why: 'Cada cara usa dos de las tres medidas de la caja.' },
          ],
          answer: 'Hay **3 pares** de caras congruentes: 30 × 20, 30 × 10 y 20 × 10.',
          tip: 'Las caras opuestas de un prisma rectangular siempre son congruentes.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.2'], prompt: '¿Son congruentes estas caras?',
          hint: 'Congruentes = misma forma y mismo tamaño.',
          explain: 'Las bases de prismas y cilindros son congruentes. En una pirámide recta de base regular, con la cúspide sobre el centro, también son congruentes sus caras laterales.' },
        { buckets: [
          { id: 'si', label: 'Congruentes', icon: 'Check', color: 'var(--c-ok)' },
          { id: 'no', label: 'No congruentes', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'a', text: 'Las dos bases de un bote cilíndrico', bucket: 'si' },
          { id: 'b', text: 'La base cuadrada y una cara triangular de una pirámide', bucket: 'no', feedback: 'Un cuadrado y un triángulo no tienen la misma forma.' },
          { id: 'c', text: 'Dos caras opuestas de una caja', bucket: 'si' },
          { id: 'd', text: 'La cara de 30 × 20 y la de 30 × 10 de una caja', bucket: 'no', feedback: 'Son rectángulos, pero de distinto tamaño.' },
          { id: 'e', text: 'Dos caras cualesquiera de un dado', bucket: 'si' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.2'], ambito: 'conocer', title: 'Contar caras congruentes',
          prompt: 'La base regular no basta por sí sola: también importa dónde está la cúspide o si el prisma es recto. Toca cada ejemplo.' },
        { icon: 'Hexagon', body: 'En una **pirámide recta**, la cúspide está sobre el centro. En un **prisma recto**, las aristas laterales son perpendiculares a las bases.', reveal: [
          { icon: 'Hexagon', front: 'Prisma recto de base hexagonal regular', back: 'Tiene 2 hexágonos congruentes y **6 rectángulos laterales congruentes**: todos usan la misma altura y lados de base iguales.' },
          { icon: 'Triangle', front: 'Pirámide recta de base pentagonal regular', back: 'Con la **cúspide sobre el centro**, tiene **5 triángulos laterales congruentes**.' },
          { icon: 'Cone', front: 'Cono', back: 'Tiene **una sola** cara plana (la base): no hay pares congruentes.' },
        ] },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.3.2'], prompt: 'Una **pirámide recta** tiene base cuadrada regular y la cúspide está sobre el centro. ¿Cuántas **caras laterales congruentes** tiene?',
          hint: 'La condición de pirámide recta asegura que los triángulos laterales son iguales; hay uno por cada lado de la base.',
          explain: 'Como la cúspide está sobre el centro y la base regular tiene 4 lados, hay 4 triángulos laterales congruentes.' },
        { answer: 4, misconceptions: [{ value: 5, msg: 'La base es un cuadrado, no un triángulo: no cuenta como cara lateral.' }] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.2'], prompt: 'Una caja mide **40 cm × 40 cm × 20 cm**: la tapa y el fondo son cuadrados de 40 × 40 y las demás caras miden 40 × 20. ¿Cuántas caras de **40 × 20** congruentes tiene?',
          explain: 'Además de la tapa y el fondo (cuadrados), las 4 caras de alrededor miden 40 × 20: son 4 caras congruentes.' },
        { answer: 4, misconceptions: [{ value: 2, msg: 'Aquí el largo y el ancho son iguales, así que las 4 caras de alrededor son congruentes, no solo 2.' }] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.2', 'mat:1.3.1'], prompt: 'Une cada cuerpo con la descripción de sus caras congruentes.',
          explain: 'Prismas y cilindros tienen dos bases congruentes. La congruencia de todas las caras laterales requiere las condiciones indicadas en los prismas y pirámides rectos.' },
        { leftTitle: 'Cuerpo', rightTitle: 'Caras congruentes', pairs: [
          { id: 'p1', left: 'Cubo', right: '6 cuadrados congruentes' },
          { id: 'p2', left: 'Cilindro', right: '2 círculos congruentes' },
          { id: 'p3', left: 'Pirámide recta de base triangular regular, cúspide sobre el centro', right: '3 caras laterales congruentes' },
          { id: 'p4', left: 'Prisma recto de base hexagonal regular', right: '6 rectángulos congruentes y 2 bases' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.2.1', 'mat:1.3.2'], prompt: 'Repaso: quieres poner cinta alrededor del borde de la **tapa** de la caja de cardamomo (**30 cm × 20 cm**). ¿Cuántos centímetros de cinta necesitas?',
          explain: 'Perímetro de la tapa: 2 × 30 + 2 × 20 = 60 + 40 = 100 cm.' },
        { answer: 100, unit: 'cm', misconceptions: [{ value: 50, msg: 'Sumaste solo un largo y un ancho. El rectángulo tiene 4 lados.' }] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.2'], prompt: '¿Qué cuerpo tiene **dos bases circulares congruentes**?' },
        { options: [
          { id: 'a', text: 'Cono' },
          { id: 'b', text: 'Cilindro' },
          { id: 'c', text: 'Pirámide' },
        ], correct: ['b'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.2'], prompt: 'Un **prisma recto** tiene bases que son pentágonos regulares. ¿Cuántas caras **laterales congruentes** tiene?' },
        { answer: 5 },
      ),
      cierre({ areas: ['mat'], cnb: [] },
        ['Reconozco simetría, traslación y rotación', 'Calculo el perímetro de polígonos', 'Cuento caras, aristas y vértices', 'Identifico caras congruentes en los cuerpos'],
        ['Buscaré movimientos geométricos en los tejidos y azulejos de mi casa', 'Mediré el perímetro de una mesa o una ventana', 'Contaré las caras de las cajas que encuentre']),
    ],
  }),
];
