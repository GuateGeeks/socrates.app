import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 22 · Unidad 3 "Valorando nuestra convivencia"
 * Tema generador: La diversidad que nos enriquece
 * Tipos de herencia y cruces en la milpa, división de fracciones, saltos ·
 * simbiosis del liquen, seres útiles, lugares turísticos y su conservación, decimales, obras de referencia ·
 * diversidad étnica y lingüística del mundo, discriminación, etnocentrismo, machismo y autoritarismo, música de la comunidad ·
 * el texto periodístico, la mesa redonda y propuestas para mejorar la calidad de vida.
 */
export default semana({
  id: 's22',
  unidad: 3,
  semana: 22,
  kind: 'aprendizaje',
  temaGenerador: 'La diversidad que nos enriquece',
  title: 'La diversidad que nos enriquece',
  subtitle: 'Herencia, seres útiles, pueblos del mundo y noticiero escolar',
  icon: 'Sprout',
  color: 'var(--area-cnt)',
  contexto: 'En Alta Verapaz, las familias siembran maíz blanco, amarillo, negro y rojo; en los árboles del bosque nuboso crecen líquenes, y en las escuelas se hablan q\'eqchi\', poqomchi\' y español. Esta semana tu grado prepara el noticiero escolar "Voces diversas": investigarás por qué las mazorcas cambian de color, cómo cooperan un hongo y un alga, cómo se cuidan lugares como Semuc Champey y por qué la diversidad de pueblos e idiomas es una riqueza que debemos defender de la discriminación.',
  ejes: ['multiculturalidad', 'equidad', 'sostenible', 'vida-ciudadana'],
  media: {
    id: 's22-portada', kind: 'video', title: 'Voces diversas', aspect: '16:9', duration: 60,
    alt: 'Presentación de un noticiero escolar: mazorcas de colores, un liquen en un árbol, las pozas turquesa de un área protegida y niñas y niños de distintos pueblos saludando en sus idiomas.',
    brief: 'Video (o animación 2D) de 60 s con estética de noticiero escolar hecho con cartón: dos presentadores, una niña q\'eqchi\' con güipil y un niño ladino, abren "Voces diversas". Cortinillas con: (1) mazorcas de maíz blanco, amarillo, negro y rojo sobre un petate; (2) acercamiento a un liquen verde grisáceo en la corteza de un árbol del bosque nuboso; (3) pozas turquesa de un río en la selva, con un letrero genérico de "Área protegida: cuídala"; (4) mosaico de niñas y niños de distintos pueblos del mundo que dicen "hola" en su idioma (texto en pantalla, sin inventar palabras). Música de marimba y tambor. Sin marcas ni personas reales identificables.',
  },
  badge: { id: 'medalla-s22', name: 'Voz de la diversidad', icon: 'Mic', desc: 'Completaste la semana 22 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's22-d1-herencia-milpa',
      title: 'Herencia y variedad en la milpa',
      icon: 'Wheat',
      minutes: 15,
      day: 1,
      gancho: '¿Por qué a veces aparece una mazorca con granos blancos y negros revueltos? ¿Y por qué te pareces a tu familia, pero no eres igual a nadie?',
      objetivos: ['Clasificar los tipos de herencia', 'Demostrar cómo los cruces producen cambios en los nuevos individuos', 'Dividir fracciones', 'Reconocer datos verdaderos y falsos en inglés'],
      resumen: [
        'Tipos de herencia: dominante (una característica se impone), recesiva (solo aparece si se hereda de ambos padres), intermedia (se mezclan, como flores rojas × blancas = rosadas), codominante (se expresan las dos, como el tipo de sangre AB) y ligada al sexo (está en el cromosoma X, como el daltonismo).',
        'Al cruzar individuos distintos, los hijos combinan características de ambos padres: así aparecen nuevas variedades de maíz, frijol o animales.',
        'Para dividir fracciones se multiplica la primera por el inverso de la segunda: 3/4 ÷ 1/8 = 3/4 × 8/1 = 6. Un entero se escribe como fracción sobre 1: 2 ÷ 1/4 = 2/1 × 4/1 = 8 y 1/2 ÷ 3 = 1/2 × 1/3 = 1/6.',
        'Las fases de un salto son: carrera de impulso, despegue, vuelo y caída.',
      ],
      media: {
        id: 's22-d1-mazorcas', kind: 'image', title: 'Los colores del maíz', aspect: '4:3',
        alt: 'Fotografía de mazorcas de maíz blanco, amarillo, negro y rojo sobre un petate, y una mazorca "pinta" con granos de dos colores.',
        brief: 'Fotografía cenital (o ilustración realista) de cinco mazorcas deshojadas sobre un petate de palma: blanca, amarilla, negra (morada oscura), roja y una mazorca "pinta" con granos blancos y negros mezclados al azar. Etiquetas pequeñas con el color. Luz natural de mañana. Sin marcas, sin personas.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'ccss'], cnb: ['cnt:1.4.4'], ambito: 'conocer', title: 'Cinco formas de heredar',
            prompt: 'Ya sabes que los **genes** están en los cromosomas y que recibimos la mitad de nuestra información de cada progenitor. Pero no todas las características se heredan igual. Toca cada tarjeta.' },
          { icon: 'Dna', body: 'Cada característica depende de genes que vienen **en pares**: uno de la madre y otro del padre.', reveal: [
            { icon: 'Crown', front: 'Dominante', back: 'Una característica **se impone** sobre la otra. Ej.: en las arvejas, el tallo alto domina sobre el bajo.' },
            { icon: 'EyeOff', front: 'Recesiva', back: 'Solo aparece si se hereda **de ambos** progenitores. Ej.: el albinismo.' },
            { icon: 'Palette', front: 'Intermedia', back: 'Las características **se mezclan**. Ej.: en algunas plantas, flor roja × flor blanca = flor **rosada**.' },
            { icon: 'Layers', front: 'Codominante', back: 'Se expresan **las dos a la vez**. Ej.: el tipo de sangre **AB**.' },
            { icon: 'Link', front: 'Ligada al sexo', back: 'El gen está en el **cromosoma X**. Ej.: el daltonismo (confundir colores), más frecuente en hombres.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.4.4'], ambito: 'conocer',
            prompt: 'Une cada caso con su **tipo de herencia**.',
            explain: 'Fíjate en cómo aparecen las características en los hijos: ¿se impone una, se mezclan o se ven las dos?' },
          { leftTitle: 'Caso', rightTitle: 'Tipo de herencia', pairs: [
            { id: 'h1', left: 'Arveja alta × arveja baja → todas altas', leftIcon: 'Sprout', right: 'Dominante' },
            { id: 'h2', left: 'Flor roja × flor blanca → flores rosadas', leftIcon: 'Flower', right: 'Intermedia' },
            { id: 'h3', left: 'Persona con sangre tipo AB', leftIcon: 'Droplet', right: 'Codominante' },
            { id: 'h4', left: 'Daltonismo, más frecuente en hombres', leftIcon: 'Eye', right: 'Ligada al sexo' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['cnt', 'pyd'], cnb: ['cnt:2.2.3'], ambito: 'conocer', title: 'Cruces que crean variedad',
            prompt: 'En el siglo XIX, **Gregor Mendel** cruzó plantas de arveja y descubrió las reglas de la herencia. Las familias campesinas de Guatemala hacen algo parecido desde hace miles de años con el maíz.',
            media: { id: 's22-d1-cruce', kind: 'animation', title: 'Del cruce a la nueva mazorca', aspect: '16:9', duration: 45,
              alt: 'Animación del viento que lleva polen de una milpa de maíz negro a una de maíz blanco; después aparece una mazorca con granos de los dos colores.',
              brief: 'Animación 2D de 45 s. Escena 1: dos milpas vecinas, una de maíz negro y otra de maíz blanco; el viento lleva el polen de la espiga (flor masculina) del maíz negro a los pelos del elote (flor femenina) del maíz blanco. Escena 2: la mazorca blanca crece con algunos granos negros ("mazorca pinta"). Escena 3: esquema tipo Mendel con dos arvejas, alta × baja, y una fila de hijas todas altas. Rótulos: "Polen = información del padre", "Cada grano es un nuevo individuo". Narración infantil con subtítulos.' } },
          { icon: 'Wheat', body: 'Un **cruce** une la información genética de dos individuos distintos. Los hijos **combinan** características de ambos, por eso aparecen cambios y nuevas variedades.', reveal: [
            { icon: 'Wind', front: 'En la milpa', back: 'Si una milpa de maíz negro está junto a una de maíz blanco, el viento lleva el **polen** y aparecen **mazorcas pintas**.' },
            { icon: 'Sprout', front: 'Selección campesina', back: 'Las familias guardan la semilla de las mejores mazorcas: así se crearon muchas **variedades** adaptadas a cada clima.' },
            { icon: 'Egg', front: 'En los animales', back: 'Al cruzar gallinas de distintas razas, los pollitos pueden tener plumas o tamaños nuevos.' },
          ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['cnt', 'pyd'], cnb: ['cnt:2.2.3', 'cnt:1.4.4'], ambito: 'hacer',
            prompt: 'Doña Irma cruza una planta de frijol de **flor morada** (dominante) con una de **flor blanca** (recesiva), ambas de línea pura. ¿Cómo serán las flores de las plantas hijas?',
            hint: 'Cuando una característica es dominante, se impone en la primera generación.',
            explain: 'Como el morado domina, todas las hijas de la primera generación tienen flor morada, aunque guardan el gen de flor blanca, que puede reaparecer en sus nietas.' },
          { options: [
            { id: 'a', text: 'Todas de flor morada', icon: 'Flower2' },
            { id: 'b', text: 'Todas de flor blanca', icon: 'Flower', feedback: 'El blanco es recesivo: no aparece si la planta tiene un gen de morado.' },
            { id: 'c', text: 'Todas de flor rosada', icon: 'Palette', feedback: 'Eso pasaría en la herencia intermedia, pero aquí el morado es dominante.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'pyd'], cnb: ['mat:4.4.4'], ambito: 'hacer',
            prompt: 'Don Rigoberto quiere probar nuevos cruces de maíz. Tiene **3/4 de cuerda** y la dividirá en parcelas de **1/8 de cuerda**. ¿Cuántas parcelas tendrá? Para **dividir fracciones**, multiplica la primera por el **inverso** de la segunda (voltea la segunda fracción): 3/4 ÷ 1/8 = 3/4 × 8/1.',
            hint: '3 × 8 = 24 y 4 × 1 = 4. Ahora simplifica 24/4.',
            explain: '3/4 × 8/1 = 24/4 = 6 parcelas. Tiene sentido: en 3/4 caben seis octavos (6/8 = 3/4). Si hay un **entero**, escríbelo sobre 1: 2 ÷ 1/4 = 2/1 × 4/1 = 8, y 1/2 ÷ 3 = 1/2 × 1/3 = 1/6 (repartir media libra entre 3).' },
          { answer: 6, unit: 'parcelas', allowFraction: true, stimulus: '3/4 ÷ 1/8 = ?', misconceptions: [
            { value: 3 / 32, msg: 'Multiplicaste sin voltear la segunda fracción. Para dividir, multiplica por el inverso: 8/1.' },
          ] },
        ),
        S.tf(
          { fase: 'aplicar', areas: ['l3', 'cnt'], cnb: ['l3:1.3.1'], ambito: 'conocer',
            prompt: 'English time! **True or false?** Lee cada oración en inglés y decide si el dato es verdadero. (Ejemplo: "Mice catch cats" → _No. Cats catch mice._)',
            explain: 'Checking if a sentence is true or false helps us understand what we read.' },
          { statements: [
            { text: 'Children inherit genes from their parents.', answer: true },
            { text: 'Plants do not have genes.', answer: false, why: 'Plants have genes too. That is why corn has different colors.' },
            { text: 'Corn can be white, yellow, black or red.', answer: true },
            { text: 'Chickens give us milk.', answer: false, why: 'No. Chickens give us eggs. Cows give us milk.' },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['ef', 'cnt'], cnb: ['ef:1.3.11'], ambito: 'hacer',
            prompt: 'La estatura tiene una parte heredada, pero la **técnica** del salto se aprende y se entrena. Ordena las **fases** de un salto de longitud. Luego practica en el patio el salto de longitud, el triple (salto, paso y salto) y el de altura estilo **tijereta**.',
            explain: 'Todos los saltos usan las mismas fases. En la tijereta, las piernas pasan la cuerda una tras otra, como unas tijeras; en el triple se encadenan tres impulsos antes de caer.' },
          { items: [
            { id: 'f1', text: 'Carrera de impulso' },
            { id: 'f2', text: 'Despegue con un pie' },
            { id: 'f3', text: 'Vuelo' },
            { id: 'f4', text: 'Caída con las rodillas flexionadas' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.4.4', 'cnt:2.2.3'], prompt: 'Al cruzar una planta de flor roja con una de flor blanca, todas las hijas salen **rosadas**. ¿Qué tipo de herencia es?' },
          { options: [
            { id: 'a', text: 'Intermedia' },
            { id: 'b', text: 'Dominante', feedback: 'Si fuera dominante, todas saldrían rojas o todas blancas.' },
            { id: 'c', text: 'Ligada al sexo', feedback: 'La herencia ligada al sexo depende del cromosoma X.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.4.4'], prompt: 'Hay **2 litros** de atol y se sirven vasos de **1/4 de litro**. ¿Cuántos vasos se llenan?' },
          { answer: 8, unit: 'vasos', stimulus: '2 ÷ 1/4 = ?', misconceptions: [
            { value: 0.5, msg: 'Multiplicaste 2 × 1/4. Para dividir, multiplica por el inverso: 2 × 4/1.' },
          ] },
        ),
        cierre({ areas: ['cnt', 'ef'], cnb: ['cnt:2.2.3'] }, ['Clasifico los tipos de herencia', 'Explico cómo un cruce produce variedad', 'Divido fracciones', 'Conozco las fases del salto'],
          ['Preguntaré en casa qué variedades de maíz o frijol siembra mi familia', 'Observaré qué características comparto con mis familiares', 'Practicaré el salto de longitud con buena técnica']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's22-d2-seres-lugares',
      title: 'Seres que nos benefician, lugares que cuidamos',
      icon: 'Trees',
      minutes: 15,
      day: 2,
      gancho: '¿Has visto unas manchitas verdes o grises pegadas a las piedras o a los árboles? ¿Sabías que son dos seres vivos trabajando juntos?',
      objetivos: ['Ilustrar las ventajas de la simbiosis entre el hongo y el alga', 'Clasificar plantas y animales por sus beneficios', 'Describir cómo se conservan los lugares turísticos y quién los protege', 'Sumar y restar decimales y elaborar una ficha bibliográfica'],
      resumen: [
        'El liquen es una simbiosis: el hongo da protección, humedad y minerales; el alga hace fotosíntesis y produce alimento para ambos.',
        'Plantas y animales nos benefician como comestibles (maíz, gallina), medicinales (manzanilla, sábila), industriales (hule, algodón, lana) y de ornato (orquídeas).',
        'Lugares como Tikal y Antigua Guatemala son Patrimonio de la Humanidad reconocido por la UNESCO. Su conservación depende del Estado, de las ONG, de las comunidades y de cada visitante.',
        'Una ficha bibliográfica registra: autor, título, lugar de edición, editorial y año.',
      ],
      media: {
        id: 's22-d2-patrimonio', kind: 'image', title: 'Lugares que cuidamos', aspect: '16:9',
        alt: 'Collage ilustrado: templo maya entre la selva, calle empedrada con un arco colonial, pozas turquesa de un río y una ciudadela en las montañas de Perú.',
        brief: 'Ilustración en cuatro paneles, estilo acuarela: (1) templo maya entre árboles de selva, rótulo "Tikal, Guatemala - Patrimonio de la Humanidad"; (2) calle empedrada con un arco colonial y volcán al fondo, rótulo "Antigua Guatemala - Patrimonio de la Humanidad"; (3) pozas turquesa escalonadas en un río de selva, rótulo "Semuc Champey - Área protegida"; (4) ciudadela de piedra en montañas, rótulo "Machu Picchu, Perú - Patrimonio de la Humanidad". En cada panel, un ícono de acción de cuidado (basurero, sendero, "no tocar"). Sin turistas identificables.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'ccss'], cnb: ['cnt:1.5.5'], ambito: 'conocer', title: 'Dos seres, un equipo',
            prompt: 'Ya conoces el **mutualismo**. Un caso especial es la **simbiosis** del **liquen**: un hongo y un alga viven tan unidos que parecen un solo ser.',
            media: { id: 's22-d2-liquen', kind: 'image', title: 'Un liquen por dentro', aspect: '4:3',
              alt: 'A la izquierda, un liquen sobre la corteza de un árbol; a la derecha, un corte ampliado con hilos del hongo que envuelven células verdes del alga.',
              brief: 'Ilustración científica en dos partes. Izquierda: fotografía realista de un liquen verde grisáceo sobre la corteza de un árbol de bosque nuboso de Alta Verapaz. Derecha: corte ampliado tipo microscopio con los filamentos del hongo (hifas, color beige) formando una red que envuelve bolitas verdes (algas). Flechas rotuladas: "Hongo: protege, guarda agua y minerales" y "Alga: fotosíntesis, fabrica alimento". Fondo claro.' } },
          { icon: 'Leaf', body: 'En la **simbiosis**, los dos organismos se benefician y dependen uno del otro.', reveal: [
            { icon: 'Shield', front: 'El hongo da…', back: '**Protección** contra el sol y la sequedad, **humedad** y **sales minerales**, y lo sujeta a la roca o la corteza.' },
            { icon: 'Sun', front: 'El alga da…', back: '**Alimento**: con la luz del sol hace **fotosíntesis** y fabrica azúcares para los dos.' },
            { icon: 'Wind', front: 'Un dato curioso', back: 'Muchos líquenes solo crecen donde el **aire es limpio**: son indicadores de la calidad del aire.' },
          ] },
        ),
        S.fill(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.5.5'], ambito: 'conocer',
            prompt: 'Completa la ilustración de las **ventajas** que obtiene cada organismo en el liquen.',
            explain: 'Solos, el alga se secaría sobre una roca y el hongo no tendría alimento. Juntos pueden vivir en lugares difíciles, como piedras y cortezas.' },
          { text: 'El alga hace [[fotosíntesis]] y le da [[alimento]] al hongo.\nEl hongo le da al alga [[humedad]] y sales minerales, y la [[protege]] del sol.\nEsta relación en la que ambos ganan se llama [[simbiosis]].',
            distractors: ['parasitismo', 'digestión'] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt', 'pyd'], cnb: ['cnt:2.1.4'], ambito: 'conocer',
            prompt: 'La biodiversidad nos beneficia de muchas formas. Clasifica cada planta o animal según su **principal beneficio** para el ser humano.',
            explain: 'Muchas especies tienen más de un uso. Conocerlas ayuda a valorarlas, usarlas de forma sostenible y crear proyectos productivos.' },
          { layout: 'grid2', buckets: [
            { id: 'com', label: 'Comestible', icon: 'Utensils', color: 'var(--area-mat)' },
            { id: 'med', label: 'Medicinal', icon: 'Pill', color: 'var(--c-ok)' },
            { id: 'ind', label: 'Industrial', icon: 'Factory', color: 'var(--area-pyd)' },
            { id: 'orn', label: 'Ornato', icon: 'Flower2', color: 'var(--area-art)' },
          ], items: [
            { id: 'b1', text: 'Maíz', icon: 'Wheat', bucket: 'com' },
            { id: 'b2', text: 'Gallina (huevos y carne)', icon: 'Egg', bucket: 'com' },
            { id: 'b3', text: 'Manzanilla', icon: 'Flower', bucket: 'med' },
            { id: 'b4', text: 'Sábila', icon: 'Leaf', bucket: 'med' },
            { id: 'b5', text: 'Árbol de hule', icon: 'TreeDeciduous', bucket: 'ind', feedback: 'Del hule se extrae el látex para fabricar llantas, guantes y otros productos.' },
            { id: 'b6', text: 'Oveja (lana)', icon: 'Shirt', bucket: 'ind' },
            { id: 'b7', text: 'Orquídea monja blanca', icon: 'Flower2', bucket: 'orn', feedback: 'Es la flor nacional de Guatemala y una especie protegida: se admira, no se arranca.' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['ccss', 'l2', 'pyd'], cnb: ['ccss:2.2.3', 'ccss:2.3.3'], ambito: 'conocer', prompt: 'Lee el reportaje del noticiero y responde.' },
          { genre: 'Reportaje', heading: 'Lugares que son de todos', passage:
            'Guatemala tiene lugares que el mundo entero valora. **Tikal**, en Petén, y la ciudad de **Antigua Guatemala** fueron declarados **Patrimonio de la Humanidad** por la **UNESCO**, la organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura. Otros países también tienen lugares así, como **Machu Picchu** en Perú.\n\nEl turismo trae empleo a las comunidades: guías, artesanas, hoteles y comedores. Pero si no se cuida, también trae basura, erosión y daño a los monumentos. En **Semuc Champey**, un área protegida de Alta Verapaz, hay senderos marcados y se pide a los visitantes no dejar basura ni dañar las pozas.\n\nProteger estos lugares es tarea compartida. El Estado, por medio del **CONAP** (Consejo Nacional de Áreas Protegidas), administra las áreas protegidas; las **ONG** (organizaciones no gubernamentales) apoyan con proyectos de conservación; y las comunidades vigilan y enseñan a cuidar. Cada visitante también es responsable.',
            questions: [
              { q: '¿Qué organización internacional declara los lugares Patrimonio de la Humanidad?', options: [
                { id: 'a', text: 'La UNESCO' },
                { id: 'b', text: 'El CONAP' },
                { id: 'c', text: 'Una empresa de turismo' },
              ], correct: 'a' },
              { q: 'Según el texto, ¿qué es una ONG?', options: [
                { id: 'a', text: 'Una organización no gubernamental que apoya proyectos, como la conservación' },
                { id: 'b', text: 'Una oficina del gobierno' },
                { id: 'c', text: 'Un tipo de área protegida' },
              ], correct: 'a' },
              { q: '¿Qué idea defiende el reportaje?', options: [
                { id: 'a', text: 'El turismo beneficia si se aprovecha cuidando los lugares, y esa tarea es de todos' },
                { id: 'b', text: 'Hay que prohibir todo el turismo' },
                { id: 'c', text: 'Solo el gobierno debe cuidar los lugares' },
              ], correct: 'a', why: 'El texto muestra ventajas y riesgos del turismo y termina diciendo que proteger es una tarea compartida.' },
            ] },
        ),
        S.match(
          { fase: 'construir', areas: ['l2', 'ccss'], cnb: ['l2:3.2.3'], ambito: 'conocer',
            prompt: 'Para documentar el reportaje, el equipo analiza las **obras de referencia** de la biblioteca. Une cada necesidad con la obra que más ayuda.',
            explain: 'Cada obra de referencia tiene un propósito. Usar la adecuada ahorra tiempo y da información confiable.' },
          { leftTitle: 'Necesidad', rightTitle: 'Obra de referencia', pairs: [
            { id: 'r1', left: 'Saber qué significa "simbiosis"', leftIcon: 'Search', right: 'Diccionario' },
            { id: 'r2', left: 'Leer la historia completa de Tikal', leftIcon: 'Landmark', right: 'Enciclopedia' },
            { id: 'r3', left: 'Ubicar Semuc Champey en un mapa', leftIcon: 'Map', right: 'Atlas' },
            { id: 'r4', left: 'Conocer datos y fechas de este año', leftIcon: 'CalendarDays', right: 'Almanaque' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'ccss'], cnb: ['mat:4.5.1'], ambito: 'hacer',
            prompt: 'Supongamos que el grado planifica una excursión: el transporte cuesta **Q32.75** por estudiante y la entrada **Q15.50**, pero la municipalidad da un descuento de **Q5.25**. ¿Cuánto paga cada estudiante? Alinea los **puntos decimales** antes de sumar o restar.',
            hint: 'Primero suma 32.75 + 15.50; después resta 5.25.',
            explain: '32.75 + 15.50 = 48.25; 48.25 − 5.25 = 43.00. Cada estudiante paga Q43.00.' },
          { answer: 43, unit: 'quetzales', allowDecimal: true, stimulus: '32.75 + 15.50 − 5.25 = ?', misconceptions: [
            { value: 53.5, msg: 'Sumaste el descuento. Un descuento se resta.' },
            { value: 48.25, msg: 'Ese es el total antes del descuento. Falta restar Q5.25.' },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['l2', 'l1'], cnb: ['l2:3.2.4'], ambito: 'hacer',
            prompt: 'Elabora la **ficha bibliográfica** del libro que usaron. Ordena los datos como se escriben en la ficha. (Libro: _Áreas protegidas de Guatemala_, de Ana López, editado en Guatemala por la Editorial Quetzal en 2020. Datos inventados para practicar.)',
            explain: 'Orden de la ficha: autor (apellido, nombre), título, lugar de edición, editorial y año. Así cualquiera puede encontrar el libro.' },
          { items: [
            { id: 'fb1', text: 'López, Ana' },
            { id: 'fb2', text: 'Áreas protegidas de Guatemala' },
            { id: 'fb3', text: 'Guatemala' },
            { id: 'fb4', text: 'Editorial Quetzal' },
            { id: 'fb5', text: '2020' },
          ], labels: { start: 'Primer dato', end: 'Último dato' } },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.5'], prompt: 'En el liquen, ¿qué ventaja obtiene el **hongo** gracias al alga?' },
          { options: [
            { id: 'a', text: 'Recibe alimento que el alga fabrica con la fotosíntesis' },
            { id: 'b', text: 'Recibe protección contra el sol', feedback: 'Es al revés: el hongo protege al alga.' },
            { id: 'c', text: 'Ninguna, el alga es un parásito', feedback: 'En la simbiosis ambos se benefician; no hay parásito.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.5.1'], prompt: 'Calcula: **25.60 − 8.35 + 4.75**' },
          { answer: 22, allowDecimal: true, stimulus: '25.60 − 8.35 + 4.75 = ?' },
        ),
        cierre({ areas: ['cnt', 'ccss'], cnb: ['cnt:2.1.4', 'ccss:2.3.3'] }, ['Explico las ventajas de la simbiosis del liquen', 'Clasifico seres vivos por sus beneficios', 'Sé quiénes protegen los lugares turísticos', 'Elaboro una ficha bibliográfica'],
          ['Buscaré líquenes cerca de mi casa como señal de aire limpio', 'Cuando visite un lugar turístico, me llevaré mi basura', 'Haré fichas de los libros que consulte']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's22-d3-mil-voces',
      title: 'Mil pueblos, mil voces',
      icon: 'Languages',
      minutes: 15,
      day: 3,
      gancho: '¿Cuántos idiomas crees que se hablan en el mundo? ¿Y en Guatemala?',
      objetivos: ['Investigar la diversidad étnica, cultural y lingüística del mundo', 'Identificar el etnocentrismo, el machismo y el autoritarismo', 'Observar casos de discriminación y explotación', 'Interpretar música de tu comunidad con movimiento y ritmo'],
      resumen: [
        'En el mundo se hablan alrededor de 7,000 idiomas. En Guatemala conviven cuatro pueblos (maya, garífuna, xinka y ladino) y se hablan 25 idiomas: 22 mayas, el garífuna, el xinka y el español.',
        'El etnocentrismo (creer superior la propia cultura), el machismo (creer superiores a los hombres) y el autoritarismo (imponer sin escuchar) niegan al otro o a la otra.',
        'Hay discriminación cuando se trata peor a alguien por su origen, idioma, sexo o condición; hay explotación cuando se abusa del trabajo de alguien.',
        'La música de la comunidad se puede interpretar con arreglos propios y acompañarse con movimientos rítmicos.',
      ],
      media: {
        id: 's22-d3-idiomas', kind: 'diagram', title: 'Idiomas de Guatemala', aspect: '4:3',
        alt: 'Mapa de Guatemala dividido en regiones de colores con los nombres de los idiomas que se hablan en cada una.',
        brief: 'Mapa lingüístico simplificado de Guatemala con regiones de colores y los nombres de los idiomas: K\'iche\', Kaqchikel, Q\'eqchi\', Mam, Poqomchi\', Tz\'utujil, Ixil, Achi, Garífuna (Izabal), Xinka (Santa Rosa y Jutiapa), entre otros, y el español en todo el país. Leyenda: "22 idiomas mayas + garífuna + xinka + español = 25". Usar datos de la Academia de Lenguas Mayas de Guatemala. Letra grande, colores diferenciables para daltonismo.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'l2'], cnb: ['ccss:3.2.3'], ambito: 'conocer', title: 'Un mundo de pueblos',
            prompt: 'La humanidad es **diversa**: hay miles de pueblos con idiomas, costumbres y formas de ver el mundo distintas. Toca cada tarjeta.' },
          { icon: 'Globe', body: 'La diversidad **étnica** (pueblos), **cultural** (costumbres) y **lingüística** (idiomas) es una riqueza de toda la humanidad.', reveal: [
            { icon: 'Languages', front: 'En el mundo', back: 'Se hablan alrededor de **7,000 idiomas**. Muchos están en peligro porque cada vez menos personas los hablan.' },
            { icon: 'MapPin', front: 'En Guatemala', back: '**4 pueblos**: maya, garífuna, xinka y ladino. **25 idiomas**: 22 mayas, garífuna, xinka y español.' },
            { icon: 'Earth', front: 'En otros continentes', back: 'En África hay cientos de pueblos y más de mil idiomas; en Asia, países como la India tienen decenas de idiomas oficiales.' },
            { icon: 'Search', front: '¡Investiga!', back: 'Pregunta en tu familia qué idiomas hablan o hablaban tus abuelos y cómo se saluda en ellos.' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['ccss', 'mat', 'l2'], cnb: ['ccss:3.2.3'], ambito: 'hacer',
            prompt: 'Supongamos que el equipo del noticiero preguntó a **50 familias** de una escuela de Cobán qué idioma hablan en casa: q\'eqchi\' 24, español 16, poqomchi\' 8, otros 2. Construye la gráfica.',
            explain: 'Los datos muestran que en esa escuela conviven varios idiomas. Una escuela que respeta esa diversidad enseña en el idioma de la comunidad y en español.' },
          { categories: [
            { id: 'qeq', label: 'Q\'eqchi\'', icon: 'MessageCircle', color: 'var(--area-cnt)' },
            { id: 'esp', label: 'Español', icon: 'MessageCircle', color: 'var(--area-l1)' },
            { id: 'poq', label: 'Poqomchi\'', icon: 'MessageCircle', color: 'var(--area-art)' },
            { id: 'otr', label: 'Otros', icon: 'MessagesSquare', color: 'var(--c-hint)' },
          ], data: [24, 16, 8, 2], max: 30, step: 2, unit: 'familias', source: 'Encuesta hipotética del noticiero escolar' },
        ),
        S.match(
          { fase: 'construir', areas: ['fc', 'l1'], cnb: ['fc:2.2.2'], ambito: 'convivir',
            prompt: 'Hay actitudes que **niegan al otro o a la otra**: no le reconocen su valor ni sus derechos. Une cada situación con la actitud que muestra.',
            explain: 'Reconocer estas actitudes es el primer paso para cambiarlas por respeto, equidad y diálogo.' },
          { leftTitle: 'Situación', rightTitle: 'Actitud', pairs: [
            { id: 'a1', left: '"Nuestra forma de vestir es la única civilizada"', leftIcon: 'Shirt', right: 'Etnocentrismo' },
            { id: 'a2', left: '"Las niñas no deberían jugar fútbol ni dirigir el grado"', leftIcon: 'Users', right: 'Machismo' },
            { id: 'a3', left: '"Aquí se hace lo que yo digo y nadie opina"', leftIcon: 'Gavel', right: 'Autoritarismo' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['fc', 'ccss'], cnb: ['fc:2.2.1', 'ccss:3.1.3'], ambito: 'convivir',
            prompt: 'El noticiero **observa** situaciones en América y en el mundo. Clasifica cada caso.',
            hint: 'Pregúntate: ¿se trata a alguien peor por quién es, o se abusa de su trabajo?',
            explain: 'La discriminación y la explotación afectan a pueblos indígenas, afrodescendientes, mujeres, migrantes y niñez en muchos países. Reflexionar sobre ellas nos ayuda a no repetirlas.' },
          { buckets: [
            { id: 'dis', label: 'Discriminación o explotación', icon: 'Slash', color: 'var(--area-cnt)' },
            { id: 'jus', label: 'Trato justo', icon: 'Scale', color: 'var(--c-ok)' },
          ], items: [
            { id: 'c1', text: 'No contratan a una joven por usar su traje maya', bucket: 'dis' },
            { id: 'c2', text: 'Un niño trabaja 10 horas al día en una finca y no va a la escuela', bucket: 'dis', feedback: 'Es explotación infantil: le quita su derecho a estudiar y a jugar.' },
            { id: 'c3', text: 'Una clínica atiende en q\'eqchi\' y en español', bucket: 'jus' },
            { id: 'c4', text: 'Pagan menos a una mujer que a un hombre por el mismo trabajo', bucket: 'dis' },
            { id: 'c5', text: 'Un joven afrodescendiente es seguido por guardias solo por su color de piel', bucket: 'dis' },
            { id: 'c6', text: 'La escuela celebra el Día del Pueblo Garífuna con toda la comunidad', bucket: 'jus' },
          ] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l3', 'fc'], cnb: ['l3:1.3.2'], ambito: 'convivir',
            prompt: 'English time! Expresa **necesidades y emociones**. Usa **Where is…?** para preguntar dónde está algo y palabras de sentimientos: _happy, sad, worried, angry, scared_.',
            explain: 'Naming our feelings helps others understand and help us.',
            media: { id: 's22-d3-feelings', kind: 'image', title: 'Feelings', aspect: '16:9',
              alt: 'Cinco niñas y niños ilustrados con expresiones de alegría, tristeza, preocupación, enojo y miedo, cada uno con su palabra en inglés debajo.',
              brief: 'Ilustración en fila de cinco niñas y niños de distintos pueblos de Guatemala, con expresiones faciales claras y exageradas: happy (sonrisa amplia), sad (lágrima), worried (ceño y mano en la barbilla), angry (brazos cruzados), scared (ojos muy abiertos). Palabra en inglés debajo de cada uno en letra grande. Estilo plano, amable, sin estereotipos.' } },
          { text: '[[Where]] is my notebook? I can\'t find it. I am [[worried|sad]].\nMy friend is [[happy]] because she found her book.\nWhen someone laughs at my language, I feel [[sad|angry|worried]].', distractors: ['What', 'hungry'] },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'art'], cnb: ['ef:1.4.7', 'ef:1.4.17', 'art:2.1.3'], ambito: 'hacer',
            prompt: 'Elige un **son** o canción tradicional de tu comunidad (de marimba, de tambor garífuna o la que cante tu familia). Primero **camina** al compás mientras la cantas; luego **corre suave y salta** en los tiempos fuertes; al final, crea un **arreglo propio** con palmas, golpes de pies y chasquidos. Mide tu pulso en cada ronda.' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después de caminar y cantar al compás', exercise: { name: 'Caminar marcando el pulso mientras cantas', icon: 'Music', seconds: 40 } },
            { label: 'Después de correr, saltar y hacer tu arreglo con manos y pies', exercise: { name: 'Correr y saltar al ritmo con palmas y pies', icon: 'Drum', seconds: 45 } },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['art', 'ccss', 'l1'], cnb: ['art:2.1.2', 'art:2.1.3'], ambito: 'hacer',
            prompt: 'El noticiero tendrá una **audición dirigida** (escuchar música con atención y comentarla). Investiga y propón **tres obras**: una de tu comunidad, una de otro pueblo de Guatemala y una de otro país. Para cada una di de dónde es, con qué instrumentos se toca y qué te gustaría que el público escuche.' },
          { minWords: 45, placeholder: '1. De mi comunidad… 2. De otro pueblo de Guatemala… 3. De otro país… En cada una escuchen…',
            model: '1. De mi comunidad: un son de marimba que se toca en la feria de Cobán; escuchen cómo la marimba grande lleva el bajo. 2. De otro pueblo de Guatemala: una punta garífuna de Livingston, con tambores y caracol; escuchen cómo los tambores dialogan entre sí. 3. De otro país: una canción andina de Bolivia con zampoña y charango; escuchen cómo la zampoña imita el viento. Propongo que después de cada obra cantemos el estribillo con un arreglo de palmas.',
            rubric: ['Propone tres obras de orígenes distintos', 'Indica los instrumentos de cada una', 'Dice qué escuchar con atención', 'Propone un arreglo o forma de participar'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.2.2'], prompt: 'Un maestro dice: "Las niñas no pueden ser presidentas del gobierno escolar". ¿Qué actitud muestra?' },
          { options: [
            { id: 'a', text: 'Machismo' },
            { id: 'b', text: 'Etnocentrismo', feedback: 'El etnocentrismo tiene que ver con creer superior la propia cultura, no con el sexo.' },
            { id: 'c', text: 'Solidaridad', feedback: 'La frase niega derechos a las niñas: no es solidaria.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ccss', 'fc'], cnb: ['ccss:3.2.3', 'ccss:3.1.3', 'fc:2.2.1'], prompt: 'Boleto de salida: ¿verdadero o falso?' },
          { statements: [
            { text: 'En Guatemala se hablan 25 idiomas.', answer: true },
            { text: 'En el mundo se hablan solo unos 100 idiomas.', answer: false, why: 'Se hablan alrededor de 7,000 idiomas.' },
            { text: 'Pagar menos a una mujer por el mismo trabajo es discriminación.', answer: true },
            { text: 'La discriminación solo ocurre en Guatemala.', answer: false, why: 'Ocurre en muchos países de América y del mundo.' },
          ] },
        ),
        cierre({ areas: ['fc', 'ccss'], cnb: ['ccss:3.1.3'] }, ['Explico la diversidad de pueblos e idiomas del mundo', 'Reconozco el etnocentrismo, el machismo y el autoritarismo', 'Identifico casos de discriminación y explotación', 'Interpreto música de mi comunidad con movimiento'],
          ['Aprenderé a saludar en un idioma de Guatemala distinto al mío', 'Defenderé a quien sea discriminado', 'Compartiré una canción de mi familia con mi grado']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's22-d4-noticiero',
      title: 'Noticiero y mesa redonda',
      icon: 'Newspaper',
      minutes: 15,
      day: 4,
      gancho: '¿Qué diferencia hay entre contar una noticia y contar un cuento? ¿Y cómo se discute un problema sin pelear?',
      objetivos: ['Comparar la estructura del texto periodístico con otros textos', 'Aplicar técnicas para participar en una mesa redonda', 'Mantener contacto visual y dominar el tema al exponer', 'Argumentar sobre problemas de la comunidad y proponer soluciones'],
      resumen: [
        'La noticia tiene titular, entrada (lo más importante: qué, quién, cuándo, dónde) y cuerpo (detalles: cómo y por qué). Va de lo más importante a lo menos importante (pirámide invertida).',
        'Un cuento sigue inicio, nudo y desenlace; un instructivo tiene materiales y pasos numerados.',
        'En una mesa redonda: se investiga y documenta el tema, se escribe un documento con los puntos de vista, se presentan los argumentos y se respeta la opinión de los demás.',
        'Al exponer, dominar el tema y mirar a la audiencia genera confianza.',
      ],
      media: {
        id: 's22-d4-mesa', kind: 'video', title: 'Así funciona una mesa redonda', aspect: '16:9', duration: 60,
        alt: 'Cuatro estudiantes sentados en semicírculo con una moderadora; cada uno presenta su punto de vista mientras el público escucha.',
        brief: 'Video (dramatización con estudiantes, sin rostros identificables en primer plano, o animación 2D) de 60 s. Una moderadora presenta el tema "¿Cómo mejorar la calidad de vida en nuestra comunidad?". Cuatro participantes (niñas y niños de distintos pueblos) hablan por turnos, cada uno con una ficha de apoyo; miran al público. Sobreimpresos con las reglas: "1. Investigar", "2. Escribir tu punto de vista", "3. Presentar argumentos", "4. Respetar opiniones". Al final, la moderadora resume conclusiones. Reloj de turnos visible.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1', 'ccss'], cnb: ['l1:3.1.2'], ambito: 'conocer', title: 'La pirámide de la noticia',
            prompt: 'El noticiero escolar escribe **noticias**. Una noticia tiene una estructura especial. Toca cada parte.',
            media: { id: 's22-d4-piramide', kind: 'diagram', title: 'La pirámide invertida', aspect: '3:4',
              alt: 'Triángulo invertido dividido en tres franjas: titular arriba, entrada en medio y cuerpo abajo, con las seis preguntas de la noticia.',
              brief: 'Diagrama vertical de un triángulo con la punta hacia abajo, en tres franjas: arriba "TITULAR" (franja estrecha, grande, en negrita: "Estudiantes limpian el río Cahabón"), en medio "ENTRADA: ¿qué? ¿quién? ¿cuándo? ¿dónde?" y abajo "CUERPO: ¿cómo? ¿por qué? detalles". Flecha lateral: "más importante → menos importante". Íconos pequeños para cada pregunta. Colores del área de Comunicación y Lenguaje.' } },
          { icon: 'Newspaper', body: 'La noticia cuenta **hechos reales y recientes**. Lo más importante va **primero**, por si el lector no termina de leer.', reveal: [
            { icon: 'Megaphone', front: 'Titular', back: 'Frase corta que resume la noticia y atrae al lector.' },
            { icon: 'Target', front: 'Entrada', back: 'Primer párrafo: responde **qué**, **quién**, **cuándo** y **dónde**.' },
            { icon: 'FileText', front: 'Cuerpo', back: 'Amplía con detalles: **cómo** y **por qué**, testimonios y datos.' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'ccss', 'cnt'], cnb: ['l1:3.1.2', 'ccss:2.2.3'], ambito: 'conocer', prompt: 'Lee la noticia del noticiero escolar y responde.' },
          { genre: 'Noticia', heading: 'Estudiantes de Cobán limpian la orilla de un río', passage:
            '**Cobán, Alta Verapaz.** — El sábado pasado, 40 estudiantes de sexto primaria de una escuela oficial recogieron basura en la orilla del río que pasa cerca de su comunidad, junto a vecinos y guardarrecursos.\n\nLa actividad se organizó porque en las últimas semanas aumentó la basura que dejan algunos visitantes. "Si el río está sucio, los turistas dejan de venir y las familias que venden comida pierden su ingreso", explicó una estudiante de 12 años.\n\nLos jóvenes separaron el plástico para reciclar y colocaron rótulos en q\'eqchi\' y en español. El grupo planea repetir la jornada cada mes.',
            questions: [
              { q: '¿Qué información da la entrada (primer párrafo)?', options: [
                { id: 'a', text: 'Qué pasó, quiénes participaron, cuándo y dónde' },
                { id: 'b', text: 'El final de un cuento' },
                { id: 'c', text: 'Los pasos de una receta' },
              ], correct: 'a' },
              { q: '¿Por qué se organizó la limpieza?', options: [
                { id: 'a', text: 'Porque aumentó la basura y eso afecta al río y al turismo de la comunidad' },
                { id: 'b', text: 'Porque era día de fiesta' },
                { id: 'c', text: 'Porque no tenían clases' },
              ], correct: 'a' },
              { q: '¿En qué se diferencia esta noticia de un cuento?', options: [
                { id: 'a', text: 'Cuenta hechos reales con lo más importante al inicio, no un inicio-nudo-desenlace inventado' },
                { id: 'b', text: 'No tiene título' },
                { id: 'c', text: 'Tiene personajes mágicos' },
              ], correct: 'a', why: 'La noticia informa hechos reales en pirámide invertida; el cuento narra una historia imaginaria con inicio, nudo y desenlace.' },
            ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l1'], cnb: ['l1:3.1.2'], ambito: 'conocer',
            prompt: 'Compara la estructura de distintos textos de los medios. ¿A qué tipo pertenece cada elemento?',
            explain: 'Cada tipo de texto se organiza según su propósito: informar (noticia), entretener (cuento) o dar instrucciones (instructivo).' },
          { buckets: [
            { id: 'not', label: 'Noticia', icon: 'Newspaper', color: 'var(--area-l1)' },
            { id: 'cue', label: 'Cuento', icon: 'BookOpen', color: 'var(--area-art)' },
            { id: 'ins', label: 'Instructivo', icon: 'ListOrdered', color: 'var(--area-pyd)' },
          ], items: [
            { id: 't1', text: 'Titular y entrada', bucket: 'not' },
            { id: 't2', text: 'Hechos reales y recientes', bucket: 'not' },
            { id: 't3', text: 'Inicio, nudo y desenlace', bucket: 'cue' },
            { id: 't4', text: '"Había una vez…"', bucket: 'cue' },
            { id: 't5', text: 'Lista de materiales', bucket: 'ins' },
            { id: 't6', text: 'Pasos numerados', bucket: 'ins' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['l1', 'l2'], cnb: ['l1:2.3.3'], ambito: 'convivir',
            prompt: 'El grado hará una **mesa redonda**: "¿Qué impide una buena calidad de vida en nuestra comunidad?". Ordena los pasos para participar.',
            explain: 'Una mesa redonda no es una pelea: cada quien presenta su punto de vista documentado y escucha con respeto.' },
          { items: [
            { id: 'p1', text: 'Investigar y documentar el tema' },
            { id: 'p2', text: 'Escribir un documento con mis puntos de vista' },
            { id: 'p3', text: 'Presentar mis argumentos en mi turno' },
            { id: 'p4', text: 'Escuchar y respetar la opinión de los demás' },
            { id: 'p5', text: 'Construir conclusiones con la moderadora' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1', 'l2'], cnb: ['l1:2.2.3', 'l1:2.1.1'], ambito: 'convivir',
            prompt: 'Durante tu turno en la mesa redonda, ¿qué muestra que **dominas el tema** y mantienes **contacto visual**? Elige todas las correctas.',
            explain: 'Dominar el tema te permite hablar sin leer todo; el contacto visual hace que la audiencia se sienta incluida.' },
          { multiple: true, options: [
            { id: 'a', text: 'Mirar a distintas personas del público mientras hablo', icon: 'Eye' },
            { id: 'b', text: 'Explicar con mis palabras y usar la ficha solo como apoyo', icon: 'FileText' },
            { id: 'c', text: 'Dar un dato de mi investigación y decir de dónde lo obtuve', icon: 'BookOpen' },
            { id: 'd', text: 'Leer todo el papel sin levantar la vista', icon: 'EyeOff', feedback: 'Leer todo sin mirar al público rompe el contacto visual y muestra que no dominas el tema.' },
            { id: 'e', text: 'Cambiar de tema cuando no sé qué decir', icon: 'RefreshCw', feedback: 'Hay que mantenerse fiel al tema tratado.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['l1', 'fc'], cnb: ['l1:2.3.3'], ambito: 'convivir', prompt: 'En la mesa redonda, ¿qué harías?' },
          { scene: { icon: 'MessagesSquare', text: 'Ingrid opina que el mayor problema es la falta de agua potable. **Josué** la interrumpe: "¡Eso es mentira! El problema es la basura, y punto".' }, options: [
            { id: 'a', icon: 'Megaphone', text: 'Interrumpir también para ganar la discusión', consequence: 'Todos hablan a la vez y nadie escucha. La mesa redonda se convierte en pelea.', values: ['Autoritarismo'], constructive: false },
            { id: 'b', icon: 'Hand', text: 'Pedir a la moderadora que respete los turnos y proponer que ambos presenten sus datos', consequence: 'Ingrid y Josué presentan sus datos. Concluyen que el agua y la basura están relacionadas.', values: ['Respeto', 'Diálogo', 'Escucha'], constructive: true },
            { id: 'c', icon: 'VolumeX', text: 'Callarme y no volver a participar', consequence: 'La mesa pierde tu punto de vista.', values: ['Retraimiento'], constructive: false },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['pyd', 'l1', 'ccss'], cnb: ['pyd:2.1.2', 'l1:2.1.1'], ambito: 'emprender',
            prompt: 'Escribe tu **intervención para la mesa redonda**: nombra una condición que obstaculiza la calidad de vida en tu comunidad, da **dos argumentos** (razones o datos) y propone **una alternativa de solución** realista.' },
          { minWords: 45, placeholder: 'Considero que un problema de mi comunidad es… Primero, porque… Además… Propongo…',
            model: 'Considero que un problema de mi comunidad es la falta de agua potable en las casas de la parte alta. Primero, porque las familias gastan horas acarreando agua, y ese tiempo lo podrían usar para estudiar o trabajar. Además, según el centro de salud, las diarreas aumentan cuando se toma agua sin hervir. Propongo que el COCODE y la escuela organicen una campaña para hervir o clorar el agua y que se gestione con la municipalidad un tanque comunitario.',
            rubric: ['Nombra una condición concreta de su comunidad', 'Presenta dos argumentos o datos', 'Propone una alternativa realista', 'Se mantiene fiel al tema'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.1.2'], prompt: '¿Qué parte de la noticia responde qué, quién, cuándo y dónde?' },
          { options: [
            { id: 'a', text: 'La entrada' },
            { id: 'b', text: 'El desenlace', feedback: 'El desenlace es parte del cuento, no de la noticia.' },
            { id: 'c', text: 'La lista de materiales', feedback: 'La lista de materiales es parte del instructivo.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['l1', 'pyd'], cnb: ['l1:2.3.3', 'l1:2.2.3', 'pyd:2.1.2'], prompt: 'Boleto de salida: ¿verdadero o falso?' },
          { statements: [
            { text: 'En una mesa redonda se investiga el tema antes de participar.', answer: true },
            { text: 'Para ganar en una mesa redonda hay que interrumpir a los demás.', answer: false, why: 'Se respetan los turnos y las opiniones.' },
            { text: 'El contacto visual ayuda a que la audiencia se sienta incluida.', answer: true },
            { text: 'Un buen argumento solo nombra el problema, sin proponer soluciones.', answer: false, why: 'Además de argumentar, conviene proponer alternativas de solución.' },
          ] },
        ),
        cierre({ areas: ['l1', 'pyd'], cnb: ['pyd:2.1.2'] }, ['Comparo la noticia con otros tipos de texto', 'Sé participar en una mesa redonda', 'Mantengo contacto visual y domino mi tema', 'Propongo soluciones a problemas de mi comunidad'],
          ['Leeré una noticia y buscaré su titular, entrada y cuerpo', 'Respetaré los turnos al conversar', 'Compartiré mi propuesta con mi familia o el COCODE']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's22-d5-reto',
      title: 'Reto de la semana 22',
      icon: 'Trophy',
      minutes: 13,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Voz de la diversidad" (70 % o más)'],
      resumen: ['Superé el reto de la semana 22: herencia, seres útiles, diversidad de los pueblos y noticiero.'],
      media: {
        id: 's22-d5-reto', kind: 'image', title: 'Medalla Voz de la diversidad', aspect: '1:1',
        alt: 'Medalla dorada con un micrófono rodeado de una mazorca de colores y hojas.',
        brief: 'Ilustración de medalla circular dorada con relieve: un micrófono de noticiero en el centro, rodeado por una mazorca con granos de cuatro colores (blanco, amarillo, negro, rojo) y hojas de liquen estilizadas. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024.',
      },
      steps: [
        S.match({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.4.4'], prompt: 'Une cada ejemplo con su tipo de herencia.' },
          { pairs: [{ id: 'a', left: 'Tipo de sangre AB', right: 'Codominante' }, { id: 'b', left: 'Albinismo', right: 'Recesiva' }, { id: 'c', left: 'Daltonismo', right: 'Ligada al sexo' }] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.2.3'], prompt: '¿Por qué aparece una mazorca "pinta" en una milpa de maíz blanco?' },
          { options: [{ id: 'a', text: 'Porque el viento trajo polen de una milpa vecina de otro color' }, { id: 'b', text: 'Porque le cayó pintura' }, { id: 'c', text: 'Porque se regó con agua de lluvia' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.1.4'], prompt: 'Clasifica según su principal beneficio.' },
          { buckets: [{ id: 'm', label: 'Medicinal', icon: 'Pill' }, { id: 'i', label: 'Industrial', icon: 'Factory' }, { id: 'c', label: 'Comestible', icon: 'Utensils' }],
            items: [{ id: 'a', text: 'Algodón', bucket: 'i' }, { id: 'b', text: 'Manzanilla', bucket: 'm' }, { id: 'c', text: 'Frijol', bucket: 'c' }, { id: 'd', text: 'Hule', bucket: 'i' }] }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:2.2.3', 'ccss:2.3.3'], prompt: '¿Cuál de estos lugares de Guatemala es Patrimonio de la Humanidad reconocido por la UNESCO?' },
          { options: [{ id: 'a', text: 'Tikal' }, { id: 'b', text: 'El estadio de mi municipio' }, { id: 'c', text: 'Un centro comercial' }], correct: ['a'] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.4.4'], prompt: 'Calcula **5/6 ÷ 5/12**.' },
          { answer: 2, allowFraction: true, stimulus: '5/6 ÷ 5/12 = ?' }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.5.1'], prompt: 'Supongamos que compras una libra de frijol en Q7.25 y una de arroz en Q5.50. Pagas con Q20.00. ¿Cuánto te dan de vuelto?' },
          { answer: 7.25, allowDecimal: true, unit: 'quetzales', stimulus: '20.00 − (7.25 + 5.50) = ?' }),
        S.order({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:3.2.4'], prompt: 'Ordena los datos de una **ficha bibliográfica** como se escriben. (Libro inventado para practicar.)' },
          { items: [{ id: 'a', text: 'Coc, Marta' }, { id: 'b', text: 'Idiomas de Alta Verapaz' }, { id: 'c', text: 'Cobán' }, { id: 'd', text: 'Editorial Verapaz' }, { id: 'e', text: '2019' }], labels: { start: 'Primer dato', end: 'Último dato' } }),
        S.tf({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.3.1', 'l3:1.3.2'], prompt: 'True or false?' },
          { statements: [{ text: 'Cats catch mice.', answer: true }, { text: 'Fish live in trees.', answer: false }, { text: '"Scared" is a feeling.', answer: true }] }),
        S.match({ fase: 'comprobar', areas: ['fc', 'ccss'], cnb: ['fc:2.2.2', 'ccss:3.2.3'], prompt: 'Une cada concepto con su significado.' },
          { pairs: [{ id: 'a', left: 'Autoritarismo', right: 'Imponer decisiones sin escuchar a nadie' }, { id: 'b', left: 'Machismo', right: 'Creer que los hombres valen más que las mujeres' }, { id: 'c', left: 'Diversidad lingüística', right: 'Existencia de muchos idiomas' }] }),
        S.tf({ fase: 'comprobar', areas: ['ef', 'art', 'l1'], cnb: ['ef:1.3.11', 'art:2.1.2', 'l1:2.2.3', 'l1:3.1.2'], prompt: '¿Verdadero o falso?' },
          { statements: [{ text: 'La fase de vuelo ocurre antes del despegue.', answer: false }, { text: 'En una audición dirigida se escucha música con atención y luego se comenta.', answer: true }, { text: 'Mirar al público mientras hablas es contacto visual.', answer: true }, { text: 'La entrada de una noticia responde qué, quién, cuándo y dónde.', answer: true }] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 3 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.4.4'], prompt: '¿Qué tipo de herencia se da cuando una característica solo aparece si se hereda de ambos progenitores?' },
      { options: [{ id: 'a', text: 'Recesiva' }, { id: 'b', text: 'Dominante' }, { id: 'c', text: 'Codominante' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.5'], prompt: '¿Qué organismos forman un liquen?' },
      { options: [{ id: 'a', text: 'Un hongo y un alga' }, { id: 'b', text: 'Un árbol y un pájaro' }, { id: 'c', text: 'Dos bacterias' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.2.3'], prompt: 'Al cruzar gallinas de dos razas distintas, los pollitos…' },
      { options: [{ id: 'a', text: 'Combinan características de ambos padres' }, { id: 'b', text: 'Son idénticos a la madre' }, { id: 'c', text: 'No heredan nada' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:2.3.3'], prompt: 'En Guatemala, ¿qué institución del Estado administra las áreas protegidas?' },
      { options: [{ id: 'a', text: 'El CONAP' }, { id: 'b', text: 'La UNESCO' }, { id: 'c', text: 'Una ONG extranjera' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.3'], prompt: '¿Cuáles son los cuatro pueblos de Guatemala?' },
      { options: [{ id: 'a', text: 'Maya, garífuna, xinka y ladino' }, { id: 'b', text: 'Maya, azteca, inca y ladino' }, { id: 'c', text: 'Solo maya y ladino' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.4.4'], prompt: 'Reparte **1/2 libra** de pepitoria entre **3** bolsitas iguales. ¿Qué fracción de libra lleva cada bolsita?' },
      { answer: 1 / 6, allowFraction: true, allowDecimal: true, stimulus: '1/2 ÷ 3 = ?' }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.5.1'], prompt: 'Calcula: **12.40 + 3.85 − 6.25**' },
      { answer: 10, allowDecimal: true, stimulus: '12.40 + 3.85 − 6.25 = ?' }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.3.3', 'l1:2.1.1'], prompt: '¿Cuál es el primer paso para participar en un debate o mesa redonda?' },
      { options: [{ id: 'a', text: 'Investigar y documentar el tema' }, { id: 'b', text: 'Interrumpir a los demás' }, { id: 'c', text: 'Improvisar sin preparar nada' }], correct: ['a'] }),
    S.match({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:3.2.3'], prompt: 'Une cada obra de referencia con lo que contiene.' },
      { pairs: [{ id: 'a', left: 'Atlas', right: 'Mapas' }, { id: 'b', left: 'Diccionario', right: 'Significado de las palabras' }, { id: 'c', left: 'Enciclopedia', right: 'Información amplia sobre muchos temas' }] }),
    S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.3.2'], prompt: 'Complete in English.' },
      { text: '[[Where]] is my eraser? I can\'t find it. I am [[worried]].', distractors: ['Who', 'happy'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.2.1', 'fc:2.2.2'], prompt: '"No te contrato porque hablas otro idioma." Esta situación es un caso de…' },
      { options: [{ id: 'a', text: 'Discriminación' }, { id: 'b', text: 'Solidaridad' }, { id: 'c', text: 'Equidad' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.11'], prompt: 'En el salto de altura estilo **tijereta**, ¿cómo pasan las piernas sobre la cuerda?' },
      { options: [{ id: 'a', text: 'Una tras otra, como unas tijeras' }, { id: 'b', text: 'Las dos juntas de espaldas' }, { id: 'c', text: 'Sin despegar del suelo' }], correct: ['a'] }),
  ],
});
