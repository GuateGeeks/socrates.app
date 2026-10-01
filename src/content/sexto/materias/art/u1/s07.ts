/**
 * Expresión Artística · Unidad 1 · Semana 7 — Volumen y movimiento del agua.
 * Progresión: luz, sombra, degradado y espacio para dar volumen y profundidad
 * → trazos, repetición y dirección visual para crear un boceto breve del agua.
 */
import { lesson, S } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Volumen y espacio ───────────────────────── */
  lesson({
    id: 's07-art-1',
    title: 'Luz, sombra y espacio: dar volumen en una pared plana',
    icon: 'Sun',
    minutes: 15,
    gancho: 'Una pared es completamente plana. Entonces, ¿cómo logran algunos murales que una mazorca parezca redonda y que un volcán se vea lejísimos?',
    objetivos: [
      'Representar volumen y profundidad en una escena del agua',
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
      S.explain(
        { fase: 'explorar', areas: ['art'], cnb: ['art:3.2.7'], title: 'Una gota puede verse plana o con volumen',
          prompt: 'La dirección de la luz organiza zonas claras, sombra propia y sombra proyectada; tamaño y superposición sugieren profundidad.' },
        { icon: 'Droplet', body: 'Aplicarás estos recursos a una escena informativa sobre el recorrido del agua.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'conocer',
          prompt: 'Imagina dos gotas pintadas en una pared: una de un solo azul parejo y otra que pasa de azul claro a azul oscuro. ¿Cuál parece tener **volumen**?',
          explain: 'El que tiene **degradado** de claro a oscuro. Nuestro ojo interpreta ese cambio como luz que llega a un objeto redondo. Es un "truco" que los pintores usan desde hace siglos.' },
        { options: [
          { id: 'a', text: 'La de un solo azul parejo', icon: 'Droplet', feedback: 'Un color parejo se ve plano, como una calcomanía.' },
          { id: 'b', text: 'La que pasa de claro a oscuro', icon: 'Sunset' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'conocer', title: 'La luz crea el volumen',
          prompt: 'El **volumen** es la sensación de que algo tiene tres dimensiones (alto, ancho y fondo). En una superficie plana se logra con **luz y sombra**. Toca cada tarjeta.' },
        { icon: 'Sun', body: 'Antes de pintar, decide **de dónde viene la luz** y mantén esa decisión en toda la obra.', reveal: [
          { icon: 'Sparkles', front: 'Brillo', back: 'La parte que mira **directo a la luz**. Es la más clara; a veces casi blanca.' },
          { icon: 'Sunset', front: 'Degradado', back: 'El paso **gradual** de claro a oscuro sobre la forma. Hace que se vea redonda. Puedes lograrlo con presión, capas o marcas más juntas (como aprendiste).' },
          { icon: 'Moon', front: 'Sombra propia', back: 'La parte del objeto que **no recibe luz**, del lado contrario. Es la más oscura del objeto.' },
          { icon: 'Contrast', front: 'Sombra proyectada', back: 'La mancha oscura que el objeto deja **sobre el suelo o la pared**, también del lado contrario a la luz. "Pega" el objeto al piso.' },
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
          prompt: 'En el lienzo, dibuja una fruta iluminada desde la izquierda: brillo, degradado, sombra propia, sombra proyectada y una flecha de luz.' },
        { goal: 'Resolver un estudio breve en el lienzo de la actividad.', steps: [{ title: 'Traza', detail: 'Dibuja el contorno y marca con una flecha la luz.' }, { title: 'Modela', detail: 'Añade brillo, degradado y sombra proyectada.' }], evidence: 'Un dibujo breve con dirección de luz.', rubric: ['Brillo del lado de la luz', 'Degradado hacia la sombra', 'Sombra proyectada al lado contrario'] },
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

  /* ───────────────────────── 2. Movimiento del agua ───────────────────────── */
  lesson({
    id: 's07-art-2',
    title: 'Movimiento del agua con líneas y repetición',
    icon: 'Brush',
    minutes: 13,
    gancho: '¿Cómo puede un dibujo quieto hacer que el agua parezca correr?',
    objetivos: ['Crear un boceto breve del agua que comunique movimiento mediante líneas y repetición'],
    resumen: [
      'Las curvas sugieren fluidez; las diagonales, rapidez o caída; las horizontales, calma.',
      'Repetir ondas o gotas en una dirección crea ritmo visual y guía la mirada.',
    ],
    media: {
      id: 's07-art-2-movimiento', kind: 'diagram', title: 'Líneas que mueven el agua', aspect: '16:9',
      alt: 'Tres bocetos de agua muestran un estanque con horizontales, un arroyo con curvas repetidas y lluvia con diagonales.',
      brief: 'Lámina didáctica horizontal 1600×900 en tres recuadros: ESTANQUE con líneas horizontales, ARROYO con curvas repetidas que guían la mirada y LLUVIA con diagonales. Usar trazos negros gruesos sobre fondo claro, agua azul y una flecha de dirección con patrón. Rótulos grandes, contraste alto, lectura de izquierda a derecha y sin respuestas de evaluación marcadas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['art'], cnb: ['art:3.2.7'], title: 'Una línea puede sugerir movimiento',
          prompt: 'Observa cómo cambia la sensación del agua según la dirección del trazo.' },
        { icon: 'Waves', body: 'Una horizontal se siente estable; una curva conduce la mirada; una diagonal sugiere caída o rapidez.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.7'], title: 'Trazo más ritmo visual',
          prompt: 'Elige una línea por la sensación que necesitas y repite una forma para marcar el recorrido.' },
        { icon: 'Repeat', body: 'La repetición no llena todo el dibujo: ordena tres o cuatro ondas o gotas para que el ojo siga una dirección.', reveal: [
          { icon: 'Minus', front: 'Horizontal', back: 'Agua en calma.' },
          { icon: 'Waves', front: 'Curva', back: 'Corriente que cambia de dirección.' },
          { icon: 'TrendingDown', front: 'Diagonal', back: 'Lluvia o caída rápida.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.7'], title: 'Modelo breve: un arroyo que avanza',
          prompt: 'Mira cómo dos recursos bastan para comunicar movimiento.' },
        { icon: 'Waves', problem: 'Representar un arroyo que baja entre dos piedras.',
          steps: [
            { text: 'Trazo dos curvas largas desde la parte alta hasta la parte baja.' },
            { text: 'Repito tres ondas pequeñas dentro del cauce, orientadas hacia abajo.' },
          ],
          answer: 'Las curvas muestran el recorrido y las ondas repetidas crean ritmo visual.',
          tip: 'Pocos trazos claros comunican mejor que muchos detalles sin dirección.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.7'], prompt: 'Quieres que la lluvia parezca caer con fuerza. ¿Qué trazo eliges?',
          hint: 'Busca el trazo que sugiere caída rápida.', explain: 'Las diagonales orientadas hacia abajo comunican dirección y energía.' },
        { options: [
          { id: 'a', text: 'Horizontales separadas' },
          { id: 'b', text: 'Diagonales repetidas hacia abajo' },
          { id: 'c', text: 'Un punto inmóvil' },
        ], correct: ['b'] },
      ),
      S.match(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.2.7'], prompt: 'Relaciona cada escena de agua con el recurso visual.',
          hint: 'Piensa en calma, recorrido y caída.', explain: 'El tipo de línea responde a la sensación que se quiere comunicar.' },
        { leftTitle: 'Escena', rightTitle: 'Recurso', pairs: [
          { id: 'a', left: 'Estanque quieto', right: 'Horizontales' },
          { id: 'b', left: 'Arroyo que gira', right: 'Curvas repetidas' },
          { id: 'c', left: 'Lluvia intensa', right: 'Diagonales' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.7'], prompt: 'Para un boceto nuevo de una corriente que gira, ¿qué plan usa línea y repetición con intención?' },
        { options: [
          { id: 'a', text: 'Trazar curvas en la dirección del agua y repetir tres ondas a lo largo del recorrido' },
          { id: 'b', text: 'Llenar el fondo con puntos sin dirección' },
          { id: 'c', text: 'Dibujar un marco recto y omitir el agua' },
        ], correct: ['a'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.7'], ambito: 'hacer',
          prompt: 'Haz un boceto pequeño de agua. Usa curvas o diagonales y repite tres formas para dirigir la mirada.' },
        { goal: 'Crear un boceto pequeño en el lienzo de la actividad.', steps: [{ title: 'Recorrido', detail: 'Traza la dirección principal del agua.' }, { title: 'Ritmo', detail: 'Repite tres ondas o gotas.' }], evidence: 'Un boceto breve con agua y movimiento visibles.', rubric: ['Escena de agua reconocible', 'Dirección visual clara', 'Tres formas repetidas'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.7'], prompt: '¿Qué recurso hace que la mirada recorra un arroyo dibujado?' },
        { options: [
          { id: 'a', text: 'Curvas repetidas en la dirección del cauce' },
          { id: 'b', text: 'Un marco sin relación con el agua' },
          { id: 'c', text: 'Una sola forma sin dirección' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.7'], prompt: 'Evalúa estas decisiones para un boceto nuevo.' },
        { statements: [
          { text: 'Varias diagonales hacia abajo pueden sugerir lluvia rápida.', answer: true },
          { text: 'Repetir gotas sin ninguna dirección siempre comunica un recorrido claro.', answer: false, why: 'La repetición necesita una dirección visible para guiar la mirada.' },
        ] },
      ),
    ],
  }),
];
