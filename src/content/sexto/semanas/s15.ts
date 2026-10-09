import { S, lesson, semana } from '../../dsl';
import { unit2Workshop } from './u2-talleres';

/**
 * SEMANA 15 · Unidad 2 "Consolidando nuestras relaciones"
 * Tema generador: Alimento y memoria que nos fortalecen
 * Nutrientes y leche materna · ciencias de la historia, poder y aportes de los pueblos antiguos ·
 * dominio colonial y Revolución Francesa · informes REMHI y CEH · gobierno escolar y proyectos.
 */
export default semana({
  id: 's15',
  unidad: 2,
  semana: 15,
  kind: 'aprendizaje',
  temaGenerador: 'Alimento y memoria que nos fortalecen',
  title: 'Alimento y memoria que nos fortalecen',
  subtitle: 'Nutrientes, historia de los pueblos y organización escolar',
  icon: 'Sprout',
  color: 'var(--area-cnt)',
  contexto: 'En una escuela de Sololá, el gobierno escolar quiere mejorar la refacción y organizar una feria de la memoria. Para lograrlo, cada comisión debe investigar: qué alimentos nos hacen crecer, cómo vivían y se organizaban los pueblos del pasado y por qué Guatemala decidió recordar su historia reciente. Esta semana descubrirás que una comunidad se fortalece con buena comida, buena memoria y buena organización.',
  ejes: ['vida-ciudadana', 'multiculturalidad', 'vida-familiar', 'valores'],
  media: {
    id: 's15-portada', kind: 'video', title: 'Una escuela que se organiza', aspect: '16:9', duration: 60,
    alt: 'Niñas y niños de una escuela del altiplano preparan una refacción nutritiva, montan una exposición de historia y votan en su gobierno escolar.',
    brief: 'Video (o animación 2D) de 60 s en una escuela rural del altiplano guatemalteco con estudiantes mayas, ladinos y garífunas representados por igual. Tres escenas cortas: (1) comisión de alimentación prepara atol, frijoles, tortillas y fruta; (2) comisión de cultura cuelga en un corredor una línea de tiempo con la Revolución Francesa, la Colonia y los Acuerdos de Paz; (3) asamblea del gobierno escolar vota a mano alzada. Sobreimpreso final: "Comida, memoria y organización: lo que nos fortalece". Música de marimba suave. Sin marcas ni rostros reales identificables.',
  },
  badge: { id: 'medalla-s15', name: 'Guardián de la memoria', icon: 'Library', desc: 'Completaste la semana 15 y superaste su reto' },
  lessons: [
    unit2Workshop(15),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's15-d5-reto',
      title: 'Reto de la semana 15',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Guardián de la memoria" (70 % o más)'],
      resumen: ['Superé el reto de la semana 15: nutrientes, historia de los pueblos, memoria y organización escolar.'],
      media: {
        id: 's15-d5-reto', kind: 'image', title: 'Medalla Guardián de la memoria', aspect: '1:1',
        alt: 'Medalla dorada con un libro abierto, una mazorca y una paloma.',
        brief: 'Ilustración de medalla circular dorada: al centro un libro abierto del que brota una mazorca de maíz; arriba una paloma de la paz. Cinta con franjas de los colores de las áreas del CNB. Fondo transparente, 1024×1024, estilo plano con brillo suave.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.3'], prompt: '¿Qué orden hace clara una propuesta escrita para mejorar la refacción escolar?' },
          { options: [{ id: 'a', text: 'Introducción del problema, desarrollo de la propuesta y conclusión' }, { id: 'b', text: 'Conclusión, lista de palabras y título al final' }, { id: 'c', text: 'Solo una frase sin explicar razones' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.1.2'], prompt: 'Une cada nutriente con su función.' },
          { pairs: [
            { id: 'p', left: 'Proteínas', right: 'Construyen y reparan tejidos' },
            { id: 'c', left: 'Carbohidratos', right: 'Dan energía rápida' },
            { id: 'm', left: 'Minerales como el calcio', right: 'Forman huesos y dientes' },
          ] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.2.2'], prompt: '¿Qué componente de la leche materna defiende al bebé de infecciones?' },
          { options: [{ id: 'a', text: 'Los anticuerpos' }, { id: 'b', text: 'El agua' }, { id: 'c', text: 'La lactosa' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.3.2'], prompt: '¿Qué favorece más cada alimento?' },
          { buckets: [{ id: 't', label: 'Crecer en talla', icon: 'Ruler' }, { id: 'e', label: 'Energía', icon: 'Zap' }],
            items: [{ id: 'a', text: 'Huevo', bucket: 't' }, { id: 'b', text: 'Tortilla', bucket: 'e' }, { id: 'c', text: 'Leche', bucket: 't' }, { id: 'd', text: 'Arroz', bucket: 'e' }] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.1'], prompt: '¿Cuántos divisores tiene el número **18**? Escribe solo la cantidad.' },
          { answer: 6, stimulus: '18', misconceptions: [{ value: 4, msg: 'Recuerda incluir el 1 y el 18: 1, 2, 3, 6, 9, 18.' }] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.6'], prompt: 'Calcula **√169**.' },
          { answer: 13 }),
        S.maya({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.8'], prompt: 'Multiplica **30 × 6** y construye el resultado en numeración maya.' },
          { mode: 'build', target: 180, levels: 2 }),
        S.match({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.1.2', 'ccss:6.3.2'], prompt: 'Une cada ciencia o pueblo con lo que le corresponde.' },
          { pairs: [
            { id: 'ep', left: 'Epigrafía', right: 'Lee inscripciones en piedra' },
            { id: 'nu', left: 'Numismática', right: 'Estudia monedas antiguas' },
            { id: 'gr', left: 'Grecia', right: 'Democracia en Atenas' },
            { id: 'ma', left: 'Mayas', right: 'Uso del cero' },
          ] }),
        S.order({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.4.7'], prompt: 'Ordena las etapas hacia la Revolución Francesa.' },
          { items: [{ id: 'a', text: 'Ideas de la Ilustración' }, { id: 'b', text: 'Estados Generales' }, { id: 'c', text: 'Asamblea Nacional' }, { id: 'd', text: 'Toma de la Bastilla' }], labels: { start: 'Primero', end: 'Último' } }),
        S.tf({ fase: 'comprobar', areas: ['fc', 'ccss', 'pyd'], cnb: ['fc:4.5.1', 'ccss:6.4.5', 'fc:3.2.3', 'pyd:4.1.2'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'La CEH fue creada dentro del proceso de paz con apoyo de las Naciones Unidas.', answer: true },
            { text: 'En la Colonia, los peninsulares ocupaban los cargos más altos.', answer: true },
            { text: 'El gobierno escolar se nombra sin votación.', answer: false },
            { text: 'Un proyecto no necesita objetivo.', answer: false },
          ] }),
        S.fill({ fase: 'comprobar', areas: ['l2', 'l1', 'l3'], cnb: ['l2:4.1.5', 'l1:5.1.2', 'l3:4.3.1'], prompt: 'Completa.' },
          { text: '"Canción" lleva tilde porque es [[aguda]] y termina en n.\nEl párrafo que cierra un texto es el [[concluyente]].\nWhat [[did]] you eat yesterday?', distractors: ['esdrújula', 'ejemplificador', 'will'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 2 */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.1.2'], prompt: '¿Qué nutriente abunda en el aguacate y la pepitoria?' },
      { options: [{ id: 'a', text: 'Grasas' }, { id: 'b', text: 'Vitamina C' }, { id: 'c', text: 'Agua' }], correct: ['a'] }),
    S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.2.2', 'cnt:5.3.2'], prompt: '¿Verdadero o falso?' },
      { statements: [{ text: 'El calostro es la primera leche materna y es rico en defensas.', answer: true }, { text: 'Los carbohidratos son los principales responsables de crecer en talla.', answer: false }] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.1'], prompt: '¿Cuál de estos números **no** es divisor de 30?' },
      { options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '15' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.6'], prompt: 'Un huerto cuadrado mide **81 m²**. ¿Cuántos metros mide cada lado?' },
      { answer: 9, unit: 'm' }),
    S.maya({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.8'], prompt: 'Multiplica **35 × 8** y construye el resultado en numeración maya.' },
      { mode: 'build', target: 280, levels: 2 }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.1.2'], prompt: 'Una especialista descifra un documento colonial escrito a mano. ¿Qué ciencia auxiliar usa?' },
      { options: [{ id: 'a', text: 'Paleografía' }, { id: 'b', text: 'Numismática' }, { id: 'c', text: 'Genealogía' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.4.5', 'ccss:6.2.2'], prompt: '¿Qué grupo sostenía con tributo y trabajo forzado la economía colonial?' },
      { options: [{ id: 'a', text: 'Los pueblos indígenas' }, { id: 'b', text: 'Los peninsulares' }, { id: 'c', text: 'Los criollos' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.5.1'], prompt: '¿Cuál fue uno de los propósitos de los informes REMHI y CEH?' },
      { options: [{ id: 'a', text: 'Esclarecer la verdad y recomendar medidas para que la violencia no se repita' }, { id: 'b', text: 'Organizar elecciones' }, { id: 'c', text: 'Promover el turismo' }], correct: ['a'] }),
    S.sort({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.5', 'l2:4.1.7'], prompt: '¿Lleva tilde o no?' },
      { buckets: [{ id: 'si', label: 'Con tilde', icon: 'Check' }, { id: 'no', label: 'Sin tilde', icon: 'X' }],
        items: [{ id: 'a', text: 'lá-piz', bucket: 'si' }, { id: 'b', text: 'ca-mión', bucket: 'si' }, { id: 'c', text: 'ven-ta-na', bucket: 'no' }, { id: 'd', text: 'pa-red', bucket: 'no' }] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.2.1'], prompt: 'La **semántica** estudia…' },
      { options: [{ id: 'a', text: 'El significado de las palabras' }, { id: 'b', text: 'Los sonidos de las letras' }, { id: 'c', text: 'La forma de las letras' }], correct: ['a'] }),
    S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.1.4', 'l3:4.3.1'], prompt: 'Complete in English.' },
      { text: 'An orange is [[smaller]] than a watermelon.\nWe [[are]] dancing at the school fair now.', distractors: ['small', 'is'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.14'], prompt: 'Para recibir una pelota **rodada** con las dos manos, ¿qué es lo más seguro?' },
      { options: [{ id: 'a', text: 'Agacharse flexionando las rodillas y poner las manos juntas abajo' }, { id: 'b', text: 'Esperarla de pie con las piernas rectas' }, { id: 'c', text: 'Recibirla con una sola mano detrás de la espalda' }], correct: ['a'] }),
  ],
});
