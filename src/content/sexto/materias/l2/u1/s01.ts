/**
 * L2 (español como segundo idioma) · Unidad 1 · Semana 1
 * Escuchar con intención: distinguir hechos de opiniones y anticipar lo que dirá un mensaje.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's01-l2-1',
    title: '¿Hecho u opinión?',
    icon: 'Scale',
    minutes: 13,
    gancho: 'Tu primo dice: "El volcán de Agua mide casi 3,800 metros". Tu tía dice: "Es el volcán más bonito de Guatemala". ¿Las dos frases son iguales?',
    objetivos: [
      'Explicar qué es un hecho y qué es una opinión',
      'Reconocer las palabras que avisan que alguien está opinando',
      'Clasificar mensajes que escuchas o lees como hechos u opiniones',
    ],
    resumen: [
      'Un hecho es algo que se puede comprobar: se puede ver, medir, contar o consultar en una fuente confiable.',
      'Una opinión es lo que una persona piensa o siente; otra persona puede pensar distinto.',
      'Palabras pista de opinión: creo, pienso, me parece, en mi opinión, bonito, feo, mejor, peor, delicioso, aburrido.',
      'Un mensaje puede mezclar hechos y opiniones: escucha con atención para separarlos.',
    ],
    media: {
      id: 's01-l2-1-dos-frases', kind: 'animation', title: 'La lupa de los hechos', aspect: '16:9', duration: 45,
      alt: 'Dos globos de diálogo salen de dos personas frente a un volcán. Una lupa pasa sobre cada globo: uno se marca "Se puede comprobar" y el otro "Es lo que alguien piensa".',
      brief: 'Animación 2D de 45 s. Paisaje sencillo con un volcán cónico al fondo (sin rótulos de marcas). Un joven y una señora conversan. Globo 1: "El volcán mide casi 3,800 metros". Globo 2: "Es el volcán más bonito". Una lupa amarilla pasa sobre el globo 1 y aparece una cinta métrica y un libro con el texto "HECHO: se puede comprobar". Pasa sobre el globo 2 y aparece un corazón y el texto "OPINIÓN: es lo que alguien piensa". Cierre: las palabras "creo, me parece, bonito, mejor" brillan como pistas. Narración en español de Guatemala, pausada, con subtítulos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:1.2.6'], ambito: 'conocer', title: 'Hechos y opiniones',
          prompt: 'Cuando escuchas la radio, lees un anuncio o conversas, recibes **dos clases de mensajes**. Toca cada tarjeta.' },
        { icon: 'Scale', body: 'La pregunta clave es: **¿se puede comprobar?** Si sí, es un hecho. Si depende de lo que alguien piensa o siente, es una opinión.', reveal: [
          { icon: 'Ruler', front: 'Hecho', back: 'Algo que **se puede comprobar**: se ve, se mide, se cuenta o se consulta en una fuente confiable. Ejemplo: "El mercado abre los jueves".' },
          { icon: 'Heart', front: 'Opinión', back: 'Lo que una persona **piensa o siente**. Otra persona puede pensar distinto. Ejemplo: "El mercado es muy divertido".' },
          { icon: 'Search', front: 'Palabras pista', back: 'Avisan que es opinión: **creo, pienso, me parece, en mi opinión**, y adjetivos que juzgan: **bonito, feo, mejor, peor, delicioso, aburrido**.' },
          { icon: 'Info', front: '¡Ojo!', back: 'Un hecho puede resultar **falso** al comprobarlo: "Guatemala tiene 50 departamentos" se puede revisar… y es falso (tiene 22). Sigue siendo una frase comprobable.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.2.6'], ambito: 'conocer',
          prompt: 'Lee estas dos frases sobre el lago de Atitlán. ¿Cuál se puede **comprobar** consultando un mapa?',
          explain: 'Cualquiera puede revisar un mapa y ver que Atitlán está en Sololá. En cambio, "el más bonito" depende de quién lo diga. Hoy aprenderás a separar estas dos clases de mensajes.' },
        { options: [
          { id: 'a', text: 'El lago de Atitlán está en el departamento de Sololá.', icon: 'MapPin' },
          { id: 'b', text: 'El lago de Atitlán es el lugar más bonito del mundo.', icon: 'Heart', feedback: '¿Cómo lo comprobarías? A una persona le puede parecer el más bonito y a otra no. Eso es lo que alguien siente.' },
        ], correct: ['a'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.2.6'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo se analiza un mensaje que **mezcla** hecho y opinión.' },
        { icon: 'Radio', problem: 'En la radio dicen: _"En Chichicastenango hay mercado los jueves y los domingos. Creo que es el mercado más alegre del país."_ ¿Qué parte es hecho y qué parte es opinión?',
          steps: [
            { text: 'Separo el mensaje en dos oraciones.', why: 'Cada oración puede tener una intención distinta.' },
            { text: 'Oración 1: "hay mercado los jueves y los domingos". ¿Se puede comprobar? Sí: basta ir o preguntar en el pueblo. → **Hecho**.' },
            { text: 'Oración 2: empieza con **"Creo que"** y dice **"el más alegre"**. ¿Se puede medir la alegría de un mercado? No. → **Opinión**.', why: '"Creo" y "el más alegre" son palabras pista.' },
          ],
          answer: 'La primera oración es un **hecho**; la segunda es una **opinión**.',
          tip: 'Pregúntate siempre: ¿cómo lo comprobaría? Si no hay forma, es una opinión.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.2.6'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: ¿cada oración es un **hecho** o una **opinión**?',
          hint: 'Busca palabras pista como "creo", "mejor" o "delicioso". Si no hay, pregúntate: ¿cómo lo comprobaría?',
          explain: 'Los hechos se pueden revisar (en un mapa, un calendario, con una medida). Las opiniones expresan gustos o juicios.' },
        { buckets: [
          { id: 'h', label: 'Hecho', icon: 'Ruler', color: 'var(--c-ok)' },
          { id: 'o', label: 'Opinión', icon: 'Heart', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'Guatemala tiene 22 departamentos.', bucket: 'h' },
          { id: 'x2', text: 'El pepián es la comida más deliciosa.', bucket: 'o' },
          { id: 'x3', text: 'El 15 de septiembre se celebra la Independencia.', bucket: 'h' },
          { id: 'x4', text: 'Me parece que el fútbol es aburrido.', bucket: 'o' },
          { id: 'x5', text: 'El quetzal es el ave nacional de Guatemala.', bucket: 'h' },
          { id: 'x6', text: 'Las marimbas suenan mejor que las guitarras.', bucket: 'o', feedback: '"Mejor" es un juicio: depende del gusto de cada quien.' },
        ] },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.2.6'], ambito: 'hacer',
          prompt: 'Toca las **palabras pista de opinión** que dice esta locutora.',
          hint: 'Hay palabras que dicen "yo pienso" y adjetivos que juzgan (bonito, mejor…). Son 4.',
          explain: '"Pienso", "hermoso", "mejor" y "me parece" muestran lo que la locutora siente. Lo demás (la fecha, el lugar, la hora) se puede comprobar.' },
        { target: 'palabras pista', text: 'Buenos días, Cobán. El sábado habrá feria en el parque central, desde las 9 de la mañana. {Pienso} que será un día {hermoso}. Habrá venta de cardamomo y de café. Es la {mejor} feria del año, y {me parece} que nadie debe perdérsela.' },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.2.6'], ambito: 'hacer', title: 'Lectura',
          prompt: 'Lee este anuncio que se escuchó en la radio de la comunidad y responde.' },
        { genre: 'Anuncio', heading: 'Feria del maíz en San Juan', passage:
          '¡Atención, vecinos de San Juan! Este domingo 12 se realizará la Feria del Maíz en la cancha municipal. Empezará a las 8 de la mañana y terminará a las 4 de la tarde.\n\nHabrá venta de atol blanco, tamalitos de chipilín y elotes cocidos. La entrada es gratuita. Las familias pueden llevar sus propias semillas para intercambiarlas.\n\n¡No se la pierdan! Creemos que es la feria más sabrosa de todo el departamento, y los tamalitos de doña Chus son, sin duda, los mejores del mundo.',
          questions: [
            { q: '¿Cuál de estas frases del anuncio es un **hecho**?', options: [
              { id: 'a', text: 'La entrada es gratuita.' },
              { id: 'b', text: 'Es la feria más sabrosa del departamento.' },
              { id: 'c', text: 'Los tamalitos de doña Chus son los mejores del mundo.' },
            ], correct: 'a', why: 'Se puede comprobar al llegar a la feria: nadie cobra la entrada.' },
            { q: '¿Qué palabras del último párrafo avisan que es una **opinión**?', options: [
              { id: 'a', text: '"Creemos", "más sabrosa" y "los mejores"' },
              { id: 'b', text: '"Domingo 12" y "cancha municipal"' },
              { id: 'c', text: '"8 de la mañana" y "4 de la tarde"' },
            ], correct: 'a', why: 'Son palabras pista: una expresa lo que piensan y las otras juzgan.' },
            { q: '¿Por qué crees que el anuncio agrega opiniones al final?', options: [
              { id: 'a', text: 'Para animar a la gente a ir a la feria' },
              { id: 'b', text: 'Para dar la fecha exacta' },
              { id: 'c', text: 'Para explicar cómo se cocina el maíz' },
            ], correct: 'a', why: 'Los anuncios usan opiniones para convencer. Por eso conviene separar lo que se puede comprobar de lo que alguien quiere que pienses.' },
          ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.2.6'], ambito: 'hacer',
          prompt: 'Tu compañera quiere dar **solo hechos** en su informe sobre el río de su comunidad. ¿Qué oración debe quitar?',
          explain: '"Es el río más lindo" es un juicio personal. Las otras tres se pueden comprobar observando o midiendo.' },
        { options: [
          { id: 'a', text: 'El río pasa detrás de la escuela.', feedback: 'Esto se puede comprobar con solo mirar: es un hecho.' },
          { id: 'b', text: 'En marzo el río lleva menos agua que en julio.', feedback: 'Se puede observar y medir en cada mes: es un hecho.' },
          { id: 'c', text: 'Es el río más lindo que existe.' },
          { id: 'd', text: 'Algunas familias lavan ropa en el río.', feedback: 'Se puede observar: es un hecho.' },
        ], correct: ['c'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.2.6'], ambito: 'hacer',
          prompt: 'Piensa en un lugar de tu comunidad (el parque, el mercado, la cancha…). Escribe **un hecho** y **una opinión** sobre ese lugar. Marca tu opinión con una palabra pista.' },
        { minWords: 14, placeholder: 'Hecho: … Opinión: …',
          model: 'Hecho: la cancha de mi aldea está al lado de la iglesia y tiene dos porterías. Opinión: creo que es el mejor lugar para jugar con mis amigos.',
          rubric: ['Escribí un hecho que se puede comprobar', 'Escribí una opinión con una palabra pista (creo, me parece, mejor…)', 'Las dos oraciones hablan del mismo lugar'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.2.6'], prompt: 'Boleto de salida: ¿verdadero o falso?' },
        { statements: [
          { text: '"El Tajumulco es el volcán más alto de Centroamérica" es un hecho, porque se puede comprobar con mediciones.', answer: true },
          { text: '"Me parece que llueve demasiado" es un hecho.', answer: false, why: '"Me parece" y "demasiado" muestran lo que la persona siente: es opinión.' },
          { text: 'Si un hecho resulta falso al comprobarlo, se convierte en opinión.', answer: false, why: 'Sigue siendo una afirmación comprobable; simplemente es falsa.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.2.6'], prompt: 'Escuchas en la escuela: _"El recreo dura 30 minutos, pero yo creo que debería durar más."_ ¿Qué tiene este mensaje?' },
        { options: [
          { id: 'a', text: 'Solo hechos' },
          { id: 'b', text: 'Solo opiniones' },
          { id: 'c', text: 'Un hecho y una opinión' },
        ], correct: ['c'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's01-l2-2',
    title: 'Escucho y anticipo',
    icon: 'Ear',
    minutes: 14,
    gancho: 'Cuando alguien en el parlante de la aldea dice "¡Atención, vecinos!", ¿ya sabes más o menos qué va a pasar?',
    objetivos: [
      'Usar pistas del mensaje para anticipar lo que va a decir',
      'Reconocer cómo empiezan distintos tipos de mensajes',
      'Comprobar si tu predicción fue correcta',
    ],
    resumen: [
      'Anticipar es imaginar lo que viene en un mensaje antes de escucharlo o leerlo completo.',
      'Pistas para anticipar: quién habla y dónde, las primeras palabras, el tono de voz y lo que ya sabes del tema.',
      'Cada tipo de mensaje tiene inicios típicos: "Había una vez…" (cuento), "Se les informa…" (aviso), "Ingredientes:" (receta).',
      'Después de anticipar, sigue escuchando para comprobar o corregir tu idea.',
    ],
    media: {
      id: 's01-l2-2-parlante', kind: 'audio', title: 'Avisos de la comunidad', duration: 50,
      alt: 'Tres avisos grabados como si sonaran en el parlante de una aldea: uno sobre el agua, uno sobre vacunación y uno sobre la lluvia.',
      brief: 'Audio de 50 s con efecto de parlante al aire libre (leve eco, gallos y perros lejanos, sin música comercial). Voz adulta clara, ritmo pausado, español de Guatemala. Aviso 1: "¡Atención, vecinos! Se les informa que mañana no habrá servicio de agua de 8 de la mañana a 2 de la tarde. Llenen sus toneles desde hoy." Pausa de 2 s. Aviso 2: "Se les recuerda a las mamás y papás que el jueves habrá jornada de vacunación en el puesto de salud. Traigan el carné de sus hijos." Pausa. Aviso 3: "Atención: el pronóstico anuncia lluvia fuerte esta tarde. Eviten cruzar el río." Incluir una versión con un silencio de 3 s después de la primera frase de cada aviso, para que el niño anticipe.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:1.2.4'], ambito: 'conocer', title: '¿Qué es anticipar?',
          prompt: '**Anticipar** es imaginar lo que viene en un mensaje **antes** de oírlo completo. Los buenos oyentes lo hacen todo el tiempo. Toca cada pista.' },
        { icon: 'Ear', body: 'Anticipar te ayuda a **entender más rápido** y a **reaccionar a tiempo** (por ejemplo, ante un aviso de lluvia fuerte).', reveal: [
          { icon: 'Radio', front: 'Quién habla y dónde', back: 'Un locutor del noticiero, la directora en la formación, el parlante de la aldea: cada uno suele hablar de ciertos temas.' },
          { icon: 'MessageCircle', front: 'Las primeras palabras', back: '"Había una vez…" anuncia un cuento. "Se les informa…" anuncia un aviso. "Primero, lava…" anuncia instrucciones.' },
          { icon: 'Volume2', front: 'El tono de voz', back: 'Una voz rápida y seria anuncia algo urgente. Una voz alegre anuncia una fiesta o una buena noticia.' },
          { icon: 'Brain', front: 'Lo que ya sabes', back: 'Si sabes que es época de lluvia y oyes "pronóstico", ya imaginas qué vendrá.' },
          { icon: 'CheckCircle', front: 'Comprobar', back: 'Después de anticipar, **sigue escuchando** para confirmar o corregir tu idea. Anticipar no es adivinar sin pistas.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.2.4'], ambito: 'conocer',
          prompt: 'Escuchas por el parlante: _"¡Atención, vecinos! Se les informa que mañana no habrá servicio de agua de 8 de la mañana a…"_ Antes de que termine, ¿qué crees que dirá después?',
          explain: 'Aunque el mensaje no había terminado, ya tenías pistas: "no habrá agua" y "de 8 de la mañana a…". Eso se llama **anticipar**, y hoy vas a practicarlo.' },
        { options: [
          { id: 'a', text: 'Una hora de regreso del agua y un consejo, como llenar toneles', icon: 'Droplets' },
          { id: 'b', text: 'Un chiste sobre el agua', icon: 'Smile', feedback: 'Un aviso que empieza con "¡Atención, vecinos!" suele ser serio y útil, no un chiste.' },
          { id: 'c', text: 'El resultado de un partido de fútbol', icon: 'Trophy', feedback: 'El mensaje habla del servicio de agua; es poco probable que cambie de tema.' },
        ], correct: ['a'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.2.4'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo anticipa Ana mientras escucha a la directora en la formación del lunes.' },
        { icon: 'School', problem: 'La directora empieza: _"Queridos estudiantes: este viernes no habrá clases normales, porque celebraremos…"_ ¿Qué dirá después?',
          steps: [
            { text: 'Pista 1: habla la **directora** en la formación. Suele dar avisos de la escuela.' },
            { text: 'Pista 2: dice **"no habrá clases normales"** y **"celebraremos"**. Viene una actividad especial.', why: '"Celebrar" anuncia una fiesta o un acto, no un problema.' },
            { text: 'Pista 3: Ana sabe que se acerca el Día del Niño (1 de octubre).', why: 'Lo que ya sabes también es una pista.' },
            { text: 'Ana anticipa: "Dirá qué vamos a celebrar y qué debemos traer". Sigue escuchando y la directora dice: "…el Día del Niño. Traigan ropa cómoda y su refacción". ¡Acertó!' },
          ],
          answer: 'Ana usó **quién habla**, las **primeras palabras** y **lo que ya sabía** para anticipar, y luego **comprobó**.',
          tip: 'Anticipa con pistas y luego escucha para comprobar.' },
      ),
      S.match(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.2.4'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: une cada **inicio de mensaje** con lo que probablemente viene después.',
          hint: 'Fíjate en la primera palabra importante de cada inicio: "Había una vez", "Ingredientes", "Se busca"…',
          explain: 'Cada tipo de mensaje tiene inicios típicos. Reconocerlos te permite anticipar su contenido.' },
        { leftTitle: 'Empieza así…', rightTitle: 'Probablemente sigue…', pairs: [
          { id: 'm1', left: '"Había una vez, en un pueblo junto al lago…"', leftIcon: 'BookOpen', right: 'Personajes y una aventura' },
          { id: 'm2', left: '"Ingredientes: dos tazas de masa…"', leftIcon: 'Utensils', right: 'Los pasos para cocinar algo' },
          { id: 'm3', left: '"Se busca perrito café, responde al nombre de Canelo…"', leftIcon: 'Dog', right: 'Dónde se perdió y un teléfono de contacto' },
          { id: 'm4', left: '"Última hora: se registró un sismo…"', leftIcon: 'Newspaper', right: 'Dónde ocurrió y si hubo daños' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.2.4'], ambito: 'hacer',
          prompt: 'Escucha el aviso. En la radio dicen: _"Una depresión tropical se acerca a la costa del Pacífico y se espera lluvia fuerte durante tres días…"_ ¿Qué es más probable que digan a continuación?',
          hint: 'Cuando un aviso anuncia un peligro, ¿qué suele venir después?',
          explain: 'Después de anunciar un peligro, los avisos casi siempre dan **recomendaciones de seguridad**.',
          media: { id: 's01-l2-2-pronostico', kind: 'audio', title: 'Pronóstico en la radio', duration: 25,
            alt: 'Voz de locutora que lee un pronóstico del tiempo y se detiene antes de las recomendaciones.',
            brief: 'Audio de 25 s. Locutora adulta, tono serio pero tranquilo, español de Guatemala. Texto exacto: "Buenas tardes. Una depresión tropical se acerca a la costa del Pacífico y se espera lluvia fuerte durante tres días en Escuintla, Retalhuleu y San Marcos…". Termina con 3 s de silencio (para que el niño anticipe). Versión 2 que continúa: "…Se recomienda no cruzar ríos crecidos y tener lista una mochila de emergencia." Sonido suave de lluvia al fondo, sin música.' } },
        { options: [
          { id: 'a', text: 'Recomendaciones: no cruzar ríos crecidos y preparar una mochila de emergencia', icon: 'ShieldAlert' },
          { id: 'b', text: 'Que ya no lloverá nunca más en la costa', icon: 'Sun', feedback: 'Eso contradice lo que acaba de decir: se espera lluvia fuerte.' },
          { id: 'c', text: 'Una receta de atol de elote', icon: 'Utensils', feedback: 'El tema es el clima y la seguridad; no hay pistas de cocina.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.2.4'], ambito: 'hacer',
          prompt: 'Los avisos de radio casi siempre siguen el mismo orden. Si lo conoces, sabes qué viene después. Ordena las partes de este aviso.',
          explain: 'Saludo → aviso principal → detalles → recomendación → despedida. Conocer esta estructura te permite anticipar cada parte.' },
        { labels: { start: 'Empieza', end: 'Termina' }, items: [
          { id: 'o1', text: '"Buenos días, comunidad de Santa Cruz."', icon: 'Radio' },
          { id: 'o2', text: '"Se les informa que el jueves habrá jornada de vacunación."', icon: 'Megaphone' },
          { id: 'o3', text: '"Será en el puesto de salud, de 8 a 12 del mediodía."', icon: 'Clock' },
          { id: 'o4', text: '"Traigan el carné de vacunación de sus hijos."', icon: 'ClipboardList' },
          { id: 'o5', text: '"Muchas gracias por su atención."', icon: 'Handshake' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.2.4'], ambito: 'hacer', title: 'Lectura con pausa',
          prompt: 'Lee este cuento. Se detiene en un momento importante. Usa las pistas para **anticipar** lo que pasará.' },
        { genre: 'Cuento', heading: 'La tormenta de Rosita', passage:
          'Rosita cuidaba las ovejas de su abuelo en el cerro. Esa tarde, el cielo se puso gris oscuro y el viento empezó a soplar muy fuerte. Las ovejas se juntaron, nerviosas.\n\nDesde lejos, Rosita oyó un trueno. Recordó lo que siempre le decía su abuelo: "Cuando truena en el cerro, no te quedes bajo un árbol solo; baja por el camino y busca la casa".\n\nRosita tomó su vara, llamó a las ovejas por su nombre y…',
          questions: [
            { q: '¿Qué es más probable que haga Rosita?', options: [
              { id: 'a', text: 'Bajar con las ovejas por el camino hacia la casa' },
              { id: 'b', text: 'Quedarse dormida debajo de un árbol' },
              { id: 'c', text: 'Irse a jugar al río' },
            ], correct: 'a', why: 'Las pistas son el consejo del abuelo y que tomó su vara y llamó a las ovejas: se prepara para bajar.' },
            { q: '¿Qué pista del texto te ayudó **más** a anticipar?', options: [
              { id: 'a', text: 'El consejo del abuelo que Rosita recordó' },
              { id: 'b', text: 'Que las ovejas eran del abuelo' },
              { id: 'c', text: 'Que el cuento se llama "La tormenta de Rosita"' },
            ], correct: 'a', why: 'El título ayuda a saber que habrá tormenta, pero el consejo dice exactamente qué debe hacer.' },
          ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.2.4', 'l2:1.2.6'], ambito: 'hacer',
          prompt: 'Un vendedor dice con voz alegre: _"¡Pásele, pásele! Hoy tenemos oferta…"_ ¿Qué anticipas y qué tipo de mensaje escucharás?',
          explain: 'La voz alegre y "oferta" anuncian un mensaje para **vender**: precios y opiniones que buscan convencerte ("¡la mejor fruta!"). Recuerda separar hechos de opiniones.' },
        { options: [
          { id: 'a', text: 'Precios bajos y frases como "¡la fruta más dulce!", que son opiniones para convencerme' },
          { id: 'b', text: 'Un aviso de emergencia por un incendio', feedback: 'El tono alegre y la palabra "oferta" no anuncian una emergencia.' },
          { id: 'c', text: 'Instrucciones para vacunar a los perros', feedback: 'No hay pistas de ese tema: el vendedor habla de ofertas.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.2.4'], prompt: 'Boleto de salida: escuchas _"Primero, lava bien las manzanas. Después, córtalas en trocitos…"_ ¿Qué vendrá después?' },
        { options: [
          { id: 'a', text: 'Más pasos para preparar algo con las manzanas' },
          { id: 'b', text: 'La historia de un príncipe' },
          { id: 'c', text: 'El resultado de una elección' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.2.4'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Anticipar es imaginar lo que viene en un mensaje usando pistas.', answer: true },
          { text: 'El tono de voz no da ninguna pista sobre el mensaje.', answer: false, why: 'Una voz urgente o alegre ya te dice mucho de lo que viene.' },
          { text: 'Después de anticipar, conviene seguir escuchando para comprobar.', answer: true },
        ] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l2'], cnb: [], ambito: 'ser', prompt: '¿Cómo te fue esta semana?' },
        { statements: ['Distingo un hecho de una opinión', 'Reconozco palabras pista de opinión', 'Anticipo lo que dirá un mensaje usando pistas'],
          commitments: ['Esta semana escucharé un aviso o noticia y separaré hechos de opiniones', 'Intentaré anticipar cómo termina un mensaje antes de oírlo completo', 'Le explicaré a alguien de mi familia qué es una opinión'] },
      ),
    ],
  }),
];
