import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 37 · Unidad 4 "Fortaleciendo nuestro futuro"
 * Tema generador: Centroamérica, casa común
 * Integración centroamericana, monedas, población e IDH · Esquipulas, conflictos del mundo,
 * instituciones de justicia y noticias · verboides, preposiciones, la oración y el teatro de la región ·
 * energía del cuerpo, seguridad alimentaria, calendario maya, Trifinio y juego inclusivo.
 */
export default semana({
  id: 's37',
  unidad: 4,
  semana: 37,
  kind: 'aprendizaje',
  temaGenerador: 'Centroamérica, casa común',
  title: 'Centroamérica, casa común',
  subtitle: 'Integración, paz, población, noticias y energía en la región',
  icon: 'Globe',
  color: 'var(--area-fc)',
  contexto: 'Esquipulas, Chiquimula, está a pocos kilómetros de Honduras y El Salvador. Allí, en 1986 y 1987, los presidentes de Centroamérica se reunieron para buscar la paz, y muy cerca está el Trifinio, un bosque que comparten tres países. Esta semana acompañarás a un grupo de sexto grado que prepara la "Feria de la región": cambiarán monedas, compararán la población y el desarrollo de los países vecinos, leerán noticias con ojo crítico, conocerán las instituciones que defienden los derechos humanos, compararán obras de teatro de la región y jugarán sin dejar a nadie fuera.',
  ejes: ['vida-ciudadana', 'multiculturalidad', 'sostenible', 'equidad'],
  media: {
    id: 's37-portada', kind: 'video', title: 'Esquipulas: donde se encuentran tres países', aspect: '16:9', duration: 60,
    alt: 'Recorrido por Esquipulas y el Trifinio: un mercado fronterizo con monedas de varios países, una mesa con banderas de Centroamérica, un bosque nuboso y niñas y niños jugando en una cancha.',
    brief: 'Video o animación 2D de 60 s. Escenas: (1) mapa animado de Centroamérica que se acerca al punto donde se unen Guatemala, Honduras y El Salvador (rótulo "Trifinio"); (2) mercado fronterizo ficticio con billetes ilustrados genéricos rotulados "quetzal", "lempira" y "dólar" (no reproducir billetes reales); (3) mesa redonda con las banderas de los cinco países centroamericanos y el texto "Esquipulas, 1987: un camino hacia la paz"; (4) bosque nuboso con neblina y un río que nace entre los árboles; (5) niñas y niños de distintos pueblos, uno en silla de ruedas, juegan en una cancha. Cierre con el texto "Centroamérica, casa común". Música de marimba suave, personajes ficticios.',
  },
  badge: { id: 'medalla-s37', name: 'Puente de la región', icon: 'Globe', desc: 'Completaste la semana 37 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's37-d1-region',
      title: 'Una región que crece unida',
      icon: 'Map',
      minutes: 15,
      day: 1,
      gancho: 'Si viajas de Esquipulas a Honduras o a El Salvador, ¿necesitas pasaporte? ¿Con qué dinero pagarías una refacción al otro lado de la frontera?',
      objetivos: ['Identificar los principales procesos de integración centroamericana', 'Establecer equivalencias entre el quetzal y otras monedas', 'Usar la natalidad y la mortalidad para calcular el crecimiento de una población', 'Comparar el desarrollo de los países con el Índice de Desarrollo Humano'],
      resumen: [
        'Centroamérica se integra por medio del SICA (Sistema de la Integración Centroamericana, 1991), el Mercado Común Centroamericano (1960), el Parlamento Centroamericano (con sede en Guatemala) y el CA-4, que permite viajar entre Guatemala, El Salvador, Honduras y Nicaragua con el documento de identidad.',
        'Cada país tiene su moneda: quetzal (Guatemala), lempira (Honduras), córdoba (Nicaragua), colón (Costa Rica), dólar beliceño (Belice); El Salvador usa el dólar estadounidense. Para convertir, se multiplica o divide por el tipo de cambio del día.',
        'La tasa de natalidad es el número de nacimientos por cada 1,000 habitantes en un año; la de mortalidad, el número de defunciones por cada 1,000. Natalidad − mortalidad = crecimiento natural.',
        'El Índice de Desarrollo Humano (IDH) va de 0 a 1 y combina salud (esperanza de vida), educación y nivel de ingresos. Guatemala tiene un IDH de nivel medio; Costa Rica y Panamá, uno más alto.',
      ],
      media: {
        id: 's37-d1-mercado', kind: 'image', title: 'Un mercado en la frontera', aspect: '16:9',
        alt: 'Mercado fronterizo con puestos de fruta, artesanías y una casa de cambio con una pizarra de tipos de cambio.',
        brief: 'Ilustración plana de un mercado en la frontera de Agua Caliente (Esquipulas, Guatemala–Honduras). Puestos con frutas, dulces típicos y artesanías de barro. Al centro, una casa de cambio con una pizarra escrita a mano: "Supongamos: 1 dólar = Q7.75 · 1 quetzal = 3 lempiras". Personas de distintas edades y pueblos, una vendedora con corte y güipil de la región ch\'orti\', un joven con camiseta y gorra, una señora con canasta. Billetes dibujados genéricos (no copiar billetes reales). Colores cálidos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['fc', 'ccss'], cnb: ['fc:5.3.1'], ambito: 'conocer', title: 'Países vecinos que se unen',
            prompt: 'Los países de Centroamérica comparten historia, volcanes, ríos y comercio. Por eso han creado **acuerdos para integrarse**. Toca cada tarjeta.',
            media: { id: 's37-d1-sica', kind: 'diagram', title: 'Mapa de la integración centroamericana', aspect: '4:3',
              alt: 'Mapa de Centroamérica y República Dominicana con los países del SICA coloreados y los del CA-4 marcados con un borde especial.',
              brief: 'Mapa político sencillo de Centroamérica y República Dominicana. Colorear en verde claro los 8 miembros del SICA (Belice, Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica, Panamá y República Dominicana). Marcar con un borde grueso naranja los 4 países del CA-4 (Guatemala, El Salvador, Honduras, Nicaragua). Estrella en Ciudad de Guatemala con el rótulo "Sede del PARLACEN". Leyenda clara, nombres de capitales, sin relieve.' } },
          { icon: 'Handshake', body: 'Integrarse es **unir esfuerzos** para comerciar, viajar, cuidar el ambiente y vivir en paz.', reveal: [
            { icon: 'Landmark', front: 'SICA (1991)', back: 'El **Sistema de la Integración Centroamericana** reúne a 8 países: Belice, Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica, Panamá y República Dominicana.' },
            { icon: 'ShoppingBasket', front: 'Mercado Común (1960)', back: 'El **Mercado Común Centroamericano** facilita vender y comprar productos entre los países con menos impuestos.' },
            { icon: 'Users', front: 'Parlamento Centroamericano', back: 'El **PARLACEN** reúne a diputados de la región. Su sede está en la **Ciudad de Guatemala**.' },
            { icon: 'Route', front: 'CA-4', back: 'Acuerdo entre **Guatemala, El Salvador, Honduras y Nicaragua**: sus habitantes pueden viajar entre estos países con su documento de identidad, sin pasaporte.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['mat', 'fc', 'ccss'], cnb: ['mat:7.4.1', 'fc:5.3.1'], ambito: 'conocer',
            prompt: 'En la Feria de la región habrá visitantes de muchos países. Une cada país con **su moneda**.',
            hint: 'Hay un país centroamericano que no tiene moneda propia: usa la de Estados Unidos.',
            explain: 'Desde 2001, El Salvador usa el dólar estadounidense. Los demás países tienen su propia moneda. Por eso, en las fronteras hay casas de cambio.' },
          { leftTitle: 'País', rightTitle: 'Moneda', pairs: [
            { id: 'gt', left: 'Guatemala', leftIcon: 'Flag', right: 'Quetzal' },
            { id: 'hn', left: 'Honduras', leftIcon: 'Flag', right: 'Lempira' },
            { id: 'sv', left: 'El Salvador', leftIcon: 'Flag', right: 'Dólar estadounidense' },
            { id: 'ni', left: 'Nicaragua', leftIcon: 'Flag', right: 'Córdoba' },
            { id: 'cr', left: 'Costa Rica', leftIcon: 'Flag', right: 'Colón' },
            { id: 'mx', left: 'México', leftIcon: 'Flag', right: 'Peso mexicano' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['cnt', 'mat', 'ccss'], cnb: ['cnt:6.5.4'], ambito: 'conocer', title: '¿Cuánto crece una población?',
            prompt: 'Para saber si una población crece, se comparan los **nacimientos** y las **defunciones** de un año. Se cuentan **por cada 1,000 habitantes** (‰) para poder comparar lugares grandes y pequeños.' },
          { icon: 'Baby', body: 'Supongamos que un municipio tiene **50,000 habitantes**. En un año hubo **1,000 nacimientos** y **250 defunciones**.', reveal: [
            { icon: 'Baby', front: 'Tasa de natalidad', back: 'Nacimientos ÷ habitantes × 1,000. → 1,000 ÷ 50,000 × 1,000 = **20 por mil**.' },
            { icon: 'HeartPulse', front: 'Tasa de mortalidad', back: 'Defunciones ÷ habitantes × 1,000. → 250 ÷ 50,000 × 1,000 = **5 por mil**.' },
            { icon: 'TrendingUp', front: 'Crecimiento natural', back: 'Natalidad − mortalidad = 20 − 5 = **15 por mil**. Es decir, la población crece **1.5 %** en un año.' },
            { icon: 'Route', front: '¿Y la migración?', back: 'Las personas que **llegan** o **se van** también cambian la población total. Por eso el crecimiento real puede ser mayor o menor que el natural.' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['cnt', 'mat'], cnb: ['cnt:6.5.4'], ambito: 'hacer',
            prompt: 'Supongamos que otro municipio de Chiquimula tiene **40,000 habitantes** y en un año hubo **960 nacimientos**. ¿Cuál es su **tasa de natalidad** por cada 1,000 habitantes?',
            hint: 'Divide los nacimientos entre los habitantes y multiplica por 1,000. También puedes pensar: ¿cuántos grupos de 1,000 hay en 40,000?',
            explain: '960 ÷ 40,000 × 1,000 = 24. Hay 40 grupos de 1,000 habitantes, y 960 ÷ 40 = 24 nacimientos por cada mil.' },
          { answer: 24, unit: 'por mil', misconceptions: [{ value: 960, msg: 'Ese es el total de nacimientos. Falta dividir entre los 40 grupos de 1,000 habitantes.' }, { value: 2.4, msg: 'Ese sería el porcentaje. Te pedimos por cada 1,000 habitantes.' }] },
        ),
        S.explain(
          { fase: 'construir', areas: ['ccss', 'fc', 'mat'], cnb: ['ccss:8.3.4', 'fc:5.3.2'], ambito: 'conocer', title: 'El Índice de Desarrollo Humano',
            prompt: 'Cada año, el Programa de las Naciones Unidas para el Desarrollo (PNUD) calcula el **Índice de Desarrollo Humano (IDH)** de casi todos los países. Toca cada tarjeta.' },
          { icon: 'BarChart3', body: 'El IDH no mide solo el dinero: mide si las personas pueden **vivir sanas**, **aprender** y **tener lo necesario**.', reveal: [
            { icon: 'HeartPulse', front: 'Salud', back: 'Se mide con la **esperanza de vida**: cuántos años vive, en promedio, una persona al nacer.' },
            { icon: 'GraduationCap', front: 'Educación', back: 'Se miden los **años de estudio** de los adultos y los años que se espera que estudien niñas y niños.' },
            { icon: 'Wallet', front: 'Nivel de vida', back: 'Se mide con el **ingreso promedio** por persona.' },
            { icon: 'Ruler', front: 'La escala', back: 'Va de **0 a 1**. Los países se agrupan en IDH **muy alto, alto, medio y bajo**. Guatemala tiene un IDH **medio** (entre 0.6 y 0.7, aproximadamente); Costa Rica y Panamá lo tienen más alto.' },
            { icon: 'Scale', front: 'Procesos distintos', back: 'Los países que durante muchos años invierten en **escuelas, salud y empleo** suelen mejorar su IDH. Por ejemplo, Costa Rica eliminó su ejército en 1948 y destinó más recursos a educación y salud.' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'fc'], cnb: ['mat:7.4.1'], ambito: 'hacer',
            prompt: 'Una familia salvadoreña visita la feria y quiere pagar **20 dólares** en artesanías. Supongamos que hoy **1 dólar = Q7.75**. ¿Cuántos **quetzales** son?',
            hint: 'Cada dólar vale Q7.75. ¿Cuánto valen 20 dólares? Puedes calcular 20 × 7 y luego 20 × 0.75.',
            explain: '20 × 7.75 = 155. Veinte dólares equivalen a Q155. Para pasar de dólares a quetzales se **multiplica** por el tipo de cambio; para pasar de quetzales a dólares se **divide**.' },
          { answer: 155, unit: 'quetzales', allowDecimal: true, misconceptions: [{ value: 27.75, msg: 'Sumaste 20 + 7.75. Cada uno de los 20 dólares vale Q7.75: multiplica.' }, { value: 140, msg: 'Olvidaste los 75 centavos de cada dólar: 20 × 0.75 = 15.' }] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l1', 'fc', 'ccss'], cnb: ['l1:7.2.8', 'fc:5.3.2'], ambito: 'hacer',
            prompt: 'Para **comparar** dos ideas en un párrafo usamos **conjunciones comparativas**: _más… que_, _menos… que_, _tanto… como_, _igual que_, _así como_. Completa el párrafo que el grupo escribió para la feria.',
            explain: 'Las comparativas amplían el párrafo: en lugar de dar un solo dato, relacionan dos países o dos ideas. Guatemala es el país más poblado de Centroamérica, con más de 17 millones de habitantes (aproximadamente).' },
          { text: 'Guatemala tiene [[más]] habitantes [[que]] El Salvador. Sin embargo, su IDH es [[menos]] alto que el de Costa Rica. Para mejorar, importan [[tanto]] la educación [[como]] la salud.',
            distractors: ['pero', 'porque', 'aunque'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['cnt', 'mat'], cnb: ['cnt:6.5.4'], prompt: 'Boleto de salida: supongamos que un país tiene una natalidad de **21 por mil** y una mortalidad de **6 por mil**. ¿Cuál es su **crecimiento natural** por cada mil habitantes?' },
          { answer: 15, unit: 'por mil', misconceptions: [{ value: 27, msg: 'Sumaste. El crecimiento natural es natalidad MENOS mortalidad.' }] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss', 'fc'], cnb: ['ccss:8.3.4', 'fc:5.3.1'], prompt: '¿Qué afirmación es correcta?' },
          { options: [
            { id: 'a', text: 'El IDH combina salud, educación e ingresos, y el SICA es un sistema de integración de la región', icon: 'BadgeCheck' },
            { id: 'b', text: 'El IDH mide solo cuánto dinero tiene el gobierno', icon: 'Wallet', feedback: 'El IDH también mide la salud y la educación de las personas.' },
            { id: 'c', text: 'El CA-4 obliga a usar pasaporte entre Guatemala y Honduras', icon: 'Route', feedback: 'Es al revés: el CA-4 permite viajar con el documento de identidad.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['fc', 'mat', 'cnt'], cnb: ['fc:5.3.2'] }, ['Explico qué es el SICA y el CA-4', 'Convierto dólares a quetzales', 'Calculo natalidad, mortalidad y crecimiento natural', 'Comparo países con el IDH'],
          ['Preguntaré en casa si alguien ha viajado a otro país de Centroamérica', 'Buscaré el tipo de cambio del dólar en una noticia de hoy', 'Escribiré un párrafo que compare dos países usando "más… que"']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's37-d2-paz-noticias',
      title: 'Esquipulas: caminos de paz y de justicia',
      icon: 'Scale',
      minutes: 15,
      day: 2,
      gancho: 'Cuando hay una pelea en el recreo, ¿qué ayuda más a resolverla: gritar más fuerte o sentarse a dialogar?',
      objetivos: ['Relacionar causas y efectos de los conflictos armados del mundo', 'Conocer las instituciones de Guatemala que velan por la justicia y los derechos humanos', 'Diferenciar una noticia de otros textos informativos', 'Emitir juicios críticos sobre las noticias de los medios de tu comunidad'],
      resumen: [
        'En 1986 y 1987, los presidentes de Centroamérica firmaron en Esquipulas acuerdos para buscar la paz. Guatemala firmó el Acuerdo de Paz Firme y Duradera el 29 de diciembre de 1996.',
        'Los conflictos armados tienen causas (disputas por poder, territorio o recursos, discriminación) y efectos (muertes, personas refugiadas, hambre, escuelas cerradas) que alcanzan a otros países, por ejemplo con el alza de precios.',
        'Instituciones de justicia y derechos humanos: Procurador de los Derechos Humanos (defiende derechos y recibe denuncias), Ministerio Público (investiga delitos y acusa), Organismo Judicial (juzga), Instituto de la Defensa Pública Penal (abogado gratuito) y Procuraduría General de la Nación (protege a la niñez).',
        'La noticia cuenta un hecho reciente y responde qué, quién, cuándo, dónde, cómo y por qué; tiene titular, entrada y cuerpo. Antes de creer o compartir, revisa la fuente, la fecha y compara con otros medios.',
      ],
      media: {
        id: 's37-d2-esquipulas', kind: 'animation', title: 'De Esquipulas a la paz', aspect: '16:9', duration: 60,
        alt: 'Línea del tiempo animada: una mesa con cinco banderas centroamericanas en 1986 y 1987, y la firma de la paz en Guatemala en 1996.',
        brief: 'Animación 2D de 60 s con línea del tiempo horizontal. (1) "Años 80: conflictos armados en varios países de Centroamérica": mapa de la región en gris con nubes oscuras, sin armas ni violencia explícita. (2) "Mayo de 1986 – Esquipulas I" y "Agosto de 1987 – Esquipulas II": mesa redonda con las banderas de Guatemala, El Salvador, Honduras, Nicaragua y Costa Rica; los personajes son siluetas, no presidentes reconocibles. (3) "29 de diciembre de 1996 – Acuerdo de Paz Firme y Duradera en Guatemala": una paloma blanca cruza el mapa y el gris se vuelve colores. Narración en español, subtítulos, música tranquila.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'fc'], cnb: ['ccss:8.1.3'], ambito: 'conocer', title: 'Conflictos en el mundo: causas y efectos',
            prompt: 'En los años ochenta, varios países de Centroamérica vivían **conflictos armados**. En **Esquipulas** (1986 y 1987) sus presidentes acordaron dialogar, dejar las armas y celebrar elecciones libres. Hoy todavía hay conflictos en otras regiones del mundo. Toca cada tarjeta.' },
          { icon: 'Scale', body: 'Todo conflicto tiene **causas** (por qué empieza) y **efectos** (qué provoca). Entenderlos ayuda a prevenirlos.', reveal: [
            { icon: 'Flame', front: 'Causas frecuentes', back: 'Disputas por el **poder político**, por un **territorio** o por **recursos** (agua, tierra, petróleo); **discriminación** por el origen, el idioma o la religión; pobreza y falta de diálogo.' },
            { icon: 'Users', front: 'Efectos en el país', back: 'Personas que pierden la vida o su hogar, familias **refugiadas** o desplazadas, escuelas y hospitales cerrados, hambre.' },
            { icon: 'Globe', front: 'Efectos en otros países', back: 'Suben los precios de alimentos, combustibles y fertilizantes, llegan personas migrantes y se frena el comercio. Por ejemplo, desde 2022 la guerra en Ucrania, gran productora de trigo, encareció alimentos y fertilizantes en muchos países.' },
            { icon: 'Handshake', front: 'La salida', back: 'El **diálogo**, los acuerdos de paz y el respeto a los derechos humanos. Guatemala firmó la paz el **29 de diciembre de 1996**.' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['l3', 'ccss', 'fc'], cnb: ['l3:5.1.3', 'l3:5.2.1'], ambito: 'conocer',
            prompt: 'English time! Lee sobre personas especiales de países donde se habla **inglés** y responde. (Tip: _prison_ = prisión, _peace_ = paz, _record_ = récord.)' },
          { genre: 'Informative text', heading: 'Special people from English-speaking countries', passage:
            'English is spoken in many countries: the United States, the United Kingdom, Canada, Australia, Jamaica and **Belize**, our neighbor in Central America.\n\n**Nelson Mandela** was from South Africa, where English is one of the official languages. He fought against racism. He was in prison for 27 years. When he was free, he chose peace and dialogue. In 1994 he became the first Black president of his country.\n\n**Serena Williams** is a tennis player from the United States. She won 23 Grand Slam singles titles.\n\n**Usain Bolt** is an athlete from Jamaica. He holds the world record in the 100 meters: 9.58 seconds.',
            questions: [
              { q: 'Which country in Central America speaks English?', options: [
                { id: 'a', text: 'Belize' }, { id: 'b', text: 'Honduras' }, { id: 'c', text: 'Guatemala' },
              ], correct: 'a' },
              { q: 'What did Nelson Mandela choose when he was free?', options: [
                { id: 'a', text: 'Peace and dialogue' }, { id: 'b', text: 'War' }, { id: 'c', text: 'Tennis' },
              ], correct: 'a', why: 'Mandela eligió la paz y el diálogo, igual que los acuerdos de Esquipulas: el conflicto se supera hablando.' },
              { q: 'Why is Usain Bolt special?', options: [
                { id: 'a', text: 'He is a very fast runner with a world record' }, { id: 'b', text: 'He was a president' }, { id: 'c', text: 'He is a painter' },
              ], correct: 'a' },
            ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:7.2.4'], ambito: 'conocer', title: 'Manual de instituciones: ¿a quién acudir?',
            prompt: 'En Guatemala, varias instituciones **velan por la justicia y los derechos humanos**. El grupo de la feria prepara un **manual** con sus funciones. Toca cada ficha.' },
          { icon: 'Landmark', body: 'Conocerlas te ayuda a saber **a dónde acudir** si se violan tus derechos o los de tu familia.', reveal: [
            { icon: 'Shield', front: 'Procurador de los Derechos Humanos (PDH)', back: '**Defiende los derechos humanos**: recibe denuncias gratis, investiga y hace recomendaciones a las autoridades. Lo elige el Congreso.' },
            { icon: 'Search', front: 'Ministerio Público (MP)', back: '**Investiga los delitos** y **acusa** ante los jueces a quien los comete.' },
            { icon: 'Gavel', front: 'Organismo Judicial (OJ)', back: 'Sus jueces y magistrados **juzgan**: deciden cada caso según la ley.' },
            { icon: 'Briefcase', front: 'Instituto de la Defensa Pública Penal', back: 'Da un **abogado gratuito** a la persona acusada de un delito que no puede pagarlo.' },
            { icon: 'Baby', front: 'Procuraduría General de la Nación (PGN)', back: 'Representa y asesora al Estado. Su **Procuraduría de la Niñez y la Adolescencia** protege a niñas y niños cuyos derechos están en riesgo.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:7.2.4'], ambito: 'hacer',
            prompt: 'Completa el manual: une cada **situación** con la institución que debe atenderla.',
            explain: 'Cada institución tiene su función: el MP investiga, el OJ juzga, la Defensa Pública defiende, la PDH vigila los derechos humanos y la PGN protege a la niñez.' },
          { leftTitle: 'Situación', rightTitle: 'Institución', pairs: [
            { id: 'p1', left: 'Una oficina pública se niega a atender a una señora porque habla q\'eqchi\'', leftIcon: 'Languages', right: 'Procurador de los Derechos Humanos' },
            { id: 'p2', left: 'Hay que averiguar quién robó en el mercado', leftIcon: 'Search', right: 'Ministerio Público' },
            { id: 'p3', left: 'Un juez debe decidir si la persona acusada es culpable', leftIcon: 'Gavel', right: 'Organismo Judicial' },
            { id: 'p4', left: 'Un joven acusado no tiene dinero para un abogado', leftIcon: 'Briefcase', right: 'Instituto de la Defensa Pública Penal' },
            { id: 'p5', left: 'Una niña no recibe cuidado y corre peligro en su hogar', leftIcon: 'Baby', right: 'Procuraduría General de la Nación' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['l2', 'l1'], cnb: ['l2:5.4.5', 'l2:5.4.6', 'l2:5.4.7'], ambito: 'conocer', title: 'La noticia y el ojo crítico',
            prompt: 'En tu comunidad hay radio, perifoneo, periódico, televisión por cable y redes sociales. No todo lo que informa es una **noticia**, y no toda noticia es confiable. Toca cada tarjeta.' },
          { icon: 'Newspaper', body: 'Una **noticia** cuenta un **hecho reciente** de interés público. Un **texto informativo** (como una enciclopedia o un folleto) explica un tema que no depende de la fecha.', reveal: [
            { icon: 'Newspaper', front: 'Partes de la noticia', back: '**Titular** (llama la atención), **entrada** (resume lo más importante) y **cuerpo** (da los detalles).' },
            { icon: 'ListChecks', front: 'Las 6 preguntas', back: '¿**Qué** pasó? ¿**Quién**? ¿**Cuándo**? ¿**Dónde**? ¿**Cómo**? ¿**Por qué**?' },
            { icon: 'BookOpen', front: 'Otros textos informativos', back: 'Una enciclopedia, un folleto de salud o un informe explican un tema con datos, pero **no cuentan un suceso reciente**.' },
            { icon: 'Eye', front: 'Juicio crítico', back: '¿Quién lo publica? ¿Tiene fecha y fuente? ¿El titular exagera? ¿Mezcla opiniones con hechos? ¿Lo dicen otros medios?' },
            { icon: 'Radio', front: 'Uso responsable', back: 'Antes de **compartir**, verifica. Una noticia falsa puede causar miedo, dañar a personas o hacer que la comunidad tome malas decisiones.' },
          ] },
        ),
        S.reading(
          { fase: 'aplicar', areas: ['l2', 'ccss', 'pyd'], cnb: ['l2:5.4.5', 'l2:5.4.6', 'ccss:8.1.3'], ambito: 'hacer',
            prompt: 'Lee esta **noticia de ejemplo** (es ficticia) y responde con ojo crítico.' },
          { genre: 'Noticia', heading: 'Agricultores de Chiquimula pagan más por el fertilizante', passage:
            '**Esquipulas, 12 de marzo.** Agricultores de maíz y frijol de Chiquimula informaron ayer que el precio del saco de fertilizante subió cerca de una tercera parte en los últimos seis meses.\n\nSegún la cooperativa agrícola del municipio, el aumento se debe a que conflictos armados en otras regiones del mundo encarecieron la producción y el transporte de fertilizantes.\n\n"Tendremos que abonar menos o sembrar menos", explicó doña Rosa, agricultora de la aldea. La cooperativa organizará un taller para preparar abono orgánico con desechos de cosecha.',
            questions: [
              { q: '¿Por qué este texto es una noticia y no un texto de enciclopedia?', options: [
                { id: 'a', text: 'Porque cuenta un hecho reciente, con fecha, lugar y personas involucradas' },
                { id: 'b', text: 'Porque explica qué es un fertilizante' },
                { id: 'c', text: 'Porque cuenta un cuento inventado' },
              ], correct: 'a' },
              { q: '¿Qué relación de causa y efecto presenta la noticia?', options: [
                { id: 'a', text: 'Conflictos lejanos encarecen el fertilizante y afectan las cosechas en Guatemala' },
                { id: 'b', text: 'La lluvia provocó los conflictos' },
                { id: 'c', text: 'Los agricultores provocaron los conflictos' },
              ], correct: 'a', why: 'Un conflicto armado en otra parte del mundo puede tener efectos en la vida diaria de Guatemala.' },
              { q: 'Alguien la comparte con el titular "¡El fertilizante costará el triple mañana!". ¿Qué juicio crítico es correcto?', options: [
                { id: 'a', text: 'Exagera: la noticia habla de un aumento de una tercera parte en seis meses' },
                { id: 'b', text: 'Es igual a la noticia original' },
                { id: 'c', text: 'Es más confiable porque usa signos de exclamación' },
              ], correct: 'a', why: 'Un titular exagerado distorsiona el hecho. Siempre compara con la fuente original.' },
            ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['ccss', 'l1', 'fc'], cnb: ['ccss:7.2.4'], ambito: 'hacer',
            prompt: 'Escribe **una ficha para el manual de instituciones** de la feria. Elige una institución e incluye: nombre, qué hace, un ejemplo de cuándo acudir y un dato para encontrarla en tu departamento (puedes investigarlo en casa).' },
          { minWords: 35, placeholder: 'Institución: … Qué hace: … Cuándo acudir: … Dónde encontrarla: …',
            model: 'Institución: Procurador de los Derechos Humanos (PDH). Qué hace: defiende los derechos humanos, recibe denuncias gratis e investiga cuando una autoridad no respeta los derechos de las personas. Cuándo acudir: si en un centro de salud no atienden a una persona por su idioma o su origen. Dónde encontrarla: tiene auxiliaturas en los departamentos; en Chiquimula está en la cabecera departamental.',
            rubric: ['Nombra la institución correctamente', 'Explica su función con palabras propias', 'Da un ejemplo realista de cuándo acudir', 'Escribe con oraciones completas y buena ortografía'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:7.2.4'], prompt: 'Boleto de salida: ¿qué institución **investiga los delitos y acusa** ante los jueces?' },
          { options: [
            { id: 'a', text: 'El Ministerio Público', icon: 'Search' },
            { id: 'b', text: 'El Organismo Judicial', icon: 'Gavel', feedback: 'El Organismo Judicial juzga; no investiga ni acusa.' },
            { id: 'c', text: 'El Instituto de la Defensa Pública Penal', icon: 'Briefcase', feedback: 'La Defensa Pública defiende a la persona acusada.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l2', 'l1'], cnb: ['l2:5.4.6', 'l2:5.4.7'], prompt: 'En un grupo de mensajes llega: "¡URGENTE! Mañana cierran todas las escuelas del país. Compártelo". ¿Qué acciones muestran un **uso crítico** de los medios? Elige todas las correctas.' },
          { multiple: true, options: [
            { id: 'a', text: 'Buscar si lo informa el Ministerio de Educación o un medio serio', icon: 'Search' },
            { id: 'b', text: 'Revisar si tiene fecha y fuente', icon: 'Calendar' },
            { id: 'c', text: 'Preguntar a la maestra o al director', icon: 'School' },
            { id: 'd', text: 'Compartirlo rápido a todos tus contactos', icon: 'Megaphone', feedback: 'Compartir sin verificar puede difundir una noticia falsa.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        cierre({ areas: ['fc', 'ccss', 'l2'], cnb: ['ccss:8.1.3'] }, ['Explico causas y efectos de los conflictos armados', 'Sé a qué institución acudir según la situación', 'Diferencio una noticia de otro texto informativo', 'Verifico antes de compartir una noticia'],
          ['Resolveré mis desacuerdos dialogando', 'Revisaré la fuente de la próxima noticia que reciba', 'Averiguaré dónde está la PDH en mi departamento']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's37-d3-palabras-escenarios',
      title: 'Palabras y escenarios que cruzan fronteras',
      icon: 'Drama',
      minutes: 15,
      day: 3,
      gancho: '¿Alguna vez has visto un baile tradicional en la feria de tu pueblo? ¿Qué historia contaba?',
      objetivos: ['Usar los verboides (infinitivo, gerundio y participio) en tus textos', 'Reconocer preposiciones e interjecciones', 'Clasificar oraciones y analizar sus elementos', 'Comparar obras teatrales de Guatemala y de la región y valorar a grandes artistas'],
      resumen: [
        'Los verboides son formas no personales del verbo: infinitivo (-ar, -er, -ir: bailar), gerundio (-ando, -iendo: bailando) y participio (-ado, -ido: bailado; irregulares: escrito, hecho, visto).',
        'Las preposiciones (a, con, de, desde, en, entre, hacia, hasta, para, por, sin, sobre…) enlazan palabras. Las interjecciones (¡ay!, ¡bravo!, ¡oh!) expresan emociones.',
        'La oración bimembre tiene sujeto y predicado; la unimembre no se puede dividir (¡Buenos días!). La simple tiene un verbo conjugado; la compuesta, dos o más. El núcleo del sujeto es su palabra principal; el núcleo del predicado es el verbo; el objeto directo recibe la acción y el indirecto indica a quién o para quién.',
        'El Rabinal Achí (prehispánico, en idioma achi), el Baile de la Conquista (época colonial) y El Güegüense de Nicaragua son obras de teatro-danza de la región. Carlos Mérida y Efraín Recinos son grandes artistas guatemaltecos.',
      ],
      media: {
        id: 's37-d3-teatro', kind: 'image', title: 'Teatro y danza de la región', aspect: '16:9',
        alt: 'Tres escenas ilustradas: el Rabinal Achí con máscaras y trompetas, el Baile de la Conquista con trajes coloridos y El Güegüense de Nicaragua con máscaras de rostro claro.',
        brief: 'Ilustración en tres paneles, estilo acuarela respetuoso. (1) "Rabinal Achí – Rabinal, Baja Verapaz": danzantes con máscaras de madera y tocados de plumas, músicos con trompetas largas y tambor de madera (tun), plaza con iglesia colonial al fondo. (2) "Baile de la Conquista – Guatemala": danzantes con trajes brillantes, espejos y máscaras, personaje de Tecún Umán con quetzal en el tocado. (3) "El Güegüense – Nicaragua": personajes con máscaras de rostro claro y bigote, sombreros y cascabeles. No usar fotografías de personas reales; respetar los elementos sagrados.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1', 'art'], cnb: ['l1:7.1.4'], ambito: 'conocer', title: 'Los verboides',
            prompt: 'El grupo escribe el programa de la feria: _"Después de **bailar**, los danzantes siguieron **saludando** al público, **emocionados**."_ Las palabras en negrita vienen de verbos, pero **no dicen quién hace la acción**. Son **verboides**. Toca cada tarjeta.' },
          { icon: 'PenLine', body: 'El verbo conjugado dice quién y cuándo (_bailó, bailamos_). El verboide no cambia según la persona.', reveal: [
            { icon: 'CircleDot', front: 'Infinitivo', back: 'Termina en **-ar, -er, -ir**: bailar, correr, vivir. Es el "nombre" del verbo.' },
            { icon: 'RefreshCw', front: 'Gerundio', back: 'Termina en **-ando, -iendo**: bailando, corriendo, viviendo. Indica una acción en curso.' },
            { icon: 'Check', front: 'Participio', back: 'Termina en **-ado, -ido**: bailado, corrido, vivido. Hay irregulares: **escrito, hecho, dicho, visto, puesto, roto, abierto**.' },
            { icon: 'Lightbulb', front: '¿Para qué sirven?', back: 'Hacen tus textos más ricos: "**Al llegar**, vimos a los músicos **tocando**; la plaza estaba **adornada**."' },
          ] },
        ),
        S.highlight(
          { fase: 'construir', areas: ['l1', 'art'], cnb: ['l1:7.1.4'], ambito: 'hacer',
            prompt: 'Toca **todos los verboides** del texto (infinitivos, gerundios y participios). No toques los verbos conjugados.',
            hint: 'Busca las terminaciones -ar, -er, -ir, -ando, -iendo, -ado, -ido, y los participios irregulares.',
            explain: 'Los verboides eran: presentar, bailando, tocando, emocionado, aplaudir, escrito. Verbos conjugados como "viajó", "llegaron" o "quiso" sí dicen quién hizo la acción.' },
          { target: 'verboides', text: 'El grupo de Rabinal viajó a Esquipulas para {presentar} su obra. Los danzantes llegaron {bailando} y los músicos siguieron {tocando} la trompeta. El público, {emocionado}, quiso {aplaudir} al final. El programa estaba {escrito} en español y en achi.' },
        ),
        S.explain(
          { fase: 'construir', areas: ['l1'], cnb: ['l1:7.1.5', 'l1:7.2.5', 'l1:7.2.7'], ambito: 'conocer', title: 'La oración por dentro',
            prompt: 'Para escribir bien el programa, analiza cómo se construyen las oraciones. Toca cada tarjeta.',
            media: { id: 's37-d3-oracion', kind: 'diagram', title: 'Las partes de la oración', aspect: '16:9',
              alt: 'Oración "Los danzantes de Rabinal presentaron el baile al público" dividida en sujeto y predicado, con sus núcleos, modificadores y objetos señalados con flechas de colores.',
              brief: 'Diagrama tipo árbol sobre fondo blanco. Oración: "Los danzantes de Rabinal presentaron el baile al público." Una llave azul abarca "Los danzantes de Rabinal" (SUJETO) y una llave verde "presentaron el baile al público" (PREDICADO). Debajo, rótulos con flechas: "Los" = modificador directo; "danzantes" = núcleo del sujeto (en negrita); "de Rabinal" = modificador indirecto (con preposición resaltada); "presentaron" = núcleo del predicado (verbo); "el baile" = objeto directo; "al público" = objeto indirecto. Colores distintos para cada función, letra grande.' } },
          { icon: 'Blocks', body: 'Las oraciones son como construcciones: cada pieza tiene una función.', reveal: [
            { icon: 'Link', front: 'Preposiciones', back: 'Palabras que **enlazan**: a, ante, bajo, con, contra, de, desde, en, entre, hacia, hasta, para, por, según, sin, sobre, tras. Ejemplo: "danzantes **de** Rabinal".' },
            { icon: 'Megaphone', front: 'Interjecciones', back: 'Expresan **emociones** y van entre signos de exclamación: **¡Ay!, ¡Bravo!, ¡Oh!, ¡Uf!**' },
            { icon: 'Split', front: 'Bimembre y unimembre', back: '**Bimembre**: tiene sujeto y predicado ("El público aplaudió"). **Unimembre**: no se puede dividir ("¡Bravo!", "Llueve", "¡Buenos días!").' },
            { icon: 'Layers', front: 'Simple y compuesta', back: '**Simple**: un solo verbo conjugado. **Compuesta**: dos o más verbos conjugados unidos, por ejemplo con "y", "pero", "porque".' },
            { icon: 'Target', front: 'Núcleos y objetos', back: '**Núcleo del sujeto**: la palabra principal (sustantivo). **Núcleo del predicado**: el verbo. **Objeto directo**: qué recibe la acción (¿qué?). **Objeto indirecto**: a quién o para quién.' },
            { icon: 'Plus', front: 'Modificadores', back: 'Acompañan al núcleo del sujeto. El **modificador directo** se une sin preposición (**los** danzantes). El **modificador indirecto** empieza con una preposición (danzantes **de Rabinal**).' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.5', 'l1:7.1.5'], ambito: 'hacer',
            prompt: 'Clasifica las oraciones del programa de la feria.',
            hint: 'Primero pregúntate si puedes separar sujeto y predicado. Luego cuenta los verbos conjugados.',
            explain: 'Las interjecciones y los saludos forman oraciones unimembres. Si hay dos verbos conjugados, la oración es compuesta.' },
          { buckets: [
            { id: 'uni', label: 'Unimembre', icon: 'Circle', color: 'var(--area-l2)' },
            { id: 'sim', label: 'Bimembre simple', icon: 'Minus', color: 'var(--area-l1)' },
            { id: 'com', label: 'Compuesta', icon: 'Layers', color: 'var(--area-art)' },
          ], items: [
            { id: 'o1', text: '¡Bravo!', bucket: 'uni' },
            { id: 'o2', text: '¡Bienvenidos a la feria!', bucket: 'uni' },
            { id: 'o3', text: 'La marimba sonó toda la tarde.', bucket: 'sim' },
            { id: 'o4', text: 'Los niños de Esquipulas pintaron un mural.', bucket: 'sim' },
            { id: 'o5', text: 'Los danzantes bailaron y el público aplaudió.', bucket: 'com', feedback: 'Tiene dos verbos conjugados: "bailaron" y "aplaudió".' },
            { id: 'o6', text: 'Llegamos temprano porque queríamos ver el baile.', bucket: 'com' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.7', 'l1:7.1.5'], ambito: 'hacer',
            prompt: 'Analiza la oración: _"Los danzantes de Rabinal presentaron el baile al público."_ Une cada **parte** con su **función**.',
            explain: 'El modificador indirecto empieza con una preposición ("de"). El objeto directo responde a "¿qué presentaron?" y el indirecto a "¿a quién?".' },
          { leftTitle: 'Parte', rightTitle: 'Función', pairs: [
            { id: 'ns', left: 'danzantes', right: 'Núcleo del sujeto' },
            { id: 'mi', left: 'de Rabinal', right: 'Modificador indirecto' },
            { id: 'np', left: 'presentaron', right: 'Núcleo del predicado' },
            { id: 'od', left: 'el baile', right: 'Objeto directo' },
            { id: 'oi', left: 'al público', right: 'Objeto indirecto' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['art', 'ccss'], cnb: ['art:4.2.2', 'art:3.3.3'], ambito: 'conocer', title: 'Escenarios y artistas de la región',
            prompt: 'En la feria se presentarán obras de **teatro-danza** de Guatemala y de un país vecino, y una exposición sobre **grandes artistas**. Toca cada tarjeta.' },
          { icon: 'Theater', body: 'Comparar obras nos ayuda a ver cómo cada pueblo cuenta su historia en escena.', reveal: [
            { icon: 'Drum', front: 'Rabinal Achí (Guatemala)', back: 'Teatro-danza de **origen prehispánico**, en **idioma achi**, de Rabinal, Baja Verapaz. Narra el juicio a un guerrero. Lo acompañan trompetas y el tun. La UNESCO lo reconoce como patrimonio de la humanidad.' },
            { icon: 'Crown', front: 'Baile de la Conquista (Guatemala)', back: 'Surgió en la **época colonial**. Representa la llegada de los españoles y a **Tecún Umán**. Se baila en ferias patronales con trajes brillantes y máscaras.' },
            { icon: 'Smile', front: 'El Güegüense (Nicaragua)', back: 'Comedia bailada de la **época colonial**, mezcla español y náhuatl. Su personaje principal se burla con astucia de las autoridades. También es patrimonio de la humanidad.' },
            { icon: 'Palette', front: 'Artistas de Guatemala', back: '**Carlos Mérida** pintó con formas geométricas inspiradas en la cultura maya. **Efraín Recinos** diseñó el Centro Cultural Miguel Ángel Asturias. Junto con **Roberto González Goyri** y **Dagoberto Vásquez**, decoraron con murales y relieves los edificios del Centro Cívico.' },
            { icon: 'Brush', front: 'Artistas del mundo', back: '**Leonardo da Vinci** (Italia) pintó la Mona Lisa; **Vincent van Gogh** (Países Bajos), La noche estrellada; **Frida Kahlo** (México), autorretratos llenos de color.' },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['art', 'l1'], cnb: ['art:4.2.2', 'l1:7.2.5', 'l1:7.1.4', 'l1:7.2.8'], ambito: 'hacer',
            prompt: 'Escribe para el programa de la feria un párrafo que **compare** el Rabinal Achí y El Güegüense (origen, idioma y qué representan). Usa al menos **una oración compuesta**, **un verboide** y **una comparación** (_más… que_, _tanto… como_).' },
          { minWords: 35, placeholder: 'El Rabinal Achí y El Güegüense…',
            model: 'El Rabinal Achí y El Güegüense son obras de teatro-danza de la región. El Rabinal Achí es más antiguo que El Güegüense, porque su origen es prehispánico. El Rabinal Achí se representa en idioma achi, pero El Güegüense mezcla español y náhuatl. Hoy las dos se siguen bailando en las fiestas, acompañadas de música y máscaras.',
            rubric: ['Compara las dos obras en origen, idioma o tema', 'Usa al menos una oración compuesta', 'Usa al menos un verboide (infinitivo, gerundio o participio)', 'Usa una conjunción comparativa', 'Escribe con buena ortografía y puntuación'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.1.4', 'l1:7.1.5'], prompt: 'Boleto de salida: en la oración _"Seguimos caminando hacia la plaza"_, ¿qué son **caminando** y **hacia**?' },
          { options: [
            { id: 'a', text: 'Caminando es un gerundio y hacia es una preposición' },
            { id: 'b', text: 'Caminando es un infinitivo y hacia es una interjección', feedback: 'El infinitivo termina en -ar, -er, -ir; "caminando" termina en -ando.' },
            { id: 'c', text: 'Caminando es un verbo conjugado y hacia es un sustantivo', feedback: '"Caminando" no dice quién camina: es un verboide. "Hacia" enlaza palabras.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['art', 'l1'], cnb: ['art:4.2.2', 'l1:7.2.5', 'l1:7.2.7'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'El Rabinal Achí se representa en idioma achi.', answer: true },
            { text: 'El Güegüense es una obra de Guatemala.', answer: false, why: 'El Güegüense es de Nicaragua.' },
            { text: '"¡Buenos días!" es una oración unimembre.', answer: true },
            { text: 'En "Carlos Mérida pintó murales", el núcleo del sujeto es "murales".', answer: false, why: 'El núcleo del sujeto es el nombre propio "Carlos Mérida"; "murales" es el objeto directo.' },
          ] },
        ),
        cierre({ areas: ['art', 'l1'], cnb: ['art:3.3.3'] }, ['Uso infinitivos, gerundios y participios', 'Reconozco preposiciones e interjecciones', 'Analizo el sujeto y el predicado de una oración', 'Comparo obras de teatro-danza y valoro a nuestros artistas'],
          ['Buscaré una obra de un artista guatemalteco y la describiré en casa', 'Preguntaré qué bailes tradicionales se presentan en la feria de mi pueblo', 'Revisaré mis oraciones buscando el núcleo del sujeto']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's37-d4-trifinio-energia',
      title: 'Trifinio: energía, alimento y juego para todos',
      icon: 'Trees',
      minutes: 15,
      day: 4,
      gancho: 'Después de jugar fútbol en el recreo, ¿por qué te da tanta hambre y calor?',
      objetivos: ['Relacionar la actividad física con la energía y promover la seguridad alimentaria y nutricional', 'Investigar usos prácticos del calendario agrícola y sagrado maya', 'Identificar acciones que protegen el ambiente y tendencias de responsabilidad socioambiental', 'Adaptar las reglas del juego para incluir a todas las personas'],
      resumen: [
        'Los alimentos tienen energía química que el cuerpo transforma en movimiento (energía cinética) y calor; mientras más intensa es la actividad, más energía gasta. Hay seguridad alimentaria y nutricional cuando todas las personas tienen siempre alimentos suficientes, variados y seguros, y su cuerpo los aprovecha. Sus pilares: disponibilidad, acceso, consumo y aprovechamiento biológico.',
        'El calendario agrícola maya (Haab\') tiene 365 días: 18 periodos de 20 días más 5 días. El sagrado (Cholq\'ij) tiene 260 días: 13 números × 20 días. Se usan para organizar la siembra, las celebraciones y la vida comunitaria.',
        'Proteger el ambiente: reforestar, cuidar los nacimientos de agua, no quemar, reducir, reutilizar y reciclar. Tendencias actuales: economía circular, eliminar plásticos de un solo uso, energías renovables y consumo local. En el juego, las reglas se adaptan al espacio y a las personas, y el esfuerzo se valora al ganar o perder.',
      ],
      media: {
        id: 's37-d4-energia', kind: 'animation', title: 'Del sol a tus piernas', aspect: '16:9', duration: 45,
        alt: 'Animación que sigue la energía desde el sol hasta una planta de maíz, una tortilla y una niña que corre y suda.',
        brief: 'Animación 2D de 45 s. Un rayo de sol (energía luminosa) llega a una milpa; las hojas brillan (fotosíntesis) y la mazorca se llena. Una señora cocina tortillas en el comal; una niña come una tortilla con frijol (energía química). La niña corre en la cancha: flechas amarillas salen de sus piernas (energía de movimiento) y ondas rojas de su piel (calor). Rótulos: "luz → química → movimiento + calor". Narración en español y subtítulos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'ef'], cnb: ['cnt:7.1.4', 'ef:3.2.2'], ambito: 'conocer', title: 'Energía para moverte',
            prompt: 'Para la feria habrá un torneo. Pero antes de correr, descubre **de dónde sale la energía** de tu cuerpo. Toca cada tarjeta.' },
          { icon: 'Zap', body: 'La energía **no se crea ni se destruye: se transforma**. Tu cuerpo transforma la energía de los alimentos.', reveal: [
            { icon: 'Wheat', front: 'Energía química', back: 'Está guardada en los **alimentos**: tortilla, frijol, arroz, frutas. Se mide en **kilocalorías**.' },
            { icon: 'Footprints', front: 'Energía de movimiento', back: 'Tus músculos transforman esa energía en **movimiento** (energía cinética). Correr gasta más energía que caminar.' },
            { icon: 'Thermometer', front: 'Calor', back: 'Parte de la energía se convierte en **calor**: por eso sudas y te sonrojas al hacer ejercicio.' },
            { icon: 'ShieldCheck', front: 'Seguridad alimentaria', back: 'Para tener energía, todas las personas necesitan **siempre** alimentos **suficientes, variados y seguros**. Sus pilares: **disponibilidad** (que haya), **acceso** (poder conseguirlos), **consumo** (elegir bien) y **aprovechamiento biológico** (un cuerpo sano que los aproveche).' },
          ] },
        ),
        S.pulse(
          { fase: 'construir', areas: ['ef', 'cnt'], cnb: ['cnt:7.1.4'], ambito: 'hacer',
            prompt: 'Comprueba la relación entre **actividad y energía**. Mide tu pulso en reposo, luego después de caminar en tu lugar y después de saltar. ¿Cuándo trabajó más tu corazón para llevar energía a los músculos?' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después de caminar en tu lugar', exercise: { name: 'Caminar en el lugar', icon: 'Footprints', seconds: 30 } },
            { label: 'Después de saltar', exercise: { name: 'Saltos suaves', icon: 'PersonStanding', seconds: 30 } },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['cnt', 'ef'], cnb: ['cnt:7.1.4'], ambito: 'conocer',
            prompt: 'Ordena el **camino de la energía**, desde su origen hasta tu carrera en la cancha.',
            hint: 'Todo empieza en el cielo y termina en tus músculos.',
            explain: 'La energía luminosa del Sol se guarda como energía química en el maíz; al comer, tu cuerpo la transforma en movimiento y calor.' },
          { items: [
            { id: 'e1', text: 'El Sol ilumina la milpa', icon: 'Sun' },
            { id: 'e2', text: 'El maíz guarda energía química en sus granos', icon: 'Wheat' },
            { id: 'e3', text: 'Comes una tortilla con frijol', icon: 'Utensils' },
            { id: 'e4', text: 'Tus músculos transforman la energía', icon: 'Dumbbell' },
            { id: 'e5', text: 'Corres y tu cuerpo se calienta', icon: 'Footprints' },
          ], labels: { start: 'Origen', end: 'Final' } },
        ),
        S.maya(
          { fase: 'construir', areas: ['mat', 'ccss', 'ef'], cnb: ['mat:7.3.2'], ambito: 'hacer',
            prompt: 'Muchas familias agricultoras organizan la **siembra** según las lluvias y el **calendario agrícola maya (Haab\')**, de **365 días**: **18 periodos de 20 días** (winal) más **5 días** al final (Wayeb\'). El **calendario sagrado (Cholq\'ij)** tiene **260 días** (13 × 20) y lo usan los guías espirituales (ajq\'ijab\') para las ceremonias y para conocer el nawal de cada persona. Construye **365** en numeración maya.',
            hint: 'En el nivel de arriba van los grupos de 20 (¡los 18 periodos!). En el de abajo, los días que sobran.',
            explain: '365 = 18 × 20 + 5. Arriba: 18 (tres barras y tres puntos). Abajo: 5 (una barra). ¡La estructura del número es la misma que la del calendario!' },
          { mode: 'build', target: 365, levels: 2, scaffold: true },
        ),
        S.explain(
          { fase: 'construir', areas: ['cnt', 'pyd', 'ccss'], cnb: ['cnt:6.4.4', 'pyd:5.3.1'], ambito: 'conocer', title: 'Trifinio: un bosque de tres países',
            prompt: 'En la **Reserva de la Biosfera Trifinio Fraternidad** se unen Guatemala, El Salvador y Honduras. En su bosque nuboso nacen ríos como el **Lempa**, que lleva agua a El Salvador. Los tres países la cuidan juntos. Toca cada tarjeta.',
            media: { id: 's37-d4-trifinio', kind: 'image', title: 'El bosque nuboso del Trifinio', aspect: '4:3',
              alt: 'Bosque nuboso con árboles cubiertos de musgo, helechos gigantes y un pequeño arroyo; al fondo, un hito con tres banderas.',
              brief: 'Ilustración realista del bosque nuboso del Trifinio: árboles altos con musgo y bromelias, helechos arborescentes, neblina, un arroyo que nace entre piedras. Al fondo, un hito de concreto con las banderas de Guatemala, El Salvador y Honduras. En primer plano, un grupo de guardabosques jóvenes (mujer y hombre) sembrando arbolitos. Rótulo: "Aquí nace el agua de tres países". Sin logotipos.' } },
          { icon: 'Trees', body: 'Proteger el ambiente es **responsabilidad de todos**: personas, comunidades, empresas y gobiernos.', reveal: [
            { icon: 'Sprout', front: 'Acciones que protegen', back: '**Reforestar**, cuidar los **nacimientos de agua**, no hacer **quemas**, no tirar basura en ríos, usar leña de forma responsable, respetar las **áreas protegidas**.' },
            { icon: 'Recycle', front: 'Economía circular', back: 'Una tendencia actual: **reducir, reutilizar, reparar y reciclar** para que los materiales vuelvan a usarse y no se conviertan en basura.' },
            { icon: 'Ban', front: 'Adiós al plástico de un solo uso', back: 'San Pedro La Laguna (Sololá) fue de los primeros municipios en prohibir bolsas y pajillas plásticas; hoy una norma nacional prohíbe bolsas, pajillas y platos desechables de plástico y duroport.' },
            { icon: 'Sun', front: 'Energías renovables', back: 'Paneles solares, energía del agua y del viento: producen electricidad sin agotar los recursos y contaminan menos.' },
            { icon: 'Store', front: 'Consumo local y responsable', back: 'Comprar productos de la comunidad y a empresas que **cuidan el agua y tratan bien a sus trabajadores** es parte de la **responsabilidad socioambiental**.' },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['cnt', 'pyd'], cnb: ['cnt:6.4.4', 'pyd:5.3.1'], ambito: 'convivir',
            prompt: 'La comisión ambiental de la feria revisa sus planes. Clasifica cada acción.',
            explain: 'Las acciones que protegen el ambiente evitan que se pierdan el bosque y el agua. Las que lo dañan pueden cambiarse por alternativas responsables.' },
          { buckets: [
            { id: 'pro', label: 'Protege el ambiente', icon: 'Sprout', color: 'var(--c-ok)' },
            { id: 'dan', label: 'Daña el ambiente', icon: 'Flame', color: 'var(--area-cnt)' },
          ], items: [
            { id: 'a1', text: 'Servir la refacción en hojas de mashán y platos lavables', bucket: 'pro' },
            { id: 'a2', text: 'Quemar la basura de la feria al final del día', bucket: 'dan', feedback: 'Quemar basura contamina el aire y puede provocar incendios forestales.' },
            { id: 'a3', text: 'Sembrar arbolitos junto al nacimiento de agua', bucket: 'pro' },
            { id: 'a4', text: 'Regalar pajillas y bolsas plásticas a cada visitante', bucket: 'dan' },
            { id: 'a5', text: 'Comprar los premios a artesanos de la comunidad', bucket: 'pro', feedback: 'El consumo local reduce el transporte y apoya a las familias: es responsabilidad socioambiental.' },
            { id: 'a6', text: 'Lavar las ollas en el río con detergente', bucket: 'dan' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['ef', 'fc'], cnb: ['ef:4.1.11', 'ef:4.1.7', 'ef:4.1.3'], ambito: 'convivir', prompt: 'Llega el torneo de la feria. ¿Qué harías tú?' },
          { scene: { icon: 'Users', text: 'El torneo de fútbol será en la **cancha pequeña** de la escuela y hay 30 jugadores. **Mateo** usa silla de ruedas y quiere jugar. Tu equipo pierde 2 a 0 y alguien dice: "Mejor que Mateo no juegue, así ganamos".' }, options: [
            { id: 'a', icon: 'EyeOff', text: 'Dejar a Mateo fuera para intentar ganar', consequence: 'Mateo se queda mirando desde la orilla. Aunque empataran, el equipo no se sentiría orgulloso: ganar sin respetar a todos no es ganar.', values: ['Exclusión'], constructive: false },
            { id: 'b', icon: 'HeartHandshake', text: 'Proponer reglas adaptadas: equipos de 5 que rotan, balón más grande y pases a ras del suelo para que todos participen', consequence: 'Todos juegan por turnos en la cancha pequeña. Mateo da un pase que termina en gol. Al final pierden 3 a 2, pero se dan la mano con el otro equipo y celebran el esfuerzo.', values: ['Inclusión', 'Solidaridad', 'Respeto', 'Juego limpio'], constructive: true },
            { id: 'c', icon: 'Megaphone', text: 'Enojarse con el árbitro y abandonar el partido', consequence: 'El torneo se interrumpe y nadie disfruta. Perder es parte del juego; abandonar no enseña nada.', values: ['Frustración'], constructive: false },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt', 'ef'], cnb: ['cnt:7.1.4'], prompt: 'Boleto de salida: ¿qué transformación de energía ocurre cuando corres?' },
          { options: [
            { id: 'a', text: 'La energía química de los alimentos se transforma en movimiento y calor', icon: 'Zap' },
            { id: 'b', text: 'El movimiento se transforma en alimento', icon: 'Utensils', feedback: 'Es al revés: el alimento da la energía para moverte.' },
            { id: 'c', text: 'Correr no gasta energía', icon: 'X', feedback: 'Correr gasta más energía que caminar o estar en reposo.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['mat', 'cnt', 'ef'], cnb: ['mat:7.3.2', 'cnt:6.4.4', 'ef:4.1.7'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'El calendario agrícola maya (Haab\') tiene 18 periodos de 20 días más 5 días.', answer: true },
            { text: 'El calendario sagrado (Cholq\'ij) tiene 365 días.', answer: false, why: 'El Cholq\'ij tiene 260 días: 13 × 20.' },
            { text: 'Hacer quemas protege los nacimientos de agua.', answer: false, why: 'Las quemas destruyen el bosque que protege el agua.' },
            { text: 'Si la cancha es pequeña, se puede reducir el número de jugadores por equipo.', answer: true },
          ] },
        ),
        cierre({ areas: ['ef', 'cnt', 'pyd'], cnb: ['ef:3.2.2', 'ef:4.1.3'] }, ['Explico cómo mi cuerpo transforma la energía', 'Conozco los pilares de la seguridad alimentaria', 'Relaciono el calendario maya con la siembra', 'Adapto las reglas para que todos jueguen y acepto ganar o perder'],
          ['Compartiré con mi familia qué significa seguridad alimentaria', 'Evitaré los plásticos de un solo uso esta semana', 'Felicitaré al otro equipo, gane o pierda']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's37-d5-reto',
      title: 'Reto de la semana 37',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Puente de la región" (70 % o más)'],
      resumen: ['Superé el reto de la semana 37: integración, población, justicia, noticias, lenguaje, teatro, energía, ambiente y juego inclusivo.'],
      media: {
        id: 's37-d5-reto', kind: 'image', title: 'Medalla Puente de la región', aspect: '1:1',
        alt: 'Medalla circular con el mapa de Centroamérica y una paloma blanca.',
        brief: 'Ilustración de medalla circular dorada con relieve del mapa de Centroamérica; sobre el punto del Trifinio, una paloma blanca con una hoja en el pico. Cinta con franjas azul y blanco. Fondo transparente, 1024×1024, sin textos pequeños.',
      },
      steps: [
        S.sort({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.1.3'], prompt: 'Clasifica: ¿causa o efecto de un conflicto armado?' },
          { buckets: [{ id: 'c', label: 'Causa', icon: 'Flame' }, { id: 'e', label: 'Efecto', icon: 'Users' }],
            items: [
              { id: 'a', text: 'Disputa por un territorio', bucket: 'c' },
              { id: 'b', text: 'Familias refugiadas en otro país', bucket: 'e' },
              { id: 'd', text: 'Discriminación por el origen o la religión', bucket: 'c' },
              { id: 'f', text: 'Suben los precios de los alimentos en otros países', bucket: 'e' },
            ] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:7.4.1'], prompt: 'Supongamos que **1 quetzal = 3 lempiras**. Una artesana hondureña vende un jarrón en **90 lempiras**. ¿Cuántos **quetzales** son?' },
          { answer: 30, unit: 'quetzales', misconceptions: [{ value: 270, msg: 'Multiplicaste. Para pasar de lempiras a quetzales, divide entre 3.' }] }),
        S.number({ fase: 'comprobar', areas: ['cnt', 'mat'], cnb: ['cnt:6.5.4'], prompt: 'Supongamos que un municipio de **20,000 habitantes** tuvo **100 defunciones** en un año. ¿Cuál es su **tasa de mortalidad** por cada 1,000 habitantes?' },
          { answer: 5, unit: 'por mil' }),
        S.choice({ fase: 'comprobar', areas: ['ccss', 'fc'], cnb: ['ccss:8.3.4', 'fc:5.3.2'], prompt: '¿Qué tres aspectos combina el Índice de Desarrollo Humano?' },
          { options: [{ id: 'a', text: 'Salud, educación e ingresos' }, { id: 'b', text: 'Clima, volcanes y ríos' }, { id: 'c', text: 'Deportes, música y turismo' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:7.2.4'], prompt: 'Une cada institución con su función.' },
          { pairs: [
            { id: 'pdh', left: 'Procurador de los Derechos Humanos', right: 'Recibe denuncias y defiende los derechos humanos' },
            { id: 'oj', left: 'Organismo Judicial', right: 'Juzga los casos según la ley' },
            { id: 'idpp', left: 'Defensa Pública Penal', right: 'Da abogado gratuito a la persona acusada' },
          ] }),
        S.order({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.4.5'], prompt: 'Ordena las partes de una noticia, de arriba hacia abajo.' },
          { items: [{ id: 't', text: 'Titular' }, { id: 'e', text: 'Entrada (resume lo más importante)' }, { id: 'c', text: 'Cuerpo (detalles)' }], labels: { start: 'Arriba', end: 'Abajo' } }),
        S.sort({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.1.4'], prompt: 'Clasifica los verboides.' },
          { buckets: [{ id: 'i', label: 'Infinitivo', icon: 'CircleDot' }, { id: 'g', label: 'Gerundio', icon: 'RefreshCw' }, { id: 'p', label: 'Participio', icon: 'Check' }],
            items: [
              { id: 'a', text: 'sembrar', bucket: 'i' }, { id: 'b', text: 'sembrando', bucket: 'g' }, { id: 'c', text: 'sembrado', bucket: 'p' },
              { id: 'd', text: 'escrito', bucket: 'p' }, { id: 'f', text: 'leyendo', bucket: 'g' }, { id: 'h', text: 'vivir', bucket: 'i' },
            ] }),
        S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:5.2.1', 'l3:5.1.3'], prompt: 'Completa el texto en inglés.' },
          { text: 'Nelson Mandela was from South [[Africa]]. He chose [[peace]] and dialogue. Usain Bolt is a fast [[runner]] from Jamaica.', distractors: ['war', 'painter'] }),
        S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:4.2.2'], prompt: 'Al comparar el **Baile de la Conquista** con **El Güegüense**, ¿qué afirmación es correcta?' },
          { options: [{ id: 'a', text: 'Los dos surgieron en la época colonial, pero uno es de Guatemala y el otro de Nicaragua' }, { id: 'b', text: 'Los dos son de origen prehispánico y se representan en idioma achi' }, { id: 'c', text: 'Los dos son obras de Nicaragua que se burlan de las autoridades' }], correct: ['a'] }),
        S.tf({ fase: 'comprobar', areas: ['pyd', 'cnt', 'ef'], cnb: ['pyd:5.3.1', 'cnt:6.4.4', 'cnt:7.1.4', 'ef:4.1.11', 'ef:4.1.7'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'La economía circular es una tendencia actual que busca reducir, reutilizar, reparar y reciclar.', answer: true },
            { text: 'Quemar la basura es una buena forma de proteger el bosque.', answer: false, why: 'Las quemas contaminan el aire y pueden provocar incendios forestales.' },
            { text: 'Estar sentado gasta más energía que saltar la cuerda.', answer: false, why: 'Mientras más intensa es la actividad, más energía gasta el cuerpo.' },
            { text: 'Para que juegue una compañera que usa muletas, el grupo puede adaptar las reglas del juego.', answer: true },
          ] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 4 */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.3.1'], prompt: '¿Qué acuerdo permite viajar entre Guatemala, El Salvador, Honduras y Nicaragua con el documento de identidad?' },
      { options: [{ id: 'a', text: 'El CA-4' }, { id: 'b', text: 'El Mercado Común Europeo' }, { id: 'c', text: 'La Constitución de México' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:7.4.1'], prompt: 'Supongamos que **1 euro = Q8.50**. Una turista cambia **10 euros**. ¿Cuántos quetzales recibe?' },
      { answer: 85, unit: 'quetzales', allowDecimal: true }),
    S.chart({ fase: 'comprobar', areas: ['cnt', 'mat'], cnb: ['cnt:6.5.4'], prompt: 'Supongamos estas tasas de un municipio (por cada 1,000 habitantes): natalidad **25**, mortalidad **10**. Grafica las dos tasas y también el **crecimiento natural**.' },
      { categories: [{ id: 'n', label: 'Natalidad', icon: 'Baby' }, { id: 'm', label: 'Mortalidad', icon: 'HeartPulse' }, { id: 'c', label: 'Crecimiento natural', icon: 'TrendingUp' }], data: [25, 10, 15], max: 30, step: 5, unit: 'por mil' }),
    S.tf({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.3.4', 'ccss:8.1.3'], prompt: '¿Verdadero o falso?' },
      { statements: [
        { text: 'El IDH va de 0 a 1.', answer: true },
        { text: 'Guatemala tiene un IDH muy alto.', answer: false, why: 'Guatemala tiene un IDH de nivel medio.' },
        { text: 'Un conflicto armado lejano puede subir los precios en Guatemala.', answer: true },
      ] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:7.2.4'], prompt: 'Si una autoridad no respeta los derechos de una persona, ¿a qué institución puede presentar una denuncia gratuita?' },
      { options: [{ id: 'a', text: 'Al Procurador de los Derechos Humanos' }, { id: 'b', text: 'Al Parlamento Centroamericano' }, { id: 'c', text: 'Al Mercado Común Centroamericano' }], correct: ['a'] }),
    S.sort({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.4.5'], prompt: '¿Noticia u otro texto informativo?' },
      { buckets: [{ id: 'n', label: 'Noticia', icon: 'Newspaper' }, { id: 'i', label: 'Otro texto informativo', icon: 'BookOpen' }],
        items: [
          { id: 'a', text: 'Ayer, bomberos rescataron a una familia tras la crecida de un río en Izabal.', bucket: 'n' },
          { id: 'b', text: 'El río Motagua nace en Quiché y desemboca en el mar Caribe.', bucket: 'i' },
          { id: 'c', text: 'Esta mañana se inauguró la biblioteca municipal de Esquipulas.', bucket: 'n' },
          { id: 'd', text: 'Los volcanes se forman por el movimiento de las placas tectónicas.', bucket: 'i' },
        ] }),
    S.fill({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.8'], prompt: 'Completa con conjunciones comparativas.' },
      { text: 'El bosque nuboso del Trifinio es [[más]] húmedo que el valle seco del Motagua. Su agua es importante [[tanto]] para Guatemala [[como]] para El Salvador y Honduras.', distractors: ['pero', 'si', 'menos'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.7'], prompt: 'En la oración "La abuela de Mateo cocinó tamales para la feria", ¿cuál es el **objeto directo**?' },
      { options: [{ id: 'a', text: 'tamales' }, { id: 'b', text: 'La abuela' }, { id: 'c', text: 'de Mateo' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:3.3.3'], prompt: '¿Qué artista guatemalteco diseñó el Centro Cultural Miguel Ángel Asturias?' },
      { options: [{ id: 'a', text: 'Efraín Recinos' }, { id: 'b', text: 'Carlos Mérida' }, { id: 'c', text: 'Vincent van Gogh' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:3.2.2'], prompt: 'Una familia tiene maíz en su comunidad, pero no tiene dinero para comprarlo. ¿Qué pilar de la seguridad alimentaria falla?' },
      { options: [{ id: 'a', text: 'El acceso' }, { id: 'b', text: 'La disponibilidad' }, { id: 'c', text: 'El reciclaje' }], correct: ['a'] }),
    S.maya({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:7.3.2'], prompt: 'Construye en numeración maya los **260 días** del calendario sagrado (Cholq\'ij).' },
      { mode: 'build', target: 260, levels: 2 }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.1.4'], prompt: '¿Qué actividad gasta **más** energía en 30 minutos?' },
      { options: [{ id: 'a', text: 'Correr' }, { id: 'b', text: 'Caminar despacio' }, { id: 'c', text: 'Estar sentado' }], correct: ['a'] }),
  ],
});
