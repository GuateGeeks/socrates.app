/**
 * Productividad y Desarrollo · Unidad 1 · Semana 7 — Energía para la paz.
 * El deterioro ambiental mundial (cobertura vegetal, biodiversidad, desertificación y
 * desastres llamados naturales), su gravedad en la comunidad, el país y el mundo,
 * las cumbres ambientales y alternativas de solución en cada nivel.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's07-pyd-1',
    title: 'Un planeta que se deteriora: de mi comunidad al mundo',
    icon: 'Earth',
    minutes: 15,
    gancho: 'Si se tala el bosque de un cerro en tu municipio, ¿eso tiene algo que ver con lo que pasa en el resto del planeta?',
    objetivos: [
      'Diseñar una acción ambiental factible a partir de una cadena de causas y responsabilidades',
    ],
    resumen: [
      'Cuatro problemas mundiales relacionados: pérdida de cobertura vegetal, pérdida de biodiversidad, desertificación y cambios del riesgo que pueden agravar los impactos de algunos desastres.',
      'Un fenómeno natural (lluvia fuerte, huracán, sequía) se vuelve desastre cuando encuentra a una población vulnerable: laderas sin bosque, casas en zonas de riesgo, ríos llenos de basura.',
      'En Guatemala: tormentas como Stan (2005), Agatha (2010), Eta e Iota (2020) causaron deslaves e inundaciones; en el Corredor Seco del oriente las sequías afectan las cosechas.',
      'Los países se reúnen en cumbres ambientales (Estocolmo 1972, Río de Janeiro 1992, París 2015). Las soluciones van del nivel personal al mundial: reforestar, ahorrar agua y energía, reducir basura, proteger áreas naturales y cumplir acuerdos.',
    ],
    media: {
      id: 's07-pyd-1-cadena', kind: 'animation', title: 'Del cerro pelado al deslave', aspect: '16:9', duration: 50,
      alt: 'Animación: un cerro con bosque protege una aldea de la lluvia; luego talan el bosque, llega una tormenta y la tierra se desliza; al final la comunidad reforesta y el cerro vuelve a sostener el suelo.',
      brief: 'Animación 2D de 50 s con tres escenas del mismo cerro sobre una aldea. (1) Cerro con bosque: las raíces sostienen el suelo y la lluvia se infiltra (flechas azules hacia abajo). (2) El bosque talado: la lluvia corre por encima arrastrando tierra; aparece la palabra "vulnerable"; llega una tormenta y un deslave se detiene cerca de las casas (sin personas heridas, sin dramatismo). (3) Jóvenes y adultos siembran árboles y hacen barreras vivas; el cerro reverdece. Texto final: "La amenaza es natural. El desastre también depende de nosotros." Narración en español, subtítulos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:5.3.2', 'pyd:5.1.2'], title: 'Del problema a una acción posible',
          prompt: 'Una acción ambiental útil responde a una causa identificada, señala responsables, recursos y una forma de comprobar el avance.' },
        { icon: 'ClipboardCheck', body: 'Usaremos casos hipotéticos para distinguir acciones familiares, comunitarias y públicas.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.3.2'], ambito: 'conocer',
          prompt: '¿Crees que los problemas ambientales de tu comunidad tienen relación con los del resto del **mundo**?',
          explain: 'Sí: cada bosque talado en cualquier lugar suma a la pérdida mundial de bosques, y lo que pasa en el planeta (como el aumento de tormentas fuertes) llega a tu comunidad. Lo local y lo global están conectados.' },
        { options: [
          { id: 'a', text: 'Sí: lo que pasa aquí suma a lo que pasa en el mundo, y al revés', icon: 'Globe' },
          { id: 'b', text: 'No: cada lugar está separado de los demás', icon: 'X', feedback: 'El aire, el agua y el clima no tienen fronteras: los problemas se conectan.' },
          { id: 'c', text: 'Solo los países grandes tienen problemas ambientales', icon: 'Building2', feedback: 'Todos los países, grandes y pequeños, viven problemas ambientales.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.1.2'], ambito: 'conocer', title: 'Cuatro problemas del planeta',
          prompt: 'El **deterioro ambiental** es el daño a la naturaleza que la vuelve menos capaz de sostener la vida. Estos cuatro problemas ocurren en todo el mundo. Toca cada uno.' },
        { icon: 'Earth', body: 'Los cuatro están **conectados**: al perder bosques se pierden especies, el suelo se seca y aumentan los desastres.', reveal: [
          { icon: 'TreePine', front: 'Pérdida de cobertura vegetal', back: 'Se talan o queman **bosques y selvas** para leña, madera, ganado o cultivos, más rápido de lo que vuelven a crecer.' },
          { icon: 'Bird', front: 'Pérdida de biodiversidad', back: 'Desaparecen **especies** de plantas y animales porque pierden su hogar, por la contaminación o por la caza. Cada especie tiene un papel en la naturaleza.' },
          { icon: 'Sun', front: 'Desertificación', back: 'Tierras de zonas secas se **degradan**: pierden su capa fértil y su humedad por la tala, el sobrepastoreo y las sequías. Ya no producen como antes.' },
          { icon: 'CloudRain', front: 'Más desastres', back: 'Aumentan la **magnitud** (qué tan fuertes) y la **frecuencia** (cada cuánto) de tormentas, inundaciones, deslaves y sequías.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.1.2'], prompt: 'Clasifica cada situación en el problema ambiental que muestra.',
          hint: 'Árboles → cobertura vegetal. Especies → biodiversidad. Suelo seco que ya no produce → desertificación. Tormentas o deslaves → desastres.',
          explain: 'Reconocer cada problema en ejemplos concretos es el primer paso para buscar soluciones.' },
        { buckets: [
          { id: 'cob', label: 'Pérdida de bosques', icon: 'TreePine', color: 'var(--c-ok)' },
          { id: 'bio', label: 'Pérdida de biodiversidad', icon: 'Bird', color: 'var(--area-cnt)' },
          { id: 'des', label: 'Desertificación', icon: 'Sun', color: 'var(--c-maiz-strong)' },
          { id: 'dis', label: 'Más desastres', icon: 'CloudRain', color: 'var(--c-bad)' },
        ], layout: 'grid2', items: [
          { id: 'e1', text: 'Se tala un cerro entero para sacar leña', bucket: 'cob' },
          { id: 'e2', text: 'Ya casi no se ven ciertas aves en el bosque de la aldea', bucket: 'bio' },
          { id: 'e3', text: 'En una zona seca del oriente, la tierra se endurece y ya no produce', bucket: 'des' },
          { id: 'e4', text: 'Las tormentas fuertes causan más deslaves que antes', bucket: 'dis' },
          { id: 'e5', text: 'Se queman áreas de selva para meter ganado', bucket: 'cob' },
          { id: 'e6', text: 'Desaparecen peces del río por la basura y la contaminación', bucket: 'bio' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.3.2'], ambito: 'conocer', title: '¿Por qué "desastres llamados naturales"?',
          prompt: 'Una lluvia fuerte es un fenómeno **natural**. Pero que se convierta en **desastre** depende también de nosotros. Toca cada tarjeta.' },
        { icon: 'CloudRain', body: '**Amenaza natural + población vulnerable = desastre.** Si reducimos la vulnerabilidad, reducimos el desastre.', reveal: [
          { icon: 'CloudRain', front: 'Amenaza', back: 'Un fenómeno natural que puede causar daño: **lluvias intensas, huracanes, sequías, sismos, erupciones**.' },
          { icon: 'Home', front: 'Vulnerabilidad', back: 'Lo que nos hace más frágiles: **laderas sin bosque**, casas en orillas de ríos o barrancos, **ríos llenos de basura**, falta de planes de emergencia.' },
          { icon: 'MapPin', front: 'En Guatemala', back: 'Las tormentas **Stan (2005)**, **Agatha (2010)**, **Eta e Iota (2020)** causaron deslaves e inundaciones. En el **Corredor Seco** del oriente, las **sequías** dañan las cosechas.' },
          { icon: 'Globe', front: 'En el mundo', back: 'Con el **cambio climático**, en muchas regiones las lluvias y sequías se están volviendo más extremas.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.3.2', 'pyd:5.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto: de lo local a lo global',
          prompt: 'Mira cómo se analiza la **gravedad** de un problema en tres niveles: comunidad, país y mundo.' },
        { icon: 'Earth', problem: 'En el municipio de Mateo se taló el bosque del cerro que está sobre la aldea. ¿Qué tan grave es y a quién afecta?',
          steps: [
            { text: '**En la comunidad:** sin raíces que sostengan el suelo, la lluvia arrastra tierra; el nacimiento de agua se seca en verano y hay riesgo de **deslave**.' },
            { text: '**En el país:** si pasa en muchos cerros, Guatemala pierde bosques, agua y suelos fértiles, y aumentan los desastres en época de lluvia.', why: 'Los problemas pequeños se suman: muchos cerros talados son un problema nacional.' },
            { text: '**En el mundo:** los bosques absorben dióxido de carbono; al perderlos en todo el planeta aumenta el **cambio climático**, que trae lluvias y sequías más extremas… que vuelven a la aldea.' },
            { text: '**Alternativa de solución:** reforestar con especies nativas, hacer barreras vivas y crear un comité que cuide el bosque.' },
          ],
          answer: 'El problema es **grave en los tres niveles** y está conectado. Por eso la solución también empieza en lo local: **reforestar el cerro**.',
          tip: 'Comunidad → país → mundo → alternativa de solución.' },
      ),
      S.order(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.1.2'], prompt: 'Ordena la **cadena** de causas y efectos que convierte una tala en un desastre.',
          hint: 'Empieza por lo que hacen las personas y termina en el daño a la comunidad.',
          explain: 'Tala → suelo sin raíces → la lluvia corre y arrastra tierra → llega una tormenta fuerte → deslave cerca de las casas.' },
        { labels: { start: 'Causa', end: 'Efecto final' }, items: [
          { id: 'q1', text: 'Se talan los árboles del cerro', icon: 'TreePine' },
          { id: 'q2', text: 'El suelo queda sin raíces que lo sostengan', icon: 'Layers' },
          { id: 'q3', text: 'Con las lluvias de cada año, el agua corre por encima y arrastra la tierra', icon: 'Droplets' },
          { id: 'q4', text: 'Llega una tormenta muy fuerte', icon: 'CloudRain' },
          { id: 'q5', text: 'Ocurre un deslave cerca de las casas', icon: 'Mountain' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.3.2'], ambito: 'conocer', title: 'El mundo busca soluciones: las cumbres ambientales',
          prompt: 'Como los problemas son mundiales, los países se reúnen en **cumbres** para acordar soluciones. Toca cada una.' },
        { icon: 'Globe', body: 'Los acuerdos mundiales importan, pero **se cumplen** en cada país, municipio, escuela y casa.', reveal: [
          { icon: 'Landmark', front: 'Estocolmo, 1972', back: 'Primera gran conferencia de las **Naciones Unidas** sobre el medio ambiente humano. El mundo reconoció que el ambiente es un tema de todos.' },
          { icon: 'Earth', front: 'Río de Janeiro, 1992', back: 'La **Cumbre de la Tierra**: se firmaron acuerdos sobre cambio climático, biodiversidad y, poco después, desertificación.' },
          { icon: 'Handshake', front: 'París, 2015', back: 'El **Acuerdo de París**: casi todos los países se comprometieron a reducir los gases que calientan el planeta.' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.3.2'], ambito: 'emprender', prompt: 'Las alternativas de solución existen en **todos los niveles**. Clasifica cada acción según **quién** la hace.',
          explain: 'Todos los niveles se necesitan: lo que tú haces suma, y lo que los países acuerdan orienta a todos.' },
        { buckets: [
          { id: 'yo', label: 'Yo y mi familia', icon: 'Home', color: 'var(--c-ok)' },
          { id: 'com', label: 'Mi comunidad', icon: 'Users', color: 'var(--c-maiz-strong)' },
          { id: 'mun', label: 'País y mundo', icon: 'Globe', color: 'var(--area-cnt)' },
        ], items: [
          { id: 'a1', text: 'Cerrar el chorro mientras me enjabono las manos', bucket: 'yo' },
          { id: 'a2', text: 'Una jornada de reforestación organizada por el COCODE', bucket: 'com' },
          { id: 'a3', text: 'Un acuerdo entre países para reducir gases contaminantes', bucket: 'mun' },
          { id: 'a4', text: 'Separar la basura orgánica para hacer abono en casa', bucket: 'yo' },
          { id: 'a5', text: 'Un comité de vecinos que cuida el nacimiento de agua', bucket: 'com' },
          { id: 'a6', text: 'Una ley nacional que protege áreas naturales', bucket: 'mun' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.3.2', 'pyd:5.1.2'], ambito: 'emprender',
          prompt: 'En una aldea del Corredor Seco las cosechas se pierden por sequía y el suelo se está degradando. ¿Qué alternativa ataca **las causas** del problema?',
          explain: 'Reforestar, proteger el suelo con cobertura y cosechar agua de lluvia frenan la desertificación y reducen la vulnerabilidad ante la sequía.' },
        { options: [
          { id: 'a', text: 'Reforestar, cubrir el suelo con rastrojo y guardar agua de lluvia' },
          { id: 'b', text: 'Quemar el rastrojo cada año para "limpiar" el terreno', feedback: 'Quemar deja el suelo desnudo y más seco: aumenta la degradación.' },
          { id: 'c', text: 'Talar los pocos árboles que quedan para vender leña', feedback: 'Eso acelera la desertificación.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.1.2'], prompt: '¿Qué es la **desertificación**?' },
        { options: [
          { id: 'a', text: 'La degradación de tierras en zonas secas, que pierden su fertilidad y humedad' },
          { id: 'b', text: 'La creación de un parque en el desierto' },
          { id: 'c', text: 'El aumento de lluvias en una región' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.1.2', 'pyd:5.3.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Una tormenta se convierte en desastre cuando encuentra a una población vulnerable.', answer: true },
          { text: 'La pérdida de bosques no tiene relación con la pérdida de especies.', answer: false, why: 'Muchas especies viven en los bosques: sin bosque pierden su hogar.' },
          { text: 'La Cumbre de la Tierra se realizó en Río de Janeiro en 1992.', answer: true },
          { text: 'Reforestar un cerro es una alternativa de solución a nivel de comunidad.', answer: true },
        ] },
      ),
      cierre({ areas: ['pyd'], cnb: ['pyd:5.1.2', 'pyd:5.3.2'] },
        ['Describo cuatro problemas ambientales mundiales', 'Explico cómo una amenaza natural se vuelve desastre', 'Propongo soluciones en la familia, la comunidad y el país'],
        ['Ahorraré agua en casa y en la escuela', 'Participaré en una jornada de reforestación o limpieza']),
    ],
  }),
];
