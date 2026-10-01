/**
 * Productividad y Desarrollo · Unidad 1 · Semana 6
 * Planificación breve de un proyecto escolar en un canvas preparado.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's06-pyd-1',
    title: 'Un proyecto claro en una página',
    icon: 'ClipboardList',
    minutes: 15,
    gancho: 'Una idea se vuelve proyecto cuando dice qué logrará, qué se hará, quién lo hará, cuándo y con qué recursos.',
    objetivos: [
      'Planificar un proyecto escolar sencillo en un canvas',
    ],
    resumen: [
      'Un proyecto reúne un objetivo, actividades, responsables, fechas y recursos para atender una necesidad.',
      'El objetivo empieza con un verbo y expresa un resultado alcanzable.',
      'Un presupuesto pequeño multiplica cantidad por precio y suma los subtotales.',
      'Un canvas de una página permite revisar y explicar el plan con claridad.',
    ],
    media: {
      id: 's06-pyd-1-canvas', kind: 'diagram', title: 'Canvas de proyecto de una página', aspect: '4:3',
      alt: 'Plantilla de una página con espacios breves para objetivo, dos actividades con responsables y fechas, presupuesto, etiqueta visual y revisión.',
      brief: 'Mock honesto de un canvas preparado e impreso de una página. Incluir campos vacíos y compactos: nombre, objetivo, actividad 1 con responsable y fecha, actividad 2 con responsable y fecha, presupuesto de dos rubros con cantidad, precio, subtotal y total, etiqueta visual, y una lista de cotejo para una explicación de 20 segundos. No mostrar respuestas estudiantiles ni productos terminados.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:4.1.1'], ambito: 'conocer', title: 'Las partes que hacen viable un proyecto',
          prompt: 'Usarán un **canvas preparado de una página**. Cada campo responde una pregunta necesaria.' },
        { icon: 'ListChecks', body: 'Un plan breve puede ser completo si conecta todas sus partes.', reveal: [
          { icon: 'Target', front: 'Objetivo', back: '¿Qué resultado alcanzable queremos lograr?' },
          { icon: 'ListOrdered', front: 'Dos actividades', back: '¿Qué dos acciones permiten alcanzar el objetivo?' },
          { icon: 'Users', front: 'Responsables y fechas', back: '¿Quién hará cada actividad y cuándo?' },
          { icon: 'Coins', front: 'Presupuesto', back: '¿Qué recursos se necesitan y cuánto cuestan en total?' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:4.1.1', 'pyd:4.3.1'], ambito: 'hacer', title: 'Modelo breve: completar el canvas',
          prompt: 'Observa cómo las partes de un proyecto pequeño se conectan.' },
        { icon: 'ClipboardCheck', problem: 'Proyecto: organizar una caja de intercambio de libros para el grado.',
          steps: [
            { text: '**Objetivo:** habilitar una caja con 20 libros disponibles para intercambio el viernes.' },
            { text: '**Actividad 1:** reunir y registrar libros; responsable: comisión de lectura; fecha: miércoles.' },
            { text: '**Actividad 2:** ordenar la caja y presentar las reglas; responsable: Ana y Luis; fecha: viernes.' },
            { text: '**Presupuesto ilustrativo:** 1 caja reutilizable × Q0 = Q0; 2 rótulos × Q2 = Q4; total Q4.' },
          ],
          answer: 'El objetivo, las dos actividades, las responsabilidades, las fechas y el presupuesto describen un mismo proyecto realizable.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:4.1.1'], ambito: 'emprender',
          prompt: 'Con ayuda: ¿cuál objetivo cabe en un canvas y se puede comprobar?',
          hint: 'Busca un verbo, un resultado concreto y una fecha.',
          explain: '“Organizar 20 libros para intercambio el viernes” indica acción, cantidad y fecha.' },
        { options: [
          { id: 'a', text: 'Organizar 20 libros para intercambio el viernes' },
          { id: 'b', text: 'Hacer algo bonito algún día', feedback: 'No permite comprobar qué se logrará ni cuándo.' },
          { id: 'c', text: 'Que todas las personas lean siempre', feedback: 'Es demasiado amplio para este proyecto breve.' },
        ], correct: ['a'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.1.1', 'pyd:4.3.1'], ambito: 'emprender',
          prompt: 'Completa tu **canvas preparado de una página** para un proyecto pequeño de la escuela o comunidad.' },
        { goal: 'Producir un plan breve cuyas partes se apoyen entre sí.',
          steps: [
            { title: 'Objetivo', detail: 'Escribe un objetivo con verbo y un resultado alcanzable.' },
            { title: 'Actividad 1 y actividad 2', detail: 'Anota dos actividades; junto a cada una escribe un responsable y una fecha.' },
            { title: 'Presupuesto pequeño', detail: 'Completa dos rubros con cantidad, precio, subtotal y total. Usa precios ilustrativos o Q0 para un recurso reutilizado.' },
            { title: 'Chequeo oral', detail: 'Usa la lista de cotejo y explica en 20 segundos: objetivo, dos acciones y costo total.' },
          ],
          evidence: 'Un solo canvas de proyecto completo y revisable.',
          rubric: ['El objetivo y las dos actividades se relacionan', 'Cada actividad tiene responsable y fecha', 'El presupuesto muestra subtotales y total', 'La explicación de 20 segundos sigue la lista de cotejo'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.3.1'], ambito: 'hacer', title: 'Etiqueta visual concisa',
          prompt: 'Escribe una **etiqueta visual de 5 a 8 palabras** para identificar tu proyecto en el canvas.' },
        { minWords: 5, placeholder: 'Libros que circulan en nuestro grado',
          model: 'Semillas locales para nuestro huerto escolar',
          rubric: ['Nombra el proyecto con claridad', 'Tiene entre 5 y 8 palabras'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.3.1'], ambito: 'emprender',
          prompt: 'Antes de la explicación de **20 segundos**, ¿qué lista de cotejo permite comunicar el canvas con claridad?' },
        { options: [
          { id: 'a', text: 'Objetivo, dos actividades y costo total' },
          { id: 'b', text: 'Solo el nombre y muchos adornos' },
          { id: 'c', text: 'Toda la historia del problema sin explicar el plan' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:4.1.1'], prompt: 'Boleto de salida: ¿qué dato hace verificable una actividad del proyecto?' },
        { options: [
          { id: 'a', text: 'Un responsable y una fecha' },
          { id: 'b', text: 'Un color favorito' },
          { id: 'c', text: 'Una promesa sin plazo' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:4.1.1', 'pyd:4.3.1'], prompt: 'Comprueba las partes del proyecto en el canvas.' },
        { statements: [
          { text: 'Las actividades deben contribuir al objetivo.', answer: true },
          { text: 'Dos unidades a Q3 cada una tienen un subtotal de Q6.', answer: true },
          { text: 'El presupuesto puede omitir el total.', answer: false, why: 'El total permite saber cuánto requiere el proyecto.' },
        ] },
      ),
      cierre({ areas: ['pyd'], cnb: ['pyd:4.1.1', 'pyd:4.3.1'] },
        ['Completo un canvas de proyecto', 'Relaciono objetivo, actividades, responsables y fechas', 'Calculo un presupuesto pequeño'],
        ['Revisaré que cada actividad ayude al objetivo', 'Actualizaré los precios ilustrativos antes de usar el plan'])
    ],
  }),
];
