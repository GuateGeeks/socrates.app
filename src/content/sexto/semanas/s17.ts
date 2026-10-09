import { S, lesson, semana } from '../../dsl';
import { unit2Workshop } from './u2-talleres';

/**
 * SEMANA 17 · Unidad 2 "Consolidando nuestras relaciones"
 * Tema generador: Hilos que nos conectan con el mundo
 * Energía química e hidrocarburos · causas de mortalidad · ideas del siglo XIX y Reforma Liberal ·
 * Guatemala en el mundo: comercio, organismos internacionales y paz · factorización prima, MCM y MCD ·
 * ecosistemas, patrimonio prehispánico, derechos y responsabilidades ciudadanas.
 */
export default semana({
  id: 's17',
  unidad: 2,
  semana: 17,
  kind: 'aprendizaje',
  temaGenerador: 'Hilos que nos conectan con el mundo',
  title: 'Hilos que nos conectan con el mundo',
  subtitle: 'Energía, comercio, ideas, derechos y números primos',
  icon: 'Ship',
  color: 'var(--area-ccss)',
  contexto: 'Una cooperativa de Alta Verapaz cosecha cardamomo, uno de los productos que Guatemala más vende al mundo. El costal viaja en camión hasta un puerto del Caribe y de ahí cruza el océano. Esta semana seguirás ese viaje para descubrir qué energía mueve el camión, qué ideas del siglo XIX cambiaron el comercio, cómo se relaciona Guatemala con otros países y qué derechos y responsabilidades tenemos como ciudadanos.',
  ejes: ['vida-ciudadana', 'trabajo', 'sostenible', 'multiculturalidad'],
  media: {
    id: 's17-portada', kind: 'video', title: 'El viaje de un costal de cardamomo', aspect: '16:9', duration: 60,
    alt: 'Recorrido de un costal de cardamomo desde un cultivo en la montaña de Alta Verapaz, en camión por la carretera, hasta un barco en el puerto.',
    brief: 'Video (o animación 2D) de 60 s. (1) Mujeres y hombres q\'eqchi\' de una cooperativa cosechan cápsulas verdes de cardamomo en un bosque húmedo con neblina. (2) El cardamomo se seca y se empaca en costales. (3) Un camión lo lleva por la carretera; aparece un ícono de bomba de combustible. (4) En el puerto, una grúa sube contenedores a un barco; sobre el mar se dibujan líneas hacia otros continentes. Texto final: "Hilos que nos conectan con el mundo". Sin marcas, logos ni rostros reales identificables.',
  },
  badge: { id: 'medalla-s17', name: 'Tejedor de conexiones', icon: 'Globe', desc: 'Completaste la semana 17 y superaste su reto' },
  lessons: [
    unit2Workshop(17),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's17-d5-reto',
      title: 'Reto de la semana 17',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Tejedor de conexiones" (70 % o más)'],
      resumen: ['Superé el reto de la semana 17: energía, ideas del siglo XIX, Guatemala en el mundo, factores primos y ecosistemas.'],
      media: {
        id: 's17-d5-reto', kind: 'image', title: 'Medalla Tejedor de conexiones', aspect: '1:1',
        alt: 'Medalla dorada con un globo terráqueo envuelto en hilos de colores de tejido maya.',
        brief: 'Ilustración de medalla circular dorada: al centro un globo terráqueo centrado en América, envuelto por hilos de colores que forman un patrón de tejido maya; un pequeño barco en la parte inferior. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024, estilo plano con brillo suave.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.1.2'], prompt: '¿De dónde viene, en origen, la energía química que guarda una tortilla?' },
          { options: [{ id: 'a', text: 'Del Sol, captado por la planta de maíz' }, { id: 'b', text: 'Del comal' }, { id: 'c', text: 'Del petróleo' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.2.2'], prompt: '¿Viene de hidrocarburos?' },
          { buckets: [{ id: 's', label: 'Sí', icon: 'Fuel' }, { id: 'n', label: 'No', icon: 'Sun' }],
            items: [{ id: 'a', text: 'Gasolina', bucket: 's' }, { id: 'b', text: 'Asfalto', bucket: 's' }, { id: 'c', text: 'Energía del viento', bucket: 'n' }, { id: 'd', text: 'Energía solar', bucket: 'n' }] }),
        S.fill({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.4'], prompt: 'Completa la factorización prima de 100.' },
          { text: '100 = [[2]]² × [[5]]²', distractors: ['10', '4'] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.5'], prompt: 'Calcula el **MCD** de 16 y 40.' },
          { answer: 8 }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.5'], prompt: 'Calcula el **MCM** de 9 y 12.' },
          { answer: 36 }),
        S.match({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.6.1', 'ccss:6.6.2', 'ccss:7.2.2'], prompt: 'Une cada término con su descripción.' },
          { pairs: [
            { id: 'a', left: 'Reforma Liberal (1871)', right: 'Impulsó el café y el ferrocarril en Guatemala' },
            { id: 'b', left: 'Neocolonialismo', right: 'Dominio de potencias sobre África y Asia' },
            { id: 'c', left: 'MINUGUA', right: 'Verificó los Acuerdos de Paz' },
          ] }),
        S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.1.3'], prompt: '¿Cuál es un factor del **intercambio desigual** entre países?' },
          { options: [{ id: 'a', text: 'Vender materias primas sin procesar y comprar productos procesados caros' }, { id: 'b', text: 'Procesar y empacar los productos en el propio país' }, { id: 'c', text: 'Vender muchos productos distintos a precios justos' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.2'], prompt: '¿Diptongo o hiato?' },
          { buckets: [{ id: 'd', label: 'Diptongo', icon: 'Link' }, { id: 'h', label: 'Hiato', icon: 'Scissors' }],
            items: [{ id: 'a', text: 'tierra', bucket: 'd' }, { id: 'b', text: 'río', bucket: 'h' }, { id: 'c', text: 'cuidado', bucket: 'd' }, { id: 'e', text: 'maíz', bucket: 'h' }] }),
        S.choice({ fase: 'comprobar', areas: ['pyd', 'cnt'], cnb: ['pyd:5.2.1'], prompt: '¿En qué ecosistema vive el quetzal?' },
          { options: [{ id: 'a', text: 'Bosque nuboso' }, { id: 'b', text: 'Manglar' }, { id: 'c', text: 'Bosque seco' }], correct: ['a'] }),
        S.tf({ fase: 'comprobar', areas: ['l2', 'ccss', 'l3'], cnb: ['l2:4.2.3', 'l2:4.3.1', 'ccss:7.1.4', 'l3:5.2.3'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: '"Girasol" une las palabras gira y sol.', answer: true },
            { text: 'Una oración que afirma algo empieza con mayúscula y termina con punto.', answer: true },
            { text: 'Nelson Mandela fue presidente de Sudáfrica.', answer: true },
            { text: 'Pagar impuestos es un derecho, no una responsabilidad.', answer: false },
          ] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 2 */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.2.2'], prompt: '¿De qué elementos están formados principalmente los hidrocarburos?' },
      { options: [{ id: 'a', text: 'Hidrógeno y carbono' }, { id: 'b', text: 'Hierro y oro' }, { id: 'c', text: 'Agua y sal' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.5.2'], prompt: '¿Qué ayuda a prevenir las enfermedades diarreicas, una causa frecuente de muerte infantil?' },
      { options: [{ id: 'a', text: 'Agua segura y lavado de manos' }, { id: 'b', text: 'Dormir menos' }, { id: 'c', text: 'Comer más dulces' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.4'], prompt: '¿Cuál es la factorización prima de 45?' },
      { options: [{ id: 'a', text: '3² × 5' }, { id: 'b', text: '9 × 5' }, { id: 'c', text: '3 × 15' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.5'], prompt: 'Calcula el **MCD** de 18 y 30.' },
      { answer: 6 }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.6.1'], prompt: '¿Qué recuerda el Día del Trabajo, el 1 de mayo?' },
      { options: [{ id: 'a', text: 'La lucha de trabajadores por la jornada de 8 horas' }, { id: 'b', text: 'La independencia de Centroamérica' }, { id: 'c', text: 'La caída del Muro de Berlín' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.6.7'], prompt: '¿Cuál es un producto que Guatemala vende al mundo?' },
      { options: [{ id: 'a', text: 'Cardamomo' }, { id: 'b', text: 'Hielo polar' }, { id: 'c', text: 'Petróleo de Arabia' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.1.2'], prompt: '¿Qué idea liberal influyó en la educación pública de Guatemala?' },
      { options: [{ id: 'a', text: 'Educación laica y gratuita' }, { id: 'b', text: 'Educación solo para nobles' }, { id: 'c', text: 'Prohibir las escuelas' }], correct: ['a'] }),
    S.fill({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.1.1', 'l1:7.2.3'], prompt: 'Completa con el grado del adjetivo y la raíz.' },
      { text: '"Altísimo" es un adjetivo en grado [[superlativo]].\nEn "trabajadoras", la raíz es [[trabaj]].', distractors: ['comparativo', 'doras'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.2.4', 'l2:4.2.3'], prompt: '"Cantautor" se formó uniendo partes de…' },
      { options: [{ id: 'a', text: 'Cantante y autor' }, { id: 'b', text: 'Canto y torre' }, { id: 'c', text: 'Cantar y auto' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:5.2.3'], prompt: 'Martin Luther King Jr. said "I have a dream" in…' },
      { options: [{ id: 'a', text: '1963' }, { id: 'b', text: '1821' }, { id: 'c', text: '2020' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.1.5', 'ef:4.1.1', 'ef:4.1.9'], prompt: '¿Para qué sirven las reglas acordadas antes de un juego?' },
      { options: [{ id: 'a', text: 'Para que todos disfruten, jueguen seguros y se respeten' }, { id: 'b', text: 'Para que gane siempre el mismo equipo' }, { id: 'c', text: 'Para no tener que cuidar el lugar' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.2.1'], prompt: '¿Dónde se encuentra el bosque seco en Guatemala?' },
      { options: [{ id: 'a', text: 'En el valle del Motagua' }, { id: 'b', text: 'En la cumbre de los volcanes' }, { id: 'c', text: 'En el centro del lago de Atitlán' }], correct: ['a'] }),
  ],
});
