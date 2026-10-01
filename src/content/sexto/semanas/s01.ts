import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 1 · Unidad 1 "Conociendo nuestras raíces"
 * Tema generador: Nuestro lugar en mapas y palabras
 * Cierre semanal (v3): las 27 lecciones de materia viven en src/content/sexto/materias/<area>/u1/s01.ts.
 * El viernes: Taller "Mapa y voz de nuestro lugar" (Sociales + Formación Ciudadana + L1)
 * y Reto semanal.
 */
export default semana({
  id: 's01',
  unidad: 1,
  semana: 1,
  kind: 'aprendizaje',
  temaGenerador: 'Nuestro lugar en mapas y palabras',
  title: 'Nuestro lugar en mapas y palabras',
  subtitle: 'Ubicamos la comunidad, comprendemos sus condiciones geográficas y compartimos lo que sabemos de ella',
  icon: 'Earth',
  color: 'var(--area-ccss)',
  contexto: 'Esta semana aprenderás a ubicar tu comunidad, reconocer cómo la altitud, el clima y los riesgos naturales influyen en la vida local, y presentar con un mapa y tu propia voz los conocimientos que las familias construyen sobre el lugar que comparten.',
  ejes: ['sostenible', 'multiculturalidad', 'vida-ciudadana', 'seguridad'],
  media: {
    id: 's01-portada', kind: 'video', title: 'Guatemala desde el cielo', aspect: '16:9', duration: 60,
    alt: 'Recorrido aéreo desde la costa del Pacífico, pasando por la bocacosta, hasta el altiplano y un volcán.',
    brief: 'Video de 60 s con tomas de dron (o animación 2D) que sube desde la playa de Monterrico hasta el altiplano de Quetzaltenango. Sobreimpresos: altitud aproximada (0 m, 800 m, 2,300 m) y temperatura promedio. Música de marimba suave. Cierre con la pregunta: "¿Qué cuentan los mapas sobre el lugar que compartimos?".',
  },
  badge: { id: 'medalla-s01', name: 'Voz del territorio', icon: 'Map', desc: 'Completaste la semana 1 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Viernes: Taller interdisciplinario ───────────────────────── */
    lesson({
      id: 's01-d5-taller',
      kind: 'taller',
      day: 5,
      title: 'Mapa y voz de nuestro lugar',
      icon: 'Presentation',
      minutes: 20,
      gancho: 'Si tuvieras menos de un minuto para presentar tu lugar ante personas de todo el país, ¿qué evidencia mostrarías en un mapa?',
      objetivos: [
        'Representar en un mapa condiciones geográficas y evidencia local',
        'Relacionar una condición del lugar con un derecho y una respuesta solidaria',
        'Realizar una presentación oral breve apoyada en el mapa',
      ],
      resumen: [
        'Los datos de ubicación, altitud, clima y riesgo ayudan a interpretar un lugar.',
        'Las condiciones locales permiten analizar el cumplimiento de derechos sin afirmar más de lo que muestra la evidencia.',
        'La orientación, los símbolos, la clave y las anotaciones hacen legible un mapa.',
        'Una presentación breve selecciona una evidencia, un juicio y una respuesta solidaria.',
      ],
      media: {
        id: 's01-d5-taller-ficha', kind: 'image', title: 'Ficha de la aldea Loma Linda', aspect: '4:3',
        alt: 'Ilustración de una aldea del altiplano en una ladera, con una escuela en terreno firme, un barranco, un nacimiento de agua y una flecha verde de ruta de evacuación.',
        brief: 'Ilustración plana, colores cálidos, de una aldea ficticia del altiplano guatemalteco: casas de adobe y block en una ladera, un barranco a un lado, milpas, un nacimiento de agua con familias acarreando agua en tinajas, una escuela en una parte plana y firme, y señales verdes de ruta de evacuación que llevan a la escuela. Recuadro: "Loma Linda · 14.9° N · 91.4° O · 2,000 m". Sin rostros identificables ni texto adicional.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'l1'], cnb: ['ccss:1.2.1', 'l1:2.1.6'], ambito: 'conocer', title: 'Misión y tiempo',
            prompt: 'En unos **18 minutos** analizarás la ficha de Loma Linda, recuperarás aprendizajes de la semana y elaborarás dos productos breves: un mapa anotado y una presentación de 45 segundos.' },
          { icon: 'Timer', body: 'Usa solo la evidencia disponible. El mapa recibe siete minutos y la preparación y presentación oral, tres.', reveal: [
            { icon: 'Globe', front: 'Sociales', back: 'Recupera ubicación, condiciones geográficas y prevención.' },
            { icon: 'Map', front: 'Comunicación y Lenguaje', back: 'Aplica orientación, símbolos, clave y anotaciones como aprendiste en L1.' },
            { icon: 'Scale', front: 'Formación Ciudadana', back: 'Formula un juicio cuidadoso sobre un derecho y una respuesta solidaria.' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:1.2.1', 'ccss:1.3.1', 'fc:1.2.1'], ambito: 'conocer',
            prompt: 'Lee la ficha breve. Elige únicamente conclusiones respaldadas por la evidencia.' },
          { genre: 'Ficha informativa', heading: 'Aldea Loma Linda', passage:
            'Loma Linda está en el altiplano occidental, a unos **2,000 metros** de altitud. Es tierra fría. **Seis de cada diez casas** tienen agua entubada; las demás familias acarrean agua de un nacimiento. Varias viviendas están en una ladera junto a un barranco. Después de un deslave, el COCODE marcó una ruta de evacuación hacia la escuela, ubicada en terreno firme.',
            questions: [
              { q: '¿Qué conclusión sobre el acceso al agua sí está respaldada?', options: [
                { id: 'a', text: 'El acceso domiciliario es desigual: cuatro de cada diez familias deben acarrear agua' },
                { id: 'b', text: 'Toda el agua entubada es potable' },
                { id: 'c', text: 'El agua del nacimiento es necesariamente insegura' },
              ], correct: 'a', why: 'La ficha informa cómo llega el agua y el esfuerzo para obtenerla; no informa su calidad.' },
              { q: '¿Qué evidencia muestra un riesgo localizado?', options: [
                { id: 'a', text: 'Varias viviendas están en la ladera junto al barranco' },
                { id: 'b', text: 'La aldea está en el altiplano occidental' },
                { id: 'c', text: 'La escuela está en terreno firme' },
              ], correct: 'a', why: 'La cercanía al barranco expone esas viviendas a deslaves.' },
            ] },
        ),
        S.match(
          { fase: 'construir', areas: ['l1'], cnb: ['l1:3.2.1', 'l1:3.3.1'], ambito: 'hacer',
            prompt: 'Recupera lo aprendido en **Comunicación y Lenguaje**: relaciona cada convención con su función.' },
          { leftTitle: 'Convención', rightTitle: 'Función', pairs: [
            { id: 'o', left: 'Orientación', right: 'La flecha N permite reconocer el norte' },
            { id: 's', left: 'Símbolo', right: 'Representa un lugar con un signo sencillo' },
            { id: 'c', left: 'Clave', right: 'Explica los símbolos usados' },
            { id: 'a', left: 'Anotación', right: 'Vincula evidencia con un lugar' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.2.1', 'fc:1.1.2'], ambito: 'convivir',
            prompt: '¿Qué juicio y respuesta respetan la evidencia de la ficha?',
            explain: 'La ficha permite evaluar la accesibilidad domiciliaria, pero no la potabilidad ni la continuidad del agua.' },
          { options: [
            { id: 'a', text: 'La accesibilidad domiciliaria al agua es desigual; se pueden registrar recorridos y organizar acompañamiento' },
            { id: 'b', text: 'Toda el agua entubada es potable; no hace falta investigar' },
            { id: 'c', text: 'El nacimiento siempre es inseguro; las familias tienen la culpa' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['l1', 'ccss', 'fc'], cnb: ['l1:3.2.1', 'l1:3.3.1', 'ccss:1.2.1', 'ccss:1.3.1', 'fc:1.2.1', 'fc:1.1.2'], ambito: 'hacer',
            prompt: 'Selecciona las **cuatro anotaciones** que colocarás: una por categoría.' },
          { leftTitle: 'Categoría', rightTitle: 'Anotación', pairs: [
            { id: 'u', left: 'Ubicación o condición geográfica', right: 'A unos 2,000 m, Loma Linda es tierra fría' },
            { id: 'r', left: 'Riesgo y prevención', right: 'Las viviendas junto al barranco están expuestas; la ruta lleva a terreno firme' },
            { id: 'd', left: 'Condición, derecho y juicio', right: 'Cuatro de cada diez familias acarrean agua: el acceso domiciliario es desigual' },
            { id: 's', left: 'Respuesta solidaria', right: 'Registrar recorridos con el COCODE y acompañar a quienes acarrean agua' },
          ] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['l1', 'ccss', 'fc'], cnb: ['l1:3.2.1', 'l1:3.3.1', 'ccss:1.2.1', 'ccss:1.3.1', 'fc:1.2.1', 'fc:1.1.2'], ambito: 'hacer', title: 'Producto 1: mapa anotado · 7 min',
            prompt: 'Usa Loma Linda o datos equivalentes y comprobables de tu comunidad.' },
          { goal: 'Crear un mapa local legible que conecte cuatro evidencias con lugares.',
            steps: [
              { title: 'Base mínima · 3 min', detail: 'Traza un camino, marca el norte y coloca dos lugares rotulados con dos símbolos explicados en una clave.' },
              { title: 'Cuatro anotaciones · 4 min', detail: 'Añade exactamente una anotación de cada categoría recuperada y une cada una con una línea al lugar correspondiente.' },
            ],
            evidence: 'Un mapa con norte, dos lugares rotulados, clave de dos símbolos y exactamente cuatro anotaciones vinculadas.',
            rubric: [
              'El mapa incluye norte, dos lugares y una clave de dos símbolos',
              'Hay exactamente cuatro anotaciones, una por categoría',
              'Cada anotación usa evidencia y señala el lugar correspondiente',
            ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['l1', 'fc'], cnb: ['l1:3.2.1', 'l1:3.3.1', 'fc:1.2.1'], ambito: 'hacer',
            prompt: 'Haz una revisión rápida del mapa antes de presentarlo.',
            explain: 'Corrige afirmaciones no respaldadas y verifica que las cuatro anotaciones estén vinculadas.' },
          { buckets: [
            { id: 'listo', label: 'Listo para presentar', icon: 'BadgeCheck' },
            { id: 'corregir', label: 'Corregir', icon: 'Pencil' },
          ], items: [
            { id: 'v1', text: 'La clave explica los dos símbolos del mapa', bucket: 'listo' },
            { id: 'v2', text: 'Las cuatro anotaciones señalan lugares concretos', bucket: 'listo' },
            { id: 'v3', text: 'Una nota afirma que toda el agua entubada es potable', bucket: 'corregir' },
            { id: 'v4', text: 'La respuesta solidaria culpa a las familias', bucket: 'corregir' },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['l1', 'fc'], cnb: ['l1:2.1.6', 'fc:1.2.1'], ambito: 'hacer',
            prompt: 'Ordena los **tres apoyos** de una presentación de 45 segundos.' },
          { items: [
            { id: 'i', text: 'Abrir con una pregunta sobre el acceso al agua', icon: 'CircleHelp' },
            { id: 'e', text: 'Señalar una evidencia y explicar el juicio sobre el derecho', icon: 'MapPin' },
            { id: 'c', text: 'Cerrar con la respuesta solidaria', icon: 'HandHeart' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.project(
          { fase: 'aplicar', areas: ['l1', 'fc'], cnb: ['l1:2.1.6', 'fc:1.2.1', 'fc:1.1.2'], ambito: 'hacer', title: 'Producto 2: presentación oral · 2 min',
            prompt: 'Apóyate en el mapa y en los tres momentos que acabas de ordenar.' },
          { goal: 'Comunicar una evidencia, un juicio cuidadoso y una respuesta solidaria en 45 segundos.',
            steps: [
              { title: 'Ensaya · 1 min', detail: 'Practica una vez: pregunta inicial, evidencia y juicio, cierre solidario.' },
              { title: 'Presenta · 1 min', detail: 'Habla durante 45 segundos, señala el lugar de la evidencia y marca una pausa.' },
            ],
            evidence: 'Una presentación breve que usa el mapa como apoyo.',
            rubric: [
              'La evidencia señalada respalda el juicio',
              'El cierre propone una respuesta solidaria realizable',
              'La voz es clara y contiene una pausa',
            ] },
        ),
        cierre({ areas: ['l1', 'ccss', 'fc'], cnb: ['l1:2.1.6', 'l1:3.2.1', 'l1:3.3.1', 'fc:1.2.1', 'fc:1.1.2'] },
          ['Construí un mapa legible con cuatro evidencias vinculadas', 'Juzgué una condición local sin afirmar más de lo que muestran los datos', 'Presenté una respuesta solidaria en 45 segundos'],
          ['Preguntaré antes de afirmar algo que el mapa no demuestra', 'Escucharé cómo otras familias viven las condiciones del lugar', 'Participaré en una acción solidaria realizable']),
      ],
    }),

    /* ───────────────────────── Viernes: Reto semanal ───────────────────────── */
    lesson({
      id: 's01-d5-reto',
      kind: 'reto',
      day: 5,
      title: 'Reto de la semana 1',
      icon: 'Trophy',
      minutes: 14,
      objetivos: ['Demostrar lo que aprendiste esta semana en todas tus materias', 'Obtener la medalla "Voz del territorio" (70 % o más)'],
      resumen: ['Superé el reto de la semana 1: geometría, comunicación, células, territorio, idiomas, música, movimiento, derechos y desarrollo.'],
      media: {
        id: 's01-d5-reto', kind: 'image', title: 'Medalla Voz del territorio', aspect: '1:1',
        alt: 'Medalla dorada con un mapa de Guatemala, una rosa de los vientos y un quetzal.',
        brief: 'Ilustración de medalla circular dorada con relieve de un mapa de Guatemala, una rosa de los vientos y un quetzal estilizado. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024.',
      },
      steps: [
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Dos ángulos de un triángulo miden **38°** y **67°**. ¿Cuánto mide el tercer ángulo?' },
          { answer: 75, unit: '°', misconceptions: [{ value: 105, msg: '105° es la suma de los dos datos; falta restarla de 180°.' }] },
        ),
        S.order(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.1.6'], prompt: 'Ordena un inicio oral que usa la voz para crear curiosidad.' },
          { labels: { start: 'Primero', end: 'Después' }, items: [
            { id: 'a', text: 'Mirar al público y preguntar: “¿Han visto un río cambiar de color?”' },
            { id: 'b', text: 'Hacer una pausa breve' },
            { id: 'c', text: 'Presentar el dato que explica el cambio' },
          ] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.3.1'], prompt: 'Clasifica estas estructuras celulares.' },
          { buckets: [
            { id: 'v', label: 'Solo vegetal', icon: 'Leaf', color: 'var(--c-ok)' },
            { id: 'a', label: 'Solo animal', icon: 'PawPrint', color: 'var(--c-hint)' },
            { id: 'b', label: 'Ambas', icon: 'Copy', color: 'var(--area-cnt)' },
          ], items: [
            { id: 'c1', text: 'Estructura rígida de celulosa que da firmeza', bucket: 'v' },
            { id: 'c2', text: 'Organelo con clorofila que capta luz', bucket: 'v' },
            { id: 'c3', text: 'Vacuolas pequeñas en vez de una central grande', bucket: 'a' },
            { id: 'c4', text: 'Organelo que produce energía', bucket: 'b' },
            { id: 'c5', text: 'Organelo que empaca y distribuye sustancias', bucket: 'b' },
          ] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.2.1', 'ccss:1.3.1'], prompt: 'Evalúa estas afirmaciones sobre ubicación, clima y prevención.' },
          { statements: [
            { text: 'Un punto marcado 15° N y 90° O está al norte del ecuador y al oeste de Greenwich.', answer: true },
            { text: 'Si dos lugares tienen latitud parecida, el de mayor altitud suele ser más cálido.', answer: false, why: 'A mayor altitud, la temperatura suele disminuir.' },
            { text: 'Practicar una ruta de evacuación antes de las lluvias puede reducir la vulnerabilidad.', answer: true },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.2.4'], prompt: 'Escuchas: “Busca una maceta, coloca tierra hasta la mitad y abre un hoyo pequeño…”. ¿Qué información es más probable que siga?' },
          { options: [
            { id: 'a', text: 'Los pasos para colocar y cuidar una semilla' },
            { id: 'b', text: 'El resultado de un partido de fútbol' },
            { id: 'c', text: 'Una leyenda sobre un volcán' },
          ], correct: ['a'] },
        ),
        S.fill(
          { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.1'], prompt: 'Complete in English.' },
          { text: 'The clinic is [[next to]] the school. The bus is [[in front of]] the market.', distractors: ['under', 'in'] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.1'], prompt: 'Une cada figura musical con su duración.' },
          { leftTitle: 'Figura', rightTitle: 'Duración', pairs: [
            { id: 'a1', left: 'Dos corcheas', right: 'Un tiempo' },
            { id: 'a2', left: 'Una blanca y una negra', right: 'Tres tiempos' },
            { id: 'a3', left: 'Una redonda y una corchea', right: 'Cuatro tiempos y medio' },
            { id: 'a4', left: 'Dos blancas y una negra', right: 'Cinco tiempos' },
          ] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.1.2'], prompt: 'Clasifica cada movimiento del cuerpo.' },
          { buckets: [
            { id: 'f', label: 'Flexión', icon: 'FoldHorizontal' },
            { id: 'e', label: 'Extensión', icon: 'MoveHorizontal' },
            { id: 'r', label: 'Rotación', icon: 'RotateCw' },
          ], items: [
            { id: 'e1', text: 'Doblar el codo para acercar la mano al hombro', bucket: 'f' },
            { id: 'e2', text: 'Enderezar la rodilla', bucket: 'e' },
            { id: 'e3', text: 'Girar el tronco para mirar atrás', bucket: 'r' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.1'], prompt: 'En una comunidad hay escuela primaria, pero el instituto más cercano queda a tres horas a pie. ¿Cuál juicio usa la evidencia correctamente?' },
          { options: [
            { id: 'a', text: 'El acceso a la educación básica existe, pero continuar los estudios no está garantizado en igualdad de condiciones' },
            { id: 'b', text: 'El derecho a la educación se cumple por completo porque hay primaria' },
            { id: 'c', text: 'La distancia demuestra que nadie de la comunidad estudia' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.1.1'], prompt: '¿Qué muestran estos datos sobre desarrollo y pobreza?' },
          { statements: [
            { text: 'Tener empleo digno, servicios de salud y acceso confiable al agua favorece el desarrollo.', answer: true },
            { text: 'La pobreza depende solamente del dinero que una persona lleva en el bolsillo hoy.', answer: false, why: 'También influyen empleo, educación, salud, vivienda, servicios y oportunidades.' },
            { text: 'Dos comunidades con distinta disponibilidad de servicios pueden ofrecer oportunidades diferentes a sus habitantes.', answer: true },
          ] },
        ),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 1 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.2'], prompt: 'Un cuadrilátero tiene **exactamente un par de lados paralelos**. ¿Cómo se clasifica?' },
      { options: [
        { id: 'a', text: 'Trapecio' },
        { id: 'b', text: 'Rectángulo' },
        { id: 'c', text: 'Rombo' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.4.2'], prompt: 'Quieres pedir a la bibliotecaria una entrevista para una tarea. ¿Cuál correo está completo y usa un registro adecuado?' },
      { options: [
        { id: 'a', text: 'Asunto: Solicitud de entrevista · Saludo: Buenos días, señora bibliotecaria · Petición: ¿Podría concederme una entrevista sobre la historia de la biblioteca? · Firma: Elena López, 6.º grado' },
        { id: 'b', text: 'Asunto: Hola · Oiga, necesito hablar con usted. Respóndame rápido.' },
        { id: 'c', text: 'SIN ASUNTO · QUIERO HACERLE PREGUNTAS PARA MI TAREA' },
      ], correct: ['a'] }),
    S.match({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.2.1'], prompt: 'Relaciona cada organelo con una tarea cotidiana equivalente.' },
      { leftTitle: 'Organelo', rightTitle: 'Tarea equivalente', pairs: [
        { id: 'n', left: 'Núcleo', right: 'Dirigir y guardar instrucciones' },
        { id: 'm', left: 'Mitocondria', right: 'Producir energía' },
        { id: 'g', left: 'Aparato de Golgi', right: 'Empacar y distribuir' },
      ] }),
    S.number({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.2.1'], prompt: 'En la costa hay **28 °C**. Si la temperatura baja unos 6 °C por cada 1,000 m, ¿cuál sería la temperatura aproximada a **2,000 m**?' },
      { answer: 16, unit: '°C', misconceptions: [{ value: 22, msg: 'A 2,000 m la temperatura baja dos veces 6 °C.' }] }),
    S.sort({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.2.6'], prompt: 'Clasifica las expresiones como hecho u opinión.' },
      { buckets: [
        { id: 'h', label: 'Hecho', icon: 'BadgeCheck' },
        { id: 'o', label: 'Opinión', icon: 'MessageCircle' },
      ], items: [
        { id: 'l1', text: 'La reunión comenzó a las ocho.', bucket: 'h' },
        { id: 'l2', text: 'La reunión fue demasiado larga.', bucket: 'o' },
        { id: 'l3', text: 'Asistieron treinta personas.', bucket: 'h' },
        { id: 'l4', text: 'El salón era el más bonito del pueblo.', bucket: 'o' },
      ] }),
    S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.1'], prompt: 'Which sentence means “La biblioteca está detrás de la escuela”?' },
      { options: [
        { id: 'a', text: 'The library is behind the school.' },
        { id: 'b', text: 'The library is between the school.' },
        { id: 'c', text: 'The library is under the school.' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.1'], prompt: 'Una estudiante que usa silla de ruedas no puede entrar a la escuela porque solo hay gradas. ¿Cuál evaluación es más precisa?' },
      { options: [
        { id: 'a', text: 'El derecho a la educación no se cumple en igualdad de condiciones mientras el edificio siga siendo inaccesible' },
        { id: 'b', text: 'El derecho se cumple porque la escuela está abierta para otras personas' },
        { id: 'c', text: 'La accesibilidad no tiene relación con los derechos' },
      ], correct: ['a'] }),
    S.tf({ fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.1'], prompt: 'Evalúa la ubicación de notas en un pentagrama con clave de sol.' },
      { statements: [
        { text: 'La nota Mi se escribe en la primera línea.', answer: true },
        { text: 'La nota Sol se escribe en el primer espacio.', answer: false, why: 'Sol se ubica en la segunda línea.' },
        { text: 'La nota Do aguda se escribe en el tercer espacio.', answer: true },
        { text: 'Una nota más arriba en el pentagrama suena más grave.', answer: false, why: 'Una posición más alta representa un sonido más agudo.' },
      ] }),
    S.tf({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.2.1', 'ef:1.2.4'], prompt: 'Evalúa estas situaciones de lateralidad y equilibrio.' },
      { statements: [
        { text: 'Caminar sobre una línea sin detenerse requiere equilibrio dinámico.', answer: true },
        { text: 'La mano dominante siempre es la mano derecha.', answer: false, why: 'Puede ser derecha o izquierda según la persona.' },
        { text: 'Mantenerse quieto sobre un pie requiere equilibrio estático.', answer: true },
      ] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.1.1'], prompt: '¿Qué dato muestra una mejora más completa del desarrollo comunitario?' },
      { options: [
        { id: 'a', text: 'Aumentaron el empleo digno, el acceso a salud y la permanencia escolar' },
        { id: 'b', text: 'Se pintó de otro color un solo edificio' },
        { id: 'c', text: 'Una familia compró un televisor más grande' },
      ], correct: ['a'] }),
  ],
});
