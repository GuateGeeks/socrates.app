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
      gancho: 'Si tuvieras solo un minuto para presentar tu lugar ante personas de todo el país, ¿qué dirías primero?',
      objetivos: [
        'Ubicar una comunidad y representar en un mapa sus condiciones geográficas',
        'Relacionar las condiciones de un lugar con los derechos humanos y el cuidado comunitario',
        'Preparar y realizar una presentación oral breve que comparta conocimientos locales',
      ],
      resumen: [
        'Para presentar un lugar sirven datos comprobables: latitud y longitud, altitud, clima y riesgos.',
        'Las condiciones de un lugar (agua, escuela, caminos seguros) muestran qué derechos se cumplen y cuáles faltan.',
        'Ante un desastre, la prevención y la solidaridad protegen a la comunidad.',
        'Un mapa anotado permite mostrar la ubicación, las condiciones geográficas y las formas en que una comunidad conoce y cuida su territorio.',
        'Una buena presentación oral tiene un inicio que atrapa, dos o tres ideas apoyadas en el mapa y un cierre para recordar, dicho con voz clara y cuerpo expresivo.',
      ],
      media: {
        id: 's01-d5-taller-ficha', kind: 'image', title: 'Ficha de la aldea Loma Linda', aspect: '4:3',
        alt: 'Ilustración de una aldea del altiplano en una ladera, con una escuela en terreno firme, un barranco, un nacimiento de agua y una flecha verde de ruta de evacuación.',
        brief: 'Ilustración plana, colores cálidos, de una aldea ficticia del altiplano guatemalteco: casas de adobe y block en una ladera, un barranco a un lado, milpas, un nacimiento de agua con mujeres y niños acarreando agua en tinajas, una escuela en una parte plana y firme, y señales verdes de "Ruta de evacuación" que llevan a la escuela. Recuadro en una esquina: "Loma Linda · 14.9° N · 91.4° O · 2,000 m". Sin rostros identificables ni texto adicional.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'l1'], cnb: ['ccss:1.2.1', 'l1:2.1.6'], ambito: 'conocer', title: 'Tu misión de hoy',
            prompt: 'La escuela invita a compartir **Nuestro lugar en mapas y palabras**. En veinte minutos analizarás la ficha de **Loma Linda**, recuperarás lo aprendido y crearás un mapa anotado con un plan oral breve.' },
          { icon: 'Map', body: 'No aprenderás temas nuevos: vas a **integrar** lo que ya practicaste esta semana.', reveal: [
            { icon: 'Globe', front: 'Sociales', back: 'Ubicación, condiciones geográficas y prevención.' },
            { icon: 'Scale', front: 'Formación Ciudadana', back: 'Una condición local, el derecho relacionado y una respuesta solidaria.' },
            { icon: 'Mic', front: 'Comunicación y Lenguaje', back: 'Un inicio, dos ideas apoyadas en el mapa y un cierre.' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:1.2.1', 'ccss:1.3.1', 'fc:1.2.1'], ambito: 'conocer',
            prompt: 'Lee la ficha breve de Loma Linda. Elige únicamente lo que la evidencia permite concluir.' },
          { genre: 'Ficha informativa', heading: 'Aldea Loma Linda', passage:
            'Loma Linda está en el altiplano occidental, a unos **2,000 metros** de altitud. Es tierra fría. **Seis de cada diez casas** tienen agua entubada; las demás familias acarrean agua de un nacimiento. Varias viviendas están en una ladera junto a un barranco. Después de un deslave, el COCODE marcó una ruta de evacuación hacia la escuela, ubicada en terreno firme.',
            questions: [
              { q: '¿Qué conclusión sobre el acceso al agua sí está respaldada por la ficha?', options: [
                { id: 'a', text: 'El acceso domiciliario es desigual: cuatro de cada diez familias deben acarrear agua desde un nacimiento' },
                { id: 'b', text: 'Toda el agua entubada es potable' },
                { id: 'c', text: 'El agua del nacimiento es necesariamente insegura' },
              ], correct: 'a', why: 'La ficha informa cómo llega el agua y el esfuerzo para obtenerla; no informa su calidad.' },
              { q: '¿Qué evidencia muestra una condición de riesgo localizada?', options: [
                { id: 'a', text: 'La escuela está en terreno firme' },
                { id: 'b', text: 'Varias viviendas están en la ladera junto al barranco' },
                { id: 'c', text: 'La aldea está en el altiplano occidental' },
              ], correct: 'b', why: 'Las viviendas junto al barranco están expuestas a deslaves durante lluvias fuertes.' },
            ] },
        ),
        S.match(
          { fase: 'construir', areas: ['ccss'], cnb: ['ccss:1.2.1'], ambito: 'hacer',
            prompt: 'Recupera lo que aprendiste en **Ciencias Sociales**: une cada convención del mapa con su función.' },
          { leftTitle: 'Convención', rightTitle: 'Función', pairs: [
            { id: 'o', left: 'Orientación', right: 'La flecha N permite reconocer el norte' },
            { id: 's', left: 'Símbolo', right: 'Representa un lugar o elemento con un signo sencillo' },
            { id: 'c', left: 'Clave', right: 'Explica qué significa cada símbolo usado' },
            { id: 'a', left: 'Anotación', right: 'Conecta evidencia, lugar y significado' },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:1.2.1'], ambito: 'hacer',
            prompt: 'Revisa el borrador del mapa de Ana. Clasifica lo que ya comunica con claridad y lo que debe corregir.',
            explain: 'Un mapa legible necesita orientación, símbolos explicados en una clave, rótulos y anotaciones conectadas a lugares.' },
          { buckets: [
            { id: 'listo', label: 'Comunica con claridad', icon: 'BadgeCheck', color: 'var(--c-ok)' },
            { id: 'corregir', label: 'Debe corregirse', icon: 'Pencil', color: 'var(--c-hint)' },
          ], items: [
            { id: 'm1', text: 'Una flecha N indica el norte', bucket: 'listo' },
            { id: 'm2', text: 'Aparece un símbolo de escuela, pero no está explicado en la clave', bucket: 'corregir' },
            { id: 'm3', text: 'El barranco está colocado y rotulado', bucket: 'listo' },
            { id: 'm4', text: 'La frase “Hay riesgo” no está unida a ningún lugar', bucket: 'corregir' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:1.2.1'], ambito: 'hacer',
            prompt: '¿Cuál opción convierte un dato de la ficha en una anotación bien ubicada?',
            explain: 'Una anotación conecta un dato comprobable con el lugar donde ocurre y explica su significado.' },
          { options: [
            { id: 'a', text: 'Unir “Casas junto al barranco: exposición a deslaves” con una línea hacia la ladera' },
            { id: 'b', text: 'Escribir “Hay riesgos” sin señalar ningún lugar' },
            { id: 'c', text: 'Dibujar una estrella sin incluirla en la clave' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.2.1', 'fc:1.1.2'], ambito: 'convivir',
            prompt: '¿Qué par interpreta la evidencia y propone una respuesta solidaria?',
            explain: 'La evidencia permite juzgar la accesibilidad domiciliaria, no la calidad ni la continuidad del agua.' },
          { options: [
            { id: 'a', text: '“La accesibilidad del derecho al agua es desigual” + registrar el esfuerzo y organizar acompañamiento' },
            { id: 'b', text: '“Toda el agua entubada es potable” + no investigar nada más' },
            { id: 'c', text: '“El nacimiento siempre es inseguro” + culpar a las familias que lo usan' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['ccss', 'fc'], cnb: ['ccss:1.2.1', 'ccss:1.3.1', 'fc:1.2.1', 'fc:1.1.2'], ambito: 'hacer',
            prompt: 'Antes de dibujar, une cada una de las **cuatro categorías** con una anotación respaldada por la ficha.' },
          { leftTitle: 'Categoría', rightTitle: 'Anotación', pairs: [
            { id: 'u', left: 'Ubicación o condición geográfica', right: 'Loma Linda está a unos 2,000 m: es tierra fría' },
            { id: 'r', left: 'Riesgo y prevención', right: 'Las casas junto al barranco están expuestas a deslaves; la ruta lleva a terreno firme' },
            { id: 'd', left: 'Condición, derecho y juicio', right: 'Cuatro de cada diez familias acarrean agua: la accesibilidad domiciliaria del derecho al agua es desigual' },
            { id: 's', left: 'Respuesta solidaria', right: 'Registrar recorridos con el COCODE y acompañar a quienes acarrean agua' },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['l1', 'ccss'], cnb: ['l1:2.1.6'], ambito: 'hacer',
            prompt: 'Ordena el plan breve para presentar el mapa de Loma Linda.',
            explain: 'Una presentación breve abre con una idea que atrae, recorre evidencias señaladas en el mapa y termina con una respuesta posible.' },
          { items: [
            { id: 'i', text: 'Inicio: “¿Qué cambia cuando el agua no llega hasta todas las casas?”', icon: 'CircleHelp' },
            { id: 'd1', text: 'Señalar el nacimiento y explicar la evidencia sobre el acceso desigual', icon: 'MapPin' },
            { id: 'd2', text: 'Señalar las viviendas y explicar el derecho y la respuesta solidaria', icon: 'HandHeart' },
            { id: 'c', text: 'Cierre: “Un mapa también puede mostrar qué necesitamos mejorar juntos”', icon: 'Flag' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.project(
          { fase: 'aplicar', areas: ['l1', 'ccss', 'fc'], cnb: ['l1:2.1.6', 'ccss:1.2.1', 'ccss:1.3.1', 'fc:1.2.1', 'fc:1.1.2'], ambito: 'hacer', title: 'Producto: mapa anotado y presentación oral',
            prompt: 'Crea **Mapa y voz de nuestro lugar** sobre tu comunidad, o usa Loma Linda si te faltan datos locales. Dispones de nueve minutos: seis para el mapa, dos para el plan oral y uno para presentarlo.' },
          { goal: 'Elaborar un **mapa local anotado** y usarlo para realizar una **presentación oral de 45 segundos** sobre evidencias, derechos y cuidado comunitario.',
            steps: [
              { title: 'Base y clave · 2 min', detail: 'Traza calles o caminos principales, marca el norte, coloca y rotula al menos tres lugares, y crea una clave con tres símbolos.' },
              { title: 'Cuatro anotaciones · 4 min', detail: 'Añade exactamente cuatro anotaciones, una de cada categoría: (1) ubicación o condición geográfica; (2) riesgo y prevención; (3) condición local, derecho concreto relacionado y juicio sobre si se cumple; (4) respuesta solidaria concreta. Une cada anotación con una línea al lugar que aporta la evidencia.' },
              { title: 'Plan oral · 2 min', detail: 'Escribe solo tres apoyos: una pregunta o dato inicial, dos evidencias que señalarás en el mapa y un cierre. Marca una pausa.' },
              { title: 'Presenta · 1 min', detail: 'Muestra el mapa durante 45 segundos. Señala los lugares, explica el juicio sobre el derecho y termina con la respuesta solidaria.' },
            ],
            evidence: 'Un mapa local orientado, con clave y exactamente cuatro anotaciones conectadas a lugares, más un plan oral y una presentación de 45 segundos.',
            rubric: [
              'Mi mapa tiene norte, tres lugares rotulados y una clave con tres símbolos',
              'Incluí exactamente cuatro anotaciones: ubicación o condición geográfica; riesgo y prevención; condición local, derecho concreto y juicio; respuesta solidaria',
              'Cada anotación conecta evidencia con el lugar correspondiente',
              'Identifiqué una condición local y un derecho concreto, y juzgué con evidencia si se cumple localmente',
              'Propuse una respuesta solidaria realizable y la expliqué con inicio, dos ideas, cierre, voz clara y una pausa',
            ] },
        ),
        cierre({ areas: ['l1', 'ccss', 'fc'], cnb: ['l1:2.1.6', 'fc:1.2.1', 'fc:1.1.2'] },
          ['Conecto evidencias con lugares mediante símbolos y anotaciones', 'Relaciono una condición local con un derecho y juzgo su cumplimiento', 'Presento una respuesta solidaria apoyándome en el mapa'],
          ['Preguntaré antes de afirmar algo que el mapa no demuestra', 'Escucharé cómo otras familias viven las condiciones del lugar', 'Participaré en una acción solidaria que podamos realizar juntos']),
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
            { id: 'c1', text: 'Cloroplastos', bucket: 'v' },
            { id: 'c2', text: 'Pared celular', bucket: 'v' },
            { id: 'c3', text: 'Centriolos', bucket: 'a' },
            { id: 'c4', text: 'Membrana celular', bucket: 'b' },
            { id: 'c5', text: 'Núcleo', bucket: 'b' },
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
            { id: 'a1', left: 'Corchea', right: 'Medio tiempo' },
            { id: 'a2', left: 'Negra', right: 'Un tiempo' },
            { id: 'a3', left: 'Blanca', right: 'Dos tiempos' },
            { id: 'a4', left: 'Redonda', right: 'Cuatro tiempos' },
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
    S.tf({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.4.2'], prompt: 'Evalúa estos mensajes según su destinatario.' },
      { statements: [
        { text: 'Un correo al director debe incluir asunto, saludo, petición clara y firma.', answer: true },
        { text: 'Escribir todo en mayúsculas hace que un mensaje formal sea más respetuoso.', answer: false, why: 'Las mayúsculas sostenidas pueden interpretarse como gritos.' },
        { text: 'Una nota de voz comunica mediante lenguaje sonoro.', answer: true },
      ] }),
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
    S.order({ fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.1'], prompt: 'Ordena las notas de la escala desde **Do** hasta **Sol**.' },
      { labels: { start: 'Más grave', end: 'Más aguda' }, items: [
        { id: 'do', text: 'Do' },
        { id: 're', text: 'Re' },
        { id: 'mi', text: 'Mi' },
        { id: 'fa', text: 'Fa' },
        { id: 'sol', text: 'Sol' },
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
