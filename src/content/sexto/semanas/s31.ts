import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 31 · Unidad 4 "Fortaleciendo nuestro futuro"
 * Tema generador: Crecer con futuro
 * En Puerto Barrios, Izabal, sexto grado se pregunta cómo crece todo: el universo, las células,
 * su propio cuerpo, el puerto y la comunidad. Mide su estatura, descubre la mitosis, investiga
 * el puerto y el reciclaje, decide con información (regla de tres e intereses) y prepara una
 * jornada de salto, música y palabra para imaginar su futuro.
 */
export default semana({
  id: 's31',
  unidad: 4,
  semana: 31,
  kind: 'aprendizaje',
  temaGenerador: 'Crecer con futuro',
  title: 'Crecer con futuro',
  subtitle: 'Células que se dividen, puertos, decisiones, saltos y armonías',
  icon: 'Sprout',
  color: 'var(--area-cnt)',
  contexto: 'En Puerto Barrios, Izabal, los barcos llegan y salen de los puertos del Caribe guatemalteco todos los días. Sexto grado de una escuela del lugar, con estudiantes garífunas, q\'eqchi\'es y ladinos, se pregunta cómo crece todo: el universo, las células, su propio cuerpo, el puerto y la comunidad. Esta semana medirás tu estatura, descubrirás cómo se dividen las células, investigarás qué deja el puerto a la región y aprenderás a decidir con información para fortalecer tu futuro.',
  ejes: ['sostenible', 'vida-ciudadana', 'trabajo', 'multiculturalidad', 'vida-familiar'],
  media: {
    id: 's31-portada', kind: 'video', title: 'Todo crece', aspect: '16:9', duration: 60,
    alt: 'Una galaxia que gira se transforma en una célula que se divide, luego en una niña que se mide junto a una pared y finalmente en un puerto con barcos al amanecer.',
    brief: 'Animación 2D de 60 s con transiciones suaves: (1) nube de gas y estrellas que forman una galaxia; (2) la Tierra joven con océanos; (3) una célula que se divide en dos y luego en cuatro; (4) una niña garífuna que se mide la estatura con una marca en la pared de su casa; (5) vista del puerto de Santo Tomás de Castilla al amanecer, con grúas y barcos (sin nombres de empresas). Texto final: "Todo crece. ¿Cómo quieres crecer tú?". Música con tambor garífuna suave y marimba.',
  },
  badge: { id: 'medalla-s31', name: 'Semilla de futuro', icon: 'Sprout', desc: 'Completaste la semana 31 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's31-d1-celulas-crecer',
      title: 'Del universo a mis células',
      icon: 'Dna',
      minutes: 15,
      day: 1,
      gancho: 'Eres más alto que hace un año. ¿De dónde salió todo ese "cuerpo nuevo"?',
      objetivos: ['Ordenar grandes momentos desde el origen del universo hasta la vida', 'Describir las fases de la mitosis y diferenciarla de la meiosis', 'Sumar y restar potencias de igual base', 'Medir tu estatura correctamente'],
      resumen: [
        'Según la ciencia, el universo comenzó hace unos 13,800 millones de años; la Tierra se formó hace unos 4,500 millones de años y la primera vida, unicelular, apareció en los océanos hace más de 3,500 millones de años.',
        'La mitosis tiene cuatro fases: profase, metafase, anafase y telofase. Produce 2 células iguales, con el mismo número de cromosomas; sirve para crecer y reparar.',
        'La meiosis forma óvulos y espermatozoides: produce 4 células con la mitad de cromosomas (23 en el ser humano).',
        'Las células forman tejidos: en animales, epitelial, muscular, nervioso y conectivo; en plantas, meristemático, protector, conductor y fundamental.',
        'Para sumar o restar potencias de igual base se calcula cada potencia y luego se opera: 2³ + 2² = 8 + 4 = 12. ¡No se suman los exponentes!',
      ],
      media: {
        id: 's31-d1-linea', kind: 'diagram', title: 'La gran línea del tiempo', aspect: '16:9',
        alt: 'Línea del tiempo horizontal con el origen del universo, la formación de la Tierra, la primera vida en el océano, las plantas, los dinosaurios y los seres humanos.',
        brief: 'Línea del tiempo horizontal (no a escala, con un aviso pequeño "no está a escala") con 6 hitos e ilustraciones: 1 origen del universo, hace unos 13,800 millones de años (destello); 2 formación de la Tierra, hace unos 4,500 millones de años (planeta rojizo); 3 primera vida unicelular en el océano, hace más de 3,500 millones de años (células en agua); 4 plantas en tierra firme (helechos); 5 dinosaurios; 6 seres humanos (siluetas de una familia). Fondo que pasa de negro a azul y a verde.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'ccss'], cnb: ['cnt:1.1.4'], ambito: 'conocer', title: 'Una historia de crecimiento',
            prompt: 'Desde su origen, el universo y la vida no han dejado de **cambiar y crecer**. Toca cada tarjeta.' },
          { icon: 'Sparkles', body: 'La ciencia reconstruye esta historia con telescopios, rocas y fósiles.', reveal: [
            { icon: 'Sparkles', front: 'El universo', back: 'Comenzó hace unos **13,800 millones de años** con una gran expansión y se formaron estrellas y galaxias.' },
            { icon: 'Earth', front: 'La Tierra', back: 'Se formó hace unos **4,500 millones de años**. Al enfriarse, se formaron los océanos.' },
            { icon: 'Droplets', front: 'La primera vida', back: 'Seres de **una sola célula** en los océanos, hace más de 3,500 millones de años.' },
            { icon: 'Sprout', front: 'La evolución', back: 'Con el tiempo aparecieron seres de muchas células, plantas, animales y, muy recientemente, los seres humanos.' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['cnt', 'ccss'], cnb: ['cnt:1.1.4'], ambito: 'conocer',
            prompt: 'Ordena estos momentos desde el **más antiguo** hasta el **más reciente**.',
            explain: 'La vida empezó muy sencilla (una célula) y se volvió más compleja con el tiempo. Los seres humanos somos muy recientes en la historia de la Tierra.' },
          { items: [
            { id: 't1', text: 'Origen del universo' },
            { id: 't2', text: 'Formación de la Tierra' },
            { id: 't3', text: 'Primeros seres unicelulares en el océano' },
            { id: 't4', text: 'Primeras plantas en tierra firme' },
            { id: 't5', text: 'Dinosaurios' },
            { id: 't6', text: 'Primeros seres humanos' },
          ], labels: { start: 'Más antiguo', end: 'Más reciente' } },
        ),
        S.explain(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.2.4'], ambito: 'conocer', title: 'La mitosis, paso a paso',
            prompt: 'Creces porque tus células se **dividen**. Esa división se llama **mitosis** y tiene cuatro fases. Toca cada una.',
            media: { id: 's31-d1-mitosis', kind: 'animation', title: 'Una célula se convierte en dos', aspect: '16:9', duration: 50,
              alt: 'Animación de una célula animal cuyo núcleo desaparece, los cromosomas se alinean en el centro, se separan hacia los extremos y se forman dos células hijas.',
              brief: 'Animación 2D de 50 s, colores claros, con rótulo grande de cada fase: (1) Profase: los cromosomas se condensan en forma de X y la membrana del núcleo se deshace; (2) Metafase: los cromosomas se alinean en el centro (línea punteada); (3) Anafase: cada cromosoma se separa en dos mitades que viajan a polos opuestos; (4) Telofase: se forman dos núcleos y la célula se estrangula por el centro hasta quedar dos células iguales. Narración infantil en español y subtítulos. Cierre: "2 células iguales, con el mismo número de cromosomas".' } },
          { icon: 'Dna', body: 'Al final de la mitosis hay **dos células hijas iguales** a la célula madre.', reveal: [
            { icon: 'Circle', front: '1. Profase', back: 'Los cromosomas se **condensan** y se hacen visibles; la membrana del núcleo desaparece.' },
            { icon: 'Minus', front: '2. Metafase', back: 'Los cromosomas se **alinean en el centro** de la célula.' },
            { icon: 'Maximize2', front: '3. Anafase', back: 'Las mitades de cada cromosoma se **separan** hacia los extremos.' },
            { icon: 'Copy', front: '4. Telofase', back: 'Se forman **dos núcleos** y la célula se divide en dos.' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.2.4'], ambito: 'conocer',
            prompt: 'Ordena lo que ocurre en la **mitosis**.',
            hint: 'Recuerda la palabra "PROMETANATELO": PROfase, METAfase, ANAfase, TELOfase.',
            explain: 'Profase → metafase → anafase → telofase. Así tu piel se renueva y un hueso roto se repara.' },
          { items: [
            { id: 'm1', text: 'Los cromosomas se condensan y el núcleo se deshace (profase)' },
            { id: 'm2', text: 'Los cromosomas se alinean en el centro (metafase)' },
            { id: 'm3', text: 'Los cromosomas se separan hacia los extremos (anafase)' },
            { id: 'm4', text: 'Se forman dos núcleos y dos células (telofase)' },
          ], labels: { start: 'Inicio', end: 'Final' } },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.2.4'], ambito: 'conocer',
            prompt: 'Existe otra división llamada **meiosis**, que forma los óvulos y los espermatozoides. Clasifica cada característica.',
            explain: 'La mitosis mantiene los 46 cromosomas para crecer y reparar. La meiosis reduce a la mitad (23) para que, al unirse óvulo y espermatozoide, el nuevo ser tenga otra vez 46.' },
          { buckets: [
            { id: 'mit', label: 'Mitosis', icon: 'Copy', color: 'var(--area-cnt)' },
            { id: 'mei', label: 'Meiosis', icon: 'Dna', color: 'var(--area-l1)' },
          ], items: [
            { id: 'k1', text: 'Produce 2 células iguales', bucket: 'mit' },
            { id: 'k2', text: 'Sirve para crecer y reparar tejidos', bucket: 'mit' },
            { id: 'k3', text: 'En el ser humano, las células hijas tienen 46 cromosomas', bucket: 'mit' },
            { id: 'k4', text: 'Produce 4 células distintas entre sí', bucket: 'mei' },
            { id: 'k5', text: 'Forma óvulos y espermatozoides', bucket: 'mei' },
            { id: 'k6', text: 'En el ser humano, las células hijas tienen 23 cromosomas', bucket: 'mei', feedback: 'En la meiosis las células quedan con la mitad de cromosomas: 23.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['cnt', 'ef'], cnb: ['cnt:1.3.4'], ambito: 'conocer',
            prompt: 'Al dividirse, las células se organizan en **tejidos**. Une cada tejido con su función.',
            explain: 'Cuando creces, cada tejido suma células nuevas por mitosis. En las plantas, el tejido meristemático está en las puntas de raíces y tallos: por eso crecen desde ahí.' },
          { leftTitle: 'Tejido', rightTitle: 'Función', pairs: [
            { id: 'mus', left: 'Muscular (animal)', leftIcon: 'Dumbbell', right: 'Permite el movimiento' },
            { id: 'ner', left: 'Nervioso (animal)', leftIcon: 'Brain', right: 'Lleva mensajes por el cuerpo' },
            { id: 'epi', left: 'Epitelial (animal)', leftIcon: 'Hand', right: 'Cubre y protege, como la piel' },
            { id: 'mer', left: 'Meristemático (vegetal)', leftIcon: 'Sprout', right: 'Hace crecer raíces y tallos' },
            { id: 'con', left: 'Conductor (vegetal)', leftIcon: 'Droplets', right: 'Transporta agua y savia' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'cnt'], cnb: ['mat:4.2.5', 'cnt:1.2.4'], ambito: 'hacer',
            prompt: 'Cada mitosis **duplica** las células. Una célula que se divide 3 veces produce **2³** células; otra que se divide 2 veces produce **2²**. ¿Cuántas células hay **en total**? Calcula **2³ + 2²**.',
            hint: 'Calcula cada potencia por separado: 2³ = 2 × 2 × 2 y 2² = 2 × 2. Luego suma.',
            explain: '2³ + 2² = 8 + 4 = 12. Con potencias de igual base, primero se calcula cada potencia. ¡No se suman los exponentes!' },
          { answer: 12, unit: 'células', stimulus: '2³ + 2² = ?', misconceptions: [
            { value: 32, msg: 'Sumaste los exponentes (2⁵ = 32). Eso solo se hace al multiplicar potencias, no al sumarlas.' },
            { value: 10, msg: 'Multiplicaste base por exponente (2 × 3 + 2 × 2). La potencia es multiplicar la base por sí misma.' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['ef', 'mat', 'cnt'], cnb: ['ef:1.1.5'], ambito: 'hacer',
            prompt: 'Para medir tu **estatura**: quítate los zapatos, pega talones, espalda y cabeza a la pared, mira al frente y pide que marquen con un libro plano sobre tu cabeza. Supongamos que **Nayeli** midió **139 cm** en enero y **145 cm** en octubre. ¿Cuántos centímetros creció?',
            explain: '145 − 139 = 6 cm. A tu edad es normal crecer varios centímetros al año, gracias a la mitosis, a la buena alimentación y al descanso. Cada persona crece a su propio ritmo.' },
          { answer: 6, unit: 'cm', stimulus: '145 cm − 139 cm = ?' },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.2.4'], prompt: '¿En qué fase de la mitosis los cromosomas se **alinean en el centro** de la célula?' },
          { options: [
            { id: 'a', text: 'Metafase' },
            { id: 'b', text: 'Profase', feedback: 'En la profase los cromosomas se condensan y el núcleo se deshace.' },
            { id: 'c', text: 'Telofase', feedback: 'En la telofase ya se forman los dos núcleos nuevos.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['mat', 'cnt'], cnb: ['mat:4.2.5', 'cnt:1.1.4', 'cnt:1.3.4'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: '3² − 3¹ = 6', answer: true, why: '9 − 3 = 6.' },
            { text: '2⁴ + 2¹ = 2⁵', answer: false, why: '2⁴ + 2¹ = 16 + 2 = 18, y 2⁵ = 32.' },
            { text: 'La primera vida en la Tierra fue de una sola célula.', answer: true },
            { text: 'El tejido nervioso transporta el agua en las plantas.', answer: false, why: 'En las plantas el agua viaja por el tejido conductor; el nervioso es de los animales.' },
          ] },
        ),
        cierre({ areas: ['cnt', 'ef'], cnb: ['ef:1.1.5'] }, ['Explico cómo crecen los seres vivos gracias a la mitosis', 'Diferencio mitosis de meiosis', 'Sumo y resto potencias de igual base sin sumar exponentes'],
          ['Mediré mi estatura en casa y la anotaré con la fecha', 'Comeré y dormiré bien para crecer sano', 'Explicaré a mi familia las fases de la mitosis']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's31-d2-puerto-recursos',
      title: 'Puertos, especies y recursos',
      icon: 'Ship',
      minutes: 15,
      day: 2,
      gancho: 'Muchas cosas de tu casa llegaron en barco. ¿Qué entra y qué sale por los puertos de Guatemala?',
      objetivos: ['Explicar por qué los puertos impulsan el desarrollo de los continentes', 'Relacionar la selección natural con la conservación de las especies', 'Valorar el reciclaje y conocer casos ejemplares de buen manejo de recursos', 'Leer y construir una gráfica en inglés'],
      resumen: [
        'Guatemala tiene puertos en el Pacífico (Puerto Quetzal) y en el Caribe (Santo Tomás de Castilla y Puerto Barrios). Por los puertos entran y salen mercancías, se crean empleos y se conectan los continentes.',
        'La selección natural (Charles Darwin): los individuos con características más útiles para su ambiente sobreviven y se reproducen más, y así esas características se conservan en la especie.',
        'Reciclar ahorra materia prima y energía, reduce la basura y puede generar ingresos.',
        'Casos ejemplares: las concesiones forestales comunitarias de la Reserva de la Biosfera Maya, en Petén, y el pago por servicios ambientales en Costa Rica.',
        'Toda actividad económica tiene efectos en el ambiente: se pueden reducir los daños con buenas prácticas.',
      ],
      media: {
        id: 's31-d2-puertos', kind: 'image', title: 'Los puertos de Guatemala', aspect: '16:9',
        alt: 'Mapa de Guatemala con Puerto Quetzal en el Pacífico y Santo Tomás de Castilla y Puerto Barrios en el Caribe, con rutas de barcos hacia otros continentes.',
        brief: 'Mapa ilustrado de Guatemala y su entorno. Pacífico: ícono de ancla en Puerto Quetzal (Escuintla). Caribe: anclas en Santo Tomás de Castilla y Puerto Barrios (Izabal). Líneas punteadas de rutas marítimas hacia Asia (por el Pacífico), Europa y Estados Unidos (por el Atlántico) y el Canal de Panamá. Íconos pequeños de lo que sale (café, banano, cardamomo, azúcar) y lo que entra (maquinaria, combustible, ropa). Leyenda clara, sin logotipos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'pyd'], cnb: ['ccss:1.1.4'], ambito: 'conocer', title: 'Puertas al mundo',
            prompt: 'Un **puerto** es una puerta entre la tierra y el mar. Toca cada tarjeta.' },
          { icon: 'Anchor', body: 'La mayor parte del comercio entre continentes viaja en barco.', reveal: [
            { icon: 'Ship', front: 'Guatemala', back: 'Puerto Quetzal en el **Pacífico**; Santo Tomás de Castilla y Puerto Barrios en el **Caribe**.' },
            { icon: 'Package', front: 'Qué sale', back: 'Café, banano, cardamomo, azúcar y otros productos.' },
            { icon: 'Truck', front: 'Qué entra', back: 'Maquinaria, combustible, medicinas, ropa y aparatos.' },
            { icon: 'Globe', front: 'En el mundo', back: 'Puertos gigantes como Shanghái (China) o Róterdam (Países Bajos) mueven millones de contenedores y hacen crecer a sus regiones.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['ccss', 'pyd', 'cnt'], cnb: ['ccss:1.1.4', 'pyd:1.1.3'], ambito: 'conocer',
            prompt: 'La actividad del puerto trae **beneficios** y también puede causar **efectos ambientales**. Clasifica cada situación.',
            hint: 'Pregúntate: ¿ayuda a la gente y a la economía, o daña el agua, el aire o los seres vivos?',
            explain: 'Los puertos impulsan el desarrollo, pero hay que cuidar los manglares, el agua y el aire. Una buena planificación reduce los daños.' },
          { buckets: [
            { id: 'ben', label: 'Beneficio para el desarrollo', icon: 'TrendingUp', color: 'var(--c-ok)' },
            { id: 'amb', label: 'Posible efecto ambiental', icon: 'Waves', color: 'var(--area-cnt)' },
          ], items: [
            { id: 'p1', text: 'Empleos para estibadores, conductores y comerciantes', bucket: 'ben' },
            { id: 'p2', text: 'Las cosechas se venden en otros continentes', bucket: 'ben' },
            { id: 'p3', text: 'Llegan medicinas y maquinaria', bucket: 'ben' },
            { id: 'p4', text: 'Derrames de combustible en el mar', bucket: 'amb' },
            { id: 'p5', text: 'Tala de manglares para ampliar muelles', bucket: 'amb', feedback: 'Los manglares son criaderos de peces y protegen la costa: talarlos tiene un costo ambiental.' },
            { id: 'p6', text: 'Humo de camiones y barcos', bucket: 'amb' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['cnt', 'ccss', 'l1'], cnb: ['cnt:1.4.5'], ambito: 'conocer', prompt: 'Lee el texto y responde.' },
          { genre: 'Texto informativo', heading: 'Un viaje en barco que cambió la ciencia', passage:
            'En 1831, el joven naturalista inglés **Charles Darwin** zarpó de un puerto de Inglaterra en el barco **Beagle**. Durante casi cinco años visitó costas de varios continentes. En 1835 llegó a las **islas Galápagos**, en el océano Pacífico.\n\nAllí recogió pinzones, unos pájaros pequeños. Al estudiarlos, se notó que tenían **picos distintos** según la isla: picos gruesos donde abundaban semillas duras y picos finos donde había insectos.\n\nDarwin propuso la **selección natural**: los individuos con características más útiles para su ambiente **sobreviven y se reproducen más**, y transmiten esas características a sus crías. Así, generación tras generación, las especies **conservan** las características que les ayudan a vivir. Por eso es importante proteger los ambientes: si desaparecen, las especies adaptadas a ellos también corren peligro.',
            questions: [
              { q: '¿Qué se notó al estudiar los pinzones de las Galápagos?', options: [
                { id: 'a', text: 'Que tenían picos distintos según el alimento de cada isla' },
                { id: 'b', text: 'Que todos eran exactamente iguales' },
                { id: 'c', text: 'Que no comían semillas' },
              ], correct: 'a' },
              { q: 'Según la selección natural, ¿qué pasa con un pinzón de pico grueso en una isla con muchas semillas duras?', options: [
                { id: 'a', text: 'Tiene más probabilidad de sobrevivir y tener crías con ese pico' },
                { id: 'b', text: 'Su pico se vuelve fino en una semana' },
                { id: 'c', text: 'Se muere siempre' },
              ], correct: 'a', why: 'Su pico le sirve en ese ambiente: sobrevive y transmite la característica a sus crías.' },
              { q: '¿Por qué el texto dice que hay que proteger los ambientes?', options: [
                { id: 'a', text: 'Porque las especies están adaptadas a ellos y podrían desaparecer' },
                { id: 'b', text: 'Porque los barcos necesitan islas' },
                { id: 'c', text: 'Porque Darwin lo prohibió' },
              ], correct: 'a' },
            ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['l3', 'ccss', 'mat'], cnb: ['l3:1.2.2', 'ccss:2.1.4'], ambito: 'hacer',
            prompt: 'English time! The school recycling club collected materials for one month. **Transfer the data to the graph**: Plastic 18 kg, Paper 14 kg, Cans 8 kg, Glass 10 kg. (_kg_ = kilogramos)',
            explain: 'Plastic was the most collected material (18 kg). Reciclar ahorra materia prima y energía, y lo que se vende genera ingresos para el club.',
            media: { id: 's31-d2-recycling', kind: 'image', title: 'Recycling club', aspect: '4:3',
              alt: 'Cuatro contenedores de reciclaje con etiquetas en inglés: Plastic, Paper, Cans, Glass, y estudiantes que separan materiales.',
              brief: 'Ilustración plana de un patio escolar caribeño con palmeras: cuatro contenedores de colores con etiquetas grandes en inglés, "PLASTIC" (amarillo), "PAPER" (azul), "CANS" (gris), "GLASS" (verde). Estudiantes garífunas, q\'eqchi\'es y ladinos separan botellas, hojas, latas y frascos; una balanza colgante muestra "kg". Sin marcas en los envases.' } },
          { categories: [
            { id: 'pla', label: 'Plastic', icon: 'Recycle', color: 'var(--c-maiz)' },
            { id: 'pap', label: 'Paper', icon: 'FileText', color: 'var(--area-l1)' },
            { id: 'can', label: 'Cans', icon: 'Package', color: 'var(--c-hint)' },
            { id: 'gla', label: 'Glass', icon: 'Droplet', color: 'var(--c-ok)' },
          ], data: [18, 14, 8, 10], max: 20, step: 2, unit: 'kg', source: 'Hypothetical data · School recycling club' },
        ),
        S.choice(
          { fase: 'construir', areas: ['l3', 'mat'], cnb: ['l3:1.2.3'], ambito: 'conocer',
            prompt: 'Look at your graph. **Which material did the club collect the least?**',
            explain: 'Cans: 8 kg, the shortest bar. Leer gráficas en inglés te ayuda a entender información de todo el mundo.' },
          { options: [
            { id: 'a', text: 'Cans' },
            { id: 'b', text: 'Plastic', feedback: 'Plastic is the tallest bar: it is the most, not the least.' },
            { id: 'c', text: 'Glass', feedback: 'Glass has 10 kg. Look for a shorter bar.' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['ccss', 'pyd', 'cnt'], cnb: ['ccss:2.3.4', 'ccss:2.1.4'], ambito: 'conocer',
            prompt: 'Hay **casos ejemplares** de buen manejo de los recursos naturales. Une cada caso con lo que hace bien.',
            explain: 'Estos casos muestran que cuidar la naturaleza también puede generar ingresos. Guatemala puede aplicar y ampliar estas ideas.' },
          { leftTitle: 'Caso', rightTitle: 'Buena práctica', pairs: [
            { id: 'pet', left: 'Concesiones forestales comunitarias de Petén', leftIcon: 'Trees', right: 'Comunidades cuidan la selva y aprovechan madera y productos del bosque sin destruirlo' },
            { id: 'cr', left: 'Pago por servicios ambientales en Costa Rica', leftIcon: 'Coins', right: 'Se paga a quienes conservan o siembran bosque' },
            { id: 'rec', left: 'Centro de acopio municipal de reciclaje', leftIcon: 'Recycle', right: 'Se recuperan materiales y se reduce la basura en ríos y playas' },
          ] },
        ),
        S.highlight(
          { fase: 'aplicar', areas: ['l1', 'ccss', 'cnt'], cnb: ['l1:1.2.4', 'ccss:2.1.4'], ambito: 'conocer',
            prompt: 'Lee este anuncio y marca las frases que **contradicen la realidad** (lo que sabemos que no es cierto).',
            explain: 'El plástico común tarda cientos de años en degradarse y la basura en el mar sí daña a peces y tortugas. Comparar un mensaje con la realidad te protege de engaños.' },
          { target: 'contradicciones', text: '¡Compra nuestras bolsas! {Desaparecen solas en una semana.} Son resistentes y baratas. {Tirarlas al mar no le hace daño a nadie.} Reutilízalas varias veces antes de llevarlas al centro de reciclaje.' },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.4.5'], prompt: '¿Qué dice la **selección natural**?' },
          { options: [
            { id: 'a', text: 'Los individuos mejor adaptados sobreviven y se reproducen más, y así se conservan sus características' },
            { id: 'b', text: 'Todos los individuos sobreviven igual', feedback: 'En la naturaleza, las características útiles dan ventajas para sobrevivir.' },
            { id: 'c', text: 'Los animales cambian su cuerpo cuando quieren', feedback: 'Las características se heredan; no cambian por voluntad.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ccss', 'pyd'], cnb: ['ccss:1.1.4', 'ccss:2.3.4', 'pyd:1.1.3'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'Santo Tomás de Castilla es un puerto guatemalteco en el Caribe.', answer: true },
            { text: 'Los puertos no tienen ningún efecto en el ambiente.', answer: false, why: 'Pueden causar derrames, humo o tala de manglares si no se planifican bien.' },
            { text: 'En Petén hay comunidades que cuidan la selva y a la vez obtienen ingresos de ella.', answer: true },
          ] },
        ),
        cierre({ areas: ['ccss', 'cnt'], cnb: ['ccss:2.1.4'] }, ['Explico la importancia de los puertos', 'Relaciono la selección natural con la conservación de las especies', 'Valoro el reciclaje y el buen manejo de los recursos'],
          ['Separaré la basura reciclable en mi casa', 'Revisaré si lo que dicen los anuncios es cierto', 'Buscaré en casa objetos que llegaron de otro continente']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's31-d3-decidir-informacion',
      title: 'Decidir con información',
      icon: 'Scale',
      minutes: 15,
      day: 3,
      gancho: 'Si ahorraras Q5 cada semana, ¿dónde los guardarías? ¿Cómo sabrías que es una buena decisión?',
      objetivos: ['Resolver problemas de interés con regla de tres simple y compuesta', 'Interpretar información para tomar decisiones', 'Revisar si el gobierno local cumple lo que promete', 'Fundamentar una propuesta y buscar acuerdos con el tono adecuado'],
      resumen: [
        'Regla de tres simple: si Q100 ganan Q5, Q300 ganan Q15 (se multiplica en cruz y se divide).',
        'Regla de tres compuesta: se usa cuando cambian dos cantidades a la vez, como el dinero y el tiempo.',
        'Decidir con información es comparar datos, pensar en el presente y en el futuro y elegir la mejor opción.',
        'La ciudadanía puede revisar el desempeño del gobierno: comparar lo prometido con lo realizado y pedir información pública.',
        'Una propuesta bien fundamentada tiene datos, ejemplos y fuentes, se dice con el tono adecuado al público y busca acuerdos.',
      ],
      media: {
        id: 's31-d3-ahorro', kind: 'image', title: 'La alcancía y la cooperativa', aspect: '4:3',
        alt: 'Niña que compara una alcancía de barro con una libreta de ahorro de una cooperativa, con una tabla de interés en la pared.',
        brief: 'Ilustración cálida en una cooperativa de ahorro de Izabal: una niña q\'eqchi\' con su madre sostiene una alcancía de barro en una mano y una libreta de ahorro en la otra. Detrás, un pizarrón con la leyenda "Supongamos: por cada Q100 ahorrados en un año, ganas Q5" y una balanza dibujada. Sin logotipos de bancos ni cooperativas reales.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'mat'], cnb: ['pyd:1.3.1'], ambito: 'emprender', title: '¿Qué es el interés?',
            prompt: 'Cuando ahorras en una cooperativa o banco, te pagan un **interés**. Toca cada tarjeta.' },
          { icon: 'PiggyBank', body: 'La información te ayuda a decidir hoy pensando en tu futuro.', reveal: [
            { icon: 'Coins', front: 'Capital', back: 'El dinero que ahorras o que te prestan.' },
            { icon: 'Percent', front: 'Interés', back: 'Lo que ganas por ahorrar (o lo que pagas si te prestan).' },
            { icon: 'Calendar', front: 'Tiempo', back: 'Mientras más tiempo, más interés.' },
            { icon: 'Scale', front: 'Decidir', back: 'Comparar opciones con datos antes de elegir.' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'pyd'], cnb: ['mat:5.2.1'], ambito: 'hacer',
            prompt: 'Supongamos que una cooperativa paga **Q5 de interés por cada Q100** ahorrados en un año. Si Nayeli ahorra **Q300** durante un año, ¿cuánto interés gana? Usa la **regla de tres simple**.',
            hint: 'Q100 → Q5; Q300 → ¿? Multiplica 300 × 5 y divide entre 100.',
            explain: '300 × 5 ÷ 100 = Q15. Más capital, más interés: son magnitudes directamente proporcionales.' },
          { answer: 15, unit: 'quetzales', stimulus: 'Q100 → Q5   |   Q300 → ?', misconceptions: [
            { value: 5, msg: 'Ese es el interés de Q100. Nayeli ahorra Q300: plantea la regla de tres.' },
            { value: 1500, msg: 'Falta dividir entre 100.' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'pyd'], cnb: ['mat:5.2.1'], ambito: 'hacer',
            prompt: 'Ahora cambian **dos** cantidades. Supongamos que **Q200** ahorrados durante **2 años** ganan **Q20**. ¿Cuánto ganarán **Q400** durante **3 años**? Usa la **regla de tres compuesta**.',
            hint: 'Hazlo en dos pasos: ¿qué pasa con el interés si el dinero se duplica? Después, ¿qué pasa si el tiempo pasa de 2 a 3 años?',
            explain: '20 × (400 ÷ 200) × (3 ÷ 2) = 20 × 2 × 1.5 = Q60.' },
          { answer: 60, unit: 'quetzales', stimulus: 'Q200, 2 años → Q20   |   Q400, 3 años → ?', misconceptions: [
            { value: 40, msg: 'Solo tomaste en cuenta el dinero. Falta ajustar por el tiempo (3 años en lugar de 2).' },
            { value: 30, msg: 'Solo ajustaste el tiempo. También se duplicó el dinero.' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['pyd', 'mat', 'l2'], cnb: ['pyd:1.3.1', 'mat:5.2.1'], ambito: 'emprender',
            prompt: 'Supongamos que Nayeli tiene **Q400** para un año. Opción A: guardarlos en la alcancía. Opción B: ahorrarlos en la cooperativa, que paga Q5 por cada Q100 al año. Opción C: prestarlos a un vecino que no le dará interés y a veces no paga. ¿Qué decisión es más **informada**?',
            explain: 'Con B ganaría 400 × 5 ÷ 100 = Q20 y su dinero está protegido. Decidir con información es comparar beneficios y riesgos pensando en el futuro.' },
          { options: [
            { id: 'a', text: 'A: la alcancía, porque no gana interés pero es segura', feedback: 'Es segura, pero no gana nada. Compara con la cooperativa.' },
            { id: 'b', text: 'B: la cooperativa, porque gana Q20 y el dinero está protegido', icon: 'PiggyBank' },
            { id: 'c', text: 'C: el vecino, porque es amable', feedback: 'La amabilidad no es un dato: no gana interés y hay riesgo de no recuperar el dinero.' },
          ], correct: ['b'] },
        ),
        S.reading(
          { fase: 'construir', areas: ['fc', 'l1', 'pyd'], cnb: ['fc:2.4.3', 'l1:1.1.4', 'pyd:1.3.1'], ambito: 'convivir', prompt: 'Lee y responde.' },
          { genre: 'Testimonio', heading: 'Lo que dijo doña Aurelia en la asamblea', passage:
            'Supongamos que en la asamblea del barrio, la municipalidad presentó su informe del año. Había prometido **tres obras**: reparar el techo de la escuela, poner alumbrado en la calle del muelle y limpiar el canal. El informe dice que el techo se reparó y que el canal se limpió, pero el alumbrado **no** se instaló.\n\nDoña Aurelia, pescadora garífuna, pidió la palabra: "Estoy **contenta** porque mis nietos ya no se mojan en clase. Pero me da **miedo** caminar de noche por la calle del muelle cuando regreso de pescar. Pedimos respetuosamente que nos digan **cuándo** se pondrá el alumbrado".\n\nLa ciudadanía tiene derecho a pedir información pública y a revisar si el gobierno cumple lo que promete.',
            questions: [
              { q: '¿Cuántas de las tres obras prometidas se cumplieron?', options: [
                { id: 'a', text: 'Dos' },
                { id: 'b', text: 'Tres' },
                { id: 'c', text: 'Ninguna' },
              ], correct: 'a' },
              { q: '¿Qué emociones expresa doña Aurelia?', options: [
                { id: 'a', text: 'Alegría por el techo y miedo por la falta de alumbrado' },
                { id: 'b', text: 'Solo enojo' },
                { id: 'c', text: 'Aburrimiento' },
              ], correct: 'a', why: 'Dice "estoy contenta" y "me da miedo": atender las emociones ayuda a entender el mensaje completo.' },
              { q: '¿Qué hizo bien doña Aurelia al revisar el desempeño del gobierno?', options: [
                { id: 'a', text: 'Reconoció lo cumplido y pidió con respeto información sobre lo pendiente' },
                { id: 'b', text: 'Insultó a las autoridades' },
                { id: 'c', text: 'Se quedó callada' },
              ], correct: 'a' },
            ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l2', 'l1', 'fc'], cnb: ['l2:3.1.1', 'l2:1.3.2'], ambito: 'hacer',
            prompt: 'Sexto grado quiere proponer a la municipalidad una **jornada de reciclaje** en el muelle. ¿Qué información **fundamenta** la propuesta y cuál no sirve?',
            hint: 'Fundamentar es apoyar una idea con datos, ejemplos y fuentes confiables.',
            explain: 'Los datos, los ejemplos y las fuentes fortalecen un argumento. Los rumores, los insultos y los gustos personales lo debilitan.' },
          { buckets: [
            { id: 'si', label: 'Fundamenta la propuesta', icon: 'BadgeCheck', color: 'var(--c-ok)' },
            { id: 'no', label: 'No sirve como fundamento', icon: 'X', color: 'var(--c-bad)' },
          ], items: [
            { id: 'f1', text: 'El club recolectó 50 kg de material reciclable en un mes', bucket: 'si' },
            { id: 'f2', text: 'Ejemplo: el centro de acopio de otro municipio redujo la basura en la playa', bucket: 'si' },
            { id: 'f3', text: 'Fuente: entrevista al encargado municipal de ambiente', bucket: 'si' },
            { id: 'f4', text: 'Dicen que el alcalde no hace nada', bucket: 'no', feedback: 'Es un rumor: no es un dato comprobado.' },
            { id: 'f5', text: 'Me gustan más las latas que las botellas', bucket: 'no', feedback: 'Es un gusto personal: no apoya la propuesta.' },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l2', 'fc', 'ccss'], cnb: ['l2:1.3.4', 'l2:1.3.2', 'l1:2.1.2', 'l1:2.1.3'], ambito: 'convivir',
            prompt: 'Escribe la propuesta que leerás ante el **concejo municipal** (un público formal): saluda con cortesía, presenta la jornada de reciclaje con un dato, propone una solución y **pide un acuerdo** concreto. Usa palabras formales, no las del recreo. Después, léela en voz alta: pronuncia con claridad, cambia la entonación en las preguntas y no corras.' },
          { minWords: 40, placeholder: 'Buenos días, señoras y señores del concejo… Proponemos… Solicitamos que acordemos…',
            model: 'Buenos días, señoras y señores del concejo municipal. Somos estudiantes de sexto grado. En un mes recolectamos 50 kg de plástico, papel y latas en la escuela, y vemos que el muelle tiene mucha basura. Proponemos una jornada de reciclaje el último sábado de cada mes, con un centro de acopio junto al muelle. Solicitamos que acordemos juntos la fecha de inicio y el apoyo de un camión municipal. Muchas gracias por escucharnos.',
            rubric: ['Saluda con cortesía y usa vocabulario formal', 'Incluye al menos un dato como fundamento', 'Propone una solución concreta', 'Pide un acuerdo claro', 'Al leerla en voz alta, pronuncia y articula con claridad'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:5.2.1'], prompt: 'Supongamos que Q100 ganan Q4 de interés en un año. ¿Cuánto ganan **Q500** en un año?' },
          { options: [
            { id: 'a', text: 'Q20' },
            { id: 'b', text: 'Q4', feedback: 'Con más dinero, el interés también aumenta.' },
            { id: 'c', text: 'Q125', feedback: 'Dividiste 500 ÷ 4. Plantea: 500 × 4 ÷ 100.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['fc', 'l2', 'pyd'], cnb: ['fc:2.4.3', 'l2:3.1.1', 'pyd:1.3.1'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'La ciudadanía puede comparar lo que el gobierno prometió con lo que realizó.', answer: true },
            { text: 'Un rumor es un buen fundamento para una propuesta.', answer: false, why: 'Un fundamento debe ser un dato, un ejemplo o una fuente confiable.' },
            { text: 'Para decidir con información conviene comparar beneficios y riesgos de cada opción.', answer: true },
          ] },
        ),
        cierre({ areas: ['pyd', 'fc'], cnb: ['fc:2.4.3'] }, ['Resuelvo problemas de interés con regla de tres', 'Decido comparando datos y pensando en el futuro', 'Propongo soluciones fundamentadas y busco acuerdos'],
          ['Anotaré mis gastos y ahorros de una semana', 'Preguntaré en casa qué obras prometió la municipalidad', 'Usaré datos cuando quiera convencer a alguien']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's31-d4-saltar-cantar',
      title: 'Saltar, cantar y convivir',
      icon: 'Footprints',
      minutes: 15,
      day: 4,
      gancho: '¿Por qué los saltadores corren antes de saltar? ¿Saltarías más lejos desde parado?',
      objetivos: ['Calcular la velocidad de una carrera', 'Practicar el salto de longitud y el salto de altura estilo tijereta', 'Reconocer verbos en imperativo en las instrucciones', 'Crear armonías y una melodía sobre un texto'],
      resumen: [
        'La velocidad es la distancia recorrida entre el tiempo: 30 m en 6 s = 5 m por segundo.',
        'El salto tiene cuatro fases: carrera de impulso, despegue, vuelo y caída. La carrera de impulso da velocidad para llegar más lejos.',
        'En el salto de altura estilo tijereta se corre en diagonal, se despega con un pie y se pasan las piernas una tras otra, como tijeras.',
        'Las instrucciones usan verbos en imperativo: corre, despega, extiende, cae.',
        'Un acorde es la unión de tres o más notas que suenan a la vez: do-mi-sol es el acorde de Do mayor.',
        'Una buena compañera o un buen compañero escucha, respeta, anima y trata igual a todas las personas.',
      ],
      media: {
        id: 's31-d4-salto', kind: 'animation', title: 'Las fases del salto', aspect: '16:9', duration: 40,
        alt: 'Animación de una niña que corre, despega con un pie, vuela con los brazos arriba y cae en la arena con las piernas adelante.',
        brief: 'Animación 2D de 40 s en cámara lenta, vista lateral, en una cancha escolar con foso de arena: una niña con uniforme deportivo (camiseta, pantaloneta, tenis) corre 6 zancadas (rótulo "Carrera de impulso"), pisa la tabla con un pie ("Despegue"), sube los brazos y recoge las piernas ("Vuelo") y cae con los pies adelante y el cuerpo hacia el frente ("Caída"). Segunda parte breve: un niño hace el salto de altura estilo tijereta sobre una cuerda elástica baja. Rótulos grandes, narración en español.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ef', 'mat'], cnb: ['ef:1.3.9', 'ef:1.3.2'], ambito: 'hacer', title: 'La carrera de impulso',
            prompt: 'La velocidad que ganas al correr se convierte en distancia al saltar. Toca cada fase.' },
          { icon: 'Footprints', body: 'Mientras más rápida y controlada sea tu carrera, más lejos llegas.', reveal: [
            { icon: 'Timer', front: '1. Carrera de impulso', back: 'Corres acelerando, con zancadas firmes, hasta la tabla.' },
            { icon: 'Zap', front: '2. Despegue', back: 'Pisas la tabla con **un pie** y empujas hacia arriba y adelante.' },
            { icon: 'Bird', front: '3. Vuelo', back: 'Subes los brazos y recoges las piernas.' },
            { icon: 'Footprints', front: '4. Caída', back: 'Caes con los **pies adelante** y el cuerpo hacia el frente para no perder distancia.' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['ef', 'mat'], cnb: ['ef:1.3.2'], ambito: 'hacer',
            prompt: 'Para seguir la **trayectoria** de una carrera se mide la distancia y el tiempo. Supongamos que Keyla corre **30 metros en 6 segundos**. ¿Cuál es su **velocidad** en metros por segundo?',
            hint: 'Velocidad = distancia ÷ tiempo.',
            explain: '30 ÷ 6 = 5 m/s. Cada segundo avanza 5 metros. Una pelota o un compañero que va más rápido recorre más distancia en el mismo tiempo.' },
          { answer: 5, unit: 'm/s', stimulus: '30 m ÷ 6 s = ?', misconceptions: [
            { value: 180, msg: 'Multiplicaste. La velocidad se obtiene dividiendo la distancia entre el tiempo.' },
            { value: 24, msg: 'Restaste. Divide la distancia entre el tiempo.' },
          ] },
        ),
        S.highlight(
          { fase: 'construir', areas: ['l1', 'ef'], cnb: ['l1:1.3.1', 'ef:1.3.10'], ambito: 'conocer',
            prompt: 'Estas son las instrucciones del **salto de altura estilo tijereta**. Marca los **verbos en imperativo** (los que dan una orden).',
            explain: 'Los mensajes que establecen normas o instrucciones suelen empezar con verbos en imperativo: dicen qué hacer.' },
          { target: 'verbos en imperativo', text: '{Colócate} en diagonal a la cuerda. {Corre} cinco pasos. {Despega} con el pie más alejado de la cuerda. {Levanta} una pierna y luego la otra, como tijeras. {Cae} de pie sobre la colchoneta.' },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'cnt'], cnb: ['ef:1.3.10', 'ef:1.3.9'], ambito: 'hacer',
            prompt: 'Con supervisión y en un lugar seguro (arena, grama o colchoneta): haz **3 saltos de longitud** con carrera de impulso y **3 saltos tijereta** sobre una cuerda baja sostenida con la mano (que se suelte si la tocas). Mide tu pulso antes y después.' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después de los saltos', exercise: { name: 'Saltos de longitud y tijereta', icon: 'Footprints', seconds: 90 } },
          ] },
        ),
        S.fill(
          { fase: 'construir', areas: ['l3', 'ef'], cnb: ['l3:2.1.3'], ambito: 'hacer',
            prompt: 'English time! What do you wear for the jump day? Completa con la **ropa** correcta. (_T-shirt_ = camiseta, _shorts_ = pantaloneta, _sneakers_ = tenis, _cap_ = gorra)',
            explain: 'For sports we wear comfortable clothes: a T-shirt, shorts and sneakers. A cap protects you from the sun.',
            media: { id: 's31-d4-clothes', kind: 'image', title: 'Things to wear', aspect: '4:3',
              alt: 'Niña y niño con ropa deportiva: camiseta, pantaloneta, tenis y gorra, con etiquetas en inglés.',
              brief: 'Ilustración plana tipo lámina escolar: una niña y un niño (uno garífuna, otra ladina) de pie con ropa deportiva sin logotipos. Flechas con etiquetas en inglés: "T-shirt", "shorts", "sneakers", "cap", "socks". A un lado, en un perchero, ropa de diario con etiquetas: "jacket", "dress", "pants", "shoes". Fondo blanco, letras grandes.' } },
          { text: 'On jump day, I wear a white [[T-shirt]], blue [[shorts]] and comfortable [[sneakers]]. I also wear a [[cap]] because it is sunny.',
            distractors: ['dress', 'jacket'] },
        ),
        S.explain(
          { fase: 'construir', areas: ['art', 'l1'], cnb: ['art:1.1.4'], ambito: 'hacer', title: 'Notas que suenan juntas',
            prompt: 'Una **melodía** son notas una tras otra; una **armonía** son notas que suenan **al mismo tiempo**. Toca cada tarjeta.',
            media: { id: 's31-d4-acordes', kind: 'audio', title: 'Melodía y acordes', duration: 30,
              alt: 'Grabación en la que primero suena una melodía sencilla y luego la misma melodía acompañada con acordes de guitarra.',
              brief: 'Audio de 30 s: (1) 8 s de la melodía "do-re-mi-do" tocada en marimba sola; (2) 8 s del acorde de Do mayor (do-mi-sol) rasgueado en guitarra, primero nota por nota y luego junto; (3) 14 s de la misma melodía en marimba acompañada con los acordes Do mayor y Sol mayor en guitarra. Voz breve que anuncia "melodía", "acorde", "melodía con armonía".' } },
          { icon: 'Music', body: 'Los acordes más sencillos se forman saltando una nota: **do**-(re)-**mi**-(fa)-**sol**.', reveal: [
            { icon: 'Music2', front: 'Acorde de Do mayor', back: '**Do - Mi - Sol** sonando juntos.' },
            { icon: 'Music2', front: 'Acorde de Fa mayor', back: '**Fa - La - Do** sonando juntos.' },
            { icon: 'Music2', front: 'Acorde de Sol mayor', back: '**Sol - Si - Re** sonando juntos.' },
          ] },
        ),
        S.rhythm(
          { fase: 'aplicar', areas: ['art', 'l1', 'mat'], cnb: ['art:1.1.6', 'art:1.1.4'], ambito: 'hacer',
            prompt: 'Compón el ritmo de una melodía para el verso **"Cre-ce-mos jun-tos"** (5 sílabas) en un compás de **4 tiempos**. Usa **corcheas** para las sílabas rápidas y al menos una **blanca** para la sílaba final larga.',
            hint: 'Cada corchea vale ½ tiempo y la blanca vale 2. Reparte las 5 sílabas para completar exactamente 4 tiempos.',
            explain: 'Al componer sobre un texto, cada sílaba recibe una nota; las sílabas importantes o finales suelen durar más. Luego puedes acompañarla con el acorde de Do mayor.' },
          { beats: 4, allowed: ['blanca', 'negra', 'corchea'], mustInclude: ['corchea', 'blanca'], showFractions: true },
        ),
        S.sort(
          { fase: 'construir', areas: ['fc', 'ef', 'l1'], cnb: ['fc:1.3.2', 'fc:2.3.3'], ambito: 'convivir',
            prompt: 'Construye el **perfil** de una persona que tiene **relaciones sociales de calidad**, en la jornada de salto y en la comunidad. ¿Qué acciones forman parte de ese perfil?',
            hint: 'Pregúntate si la acción hace sentir a los demás respetados e incluidos.',
            explain: 'Una persona con relaciones de calidad escucha, respeta, anima, coopera y trata igual a todas las personas, sin importar su pueblo, idioma, género o habilidad.' },
          { buckets: [
            { id: 'si', label: 'Es parte del perfil', icon: 'HeartHandshake', color: 'var(--c-ok)' },
            { id: 'no', label: 'No es parte del perfil', icon: 'X', color: 'var(--c-bad)' },
          ], items: [
            { id: 'q1', text: 'Escucha a los demás sin interrumpir', bucket: 'si' },
            { id: 'q2', text: 'Anima a quien está aprendiendo un salto nuevo', bucket: 'si' },
            { id: 'q3', text: 'Respeta a quien habla otro idioma o viene de otro lugar', bucket: 'si' },
            { id: 'q4', text: 'Resuelve los desacuerdos dialogando', bucket: 'si' },
            { id: 'q5', text: 'Se ríe de quien se equivoca', bucket: 'no', feedback: 'Burlarse lastima y aleja a las personas: no construye relaciones de calidad.' },
            { id: 'q6', text: 'Solo juega con quienes son de su mismo grupo', bucket: 'no', feedback: 'Excluir a otras personas debilita la convivencia en la diversidad.' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'ef', 'l1'], cnb: ['fc:2.3.3', 'fc:1.3.2'], ambito: 'convivir', prompt: 'En la jornada de salto, ¿qué harías tú?' },
          { scene: { icon: 'Users', text: '**Josué**, que llegó hace poco de una aldea q\'eqchi\', no logra pasar la cuerda en el salto tijereta. Algunos se ríen y dicen: "¡Ni saltar sabe!". Él quiere dejar de intentarlo.' }, options: [
            { id: 'a', icon: 'Smile', text: 'Reírte con los demás para no quedar mal', consequence: 'Josué se sienta solo y no vuelve a participar. El grupo pierde a un compañero.', values: ['Presión de grupo'], constructive: false },
            { id: 'b', icon: 'HeartHandshake', text: 'Acercarte, explicarle con palabras claras y calma los pasos ("corre en diagonal, despega con un pie…") y pedir al grupo que lo anime', consequence: 'Al tercer intento Josué pasa la cuerda. El grupo aplaude y él te enseña cómo se dice "gracias" en q\'eqchi\'.', values: ['Solidaridad', 'Respeto', 'Tolerancia'], constructive: true },
            { id: 'c', icon: 'Megaphone', text: 'Gritarles a los que se ríen', consequence: 'Se arma una discusión y la jornada se interrumpe.', values: ['Impulsividad'], constructive: false },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ef', 'mat'], cnb: ['ef:1.3.2', 'ef:1.3.9'], prompt: 'Supongamos que Marvin corre **40 m en 8 s**. ¿Cuál es su velocidad?' },
          { options: [
            { id: 'a', text: '5 m/s' },
            { id: 'b', text: '320 m/s', feedback: 'Multiplicaste. La velocidad es distancia ÷ tiempo.' },
            { id: 'c', text: '32 m/s', feedback: 'Restaste. Divide 40 entre 8.' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['art', 'l3'], cnb: ['art:1.1.4', 'l3:2.1.3'], prompt: 'Une cada elemento con su significado.' },
          { pairs: [
            { id: 'ac', left: 'Do - Mi - Sol', right: 'Acorde de Do mayor' },
            { id: 'sn', left: 'Sneakers', right: 'Tenis' },
            { id: 'ts', left: 'T-shirt', right: 'Camiseta' },
            { id: 'fa', left: 'Fa - La - Do', right: 'Acorde de Fa mayor' },
          ] },
        ),
        cierre({ areas: ['ef', 'fc'], cnb: ['fc:2.3.3'] }, ['Calculo la velocidad dividiendo distancia entre tiempo', 'Aplico las fases del salto', 'Reconozco verbos en imperativo', 'Animo y respeto a todas las personas en el juego'],
          ['Practicaré la carrera de impulso en un lugar seguro', 'Tocaré o cantaré el acorde de Do mayor', 'Animaré a un compañero que esté aprendiendo']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's31-d5-reto',
      title: 'Reto de la semana 31',
      icon: 'Trophy',
      minutes: 13,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Semilla de futuro" (70 % o más)'],
      resumen: ['Superé el reto de la semana 31: células que crecen, puertos, decisiones con información, saltos y armonías.'],
      media: {
        id: 's31-d5-reto', kind: 'image', title: 'Medalla Semilla de futuro', aspect: '1:1',
        alt: 'Medalla dorada con una semilla que brota formando dos hojas y, al fondo, un barco y una célula dividiéndose.',
        brief: 'Ilustración de medalla circular dorada con relieve: una semilla que brota con dos hojas verdes en el centro; en el fondo, sutilmente, una célula dividiéndose en dos y la silueta de un barco. Borde con olas estilizadas del Caribe. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024.',
      },
      steps: [
        S.order({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.2.4'], prompt: 'Ordena las fases de la mitosis.' },
          { items: [{ id: 'a', text: 'Profase' }, { id: 'b', text: 'Metafase' }, { id: 'c', text: 'Anafase' }, { id: 'd', text: 'Telofase' }] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.1.4'], prompt: '¿Dónde apareció la primera vida en la Tierra, según la ciencia?' },
          { options: [{ id: 'a', text: 'En los océanos, como seres de una sola célula' }, { id: 'b', text: 'En los volcanes, como animales grandes' }, { id: 'c', text: 'En los bosques, como árboles' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.3.4'], prompt: '¿Tejido animal o vegetal?' },
          { buckets: [{ id: 'a', label: 'Animal', icon: 'Bone' }, { id: 'v', label: 'Vegetal', icon: 'Leaf' }],
            items: [{ id: '1', text: 'Nervioso', bucket: 'a' }, { id: '2', text: 'Meristemático', bucket: 'v' }, { id: '3', text: 'Muscular', bucket: 'a' }, { id: '4', text: 'Conductor (xilema y floema)', bucket: 'v' }] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.5'], prompt: 'Calcula 5² − 5¹.' },
          { answer: 20 }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.1.4'], prompt: '¿Por qué los puertos impulsan el desarrollo de una región?' },
          { options: [{ id: 'a', text: 'Porque conectan con otros continentes, mueven comercio y crean empleo' }, { id: 'b', text: 'Porque impiden el comercio' }, { id: 'c', text: 'Porque solo sirven para pescar' }], correct: ['a'] }),
        S.tf({ fase: 'comprobar', areas: ['cnt', 'ccss'], cnb: ['cnt:1.4.5', 'ccss:2.3.4', 'ccss:2.1.4'], prompt: '¿Verdadero o falso?' },
          { statements: [{ text: 'Con la selección natural, las características útiles para el ambiente se conservan en la especie.', answer: true }, { text: 'Reciclar aumenta la cantidad de basura.', answer: false }, { text: 'En Costa Rica se paga a quienes conservan o siembran bosque.', answer: true }] }),
        S.number({ fase: 'comprobar', areas: ['mat', 'pyd'], cnb: ['mat:5.2.1'], prompt: 'Supongamos que Q100 ganan Q6 en un año. ¿Cuánto ganan Q250 en un año?' },
          { answer: 15, unit: 'quetzales' }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:1.3.1'], prompt: '¿Cuál de estas oraciones empieza con un verbo en imperativo?' },
          { options: [{ id: 'a', text: 'Extiende los brazos al despegar.' }, { id: 'b', text: 'Ayer extendí los brazos.' }, { id: 'c', text: 'Los brazos están extendidos.' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.1.3'], prompt: 'Match the English word with its meaning.' },
          { pairs: [{ id: 'a', left: 'Cap', right: 'Gorra' }, { id: 'b', left: 'Shorts', right: 'Pantaloneta' }, { id: 'c', left: 'Jacket', right: 'Chumpa' }] }),
        S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.4', 'art:1.1.6'], prompt: '¿Qué es un acorde?' },
          { options: [{ id: 'a', text: 'Tres o más notas que suenan al mismo tiempo' }, { id: 'b', text: 'Una sola nota muy larga' }, { id: 'c', text: 'Un silencio' }], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 4 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.2.4'], prompt: '¿Qué tipo de división celular forma óvulos y espermatozoides?' },
      { options: [{ id: 'a', text: 'Meiosis' }, { id: 'b', text: 'Mitosis' }, { id: 'c', text: 'Fotosíntesis' }], correct: ['a'] }),
    S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.1.4', 'cnt:1.4.5'], prompt: '¿Verdadero o falso?' },
      { statements: [{ text: 'La Tierra se formó hace unos 4,500 millones de años.', answer: true }, { text: 'Darwin estudió los pinzones de las islas Galápagos.', answer: true }, { text: 'La selección natural dice que todos los individuos sobreviven por igual.', answer: false }] }),
    S.match({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.3.4'], prompt: 'Une cada tejido con su función.' },
      { pairs: [{ id: 'a', left: 'Epitelial', right: 'Cubre y protege' }, { id: 'b', left: 'Meristemático', right: 'Hace crecer la planta' }, { id: 'c', left: 'Muscular', right: 'Permite el movimiento' }] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.5'], prompt: 'Calcula 3³ + 3².' },
      { answer: 36, misconceptions: [{ value: 243, msg: 'No se suman los exponentes: 27 + 9.' }] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:5.2.1'], prompt: 'Supongamos que Q100 ahorrados durante 1 año ganan Q5. ¿Cuánto ganan Q200 en 2 años?' },
      { answer: 20, unit: 'quetzales' }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.1.4'], prompt: '¿En qué océano o mar está Puerto Quetzal?' },
      { options: [{ id: 'a', text: 'Océano Pacífico' }, { id: 'b', text: 'Mar Caribe' }, { id: 'c', text: 'Océano Índico' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.1.3', 'pyd:1.3.1'], prompt: 'Talar un manglar para ampliar un muelle es un ejemplo de…' },
      { options: [{ id: 'a', text: 'Una acción económica con efecto ambiental' }, { id: 'b', text: 'Una actividad sin consecuencias' }, { id: 'c', text: 'Reciclaje' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.4.3'], prompt: 'Para revisar el desempeño de la municipalidad, lo mejor es…' },
      { options: [{ id: 'a', text: 'Comparar lo prometido con lo realizado y pedir información con respeto' }, { id: 'b', text: 'Creer cualquier rumor' }, { id: 'c', text: 'No preguntar nunca' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.9', 'ef:1.3.10'], prompt: '¿Cuál es el orden correcto de las fases del salto?' },
      { options: [{ id: 'a', text: 'Carrera de impulso, despegue, vuelo y caída' }, { id: 'b', text: 'Vuelo, caída, despegue y carrera' }, { id: 'c', text: 'Caída, vuelo, carrera y despegue' }], correct: ['a'] }),
    S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.1.3'], prompt: 'Complete in English.' },
      { text: 'It is cold. I wear a [[jacket]]. It is sunny. I wear a [[cap]].', distractors: ['sneakers'] }),
    S.sort({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:3.1.1', 'l2:1.3.4'], prompt: '¿Sirve como fundamento de una propuesta?' },
      { buckets: [{ id: 's', label: 'Sí', icon: 'Check' }, { id: 'n', label: 'No', icon: 'X' }],
        items: [{ id: 'a', text: 'Un dato de una encuesta', bucket: 's' }, { id: 'b', text: 'Un chisme', bucket: 'n' }, { id: 'c', text: 'Un ejemplo de otra comunidad', bucket: 's' }] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:1.1.4'], prompt: '"Estoy feliz porque ya tenemos techo, pero me preocupa la calle oscura." ¿Qué emociones expresa?' },
      { options: [{ id: 'a', text: 'Alegría y preocupación' }, { id: 'b', text: 'Solo enojo' }, { id: 'c', text: 'Ninguna' }], correct: ['a'] }),
  ],
});
