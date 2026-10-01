/**
 * L2 (español como segundo idioma) · Unidad 1 · Semana 5
 * Contar con el cuerpo (dramatización y danza, participación voluntaria) y convencer con razones
 * (intención del mensaje y justificación con información seleccionada).
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's05-l2-1',
    title: 'Contamos un cuento con el cuerpo',
    icon: 'Drama',
    minutes: 15,
    gancho: 'Sin decir una sola palabra, ¿podrías hacer que tu familia adivine que eres un abuelito que camina contra el viento?',
    objetivos: ['Representar corporalmente un cuento con una secuencia narrativa clara'],
    resumen: [
      'Para representar sin palabras usamos: postura (cómo está el cuerpo), expresión de la cara, gestos, desplazamientos y ritmo o danza.',
      'Cada personaje tiene su forma de moverse: un anciano camina lento; un niño corre y salta; el viento se mueve con giros.',
      'Una representación sigue el orden del cuento: inicio, nudo (problema) y desenlace (solución).',
      'En una dramatización hay muchos papeles (actores, narrador, música, escenografía). Participar es voluntario y todos pueden aportar desde el papel que elijan.',
    ],
    media: {
      id: 's05-l2-1-mimo', kind: 'video', title: 'El sombrero de don Chepe, sin palabras', aspect: '16:9', duration: 60,
      alt: 'Tres estudiantes representan sin palabras un cuento: un anciano pierde su sombrero con el viento, una niña lo rescata del río y todos bailan al final.',
      brief: 'Video de 60 s en un patio escolar o salón comunal. Tres estudiantes (dos niñas y un niño) representan sin hablar "El sombrero de don Chepe". Inicio: el niño, encorvado y con bastón, camina lento y feliz tocándose un sombrero de palma. Nudo: una niña hace de viento (giros con los brazos abiertos, pasos rápidos); el sombrero "vuela" (se lo quita y lo pasa); don Chepe lo persigue con cara de angustia; el sombrero cae al río (tela azul en el suelo). Desenlace: otra niña con una vara lo pesca y se lo devuelve; los tres bailan unos pasos sencillos de son al ritmo de una marimba suave (música sin derechos o grabada para el proyecto). Cámara fija, plano general, subtítulos "Inicio – Nudo – Desenlace".',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:2.2.5'], ambito: 'conocer',
          prompt: 'Lee postura, gesto y movimiento como partes de un relato.' },
        { icon: 'PersonStanding', body: 'El lenguaje corporal comunica sin palabras: la postura muestra actitud, el gesto expresa emoción y el movimiento organiza acciones. Una secuencia clara permite reconocer inicio, problema y desenlace.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.5'], ambito: 'conocer',
          prompt: 'Sin palabras, quieres mostrar que eres un **abuelito cansado**. ¿Qué harías con tu cuerpo?',
          explain: 'La **postura** (encorvado) y el **ritmo** (lento) bastan para que todos entiendan quién eres. Hoy aprenderás a contar un cuento completo con el cuerpo.' },
        { options: [
          { id: 'a', text: 'Caminar lento, un poco encorvado, apoyado en un bastón imaginario', icon: 'PersonStanding' },
          { id: 'b', text: 'Correr y saltar por todo el espacio', icon: 'Rabbit', feedback: 'Así se movería un personaje joven y lleno de energía.' },
          { id: 'c', text: 'Quedarme de pie sin moverme', icon: 'User', feedback: 'Sin movimiento, el público no tiene pistas sobre el personaje.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.5'], ambito: 'conocer', title: 'Herramientas del lenguaje corporal',
          prompt: 'Cuando representamos un cuento **sin palabras** o con pocas palabras, el cuerpo se vuelve el narrador. Toca cada herramienta.' },
        { icon: 'PersonStanding', body: 'Exagera un poco los movimientos: el público debe verlos desde lejos.', reveal: [
          { icon: 'PersonStanding', front: 'Postura', back: 'Cómo se para o se sienta el personaje: **erguido** (seguro, orgulloso), **encorvado** (cansado, anciano), **encogido** (miedo, frío).' },
          { icon: 'Smile', front: 'Expresión', back: 'La cara muestra lo que siente: alegría, susto, tristeza, sorpresa.' },
          { icon: 'Hand', front: 'Gestos', back: 'Acciones con las manos: agarrar, buscar, llamar, señalar.' },
          { icon: 'Footprints', front: 'Desplazamientos', back: 'Cómo y hacia dónde se mueve: lento, rápido, en círculo, de puntillas.' },
          { icon: 'Music', front: 'Ritmo y danza', back: 'Movimientos con música que muestran un ambiente: una fiesta, una tormenta, la alegría del final.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.5'], ambito: 'conocer', title: 'Lectura',
          prompt: 'Lee el cuento que vamos a representar. Mientras lees, imagina cómo se movería cada personaje.' },
        { genre: 'Cuento', heading: 'El sombrero de don Chepe', passage:
          'Don Chepe tenía ochenta años y un sombrero de palma que cuidaba como un tesoro. Cada domingo caminaba despacio hacia el mercado, con su bastón en una mano y la otra en el ala del sombrero.\n\nUn domingo sopló un viento terrible. ¡Fuuu! El sombrero salió volando, dio tres vueltas en el aire y cayó en el río. Don Chepe corrió como pudo, con los ojos muy abiertos y las manos estiradas, pero el agua se llevaba su tesoro.\n\nEntonces apareció Maribel, una niña que pescaba en la orilla. Con su vara larga alcanzó el sombrero y se lo devolvió, mojado pero entero. Don Chepe se lo puso, sonrió y, de pura alegría, se puso a bailar un son. Maribel bailó con él.',
          questions: [
            { q: '¿Qué **postura** y **ritmo** conviene para don Chepe al inicio?', options: [
              { id: 'a', text: 'Un poco encorvado y lento, con bastón' },
              { id: 'b', text: 'Erguido, corriendo y saltando' },
              { id: 'c', text: 'Sentado todo el tiempo' },
            ], correct: 'a', why: 'Tiene ochenta años y "caminaba despacio": la postura y el ritmo lo muestran.' },
            { q: '¿Cómo se representaría el **viento** sin palabras?', options: [
              { id: 'a', text: 'Con giros rápidos, brazos abiertos y soplidos' },
              { id: 'b', text: 'Quedándose quieto en una esquina' },
              { id: 'c', text: 'Leyendo la palabra "viento" en un cartel' },
            ], correct: 'a', why: 'Los desplazamientos rápidos y en círculo imitan el viento. El cuento dice que el sombrero "dio tres vueltas".' },
            { q: '¿Qué parte del cuento es el **desenlace**?', options: [
              { id: 'a', text: 'Maribel rescata el sombrero y bailan de alegría' },
              { id: 'b', text: 'Don Chepe camina al mercado' },
              { id: 'c', text: 'El viento se lleva el sombrero' },
            ], correct: 'a', why: 'El desenlace es la solución del problema. La danza final expresa la alegría.' },
          ] },
      ),
      S.match(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.5'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: une cada momento del cuento con el lenguaje corporal que lo representa.',
          hint: 'Piensa qué siente o hace el personaje en cada momento: ¿alegría, angustia, esfuerzo?',
          explain: 'Cada momento tiene su emoción y su movimiento. Así el público sigue la historia sin palabras.' },
        { leftTitle: 'Momento', rightTitle: 'Lenguaje corporal', pairs: [
          { id: 'k1', left: 'El sombrero sale volando', leftIcon: 'Wind', right: 'Mirar hacia arriba, boca abierta, manos estiradas' },
          { id: 'k2', left: 'Don Chepe persigue su sombrero', leftIcon: 'Footprints', right: 'Pasos rápidos pero torpes, cara de angustia' },
          { id: 'k3', left: 'Maribel alcanza el sombrero', leftIcon: 'Fish', right: 'Estirarse con la vara, esfuerzo y luego una sonrisa' },
          { id: 'k4', left: 'Final feliz', leftIcon: 'Music', right: 'Bailar un son con pasos alegres' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.5'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo un grupo de sexto planifica la representación en solo 10 minutos.' },
        { icon: 'ClipboardList', problem: 'El grupo de Ixchel debe representar "El sombrero de don Chepe" sin palabras, en 2 minutos. ¿Cómo se organizan?',
          steps: [
            { text: 'Dividen el cuento en **tres escenas**: inicio (don Chepe camina), nudo (el viento y el río) y desenlace (el rescate y el baile).', why: 'Si el orden está claro, el público entiende la historia.' },
            { text: 'Reparten papeles: don Chepe, el viento, Maribel. Una compañera que prefiere no actuar **toca la música** con una botella con semillas.' },
            { text: 'Eligen el movimiento clave de cada personaje: bastón y pasos lentos; giros y soplidos; la vara que pesca.' },
            { text: 'Ensayan dos veces: la primera, despacio; la segunda, con música y exagerando un poco los gestos.' },
          ],
          answer: 'Organizaron **escenas**, **papeles** y **movimientos clave**, y ensayaron antes de presentar.',
          tip: 'Una representación sin palabras necesita movimientos claros y un orden fácil de seguir.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.3'], ambito: 'convivir', title: 'Todos podemos participar',
          prompt: 'Participar en una dramatización es **voluntario**: nadie debe ser obligado ni burlado. Hay un papel para cada quien. Toca cada tarjeta.' },
        { icon: 'Users', body: 'Sentir nervios es normal, incluso para actores con experiencia. Respirar hondo y ensayar ayuda mucho.', reveal: [
          { icon: 'Drama', front: 'Actor o actriz', back: 'Representa a un personaje con su cuerpo y su voz.' },
          { icon: 'Mic', front: 'Narrador', back: 'Cuenta en voz alta lo que pasa, si la obra lleva palabras.' },
          { icon: 'Drum', front: 'Música y sonidos', back: 'Crea el ambiente: lluvia con semillas, viento con la voz, marimba o tambor.' },
          { icon: 'Palette', front: 'Escenografía', back: 'Prepara los objetos: la tela azul del río, el sombrero, la vara.' },
          { icon: 'Heart', front: 'Público respetuoso', back: 'Mira con atención, no se burla y aplaude al final. ¡También es participar!' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.2.5'], ambito: 'hacer',
          prompt: 'Para representar el cuento, las escenas deben ir en orden. Ordénalas.',
          explain: 'Inicio → nudo (problema) → desenlace (solución). Si cambias el orden, el público se confunde.' },
        { labels: { start: 'Inicio', end: 'Desenlace' }, items: [
          { id: 'c1', text: 'Don Chepe camina despacio al mercado con su sombrero', icon: 'PersonStanding' },
          { id: 'c2', text: 'El viento sopla y se lleva el sombrero', icon: 'Wind' },
          { id: 'c3', text: 'El sombrero cae al río y don Chepe lo persigue', icon: 'Waves' },
          { id: 'c4', text: 'Maribel lo pesca con su vara y se lo devuelve', icon: 'Fish' },
          { id: 'c5', text: 'Don Chepe y Maribel bailan un son de alegría', icon: 'Music' },
        ] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['l2', 'fc'], cnb: ['l2:2.2.3'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
        { scene: { icon: 'Drama', text: 'Tu grupo prepara la dramatización. Tomás, que es tímido, dice que no quiere actuar. Otro compañero dice: "Entonces que no haga nada, o que actúe a la fuerza".' }, options: [
          { id: 'a', icon: 'Megaphone', text: 'Obligar a Tomás a actuar frente a todos', consequence: 'Tomás se pone muy nervioso y la pasa mal. Participar debe ser voluntario.', values: ['Presión'], constructive: false },
          { id: 'b', icon: 'HeartHandshake', text: 'Preguntarle a Tomás qué le gustaría hacer: música, escenografía o narrar', consequence: 'Tomás elige hacer la música con semillas y lo hace muy bien. Todos aportan desde el papel que eligieron.', values: ['Respeto', 'Inclusión', 'Trabajo en equipo'], constructive: true },
          { id: 'c', icon: 'EyeOff', text: 'Dejarlo fuera del grupo sin preguntarle nada', consequence: 'Tomás se siente excluido. Siempre hay una forma de participar.', values: ['Exclusión'], constructive: false },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.2.5'], ambito: 'hacer',
          prompt: 'En otra obra, un personaje recibe una **noticia muy triste**. ¿Qué lenguaje corporal la representa mejor sin palabras?',
          explain: 'Hombros caídos, cabeza baja y movimientos lentos comunican tristeza con claridad.' },
        { options: [
          { id: 'a', text: 'Bajar los hombros y la cabeza, cubrirse la cara con las manos y caminar lento' },
          { id: 'b', text: 'Saltar y aplaudir', feedback: 'Saltar y aplaudir comunica alegría, lo contrario.' },
          { id: 'c', text: 'Pararse muy erguido y sonreír', feedback: 'La postura erguida y la sonrisa comunican seguridad o alegría.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.2.5'], prompt: 'Boleto de salida: en una secuencia de lenguaje corporal sin palabras, ¿qué muestra que un personaje tiene **mucho frío**?' },
        { options: [
          { id: 'a', text: 'Encogerse, abrazarse y temblar' },
          { id: 'b', text: 'Abanicarse la cara' },
          { id: 'c', text: 'Estirarse y bostezar' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.2.3', 'l2:2.2.5'], prompt: 'Comprueba la secuencia narrativa y el lenguaje corporal: ¿verdadero o falso?' },
        { statements: [
          { text: 'Solo participa en una dramatización quien actúa frente al público.', answer: false, why: 'La música, la escenografía y la narración también son formas de participar.' },
          { text: 'La danza puede expresar la alegría del final de un cuento.', answer: true },
          { text: 'Una representación debe seguir el orden: inicio, nudo y desenlace.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's05-l2-2',
    title: 'Convencer con razones',
    icon: 'MessagesSquare',
    minutes: 15,
    gancho: 'Dos compañeros piden un huerto escolar. Uno dice "¡Porque sí!". La otra da tres razones. ¿A quién le hará caso la directora?',
    objetivos: ['Construir un mensaje argumentativo con razones verificables'],
    resumen: [
      'Los mensajes tienen intenciones: informar (dar datos), explicar (decir cómo o por qué) y argumentar (convencer).',
      'Un mensaje argumentativo tiene: una opinión clara, razones que la apoyan y un cierre que invita a actuar.',
      'Justificar es apoyar la opinión con información: datos comprobables, ejemplos o lo que dice una fuente confiable (centro de salud, libro, persona experta).',
      'No justifica: "porque sí", "todos lo dicen" o información que no tiene que ver con el tema.',
    ],
    media: {
      id: 's05-l2-2-balanza', kind: 'animation', title: 'La balanza de las razones', aspect: '16:9', duration: 45,
      alt: 'Una balanza: de un lado la frase "¡Porque sí!", que casi no pesa; del otro, tres bloques con razones y datos que la inclinan con fuerza.',
      brief: 'Animación 2D de 45 s. Una niña y un niño frente a la directora de una escuela guatemalteca (sin logotipos). El niño dice "¡Queremos un huerto porque sí!" y su frase cae como una pluma en un plato de una balanza, que casi no se mueve. La niña dice "Queremos un huerto" y deja caer tres bloques: "Aprenderíamos ciencias haciendo", "Tendríamos hierbas para la refacción", "El terreno de atrás está sin usar". La balanza se inclina hacia su lado. Texto final: "Opinión + razones + cierre". Narración en español de Guatemala, subtítulos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:1.2.2'], ambito: 'conocer',
          prompt: 'Distingue una opinión de las razones que pueden sostenerla.' },
        { icon: 'Scale', body: 'Un mensaje persuasivo presenta una postura y razones pertinentes. Para proponer una mejora escolar, conviene explicar qué barrera existe, a quién afecta y cómo la propuesta ayudaría.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.2.2'], ambito: 'conocer',
          prompt: 'Dos compañeros le piden a la directora un huerto escolar. ¿Qué mensaje la **convencerá** más?',
          explain: 'Las **razones** dan fuerza a una opinión. Hoy aprenderás a construir mensajes que convencen y a justificar lo que dices.' },
        { options: [
          { id: 'a', text: '"¡Queremos un huerto porque sí!"', icon: 'Megaphone', feedback: '"Porque sí" no es una razón: la directora no sabe por qué sería bueno.' },
          { id: 'b', text: '"Queremos un huerto: aprenderíamos ciencias haciendo, tendríamos hierbas para la refacción y el terreno de atrás está sin usar."', icon: 'Sprout' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.2.2'], ambito: 'conocer', title: 'Tres intenciones de un mensaje',
          prompt: 'Antes de hablar o escribir, pregúntate: **¿para qué es mi mensaje?** Toca cada intención.' },
        { icon: 'Target', body: 'La intención decide qué incluyes: datos, pasos y causas, o razones.', reveal: [
          { icon: 'Newspaper', front: 'Informar', back: 'Dar a conocer **hechos o datos**: qué, quién, cuándo, dónde. Ejemplo: "El jueves habrá vacunación en el puesto de salud, de 8 a 12".' },
          { icon: 'Lightbulb', front: 'Explicar (exponer)', back: 'Decir **cómo funciona o por qué** pasa algo, con orden. Ejemplo: una exposición sobre cómo se forma la lluvia.' },
          { icon: 'Scale', front: 'Argumentar', back: '**Convencer** con una opinión y razones. Ejemplo: "Debemos cuidar el río, porque de él toma agua la comunidad".' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.2.2'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: ¿cuál es la intención de cada mensaje?',
          hint: '¿Da datos? → informa. ¿Dice cómo o por qué? → explica. ¿Quiere que pienses o hagas algo? → argumenta.',
          explain: 'Reconocer la intención te ayuda a escuchar con atención y a no dejarte convencer sin razones.' },
        { buckets: [
          { id: 'inf', label: 'Informar', icon: 'Newspaper', color: 'var(--area-l2)' },
          { id: 'exp', label: 'Explicar', icon: 'Lightbulb', color: 'var(--c-ok)' },
          { id: 'arg', label: 'Argumentar', icon: 'Scale', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'i1', text: 'La feria del pueblo será del 10 al 15 de agosto.', bucket: 'inf' },
          { id: 'i2', text: 'El agua del río se evapora con el calor del sol, forma nubes y vuelve a caer como lluvia.', bucket: 'exp' },
          { id: 'i3', text: 'Debemos apagar las luces al salir, porque así ahorramos energía y dinero.', bucket: 'arg' },
          { id: 'i4', text: 'Mañana no habrá clases por reunión de maestros.', bucket: 'inf' },
          { id: 'i5', text: 'Te propongo leer este libro: es emocionante y aprenderás sobre los volcanes.', bucket: 'arg' },
          { id: 'i6', text: 'Las abejas llevan el polen de una flor a otra, y así las plantas pueden formar frutos.', bucket: 'exp' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.2.2', 'l2:3.3.4'], ambito: 'conocer', title: 'Cómo se construye un mensaje que convence',
          prompt: 'Un **mensaje argumentativo** tiene tres partes. Lo más importante son las razones y la **información que las justifica**.' },
        { icon: 'Blocks', body: 'Justificar = mostrar **en qué te basas**. Una buena justificación viene de información **relacionada con el tema**, **comprobable** y de una **fuente confiable**.', reveal: [
          { icon: 'Flag', front: '1. Opinión', back: 'Lo que piensas, dicho con claridad: "Creo que la escuela necesita un huerto".' },
          { icon: 'Layers', front: '2. Razones que justifican', back: 'Por qué lo piensas, apoyado en información: un dato, un ejemplo o lo que dice una persona experta. Usa **porque, ya que, además**.' },
          { icon: 'Megaphone', front: '3. Cierre', back: 'Una invitación a actuar: "Por eso les pedimos…", "Hagámoslo juntos".' },
          { icon: 'X', front: 'No justifica', back: '"Porque sí", "todo el mundo lo dice", insultos o datos que no tienen que ver con el tema.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:3.3.4'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo Rosa **selecciona** la información que justifica su opinión.' },
        { icon: 'Search', problem: 'Rosa quiere convencer a su grado de **llevar agua pura en botella reutilizable**. Encontró cuatro datos. ¿Cuáles usa?',
          steps: [
            { text: 'Dato A: "El centro de salud recomienda tomar agua segura (hervida o clorada) para prevenir enfermedades del estómago". → **Sí**: está relacionado y viene de una fuente confiable.' },
            { text: 'Dato B: "Una botella reutilizable evita comprar muchas botellas plásticas". → **Sí**: es comprobable y apoya su idea.' },
            { text: 'Dato C: "A mi prima le gusta el color azul". → **No**: no tiene relación con el tema.', why: 'La información debe apoyar la opinión, no solo ser verdadera.' },
            { text: 'Dato D: "Todos dicen que es lo mejor". → **No**: no dice quién ni por qué; no es una razón.' },
          ],
          answer: 'Rosa escribe: "Llevemos agua pura en botella reutilizable, **porque** el centro de salud recomienda tomar agua segura para prevenir enfermedades **y además** así evitamos comprar muchas botellas plásticas. ¡Empecemos el lunes!"',
          tip: 'Pregunta a cada dato: ¿tiene que ver con mi opinión? ¿se puede comprobar? ¿de dónde viene?' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:3.3.4'], ambito: 'hacer',
          prompt: 'Quieres convencer a tu grado de que **hacer ejercicio mejora el ánimo**. ¿Qué información **justifica** mejor tu opinión?',
          explain: 'Lo que explica una persona experta en salud está relacionado con el tema y es una fuente confiable.' },
        { options: [
          { id: 'a', text: 'La doctora del centro de salud explicó que moverse cada día ayuda a sentirse con más energía y mejor ánimo.' },
          { id: 'b', text: 'Mi equipo favorito tiene un uniforme muy bonito.', feedback: 'Es una opinión y no tiene relación con el ánimo.' },
          { id: 'c', text: 'Porque sí, todos lo saben.', feedback: '"Porque sí" y "todos lo saben" no son razones: no dicen en qué te basas.' },
        ], correct: ['a'] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.2.2', 'l2:3.3.4'], ambito: 'hacer', title: 'Lectura',
          prompt: 'Lee la carta que el grado de sexto escribió a la directora y responde.' },
        { genre: 'Carta', heading: 'Carta a la directora', passage:
          'Estimada Licda. Tzul:\n\nLos estudiantes de sexto grado creemos que la escuela necesita botes para separar la basura.\n\nDurante una semana contamos lo que quedaba en el patio después del recreo: encontramos 120 botellas plásticas y muchas bolsas de golosinas. Además, en Ciencias Naturales aprendimos que el plástico tarda muchísimos años en descomponerse. Por último, don Julio, el señor que recoge la basura, nos contó que separar los materiales le ayuda a trabajar más rápido.\n\nPor eso le pedimos que nos permita colocar tres botes con rótulos: orgánico, plástico y papel. Nosotros podemos pintarlos.\n\nAtentamente,\nEstudiantes de sexto grado',
          questions: [
            { q: '¿Cuál es la **intención** de la carta?', options: [
              { id: 'a', text: 'Convencer a la directora de colocar botes para separar la basura' },
              { id: 'b', text: 'Explicar cómo se fabrica el plástico' },
              { id: 'c', text: 'Informar la fecha de la feria escolar' },
            ], correct: 'a', why: 'Tiene una opinión, razones y un pedido: es un mensaje argumentativo.' },
            { q: '¿Qué información justifica la opinión con un **dato que ellos mismos comprobaron**?', options: [
              { id: 'a', text: 'Que contaron 120 botellas plásticas en una semana' },
              { id: 'b', text: 'Que ellos pueden pintar los botes' },
              { id: 'c', text: 'Que la carta termina con "Atentamente"' },
            ], correct: 'a', why: 'Contaron durante una semana: es información comprobable y relacionada con el problema.' },
            { q: '¿Por qué incluir lo que dijo don Julio hace la carta más convincente?', options: [
              { id: 'a', text: 'Porque es una persona que conoce el tema por su trabajo' },
              { id: 'b', text: 'Porque es un señor muy simpático' },
              { id: 'c', text: 'Porque así la carta es más larga' },
            ], correct: 'a', why: 'Una fuente que conoce el tema de primera mano fortalece la justificación.' },
          ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.2.2', 'l2:3.3.4'], ambito: 'hacer',
          prompt: 'Imagina que te postulas para el gobierno escolar. Escribe **una propuesta** para mejorar tu escuela: tu **opinión**, **dos razones** con información que las justifique y un **cierre**.' },
        { minWords: 35, placeholder: 'Propongo que… porque…',
          model: 'Propongo que abramos un rincón de lectura en el corredor. Primero, porque en la biblioteca solo caben diez estudiantes a la vez, y así más compañeros podrían leer en el recreo. Además, la maestra de Comunicación nos explicó que leer un rato cada día mejora la comprensión. ¡Votemos por un recreo con libros!',
          rubric: ['Escribí una opinión clara', 'Di dos razones', 'Cada razón se apoya en información relacionada y comprobable', 'Terminé con un cierre que invita a actuar'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.2.2'], prompt: 'Boleto de salida: _"Debemos sembrar árboles en la orilla del río, porque sus raíces sostienen la tierra y evitan derrumbes."_ ¿Qué intención tiene este mensaje?' },
        { options: [
          { id: 'a', text: 'Argumentar: convencer con una razón' },
          { id: 'b', text: 'Informar una fecha' },
          { id: 'c', text: 'Dar instrucciones para sembrar' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:3.3.4'], prompt: 'Quieres convencer a tu familia de **lavarse las manos antes de comer**. ¿Qué mensaje argumentativo justifica mejor tu opinión?' },
        { options: [
          { id: 'a', text: 'El personal de salud explica que lavarse las manos con agua y jabón elimina microbios que causan enfermedades.' },
          { id: 'b', text: 'Porque me dijeron que sí.' },
          { id: 'c', text: 'El jabón de mi casa huele a limón.' },
        ], correct: ['a'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l2'], cnb: [], ambito: 'ser', prompt: '¿Cómo te fue esta semana?' },
        { statements: ['Represento un cuento con postura, gestos y movimientos', 'Distingo si un mensaje informa, explica o argumenta', 'Justifico mi opinión con información confiable'],
          commitments: ['Participaré en una dramatización con el papel que elija', 'Cuando dé mi opinión, diré al menos una razón', 'Preguntaré "¿en qué te basas?" antes de creer un mensaje'] },
      ),
    ],
  }),
];
