/**
 * Formación Ciudadana · Unidad 1 · Semana 3 — Mensajes y caminos que nos conectan.
 * Progresión: conocer la diversidad sociocultural de Guatemala y América Latina →
 * pensar críticamente ante los argumentos que usan esa diversidad (o el sexo) para discriminar.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Diversidad sociocultural ───────────────────────── */
  lesson({
    id: 's03-fc-1',
    title: 'Guatemala y América Latina: tierras de muchos pueblos',
    icon: 'Languages',
    minutes: 14,
    gancho: '¿Cuántos idiomas crees que se hablan en Guatemala? ¿Uno, cinco, veinticinco?',
    objetivos: [
      'Explicar qué es la diversidad sociocultural',
      'Identificar los cuatro pueblos y los 25 idiomas de Guatemala',
      'Reconocer pueblos e idiomas que forman la diversidad de otros países latinoamericanos',
    ],
    resumen: [
      'La diversidad sociocultural es la variedad de pueblos, idiomas, costumbres, creencias, formas de vestir, comidas y maneras de organizarse que conviven en un lugar.',
      'En Guatemala conviven cuatro pueblos: maya, garífuna, xinka y ladino o mestizo. Se hablan 25 idiomas: 22 idiomas mayas, el garífuna, el xinka y el español.',
      'El Acuerdo sobre Identidad y Derechos de los Pueblos Indígenas (1995), parte de los Acuerdos de Paz, reconoce que Guatemala es una nación multiétnica, pluricultural y multilingüe.',
      'Toda América Latina es diversa: pueblos quechua y aymara en Perú y Bolivia, guaraní en Paraguay, mapuche en Chile, náhuatl y maya en México, y pueblos afrodescendientes como los garífunas en la costa del Caribe.',
    ],
    media: {
      id: 's03-fc-1-mapa-idiomas', kind: 'image', title: 'Guatemala multilingüe', aspect: '4:3',
      alt: 'Mapa de Guatemala con colores suaves que muestran regiones donde se hablan distintos idiomas mayas, el garífuna en Izabal y el xinka en el suroriente.',
      brief: 'Mapa ilustrado de Guatemala con sus departamentos en líneas finas. Zonas de color suave y etiquetas solo para algunos idiomas bien establecidos: K’iche’ (occidente/centro), Mam (Huehuetenango y San Marcos), Q’eqchi’ (Alta Verapaz e Izabal norte), Kaqchikel (Chimaltenango y Sacatepéquez), Garífuna (Livingston, Izabal), Xinka (Santa Rosa, Jutiapa, Jalapa), Español (en todo el país). Leyenda: "22 idiomas mayas + garífuna + xinka + español = 25". Nota inferior: "Mapa simplificado: en muchas regiones conviven varios idiomas". Validar zonas con el mapa lingüístico oficial antes de publicar.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:2.1.1'], ambito: 'conocer',
          prompt: '¿Cuántos idiomas crees que se hablan en Guatemala? Elige tu predicción.',
          explain: '¡Son **25**! 22 idiomas mayas, el garífuna, el xinka y el español. Pocos países tan pequeños tienen tanta riqueza de idiomas.' },
        { layout: 'grid', options: [
          { id: 'a', text: '1', feedback: 'El español es el más hablado, pero hay muchos más.' },
          { id: 'b', text: '5', feedback: 'Son bastantes más: ¡cinco veces más!' },
          { id: 'c', text: '25' },
          { id: 'd', text: '100', feedback: 'Son muchos, pero no tantos.' },
        ], correct: ['c'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:2.1.1'], ambito: 'conocer', title: '¿Qué es la diversidad sociocultural?',
          prompt: '**Socio** viene de sociedad y **cultural** de cultura. La **diversidad sociocultural** es la variedad de formas de vivir que conviven en un lugar. Toca cada tarjeta.' },
        { icon: 'Users', body: 'Ninguna cultura es "mejor" que otra: cada una es una forma valiosa de entender el mundo.', reveal: [
          { icon: 'Languages', front: 'Idiomas', back: 'Cada pueblo tiene su idioma o idiomas, con los que nombra el mundo a su manera.' },
          { icon: 'Shirt', front: 'Vestimenta', back: 'Los trajes, como el güipil y el corte, guardan historia y significado de cada comunidad.' },
          { icon: 'Utensils', front: 'Comida', back: 'Tamales, tapado garífuna, pepián, pan de coco, atol de elote… la cocina también cuenta quiénes somos.' },
          { icon: 'Sparkles', front: 'Creencias y fiestas', back: 'Ceremonias, ferias patronales, danzas y formas de celebrar la vida y la naturaleza.' },
          { icon: 'Users', front: 'Organización', back: 'Formas propias de decidir y servir: alcaldías indígenas, cofradías, comités, asambleas.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:2.1.1'], ambito: 'conocer', title: 'Cuatro pueblos, 25 idiomas',
          prompt: 'Guatemala es un país **multiétnico, pluricultural y multilingüe**. Así lo reconoce el **Acuerdo sobre Identidad y Derechos de los Pueblos Indígenas**, firmado en **1995** como parte de los Acuerdos de Paz. Toca cada pueblo.',
          media: { id: 's03-fc-1-cuatro-pueblos', kind: 'image', title: 'Los cuatro pueblos de Guatemala', aspect: '16:9',
            alt: 'Cuatro niñas y niños sonrientes, cada uno representando a un pueblo de Guatemala, frente a paisajes de su región.',
            brief: 'Ilustración en cuatro paneles verticales, estilo plano y respetuoso. (1) Pueblo maya: niña con güipil y corte frente a un lago y volcanes del altiplano. (2) Pueblo garífuna: niño junto al mar Caribe de Livingston, con tambores al fondo. (3) Pueblo xinka: niña en un paisaje del suroriente (Santa Rosa), con milpa y cerros. (4) Pueblo ladino/mestizo: niño en un pueblo con iglesia colonial y mercado. Rótulo simple bajo cada panel: "Maya", "Garífuna", "Xinka", "Ladino/mestizo". Evitar caricaturas o rasgos exagerados; ropa cotidiana y actual.' } },
        { icon: 'Flag', body: 'Los **25 idiomas** son: **22 idiomas mayas** (como k’iche’, q’eqchi’, kaqchikel, mam, tz’utujil, ixil y q’anjob’al), el **garífuna**, el **xinka** y el **español**.', reveal: [
          { icon: 'Mountain', front: 'Pueblo maya', back: 'Descendiente de la civilización maya. Forma **22 comunidades lingüísticas** en gran parte del país.' },
          { icon: 'Waves', front: 'Pueblo garífuna', back: 'De raíces **africanas y caribeñas**. Vive sobre todo en **Livingston y Puerto Barrios**, Izabal. Su idioma, danza y música fueron reconocidos por la UNESCO en 2001.' },
          { icon: 'Sprout', front: 'Pueblo xinka', back: 'Pueblo originario del **suroriente**: Santa Rosa, Jutiapa y Jalapa. Trabaja por revitalizar su idioma.' },
          { icon: 'Church', front: 'Pueblo ladino o mestizo', back: 'Surgido de la mezcla de pueblos indígenas, españoles y otros. Su idioma materno es el **español**.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:2.1.1'], prompt: 'Une cada pueblo de Guatemala con un dato que lo describe.',
          hint: 'Recuerda: el garífuna vive en el Caribe, el xinka en el suroriente y el maya forma 22 comunidades lingüísticas.',
          explain: 'Maya: 22 idiomas. Garífuna: Izabal, raíces africanas. Xinka: suroriente. Ladino/mestizo: idioma materno español.' },
        { leftTitle: 'Pueblo', rightTitle: 'Dato', pairs: [
          { id: 'p1', left: 'Maya', leftIcon: 'Mountain', right: 'Habla 22 idiomas distintos' },
          { id: 'p2', left: 'Garífuna', leftIcon: 'Waves', right: 'Vive sobre todo en Livingston y Puerto Barrios' },
          { id: 'p3', left: 'Xinka', leftIcon: 'Sprout', right: 'Pueblo originario de Santa Rosa, Jutiapa y Jalapa' },
          { id: 'p4', left: 'Ladino o mestizo', leftIcon: 'Church', right: 'Su idioma materno es el español' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:2.1.1'], ambito: 'conocer', title: 'Una región diversa: América Latina',
          prompt: 'Guatemala no es la única: en toda **América Latina** conviven pueblos originarios, afrodescendientes y mestizos. Toca cada país.' },
        { icon: 'Globe', body: 'Compartimos una historia parecida: pueblos originarios, llegada de europeos y africanos, y mezcla. Por eso la diversidad es **nuestra marca común**.', reveal: [
          { icon: 'MountainSnow', front: 'Perú y Bolivia', back: 'Pueblos **quechua** y **aymara** en los Andes. Sus idiomas se hablan hasta hoy por millones de personas.' },
          { icon: 'Languages', front: 'Paraguay', back: 'El **guaraní** es idioma oficial junto al español, y lo habla la mayoría de la población.' },
          { icon: 'Mountain', front: 'Chile', back: 'El pueblo **mapuche** es el pueblo originario más numeroso del país.' },
          { icon: 'Sun', front: 'México', back: 'Se hablan muchos idiomas originarios, como el **náhuatl** y el **maya yucateco**.' },
          { icon: 'Drum', front: 'Costa del Caribe', back: 'Los **garífunas** viven en Guatemala, Honduras, Belice y Nicaragua. Hay pueblos afrodescendientes también en Colombia, Brasil y otros países.' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:2.1.1'], prompt: 'Clasifica cada idioma: ¿se habla como idioma propio de un pueblo de **Guatemala** o de **otro país latinoamericano**?',
          explain: 'En Guatemala: idiomas mayas, garífuna, xinka y español. Quechua, aymara, guaraní y mapudungun (idioma mapuche) son de pueblos de Sudamérica.' },
        { buckets: [
          { id: 'gt', label: 'Guatemala', icon: 'Flag', color: 'var(--area-fc)' },
          { id: 'la', label: 'Otro país de América Latina', icon: 'Globe', color: 'var(--c-jade)' },
        ], items: [
          { id: 'i1', text: 'K’iche’', bucket: 'gt' },
          { id: 'i2', text: 'Quechua', bucket: 'la' },
          { id: 'i3', text: 'Xinka', bucket: 'gt' },
          { id: 'i4', text: 'Guaraní', bucket: 'la' },
          { id: 'i5', text: 'Q’eqchi’', bucket: 'gt' },
          { id: 'i6', text: 'Aymara', bucket: 'la' },
          { id: 'i7', text: 'Garífuna', bucket: 'gt', feedback: 'El garífuna se habla en Guatemala (Izabal) y también en Honduras, Belice y Nicaragua. Es uno de los 25 idiomas de Guatemala.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:2.1.1'], prompt: 'En la feria de tu escuela hay tamales, pan de coco garífuna, marimba, un grupo de rap en k’iche’ y una exposición de güipiles. ¿Qué muestra esa feria?',
          explain: 'La feria muestra la **diversidad sociocultural**: distintos pueblos compartiendo comida, música, idiomas y trajes. Y las culturas cambian y crean cosas nuevas, como el rap en idioma maya.' },
        { options: [
          { id: 'a', text: 'La diversidad sociocultural de Guatemala', icon: 'Users' },
          { id: 'b', text: 'Que solo una cultura es la verdadera', icon: 'X', feedback: 'Todas las culturas presentes son valiosas; ninguna es "la verdadera".' },
          { id: 'c', text: 'Que las culturas nunca cambian', icon: 'Lock', feedback: 'El rap en k’iche’ muestra que las culturas cambian y crean cosas nuevas sin perder su raíz.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.1.1'], prompt: '¿Cuáles son los cuatro pueblos de Guatemala?' },
        { options: [
          { id: 'a', text: 'Maya, garífuna, xinka y ladino o mestizo' },
          { id: 'b', text: 'Maya, azteca, inca y español' },
          { id: 'c', text: 'Quechua, aymara, guaraní y mapuche' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En Guatemala se hablan 22 idiomas mayas.', answer: true },
          { text: 'En Paraguay el guaraní es idioma oficial junto al español.', answer: true },
          { text: 'La diversidad sociocultural significa que una cultura es mejor que las demás.', answer: false, why: 'Significa que conviven muchas culturas, todas valiosas.' },
          { text: 'El pueblo garífuna vive sobre todo en el altiplano occidental.', answer: false, why: 'Vive sobre todo en la costa del Caribe: Livingston y Puerto Barrios, Izabal.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Actitud crítica ante la discriminación ───────────────────────── */
  lesson({
    id: 's03-fc-2',
    title: 'Pensar críticamente ante la discriminación',
    icon: 'Search',
    minutes: 15,
    gancho: '"Las niñas no saben jugar fútbol." "Los de ese pueblo son haraganes." ¿Has escuchado frases así? ¿Son verdad?',
    objetivos: [
      'Distinguir estereotipo, prejuicio y discriminación',
      'Reconocer el machismo, el sexismo y el racismo en frases y situaciones',
      'Responder con argumentos y respeto a quien justifica la discriminación',
    ],
    resumen: [
      'Estereotipo: idea simplificada sobre un grupo ("todos los… son…"). Prejuicio: juzgar a alguien antes de conocerlo, por su grupo. Discriminación: tratar peor a alguien por su pueblo, idioma, sexo, religión, discapacidad o pobreza.',
      'Machismo: creer que los hombres valen más que las mujeres. Sexismo: dar distinto trato u oportunidades por ser hombre o mujer. Racismo y discriminación étnica: despreciar a alguien por su pueblo, color de piel o cultura.',
      'Un argumento discriminatorio generaliza, juzga por el grupo y no por la persona, y convierte una diferencia en inferioridad. Se responde pidiendo pruebas, dando contraejemplos y recordando la igualdad de derechos.',
      'La Constitución de Guatemala (artículo 4) dice que todos los seres humanos son libres e iguales en dignidad y derechos. La discriminación es un delito en el Código Penal.',
    ],
    media: {
      id: 's03-fc-2-lupa', kind: 'animation', title: 'La lupa del pensamiento crítico', aspect: '16:9', duration: 45,
      alt: 'Una frase discriminatoria aparece en un globo de diálogo; una lupa la examina y señala la generalización, luego aparece una respuesta respetuosa con un contraejemplo.',
      brief: 'Animación 2D de 45 s. Aparece un globo de diálogo: "Todas las niñas son malas para las matemáticas". Una lupa se acerca y resalta en amarillo la palabra "Todas" con la etiqueta "generalización". Luego aparecen tres ejemplos de niñas resolviendo problemas, construyendo y programando: "contraejemplos". Finalmente un nuevo globo: "Cada persona es distinta; las capacidades no dependen del sexo". Narración en español, subtítulos. Colores suaves, personajes diversos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:1.2.3'], ambito: 'conocer',
          prompt: 'Un compañero dice: **"Las niñas no saben jugar fútbol."** ¿Qué le responderías?',
          explain: 'Muchas niñas juegan fútbol muy bien, y en Guatemala hay selecciones y ligas femeninas. La frase **generaliza**: habla de "las niñas" como si todas fueran iguales. Hoy aprenderás a detectar y responder frases así.' },
        { options: [
          { id: 'a', text: 'Que eso no es cierto: jugar bien depende de practicar, no de ser niña o niño', icon: 'Scale' },
          { id: 'b', text: 'Que tiene razón, siempre ha sido así', icon: 'ThumbsUp', feedback: 'Que algo "siempre se haya dicho" no lo hace verdad. Piensa en niñas que conoces que juegan bien.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.3'], ambito: 'conocer', title: 'De la idea al daño',
          prompt: 'La discriminación casi siempre empieza con una **idea equivocada** en la cabeza. Mira cómo avanza. Toca cada tarjeta en orden.' },
        { icon: 'Layers', body: 'Si frenamos la idea a tiempo, frenamos el daño. Por eso importa **pensar críticamente**.', reveal: [
          { icon: 'Brain', front: '1. Estereotipo', back: 'Una idea **simplificada** sobre un grupo: "Todos los de la capital son…", "Las mujeres son…". Borra las diferencias entre personas.' },
          { icon: 'Eye', front: '2. Prejuicio', back: '**Juzgar** a alguien antes de conocerlo, solo por el grupo al que pertenece. "No la invito: seguro no sabe."' },
          { icon: 'X', front: '3. Discriminación', back: '**Tratar peor** a alguien por su pueblo, idioma, sexo, religión, discapacidad o pobreza: excluirlo, burlarse, negarle una oportunidad.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.3'], ambito: 'conocer', title: 'Formas de discriminación que hay que nombrar',
          prompt: 'Poner nombre a las cosas ayuda a reconocerlas. Toca cada tarjeta.' },
        { icon: 'Search', body: 'Todas estas formas van contra la **igualdad**. La Constitución de Guatemala, en su **artículo 4**, dice que **todos los seres humanos son libres e iguales en dignidad y derechos**, y que hombres y mujeres tienen iguales oportunidades y responsabilidades.', reveal: [
          { icon: 'User', front: 'Machismo', back: 'Creer que los **hombres valen más** que las mujeres o que deben mandar sobre ellas. "Eso es cosa de hombres."' },
          { icon: 'Users', front: 'Sexismo', back: 'Dar **distinto trato u oportunidades** a alguien por ser hombre o mujer. "Las niñas limpian, los niños cargan."' },
          { icon: 'Hand', front: 'Racismo', back: 'Creer que hay personas **superiores o inferiores** por su color de piel u origen, y tratarlas en consecuencia.' },
          { icon: 'Languages', front: 'Discriminación étnica', back: 'Despreciar a alguien por su **pueblo, idioma o traje**. Por ejemplo, burlarse de quien usa güipil o habla un idioma maya.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.3'], prompt: 'Clasifica cada frase o acción según el tipo de discriminación.',
          hint: '¿Se desprecia a alguien por ser mujer (machismo o sexismo) o por su pueblo, color o idioma (racismo o discriminación étnica)?',
          explain: 'Machismo y sexismo discriminan por el sexo; racismo y discriminación étnica, por el origen, el color de piel, el idioma o la cultura.' },
        { buckets: [
          { id: 'sex', label: 'Machismo o sexismo', icon: 'Users', color: 'var(--area-fc)' },
          { id: 'rac', label: 'Racismo o discriminación étnica', icon: 'Languages', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'f1', text: '"Las mujeres no deberían manejar camionetas."', bucket: 'sex' },
          { id: 'f2', text: 'No atender a una señora en la tienda porque habla mam', bucket: 'rac' },
          { id: 'f3', text: '"En esta casa los hombres no lavan platos."', bucket: 'sex' },
          { id: 'f4', text: 'Poner apodos a un compañero por su color de piel', bucket: 'rac' },
          { id: 'f5', text: 'Pagarle menos a una mujer por hacer el mismo trabajo que un hombre', bucket: 'sex', feedback: 'Es sexismo: el trabajo es el mismo, pero se paga distinto solo por ser mujer.' },
          { id: 'f6', text: 'Decir que el traje maya "se ve feo" y pedir que no lo usen en la escuela', bucket: 'rac' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.3'], ambito: 'hacer', title: 'Ejemplo resuelto: desarmar un argumento discriminatorio',
          prompt: 'Algunas personas intentan **justificar** la discriminación con "argumentos". Mira cómo analizarlos con tres preguntas.' },
        { icon: 'Search', problem: 'En una reunión alguien dice: **"No elijamos a una mujer como presidenta del comité, porque las mujeres son muy sentimentales para mandar."**',
          steps: [
            { text: '**¿Generaliza?** Sí: habla de "las mujeres" como si todas fueran iguales.', why: 'Las palabras "todos", "todas", "siempre", "nunca" son una alerta.' },
            { text: '**¿Juzga por el grupo y no por la persona?** Sí: no revisa si esa candidata en concreto tiene experiencia, ideas o honestidad.' },
            { text: '**¿Convierte una diferencia en inferioridad?** Sí: supone que sentir emociones impide dirigir. Todas las personas, hombres y mujeres, sienten emociones.' },
            { text: '**Respondo con argumentos:** "Hay mujeres que dirigen muy bien comités, municipalidades y empresas. Elijamos por las propuestas y la honestidad de cada candidato, no por su sexo."' },
          ],
          answer: 'El argumento es **machista**: generaliza, juzga por el grupo y convierte una diferencia en inferioridad. Se responde con **contraejemplos** y con el principio de **igualdad**.',
          tip: 'Tres preguntas: ¿generaliza? ¿juzga por el grupo? ¿convierte la diferencia en inferioridad?' },
      ),
      S.highlight(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.3'], prompt: 'Toca las **palabras que generalizan** en estas frases. Son la primera alerta de un estereotipo.',
          hint: 'Busca palabras que hablan de un grupo entero o de "siempre/nunca".',
          explain: '"Todos", "todas", "siempre", "nunca" y "ninguno" convierten a muchas personas distintas en una sola idea. Por eso son una alerta.' },
        { target: 'palabras que generalizan', text: '{Todos} los jóvenes son irresponsables. Las niñas {nunca} entienden de computadoras. {Ninguno} de esa aldea sabe leer bien. En la ciudad la gente {siempre} es egoísta.' },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.2.3'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
        { scene: { icon: 'MessageCircle', text: 'En la cancha, **Kevin** dice: "Las niñas no pueden ser capitanas del equipo porque no saben mandar". Varias niñas quieren postularse y se quedan calladas.' },
          options: [
            { id: 'a', icon: 'ThumbsUp', text: 'Darle la razón a Kevin para no pelear', consequence: 'Las niñas se quedan fuera y se repite una idea falsa y machista.', values: ['Machismo', 'Silencio'], constructive: false },
            { id: 'b', icon: 'Scale', text: 'Preguntarle a Kevin: "¿Por qué lo dices? ¿Conoces a todas las niñas?" y proponer elegir por quién organiza mejor al equipo', consequence: 'Kevin no tiene pruebas. El grupo acuerda elegir por capacidades y una niña es elegida capitana.', values: ['Pensamiento crítico', 'Equidad'], constructive: true },
            { id: 'c', icon: 'Users', text: 'Proponer que la capitanía rote entre niñas y niños cada semana', consequence: 'Todas y todos practican el liderazgo. Kevin descubre que sus compañeras organizan muy bien.', values: ['Inclusión', 'Igualdad de oportunidades'], constructive: true },
          ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.2.3'], prompt: 'Alguien dice: **"Si hablas un idioma maya, te va a costar aprender inglés."** ¿Cuál es la respuesta **más crítica y respetuosa**?',
          explain: 'La frase no tiene pruebas: hablar varios idiomas **no** es un obstáculo; muchas personas bilingües aprenden un tercer idioma con facilidad. Pedir pruebas y dar contraejemplos es pensar críticamente.' },
        { options: [
          { id: 'a', text: '"¿En qué te basas? Conozco personas que hablan k’iche’, español e inglés. Saber varios idiomas ayuda a aprender otro."' },
          { id: 'b', text: '"Tienes razón, mejor que dejen de hablar su idioma."', feedback: 'Eso sería aceptar un prejuicio y perder una riqueza. No hay pruebas de lo que dice la frase.' },
          { id: 'c', text: '"¡Qué tonto eres!"', feedback: 'Insultar no convence y también es falta de respeto. Mejor responde con argumentos.' },
        ], correct: ['a'] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.2.3', 'fc:2.1.1'], ambito: 'conocer', prompt: 'Lee y responde. Este texto muestra qué dicen las leyes y los Acuerdos de Paz sobre la discriminación.' },
        { genre: 'Texto informativo', heading: 'La igualdad también está en la ley',
          passage: 'La **Constitución Política de la República de Guatemala**, en su **artículo 4**, dice que en Guatemala todos los seres humanos son libres e iguales en dignidad y derechos, y que el hombre y la mujer tienen iguales oportunidades y responsabilidades.\n\nEn **1995** se firmó el **Acuerdo sobre Identidad y Derechos de los Pueblos Indígenas**, uno de los Acuerdos de Paz. Ese acuerdo reconoce que Guatemala es una nación multiétnica, pluricultural y multilingüe, y pide eliminar la discriminación contra los pueblos indígenas. Además, reconoce que las **mujeres indígenas** han sufrido una **doble discriminación**: por ser mujeres y por ser indígenas.\n\nHoy, en Guatemala, la discriminación es un **delito** en el Código Penal. Pero las leyes no bastan: la igualdad también se construye en el aula, en la cancha y en la casa, cada vez que alguien se atreve a decir "eso no es justo".',
          questions: [
            { q: '¿Qué dice el artículo 4 de la Constitución?', options: [
              { id: 'a', text: 'Que todos los seres humanos son libres e iguales en dignidad y derechos' },
              { id: 'b', text: 'Que solo algunas personas tienen derechos' },
              { id: 'c', text: 'Que los hombres tienen más oportunidades que las mujeres' },
            ], correct: 'a' },
            { q: '¿Por qué el Acuerdo habla de "doble discriminación" de las mujeres indígenas?', options: [
              { id: 'a', text: 'Porque pueden ser discriminadas por ser mujeres y también por ser indígenas' },
              { id: 'b', text: 'Porque tienen dos nombres' },
              { id: 'c', text: 'Porque hablan dos idiomas' },
            ], correct: 'a' },
            { q: 'Según el último párrafo, ¿qué más hace falta además de las leyes?', options: [
              { id: 'a', text: 'Que las personas practiquen la igualdad en la vida diaria y se atrevan a señalar lo injusto' },
              { id: 'b', text: 'Nada, las leyes lo resuelven todo' },
              { id: 'c', text: 'Esperar a ser adultos' },
            ], correct: 'a', why: 'La igualdad se construye con leyes y también con actitudes de cada día.' },
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.3'], prompt: '"Mi hermana no puede estudiar mecánica porque es mujer." Esta frase es un ejemplo de…' },
        { options: [
          { id: 'a', text: 'Sexismo o machismo' },
          { id: 'b', text: 'Tolerancia' },
          { id: 'c', text: 'Solidaridad' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.3'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Un prejuicio es juzgar a alguien antes de conocerlo, solo por su grupo.', answer: true },
          { text: 'Las palabras "todos" y "nunca" pueden ser una alerta de estereotipo.', answer: true },
          { text: 'Burlarse del traje o del idioma de alguien es discriminación étnica.', answer: true },
          { text: 'Si una idea se ha repetido por muchos años, entonces es verdad.', answer: false, why: 'Que algo se repita no lo hace cierto: hay que pedir pruebas.' },
        ] },
      ),
      cierre({ areas: ['fc'], cnb: ['fc:1.2.3', 'fc:2.1.1'] },
        ['Nombro los cuatro pueblos y los 25 idiomas de Guatemala', 'Distingo estereotipo, prejuicio y discriminación', 'Respondo con argumentos a una frase discriminatoria'],
        ['Preguntaré en casa qué idiomas hablaban mis abuelos', 'Cuando escuche "todos los… son…", preguntaré en qué se basa', 'Invitaré a participar a alguien que suele quedar excluido']),
    ],
  }),
];
