/** Productividad y Desarrollo · Unidad 1 · Semana 8. */
import { lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's08-pyd-1', title: 'Conservar saberes con una ficha digital', icon: 'Archive', minutes: 14,
    gancho: 'Una práctica sin fuente puede perderse o deformarse. ¿Cómo conservarías su explicación con honestidad?',
    objetivos: ['Crear y guardar una ficha digital que documente una práctica comunitaria suministrada'],
    resumen: [
      'Documentar conserva conocimiento cuando registra qué se hace, para qué sirve y de qué fuente procede.',
      'El caso es suministrado y simulado: no demuestra una entrevista ni una acción realizada en una comunidad.',
      'La ficha digital se crea y guarda dentro de la lección como una acción real de conservación documental.',
      'Participar no exige materiales, salir del aula ni desplegar la ficha fuera de la app.',
    ],
    media: {
      id: 's08-pyd-1-ficha', kind: 'diagram', title: 'Ficha de conservación documental', aspect: '16:9',
      alt: 'Diagrama con campos de práctica, propósito, procedimiento, cuidado y fuente, seguido por un icono de guardar.',
      brief: 'Diagrama horizontal de cinco campos: nombre de la práctica, propósito, dos pasos, cuidado y fuente; termina en un icono de guardar. Rótulo visible: “Caso suministrado y simulado”. Target: public/media/s08-pyd-1-ficha.svg. Producción: 1600×900 px. Accesibilidad: alto contraste, orden numerado y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'conocer', title: 'Conservar también es documentar', prompt: 'Lee qué acción realizarás dentro de la lección.' },
        { icon: 'Archive', body: 'Crearás y guardarás una **ficha digital de conservación documental**. La fuente es un caso didáctico suministrado y simulado; no afirma trabajo externo.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', title: 'Procedimiento de la ficha', prompt: 'Aprende la secuencia antes de guardar.' },
        { icon: 'ListChecks', body: '**Selecciona** una práctica, **resume** propósito y pasos, **anota** un cuidado, **atribuye** la fuente y **guarda**. Así conservas conocimiento sin inventar experiencia comunitaria.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', title: 'Modelo suministrado', prompt: 'Observa cómo una ficha conserva una práctica sin afirmar que se ejecutó fuera de la app.' },
        { icon: 'FileText', problem: 'Paquete simulado: una comunidad registra el secado de semillas en sombra para transmitir el procedimiento.', steps: [
          { text: '**Práctica y propósito:** secado en sombra; reducir humedad antes de almacenar.' },
          { text: '**Procedimiento y cuidado:** extender, revisar y mantener lejos de agua; no ingerir materiales del caso.' },
          { text: '**Fuente:** “Tarjeta didáctica de práctica comunitaria, caso simulado”.' },
          { text: '**Acción:** guardar la ficha digital para conservar su explicación.' },
        ], answer: 'La ficha conserva información suministrada y deja claros sus límites.', tip: 'Práctica → propósito → pasos → cuidado → fuente → guardar.' },
      ),
      S.order(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Con ayuda, ordena el procedimiento para crear y guardar la ficha.', hint: 'La fuente se atribuye antes de guardar.', explain: 'Seleccionar, resumir, indicar cuidado, atribuir y guardar produce evidencia documental revisable.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'g1', text: 'Seleccionar una práctica del paquete' }, { id: 'g2', text: 'Resumir propósito y dos pasos' },
          { id: 'g3', text: 'Indicar un cuidado' }, { id: 'g4', text: 'Atribuir la fuente suministrada' },
          { id: 'g5', text: 'Guardar la ficha digital' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'La tarjeta no dice quién practica actualmente el procedimiento. ¿Cómo lo documentas?', hint: 'Conserva el dato y también su límite.', explain: 'La ficha dice “caso suministrado y simulado”; no inventa entrevista ni comunidad actual.' },
        { options: [
          { id: 'a', text: 'Rotulo el caso como suministrado y simulado' },
          { id: 'b', text: 'Invento el nombre de una comunidad', feedback: 'Eso convertiría la documentación en información falsa.' },
          { id: 'c', text: 'Afirmo que hice una entrevista', feedback: 'La actividad no incluye una entrevista.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Ejecuta la acción en la app: organiza la nueva ficha de captación de lluvia del paquete antes de guardarla.', explain: 'Esta organización conserva el propósito, el procedimiento, el cuidado y la fuente.' },
        { labels: { start: 'Encabezado', end: 'Cierre' }, items: [
          { id: 'a1', text: 'Práctica: captar lluvia en un recipiente limpio y cubierto' },
          { id: 'a2', text: 'Propósito: reservar agua para riego, no para beber' },
          { id: 'a3', text: 'Cuidado: mantener el recipiente cubierto' },
          { id: 'a4', text: 'Fuente: tarjeta didáctica suministrada, caso simulado' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:5.5.2'], ambito: 'hacer', prompt: 'Crea y guarda tu ficha digital: incluye práctica, propósito, dos pasos o cuidados y fuente suministrada. Esta ficha guardada es la acción realizada; no afirmes despliegue comunitario.', explain: 'La respuesta guardada queda como evidencia revisable de conservación documental.' },
        { minWords: 24, placeholder: 'Práctica… Propósito… Pasos o cuidados… Fuente suministrada…', model: 'Práctica: captación de lluvia. Propósito: reservar agua para riego. Mantener el recipiente limpio, cubierto y rotulado. Fuente: tarjeta didáctica suministrada, caso simulado.', rubric: ['Creo una ficha completa', 'Conservo procedimiento y cuidado', 'Atribuyo la fuente', 'No invento acción externa'] },
      ),
      S.order(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'Completa y guarda una ficha de conservación con fuente: aplica el procedimiento a una receta tintórea suministrada y ordena la decisión final.' },
        { labels: { start: 'Primero', end: 'Después' }, items: [
          { id: 'e1', text: 'Comprobar que el cuidado proviene de la tarjeta' },
          { id: 'e2', text: 'Agregar la fuente y el rótulo de caso simulado' },
          { id: 'e3', text: 'Guardar la ficha documental' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: 'Completa y guarda una ficha de conservación con fuente: aplica el procedimiento cuando una ficha nueva tiene nombre y pasos, pero carece de atribución. ¿Qué haces?' },
        { options: [
          { id: 'a', text: 'Añadir la tarjeta suministrada como fuente y volver a guardar' },
          { id: 'b', text: 'Publicarla como entrevista real' }, { id: 'c', text: 'Borrar el cuidado para que sea más corta' },
        ], correct: ['a'] },
      ),
    ],
  }),
];
