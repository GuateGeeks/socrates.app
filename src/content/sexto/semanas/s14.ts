import { S, lesson, semana } from '../../dsl';
import { unit2Workshop } from './u2-talleres';

/**
 * SEMANA 14 · Unidad 2 "Consolidando nuestras relaciones"
 * Tema generador: Decido con información
 * Incluye contenidos sensibles del CNB (VIH, drogas): enfoque científico, preventivo y sin estigma.
 */
export default semana({
  id: 's14',
  unidad: 2,
  semana: 14,
  kind: 'aprendizaje',
  temaGenerador: 'Decido con información',
  title: 'Decido con información',
  subtitle: 'Historia y fuentes, salud, operaciones, liderazgo y proyecto de vida',
  icon: 'Search',
  color: 'var(--area-ccss)',
  contexto: 'Cada día recibimos información: en la radio, en el celular, de amistades y familiares. Pero no toda es verdadera ni útil. Esta semana investigarás como una historiadora, aprenderás a proteger tu salud con datos científicos, ordenarás operaciones sin errores y descubrirás qué tipo de liderazgo ayuda a tu comunidad, para construir con información tu propio proyecto de vida.',
  ejes: ['vida-ciudadana', 'seguridad', 'valores', 'vida-familiar'],
  media: {
    id: 's14-portada', kind: 'video', title: 'Detectives de la información', aspect: '16:9', duration: 55,
    alt: 'Animación de una niña y un niño con lupas que revisan un libro antiguo, una fotografía vieja, un mensaje de celular y un mapa, y luego escriben su plan de vida.',
    brief: 'Animación 2D de 55 s con estilo de cuaderno de detective: dos estudiantes (niña maya con güipil y niño ladino con uniforme escolar) examinan con lupas: (1) una fotografía antigua de su escuela; (2) un mensaje de celular dudoso que se marca "¿Verdadero?"; (3) una tabla de datos; (4) un cartel de salud. Al final escriben en un cuaderno "Mi proyecto de vida" con metas dibujadas. Texto en pantalla: "Investigo, comparo, decido". Música ligera. Sin marcas comerciales.',
  },
  badge: { id: 'medalla-s14', name: 'Detective de la verdad', icon: 'Search', desc: 'Completaste la semana 14 y superaste su reto' },
  lessons: [
    unit2Workshop(14),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's14-d5-reto',
      title: 'Reto de la semana 14',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar que sabes decidir con información', 'Obtener la medalla "Detective de la verdad" (70 % o más)'],
      resumen: ['Superé el reto de la semana 14: historia y fuentes, VIH y drogas, operaciones, liderazgo y proyecto de vida.'],
      media: {
        id: 's14-d5-reto', kind: 'image', title: 'Medalla Detective de la verdad', aspect: '1:1',
        alt: 'Medalla dorada con una lupa sobre un libro abierto y una estrella.',
        brief: 'Medalla circular dorada con relieve de una lupa grande sobre un libro abierto del que salen una estrella y un signo de check. Borde con motivo de tejido guatemalteco. Cinta con los colores de las áreas del CNB. Estilo plano con brillo suave, fondo transparente, 1024×1024.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.1.1'], prompt: '¿Cuál es la finalidad de la historia como ciencia?' },
          { options: [{ id: 'a', text: 'Comprender el presente a partir del pasado' }, { id: 'b', text: 'Memorizar fechas sin sentido' }, { id: 'c', text: 'Inventar relatos' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.1.2', 'ccss:5.2.1'], prompt: '¿Fuente primaria o secundaria?' },
          { buckets: [{ id: 'p', label: 'Primaria', icon: 'Camera' }, { id: 's', label: 'Secundaria', icon: 'Library' }],
            items: [{ id: 'a', text: 'Carta escrita en 1900', bucket: 'p' }, { id: 'b', text: 'Libro de texto actual sobre 1900', bucket: 's' }, { id: 'c', text: 'Vasija maya', bucket: 'p' }, { id: 'd', text: 'Enciclopedia', bucket: 's' }] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.5.2'], prompt: '¿Por cuál de estas vías **sí** se puede transmitir el VIH?' },
          { options: [{ id: 'a', text: 'Compartir jeringas' }, { id: 'b', text: 'Compartir un lápiz' }, { id: 'c', text: 'Un abrazo' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.1.2'], prompt: 'Une cada droga con un daño que causa.' },
          { pairs: [{ id: 't', left: 'Tabaco', right: 'Cáncer de pulmón' }, { id: 'a', left: 'Alcohol', right: 'Daño del hígado' }, { id: 'i', left: 'Inhalantes', right: 'Daño cerebral' }] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.4'], prompt: 'Resuelve: 50 − 4 × (3 + 7)' },
          { answer: 10, misconceptions: [{ value: 460, msg: 'Resolviste de izquierda a derecha sin respetar la jerarquía.' }] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.3'], prompt: 'Encuentra el término que falta: 135 − □ = 58' },
          { answer: 77, misconceptions: [{ value: 193, msg: 'Sumaste; aquí lo que falta es lo que se restó: 135 − 58.' }] }),
        S.sort({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.2'], prompt: '¿Democrático o autoritario?' },
          { buckets: [{ id: 'd', label: 'Democrático', icon: 'Users' }, { id: 'a', label: 'Autoritario', icon: 'Lock' }],
            items: [{ id: 'x', text: 'Rinde cuentas', bucket: 'd' }, { id: 'y', text: 'No acepta críticas', bucket: 'a' }, { id: 'z', text: 'Escucha propuestas', bucket: 'd' }] }),
        S.order({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.3.2'], prompt: 'Put the story in order.' },
          { items: [{ id: 'a', text: 'First, Ana woke up early.' }, { id: 'b', text: 'Then, she had breakfast.' }, { id: 'c', text: 'Next, she walked to school.' }, { id: 'd', text: 'Finally, she met her friends.' }] }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.3.2'], prompt: '"Todos los jóvenes pasan el día entero en el celular." Esta frase es…' },
          { options: [{ id: 'a', text: 'Una generalización' }, { id: 'b', text: 'Un hecho comprobado' }, { id: 'c', text: 'Una receta' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.4.1'], prompt: '¿Qué parte del proyecto de vida describe las acciones concretas para lograr una meta?' },
          { options: [{ id: 'a', text: 'Los pasos' }, { id: 'b', text: 'El título' }, { id: 'c', text: 'Los márgenes' }], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 2 */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.1.2'], prompt: '¿Cuál es una fuente **primaria** para estudiar la época de la Independencia?' },
      { options: [{ id: 'a', text: 'El Acta de Independencia de 1821' }, { id: 'b', text: 'Un video animado hecho este año' }, { id: 'c', text: 'Un resumen en un libro escolar actual' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.3.2'], prompt: '¿Qué parte de un informe resume lo que aprendiste al final?' },
      { options: [{ id: 'a', text: 'Las conclusiones' }, { id: 'b', text: 'El título' }, { id: 'c', text: 'El procedimiento' }], correct: ['a'] }),
    S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.5.2'], prompt: '¿Verdadero o falso?' },
      { statements: [{ text: 'El VIH no se transmite por compartir platos.', answer: true }, { text: 'Los mosquitos transmiten el VIH.', answer: false }] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.1.2', 'cnt:4.3.1'], prompt: '¿Qué enfermedades se pueden adquirir al compartir jeringas?' },
      { options: [{ id: 'a', text: 'VIH y hepatitis' }, { id: 'b', text: 'Resfriado común' }, { id: 'c', text: 'Caries' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.4'], prompt: 'Resuelve: 6 + 18 ÷ 3 × 2' },
      { answer: 18, misconceptions: [{ value: 9, msg: 'Multiplicaste 3 × 2 antes de dividir: × y ÷ se resuelven de izquierda a derecha.' }, { value: 16, msg: 'Sumaste 6 + 18 primero: la suma se resuelve al final.' }, { value: 12, msg: 'Revisa: 18 ÷ 3 = 6; 6 × 2 = 12; y falta sumar 6.' }] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.3'], prompt: 'Encuentra el término que falta: □ ÷ 9 = 7' },
      { answer: 63 }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.5'], prompt: '¿Qué conector introduce una **conclusión**?' },
      { options: [{ id: 'a', text: 'En resumen' }, { id: 'b', text: 'Había una vez' }, { id: 'c', text: 'Por ejemplo' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.4'], prompt: 'En una línea de tiempo aparecen 1821 (Independencia) y 1944 (Revolución de Octubre). ¿Cuántos años hay entre ambos hechos?' },
      { options: [{ id: 'a', text: '123 años' }, { id: 'b', text: '223 años' }, { id: 'c', text: '23 años' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.1'], prompt: 'Para lanzar lejos una pelota pequeña con la mano derecha, ¿qué pie va adelante?' },
      { options: [{ id: 'a', text: 'El izquierdo (el contrario)' }, { id: 'b', text: 'El derecho' }, { id: 'c', text: 'Los dos juntos' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.2'], prompt: 'Una presidenta del gobierno escolar informa en qué se gastó el dinero y pide opiniones. Su liderazgo es…' },
      { options: [{ id: 'a', text: 'Democrático' }, { id: 'b', text: 'Autoritario' }, { id: 'c', text: 'Indiferente' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:2.1.1'], prompt: 'Al formar un grupo musical, ¿qué instrumento se encarga principalmente del **ritmo**?' },
      { options: [{ id: 'a', text: 'El tambor' }, { id: 'b', text: 'La flauta' }, { id: 'c', text: 'La chirimía' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.4.1'], prompt: '¿Qué meta de un proyecto de vida es más clara y posible?' },
      { options: [{ id: 'a', text: '"Terminar el básico y estudiar para ser técnico agrícola"' }, { id: 'b', text: '"Ser feliz algún día"' }, { id: 'c', text: '"Nada"' }], correct: ['a'] }),
  ],
});
