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
      'El plan escrito en papel o cuaderno reúne objetivo, dos actividades, responsables, fechas y un presupuesto pequeño.',
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
          prompt: 'Escribirán un plan breve en papel o cuaderno y harán un intercambio con una persona visitante.' },
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
      S.project(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.1.1'], ambito: 'emprender',
          prompt: 'En una hoja de papel o en tu cuaderno, escribe un plan para un proyecto pequeño de la escuela o comunidad.' },
        { goal: 'Producir un plan breve cuyas partes se apoyen entre sí.',
          steps: [
            { title: 'Objetivo', detail: 'Escribe un objetivo con verbo y un resultado alcanzable.' },
            { title: 'Actividad 1 y actividad 2', detail: 'Anota dos actividades; junto a cada una escribe un responsable y una fecha.' },
            { title: 'Presupuesto pequeño', detail: 'Completa dos rubros con cantidad, precio, subtotal y total. Usa precios ilustrativos o Q0 para un recurso reutilizado.' },
            { title: 'Etiqueta visual', detail: 'Reserva el espacio para una etiqueta breve que identifique el proyecto.' },
          ],
          evidence: 'Lista de cotejo del plan escrito en papel; esta actividad no captura sus campos.',
          rubric: ['El objetivo y las dos actividades se relacionan', 'Cada actividad tiene responsable y fecha', 'El presupuesto muestra subtotales y total', 'El plan cabe en una hoja o página del cuaderno'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.3.1'], ambito: 'hacer', title: 'Etiqueta visual concisa',
          prompt: 'Escribe una **etiqueta visual de 5 a 8 palabras** para identificar tu proyecto en el plan.' },
        { minWords: 5, placeholder: 'Libros que circulan en nuestro grado',
          model: 'Semillas locales para nuestro huerto escolar',
          rubric: ['Nombra el proyecto con claridad', 'Tiene entre 5 y 8 palabras'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.3.1'], ambito: 'emprender', title: 'Mini feria: una interacción y una mejora',
          prompt: 'Realicen una mini feria por parejas. Participen con respeto y anoten la retroalimentación en el plan de papel o cuaderno.' },
        { goal: 'Presentar el proyecto, recibir retroalimentación útil y mejorar un campo.',
          steps: [
            { title: 'Presentar', detail: 'La persona expositora usa 20 segundos para decir objetivo, dos acciones y costo total.' },
            { title: 'Visitar', detail: 'La persona visitante escucha y hace una pregunta relevante o un comentario basado en claridad, viabilidad o costo.' },
            { title: 'Registrar y revisar', detail: 'La persona expositora agradece, anota una frase de retroalimentación y revisa un campo del plan.' },
            { title: 'Cambiar roles', detail: 'Cambien roles y repitan una vez; cada estudiante presenta, visita y mejora su propio plan.' },
          ],
          evidence: 'Lista de cotejo: una frase anotada y un campo revisado en el papel; la actividad no captura el artefacto.',
          rubric: ['Presenté en 20 segundos', 'Mi intervención como visitante fue relevante y respetuosa', 'Registré una frase', 'Revisé un campo a partir de la retroalimentación'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:4.3.1'], ambito: 'emprender',
          prompt: 'Transferencia independiente: en una mini feria, una visitante señala que la actividad 2 no tiene fecha. ¿Qué evidencia demuestra que la retroalimentación mejoró el proyecto?' },
        { options: [
          { id: 'a', text: 'La observación quedó anotada y la actividad 2 ahora indica “viernes”' },
          { id: 'b', text: 'La presentación duró más tiempo, pero el plan quedó igual' },
          { id: 'c', text: 'La persona expositora agradeció, pero borró la actividad 2' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:4.3.1'], prompt: 'Boleto de salida: una visitante pregunta quién hará la segunda actividad. ¿Qué acción muestra que la presentación ayudó a mejorar el proyecto?' },
        { options: [
          { id: 'a', text: 'Anotar la pregunta y precisar el responsable en el plan' },
          { id: 'b', text: 'Cambiar el color del título sin revisar el plan' },
          { id: 'c', text: 'Ignorar la pregunta porque la exposición ya terminó' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:4.3.1'], prompt: 'Evalúa la conducta de una persona visitante durante un turno breve.' },
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
