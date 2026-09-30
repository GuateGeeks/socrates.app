import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 7 · Unidad 1 "Conociendo nuestras raíces"
 * Tema generador: Comunidades que eligen la paz
 * Pueblos y países que eligen el diálogo, la democracia y la integración; comunidades que cuidan
 * su ambiente, su agua y su salud; y el primer paso para investigar: una buena pregunta y fuentes confiables.
 * Cierre: Taller "Detectives del nacimiento de agua" (CNT · L1 · Matemáticas · PyD) y Reto.
 */
export default semana({
  id: 's07',
  unidad: 1,
  semana: 7,
  kind: 'aprendizaje',
  temaGenerador: 'Comunidades que eligen la paz',
  title: 'Comunidades que eligen la paz',
  subtitle: 'Números grandes y romanos, preguntas y fuentes, ambiente y salud, procesos de paz e integración',
  icon: 'Zap',
  color: 'var(--area-pyd)',
  contexto: 'Guatemala y otros países eligieron el diálogo para terminar sus conflictos, y los países de América se unen para cooperar. Vivir en paz también es cuidar la comunidad: el agua, los bosques y la salud de quienes la habitan. Esta semana conocerás procesos de paz y bloques de integración, compararás la cultura de paz con la de violencia, verás cómo la contaminación y el crecimiento sin plan enferman a una comunidad y cómo el bosque protege el agua. En Matemáticas leerás números de millones y números romanos, y en Comunicación y Lenguaje aprenderás a hacer preguntas de investigación y a elegir fuentes confiables. El viernes serás detective del nacimiento de agua de una aldea.',
  ejes: ['vida-ciudadana', 'multiculturalidad', 'sostenible', 'valores'],
  media: {
    id: 's07-portada', kind: 'video', title: 'Preparando el Festival de la Paz', aspect: '16:9', duration: 55,
    alt: 'Estudiantes de una escuela pública pintan un mural, revisan el contador de luz y ensayan un poema para el Festival de la Paz.',
    brief: 'Video animado 2D de 55 s con estudiantes diversos (maya, garífuna, xinka y ladino/mestizo; niñas y niños por igual) que preparan un festival. Escenas: (1) miden con cinta un muro y bocetean un mural con maíz, quetzal, marimba y tambor garífuna; (2) una niña apaga luces de aulas vacías y anota la lectura del contador; (3) dos equipos se dan la mano antes de un partido; (4) ensayo de un poema con rima. Texto final: "La paz también se construye con energía". Marimba y tambor suaves, sin marcas.',
  },
  badge: { id: 'medalla-s07', name: 'Energía de paz', icon: 'Zap', desc: 'Completaste la semana 7 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Viernes: Taller interdisciplinario ───────────────────────── */
    lesson({
      id: 's07-d5-taller',
      kind: 'taller',
      day: 5,
      title: 'Detectives del nacimiento de agua',
      icon: 'Droplets',
      minutes: 19,
      gancho: 'En la aldea El Durazno, el nacimiento que daba agua todo el año ahora se seca en marzo, y cada vez hay más niños con diarrea. ¿Cómo se investiga un problema así antes de decidir qué hacer?',
      objetivos: [
        'Plantear una pregunta de investigación, preguntas clave y fuentes confiables sobre un problema real',
        'Calcular e interpretar un índice de morbilidad y leer cantidades grandes',
        'Proponer una acción basada en datos para proteger el agua y la salud',
      ],
      resumen: [
        'Una investigación empieza con una pregunta abierta y delimitada (qué aspecto, dónde, cuándo) y se divide en preguntas clave.',
        'Cada pregunta clave necesita su fuente: personas (entrevistas), fuentes escritas y fuentes tecnológicas confiables.',
        'Índice de morbilidad = casos ÷ habitantes × 1,000. Permite comparar años y comunidades.',
        'Sin bosque en la parte alta, la lluvia no se infiltra, los nacimientos se secan y el agua llega sucia; reforestar la zona de recarga protege el agua y la salud.',
      ],
      media: {
        id: 's07-taller-portada', kind: 'image', title: 'El cerro y el nacimiento', aspect: '16:9',
        alt: 'Ilustración de una aldea al pie de un cerro: la mitad alta del cerro está sin árboles y, abajo, un nacimiento con poca agua y niñas y niños con cuadernos.',
        brief: 'Ilustración horizontal de una aldea del altiplano guatemalteco al pie de un cerro. En la parte alta, troncos cortados y suelo desnudo con surcos de erosión; en la parte media, un nacimiento con un tubo que casi no gotea y una pila casi vacía. En primer plano, cuatro estudiantes (niñas y niños diversos) con cuaderno, lupa y una abuela que les señala el cerro. Colores naturales, estilo plano, sin marcas.',
      },
      steps: [
        S.choice(
          { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:6.3.1'], ambito: 'conocer',
            prompt: 'Doña Ixchel cuenta: "Hace veinte años el nacimiento daba agua todo el año. Luego talaron el bosque del cerro y ahora se seca en marzo". ¿Qué explicación científica tiene lo que ella observó?',
            explain: 'El bosque funciona como una **esponja**: la hojarasca y las raíces ayudan a que la lluvia se **infiltre** y recargue el agua subterránea que alimenta el nacimiento. Sin bosque, el agua corre por encima, arrastra tierra y no se guarda para el verano.' },
          { options: [
            { id: 'a', text: 'Sin bosque, la lluvia corre por encima y no se infiltra para alimentar el nacimiento', icon: 'CloudRain' },
            { id: 'b', text: 'Los árboles se tomaban el agua; sin ellos debería haber más', icon: 'TreePine', feedback: 'Los árboles usan agua, pero sobre todo ayudan a que se infiltre y se guarde bajo tierra.' },
            { id: 'c', text: 'Es pura casualidad: no tiene relación', icon: 'Shuffle', feedback: 'La observación de doña Ixchel coincide con lo que explica la ciencia sobre el bosque y el agua.' },
          ], correct: ['a'] },
        ),
        S.explain(
          { fase: 'construir', areas: ['l1', 'cnt', 'mat'], cnb: ['l1:8.2.2', 'cnt:6.5.1'], ambito: 'conocer', title: 'Así investiga un detective',
            prompt: 'El COCODE pidió ayuda a sexto grado. Antes de proponer, hay que **investigar**. Usarás lo que aprendiste esta semana. Toca cada tarjeta.' },
          { icon: 'Search', body: 'Primero la **pregunta**, después los **datos**, al final la **decisión**.', reveal: [
            { icon: 'MessageCircleQuestion', front: '1. Preguntar', back: 'Una **pregunta de investigación** abierta y delimitada, y 4 a 6 **preguntas clave**.' },
            { icon: 'Library', front: '2. Buscar fuentes', back: 'Personas, fuentes escritas y tecnológicas. Cada dato de una fuente **confiable**.' },
            { icon: 'Calculator', front: '3. Calcular', back: 'Leer bien las cantidades grandes y calcular el **índice de morbilidad**.' },
            { icon: 'Sprout', front: '4. Decidir', back: 'Proponer una acción que ataque la **causa**, con los datos como respaldo.' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1', 'cnt'], cnb: ['l1:8.2.2'], ambito: 'hacer',
            prompt: '¿Cuál es la mejor **pregunta de investigación** para este caso?',
            hint: 'Busca una pregunta abierta que diga qué aspecto, dónde y cuándo.',
            explain: 'Es abierta (¿por qué?) y está delimitada: un aspecto (se seca), un lugar (El Durazno) y un tiempo (desde la tala).' },
          { options: [
            { id: 'a', text: '¿Por qué se seca en verano el nacimiento de El Durazno desde que se taló el cerro?' },
            { id: 'b', text: '¿El agua?', feedback: 'Es solo un tema, y muy amplio.' },
            { id: 'c', text: '¿Se seca el nacimiento?', feedback: 'Es cerrada: se responde con sí o no, y eso ya lo sabemos.' },
            { id: 'd', text: '¿Cuánta agua hay en todo el planeta?', feedback: 'No está delimitada a la aldea y no ayuda a resolver su problema.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.2'], ambito: 'hacer',
            prompt: 'Elige **todas** las **preguntas clave** que ayudan a responder la pregunta de investigación.',
            explain: 'Las preguntas clave se relacionan con el tema, son claras, se pueden investigar y no se repiten. "¿Te gusta el agua?" y la del río más largo del mundo no ayudan.' },
          { multiple: true, options: [
            { id: 'a', text: '¿Cuándo y cuánto bosque se taló en el cerro?' },
            { id: 'b', text: '¿Cómo ha cambiado el agua del nacimiento en los últimos años?' },
            { id: 'c', text: '¿Qué recuerdan las personas mayores de cómo era antes?' },
            { id: 'd', text: '¿Te gusta el agua?' },
            { id: 'e', text: '¿Cuál es el río más largo del mundo?' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['l1', 'cnt'], cnb: ['l1:8.2.3'], ambito: 'hacer',
            prompt: 'Une cada dato que necesitas con la **fuente** más adecuada.',
            explain: 'Los datos de salud vienen del centro de salud; los recuerdos, de las personas; los cambios del bosque se ven en imágenes de satélite (fuente tecnológica); las especies nativas, en publicaciones de una institución forestal.' },
          { pairs: [
            { id: 'f1', left: 'Casos de diarrea de cada año', leftIcon: 'Stethoscope', right: 'Informe del centro de salud' },
            { id: 'f2', left: 'Cómo era el nacimiento hace 40 años', leftIcon: 'Users', right: 'Entrevista a una abuela de la aldea' },
            { id: 'f3', left: 'Cuánto bosque se perdió en el cerro', leftIcon: 'Satellite', right: 'Imágenes de satélite en un mapa digital' },
            { id: 'f4', left: 'Qué árboles nativos conviene sembrar', leftIcon: 'TreePine', right: 'Guía de una institución forestal' },
          ], leftTitle: 'Dato', rightTitle: 'Fuente' },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.1'], ambito: 'hacer',
            prompt: 'La municipalidad informa que el sistema de agua repartió **2,408,050 litros** en marzo. ¿Cómo se lee esa cantidad?',
            hint: 'Separa por clases: 2 | 408 | 050.',
            explain: '2 millones, 408 mil y 50: "dos millones cuatrocientos ocho mil cincuenta".' },
          { options: [
            { id: 'a', text: 'Dos millones cuatrocientos ocho mil cincuenta' },
            { id: 'b', text: 'Doscientos cuarenta mil ochocientos cinco', feedback: 'Separa las clases desde la derecha: 2 | 408 | 050. El 2 está en los millones.' },
            { id: 'c', text: 'Dos millones cuarenta y ocho mil quinientos', feedback: 'La clase de los millares es 408 y la de las unidades es 050.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['cnt', 'mat'], cnb: ['cnt:6.5.1'], ambito: 'hacer',
            prompt: 'Datos **hipotéticos**: El Durazno tiene **2,500 habitantes** y el centro de salud registró **150 casos de diarrea** en 2024. ¿Cuál es el **índice de morbilidad** por cada 1,000 habitantes?',
            hint: 'Casos ÷ habitantes × 1,000. Puedes hacer primero 150 × 1,000 = 150,000 y luego dividir entre 2,500.',
            explain: '150 ÷ 2,500 × 1,000 = **60**. Es decir, 60 de cada 1,000 habitantes tuvieron diarrea ese año.' },
          { answer: 60, unit: 'casos por cada 1,000', misconceptions: [
            { value: 150, msg: '150 son los casos. El índice los compara con la población: divide entre 2,500 y multiplica por 1,000.' },
            { value: 6, msg: 'Revisa la multiplicación: 150 ÷ 2,500 = 0.06, y 0.06 × 1,000 = 60.' },
          ] },
        ),
        S.chart(
          { fase: 'aplicar', areas: ['cnt', 'mat'], cnb: ['cnt:6.5.1'], ambito: 'hacer',
            prompt: 'Representa el índice de diarreas de El Durazno (casos por cada 1,000 habitantes, datos **hipotéticos**): **2021: 20**, **2022: 35**, **2023: 45**, **2024: 60** (el que calculaste).',
            hint: 'Cada barra debe llegar a su valor; la escala sube de 5 en 5.',
            explain: 'El índice se **triplicó** en cuatro años, al mismo tiempo que el nacimiento se secaba: con menos agua limpia, las familias guardan agua en recipientes o usan fuentes contaminadas. Los datos respaldan que el problema del agua es también un problema de salud.' },
          { categories: [
            { id: 'y21', label: '2021' }, { id: 'y22', label: '2022' }, { id: 'y23', label: '2023' }, { id: 'y24', label: '2024' },
          ], data: [20, 35, 45, 60], max: 80, step: 5, unit: 'por 1,000', source: 'Índice de diarreas en El Durazno (datos hipotéticos)' },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['pyd', 'cnt'], cnb: ['pyd:5.3.2'], ambito: 'hacer',
            prompt: 'Las soluciones existen en **todos los niveles**. Clasifica cada acción según **quién** la hace.',
            explain: 'La familia puede hervir o clorar el agua y tapar los recipientes; la comunidad, reforestar la zona de recarga y cuidar los arbolitos; el país, proteger bosques y nacimientos con leyes y programas.' },
          { buckets: [
            { id: 'fam', label: 'Familia', icon: 'House' },
            { id: 'com', label: 'Comunidad', icon: 'Users' },
            { id: 'pais', label: 'País', icon: 'Landmark' },
          ], items: [
            { id: 's1', text: 'Hervir o clorar el agua para beber', bucket: 'fam' },
            { id: 's2', text: 'Tapar los recipientes donde se guarda agua', bucket: 'fam' },
            { id: 's3', text: 'Reforestar con especies nativas la parte alta del cerro', bucket: 'com' },
            { id: 's4', text: 'Turnarse para regar y cuidar los arbolitos', bucket: 'com' },
            { id: 's5', text: 'Leyes y programas que protegen bosques y nacimientos', bucket: 'pais' },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['cnt', 'l1', 'pyd'], cnb: ['cnt:6.3.1', 'cnt:6.5.1'], ambito: 'convivir',
            prompt: 'Escribe una **nota al COCODE** con tu conclusión. Incluye: tu **pregunta de investigación**, **dos datos** con su fuente (por ejemplo, el índice de 2024 y lo que dijo doña Ixchel), la **causa** que encontraste y **una acción** que ataque esa causa.' },
          { minWords: 50, placeholder: 'Estimado COCODE de El Durazno: investigamos…',
            model: 'Estimado COCODE de El Durazno: investigamos por qué se seca en verano el nacimiento desde que se taló el cerro. Según el centro de salud, el índice de diarreas subió de 20 a 60 casos por cada 1,000 habitantes entre 2021 y 2024. Doña Ixchel nos contó que antes de la tala el nacimiento daba agua todo el año. Sin bosque, la lluvia no se infiltra. Proponemos reforestar la parte alta del cerro con especies nativas y organizar turnos para cuidar los arbolitos.',
            rubric: ['Escribí la pregunta de investigación', 'Usé dos datos y dije de qué fuente son', 'Expliqué la causa con lo que aprendí del bosque y el agua', 'Propuse una acción que ataca la causa'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['cnt', 'mat'], cnb: ['cnt:6.5.1'],
            prompt: 'En la aldea vecina, con **4,000 habitantes**, hubo **60 casos** de diarrea en 2024 (datos hipotéticos). ¿Cuál es su índice de morbilidad por cada 1,000 habitantes?' },
          { answer: 15, unit: 'casos por cada 1,000' },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3'],
            prompt: 'Para tu nota al COCODE, ¿qué fuente es **más confiable** sobre los casos de diarrea?' },
          { options: [
            { id: 'a', text: 'El informe del centro de salud, con fecha y firma del personal' },
            { id: 'b', text: 'Un mensaje reenviado sin autor que dice "¡todos se están enfermando!"' },
            { id: 'c', text: 'Lo que cree un compañero, sin haberlo averiguado' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['cnt', 'l1', 'mat', 'pyd'], cnb: ['cnt:6.3.1'] },
          ['Escribo una pregunta de investigación abierta y delimitada', 'Elijo la fuente adecuada para cada dato', 'Calculo e interpreto un índice de morbilidad', 'Propongo acciones que atacan la causa del problema'],
          ['Preguntaré a una persona mayor cómo era el agua de mi comunidad', 'Averiguaré de dónde viene el agua de mi casa', 'Participaré en una siembra de árboles con mi familia o escuela']),
      ],
    }),

    /* ───────────────────────── Viernes: Reto semanal ───────────────────────── */
    lesson({
      id: 's07-d5-reto',
      kind: 'reto',
      day: 5,
      title: 'Reto de la semana 7',
      icon: 'Trophy',
      minutes: 14,
      objetivos: ['Demostrar lo que aprendiste esta semana en tus materias', 'Obtener la medalla "Energía de paz" (70 % o más)'],
      resumen: ['Superé el reto de la semana 7: producto cartesiano, números grandes y romanos, preguntas y fuentes de investigación, ambiente y salud, procesos de paz e integración, diálogo, inglés y sílaba tónica.'],
      media: {
        id: 's07-d5-reto', kind: 'image', title: 'Medalla Energía de paz', aspect: '1:1',
        alt: 'Medalla con una paloma, una hoja y una gota de agua.',
        brief: 'Ilustración de medalla circular dorada y verde con una paloma de la paz que sostiene una hoja, sobre una gota de agua. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024, estilo plano con brillo suave.',
      },
      steps: [
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.4'], prompt: 'A = {elote, plátano, arroz, maicena} (sabores de atol) y B = {pequeño, mediano, grande} (tamaños). ¿Cuántos pares tiene **A × B**?' },
          { answer: 12, unit: 'pares' }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.3'], prompt: '¿Cuántos **millares** completos hay en **2,745,300**?' },
          { answer: 2745, unit: 'millares' }),
        S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.2'], prompt: '¿Qué número es **CDXLIV**?' },
          { options: [
            { id: 'a', text: '444' },
            { id: 'b', text: '644' },
            { id: 'c', text: '466' },
            { id: 'd', text: '1,446' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.2'], prompt: '¿Cuál es una pregunta **abierta** que sirve para investigar?' },
          { options: [
            { id: 'a', text: '¿Cómo se organizan las familias de mi colonia para recoger la basura?' },
            { id: 'b', text: '¿Hay basura en mi colonia?' },
            { id: 'c', text: '¿Te gusta tu colonia?' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3'], prompt: '¿Cuál es una señal de que una fuente es **dudosa**?' },
          { options: [
            { id: 'a', text: 'No tiene autor, promete cosas exageradas y pide reenviar "urgente"' },
            { id: 'b', text: 'Tiene fecha y explica de dónde saca sus datos' },
            { id: 'c', text: 'Otras fuentes confiables dicen lo mismo' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.5.1'], prompt: '¿Qué cuenta la **morbilidad** de una comunidad?' },
          { options: [
            { id: 'a', text: 'Las personas que se enferman durante un tiempo' },
            { id: 'b', text: 'Las personas que fallecen' },
            { id: 'c', text: 'Los árboles que se siembran' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.2.1'], prompt: 'Una colonia crece sin planificación y se construyen casas en laderas y barrancos donde había bosque. ¿Qué riesgo **aumenta**?' },
          { options: [
            { id: 'a', text: 'Deslaves e inundaciones' },
            { id: 'b', text: 'Más agua en los nacimientos' },
            { id: 'c', text: 'Más hábitat para las aves' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:7.2.1'], prompt: '¿Qué misión de la ONU verificó en Guatemala el cumplimiento de los Acuerdos de Paz?' },
          { options: [
            { id: 'a', text: 'MINUGUA' },
            { id: 'b', text: 'Mercosur' },
            { id: 'c', text: 'CARICOM' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.6.6'], prompt: '¿A qué sistema de integración pertenece Guatemala junto con sus vecinos de Centroamérica?' },
          { options: [
            { id: 'a', text: 'Al SICA (Sistema de la Integración Centroamericana)' },
            { id: 'b', text: 'A la Comunidad Andina' },
            { id: 'c', text: 'A Mercosur' },
          ], correct: ['a'] }),
        S.order({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.2.2'], prompt: 'Ordena los **cinco pasos del diálogo** para resolver un conflicto.' },
          { items: [
            { id: 'a', text: 'Calmarse' },
            { id: 'b', text: 'Escuchar a cada parte sin interrumpir' },
            { id: 'c', text: 'Descubrir qué necesita cada quien' },
            { id: 'd', text: 'Buscar ideas juntos' },
            { id: 'e', text: 'Cumplir un acuerdo donde todos ganen' },
          ], labels: { start: 'Primero', end: 'Último' } }),
        S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.3.3'], prompt: 'Complete: "When the lights went out, we ___ dinner." (Cuando se fue la luz, estábamos cenando.)' },
          { options: [
            { id: 'a', text: 'were eating' },
            { id: 'b', text: 'was eating' },
            { id: 'c', text: 'are eating' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.8'], prompt: '¿Qué palabra es **esdrújula** (sílaba tónica en la antepenúltima)?' },
          { options: [
            { id: 'a', text: 'música' },
            { id: 'b', text: 'tambor' },
            { id: 'c', text: 'marimba' },
          ], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 1 (el primer área = área principal) */
  bank: [
    S.sort({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.3.1'], prompt: 'Coloca cada número en el conjunto **más pequeño** al que pertenece.' },
      { buckets: [{ id: 'n', label: 'Naturales' }, { id: 'z', label: 'Enteros (no naturales)' }, { id: 'f', label: 'Fraccionarios (no enteros)' }],
        items: [
          { id: 'a', text: '15', bucket: 'n' },
          { id: 'b', text: '−9', bucket: 'z' },
          { id: 'c', text: '2/7', bucket: 'f' },
          { id: 'd', text: '0', bucket: 'z' },
          { id: 'e', text: '−1/2', bucket: 'f' },
        ] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.1'], prompt: '¿Cómo se escribe con cifras "**cuatrocientos ocho millones sesenta mil cinco**"?' },
      { options: [{ id: 'a', text: '408,060,005' }, { id: 'b', text: '408,605' }, { id: 'c', text: '480,060,500' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3'], prompt: 'Pregunta: "¿Cómo se prepara el café en las fincas de Huehuetenango?". ¿Cuáles son las mejores **palabras clave** para buscar?' },
      { options: [{ id: 'a', text: 'preparación café Huehuetenango' }, { id: 'b', text: 'cómo se en las de' }, { id: 'c', text: 'cosas interesantes' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.3.1'], prompt: '¿Dónde protege **mejor** el agua una reforestación?' },
      { options: [{ id: 'a', text: 'En las partes altas de las cuencas y en las orillas de los ríos, con especies nativas' }, { id: 'b', text: 'En cualquier lugar, con la especie que sea, y sin cuidarla después' }, { id: 'c', text: 'Solo en macetas dentro de las casas' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.7.4'], prompt: 'En la apertura democrática de los años ochenta, ¿qué hecho ocurrió en Guatemala?' },
      { options: [{ id: 'a', text: 'Se aprobó una nueva Constitución en 1985' }, { id: 'b', text: 'Se firmó el Tratado de Versalles' }, { id: 'c', text: 'Se fundó el Mercosur' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.1.1'], prompt: '¿Qué pregunta ayuda a **discutir** un intercambio cultural de la historia de Guatemala?' },
      { options: [{ id: 'a', text: '¿Fue voluntario o impuesto, y qué huella dejó hoy?' }, { id: 'b', text: '¿Qué cultura es mejor que las demás?' }, { id: 'c', text: '¿Cómo olvidamos lo que pasó?' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.1.8'], prompt: 'El árbitro marca una falta que tú crees que no fue. ¿Qué haces?' },
      { options: [{ id: 'a', text: 'Respeto la decisión; si hace falta, el capitán pregunta con calma' }, { id: 'b', text: 'Le grito al árbitro' }, { id: 'c', text: 'Me voy del juego' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.7'], prompt: 'La luz llega por la **izquierda** de una pelota pintada. ¿Hacia dónde cae su **sombra proyectada**?' },
      { options: [{ id: 'a', text: 'Hacia la derecha, del lado contrario a la luz' }, { id: 'b', text: 'Hacia la izquierda, del mismo lado de la luz' }, { id: 'c', text: 'No tiene sombra' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.1.2'], prompt: '¿Qué es la **desertificación**?' },
      { options: [{ id: 'a', text: 'La degradación de tierras secas que pierden su capacidad de producir' }, { id: 'b', text: 'La siembra de árboles en el desierto' }, { id: 'c', text: 'Una lluvia muy fuerte' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.6'], prompt: '¿Cuál es la separación correcta en sílabas de **carretera**?' },
      { options: [{ id: 'a', text: 'ca-rre-te-ra' }, { id: 'b', text: 'car-re-te-ra' }, { id: 'c', text: 'ca-rret-e-ra' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.3.3'], prompt: 'How do you write **write** with -ing?' },
      { options: [{ id: 'a', text: 'writing' }, { id: 'b', text: 'writeing' }, { id: 'c', text: 'writting' }], correct: ['a'] }),
  ],
});
