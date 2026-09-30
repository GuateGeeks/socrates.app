/**
 * Educación Física · Unidad 1 · Semana 4 — Lanzamientos.
 * Progresión: la técnica del lanzamiento de objetos de mediano peso y cómo ajustar fuerza y
 * dirección para distintas distancias y alturas → cinco formas de lanzar (rodado, a dos manos de
 * pecho, por arriba del hombro, en suspensión y con pique), en movimiento y con cada mano.
 * (El contenido ef:1.4.14 —estructuras rítmicas sencillas— se trabajó en la semana 3.)
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Lanzar a distintas distancias y alturas ───────────────────────── */
  lesson({
    id: 's04-ef-1',
    title: 'Lanzar lejos, alto y con puntería',
    icon: 'Target',
    minutes: 15,
    gancho: 'Para lanzar una bolsita de frijol dentro de un canasto a 2 pasos o a 8 pasos, ¿haces el mismo movimiento?',
    objetivos: [
      'Aplicar la técnica del lanzamiento por encima del hombro con objetos de mediano peso',
      'Ajustar la fuerza y la dirección de salida para lanzar a distintas distancias y alturas',
      'Lanzar con seguridad y registrar tus resultados para mejorar',
    ],
    resumen: [
      'Un objeto de mediano peso (pelota de trapo, bolsita de arena o de frijol bien cerrada) necesita la fuerza de todo el cuerpo, no solo del brazo.',
      'Técnica por encima del hombro: de lado a la meta, pie contrario al brazo que lanza adelante; el peso pasa del pie de atrás al de adelante, gira el tronco, el codo sube a la altura del hombro y el brazo sigue el movimiento al soltar.',
      'Para llegar más lejos: más impulso de piernas y tronco y salida en diagonal hacia arriba. Para más altura: salida más vertical. Para puntería de cerca: menos fuerza y mirada fija en la meta.',
      'Seguridad: lanza solo cuando no haya nadie en la dirección del lanzamiento y recoge los objetos todos juntos, cuando se dé la señal.',
    ],
    media: {
      id: 's04-ef-1-tecnica', kind: 'video', title: 'Técnica del lanzamiento por encima del hombro', aspect: '9:16', duration: 50,
      alt: 'Una niña diestra se pone de lado, adelanta el pie izquierdo, lleva el brazo atrás, pasa el peso adelante girando el tronco y lanza una pelota de trapo que vuela en diagonal hacia un canasto.',
      brief: 'Video vertical de 50 s en un campo o patio. Una niña diestra (ropa deportiva, rostro no protagonista) lanza una pelota de trapo o bolsita de arena: vista lateral en cámara lenta con 5 rótulos numerados: "1. De lado", "2. Pie contrario adelante", "3. Brazo atrás, codo alto", "4. Peso adelante y giro de tronco", "5. Suelta y sigue el movimiento". Luego tres lanzamientos a canastos a 2, 4 y 6 pasos, con una línea punteada que muestra la trayectoria (más alta y larga para el más lejano). Repetición con un niño zurdo (pie derecho adelante). Aviso "Nadie en la zona de lanzamiento".',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:2.1.2'], ambito: 'conocer',
          prompt: 'Prueba a lanzar una bolsita de frijol (o calcetín enrollado) **solo con el brazo**, sin mover los pies. Luego lánzala dando un paso adelante y girando el cuerpo. ¿Cuándo llega más lejos?',
          explain: 'Llega más lejos cuando usas **todo el cuerpo**: piernas, tronco y brazo trabajan en cadena. El brazo solo tiene poca fuerza.' },
        { options: [
          { id: 'a', text: 'Solo con el brazo', icon: 'Hand', feedback: 'El brazo solo aporta poca fuerza: le falta el impulso de las piernas y del tronco.' },
          { id: 'b', text: 'Con el paso y el giro del cuerpo', icon: 'RotateCw' },
          { id: 'c', text: 'Llega igual de las dos formas', icon: 'Minus', feedback: 'Repite la prueba y fíjate bien: la diferencia suele ser grande.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.2'], ambito: 'hacer', title: 'La técnica en cinco pasos',
          prompt: 'Mira el video y toca cada paso. Si eres **zurda o zurdo**, cambia los lados: pie **derecho** adelante.' },
        { icon: 'Target', body: 'El lanzamiento es una **cadena**: la fuerza nace en las piernas, pasa por el tronco y sale por el brazo.', reveal: [
          { icon: 'PersonStanding', front: '1. De lado', back: 'Ponte **de lado** a la meta, con el hombro contrario al brazo que lanza apuntando hacia ella.' },
          { icon: 'Footprints', front: '2. Pie contrario adelante', back: 'Si lanzas con la derecha, el pie **izquierdo** va adelante (y al revés). Así el cuerpo puede girar.' },
          { icon: 'ArrowUp', front: '3. Brazo atrás, codo alto', back: 'Lleva el objeto atrás con el **codo a la altura del hombro** o más arriba.' },
          { icon: 'RotateCw', front: '4. Peso adelante y giro', back: 'Pasa el peso del pie de atrás al de adelante y **gira el tronco** hacia la meta.' },
          { icon: 'Target', front: '5. Suelta y sigue', back: 'Suelta el objeto adelante y deja que el brazo **siga el movimiento** hacia abajo, cruzando el cuerpo. Mirada en la meta.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.2'], ambito: 'conocer', title: 'Distancia, altura y puntería',
          prompt: 'No todos los lanzamientos buscan lo mismo. Ajusta **dos cosas**: la **fuerza** y la **dirección de salida**. Toca cada tarjeta.',
          media: {
            id: 's04-ef-1-trayectorias', kind: 'diagram', title: 'Tres trayectorias', aspect: '16:9',
            alt: 'Una niña de perfil lanza tres veces: una curva baja y corta hacia un canasto cercano, una curva en diagonal que llega lejos y una curva muy alta que pasa sobre una cuerda y cae en un canasto.',
            brief: 'Diagrama lateral sobre fondo claro con suelo marcado en pasos (1 a 8). Desde la mano de una niña salen tres trayectorias curvas punteadas de colores: (1) verde, corta y baja, termina en un canasto a 2 pasos: "puntería, poca fuerza"; (2) azul, salida en diagonal, llega a 7 pasos: "lejos, salida diagonal"; (3) naranja, salida casi vertical, pasa sobre una cuerda alta y cae en un canasto a 3 pasos: "alto". Flechas pequeñas indican el ángulo de salida. Rótulos grandes.',
          } },
        { icon: 'Route', body: 'La trayectoria del objeto es una **curva**: sube, llega a un punto alto y baja.', reveal: [
          { icon: 'MoveHorizontal', front: 'Lejos', back: 'Mucha fuerza de piernas y tronco, y salida **en diagonal hacia arriba** (a medio camino entre horizontal y vertical).' },
          { icon: 'ArrowUp', front: 'Alto', back: 'Salida más **vertical**, para pasar por encima de un obstáculo o caer dentro de un recipiente alto.' },
          { icon: 'Target', front: 'Puntería de cerca', back: '**Menos fuerza**, movimiento más corto y controlado, mirada fija en el centro de la meta.' },
          { icon: 'Scale', front: 'Mediano peso', back: 'Un objeto más pesado necesita **más impulso** del cuerpo y llega menos lejos con la misma fuerza.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto: tiro a la troje',
          prompt: 'Mira cómo Lucía ajusta su lanzamiento para tres distancias.' },
        { icon: 'ShoppingBasket', problem: 'Lucía lanza una bolsita de frijol a un canasto grande colocado a **2**, **4** y **6** pasos. En los primeros intentos, a 2 pasos se le pasa y a 6 no llega.',
          steps: [
            { text: '**A 2 pasos** se le pasa porque usa demasiada fuerza. Acorta el movimiento: brazo menos atrás y casi sin giro de tronco.', why: 'De cerca importa más el control que la fuerza.' },
            { text: '**A 4 pasos** usa el paso adelante y un giro medio; la bolsita sale en diagonal suave.' },
            { text: '**A 6 pasos** no llegaba porque lanzaba "plano". Ahora usa la técnica completa: pie contrario adelante, peso atrás → adelante, giro fuerte y salida **en diagonal hacia arriba**.', why: 'Una salida más alta da más tiempo de vuelo para recorrer más distancia.' },
            { text: 'Anota cuántos aciertos tiene de 5 intentos en cada distancia para ver su progreso.' },
          ],
          answer: 'Lucía ajusta la **fuerza** (menos de cerca, más de lejos) y la **dirección de salida** (más diagonal para distancias largas).',
          tip: 'Cambia una sola cosa por intento: así sabes qué funcionó.' },
      ),
      S.order(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.2'], ambito: 'hacer',
          prompt: 'Ordena los pasos del lanzamiento por encima del hombro.',
          hint: 'Primero la posición, luego el brazo, después el peso y el giro, y al final soltar.',
          explain: 'De lado → pie contrario adelante → brazo atrás con codo alto → peso adelante y giro → soltar y seguir el movimiento.' },
        { items: [
          { id: 'a', text: 'Ponerse de lado a la meta' },
          { id: 'b', text: 'Adelantar el pie contrario al brazo que lanza' },
          { id: 'c', text: 'Llevar el brazo atrás con el codo alto' },
          { id: 'd', text: 'Pasar el peso adelante y girar el tronco' },
          { id: 'e', text: 'Soltar y seguir el movimiento con el brazo' },
        ], labels: { start: 'Primero', end: 'Al final' } },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.2'], ambito: 'hacer',
          prompt: '¡Tiro a la troje! Usa una bolsita de frijol o arena bien cerrada, o una pelota de trapo, y un canasto, bote o llanta como meta. **Calentamiento:** rotación de hombros, brazos y muñecas, y 10 lanzamientos suaves a una pared. **Parte principal:** 5 lanzamientos desde 2 pasos, 5 desde 4 y 5 desde 6; anota tus aciertos. Luego lanza por encima de una cuerda o palo a la altura de tu cabeza (lanzamiento alto). **Seguridad:** nadie frente a ti; recogen todos juntos. **Poco espacio:** usa distancias de 1, 2 y 3 pasos y una bola de papel. **Adaptación:** se puede lanzar sentado; acerca la meta si lo necesitas. **Vuelta a la calma:** estira brazos y hombros.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después del calentamiento', exercise: { name: 'Hombros, brazos y lanzamientos suaves', icon: 'RotateCw', seconds: 60 } },
          { label: 'Después del tiro a la troje', exercise: { name: 'Lanzar a 2, 4 y 6 pasos', icon: 'Target', seconds: 90 } },
        ] },
      ),
      S.chart(
        { fase: 'aplicar', areas: ['ef', 'mat'], cnb: ['ef:2.1.2'], ambito: 'hacer',
          prompt: 'Registrar resultados ayuda a mejorar. **Supongamos** que Lucía acertó 5 de 5 a 2 pasos, 3 de 5 a 4 pasos y 1 de 5 a 6 pasos. Construye su gráfica de barras.',
          explain: 'La gráfica muestra que Lucía necesita practicar más a 6 pasos: ahí debe usar la técnica completa y una salida más diagonal.' },
        { categories: [
          { id: 'd2', label: '2 pasos', icon: 'Target' },
          { id: 'd4', label: '4 pasos', icon: 'Target' },
          { id: 'd6', label: '6 pasos', icon: 'Target' },
        ], data: [5, 3, 1], max: 5, step: 1, unit: 'aciertos', source: 'Aciertos de Lucía (de 5 intentos)' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.2'], ambito: 'hacer',
          prompt: 'Carlos es diestro. Al lanzar adelanta el pie **derecho** y la pelota no llega lejos. ¿Qué debe corregir?',
          explain: 'Con el pie del mismo lado adelante, el tronco no puede girar. Debe adelantar el pie **izquierdo** (contrario al brazo que lanza).' },
        { options: [
          { id: 'a', text: 'Adelantar el pie izquierdo, contrario al brazo que lanza' },
          { id: 'b', text: 'Lanzar con los dos pies juntos', feedback: 'Con los pies juntos no hay paso ni transferencia de peso.' },
          { id: 'c', text: 'Doblar menos el codo y lanzar solo con la muñeca', feedback: 'Así tendría aún menos fuerza.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.2'], prompt: 'Quieres que una bolsita de arena llegue **lo más lejos posible**. ¿Qué haces?' },
        { options: [
          { id: 'a', text: 'Uso todo el cuerpo y la lanzo en diagonal hacia arriba' },
          { id: 'b', text: 'La lanzo solo con la muñeca, bien recta hacia abajo' },
          { id: 'c', text: 'La lanzo totalmente hacia arriba' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Para lanzar cerca y con puntería se usa menos fuerza y un movimiento más corto.', answer: true },
          { text: 'Se puede lanzar aunque haya compañeros en la dirección del lanzamiento, si se lanza suave.', answer: false, why: 'Nunca se lanza si hay alguien en la dirección del lanzamiento.' },
          { text: 'En el lanzamiento, el peso pasa del pie de atrás al pie de adelante.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Cinco formas de lanzar ───────────────────────── */
  lesson({
    id: 's04-ef-2',
    title: 'Cinco formas de lanzar',
    icon: 'Send',
    minutes: 15,
    gancho: 'En el recreo, para pasar la pelota a alguien cercano, a alguien lejos o por encima de un compañero alto, ¿usas siempre el mismo lanzamiento?',
    objetivos: [
      'Reconocer y practicar cinco formas de lanzar: rodado, a dos manos de pecho, por arriba del hombro, en suspensión y con pique',
      'Elegir el lanzamiento adecuado según la distancia, la altura y los obstáculos',
      'Lanzar en movimiento y alternando cada mano',
    ],
    resumen: [
      'Rodado: la pelota va por el suelo; es seguro y preciso para distancias cortas (como en el boliche).',
      'A dos manos de pecho: desde el pecho, pulgares detrás de la pelota, se empuja estirando los brazos; rápido y preciso para pases cortos y medios.',
      'Por arriba del hombro (directo): con una mano, para distancias largas. En suspensión: el mismo lanzamiento pero saltando, para lanzar por encima de un defensor.',
      'Con pique: la pelota bota una vez en el suelo antes de llegar al compañero, más cerca de él que de ti; sirve para pasar por debajo de los brazos de un defensor.',
      'Lanzar en movimiento exige coordinar pasos y brazos; practicar con cada mano te hace más completo.',
    ],
    media: {
      id: 's04-ef-2-cinco', kind: 'animation', title: 'Cinco lanzamientos', aspect: '16:9', duration: 60,
      alt: 'Cinco escenas cortas de dos niñas pasándose una pelota: rodando por el suelo, desde el pecho con dos manos, por arriba del hombro, saltando y con un bote en el suelo.',
      brief: 'Animación 2D de 60 s, cinco escenas de 11 s con el mismo par de personajes (una niña maya con trenza y una niña garífuna, ropa deportiva genérica). (1) Rodado: flexión de rodillas, balanceo del brazo abajo, pelota rodando. (2) Pecho a dos manos: pulgares atrás, extensión de brazos, muñecas giran hacia afuera. (3) Por arriba del hombro: pase largo, técnica de 5 pasos. (4) En suspensión: carrera, salto con impulso, lanzamiento en el punto más alto, por encima de un defensor. (5) Con pique: bote en el suelo a unos dos tercios del camino hacia la compañera, por debajo de los brazos de un defensor. Línea punteada de trayectoria en cada caso y rótulo con el nombre.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:2.1.3'], ambito: 'conocer',
          prompt: 'Un compañero muy alto está entre tú y tu amiga, con los brazos levantados. ¿Cómo le pasarías la pelota?',
          explain: 'Una buena opción es un pase **con pique**: la pelota bota en el suelo y pasa **por debajo** de sus brazos. Hoy conocerás cinco formas de lanzar y cuándo usar cada una.' },
        { options: [
          { id: 'a', text: 'Directo a la altura de su cara', icon: 'ArrowRight', feedback: 'Pasaría justo por donde están sus manos: la puede interceptar.' },
          { id: 'b', text: 'Haciéndola botar en el suelo para que pase por debajo de sus brazos', icon: 'ArrowDown' },
          { id: 'c', text: 'Esperar a que se vaya', icon: 'Hourglass', feedback: 'En un juego no hay tiempo de esperar: busca una forma de lanzar que lo supere.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.3'], ambito: 'hacer', title: 'Tres lanzamientos básicos',
          prompt: 'Mira la animación y toca cada tarjeta. Prueba el movimiento con una pelota imaginaria.' },
        { icon: 'Target', body: 'Cada lanzamiento tiene su técnica y su momento. Empieza por estos tres.', reveal: [
          { icon: 'Circle', front: 'Rodado', back: 'Dobla las rodillas, balancea el brazo **por abajo** y suelta la pelota **cerca del suelo** para que ruede. Seguro y preciso de cerca.' },
          { icon: 'Hand', front: 'A dos manos de pecho', back: 'Pelota frente al pecho, **pulgares detrás**, codos abiertos. **Estira los brazos** hacia tu compañero y al final gira las muñecas hacia afuera. Rápido y preciso.' },
          { icon: 'ArrowUpRight', front: 'Por arriba del hombro', back: 'Con **una mano**, como aprendiste el martes: de lado, pie contrario adelante, codo alto, giro. Para **distancias largas**.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.3'], ambito: 'hacer', title: 'Dos lanzamientos para superar defensas',
          prompt: 'En los juegos con defensores, estas dos formas son muy útiles. Toca cada tarjeta.' },
        { icon: 'Shield', body: 'Elige según **dónde** tiene los brazos el defensor: si los tiene arriba, pasa por abajo; si los tiene abajo, pasa por arriba.', reveal: [
          { icon: 'ArrowDown', front: 'Con pique', back: 'Lanza la pelota hacia el suelo para que **bote una vez** y llegue a tu compañero a la altura de la cintura. El bote va **más cerca de quien recibe** (a unos dos tercios del camino). Puedes hacerlo a dos manos o a una mano.' },
          { icon: 'ArrowUp', front: 'En suspensión', back: 'Corre, **salta** con impulso y lanza por arriba del hombro en el **punto más alto** del salto. Así lanzas por encima de un defensor.' },
          { icon: 'Footprints', front: 'En movimiento', back: 'Lanzar mientras te desplazas exige coordinar pasos y brazo: primero camina, luego trota y al final corre.' },
          { icon: 'RefreshCw', front: 'Alternar manos', back: 'Practica cada lanzamiento de una mano con la **derecha** y con la **izquierda**: tendrás más opciones en el juego.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.3'], ambito: 'hacer', title: 'Ejemplo resuelto: elegir el lanzamiento',
          prompt: 'Mira cómo Keyla decide qué lanzamiento usar en cuatro momentos de un juego de pases.' },
        { icon: 'Brain', problem: 'Keyla tiene la pelota en cuatro situaciones distintas. ¿Qué lanzamiento conviene en cada una?',
          steps: [
            { text: '**Situación 1:** su compañera está a 3 pasos y no hay nadie en medio → **a dos manos de pecho**.', why: 'Es rápido, preciso y fácil de recibir a corta distancia.' },
            { text: '**Situación 2:** un defensor está en medio con los brazos arriba → **con pique**, botando la pelota cerca de su compañera.', why: 'La pelota pasa por debajo de los brazos del defensor.' },
            { text: '**Situación 3:** su compañero está libre, lejos, al otro lado de la cancha → **por arriba del hombro**.', why: 'Es el lanzamiento que llega más lejos.' },
            { text: '**Situación 4:** un defensor bajito está muy cerca, con los brazos abajo → **en suspensión**: salta y lanza por encima.' },
          ],
          answer: 'Keyla elige según **distancia**, **obstáculos** y **posición de los brazos del defensor**.',
          tip: 'Antes de lanzar, mira a tu compañero y al defensor: la decisión es parte de la técnica.' },
      ),
      S.match(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.3'], ambito: 'conocer',
          prompt: 'Une cada lanzamiento con su descripción.',
          hint: 'Recuerda dónde va la pelota: por el suelo, desde el pecho, por arriba, saltando o con un bote.',
          explain: 'Rodado = por el suelo; pecho = empujar con dos manos; arriba del hombro = una mano, largo; suspensión = saltando; pique = con un bote.' },
        { leftTitle: 'Lanzamiento', rightTitle: 'Cómo es', pairs: [
          { id: 'r', left: 'Rodado', right: 'La pelota va por el suelo' },
          { id: 'p', left: 'A dos manos de pecho', right: 'Se empuja desde el pecho estirando los brazos' },
          { id: 'h', left: 'Por arriba del hombro', right: 'Con una mano, para llegar lejos' },
          { id: 's', left: 'En suspensión', right: 'Se lanza en el punto más alto de un salto' },
          { id: 'q', left: 'Con pique', right: 'La pelota bota una vez antes de llegar' },
        ] },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.3'], ambito: 'hacer',
          prompt: '¡Estaciones de lanzamiento! En parejas (o contra una pared) con una pelota que bote. **Calentamiento:** hombros, muñecas y 10 botes con cada mano. **Estación 1:** 10 rodados y 10 pases de pecho a 3 pasos. **Estación 2:** 10 pases con pique a 4 pasos (bote cerca de quien recibe) y 10 por arriba del hombro a 6 pasos, **5 con cada mano**. **Estación 3 (en movimiento):** caminen en paralelo pasándose la pelota de pecho; luego trotando. Si hay espacio, 5 lanzamientos en suspensión a un aro o una caja. **Poco espacio:** contra una pared, más cerca y con pelota suave. **Adaptación:** todos los pases se pueden hacer sentado. **Vuelta a la calma:** estira brazos y toma agua.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después de las estaciones 1 y 2', exercise: { name: 'Rodado, pecho, pique y arriba del hombro', icon: 'Target', seconds: 90 } },
          { label: 'Después de lanzar en movimiento', exercise: { name: 'Pases caminando y trotando', icon: 'Footprints', seconds: 60 } },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.3'], ambito: 'hacer',
          prompt: '¿Qué lanzamiento conviene en cada situación? Clasifica.',
          explain: 'Corto y libre → pecho; defensor con brazos arriba → pique; lejos → por arriba del hombro.' },
        { buckets: [
          { id: 'p', label: 'De pecho', icon: 'Hand', color: 'var(--area-ef)' },
          { id: 'q', label: 'Con pique', icon: 'ArrowDown', color: 'var(--c-maiz-strong)' },
          { id: 'h', label: 'Por arriba del hombro', icon: 'ArrowUpRight', color: 'var(--c-ok)' },
        ], items: [
          { id: 'x1', text: 'Pase corto a una compañera libre a 3 pasos', bucket: 'p' },
          { id: 'x2', text: 'Un defensor con los brazos arriba está entre ustedes', bucket: 'q' },
          { id: 'x3', text: 'Tu compañero está libre al otro lado de la cancha', bucket: 'h' },
          { id: 'x4', text: 'Pase rápido a alguien cercano mientras caminan juntos', bucket: 'p' },
          { id: 'x5', text: 'Pasar por debajo de los brazos de quien marca', bucket: 'q' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.3'], ambito: 'hacer',
          prompt: 'En el pase con pique, la pelota de Ana llega a los tobillos de su compañero y él no la puede atrapar. ¿Qué debe cambiar?',
          explain: 'El bote debe ir **más cerca de quien recibe** (a unos dos tercios del camino) para que la pelota suba hasta su cintura.' },
        { options: [
          { id: 'a', text: 'Hacer que la pelota bote más cerca de su compañero' },
          { id: 'b', text: 'Hacer que la pelota bote justo frente a sus propios pies', feedback: 'Así la pelota pierde fuerza y llega aún más baja.' },
          { id: 'c', text: 'Lanzar la pelota sin que bote', feedback: 'Entonces ya no sería un pase con pique.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.3'], prompt: 'Para un pase **corto y seguro** a un compañero cercano y libre, ¿qué lanzamiento conviene?' },
        { options: [
          { id: 'a', text: 'A dos manos desde el pecho' },
          { id: 'b', text: 'En suspensión, con salto' },
          { id: 'c', text: 'Por arriba del hombro con toda la fuerza' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.3'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En un lanzamiento con pique, la pelota bota una vez en el suelo antes de llegar al compañero.', answer: true },
          { text: 'El lanzamiento en suspensión se hace en el punto más alto de un salto.', answer: true },
          { text: 'El lanzamiento rodado es el mejor para pasar por encima de un defensor alto.', answer: false, why: 'El rodado va por el suelo; para superar a un defensor alto conviene el pique o, si tiene los brazos abajo, la suspensión.' },
        ] },
      ),
      cierre({ areas: ['ef'], cnb: ['ef:2.1.3'] },
        ['Lanzo con todo el cuerpo y ajusto la fuerza según la distancia', 'Reconozco cinco formas de lanzar', 'Elijo el lanzamiento según la situación del juego'],
        ['Practicaré el tiro a la troje y anotaré mis aciertos', 'Lanzaré también con mi mano no dominante', 'Revisaré que no haya nadie en la zona antes de lanzar']),
    ],
  }),
];
