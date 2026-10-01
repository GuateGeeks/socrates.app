/**
 * Comunicación y Lenguaje L1 · Unidad 1 · Semana 1
 * Hilo de la semana: comunicar con intención. Primero la comunicación oral frente a un público
 * (recursos de la voz, del cuerpo y del contenido para mantener la atención) y después los
 * lenguajes que usamos en los medios tecnológicos (íconos, emojis, registro formal e informal, correo).
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's01-l1-1',
    title: '¿Qué hace que el público te escuche?',
    icon: 'Megaphone',
    minutes: 13,
    gancho: 'Seguro has escuchado a alguien hablar y te dio sueño… y a otra persona que te dejó con la boca abierta. ¿Qué hizo diferente?',
    objetivos: [
      'Reconocer los recursos que ayudan a mantener la atención de quien escucha',
      'Distinguir recursos de la voz, del cuerpo y del contenido',
      'Escribir un inicio atractivo para una exposición',
    ],
    resumen: [
      'Para mantener la atención del público usamos recursos de tres tipos: de la voz, del cuerpo y del contenido.',
      'Voz: volumen, velocidad, pausas y cambios sorpresivos. Cuerpo: gestos, mirada y movimientos. Contenido: una pregunta, un dato curioso, un ejemplo cercano o un objeto.',
      'Un buen inicio (una pregunta o un dato sorprendente) despierta la curiosidad desde el primer momento.',
    ],
    media: {
      id: 's01-l1-1-dos-exposiciones', kind: 'video', title: 'Dos maneras de exponer', aspect: '16:9', duration: 60,
      alt: 'Dos estudiantes exponen el mismo tema. El primero lee una hoja sin levantar la vista; la segunda hace una pregunta, muestra un objeto y mira a su público.',
      brief: 'Video de 60 s en un aula guatemalteca (paredes con carteles, pupitres de madera). Parte 1 (25 s): un niño expone sobre el lago de Atitlán leyendo una hoja, voz baja y monótona, sin mirar al grupo; se ve a compañeros distraídos. Parte 2 (25 s): una niña expone el mismo tema; empieza con la pregunta "¿Sabían que el lago se formó dentro de un volcán gigante?", muestra una foto, hace una pausa, camina un paso hacia el grupo y mira a distintas personas; el grupo se inclina para escuchar. Cierre (10 s): texto en pantalla "Voz · Cuerpo · Contenido". Niñas y niños con rasgos diversos (maya, ladino, garífuna), uniformes sin logotipos. Sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'conocer', title: 'Tres tipos de recursos',
          prompt: 'Cuando hablas frente a un grupo, tienes **tres herramientas** para que te escuchen. Toca cada tarjeta.' },
        { icon: 'Megaphone', body: 'Los recursos para **mantener la atención** son todo lo que haces para que tu público no se distraiga y quiera seguir escuchando.', reveal: [
          { icon: 'Volume2', front: 'La voz', back: '**Volumen** (que se oiga hasta el fondo), **velocidad** (ni muy rápido ni muy lento), **pausas** antes de algo importante y **cambios sorpresivos**: bajar la voz para crear suspenso o subirla para mostrar emoción.' },
          { icon: 'Hand', front: 'El cuerpo', back: '**Gestos** con las manos y la cara, **mirada** repartida entre todas las personas, **postura** firme y **movimientos** con intención, como acercarte al público.' },
          { icon: 'Lightbulb', front: 'El contenido', back: 'Una **pregunta** al público, un **dato curioso**, un **ejemplo cercano** a su vida, un **objeto** o imagen, una historia corta.' },
        ] },
      ),
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'conocer',
          prompt: 'Dos compañeros van a exponer sobre **los volcanes de Guatemala**. Lee cómo empieza cada uno. ¿Con cuál pondrías más atención?',
          explain: 'Una **pregunta** y un **dato curioso** despiertan la curiosidad. Hoy vas a descubrir por qué funcionan y qué otros recursos existen.' },
        { options: [
          { id: 'a', text: 'Mateo: "Buenos días. Mi tema es los volcanes. Los volcanes son montañas."', icon: 'Mountain',
            feedback: 'Es correcto, pero no despierta curiosidad: el público no tiene una razón para seguir escuchando.' },
          { id: 'b', text: 'Ixchel: "¿Alguna vez han sentido temblar el suelo sin que haya un terremoto? Algunos volcanes hacen eso. Guatemala tiene más de treinta."', icon: 'MountainSnow' },
        ], correct: ['b'] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'conocer', title: 'Lectura',
          prompt: 'Lee esta historia con atención y responde. Fíjate en **qué hace** cada personaje para que lo escuchen.' },
        { genre: 'Cuento', heading: 'La exposición del jueves', passage:
          'El jueves le tocó exponer a Mateo. Se paró frente al grupo, sacó su hoja y empezó a leer muy rápido, con la vista pegada al papel. Su voz era bajita y siempre sonaba igual. En la última fila, Rosa bostezó y Andrés empezó a dibujar en su cuaderno.\n\nDespués pasó Ixchel. No dijo nada durante un segundo. Luego levantó un frasco con arena negra y preguntó: "¿Saben de dónde viene esta arena?". Todos se enderezaron.\n\n"Viene de la playa de Monterrico", siguió, "y es negra porque se formó con rocas de volcanes". Mientras hablaba, caminaba despacio entre las filas y miraba a distintas personas. Cuando iba a decir algo importante, bajaba la voz, y el grupo se quedaba en silencio para oír.\n\nAl final, Ixchel mostró otra vez el frasco y dijo: "La próxima vez que pisen arena negra, acuérdense: están pisando un volcán".\n\nMateo se acercó en el recreo. "¿Cómo le hiciste para que te escucharan?", le preguntó. Ixchel se rio: "Practiqué en mi casa con mi abuela. Ella me dijo que hablar en público es como contar un cuento: hay que dar ganas de saber qué sigue".',
          questions: [
            { q: '¿Qué objeto usó Ixchel para empezar su exposición?', options: [
              { id: 'a', text: 'Un frasco con arena negra' },
              { id: 'b', text: 'Un cartel con fotografías' },
              { id: 'c', text: 'Una hoja para leer' },
            ], correct: 'a', why: 'Lo dice el segundo párrafo: "levantó un frasco con arena negra".' },
            { q: '¿Por qué el grupo "se quedaba en silencio" cuando Ixchel bajaba la voz?', options: [
              { id: 'a', text: 'Porque querían oír algo que parecía importante' },
              { id: 'b', text: 'Porque estaban aburridos' },
              { id: 'c', text: 'Porque la maestra los regañó' },
            ], correct: 'a', why: 'Es una inferencia: bajar la voz en el momento justo crea expectativa y el público se concentra para no perderse nada.' },
            { q: '¿Qué significa el consejo de la abuela: "hay que dar ganas de saber qué sigue"?', options: [
              { id: 'a', text: 'Que el público debe tener curiosidad por lo que vas a decir después' },
              { id: 'b', text: 'Que hay que hablar muy rápido para terminar pronto' },
              { id: 'c', text: 'Que solo los cuentos se pueden exponer' },
            ], correct: 'a', why: 'Mantener la atención es mantener viva la curiosidad de quien escucha.' },
          ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'hacer', prompt: 'Clasifica lo que hizo Ixchel según el tipo de recurso.',
          hint: 'Pregúntate: ¿esto se hace con la voz, con el cuerpo o con lo que se dice o se muestra?',
          explain: 'Ixchel combinó los tres tipos de recursos. Por eso su exposición funcionó tan bien.' },
        { buckets: [
          { id: 'voz', label: 'Voz', icon: 'Volume2', color: 'var(--area-l1)' },
          { id: 'cue', label: 'Cuerpo', icon: 'Hand', color: 'var(--c-maiz-strong)' },
          { id: 'con', label: 'Contenido', icon: 'Lightbulb', color: 'var(--c-ok)' },
        ], items: [
          { id: 'r1', text: 'Bajó la voz antes de un dato importante', bucket: 'voz' },
          { id: 'r2', text: 'Se quedó un segundo en silencio antes de empezar', bucket: 'voz', feedback: 'El silencio también es parte de la voz: es una pausa.' },
          { id: 'r3', text: 'Caminó despacio entre las filas', bucket: 'cue' },
          { id: 'r4', text: 'Miró a distintas personas', bucket: 'cue' },
          { id: 'r5', text: 'Preguntó: "¿Saben de dónde viene esta arena?"', bucket: 'con' },
          { id: 'r6', text: 'Mostró un frasco con arena negra', bucket: 'con', feedback: 'Un objeto es parte de lo que muestras: es un recurso de contenido.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo se transforma un inicio aburrido en uno que atrapa.' },
        { icon: 'Sparkles', problem: 'Inicio original: "Hoy voy a hablar del maíz." ¿Cómo lo mejoro?',
          steps: [
            { text: 'Busco algo que el público **ya conoce**: todos comemos tortillas.', why: 'Partir de la vida del público hace que el tema le importe.' },
            { text: 'Lo convierto en **pregunta**: "¿Cuántas tortillas comieron ayer?"', why: 'Una pregunta obliga a pensar y a participar.' },
            { text: 'Agrego un **dato curioso**: "El maíz se cultiva en Mesoamérica desde hace miles de años."' },
            { text: 'Decido un **recurso del cuerpo o de la voz**: levanto una mazorca y hago una pausa antes del dato.' },
          ],
          answer: '"¿Cuántas tortillas comieron ayer? (pausa, levanto una mazorca) Todas empezaron así. Y el maíz se cultiva en nuestra región desde hace miles de años."',
          tip: 'Receta para un buen inicio: pregunta + dato curioso + un gesto u objeto.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda. ¿Cuáles de estos inicios **despiertan la curiosidad**? Elige todos los correctos.',
          hint: 'Busca los que tienen una pregunta, un dato sorprendente o algo que el público conoce.',
          explain: 'Los inicios que funcionan invitan a pensar o sorprenden. "Mi tema es…" solo anuncia, no engancha.' },
        { multiple: true, options: [
          { id: 'a', text: '"¿Qué pasaría si mañana no hubiera agua en el chorro de tu casa?"', icon: 'Droplet' },
          { id: 'b', text: '"Mi tema es el agua. Empiezo."', icon: 'FileText', feedback: 'Solo anuncia el tema; no da una razón para escuchar.' },
          { id: 'c', text: '"Esta piedrita que traigo viajó por un río durante años antes de llegar aquí."', icon: 'Gem' },
          { id: 'd', text: '"Bueno… eh… no sé cómo empezar."', icon: 'X', feedback: 'Empezar dudando hace que el público también dude. Prepara tu primera frase.' },
        ], correct: ['a', 'c'] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:2.1.6'], prompt: '¿Verdadero o falso?',
          explain: 'Los recursos sirven cuando están al servicio del tema: ayudan a que el mensaje llegue, no lo reemplazan.' },
        { statements: [
          { text: 'Leer todo de una hoja, sin levantar la vista, ayuda a mantener la atención.', answer: false, why: 'Sin mirada ni cambios de voz, el público se desconecta.' },
          { text: 'Una pausa antes de un dato importante puede crear expectativa.', answer: true },
          { text: 'Cuantos más gestos hagas, mejor, aunque no tengan que ver con lo que dices.', answer: false, why: 'Los gestos deben acompañar el mensaje; si no, distraen.' },
          { text: 'Mostrar un objeto relacionado con el tema es un recurso de contenido.', answer: true },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'convivir',
          prompt: 'Estás exponiendo y notas que las personas **del fondo** se están distrayendo. ¿Qué es lo **más útil** que puedes hacer?',
          explain: 'Acercarte y hacer una pregunta combina un recurso del cuerpo (movimiento) y uno de contenido (pregunta). Además, subir un poco el volumen hace que tu voz llegue al fondo.' },
        { options: [
          { id: 'a', text: 'Dar unos pasos hacia el fondo, subir un poco el volumen y hacerles una pregunta', icon: 'Footprints' },
          { id: 'b', text: 'Regañarlos frente a todo el grupo', icon: 'Megaphone', feedback: 'Regañar corta la comunicación y hace sentir mal a las personas. Mejor invítalas a participar.' },
          { id: 'c', text: 'Hablar más rápido para terminar pronto', icon: 'Timer', feedback: 'Hablar rápido hace que se entienda menos y se distraigan más.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'hacer',
          prompt: 'Esta semana prepararás una exposición breve llamada **"Nuestro lugar en mapas y palabras"** sobre el lugar donde vives. Escribe su **inicio**: usa una pregunta o un dato curioso y di qué gesto u objeto usarás.' },
        { minWords: 20, placeholder: 'Mi inicio: "¿…?" (Gesto u objeto: …)',
          model: '"¿Sabían que desde mi casa se ven tres volcanes?" (Hago una pausa y señalo hacia la ventana.) "Vivo en Antigua Guatemala, y cada mañana el Volcán de Agua me dice si va a llover."',
          rubric: [
            'Mi inicio tiene una pregunta o un dato curioso',
            'Está relacionado con el lugar donde vivo',
            'Indiqué un gesto, una pausa o un objeto',
            'Es corto: se dice en menos de 15 segundos',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.1.6'], prompt: 'Rodrigo dice: "Y lo que encontraron dentro de la cueva fue…" y se queda callado dos segundos. ¿Qué recurso usa?' },
        { options: [
          { id: 'a', text: 'Una pausa para crear expectativa' },
          { id: 'b', text: 'Un objeto para mostrar' },
          { id: 'c', text: 'Un error: se le olvidó lo que iba a decir' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.1.6'], prompt: 'Une cada recurso con su tipo.' },
        { leftTitle: 'Recurso', rightTitle: 'Tipo', pairs: [
          { id: 'm1', left: 'Mirar a distintas personas del grupo', right: 'Cuerpo' },
          { id: 'm2', left: 'Bajar la voz de repente', right: 'Voz' },
          { id: 'm3', left: 'Contar un dato sorprendente', right: 'Contenido' },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's01-l1-2',
    title: 'Tu voz: volumen, velocidad, pausas y sorpresa',
    icon: 'Volume2',
    minutes: 14,
    gancho: 'Si alguien dice "ven acá" en voz alta, en susurro o gritando, ¿significa lo mismo?',
    objetivos: [
      'Usar el volumen para que tu voz llegue a todo el público',
      'Controlar la velocidad y las pausas al hablar',
      'Usar cambios sorpresivos de voz para crear suspenso o emoción',
    ],
    resumen: [
      'Proyectar la voz es hablar con un volumen que llegue hasta la última persona, sin gritar: respira profundo y habla "hacia el fondo".',
      'Habla a una velocidad tranquila y haz pausas: una corta en las comas y una más larga en los puntos o antes de algo importante.',
      'Un cambio sorpresivo de voz (bajar a casi un susurro o subir con emoción) despierta la atención, pero se usa pocas veces para que no pierda su efecto.',
      'Para ensayar, marca tu texto: / pausa corta, // pausa larga, palabras subrayadas para darles fuerza.',
    ],
    media: {
      id: 's01-l1-2-voz', kind: 'audio', title: 'Una frase, tres voces', duration: 40,
      alt: 'Se escucha tres veces la frase "Y en ese momento, la puerta se abrió": primero rápida y plana, luego a volumen normal con pausas, y al final en voz baja con una pausa larga que crea suspenso.',
      brief: 'Audio de 40 s grabado por una voz adulta cálida, español de Guatemala. Locución: "Escucha la misma frase dicha de tres maneras." Versión 1: "Y en ese momento, la puerta se abrió" dicha rápida y sin cambios. Versión 2: con volumen medio y pausa en la coma. Versión 3: bajando a casi susurro, con pausa larga antes de "se abrió" y un leve rechinido de puerta de fondo. Cierre: "¿Cuál te dio más ganas de saber qué pasó?". Sin música de fondo durante las frases.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:2.1.6', 'l1:2.1.4'], ambito: 'conocer', title: 'Las cuatro perillas de tu voz',
          prompt: 'Imagina que tu voz tiene **cuatro perillas** que puedes mover. Toca cada una para saber cómo usarla.' },
        { icon: 'Mic', body: 'Una voz que siempre suena igual adormece. Una voz que **cambia con intención** mantiene despierto al público.', reveal: [
          { icon: 'Volume2', front: '1. Volumen', back: '**Proyecta la voz**: que te oiga la última persona sin que tengas que gritar. Truco: respira profundo, abre bien la boca y habla "hacia la pared del fondo".' },
          { icon: 'Gauge', front: '2. Velocidad', back: 'Habla **más despacio** que en una plática con amigos. Si vas muy rápido, el público no alcanza a entender. Ve un poco más lento en las ideas importantes.' },
          { icon: 'Pause', front: '3. Pausas', back: 'Una **pausa corta** en cada coma y una **más larga** en cada punto. Antes de un dato importante, una pausa de uno o dos segundos hace que todos pongan atención.' },
          { icon: 'Zap', front: '4. Cambio sorpresivo', back: 'Bajar la voz casi a un susurro crea **suspenso**; subirla con energía muestra **emoción**. Úsalo pocas veces: si lo haces siempre, deja de sorprender.' },
        ] },
      ),
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'conocer',
          prompt: 'Escucha el audio: la misma frase dicha de **tres maneras**. ¿Cuál crea más **suspenso**?',
          explain: 'La tercera versión baja el volumen y hace una pausa larga. Tu voz puede cambiar el efecto de las mismas palabras. ¡Hoy aprenderás a controlarla!' },
        { options: [
          { id: 'a', text: 'La primera: rápida y sin cambios', icon: 'FastForward', feedback: 'Al decirla rápido y plano, la frase pasa sin que nadie la note.' },
          { id: 'b', text: 'La segunda: volumen normal con una pausa corta', icon: 'Volume1', feedback: 'Se entiende bien, pero no crea tanta expectativa.' },
          { id: 'c', text: 'La tercera: voz baja y una pausa larga antes del final', icon: 'VolumeX' },
        ], correct: ['c'] },
      ),
      S.match(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:2.1.6', 'l1:2.1.4'], ambito: 'hacer', prompt: 'Une cada situación con la "perilla" de la voz que más conviene usar.',
          hint: 'Piensa qué problema tiene cada situación: ¿no se oye?, ¿no se entiende?, ¿no hay emoción?',
          explain: 'Cada perilla resuelve un problema diferente: el volumen, que se oiga; la velocidad, que se entienda; la pausa, que se note lo importante; el cambio, que emocione.' },
        { leftTitle: 'Situación', rightTitle: 'Qué hago con la voz', pairs: [
          { id: 'v1', left: 'Expones en el patio y hay mucho espacio', right: 'Subo el volumen y proyecto la voz' },
          { id: 'v2', left: 'Tu compañera dice que no te entiende porque vas "como tren"', right: 'Hablo más despacio' },
          { id: 'v3', left: 'Vas a decir el dato más importante de tu exposición', right: 'Hago una pausa antes de decirlo' },
          { id: 'v4', left: 'Cuentas una leyenda y llega la parte de miedo', right: 'Bajo la voz casi a un susurro' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'hacer', title: 'Ejemplo resuelto: marcar un texto para leerlo en voz alta',
          prompt: 'Las personas que narran en la radio **marcan su texto** antes de leerlo. Mira cómo se hace.' },
        { icon: 'PenLine', problem: 'Texto: "El quetzal vive en los bosques nublados. Sus plumas verdes brillan con el sol. Y hoy, está en peligro."',
          steps: [
            { text: 'Marco **/** (pausa corta) en las comas y **//** (pausa larga) en los puntos: "El quetzal vive en los bosques nublados. // Sus plumas verdes brillan con el sol. // Y hoy, / está en peligro."' },
            { text: 'Subrayo las palabras que quiero decir con **más fuerza**: "plumas _verdes_", "_brillan_", "_peligro_".', why: 'Así el público oye primero lo más importante.' },
            { text: 'Decido un **cambio de voz**: la última oración la digo más lenta y más baja.', why: 'El cambio anuncia que viene algo serio.' },
            { text: 'Ensayo dos veces en voz alta respetando mis marcas.' },
          ],
          answer: '"El quetzal vive en los bosques nublados. // Sus plumas _verdes_ _brillan_ con el sol. // (más lento y bajo) Y hoy, / está en _peligro_."',
          tip: 'Marcas útiles: / pausa corta · // pausa larga · palabra subrayada = con fuerza · (bajo) o (alto) = cambio de voz.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'hacer',
          prompt: 'Ahora tú. ¿Dónde conviene hacer la **pausa larga** para crear suspenso en esta frase?\n\n"Abrimos la caja con cuidado y adentro encontramos un pequeño quetzal de barro."',
          hint: 'La pausa de suspenso va justo **antes** de revelar la sorpresa.',
          explain: 'Pausar antes de "un pequeño quetzal de barro" hace que el público se pregunte qué había adentro.' },
        { options: [
          { id: 'a', text: '"Abrimos // la caja con cuidado…"', feedback: 'Ahí todavía no hay nada que revelar.' },
          { id: 'b', text: '"…y adentro encontramos // un pequeño quetzal de barro."' },
          { id: 'c', text: '"…un pequeño quetzal de barro. //" (al final)', feedback: 'Al final la sorpresa ya se reveló; la pausa ya no crea suspenso.' },
        ], correct: ['b'] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'hacer',
          prompt: 'Lee este fragmento de una leyenda guatemalteca. Imagina que lo vas a **contar en voz alta** a tu grupo y responde.' },
        { genre: 'Leyenda', heading: 'El Sombrerón (fragmento)', passage:
          'Cuentan los abuelos que, en las noches de luna, se oye por las calles empedradas el trote de unas mulas. Nadie las ve llegar.\n\nDetrás de ellas camina un hombrecito pequeño, con botas brillantes y un sombrero tan grande que le tapa casi todo el cuerpo. Lleva una guitarra y canta bajito, muy bajito, frente a las ventanas.\n\nA la mañana siguiente, las mulas amanecen con las crines trenzadas en trenzas finísimas que nadie puede deshacer.\n\nY dicen que, si una noche escuchas una guitarra lejana… es mejor no asomarte a la ventana.',
          questions: [
            { q: '¿En qué parte conviene **bajar la voz** para crear suspenso?', options: [
              { id: 'a', text: '"…es mejor no asomarte a la ventana."' },
              { id: 'b', text: '"Cuentan los abuelos que…"' },
              { id: 'c', text: 'En ninguna: toda la leyenda se lee igual' },
            ], correct: 'a', why: 'Es el final misterioso de la leyenda: la voz baja y lenta deja al público con un escalofrío.' },
            { q: '¿Dónde harías una **pausa larga**, antes de revelar algo?', options: [
              { id: 'a', text: 'Antes de "es mejor no asomarte a la ventana"' },
              { id: 'b', text: 'Entre "calles" y "empedradas"' },
              { id: 'c', text: 'Después de la palabra "Cuentan"' },
            ], correct: 'a', why: 'Los puntos suspensivos (…) del texto ya te avisan que ahí va una pausa de suspenso.' },
            { q: 'La frase "canta bajito, muy bajito" repite una palabra. ¿Qué efecto busca?', options: [
              { id: 'a', text: 'Que imaginemos un canto suave y misterioso' },
              { id: 'b', text: 'Es un error del texto' },
              { id: 'c', text: 'Que leamos esa parte gritando' },
            ], correct: 'a', why: 'La repetición refuerza la idea; al leerla, puedes bajar la voz de verdad para que el público "oiga" ese canto.' },
          ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:2.1.6', 'l1:2.1.4'], ambito: 'hacer',
          prompt: 'Completa los consejos de un locutor de radio comunitaria.',
          explain: 'Proyectar no es gritar: es usar bien la respiración para que la voz llegue lejos sin lastimar la garganta.' },
        { text: 'Para que me oigan en el fondo, [[proyecto]] la voz sin gritar. En cada punto hago una [[pausa]] larga. Si voy muy rápido, nadie me entiende: por eso cuido la [[velocidad]]. Cuando cuento algo misterioso, [[bajo]] la voz.',
          distractors: ['grito', 'apago', 'prisa'] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:2.1.6', 'l1:2.1.4'], prompt: '¿Verdadero o falso?',
          explain: 'Una voz variada, clara y con pausas es una voz que se escucha con gusto.' },
        { statements: [
          { text: 'Proyectar la voz significa gritar lo más fuerte posible.', answer: false, why: 'Se trata de que llegue lejos respirando bien, sin forzar la garganta.' },
          { text: 'Si bajas la voz de repente, el público suele guardar silencio para oírte.', answer: true },
          { text: 'Usar el cambio sorpresivo en cada oración lo hace más efectivo.', answer: false, why: 'Si se usa siempre, deja de sorprender.' },
          { text: 'En una exposición conviene hablar un poco más despacio que en una plática con amigos.', answer: true },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.1.6'], prompt: 'Vas a leer en el acto cívico: "¡Y nuestro equipo ganó el campeonato!". ¿Qué cambio de voz transmite mejor la **emoción**?' },
        { options: [
          { id: 'a', text: 'Subir el volumen y la energía en "¡ganó el campeonato!"' },
          { id: 'b', text: 'Decirlo en susurro y muy despacio' },
          { id: 'c', text: 'Decirlo con el mismo tono de todo lo demás' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.1.6', 'l1:2.1.4'], prompt: 'En un texto marcado para leer en voz alta, ¿qué significa **//**?' },
        { options: [
          { id: 'a', text: 'Una pausa larga' },
          { id: 'b', text: 'Leer más rápido' },
          { id: 'c', text: 'Subir el volumen' },
        ], correct: ['a'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 3 ─────────────────────────────
  lesson({
    id: 's01-l1-3',
    title: 'El cuerpo también habla: gestos, mirada y movimiento',
    icon: 'PersonStanding',
    minutes: 14,
    gancho: 'Sin decir una palabra, ¿puedes saber si alguien está nervioso, contento o aburrido? ¿Cómo lo sabes?',
    objetivos: [
      'Usar gestos, mirada, postura y movimientos para acompañar lo que dices',
      'Reconocer cuándo el cuerpo y las palabras dicen lo mismo',
      'Preparar el guion de una exposición de un minuto',
    ],
    resumen: [
      'Los gestos (manos y cara), la mirada, la postura y los movimientos también comunican.',
      'Reparte la mirada entre todas las personas; párate firme; mueve las manos para mostrar tamaños, cantidades o direcciones.',
      'El cuerpo y las palabras deben decir lo mismo: si dices "¡qué emoción!" con cara seria, el público se confunde.',
      'Una exposición corta tiene inicio (atrapa), desarrollo (2 o 3 ideas) y cierre (una frase para recordar).',
    ],
    media: {
      id: 's01-l1-3-cuerpo', kind: 'image', title: 'Lo que dice el cuerpo', aspect: '16:9',
      alt: 'Dos ilustraciones de la misma niña exponiendo: a la izquierda, con los brazos cruzados, mirando al piso y balanceándose; a la derecha, parada firme, mirando al grupo y señalando un mapa.',
      brief: 'Ilustración plana en dos paneles. Panel izquierdo con etiqueta "Distrae": niña de 12 años con brazos cruzados, vista al suelo, un pie cruzado detrás del otro, flechas que indican balanceo. Panel derecho con etiqueta "Comunica": la misma niña con postura erguida, pies separados al ancho de los hombros, mano abierta señalando un mapa de su municipio, mirada hacia el público; líneas punteadas desde sus ojos hacia distintos compañeros. Fondo de aula guatemalteca sencilla. Colores cálidos, sin texto adicional.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'conocer', title: 'Cuatro formas en que habla tu cuerpo',
          prompt: 'Toca cada tarjeta y descubre cómo usar tu cuerpo al exponer.' },
        { icon: 'PersonStanding', body: 'El lenguaje del cuerpo se llama **comunicación no verbal**: todo lo que comunicamos sin palabras.', reveal: [
          { icon: 'Hand', front: 'Gestos', back: 'Con las **manos** puedes mostrar tamaños ("así de grande"), cantidades (tres dedos), direcciones (señalar el mapa). Con la **cara** muestras emociones: sorpresa, alegría, preocupación.' },
          { icon: 'Eye', front: 'Mirada', back: '**Reparte la mirada**: mira un momento a una persona de la izquierda, otra del centro y otra de la derecha. Así todos sienten que les hablas a ellos.' },
          { icon: 'PersonStanding', front: 'Postura', back: 'Párate **firme**, con los pies separados al ancho de los hombros y la espalda recta. Evita balancearte o esconder las manos en los bolsillos.' },
          { icon: 'Footprints', front: 'Movimientos', back: 'Muévete **con intención**: da un paso hacia el público para decir algo importante o acércate al cartel para señalarlo. No camines de un lado a otro sin razón.' },
        ] },
      ),
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'conocer',
          prompt: 'Observa la imagen. La niña de la izquierda dice exactamente las mismas palabras que la de la derecha. ¿Qué **te comunica** su cuerpo?',
          explain: 'Aunque las palabras sean iguales, los brazos cruzados, la vista al suelo y el balanceo transmiten nervios o desinterés. El cuerpo habla, ¡aunque no queramos!' },
        { options: [
          { id: 'a', text: 'Que está segura y entusiasmada con su tema', feedback: 'Fíjate en los brazos y en hacia dónde mira: dicen otra cosa.' },
          { id: 'b', text: 'Que está nerviosa o que no le interesa mucho su tema' },
          { id: 'c', text: 'Nada: el cuerpo no comunica', feedback: 'Siempre comunica. Por eso conviene usarlo a nuestro favor.' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'hacer', prompt: '¿Esto **ayuda** a comunicar o **distrae** al público?',
          hint: 'Pregúntate si el gesto o movimiento acompaña lo que se está diciendo.',
          explain: 'Lo que ayuda tiene una intención clara. Lo que distrae son hábitos de nervios que podemos corregir con práctica.' },
        { buckets: [
          { id: 'ay', label: 'Ayuda', icon: 'ThumbsUp', color: 'var(--c-ok)' },
          { id: 'di', label: 'Distrae', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'c1', text: 'Abrir los brazos al decir "un lago enorme"', bucket: 'ay' },
          { id: 'c2', text: 'Jugar con el lapicero todo el tiempo', bucket: 'di' },
          { id: 'c3', text: 'Mirar a personas de distintos lados del salón', bucket: 'ay' },
          { id: 'c4', text: 'Mirar solo a la maestra', bucket: 'di', feedback: 'El resto del grupo siente que no le hablas. Reparte la mirada.' },
          { id: 'c5', text: 'Dar un paso al frente antes del dato más importante', bucket: 'ay' },
          { id: 'c6', text: 'Balancearse de un pie al otro', bucket: 'di' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'conocer',
          prompt: 'Carlos dice: **"¡Estoy feliz de presentarles mi pueblo!"**, pero lo dice con la cara seria, mirando al piso y con los hombros caídos. ¿Qué problema hay?',
          hint: 'Compara lo que dicen sus palabras con lo que dice su cuerpo.',
          explain: 'Cuando el cuerpo y las palabras no coinciden, el público suele creerle más al cuerpo. Para comunicar bien, los dos deben decir lo mismo.' },
        { options: [
          { id: 'a', text: 'Sus palabras dicen "feliz", pero su cuerpo dice "triste" o "nervioso": no coinciden' },
          { id: 'b', text: 'Ninguno: lo importante son solo las palabras', feedback: 'El cuerpo también manda un mensaje, y aquí contradice a las palabras.' },
          { id: 'c', text: 'Habló demasiado fuerte', feedback: 'El problema no está en el volumen, sino en su cara y su postura.' },
        ], correct: ['a'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'hacer', title: 'Ejemplo resuelto: el guion de una exposición de un minuto',
          prompt: 'Ana preparó su exposición **"Nuestro lugar en mapas y palabras"**. Mira cómo organizó su guion y dónde decidió usar cada recurso.' },
        { icon: 'ClipboardList', problem: 'Ana vive en Livingston, Izabal. Tiene un minuto para presentar su lugar.',
          steps: [
            { text: '**Inicio (atrapa):** "¿Se imaginan ir a la escuela… en lancha?" (Pausa. Sonríe. Mira a todo el grupo.)', why: 'Pregunta + pausa + mirada: tres recursos en diez segundos.' },
            { text: '**Idea 1:** "Livingston está donde el río Dulce llega al mar Caribe." (Señala el lugar en un mapa.)', why: 'El gesto de señalar ayuda a ubicar.' },
            { text: '**Idea 2:** "Ahí vivimos familias garífunas, q\'eqchi\' y ladinas; por eso se oyen varios idiomas." (Cuenta con los dedos: uno, dos, tres.)' },
            { text: '**Idea 3:** "Mi comida favorita es el tapado, una sopa de mariscos con coco." (Cara de "¡qué rico!".)' },
            { text: '**Cierre (para recordar):** "Si algún día llegan en lancha, los espero con un tapado." (Da un paso al frente y sonríe.)', why: 'Un cierre amable y concreto se queda en la memoria.' },
          ],
          answer: 'Un guion claro: inicio que atrapa, tres ideas cortas y un cierre, cada parte con su recurso de voz o de cuerpo anotado entre paréntesis.',
          tip: 'Escribe tus recursos entre paréntesis en el guion, como si fueras actor o actriz.' },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'hacer', prompt: 'Ordena las partes de la exposición de Pedro sobre San Juan Comalapa.',
          explain: 'Primero se atrapa la atención, luego se desarrollan las ideas y al final se cierra con algo memorable.' },
        { labels: { start: 'Empieza', end: 'Termina' }, items: [
          { id: 'o1', text: '"¿Sabían que en mi pueblo hay un muro pintado de colores que cuenta nuestra historia?" (Pausa.)' },
          { id: 'o2', text: '"Comalapa está en Chimaltenango y es conocida por sus pintores." (Señala el mapa.)' },
          { id: 'o3', text: '"Mi tío pinta la cosecha del maíz; a veces yo le ayudo a mezclar colores." (Muestra un dibujo.)' },
          { id: 'o4', text: '"Cuando vayan, busquen el muro: una parte de nuestra historia está pintada ahí." (Paso al frente, sonrisa.)' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'hacer', prompt: 'Une cada frase del guion con el gesto que mejor la acompaña.',
          explain: 'Los buenos gestos "dibujan" en el aire lo que dicen las palabras.' },
        { leftTitle: 'Frase', rightTitle: 'Gesto', pairs: [
          { id: 'g1', left: '"El volcán es altísimo."', right: 'Levantar la mano por encima de la cabeza' },
          { id: 'g2', left: '"Tenemos tres ríos."', right: 'Mostrar tres dedos' },
          { id: 'g3', left: '"El mercado queda hacia allá."', right: 'Señalar con la mano abierta' },
          { id: 'g4', left: '"¡No lo podía creer!"', right: 'Abrir los ojos con cara de sorpresa' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'hacer',
          prompt: 'Escribe el guion de tu exposición **"Nuestro lugar en mapas y palabras"** (un minuto). Usa el inicio que escribiste en la lección 1, agrega **dos o tres ideas** y un **cierre**. Anota entre paréntesis tus recursos de voz y de cuerpo. Después, ensáyala frente a alguien de tu familia.' },
        { minWords: 50, placeholder: 'Inicio: … (recurso)\nIdea 1: … (recurso)\nIdea 2: …\nCierre: …',
          model: 'Inicio: "¿Sabían que desde mi casa se ven tres volcanes?" (Pausa, señalo la ventana.)\nIdea 1: "Vivo en Antigua Guatemala, una ciudad de calles empedradas." (Muestro una foto.)\nIdea 2: "Cada mañana miro el Volcán de Agua: si tiene nubes, mi abuela dice que va a llover." (Cara de duda, sonrío.)\nIdea 3: "En Semana Santa las calles se llenan de alfombras de aserrín de colores." (Abro los brazos.)\nCierre: "Mi lugar es pequeño, pero desde él se ven gigantes." (Paso al frente, voz más lenta.)',
          rubric: [
            'Tiene inicio, 2 o 3 ideas y cierre',
            'Anoté al menos un recurso de voz (pausa, cambio de volumen)',
            'Anoté al menos dos recursos de cuerpo (gesto, mirada, movimiento)',
            'Los gestos acompañan lo que digo',
            'Lo ensayé en voz alta',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.1.6'], prompt: '¿Qué es **repartir la mirada**?' },
        { options: [
          { id: 'a', text: 'Mirar un momento a personas de distintos lados del grupo' },
          { id: 'b', text: 'Mirar fijamente a una sola persona' },
          { id: 'c', text: 'Cerrar los ojos para concentrarse' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.1.6'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Mostrar tres dedos al decir "tres ríos" es un gesto que acompaña el mensaje.', answer: true },
          { text: 'Caminar de un lado a otro sin parar ayuda a mantener la atención.', answer: false, why: 'Los movimientos deben tener intención; si no, distraen.' },
          { text: 'Si tus palabras dicen alegría, tu cara también debería mostrarla.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 4 ─────────────────────────────
  lesson({
    id: 's01-l1-4',
    title: 'Construir y leer un mapa anotado',
    icon: 'Map',
    minutes: 14,
    gancho: 'Un mapa pequeño puede decir dónde está un lugar, qué significa cada signo y qué evidencia encontramos allí. ¿Cómo logramos que otra persona lo entienda sin explicaciones extra?',
    objetivos: [
      'Interpretar la orientación, los símbolos y la clave de un mapa',
      'Construir un mapa sencillo con símbolos explicados',
      'Vincular una anotación de evidencia con el lugar correspondiente',
    ],
    resumen: [
      'La flecha N orienta el mapa y permite reconocer el norte.',
      'Los símbolos representan lugares; la clave explica qué significa cada símbolo.',
      'Los rótulos nombran los lugares y las anotaciones conectan una evidencia con un lugar mediante una línea.',
      'Un mapa claro permite que otra persona ubique, interprete y compruebe la información.',
    ],
    media: {
      id: 's01-l1-4-mapa-anotado', kind: 'diagram', title: 'Cómo se construye un mapa anotado', aspect: '4:3',
      alt: 'Croquis sencillo con flecha norte, camino, escuela, nacimiento de agua y barranco; una clave explica tres símbolos y una anotación está unida a la escuela.',
      brief: 'Diagrama escolar de un croquis visto desde arriba. Incluye una flecha N, un camino principal, tres lugares rotulados (escuela, nacimiento de agua y barranco), tres símbolos simples repetidos en una clave y una anotación breve unida mediante una línea a la escuela. Fondo claro, trazo grueso y rótulos legibles en celular.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:3.2.1', 'l1:3.3.1'], ambito: 'conocer', title: 'Cuatro convenciones para comunicar un lugar',
          prompt: 'Un mapa combina lenguaje icónico y escrito. Cada parte cumple una función para que otras personas puedan interpretarlo.' },
        { icon: 'Map', body: 'Primero se establece la **orientación**; luego se colocan **símbolos**, se explican en una **clave** y se conectan **anotaciones** de evidencia con lugares precisos.', reveal: [
          { icon: 'Navigation', front: 'Orientación', back: 'Una flecha con la letra **N** indica el norte y permite reconocer las demás direcciones.' },
          { icon: 'MapPin', front: 'Símbolo y rótulo', back: 'Un signo sencillo representa un lugar y el rótulo confirma su nombre.' },
          { icon: 'List', front: 'Clave', back: 'Repite cada símbolo y explica su significado. El mismo signo puede significar cosas distintas en mapas diferentes.' },
          { icon: 'MessageSquareText', front: 'Anotación de evidencia', back: 'Una frase breve se une con una línea al lugar que aporta la evidencia: por ejemplo, “La escuela está en terreno firme”.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:3.2.1', 'l1:3.3.1'], ambito: 'hacer', title: 'Modelo: del croquis a la evidencia',
          prompt: 'Observa cómo Ana construye un mapa que otra persona puede leer sin ayuda.' },
        { icon: 'Map', problem: 'Ana necesita representar la escuela, un nacimiento de agua y un barranco, y mostrar que la escuela está en terreno firme.',
          steps: [
            { text: 'Traza el camino principal y añade una flecha con **N** para orientar el mapa.' },
            { text: 'Coloca tres símbolos sencillos donde están los lugares y escribe sus rótulos.' },
            { text: 'Copia los tres símbolos en una **clave** y escribe qué significa cada uno.' },
            { text: 'Escribe “La escuela está en terreno firme” y la une con una línea al símbolo de la escuela.', why: 'La línea muestra qué lugar respalda la anotación.' },
          ],
          answer: 'El mapa queda orientado, sus símbolos se entienden por la clave y la anotación está vinculada a la escuela.',
          tip: 'Comprueba que cada símbolo aparezca en la clave y que cada anotación señale un lugar concreto.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:3.2.1', 'l1:3.3.1'], ambito: 'hacer',
          prompt: 'Ayuda a Ana a organizar las piezas antes de dibujar el mapa.',
          hint: 'En el mapa van la orientación y los lugares; la clave explica signos; la anotación comunica evidencia vinculada.',
          explain: 'La flecha N y los lugares se colocan en el mapa; la clave explica los símbolos; la anotación se une al lugar que aporta la evidencia.' },
        { buckets: [
          { id: 'mapa', label: 'Colocar en el mapa', icon: 'Map' },
          { id: 'clave', label: 'Explicar en la clave', icon: 'List' },
          { id: 'anotacion', label: 'Vincular como anotación', icon: 'MessageSquareText' },
        ], items: [
          { id: 'g1', text: 'Flecha con la letra N', bucket: 'mapa' },
          { id: 'g2', text: 'Símbolo de la escuela en su ubicación', bucket: 'mapa' },
          { id: 'g3', text: 'El mismo símbolo junto a la palabra “Escuela”', bucket: 'clave' },
          { id: 'g4', text: '“La escuela está en terreno firme”, unida con una línea a la escuela', bucket: 'anotacion' },
        ] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:3.2.1', 'l1:3.3.1'], ambito: 'hacer', title: 'Transferencia: un mapa que se entiende solo',
          prompt: 'Sin mirar el modelo, representa un trayecto corto de tu casa a un lugar conocido.' },
        { goal: 'Construir un croquis orientado que comunique lugares y una evidencia sin explicación oral.',
          steps: [
            { title: 'Base y clave', detail: 'Traza un camino, marca el norte, coloca dos lugares con símbolos y rótulos, y explica ambos símbolos en una clave.' },
            { title: 'Evidencia vinculada', detail: 'Escribe una observación comprobable y únela con una línea al lugar correspondiente.' },
          ],
          evidence: 'Un croquis con norte, dos lugares rotulados, una clave de dos símbolos y una anotación vinculada.',
          rubric: [
            'La flecha N orienta el mapa',
            'Los dos símbolos aparecen explicados en la clave',
            'La anotación expresa evidencia y señala un lugar concreto',
          ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:3.2.1', 'l1:3.3.1'], ambito: 'hacer',
          prompt: 'Luis dibujó un triángulo junto al camino, pero no lo incluyó en la clave. ¿Qué debe hacer para que el mapa sea interpretable?' },
        { options: [
          { id: 'a', text: 'Añadir el triángulo a la clave y explicar qué representa' },
          { id: 'b', text: 'Cambiar el triángulo de color sin explicar nada' },
          { id: 'c', text: 'Borrar la flecha norte' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:3.2.1', 'l1:3.3.1'], ambito: 'conocer',
          prompt: 'Relaciona cada problema del mapa con la corrección que necesita.' },
        { leftTitle: 'Problema', rightTitle: 'Corrección', pairs: [
          { id: 'p1', left: 'No se sabe hacia dónde queda el norte', right: 'Añadir una flecha N' },
          { id: 'p2', left: 'Un símbolo no se entiende', right: 'Explicarlo en la clave' },
          { id: 'p3', left: 'Una evidencia parece estar suelta', right: 'Unirla con una línea al lugar' },
        ] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.2.1', 'l1:3.3.1'], prompt: 'Evalúa estas decisiones de construcción cartográfica.' },
        { statements: [
          { text: 'La clave debe incluir los símbolos que aparecen en el mapa.', answer: true },
          { text: 'Una anotación puede quedar lejos y sin conexión porque su lugar se adivina.', answer: false, why: 'Debe señalar el lugar que aporta la evidencia.' },
          { text: 'La orientación y los rótulos ayudan a ubicar e interpretar los lugares.', answer: true },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.2.1', 'l1:3.3.1'], prompt: '¿Cuál mapa comunica mejor una observación sobre la cancha?' },
        { options: [
          { id: 'a', text: 'Tiene norte, cancha rotulada, símbolo explicado y la frase “Se inunda cuando llueve” unida a la cancha' },
          { id: 'b', text: 'Tiene varios dibujos decorativos sin clave ni rótulos' },
          { id: 'c', text: 'Tiene la frase “Hay un problema” sin señalar ningún lugar' },
        ], correct: ['a'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 5 ─────────────────────────────
  lesson({
    id: 's01-l1-5',
    title: 'Escribir un correo electrónico claro y respetuoso',
    icon: 'Mail',
    minutes: 14,
    gancho: 'Antes, para comunicarse con alguien lejos, las personas escribían cartas que tardaban semanas en llegar. Hoy un correo llega en segundos. ¿Se escribe igual?',
    objetivos: [
      'Reconocer las partes de un correo electrónico',
      'Escribir un asunto claro y un mensaje completo y cortés',
      'Cuidar tus datos personales al usar el correo',
    ],
    resumen: [
      'Partes de un correo: destinatario (Para), asunto, saludo, cuerpo del mensaje, despedida y firma. Se puede adjuntar un archivo con el ícono del clip.',
      'El asunto dice en pocas palabras de qué trata el correo: "Solicitud de información sobre la biblioteca".',
      'El cuerpo explica quién escribe, qué necesita y para qué, con palabras completas y cortesía.',
      'Nunca compartas contraseñas ni datos personales con personas que no conoces. Si algo te incomoda, cuéntaselo a un adulto de confianza.',
    ],
    media: {
      id: 's01-l1-5-correo', kind: 'diagram', title: 'Las partes de un correo', aspect: '4:3',
      alt: 'Ventana de correo electrónico con flechas que señalan: Para, Asunto, saludo, cuerpo, despedida, firma y el ícono del clip para adjuntar.',
      brief: 'Diagrama de una ventana de correo genérica (sin marca real). Campos rotulados con flechas de colores: "Para" (correo inventado biblioteca@ejemplo.org), "Asunto: Solicitud de libros sobre volcanes", saludo "Buenos días:", cuerpo de tres líneas, despedida "Atentamente,", firma "Julio Tzoc, 6.º grado, Escuela Oficial Rural Mixta" y el ícono de clip con la etiqueta "Adjuntar". Estilo plano, colores suaves, letra grande legible en teléfono.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:3.4.2'], ambito: 'conocer', title: 'Las partes de un correo',
          prompt: 'Observa el diagrama y toca cada tarjeta para conocer las partes de un correo electrónico.' },
        { icon: 'Mail', body: 'Un correo electrónico es parecido a una carta, pero viaja por internet. Tiene partes que ayudan a que llegue a la persona correcta y se entienda.', reveal: [
          { icon: 'AtSign', front: 'Para (destinatario)', back: 'La **dirección de correo** de quien lo recibe. Revísala letra por letra: un error y el correo no llega.' },
          { icon: 'Tag', front: 'Asunto', back: 'El **tema** en pocas palabras. Ejemplo: "Consulta sobre la tarea de Ciencias".' },
          { icon: 'Hand', front: 'Saludo', back: 'Formal: "Buenos días, señora directora:" / "Estimado señor Pérez:". Informal (familia): "¡Hola, tía Rosa!".' },
          { icon: 'AlignJustify', front: 'Cuerpo', back: 'El mensaje: **quién eres**, **qué necesitas o quieres contar** y **para qué**. Párrafos cortos y palabras completas.' },
          { icon: 'PenLine', front: 'Despedida y firma', back: 'Despedida: "Atentamente," / "Muchas gracias," / "Un abrazo,". Firma: tu nombre y, si es formal, tu grado y escuela.' },
        ] },
      ),
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:3.4.2'], ambito: 'conocer',
          prompt: 'La directora recibe muchos correos al día. ¿Cuál de estos **asuntos** le ayuda a saber de qué trata el mensaje antes de abrirlo?',
          explain: 'Un buen asunto es corto y dice exactamente de qué trata el correo. Así la persona sabe si es urgente y lo encuentra fácilmente después.' },
        { options: [
          { id: 'a', text: '"Hola"', icon: 'Mail', feedback: '"Hola" no dice nada sobre el tema del correo.' },
          { id: 'b', text: '"Solicitud de permiso para la feria de ciencias"', icon: 'MailCheck' },
          { id: 'c', text: '"URGENTE!!!!!"', icon: 'Megaphone', feedback: 'Las mayúsculas y los signos repetidos parecen gritos, y no dicen el tema.' },
        ], correct: ['b'] },
      ),
      S.order(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:3.4.2'], ambito: 'hacer', prompt: 'Ordena las partes del correo de Julio, de arriba hacia abajo.',
          hint: 'Primero va a quién y sobre qué; luego el saludo, el mensaje y, al final, la despedida y la firma.',
          explain: 'Este orden es el mismo en casi todos los correos: te ayuda a no olvidar ninguna parte.' },
        { labels: { start: 'Arriba', end: 'Abajo' }, items: [
          { id: 'p1', text: 'Para: biblioteca.municipal@ejemplo.org' },
          { id: 'p2', text: 'Asunto: Solicitud de libros sobre volcanes' },
          { id: 'p3', text: 'Buenos días:' },
          { id: 'p4', text: 'Soy estudiante de sexto grado y estoy preparando una exposición sobre los volcanes de Guatemala. ¿Tienen libros sobre el tema que pueda consultar?' },
          { id: 'p5', text: 'Atentamente,' },
          { id: 'p6', text: 'Julio Tzoc, 6.º grado' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:3.4.2'], ambito: 'hacer', title: 'Ejemplo resuelto: de mensaje apurado a correo claro',
          prompt: 'Mira cómo Andrea mejora su correo paso a paso.' },
        { icon: 'MailCheck', problem: 'Primer intento de Andrea al comité de la feria: Asunto: "hola". Cuerpo: "q dia es la feria y si puedo llevar mi proyecto de plantas".',
          steps: [
            { text: 'Escribe un **asunto** que diga el tema: "Consulta sobre la feria escolar".' },
            { text: 'Agrega un **saludo** formal: "Buenas tardes, estimado comité:".', why: 'El comité no es su amigo cercano: el saludo formal muestra respeto.' },
            { text: 'Se **presenta**: "Soy Andrea López, de sexto grado sección A."', why: 'Quien lee necesita saber quién escribe.' },
            { text: 'Escribe su **pregunta completa** y con signos: "¿Qué día será la feria? ¿Puedo participar con mi proyecto sobre el cuidado de las plantas?"', why: 'Palabras completas y signos de interrogación de apertura y cierre.' },
            { text: 'Cierra con **despedida y firma**: "Muchas gracias. Atentamente, Andrea López."' },
          ],
          answer: 'Un correo con asunto claro, saludo, presentación, preguntas completas, despedida y firma.',
          tip: 'Antes de enviar, léelo como si fueras quien lo recibe: ¿se entiende sin que tengas que explicar nada más?' },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:3.4.2'], ambito: 'hacer',
          prompt: 'Este correo va dirigido a la señora alcaldesa auxiliar, pero tiene palabras **demasiado informales**. Tócalas.',
          hint: 'Busca abreviaturas y expresiones que usarías solo con amigos.',
          explain: '"Q onda", "xq", "porfa" y "bye" son informales. En un correo formal se escribe: "Buenos días", "porque", "por favor" y "Atentamente".' },
        { target: 'palabras informales', text: '{Q onda}, señora alcaldesa auxiliar. Le escribimos {xq} queremos limpiar el parque de la aldea el sábado. ¿Nos podría prestar escobas y bolsas, {porfa}? {Bye}. Estudiantes de sexto grado.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:3.4.2'], ambito: 'hacer',
          prompt: 'Vas a mandar por correo tu tarea de Ciencias Sociales a tu maestro. ¿Qué **asunto** y qué **ícono** usas para enviar el archivo?',
          explain: 'El asunto dice qué es y de quién; el clip sirve para adjuntar el archivo.' },
        { options: [
          { id: 'a', text: 'Asunto: "Tarea de Ciencias Sociales – Luis Chávez, 6.º B" + ícono del clip', icon: 'Paperclip' },
          { id: 'b', text: 'Asunto: "aquí está" + ícono de la lupa', icon: 'Search', feedback: 'El asunto no dice qué es, y la lupa sirve para buscar, no para adjuntar.' },
          { id: 'c', text: 'Asunto: vacío + ícono del bote de basura', icon: 'Trash2', feedback: '¡El bote de basura elimina! Y un asunto vacío confunde.' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:3.4.2'], ambito: 'ser', prompt: 'Sobre el uso seguro del correo, ¿verdadero o falso?',
          explain: 'Usar la tecnología también implica cuidarnos: nuestros datos son valiosos.' },
        { statements: [
          { text: 'Si un desconocido te pide tu contraseña por correo, debes dársela para que no se enoje.', answer: false, why: 'Tu contraseña es solo tuya. Nadie que te quiera ayudar te la pedirá por correo.' },
          { text: 'Si recibes un mensaje que te incomoda, es bueno contárselo a un adulto de confianza.', answer: true },
          { text: 'Revisar la dirección del destinatario antes de enviar evita que el correo llegue a otra persona.', answer: true },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:3.4.2'], ambito: 'hacer',
          prompt: 'Escribe un correo a un familiar que viva en otro lugar (otro municipio, departamento o país). Invítalo a contarte **cómo es el lugar donde vive** para comparar con tu exposición "Nuestro lugar en mapas y palabras". Incluye asunto, saludo, cuerpo, despedida y firma.' },
        { minWords: 45, placeholder: 'Asunto: …\n\nSaludo…\n\nCuerpo…\n\nDespedida y firma…',
          model: 'Asunto: Quiero conocer tu lugar\n\n¡Hola, tío Mario!\n\nEstoy preparando una exposición en la escuela llamada "Nuestro lugar en mapas y palabras". Yo voy a hablar de Quetzaltenango, pero me gustaría compararlo con Petén, donde vives tú. ¿Me podrías contar cómo es el clima, qué se cultiva y qué te gusta más de ahí? Si tienes una foto, me ayudaría mucho.\n\nMuchas gracias. Un abrazo,\nValeria',
          rubric: [
            'Escribí un asunto que dice el tema',
            'Tiene saludo, cuerpo, despedida y firma',
            'Expliqué qué necesito y para qué',
            'Escribí palabras completas, sin abreviaturas',
            'Usé signos de interrogación de apertura y cierre (¿…?)',
          ] },
      ),
      S.order(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.4.2'], prompt: 'Ordena las partes de un correo electrónico, de arriba hacia abajo.' },
        { labels: { start: 'Arriba', end: 'Abajo' }, items: [
          { id: 'q1', text: 'Asunto' },
          { id: 'q2', text: 'Saludo' },
          { id: 'q3', text: 'Cuerpo del mensaje' },
          { id: 'q4', text: 'Despedida y firma' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.1.6'], prompt: 'Repaso de la semana: para empezar una exposición y **atrapar la atención**, ¿qué conviene más?' },
        { options: [
          { id: 'a', text: 'Una pregunta o un dato curioso sobre el tema' },
          { id: 'b', text: 'Pedir disculpas por estar nervioso' },
          { id: 'c', text: 'Leer el título de la hoja' },
        ], correct: ['a'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l1'], cnb: [], ambito: 'ser', prompt: 'Mira hacia atrás en tu semana de Comunicación y Lenguaje.' },
        { statements: [
          'Uso mi voz (volumen, pausas, cambios) para que me escuchen',
          'Uso gestos y mirada que acompañan lo que digo',
          'Interpreto íconos y elijo un lenguaje formal o informal según a quién escribo',
          'Escribo un correo con todas sus partes',
        ], commitments: [
          'Presentaré mi exposición "Nuestro lugar en mapas y palabras" a mi familia',
          'Revisaré a quién escribo antes de enviar un mensaje',
          'Evitaré escribir en mayúsculas para no "gritar" en los chats',
        ] },
      ),
    ],
  }),
];
