/**
 * Educación Física · Unidad 1 · Semana 1 — Conocer el cuerpo que se mueve.
 * Progresión: huesos, músculos, tendones y ligamentos + movimientos básicos (flexión, extensión,
 * rotación) con una rutina guiada → lado dominante (mano) y equilibrio estático y dinámico.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. El cuerpo en movimiento ───────────────────────── */
  lesson({
    id: 's01-ef-1',
    title: 'Huesos, músculos y articulaciones en movimiento',
    icon: 'PersonStanding',
    minutes: 15,
    gancho: 'Para patear una pelota, subir un cerro o levantar un canasto trabajan juntos huesos, músculos, tendones y ligamentos. ¿Sabes qué hace cada uno?',
    objetivos: [
      'Explicar la función de huesos, músculos, tendones y ligamentos',
      'Realizar movimientos de flexión, extensión y rotación con control',
      'Hacer una rutina de calentamiento y estiramiento de forma segura',
    ],
    resumen: [
      'Los huesos forman el esqueleto: sostienen el cuerpo y protegen órganos. Una persona adulta tiene 206 huesos.',
      'Los músculos se contraen (se acortan) y jalan de los huesos para moverlos. Trabajan en parejas: cuando uno se contrae, el otro se relaja.',
      'Los tendones unen los músculos con los huesos. Los ligamentos unen un hueso con otro en las articulaciones (rodilla, codo, tobillo).',
      'Flexión: doblar una articulación (cerrar el ángulo). Extensión: estirarla (abrir el ángulo). Rotación: girar una parte del cuerpo sobre su eje.',
      'Antes de una actividad intensa se calienta el cuerpo; al final se estira suave, sin rebotes ni dolor, y se toma agua.',
    ],
    media: {
      id: 's01-ef-1-sistema', kind: 'animation', title: 'Cómo se mueve tu brazo', aspect: '16:9', duration: 50,
      alt: 'Un brazo transparente muestra el hueso, el bíceps y el tríceps. Al doblar el codo, el bíceps se acorta y el tríceps se estira; al estirar el brazo, ocurre lo contrario. Se resaltan los tendones y un ligamento del codo.',
      brief: 'Animación 2D anatómica sencilla, estilo libro escolar, 50 s. (1) Brazo de una niña levantando un canasto pequeño; vista transparente con húmero, radio y cúbito en beige, bíceps rojo delante y tríceps rojo detrás. (2) Flexión del codo: el bíceps se engrosa y acorta (rótulo "se contrae"), el tríceps se alarga ("se relaja"); flecha "flexión". (3) Extensión: al revés; flecha "extensión". (4) Zoom al codo: tendones en blanco uniendo músculo-hueso (rótulo "tendón"), bandas que unen hueso-hueso (rótulo "ligamento"). (5) Giro de la muñeca: "rotación". Narración en español, subtítulos. Sin sangre ni detalles gráficos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ef', 'cnt'], cnb: ['ef:1.1.6'], ambito: 'conocer', title: 'El equipo del movimiento',
          prompt: 'Cada movimiento que haces es trabajo en equipo. Toca cada tarjeta para conocer a los integrantes.' },
        { icon: 'PersonStanding', body: 'El **aparato locomotor** está formado por **huesos**, **articulaciones** y **músculos**, unidos por **tendones** y **ligamentos**.', reveal: [
          { icon: 'Bone', front: 'Huesos', back: 'Forman el **esqueleto**: sostienen el cuerpo y protegen órganos (el cráneo protege el cerebro; las costillas, el corazón y los pulmones). Una persona adulta tiene **206**.' },
          { icon: 'Dumbbell', front: 'Músculos', back: 'Se **contraen** (se acortan) y **jalan** de los huesos. Trabajan en **parejas**: el bíceps dobla el codo y el tríceps lo estira.' },
          { icon: 'Link', front: 'Tendones', back: 'Cordones fuertes que **unen el músculo con el hueso**. El más grueso es el tendón de Aquiles, en el talón.' },
          { icon: 'Link2', front: 'Ligamentos', back: 'Bandas que **unen un hueso con otro** en las **articulaciones** (rodilla, tobillo, codo) y las mantienen firmes.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.1.6'], ambito: 'conocer',
          prompt: 'Dobla tu brazo como mostrando tu "fuerza" y toca con la otra mano la parte de adelante del brazo. ¿Qué sientes?',
          explain: 'Sientes el **bíceps** endurecerse y abultarse: se **contrae** (se acorta) y jala el hueso del antebrazo hacia arriba. Así funcionan todos los músculos que mueven el esqueleto.' },
        { options: [
          { id: 'a', text: 'Se pone duro y abultado', icon: 'Dumbbell' },
          { id: 'b', text: 'Se queda igual de blando', icon: 'Minus', feedback: 'Prueba de nuevo apretando el puño: el músculo de adelante se endurece al doblar el codo.' },
          { id: 'c', text: 'Se siente el hueso moviéndose solo', icon: 'Bone', feedback: 'Los huesos no se mueven solos: los músculos los jalan.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.1.2'], ambito: 'hacer', title: 'Tres movimientos básicos',
          prompt: 'Las **articulaciones** son los lugares donde se unen los huesos y donde el cuerpo se dobla o gira. Toca cada tarjeta y **haz el movimiento**.',
          media: {
            id: 's01-ef-1-movimientos', kind: 'video', title: 'Flexión, extensión y rotación', aspect: '9:16', duration: 40,
            alt: 'Un niño en el patio muestra en cámara lenta: dobla y estira el codo y la rodilla, y gira los hombros, el cuello y la cintura.',
            brief: 'Video vertical de 40 s, patio de escuela, fondo despejado. Un niño con ropa deportiva sencilla (rostro no protagonista) demuestra en cámara lenta: flexión y extensión de codo, flexión y extensión de rodilla (sentado en una silla), rotación de hombros hacia atrás, rotación suave de cuello (medio círculo, sin echar la cabeza atrás), rotación de cintura con manos en la cadera. Rótulos grandes "flexión", "extensión", "rotación" y un arco que muestra el ángulo que se cierra o se abre.',
          } },
        { icon: 'RotateCw', body: 'Muévete **despacio y con control**. Si algo duele, detente.', reveal: [
          { icon: 'CornerDownRight', front: 'Flexión', back: '**Doblar** una articulación: el ángulo se **cierra**. Ejemplo: doblar el codo para llevar una tortilla a la boca.' },
          { icon: 'MoveHorizontal', front: 'Extensión', back: '**Estirar** una articulación: el ángulo se **abre**. Ejemplo: estirar la pierna al patear.' },
          { icon: 'RotateCw', front: 'Rotación', back: '**Girar** una parte del cuerpo sobre su eje. Ejemplo: girar los hombros, la muñeca o la cintura.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.1.2', 'ef:1.1.6'], ambito: 'conocer', title: 'Ejemplo resuelto: analizar un movimiento',
          prompt: 'Mira cómo se analiza un movimiento de la vida diaria.' },
        { icon: 'Search', problem: 'Doña Rosa saca agua del pozo: **jala la cuerda** doblando los brazos y luego **vuelve a estirarlos** para agarrar más abajo. ¿Qué pasa en su codo?',
          steps: [
            { text: 'Al jalar, el codo se **dobla**: es una **flexión**. El **bíceps** se contrae y jala el antebrazo.' },
            { text: 'Los **tendones** transmiten la fuerza del bíceps al hueso.', why: 'Sin tendones, el músculo se contraería pero no movería el hueso.' },
            { text: 'Al estirar el brazo, el codo se abre: es una **extensión**. Ahora trabaja el **tríceps** y el bíceps se relaja.' },
            { text: 'Mientras tanto, los **ligamentos** del codo mantienen unidos los huesos para que la articulación no se salga de lugar.' },
          ],
          answer: 'Jalar = **flexión** (bíceps); estirar = **extensión** (tríceps). Tendones transmiten la fuerza y ligamentos dan firmeza.',
          tip: 'Para saber si es flexión o extensión, fíjate si el ángulo de la articulación se cierra o se abre.' },
      ),
      S.match(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.1.6'], ambito: 'conocer',
          prompt: 'Une cada parte con su función.',
          hint: 'Tendón: músculo-hueso. Ligamento: hueso-hueso.',
          explain: 'Huesos sostienen, músculos mueven, tendones unen músculo con hueso y ligamentos unen hueso con hueso.' },
        { leftTitle: 'Parte', rightTitle: 'Función', pairs: [
          { id: 'h', left: 'Hueso', leftIcon: 'Bone', right: 'Sostiene el cuerpo y protege órganos' },
          { id: 'm', left: 'Músculo', leftIcon: 'Dumbbell', right: 'Se contrae y jala para mover' },
          { id: 't', left: 'Tendón', leftIcon: 'Link', right: 'Une el músculo con el hueso' },
          { id: 'l', left: 'Ligamento', leftIcon: 'Link2', right: 'Une un hueso con otro' },
        ] },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.1.2', 'ef:1.1.6'], ambito: 'hacer',
          prompt: '¡A moverte! Mide tu pulso en reposo y luego haz la rutina en tres partes. **Calentamiento (1 min):** trote suave en tu lugar y rotación de hombros, muñecas y tobillos. **Parte principal (1 min):** 10 sentadillas (flexión y extensión de rodillas), 10 flexiones de codo levantando dos botellas con agua y 10 rotaciones de cintura. **Estiramiento (1 min):** estira brazos y piernas, 15 s cada uno, suave y sin rebotes. **Poco espacio:** todo se hace en tu lugar. **Adaptación:** si usas silla de ruedas o no puedes estar de pie, haz la rutina sentado con brazos, tronco y cuello.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después del calentamiento', exercise: { name: 'Trote suave y rotaciones', icon: 'RotateCw', seconds: 60 } },
          { label: 'Después de la parte principal', exercise: { name: 'Sentadillas, flexiones de codo y rotación de cintura', icon: 'Dumbbell', seconds: 60 } },
          { label: 'Después del estiramiento', exercise: { name: 'Estiramiento suave de brazos y piernas', icon: 'PersonStanding', seconds: 60 } },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.1.2'], ambito: 'hacer',
          prompt: 'Clasifica cada movimiento de la rutina: ¿flexión, extensión o rotación?',
          explain: 'Si el ángulo se cierra es flexión; si se abre, extensión; si la parte gira, rotación.' },
        { buckets: [
          { id: 'f', label: 'Flexión', icon: 'CornerDownRight', color: 'var(--area-ef)' },
          { id: 'e', label: 'Extensión', icon: 'MoveHorizontal', color: 'var(--c-ok)' },
          { id: 'r', label: 'Rotación', icon: 'RotateCw', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'Bajar en una sentadilla (doblar las rodillas)', bucket: 'f' },
          { id: 'x2', text: 'Subir de la sentadilla (estirar las rodillas)', bucket: 'e' },
          { id: 'x3', text: 'Girar los hombros hacia atrás', bucket: 'r' },
          { id: 'x4', text: 'Levantar la botella doblando el codo', bucket: 'f' },
          { id: 'x5', text: 'Girar la cintura con las manos en la cadera', bucket: 'r' },
          { id: 'x6', text: 'Estirar la pierna para patear', bucket: 'e' },
        ] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.1.6'], ambito: 'ser',
          prompt: 'Cuida tu cuerpo. ¿Verdadero o falso?',
          explain: 'Calentar prepara músculos y articulaciones; estirar suave al final ayuda a relajarlos; el agua repone lo que pierdes al sudar.' },
        { statements: [
          { text: 'El calentamiento prepara los músculos y articulaciones para el esfuerzo.', answer: true },
          { text: 'Al estirar hay que rebotar fuerte para llegar más lejos.', answer: false, why: 'Los rebotes pueden lastimar músculos y tendones. Se estira suave y se sostiene.' },
          { text: 'Si una articulación duele durante el ejercicio, es mejor detenerse y avisar a una persona adulta.', answer: true },
          { text: 'Después de hacer ejercicio conviene tomar agua.', answer: true },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.1.6'], prompt: '¿Qué une los **músculos** con los **huesos**?' },
        { options: [
          { id: 'a', text: 'Los ligamentos' },
          { id: 'b', text: 'Los tendones' },
          { id: 'c', text: 'Las articulaciones' },
        ], correct: ['b'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.1.2'], prompt: 'Al **estirar la rodilla** para levantarte de una silla, haces una…' },
        { options: [
          { id: 'a', text: 'Flexión' },
          { id: 'b', text: 'Extensión' },
          { id: 'c', text: 'Rotación' },
        ], correct: ['b'] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Lado dominante y equilibrio ───────────────────────── */
  lesson({
    id: 's01-ef-2',
    title: 'Mi lado dominante y mi equilibrio',
    icon: 'Hand',
    minutes: 15,
    gancho: '¿Con qué mano escribes, lanzas una pelota o te cepillas los dientes? ¿Y podrías hacerlo igual de bien con la otra?',
    objetivos: [
      'Identificar tu mano dominante y ejercitarla, sin olvidar la otra mano',
      'Diferenciar el equilibrio estático del dinámico',
      'Mejorar tu equilibrio con una base amplia, el centro de gravedad bajo y la mirada fija',
    ],
    resumen: [
      'La lateralidad es la preferencia por usar un lado del cuerpo. El lado dominante es el que usamos con más fuerza y precisión: la mayoría de personas son diestras; otras son zurdas. Ambas son normales.',
      'Ejercitar la mano dominante mejora la precisión; practicar también con la otra mano da más habilidad y equilibrio al cuerpo.',
      'Equilibrio estático: mantener una postura sin moverse (pararse en un pie). Equilibrio dinámico: mantenerlo mientras te mueves (caminar sobre una línea).',
      'Para tener más equilibrio: base de apoyo amplia, centro de gravedad bajo (rodillas un poco dobladas), brazos abiertos y la mirada fija en un punto.',
    ],
    media: {
      id: 's01-ef-2-equilibrio', kind: 'video', title: 'Equilibrio quieto y en movimiento', aspect: '9:16', duration: 45,
      alt: 'Una niña se para en un pie con los brazos abiertos y la mirada fija; luego camina sobre una línea en el suelo con un libro en la cabeza.',
      brief: 'Video vertical de 45 s en un patio o salón. Parte 1 "Equilibrio estático": una niña (ropa deportiva, rostro no protagonista) se para en un pie, primero con brazos pegados (se tambalea) y luego con brazos abiertos y mirada fija en un punto (se estabiliza); rótulos "brazos abiertos", "mira un punto". Parte 2 "Equilibrio dinámico": camina sobre una línea de yeso o cinta, de talón a punta, con un cuaderno sobre la cabeza. Parte 3: un niño en silla de ruedas hace equilibrio del tronco con una pelota sobre las piernas. Aviso "Hazlo en suelo plano y despejado".',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:1.2.1'], ambito: 'conocer', title: 'La lateralidad',
          prompt: 'Nuestro cuerpo tiene dos lados, pero casi siempre **preferimos uno**. Toca cada tarjeta.' },
        { icon: 'Hand', body: 'La **lateralidad** es la preferencia por usar un lado del cuerpo: mano, pie, ojo y oído.', reveal: [
          { icon: 'Hand', front: 'Lado dominante', back: 'Es el que usas con **más fuerza y precisión**. Si es la derecha eres **diestro/a**; si es la izquierda, **zurdo/a**.' },
          { icon: 'Users', front: 'Todos somos distintos', back: 'La mayoría de las personas son diestras, pero ser zurdo es **igual de normal**. Nadie debe obligarte a cambiar de mano.' },
          { icon: 'Target', front: 'Reforzar la dominante', back: 'Practicar lanzamientos, botes y agarres con tu mano dominante mejora tu **precisión** en juegos y deportes.' },
          { icon: 'RefreshCw', front: 'Entrenar la otra', back: 'Practicar también con la mano no dominante te da **más opciones** en el juego y equilibra tu cuerpo.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.2.1'], ambito: 'conocer',
          prompt: 'Haz una prueba rápida: **lanza una bolita de papel** a un bote con una mano y luego con la otra, 3 veces cada una. Casi todas las personas aciertan más con una mano. ¿Por qué crees que pasa?',
          explain: 'Acertamos más con la mano **dominante**: la que el cerebro prefiere y ha entrenado más. Hoy vas a ejercitarla y también a darle práctica a la otra.' },
        { options: [
          { id: 'a', text: 'Porque es la mano que preferimos y más hemos practicado', icon: 'Target' },
          { id: 'b', text: 'Porque esa mano tiene más huesos', icon: 'Bone', feedback: 'Las dos manos tienen los mismos huesos. La diferencia está en la práctica y en la preferencia del cerebro.' },
          { id: 'c', text: 'Por pura suerte', icon: 'Sparkles', feedback: 'Si repites la prueba muchas veces, casi siempre gana la misma mano: no es suerte.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.2.4'], ambito: 'conocer', title: 'Dos tipos de equilibrio',
          prompt: 'El **equilibrio** es la capacidad de mantener el cuerpo estable sin caerse. Mira el video y toca cada tarjeta.' },
        { icon: 'Scale', body: 'Tu cuerpo tiene un **centro de gravedad** (un punto cerca del ombligo) que debe quedar **encima de tu base de apoyo** (los pies).', reveal: [
          { icon: 'PersonStanding', front: 'Equilibrio estático', back: 'Mantener una postura **sin desplazarte**: pararte en un pie, hacer "el avión", quedarte en cuclillas.' },
          { icon: 'Footprints', front: 'Equilibrio dinámico', back: 'Mantener el equilibrio **mientras te mueves**: caminar sobre una línea o un tronco, saltar y caer firme, andar en bicicleta.' },
          { icon: 'Maximize2', front: 'Base amplia', back: 'Con los pies **separados** tienes más base y más equilibrio que con los pies juntos o en un pie.' },
          { icon: 'ArrowDown', front: 'Centro bajo y mirada fija', back: '**Dobla un poco las rodillas**, **abre los brazos** y **mira un punto fijo**: te tambaleas menos.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.2.4'], ambito: 'hacer', title: 'Ejemplo resuelto: cruzar el tronco sobre el río',
          prompt: 'Mira cómo Kevin aplica lo aprendido para no caerse.' },
        { icon: 'Footprints', problem: 'En un paseo, Kevin debe cruzar caminando sobre un tronco ancho y bajo, puesto como puente sobre un riachuelo poco profundo. ¿Qué hace para mantener el equilibrio?',
          steps: [
            { text: 'Revisa que el tronco esté **firme** y pide que una persona adulta esté cerca.', why: 'La seguridad va primero.' },
            { text: 'Abre los **brazos** hacia los lados.', why: 'Los brazos abiertos ayudan a corregir el tambaleo.' },
            { text: 'Dobla un poco las **rodillas**.', why: 'Baja su centro de gravedad y queda más estable.' },
            { text: 'Mira un **punto fijo** al final del tronco, no el agua.', why: 'Mirar el agua que corre confunde al cerebro y hace tambalear.' },
            { text: 'Avanza con **pasos cortos**, apoyando bien cada pie antes de mover el otro.' },
          ],
          answer: 'Kevin usa **equilibrio dinámico**: brazos abiertos, centro bajo, mirada fija y pasos cortos.',
          tip: 'Si sientes que te caes, agáchate y apoya las manos: bajar el cuerpo te devuelve el equilibrio.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.2.4'], ambito: 'conocer',
          prompt: 'Clasifica cada actividad: ¿equilibrio **estático** o **dinámico**?',
          hint: 'Pregúntate: ¿la persona se desplaza o se queda en su lugar?',
          explain: 'Si te quedas quieto en una postura es estático; si te desplazas manteniendo el equilibrio, es dinámico.' },
        { buckets: [
          { id: 'e', label: 'Estático (quieto)', icon: 'PersonStanding', color: 'var(--area-ef)' },
          { id: 'd', label: 'Dinámico (en movimiento)', icon: 'Footprints', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'Pararme en un pie 20 segundos', bucket: 'e' },
          { id: 'x2', text: 'Caminar sobre la orilla de la banqueta con cuidado', bucket: 'd' },
          { id: 'x3', text: 'Hacer "el avión" sin moverme', bucket: 'e' },
          { id: 'x4', text: 'Andar en bicicleta', bucket: 'd' },
          { id: 'x5', text: 'Saltar la cuerda', bucket: 'd' },
          { id: 'x6', text: 'Quedarme en cuclillas con los brazos al frente', bucket: 'e' },
        ] },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.2.1', 'ef:1.2.4'], ambito: 'hacer',
          prompt: '¡Circuito de mano y equilibrio! **Calentamiento:** rota muñecas, hombros y tobillos. **Estación 1 (mano):** lanza y atrapa una bolita de papel o un calcetín enrollado, 10 veces con la mano dominante y 10 con la otra; luego bota una pelota 10 veces con cada mano. **Estación 2 (equilibrio):** párate en un pie 20 s con cada pierna (estático) y camina 10 pasos sobre una línea de talón a punta, ida y vuelta (dinámico). **Poco espacio:** usa una línea de cinta de 2 m. **Adaptación:** puedes apoyarte en una pared o en una silla; en silla de ruedas, haz el equilibrio con el tronco sosteniendo un cuaderno sobre la cabeza.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después de la estación de la mano', exercise: { name: 'Lanzar, atrapar y botar con cada mano', icon: 'Hand', seconds: 60 } },
          { label: 'Después de la estación de equilibrio', exercise: { name: 'Un pie y caminar sobre la línea', icon: 'Footprints', seconds: 60 } },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.2.4'], ambito: 'hacer',
          prompt: 'Ana se tambalea al pararse en un pie. Tiene los brazos pegados al cuerpo, las rodillas rígidas y mira hacia todos lados. ¿Qué le aconsejas?',
          explain: 'Abrir los brazos, doblar un poco la rodilla de apoyo y fijar la mirada en un punto aumenta la estabilidad.' },
        { options: [
          { id: 'a', text: 'Que abra los brazos, doble un poco la rodilla y mire un punto fijo' },
          { id: 'b', text: 'Que cierre los ojos para concentrarse', feedback: 'Con los ojos cerrados el equilibrio es mucho más difícil: la vista ayuda a estabilizarse.' },
          { id: 'c', text: 'Que se pare de puntillas para estar más alta', feedback: 'De puntillas la base es más pequeña y el equilibrio es más difícil.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.2.1'], ambito: 'convivir',
          prompt: 'Luis es zurdo. En el recreo, un compañero le dice que "está mal" lanzar con la izquierda. ¿Qué es correcto?',
          explain: 'Ser zurdo es una forma normal de lateralidad. Lo importante es ejercitar el lado dominante y, además, practicar con el otro.' },
        { options: [
          { id: 'a', text: 'Luis debe cambiar a la mano derecha', feedback: 'No: forzar a alguien a cambiar su mano dominante no tiene sentido y le quita precisión.' },
          { id: 'b', text: 'Ser zurdo es normal; Luis puede reforzar su mano izquierda y practicar también con la derecha' },
          { id: 'c', text: 'Luis no debería jugar a lanzar', feedback: 'Todas las personas pueden jugar, sin importar su mano dominante.' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.2.4'], prompt: 'Clasifica cada actividad: ¿equilibrio **estático** o **dinámico**?' },
        { buckets: [
          { id: 'e', label: 'Estático (quieto)', icon: 'PersonStanding', color: 'var(--area-ef)' },
          { id: 'd', label: 'Dinámico (en movimiento)', icon: 'Footprints', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'y1', text: 'Caminar sobre una línea recta sin salirte', bucket: 'd' },
          { id: 'y2', text: 'Sostenerte en un pie con la otra rodilla arriba, sin moverte', bucket: 'e' },
          { id: 'y3', text: 'Cruzar un puente angosto caminando', bucket: 'd' },
          { id: 'y4', text: 'Quedarte de puntillas 10 segundos en tu lugar', bucket: 'e' },
        ] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.2.1', 'ef:1.2.4'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La mano dominante es la que usamos con más fuerza y precisión.', answer: true },
          { text: 'Con los pies juntos tienes más equilibrio que con los pies separados.', answer: false, why: 'Con los pies separados la base de apoyo es más amplia y hay más equilibrio.' },
          { text: 'Doblar un poco las rodillas baja el centro de gravedad y ayuda al equilibrio.', answer: true },
        ] },
      ),
      cierre({ areas: ['ef'], cnb: ['ef:1.2.4'] },
        ['Explico qué hacen huesos, músculos, tendones y ligamentos', 'Hago flexión, extensión y rotación con control', 'Reconozco mi mano dominante y mejoro mi equilibrio'],
        ['Haré mi rutina de calentamiento antes de jugar', 'Practicaré lanzar y botar con las dos manos', 'Me pararé en un pie mientras me lavo los dientes']),
    ],
  }),
];
