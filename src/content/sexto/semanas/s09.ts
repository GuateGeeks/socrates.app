import { S, cierre, lesson, semana } from '../../dsl';

const CASE_LABEL = 'Caso simulado; no describe tu escuela';

export default semana({
  id: 's09', unidad: 1, semana: 9, kind: 'proyecto',
  temaGenerador: 'Evidencia para mejorar nuestro entorno',
  title: 'Evidencia para mejorar nuestro entorno',
  subtitle: 'Proyecto: una propuesta inclusiva basada en un caso simulado',
  icon: 'FileSearch', color: 'var(--area-pyd)',
  contexto: `Usarás el dossier Ruta Clara, rotulado “${CASE_LABEL}”. El paquete contiene un mapa, observaciones, dos fuentes identificadas, un conjunto pequeño de datos y tres opciones. En una hoja de papel propondrás una mejora inclusiva sin afirmar que fue aplicada en un lugar real.`,
  ejes: ['sostenible', 'vida-ciudadana', 'valores', 'trabajo'],
  media: {
    id: 's09-portada-propuesta', kind: 'image', title: 'Del dato a una propuesta inclusiva', aspect: '16:9',
    alt: 'Mesa con un mapa escolar ficticio, dos fichas de fuente, una gráfica y una propuesta de mejora en una hoja.',
    brief: 'Ilustración editorial 1600x900 px. Vista cenital del dossier: mapa ficticio Ruta Clara, tarjetas Fuente A y Fuente B, tabla de datos, tres opciones numeradas y hoja con necesidad, evidencia, limitación, acción inclusiva, responsabilidades y revisión. Texto exacto y legible “Caso simulado; no describe tu escuela”, contraste alto, símbolos además del color y sin rostros. Target: public/media/s09-portada-propuesta.jpg.',
  },
  badge: { id: 'medalla-s09', name: 'Proponente con evidencia', icon: 'FileCheck2', desc: 'Completaste el proyecto integrador de la Unidad 1' },
  lessons: [
    lesson({
      id: 's09-d1-observar', title: 'Observar y delimitar', icon: 'MapPinned', minutes: 14, day: 1, kind: 'proyecto',
      gancho: '¿Qué cambia cuando distingues lo que ves de lo que supones?',
      objetivos: ['Delimitar una necesidad del caso separando observaciones e inferencias'],
      resumen: ['Una observación describe evidencia visible; una inferencia propone una explicación por comprobar.', 'Una necesidad acotada indica lugar, situación y personas consideradas sin generalizar.'],
      media: {
        id: 's09-dossier-mapa', kind: 'diagram', title: 'Mapa del caso Ruta Clara', aspect: '4:3',
        alt: 'Mapa ficticio con entrada norte, sendero central, jardín este, bebedero oeste y banca sombreada al sur.',
        brief: 'Diagrama SVG 1200x900 px del caso Ruta Clara. Mostrar entrada norte, sendero central, jardín este, bebedero oeste, banca sur y una mochila que estrecha un tramo; usar íconos descriptivos de puerta, huellas, plantas, bebedero, banca y mochila. Añadir rosa de los vientos, ruta punteada y rótulo exacto “Caso simulado; no describe tu escuela”. Alto contraste, patrones además de color y texto legible. Target: public/media/s09-dossier-mapa.svg.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'l1'], cnb: ['ccss:1.2.1', 'l1:8.2.4'], title: '1 min · Abrir el dossier', prompt: 'Explora el mapa y las tarjetas del dossier **Ruta Clara**.' },
          { icon: 'FolderOpen', body: `**${CASE_LABEL}.** El mapa ubica entrada norte, sendero central, jardín este, bebedero oeste y banca sur. El paquete incluye toda la información; no debes buscar ni medir fuera de la lección.`, reveal: [
            { icon: 'Map', front: 'Mapa', back: 'Una mochila dibujada ocupa parte del sendero central, cerca del cruce hacia el bebedero.' },
            { icon: 'ClipboardList', front: 'Observaciones', back: 'En cuatro periodos ficticios: 18 recorridos directos, 7 desvíos y 5 pausas para buscar el bebedero.' },
            { icon: 'BookOpenCheck', front: 'Fuentes', back: 'Fuente A aporta mapa y conteos; Fuente B aporta criterios de accesibilidad.' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'cnt'], cnb: ['l1:8.2.4', 'cnt:8.2.1'], title: '2 min · Leer sin adelantar conclusiones', prompt: 'Lee la ficha de observaciones suministrada.' },
          { genre: 'Ficha de caso simulado', heading: 'Observaciones del sendero central', passage: `${CASE_LABEL}. Durante cuatro periodos ficticios de diez minutos, la ficha registró 18 recorridos directos, 7 desvíos junto a una mochila dibujada y 5 pausas antes de encontrar el bebedero. No explica las causas ni representa una escuela real.`, questions: [{ q: '¿Qué está directamente respaldado?', options: [{ id: 'a', text: 'Se registraron 7 desvíos junto a la mochila dibujada' }, { id: 'b', text: 'Todas las personas se desviaron por miedo' }, { id: 'c', text: 'Nuestra escuela tiene una ruta peligrosa' }], correct: 'a', why: 'La ficha aporta un conteo y una ubicación, no una causa ni datos locales.' }] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l1', 'cnt'], cnb: ['l1:8.2.4', 'cnt:8.2.1'], title: '2 min · Observación o inferencia', prompt: 'Clasifica cada afirmación según lo que permite decir el dossier.', explain: 'Una inferencia orienta preguntas, pero no debe presentarse como hecho.' },
          { buckets: [{ id: 'obs', label: 'Observación respaldada', icon: 'Eye' }, { id: 'inf', label: 'Inferencia por comprobar', icon: 'CircleHelp' }], items: [
            { id: 'a', text: 'El mapa coloca una mochila en el sendero', bucket: 'obs' },
            { id: 'b', text: 'La mochila causó todos los desvíos', bucket: 'inf' },
            { id: 'c', text: 'Cinco registros incluyen una pausa', bucket: 'obs' },
            { id: 'd', text: 'Nadie comprende los rótulos', bucket: 'inf' },
          ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:1.2.1', 'fc:1.1.2'], title: '1 min · Necesidad acotada', prompt: '¿Qué necesidad se ajusta al mapa y evita generalizaciones?' },
          { options: [{ id: 'a', text: 'Revisar el tramo central y la señal al bebedero para facilitar orientación y paso en el caso' }, { id: 'b', text: 'Cambiar toda la escuela porque nadie puede caminar' }, { id: 'c', text: 'Afirmar que la mochila provoca accidentes' }], correct: ['a'] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:1.2.1'], title: '1 min · Ubicar la necesidad', prompt: 'Relaciona cada referencia del mapa con su ubicación.' },
          { pairs: [{ id: 'a', left: 'Entrada', leftIcon: 'DoorOpen', right: 'Norte' }, { id: 'b', left: 'Bebedero', leftIcon: 'GlassWater', right: 'Oeste' }, { id: 'c', left: 'Jardín', leftIcon: 'Flower2', right: 'Este' }] },
        ),
        S.write(
          { id: 's09-d1-necesidad', fase: 'aplicar', areas: ['l1', 'cnt'], cnb: ['l1:8.2.7', 'cnt:8.2.1'], title: '3 min · Delimitar por escrito', prompt: 'Guarda una necesidad de 18 a 24 palabras. Incluye lugar, observación y algo que no puede concluirse.' },
          { minWords: 20, placeholder: 'En el tramo... El dossier observa... Todavía no permite concluir...', model: 'En el sendero central, siete registros muestran desvíos junto a la mochila; el caso todavía no permite afirmar una causa única.', rubric: ['Nombré el lugar', 'Usé una observación', 'Marqué una limitación'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1', 'cnt'], cnb: ['l1:8.2.4', 'cnt:8.2.1'], title: '1 min · Transferir el criterio', prompt: 'Otro mapa muestra tres pausas ante una puerta. ¿Cuál afirmación es cuidadosa?' },
          { options: [{ id: 'a', text: 'Hubo tres pausas; la causa requiere más evidencia' }, { id: 'b', text: 'La puerta confunde a todas las personas' }, { id: 'c', text: 'La puerta necesariamente causará accidentes' }], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.4'], title: '1 min · Salida', prompt: '¿Qué frase distingue evidencia e inferencia?' },
          { options: [{ id: 'a', text: 'El conteo registra cinco pausas; quizá faltó orientación, pero debe comprobarse' }, { id: 'b', text: 'Cinco pausas demuestran que el mapa es inútil' }, { id: 'c', text: 'Nuestra escuela tiene el mismo problema' }], correct: ['a'] },
        ),
        cierre({ areas: ['ccss', 'l1'], cnb: ['ccss:1.2.1', 'l1:8.2.4'] }, ['Distinguí observación e inferencia', 'Delimité una necesidad sin inventar causas']),
      ],
    }),

    lesson({
      id: 's09-d2-evidencia', title: 'Elegir evidencia confiable', icon: 'ChartNoAxesColumnIncreasing', minutes: 15, day: 2, kind: 'proyecto',
      gancho: '¿Cómo haces visible un dato sin cambiar lo que significa?',
      objetivos: ['Seleccionar dos fuentes y representar honestamente un dato suministrado'],
      resumen: ['Una fuente identificada permite rastrear la procedencia de un dato.', 'Una gráfica conserva categorías, valores, unidad y alcance.'],
      media: {
        id: 's09-dossier-fuentes', kind: 'diagram', title: 'Fuentes y datos de Ruta Clara', aspect: '16:9',
        alt: 'Dos tarjetas de fuente junto a una tabla con recorridos directos, desvíos y pausas del caso ficticio.',
        brief: 'Infografía SVG 1600x900 px. Fuente A: “Ficha de observación Ruta Clara, edición simulada 2026”, aporta mapa y conteos. Fuente B: “Guía didáctica de accesibilidad escolar, edición simulada 2026”, aporta contraste, símbolos y ruta alternativa. Tabla: directo 18, desvío 7, pausa 5, total 30. Incluir “Caso simulado; no describe tu escuela”, letra grande, contraste alto e íconos más texto. Target: public/media/s09-dossier-fuentes.svg.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.4'], title: '1 min · Dos fuentes, dos aportes', prompt: 'Abre las tarjetas identificadas.' },
          { icon: 'LibraryBig', body: `**${CASE_LABEL}.** La **Fuente A**, Ficha de observación Ruta Clara, edición simulada 2026, aporta mapa y conteos. La **Fuente B**, Guía didáctica de accesibilidad escolar, edición simulada 2026, aporta contraste, símbolos y ruta alternativa.` },
        ),
        S.match(
          { fase: 'construir', areas: ['l1', 'cnt'], cnb: ['l1:8.2.4', 'cnt:8.2.1'], title: '2 min · Fuente y aporte', prompt: 'Relaciona cada afirmación con la fuente que puede respaldarla.', explain: 'Cita una fuente solo para el aporte que contiene.' },
          { pairs: [{ id: 'a', left: 'Hubo 18 recorridos directos', right: 'Fuente A: ficha de observación' }, { id: 'b', left: 'Conviene combinar contraste y símbolos', right: 'Fuente B: guía de accesibilidad' }, { id: 'c', left: 'El bebedero está al oeste', right: 'Fuente A: ficha de observación' }] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat'], cnb: ['mat:4.1.4'], title: '1 min · Comprobar el total', prompt: 'Hay 18 recorridos directos, 7 desvíos y 5 pausas. ¿Cuántos registros hay?', explain: '18 + 7 + 5 = 30 registros simulados.' },
          { answer: 30, unit: 'registros' },
        ),
        S.chart(
          { fase: 'aplicar', areas: ['mat', 'l1'], cnb: ['mat:4.1.4', 'l1:8.2.4'], title: '3 min · Representar sin exagerar', prompt: 'Construye la gráfica. El conteo describe registros, no causas ni personas únicas.', explain: 'Las barras conservan escala y fuente.' },
          { categories: [{ id: 'directo', label: 'Directo', icon: 'MoveRight' }, { id: 'desvio', label: 'Desvío', icon: 'Route' }, { id: 'pausa', label: 'Pausa', icon: 'CirclePause' }], data: [18, 7, 5], max: 20, step: 1, unit: 'registros', source: 'Fuente A · Caso simulado; no describe tu escuela' },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1', 'cnt'], cnb: ['l1:8.2.4', 'cnt:8.2.1'], title: '1 min · Pie honesto', prompt: '¿Qué pie explica correctamente la gráfica?' },
          { options: [{ id: 'a', text: 'Registros del caso: 18 directos, 7 desvíos y 5 pausas; Fuente A, edición simulada 2026' }, { id: 'b', text: 'Así camina todo el alumnado de nuestra escuela' }, { id: 'c', text: 'La gráfica demuestra una causa' }], correct: ['a'] },
        ),
        S.write(
          { id: 's09-d2-nota-evidencia', fase: 'aplicar', areas: ['l1', 'cnt'], cnb: ['l1:8.2.7', 'cnt:8.2.1'], title: '3 min · Nota de evidencia', prompt: 'Guarda una nota de 20 a 28 palabras con un dato, su fuente y una limitación.' },
          { minWords: 24, placeholder: 'La Fuente... registra... Este dato permite... pero no...', model: 'La Fuente A registra siete desvíos junto a la mochila en el caso simulado; permite comparar recorridos, pero no determina la causa.', rubric: ['Incluí un dato exacto', 'Identifiqué la fuente', 'Expliqué una limitación'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['mat', 'l1'], cnb: ['mat:4.1.4', 'l1:8.2.4'], title: '1 min · Revisar otra gráfica', prompt: 'Una gráfica comienza en 6 para comparar 7 y 8. ¿Qué evita exagerar?' },
          { options: [{ id: 'a', text: 'Usar base visible y escala uniforme desde cero' }, { id: 'b', text: 'Ocultar la escala' }, { id: 'c', text: 'Cambiar 7 por 10' }], correct: ['a'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.4'], title: '1 min · Salida', prompt: 'Otro caso registra 12 recorridos, 6 desvíos y 4 pausas. ¿Cuál es el total?' },
          { answer: 22, unit: 'registros' },
        ),
        cierre({ areas: ['l1', 'mat'], cnb: ['l1:8.2.4', 'mat:4.1.4'] }, ['Relacioné fuente y aporte', 'Representé datos sin ampliar su alcance']),
      ],
    }),

    lesson({
      id: 's09-d3-disenar', title: 'Diseñar una mejora inclusiva', icon: 'Accessibility', minutes: 15, day: 3, kind: 'proyecto',
      gancho: 'Una idea atractiva, ¿también puede ser viable e inclusiva?',
      objetivos: ['Elegir una mejora al comparar evidencia, viabilidad, accesibilidad y participación'],
      resumen: ['Una decisión sólida compara opciones con los mismos criterios.', 'La acción responde a evidencia y reconoce a quién incluye.'],
      media: {
        id: 's09-dossier-opciones', kind: 'diagram', title: 'Tres opciones para Ruta Clara', aspect: '16:9',
        alt: 'Tabla comparativa ficticia de tres mejoras para orientar y despejar el sendero central.',
        brief: 'Tabla SVG 1600x900 px. Opción 1: flecha de papel plastificado, Q25, fácil de reemplazar y un formato. Opción 2: despejar el paso y pintar marcas cortas, Q85, durable pero depende del color. Opción 3: despejar el paso y colocar señal de alto contraste con símbolo, texto y clave táctil de muestra, Q75. Las tres caben en el presupuesto Q90. Columnas: evidencia, viabilidad, accesibilidad y participación. Incluir “Caso simulado; no describe tu escuela”, texto legible, contraste alto y patrones táctiles sin imitar braille. Target: public/media/s09-dossier-opciones.svg.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'fc'], cnb: ['pyd:4.1.1', 'fc:1.1.2'], title: '1 min · Comparar con criterios', prompt: 'Revisa las tres opciones suministradas.' },
          { icon: 'ListChecks', body: `**${CASE_LABEL}.** Presupuesto: **Q90**. Opción 1: flecha plastificada, Q25. Opción 2: despejar el paso y pintar marcas cortas, Q85. Opción 3: despejar el paso y añadir señal con símbolo, texto, contraste y textura de muestra, Q75. Las tres son realizables dentro del caso; cambian su alcance y accesibilidad.` },
        ),
        S.dilemma(
          { fase: 'construir', areas: ['fc', 'pyd'], cnb: ['fc:1.1.2', 'pyd:4.1.1'], title: '2 min · Decisión responsable', prompt: '¿Qué camino seguirías?' },
          { scene: { icon: 'SignpostBig', text: 'Debes recomendar una opción sin afirmar que ya fue aplicada.' }, options: [
            { id: 'a', icon: 'StickyNote', text: 'Elegir la flecha solo porque cuesta menos', consequence: 'Cabe en presupuesto, pero atiende parcialmente accesibilidad y durabilidad.', values: ['economía', 'revisión'], constructive: false },
            { id: 'b', icon: 'PaintRoller', text: 'Elegir marcas pintadas porque duran más', consequence: 'Cabe en el presupuesto, pero depender solo del color deja una barrera por revisar.', values: ['durabilidad', 'accesibilidad'], constructive: false },
            { id: 'c', icon: 'Accessibility', text: 'Despejar el paso y usar una señal en varios formatos', consequence: 'Responde al mapa, cabe en presupuesto y amplía formas de orientación.', values: ['inclusión', 'responsabilidad'], constructive: true },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['pyd', 'fc'], cnb: ['pyd:4.1.1', 'fc:1.1.2'], title: '2 min · Criterios', prompt: 'Clasifica cada razón principal.', explain: 'Separar criterios evita decidir solo por gusto.' },
          { buckets: [{ id: 'evi', label: 'Evidencia', icon: 'FileSearch' }, { id: 'via', label: 'Viabilidad', icon: 'WalletCards' }, { id: 'acc', label: 'Accesibilidad', icon: 'Accessibility' }, { id: 'par', label: 'Participación', icon: 'UsersRound' }], items: [
            { id: 'a', text: 'El mapa ubica el obstáculo', bucket: 'evi' },
            { id: 'b', text: 'Q75 cabe dentro de Q90', bucket: 'via' },
            { id: 'c', text: 'La señal combina símbolo, texto, contraste y textura', bucket: 'acc' },
            { id: 'd', text: 'Dos responsabilidades permiten revisar', bucket: 'par' },
          ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['fc'], cnb: ['fc:1.1.2'], title: '1 min · Inclusión cuidadosa', prompt: '¿Qué afirmación evita absolutos?' },
          { options: [{ id: 'a', text: 'Combinar formatos puede facilitar orientación; habría que probar la señal' }, { id: 'b', text: 'Una textura sirve igual a todas las personas' }, { id: 'c', text: 'El color por sí solo asegura acceso universal' }], correct: ['a'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['pyd', 'fc'], cnb: ['pyd:4.1.1', 'fc:1.1.2'], title: '3 min · Esqueleto de propuesta', prompt: 'En una hoja de papel marca los componentes que puedes completar.' },
          { goal: 'Preparar una propuesta de una página basada en evidencia, viable e inclusiva.', steps: [
            { title: 'Necesidad y evidencia', detail: 'Anota necesidad, dato y Fuente A.' },
            { title: 'Acción inclusiva', detail: 'Describe la opción y un criterio de Fuente B.' },
            { title: 'Responsabilidades y límite', detail: 'Asigna revisión del paso y cuidado del rótulo; aclara que no se comprobaron efectos.' },
          ], evidence: 'Lista marcada en una hoja de papel; la actividad no captura ni almacena la hoja.', rubric: ['Responde a evidencia', 'Cabe en Q90', 'Combina formatos', 'Reconoce una limitación'] },
        ),
        S.write(
          { id: 's09-d3-plan-inclusivo', fase: 'aplicar', areas: ['l1', 'pyd', 'fc'], cnb: ['l1:8.2.7', 'pyd:4.1.1', 'fc:1.1.2'], title: '3 min · Plan guardado', prompt: 'Guarda un plan de 24 a 32 palabras con acción, evidencia, accesibilidad y responsabilidades.' },
          { minWords: 28, placeholder: 'Propongo... porque... Será accesible mediante... Las responsabilidades...', model: 'Propongo despejar el tramo y colocar señal con texto, símbolo y textura porque hubo siete desvíos. Una persona revisará el paso y otra el rótulo.', rubric: ['Nombré la acción', 'La conecté con evidencia', 'Incluí accesibilidad', 'Distribuí responsabilidades'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.1.1'], title: '1 min · Revisar factibilidad', prompt: 'Si el presupuesto baja a Q60, ¿qué revisión es responsable?' },
          { options: [{ id: 'a', text: 'Ajustar materiales o fases y recalcular antes de prometer' }, { id: 'b', text: 'Ocultar la diferencia' }, { id: 'c', text: 'Afirmar que no habrá costos' }], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc', 'pyd'], cnb: ['fc:1.1.2', 'pyd:4.1.1'], title: '1 min · Salida', prompt: '¿Qué propuesta integra los cuatro criterios?' },
          { options: [{ id: 'a', text: 'Usa el dato, cabe en presupuesto, ofrece varios formatos y asigna revisión' }, { id: 'b', text: 'Es vistosa, pero no cita datos ni costo' }, { id: 'c', text: 'Promete resolver cualquier dificultad' }], correct: ['a'] },
        ),
        cierre({ areas: ['pyd', 'fc'], cnb: ['pyd:4.1.1', 'fc:1.1.2'] }, ['Comparé opciones con criterios comunes', 'Diseñé sin prometer resultados']),
      ],
    }),

    lesson({
      id: 's09-d4-comunicar', title: 'Comunicar con precisión', icon: 'Presentation', minutes: 14, day: 4, kind: 'proyecto',
      gancho: '¿Qué necesita escuchar una persona para confiar en tu propuesta?',
      objetivos: ['Organizar una hoja y ensayar una propuesta oral de 45 segundos con fuente y limitación'],
      resumen: ['Una propuesta conecta necesidad, evidencia, acción y límite.', 'La jerarquía visual y la voz ayudan a encontrar la información principal.'],
      media: {
        id: 's09-guia-panel', kind: 'diagram', title: 'Guía para una propuesta de una página', aspect: '3:4',
        alt: 'Plantilla visual ficticia con bloques para necesidad, dato y fuente, acción, responsabilidades, límite y revisión.',
        brief: 'Diagrama SVG 900x1200 px de una hoja de propuesta, sin campos editables. Mostrar seis bloques rotulados: necesidad, evidencia y fuente, limitación, acción inclusiva, responsabilidades y revisión. Añadir flechas que indiquen el orden de una explicación de 45 segundos y el texto “Caso simulado; no describe tu escuela”. Usar letra grande, contraste alto, espacios amplios y símbolos junto a cada rótulo. Target: public/media/s09-guia-panel.svg.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1', 'art'], cnb: ['l1:8.2.7', 'art:3.2.4'], title: '1 min · Una hoja que guía', prompt: 'Observa la estructura.' },
          { icon: 'PanelTop', body: 'El título anuncia la necesidad; el dato con su fuente sostiene la acción; contraste y espacios ordenan la lectura; la limitación evita exagerar. La explicación oral sigue el mismo recorrido.' },
        ),
        S.order(
          { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], title: '2 min · Orden del argumento', prompt: 'Ordena la propuesta oral.', explain: 'El orden conecta problema, respaldo y decisión.' },
          { items: [{ id: 'a', text: 'Nombrar la necesidad acotada' }, { id: 'b', text: 'Presentar dato y fuente' }, { id: 'c', text: 'Explicar acción inclusiva y responsabilidades' }, { id: 'd', text: 'Cerrar con limitación y revisión pendiente' }], labels: { start: 'Inicio', end: 'Cierre' } },
        ),
        S.choice(
          { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.4'], title: '1 min · Lenguaje de alcance', prompt: '¿Qué frase atribuye y limita correctamente?' },
          { options: [{ id: 'a', text: 'Según la Fuente A, hubo siete desvíos; no conocemos una causa única' }, { id: 'b', text: 'La mochila siempre causa el problema' }, { id: 'c', text: 'Esto ocurre en todas las escuelas' }], correct: ['a'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['l1', 'art', 'pyd'], cnb: ['l1:8.2.7', 'art:3.2.4', 'pyd:4.1.1'], title: '3 min · Completar el panel', prompt: 'Completa en una hoja de papel tu propuesta de una página.' },
          { goal: 'Hacer visible el razonamiento completo sin convertir el caso en afirmación local.', steps: [
            { title: 'Bloque principal', detail: 'Escribe necesidad, acción inclusiva y responsabilidades.' },
            { title: 'Respaldo', detail: 'Añade dato, Fuente A, criterio de Fuente B y rótulo del caso.' },
            { title: 'Revisión', detail: 'Incluye limitación y deja espacio para el día 5.' },
          ], evidence: 'Propuesta en papel; la actividad solo guarda marcas y autoevaluación, no captura la hoja.', rubric: ['Necesidad visible primero', 'Dato y fuentes legibles', 'Acción y responsabilidades conectadas', 'Limitación visible'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:2.1.6'], title: '2 min · Ensayo de 45 segundos', prompt: 'Ensaya una vez en voz baja o con la voz que te resulte cómoda.' },
          { goal: 'Explicar con claridad, fuente y límite en aproximadamente 45 segundos.', steps: [{ title: 'Inicio', detail: 'Di necesidad y dato atribuido.' }, { title: 'Decisión', detail: 'Explica acción y responsabilidades.' }, { title: 'Cierre', detail: 'Nombra limitación y revisión pendiente.' }], evidence: 'Ensayo presencial sin grabación; la actividad no captura ni almacena la voz.', rubric: ['Seguí el orden', 'Nombré una fuente', 'Usé lenguaje de limitación', 'Duré cerca de 45 segundos'] },
        ),
        S.write(
          { id: 's09-d4-guion', fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.7', 'l1:2.1.6'], title: '3 min · Guion guardado', prompt: 'Guarda un guion de 30 a 40 palabras con dato, fuente, acción, responsabilidad y limitación.' },
          { minWords: 34, placeholder: 'En el caso... Según... Propongo... La responsabilidad... Todavía...', model: 'En el caso, siete registros muestran desvíos, según la Fuente A. Propongo despejar el tramo y usar señal inclusiva. Se revisarán paso y rótulo. Todavía no sabemos su efecto real.', rubric: ['Atribuí el dato', 'Expliqué la acción', 'Nombré responsabilidades', 'Cerré con limitación'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.4'], title: '1 min · Jerarquía visual', prompt: '¿Qué ajuste facilita recorrer la página?' },
          { options: [{ id: 'a', text: 'Título visible, bloques separados y fuente junto al dato' }, { id: 'b', text: 'Todo igual y sin espacios' }, { id: 'c', text: 'Fuente escondida al reverso' }], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.1.6', 'l1:8.2.4'], title: '1 min · Salida', prompt: '¿Qué cierre oral conserva honestidad?' },
          { options: [{ id: 'a', text: 'La propuesta podría facilitar la orientación; habría que probarla y revisar resultados' }, { id: 'b', text: 'Resolverá el problema para siempre' }, { id: 'c', text: 'No hace falta comprobar nada' }], correct: ['a'] },
        ),
        cierre({ areas: ['l1', 'art'], cnb: ['l1:2.1.6', 'art:3.2.4'] }, ['Organicé una propuesta de una página', 'Ensayé con fuente y limitación']),
      ],
    }),

    lesson({
      id: 's09-d5-revisar', title: 'Revisar y mejorar', icon: 'ListRestart', minutes: 14, day: 5, kind: 'proyecto',
      gancho: '¿Qué hace útil una retroalimentación?',
      objetivos: ['Revisar una decisión con retroalimentación suministrada y valorar la participación individual'],
      resumen: ['La retroalimentación útil señala un criterio y un cambio comprobable.', 'Revisar muestra qué cambió y por qué.'],
      media: {
        id: 's09-tarjetas-revision', kind: 'image', title: 'Comentarios para revisar una decisión', aspect: '16:9',
        alt: 'Tres tarjetas ficticias de retroalimentación junto a una propuesta con un espacio de revisión marcado.',
        brief: 'Ilustración 1600x900 px con tres tarjetas numeradas y una hoja de propuesta. Tarjeta 1 reconoce dato y fuente legibles; tarjeta 2 pide precisar responsable y momento; tarjeta 3 reconoce el límite de no haber probado la acción. Resaltar con una flecha el espacio “Revisión” de la hoja. Incluir texto exacto “Caso simulado; no describe tu escuela”, letra grande, contraste alto, símbolos además del color y sin manos ni rostros. Target: public/media/s09-tarjetas-revision.jpg.',
      },
      steps: [
        S.reading(
          { fase: 'explorar', areas: ['l1', 'pyd'], cnb: ['l1:8.2.7', 'pyd:4.3.1'], title: '2 min · Retroalimentación suministrada', prompt: 'Lee tres comentarios ficticios.' },
          { genre: 'Tarjetas de revisión simulada', heading: 'Comentarios para mejorar', passage: `${CASE_LABEL}. Comentario 1: “El dato y la Fuente A se leen con claridad”. Comentario 2: “La señal incluye varios formatos, pero no dice quién revisará que el sendero permanezca libre”. Comentario 3: “La propuesta reconoce que todavía no fue probada”.`, questions: [{ q: '¿Qué comentario pide una revisión concreta?', options: [{ id: 'a', text: 'El 2, porque falta precisar una responsabilidad' }, { id: 'b', text: 'El 1, porque exige borrar la fuente' }, { id: 'c', text: 'El 3, porque promete resultados' }], correct: 'a', why: 'El comentario 2 identifica un campo incompleto.' }] },
        ),
        S.choice(
          { fase: 'construir', areas: ['pyd'], cnb: ['pyd:4.3.1'], title: '1 min · Elegir revisión', prompt: '¿Qué cambio responde al comentario 2?' },
          { options: [{ id: 'a', text: 'Añadir quién revisará el paso, cuándo y qué registrará' }, { id: 'b', text: 'Cambiar el color del título' }, { id: 'c', text: 'Eliminar el dato' }], correct: ['a'] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l1', 'pyd'], cnb: ['l1:8.2.7', 'pyd:4.3.1'], title: '2 min · Útil o vaga', prompt: 'Clasifica la retroalimentación.', explain: 'Un comentario útil señala parte y criterio observable.' },
          { buckets: [{ id: 'util', label: 'Útil y específica', icon: 'MessageSquareCheck' }, { id: 'vaga', label: 'Vaga', icon: 'MessageSquareMore' }], items: [{ id: 'a', text: 'Coloca Fuente B junto al criterio', bucket: 'util' }, { id: 'b', text: 'Hazlo mejor', bucket: 'vaga' }, { id: 'c', text: 'Aclara quién revisará el paso y cuándo', bucket: 'util' }] },
        ),
        S.choice(
          { fase: 'construir', areas: ['fc'], cnb: ['fc:1.1.2'], title: '1 min · Recibir una observación', prompt: '¿Qué respuesta favorece revisión respetuosa?' },
          { options: [{ id: 'a', text: 'Parafrasear el comentario, comprobar el criterio y decidir un cambio' }, { id: 'b', text: 'Descartar cualquier comentario distinto' }, { id: 'c', text: 'Aceptar todo sin revisar evidencia' }], correct: ['a'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['pyd', 'l1'], cnb: ['pyd:4.3.1', 'l1:8.2.7'], title: '3 min · Revisar la hoja', prompt: 'En el espacio reservado, registra una revisión.' },
          { goal: 'Mostrar qué decisión cambió, qué comentario la motivó y qué límite permanece.', steps: [{ title: 'Antes', detail: 'Copia la responsabilidad por revisar.' }, { title: 'Cambio', detail: 'Añade responsable, momento y registro.' }, { title: 'Límite', detail: 'Conserva que la acción no fue implementada ni evaluada en un lugar real.' }], evidence: 'Anotación en hoja de papel; la actividad no captura ni almacena el producto.', rubric: ['Responde al comentario', 'Responsabilidad concreta', 'Limitación conservada'] },
        ),
        S.write(
          { id: 's09-d5-nota-revision', fase: 'aplicar', areas: ['l1', 'pyd'], cnb: ['l1:8.2.7', 'pyd:4.3.1'], title: '2 min · Nota guardada', prompt: 'Guarda qué cambiaste, qué comentario usaste y qué debe comprobarse.' },
          { minWords: 22, placeholder: 'Cambié... porque... Todavía habría que...', model: 'Añadí una revisión diaria del paso porque el comentario pedía responsable y momento. Todavía habría que probar la acción y comparar resultados.', rubric: ['Identifiqué el cambio', 'Lo conecté con el comentario', 'Conservé un límite'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.3.1'], title: '1 min · Otro caso', prompt: 'Un comentario dice que falta costo. ¿Qué revisión corresponde?' },
          { options: [{ id: 'a', text: 'Añadir costo y compararlo con presupuesto' }, { id: 'b', text: 'Añadir ilustración sin costo' }, { id: 'c', text: 'Prometer que será gratuito' }], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1', 'pyd'], cnb: ['l1:8.2.7', 'pyd:4.3.1'], title: '1 min · Salida', prompt: '¿Qué oración muestra revisión justificable?' },
          { options: [{ id: 'a', text: 'Cambié la responsabilidad porque el comentario señaló que no podía verificarse' }, { id: 'b', text: 'Cambié todo porque sí' }, { id: 'c', text: 'Afirmé que funcionó' }], correct: ['a'] },
        ),
        cierre({ areas: ['pyd', 'fc'], cnb: ['pyd:4.3.1', 'fc:1.1.2'] }, ['Usé retroalimentación para revisar una decisión', 'Valoré mi participación individual', 'Reconocí qué debe comprobarse'], ['Conservaré fuentes y límites']),
      ],
    }),
  ],
});
