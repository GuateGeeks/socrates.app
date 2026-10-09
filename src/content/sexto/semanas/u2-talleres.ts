import { S, cierre, lesson } from '../../dsl';
import type { AreaId } from '../../../cnb/model';

interface WorkshopSpec {
  week: number;
  title: string;
  areas: [AreaId, AreaId, ...AreaId[]];
  refs: string[];
  caseTitle: string;
  caseText: string;
  question: string;
  answers: [string, string, string];
  matches: [string, string][];
  supported: [string, string];
  unsupported: [string, string];
  decision: string;
  decisionAnswer: string;
  alternatives: [string, string];
  product: string;
  evidence: string;
  criteria: [string, string, string];
  model: string;
}

const WORKSHOPS: Record<number, WorkshopSpec> = {
  11: {
    week: 11, title: 'Mapa de recursos y trabajo digno', areas: ['ccss', 'fc', 'pyd'],
    refs: ['ccss:1.1.5', 'fc:1.2.4', 'pyd:1.1.2'],
    caseTitle: 'Una propuesta para la comunidad',
    caseText: 'Una comunidad cuenta con tejedoras, un pequeño bosque y un camino hacia un mirador. Un grupo propone vender artesanías a visitantes. Las tejedoras piden horarios compatibles con el cuidado familiar, pago acordado y participación en las decisiones. Nadie ha medido todavía cuántos visitantes llegan.',
    question: '¿Qué dato falta antes de estimar las ventas?',
    answers: ['Cuántas personas visitan el mirador', 'El color favorito del grupo', 'La cantidad de volcanes de Asia'],
    matches: [['Bosque y mirador', 'Recursos de la comunidad'], ['Tejedoras', 'Conocimientos y trabajo local'], ['Pago y horarios acordados', 'Condiciones de trabajo digno']],
    supported: ['El mirador puede ser un recurso turístico', 'Las tejedoras deben participar en la decisión'],
    unsupported: ['Llegarán cien visitantes cada día', 'Todo el bosque debe talarse para vender más'],
    decision: '¿Qué primer paso respeta los recursos y a las trabajadoras?',
    decisionAnswer: 'Consultar a las tejedoras, contar visitas y acordar pago y cuidado del bosque',
    alternatives: ['Prometer ventas sin medir visitas', 'Decidir sin consultar a las tejedoras'],
    product: 'Un mapa sencillo de recursos y un acuerdo inicial de trabajo',
    evidence: 'Mapa con dos recursos ubicados y una propuesta de producción que indica consulta, pago y cuidado del bosque.',
    criteria: ['Ubico dos recursos reales o posibles', 'Distingo dato conocido de dato por investigar', 'Incluyo voz y condiciones dignas de quienes trabajan'],
    model: 'Ubicaría el bosque y el mirador en el mapa. Preguntaría a las tejedoras qué productos desean ofrecer y registraría las visitas antes de calcular ventas. El acuerdo debe incluir pago y horarios justos.',
  },
  12: {
    week: 12, title: 'Diseñamos una pila de agua responsable', areas: ['mat', 'cnt', 'pyd'],
    refs: ['mat:1.4.3', 'cnt:1.5.4', 'pyd:1.4.1'],
    caseTitle: 'Agua para un vivero escolar',
    caseText: 'Un vivero escolar necesita guardar agua de lluvia para regar plantas nativas. Hay espacio para una pila rectangular de 2 m de largo, 1 m de ancho y 1 m de alto. El equipo quiere evitar desperdicios y conservar plantas que atraen insectos polinizadores.',
    question: '¿Cuál es el volumen máximo de la pila?',
    answers: ['2 m³', '4 m³', '2 m²'],
    matches: [['2 × 1 × 1', 'Volumen de la pila en m³'], ['Tapa o cubierta', 'Reduce suciedad y evaporación'], ['Flores y polinizadores', 'Relación beneficiosa para ambos seres vivos']],
    supported: ['La pila puede guardar hasta 2 m³', 'Las plantas y los polinizadores se benefician'],
    unsupported: ['La pila crea agua sin lluvia', 'Todas las plantas requieren igual riego'],
    decision: '¿Qué plan usa mejor el recurso disponible?',
    decisionAnswer: 'Calcular la capacidad, cubrir la pila y ajustar el riego a las plantas',
    alternatives: ['Dejar la pila abierta y sin mantenimiento', 'Regar hasta vaciarla todos los días'],
    product: 'Plano de una pila con medidas y plan de uso',
    evidence: 'Dibujo con tres medidas, cálculo de 2 m³ y dos acuerdos para cuidar el agua y las plantas.',
    criteria: ['Explico largo, ancho y alto', 'Calculo el volumen con unidades cúbicas', 'Propongo acciones concretas para cuidar el agua'],
    model: 'La pila mide 2 × 1 × 1 metros y guarda hasta 2 m³. La cubriría, anotaría la lluvia recogida y regaría según la necesidad de las plantas.',
  },
  13: {
    week: 13, title: 'Una campaña para crecer con respeto', areas: ['cnt', 'fc', 'l1', 'art'],
    refs: ['cnt:2.3.3', 'fc:2.3.2', 'l1:3.3.2', 'art:1.2.3'],
    caseTitle: 'Mensajes en la escuela',
    caseText: 'En un mural escolar aparecen dos mensajes: “Cada cuerpo crece a su ritmo; pregunta con respeto” y “Si cambias antes que otros, algo anda mal contigo”. El consejo estudiantil quiere publicar una respuesta en el periódico mural y grabar una frase de apoyo.',
    question: '¿Qué mensaje evita juzgar a quien crece a otro ritmo?',
    answers: ['Cada cuerpo crece a su ritmo', 'Si cambias antes, algo anda mal', 'Solo una edad es normal'],
    matches: [['Cambios del cuerpo', 'Procesos que pueden variar entre personas'], ['Frase de apoyo', 'Comunicación respetuosa'], ['Periódico mural', 'Medio para compartir el mensaje']],
    supported: ['Las personas pueden cambiar a ritmos distintos', 'Una campaña debe evitar burlas'],
    unsupported: ['Todas las personas crecen el mismo día', 'Una burla ayuda a resolver dudas'],
    decision: '¿Qué acción elegirías para la campaña?',
    decisionAnswer: 'Publicar un mensaje de respeto sin nombrar a quien recibe burlas',
    alternatives: ['Publicar el nombre de quien recibe burlas', 'Difundir un rumor sin consultar fuentes'],
    product: 'Afiche y guion de una frase grabada de apoyo',
    evidence: 'Afiche con imagen y mensaje respetuoso; guion de 15 segundos que invita a preguntar sin vergüenza.',
    criteria: ['El mensaje explica que hay variación normal', 'La imagen y las palabras comunican lo mismo', 'Evito exponer o ridiculizar a una persona'],
    model: 'Título: “Crecer es diferente para cada persona”. Imagen: estudiantes de distintas alturas conversan. Audio: “Si tienes dudas sobre tus cambios, habla con una persona adulta de confianza”.',
  },
  14: {
    week: 14, title: 'Decidimos con fuentes confiables', areas: ['cnt', 'ccss', 'l1', 'fc'],
    refs: ['cnt:3.5.2', 'ccss:5.1.2', 'l1:4.3.2', 'fc:3.1.2'],
    caseTitle: 'Un rumor de salud',
    caseText: 'Circula un mensaje anónimo que afirma que el VIH se transmite al compartir un pupitre. Una estudiante propone revisar una fuente de salud pública, distinguir hechos de opiniones y explicar el resultado sin señalar a nadie.',
    question: '¿Qué afirmación está sustentada por la ciencia?',
    answers: ['Compartir un pupitre no transmite el VIH', 'Un mensaje anónimo siempre es confiable', 'La apariencia revela si alguien tiene VIH'],
    matches: [['Mensaje anónimo', 'Afirmación que debe verificarse'], ['Fuente de salud pública', 'Información para comprobar el hecho'], ['Respuesta sin nombres', 'Respeto de la privacidad']],
    supported: ['El contacto cotidiano no transmite el VIH', 'Conviene comprobar quién publica una afirmación'],
    unsupported: ['La apariencia permite diagnosticar', 'Compartir un pupitre es una vía de transmisión'],
    decision: '¿Cómo respondería una líder democrática?',
    decisionAnswer: 'Consultar una fuente de salud y aclarar el rumor sin señalar a nadie',
    alternatives: ['Señalar públicamente a quien compartió el rumor', 'Prohibir preguntas y dejar el rumor sin aclarar'],
    product: 'Ficha de verificación para el mural escolar',
    evidence: 'Ficha con rumor, fuente consultada, hecho comprobado y mensaje respetuoso.',
    criteria: ['Identifico la afirmación que se verifica', 'Diferencio evidencia de opinión', 'Comunico sin estigma ni datos personales'],
    model: 'Afirmación: “Compartir pupitre transmite VIH”. Comprobación: no es una vía de transmisión. Mensaje: podemos compartir la clase con respeto; ante dudas consultemos fuentes de salud confiables.',
  },
  15: {
    week: 15, title: 'Plan de refacción para aprender', areas: ['cnt', 'l1', 'pyd'],
    refs: ['cnt:5.1.2', 'l1:5.1.3', 'pyd:4.1.2'],
    caseTitle: 'Una propuesta de refacción',
    caseText: 'Un grupo piensa ofrecer una refacción con tortilla, frijoles y fruta de temporada. Quiere explicar para qué sirven distintos nutrientes y escribir una propuesta que pueda revisarse según los alimentos disponibles en cada comunidad.',
    question: '¿Cuál es la mejor razón para incluir alimentos variados?',
    answers: ['Aportan distintos nutrientes y energía', 'Un solo alimento aporta todo por igual', 'La fruta sustituye siempre al agua'],
    matches: [['Frijoles', 'Fuente de proteínas'], ['Tortilla', 'Fuente de carbohidratos'], ['Fruta de temporada', 'Fuente de vitaminas y otros nutrientes']],
    supported: ['La variedad ayuda a obtener diferentes nutrientes', 'La disponibilidad local debe revisarse'],
    unsupported: ['La misma refacción sirve para todas las necesidades', 'El precio nunca importa'],
    decision: '¿Qué debe hacer el grupo antes de ofrecer la refacción?',
    decisionAnswer: 'Averiguar precios y necesidades, y explicar los nutrientes de los alimentos',
    alternatives: ['Comprar ingredientes sin consultar precios', 'Afirmar que cura enfermedades'],
    product: 'Propuesta escrita de una refacción local',
    evidence: 'Texto con introducción, ingredientes, razón nutricional, costo por investigar y conclusión.',
    criteria: ['Explico la función de al menos dos alimentos', 'Ordeno el texto en introducción, desarrollo y conclusión', 'Identifico un dato que aún debo averiguar'],
    model: 'Proponemos tortilla, frijoles y fruta de temporada. La tortilla aporta energía, los frijoles proteínas y la fruta vitaminas. Antes de ofrecerla averiguaremos precios y necesidades de las familias.',
  },
  16: {
    week: 16, title: 'Un cartel para cuidar el bosque', areas: ['cnt', 'art', 'pyd'],
    refs: ['cnt:6.3.2', 'art:3.2.3', 'pyd:4.3.2'],
    caseTitle: 'Árboles cerca de la escuela',
    caseText: 'La escuela quiere sembrar árboles nativos donde hay poca sombra. Algunas familias advierten que primero se debe preguntar qué especies crecen bien allí y quién podrá cuidarlas. El comité necesita un cartel claro para invitar a colaborar.',
    question: '¿Qué pregunta debe responderse antes de sembrar?',
    answers: ['Qué especies nativas prosperan allí y quién las cuidará', 'Qué árbol parece más grande en una foto', 'Cuántos carteles se pueden imprimir'],
    matches: [['Árboles nativos', 'Plantas adaptadas al lugar'], ['Figura y fondo', 'Recurso visual para leer el cartel'], ['Turnos de cuidado', 'Plan para sostener la acción']],
    supported: ['La siembra necesita seguimiento', 'El cartel debe mostrar una acción concreta'],
    unsupported: ['Todo árbol vive en cualquier suelo', 'Sembrar una vez elimina toda contaminación'],
    decision: '¿Qué invitación ayuda más al proyecto?',
    decisionAnswer: 'Investigar especies nativas y convocar turnos de cuidado con fecha y tareas',
    alternatives: ['Prometer resultados imposibles', 'Pedir ayuda sin decir cuándo ni cómo'],
    product: 'Cartel de invitación y plan de cuidado',
    evidence: 'Boceto con figura visible, mensaje breve, fecha propuesta y dos tareas de cuidado.',
    criteria: ['La figura destaca sobre el fondo', 'El mensaje indica una acción realizable', 'El plan incluye seguimiento de los árboles'],
    model: 'Cartel: “Cuidemos los árboles nativos”. Dibujaría un árbol oscuro sobre fondo claro. Invitaría a investigar especies locales y organizar turnos de riego y observación.',
  },
  17: {
    week: 17, title: 'Energía en una milpa viva', areas: ['cnt', 'pyd'],
    refs: ['cnt:7.1.2', 'pyd:5.2.1'],
    caseTitle: 'La milpa como ecosistema local',
    caseText: 'En una milpa crecen maíz, frijol y ayote. Las plantas reciben luz solar y producen alimento. Una gallina come granos de maíz y obtiene energía química de ese alimento. Hay insectos, aves, tierra y agua que también forman parte del ecosistema.',
    question: '¿De dónde obtiene la gallina la energía que usa para moverse?',
    answers: ['Del alimento que come, como los granos de maíz', 'Directamente de la luz como una planta', 'Solo del agua, sin necesidad de alimento'],
    matches: [['Plantas de maíz', 'Producen alimento con luz'], ['Gallina', 'Obtiene energía química al comer granos'], ['Milpa', 'Ecosistema con seres vivos, suelo, agua y luz']],
    supported: ['La gallina obtiene energía química del alimento', 'La milpa reúne seres vivos y elementos no vivos'],
    unsupported: ['La gallina fabrica su alimento con luz', 'Todos los insectos de la milpa son dañinos'],
    decision: '¿Cómo representarías la relación de energía sin inventar datos?',
    decisionAnswer: 'Dibujar luz hacia el maíz y alimento desde los granos hacia la gallina',
    alternatives: ['Dibujar que la gallina produce luz solar', 'Excluir las plantas del diagrama'],
    product: 'Diagrama de energía y seres vivos de una milpa',
    evidence: 'Diagrama con maíz, gallina, luz, suelo y agua; flechas que distinguen la luz recibida por la planta y la energía química del alimento.',
    criteria: ['Ubico la milpa como ecosistema local', 'Dibujo las relaciones entre luz, planta y gallina', 'Distingo luz solar de energía química del alimento'],
    model: 'Dibujaría luz que llega al maíz y una flecha desde los granos hacia la gallina. Rotularía que la gallina obtiene energía química del alimento; añadiría suelo, agua y otros seres vivos de la milpa.',
  },
  18: {
    week: 18, title: 'Informe sobre el aire que compartimos', areas: ['cnt', 'ccss', 'l1'],
    refs: ['cnt:7.3.2', 'ccss:8.1.2', 'l1:8.2.6'],
    caseTitle: 'Observaciones de una semana',
    caseText: 'Durante cinco días, estudiantes anotan cuándo hay humo cerca de la escuela y conversan con vecinos sobre posibles causas. No han medido partículas ni pueden atribuir enfermedades concretas al humo. Quieren presentar un informe y una imagen pública sin exagerar lo observado.',
    question: '¿Qué conclusión sí permite la evidencia?',
    answers: ['Se observó humo en algunos momentos y conviene investigar su origen', 'El humo causó todas las enfermedades del barrio', 'Una sola observación demuestra la causa exacta'],
    matches: [['Registro de cinco días', 'Observación'], ['Origen posible del humo', 'Hipótesis por comprobar'], ['Informe público', 'Comunicación de hallazgos y límites']],
    supported: ['Hay observaciones de humo que merecen investigación', 'El informe debe reconocer lo no medido'],
    unsupported: ['Ya se conoce la concentración de partículas', 'Todas las enfermedades tienen la misma causa'],
    decision: '¿Qué presentación sería fiel a la investigación?',
    decisionAnswer: 'Informar lo observado y sus límites, y proponer cómo investigar el origen',
    alternatives: ['Publicar una acusación sin pruebas', 'Omitir los límites de los datos'],
    product: 'Informe breve y boceto de imagen informativa',
    evidence: 'Informe con observación, hipótesis, dato pendiente y propuesta; boceto visual con título y fuente.',
    criteria: ['Distingo observación de hipótesis', 'Reconozco un dato que falta', 'La imagen comunica sin afirmar más de lo investigado'],
    model: 'Observamos humo tres mañanas de cinco. Pensamos que podría venir de quemas cercanas, pero aún debemos averiguarlo. Proponemos registrar horarios y consultar a la comunidad antes de atribuir causas.',
  },
};

