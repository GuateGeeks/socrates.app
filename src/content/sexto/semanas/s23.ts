import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 23 · Unidad 3 "Valorando nuestra convivencia"
 * Tema generador: Una campaña para que nadie se quede atrás
 * Glándulas (hipo e hiper), funciones de los aparatos reproductores, fecundación y embarazo, VIH sin discriminación ·
 * injertos, transportes y comunicaciones del mundo, tratados, multiplicación de decimales, futuro en inglés ·
 * grupos excluidos, Constitución y convenios, discapacidad, cambios en la vida cotidiana, técnicas de investigación ·
 * publicidad, apoyos gráficos, proporción y movimiento, cuadros gimnásticos y ensambles, división de decimales.
 */
export default semana({
  id: 's23',
  unidad: 3,
  semana: 23,
  kind: 'aprendizaje',
  temaGenerador: 'Una campaña para que nadie se quede atrás',
  title: 'Una campaña para que nadie se quede atrás',
  subtitle: 'Salud sin prejuicios, conexiones con el mundo e inclusión',
  icon: 'Megaphone',
  color: 'var(--area-fc)',
  contexto: 'En una escuela de Quetzaltenango, una compañera usa silla de ruedas y el tío de un estudiante vive con VIH. Algunas personas los tratan distinto por desconocimiento. El gobierno escolar decidió lanzar la campaña "Nadie se queda atrás": investigará con encuestas, estudiará lo que dicen la ciencia y la Constitución, diseñará afiches y anuncios y cerrará con un cuadro gimnástico y un ensamble musical. Esta semana aprenderás que la información correcta y el arte pueden vencer los prejuicios.',
  ejes: ['equidad', 'vida-ciudadana', 'valores', 'tecnologia', 'vida-familiar'],
  media: {
    id: 's23-portada', kind: 'video', title: 'Nadie se queda atrás', aspect: '16:9', duration: 60,
    alt: 'Estudiantes pegan afiches coloridos en el corredor de una escuela, una niña en silla de ruedas dirige un ensamble de marimba y el grado presenta un cuadro gimnástico con cintas.',
    brief: 'Video (o animación 2D) de 60 s en una escuela de Quetzaltenango. Escenas: (1) una comisión aplica una encuesta a vecinos con tablero y lápiz; (2) estudiantes diseñan afiches con letras grandes y figuras en movimiento; (3) una niña en silla de ruedas dirige un ensamble de marimba, tun y chinchines; (4) cuadro gimnástico con cintas y aros al ritmo de la música, con estudiantes de distintos pueblos y capacidades. Texto final: "La información y el arte vencen los prejuicios". Sin personas reales identificables ni marcas.',
  },
  badge: { id: 'medalla-s23', name: 'Voz de la inclusión', icon: 'Megaphone', desc: 'Completaste la semana 23 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's23-d1-cuerpo-equilibrio',
      title: 'Un cuerpo en equilibrio, información sin prejuicios',
      icon: 'HeartPulse',
      minutes: 15,
      day: 1,
      gancho: '¿Por qué una persona puede sentir mucho frío y cansancio mientras otra, en el mismo lugar, suda y tiene el corazón acelerado?',
      objetivos: ['Aplicar los términos HIPO e HIPER al funcionamiento de las glándulas', 'Diferenciar las funciones de los aparatos reproductores masculino y femenino', 'Relacionar la fecundación con el embarazo', 'Comparar información de fuentes y juzgar la discriminación hacia personas con VIH'],
      resumen: [
        'HIPO significa "por debajo" y HIPER "por encima". Hipotiroidismo: la tiroides produce poca hormona (cansancio, frío, aumento de peso). Hipertiroidismo: produce demasiada (nerviosismo, pérdida de peso, corazón acelerado).',
        'Aparato reproductor masculino: los testículos producen espermatozoides y testosterona. Femenino: los ovarios producen óvulos y hormonas; en el útero se desarrolla el bebé.',
        'La fecundación es la unión de un espermatozoide con un óvulo en las trompas de Falopio. El cigoto se divide y, ya como embrión, se implanta en el útero: comienza el embarazo, que dura unos 9 meses (se cuentan unas 40 semanas).',
        'El VIH no se transmite por abrazos, besos en la mejilla, compartir platos ni por mosquitos. Discriminar a las personas que viven con VIH es injusto y la ley de Guatemala lo prohíbe.',
      ],
      media: {
        id: 's23-d1-glandulas', kind: 'diagram', title: 'Glándulas en equilibrio', aspect: '3:4',
        alt: 'Silueta humana con la hipófisis, la tiroides y el páncreas señalados, y una balanza a la par de cada una con los rótulos hipo e hiper.',
        brief: 'Diagrama vertical de una silueta humana neutra (sin rasgos sexuales) con tres glándulas marcadas: hipófisis (cerebro), tiroides (cuello, forma de mariposa) y páncreas (abdomen). Junto a cada una, una balanza: platillo izquierdo "HIPO (poca hormona)", platillo derecho "HIPER (demasiada hormona)" y centro "Equilibrio". Ejemplos breves: tiroides → hipotiroidismo/hipertiroidismo; páncreas → hipoglucemia/hiperglucemia; hipófisis → crecimiento. Estilo libro de texto, colores suaves.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'l2'], cnb: ['cnt:2.3.4'], ambito: 'conocer', title: 'HIPO e HIPER',
            prompt: 'Ya conoces las **glándulas** y sus **hormonas**. Cuando una glándula produce **menos** o **más** hormona de la necesaria, el cuerpo pierde su equilibrio. Para nombrarlo usamos dos prefijos. Toca cada tarjeta.' },
          { icon: 'Scale', body: '**HIPO-** significa "por debajo" (poca hormona). **HIPER-** significa "por encima" (demasiada hormona).', reveal: [
            { icon: 'Snowflake', front: 'Hipotiroidismo', back: 'La tiroides produce **poca** hormona: cansancio, frío, aumento de peso, piel seca. En la niñez puede frenar el crecimiento.' },
            { icon: 'Flame', front: 'Hipertiroidismo', back: 'La tiroides produce **demasiada** hormona: nerviosismo, calor, pérdida de peso, corazón acelerado.' },
            { icon: 'Droplet', front: 'Hipoglucemia', back: 'Azúcar **baja** en la sangre: mareo, temblor, sudor frío. Se atiende comiendo algo dulce y buscando ayuda.' },
            { icon: 'Droplets', front: 'Hiperglucemia', back: 'Azúcar **alta** en la sangre, porque el páncreas no produce suficiente insulina o no funciona bien. Es lo que ocurre en la **diabetes**.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.4'], ambito: 'conocer',
            prompt: 'Clasifica cada situación: ¿la glándula funciona en **HIPO** (poca hormona) o en **HIPER** (demasiada hormona)?',
            hint: 'Si el cuerpo se "apaga" (frío, cansancio, lentitud) suele ser hipo; si se "acelera", suele ser hiper.',
            explain: 'Estos desequilibrios los diagnostica un médico con análisis de sangre y tienen tratamiento. Nunca hay que automedicarse.' },
          { buckets: [
            { id: 'hipo', label: 'HIPO (poca hormona)', icon: 'Minus', color: 'var(--area-l1)' },
            { id: 'hiper', label: 'HIPER (demasiada hormona)', icon: 'Plus', color: 'var(--area-cnt)' },
          ], items: [
            { id: 'g1', text: 'Tiroides lenta: siente frío y mucho cansancio', bucket: 'hipo' },
            { id: 'g2', text: 'Tiroides acelerada: bajó de peso y está muy nervioso', bucket: 'hiper' },
            { id: 'g3', text: 'Hipófisis con poca hormona del crecimiento: crece muy poco', bucket: 'hipo' },
            { id: 'g4', text: 'Hipófisis con exceso de hormona del crecimiento: crece muchísimo', bucket: 'hiper' },
            { id: 'g5', text: 'Poca insulina: el azúcar en la sangre sube (diabetes)', bucket: 'hipo', feedback: 'Cuidado: el páncreas produce poca insulina (hipo) y por eso el azúcar en la sangre sube (hiperglucemia). Se clasifica por la hormona.' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:3.1.3', 'cnt:3.2.3'], ambito: 'conocer', title: 'Funciones de los aparatos reproductores',
            prompt: 'Los aparatos reproductores masculino y femenino tienen **funciones distintas que se complementan** para que pueda formarse una nueva vida. Es un tema científico y se habla con respeto. Si tienes dudas, conversa con tu familia o tu docente.',
            media: { id: 's23-d1-reproductor', kind: 'diagram', title: 'Funciones que se complementan', aspect: '16:9',
              alt: 'Dos esquemas anatómicos simples, uno del aparato reproductor masculino y otro del femenino, con flechas que indican la función de cada órgano.',
              brief: 'Diagrama educativo en dos columnas, estilo libro de texto de ciencias, con cortes anatómicos esquemáticos (no realistas) y colores planos suaves. Columna MASCULINO: testículos ("producen espermatozoides y testosterona"), conductos ("transportan los espermatozoides"), pene ("conduce los espermatozoides y la orina"). Columna FEMENINO: ovarios ("producen óvulos y hormonas"), trompas de Falopio ("conducen el óvulo; aquí ocurre la fecundación"), útero ("aquí se desarrolla el bebé"), vagina ("canal de parto"). Sin cuerpos completos ni rasgos de personas.' } },
          { icon: 'Dna', body: 'Cada aparato produce **células sexuales** y **hormonas**. Las células sexuales llevan la mitad de los cromosomas.', reveal: [
            { icon: 'CircleDot', front: 'Testículos', back: 'Producen **espermatozoides** y la hormona **testosterona**.' },
            { icon: 'Circle', front: 'Ovarios', back: 'Producen **óvulos** y las hormonas **estrógeno** y **progesterona**. Cada mes, aproximadamente, liberan un óvulo.' },
            { icon: 'Route', front: 'Trompas de Falopio', back: 'Conducen el óvulo hacia el útero. Aquí puede ocurrir la **fecundación**.' },
            { icon: 'Home', front: 'Útero', back: 'Órgano donde se **implanta** y se **desarrolla** el embrión durante el embarazo.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.1.3'], ambito: 'conocer',
            prompt: 'Une cada órgano con su **función**.',
            explain: 'Las funciones son distintas pero complementarias: sin espermatozoide ni óvulo no hay fecundación, y sin útero no hay embarazo.' },
          { leftTitle: 'Órgano', rightTitle: 'Función', pairs: [
            { id: 'r1', left: 'Testículos', right: 'Producen espermatozoides y testosterona' },
            { id: 'r2', left: 'Ovarios', right: 'Producen óvulos, estrógeno y progesterona' },
            { id: 'r3', left: 'Útero', right: 'Allí se desarrolla el bebé durante el embarazo' },
            { id: 'r4', left: 'Trompas de Falopio', right: 'Conducen el óvulo; allí ocurre la fecundación' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.2.3'], ambito: 'conocer',
            prompt: 'Ordena lo que ocurre desde la **fecundación** hasta el **nacimiento**.',
            explain: 'El embarazo comienza cuando el embrión se implanta en el útero y dura cerca de 9 meses (los médicos cuentan unas 40 semanas). Es una etapa que requiere cuidados de salud y responsabilidad de adultos.' },
          { items: [
            { id: 'e1', text: 'El ovario libera un óvulo' },
            { id: 'e2', text: 'Un espermatozoide se une al óvulo en la trompa (fecundación)' },
            { id: 'e3', text: 'El cigoto se divide muchas veces mientras viaja al útero' },
            { id: 'e4', text: 'El embrión se implanta en el útero: comienza el embarazo' },
            { id: 'e5', text: 'El embrión se convierte en feto y crece durante varios meses' },
            { id: 'e6', text: 'Nacimiento' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.reading(
          { fase: 'aplicar', areas: ['l2', 'fc', 'cnt'], cnb: ['l2:3.3.1', 'fc:2.5.2'], ambito: 'convivir', prompt: 'La comisión consultó **dos obras de referencia** sobre el VIH. Compara la información y responde.' },
          { genre: 'Comparación de fuentes', heading: 'Dos fuentes sobre el VIH', passage:
            '**Fuente A. Enciclopedia escolar muy antigua (texto de ejemplo):** "El SIDA es una enfermedad nueva y mortal. Se desconoce si se contagia por el contacto diario, por eso se recomienda alejarse de los enfermos."\n\n**Fuente B. Folleto de salud pública (edición reciente):** "El VIH es un virus que se transmite solo por tres vías: relaciones sexuales sin protección, contacto con sangre infectada (por ejemplo, jeringas compartidas) y de madre a hijo durante el embarazo, el parto o la lactancia. **No** se transmite por abrazos, besos en la mejilla, saludos, compartir platos o baños, ni por picaduras de mosquitos. Con tratamiento, las personas que viven con VIH pueden tener una vida larga, estudiar y trabajar."\n\n**Dato legal:** En Guatemala, el Decreto 27-2000 protege los derechos de las personas que viven con VIH y prohíbe discriminarlas.',
            questions: [
              { q: '¿En qué se diferencian las dos fuentes?', options: [
                { id: 'a', text: 'La A es antigua y tiene información incompleta; la B es reciente y explica las vías de transmisión con precisión' },
                { id: 'b', text: 'Las dos dicen exactamente lo mismo' },
                { id: 'c', text: 'La A es más reciente que la B' },
              ], correct: 'a', why: 'Al comparar fuentes, revisa la fecha: la ciencia avanza y la información antigua puede estar superada.' },
              { q: 'Según la fuente B, ¿cuál de estas acciones NO transmite el VIH?', options: [
                { id: 'a', text: 'Abrazar a un compañero o compartir la refacción en el mismo plato' },
                { id: 'b', text: 'Compartir jeringas' },
                { id: 'c', text: 'De madre a hijo durante el parto' },
              ], correct: 'a' },
              { q: 'El tío de Mateo vive con VIH y algunos vecinos no lo saludan. ¿Qué juicio crítico es correcto?', options: [
                { id: 'a', text: 'Es discriminación basada en miedo y desinformación; saludarlo no transmite el virus y él tiene los mismos derechos' },
                { id: 'b', text: 'Los vecinos hacen bien porque se pueden contagiar' },
                { id: 'c', text: 'Es un asunto sin importancia' },
              ], correct: 'a', why: 'La información correcta demuestra que el rechazo no tiene fundamento; además, la ley prohíbe discriminar.' },
            ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.4'], prompt: 'Una persona tiene la tiroides acelerada: suda, está nerviosa y bajó de peso. ¿Cómo se llama esta condición?' },
          { options: [
            { id: 'a', text: 'Hipertiroidismo' },
            { id: 'b', text: 'Hipotiroidismo', feedback: 'Hipo significa poca hormona; estos síntomas indican demasiada hormona.' },
            { id: 'c', text: 'Hipoglucemia', feedback: 'La hipoglucemia es azúcar baja en la sangre, no un problema de la tiroides.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['cnt', 'fc'], cnb: ['cnt:3.1.3', 'cnt:3.2.3', 'fc:2.5.2'], prompt: 'Boleto de salida: ¿verdadero o falso?' },
          { statements: [
            { text: 'Los ovarios producen óvulos.', answer: true },
            { text: 'La fecundación ocurre en el útero.', answer: false, why: 'La fecundación ocurre en las trompas de Falopio; en el útero se implanta y se desarrolla el embrión.' },
            { text: 'El embarazo dura unas 40 semanas.', answer: true },
            { text: 'El VIH se transmite al dar un abrazo.', answer: false, why: 'Los abrazos, saludos y besos en la mejilla no transmiten el VIH.' },
          ] },
        ),
        cierre({ areas: ['cnt', 'fc'], cnb: ['fc:2.5.2'] }, ['Uso los términos hipo e hiper para explicar el funcionamiento de las glándulas', 'Diferencio las funciones de los aparatos reproductores', 'Explico la relación entre fecundación y embarazo', 'Rechazo la discriminación hacia las personas que viven con VIH'],
          ['Hablaré de mis dudas sobre el cuerpo con una persona adulta de confianza', 'Buscaré información en fuentes actualizadas', 'Trataré a todas las personas con respeto, sin importar su condición de salud']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's23-d2-injertos-rutas',
      title: 'Injertos, rutas y tratados',
      icon: 'Ship',
      minutes: 15,
      day: 2,
      gancho: '¿Cómo llega un aguacate guatemalteco a la mesa de otro país? ¿Y por qué algunos árboles tienen "dos plantas en una"?',
      objetivos: ['Demostrar los beneficios de los injertos', 'Identificar vías, medios de transporte y de comunicación usados en el mundo', 'Distinguir tratados bilaterales y multilaterales', 'Multiplicar decimales interpretando una tabla y hablar del futuro en inglés'],
      resumen: [
        'Un injerto une una parte de una planta (la púa o yema) con otra que tiene raíz (el patrón). Así el árbol da fruto antes, conserva la variedad deseada y resiste mejor las plagas del suelo.',
        'En el mundo se usan barcos por canales como el de Panamá, trenes de alta velocidad, teleféricos, satélites y cables submarinos de internet.',
        'Un tratado bilateral lo firman dos países; uno multilateral, tres o más. Guatemala es parte del DR-CAFTA (multilateral) y tiene tratados bilaterales, como el que firmó con Taiwán.',
        'Para multiplicar decimales se multiplica como con enteros y el resultado lleva tantas cifras decimales como los dos factores juntos.',
      ],
      media: {
        id: 's23-d2-ruta-aguacate', kind: 'animation', title: 'El viaje de un aguacate', aspect: '16:9', duration: 50,
        alt: 'Animación que sigue un aguacate desde un árbol injertado en el altiplano, pasando por un camión, un puerto y un barco, hasta un mercado de otro país.',
        brief: 'Animación 2D de 50 s con un mapa que se desplaza. (1) Árbol de aguacate injertado en una finca del altiplano (se ve la unión del injerto en el tronco). (2) Cajas en un camión por una carretera de montaña. (3) Puerto del Pacífico, contenedor en un barco. (4) El barco cruza el océano; una línea punteada muestra una llamada por satélite entre el exportador y el comprador. (5) Mercado de otro país. Rótulos en cada etapa: "Injerto", "Carretera", "Puerto", "Tratado comercial", "Satélite". Sin marcas ni logotipos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'pyd'], cnb: ['cnt:2.2.4'], ambito: 'conocer', title: 'Dos plantas en una',
            prompt: 'Muchos aguacates, cafetos y árboles frutales de Guatemala son **injertados**. Un injerto une dos plantas para aprovechar lo mejor de cada una.',
            media: { id: 's23-d2-injerto', kind: 'video', title: 'Cómo se hace un injerto', aspect: '9:16', duration: 45,
              alt: 'Manos de un agricultor cortan una púa de un aguacate, la insertan en el tallo de un arbolito patrón y la amarran con cinta.',
              brief: 'Video vertical de 45 s, planos cerrados de manos (sin rostro) en un vivero del altiplano: (1) arbolito patrón en bolsa; (2) corte en cuña de una púa con yemas de un árbol de buena variedad; (3) corte vertical en el patrón; (4) inserción haciendo coincidir la corteza; (5) amarre con cinta plástica y bolsita para humedad; (6) semanas después, brotes nuevos. Rótulos: "Patrón = raíz fuerte", "Púa = variedad deseada". Nota de seguridad: navaja solo en manos adultas.' } },
          { icon: 'Sprout', body: 'El **patrón** aporta la raíz y el tronco; la **púa** (o yema) aporta la variedad que queremos cosechar.', reveal: [
            { icon: 'Timer', front: 'Fruto más pronto', back: 'Un árbol injertado suele producir fruto **en menos años** que uno sembrado de semilla.' },
            { icon: 'Copy', front: 'Misma variedad', back: 'El fruto es **igual** al del árbol de donde se tomó la púa. De semilla, puede salir distinto.' },
            { icon: 'ShieldCheck', front: 'Resistencia', back: 'Si el patrón es resistente a plagas o enfermedades del suelo, **protege** a toda la planta.' },
            { icon: 'TrendingUp', front: 'Más producción', back: 'Las familias pueden tener árboles más productivos y mejores ingresos.' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['cnt', 'pyd'], cnb: ['cnt:2.2.4'], ambito: 'hacer',
            prompt: 'Ordena los pasos para hacer un **injerto** de aguacate, como en el video.',
            explain: 'Lo más importante es que las cortezas del patrón y de la púa coincidan: por ahí circula la savia y se "sueldan".' },
          { items: [
            { id: 'i1', text: 'Elegir un patrón sano con raíz fuerte' },
            { id: 'i2', text: 'Cortar una púa con yemas de un árbol de buena variedad' },
            { id: 'i3', text: 'Hacer un corte en el tallo del patrón' },
            { id: 'i4', text: 'Unir la púa y el patrón haciendo coincidir la corteza' },
            { id: 'i5', text: 'Amarrar con cinta y proteger de la sequedad' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.explain(
          { fase: 'construir', areas: ['ccss', 'pyd'], cnb: ['ccss:3.3.2', 'ccss:3.4.3'], ambito: 'conocer', title: 'Conexiones con el mundo',
            prompt: 'Para que un producto viaje, se necesitan **vías y medios de transporte**, **medios de comunicación** y **acuerdos entre países**. Toca cada tarjeta.' },
          { icon: 'Globe', body: 'Los países se conectan por tierra, agua, aire y señales. Y se ponen de acuerdo mediante **tratados**.', reveal: [
            { icon: 'Ship', front: 'Por agua', back: 'Barcos de carga. El **Canal de Panamá** une los océanos Atlántico y Pacífico y acorta el viaje.' },
            { icon: 'Train', front: 'Por tierra', back: 'Carreteras, y en países como Japón o España, **trenes de alta velocidad**. En La Paz, Bolivia, un sistema de **teleféricos** funciona como transporte público.' },
            { icon: 'Satellite', front: 'Comunicación', back: '**Satélites** y **cables submarinos** de fibra óptica llevan llamadas e internet entre continentes.' },
            { icon: 'Handshake', front: 'Tratados', back: '**Bilateral**: lo firman **dos** países. **Multilateral**: lo firman **tres o más**. Regulan comercio, fronteras, derechos y ambiente.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['ccss', 'l1'], cnb: ['ccss:3.3.2'], ambito: 'conocer',
            prompt: 'Une cada necesidad con la **vía o medio** que se usa en el mundo actual.',
            explain: 'La elección del medio depende de la distancia, el tipo de carga y el relieve.' },
          { leftTitle: 'Necesidad', rightTitle: 'Vía o medio', pairs: [
            { id: 't1', left: 'Llevar contenedores de un océano a otro por Centroamérica', leftIcon: 'Ship', right: 'Canal de Panamá' },
            { id: 't2', left: 'Viajar muy rápido entre ciudades de Japón', leftIcon: 'Train', right: 'Tren de alta velocidad' },
            { id: 't3', left: 'Subir y bajar laderas empinadas en La Paz, Bolivia', leftIcon: 'Mountain', right: 'Teleférico' },
            { id: 't4', left: 'Enviar internet entre América y Europa', leftIcon: 'Cable', right: 'Cable submarino de fibra óptica' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:3.4.3'], ambito: 'conocer',
            prompt: 'Analiza estos tratados y acuerdos que involucran a Guatemala: ¿son **bilaterales** o **multilaterales**?',
            hint: 'Cuenta cuántos países firman: dos o más de dos.',
            explain: 'Los tratados abren mercados y resuelven asuntos comunes, pero también deben revisarse para que beneficien a productores pequeños y respeten derechos y ambiente.' },
          { buckets: [
            { id: 'bi', label: 'Bilateral (2 países)', icon: 'Users', color: 'var(--area-ccss)' },
            { id: 'multi', label: 'Multilateral (3 o más)', icon: 'Globe', color: 'var(--area-fc)' },
          ], items: [
            { id: 'a1', text: 'Tratado de libre comercio entre Guatemala y Taiwán', bucket: 'bi' },
            { id: 'a2', text: 'Acuerdo entre Guatemala y México sobre límites y aguas de su frontera', bucket: 'bi' },
            { id: 'a3', text: 'DR-CAFTA: Estados Unidos, República Dominicana y cinco países de Centroamérica', bucket: 'multi' },
            { id: 'a4', text: 'Acuerdo de Asociación entre Centroamérica y la Unión Europea', bucket: 'multi' },
            { id: 'a5', text: 'Convenio 169 de la OIT sobre pueblos indígenas, ratificado por muchos países', bucket: 'multi' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'l1', 'pyd'], cnb: ['mat:4.5.2', 'l1:3.2.1'], ambito: 'hacer',
            prompt: 'Lee la **tabla** de una cooperativa (datos supuestos para practicar):\n\n| Producto | Precio por kg | Kilos vendidos |\n|---|---|---|\n| Aguacate | Q12.50 | 2.5 |\n| Arveja china | Q8.40 | 3 |\n\n¿Cuánto se cobra por el **aguacate**? Multiplica como con enteros y luego cuenta las cifras decimales de ambos factores (12.50 tiene 2 y 2.5 tiene 1: el resultado lleva 3).',
            hint: '1250 × 25 = 31,250. Ahora coloca 3 cifras decimales.',
            explain: '12.50 × 2.5 = 31.250 = Q31.25. Leer bien la tabla (fila del aguacate, columnas de precio y kilos) evita errores.' },
          { answer: 31.25, unit: 'quetzales', allowDecimal: true, stimulus: '12.50 × 2.5 = ?', misconceptions: [
            { value: 25.2, msg: 'Ese es el cobro por la arveja china (8.40 × 3). Revisa la fila del aguacate.' },
            { value: 312.5, msg: 'Revisa la posición del punto: el resultado debe tener 3 cifras decimales.' },
          ] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l3', 'ccss'], cnb: ['l3:2.1.2'], ambito: 'conocer',
            prompt: 'English time! Habla del **futuro**. Usa _will_ (decisión o predicción), _going to_ (plan) y palabras de tiempo futuro: _tomorrow, next week, next year_.',
            explain: 'Future words: tomorrow (mañana), next week (la próxima semana), next year (el próximo año), soon (pronto).' },
          { text: 'The ship [[will]] arrive in Europe [[next]] week.\nTomorrow we are [[going]] to pack the avocados.\n[[Next]] year the cooperative will plant more trees.', distractors: ['did', 'yesterday'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.2.4'], prompt: '¿Cuál es un **beneficio** de injertar un aguacate en un patrón resistente?' },
          { options: [
            { id: 'a', text: 'El árbol resiste plagas del suelo y da la misma variedad de fruto' },
            { id: 'b', text: 'El árbol ya no necesita agua', feedback: 'Todas las plantas necesitan agua, estén injertadas o no.' },
            { id: 'c', text: 'Los frutos salen de dos colores', feedback: 'El fruto es de la variedad de la púa, no una mezcla.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.5.2'], prompt: 'Calcula **3.6 × 1.5**.' },
          { answer: 5.4, allowDecimal: true, stimulus: '3.6 × 1.5 = ?', misconceptions: [
            { value: 54, msg: 'Falta colocar el punto: el resultado lleva 2 cifras decimales (5.40).' },
          ] },
        ),
        cierre({ areas: ['cnt', 'ccss'], cnb: ['ccss:3.4.3'] }, ['Explico los beneficios de un injerto', 'Nombro vías y medios de transporte y comunicación del mundo', 'Distingo tratados bilaterales y multilaterales', 'Multiplico decimales'],
          ['Preguntaré si en mi comunidad hay árboles injertados', 'Buscaré en la etiqueta de un producto de qué país viene', 'Practicaré frases en inglés sobre mis planes para la próxima semana']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's23-d3-nadie-atras',
      title: 'Nadie se queda atrás',
      icon: 'Accessibility',
      minutes: 15,
      day: 3,
      gancho: '¿Hay en tu comunidad personas que no pueden entrar a un lugar, estudiar o trabajar como las demás? ¿Por qué?',
      objetivos: ['Identificar los grupos sociales excluidos', 'Reconocer artículos constitucionales y convenios contra la discriminación', 'Emitir un juicio crítico sobre la exclusión de personas con discapacidad', 'Usar técnicas de investigación social y redactar con comas y punto y coma'],
      resumen: [
        'Grupos que suelen ser excluidos: pueblos indígenas, mujeres, personas con discapacidad, personas que viven con VIH, personas migrantes, adultos mayores y niñez trabajadora.',
        'La Constitución de Guatemala dice en su artículo 4 que todos los seres humanos son libres e iguales en dignidad y derechos; el artículo 53 protege a las personas con discapacidad y el 66, a los grupos étnicos. El Convenio 169 de la OIT protege a los pueblos indígenas.',
        'Las técnicas de investigación social incluyen la encuesta, la entrevista y la observación.',
        'La coma separa elementos de una enumeración; el punto y coma separa ideas relacionadas dentro de una oración larga.',
      ],
      media: {
        id: 's23-d3-accesible', kind: 'image', title: 'Una escuela para todos', aspect: '16:9',
        alt: 'Entrada de una escuela con rampa, pasamanos, rótulos en braille y en dos idiomas, y estudiantes con y sin discapacidad entrando juntos.',
        brief: 'Ilustración plana de la entrada de una escuela pública guatemalteca: rampa con pasamanos junto a las gradas, puerta ancha, rótulo "Bienvenidos" en español y en k\'iche\' (solo la palabra en español legible; el otro texto genérico), placa con puntos de braille, piso con franja texturizada. Entran juntos: una niña en silla de ruedas, un niño con bastón blanco, una abuela y estudiantes de distintos pueblos. Colores alegres, sin marcas.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'fc'], cnb: ['ccss:4.2.1'], ambito: 'convivir', title: '¿Quiénes se quedan atrás?',
            prompt: 'Un **grupo excluido** es un grupo de personas que no puede ejercer sus derechos igual que las demás: se le niega el acceso a la educación, la salud, el trabajo o la participación. Toca cada tarjeta.' },
          { icon: 'Users', body: 'La exclusión no es culpa de quien la sufre: la produce una sociedad que **no toma en cuenta** a todas las personas.', reveal: [
            { icon: 'Accessibility', front: 'Personas con discapacidad', back: 'Encuentran gradas sin rampa, escuelas sin materiales en braille o empleos que no las contratan.' },
            { icon: 'Languages', front: 'Pueblos indígenas', back: 'A veces no reciben servicios en su idioma o son discriminados por su traje.' },
            { icon: 'HeartHandshake', front: 'Personas con VIH', back: 'Sufren rechazo por miedo y desinformación, aunque convivir con ellas no transmite el virus.' },
            { icon: 'Footprints', front: 'Otros grupos', back: 'Mujeres, personas migrantes, adultos mayores y niñas y niños que trabajan en lugar de estudiar.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['fc', 'ccss'], cnb: ['fc:2.4.1'], ambito: 'conocer',
            prompt: 'La ley protege contra la exclusión. Une cada norma con lo que garantiza.',
            explain: 'Estas normas existen y obligan al Estado. Conocerlas nos permite exigir que se cumplan. (La Constitución de 1985 usa la palabra "minusválidos"; hoy se dice "personas con discapacidad".)' },
          { leftTitle: 'Norma', rightTitle: 'Qué garantiza', pairs: [
            { id: 'n1', left: 'Constitución, artículo 4', leftIcon: 'Scale', right: 'Todas las personas son libres e iguales en dignidad y derechos' },
            { id: 'n2', left: 'Constitución, artículo 53', leftIcon: 'Accessibility', right: 'Protección de las personas con discapacidad' },
            { id: 'n3', left: 'Constitución, artículo 66', leftIcon: 'Users', right: 'Respeto a las formas de vida, idiomas y trajes de los grupos étnicos' },
            { id: 'n4', left: 'Convenio 169 de la OIT', leftIcon: 'Globe', right: 'Derechos de los pueblos indígenas y tribales' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['ccss', 'pyd'], cnb: ['ccss:4.1.3'], ambito: 'conocer',
            prompt: 'La comisión entrevistó a las abuelas y abuelos. Las actividades cotidianas de la familia y la comunidad han **cambiado**. Clasifica cada una.',
            explain: 'Algunos cambios facilitan la vida y pueden incluir a más personas (por ejemplo, mensajes de voz para quien no lee). Otros crean nuevas brechas cuando no todos tienen acceso.' },
          { buckets: [
            { id: 'antes', label: 'Antes (cuando los abuelos eran niños)', icon: 'History', color: 'var(--c-hint)' },
            { id: 'ahora', label: 'Ahora', icon: 'Smartphone', color: 'var(--area-l1)' },
          ], items: [
            { id: 'c1', text: 'Enviar cartas que tardaban semanas en llegar', bucket: 'antes' },
            { id: 'c2', text: 'Mandar mensajes de voz por celular', bucket: 'ahora' },
            { id: 'c3', text: 'Moler el maíz en piedra de moler todos los días', bucket: 'antes' },
            { id: 'c4', text: 'Llevar el maíz al molino eléctrico', bucket: 'ahora' },
            { id: 'c5', text: 'Escuchar las noticias solo por radio', bucket: 'antes' },
            { id: 'c6', text: 'Hacer tareas buscando información en internet', bucket: 'ahora' },
          ] },
        ),
        S.fill(
          { fase: 'construir', areas: ['pyd', 'ccss'], cnb: ['pyd:2.2.1'], ambito: 'hacer',
            prompt: 'Para investigar la exclusión en la comunidad, la comisión usa **técnicas de investigación social**. Completa.',
            explain: 'Cada técnica da un tipo de información: la encuesta da números, la entrevista da historias y la observación da evidencia directa.' },
          { text: 'La [[encuesta]] hace las mismas preguntas a muchas personas para contar respuestas.\nLa [[entrevista]] es una conversación con preguntas preparadas para conocer la experiencia de una persona.\nLa [[observación]] consiste en mirar y registrar lo que ocurre, por ejemplo, cuántas entradas tienen rampa.',
            distractors: ['adivinanza', 'suposición'] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'ef'], cnb: ['fc:2.5.1'], ambito: 'convivir', prompt: 'En la clase de Educación Física, ¿qué harías?' },
          { scene: { icon: 'Accessibility', text: '**Andrea** usa silla de ruedas. Van a jugar y un compañero dice: "Mejor que ella se quede sentada viendo, porque nos va a hacer perder".' }, options: [
            { id: 'a', icon: 'EyeOff', text: 'Estar de acuerdo para ganar', consequence: 'Andrea se queda fuera otra vez y siente que no pertenece al grupo.', values: ['Exclusión'], constructive: false },
            { id: 'b', icon: 'HeartHandshake', text: 'Proponer un juego de lanzamiento rodado en el que todos puedan participar y preguntarle a Andrea cómo prefiere jugar', consequence: 'Andrea lanza con mucha puntería y su equipo gana. El grado descubre que adaptar el juego nos incluye a todos.', values: ['Inclusión', 'Respeto', 'Creatividad'], constructive: true },
            { id: 'c', icon: 'Hand', text: 'Jugar por ella sin preguntarle', consequence: 'Aunque la intención es buena, Andrea siente que no la dejan decidir.', values: ['Sobreprotección'], constructive: false },
          ] },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'fc'], cnb: ['ef:2.1.4', 'fc:2.5.1'], ambito: 'hacer',
            prompt: '¡Juego incluyente de **lanzamiento rodado**! Coloca una pelota de referencia a 3, 5 y 7 metros. Desde sentado o de pie, **rueda** una pelota para acercarla lo más posible: primero con la **mano derecha** y luego con **ambas manos**. Todos pueden jugar igual, con o sin silla de ruedas. Mide tu pulso en cada ronda.' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después de lanzar rodado con la mano derecha a 3 y 5 m', exercise: { name: 'Lanzamiento rodado con mano derecha', icon: 'Circle', seconds: 40 } },
            { label: 'Después de lanzar rodado con ambas manos a 7 m', exercise: { name: 'Lanzamiento rodado con ambas manos', icon: 'Target', seconds: 40 } },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l2', 'pyd', 'fc'], cnb: ['l2:4.3.2', 'pyd:2.5.1', 'fc:2.5.1'], ambito: 'emprender',
            prompt: 'Redacta un **párrafo** con **acciones que mejoran la calidad de vida** de las personas con discapacidad de tu comunidad. Usa **comas** para separar los elementos de una enumeración (_rampas, pasamanos, libros en braille_) y **punto y coma** para separar dos ideas relacionadas (_la escuela construyó una rampa; ahora Andrea entra sola_).' },
          { minWords: 40, placeholder: 'Para mejorar la calidad de vida de las personas con discapacidad, nuestra comunidad puede…; además…',
            model: 'Para mejorar la calidad de vida de las personas con discapacidad, nuestra comunidad puede construir rampas, poner pasamanos, pintar franjas de colores y leer los avisos en voz alta. La escuela ya construyó una rampa; ahora Andrea entra sola al aula. El centro de salud podría atender con intérprete de señas; así, más familias recibirían información clara.',
            rubric: ['Propone al menos tres acciones concretas', 'Usa comas para separar una enumeración', 'Usa punto y coma para unir dos ideas relacionadas', 'Muestra respeto y juicio crítico ante la exclusión'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.4.1'], prompt: '¿Qué dice el **artículo 4** de la Constitución de Guatemala?' },
          { options: [
            { id: 'a', text: 'Que todos los seres humanos son libres e iguales en dignidad y derechos' },
            { id: 'b', text: 'Que solo los adultos tienen derechos', feedback: 'La Constitución protege a todas las personas, incluida la niñez.' },
            { id: 'c', text: 'Que cada quien puede discriminar si quiere', feedback: 'Es lo contrario: garantiza la igualdad.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ccss', 'fc', 'pyd'], cnb: ['ccss:4.2.1', 'fc:2.5.1', 'pyd:2.2.1', 'ccss:4.1.3'], prompt: 'Boleto de salida: ¿verdadero o falso?' },
          { statements: [
            { text: 'Las personas con discapacidad son uno de los grupos que suelen ser excluidos.', answer: true },
            { text: 'Una rampa solo beneficia a quien usa silla de ruedas.', answer: false, why: 'También ayuda a adultos mayores, a quien lleva un carruaje de bebé o carga algo pesado.' },
            { text: 'La entrevista es una técnica de investigación social.', answer: true },
            { text: 'Las actividades cotidianas de las familias nunca cambian.', answer: false, why: 'Cambian con la tecnología y la sociedad: por ejemplo, de las cartas a los mensajes de voz.' },
          ] },
        ),
        cierre({ areas: ['fc', 'ccss'], cnb: ['ccss:4.2.1'] }, ['Nombro grupos sociales excluidos', 'Conozco artículos de la Constitución y convenios contra la discriminación', 'Juzgo críticamente la exclusión de las personas con discapacidad', 'Uso técnicas de investigación social'],
          ['Revisaré si mi escuela es accesible para todas las personas', 'Invitaré a jugar a quien casi nunca participa', 'Preguntaré a mis abuelos cómo ha cambiado la vida en la comunidad']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's23-d4-campana-arte',
      title: 'Una campaña con arte',
      icon: 'Palette',
      minutes: 15,
      day: 4,
      gancho: '¿Qué anuncio recuerdas de la radio, la televisión o la calle? ¿Por qué se te quedó grabado?',
      objetivos: ['Identificar las características y funciones de los textos publicitarios', 'Aplicar apoyos gráficos: negrillas, subrayado y viñetas', 'Usar proporción y movimiento al diseñar un afiche', 'Dividir decimales y organizar un ensamble y un cuadro gimnástico'],
      resumen: [
        'Un texto publicitario busca convencer: usa un eslogan corto, imágenes llamativas, colores y un llamado a la acción. Puede vender un producto o promover una idea (publicidad social).',
        'Los apoyos gráficos destacan información: las negrillas resaltan palabras clave, el subrayado marca lo importante y las viñetas ordenan listas.',
        'En un afiche, la proporción da tamaño mayor a lo más importante y el movimiento (líneas diagonales, curvas, figuras en acción) guía la mirada.',
        'Para dividir entre un decimal, se corre el punto del divisor y del dividendo el mismo número de lugares hasta que el divisor sea entero. Para dividir un decimal entre un entero, se divide como siempre y el punto del cociente va arriba del punto del dividendo.',
      ],
      media: {
        id: 's23-d4-afiche', kind: 'image', title: 'Afiche de la campaña', aspect: '3:4',
        alt: 'Afiche vertical con el eslogan "Nadie se queda atrás", una ronda de niñas y niños diversos en diagonal y una lista con viñetas.',
        brief: 'Afiche vertical para una campaña escolar: eslogan grande en negrillas "Nadie se queda atrás"; ilustración central de una ronda de niñas y niños (uno en silla de ruedas, una niña con güipil, un niño garífuna, un niño con lentes oscuros y bastón) dispuestos en diagonal ascendente para dar movimiento; la figura central ocupa dos tercios del afiche (proporción). Abajo, tres viñetas: "Respeta", "Incluye", "Infórmate". Llamado a la acción subrayado: "Únete el viernes al cuadro gimnástico". Colores contrastantes, sin marcas.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1', 'art'], cnb: ['l1:3.1.3'], ambito: 'conocer', title: '¿Cómo convence un anuncio?',
            prompt: 'La campaña usará **publicidad social**: anuncios que no venden un producto, sino que promueven una **idea** (la inclusión). Toca cada elemento del texto publicitario.' },
          { icon: 'Megaphone', body: 'Un **texto publicitario** busca **convencer** a su público. Su forma cambia según el **contexto**: un afiche en la escuela, un anuncio en la radio comunitaria o un mensaje por celular.', reveal: [
            { icon: 'Sparkles', front: 'Eslogan', back: 'Frase corta y fácil de recordar: "Nadie se queda atrás".' },
            { icon: 'Image', front: 'Imagen', back: 'Llama la atención y transmite emoción.' },
            { icon: 'Palette', front: 'Colores y tipografía', back: 'Contraste y letras grandes para leer desde lejos.' },
            { icon: 'Target', front: 'Llamado a la acción', back: 'Dice qué hacer: "Únete", "Participa", "Infórmate".' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['l1', 'art'], cnb: ['l1:3.2.2'], ambito: 'hacer',
            prompt: 'Los **apoyos gráficos** ayudan a leer rápido. Une cada apoyo con su **función** en el afiche.',
            explain: 'Si todo va en negrillas, nada resalta: los apoyos gráficos se usan con moderación.' },
          { leftTitle: 'Apoyo gráfico', rightTitle: 'Función', pairs: [
            { id: 'ag1', left: 'Negrillas', right: 'Resaltar las palabras clave del eslogan' },
            { id: 'ag2', left: 'Viñetas', right: 'Ordenar una lista de acciones' },
            { id: 'ag3', left: 'Subrayado', right: 'Marcar el dato más importante, como la fecha' },
            { id: 'ag4', left: 'Tamaño de letra mayor', right: 'Hacer que el título se lea desde lejos' },
          ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['art', 'l1'], cnb: ['art:2.2.2'], ambito: 'hacer',
            prompt: 'Observa los dos bocetos. ¿Cuál usa mejor la **proporción** (lo importante más grande) y el **movimiento** (líneas que guían la mirada)?',
            explain: 'En el boceto B la ronda de niñas y niños ocupa la mayor parte del afiche y sube en diagonal: la mirada recorre la imagen hasta el eslogan.',
            media: { id: 's23-d4-bocetos', kind: 'image', title: 'Dos bocetos de afiche', aspect: '16:9',
              alt: 'Dos bocetos lado a lado: A con figuras pequeñas en fila recta y mucho texto; B con figuras grandes en diagonal ascendente y un eslogan breve.',
              brief: 'Ilustración comparativa de dos bocetos de afiche a lápiz y color, rotulados A y B. A: cinco figuras pequeñas alineadas en una fila horizontal abajo, título pequeño y un párrafo largo que ocupa casi todo. B: las mismas cinco figuras más grandes en una ronda que sube en diagonal de izquierda a derecha, líneas curvas de movimiento, eslogan corto grande arriba a la derecha. Sin texto legible más allá del eslogan.' } },
          { options: [
            { id: 'a', text: 'Boceto A: figuras pequeñas en fila y mucho texto', icon: 'AlignJustify', feedback: 'Las figuras son pequeñas y estáticas; el texto largo compite con la imagen.' },
            { id: 'b', text: 'Boceto B: figuras grandes en diagonal y eslogan corto', icon: 'TrendingUp' },
          ], correct: ['b'] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'pyd'], cnb: ['mat:4.5.3'], ambito: 'hacer',
            prompt: 'Supongamos que el gobierno escolar tiene **Q37.50** para imprimir afiches y cada afiche cuesta **Q2.50**. ¿Cuántos afiches puede imprimir? Para dividir entre un decimal, **corre el punto** del divisor y del dividendo el mismo número de lugares: 37.50 ÷ 2.50 = 3750 ÷ 250.',
            hint: '3750 ÷ 250: piensa cuántas veces cabe 250 en 3750.',
            explain: '37.50 ÷ 2.50 = 3750 ÷ 250 = 15 afiches. Si el divisor ya es **entero** (por ejemplo, 18.60 ÷ 4), no se corre nada: se divide como siempre y se sube el punto al cociente: 18.60 ÷ 4 = 4.65. Si el dividendo es entero y el divisor decimal (15 ÷ 2.5), se agregan ceros: 150 ÷ 25 = 6.' },
          { answer: 15, unit: 'afiches', stimulus: '37.50 ÷ 2.50 = ?', misconceptions: [
            { value: 1.5, msg: 'Revisa el punto: al correrlo en ambos números el mismo número de lugares, el resultado no cambia.' },
            { value: 150, msg: 'Corriste el punto solo en uno de los números. Debe correrse en los dos.' },
          ] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l3', 'art', 'ef'], cnb: ['l3:2.1.1'], ambito: 'convivir',
            prompt: 'English time! Invita a la campaña en inglés. Usa **like to** + verbo, verbos con **-ing** (acción que ocurre ahora) y preguntas con **Do you…?**. Léelo en voz alta cuidando el ritmo y la entonación.',
            explain: '"I like **to** dance." — "She **is** dancing now." — "**Do** you like to play?" La pregunta con "Do" sube la entonación al final.' },
          { text: 'I like [[to]] play the marimba.\nMy friends are [[dancing]] in the gym show.\n[[Do]] you like to sing?\nAndrea is [[throwing]] the ball.', distractors: ['dance', 'Does'] },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'art'], cnb: ['ef:1.4.20', 'art:3.1.1'], ambito: 'convivir',
            prompt: 'La campaña cierra con un **cuadro gimnástico con fondo musical** y un **ensamble**. Organicen roles: marimba, tun, chinchines, palmas y gimnastas, con un lugar para cada persona según sus habilidades. Luego ensayen el cuadro: posiciones de equilibrio, ondas con cintas y una figura final en grupo, al ritmo de la música. Mide tu pulso.' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después de ensayar el ensamble (instrumentos y palmas)', exercise: { name: 'Tocar o marcar el pulso en el ensamble', icon: 'Drum', seconds: 40 } },
            { label: 'Después del cuadro gimnástico con música', exercise: { name: 'Cuadro gimnástico con cintas y figura final', icon: 'PersonStanding', seconds: 60 } },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l2', 'l1', 'fc'], cnb: ['l2:4.3.3', 'l1:3.1.3'], ambito: 'emprender',
            prompt: 'Escribe el guion de un **anuncio de radio** para la campaña, en forma de diálogo. Usa **dos puntos** antes de una enumeración, **raya (guion mayor)** para marcar lo que dice cada persona y al menos una palabra compuesta con **guion menor** (por ejemplo, _teórico-práctico_ o _ítalo-guatemalteco_).' },
          { minWords: 40, placeholder: '—¡Hola, comunidad! …\n—…: …, … y …',
            model: '—¡Hola, comunidad! ¿Saben qué necesita una escuela para que nadie se quede atrás?\n—Lo sabemos: rampas, libros en braille, respeto y mucha información.\n—Por eso los invitamos a nuestro taller teórico-práctico este viernes a las diez.\n—¡Nadie se queda atrás! Únete a la campaña.',
            rubric: ['Usa raya para marcar el diálogo', 'Usa dos puntos antes de una enumeración', 'Incluye una palabra con guion menor', 'Tiene eslogan y llamado a la acción'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.1.3'], prompt: '¿Cuál es la **función principal** de un texto publicitario?' },
          { options: [
            { id: 'a', text: 'Convencer al público de comprar algo o de adoptar una idea' },
            { id: 'b', text: 'Contar un cuento con inicio, nudo y desenlace', feedback: 'Eso es un texto narrativo.' },
            { id: 'c', text: 'Dar la definición de una palabra', feedback: 'Eso lo hace el diccionario.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.5.3'], prompt: 'Calcula **7.5 ÷ 2.5**.' },
          { answer: 3, allowDecimal: true, stimulus: '7.5 ÷ 2.5 = ?' },
        ),
        cierre({ areas: ['art', 'l1'], cnb: ['art:2.2.2'] }, ['Reconozco las características de un texto publicitario', 'Uso apoyos gráficos con intención', 'Diseño con proporción y movimiento', 'Participo en el ensamble y el cuadro gimnástico'],
          ['Diseñaré un afiche para la campaña de mi escuela', 'Analizaré qué quiere convencerme cada anuncio que vea', 'Invitaré a mi familia a la presentación de la campaña']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's23-d5-reto',
      title: 'Reto de la semana 23',
      icon: 'Trophy',
      minutes: 13,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Voz de la inclusión" (70 % o más)'],
      resumen: ['Superé el reto de la semana 23: salud sin prejuicios, conexiones con el mundo e inclusión.'],
      media: {
        id: 's23-d5-reto', kind: 'image', title: 'Medalla Voz de la inclusión', aspect: '1:1',
        alt: 'Medalla dorada con un megáfono del que salen figuras de personas diversas tomadas de la mano.',
        brief: 'Ilustración de medalla circular dorada con relieve: un megáfono del que sale una cadena de siluetas de personas diversas tomadas de la mano (una en silla de ruedas). Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024.',
      },
      steps: [
        S.match({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.4'], prompt: 'Une cada término con su significado.' },
          { pairs: [{ id: 'a', left: 'Hipotiroidismo', right: 'La tiroides produce poca hormona' }, { id: 'b', left: 'Hipertiroidismo', right: 'La tiroides produce demasiada hormona' }, { id: 'c', left: 'Hiperglucemia', right: 'Azúcar alta en la sangre' }] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.2.3', 'cnt:3.1.3'], prompt: '¿Qué es la fecundación?' },
          { options: [{ id: 'a', text: 'La unión de un espermatozoide con un óvulo' }, { id: 'b', text: 'El nacimiento del bebé' }, { id: 'c', text: 'La producción de hormonas en la tiroides' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['cnt', 'pyd'], cnb: ['cnt:2.2.4'], prompt: 'Don Esteban quiere que su nuevo árbol de aguacate dé exactamente la misma fruta que su mejor árbol. ¿Qué le conviene?' },
          { options: [{ id: 'a', text: 'Injertar una púa de su mejor árbol en un patrón' }, { id: 'b', text: 'Sembrar cualquier semilla' }, { id: 'c', text: 'Regar el árbol con más agua' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.4.3', 'ccss:3.3.2'], prompt: '¿Bilateral o multilateral?' },
          { buckets: [{ id: 'b', label: 'Bilateral', icon: 'Users' }, { id: 'm', label: 'Multilateral', icon: 'Globe' }],
            items: [{ id: 'a', text: 'Acuerdo firmado solo entre Guatemala y Taiwán', bucket: 'b' }, { id: 'c', text: 'DR-CAFTA', bucket: 'm' }, { id: 'd', text: 'Acuerdo de Asociación Centroamérica–Unión Europea', bucket: 'm' }] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.5.2'], prompt: 'Supongamos que un metro de listón cuesta Q4.20. ¿Cuánto cuestan 2.5 metros?' },
          { answer: 10.5, allowDecimal: true, unit: 'quetzales', stimulus: '4.20 × 2.5 = ?' }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.5.3'], prompt: 'Se reparten 9.6 litros de agua en botellas de 0.8 litros. ¿Cuántas botellas se llenan?' },
          { answer: 12, stimulus: '9.6 ÷ 0.8 = ?' }),
        S.choice({ fase: 'comprobar', areas: ['l1', 'art'], cnb: ['l1:3.2.2', 'art:2.2.2'], prompt: 'En un afiche, quieres que la lista de acciones se lea ordenada. ¿Qué apoyo gráfico usas?' },
          { options: [{ id: 'a', text: 'Viñetas' }, { id: 'b', text: 'Un párrafo largo sin separaciones' }, { id: 'c', text: 'Letra muy pequeña' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.3.2', 'l2:4.3.3'], prompt: '¿Qué oración está bien puntuada?' },
          { options: [{ id: 'a', text: 'Necesitamos tres cosas: rampas, pasamanos y respeto.' }, { id: 'b', text: 'Necesitamos tres cosas, rampas: pasamanos y respeto.' }, { id: 'c', text: 'Necesitamos: tres cosas rampas pasamanos, y respeto.' }], correct: ['a'] }),
        S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.1.1', 'l3:2.1.2'], prompt: 'Complete in English.' },
          { text: 'I like [[to]] sing. Tomorrow we [[will]] paint the poster.', distractors: ['did', 'at'] }),
        S.tf({ fase: 'comprobar', areas: ['fc', 'ccss', 'ef', 'pyd'], cnb: ['fc:2.4.1', 'fc:2.5.2', 'ccss:4.2.1', 'ef:2.1.4', 'pyd:2.5.1'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'El Convenio 169 de la OIT protege los derechos de los pueblos indígenas.', answer: true },
            { text: 'Compartir el mismo plato con una persona que vive con VIH transmite el virus.', answer: false },
            { text: 'En el lanzamiento rodado, la pelota rueda por el suelo.', answer: true },
            { text: 'Construir rampas es una acción que mejora la calidad de vida.', answer: true },
          ] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 3 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.4'], prompt: 'Una persona con **hipoglucemia** tiene…' },
      { options: [{ id: 'a', text: 'El azúcar en la sangre más baja de lo normal' }, { id: 'b', text: 'El azúcar en la sangre más alta de lo normal' }, { id: 'c', text: 'La tiroides muy grande' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.1.3'], prompt: '¿Qué órgano produce los espermatozoides?' },
      { options: [{ id: 'a', text: 'Los testículos' }, { id: 'b', text: 'Los ovarios' }, { id: 'c', text: 'El útero' }], correct: ['a'] }),
    S.order({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.2.3'], prompt: 'Ordena del primero al último.' },
      { items: [{ id: 'a', text: 'Fecundación' }, { id: 'b', text: 'Implantación en el útero' }, { id: 'c', text: 'Desarrollo del feto' }, { id: 'd', text: 'Nacimiento' }] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.3.2'], prompt: '¿Qué obra une los océanos Atlántico y Pacífico para el paso de barcos?' },
      { options: [{ id: 'a', text: 'El Canal de Panamá' }, { id: 'b', text: 'Un teleférico' }, { id: 'c', text: 'Un cable submarino' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.1.3'], prompt: '¿Cuál es un cambio en las actividades cotidianas de las familias en los últimos años?' },
      { options: [{ id: 'a', text: 'Comunicarse con mensajes de voz por celular en lugar de cartas' }, { id: 'b', text: 'Dejar de comer' }, { id: 'c', text: 'Ninguno, todo sigue igual' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.5.2'], prompt: 'Calcula **0.6 × 0.4**.' },
      { answer: 0.24, allowDecimal: true, stimulus: '0.6 × 0.4 = ?', misconceptions: [{ value: 2.4, msg: 'El resultado lleva 2 cifras decimales: 0.24.' }] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.5.3'], prompt: 'Supongamos que 4 amigas compran materiales por Q18.60 y pagan partes iguales. ¿Cuánto paga cada una?' },
      { answer: 4.65, allowDecimal: true, unit: 'quetzales', stimulus: '18.60 ÷ 4 = ?' }),
    S.match({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.1.3', 'l1:3.2.2'], prompt: 'Une cada elemento del afiche con su función.' },
      { pairs: [{ id: 'a', left: 'Eslogan', right: 'Frase corta fácil de recordar' }, { id: 'b', left: 'Llamado a la acción', right: 'Dice al público qué hacer' }, { id: 'c', left: 'Negrillas', right: 'Resaltan palabras clave' }] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:3.3.1'], prompt: 'Dos fuentes dicen cosas distintas sobre un tema de salud. ¿Qué conviene revisar primero?' },
      { options: [{ id: 'a', text: 'La fecha y quién publica cada fuente' }, { id: 'b', text: 'Cuál tiene más dibujos' }, { id: 'c', text: 'Cuál es más corta' }], correct: ['a'] }),
    S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.1.2', 'l3:2.1.1'], prompt: 'Complete in English.' },
      { text: '[[Next]] week I am going to visit my grandmother. [[Do]] you like to dance?', distractors: ['Last', 'Is'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.5.1', 'fc:2.4.1'], prompt: 'Una empresa no contrata a una persona solo porque usa silla de ruedas, aunque puede hacer el trabajo. Esto es…' },
      { options: [{ id: 'a', text: 'Discriminación, contraria a la Constitución y a la ley' }, { id: 'b', text: 'Una decisión justa' }, { id: 'c', text: 'Un acto de solidaridad' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.2.1', 'pyd:2.5.1'], prompt: 'Para saber cuántas familias del barrio tienen a una persona con discapacidad, ¿qué técnica conviene más?' },
      { options: [{ id: 'a', text: 'Una encuesta casa por casa' }, { id: 'b', text: 'Adivinar' }, { id: 'c', text: 'Preguntar a una sola persona' }], correct: ['a'] }),
  ],
});
