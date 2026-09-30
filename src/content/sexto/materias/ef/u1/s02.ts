/**
 * Educación Física · Unidad 1 · Semana 2 — Carreras y saltos coordinados.
 * Progresión: percibir y controlar la aceleración y la desaceleración (salida, frenado seguro con
 * flexión de rodillas) → combinar habilidades simples (correr, saltar, girar, lanzar) en habilidades
 * genéricas, usando flexión, extensión y rotación.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Acelerar y frenar ───────────────────────── */
  lesson({
    id: 's02-ef-1',
    title: 'Acelerar y frenar con control',
    icon: 'Gauge',
    minutes: 15,
    gancho: 'Cuando juegas tenta, ganas si arrancas rápido… y no te caes si sabes frenar. ¿Cómo lo hace tu cuerpo?',
    objetivos: [
      'Percibir la aceleración (ir cada vez más rápido) y la desaceleración (ir cada vez más lento)',
      'Aplicar la técnica de salida y de frenado seguro',
      'Controlar los cambios de velocidad en juegos de carrera',
    ],
    resumen: [
      'Acelerar es aumentar la velocidad poco a poco; desacelerar es disminuirla hasta detenerse.',
      'Para acelerar: cuerpo inclinado hacia adelante, pasos cortos y rápidos al inicio que se van alargando, brazos que se mueven fuerte de adelante hacia atrás.',
      'Para frenar con seguridad: pasos cortos, bajar el centro de gravedad doblando las rodillas (flexión), tronco un poco hacia atrás y apoyar todo el pie.',
      'Un frenado brusco con las piernas rectas puede provocar caídas y lastimar rodillas y tobillos.',
    ],
    media: {
      id: 's02-ef-1-frenado', kind: 'video', title: 'Arrancar y frenar', aspect: '9:16', duration: 45,
      alt: 'Una niña arranca inclinada hacia adelante con pasos cortos que se alargan; luego frena con pasos cortos, rodillas dobladas y tronco un poco hacia atrás, sin resbalar.',
      brief: 'Video vertical de 45 s en el patio de una escuela pública, suelo de cemento seco. Parte 1 "Acelera": salida de pie con un pie adelante, cuerpo inclinado, braceo fuerte; cámara lateral y rótulos "pasos cortos → pasos largos". Parte 2 "Desacelera": cámara lenta del frenado en 4-5 pasos cortos, rodillas flexionadas, tronco ligeramente atrás; rótulo "baja tu centro". Parte 3: contraejemplo breve (animado, no real) de frenado con piernas rectas y resbalón, con una X roja. Aviso: "Practica en suelo seco y despejado".',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:1.3.3'], ambito: 'conocer',
          prompt: 'Una camioneta sale de la parada. ¿Cómo cambia su velocidad en los primeros segundos?',
          explain: 'Va **aumentando la velocidad poco a poco**: está **acelerando**. Al llegar a la siguiente parada hace lo contrario: **desacelera**. Tu cuerpo hace lo mismo al correr.' },
        { options: [
          { id: 'a', text: 'Arranca a toda velocidad de golpe', icon: 'Zap', feedback: 'Nada pasa de quieto a muy rápido de golpe: la velocidad aumenta poco a poco.' },
          { id: 'b', text: 'Aumenta la velocidad poco a poco', icon: 'TrendingUp' },
          { id: 'c', text: 'Siempre va a la misma velocidad', icon: 'Minus', feedback: 'Al salir de la parada su velocidad cambia: empieza en cero.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.3.3'], ambito: 'conocer', title: 'Acelerar y desacelerar',
          prompt: 'La **velocidad** es qué tan rápido te mueves. Cuando cambia, sientes el cambio en todo el cuerpo. Toca cada tarjeta.' },
        { icon: 'Gauge', body: 'Percibir tu propia velocidad te ayuda a **controlar** tu cuerpo en juegos y deportes.', reveal: [
          { icon: 'TrendingUp', front: 'Aceleración', back: 'Aumentar la velocidad **poco a poco**. Sientes que el cuerpo "se va hacia adelante" y que tus pasos se alargan.' },
          { icon: 'TrendingDown', front: 'Desaceleración', back: 'Disminuir la velocidad hasta detenerte. Sientes que el cuerpo "quiere seguir" y debes frenarlo.' },
          { icon: 'Timer', front: 'Velocidad constante', back: 'Mantener el mismo ritmo, como en un trote largo. Tus pasos son iguales y regulares.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.3.3', 'ef:1.3.6'], ambito: 'hacer', title: 'La técnica: salir y frenar',
          prompt: 'Mira el video y toca cada tarjeta. Fíjate en las **rodillas** y en la **inclinación del cuerpo**.' },
        { icon: 'Footprints', body: 'Frenar bien es tan importante como arrancar rápido: **evita caídas y lesiones**.', reveal: [
          { icon: 'ArrowRight', front: 'Salida', back: 'Un pie adelante y otro atrás, rodillas un poco dobladas, **cuerpo inclinado hacia adelante**. Empuja fuerte con el pie de atrás.' },
          { icon: 'TrendingUp', front: 'Acelerar', back: 'Primeros pasos **cortos y rápidos**, que se van **alargando**. Mueve los brazos con fuerza, codos doblados, de adelante hacia atrás.' },
          { icon: 'ArrowDown', front: 'Frenar', back: 'Pasos **cortos**, **dobla las rodillas** (flexión) para bajar tu centro de gravedad y lleva el tronco **un poco hacia atrás**.' },
          { icon: 'X', front: 'Error frecuente', back: 'Frenar de golpe con las **piernas rectas**: el cuerpo sigue hacia adelante, puedes resbalar y lastimarte rodillas o tobillos.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.3.3'], ambito: 'hacer', title: 'Ejemplo resuelto: la carrera del mandado',
          prompt: 'Mira cómo María planifica una carrera de 20 pasos que termina en una línea donde debe detenerse sin pasarse.' },
        { icon: 'Route', problem: 'María debe correr hasta la tienda (a 20 pasos) y detenerse **justo** en la línea de la puerta, sin pasarse ni caerse.',
          steps: [
            { text: '**Pasos 1-5:** sale inclinada hacia adelante, con pasos cortos y rápidos: **acelera**.' },
            { text: '**Pasos 6-14:** ya va rápido; mantiene la velocidad con pasos largos y braceo.' },
            { text: '**Pasos 15-20:** empieza a **desacelerar** antes de llegar: acorta los pasos, dobla las rodillas y lleva el tronco un poco atrás.', why: 'Si espera hasta la línea para frenar, su cuerpo seguirá de largo.' },
            { text: 'Se detiene en la línea con **ambos pies firmes** y rodillas dobladas.' },
          ],
          answer: 'María **acelera** al inicio, **mantiene** en el medio y **desacelera con anticipación** para detenerse con control.',
          tip: 'Mientras más rápido vas, antes debes empezar a frenar.' },
      ),
      S.order(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.3.3', 'ef:1.3.6'], ambito: 'hacer',
          prompt: 'Ordena las fases de una carrera **de la salida al frenado**, como la de María.',
          hint: 'Primero la posición de salida; después se acelera, se mantiene la velocidad y al final se frena.',
          explain: 'Posición de salida → pasos cortos y rápidos (acelerar) → pasos largos (mantener) → acortar pasos y doblar rodillas (desacelerar) → detenerse con ambos pies firmes.' },
        { items: [
          { id: 'a', text: 'Un pie adelante y el cuerpo inclinado hacia adelante' },
          { id: 'b', text: 'Pasos cortos y rápidos que se van alargando' },
          { id: 'c', text: 'Pasos largos a velocidad constante' },
          { id: 'd', text: 'Acortar los pasos y doblar las rodillas, con el tronco un poco atrás' },
          { id: 'e', text: 'Detenerse con los dos pies firmes' },
        ], labels: { start: 'Primero', end: 'Al final' } },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.3.3'], ambito: 'hacer',
          prompt: '¡Juego del semáforo! Pide a alguien que diga los colores (o usa tarjetas). **Calentamiento:** trote suave 1 minuto y rotación de tobillos. **Juego:** **verde** = acelera hasta correr; **amarillo** = desacelera hasta caminar; **rojo** = frena con la técnica y quédate quieto. Repite muchas veces. **Poco espacio:** hazlo en tu lugar (trote rápido, lento, alto). **Adaptación:** en silla de ruedas, acelera y frena empujando las ruedas, o hazlo con los brazos. Termina caminando y tomando agua.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después del calentamiento', exercise: { name: 'Trote suave y tobillos', icon: 'Footprints', seconds: 60 } },
          { label: 'Después del juego del semáforo', exercise: { name: 'Verde acelera, amarillo desacelera, rojo frena', icon: 'Gauge', seconds: 90 } },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.3.3'], ambito: 'conocer',
          prompt: 'Clasifica cada situación del juego: ¿aceleración o desaceleración?',
          explain: 'Aumentar la velocidad es acelerar; disminuirla es desacelerar.' },
        { buckets: [
          { id: 'a', label: 'Aceleración', icon: 'TrendingUp', color: 'var(--area-ef)' },
          { id: 'd', label: 'Desaceleración', icon: 'TrendingDown', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'Salir corriendo cuando te van a tentar', bucket: 'a' },
          { id: 'x2', text: 'Llegar a la base y detenerte', bucket: 'd' },
          { id: 'x3', text: 'Pasar de caminar a trotar', bucket: 'a' },
          { id: 'x4', text: 'Ir más despacio al acercarte a una esquina', bucket: 'd' },
          { id: 'x5', text: 'Arrancar para alcanzar una pelota', bucket: 'a' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.3.3', 'ef:1.3.6'], ambito: 'ser',
          prompt: 'Jorge corre muy rápido hacia la pared del salón y quiere frenar a un paso de ella con las piernas rectas. ¿Qué le aconsejas?',
          explain: 'Hay que desacelerar con anticipación y con la técnica: pasos cortos y rodillas dobladas. Correr hacia una pared es peligroso: la meta debe estar lejos de obstáculos.' },
        { options: [
          { id: 'a', text: 'Que empiece a frenar antes, con pasos cortos y rodillas dobladas, y que ponga la meta lejos de la pared' },
          { id: 'b', text: 'Que ponga las manos adelante para frenar con la pared', feedback: 'Chocar con las manos contra la pared puede lastimar muñecas y brazos.' },
          { id: 'c', text: 'Que corra más rápido para terminar pronto', feedback: 'Más velocidad necesita más distancia para frenar.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.3'], prompt: '¿Qué es **desacelerar**?' },
        { options: [
          { id: 'a', text: 'Aumentar la velocidad poco a poco' },
          { id: 'b', text: 'Disminuir la velocidad hasta detenerse' },
          { id: 'c', text: 'Mantener siempre la misma velocidad' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.3', 'ef:1.3.6'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Para frenar con seguridad conviene doblar las rodillas.', answer: true },
          { text: 'Al acelerar, los primeros pasos deben ser largos y lentos.', answer: false, why: 'Los primeros pasos son cortos y rápidos; luego se alargan.' },
          { text: 'Mientras más rápido corres, antes debes empezar a frenar.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Combinar habilidades ───────────────────────── */
  lesson({
    id: 's02-ef-2',
    title: 'Combinar habilidades: correr, saltar y girar',
    icon: 'Footprints',
    minutes: 15,
    gancho: 'Un portero de fútbol corre, salta y atrapa en un solo movimiento. ¿Cómo aprende el cuerpo a unir varias acciones sin trabarse?',
    objetivos: [
      'Reconocer las habilidades motrices simples: desplazarse, saltar, girar, lanzar y atrapar',
      'Combinar dos o más habilidades simples en una habilidad genérica',
      'Coordinar flexión, extensión y rotación al saltar, caer y girar',
    ],
    resumen: [
      'Las habilidades simples (básicas) son: desplazarse (caminar, correr), saltar, girar, lanzar y recibir (atrapar).',
      'Una habilidad genérica combina dos o más habilidades simples de forma fluida: correr y saltar, botar mientras corres, girar y lanzar. Son la base de todos los deportes.',
      'En el salto: flexión de rodillas para prepararse, extensión fuerte para impulsarse y flexión otra vez para caer suave, sobre la punta de los pies y luego todo el pie.',
      'Para combinar habilidades: practica cada una por separado, luego únelas despacio y aumenta la velocidad poco a poco.',
    ],
    media: {
      id: 's02-ef-2-circuito', kind: 'video', title: 'Circuito de habilidades', aspect: '9:16', duration: 50,
      alt: 'Un niño corre, salta una línea, cae con rodillas dobladas, gira media vuelta y lanza una pelota a un aro; primero despacio y luego fluido.',
      brief: 'Video vertical de 50 s en patio escolar. Un niño y una niña (ropa deportiva sencilla, rostros no protagonistas) demuestran un circuito: (1) cada habilidad por separado con rótulo ("correr", "saltar", "girar", "lanzar"); (2) la combinación despacio; (3) la combinación fluida. Cámara lenta en el salto con rótulos "flexión → extensión → flexión (caída suave)". Materiales caseros: línea de yeso, llanta vieja como aro, pelota de trapo. Aviso "Practica en suelo seco y despejado".',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:1.3.5'], ambito: 'conocer',
          prompt: 'En el **basquetbol**, una jugadora **corre botando la pelota** hacia la canasta. ¿Cuántas habilidades está haciendo a la vez?',
          explain: 'Dos: **correr** (desplazarse) y **botar** la pelota. Cuando unimos habilidades simples en una sola acción fluida, formamos una **habilidad genérica**.' },
        { options: [
          { id: 'a', text: 'Una sola', icon: 'Circle', feedback: 'Fíjate en sus pies y en sus manos: hacen cosas distintas al mismo tiempo.' },
          { id: 'b', text: 'Dos: correr y botar', icon: 'Layers' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.3.5'], ambito: 'conocer', title: 'De simples a genéricas',
          prompt: 'Así como las letras forman palabras, las **habilidades simples** se unen para formar **habilidades genéricas**. Toca cada tarjeta.' },
        { icon: 'Blocks', body: 'Primero dominamos las simples; luego las combinamos; después las usamos en deportes (habilidades específicas).', reveal: [
          { icon: 'Footprints', front: 'Desplazarse', back: 'Caminar, correr, reptar, cuadrupedia. Mover todo el cuerpo de un lugar a otro.' },
          { icon: 'ArrowUp', front: 'Saltar', back: 'Despegar del suelo con una o dos piernas y caer con control.' },
          { icon: 'RotateCw', front: 'Girar', back: 'Rotar el cuerpo: media vuelta, vuelta completa, rodar.' },
          { icon: 'Target', front: 'Lanzar y recibir', back: 'Enviar un objeto con las manos o los pies, y atraparlo o detenerlo.' },
          { icon: 'Layers', front: 'Genéricas', back: 'Combinaciones fluidas: **correr + saltar** un charco, **correr + botar**, **girar + lanzar**, **saltar + atrapar**.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.3.6'], ambito: 'hacer', title: 'El salto: flexión, extensión, flexión',
          prompt: 'El salto es una habilidad que usa los tres movimientos que aprendiste la semana pasada. Toca cada fase.',
          media: {
            id: 's02-ef-2-salto', kind: 'animation', title: 'Las fases del salto', aspect: '16:9', duration: 30,
            alt: 'Una figura de niña salta: primero dobla rodillas y brazos atrás, luego se estira hacia arriba con brazos al cielo, y cae doblando las rodillas.',
            brief: 'Animación 2D de 30 s, figura de niña en silueta con articulaciones marcadas (cadera, rodilla, tobillo). Fase 1 "Preparación": flexión de rodillas y cadera, brazos atrás (arcos de ángulo en rojo que se cierran). Fase 2 "Impulso": extensión explosiva de piernas y brazos arriba (arcos que se abren en verde). Fase 3 "Vuelo". Fase 4 "Caída": contacto con punta de pie → todo el pie, flexión de rodillas para amortiguar (resorte dibujado). Se repite en cámara lenta. Rótulos grandes.',
          } },
        { icon: 'ArrowUp', body: 'Las piernas funcionan como un **resorte**: se doblan para cargar energía y se estiran para liberarla.', reveal: [
          { icon: 'ArrowDown', front: '1. Preparación', back: '**Flexión** de rodillas y cadera, brazos hacia atrás. Cargas energía como un resorte.' },
          { icon: 'ArrowUp', front: '2. Impulso', back: '**Extensión** fuerte de piernas y brazos hacia arriba y adelante.' },
          { icon: 'Feather', front: '3. Caída suave', back: 'Caes en la **punta de los pies** y luego todo el pie, con **flexión** de rodillas para amortiguar. Nunca caigas con las piernas rectas.' },
          { icon: 'RotateCw', front: '+ Rotación', back: 'Si quieres girar en el aire, **rota** hombros y cadera hacia donde quieres ir al despegar.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.3.5', 'ef:1.3.6'], ambito: 'hacer', title: 'Ejemplo resuelto: aprender a correr y saltar un charco',
          prompt: 'Mira cómo Fernanda aprende a combinar **correr + saltar** sin detenerse.' },
        { icon: 'Droplets', problem: 'Después de la lluvia hay un charco en el camino a la escuela (imaginario: una línea doble de yeso en el patio). Fernanda quiere pasarlo corriendo, sin frenar ni mojarse.',
          steps: [
            { text: '**Practica cada habilidad sola:** corre 10 pasos; luego salta la línea desde parada, con la técnica de flexión-extensión-flexión.' },
            { text: '**Une despacio:** trota, y a 3 pasos de la línea mira dónde va a despegar.', why: 'Calcular el lugar de despegue evita frenarse o pisar el charco.' },
            { text: '**Despega con un pie** y lleva la otra pierna adelante (como un paso largo en el aire).' },
            { text: '**Cae con la pierna adelantada**, rodilla doblada, y **sigue corriendo**.', why: 'Si la caída es suave y sigue el movimiento, la combinación queda fluida.' },
            { text: '**Aumenta la velocidad** poco a poco en los siguientes intentos.' },
          ],
          answer: 'Fernanda formó la habilidad genérica **correr + saltar**: primero practicó por separado, luego unió despacio y al final aceleró.',
          tip: 'Si te trabas, vuelve a la velocidad lenta: la coordinación se construye con repeticiones.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.3.5'], ambito: 'conocer',
          prompt: 'Clasifica cada acción: ¿habilidad **simple** o **genérica** (combinación)?',
          hint: 'Cuenta cuántas acciones distintas hay: si hay dos o más unidas, es genérica.',
          explain: 'Una sola acción = simple. Dos o más acciones unidas de forma fluida = genérica.' },
        { buckets: [
          { id: 's', label: 'Simple', icon: 'Circle', color: 'var(--area-ef)' },
          { id: 'g', label: 'Genérica', icon: 'Layers', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'Saltar con los pies juntos en el lugar', bucket: 's' },
          { id: 'x2', text: 'Correr y saltar una cuerda que gira', bucket: 'g' },
          { id: 'x3', text: 'Caminar', bucket: 's' },
          { id: 'x4', text: 'Girar media vuelta y lanzar una pelota', bucket: 'g' },
          { id: 'x5', text: 'Atrapar una pelota estando quieto', bucket: 's' },
          { id: 'x6', text: 'Correr botando una pelota', bucket: 'g' },
        ] },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.3.5', 'ef:1.3.6'], ambito: 'hacer',
          prompt: '¡Circuito del mandadero! **Calentamiento (1 min):** trote suave, rotación de tobillos, rodillas y cadera. **Circuito (repite 3 veces):** corre 5 pasos → **salta** una línea (flexión-extensión-flexión) → **gira** media vuelta → **lanza** una pelota de trapo o un calcetín enrollado a una caja o llanta → corre de regreso. Primero despacio, luego fluido. **Poco espacio:** paso largo en lugar de correr, salto en el lugar, giro y lanzamiento a una caja cercana. **Adaptación:** en silla de ruedas: avanza, gira la silla y lanza. **Estira** piernas al final y toma agua.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después del calentamiento', exercise: { name: 'Trote suave y rotaciones', icon: 'RotateCw', seconds: 60 } },
          { label: 'Después del circuito', exercise: { name: 'Correr, saltar, girar y lanzar', icon: 'Footprints', seconds: 90 } },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.3.6'], ambito: 'hacer',
          prompt: 'Al saltar la línea, Pablo siente un golpe fuerte en las rodillas cada vez que cae. ¿Qué está haciendo mal?',
          explain: 'Al caer hay que **flexionar** las rodillas y apoyar primero la punta del pie: así los músculos amortiguan el impacto como un resorte.' },
        { options: [
          { id: 'a', text: 'Cae con las piernas rectas, sin doblar las rodillas' },
          { id: 'b', text: 'Dobla las rodillas antes de saltar', feedback: 'Eso es correcto: es la fase de preparación.' },
          { id: 'c', text: 'Mueve los brazos hacia arriba al impulsarse', feedback: 'Eso es correcto: los brazos ayudan al impulso.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.3.5'], ambito: 'hacer',
          prompt: 'Ordena los pasos para **aprender** una habilidad genérica nueva.',
          explain: 'Separado → unido despacio → unido con más velocidad → usado en un juego.' },
        { items: [
          { id: 'a', text: 'Practicar cada habilidad simple por separado' },
          { id: 'b', text: 'Unirlas despacio' },
          { id: 'c', text: 'Aumentar la velocidad poco a poco' },
          { id: 'd', text: 'Usar la combinación en un juego' },
        ], labels: { start: 'Primero', end: 'Al final' } },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.5'], prompt: '¿Qué ejemplo combina dos habilidades simples en una **habilidad genérica**?' },
        { options: [
          { id: 'a', text: 'Correr y saltar un obstáculo' },
          { id: 'b', text: 'Caminar' },
          { id: 'c', text: 'Estar sentado' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.6'], prompt: 'Une cada fase del salto con el movimiento de las rodillas.' },
        { pairs: [
          { id: 'p', left: 'Preparación', right: 'Flexión para cargar energía' },
          { id: 'i', left: 'Impulso', right: 'Extensión fuerte' },
          { id: 'c', left: 'Caída', right: 'Flexión para amortiguar' },
        ] },
      ),
      cierre({ areas: ['ef'], cnb: ['ef:1.3.5'] },
        ['Acelero y freno con control y seguridad', 'Reconozco habilidades simples y genéricas', 'Salto y caigo suave con flexión y extensión'],
        ['Jugaré al semáforo con mi familia', 'Practicaré correr y saltar una línea', 'Siempre caeré con las rodillas dobladas']),
    ],
  }),
];
