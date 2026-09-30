import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 4 · Unidad 1 "Conociendo nuestras raíces"
 * Tema generador: Semillas de vida y comunidad
 * Cierre semanal (v3): las 27 lecciones de materia viven en src/content/sexto/materias/<area>/u1/s04.ts.
 * El viernes: Taller "La asamblea de la milpa, en títeres" (L1 + Formación Ciudadana + Matemáticas +
 * Expresión Artística) y Reto semanal.
 */
export default semana({
  id: 's04',
  unidad: 1,
  semana: 4,
  kind: 'aprendizaje',
  temaGenerador: 'Semillas de vida y comunidad',
  title: 'Semillas de vida y comunidad',
  subtitle: 'Pubertad y vida responsable, trabajo y liderazgo, prismas y pirámides, teatro y títeres, y leer la naturaleza antes de sembrar',
  icon: 'Sprout',
  color: 'var(--area-pyd)',
  contexto: 'El Popol Wuj cuenta que las primeras personas fueron hechas de maíz, y cada familia que siembra milpa observa el clima, el suelo y las lluvias antes de poner la semilla. Esta semana hablarás de semillas de vida y de comunidad: los cambios de la pubertad y las células que dan origen a la vida, el pudor y la paternidad responsable; el trabajo formal e informal, los roles de la mujer a través del tiempo, las Ciencias Sociales que ayudan a entender la sociedad y los liderazgos que hacen participar o que imponen. También construirás prismas, pirámides, cilindros y conos, harás teatro con guiones, juego de roles, pantomima y títeres, escucharás música con atención, cuidarás tu voz al recitar, descubrirás cómo se escribe y cómo suena el inglés y lanzarás con distintas técnicas.',
  ejes: ['vida-familiar', 'sostenible', 'vida-ciudadana', 'multiculturalidad'],
  media: {
    id: 's04-portada', kind: 'video', title: 'La milpa: una semilla, una comunidad', aspect: '16:9', duration: 60,
    alt: 'Secuencia que muestra una semilla de maíz que germina, crece en una milpa y termina en tortillas compartidas por una familia.',
    brief: 'Video de 60 s con timelapse (o animación) de una semilla de maíz que germina, crece junto a frijol y ayote (milpa), espiga y da mazorcas. Luego: cosecha familiar (manos, sin rostros identificables), mazorcas guardadas en una troje, nixtamal y tortillas en el comal. Sobreimpreso final: "Somos gente de maíz — Popol Wuj". Música de marimba y sonidos de campo. Sin marcas comerciales.',
  },
  badge: { id: 'medalla-s04', name: 'Guardián de la semilla', icon: 'Sprout', desc: 'Completaste la semana 4 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Viernes: Taller interdisciplinario ───────────────────────── */
    lesson({
      id: 's04-d5-taller',
      kind: 'taller',
      day: 5,
      title: 'Taller: la asamblea de la milpa, en títeres',
      icon: 'Drama',
      minutes: 19,
      gancho: '¿Cómo se vería en un teatro de títeres la diferencia entre un líder que impone y una lideresa que escucha?',
      objetivos: [
        'Reconocer el liderazgo democrático y el autoritario en los personajes de una obra',
        'Escribir una escena con el formato de guion teatral: nombres en mayúsculas y acotaciones',
        'Preparar el teatrino y la música de la obra con lo aprendido sobre sólidos y escucha musical',
      ],
      resumen: [
        'El liderazgo democrático consulta, informa, rinde cuentas y reparte tareas; el autoritario decide solo, oculta información y calla a quien opina distinto.',
        'Una crítica útil describe un hecho, lo compara con un criterio y propone una mejora; un rumor o un insulto no ayudan.',
        'En el guion, el nombre del personaje va en MAYÚSCULAS seguido de dos puntos, y las acotaciones van entre paréntesis y en cursiva.',
        'Pestañas necesarias = aristas del sólido − aristas que se doblan. La música de cada escena se elige por su tempo, su intensidad y su carácter.',
      ],
      media: {
        id: 's04-d5-taller-teatrino', kind: 'image', title: 'El teatrino de la asamblea', aspect: '4:3',
        alt: 'Teatrino hecho con una caja de cartón, con decorado de milpa y volcanes; en la ventana, dos títeres de calcetín: un señor con sombrero que golpea una mesita y una señora con güipil que muestra un cuaderno. A un lado, una troje en forma de cilindro con techo de pirámide.',
        brief: 'Ilustración plana, colores cálidos. Un teatrino hecho con una caja de cartón grande (prisma rectangular) con una ventana recortada al frente y cortinas de tela típica. Decorado pintado al fondo: milpa, volcanes y un salón comunal. En la ventana, dos títeres de guante hechos con calcetines: DON ROMUALDO (sombrero, cara enojada, golpea una mesita de cartón) y DOÑA CANDELARIA (güipil, sonrisa tranquila, muestra un cuaderno abierto). A la izquierda del teatrino, una troje de utilería: cilindro de cartulina con techo de pirámide hexagonal. Abajo, un bote con semillas (efecto de lluvia) y una marimba de juguete. Sin rostros de niños.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1', 'fc', 'mat', 'art'], cnb: ['l1:5.1.8', 'fc:3.1.1'], ambito: 'convivir', title: 'Una obra para la feria escolar',
            prompt: 'Tu grado presentará en la feria una obra de títeres: **"La asamblea de la milpa"**. En una aldea, el comité de la milpa comunitaria debe decidir qué semilla comprar. **DON ROMUALDO** decide solo; **DOÑA CANDELARIA** quiere escuchar a todos. Toca cada tarjeta para ver qué harás hoy.' },
          { icon: 'Drama', body: 'Hoy vas a **usar** lo que aprendiste esta semana para preparar la obra completa.', reveal: [
            { icon: 'Users', front: 'Formación Ciudadana', back: 'Reconocer el **liderazgo democrático** y el **autoritario** en los personajes, y escribir una **crítica útil**.' },
            { icon: 'ScrollText', front: 'Comunicación y Lenguaje', back: 'Escribir el guion con su **tipografía** y elegir los **títeres**.' },
            { icon: 'Box', front: 'Matemáticas', back: 'Construir la troje de utilería: **desarrollos planos** y **pestañas**.' },
            { icon: 'Music', front: 'Expresión Artística', back: 'Elegir la **música** de cada escena escuchando con atención y con criterio.' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['fc', 'l1'], cnb: ['fc:3.1.1', 'l1:5.1.8'], ambito: 'convivir',
            prompt: 'Lee la primera escena del guion y responde.' },
          { heading: 'La asamblea de la milpa — Escena 1', genre: 'Guion teatral',
            passage: '**PERSONAJES:** DON ROMUALDO, presidente del comité. DOÑA CANDELARIA, vecina que siembra desde niña. SEBASTIÁN, joven de la aldea.\n\n_(Salón comunal, de noche. Los vecinos llegan con sus candelas y se sientan.)_\n\n**DON ROMUALDO:** _(golpea la mesa)_ ¡Silencio! Ya decidí: este año el comité compra la semilla en la ciudad. No hay nada que discutir.\n\n**DOÑA CANDELARIA:** _(levanta la mano, tranquila)_ Don Romualdo, ¿nos puede decir cuánto costará y de dónde saldrá el dinero?\n\n**DON ROMUALDO:** _(le da la espalda)_ Eso no le importa a nadie. Aquí mando yo.\n\n**SEBASTIÁN:** _(en voz baja, al público)_ Y el año pasado tampoco nos dijo en qué gastó las cuotas…\n\n_(Se apagan las candelas.)_',
            questions: [
              { q: '¿Qué hace DON ROMUALDO que muestra un liderazgo **autoritario**?', options: [
                { id: 'a', text: 'Decide solo y no deja opinar a los vecinos' },
                { id: 'b', text: 'Convoca a una asamblea para escuchar ideas' },
                { id: 'c', text: 'Explica en qué se gastó el dinero' },
              ], correct: 'a', why: 'Dice "Ya decidí" y "Aquí mando yo": impone su decisión y no acepta preguntas.' },
              { q: '¿Qué pide DOÑA CANDELARIA?', options: [
                { id: 'a', text: 'Que el comité informe cuánto costará y de dónde saldrá el dinero' },
                { id: 'b', text: 'Que la nombren presidenta ese mismo día' },
                { id: 'c', text: 'Que no se siembre este año' },
              ], correct: 'a', why: 'Pide información: rendir cuentas es un rasgo del liderazgo democrático.' },
              { q: 'En el guion, _(golpea la mesa)_ es…', options: [
                { id: 'a', text: 'Una acotación: indica lo que hace el personaje' },
                { id: 'b', text: 'Un diálogo que DON ROMUALDO dice en voz alta' },
                { id: 'c', text: 'El nombre de un personaje' },
              ], correct: 'a', why: 'Las acotaciones van entre paréntesis y en cursiva, y no se leen en voz alta.' },
            ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'convivir',
            prompt: 'En la escena 2, la asamblea elige a **DOÑA CANDELARIA** como nueva presidenta. El grupo decide qué hará su títere… y qué hacía DON ROMUALDO. Clasifica cada acción.',
            hint: 'Pregúntate: ¿esta acción hace participar a las personas o las deja fuera?',
            explain: 'Liderar no es mandar: es servir al grupo. Consultar, informar, repartir tareas y escuchar a todas las personas hace que la comunidad participe.' },
          { buckets: [
            { id: 'dem', label: 'Liderazgo democrático', icon: 'Vote', color: 'var(--c-ok)' },
            { id: 'aut', label: 'Liderazgo autoritario', icon: 'Gavel', color: 'var(--c-hint)' },
          ], items: [
            { id: 'a1', text: 'Pregunta a la asamblea qué semilla prefiere cada familia', bucket: 'dem' },
            { id: 'a2', text: 'Lee en voz alta el cuaderno de cuentas del comité', bucket: 'dem' },
            { id: 'a3', text: 'Reparte las tareas de la siembra por turnos', bucket: 'dem' },
            { id: 'a4', text: 'Escucha a jóvenes, mujeres y personas mayores', bucket: 'dem' },
            { id: 'a5', text: 'Cambia el reglamento para no entregar nunca el cargo', bucket: 'aut', feedback: 'Querer quedarse siempre en el poder es un rasgo autoritario.' },
            { id: 'a6', text: 'Le quita la palabra a quien no está de acuerdo', bucket: 'aut' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'convivir',
            prompt: 'En la escena 2, SEBASTIÁN quiere **criticar** a DON ROMUALDO frente a la asamblea. ¿Cuál es una **crítica útil**?',
            hint: 'Una crítica útil tiene tres partes: un hecho, un criterio y una propuesta.',
            explain: 'La opción a describe un hecho (no informó), lo compara con un criterio (rendir cuentas) y propone una mejora (presentar el cuaderno). Así se revisa un liderazgo sin rumores ni insultos.' },
          { options: [
            { id: 'a', text: '"Usted no informó en qué se gastaron las cuotas del año pasado, y un comité debe rendir cuentas. Le pedimos presentar el cuaderno en la próxima asamblea."', icon: 'ClipboardCheck' },
            { id: 'b', text: '"Dicen en la tienda que usted se robó todo el dinero. ¡Es un ladrón!"', icon: 'MessageCircleWarning', feedback: 'Es un rumor y un insulto: no describe un hecho comprobado ni propone nada.' },
            { id: 'c', text: '"Usted me cae mal y ya."', icon: 'ThumbsDown', feedback: 'Es una opinión personal, sin hechos ni criterio.' },
          ], correct: ['a'] },
        ),
        S.highlight(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer',
            prompt: 'Este es un fragmento de la escena 2. Toca todas las **acotaciones** (las indicaciones para actuar, no lo que dicen los personajes).',
            hint: 'Las acotaciones van entre paréntesis.',
            explain: 'Las acotaciones indican gestos, movimientos, tono de voz y sonidos. Quien maneja el títere las actúa, pero no las dice.' },
          { target: 'acotaciones', text: 'DOÑA CANDELARIA: {(abre un cuaderno y lo muestra al público)} Este es el cuaderno de cuentas. Aquí dice en qué se gastó cada centavo.\nSEBASTIÁN: {(sorprendido, se acerca)} ¿Y lo podemos revisar todos?\n{(Suena la lluvia con el bote de semillas.)}\nDOÑA CANDELARIA: {(sonríe)} Claro. Y ahora, ¿qué propone cada familia?' },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer',
            prompt: 'En la escena 3, DOÑA CANDELARIA reparte las tareas **mientras señala a cada familia**. ¿Cómo se escribe en el guion?',
            hint: 'Nombre en mayúsculas y dos puntos; lo que hace, entre paréntesis y en cursiva; después, lo que dice.',
            explain: 'La tipografía del guion separa quién habla (MAYÚSCULAS), cómo actúa (acotación) y qué dice (diálogo).' },
          { options: [
            { id: 'a', text: 'DOÑA CANDELARIA: _(señalando a cada familia)_ Los Pérez limpian el terreno y los Cux traen la semilla.' },
            { id: 'b', text: 'Doña Candelaria señala a cada familia y dice que los Pérez limpian el terreno y los Cux traen la semilla.', feedback: 'Así se escribe un cuento (narración), no un guion.' },
            { id: 'c', text: 'doña candelaria - señalando a cada familia - los Pérez limpian el terreno…', feedback: 'Falta el nombre en mayúsculas con dos puntos, y la acotación debe ir entre paréntesis.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.8', 'l1:5.1.9'], ambito: 'hacer',
            prompt: 'El teatrino es una caja con una ventana. Quienes manejan los muñecos se esconden **debajo** de la ventana y **meten la mano** en ellos. ¿Qué tipo de muñeco usarán?',
            hint: 'Piensa desde dónde se mueve cada tipo de muñeco.',
            explain: 'El títere de guante se mete en la mano como un guante y se mueve desde abajo. Recuerda: mira al público y mueve la boca solo cuando habla.' },
          { options: [
            { id: 'a', text: 'Títeres de guante, hechos con calcetines', icon: 'Hand' },
            { id: 'b', text: 'Marionetas', icon: 'Link', feedback: 'Las marionetas se mueven desde arriba con hilos atados a una cruceta.' },
            { id: 'c', text: 'Títeres de sombra', icon: 'Lamp', feedback: 'Son siluetas que se proyectan con luz sobre una tela; necesitan otro tipo de escenario.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.7', 'mat:1.3.4'], ambito: 'hacer',
            prompt: 'La troje de utilería lleva un **techo en forma de pirámide hexagonal**. Su desarrollo es un hexágono con un triángulo pegado a cada lado: tiene **6 dobleces**. ¿Cuántas **pestañas** necesitas para armarla?',
            hint: 'Primero calcula las aristas de la pirámide (2 × lados de la base). Luego: pestañas = aristas − dobleces.',
            explain: 'La pirámide hexagonal tiene 2 × 6 = 12 aristas. Las 6 que ya están unidas en el desarrollo se doblan; las otras 12 − 6 = 6 necesitan pestaña.' },
          { answer: 6, unit: 'pestañas', misconceptions: [
            { value: 12, msg: 'Esas son todas las aristas. Las 6 que se doblan no necesitan pestaña.' },
            { value: 18, msg: '18 son las aristas de un prisma hexagonal. La pirámide tiene 2 × 6 = 12.' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.3.6'], ambito: 'hacer',
            prompt: 'El cuerpo de la troje es un **cilindro** de cartulina. ¿Qué desarrollo plano debes trazar?',
            hint: 'Imagina que desenrollas un tubo y le quitas las dos tapas.',
            explain: 'El cilindro se desarrolla en dos círculos y un rectángulo. El largo del rectángulo debe medir lo mismo que el contorno del círculo, para que al enrollarlo cierre justo.' },
          { options: [
            { id: 'a', text: 'Dos círculos y un rectángulo cuyo largo mide lo mismo que el contorno del círculo', icon: 'Cylinder' },
            { id: 'b', text: 'Un círculo y una figura en forma de abanico', icon: 'Cone', feedback: 'Ese es el desarrollo de un cono.' },
            { id: 'c', text: 'Dos círculos y tres rectángulos', icon: 'Shapes', feedback: 'Un cilindro tiene una sola superficie lateral curva: un solo rectángulo.' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'hacer',
            prompt: 'Cada momento de la obra necesita su música. Une cada momento con la pieza cuya **descripción** mejor lo acompaña.',
            hint: 'Fíjate en el tempo, la intensidad y el carácter (la emoción que transmite) de cada pieza.',
            explain: 'Describir la música por su timbre, tempo, intensidad y carácter te ayuda a elegirla con criterio: la música debe ayudar a contar la historia.' },
          { leftTitle: 'Momento', rightTitle: 'Música', pairs: [
            { id: 'm1', left: 'Los vecinos llegan a la asamblea conversando', right: 'Marimba suave, tempo moderado, carácter tranquilo' },
            { id: 'm2', left: 'DON ROMUALDO golpea la mesa y ordena silencio', right: 'Tambor fuerte y lento, carácter tenso' },
            { id: 'm3', left: 'Todos celebran la decisión y salen a sembrar', right: 'Son de marimba rápido y fuerte, carácter alegre' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['art', 'fc'], cnb: ['art:3.1.2'], ambito: 'ser', prompt: '¿Qué canción elegirían para el final de la obra?' },
          { scene: { icon: 'Music', text: 'El grupo busca una canción para el final. **Sebastián** propone una canción de moda, muy pegajosa, con una letra que se burla de las mujeres. **Ixchel** propone un son de marimba. **Keyla** propone una canción moderna con un mensaje positivo sobre trabajar juntos la tierra.' }, options: [
            { id: 'a', icon: 'ThumbsUp', text: 'Usar la canción de moda porque "a todos les gusta"', consequence: 'Algunas compañeras se sienten ofendidas. La letra contradice el mensaje de la obra, en la que una mujer lidera con respeto.', values: ['Consumo sin reflexión'], constructive: false },
            { id: 'b', icon: 'Music', text: 'Usar el son de marimba, que conecta con la vida de la aldea', consequence: 'El público reconoce la música y la obra se siente muy nuestra.', values: ['Identidad', 'Valoración cultural'], constructive: true },
            { id: 'c', icon: 'Headphones', text: 'Escuchar juntos las opciones, analizar las letras y combinar la marimba con la canción de mensaje positivo', consequence: 'El grupo decide con razones, sin burlarse de los gustos de nadie. La música que elegimos también transmite valores.', values: ['Pensamiento crítico', 'Diálogo', 'Respeto'], constructive: true },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l1', 'fc'], cnb: ['l1:5.1.8', 'fc:3.1.1'], ambito: 'hacer', title: 'Producto: la escena final',
            prompt: 'Escribe la **escena 3** de "La asamblea de la milpa": DOÑA CANDELARIA dirige la asamblea con un **liderazgo democrático**. Usa el formato de guion: acotación inicial, nombres en MAYÚSCULAS con dos puntos, acotaciones entre paréntesis y la palabra "Telón" al final. Incluye un efecto de sonido o la música que elegiste.' },
          { placeholder: '(Salón comunal, de día…)\nDOÑA CANDELARIA: (…) …', minWords: 50,
            model: 'LA ASAMBLEA DE LA MILPA — Escena 3\n(Salón comunal, de día. Los vecinos están sentados en círculo. Suena una marimba suave.)\nDOÑA CANDELARIA: (de pie, con voz clara) Antes de decidir, quiero escuchar a todos. ¿Qué semilla prefieren?\nDON ROMUALDO: (cruzado de brazos) Yo digo que la de la ciudad.\nSEBASTIÁN: (levanta la mano) Mi abuela guarda semilla criolla. Ya está acostumbrada a esta tierra.\nDOÑA CANDELARIA: (anota en el cuaderno) Votemos. (Todos levantan la mano.) La mayoría eligió la semilla criolla. El próximo mes les informo cuánto gastamos, y los Pérez y los Cux preparan el terreno.\nDON ROMUALDO: (se rasca la cabeza y sonríe) Bueno… así da gusto participar.\n(Suena un son de marimba alegre.)\nTelón.',
            rubric: [
              'Empiezo con una acotación que dice dónde y cuándo ocurre la escena',
              'Escribo los nombres en MAYÚSCULAS seguidos de dos puntos',
              'Uso al menos tres acotaciones entre paréntesis',
              'DOÑA CANDELARIA muestra al menos dos rasgos democráticos (consulta, informa, reparte tareas, escucha)',
              'Incluyo música o un efecto de sonido y termino con "Telón"',
            ] },
        ),
        cierre({ areas: ['l1', 'fc', 'mat', 'art'], cnb: ['l1:5.1.8', 'fc:3.1.1'] },
          ['Distingo un liderazgo democrático de uno autoritario', 'Escribo una escena con la tipografía del guion', 'Calculo las pestañas para construir un sólido', 'Elijo música con criterio para cada momento'],
          ['Presentaré la obra con títeres a mi familia', 'Construiré la troje de utilería con material reciclado', 'Cuando critique a alguien, usaré hechos y propondré una mejora']),
      ],
    }),

    /* ───────────────────────── Viernes: Reto semanal ───────────────────────── */
    lesson({
      id: 's04-d5-reto',
      kind: 'reto',
      day: 5,
      title: 'Reto de la semana 4',
      icon: 'Trophy',
      minutes: 14,
      objetivos: ['Demostrar lo que aprendiste esta semana en todas tus materias', 'Obtener la medalla "Guardián de la semilla" (70 % o más)'],
      resumen: ['Superé el reto de la semana 4: prismas y pirámides, teatro, pubertad y células reproductoras, trabajo y roles de la mujer, liderazgo, música, inglés y lanzamientos.'],
      media: {
        id: 's04-d5-reto', kind: 'image', title: 'Medalla Guardián de la semilla', aspect: '1:1',
        alt: 'Medalla dorada con una mazorca, un brote verde y una pequeña pirámide.',
        brief: 'Ilustración de medalla circular dorada con una mazorca de maíz de granos de colores al centro, un brote verde saliendo de la tierra y una pequeña pirámide y un cilindro a los lados. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024, estilo plano con brillo suave.',
      },
      steps: [
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.4'], prompt: '¿Cuántas **aristas** tiene una **pirámide pentagonal**?' },
          { answer: 10, unit: 'aristas', misconceptions: [
            { value: 15, msg: '15 son las aristas de un prisma pentagonal (3 × 5). En la pirámide son 2 × 5.' },
            { value: 6, msg: '6 son sus vértices (5 + 1) o sus caras. Pregunta por aristas.' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.4', 'mat:1.3.3'], prompt: 'Un **prisma** tiene **12 vértices**. ¿Cuál es?' },
          { options: [
            { id: 'a', text: 'Un prisma hexagonal' },
            { id: 'b', text: 'Un prisma con base de 12 lados' },
            { id: 'c', text: 'Un prisma cuadrangular' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.5'], prompt: 'Una torre de adorno tiene un **cilindro de 40 cm** de altura y, encima, un **cono de 25 cm** de altura. ¿Qué altura tiene la torre?' },
          { answer: 65, unit: 'cm' },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: 'En un juego de roles, tu compañero hace de paciente y dice: **"¡Doctora, me duele mucho el estómago!"**. Tú eres la doctora. ¿Qué respuesta sigue las reglas del juego?' },
          { options: [
            { id: 'a', text: '"¿Desde cuándo le duele? ¿Qué comió ayer?"' },
            { id: 'b', text: '"Yo no quiero ser doctora, mejor cambiemos."' },
            { id: 'c', text: '"Jajaja, qué chistoso te ves."' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.2.1'], prompt: 'De **cada célula inicial**, ¿cuántas células reproductoras se forman?' },
          { options: [
            { id: 'a', text: 'En la espermatogénesis, 4 espermatozoides; en la ovogénesis, 1 óvulo' },
            { id: 'b', text: 'En las dos se forman 4 células' },
            { id: 'c', text: 'En la espermatogénesis, 1 espermatozoide; en la ovogénesis, 4 óvulos' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.2'], prompt: 'Sobre la pubertad: ¿verdadero o falso?' },
          { statements: [
            { text: 'La pubertad empieza exactamente a la misma edad en todas las personas.', answer: false, why: 'Suele empezar entre los 8 y los 14 años: cada cuerpo tiene su ritmo.' },
            { text: 'La hipófisis envía hormonas que activan los testículos y los ovarios.', answer: true },
            { text: 'Los ovarios producen estrógenos y progesterona.', answer: true },
          ] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.1.5', 'ccss:4.1.1'], prompt: 'Clasifica cada trabajo: ¿economía **formal** o **informal**?' },
          { buckets: [
            { id: 'f', label: 'Formal', icon: 'FileCheck' },
            { id: 'i', label: 'Informal', icon: 'Store' },
          ], items: [
            { id: 't1', text: 'Pedro trabaja en una fábrica con contrato y está inscrito en el IGSS', bucket: 'f' },
            { id: 't2', text: 'Una maestra de escuela pública que recibe aguinaldo y Bono 14', bucket: 'f' },
            { id: 't3', text: 'Rosa vende tortillas en la esquina, sin registro ni seguro social', bucket: 'i' },
            { id: 't4', text: 'Un ayudante de albañil al que le pagan por día, sin contrato', bucket: 'i' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.2.2'], prompt: '¿Desde qué año pudieron **votar** en Guatemala las mujeres que sabían leer y escribir?' },
          { options: [
            { id: 'a', text: '1945' },
            { id: 'b', text: '1821' },
            { id: 'c', text: '2010' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: 'El presidente de un comité prometió arreglar el chorro comunal en tres meses. Pasó un año y el chorro sigue sin arreglarse. ¿Qué **criterio** no cumple?' },
          { options: [
            { id: 'a', text: '¿Cumple lo que prometió?' },
            { id: 'b', text: '¿Incluye a todas las personas?' },
            { id: 'c', text: '¿Consulta antes de decidir?' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['art'], cnb: ['art:3.1.2'], prompt: 'Escuchas una pieza y anotas: _"Suenan una chirimía y un tambor. Va lento y suave. Se cuenta en 3."_ ¿Qué pregunta de tu ficha de escucha te **falta** responder?' },
          { options: [
            { id: 'a', text: 'Su carácter: la emoción que transmite' },
            { id: 'b', text: 'Su tempo' },
            { id: 'c', text: 'Su intensidad' },
          ], correct: ['a'] },
        ),
        S.fill(
          { fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.1'], prompt: 'Complete with the correct word. Cuidado: suenan igual.' },
          { text: 'Come [[here]], please! Can you [[hear]] the marimba?\nI was hungry, so I [[ate]] [[eight]] tortillas.', distractors: ['sea', 'son'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.2'], prompt: 'Ana es **zurda** y lanza por encima del hombro con la mano **izquierda**. ¿Qué pie pone adelante?' },
          { options: [
            { id: 'a', text: 'El derecho' },
            { id: 'b', text: 'El izquierdo' },
            { id: 'c', text: 'Los dos pies juntos' },
          ], correct: ['a'] },
        ),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 1 (el primer área = área principal) */
  bank: [
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.4'], prompt: '¿Cuántas **caras** tiene un **prisma decagonal** (base de 10 lados)?' },
      { answer: 12, unit: 'caras', misconceptions: [{ value: 11, msg: '11 serían las caras de una pirámide decagonal. El prisma tiene 2 bases: 10 + 2.' }, { value: 30, msg: '30 son sus aristas (3 × 10).' }] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.6'], prompt: '¿Qué figuras forman el desarrollo plano de un **prisma pentagonal**?' },
      { options: [{ id: 'a', text: '2 pentágonos y 5 rectángulos' }, { id: 'b', text: '1 pentágono y 5 triángulos' }, { id: 'c', text: '2 pentágonos y 5 triángulos' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: 'Siluetas que se mueven detrás de una tela iluminada, para que el público vea su sombra, son…' },
      { options: [{ id: 'a', text: 'Títeres de sombra' }, { id: 'b', text: 'Títeres de dedo' }, { id: 'c', text: 'Marionetas' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.2'], prompt: '¿Qué glándula envía la señal para que empiece la pubertad?' },
      { options: [{ id: 'a', text: 'La hipófisis' }, { id: 'b', text: 'Las glándulas sudoríparas' }, { id: 'c', text: 'Las glándulas salivales' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.3.1'], prompt: 'Tu primo quiere tomarle una foto a tu hermanito mientras se cambia de ropa, "solo para molestar". ¿Qué respuesta **respeta el pudor**?' },
      { options: [
        { id: 'a', text: 'No tomarla y decirle que la intimidad de cada persona se respeta' },
        { id: 'b', text: 'Tomarla, pero no enseñársela a nadie' },
        { id: 'c', text: 'Tomarla y enviarla solo a los amigos' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.1.1'], prompt: '¿Qué ciencia social estudia la **población**: cuántas personas hay, cuántas nacen y cuántas migran?' },
      { options: [{ id: 'a', text: 'La demografía' }, { id: 'b', text: 'La arqueología' }, { id: 'c', text: 'La ciencia política' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.2.2'], prompt: 'Una mujer es electa alcaldesa de su municipio. ¿En qué **ámbito** participa?' },
      { options: [{ id: 'a', text: 'Político' }, { id: 'b', text: 'Familiar' }, { id: 'c', text: 'Económico' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: '¿Qué institución de Guatemala revisa el uso del **dinero público**?' },
      { options: [{ id: 'a', text: 'La Contraloría General de Cuentas' }, { id: 'b', text: 'El comité de la feria' }, { id: 'c', text: 'El gobierno escolar' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.5.3'], prompt: 'Un terreno se **encharca** cuando llueve y se **endurece** en la época seca. ¿Qué tipo de suelo tiene?' },
      { options: [{ id: 'a', text: 'Arcilloso' }, { id: 'b', text: 'Arenoso' }, { id: 'c', text: 'Franco' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.2.1'], prompt: 'Al leer en voz alta con **fluidez**, ¿dónde haces las pausas **más largas**?' },
      { options: [{ id: 'a', text: 'En los puntos' }, { id: 'b', text: 'En las comas' }, { id: 'c', text: 'En medio de cada palabra' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:3.1.2'], prompt: 'Escuchas música con audífonos. ¿Qué hábito **cuida tu oído**?' },
      { options: [
        { id: 'a', text: 'Usar un volumen moderado y tomar descansos' },
        { id: 'b', text: 'Subir el volumen al máximo para no oír el ruido de la calle' },
        { id: 'c', text: 'Dormir toda la noche con los audífonos puestos' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.1'], prompt: 'Por la **e mágica**, ¿cómo se pronuncia **time** (tiempo)?' },
      { options: [{ id: 'a', text: '«táim»' }, { id: 'b', text: '«tí-me»' }, { id: 'c', text: '«tim»' }], correct: ['a'] }),
  ],
});
