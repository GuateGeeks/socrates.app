/**
 * Formación Ciudadana · Unidad 1 · Semana 7 — Energía para la paz.
 * Progresión: comparar la cultura de paz y la cultura de violencia con criterios claros y
 * practicar el diálogo en cinco pasos (con los Acuerdos de Paz como ejemplo nacional) →
 * los intercambios culturales en la historia de Guatemala: qué nos dejaron, cuáles fueron
 * voluntarios y cuáles impuestos, y cómo discutirlos con respeto.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Comparar paz y violencia; dialogar ───────────────────────── */
  lesson({
    id: 's07-fc-1',
    title: 'Paz o violencia: comparar para elegir',
    icon: 'Scale',
    minutes: 15,
    gancho: 'Dos equipos discuten por la cancha. La historia puede terminar de dos formas. ¿Cuál final deja a todos jugando la próxima semana?',
    objetivos: [
      'Explicar la diferencia entre conflicto, violencia y paz',
      'Comparar la cultura de paz y la cultura de violencia con cinco criterios',
      'Resolver un conflicto con los cinco pasos del diálogo',
    ],
    resumen: [
      'Un conflicto es un desacuerdo: es normal. La violencia es una MANERA de responder al conflicto (dañando); la paz es otra manera (dialogando).',
      'Se comparan con cinco criterios: cómo se resuelven los problemas, cómo se trata a quien piensa distinto, cómo se toman las decisiones, cómo se sienten las personas y qué pasa después.',
      'La violencia deja miedo, heridas y rencor, y suele traer más violencia. La paz deja acuerdos, confianza y relaciones que siguen.',
      'Diálogo en cinco pasos: calmarse, escuchar a cada parte sin interrumpir, descubrir qué necesita cada quien, buscar ideas juntos y cumplir un acuerdo donde todos ganen.',
    ],
    media: {
      id: 's07-fc-1-dos-finales', kind: 'animation', title: 'Un conflicto, dos finales', aspect: '16:9', duration: 55,
      alt: 'Animación: dos equipos quieren la misma cancha. En el primer final se gritan y se empujan y nadie juega; en el segundo conversan, se turnan y terminan jugando juntos.',
      brief: 'Animación 2D de 55 s. Escena inicial: cancha de tierra de una aldea, dos equipos mixtos (niñas y niños) llegan a la misma hora. Pantalla dividida: FINAL A (tonos grises): gritos, empujones, la pelota se va al barranco, todos se van enojados; al día siguiente nadie se habla. FINAL B (colores vivos): una niña propone "hablemos", cada capitán explica, acuerdan jugar 20 minutos cada equipo y el último partido juntos; se ríen al final. Texto en pantalla: "El conflicto era el mismo. La respuesta fue distinta." Narración en español, subtítulos, sin golpes explícitos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:4.2.2'], ambito: 'convivir',
          prompt: 'Los equipos de quinto y sexto llegan a la cancha a la misma hora. ¿Qué final crees que deja a todos jugando **la próxima semana**?',
          explain: 'El conflicto (dos equipos, una cancha) era el mismo. Lo que cambia el futuro es **cómo se responde**. Hoy compararás esas dos respuestas.' },
        { options: [
          { id: 'a', text: 'Los más grandes echan a los pequeños a empujones', icon: 'Zap', feedback: 'Hoy juegan los grandes, pero quedan el enojo y el deseo de desquitarse. La próxima semana puede ser peor.' },
          { id: 'b', text: 'Conversan y acuerdan turnos de 20 minutos', icon: 'HeartHandshake' },
          { id: 'c', text: 'Nadie dice nada y todos se van a su casa', icon: 'Home', feedback: 'Evitar el problema no lo resuelve: la próxima semana volverá a pasar.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.2'], ambito: 'conocer', title: 'Conflicto, violencia y paz',
          prompt: 'Estas tres palabras se confunden mucho. Toca cada tarjeta.' },
        { icon: 'Scale', body: 'El conflicto **no es malo**: bien manejado, ayuda a conocernos y a mejorar las reglas. Lo que daña es responder con violencia.', reveal: [
          { icon: 'MessagesSquare', front: 'Conflicto', back: 'Un **desacuerdo** porque dos personas o grupos quieren cosas distintas. Es **normal**: pasa en toda familia, escuela y país.' },
          { icon: 'Zap', front: 'Violencia', back: 'Una **forma de responder** al conflicto que **daña**: golpes, insultos, amenazas, exclusión. Uno gana a costa del otro.' },
          { icon: 'HeartHandshake', front: 'Paz', back: 'Otra **forma de responder**: con **diálogo, respeto y justicia**. La paz no es solo "que no haya pleitos"; es que se respeten los derechos de todos.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.2'], ambito: 'conocer', title: 'Cinco criterios para comparar',
          prompt: 'Para **comparar** dos cosas se usan **criterios**: los mismos puntos para mirar las dos. Toca cada criterio y compara.' },
        { icon: 'ListChecks', body: 'Comparar con criterios evita opinar "porque sí": te obliga a mirar los hechos.', reveal: [
          { icon: 'Wrench', front: '1. ¿Cómo se resuelven los problemas?', back: '**Violencia:** con fuerza, gritos o amenazas. **Paz:** con diálogo, escucha y acuerdos.' },
          { icon: 'Users', front: '2. ¿Cómo se trata a quien piensa distinto?', back: '**Violencia:** se le calla, se le burla o se le excluye. **Paz:** se le escucha y se le respeta.' },
          { icon: 'Vote', front: '3. ¿Cómo se toman decisiones?', back: '**Violencia:** decide el más fuerte. **Paz:** se decide en conjunto, con reglas justas.' },
          { icon: 'Heart', front: '4. ¿Cómo se sienten las personas?', back: '**Violencia:** miedo, humillación, rencor. **Paz:** confianza y seguridad.' },
          { icon: 'Hourglass', front: '5. ¿Qué pasa después?', back: '**Violencia:** heridas, relaciones rotas y más violencia (desquite). **Paz:** acuerdos que se cumplen y relaciones que siguen.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.2'], prompt: '**Compara** las dos culturas: ¿cada característica pertenece a la **cultura de paz** o a la **cultura de violencia**?',
          hint: 'Usa los cinco criterios: ¿cómo se resuelve?, ¿cómo se trata al distinto?, ¿quién decide?, ¿cómo se sienten?, ¿qué pasa después?',
          explain: 'La cultura de paz dialoga, respeta y decide en conjunto; la de violencia impone, excluye y deja rencor.' },
        { buckets: [
          { id: 'paz', label: 'Cultura de paz', icon: 'HeartHandshake', color: 'var(--c-ok)' },
          { id: 'vio', label: 'Cultura de violencia', icon: 'Zap', color: 'var(--c-bad)' },
        ], items: [
          { id: 'x1', text: 'Decide quien grita más fuerte', bucket: 'vio' },
          { id: 'x2', text: 'Se escucha a cada parte antes de decidir', bucket: 'paz' },
          { id: 'x3', text: 'Las personas sienten miedo de opinar', bucket: 'vio' },
          { id: 'x4', text: 'Los acuerdos se cumplen y la relación sigue', bucket: 'paz' },
          { id: 'x5', text: 'Quien pierde busca desquitarse', bucket: 'vio' },
          { id: 'x6', text: 'Se respeta a quien piensa distinto', bucket: 'paz' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.2'], ambito: 'hacer', title: 'Ejemplo resuelto: el diálogo en cinco pasos',
          prompt: 'La cultura de paz tiene una herramienta: el **diálogo**. Mira cómo Andrea y Mateo lo usan.' },
        { icon: 'MessagesSquare', problem: 'Andrea y Mateo deben hacer un cartel juntos. Mateo dice que Andrea "no hace nada"; Andrea dice que Mateo "quiere mandar en todo". Están a punto de pelear.',
          steps: [
            { text: '**1. Calmarse:** los dos respiran lento y acuerdan hablar en el recreo, sin gritar.', why: 'Con enojo fuerte no se piensa bien. Calmarse primero evita decir cosas que hieren.' },
            { text: '**2. Escuchar a cada parte sin interrumpir:** Mateo habla y Andrea escucha; luego al revés. Usan **mensajes yo**: "Yo me siento preocupado cuando el cartel no avanza", en vez de "eres una haragana".' },
            { text: '**3. Descubrir qué necesita cada quien:** Mateo necesita terminar a tiempo; Andrea necesita que sus ideas se tomen en cuenta.' },
            { text: '**4. Buscar ideas juntos:** repartir tareas, turnarse para decidir, hacer un borrador cada uno y elegir lo mejor de los dos.' },
            { text: '**5. Acordar y cumplir:** Andrea dibuja, Mateo escribe los textos y juntos eligen los colores. Se revisan el viernes.' },
          ],
          answer: 'Los dos **ganan**: el cartel se termina a tiempo y las ideas de ambos se toman en cuenta. Eso es un acuerdo **gana-gana**.',
          tip: 'Calmarse → escuchar → descubrir necesidades → buscar ideas → acordar y cumplir.' },
      ),
      S.order(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.2'], prompt: 'Ahora tú: ordena los **cinco pasos del diálogo**.',
          hint: 'No se puede escuchar bien con mucho enojo, y no se puede acordar sin antes buscar ideas.',
          explain: 'Calmarse → escuchar sin interrumpir → descubrir qué necesita cada quien → buscar ideas juntos → acordar y cumplir.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'd1', text: 'Calmarse', icon: 'Wind' },
          { id: 'd2', text: 'Escuchar a cada parte sin interrumpir', icon: 'Ear' },
          { id: 'd3', text: 'Descubrir qué necesita cada quien', icon: 'Search' },
          { id: 'd4', text: 'Buscar ideas de solución juntos', icon: 'Lightbulb' },
          { id: 'd5', text: 'Acordar y cumplir', icon: 'Handshake' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:4.2.2'], ambito: 'convivir', prompt: 'Para cada respuesta **violenta**, encuentra la alternativa de **paz** para la misma situación.',
          explain: 'En cada situación había dos caminos. La alternativa de paz resuelve el problema sin dañar a nadie.' },
        { leftTitle: 'Respuesta violenta', rightTitle: 'Alternativa de paz', pairs: [
          { id: 'm1', left: 'Empujar para pasar primero en la fila', leftIcon: 'Zap', right: 'Esperar el turno o pedir permiso si hay una urgencia' },
          { id: 'm2', left: 'Insultar al árbitro por un penal', leftIcon: 'Megaphone', right: 'Pedir al capitán que pregunte con respeto qué vio' },
          { id: 'm3', left: 'Esconder el cuaderno de quien te acusó', leftIcon: 'EyeOff', right: 'Decirle con un mensaje yo cómo te sentiste' },
          { id: 'm4', left: 'Que el más grande decida el juego', leftIcon: 'Crown', right: 'Votar el juego o turnarse cada día' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:4.2.2'], ambito: 'conocer', prompt: 'Guatemala también tuvo que elegir entre la violencia y el diálogo. Lee y responde.' },
        { genre: 'Texto informativo', heading: 'Un país que eligió dialogar', passage:
          'Durante **36 años**, de 1960 a 1996, Guatemala vivió un **conflicto armado interno**. Quienes más sufrieron fueron las personas que no participaban en la guerra: la población civil, sobre todo las comunidades mayas del área rural.\n\nLas armas no resolvieron el conflicto. Durante varios años, el gobierno y la guerrilla se sentaron a **negociar**, con el acompañamiento de las **Naciones Unidas** y la participación de sectores de la sociedad. Firmaron varios acuerdos sobre derechos humanos, pueblos indígenas, las personas desplazadas y otros temas.\n\nEl **29 de diciembre de 1996** se firmó el **Acuerdo de Paz Firme y Duradera**. Terminó la guerra, pero los acuerdos también dejaron tareas: construir una paz con justicia, respeto a los pueblos y participación de todos. Esa tarea sigue hoy, también en tu escuela.',
          questions: [
            { q: '¿Cuánto tiempo duró el conflicto armado interno?', options: [
              { id: 'a', text: '36 años' },
              { id: 'b', text: '6 años' },
              { id: 'c', text: '96 años' },
            ], correct: 'a', why: 'De 1960 a 1996 hay 36 años.' },
            { q: '¿Qué camino permitió terminar la guerra?', options: [
              { id: 'a', text: 'La negociación y el diálogo' },
              { id: 'b', text: 'Que un grupo venciera por la fuerza' },
              { id: 'c', text: 'Que nadie hablara del tema' },
            ], correct: 'a' },
            { q: 'Según el texto, ¿por qué la paz es una tarea que **sigue hoy**?', options: [
              { id: 'a', text: 'Porque la paz no es solo que no haya guerra: también es justicia, respeto y participación' },
              { id: 'b', text: 'Porque los acuerdos nunca se firmaron' },
              { id: 'c', text: 'Porque la guerra sigue igual que antes' },
            ], correct: 'a', why: 'La cultura de paz se construye todos los días, en el país y en cada escuela.' },
          ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:4.2.2'], ambito: 'convivir',
          prompt: 'Tu hermano usó tu cuaderno sin pedirlo y lo manchó. ¿Qué frase es un **mensaje yo** que ayuda al diálogo?',
          explain: 'Un **mensaje yo** habla de lo que **tú sientes** y **necesitas**, sin atacar a la otra persona: "Yo me siento… cuando… porque… Te pido…".' },
        { options: [
          { id: 'a', text: '"Me siento molesto cuando usas mis cosas sin pedirlas, porque las necesito para la escuela. Te pido que me preguntes."' },
          { id: 'b', text: '"¡Siempre arruinas todo, eres un desastre!"', feedback: 'Es un ataque ("eres…"). Provoca que el otro se defienda en vez de escuchar.' },
          { id: 'c', text: '"Ya vas a ver, yo te voy a manchar lo tuyo."', feedback: 'Es una amenaza de desquite: cultura de violencia.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.2.2'], prompt: 'Al **comparar** las dos culturas, ¿qué pasa **después** de responder con violencia?' },
        { options: [
          { id: 'a', text: 'Quedan miedo y rencor, y suele venir más violencia' },
          { id: 'b', text: 'El problema queda resuelto para siempre' },
          { id: 'c', text: 'Todas las personas quedan contentas' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.2.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Un conflicto es lo mismo que la violencia.', answer: false, why: 'El conflicto es un desacuerdo; la violencia es una forma dañina de responder a él.' },
          { text: 'En la cultura de paz las decisiones se toman en conjunto y con reglas justas.', answer: true },
          { text: 'El primer paso del diálogo es calmarse.', answer: true },
          { text: 'Los Acuerdos de Paz de Guatemala se firmaron en 1996, después de una negociación.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Intercambios culturales en la historia ───────────────────────── */
  lesson({
    id: 's07-fc-2',
    title: 'Encuentros de culturas en la historia de Guatemala',
    icon: 'Globe',
    minutes: 15,
    gancho: 'En tu desayuno puede haber tortilla, frijol, pan y café. ¿Sabías que vienen de continentes distintos?',
    objetivos: [
      'Explicar qué es un intercambio cultural y dar ejemplos de la historia de Guatemala',
      'Distinguir intercambios voluntarios de intercambios impuestos',
      'Discutir con respeto y con argumentos qué nos dejaron esos encuentros',
    ],
    resumen: [
      'Un intercambio cultural ocurre cuando pueblos distintos comparten alimentos, palabras, técnicas, música o creencias.',
      'Antes de 1524, los mayas ya intercambiaban productos e ideas con otros pueblos de Mesoamérica. Con la llegada de los españoles hubo intercambios, pero muchos fueron impuestos con violencia. A finales del siglo XVIII llegó a la costa del Caribe el pueblo garífuna.',
      'Huellas de hoy: maíz, frijol y cacao de América; trigo, ganado, idioma español y telar de pie traídos de Europa; la cultura garífuna con raíces africanas y caribeñas; palabras de origen náhuatl como tomate o aguacate.',
      'Para discutir un intercambio pregunta: ¿qué se intercambió?, ¿fue voluntario o impuesto?, ¿qué huella dejó hoy? Respetar todas las culturas no significa olvidar las injusticias.',
    ],
    media: {
      id: 's07-fc-2-mesa-mestiza', kind: 'image', title: 'Una mesa con muchas raíces', aspect: '4:3',
      alt: 'Mesa de desayuno guatemalteca con tortillas, frijoles, pan, café, chocolate y plátano; flechas punteadas señalan de qué continente vino cada alimento.',
      brief: 'Ilustración cenital de una mesa de madera con mantel típico. Sobre ella: tortillas y frijoles (etiqueta "América"), chocolate (etiqueta "América"), pan de trigo (etiqueta "llegó de Europa"), taza de café (etiqueta "origen en África, llegó por Europa"), plátano (etiqueta "Asia/África"). Un pequeño globo terráqueo en la esquina con flechas punteadas de colores hacia la mesa. Estilo cálido, sin marcas comerciales.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:5.1.1'], ambito: 'conocer',
          prompt: '¿Cuáles de estos alimentos se cultivaban en **América** antes de que llegaran los europeos? Marca todos los que creas.',
          explain: 'Maíz, frijol, cacao y aguacate son **americanos**. El **trigo** llegó con los españoles y el **café** tiene su origen en África. ¡Tu desayuno es un encuentro de culturas!' },
        { multiple: true, layout: 'grid', options: [
          { id: 'a', text: 'Maíz', icon: 'Wheat' },
          { id: 'b', text: 'Frijol', icon: 'Sprout' },
          { id: 'c', text: 'Cacao', icon: 'Coffee' },
          { id: 'd', text: 'Aguacate', icon: 'Apple' },
          { id: 'e', text: 'Trigo', icon: 'Wheat', feedback: 'El trigo llegó a América con los españoles; por eso el pan es un alimento de encuentro.' },
          { id: 'f', text: 'Café', icon: 'Coffee', feedback: 'El café es originario de África; llegó a Guatemala mucho después de la conquista.' },
        ], correct: ['a', 'b', 'c', 'd'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.1.1'], ambito: 'conocer', title: '¿Qué es un intercambio cultural?',
          prompt: 'Un **intercambio cultural** ocurre cuando pueblos distintos se encuentran y **comparten** alimentos, palabras, técnicas, música o creencias. Toca cada tarjeta.' },
        { icon: 'Globe', body: 'Casi todas las culturas del mundo son el resultado de **muchos encuentros**. Ninguna cultura está "sola".', reveal: [
          { icon: 'Handshake', front: 'Intercambio voluntario', back: 'Los pueblos deciden libremente compartir: por ejemplo, el **comercio** entre pueblos mayas y otros pueblos de Mesoamérica, o una receta que se aprende de una vecina.' },
          { icon: 'Gavel', front: 'Intercambio impuesto', back: 'Un pueblo **obliga** a otro a cambiar su idioma, sus creencias o su forma de vida, muchas veces con violencia. Así ocurrió en gran parte de la **conquista**.' },
          { icon: 'Layers', front: 'Mezcla o fusión', back: 'De algunos encuentros nacen cosas **nuevas**, que no son de un solo pueblo: comidas, músicas o fiestas que combinan raíces distintas.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.1.1'], ambito: 'conocer', prompt: 'Lee este recorrido por la historia y responde.' },
        { genre: 'Texto informativo', heading: 'Encuentros que nos formaron', passage:
          '**Antes de 1524.** Los pueblos mayas intercambiaban con otros pueblos de Mesoamérica: cacao, jade, obsidiana, plumas, sal y también ideas, como el calendario. Eran intercambios de comercio entre pueblos.\n\n**Desde 1524.** Llegaron los españoles, acompañados por pueblos aliados del centro de México que hablaban **náhuatl**. Trajeron el trigo, el ganado, el caballo, el idioma español, el **telar de pie** y la religión católica. Los pueblos mayas aportaron el maíz, el cacao y muchos saberes. Pero no fue un intercambio entre iguales: los pueblos originarios perdieron tierras y fueron obligados a trabajar y a cambiar sus costumbres. Por eso muchos lugares tienen nombres en náhuatl, como **Quetzaltenango** o **Huehuetenango**.\n\n**Finales del siglo XVIII.** Llegó a la costa del Caribe el pueblo **garífuna**, con raíces africanas y caribeñas. Su idioma, su música y su danza son hoy parte de Guatemala, sobre todo en Livingston y Puerto Barrios.\n\n**Hoy.** Seguimos intercambiando: por la migración, el comercio, la radio, la televisión e internet.',
          questions: [
            { q: '¿Qué intercambio era **voluntario**, entre pueblos que comerciaban?', options: [
              { id: 'a', text: 'El comercio de cacao y jade entre pueblos de Mesoamérica' },
              { id: 'b', text: 'La obligación de trabajar en tierras ajenas durante la colonia' },
              { id: 'c', text: 'Ninguno fue voluntario' },
            ], correct: 'a' },
            { q: '¿Por qué Huehuetenango y Quetzaltenango tienen nombres en náhuatl?', options: [
              { id: 'a', text: 'Porque llegaron con los españoles pueblos aliados que hablaban náhuatl' },
              { id: 'b', text: 'Porque los garífunas hablaban náhuatl' },
              { id: 'c', text: 'Porque los inventaron en el siglo XX' },
            ], correct: 'a' },
            { q: '¿Por qué el texto dice que el encuentro de 1524 **no fue entre iguales**?', options: [
              { id: 'a', text: 'Porque los pueblos originarios perdieron tierras y fueron obligados a cambiar' },
              { id: 'b', text: 'Porque los españoles no trajeron nada' },
              { id: 'c', text: 'Porque los mayas no tenían cultura' },
            ], correct: 'a', why: 'Reconocer que hubo imposición e injusticia es parte de discutir la historia con honestidad.' },
          ] },
      ),
      S.order(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.1.1'], prompt: 'Ordena estos encuentros de culturas del **más antiguo** al **más reciente**.',
          hint: 'Vuelve al texto: primero los mayas con Mesoamérica, luego 1524, luego el siglo XVIII y al final hoy.',
          explain: 'Comercio mesoamericano → llegada de españoles y pueblos nahuas (1524) → llegada del pueblo garífuna (finales del siglo XVIII) → intercambios por internet y migración (hoy).' },
        { labels: { start: 'Más antiguo', end: 'Más reciente' }, items: [
          { id: 't1', text: 'Los mayas comercian cacao y jade con otros pueblos de Mesoamérica', icon: 'Gem' },
          { id: 't2', text: 'Llegan los españoles con aliados que hablan náhuatl', icon: 'Ship' },
          { id: 't3', text: 'El pueblo garífuna llega a la costa del Caribe', icon: 'Waves' },
          { id: 't4', text: 'Compartimos música y recetas por internet', icon: 'Smartphone' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.1.1'], prompt: '¿De dónde viene cada huella cultural?',
          hint: 'Recuerda el texto: ¿era de América antes de 1524, llegó con los europeos o nació de la mezcla de varias raíces?',
          explain: 'Guatemala es el resultado de todos estos encuentros: raíces americanas, europeas, africanas y lo nuevo que nació de mezclarlas.' },
        { buckets: [
          { id: 'ame', label: 'Raíz americana', icon: 'Sprout', color: 'var(--c-ok)' },
          { id: 'eur', label: 'Llegó de Europa', icon: 'Ship', color: 'var(--area-ccss)' },
          { id: 'mez', label: 'Nació de la mezcla', icon: 'Layers', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'h1', text: 'El cultivo del maíz', bucket: 'ame' },
          { id: 'h2', text: 'El ganado y el caballo', bucket: 'eur' },
          { id: 'h3', text: 'Ponchos tejidos con lana de oveja en telar de pie, con diseños mayas', bucket: 'mez', feedback: 'La lana y el telar de pie llegaron de Europa; los diseños y el saber tejer son mayas. ¡Mezcla!' },
          { id: 'h4', text: 'El cacao', bucket: 'ame' },
          { id: 'h5', text: 'El idioma español', bucket: 'eur' },
          { id: 'h6', text: 'El pan dulce acompañado de chocolate de cacao', bucket: 'mez' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:5.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto: discutir un intercambio',
          prompt: 'Para **discutir** un intercambio cultural con argumentos, usa **tres preguntas**. Mira un ejemplo.' },
        { icon: 'Music', problem: 'Tema: **el pueblo garífuna** en Guatemala. ¿Qué nos dejó este encuentro?',
          steps: [
            { text: '**¿Qué se intercambió?** Un idioma propio (el garífuna), música y danzas como la **punta**, tambores, comidas del mar como el **tapado** y formas de vivir junto al mar.' },
            { text: '**¿Fue voluntario o impuesto?** Los garífunas no llegaron por decisión propia: a finales del siglo XVIII fueron **expulsados** de la isla de San Vicente por los ingleses. En Centroamérica reconstruyeron su vida y su cultura.', why: 'Un intercambio puede nacer de una injusticia y aun así dejar una herencia valiosa. Decir las dos cosas es discutir con honestidad.' },
            { text: '**¿Qué huella dejó hoy?** Una cultura viva en Livingston y Puerto Barrios. La UNESCO reconoció en 2001 la lengua, la danza y la música garífunas como patrimonio de la humanidad.' },
          ],
          answer: 'Argumento: "El pueblo garífuna **enriquece** a Guatemala con su idioma, su música y su comida. Su llegada comenzó con una **expulsión injusta**, por eso merece respeto y memoria".',
          tip: '¿Qué se intercambió? → ¿voluntario o impuesto? → ¿qué huella dejó hoy?' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:5.1.1'], ambito: 'convivir',
          prompt: 'En una discusión del grado, Diego dice: "La cultura que llegó de Europa es mejor que las culturas mayas". ¿Cuál es la **mejor respuesta** con argumentos?',
          explain: 'En un intercambio cultural **ninguna cultura es superior**: cada una aporta saberes. Además, reconocer que hubo imposición ayuda a entender por qué hoy es importante respetar a todos los pueblos.' },
        { options: [
          { id: 'a', text: '"No hay culturas superiores: los mayas aportaron el maíz, el calendario y el tejido, y Europa trajo el trigo y el idioma. Además, muchas cosas se impusieron por la fuerza, eso no las hace mejores."' },
          { id: 'b', text: '"Tenés razón, lo de afuera siempre es mejor."', feedback: 'Esta idea desprecia a los pueblos originarios; es un argumento que justifica la discriminación.' },
          { id: 'c', text: '"No, las culturas mayas son mejores y las demás no sirven."', feedback: 'Cambiar una superioridad por otra tampoco es justo. Todas las culturas merecen respeto.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:5.1.1'], ambito: 'convivir',
          prompt: 'Elige **un** intercambio que aprendiste hoy (el pan con chocolate, el telar de pie, los nombres en náhuatl o la cultura garífuna) y escribe tu **opinión** respondiendo las tres preguntas: ¿qué se intercambió?, ¿fue voluntario o impuesto?, ¿qué huella dejó hoy?' },
        { minWords: 40, placeholder: 'Elegí… porque…',
          model: 'Elegí el telar de pie. Los españoles trajeron este telar y la lana de oveja, y las tejedoras y tejedores mayas los combinaron con sus propios diseños. Llegó en una época de imposición, pero los pueblos mayas lo hicieron suyo. Hoy se tejen ponchos y cortes que son orgullo de muchas comunidades, y creo que hay que valorar a quienes los hacen.',
          rubric: ['Dije qué se intercambió', 'Expliqué si fue voluntario o impuesto', 'Nombré una huella que se ve hoy', 'Di mi opinión con respeto hacia todos los pueblos'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.1.1'], prompt: '¿Qué ejemplo muestra un **intercambio cultural** en la historia de Guatemala?' },
        { options: [
          { id: 'a', text: 'Tejedoras mayas que usan el telar de pie y la lana llegados de Europa con sus propios diseños' },
          { id: 'b', text: 'Un pueblo que nunca tuvo contacto con otros' },
          { id: 'c', text: 'Una receta que nadie comparte' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'El maíz y el cacao son de origen americano.', answer: true },
          { text: 'Todos los intercambios culturales de la historia fueron voluntarios.', answer: false, why: 'Durante la conquista y la colonia muchos cambios se impusieron por la fuerza.' },
          { text: 'El pueblo garífuna tiene raíces africanas y caribeñas.', answer: true },
          { text: 'Si una cultura recibió aportes de otras, deja de ser valiosa.', answer: false, why: 'Todas las culturas se enriquecen con los encuentros; eso no les quita valor.' },
        ] },
      ),
      cierre({ areas: ['fc'], cnb: ['fc:4.2.2', 'fc:5.1.1'] },
        ['Comparo la cultura de paz y la de violencia con criterios', 'Uso los cinco pasos del diálogo en un conflicto', 'Explico intercambios culturales de la historia de Guatemala y distingo los voluntarios de los impuestos'],
        ['Usaré un mensaje yo la próxima vez que me enoje', 'Preguntaré a mi familia de dónde vienen las comidas que preparamos', 'Defenderé con argumentos que ninguna cultura es superior a otra']),
    ],
  }),
];
