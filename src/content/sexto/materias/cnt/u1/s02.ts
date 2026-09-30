/**
 * Ciencias Naturales y Tecnología · Unidad 1 · Semana 2 — Del núcleo a los seres diminutos.
 * Progresión: dentro del núcleo (ADN, cromosomas y genes) → seres de una célula y de muchas
 * (protozoos y metazoos) → parásitos: tipos, daños y prevención (muchos son protozoos).
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Cromosomas y genes ───────────────────────── */
  lesson({
    id: 's02-cnt-1',
    title: 'Cromosomas y genes: el instructivo de la vida',
    icon: 'Dna',
    minutes: 14,
    gancho: 'Mucha gente te dice que tienes "los ojos de tu mamá" o "la risa de tu abuelo". ¿Cómo pasan esos parecidos de una persona a otra?',
    objetivos: [
      'Explicar qué son el ADN, los cromosomas y los genes y cómo se relacionan',
      'Describir cómo se heredan los cromosomas de la madre y del padre',
    ],
    resumen: [
      'El ADN es la molécula que guarda las instrucciones para formar y hacer funcionar a un ser vivo. Está en el núcleo de cada célula.',
      'El ADN se enrolla y forma los cromosomas. Las personas tienen 46 cromosomas en cada célula del cuerpo, organizados en 23 pares.',
      'Un gen es un pedazo de ADN con la instrucción para una característica, como el grupo sanguíneo o el color natural de los ojos.',
      'Cada persona recibe la mitad de sus cromosomas de la madre (23) y la otra mitad del padre (23); por eso se parece a los dos, sin ser igual a ninguno.',
    ],
    media: {
      id: 's02-cnt-1-zoom', kind: 'animation', title: 'Zoom: de la persona al gen', aspect: '16:9', duration: 45,
      alt: 'Acercamiento continuo: una niña, su piel, una célula, el núcleo, un cromosoma con forma de X que se desenrolla en una hebra de ADN, y un tramo resaltado llamado gen.',
      brief: 'Animación 2D de 45 s con zoom continuo. (1) Una niña guatemalteca en el patio de la escuela. (2) Acercamiento a la piel de su mano. (3) Una célula con su núcleo. (4) Dentro del núcleo, cromosomas con forma de X; uno se desenrolla como un hilo de lana hasta mostrar la doble hélice del ADN (escalera torcida). (5) Un tramo de la escalera se ilumina: rótulo "gen". Rótulos: persona → célula → núcleo → cromosoma → ADN → gen. Narración en español con subtítulos, colores suaves.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:1.4.1'], ambito: 'conocer',
          prompt: '¿Por qué crees que te pareces a tu familia en algunas cosas, como la forma de la nariz o el tipo de cabello?',
          explain: 'Recibiste **información** de tu madre y de tu padre, guardada en tus células. Hoy descubrirás dónde está y cómo se llama.' },
        { options: [
          { id: 'a', text: 'Porque comemos la misma comida', icon: 'Utensils', feedback: 'La comida influye en la salud y el crecimiento, pero no cambia la forma de tu nariz.' },
          { id: 'b', text: 'Porque heredé información de mi madre y de mi padre', icon: 'Users' },
          { id: 'c', text: 'Por pura casualidad', icon: 'HelpCircle', feedback: 'Hay una razón científica: la herencia.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.4.1'], ambito: 'conocer', title: 'Tres palabras clave',
          prompt: 'En la lección de la célula viste que el **núcleo** guarda el ADN. Ahora mira más de cerca. Toca cada tarjeta.' },
        { icon: 'Dna', body: 'Piensa en el núcleo como una **biblioteca** que tiene todos los instructivos para construir y hacer funcionar tu cuerpo.', reveal: [
          { icon: 'Dna', front: 'ADN', back: 'Molécula larguísima con forma de **escalera torcida** (doble hélice). Guarda las **instrucciones** de la vida escritas en un código químico.' },
          { icon: 'Book', front: 'Cromosoma', back: 'El ADN se **enrolla** muy apretado y forma los cromosomas, como hilo en una bobina. Son como los **libros** de la biblioteca.' },
          { icon: 'FileText', front: 'Gen', back: 'Un **pedazo de ADN** con la instrucción para una característica o una función. Es como **una receta** dentro de un libro.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.4.1'], ambito: 'conocer', title: '¿Cuántos cromosomas tienes?',
          prompt: 'Observa la animación de la lección y toca las tarjetas.' },
        { icon: 'Layers', body: 'Casi todas las células de tu cuerpo tienen **46 cromosomas**, ordenados en **23 pares**. Cada cromosoma tiene cientos o miles de genes.', reveal: [
          { icon: 'Users', front: 'Un cromosoma de cada uno', back: 'En cada par, **un cromosoma viene de tu madre** y **el otro de tu padre**: 23 + 23 = 46.' },
          { icon: 'Copy', front: 'Dos instrucciones', back: 'Como tienes pares, tienes **dos versiones** de casi cada gen. Por eso puedes tener rasgos de las dos familias.' },
          { icon: 'Hash', front: 'El par 23', back: 'Es el par de los **cromosomas sexuales**: normalmente **XX** en las mujeres y **XY** en los hombres.' },
          { icon: 'Egg', front: 'Células reproductoras', back: 'El óvulo y el espermatozoide llevan **solo 23 cromosomas**, uno de cada par. Al unirse, la nueva célula tiene 46.' },
        ] },
      ),
      S.order(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.4.1'], ambito: 'conocer',
          prompt: 'Ordena de lo **más grande** a lo **más pequeño**.',
          hint: 'La célula contiene al núcleo; el núcleo, a los cromosomas; y un gen es solo un pedazo de un cromosoma.',
          explain: 'Célula → núcleo → cromosoma → gen. El gen es una parte del ADN que forma el cromosoma.' },
        { labels: { start: 'Más grande', end: 'Más pequeño' }, items: [
          { id: 'o1', text: 'Célula', icon: 'Circle' },
          { id: 'o2', text: 'Núcleo', icon: 'CircleDot' },
          { id: 'o3', text: 'Cromosoma', icon: 'Book' },
          { id: 'o4', text: 'Gen', icon: 'FileText' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.4.1'], ambito: 'conocer',
          prompt: 'Une cada palabra con su función.',
          hint: 'Recuerda la biblioteca: el edificio, los libros y las recetas.',
          explain: 'El núcleo guarda; el cromosoma organiza y transporta el ADN al dividirse la célula; el gen da una instrucción concreta; el ADN es el material donde está escrito todo.' },
        { leftTitle: 'Estructura', rightTitle: 'Función', pairs: [
          { id: 'n', left: 'Núcleo', leftIcon: 'CircleDot', right: 'Guarda y protege los cromosomas' },
          { id: 'c', left: 'Cromosoma', leftIcon: 'Book', right: 'ADN enrollado y ordenado, con muchos genes' },
          { id: 'g', left: 'Gen', leftIcon: 'FileText', right: 'Instrucción para una característica' },
          { id: 'a', left: 'ADN', leftIcon: 'Dna', right: 'Molécula donde está escrito el código de la vida' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.4.1'], ambito: 'conocer', title: 'Ejemplo: 23 + 23',
          prompt: 'Mira cómo se forma el juego completo de cromosomas de un bebé.' },
        { icon: 'Users', problem: 'Las células del cuerpo de doña Juana y de don Pedro tienen 46 cromosomas cada una. ¿Cuántos cromosomas recibe su hija de cada uno, y cuántos tiene ella?',
          steps: [
            { text: 'Las células reproductoras se forman con **la mitad** de los cromosomas: 46 ÷ 2 = **23**.', why: 'Llevan un cromosoma de cada par.' },
            { text: 'El óvulo de doña Juana lleva **23** y el espermatozoide de don Pedro lleva **23**.' },
            { text: 'Al unirse forman la primera célula de la hija: 23 + 23 = **46** cromosomas.' },
            { text: 'Esa célula se divide muchas veces, y cada nueva célula del cuerpo recibe una **copia** de los 46.', why: 'Por eso todas tus células tienen la misma información.' },
          ],
          answer: 'Recibe **23** de su madre y **23** de su padre: tiene **46**, en 23 pares.',
          tip: 'Cada hermano recibe una mezcla distinta de cromosomas; por eso los hermanos se parecen, pero no son iguales (salvo los gemelos idénticos).' },
      ),
      S.number(
        { fase: 'construir', areas: ['cnt', 'mat'], cnb: ['cnt:1.4.1'], ambito: 'hacer',
          prompt: 'Una célula de tu piel tiene **46 cromosomas**. ¿Cuántos **pares** de cromosomas son?',
          hint: 'Un par son 2. ¿Cuántos grupos de 2 hay en 46?',
          explain: '46 ÷ 2 = 23 pares. En cada par, un cromosoma viene de la madre y otro del padre.' },
        { answer: 23, unit: 'pares', misconceptions: [
          { value: 46, msg: '46 es el número de cromosomas. La pregunta es cuántos pares forman.' },
          { value: 92, msg: 'Multiplicaste por 2. Para saber cuántos pares hay, divide entre 2.' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.4.1'], ambito: 'conocer',
          prompt: 'Los genes no deciden todo. ¿Esta característica depende sobre todo de los **genes** o de lo que **aprendes y vives**?',
          explain: 'Los genes dan instrucciones para rasgos como el grupo sanguíneo o el color natural de los ojos. El idioma, las habilidades y las cicatrices dependen de lo que vives y aprendes.' },
        { buckets: [
          { id: 'gen', label: 'Sobre todo de los genes', icon: 'Dna', color: 'var(--area-cnt)' },
          { id: 'amb', label: 'De lo que aprendo y vivo', icon: 'School', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'El grupo sanguíneo', bucket: 'gen' },
          { id: 'x2', text: 'El color natural de los ojos', bucket: 'gen' },
          { id: 'x3', text: 'El idioma que hablas', bucket: 'amb', feedback: 'Un bebé aprende el idioma que escucha en su familia y comunidad, sea k\'iche\', español o garífuna.' },
          { id: 'x4', text: 'Saber tocar la marimba', bucket: 'amb' },
          { id: 'x5', text: 'El tipo natural de cabello (liso o rizado)', bucket: 'gen' },
          { id: 'x6', text: 'Una cicatriz por una caída', bucket: 'amb' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.4.1'], ambito: 'conocer',
          prompt: 'Ana y Tomás son hermanos, tienen la misma madre y el mismo padre, pero **no son idénticos**. ¿Por qué?',
          explain: 'Cada óvulo y cada espermatozoide lleva una **mezcla distinta** de cromosomas (uno de cada par). Por eso cada hermano recibe una combinación diferente.' },
        { options: [
          { id: 'a', text: 'Porque cada uno recibió una combinación distinta de cromosomas de sus padres', icon: 'Dna' },
          { id: 'b', text: 'Porque uno tiene 46 cromosomas y el otro 23', icon: 'Hash', feedback: 'Los dos tienen 46 cromosomas en las células de su cuerpo.' },
          { id: 'c', text: 'Porque uno heredó solo de la mamá y el otro solo del papá', icon: 'User', feedback: 'Cada hijo recibe cromosomas de los dos: 23 de cada uno.' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.4.1'], ambito: 'conocer',
          prompt: 'Completa la comparación.',
          explain: 'Núcleo = biblioteca; cromosomas = libros; genes = recetas; ADN = el papel y la tinta en que todo está escrito.' },
        { text: 'Si el núcleo fuera una biblioteca, los [[cromosomas]] serían los libros y los [[genes]] serían las recetas dentro de cada libro. Todo está escrito en el [[ADN]]. Casi todas las células de tu cuerpo (no las reproductoras) tienen [[46]] cromosomas.',
          distractors: ['ribosomas', '23', 'cloroplastos'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.4.1'], prompt: '¿Qué es un **gen**?' },
        { options: [
          { id: 'a', text: 'Un organelo que produce energía' },
          { id: 'b', text: 'Un pedazo de ADN con la instrucción para una característica' },
          { id: 'c', text: 'Una célula reproductora' },
          { id: 'd', text: 'El conjunto de todos los cromosomas' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.4.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Los cromosomas se encuentran en el núcleo de la célula.', answer: true },
          { text: 'Una persona recibe todos sus cromosomas de su madre.', answer: false, why: 'Recibe 23 de la madre y 23 del padre.' },
          { text: 'Un cromosoma contiene muchos genes.', answer: true },
          { text: 'El óvulo y el espermatozoide tienen 46 cromosomas cada uno.', answer: false, why: 'Tienen 23; al unirse, suman 46.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Unicelulares y pluricelulares ───────────────────────── */
  lesson({
    id: 's02-cnt-2',
    title: 'Seres de una célula y de muchas células',
    icon: 'Microscope',
    minutes: 15,
    gancho: 'Si miras una gota de agua de un charco con un microscopio, verás seres diminutos que nadan. ¿Cómo puede vivir un ser que es solo una célula?',
    objetivos: [
      'Organizar seres vivos en unicelulares (como los protozoos) y pluricelulares (como los metazoos)',
      'Explicar cómo se organizan las células de un ser pluricelular: tejido, órgano, sistema y organismo',
    ],
    resumen: [
      'Los seres unicelulares están formados por una sola célula que hace todo: se alimenta, se mueve, responde y se reproduce. Ejemplos: bacterias, levaduras y protozoos.',
      'Los protozoos son unicelulares con núcleo que se alimentan de otros seres y muchos se mueven: la ameba (con pseudópodos), el paramecio (con cilios) y la giardia (con flagelos).',
      'Los seres pluricelulares tienen muchas células especializadas. A los animales pluricelulares se les llama metazoos; las plantas y muchos hongos también son pluricelulares.',
      'En un pluricelular las células forman tejidos; los tejidos, órganos; los órganos, sistemas; y los sistemas, el organismo.',
    ],
    media: {
      id: 's02-cnt-2-gota', kind: 'video', title: 'Una gota de agua al microscopio', aspect: '16:9', duration: 40,
      alt: 'Vista de microscopio de una gota de agua de charco: un paramecio nada rápido moviendo cilios y una ameba cambia de forma y estira pseudópodos.',
      brief: 'Video de 40 s grabado con microscopio escolar (o animación realista si no hay material propio): gota de agua de charco. Mostrar un paramecio nadando con sus cilios, una ameba que avanza estirando pseudópodos y rodea una partícula. Rótulos que aparecen: "paramecio: cilios", "ameba: pseudópodos", "cada uno es UNA sola célula". Barra de escala en micrómetros. Narración en español con subtítulos. Sin música estridente.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:2.1.1'], ambito: 'conocer',
          prompt: 'Mira el video. Esos seres diminutos que nadan en la gota, ¿son **seres vivos**?',
          explain: '¡Sí! Se alimentan, se mueven, responden y se reproducen. Y cada uno es **una sola célula**.' },
        { options: [
          { id: 'a', text: 'Sí, porque se alimentan, se mueven y se reproducen', icon: 'Sparkles' },
          { id: 'b', text: 'No, son solo polvo', icon: 'Wind', feedback: 'El polvo no se mueve por sí solo ni se alimenta. Estos seres sí.' },
          { id: 'c', text: 'No, porque son demasiado pequeños', icon: 'Minus', feedback: 'El tamaño no decide si algo está vivo: lo deciden sus funciones.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.1.1'], ambito: 'conocer', title: 'Una célula o muchas',
          prompt: 'Los seres vivos se pueden organizar según **cuántas células** los forman. Toca cada tarjeta.' },
        { icon: 'Blocks', body: 'Recuerda: la célula es la unidad de la vida. Algunos seres vivos son **una sola célula**; otros son **millones** o **billones** de células trabajando juntas.', reveal: [
          { icon: 'Circle', front: 'Unicelulares', back: 'Formados por **una sola célula** que hace todas las funciones. Casi siempre son **microscópicos**. Ejemplos: bacterias, levaduras (hongos del pan) y protozoos.' },
          { icon: 'Blocks', front: 'Pluricelulares', back: 'Formados por **muchas células**, cada grupo con un trabajo distinto. Ejemplos: una planta de frijol, un hongo de sombrero, un perro, tú.' },
          { icon: 'Microscope', front: 'Protozoos', back: 'Unicelulares **con núcleo** que se alimentan de otros seres, y muchos se **mueven**. Su nombre significa "primeros animales".' },
          { icon: 'Bird', front: 'Metazoos', back: 'Así se llama a los **animales pluricelulares**: desde una lombriz hasta un quetzal.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.1.1'], ambito: 'conocer', title: 'Conoce a los protozoos',
          prompt: 'Cada protozoo tiene su manera de moverse. Toca las tarjetas.',
          media: { id: 's02-cnt-2-protozoos', kind: 'diagram', title: 'Cuatro protozoos y cómo se mueven', aspect: '4:3',
            alt: 'Cuatro dibujos de protozoos: una ameba con prolongaciones, un paramecio en forma de suela cubierto de pelitos, una giardia con forma de gota y varios látigos, y un plasmodio dentro de un glóbulo rojo.',
            brief: 'Diagrama escolar con 4 recuadros en colores planos, cada uno con barra de escala: (1) Ameba con pseudópodos (flechas que indican que "estira el cuerpo"). (2) Paramecio con forma de suela de zapato cubierto de cilios (pelitos). (3) Giardia en forma de gota o pera con flagelos (látigos). (4) Plasmodio dentro de un glóbulo rojo y un zancudo pequeño al lado como referencia de cómo se transmite. Rótulos: nombre, forma de moverse y dónde vive. Fondo blanco, letra grande.' } },
        { icon: 'Microscope', body: 'Muchos protozoos viven **libres** en el agua o el suelo. Algunos son **parásitos**: viven dentro de otros seres y los enferman (lo verás en la próxima lección).', reveal: [
          { icon: 'Droplets', front: 'Ameba', back: 'Cambia de forma: **estira partes de su cuerpo** (pseudópodos, "falsos pies") para moverse y **rodear** su alimento.' },
          { icon: 'Waves', front: 'Paramecio', back: 'Tiene forma de suela de zapato y está cubierto de **cilios**, pelitos que se mueven como remos.' },
          { icon: 'Wind', front: 'Giardia', back: 'Se mueve con **flagelos**, como látigos. Vive en el intestino y puede causar diarrea si se toma agua contaminada.' },
          { icon: 'Bug', front: 'Plasmodio', back: 'Vive dentro de los glóbulos rojos y causa la **malaria** (paludismo). Lo transmite la picadura de ciertos zancudos.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.1.1'], ambito: 'conocer',
          prompt: 'Organiza estos seres vivos en **unicelulares** y **pluricelulares**.',
          hint: '¿Se puede ver a simple vista y tiene partes distintas (hojas, patas, órganos)? Entonces tiene muchas células.',
          explain: 'La ameba, el paramecio, la levadura y las bacterias son una sola célula. La lombriz, el hongo de sombrero, la milpa y la gallina tienen muchas células.' },
        { buckets: [
          { id: 'uni', label: 'Unicelular', icon: 'Circle', color: 'var(--area-cnt)' },
          { id: 'plu', label: 'Pluricelular', icon: 'Blocks', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'u1', text: 'Ameba', bucket: 'uni' },
          { id: 'u2', text: 'Lombriz de tierra', bucket: 'plu', feedback: 'Es pequeña, pero tiene músculos, piel e intestino: millones de células.' },
          { id: 'u3', text: 'Paramecio', bucket: 'uni' },
          { id: 'u4', text: 'Hongo de sombrero (champiñón)', bucket: 'plu' },
          { id: 'u5', text: 'Levadura que hace crecer el pan', bucket: 'uni', feedback: 'La levadura es un hongo, pero de una sola célula.' },
          { id: 'u6', text: 'Planta de maíz', bucket: 'plu' },
          { id: 'u7', text: 'Gallina', bucket: 'plu' },
          { id: 'u8', text: 'Bacteria del yogur', bucket: 'uni' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.1.1'], ambito: 'conocer', title: 'Cómo se organizan los pluricelulares',
          prompt: 'En un pluricelular, las células **se especializan** y se agrupan por niveles. Toca las tarjetas en orden.' },
        { icon: 'Layers', body: 'Una neurona no puede hacer el trabajo de un glóbulo rojo, y viceversa. Por eso las células se **organizan en equipos**.', reveal: [
          { icon: 'Circle', front: '1. Célula', back: 'Unidad básica. Ejemplo: una **célula muscular** del corazón.' },
          { icon: 'Layers', front: '2. Tejido', back: 'Grupo de células parecidas que hacen el mismo trabajo. Ejemplo: el **tejido muscular**.' },
          { icon: 'Heart', front: '3. Órgano', back: 'Varios tejidos juntos con una función. Ejemplo: el **corazón** (músculo, nervios, vasos).' },
          { icon: 'Route', front: '4. Sistema', back: 'Varios órganos que trabajan juntos. Ejemplo: el **sistema circulatorio** (corazón, venas, arterias, sangre).' },
          { icon: 'PersonStanding', front: '5. Organismo', back: 'El ser vivo completo, con todos sus sistemas: **tú**.' },
        ] },
      ),
      S.order(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.1.1'], ambito: 'conocer',
          prompt: 'Ordena los niveles de organización de un ser pluricelular, del más simple al más complejo.',
          hint: 'Empieza por la unidad más pequeña y termina con el ser vivo completo.',
          explain: 'Célula → tejido → órgano → sistema → organismo.' },
        { labels: { start: 'Más simple', end: 'Más complejo' }, items: [
          { id: 'n1', text: 'Célula', icon: 'Circle' },
          { id: 'n2', text: 'Tejido', icon: 'Layers' },
          { id: 'n3', text: 'Órgano', icon: 'Heart' },
          { id: 'n4', text: 'Sistema', icon: 'Route' },
          { id: 'n5', text: 'Organismo', icon: 'PersonStanding' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.1.1'], ambito: 'conocer', title: 'Ejemplo: ¿cómo come una ameba y cómo comes tú?',
          prompt: 'Compara la misma función, **alimentarse**, en un unicelular y en un pluricelular.' },
        { icon: 'Utensils', problem: 'Una ameba y una niña necesitan alimento. ¿Cómo lo consigue y lo usa cada una?',
          steps: [
            { text: 'La **ameba** estira sus pseudópodos, **rodea** una partícula de alimento y la encierra en una bolsita dentro de su citoplasma.', why: 'Una sola célula hace todo el trabajo.' },
            { text: 'Dentro de la misma célula, el alimento se digiere y las mitocondrias obtienen energía.' },
            { text: 'La **niña** mastica con los dientes; el **estómago** y el **intestino** (órganos del sistema digestivo) digieren la comida.', why: 'Aquí trabajan millones de células especializadas.' },
            { text: 'La **sangre** (sistema circulatorio) lleva los nutrientes a cada una de sus células, donde las mitocondrias obtienen energía.' },
          ],
          answer: 'En la ameba, **una célula** hace todo. En la niña, **muchas células especializadas**, organizadas en órganos y sistemas, se reparten el trabajo.',
          tip: 'Ventaja de ser pluricelular: cada célula se especializa y el organismo puede ser grande y complejo.' },
      ),
      S.match(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.1.1'], ambito: 'conocer',
          prompt: 'Une cada ejemplo con su **nivel de organización**.',
          explain: 'Neurona = célula; tejido nervioso = tejido; cerebro = órgano; sistema nervioso = sistema; un jaguar completo = organismo.' },
        { leftTitle: 'Ejemplo', rightTitle: 'Nivel', pairs: [
          { id: 'e1', left: 'Una neurona', leftIcon: 'Zap', right: 'Célula' },
          { id: 'e2', left: 'El tejido nervioso', leftIcon: 'Layers', right: 'Tejido' },
          { id: 'e3', left: 'El cerebro', leftIcon: 'Brain', right: 'Órgano' },
          { id: 'e4', left: 'El sistema nervioso', leftIcon: 'Route', right: 'Sistema' },
          { id: 'e5', left: 'Un jaguar', leftIcon: 'Cat', right: 'Organismo' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.1.1'], ambito: 'conocer',
          prompt: 'Une cada protozoo con su forma de moverse o de vivir.',
          explain: 'Ameba: pseudópodos. Paramecio: cilios. Giardia: flagelos. Plasmodio: vive dentro de glóbulos rojos y lo transmite un zancudo.' },
        { leftTitle: 'Protozoo', rightTitle: 'Característica', pairs: [
          { id: 'a', left: 'Ameba', right: 'Estira pseudópodos, "falsos pies"' },
          { id: 'p', left: 'Paramecio', right: 'Nada con cilios, como remos' },
          { id: 'g', left: 'Giardia', right: 'Se mueve con flagelos, como látigos' },
          { id: 'pl', left: 'Plasmodio', right: 'Vive en glóbulos rojos; lo transmite un zancudo' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.1.1'], ambito: 'conocer',
          prompt: '¿Cuál afirmación es correcta?',
          explain: 'Todos los protozoos son unicelulares, pero no todo unicelular es protozoo: las bacterias y las levaduras también son unicelulares y no son protozoos.' },
        { options: [
          { id: 'a', text: 'Todos los protozoos son unicelulares', icon: 'Circle' },
          { id: 'b', text: 'Todos los unicelulares son protozoos', icon: 'Copy', feedback: 'Las bacterias y las levaduras son unicelulares, pero no son protozoos.' },
          { id: 'c', text: 'Los metazoos tienen una sola célula', icon: 'Bird', feedback: 'Los metazoos son animales pluricelulares.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.1.1'], prompt: '¿Cuál de estos seres vivos es un **protozoo**?' },
        { options: [
          { id: 'a', text: 'La lombriz de tierra' },
          { id: 'b', text: 'El paramecio' },
          { id: 'c', text: 'El hongo de sombrero' },
          { id: 'd', text: 'La rana' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En un ser unicelular, una sola célula realiza todas las funciones vitales.', answer: true },
          { text: 'El corazón es un ejemplo de tejido.', answer: false, why: 'El corazón es un órgano: está formado por varios tejidos.' },
          { text: 'Los metazoos son animales formados por muchas células.', answer: true },
          { text: 'Un tejido es un grupo de órganos que trabajan juntos.', answer: false, why: 'Eso es un sistema. Un tejido es un grupo de células parecidas.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Parásitos ───────────────────────── */
  lesson({
    id: 's02-cnt-3',
    title: 'Parásitos: cómo dañan y cómo prevenirlos',
    icon: 'Bug',
    minutes: 15,
    gancho: 'En la escuela mandan una nota: "Hay casos de piojos; revisen a sus hijos". ¿Qué tipo de relación hay entre un piojo y una persona?',
    objetivos: [
      'Identificar los tipos de parásitos: ectoparásitos y endoparásitos',
      'Explicar e ilustrar los daños que causan los parásitos en el cuerpo',
      'Enumerar formas de prevenir y eliminar parásitos',
    ],
    resumen: [
      'Un parásito vive sobre o dentro de otro ser vivo (el hospedero), se alimenta de él y le causa daño.',
      'Ectoparásitos viven por fuera (piojos, pulgas, garrapatas, ácaros de la sarna). Endoparásitos viven por dentro: protozoos (ameba, giardia) y gusanos (lombriz intestinal, tenia, oxiuros, uncinaria).',
      'Daños: roban nutrientes (desnutrición, anemia), causan diarrea y dolor de estómago, picazón y heridas, y algunos transmiten enfermedades.',
      'Prevención: lavarse las manos con agua y jabón, beber agua hervida o clorada, lavar frutas y verduras, cocinar bien la carne, usar zapatos, uñas cortas, usar sanitario o letrina, no compartir peines. Para eliminarlos: acudir al centro de salud; no automedicarse.',
    ],
    media: {
      id: 's02-cnt-3-parasitos', kind: 'diagram', title: 'Parásitos por fuera y por dentro', aspect: '3:4',
      alt: 'Silueta de un niño: afuera, en la cabeza y la piel, un piojo, una pulga y una garrapata; adentro, en el intestino, una ameba, una giardia, una lombriz intestinal y una tenia, cada uno con su tamaño relativo.',
      brief: 'Diagrama vertical, silueta neutra de una persona (sin rasgos realistas), en colores planos. Lado exterior: piojo en el cabello, pulga y garrapata en la piel, con etiqueta "ectoparásitos (por fuera)". Lado interior: sistema digestivo simplificado con ameba y giardia (con lupa, "microscópicos"), lombriz intestinal (áscaris), oxiuros y tenia (dibujo esquemático, NO realista ni asqueroso) con etiqueta "endoparásitos (por dentro)". Cada uno con una línea guía y una frase del daño. Estilo amable, sin imágenes grotescas.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:1.5.1'], ambito: 'conocer',
          prompt: 'Entre un **piojo** y la persona en cuya cabeza vive, ¿qué tipo de relación hay?',
          explain: 'El piojo se beneficia (se alimenta de sangre) y la persona sale dañada (picazón, heridas). Esa relación se llama **parasitismo**.' },
        { options: [
          { id: 'a', text: 'Los dos se ayudan', icon: 'Handshake', feedback: 'La persona no gana nada: solo picazón y molestias.' },
          { id: 'b', text: 'El piojo se beneficia y la persona sale dañada', icon: 'Bug' },
          { id: 'c', text: 'No se afectan en nada', icon: 'Minus', feedback: 'Sí se afectan: el piojo se alimenta de la sangre de la persona.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.5.1'], ambito: 'conocer', title: 'Seres vivos que dependen de otros',
          prompt: 'Los seres vivos se relacionan entre sí: dependen unos de otros. Toca las tarjetas.' },
        { icon: 'Link', body: 'Esta dependencia se llama **interdependencia**. Algunas relaciones benefician a los dos; otras, solo a uno.', reveal: [
          { icon: 'Flower', front: 'Ayuda mutua', back: 'La **abeja** toma néctar de la flor y, a la vez, lleva su polen a otras flores. **Los dos ganan.**' },
          { icon: 'Bug', front: 'Parasitismo', back: 'Un **parásito** vive sobre o dentro de otro ser, el **hospedero**; se alimenta de él y **le hace daño**, aunque casi nunca lo mata rápido.' },
          { icon: 'Home', front: 'Hospedero', back: 'El ser vivo que "hospeda" al parásito: puede ser una persona, un perro, una vaca o una planta.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.5.1'], ambito: 'conocer', title: 'Tipos de parásitos',
          prompt: 'Los parásitos se clasifican según **dónde viven** en el hospedero. Observa el diagrama de la lección y toca las tarjetas.' },
        { icon: 'Search', body: 'Algunos se ven a simple vista (piojos, lombrices) y otros son **microscópicos** (ameba, giardia: son protozoos, como viste en la lección anterior).', reveal: [
          { icon: 'Bug', front: 'Ectoparásitos (por fuera)', back: 'Viven en la **piel o el pelo**: **piojos**, **pulgas**, **garrapatas** y los **ácaros** que causan la sarna.' },
          { icon: 'Microscope', front: 'Endoparásitos microscópicos', back: 'Viven **dentro** del cuerpo y son protozoos: la **ameba** y la **giardia**, que viven en el intestino.' },
          { icon: 'Route', front: 'Endoparásitos: gusanos', back: '**Lombriz intestinal** (áscaris), **tenia** o solitaria, **oxiuros** (gusanitos blancos pequeños) y **uncinaria**, que entra por la piel de los pies descalzos.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.5.1'], ambito: 'conocer',
          prompt: 'Clasifica cada parásito según **dónde vive**.',
          hint: 'Si vive en el pelo o en la piel, es ectoparásito. Si vive en el intestino o la sangre, es endoparásito.',
          explain: 'Ecto = afuera; endo = adentro.' },
        { buckets: [
          { id: 'ecto', label: 'Ectoparásito (por fuera)', icon: 'Bug', color: 'var(--c-maiz-strong)' },
          { id: 'endo', label: 'Endoparásito (por dentro)', icon: 'Microscope', color: 'var(--area-cnt)' },
        ], items: [
          { id: 'p1', text: 'Piojo', bucket: 'ecto' },
          { id: 'p2', text: 'Ameba', bucket: 'endo' },
          { id: 'p3', text: 'Garrapata', bucket: 'ecto' },
          { id: 'p4', text: 'Lombriz intestinal', bucket: 'endo' },
          { id: 'p5', text: 'Pulga', bucket: 'ecto' },
          { id: 'p6', text: 'Tenia o solitaria', bucket: 'endo' },
          { id: 'p7', text: 'Uncinaria', bucket: 'endo', feedback: 'Entra por la piel de los pies, pero vive en el intestino: es endoparásito.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.5.2'], ambito: 'conocer', title: '¿Qué daños causan?',
          prompt: 'Los parásitos dañan al hospedero de distintas maneras. Toca cada tarjeta.' },
        { icon: 'HeartPulse', body: 'Los niños y las niñas con parásitos pueden **crecer menos**, cansarse más y **aprender con más dificultad**, porque su cuerpo no aprovecha bien los alimentos.', reveal: [
          { icon: 'Utensils', front: 'Roban nutrientes', back: 'La **lombriz intestinal** y la **tenia** se alimentan de lo que comes: causan **desnutrición** y pérdida de peso.' },
          { icon: 'Droplet', front: 'Causan anemia', back: 'La **uncinaria** se alimenta de sangre en el intestino: provoca **anemia** (poca sangre sana), cansancio y palidez.' },
          { icon: 'Droplets', front: 'Causan diarrea', back: 'La **ameba** y la **giardia** causan **diarrea**, dolor de estómago y gases. La diarrea hace perder agua: puede causar **deshidratación**.' },
          { icon: 'Hand', front: 'Picazón y heridas', back: '**Piojos**, **pulgas** y **sarna** causan picazón; al rascarse se hacen heridas que se pueden infectar. Los **oxiuros** causan picazón alrededor del ano, sobre todo de noche.' },
          { icon: 'Bug', front: 'Transmiten enfermedades', back: 'Algunas **garrapatas** y **pulgas** pueden pasar microbios que causan otras enfermedades.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.5.2'], ambito: 'conocer',
          prompt: 'Une cada parásito con el **daño** principal que causa.',
          hint: 'Recuerda las tarjetas: ¿cuál chupa sangre en el intestino?, ¿cuál causa picazón en la cabeza?',
          explain: 'Uncinaria → anemia; ameba → diarrea; tenia → roba nutrientes; piojo → picazón en la cabeza.' },
        { leftTitle: 'Parásito', rightTitle: 'Daño', pairs: [
          { id: 'u', left: 'Uncinaria', right: 'Anemia, cansancio y palidez' },
          { id: 'a', left: 'Ameba', right: 'Diarrea y dolor de estómago' },
          { id: 't', left: 'Tenia o solitaria', right: 'Roba nutrientes y causa pérdida de peso' },
          { id: 'p', left: 'Piojo', right: 'Picazón y heridas en la cabeza' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.5.2', 'cnt:1.5.3'], ambito: 'hacer', title: 'Ejemplo: el ciclo de la lombriz intestinal',
          prompt: 'Para prevenir un parásito hay que conocer **cómo llega** al cuerpo. Mira la animación y sigue el ciclo.',
          media: { id: 's02-cnt-3-ciclo', kind: 'animation', title: 'Cómo llega la lombriz intestinal y cómo cortar el ciclo', aspect: '16:9', duration: 45,
            alt: 'Animación circular: huevos microscópicos en la tierra, manos sucias y verduras sin lavar, la boca, el intestino con lombrices y de nuevo huevos en el suelo. En cada paso aparece una "tijera" que corta el ciclo: letrina, lavado de manos, lavado de verduras.',
            brief: 'Animación 2D de 45 s en forma de ciclo (flechas en círculo), estilo amable sin imágenes grotescas. (1) Huevos microscópicos (con lupa) en tierra contaminada con heces por falta de letrina. (2) Pasan a manos que juegan en la tierra y a verduras sin lavar. (3) Llegan a la boca. (4) En el intestino crecen las lombrices y ponen huevos, que salen con las heces. En cada flecha aparece un ícono de tijera con la medida que corta el ciclo: "usar letrina o sanitario", "lavar las manos con agua y jabón", "lavar las verduras", "uñas cortas". Narración en español con subtítulos.' } },
        { icon: 'RefreshCw', problem: '¿Cómo llega la lombriz intestinal (áscaris) al cuerpo de un niño y en qué puntos se puede **cortar** su ciclo?',
          steps: [
            { text: 'Una persona con lombrices elimina **huevos** microscópicos en sus heces. Si no usa letrina o sanitario, los huevos quedan en la **tierra** o el agua.', why: 'Corte 1: usar siempre sanitario o letrina.' },
            { text: 'Los huevos se pegan a las **manos**, a las **uñas** o a las **verduras** que crecen en esa tierra.', why: 'Corte 2: lavar bien frutas y verduras; mantener las uñas cortas.' },
            { text: 'Si alguien come sin lavarse las manos, los huevos llegan a la **boca** y al **intestino**.', why: 'Corte 3: lavarse las manos con agua y jabón antes de comer y después de ir al baño.' },
            { text: 'En el intestino, las lombrices crecen, **roban nutrientes** y ponen más huevos: el ciclo vuelve a empezar.', why: 'Si hay síntomas, el centro de salud indica el desparasitante adecuado.' },
          ],
          answer: 'El ciclo es: heces → tierra → manos o verduras → boca → intestino. Se corta con **letrina, lavado de manos, verduras lavadas y uñas cortas**.',
          tip: 'Casi todos los parásitos intestinales llegan por la boca: la higiene es la mejor defensa.' },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.5.3'], ambito: 'hacer',
          prompt: 'En el mercado del pueblo, ¿estas acciones **ayudan** o **no ayudan** a prevenir parásitos?',
          explain: 'El agua sin tratar, la carne mal cocida y andar descalzo son las principales puertas de entrada de los parásitos.' },
        { buckets: [
          { id: 'si', label: 'Ayuda a prevenir', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          { id: 'no', label: 'No ayuda (es un riesgo)', icon: 'X', color: 'var(--c-bad)' },
        ], items: [
          { id: 'a1', text: 'Lavarse las manos con agua y jabón antes de comer', bucket: 'si' },
          { id: 'a2', text: 'Beber agua directo del chorro o del río, sin hervir ni clorar', bucket: 'no' },
          { id: 'a3', text: 'Comer carne de cerdo bien cocida', bucket: 'si', feedback: 'La carne mal cocida puede tener larvas de tenia; cocinarla bien las elimina.' },
          { id: 'a4', text: 'Caminar descalzo en tierra húmeda cerca de una letrina', bucket: 'no', feedback: 'Por la piel de los pies puede entrar la uncinaria.' },
          { id: 'a5', text: 'Lavar las frutas y verduras antes de comerlas', bucket: 'si' },
          { id: 'a6', text: 'Compartir peines y gorras', bucket: 'no', feedback: 'Así se pasan los piojos de una cabeza a otra.' },
          { id: 'a7', text: 'Mantener las uñas cortas y limpias', bucket: 'si' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.5.2', 'cnt:1.5.3'], ambito: 'hacer',
          prompt: 'En una aldea, varios niños están **pálidos y muy cansados** (anemia). Muchos juegan **descalzos** cerca de una letrina en mal estado. ¿Qué parásito sospechas y qué recomiendas?',
          explain: 'La **uncinaria** entra por la piel de los pies en suelos contaminados y chupa sangre en el intestino: causa anemia. Se previene con **zapatos** y **letrinas limpias**, y el centro de salud da el tratamiento.' },
        { options: [
          { id: 'a', text: 'Piojos: comprar un peine fino', icon: 'Bug', feedback: 'Los piojos causan picazón en la cabeza, no anemia con este patrón.' },
          { id: 'b', text: 'Uncinaria: usar zapatos, reparar la letrina e ir al centro de salud', icon: 'Footprints' },
          { id: 'c', text: 'Giardia: tomar más refresco', icon: 'Droplet', feedback: 'La giardia causa diarrea, y los refrescos no la previenen ni la curan.' },
        ], correct: ['b'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['cnt', 'l1'], cnb: ['cnt:1.5.2', 'cnt:1.5.3'], ambito: 'hacer', title: 'Tu cartel de salud',
          prompt: 'Diseña el texto de un **cartel** para el baño de tu escuela sobre **un parásito**: si es ecto o endoparásito, cómo llega, qué daño causa y cómo prevenirlo. Si puedes, dibújalo después en una hoja.' },
        { placeholder: 'Título del cartel, cómo llega el parásito, qué daño causa y 3 formas de prevenirlo…',
          model: '¡ALTO A LA AMEBA! La ameba es un endoparásito microscópico: vive en el intestino. Llega al cuerpo con el agua o la comida contaminada. Causa diarrea y dolor de estómago, y la diarrea nos deshidrata. Para prevenirla: 1) lávate las manos con agua y jabón antes de comer y después de ir al baño; 2) bebe agua hervida o clorada; 3) lava bien las frutas y verduras. Si tienes diarrea, avisa a tu familia y ve al centro de salud.',
          rubric: ['Nombra un parásito y dice si es ecto o endoparásito', 'Explica cómo llega al cuerpo', 'Describe el daño que causa', 'Da al menos 3 formas de prevenirlo', 'Recomienda acudir al centro de salud en lugar de automedicarse'],
          minWords: 40 },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.1'], prompt: '¿Cuál de estos parásitos es un **ectoparásito**?' },
        { options: [
          { id: 'a', text: 'La giardia' },
          { id: 'b', text: 'La tenia' },
          { id: 'c', text: 'La pulga' },
          { id: 'd', text: 'La lombriz intestinal' },
        ], correct: ['c'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.2', 'cnt:1.5.3'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Beber agua hervida o clorada ayuda a prevenir la ameba y la giardia.', answer: true },
          { text: 'Los parásitos intestinales pueden causar desnutrición porque roban nutrientes.', answer: true },
          { text: 'Si sospechas que tienes parásitos, lo mejor es tomar cualquier pastilla que haya en casa.', answer: false, why: 'Hay que acudir al centro de salud: el personal indica el tratamiento correcto.' },
          { text: 'Usar zapatos no tiene relación con los parásitos.', answer: false, why: 'Los zapatos impiden que la uncinaria entre por la piel de los pies.' },
        ] },
      ),
      cierre({ areas: ['cnt'], cnb: [] },
        ['Explico la relación entre ADN, cromosomas y genes', 'Distingo seres unicelulares de pluricelulares', 'Explico cómo prevenir los parásitos'],
        ['Me lavaré las manos antes de comer y después de ir al baño', 'Beberé agua hervida, clorada o purificada', 'Compartiré mi cartel de salud con mi familia']),
    ],
  }),
];
