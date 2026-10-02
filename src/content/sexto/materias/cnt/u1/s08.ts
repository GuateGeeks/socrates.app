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
    minutes: 15,
    gancho: 'El Sol, una tortilla, una batería y un rayo parecen no tener nada en común. Sin embargo, los cuatro tienen algo que hace posible todo movimiento y todo cambio. ¿Qué es?',
    objetivos: [
      'Evaluar afirmaciones sobre transformaciones y ahorro de energía con medidas, evidencia demostrable y lenguaje preciso',
    ],
    resumen: [
      'La energía es la capacidad de producir cambios o movimiento. No se crea ni se destruye: se transforma de una forma en otra.',
      'Radiante: viaja en ondas, aun por el espacio vacío. Solar: la que llega del Sol como luz y calor. Lumínica: la luz visible. Calorífica: el calor. Química: guardada en alimentos, leña, combustibles y baterías. Nuclear: guardada en el núcleo de los átomos (así brilla el Sol). Eléctrica: movimiento de cargas eléctricas por cables.',
      'La electricidad se produce con agua de los ríos, sol, viento, calor de la Tierra, bagazo de caña o combustibles. Producirla cuesta dinero y parte de ella contamina: por eso hay que ahorrarla.',
      'Una afirmación científica sobre ahorro indica qué se midió, con qué unidad y bajo qué condiciones; al repetir el protocolo se esperan resultados compatibles, no necesariamente idénticos.',
    ],
    media: {
      id: 's08-cnt-1-manifestaciones', kind: 'diagram', title: 'Siete formas de la energía', aspect: '16:9',
      alt: 'Rueda con siete sectores ilustrados: Sol (solar), ondas que viajan por el espacio (radiante), un foco encendido (lumínica), un comal caliente (calorífica), una tortilla y leña (química), un átomo (nuclear) y un cable con un rayo (eléctrica).',
      brief: 'Infografía circular con 7 sectores de colores, cada uno con ícono grande, nombre y un ejemplo guatemalteco: Solar (Sol sobre un campo de milpa), Radiante (ondas que salen del Sol y de una antena de radio), Lumínica (foco y luciérnaga), Calorífica (comal sobre el fuego), Química (tortillas, leña, batería), Nuclear (átomo con núcleo resaltado, y el Sol como ejemplo), Eléctrica (cable, poste de luz, rayo). Al centro: "Energía = capacidad de producir cambios". Flechas finas entre sectores que sugieren transformaciones. Letra grande, fondo blanco. Target: public/media/s08-cnt-1-manifestaciones.svg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'conocer', title: 'Transformaciones y evidencia', prompt: 'Lee cómo se comprueba una afirmación sobre energía.' },
        { icon: 'Zap', body: 'La energía se **transforma**. Una afirmación confiable identifica la transformación, la medición, la unidad y las condiciones del protocolo.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'conocer', title: 'Las manifestaciones de la energía',
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
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'conocer',
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
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'conocer', title: 'Ejemplo: del Sol a tus piernas',
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
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'conocer',
          prompt: 'Ordena las transformaciones de la energía en una **hidroeléctrica**, hasta que se enciende un foco en tu casa.',
          hint: 'El agua del embalse cae y mueve una turbina; el generador transforma ese movimiento en energía eléctrica; los cables la llevan; el foco da luz.',
          explain: 'Agua que cae (movimiento) → turbina que gira → generador (eléctrica) → cables → foco (lumínica y algo de calorífica).',
          media: { id: 's08-cnt-1-hidroelectrica', kind: 'animation', title: 'Del río al foco', aspect: '16:9', duration: 40,
            alt: 'Animación: el agua de un embalse cae por un tubo, hace girar una turbina unida a un generador; la electricidad viaja por torres y cables hasta una casa donde se enciende un foco.',
            brief: 'Animación 2D de 40 s, estilo esquemático. Un embalse en las montañas; el agua baja por una tubería y hace girar una turbina (rótulo "energía del movimiento"); la turbina hace girar un generador ("energía eléctrica"); rayitos amarillos viajan por torres y cables hasta una casa de una aldea; se enciende un foco ("energía lumínica y calorífica"). Al final, el agua sigue su camino por el río. Narración en español con subtítulos. Target: public/media/s08-cnt-1-hidroelectrica.mp4. Accesibilidad: subtítulos completos, transcripción y pausa suficiente para lectura.' } },
        { labels: { start: 'Inicio', end: 'Final' }, items: [
          { id: 'h1', text: 'El agua del embalse cae por una tubería', icon: 'Waves' },
          { id: 'h2', text: 'El agua en movimiento hace girar una turbina', icon: 'RotateCw' },
          { id: 'h3', text: 'El generador transforma movimiento en energía eléctrica', icon: 'Zap' },
          { id: 'h4', text: 'Los cables llevan la electricidad a las casas', icon: 'Plug' },
          { id: 'h5', text: 'El foco transforma la electricidad en luz', icon: 'Lightbulb' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'ser', title: '¿Por qué ahorrar energía eléctrica?',
          prompt: 'La electricidad es muy útil, pero producirla tiene un **costo**. Toca las tarjetas.' },
        { icon: 'Lightbulb', body: 'En Guatemala, la electricidad se produce con **agua de los ríos** (hidroeléctricas), **bagazo de caña**, **sol**, **viento**, **calor del interior de la Tierra** y **combustibles** como el búnker y el carbón.', reveal: [
          { icon: 'Banknote', front: 'Cuesta dinero', back: 'Cada mes, la familia paga según la electricidad que usó. Ahorrar deja dinero para otras necesidades.' },
          { icon: 'Factory', front: 'Parte contamina', back: 'Las plantas que queman combustibles producen **humo y gases** que contaminan el aire y calientan el planeta.' },
          { icon: 'Trees', front: 'Recursos para todos', back: 'Ríos, bosques y combustibles son **limitados**. Usar la energía con cuidado es parte del **desarrollo sostenible**: que alcance para hoy y para el futuro.' },
          { icon: 'ListChecks', front: 'Cómo ahorrar', back: 'Apagar luces y aparatos que no usas, **desconectar** cargadores, usar focos **LED**, aprovechar la **luz del día**, abrir el refrigerador lo menos posible y planchar toda la ropa de una vez.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'ser',
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
        { fase: 'aplicar', areas: ['cnt', 'mat'], cnb: ['cnt:8.2.1'], ambito: 'hacer',
          prompt: 'En un **caso simulado**, un medidor registra **60 W** para una lámpara y **9 W** para otra bajo igual nivel de iluminación. Si se comparan 4 lámparas de cada tipo, ¿cuál es la diferencia de potencia?',
          explain: 'Cada par difiere 60 − 9 = 51 W. En cuatro pares: 204 W. El resultado solo corresponde a las condiciones declaradas; no demuestra por sí solo un ahorro anual.' },
        { answer: 204, unit: 'W', misconceptions: [
          { value: 51, msg: 'Eso es lo que ahorra un solo foco. Hay 4 focos.' },
          { value: 36, msg: '36 W es lo que usan los 4 focos LED. La pregunta es cuánto se ahorra.' },
          { value: 240, msg: '240 W es lo que usan los 4 focos viejos. Réstale lo que usan los LED.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'ser',
          prompt: '¿Qué propuesta permite comprobar una recomendación de ahorro sin inventar resultados?',
          explain: 'Un protocolo fija condiciones, usa unidades y conserva los registros para que otro grupo pueda repetirlo y comparar resultados compatibles.' },
        { options: [
          { id: 'a', text: 'Comparar dos lámparas durante el mismo tiempo, registrar watts y nivel de iluminación, y compartir el protocolo', icon: 'Ruler' },
          { id: 'b', text: 'Afirmar que una lámpara ahorra mucho porque parece moderna', icon: 'Lightbulb', feedback: 'La apariencia no es una medición.' },
          { id: 'c', text: 'Prometer una cantidad anual sin tiempo de uso ni tarifa', icon: 'Plug', feedback: 'Faltan condiciones y datos para esa conclusión.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.2.1'], prompt: '¿Qué registro hace **exacta y verificable** una comparación de lámparas?' },
        { options: [
          { id: 'a', text: '“La nueva se ve mejor”' },
          { id: 'b', text: '“9 W y 60 W, medidos durante igual prueba de iluminación”' },
          { id: 'c', text: '“Todos saben cuál conviene”' },
          { id: 'd', text: '“Ahorrará mucho”' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Una lámpara transforma energía eléctrica en luz y calor; no crea energía.', answer: true },
          { text: 'Dos repeticiones demostrables deben dar cifras perfectamente idénticas.', answer: false, why: 'Se esperan resultados compatibles dentro de un margen explicado.' },
          { text: 'Una recomendación de ahorro debe declarar condiciones y unidad de medida.', answer: true },
          { text: 'Un dato de potencia basta para prometer una cantidad anual de dinero ahorrado.', answer: false, why: 'También hacen falta tiempo de uso, tarifa y otras condiciones.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Calentamiento global y satélites ───────────────────────── */
  lesson({
    id: 's08-cnt-2',
    title: 'Un planeta con fiebre, visto desde el espacio',
    icon: 'Satellite',
    minutes: 15,
    gancho: 'Los satélites registran temperatura, nubes e incendios durante muchos años. ¿Cómo ayudan esas series de datos a explicar el calentamiento global?',
    objetivos: [
      'Explicar el efecto invernadero natural y cómo las actividades humanas lo aumentan',
    ],
    resumen: [
      'La energía solar atraviesa la atmósfera y calienta la superficie. La Tierra emite radiación infrarroja; gases como vapor de agua, dióxido de carbono y metano absorben y reemiten parte de esa radiación, incluso hacia la superficie.',
      'El calentamiento global es el aumento de la temperatura promedio de la Tierra porque las actividades humanas agregan más gases de efecto invernadero: quemar combustibles (vehículos, fábricas, plantas eléctricas), talar y quemar bosques, quemar basura y los basureros.',
      'Consecuencias: sequías más largas, lluvias más intensas, deshielo de glaciares, aumento del nivel del mar y pérdida de especies.',
      'Gracias a los viajes espaciales hay satélites que observan la Tierra: siguen huracanes y el estado del tiempo, miden la temperatura, vigilan bosques e incendios, ayudan a ubicar recursos naturales y muestran los daños de un terremoto. Guatemala lanzó su primer satélite, el Quetzal-1, en 2020.',
    ],
    media: {
      id: 's08-cnt-2-invernadero', kind: 'animation', title: 'Energía solar e infrarroja', aspect: '16:9', duration: 50,
      alt: 'Animación: energía solar amarilla atraviesa la atmósfera y calienta la superficie; la Tierra emite radiación infrarroja roja. Gases de efecto invernadero absorben y reemiten parte del infrarrojo en varias direcciones, incluso hacia la superficie, mientras otra parte escapa al espacio.',
      brief: 'Animación científica 2D de 50 s. (1) Flechas amarillas rotuladas “energía solar entrante” atraviesan la atmósfera y son absorbidas por la superficie, que se calienta. (2) La superficie emite flechas rojas onduladas rotuladas “radiación infrarroja terrestre”. (3) Moléculas identificadas de CO₂, CH₄ y H₂O absorben algunas flechas infrarrojas y las reemiten en varias direcciones: algunas hacia el espacio y otras hacia la superficie. Representar intercambio radiativo entre superficie, gases y espacio, sin una capa reflectora. (4) Al aumentar gases por actividades humanas, aumenta la absorción y reemisión infrarroja hacia abajo; incluir termómetro de tendencia, no de un día aislado. (5) Un satélite registra una serie temporal con fecha y cobertura. Target: public/media/s08-cnt-2-invernadero.mp4. Producción: 1920×1080 px, 50 s. Accesibilidad: narración, subtítulos completos, transcripción, códigos de color con rótulos y controles de pausa.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:7.3.1'], ambito: 'conocer', title: 'Del Sol a la radiación infrarroja', prompt: 'Sigue el recorrido de la energía antes de interpretar el modelo.' },
        { icon: 'Earth', body: 'La energía solar calienta la superficie. La Tierra emite **radiación infrarroja**; los gases de efecto invernadero absorben y reemiten parte de ella.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.3.1'], ambito: 'conocer', title: 'El efecto invernadero natural',
          prompt: 'Mira la animación de la lección y toca las tarjetas.' },
        { icon: 'Earth', body: 'La energía solar calienta la superficie. La superficie emite **radiación infrarroja**; algunos gases la absorben y la reemiten en varias direcciones.', reveal: [
          { icon: 'Cloud', front: 'Absorber y reemitir', back: 'El vapor de agua, el **CO₂** y el **metano** absorben parte del infrarrojo terrestre y lo reemiten; una parte vuelve hacia la superficie y otra sale al espacio.' },
          { icon: 'Thermometer', front: 'Natural y aumentado', back: 'El efecto natural mantiene habitable el planeta. Más gases por actividades humanas alteran el balance energético y elevan la temperatura promedio.' },
          { icon: 'Factory', front: 'Actividades humanas', back: 'Quemar combustibles y basura, talar bosques y algunas actividades agropecuarias aumentan gases como CO₂ y metano.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.3.1'], ambito: 'ser',
          prompt: 'Clasifica cada acción: ¿**aumenta** los gases de efecto invernadero o **ayuda a reducirlos**?',
          hint: 'Quemar aumenta; sembrar árboles, caminar y ahorrar electricidad reducen.',
          explain: 'Todo lo que quema combustibles, bosques o basura aumenta los gases. Sembrar árboles, caminar y ahorrar energía ayuda a reducirlos.' },
        { buckets: [
          { id: 'aum', label: 'Aumenta los gases', icon: 'TrendingUp', color: 'var(--c-bad)' },
          { id: 'red', label: 'Ayuda a reducirlos', icon: 'TrendingDown', color: 'var(--c-ok)' },
        ], items: [
          { id: 'g1', text: 'Quemar basura en el patio', bucket: 'aum' },
          { id: 'g2', text: 'Proteger y restaurar bosques', bucket: 'red' },
          { id: 'g3', text: 'Apagar luces innecesarias', bucket: 'red', feedback: 'Reducir demanda eléctrica puede evitar emisiones cuando la generación usa combustibles.' },
          { id: 'g4', text: 'Dejar un motor encendido mientras se espera', bucket: 'aum' },
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
            { text: 'Más dióxido de carbono → mayor absorción y reemisión de radiación infrarroja → cambia el balance energético y sube la temperatura media.' },
          ],
          answer: 'La quema **libera** el carbono guardado **y** elimina a quienes lo absorbían: doble efecto.',
          tip: 'Por eso proteger los bosques y reforestar (semana 7) ayuda al agua **y** al clima.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:7.3.1'], ambito: 'conocer', title: 'Consecuencias',
          prompt: 'Unos pocos grados más en el promedio del planeta cambian mucho el clima. Toca las tarjetas.' },
        { icon: 'Thermometer', body: 'El calentamiento global modifica riesgos y patrones; un evento aislado no se atribuye por sí solo al cambio climático.', reveal: [
          { icon: 'CloudRain', front: 'Riesgos cambiantes', back: 'Las tendencias pueden aumentar la probabilidad o intensidad de algunos extremos, pero se estudian con series y análisis, no con una sola tormenta.' },
          { icon: 'Snowflake', front: 'Cambios observados', back: 'Series de temperatura, hielo y nivel del mar aportan evidencias complementarias con fuente, cobertura e incertidumbre.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.3.1'], ambito: 'conocer', title: 'Ojos en el espacio: los satélites',
          prompt: '¿Cómo se sabe que la Tierra se calienta, o hacia dónde va un huracán? Los **viajes espaciales** dejaron una herramienta clave: los **satélites**. Toca las tarjetas.',
          media: { id: 's08-cnt-2-satelite', kind: 'image', title: 'Guatemala vista desde el espacio', aspect: '16:9',
            alt: 'Imagen de satélite de Centroamérica con Guatemala al centro: se ven las montañas, el lago de Atitlán, las selvas de Petén en verde oscuro y nubes que giran sobre el mar Caribe.',
            brief: 'Imagen satelital de color real (de dominio público de agencias espaciales, o ilustración fiel) de Centroamérica con Guatemala al centro: volcanes y montañas del altiplano, lago de Atitlán, selvas de Petén en verde oscuro, zonas agrícolas de la costa sur, y un sistema de nubes en espiral sobre el Caribe. Rótulos: "Petén: bosque", "Atitlán", "Nubes de tormenta". Recuadro pequeño con el dibujo de un CubeSat (satélite del tamaño de una caja de 10 cm por lado) y el texto "Quetzal-1, primer satélite de Guatemala (2020)". Target: public/media/s08-cnt-2-satelite.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.' } },
        { icon: 'Satellite', body: 'Un satélite registra observaciones repetidas con instrumento, fecha y cobertura. Sus datos se combinan con mediciones de superficie; no explican por sí solos cada evento local.', reveal: [
          { icon: 'CloudSun', front: 'Estado del tiempo y huracanes', back: 'Muestran las nubes y la formación de **huracanes**, y permiten seguir su camino **días antes** de que lleguen: así se puede avisar a la población.' },
          { icon: 'Thermometer', front: 'El clima del planeta', back: 'Miden la **temperatura** de la tierra y del mar, el **hielo** de los polos y el nivel del mar: son pruebas del calentamiento global.' },
          { icon: 'Trees', front: 'Cobertura e incendios', back: 'Series de imágenes permiten comparar cambios de cobertura y detectar señales térmicas; requieren verificación e interpretación.' },
          { icon: 'Mountain', front: 'Límites', back: 'Un satélite no predice el día exacto de un terremoto ni convierte una imagen aislada en prueba de una tendencia climática.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.3.1'], ambito: 'conocer',
          prompt: 'Une cada necesidad con la forma en que un satélite ayuda.',
          hint: 'Revisa las tarjetas de los satélites.',
          explain: 'Los satélites observan la Tierra todos los días: sus datos sirven para prevenir desastres, cuidar recursos y estudiar el clima.' },
        { leftTitle: 'Necesidad', rightTitle: 'Ayuda del satélite', pairs: [
          { id: 'h', left: 'Avisar que se acerca un huracán', leftIcon: 'CloudRain', right: 'Seguir la tormenta días antes de que llegue' },
          { id: 'b', left: 'Comparar cambios de cobertura', leftIcon: 'Trees', right: 'Usar imágenes compatibles de varias fechas' },
          { id: 'c', left: 'Estudiar una tendencia climática', leftIcon: 'Thermometer', right: 'Analizar series con fecha, cobertura e instrumento' },
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
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.3.1', 'cnt:8.3.1'], prompt: 'Una serie satelital con fecha y cobertura muestra una tendencia térmica. ¿Qué explicación del efecto invernadero es correcta?' },
        { options: [
          { id: 'a', text: 'La atmósfera funciona como una capa sólida que refleja toda la energía' },
          { id: 'b', text: 'La superficie emite infrarrojo y los gases absorben y reemiten parte, incluso hacia abajo' },
          { id: 'c', text: 'Una imagen aislada demuestra por sí sola la tendencia global' },
          { id: 'd', text: 'Los satélites crean la energía que miden' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.3.1', 'cnt:8.3.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La energía solar calienta la superficie y la Tierra emite radiación infrarroja.', answer: true },
          { text: 'Los satélites pueden predecir el día exacto de un terremoto.', answer: false, why: 'No se pueden predecir; los satélites miden el movimiento del terreno y muestran los daños.' },
          { text: 'Los gases de efecto invernadero absorben y reemiten parte del infrarrojo en varias direcciones.', answer: true },
          { text: 'Una observación satelital sin fecha ni cobertura basta para atribuir un evento al cambio climático.', answer: false, why: 'Se necesitan series compatibles, contexto y varias líneas de evidencia.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Cómo trabaja la ciencia ───────────────────────── */
  lesson({
    id: 's08-cnt-3',
    title: 'Cómo investiga la ciencia',
    icon: 'FlaskConical',
    minutes: 15,
    gancho: 'Tu abuelo dice que el frijol crece mejor con abono de hojas, y tu vecina dice que no hace diferencia. ¿Cómo podrías averiguar quién tiene razón?',
    objetivos: [
      'Identificar los tipos de investigación: documental, de campo y de laboratorio',
    ],
    resumen: [
      'Investigación documental: se buscan datos en libros, documentos, informes y fuentes confiables. De campo: se observa, mide o entrevista en el lugar donde ocurre el fenómeno. De laboratorio: se hacen experimentos en condiciones controladas.',
      'El conocimiento científico busca mediciones precisas, afirmaciones respaldadas y procedimientos demostrables: al repetirlos se esperan resultados compatibles dentro de un margen explicado, no copias idénticas.',
      'Pasos de una investigación: observar, preguntar, plantear una hipótesis, experimentar o recoger datos, analizar y concluir. La ciencia se corrige cuando aparecen pruebas nuevas.',
    ],
    media: {
      id: 's08-cnt-3-investigar', kind: 'image', title: 'Tres maneras de investigar', aspect: '16:9',
      alt: 'Tres escenas: una niña consulta libros en la biblioteca municipal; un grupo mide la temperatura del agua de un río con un termómetro; dos niños comparan plantas de frijol en vasos en la mesa del aula.',
      brief: 'Ilustración en tres paneles con estudiantes guatemaltecos de sexto grado (niñas y niños de distintos pueblos): (1) "Documental": una niña en la biblioteca municipal con libros e informes, tomando notas. (2) "De campo": un grupo junto a un río con un termómetro, una libreta y una cinta métrica; una niña entrevista a un agricultor. (3) "De laboratorio": en el aula, vasos con frijoles germinando, etiquetas "con luz" y "sin luz", una regla y una tabla de datos. Estilo cálido, colores claros. Target: public/media/s08-cnt-3-investigar.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:8.1.1'], ambito: 'conocer', title: 'Tres tipos de investigación', prompt: 'Lee de dónde obtiene evidencia cada tipo de investigación.' },
        { icon: 'Search', body: 'La investigación puede ser **documental**, **de campo** o **de laboratorio**, según dónde y cómo obtiene evidencia.' },
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
          { id: 'i1', text: 'Revisar informes de lluvia con fuente', bucket: 'doc' },
          { id: 'i2', text: 'Medir la temperatura en el lugar del caso', bucket: 'cam' },
          { id: 'i3', text: 'Comparar en el aula dos bandejas bajo condiciones controladas', bucket: 'lab' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'conocer', title: 'Características del conocimiento científico',
          prompt: 'No todo lo que se dice es conocimiento científico. Para serlo, debe cumplir tres características. Toca las tarjetas.' },
        { icon: 'BadgeCheck', body: 'Un rumor, una opinión o una creencia pueden ser importantes para las personas, pero **no** son conocimiento científico si no cumplen estas características.', reveal: [
          { icon: 'Ruler', front: 'Exacto', back: 'Usa **medidas precisas** con unidades: "la planta creció **4.5 cm** en 7 días", no "creció bastante".' },
          { icon: 'ShieldCheck', front: 'Verdadero', back: '**Coincide con la realidad** que se observó y se comprobó. Si aparecen pruebas nuevas que lo contradicen, se **corrige**.' },
          { icon: 'RefreshCw', front: 'Demostrable', back: 'Otras personas pueden **repetir** la investigación con el mismo protocolo y obtener **resultados compatibles** dentro de un margen explicado.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.2.1'], ambito: 'conocer',
          prompt: 'Une cada situación con la característica del conocimiento científico que muestra.',
          hint: '¿Hay una medida precisa? ¿Otros lo repitieron? ¿Se comprobó con la realidad?',
          explain: 'Medir con unidades = exacto. Repetir y obtener lo mismo = demostrable. Comprobar con observaciones reales = verdadero.' },
        { leftTitle: 'Situación', rightTitle: 'Característica', pairs: [
          { id: 'e', left: 'Anotar que el agua del río estaba a 18 °C', leftIcon: 'Thermometer', right: 'Exacto' },
          { id: 'd', left: 'Otro grado repite el protocolo y obtiene resultados compatibles', leftIcon: 'RefreshCw', right: 'Demostrable' },
          { id: 'v', left: 'Lo que se afirma coincide con lo que se observó y comprobó en la realidad', leftIcon: 'ShieldCheck', right: 'Verdadero' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:8.1.1', 'cnt:8.2.1'], ambito: 'hacer', title: 'Ejemplo: una investigación de principio a fin',
          prompt: 'Mira cómo el grupo de Andrea responde la pregunta del abono con una investigación. Los datos son **hipotéticos**.',
          media: { id: 's08-cnt-3-frijoles', kind: 'video', title: 'El experimento de los frijoles', aspect: '16:9', duration: 45,
            alt: 'Video en el aula: dos grupos de macetas iguales con frijol, unas con abono de hojas y otras sin él; durante tres semanas los estudiantes riegan igual, miden con regla y anotan en una tabla.',
            brief: 'Video de 45 s (o animación en cámara rápida) en un aula guatemalteca: 10 macetas recicladas con frijol, 5 rotuladas "con abono de hojas" y 5 "sin abono"; misma luz, misma agua (vaso medidor). Cámara rápida de tres semanas de crecimiento. Estudiantes miden con regla y anotan en una tabla de cartulina. Al final, la tabla con promedios y la frase "Otro grado repitió el experimento". Narración en español con subtítulos. Materiales seguros: tierra, semillas, agua, regla. Target: public/media/s08-cnt-3-frijoles.mp4. Accesibilidad: subtítulos completos, transcripción y pausa suficiente para lectura.' } },
        { icon: 'FlaskConical', problem: '¿Crece más el frijol con abono de hojas que sin abono?',
          steps: [
            { text: '**Documental e hipótesis**: leen una fuente y plantean que las plantas con abono crecerán más.' },
            { text: '**Experimento de laboratorio**: 5 macetas con abono y 5 sin abono; **todo lo demás igual** (semillas, luz, agua).', why: 'Si cambiaran varias cosas a la vez, no sabrían cuál causó la diferencia.' },
            { text: '**Datos y conclusión**: miden 18 cm y 12 cm; otro grupo repite el protocolo y obtiene resultados compatibles, por lo que la evidencia es demostrable.' },
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
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.1.1', 'cnt:8.2.1'], prompt: 'Un grupo mide en el río **18 °C** cada día con el mismo protocolo. ¿Qué tipo de investigación hace y qué vuelve exacta su evidencia?' },
        { options: [
          { id: 'a', text: 'Documental; consultar una opinión' },
          { id: 'b', text: 'De campo; registrar medida, unidad y protocolo' },
          { id: 'c', text: 'De laboratorio; votar el resultado' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.2.1', 'cnt:8.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Si otras personas repiten un protocolo y obtienen resultados compatibles dentro del margen esperado, la evidencia es demostrable.', answer: true },
          { text: 'Leer informes y libros en la biblioteca es una investigación de laboratorio.', answer: false, why: 'Es una investigación documental.' },
          { text: 'El conocimiento científico se corrige con pruebas nuevas y un buen experimento controla las variables.', answer: true },
        ] },
      ),
      cierre({ areas: ['cnt'], cnb: [] },
        ['Distingo las manifestaciones de la energía y sé cómo ahorrar electricidad', 'Explico las causas del calentamiento global y cómo ayudan los satélites', 'Diferencio investigación documental, de campo y de laboratorio', 'Reconozco un conocimiento exacto, verdadero y demostrable'],
        ['Seré "guardián de la energía" en mi casa', 'Haré un pequeño experimento y anotaré mis mediciones', 'Revisaré si lo que escucho es un dato comprobado o un rumor']),
    ],
  }),
];
