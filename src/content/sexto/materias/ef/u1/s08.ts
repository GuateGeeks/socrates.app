/**
 * Educación Física · Unidad 1 · Semana 8 — Juegos tradicionales, liderazgo e igualdad.
 * Progresión: conocer, jugar y valorar juegos tradicionales de Guatemala (lo que enseñan al cuerpo y
 * lo que conservan de la cultura) → liderar un juego con igualdad de oportunidades para niñas y niños,
 * respetando los derechos humanos; cierre de unidad con repaso espiral.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Juegos tradicionales ───────────────────────── */
  lesson({
    id: 's08-ef-1',
    title: 'Juegos tradicionales: jugar como jugaban nuestros abuelos',
    icon: 'Sparkles',
    minutes: 15,
    gancho: 'Antes de los celulares, tus abuelos jugaban con un trompo, un capirucho, unos cincos o una cuerda. ¿Crees que esos juegos todavía pueden hacerte sudar y reír?',
    objetivos: [
      'Conocer juegos tradicionales de Guatemala y sus reglas',
    ],
    resumen: [
      'Los juegos tradicionales se transmiten de generación en generación, de abuelos a nietos. Usan materiales sencillos y muchas veces reutilizados.',
      'Ejemplos en Guatemala: trompo, capirucho, cincos (canicas), tenta, salta cuerda, ronda con palmas y barrilete. Cada comunidad puede tener sus propios nombres y reglas.',
      'Desarrollan habilidades: el capirucho y los cincos, la coordinación ojo-mano y la precisión; la tenta, la velocidad y los cambios de dirección; la cuerda, el ritmo y la resistencia; ronda con palmas, la fuerza y la cooperación.',
      'Valorarlos es jugarlos, aprenderlos de las personas mayores, enseñarlos a los más pequeños y respetar sus reglas, que se acuerdan antes de jugar.',
    ],
    media: {
      id: 's08-ef-1-juegos', kind: 'video', title: 'Juegos de ayer y de hoy', aspect: '16:9', duration: 60,
      alt: 'Un abuelo enseña a una niña a lanzar un trompo; niños juegan cincos en un círculo dibujado en la tierra; un grupo salta cuerda cantando; otro juega ronda con palmas sentados en fila.',
      brief: 'Video de 60 s en un patio escolar despejado, con intérpretes autorizados. Escenas de 10 s con rótulo: (1) trompo con pita; (2) capirucho; (3) cincos en un círculo; (4) tenta con bases amplias; (5) cuerda individual e imaginaria; (6) ronda con palmas, con participantes de pie y sentados, separados por un brazo. Cierre con barriletes de papel exhibidos sin elevarlos cerca de cables. Música de marimba suave. Target: public/media/s08-ef-1-juegos.mp4. Accesibilidad: subtítulos completos, transcripción, demostración a velocidad lenta y descripción de cada adaptación.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:4.2.7'], ambito: 'conocer', title: 'Reglas de juegos tradicionales', prompt: 'Lee qué se practica en estos juegos.' },
        { icon: 'History', body: 'Trompo, capirucho, cincos, tenta, cuerda y ronda con palmas conservan reglas culturales y practican habilidades motrices.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.2.7'], ambito: 'conocer',
          prompt: '¿Qué tienen en común el trompo, el capirucho y los cincos?',
          explain: 'Son **juegos tradicionales**: se han jugado por generaciones, se aprenden de las personas mayores y usan materiales sencillos. Además, ¡todos entrenan tu precisión y coordinación!' },
        { options: [
          { id: 'a', text: 'Son juegos tradicionales que se aprenden de generación en generación', icon: 'History' },
          { id: 'b', text: 'Son juegos electrónicos', icon: 'Smartphone', feedback: 'No necesitan electricidad: solo madera, pita, vidrio o barro.' },
          { id: 'c', text: 'Son deportes olímpicos', icon: 'Medal', feedback: 'No son deportes olímpicos: son juegos de la tradición popular.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.2.7'], ambito: 'conocer', title: 'Juegos tradicionales de Guatemala',
          prompt: 'Mira el video y la lámina, y toca cada juego. Compara sus reglas con las tarjetas suministradas.',
          media: {
            id: 's08-ef-1-objetos', kind: 'image', title: 'Los objetos de los juegos tradicionales', aspect: '4:3',
            alt: 'Sobre un petate: un trompo de madera con su pita, un capirucho (palito y carrete unidos con pita), un puñado de cincos de vidrio, una cuerda larga y un barrilete pequeño de papel de china.',
            brief: 'Fotografía cenital o ilustración realista sobre un petate: trompo de madera pintado con su pita enrollada, capirucho de madera (palito y carrete unidos con pita), cinco o seis cincos (canicas) de vidrio de colores, una cuerda de saltar larga enrollada y un barrilete pequeño de papel de china con cola de trapo. Cada objeto con su nombre en letra grande. Sin marcas comerciales. Target: public/media/s08-ef-1-objetos.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
          } },
        { icon: 'History', body: 'Cada comunidad tiene sus juegos. Estos son algunos de los más conocidos en Guatemala.', reveal: [
          { icon: 'RotateCw', front: 'Trompo', back: 'Se enrolla una pita en el trompo y se lanza para que **baile** en el suelo. Retos: que dure mucho, levantarlo bailando en la mano o sacar otros trompos de un círculo.' },
          { icon: 'Target', front: 'Capirucho', back: 'Un carrete de madera unido con una pita a un palito. Se balancea el carrete para **embocarlo** en el palito. Entrena la **coordinación ojo-mano**.' },
          { icon: 'CircleDot', front: 'Cincos', back: 'Canicas. Desde una línea, se impulsan con el pulgar para **sacar** los cincos de otros jugadores de un círculo dibujado en la tierra. Pide **precisión**.' },
          { icon: 'Footprints', front: 'Tenta', back: 'Una persona "la lleva" y persigue a las demás; a quien toca, le pasa la tenta. Hay "bases" donde no te pueden tocar. Entrena **velocidad** y **cambios de dirección**.' },
          { icon: 'Repeat', front: 'Salta cuerda', back: 'Dos personas dan vuelta a una cuerda larga y las demás entran a saltar, muchas veces **cantando** y contando. Entrena **ritmo** y **resistencia**.' },
          { icon: 'Wind', front: 'Barrilete', back: 'Se construye con papel de china, varas y pita, y se vuela corriendo contra el viento. En noviembre, en Sumpango y Santiago Sacatepéquez se elevan **barriletes gigantes**.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.2.7'], ambito: 'convivir', title: '¿Por qué valorarlos?',
          prompt: 'Los juegos tradicionales son mucho más que pasar el rato. Toca cada tarjeta.' },
        { icon: 'Heart', body: 'Valorar un juego tradicional es **jugarlo, aprenderlo y enseñarlo**, para que no se pierda.', reveal: [
          { icon: 'Users', front: 'Unen generaciones', back: 'Abuelos, padres, madres y nietos pueden jugar juntos y compartir historias.' },
          { icon: 'Landmark', front: 'Son cultura', back: 'Guardan canciones, palabras y formas de convivir de nuestros pueblos. Son parte de nuestra **identidad**.' },
          { icon: 'Recycle', front: 'Materiales sencillos', back: 'Se hacen con madera, pita, papel, costales o piedritas: no hace falta dinero y se puede reutilizar.' },
          { icon: 'Activity', front: 'Mueven el cuerpo', back: 'Correr, saltar, lanzar, equilibrarse: usan las mismas habilidades que aprendiste en esta unidad.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.2.7'], ambito: 'hacer', title: 'Ejemplo resuelto: jugar ronda con palmas de forma segura',
          prompt: 'Mira cómo el grupo de Juan organiza el juego de **ronda con palmas** que le enseñó su abuela.' },
        { icon: 'Music', problem: 'Son 8 niñas y niños en un patio despejado. ¿Cómo hacen una ronda con palmas segura y adaptable?',
          steps: [
            { text: '**Despejan el espacio:** retiran mochilas y dejan un brazo de distancia entre participantes.' },
            { text: '**Acuerdan una secuencia:** dos palmas propias, dos palmas al aire y un paso lateral.' },
            { text: '**Ensayan despacio:** nadie toma, empuja ni jala a otra persona.', why: 'Cada participante controla su propio movimiento.' },
            { text: '**Cambian el liderazgo:** una persona marca cuatro pulsos y luego cede el turno.' },
            { text: '**Adaptan:** la secuencia puede hacerse de pie o sentada, con pasos, gestos o palmas suaves; cualquiera puede decir “alto”.' },
          ],
          answer: 'La ronda practica **ritmo, atención y cooperación** sin contacto riesgoso.',
          tip: 'El ritmo se adapta a cada participante; la velocidad nunca vale más que el control.' },
      ),
      S.match(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.2.7'], ambito: 'conocer',
          prompt: 'Une cada juego tradicional con la habilidad que más desarrolla.',
          hint: 'Piensa en lo que el cuerpo tiene que hacer en cada juego.',
          explain: 'Todos los juegos mueven el cuerpo, pero cada uno destaca una habilidad.' },
        { leftTitle: 'Juego', rightTitle: 'Habilidad', pairs: [
          { id: 'c', left: 'Capirucho', right: 'Coordinación ojo-mano' },
          { id: 't', left: 'Tenta', right: 'Velocidad y cambios de dirección' },
          { id: 's', left: 'Salta cuerda', right: 'Ritmo y resistencia' },
          { id: 'a', left: 'Ronda con palmas', right: 'Ritmo y cooperación' },
        ] },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:4.2.7'], ambito: 'hacer',
          prompt: '¡Feria de juegos tradicionales! **Calentamiento:** trote suave y rotaciones. **Estación 1 – Tenta (2 min):** con bases acordadas. **Estación 2 – Salta cuerda:** entra y salta 10 veces contando o cantando; si estás solo, cuerda individual. **Estación 3 – Precisión:** capirucho, trompo o cincos (si no tienes, lanza tapitas a un círculo dibujado en el suelo). **Poco espacio:** cuerda individual o imaginaria y tapitas a un círculo. **Adaptación:** en la tenta, quien use silla de ruedas puede "tentar" tocando con una pelota suave; en la cuerda, se puede pasar la cuerda por debajo de las ruedas o dar vuelta a la cuerda. **Vuelta a la calma:** estira y toma agua.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después de la tenta', exercise: { name: 'Tenta con bases', icon: 'Footprints', seconds: 90 } },
          { label: 'Después de salta cuerda y precisión', exercise: { name: 'Salta cuerda y juego de precisión', icon: 'Repeat', seconds: 90 } },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:4.2.7'], ambito: 'convivir',
          prompt: 'Tu abuelo te enseña a lanzar el trompo, pero tu primo dice: "Eso es de antes, es aburrido". ¿Qué respuesta muestra **valoración** de los juegos tradicionales?',
          explain: 'Valorar es reconocer lo que el juego aporta (habilidad, cultura, convivencia) e invitar a otros a probarlo, con respeto por los gustos de cada quien.' },
        { options: [
          { id: 'a', text: '"Pruébalo: lanzar el trompo pide mucha precisión y así aprendemos lo que jugaba el abuelo"' },
          { id: 'b', text: '"Tienes razón, los juegos viejos no sirven"', feedback: 'Los juegos tradicionales siguen desarrollando habilidades y son parte de la cultura.' },
          { id: 'c', text: '"Si no te gusta, eres un aburrido"', feedback: 'Se puede invitar sin burlarse de los gustos de la otra persona.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:4.2.7'], ambito: 'convivir',
          prompt: 'Lee la ficha suministrada de **Doña Blanca** y escribe una adaptación segura para poco espacio: regla, movimiento, señal de pausa y habilidad que conserva.' },
        { minWords: 24, placeholder: 'Regla adaptada... Movimiento... Señal de pausa... Conserva la habilidad de...',
          model: 'El grupo marca el círculo sin jalarse. Camina cuatro pasos con palmas y se detiene al oír “pausa”. Quien está afuera señala un espacio sin empujar. Conserva ritmo, orientación y cooperación.',
          rubric: ['No incluye jalones ni empujones', 'Define señal de pausa', 'Explica la habilidad practicada'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.2.7'], prompt: '¿Cuál es un juego tradicional de Guatemala que desarrolla la **coordinación ojo-mano**?' },
        { options: [
          { id: 'a', text: 'El capirucho' },
          { id: 'b', text: 'Un videojuego de carreras' },
          { id: 'c', text: 'Ver televisión' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.2.7'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Los juegos tradicionales se transmiten de generación en generación.', answer: true },
          { text: 'En la ronda con palmas conviene empujar o jalar para seguir el ritmo.', answer: false, why: 'Cada persona controla sus movimientos y mantiene distancia; no se empuja ni se jala.' },
          { text: 'Un mismo juego puede tener distintos nombres o reglas según la comunidad.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Liderazgo e igualdad ───────────────────────── */
  lesson({
    id: 's08-ef-2',
    title: 'Liderar con igualdad: todas y todos jugamos',
    icon: 'Flag',
    minutes: 15,
    gancho: 'En el recreo alguien dice: "Las niñas no juegan fútbol" o "Los niños no saltan cuerda". ¿Es justo? ¿Qué harías si tú fueras quien organiza el juego?',
    objetivos: [
      'Reconocer las cualidades de un buen líder en el juego y en el deporte',
    ],
    resumen: [
      'Un buen líder explica las reglas con claridad, escucha, organiza turnos y equipos justos, anima a todos y da el ejemplo con juego limpio. Liderar es servir al grupo, no mandar a gritos.',
      'Niñas y niños tienen los mismos derechos y oportunidades para jugar cualquier juego o deporte y para ser capitanas, capitanes, árbitras o árbitros.',
      'La Declaración Universal de Derechos Humanos dice que todos los seres humanos nacen libres e iguales en dignidad y derechos. La Constitución de Guatemala (artículo 4) establece que el hombre y la mujer tienen iguales oportunidades y responsabilidades.',
      'Complementariedad: cada persona aporta habilidades distintas; un equipo diverso es más fuerte. Equipos justos: contar 1-2, mezclar habilidades y rotar el liderazgo.',
    ],
    media: {
      id: 's08-ef-2-liderazgo', kind: 'image', title: 'Capitanas y capitanes', aspect: '16:9',
      alt: 'En un patio escolar, una niña capitana explica las reglas a un equipo mixto en círculo; al lado, un niño arbitra un juego de salta cuerda donde saltan niñas y niños juntos.',
      brief: 'Ilustración luminosa de un patio de escuela pública guatemalteca. Escena izquierda: una niña (brazalete de capitana) explica las reglas a un equipo mixto en círculo, todos atentos. Escena derecha: un niño con silbato arbitra salta cuerda; saltan niñas y niños juntos. Al fondo, un cartel "Todas y todos jugamos". Diversidad de pueblos (maya, garífuna, xinka, mestizo) y una niña en silla de ruedas participando. Sin estereotipos de colores por género. Target: public/media/s08-ef-2-liderazgo.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:4.1.12'], ambito: 'convivir', title: 'Igualdad y liderazgo', prompt: 'Lee cómo se organiza una actividad física justa.' },
        { icon: 'Users', body: 'Todas las personas tienen iguales oportunidades para jugar y liderar. Un buen liderazgo organiza turnos y equipos justos.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.1.12'], ambito: 'convivir',
          prompt: '¿Pueden las niñas jugar fútbol y ser capitanas? ¿Pueden los niños saltar cuerda?',
          explain: '**Sí, todas y todos.** No hay juegos "de niñas" ni "de niños". Todas las personas tienen los mismos derechos y oportunidades para jugar, aprender y liderar.' },
        { options: [
          { id: 'a', text: 'Sí: cualquier persona puede jugar y liderar cualquier juego', icon: 'Users' },
          { id: 'b', text: 'No: cada juego es solo para niñas o solo para niños', icon: 'X', feedback: 'Esa idea es un estereotipo: limita a las personas y no tiene base.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.2.3'], ambito: 'convivir', title: '¿Qué hace un buen líder en el juego?',
          prompt: 'Liderar no es mandar: es **ayudar al grupo** a jugar mejor. Toca cada tarjeta.' },
        { icon: 'Flag', body: 'Cualquier persona puede aprender a liderar. Se practica **rotando** el papel de capitán, árbitro u organizador.', reveal: [
          { icon: 'MessageCircle', front: 'Explica con claridad', back: 'Cuenta las reglas en pocas palabras, muestra un ejemplo y pregunta: "¿Quedó claro?".' },
          { icon: 'Ear', front: 'Escucha', back: 'Toma en cuenta las ideas del grupo y a quienes hablan menos.' },
          { icon: 'Scale', front: 'Organiza con justicia', back: 'Forma **equipos parejos**, da **turnos** a todos y cuida que nadie quede fuera.' },
          { icon: 'ThumbsUp', front: 'Anima y da el ejemplo', back: 'Felicita el esfuerzo, anima a quien se equivoca y juega limpio. El grupo imita lo que ve.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef', 'fc'], cnb: ['ef:4.1.12'], ambito: 'convivir', title: 'Igualdad y derechos en el juego',
          prompt: 'La igualdad en el juego no es solo "buena onda": es un **derecho**. Toca cada tarjeta.' },
        { icon: 'Scale', body: 'Cuando alguien queda fuera de un juego por ser niña, niño, de otro pueblo o por tener una discapacidad, se vulnera su derecho a jugar y a participar.', reveal: [
          { icon: 'Globe', front: 'Derechos humanos', back: 'La **Declaración Universal de Derechos Humanos** (artículo 1) dice: todos los seres humanos **nacen libres e iguales en dignidad y derechos**.' },
          { icon: 'Landmark', front: 'Constitución de Guatemala', back: 'El **artículo 4** dice que en Guatemala todos los seres humanos son libres e iguales en dignidad y derechos, y que **el hombre y la mujer tienen iguales oportunidades y responsabilidades**.' },
          { icon: 'Puzzle', front: 'Complementariedad', back: 'Cada persona aporta algo distinto: velocidad, puntería, estrategia, ánimo. Un equipo **diverso** se complementa y es más fuerte.' },
          { icon: 'Users', front: 'Igualdad de oportunidades', back: 'Todas y todos pueden jugar, ser capitanes, arbitrar, elegir juego y recibir el balón. Si alguien necesita una adaptación, se hace.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.2.3', 'ef:4.1.12'], ambito: 'convivir', title: 'Ejemplo resuelto: formar equipos justos',
          prompt: 'Siempre que eligen equipos, las mismas personas quedan de últimas. Mira cómo lo resuelve Andrea, la capitana de turno.' },
        { icon: 'Users', problem: 'Hay 16 estudiantes (8 niñas y 8 niños) y van a jugar balonmano. Antes, los "mejores" escogían y siempre quedaban de últimas las mismas niñas y un niño que corre más lento.',
          steps: [
            { text: 'Andrea propone **contar 1-2** en la fila: los "1" forman un equipo y los "2" el otro.', why: 'Nadie "escoge" a nadie: se evita que alguien se sienta rechazado.' },
            { text: 'Revisa que cada equipo quede **mixto** y con habilidades mezcladas; si no, cambia a dos personas.' },
            { text: 'Acuerda una regla nueva: **antes de lanzar a gol, el balón debe pasar por al menos 3 personas** del equipo.', why: 'Así todas y todos tocan el balón, no solo los más rápidos.' },
            { text: 'Nombra **capitanes rotativos**: cada 5 minutos, otra persona es capitana o capitán.' },
          ],
          answer: 'Con **conteo 1-2**, **equipos mixtos**, la regla de **3 pases** y **capitanes rotativos**, el juego es justo y todos participan.',
          tip: 'Un buen líder pregunta al final: "¿Todos jugaron? ¿Qué podemos mejorar la próxima vez?".' },
      ),
      S.sort(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.2.3', 'ef:4.1.12'], ambito: 'convivir',
          prompt: 'Clasifica cada acción de un capitán o capitana: ¿es **buen liderazgo** o **no**?',
          hint: 'Un buen líder incluye, escucha, organiza con justicia y da el ejemplo.',
          explain: 'Liderar bien es servir al grupo con justicia e igualdad; mandar a gritos o excluir no es liderazgo.' },
        { buckets: [
          { id: 'si', label: 'Buen liderazgo', icon: 'Flag', color: 'var(--c-ok)' },
          { id: 'no', label: 'No es buen liderazgo', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'Explicar las reglas y preguntar si quedaron claras', bucket: 'si' },
          { id: 'x2', text: 'Decidir solo, a gritos, sin escuchar a nadie', bucket: 'no' },
          { id: 'x3', text: 'Formar equipos mixtos contando 1-2', bucket: 'si' },
          { id: 'x4', text: 'Dejar fuera a las niñas "porque no saben"', bucket: 'no' },
          { id: 'x5', text: 'Animar a quien se equivocó', bucket: 'si' },
          { id: 'x6', text: 'Pasar el balón siempre a sus mejores amigos', bucket: 'no' },
        ] },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:4.2.3', 'ef:4.1.12'], ambito: 'convivir',
          prompt: '¡Líderes rotativos! Elijan entre las tarjetas suministradas: **tenta con bases, cuerda imaginaria o ronda con palmas**. En cada ronda, una persona diferente explica las reglas, comprueba el espacio y propone una adaptación. Al final recibe un consejo amable. **Poco espacio:** palmas o gestos en el lugar. **Adaptación:** se puede participar de pie o sentado y bajar el ritmo. **Vuelta a la calma:** respiración suave dirigida por el último líder.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después de la ronda 1 (primer líder)', exercise: { name: 'Juego tradicional dirigido por un líder', icon: 'Flag', seconds: 90 } },
          { label: 'Después de la ronda 2 (otro líder)', exercise: { name: 'Otro juego con líder rotativo', icon: 'Users', seconds: 90 } },
        ] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['ef', 'fc'], cnb: ['ef:4.1.12', 'ef:4.2.3'], ambito: 'convivir',
          prompt: '¿Qué harías si fueras quien organiza?' },
        { scene: { icon: 'Flag', text: 'En el recreo organizan una **chamusca**. Un compañero dice: "Las niñas no pueden jugar y tampoco pueden ser capitanas". **Lucía** y **Marta** querían jugar. Tú eres quien organiza hoy.' }, options: [
          { id: 'a', icon: 'EyeOff', text: 'Quedarme callado para no tener problemas', consequence: 'Lucía y Marta se quedan fuera. El grupo aprende que excluir "no pasa nada", y la injusticia se repite.', values: ['Indiferencia'], constructive: false },
          { id: 'b', icon: 'Users', text: 'Decir que todas y todos pueden jugar, formar equipos mixtos contando 1-2 y proponer que Lucía sea capitana de un equipo', consequence: 'Se juega con equipos parejos. Lucía organiza bien a su equipo y varios compañeros se dan cuenta de que su idea era un estereotipo.', values: ['Igualdad', 'Liderazgo', 'Derechos humanos'], constructive: true },
          { id: 'c', icon: 'MessageCircle', text: 'Hablar con calma con el compañero: explicarle que la igualdad es un derecho e invitarlo a jugar en un equipo mixto', consequence: 'El compañero no cambia de idea de inmediato, pero acepta jugar. Al final reconoce que el partido fue más parejo y divertido.', values: ['Diálogo', 'Respeto', 'Igualdad'], constructive: true },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:4.2.3', 'ef:4.1.12'], ambito: 'conocer',
          prompt: '**Repaso de la unidad.** Eres capitana de un equipo mixto con igualdad de oportunidades. Un defensor está entre tú y tu compañero y el equipo está nervioso. ¿Qué plan combina liderazgo inclusivo y habilidad física?',
          explain: 'Contra un defensor con los brazos arriba conviene el **pase con pique** (semana 4); para los nervios, **respiración abdominal lenta** (semana 6); y al terminar una carrera, **frenar con rodillas dobladas** (semana 2).' },
        { options: [
          { id: 'a', text: 'Pase con pique; antes, 3 respiraciones abdominales lentas en equipo; y frenar con rodillas dobladas al final de cada carrera' },
          { id: 'b', text: 'Pase directo a la cara del defensor; gritarle al equipo que se calme; frenar con las piernas rectas', feedback: 'El pase directo lo intercepta el defensor, gritar aumenta los nervios y frenar con piernas rectas puede lesionar.' },
          { id: 'c', text: 'Pase rodado lento; no hacer nada con los nervios; no frenar nunca', feedback: 'Un rodado lento es fácil de interceptar y los nervios se pueden manejar con la respiración.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.1.12', 'ef:4.2.3'], prompt: 'En una actividad física del recreo, ¿cuál es la mejor forma de organizar los equipos con igualdad y liderazgo?' },
        { options: [
          { id: 'a', text: 'Equipos mixtos formados al azar o contando 1-2, con líderes que se turnan' },
          { id: 'b', text: 'Que los dos mejores escojan y los demás esperen' },
          { id: 'c', text: 'Niñas contra niños siempre' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.1.12', 'ef:4.2.3'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La Constitución de Guatemala establece que el hombre y la mujer tienen iguales oportunidades y responsabilidades.', answer: true },
          { text: 'Un buen líder decide solo y no escucha al grupo.', answer: false, why: 'Un buen líder escucha, explica y organiza con justicia.' },
          { text: 'En un equipo diverso, las personas se complementan con distintas habilidades.', answer: true },
        ] },
      ),
      cierre({ areas: ['ef'], cnb: ['ef:4.2.3'] },
        ['Juego y valoro juegos tradicionales de mi comunidad', 'Lidero un juego explicando reglas y formando equipos justos', 'Defiendo que todas y todos tengan las mismas oportunidades de jugar'],
        ['Enseñaré un juego tradicional a alguien más pequeño', 'Me ofreceré a ser líder o árbitro en el recreo', 'Invitaré a jugar a quien se queda fuera']),
    ],
  }),
];
