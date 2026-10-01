/**
 * Ciencias Sociales · Unidad 1 · Semana 2 — Recursos, personas y patrimonio.
 * Progresión: los recursos naturales de América frente a otros continentes y su relación con el
 * desarrollo → leer indicadores demográficos de los continentes → el patrimonio cultural de Guatemala
 * y el respeto a la diversidad étnica, cultural y lingüística.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Recursos naturales ───────────────────────── */
  lesson({
    id: 's02-ccss-1',
    title: 'Recursos naturales de América y del mundo',
    icon: 'Sprout',
    minutes: 15,
    gancho: 'El agua del chorro, la madera de tu pupitre y el gas de la estufa vienen de la naturaleza. ¿Se acabarán algún día?',
    objetivos: [
      'Clasificar los recursos naturales en renovables y no renovables',
      'Comparar los recursos de América con los de otros continentes',
      'Explicar por qué tener muchos recursos no basta para alcanzar el desarrollo',
    ],
    resumen: [
      'Los recursos naturales son elementos de la naturaleza que las personas usan para vivir: agua, suelo, aire, flora, fauna, minerales y energía.',
      'Renovables: se regeneran si se usan con cuidado (agua, bosques, suelo, fauna, sol, viento). No renovables: se acaban porque tardan millones de años en formarse (petróleo, gas, carbón, minerales).',
      'América tiene grandes reservas de agua dulce, la Amazonía, suelos agrícolas y minerales; cada continente tiene recursos distintos.',
      'El nivel de desarrollo de un país no depende solo de sus recursos, sino de cómo los usa y reparte: educación, tecnología, salud y cuidado del ambiente.',
    ],
    media: {
      id: 's02-ccss-1-mapa', kind: 'image', title: 'Recursos de los continentes', aspect: '16:9',
      alt: 'Mapamundi ilustrado con íconos de recursos sobre cada continente: bosques y agua en América del Sur, cobre en Chile, petróleo en Asia occidental, minerales en África y Australia, trigo en Europa.',
      brief: 'Mapamundi ilustrado en colores suaves. Sobre cada continente, íconos grandes y sencillos: América: árboles de la Amazonía, gotas de agua dulce, mazorca de maíz, café, cobre (Chile) y petróleo. Europa: trigo y bosque templado. Asia: arroz y torres de petróleo en el Oriente Medio. África: diamantes y oro, cacao y petróleo. Oceanía: minerales de hierro (Australia) y ovejas. Antártida: hielo (agua dulce congelada). Leyenda con "renovable" (ícono de hoja verde) y "no renovable" (ícono de reloj de arena). Sin banderas ni marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:2.3.1'], ambito: 'conocer', title: 'Renovables y no renovables',
          prompt: 'Un **recurso natural** es todo lo que la naturaleza nos da y usamos para vivir. Se clasifican según si pueden **volver a formarse** o no. Toca cada tarjeta.' },
        { icon: 'Recycle', body: 'Ojo: un recurso renovable también **puede agotarse** si lo usamos más rápido de lo que se regenera. Un bosque talado sin control tarda décadas en volver.', reveal: [
          { icon: 'Leaf', front: 'Renovables', back: 'Se regeneran por procesos naturales: **agua, bosques, suelo, fauna, luz del sol, viento**.' },
          { icon: 'Hourglass', front: 'No renovables', back: 'Existen en cantidad limitada y tardan **millones de años** en formarse: **petróleo, gas natural, carbón, oro, plata, níquel, cobre**.' },
          { icon: 'Droplets', front: 'Los cinco básicos para la vida', back: '**Agua, aire, suelo, flora y fauna**: sin ellos no hay alimentos, salud ni trabajo.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:2.3.1'], ambito: 'conocer',
          prompt: 'Piensa en tu desayuno: tortillas, frijol, café o atol. ¿De dónde vienen **todos** esos alimentos al final?',
          explain: 'Todo viene de la naturaleza: del **suelo**, del **agua**, del **sol** y del **aire**. Esos son **recursos naturales**, y sin ellos no hay vida.' },
        { options: [
          { id: 'a', text: 'De la tienda, y la tienda los fabrica', icon: 'Store', feedback: 'La tienda los vende, pero el maíz y el frijol crecieron en el campo gracias al suelo, el agua y el sol.' },
          { id: 'b', text: 'De la naturaleza: suelo, agua, sol y aire', icon: 'Sprout' },
          { id: 'c', text: 'De una fábrica en otro país', icon: 'Factory', feedback: 'Aun los alimentos procesados empiezan con plantas o animales que necesitan suelo, agua y sol.' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:2.3.1', 'ccss:2.1.1'], prompt: 'Clasifica estos recursos que existen en Guatemala y en América.',
          hint: 'Pregúntate: ¿puede volver a crecer o a llenarse en poco tiempo, o tardó millones de años en formarse?',
          explain: 'El agua, el bosque y los peces se renuevan; el petróleo y los minerales no.' },
        { buckets: [
          { id: 're', label: 'Renovable', icon: 'Leaf', color: 'var(--c-ok)' },
          { id: 'no', label: 'No renovable', icon: 'Hourglass', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'r1', text: 'Agua del lago de Atitlán', icon: 'Droplets', bucket: 're' },
          { id: 'r2', text: 'Petróleo de Petén', icon: 'Fuel', bucket: 'no' },
          { id: 'r3', text: 'Bosques de la Reserva de la Biosfera Maya', icon: 'Trees', bucket: 're' },
          { id: 'r4', text: 'Níquel de Izabal', icon: 'Pickaxe', bucket: 'no' },
          { id: 'r5', text: 'Peces del Pacífico', icon: 'Fish', bucket: 're', feedback: 'Se renuevan si se respetan las épocas de veda y no se pesca de más.' },
          { id: 'r6', text: 'Viento para generar electricidad', icon: 'Wind', bucket: 're' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:2.1.1'], ambito: 'conocer', title: 'América comparada con otros continentes',
          prompt: 'Cada continente tiene recursos distintos por su clima, su relieve y su suelo. Toca cada tarjeta y fíjate en lo que tiene **América** y lo que abunda **en otras partes**.' },
        { icon: 'Earth', body: 'Ningún continente tiene de todo: por eso los países **comercian** entre sí.', reveal: [
          { icon: 'Droplets', front: 'América', back: 'Mucha **agua dulce** (ríos como el Amazonas), la **selva amazónica**, suelos para maíz, café, soya y trigo, **cobre** (Chile), **petróleo** (Venezuela, México) y plata.' },
          { icon: 'Fuel', front: 'Asia', back: 'Enormes reservas de **petróleo y gas** en el Oriente Medio; ríos y llanuras donde se cultiva mucho **arroz**.' },
          { icon: 'Gem', front: 'África', back: 'Muchos minerales: **oro, diamantes, cobalto**, además de petróleo, cacao y grandes sabanas.' },
          { icon: 'Wheat', front: 'Europa', back: 'Suelos fértiles para **trigo** y bosques templados. **Muchos países europeos** tienen poco petróleo y gas propios, por eso compran mucha energía a otros continentes.' },
          { icon: 'Mountain', front: 'Oceanía', back: 'Australia tiene mucho **hierro** y otros minerales, y grandes zonas de pastoreo de ovejas.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['ccss', 'l1'], cnb: ['ccss:2.3.1'], ambito: 'conocer', prompt: 'Lee este texto y responde. Presta atención a la idea principal.' },
        { genre: 'Texto expositivo', heading: '¿Más recursos = más desarrollo?', passage:
          'Podríamos pensar que el país con más recursos naturales es siempre el más desarrollado. Pero no es así. El **desarrollo** se mide por la **calidad de vida** de las personas: si pueden estudiar, tener buena salud, un trabajo digno, agua potable y vivienda.\n\nAlgunos países tienen grandes riquezas de petróleo o minerales, pero muchos de sus habitantes viven en pobreza, porque la riqueza no se reparte o no se invierte en escuelas y hospitales. Otros países tienen pocos recursos naturales y, aun así, alcanzan buena calidad de vida porque invierten en **educación, tecnología y buen gobierno**. Japón, por ejemplo, tiene muy pocos minerales y petróleo.\n\nTambién importa **cómo** se usan los recursos. Si se talan los bosques o se contaminan los ríos, hoy puede haber dinero, pero mañana faltará agua y suelo fértil. Por eso se habla de **desarrollo sostenible**: usar los recursos para vivir mejor hoy, sin quitarles a las próximas generaciones lo que necesitarán.',
          questions: [
            { q: 'Según el texto, ¿con qué se mide el desarrollo?', options: [
              { id: 'a', text: 'Con la calidad de vida de las personas: educación, salud, trabajo, agua y vivienda' },
              { id: 'b', text: 'Solo con la cantidad de petróleo que tiene un país' },
              { id: 'c', text: 'Con el tamaño del territorio' },
            ], correct: 'a' },
            { q: '¿Por qué el texto menciona a Japón?', options: [
              { id: 'a', text: 'Como ejemplo de un país con pocos recursos naturales que invierte en educación y tecnología' },
              { id: 'b', text: 'Porque es el país con más petróleo del mundo' },
              { id: 'c', text: 'Porque está en América' },
            ], correct: 'a' },
            { q: '¿Qué significa **desarrollo sostenible**?', options: [
              { id: 'a', text: 'Usar los recursos para vivir mejor hoy sin dejar sin nada a las próximas generaciones' },
              { id: 'b', text: 'Usar todos los recursos lo más rápido posible' },
              { id: 'c', text: 'No usar ningún recurso natural' },
            ], correct: 'a', why: 'Sostenible viene de "sostener": que dure en el tiempo.' },
          ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:2.1.1'], prompt: 'Une cada continente con un recurso que abunda en él.',
          explain: 'Estas diferencias explican el comercio mundial: Europa compra petróleo y minerales; América vende café, cobre y alimentos.' },
        { leftTitle: 'Continente', rightTitle: 'Recurso abundante', pairs: [
          { id: 'am', left: 'América del Sur', leftIcon: 'Trees', right: 'La selva y el agua del Amazonas' },
          { id: 'as', left: 'Asia (Oriente Medio)', leftIcon: 'Fuel', right: 'Petróleo y gas' },
          { id: 'af', left: 'África', leftIcon: 'Gem', right: 'Oro y diamantes' },
          { id: 'oc', left: 'Oceanía (Australia)', leftIcon: 'Pickaxe', right: 'Hierro' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:2.3.1'], ambito: 'conocer',
          prompt: 'Supongamos dos municipios con bosques parecidos. En el municipio A se tala sin control para vender madera. En el B se corta poco, se reforesta y se cuida el nacimiento de agua. **Dentro de 20 años**, ¿cuál tendrá probablemente mejor calidad de vida?',
          explain: 'El municipio B usa su recurso de forma **sostenible**: seguirá teniendo agua, suelo fértil y madera. El A ganó dinero rápido, pero puede quedarse sin agua y con deslaves.' },
        { options: [
          { id: 'a', text: 'El municipio A, porque ganó más dinero al principio', feedback: 'Ganó rápido, pero al perder el bosque se secan los nacimientos y el suelo se erosiona.' },
          { id: 'b', text: 'El municipio B, porque cuidó su bosque y su agua' },
          { id: 'c', text: 'Los dos estarán igual', feedback: 'Las decisiones sobre los recursos cambian mucho el futuro de una comunidad.' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:2.3.1', 'ccss:2.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'El petróleo es un recurso no renovable.', answer: true },
          { text: 'Un recurso renovable nunca se puede agotar, aunque se use sin cuidado.', answer: false, why: 'Si se usa más rápido de lo que se regenera, también se agota.' },
          { text: 'Muchos países de Europa tienen poco petróleo propio y compran energía a otros continentes.', answer: true },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:2.3.1'], prompt: '¿Qué afirmación sobre recursos y desarrollo es correcta?' },
        { options: [
          { id: 'a', text: 'El desarrollo depende también de la educación, la tecnología y de cómo se reparten y cuidan los recursos' },
          { id: 'b', text: 'El país con más minerales siempre es el más desarrollado' },
          { id: 'c', text: 'Los recursos naturales no tienen relación con la calidad de vida' },
        ], correct: ['a'] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Población mundial ───────────────────────── */
  lesson({
    id: 's02-ccss-2',
    title: 'La población del mundo en números',
    icon: 'Users',
    minutes: 15,
    gancho: 'Hoy vivimos en la Tierra más de 8,000 millones de personas. ¿Dónde vive la mayoría? ¿Y por qué en unos países hay muchos niños y en otros muchos abuelos?',
    objetivos: [
      'Explicar qué miden los principales indicadores demográficos',
      'Comparar la población de los continentes con una gráfica',
      'Reflexionar sobre las necesidades de poblaciones jóvenes y envejecidas',
    ],
    resumen: [
      'La demografía estudia la población. Sus indicadores son números que describen cómo es y cómo cambia.',
      'Natalidad: nacimientos. Mortalidad: fallecimientos. Esperanza de vida: años que vive en promedio una persona. Densidad: habitantes por km². Migración: personas que se van o llegan.',
      'Asia tiene más de la mitad de la población mundial; Oceanía, la menor. África tiene la población más joven; Europa, la más envejecida.',
      'Los indicadores ayudan a decidir: una población joven necesita escuelas y empleo; una envejecida, salud y cuidado de personas mayores.',
    ],
    media: {
      id: 's02-ccss-2-piramides', kind: 'diagram', title: 'Dos pirámides de población', aspect: '16:9',
      alt: 'Dos pirámides de población lado a lado: una con base muy ancha (muchos niños) y otra con forma de columna (muchos adultos y personas mayores).',
      brief: 'Diagrama con dos pirámides de población simplificadas, barras horizontales por grupos de edad (0-14, 15-29, 30-44, 45-59, 60-74, 75+), hombres a la izquierda y mujeres a la derecha. Pirámide 1, "Población joven (como muchos países de África)": base muy ancha que se angosta hacia arriba. Pirámide 2, "Población envejecida (como muchos países de Europa)": forma de columna o de base angosta. Debajo: "Datos ilustrativos, no de un país real". Colores suaves, textos grandes.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:3.1.1'], ambito: 'conocer', title: 'Indicadores demográficos',
          prompt: 'La **demografía** es la ciencia que estudia la población. Para describirla usa **indicadores**: números que dicen cómo es y cómo cambia. Toca cada tarjeta.' },
        { icon: 'BarChart3', body: 'Un solo indicador no cuenta toda la historia: hay que mirarlos juntos.', reveal: [
          { icon: 'Baby', front: 'Natalidad', back: 'Cuántos **nacimientos** hay en un año. Se suele dar por cada 1,000 habitantes.' },
          { icon: 'HeartPulse', front: 'Mortalidad', back: 'Cuántas personas **fallecen** en un año por cada 1,000 habitantes. La **mortalidad infantil** cuenta a los bebés menores de un año.' },
          { icon: 'Hourglass', front: 'Esperanza de vida', back: 'Cuántos **años vive en promedio** una persona. Sube cuando mejoran la salud, la alimentación y el agua potable.' },
          { icon: 'Users', front: 'Densidad de población', back: 'Cuántas personas viven por cada **kilómetro cuadrado** (hab/km²). Se calcula: habitantes ÷ superficie.' },
          { icon: 'Route', front: 'Migración', back: 'Personas que **salen** de un lugar (emigran) o **llegan** a él (inmigran).' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.1.1'], ambito: 'conocer',
          prompt: '¿En qué continente crees que vive **más gente**?',
          explain: '¡En **Asia**! Allí vive más de la mitad de la humanidad. Solo dos países, China e India, tienen cada uno más de 1,400 millones de habitantes.' },
        { layout: 'grid', options: [
          { id: 'am', text: 'América', icon: 'Earth', feedback: 'América tiene mucha gente, pero bastante menos que otro continente.' },
          { id: 'as', text: 'Asia', icon: 'Globe' },
          { id: 'af', text: 'África', icon: 'Sun', feedback: 'África es la segunda. Su población crece muy rápido, pero no es la primera.' },
          { id: 'eu', text: 'Europa', icon: 'Castle', feedback: 'Europa tiene menos población que Asia, África y América.' },
        ], correct: ['as'] },
      ),
      S.match(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.1.1'], prompt: 'Une cada pregunta con el indicador que la responde.',
          hint: 'Piensa en la palabra clave: nacer, morir, años vividos, personas por km², moverse de lugar.',
          explain: 'Cada indicador responde una pregunta distinta sobre la población.' },
        { leftTitle: 'Pregunta', rightTitle: 'Indicador', pairs: [
          { id: 'n', left: '¿Cuántos bebés nacieron este año?', leftIcon: 'Baby', right: 'Natalidad' },
          { id: 'e', left: '¿Cuántos años vive en promedio una persona?', leftIcon: 'Hourglass', right: 'Esperanza de vida' },
          { id: 'd', left: '¿Qué tan apretada vive la gente en un territorio?', leftIcon: 'Users', right: 'Densidad de población' },
          { id: 'm', left: '¿Cuántas personas se fueron a vivir a otro país?', leftIcon: 'Route', right: 'Migración' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss', 'mat'], cnb: ['ccss:3.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto: calcular la densidad',
          prompt: 'La densidad se calcula dividiendo **habitantes ÷ superficie en km²**. Mira cómo se hace con datos hipotéticos.' },
        { icon: 'Calculator', problem: 'Supongamos que el municipio de San Andrés tiene **24,000 habitantes** y una superficie de **120 km²**. ¿Cuál es su densidad de población?',
          steps: [
            { text: 'Escribo la operación: 24,000 ÷ 120.' },
            { text: 'Simplifico quitando un cero a cada número: 2,400 ÷ 12 = **200**.', why: 'Si divido los dos números entre 10, el resultado no cambia.' },
            { text: 'La unidad es "habitantes por km²".' },
          ],
          answer: 'San Andrés tiene **200 hab/km²**: en promedio, 200 personas por cada kilómetro cuadrado.',
          tip: 'Un promedio no dice que la gente esté repartida igual: en el centro del pueblo puede haber más gente que en las montañas.' },
      ),
      S.number(
        { fase: 'construir', areas: ['ccss', 'mat'], cnb: ['ccss:3.1.1'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda. Supongamos una aldea con **4,500 habitantes** en **15 km²**. ¿Cuál es su densidad?',
          hint: 'Divide habitantes entre km²: 4,500 ÷ 15. Piensa: 15 × 3 = 45, así que 15 × 300 = ¿?',
          explain: '4,500 ÷ 15 = 300. La aldea tiene 300 hab/km².' },
        { answer: 300, unit: 'hab/km²', misconceptions: [
          { value: 67500, msg: 'Multiplicaste. La densidad se calcula dividiendo habitantes entre km².' },
          { value: 30, msg: 'Revisa los ceros: 15 × 30 = 450, no 4,500.' },
        ] },
      ),
      S.chart(
        { fase: 'aplicar', areas: ['ccss', 'mat'], cnb: ['ccss:3.1.1'], ambito: 'hacer',
          prompt: 'Construye la gráfica con el **porcentaje aproximado** de la población mundial que vive en cada continente (datos redondeados).',
          explain: 'Asia reúne más de la mitad de la humanidad (59 %). Oceanía no llega ni al 1 %: en la gráfica casi no se ve.' },
        { categories: [
          { id: 'asia', label: 'Asia', icon: 'Globe' },
          { id: 'africa', label: 'África', icon: 'Sun' },
          { id: 'america', label: 'América', icon: 'Earth' },
          { id: 'europa', label: 'Europa', icon: 'Castle' },
          { id: 'oceania', label: 'Oceanía', icon: 'Waves' },
        ], data: [59, 18, 13, 9, 1], max: 60, step: 1, unit: '%', source: 'Porcentaje aproximado de la población mundial: Asia 59 %, África 18 %, América 13 %, Europa 9 %, Oceanía 1 % (redondeado)' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.1.1'], ambito: 'conocer',
          prompt: 'En muchos países de **África** la mayoría de la población es joven y la natalidad es alta. En muchos países de **Europa** hay muchas personas mayores y nacen pocos bebés. ¿Qué necesita **más** cada región?',
          explain: 'Los indicadores sirven para **planificar**: con muchos niños y jóvenes se necesitan escuelas y empleos; con muchas personas mayores, salud, pensiones y cuidado.' },
        { options: [
          { id: 'a', text: 'África: más escuelas y empleos para jóvenes. Europa: más servicios de salud y cuidado para personas mayores' },
          { id: 'b', text: 'Las dos necesitan exactamente lo mismo', feedback: 'Sus poblaciones son muy distintas, así que sus necesidades también.' },
          { id: 'c', text: 'África: más asilos. Europa: más escuelas primarias', feedback: 'Al revés: donde hay muchos niños hacen falta escuelas; donde hay muchos mayores, cuidados.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.1.1'], prompt: '¿Qué indicador demográfico dice cuántos años vive **en promedio** una persona?' },
        { options: [
          { id: 'a', text: 'Esperanza de vida' },
          { id: 'b', text: 'Natalidad' },
          { id: 'c', text: 'Densidad de población' },
        ], correct: ['a'] },
      ),
      S.number(
        { fase: 'comprobar', areas: ['ccss', 'mat'], cnb: ['ccss:3.1.1'], prompt: 'Supongamos un municipio con **36,000 habitantes** y **300 km²**. ¿Cuál es su densidad de población (hab/km²)?' },
        { answer: 120, unit: 'hab/km²' },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['ccss'], cnb: ['ccss:3.1.1'], ambito: 'ser',
          prompt: 'Los números hablan de **personas**. Piensa: en tu comunidad, ¿hay muchos niños, muchos jóvenes que se van a trabajar lejos o muchas personas mayores? Marca lo que observas y elige un compromiso.' },
        { statements: ['En mi comunidad hay muchos niños y jóvenes', 'Conozco familias con alguien que migró a otro lugar', 'En mi comunidad hay personas mayores que necesitan apoyo'],
          commitments: ['Preguntaré a mi familia cuántos hermanos tenían mis abuelos y cuántos tenemos ahora', 'Ayudaré a una persona mayor de mi familia o mi vecindario esta semana'] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Patrimonio y diversidad ───────────────────────── */
  lesson({
    id: 's02-ccss-3',
    title: 'Nuestro patrimonio y nuestra diversidad',
    icon: 'Landmark',
    minutes: 15,
    gancho: 'Tikal, el Rabinal Achí, el güipil de tu abuela y la receta del tapado garífuna. ¿Qué tienen en común?',
    objetivos: [
      'Distinguir patrimonio cultural material, inmaterial y natural',
      'Reconocer la diversidad étnica, cultural y lingüística de Guatemala',
      'Proponer acciones para proteger el patrimonio y respetar las diferencias',
    ],
    resumen: [
      'El patrimonio es la herencia que recibimos del pasado y que debemos cuidar para el futuro.',
      'Patrimonio material: lo que se puede tocar (Tikal, Quiriguá, la Antigua Guatemala, tejidos, cerámica). Inmaterial: saberes y tradiciones vivas (idiomas, música, danzas, recetas, como el Rabinal Achí). Natural: paisajes y ecosistemas (lagos, volcanes, selvas).',
      'En Guatemala conviven cuatro pueblos: maya, garífuna, xinka y ladino o mestizo, y se hablan 25 idiomas: 22 mayas, el xinka, el garífuna y el español.',
      'Aceptar, tolerar y respetar las diferencias significa tratar a todos con dignidad, sin burlas ni discriminación, y valorar lo que cada cultura aporta.',
    ],
    media: {
      id: 's02-ccss-3-patrimonio', kind: 'image', title: 'El patrimonio de Guatemala', aspect: '16:9',
      alt: 'Collage ilustrado en tres columnas: material (templo de Tikal, arco de Santa Catalina en la Antigua), inmaterial (danzantes del Rabinal Achí, tambores garífunas, una abuela que enseña a tejer) y natural (lago de Atitlán, selva de Petén).',
      brief: 'Ilustración tipo collage con tres columnas rotuladas. "Material": el Templo I de Tikal y el arco de Santa Catalina de la Antigua Guatemala. "Inmaterial": danzantes con máscaras del Rabinal Achí, músicos con tambores garífunas y una abuela que enseña a tejer en telar de cintura a una niña. "Natural": el lago de Atitlán con sus volcanes y la selva de Petén con un tucán. Personajes ilustrados genéricos, con trajes respetuosos y bien representados. Colores cálidos. Sin logos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:3.2.5'], ambito: 'conocer', title: 'Tres tipos de patrimonio',
          prompt: 'El **patrimonio** de un pueblo es todo lo valioso que ha heredado y que quiere pasar a las siguientes generaciones. Toca cada tarjeta.' },
        { icon: 'Landmark', body: 'La **UNESCO** (organismo de las Naciones Unidas para la educación y la cultura) ha reconocido como patrimonio de la humanidad a **Tikal**, la **Antigua Guatemala** y **Quiriguá**, y también tradiciones vivas como el **Rabinal Achí** y la lengua, danza y música **garífunas**.', reveal: [
          { icon: 'Castle', front: 'Material (tangible)', back: 'Lo que se puede **tocar**: sitios arqueológicos, iglesias, edificios, tejidos, cerámica, instrumentos como la marimba.' },
          { icon: 'Music', front: 'Inmaterial (intangible)', back: 'Lo que se **transmite** de persona a persona: idiomas, música, danzas, fiestas, recetas, medicina tradicional, técnicas de tejido.' },
          { icon: 'Mountain', front: 'Natural', back: 'Paisajes y ecosistemas valiosos: el **lago de Atitlán**, los volcanes, la selva de Petén, los manglares.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.5'], ambito: 'conocer',
          prompt: 'Tu abuela te regala un güipil que tejió su madre. Si lo cuidas, un día lo podrás heredar. ¿Qué palabra describe algo que **recibimos del pasado y debemos cuidar para el futuro**?',
          explain: 'Eso es **patrimonio**. Una familia tiene su patrimonio, y un país también: sus sitios, tradiciones, idiomas y paisajes.' },
        { options: [
          { id: 'a', text: 'Patrimonio', icon: 'Gift' },
          { id: 'b', text: 'Basura', icon: 'Trash2', feedback: 'Un güipil hecho por tu bisabuela tiene un gran valor: cuenta la historia de tu familia.' },
          { id: 'c', text: 'Moda', icon: 'Shirt', feedback: 'La moda cambia rápido; el patrimonio se hereda y se cuida por generaciones.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.5'], prompt: 'Clasifica cada ejemplo del patrimonio de Guatemala.',
          hint: '¿Se puede tocar? Es material. ¿Es un saber o tradición que se aprende? Es inmaterial. ¿Lo hizo la naturaleza? Es natural.',
          explain: 'Un tejido es patrimonio material, pero la **técnica** para tejerlo es inmaterial: vive en las personas que la saben.' },
        { buckets: [
          { id: 'mat', label: 'Material', icon: 'Castle', color: 'var(--c-maiz-strong)' },
          { id: 'inm', label: 'Inmaterial', icon: 'Music', color: 'var(--area-ccss)' },
          { id: 'nat', label: 'Natural', icon: 'Mountain', color: 'var(--c-ok)' },
        ], items: [
          { id: 'p1', text: 'Los templos de Tikal', bucket: 'mat' },
          { id: 'p2', text: 'El Rabinal Achí (drama danzado)', bucket: 'inm' },
          { id: 'p3', text: 'El lago de Atitlán', bucket: 'nat' },
          { id: 'p4', text: 'El idioma garífuna', bucket: 'inm' },
          { id: 'p5', text: 'Una marimba centenaria', bucket: 'mat' },
          { id: 'p6', text: 'La receta del pepián que enseña la abuela', bucket: 'inm', feedback: 'El plato se come, pero la receta y la forma de prepararlo son un saber que se transmite.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.6'], ambito: 'convivir', title: 'Un país de muchos pueblos e idiomas',
          prompt: 'Guatemala es un país **multiétnico, pluricultural y multilingüe**: aquí conviven varios pueblos, cada uno con su historia, idioma y costumbres. Toca cada tarjeta.',
          media: { id: 's02-ccss-3-idiomas', kind: 'audio', title: 'Saludos de Guatemala', duration: 40,
            alt: 'Audio con voces de niñas y niños que saludan en varios idiomas de Guatemala y en español.',
            brief: 'Grabación de 40 s: voces de niñas y niños guatemaltecos que dicen "buenos días" o un saludo común en k’iche’, q’eqchi’, kaqchikel, mam, garífuna, xinka y español, cada uno seguido del nombre del idioma dicho en español. Requiere validación y grabación por hablantes nativos de cada idioma. Fondo musical suave de marimba al inicio y al final.' } },
        { icon: 'Languages', body: 'Se hablan **25 idiomas**: **22 mayas** (como k’iche’, q’eqchi’, kaqchikel y mam), el **xinka**, el **garífuna** y el **español**.', reveal: [
          { icon: 'Sprout', front: 'Pueblo maya', back: 'Descendiente de la civilización maya. Es el pueblo más numeroso de los pueblos originarios y vive en todo el país, sobre todo en el altiplano y el norte.' },
          { icon: 'Drum', front: 'Pueblo garífuna', back: 'Nació de la unión de pueblos africanos y caribes. En Guatemala vive sobre todo en **Livingston** y **Puerto Barrios**, Izabal.' },
          { icon: 'Feather', front: 'Pueblo xinka', back: 'Pueblo originario del oriente y sur del país, principalmente en **Santa Rosa, Jutiapa y Jalapa**. Hoy trabaja por revitalizar su idioma.' },
          { icon: 'Users', front: 'Pueblo ladino o mestizo', back: 'Surgió de la mezcla de pueblos originarios, europeos y otros. Habla principalmente **español**.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:3.2.6'], ambito: 'convivir', title: 'Aceptación, tolerancia y respeto',
          prompt: 'Convivir en un país diverso se aprende con tres actitudes. Toca cada tarjeta.' },
        { icon: 'HeartHandshake', body: 'Ninguna cultura es superior a otra. **Discriminar** es tratar mal a alguien por su pueblo, su idioma, su color de piel o su ropa: está mal y además lo prohíbe la ley.', reveal: [
          { icon: 'Handshake', front: 'Aceptación', back: 'Reconocer que las diferencias son **normales y valiosas**: nadie tiene que dejar de ser quien es para ser parte del grupo.' },
          { icon: 'Scale', front: 'Tolerancia', back: 'Convivir con quien piensa, habla o vive distinto **sin burlas ni agresiones**, aunque no hagamos lo mismo.' },
          { icon: 'Heart', front: 'Respeto', back: 'Tratar con **dignidad** a todas las personas: usar su nombre, valorar su idioma, su traje y sus costumbres.' },
        ] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['ccss', 'fc'], cnb: ['ccss:3.2.6', 'ccss:3.2.5'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
        { scene: { icon: 'School', text: 'Llega una compañera nueva que habla q’eqchi’ y lleva su corte y güipil. En el recreo, dos compañeros se ríen de cómo pronuncia algunas palabras en español.' },
          options: [
            { id: 'a', icon: 'HeartHandshake', text: 'Me acerco a ella, la invito a jugar y les digo a los compañeros que burlarse lastima', consequence: 'Ella se siente acogida y el grupo aprende que hablar dos idiomas es un logro, no un motivo de burla.', values: ['respeto', 'solidaridad', 'valentía'], constructive: true },
            { id: 'b', icon: 'Languages', text: 'Le pido que me enseñe a saludar en q’eqchi’ y le cuento cómo se dice en español', consequence: 'Se crea un intercambio: los dos aprenden algo nuevo y ella siente que su idioma se valora.', values: ['aceptación', 'interculturalidad'], constructive: true },
            { id: 'c', icon: 'EyeOff', text: 'Me quedo callado para no meterme en problemas', consequence: 'La burla sigue y ella se siente sola. Callar ante la discriminación deja que continúe.', values: [], constructive: false },
            { id: 'd', icon: 'Megaphone', text: 'Me río con ellos porque todos lo hacen', consequence: 'La compañera se siente humillada y puede querer dejar de hablar su idioma. Reírse también es participar de la burla.', values: [], constructive: false },
          ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.2.5', 'ccss:3.2.6'], ambito: 'convivir',
          prompt: '¿Esta acción **protege** el patrimonio y la diversidad, o los **daña**?',
          explain: 'Proteger el patrimonio también es mantenerlo **vivo**: usar el idioma, aprender las danzas, comprar el trabajo artesanal a un precio justo.' },
        { buckets: [
          { id: 'pro', label: 'Protege', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          { id: 'dan', label: 'Daña', icon: 'TriangleAlert', color: 'var(--c-bad)' },
        ], items: [
          { id: 'a1', text: 'Escribir nombres con pintura en una estela maya', bucket: 'dan' },
          { id: 'a2', text: 'Aprender el idioma de tus abuelos', bucket: 'pro' },
          { id: 'a3', text: 'Pagar un precio justo por un tejido hecho a mano', bucket: 'pro' },
          { id: 'a4', text: 'Burlarse del traje de un compañero', bucket: 'dan' },
          { id: 'a5', text: 'Grabar y escribir las historias que cuentan los ancianos', bucket: 'pro' },
          { id: 'a6', text: 'Tirar basura en el lago de Atitlán', bucket: 'dan', feedback: 'El lago es patrimonio natural: contaminarlo lo daña para todos.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.5'], prompt: '¿Cuál es un ejemplo de patrimonio **inmaterial**?' },
        { options: [
          { id: 'a', text: 'La música y la danza garífunas' },
          { id: 'b', text: 'Las ruinas de Quiriguá' },
          { id: 'c', text: 'El volcán de Agua' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.6'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En Guatemala se hablan 25 idiomas.', answer: true },
          { text: 'Los cuatro pueblos de Guatemala son maya, garífuna, xinka y ladino o mestizo.', answer: true },
          { text: 'Tolerar significa obligar a otros a hablar y vestir como uno.', answer: false, why: 'Tolerar es convivir con respeto con quien es distinto, sin obligarlo a cambiar.' },
        ] },
      ),
      cierre({ areas: ['ccss'], cnb: [] }, ['Clasifico recursos naturales y explico su relación con el desarrollo', 'Leo indicadores de población', 'Distingo tipos de patrimonio y respeto la diversidad'],
        ['Preguntaré a mi familia qué tradición, receta o palabra de nuestro pueblo quieren que yo herede', 'Saludaré a alguien en un idioma diferente al mío esta semana']),
    ],
  }),
];
