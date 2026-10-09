import { S, lesson, semana } from '../../dsl';
import { unit2Workshop } from './u2-talleres';

/**
 * SEMANA 11 · Unidad 2 "Consolidando nuestras relaciones"
 * Tema generador: Nuestra relación con la Tierra
 */
export default semana({
  id: 's11',
  unidad: 2,
  semana: 11,
  kind: 'aprendizaje',
  temaGenerador: 'Nuestra relación con la Tierra',
  title: 'Nuestra relación con la Tierra',
  subtitle: 'Gente de maíz, continentes, formas que producen y trabajo digno',
  icon: 'Sprout',
  color: 'var(--area-cnt)',
  contexto: 'En muchas comunidades de Guatemala la milpa es mucho más que comida: es historia, ciencia, trabajo y fiesta. Esta semana verás cómo el Popol Wuj explica nuestro origen, cómo la planta de maíz fabrica su alimento, qué comparten los continentes, qué formas usan los artesanos y qué derechos protegen a quienes trabajan la tierra.',
  ejes: ['multiculturalidad', 'sostenible', 'trabajo', 'equidad'],
  media: {
    id: 's11-portada', kind: 'video', title: 'Una milpa, muchas relaciones', aspect: '16:9', duration: 60,
    alt: 'Recorrido por una milpa del altiplano: maíz, frijol y ayote creciendo juntos, una familia trabajando y un volcán al fondo.',
    brief: 'Video de 60 s (tomas reales o animación 2D cálida) de una milpa del altiplano occidental al amanecer con un volcán al fondo. Mostrar en secuencia: mazorcas de colores (amarillo, blanco, negro y rojo), manos sembrando, un comal con tortillas, un tambor hecho con una lata y una señal de "Trabajo digno". Sobreimpresos breves: "Origen", "Ciencia", "Formas", "Derechos". Música de marimba suave. Sin personas identificables en primer plano. Cierre con la pregunta: "¿Cómo te relacionas tú con la Tierra?".',
  },
  badge: { id: 'medalla-s11', name: 'Guardián de la milpa', icon: 'Sprout', desc: 'Completaste la semana 11 y superaste su reto' },
  lessons: [
    unit2Workshop(11),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's11-d5-reto',
      title: 'Reto de la semana 11',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste sobre la Tierra, la vida y el trabajo', 'Obtener la medalla "Guardián de la milpa" (70 % o más)'],
      resumen: ['Superé el reto de la semana 11: Popol Wuj, fotosíntesis, continentes, áreas, cuerpo y derechos.'],
      media: {
        id: 's11-d5-reto', kind: 'image', title: 'Medalla Guardián de la milpa', aspect: '1:1',
        alt: 'Medalla dorada con una mazorca de maíz de granos de colores y un pequeño volcán al fondo.',
        brief: 'Ilustración de medalla circular dorada: al centro una mazorca con granos amarillos, blancos, negros y rojos; detrás, la silueta de un volcán y un sol. Cinta con los colores de las áreas del CNB. Estilo plano con brillo suave, fondo transparente, 1024×1024.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.1.2'], prompt: 'Según el Popol Wuj, ¿por qué fueron destruidas las personas de madera?' },
          { options: [{ id: 'a', text: 'Porque no tenían corazón ni memoria de sus creadores' }, { id: 'b', text: 'Porque eran demasiado altas' }, { id: 'c', text: 'Porque se deshacían con el agua' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.2.2', 'cnt:1.3.2'], prompt: 'Une cada estructura con su función.' },
          { pairs: [{ id: 'c', left: 'Cloroplasto', right: 'Fotosíntesis' }, { id: 'v', left: 'Vacuola', right: 'Guarda agua' }, { id: 'm', left: 'Mitocondria', right: 'Energía en células animales y vegetales' }] }),
        S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.4.2'], prompt: '¿Se hereda por los genes o se adquiere durante la vida?' },
          { buckets: [{ id: 'h', label: 'Se hereda', icon: 'Dna' }, { id: 'a', label: 'Se adquiere', icon: 'User' }],
            items: [{ id: 'a1', text: 'Tipo de cabello', bucket: 'h' }, { id: 'a2', text: 'Saber tocar marimba', bucket: 'a' }, { id: 'a3', text: 'Color de ojos', bucket: 'h' }, { id: 'a4', text: 'Un tatuaje', bucket: 'a' }] }),
        S.order({ fase: 'comprobar', areas: ['ccss', 'mat'], cnb: ['ccss:1.1.1'], prompt: 'Ordena los continentes del **más extenso** al **menos extenso**.' },
          { items: [{ id: 'as', text: 'Asia' }, { id: 'am', text: 'América' }, { id: 'af', text: 'África' }, { id: 'eu', text: 'Europa' }, { id: 'oc', text: 'Oceanía' }], labels: { start: 'Más extenso', end: 'Menos extenso' } }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.2.2', 'ccss:1.3.2'], prompt: 'Una familia vive al pie de una ladera empinada que fue deforestada. Empieza la época de lluvia. ¿Qué riesgo es mayor?' },
          { options: [{ id: 'a', text: 'Un deslave' }, { id: 'b', text: 'Una nevada' }, { id: 'c', text: 'Una sequía' }], correct: ['a'] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.2.2'], prompt: 'Un triángulo obtusángulo tiene base de 14 cm y altura de 6 cm. ¿Cuál es su área?' },
          { answer: 42, unit: 'cm²', misconceptions: [{ value: 84, msg: 'Falta dividir entre 2.' }] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.2.3'], prompt: 'Un plato tiene 30 cm de diámetro. ¿Cuánto mide su circunferencia? (π ≈ 3.14)' },
          { answer: 94.2, unit: 'cm', allowDecimal: true, tolerance: 0.05 }),
        S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.2.4', 'l3:1.1.4'], prompt: 'Complete in English.' },
          { text: 'The comal is [[round]]. The box is [[square]]. The volcano is very [[large]].', distractors: ['happy', 'fast'] }),
        S.tf({ fase: 'comprobar', areas: ['ef', 'fc'], cnb: ['ef:1.1.8', 'fc:1.2.4'], prompt: '¿Verdadero o falso?' },
          { statements: [{ text: 'La sangre transporta el oxígeno que entra por los pulmones.', answer: true }, { text: 'El descanso semanal es un derecho de quienes trabajan.', answer: true }, { text: 'La jornada ordinaria diurna puede ser de 12 horas diarias.', answer: false }] }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.2.1', 'l1:1.2.2'], prompt: '¿Qué apertura mantiene mejor la atención del público?' },
          { options: [{ id: 'a', text: 'Una pregunta que invite a pensar, dicha con voz clara y mirando al público' }, { id: 'b', text: 'Leer el título en voz baja' }, { id: 'c', text: 'Pedir disculpas por no haber preparado nada' }], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 2 */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.1.2'], prompt: '¿De qué material fueron formadas las personas verdaderas en el Popol Wuj?' },
      { options: [{ id: 'a', text: 'De maíz amarillo y blanco' }, { id: 'b', text: 'De piedra' }, { id: 'c', text: 'De barro' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.2.2'], prompt: '¿Qué gas liberan las plantas durante la fotosíntesis?' },
      { options: [{ id: 'a', text: 'Oxígeno' }, { id: 'b', text: 'Dióxido de carbono' }, { id: 'c', text: 'Humo' }], correct: ['a'] }),
    S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.3.2', 'cnt:1.4.2'], prompt: '¿Verdadero o falso?' },
      { statements: [{ text: 'Las células animales también tienen mitocondrias.', answer: true }, { text: 'Los genes están en la pared celular.', answer: false }] }),
    S.match({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.1.2'], prompt: 'Une cada lugar con su continente.' },
      { pairs: [{ id: 'e', left: 'Everest', right: 'Asia' }, { id: 'k', left: 'Kilimanjaro', right: 'África' }, { id: 'a', left: 'Aconcagua', right: 'América' }] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.2.2'], prompt: '¿En qué zona climática están los países cercanos al ecuador?' },
      { options: [{ id: 'a', text: 'Zona cálida' }, { id: 'b', text: 'Zona fría' }, { id: 'c', text: 'Zona templada' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.1.5'], prompt: '¿Qué ejemplo muestra la importancia **cultural** de un recurso natural?' },
      { options: [{ id: 'a', text: 'Usar tintes de plantas para teñir tejidos tradicionales' }, { id: 'b', text: 'Vender madera por metro' }, { id: 'c', text: 'Exportar café' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.2.3'], prompt: '¿Cuál es el área de un círculo de 10 cm de radio? (π ≈ 3.14)' },
      { answer: 314, unit: 'cm²', misconceptions: [{ value: 62.8, msg: 'Eso es la circunferencia, no el área.' }] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.4.1'], prompt: '¿Cuál es el área total de un cubo de 4 cm de arista?' },
      { answer: 96, unit: 'cm²', misconceptions: [{ value: 16, msg: 'Esa es una sola cara; el cubo tiene 6.' }, { value: 64, msg: 'Eso es el volumen (4 × 4 × 4).' }] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.1.7', 'ef:1.1.1'], prompt: '¿Qué articulación permite **rotar** el brazo en círculos?' },
      { options: [{ id: 'a', text: 'El hombro' }, { id: 'b', text: 'La rodilla' }, { id: 'c', text: 'El tobillo' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.5'], prompt: '¿Qué medida ayuda a que las personas ciegas ejerzan su derecho a informarse?' },
      { options: [{ id: 'a', text: 'Tener información en braille o en audio' }, { id: 'b', text: 'Poner más carteles pequeños' }, { id: 'c', text: 'Pedirles que no participen' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.1.2'], prompt: 'En una comunidad con un mirador hermoso que nadie visita, el turismo comunitario es una fuente de producción…' },
      { options: [{ id: 'a', text: 'Potencial' }, { id: 'b', text: 'Que ya existe y funciona' }, { id: 'c', text: 'Imposible' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.1.3', 'l2:1.1.2'], prompt: 'Después de un diálogo sobre la milpa, ¿qué es un **subtema** adecuado?' },
      { options: [{ id: 'a', text: 'Cómo se alimenta la planta de maíz' }, { id: 'b', text: 'Mi color favorito' }, { id: 'c', text: 'El partido de fútbol del domingo' }], correct: ['a'] }),
  ],
});
