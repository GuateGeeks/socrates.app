/**
 * Matemáticas · Unidad 1 · Semana 5 — Números enteros, plano cartesiano y series numéricas.
 * Progresión: negativos en la vida diaria (temperatura) → enteros en la recta numérica →
 * pares ordenados en el plano cartesiano → completar series con operaciones combinadas → crear series.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Números negativos ───────────────────────── */
  lesson({
    id: 's05-mat-1',
    title: 'Bajo cero: los números negativos',
    icon: 'Thermometer',
    minutes: 14,
    gancho: 'En diciembre, en algunas madrugadas del altiplano, cae helada y el agua de las pilas amanece congelada. ¿Cómo se escribe una temperatura más fría que 0 °C?',
    objetivos: ['Usar números positivos y negativos para representar situaciones de la vida diaria y calcular cambios de temperatura'],
    resumen: [
      'Los números negativos llevan el signo menos (−) y representan cantidades por debajo del cero: −3 °C se lee "tres grados bajo cero".',
      'Los positivos están por encima del cero (se puede escribir +5 o solo 5). El cero no es positivo ni negativo.',
      'Se usan en temperaturas, pisos bajo la calle (sótanos), profundidades bajo el nivel del mar y deudas.',
      'Para subir o bajar en un termómetro, cuenta de uno en uno y cruza el cero cuando haga falta.',
    ],
    media: {
      id: 's05-mat-1-helada', kind: 'image', title: 'Amanecer con helada', aspect: '4:3',
      alt: 'Madrugada en un campo del altiplano con escarcha blanca sobre la grama; en primer plano un termómetro marca 3 grados bajo cero.',
      brief: 'Ilustración de una madrugada fría en el altiplano guatemalteco: campo con escarcha blanca sobre la grama y las hojas de milpa, cerros y volcanes al fondo con cielo despejado rosado. En primer plano, un termómetro de pared grande y legible con escala de −10 °C a 30 °C y la línea marcando −3 °C; el 0 resaltado. Una niña abrigada con chumpa y gorro observa. Estilo cálido, sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.5.1'], ambito: 'conocer',
          prompt: 'Lee el termómetro como una recta vertical antes de comparar temperaturas.' },
        { icon: 'Thermometer', body: 'El cero es el punto de referencia: arriba se escriben enteros positivos y abajo, enteros negativos. Por ejemplo, 3 grados bajo cero se representa con -3.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.1'], ambito: 'conocer',
          prompt: 'Supongamos que en una madrugada el termómetro marca **3 grados bajo cero**. ¿Cómo se escribe?',
          explain: 'Se escribe **−3 °C**. El signo menos indica que la temperatura está **por debajo del cero**.' },
        { options: [
          { id: 'a', text: '3 °C', icon: 'Sun', feedback: '3 °C es una temperatura por encima del cero.' },
          { id: 'b', text: '−3 °C', icon: 'Snowflake' },
          { id: 'c', text: '0.3 °C', icon: 'Thermometer', feedback: '0.3 es un poquito más que cero; no está bajo cero.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.1'], ambito: 'conocer', title: 'Positivos, negativos y cero',
          prompt: 'El **cero** es el punto de partida. Lo que está por encima es **positivo**; lo que está por debajo es **negativo**. Toca cada tarjeta.' },
        { icon: 'Thermometer', body: 'Los números negativos se escriben con el signo **menos (−)**: −1, −2, −3…', reveal: [
          { icon: 'Snowflake', front: 'Temperatura', back: '−5 °C = 5 grados **bajo cero**. 25 °C = 25 grados sobre cero.' },
          { icon: 'Building', front: 'Pisos', back: 'La calle es el piso 0. El **sótano 2** es el piso **−2**; el tercer piso es el **3**.' },
          { icon: 'Waves', front: 'Nivel del mar', back: 'Un buzo a 8 m **bajo** el nivel del mar está a **−8 m**. Una montaña a 3,000 m **sobre** el nivel del mar está a 3,000 m.' },
          { icon: 'Wallet', front: 'Dinero', back: 'Si debes Q20, tu saldo es **−20**. Si tienes Q20 ahorrados, es **20**.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.1'], prompt: '¿Qué número representa cada situación: positivo, negativo o cero?',
          hint: '"Bajo", "debajo" y "deber" suelen indicar negativo. "Sobre", "arriba" y "tener" suelen indicar positivo.',
          explain: 'Lo que está por debajo del punto de partida es negativo; lo que está arriba es positivo.' },
        { buckets: [
          { id: 'po', label: 'Positivo', icon: 'Plus', color: 'var(--c-maiz-strong)' },
          { id: 'ne', label: 'Negativo', icon: 'Minus', color: 'var(--area-mat)' },
          { id: 'ce', label: 'Cero', icon: 'Circle' },
        ], items: [
          { id: 'a', text: '4 grados bajo cero', bucket: 'ne' },
          { id: 'b', text: 'El segundo piso de un edificio', bucket: 'po' },
          { id: 'c', text: 'Un buzo 6 m bajo el nivel del mar', bucket: 'ne' },
          { id: 'd', text: 'La planta baja, a nivel de la calle', bucket: 'ce' },
          { id: 'e', text: 'Tener Q15 ahorrados', bucket: 'po' },
          { id: 'f', text: 'Deber Q10 en la tienda', bucket: 'ne' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.1'], ambito: 'hacer', title: 'Ejemplo resuelto: el termómetro',
          prompt: 'Imagina el termómetro como una escalera: cada grado es un escalón.' },
        { icon: 'Thermometer', problem: 'Supongamos que a las 5:00 el termómetro marca **−4 °C** y a las 11:00 la temperatura ha **subido 10 grados**. ¿Qué temperatura hay a las 11:00?',
          steps: [
            { text: 'Empiezo en −4 y subo hasta el cero: son **4 grados**.', why: 'De −4 a 0 hay 4 escalones: −3, −2, −1, 0.' },
            { text: 'Me faltan 10 − 4 = **6 grados** por subir.' },
            { text: 'Desde el 0 subo 6: llego a **6 °C**.' },
          ],
          answer: 'A las 11:00 hay **6 °C**.',
          tip: 'Cuando cruces el cero, parte el camino en dos: hasta el cero y desde el cero.' },
      ),
      S.slider(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.1'], prompt: 'Supongamos que en la cumbre del volcán Tajumulco, en una madrugada de diciembre, el termómetro marca **5 grados bajo cero**. Mueve el termómetro a esa temperatura.',
          hint: 'Bajo cero: mueve el marcador a la izquierda del 0.',
          explain: '5 grados bajo cero se escribe −5 °C: está 5 grados por debajo del cero.' },
        { min: -10, max: 20, step: 1, start: 0, answer: -5, unit: '°C', visual: 'thermometer' },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.1'], ambito: 'conocer', title: 'Más frío, más negativo',
          prompt: 'Con los negativos hay que tener cuidado. Toca cada tarjeta.' },
        { icon: 'Snowflake', body: 'Entre más **lejos del cero** esté un negativo, **más frío** hace.', reveal: [
          { icon: 'ThermometerSnowflake', front: '−8 °C o −2 °C', back: '−8 °C es **más frío**: está 8 grados bajo cero; −2 °C solo 2.' },
          { icon: 'ArrowDown', front: 'Bajar la temperatura', back: 'Si hay 3 °C y baja 5 grados: bajas 3 hasta el 0 y 2 más: **−2 °C**.' },
          { icon: 'ArrowUp', front: 'Subir la temperatura', back: 'Si hay −6 °C y sube 4 grados: −5, −4, −3, **−2 °C**. Aún está bajo cero.' },
        ] },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.1'], prompt: 'Supongamos que al amanecer hay **−2 °C** y al mediodía la temperatura **sube 7 grados**. ¿Qué temperatura hay al mediodía?',
          hint: 'Primero sube de −2 hasta 0 (2 grados). ¿Cuántos grados faltan por subir?',
          explain: 'De −2 a 0 hay 2 grados; faltan 5 más: 0 + 5 = 5 °C.' },
        { answer: 5, unit: '°C', allowNegative: true, misconceptions: [
          { value: 9, msg: 'Sumaste 2 + 7 como si −2 fuera positivo. Empieza bajo cero.' },
          { value: -9, msg: 'La temperatura sube, no baja.' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.5.1'], prompt: 'Supongamos que a las 18:00 hay **3 °C** en Todos Santos Cuchumatán y durante la noche la temperatura **baja 8 grados**. ¿Qué temperatura hay en la madrugada?',
          explain: 'Bajo 3 hasta el 0 y me faltan 5: 0 − 5 = −5 °C.' },
        { answer: -5, unit: '°C', allowNegative: true, misconceptions: [
          { value: 5, msg: 'Al bajar más allá del cero, el número queda negativo: −5.' },
          { value: 11, msg: 'La temperatura baja: hay que restar, no sumar.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.5.1'], prompt: 'Supongamos que el lunes la madrugada llegó a **−1 °C** y el martes a **−6 °C**. ¿Qué madrugada fue **más fría**?',
          explain: '−6 °C está más lejos por debajo del cero: el **martes** fue más frío.' },
        { options: [
          { id: 'a', text: 'El lunes', feedback: '−1 °C está apenas un grado bajo cero.' },
          { id: 'b', text: 'El martes' },
          { id: 'c', text: 'Fueron iguales', feedback: '−1 y −6 son temperaturas distintas.' },
        ], correct: ['b'] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.5.1'], prompt: 'Escribe el número entero que representa cada situación.',
          explain: 'Por debajo del punto de partida: negativo. Por encima: positivo.' },
        { text: 'El sótano 3 es el piso [[−3]]. Tener Q50 ahorrados: [[50]]. Deber Q12: [[−12]]. Diez grados sobre cero: [[10]] °C.',
          distractors: ['3', '−50', '12', '−10'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.5.1'], prompt: 'Supongamos que al mediodía hay **5 °C** y en la noche la temperatura **baja 9 grados**. ¿Qué temperatura hay en la noche?' },
        { answer: -4, unit: '°C', allowNegative: true },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.5.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: '−7 °C es más frío que −3 °C.', answer: true },
          { text: 'El cero es un número negativo.', answer: false, why: 'El cero no es positivo ni negativo.' },
          { text: 'Un buzo a 4 m bajo el nivel del mar está a −4 m.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. La recta numérica ───────────────────────── */
  lesson({
    id: 's05-mat-2',
    title: 'Enteros en la recta numérica',
    icon: 'MoveHorizontal',
    minutes: 13,
    gancho: 'Si acuestas un termómetro, se convierte en una recta numérica. ¿Dónde quedan los números negativos?',
    objetivos: ['Ubicar números positivos y negativos en la recta numérica; comparar y ordenar números enteros; calcular distancias entre enteros en la recta'],
    resumen: [
      'En la recta numérica, el 0 está en el centro; los positivos a la derecha y los negativos a la izquierda.',
      'Un número es mayor que otro si está más a la derecha. Por eso −2 > −7 y cualquier positivo es mayor que cualquier negativo.',
      'Opuestos: 4 y −4 están a la misma distancia del cero, en lados contrarios.',
      'Distancia entre un negativo y un positivo: suma sus distancias al cero. Entre −3 y 5 hay 3 + 5 = 8.',
    ],
    media: {
      id: 's05-mat-2-recta', kind: 'animation', title: 'Del termómetro a la recta', aspect: '16:9', duration: 30,
      alt: 'Un termómetro vertical gira y se acuesta hasta convertirse en una recta numérica de −10 a 10, con los negativos en azul a la izquierda y los positivos en naranja a la derecha.',
      brief: 'Animación 2D de 30 s. Un termómetro vertical de −10 a 10 gira 90° en sentido horario hasta quedar acostado como recta numérica: negativos a la izquierda en azul, positivos a la derecha en naranja, el 0 resaltado al centro. Luego aparecen dos puntos, −4 y 4, con flechas iguales hacia el 0 y la palabra "opuestos". Termina con una flecha hacia la derecha y el texto "más a la derecha = mayor". Narración en español.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.5.2'], ambito: 'conocer',
          prompt: 'Observa cómo se ordenan los enteros en una recta numérica.' },
        { icon: 'MoveHorizontal', body: 'En la recta, los números aumentan hacia la derecha y disminuyen hacia la izquierda. Dos números opuestos, como -4 y 4, están a igual distancia del cero.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.2'], ambito: 'conocer',
          prompt: 'En una recta numérica, el 0 está en el centro y el 5 a la derecha. ¿Dónde crees que va el **−3**?',
          explain: 'Los negativos van a la **izquierda** del cero, como en un termómetro acostado.' },
        { options: [
          { id: 'a', text: 'A la izquierda del 0', icon: 'ArrowLeft' },
          { id: 'b', text: 'Entre el 0 y el 5', icon: 'ArrowRight', feedback: 'Entre 0 y 5 están los positivos 1, 2, 3 y 4.' },
          { id: 'c', text: 'Después del 5', icon: 'ChevronsRight', feedback: 'Después del 5 están los positivos mayores.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.2'], ambito: 'conocer', title: 'La recta de los enteros',
          prompt: 'Los **números enteros** son los positivos, los negativos y el cero. En la recta, cada uno tiene su lugar. Toca cada tarjeta.',
          media: { id: 's05-mat-2-opuestos', kind: 'diagram', title: 'Recta numérica de −10 a 10', aspect: '16:9',
            alt: 'Recta numérica de −10 a 10 con marcas en cada entero. Negativos en azul, positivos en naranja; el −4 y el 4 unidos al 0 con arcos del mismo tamaño.',
            brief: 'Diagrama horizontal de una recta numérica de −10 a 10, una marca por entero, números grandes debajo. Negativos en azul, cero en negro, positivos en naranja. Dos arcos del mismo tamaño unen el 0 con −4 y con 4 ("opuestos"). Una flecha grande debajo apunta a la derecha con el texto "crece". Fondo blanco.' } },
        { icon: 'MoveHorizontal', body: 'Más a la **derecha** = **mayor**. Más a la **izquierda** = **menor**.', reveal: [
          { icon: 'ArrowRight', front: 'Positivos', back: 'A la derecha del 0: 1, 2, 3…' },
          { icon: 'ArrowLeft', front: 'Negativos', back: 'A la izquierda del 0: −1, −2, −3… El −10 está más a la izquierda que el −2, así que es **menor**.' },
          { icon: 'FlipHorizontal', front: 'Opuestos', back: '4 y −4 están a la **misma distancia** del 0 (4 espacios), en lados contrarios.' },
        ] },
      ),
      S.slider(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.2'], prompt: 'Ubica el **−4** en la recta numérica.',
          hint: 'Parte del 0 y cuenta 4 espacios hacia la izquierda.',
          explain: 'El −4 está 4 espacios a la izquierda del 0.' },
        { min: -10, max: 10, step: 1, start: 0, answer: -4, visual: 'line',
          ticks: [{ value: -10, label: '−10' }, { value: -5, label: '−5' }, { value: 0, label: '0' }, { value: 5, label: '5' }, { value: 10, label: '10' }] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.2'], ambito: 'hacer', title: 'Comparar negativos',
          prompt: 'Comparar negativos confunde al principio. La recta lo resuelve.' },
        { icon: 'Scale', problem: '¿Cuál es mayor: **−7** o **−2**?',
          steps: [
            { text: 'Ubico los dos en la recta: −7 está 7 espacios a la izquierda del 0; −2 está 2 espacios a la izquierda.' },
            { text: '−2 está **más a la derecha** que −7.', why: 'En la recta, siempre es mayor el que está más a la derecha.' },
            { text: 'Entonces **−2 > −7**. Se lee: "menos dos es mayor que menos siete".' },
          ],
          answer: '**−2** es mayor. Piensa en temperaturas: −2 °C es menos frío que −7 °C.',
          tip: 'Entre dos negativos, es mayor el que está más cerca del cero.' },
      ),
      S.order(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.2'], prompt: 'Ordena estos números de **menor a mayor**, como aparecen en la recta de izquierda a derecha.',
          hint: 'Primero los negativos: el más lejano del cero va primero.',
          explain: '−8 < −3 < 0 < 2 < 5.' },
        { items: [
          { id: 'a', text: '−8' },
          { id: 'b', text: '−3' },
          { id: 'c', text: '0' },
          { id: 'd', text: '2' },
          { id: 'e', text: '5' },
        ], labels: { start: 'Menor', end: 'Mayor' } },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.2'], ambito: 'conocer', title: 'Moverse y medir en la recta',
          prompt: 'La recta sirve para calcular cambios y distancias. Toca cada tarjeta.' },
        { icon: 'Route', body: 'Contar espacios en la recta es como contar escalones.', reveal: [
          { icon: 'ArrowRight', front: 'Moverse a la derecha', back: 'Es **subir** o **aumentar**. De −2, avanzar 6 → 4.' },
          { icon: 'ArrowLeft', front: 'Moverse a la izquierda', back: 'Es **bajar** o **disminuir**. De 1, retroceder 4 → −3.' },
          { icon: 'Ruler', front: 'Distancia entre −3 y 5', back: 'Del −3 al 0 hay 3; del 0 al 5 hay 5. Total: **3 + 5 = 8** espacios.' },
        ] },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.2'], prompt: '¿Cuántos espacios hay en la recta entre **−4** y **6**?',
          hint: 'Cuenta del −4 al 0, luego del 0 al 6, y suma.',
          explain: '4 + 6 = 10 espacios.' },
        { answer: 10, misconceptions: [{ value: 2, msg: 'Restaste 6 − 4, pero están en lados distintos del cero: se suman las distancias.' }] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.5.2', 'mat:1.5.1'], prompt: 'Supongamos estas temperaturas de una madrugada de enero. Ordénalas de la **más fría** a la **menos fría**.',
          explain: 'De menor a mayor: −6, −2, 0, 3, 8.' },
        { items: [
          { id: 'a', text: 'Cumbre de un volcán: −6 °C' },
          { id: 'b', text: 'Aldea en la montaña: −2 °C' },
          { id: 'c', text: 'Valle alto: 0 °C' },
          { id: 'd', text: 'Pueblo del altiplano: 3 °C' },
          { id: 'e', text: 'Ciudad en un valle: 8 °C' },
        ], labels: { start: 'Más fría', end: 'Menos fría' } },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.5.2'], prompt: 'Un elevador está en el **sótano 2** (piso −2) y **sube 6 pisos**. ¿En qué piso queda?',
          explain: 'En la recta: de −2 avanzo 6 a la derecha → 4. Queda en el piso 4.' },
        { answer: 4, allowNegative: true, misconceptions: [
          { value: 8, msg: 'El elevador empezó bajo la calle (−2), no en el piso 2.' },
          { value: -8, msg: 'El elevador sube: se avanza a la derecha.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.5.2'], prompt: '¿Qué afirmación es correcta?',
          explain: '−4 está más cerca del cero que −9, por eso es mayor.' },
        { options: [
          { id: 'a', text: '−9 > −4', feedback: '−9 está más a la izquierda: es menor.' },
          { id: 'b', text: '−4 > −9' },
          { id: 'c', text: '−4 = −9', feedback: 'Son números distintos.' },
        ], correct: ['b'] },
      ),
      S.order(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.5.2'], prompt: 'Ordena de **menor a mayor**.' },
        { items: [
          { id: 'a', text: '−10' },
          { id: 'b', text: '−5' },
          { id: 'c', text: '−1' },
          { id: 'd', text: '4' },
          { id: 'e', text: '7' },
        ], labels: { start: 'Menor', end: 'Mayor' } },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.5.2'], prompt: '¿Cuántos espacios hay en la recta entre **−6** y **4**?' },
        { answer: 10 },
      ),
    ],
  }),

  /* ───────────────────────── 3. Plano cartesiano ───────────────────────── */
  lesson({
    id: 's05-mat-3',
    title: 'El plano cartesiano y los pares ordenados',
    icon: 'MapPin',
    minutes: 14,
    gancho: 'Para decirle a un amigo dónde enterraste un "tesoro" en el patio, ¿cuántos números necesitas?',
    objetivos: ['Reconocer los ejes, el origen y los cuadrantes del plano cartesiano; ubicar e identificar puntos con pares ordenados (x, y), incluyendo negativos'],
    resumen: [
      'El plano cartesiano tiene dos rectas numéricas: el eje x (horizontal) y el eje y (vertical). Se cruzan en el origen (0, 0).',
      'Un par ordenado (x, y) indica: primero cuánto moverse a la derecha (+) o a la izquierda (−); después, cuánto subir (+) o bajar (−).',
      'El orden importa: (2, 5) y (5, 2) son puntos diferentes.',
      'Los ejes dividen el plano en 4 cuadrantes: I (+, +), II (−, +), III (−, −) y IV (+, −).',
    ],
    media: {
      id: 's05-mat-3-mapa', kind: 'image', title: 'Un mapa con coordenadas', aspect: '4:3',
      alt: 'Mapa ilustrado de una aldea sobre una cuadrícula con ejes numerados de −5 a 5: la escuela, el mercado, la iglesia, la cancha y el pozo están en distintos cuadrantes.',
      brief: 'Ilustración cenital de una aldea guatemalteca sobre una cuadrícula con ejes x e y numerados de −5 a 5 y el origen (0, 0) en la plaza central. Íconos grandes: escuela en (2, 3), mercado en (−3, 2), iglesia en (−2, −3), cancha en (4, −1), pozo en (0, −2). Caminos de tierra, árboles, colores suaves. Los cuatro cuadrantes rotulados con números romanos pequeños. Sin texto adicional.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.5.3'], ambito: 'conocer',
          prompt: 'Aprende a leer un lugar mediante un par ordenado.' },
        { icon: 'MapPin', body: 'Un punto se escribe (x, y): primero se avanza sobre el eje horizontal y luego sobre el vertical. El origen (0, 0) sirve como referencia común para ubicar espacios de la escuela.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.3'], ambito: 'conocer',
          prompt: 'Para decir exactamente dónde está tu escritorio en el aula, ¿qué información necesitas?',
          explain: 'Necesitas **dos datos**: la fila y la columna. En matemáticas, un punto del plano también se ubica con **dos números**.' },
        { options: [
          { id: 'a', text: 'Solo el número de la fila', icon: 'AlignJustify', feedback: 'En una misma fila hay varios escritorios.' },
          { id: 'b', text: 'La fila y la columna', icon: 'Grid3x3' },
          { id: 'c', text: 'El color del escritorio', icon: 'Palette', feedback: 'Varios escritorios pueden ser del mismo color.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.3'], ambito: 'conocer', title: 'Partes del plano cartesiano',
          prompt: 'El **plano cartesiano** está formado por dos rectas numéricas que se cruzan en ángulo recto. Toca cada tarjeta.',
          media: { id: 's05-mat-3-plano', kind: 'diagram', title: 'Ejes, origen y cuadrantes', aspect: '1:1',
            alt: 'Plano cartesiano de −5 a 5 con el eje x horizontal, el eje y vertical, el origen marcado y los cuadrantes I, II, III y IV con sus signos.',
            brief: 'Diagrama cuadrado de un plano cartesiano de −5 a 5 en ambos ejes. Eje x en azul (rotulado "x"), eje y en rojo ("y"), origen (0, 0) con punto negro. Cuadrantes rotulados: I (+, +) arriba a la derecha, II (−, +) arriba a la izquierda, III (−, −) abajo a la izquierda, IV (+, −) abajo a la derecha. Un punto ejemplo (3, 2) con flechas punteadas: 3 a la derecha, 2 arriba. Fondo blanco con cuadrícula suave.' } },
        { icon: 'Grid3x3', body: 'Un punto se nombra con un **par ordenado (x, y)**.', reveal: [
          { icon: 'MoveHorizontal', front: 'Eje x', back: 'La recta **horizontal**. Negativos a la izquierda, positivos a la derecha.' },
          { icon: 'MoveVertical', front: 'Eje y', back: 'La recta **vertical**. Negativos abajo, positivos arriba.' },
          { icon: 'CircleDot', front: 'Origen (0, 0)', back: 'El punto donde se cruzan los ejes. De ahí partes siempre.' },
          { icon: 'ListOrdered', front: '(x, y)', back: '**Primero x** (derecha o izquierda), **después y** (arriba o abajo). Como decimos: "primero caminas, luego subes".' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.3'], ambito: 'hacer', title: 'Ubicar puntos',
          prompt: 'Así se ubican tres puntos desde el origen.' },
        { icon: 'MapPin', problem: 'Ubica los puntos **(3, 2)**, **(−2, 4)** y **(4, −3)**.',
          steps: [
            { text: '(3, 2): desde el origen, **3 a la derecha** y **2 hacia arriba**.' },
            { text: '(−2, 4): **2 a la izquierda** (porque x es negativo) y **4 hacia arriba**.', why: 'El signo menos en x indica izquierda.' },
            { text: '(4, −3): **4 a la derecha** y **3 hacia abajo**.', why: 'El signo menos en y indica abajo.' },
          ],
          answer: 'Cada punto queda en un lugar único del plano.',
          tip: 'Error frecuente: invertir el orden. (2, 5) no es lo mismo que (5, 2).' },
      ),
      S.coord(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.3'], ambito: 'hacer', prompt: 'Coloca la estrella en el punto **(2, 3)**.',
          hint: 'Desde el origen: 2 a la derecha y luego 3 hacia arriba.',
          explain: 'x = 2 (derecha), y = 3 (arriba).' },
        { range: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, task: { kind: 'place', x: 2, y: 3, emoji: '⭐', label: 'Estrella' } },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.3'], ambito: 'conocer', title: 'Los cuatro cuadrantes',
          prompt: 'Los signos del par te dicen en qué **cuadrante** está un punto. Toca cada tarjeta.' },
        { icon: 'LayoutGrid', body: 'Los cuadrantes se numeran I, II, III y IV, empezando arriba a la derecha y girando en sentido contrario a las manecillas del reloj.', reveal: [
          { icon: 'ArrowUpRight', front: 'I (+, +)', back: 'Derecha y arriba. Ejemplo: (3, 2).' },
          { icon: 'ArrowUpLeft', front: 'II (−, +)', back: 'Izquierda y arriba. Ejemplo: (−2, 4).' },
          { icon: 'ArrowDownLeft', front: 'III (−, −)', back: 'Izquierda y abajo. Ejemplo: (−3, −1).' },
          { icon: 'ArrowDownRight', front: 'IV (+, −)', back: 'Derecha y abajo. Ejemplo: (4, −3). Si una coordenada es 0, el punto está sobre un eje.' },
        ] },
      ),
      S.coord(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:1.5.3'], ambito: 'hacer', prompt: 'Coloca la bandera en el punto **(−3, 2)**.',
          hint: 'x = −3: tres a la izquierda. y = 2: dos hacia arriba.',
          explain: 'El punto (−3, 2) está en el cuadrante II: izquierda y arriba.' },
        { range: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, task: { kind: 'place', x: -3, y: 2, emoji: '🚩', label: 'Bandera' } },
      ),
      S.coord(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.5.3'], prompt: 'En el mapa de la aldea, ¿qué lugar está en el punto **(−2, −3)**? Tócalo.',
          explain: 'Dos a la izquierda y tres hacia abajo: ahí está la iglesia.' },
        { range: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, markers: [
          { id: 'esc', label: 'Escuela', emoji: '🏫', x: 2, y: 3 },
          { id: 'mer', label: 'Mercado', emoji: '🧺', x: -3, y: 2 },
          { id: 'igl', label: 'Iglesia', emoji: '⛪', x: -2, y: -3 },
          { id: 'can', label: 'Cancha', emoji: '⚽', x: 4, y: -1 },
          { id: 'poz', label: 'Pozo', emoji: '💧', x: 0, y: -2 },
        ], task: { kind: 'identify', markerId: 'igl' } },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.5.3'], prompt: 'Pedro dice: "(2, 5) y (5, 2) son el mismo punto, porque tienen los mismos números". ¿Tiene razón?',
          explain: 'No. (2, 5) está 2 a la derecha y 5 arriba; (5, 2) está 5 a la derecha y 2 arriba. El **orden** cambia el lugar.' },
        { options: [
          { id: 'a', text: 'Sí, el orden no importa', feedback: 'Prueba ubicarlos: quedan en lugares distintos.' },
          { id: 'b', text: 'No, el orden importa: primero x y después y' },
        ], correct: ['b'] },
      ),
      S.coord(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.5.3'], prompt: 'Van a sembrar un árbol en el punto **(4, −2)**. Colócalo.',
          explain: 'Cuatro a la derecha y dos hacia abajo: cuadrante IV.' },
        { range: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, task: { kind: 'place', x: 4, y: -2, emoji: '🌳', label: 'Árbol' } },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.5.3'], prompt: '¿En qué cuadrante está el punto **(−4, −3)**?' },
        { options: [
          { id: 'i', text: 'Cuadrante I (+, +)' },
          { id: 'ii', text: 'Cuadrante II (−, +)' },
          { id: 'iii', text: 'Cuadrante III (−, −)' },
          { id: 'iv', text: 'Cuadrante IV (+, −)' },
        ], correct: ['iii'] },
      ),
      S.coord(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.5.3'], prompt: '¿Qué lugar está en el punto **(4, −1)**? Tócalo.' },
        { range: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, markers: [
          { id: 'esc', label: 'Escuela', emoji: '🏫', x: 2, y: 3 },
          { id: 'mer', label: 'Mercado', emoji: '🧺', x: -3, y: 2 },
          { id: 'igl', label: 'Iglesia', emoji: '⛪', x: -2, y: -3 },
          { id: 'can', label: 'Cancha', emoji: '⚽', x: 4, y: -1 },
          { id: 'poz', label: 'Pozo', emoji: '💧', x: 0, y: -2 },
        ], task: { kind: 'identify', markerId: 'can' } },
      ),
    ],
  }),

  /* ───────────────────────── 4. Completar series ───────────────────────── */
  lesson({
    id: 's05-mat-4',
    title: 'Series con operaciones combinadas',
    icon: 'TrendingUp',
    minutes: 14,
    gancho: '2, 5, 11, 23… ¿Qué número sigue? Hay una regla escondida que combina dos operaciones.',
    objetivos: ['Descubrir la regla de una serie que combina dos o tres operaciones; completar series aplicando la regla y comprobándola'],
    resumen: [
      'Una serie numérica es una lista de números que sigue una regla.',
      'Regla combinada: a cada número se le aplican las mismas operaciones para obtener el siguiente (por ejemplo, ×2 y luego +1).',
      'Regla alternada: las operaciones se turnan (por ejemplo, +4, −1, +4, −1…).',
      'Estrategia: mira cuánto cambia de un número a otro; si los saltos crecen rápido, prueba una multiplicación. Comprueba la regla con TODOS los números.',
    ],
    media: {
      id: 's05-mat-4-serie', kind: 'animation', title: 'La máquina de la regla', aspect: '16:9', duration: 40,
      alt: 'Una máquina con dos engranes, "×2" y "+1": entra un 2 y sale un 5; entra el 5 y sale un 11; entra el 11 y sale un 23.',
      brief: 'Animación 2D de 40 s con una máquina amigable de dos engranes rotulados "×2" y "+1". Un número entra por un embudo (2), pasa por el primer engrane (se ve 4) y por el segundo (sale 5). El 5 vuelve a entrar y sale 11; luego 23 y 47. Debajo se va formando la serie 2, 5, 11, 23, 47. Al final aparece otra máquina con engranes que se turnan "+4" y "−1". Narración en español, subtítulos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:2.1.1'], ambito: 'conocer',
          prompt: 'Identifica la regla que transforma cada término de una serie.' },
        { icon: 'ListOrdered', body: 'Una serie puede repetir una operación o alternar varias. Para descubrir la regla, compara cada término con el siguiente y comprueba que el mismo patrón continúa.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:2.1.1'], ambito: 'conocer',
          prompt: 'Observa la serie **3, 6, 12, 24, …** ¿Qué número sigue?',
          explain: 'Cada número es el **doble** del anterior: 24 × 2 = **48**. Hoy verás series con reglas de dos o tres operaciones.' },
        { options: [
          { id: 'a', text: '27', feedback: 'Sumar 3 no funciona: de 6 a 12 hay 6, no 3.' },
          { id: 'b', text: '36', feedback: 'Sumar 12 funciona solo una vez. Mira todos los saltos: 3, 6, 12…' },
          { id: 'c', text: '48' },
        ], correct: ['c'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:2.1.1'], ambito: 'conocer', title: 'Reglas combinadas y alternadas',
          prompt: 'Una **serie numérica** sigue una **regla**. Algunas reglas usan **dos o tres operaciones**. Toca cada tarjeta.' },
        { icon: 'Cog', body: 'Primero descubre la regla; después úsala para completar.', reveal: [
          { icon: 'Layers', front: 'Regla combinada', back: 'A **cada** número se le aplican las mismas operaciones. "×2 y luego +1": 1, 3, 7, 15, 31…' },
          { icon: 'RefreshCw', front: 'Regla alternada', back: 'Las operaciones **se turnan**. "+4, −1": 5, 9, 8, 12, 11, 15…' },
          { icon: 'Search', front: 'Cómo descubrirla', back: 'Calcula los saltos entre números. Si crecen poco a poco, piensa en sumas; si se duplican o triplican, prueba con ×2 o ×3 y ajusta con + o −.' },
          { icon: 'CheckCheck', front: 'Siempre comprueba', back: 'Una regla es correcta solo si funciona con **todos** los números de la serie.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:2.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Así se descubre una regla combinada.' },
        { icon: 'Search', problem: 'Completa la serie: **2, 5, 11, 23, ?**',
          steps: [
            { text: 'Saltos: 5 − 2 = 3; 11 − 5 = 6; 23 − 11 = 12. Los saltos se **duplican**.', why: 'Cuando los saltos se duplican, suele haber un ×2 en la regla.' },
            { text: 'Pruebo ×2: 2 × 2 = 4, pero sigue 5. Me falta **+1**. Regla: **×2 y luego +1**.' },
            { text: 'Compruebo: 5 × 2 + 1 = 11 ✔; 11 × 2 + 1 = 23 ✔.' },
            { text: 'Aplico: 23 × 2 + 1 = **47**.' },
          ],
          answer: 'Sigue el **47**. La regla es ×2 y luego +1.',
          tip: 'Si con una operación "casi" funciona, busca una segunda que haga el ajuste.' },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:2.1.1'], prompt: 'Completa la serie: **1, 4, 13, 40, ?**',
          hint: 'Los saltos son 3, 9, 27: se triplican. Prueba "×3 y luego +1".',
          explain: 'Regla: ×3 y +1. 40 × 3 + 1 = 121.' },
        { answer: 121, misconceptions: [
          { value: 120, msg: 'Multiplicaste por 3, pero faltó sumar 1.' },
          { value: 67, msg: 'Sumaste 27 otra vez. Los saltos se triplican: el siguiente salto es 81.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:2.1.1'], ambito: 'conocer', title: 'Reglas que se turnan',
          prompt: 'En las series alternadas, fíjate en si los saltos **suben y bajan**. Toca cada ejemplo.' },
        { icon: 'RefreshCw', body: 'Escribe la operación entre cada par de números para ver el turno.', reveal: [
          { icon: 'Plus', front: '5, 9, 8, 12, 11, ?', back: '+4, −1, +4, −1… Sigue 11 + 4 = **15**.' },
          { icon: 'X', front: '3, 6, 4, 8, 6, ?', back: '×2, −2, ×2, −2… Sigue 6 × 2 = **12**.' },
          { icon: 'Layers', front: 'Tres operaciones', back: '"+2, ×3, −4": 1, 3, 9, 5, 7, 21, **17**… Las tres se repiten en el mismo orden.' },
        ] },
      ),
      S.fill(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:2.1.1'], prompt: 'Completa la serie. Regla alternada: **×2, luego −3**, y se repite.',
          hint: 'Después de 7 toca ×2; después, −3.',
          explain: '7 × 2 = 14 y 14 − 3 = 11.' },
        { text: '4, 8, 5, 10, 7, [[14]], [[11]]', distractors: ['13', '21', '4'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:2.1.1'], prompt: 'Supongamos que los socios de una cooperativa crecen así cada año: **3, 7, 15, 31, ?** ¿Cuántos habrá el año siguiente?',
          explain: 'Saltos 4, 8, 16: se duplican. Regla ×2 + 1: 31 × 2 + 1 = 63.' },
        { answer: 63, misconceptions: [
          { value: 62, msg: 'Multiplicaste por 2, pero faltó sumar 1.' },
          { value: 47, msg: 'Sumaste 16 otra vez; el salto siguiente es 32.' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:2.1.1'], prompt: 'Esta serie **baja**: **100, 52, 28, 16, ?** La regla es "÷2 y luego +2". ¿Qué número sigue?',
          explain: '16 ÷ 2 = 8 y 8 + 2 = 10. (Comprueba: 100 ÷ 2 + 2 = 52 ✔; 52 ÷ 2 + 2 = 28 ✔.)' },
        { answer: 10, misconceptions: [{ value: 8, msg: 'Dividiste entre 2, pero faltó sumar 2.' }] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:2.1.1'], prompt: '¿Qué regla genera la serie **2, 7, 22, 67**?',
          explain: '×3 + 1: 2 × 3 + 1 = 7; 7 × 3 + 1 = 22; 22 × 3 + 1 = 67. Funciona con todos.' },
        { options: [
          { id: 'a', text: '×3 y luego +1' },
          { id: 'b', text: '×4 y luego −1', feedback: 'Funciona de 2 a 7, pero 7 × 4 − 1 = 27, no 22.' },
          { id: 'c', text: '+5 cada vez', feedback: 'De 7 a 22 no hay 5 de diferencia.' },
        ], correct: ['a'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:2.1.1'], prompt: 'Completa la serie: **5, 9, 17, 33, ?**' },
        { answer: 65 },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:2.1.1'], prompt: 'Completa la serie. Regla alternada: **+5, luego ×2**, y se repite.' },
        { text: '1, 6, 12, 17, 34, [[39]], [[78]]', distractors: ['68', '44', '40'] },
      ),
    ],
  }),

  /* ───────────────────────── 5. Crear series ───────────────────────── */
  lesson({
    id: 's05-mat-5',
    title: 'Invento mis propias series',
    icon: 'Sparkles',
    minutes: 14,
    gancho: 'Si tú eres quien pone la regla, ¿qué serie inventarías para retar a tu familia?',
    objetivos: ['Crear series numéricas con reglas que combinan dos o tres operaciones; describir con claridad la regla de una serie; repasar enteros y plano cartesiano'],
    resumen: [
      'Para crear una serie: elige un número inicial, elige una regla de dos o tres operaciones, aplícala varias veces y comprueba cada cálculo.',
      'Describe la regla en orden: "×2, luego −3" no es lo mismo que "−3, luego ×2".',
      'Si usas división, elige números que se dividan exacto.',
      'Las series también pueden tener números negativos, por ejemplo una temperatura que baja 3 grados cada hora.',
    ],
    media: {
      id: 's05-mat-5-reto', kind: 'image', title: 'Reto de series en familia', aspect: '4:3',
      alt: 'Una niña escribe una serie numérica en un pizarrón pequeño en la cocina mientras su abuelo y su hermano piensan qué número sigue.',
      brief: 'Ilustración cálida de una cocina guatemalteca con poyo y comal. Una niña de 11 años escribe en un pizarrón pequeño "4, 5, 7, 11, 19, ?" y esconde la regla en un papelito doblado. Su abuelo y su hermano menor piensan con expresión divertida. Estilo plano, colores cálidos, sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:2.1.2'], ambito: 'conocer',
          prompt: 'Diseña una serie cuya regla pueda comprobar otra persona.' },
        { icon: 'ListPlus', body: 'Una serie bien construida tiene un inicio, una regla explícita y suficientes términos para verificarla. Si alterna operaciones, conviene escribir el ciclo completo antes de calcular.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:2.1.2'], ambito: 'conocer',
          prompt: 'Empiezas en **2** y tu regla es "**×3, luego −1**". ¿Cuál es el **segundo** número de tu serie?',
          explain: '2 × 3 = 6 y 6 − 1 = **5**. Tu serie empieza 2, 5, … ¡Ya estás creando!' },
        { options: [
          { id: 'a', text: '5' },
          { id: 'b', text: '6', feedback: 'Multiplicaste, pero faltó restar 1.' },
          { id: 'c', text: '4', feedback: 'Revisa: primero ×3 (da 6), luego −1.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:2.1.2'], ambito: 'conocer', title: 'Receta para crear una serie',
          prompt: 'Crear una serie es como seguir una receta. Toca cada paso.' },
        { icon: 'ListChecks', body: 'Una buena serie tiene una regla clara que se puede descubrir.', reveal: [
          { icon: 'Play', front: '1. Número inicial', back: 'Elige un número pequeño para que los cálculos no se vuelvan enormes.' },
          { icon: 'Cog', front: '2. La regla', back: 'Elige 2 o 3 operaciones y su **orden**. "×2, luego −3" no es lo mismo que "−3, luego ×2".' },
          { icon: 'Repeat', front: '3. Aplica y anota', back: 'Aplica la regla al último número para obtener el siguiente. Escribe al menos 5 números.' },
          { icon: 'CheckCheck', front: '4. Revisa', back: 'Revisa cada cálculo. Si usas división, cuida que el resultado sea exacto.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:2.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto: la serie de Ana',
          prompt: 'Ana crea una serie para retar a su abuelo.' },
        { icon: 'Sparkles', problem: 'Ana empieza en **4** con la regla "**×2, luego −3**". Escribe los primeros 6 números.',
          steps: [
            { text: '4 × 2 = 8; 8 − 3 = **5**.' },
            { text: '5 × 2 = 10; 10 − 3 = **7**.' },
            { text: '7 × 2 − 3 = **11**; 11 × 2 − 3 = **19**; 19 × 2 − 3 = **35**.', why: 'Siempre se aplica la regla al número anterior.' },
          ],
          answer: 'La serie es **4, 5, 7, 11, 19, 35**.',
          tip: 'Para retar a alguien, muestra solo los primeros números y guarda la regla en secreto.' },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:2.1.2'], prompt: 'Crea una serie que empiece en **3** con la regla "**×3, luego −4**". ¿Cuál es el **cuarto** número?',
          hint: 'El primero es 3. Calcula el segundo, luego el tercero y luego el cuarto.',
          explain: '3 → 3 × 3 − 4 = 5 → 5 × 3 − 4 = 11 → 11 × 3 − 4 = 29. El cuarto número es 29.' },
        { answer: 29, misconceptions: [
          { value: 11, msg: 'Ese es el tercero. Aplica la regla una vez más.' },
          { value: 83, msg: 'Ese sería el quinto. Cuenta el 3 como el primero.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:2.1.2'], ambito: 'conocer', title: 'Series con tres operaciones',
          prompt: 'También puedes turnar tres operaciones. Toca cada tarjeta.' },
        { icon: 'Layers', body: 'En una regla alternada, las operaciones se aplican una a la vez, en orden, y luego se repiten.', reveal: [
          { icon: 'RefreshCw', front: '"+3, ×2, −4" desde 2', back: '2, **5** (+3), **10** (×2), **6** (−4), **9** (+3), **18** (×2), **14** (−4)…' },
          { icon: 'Thermometer', front: 'Con negativos', back: 'Supongamos que desde 7 °C la temperatura baja 3 grados cada hora: 7, 4, 1, **−2**, **−5**…' },
          { icon: 'PenLine', front: 'Escribe la regla', back: 'Una regla clara: "Empieza en 2. Suma 3, multiplica por 2, resta 4 y repite."' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:2.1.2'], ambito: 'hacer',
          prompt: '¡Ahora eres tú quien inventa! **Crea una serie numérica** de al menos 5 números con una regla que **combine dos o tres operaciones**. Escribe la serie y, aparte, explica la regla. Luego rétale a alguien de tu familia a descubrirla.' },
        { minWords: 15, placeholder: 'Mi serie es… Mi regla es…',
          model: 'Mi serie es 2, 5, 11, 23, 47. Mi regla es: empieza en 2, multiplica por 2 y luego suma 1. Mi hermano la descubrió al ver que los saltos se duplicaban.',
          rubric: ['Mi serie tiene al menos 5 números', 'Mi regla combina dos o tres operaciones', 'Revisé que todos los cálculos estén correctos', 'Expliqué la regla en orden'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:2.1.2'], prompt: 'Luis empieza en **1** con la regla "**×2, luego +3**". ¿Cuál es su serie?',
          explain: '1 × 2 + 3 = 5; 5 × 2 + 3 = 13; 13 × 2 + 3 = 29.' },
        { options: [
          { id: 'a', text: '1, 5, 13, 29' },
          { id: 'b', text: '1, 8, 22, 50', feedback: 'Aplicaste las operaciones al revés: primero +3 y luego ×2.' },
          { id: 'c', text: '1, 5, 9, 13', feedback: 'Eso es sumar 4 cada vez.' },
        ], correct: ['a'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:2.1.2'], prompt: 'Crea la serie que empieza en **2** con la regla alternada "**+3, ×2, −4**". ¿Cuál es el **séptimo** número?',
          explain: '2, 5, 10, 6, 9, 18, 14. El séptimo es 14.' },
        { answer: 14, misconceptions: [
          { value: 18, msg: 'Ese es el sexto. Falta aplicar −4.' },
          { value: 17, msg: 'Revisa el turno: después de ×2 toca −4, no +3.' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:2.1.2', 'mat:1.5.1'], prompt: 'Repaso con enteros: supongamos que a medianoche hay **7 °C** y la temperatura **baja 3 grados cada hora**. Serie: 7, 4, 1, … ¿Qué temperatura habrá en la **cuarta** medición?',
          explain: '7, 4, 1, −2. La cuarta medición es −2 °C.' },
        { answer: -2, unit: '°C', allowNegative: true, misconceptions: [{ value: 2, msg: 'Al bajar de 1 tres grados cruzas el cero: queda −2.' }] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:2.1.2'], prompt: 'Lucía creó la serie **5, 8, 14, 26, 50**. ¿Qué regla usó?' },
        { options: [
          { id: 'a', text: '+3 cada vez' },
          { id: 'b', text: '×2, luego −2' },
          { id: 'c', text: '×2, luego +2' },
        ], correct: ['b'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:2.1.2'], prompt: 'Una serie empieza en **4** con la regla "**×2, luego +1**". ¿Cuál es el **tercer** número?' },
        { answer: 19 },
      ),
      cierre({ areas: ['mat'], cnb: [] },
        ['Uso números negativos en situaciones reales', 'Ubico y comparo enteros en la recta', 'Ubico puntos en el plano cartesiano', 'Completo y creo series con operaciones combinadas'],
        ['Anotaré la temperatura de mi comunidad varios días', 'Retaré a mi familia con una serie inventada', 'Dibujaré un mapa de mi casa con coordenadas']),
    ],
  }),
];
