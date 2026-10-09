import { S, lesson, semana } from '../../dsl';
import { unit2Workshop } from './u2-talleres';

/**
 * SEMANA 16 · Unidad 2 "Consolidando nuestras relaciones"
 * Tema generador: Sembrar juntos: bosques, pueblos y libertades
 * Ambiente y salud, reforestación y especies en riesgo · divisibilidad y números primos ·
 * Revolución Francesa e independencias de América · fin de la Guerra Fría y derechos humanos ·
 * lengua, idioma y expresiones interculturales · juegos de campo y vida activa.
 */
export default semana({
  id: 's16',
  unidad: 2,
  semana: 16,
  kind: 'aprendizaje',
  temaGenerador: 'Sembrar juntos: bosques, pueblos y libertades',
  title: 'Sembrar juntos: bosques, pueblos y libertades',
  subtitle: 'Ambiente sano, independencias, derechos y números primos',
  icon: 'TreePine',
  color: 'var(--area-cnt)',
  contexto: 'En Totonicapán, las comunidades de los 48 Cantones cuidan desde hace generaciones sus bosques comunales, y de ellos depende el agua de muchas familias. Tu escuela prepara un puesto para la feria escolar: una campaña de reforestación y una exposición sobre cómo los pueblos de América y del mundo conquistaron su libertad y sus derechos. Esta semana descubrirás que cuidar el bosque y cuidar la libertad son tareas que se hacen en comunidad.',
  ejes: ['sostenible', 'vida-ciudadana', 'multiculturalidad', 'seguridad'],
  media: {
    id: 's16-portada', kind: 'video', title: 'Bosques que cuidan comunidades', aspect: '16:9', duration: 60,
    alt: 'Estudiantes y familias siembran árboles en una ladera del altiplano; luego aparece una feria escolar con carteles sobre independencia y derechos.',
    brief: 'Video de 60 s (o animación 2D). Escena 1: neblina en un bosque de pino y pinabete del altiplano occidental, un nacimiento de agua. Escena 2: estudiantes de sexto, con sus familias, siembran pilones en una ladera; una niña con traje de Totonicapán y un niño con playera escolar cargan la pala juntos. Escena 3: feria escolar con carteles "Reforestemos", "1821: Independencia de Centroamérica" y "Derechos de la niñez". Texto final: "Sembrar juntos". Marimba de fondo. Sin marcas ni rostros reales identificables.',
  },
  badge: { id: 'medalla-s16', name: 'Sembrador de libertades', icon: 'TreePine', desc: 'Completaste la semana 16 y superaste su reto' },
  lessons: [
    unit2Workshop(16),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's16-d5-reto',
      title: 'Reto de la semana 16',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Sembrador de libertades" (70 % o más)'],
      resumen: ['Superé el reto de la semana 16: ambiente y salud, números primos, independencias y derechos.'],
      media: {
        id: 's16-d5-reto', kind: 'image', title: 'Medalla Sembrador de libertades', aspect: '1:1',
        alt: 'Medalla dorada con un pinabete joven y una antorcha de la independencia.',
        brief: 'Ilustración de medalla circular dorada: al centro un pinabete joven brotando de un pergamino abierto; a un lado una antorcha estilizada con llama azul y blanca. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024, estilo plano con brillo suave.',
      },
      steps: [
        S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.2.2', 'cnt:6.3.2'], prompt: '¿Daña o protege el ambiente?' },
          { buckets: [{ id: 'd', label: 'Daña', icon: 'Factory' }, { id: 'p', label: 'Protege', icon: 'Leaf' }],
            items: [{ id: 'a', text: 'Reforestar una ladera', bucket: 'p' }, { id: 'b', text: 'Tirar aceite al río', bucket: 'd' }, { id: 'c', text: 'Talar sin permiso', bucket: 'd' }, { id: 'e', text: 'Hacer abono', bucket: 'p' }] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.1.2'], prompt: 'Si un río se llena de aguas negras, ¿quiénes pueden enfermar?' },
          { options: [{ id: 'a', text: 'Personas, animales y plantas' }, { id: 'b', text: 'Solo los peces' }, { id: 'c', text: 'Nadie' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.4.2'], prompt: '¿Por qué el crecimiento de la población sin planificación amenaza a las especies silvestres?' },
          { options: [{ id: 'a', text: 'Porque se talan bosques y los animales pierden su hábitat' }, { id: 'b', text: 'Porque los animales se mudan a las ciudades por gusto' }, { id: 'c', text: 'Porque hay más lluvia' }], correct: ['a'] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.2'], prompt: 'Escribe el **dígito** que falta para que 4_2 sea divisible entre 9 (una sola cifra del 0 al 9).', },
          { answer: 3, misconceptions: [{ value: 9, msg: 'Prueba: 4 + 9 + 2 = 15, no es múltiplo de 9. Busca que la suma sea 9.' }] }),
        S.sort({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.3'], prompt: 'Clasifica en primos y compuestos.' },
          { buckets: [{ id: 'p', label: 'Primo', icon: 'Star' }, { id: 'c', label: 'Compuesto', icon: 'Blocks' }],
            items: [{ id: 'a', text: '17', bucket: 'p' }, { id: 'b', text: '19', bucket: 'p' }, { id: 'c', text: '25', bucket: 'c' }, { id: 'd', text: '33', bucket: 'c' }] }),
        S.order({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.4.9', 'ccss:6.4.10'], prompt: 'Ordena del más antiguo al más reciente.' },
          { items: [{ id: 'a', text: 'Revolución Francesa' }, { id: 'b', text: 'Independencia de Centroamérica' }, { id: 'c', text: 'República Federal de Centro América' }, { id: 'd', text: 'Caída del Muro de Berlín' }], labels: { start: 'Más antiguo', end: 'Más reciente' } }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.4.8'], prompt: '¿Qué grupo del Tercer Estado dirigió la Revolución Francesa?' },
          { options: [{ id: 'a', text: 'La burguesía' }, { id: 'b', text: 'La nobleza' }, { id: 'c', text: 'El clero' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['l2', 'l1'], cnb: ['l2:4.1.9', 'l2:4.2.2', 'l1:5.2.3'], prompt: 'Une cada palabra u oración con lo que es.' },
          { pairs: [
            { id: 'a', left: 'lámpara', right: 'Esdrújula' },
            { id: 'b', left: 'reciclar', right: 'Tiene el prefijo re-' },
            { id: 'c', left: 'El árbol fue sembrado por Ana.', right: 'Voz pasiva' },
          ] }),
        S.tf({ fase: 'comprobar', areas: ['fc', 'ccss', 'l1'], cnb: ['fc:4.5.2', 'ccss:6.5.2', 'l1:6.1.1'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'Imponer una decisión sin consultar es una forma autoritaria de ejercer el poder.', answer: true },
            { text: 'La Convención sobre los Derechos del Niño protege a niñas, niños y adolescentes.', answer: true },
            { text: 'En Guatemala solo se habla un idioma.', answer: false },
          ] }),
        S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.3.4'], prompt: 'A boy is holding an umbrella and the sky is full of dark clouds. What will happen next?' },
          { options: [{ id: 'a', text: 'It will rain.' }, { id: 'b', text: 'It will snow in the desert.' }, { id: 'c', text: 'The sun will disappear forever.' }], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 2 */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.3.2'], prompt: '¿Cómo ayudan las raíces de los árboles a prevenir desastres?' },
      { options: [{ id: 'a', text: 'Sujetan el suelo y reducen los deslaves' }, { id: 'b', text: 'Hacen que la tierra tiemble menos' }, { id: 'c', text: 'Detienen los huracanes' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.1.2', 'cnt:6.2.2'], prompt: 'El uso excesivo de plaguicidas afecta la sanidad vegetal porque…' },
      { options: [{ id: 'a', text: 'Mata a las abejas que polinizan los cultivos' }, { id: 'b', text: 'Hace crecer más rápido las plantas' }, { id: 'c', text: 'No tiene ningún efecto' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.2'], prompt: '¿Cuál de estos números es divisible entre **6**?' },
      { options: [{ id: 'a', text: '114' }, { id: 'b', text: '115' }, { id: 'c', text: '116' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.3'], prompt: '¿Cuál es un número **compuesto**?' },
      { options: [{ id: 'a', text: '27' }, { id: 'b', text: '31' }, { id: 'c', text: '37' }], correct: ['a'] }),
    S.match({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.4.9', 'ccss:6.4.10'], prompt: 'Une cada año con su hecho.' },
      { pairs: [{ id: 'a', left: '1808', right: 'Napoleón invade España' }, { id: 'b', left: '1821', right: 'Independencia de Centroamérica' }, { id: 'c', left: '1847', right: 'Guatemala se declara república' }] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.5.7'], prompt: '¿En qué año cayó el Muro de Berlín?' },
      { options: [{ id: 'a', text: '1989' }, { id: 'b', text: '1961' }, { id: 'c', text: '1821' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.5.2'], prompt: '¿Cuál es una forma **democrática** de ejercer el poder en un conflicto?' },
      { options: [{ id: 'a', text: 'Dialogar y consultar a todas las partes' }, { id: 'b', text: 'Castigar a quien protesta' }, { id: 'c', text: 'Excluir a un grupo de las decisiones' }], correct: ['a'] }),
    S.fill({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.2.1', 'l2:4.2.2'], prompt: 'Completa.' },
      { text: 'La raíz de "florero" y "florecer" es [[flor]].\nCon el prefijo des- y "ordenar" formo [[desordenar]].', distractors: ['ero', 'ordenado'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:6.1.1'], prompt: 'El k\'iche\', el garífuna y el español son…' },
      { options: [{ id: 'a', text: 'Idiomas de Guatemala' }, { id: 'b', text: 'Dialectos sin reglas' }, { id: 'c', text: 'Lenguajes de señas' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.2.1'], prompt: 'Buscar puntos marcados en el bosque usando un mapa y una brújula es un juego de…' },
      { options: [{ id: 'a', text: 'Orientación' }, { id: 'b', text: 'Velocidad en pista' }, { id: 'c', text: 'Mesa' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.3'], prompt: '¿Qué ayuda más a que una figura se distinga del fondo?' },
      { options: [{ id: 'a', text: 'El contraste de color o de textura' }, { id: 'b', text: 'Usar el mismo color en ambos' }, { id: 'c', text: 'Hacer la figura transparente' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.3.4'], prompt: 'The students are planting a tree today. What will happen in ten years?' },
      { options: [{ id: 'a', text: 'The tree will be tall.' }, { id: 'b', text: 'The tree was small yesterday.' }, { id: 'c', text: 'The tree is a car.' }], correct: ['a'] }),
  ],
});
