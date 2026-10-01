/**
 * Educación Física · Unidad 1 · Semana 5 — Pases en movimiento e iniciación al balonmano.
 * Progresión: recibir con seguridad y pasar en movimiento (pase adelantado, "pasa y muévete") →
 * balonmano: regla de los 3 pasos con bote, pase por arriba del hombro con salto (con cada mano)
 * y lanzamiento a gol directo, en suspensión y con pique.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Pasar y recibir en movimiento ───────────────────────── */
  lesson({
    id: 's05-ef-1',
    title: 'Pasar y recibir en movimiento',
    icon: 'Users',
    minutes: 15,
    gancho: 'Si le lanzas la pelota a tu compañera justo donde está ahora, pero ella va corriendo, ¿dónde estará cuando llegue la pelota?',
    objetivos: ['Recibir la pelota con las manos en forma de "W" y amortiguando; hacer pases adelantados a un compañero que se desplaza; aplicar la regla "pasa y muévete" en un juego de pases'],
    resumen: [
      'Recepción: mira la pelota, brazos adelante, manos abiertas formando una "W" con pulgares e índices casi juntos; al tocarla, dobla los codos y llévala al pecho para amortiguar.',
      'Pase adelantado: si tu compañero se mueve, lanza al espacio donde estará cuando llegue la pelota, un poco delante de él.',
      '"Pasa y muévete": después de pasar, desplázate a un espacio libre para volver a recibir. Así el equipo avanza.',
      'Para pasar en movimiento: mira a tu compañero, usa un pase de pecho o por arriba del hombro según la distancia, y comunícate con la voz o con la mano.',
    ],
    media: {
      id: 's05-ef-1-pase-adelantado', kind: 'animation', title: 'El pase adelantado', aspect: '16:9', duration: 40,
      alt: 'Vista desde arriba: una niña corre en línea recta; su compañera le lanza la pelota a un punto marcado delante de ella, y la pelota y la niña llegan juntas a ese punto.',
      brief: 'Animación 2D cenital de 40 s sobre cancha verde. (1) Error: la pasadora lanza directo a donde está la receptora que corre; la pelota llega detrás de ella (X roja). (2) Acierto: se marca un punto "X" delante de la receptora; la pelota y la receptora llegan al mismo tiempo (check verde). (3) Tras pasar, la pasadora corre a un espacio libre: rótulo "pasa y muévete". (4) Primer plano de las manos en "W" recibiendo y llevando la pelota al pecho. Rótulos grandes, sin narración obligatoria (subtítulos opcionales).',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:2.1.5'], ambito: 'conocer',
          prompt: 'Coordina mirada, desplazamiento y pase para jugar con seguridad.' },
        { icon: 'CircleDotDashed', body: 'Quien recibe muestra las manos y mira el balón; quien pasa apunta al espacio hacia donde avanza su compañero. La distancia y la fuerza se ajustan para evitar choques.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.5'], ambito: 'conocer',
          prompt: 'Tu compañera corre hacia adelante. ¿A dónde le lanzas la pelota?',
          explain: 'Un poco **delante** de ella: al lugar donde estará cuando llegue la pelota. Se llama **pase adelantado**.' },
        { options: [
          { id: 'a', text: 'Justo donde está ahora', icon: 'CircleDot', feedback: 'Cuando la pelota llegue, ella ya habrá avanzado: la pelota quedará detrás.' },
          { id: 'b', text: 'Un poco delante de ella, a donde va', icon: 'ArrowRight' },
          { id: 'c', text: 'Detrás de ella, para que se regrese', icon: 'ArrowLeft', feedback: 'La obligarías a frenar y regresar: el equipo pierde velocidad.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.5'], ambito: 'hacer', title: 'Recibir con seguridad',
          prompt: 'Un buen pase necesita una buena **recepción**. Toca cada paso y practícalo con una pelota imaginaria.' },
        { icon: 'Hand', body: 'Las manos forman una **"W"**: pulgares e índices casi se tocan detrás de la pelota. Así no se escapa ni te lastima los dedos.', reveal: [
          { icon: 'Eye', front: '1. Mira la pelota', back: 'Sigue la pelota con la vista **hasta que toque tus manos**.' },
          { icon: 'Hand', front: '2. Manos en "W"', back: 'Brazos adelante, dedos abiertos y relajados, pulgares e índices formando una **W**. Si la pelota viene baja, las manos apuntan hacia abajo.' },
          { icon: 'ArrowDown', front: '3. Amortigua', back: 'Al tocarla, **dobla los codos** y lleva la pelota al pecho, como si atraparas un huevo.' },
          { icon: 'Shield', front: '4. Protege', back: 'Sujétala con firmeza y gira el cuerpo para alejarla de los defensores.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.5'], ambito: 'hacer', title: 'Pasar en movimiento',
          prompt: 'En un juego casi nadie está quieto. Mira la animación y toca cada tarjeta.' },
        { icon: 'Route', body: 'Pasar en movimiento combina **desplazarse**, **lanzar** y **recibir**: es una habilidad genérica como las de la semana 2.', reveal: [
          { icon: 'ArrowRight', front: 'Pase adelantado', back: 'Lanza **al espacio** donde estará tu compañero, un poco delante de él y a la altura del pecho.' },
          { icon: 'Route', front: 'Pasa y muévete', back: 'Después de pasar, **no te quedes quieto**: corre a un espacio libre donde puedas volver a recibir.' },
          { icon: 'MessageCircle', front: 'Comunícate', back: 'Pide la pelota con la **voz** ("¡aquí!") o levantando la mano. Llama por su nombre a quien le pasas.' },
          { icon: 'Gauge', front: 'Fuerza justa', back: 'Si tu compañero está cerca, pase suave de pecho; si está lejos, por arriba del hombro. Una pelota demasiado fuerte es difícil de recibir.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.5'], ambito: 'hacer', title: 'Ejemplo resuelto: el pase en la carrera',
          prompt: 'Mira cómo Diego y Rosa avanzan por la cancha pasándose la pelota.' },
        { icon: 'Users', problem: 'Diego y Rosa corren en paralelo, separados por 4 pasos, de una línea a otra de la cancha. Deben llegar al final sin que la pelota caiga.',
          steps: [
            { text: 'Diego tiene la pelota. **Mira** a Rosa y ve que va un poco adelantada.' },
            { text: 'Lanza un **pase de pecho** suave, **un paso delante** de Rosa, a la altura de su pecho.', why: 'Es el pase adelantado: la pelota y Rosa llegan juntas.' },
            { text: 'Rosa recibe con las manos en **"W"** y amortigua llevando la pelota al pecho, sin dejar de trotar (máximo 3 pasos con la pelota, como verás el viernes).' },
            { text: 'Diego, que ya pasó, **acelera** para ponerse otra vez a la par y pedir la pelota: "¡Rosa!".', why: '"Pasa y muévete": así siempre hay a quién pasar.' },
          ],
          answer: 'Con **pases adelantados**, **recepción en W** y **pasa y muévete**, avanzan sin que caiga la pelota.',
          tip: 'Empiecen caminando, luego trotando y al final corriendo.' },
      ),
      S.order(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.5'], ambito: 'hacer',
          prompt: 'Ordena los pasos para **recibir** bien la pelota.',
          hint: 'Primero los ojos, luego las manos, después los codos.',
          explain: 'Mirar la pelota → manos en W → tocar y doblar los codos → llevarla al pecho y protegerla.' },
        { items: [
          { id: 'a', text: 'Mirar la pelota hasta que llegue' },
          { id: 'b', text: 'Poner los brazos adelante con las manos en "W"' },
          { id: 'c', text: 'Doblar los codos al tocarla para amortiguar' },
          { id: 'd', text: 'Llevarla al pecho y protegerla' },
        ], labels: { start: 'Primero', end: 'Al final' } },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.5'], ambito: 'hacer',
          prompt: '¡Juego de los 10 pases! Con una pelota suave. **Calentamiento:** trote, rotación de hombros y muñecas, y 10 pases de pecho en parejas a 3 pasos. **Parte principal:** (1) en parejas, avancen en paralelo pasándose la pelota: primero caminando, luego trotando; (2) juego de los 10 pases: dos equipos pequeños; el equipo con la pelota debe dar 10 pases seguidos sin que caiga ni la toque el otro equipo; quien tiene la pelota no camina con ella más de 3 pasos, y los demás **pasan y se mueven**. **Poco espacio:** pases contra la pared desplazándote de lado. **Adaptación:** equipos mixtos; se puede jugar sentados o con pelota más grande y suave; quien use silla de ruedas puede recibir y pasar sin límite de pasos. **Vuelta a la calma:** caminar y estirar brazos.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después de los pases en parejas', exercise: { name: 'Pases de pecho caminando y trotando', icon: 'Users', seconds: 60 } },
          { label: 'Después del juego de los 10 pases', exercise: { name: '10 pases: pasa y muévete', icon: 'Route', seconds: 120 } },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.5'], ambito: 'hacer',
          prompt: 'En el juego de los 10 pases, Juan pasa la pelota y se queda quieto mirando. Su equipo pierde la pelota porque nadie estaba libre. ¿Qué debió hacer Juan?',
          explain: 'Después de pasar hay que **moverse a un espacio libre** para ofrecer una nueva opción de pase.' },
        { options: [
          { id: 'a', text: 'Moverse a un espacio libre y pedir la pelota' },
          { id: 'b', text: 'Pararse junto a quien tiene la pelota', feedback: 'Si está pegado, el defensor cubre a los dos a la vez.' },
          { id: 'c', text: 'Quedarse quieto para no cansarse', feedback: 'Sin movimiento no hay opciones de pase.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.5'], ambito: 'hacer',
          prompt: 'Cuando recibe, a Sara la pelota le "rebota" en las manos y se le cae. Tiene los brazos rígidos y los dedos juntos. ¿Qué le aconsejas?',
          explain: 'Dedos abiertos en "W" y codos que se doblan al tocar la pelota: así la frena poco a poco, como un colchón.' },
        { options: [
          { id: 'a', text: 'Abrir los dedos en "W" y doblar los codos al recibir' },
          { id: 'b', text: 'Recibir con los brazos todavía más duros', feedback: 'Los brazos rígidos hacen que la pelota rebote.' },
          { id: 'c', text: 'Cerrar los ojos al recibir', feedback: 'Hay que mirar la pelota hasta que llegue a las manos.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.5'], prompt: 'Clasifica cada acción al pasar y recibir en movimiento: ¿es **correcta** o un **error**?' },
        { buckets: [
          { id: 'ok', label: 'Correcta', icon: 'Check', color: 'var(--c-ok)' },
          { id: 'no', label: 'Error', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'y1', text: 'Lanzar un paso delante de un compañero que corre', bucket: 'ok' },
          { id: 'y2', text: 'Lanzar justo a donde está ahora un compañero que corre', bucket: 'no' },
          { id: 'y3', text: 'Recibir con los brazos rígidos y los dedos juntos', bucket: 'no' },
          { id: 'y4', text: 'Doblar los codos al tocar la pelota', bucket: 'ok' },
        ] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.5'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Después de pasar la pelota conviene moverse a un espacio libre.', answer: true },
          { text: 'Para recibir, las manos forman una "W" y los codos se doblan para amortiguar.', answer: true },
          { text: 'Un pase muy fuerte a alguien que está cerca es más fácil de recibir.', answer: false, why: 'De cerca se usa un pase suave; uno muy fuerte es difícil de controlar.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Balonmano ───────────────────────── */
  lesson({
    id: 's05-ef-2',
    title: 'Balonmano: tres pasos, bote y lanzamiento a gol',
    icon: 'Goal',
    minutes: 15,
    gancho: 'En el balonmano se juega con las manos, pero no puedes correr con la pelota todo lo que quieras. ¿Cuántos pasos crees que se permiten?',
    objetivos: ['Aplicar la regla de los tres pasos y el bote para avanzar con la pelota; hacer pases por arriba del hombro con salto, a altura media y alta, con cada mano; lanzar a gol en forma directa, en suspensión y con pique'],
    resumen: [
      'El balonmano se juega con las manos entre dos equipos; se anota lanzando la pelota dentro de la portería. Solo el portero puede estar dentro del área de portería.',
      'Con la pelota en la mano puedes dar como máximo 3 pasos y retenerla hasta 3 segundos. Para avanzar más, bota la pelota: al atraparla de nuevo, tienes otros 3 pasos. No se permite botar, atrapar y volver a botar.',
      'Pase por arriba del hombro con salto: impulso con el pie contrario al brazo que lanza, y pase en el punto más alto, a altura media o alta; se practica con las dos manos.',
      'Lanzamiento a gol: directo (con apoyo en el suelo), en suspensión (saltando, por encima de la defensa) o con pique (bote antes de la portería, difícil para el portero). Apunta a las esquinas, lejos del portero.',
    ],
    media: {
      id: 's05-ef-2-balonmano', kind: 'video', title: 'La secuencia 3 pasos, bote, 3 pasos y lanzamiento', aspect: '16:9', duration: 60,
      alt: 'Una niña recibe la pelota, da tres pasos, la bota una vez, da otros tres pasos, salta con impulso de la pierna izquierda y lanza a gol por arriba del hombro en el punto más alto.',
      brief: 'Video de 60 s en cancha escolar con portería de balonmano o dos conos. (1) Vista lateral en cámara lenta: recepción, contador en pantalla "1-2-3 pasos", bote (ícono), "1-2-3 pasos", salto con pie contrario al brazo lanzador (rótulo) y lanzamiento en suspensión a una esquina. (2) Tres tipos de lanzamiento a gol, cada uno con rótulo: directo, en suspensión y con pique. (3) Plano cenital del área de portería con la línea marcada y rótulo "solo el portero". (4) Pase por arriba del hombro con salto a una compañera, con la mano derecha y luego con la izquierda. Pelota suave, jugadores con ropa deportiva genérica.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:2.1.13'], ambito: 'conocer',
          prompt: 'Ordena la secuencia básica antes de practicar el lanzamiento.' },
        { icon: 'Goal', body: 'En balonmano se puede avanzar hasta tres pasos con el balón, botarlo y volver a dar hasta tres pasos. Para lanzar, se respeta el área de portería y se controla el espacio alrededor.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.13'], ambito: 'conocer',
          prompt: 'En balonmano, ¿cuántos pasos puedes dar como máximo con la pelota en la mano?',
          explain: 'Máximo **3 pasos**. Si quieres avanzar más, debes **botar** la pelota. Esta regla hace que el juego sea de pases y no de "correr con la pelota".' },
        { options: [
          { id: 'a', text: '1 paso', icon: 'Footprints', feedback: 'Se permiten más. Mira el video de nuevo y cuenta.' },
          { id: 'b', text: '3 pasos', icon: 'Footprints' },
          { id: 'c', text: 'Todos los que quieras', icon: 'Route', feedback: 'Si fuera así, no haría falta pasar. Hay un límite.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.13'], ambito: 'conocer', title: 'Las reglas básicas del balonmano',
          prompt: 'El **balonmano** es un deporte de equipo que se juega con las manos. Mira la cancha y toca cada tarjeta.',
          media: {
            id: 's05-ef-2-cancha', kind: 'diagram', title: 'La cancha de balonmano', aspect: '16:9',
            alt: 'Vista desde arriba de una cancha rectangular con una portería en cada extremo y un área en forma de media luna frente a cada una; dentro del área solo está el portero.',
            brief: 'Diagrama cenital simple de cancha de balonmano: rectángulo con línea central, una portería pequeña en cada extremo y frente a cada una el área de portería en forma de media luna, coloreada. Dentro, un portero con chaleco distinto; fuera, jugadores de dos equipos (colores neutros). Rótulos: "área: solo el portero", "portería", "línea central". Recuadro lateral con íconos: "máx. 3 pasos", "máx. 3 segundos", "no botar dos veces". Adaptación escolar: indicar que en la escuela el área puede marcarse con tiza a 3-4 pasos.',
          } },
        { icon: 'Goal', body: 'Dos equipos intentan meter la pelota en la **portería** contraria. Se juega con pases, botes y lanzamientos.', reveal: [
          { icon: 'Footprints', front: '3 pasos', back: 'Con la pelota en la mano, **máximo 3 pasos**. Al cuarto paso es falta ("pasos").' },
          { icon: 'Timer', front: '3 segundos', back: 'Puedes **retener** la pelota como máximo **3 segundos** antes de pasar, botar o lanzar.' },
          { icon: 'CircleDot', front: 'El bote', back: 'Si botas la pelota, al atraparla tienes **otros 3 pasos**. Pero no puedes botar, atrapar y **volver a botar** (es "doble").' },
          { icon: 'ShieldCheck', front: 'El área', back: 'Frente a cada portería hay un **área**: **solo el portero** puede pisarla. Los demás lanzan desde afuera (pueden saltar y soltar la pelota en el aire).' },
          { icon: 'HeartHandshake', front: 'Juego limpio', back: 'No se empuja, jala ni golpea. Se defiende con el cuerpo de frente, sin agarrar.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.9', 'ef:2.1.13'], ambito: 'hacer', title: 'Saltar y lanzar',
          prompt: 'Dos técnicas con salto: el **pase** por arriba del hombro con salto y el **lanzamiento a gol**. Toca cada tarjeta.' },
        { icon: 'ArrowUp', body: 'En ambos, el salto te permite lanzar **por encima** de un defensor. Recuerda el salto de la semana 2: flexión, extensión y caída suave.', reveal: [
          { icon: 'Footprints', front: 'Impulso', back: 'Salta con el pie **contrario** al brazo que lanza: si lanzas con la derecha, salta con el pie **izquierdo**.' },
          { icon: 'ArrowUp', front: 'En el punto más alto', back: 'Lleva el brazo atrás con el codo alto mientras subes y suelta la pelota **en lo más alto** del salto.' },
          { icon: 'Users', front: 'Pase con salto', back: 'Envía la pelota a tu compañero a **altura media** (pecho) o **alta** (por encima de la cabeza, si hay un defensor). Practica con **cada mano**.' },
          { icon: 'Goal', front: 'Tres lanzamientos a gol', back: '**Directo**: con los pies en el suelo, fuerte y rápido. **En suspensión**: saltando. **Con pique**: la pelota bota antes de la portería y sorprende al portero.' },
          { icon: 'Target', front: '¿A dónde apuntar?', back: 'A las **esquinas** de la portería, lejos del portero. Nunca apuntes a la cabeza del portero.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.13', 'ef:2.1.9'], ambito: 'hacer', title: 'Ejemplo resuelto: la jugada de Ixchel',
          prompt: 'Mira cómo Ixchel (diestra) avanza desde el centro de la cancha y anota, respetando las reglas.' },
        { icon: 'Goal', problem: 'Ixchel recibe la pelota lejos de la portería contraria. Quiere acercarse y lanzar sin cometer "pasos".',
          steps: [
            { text: 'Recibe con las manos en "W" y da **3 pasos**: 1-2-3.' },
            { text: '**Bota** la pelota una vez y la atrapa: tiene **otros 3 pasos**.', why: 'El bote "renueva" los pasos, pero no puede volver a botar después de atraparla.' },
            { text: 'Con los últimos pasos llega a la línea del área, sin pisarla.' },
            { text: 'Salta con el pie **izquierdo**, lleva el brazo derecho atrás con el codo alto y lanza en el **punto más alto** (lanzamiento **en suspensión**).', why: 'Así lanza por encima del defensor. Puede caer dentro del área, siempre que suelte la pelota antes de tocar el suelo.' },
            { text: 'Apunta a la **esquina baja** contraria al portero.' },
          ],
          answer: 'Secuencia: **3 pasos → bote → 3 pasos → salto con el pie contrario → lanzamiento en suspensión a una esquina**.',
          tip: 'Practica primero la secuencia caminando y contando en voz alta "1, 2, 3, bote, 1, 2, 3, ¡salto!".' },
      ),
      S.sort(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.13'], ambito: 'conocer',
          prompt: 'Clasifica cada jugada: ¿está **permitida** o es **falta**?',
          hint: 'Recuerda: 3 pasos, 3 segundos, no volver a botar después de atrapar, y el área es solo del portero.',
          explain: 'Las reglas de los 3 pasos, 3 segundos, el doble bote y el área mantienen el juego justo y de equipo.' },
        { buckets: [
          { id: 'ok', label: 'Permitida', icon: 'Check', color: 'var(--c-ok)' },
          { id: 'f', label: 'Falta', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'Dar 3 pasos y pasar', bucket: 'ok' },
          { id: 'x2', text: 'Dar 5 pasos con la pelota en la mano', bucket: 'f' },
          { id: 'x3', text: '3 pasos, botar, atrapar y 3 pasos más', bucket: 'ok' },
          { id: 'x4', text: 'Botar, atrapar y volver a botar', bucket: 'f', feedback: 'Es "doble": después de atrapar, debes pasar o lanzar.' },
          { id: 'x5', text: 'Un jugador de campo que entra al área para lanzar desde cerca', bucket: 'f' },
          { id: 'x6', text: 'Saltar desde fuera del área y lanzar en el aire', bucket: 'ok' },
        ] },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.9', 'ef:2.1.13'], ambito: 'hacer',
          prompt: '¡Minibalonmano! Pelota suave; portería con dos piedras, conos o mochilas; área marcada con una línea de 3-4 pasos. **Calentamiento:** trote, rotación de hombros, 10 saltos suaves. **Parte principal:** (1) secuencia sin defensor: "3 pasos, bote, 3 pasos, lanzamiento" 5 veces directo, 5 en suspensión y 5 con pique; (2) en parejas, 10 pases por arriba del hombro con salto (5 con cada mano, a altura media y alta); (3) partido corto de 3 contra 3 respetando las reglas. **Seguridad:** el portero se protege con las manos; lanzamientos a las esquinas, nunca a la cara. **Poco espacio:** portería en la pared y secuencia caminando. **Adaptación:** equipos mixtos; quien use silla de ruedas puede avanzar con la pelota en las piernas y botar cuando quiera. **Vuelta a la calma:** estira hombros y piernas, toma agua.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después de la secuencia y los pases con salto', exercise: { name: '3 pasos, bote, lanzamiento y pases con salto', icon: 'Goal', seconds: 90 } },
          { label: 'Después del minipartido', exercise: { name: 'Minibalonmano 3 contra 3', icon: 'Users', seconds: 120 } },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.13'], ambito: 'conocer',
          prompt: 'Recibes la pelota, das los pasos permitidos, la botas **una vez**, la atrapas y das otra vez los pasos permitidos antes de lanzar. ¿Cuántos pasos das **en total** con la pelota en la mano?',
          explain: '3 pasos antes del bote + 3 pasos después de atraparla = **6 pasos**. No puedes volver a botar: ahora debes pasar o lanzar.' },
        { answer: 6, unit: 'pasos', misconceptions: [
          { value: 3, msg: 'Esos son los pasos de un solo tramo. Después del bote tienes otros 3.' },
          { value: 9, msg: 'Solo botaste una vez: son dos tramos de 3 pasos.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.9'], ambito: 'hacer',
          prompt: 'Mario lanza con la mano **derecha** y quiere hacer un pase con salto. Siempre salta con el pie **derecho** y se siente descoordinado. ¿Qué debe cambiar?',
          explain: 'El impulso se hace con el pie **contrario** al brazo que lanza: con la derecha, salta con el pie izquierdo. Así el cuerpo gira y el brazo tiene más fuerza.' },
        { options: [
          { id: 'a', text: 'Saltar con el pie izquierdo' },
          { id: 'b', text: 'Saltar con los dos pies juntos y sin brazos', feedback: 'Sin impulso del pie contrario ni brazo atrás, el pase pierde fuerza.' },
          { id: 'c', text: 'Soltar la pelota antes de saltar', feedback: 'El pase con salto se suelta en el punto más alto.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.13'], prompt: 'En un lanzamiento a gol **con pique**, la pelota…' },
        { options: [
          { id: 'a', text: 'Bota en el suelo antes de llegar a la portería' },
          { id: 'b', text: 'Se lanza saltando sin que bote' },
          { id: 'c', text: 'Se rueda por el suelo sin despegarse' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.9', 'ef:2.1.13'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En balonmano puedes dar como máximo 3 pasos con la pelota en la mano.', answer: true },
          { text: 'En el pase con salto, la pelota se suelta en el punto más alto.', answer: true },
          { text: 'Cualquier jugador puede entrar al área de portería para lanzar más cerca.', answer: false, why: 'Solo el portero puede estar en el área.' },
        ] },
      ),
      cierre({ areas: ['ef'], cnb: ['ef:2.1.13'] },
        ['Recibo con las manos en "W" y hago pases adelantados', 'Respeto la regla de los 3 pasos y el bote', 'Lanzo a gol directo, en suspensión y con pique'],
        ['Practicaré la secuencia 3 pasos, bote, 3 pasos', 'Haré pases con salto con mis dos manos', 'Jugaré limpio: sin empujar ni lanzar a la cara']),
    ],
  }),
];
