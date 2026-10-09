import { S, lesson, semana } from '../../dsl';
import { unit2Workshop } from './u2-talleres';

/**
 * SEMANA 12 · Unidad 2 "Consolidando nuestras relaciones"
 * Tema generador: Redes que nos unen
 */
export default semana({
  id: 's12',
  unidad: 2,
  semana: 12,
  kind: 'aprendizaje',
  temaGenerador: 'Redes que nos unen',
  title: 'Redes que nos unen',
  subtitle: 'Seres que cooperan, datos del mundo, volúmenes y medios',
  icon: 'Link',
  color: 'var(--area-ccss)',
  contexto: 'Nada vive solo: el frijol se asocia con bacterias, Guatemala comercia con otros países y una radio comunitaria une a pueblos enteros. Esta semana descubrirás las redes que conectan a los seres vivos, a los países y a las personas, y medirás el agua que guarda tu comunidad en pilas y toneles.',
  ejes: ['sostenible', 'multiculturalidad', 'tecnologia', 'vida-ciudadana'],
  media: {
    id: 's12-portada', kind: 'video', title: 'Todo está conectado', aspect: '16:9', duration: 60,
    alt: 'Montaje de un colibrí en una flor, raíces de frijol, un barco de carga, una antena de radio y un grupo de niñas y niños conversando.',
    brief: 'Video de 60 s con transiciones en forma de hilos que unen una escena con la siguiente: (1) colibrí tomando néctar en una flor del altiplano; (2) raíz de frijol con pequeños nódulos; (3) contenedores de exportación en un puerto de Guatemala; (4) antena y cabina de una radio comunitaria; (5) grupo de estudiantes diversos (maya, garífuna, xinka, ladino) conversando en círculo. Sobreimpreso final: "Redes que nos unen". Música alegre de marimba y tambor. Sin logotipos ni personas identificables en primer plano.',
  },
  badge: { id: 'medalla-s12', name: 'Tejedor de redes', icon: 'Link', desc: 'Completaste la semana 12 y superaste su reto' },
  lessons: [
    unit2Workshop(12),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's12-d5-reto',
      title: 'Reto de la semana 12',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste sobre las redes que nos unen', 'Obtener la medalla "Tejedor de redes" (70 % o más)'],
      resumen: ['Superé el reto de la semana 12: mutualismo, datos del mundo, volumen, medios y culturas.'],
      media: {
        id: 's12-d5-reto', kind: 'image', title: 'Medalla Tejedor de redes', aspect: '1:1',
        alt: 'Medalla dorada con una red de hilos de colores que une un colibrí, un globo terráqueo y una antena de radio.',
        brief: 'Medalla circular dorada con relieve: al centro un pequeño globo terráqueo; alrededor, hilos de colores del tejido guatemalteco que lo conectan con un colibrí, una hoja de frijol y una antena de radio. Cinta con los colores de las áreas del CNB. Estilo plano con brillo suave, fondo transparente, 1024×1024.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.4'], prompt: 'Las abejas toman néctar y polinizan las flores del café. ¿Qué tipo de relación es?' },
          { options: [{ id: 'a', text: 'Mutualismo: ambas se benefician' }, { id: 'b', text: 'Solo gana la abeja' }, { id: 'c', text: 'Ninguna se beneficia' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.1.3'], prompt: '¿Procariota o eucariota?' },
          { buckets: [{ id: 'p', label: 'Procariota', icon: 'Circle' }, { id: 'e', label: 'Eucariota', icon: 'CircleDot' }],
            items: [{ id: 'a', text: 'Bacteria', bucket: 'p' }, { id: 'b', text: 'Paramecio', bucket: 'e' }, { id: 'c', text: 'Levadura', bucket: 'e' }, { id: 'd', text: 'Bacteria del yogur', bucket: 'p' }] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.2.2'], prompt: '¿Qué adaptación ayuda al mangle a vivir en agua salada?' },
          { options: [{ id: 'a', text: 'Raíces que salen del agua y toleran la sal' }, { id: 'b', text: 'Espinas en lugar de hojas' }, { id: 'c', text: 'Pelaje espeso' }], correct: ['a'] }),
        S.order({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.1.2'], prompt: 'Ordena los continentes del **más poblado** al **menos poblado**.' },
          { items: [{ id: 'as', text: 'Asia' }, { id: 'af', text: 'África' }, { id: 'am', text: 'América' }, { id: 'eu', text: 'Europa' }, { id: 'oc', text: 'Oceanía' }], labels: { start: 'Más poblado', end: 'Menos poblado' } }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.4.2'], prompt: 'Una caja con forma de cubo tiene 20 cm de arista. ¿Cuál es su volumen en cm³?' },
          { answer: 8000, unit: 'cm³', misconceptions: [{ value: 60, msg: 'Sumaste; el volumen del cubo es arista × arista × arista.' }, { value: 400, msg: 'Eso es el área de una cara; falta multiplicar por la altura.' }] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.4.2'], prompt: 'Una pirámide de base rectangular mide 6 cm × 5 cm de base y 10 cm de altura. ¿Cuál es su volumen en cm³?' },
          { answer: 100, unit: 'cm³', misconceptions: [{ value: 300, msg: 'Ese sería el prisma; la pirámide es un tercio (÷ 3).' }] }),
        S.match({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.1.4'], prompt: 'Match the numbers.' },
          { pairs: [{ id: 'a', left: '200', right: 'two hundred' }, { id: 'b', left: '560', right: 'five hundred sixty' }, { id: 'c', left: '1000', right: 'one thousand' }] }),
        S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.1.4'], prompt: '¿Cuál de estos es un factor que **afecta negativamente** la comunicación?' },
          { options: [{ id: 'a', text: 'Un prejuicio contra quien habla' }, { id: 'b', text: 'Escuchar con atención' }, { id: 'c', text: 'Pedir que explique una palabra desconocida' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.1.1'], prompt: 'Une cada medio con una característica.' },
          { pairs: [{ id: 'r', left: 'Radio', right: 'Solo sonido; llega a lugares lejanos' }, { id: 'p', left: 'Prensa escrita', right: 'Titulares y secciones que se pueden releer' }, { id: 't', left: 'Televisión', right: 'Une imagen y sonido' }] }),
        S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.3.1'], prompt: '¿Qué aporte llegó a Guatemala desde Europa?' },
          { options: [{ id: 'a', text: 'El idioma español' }, { id: 'b', text: 'El maíz' }, { id: 'c', text: 'El cacao' }], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 2 */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.5.4'], prompt: '¿Qué reciben las bacterias de las raíces del frijol a cambio del nitrógeno?' },
      { options: [{ id: 'a', text: 'Azúcares de la planta' }, { id: 'b', text: 'Luz solar directa' }, { id: 'c', text: 'Nada' }], correct: ['a'] }),
    S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.1.3', 'cnt:2.2.2'], prompt: '¿Verdadero o falso?' },
      { statements: [{ text: 'Las amebas tienen núcleo.', answer: true }, { text: 'Las adaptaciones aparecen en un solo día.', answer: false }] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:2.1.2'], prompt: '¿Qué recurso comparten Guatemala y Brasil como riqueza natural?' },
      { options: [{ id: 'a', text: 'Selvas tropicales con gran biodiversidad' }, { id: 'b', text: 'Grandes glaciares' }, { id: 'c', text: 'Desiertos de hielo' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:2.2.2', 'ccss:2.3.2'], prompt: '¿Qué política ayuda a conservar los bosques?' },
      { options: [{ id: 'a', text: 'Crear áreas protegidas' }, { id: 'b', text: 'Permitir la tala sin control' }, { id: 'c', text: 'Quemar para sembrar cada año' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.2'], prompt: '¿Cuál es una **desventaja** del desarrollo tecnológico?' },
      { options: [{ id: 'a', text: 'La basura electrónica que contamina' }, { id: 'b', text: 'Poder comunicarse a distancia' }, { id: 'c', text: 'Aprender con videos' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.4.2'], prompt: 'Un cilindro tiene radio de 10 cm y altura de 10 cm. ¿Cuál es su volumen en cm³? (π ≈ 3.14)' },
      { answer: 3140, unit: 'cm³', misconceptions: [{ value: 314, msg: 'Ese es el área de la base; falta multiplicar por la altura.' }] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.4.3'], prompt: 'Un depósito mide 2 m × 1 m × 1 m. ¿Cuántos litros de agua caben? (1 m³ = 1,000 litros)' },
      { answer: 2000, unit: 'litros', misconceptions: [{ value: 2, msg: 'Ese es el volumen en m³; pásalo a litros.' }] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.3.1'], prompt: '¿Qué inicio de conversación es **formal**?' },
      { options: [{ id: 'a', text: '"Buenas tardes, licenciada. ¿Me permite una pregunta?"' }, { id: 'b', text: '"¡Hey! ¿Qué onda?"' }, { id: 'c', text: '"Vos, vení."' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.1.6'], prompt: '¿Qué dato es **indispensable** en una ficha de registro de investigación?' },
      { options: [{ id: 'a', text: 'La fuente de donde salió la información' }, { id: 'b', text: 'Mi color favorito' }, { id: 'c', text: 'Un dibujo decorativo' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.1', 'ef:1.3.4'], prompt: 'Corres a 5 m por segundo y la primera valla está a 15 m de la salida. ¿En cuántos segundos llegas a ella?' },
      { options: [{ id: 'a', text: 'En 3 segundos' }, { id: 'b', text: 'En 75 segundos' }, { id: 'c', text: 'En 20 segundos' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.1.3'], prompt: 'Según la CEH, ¿cuál fue uno de los departamentos más afectados por el conflicto armado interno?' },
      { options: [{ id: 'a', text: 'Quiché' }, { id: 'b', text: 'Ninguno' }, { id: 'c', text: 'Solo la capital' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.4.1'], prompt: 'Una comunidad tiene muchas flores silvestres. ¿Qué proyecto productivo aprovecha ese recurso sin dañarlo?' },
      { options: [{ id: 'a', text: 'Producir miel con abejas' }, { id: 'b', text: 'Cortar todas las flores para venderlas un solo día' }, { id: 'c', text: 'Construir sobre el campo' }], correct: ['a'] }),
  ],
});
