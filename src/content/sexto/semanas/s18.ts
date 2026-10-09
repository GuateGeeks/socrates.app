import { S, lesson, semana } from '../../dsl';
import { unit2Workshop } from './u2-talleres';

/**
 * SEMANA 18 · Unidad 2 "Consolidando nuestras relaciones"
 * Tema generador: El aire que compartimos
 * Contaminación del aire, efecto invernadero y calentamiento global · el método científico ·
 * fuentes de información e informes · pobreza, trabajo digno y pueblos indígenas en la historia ·
 * fracciones (simplificación y operaciones combinadas) · barriletes gigantes, negociación y desarrollo sostenible.
 */
export default semana({
  id: 's18',
  unidad: 2,
  semana: 18,
  kind: 'aprendizaje',
  temaGenerador: 'El aire que compartimos',
  title: 'El aire que compartimos',
  subtitle: 'Clima, ciencia, sociedad justa y barriletes de la tradición',
  icon: 'Wind',
  color: 'var(--area-cnt)',
  contexto: 'Cada 1 de noviembre, en Sumpango y Santiago Sacatepéquez, se elevan barriletes de papel de china que llevan mensajes al cielo. Esos barriletes necesitan viento, y el viento es el mismo aire que respiramos todos. Esta semana investigarás como científico por qué el planeta se calienta, usarás las ciencias sociales para entender la pobreza y el trabajo digno, y aprenderás a dialogar para que el aire, la tierra y la tradición sean de todos.',
  ejes: ['sostenible', 'multiculturalidad', 'equidad', 'trabajo'],
  media: {
    id: 's18-portada', kind: 'video', title: 'Barriletes que tocan el cielo', aspect: '16:9', duration: 60,
    alt: 'Un campo lleno de barriletes gigantes de colores; niñas y niños vuelan barriletes pequeños mientras el viento mueve las colas de papel.',
    brief: 'Video de 60 s (o animación 2D) en un campo del altiplano central el 1 de noviembre. (1) Primer plano de manos que pegan papel de china sobre varas de bambú. (2) Barriletes gigantes circulares, de muchos colores, levantados con cuerdas por grupos de jóvenes (sin logos ni mensajes políticos). (3) Niñas y niños corren con barriletes pequeños; se ven las colas moviéndose con el viento. (4) Cierre con cielo azul y texto: "El aire que compartimos". Música de marimba. Sin rostros reales identificables en primer plano.',
  },
  badge: { id: 'medalla-s18', name: 'Guardián del aire', icon: 'Wind', desc: 'Completaste la semana 18 y superaste su reto' },
  lessons: [
    unit2Workshop(18),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's18-d5-reto',
      title: 'Reto de la semana 18',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Guardián del aire" (70 % o más)'],
      resumen: ['Superé el reto de la semana 18: clima, investigación científica, sociedad justa, fracciones y tradición.'],
      media: {
        id: 's18-d5-reto', kind: 'image', title: 'Medalla Guardián del aire', aspect: '1:1',
        alt: 'Medalla dorada con un barrilete de colores volando sobre un volcán y una hoja verde.',
        brief: 'Ilustración de medalla circular dorada: al centro un barrilete pequeño de papel de china de colores con su cola al viento, sobre la silueta de un volcán; abajo una hoja verde. Líneas curvas que representan el viento. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024, estilo plano con brillo suave.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:4.3.3'], prompt: 'Un equipo publica una investigación sobre barriletes tradicionales. ¿Qué dato ayuda a respetar el origen de la tradición?' },
          { options: [{ id: 'a', text: 'Lugar, personas consultadas y significado que ellas explican' }, { id: 'b', text: 'Una historia inventada presentada como hecho' }, { id: 'c', text: 'Solo el color favorito del equipo' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.3.2'], prompt: '¿Qué provoca el aumento del efecto invernadero?' },
          { options: [{ id: 'a', text: 'Más gases como el dióxido de carbono por quemar combustibles, basura y bosques' }, { id: 'b', text: 'Sembrar más árboles' }, { id: 'c', text: 'Usar energía solar' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.1.2'], prompt: '¿Hipótesis o conclusión?' },
          { buckets: [{ id: 'h', label: 'Hipótesis', icon: 'Lightbulb' }, { id: 'c', label: 'Conclusión', icon: 'ClipboardCheck' }],
            items: [{ id: 'a', text: 'Si riego la planta cada día, crecerá más.', bucket: 'h' }, { id: 'b', text: 'Los datos muestran que la planta regada creció 5 cm más.', bucket: 'c' }, { id: 'e', text: 'Si pongo el hielo al sol, se derretirá más rápido.', bucket: 'h' }, { id: 'd', text: 'Comprobamos que el hielo al sol se derritió primero.', bucket: 'c' }] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.2.2'], prompt: '¿Cuál es la explicación científica de los sismos?' },
          { options: [{ id: 'a', text: 'El movimiento de las placas tectónicas' }, { id: 'b', text: 'El enojo de los volcanes' }, { id: 'c', text: 'Las lluvias fuertes' }], correct: ['a'] }),
        S.slider({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.4.1'], prompt: 'Simplifica **6/12** y márcalo en la barra.' },
          { min: 0, max: 1, step: 0.5, answer: 0.5, start: 0, visual: 'fraction', parts: 2, display: 'fraction' }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.4.2'], prompt: 'Calcula **3/4 − 1/6 + 1/3**. Escribe la fracción.' },
          { answer: 11 / 12, allowFraction: true, allowDecimal: true, stimulus: '3/4 − 1/6 + 1/3 = ?' }),
        S.match({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.1.2', 'l1:8.1.1', 'l1:8.2.6'], prompt: 'Une cada necesidad con la fuente o informe adecuado.' },
          { pairs: [
            { id: 'a', left: 'Ubicar un río en un mapa', right: 'Atlas' },
            { id: 'b', left: 'Leer periódicos de hace 50 años', right: 'Hemeroteca' },
            { id: 'c', left: 'Contar el procedimiento y los resultados de un experimento', right: 'Informe técnico' },
          ] }),
        S.sort({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.3.2'], prompt: '¿Causa o consecuencia de la pobreza?' },
          { buckets: [{ id: 'c', label: 'Causa', icon: 'Search' }, { id: 'k', label: 'Consecuencia', icon: 'TrendingUp' }],
            items: [{ id: 'a', text: 'Falta de acceso a la educación', bucket: 'c' }, { id: 'b', text: 'Desnutrición', bucket: 'k' }, { id: 'd', text: 'Desempleo', bucket: 'c' }, { id: 'e', text: 'Abandono escolar', bucket: 'k' }] }),
        S.tf({ fase: 'comprobar', areas: ['ccss', 'fc'], cnb: ['ccss:8.4.2', 'fc:5.2.2'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'Guatemala ratificó convenios de la OIT contra el trabajo infantil.', answer: true },
            { text: 'En 1995 se firmó el Acuerdo sobre Identidad y Derechos de los Pueblos Indígenas.', answer: true },
            { text: 'La Constitución permite jornadas diurnas de 12 horas diarias.', answer: false },
          ] }),
        S.fill({ fase: 'comprobar', areas: ['l1', 'l2'], cnb: ['l1:7.3.1', 'l2:5.1.3', 'l2:5.1.5'], prompt: 'Completa con concordancia y el conector correcto.' },
          { text: 'Los barriletes [[rojos]] vuelan alto, [[pero]] los azules no.', distractors: ['roja', 'hacia'] }),
        S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.4.1'], prompt: '¿Cuál es una decisión **sostenible y justa** para un emprendimiento escolar?' },
          { options: [{ id: 'a', text: 'Usar materiales reciclados y repartir tareas y ganancias por igual' }, { id: 'b', text: 'Talar árboles jóvenes para ahorrar dinero' }, { id: 'c', text: 'Dejar fuera a quien habla otro idioma' }], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 2 */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.3.2'], prompt: '¿Qué gas de efecto invernadero aumenta al quemar gasolina y leña?' },
      { options: [{ id: 'a', text: 'Dióxido de carbono' }, { id: 'b', text: 'Oxígeno' }, { id: 'c', text: 'Helio' }], correct: ['a'] }),
    S.order({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.1.2', 'cnt:8.2.2'], prompt: 'Ordena los momentos de esta investigación.' },
      { items: [{ id: 'a', text: 'Veo que el pan se llena de moho en lugares húmedos' }, { id: 'b', text: 'Pienso: "Si guardo el pan en un lugar seco, tardará más en tener moho"' }, { id: 'c', text: 'Guardo un pan en lugar seco y otro en lugar húmedo, y observo 5 días' }, { id: 'd', text: 'El pan en lugar seco tardó más: la hipótesis se cumplió' }], labels: { start: 'Primero', end: 'Último' } }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.4.1'], prompt: '¿Cuál es la mínima expresión de 18/27?' },
      { options: [{ id: 'a', text: '2/3' }, { id: 'b', text: '6/9' }, { id: 'c', text: '9/13' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.4.2'], prompt: 'Calcula **1/2 + 1/3 − 1/4**. Escribe la fracción.' },
      { answer: 7 / 12, allowFraction: true, allowDecimal: true, stimulus: '1/2 + 1/3 − 1/4 = ?' }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.1.2'], prompt: '¿Qué ciencia social estudia cómo se produce y reparte la riqueza?' },
      { options: [{ id: 'a', text: 'Economía' }, { id: 'b', text: 'Geografía' }, { id: 'c', text: 'Astronomía' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.4.2'], prompt: '¿Qué organismo internacional acuerda normas sobre el trabajo digno?' },
      { options: [{ id: 'a', text: 'La OIT (Organización Internacional del Trabajo)' }, { id: 'b', text: 'Un equipo de fútbol' }, { id: 'c', text: 'La biblioteca municipal' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.2.2'], prompt: 'Durante la Reforma Liberal, muchas comunidades indígenas…' },
      { options: [{ id: 'a', text: 'Perdieron sus tierras comunales' }, { id: 'b', text: 'Recibieron más tierras' }, { id: 'c', text: 'Dejaron de trabajar' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.6'], prompt: '¿Qué informe presenta solo las ideas principales de un texto en pocas líneas?' },
      { options: [{ id: 'a', text: 'Resumen o síntesis' }, { id: 'b', text: 'Informe técnico' }, { id: 'c', text: 'Atlas' }], correct: ['a'] }),
    S.sort({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.4'], prompt: 'La palabra en negrita, ¿es determinante o pronombre?' },
      { buckets: [{ id: 'd', label: 'Determinante', icon: 'Link' }, { id: 'p', label: 'Pronombre', icon: 'RefreshCw' }],
        items: [{ id: 'a', text: '**Este** barrilete es mío.', bucket: 'd' }, { id: 'b', text: 'Quiero **ese**.', bucket: 'p' }, { id: 'c', text: '**Aquella** montaña es alta.', bucket: 'd' }, { id: 'e', text: '**Esta** es mi casa.', bucket: 'p' }] }),
    S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:5.3.2'], prompt: 'Complete the dialogue.' },
      { text: 'A: [[Thank you]] for your help!\nB: [[You\'re welcome]]!', distractors: ['Excuse me'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:4.3.3'], prompt: 'Para investigar el origen de una tradición de tu comunidad, ¿qué fuente es muy valiosa?' },
      { options: [{ id: 'a', text: 'Entrevistar a personas mayores y comparar con libros' }, { id: 'b', text: 'Inventar la historia' }, { id: 'c', text: 'Copiar sin citar' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.2.4', 'ef:4.1.13'], prompt: 'Al organizar un juego, ¿qué muestra respeto por las diferencias?' },
      { options: [{ id: 'a', text: 'Formar equipos mixtos y no permitir burlas por idioma u origen' }, { id: 'b', text: 'Que solo jueguen los más rápidos' }, { id: 'c', text: 'Separar a quienes hablan otro idioma' }], correct: ['a'] }),
  ],
});
