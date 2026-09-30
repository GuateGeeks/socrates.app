import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 12 · Unidad 2 "Consolidando nuestras relaciones"
 * Tema generador: Redes que nos unen
 */
export default semana({
  id: 's12',
  unidad: 2,
  semana: 12,
  kind: 'aprendizaje',
  temaGenerador: 'Redes que nos unen',
  title: 'Redes que nos unen',
  subtitle: 'Seres que cooperan, datos del mundo, volúmenes y medios',
  icon: 'Link',
  color: 'var(--area-ccss)',
  contexto: 'Nada vive solo: el frijol se asocia con bacterias, Guatemala comercia con otros países y una radio comunitaria une a pueblos enteros. Esta semana descubrirás las redes que conectan a los seres vivos, a los países y a las personas, y medirás el agua que guarda tu comunidad en pilas y toneles.',
  ejes: ['sostenible', 'multiculturalidad', 'tecnologia', 'vida-ciudadana'],
  media: {
    id: 's12-portada', kind: 'video', title: 'Todo está conectado', aspect: '16:9', duration: 60,
    alt: 'Montaje de un colibrí en una flor, raíces de frijol, un barco de carga, una antena de radio y un grupo de niñas y niños conversando.',
    brief: 'Video de 60 s con transiciones en forma de hilos que unen una escena con la siguiente: (1) colibrí tomando néctar en una flor del altiplano; (2) raíz de frijol con pequeños nódulos; (3) contenedores de exportación en un puerto de Guatemala; (4) antena y cabina de una radio comunitaria; (5) grupo de estudiantes diversos (maya, garífuna, xinka, ladino) conversando en círculo. Sobreimpreso final: "Redes que nos unen". Música alegre de marimba y tambor. Sin logotipos ni personas identificables en primer plano.',
  },
  badge: { id: 'medalla-s12', name: 'Tejedor de redes', icon: 'Link', desc: 'Completaste la semana 12 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's12-d1-aliados-invisibles',
      title: 'Aliados invisibles',
      icon: 'Microscope',
      minutes: 14,
      day: 1,
      gancho: '¿Sabías que las raíces del frijol tienen "socias" diminutas que le ayudan a crecer?',
      objetivos: ['Explicar qué es el mutualismo y por qué ayuda a sobrevivir', 'Distinguir organismos unicelulares procariotas y eucariotas', 'Relacionar las adaptaciones de los seres vivos con su ambiente', 'Verificar un mensaje antes de creerlo o compartirlo'],
      resumen: [
        'El mutualismo es una relación en la que las dos especies se benefician, como el colibrí y la flor o el frijol y las bacterias de sus raíces.',
        'Los procariotas (bacterias) no tienen núcleo; los eucariotas unicelulares (amebas, paramecios, levaduras) sí tienen núcleo.',
        'Las adaptaciones son características que ayudan a sobrevivir en un ambiente; se heredan y se van haciendo comunes a lo largo de muchas generaciones.',
        'El ruido, las distracciones, las palabras desconocidas y los prejuicios afectan la comunicación.',
        'Para corroborar un dato hay que buscarlo en fuentes confiables y comparar varias.',
      ],
      media: {
        id: 's12-d1-microscopio', kind: 'video', title: 'Un mundo en una gota', aspect: '16:9', duration: 60,
        alt: 'Video de microscopio escolar que muestra bacterias diminutas, un paramecio nadando y una ameba cambiando de forma.',
        brief: 'Video de 60 s grabado con microscopio (o animación realista) de una gota de agua de charco: primero bacterias como puntos y bastoncitos (rotular "procariotas, sin núcleo"), luego un paramecio nadando con cilios y una ameba extendiendo seudópodos, con su núcleo señalado ("eucariotas unicelulares, con núcleo"). Barra de escala visible. Narración en español con subtítulos. Cierre con levadura de pan vista al microscopio.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'pyd'], cnb: ['cnt:1.5.4'], ambito: 'conocer', title: 'Ganar-ganar en la naturaleza',
            prompt: 'En la naturaleza hay relaciones en las que **las dos especies ganan**. Se llaman **mutualismo**. Toca cada tarjeta.',
            media: { id: 's12-d1-mutualismo', kind: 'image', title: 'Parejas que se ayudan', aspect: '16:9',
              alt: 'Cuatro ilustraciones: un colibrí en una flor, nódulos en la raíz del frijol, hormigas en las espinas de un árbol de cornezuelo y un liquen sobre una piedra.',
              brief: 'Ilustración naturalista en 4 cuadros con flechas de doble sentido que muestran el beneficio de cada parte: (1) colibrí y flor ("néctar ↔ polinización"); (2) raíz de frijol con nódulos rosados ("azúcar ↔ nitrógeno"); (3) hormigas en las espinas huecas de un árbol de cornezuelo ("casa y alimento ↔ defensa"); (4) liquen sobre roca, con acercamiento a hongo y alga ("protección y agua ↔ alimento"). Paleta natural, rótulos grandes.' } },
          { icon: 'Handshake', body: 'En el mutualismo, cada especie da algo y recibe algo. Esa ayuda aumenta sus probabilidades de **sobrevivir**.', reveal: [
            { icon: 'Bird', front: 'Colibrí y flor', back: 'El colibrí toma **néctar** y, sin querer, lleva **polen** de flor en flor: la planta puede formar semillas.' },
            { icon: 'Sprout', front: 'Frijol y bacterias', back: 'Las bacterias de las raíces toman **nitrógeno** del aire y se lo dan a la planta; el frijol les da **azúcares**. ¡Por eso el frijol enriquece el suelo de la milpa!' },
            { icon: 'Bug', front: 'Hormigas y cornezuelo', back: 'Este árbol de Centroamérica da **casa** (espinas huecas) y **alimento** a ciertas hormigas; ellas lo **defienden** de otros insectos.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.5.4'], ambito: 'conocer',
            prompt: 'Une cada pareja con la **ventaja** que obtiene para sobrevivir.',
            explain: 'Sin sus socios, estas especies tendrían más dificultades: menos semillas, suelos pobres o más enemigos.' },
          { leftTitle: 'Pareja', rightTitle: 'Ventaja para sobrevivir', pairs: [
            { id: 'col', left: 'Colibrí y flor', leftIcon: 'Bird', right: 'Uno se alimenta y la otra logra reproducirse' },
            { id: 'fri', left: 'Frijol y bacterias', leftIcon: 'Sprout', right: 'La planta recibe nitrógeno y las bacterias, azúcar' },
            { id: 'hor', left: 'Hormigas y cornezuelo', leftIcon: 'Bug', right: 'El árbol queda protegido y las hormigas tienen casa' },
            { id: 'int', left: 'Personas y bacterias del intestino', leftIcon: 'User', right: 'Ayudan a digerir y reciben alimento y refugio' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.1.3'], ambito: 'conocer',
            prompt: 'Algunos seres vivos son de **una sola célula** (unicelulares). Si su célula **no tiene núcleo** son **procariotas**; si **tiene núcleo** son **eucariotas**. Clasifícalos.',
            hint: 'Todas las bacterias son procariotas.',
            explain: 'Las bacterias tienen su ADN suelto en el citoplasma. Amebas, paramecios y levaduras guardan su ADN dentro de un núcleo, igual que nuestras células.' },
          { buckets: [
            { id: 'pro', label: 'Procariota (sin núcleo)', icon: 'Circle', color: 'var(--area-cnt)' },
            { id: 'euc', label: 'Eucariota (con núcleo)', icon: 'CircleDot', color: 'var(--area-l1)' },
          ], items: [
            { id: 'u1', text: 'Bacteria del yogur', bucket: 'pro' },
            { id: 'u2', text: 'Bacteria de la raíz del frijol', bucket: 'pro' },
            { id: 'u3', text: 'Ameba', bucket: 'euc' },
            { id: 'u4', text: 'Paramecio', bucket: 'euc' },
            { id: 'u5', text: 'Levadura del pan', bucket: 'euc', feedback: 'La levadura es un hongo de una sola célula, con núcleo: es eucariota.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['cnt', 'ccss'], cnb: ['cnt:2.2.2'], ambito: 'conocer',
            prompt: 'Las **adaptaciones** ayudan a sobrevivir en cada ambiente. Une cada ser vivo con su adaptación.',
            hint: 'Piensa en el problema principal de cada ambiente: poca agua, sal, frío o depredadores.',
            explain: 'Las adaptaciones no aparecen de un día para otro: los individuos con características útiles sobreviven más, tienen crías y las heredan. Así las especies cambian a lo largo de muchas generaciones.' },
          { leftTitle: 'Ser vivo y ambiente', rightTitle: 'Adaptación', pairs: [
            { id: 'cac', left: 'Cactus del valle del Motagua (seco)', leftIcon: 'Sun', right: 'Espinas en lugar de hojas y tallo que guarda agua' },
            { id: 'man', left: 'Mangle de la costa (agua salada)', leftIcon: 'Waves', right: 'Raíces que salen del agua y toleran la sal' },
            { id: 'oso', left: 'Oso polar (hielo)', leftIcon: 'Snowflake', right: 'Pelaje espeso y mucha grasa bajo la piel' },
            { id: 'jag', left: 'Jaguar (selva de Petén)', leftIcon: 'Trees', right: 'Manchas que lo camuflan entre luces y sombras' },
          ] },
        ),
        S.highlight(
          { fase: 'aplicar', areas: ['l2', 'l1'], cnb: ['l2:1.1.4'], ambito: 'convivir',
            prompt: 'Lee lo que pasó en la clase de Ciencias y toca los **factores que afectaron negativamente la comunicación**.',
            explain: 'El ruido, las distracciones, el vocabulario desconocido y los prejuicios ("no le hago caso porque…") son barreras de la comunicación. Reconocerlas ayuda a evitarlas.' },
          { target: 'barreras de comunicación', text: 'La maestra explicaba el mutualismo, pero afuera había {mucho ruido de una construcción}. Carlos estaba {jugando con el celular} y no escuchó. Ana no entendió la palabra "nódulo" porque {nadie explicó su significado}. Luis pensó que {"las niñas no saben de ciencias"} y no escuchó a su compañera Rosa, que sí había entendido.' },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l2', 'cnt', 'l1'], cnb: ['l2:1.1.5'], ambito: 'hacer',
            prompt: 'Te llega este mensaje: _"¡Todas las bacterias son malas! Hay que eliminarlas todas."_ Antes de creerlo o compartirlo, ¿qué debes hacer? Elige **todas** las correctas.',
            explain: 'Corroborar es comparar el mensaje con fuentes confiables (libros de texto, especialistas, instituciones de salud). En este caso, el mensaje es falso: muchas bacterias son útiles, como las del yogur o las del frijol.' },
          { multiple: true, options: [
            { id: 'a', text: 'Buscar el tema en mi libro de Ciencias Naturales', icon: 'BookOpen' },
            { id: 'b', text: 'Preguntar a mi docente o a personal de salud', icon: 'Stethoscope' },
            { id: 'c', text: 'Comparar lo que dicen dos o más fuentes confiables', icon: 'Search' },
            { id: 'd', text: 'Reenviarlo rápido a todos mis contactos', icon: 'Smartphone', feedback: 'Compartir sin verificar puede difundir información falsa.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.4', 'cnt:2.1.3'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'En el mutualismo, las dos especies se benefician.', answer: true },
            { text: 'Las bacterias tienen su ADN dentro de un núcleo.', answer: false, why: 'Las bacterias son procariotas: no tienen núcleo.' },
            { text: 'La ameba es un organismo unicelular eucariota.', answer: true },
            { text: 'El colibrí solo se beneficia a sí mismo cuando visita flores.', answer: false, why: 'También poliniza la flor: ambos se benefician.' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.2.2'], prompt: 'Un cactus tiene espinas en lugar de hojas anchas. ¿Qué ventaja le da esa adaptación?' },
          { options: [
            { id: 'a', text: 'Pierde menos agua en un ambiente seco', icon: 'Droplet' },
            { id: 'b', text: 'Hace más fotosíntesis que un árbol con hojas grandes', icon: 'Leaf', feedback: 'Las espinas no hacen más fotosíntesis; su ventaja es ahorrar agua.' },
            { id: 'c', text: 'Puede vivir bajo el agua', icon: 'Waves', feedback: 'El cactus está adaptado a lugares secos, no al agua.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['cnt', 'l2'], cnb: ['l2:1.1.5'] }, ['Explico qué es el mutualismo con ejemplos', 'Distingo procariotas de eucariotas', 'Verifico la información antes de compartirla'],
          ['Buscaré nódulos en la raíz de una planta de frijol', 'Evitaré el ruido y las distracciones cuando alguien me explique algo', 'Corroboraré en dos fuentes un dato que escuche esta semana']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's12-d2-guatemala-mundo',
      title: 'Guatemala y el mundo en datos',
      icon: 'BarChart3',
      minutes: 15,
      day: 2,
      gancho: '¿En qué nos parecemos Guatemala, Chile y Canadá? ¿Y en qué somos distintos?',
      objetivos: ['Comparar los recursos de Guatemala con los de otros países de América', 'Comparar la población de América con la de otros continentes', 'Describir políticas de conservación en distintos países', 'Registrar información en una ficha con su fuente'],
      resumen: [
        'Cada país de América tiene recursos distintos: Guatemala destaca por su biodiversidad, café y cardamomo; Chile por el cobre; Venezuela por el petróleo; Canadá por sus bosques y agua dulce.',
        'Asia tiene más de la mitad de la población del mundo; en América vive aproximadamente 1 de cada 8 personas.',
        'Los ecosistemas influyen en el desarrollo: dan agua, alimento, turismo y materias primas, pero también presentan retos.',
        'Muchos países protegen sus recursos con áreas protegidas, leyes y pagos por cuidar bosques; en Guatemala, el CONAP administra las áreas protegidas.',
        'Una ficha de registro guarda el dato, la fuente y la fecha para poder comprobarlo después.',
      ],
      media: {
        id: 's12-d2-america-recursos', kind: 'image', title: 'Mapa de recursos de América', aspect: '3:4',
        alt: 'Mapa del continente americano con íconos de recursos por país: bosque y agua en Canadá, café y cardamomo en Guatemala, petróleo en Venezuela, cobre en Chile y selva en Brasil.',
        brief: 'Mapa vertical de América ilustrado con estilo plano, países con contorno suave y 8 íconos grandes: Canadá (bosque y gota de agua), Estados Unidos (trigo e industria), México (maíz), Guatemala (grano de café, vaina de cardamomo y quetzal para biodiversidad), Venezuela (barril de petróleo), Brasil (selva amazónica), Chile (mineral de cobre), Argentina (ganado y trigo). Leyenda en la esquina. Sin banderas ni marcas.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'pyd'], cnb: ['ccss:2.1.2'], ambito: 'conocer', title: 'Riquezas distintas, un mismo continente',
            prompt: 'Los países de América comparten continente, pero sus **recursos** son distintos. Eso crea relaciones de **comercio** entre ellos.' },
          { icon: 'Map', body: 'Guatemala es pequeña en territorio, pero es uno de los países con **mayor biodiversidad** de la región por su variedad de climas y ecosistemas.', reveal: [
            { icon: 'Coffee', front: 'Guatemala', back: 'Café, **cardamomo** (es de los mayores exportadores del mundo), azúcar, banano, bosques y gran biodiversidad.' },
            { icon: 'Pickaxe', front: 'Chile', back: 'Es el mayor productor de **cobre** del mundo.' },
            { icon: 'Fuel', front: 'Venezuela', back: 'Tiene enormes reservas de **petróleo**.' },
            { icon: 'Droplets', front: 'Canadá', back: 'Grandes **bosques** y muchísima **agua dulce** en lagos y ríos.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['ccss'], cnb: ['ccss:2.1.2'], ambito: 'conocer',
            prompt: 'Une cada país de América con un recurso por el que se le conoce.',
            explain: 'Comparar recursos ayuda a entender por qué los países comercian: cada uno vende lo que tiene y compra lo que le falta.' },
          { leftTitle: 'País', rightTitle: 'Recurso destacado', pairs: [
            { id: 'gt', left: 'Guatemala', leftIcon: 'Flag', right: 'Cardamomo y café' },
            { id: 'cl', left: 'Chile', leftIcon: 'Mountain', right: 'Cobre' },
            { id: 've', left: 'Venezuela', leftIcon: 'Fuel', right: 'Petróleo' },
            { id: 'br', left: 'Brasil', leftIcon: 'Trees', right: 'La mayor parte de la selva amazónica' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['ccss', 'mat'], cnb: ['ccss:3.1.2'], ambito: 'hacer',
            prompt: '¿Dónde vive la gente del mundo? Construye la gráfica con el **porcentaje aproximado** de la población mundial en cada continente.',
            hint: 'Lee la tabla y sube cada barra hasta su valor.',
            explain: 'Asia concentra más de la mitad de la población; América tiene cerca del 13 %: más o menos 1 de cada 8 personas. Los datos están redondeados y cambian cada año.' },
          { source: 'Población mundial por continente (porcentajes aproximados): Asia 59 · África 18 · América 13 · Europa 9 · Oceanía 1',
            unit: '%', max: 60, step: 1,
            categories: [
              { id: 'as', label: 'Asia', color: 'var(--area-ccss)' },
              { id: 'af', label: 'África', color: 'var(--area-pyd)' },
              { id: 'am', label: 'América', color: 'var(--area-cnt)' },
              { id: 'eu', label: 'Europa', color: 'var(--area-mat)' },
              { id: 'oc', label: 'Oceanía', color: 'var(--area-art)' },
            ],
            data: [59, 18, 13, 9, 1] },
        ),
        S.reading(
          { fase: 'construir', areas: ['ccss', 'cnt', 'fc'], cnb: ['ccss:2.2.2', 'ccss:2.3.2'], ambito: 'conocer', prompt: 'Lee el texto y responde.' },
          { genre: 'Texto expositivo', heading: 'Ecosistemas, desarrollo y conservación', passage:
            'Los **ecosistemas** influyen en la vida y el desarrollo de los pueblos. Las llanuras fértiles facilitan la agricultura; los bosques dan agua, madera y turismo; los desiertos y las zonas heladas hacen más difícil cultivar y construir. Por eso, en cada continente las personas han aprendido a aprovechar su ambiente de distintas formas.\n\nPara no agotar los recursos, los países crean **políticas de conservación**. Muchos países desarrollados, con más recursos económicos, invierten en energías limpias, en reciclaje obligatorio y en grandes parques nacionales. Muchos países en desarrollo también protegen su naturaleza, aunque enfrentan retos como la pobreza y la falta de presupuesto.\n\n**Guatemala** creó en 1989 la Ley de Áreas Protegidas y el **CONAP** (Consejo Nacional de Áreas Protegidas). En 1990 se declaró la **Reserva de la Biosfera Maya**, en Petén. **Costa Rica**, otro país en desarrollo, paga a propietarios de terrenos por conservar sus bosques. La cooperación entre países también ayuda: los ríos, las aves migratorias y el aire no conocen fronteras.',
            questions: [
              { q: '¿Por qué los ecosistemas influyen en el desarrollo?', options: [
                { id: 'a', text: 'Porque dan (o limitan) agua, alimento, materiales y oportunidades de trabajo' },
                { id: 'b', text: 'Porque deciden quién gana las elecciones' },
                { id: 'c', text: 'Porque todos los ecosistemas son iguales' },
              ], correct: 'a' },
              { q: '¿Qué institución administra las áreas protegidas de Guatemala?', options: [
                { id: 'a', text: 'El CONAP' },
                { id: 'b', text: 'Una empresa privada' },
                { id: 'c', text: 'Ninguna' },
              ], correct: 'a' },
              { q: 'Según el texto, ¿qué reto enfrentan muchos países en desarrollo para conservar?', options: [
                { id: 'a', text: 'La pobreza y la falta de presupuesto' },
                { id: 'b', text: 'Que no tienen naturaleza' },
                { id: 'c', text: 'Que no les interesa' },
              ], correct: 'a', why: 'El texto dice que también protegen su naturaleza, pero con menos recursos económicos.' },
              { q: '¿Por qué es importante la cooperación entre países?', options: [
                { id: 'a', text: 'Porque ríos, aves migratorias y aire cruzan las fronteras' },
                { id: 'b', text: 'Porque así un país decide por los demás' },
                { id: 'c', text: 'Porque la conservación es solo tarea de los países ricos' },
              ], correct: 'a' },
            ] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['pyd', 'ccss', 'cnt'], cnb: ['pyd:1.4.1'], ambito: 'emprender',
            prompt: 'Los recursos naturales de una comunidad pueden inspirar **proyectos productivos** que cuiden el ambiente. Une cada recurso con un proyecto posible.',
            explain: 'Un buen proyecto productivo genera ingresos para las familias sin agotar el recurso. Por ejemplo, la apicultura aprovecha el mutualismo entre abejas y flores.' },
          { leftTitle: 'Recurso natural', rightTitle: 'Proyecto productivo', pairs: [
            { id: 'flo', left: 'Muchas flores silvestres', leftIcon: 'Flower', right: 'Apicultura: producir miel' },
            { id: 'bos', left: 'Un bosque con miradores', leftIcon: 'Trees', right: 'Turismo comunitario con guías locales' },
            { id: 'sue', left: 'Suelo fértil y agua de lluvia', leftIcon: 'Sprout', right: 'Huerto de hortalizas para vender' },
            { id: 'bam', left: 'Bambú que crece rápido', leftIcon: 'Hammer', right: 'Taller de muebles y artesanías' },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['l2', 'ccss'], cnb: ['l2:1.1.6', 'l2:1.1.5'], ambito: 'hacer',
            prompt: 'Vas a investigar los recursos de un país de América. Ordena los pasos para hacer una **investigación documental** y **registrarla en una ficha**.',
            explain: 'Una ficha de registro bien diseñada tiene: tema, dato encontrado, fuente (libro, sitio o persona), fecha y observaciones. Así cualquiera puede comprobar tu información.' },
          { items: [
            { id: 'p1', text: 'Escribir la pregunta que quiero responder' },
            { id: 'p2', text: 'Buscar el dato en al menos dos fuentes confiables' },
            { id: 'p3', text: 'Anotar en la ficha: dato, fuente y fecha' },
            { id: 'p4', text: 'Comparar las fuentes y señalar si coinciden' },
            { id: 'p5', text: 'Escribir una conclusión con mis palabras' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l3', 'mat'], cnb: ['l3:2.1.4'], ambito: 'hacer',
            prompt: 'English time! Write the **numbers from 100 to 1000** in words. (Recuerda: _hundred_ = cien/cientos, _thousand_ = mil.)',
            explain: 'In English we say "three hundred" (not "three hundreds") and "one thousand" for 1000.' },
          { text: '100 = one [[hundred]]\n300 = [[three]] hundred\n450 = four hundred [[fifty]]\n1000 = one [[thousand]]',
            distractors: ['hundreds', 'thirteen', 'fifteen'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.1.2', 'ccss:2.1.2'], prompt: '¿Qué afirmación sobre la población y los recursos es correcta?' },
          { options: [
            { id: 'a', text: 'Asia tiene más población que América; Chile es gran productor de cobre', icon: 'Users' },
            { id: 'b', text: 'América es el continente más poblado; Guatemala produce petróleo como Venezuela', icon: 'Fuel', feedback: 'Asia es el más poblado, y Venezuela es quien destaca por su petróleo.' },
            { id: 'c', text: 'Oceanía tiene la mitad de la población mundial', icon: 'Shell', feedback: 'Oceanía tiene aproximadamente el 1 % de la población mundial.' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['ccss', 'pyd'], cnb: ['ccss:2.3.2', 'pyd:1.4.1'], prompt: 'Clasifica: ¿es una **política o acción de conservación** o una acción que **daña** los recursos?' },
          { buckets: [
            { id: 'con', label: 'Conserva', icon: 'ShieldCheck', color: 'var(--c-ok)' },
            { id: 'dan', label: 'Daña', icon: 'Trash2', color: 'var(--c-hint)' },
          ], items: [
            { id: 'c1', text: 'Declarar un área protegida', bucket: 'con' },
            { id: 'c2', text: 'Pagar a familias por cuidar el bosque', bucket: 'con' },
            { id: 'c3', text: 'Talar árboles sin permiso', bucket: 'dan' },
            { id: 'c4', text: 'Producir miel sin cortar el bosque', bucket: 'con' },
            { id: 'c5', text: 'Tirar basura al río', bucket: 'dan' },
          ] },
        ),
        cierre({ areas: ['ccss', 'l2'], cnb: ['ccss:2.3.2'] }, ['Comparo recursos de Guatemala con otros países', 'Leo una gráfica de población', 'Registro información con su fuente'],
          ['Buscaré de dónde viene un producto que usamos en casa', 'Anotaré en una ficha un dato con su fuente', 'Cuidaré un recurso natural de mi comunidad']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's12-d3-volumen-tiempo',
      title: 'Agua que se mide, tiempo que se corre',
      icon: 'Droplets',
      minutes: 15,
      day: 3,
      gancho: '¿Cuántos litros de agua caben en la pila de tu casa? ¿Y cuántos segundos tardas en llegar a la primera valla?',
      objetivos: ['Calcular el volumen de prismas, cubos, cilindros, pirámides y conos', 'Medir y calcular el volumen de objetos de tu entorno', 'Organizar tus movimientos en el espacio y el tiempo en carreras con vallas', 'Reproducir un ritmo de una canción del repertorio escolar'],
      resumen: [
        'Volumen del prisma rectangular = largo × ancho × alto; del cubo = arista × arista × arista.',
        'Volumen del cilindro = π × r × r × altura. La pirámide y el cono ocupan un tercio del prisma o cilindro con la misma base y altura.',
        '1 litro = 1,000 cm³ y 1 m³ = 1,000 litros.',
        'En una carrera con vallas, calcular distancia y tiempo te ayuda a saltar en el momento justo; practicar con tu lado no dominante mejora el equilibrio.',
        'Para reproducir una canción se escucha, se marca el pulso y se practica por frases.',
      ],
      media: {
        id: 's12-d3-pila', kind: 'image', title: 'Una pila con medidas', aspect: '4:3',
        alt: 'Pila de cemento de una casa guatemalteca con flechas de largo, ancho y alto, y a la par un tonel cilíndrico con su radio y altura.',
        brief: 'Ilustración semirrealista de un patio guatemalteco: pila de cemento con su depósito de agua marcado con flechas de colores (largo 1 m, ancho 0.6 m, alto 0.5 m) y a la par un tonel cilíndrico azul con radio (0.3 m) y altura (1 m) señalados. Cubetas y lavadero para dar contexto. Fórmulas pequeñas debajo de cada objeto. Sin marcas comerciales.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['mat', 'cnt'], cnb: ['mat:1.4.2'], ambito: 'conocer', title: '¿Cuánto cabe?',
            prompt: 'El **volumen** es el espacio que ocupa un cuerpo o que cabe dentro de él. Se mide en **unidades cúbicas** (cm³, m³). Toca las tarjetas.' },
          { icon: 'Package', body: 'Imagina llenar una caja con cubitos de 1 cm: ¡el número de cubitos es su volumen!', reveal: [
            { icon: 'Package', front: 'Cubo', back: '**V = arista × arista × arista**. Un cubo de 10 cm: 10 × 10 × 10 = 1,000 cm³ = **1 litro**.' },
            { icon: 'Archive', front: 'Prisma rectangular', back: '**V = largo × ancho × alto**. Primero el área de la base, luego por la altura.' },
            { icon: 'Droplet', front: 'Litros', back: '1,000 cm³ = 1 litro. 1 m³ = **1,000 litros**.' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'cnt'], cnb: ['mat:1.4.2', 'mat:1.4.3'], ambito: 'hacer',
            prompt: 'El depósito de una pila mide **100 cm** de largo, **60 cm** de ancho y **50 cm** de alto. ¿Cuántos **litros** de agua caben?',
            hint: 'Calcula los cm³ y luego divide entre 1,000 para pasar a litros.',
            explain: '100 × 60 × 50 = 300,000 cm³. 300,000 ÷ 1,000 = 300 litros.' },
          { answer: 300, unit: 'litros',
            misconceptions: [{ value: 300000, msg: 'Ese es el volumen en cm³; falta pasarlo a litros (÷ 1,000).' }, { value: 210, msg: 'Sumaste las medidas; el volumen se obtiene multiplicándolas.' }] },
        ),
        S.explain(
          { fase: 'construir', areas: ['mat'], cnb: ['mat:1.4.2'], ambito: 'conocer', title: 'Cilindros, pirámides y conos',
            prompt: 'Los toneles son **cilindros**. Las pirámides y los conos tienen punta. Descubre sus fórmulas.',
            media: { id: 's12-d3-tercio', kind: 'animation', title: 'Tres conos llenan un cilindro', aspect: '16:9', duration: 35,
              alt: 'Animación en la que un cono lleno de arena se vacía tres veces dentro de un cilindro con la misma base y altura hasta llenarlo.',
              brief: 'Animación de 35 s: un cilindro transparente y un cono transparente de la misma base y altura. El cono se llena de arena de colores y se vacía en el cilindro: 1/3, 2/3, 3/3 (contador en pantalla). Luego lo mismo con una pirámide y un prisma de base cuadrada. Texto final: "Cono = cilindro ÷ 3; pirámide = prisma ÷ 3". Fondo claro, sin narración o con narración breve en español.' } },
          { icon: 'Drum', body: 'La idea es la misma: **área de la base × altura**. Si el sólido termina en punta, se divide entre 3.', reveal: [
            { icon: 'Drum', front: 'Cilindro', back: '**V = π × r × r × h**. Base circular por la altura.' },
            { icon: 'Triangle', front: 'Pirámide rectangular', back: '**V = largo × ancho × altura ÷ 3**.' },
            { icon: 'Hexagon', front: 'Cono', back: '**V = π × r × r × h ÷ 3**. Cabe un tercio de lo que cabe en el cilindro igual.' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'ccss'], cnb: ['mat:1.4.2', 'mat:1.4.3'], ambito: 'hacer',
            prompt: 'Un tonel cilíndrico para guardar agua de lluvia tiene **radio de 30 cm** y **altura de 100 cm**. ¿Cuántos **litros** le caben? (π ≈ 3.14)',
            hint: 'Área de la base: 3.14 × 30 × 30. Luego multiplica por la altura y divide entre 1,000.',
            explain: '3.14 × 30 × 30 = 2,826 cm². 2,826 × 100 = 282,600 cm³ = 282.6 litros.' },
          { answer: 282.6, unit: 'litros', allowDecimal: true, tolerance: 0.2,
            misconceptions: [{ value: 9.42, msg: 'Multiplicaste π × 30 una sola vez: el radio va dos veces (r × r).' }, { value: 18.84, msg: 'Usaste π × diámetro × altura: el área de la base es π × r × r.' }, { value: 282600, msg: 'Ese es el volumen en cm³; falta pasarlo a litros (÷ 1,000).' }] },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'mat'], cnb: ['ef:1.3.4', 'ef:1.2.2'], ambito: 'hacer',
            prompt: 'En un espacio seguro, coloca **tres obstáculos**: uno bajo (una cuerda en el suelo), uno medio (una mochila) y uno de altura a la rodilla (dos cajas con una varita encima, que caiga si la tocas). Corre y salta cada uno. En la segunda vuelta, **impúlsate con tu pie no dominante**. Mide tu pulso.' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después de la carrera con obstáculos', exercise: { name: 'Carrera con obstáculos bajo, medio y alto', icon: 'Footprints', seconds: 40 } },
            { label: 'Después de saltar con el pie no dominante', exercise: { name: 'Misma carrera impulsándote con el otro pie', icon: 'PersonStanding', seconds: 40 } },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['ef', 'mat'], cnb: ['ef:1.3.1'], ambito: 'hacer',
            prompt: 'Organizar el **espacio y el tiempo**: la primera valla está a **12 m** de la salida. Si corres a **4 m por segundo**, ¿en cuántos segundos llegas a ella?',
            hint: 'Distancia ÷ velocidad = tiempo.',
            explain: '12 ÷ 4 = 3 segundos. Saber cuándo llegas te permite preparar el salto a tiempo, sin frenar.' },
          { answer: 3, unit: 'segundos', misconceptions: [{ value: 48, msg: 'Multiplicaste; para hallar el tiempo se divide la distancia entre la velocidad.' }] },
        ),
        S.rhythm(
          { fase: 'aplicar', areas: ['art', 'ef'], cnb: ['art:1.1.9', 'ef:1.3.1'], ambito: 'hacer',
            prompt: 'La música también organiza el tiempo. Para aprender una canción del **repertorio escolar**, primero se reproduce su ritmo. Arma un compás de **4 tiempos** que empiece como muchas canciones de marcha: con **negras** y termine con una **blanca**.',
            hint: 'Negra = 1 tiempo, blanca = 2 tiempos. Dos negras + una blanca = 4.',
            explain: 'Reproducir el ritmo con palmas antes de cantar ayuda a que todo el grupo vaya junto. Luego se agrega la melodía por frases.' },
          { beats: 4, allowed: ['blanca', 'negra', 'corchea'], mustInclude: ['negra', 'blanca'], showFractions: true },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.4.2'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'El volumen de un prisma rectangular es largo × ancho × alto.', answer: true },
            { text: 'En un cono cabe el doble que en un cilindro con la misma base y altura.', answer: false, why: 'En el cono cabe un tercio (÷ 3), no el doble.' },
            { text: '1 litro equivale a 1,000 cm³.', answer: true },
            { text: 'El volumen se mide en unidades cuadradas como cm².', answer: false, why: 'El volumen se mide en unidades cúbicas: cm³, m³.' },
          ] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.4.3'], prompt: 'Mides una caja de zapatos: **30 cm** de largo, **20 cm** de ancho y **10 cm** de alto. ¿Cuál es su volumen en **cm³**?' },
          { answer: 6000, unit: 'cm³', misconceptions: [{ value: 60, msg: 'Sumaste las medidas; multiplícalas.' }, { value: 600, msg: 'Revisa: 30 × 20 = 600, y falta multiplicar por 10.' }] },
        ),
        cierre({ areas: ['mat', 'ef'], cnb: ['ef:1.3.4'] }, ['Calculo el volumen de prismas y cilindros', 'Mido objetos reales para calcular cuánto les cabe', 'Salto obstáculos con los dos pies de impulso'],
          ['Mediré la pila o un recipiente de mi casa y calcularé cuántos litros caben', 'Practicaré saltos con mi pie no dominante', 'Aprenderé el ritmo de una canción con palmas']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's12-d4-medios-culturas',
      title: 'Medios que conectan culturas',
      icon: 'Radio',
      minutes: 15,
      day: 4,
      gancho: 'Si mañana tu escuela tuviera su propia radio, ¿qué programa harías y a quién invitarías a conversar?',
      objetivos: ['Reconocer la estructura y la función de los medios de comunicación', 'Valorar ventajas y desventajas de la tecnología', 'Identificar aportes de otros pueblos del mundo a las culturas de Guatemala', 'Trabajar en un grupo de discusión con roles, conclusiones y recomendaciones'],
      resumen: [
        'Los medios (radio, prensa, televisión, internet) informan, educan, entretienen y persuaden; todos tienen un emisor, un mensaje, un canal y un público.',
        'La tecnología acerca a las personas y facilita el trabajo, pero también puede aislar, contaminar o difundir información falsa.',
        'Las culturas guatemaltecas se han enriquecido con aportes de pueblos de otros continentes: el idioma español, el café, los números arábigos y la herencia africana del pueblo garífuna, entre otros.',
        'Una conversación formal se inicia con saludo respetuoso y presentación; una informal, con confianza. En un grupo de discusión hay roles y al final se presentan conclusiones y recomendaciones.',
        'Quien expone con calma respira hondo, se para derecho, mira al público y habla a un ritmo pausado.',
      ],
      media: {
        id: 's12-d4-radio', kind: 'audio', title: 'Radio escolar "Voces que nos unen"', duration: 75,
        alt: 'Fragmento de un programa de radio escolar con presentación, noticia breve, entrevista y una canción de marimba.',
        brief: 'Audio de 75 s que modela la estructura de un programa de radio: cortina musical de marimba (5 s), saludo de dos locutores (niña y niño), sección de noticias escolares (15 s), entrevista breve a una señora garífuna sobre el tambor y la comida de su pueblo (30 s), anuncio de servicio público sobre cuidar el agua (10 s) y despedida. Voces naturales en español, sin marcas ni nombres reales.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1', 'ccss'], cnb: ['l1:3.1.1'], ambito: 'conocer', title: '¿Cómo funciona un medio de comunicación?',
            prompt: 'Escucha el programa de la radio escolar (arriba) y toca cada tarjeta para descubrir la **estructura** y la **función** de los medios.' },
          { icon: 'Radio', body: 'Todo medio tiene un **emisor** (quien produce), un **mensaje**, un **canal** (ondas de radio, papel, pantalla) y un **público**.', reveal: [
            { icon: 'Radio', front: 'Radio', back: 'Se organiza en **programas** y **secciones**: noticias, entrevistas, música, anuncios. Llega a comunidades lejanas.' },
            { icon: 'Newspaper', front: 'Prensa escrita', back: 'Tiene **titulares**, secciones (nacionales, deportes, cultura) y opinión. Se puede releer.' },
            { icon: 'Tv', front: 'Televisión', back: 'Une **imagen y sonido**: noticieros, programas educativos, series y publicidad.' },
            { icon: 'Smartphone', front: 'Internet y redes', back: 'Cualquiera puede **publicar**. Es rápido, pero hay que verificar las fuentes.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['l1'], cnb: ['l1:3.1.1'], ambito: 'conocer',
            prompt: 'Los medios tienen distintas **funciones**. Une cada mensaje con la suya.',
            explain: 'Un mismo medio puede cumplir varias funciones; reconocerlas te ayuda a interpretar mejor lo que ves y escuchas.' },
          { leftTitle: 'Mensaje', rightTitle: 'Función', pairs: [
            { id: 'inf', left: 'Noticiero: "Hoy inició la cosecha de café en Huehuetenango"', leftIcon: 'Newspaper', right: 'Informar' },
            { id: 'edu', left: 'Programa: "Aprende a medir el volumen de tu pila"', leftIcon: 'GraduationCap', right: 'Educar' },
            { id: 'ent', left: 'Radionovela del sábado', leftIcon: 'Headphones', right: 'Entretener' },
            { id: 'per', left: 'Anuncio: "¡Compra ya estos zapatos!"', leftIcon: 'Megaphone', right: 'Persuadir' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['ccss', 'l1', 'cnt'], cnb: ['ccss:3.2.2'], ambito: 'conocer',
            prompt: 'La tecnología cambia el mundo. Clasifica cada efecto como **ventaja** o **desventaja** del desarrollo tecnológico.',
            explain: 'La tecnología no es buena ni mala por sí misma: depende de cómo la usamos y de que llegue a todas las personas.' },
          { buckets: [
            { id: 'ven', label: 'Ventaja', icon: 'ThumbsUp', color: 'var(--c-ok)' },
            { id: 'des', label: 'Desventaja', icon: 'X', color: 'var(--c-hint)' },
          ], items: [
            { id: 't1', text: 'Consultar a un médico a distancia', bucket: 'ven' },
            { id: 't2', text: 'Aprender con videos educativos', bucket: 'ven' },
            { id: 't3', text: 'Aparatos viejos que se tiran y contaminan', bucket: 'des' },
            { id: 't4', text: 'Noticias falsas que se difunden rápido', bucket: 'des' },
            { id: 't5', text: 'Máquinas que ahorran trabajo pesado', bucket: 'ven' },
            { id: 't6', text: 'Personas que no tienen acceso a internet y quedan en desventaja', bucket: 'des' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['fc', 'ccss', 'art'], cnb: ['fc:2.3.1'], ambito: 'convivir',
            prompt: 'Las culturas de Guatemala también se han enriquecido con **aportes de pueblos de otros continentes**. Une cada aporte con su origen.',
            explain: 'Reconocer estos aportes nos ayuda a valorar la diversidad y a practicar la tolerancia: nuestra cultura es un tejido con hilos de muchos lugares.',
            media: { id: 's12-d4-aportes', kind: 'image', title: 'Hilos que vienen de lejos', aspect: '16:9',
              alt: 'Mapamundi con hilos de colores que salen de Europa, África, Asia y Medio Oriente y llegan a Guatemala, cada uno con un ícono.',
              brief: 'Ilustración de un mapamundi estilo tejido: desde Europa sale un hilo con un libro abierto (idioma español) y una espiga de trigo; desde África oriental un hilo con un grano de café; desde África occidental y la isla caribeña de San Vicente, un hilo con un tambor garífuna; desde la India y el mundo árabe, un hilo con los números 0-9. Todos los hilos llegan a Guatemala formando un tejido de colores. Sin personas.' } },
          { leftTitle: 'Aporte', rightTitle: 'Origen', pairs: [
            { id: 'esp', left: 'Idioma español y el trigo', leftIcon: 'Languages', right: 'Europa (España)' },
            { id: 'caf', left: 'La planta de café', leftIcon: 'Coffee', right: 'África (Etiopía)' },
            { id: 'num', left: 'Los números del 0 al 9 que usamos', leftIcon: 'Calculator', right: 'India, difundidos por los árabes' },
            { id: 'gar', left: 'Raíces del pueblo garífuna', leftIcon: 'Drum', right: 'Pueblos de África occidental y del Caribe' },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['l1', 'l2'], cnb: ['l1:2.3.1'], ambito: 'convivir',
            prompt: 'Para la radio escolar vas a **iniciar conversaciones**. ¿Cuál es un inicio **formal** (con una autoridad o persona que no conoces) y cuál **informal** (con amistades)?',
            explain: 'En una conversación formal se saluda con cortesía, se usa "usted" y te presentas. En una informal hay más confianza, pero siempre con respeto.' },
          { buckets: [
            { id: 'for', label: 'Formal', icon: 'Briefcase', color: 'var(--area-l1)' },
            { id: 'inf', label: 'Informal', icon: 'Smile', color: 'var(--area-pyd)' },
          ], items: [
            { id: 'i1', text: '"Buenos días, señor alcalde. Soy Ana, de sexto grado. ¿Podría hacerle unas preguntas?"', bucket: 'for' },
            { id: 'i2', text: '"¡Qué onda, Pedro! ¿Me ayudas con el programa?"', bucket: 'inf' },
            { id: 'i3', text: '"Con permiso, doctora. Le agradecemos que nos acompañe hoy."', bucket: 'for' },
            { id: 'i4', text: '"Hola, prima, ¿viste el partido de ayer?"', bucket: 'inf' },
          ] },
        ),
        S.reading(
          { fase: 'aplicar', areas: ['fc', 'l1', 'ccss'], cnb: ['fc:2.1.3', 'l1:2.3.2', 'l1:2.2.2'], ambito: 'convivir', prompt: 'Lee cómo trabajó este grupo de discusión y responde.' },
          { genre: 'Crónica escolar', heading: 'Un grupo de discusión sobre el desarrollo', passage:
            'El grupo de Andrea recibió una pregunta: **¿por qué algunos departamentos tienen menos desarrollo?** Primero se repartieron **roles**: Kevin fue el **moderador** (daba la palabra), Rosa la **secretaria** (anotaba las ideas), Josué el **controlador del tiempo** y Andrea la **relatora** (presentaría las conclusiones).\n\nLeyeron el informe de la Comisión para el Esclarecimiento Histórico (CEH). Según ese informe, durante el **conflicto armado interno** (1960-1996) los departamentos más afectados fueron, entre otros, **Quiché, Huehuetenango, Chimaltenango, Alta Verapaz y Baja Verapaz**. Luego compararon con indicadores actuales de **pobreza, escolaridad y salud**: varios de esos departamentos están hoy entre los que tienen más pobreza y menos acceso a servicios.\n\n**Conclusión:** "El conflicto armado dañó la vida de muchas comunidades y ese daño todavía se refleja en su desarrollo, junto con otras causas como la falta de inversión." **Recomendación:** "Invertir más en escuelas, centros de salud y caminos en esos departamentos, y conocer la historia para que no se repita."\n\nAl exponer, Andrea **respiró hondo**, se paró **derecha**, miró al público y habló **despacio**. Aunque estaba nerviosa, se notó su interés por que todos entendieran.',
            questions: [
              { q: '¿Qué hizo la secretaria del grupo?', options: [
                { id: 'a', text: 'Anotar las ideas' },
                { id: 'b', text: 'Dar la palabra' },
                { id: 'c', text: 'Presentar las conclusiones' },
              ], correct: 'a' },
              { q: '¿Qué relación encontró el grupo?', options: [
                { id: 'a', text: 'Varios departamentos muy afectados por el conflicto armado tienen hoy menos desarrollo' },
                { id: 'b', text: 'El conflicto armado no tuvo ningún efecto' },
                { id: 'c', text: 'Todos los departamentos tienen el mismo desarrollo' },
              ], correct: 'a', why: 'El grupo relacionó los datos históricos con los indicadores actuales, sin olvidar que hay otras causas.' },
              { q: '¿Qué hizo Andrea para exponer con calma?', options: [
                { id: 'a', text: 'Respiró hondo, se paró derecha y habló despacio' },
                { id: 'b', text: 'Leyó muy rápido para terminar pronto' },
                { id: 'c', text: 'Dio la espalda al público' },
              ], correct: 'a' },
            ] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['l1', 'fc'], cnb: ['l1:2.3.2', 'fc:2.1.3'], prompt: 'Clasifica cada frase: ¿es una **conclusión** (lo que el grupo descubrió) o una **recomendación** (lo que propone hacer)?' },
          { buckets: [
            { id: 'con', label: 'Conclusión', icon: 'Lightbulb', color: 'var(--area-l1)' },
            { id: 'rec', label: 'Recomendación', icon: 'Signpost', color: 'var(--area-pyd)' },
          ], items: [
            { id: 'k1', text: 'El daño del conflicto todavía se refleja en el desarrollo de algunas comunidades', bucket: 'con' },
            { id: 'k2', text: 'Construir más centros de salud en esos departamentos', bucket: 'rec' },
            { id: 'k3', text: 'La falta de inversión también frena el desarrollo', bucket: 'con' },
            { id: 'k4', text: 'Enseñar la historia en las escuelas para que no se repita', bucket: 'rec' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc', 'ccss', 'l1'], cnb: ['fc:2.3.1', 'ccss:3.2.2', 'l1:3.1.1'], prompt: 'Elige **todas** las afirmaciones correctas.' },
          { multiple: true, options: [
            { id: 'a', text: 'El café que cultivamos tiene su origen en África.', icon: 'Coffee' },
            { id: 'b', text: 'Una desventaja de la tecnología es la basura electrónica.', icon: 'Trash2' },
            { id: 'c', text: 'Un anuncio publicitario tiene la función de persuadir.', icon: 'Megaphone' },
            { id: 'd', text: 'Los números que usamos fueron inventados en Guatemala.', icon: 'Calculator', feedback: 'Los números del 0 al 9 vienen de la India y los difundieron los árabes. ¡Aunque los mayas también inventaron el cero en su propio sistema!' },
          ], correct: ['a', 'b', 'c'] },
        ),
        cierre({ areas: ['l1', 'fc'], cnb: ['l1:2.3.2', 'fc:2.3.1'] }, ['Identifico la función de un mensaje de los medios', 'Valoro los aportes de otros pueblos a mi cultura', 'Cumplo mi rol en un grupo de discusión'],
          ['Escucharé un programa de radio y anotaré sus secciones', 'Preguntaré en casa qué costumbres vienen de otros lugares', 'Practicaré exponer con calma: respirar, pararme derecho y mirar al público']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's12-d5-reto',
      title: 'Reto de la semana 12',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste sobre las redes que nos unen', 'Obtener la medalla "Tejedor de redes" (70 % o más)'],
      resumen: ['Superé el reto de la semana 12: mutualismo, datos del mundo, volumen, medios y culturas.'],
      media: {
        id: 's12-d5-reto', kind: 'image', title: 'Medalla Tejedor de redes', aspect: '1:1',
        alt: 'Medalla dorada con una red de hilos de colores que une un colibrí, un globo terráqueo y una antena de radio.',
        brief: 'Medalla circular dorada con relieve: al centro un pequeño globo terráqueo; alrededor, hilos de colores del tejido guatemalteco que lo conectan con un colibrí, una hoja de frijol y una antena de radio. Cinta con los colores de las áreas del CNB. Estilo plano con brillo suave, fondo transparente, 1024×1024.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.4'], prompt: 'Las abejas toman néctar y polinizan las flores del café. ¿Qué tipo de relación es?' },
          { options: [{ id: 'a', text: 'Mutualismo: ambas se benefician' }, { id: 'b', text: 'Solo gana la abeja' }, { id: 'c', text: 'Ninguna se beneficia' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.1.3'], prompt: '¿Procariota o eucariota?' },
          { buckets: [{ id: 'p', label: 'Procariota', icon: 'Circle' }, { id: 'e', label: 'Eucariota', icon: 'CircleDot' }],
            items: [{ id: 'a', text: 'Bacteria', bucket: 'p' }, { id: 'b', text: 'Paramecio', bucket: 'e' }, { id: 'c', text: 'Levadura', bucket: 'e' }, { id: 'd', text: 'Bacteria del yogur', bucket: 'p' }] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.2.2'], prompt: '¿Qué adaptación ayuda al mangle a vivir en agua salada?' },
          { options: [{ id: 'a', text: 'Raíces que salen del agua y toleran la sal' }, { id: 'b', text: 'Espinas en lugar de hojas' }, { id: 'c', text: 'Pelaje espeso' }], correct: ['a'] }),
        S.order({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.1.2'], prompt: 'Ordena los continentes del **más poblado** al **menos poblado**.' },
          { items: [{ id: 'as', text: 'Asia' }, { id: 'af', text: 'África' }, { id: 'am', text: 'América' }, { id: 'eu', text: 'Europa' }, { id: 'oc', text: 'Oceanía' }], labels: { start: 'Más poblado', end: 'Menos poblado' } }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.4.2'], prompt: 'Una caja con forma de cubo tiene 20 cm de arista. ¿Cuál es su volumen en cm³?' },
          { answer: 8000, unit: 'cm³', misconceptions: [{ value: 60, msg: 'Sumaste; el volumen del cubo es arista × arista × arista.' }, { value: 400, msg: 'Eso es el área de una cara; falta multiplicar por la altura.' }] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.4.2'], prompt: 'Una pirámide de base rectangular mide 6 cm × 5 cm de base y 10 cm de altura. ¿Cuál es su volumen en cm³?' },
          { answer: 100, unit: 'cm³', misconceptions: [{ value: 300, msg: 'Ese sería el prisma; la pirámide es un tercio (÷ 3).' }] }),
        S.match({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.1.4'], prompt: 'Match the numbers.' },
          { pairs: [{ id: 'a', left: '200', right: 'two hundred' }, { id: 'b', left: '560', right: 'five hundred sixty' }, { id: 'c', left: '1000', right: 'one thousand' }] }),
        S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.1.4'], prompt: '¿Cuál de estos es un factor que **afecta negativamente** la comunicación?' },
          { options: [{ id: 'a', text: 'Un prejuicio contra quien habla' }, { id: 'b', text: 'Escuchar con atención' }, { id: 'c', text: 'Pedir que explique una palabra desconocida' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.1.1'], prompt: 'Une cada medio con una característica.' },
          { pairs: [{ id: 'r', left: 'Radio', right: 'Solo sonido; llega a lugares lejanos' }, { id: 'p', left: 'Prensa escrita', right: 'Titulares y secciones que se pueden releer' }, { id: 't', left: 'Televisión', right: 'Une imagen y sonido' }] }),
        S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.3.1'], prompt: '¿Qué aporte llegó a Guatemala desde Europa?' },
          { options: [{ id: 'a', text: 'El idioma español' }, { id: 'b', text: 'El maíz' }, { id: 'c', text: 'El cacao' }], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 2 */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.4'], prompt: '¿Qué reciben las bacterias de las raíces del frijol a cambio del nitrógeno?' },
      { options: [{ id: 'a', text: 'Azúcares de la planta' }, { id: 'b', text: 'Luz solar directa' }, { id: 'c', text: 'Nada' }], correct: ['a'] }),
    S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.1.3', 'cnt:2.2.2'], prompt: '¿Verdadero o falso?' },
      { statements: [{ text: 'Las amebas tienen núcleo.', answer: true }, { text: 'Las adaptaciones aparecen en un solo día.', answer: false }] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:2.1.2'], prompt: '¿Qué recurso comparten Guatemala y Brasil como riqueza natural?' },
      { options: [{ id: 'a', text: 'Selvas tropicales con gran biodiversidad' }, { id: 'b', text: 'Grandes glaciares' }, { id: 'c', text: 'Desiertos de hielo' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:2.2.2', 'ccss:2.3.2'], prompt: '¿Qué política ayuda a conservar los bosques?' },
      { options: [{ id: 'a', text: 'Crear áreas protegidas' }, { id: 'b', text: 'Permitir la tala sin control' }, { id: 'c', text: 'Quemar para sembrar cada año' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.2'], prompt: '¿Cuál es una **desventaja** del desarrollo tecnológico?' },
      { options: [{ id: 'a', text: 'La basura electrónica que contamina' }, { id: 'b', text: 'Poder comunicarse a distancia' }, { id: 'c', text: 'Aprender con videos' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.4.2'], prompt: 'Un cilindro tiene radio de 10 cm y altura de 10 cm. ¿Cuál es su volumen en cm³? (π ≈ 3.14)' },
      { answer: 3140, unit: 'cm³', misconceptions: [{ value: 314, msg: 'Ese es el área de la base; falta multiplicar por la altura.' }] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.4.3'], prompt: 'Un depósito mide 2 m × 1 m × 1 m. ¿Cuántos litros de agua caben? (1 m³ = 1,000 litros)' },
      { answer: 2000, unit: 'litros', misconceptions: [{ value: 2, msg: 'Ese es el volumen en m³; pásalo a litros.' }] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.3.1'], prompt: '¿Qué inicio de conversación es **formal**?' },
      { options: [{ id: 'a', text: '"Buenas tardes, licenciada. ¿Me permite una pregunta?"' }, { id: 'b', text: '"¡Hey! ¿Qué onda?"' }, { id: 'c', text: '"Vos, vení."' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.1.6'], prompt: '¿Qué dato es **indispensable** en una ficha de registro de investigación?' },
      { options: [{ id: 'a', text: 'La fuente de donde salió la información' }, { id: 'b', text: 'Mi color favorito' }, { id: 'c', text: 'Un dibujo decorativo' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.1', 'ef:1.3.4'], prompt: 'Corres a 5 m por segundo y la primera valla está a 15 m de la salida. ¿En cuántos segundos llegas a ella?' },
      { options: [{ id: 'a', text: 'En 3 segundos' }, { id: 'b', text: 'En 75 segundos' }, { id: 'c', text: 'En 20 segundos' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.1.3'], prompt: 'Según la CEH, ¿cuál fue uno de los departamentos más afectados por el conflicto armado interno?' },
      { options: [{ id: 'a', text: 'Quiché' }, { id: 'b', text: 'Ninguno' }, { id: 'c', text: 'Solo la capital' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.4.1'], prompt: 'Una comunidad tiene muchas flores silvestres. ¿Qué proyecto productivo aprovecha ese recurso sin dañarlo?' },
      { options: [{ id: 'a', text: 'Producir miel con abejas' }, { id: 'b', text: 'Cortar todas las flores para venderlas un solo día' }, { id: 'c', text: 'Construir sobre el campo' }], correct: ['a'] }),
  ],
});
