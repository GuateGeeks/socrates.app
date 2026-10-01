/**
 * Educación Física · Unidad 1 · Semana 3 — Ritmo, espacio y expresión corporal.
 * Progresión: moverse al pulso de la música (marcha y carrera), estructuras rítmicas de 4 y 8 tiempos
 * y patrones con acentos → el cuerpo en el espacio (direcciones, niveles, trayectorias, velocidad)
 * y los recursos expresivos para comunicar una idea con una secuencia de movimiento.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Moverse al ritmo ───────────────────────── */
  lesson({
    id: 's03-ef-1',
    title: 'Moverse al ritmo: marcha, carrera y patrones',
    icon: 'Music',
    minutes: 15,
    gancho: 'En los desfiles, cientos de estudiantes marchan al mismo tiempo sin chocar. ¿Cuál es su secreto?',
    objetivos: ['Crear y repetir un patrón corporal de 4 u 8 tiempos manteniendo el pulso'],
    resumen: [
      'El pulso es el latido constante de la música. Marchar al ritmo es dar un paso en cada pulso; al trotar se pueden dar dos pasos rápidos por pulso.',
      'Una estructura rítmica es un grupo de tiempos que se repite. En la danza y la gimnasia rítmica se cuenta en grupos de 4 o de 8 ("1, 2, 3, 4, 5, 6, 7, 8").',
      'Un patrón rítmico es una combinación de movimientos que se repite igual: por ejemplo, paso-paso-palma-pausa.',
      'El acento (el tiempo fuerte, casi siempre el 1) se puede marcar con un movimiento más fuerte: un pisotón, una palmada o un cambio de dirección.',
    ],
    media: {
      id: 's03-ef-1-marcha', kind: 'video', title: 'Marchar y trotar con la música', aspect: '9:16', duration: 45,
      alt: 'Un grupo de niñas y niños marcha en el patio al compás de una marimba, dando un paso en cada pulso y un pisotón en el tiempo 1; luego trotan con dos pasitos por pulso.',
      brief: 'Video vertical de 45 s en patio escolar. Suena una pieza ORIGINAL de marimba en 4/4, tempo ≈100. Parte 1: cinco estudiantes (rostros no protagonistas) marchan un paso por pulso; en pantalla aparecen los números 1-2-3-4 que se iluminan con cada paso, el 1 más grande con un pisotón. Parte 2: trote con dos pasitos por pulso; rótulo "2 pasos = 1 pulso". Parte 3: patrón "paso, paso, palma, pausa" repetido. Toma aérea desde un segundo piso para mostrar la sincronía.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ef', 'art'], cnb: ['ef:1.4.1'], ambito: 'conocer', title: 'Pulso, acento y estructuras de 4 y 8',
          prompt: 'En Expresión Artística aprendiste el **pulso** y el **compás**. En Educación Física los usamos para **mover el cuerpo**. Toca cada tarjeta.' },
        { icon: 'Drum', body: 'Una **estructura rítmica** es un grupo de tiempos que se repite. El cuerpo puede "dibujarla" con pasos, palmas y saltos.', reveal: [
          { icon: 'HeartPulse', front: 'Pulso', back: 'El latido constante de la música. **Marchar** = un paso por pulso.' },
          { icon: 'Zap', front: 'Acento', back: 'El tiempo **fuerte** (el 1). Se marca con un movimiento más fuerte: pisotón, palma o cambio de dirección.' },
          { icon: 'Repeat', front: 'Estructura de 4', back: 'Cuentas "1-2-3-4" y vuelves a empezar. Ejemplo: 4 pasos adelante, 4 atrás.' },
          { icon: 'ListOrdered', front: 'Estructura de 8', back: 'En danza se cuenta "1 al 8" (dos grupos de 4). Muchas coreografías cambian de movimiento cada 8 tiempos.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.4.1'], ambito: 'conocer',
          prompt: 'Observa el video. ¿Qué hace que todos los pasos caigan al mismo tiempo?',
          explain: 'Todos siguen el **pulso** de la música: un paso en cada latido. Cuando el cuerpo sigue un pulso común, el grupo se mueve **sincronizado**.' },
        { options: [
          { id: 'a', text: 'Todos siguen el mismo pulso de la música', icon: 'Music' },
          { id: 'b', text: 'Todos tienen piernas del mismo largo', icon: 'Ruler', feedback: 'El largo de las piernas cambia el tamaño del paso, pero no el momento en que se da.' },
          { id: 'c', text: 'Todos se miran los pies', icon: 'Eye', feedback: 'Mirarse los pies no ayuda: lo que los une es escuchar el pulso.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.4.3'], ambito: 'hacer', title: 'Marcha y carrera con fondo musical',
          prompt: 'La misma música sirve para **marchar** o para **trotar**. Cambia cuántos pasos das por pulso. Toca cada tarjeta y pruébalo con la pista de práctica, contando en voz alta.',
          media: {
            id: 's03-ef-1-pista', kind: 'audio', title: 'Pista para marchar y trotar', duration: 60,
            alt: 'Una pieza alegre de marimba con un bombo que marca cada pulso; una voz cuenta del 1 al 8 y anuncia "marcha", "trote" y "paso lento".',
            brief: 'Audio de 60 s: pieza ORIGINAL de marimba en 4/4, tempo constante ≈100 pulsos por minuto, bombo suave en cada pulso y más fuerte en el 1. Una voz infantil cálida en español cuenta "1, 2, 3… 8" y anuncia los cambios cada 16 tiempos: "¡Marcha!" (16 tiempos), "¡Trote!" (16), "¡Paso lento!" (16), "¡Marcha!" (16). Sin letra cantada. Mezcla clara para bocina de celular.',
          } },
        { icon: 'Footprints', body: 'Mantén la **espalda recta**, la **mirada al frente** y los **brazos** moviéndose en contra de las piernas (brazo derecho con pierna izquierda).', reveal: [
          { icon: 'Footprints', front: 'Marcha', back: '**1 paso por pulso**. Pie completo, rodilla un poco arriba. Como una negra: "ta · ta · ta · ta".' },
          { icon: 'Activity', front: 'Trote', back: '**2 pasos por pulso**, cortos y ligeros, sobre la parte delantera del pie. Como dos corcheas: "ti-ti · ti-ti".' },
          { icon: 'Hourglass', front: 'Paso lento', back: '**1 paso cada 2 pulsos**: das el paso y esperas. Como una blanca: "ta-a".' },
          { icon: 'Users', front: 'En grupo', back: 'Todos empiezan con el **mismo pie** (por ejemplo, el izquierdo en el 1) y mantienen la distancia con quien va adelante.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.4.1'], ambito: 'hacer', title: 'Ejemplo resuelto: un patrón de 8 tiempos',
          prompt: 'Mira cómo el grupo de Ixchel arma un patrón para la clase de gimnasia rítmica.' },
        { icon: 'ListOrdered', problem: 'Deben crear un patrón de **8 tiempos** que combine marcha, palmas y un salto, y repetirlo 4 veces con la música.',
          steps: [
            { text: '**Tiempos 1-4:** 4 pasos de marcha hacia adelante; pisotón en el 1.', why: 'El pisotón marca el acento y ayuda a todos a empezar juntos.' },
            { text: '**Tiempos 5-6:** dos palmadas en el lugar.' },
            { text: '**Tiempo 7:** un salto con pies juntos (caída suave, rodillas dobladas).' },
            { text: '**Tiempo 8:** pausa, quietos, listos para repetir.' },
            { text: 'Lo repiten **4 veces**: 4 × 8 = **32 tiempos**. Primero contando en voz alta y luego solo con la música.' },
          ],
          answer: 'Un patrón de 8 tiempos: **4 pasos · 2 palmas · 1 salto · 1 pausa**, repetido 4 veces (32 tiempos).',
          tip: 'Si el grupo se desordena, vuelvan a contar en voz alta "1, 2, 3…" hasta sincronizarse.' },
      ),
      S.rhythm(
        { fase: 'construir', areas: ['ef', 'art'], cnb: ['ef:1.4.1'], ambito: 'hacer',
          prompt: 'Crea el ritmo de tus pies para **4 tiempos**: **negra** = un paso de marcha; **dos corcheas** = dos pasitos de trote; **blanca** = un paso lento. Debe incluir al menos una **negra** y una **corchea**. Tócalo y luego hazlo con los pies.',
          hint: 'Negra = 1 tiempo, blanca = 2, corchea = medio tiempo. Si usas una corchea, pon otra al lado para completar el pulso.',
          explain: 'Por ejemplo: negra · negra · dos corcheas · negra = paso, paso, trote-trote, paso (4 tiempos).' },
        { beats: 4, allowed: ['blanca', 'negra', 'corchea'], mustInclude: ['negra', 'corchea'], showFractions: true },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.4.3'], ambito: 'hacer',
          prompt: '¡Gimnasia rítmica! Pon una canción con pulso claro (marimba, son o cualquier música alegre) o cuenta en voz alta. **Calentamiento:** marcha en tu lugar 8 tiempos × 4, rotando hombros. **Parte principal:** marcha 8 tiempos adelante y 8 atrás; trota 8 tiempos (2 pasitos por pulso); repite tu patrón de 8 tiempos (paso, paso, paso, paso, palma, palma, salto, pausa) 4 veces. **Poco espacio:** todo en tu lugar. **Adaptación:** en silla de ruedas, marca el ritmo con brazos y palmas, y empuja las ruedas en los tiempos de desplazamiento. **Vuelta a la calma:** paso lento (1 paso cada 2 pulsos) y respiración profunda.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después de marcha y trote', exercise: { name: 'Marcha y trote con la música', icon: 'Footprints', seconds: 60 } },
          { label: 'Después del patrón rítmico', exercise: { name: 'Patrón de 8 tiempos × 4', icon: 'Music', seconds: 60 } },
          { label: 'Después de la vuelta a la calma', exercise: { name: 'Paso lento y respiración', icon: 'Wind', seconds: 45 } },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['ef', 'mat'], cnb: ['ef:1.4.1'], ambito: 'hacer',
          prompt: 'Marchas contando en grupos de **4 tiempos** y das un pisotón en el **tiempo 1** de cada grupo. Si marchas **24 tiempos** seguidos, ¿cuántos pisotones das?',
          explain: '24 tiempos ÷ 4 tiempos por grupo = 6 grupos. Un pisotón por grupo: **6 pisotones**.' },
        { answer: 6, unit: 'pisotones', misconceptions: [
          { value: 24, msg: 'Esa es la cantidad de pasos. El pisotón solo va en el tiempo 1 de cada grupo de 4.' },
          { value: 4, msg: 'Divide los 24 tiempos entre los 4 tiempos de cada grupo.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.4.3'], ambito: 'hacer',
          prompt: 'La música se vuelve más rápida y tu profesora pide pasar de **marcha** a **trote** sin perder el ritmo. ¿Qué haces?',
          explain: 'El trote se hace con **dos pasitos por pulso**, cortos y sobre la parte delantera del pie, siguiendo el mismo pulso.' },
        { options: [
          { id: 'a', text: 'Doy dos pasitos cortos en cada pulso' },
          { id: 'b', text: 'Doy pasos gigantes y lentos', feedback: 'Así te atrasarías respecto a la música.' },
          { id: 'c', text: 'Corro lo más rápido que puedo, sin escuchar', feedback: 'Correr sin escuchar rompe el ritmo y la sincronía del grupo.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.4.1'], prompt: 'Marchas en grupos de 4 tiempos y aplaudes en el primer tiempo de cada grupo. Si cuentas del 1 al 8, ¿en qué tiempos aplaudes?' },
        { options: [
          { id: 'a', text: 'En el 1 y en el 5' },
          { id: 'b', text: 'En el 4 y en el 8' },
          { id: 'c', text: 'Solo en el 1' },
          { id: 'd', text: 'En todos los tiempos' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.4.3'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Al marchar se da un paso en cada pulso de la música.', answer: true },
          { text: 'Al trotar con la música se dan dos pasitos por pulso.', answer: true },
          { text: 'Un patrón rítmico cambia cada vez que se repite.', answer: false, why: 'Un patrón se repite igual; por eso el grupo puede aprenderlo y sincronizarse.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Espacio y expresión ───────────────────────── */
  lesson({
    id: 's03-ef-2',
    title: 'Mi cuerpo en el espacio: direcciones, niveles y expresión',
    icon: 'PersonStanding',
    minutes: 15,
    gancho: 'Sin decir una palabra, ¿podrías mostrar con tu cuerpo que tienes miedo, que estás feliz o que eres un volcán a punto de despertar?',
    objetivos: ['Crear una secuencia expresiva usando direcciones, niveles, trayectorias, velocidad e intención'],
    resumen: [
      'Relaciones espacio-temporales: el cuerpo se mueve en direcciones (adelante, atrás, a los lados, arriba, abajo), niveles (alto, medio, bajo) y trayectorias (recta, curva, zigzag), a distintas velocidades (rápido, lento) y duraciones.',
      'Recursos expresivos: el gesto (cara y manos), la mirada, la postura, la energía (movimiento fuerte o suave) y la velocidad.',
      'La plasticidad es la capacidad del cuerpo de tomar muchas formas; la intencionalidad es lo que quieres comunicar con cada movimiento.',
      'Una secuencia de movimiento tiene inicio (posición quieta), desarrollo y final (posición quieta), y se puede contar en estructuras de 8 tiempos.',
    ],
    media: {
      id: 's03-ef-2-expresion', kind: 'video', title: 'El cuerpo que comunica', aspect: '16:9', duration: 50,
      alt: 'Una niña representa la milpa: empieza agachada en nivel bajo como semilla, crece lentamente hasta nivel alto con los brazos como hojas, se mueve en curva con el viento y cae suave con la cosecha.',
      brief: 'Video de 50 s en un salón despejado con luz natural. Una niña y un niño (ropa sencilla, rostros visibles solo con permiso o en silueta) interpretan "El ciclo de la milpa" sin palabras, con marimba suave de fondo: (1) semilla en nivel bajo, cuerpo cerrado; (2) crecimiento lento a nivel medio y alto; (3) viento: trayectoria curva, balanceo; (4) lluvia fuerte: movimientos rápidos y enérgicos en zigzag; (5) cosecha: caída suave y pausa final. Rótulos breves: "nivel bajo", "lento", "curva", "energía fuerte", "posición final". Ninguna vestimenta de una comunidad concreta.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:1.4.2'], ambito: 'conocer', title: 'El cuerpo en el espacio y el tiempo',
          prompt: 'Para moverte con intención, piensa **dónde** y **cuándo** te mueves. Toca cada tarjeta y pruébalo.' },
        { icon: 'Compass', body: 'Estas son las **relaciones espacio-temporales**: los "ingredientes" de cualquier movimiento.', reveal: [
          { icon: 'Compass', front: 'Direcciones', back: 'Adelante, atrás, a la derecha, a la izquierda, arriba y abajo.' },
          { icon: 'Layers', front: 'Niveles', back: '**Bajo** (en el suelo, agachado), **medio** (rodillas dobladas, inclinado) y **alto** (de pie, de puntillas, saltando).' },
          { icon: 'Route', front: 'Trayectorias', back: 'El camino que dibujas en el suelo: **recta**, **curva**, **zigzag**, **círculo**.' },
          { icon: 'Timer', front: 'Velocidad y duración', back: 'Rápido o lento, largo o corto. Puedes moverte **en 8 tiempos** o **en 2**, y eso cambia la sensación.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.4.12'], ambito: 'conocer',
          prompt: 'En el video, la niña empieza **agachada, cerrada y quieta**. ¿Qué crees que representa?',
          explain: 'Una **semilla**. Sin palabras, usó el **nivel bajo**, la **postura cerrada** y la **quietud**. El cuerpo es un lenguaje: hoy aprenderás sus "palabras".' },
        { options: [
          { id: 'a', text: 'Una semilla bajo la tierra', icon: 'Sprout' },
          { id: 'b', text: 'Una persona corriendo', icon: 'Footprints', feedback: 'Correr necesita movimiento y desplazamiento; ella está quieta y en el suelo.' },
          { id: 'c', text: 'Un árbol muy alto', icon: 'TreePine', feedback: 'Un árbol alto usaría el nivel alto, con el cuerpo estirado.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.4.12'], ambito: 'conocer', title: 'Los recursos expresivos',
          prompt: 'Actores, danzantes y deportistas usan el cuerpo para **comunicar**. Toca cada recurso.' },
        { icon: 'Smile', body: 'La **plasticidad** es la capacidad del cuerpo de tomar muchas formas. La **intencionalidad** es **lo que quieres decir** con cada forma.', reveal: [
          { icon: 'Smile', front: 'Gesto', back: 'Lo que hacen la **cara** y las **manos**: sonreír, fruncir el ceño, abrir las palmas.' },
          { icon: 'Eye', front: 'Mirada', back: 'A dónde miras dice mucho: arriba (esperanza), abajo (tristeza o timidez), al público (seguridad).' },
          { icon: 'PersonStanding', front: 'Postura', back: 'Cuerpo **abierto** y erguido (alegría, fuerza) o **cerrado** y encogido (miedo, frío, tristeza).' },
          { icon: 'Zap', front: 'Energía', back: 'Movimiento **fuerte** y cortante (enojo, tormenta) o **suave** y fluido (calma, agua, viento).' },
          { icon: 'Gauge', front: 'Velocidad', back: '**Rápido** transmite prisa, emoción o nervios; **lento**, calma, cansancio o solemnidad.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.4.2', 'ef:1.4.12'], ambito: 'hacer', title: 'Ejemplo resuelto: la secuencia "El volcán despierta"',
          prompt: 'Mira cómo Julio arma una secuencia de **4 partes de 8 tiempos** con una intención clara.' },
        { icon: 'Mountain', problem: 'Julio quiere mostrar, sin palabras, un volcán que duerme, despierta, hace erupción y vuelve a la calma.',
          steps: [
            { text: '**Inicio (8 tiempos):** nivel **bajo**, postura cerrada, quieto; solo respira despacio. Intención: el volcán duerme.' },
            { text: '**Parte 2 (8 tiempos):** sube **lentamente** al nivel medio, temblando un poco los brazos. Intención: el volcán despierta.', why: 'La velocidad lenta y el temblor crean suspenso.' },
            { text: '**Parte 3 (8 tiempos):** salta al nivel **alto**, brazos que se abren **rápido y con energía fuerte** hacia arriba y en **zigzag**. Intención: la erupción.' },
            { text: '**Final (8 tiempos):** baja en **trayectoria curva**, con movimientos **suaves**, hasta quedar quieto en nivel bajo. Intención: la lava se enfría y vuelve la calma.' },
          ],
          answer: 'Julio combinó **niveles, velocidad, energía y trayectorias** con una **intención** clara en cada parte, en 4 × 8 = 32 tiempos.',
          tip: 'Empieza y termina siempre con una posición quieta: el público entiende dónde empieza y dónde acaba la historia.' },
      ),
      S.match(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:1.4.12'], ambito: 'hacer',
          prompt: 'Une cada idea que quieres comunicar con el recurso expresivo que mejor la muestra.',
          hint: 'Piensa en la postura, la energía y la velocidad de cada emoción.',
          explain: 'Cada recurso tiene una intención: la postura cerrada comunica frío o miedo, la energía fuerte enojo o fuerza, la lentitud calma o cansancio.' },
        { leftTitle: 'Quiero comunicar…', rightTitle: 'Recurso', pairs: [
          { id: 'f', left: 'Tengo mucho frío', right: 'Postura cerrada y temblorosa' },
          { id: 't', left: 'Llega una tormenta', right: 'Energía fuerte y movimientos rápidos' },
          { id: 'c', left: 'El agua del lago en calma', right: 'Movimientos suaves, lentos y curvos' },
          { id: 'a', left: '¡Ganamos el partido!', right: 'Postura abierta, brazos arriba y sonrisa' },
        ] },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.4.2', 'ef:1.4.12'], ambito: 'hacer',
          prompt: '¡Tu secuencia! **Calentamiento:** muévete por el espacio en trayectoria recta, curva y zigzag (20 s cada una), cambiando de nivel cuando alguien diga "¡bajo!", "¡medio!", "¡alto!". **Parte principal:** crea tu propia secuencia de **4 partes de 8 tiempos** sobre uno de estos temas: "La milpa crece", "Un día de lluvia" o "El río baja de la montaña". Usa al menos 2 niveles, 2 trayectorias y cambios de velocidad. Repítela 3 veces hasta que te salga fluida y muéstrasela a alguien. **Poco espacio:** usa más los niveles que el desplazamiento. **Adaptación:** en silla de ruedas, usa brazos, tronco, cabeza y giros de la silla. **Vuelta a la calma:** estira y respira.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después del calentamiento en el espacio', exercise: { name: 'Trayectorias y niveles', icon: 'Route', seconds: 60 } },
          { label: 'Después de tu secuencia (3 veces)', exercise: { name: 'Secuencia expresiva de 4 × 8 tiempos', icon: 'Sparkles', seconds: 90 } },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.4.2', 'ef:1.4.12'], ambito: 'hacer',
          prompt: 'Escribe el **guion de tu secuencia**: el tema, y en cada una de las 4 partes de 8 tiempos, qué **nivel**, **trayectoria**, **velocidad** y **energía** usaste y qué querías **comunicar**.' },
        { minWords: 40, placeholder: 'Mi tema es… Parte 1: … Parte 2: … Parte 3: … Parte 4: …',
          model: 'Mi tema es "El río baja de la montaña". Parte 1: nivel alto, de puntillas, movimientos suaves; soy el agua que nace arriba. Parte 2: nivel medio, trayectoria en zigzag y más rápido; el río baja entre piedras. Parte 3: nivel bajo, energía fuerte, brazos que empujan; es una crecida por la lluvia. Parte 4: trayectoria curva, lento y suave hasta quedar quieta; el río llega tranquilo al lago.',
          rubric: ['Tiene un tema claro', 'Describe 4 partes de 8 tiempos', 'Usa al menos 2 niveles y 2 trayectorias', 'Explica la intención de cada parte'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:1.4.2', 'ef:1.4.12'], ambito: 'hacer',
          prompt: 'Para representar a una persona que avanza con cautela por una ruta estrecha, ¿qué secuencia comunica mejor esa intención?' },
        { options: [
          { id: 'a', text: 'Pasos lentos en línea curva, nivel medio, mirada al frente y energía suave' },
          { id: 'b', text: 'Saltos rápidos sin mirar, con giros amplios y energía fuerte' },
          { id: 'c', text: 'Quedarse inmóvil de espaldas durante toda la secuencia' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.4.2'], prompt: 'Te mueves **agachado**, con las rodillas muy dobladas y las manos cerca del suelo. ¿En qué nivel estás?' },
        { options: [
          { id: 'a', text: 'Nivel alto' },
          { id: 'b', text: 'Nivel medio' },
          { id: 'c', text: 'Nivel bajo' },
        ], correct: ['c'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.4.2', 'ef:1.4.12'], prompt: 'Clasifica cada elemento: ¿es una **relación espacio-temporal** o un **recurso expresivo**?' },
        { buckets: [
          { id: 'e', label: 'Espacio-tiempo', icon: 'Compass', color: 'var(--area-ef)' },
          { id: 'x', label: 'Recurso expresivo', icon: 'Smile', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'y1', text: 'Trayectoria en zigzag', bucket: 'e' },
          { id: 'y2', text: 'Mirada hacia abajo', bucket: 'x' },
          { id: 'y3', text: 'Nivel alto', bucket: 'e' },
          { id: 'y4', text: 'Gesto de sorpresa', bucket: 'x' },
          { id: 'y5', text: 'Postura encogida', bucket: 'x' },
        ] },
      ),
      cierre({ areas: ['ef'], cnb: ['ef:1.4.12'] },
        ['Marcho y troto siguiendo el pulso de la música', 'Uso niveles, direcciones y trayectorias', 'Comunico una idea con gestos, postura, energía y velocidad'],
        ['Practicaré mi patrón de 8 tiempos con una canción', 'Presentaré mi secuencia a mi familia', 'Observaré cómo se mueven los danzantes en las fiestas de mi comunidad']),
    ],
  }),
];
