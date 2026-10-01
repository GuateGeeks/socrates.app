/**
 * Ciencias Naturales y Tecnología · Unidad 1 · Semana 4 — Crecer y cuidar la vida.
 * Progresión: glándulas sexuales y pubertad (continúa las glándulas de la semana 3) →
 * aparato reproductor masculino y formación de células reproductoras → ética: pudor y
 * paternidad responsable. Lenguaje científico, respetuoso y apropiado para 11-12 años.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Pubertad y glándulas sexuales ───────────────────────── */
  lesson({
    id: 's04-cnt-1',
    title: 'Pubertad: glándulas masculinas y femeninas',
    icon: 'Sprout',
    minutes: 15,
    gancho: 'A tu edad, muchos compañeros crecen de golpe, les cambia la voz o notan otros cambios. ¿Qué está pasando en su cuerpo?',
    objetivos: [
      "Explicar los cambios de la pubertad a partir de las hormonas y la variación normal",
    ],
    resumen: [
      'La pubertad es una etapa natural de transición hacia el cuerpo adulto. Suele comenzar entre los 8 y los 14 años, aproximadamente, y cada cuerpo lleva su propio ritmo.',
      'La hipófisis envía hormonas que activan las gónadas, como los testículos y los ovarios.',
      'Los testículos producen principalmente testosterona y forman espermatozoides; los ovarios producen principalmente estrógenos y progesterona y contienen las células que participan en la ovogénesis.',
      'El estirón, el vello, el sudor, la voz, las mamas y la menstruación siguen patrones generales, pero no aparecen a la misma edad ni con la misma intensidad. No determinan la personalidad ni las capacidades.',
    ],
    media: {
      id: 's04-cnt-1-cambios', kind: 'image', title: 'Todos crecemos a nuestro ritmo', aspect: '16:9',
      alt: 'Ilustración de un grupo de estudiantes de sexto grado de la misma edad y estaturas muy distintas, conversando y riendo en el patio de la escuela.',
      brief: 'Ilustración cálida de 6 estudiantes guatemaltecos (niñas y niños de distintos pueblos: maya con traje, garífuna, mestizo), todos de 11-12 años pero de estaturas y complexiones diferentes, conversando con respeto en el patio. Ropa escolar completa, nada de desnudez ni enfoque en el cuerpo. Rótulo: "Misma edad, distinto ritmo". Estilo de libro de texto amable.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:2.3.2'], title: 'Idea central', prompt: 'Estudia la pubertad con nombres científicos y recuerda que cada cuerpo cambia a su ritmo.' },
        { icon: 'BookOpenCheck', body: "La pubertad es la etapa en que el cuerpo de niña o niño empieza a convertirse en el de una persona adulta. Suele empezar entre los 8 y los 14 años, y cada cuerpo tiene su ritmo." },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.2'], ambito: 'conocer',
          prompt: 'Hoy hablarás del cuerpo con **nombres científicos** y con respeto. Para empezar: ¿qué crees que es la **pubertad**?',
          explain: 'La pubertad es una **etapa natural** en la que el cuerpo cambia a su propio ritmo. Para una duda de salud, una persona adulta de confianza o un profesional de salud es una **fuente confiable**; una publicación sin autor o evidencia no reemplaza su orientación.' },
        { options: [
          { id: 'a', text: 'Una enfermedad que da a los adolescentes', icon: 'Pill', feedback: 'No es una enfermedad: es una etapa natural del crecimiento.' },
          { id: 'b', text: 'La etapa en que el cuerpo empieza a cambiar de niño a adulto', icon: 'Sprout' },
          { id: 'c', text: 'Algo que solo les pasa a las mujeres', icon: 'User', feedback: 'La pubertad es una etapa humana. Los cambios concretos y su ritmo varían entre personas.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.2'], ambito: 'conocer', title: '¿Quién da la señal?',
          prompt: 'En la lección de las glándulas conociste a la **hipófisis**, la glándula maestra. Ella da la señal de inicio. Toca las tarjetas.' },
        { icon: 'Crown', body: 'La pubertad no ocurre de un día para otro: dura **varios años**. Suele empezar entre los **8 y los 13 años** en las niñas y entre los **9 y los 14** en los niños, aproximadamente.', reveal: [
          { icon: 'Crown', front: '1. La hipófisis', back: 'Empieza a enviar a la sangre **hormonas** que llegan a las glándulas sexuales.' },
          { icon: 'HeartPulse', front: '2. Las glándulas sexuales', back: 'Se "despiertan" y producen sus propias hormonas: las **hormonas sexuales**.' },
          { icon: 'Sprout', front: '3. Los cambios', back: 'Las hormonas sexuales viajan por la sangre y producen los **cambios** del cuerpo y también cambios en las **emociones**.' },
          { icon: 'Clock', front: 'Cada quien a su ritmo', back: 'Algunas personas empiezan antes y otras después. **Las dos cosas son normales.** Nadie debe burlarse del cuerpo de otra persona.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.2'], ambito: 'conocer', title: 'Glándulas masculinas y femeninas',
          prompt: 'Las glándulas sexuales se llaman **gónadas**. Tienen **dos funciones**: producen hormonas y forman células reproductoras. Toca las tarjetas.',
          media: { id: 's04-cnt-1-gonadas', kind: 'diagram', title: 'Testículos y ovarios: dos funciones', aspect: '16:9',
            alt: 'Diagrama en dos columnas: a la izquierda los testículos, con flechas hacia testosterona y espermatozoides; a la derecha los ovarios, con flechas hacia estrógenos y progesterona y una etiqueta que indica que contienen ovocitos.',
            brief: 'Diagrama escolar esquemático en dos columnas, sin representar genitales externos: columna izquierda "Glándulas masculinas: testículos" (dos óvalos dentro de un contorno sencillo) con dos flechas: "hormona: testosterona" (gota morada hacia un vaso sanguíneo) y "células: espermatozoides". Columna derecha "Glándulas femeninas: ovarios" (dos óvalos junto a un útero esquemático) con una flecha "hormonas: estrógenos y progesterona" y la etiqueta "contienen ovocitos". Arriba, la hipófisis con flechas hacia ambas columnas. Colores planos, letra grande.' } },
        { icon: 'Copy', body: 'Las gónadas son glándulas de **secreción interna**: envían sus hormonas a la **sangre**, como aprendiste la semana pasada.', reveal: [
          { icon: 'Dna', front: 'Testículos', back: 'Producen principalmente **testosterona** y, desde la pubertad, forman **espermatozoides**.' },
          { icon: 'Microscope', front: 'Ovarios', back: 'Producen principalmente **estrógenos** y **progesterona** y contienen **ovocitos**, células que participan en la ovogénesis.' },
          { icon: 'Droplet', front: 'Testosterona', back: 'Contribuye a cambios como una voz más grave, vello facial y aumento de masa muscular. La intensidad varía entre personas.' },
          { icon: 'Droplets', front: 'Estrógenos y progesterona', back: 'Contribuyen al desarrollo de las mamas y regulan el **ciclo menstrual**. Cada cuerpo responde de manera distinta.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.2'], ambito: 'conocer',
          prompt: 'Clasifica cada función: ¿es de los **testículos**, de los **ovarios** o de **ambos**?',
          hint: 'Testículos: testosterona y espermatozoides. Ovarios: estrógenos, progesterona y ovocitos.',
          explain: 'Los dos son glándulas sexuales de secreción interna que producen hormonas y forman células reproductoras.' },
        { buckets: [
          { id: 'tes', label: 'Testículos', icon: 'Dna', color: 'var(--area-l1)' },
          { id: 'ova', label: 'Ovarios', icon: 'Microscope', color: 'var(--area-mat)' },
          { id: 'amb', label: 'Ambos', icon: 'Copy', color: 'var(--area-cnt)' },
        ], items: [
          { id: 'f1', text: 'Producen testosterona', bucket: 'tes' },
          { id: 'f2', text: 'Contienen ovocitos que participan en la ovogénesis', bucket: 'ova' },
          { id: 'f3', text: 'Producen estrógenos y progesterona', bucket: 'ova' },
          { id: 'f4', text: 'Forman espermatozoides', bucket: 'tes' },
          { id: 'f5', text: 'Envían hormonas a la sangre', bucket: 'amb' },
          { id: 'f6', text: 'Reciben la señal de la hipófisis', bucket: 'amb' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.2'], ambito: 'conocer', title: 'Los cambios de la pubertad',
          prompt: 'Las hormonas contribuyen a cambios que siguen patrones generales, pero cada persona los vive de forma distinta. Toca las tarjetas.' },
        { icon: 'Users', body: 'Los cambios llegan poco a poco durante varios años. Ningún cambio corporal determina los gustos, capacidades o forma de ser de una persona.', reveal: [
          { icon: 'Users', front: 'Cambios muy comunes', back: 'Muchas personas tienen **estirón**, vello en axilas y pubis, más sudor y grasa en la piel. No aparecen al mismo tiempo ni con la misma intensidad.' },
          { icon: 'Mic', front: 'Más testosterona', back: 'Suelen aparecer una voz más grave, vello facial y mayor masa muscular; los testículos empiezan a formar espermatozoides.' },
          { icon: 'Flower', front: 'Ciclo ovárico', back: 'Suelen desarrollarse las mamas y puede llegar la **primera menstruación** (menarquia). Su fecha varía y no define la madurez de una persona.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.2'], ambito: 'conocer',
          prompt: 'Clasifica cada cambio de la pubertad.',
          hint: 'Revisa las tarjetas: distingue cambios muy comunes de los relacionados con ciertos órganos y hormonas.',
          explain: 'El estirón, el vello axilar y el sudor son muy comunes. Una voz más grave suele relacionarse con mayor testosterona; la menstruación ocurre en personas con útero y ovarios. Hay variación normal.' },
        { buckets: [
          { id: 'var', label: 'Común con más testosterona', icon: 'Mic', color: 'var(--area-l1)' },
          { id: 'muj', label: 'Común en el ciclo ovárico', icon: 'Flower', color: 'var(--area-mat)' },
          { id: 'tod', label: 'Muy común en la pubertad', icon: 'Users', color: 'var(--area-cnt)' },
        ], items: [
          { id: 'c1', text: 'La voz se vuelve más grave', bucket: 'var' },
          { id: 'c2', text: 'Primera menstruación', bucket: 'muj' },
          { id: 'c3', text: 'Crecer rápido (estirón)', bucket: 'tod' },
          { id: 'c4', text: 'Vello en las axilas', bucket: 'tod' },
          { id: 'c5', text: 'Desarrollo de las mamas', bucket: 'muj' },
          { id: 'c6', text: 'Vello en la cara', bucket: 'var' },
          { id: 'c7', text: 'Más sudor y granitos en la piel', bucket: 'tod', feedback: 'Las glándulas sudoríparas y sebáceas trabajan más en muchas personas durante la pubertad.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.2'], ambito: 'conocer', title: 'Ejemplo: la cadena de mensajes',
          prompt: 'Mira cómo una cadena de hormonas explica un cambio concreto.' },
        { icon: 'Route', problem: 'A los 13 años, a Andrés se le empieza a "quebrar" la voz y luego se le vuelve más grave. ¿Cómo lo explica la ciencia?',
          steps: [
            { text: 'La **hipófisis** de Andrés empezó a enviar hormonas a la sangre.', why: 'Es la glándula maestra: da órdenes a otras glándulas.' },
            { text: 'Esas hormonas llegaron a sus **testículos**, que comenzaron a producir **testosterona**.' },
            { text: 'La testosterona viajó por la sangre hasta la **laringe** (donde está la voz), que creció, y sus cuerdas vocales se hicieron más largas y gruesas.' },
            { text: 'Mientras la laringe crece, la voz se "quiebra"; al terminar, queda **más grave**.' },
          ],
          answer: 'Hipófisis → testículos → testosterona → la laringe crece → voz más grave.',
          tip: 'La misma lógica sirve para las mujeres: hipófisis → ovarios → estrógenos → cambios femeninos.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt', 'fc'], cnb: ['cnt:2.3.2'], ambito: 'ser',
          prompt: 'Kevin tiene 12 años. A sus amigos ya les cambió la voz, pero a él no, y está preocupado. ¿Qué le dirías?',
          explain: 'La pubertad empieza a edades distintas: entre los 9 y los 14 años en los varones, aproximadamente. Si alguien tiene dudas sobre su desarrollo, puede consultar al personal de salud.' },
        { options: [
          { id: 'a', text: 'Que algo está mal en su cuerpo', icon: 'X', feedback: 'No es así: cada cuerpo tiene su propio ritmo.' },
          { id: 'b', text: 'Que es normal: cada cuerpo tiene su ritmo, y puede preguntar a su familia o al centro de salud', icon: 'Clock' },
          { id: 'c', text: 'Que tome algo para que le cambie más rápido', icon: 'Pill', feedback: 'Nunca se debe tomar nada sin indicación médica. Esperar es lo normal.' },
        ], correct: ['b'] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.3.2'], ambito: 'conocer',
          prompt: 'Une cada hormona o célula con la glándula relacionada.',
          explain: 'Testosterona y espermatozoides: testículos. Estrógenos, progesterona y ovocitos: ovarios. La señal inicial: hipófisis.' },
        { leftTitle: 'Producto', rightTitle: 'Glándula', pairs: [
          { id: 't', left: 'Testosterona', right: 'Testículos' },
          { id: 'e', left: 'Estrógenos', right: 'Ovarios' },
          { id: 'h', left: 'Hormonas que inician la pubertad', right: 'Hipófisis' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:2.3.2'], ambito: 'hacer',
          prompt: 'En la pubertad, las glándulas sudoríparas y sebáceas trabajan más. ¿Qué hábitos ayudan? Elige **todos** los correctos.',
          explain: 'Bañarse a diario, usar ropa limpia y lavarse la cara con agua y jabón ayudan a controlar el olor y los granitos. Apretar los granitos puede infectarlos y dejar marcas.' },
        { multiple: true, options: [
          { id: 'a', text: 'Bañarse todos los días', icon: 'Droplets' },
          { id: 'b', text: 'Usar ropa y calcetines limpios', icon: 'Shirt' },
          { id: 'c', text: 'Apretar los granitos con las uñas', icon: 'Hand', feedback: 'Apretarlos puede causar infecciones y marcas.' },
          { id: 'd', text: 'Lavarse la cara con agua y jabón suave', icon: 'Sparkles' },
        ], correct: ['a', 'b', 'd'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.2'], prompt: '¿Qué hormonas producen principalmente los **ovarios** y qué células contienen?' },
        { options: [
          { id: 'a', text: 'Testosterona y espermatozoides' },
          { id: 'b', text: 'Estrógenos, progesterona y ovocitos' },
          { id: 'c', text: 'Insulina' },
          { id: 'd', text: 'Adrenalina' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Los testículos son las glándulas sexuales masculinas.', answer: true },
          { text: 'La pubertad empieza exactamente a la misma edad en todas las personas.', answer: false, why: 'Cada cuerpo tiene su ritmo: empieza entre los 8 y los 14 años, aproximadamente.' },
          { text: 'La hipófisis envía la señal que activa las glándulas sexuales.', answer: true },
          { text: 'Las glándulas sexuales solo producen células reproductoras y ninguna hormona.', answer: false, why: 'También producen hormonas: testosterona, estrógenos y progesterona.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Aparato reproductor masculino y células reproductoras ───────────────────────── */
  lesson({
    id: 's04-cnt-2',
    title: 'Aparato reproductor masculino y células reproductoras',
    icon: 'HeartHandshake',
    minutes: 15,
    gancho: 'La planta de maíz tiene una espiga arriba que suelta polen y un jilote con "pelo de elote" que lo recibe. Los seres humanos también tienen órganos para formar nuevas vidas. ¿Cuáles son?',
    objetivos: [
      "Relacionar las estructuras del aparato reproductor masculino con la formación y el recorrido de los espermatozoides",
    ],
    resumen: [
      'Aparato reproductor masculino: testículos (con túbulos seminíferos donde se forman los espermatozoides), escroto, conductos eferentes, epidídimo, conductos deferentes, vesículas seminales, próstata, uretra y pene, cuyo extremo se llama glande.',
      'Recorrido de los espermatozoides: túbulos seminíferos → conductos eferentes → epidídimo → conducto deferente → uretra.',
      'En el modelo escolar de la espermatogénesis, la meiosis de una célula inicial produce cuatro espermatozoides funcionales.',
      'La ovogénesis empieza antes de nacer. Al completar el proceso produce una célula funcional grande y cuerpos polares pequeños. En un ciclo típico puede liberarse un ovocito secundario; la meiosis II solo se completa si ocurre la fecundación. En lenguaje común suele llamarse “óvulo” a la célula liberada.',
    ],
    media: {
      id: 's04-cnt-2-aparato', kind: 'diagram', title: 'Aparato reproductor masculino (esquema)', aspect: '4:3',
      alt: 'Esquema de libro de texto, de perfil y con colores planos, que señala testículos, escroto, conductos eferentes, epidídimo, conducto deferente, vesícula seminal, próstata, uretra y pene con el glande.',
      brief: 'Diagrama escolar esquemático (no realista, sin sombreado de piel), vista de corte lateral en colores planos: testículos y escroto (naranja), recuadro ampliado de un testículo con los túbulos seminíferos enrollados y los conductos eferentes que salen hacia el epidídimo (amarillo), conducto deferente (línea azul que sube y rodea la vejiga), vesícula seminal y próstata (verde), uretra (azul claro) y pene con el glande señalado. Vejiga en gris como referencia. Etiquetas con líneas guía, tipografía grande. Estilo idéntico al de libros de Ciencias Naturales de primaria.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:3.1.1'], title: 'Idea central', prompt: 'Conocer la anatomía con lenguaje preciso ayuda a resolver dudas sin rumores ni vergüenza.' },
        { icon: 'BookOpenCheck', body: "Aparato reproductor masculino: testículos (con túbulos seminíferos donde se forman los espermatozoides), escroto, conductos eferentes, epidídimo, conductos deferentes, vesículas seminales, próstata, uretra y pene, cuyo extremo se llama glande." },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.1.1'], ambito: 'conocer',
          prompt: 'Hoy usarás **nombres científicos**, correctos y respetuosos. En la milpa, la **espiga** del maíz suelta polen y el **jilote** lo recibe por sus "pelos de elote". En los seres humanos, ¿qué células se unen para formar una nueva vida?',
          explain: 'En lenguaje común se dice que se unen el **óvulo** y el **espermatozoide**. Con mayor precisión, la célula liberada por el ovario suele ser un **ovocito secundario**; si ocurre la fecundación, completa la meiosis II. El espermatozoide se forma en los testículos y tiene una cola o flagelo para moverse. Si tienes dudas, conversa con tu familia, tu docente o el personal de salud.' },
        { options: [
          { id: 'a', text: 'Un óvulo y un espermatozoide', icon: 'Egg' },
          { id: 'b', text: 'Dos células de la piel', icon: 'Hand', feedback: 'Las células de la piel tienen 46 cromosomas y no forman nuevos seres. Se necesitan células reproductoras, de 23 cromosomas.' },
          { id: 'c', text: 'Un grano de polen y una semilla', icon: 'Wheat', feedback: 'Eso se parece a lo que ocurre en las plantas. En las personas son otras células reproductoras.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.1.1'], ambito: 'conocer', title: 'Donde se forman los espermatozoides',
          prompt: 'Observa el esquema de la lección, empezando por los testículos. Toca cada tarjeta.' },
        { icon: 'Dna', body: 'Los **testículos** son dos glándulas en forma de óvalo. Por dentro tienen tubitos enrollados muy finos.', reveal: [
          { icon: 'Route', front: 'Túbulos seminíferos', back: 'Tubitos enrollados **dentro de los testículos**. En sus paredes se **forman los espermatozoides**.' },
          { icon: 'Thermometer', front: 'Escroto', back: 'Bolsa de piel que **protege** a los testículos y los mantiene **fuera del abdomen**, un poco más frescos: los espermatozoides necesitan una temperatura algo menor que la del resto del cuerpo.' },
          { icon: 'Link', front: 'Conductos eferentes', back: 'Pequeños conductos que **llevan los espermatozoides** desde los túbulos seminíferos hasta el epidídimo.' },
          { icon: 'Archive', front: 'Epidídimo', back: 'Tubo enrollado sobre cada testículo donde los espermatozoides **maduran y se guardan**.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.1.1'], ambito: 'conocer', title: 'Por donde viajan y qué los acompaña',
          prompt: 'Ahora sigue el camino hacia afuera. Toca cada tarjeta.' },
        { icon: 'Route', body: 'Los espermatozoides viajan por conductos, y varias glándulas agregan **líquidos** que los nutren y protegen. Espermatozoides + líquidos = **semen**.', reveal: [
          { icon: 'Route', front: 'Conductos deferentes', back: 'Tubos que **transportan** los espermatozoides desde el epidídimo hacia la uretra.' },
          { icon: 'Droplets', front: 'Vesículas seminales y próstata', back: 'Glándulas que producen **líquidos** que forman el **semen** y dan energía a los espermatozoides.' },
          { icon: 'Droplet', front: 'Uretra', back: 'Conducto que pasa por el pene y lleva al exterior la **orina** o el **semen**, nunca los dos a la vez.' },
          { icon: 'CircleDot', front: 'Pene y glande', back: 'El **pene** es el órgano externo por donde pasa la uretra. Su extremo se llama **glande** y está cubierto por una piel llamada **prepucio**.' },
        ] },
      ),
      S.order(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.1.1'], ambito: 'conocer',
          prompt: 'Ordena el **recorrido de los espermatozoides**, desde donde se forman hasta que salen del cuerpo.',
          hint: 'Se forman dentro del testículo, pasan por conductos pequeños, maduran, viajan por un tubo largo y salen por la uretra.',
          explain: 'Túbulos seminíferos → conductos eferentes → epidídimo → conducto deferente → uretra.',
          media: { id: 's04-cnt-2-recorrido', kind: 'animation', title: 'El recorrido de los espermatozoides', aspect: '16:9', duration: 40,
            alt: 'Animación esquemática en la que puntos de colores recorren túbulos seminíferos, conductos eferentes, epidídimo, conducto deferente y uretra, mientras la vesícula seminal y la próstata añaden líquido.',
            brief: 'Animación 2D de 40 s sobre el mismo esquema escolar de la lección (colores planos, sin realismo): pequeños puntos representan espermatozoides que se forman en los túbulos seminíferos, pasan por los conductos eferentes al epidídimo, suben por el conducto deferente, reciben líquido de la vesícula seminal y la próstata (gotas verdes) y salen por la uretra. Rótulo en cada estructura cuando los puntos pasan. Narración científica, tranquila, en español con subtítulos.' } },
        { labels: { start: 'Se forman', end: 'Salen' }, items: [
          { id: 'r1', text: 'Túbulos seminíferos', icon: 'Route' },
          { id: 'r2', text: 'Conductos eferentes', icon: 'Link' },
          { id: 'r3', text: 'Epidídimo', icon: 'Archive' },
          { id: 'r4', text: 'Conducto deferente', icon: 'Route' },
          { id: 'r5', text: 'Uretra', icon: 'Droplet' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.1.1'], ambito: 'conocer',
          prompt: 'Une cada estructura con su función.',
          hint: 'Vuelve a leer las tarjetas si lo necesitas: formar, proteger, madurar, transportar, agregar líquido.',
          explain: 'Cada estructura tiene un trabajo en el recorrido: formar, proteger, madurar, transportar y agregar líquidos.' },
        { leftTitle: 'Estructura', rightTitle: 'Función', pairs: [
          { id: 'ts', left: 'Túbulos seminíferos', right: 'Forman los espermatozoides' },
          { id: 'es', left: 'Escroto', right: 'Protege a los testículos y regula su temperatura' },
          { id: 'ep', left: 'Epidídimo', right: 'Donde maduran y se guardan los espermatozoides' },
          { id: 'de', left: 'Conducto deferente', right: 'Transporta los espermatozoides hacia la uretra' },
          { id: 'pr', left: 'Próstata', right: 'Produce líquido que forma parte del semen' },
          { id: 'gl', left: 'Glande', right: 'Extremo del pene, cubierto por el prepucio' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.2.1'], ambito: 'conocer', title: 'Espermatogénesis y ovogénesis',
          prompt: 'La formación de células reproductoras se llama **gametogénesis**. Hay dos tipos. Toca las tarjetas.' },
        { icon: 'Dna', body: 'Recuerda la semana 2: las células reproductoras llevan **23 cromosomas**, la mitad que las demás células. Al unirse un óvulo y un espermatozoide, la nueva célula tiene 46.', reveal: [
          { icon: 'Dna', front: 'Espermatogénesis', back: 'Formación de **espermatozoides** en los **túbulos seminíferos** de los testículos. Empieza en la **pubertad** y puede continuar durante la vida adulta.' },
          { icon: 'CircleDot', front: 'Ovogénesis', back: 'Empieza **antes de nacer** y se pausa. Desde la pubertad, en un ciclo típico puede liberarse un **ovocito secundario**; los ciclos varían y no siempre ocurre una liberación.' },
          { icon: 'Hash', front: 'División desigual', back: 'Al completar la ovogénesis se obtiene **una célula funcional grande** y **cuerpos polares** pequeños. No son cuatro células funcionales iguales.' },
          { icon: 'Egg', front: '“Óvulo” y ovocito', back: '**Óvulo** es el término común simplificado para la célula liberada. Con precisión, suele ser un **ovocito secundario**, y la **meiosis II solo se completa si ocurre la fecundación**.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.2.1'], ambito: 'conocer',
          prompt: 'Clasifica cada característica: ¿espermatogénesis, ovogénesis o ambas?',
          hint: 'Piensa en el lugar (testículos u ovarios), cuándo empieza y cuántas células forma.',
          explain: 'Ambos procesos forman células con 23 cromosomas, pero se diferencian en el lugar, el momento y la cantidad.' },
        { buckets: [
          { id: 'esp', label: 'Espermatogénesis', icon: 'Dna', color: 'var(--area-l1)' },
          { id: 'ovo', label: 'Ovogénesis', icon: 'CircleDot', color: 'var(--area-mat)' },
          { id: 'amb', label: 'Ambas', icon: 'Copy', color: 'var(--area-cnt)' },
        ], items: [
          { id: 'o1', text: 'Ocurre en los testículos', bucket: 'esp' },
          { id: 'o2', text: 'Ocurre en los ovarios', bucket: 'ovo' },
          { id: 'o3', text: 'Forma millones de células cada día desde la pubertad', bucket: 'esp' },
          { id: 'o4', text: 'En un ciclo típico puede liberar un ovocito secundario', bucket: 'ovo' },
          { id: 'o5', text: 'Comienza antes del nacimiento', bucket: 'ovo' },
          { id: 'o6', text: 'Forma células con 23 cromosomas', bucket: 'amb' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.2.1'], ambito: 'hacer', title: 'Ejemplo: nombrar el proceso con precisión',
          prompt: 'Sigue una secuencia típica sin convertirla en una regla para todos los ciclos.' },
        { icon: 'Route', problem: 'Un esquema muestra que una célula inicia la ovogénesis, luego aparece una célula grande con un cuerpo polar y, durante un ciclo, esa célula grande es liberada. ¿Cómo se explica?',
          steps: [
            { text: 'La división es **desigual**: se conserva una célula funcional grande y se forman cuerpos polares pequeños.' },
            { text: 'La célula que puede liberarse es un **ovocito secundario**; en lenguaje común suele llamarse “óvulo”.' },
            { text: 'La **meiosis II** queda incompleta y solo termina si ocurre la fecundación.', why: 'Por eso no conviene decir que cada ciclo produce automáticamente un óvulo completo.' },
          ],
          answer: 'Es un **ovocito secundario** que puede ser liberado; la meiosis II solo se completa si ocurre la fecundación.',
          tip: '“Puede” expresa variación normal: no todos los ciclos son iguales.' },
      ),
      S.number(
        { fase: 'aplicar', areas: ['cnt', 'mat'], cnb: ['cnt:3.2.1'], ambito: 'hacer',
          prompt: 'Supongamos que **25 células iniciales** hacen espermatogénesis. ¿Cuántos espermatozoides se forman?',
          explain: 'Cada célula inicial forma 4 espermatozoides: 25 × 4 = 100.' },
        { answer: 100, unit: 'espermatozoides', misconceptions: [
          { value: 25, msg: 'Contaste una por célula. En este modelo de espermatogénesis se forman 4 por cada célula inicial.' },
          { value: 29, msg: 'Sumaste 25 + 4. Cada una de las 25 células forma 4: hay que multiplicar.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:3.1.1'], ambito: 'conocer',
          prompt: '¿Por qué los testículos están en el **escroto**, fuera del abdomen?',
          explain: 'Los espermatozoides se forman mejor a una temperatura **un poco más baja** que la del interior del cuerpo; el escroto la regula.' },
        { options: [
          { id: 'a', text: 'Para que estén un poco más frescos, porque así se forman mejor los espermatozoides', icon: 'Thermometer' },
          { id: 'b', text: 'Porque no caben dentro del cuerpo', icon: 'Package', feedback: 'La razón es la temperatura que necesitan los espermatozoides.' },
          { id: 'c', text: 'Para producir orina', icon: 'Droplet', feedback: 'La orina se produce en los riñones, no en los testículos.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.1.1'], prompt: '¿En qué estructura se **forman** los espermatozoides?' },
        { options: [
          { id: 'a', text: 'En la próstata' },
          { id: 'b', text: 'En los túbulos seminíferos de los testículos' },
          { id: 'c', text: 'En la uretra' },
          { id: 'd', text: 'En los ovarios' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.1.1', 'cnt:3.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Los conductos deferentes transportan los espermatozoides hacia la uretra.', answer: true },
          { text: 'La ovogénesis ocurre en los testículos.', answer: false, why: 'La ovogénesis ocurre en los ovarios; en los testículos ocurre la espermatogénesis.' },
          { text: 'En la ovogénesis se conserva una célula funcional grande y se forman cuerpos polares pequeños.', answer: true },
          { text: 'La meiosis II del ovocito secundario termina en todos los ciclos.', answer: false, why: 'Solo se completa si ocurre la fecundación; además, los ciclos presentan variación normal.' },
          { text: 'El glande es una glándula que produce semen.', answer: false, why: 'El glande es el extremo del pene. Los líquidos del semen los producen las vesículas seminales y la próstata.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Pudor y paternidad responsable ───────────────────────── */
  lesson({
    id: 's04-cnt-3',
    title: 'Sexualidad con respeto: pudor y paternidad responsable',
    icon: 'ShieldCheck',
    minutes: 17,
    gancho: 'Conocer cómo funciona el cuerpo viene con una pregunta importante: ¿cómo debemos tratar nuestro cuerpo y el de los demás?',
    objetivos: [
      "Aplicar cuidado ético a la intimidad, la búsqueda de ayuda y la crianza responsable",
    ],
    resumen: [
      'La ética en la sexualidad significa tratar el propio cuerpo y el de los demás con respeto, cuidado y responsabilidad.',
      'El pudor es respetar la intimidad propia y la de otras personas: cambiarse en privado, tocar antes de entrar, no mirar, tocar, fotografiar ni compartir imágenes del cuerpo de nadie.',
      'Tu cuerpo es tuyo. Nadie debe pedirte mostrar o tocar partes privadas ni guardar secretos sobre eso. El cuidado de salud o higiene debe explicarse, respetar tu dignidad y contar con apoyo adulto apropiado.',
      'La crianza responsable implica cuidar, proteger, educar, dar afecto y sostener a hijas e hijos; las personas responsables comparten esas tareas. Requiere madurez y corresponde a la edad adulta.',
    ],
    media: {
      id: 's04-cnt-3-cuidar', kind: 'image', title: 'Un papá que cuida', aspect: '4:3',
      alt: 'Ilustración de un padre guatemalteco que prepara el desayuno mientras conversa con su hija, y al fondo revisa las tareas de su hijo.',
      brief: 'Ilustración cálida en una cocina sencilla guatemalteca: un padre joven prepara huevos y frijoles mientras escucha con atención a su hija de 7 años; en una mesa, su hijo hace la tarea y el padre le señala el cuaderno. Una madre llega del trabajo y se saludan. Mensaje visual de corresponsabilidad y afecto. Rótulo opcional: "Cuidar también es cosa de papás". Sin marcas, estilo de libro de texto.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:3.3.1'], title: 'Idea central', prompt: 'El cuidado ético respeta la intimidad, busca apoyo y comparte las responsabilidades.' },
        { icon: 'BookOpenCheck', body: "La ética en la sexualidad significa tratar el propio cuerpo y el de los demás con respeto, cuidado y responsabilidad." },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:3.3.1'], ambito: 'ser', title: '¿Qué es el pudor?',
          prompt: 'La **ética en la sexualidad** es tratar el propio cuerpo y el de los demás con **respeto**. Una forma de hacerlo es el **pudor**. Toca las tarjetas.' },
        { icon: 'Lock', body: 'El **pudor** es respetar la **intimidad** propia y ajena. Tu cuerpo merece cuidado: una revisión de salud debe explicarse, proteger tu dignidad y contar con apoyo adulto apropiado.', reveal: [
          { icon: 'Home', front: 'Mi privacidad', back: 'Me cambio de ropa y uso el baño **en privado**, cierro la puerta y cuido mi cuerpo.' },
          { icon: 'EyeOff', front: 'La privacidad de otros', back: '**Toco antes de entrar**, no miro a quien se está cambiando y no hago bromas sobre el cuerpo de nadie.' },
          { icon: 'Smartphone', front: 'Imágenes y secretos', back: 'No tomo, pido, envío ni comparto imágenes íntimas. Si alguien lo pide o solicita guardar un secreto sobre tocar el cuerpo, digo no, me alejo y se lo cuento a una persona adulta de confianza.' },
          { icon: 'Stethoscope', front: 'Ayuda segura', back: 'Ante una preocupación, hablo con una persona adulta de confianza o un profesional de salud; pedir ayuda nunca es culpa de quien la necesita.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:3.3.1'], ambito: 'ser',
          prompt: '¿Esta acción **respeta** el pudor o **no lo respeta**?',
          hint: 'Pregúntate: ¿cuida la intimidad de la persona?',
          explain: 'Respetar el pudor es cuidar la intimidad propia y ajena, también en el celular.' },
        { buckets: [
          { id: 'si', label: 'Respeta el pudor', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          { id: 'no', label: 'No lo respeta', icon: 'X', color: 'var(--c-bad)' },
        ], items: [
          { id: 'p1', text: 'Tocar la puerta antes de entrar al baño', bucket: 'si' },
          { id: 'p2', text: 'Asomarse al vestidor mientras otros se cambian', bucket: 'no' },
          { id: 'p3', text: 'Cambiarse de ropa en un lugar privado', bucket: 'si' },
          { id: 'p4', text: 'Reenviar en un grupo la foto íntima de alguien', bucket: 'no', feedback: 'Compartir imágenes íntimas de otra persona es una falta grave de respeto y puede ser un delito.' },
          { id: 'p5', text: 'No burlarse de los cambios del cuerpo de un compañero', bucket: 'si' },
          { id: 'p6', text: 'Hacer chistes sobre el cuerpo de una compañera', bucket: 'no' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:3.3.1'], ambito: 'ser',
          prompt: 'Una persona le pide a Lucía que le envíe una foto sin ropa y que "no le diga a nadie". ¿Qué debe hacer Lucía?',
          hint: 'Recuerda la tarjeta de los secretos que no se guardan.',
          explain: 'Lucía **no** debe enviar nada y **debe contarlo** a una persona adulta de confianza. No es su culpa, y pedir ayuda es lo correcto.' },
        { options: [
          { id: 'a', text: 'Enviarla para no quedar mal', icon: 'Smartphone', feedback: 'Nunca. Esa foto podría compartirse y hacerle mucho daño. Nadie tiene derecho a pedirla.' },
          { id: 'b', text: 'No enviarla y contarlo a una persona adulta de confianza', icon: 'ShieldCheck' },
          { id: 'c', text: 'No enviarla, pero guardar el secreto', icon: 'Lock', feedback: 'No enviarla es correcto, pero este es un secreto que **no** se guarda: hay que contarlo para que un adulto la proteja.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:3.3.1'], ambito: 'ser', title: 'Paternidad responsable',
          prompt: 'Ser padre o madre es mucho más que tener un hijo. Mira la imagen de la lección y toca las tarjetas.' },
        { icon: 'Baby', body: 'La **paternidad responsable** significa que el padre, junto con la madre, se hace cargo de sus hijos: los **cuida, protege, educa, les da afecto y los sostiene**.', reveal: [
          { icon: 'Heart', front: 'Afecto y tiempo', back: 'Abrazar, escuchar, jugar y estar presente. Los niños necesitan a su papá **cerca**, no solo su dinero.' },
          { icon: 'Stethoscope', front: 'Cuidado y salud', back: 'Alimentación, vacunas, higiene, llevarlos al centro de salud: **tareas de papá y mamá por igual**.' },
          { icon: 'GraduationCap', front: 'Educación y ejemplo', back: 'Enseñar valores con el ejemplo, apoyar la escuela y poner **límites con cariño**, sin violencia.' },
          { icon: 'Clock', front: 'Una decisión adulta', back: 'Un bebé necesita cuidado **día y noche** por muchos años. Por eso tener hijos es una decisión para la **edad adulta**, con madurez, estudios o trabajo y un proyecto de vida.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:3.3.1'], ambito: 'ser', title: 'Ejemplo: ¿por qué es una decisión de la edad adulta?',
          prompt: 'Razona paso a paso qué necesita un bebé y qué se necesita para dárselo.' },
        { icon: 'Baby', problem: 'Un adolescente de 15 años pregunta: "¿Por qué dicen que ser papá es para cuando uno es adulto?". Ayúdale a razonar.',
          steps: [
            { text: 'Un bebé necesita **alimento, abrigo, vacunas y cuidado** a toda hora, también de noche.' },
            { text: 'Después necesitará **educación**, útiles, ropa y acompañamiento durante **muchos años**.', why: 'La responsabilidad no dura unos meses: dura hasta que el hijo es adulto.' },
            { text: 'Para darle todo eso se necesita **madurez emocional**, estabilidad, **estudios o trabajo** y acuerdo con la otra persona.' },
            { text: 'A los 15 años, un adolescente todavía está **estudiando y creciendo**: le falta preparación para asumir esa responsabilidad.' },
          ],
          answer: 'Ser padre exige cuidado, tiempo y recursos por muchos años; por eso es una decisión **responsable de la edad adulta**.',
          tip: 'Ahora es tiempo de estudiar, cuidar tu cuerpo y construir tu proyecto de vida.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt', 'fc'], cnb: ['cnt:3.3.1'], ambito: 'convivir',
          prompt: 'Después de Educación Física, alguien quiere fotografiar a un compañero mientras se cambia. ¿Qué acción protege mejor su intimidad de inmediato?' },
        { options: [
          { id: 'a', icon: 'EyeOff', text: 'Reírse y no intervenir', feedback: 'La burla no protege a la persona ni detiene la fotografía.' },
          { id: 'b', icon: 'ShieldCheck', text: 'Pedir que guarde el celular y avisar enseguida a una persona adulta responsable' },
          { id: 'c', icon: 'Smartphone', text: 'Esperar a que tome la foto y después pedir que la borre', feedback: 'La prioridad es impedir la fotografía y buscar apoyo adulto antes de que ocurra.' },
        ], correct: ['b'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['cnt', 'l1'], cnb: ['cnt:3.3.1'], ambito: 'ser', title: 'Una regla de cuidado',
          prompt: 'Escribe de 12 a 18 palabras: una acción de crianza responsable y por qué cuida a niñas o niños.' },
        { placeholder: 'Compartir la crianza significa… porque…',
          model: 'Compartir la alimentación, la escucha y la educación protege a niñas y niños y demuestra responsabilidad.',
          rubric: ['Nombra una acción concreta de cuidado', 'Explica su beneficio', 'Evita estereotipos sobre quién debe criar'],
          minWords: 12 },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.3.1'], prompt: '¿Qué significa **pudor**?' },
        { options: [
          { id: 'a', text: 'Tener miedo de hablar del cuerpo' },
          { id: 'b', text: 'Respetar la intimidad propia y la de los demás' },
          { id: 'c', text: 'Burlarse de los cambios de la pubertad' },
          { id: 'd', text: 'No bañarse para cuidar la privacidad' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.3.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La paternidad responsable incluye cuidar, educar y dar afecto a los hijos.', answer: true },
          { text: 'Si alguien me pide guardar un secreto sobre tocar mi cuerpo, debo guardarlo.', answer: false, why: 'Ese secreto no se guarda: hay que contarlo a una persona adulta de confianza.' },
          { text: 'Criar a los hijos es tarea solo de las madres.', answer: false, why: 'Es una responsabilidad compartida entre padre y madre.' },
          { text: 'Tocar la puerta antes de entrar al baño es una forma de respetar el pudor.', answer: true },
        ] },
      ),
      cierre({ areas: ['cnt', 'fc'], cnb: [] },
        ['Explico qué significa cuidar la intimidad', 'Sé cómo pedir ayuda ante una situación incómoda', 'Reconozco que la crianza responsable comparte cuidado, educación, afecto y sostén'],
        ['Respetaré la intimidad de mis compañeros', 'Identificaré a dos adultos de confianza', 'Conversaré con mi familia sobre lo que aprendí']),
    ],
  }),
];
