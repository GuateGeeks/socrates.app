/**
 * Productividad y Desarrollo · Unidad 1 · Semana 4 — Semillas de vida y comunidad.
 * Analizar los fenómenos naturales (clima según la altura, lluvias y estaciones, suelos,
 * pendiente, heladas, canícula) para decidir qué cultivos y otras formas de producción
 * son posibles en un lugar.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's04-pyd-1',
    title: 'Leer la naturaleza antes de sembrar',
    icon: 'CloudSun',
    minutes: 15,
    gancho: '¿Por qué en Totonicapán se cosechan papas y duraznos, pero no bananos, y en Escuintla crece la caña pero no el trigo?',
    objetivos: [
      'Explicar cómo el clima, la altura, las lluvias y el suelo deciden qué se puede cultivar',
      'Relacionar las tierras caliente, templada y fría con sus cultivos',
      'Analizar un terreno y proponer cultivos y cuidados adecuados',
    ],
    resumen: [
      'Antes de producir se analiza la naturaleza: temperatura (depende mucho de la altura), lluvias y estaciones, tipo de suelo, pendiente del terreno y fenómenos como heladas, canícula o tormentas.',
      'En Guatemala, a grandes rasgos: tierra caliente (costas y tierras bajas) para caña, banano, palma y mango; tierra templada (laderas y valles medios) para café, cítricos y aguacate; tierra fría (altiplano alto) para papa, trigo, haba, hortalizas y frutas como manzana y durazno. El maíz y el frijol se siembran en casi todo el país con variedades distintas.',
      'La época lluviosa va aproximadamente de mayo a octubre y la seca de noviembre a abril; a mitad de las lluvias suele venir la canícula (unas semanas secas). Sin riego, se siembra al empezar las lluvias.',
      'Suelo arenoso: el agua se va rápido. Arcilloso: se encharca y se endurece. Franco: mezcla equilibrada, el mejor para la mayoría de cultivos. En laderas se usan terrazas y curvas a nivel.',
    ],
    media: {
      id: 's04-pyd-1-pisos', kind: 'diagram', title: 'De la costa al altiplano', aspect: '16:9',
      alt: 'Corte de una montaña de Guatemala desde la costa hasta el altiplano, con tres franjas (caliente, templada y fría) y los cultivos de cada una.',
      brief: 'Diagrama en corte lateral de un paisaje guatemalteco: a la izquierda el mar y la costa sur, subiendo hacia volcanes y el altiplano a la derecha. Tres franjas de color: "Tierra caliente" (naranja, abajo) con caña, banano y palma; "Tierra templada" (verde, en medio) con cafetales bajo sombra, naranjos y aguacates; "Tierra fría" (azul, arriba) con papa, trigo, haba y árboles de durazno, y un pequeño símbolo de helada. Un termómetro a un lado que baja al subir. Milpa dibujada en las tres franjas. Nota al pie: "A más altura, menos temperatura". Sin cifras exactas de altura.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:2.5.3'], ambito: 'conocer',
          prompt: '¿Por qué crees que en el altiplano de Totonicapán **no** se cultivan bananos?',
          explain: 'El banano necesita **calor todo el año**. En el altiplano alto hace frío y en algunos meses caen **heladas**, que queman las hojas de las plantas de tierra caliente.' },
        { options: [
          { id: 'a', text: 'Porque hace frío y puede haber heladas', icon: 'Snowflake' },
          { id: 'b', text: 'Porque a la gente de allí no le gustan', icon: 'Smile', feedback: 'El gusto no es la razón: el banano simplemente no crece bien con frío.' },
          { id: 'c', text: 'Porque llueve demasiado', icon: 'CloudRain', feedback: 'El banano necesita bastante agua; el problema en el altiplano es la temperatura.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:2.5.3'], ambito: 'conocer', title: 'Cinco preguntas a la naturaleza',
          prompt: 'Quien produce **analiza la naturaleza** antes de decidir qué sembrar o criar. Toca cada pregunta.' },
        { icon: 'Search', body: 'Sembrar sin analizar es arriesgar la semilla, el trabajo y el dinero de la familia.', reveal: [
          { icon: 'Thermometer', front: '1. ¿Qué temperatura hay?', back: 'Depende sobre todo de la **altura**: a más altura, más frío. Cada cultivo tiene su rango de temperatura.' },
          { icon: 'CloudRain', front: '2. ¿Cuándo y cuánto llueve?', back: 'Hay una **época lluviosa** (aprox. mayo a octubre) y una **seca** (noviembre a abril). Sin riego, se depende de la lluvia.' },
          { icon: 'Shovel', front: '3. ¿Cómo es el suelo?', back: '**Arenoso** (el agua se va rápido), **arcilloso** (se encharca y se endurece) o **franco** (equilibrado, el mejor para casi todo).' },
          { icon: 'Mountain', front: '4. ¿Es plano o ladera?', back: 'En **laderas**, la lluvia arrastra el suelo. Hay que hacer **terrazas** o **curvas a nivel**.' },
          { icon: 'Snowflake', front: '5. ¿Qué fenómenos hay?', back: '**Heladas** en el altiplano (sobre todo entre diciembre y febrero), **canícula** (semanas secas a mitad de las lluvias), tormentas y huracanes.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:2.5.3'], ambito: 'conocer', title: 'Tierra caliente, templada y fría',
          prompt: 'En Guatemala, las familias campesinas hablan de **tres tipos de tierra** según su clima. Toca cada una.' },
        { icon: 'Thermometer', body: 'El **maíz** y el **frijol** se siembran en casi todo el país: cada región tiene sus propias **variedades** adaptadas a su clima.', reveal: [
          { icon: 'Sun', front: 'Tierra caliente', back: 'Costas y tierras bajas (costa sur, oriente bajo, Petén). Calor todo el año. Cultivos: **caña de azúcar, banano, palma, mango, ajonjolí**.' },
          { icon: 'CloudSun', front: 'Tierra templada', back: 'Laderas y valles de altura media (bocacosta, parte de las Verapaces y del centro). Clima agradable. Cultivos: **café, cítricos, aguacate**.' },
          { icon: 'Snowflake', front: 'Tierra fría', back: 'Altiplano alto (Totonicapán, partes de Quetzaltenango, San Marcos y Huehuetenango). Noches frías y heladas. Cultivos: **papa, trigo, haba, brócoli, manzana, durazno**.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:2.5.3'], prompt: '¿En qué tipo de tierra crece mejor cada cultivo?',
          hint: 'Los cultivos que resisten frío y heladas van en tierra fría; los que necesitan calor todo el año, en tierra caliente; el café está en medio.',
          explain: 'Cada cultivo se adapta a un rango de temperatura. Por eso el tipo de tierra decide qué conviene producir.' },
        { buckets: [
          { id: 'cal', label: 'Tierra caliente', icon: 'Sun', color: 'var(--c-maiz-strong)' },
          { id: 'tem', label: 'Tierra templada', icon: 'CloudSun', color: 'var(--c-ok)' },
          { id: 'fri', label: 'Tierra fría', icon: 'Snowflake', color: 'var(--area-cnt)' },
        ], items: [
          { id: 'k1', text: 'Caña de azúcar', bucket: 'cal' },
          { id: 'k2', text: 'Papa', bucket: 'fri' },
          { id: 'k3', text: 'Café', bucket: 'tem' },
          { id: 'k4', text: 'Banano', bucket: 'cal' },
          { id: 'k5', text: 'Trigo', bucket: 'fri' },
          { id: 'k6', text: 'Haba', bucket: 'fri' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:2.5.3'], ambito: 'conocer', title: 'El calendario de la lluvia y el cuidado del suelo',
          prompt: 'Además del clima, hay que saber **cuándo** sembrar y **cómo** cuidar el suelo. Toca cada tarjeta.',
          media: { id: 's04-pyd-1-calendario', kind: 'animation', title: 'Un año de lluvia en la milpa', aspect: '16:9', duration: 45,
            alt: 'Un calendario circular de 12 meses se colorea de azul en la época lluviosa y amarillo en la seca; una milpa crece desde la siembra en mayo hasta la cosecha.',
            brief: 'Animación 2D de 45 s. Calendario circular con los 12 meses. Noviembre a abril en amarillo con sol ("época seca"); mayo a octubre en azul con nubes ("época lluviosa"). En mayo aparece una mano que siembra maíz y frijol; la milpa crece mes a mes; en julio-agosto una franja más clara con el texto "canícula: semanas secas". Al final, cosecha. Un inserto muestra una ladera con terrazas que detienen el agua. Nota en pantalla: "Las fechas cambian un poco según la región". Narración en español, subtítulos.' } },
        { icon: 'Calendar', body: 'Las fechas pueden cambiar un poco en cada región: por eso se escucha también a los agricultores con experiencia.', reveal: [
          { icon: 'CloudRain', front: 'Sembrar con las lluvias', back: 'Sin riego, se siembra **al empezar las lluvias** (en muchas regiones, alrededor de **mayo**), para que la semilla tenga humedad y germine.' },
          { icon: 'Sun', front: 'La canícula', back: 'A mitad de la época lluviosa (julio-agosto) suelen venir **semanas secas**. Conviene guardar agua de lluvia y usar variedades que la resistan.' },
          { icon: 'Layers', front: 'Mejorar el suelo', back: 'El **abono orgánico** (restos de cosecha, estiércol curado) mejora suelos arenosos y arcillosos: retiene humedad y nutrientes.' },
          { icon: 'Mountain', front: 'Cuidar las laderas', back: '**Terrazas**, **curvas a nivel** y **barreras vivas** (hileras de plantas) frenan el agua y evitan que se lleve el suelo.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:2.5.3'], ambito: 'hacer', title: 'Ejemplo resuelto: analizar un terreno',
          prompt: 'Mira cómo doña Isabel usa las cinco preguntas para decidir qué sembrar.' },
        { icon: 'Sprout', problem: 'Doña Isabel tiene un terreno en Chimaltenango, en tierra **templada a fría**, **sin riego**, en **ladera**, con suelo **franco**. En diciembre a veces cae helada. ¿Qué siembra, cuándo y cómo?',
          steps: [
            { text: '**Temperatura:** clima fresco con posible helada en diciembre: debe cosechar **antes** de las heladas.' },
            { text: '**Lluvia:** sin riego, depende de la lluvia: siembra al **empezar las lluvias** (mayo).' },
            { text: '**Suelo:** franco, bueno para la **milpa** (maíz, frijol y ayote juntos) y para hortalizas.' },
            { text: '**Pendiente:** ladera: hará **curvas a nivel** con barreras vivas para que la lluvia no se lleve el suelo.', why: 'Sin estas obras, cada aguacero arrastra la capa fértil del suelo.' },
            { text: '**Fenómenos:** para la canícula, guardará agua de lluvia en toneles para sus hortalizas.' },
          ],
          answer: 'Doña Isabel sembrará **milpa en mayo**, con **curvas a nivel**, y cosechará antes de las heladas. Analizar la naturaleza le ayuda a **no perder** su cosecha.',
          tip: 'Temperatura → lluvia → suelo → pendiente → fenómenos → decisión.' },
      ),
      S.slider(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:2.5.3'], ambito: 'emprender',
          prompt: 'Don Tomás tiene un terreno **sin riego** en una región donde las lluvias empiezan como en la mayor parte del país. Mueve el calendario al **mes** en el que conviene sembrar su milpa.',
          explain: 'Sin riego, la semilla necesita humedad para germinar: por eso se siembra al empezar las lluvias, alrededor de mayo (en algunas zonas se adelanta o se atrasa un poco).' },
        { min: 1, max: 12, step: 1, answer: 5, tolerance: 1, start: 1, visual: 'line', display: 'number', unit: 'mes', ticks: [
          { value: 1, label: 'Ene' }, { value: 3, label: 'Mar' }, { value: 5, label: 'May' }, { value: 7, label: 'Jul' }, { value: 9, label: 'Sep' }, { value: 11, label: 'Nov' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:2.5.3'], ambito: 'hacer', prompt: 'Une cada **fenómeno o condición** de la naturaleza con la **medida** que ayuda a producir a pesar de ella.',
          explain: 'Conocer los fenómenos permite prevenir pérdidas: cada uno tiene una respuesta adecuada.' },
        { leftTitle: 'Fenómeno o condición', rightTitle: 'Medida', pairs: [
          { id: 'm1', left: 'Heladas en diciembre', leftIcon: 'Snowflake', right: 'Cosechar antes o sembrar cultivos que resisten el frío' },
          { id: 'm2', left: 'Canícula a mitad de las lluvias', leftIcon: 'Sun', right: 'Guardar agua de lluvia y usar variedades resistentes a la sequía' },
          { id: 'm3', left: 'Aguaceros fuertes en una ladera', leftIcon: 'CloudRain', right: 'Hacer terrazas o curvas a nivel' },
          { id: 'm4', left: 'Suelo arenoso que no guarda agua', leftIcon: 'Shovel', right: 'Agregar abono orgánico' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:2.5.3'], ambito: 'emprender',
          prompt: 'No todo es sembrar. Una comunidad de **tierra caliente** junto a un lago, con mucho sol y bosque cercano, quiere **otra forma de producir** además de sus cultivos. ¿Qué opción aprovecha mejor su naturaleza **sin dañarla**?',
          explain: 'Analizar la naturaleza también sirve para elegir otras actividades: la apicultura aprovecha las flores del bosque (y las abejas ayudan a polinizar), y el turismo comunitario vive de la belleza del lago.' },
        { options: [
          { id: 'a', text: 'Criar abejas para miel y ofrecer turismo comunitario en el lago' },
          { id: 'b', text: 'Sembrar trigo y papa', feedback: 'El trigo y la papa necesitan clima frío; en tierra caliente no se darían bien.' },
          { id: 'c', text: 'Talar el bosque para sembrar más', feedback: 'Talar el bosque daña el agua y el suelo, y acaba con otras formas de producir.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.5.3'], prompt: 'En un terreno **sin riego**, ¿cuándo conviene sembrar la milpa?' },
        { options: [
          { id: 'a', text: 'Al empezar la época de lluvias' },
          { id: 'b', text: 'A mitad de la época seca' },
          { id: 'c', text: 'Cuando caen las heladas' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.5.3'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'A más altura, la temperatura suele ser más baja.', answer: true },
          { text: 'El suelo franco es una mezcla equilibrada, buena para la mayoría de cultivos.', answer: true },
          { text: 'El café es un cultivo típico de tierra fría con heladas.', answer: false, why: 'El café crece en tierra templada; las heladas lo dañan.' },
          { text: 'Las terrazas ayudan a que la lluvia no arrastre el suelo de una ladera.', answer: true },
        ] },
      ),
      cierre({ areas: ['pyd'], cnb: ['pyd:2.5.3'] },
        ['Explico cómo el clima, la lluvia y el suelo deciden qué se puede producir', 'Relaciono cultivos con tierra caliente, templada y fría', 'Propongo medidas ante heladas, canícula y lluvias fuertes'],
        ['Preguntaré a un agricultor de mi familia o comunidad cómo decide cuándo sembrar']),
    ],
  }),
];
