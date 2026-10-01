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
    objetivos: ['Aplicar recepción, pase adelantado y desmarque durante el movimiento'],
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
    title: 'Balonmano: decidir, saltar y pasar con control',
    icon: 'Goal',
    minutes: 15,
    gancho: 'Una compañera levanta las manos por encima de la cabeza. ¿Qué altura y qué mano elegirías para enviarle un pase con salto?',
    objetivos: ['Ejecutar el pase por arriba del hombro con salto mediante una decisión bilateral controlada'],
    resumen: [
      'La decisión central es pasar a una altura media o alta según la posición de quien recibe, usando la mano izquierda o derecha con control.',
      'En el pase por arriba del hombro con salto, el pie contrario impulsa y la pelota se suelta en el punto más alto antes de caer.',
      'La entrada controlada respeta hasta 3 pasos y el área de portería. Después se decide entre pasar o realizar una finalización segura.',
      'Las tres finalizaciones se reconocen sin convertirlas en series largas: directa, en suspensión y con pique.',
    ],
    media: {
      id: 's05-ef-2-balonmano', kind: 'video', title: 'Pase bilateral con salto', aspect: '16:9', duration: 35,
      alt: 'Dos secuencias laterales muestran un pase con salto usando la mano derecha y luego la izquierda, con impulso del pie contrario y liberación en el punto más alto.',
      brief: 'Video breve de 35 s en cancha escolar. Mostrar dos ejecuciones a velocidad normal y lenta: mano derecha con impulso izquierdo hacia manos altas; mano izquierda con impulso derecho hacia el pecho. Superponer solo tres rótulos: "pie contrario", "punto más alto", "altura elegida". Cerrar con tres fotogramas pequeños de finalización directa, en suspensión y con pique. Pelota suave, distancia corta, sin defensa ni partido.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:2.1.13'], ambito: 'conocer',
          prompt: 'Observa la posición de quien recibe antes de decidir el pase.' },
        { icon: 'Users', body: 'Si las manos están al pecho, el pase va a altura media; si están elevadas para superar una oposición, puede ir a altura alta. La distancia es corta y la pelota es suave.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.9', 'ef:2.1.13'], ambito: 'conocer', title: 'Una secuencia controlada',
          prompt: 'El pase con salto combina una entrada breve, impulso contrario y liberación aérea.' },
        { icon: 'ArrowUp', body: 'La técnica se practica primero sin oposición y con una pareja preparada para recibir.', reveal: [
          { icon: 'Footprints', front: 'Entrada', back: 'Avanza con control y respeta el máximo de **3 pasos** con la pelota.' },
          { icon: 'ArrowUp', front: 'Impulso contrario', back: 'Mano derecha con pie izquierdo; mano izquierda con pie derecho.' },
          { icon: 'Hand', front: 'Brazo', back: 'Lleva el balón por arriba del hombro con el codo alto.' },
          { icon: 'Target', front: 'Liberación', back: 'Suelta en el punto más alto hacia la altura que muestran las manos de tu pareja.' },
          { icon: 'ShieldCheck', front: 'Seguridad', back: 'Mantén distancia, usa pelota suave y nunca dirijas el pase a la cara.' },
        ] },
      ),
      S.cards(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.13'], ambito: 'conocer', title: 'Una muestra de cada finalización',
          prompt: 'Después de la entrada controlada, compara tres maneras de terminar una jugada. Hoy se realiza solo una prueba de cada tipo, sin portero ni partido.' },
        { cards: [
          { icon: 'Target', front: 'Directa', back: 'Se suelta con apoyo en el suelo.' },
          { icon: 'ArrowUp', front: 'En suspensión', back: 'Se suelta durante el salto, antes de caer.' },
          { icon: 'CircleDot', front: 'Con pique', back: 'La pelota bota una vez antes de la meta.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.13', 'ef:2.1.9'], ambito: 'hacer', title: 'Ejemplo resuelto: manos altas',
          prompt: 'Mira cómo Ixchel decide y ejecuta un pase alto con la mano derecha.' },
        { icon: 'Users', problem: 'Su pareja está libre, muestra las manos por encima de la cabeza y espera una pelota suave.',
          steps: [
            { text: 'Ixchel hace una entrada controlada de **3 pasos**.' },
            { text: 'Elige la **mano derecha** y se impulsa con el **pie izquierdo**.', why: 'El apoyo es contrario al brazo ejecutor.' },
            { text: 'Lleva el balón por arriba del hombro y observa las manos altas de su pareja.' },
            { text: 'Suelta en el **punto más alto** hacia la zona sobre la cabeza.' },
            { text: 'Cae con equilibrio y registra una marca si el pase llegó a la zona acordada.' },
          ],
          answer: 'Decisión y secuencia: **altura alta → mano derecha → pie izquierdo → liberación en el punto más alto**.',
          tip: 'Con la mano izquierda, invierte el apoyo: impulsa el pie derecho.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.9'], ambito: 'hacer',
          prompt: 'Clasifica cada fotograma según la decisión o el control que muestra en el pase con salto.',
          hint: 'Observa las manos de quien recibe, la posición del brazo y la forma de caer.',
          explain: 'Las manos altas orientan la altura, el brazo prepara el balón sobre el hombro y las rodillas flexionadas controlan la caída.' },
        { buckets: [
          { id: 'alt', label: 'Elegir altura', icon: 'Target', color: 'var(--area-ef)' },
          { id: 'bra', label: 'Preparar brazo', icon: 'Hand', color: 'var(--c-ok)' },
          { id: 'cae', label: 'Controlar caída', icon: 'PersonStanding', color: 'var(--area-mat)' },
        ], items: [
          { id: 'x1', text: 'La pareja muestra las manos por encima de la cabeza', bucket: 'alt' },
          { id: 'x2', text: 'Balón sobre el hombro y codo elevado', bucket: 'bra' },
          { id: 'x3', text: 'Dos pies reciben el cuerpo con rodillas flexionadas', bucket: 'cae' },
        ] },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.9', 'ef:2.1.13'], ambito: 'hacer',
          prompt: 'Práctica breve con pelota suave y una pareja a distancia segura. **Calentamiento:** movilidad de hombros y tres ensayos sin pelota. **Parte principal:** realiza **6 pases bilaterales** por arriba del hombro con salto: **3 con la izquierda y 3 con la derecha**, alternando altura media y altura alta según las manos de la pareja. Después realiza **3 finalizaciones controladas**, una directa, una en suspensión y una con pique, sin portero. Una persona marca en una tarjeta si la altura correspondió a las manos, la pelota llegó a la zona acordada y hubo caída equilibrada. **Seguridad:** nadie se coloca frente a la meta; nunca se apunta a la cara. **Adaptación:** la misma decisión puede practicarse sin salto, desde una posición estable. **Vuelta a la calma:** caminar y mover hombros suavemente.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después de los 6 pases', exercise: { name: 'Pases bilaterales con decisión de altura', icon: 'Users', seconds: 90 } },
          { label: 'Después de las 3 finalizaciones', exercise: { name: 'Finalizaciones controladas sin portero', icon: 'Goal', seconds: 60 } },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.9'], ambito: 'hacer',
          prompt: 'En una ejecución nueva, Rosa usa la mano derecha y su pareja muestra las manos altas, pero dirige la pelota al pecho. ¿Qué ajuste aplica la decisión practicada?',
          explain: 'La altura del pase responde a la zona que muestra quien recibe: manos altas piden una trayectoria alta.' },
        { options: [
          { id: 'a', text: 'Mantener la mano derecha y dirigir el pase a la altura alta señalada' },
          { id: 'b', text: 'Conservar la altura al pecho aunque la pareja no la indicó', feedback: 'La altura debe responder a la zona que muestra quien recibe.' },
          { id: 'c', text: 'Dirigir la pelota a la cara con fuerza', feedback: 'El pase nunca se dirige a la cara.' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.13'], ambito: 'hacer',
          prompt: 'Tras una entrada controlada, relaciona cada forma de finalizar con la evidencia que la distingue.',
          explain: 'La directa conserva apoyo, la suspensión libera en el aire y el pique bota antes de la meta.' },
        { pairs: [
          { id: 'a', left: 'Directa', right: 'Liberación con apoyo en el suelo' },
          { id: 'b', left: 'En suspensión', right: 'Liberación durante el salto' },
          { id: 'c', left: 'Con pique', right: 'Un bote antes de la meta' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.9'], prompt: 'Las manos de la pareja están altas. ¿Qué evidencia corresponde a un pase con salto controlado?' },
        { options: [
          { id: 'a', text: 'Pie contrario, balón por arriba del hombro y liberación en el punto más alto hacia las manos' },
          { id: 'b', text: 'Mismo pie que la mano y pelota soltada después de caer' },
          { id: 'c', text: 'Pelota dirigida a la cara con fuerza máxima' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.9', 'ef:2.1.13'], prompt: 'Comprueba la decisión y la secuencia del pase con salto.' },
        { statements: [
          { text: 'La posición de las manos de la pareja ayuda a elegir altura media o alta.', answer: true },
          { text: 'Una pelota suave puede dirigirse a la cara de la pareja.', answer: false, why: 'Por seguridad, el pase nunca se dirige a la cara.' },
          { text: 'La pelota se libera durante el salto, antes de tocar el suelo.', answer: true },
        ] },
      ),
      cierre({ areas: ['ef'], cnb: ['ef:2.1.9', 'ef:2.1.13'] },
        ['Elijo la altura según quien recibe', 'Uso pie contrario y libero durante el salto', 'Registro seis pases y tres finalizaciones controladas'],
        ['Practicaré con ambas manos a distancia segura', 'Detendré la práctica si el espacio no está despejado']),
    ],
  }),
];
