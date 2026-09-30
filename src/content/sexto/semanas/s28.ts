import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 28 · Unidad 3 "Valorando nuestra convivencia"
 * Tema generador: Investigar para cuidarnos y convivir
 * Una escuela de Escuintla, cerca del volcán de Fuego, arma su "Centro de investigación
 * escolar": usa satélites y fuentes confiables para prevenir desastres, compara cómo participa
 * la ciudadanía en el mundo, lleva cuentas claras con impuestos y onzas, y cuenta en escena
 * la historia de la ciudadanía guatemalteca.
 */
export default semana({
  id: 's28',
  unidad: 3,
  semana: 28,
  kind: 'aprendizaje',
  temaGenerador: 'Investigar para cuidarnos y convivir',
  title: 'Investigar para cuidarnos y convivir',
  subtitle: 'Ciencia, fuentes, participación, impuestos y teatro comunitario',
  icon: 'Search',
  color: 'var(--area-cnt)',
  contexto: 'En una escuela de Escuintla, a pocos kilómetros del volcán de Fuego, sexto grado abrió su "Centro de investigación escolar". Quieren saber cómo los satélites y los sensores ayudan a avisar a tiempo, cómo participa la gente en otros países, cuánto se paga de impuestos en la tienda de la cooperativa y cómo contar en escena la historia de la ciudadanía en Guatemala. Esta semana descubrirás que investigar bien, con fuentes confiables, es una forma de cuidarnos y convivir mejor.',
  ejes: ['seguridad', 'vida-ciudadana', 'tecnologia', 'trabajo', 'multiculturalidad'],
  media: {
    id: 's28-portada', kind: 'video', title: 'Del satélite a mi escuela', aspect: '16:9', duration: 60,
    alt: 'Un satélite gira sobre Centroamérica, la imagen baja hasta un volcán humeante y termina en un aula donde niñas y niños revisan datos en una computadora y en libros.',
    brief: 'Video animado 2D de 60 s. (1) Un satélite pequeño en órbita sobre Centroamérica, con la Tierra de fondo. (2) Zoom hacia Guatemala: nubes de una tormenta en el Pacífico y la silueta del volcán de Fuego con una fumarola suave (sin lava ni personas en peligro). (3) Corte a un aula rural de Escuintla: estudiantes mayas y ladinos, niñas y niños, revisan un mapa, un periódico, un diccionario y una computadora. Sobreimpresos: "Observar", "Registrar", "Predecir", "Avisar". Narración cálida: "Investigar también es cuidarnos". Música de marimba suave. Sin logotipos de instituciones ni marcas.',
  },
  badge: { id: 'medalla-s28', name: 'Investigadora ciudadana', icon: 'Search', desc: 'Completaste la semana 28 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's28-d1-espacio-prevencion',
      title: 'Del espacio a mi comunidad',
      icon: 'Satellite',
      minutes: 14,
      day: 1,
      gancho: 'Cuando ves en la radio o el celular que viene una tormenta, ¿cómo lo supieron antes de que llegara?',
      objetivos: ['Reconocer beneficios de la investigación espacial para la vida diaria', 'Explicar cómo la ciencia y la tecnología ayudan a prevenir desastres', 'Elegir la fuente de información adecuada para cada pregunta'],
      resumen: [
        'La investigación espacial nos dejó satélites para el pronóstico del clima, las comunicaciones y la ubicación (GPS), además de inventos como las cámaras digitales pequeñas.',
        'En 2020 se puso en órbita el Quetzal-1, primer satélite de Guatemala, construido en la Universidad del Valle de Guatemala.',
        'La ciencia previene desastres cuando observa, registra datos, predice y avisa a tiempo a la población.',
        'Cada fuente sirve para algo: el diccionario para significados, el atlas para mapas, el periódico para noticias recientes y los buscadores de internet para encontrar muchas fuentes que hay que comparar.',
      ],
      media: {
        id: 's28-d1-satelites', kind: 'diagram', title: 'Satélites que nos ayudan', aspect: '16:9',
        alt: 'La Tierra con tres satélites en órbita: uno observa nubes, otro envía señales de teléfono y televisión, otro da la ubicación a un celular.',
        brief: 'Diagrama plano con la Tierra centrada en América. Tres satélites con rótulo y flecha hacia Guatemala: (1) "Clima": fotografía nubes de una tormenta sobre el Pacífico; (2) "Comunicaciones": ondas hacia una antena y un radio en una aldea; (3) "Ubicación (GPS)": señal hacia un celular en la mano de una agricultora. Recuadro pequeño: "Quetzal-1, primer satélite guatemalteco (2020)", dibujado como un cubo de 10 cm. Colores de ciencias, fondo azul noche, texto grande.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'ccss', 'l1'], cnb: ['cnt:8.3.2'], ambito: 'conocer', title: 'Un quetzal en el espacio',
            prompt: 'Muchas cosas que usas cada día existen gracias a la **investigación espacial**. Toca cada tarjeta.',
            media: { id: 's28-d1-quetzal1', kind: 'image', title: 'El Quetzal-1', aspect: '4:3',
              alt: 'Pequeño satélite en forma de cubo con paneles solares, flotando sobre la Tierra, con Guatemala visible abajo.',
              brief: 'Ilustración semirrealista de un nanosatélite tipo CubeSat (cubo de unos 10 cm por lado) con paneles solares azules y una pequeña lente, flotando en órbita. Abajo se ve la Tierra con Centroamérica y el lago de Atitlán apenas distinguible. Rótulo: "Quetzal-1 · primer satélite de Guatemala · 2020". Sin banderas grandes ni logotipos.' } },
          { icon: 'Satellite', body: 'Los viajes y la investigación espacial no solo sirven a los astronautas: sus inventos llegaron a las casas, los hospitales y el campo.', reveal: [
            { icon: 'CloudRain', front: 'Pronóstico del clima', back: 'Los **satélites meteorológicos** fotografían las nubes y permiten ver una tormenta **días antes** de que llegue.' },
            { icon: 'MapPin', front: 'Ubicación (GPS)', back: 'Una red de satélites permite saber **dónde estás** con un celular: sirve a transportistas, rescatistas y agricultores.' },
            { icon: 'Camera', front: 'Cámaras pequeñas', back: 'Los sensores de las cámaras digitales pequeñas se perfeccionaron en la investigación espacial y hoy están en los celulares.' },
            { icon: 'Rocket', front: 'Quetzal-1', back: 'Estudiantes y docentes de la **Universidad del Valle de Guatemala** construyeron el primer satélite guatemalteco. En **2020** fue puesto en órbita para probar un sensor que toma datos de la Tierra.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt', 'ccss'], cnb: ['cnt:8.3.2'], ambito: 'conocer',
            prompt: '¿Cuáles de estos son **beneficios de la investigación espacial** y cuáles existían desde mucho antes?',
            hint: 'Piensa si necesita satélites, cohetes o tecnología moderna para funcionar.',
            explain: 'Los satélites y sus sensores son frutos de la investigación espacial. La marimba, el comal o la rueda existían siglos antes de los viajes al espacio.' },
          { buckets: [
            { id: 'esp', label: 'Beneficio de la investigación espacial', icon: 'Satellite', color: 'var(--area-cnt)' },
            { id: 'antes', label: 'Existía mucho antes', icon: 'History', color: 'var(--c-maiz)' },
          ], items: [
            { id: 'b1', text: 'Imágenes de satélite de una tormenta', icon: 'CloudRain', bucket: 'esp' },
            { id: 'b2', text: 'Ubicación con GPS en un celular', icon: 'MapPin', bucket: 'esp' },
            { id: 'b3', text: 'Llamadas y televisión vía satélite', icon: 'Radio', bucket: 'esp' },
            { id: 'b4', text: 'Mapas de incendios forestales vistos desde el espacio', icon: 'Flame', bucket: 'esp' },
            { id: 'b5', text: 'La marimba', icon: 'Music', bucket: 'antes', feedback: 'La marimba se toca en Guatemala desde hace siglos: no necesitó investigación espacial.' },
            { id: 'b6', text: 'El comal de barro', icon: 'Circle', bucket: 'antes' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['cnt', 'ccss'], cnb: ['cnt:8.2.3', 'cnt:8.1.3'], ambito: 'conocer',
            prompt: 'Así trabaja un **sistema de alerta temprana** ante una tormenta. Ordena los pasos de la investigación que protege a la comunidad.',
            explain: 'La ciencia previene desastres porque convierte datos en predicciones y avisos a tiempo. Sin la última parte (avisar y actuar), los datos no salvan vidas.' },
          { items: [
            { id: 'a1', text: 'Observar: los satélites y pluviómetros registran nubes y lluvia' },
            { id: 'a2', text: 'Registrar: los datos se guardan en computadoras y tablas' },
            { id: 'a3', text: 'Predecir: con los datos se calcula cuánto podría crecer el río' },
            { id: 'a4', text: 'Comprobar: se compara la predicción con lo que marca el sensor del río' },
            { id: 'a5', text: 'Avisar y actuar: la comunidad recibe la alerta y se traslada a un lugar seguro' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.match(
          { fase: 'construir', areas: ['cnt', 'mat'], cnb: ['cnt:8.1.3'], ambito: 'hacer',
            prompt: 'La tecnología es la mano derecha de quien investiga. Une cada **instrumento** con el **dato** que obtiene.',
            explain: 'Cada instrumento mide algo distinto. Juntar sus datos permite predecir mejor lo que puede ocurrir.' },
          { leftTitle: 'Instrumento', rightTitle: 'Dato que registra', pairs: [
            { id: 'pluv', left: 'Pluviómetro', leftIcon: 'Droplets', right: 'Milímetros de lluvia que cayeron' },
            { id: 'sism', left: 'Sismógrafo', leftIcon: 'Activity', right: 'Vibraciones del suelo y del volcán' },
            { id: 'term', left: 'Termómetro', leftIcon: 'Thermometer', right: 'Temperatura del aire' },
            { id: 'sat', left: 'Satélite meteorológico', leftIcon: 'Satellite', right: 'Fotografías de las nubes desde el espacio' },
            { id: 'hoja', left: 'Hoja de cálculo en la computadora', leftIcon: 'Laptop', right: 'Tablas y gráficas con todos los datos' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['l1', 'l2', 'cnt'], cnb: ['l1:8.2.5', 'l1:8.3.1'], ambito: 'conocer', title: '¿Dónde busco?',
            prompt: 'Para investigar necesitas **fuentes**. Unas son escritas en papel y otras son tecnológicas. Toca cada tarjeta.' },
          { icon: 'Library', body: 'Una buena investigadora **compara** al menos dos fuentes y anota de dónde sacó cada dato.', reveal: [
            { icon: 'BookOpen', front: 'Diccionario', back: 'Significado y escritura correcta de las **palabras**.' },
            { icon: 'Map', front: 'Atlas', back: '**Mapas** de países, ríos, volcanes y climas.' },
            { icon: 'Newspaper', front: 'Periódico', back: '**Noticias recientes** con fecha y lugar.' },
            { icon: 'Library', front: 'Enciclopedia y libros especializados', back: 'Explicaciones **amplias y revisadas** sobre un tema.' },
            { icon: 'FileText', front: 'Manual', back: '**Instrucciones** paso a paso para usar o armar algo.' },
            { icon: 'Search', front: 'Internet, buscadores y videos', back: 'Muchas fuentes rápidas. Hay que revisar **quién** las escribió y **compararlas**: no todo lo que aparece es cierto.' },
          ] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['l1', 'cnt', 'ccss'], cnb: ['l1:8.2.5', 'l1:8.3.1'], ambito: 'hacer',
            prompt: 'El Centro de investigación escolar tiene varias preguntas. Une cada pregunta con la **mejor fuente** para responderla.',
            explain: 'Elegir bien la fuente ahorra tiempo y da datos más confiables. Para lo más reciente, sirven el periódico o los sitios oficiales en internet.' },
          { leftTitle: 'Pregunta', rightTitle: 'Mejor fuente', pairs: [
            { id: 'q1', left: '¿Qué significa la palabra "lahar"?', leftIcon: 'MessageCircle', right: 'Diccionario' },
            { id: 'q2', left: '¿Qué ríos bajan del volcán de Fuego hacia el Pacífico?', leftIcon: 'Mountain', right: 'Atlas' },
            { id: 'q3', left: '¿Qué pasó ayer con la lluvia en Escuintla?', leftIcon: 'CloudRain', right: 'Periódico del día' },
            { id: 'q4', left: '¿Cómo se arma un pluviómetro con una botella?', leftIcon: 'Wrench', right: 'Manual de experimentos' },
            { id: 'q5', left: '¿Qué dicen varias fuentes sobre el satélite Quetzal-1?', leftIcon: 'Satellite', right: 'Buscador de internet, comparando sitios' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt', 'ccss'], cnb: ['cnt:8.2.3', 'cnt:8.1.3'], prompt: '¿Por qué un sistema de alerta temprana **reduce** los daños de una tormenta?' },
          { options: [
            { id: 'a', text: 'Porque con datos predice lo que puede pasar y avisa a tiempo para ponerse a salvo', icon: 'Megaphone' },
            { id: 'b', text: 'Porque detiene la lluvia con satélites', icon: 'CloudRain', feedback: 'La tecnología no detiene la lluvia: la observa y ayuda a predecir.' },
            { id: 'c', text: 'Porque adivina sin necesidad de medir nada', icon: 'Sparkles', feedback: 'La ciencia no adivina: predice a partir de datos medidos.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['cnt', 'l1'], cnb: ['cnt:8.3.2', 'l1:8.2.5', 'l1:8.3.1'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'El GPS del celular funciona gracias a una red de satélites.', answer: true },
            { text: 'El Quetzal-1 fue el primer satélite construido en Guatemala.', answer: true },
            { text: 'El atlas es la mejor fuente para saber el significado de una palabra.', answer: false, why: 'Para significados se usa el diccionario; el atlas tiene mapas.' },
            { text: 'Todo lo que aparece en un buscador de internet es verdadero.', answer: false, why: 'Hay que revisar quién lo escribió y compararlo con otras fuentes.' },
          ] },
        ),
        cierre({ areas: ['cnt', 'l1'], cnb: ['cnt:8.2.3'] }, ['Explico beneficios de la investigación espacial', 'Describo cómo la ciencia ayuda a prevenir desastres', 'Elijo la fuente adecuada para cada pregunta'],
          ['Preguntaré en casa cómo se enteran de las alertas de lluvia', 'Compararé dos fuentes antes de creer un dato', 'Ubicaré en un atlas los volcanes cercanos a mi comunidad']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's28-d2-participacion-mundo',
      title: 'Participar en Guatemala y en el mundo',
      icon: 'Vote',
      minutes: 15,
      day: 2,
      gancho: 'En tu escuela, ¿quién decide las reglas del recreo? ¿Te han preguntado alguna vez tu opinión?',
      objetivos: ['Comparar cómo participa la ciudadanía en distintos países', 'Conocer instituciones que defienden los derechos humanos y la cooperación', 'Reconocer actores e intereses en la búsqueda de la paz en Centroamérica', 'Ordenar momentos clave de la ciudadanía en Guatemala'],
      resumen: [
        'La participación ciudadana tiene niveles: informarse, opinar, proponer, decidir y vigilar.',
        'Cada país organiza la participación de forma distinta: en Brasil y Argentina votar es obligatorio; en Suiza la gente vota varias veces al año en consultas populares; en Guatemala votar es un derecho y un deber, y existen los COCODE.',
        'La ONU, UNICEF, la OMS, la Corte Interamericana de Derechos Humanos y el Procurador de los Derechos Humanos velan por los derechos y la cooperación.',
        'La ciudadanía en Guatemala se amplió con el tiempo: en 1945 votaron por primera vez las mujeres que sabían leer y escribir, y en 1965 todas las mujeres.',
        'La pobreza se mide con índices: el porcentaje de población en pobreza extrema es mayor en África, sobre todo al sur del Sahara, y mucho menor en Europa y América del Norte.',
      ],
      media: {
        id: 's28-d2-escalera', kind: 'diagram', title: 'La escalera de la participación', aspect: '4:3',
        alt: 'Escalera de cinco peldaños con personas que suben: informarse, opinar, proponer, decidir y vigilar.',
        brief: 'Ilustración de una escalera de cinco peldaños de colores. En cada peldaño, una persona distinta (niña maya con güipil, joven garífuna, abuelo ladino, mujer xinka, niño en silla de ruedas junto a una rampa lateral) realiza la acción rotulada: 1 "Me informo" (lee un periódico), 2 "Opino" (levanta la mano), 3 "Propongo" (muestra un cartel), 4 "Decido" (deposita un voto en una urna), 5 "Vigilo" (revisa una lista de obras con lupa). Estilo plano, sin símbolos de partidos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'fc'], cnb: ['ccss:7.1.5'], ambito: 'convivir', title: 'Cinco formas de participar',
            prompt: 'Participar no es solo votar. Hay **niveles** de participación. Toca cada tarjeta.' },
          { icon: 'Users', body: 'Mientras más niveles practica una comunidad, más fuerte es su democracia.', reveal: [
            { icon: 'Newspaper', front: 'Informarse', back: 'Conocer qué pasa en la comunidad y en el país, con fuentes confiables.' },
            { icon: 'MessageCircle', front: 'Opinar', back: 'Decir lo que piensas con respeto, en asambleas o consultas.' },
            { icon: 'Lightbulb', front: 'Proponer', back: 'Presentar soluciones, como un proyecto al COCODE.' },
            { icon: 'Vote', front: 'Decidir', back: 'Votar en elecciones o consultas populares.' },
            { icon: 'Eye', front: 'Vigilar', back: 'Revisar que las autoridades cumplan y usen bien el dinero público.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:7.1.5'], ambito: 'conocer',
            prompt: 'Compara cómo participa la ciudadanía en distintos países. Une cada país con su característica.',
            explain: 'No hay una sola forma de participar. Comparar nos ayuda a pensar qué podríamos mejorar en nuestra propia comunidad.' },
          { leftTitle: 'País', rightTitle: 'Cómo participa su ciudadanía', pairs: [
            { id: 'sui', left: 'Suiza', leftIcon: 'Mountain', right: 'La gente vota varias veces al año en consultas populares' },
            { id: 'bra', left: 'Brasil', leftIcon: 'Vote', right: 'Votar en las elecciones es obligatorio para la mayoría de adultos' },
            { id: 'gua', left: 'Guatemala', leftIcon: 'Home', right: 'Votar es derecho y deber, y las comunidades se organizan en COCODE' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:7.2.3'], ambito: 'conocer',
            prompt: 'Clasifica cada institución según su **alcance**: ¿trabaja en todo el mundo, en el continente americano o en Guatemala?',
            hint: 'Las que llevan "Interamericana" trabajan en América; las de Naciones Unidas, en todo el mundo.',
            explain: 'Los derechos humanos se protegen en varios niveles: si una institución nacional no logra proteger a alguien, se puede acudir al sistema interamericano o al de Naciones Unidas.' },
          { buckets: [
            { id: 'mundo', label: 'Mundial', icon: 'Globe', color: 'var(--area-ccss)' },
            { id: 'america', label: 'Americana', icon: 'Earth', color: 'var(--area-l1)' },
            { id: 'guate', label: 'Nacional (Guatemala)', icon: 'Landmark', color: 'var(--area-fc)' },
          ], items: [
            { id: 'i1', text: 'ONU (Organización de las Naciones Unidas)', bucket: 'mundo' },
            { id: 'i2', text: 'UNICEF (protege los derechos de la niñez)', bucket: 'mundo' },
            { id: 'i3', text: 'OMS (Organización Mundial de la Salud)', bucket: 'mundo' },
            { id: 'i4', text: 'Corte Interamericana de Derechos Humanos (Costa Rica)', bucket: 'america' },
            { id: 'i5', text: 'Procurador de los Derechos Humanos', bucket: 'guate', feedback: 'El Procurador de los Derechos Humanos es una institución guatemalteca creada por la Constitución de 1985.' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['fc', 'ccss', 'l1'], cnb: ['fc:5.1.4', 'ccss:7.2.3'], ambito: 'conocer', prompt: 'Lee el texto y responde.' },
          { genre: 'Texto informativo', heading: 'Muchos actores, un mismo camino: la paz', passage:
            'En la década de 1980, varios países de Centroamérica vivían conflictos armados internos. En **1987**, los presidentes de la región firmaron el acuerdo de **Esquipulas II**, en Guatemala, para buscar la paz por medio del diálogo.\n\nEn Guatemala, las pláticas de paz reunieron a distintos **actores**: el **Gobierno**, la guerrilla agrupada en la **URNG**, y organizaciones de la **sociedad civil**, como grupos de mujeres, de pueblos indígenas, iglesias y sindicatos. La **ONU** actuó como moderadora y un grupo de países amigos acompañó el proceso.\n\nCada actor tenía **intereses**: unos querían garantías para dejar las armas, otros querían tierra, respeto a su cultura o justicia para las víctimas. Después de años de diálogo, el **29 de diciembre de 1996** se firmó el Acuerdo de Paz Firme y Duradera. La paz se construye escuchando todos los intereses.',
            questions: [
              { q: '¿Qué acuerdo firmaron los presidentes centroamericanos en 1987?', options: [
                { id: 'a', text: 'Esquipulas II' },
                { id: 'b', text: 'La Constitución de 1985' },
                { id: 'c', text: 'El acuerdo de la OMS' },
              ], correct: 'a' },
              { q: '¿Qué papel tuvo la ONU en las pláticas de paz de Guatemala?', options: [
                { id: 'a', text: 'Fue moderadora del diálogo' },
                { id: 'b', text: 'Fue uno de los grupos armados' },
                { id: 'c', text: 'No participó' },
              ], correct: 'a', why: 'El texto dice que la ONU actuó como moderadora: ayudaba a que las partes dialogaran.' },
              { q: '¿Por qué fue importante que participara la sociedad civil?', options: [
                { id: 'a', text: 'Porque así se escucharon también los intereses de mujeres, pueblos indígenas y otros grupos' },
                { id: 'b', text: 'Porque la sociedad civil tenía más armas' },
                { id: 'c', text: 'Porque así el diálogo fue más corto' },
              ], correct: 'a', why: 'Una paz duradera necesita escuchar a todos los sectores, no solo a quienes estaban en el conflicto.' },
            ] },
        ),
        S.order(
          { fase: 'construir', areas: ['fc', 'ccss'], cnb: ['fc:5.2.3'], ambito: 'conocer',
            prompt: 'La **ciudadanía** en Guatemala se fue ampliando con el tiempo. Ordena estos momentos del más antiguo al más reciente.',
            explain: 'La ciudadanía no llegó de una vez: se conquistó poco a poco. Hoy las ciudadanas y los ciudadanos de 18 años o más tienen derecho a votar.' },
          { items: [
            { id: 'h1', text: '1821: Independencia de Centroamérica' },
            { id: 'h2', text: '1945: votan por primera vez las mujeres que saben leer y escribir' },
            { id: 'h3', text: '1965: el voto se reconoce a todas las mujeres' },
            { id: 'h4', text: '1985: se aprueba la Constitución que nos rige hoy' },
            { id: 'h5', text: '1996: se firman los Acuerdos de Paz' },
          ], labels: { start: 'Más antiguo', end: 'Más reciente' } },
        ),
        S.match(
          { fase: 'aplicar', areas: ['l1', 'ccss', 'fc'], cnb: ['l1:8.3.3', 'ccss:8.3.3'], ambito: 'hacer',
            prompt: 'Para **procesar la información** del día, el equipo usa organizadores gráficos. Une cada tarea con el organizador que mejor sirve.',
            explain: 'Un buen organizador hace visible lo importante: el tiempo en una línea, las comparaciones en un cuadro, las ideas conectadas en un mapa.' },
          { leftTitle: 'Tarea', rightTitle: 'Organizador', pairs: [
            { id: 'o1', left: 'Ordenar las fechas de la ciudadanía en Guatemala', leftIcon: 'History', right: 'Línea de tiempo' },
            { id: 'o2', left: 'Comparar la pobreza extrema en cada continente', leftIcon: 'Globe', right: 'Cuadro comparativo' },
            { id: 'o3', left: 'Relacionar las instituciones con los derechos que protegen', leftIcon: 'Link', right: 'Mapa conceptual' },
            { id: 'o4', left: 'Anotar lo esencial mientras escuchas una charla', leftIcon: 'NotebookPen', right: 'Apuntes con palabras clave' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['ccss', 'l1'], cnb: ['ccss:8.3.3'], ambito: 'conocer',
            prompt: 'Un **índice de pobreza** indica qué porcentaje de la población no puede cubrir sus necesidades básicas. Lee el apunte del equipo: _"La pobreza extrema afecta al porcentaje más alto de la población en África, sobre todo al sur del Sahara; es mucho más baja en Europa y América del Norte."_ ¿Qué conclusión es correcta?',
            explain: 'Los índices permiten comparar continentes. La pobreza no se debe a que la gente "no quiera trabajar": influyen la historia, los conflictos, el clima, el acceso a educación y salud y la desigualdad.' },
          { options: [
            { id: 'a', text: 'Hay continentes donde una parte mucho mayor de la población vive en pobreza extrema', icon: 'BarChart3' },
            { id: 'b', text: 'En Europa nadie es pobre', icon: 'X', feedback: 'Que el porcentaje sea bajo no significa que sea cero.' },
            { id: 'c', text: 'La pobreza es igual en todos los continentes', icon: 'Minus', feedback: 'Los índices muestran diferencias muy grandes entre continentes.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss', 'fc'], cnb: ['ccss:7.2.3'], prompt: '¿Qué institución guatemalteca vela por los derechos humanos de las personas en el país?' },
          { options: [
            { id: 'a', text: 'El Procurador de los Derechos Humanos', icon: 'ShieldCheck' },
            { id: 'b', text: 'La Organización Mundial de la Salud', icon: 'Stethoscope', feedback: 'La OMS trabaja en todo el mundo y se enfoca en la salud.' },
            { id: 'c', text: 'La Corte Interamericana de Derechos Humanos', icon: 'Gavel', feedback: 'La Corte Interamericana es del continente americano y tiene su sede en Costa Rica.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['fc', 'ccss'], cnb: ['fc:5.2.3', 'fc:5.1.4', 'ccss:7.1.5'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'En 1945 votaron por primera vez en Guatemala las mujeres que sabían leer y escribir.', answer: true },
            { text: 'En todos los países del mundo la gente participa exactamente de la misma forma.', answer: false, why: 'Por ejemplo, en Brasil votar es obligatorio y en Suiza se vota en consultas varias veces al año.' },
            { text: 'En las pláticas de paz de Guatemala solo participó el Gobierno.', answer: false, why: 'Participaron el Gobierno, la URNG y la sociedad civil, con la ONU como moderadora.' },
          ] },
        ),
        cierre({ areas: ['fc', 'ccss'], cnb: ['fc:5.2.3'] }, ['Comparo formas de participación en distintos países', 'Nombro instituciones que protegen los derechos humanos', 'Explico cómo se amplió la ciudadanía en Guatemala'],
          ['Preguntaré a una persona mayor cuándo votó por primera vez', 'Daré mi opinión con respeto en la próxima asamblea de grado', 'Haré una línea de tiempo de la historia de mi comunidad']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's28-d3-cuentas-claras',
      title: 'Cuentas claras en la cooperativa',
      icon: 'Calculator',
      minutes: 15,
      day: 3,
      gancho: 'Cuando compras en la tienda, ¿sabes qué parte de lo que pagas se va en impuestos y para qué sirve?',
      objetivos: ['Convertir onzas a libras y libras a onzas', 'Calcular ingresos, gastos e impuestos de un negocio', 'Reconocer la función de documentos comerciales', 'Escribir notas, invitaciones y telegramas con el formato correcto'],
      resumen: [
        '1 libra = 16 onzas. Para pasar de libras a onzas se multiplica por 16; de onzas a libras se divide entre 16.',
        'Ganancia = ingresos − gastos − impuestos. El IVA en Guatemala es del 12 % y va incluido en muchas compras.',
        'Los impuestos pagan escuelas, puestos de salud, carreteras y otros servicios públicos.',
        'La solicitud pide algo formalmente; el anuncio de venta ofrece un producto; la promoción ofrece un beneficio por tiempo limitado; la factura comprueba una compra.',
        'Una carta tiene lugar y fecha, saludo, cuerpo, despedida y firma; un telegrama usa muy pocas palabras.',
      ],
      media: {
        id: 's28-d3-balanza', kind: 'image', title: 'La balanza de la cooperativa', aspect: '4:3',
        alt: 'Mostrador de una cooperativa con una balanza que marca 1 libra y 16 bolsitas de una onza de café a la par.',
        brief: 'Ilustración cálida de una cooperativa de mujeres en Sololá: mostrador de madera, balanza de platillo con una bolsa de café de 1 libra en un lado y 16 bolsitas pequeñas de 1 onza en el otro, en equilibrio. Rótulo: "1 lb = 16 oz". En la pared, un cartel escrito a mano con precios en quetzales y la leyenda "Precio incluye IVA". Mujeres con güipil atienden; sin marcas comerciales.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['mat', 'pyd'], cnb: ['mat:7.1.6'], ambito: 'conocer', title: 'Onzas y libras',
            prompt: 'En los mercados de Guatemala se vende por **libra** y por **onza**. Toca cada tarjeta.' },
          { icon: 'Scale', body: 'La libra y la onza son unidades de **peso** del sistema inglés que usamos todos los días.', reveal: [
            { icon: 'Scale', front: '¿Cuántas onzas tiene una libra?', back: '**1 libra = 16 onzas.**' },
            { icon: 'Coffee', front: 'Media libra', back: '16 ÷ 2 = **8 onzas**.' },
            { icon: 'Package', front: 'Un cuarto de libra', back: '16 ÷ 4 = **4 onzas**.' },
            { icon: 'Calculator', front: 'Para convertir', back: 'Libras → onzas: **× 16**. Onzas → libras: **÷ 16**.' },
          ] },
        ),
        S.slider(
          { fase: 'construir', areas: ['mat', 'pyd'], cnb: ['mat:7.1.6'], ambito: 'hacer',
            prompt: 'La cooperativa llena bolsitas de **tres cuartos de libra** (3/4 lb) de café. ¿Cuántas **onzas** lleva cada bolsita? Mueve el deslizador.',
            hint: 'Un cuarto de libra son 4 onzas. ¿Cuántos cuartos hay en 3/4?',
            explain: '1/4 lb = 4 oz, entonces 3/4 lb = 3 × 4 = 12 oz.' },
          { min: 0, max: 16, step: 1, start: 0, answer: 12, unit: 'oz', visual: 'line', ticks: [{ value: 0, label: '0' }, { value: 8, label: '1/2 lb' }, { value: 16, label: '1 lb' }] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'pyd'], cnb: ['mat:7.1.6'], ambito: 'hacer',
            prompt: 'Doña Ixchel tiene **80 onzas** de miel de abeja para vender. ¿Cuántas **libras** son?',
            hint: 'Para pasar de onzas a libras, divide entre 16.',
            explain: '80 ÷ 16 = 5 libras.' },
          { answer: 5, unit: 'libras', stimulus: '80 oz ÷ 16 = ?', misconceptions: [
            { value: 1280, msg: 'Multiplicaste por 16. De onzas a libras se divide, porque la libra es más grande.' },
            { value: 8, msg: 'Parece que dividiste entre 10. Una libra tiene 16 onzas, no 10.' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['pyd', 'mat'], cnb: ['pyd:5.4.2'], ambito: 'emprender',
            prompt: 'Supongamos que en un mes la cooperativa **vendió Q2,000** en café y miel. Sus salidas fueron: materia prima Q800, transporte Q200 e impuestos Q300. Construye la gráfica de **ingresos y gastos**.',
            explain: 'Ganancia = 2,000 − 800 − 200 − 300 = Q700. Los impuestos son un gasto que se planifica desde el inicio; con ellos se pagan servicios para toda la comunidad.' },
          { categories: [
            { id: 'ing', label: 'Ventas (ingreso)', icon: 'Banknote', color: 'var(--c-ok)' },
            { id: 'mat', label: 'Materia prima', icon: 'Package', color: 'var(--area-pyd)' },
            { id: 'tra', label: 'Transporte', icon: 'Truck', color: 'var(--area-l1)' },
            { id: 'imp', label: 'Impuestos', icon: 'Landmark', color: 'var(--area-fc)' },
          ], data: [2000, 800, 200, 300], max: 2000, step: 100, unit: 'quetzales', source: 'Cuentas hipotéticas de un mes' },
        ),
        S.number(
          { fase: 'aplicar', areas: ['pyd', 'mat', 'fc'], cnb: ['pyd:5.4.2'], ambito: 'emprender',
            prompt: 'En Guatemala, el **IVA** (Impuesto al Valor Agregado) es del **12 %**. Si una libra de café cuesta **Q50 antes del IVA**, ¿cuánto se paga **en total** con el IVA incluido?',
            hint: 'Calcula el 12 % de 50 y súmalo al precio.',
            explain: '12 % de 50 = 50 × 12 ÷ 100 = Q6. Total: 50 + 6 = Q56. Esos Q6 los entrega el negocio al Estado para servicios públicos.' },
          { answer: 56, unit: 'quetzales', stimulus: 'Q50 + 12 % de IVA = ?', misconceptions: [
            { value: 6, msg: 'Ese es solo el IVA. Falta sumarlo al precio de Q50.' },
            { value: 62, msg: 'Sumaste 12 quetzales, pero el IVA es el 12 por ciento de 50, no Q12.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l2', 'pyd'], cnb: ['l2:5.4.3', 'l2:5.4.2'], ambito: 'conocer',
            prompt: 'La cooperativa recibe y envía muchos documentos. Clasifícalos según su **función**.',
            hint: 'Pregúntate: ¿pide algo, ofrece algo o comprueba algo?',
            explain: 'Los documentos comerciales tienen funciones distintas. La factura es muy importante: comprueba la compra y muestra el IVA pagado.' },
          { buckets: [
            { id: 'pedir', label: 'Pide algo formalmente', icon: 'FileText', color: 'var(--area-l2)' },
            { id: 'ofrecer', label: 'Ofrece o anuncia', icon: 'Megaphone', color: 'var(--area-pyd)' },
            { id: 'comprobar', label: 'Comprueba una compra', icon: 'ClipboardCheck', color: 'var(--c-ok)' },
          ], items: [
            { id: 'd1', text: 'Solicitud al alcalde para usar el salón comunal', bucket: 'pedir' },
            { id: 'd2', text: 'Anuncio de venta: "Miel pura de Sololá, Q30 la libra"', bucket: 'ofrecer' },
            { id: 'd3', text: 'Promoción: "Esta semana, lleve 2 libras de café y reciba 4 onzas de regalo"', bucket: 'ofrecer' },
            { id: 'd4', text: 'Factura con el nombre del cliente, el total y el IVA', bucket: 'comprobar' },
            { id: 'd5', text: 'Solicitud de crédito a una cooperativa de ahorro', bucket: 'pedir' },
          ] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l2', 'pyd'], cnb: ['l2:5.4.2'], ambito: 'hacer',
            prompt: 'Completa la **invitación** que la cooperativa enviará a las familias y el **telegrama** que envía a una proveedora. Recuerda: el telegrama usa muy pocas palabras.',
            explain: 'La invitación dice quién invita, a qué, cuándo y dónde, y se despide con cortesía. El telegrama elimina palabras innecesarias, como artículos, porque antes se pagaba por palabra.',
            media: { id: 's28-d3-documentos', kind: 'image', title: 'Carta, invitación, nota y telegrama', aspect: '16:9',
              alt: 'Cuatro papeles sobre una mesa: una carta larga, una invitación decorada, una nota corta en papel pequeño y un telegrama con pocas palabras en mayúsculas.',
              brief: 'Ilustración cenital de cuatro documentos sobre una mesa de madera, cada uno con sus partes señaladas con flechas de color: (1) carta: lugar y fecha, saludo, cuerpo, despedida, firma; (2) invitación decorada con motivos de tejido: quién invita, evento, fecha, hora, lugar; (3) nota breve en papel amarillo pegada a una puerta; (4) telegrama antiguo en mayúsculas con pocas palabras y la palabra "STOP" entre frases. Texto legible pero genérico.' } },
          { text: 'INVITACIÓN\nLa Cooperativa Flor de Café [[invita]] a las familias a la feria de productos locales.\nFecha: sábado 12 de octubre. Hora: 9:00. Lugar: salón comunal.\n¡Los [[esperamos]]!\n\nTELEGRAMA\nMIEL LISTA. ENVIAR [[FRASCOS]] LUNES. GRACIAS.',
            distractors: ['estimados', 'le pedimos amablemente que por favor nos envíe'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['mat', 'pyd'], cnb: ['mat:7.1.6'], prompt: '¿Cuántas onzas hay en **2 libras y media**?' },
          { options: [
            { id: 'a', text: '40 onzas' },
            { id: 'b', text: '32 onzas', feedback: '32 onzas son 2 libras exactas. Falta la media libra (8 oz).' },
            { id: 'c', text: '25 onzas', feedback: 'Una libra tiene 16 onzas, no 10.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['pyd', 'mat'], cnb: ['pyd:5.4.2'], prompt: 'Supongamos que un negocio tuvo ingresos de Q1,500, gastos de Q900 y pagó Q100 de impuestos. ¿Cuál fue su **ganancia**?' },
          { options: [
            { id: 'a', text: 'Q500' },
            { id: 'b', text: 'Q600', feedback: 'Restaste los gastos, pero olvidaste restar los impuestos.' },
            { id: 'c', text: 'Q2,500', feedback: 'La ganancia se obtiene restando, no sumando.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['pyd', 'mat'], cnb: ['pyd:5.4.2'] }, ['Convierto onzas a libras y libras a onzas', 'Calculo ganancia restando gastos e impuestos', 'Reconozco para qué sirve cada documento comercial'],
          ['Revisaré en casa una factura o un ticket y buscaré el IVA', 'Pesaré algo en onzas y lo convertiré a libras', 'Escribiré una invitación para un evento familiar']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's28-d4-historia-escena',
      title: 'Nuestra historia en escena',
      icon: 'Film',
      minutes: 15,
      day: 4,
      gancho: 'Si pudieras grabar un video sobre una tradición de tu comunidad, ¿cuál elegirías y a quién entrevistarías?',
      objetivos: ['Reconocer las partes de una obra de teatro', 'Planificar la grabación de una tradición con respeto', 'Dramatizar en inglés la vida de personajes importantes', 'Trabajar en equipo respetando roles, acuerdos y desacuerdos'],
      resumen: [
        'Una obra de teatro tiene personajes, diálogos, acotaciones (indicaciones entre paréntesis), escenas y un conflicto que se resuelve.',
        'Para grabar una tradición se pide permiso, se planifican las tomas (plano general, plano medio, primer plano) y se cuida el sonido.',
        'Rosa Parks (1955), Martin Luther King Jr. (1963) y Neil Armstrong (1969) son personajes importantes de Estados Unidos, un país donde se habla inglés.',
        'En un equipo se respetan los roles, se busca el consenso (acuerdo de todos) y se escucha el disenso (quien piensa distinto) sin ofender.',
      ],
      media: {
        id: 's28-d4-teatro', kind: 'video', title: 'Detrás de cámaras del teatro escolar', aspect: '16:9', duration: 55,
        alt: 'Un grupo de estudiantes ensaya una obra, otra estudiante graba con un celular en un trípode y un compañero sostiene un micrófono.',
        brief: 'Video de 55 s (dramatización o animación, sin rostros identificables en primer plano) en el patio de una escuela: un equipo ensaya una escena sobre las primeras votaciones de mujeres en 1945, con vestuario sencillo de papel y tela. Una niña graba con celular en un trípode improvisado; un niño sostiene un micrófono envuelto en calcetín para quitar ruido. Rótulos: "Guion", "Ensayo", "Plano general", "Primer plano", "Sonido". Cierre: el equipo se reúne en círculo y vota con la mano. Música de marimba suave.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['art', 'l1'], cnb: ['art:4.2.1'], ambito: 'hacer', title: 'Así se arma una obra de teatro',
            prompt: 'El teatro permite **contar la historia** de tu comunidad con el cuerpo y la voz. Toca cada tarjeta.' },
          { icon: 'Film', body: 'Una obra corta puede nacer de una leyenda, un cuento o un hecho histórico de tu comunidad.', reveal: [
            { icon: 'Users', front: 'Personajes', back: 'Quiénes participan. Cada uno quiere algo distinto.' },
            { icon: 'MessagesSquare', front: 'Diálogos', back: 'Lo que dicen los personajes, con el nombre de quien habla antes de cada línea.' },
            { icon: 'PenLine', front: 'Acotaciones', back: 'Indicaciones **entre paréntesis** sobre cómo actuar o dónde moverse: _(entra despacio, con miedo)_.' },
            { icon: 'Zap', front: 'Conflicto', back: 'El problema que mueve la historia y que se resuelve al final.' },
          ] },
        ),
        S.highlight(
          { fase: 'construir', areas: ['art', 'l1', 'fc'], cnb: ['art:4.2.1', 'fc:5.2.3'], ambito: 'hacer',
            prompt: 'Lee este fragmento del guion del equipo. Marca las **acotaciones** (las indicaciones para actuar, no lo que dicen los personajes).',
            explain: 'Las acotaciones van entre paréntesis y no se dicen en voz alta: guían a quien actúa.' },
          { target: 'acotaciones', text: 'DOÑA ROSARIO: {(con la papeleta en la mano, emocionada)} ¡Hoy voy a votar por primera vez! TOMÁS: {(se rasca la cabeza)} ¿Y las mujeres pueden votar? DOÑA ROSARIO: {(sonríe y lo mira a los ojos)} Desde este año, las que sabemos leer y escribir. Y lucharemos para que sean todas.' },
        ),
        S.order(
          { fase: 'construir', areas: ['art', 'l1', 'ccss'], cnb: ['art:4.2.3', 'l1:8.3.3'], ambito: 'hacer',
            prompt: 'El equipo grabará un video corto sobre la **elaboración de tortillas a mano** en casa de una abuela. Ordena los pasos del proyecto de grabación.',
            explain: 'Grabar la cultura de la comunidad es valioso, pero siempre con permiso y con respeto. La guía con apuntes ayuda a no olvidar ninguna toma. El **plano general** muestra todo el lugar; el **primer plano** acerca la cámara a un detalle, como las manos.' },
          { items: [
            { id: 'g1', text: 'Pedir permiso a la abuela y a su familia para grabar' },
            { id: 'g2', text: 'Escribir una guía con apuntes: preguntas y tomas necesarias' },
            { id: 'g3', text: 'Grabar un plano general de la cocina y primeros planos de las manos' },
            { id: 'g4', text: 'Revisar el video y elegir las mejores tomas' },
            { id: 'g5', text: 'Mostrar el video a la familia y a la escuela, dando crédito a la abuela' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.fill(
          { fase: 'construir', areas: ['l3', 'cnt', 'fc'], cnb: ['l3:5.2.4'], ambito: 'hacer',
            prompt: 'English time! Vas a **dramatizar** a tres personajes importantes de Estados Unidos. Completa sus presentaciones en pasado y luego léelas en voz alta, actuando como cada personaje. (_was_ = era/fue, _walked_ = caminó, _said_ = dijo, _did not give up_ = no cedió)',
            explain: 'Rosa Parks did not give up her bus seat in 1955. Martin Luther King Jr. said "I have a dream" in 1963. Neil Armstrong walked on the Moon in 1969.',
            media: { id: 's28-d4-personajes', kind: 'image', title: 'Three important people', aspect: '16:9',
              alt: 'Tres ilustraciones en silueta: una mujer sentada en un autobús, un hombre hablando ante una multitud y un astronauta en la Luna.',
              brief: 'Tres paneles en estilo de silueta y colores planos (sin rasgos faciales detallados, para no retratar a personas reales): (1) mujer sentada en el asiento de un autobús de los años 50, rótulo "Rosa Parks · 1955"; (2) hombre de traje ante un micrófono y una multitud, rótulo "Martin Luther King Jr. · 1963"; (3) astronauta con traje espacial dejando una huella en la Luna, rótulo "Neil Armstrong · 1969". Textos en inglés, fondo claro.' } },
          { text: 'I am Neil Armstrong. I was an astronaut. In 1969, I [[walked]] on the Moon.\nI am Rosa Parks. In 1955, I [[did not give up]] my seat on the bus.\nI am Martin Luther King Jr. In 1963, I [[said]]: "I have a dream."',
            distractors: ['swim', 'eat'] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['ef', 'fc', 'art'], cnb: ['ef:4.2.9', 'ef:4.2.5'], ambito: 'convivir', prompt: 'Tu equipo decide qué obra presentar. ¿Qué harías tú?' },
          { scene: { icon: 'Users', text: 'Tres integrantes quieren dramatizar la leyenda de La Llorona; **Keyla** y **Josué** prefieren la historia de las primeras votantes de 1945. Nadie cede y la discusión sube de tono. Faltan dos días para presentar.' }, options: [
            { id: 'a', icon: 'Vote', text: 'Proponer escuchar dos minutos a cada grupo y luego votar; quien pierda propone una escena dentro de la obra ganadora', consequence: 'Todos se sienten escuchados. Gana la historia de 1945 y el otro grupo aporta una escena con una abuela que cuenta leyendas. La obra queda más rica.', values: ['Consenso', 'Respeto al disenso', 'Diálogo'], constructive: true },
            { id: 'b', icon: 'Crown', text: 'Decidir tú solo porque eres quien coordina', consequence: 'La mitad del equipo deja de colaborar y los ensayos salen mal.', values: ['Autoritarismo'], constructive: false },
            { id: 'c', icon: 'EyeOff', text: 'Salirte del equipo para no discutir', consequence: 'El equipo pierde a un integrante y el conflicto sigue sin resolverse.', values: ['Evasión'], constructive: false },
          ] },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'fc'], cnb: ['ef:4.2.5', 'ef:4.2.9'], ambito: 'convivir',
            prompt: 'Juego cooperativo **"El nudo"**: en grupos de 6, tómense de las manos cruzadas formando un nudo y, **sin soltarse**, desenrédense hasta formar un círculo. Solo se vale hablar con respeto y turnarse para proponer. Mide tu pulso antes y después.' },
          { seconds: 15, rounds: [
            { label: 'Antes del juego' },
            { label: 'Después de desatar el nudo', exercise: { name: 'El nudo cooperativo', icon: 'Users', seconds: 60 } },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['art', 'l1', 'fc'], cnb: ['art:4.2.1', 'fc:5.2.3'], ambito: 'hacer',
            prompt: 'Escribe una **escena corta** (3 o 4 líneas de diálogo) sobre un momento de la historia de la ciudadanía en Guatemala o de tu comunidad. Incluye al menos **una acotación** entre paréntesis.' },
          { minWords: 30, placeholder: 'PERSONAJE 1: (…) …\nPERSONAJE 2: …',
            model: 'ABUELA JUANA: (mostrando su cédula vieja) Mija, en 1965 voté por primera vez; antes no nos dejaban a las que no sabíamos leer.\nLUCÍA: (sorprendida) ¿Y cómo se sintió, abuela?\nABUELA JUANA: (se endereza, orgullosa) Como si mi voz por fin contara.\nLUCÍA: Cuando cumpla 18, iré a votar con usted.',
            rubric: ['Tiene al menos dos personajes con nombre', 'Incluye una acotación entre paréntesis', 'Se relaciona con la historia de la ciudadanía o de la comunidad', 'El diálogo es respetuoso y coherente'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['art', 'l1'], cnb: ['art:4.2.1', 'art:4.2.3'], prompt: '¿Qué debe hacer el equipo **antes** de grabar a una persona de la comunidad?' },
          { options: [
            { id: 'a', text: 'Pedirle permiso y explicarle para qué será el video', icon: 'Handshake' },
            { id: 'b', text: 'Grabarla sin que se dé cuenta para que salga natural', icon: 'EyeOff', feedback: 'Grabar sin permiso irrespeta a la persona y su privacidad.' },
            { id: 'c', text: 'Publicar el video antes de que ella lo vea', icon: 'Smartphone', feedback: 'La persona debe conocer y aprobar el video antes de compartirlo.' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['l3', 'fc'], cnb: ['l3:5.2.4'], prompt: 'Match each person with what they did.' },
          { leftTitle: 'Person', rightTitle: 'What they did', pairs: [
            { id: 'na', left: 'Neil Armstrong', leftIcon: 'Rocket', right: 'He walked on the Moon in 1969.' },
            { id: 'rp', left: 'Rosa Parks', leftIcon: 'Bus', right: 'She did not give up her bus seat in 1955.' },
            { id: 'mlk', left: 'Martin Luther King Jr.', leftIcon: 'Mic', right: 'He said "I have a dream" in 1963.' },
          ] },
        ),
        cierre({ areas: ['art', 'ef'], cnb: ['ef:4.2.9'] }, ['Reconozco las partes de una obra de teatro', 'Planifico una grabación con respeto y permiso', 'Respeto los roles y las opiniones distintas en mi equipo'],
          ['Pediré a una persona mayor que me cuente una historia de mi comunidad', 'Propondré votar cuando mi equipo no se ponga de acuerdo', 'Ensayaré mi personaje en inglés frente a mi familia']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's28-d5-reto',
      title: 'Reto de la semana 28',
      icon: 'Trophy',
      minutes: 13,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Investigadora ciudadana" (70 % o más)'],
      resumen: ['Superé el reto de la semana 28: ciencia que previene, participación, cuentas claras y teatro comunitario.'],
      media: {
        id: 's28-d5-reto', kind: 'image', title: 'Medalla Investigadora ciudadana', aspect: '1:1',
        alt: 'Medalla dorada con una lupa sobre un pequeño satélite y una urna de votación.',
        brief: 'Ilustración de medalla circular dorada con relieve: una lupa grande que enfoca un pequeño satélite cúbico y, detrás, una urna con una papeleta. Borde con patrón de tejido guatemalteco estilizado. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.3.2'], prompt: '¿Cuál de estos es un beneficio directo de la investigación espacial?' },
          { options: [{ id: 'a', text: 'Los satélites que ayudan a pronosticar huracanes' }, { id: 'b', text: 'El telar de cintura' }, { id: 'c', text: 'La piedra de moler' }], correct: ['a'] }),
        S.order({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.2.3', 'cnt:8.1.3'], prompt: 'Ordena los pasos de la ciencia que previene un desastre.' },
          { items: [{ id: 'a', text: 'Medir con sensores' }, { id: 'b', text: 'Analizar los datos' }, { id: 'c', text: 'Predecir el riesgo' }, { id: 'd', text: 'Avisar a la población' }] }),
        S.match({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.5', 'l1:8.3.1'], prompt: 'Une cada necesidad con su fuente.' },
          { pairs: [{ id: 'a', left: 'Ubicar el lago de Izabal', right: 'Atlas' }, { id: 'b', left: 'Saber qué significa "cooperativa"', right: 'Diccionario' }, { id: 'c', left: 'Ver un video sobre cómo se forma un huracán', right: 'Recurso audiovisual en internet' }] }),
        S.sort({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:7.2.3'], prompt: '¿Institución mundial o guatemalteca?' },
          { buckets: [{ id: 'm', label: 'Mundial', icon: 'Globe' }, { id: 'g', label: 'Guatemalteca', icon: 'Landmark' }],
            items: [{ id: 'a', text: 'UNICEF', bucket: 'm' }, { id: 'b', text: 'Procurador de los Derechos Humanos', bucket: 'g' }, { id: 'c', text: 'OMS', bucket: 'm' }] }),
        S.tf({ fase: 'comprobar', areas: ['fc', 'ccss'], cnb: ['fc:5.2.3', 'ccss:7.1.5', 'ccss:8.3.3'], prompt: '¿Verdadero o falso?' },
          { statements: [{ text: 'En 1965 se reconoció el voto de todas las mujeres en Guatemala.', answer: true }, { text: 'En Suiza la ciudadanía casi nunca vota.', answer: false }, { text: 'El porcentaje de población en pobreza extrema es distinto en cada continente.', answer: true }] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:7.1.6'], prompt: '¿Cuántas onzas hay en 3 libras?' },
          { answer: 48, unit: 'onzas' }),
        S.number({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.4.2'], prompt: 'Una mochila cuesta Q100 antes del IVA (12 %). ¿Cuánto se paga en total?' },
          { answer: 112, unit: 'quetzales' }),
        S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.4.3', 'l2:5.4.2'], prompt: '"Pedimos respetuosamente el uso del salón comunal el sábado." ¿Qué tipo de documento es?' },
          { options: [{ id: 'a', text: 'Una solicitud' }, { id: 'b', text: 'Un anuncio de venta' }, { id: 'c', text: 'Una factura' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:4.2.1'], prompt: 'En un guion, "(camina despacio hacia la puerta)" es…' },
          { options: [{ id: 'a', text: 'Una acotación' }, { id: 'b', text: 'Un personaje' }, { id: 'c', text: 'El título' }], correct: ['a'] }),
        S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:5.2.4'], prompt: 'Complete in English.' },
          { text: 'Neil Armstrong [[walked]] on the Moon. He [[was]] an astronaut.', distractors: ['is', 'walks'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 3 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.1.3'], prompt: '¿Qué instrumento usarías para registrar cuánta lluvia cayó en tu escuela?' },
      { options: [{ id: 'a', text: 'Un pluviómetro' }, { id: 'b', text: 'Un sismógrafo' }, { id: 'c', text: 'Un telescopio' }], correct: ['a'] }),
    S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.2.3', 'cnt:8.3.2'], prompt: '¿Verdadero o falso?' },
      { statements: [{ text: 'Un sistema de alerta temprana necesita datos y un aviso a tiempo.', answer: true }, { text: 'Los satélites no sirven para estudiar el clima.', answer: false }] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.3.3'], prompt: '¿Qué mide un índice de pobreza?' },
      { options: [{ id: 'a', text: 'El porcentaje de población que no cubre sus necesidades básicas' }, { id: 'b', text: 'La cantidad de volcanes de un país' }, { id: 'c', text: 'El número de escuelas privadas' }], correct: ['a'] }),
    S.match({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:7.2.3', 'ccss:7.1.5'], prompt: 'Une cada institución con su tarea.' },
      { pairs: [{ id: 'a', left: 'UNICEF', right: 'Protege los derechos de la niñez' }, { id: 'b', left: 'OMS', right: 'Coordina acciones de salud en el mundo' }, { id: 'c', left: 'COCODE', right: 'Organiza la participación de la comunidad' }] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.1.4'], prompt: '¿Qué acuerdo firmaron en 1987 los presidentes centroamericanos para buscar la paz?' },
      { options: [{ id: 'a', text: 'Esquipulas II' }, { id: 'b', text: 'La Independencia' }, { id: 'c', text: 'El Tratado de Libre Comercio' }], correct: ['a'] }),
    S.order({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.2.3'], prompt: 'Ordena del más antiguo al más reciente.' },
      { items: [{ id: 'a', text: 'Voto de mujeres alfabetas (1945)' }, { id: 'b', text: 'Constitución vigente (1985)' }, { id: 'c', text: 'Acuerdos de Paz (1996)' }] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:7.1.6'], prompt: '¿Cuántas libras son 64 onzas?' },
      { answer: 4, unit: 'libras' }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.4.2'], prompt: '¿Para qué se usan los impuestos que pagamos?' },
      { options: [{ id: 'a', text: 'Para financiar servicios públicos como escuelas, salud y carreteras' }, { id: 'b', text: 'Para que la tienda gane más' }, { id: 'c', text: 'Para nada' }], correct: ['a'] }),
    S.sort({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.4.2', 'l2:5.4.3'], prompt: 'Clasifica cada texto.' },
      { buckets: [{ id: 't', label: 'Telegrama', icon: 'Mail' }, { id: 'p', label: 'Promoción', icon: 'Percent' }],
        items: [{ id: 'a', text: 'LLEGO MARTES. TRAER MAÍZ.', bucket: 't' }, { id: 'b', text: 'Solo hoy: 2 libras de frijol por Q15', bucket: 'p' }, { id: 'c', text: 'FERIA CANCELADA. AVISAR FAMILIAS.', bucket: 't' }] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.3.3'], prompt: '¿Qué organizador gráfico sirve mejor para comparar la pobreza de los continentes?' },
      { options: [{ id: 'a', text: 'Un cuadro comparativo' }, { id: 'b', text: 'Un telegrama' }, { id: 'c', text: 'Una acotación' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.2.9', 'ef:4.2.5'], prompt: 'En un juego cooperativo, tu equipo no se pone de acuerdo. ¿Qué ayuda más?' },
      { options: [{ id: 'a', text: 'Escuchar todas las propuestas por turnos y decidir juntos' }, { id: 'b', text: 'Que decida el más fuerte' }, { id: 'c', text: 'Abandonar el juego' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:4.2.3'], prompt: 'Para mostrar las manos de una tejedora trabajando, ¿qué toma conviene?' },
      { options: [{ id: 'a', text: 'Primer plano' }, { id: 'b', text: 'Plano general desde muy lejos' }, { id: 'c', text: 'Ninguna, no se debe grabar' }], correct: ['a'] }),
  ],
});
