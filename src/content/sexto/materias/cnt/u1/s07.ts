/**
 * Ciencias Naturales y Tecnología · Unidad 1 · Semana 7 — Ambiente, población y salud.
 * Progresión: ambiente sano y contaminado, y cómo se mide la enfermedad en una comunidad
 * (morbilidad) → crecimiento de la población, frontera urbana y pérdida de áreas verdes →
 * reforestación para proteger el agua.
 */
import { lesson, S } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Ambiente sano y morbilidad ───────────────────────── */
  lesson({
    id: 's07-cnt-1',
    title: 'Ambiente sano, ambiente contaminado y salud',
    icon: 'Stethoscope',
    minutes: 15,
    gancho: 'En una aldea el río tiene basura y en otra el agua corre limpia. ¿En cuál crees que se enferman más niños? ¿Cómo se podría comprobar?',
    objetivos: [
      'Interpretar evidencia ambiental y de morbilidad en un caso simulado',
    ],
    resumen: [
      'Un ambiente sano tiene agua limpia, aire limpio, suelo sin basura y manejo adecuado de desechos. Un ambiente contaminado tiene sustancias o basura que dañan la salud de los seres vivos.',
      'La contaminación causa enfermedades: agua contaminada → diarreas y parásitos; humo → infecciones respiratorias; agua estancada → zancudos que transmiten dengue y malaria; basura → moscas y ratas.',
      'La morbilidad es la cantidad de personas que se enferman en una población durante un tiempo. Índice de morbilidad = casos ÷ habitantes × 1,000 (casos por cada 1,000 habitantes).',
      'La mortalidad cuenta fallecimientos; la morbilidad, enfermos. Conocer las causas de morbilidad ayuda a la comunidad a decidir cómo prevenir.',
    ],
    media: {
      id: 's07-cnt-1-dos-aldeas', kind: 'image', title: 'Dos aldeas, dos ambientes', aspect: '16:9',
      alt: 'Ilustración dividida: a la izquierda, una aldea con basura en el río, humo de basura quemada y agua estancada en llantas; a la derecha, la misma aldea con río limpio, basura clasificada, letrinas y árboles.',
      brief: 'Ilustración horizontal en dos mitades de la misma aldea guatemalteca (casas de block y adobe, milpa, montañas). Izquierda "Ambiente contaminado": bolsas en el río, aguas grises corriendo por la calle, basura quemándose con humo, llantas con agua estancada y zancudos, moscas sobre comida. Derecha "Ambiente sano": río limpio, recipientes para clasificar basura, letrina limpia, pila tapada, árboles, niños jugando. Colores claros, sin personas enfermas ni imágenes grotescas. Rótulos grandes.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:6.1.1', 'cnt:6.5.1'], title: 'Ambiente y salud: buscar evidencia',
          prompt: 'Una observación ambiental puede sugerir un riesgo, pero no demuestra por sí sola la causa de una enfermedad. Se contrastan condiciones, casos registrados y otras explicaciones.' },
        { icon: 'Microscope', body: 'Trabajaremos con **casos y datos simulados**, no con mediciones actuales de tu comunidad.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.1.1'], ambito: 'conocer',
          prompt: 'Mira la imagen de las dos aldeas. ¿En cuál crees que habrá **más niños con diarrea** y tos?',
          explain: 'En la aldea contaminada. El agua sucia, el humo, la basura y el agua estancada causan enfermedades. Hoy aprenderás también a **medirlo** con números.' },
        { options: [
          { id: 'a', text: 'En la aldea contaminada', icon: 'Trash2' },
          { id: 'b', text: 'En la aldea limpia', icon: 'Trees', feedback: 'Un ambiente limpio protege la salud: ahí se enferman menos personas.' },
          { id: 'c', text: 'En las dos por igual', icon: 'Copy', feedback: 'El ambiente sí influye en la salud. Veamos por qué.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.1.1'], ambito: 'conocer', title: 'Ambiente sano y ambiente contaminado',
          prompt: 'El **ambiente** es todo lo que nos rodea: agua, aire, suelo, seres vivos. Toca las tarjetas para compararlos.' },
        { icon: 'Trees', body: 'Un **ambiente sano** permite vivir con salud. Un **ambiente contaminado** tiene sustancias o desechos que dañan a los seres vivos.', reveal: [
          { icon: 'Droplets', front: 'Agua', back: '**Sana**: limpia, protegida, tratada o clorada. **Contaminada**: con basura, heces, aguas negras o químicos.' },
          { icon: 'Wind', front: 'Aire', back: '**Sano**: sin humo ni polvo en exceso. **Contaminado**: humo de basura quemada, de leña dentro de la casa o de vehículos.' },
          { icon: 'Sprout', front: 'Suelo', back: '**Sano**: con plantas y sin desechos. **Contaminado**: con basura, plásticos o restos de químicos agrícolas mal usados.' },
          { icon: 'Recycle', front: 'Basura', back: '**Sano**: se reduce, se clasifica y se deposita en su lugar. **Contaminado**: se tira en ríos, barrancos o se quema.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.1.1'], ambito: 'conocer',
          prompt: 'Clasifica lo que ves en tu comunidad: ¿ambiente **sano** o **contaminado**?',
          hint: 'Pregúntate: ¿esto puede dañar el agua, el aire o el suelo?',
          explain: 'Quemar basura, tirarla al río y dejar agua estancada contaminan. Clorar el agua, clasificar la basura y cuidar los árboles mantienen el ambiente sano.' },
        { buckets: [
          { id: 'san', label: 'Ambiente sano', icon: 'Trees', color: 'var(--c-ok)' },
          { id: 'con', label: 'Ambiente contaminado', icon: 'Trash2', color: 'var(--c-bad)' },
        ], items: [
          { id: 'c1', text: 'Bolsas plásticas flotando en el río', bucket: 'con' },
          { id: 'c2', text: 'Agua de la pila tapada y clorada', bucket: 'san' },
          { id: 'c3', text: 'Humo de basura quemada en el patio', bucket: 'con' },
          { id: 'c4', text: 'Basura clasificada en recipientes', bucket: 'san' },
          { id: 'c5', text: 'Llantas viejas con agua de lluvia', bucket: 'con', feedback: 'El agua estancada es criadero de zancudos.' },
          { id: 'c6', text: 'Árboles y plantas alrededor del nacimiento', bucket: 'san' },
          { id: 'c7', text: 'Aguas negras corriendo por la calle', bucket: 'con' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.1.1'], ambito: 'conocer', title: 'La contaminación enferma',
          prompt: 'Cada tipo de contaminación abre la puerta a ciertas enfermedades. Toca las tarjetas.' },
        { icon: 'HeartPulse', body: 'Por eso decimos que **un ambiente sano es salud**: cuidar el ambiente es cuidarnos.', reveal: [
          { icon: 'Droplets', front: 'Agua contaminada', back: 'Causa **diarreas**, **parásitos** como la ameba y la giardia, y otras infecciones del estómago.' },
          { icon: 'Wind', front: 'Humo y polvo', back: 'Causan **infecciones respiratorias** (tos, gripe, neumonía) y empeoran el asma. El humo de la leña dentro de la casa es muy dañino.' },
          { icon: 'Bug', front: 'Agua estancada', back: 'Es criadero de **zancudos** que transmiten **dengue** (y en algunas zonas, **malaria**).' },
          { icon: 'Trash2', front: 'Basura acumulada', back: 'Atrae **moscas**, **cucarachas** y **ratas**, que llevan microbios a los alimentos.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.1.1'], ambito: 'conocer',
          prompt: 'Une cada problema del ambiente con la enfermedad que puede causar.',
          hint: 'Agua sucia → estómago; humo → pulmones; agua estancada → zancudos.',
          explain: 'Conocer la relación ayuda a prevenir: si se elimina la causa ambiental, bajan los casos.' },
        { leftTitle: 'Problema del ambiente', rightTitle: 'Enfermedad', pairs: [
          { id: 'a', left: 'Beber agua del río sin tratar', leftIcon: 'Droplets', right: 'Diarrea y parásitos' },
          { id: 'h', left: 'Cocinar con leña sin chimenea', leftIcon: 'Flame', right: 'Infecciones respiratorias' },
          { id: 'z', left: 'Recipientes con agua estancada', leftIcon: 'Bug', right: 'Dengue' },
          { id: 'b', left: 'Basura junto a la cocina', leftIcon: 'Trash2', right: 'Microbios que llevan las moscas a la comida' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt', 'mat'], cnb: ['cnt:6.5.1'], ambito: 'conocer', title: '¿Cómo se mide la enfermedad en una comunidad?',
          prompt: 'El centro de salud anota cuántas personas se enferman y de qué. Con esos datos se calculan **índices**. Toca las tarjetas.' },
        { icon: 'ClipboardList', body: 'Un índice permite **comparar** comunidades de distinto tamaño: 50 casos no es lo mismo en una aldea de 500 personas que en una ciudad de 50,000.', reveal: [
          { icon: 'Stethoscope', front: 'Morbilidad', back: 'Cantidad de personas que **se enferman** de una enfermedad en una población durante un tiempo (por ejemplo, un año).' },
          { icon: 'Calculator', front: 'Índice de morbilidad', back: '**Casos ÷ habitantes × 1,000.** Dice cuántas personas se enfermaron **por cada 1,000 habitantes**.' },
          { icon: 'HeartPulse', front: 'No es mortalidad', back: 'La **mortalidad** cuenta los **fallecimientos**. La **morbilidad** cuenta a los **enfermos**, aunque se curen.' },
          { icon: 'Search', front: 'Causas de morbilidad', back: 'En muchas comunidades, entre las causas más frecuentes están las **infecciones respiratorias**, las **diarreas** y los **parásitos**, muy ligadas al ambiente y a la higiene.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt', 'mat'], cnb: ['cnt:6.5.1'], ambito: 'hacer', title: 'Ejemplo: calcular un índice de morbilidad',
          prompt: 'Los datos son **hipotéticos**. Mira cómo se calcula e interpreta el índice.' },
        { icon: 'Calculator', problem: 'Supongamos que en una aldea de **2,000 habitantes**, el centro de salud atendió **300 casos de diarrea** en un año. ¿Cuál es el índice de morbilidad por diarrea por cada 1,000 habitantes?',
          steps: [
            { text: 'Divido los casos entre los habitantes: 300 ÷ 2,000 = **0.15**.', why: 'Es la parte de la población que se enfermó.' },
            { text: 'Multiplico por 1,000: 0.15 × 1,000 = **150**.' },
            { text: 'Atajo: como 2,000 son 2 grupos de 1,000, reparto los casos: 300 ÷ 2 = **150** por cada 1,000.', why: 'Así se comprueba el resultado.' },
            { text: 'Interpreto: de cada 1,000 personas, 150 tuvieron diarrea en el año. Es un índice **alto**: conviene revisar el agua y la higiene.' },
          ],
          answer: 'Índice de morbilidad por diarrea = **150 por cada 1,000 habitantes**.',
          tip: 'Siempre di "por cada 1,000 habitantes" junto al número.' },
      ),
      S.number(
        { fase: 'construir', areas: ['cnt', 'mat'], cnb: ['cnt:6.5.1'], ambito: 'hacer',
          prompt: 'Ahora tú: supongamos que en un pueblo de **5,000 habitantes** hubo **400 casos de gripe** en un año. ¿Cuál es el índice de morbilidad por cada 1,000 habitantes?',
          hint: '5,000 habitantes son 5 grupos de 1,000. Reparte los 400 casos entre 5.',
          explain: '400 ÷ 5,000 × 1,000 = 80. Hubo 80 casos de gripe por cada 1,000 habitantes.' },
        { answer: 80, unit: 'por cada 1,000', misconceptions: [
          { value: 400, msg: '400 son los casos totales. Falta calcular cuántos hay por cada 1,000 habitantes.' },
          { value: 8, msg: 'Eso sería por cada 100 habitantes. La pregunta es por cada 1,000.' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['cnt', 'l1'], cnb: ['cnt:6.5.1', 'cnt:6.1.1'], ambito: 'conocer',
          prompt: 'Lee el informe del centro de salud (datos **hipotéticos**) y responde.' },
        { genre: 'Informe', heading: 'Informe anual del puesto de salud de la aldea Los Pinos', passage:
          'La aldea Los Pinos tiene **4,000 habitantes**. Durante el año, el puesto de salud registró estas causas de consulta:\n\n• Infecciones respiratorias: **400 casos**\n• Diarreas: **300 casos**\n• Parasitismo intestinal: **180 casos**\n• Dengue: **40 casos**\n\nLas infecciones respiratorias aumentaron en los meses fríos, sobre todo en casas donde se cocina con leña sin chimenea. Las diarreas y el parasitismo fueron más frecuentes en los sectores que toman agua del río sin tratar. Los casos de dengue aparecieron en la época de lluvia, cerca de un terreno con llantas abandonadas.',
          questions: [
            { q: '¿Cuál fue la principal causa de morbilidad en la aldea?', options: [{ id: 'a', text: 'Diarreas' }, { id: 'b', text: 'Infecciones respiratorias' }, { id: 'c', text: 'Dengue' }], correct: 'b' },
            { q: '¿Cuál es el índice de morbilidad por diarreas por cada 1,000 habitantes?', options: [{ id: 'a', text: '300' }, { id: 'b', text: '75' }, { id: 'c', text: '30' }], correct: 'b', why: '300 ÷ 4,000 × 1,000 = 75 (4,000 son 4 grupos de 1,000: 300 ÷ 4 = 75).' },
            { q: '¿Qué medida ayudaría más a bajar los casos de dengue?', options: [{ id: 'a', text: 'Retirar las llantas y eliminar el agua estancada' }, { id: 'b', text: 'Cocinar con más leña' }, { id: 'c', text: 'Tomar agua del río' }], correct: 'a', why: 'El dengue lo transmite un zancudo que se cría en agua estancada.' },
          ] },
      ),
      S.chart(
        { fase: 'aplicar', areas: ['cnt', 'mat'], cnb: ['cnt:6.5.1'], ambito: 'hacer',
          prompt: 'Representa en una gráfica de barras los casos del informe de la aldea Los Pinos.',
          explain: 'La gráfica deja ver de un vistazo que las enfermedades respiratorias y las diarreas son las más frecuentes: allí conviene enfocar la prevención.' },
        { source: 'Puesto de salud de Los Pinos (datos hipotéticos): casos en un año', unit: 'casos', max: 400, step: 20,
          categories: [
            { id: 'res', label: 'Respiratorias', icon: 'Wind' },
            { id: 'dia', label: 'Diarreas', icon: 'Droplets' },
            { id: 'par', label: 'Parasitismo', icon: 'Bug' },
            { id: 'den', label: 'Dengue', icon: 'Bug' },
          ], data: [400, 300, 180, 40] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:6.1.1', 'cnt:6.5.1'], ambito: 'hacer',
          prompt: 'El COCODE de Los Pinos quiere **bajar las diarreas**. ¿Qué propuesta ataca mejor la causa?',
          explain: 'El informe relaciona las diarreas con el agua del río sin tratar. Proteger y clorar el agua ataca la **causa ambiental**.' },
        { options: [
          { id: 'a', text: 'Clorar o hervir el agua y proteger la fuente de agua', icon: 'Droplets' },
          { id: 'b', text: 'Comprar más medicinas para la diarrea', icon: 'Pill', feedback: 'Las medicinas tratan a los enfermos, pero no evitan que se enfermen más personas.' },
          { id: 'c', text: 'Quemar la basura en el patio', icon: 'Flame', feedback: 'Quemar basura contamina el aire y aumenta las enfermedades respiratorias.' },
        ], correct: ['a'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['cnt', 'mat'], cnb: ['cnt:6.5.1'], prompt: 'Supongamos que en una comunidad de **3,000 habitantes** hubo **90 casos** de parasitismo en un año. ¿Cuál es el índice de morbilidad por cada 1,000 habitantes?' },
        { answer: 30, unit: 'por cada 1,000' },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.1.1', 'cnt:6.5.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'El agua estancada en llantas y botes puede ser criadero de zancudos.', answer: true },
          { text: 'La morbilidad cuenta cuántas personas fallecen en una comunidad.', answer: false, why: 'Eso es la mortalidad. La morbilidad cuenta cuántas personas se enferman.' },
          { text: 'Quemar basura mantiene el ambiente sano.', answer: false, why: 'El humo contamina el aire y causa enfermedades respiratorias.' },
          { text: 'Un índice de morbilidad permite comparar comunidades de distinto tamaño.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Población, frontera urbana y áreas verdes ───────────────────────── */
  lesson({
    id: 's07-cnt-2',
    title: 'Cuando la ciudad crece: bosques y áreas verdes',
    icon: 'Building2',
    minutes: 15,
    gancho: 'Tu abuela recuerda que donde hoy hay colonias y calles antes había bosque y milpa. ¿Por qué cambió tanto el paisaje?',
    objetivos: [
      'Explicar relaciones posibles entre crecimiento urbano, áreas verdes y agua',
    ],
    resumen: [
      'Cuando la población crece, se necesitan más viviendas, calles, agua y servicios. La frontera urbana (el límite entre lo construido y el campo o el bosque) avanza.',
      'Si el crecimiento no se planifica, se talan bosques y se construye en laderas, barrancos y orillas de ríos: aumenta el riesgo de deslaves e inundaciones y se pierde agua y hábitat.',
      'Las áreas verdes urbanas (parques, árboles, bosques) dan sombra y frescura, absorben la lluvia, limpian el aire, son hogar de aves y lugares de recreación y salud.',
      'Crecer con planificación: construir en lugares seguros, proteger bosques y nacimientos, y conservar y crear parques y árboles.',
    ],
    media: {
      id: 's07-cnt-2-frontera', kind: 'animation', title: 'La frontera urbana avanza', aspect: '16:9', duration: 45,
      alt: 'Vista aérea animada de un valle: en 1990 hay un pueblo pequeño rodeado de bosque y milpa; en cada década las casas se extienden, suben por las laderas y el bosque se reduce, hasta quedar pocas áreas verdes.',
      brief: 'Animación 2D de 45 s, vista aérea de un valle guatemalteco con un río y montañas. Contador de años: 1990, 2000, 2010, 2020. Un pueblo pequeño crece: aparecen colonias, calles y casas que avanzan sobre la milpa y el bosque (línea punteada roja = "frontera urbana"). Hacia 2010, casas suben por las laderas y bajan a un barranco. En 2020 queda poco bosque; aparecen íconos de riesgo (deslave, inundación). Final alternativo: el mismo valle con crecimiento planificado (parques, bosque protegido en las laderas). Narración en español con subtítulos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:6.2.1', 'cnt:6.4.1'], title: 'Una ciudad cambia varias condiciones',
          prompt: 'Cuando una zona se urbaniza cambian la cobertura del suelo, el drenaje y la demanda de agua. El efecto depende del diseño, el suelo, la lluvia y el cuidado de las áreas verdes.' },
        { icon: 'Trees', body: 'Relacionar factores no significa afirmar que uno solo causa todos los cambios.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.2.1'], ambito: 'conocer',
          prompt: '¿Por qué crees que donde antes había bosque y milpa hoy hay colonias?',
          explain: 'La **población creció** y necesitó más viviendas, calles y servicios. Mira la animación de la lección: así avanza la **frontera urbana**.' },
        { options: [
          { id: 'a', text: 'Porque la población creció y necesitó dónde vivir', icon: 'Users' },
          { id: 'b', text: 'Porque los árboles se fueron solos', icon: 'Trees', feedback: 'Los bosques no desaparecen solos: las personas los talan para construir o sembrar.' },
          { id: 'c', text: 'Porque la milpa se convierte en casas con el tiempo', icon: 'Wheat', feedback: 'La milpa no se transforma sola: se construye encima.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt', 'ccss'], cnb: ['cnt:6.2.1'], ambito: 'conocer', title: 'Crecimiento de la población y frontera urbana',
          prompt: 'Toca las tarjetas para entender cómo crece una ciudad.' },
        { icon: 'Building2', body: 'Más personas significa más necesidades: **vivienda**, **agua**, **alimentos**, **transporte**, **escuelas** y **centros de salud**.', reveal: [
          { icon: 'TrendingUp', front: 'Crecimiento poblacional', back: 'Aumento del número de habitantes de un lugar, porque nacen más personas de las que mueren o porque llegan personas de otros lugares.' },
          { icon: 'MapPin', front: 'Frontera urbana', back: 'El **límite** entre la zona construida (casas, calles) y la zona rural o el bosque. Cuando la ciudad crece, esa frontera **avanza**.' },
          { icon: 'Home', front: 'Uso inadecuado del espacio', back: 'Construir en **laderas empinadas**, **barrancos** u **orillas de ríos**: lugares donde el suelo puede deslizarse o el agua puede inundar.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.2.1'], ambito: 'conocer', title: 'Una cadena de causas y efectos',
          prompt: 'Cuando la población crece **sin planificación**, se forma una cadena. Toca las tarjetas en orden.' },
        { icon: 'Link', body: 'Cada efecto se convierte en la causa del siguiente.', reveal: [
          { icon: 'Users', front: '1. Más población', back: 'Más familias necesitan dónde vivir.' },
          { icon: 'TreeDeciduous', front: '2. Tala de bosques', back: 'Se cortan árboles para lotificar y construir.' },
          { icon: 'Mountain', front: '3. Casas en laderas y barrancos', back: 'Sin bosque, se construye en terrenos inclinados o junto a ríos.' },
          { icon: 'CloudRain', front: '4. Suelo desprotegido', back: 'Sin raíces que lo sostengan, la lluvia arrastra el suelo (**erosión**) y el agua ya no se infiltra.' },
          { icon: 'AlertTriangle', front: '5. Riesgo de desastres', back: 'Aumentan los **deslaves** y las **inundaciones**, y las familias quedan en peligro.' },
        ] },
      ),
      S.order(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.2.1'], ambito: 'conocer',
          prompt: 'Ordena la cadena desde la **causa** hasta el **efecto final**.',
          hint: 'Empieza por la población y termina con el riesgo para las familias.',
          explain: 'Más población → tala de bosques → casas en laderas → suelo sin protección → deslaves e inundaciones.' },
        { labels: { start: 'Causa', end: 'Efecto final' }, items: [
          { id: 'k1', text: 'La población crece sin planificación', icon: 'Users' },
          { id: 'k2', text: 'Se talan bosques para construir', icon: 'TreeDeciduous' },
          { id: 'k3', text: 'Se construyen casas en laderas y barrancos', icon: 'Home' },
          { id: 'k4', text: 'La lluvia arrastra el suelo sin raíces', icon: 'CloudRain' },
          { id: 'k5', text: 'Aumenta el riesgo de deslaves e inundaciones', icon: 'AlertTriangle' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.4.1'], ambito: 'conocer', title: 'Lo que dan las áreas verdes',
          prompt: 'Las **áreas verdes** de una ciudad (parques, árboles de las calles, bosques cercanos) no son adorno. Toca las tarjetas.' },
        { icon: 'Trees', body: 'Cuando la ciudad crece sin cuidarlas, las áreas verdes **desaparecen**, y con ellas estos beneficios.', reveal: [
          { icon: 'Sun', front: 'Sombra y frescura', back: 'Los árboles bajan la temperatura. Sin ellos, el cemento y el asfalto guardan calor y la ciudad se vuelve **más caliente**.' },
          { icon: 'CloudRain', front: 'Absorben la lluvia', back: 'El suelo con plantas deja **infiltrar** el agua. Sin él, el agua corre por las calles y causa **inundaciones**.' },
          { icon: 'Wind', front: 'Aire más limpio', back: 'Las plantas producen **oxígeno** y retienen parte del polvo.' },
          { icon: 'Bird', front: 'Hogar de seres vivos', back: 'Aves, ardillas, mariposas y abejas viven en los árboles y parques.' },
          { icon: 'Smile', front: 'Salud y recreación', back: 'Son lugares para **jugar**, caminar, hacer deporte y descansar.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.4.1'], ambito: 'conocer',
          prompt: 'Si desaparece un área verde, ¿qué se pierde? Une cada cambio con su consecuencia.',
          hint: 'Revisa las tarjetas: frescura, lluvia, aire, seres vivos, recreación.',
          explain: 'Cada área verde que se pierde reduce la calidad de vida de toda la ciudad.' },
        { leftTitle: 'Cambio', rightTitle: 'Consecuencia', pairs: [
          { id: 'm1', left: 'Se cortan los árboles de la avenida', right: 'La calle se vuelve más calurosa' },
          { id: 'm2', left: 'Se pavimenta un terreno con grama', right: 'El agua de lluvia corre y hay inundaciones' },
          { id: 'm3', left: 'Se construye sobre el bosque del cerro', right: 'Las aves pierden su hogar' },
          { id: 'm4', left: 'Se lotifica el único parque', right: 'Los niños no tienen dónde jugar' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt', 'mat'], cnb: ['cnt:6.2.1'], ambito: 'hacer', title: 'Ejemplo: cuánto terreno necesita una ciudad que crece',
          prompt: 'Con números **hipotéticos**, mira por qué la frontera urbana avanza tan rápido.' },
        { icon: 'Calculator', problem: 'Supongamos que un municipio recibe **1,000 habitantes nuevos**, en familias de **5 personas**, y que cada casa, con su parte de calle, ocupa **200 m²**. ¿Cuánto terreno se necesita?',
          steps: [
            { text: 'Familias nuevas: 1,000 ÷ 5 = **200 familias**, es decir, 200 casas.' },
            { text: 'Terreno: 200 × 200 m² = **40,000 m²**.' },
            { text: 'Una **hectárea** mide 10,000 m². Entonces 40,000 ÷ 10,000 = **4 hectáreas**.', why: 'Una hectárea es un cuadrado de 100 m por 100 m: un poco más grande que una cancha de fútbol profesional.' },
            { text: 'Si alrededor solo hay bosque, se talarían unas **4 hectáreas** de bosque, sin contar escuelas, mercados ni centros de salud.' },
          ],
          answer: 'Se necesitan unas **4 hectáreas** solo para viviendas. Por eso hay que **planificar** dónde crecer.',
          tip: 'Construir hacia arriba (edificios) o en terrenos ya usados ahorra bosque.' },
      ),
      S.chart(
        { fase: 'aplicar', areas: ['cnt', 'mat'], cnb: ['cnt:6.4.1'], ambito: 'hacer',
          prompt: 'Supongamos que en un barrio se midieron las **manzanas de área verde** (parques, bosque y milpa) en distintos años: 1990 → 12, 2000 → 9, 2010 → 6, 2020 → 3. Construye la gráfica.',
          explain: 'Las áreas verdes bajaron 3 manzanas cada década: en 30 años el barrio perdió 9 de sus 12 manzanas verdes. Si la tendencia sigue, en 2030 no quedaría ninguna.' },
        { source: 'Manzanas de área verde en el barrio (datos hipotéticos)', unit: 'manzanas', max: 12, step: 1,
          categories: [
            { id: 'a90', label: '1990', icon: 'Trees' },
            { id: 'a00', label: '2000', icon: 'Trees' },
            { id: 'a10', label: '2010', icon: 'Trees' },
            { id: 'a20', label: '2020', icon: 'Trees' },
          ], data: [12, 9, 6, 3] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:6.2.1', 'cnt:6.4.1'], ambito: 'hacer',
          prompt: 'Supongamos que en tu municipio quieren **lotificar una ladera con bosque** que está arriba del nacimiento que da agua a tres aldeas. ¿Qué propuesta cuida mejor a la comunidad?',
          explain: 'La ladera con bosque protege el suelo y el agua del nacimiento. Construir en lugares seguros y planificados evita deslaves y protege el agua de todos.' },
        { options: [
          { id: 'a', text: 'Lotificar toda la ladera, porque hay mucha demanda de casas', icon: 'Home', feedback: 'Retirar cobertura y alterar la pendiente puede aumentar erosión y escorrentía; el efecto sobre un nacimiento depende también del suelo, la lluvia, la geología y el manejo.' },
          { id: 'b', text: 'Proteger el bosque de la ladera y construir en un terreno plano y seguro', icon: 'Trees' },
          { id: 'c', text: 'Talar el bosque y sembrar grama', icon: 'Sprout', feedback: 'La grama no sostiene el suelo ni retiene el agua como un bosque.' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:6.2.1', 'cnt:6.4.1'], ambito: 'hacer',
          prompt: '¿Es una forma de crecer **con planificación** o **sin planificación**?',
          explain: 'Crecer con planificación significa construir en lugares seguros y proteger bosques, nacimientos y áreas verdes.' },
        { buckets: [
          { id: 'con', label: 'Con planificación', icon: 'ClipboardCheck', color: 'var(--c-ok)' },
          { id: 'sin', label: 'Sin planificación', icon: 'AlertTriangle', color: 'var(--c-bad)' },
        ], items: [
          { id: 'p1', text: 'Dejar un parque en cada colonia nueva', bucket: 'con' },
          { id: 'p2', text: 'Construir casas a la orilla de un río que se desborda', bucket: 'sin' },
          { id: 'p3', text: 'Proteger como reserva el bosque del cerro', bucket: 'con' },
          { id: 'p4', text: 'Rellenar un barranco con basura para construir', bucket: 'sin' },
          { id: 'p5', text: 'Sembrar árboles a lo largo de las calles', bucket: 'con' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.2.1'], prompt: '¿Qué es la **frontera urbana**?' },
        { options: [
          { id: 'a', text: 'La línea que separa dos países' },
          { id: 'b', text: 'El límite entre la zona construida y el campo o el bosque' },
          { id: 'c', text: 'Un muro alrededor de la ciudad' },
          { id: 'd', text: 'El centro de la ciudad' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.2.1', 'cnt:6.4.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Cuando la ciudad crece sin planificación, suelen desaparecer áreas verdes.', answer: true },
          { text: 'Construir en barrancos y laderas sin bosque es seguro.', answer: false, why: 'Sin raíces que sostengan el suelo, aumenta el riesgo de deslaves.' },
          { text: 'Los árboles de una ciudad ayudan a que haga menos calor.', answer: true },
          { text: 'Pavimentar las áreas verdes ayuda a que el agua de lluvia se infiltre.', answer: false, why: 'El pavimento no deja pasar el agua: corre por las calles y causa inundaciones.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Reforestación y agua ───────────────────────── */
  lesson({
    id: 's07-cnt-3',
    title: 'Reforestar para proteger el agua',
    icon: 'TreePine',
    minutes: 15,
    gancho: 'Piensa en una esponja: si le echas agua despacio, la guarda y la suelta poco a poco. ¿Qué tiene que ver una esponja con un bosque y con el agua que llega a tu casa?',
    objetivos: [
      'Explicar con condiciones cómo la cobertura forestal puede contribuir al ciclo local del agua',
    ],
    resumen: [
      'La hojarasca, las raíces y la estructura del suelo forestal pueden frenar la escorrentía y favorecer infiltración; el efecto depende de las condiciones de cada cuenca.',
      'Al perder cobertura vegetal puede aumentar la erosión y la llegada rápida de agua y sedimentos a los cauces, aunque no todos los nacimientos responden igual.',
      'Reforestar es volver a establecer árboles donde se perdieron. Puede contribuir al cuidado del agua si el sitio, las especies y el manejo se eligen con evidencia local.',
      'Un árbol sembrado necesita cuidado: riego, protección y seguimiento, sobre todo sus primeros años.',
    ],
    media: {
      id: 's07-cnt-3-esponja', kind: 'animation', title: 'El bosque, una esponja de agua', aspect: '16:9', duration: 50,
      alt: 'Animación comparativa de dos laderas hipotéticas: una con cobertura forestal y otra con suelo expuesto; flechas muestran posibles diferencias de infiltración, escorrentía y erosión.',
      brief: 'Animación 2D de 50 s en pantalla dividida y rotulada "modelo simplificado". Misma pendiente, lluvia y tipo de suelo. Ladera A con bosque: parte de la lluvia se intercepta, se infiltra y otra parte escurre. Ladera B con suelo expuesto: mayor escorrentía y sedimentos en este escenario. Incluir rótulo: "El bosque por sí solo es evidencia insuficiente para demostrar cantidad o calidad del agua; el resultado depende del suelo, la pendiente, la lluvia, las especies y el manejo". Final: personas comparan datos antes de planificar restauración. Narración en español y subtítulos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:6.3.1'], title: 'Bosque y agua: una relación con condiciones',
          prompt: 'La hojarasca, las raíces y el suelo forestal **pueden ayudar** a frenar escorrentía y favorecer infiltración. El resultado cambia según el suelo, la pendiente, la lluvia, las especies y el manejo de la cuenca.' },
        { icon: 'TreePine', body: 'Un bosque por sí solo es evidencia insuficiente para demostrar cantidad o calidad del agua; aporta procesos que deben estudiarse.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.3.1'], ambito: 'conocer',
          prompt: 'En el **modelo simplificado** de la animación, con igual lluvia, pendiente y suelo, ¿qué ladera muestra menor escorrentía y erosión?',
          explain: 'En este modelo, la ladera con bosque muestra menor escorrentía y erosión. No permite asegurar cómo responderá cualquier cuenca real.' },
        { options: [
          { id: 'a', text: 'La ladera con cobertura forestal del modelo', icon: 'Trees' },
          { id: 'b', text: 'La ladera con suelo expuesto', icon: 'Mountain', feedback: 'En el modelo, el flujo rápido arrastra más sedimentos.' },
          { id: 'c', text: 'No puede observarse ninguna diferencia', icon: 'Copy', feedback: 'Las flechas y los sedimentos permiten comparar ambos resultados simulados.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.3.1'], ambito: 'conocer', title: 'El bosque como esponja',
          prompt: 'Sigue el camino de una gota de lluvia en un bosque. Toca las tarjetas en orden.' },
        { icon: 'Droplets', body: 'Parte del agua de lluvia puede infiltrarse y desplazarse bajo tierra; su aporte a un nacimiento depende de la geología y otras condiciones.', reveal: [
          { icon: 'CloudRain', front: '1. Las copas frenan la lluvia', back: 'Las hojas reciben el golpe de las gotas: el agua llega al suelo **despacio**.' },
          { icon: 'Leaf', front: '2. La hojarasca la retiene', back: 'La capa de hojas secas y el suelo con materia orgánica **absorben** el agua como una esponja.' },
          { icon: 'Sprout', front: '3. Las raíces abren caminos', back: 'Las raíces hacen canales por donde el agua **se infiltra** hacia abajo y, además, **sostienen** el suelo.' },
          { icon: 'Waves', front: '4. Agua subterránea', back: 'Parte del agua infiltrada puede recargar agua subterránea y alimentar nacimientos; el tiempo y la cantidad varían.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.3.1'], ambito: 'conocer', title: '¿Qué pasa cuando se pierde el bosque?',
          prompt: 'Ahora mira el cerro pelado de la animación. Toca las tarjetas.' },
        { icon: 'Mountain', body: 'Con suelo expuesto **puede aumentar** el agua que corre por la superficie. A ese flujo se le llama **escorrentía**.', reveal: [
          { icon: 'CloudRain', front: 'Erosión', back: 'El agua que corre **arrastra el suelo fértil**: la tierra pierde su capa buena para sembrar.' },
          { icon: 'Droplets', front: 'Ríos con lodo', back: 'El suelo arrastrado llega a los ríos y los **ensucia**: el agua cuesta más de limpiar.' },
          { icon: 'Waves', front: 'Crecidas', back: 'En ciertas cuencas, mayor escorrentía puede contribuir a crecidas junto con la intensidad de lluvia, el suelo y la ocupación del territorio.' },
          { icon: 'Sun', front: 'Caudal variable', back: 'La pérdida de cobertura puede influir en el caudal seco, pero se necesitan datos de lluvia, suelo, geología y uso del agua para explicarlo.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.3.1'], ambito: 'conocer',
          prompt: '¿Qué ocurre en una montaña **con bosque** y qué en una **sin bosque**?',
          hint: 'Clasifica procesos probables del modelo, no promesas sobre cualquier cuenca.',
          explain: 'En el modelo, la cobertura favorece infiltración y estabilidad; el suelo expuesto muestra mayor escorrentía y erosión.' },
        { buckets: [
          { id: 'con', label: 'Con bosque', icon: 'Trees', color: 'var(--c-ok)' },
          { id: 'sin', label: 'Sin bosque', icon: 'Mountain', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'b1', text: 'El agua se infiltra en el suelo', bucket: 'con' },
          { id: 'b2', text: 'La lluvia arrastra el suelo al río', bucket: 'sin' },
          { id: 'b3', text: 'La hojarasca reduce el golpe directo de la lluvia', bucket: 'con' },
          { id: 'b4', text: 'El río se llena de lodo', bucket: 'sin' },
          { id: 'b5', text: 'Las raíces sostienen el suelo', bucket: 'con' },
          { id: 'b6', text: 'Aumenta el transporte de sedimentos en el modelo', bucket: 'sin' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.3.1'], ambito: 'hacer', title: 'Ejemplo: un experimento casero seguro',
          prompt: 'Puedes comprobar el efecto esponja en casa, con ayuda de una persona adulta. Mira el experimento y sus resultados.' },
        { icon: 'FlaskConical', problem: '¿Retiene más agua un suelo cubierto de plantas que un suelo desnudo? Pregunta de investigación del grupo de Ixchel.',
          steps: [
            { text: '**Materiales**: dos bandejas o cajas iguales forradas con una bolsa plástica, tierra, un pedazo de grama o musgo con su raíz, dos palanganas y un vaso medidor.' },
            { text: '**Preparación**: en la bandeja A ponen tierra cubierta de grama; en la B, solo tierra. Las inclinan igual, con el borde bajo sobre una palangana.', why: 'Todo debe ser igual excepto la cubierta de plantas: así es una prueba justa.' },
            { text: '**Prueba**: riegan cada bandeja despacio con **la misma cantidad** de agua (3 vasos) y miden el agua que cae a cada palangana.' },
            { text: '**Resultado típico**: de la bandeja B sale más agua, más rápido y **café de lodo**; de la A sale menos agua, más despacio y **más clara**.' },
          ],
          answer: 'El suelo con plantas **retiene más agua** y **pierde menos tierra**: igual que un bosque en la montaña.',
          tip: 'Anota tus mediciones en una tabla y compáralas. ¡Así trabaja la ciencia!' },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.3.1'], ambito: 'conocer',
          prompt: 'En el experimento, de la bandeja **sin plantas** salió agua **café**. ¿Qué significa ese color?',
          hint: 'El agua arrastra algo cuando no hay raíces que lo sostengan.',
          explain: 'El color café es **suelo arrastrado**: erosión. En la montaña, esa tierra termina en los ríos.' },
        { options: [
          { id: 'a', text: 'Que el agua arrastró tierra: hubo erosión', icon: 'Mountain' },
          { id: 'b', text: 'Que el agua se volvió más limpia', icon: 'Droplets', feedback: 'El color café indica que el agua lleva tierra.' },
          { id: 'c', text: 'Que las plantas ensucian el agua', icon: 'Sprout', feedback: 'Esa bandeja no tenía plantas; con plantas, el agua salió más clara.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.3.1'], ambito: 'hacer', title: 'Reforestar bien',
          prompt: '**Reforestar** es volver a sembrar árboles donde se perdieron. Para que ayude al agua, hay que hacerlo bien. Toca las tarjetas.' },
        { icon: 'TreePine', body: 'Sembrar un árbol es fácil; lograr que **crezca** requiere planificación y cuidado.', reveal: [
          { icon: 'MapPin', front: 'Dónde', back: 'En las **partes altas** de las montañas (zonas de **recarga hídrica**, donde el agua se infiltra), alrededor de **nacimientos** y en las **orillas de los ríos**.' },
          { icon: 'TreeDeciduous', front: 'Qué especies', back: 'De preferencia **nativas** de la región, como pino, ciprés, encino o aliso en tierras altas. Se adaptan mejor y alimentan a la fauna local.' },
          { icon: 'CloudRain', front: 'Cuándo', back: 'Al **inicio de la época de lluvia**, para que el arbolito tenga agua mientras echa raíces.' },
          { icon: 'Shovel', front: 'Cómo sembrar', back: 'Cava un hoyo **más grande que la raíz**; rasga y quita la **bolsa** con cuidado, sin romper la raíz; coloca el arbolito, **rellena** con tierra y **apisona** suavemente; luego **riégalo**.' },
          { icon: 'Heart', front: 'Cuidado', back: 'Regar si no llueve, quitar la maleza alrededor, protegerlo de animales y del fuego, y **darle seguimiento** los primeros años.' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:6.3.1'], ambito: 'hacer',
          prompt: 'Ordena los pasos para sembrar un arbolito.',
          explain: 'Lugar y especie → hoyo → quitar la bolsa con cuidado → colocar, rellenar y apisonar → regar → proteger y dar seguimiento.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 's1', text: 'Elegir el lugar y una especie nativa', icon: 'MapPin' },
          { id: 's2', text: 'Cavar un hoyo más grande que la raíz', icon: 'Shovel' },
          { id: 's3', text: 'Rasgar y quitar la bolsa del arbolito con cuidado', icon: 'Package' },
          { id: 's4', text: 'Colocarlo, rellenar con tierra y apisonar suavemente', icon: 'Sprout' },
          { id: 's5', text: 'Regarlo', icon: 'Droplets' },
          { id: 's6', text: 'Protegerlo y darle seguimiento', icon: 'ShieldCheck' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:6.3.1'], ambito: 'hacer',
          prompt: 'Una aldea tiene 200 arbolitos para sembrar y quiere que su **nacimiento** no se seque en verano. ¿Dónde conviene sembrarlos?',
          explain: 'En la **parte alta** sobre el nacimiento está la zona de recarga: allí el bosque ayuda a que la lluvia se infiltre y alimente el nacimiento.' },
        { options: [
          { id: 'a', text: 'En la parte alta del cerro, arriba del nacimiento', icon: 'Mountain' },
          { id: 'b', text: 'En el parque central del pueblo', icon: 'Trees', feedback: 'Los árboles del parque dan sombra, pero no protegen la zona de recarga del nacimiento.' },
          { id: 'c', text: 'Muy abajo, lejos del nacimiento', icon: 'MapPin', feedback: 'El agua del nacimiento se infiltra más arriba: allí conviene reforestar.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:6.3.1'], ambito: 'ser',
          prompt: '¿Esta acción **protege** las fuentes de agua o las **daña**?',
          explain: 'Proteger el bosque y reforestar cuida el agua; quemar, talar y tirar basura la pone en peligro.' },
        { buckets: [
          { id: 'pro', label: 'Protege el agua', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          { id: 'dan', label: 'Daña el agua', icon: 'AlertTriangle', color: 'var(--c-bad)' },
        ], items: [
          { id: 'a1', text: 'Sembrar árboles alrededor del nacimiento', bucket: 'pro' },
          { id: 'a2', text: 'Hacer rozas con fuego cerca del bosque', bucket: 'dan', feedback: 'Las quemas pueden causar incendios forestales.' },
          { id: 'a3', text: 'Cuidar y regar los arbolitos sembrados', bucket: 'pro' },
          { id: 'a4', text: 'Talar los árboles de la orilla del río', bucket: 'dan' },
          { id: 'a5', text: 'Participar en el vivero forestal de la escuela', bucket: 'pro' },
          { id: 'a6', text: 'Tirar basura en el barranco', bucket: 'dan' },
        ] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['cnt', 'pyd'], cnb: ['cnt:6.3.1'], ambito: 'hacer', title: 'Plan para un sitio simulado',
          prompt: 'En una ficha preparada, diseña una restauración para una **ladera hipotética** con erosión. No afirmes resultados garantizados.' },
        { goal: 'Proponer una acción condicionada a la evidencia disponible.',
          steps: [
            { title: 'Evidencia dada', detail: 'Marca: pendiente fuerte, suelo expuesto y surcos después de lluvia en el caso simulado.' },
            { title: 'Acción posible', detail: 'Propón cobertura vegetal y barreras siguiendo orientación técnica; no elijas una especie sin información del sitio.' },
            { title: 'Dato pendiente', detail: 'Anota qué falta conocer: suelo, lluvia, propiedad, especies apropiadas o permiso.' },
            { title: 'Seguimiento', detail: 'Elige un indicador: supervivencia de plantas, cobertura del suelo o sedimentos después de lluvia.' },
          ],
          evidence: 'Una ficha breve con evidencia, acción posible, dato pendiente e indicador.',
          rubric: ['Usé solo datos del caso simulado', 'No prometí un resultado', 'Identifiqué información pendiente', 'Definí un indicador observable'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.3.1'], prompt: '¿Por qué reforestar la parte alta de una montaña protege el agua de un nacimiento?' },
        { options: [
          { id: 'a', text: 'Porque los árboles producen agua' },
          { id: 'b', text: 'Porque el bosque ayuda a que la lluvia se infiltre y recargue el agua subterránea' },
          { id: 'c', text: 'Porque los árboles impiden que llueva' },
          { id: 'd', text: 'Porque los árboles se toman toda el agua' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.3.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Las raíces de los árboles ayudan a sostener el suelo y evitar la erosión.', answer: true },
          { text: 'La cobertura forestal garantiza que un nacimiento tendrá agua todo el año.', answer: false, why: 'El caudal también depende de lluvia, suelo, geología, extracción y manejo de la cuenca.' },
          { text: 'Conviene reforestar con especies nativas de la región.', answer: true },
          { text: 'Después de sembrar un árbol ya no hay que cuidarlo.', answer: false, why: 'Necesita riego, protección y seguimiento, sobre todo los primeros años.' },
        ] },
      ),
    ],
  }),
];
