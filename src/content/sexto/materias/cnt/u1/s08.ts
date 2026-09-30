/**
 * Ciencias Naturales y Tecnología · Unidad 1 · Semana 8 — Energía, clima y ciencia.
 * Progresión: manifestaciones de la energía y ahorro de electricidad → calentamiento global
 * y cómo lo observamos desde el espacio (satélites) → cómo trabaja la ciencia: tipos de
 * investigación y características del conocimiento científico, con repaso espiral de la unidad.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Energía y su ahorro ───────────────────────── */
  lesson({
    id: 's08-cnt-1',
    title: 'Las formas de la energía y su ahorro',
    icon: 'Zap',
    minutes: 16,
    gancho: 'El Sol, una tortilla, una batería y un rayo parecen no tener nada en común. Sin embargo, los cuatro tienen algo que hace posible todo movimiento y todo cambio. ¿Qué es?',
    objetivos: [
      'Distinguir las manifestaciones de la energía: radiante, solar, lumínica, calorífica, química, nuclear y eléctrica',
      'Explicar cómo la energía se transforma y produce movimiento',
      'Valorar el ahorro y el uso racional de la energía eléctrica',
    ],
    resumen: [
      'La energía es la capacidad de producir cambios o movimiento. No se crea ni se destruye: se transforma de una forma en otra.',
      'Radiante: viaja en ondas, aun por el espacio vacío. Solar: la que llega del Sol como luz y calor. Lumínica: la luz visible. Calorífica: el calor. Química: guardada en alimentos, leña, combustibles y baterías. Nuclear: guardada en el núcleo de los átomos (así brilla el Sol). Eléctrica: movimiento de cargas eléctricas por cables.',
      'La electricidad se produce con agua de los ríos, sol, viento, calor de la Tierra, bagazo de caña o combustibles. Producirla cuesta dinero y parte de ella contamina: por eso hay que ahorrarla.',
      'Ahorrar: apagar luces y aparatos que no se usan, desconectar cargadores, usar focos LED, aprovechar la luz del día y abrir el refrigerador lo menos posible.',
    ],
    media: {
      id: 's08-cnt-1-manifestaciones', kind: 'diagram', title: 'Siete formas de la energía', aspect: '16:9',
      alt: 'Rueda con siete sectores ilustrados: Sol (solar), ondas que viajan por el espacio (radiante), un foco encendido (lumínica), un comal caliente (calorífica), una tortilla y leña (química), un átomo (nuclear) y un cable con un rayo (eléctrica).',
      brief: 'Infografía circular con 7 sectores de colores, cada uno con ícono grande, nombre y un ejemplo guatemalteco: Solar (Sol sobre un campo de milpa), Radiante (ondas que salen del Sol y de una antena de radio), Lumínica (foco y luciérnaga), Calorífica (comal sobre el fuego), Química (tortillas, leña, batería), Nuclear (átomo con núcleo resaltado, y el Sol como ejemplo), Eléctrica (cable, poste de luz, rayo). Al centro: "Energía = capacidad de producir cambios". Flechas finas entre sectores que sugieren transformaciones. Letra grande, fondo blanco.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:7.1.1'], ambito: 'conocer',
          prompt: '¿Qué tienen en común el **Sol**, una **tortilla**, una **batería** y un **rayo**?',
          explain: 'Todos tienen o transportan **energía**: la capacidad de producir cambios o movimiento. Pero en cada uno la energía se manifiesta de forma distinta.' },
        { layout: 'grid', options: [
          { id: 'a', text: 'Todos son calientes', icon: 'Thermometer', feedback: 'Una batería o una tortilla fría no están calientes, y aun así tienen algo en común.' },
          { id: 'b', text: 'Todos tienen o transportan energía', icon: 'Zap' },
          { id: 'c', text: 'Todos son seres vivos', icon: 'Sprout', feedback: 'Ninguno de los cuatro es un ser vivo.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.1.1'], ambito: 'conocer', title: '¿Qué es la energía?',
          prompt: 'La **energía** es la capacidad de producir **cambios** o **movimiento**. Toca las tarjetas.' },
        { icon: 'Zap', body: 'Cuando corres, cuando el agua hierve o cuando se enciende un foco, hay energía en acción.', reveal: [
          { icon: 'Footprints', front: 'Energía y movimiento', back: 'Todo lo que se mueve tiene energía de movimiento: el agua de un río, el viento, tú en bicicleta. Y para mover algo, se necesita energía.' },
          { icon: 'RefreshCw', front: 'Se transforma', back: 'La energía **no se crea ni se destruye**: se **transforma**. La energía química de tu desayuno se transforma en movimiento y calor en tu cuerpo.' },
          { icon: 'Layers', front: 'Muchas manifestaciones', back: 'La misma energía puede aparecer de formas distintas: luz, calor, electricidad… A esas formas se les llama **manifestaciones** de la energía.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.1.1'], ambito: 'conocer', title: 'Las manifestaciones de la energía',
          prompt: 'Observa el diagrama de la lección y toca cada tarjeta.' },
        { icon: 'Sun', body: 'Fíjate en los ejemplos: todos están a tu alrededor.', reveal: [
          { icon: 'Sun', front: 'Solar', back: 'La energía que llega del **Sol** como luz y calor. Hace crecer las plantas y se aprovecha con paneles solares.' },
          { icon: 'Radio', front: 'Radiante', back: 'Energía que viaja en **ondas**, incluso por el espacio vacío: la luz y el calor del Sol, las ondas de radio, las microondas.' },
          { icon: 'Lightbulb', front: 'Lumínica', back: 'La **luz** que podemos ver: de un foco, una candela o una luciérnaga.' },
          { icon: 'Flame', front: 'Calorífica', back: 'El **calor**: pasa de un cuerpo caliente a uno frío, como del comal a la tortilla.' },
          { icon: 'Wheat', front: 'Química', back: 'Energía **guardada** en sustancias: alimentos, leña, gasolina, baterías. Se libera al digerir, quemar o conectar.' },
          { icon: 'Atom', front: 'Nuclear', back: 'Energía guardada en el **núcleo de los átomos**. El Sol brilla gracias a reacciones nucleares en su interior.' },
          { icon: 'Plug', front: 'Eléctrica', back: 'El **movimiento de cargas eléctricas** por un cable. Enciende focos y aparatos. Un rayo es una descarga eléctrica natural.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.1.1'], ambito: 'conocer',
          prompt: 'Une cada situación con la **manifestación de energía** que más destaca.',
          hint: '¿Hay luz visible, calor, algo guardado para después, cables o el Sol?',
          explain: 'El comal da calor (calorífica); la leña guarda energía química; la luciérnaga produce luz (lumínica); el cable del poste lleva electricidad; el panel del techo aprovecha la energía solar.' },
        { leftTitle: 'Situación', rightTitle: 'Energía', pairs: [
          { id: 'c', left: 'El comal calienta las tortillas', leftIcon: 'Flame', right: 'Calorífica' },
          { id: 'q', left: 'La leña guardada para cocinar mañana', leftIcon: 'TreeDeciduous', right: 'Química' },
          { id: 'l', left: 'Una luciérnaga brilla de noche', leftIcon: 'Sparkles', right: 'Lumínica' },
          { id: 'e', left: 'El cable del poste lleva corriente a la casa', leftIcon: 'Plug', right: 'Eléctrica' },
          { id: 's', left: 'Un panel en el techo aprovecha la luz del Sol', leftIcon: 'Sun', right: 'Solar' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.1.1'], ambito: 'conocer', title: 'Ejemplo: del Sol a tus piernas',
          prompt: 'Sigue las transformaciones de la energía desde el Sol hasta tu carrera en el recreo.' },
        { icon: 'RefreshCw', problem: 'Cuando corres en el recreo después de comer tortillas, ¿de dónde vino la energía que te mueve?',
          steps: [
            { text: 'En el Sol, reacciones **nucleares** liberan enorme energía.', why: 'Así brilla el Sol.' },
            { text: 'Esa energía viaja por el espacio como energía **radiante** (luz y calor): es la energía **solar** que llega a la milpa.' },
            { text: 'Las hojas del maíz la usan en la **fotosíntesis** (¿recuerdas los cloroplastos?) y la guardan como energía **química** en los granos.' },
            { text: 'Comes tortillas; tus células (sus mitocondrias) liberan esa energía química y tus músculos la transforman en **movimiento** y **calor**.' },
          ],
          answer: 'Nuclear → radiante/solar → química → movimiento y calor. La energía **no se creó**: se **transformó** en cada paso.',
          tip: 'Casi toda la energía que usamos en la Tierra viene, al final, del Sol.' },
      ),
      S.order(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.1.1'], ambito: 'conocer',
          prompt: 'Ordena las transformaciones de la energía en una **hidroeléctrica**, hasta que se enciende un foco en tu casa.',
          hint: 'El agua del embalse cae y mueve una turbina; el generador produce electricidad; los cables la llevan; el foco da luz.',
          explain: 'Agua que cae (movimiento) → turbina que gira → generador (eléctrica) → cables → foco (lumínica y algo de calorífica).',
          media: { id: 's08-cnt-1-hidroelectrica', kind: 'animation', title: 'Del río al foco', aspect: '16:9', duration: 40,
            alt: 'Animación: el agua de un embalse cae por un tubo, hace girar una turbina unida a un generador; la electricidad viaja por torres y cables hasta una casa donde se enciende un foco.',
            brief: 'Animación 2D de 40 s, estilo esquemático. Un embalse en las montañas; el agua baja por una tubería y hace girar una turbina (rótulo "energía del movimiento"); la turbina hace girar un generador ("energía eléctrica"); rayitos amarillos viajan por torres y cables hasta una casa de una aldea; se enciende un foco ("energía lumínica y calorífica"). Al final, el agua sigue su camino por el río. Narración en español con subtítulos.' } },
        { labels: { start: 'Inicio', end: 'Final' }, items: [
          { id: 'h1', text: 'El agua del embalse cae por una tubería', icon: 'Waves' },
          { id: 'h2', text: 'El agua en movimiento hace girar una turbina', icon: 'RotateCw' },
          { id: 'h3', text: 'El generador produce energía eléctrica', icon: 'Zap' },
          { id: 'h4', text: 'Los cables llevan la electricidad a las casas', icon: 'Plug' },
          { id: 'h5', text: 'El foco transforma la electricidad en luz', icon: 'Lightbulb' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.2.1'], ambito: 'ser', title: '¿Por qué ahorrar energía eléctrica?',
          prompt: 'La electricidad es muy útil, pero producirla tiene un **costo**. Toca las tarjetas.' },
        { icon: 'Lightbulb', body: 'En Guatemala, la electricidad se produce con **agua de los ríos** (hidroeléctricas), **bagazo de caña**, **sol**, **viento**, **calor del interior de la Tierra** y **combustibles** como el búnker y el carbón.', reveal: [
          { icon: 'Banknote', front: 'Cuesta dinero', back: 'Cada mes, la familia paga según la electricidad que usó. Ahorrar deja dinero para otras necesidades.' },
          { icon: 'Factory', front: 'Parte contamina', back: 'Las plantas que queman combustibles producen **humo y gases** que contaminan el aire y calientan el planeta.' },
          { icon: 'Trees', front: 'Recursos para todos', back: 'Ríos, bosques y combustibles son **limitados**. Usar la energía con cuidado es parte del **desarrollo sostenible**: que alcance para hoy y para el futuro.' },
          { icon: 'ListChecks', front: 'Cómo ahorrar', back: 'Apagar luces y aparatos que no usas, **desconectar** cargadores, usar focos **LED**, aprovechar la **luz del día**, abrir el refrigerador lo menos posible y planchar toda la ropa de una vez.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.2.1'], ambito: 'ser',
          prompt: 'Supongamos que la familia de Mateo paga **Q200** de luz al mes y quiere pagar menos. Clasifica cada acción: ¿**ahorra** o **desperdicia** energía?',
          hint: 'Pregúntate: ¿se está usando electricidad sin necesidad?',
          explain: 'Pequeñas acciones diarias, sumadas, reducen mucho el consumo y el recibo.' },
        { buckets: [
          { id: 'aho', label: 'Ahorra', icon: 'PiggyBank', color: 'var(--c-ok)' },
          { id: 'des', label: 'Desperdicia', icon: 'AlertTriangle', color: 'var(--c-bad)' },
        ], items: [
          { id: 'x1', text: 'Apagar la luz al salir del cuarto', bucket: 'aho' },
          { id: 'x2', text: 'Dejar la tele encendida sin que nadie la vea', bucket: 'des' },
          { id: 'x3', text: 'Cambiar los focos viejos por focos LED', bucket: 'aho' },
          { id: 'x4', text: 'Dejar el cargador conectado sin el teléfono', bucket: 'des' },
          { id: 'x5', text: 'Abrir las cortinas y aprovechar la luz del día', bucket: 'aho' },
          { id: 'x6', text: 'Abrir el refrigerador a cada rato "para ver qué hay"', bucket: 'des' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['cnt', 'mat'], cnb: ['cnt:7.2.1'], ambito: 'hacer',
          prompt: 'Supongamos que un foco viejo usa **60 W** (watts) y un foco **LED** que ilumina igual usa **9 W**. En la casa de Mateo hay **4 focos**. Si los cambian todos por LED, ¿cuántos watts ahorran cuando están encendidos a la vez?',
          explain: 'Cada foco ahorra 60 − 9 = 51 W. Con 4 focos: 4 × 51 = 204 W. ¡Menos de la sexta parte de consumo con la misma luz!' },
        { answer: 204, unit: 'W', misconceptions: [
          { value: 51, msg: 'Eso es lo que ahorra un solo foco. Hay 4 focos.' },
          { value: 36, msg: '36 W es lo que usan los 4 focos LED. La pregunta es cuánto se ahorra.' },
          { value: 240, msg: '240 W es lo que usan los 4 focos viejos. Réstale lo que usan los LED.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:7.2.1', 'cnt:7.1.1'], ambito: 'ser',
          prompt: 'En la escuela quieren reducir el consumo de electricidad. ¿Qué propuesta es la **más efectiva y sencilla**?',
          explain: 'Aprovechar la luz del Sol (energía solar y lumínica gratuita) y apagar lo que no se usa ahorra sin gastar dinero.' },
        { options: [
          { id: 'a', text: 'Abrir ventanas y cortinas, apagar luces en el recreo y nombrar "guardianes de la energía"', icon: 'Sun' },
          { id: 'b', text: 'Dejar las luces encendidas para que no se arruinen los focos', icon: 'Lightbulb', feedback: 'Apagar un foco no lo arruina; dejarlo encendido sí gasta energía y dinero.' },
          { id: 'c', text: 'Conectar más aparatos para aprovechar la electricidad', icon: 'Plug', feedback: 'Más aparatos conectados significa más consumo.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.1.1'], prompt: '¿Qué manifestación de energía está **guardada** en la leña y en los alimentos?' },
        { options: [
          { id: 'a', text: 'Lumínica' },
          { id: 'b', text: 'Química' },
          { id: 'c', text: 'Nuclear' },
          { id: 'd', text: 'Eléctrica' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.1.1', 'cnt:7.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La energía radiante puede viajar por el espacio vacío, como la luz del Sol.', answer: true },
          { text: 'La energía se destruye cuando la usamos.', answer: false, why: 'La energía no se destruye: se transforma en otras formas, como calor.' },
          { text: 'Desconectar los cargadores que no se usan ayuda a ahorrar electricidad.', answer: true },
          { text: 'El Sol brilla gracias a reacciones químicas como las de una fogata.', answer: false, why: 'El Sol brilla gracias a reacciones nucleares en su interior.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Calentamiento global y satélites ───────────────────────── */
  lesson({
    id: 's08-cnt-2',
    title: 'Un planeta con fiebre, visto desde el espacio',
    icon: 'Satellite',
    minutes: 16,
    gancho: 'Si dejas un carro cerrado al sol, adentro hace mucho más calor que afuera. ¿Qué tiene que ver eso con la Tierra? ¿Y cómo pueden los científicos medir la temperatura de todo el planeta?',
    objetivos: [
      'Explicar el efecto invernadero natural y cómo las actividades humanas lo aumentan',
      'Identificar las causas y consecuencias del calentamiento global',
      'Ejemplificar cómo los viajes espaciales y los satélites ayudan a conocer el clima, los recursos naturales y los desastres',
    ],
    resumen: [
      'La atmósfera tiene gases (vapor de agua, dióxido de carbono, metano) que atrapan parte del calor del Sol: es el efecto invernadero natural, que permite la vida.',
      'El calentamiento global es el aumento de la temperatura promedio de la Tierra porque las actividades humanas agregan más gases de efecto invernadero: quemar combustibles (vehículos, fábricas, plantas eléctricas), talar y quemar bosques, quemar basura y los basureros.',
      'Consecuencias: sequías más largas, lluvias más intensas, deshielo de glaciares, aumento del nivel del mar y pérdida de especies.',
      'Gracias a los viajes espaciales hay satélites que observan la Tierra: siguen huracanes y el estado del tiempo, miden la temperatura, vigilan bosques e incendios, ayudan a ubicar recursos naturales y muestran los daños de un terremoto. Guatemala lanzó su primer satélite, el Quetzal-1, en 2020.',
    ],
    media: {
      id: 's08-cnt-2-invernadero', kind: 'animation', title: 'La cobija de la Tierra', aspect: '16:9', duration: 50,
      alt: 'Animación: rayos de sol atraviesan la atmósfera y calientan la Tierra; parte del calor sale al espacio y parte queda atrapada por una capa de gases. Luego, humo de vehículos, fábricas y quemas engrosa la capa y el termómetro del planeta sube.',
      brief: 'Animación 2D de 50 s. (1) La Tierra con una capa transparente (atmósfera). Flechas amarillas de luz solar entran; la superficie se calienta y emite flechas rojas de calor; algunas salen al espacio y otras rebotan en la capa: rótulo "efecto invernadero natural: sin él, la Tierra sería helada". (2) Aparecen chimeneas de fábricas, escapes de vehículos, un bosque en llamas y un basurero humeante; la capa se vuelve más gruesa y opaca; más flechas rojas quedan atrapadas; un termómetro sobre la Tierra sube. (3) Íconos de consecuencias: sequía en milpa, tormenta, glaciar que se derrite. (4) Un satélite en órbita "fotografía" la escena. Narración en español con subtítulos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:7.3.1'], ambito: 'conocer',
          prompt: '¿Por qué dentro de un carro cerrado al sol hace **más calor** que afuera?',
          explain: 'La luz del sol entra por los vidrios y calienta el interior, pero el calor **no puede salir** fácilmente. Algo parecido hace la atmósfera con la Tierra: es el **efecto invernadero**.' },
        { options: [
          { id: 'a', text: 'Porque la luz entra y el calor queda atrapado adentro', icon: 'Car' },
          { id: 'b', text: 'Porque el carro produce calor aunque esté apagado', icon: 'Flame', feedback: 'Un carro apagado no produce calor: la energía viene del Sol.' },
          { id: 'c', text: 'Porque adentro hay menos aire', icon: 'Wind', feedback: 'Adentro hay el mismo aire; lo que pasa es que el calor no puede salir.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.3.1'], ambito: 'conocer', title: 'El efecto invernadero natural',
          prompt: 'Mira la animación de la lección y toca las tarjetas.' },
        { icon: 'Earth', body: 'La Tierra está rodeada de una capa de gases, la **atmósfera**. Algunos gases funcionan como una **cobija**: dejan entrar la luz del Sol y atrapan parte del calor.', reveal: [
          { icon: 'Cloud', front: 'Gases de efecto invernadero', back: 'Los principales son el **vapor de agua**, el **dióxido de carbono** (CO₂) y el **metano**.' },
          { icon: 'ThumbsUp', front: '¡Es necesario!', back: 'Sin el efecto invernadero natural, la temperatura promedio de la Tierra sería de unos **18 °C bajo cero**: casi no habría vida. Con él, es de unos **15 °C**.' },
          { icon: 'Thermometer', front: 'El problema', back: 'Si se agregan **demasiados** gases, la cobija se vuelve más gruesa y la Tierra se **calienta de más**. Eso es el **calentamiento global**.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.3.1'], ambito: 'conocer', title: 'Causas del calentamiento global',
          prompt: 'Las actividades humanas agregan gases de efecto invernadero a la atmósfera. Toca las tarjetas.' },
        { icon: 'Factory', body: 'La mayor parte del dióxido de carbono extra viene de **quemar** cosas: combustibles, bosques y basura.', reveal: [
          { icon: 'Car', front: 'Quemar combustibles', back: 'Gasolina, diésel, búnker y carbón en **vehículos**, **fábricas** y **plantas eléctricas** liberan **dióxido de carbono**.' },
          { icon: 'Flame', front: 'Talar y quemar bosques', back: 'Los árboles **guardan carbono**. Al quemarlos, lo liberan; y al talarlos, ya no absorben el dióxido de carbono del aire.' },
          { icon: 'Trash2', front: 'Basura', back: 'Quemar basura libera gases y humo; la basura que se pudre en los basureros libera **metano**.' },
          { icon: 'Tractor', front: 'Algunas actividades agropecuarias', back: 'El ganado y algunos cultivos inundados liberan **metano**; el uso excesivo de ciertos fertilizantes libera otros gases.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.3.1', 'cnt:7.2.1'], ambito: 'ser',
          prompt: 'Clasifica cada acción: ¿**aumenta** los gases de efecto invernadero o **ayuda a reducirlos**?',
          hint: 'Quemar aumenta; sembrar árboles, caminar y ahorrar electricidad reducen.',
          explain: 'Todo lo que quema combustibles, bosques o basura aumenta los gases. Sembrar árboles, caminar y ahorrar energía ayuda a reducirlos.' },
        { buckets: [
          { id: 'aum', label: 'Aumenta los gases', icon: 'TrendingUp', color: 'var(--c-bad)' },
          { id: 'red', label: 'Ayuda a reducirlos', icon: 'TrendingDown', color: 'var(--c-ok)' },
        ], items: [
          { id: 'g1', text: 'Quemar basura en el patio', bucket: 'aum' },
          { id: 'g2', text: 'Sembrar árboles en la escuela', bucket: 'red' },
          { id: 'g3', text: 'Ir caminando o en bicicleta a la tienda cercana', bucket: 'red' },
          { id: 'g4', text: 'Hacer rozas con fuego en el bosque', bucket: 'aum' },
          { id: 'g5', text: 'Apagar las luces que no se usan', bucket: 'red', feedback: 'Parte de la electricidad se produce quemando combustibles: ahorrarla reduce gases.' },
          { id: 'g6', text: 'Dejar el carro encendido mientras se espera', bucket: 'aum' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.3.1'], ambito: 'conocer', title: 'Ejemplo: un bosque que se quema',
          prompt: 'Razona paso a paso por qué la quema de un bosque calienta el planeta **dos veces**.' },
        { icon: 'Flame', problem: '¿Por qué un incendio o una tala de bosque aumenta el calentamiento global?',
          steps: [
            { text: 'Los árboles toman **dióxido de carbono** del aire para hacer la fotosíntesis y lo **guardan** en su madera.', why: 'Recuerda: los cloroplastos fabrican alimento con luz, agua y dióxido de carbono.' },
            { text: 'Efecto 1: al **quemarse**, ese carbono guardado vuelve al aire como **dióxido de carbono**.' },
            { text: 'Efecto 2: sin árboles, **ya no hay quien absorba** el dióxido de carbono que seguimos produciendo.' },
            { text: 'Más dióxido de carbono en el aire → la cobija de gases se engrosa → la Tierra atrapa más calor.' },
          ],
          answer: 'La quema **libera** el carbono guardado **y** elimina a quienes lo absorbían: doble efecto.',
          tip: 'Por eso proteger los bosques y reforestar (semana 7) ayuda al agua **y** al clima.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.3.1'], ambito: 'conocer', title: 'Consecuencias',
          prompt: 'Unos pocos grados más en el promedio del planeta cambian mucho el clima. Toca las tarjetas.' },
        { icon: 'Thermometer', body: 'El calentamiento global cambia los patrones de **lluvia** y **temperatura** en todo el mundo, también en Guatemala.', reveal: [
          { icon: 'Sun', front: 'Sequías', back: 'Periodos secos más largos que afectan las cosechas, sobre todo en zonas ya secas como el **Corredor Seco**.' },
          { icon: 'CloudRain', front: 'Lluvias intensas', back: 'Aguaceros y tormentas más fuertes que causan **inundaciones** y **deslaves**.' },
          { icon: 'Snowflake', front: 'Deshielo', back: 'Los **glaciares** y el hielo de los polos se derriten, y el **nivel del mar sube**.' },
          { icon: 'Bird', front: 'Especies en riesgo', back: 'Plantas y animales que no se adaptan al cambio pueden **desaparecer** de su hábitat.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.3.1'], ambito: 'conocer', title: 'Ojos en el espacio: los satélites',
          prompt: '¿Cómo se sabe que la Tierra se calienta, o hacia dónde va un huracán? Los **viajes espaciales** dejaron una herramienta clave: los **satélites**. Toca las tarjetas.',
          media: { id: 's08-cnt-2-satelite', kind: 'image', title: 'Guatemala vista desde el espacio', aspect: '16:9',
            alt: 'Imagen de satélite de Centroamérica con Guatemala al centro: se ven las montañas, el lago de Atitlán, las selvas de Petén en verde oscuro y nubes que giran sobre el mar Caribe.',
            brief: 'Imagen satelital de color real (de dominio público de agencias espaciales, o ilustración fiel) de Centroamérica con Guatemala al centro: volcanes y montañas del altiplano, lago de Atitlán, selvas de Petén en verde oscuro, zonas agrícolas de la costa sur, y un sistema de nubes en espiral sobre el Caribe. Rótulos: "Petén: bosque", "Atitlán", "Nubes de tormenta". Recuadro pequeño con el dibujo de un CubeSat (satélite del tamaño de una caja de 10 cm por lado) y el texto "Quetzal-1, primer satélite de Guatemala (2020)".' } },
        { icon: 'Satellite', body: 'Un **satélite artificial** es un aparato que se lanza con un cohete y queda **girando alrededor de la Tierra**. Desde allí toma imágenes y mediciones de todo el planeta.', reveal: [
          { icon: 'CloudSun', front: 'Estado del tiempo y huracanes', back: 'Muestran las nubes y la formación de **huracanes**, y permiten seguir su camino **días antes** de que lleguen: así se puede avisar a la población.' },
          { icon: 'Thermometer', front: 'El clima del planeta', back: 'Miden la **temperatura** de la tierra y del mar, el **hielo** de los polos y el nivel del mar: son pruebas del calentamiento global.' },
          { icon: 'Trees', front: 'Bosques e incendios', back: 'Detectan **incendios** y muestran dónde se **talan** bosques, por ejemplo en Petén.' },
          { icon: 'Map', front: 'Recursos naturales', back: 'Ayudan a ubicar **cuerpos de agua**, **suelos**, **cultivos** y zonas donde podría haber **minerales**.' },
          { icon: 'Mountain', front: 'Terremotos y volcanes', back: 'No pueden predecir el día de un terremoto, pero miden cómo **se mueve el terreno**, vigilan volcanes y muestran rápidamente los **daños** para organizar la ayuda.' },
          { icon: 'Rocket', front: 'Quetzal-1', back: 'En **2020**, Guatemala puso en órbita su **primer satélite**, el **Quetzal-1**, construido por estudiantes y docentes de una universidad guatemalteca para probar un sensor de observación de la Tierra.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.3.1'], ambito: 'conocer',
          prompt: 'Une cada necesidad con la forma en que un satélite ayuda.',
          hint: 'Revisa las tarjetas de los satélites.',
          explain: 'Los satélites observan la Tierra todos los días: sus datos sirven para prevenir desastres, cuidar recursos y estudiar el clima.' },
        { leftTitle: 'Necesidad', rightTitle: 'Ayuda del satélite', pairs: [
          { id: 'h', left: 'Avisar que se acerca un huracán', leftIcon: 'CloudRain', right: 'Seguir la tormenta días antes de que llegue' },
          { id: 'b', left: 'Saber dónde se está talando la selva', leftIcon: 'Trees', right: 'Comparar imágenes del bosque a lo largo de los años' },
          { id: 't', left: 'Organizar ayuda después de un terremoto', leftIcon: 'Mountain', right: 'Mostrar rápidamente las zonas dañadas' },
          { id: 'c', left: 'Estudiar el calentamiento global', leftIcon: 'Thermometer', right: 'Medir la temperatura del mar y el hielo de los polos' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:8.3.1'], ambito: 'hacer',
          prompt: 'Un satélite muestra que un huracán se acerca a la costa de **Izabal** y llegaría en **tres días**. ¿Cuál es la **mejor forma** de usar esa información?',
          explain: 'La ventaja del satélite es el **tiempo**: permite avisar, preparar albergues y evacuar las zonas de riesgo antes de que llegue el huracán.' },
        { options: [
          { id: 'a', text: 'Avisar a las comunidades, preparar albergues y evacuar las zonas de riesgo', icon: 'Megaphone' },
          { id: 'b', text: 'Esperar a que llegue para ver si era cierto', icon: 'Clock', feedback: 'Esperar desperdicia el tiempo que el satélite nos dio para prepararnos.' },
          { id: 'c', text: 'Guardar la información para estudiarla el próximo año', icon: 'Archive', feedback: 'Estudiarla después es útil, pero ahora lo urgente es proteger a las personas.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:7.3.1'], ambito: 'conocer',
          prompt: 'Lee estos titulares de noticias. ¿Describen una **causa** o una **consecuencia** del calentamiento global?',
          explain: 'Las causas agregan gases (quemas, combustibles). Las consecuencias son cambios en el clima y en los seres vivos.' },
        { buckets: [
          { id: 'cau', label: 'Causa', icon: 'Factory', color: 'var(--c-bad)' },
          { id: 'con', label: 'Consecuencia', icon: 'Thermometer', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'n1', text: '"Aumenta el número de vehículos en la capital"', bucket: 'cau' },
          { id: 'n2', text: '"Sequía prolongada afecta las milpas del Corredor Seco"', bucket: 'con' },
          { id: 'n3', text: '"Incendios forestales arrasan hectáreas de bosque"', bucket: 'cau' },
          { id: 'n4', text: '"Glaciares de los Andes pierden hielo cada año"', bucket: 'con' },
          { id: 'n5', text: '"Crece el basurero municipal a cielo abierto"', bucket: 'cau' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.3.1'], prompt: '¿Cuál es una **causa** del calentamiento global?' },
        { options: [
          { id: 'a', text: 'Sembrar árboles' },
          { id: 'b', text: 'Quemar combustibles en vehículos y fábricas' },
          { id: 'c', text: 'Usar focos LED' },
          { id: 'd', text: 'El efecto invernadero natural, que siempre ha existido' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.3.1', 'cnt:8.3.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Sin el efecto invernadero natural, la Tierra sería mucho más fría.', answer: true },
          { text: 'Los satélites pueden predecir el día exacto de un terremoto.', answer: false, why: 'No se pueden predecir; los satélites miden el movimiento del terreno y muestran los daños.' },
          { text: 'Los satélites ayudan a seguir el camino de un huracán.', answer: true },
          { text: 'Talar bosques ayuda a reducir el dióxido de carbono del aire.', answer: false, why: 'Al revés: los árboles absorben dióxido de carbono; sin ellos, hay más en el aire.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Cómo trabaja la ciencia ───────────────────────── */
  lesson({
    id: 's08-cnt-3',
    title: 'Cómo investiga la ciencia',
    icon: 'FlaskConical',
    minutes: 16,
    gancho: 'Tu abuelo dice que el frijol crece mejor con abono de hojas, y tu vecina dice que no hace diferencia. ¿Cómo podrías averiguar quién tiene razón?',
    objetivos: [
      'Identificar los tipos de investigación: documental, de campo y de laboratorio',
      'Describir las características del conocimiento científico: exacto, verdadero y demostrable',
      'Planificar una investigación sencilla y repasar lo aprendido en la unidad',
    ],
    resumen: [
      'Investigación documental: se buscan datos en libros, documentos, informes y fuentes confiables. De campo: se observa, mide o entrevista en el lugar donde ocurre el fenómeno. De laboratorio: se hacen experimentos en condiciones controladas.',
      'El conocimiento científico es exacto (usa medidas precisas), verdadero (coincide con la realidad comprobada) y demostrable (otras personas pueden repetir la prueba y obtener el mismo resultado).',
      'Pasos de una investigación: observar, preguntar, plantear una hipótesis, experimentar o recoger datos, analizar y concluir. La ciencia se corrige cuando aparecen pruebas nuevas.',
    ],
    media: {
      id: 's08-cnt-3-investigar', kind: 'image', title: 'Tres maneras de investigar', aspect: '16:9',
      alt: 'Tres escenas: una niña consulta libros en la biblioteca municipal; un grupo mide la temperatura del agua de un río con un termómetro; dos niños comparan plantas de frijol en vasos en la mesa del aula.',
      brief: 'Ilustración en tres paneles con estudiantes guatemaltecos de sexto grado (niñas y niños de distintos pueblos): (1) "Documental": una niña en la biblioteca municipal con libros e informes, tomando notas. (2) "De campo": un grupo junto a un río con un termómetro, una libreta y una cinta métrica; una niña entrevista a un agricultor. (3) "De laboratorio": en el aula, vasos con frijoles germinando, etiquetas "con luz" y "sin luz", una regla y una tabla de datos. Estilo cálido, colores claros.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:8.1.1'], ambito: 'conocer',
          prompt: '¿Cómo averiguarías si el abono de hojas hace crecer **más** el frijol?',
          explain: 'La ciencia no se basa en creer ni en adivinar: **investiga**. Una buena forma es comparar plantas con y sin abono, midiendo con cuidado.' },
        { options: [
          { id: 'a', text: 'Creerle a la persona de más edad', icon: 'User', feedback: 'La experiencia de los mayores es valiosa y puede darte una buena idea para investigar, pero hay que comprobarla.' },
          { id: 'b', text: 'Sembrar frijoles con y sin abono, en lo demás iguales, y medir su crecimiento', icon: 'Ruler' },
          { id: 'c', text: 'Votar en clase', icon: 'Vote', feedback: 'Votar dice lo que la gente piensa, no lo que pasa en la realidad.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.1.1'], ambito: 'conocer', title: 'Tres tipos de investigación',
          prompt: 'Según **dónde** y **cómo** se busca la información, hay tres tipos de investigación. Observa la imagen de la lección y toca las tarjetas.' },
        { icon: 'Search', body: 'Muchas investigaciones combinan los tres tipos: primero se lee, luego se observa en el campo y se hacen pruebas.', reveal: [
          { icon: 'BookOpen', front: 'Documental', back: 'Se buscan datos en **libros, documentos, informes, mapas** o sitios confiables. Ejemplo: leer los informes del centro de salud sobre enfermedades del municipio.' },
          { icon: 'MapPin', front: 'De campo', back: 'Se va **al lugar** donde ocurre el fenómeno para **observar, medir o entrevistar**. Ejemplo: medir la temperatura de un río cada día o entrevistar a agricultores.' },
          { icon: 'FlaskConical', front: 'De laboratorio', back: 'Se hacen **experimentos** en **condiciones controladas**: se cambia una sola cosa y se mide qué pasa. Ejemplo: germinar frijoles con y sin luz.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.1.1'], ambito: 'conocer',
          prompt: 'Clasifica cada investigación según su tipo.',
          hint: '¿Se lee (documental), se va al lugar (campo) o se hace un experimento controlado (laboratorio)?',
          explain: 'Documental: libros e informes. De campo: en el lugar real. De laboratorio: experimentos controlados.' },
        { buckets: [
          { id: 'doc', label: 'Documental', icon: 'BookOpen', color: 'var(--area-l1)' },
          { id: 'cam', label: 'De campo', icon: 'MapPin', color: 'var(--c-ok)' },
          { id: 'lab', label: 'De laboratorio', icon: 'FlaskConical', color: 'var(--area-cnt)' },
        ], items: [
          { id: 'i1', text: 'Leer libros sobre las aves de Guatemala', bucket: 'doc' },
          { id: 'i2', text: 'Contar las aves que visitan el parque cada mañana', bucket: 'cam' },
          { id: 'i3', text: 'Poner semillas en vasos con distinta cantidad de agua y medir', bucket: 'lab' },
          { id: 'i4', text: 'Entrevistar a las familias sobre el agua que beben', bucket: 'cam' },
          { id: 'i5', text: 'Revisar informes del INSIVUMEH sobre las lluvias del año', bucket: 'doc' },
          { id: 'i6', text: 'Comparar en el aula cuánta agua retienen dos bandejas de tierra', bucket: 'lab' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'conocer', title: 'Características del conocimiento científico',
          prompt: 'No todo lo que se dice es conocimiento científico. Para serlo, debe cumplir tres características. Toca las tarjetas.' },
        { icon: 'BadgeCheck', body: 'Un rumor, una opinión o una creencia pueden ser importantes para las personas, pero **no** son conocimiento científico si no cumplen estas características.', reveal: [
          { icon: 'Ruler', front: 'Exacto', back: 'Usa **medidas precisas** con unidades: "la planta creció **4.5 cm** en 7 días", no "creció bastante".' },
          { icon: 'ShieldCheck', front: 'Verdadero', back: '**Coincide con la realidad** que se observó y se comprobó. Si aparecen pruebas nuevas que lo contradicen, se **corrige**.' },
          { icon: 'RefreshCw', front: 'Demostrable', back: 'Otras personas pueden **repetir** la investigación, siguiendo los mismos pasos, y obtener **el mismo resultado**.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'conocer',
          prompt: 'Une cada situación con la característica del conocimiento científico que muestra.',
          hint: '¿Hay una medida precisa? ¿Otros lo repitieron? ¿Se comprobó con la realidad?',
          explain: 'Medir con unidades = exacto. Repetir y obtener lo mismo = demostrable. Comprobar con observaciones reales = verdadero.' },
        { leftTitle: 'Situación', rightTitle: 'Característica', pairs: [
          { id: 'e', left: 'Anotar que el agua del río estaba a 18 °C', leftIcon: 'Thermometer', right: 'Exacto' },
          { id: 'd', left: 'Otro grado repite el experimento y obtiene el mismo resultado', leftIcon: 'RefreshCw', right: 'Demostrable' },
          { id: 'v', left: 'Lo que se afirma coincide con lo que se observó y comprobó en la realidad', leftIcon: 'ShieldCheck', right: 'Verdadero' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.1.1', 'cnt:8.2.1'], ambito: 'hacer', title: 'Ejemplo: una investigación de principio a fin',
          prompt: 'Mira cómo el grupo de Andrea responde la pregunta del abono con una investigación. Los datos son **hipotéticos**.',
          media: { id: 's08-cnt-3-frijoles', kind: 'video', title: 'El experimento de los frijoles', aspect: '16:9', duration: 45,
            alt: 'Video en el aula: dos grupos de macetas iguales con frijol, unas con abono de hojas y otras sin él; durante tres semanas los estudiantes riegan igual, miden con regla y anotan en una tabla.',
            brief: 'Video de 45 s (o animación en cámara rápida) en un aula guatemalteca: 10 macetas recicladas con frijol, 5 rotuladas "con abono de hojas" y 5 "sin abono"; misma luz, misma agua (vaso medidor). Cámara rápida de tres semanas de crecimiento. Estudiantes miden con regla y anotan en una tabla de cartulina. Al final, la tabla con promedios y la frase "Otro grado repitió el experimento". Narración en español con subtítulos. Materiales seguros: tierra, semillas, agua, regla.' } },
        { icon: 'FlaskConical', problem: '¿Crece más el frijol con abono de hojas que sin abono?',
          steps: [
            { text: '**Investigación documental**: leen en la biblioteca que el abono de hojas aporta nutrientes al suelo.', why: 'Así empiezan con información confiable.' },
            { text: '**Hipótesis**: "Las plantas con abono crecerán más en 3 semanas".' },
            { text: '**Experimento de laboratorio**: 5 macetas con abono y 5 sin abono; **todo lo demás igual** (semillas, luz, agua).', why: 'Si cambiaran varias cosas a la vez, no sabrían cuál causó la diferencia.' },
            { text: '**Datos exactos**: miden con regla cada semana. Promedio a las 3 semanas: con abono **18 cm**; sin abono **12 cm**.' },
            { text: '**Conclusión**: la hipótesis se cumple. Otro grado **repite** el experimento y obtiene resultados parecidos: es **demostrable**.' },
          ],
          answer: 'En este experimento, el frijol con abono creció en promedio **6 cm más**. El conocimiento es exacto (medido), verdadero (comprobado) y demostrable (repetido).',
          tip: 'Una buena investigación cambia **una sola cosa** a la vez y mide con cuidado.' },
      ),
      S.order(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.1.1'], ambito: 'hacer',
          prompt: 'Ordena los pasos de una investigación científica.',
          hint: 'Todo empieza con algo que te llama la atención y termina con una conclusión.',
          explain: 'Observar → preguntar → hipótesis → experimentar o recoger datos → analizar → concluir.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'q1', text: 'Observar algo que llama la atención', icon: 'Eye' },
          { id: 'q2', text: 'Hacer una pregunta', icon: 'HelpCircle' },
          { id: 'q3', text: 'Plantear una hipótesis (posible respuesta)', icon: 'Lightbulb' },
          { id: 'q4', text: 'Experimentar o recoger datos', icon: 'FlaskConical' },
          { id: 'q5', text: 'Analizar los resultados', icon: 'BarChart3' },
          { id: 'q6', text: 'Sacar una conclusión y compartirla', icon: 'Megaphone' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'conocer',
          prompt: 'Dos estudiantes reportan su experimento. Mario escribe: "La planta creció un montón". Lucía escribe: "La planta creció 4.5 cm en 7 días". ¿Qué característica del conocimiento científico cumple mejor el reporte de Lucía?',
          explain: 'Lucía usa una **medida precisa con unidades y tiempo**: su dato es **exacto** y otros pueden compararlo.' },
        { options: [
          { id: 'a', text: 'Exacto', icon: 'Ruler' },
          { id: 'b', text: 'Opinable', icon: 'MessageCircle', feedback: '"Opinable" no es una característica del conocimiento científico.' },
          { id: 'c', text: 'Secreto', icon: 'Lock', feedback: 'La ciencia se comparte para que otros la comprueben.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'conocer',
          prompt: 'Repaso de la unidad: ¿es **conocimiento científico** o una **opinión o rumor**?',
          explain: 'El conocimiento científico se basa en mediciones y pruebas que otros pueden repetir. Las opiniones y los rumores no se basan en pruebas, y algunos, como que los zancudos transmiten el VIH, la ciencia ya comprobó que son falsos.' },
        { buckets: [
          { id: 'cie', label: 'Conocimiento científico', icon: 'BadgeCheck', color: 'var(--area-cnt)' },
          { id: 'opi', label: 'Opinión o rumor', icon: 'MessageCircle', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'k1', text: 'Las células de las personas tienen 46 cromosomas', bucket: 'cie' },
          { id: 'k2', text: '"Dicen que los zancudos transmiten el VIH"', bucket: 'opi', feedback: 'Es un rumor falso: la ciencia comprobó que los zancudos no transmiten el VIH.' },
          { id: 'k3', text: 'La Tierra se formó hace unos 4,500 millones de años, según mediciones de rocas', bucket: 'cie' },
          { id: 'k4', text: '"El maíz morado es el más bonito"', bucket: 'opi' },
          { id: 'k5', text: 'En el experimento, el suelo con grama retuvo más agua que el suelo desnudo', bucket: 'cie' },
          { id: 'k6', text: '"Seguro que mañana llueve porque me duele la rodilla"', bucket: 'opi' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:8.1.1'], ambito: 'conocer',
          prompt: 'Repaso de la semana 7: el grupo de Ixchel comparó en el aula dos bandejas de tierra, una con grama y otra sin ella, regándolas con la misma cantidad de agua. ¿Qué tipo de investigación hizo?',
          explain: 'Hizo un **experimento controlado**: cambió una sola cosa (la grama) y mantuvo todo lo demás igual. Es una investigación **de laboratorio**.' },
        { options: [
          { id: 'a', text: 'Documental', feedback: 'No leyeron documentos: hicieron una prueba.' },
          { id: 'b', text: 'De campo', feedback: 'No fueron a la montaña: recrearon el fenómeno en el aula, en condiciones controladas.' },
          { id: 'c', text: 'De laboratorio' },
        ], correct: ['c'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.1.1'], prompt: 'Un grupo va al río durante una semana y mide cada día la temperatura del agua con un termómetro. ¿Qué tipo de investigación hace?' },
        { options: [
          { id: 'a', text: 'Documental' },
          { id: 'b', text: 'De campo' },
          { id: 'c', text: 'De laboratorio' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.2.1', 'cnt:8.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Si otras personas repiten una investigación y obtienen el mismo resultado, el conocimiento es demostrable.', answer: true },
          { text: 'Leer informes y libros en la biblioteca es una investigación de laboratorio.', answer: false, why: 'Es una investigación documental.' },
          { text: 'El conocimiento científico nunca se corrige.', answer: false, why: 'Se corrige cuando aparecen pruebas nuevas.' },
          { text: 'En un buen experimento se cambia una sola cosa a la vez.', answer: true },
        ] },
      ),
      cierre({ areas: ['cnt'], cnb: [] },
        ['Distingo las manifestaciones de la energía y sé cómo ahorrar electricidad', 'Explico las causas del calentamiento global y cómo ayudan los satélites', 'Diferencio investigación documental, de campo y de laboratorio', 'Reconozco un conocimiento exacto, verdadero y demostrable'],
        ['Seré "guardián de la energía" en mi casa', 'Haré un pequeño experimento y anotaré mis mediciones', 'Revisaré si lo que escucho es un dato comprobado o un rumor']),
    ],
  }),
];
