/**
 * Matemáticas · Unidad 1 · Semana 8 — Aproximar cantidades y contar como los mayas.
 * Progresión: aproximación de cantidades grandes (cierra el trabajo con el sistema decimal) →
 * numerales mayas: punto, barra, caracol y dos niveles → conversión de decimal a vigesimal (3 a 5 niveles) →
 * series de 20 en 20 y de 100 en 100 con numerales mayas → numerales mayas en la vida diaria + repaso de la unidad.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Aproximación ───────────────────────── */
  lesson({
    id: 's08-mat-1',
    title: 'Aproximar cantidades',
    icon: 'Target',
    minutes: 14,
    gancho: 'La distancia promedio de la Tierra a la Luna es de 384,400 km, pero mucha gente dice "unos 384 mil kilómetros". ¿Cuándo conviene aproximar y cómo se hace?',
    objetivos: [
      'Aproximar una cantidad a la cifra indicada (decena, centena, millar, decena de millar, millón…)',
    ],
    resumen: [
      'Aproximar (o redondear) es cambiar una cantidad por otra "redonda" que esté cerca y sea más fácil de usar.',
      'Pasos: 1) marca la cifra del lugar pedido; 2) mira la cifra que está justo a su derecha; 3) si es 5 o más, suma 1 a la cifra marcada; si es menor que 5, déjala igual; 4) cambia por ceros todas las cifras de la derecha.',
      'Si la cifra marcada es 9 y hay que sumarle 1, se convierte en 0 y se lleva 1 al lugar de la izquierda: 29,960 a la centena es 30,000.',
      'Aproximar sirve para estimar: 48 + 52 + 39 es cerca de 50 + 50 + 40 = 140.',
    ],
    media: {
      id: 's08-mat-1-luna', kind: 'image', title: 'Una distancia enorme', aspect: '16:9',
      alt: 'La Tierra a la izquierda y la Luna a la derecha, unidas por una línea con la etiqueta "384,400 km ≈ 384,000 km".',
      brief: 'Ilustración horizontal sobre fondo espacial oscuro: la Tierra a la izquierda (con Centroamérica visible) y la Luna a la derecha, unidas por una línea punteada con la etiqueta "384,400 km". Debajo, en otra línea, "≈ 384,000 km" con el símbolo ≈ destacado y la palabra "aproximadamente". Tamaños no a escala (nota pequeña: "no a escala"). Estilo limpio, colores suaves. Target: public/media/s08-mat-1-luna.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
    },
    steps: [
      S.reflect(
        { fase: 'explorar', areas: ['mat'], cnb: [], ambito: 'conocer', prompt: 'Observa 38,712 y decide mentalmente si está más cerca de 38,000 o de 39,000; todavía no se califica.' },
        { statements: ['Puedo ubicar una cantidad entre dos millares', 'Sé que aproximar no cambia el dato exacto original'], commitments: ['Comprobaré mi idea con la recta numérica'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.4'], ambito: 'conocer', title: 'Aproximar en la recta numérica',
          prompt: 'Imagina la recta numérica: cada cantidad queda entre dos números redondos. Se aproxima al **más cercano**.',
          media: { id: 's08-mat-1-recta', kind: 'diagram', title: '38,712 en la recta numérica', aspect: '16:9',
            alt: 'Recta numérica de 38,000 a 39,000 con marcas cada 100; el punto medio 38,500 resaltado y el 38,712 marcado a su derecha, con una flecha hacia 39,000.',
            brief: 'Diagrama horizontal de una recta numérica desde 38,000 hasta 39,000 con marcas cada 100. El punto medio 38,500 está resaltado con una línea punteada vertical y el texto "la mitad". El número 38,712 está marcado con un punto rojo a la derecha de la mitad, con una flecha curva hacia 39,000 y el texto "más cerca". Abajo: "38,712 ≈ 39,000 (al millar)". Fondo blanco. Target: public/media/s08-mat-1-recta.svg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.' } },
        { icon: 'MoveHorizontal', body: 'El punto que decide es la **mitad**: 38,500. Lo que está desde la mitad hacia la derecha se aproxima hacia arriba.', reveal: [
          { icon: 'ArrowRight', front: 'Desde la mitad o más', back: '38,500 o más → 39,000. Por eso la regla dice "5 o más, sube".' },
          { icon: 'ArrowLeft', front: 'Antes de la mitad', back: '38,499 o menos → 38,000. "Menos de 5, se queda".' },
          { icon: 'Equal', front: 'El símbolo ≈', back: 'Se lee "aproximadamente": 38,712 ≈ 39,000.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.4'], ambito: 'conocer', title: 'La regla en cuatro pasos',
          prompt: 'Así se aproxima cualquier cantidad a la cifra que te pidan. Toca cada paso.' },
        { icon: 'ListOrdered', body: 'Lo más importante es **ubicar bien la cifra** del lugar pedido.', reveal: [
          { icon: 'Highlighter', front: '1. Marca', back: 'Marca la cifra del lugar pedido. En 384,400 al millar, la cifra de las unidades de millar es el **4** de 38**4**,400.' },
          { icon: 'Eye', front: '2. Mira a la derecha', back: 'Observa **solo** la cifra que está justo a su derecha: 384,**4**00 → 4.' },
          { icon: 'ArrowUpDown', front: '3. Decide', back: '5, 6, 7, 8 o 9: suma 1 a la cifra marcada. 0, 1, 2, 3 o 4: déjala igual. Aquí es 4: se queda.' },
          { icon: 'Circle', front: '4. Ceros', back: 'Cambia por ceros todo lo que está a la derecha: 384,400 ≈ **384,000**.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.4'], ambito: 'hacer', title: 'Ejemplo resuelto: a la decena de millar',
          prompt: 'Apliquemos los cuatro pasos a una cantidad de millones.' },
        { icon: 'Trees', problem: 'Supongamos que una región tiene **1,746,382** árboles. Aproxima a la **decena de millar**.',
          steps: [
            { text: 'Marco la cifra de las decenas de millar: 1,7**4**6,382 → el **4**.', why: 'Desde la derecha: unidades (2), decenas (8), centenas (3), unidades de millar (6), decenas de millar (4).' },
            { text: 'A su derecha está el **6**.' },
            { text: '6 es 5 o más: el 4 sube a **5**.' },
            { text: 'Cambio por ceros lo de la derecha: **1,750,000**.' },
          ],
          answer: '1,746,382 ≈ 1,750,000 (a la decena de millar).',
          tip: 'Error frecuente: mirar todas las cifras de la derecha. Solo importa la que está inmediatamente a la derecha.' },
      ),
      S.slider(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.4'], prompt: 'Aproxima **4,680** al **millar**. Mueve el marcador al millar más cercano.',
          hint: '4,680 está entre 4,000 y 5,000. ¿Pasa de la mitad, 4,500?',
          explain: '4,680 pasa de 4,500, así que está más cerca de 5,000. Con la regla: la cifra a la derecha del 4 es 6 → sube.' },
        { min: 3000, max: 6000, step: 500, start: 3000, answer: 5000, visual: 'line',
          ticks: [{ value: 3000, label: '3,000' }, { value: 4000, label: '4,000' }, { value: 4500, label: '4,500' }, { value: 5000, label: '5,000' }, { value: 6000, label: '6,000' }] },
      ),
      S.number(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.4'], prompt: 'Aproxima **62,480** a la **unidad de millar**.',
          hint: 'La cifra de las unidades de millar es el 2. ¿Qué cifra está a su derecha?',
          explain: 'A la derecha del 2 está el 4 (menos de 5): el 2 se queda. 62,480 ≈ 62,000.' },
        { answer: 62000, misconceptions: [
          { value: 63000, msg: 'La cifra que decide es el 4 (menos de 5), no el 8. Mira solo la cifra que está justo a la derecha.' },
          { value: 62500, msg: 'Aproximado al millar, todas las cifras a la derecha de los millares se vuelven cero.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.4'], ambito: 'hacer', title: 'Ejemplo resuelto: cuando la cifra es 9',
          prompt: '¿Qué pasa si hay que sumar 1 a un 9?' },
        { icon: 'Repeat', problem: 'Aproxima **29,960** a la **centena**.',
          steps: [
            { text: 'Marco la cifra de las centenas: 29,**9**60 → el **9**.' },
            { text: 'A su derecha está el 6: hay que sumar 1 al 9.' },
            { text: '9 + 1 = 10: escribo 0 en las centenas y **llevo 1** a los millares: 29 millares pasan a ser 30.', why: 'Es como cuando 99 + 1 = 100.' },
            { text: 'Cambio por ceros lo de la derecha: **30,000**.' },
          ],
          answer: '29,960 ≈ 30,000 (a la centena).' },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.4'], prompt: 'Supongamos que un país tiene **7,650,000** habitantes. Aproxima esa cantidad a la **unidad de millón**.',
          explain: 'La cifra de los millones es 7; a su derecha hay un 6 → sube a 8. 7,650,000 ≈ 8,000,000.' },
        { answer: 8000000, misconceptions: [{ value: 7000000, msg: 'La cifra a la derecha del 7 es 6 (5 o más): hay que subir.' }] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.4'], prompt: 'Aproxima **2,349,501** a la **centena de millar**.',
          explain: 'La cifra de las centenas de millar es 3; a su derecha hay un 4 → se queda. 2,349,501 ≈ 2,300,000.' },
        { options: [
          { id: 'a', text: '2,300,000' },
          { id: 'b', text: '2,400,000', feedback: 'La cifra que decide es el 4 (menos de 5), no el 9.' },
          { id: 'c', text: '2,350,000', feedback: 'Así se aproxima a la decena de millar. Aquí se pide la centena de millar.' },
        ], correct: ['a'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.4'],
          prompt: 'Supongamos que tres buses llevan a una excursión **48**, **52** y **39** estudiantes. **Estima** el total aproximando cada número a la **decena** y sumando.',
          explain: '48 ≈ 50, 52 ≈ 50 y 39 ≈ 40. Estimación: 50 + 50 + 40 = 140. (El total exacto es 139: ¡muy cerca!)' },
        { answer: 140, misconceptions: [{ value: 139, msg: 'Ese es el total exacto. Aquí se pide la estimación con números aproximados a la decena.' }] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.4'], prompt: 'Aproxima **568,329** a la **decena de millar**.' },
        { answer: 570000 },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.4'], prompt: 'Aproxima **9,951** a la **centena**.' },
        { options: [
          { id: 'a', text: '9,900' },
          { id: 'b', text: '10,000' },
          { id: 'c', text: '9,000' },
        ], correct: ['b'] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Numerales mayas ───────────────────────── */
  lesson({
    id: 's08-mat-2',
    title: 'Punto, barra y caracol: los numerales mayas',
    icon: 'Shell',
    minutes: 14,
    gancho: 'Con granos de maíz, palitos y caracoles se pueden escribir números muy grandes. Así contaban los antiguos mayas, y así se sigue enseñando en muchas escuelas de Guatemala.',
    objetivos: [
      'Escribir los números del 0 al 19 con punto, barra y caracol',
    ],
    resumen: [
      'El sistema maya usa tres símbolos: punto = 1, barra = 5 y caracol = 0.',
      'En un nivel caben números del 0 al 19: como máximo 4 puntos y 3 barras. Cinco puntos forman una barra.',
      'Es un sistema vigesimal (de 20 en 20) y se escribe en niveles de abajo hacia arriba: el primer nivel vale ×1 y el segundo ×20.',
      'Para leer: multiplica el segundo nivel por 20 y súmale el primero. 130 = 6 × 20 + 10.',
    ],
    media: {
      id: 's08-mat-2-mercado', kind: 'image', title: 'Números mayas en el mercado', aspect: '4:3',
      alt: 'Puesto de mercado donde una vendedora anota con numerales mayas la cantidad de elotes y aguacates; una niña cuenta con granos de maíz y palitos.',
      brief: 'Ilustración de un puesto de mercado del altiplano guatemalteco con canastos de elotes y aguacates. Una pizarra pequeña muestra con puntos, barras y caracoles las cantidades en dos niveles (por ejemplo, 45 = dos puntos arriba y una barra abajo). Una niña con güipil forma numerales sobre la mesa con granos de maíz (puntos), palitos (barras) y un caracol. Colores vivos, estilo plano, sin texto excepto los numerales. Target: public/media/s08-mat-2-mercado.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:4.1.5'], ambito: 'conocer', title: 'Tres símbolos mayas',
          prompt: 'Antes de construir numerales, observa que el **punto vale 1**, la **barra vale 5** y el **caracol representa 0**.' },
        { icon: 'CircleDot', body: 'En un nivel se suman los símbolos: tres barras y dos puntos representan 15 + 2 = **17**.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.5'], ambito: 'conocer', title: 'Los tres símbolos y los números del 0 al 19',
          prompt: 'Los mayas desarrollaron un sistema de numeración con **cero**, siglos antes de que se usara en Europa. Toca cada tarjeta.',
          media: { id: 's08-mat-2-tabla', kind: 'diagram', title: 'Del 0 al 19 en numeración maya', aspect: '4:3',
            alt: 'Tabla de cuatro filas con los números del 0 al 19 en numeración maya: caracol para el 0, puntos del 1 al 4, una barra para el 5, y así hasta tres barras con cuatro puntos para el 19.',
            brief: 'Tabla de 4 filas × 5 columnas con los números del 0 al 19 escritos en numeración maya y su valor decimal pequeño debajo. Fila 1: 0 (caracol), 1-4 (puntos). Fila 2: 5 (una barra) a 9 (barra con 4 puntos arriba). Fila 3: 10 (dos barras) a 14. Fila 4: 15 (tres barras) a 19. Las barras horizontales van abajo y los puntos arriba de las barras. Puntos y barras en café maíz; caracol blanco con contorno. Fondo crema. Target: public/media/s08-mat-2-tabla.svg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.' } },
        { icon: 'Shell', body: '**Punto** = 1 · **Barra** = 5 · **Caracol** = 0. En un mismo nivel, los símbolos se **suman**.', reveal: [
          { icon: 'Dot', front: 'Del 1 al 4', back: 'Solo puntos: • = 1, •• = 2, ••• = 3, •••• = 4.' },
          { icon: 'Minus', front: 'Cinco puntos = una barra', back: 'Nunca se escriben 5 puntos: se cambian por una barra. 7 = una barra y dos puntos.' },
          { icon: 'Layers', front: 'Hasta el 19', back: 'Máximo **3 barras y 4 puntos** = 19. Con 20 ya se necesita otro nivel.' },
          { icon: 'Shell', front: 'El caracol', back: 'Representa el **cero**: indica que un nivel está vacío.' },
        ] },
      ),
      S.maya(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.5'], ambito: 'hacer', prompt: 'Construye el número **13** en el primer nivel.',
          hint: '13 = 5 + 5 + 3: dos barras y tres puntos.',
          explain: 'Dos barras (10) y tres puntos (3) = 13.' },
        { mode: 'build', target: 13, scaffold: true },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.5'], ambito: 'conocer', title: 'El segundo nivel vale ×20',
          prompt: 'El sistema maya es **vigesimal**: agrupa de 20 en 20. Los niveles se escriben **de abajo hacia arriba**. Toca cada tarjeta.' },
        { icon: 'Layers', body: 'Nivel de abajo: **×1**. Nivel de arriba: **×20**. Cada punto del segundo nivel vale 20.', reveal: [
          { icon: 'ArrowUp', front: 'El 20', back: 'Un punto en el segundo nivel (1 × 20) y un **caracol** abajo (0). ¡Aquí el caracol es indispensable!' },
          { icon: 'Calculator', front: 'El 45', back: 'Arriba dos puntos (2 × 20 = 40) y abajo una barra (5): 40 + 5 = 45.' },
          { icon: 'Calculator', front: 'El 100', back: 'Arriba una barra (5 × 20 = 100) y abajo un caracol: 100.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.5'], ambito: 'hacer', title: 'Ejemplo resuelto: la pizarra de doña Candelaria',
          prompt: 'Doña Candelaria anota en su pizarra, con numerales mayas, los elotes que vende.' },
        { icon: 'Wheat', problem: 'En el nivel de **arriba** hay una barra y un punto; en el nivel de **abajo** hay dos barras. ¿Cuántos elotes vendió?',
          steps: [
            { text: 'Nivel de arriba: barra + punto = 6. Vale 6 × 20 = **120**.' },
            { text: 'Nivel de abajo: dos barras = **10**.', why: 'El primer nivel vale ×1.' },
            { text: 'Sumo: 120 + 10 = **130**.' },
          ],
          answer: 'Vendió **130** elotes.',
          tip: 'Lee siempre de arriba hacia abajo: primero el nivel que vale más.' },
      ),
      S.maya(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.5'], ambito: 'hacer', prompt: 'Lee este numeral maya y escribe su valor.',
          hint: 'Multiplica el nivel de arriba por 20 y súmale el de abajo.',
          explain: 'Arriba 4 (4 × 20 = 80) y abajo 7: 80 + 7 = 87.' },
        { mode: 'read', target: 87, levels: 2 },
      ),
      S.maya(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.5'], prompt: 'Supongamos que una cooperativa anotó en numeral maya los **aguacates** que cosechó en una semana. ¿Cuántos son?',
          explain: 'Arriba 12 (12 × 20 = 240) y abajo 5: 240 + 5 = 245 aguacates.' },
        { mode: 'read', target: 245, levels: 2 },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.5'], prompt: '¿Qué numeral representa **100**?',
          explain: '100 = 5 × 20 + 0: una barra en el nivel del 20 y un caracol abajo.' },
        { options: [
          { id: 'a', text: 'Arriba: una barra · Abajo: caracol' },
          { id: 'b', text: 'Un solo nivel con 20 barras', feedback: 'En un nivel solo caben números del 0 al 19.' },
          { id: 'c', text: 'Arriba: un punto · Abajo: caracol', feedback: 'Ese es 1 × 20 = 20.' },
        ], correct: ['a'] },
      ),
      S.maya(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.5'], prompt: 'Supongamos que el grado planifica **60** días de clase en la unidad. Escríbelo con numeral maya.',
          explain: '60 = 3 × 20 + 0: tres puntos en el nivel del 20 y un caracol abajo.' },
        { mode: 'build', target: 60, levels: 2 },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.5'], prompt: 'Supongamos que una familia anotó los **tamales** que hizo para una fiesta. Arriba: **una barra y dos puntos** · Abajo: **tres barras y un punto**. ¿Cuántos tamales son?' },
        { options: [
          { id: 'a', text: '23' },
          { id: 'b', text: '156' },
          { id: 'c', text: '716' },
        ], correct: ['b'] },
      ),
      S.maya(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.5'], prompt: 'Escribe **99** con numeral maya.' },
        { mode: 'build', target: 99, levels: 2 },
      ),
    ],
  }),

  /* ───────────────────────── 3. Del decimal al vigesimal ───────────────────────── */
  lesson({
    id: 's08-mat-3',
    title: 'Convertir del sistema decimal al maya',
    icon: 'ArrowRightLeft',
    minutes: 15,
    gancho: 'Si el segundo nivel vale ×20, ¿cuánto vale el tercero? ¿Y el quinto? Con cinco niveles los mayas podían escribir números de más de tres millones.',
    objetivos: [
      'Conocer el valor de los niveles del sistema vigesimal: ×1, ×20, ×400, ×8,000 y ×160,000',
    ],
    resumen: [
      'Cada nivel vale 20 veces el de abajo: ×1, ×20, ×400, ×8,000 y ×160,000.',
      'Para convertir: divide entre el valor del nivel más alto que quepa; el cociente va en ese nivel y el residuo se reparte en los niveles de abajo.',
      'Si un nivel queda vacío, se escribe un caracol: 1,000 = 2 | 10 | 0.',
      'Comprueba siempre multiplicando cada nivel por su valor y sumando.',
    ],
    media: {
      id: 's08-mat-3-niveles', kind: 'animation', title: 'Subiendo de nivel', aspect: '9:16', duration: 45,
      alt: 'Una torre de cinco casillas que se llena de abajo hacia arriba; cada casilla muestra su valor: 1, 20, 400, 8,000 y 160,000.',
      brief: 'Animación vertical 2D de 45 s. Una torre de 5 casillas apiladas se construye de abajo hacia arriba. En la primera caen granos de maíz uno por uno hasta 19; al caer el 20, los granos se juntan y "suben" como un solo punto al segundo nivel (rótulo ×20), y abajo aparece un caracol. Se repite más rápido: 20 puntos del segundo nivel suben a un punto del tercero (×400); luego ×8,000 y ×160,000. Al final se muestran los cinco valores. Narración en español: "cada nivel vale veinte veces el de abajo". Target: public/media/s08-mat-3-niveles.mp4. Accesibilidad: subtítulos completos, transcripción y pausa suficiente para lectura.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:4.1.6'], ambito: 'conocer', title: 'Un sistema vigesimal',
          prompt: 'Mira la torre: cada nivel maya vale **20 veces** el nivel inferior.' },
        { icon: 'Layers', body: 'Los primeros valores son ×1, ×20 y ×400. El tercero vale 20 × 20 = **400**.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.6'], ambito: 'conocer', title: 'El valor de los cinco niveles',
          prompt: 'Cada nivel vale **20 veces** el de abajo. Toca cada tarjeta.' },
        { icon: 'Layers', body: 'De abajo hacia arriba: **×1 · ×20 · ×400 · ×8,000 · ×160,000**.', reveal: [
          { icon: 'Layers', front: '1.º y 2.º nivel', back: '×1 y ×20.' },
          { icon: 'Layers', front: '3.er nivel', back: '20 × 20 = **400**.' },
          { icon: 'Layers', front: '4.º y 5.º nivel', back: '400 × 20 = **8,000**; 8,000 × 20 = **160,000**.' },
          { icon: 'CalendarDays', front: 'Un dato', back: 'Para contar objetos se usan estos valores. En el calendario de la Cuenta Larga, el tercer nivel valía 360 (18 × 20, un número cercano a los días de un año), pero esa es otra forma de contar. En esta lección usamos siempre 400.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.6'], ambito: 'hacer', title: 'Ejemplo resuelto: 845',
          prompt: 'Para convertir, empieza por el nivel **más alto que quepa** en el número.',
          media: { id: 's08-mat-3-torre', kind: 'diagram', title: 'Cómo convertir 845 a numeral maya', aspect: '3:4',
            alt: 'Columna con tres niveles: arriba dos puntos (2 × 400), en medio dos puntos (2 × 20) y abajo una barra (5 × 1); a la par, las divisiones.',
            brief: 'Diagrama vertical con tres casillas apiladas. Casilla superior: dos puntos, rotulada "×400 → 800". Casilla media: dos puntos, rotulada "×20 → 40". Casilla inferior: una barra, rotulada "×1 → 5". A la derecha, los pasos: "845 ÷ 400 = 2, sobran 45"; "45 ÷ 20 = 2, sobran 5". Abajo, la comprobación "800 + 40 + 5 = 845". Puntos y barras color café maíz, caracol blanco con contorno. Fondo crema. Target: public/media/s08-mat-3-torre.svg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.' } },
        { icon: 'Calculator', problem: 'Convierte **845** a numeral maya.',
          steps: [
            { text: '¿Cabe 8,000 en 845? No. El nivel más alto que cabe es el de **400**.' },
            { text: '845 ÷ 400 = **2**, sobran 45. → Tercer nivel: 2 (dos puntos).', why: '2 × 400 = 800; 845 − 800 = 45.' },
            { text: '45 ÷ 20 = **2**, sobran 5. → Segundo nivel: 2 (dos puntos).' },
            { text: 'Lo que sobra, **5**, va en el primer nivel (una barra).' },
            { text: 'Compruebo: 2 × 400 + 2 × 20 + 5 = 800 + 40 + 5 = 845 ✔' },
          ],
          answer: '845 = **2 | 2 | 5** (de arriba hacia abajo).' },
      ),
      S.maya(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.6'], ambito: 'hacer', prompt: 'Convierte **523** a numeral maya.',
          hint: '523 ÷ 400 = 1, sobran 123. Luego 123 ÷ 20 = 6, sobran 3.',
          explain: '1 × 400 + 6 × 20 + 3 = 400 + 120 + 3 = 523. Niveles: 1 | 6 | 3.' },
        { mode: 'build', target: 523, levels: 3, scaffold: true },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.6'], ambito: 'hacer', title: 'Ejemplo resuelto: un nivel con cero',
          prompt: 'A veces un nivel queda vacío. Ahí va el caracol.' },
        { icon: 'Shell', problem: 'Convierte **1,000** a numeral maya.',
          steps: [
            { text: '1,000 ÷ 400 = **2**, sobran 200. → Tercer nivel: 2.' },
            { text: '200 ÷ 20 = **10**, sobra 0. → Segundo nivel: 10 (dos barras).' },
            { text: 'Primer nivel: **0** → caracol.', why: 'Sin el caracol, el numeral se leería como otro número.' },
            { text: 'Compruebo: 800 + 200 + 0 = 1,000 ✔' },
          ],
          answer: '1,000 = **2 | 10 | 0**.',
          tip: 'Otra forma: divide entre 20 una y otra vez. 1,000 ÷ 20 = 50, residuo 0 (primer nivel); 50 ÷ 20 = 2, residuo 10 (segundo nivel); queda 2 (tercer nivel).' },
      ),
      S.maya(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.6'], ambito: 'hacer', prompt: 'El año tiene **365** días. Convierte 365 a numeral maya.',
          hint: '¿Cabe 400 en 365? No. Empieza con el nivel del 20: 365 ÷ 20 = 18, sobran 5.',
          explain: '18 × 20 + 5 = 360 + 5 = 365. Niveles: 18 | 5 (tres barras y tres puntos arriba; una barra abajo).' },
        { mode: 'build', target: 365, levels: 3, scaffold: true },
      ),
      S.maya(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.6'], prompt: 'Supongamos que una escuela recolectó **2,030** botellas para reciclar. Escribe la cantidad con numeral maya.',
          explain: '2,030 ÷ 400 = 5, sobran 30; 30 ÷ 20 = 1, sobran 10. Niveles: 5 | 1 | 10. Compruebo: 2,000 + 20 + 10 = 2,030.' },
        { mode: 'build', target: 2030, levels: 3 },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.6'], prompt: 'Un numeral tiene **cuatro niveles**. De arriba hacia abajo: **un punto** (×8,000), **tres puntos** (×400), **caracol** (×20) y **una barra y dos puntos** (×1). ¿Qué número es?',
          explain: '1 × 8,000 + 3 × 400 + 0 × 20 + 7 = 8,000 + 1,200 + 0 + 7 = 9,207.' },
        { answer: 9207, misconceptions: [
          { value: 1207, msg: 'El punto del cuarto nivel vale 8,000, no 0. Revisa: ×1, ×20, ×400, ×8,000.' },
          { value: 11, msg: 'Sumaste los símbolos sin multiplicar por el valor de cada nivel.' },
        ] },
      ),
      S.maya(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.6'], prompt: 'Convierte **10,000** a numeral maya. Necesitarás cuatro niveles.',
          explain: '10,000 ÷ 8,000 = 1, sobran 2,000; 2,000 ÷ 400 = 5, sobra 0; los niveles del 20 y del 1 quedan en cero. Niveles: 1 | 5 | 0 | 0.' },
        { mode: 'build', target: 10000, levels: 4 },
      ),
      S.maya(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.6'], prompt: 'Convierte **1,500** a numeral maya.' },
        { mode: 'build', target: 1500, levels: 3 },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.6'], prompt: '¿Qué niveles (de arriba hacia abajo) representan **850**?' },
        { options: [
          { id: 'a', text: '2 | 5 | 0' },
          { id: 'b', text: '2 | 2 | 10' },
          { id: 'c', text: '8 | 5 | 0' },
        ], correct: ['b'] },
      ),
    ],
  }),

  /* ───────────────────────── 4. Series con numerales mayas ───────────────────────── */
  lesson({
    id: 's08-mat-4',
    title: 'Series mayas de 20 en 20 y de 100 en 100',
    icon: 'TrendingUp',
    minutes: 14,
    gancho: 'Contar de 20 en 20 en el sistema maya es muy fácil: solo se agrega un punto. ¿Y contar de 100 en 100?',
    objetivos: [
      'Reconocer qué cambia en un numeral maya al sumar 20 o 100',
    ],
    resumen: [
      'Sumar 20 es agregar un punto en el segundo nivel (×20). El primer nivel no cambia.',
      'Sumar 100 es agregar una barra en el segundo nivel, porque 5 × 20 = 100.',
      'Cuando el segundo nivel llega a 20, se cambia por un punto en el tercer nivel (×400) y queda un caracol: 400 = 1 | 0 | 0.',
      'Para ordenar numerales mayas: más niveles = mayor. Con los mismos niveles, compara desde el nivel de arriba.',
    ],
    media: {
      id: 's08-mat-4-series', kind: 'animation', title: 'De 20 en 20 y de 100 en 100', aspect: '16:9', duration: 40,
      alt: 'Una fila de numerales mayas crece: primero se agrega un punto arriba cada vez (de 20 en 20); luego una barra cada vez (de 100 en 100) hasta que al llegar a 400 aparece un tercer nivel.',
      brief: 'Animación 2D de 40 s. Parte 1: aparecen en fila los numerales mayas de 20, 40, 60, 80, 100 y 120; en cada paso cae un punto nuevo en el segundo nivel (cuando hay 5 puntos se funden en una barra) y abajo se mantiene el caracol. Parte 2: la serie 100, 200, 300, 400, 500: en cada paso cae una barra en el segundo nivel; al llegar a 400 las cuatro barras suben convertidas en un punto al tercer nivel y quedan dos caracoles. Narración en español con los números en voz alta. Target: public/media/s08-mat-4-series.mp4. Accesibilidad: subtítulos completos, transcripción y pausa suficiente para lectura.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:4.1.7'], ambito: 'conocer', title: 'Series mayas',
          prompt: 'Observa qué cambia al sumar **20** o **100** en un numeral maya.' },
        { icon: 'TrendingUp', body: 'Sumar 20 agrega un punto en el nivel ×20; sumar 100 agrega una barra en ese nivel. Así se forman y comparan series mayas.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.7'], ambito: 'conocer', title: 'Contar de 20 en 20 y de 100 en 100',
          prompt: 'En las series mayas, casi todo pasa en el **segundo nivel**. Toca cada tarjeta.' },
        { icon: 'TrendingUp', body: '**+20** = un punto más arriba · **+100** = una barra más arriba (5 × 20 = 100).', reveal: [
          { icon: 'Dot', front: 'De 20 en 20', back: '20 (•), 40 (••), 60 (•••), 80 (••••), 100 (una barra)… en el segundo nivel, con caracol abajo.' },
          { icon: 'Minus', front: 'De 100 en 100', back: '100 (una barra), 200 (dos barras), 300 (tres barras) en el segundo nivel, con caracol abajo.' },
          { icon: 'ArrowUp', front: 'Al llegar a 400', back: 'Cuatro barras serían 20 en el segundo nivel: ¡no caben! Se cambian por **un punto en el tercer nivel** y dos caracoles: 400 = 1 | 0 | 0.' },
          { icon: 'ArrowUp', front: 'Y sigue', back: '500 = 1 | 5 | 0 (un punto arriba, una barra en medio, caracol abajo).' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.7'], ambito: 'hacer', title: 'Ejemplo resuelto: completar una serie de 100 en 100',
          prompt: 'Observa lo que pasa al cruzar el 400.' },
        { icon: 'ListOrdered', problem: 'Completa la serie: 200, 300, **?**, **?**',
          steps: [
            { text: '200 = dos barras en el nivel del 20, caracol abajo.' },
            { text: '300 = tres barras en el nivel del 20, caracol abajo.' },
            { text: '400: una barra más serían cuatro barras = 20 en ese nivel. Se sube **un punto al tercer nivel**: 1 | 0 | 0.', why: '20 × 20 = 400: veinte del segundo nivel forman uno del tercero.' },
            { text: '500 = 400 + 100: un punto arriba, una barra en medio, caracol abajo: 1 | 5 | 0.' },
          ],
          answer: 'Siguen 400 = 1 | 0 | 0 y 500 = 1 | 5 | 0.' },
      ),
      S.order(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.7'], prompt: 'Ordena esta **serie de 20 en 20** escrita con numerales mayas, de menor a mayor.',
          hint: 'Todos tienen caracol abajo. Compara lo que hay en el nivel del 20: cada punto vale 20.',
          explain: '3 puntos = 60; 4 puntos = 80; una barra = 100; una barra y un punto = 120.' },
        { items: [
          { id: 'a', text: 'Nivel del 20: tres puntos · Nivel del 1: caracol' },
          { id: 'b', text: 'Nivel del 20: cuatro puntos · Nivel del 1: caracol' },
          { id: 'c', text: 'Nivel del 20: una barra · Nivel del 1: caracol' },
          { id: 'd', text: 'Nivel del 20: una barra y un punto · Nivel del 1: caracol' },
        ], labels: { start: 'Menor', end: 'Mayor' } },
      ),
      S.maya(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.7'], ambito: 'hacer', prompt: 'La serie va de 20 en 20: **40, 60, 80, …** Construye el número que sigue.',
          hint: '80 tiene cuatro puntos en el nivel del 20. Uno más: cinco puntos forman una barra.',
          explain: 'Sigue 100: una barra en el nivel del 20 y un caracol abajo.' },
        { mode: 'build', target: 100, levels: 2, scaffold: true },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.7'], ambito: 'conocer', title: 'Series que no empiezan en cero',
          prompt: 'Si la serie empieza en un número como 15, el primer nivel **se queda igual** en todos los términos. Toca cada tarjeta.' },
        { icon: 'Repeat', body: 'Serie 15, 35, 55, 75…: abajo siempre hay **tres barras** (15); arriba se agrega un punto cada vez.', reveal: [
          { icon: 'Dot', front: '15', back: 'Arriba: caracol · Abajo: tres barras.' },
          { icon: 'Dot', front: '35', back: 'Arriba: un punto (20) · Abajo: tres barras (15).' },
          { icon: 'Dot', front: '55', back: 'Arriba: dos puntos (40) · Abajo: tres barras (15).' },
          { icon: 'Scale', front: 'Para ordenar', back: 'Más niveles = número mayor. Con los mismos niveles, gana el que tiene más en el nivel de arriba.' },
        ] },
      ),
      S.maya(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.7'], prompt: 'La serie va de 100 en 100: **300, 400, 500, …** Construye el número que sigue.',
          explain: 'Sigue 600 = 400 + 200: un punto en el nivel del 400, dos barras en el nivel del 20 y un caracol abajo (1 | 10 | 0).' },
        { mode: 'build', target: 600, levels: 3 },
      ),
      S.order(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.7'], prompt: 'Ordena esta **serie de 100 en 100**, de menor a mayor.',
          explain: '200 (dos barras), 300 (tres barras), 400 (un punto en el tercer nivel), 500 (un punto arriba y una barra en medio).' },
        { items: [
          { id: 'a', text: 'Nivel del 20: dos barras · Nivel del 1: caracol' },
          { id: 'b', text: 'Nivel del 20: tres barras · Nivel del 1: caracol' },
          { id: 'c', text: 'Nivel del 400: un punto · Nivel del 20: caracol · Nivel del 1: caracol' },
          { id: 'd', text: 'Nivel del 400: un punto · Nivel del 20: una barra · Nivel del 1: caracol' },
        ], labels: { start: 'Menor', end: 'Mayor' } },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.7'], prompt: 'En la serie de 20 en 20 que empieza en 15 (15, 35, 55, …), ¿qué número tiene **cuatro puntos** en el nivel del 20 y **tres barras** abajo?',
          explain: '4 × 20 + 15 = 80 + 15 = 95.' },
        { answer: 95, misconceptions: [{ value: 19, msg: 'Sumaste 4 + 15. Los puntos de arriba valen 20 cada uno.' }] },
      ),
      S.order(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.7'], prompt: 'Ordena esta **serie de 20 en 20**, de menor a mayor.' },
        { items: [
          { id: 'a', text: 'Nivel del 20: una barra y dos puntos · Nivel del 1: caracol' },
          { id: 'b', text: 'Nivel del 20: una barra y tres puntos · Nivel del 1: caracol' },
          { id: 'c', text: 'Nivel del 20: una barra y cuatro puntos · Nivel del 1: caracol' },
          { id: 'd', text: 'Nivel del 20: dos barras · Nivel del 1: caracol' },
        ], labels: { start: 'Menor', end: 'Mayor' } },
      ),
      S.maya(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.7'], prompt: 'La serie va de 100 en 100: **500, 600, 700, …** Construye el número que sigue.' },
        { mode: 'build', target: 800, levels: 3 },
      ),
    ],
  }),

  /* ───────────────────────── 5. Numerales mayas para comparar datos ───────────────────────── */
  lesson({
    id: 's08-mat-5',
    title: 'Numerales mayas para comparar datos de energía',
    icon: 'Gauge',
    minutes: 15,
    gancho: 'Un archivo cultural anota con numerales mayas los conteos de dos jornadas didácticas sobre energía. ¿Puedes leer, sumar y comprobar esos registros?',
    objetivos: [
      'Resolver una situación coherente de datos energéticos y representar el resultado con numerales mayas',
    ],
    resumen: [
      'Para resolver un problema con numerales mayas: lee cada numeral en decimal, opera y vuelve a escribir el resultado en maya.',
      'Para comparar: el numeral con más niveles es mayor; con los mismos niveles, compara desde el nivel de arriba.',
      'Un registro honesto conserva la unidad, el dato decimal y la comprobación del numeral maya.',
    ],
    media: {
      id: 's08-mat-5-pizarra', kind: 'image', title: 'La pizarra de la semana', aspect: '4:3',
      alt: 'Una pizarra del caso simulado muestra 145 minutos de iluminación innecesaria en un pasillo, 230 minutos en un salón y un total por completar con numeral maya.',
      brief: 'Ilustración de una pizarra escolar con el rótulo “Caso escolar simulado; no describe tu escuela”. Tres columnas: “pasillo: 145 min”, “salón: 230 min” y “total: ?”, con numerales mayas de dos niveles junto a los datos decimales. Incluir iconos descriptivos de reloj, pasillo iluminado y salón vacío; no representar minutos como consumo eléctrico. Target: public/media/s08-mat-5-pizarra.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['mat'], cnb: ['mat:4.1.5', 'mat:4.1.6', 'mat:4.1.7'], ambito: 'conocer', title: 'Numerales mayas para datos de energía',
          prompt: 'Esta lección integra símbolos, niveles y comparación en un solo registro simulado de energía.' },
        { icon: 'Zap', body: 'Primero se lee el numeral maya por niveles; después se compara u opera el dato de energía y se comprueba en decimal con su unidad.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.5'], ambito: 'conocer', title: 'Resolver problemas con numerales mayas',
          prompt: 'En el caso simulado, los numerales mayas registran minutos de iluminación innecesaria. Para resolver un problema, sigue estos pasos.' },
        { icon: 'ListChecks', body: '**Leo** en decimal → **opero** → **escribo** el resultado en maya → **compruebo**.', reveal: [
          { icon: 'Eye', front: '1. Leo', back: 'Convierto cada numeral a decimal: nivel de arriba × 20 + nivel de abajo.' },
          { icon: 'Calculator', front: '2. Opero', back: 'Sumo, resto o multiplico como siempre.' },
          { icon: 'PenLine', front: '3. Escribo en maya', back: 'Divido el resultado entre 20 (o 400) para repartirlo en niveles.' },
          { icon: 'Scale', front: 'Comparar', back: 'Más niveles = mayor. Con los mismos niveles, compara desde arriba; si empatan, baja al siguiente nivel.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.5', 'mat:4.1.6', 'mat:4.1.7'], ambito: 'hacer', title: 'Ejemplo resuelto: un solo registro de energía',
          prompt: 'Suma, representa y comprueba los minutos del caso simulado.' },
        { icon: 'Gauge', problem: 'El registro indica 145 minutos de iluminación innecesaria en un pasillo y 230 minutos en un salón vacío. ¿Cuál es el total y cómo se representa en maya?',
          steps: [
            { text: 'Sumo minutos de la misma unidad: 145 + 230 = **375 min**.' },
            { text: '375 ÷ 20 = **18**, sobran **15**.' },
            { text: 'Nivel del 20: 18; nivel del 1: 15.' },
            { text: 'Compruebo: 18 × 20 + 15 = **375 min**; el numeral es mayor que cada registro parcial.' },
          ],
          answer: 'Total: 375 min = **18 | 15**. Son minutos registrados, no una medida de energía consumida.' },
      ),
      S.maya(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.5', 'mat:4.1.6'], ambito: 'hacer', prompt: 'Construye con apoyo el total del caso: **375 minutos**.',
          hint: '375 = 18 × 20 + 15.',
          explain: 'Arriba 18 (tres barras y tres puntos); abajo 15 (tres barras). La unidad sigue siendo minutos.' },
        { mode: 'build', target: 375, levels: 2, scaffold: true },
      ),
      S.choice(
        { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.5', 'mat:4.1.7'], prompt: '¿Qué **numeral maya** del registro de iluminación innecesaria es mayor?',
          hint: 'Compara desde el nivel de 20 y conserva la unidad minutos.',
          explain: '230 min = 11 × 20 + 10 y 145 min = 7 × 20 + 5; por eso 230 minutos es mayor.' },
        { options: [
          { id: 'a', text: 'Pasillo: 145 min = nivel del 20: 7 · nivel del 1: 5', feedback: '145 es menor que 230.' },
          { id: 'b', text: 'Salón: 230 min = nivel del 20: 11 · nivel del 1: 10' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['mat'], cnb: [], ambito: 'conocer', title: 'Lo que construimos en la unidad',
          prompt: 'Antes de resolver el caso energético, revisa qué debe conservar un registro matemático confiable.' },
        { icon: 'ClipboardCheck', body: 'El numeral maya y el decimal deben representar la misma cantidad y mantener la unidad del caso.', reveal: [
          { icon: 'Hash', front: 'Dato decimal', back: 'Permite operar y comprobar la cantidad.' },
          { icon: 'Shell', front: 'Representación maya', back: 'Distribuye la misma cantidad en niveles de ×1, ×20 y ×400.' },
          { icon: 'Gauge', front: 'Unidad', back: 'Indica si se cuentan focos, minutos o registros; no se mezclan unidades.' },
          { icon: 'BadgeCheck', front: 'Comprobación', back: 'Multiplica cada nivel por su valor y suma.' },
        ] },
      ),
      S.maya(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.5'], prompt: 'Lee el numeral maya del primer registro de iluminación innecesaria: **145 minutos**.', explain: '7 × 20 + 5 = 145 minutos.' },
        { mode: 'read', target: 145, levels: 2 },
      ),
      S.number(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.5', 'mat:4.1.6'], prompt: 'El primer registro equivale a **145** minutos y el segundo a **230** minutos. ¿Cuál es el total que luego representarás en maya?', explain: '145 + 230 = 375 minutos.' },
        { answer: 375, unit: 'minutos' },
      ),
      S.maya(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.6'], prompt: 'Representa en numeral maya el total de **375** minutos del caso.' },
        { mode: 'build', target: 375, levels: 2 },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.7'], prompt: '¿Qué comprobación respalda el numeral maya construido para **375 minutos de iluminación**?' },
        { options: [{ id: 'a', text: '18 × 20 + 15 = 375' }, { id: 'b', text: '15 × 20 + 18 = 318' }, { id: 'c', text: '18 + 15 = 33' }], correct: ['a'] },
      ),
      S.maya(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.5', 'mat:4.1.6', 'mat:4.1.7'], prompt: 'En un registro nuevo de iluminación, hay **160 minutos** en biblioteca y **220 minutos** en laboratorio. Construye en maya el total y verifica que sea mayor que cada parte.' },
        { mode: 'build', target: 380, levels: 2 },
      ),
      S.maya(
        { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.5', 'mat:4.1.6', 'mat:4.1.7'], prompt: 'Otro registro de iluminación suma **185 minutos + 210 minutos**. Lee en maya el total correcto y decide si supera los 375 minutos anteriores.' },
        { mode: 'read', target: 395, levels: 2 },
      ),
      cierre({ areas: ['mat'], cnb: [] },
        ['Aproximo cantidades a la cifra que me piden', 'Leo y escribo numerales mayas', 'Convierto números del sistema decimal al maya', 'Ordeno series mayas de 20 en 20 y de 100 en 100'],
        ['Enseñaré a un familiar a escribir su edad con numerales mayas', 'Anotaré en maya lo que se compra en casa durante una semana', 'Buscaré cantidades grandes en una noticia y las aproximaré']),
    ],
  }),
];
