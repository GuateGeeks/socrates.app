/**
 * Expresión Artística · Unidad 1 · Semana 7 — Volumen y movimiento en murales escolares multiculturales.
 * Progresión: luz, sombra, degradado y espacio (tamaño, superposición) para dar volumen y profundidad
 * → trazos (diagonales, curvas), repetición y composición para dar movimiento, y planificación
 * colectiva de un mural multicultural (boceto, cuadrícula, texturas de las semanas 5-6).
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Volumen y espacio ───────────────────────── */
  lesson({
    id: 's07-art-1',
    title: 'Luz, sombra y espacio: dar volumen en una pared plana',
    icon: 'Sun',
    minutes: 15,
    gancho: 'Una pared es completamente plana. Entonces, ¿cómo logran algunos murales que una mazorca parezca redonda y que un volcán se vea lejísimos?',
    objetivos: [
      'Usar la luz, la sombra y el degradado para dar sensación de volumen',
      'Distinguir la sombra propia de la sombra proyectada',
      'Crear sensación de espacio y profundidad con el tamaño, la superposición y la posición',
    ],
    resumen: [
      'Para dar volumen, primero se decide de dónde viene la luz. El lado que mira a la luz es claro; el lado contrario es oscuro (sombra propia).',
      'La sombra proyectada es la que un objeto deja sobre el suelo o la pared, del lado contrario a la luz.',
      'Entre la luz y la sombra se hace un degradado: el paso gradual de claro a oscuro hace que las formas se vean redondas.',
      'Para dar profundidad: lo lejano se pinta más pequeño, más arriba en el cuadro y con colores más pálidos; lo cercano, más grande, abajo y con colores intensos. Lo que tapa a otra cosa se ve más cerca (superposición).',
    ],
    media: {
      id: 's07-art-1-volumen', kind: 'animation', title: 'De plano a redondo', aspect: '16:9', duration: 45,
      alt: 'Un círculo plano amarillo recibe luz desde arriba a la izquierda: aparece un brillo, un degradado hacia naranja y una sombra abajo a la derecha, y el círculo se convierte en una naranja redonda con su sombra en la mesa.',
      brief: 'Animación 2D de 45 s en estilo de pintura escolar. (1) Círculo amarillo plano sobre una mesa. (2) Aparece un sol pequeño arriba a la izquierda con una flecha de luz. (3) Se pinta el brillo (casi blanco) del lado de la luz, luego el degradado a naranja oscuro del lado contrario: rótulos "luz", "degradado", "sombra propia". (4) En la mesa aparece una mancha oscura alargada hacia la derecha: rótulo "sombra proyectada". (5) Segunda parte: paisaje con tres volcanes; el lejano se vuelve pequeño y azulado, el cercano grande y verde intenso, y una casa tapa parte de un árbol: rótulos "tamaño", "color pálido a lo lejos", "superposición". Narración en español, subtítulos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'conocer',
          prompt: 'Imagina dos círculos pintados en una pared: uno de un solo amarillo parejo y otro que pasa de amarillo claro a naranja oscuro. ¿Cuál parece una **naranja redonda**?',
          explain: 'El que tiene **degradado** de claro a oscuro. Nuestro ojo interpreta ese cambio como luz que llega a un objeto redondo. Es un "truco" que los pintores usan desde hace siglos.' },
        { options: [
          { id: 'a', text: 'El de un solo amarillo parejo', icon: 'Circle', feedback: 'Un color parejo se ve plano, como una calcomanía.' },
          { id: 'b', text: 'El que pasa de claro a oscuro', icon: 'Sunset' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'conocer', title: 'La luz crea el volumen',
          prompt: 'El **volumen** es la sensación de que algo tiene tres dimensiones (alto, ancho y fondo). En una superficie plana se logra con **luz y sombra**. Toca cada tarjeta.' },
        { icon: 'Sun', body: 'Antes de pintar, decide **de dónde viene la luz** y mantén esa decisión en toda la obra.', reveal: [
          { icon: 'Sparkles', front: 'Brillo', back: 'La parte que mira **directo a la luz**. Es la más clara; a veces casi blanca.' },
          { icon: 'Sunset', front: 'Degradado', back: 'El paso **gradual** de claro a oscuro sobre la forma. Hace que se vea redonda. Puedes lograrlo con presión, capas o marcas más juntas (como aprendiste).' },
          { icon: 'Moon', front: 'Sombra propia', back: 'La parte del objeto que **no recibe luz**, del lado contrario. Es la más oscura del objeto.' },
          { icon: 'Square', front: 'Sombra proyectada', back: 'La mancha oscura que el objeto deja **sobre el suelo o la pared**, también del lado contrario a la luz. "Pega" el objeto al piso.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'conocer', title: 'El espacio: cerca y lejos',
          prompt: 'Un mural también necesita **profundidad**: que unas cosas parezcan cerca y otras lejos. Se usan cuatro recursos del **espacio**.' },
        { icon: 'Mountain', body: 'Piensa en lo que ves desde un mirador: el lago cerca, los volcanes al fondo.', reveal: [
          { icon: 'Maximize2', front: 'Tamaño', back: 'Lo **cercano** se pinta **grande**; lo **lejano**, **pequeño**, aunque en la realidad sean del mismo tamaño.' },
          { icon: 'Layers', front: 'Superposición', back: 'Si una forma **tapa** parte de otra, la que tapa se ve **más cerca**.' },
          { icon: 'ArrowUp', front: 'Posición', back: 'Lo que está **más arriba** en el cuadro (cerca del horizonte) parece más **lejos**; lo de **abajo**, más cerca.' },
          { icon: 'Cloud', front: 'Color', back: 'A lo lejos los colores se ven **más pálidos y azulados**, por el aire. Lo cercano tiene colores **intensos** y más detalles.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'hacer', title: 'Ejemplo resuelto: una mazorca con volumen',
          prompt: 'Mira cómo Josué pinta una mazorca en su sección del mural, con la luz viniendo desde la izquierda.' },
        { icon: 'Wheat', problem: 'Josué ya dibujó el contorno de una mazorca grande. Tiene pintura amarilla, naranja, café y blanca.',
          steps: [
            { text: 'Marca con una flecha pequeña en su boceto: **luz desde la izquierda**.' },
            { text: 'Pinta toda la mazorca de **amarillo**.' },
            { text: 'Del lado derecho mezcla amarillo con un poco de **naranja** y luego de **café**, y hace un **degradado** hacia el borde.', why: 'El lado derecho no recibe luz: es la sombra propia.' },
            { text: 'En cada grano del lado izquierdo pone un puntito de **amarillo con blanco**.', why: 'Es el brillo: la parte que mira a la luz.' },
            { text: 'Debajo y a la derecha de la mazorca pinta una mancha **café oscuro** alargada: la **sombra proyectada**.' },
          ],
          answer: 'Con **brillo**, **degradado**, **sombra propia** y **sombra proyectada**, la mazorca parece redonda y apoyada en el suelo.',
          tip: 'Todas las sombras del mural deben ir hacia el mismo lado: si no, parece que hay varios soles.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'hacer',
          prompt: 'La luz de un dibujo viene **desde la izquierda**. Clasifica dónde va cada cosa.',
          hint: 'Lo claro mira hacia la luz; las sombras van del lado contrario.',
          explain: 'Con luz desde la izquierda, el brillo va a la izquierda y la sombra propia y la proyectada van a la derecha.' },
        { buckets: [
          { id: 'i', label: 'Lado izquierdo', icon: 'ArrowLeft', color: 'var(--c-maiz-strong)' },
          { id: 'd', label: 'Lado derecho', icon: 'ArrowRight', color: 'var(--area-art)' },
        ], items: [
          { id: 'x1', text: 'El brillo de una tinaja', bucket: 'i' },
          { id: 'x2', text: 'La sombra propia de una tinaja', bucket: 'd' },
          { id: 'x3', text: 'La sombra proyectada de un árbol', bucket: 'd' },
          { id: 'x4', text: 'La parte más clara de un güisquil', bucket: 'i' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'hacer',
          prompt: 'En un mural hay dos volcanes del mismo tamaño y del mismo verde intenso, lado a lado. El grupo quiere que uno parezca **mucho más lejano**. ¿Qué deben cambiar?',
          explain: 'Lo lejano se pinta más pequeño, más arriba (cerca del horizonte) y con colores más pálidos y azulados.' },
        { options: [
          { id: 'a', text: 'Pintarlo más pequeño, más arriba y con un verde más pálido y azulado' },
          { id: 'b', text: 'Pintarlo más grande y con un verde más intenso', feedback: 'Eso lo haría parecer más cerca.' },
          { id: 'c', text: 'Ponerle una sombra proyectada más grande', feedback: 'La sombra da volumen, pero no aleja el objeto.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'hacer',
          prompt: 'En el boceto del mural, la **casa** tapa la mitad de un **árbol**. ¿Qué entiende quien lo mira?',
          explain: 'Por **superposición**, lo que tapa se ve más cerca: la casa está delante del árbol.' },
        { options: [
          { id: 'a', text: 'Que el árbol está delante de la casa', feedback: 'Si el árbol estuviera delante, taparía a la casa.' },
          { id: 'b', text: 'Que la casa está más cerca y el árbol detrás' },
          { id: 'c', text: 'Que el árbol está roto', feedback: 'Nuestro ojo completa la forma: entiende que el árbol sigue detrás de la casa.' },
        ], correct: ['b'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'hacer',
          prompt: '**En casa:** haz un **estudio de luz** con una fruta y una lámpara (o la luz de una ventana).' },
        { goal: 'Observar la luz real sobre un objeto y dibujarlo con volumen.',
          steps: [
            { title: 'Prepara la escena', detail: 'Pon una fruta redonda (naranja, lima, tomate) sobre una mesa, junto a una ventana o una lámpara que la ilumine de un solo lado.' },
            { title: 'Observa', detail: 'Busca el brillo, la sombra propia y la sombra proyectada. Señálalas con el dedo.' },
            { title: 'Dibuja', detail: 'Dibuja la fruta con lápiz o colores: brillo, degradado, sombra propia y sombra proyectada. Marca con una flecha de dónde viene la luz.' },
            { title: 'Mueve la luz', detail: 'Cambia la luz al otro lado y haz un segundo dibujo rápido. ¿Qué cambió?' },
          ],
          evidence: 'Tus dos dibujos con la flecha de la luz.',
          rubric: ['Dibujé el brillo del lado de la luz', 'Hice un degradado hacia la sombra', 'Dibujé la sombra proyectada del lado correcto'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.7'], prompt: 'En un mural, ¿qué técnica da sensación de **volumen**?' },
        { options: [
          { id: 'a', text: 'Sombrear el lado contrario a la luz y hacer un degradado' },
          { id: 'b', text: 'Pintar todo de un solo color plano' },
          { id: 'c', text: 'Usar solo líneas rectas horizontales' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.7'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La sombra proyectada es la que un objeto deja sobre el suelo o la pared.', answer: true },
          { text: 'Para que algo parezca lejano se pinta más grande y con colores más intensos.', answer: false, why: 'Lo lejano se pinta más pequeño y con colores más pálidos.' },
          { text: 'Si una forma tapa a otra, parece estar más cerca.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Movimiento y mural multicultural ───────────────────────── */
  lesson({
    id: 's07-art-2',
    title: 'Movimiento en el mural: trazos, repetición y composición',
    icon: 'Brush',
    minutes: 15,
    gancho: 'En un mural nada se mueve de verdad. Sin embargo, algunos parecen tener viento, danza y música. ¿Qué hicieron sus artistas?',
    objetivos: [
      'Usar trazos diagonales, curvos y repetidos para dar sensación de movimiento',
      'Organizar un mural colectivo con temática multicultural: tema, boceto y cuadrícula',
      'Combinar volumen, movimiento y texturas con respeto por las culturas representadas',
    ],
    resumen: [
      'Las líneas transmiten sensaciones: horizontales = calma; verticales = firmeza; diagonales = acción; curvas y ondas = fluidez, danza, agua o viento.',
      'La repetición de formas (notas, hojas, pájaros) crea un ritmo visual que guía la mirada. Las líneas de movimiento detrás de una forma sugieren que se desplaza.',
      'Un mural se planifica en equipo: tema, boceto pequeño, cuadrícula para ampliarlo a la pared, reparto de secciones, paleta de colores común y dirección de la luz común.',
      'Un mural multicultural representa a los pueblos maya, garífuna, xinka y ladino/mestizo con respeto: sin burlas ni estereotipos, investigando y preguntando a la comunidad.',
    ],
    media: {
      id: 's07-art-2-movimiento', kind: 'diagram', title: 'Trucos de movimiento', aspect: '16:9',
      alt: 'Cuatro ejemplos de antes y después: una línea recta junto a una curva; un barrilete quieto junto a otro con la cola ondulada y líneas de viento; una fila de pájaros iguales junto a pájaros repetidos en diagonal; una bailarina rígida junto a otra con la falda en curvas.',
      brief: 'Lámina didáctica en 4 recuadros "antes → después", estilo mural escolar con colores planos y contorno negro: (1) línea horizontal → línea diagonal y curva con flechas; (2) barrilete quieto → barrilete con cola ondulada y líneas de viento repetidas; (3) tres pájaros alineados en horizontal → siete pájaros repetidos en diagonal ascendente, más pequeños a lo lejos; (4) una danzante con falda recta → misma figura con falda en curvas y listones ondulados. Rótulos: "diagonal", "curva", "repetición", "líneas de movimiento". Fondo claro. Evitar trajes de una comunidad concreta mal representados: vestimenta genérica y respetuosa.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'conocer',
          prompt: 'Observa la lámina. ¿Qué barrilete parece estar **volando con el viento**?',
          explain: 'El que tiene la **cola ondulada** y **líneas de viento repetidas**. Las curvas y la repetición le dicen a nuestro ojo que algo se mueve.' },
        { options: [
          { id: 'a', text: 'El que tiene la cola recta y nada alrededor', feedback: 'Se ve quieto, como pegado al cielo.' },
          { id: 'b', text: 'El que tiene la cola ondulada y líneas de viento', icon: 'Wind' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'conocer', title: 'Las líneas también hablan',
          prompt: 'Los **trazos** que usas transmiten sensaciones de quietud o de movimiento. Toca cada tarjeta.' },
        { icon: 'PenTool', body: 'Elige las líneas según lo que quieres que sienta quien mira tu mural.', reveal: [
          { icon: 'Minus', front: 'Horizontales', back: '**Calma y descanso**: un lago en paz, el horizonte, una persona acostada.' },
          { icon: 'AlignCenter', front: 'Verticales', back: '**Firmeza y fuerza**: árboles, columnas, una persona de pie.' },
          { icon: 'TrendingUp', front: 'Diagonales', back: '**Acción y energía**: alguien que corre, una lluvia con viento, un salto.' },
          { icon: 'Waves', front: 'Curvas y ondas', back: '**Fluidez**: agua, viento, humo, danza, música, el vuelo de un ave.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'conocer', title: 'Repetición y líneas de movimiento',
          prompt: 'Dos recursos más para "mover" un mural. Toca cada tarjeta.' },
        { icon: 'Repeat', body: 'Así como en la música el **ritmo** es repetición organizada, en la pintura también hay **ritmo visual**.', reveal: [
          { icon: 'Repeat', front: 'Repetición', back: 'Repite una forma (pájaros, hojas, notas musicales) en fila curva o diagonal, cambiando un poco el tamaño: la mirada la recorre como si avanzara.' },
          { icon: 'Wind', front: 'Líneas de movimiento', back: 'Rayitas o curvas **detrás** de una forma sugieren que se desplaza o gira, como en las historietas.' },
          { icon: 'Layers', front: 'Texturas', back: 'Arena, tela o papel arrugado pegados (como en la semana pasada) hacen que ciertas zonas "vibren" y llamen la atención.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art', 'mat'], cnb: ['art:3.2.7'], ambito: 'hacer', title: 'Ejemplo resuelto: del boceto a la pared con cuadrícula',
          prompt: 'Para pasar un dibujo pequeño a una pared grande sin deformarlo, los muralistas usan una **cuadrícula**. Mira cómo lo hace el grado de Lucía.' },
        { icon: 'Ruler', problem: 'El boceto del mural mide **30 cm de ancho y 15 cm de alto**. La pared disponible mide **3 m de ancho y 1.5 m de alto**. ¿Cómo lo amplían?',
          steps: [
            { text: 'Dividen el boceto en cuadros de **5 cm**: quedan 30 ÷ 5 = **6 columnas** y 15 ÷ 5 = **3 filas** (18 cuadros).' },
            { text: 'Dividen la pared en el **mismo número** de cuadros: 6 columnas y 3 filas. Cada cuadro mide 300 cm ÷ 6 = **50 cm**.', why: 'La pared es 10 veces más grande que el boceto (3 m = 300 cm = 10 × 30 cm).' },
            { text: 'Marcan la cuadrícula en la pared con tiza o lápiz suave y numeran los cuadros igual que en el boceto.' },
            { text: 'Cada estudiante copia **su cuadro** del boceto en el cuadro de la pared, fijándose dónde entra y sale cada línea.' },
          ],
          answer: 'Con una cuadrícula de **6 × 3** cuadros (5 cm en el boceto y 50 cm en la pared), el dibujo se amplía sin deformarse.',
          tip: 'Antes de pintar, acuerden la paleta de colores y la dirección de la luz para que el mural se vea como una sola obra.' },
      ),
      S.match(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'hacer',
          prompt: 'Une lo que quieres expresar con el trazo o recurso que conviene.',
          hint: 'Repasa las tarjetas de las líneas y de la repetición.',
          explain: 'Cada tipo de línea transmite una sensación distinta; la repetición crea ritmo visual.' },
        { leftTitle: 'Quiero expresar…', rightTitle: 'Uso…', pairs: [
          { id: 'c', left: 'Un lago en calma', right: 'Líneas horizontales' },
          { id: 'd', left: 'Una niña corriendo', right: 'Líneas diagonales' },
          { id: 'm', left: 'Música que sale de una marimba', right: 'Notas repetidas en curva' },
          { id: 'f', left: 'Una ceiba firme y fuerte', right: 'Líneas verticales' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['art', 'mat'], cnb: ['art:3.2.7'], ambito: 'hacer',
          prompt: 'Otro boceto mide **40 cm** de ancho y se dividió en **8 columnas** de 5 cm. La pared mide **4 m** (400 cm) de ancho. ¿Cuántos **centímetros** debe medir de ancho cada columna en la pared?',
          explain: 'La pared también se divide en 8 columnas: 400 ÷ 8 = **50 cm**.' },
        { answer: 50, unit: 'cm', misconceptions: [
          { value: 5, msg: 'Esa es la medida en el boceto. En la pared los cuadros son más grandes.' },
          { value: 10, msg: 'Revisa: divide el ancho de la pared (400 cm) entre las 8 columnas.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art', 'fc'], cnb: ['art:3.2.7'], ambito: 'convivir',
          prompt: 'El mural se llama **"Somos muchos pueblos"**. ¿Qué propuesta muestra **respeto** por las culturas que representa?',
          explain: 'Un mural multicultural se basa en investigar, preguntar y mostrar a cada pueblo con dignidad, en actividades reales y valiosas, sin caricaturas.' },
        { options: [
          { id: 'a', text: 'Preguntar a personas de la comunidad qué elementos (música, tejidos, cultivos, idiomas) quieren que se muestren y cómo' },
          { id: 'b', text: 'Dibujar a las personas de un pueblo como caricaturas graciosas', feedback: 'Las caricaturas de un pueblo refuerzan estereotipos y ofenden.' },
          { id: 'c', text: 'Mostrar solo a un pueblo porque es "más bonito"', feedback: 'Un mural multicultural valora a todos los pueblos por igual.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'hacer',
          prompt: 'Te toca una sección del **mural multicultural** de la escuela. Describe tu sección: ¿qué **elemento cultural** representarás?, ¿cómo lograrás **volumen** (luz y sombra), **profundidad** (tamaño, superposición) y **movimiento** (líneas, repetición)?, ¿qué **textura** agregarás?' },
        { minWords: 40, placeholder: 'En mi sección pintaré… Para el volumen… Para la profundidad… Para el movimiento… La textura…',
          model: 'En mi sección pintaré un tambor garífuna y una marimba tocando juntos en la playa. Para el volumen, la luz vendrá de la izquierda y sombrearé el lado derecho del tambor con un café más oscuro, con degradado en las teclas de la marimba. Para la profundidad, pondré el mar pequeño y azul pálido al fondo, y el tambor tapando parte de la marimba. Para el movimiento, dibujaré notas musicales repetidas en una curva que sube hacia unas aves. Pegaré arena en la base para la textura de la playa.',
          rubric: ['Nombra un elemento cultural y lo representa con respeto', 'Explica cómo dará volumen', 'Explica cómo dará profundidad', 'Explica cómo dará movimiento', 'Incluye una textura'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'hacer',
          prompt: '**En casa:** pinta un **mini mural** en un cartón grande o en varias hojas unidas.' },
        { goal: 'Practicar volumen, profundidad y movimiento en un formato grande, antes del mural de la escuela.',
          steps: [
            { title: 'Boceto con cuadrícula', detail: 'Haz un boceto pequeño con cuadros de 2 cm. Traza la misma cantidad de cuadros, más grandes, en tu cartón.' },
            { title: 'Amplía', detail: 'Copia cuadro por cuadro con lápiz suave.' },
            { title: 'Pinta', detail: 'Decide la luz, pinta de atrás hacia adelante (fondo, luego figuras) y agrega sombras y líneas de movimiento.' },
            { title: 'Textura final', detail: 'Pega una textura (arena, tela o papel arrugado) en una zona que quieras destacar.' },
          ],
          evidence: 'Tu boceto con cuadrícula y tu mini mural terminado.',
          rubric: ['Usé la cuadrícula para ampliar', 'Hay volumen con luz y sombra', 'Hay profundidad', 'Hay movimiento con líneas o repetición'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.7'], prompt: '¿Qué tipo de línea da sensación de **acción y energía**?' },
        { options: [
          { id: 'a', text: 'Horizontal' },
          { id: 'b', text: 'Vertical' },
          { id: 'c', text: 'Diagonal' },
        ], correct: ['c'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.7'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Repetir una forma en una curva crea ritmo visual y sensación de movimiento.', answer: true },
          { text: 'La cuadrícula sirve para ampliar un boceto a la pared sin deformarlo.', answer: true },
          { text: 'En un mural colectivo cada quien debe usar una dirección de luz diferente.', answer: false, why: 'Todos deben usar la misma dirección de luz para que parezca una sola obra.' },
        ] },
      ),
      cierre({ areas: ['art'], cnb: ['art:3.2.7'] },
        ['Doy volumen con brillo, degradado y sombras', 'Creo profundidad con tamaño, superposición, posición y color', 'Doy movimiento con líneas y repetición, y planifico un mural con respeto'],
        ['Haré mi estudio de luz con una fruta', 'Pintaré mi mini mural con cuadrícula', 'Preguntaré a mi familia qué elementos de nuestra cultura pondrían en un mural']),
    ],
  }),
];
