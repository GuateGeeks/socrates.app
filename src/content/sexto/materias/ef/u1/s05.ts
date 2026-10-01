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
          prompt: 'Usen una pelota suave y cuatro marcas separadas. **Calentamiento breve:** caminen, movilicen hombros y muñecas y ensayen la recepción en W sin pelota. **Prueba bilateral y recorrido cooperativo:** en parejas completen **6 pases adelantados totales** entre las marcas: 3 caminando y 3 trotando. Repartan las recepciones de forma bilateral; después de cada pase, quien lanzó se mueve a la siguiente marca libre. Trabajen sin defensa ni tanteo: si la pelota cae, recuperen el control y continúen desde la marca anterior. Ajusten distancia, velocidad y tamaño de pelota para que ambas personas participen con seguridad. **Vuelta a la calma:** caminen, respiren y relajen brazos.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después de caminar', exercise: { name: 'Recepción y pase bilateral', icon: 'Users', seconds: 60 } },
          { label: 'Después del recorrido', exercise: { name: 'Circuito cooperativo: pasa y muévete', icon: 'Route', seconds: 90 } },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.5'], ambito: 'hacer',
          prompt: 'En un recorrido cooperativo, Juan pasa la pelota y se queda quieto mirando. Su pareja llega a la siguiente marca sin una opción libre. ¿Qué debió hacer Juan?',
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
    title: 'Balonmano: avanzar, pasar y finalizar con control',
    icon: 'Goal',
    minutes: 15,
    gancho: 'Recibes la pelota y la meta está adelante. ¿Cómo enlazas el avance, el pase y la finalización sin romper la regla de los tres pasos?',
    objetivos: ['Ejecutar una secuencia reglada de avance, pase bilateral y finalización en balonmano'],
    resumen: [
      'La secuencia central integra avance, pase y finalización: se dan como máximo tres pasos con la pelota y, para seguir avanzando, se bota antes del paso siguiente.',
      'En el pase por arriba del hombro con salto, el pie contrario impulsa y la pelota se suelta en el punto más alto antes de caer.',
      'El pase se practica con mano izquierda y derecha, a altura media o alta según la posición de quien recibe.',
      'La secuencia termina con una de tres finalizaciones: directa con apoyo, en suspensión durante el salto o con pique antes de la meta.',
    ],
    media: {
      id: 's05-ef-2-balonmano', kind: 'video', title: 'Pase bilateral con salto', aspect: '16:9', duration: 35,
      alt: 'Dos secuencias laterales muestran tres pasos, un bote controlado, un pase con salto bilateral y una finalización segura.',
      brief: 'Video breve de 35 s en cancha escolar. Mostrar una secuencia integrada a velocidad normal y lenta: recibir, dar tres pasos, botar antes de continuar, reunir la pelota y pasar por arriba del hombro con salto; repetir el pase con la otra mano. Cerrar con tres fotogramas rotulados: finalización directa con apoyo, en suspensión durante el salto y con pique antes de la meta. Pelota suave, distancia corta, sin defensa ni partido.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:2.1.13'], ambito: 'conocer',
          prompt: 'Observa cómo una jugada enlaza avance, pase y finalización.' },
        { icon: 'Route', body: 'Quien lleva la pelota avanza con control; quien recibe muestra una zona segura para el pase y completa una finalización acordada sin defensa ni portero.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.9', 'ef:2.1.13'], ambito: 'conocer', title: 'La secuencia reglada',
          prompt: 'La jugada combina avance reglado, pase con salto y finalización.' },
        { icon: 'Route', body: 'La técnica se practica primero sin oposición, con pelota suave y una pareja preparada para recibir.', reveal: [
          { icon: 'Footprints', front: 'Avance y bote', back: 'Da como máximo **3 pasos** con la pelota. Si continúas avanzando, **bota antes del paso siguiente**; reúne la pelota con control para pasar o finalizar.' },
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
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.13', 'ef:2.1.9'], ambito: 'hacer', title: 'Ejemplo resuelto: una secuencia completa',
          prompt: 'Mira cómo Ixchel y Rosa enlazan avance, pase y finalización.' },
        { icon: 'Users', problem: 'Ixchel recibe lejos de la meta. Rosa está libre, muestra las manos altas y tiene espacio para terminar la jugada.',
          steps: [
            { text: 'Ixchel avanza **3 pasos** y **bota la pelota antes del paso siguiente**.' },
            { text: 'Reúne la pelota con control y observa las manos altas de Rosa.' },
            { text: 'Elige la **mano derecha** y se impulsa con el **pie izquierdo**.', why: 'El apoyo es contrario al brazo ejecutor.' },
            { text: 'Pasa por arriba del hombro y suelta en el **punto más alto** hacia Rosa.' },
            { text: 'Rosa recibe y realiza una finalización **con pique**: la pelota bota una vez antes de la meta.' },
            { text: 'En las variantes, Rosa finaliza **directa** con apoyo o **en suspensión** soltando durante el salto.' },
          ],
          answer: 'Secuencia: **3 pasos → bote → pase bilateral con salto → finalización directa, en suspensión o con pique**.',
          tip: 'Alternen la mano del pase y la variante de finalización, siempre sin defensa.' },
      ),
      S.order(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.9', 'ef:2.1.13'], ambito: 'hacer',
          prompt: 'Ordena una secuencia reglada de avance, pase y finalización.',
          hint: 'Primero controla el avance y el bote; después pasa y termina la jugada.',
          explain: 'Recibir → avanzar hasta 3 pasos → botar antes de continuar → pasar con salto → finalizar.' },
        { items: [
          { id: 'x1', text: 'Recibir la pelota con control' },
          { id: 'x2', text: 'Avanzar como máximo 3 pasos' },
          { id: 'x3', text: 'Botar antes del paso siguiente si se continúa' },
          { id: 'x4', text: 'Reunir y pasar por arriba del hombro con salto' },
          { id: 'x5', text: 'Completar la finalización asignada' },
        ], labels: { start: 'Inicio', end: 'Final' } },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.9', 'ef:2.1.13'], ambito: 'hacer',
          prompt: 'Práctica breve en parejas con pelota suave. Realicen **6 secuencias totales**, no series separadas: en cada una, quien inicia avanza hasta **3 pasos**, hace un **bote** antes de continuar, reúne la pelota y completa un pase por arriba del hombro con salto; su pareja recibe y finaliza. Alternen **3 pases con la izquierda y 3 con la derecha**. Usen dos veces cada finalización: **directa, en suspensión y con pique**. Lleven un **registro de una fila por secuencia**: regla de pasos y bote, mano y pie contrario, pase a zona segura y variante terminada. Sin defensa ni portero; mantengan distancia y nunca apunten a la cara. La secuencia puede hacerse caminando y sin salto desde una posición estable. Al final, caminen y relajen hombros.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después de 3 secuencias', exercise: { name: 'Avance, bote, pase y finalización', icon: 'Route', seconds: 90 } },
          { label: 'Después de 6 secuencias', exercise: { name: 'Secuencias bilaterales completas', icon: 'Goal', seconds: 90 } },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.13'], ambito: 'hacer',
          prompt: 'En una secuencia nueva, Rosa avanza 3 pasos y empieza un cuarto sin botar antes de realizar una finalización directa. ¿Qué ajuste conserva la secuencia reglada?',
          explain: 'Si continúa después de 3 pasos, debe botar antes del paso siguiente; la finalización directa puede mantenerse.' },
        { options: [
          { id: 'a', text: 'Botar antes del cuarto paso y conservar la finalización directa' },
          { id: 'b', text: 'Dar el cuarto paso sin botar porque la meta está cerca', feedback: 'La cercanía de la meta no elimina la regla de pasos.' },
          { id: 'c', text: 'Lanzar la pelota a la cara para terminar rápido', feedback: 'La seguridad se mantiene durante toda la secuencia.' },
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
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.9', 'ef:2.1.13'], prompt: 'Comprueba la regla de 3 pasos y bote y las tres finalizaciones de la secuencia.' },
        { statements: [
          { text: 'Si se continúa avanzando después de 3 pasos, se bota antes del paso siguiente.', answer: true },
          { text: 'La finalización directa se libera con apoyo en el suelo.', answer: true },
          { text: 'En suspensión se suelta la pelota después de caer.', answer: false, why: 'Se suelta durante el salto, antes de caer.' },
          { text: 'En la finalización con pique, la pelota bota una vez antes de la meta.', answer: true },
        ] },
      ),
      cierre({ areas: ['ef'], cnb: ['ef:2.1.9', 'ef:2.1.13'] },
        ['Respeto 3 pasos y bote antes de continuar', 'Uso ambas manos con pie contrario', 'Completo seis secuencias con las tres finalizaciones'],
        ['Practicaré con ambas manos a distancia segura', 'Detendré la práctica si el espacio no está despejado']),
    ],
  }),
];
