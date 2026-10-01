/** Productividad y Desarrollo · Unidad 1 · Semana 2. */
import { cierre, lesson, S } from '../../../../dsl';

export default [lesson({
  id: 's02-pyd-1', title: 'Información comunitaria para una idea productiva', icon: 'LibraryBig', minutes: 15,
  gancho: 'En un mercado hay muchas ideas, pero la información está dispersa. ¿Cómo puede participar la comunidad para ordenarla y usarla?',
  objetivos: ['Organizar una simulación de centro de información comunitaria que reúna aportes para generar una idea productiva familiar'],
  resumen: [
    'Un centro de información comunitaria organiza aportes identificados para que puedan consultarse y actualizarse.',
    'La participación se promueve con roles seguros, una invitación clara, criterios de clasificación y devolución de resultados.',
    'La información sobre necesidades, recursos y saberes ayuda a generar ideas productivas; los datos simulados no sustituyen una consulta real.',
  ],
  media: {
    id: 's02-pyd-1-centro-informacion', kind: 'diagram', title: 'Rincón de información del mercado', aspect: '16:9',
    alt: 'Mesa simulada con fichas de necesidades, recursos y saberes, junto a tarjetas de roles para organizar aportes comunitarios.',
    brief: 'Diagrama horizontal 1600×900 rotulado SIMULACIÓN. Mostrar una mesa con tres archivadores: NECESIDADES, RECURSOS y SABERES; tarjetas de roles RECEPCIÓN, CLASIFICACIÓN y DEVOLUCIÓN; y una ficha con autor y fecha. Sin datos de una comunidad real ni respuestas del ejercicio. Texto grande, contraste alto y orden de lectura claro.',
  },
  steps: [
    S.explain(
      { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:1.3.2'], title: 'Participar para organizar información', prompt: 'En esta simulación, un centro de información comunitaria reúne aportes con procedencia y los organiza para que sean útiles.' },
      { icon: 'LibraryBig', body: 'Promover participación significa explicar el propósito, invitar aportes voluntarios, asignar roles, cuidar los datos y devolver una síntesis. No significa inventar consultas que no ocurrieron.' },
    ),
    S.explain(
      { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.4.4'], title: 'De la información a una idea', prompt: 'Una idea de proyecto productivo vincula una necesidad, un recurso y un saber para mejorar ingresos familiares.' },
      { icon: 'Lightbulb', body: '**Necesidad + recurso comprobado + saber disponible = idea por evaluar.** También se revisan utilidad, posibilidad, cuidado ambiental e ingresos.' },
    ),
    S.reading(
      { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.3.2', 'pyd:1.4.4'], prompt: 'Usa solo estas fichas simuladas del rincón de información.', hint: 'Cada ficha identifica tipo, procedencia didáctica y fecha.', explain: 'Las fichas permiten practicar organización y generación de ideas sin atribuir datos al mercado real.' },
      { genre: 'Fichas simuladas', heading: 'Aportes para practicar', passage: 'FICHA 1 · Necesidad · Puesto didáctico A · 5 de febrero: “Faltan meriendas de fruta a precio accesible”.\n\nFICHA 2 · Recurso · Inventario simulado · 5 de febrero: “Hay fruta madura de temporada que debe usarse pronto”.\n\nFICHA 3 · Saber · Familia ficticia · 6 de febrero: “Saben lavar, cortar y conservar fruta siguiendo higiene”.', questions: [{ q: '¿Qué combinación puede estudiarse como idea productiva?', options: [{ id: 'a', text: 'Preparar porciones de fruta con higiene para venta local' }, { id: 'b', text: 'Abrir una fábrica de vehículos' }, { id: 'c', text: 'Afirmar que todo el mercado fue consultado' }], correct: 'a' }] },
    ),
    S.ejemplo(
      { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.3.2', 'pyd:1.4.4'], title: 'Modelo de organización participativa', prompt: 'Observa cómo el centro simulado convierte aportes en una idea sin fingir participación externa.' },
      { icon: 'Workflow', problem: 'Hay tres fichas y tres participantes en la práctica.', steps: [
        { text: 'Recepción verifica que cada aporte tenga tipo y procedencia.' },
        { text: 'Clasificación ubica las fichas en necesidad, recurso o saber.' },
        { text: 'Síntesis conecta los aportes y formula una idea productiva provisional.' },
        { text: 'Devolución comunica la síntesis y señala qué falta comprobar.' },
      ], answer: 'La comunidad participa mediante aportes y roles; la idea se deriva de información organizada.' },
    ),
    S.sort(
      { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.3.2'], prompt: 'Clasifica tareas para organizar con participación el centro de información comunitaria simulado.', hint: 'Recepción identifica; clasificación ordena; devolución comparte.', explain: 'Los roles hacen visible cómo aporta cada participante.' },
      { buckets: [{ id: 'r', label: 'Recepción' }, { id: 'c', label: 'Clasificación' }, { id: 'd', label: 'Devolución' }], items: [
        { id: '1', text: 'Revisar procedencia y fecha', bucket: 'r' }, { id: '2', text: 'Ubicar la ficha por tipo', bucket: 'c' },
        { id: '3', text: 'Compartir síntesis y dato pendiente', bucket: 'd' },
      ] },
    ),
    S.match(
      { fase: 'construir', areas: ['pyd'], cnb: ['pyd:1.4.4'], prompt: 'Relaciona aportes del centro simulado con ideas productivas.', hint: 'La idea debe usar necesidad, recurso y saber.', explain: 'La información organizada permite descartar ideas que no corresponden al caso.' },
      { pairs: [{ id: 'a', left: 'Fruta madura + higiene + merienda cercana', right: 'Porciones de fruta preparadas con higiene' }, { id: 'b', left: 'Bicicletas usadas + herramientas + reparación', right: 'Servicio básico de reparación' }, { id: 'c', left: 'Retazos + costura + bolsas reutilizables', right: 'Bolsas de tela para el mercado' }] },
    ),
    S.order(
      { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.3.2', 'pyd:1.4.4'], prompt: 'Organiza la simulación del centro de información comunitaria para que la participación produzca una idea útil.' },
      { items: [{ id: 'a', text: 'Invitar aportes con propósito y reglas claras' }, { id: 'b', text: 'Registrar procedencia y fecha' }, { id: 'c', text: 'Clasificar necesidades, recursos y saberes' }, { id: 'd', text: 'Generar una idea productiva provisional' }, { id: 'e', text: 'Devolver la síntesis y los datos pendientes' }], labels: { start: 'Primero', end: 'Al final' } },
    ),
    S.choice(
      { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.3.2', 'pyd:1.4.4'], prompt: 'En la simulación, falta quien clasifique los aportes del centro de información comunitaria. ¿Qué coordinación mantiene la participación y permite generar la idea productiva?' },
      { options: [{ id: 'a', text: 'Redistribuir el rol, registrar el cambio y continuar con criterios comunes' }, { id: 'b', text: 'Inventar que la clasificación ya ocurrió' }, { id: 'c', text: 'Excluir todos los aportes' }], correct: ['a'] },
    ),
    S.write(
      { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:1.3.2', 'pyd:1.4.4'], prompt: 'Aporta a la simulación: escribe una invitación breve que indique qué ficha puede entregar la comunidad, cómo se organizará y para qué idea productiva servirá.' },
      { minWords: 18, placeholder: 'Invitamos a aportar... Se clasificará en... Servirá para...', model: 'Invitamos a aportar una ficha de necesidad, recurso o saber con fecha. Se clasificará por tipo para estudiar una idea productiva familiar.', rubric: ['Invité un aporte concreto', 'Expliqué cómo se organiza', 'Nombré el uso productivo'] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.3.2', 'pyd:1.4.4'], prompt: '¿Qué opción promueve participación comunitaria en la organización de un centro de información y usa sus aportes para una idea productiva?' },
      { options: [{ id: 'a', text: 'Invitar fichas identificadas, asignar roles, clasificarlas y conectar necesidad, recurso y saber' }, { id: 'b', text: 'Guardar información sin explicar propósito ni devolver resultados' }, { id: 'c', text: 'Elegir una idea sin aportes ni criterios' }], correct: ['a'] },
    ),
    S.tf(
      { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.3.2', 'pyd:1.4.4'], prompt: 'Comprueba la organización participativa del centro de información comunitaria y su uso productivo.' },
      { statements: [{ text: 'Asignar roles y devolver una síntesis favorece la participación.', answer: true }, { text: 'Una idea productiva puede ignorar necesidades, recursos y saberes registrados.', answer: false }, { text: 'Los datos de esta lección son simulados y no prueban una consulta real.', answer: true }] },
    ),
    cierre({ areas: ['pyd'], cnb: ['pyd:1.3.2', 'pyd:1.4.4'] }, ['Organicé aportes comunitarios simulados para generar una idea productiva'], ['Distinguiré una práctica simulada de una consulta real']),
  ],
})];
