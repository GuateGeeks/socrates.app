/**
 * Expresión Artística · Unidad 1 · Semana 8 — Investigaciones biográficas de autores y compositores,
 * y su publicación.
 * Progresión: investigar la vida y obra de un artista (preguntas, fuentes, línea de tiempo, entrevista)
 * → publicar lo investigado (ficha biográfica, periódico mural, foro) con respeto y citando fuentes;
 * cierre de unidad con repaso espiral.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Investigar una biografía ───────────────────────── */
  lesson({
    id: 's08-art-1',
    title: 'La vida de un artista: investigar una biografía',
    icon: 'Search',
    minutes: 15,
    preparatory: true,
    gancho: 'Cada lunes cantas el Himno Nacional. ¿Sabes quién compuso su música, dónde nació y cómo fue su vida?',
    objetivos: [
      'Plantear preguntas guía para investigar la vida y la obra de un artista',
    ],
    resumen: [
      'Una biografía cuenta la vida de una persona: dónde y cuándo nació, cómo se formó, sus obras más importantes, su aporte y datos que la hacen única.',
      'Fuentes primarias: vienen directamente de la persona o de su tiempo (entrevistas, cartas, partituras, fotos). Fuentes secundarias: explican o resumen (libros, enciclopedias, artículos).',
      'Una fuente es confiable si dice quién la escribió, es de una institución seria o de un libro reconocido, y coincide con otras fuentes. Siempre anota tus fuentes.',
      'Ejemplos: Rafael Álvarez Ovalle (San Juan Comalapa, 1858-1946) compuso la música del Himno Nacional de Guatemala; Humberto Ak’abal (Momostenango, 1952-2019) fue un poeta k’iche’ que escribió en k’iche’ y en español.',
    ],
    media: {
      id: 's08-art-1-investigar', kind: 'animation', title: 'Detectives de biografías', aspect: '16:9', duration: 50,
      alt: 'Una niña con una lupa reúne pistas sobre un compositor: una partitura antigua, un libro de la biblioteca, una entrevista con su maestro y una línea de tiempo que se va llenando.',
      brief: 'Animación 2D de 50 s, estilo cuaderno de detective. Una niña (de rasgos mayas, uniforme escolar) investiga a un compositor guatemalteco del siglo XIX (figura genérica, sin retrato real). Aparecen tarjetas: "¿Dónde y cuándo nació?", "¿Qué estudió?", "¿Qué obras creó?", "¿Cuál fue su aporte?". Luego tres fuentes: libro de biblioteca (secundaria), partitura antigua (primaria), entrevista grabada con un maestro de música (primaria). Al final, una línea de tiempo con tres hitos. Narración en español, subtítulos. No usar fotografías reales de personas. Target: public/media/s08-art-1-investigar.mp4. Accesibilidad: subtítulos completos, transcripción y pausa suficiente para lectura.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['art'], cnb: [], ambito: 'conocer', title: 'Investigar vida y obra', prompt: 'Lee esta preparación para la publicación biográfica de la siguiente lección.' },
        { icon: 'Palette', body: 'Una biografía artística organiza origen, formación, obras, aporte y fuentes verificables.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['art'], cnb: [], ambito: 'conocer',
          prompt: '¿Quién compuso la **música** del Himno Nacional de Guatemala?',
          explain: 'La música es de **Rafael Álvarez Ovalle**, nacido en **San Juan Comalapa**, Chimaltenango. La letra es del poeta **José Joaquín Palma**. Hoy aprenderás a investigar la vida de artistas como ellos.' },
        { options: [
          { id: 'a', text: 'Rafael Álvarez Ovalle', icon: 'Music' },
          { id: 'b', text: 'José Joaquín Palma', icon: 'PenLine', feedback: 'Palma escribió la **letra**. La **música** es de otra persona.' },
          { id: 'c', text: 'Ludwig van Beethoven', icon: 'Globe', feedback: 'Beethoven fue un compositor alemán; no compuso nuestro himno.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: [], ambito: 'conocer', title: 'Preguntas guía de una biografía',
          prompt: 'Una **biografía** cuenta la vida de una persona. Para investigar, empieza con **preguntas guía**. Toca cada tarjeta.' },
        { icon: 'ClipboardList', body: 'Investigar a un artista es como armar un rompecabezas: cada pregunta es una pieza.', reveal: [
          { icon: 'MapPin', front: 'Origen', back: '¿**Dónde** y **cuándo** nació? ¿Cómo era su familia y su comunidad?' },
          { icon: 'GraduationCap', front: 'Formación', back: '¿Cómo aprendió su arte? ¿Quién le enseñó? ¿Qué dificultades enfrentó?' },
          { icon: 'Music', front: 'Obras', back: '¿Cuáles son sus **obras** más importantes (canciones, poemas, pinturas, tejidos)? ¿Cuándo las creó?' },
          { icon: 'Star', front: 'Aporte', back: '¿Por qué es importante para su comunidad, el país o el mundo? ¿Qué cambió gracias a su obra?' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: [], ambito: 'conocer', title: 'Fuentes confiables',
          prompt: 'Cada dato de tu biografía debe venir de una **fuente**. No todas son iguales. Toca cada tarjeta.' },
        { icon: 'Library', body: 'Una buena investigación usa **al menos dos fuentes** y compara si dicen lo mismo.', reveal: [
          { icon: 'FileText', front: 'Fuente primaria', back: 'Viene directamente de la persona o de su época: una **entrevista** con ella o con quien la conoció, sus **cartas**, **partituras**, **fotos** o documentos.' },
          { icon: 'BookOpen', front: 'Fuente secundaria', back: 'Alguien más la escribió para explicar: **libros**, **enciclopedias**, artículos de periódico o de instituciones culturales.' },
          { icon: 'ShieldCheck', front: '¿Es confiable?', back: 'Dice **quién** la escribió, es de una **institución** o libro reconocido, y **coincide** con otras fuentes. Desconfía de mensajes sin autor que circulan por redes.' },
          { icon: 'PenLine', front: 'Anota siempre', back: 'Escribe de dónde sacaste cada dato: título del libro, nombre de la persona entrevistada y fecha. Así otras personas pueden comprobarlo.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art', 'ccss'], cnb: [], ambito: 'hacer', title: 'Ejemplo resuelto: la ficha de Rafael Álvarez Ovalle',
          prompt: 'Mira cómo Mariela organiza lo que investigó con las preguntas guía.' },
        { icon: 'NotebookPen', problem: 'Mariela consultó un libro de historia de la música guatemalteca en la biblioteca municipal y entrevistó a su maestro de música. ¿Cómo arma su ficha?',
          steps: [
            { text: '**Origen:** nació en **1858** en **San Juan Comalapa**, Chimaltenango.' },
            { text: '**Formación:** aprendió música desde joven; fue músico, maestro y director de bandas. (Fuente: libro de la biblioteca.)' },
            { text: '**Obras:** su obra más conocida es la **música del Himno Nacional de Guatemala**, que se estrenó en **1897**. También compuso otras piezas.' },
            { text: '**Aporte:** dio al país una melodía que nos une en los actos cívicos. Murió en **1946**.' },
            { text: '**Fuentes:** "Libro de historia de la música, biblioteca municipal" y "entrevista a mi maestro de música, 3 de marzo".', why: 'Sin fuentes, nadie puede comprobar los datos.' },
          ],
          answer: 'Una ficha biográfica responde **origen, formación, obras y aporte**, y termina con las **fuentes**.',
          tip: 'Si dos fuentes dan fechas distintas, anótalo y consulta una tercera.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['art'], cnb: [], ambito: 'conocer',
          prompt: 'Clasifica cada fuente: ¿es **primaria** o **secundaria**?',
          hint: 'Primaria = viene directamente de la persona o de su época. Secundaria = alguien más lo explica después.',
          explain: 'Entrevistas, cartas y partituras originales son primarias. Libros, enciclopedias y artículos son secundarios.' },
        { buckets: [
          { id: 'p', label: 'Primaria', icon: 'FileText', color: 'var(--area-art)' },
          { id: 's', label: 'Secundaria', icon: 'BookOpen', color: 'var(--area-l1)' },
        ], items: [
          { id: 'f1', text: 'Entrevista a la marimbista cuya vida investigas', bucket: 'p' },
          { id: 'f2', text: 'Enciclopedia de arte guatemalteco', bucket: 's' },
          { id: 'f3', text: 'Una partitura escrita a mano por el compositor', bucket: 'p' },
          { id: 'f4', text: 'Un artículo de periódico sobre un poeta', bucket: 's' },
          { id: 'f5', text: 'Una carta que escribió una pintora', bucket: 'p' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['art'], cnb: [], ambito: 'hacer',
          prompt: 'Recuerdas el **"Himno a la alegría"** de la semana 2. Es de **Ludwig van Beethoven**, compositor alemán. Ordena los hechos de su vida en una **línea de tiempo**.',
          explain: 'Beethoven nació en Bonn en 1770, se mudó a Viena en 1792, empezó a perder el oído a finales de esa década, estrenó su Novena Sinfonía (que incluye el "Himno a la alegría") en 1824, ya casi sordo, y murió en Viena en 1827.' },
        { items: [
          { id: 'a', text: '1770: nace en Bonn (Alemania)' },
          { id: 'b', text: '1792: se muda a Viena para estudiar y trabajar' },
          { id: 'c', text: 'Finales de la década de 1790: empieza a perder el oído' },
          { id: 'd', text: '1824: estrena la Novena Sinfonía, con el "Himno a la alegría"' },
          { id: 'e', text: '1827: muere en Viena' },
        ], labels: { start: 'Primero', end: 'Después' } },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: [], ambito: 'hacer',
          prompt: 'Para investigar al poeta **Humberto Ak’abal**, Ana encontró tres fuentes. ¿Cuál es la **más confiable**?',
          explain: 'Un libro publicado o una institución cultural reconocida, con autor identificado, es más confiable que un mensaje sin autor o un rumor.' },
        { options: [
          { id: 'a', text: 'Un libro de poesía guatemalteca publicado por una editorial, con datos del autor' },
          { id: 'b', text: 'Un mensaje reenviado en un chat, sin autor', feedback: 'No sabes quién lo escribió ni de dónde sacó los datos.' },
          { id: 'c', text: 'Lo que le contó un compañero que "lo leyó en algún lado"', feedback: 'Es un rumor: no se puede comprobar.' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['art'], cnb: [], ambito: 'hacer',
          prompt: 'Aplica las preguntas guía al paquete suministrado de Ana López, artista ficticia: une cada dato con su sección biográfica.',
          explain: 'Una investigación breve conserva el origen, la formación, la obra y el aporte, y deja visible qué ficha suministrada respalda cada dato.' },
        { leftTitle: 'Dato suministrado', rightTitle: 'Sección', pairs: [
          { id: 'a1', left: 'Nació en Totonicapán en 1978', right: 'Origen' },
          { id: 'a2', left: 'Aprendió grabado en un taller escolar', right: 'Formación' },
          { id: 'a3', left: 'Creó la serie Bosques de tinta', right: 'Obra' },
          { id: 'a4', left: 'Enseñó técnicas de impresión a jóvenes', right: 'Aporte' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: [], prompt: '¿Cuál de estas es una **fuente primaria** para la biografía de una tejedora?' },
        { options: [
          { id: 'a', text: 'Una entrevista con la tejedora' },
          { id: 'b', text: 'Un resumen en una enciclopedia' },
          { id: 'c', text: 'Lo que dice un anuncio publicitario' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['art'], cnb: [], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En una biografía conviene anotar de dónde sale cada dato.', answer: true },
          { text: 'Rafael Álvarez Ovalle compuso la música del Himno Nacional de Guatemala.', answer: true },
          { text: 'Un mensaje sin autor en redes sociales es una fuente muy confiable.', answer: false, why: 'Sin autor no se puede comprobar; hay que buscar fuentes reconocidas.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Publicar y compartir ───────────────────────── */
  lesson({
    id: 's08-art-2',
    title: 'Publicar lo investigado: periódico mural y foro',
    icon: 'Newspaper',
    minutes: 15,
    gancho: 'Ya investigaste la vida de un artista. Si esa información se queda en tu cuaderno, solo tú la conoces. ¿Cómo la compartirías con toda la escuela y la comunidad?',
    objetivos: [
      'Publicar y compartir una ficha biográfica breve, verificable y legible',
    ],
    resumen: [
      'Publicar es dar a conocer una investigación. Formas escolares: ficha biográfica, periódico mural, foro o presentación oral.',
      'Una ficha biográfica tiene: nombre, imagen o dibujo, origen, formación, obras, aporte, un dato curioso y fuentes.',
      'Un periódico mural tiene un título grande, secciones ordenadas, textos breves, imágenes con pie de foto y las fuentes de cada texto. Se aplican las reglas del cartel: contraste, letras legibles y espacio libre.',
      'En un foro, cada persona presenta en poco tiempo, habla claro, escucha sin interrumpir y responde preguntas con respeto. Se publica solo lo que la persona entrevistada autorizó.',
    ],
    media: {
      id: 's08-art-2-periodico', kind: 'image', title: 'Un periódico mural de artistas', aspect: '4:3',
      alt: 'Un periódico mural en el corredor de una escuela con el título "Artistas de nuestra tierra", cuatro fichas biográficas con dibujos, pies de foto y una franja de fuentes abajo.',
      brief: 'Ilustración de un periódico mural escolar sobre un tablero de corcho en un corredor de escuela pública guatemalteca. Título grande "Artistas de nuestra tierra" con letras recortadas. Cuatro fichas con dibujos (no fotos reales): un marimbista de pueblo, una tejedora, un poeta, un compositor del siglo XIX. Cada ficha con subtítulos (Origen, Obras, Aporte), un pie de foto y un recuadro "Fuentes". Una sección "¿Sabías que…?" y un buzón de preguntas. Colores con buen contraste, orden en columnas, espacio libre entre fichas. Target: public/media/s08-art-2-periodico.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['art'], cnb: ['art:4.3.2'], ambito: 'conocer', title: 'Publicar una biografía artística', prompt: 'Lee el propósito de una ficha biográfica.' },
        { icon: 'Newspaper', body: 'Una ficha biográfica publica vida, obra, aporte e imagen con pie, y mantiene visibles las fuentes.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['art'], cnb: ['art:4.3.2'], ambito: 'conocer',
          prompt: 'Observa el periódico mural. ¿Qué elemento permite a los lectores **comprobar** que la información es cierta?',
          explain: 'La franja de **fuentes**. Publicar con fuentes demuestra un trabajo serio y respetuoso.' },
        { options: [
          { id: 'a', text: 'El título grande', icon: 'Type', feedback: 'El título atrae la atención, pero no permite comprobar los datos.' },
          { id: 'b', text: 'Los dibujos de colores', icon: 'Palette', feedback: 'Los dibujos ilustran, pero no dicen de dónde salió la información.' },
          { id: 'c', text: 'Las fuentes al pie de cada ficha', icon: 'BookOpen' },
        ], correct: ['c'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:4.3.2'], ambito: 'conocer', title: 'Tres formas de publicar',
          prompt: '**Publicar** es dar a conocer tu investigación a otras personas. En la escuela puedes hacerlo de tres formas. Toca cada tarjeta.' },
        { icon: 'Megaphone', body: 'Elige la forma según tu público y tu espacio. Pueden combinarse.', reveal: [
          { icon: 'FileText', front: 'Ficha biográfica', back: 'Una hoja con **nombre, imagen, origen, formación, obras, aporte, dato curioso y fuentes**. Es la base de las otras dos.' },
          { icon: 'Newspaper', front: 'Periódico mural', back: 'Varias fichas y textos organizados en un tablero o pared, con **título**, **secciones** e **imágenes con pie de foto**.' },
          { icon: 'MessagesSquare', front: 'Foro', back: 'Una reunión donde cada persona **presenta** brevemente su investigación y el público **pregunta** y comenta con respeto.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:4.3.2'], ambito: 'hacer', title: 'Cómo armar el periódico mural',
          prompt: 'Un periódico mural es también una **obra gráfica**: usa lo que aprendiste sobre carteles. Toca cada paso.' },
        { icon: 'Newspaper', body: 'Recuerda las reglas del cartel: **contraste**, **letras legibles** y **espacio libre**.', reveal: [
          { icon: 'Type', front: '1. Título', back: 'Grande, arriba y legible de lejos: "Artistas de nuestra tierra".' },
          { icon: 'LayoutGrid', front: '2. Secciones', back: 'Organiza en columnas: artistas de la **comunidad**, del **país** y del **mundo**. Deja espacio entre fichas.' },
          { icon: 'Image', front: '3. Imágenes', back: 'Dibujos o fotos **con permiso**, cada una con un **pie de foto**: quién es y qué hace.' },
          { icon: 'BookOpen', front: '4. Fuentes', back: 'Debajo de cada ficha, la lista de fuentes. Así cualquier persona puede comprobar.' },
          { icon: 'MessageCircle', front: '5. Participación', back: 'Agrega un buzón o una hoja de "Preguntas y comentarios" para que el público participe.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art', 'l1'], cnb: ['art:4.3.2'], ambito: 'hacer', title: 'Ejemplo resuelto: de las notas a la ficha publicada',
          prompt: 'Mira cómo Pedro transforma las notas de su entrevista en una ficha para el periódico mural. (La artista es un ejemplo inventado.)' },
        { icon: 'NotebookPen', problem: 'Supongamos que Pedro entrevistó a **doña Tomasa**, marimbista de su aldea, de 68 años. Sus notas están desordenadas y muy largas. ¿Cómo las convierte en una ficha?',
          steps: [
            { text: '**Pide permiso** otra vez: "¿Puedo publicar su nombre, su edad y un dibujo suyo en la escuela?". Doña Tomasa acepta, pero pide que no se ponga su dirección.', why: 'Se publica solo lo que la persona autoriza.' },
            { text: '**Selecciona** lo más importante: aprendió marimba a los 10 años con su padre; toca en las fiestas patronales desde hace 50 años; enseña gratis a niñas y niños los sábados.' },
            { text: '**Redacta** en oraciones cortas bajo cada subtítulo: Origen, Formación, Obras, Aporte, ¿Sabías que…?' },
            { text: '**Ilustra** con un dibujo de doña Tomasa tocando, con pie de foto: "Doña Tomasa en la fiesta patronal".' },
            { text: '**Cierra** con la fuente: "Entrevista a doña Tomasa, marimbista, 12 de marzo".' },
          ],
          answer: 'Una ficha **breve, ordenada, ilustrada, con fuente y con permiso** de la persona.',
          tip: 'Pide a alguien que lea tu ficha antes de publicarla: si entiende todo en un minuto, está lista.' },
      ),
      S.order(
        { fase: 'construir', areas: ['art'], cnb: ['art:4.3.2'], ambito: 'hacer',
          prompt: 'Ordena los pasos para **publicar** una investigación biográfica.',
          hint: 'Primero se investiga, luego se organiza, después se comparte.',
          explain: 'Investigar con permiso → seleccionar y redactar → ilustrar y citar fuentes → montar el periódico mural → presentar en el foro.' },
        { items: [
          { id: 'a', text: 'Investigar con preguntas guía y pedir permiso' },
          { id: 'b', text: 'Seleccionar lo más importante y redactar la ficha' },
          { id: 'c', text: 'Ilustrar y agregar las fuentes' },
          { id: 'd', text: 'Montar el periódico mural' },
          { id: 'e', text: 'Presentar en el foro y responder preguntas' },
        ], labels: { start: 'Primero', end: 'Al final' } },
      ),
      S.reflect(
        { fase: 'aplicar', areas: ['art', 'fc'], cnb: [], ambito: 'convivir', prompt: 'Antes del foro biográfico, elige cómo escucharás una obra o trayectoria distinta de tus gustos sin calificar esta reflexión.' },
        { statements: ['Escucharé la presentación completa antes de opinar', 'Comentaré con respeto y razones'], commitments: ['Cuidaré que el foro no convierta una preferencia en burla'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['art', 'l1'], cnb: ['art:4.3.2'], ambito: 'hacer',
          prompt: 'Publica una **ficha biográfica con obra y fuente visible**, y guárdala para compartirla como evidencia docente. Usa solo el paquete suministrado: Humberto Ak’abal · nació en Momostenango en 1952 · poeta k’iche’ · escribió en k’iche’ y español · murió en 2019. No afirmes una exposición externa.' },
        { minWords: 24, placeholder: 'Humberto Ak’abal… Obra… Aporte… Fuente: paquete suministrado…',
          model: 'Humberto Ak’abal nació en Momostenango en 1952. Fue poeta k’iche’ y escribió en k’iche’ y español. Su obra difundió esa poesía. Fuente: paquete biográfico suministrado.',
          rubric: ['Publico origen, obra y aporte', 'Uso solo el paquete suministrado', 'Dejo visible la fuente'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:4.3.2'], ambito: 'conocer',
          prompt: '¿Qué jerarquía visual ayuda a leer la ficha biográfica sin convertir la decoración en evidencia?',
          explain: 'El nombre funciona como título; los hitos y la obra se agrupan en bloques breves; la fuente queda visible. La decoración no reemplaza los datos.' },
        { options: [
          { id: 'a', text: 'Nombre destacado, hitos ordenados, imagen con pie y fuente visible' },
          { id: 'b', text: 'Un título decorativo enorme y todos los datos en letra mínima', feedback: 'La información queda subordinada a la decoración y no puede leerse.' },
          { id: 'c', text: 'Una imagen sin pie y hechos sin fuente', feedback: 'La ficha pierde contexto y verificabilidad.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:4.3.2'], prompt: 'Publica y guarda una ficha biográfica con obra y fuente: ordena el procedimiento para una artista ficticia con datos verificados.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'e1', text: 'Seleccionar un hecho respaldado por el paquete' },
          { id: 'e2', text: 'Redactar origen, obra y aporte con claridad' },
          { id: 'e3', text: 'Agregar la fuente visible' },
          { id: 'e4', text: 'Guardar la ficha para compartirla como evidencia docente' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:4.3.2'], prompt: 'Al publicar y compartir otra ficha biográfica con obra y fuente visible, ¿qué decisión evita convertir decoración en evidencia?' },
        { options: [
          { id: 'a', text: 'Guardar origen, obra, aporte y fuente en campos legibles' },
          { id: 'b', text: 'Compartir solo un dibujo sin datos' },
          { id: 'c', text: 'Ocultar la fuente para ganar espacio' },
        ], correct: ['a'] },
      ),
      cierre({ areas: ['art'], cnb: ['art:4.3.2'] },
        ['Investigo la vida de un artista con preguntas guía y fuentes confiables', 'Publico una ficha biográfica clara y con fuentes', 'Presento y escucho con respeto en un foro'],
        ['Publicaré mi ficha en el periódico mural', 'Agradeceré a la persona que entrevisté', 'Seguiré descubriendo artistas de mi comunidad']),
    ],
  }),
];
