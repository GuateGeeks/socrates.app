import { S, cierre, lesson, semana } from '../../dsl';

/** Semana 7: investigación guiada del agua con evidencia de un caso simulado. */
export default semana({
  id: 's07',
  unidad: 1,
  semana: 7,
  kind: 'aprendizaje',
  temaGenerador: 'Investigamos y protegemos el agua',
  title: 'Investigamos y protegemos el agua',
  subtitle: 'Preguntas, fuentes y decisiones compartidas para cuidar el agua',
  icon: 'Droplets',
  color: 'var(--area-cnt)',
  contexto: 'El agua de una comunidad puede venir de distintas fuentes y pasar por sistemas diferentes; que llegue por tubería no demuestra por sí solo que sea potable, y que provenga de un nacimiento no demuestra que sea insegura. Esta semana formularás preguntas, juzgarás fuentes y distinguirás observaciones, datos e inferencias. También estudiarás cómo la cobertura forestal puede contribuir a la infiltración y al control de la erosión según el suelo, la pendiente, la lluvia y el manejo. Con un caso simulado practicarás cooperación y diálogo para proponer una acción factible sin inventar mediciones, entrevistas ni hechos locales.',
  ejes: ['sostenible', 'vida-ciudadana', 'valores', 'multiculturalidad'],
  media: {
    id: 's07-portada-agua', kind: 'image', title: 'Equipo escolar revisa evidencia sobre el agua', aspect: '16:9',
    alt: 'Cuatro estudiantes comparan un mapa de cuenca, una ficha de fuente y una tabla de observaciones sobre un caso simulado.',
    brief: 'Ilustración horizontal 1600×900. Estudiantes diversos de sexto grado alrededor de una mesa. Mostrar con claridad un mapa simplificado con bosque, ladera, nacimiento y tanque; dos fichas rotuladas Fuente A y Fuente B; una tabla rotulada datos simulados; y tarjetas observación, dato e inferencia. Una estudiante señala una propuesta con signo de interrogación, no una conclusión segura. Aula guatemalteca, estilo editorial educativo, contraste alto, sin marcas y con texto grande legible.',
  },
  badge: { id: 'medalla-s07', name: 'Investigación del agua', icon: 'SearchCheck', desc: 'Completaste un informe basado en evidencia y decisiones pacíficas' },
  lessons: [
    lesson({
      id: 's07-d5-taller',
      kind: 'taller',
      day: 5,
      title: 'Informe sobre el agua de la comunidad',
      icon: 'FileSearch',
      minutes: 20,
      gancho: 'Un comité escolar recibe datos incompletos sobre el agua. ¿Cómo puede informar sin convertir una coincidencia en certeza?',
      objetivos: ['Elaborar un informe breve que separe evidencia, inferencias y una acción factible'],
      resumen: [
        'Una pregunta investigable delimita qué se quiere saber.',
        'El juicio de una fuente usa autoría, fecha, propósito y evidencia.',
        'Un hallazgo describe datos; una inferencia propone una explicación y declara límites.',
        'Una acción factible indica responsables propuestos, recursos, acuerdo y seguimiento.',
      ],
      media: {
        id: 's07-taller-dossier', kind: 'diagram', title: 'Dossier del caso Las Flores', aspect: '4:3',
        alt: 'Mapa y fichas de un caso hipotético con una microcuenca, cobertura forestal parcial, un nacimiento, tubería, tanque y escuela; no muestra respuestas.',
        brief: 'SVG 1200×900 accesible. Encabezado: CASO HIPOTÉTICO · DATOS DE EJEMPLO. Izquierda: mapa esquemático con norte, parte alta, parches de bosque, ladera con suelo expuesto, nacimiento N1, tubería, tanque T1 y escuela; leyenda con iconos TreePine, Mountain, Droplets, Pipe y School. Derecha: Fuente A, ficha técnica municipal de ejemplo con autor y fecha; Fuente B, mensaje reenviado sin autor; tabla de tres observaciones simuladas. Usar contraste alto, rótulos grandes y patrones además de color. No usar la transparencia como prueba de potabilidad ni revelar respuestas. Nota: el mapa no está a escala y no representa una comunidad real.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1', 'cnt'], cnb: ['l1:8.2.2', 'cnt:6.3.1'], title: '1 min · Encargo y límites',
            prompt: 'Trabajarás con el **caso hipotético Las Flores** y datos de ejemplo. No son mediciones ni testimonios de una comunidad real.' },
          { icon: 'FileWarning', body: 'El informe dirá qué se sabe, qué se infiere y qué falta comprobar.' },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'cnt'], cnb: ['l1:8.2.3', 'cnt:6.3.1'], title: '2 min · Lee el dossier',
            prompt: 'Lee las tres piezas del caso simulado y responde sin agregar hechos.',
            hint: 'Separa quién publica, qué fecha tiene y qué dato aporta cada pieza.',
            explain: 'La ficha y la tabla permiten rastrear datos; el mensaje anónimo necesita evidencia.' },
          { genre: 'Dossier simulado', heading: 'Caso hipotético Las Flores', passage:
            'FUENTE A. Ficha técnica municipal de ejemplo, Unidad de Agua, 12 de mayo de 2025. “La tubería lleva agua desde N1 al tanque T1. El sistema aplica desinfección en el tanque. El último control incluido corresponde al 8 de mayo; para afirmar potabilidad en otra fecha se necesita el control vigente.”\n\n' +
            'FUENTE B. Mensaje reenviado, sin autor ni fecha: “El agua se ve clara, por eso siempre es potable. Compártelo.”\n\n' +
            'OBSERVACIONES SIMULADAS. Parte alta: cobertura forestal parcial y dos surcos de erosión en suelo expuesto. N1: caudal de ejemplo 18 L/min en abril y 25 L/min en mayo. T1: registro de desinfección del 8 de mayo. No hay datos de lluvia, extracción ni análisis posteriores.',
            questions: [
              { q: '¿Qué pieza identifica autor y fecha?', options: [{ id: 'a', text: 'Fuente A' }, { id: 'b', text: 'Fuente B' }], correct: 'a', why: 'La Fuente A identifica unidad responsable y fecha.' },
              { q: '¿Qué afirmación excede la evidencia?', options: [{ id: 'a', text: 'La tubería conecta N1 y T1' }, { id: 'b', text: 'El agua clara siempre es potable' }], correct: 'b', why: 'La apariencia no sustituye un control vigente.' },
            ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.3'], title: '1 min · Juicio de fuente',
            prompt: '¿Qué juicio está mejor sustentado?', hint: 'Usa autoría, fecha, propósito y evidencia.',
            explain: 'La Fuente A identifica procedencia y fecha, pero su límite exige revisar un control vigente.' },
          { options: [
            { id: 'a', text: 'La Fuente A sirve para describir el sistema; no prueba la calidad actual' },
            { id: 'b', text: 'La Fuente B basta porque suena segura' },
            { id: 'c', text: 'Las dos prueban exactamente lo mismo' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt', 'l1'], cnb: ['cnt:6.3.1', 'l1:8.2.3'], title: '2 min · Evidencia o inferencia',
            prompt: 'Clasifica cada enunciado.', hint: 'Observación: se registró. Inferencia: explica. Dato pendiente: hace falta.',
            explain: 'Atribuir el cambio solo al bosque sería una inferencia sin lluvia, extracción y geología.' },
          { buckets: [
            { id: 'obs', label: 'Observación o dato', icon: 'ClipboardList' },
            { id: 'inf', label: 'Inferencia limitada', icon: 'Lightbulb' },
            { id: 'fal', label: 'Dato pendiente', icon: 'CircleHelp' },
          ], items: [
            { id: 'a', text: 'Hay dos surcos en suelo expuesto', bucket: 'obs' },
            { id: 'b', text: 'La cobertura podría influir en la erosión', bucket: 'inf' },
            { id: 'c', text: 'Registro de lluvia de abril y mayo', bucket: 'fal' },
            { id: 'd', text: 'El caudal de ejemplo cambió entre abril y mayo', bucket: 'obs' },
          ] },
        ),
        S.dilemma(
          { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.2'], title: '2 min · Decisión pacífica',
            prompt: 'Un grupo quiere sembrar ya; otro pide revisar suelo, permiso y especies. Elige una ruta de acuerdo.',
            hint: 'Atiende la urgencia sin ocultar datos pendientes.',
            explain: 'Una revisión breve con responsables y fecha permite avanzar sin imponer una acción incierta.' },
          { scene: { icon: 'MessagesSquare', text: 'Ambos grupos quieren cuidar el agua, pero discrepan sobre el siguiente paso.' }, options: [
            { id: 'a', icon: 'Handshake', text: 'Escuchar razones, registrar lo que falta y acordar una revisión', consequence: 'La decisión queda verificable.', values: ['Diálogo', 'Responsabilidad'], constructive: true },
            { id: 'b', icon: 'Volume2', text: 'Dejar que gane quien grite más', consequence: 'El conflicto escala.', values: ['Imposición'], constructive: false },
            { id: 'c', icon: 'MessageCircleOff', text: 'No volver a hablar', consequence: 'Los datos siguen pendientes.', values: ['Evasión'], constructive: false },
          ] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.2'], title: '2 min · Pregunta de investigación',
            prompt: 'Escribe en la plantilla una **pregunta de investigación** abierta y delimitada para Las Flores.' },
          { goal: 'Abrir el informe con una pregunta investigable.', steps: [
            { title: 'Aspecto', detail: 'Elige erosión, caudal o control de calidad.' },
            { title: 'Lugar', detail: 'Nombra N1, T1 o la parte alta del mapa.' },
            { title: 'Límite', detail: 'Usa abril-mayo y los datos proporcionados.' },
          ], evidence: 'Una pregunta que no presupone la respuesta.', rubric: ['Es abierta', 'Delimita aspecto, lugar y periodo', 'Puede responderse con evidencia'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.3'], title: '2 min · Juicio de fuentes',
            prompt: 'Añade dos líneas: utilidad y límite de cada fuente.' },
          { minWords: 20, placeholder: 'Fuente A: es útil porque... Su límite es... Fuente B:...', model: 'La Fuente A identifica responsable y fecha, pero su control no prueba el estado posterior. La Fuente B no tiene autor, fecha ni evidencia verificable.', rubric: ['Usa criterios visibles', 'No decide por gusto', 'Declara un límite'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['cnt', 'l1'], cnb: ['cnt:6.3.1', 'l1:8.2.3'], title: '2 min · Dos hallazgos',
            prompt: 'Redacta un hallazgo observado y una inferencia calificada.' },
          { goal: 'Comunicar evidencia sin exagerarla.', steps: [
            { title: 'Hallazgo 1', detail: 'Describe un dato exacto del dossier.' },
            { title: 'Hallazgo 2', detail: 'Usa “podría” y di qué dato falta.' },
          ], evidence: 'Dos hallazgos con fuente o límite.', rubric: ['Distingue dato e inferencia', 'No afirma causalidad segura', 'Menciona evidencia pendiente'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['fc', 'pyd'], cnb: ['fc:4.2.2', 'pyd:5.3.2'], title: '2 min · Acción factible',
            prompt: 'Cierra con una acción pequeña que no finja permisos ni consultas.' },
          { minWords: 24, placeholder: 'Acción:... Responsables propuestos:... Recursos:... Seguimiento:...', model: 'Solicitar el control vigente y una revisión técnica del punto erosionado. Responsables propuestos: comité escolar y autoridad competente, sujetos a aceptación. Recursos: dossier y formulario. Verificación: revisar si se recibió el control y la evaluación.', rubric: ['Responde a hallazgos', 'No inventa autorización', 'Incluye responsables, recursos y seguimiento'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3'], title: '1 min · Salida de fuentes',
            prompt: 'Una ficha tiene autor y fecha, pero su control es antiguo. ¿Qué debe decir el informe?' },
          { options: [
            { id: 'a', text: 'Aporta antecedentes; hace falta un control vigente para afirmar el estado actual' },
            { id: 'b', text: 'Todo sigue igual porque alguna vez fue válida' },
            { id: 'c', text: 'La ficha no sirve para nada' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['cnt', 'pyd'], cnb: ['cnt:6.3.1', 'pyd:5.3.2'], title: '1 min · Salida de evidencia',
            prompt: 'Evalúa los límites del informe.' },
          { statements: [
            { text: 'La evidencia no basta para afirmar que el bosque explica por sí solo el cambio de caudal.', answer: true },
            { text: 'El agua entubada puede llamarse potable sin revisar controles.', answer: false, why: 'La distribución no demuestra la calidad.' },
            { text: 'Una acción puede obtener el dato pendiente antes de intervenir.', answer: true },
          ] },
        ),
        cierre({ areas: ['l1', 'cnt', 'fc', 'pyd'], cnb: ['l1:8.2.3', 'cnt:6.3.1', 'fc:4.2.2', 'pyd:5.3.2'] },
          ['Separo observaciones e inferencias', 'Juzgo fuentes con criterios', 'Propongo una acción factible'],
          ['Diré con claridad qué información falta']),
      ],
    }),

    lesson({
      id: 's07-d5-reto',
      kind: 'reto',
      day: 5,
      title: 'Reto de la semana 7',
      icon: 'Trophy',
      minutes: 14,
      objetivos: ['Resolver actividades nuevas de las diez áreas'],
      resumen: ['Apliqué productos cartesianos, investigación, ambiente, historia, lenguas, convivencia, arte, movimiento y acción ambiental.'],
      media: {
        id: 's07-reto-evidencias', kind: 'image', title: 'Mesa de evidencias sobre el agua', aspect: '16:9',
        alt: 'Mesa con un mapa de puntos de agua, fichas de fuentes, una tabla de datos simulados, un poema, tarjetas bilingües y un plan de acción.',
        brief: 'Imagen cenital 1600×900 para el reto interdisciplinario. Mostrar objetos reconocibles: mapa con cuatro puntos de observación y dos fechas, informe fechado con responsable, diagrama de bomba rotulado "MODELO", fichas de dos procesos de paz, tarjeta de sílabas, nota en inglés, ficha de negociación, boceto de una gota con luz y sombra, testigo de relevo y plan ambiental. Todo debe parecer material nuevo de evaluación, con contraste alto, texto grande, sin respuestas marcadas ni datos atribuidos a una comunidad real. No usar círculos o cuadrados como sustitutos de objetos.',
      },
      steps: [
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:3.2.4'], prompt: 'Un registro combina 4 puntos de observación con 2 fechas. ¿Cuántos pares punto-fecha contiene?' }, { answer: 8, unit: 'pares' }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.3'], prompt: '¿Qué fuente permite revisar mejor una afirmación sobre el agua?' }, { options: [{ id: 'a', text: 'Un informe fechado con método y responsable' }, { id: 'b', text: 'Un audio reenviado sin origen' }, { id: 'c', text: 'Un anuncio con promesas' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.1.1'], prompt: 'Relaciona la evidencia del sistema con la manifestación de energía.' }, { pairs: [{ id: 'a', left: 'Cable que alimenta la bomba', right: 'Eléctrica' }, { id: 'b', left: 'Motor tibio', right: 'Térmica' }, { id: 'c', left: 'Luz del indicador', right: 'Luminosa' }] }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:7.2.1'], prompt: '¿Qué comparación usa acuerdos, actores y participación?' }, { options: [{ id: 'a', text: 'Guatemala y Colombia incluyeron gobierno y grupo armado; variaron compromisos y formas de participación social' }, { id: 'b', text: 'Son iguales porque ambos están en América' }, { id: 'c', text: 'Solo se comparan sus fechas' }], correct: ['a'] }),
        S.fill({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.8'], prompt: 'Completa la clasificación por sílaba tónica.' }, { text: 'La palabra **caudal** es [[aguda]] y **hídrico** es [[esdrújula]].', distractors: ['llana', 'monosílaba'] }),
        S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.3.3'], prompt: 'Complete: “The students ___ the map when the meeting began.”' }, { options: [{ id: 'a', text: 'were checking' }, { id: 'b', text: 'was checking' }, { id: 'c', text: 'checking' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.2.2'], prompt: 'Relaciona cada acción durante un desacuerdo con su efecto.' }, { pairs: [{ id: 'a', left: 'Parafrasear la razón de la otra parte', right: 'Comprensión antes de proponer' }, { id: 'b', left: 'Anotar el compromiso y una fecha', right: 'Acuerdo que puede revisarse' }, { id: 'c', left: 'Interrumpir con burlas', right: 'Escalada del conflicto' }] }),
        S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.7'], prompt: 'Una gota recibe luz desde arriba a la derecha. ¿Dónde cae su sombra proyectada?' }, { options: [{ id: 'a', text: 'Abajo a la izquierda' }, { id: 'b', text: 'Sobre el lado iluminado' }, { id: 'c', text: 'Dentro del título' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.1.4'], prompt: 'Clasifica decisiones de un relevo cooperativo.' }, { buckets: [{ id: 'eq', label: 'Beneficia al equipo' }, { id: 'lu', label: 'Busca lucimiento personal' }], items: [{ id: 'a', text: 'Ajustar la velocidad para entregar con control', bucket: 'eq' }, { id: 'b', text: 'Ignorar la señal de quien recibe para llegar primero', bucket: 'lu' }, { id: 'c', text: 'Animar y adaptar la distancia cuando hace falta', bucket: 'eq' }] }),
        S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.3.2'], prompt: '¿Qué vuelve verificable una acción ambiental?' }, { options: [{ id: 'a', text: 'Responsable propuesto, recurso, fecha e indicador' }, { id: 'b', text: 'Una promesa sin fecha' }, { id: 'c', text: 'Afirmar que siempre funcionará' }], correct: ['a'] }),
      ],
    }),
  ],
  bank: [
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.2'], prompt: '¿Qué número representa **XLIX** en un rótulo de sección?' }, { options: [{ id: 'a', text: '49' }, { id: 'b', text: '41' }, { id: 'c', text: '59' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.2'], prompt: '¿Cuál pregunta está delimitada y no supone una respuesta?' }, { options: [{ id: 'a', text: '¿Cómo varió el uso del tanque entre lunes y viernes según el registro?' }, { id: 'b', text: '¿Por qué todos desperdician agua?' }, { id: 'c', text: '¿El agua?' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.1.1'], prompt: '¿Qué manifestación de energía está almacenada principalmente en una pila antes de encender un sensor?' }, { options: [{ id: 'a', text: 'Química' }, { id: 'b', text: 'Nuclear' }, { id: 'c', text: 'Sonora' }], correct: ['a'] }),
    S.match({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:7.1.3'], prompt: 'Relaciona cada parte del servicio comunitario con su ejemplo.' }, { pairs: [{ id: 'a', left: 'Responsabilidad', right: 'Dos estudiantes revisan los rótulos' }, { id: 'b', left: 'Recurso', right: 'Etiquetas reutilizables' }, { id: 'c', left: 'Verificación', right: 'Comparar registros' }] }),
    S.sort({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.6'], prompt: 'Clasifica por cantidad de sílabas.' }, { buckets: [{ id: 'bi', label: 'Bisílaba' }, { id: 'tri', label: 'Trisílaba' }, { id: 'cua', label: 'Cuatro sílabas' }], items: [{ id: 'a', text: 'lluvia', bucket: 'bi' }, { id: 'b', text: 'arroyo', bucket: 'tri' }, { id: 'c', text: 'acuífero', bucket: 'cua' }] }),
    S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.3.3'], prompt: 'Complete the past continuous sentence.' }, { text: 'I [[was]] taking notes while they [[were]] reading.', distractors: ['am', 'is', 'are'] }),
    S.order({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.2.2'], prompt: 'Ordena una negociación pacífica.' }, { items: [{ id: 'a', text: 'Calmarse' }, { id: 'b', text: 'Escuchar necesidades' }, { id: 'c', text: 'Proponer alternativas' }, { id: 'd', text: 'Acordar seguimiento' }], labels: { start: 'Inicio', end: 'Cierre' } }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.7'], prompt: '¿Qué recurso sugiere movimiento continuo del agua?' }, { options: [{ id: 'a', text: 'Curvas repetidas que guían la mirada' }, { id: 'b', text: 'Objetos sin dirección' }, { id: 'c', text: 'Una sola línea horizontal' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.1.4'], prompt: 'En un relevo, ¿qué decisión prioriza al equipo?' }, { options: [{ id: 'a', text: 'Ajustar el pase a quien recibe' }, { id: 'b', text: 'Retener siempre el objeto' }, { id: 'c', text: 'Excluir a quien necesita adaptación' }], correct: ['a'] }),
    S.sort({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.1.2'], prompt: 'Clasifica cada elemento del plan ambiental.' }, { buckets: [{ id: 'r', label: 'Recurso' }, { id: 'a', label: 'Acción' }, { id: 'i', label: 'Indicador' }], items: [{ id: 'x', text: 'Ficha de registro', bucket: 'r' }, { id: 'y', text: 'Revisar una fuga reportada', bucket: 'a' }, { id: 'z', text: 'Número de revisiones completadas', bucket: 'i' }] }),
  ],
});
