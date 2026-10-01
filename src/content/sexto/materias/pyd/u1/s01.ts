/**
 * Productividad y Desarrollo · Unidad 1 · Semana 1 — Mi lugar en el planeta.
 * Qué es el desarrollo, qué elementos lo caracterizan y cuáles determinan la pobreza
 * de una población; cómo se relacionan lo ambiental, lo histórico y lo económico.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's01-pyd-1',
    title: 'Desarrollo y pobreza: ¿qué necesita una comunidad para vivir bien?',
    icon: 'TrendingUp',
    minutes: 15,
    gancho: 'Una aldea tiene un centro comercial nuevo, pero la mitad de los niños no va a la escuela y no hay agua potable. ¿Es una aldea desarrollada?',
    objetivos: [
      'Explicar qué es el desarrollo y cuáles son sus elementos',
      'Reconocer los elementos que determinan la pobreza de una población',
      'Comparar dos comunidades con datos para ver cuál tiene más desarrollo',
    ],
    resumen: [
      'Desarrollo es que TODAS las personas de una comunidad mejoren sus condiciones de vida: alimentación, salud, educación, vivienda con agua y saneamiento, trabajo digno con ingresos, ambiente sano y participación.',
      'Hay pobreza cuando una familia no puede cubrir sus necesidades básicas; en la pobreza extrema no alcanza ni para la comida. La pobreza no es culpa de las personas: es una situación que se puede cambiar.',
      'Elementos que determinan la pobreza: falta de empleo digno, poca educación, falta de servicios (agua, salud, caminos), desigualdad, daño al ambiente y desastres.',
      'Lo ambiental, lo histórico y lo económico se relacionan: por ejemplo, cuidar el bosque protege el agua, y el agua permite producir y estar sanos.',
    ],
    media: {
      id: 's01-pyd-1-arbol-desarrollo', kind: 'diagram', title: 'Los elementos del desarrollo', aspect: '1:1',
      alt: 'Un árbol cuyas raíces son el ambiente sano y la participación, el tronco es el trabajo digno y las ramas son alimentación, salud, educación, vivienda y agua.',
      brief: 'Diagrama ilustrado de un árbol de ceiba. Raíces etiquetadas: "Ambiente sano", "Participación". Tronco: "Trabajo digno e ingresos". Cinco ramas con íconos: plato (Alimentación), estetoscopio (Salud), libro (Educación), casa (Vivienda), gota (Agua y saneamiento). En la copa, familias diversas de Guatemala. Título "El desarrollo es para todas las personas". Colores verdes y cálidos, letra grande, sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.1.1'], ambito: 'conocer', title: '¿Qué es el desarrollo?',
          prompt: 'El **desarrollo** es el proceso por el que **todas** las personas de una comunidad mejoran sus condiciones de vida. Tiene varios **elementos**. Toca cada tarjeta.' },
        { icon: 'TrendingUp', body: 'Las Naciones Unidas miden el **desarrollo humano** con tres dimensiones: **vida larga y saludable**, **educación** y **nivel de vida** (ingresos).', reveal: [
          { icon: 'Salad', front: 'Alimentación y salud', back: 'Comer lo suficiente y de forma variada; tener un **centro de salud** cerca y personal que atienda.' },
          { icon: 'GraduationCap', front: 'Educación', back: 'Que niñas y niños **terminen la escuela** y los adultos puedan seguir aprendiendo.' },
          { icon: 'Home', front: 'Vivienda, agua y saneamiento', back: 'Casa segura, **agua potable**, drenaje o letrina, y electricidad.' },
          { icon: 'Briefcase', front: 'Trabajo digno e ingresos', back: 'Empleo o negocio que pague lo justo y permita cubrir las necesidades de la familia.' },
          { icon: 'Trees', front: 'Ambiente sano y participación', back: 'Bosques, ríos y suelos cuidados; y que la gente **participe** en las decisiones de su comunidad.' },
        ] },
      ),
      S.choice(
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:1.1.1'], ambito: 'conocer',
          prompt: '¿Qué crees que hace que una comunidad sea **desarrollada**?',
          explain: 'El desarrollo no se mide por edificios bonitos, sino por **cómo viven todas las personas**: si comen bien, tienen salud, estudian, tienen agua, vivienda y trabajo digno.' },
        { options: [
          { id: 'a', text: 'Que tenga un centro comercial grande', icon: 'ShoppingCart', feedback: 'Un centro comercial puede dar empleo, pero no dice si todas las personas tienen salud, agua o escuela.' },
          { id: 'b', text: 'Que todas las personas tengan salud, educación, agua y trabajo digno', icon: 'Users' },
          { id: 'c', text: 'Que unas pocas familias sean muy ricas', icon: 'Coins', feedback: 'Si solo unos pocos viven bien y los demás no, hay desigualdad, no desarrollo.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.1.1'], ambito: 'conocer', title: '¿Qué es la pobreza y qué la determina?',
          prompt: 'Hay **pobreza** cuando una familia **no puede cubrir sus necesidades básicas**. Toca cada tarjeta para entenderla mejor.' },
        { icon: 'Scale', body: 'La pobreza **no es culpa** de las personas que la viven: es una situación con **causas**, y por eso se puede cambiar.', reveal: [
          { icon: 'Wallet', front: 'Pobreza y pobreza extrema', back: '**Pobreza:** el ingreso no alcanza para comida, vivienda, salud y educación. **Pobreza extrema:** no alcanza **ni siquiera para la comida**.' },
          { icon: 'Layers', front: 'No es solo dinero', back: 'Una familia también es pobre si **no tiene agua**, si sus hijos **no pueden estudiar** o si no hay **centro de salud**. La pobreza tiene muchas caras.' },
          { icon: 'Search', front: 'Elementos que la determinan', back: 'Falta de **empleo digno**, **poca educación**, falta de **servicios** (agua, salud, caminos), **desigualdad**, **daño al ambiente** y **desastres**.' },
          { icon: 'MapPin', front: 'En Guatemala', back: 'Según la encuesta nacional de condiciones de vida de 2014, **aproximadamente 6 de cada 10** personas vivían en pobreza, sobre todo en el **área rural**.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.1.1'], prompt: '¿Cada dato es una señal de **desarrollo** o una señal de **pobreza**?',
          hint: 'Pregúntate: ¿esta situación ayuda a que las personas cubran sus necesidades básicas, o se lo impide?',
          explain: 'Las señales de pobreza muestran necesidades básicas sin cubrir; las de desarrollo muestran derechos y necesidades atendidos.' },
        { buckets: [
          { id: 'des', label: 'Señal de desarrollo', icon: 'TrendingUp', color: 'var(--c-ok)' },
          { id: 'pob', label: 'Señal de pobreza', icon: 'Wallet', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'd1', text: 'Todas las casas tienen agua potable', bucket: 'des' },
          { id: 'd2', text: 'Muchos niños dejan la escuela para trabajar', bucket: 'pob' },
          { id: 'd3', text: 'El centro de salud más cercano está a 4 horas caminando', bucket: 'pob' },
          { id: 'd4', text: 'Una cooperativa da trabajo digno a 40 familias', bucket: 'des' },
          { id: 'd5', text: 'Las familias no pueden comprar suficiente comida', bucket: 'pob' },
          { id: 'd6', text: 'La comunidad cuida su bosque y su nacimiento de agua', bucket: 'des' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto: comparar dos aldeas con datos',
          prompt: 'Para **analizar** el desarrollo se comparan **datos** de cada elemento. Mira cómo se hace (los datos son supuestos).' },
        { icon: 'ClipboardList', problem: 'Supongamos dos aldeas del mismo municipio. **Aldea El Pino:** 95 de cada 100 niños van a la escuela; hay agua potable en todas las casas; centro de salud a 20 minutos. **Aldea Río Seco:** 60 de cada 100 niños van a la escuela; agua solo de un pozo comunal; centro de salud a 3 horas. ¿Cuál tiene más desarrollo y qué elementos explican la pobreza de la otra?',
          steps: [
            { text: '**Educación:** El Pino 95 de 100; Río Seco 60 de 100. Ventaja para El Pino.' },
            { text: '**Agua:** El Pino, en cada casa; Río Seco, un pozo para todos. Ventaja para El Pino.', why: 'Sin agua en casa, niñas y mujeres pierden horas acarreando agua, y hay más enfermedades.' },
            { text: '**Salud:** 20 minutos contra 3 horas. Ventaja para El Pino.' },
            { text: '**Relación entre elementos:** en Río Seco, la falta de agua y de salud hace que los niños se enfermen y falten a la escuela; con menos estudio, luego es más difícil conseguir trabajo digno.' },
          ],
          answer: 'El Pino tiene **más desarrollo**. En Río Seco, la **falta de servicios** (agua, salud) y de **educación** son elementos que determinan su pobreza, y se refuerzan entre sí.',
          tip: 'Compara elemento por elemento y luego busca cómo se relacionan.' },
      ),
      S.number(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.1.1'], ambito: 'hacer',
          prompt: 'Supongamos que en Río Seco viven **120 familias** y solo **45** tienen letrina o drenaje. ¿Cuántas familias **no** tienen saneamiento?',
          hint: 'Resta: total de familias − familias que sí tienen.',
          explain: '120 − 45 = 75. Son 75 familias sin saneamiento: un dato que muestra una necesidad básica sin cubrir.' },
        { answer: 75, unit: 'familias', misconceptions: [
          { value: 165, msg: 'Sumaste. Queremos las que NO tienen: hay que restar 120 − 45.' },
          { value: 45, msg: '45 son las que SÍ tienen. ¿Cuántas faltan para llegar a 120?' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.1.1'], ambito: 'conocer', prompt: 'Lee cómo cambió una comunidad (historia inventada, pero parecida a muchas reales) y responde.' },
        { genre: 'Crónica', heading: 'El agua que cambió a San Isidro', passage:
          'Hace veinte años, en la aldea San Isidro, las niñas caminaban dos horas cada día para traer agua del río. Muchas dejaban la escuela. La leña del cerro se estaba acabando y, cuando llovía fuerte, el agua bajaba con lodo.\n\nLa comunidad formó un comité. Primero reforestaron el cerro donde nace el agua. Después, con apoyo de la municipalidad y mucho trabajo de las familias, llevaron el agua entubada a cada casa.\n\nCon el agua cerca, las niñas volvieron a la escuela. Un grupo de mujeres formó una cooperativa de hortalizas con riego por goteo y empezó a vender en el mercado del pueblo. Hoy San Isidro todavía tiene retos, pero sus familias viven mejor.',
          questions: [
            { q: '¿Qué elemento del desarrollo faltaba al inicio y afectaba la educación de las niñas?', options: [
              { id: 'a', text: 'El agua en las casas' },
              { id: 'b', text: 'Un centro comercial' },
              { id: 'c', text: 'Una carretera asfaltada' },
            ], correct: 'a' },
            { q: '¿Qué muestra la relación entre lo **ambiental** y lo **económico** en la historia?', options: [
              { id: 'a', text: 'Reforestar protegió el agua, y con el agua las mujeres pudieron producir y vender hortalizas' },
              { id: 'b', text: 'La leña se acabó y no pasó nada' },
              { id: 'c', text: 'El comercio no necesita agua' },
            ], correct: 'a', why: 'Los elementos del desarrollo se relacionan: cuidar el ambiente sostiene la economía.' },
            { q: '¿Por qué el texto dice que San Isidro "todavía tiene retos"?', options: [
              { id: 'a', text: 'Porque el desarrollo es un proceso: siempre hay algo más que mejorar' },
              { id: 'b', text: 'Porque el proyecto de agua fracasó' },
              { id: 'c', text: 'Porque las niñas dejaron la escuela otra vez' },
            ], correct: 'a' },
          ] },
      ),
      S.chart(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.1.1'], ambito: 'hacer',
          prompt: 'Supongamos que el comité de una aldea preguntó a **40 familias** cuál es la necesidad básica que más les falta. Resultados: agua potable **12**, centro de salud **6**, instituto básico **8** y trabajo digno **14**. Construye la gráfica de barras.',
          hint: 'Cada raya de la escala vale 2 familias. Sube cada barra hasta su número.',
          explain: 'Con la gráfica, el comité ve rápido que el **trabajo digno** y el **agua** son las necesidades más urgentes: por ahí conviene empezar.' },
        { source: 'Encuesta a 40 familias (datos supuestos)', max: 16, step: 2, unit: 'familias', categories: [
          { id: 'agua', label: 'Agua potable', icon: 'Droplet', color: 'var(--area-cnt)' },
          { id: 'salud', label: 'Centro de salud', icon: 'Stethoscope', color: 'var(--c-bad)' },
          { id: 'esc', label: 'Instituto básico', icon: 'GraduationCap', color: 'var(--area-l1)' },
          { id: 'trab', label: 'Trabajo digno', icon: 'Briefcase', color: 'var(--area-pyd)' },
        ], data: [12, 6, 8, 14] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.1.1'], ambito: 'emprender',
          prompt: 'Con los datos de la encuesta, ¿qué propuesta ataca mejor un **elemento que determina la pobreza** de esa aldea?',
          explain: 'Una buena propuesta atiende una **causa** (falta de trabajo digno), no solo un síntoma por un día.' },
        { options: [
          { id: 'a', text: 'Capacitar a jóvenes y adultos en un oficio y apoyar pequeños negocios de la aldea' },
          { id: 'b', text: 'Regalar dulces a los niños el día de la feria', feedback: 'Es un gesto amable, pero no cambia las condiciones de vida de las familias.' },
          { id: 'c', text: 'Pintar de colores la entrada de la aldea', feedback: 'Se ve bonito, pero no atiende ninguna necesidad básica de la encuesta.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.1.1'], prompt: '¿Cuál de estos es un **elemento que determina la pobreza** de una población?' },
        { options: [
          { id: 'a', text: 'La falta de empleo digno y de servicios como agua y salud' },
          { id: 'b', text: 'El color de las casas' },
          { id: 'c', text: 'El número de fiestas del año' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En la pobreza extrema, el ingreso no alcanza ni siquiera para la comida.', answer: true },
          { text: 'Una comunidad es desarrollada si unas pocas familias son muy ricas.', answer: false, why: 'El desarrollo es para todas las personas; si solo unos pocos viven bien, hay desigualdad.' },
          { text: 'La educación, la salud y el agua son elementos del desarrollo.', answer: true },
          { text: 'Cuidar el bosque no tiene nada que ver con la economía de una comunidad.', answer: false, why: 'El bosque protege el agua, y el agua permite producir y vivir sanos.' },
        ] },
      ),
      cierre({ areas: ['pyd'], cnb: ['pyd:1.1.1'] },
        ['Explico qué es el desarrollo y sus elementos', 'Reconozco elementos que determinan la pobreza', 'Comparo comunidades usando datos'],
        ['Observaré qué necesidades básicas están cubiertas en mi comunidad', 'Conversaré con mi familia sobre cómo cuidamos el agua']),
    ],
  }),
];
