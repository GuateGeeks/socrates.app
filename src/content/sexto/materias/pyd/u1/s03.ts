/**
 * Productividad y Desarrollo · Unidad 1 · Semana 3 — Mensajes y caminos que nos conectan.
 * Qué es un círculo de calidad y cómo se forma; técnicas para resolver problemas del entorno:
 * análisis de casos, árbol de causas y efectos, y análisis PNI (positivo, negativo, interesante).
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's03-pyd-1',
    title: 'Círculos de calidad: resolver problemas en equipo',
    icon: 'Users',
    minutes: 15,
    gancho: 'En tu escuela el chorro se queda abierto y el agua se desperdicia. ¿Lo resuelve un cartel que diga "cierre el chorro", o hay que averiguar primero por qué pasa?',
    objetivos: [
      'Explicar qué es un círculo de calidad, cómo se forma y cómo trabaja',
      'Separar causas y efectos de un problema con el árbol de problemas',
      'Evaluar una propuesta con la técnica PNI: positivo, negativo e interesante',
    ],
    resumen: [
      'Un círculo de calidad es un grupo pequeño (de 4 a 8 personas) que se reúne con frecuencia, de forma voluntaria, para identificar un problema, analizar sus causas, proponer soluciones, aplicarlas y evaluarlas.',
      'Roles: quien coordina (dirige la reunión), quien hace de secretaría (anota) y los participantes (todos opinan). Reglas: respeto, turnos para hablar y decisiones con datos.',
      'Árbol de problemas: las raíces son las causas, el tronco es el problema y las ramas son los efectos. Se resuelve atacando las causas.',
      'PNI: se anota lo Positivo, lo Negativo y lo Interesante de una propuesta antes de decidir.',
    ],
    media: {
      id: 's03-pyd-1-circulo', kind: 'image', title: 'Un círculo de calidad en acción', aspect: '16:9',
      alt: 'Seis estudiantes sentados en círculo alrededor de un papelógrafo con un árbol dibujado: raíces con causas, tronco con el problema y ramas con efectos.',
      brief: 'Ilustración de seis estudiantes de sexto (niñas y niños diversos) sentados en círculo en el corredor de una escuela. En el centro, un papelógrafo con un árbol dibujado a marcador: en las raíces tarjetas amarillas ("chorro flojo", "nadie revisa"), en el tronco "Se desperdicia el agua", en las ramas tarjetas celestes ("baño sucio", "tanque vacío"). Una niña coordina con un marcador, un niño anota en un cuaderno (secretaría). Al fondo, el chorro de la pila. Estilo plano, colores cálidos, sin textos adicionales.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:2.3.1'], ambito: 'emprender',
          prompt: 'El chorro de la escuela se queda abierto y el agua se desperdicia. ¿Qué conviene hacer **primero**?',
          explain: 'Antes de proponer, hay que **averiguar las causas**: quizá el chorro está flojo, quizá nadie revisa o quizá los pequeños no alcanzan a cerrarlo. Cada causa tiene una solución distinta.' },
        { options: [
          { id: 'a', text: 'Averiguar por qué se queda abierto', icon: 'Search' },
          { id: 'b', text: 'Castigar a quien lo dejó abierto', icon: 'Gavel', feedback: 'Sin saber la causa, podrías castigar a alguien que no tuvo la culpa y el problema seguiría.' },
          { id: 'c', text: 'Poner un cartel y ya', icon: 'FileText', feedback: 'Un cartel puede ayudar, pero si la causa es que el chorro está dañado, no servirá.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:2.3.2'], ambito: 'conocer', title: '¿Qué es un círculo de calidad?',
          prompt: 'Un **círculo de calidad** es un grupo pequeño que se reúne para **mejorar algo** de su entorno. Toca cada tarjeta.' },
        { icon: 'Users', body: 'Se llama "de calidad" porque busca que las cosas **funcionen mejor**, y "círculo" porque todos se sientan como iguales y todos opinan.', reveal: [
          { icon: 'Users', front: '¿Quiénes lo forman?', back: 'De **4 a 8 personas** que comparten el mismo espacio (un grado, un comité, un taller). Participan **de forma voluntaria**.' },
          { icon: 'Calendar', front: '¿Cómo trabajan?', back: 'Se reúnen **con frecuencia** (por ejemplo, cada semana) y siguen pasos: problema → datos → causas → soluciones → aplicar → evaluar.' },
          { icon: 'ClipboardList', front: 'Roles', back: '**Coordinación:** dirige la reunión y da la palabra. **Secretaría:** anota ideas y acuerdos. **Participantes:** aportan ideas y datos.' },
          { icon: 'Scale', front: 'Reglas', back: 'Respeto, **turnos** para hablar, criticar ideas y no personas, y decidir con **datos**, no con suposiciones.' },
        ] },
      ),
      S.order(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:2.3.2'], prompt: 'Ordena los **pasos** que sigue un círculo de calidad.',
          hint: 'No se pueden buscar causas sin datos, ni evaluar algo que aún no se ha aplicado.',
          explain: 'Identificar el problema → reunir datos → analizar causas → proponer y elegir soluciones → aplicar → evaluar.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'c1', text: 'Identificar el problema', icon: 'Target' },
          { id: 'c2', text: 'Reunir datos (observar, contar, preguntar)', icon: 'ClipboardList' },
          { id: 'c3', text: 'Analizar las causas', icon: 'Search' },
          { id: 'c4', text: 'Proponer y elegir soluciones', icon: 'Lightbulb' },
          { id: 'c5', text: 'Aplicar la solución', icon: 'Hammer' },
          { id: 'c6', text: 'Evaluar si funcionó', icon: 'ClipboardCheck' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:2.3.1'], ambito: 'conocer', title: 'Técnica 1: el árbol de problemas',
          prompt: 'Para separar **causas** y **efectos** se dibuja un **árbol**. Toca cada parte.' },
        { icon: 'TreeDeciduous', body: 'Si solo cortas las ramas (efectos), el árbol vuelve a crecer. Para resolver un problema hay que atender sus **raíces** (causas).', reveal: [
          { icon: 'Sprout', front: 'Raíces = causas', back: '¿**Por qué** pasa? Ejemplo: no hay basureros; la refacción viene en bolsas plásticas.' },
          { icon: 'TreePine', front: 'Tronco = problema', back: 'Lo que queremos resolver, en una oración: "Hay basura en el patio".' },
          { icon: 'Leaf', front: 'Ramas = efectos', back: '¿**Qué provoca**? Ejemplo: moscas, mal olor, drenajes tapados cuando llueve.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:2.3.1'], prompt: 'Problema: **"Hay basura en el patio de la escuela"**. ¿Cada tarjeta es una **causa** (raíz) o un **efecto** (rama)?',
          hint: 'Causa = por qué pasa (viene antes). Efecto = qué provoca (viene después).',
          explain: 'Las causas explican por qué hay basura; los efectos son lo que la basura provoca. Las soluciones deben atacar las causas.' },
        { buckets: [
          { id: 'cau', label: 'Causa (raíz)', icon: 'Sprout', color: 'var(--c-maiz-strong)' },
          { id: 'efe', label: 'Efecto (rama)', icon: 'Leaf', color: 'var(--area-pyd)' },
        ], items: [
          { id: 'b1', text: 'Solo hay un basurero para toda la escuela', bucket: 'cau' },
          { id: 'b2', text: 'Hay moscas cerca de la tienda escolar', bucket: 'efe' },
          { id: 'b3', text: 'La refacción se vende en bolsas plásticas', bucket: 'cau' },
          { id: 'b4', text: 'Los drenajes se tapan cuando llueve', bucket: 'efe' },
          { id: 'b5', text: 'Nadie tiene turno para recoger la basura', bucket: 'cau' },
          { id: 'b6', text: 'El patio huele mal', bucket: 'efe' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:2.3.1'], ambito: 'conocer', title: 'Técnica 2: el análisis PNI',
          prompt: 'Cuando hay una **propuesta** de solución, antes de decidir se analiza con **PNI**. Toca cada letra.' },
        { icon: 'ListChecks', body: 'El PNI evita decir "¡sí!" o "¡no!" demasiado rápido. Obliga a mirar la propuesta **por todos lados**.', reveal: [
          { icon: 'ThumbsUp', front: 'P = Positivo', back: '¿Qué tiene de **bueno** la propuesta? ¿A quién beneficia?' },
          { icon: 'X', front: 'N = Negativo', back: '¿Qué **problemas o riesgos** trae? ¿A quién podría afectar?' },
          { icon: 'Lightbulb', front: 'I = Interesante', back: '¿Qué **preguntas o ideas nuevas** despierta? Lo que no es ni bueno ni malo, pero vale la pena investigar.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:2.3.1', 'pyd:2.3.2'], ambito: 'hacer', title: 'Ejemplo resuelto: un PNI en el círculo de calidad',
          prompt: 'El círculo de calidad de sexto analiza una propuesta de la comunidad. Mira cómo hace su PNI.' },
        { icon: 'ClipboardList', problem: 'Propuesta: **"Cerrar la calle del mercado a los carros los domingos para que la gente camine segura."**',
          steps: [
            { text: '**P (positivo):** menos accidentes; las familias caminan tranquilas; más espacio para los puestos.' },
            { text: '**N (negativo):** los que traen carga en pick-up tendrán que descargar más lejos; puede haber tráfico en otras calles.' },
            { text: '**I (interesante):** ¿cuántos accidentes hubo el año pasado? ¿Dónde podrían estacionarse los pick-ups? ¿Venderán más los comerciantes?', why: 'Lo interesante se convierte en preguntas para reunir más datos.' },
            { text: '**Decisión del círculo:** apoyar la propuesta, pero con un **lugar de descarga** cerca para los comerciantes.' },
          ],
          answer: 'Con el PNI, el círculo **mejoró** la propuesta: mantuvo lo positivo y buscó cómo reducir lo negativo.',
          tip: 'Positivo → Negativo → Interesante → decidir (y mejorar la propuesta).' },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:2.3.1'], ambito: 'hacer',
          prompt: 'Ahora tú. Propuesta: **"Que sexto grado administre una tienda de refacción saludable en la escuela."** Clasifica cada idea en P, N o I.',
          explain: 'P: lo bueno (alimentación sana, ganancias). N: los riesgos (tiempo, dinero). I: preguntas nuevas para investigar.' },
        { buckets: [
          { id: 'p', label: 'P · Positivo', icon: 'ThumbsUp', color: 'var(--c-ok)' },
          { id: 'n', label: 'N · Negativo', icon: 'X', color: 'var(--c-bad)' },
          { id: 'i', label: 'I · Interesante', icon: 'Lightbulb', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'r1', text: 'Los estudiantes comerían más fruta y menos golosinas', bucket: 'p' },
          { id: 'r2', text: 'Atender la tienda podría quitar tiempo del recreo a los encargados', bucket: 'n' },
          { id: 'r3', text: '¿Qué frutas de temporada serían más baratas cada mes?', bucket: 'i' },
          { id: 'r4', text: 'Las ganancias podrían usarse para la excursión del grado', bucket: 'p' },
          { id: 'r5', text: 'Si no se vende la fruta, se puede echar a perder', bucket: 'n' },
          { id: 'r6', text: '¿Podrían las familias de la aldea vender sus frutas a la tienda?', bucket: 'i' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:2.3.1'], ambito: 'emprender',
          prompt: 'Análisis de caso: el círculo de calidad descubrió que el chorro de la escuela se queda abierto porque **la llave está floja y no cierra bien**. ¿Qué solución ataca **la causa**?',
          explain: 'La causa es una llave dañada: la solución que ataca la raíz es **repararla o cambiarla**. Los carteles o regaños no arreglan una llave floja.' },
        { options: [
          { id: 'a', text: 'Pedir a la dirección y a un padre de familia que cambien la llave del chorro' },
          { id: 'b', text: 'Regañar a todos los estudiantes en la formación', feedback: 'Los estudiantes no tienen la culpa de que la llave esté floja.' },
          { id: 'c', text: 'Poner un cartel más grande', feedback: 'Aunque todos quieran cerrarlo, la llave dañada no cierra bien.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.3.2'], prompt: '¿Qué es un **círculo de calidad**?' },
        { options: [
          { id: 'a', text: 'Un grupo pequeño que se reúne con frecuencia para analizar problemas y proponer soluciones' },
          { id: 'b', text: 'Un juego de pelota en círculo' },
          { id: 'c', text: 'Una tienda que vende productos caros' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.3.1', 'pyd:2.3.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En un análisis PNI, la I significa "Interesante".', answer: true },
          { text: 'En el árbol de problemas, las raíces representan los efectos.', answer: false, why: 'Las raíces son las causas; las ramas son los efectos.' },
          { text: 'En un círculo de calidad, la secretaría anota las ideas y los acuerdos.', answer: true },
          { text: 'Un círculo de calidad debe tener al menos 30 personas.', answer: false, why: 'Es un grupo pequeño, de 4 a 8 personas.' },
        ] },
      ),
      cierre({ areas: ['pyd'], cnb: ['pyd:2.3.1', 'pyd:2.3.2'] },
        ['Explico qué es un círculo de calidad y sus pasos', 'Separo causas y efectos con el árbol de problemas', 'Evalúo una propuesta con PNI'],
        ['Propondré formar un círculo de calidad en mi grado', 'Antes de decir sí o no a una idea, haré su PNI']),
    ],
  }),
];
