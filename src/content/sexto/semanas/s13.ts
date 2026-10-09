import { S, lesson, semana } from '../../dsl';
import { unit2Workshop } from './u2-talleres';

/**
 * SEMANA 13 · Unidad 2 "Consolidando nuestras relaciones"
 * Tema generador: Crecemos juntos con respeto
 * Incluye contenidos sensibles del CNB (aparato reproductor femenino, fecundación, ética en la sexualidad):
 * se tratan con lenguaje científico, respetuoso y apropiado para 11-12 años.
 */
export default semana({
  id: 's13',
  unidad: 2,
  semana: 13,
  kind: 'aprendizaje',
  temaGenerador: 'Crecemos juntos con respeto',
  title: 'Crecemos juntos con respeto',
  subtitle: 'Hormonas, crecer con cuidado, trabajo infantil y voces diversas',
  icon: 'Sprout',
  color: 'var(--area-cnt)',
  contexto: 'Entre los 10 y los 14 años el cuerpo cambia, y también cambian las relaciones con la familia, las amistades y la comunidad. En Guatemala, muchas niñas y niños además trabajan en lugar de estudiar. Esta semana aprenderás cómo funcionan las hormonas y el aparato reproductor, por qué el respeto y el cuidado son la base para crecer, y cómo defender el derecho de toda la niñez a estudiar y a jugar.',
  ejes: ['equidad', 'vida-familiar', 'valores', 'trabajo'],
  media: {
    id: 's13-portada', kind: 'video', title: 'Crecer es un camino compartido', aspect: '16:9', duration: 55,
    alt: 'Ilustraciones animadas de niñas y niños de distintos pueblos de Guatemala que crecen, estudian, juegan y conversan con sus familias.',
    brief: 'Animación 2D de 55 s con estilo cálido: una línea de tiempo muestra a una niña y un niño (de pueblos distintos: maya y garífuna, por ejemplo) creciendo de los 8 a los 13 años; escenas: jugando fútbol, en la escuela, ayudando en casa con tareas adecuadas a su edad, conversando con una abuela y con su mamá, participando en una mesa redonda. Mensaje final en pantalla: "Crecer con respeto, cuidado y derechos". Música suave. Sin representar desnudez ni situaciones de riesgo.',
  },
  badge: { id: 'medalla-s13', name: 'Voz que respeta', icon: 'HeartHandshake', desc: 'Completaste la semana 13 y superaste su reto' },
  lessons: [
    unit2Workshop(13),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's13-d5-reto',
      title: 'Reto de la semana 13',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste sobre crecer con respeto', 'Obtener la medalla "Voz que respeta" (70 % o más)'],
      resumen: ['Superé el reto de la semana 13: hormonas, aparato reproductor, trabajo infantil, cálculo mental y diálogo sin fanatismo.'],
      media: {
        id: 's13-d5-reto', kind: 'image', title: 'Medalla Voz que respeta', aspect: '1:1',
        alt: 'Medalla dorada con dos globos de diálogo entrelazados y un corazón al centro.',
        brief: 'Medalla circular dorada con relieve de dos globos de diálogo de colores distintos que se entrelazan formando un corazón, rodeados de un borde de tejido guatemalteco. Cinta con los colores de las áreas del CNB. Estilo plano con brillo suave, fondo transparente, 1024×1024.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:1.2.3'], prompt: 'Tu clase recopila canciones para el repertorio escolar. ¿Qué dato debe acompañar cada grabación?' },
          { options: [{ id: 'a', text: 'Título, intérprete y permiso para compartirla' }, { id: 'b', text: 'Solo el tamaño del archivo' }, { id: 'c', text: 'Un nombre inventado para quien canta' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.3'], prompt: 'Une cada glándula con su hormona.' },
          { pairs: [{ id: 'h', left: 'Hipófisis', right: 'Hormona del crecimiento' }, { id: 'p', left: 'Páncreas', right: 'Insulina' }, { id: 's', left: 'Suprarrenales', right: 'Adrenalina' }] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.1.2'], prompt: '¿Qué órgano del aparato reproductor femenino produce los óvulos?' },
          { options: [{ id: 'a', text: 'Los ovarios' }, { id: 'b', text: 'El útero' }, { id: 'c', text: 'La vagina' }], correct: ['a'] }),
        S.order({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.2.2'], prompt: 'Ordena el proceso.' },
          { items: [{ id: 'a', text: 'Se libera el óvulo' }, { id: 'b', text: 'Un espermatozoide lo fecunda en la trompa' }, { id: 'c', text: 'La nueva célula se divide' }, { id: 'd', text: 'Se desarrolla en el útero' }] }),
        S.choice({ fase: 'comprobar', areas: ['cnt', 'fc'], cnb: ['cnt:3.3.2'], prompt: 'Un compañero quiere compartir en un grupo de chat una foto de otra persona cambiándose de ropa. ¿Qué es lo correcto?' },
          { options: [{ id: 'a', text: 'No compartirla, pedir que la borre y avisar a una persona adulta' }, { id: 'b', text: 'Compartirla porque es una broma' }, { id: 'c', text: 'Guardarla para después' }], correct: ['a'] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.2'], prompt: 'Calcula mentalmente: 25 × 24 =' },
          { answer: 600, misconceptions: [{ value: 49, msg: 'Sumaste; aquí hay que multiplicar.' }] }),
        S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.1'], prompt: '¿Cuál es la mejor **estimación** de 612 − 289?' },
          { options: [{ id: 'a', text: 'Aproximadamente 300' }, { id: 'b', text: 'Aproximadamente 900' }, { id: 'c', text: 'Aproximadamente 30' }], correct: ['a'] }),
        S.tf({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.1.6', 'ccss:4.1.7'], prompt: '¿Verdadero o falso?' },
          { statements: [{ text: 'El trabajo infantil reduce las oportunidades de estudiar.', answer: true }, { text: 'El trabajo infantil no ocurre en ningún país de América.', answer: false }, { text: 'La falta de escuelas cercanas puede aumentar el trabajo infantil.', answer: true }] }),
        S.match({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.1.1'], prompt: 'Une cada tipo de lectura con su uso.' },
          { pairs: [{ id: 's', left: 'Selectiva', right: 'Buscar un dato concreto' }, { id: 'c', left: 'Coral', right: 'Leer en grupo al mismo tiempo' }, { id: 'r', left: 'Reflexiva', right: 'Leer despacio para pensar' }] }),
        S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.3.2'], prompt: '¿Qué actitud ayuda a evitar el fanatismo?' },
          { options: [{ id: 'a', text: 'Escuchar y respetar opiniones distintas' }, { id: 'b', text: 'Creer que solo mi idea vale' }, { id: 'c', text: 'Burlarme de otras creencias' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.2.3'], prompt: '¿Qué mujer chilena fue la primera persona de América Latina en ganar el Nobel de Literatura?' },
          { options: [{ id: 'a', text: 'Gabriela Mistral' }, { id: 'b', text: 'Rigoberta Menchú' }, { id: 'c', text: 'María Chinchilla' }], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 2 */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.3'], prompt: '¿Qué hormona regula el azúcar en la sangre?' },
      { options: [{ id: 'a', text: 'Insulina' }, { id: 'b', text: 'Adrenalina' }, { id: 'c', text: 'Testosterona' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.1.2', 'cnt:3.2.2'], prompt: '¿Dónde ocurre normalmente la fecundación?' },
      { options: [{ id: 'a', text: 'En la trompa de Falopio' }, { id: 'b', text: 'En el estómago' }, { id: 'c', text: 'En el ovario' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.4.2'], prompt: '¿Qué continente destaca por fabricar aparatos electrónicos?' },
      { options: [{ id: 'a', text: 'Asia' }, { id: 'b', text: 'Oceanía' }, { id: 'c', text: 'Antártida' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.1.2', 'ccss:4.1.7'], prompt: 'Una comunidad no tiene escuela cerca y los caminos son difíciles. ¿Cómo afecta esto a la niñez?' },
      { options: [{ id: 'a', text: 'Reduce sus oportunidades de estudiar' }, { id: 'b', text: 'Aumenta sus oportunidades' }, { id: 'c', text: 'No afecta' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.2'], prompt: 'Calcula mentalmente con "descomponer": 42 × 5 =' },
      { answer: 210 }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.1'], prompt: 'Compras 3 cosas de Q29, Q41 y Q19. ¿Cuál es la mejor estimación del total?' },
      { options: [{ id: 'a', text: 'Unos Q90' }, { id: 'b', text: 'Unos Q60' }, { id: 'c', text: 'Unos Q150' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.4', 'l1:4.1.2'], prompt: 'Buscas cómo se cuida el agua. ¿Qué subtítulo de un libro es **pertinente**?' },
      { options: [{ id: 'a', text: '"Formas de ahorrar agua en casa"' }, { id: 'b', text: '"Historia del fútbol"' }, { id: 'c', text: '"Recetas de postres"' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.3.2'], prompt: '¿Cuál es un texto **ícono-verbal**?' },
      { options: [{ id: 'a', text: 'Un cartel con imágenes y frases sobre el lavado de manos' }, { id: 'b', text: 'Una novela sin ilustraciones' }, { id: 'c', text: 'Una canción escuchada en la radio' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.1.4'], prompt: 'Which sentence is an opinion?' },
      { options: [{ id: 'a', text: 'I think the huipil is beautiful because of its colors.' }, { id: 'b', text: 'The huipil is made on a loom.' }, { id: 'c', text: 'Weavers sell textiles.' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.7'], prompt: 'En una carrera de relevos, ¿cómo se recibe la estafeta?' },
      { options: [{ id: 'a', text: 'Con el brazo extendido hacia atrás, a la altura de la cadera' }, { id: 'b', text: 'Parado y de frente a quien la entrega' }, { id: 'c', text: 'Con los ojos cerrados' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.3.2'], prompt: '¿Qué es el fanatismo?' },
      { options: [{ id: 'a', text: 'Defender una idea de forma ciega sin aceptar otras' }, { id: 'b', text: 'Escuchar con respeto' }, { id: 'c', text: 'Cambiar de opinión con buenas razones' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.1.1'], prompt: '¿Cuál es el primer paso para investigar un problema social de tu comunidad?' },
      { options: [{ id: 'a', text: 'Definir la pregunta o el problema a investigar' }, { id: 'b', text: 'Escribir la conclusión' }, { id: 'c', text: 'Ignorar los datos' }], correct: ['a'] }),
  ],
});