export function unit2Workshop(week: number) {
  const spec = WORKSHOPS[week];
  if (!spec) throw new Error(`Sin taller para la semana ${week}`);
  const sid = `s${week}`;
  const meta = { areas: spec.areas, cnb: spec.refs };
  const inArea = (index: number) => ({ areas: [spec.areas[index % spec.areas.length], ...spec.areas.filter((_, i) => i !== index % spec.areas.length)],
    cnb: [spec.refs[index % spec.refs.length], ...spec.refs.filter((_, i) => i !== index % spec.refs.length)] });
  const answers = [spec.decisionAnswer, ...spec.alternatives];
  const offset = week % answers.length;
  const orderedAnswers = [...answers.slice(offset), ...answers.slice(0, offset)];
  const answerIds = ['a', 'b', 'c'];
  return lesson({
    id: `${sid}-d5-taller`, kind: 'taller', day: 5, title: spec.title,
    icon: 'ClipboardPenLine', minutes: 19,
    gancho: spec.caseTitle,
    objetivos: [`Analizar ${spec.caseTitle.toLowerCase()} con aprendizajes de ${spec.areas.length} materias`, `Elaborar ${spec.product.toLowerCase()} con evidencia`],
    resumen: [spec.supported[0], spec.supported[1], `Un producto útil distingue datos comprobados de información pendiente.`],
    media: { id: `${sid}-d5-taller-portada`, kind: 'image', title: spec.caseTitle, aspect: '16:9',
      alt: `Escena ilustrada del caso: ${spec.caseText}`,
      brief: `Ilustrar una escena guatemalteca apropiada para sexto primaria que muestre el caso «${spec.caseTitle}». Incluir sus elementos reales y espacio para el título. Evitar detalles no respaldados por la ficha: ${spec.caseText}` },
    steps: [
      S.explain({ fase: 'explorar', ...meta, title: spec.caseTitle,
        prompt: `Esta semana aplicarás lo aprendido para elaborar **${spec.product.toLowerCase()}**. Primero revisa la información disponible.`,
        media: { id: `${sid}-d5-taller-caso`, kind: 'diagram', title: `Evidencia del caso: ${spec.caseTitle}`, aspect: '4:3',
          alt: `Ficha visual que organiza los datos conocidos y las preguntas pendientes sobre ${spec.caseTitle.toLowerCase()}.`,
          brief: `Diseñar una ficha visual legible en móvil con dos columnas: datos observados y preguntas aún sin respuesta. Usar exactamente la información de este caso, sin añadir cifras inventadas: ${spec.caseText}` } },
      { icon: 'ClipboardList', body: spec.caseText, reveal: spec.matches.map(([front, back]) => ({ icon: 'BookOpen', front, back })) }),
      S.reading({ fase: 'construir', ...inArea(1), prompt: 'Lee el caso y responde solo con la evidencia disponible.' },
      { genre: 'Ficha de caso', heading: spec.caseTitle, passage: spec.caseText,
        questions: [{ q: spec.question, options: spec.answers.map((answer, i) => ({ id: String(i), text: answer })), correct: '0' }] }),
      S.match({ fase: 'construir', ...inArea(2), prompt: 'Relaciona las ideas que usarás en tu producto.',
        hint: 'Vuelve a la ficha y a lo aprendido en las materias de esta semana.', explain: 'Cada relación ayuda a interpretar el caso antes de actuar.' },
      { pairs: spec.matches.map(([left, right], i) => ({ id: String(i), left, right })) }),
      S.sort({ fase: 'aplicar', ...inArea(3), prompt: 'Distingue lo que el caso permite afirmar de lo que aún no sabemos.',
        explain: 'Una propuesta responsable reconoce los límites de su evidencia.' },
      { buckets: [{ id: 'si', label: 'Con apoyo en el caso', icon: 'BadgeCheck' }, { id: 'no', label: 'Sin apoyo suficiente', icon: 'CircleHelp' }],
        items: [...spec.supported.map((item, i) => ({ id: `s${i}`, text: item, bucket: 'si' })),
          ...spec.unsupported.map((item, i) => ({ id: `u${i}`, text: item, bucket: 'no' }))] }),
      S.choice({ fase: 'aplicar', ...meta, prompt: spec.decision, explain: 'La decisión correcta usa evidencia y respeta a las personas y el entorno.' },
      { options: orderedAnswers.map((answer, i) => ({ id: answerIds[i], text: answer })),
        correct: [answerIds[orderedAnswers.indexOf(spec.decisionAnswer)]] }),
      S.project({ fase: 'aplicar', ...meta, title: 'Producto de la semana', prompt: `Elabora **${spec.product.toLowerCase()}**. Puedes usar una hoja y lápiz.`,
        media: { id: `${sid}-d5-taller-producto`, kind: 'image', title: `Modelo de ${spec.product.toLowerCase()}`, aspect: '4:3',
          alt: `Ejemplo de ${spec.product.toLowerCase()} con los tres criterios de revisión señalados.`,
          brief: `Crear un modelo visual de ${spec.product.toLowerCase()} legible en teléfono. Señalar con llamadas los tres criterios: ${spec.criteria.join('; ')}. Debe ser un ejemplo, no una respuesta para copiar literalmente.` } },
      { goal: spec.product, steps: [{ title: 'Borrador', detail: 'Usa solo los datos y relaciones que has comprobado en el caso.' },
        { title: 'Revisión', detail: 'Comprueba los tres criterios y corrige una afirmación sin evidencia.' }],
        evidence: spec.evidence, rubric: spec.criteria }),
      S.write({ fase: 'aplicar', ...meta, prompt: 'Explica en tres o cuatro oraciones qué muestra tu producto y qué dato falta por investigar.' },
      { model: spec.model, rubric: spec.criteria, minWords: 20, placeholder: 'Mi producto muestra…' }),
      cierre(meta, [`Distinguí evidencias de suposiciones en ${spec.caseTitle.toLowerCase()}`, `Elaboré ${spec.product.toLowerCase()}`],
        ['Revisaré un dato pendiente antes de presentar mi propuesta como definitiva']),
    ],
  });
}
