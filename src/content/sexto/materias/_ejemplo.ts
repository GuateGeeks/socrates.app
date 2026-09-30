/**
 * EJEMPLO DE REFERENCIA — lección de materia (no se importa en el curso).
 * Muestra el ritmo esperado: gancho → enseñanza explícita → ejemplo resuelto → práctica guiada
 * → práctica independiente → boleto de salida → cierre breve. ~12 minutos, una sola materia,
 * contexto guatemalteco real sin forzar otras áreas.
 */
import { lesson, S } from '../../dsl';

export const ejemploMat = lesson({
  id: 's01-mat-1',
  title: 'Triángulos según sus ángulos',
  icon: 'Triangle',
  minutes: 12,
  gancho: 'El techo de muchas casas de lámina tiene forma de triángulo. ¿Todos esos triángulos son iguales?',
  objetivos: [
    'Reconocer ángulos agudos, rectos y obtusos',
    'Clasificar triángulos en acutángulos, rectángulos y obtusángulos',
    'Calcular el ángulo que falta en un triángulo',
  ],
  resumen: [
    'Ángulo agudo: menos de 90°. Recto: exactamente 90°. Obtuso: más de 90° y menos de 180°.',
    'Triángulo acutángulo: sus 3 ángulos son agudos. Rectángulo: tiene un ángulo recto. Obtusángulo: tiene un ángulo obtuso.',
    'Los tres ángulos de cualquier triángulo suman 180°.',
  ],
  media: {
    id: 's01-mat-1-tipos', kind: 'animation', title: 'Tres familias de triángulos', aspect: '16:9', duration: 40,
    alt: 'Un triángulo cuyos vértices se mueven: cuando un ángulo llega a 90° aparece un cuadradito; si lo pasa, el triángulo se vuelve obtusángulo.',
    brief: 'Animación 2D de 40 s sobre cuadrícula. Un triángulo con un vértice arrastrable: el ángulo se colorea verde (<90°), azul con cuadrito (=90°) o naranja (>90°) y la etiqueta cambia entre acutángulo, rectángulo y obtusángulo. Cierra con los tres tipos lado a lado. Narración en español neutro, subtítulos.',
  },
  steps: [
    S.choice(
      { fase: 'explorar', areas: ['mat'], cnb: ['mat:1.1.1'], ambito: 'conocer',
        prompt: 'Mira las esquinas de estos objetos. ¿Cuál tiene una esquina **como la de una hoja de cuaderno**?',
        explain: 'La esquina de una hoja forma un **ángulo recto** (90°). Lo usaremos como medida de comparación.' },
      { layout: 'grid', options: [
        { id: 'a', text: 'Una tortilla doblada en cuatro', icon: 'Pizza', feedback: 'La punta de una tortilla doblada en cuatro sí mide 90°… ¡buena intuición! Pero fíjate en la opción de la ventana: es la más clara.' },
        { id: 'b', text: 'El marco de una ventana', icon: 'AppWindow' },
        { id: 'c', text: 'La punta de un machete', icon: 'Slice', feedback: 'La punta del machete es más cerrada que la esquina de una hoja: es un ángulo agudo.' },
      ], correct: ['b'] },
    ),
    S.explain(
      { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.1'], ambito: 'conocer', title: 'Tres tipos de ángulo',
        prompt: 'Un **ángulo** es la abertura entre dos líneas que se juntan en un punto (el **vértice**). Se mide en **grados (°)**. Toca cada tarjeta.' },
      { icon: 'Ruler', body: 'Compara siempre con la esquina de una hoja: **90°**.', reveal: [
        { icon: 'ChevronUp', front: 'Agudo', back: 'Mide **menos de 90°**. Es más cerrado que la esquina de la hoja. Ejemplo: 45°.' },
        { icon: 'CornerDownRight', front: 'Recto', back: 'Mide **exactamente 90°**. Se marca con un cuadradito en el vértice.' },
        { icon: 'ChevronsLeftRight', front: 'Obtuso', back: 'Mide **más de 90° y menos de 180°**. Es más abierto que la esquina de la hoja. Ejemplo: 120°.' },
      ] },
    ),
    S.sort(
      { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Clasifica cada medida en su tipo de ángulo.',
        hint: 'Compara cada número con 90.' },
      { buckets: [
        { id: 'ag', label: 'Agudo (< 90°)', icon: 'ChevronUp', color: 'var(--c-ok)' },
        { id: 're', label: 'Recto (= 90°)', icon: 'CornerDownRight', color: 'var(--area-mat)' },
        { id: 'ob', label: 'Obtuso (> 90°)', icon: 'ChevronsLeftRight', color: 'var(--c-maiz-strong)' },
      ], items: [
        { id: 'x1', text: '30°', bucket: 'ag' },
        { id: 'x2', text: '90°', bucket: 're' },
        { id: 'x3', text: '135°', bucket: 'ob' },
        { id: 'x4', text: '89°', bucket: 'ag', feedback: '89 es menor que 90, aunque por poquito: es agudo.' },
        { id: 'x5', text: '100°', bucket: 'ob' },
        { id: 'x6', text: '60°', bucket: 'ag' },
      ] },
    ),
    S.explain(
      { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.1'], ambito: 'conocer', title: 'Los triángulos se nombran por su ángulo mayor',
        prompt: 'Todo triángulo tiene **3 ángulos**. Para clasificarlo, busca su ángulo **más grande**.' },
      { icon: 'Triangle', body: 'Un triángulo **nunca** puede tener dos ángulos rectos ni dos obtusos: no le alcanzarían los grados para cerrarse.', reveal: [
        { icon: 'Triangle', front: 'Acutángulo', back: 'Sus **tres** ángulos son agudos. Ejemplo: 60°, 60°, 60°.' },
        { icon: 'TriangleRight', front: 'Rectángulo', back: 'Tiene **un** ángulo recto. Ejemplo: 90°, 30°, 60°. Como las escuadras de carpintería.' },
        { icon: 'Tent', front: 'Obtusángulo', back: 'Tiene **un** ángulo obtuso. Ejemplo: 120°, 35°, 25°. Como algunos techos muy abiertos.' },
      ] },
    ),
    S.ejemplo(
      { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto',
        prompt: 'Una regla muy útil: **los tres ángulos de un triángulo suman 180°**. Mira cómo se usa.' },
      { icon: 'Calculator', problem: 'El techo de la casa de doña Lucía forma un triángulo. Dos de sus ángulos miden **35°** y **35°**. ¿Cuánto mide el ángulo de arriba? ¿Qué tipo de triángulo es?',
        steps: [
          { text: 'Sumo los ángulos que conozco: 35° + 35° = **70°**.' },
          { text: 'Resto a 180°: 180° − 70° = **110°**.', why: 'Los tres ángulos juntos siempre suman 180°; lo que falta es el tercer ángulo.' },
          { text: '110° es **mayor que 90°**, entonces es un ángulo obtuso.' },
        ],
        answer: 'El ángulo de arriba mide **110°** y el techo es un triángulo **obtusángulo**.',
        tip: 'Comprueba siempre: 35 + 35 + 110 = 180. ✔' },
    ),
    S.number(
      { fase: 'construir', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Ahora tú, con ayuda: un triángulo tiene ángulos de **90°** y **40°**. ¿Cuánto mide el tercero?',
        hint: 'Primero suma 90 + 40. Luego resta ese resultado a 180.',
        explain: '90 + 40 = 130 y 180 − 130 = 50. El tercer ángulo mide 50°.' },
      { answer: 50, unit: '°', stimulus: '90° + 40° + ? = 180°', misconceptions: [
        { value: 130, msg: '130 es la suma de los dos ángulos que conoces. Falta restarla a 180.' },
        { value: 230, msg: 'Sumaste todo. Recuerda: el total debe ser 180°, así que hay que restar.' },
      ] },
    ),
    S.choice(
      { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Un triángulo tiene ángulos de **50°, 60° y 70°**. ¿Cómo se llama?',
        explain: 'Los tres son menores que 90°: es **acutángulo**.' },
      { options: [
        { id: 'a', text: 'Acutángulo' },
        { id: 'r', text: 'Rectángulo', feedback: 'Para ser rectángulo necesita un ángulo de exactamente 90°.' },
        { id: 'o', text: 'Obtusángulo', feedback: 'Ninguno de sus ángulos pasa de 90°.' },
      ], correct: ['a'] },
    ),
    S.sort(
      { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Clasifica cada triángulo por sus ángulos.',
        explain: 'Busca primero el ángulo mayor de cada triángulo y compáralo con 90°.' },
      { buckets: [
        { id: 'ac', label: 'Acutángulo', icon: 'Triangle', color: 'var(--c-ok)' },
        { id: 're', label: 'Rectángulo', icon: 'TriangleRight', color: 'var(--area-mat)' },
        { id: 'ob', label: 'Obtusángulo', icon: 'Tent', color: 'var(--c-maiz-strong)' },
      ], items: [
        { id: 't1', text: '90°, 45°, 45°', bucket: 're' },
        { id: 't2', text: '70°, 70°, 40°', bucket: 'ac' },
        { id: 't3', text: '130°, 30°, 20°', bucket: 'ob' },
        { id: 't4', text: '60°, 30°, 90°', bucket: 're', feedback: 'El 90° está al final, pero cuenta igual: es rectángulo.' },
        { id: 't5', text: '100°, 50°, 30°', bucket: 'ob' },
      ] },
    ),
    S.number(
      { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Una vela de lancha en el lago de Atitlán tiene forma de triángulo rectángulo. Uno de sus ángulos agudos mide **62°**. ¿Cuánto mide el otro ángulo agudo?',
        hint: 'Un triángulo rectángulo ya tiene 90°. ¿Cuánto queda para los otros dos?',
        explain: '180 − 90 − 62 = 28. El otro ángulo mide 28°.' },
      { answer: 28, unit: '°', misconceptions: [{ value: 118, msg: 'Te faltó restar el ángulo recto (90°).' }] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Un triángulo tiene ángulos de **100°, 45° y 35°**. ¿Cómo se llama?' },
      { options: [
        { id: 'a', text: 'Acutángulo' },
        { id: 'r', text: 'Rectángulo' },
        { id: 'o', text: 'Obtusángulo' },
      ], correct: ['o'] },
    ),
    S.tf(
      { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: '¿Verdadero o falso?' },
      { statements: [
        { text: 'Un ángulo de 90° es un ángulo recto.', answer: true },
        { text: 'Un triángulo puede tener dos ángulos obtusos.', answer: false, why: 'Dos ángulos obtusos ya suman más de 180°.' },
        { text: 'Si un triángulo tiene ángulos de 80° y 60°, el tercero mide 40°.', answer: true },
      ] },
    ),
    S.reflect(
      { fase: 'reflexionar', areas: ['mat'], cnb: [], ambito: 'ser', prompt: '¿Cómo te fue hoy?' },
      { statements: ['Reconozco ángulos agudos, rectos y obtusos', 'Clasifico triángulos por sus ángulos', 'Calculo el ángulo que falta'] },
    ),
  ],
});
