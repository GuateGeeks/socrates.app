/**
 * Formación Ciudadana · Unidad 1 · Semana 4 — Semillas de vida y comunidad.
 * Progresión: reconocer el liderazgo democrático y el autoritario en organizaciones de la comunidad →
 * revisar críticamente, con criterios y datos, el desempeño de líderes locales y nacionales.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Liderazgo democrático y autoritario ───────────────────────── */
  lesson({
    id: 's04-fc-1',
    title: 'Liderazgo democrático y liderazgo autoritario',
    icon: 'Users',
    minutes: 14,
    gancho: 'En tu grado hay que decidir a dónde ir de excursión. ¿Prefieres que decida una sola persona o que todos opinen?',
    objetivos: [
      'Explicar qué es un liderazgo y qué organizaciones de la comunidad tienen líderes',
      'Distinguir las características del liderazgo democrático y del autoritario',
      'Reconocer qué tipo de liderazgo hay en situaciones reales',
    ],
    resumen: [
      'Un líder o una lideresa es una persona que guía a un grupo para lograr metas comunes. Hay líderes en el gobierno escolar, el COCODE, los comités, las cooperativas, las autoridades indígenas y el gobierno del país.',
      'El liderazgo democrático consulta, escucha, informa, rinde cuentas, reparte tareas, acepta críticas y respeta las reglas y los periodos de su cargo.',
      'El liderazgo autoritario decide solo, impone, oculta información, castiga a quien opina distinto y quiere quedarse siempre en el poder.',
      'Liderar no es mandar: es servir al grupo. Un buen liderazgo hace que todas las personas participen.',
    ],
    media: {
      id: 's04-fc-1-dos-reuniones', kind: 'image', title: 'Dos formas de dirigir', aspect: '16:9',
      alt: 'Dos reuniones comunitarias: en una, la presidenta escucha a vecinos que levantan la mano; en la otra, un hombre da órdenes mientras los demás callan.',
      brief: 'Ilustración en dos mitades, estilo plano. Izquierda, rotulada "Democrático": salón comunal con sillas en círculo, una presidenta de comité escribe en un papelógrafo las ideas de vecinas, vecinos y jóvenes que levantan la mano; hay un cartel "Informe de gastos". Derecha, rotulada "Autoritario": un líder de pie frente a filas de sillas, con el dedo levantado; los vecinos cruzados de brazos y en silencio; un cajón con candado. Personajes diversos (mayas, ladinos), sin caricaturas ni rasgos exagerados, sin símbolos partidarios.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'convivir',
          prompt: 'Hay que decidir a dónde irá tu grado de excursión. ¿Qué forma de decidir te parece **más justa**?',
          explain: 'Cuando todos opinan y se vota, la decisión es de todos y se cumple con más ganas. Esa es una forma **democrática** de dirigir. Hoy aprenderás a distinguirla de la forma **autoritaria**.' },
        { options: [
          { id: 'a', text: 'Escuchar propuestas, conversar y votar', icon: 'Vote' },
          { id: 'b', text: 'Que el más grande del grado decida solo', icon: 'User', feedback: 'Así una sola persona decide por todos. ¿Cómo se sentirían los demás?' },
          { id: 'c', text: 'Que nadie decida y no se vaya a ningún lado', icon: 'X', feedback: 'Sin decidir, el grupo pierde la oportunidad. Hace falta alguien que organice.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'conocer', title: '¿Qué es liderar?',
          prompt: 'Un **líder** o una **lideresa** guía a un grupo para lograr metas comunes. En tu comunidad hay muchas organizaciones con líderes. Toca cada tarjeta.' },
        { icon: 'Users', body: 'Liderar **no es mandar**: es **servir** al grupo. En Guatemala hay liderazgos en la escuela, la comunidad y el país.', reveal: [
          { icon: 'School', front: 'Gobierno escolar', back: 'Estudiantes elegidos por voto que organizan proyectos y representan a sus compañeros.' },
          { icon: 'Home', front: 'COCODE', back: 'Consejo Comunitario de Desarrollo: vecinos organizados que identifican necesidades y gestionan proyectos para su comunidad.' },
          { icon: 'Droplets', front: 'Comités y cooperativas', back: 'Comité de agua, comité de feria, cooperativa de agricultores o tejedoras: grupos que administran algo en común.' },
          { icon: 'Landmark', front: 'Autoridades indígenas', back: 'Por ejemplo, las alcaldías indígenas y los 48 Cantones de Totonicapán, que sirven a su comunidad según sus propias formas de organización.' },
          { icon: 'Flag', front: 'Municipio y país', back: 'En el municipio, la **municipalidad** (alcalde y concejo); en el país, el **Congreso de la República** y la **Presidencia**. Son autoridades elegidas por voto popular cada cuatro años.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'conocer', title: 'Dos estilos de liderazgo',
          prompt: 'No todos los líderes dirigen igual. Compara los dos estilos. Toca cada tarjeta.' },
        { icon: 'Scale', body: 'Una misma persona puede cambiar de estilo. Lo que cuenta son sus **acciones**, no lo que dice de sí misma.', reveal: [
          { icon: 'Vote', front: 'Democrático: decide', back: '**Consulta** y escucha antes de decidir; en temas importantes convoca a asamblea o a votación.' },
          { icon: 'FileText', front: 'Democrático: informa', back: '**Informa** a todos y **rinde cuentas**: explica en qué se gastó el dinero y qué se logró.' },
          { icon: 'Handshake', front: 'Democrático: comparte', back: 'Reparte tareas, **acepta críticas**, incluye a mujeres, jóvenes y personas mayores, y deja el cargo cuando termina su periodo.' },
          { icon: 'Gavel', front: 'Autoritario: impone', back: '**Decide solo** y da órdenes sin explicar. Castiga o ridiculiza a quien opina distinto.' },
          { icon: 'Lock', front: 'Autoritario: oculta', back: '**Esconde** la información y el uso del dinero. Quiere **quedarse siempre** en el cargo.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: 'Clasifica estas acciones de líderes de la comunidad.',
          hint: 'Pregúntate: ¿esta acción toma en cuenta al grupo e informa (democrático) o decide sola y esconde (autoritario)?',
          explain: 'Revisar el liderazgo no es atacar a las personas: es preguntar si sus decisiones toman en cuenta a toda la comunidad.' },
        { buckets: [
          { id: 'dem', label: 'Democrático', icon: 'Vote', color: 'var(--c-ok)' },
          { id: 'aut', label: 'Autoritario', icon: 'Gavel', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'l1', text: 'Convoca a asamblea antes de decidir cómo usar el agua', bucket: 'dem' },
          { id: 'l2', text: 'Informa cuánto dinero se gastó y en qué', bucket: 'dem' },
          { id: 'l3', text: 'Decide solo y amenaza a quien opina distinto', bucket: 'aut' },
          { id: 'l4', text: 'Escucha a mujeres, jóvenes y personas mayores', bucket: 'dem' },
          { id: 'l5', text: 'Oculta los documentos de los proyectos', bucket: 'aut' },
          { id: 'l6', text: 'Cambia las reglas para no dejar nunca el cargo', bucket: 'aut', feedback: 'Quedarse siempre en el poder impide que otras personas participen: es un rasgo autoritario.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto: ¿qué estilo es?',
          prompt: 'Mira cómo se identifica el estilo de liderazgo **con pruebas**, no con simpatías.' },
        { icon: 'Search', problem: 'Supongamos que don Rigoberto, presidente del comité de feria, **eligió solo** la marimba y los juegos, **no mostró** cuánto costaron y dijo: "El que no esté de acuerdo, que no venga a la feria".',
          steps: [
            { text: '**¿Cómo decidió?** Solo, sin consultar a nadie → rasgo **autoritario**.' },
            { text: '**¿Informó?** No mostró los costos → no **rindió cuentas** (autoritario).' },
            { text: '**¿Cómo trató a quien opinaba distinto?** Lo excluyó ("que no venga") → autoritario.', why: 'Un líder democrático escucha la crítica y la usa para mejorar.' },
            { text: '**Conclusión con pruebas:** tres acciones autoritarias y ninguna democrática.' },
          ],
          answer: 'El liderazgo de don Rigoberto en la feria fue **autoritario**. No decimos que sea "mala persona": revisamos sus **acciones como líder**.',
          tip: 'Critica las acciones, no a la persona. Así la crítica ayuda a mejorar.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: 'La presidenta de la cooperativa de tejedoras presenta cada mes un informe de ventas, pide ideas antes de comprar hilo y reparte el trabajo por turnos. Su liderazgo es…',
          explain: 'Informa (rinde cuentas), consulta y reparte tareas: tres rasgos del liderazgo **democrático**.' },
        { options: [
          { id: 'a', text: 'Democrático', icon: 'Vote' },
          { id: 'b', text: 'Autoritario', icon: 'Gavel', feedback: 'Fíjate: informa, consulta y reparte. Un líder autoritario haría lo contrario.' },
        ], correct: ['a'] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'convivir', prompt: 'Eres presidente o presidenta de tu grado. ¿Qué harías?' },
        { scene: { icon: 'Users', text: 'El grado ganó **Q200** en una venta de refacciones. Tú crees que lo mejor es comprar una pelota nueva, pero algunos compañeros quieren libros para el rincón de lectura.' },
          options: [
            { id: 'a', icon: 'Gavel', text: 'Comprar la pelota porque tú eres quien manda', consequence: 'Tienes pelota, pero varios compañeros se sienten ignorados y ya no quieren ayudar en la próxima venta.', values: ['Autoritarismo'], constructive: false },
            { id: 'b', icon: 'Vote', text: 'Presentar las dos opciones, escuchar razones y votar', consequence: 'Gana la opción de libros por pocos votos. Todos aceptan el resultado porque participaron.', values: ['Democracia', 'Respeto'], constructive: true },
            { id: 'c', icon: 'Handshake', text: 'Proponer dividir: Q100 para una pelota y Q100 para libros, y pedir que el grado lo apruebe', consequence: 'El grado aprueba el acuerdo y tú informas en un cartel qué se compró con cada quetzal.', values: ['Diálogo', 'Rendición de cuentas'], constructive: true },
          ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: 'Estas acciones ocurren en organizaciones **nacionales** y **locales**. ¿Muestran un liderazgo democrático o autoritario?',
          explain: 'Los mismos criterios sirven para un comité pequeño y para el gobierno del país: consultar, informar, respetar las reglas y dejar el cargo a tiempo.' },
        { buckets: [
          { id: 'dem', label: 'Democrático', icon: 'Vote', color: 'var(--c-ok)' },
          { id: 'aut', label: 'Autoritario', icon: 'Gavel', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'n1', text: 'Un alcalde publica en la municipalidad cuánto costó el puente', bucket: 'dem' },
          { id: 'n2', text: 'Un gobernante cierra un periódico porque lo criticó', bucket: 'aut' },
          { id: 'n3', text: 'Unas autoridades indígenas convocan a asamblea para decidir sobre el bosque comunal', bucket: 'dem' },
          { id: 'n4', text: 'Un diputado vota leyes sin explicar nunca sus razones a la población', bucket: 'aut' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: 'El presidente del COCODE decide solo en qué gastar el dinero de un proyecto y no informa a los vecinos. Su liderazgo es…' },
        { options: [
          { id: 'a', text: 'Autoritario' },
          { id: 'b', text: 'Democrático' },
          { id: 'c', text: 'Participativo' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Un líder democrático rinde cuentas: informa qué hizo y cómo usó el dinero.', answer: true },
          { text: 'Liderar significa mandar sin escuchar a nadie.', answer: false, why: 'Liderar es servir y guiar al grupo, escuchando a todos.' },
          { text: 'Quedarse siempre en el cargo es un rasgo del liderazgo autoritario.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Revisión crítica del desempeño ───────────────────────── */
  lesson({
    id: 's04-fc-2',
    title: 'Revisar con criterios a quienes nos dirigen',
    icon: 'ClipboardCheck',
    minutes: 15,
    gancho: 'Si alguien de tu comunidad prometió arreglar el camino, ¿cómo sabes si cumplió? ¿Basta con lo que dicen los rumores?',
    objetivos: [
      'Usar una lista de criterios para revisar el desempeño de un liderazgo',
      'Distinguir una crítica basada en hechos de un ataque o un rumor',
      'Conocer herramientas ciudadanas para revisar a las autoridades: preguntar, pedir información y votar',
    ],
    resumen: [
      'Revisar críticamente un liderazgo es evaluar sus acciones con criterios y hechos, no con rumores ni insultos.',
      'Cinco criterios: ¿consulta antes de decidir?, ¿informa y rinde cuentas?, ¿cumple lo que prometió?, ¿incluye a todas las personas?, ¿respeta las reglas y la ley?',
      'Una buena crítica describe un hecho, lo compara con un criterio y propone una mejora.',
      'La ciudadanía puede revisar a sus autoridades: participar en asambleas, pedir información pública (lo permite la Ley de Acceso a la Información Pública) y votar de forma informada. La Contraloría General de Cuentas revisa el uso del dinero público.',
    ],
    media: {
      id: 's04-fc-2-lista-cotejo', kind: 'diagram', title: 'La lista para revisar un liderazgo', aspect: '3:4',
      alt: 'Una hoja de lista de cotejo con cinco criterios y casillas de sí o no, y una lupa sobre ella.',
      brief: 'Diagrama tipo hoja de cuaderno con título "¿Cómo lidera?". Cinco filas con ícono y casillas "Sí / No": (1) Consulta antes de decidir (ícono de mano levantada); (2) Informa y rinde cuentas (hoja con monedas); (3) Cumple lo que prometió (check); (4) Incluye a todas las personas (grupo diverso); (5) Respeta las reglas y la ley (balanza). Al pie: "Hecho → criterio → propuesta". Una lupa en la esquina. Estilo limpio, fondo claro, letras grandes.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'conocer',
          prompt: 'Se dice en la tienda que "el comité se robó el dinero del camino". ¿Qué deberías hacer **antes** de repetirlo?',
          explain: 'Un rumor no es una prueba. Para revisar un liderazgo de forma justa, se buscan **hechos**: documentos, informes, preguntas directas. Hoy aprenderás a hacerlo con criterios.' },
        { options: [
          { id: 'a', text: 'Buscar información: preguntar al comité por el informe de gastos', icon: 'Search' },
          { id: 'b', text: 'Contárselo a todos los vecinos de inmediato', icon: 'Megaphone', feedback: 'Si el rumor es falso, se daña a personas inocentes. Primero hay que buscar hechos.' },
          { id: 'c', text: 'Escribir un insulto en las redes sociales', icon: 'Smartphone', feedback: 'Un insulto no revisa nada y puede ser injusto. La crítica útil se basa en hechos.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'conocer', title: 'Cinco criterios para revisar un liderazgo',
          prompt: '**Revisar críticamente** es evaluar las acciones de un líder comparándolas con **criterios** claros. Toca cada criterio.' },
        { icon: 'ClipboardCheck', body: 'Estos cinco criterios sirven igual para el gobierno escolar, un comité, la municipalidad o el Congreso.', reveal: [
          { icon: 'Hand', front: '1. Consulta', back: '¿Pregunta y escucha a las personas antes de decidir cosas importantes?' },
          { icon: 'FileText', front: '2. Rinde cuentas', back: '¿Informa qué hizo, cuánto gastó y en qué? ¿Muestra documentos?' },
          { icon: 'Check', front: '3. Cumple', back: '¿Hizo lo que prometió? ¿En el tiempo acordado?' },
          { icon: 'Users', front: '4. Incluye', back: '¿Toma en cuenta a mujeres, jóvenes, personas mayores, personas con discapacidad y a todos los pueblos?' },
          { icon: 'Scale', front: '5. Respeta la ley', back: '¿Sigue las reglas de la organización y las leyes del país? ¿Deja el cargo al terminar su periodo?' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'convivir', title: 'Crítica útil o ataque',
          prompt: 'Criticar es un **derecho y una responsabilidad** ciudadana, pero hay formas que ayudan y formas que dañan. Toca cada tarjeta.' },
        { icon: 'MessageCircle', body: 'Una **crítica útil** tiene tres partes: **hecho** (qué pasó) → **criterio** (qué debería pasar) → **propuesta** (cómo mejorar).', reveal: [
          { icon: 'ThumbsUp', front: 'Crítica útil', back: '"El comité no ha presentado el informe de gastos en seis meses (hecho). Un buen liderazgo rinde cuentas (criterio). Pedimos que lo presente en la próxima asamblea (propuesta)."' },
          { icon: 'X', front: 'Ataque', back: '"¡Todos los del comité son unos ladrones!" No da hechos, generaliza e insulta. No ayuda a mejorar y puede ser injusto.' },
          { icon: 'Ear', front: 'Rumor', back: '"Dicen que…". Información sin fuente ni prueba. Antes de repetirla, hay que verificarla.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: 'Clasifica cada comentario sobre un líder: ¿es una **crítica útil** o un **ataque o rumor**?',
          hint: 'Una crítica útil menciona un hecho concreto y, de preferencia, propone algo. Un ataque insulta o generaliza; un rumor no tiene prueba.',
          explain: 'La crítica útil se basa en hechos verificables y busca mejorar; el ataque y el rumor dañan la convivencia y no resuelven nada.' },
        { buckets: [
          { id: 'ok', label: 'Crítica útil', icon: 'ThumbsUp', color: 'var(--c-ok)' },
          { id: 'no', label: 'Ataque o rumor', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'c1', text: '"La presidenta prometió reparar la cancha en marzo y en junio sigue igual. Proponemos pedirle un calendario."', bucket: 'ok' },
          { id: 'c2', text: '"Dicen que el alcalde tiene tres carros nuevos."', bucket: 'no', feedback: '"Dicen que" sin fuente es un rumor. Habría que verificarlo con información pública.' },
          { id: 'c3', text: '"Ese presidente del grado es un tonto."', bucket: 'no' },
          { id: 'c4', text: '"En la asamblea no dejaron hablar a las mujeres. Sugerimos una lista de turnos para que todos opinen."', bucket: 'ok' },
          { id: 'c5', text: '"Todos los políticos son iguales."', bucket: 'no', feedback: 'Generaliza y no permite distinguir a quien hace bien su trabajo de quien no.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto: revisar al comité de agua',
          prompt: 'Así se usa la lista de cinco criterios con un caso. Revela cada paso.' },
        { icon: 'Droplets', problem: 'Supongamos estos **hechos** sobre el comité de agua de la aldea Los Cipreses: (1) hizo asamblea antes de subir la cuota; (2) presentó un informe de gastos con recibos; (3) prometió reparar la tubería en un mes y tardó cuatro; (4) solo participan hombres en la directiva; (5) cambió a su directiva cuando terminó su periodo.',
          steps: [
            { text: 'Criterio 1, consulta: **sí** (hizo asamblea).' },
            { text: 'Criterio 2, rinde cuentas: **sí** (informe con recibos).' },
            { text: 'Criterio 3, cumple: **no del todo** (tardó cuatro meses en lugar de uno).' },
            { text: 'Criterio 4, incluye: **no** (no hay mujeres en la directiva).', why: 'Las mujeres usan y acarrean el agua a diario: su voz es necesaria en el comité.' },
            { text: 'Criterio 5, respeta las reglas: **sí** (cambió la directiva a tiempo).' },
          ],
          answer: 'El comité cumple **3 de 5** criterios: es un liderazgo mayormente democrático que debe mejorar en **cumplir a tiempo** e **incluir a mujeres**.',
          tip: 'Una revisión justa reconoce lo que se hace bien y propone mejoras concretas.' },
      ),
      S.number(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'hacer',
          prompt: 'Revisa al gobierno escolar de una escuela con los cinco criterios. **Hechos:** eligió los proyectos votando en cada grado; no ha informado cuánto dinero recaudó en la kermés; terminó el mural que prometió; su comisión de deportes incluye niñas y niños; respeta el reglamento de la escuela. ¿Cuántos criterios **cumple**?',
          explain: 'Consulta ✔, rinde cuentas ✘, cumple ✔, incluye ✔, respeta reglas ✔ → cumple **4 de 5**. Debe mejorar en informar el dinero de la kermés.' },
        { answer: 4, unit: 'de 5 criterios', misconceptions: [
          { value: 5, msg: 'Revisa el criterio de rendir cuentas: ¿informó el dinero de la kermés?' },
          { value: 3, msg: 'Revisa otra vez: votar en cada grado es consultar, y terminar el mural es cumplir.' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'conocer', prompt: 'Lee sobre las herramientas que tiene la ciudadanía para revisar a las autoridades del país y responde.' },
        { genre: 'Texto informativo', heading: 'La ciudadanía también vigila',
          passage: 'En Guatemala, la población elige por voto a sus autoridades: al presidente o presidenta, a los diputados del Congreso y a los alcaldes y concejos municipales. Estos cargos duran **cuatro años**. Pero la participación ciudadana no termina el día de la elección.\n\nLa **Ley de Acceso a la Información Pública** permite que cualquier persona pida a las instituciones del Estado información sobre cómo usan el dinero y qué proyectos realizan. La **Contraloría General de Cuentas** revisa el uso de los fondos públicos. En las comunidades, los **COCODE** y las asambleas permiten que los vecinos pregunten y propongan.\n\nCon esa información, la gente puede revisar si sus autoridades consultan, rinden cuentas, cumplen, incluyen a todos y respetan la ley. Así, en la próxima elección, el voto puede ser **informado** y no solo por simpatía o por un regalo.',
          questions: [
            { q: '¿Cada cuánto se elige a las autoridades nacionales y municipales en Guatemala?', options: [
              { id: 'a', text: 'Cada cuatro años' },
              { id: 'b', text: 'Cada año' },
              { id: 'c', text: 'Nunca, son para siempre' },
            ], correct: 'a' },
            { q: '¿Qué permite la Ley de Acceso a la Información Pública?', options: [
              { id: 'a', text: 'Que cualquier persona pida información sobre cómo el Estado usa el dinero y sus proyectos' },
              { id: 'b', text: 'Que las autoridades escondan sus gastos' },
              { id: 'c', text: 'Que solo los diputados sepan lo que pasa' },
            ], correct: 'a' },
            { q: '¿Qué significa votar de forma "informada"?', options: [
              { id: 'a', text: 'Elegir después de revisar lo que cada candidato hizo y propone' },
              { id: 'b', text: 'Votar por quien regala más cosas' },
              { id: 'c', text: 'Votar por el más famoso' },
            ], correct: 'a', why: 'Un voto informado se basa en hechos y propuestas, no en regalos ni simpatías.' },
          ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'hacer',
          prompt: 'Vas a **entrevistar** a una persona que lidera una organización de tu comunidad (COCODE, comité, cooperativa, iglesia, gobierno escolar). Escribe **tres preguntas abiertas** basadas en los criterios, y di qué criterio revisa cada una.' },
        { minWords: 30, placeholder: '1. ¿…? (criterio: …)',
          model: '1. ¿Cómo toman las decisiones importantes en el comité? (criterio: consulta) 2. ¿De qué forma informan a la comunidad sobre el dinero y los proyectos? (criterio: rinde cuentas) 3. ¿Cómo participan las mujeres y los jóvenes en la directiva? (criterio: incluye). Anotaré las respuestas en mi cuaderno con la fecha de la entrevista.',
          rubric: ['Escribí tres preguntas abiertas (no se responden solo con sí o no)', 'Cada pregunta revisa un criterio distinto', 'Las preguntas son respetuosas', 'Dije cómo registraré las respuestas'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: '¿Cuál de estas frases es una **crítica útil** al gobierno escolar?' },
        { options: [
          { id: 'a', text: '"No han informado cuánto se recaudó en la venta; pedimos que lo publiquen en el periódico mural."' },
          { id: 'b', text: '"El gobierno escolar no sirve para nada."' },
          { id: 'c', text: '"Dicen que la tesorera se quedó con el dinero."' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: 'Une cada hecho con el **criterio** que revisa.' },
        { leftTitle: 'Hecho', rightTitle: 'Criterio', pairs: [
          { id: 'h1', left: 'El alcalde publicó el costo del puente', right: 'Rinde cuentas' },
          { id: 'h2', left: 'La presidenta preguntó a los vecinos antes de decidir', right: 'Consulta' },
          { id: 'h3', left: 'El comité terminó la obra en la fecha prometida', right: 'Cumple' },
          { id: 'h4', left: 'La directiva tiene mujeres, jóvenes y ancianos', right: 'Incluye' },
        ] },
      ),
      cierre({ areas: ['fc'], cnb: ['fc:3.1.1'] },
        ['Distingo el liderazgo democrático del autoritario', 'Reviso un liderazgo con cinco criterios y hechos', 'Diferencio una crítica útil de un ataque o un rumor'],
        ['Haré mi entrevista a una persona que lidera en mi comunidad', 'Antes de repetir un rumor, buscaré si es verdad', 'Cuando dirija un grupo, consultaré e informaré a todos']),
    ],
  }),
];
