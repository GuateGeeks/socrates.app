import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 26 · Unidad 3 "Valorando nuestra convivencia"
 * Tema generador: Raíces que sostienen la tierra
 * Reforestación, zonas de riesgo y medición · preciclar, reutilizar y reciclar · población y recursos · FODA y ferias ·
 * sistema feudal y conquista · lenguaje figurado, narración, diversidad de idiomas · cultura de paz.
 */
export default semana({
  id: 's26',
  unidad: 3,
  semana: 26,
  kind: 'aprendizaje',
  temaGenerador: 'Raíces que sostienen la tierra',
  title: 'Raíces que sostienen la tierra',
  subtitle: 'Reforestar, reciclar, recordar la historia y sembrar paz',
  icon: 'TreeDeciduous',
  color: 'var(--area-cnt)',
  contexto: 'En una aldea de San Marcos, después de un invierno muy lluvioso, se derrumbó parte del talud que está junto al camino de la escuela. La comunidad decidió sembrar árboles en la ladera, organizar una feria de reciclaje y un festival de poesía por la paz. Al mismo tiempo, en clase se preguntan: ¿quién ha sido dueño de la tierra a lo largo de la historia? Esta semana descubrirás que las raíces de los árboles, las de la historia y las de la palabra sostienen nuestra convivencia.',
  ejes: ['sostenible', 'seguridad', 'multiculturalidad', 'valores'],
  media: {
    id: 's26-portada', kind: 'video', title: 'Una ladera que vuelve a vivir', aspect: '16:9', duration: 60,
    alt: 'Una ladera sin árboles con un derrumbe junto a un camino se transforma, a lo largo de las estaciones, en una ladera verde sembrada por la comunidad.',
    brief: 'Video en cámara rápida o animación 2D de 60 s. Inicio: ladera deforestada con un derrumbe de tierra junto a un camino escolar bajo la lluvia. Luego: estudiantes, madres, padres y ancianos siembran arbolitos en curvas de nivel con estacas y cuerdas de medición. Paso de estaciones (seca y lluviosa) hasta ver la ladera verde, un nacimiento de agua y aves. Cierre: festival escolar con niñas y niños recitando en sus idiomas. Sobreimpreso: "Raíces que sostienen la tierra". Música de marimba suave. Sin marcas ni rostros reales.',
  },
  badge: { id: 'medalla-s26', name: 'Guardián de las raíces', icon: 'TreeDeciduous', desc: 'Completaste la semana 26 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's26-d1-arboles-ladera',
      title: 'Árboles que sostienen la montaña',
      icon: 'Trees',
      minutes: 14,
      day: 1,
      gancho: '¿Has visto un derrumbe en un camino después de muchas lluvias? ¿Había árboles en ese lugar?',
      objetivos: ['Explicar por qué la reforestación protege los taludes, el agua, el suelo y los animales', 'Identificar zonas de riesgo en tu región', 'Convertir metros a sus múltiplos y submúltiplos', 'Explicar por qué ocurren errores al medir', 'Describir objetos en inglés y clasificar palabras'],
      resumen: [
        'Las raíces de los árboles amarran el suelo y hacen más estables los taludes; el bosque deja que el agua de lluvia se infiltre, alimenta los nacimientos en la época seca, evita la erosión y da hogar a muchas especies.',
        'Son zonas de riesgo las laderas empinadas sin árboles, las orillas de ríos, los barrancos, las zonas bajas que se inundan y las cercanías de volcanes activos.',
        'Múltiplos del metro: kilómetro (1,000 m), hectómetro (100 m), decámetro (10 m). Submúltiplos: decímetro (0.1 m), centímetro (0.01 m), milímetro (0.001 m).',
        'Se cometen errores al medir si la cinta no empieza en cero, está doblada o floja, si se mira de lado o si el instrumento está gastado.',
      ],
      media: {
        id: 's26-d1-raices', kind: 'diagram', title: 'Corte de una ladera con y sin árboles', aspect: '16:9',
        alt: 'Dos cortes de ladera: a la izquierda sin árboles, el agua corre por encima y arrastra tierra; a la derecha con árboles, las raíces sujetan el suelo y el agua se infiltra hasta un nacimiento.',
        brief: 'Diagrama en corte lateral, dos paneles iguales. Izquierda "Sin bosque": ladera pelada, flechas azules gruesas corriendo sobre la superficie, tierra desprendiéndose hacia un camino, río café abajo. Derecha "Con bosque": árboles con raíces visibles como red bajo tierra, flechas azules delgadas que bajan dentro del suelo hasta una capa de agua que sale en un nacimiento limpio, aves y un venado pequeño. Etiquetas: "erosión", "infiltración", "raíces", "nacimiento". Estilo plano, colores tierra y verdes.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'ccss'], cnb: ['cnt:6.3.3'], ambito: 'conocer', title: 'Lo que hace un bosque',
            prompt: 'La comunidad quiere reforestar la ladera. Pero ¿qué hace exactamente un árbol por nosotros? Toca cada tarjeta.' },
          { icon: 'TreePine', body: 'Un bosque es como una **esponja con red**: guarda agua y sujeta la tierra.', reveal: [
            { icon: 'Mountain', front: 'Taludes estables', back: 'Las **raíces** amarran el suelo y reducen los derrumbes en las laderas.' },
            { icon: 'Droplets', front: 'Ciclo del agua', back: 'En la **época lluviosa** el agua se infiltra; en la **época seca** sale en los nacimientos y mantiene los ríos.' },
            { icon: 'Sprout', front: 'Suelo fértil', back: 'Las hojas caídas forman abono y evitan que la lluvia **lave** la capa fértil (erosión).' },
            { icon: 'Bird', front: 'Especies', back: 'Aves, ardillas, insectos y otros animales encuentran **alimento y refugio**.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt', 'ccss'], cnb: ['cnt:6.2.3'], ambito: 'conocer',
            prompt: 'Con el COCODE, el grado hace un **mapa de riesgos** de la región. Clasifica cada lugar.',
            hint: 'Piensa: ¿puede caer tierra, subir el agua o llegar material de un volcán?',
            explain: 'Identificar zonas de riesgo permite no construir en ellas, reforestarlas y saber por dónde evacuar.',
            media: { id: 's26-d1-mapa-riesgo', kind: 'image', title: 'Mapa comunitario de riesgos', aspect: '4:3',
              alt: 'Mapa dibujado a mano de una aldea con zonas pintadas de rojo (ladera sin árboles, orilla del río, barranco) y verde (planicie y escuela lejos del río), con rutas de evacuación.',
              brief: 'Ilustración de un mapa comunitario en papelógrafo, hecho por estudiantes con marcadores: aldea con casas, escuela, iglesia, río y ladera. Zonas de riesgo sombreadas en rojo: ladera deforestada, orilla del río, borde del barranco. Zonas seguras en verde: planicie alta con la escuela y el campo. Flechas amarillas "ruta de evacuación" hacia un punto de reunión. Leyenda en la esquina. Texto a mano, colores de marcador.' } },
          { buckets: [
            { id: 'rie', label: 'Zona de riesgo', icon: 'AlertTriangle', color: 'var(--area-cnt)' },
            { id: 'seg', label: 'Zona más segura', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          ], items: [
            { id: 'z1', text: 'Ladera empinada sin árboles', icon: 'Mountain', bucket: 'rie' },
            { id: 'z2', text: 'Casas en la orilla del río', icon: 'Waves', bucket: 'rie' },
            { id: 'z3', text: 'Borde de un barranco', icon: 'MountainSnow', bucket: 'rie' },
            { id: 'z4', text: 'Planicie alta, lejos del río y del barranco', icon: 'Home', bucket: 'seg' },
            { id: 'z5', text: 'Ladera con bosque y raíces firmes', icon: 'Trees', bucket: 'seg', feedback: 'Una ladera con bosque es más estable, aunque siempre hay que observar grietas después de lluvias fuertes.' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['mat', 'cnt'], cnb: ['mat:7.1.3'], ambito: 'conocer', title: 'El metro y su familia',
            prompt: 'Para sembrar se mide: la ladera tiene **1.2 km** de largo, los árboles van cada **3 m** y los hoyos miden **40 cm** de hondo. Todas son medidas de la familia del **metro**.' },
          { icon: 'Ruler', body: 'Cada unidad es **10 veces** la siguiente. Hacia unidades más pequeñas se **multiplica**; hacia más grandes se **divide**.', reveal: [
            { icon: 'Route', front: 'Múltiplos', back: '1 km = 1,000 m · 1 hm = 100 m · 1 dam = 10 m' },
            { icon: 'Ruler', front: 'Submúltiplos', back: '1 dm = 0.1 m · 1 cm = 0.01 m · 1 mm = 0.001 m' },
            { icon: 'Calculator', front: 'Ejemplo', back: '1.2 km × 1,000 = **1,200 m**. 40 cm ÷ 100 = **0.4 m**.' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['mat'], cnb: ['mat:7.1.3'], prompt: 'Ordena las unidades de longitud de la **más grande** a la **más pequeña**.' ,
            explain: 'km → hm → dam → m → dm → cm → mm. Cada paso es 10 veces más pequeño.' },
          { items: [
            { id: 'km', text: 'Kilómetro (km)' }, { id: 'hm', text: 'Hectómetro (hm)' }, { id: 'dam', text: 'Decámetro (dam)' },
            { id: 'm', text: 'Metro (m)' }, { id: 'dm', text: 'Decímetro (dm)' }, { id: 'cm', text: 'Centímetro (cm)' }, { id: 'mm', text: 'Milímetro (mm)' },
          ], labels: { start: 'Más grande', end: 'Más pequeña' } },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'cnt'], cnb: ['mat:7.1.3', 'cnt:6.3.3'], prompt: 'La fila de árboles mide **1.2 km**. Si se siembra un árbol cada **3 m** (empezando por el metro 0 y sin sembrar en el último), ¿cuántos árboles caben en la fila?',
            hint: 'Primero convierte 1.2 km a metros. Luego divide entre 3.',
            explain: '1.2 km = 1,200 m; 1,200 ÷ 3 = 400 árboles.' },
          { answer: 400, unit: 'árboles', misconceptions: [{ value: 0.4, msg: 'No convertiste los kilómetros a metros: 1.2 km = 1,200 m.' }, { value: 3600, msg: 'Multiplicaste por 3; hay que dividir la distancia entre la separación.' }] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['mat', 'cnt'], cnb: ['mat:7.1.2'], ambito: 'hacer',
            prompt: 'Dos equipos midieron la misma distancia entre arbolitos y obtuvieron 2.95 m y 3.10 m. Discute: ¿qué situaciones **causan errores** de medición y cuáles son **buena práctica**?',
            explain: 'Toda medición tiene un pequeño margen de error. Se reduce empezando en cero, tensando la cinta, mirando de frente y midiendo dos veces.' },
          { buckets: [
            { id: 'err', label: 'Causa error', icon: 'X', color: 'var(--area-cnt)' },
            { id: 'bien', label: 'Buena práctica', icon: 'Check', color: 'var(--c-ok)' },
          ], items: [
            { id: 'e1', text: 'Empezar a medir desde el 5 de la cinta y no desde el 0', bucket: 'err' },
            { id: 'e2', text: 'Dejar la cinta floja o doblada', bucket: 'err' },
            { id: 'e3', text: 'Leer la marca mirando de lado', bucket: 'err', feedback: 'Si miras de lado, la marca parece moverse. Hay que mirar de frente.' },
            { id: 'e4', text: 'Usar una cinta con el inicio roto sin darse cuenta', bucket: 'err' },
            { id: 'e5', text: 'Medir dos veces y comparar', bucket: 'bien' },
            { id: 'e6', text: 'Tensar la cinta en línea recta', bucket: 'bien' },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['l3', 'cnt'], cnb: ['l3:4.2.1', 'l3:4.1.3'], ambito: 'conocer',
            prompt: 'English time! Junto a los árboles sembrarán un huerto. Para **describir objetos** en inglés usamos colores: _"The carrot is orange. The leaves are green."_ Clasifica las palabras en **vegetables** (verduras) o **colors** (colores).',
            explain: 'Now describe the tree: "The tree is **tall** and **green**. It has **brown** roots." Los colores funcionan como adjetivos para describir objetos.' },
          { buckets: [
            { id: 'veg', label: 'Vegetables', icon: 'Carrot', color: 'var(--c-quetzal)' },
            { id: 'col', label: 'Colors', icon: 'Palette', color: 'var(--area-art)' },
          ], items: [
            { id: 'w1', text: 'carrot', bucket: 'veg' },
            { id: 'w2', text: 'potato', bucket: 'veg' },
            { id: 'w3', text: 'onion', bucket: 'veg' },
            { id: 'w4', text: 'green', bucket: 'col' },
            { id: 'w5', text: 'brown', bucket: 'col' },
            { id: 'w6', text: 'yellow', bucket: 'col' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.3.3', 'cnt:6.2.3'], prompt: 'Boleto de salida: ¿por qué reforestar una ladera ayuda a prevenir derrumbes?' },
          { options: [
            { id: 'a', text: 'Porque las raíces sujetan el suelo y el agua se infiltra en lugar de arrastrar la tierra' },
            { id: 'b', text: 'Porque los árboles detienen la lluvia por completo', feedback: 'La lluvia sigue cayendo; lo que cambia es que el agua se infiltra y el suelo queda sujeto por las raíces.' },
            { id: 'c', text: 'Porque los árboles hacen que la ladera sea menos empinada', feedback: 'La pendiente no cambia; lo que cambia es la firmeza del suelo.' },
          ], correct: ['a'] },
        ),
        S.fill(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:7.1.3'], prompt: 'Completa las equivalencias.' },
          { text: '3 km = [[3000|3,000]] m\n250 cm = [[2.5]] m\n4 dam = [[40]] m', distractors: ['300', '25', '0.4'] },
        ),
        cierre({ areas: ['cnt', 'mat'], cnb: ['cnt:6.3.3'] }, ['Explico cómo el bosque protege taludes, agua, suelo y especies', 'Reconozco zonas de riesgo de mi región', 'Convierto metros a múltiplos y submúltiplos y mido con cuidado'],
          ['Sembraré o cuidaré un árbol con mi familia', 'Identificaré con mi familia una zona de riesgo cercana y una ruta segura', 'Mediré dos veces antes de anotar un resultado']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's26-d2-menos-basura',
      title: 'Menos basura, más vida',
      icon: 'Recycle',
      minutes: 14,
      day: 2,
      gancho: '¿Cuántas bolsas y envases desechables usa tu familia en una semana? ¿Adónde van a parar?',
      objetivos: ['Diferenciar preciclar, reutilizar y reciclar', 'Relacionar el crecimiento de la población con la demanda de recursos', 'Aplicar el análisis FODA a un proyecto de feria', 'Hidratarte y alimentarte bien en la actividad física'],
      resumen: [
        'Preciclar es evitar la basura desde la compra: rechazar lo desechable y preferir productos sin empaque. Reutilizar es darle otro uso a un objeto. Reciclar es transformar un material usado en uno nuevo.',
        'Cuando la población crece, aumentan las demandas de agua, alimentos, leña, vivienda, escuelas y transporte; si no se usan con cuidado, los recursos naturales se agotan.',
        'El FODA analiza un proyecto: Fortalezas y Debilidades (dentro del grupo), Oportunidades y Amenazas (fuera del grupo).',
        'Durante la actividad física hay que tomar agua antes, durante y después, y preferir agua pura y fruta en lugar de bebidas azucaradas.',
      ],
      media: {
        id: 's26-d2-tres-r', kind: 'animation', title: 'El viaje de una botella', aspect: '16:9', duration: 45,
        alt: 'Animación de tres caminos: una persona rechaza una pajilla y lleva su bolsa de tela; otra convierte un envase en maceta; y botellas llegan a un centro de acopio y salen como nuevos objetos.',
        brief: 'Animación 2D de 45 s en tres escenas con título: (1) "Preciclar": en un mercado, una niña dice "no, gracias" a la bolsa plástica y usa su canasta; (2) "Reutilizar": un niño convierte una botella en maceta para un arbolito; (3) "Reciclar": botellas limpias viajan a un centro de acopio, se trituran y salen como una banca. Colores alegres, narración breve, subtítulos. Sin marcas en envases.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'pyd'], cnb: ['cnt:6.1.3'], ambito: 'conocer', title: 'Tres caminos para menos basura',
            prompt: 'La basura que se acumula en barrancos y ríos contamina el agua y tapa los drenajes. Toca cada tarjeta para conocer tres formas de reducirla.' },
          { icon: 'Recycle', body: 'El mejor residuo es el que **nunca se produce**. Por eso preciclar va primero.', reveal: [
            { icon: 'ShoppingBasket', front: 'Preciclar', back: 'Evitar la basura **desde la compra**: llevar canasta, rechazar pajillas y desechables, comprar a granel.' },
            { icon: 'RefreshCw', front: 'Reutilizar (reusar)', back: 'Dar **otro uso** a un objeto: frascos para guardar semillas, botellas para macetas.' },
            { icon: 'Factory', front: 'Reciclar', back: '**Transformar** materiales usados (papel, vidrio, plástico, metal) en objetos nuevos.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt', 'pyd'], cnb: ['cnt:6.1.3'], ambito: 'hacer', prompt: 'Clasifica cada acción de la feria de reciclaje.',
            hint: 'Pregúntate: ¿evita la basura desde antes, le da otro uso tal como está o la transforma en material nuevo?',
            explain: 'Las tres acciones ayudan, pero preciclar es la más poderosa porque la basura ni siquiera llega a existir.' },
          { buckets: [
            { id: 'pre', label: 'Preciclar', icon: 'ShoppingBasket', color: 'var(--c-ok)' },
            { id: 'reu', label: 'Reutilizar', icon: 'RefreshCw', color: 'var(--area-l1)' },
            { id: 'rec', label: 'Reciclar', icon: 'Factory', color: 'var(--area-pyd)' },
          ], items: [
            { id: 'a1', text: 'Llevar una canasta al mercado en lugar de pedir bolsas', bucket: 'pre' },
            { id: 'a2', text: 'Comprar frijol a granel en lugar de en bolsitas', bucket: 'pre' },
            { id: 'a3', text: 'Usar un frasco de vidrio para guardar semillas', bucket: 'reu' },
            { id: 'a4', text: 'Hacer una maceta con una botella', bucket: 'reu' },
            { id: 'a5', text: 'Llevar papel usado a una fábrica que hace papel nuevo', bucket: 'rec' },
            { id: 'a6', text: 'Vender latas de aluminio a un centro de acopio para fundirlas', bucket: 'rec', feedback: 'Fundir el aluminio para hacer nuevas latas transforma el material: es reciclar.' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['cnt', 'mat', 'ccss'], cnb: ['cnt:6.4.3'], ambito: 'hacer',
            prompt: 'Supongamos que la aldea tenía estos habitantes. Construye la gráfica con los datos del censo comunitario.',
            hint: 'Cada barra sube de 50 en 50.',
            explain: 'En 30 años la población de este ejemplo creció más del doble. Eso significa más agua, más leña, más casas y más basura: si el bosque no se cuida, se agota.' },
          { categories: [
            { id: 'y1', label: '1990', icon: 'Users' },
            { id: 'y2', label: '2000', icon: 'Users' },
            { id: 'y3', label: '2010', icon: 'Users' },
            { id: 'y4', label: '2020', icon: 'Users' },
          ], data: [400, 550, 700, 900], max: 1000, step: 50, unit: 'habitantes', source: 'Censo comunitario (datos supuestos): 1990 = 400, 2000 = 550, 2010 = 700, 2020 = 900' },
        ),
        S.match(
          { fase: 'construir', areas: ['cnt', 'ccss'], cnb: ['cnt:6.4.3'], ambito: 'conocer', prompt: 'Une cada **demanda** de una población que crece con el **recurso natural** que presiona.',
            explain: 'Cada necesidad es legítima, pero juntas pueden agotar los recursos. Por eso se planifica: reforestar, cuidar el agua y ordenar dónde construir.' },
          { leftTitle: 'Demanda', rightTitle: 'Recurso que se desgasta', pairs: [
            { id: 'lena', left: 'Más leña para cocinar', leftIcon: 'Flame', right: 'Bosques' },
            { id: 'agua', left: 'Más familias con chorro', leftIcon: 'Droplet', right: 'Nacimientos y ríos' },
            { id: 'casa', left: 'Más casas y calles', leftIcon: 'Home', right: 'Suelo para cultivar' },
            { id: 'comi', left: 'Más alimentos', leftIcon: 'Wheat', right: 'Fertilidad de la tierra' },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['pyd', 'cnt'], cnb: ['pyd:4.2.1'], ambito: 'emprender',
            prompt: 'El grado tendrá un puesto de **macetas recicladas** en la feria de la comunidad. Haz su **FODA**: clasifica cada idea.',
            hint: 'Fortalezas y Debilidades son del grupo (internas). Oportunidades y Amenazas vienen de afuera (externas).',
            explain: 'Con el FODA el grupo aprovecha sus fortalezas y oportunidades, y prepara soluciones para sus debilidades y amenazas (por ejemplo, llevar un toldo por si llueve).' },
          { buckets: [
            { id: 'f', label: 'Fortaleza', icon: 'Dumbbell', color: 'var(--c-ok)' },
            { id: 'o', label: 'Oportunidad', icon: 'Sunrise', color: 'var(--area-l1)' },
            { id: 'd', label: 'Debilidad', icon: 'Minus', color: 'var(--c-hint)' },
            { id: 'a', label: 'Amenaza', icon: 'CloudRain', color: 'var(--area-cnt)' },
          ], layout: 'grid2', items: [
            { id: 'x1', text: 'Sabemos pintar y decorar muy bien', bucket: 'f' },
            { id: 'x2', text: 'Tenemos muchas botellas reunidas', bucket: 'f' },
            { id: 'x3', text: 'La feria atrae a muchas familias', bucket: 'o' },
            { id: 'x4', text: 'El vivero regala arbolitos para las macetas', bucket: 'o' },
            { id: 'x5', text: 'No sabemos calcular bien los precios', bucket: 'd' },
            { id: 'x6', text: 'Pronostican lluvia el día de la feria', bucket: 'a', feedback: 'La lluvia no depende del grupo: es un factor externo negativo, una amenaza.' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['pyd', 'fc'], cnb: ['pyd:4.3.3'], ambito: 'emprender', prompt: '¿Qué harías tú?' },
          { scene: { icon: 'Store', text: 'La maestra pide **voluntarios** para atender el puesto de macetas el sábado en la feria de la comunidad. Es tu día libre y te da un poco de pena hablar con la gente.' }, options: [
            { id: 'a', icon: 'Home', text: 'No ir: que lo hagan otros', consequence: 'El puesto funciona con menos manos y te pierdes la oportunidad de aprender a vender y a explicar el reciclaje.', values: ['Comodidad'], constructive: false },
            { id: 'b', icon: 'HandHeart', text: 'Ofrecerme para una tarea que me dé confianza, como acomodar las macetas o cobrar', consequence: 'Ayudas al equipo y, poco a poco, te animas a explicar a las familias cómo se hicieron las macetas.', values: ['Participación', 'Responsabilidad', 'Valentía'], constructive: true },
            { id: 'c', icon: 'Users', text: 'Invitar a un familiar a acompañarme y atender juntos', consequence: 'Tu familia conoce el proyecto y se entusiasma: el próximo año propone un puesto de abono orgánico.', values: ['Participación', 'Vida familiar'], constructive: true },
          ] },
        ),
        S.tf(
          { fase: 'aplicar', areas: ['ef', 'cnt'], cnb: ['ef:3.2.1'], ambito: 'hacer',
            prompt: 'Sembrar y atender la feria bajo el sol cansa. ¿Verdadero o falso sobre la **hidratación y la alimentación** en la actividad física?',
            explain: 'El cuerpo pierde agua al sudar. Una botella reutilizable con agua pura y una fruta son la mejor compañía: hidratan, dan energía y no generan basura.' },
          { statements: [
            { text: 'Conviene tomar agua antes, durante y después de la actividad física.', answer: true },
            { text: 'Solo hay que tomar agua cuando ya tienes mucha sed.', answer: false, why: 'La sed intensa es señal de que ya te falta agua: es mejor beber poco a poco.' },
            { text: 'Una fruta es mejor refacción que una golosina para tener energía.', answer: true },
            { text: 'Las bebidas azucaradas hidratan mejor que el agua pura.', answer: false, why: 'El agua pura hidrata sin azúcar añadido.' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.1.3'], prompt: 'Boleto de salida: Ana **rechaza la pajilla** y pide su refresco en su propio vaso. ¿Qué está haciendo?' },
          { options: [
            { id: 'a', text: 'Preciclar' },
            { id: 'b', text: 'Reciclar', feedback: 'Reciclar es transformar un material usado. Ana evitó que la basura existiera: eso es preciclar.' },
            { id: 'c', text: 'Contaminar', feedback: 'Al contrario: está evitando basura.' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['pyd', 'cnt'], cnb: ['pyd:4.2.1'], prompt: 'Une cada letra del FODA con su significado.' },
          { pairs: [
            { id: 'f', left: 'F', right: 'Algo bueno dentro del grupo' },
            { id: 'o', left: 'O', right: 'Algo bueno que viene de afuera' },
            { id: 'd', left: 'D', right: 'Algo por mejorar dentro del grupo' },
            { id: 'a', left: 'A', right: 'Un peligro que viene de afuera' },
          ] },
        ),
        cierre({ areas: ['cnt', 'pyd'], cnb: ['pyd:4.3.3'] }, ['Distingo preciclar, reutilizar y reciclar', 'Relaciono el crecimiento de la población con el agotamiento de recursos', 'Hago un FODA de un proyecto'],
          ['Llevaré mi botella y mi canasta para evitar desechables', 'Participaré como voluntario en una feria o actividad escolar', 'Tomaré agua pura antes, durante y después de hacer ejercicio']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's26-d3-feudalismo-conquista',
      title: 'Tierra, señores y conquista',
      icon: 'Castle',
      minutes: 15,
      day: 3,
      gancho: '¿De quién es la tierra donde siembra tu comunidad? ¿Siempre ha sido así?',
      objetivos: ['Identificar los elementos y características del sistema feudal', 'Explicar por qué terminó el feudalismo en Europa', 'Evaluar el impacto de la conquista y colonización en los pueblos indígenas', 'Comparar formas de afrontar conflictos', 'Interpretar distintos tipos de texto'],
      resumen: [
        'El feudalismo fue el sistema de la Europa medieval: el rey entregaba tierras (feudos) a los señores a cambio de lealtad; los siervos trabajaban la tierra y pagaban tributos a cambio de protección.',
        'Características: economía agrícola y autosuficiente; poder repartido entre señores; sociedad dividida en estamentos (nobleza, clero y campesinos); la Iglesia orientaba el pensamiento.',
        'El feudalismo se debilitó por el crecimiento del comercio y las ciudades (burgos), el surgimiento de la burguesía, la peste negra y el fortalecimiento de los reyes.',
        'La conquista y colonización de América trajeron epidemias que causaron muchísimas muertes, trabajo forzado (encomienda), pérdida de tierras e imposición de religión e idioma; también esclavizaron a personas africanas. Los pueblos resistieron y conservaron sus idiomas y saberes.',
      ],
      media: {
        id: 's26-d3-feudo', kind: 'image', title: 'Un feudo medieval', aspect: '16:9',
        alt: 'Ilustración de un feudo: castillo en una colina, iglesia, aldea de siervos, campos de cultivo divididos en franjas y un molino.',
        brief: 'Ilustración panorámica tipo libro de historia, vista en perspectiva aérea: castillo de piedra en una colina con murallas; debajo, iglesia con campanario, aldea de casas de madera y paja, campos en franjas con campesinos arando con bueyes, molino de agua, bosque. Etiquetas con líneas: "Castillo del señor feudal", "Iglesia (clero)", "Casas de los siervos", "Campos", "Molino". Sin escenas de violencia. Estilo pintado, colores cálidos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:6.4.1'], ambito: 'conocer', title: 'Los elementos del sistema feudal',
            prompt: 'Hace unos mil años, en la **Edad Media** europea, la tierra era la principal riqueza y definía quién mandaba. Toca cada tarjeta.' },
          { icon: 'Castle', body: 'El feudalismo se basaba en **compromisos personales**: tierra a cambio de lealtad, trabajo a cambio de protección.', reveal: [
            { icon: 'Crown', front: 'Rey', back: 'Entregaba tierras a los nobles a cambio de **lealtad y ayuda militar**.' },
            { icon: 'Castle', front: 'Señor feudal', back: 'Noble dueño de un **feudo**: tierras, castillo y aldeas. Impartía justicia en su territorio.' },
            { icon: 'Church', front: 'Clero', back: 'Obispos, sacerdotes y monjes. La **Iglesia** tenía tierras y orientaba las ideas de la época.' },
            { icon: 'Wheat', front: 'Siervos', back: 'Campesinos que **trabajaban la tierra** del señor, le entregaban parte de la cosecha y no podían irse libremente.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.4.2'], ambito: 'conocer', prompt: 'Clasifica cada característica del feudalismo según su **estructura**.',
            explain: 'Analizar una sociedad por estructuras (económica, política, social e ideológica) ayuda a entenderla completa.' },
          { buckets: [
            { id: 'eco', label: 'Económica', icon: 'Wheat', color: 'var(--area-pyd)' },
            { id: 'pol', label: 'Política', icon: 'Crown', color: 'var(--area-ccss)' },
            { id: 'soc', label: 'Social', icon: 'Users', color: 'var(--area-fc)' },
            { id: 'ide', label: 'Ideológica', icon: 'Church', color: 'var(--area-l1)' },
          ], layout: 'grid2', items: [
            { id: 'c1', text: 'Producción agrícola para el autoconsumo del feudo', bucket: 'eco' },
            { id: 'c2', text: 'Poco comercio y poco uso de monedas', bucket: 'eco' },
            { id: 'c3', text: 'El poder del rey estaba repartido entre muchos señores', bucket: 'pol' },
            { id: 'c4', text: 'Sociedad dividida en estamentos: nobleza, clero y campesinos', bucket: 'soc' },
            { id: 'c5', text: 'Se nacía en un estamento y casi nunca se cambiaba', bucket: 'soc' },
            { id: 'c6', text: 'La religión explicaba el orden del mundo y de la sociedad', bucket: 'ide' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['ccss', 'l1'], cnb: ['ccss:6.4.3'], ambito: 'conocer', prompt: 'Ordena la **cadena de causas** que desarticularon el sistema feudal.',
            explain: 'Con el comercio y las ciudades, el dinero y los burgueses ganaron importancia; la peste redujo la mano de obra y los reyes recuperaron el poder. Así terminó el feudalismo y comenzó la Edad Moderna.' },
          { items: [
            { id: 'k1', text: 'Crece el comercio entre regiones' },
            { id: 'k2', text: 'Surgen ciudades (burgos) donde viven comerciantes y artesanos' },
            { id: 'k3', text: 'Aparece la burguesía, que se enriquece con dinero y no con tierras' },
            { id: 'k4', text: 'La peste negra reduce la población y faltan siervos' },
            { id: 'k5', text: 'Los reyes, apoyados por la burguesía, fortalecen su poder sobre los señores' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.reading(
          { fase: 'construir', areas: ['ccss', 'l1', 'fc'], cnb: ['ccss:6.4.6'], ambito: 'conocer', prompt: 'Lee el texto y responde.',
            media: { id: 's26-d3-conquista', kind: 'diagram', title: 'Antes y después de 1524', aspect: '16:9',
              alt: 'Línea de tiempo ilustrada: ciudades mayas con milpas y mercados; llegada de barcos y caballos; encomiendas y templos coloniales; y hoy, comunidades que hablan sus idiomas.',
              brief: 'Línea de tiempo horizontal con 4 viñetas: (1) "Antes": ciudad maya del altiplano con mercado, milpa y escribas; (2) "1524": llegada de soldados españoles con caballos y un barco al fondo (sin combate ni sangre); (3) "Colonia": campesinos indígenas trabajando tierras ajenas, iglesia colonial, un símbolo de enfermedad (virus estilizado) con flecha hacia abajo sobre la población; personas africanas esclavizadas en una plantación costera, representadas con dignidad; (4) "Hoy": niñas y niños con trajes de distintos pueblos, bocadillos con saludos en idiomas mayas, garífuna y xinka. Tono respetuoso, sin violencia explícita.' } },
          { genre: 'Texto informativo', heading: 'El impacto de la conquista', passage:
            'A partir de 1492 llegaron a América expediciones europeas. En 1524 comenzó la conquista del territorio que hoy es Guatemala. Los pueblos mayas resistieron, pero fueron sometidos.\n\nLa **consecuencia más grave** fueron las **epidemias**, como la viruela, contra las que la población no tenía defensas: murieron muchísimas personas. Además, con la **encomienda**, los pueblos indígenas debían pagar tributos y trabajar para los colonizadores. Perdieron muchas de sus **tierras** y se les impusieron la religión católica y el idioma español.\n\nLos colonizadores también trajeron a personas **africanas esclavizadas** para trabajar en plantaciones y minas, lo que afectó a pueblos de otro continente.\n\nA pesar de todo, los pueblos originarios **conservaron** muchos saberes, como el calendario, los tejidos, la medicina natural y sus idiomas. Hoy en Guatemala se hablan 22 idiomas mayas, además del xinka, el garífuna y el español.',
            questions: [
              { q: 'Según el texto, ¿cuál fue la consecuencia más grave de la conquista para la población indígena?', options: [
                { id: 'a', text: 'Las epidemias que causaron muchísimas muertes' },
                { id: 'b', text: 'La construcción de iglesias' },
                { id: 'c', text: 'El comercio con Europa' },
              ], correct: 'a' },
              { q: '¿Qué era la encomienda?', options: [
                { id: 'a', text: 'Un sistema en el que los indígenas pagaban tributos y trabajaban para los colonizadores' },
                { id: 'b', text: 'Una escuela para los pueblos mayas' },
                { id: 'c', text: 'Un tratado de paz entre iguales' },
              ], correct: 'a' },
              { q: '¿Qué muestra el último párrafo sobre los pueblos originarios?', options: [
                { id: 'a', text: 'Que desaparecieron por completo' },
                { id: 'b', text: 'Que resistieron y conservaron muchos saberes e idiomas' },
                { id: 'c', text: 'Que olvidaron su cultura' },
              ], correct: 'b', why: 'La cultura maya, garífuna y xinka sigue viva; conocer la historia ayuda a valorarla y a convivir con respeto.' },
            ] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['fc', 'ccss'], cnb: ['fc:4.3.2'], ambito: 'convivir',
            prompt: 'Distintas culturas han afrontado los conflictos de maneras diferentes. Une cada forma con su **consecuencia** más probable.',
            explain: 'La historia muestra que la fuerza y la imposición dejan heridas por generaciones; el diálogo, la mediación y el consenso construyen acuerdos duraderos.' },
          { leftTitle: 'Forma de afrontar el conflicto', rightTitle: 'Consecuencia', pairs: [
            { id: 'fue', left: 'Guerra e imposición por la fuerza (como en la conquista)', leftIcon: 'Sword', right: 'Muertes, pérdida de tierras y resentimiento durante siglos' },
            { id: 'med', left: 'Mediación de autoridades comunitarias, como el consejo de ancianos', leftIcon: 'Users', right: 'Acuerdo que repara el daño y mantiene la armonía de la comunidad' },
            { id: 'dia', left: 'Diálogo y negociación entre las partes', leftIcon: 'MessagesSquare', right: 'Solución en la que ambas partes ceden y ganan algo' },
            { id: 'evi', left: 'Ignorar el problema', leftIcon: 'EyeOff', right: 'El conflicto crece y aparece más adelante con más fuerza' },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['l2', 'ccss'], cnb: ['l2:5.2.5'], ambito: 'conocer',
            prompt: 'La historia también se cuenta con distintos **tipos de texto**. Clasifica cada fragmento.',
            hint: 'La fábula tiene animales y moraleja; la leyenda mezcla lo real con lo sobrenatural; la crónica narra hechos en orden de tiempo; la biografía cuenta la vida de una persona.',
            explain: 'Cada tipo de texto usa un lenguaje distinto: la leyenda y la fábula usan más lenguaje figurado; la crónica y la biografía, un lenguaje más cotidiano y fechas.' },
          { buckets: [
            { id: 'fab', label: 'Fábula', icon: 'Bird', color: 'var(--area-l2)' },
            { id: 'ley', label: 'Leyenda', icon: 'Moon', color: 'var(--area-art)' },
            { id: 'cro', label: 'Crónica', icon: 'Clock', color: 'var(--area-ccss)' },
            { id: 'bio', label: 'Biografía', icon: 'User', color: 'var(--area-fc)' },
          ], layout: 'grid2', items: [
            { id: 't1', text: '"La liebre se burló de la tortuga… Moraleja: la constancia vence a la prisa."', bucket: 'fab' },
            { id: 't2', text: '"Dicen que en las noches de luna el Sombrerón recorre los caminos con su guitarra…"', bucket: 'ley' },
            { id: 't3', text: '"El lunes llegaron los soldados; el martes cruzaron el río; el miércoles…"', bucket: 'cro' },
            { id: 't4', text: '"Nació en 1899 en la Ciudad de Guatemala y llegó a ser un gran escritor…"', bucket: 'bio' },
          ] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.4.1', 'ccss:6.4.2', 'ccss:6.4.3'], prompt: 'Boleto de salida: ¿verdadero o falso?' },
          { statements: [
            { text: 'En el feudalismo, los siervos trabajaban las tierras del señor feudal.', answer: true },
            { text: 'La economía feudal se basaba en grandes fábricas.', answer: false, why: 'Era una economía agrícola; las fábricas llegaron siglos después.' },
            { text: 'El crecimiento del comercio y de las ciudades debilitó el feudalismo.', answer: true },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss', 'fc'], cnb: ['ccss:6.4.6', 'fc:4.3.2'], prompt: '¿Cuál fue un **impacto** de la colonización en los pueblos indígenas de América?' },
          { options: [
            { id: 'a', text: 'Pérdida de tierras y trabajo forzado mediante la encomienda' },
            { id: 'b', text: 'Aumento de la población indígena gracias a las nuevas enfermedades', feedback: 'Fue al revés: las epidemias causaron muchísimas muertes.' },
            { id: 'c', text: 'Todos los idiomas mayas desaparecieron', feedback: 'Los idiomas mayas se conservaron: hoy se hablan 22 en Guatemala.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['ccss', 'fc'], cnb: ['ccss:6.4.6'] }, ['Explico los elementos y características del sistema feudal', 'Evalúo el impacto de la conquista en los pueblos indígenas', 'Reconozco que el diálogo resuelve mejor los conflictos que la fuerza'],
          ['Preguntaré a mis abuelos cómo ha cambiado la tenencia de la tierra en mi comunidad', 'Valoraré los idiomas y saberes de los pueblos originarios', 'Buscaré dialogar cuando tenga un conflicto']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's26-d4-festival-paz',
      title: 'Festival de palabras por la paz',
      icon: 'Feather',
      minutes: 15,
      day: 4,
      gancho: '¿En qué idioma te habla tu abuela cuando te consiente? ¿Cómo suena un poema en ese idioma?',
      objetivos: ['Usar metáforas, comparaciones y personificaciones', 'Identificar la diversidad de idiomas de Guatemala: materno, segundo y tercero', 'Narrar eventos en orden con personajes, tiempo y narrador', 'Valorar la poesía y la oratoria, y participar en festivales', 'Proponer acciones para una cultura de paz respetando las diferencias'],
      resumen: [
        'El lenguaje figurado dice las cosas de forma creativa: comparación o símil ("fuerte como un roble"), metáfora ("la ladera es una alfombra verde"), personificación ("el río canta") e hipérbole ("te lo dije mil veces").',
        'En Guatemala se hablan 25 idiomas: 22 mayas, xinka, garífuna y español. El idioma materno es el primero que aprendes; el segundo y el tercero se aprenden después.',
        'Una narración tiene personajes, sucesos, tiempo, lugar y narrador; al narrar se respeta el orden de los hechos.',
        'La poesía y la oratoria expresan pensamientos, sentimientos y emociones. Una cultura de paz se construye con diálogo, respeto a las diferencias y propuestas concretas.',
      ],
      media: {
        id: 's26-d4-festival', kind: 'video', title: 'Voces del festival', aspect: '16:9', duration: 60,
        alt: 'Escenario escolar decorado con flores y papel picado donde niñas y niños recitan poemas en distintos idiomas mientras el público aplaude.',
        brief: 'Video de 60 s de un festival escolar de poesía y oratoria: escenario sencillo con pino, flores y papel de china. Participan (personajes actuados, no reales identificables) una niña que recita en un idioma maya, un niño garífuna, una niña que habla español y un niño en silla de ruedas que declama. Subtítulos en español con la traducción aproximada de cada verso (usar textos originales escritos por el equipo, sin derechos de autor). Planos del público aplaudiendo. Audio claro de voces; sin música que tape las palabras.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1', 'art'], cnb: ['l1:6.1.2', 'art:4.1.1'], ambito: 'convivir', title: 'Un país de muchas voces',
            prompt: 'En el festival, cada estudiante puede participar **en su idioma materno**. Toca cada tarjeta para conocer la diversidad lingüística de Guatemala.' },
          { icon: 'Languages', body: 'En Guatemala se hablan **25 idiomas**: 22 mayas, el **xinka**, el **garífuna** y el **español**.', reveal: [
            { icon: 'Home', front: 'Idioma materno (L1)', back: 'El **primer idioma** que aprendes en tu familia. Puede ser k\'iche\', q\'eqchi\', garífuna, español u otro.' },
            { icon: 'School', front: 'Segundo idioma (L2)', back: 'El que aprendes después, para comunicarte con más personas del país.' },
            { icon: 'Globe', front: 'Tercer idioma (L3)', back: 'Un idioma extranjero, como el **inglés**, que te conecta con otras partes del mundo.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['l1', 'l2'], cnb: ['l1:6.1.2'], ambito: 'conocer', prompt: 'Une a cada estudiante con su **tercer idioma**, según lo que cuenta.',
            explain: 'El orden depende de cada persona: para alguien el español es el idioma materno; para otra persona es el segundo.' },
          { leftTitle: 'Estudiante', rightTitle: 'Su tercer idioma (L3)', pairs: [
            { id: 'ixc', left: 'Ixchel: aprendió k\'iche\' en casa, luego español y ahora estudia inglés', leftIcon: 'User', right: 'Inglés' },
            { id: 'mar', left: 'Marvin: aprendió garífuna en casa, luego español y ahora aprende q\'eqchi\' con sus vecinos', leftIcon: 'User', right: 'Q\'eqchi\'' },
            { id: 'lui', left: 'Luisa: aprendió español en casa, luego kaqchikel en la escuela y ahora francés', leftIcon: 'User', right: 'Francés' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['l1', 'art'], cnb: ['l1:5.3.1'], ambito: 'conocer', prompt: 'Une cada verso del poema colectivo con la **figura literaria** que usa.',
            hint: 'Comparación usa "como"; metáfora dice que algo ES otra cosa; personificación da acciones humanas a algo que no es persona; hipérbole exagera.',
            explain: 'El lenguaje figurado no se lee "al pie de la letra": sirve para expresar emociones y crear imágenes en la mente.' },
          { leftTitle: 'Verso', rightTitle: 'Figura', pairs: [
            { id: 'sim', left: '"Mi abuela es fuerte como un roble"', leftIcon: 'TreeDeciduous', right: 'Comparación (símil)' },
            { id: 'met', left: '"La ladera es una alfombra verde"', leftIcon: 'Mountain', right: 'Metáfora' },
            { id: 'per', left: '"El río canta entre las piedras"', leftIcon: 'Waves', right: 'Personificación' },
            { id: 'hip', left: '"Subimos la ladera un millón de veces"', leftIcon: 'Sparkles', right: 'Hipérbole' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['l1', 'art'], cnb: ['l1:6.2.3'], ambito: 'hacer', prompt: 'Ixchel describe el **día del festival**. Ordena los eventos con fidelidad a la secuencia.',
            explain: 'Las palabras de tiempo (por la mañana, después, al mediodía, por la tarde, al final) ayudan a mantener el orden de los hechos.' },
          { items: [
            { id: 'v1', text: 'Por la mañana decoramos el escenario con pino y flores.' },
            { id: 'v2', text: 'Después ensayamos los poemas en nuestros idiomas.' },
            { id: 'v3', text: 'Al mediodía llegaron las familias y los ancianos.' },
            { id: 'v4', text: 'Por la tarde recitamos y dimos nuestros discursos por la paz.' },
            { id: 'v5', text: 'Al final, sembramos juntos un árbol de la paz.' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.fill(
          { fase: 'construir', areas: ['l2', 'l1'], cnb: ['l2:5.2.3'], ambito: 'conocer', prompt: 'Lee el inicio del cuento del festival: _"Un sábado de mayo, Ixchel y Marvin ensayaron sus poemas y, por la tarde, recitaron frente a toda la comunidad", contó la abuela de Ixchel._ Completa la explicación de los **elementos de la narración**.',
            explain: 'Personajes (quiénes), sucesos (qué pasa), tiempo y lugar (cuándo y dónde) y narrador (quién cuenta) forman cualquier narración.' },
          { text: 'En el cuento, Ixchel y Marvin son los [[personajes]]. Lo que les ocurre, como ensayar y recitar, son los [[sucesos]]. "Un sábado de mayo" indica el [[tiempo]]. Quien cuenta la historia es el [[narrador]].',
            distractors: ['título', 'rima'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l2', 'l1', 'art'], cnb: ['l2:5.2.4', 'l1:5.3.1', 'art:4.1.2'], ambito: 'hacer',
            prompt: 'Escribe una **narración breve** (como autora o autor) del día en que la comunidad sembró la ladera. Cuenta los hechos **en orden** y usa **al menos dos figuras** de lenguaje figurado.',
            hint: 'Empieza con "Aquel sábado…". Puedes decir que los arbolitos eran "soldaditos verdes" (metáfora) o que "la tierra respiraba" (personificación).' },
          { minWords: 50, placeholder: 'Aquel sábado…',
            model: 'Aquel sábado el sol despertó temprano, como si también quisiera sembrar. Primero, las familias subimos la ladera con los arbolitos, que eran pequeños soldaditos verdes. Luego medimos tres metros entre cada hoyo. Después, mi abuela plantó el primero y dijo unas palabras en k\'iche\'. Al final, la tierra respiraba tranquila y nosotros regresamos cansados pero felices.',
            rubric: ['Los hechos están en orden (primero, luego, después, al final)', 'Hay personajes, tiempo y lugar claros', 'Usa al menos dos figuras de lenguaje figurado', 'Se nota el punto de vista de quien narra'] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['ef', 'fc', 'art'], cnb: ['ef:4.1.2', 'fc:4.3.1', 'art:4.1.1'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
          { scene: { icon: 'Mic', text: 'En el ensayo, **Marvin** recita en garífuna y algunos se ríen porque "no se le entiende". Él dice que mejor ya no va a participar.' }, options: [
            { id: 'a', icon: 'EyeOff', text: 'Reírme también; es solo una broma', consequence: 'Marvin se retira del festival y el grupo pierde una voz valiosa. La burla hiere, aunque parezca juego.', values: ['Burla'], constructive: false },
            { id: 'b', icon: 'HeartHandshake', text: 'Pedirle a Marvin que nos enseñe qué significa su poema y proponer poner la traducción en un cartel', consequence: 'Todos entienden el poema y lo aplauden. Marvin se siente orgulloso de su idioma.', values: ['Respeto', 'Interculturalidad', 'Paz'], constructive: true },
            { id: 'c', icon: 'Handshake', text: 'Proponer un acuerdo del grupo: "En este festival aplaudimos todos los idiomas"', consequence: 'El grupo firma el acuerdo y lo lee al inicio del festival. Nadie vuelve a burlarse.', values: ['Cultura de paz', 'Normas', 'Aceptación'], constructive: true },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.3.1'], prompt: 'Boleto de salida: en el verso "**La luna nos mira desde el cerro**", ¿qué figura se usa?' },
          { options: [
            { id: 'a', text: 'Personificación' },
            { id: 'b', text: 'Comparación', feedback: 'No usa "como": no es comparación.' },
            { id: 'c', text: 'Hipérbole', feedback: 'No exagera una cantidad; da a la luna una acción humana (mirar).' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['l1', 'l2', 'fc'], cnb: ['l1:6.1.2', 'l2:5.2.3', 'fc:4.3.1'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'En Guatemala se hablan 22 idiomas mayas, además del xinka, el garífuna y el español.', answer: true },
            { text: 'El idioma materno siempre es el español.', answer: false, why: 'El idioma materno es el primero que aprendes en casa: puede ser un idioma maya, el garífuna, el xinka o el español.' },
            { text: 'El narrador es quien cuenta la historia.', answer: true },
            { text: 'Burlarse del idioma de alguien ayuda a construir la paz.', answer: false, why: 'La paz se construye con respeto y aceptación de las diferencias.' },
          ] },
        ),
        cierre({ areas: ['art', 'fc', 'ef'], cnb: ['art:4.1.2', 'ef:4.1.2'] }, ['Uso lenguaje figurado para expresar emociones', 'Reconozco y valoro la diversidad de idiomas de Guatemala', 'Propongo acciones para una cultura de paz'],
          ['Participaré en un festival o acto escolar con un poema o discurso', 'Aprenderé a saludar en un idioma de Guatemala distinto al mío', 'Defenderé con respeto a quien sea objeto de burlas por ser diferente']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's26-d5-reto',
      title: 'Reto de la semana 26',
      icon: 'Trophy',
      minutes: 13,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Guardián de las raíces" (70 % o más)'],
      resumen: ['Superé el reto de la semana 26: reforestación, reciclaje, historia, lenguaje figurado y cultura de paz.'],
      media: {
        id: 's26-d5-reto', kind: 'image', title: 'Medalla Guardián de las raíces', aspect: '1:1',
        alt: 'Medalla dorada con un árbol cuyas raíces forman un círculo alrededor de una pluma.',
        brief: 'Ilustración de medalla circular dorada: al centro un árbol frondoso cuyas raíces se extienden formando el borde circular; entre las raíces, una pluma de escribir pequeña y una hoja con el símbolo de reciclaje. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.3.3'], prompt: 'En la época seca, ¿cómo ayuda el bosque a que los nacimientos sigan dando agua?' },
          { options: [{ id: 'a', text: 'Porque en la época lluviosa el agua se infiltró en el suelo y sale poco a poco' }, { id: 'b', text: 'Porque los árboles fabrican agua de la nada' }, { id: 'c', text: 'Porque el bosque evita que llueva' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.2.3', 'cnt:6.1.3'], prompt: 'Clasifica.' },
          { buckets: [{ id: 'r', label: 'Zona de riesgo', icon: 'AlertTriangle' }, { id: 'p', label: 'Preciclar', icon: 'ShoppingBasket' }],
            items: [{ id: 'a', text: 'Orilla de un río que se desborda', bucket: 'r' }, { id: 'b', text: 'Ladera deforestada', bucket: 'r' }, { id: 'c', text: 'Comprar sin empaques', bucket: 'p' }, { id: 'd', text: 'Rechazar vasos desechables', bucket: 'p' }] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:7.1.3'], prompt: '¿Cuántos centímetros hay en 3.5 m?' },
          { answer: 350, unit: 'cm' }),
        S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:7.1.2'], prompt: 'Dos estudiantes miden la misma mesa y obtienen 1.20 m y 1.25 m. ¿Cuál es una causa posible de la diferencia?' },
          { options: [{ id: 'a', text: 'Uno no empezó a medir desde el cero de la cinta' }, { id: 'b', text: 'La mesa cambió de tamaño' }, { id: 'c', text: 'Las mesas no se pueden medir' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.4.1', 'ccss:6.4.2'], prompt: 'Une cada grupo del feudalismo con su papel.' },
          { pairs: [{ id: 'a', left: 'Señor feudal', right: 'Dueño del feudo y del castillo' }, { id: 'b', left: 'Siervos', right: 'Trabajaban la tierra y pagaban tributos' }, { id: 'c', left: 'Clero', right: 'Orientaba las ideas religiosas' }] }),
        S.tf({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.4.3', 'ccss:6.4.6'], prompt: '¿Verdadero o falso?' },
          { statements: [{ text: 'La peste negra contribuyó a debilitar el sistema feudal.', answer: true }, { text: 'La conquista no tuvo consecuencias para los pueblos indígenas.', answer: false }, { text: 'Con la encomienda, los indígenas debían trabajar y pagar tributos.', answer: true }] }),
        S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:4.2.1'], prompt: 'En el FODA del puesto de la feria, "Hay otro puesto que vende macetas más baratas" es…' },
          { options: [{ id: 'a', text: 'Una amenaza' }, { id: 'b', text: 'Una fortaleza' }, { id: 'c', text: 'Una debilidad' }], correct: ['a'] }),
        S.highlight({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.3.1'], prompt: 'Toca los dos versos que contienen una **comparación** (usan "como").' },
          { target: 'comparaciones', text: 'El viento sopla fuerte. {Tu risa es como el agua del nacimiento.} La tarde se fue callada. {Corre ligero como un venado.}' }),
        S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.1.3', 'l3:4.2.1'], prompt: 'Describe the school garden. Completa con el **color** correcto.' },
          { text: 'The leaves of the tree are [[green]]. The roots are [[brown]]. The flowers of the squash plant are [[yellow]].', distractors: ['potato', 'onion'] }),
        S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.3.1', 'fc:4.3.2'], prompt: '¿Qué propuesta construye una cultura de paz en la escuela?' },
          { options: [{ id: 'a', text: 'Un rincón de diálogo donde dos compañeros en conflicto hablan con un mediador' }, { id: 'b', text: 'Resolver los problemas a empujones' }, { id: 'c', text: 'No hablarle nunca más a quien te molestó' }], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 3 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.4.3'], prompt: 'Si la población de una aldea se duplica, ¿qué pasa con la demanda de agua?' },
      { options: [{ id: 'a', text: 'Aumenta' }, { id: 'b', text: 'Disminuye' }, { id: 'c', text: 'Desaparece' }], correct: ['a'] }),
    S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.1.3'], prompt: '¿Reutilizar o reciclar?' },
      { buckets: [{ id: 'ru', label: 'Reutilizar', icon: 'RefreshCw' }, { id: 'rc', label: 'Reciclar', icon: 'Factory' }],
        items: [{ id: 'a', text: 'Usar un bote de helado como lapicero', bucket: 'ru' }, { id: 'b', text: 'Fundir vidrio para hacer botellas nuevas', bucket: 'rc' }, { id: 'c', text: 'Escribir en el otro lado de una hoja', bucket: 'ru' }] }),
    S.fill({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:7.1.3'], prompt: 'Completa.' },
      { text: '2 km = [[2000|2,000]] m\n5 m = [[500]] cm', distractors: ['200', '50'] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:7.1.2'], prompt: '¿Qué ayuda a reducir los errores al medir?' },
      { options: [{ id: 'a', text: 'Medir dos veces y mirar la marca de frente' }, { id: 'b', text: 'Medir con la cinta doblada' }, { id: 'c', text: 'Adivinar la medida' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.4.2'], prompt: 'En la sociedad feudal, ¿qué eran los estamentos?' },
      { options: [{ id: 'a', text: 'Grupos sociales cerrados: nobleza, clero y campesinos' }, { id: 'b', text: 'Partidos políticos' }, { id: 'c', text: 'Mercados de las ciudades' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.4.6'], prompt: '¿Por qué las epidemias afectaron tanto a los pueblos de América durante la conquista?' },
      { options: [{ id: 'a', text: 'Porque la población no tenía defensas contra enfermedades traídas de Europa' }, { id: 'b', text: 'Porque no había comida' }, { id: 'c', text: 'Porque hacía mucho frío' }], correct: ['a'] }),
    S.match({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.2.5', 'l2:5.2.3'], prompt: 'Une cada tipo de texto con su rasgo.' },
      { pairs: [{ id: 'a', left: 'Fábula', right: 'Animales que hablan y moraleja' }, { id: 'b', left: 'Leyenda', right: 'Hechos reales mezclados con lo sobrenatural' }, { id: 'c', left: 'Biografía', right: 'La vida de una persona real' }] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:6.1.2'], prompt: 'Para una niña q\'eqchi\' que aprendió primero q\'eqchi\' y después español, el español es su…' },
      { options: [{ id: 'a', text: 'Segundo idioma' }, { id: 'b', text: 'Idioma materno' }, { id: 'c', text: 'Tercer idioma' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:4.2.1'], prompt: 'En un FODA, "Nuestro equipo es muy puntual y organizado" es…' },
      { options: [{ id: 'a', text: 'Una fortaleza' }, { id: 'b', text: 'Una amenaza' }, { id: 'c', text: 'Una oportunidad' }], correct: ['a'] }),
    S.tf({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:3.2.1', 'ef:4.1.2'], prompt: '¿Verdadero o falso?' },
      { statements: [{ text: 'Es importante tomar agua durante la actividad física.', answer: true }, { text: 'En un juego hay que excluir a quien juega distinto.', answer: false }] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:4.1.2'], prompt: '¿Para qué sirven la poesía y la oratoria?' },
      { options: [{ id: 'a', text: 'Para expresar pensamientos, sentimientos y emociones' }, { id: 'b', text: 'Solo para aprender a sumar' }, { id: 'c', text: 'Para medir distancias' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.3.2'], prompt: '¿Qué consecuencia suele tener resolver un conflicto con la fuerza?' },
      { options: [{ id: 'a', text: 'Heridas y resentimiento que duran mucho tiempo' }, { id: 'b', text: 'Amistad inmediata' }, { id: 'c', text: 'Ninguna' }], correct: ['a'] }),
  ],
});
