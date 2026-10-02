/**
 * Productividad y Desarrollo · Unidad 1 · Semana 6
 * Presentación y mejora de un proyecto escolar en una mini feria.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's06-pyd-1',
    title: 'Presentar, escuchar y mejorar un proyecto',
    icon: 'ClipboardList',
    minutes: 15,
    gancho: 'En una feria interactiva, una explicación breve y una pregunta útil pueden mejorar un proyecto antes de realizarlo.',
    objetivos: [
      'Presentar y mejorar un proyecto sencillo mediante retroalimentación en una mini feria',
    ],
    resumen: [
      'El plan suministrado reúne objetivo, dos actividades, responsables y un presupuesto pequeño; una fecha queda pendiente para revisarla.',
      'En la mini feria, la persona expositora presenta objetivo, acciones y costo total en 20 segundos.',
      'La persona visitante escucha y formula una pregunta relevante o un comentario basado en un criterio.',
      'La persona expositora registra la retroalimentación y revisa un campo para mejorar el plan.',
    ],
    media: {
      id: 's06-pyd-1-plan', kind: 'diagram', title: 'Partes de un plan breve', aspect: '4:3',
      alt: 'Diagrama de referencia con objetivo, dos actividades, presupuesto, etiqueta visual, retroalimentación y revisión.',
      brief: 'Diagrama 1200×900 de referencia. Mostrar campos compactos: objetivo, actividad 1 con responsable y fecha, actividad 2 con responsable y fecha, presupuesto de dos rubros, etiqueta visual, retroalimentación y revisión. Añadir una lista de cotejo para una presentación de 20 segundos. No presentarlo como hoja disponible ni mostrar respuestas estudiantiles.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:4.1.1', 'pyd:4.3.1'], ambito: 'conocer', title: 'Plan y protocolo de mini feria',
          prompt: 'Usarás un plan suministrado y una tarjeta de visitante para simular cómo la retroalimentación mejora un proyecto.' },
        { icon: 'MessagesSquare', body: 'Participar en una feria es presentar, escuchar con respeto y usar la retroalimentación para mejorar.', reveal: [
          { icon: 'Presentation', front: 'Presentar', back: 'Explica objetivo, dos acciones y costo total en 20 segundos.' },
          { icon: 'MessageCircleQuestion', front: 'Escuchar', back: 'La persona visitante hace una pregunta relevante o comenta un criterio: claridad, viabilidad o costo.' },
          { icon: 'NotebookPen', front: 'Registrar', back: 'Anota una frase breve sin discutir ni descalificar.' },
          { icon: 'RefreshCw', front: 'Mejorar', back: 'Agradece y revisa un campo del plan cuando el comentario ayuda al proyecto.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:4.1.1', 'pyd:4.3.1'], ambito: 'hacer', title: 'Modelo breve: presentar, escuchar y revisar',
          prompt: 'Observa cómo un proyecto preparado se presenta y mejora durante una mini feria.' },
        { icon: 'ClipboardCheck', problem: 'Proyecto: organizar una caja de intercambio de libros para el grado.',
          steps: [
            { text: '**Plan en una hoja:** objetivo, dos actividades con responsables y fechas, y presupuesto ilustrativo total de Q4.' },
            { text: '**Presentación de 20 segundos:** “Organizaremos 20 libros. Primero los registramos; después preparamos la caja. El costo total es Q4”.' },
            { text: '**Visitante:** pregunta con respeto y criterio de viabilidad: “¿Quién revisará que cada libro quede registrado?”' },
            { text: '**Presentadora:** responde “Gracias”, registra el comentario y revisa un campo: agrega “comisión de lectura” como responsable de la actividad 1.' },
          ],
          answer: 'La interacción es útil porque la visitante pregunta por un dato del plan y la presentadora usa esa retroalimentación para revisar un campo.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:4.3.1'], ambito: 'emprender',
          prompt: 'Con ayuda: el plan dice “comprar materiales”, pero no indica cuáles. ¿Qué comentario de visitante ayuda a mejorarlo?',
          hint: 'Un comentario respetuoso se refiere a un criterio del plan y propone precisar, no califica a la persona.',
          explain: 'Pedir que se nombren los materiales usa el criterio de claridad y permite revisar ese campo.' },
        { options: [
          { id: 'a', text: '¿Podrías nombrar los materiales para que el presupuesto sea claro?' },
          { id: 'b', text: 'Tu proyecto está mal.', feedback: 'Descalifica sin señalar un criterio ni una mejora posible.' },
          { id: 'c', text: 'Me gusta el color.', feedback: 'No ayuda a revisar la claridad o viabilidad del plan.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { id: 's06-pyd-1-4', fase: 'construir', areas: ['pyd'], cnb: ['pyd:4.1.1'], ambito: 'emprender', title: 'Plan suministrado: intercambio de libros',
          prompt: 'Lee este plan ya preparado. No debes copiarlo ni crear otro: lo usarás en la simulación y completarás solamente el dato que la retroalimentación permita mejorar.' },
        { icon: 'ClipboardList', body: '**Objetivo:** poner 20 libros en circulación en el grado.\n\n**Actividad 1:** registrar los libros. **Responsable:** comisión de lectura. **Fecha:** lunes.\n\n**Actividad 2:** preparar la caja de intercambio. **Responsable:** comisión de materiales. **Fecha:** pendiente.\n\n**Presupuesto ilustrativo:** etiqueta, Q2; cinta, Q2; caja reutilizada, Q0. **Total:** Q4.\n\n**Etiqueta:** pendiente.' },
      ),
      S.write(
        { id: 's06-pyd-1-5', fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.3.1'], ambito: 'hacer', title: 'Etiqueta visual concisa',
          prompt: 'Escribe una **etiqueta visual de 5 a 8 palabras** para identificar el plan suministrado.' },
        { minWords: 5, placeholder: 'Libros que circulan en nuestro grado',
          model: 'Libros compartidos para aprender juntos',
          rubric: ['Nombra el proyecto con claridad', 'Tiene entre 5 y 8 palabras'] },
      ),
      S.project(
        { id: 's06-pyd-1-6', fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.3.1'], ambito: 'emprender', title: 'Mini feria: una interacción y una mejora',
          prompt: 'Realiza una **simulación individual** con el plan y los roles suministrados. La práctica por pareja es una extensión opcional, no requerida.' },
        { goal: 'Interpretar retroalimentación útil y mejorar un solo campo del plan suministrado.',
          steps: [
            { title: 'Presentar', detail: 'Lee el objetivo, las dos actividades y el total de Q4 en 20 segundos.' },
            { title: 'Cambiar de rol', detail: 'Los roles cambian dentro de la simulación individual. Formula una pregunta suministrada en la voz de la visitante: “La segunda actividad no tiene fecha. ¿Cuándo la realizarás?”' },
            { title: 'Mejorar un campo', detail: 'Registra la retroalimentación “falta fecha” y revisa un campo: agrega “viernes” a la actividad 2.' },
          ],
          evidence: 'Lista de cotejo: la app registra los tres pasos; la nota “falta fecha” y la revisión “viernes” quedan en el cuaderno y no se capturan.',
          rubric: ['Presenté el plan suministrado en 20 segundos', 'Representé los dos roles suministrados', 'Registré la frase y agregué una fecha'] },
      ),
      S.choice(
        { id: 's06-pyd-1-7', fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.3.1'], ambito: 'emprender',
          prompt: 'Transferencia independiente: en otra mini feria, un proyecto tiene actividad y fecha, pero no responsable. ¿Qué revisión mejora ese proyecto?' },
        { options: [
          { id: 'a', text: 'Agregar “comisión de lectura” como responsable' },
          { id: 'b', text: 'Cambiar el color de la etiqueta' },
          { id: 'c', text: 'Aumentar el costo total sin explicación' },
        ], correct: ['a'] },
      ),
      S.choice(
        { id: 's06-pyd-1-8', fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:4.3.1'], prompt: 'Boleto de salida: una visitante pregunta quién hará la segunda actividad. ¿Qué acción muestra que la presentación ayudó a mejorar el proyecto?' },
        { options: [
          { id: 'a', text: 'Anotar la pregunta y precisar el responsable en el plan' },
          { id: 'b', text: 'Cambiar el color del título sin revisar el plan' },
          { id: 'c', text: 'Ignorar la pregunta porque la exposición ya terminó' },
        ], correct: ['a'] },
      ),
      S.tf(
        { id: 's06-pyd-1-9', fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:4.3.1'], prompt: 'Evalúa la conducta de una persona visitante durante un turno breve.' },
        { statements: [
          { text: 'Escucha sin interrumpir hasta que termina la explicación.', answer: true },
          { text: 'Pregunta por un dato del plan con lenguaje respetuoso.', answer: true },
          { text: 'Cambia por su cuenta lo escrito en el plan ajeno.', answer: false, why: 'La persona visitante aporta una pregunta o comentario; quien presenta decide y realiza la revisión.' },
        ] },
      ),
      cierre({ areas: ['pyd'], cnb: ['pyd:4.1.1', 'pyd:4.3.1'] },
        ['Presento un proyecto en 20 segundos', 'Doy retroalimentación respetuosa basada en un criterio', 'Mejoro un campo después de escuchar'],
        ['Haré preguntas que ayuden a precisar el plan', 'Registraré la retroalimentación antes de decidir una revisión'])
    ],
  }),
];
