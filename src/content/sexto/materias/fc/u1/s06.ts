/**
 * Formación Ciudadana · Unidad 1 · Semana 6 — Raíces que sostienen.
 * Progresión: qué son la cultura de paz y la cultura de violencia y cómo se expresan en los
 * espacios de todos los días (casa, escuela, calle, cancha, redes) → cuando la violencia se
 * repite: acoso escolar y ciberacoso, el papel de los testigos y cómo pedir ayuda.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Paz y violencia en los espacios cotidianos ───────────────────────── */
  lesson({
    id: 's06-fc-1',
    title: 'Cultura de paz y cultura de violencia a mi alrededor',
    icon: 'Search',
    minutes: 14,
    gancho: 'Un apodo feo, un empujón en la fila, un grupo que no deja jugar a alguien… ¿Todo eso es violencia, o solo los golpes?',
    objetivos: [
      'Explicar qué son la cultura de paz y la cultura de violencia',
      'Reconocer cinco formas de violencia: física, verbal, emocional, exclusión y digital',
      'Describir situaciones de tu casa, escuela y comunidad con la lupa de la paz',
    ],
    resumen: [
      'Una cultura es una forma de actuar que se aprende y se repite. La violencia y la paz se aprenden… y por eso también se pueden cambiar.',
      'Cultura de violencia: usar la fuerza, el miedo, la burla o la amenaza para imponerse, y verlo como "normal". Cultura de paz: resolver los problemas con diálogo, respeto, cooperación y justicia.',
      'La violencia no es solo física: también es verbal (insultos, apodos), emocional (amenazas, humillaciones), exclusión (dejar fuera a alguien) y digital (burlas o fotos en redes sin permiso).',
      'Para describir una situación pregunta: ¿dónde?, ¿quiénes?, ¿qué pasó?, ¿cómo se sintieron? y ¿fue paz o violencia, y por qué?',
    ],
    media: {
      id: 's06-fc-1-dos-caminos', kind: 'image', title: 'La misma escuela, dos caminos', aspect: '16:9',
      alt: 'Una escena de recreo dividida en dos mitades: en una, niñas y niños se empujan y se burlan; en la otra, conversan, se turnan la pelota e incluyen a una compañera.',
      brief: 'Ilustración plana en dos mitades con el mismo patio escolar guatemalteco (cancha de cemento, árbol de jocote, tienda escolar). Izquierda, tonos grises: un niño empuja en la fila de la refacción, dos se ríen señalando a un compañero, una niña sola a un lado. Derecha, colores cálidos: la fila ordenada, dos niños conversan tras un choque de pelota, un grupo mixto invita a la niña a jugar. Personajes diversos (trajes mayas, garífuna, mestizos). Sin sangre ni golpes explícitos, sin textos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:4.2.1'], ambito: 'convivir',
          prompt: '¿Cuáles de estas situaciones crees que son **violencia**? Marca todas las que pienses.',
          explain: '¡Las tres son violencia! Muchas personas creen que solo los golpes cuentan, pero las palabras que hieren y dejar a alguien fuera **también hacen daño**.' },
        { multiple: true, options: [
          { id: 'a', text: 'Empujar a un compañero en la fila de la refacción', icon: 'Hand' },
          { id: 'b', text: 'Ponerle un apodo feo a alguien y repetirlo todos los días', icon: 'MessageCircle' },
          { id: 'c', text: 'Decir "vos no jugás" siempre a la misma niña', icon: 'Users' },
        ], correct: ['a', 'b', 'c'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.1'], ambito: 'conocer', title: 'Dos culturas que se aprenden',
          prompt: 'Una **cultura** es una forma de pensar y actuar que un grupo **aprende y repite**. Hay una cultura de violencia y una cultura de paz. Toca cada tarjeta.' },
        { icon: 'Scale', body: 'Si la violencia se aprende, **también se puede desaprender**. Y la paz se puede enseñar y practicar.', reveal: [
          { icon: 'Zap', front: 'Cultura de violencia', back: 'Usar la **fuerza, el miedo, la burla o la amenaza** para ganar o imponerse. Se vuelve peligrosa cuando se ve como **normal**: "así ha sido siempre", "es solo una broma".' },
          { icon: 'HeartHandshake', front: 'Cultura de paz', back: 'Resolver los problemas con **diálogo, respeto, cooperación y justicia**. No significa que nunca haya problemas: significa que se enfrentan **sin dañar** a nadie.' },
          { icon: 'Home', front: '¿Dónde se aprenden?', back: 'En la **casa**, la **escuela**, la **calle**, la **cancha** y también en la **televisión y las redes sociales**. Lo que vemos repetido, tendemos a copiarlo.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.1'], ambito: 'conocer', title: 'Cinco formas de violencia',
          prompt: 'La violencia tiene muchas caras. Aprende a reconocerlas: toca cada tarjeta.' },
        { icon: 'Eye', body: 'Nombrar bien lo que pasa es el primer paso para cambiarlo. **Ninguna** forma de violencia es culpa de quien la sufre.', reveal: [
          { icon: 'Hand', front: 'Física', back: 'Daña el cuerpo: **empujar, golpear, patear, jalar el pelo**, esconder o romper las cosas de alguien.' },
          { icon: 'Megaphone', front: 'Verbal', back: 'Daña con palabras: **insultos, apodos ofensivos, gritos, burlas** por la forma de hablar, vestir o ser.' },
          { icon: 'Brain', front: 'Emocional', back: 'Daña los sentimientos y la confianza: **amenazas, humillaciones**, hacer sentir a alguien que no vale, obligarlo con miedo.' },
          { icon: 'Users', front: 'Exclusión', back: 'Dejar fuera a propósito: **no dejar jugar**, no hablarle a alguien, inventar rumores para que nadie se le acerque.' },
          { icon: 'Smartphone', front: 'Digital', back: 'Por teléfono o internet: **mensajes hirientes, memes para burlarse, compartir fotos sin permiso**, sacar a alguien de un grupo para humillarlo.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.1'], prompt: '¿Qué forma de violencia hay en cada situación?',
          hint: 'Pregúntate: ¿se dañó el cuerpo, se usaron palabras, se dejó fuera a alguien o pasó por el teléfono?',
          explain: 'Reconocer el tipo de violencia ayuda a describir bien lo que pasa y a pedir la ayuda correcta.' },
        { buckets: [
          { id: 'fis', label: 'Física', icon: 'Hand', color: 'var(--c-bad)' },
          { id: 'ver', label: 'Verbal', icon: 'Megaphone', color: 'var(--c-maiz-strong)' },
          { id: 'exc', label: 'Exclusión', icon: 'Users', color: 'var(--area-fc)' },
          { id: 'dig', label: 'Digital', icon: 'Smartphone', color: 'var(--area-ccss)' },
        ], items: [
          { id: 'v1', text: 'Le patean la mochila a Josué cada vez que pasa', bucket: 'fis' },
          { id: 'v2', text: 'Le gritan "¡indio!" a un compañero como insulto', bucket: 'ver', feedback: 'Usar el origen de alguien como insulto es violencia verbal y además discriminación.' },
          { id: 'v3', text: 'Nadie deja que Marta se siente con el grupo en la refacción', bucket: 'exc' },
          { id: 'v4', text: 'Publican una foto de Kevin dormido en clase para que se burlen', bucket: 'dig' },
          { id: 'v5', text: 'Se burlan de Rosa por su forma de hablar', bucket: 'ver' },
          { id: 'v6', text: 'Hacen un meme con la cara de Andrés y lo mandan a varios chats', bucket: 'dig', feedback: 'Pasa por el teléfono y llega a muchas personas: es violencia digital.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.1'], ambito: 'conocer', title: 'Paz y violencia en cada espacio',
          prompt: 'Las dos culturas aparecen en los lugares donde vivimos cada día. Toca cada espacio y compara.',
          media: { id: 's06-fc-1-cinco-espacios', kind: 'diagram', title: 'Cinco espacios, dos culturas', aspect: '4:3',
            alt: 'Tabla ilustrada con cinco filas (casa, escuela, calle, cancha y redes) y dos columnas: un ejemplo de violencia en gris y uno de paz en color.',
            brief: 'Diagrama tipo tabla con íconos grandes para cinco espacios: casa, escuela, calle o mercado, cancha, teléfono con redes. Columna izquierda "Cultura de violencia" en grises con una frase corta por fila (gritar para mandar, burlarse, pelear por el turno, insultar al árbitro, compartir un meme ofensivo). Columna derecha "Cultura de paz" en verdes y amarillos (conversar en familia, incluir, esperar el turno, dar la mano al rival, pedir permiso antes de compartir una foto). Letra grande y legible, sin personas reales ni marcas.' } },
        { icon: 'MapPin', body: 'En todos los espacios podemos elegir cómo actuar. Lo que hacemos seguido se vuelve **costumbre**.', reveal: [
          { icon: 'Home', front: 'En la casa', back: '**Violencia:** gritos o golpes para "corregir", insultos. **Paz:** hablar de los problemas en la mesa, repartir tareas entre todos, pedir perdón.' },
          { icon: 'School', front: 'En la escuela', back: '**Violencia:** burlas, apodos, empujones, dejar a alguien solo. **Paz:** normas de convivencia acordadas, incluir a todos, resolver con diálogo.' },
          { icon: 'Store', front: 'En la calle y el mercado', back: '**Violencia:** pleitos por el paso o el lugar, amenazas. **Paz:** ceder el paso, ayudar a una persona mayor con su carga, respetar el turno.' },
          { icon: 'Trophy', front: 'En la cancha', back: '**Violencia:** insultar al árbitro o al rival, pelear por un gol. **Paz:** juego limpio, dar la mano al final, aceptar la derrota.' },
          { icon: 'Smartphone', front: 'En las redes', back: '**Violencia:** memes ofensivos, reenviar fotos sin permiso. **Paz:** pedir permiso, escribir con respeto, no reenviar lo que daña.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: describir una situación con la lupa',
          prompt: 'Para **describir** una situación con claridad, usa **cinco preguntas**. Mira cómo se hace.' },
        { icon: 'Search', problem: 'En el partido del recreo, el equipo de sexto pierde 3 a 1. Cuando termina, Byron le grita "¡muerto de hambre!" al portero de quinto y le tira la pelota con fuerza. Varios se ríen. La maestra se acerca.',
          steps: [
            { text: '**¿Dónde?** En la cancha de la escuela, durante el recreo.' },
            { text: '**¿Quiénes?** Byron (quien agrede), el portero de quinto (quien recibe el daño) y los que se ríen (testigos).' },
            { text: '**¿Qué pasó?** Un insulto (violencia **verbal**) y un pelotazo con fuerza (violencia **física**).' },
            { text: '**¿Cómo se sintieron?** El portero, humillado y con miedo; Byron, enojado por perder.', why: 'Pensar en los sentimientos nos ayuda a entender el daño y también la causa: el enojo mal manejado.' },
            { text: '**¿Paz o violencia? ¿Por qué?** Cultura de **violencia**: se usó el insulto y la fuerza para descargar el enojo, y las risas la hicieron parecer normal.' },
          ],
          answer: 'Una respuesta de **paz** habría sido: respirar, aceptar la derrota, dar la mano y hablar después sobre el partido.',
          tip: 'Dónde → quiénes → qué pasó → cómo se sintieron → ¿paz o violencia? y ¿por qué?' },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.1'], prompt: 'Ahora tú. ¿Cada situación muestra **cultura de paz** o **cultura de violencia**?',
          hint: 'Fíjate en cómo se resuelve el problema: ¿con diálogo y respeto, o con fuerza, miedo o burla?',
          explain: 'En los mismos espacios (casa, escuela, mercado, cancha, redes) puede haber paz o violencia: depende de cómo actuamos.' },
        { buckets: [
          { id: 'paz', label: 'Cultura de paz', icon: 'HeartHandshake', color: 'var(--c-ok)' },
          { id: 'vio', label: 'Cultura de violencia', icon: 'Zap', color: 'var(--c-bad)' },
        ], items: [
          { id: 's1', text: 'En casa, la familia se sienta a hablar porque dos hermanos pelearon por la tele', bucket: 'paz' },
          { id: 's2', text: 'En el mercado, un señor amenaza a otro para quitarle su lugar de venta', bucket: 'vio' },
          { id: 's3', text: 'En la cancha, los dos equipos se dan la mano al terminar', bucket: 'paz' },
          { id: 's4', text: 'En el chat, alguien pide que borren una foto que se compartió sin permiso', bucket: 'paz' },
          { id: 's5', text: 'En la escuela, a un niño le dicen apodos cada día "solo por jugar"', bucket: 'vio', feedback: 'Aunque digan que es juego, si a la persona le duele y se repite, es violencia.' },
          { id: 's6', text: 'En la calle, un vecino ayuda a una abuela a cruzar con su canasto', bucket: 'paz' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:4.2.1'], ambito: 'conocer', prompt: 'Lee lo que escribió Itzel en su diario y responde.' },
        { genre: 'Diario personal', heading: 'Un sábado en San Juan', passage:
          'Hoy acompañé a mi mamá al mercado. En la entrada, dos señores se pelearon por un espacio para descargar su pick-up. Uno le gritó al otro y lo empujó. Nadie dijo nada; mi mamá me dijo que así pasa siempre.\n\nDespués pasamos por la cancha. Había partido de la liga infantil. Cuando un niño se cayó, el rival se detuvo y lo ayudó a levantarse. Al final los dos equipos se dieron la mano, aunque uno había perdido.\n\nEn la noche, en el chat de mi grado, alguien subió un meme con la cara de Julio. Varios mandaron caritas riéndose. Yo no mandé nada, pero me quedé pensando en cómo se sentirá Julio.',
          questions: [
            { q: '¿En qué espacio hubo **violencia física**?', options: [
              { id: 'a', text: 'En la entrada del mercado' },
              { id: 'b', text: 'En la cancha' },
              { id: 'c', text: 'En la casa de Itzel' },
            ], correct: 'a', why: 'Hubo un grito (verbal) y un empujón (física) entre los dos señores.' },
            { q: '¿Qué frase muestra que la violencia se estaba viendo como **normal**?', options: [
              { id: 'a', text: '"Así pasa siempre"' },
              { id: 'b', text: '"Los dos equipos se dieron la mano"' },
              { id: 'c', text: '"Me quedé pensando"' },
            ], correct: 'a', why: 'Cuando decimos "así pasa siempre", aceptamos la violencia sin cuestionarla: eso la vuelve cultura.' },
            { q: '¿Qué forma de violencia sufrió Julio?', options: [
              { id: 'a', text: 'Digital' },
              { id: 'b', text: 'Física' },
              { id: 'c', text: 'Ninguna, era solo un meme' },
            ], correct: 'a', why: 'Un meme para burlarse de alguien en un chat es violencia digital, aunque parezca chistoso.' },
            { q: '¿En qué espacio se vivió la **cultura de paz**?', options: [
              { id: 'a', text: 'En la cancha' },
              { id: 'b', text: 'En el chat' },
              { id: 'c', text: 'En la entrada del mercado' },
            ], correct: 'a' },
          ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:4.2.1'], ambito: 'convivir',
          prompt: 'Un primo te dice: "A Kevin le decimos Cabezón desde primero. Si se enoja es porque no aguanta una broma". ¿Qué le responderías con la **lupa de la paz**?',
          explain: 'Una broma es divertida **para todos**. Si a alguien le duele y se repite por años, es violencia verbal que se volvió "normal". La paz empieza por dejar de repetirla.' },
        { options: [
          { id: 'a', text: '"Si a Kevin le molesta, ya no es broma: es un apodo que hiere. Llamémoslo por su nombre."', icon: 'HeartHandshake' },
          { id: 'b', text: '"Tenés razón, Kevin es muy delicado."', icon: 'ThumbsUp', feedback: 'Culpar a quien sufre el daño es justo lo que mantiene la cultura de violencia.' },
          { id: 'c', text: '"Mejor pongámosle un apodo peor para que se acostumbre."', icon: 'Zap', feedback: 'Eso aumenta el daño. La violencia no se acostumbra: se detiene.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.2.1'], prompt: '¿Cuál situación muestra **cultura de paz** en la escuela?' },
        { options: [
          { id: 'a', text: 'Dos compañeros que discutieron por un lápiz hablan con calma y se turnan para usarlo' },
          { id: 'b', text: 'Un grupo esconde la mochila de una compañera para reírse' },
          { id: 'c', text: 'En la fila, el más grande empuja para pasar primero' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Dejar fuera a alguien a propósito, una y otra vez, es una forma de violencia.', answer: true },
          { text: 'La violencia solo existe cuando hay golpes.', answer: false, why: 'También hay violencia verbal, emocional, de exclusión y digital.' },
          { text: 'La cultura de paz y la de violencia se aprenden, por eso se pueden cambiar.', answer: true },
          { text: 'Compartir la foto de alguien sin su permiso para que se burlen es violencia digital.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Acoso escolar, ciberacoso y pedir ayuda ───────────────────────── */
  lesson({
    id: 's06-fc-2',
    title: 'Cuando la violencia se repite: acoso y ciberacoso',
    icon: 'ShieldCheck',
    minutes: 15,
    gancho: 'Una pelea de un día y una burla que se repite todos los días durante meses, ¿son lo mismo?',
    objetivos: [
      'Diferenciar un conflicto entre iguales del acoso escolar',
      'Reconocer el ciberacoso y qué hacer si te pasa',
      'Explicar cómo los testigos pueden detener la violencia y a quién pedir ayuda',
    ],
    resumen: [
      'Un conflicto es un desacuerdo entre personas; se puede resolver hablando. El acoso escolar es violencia que se repite, a propósito, contra alguien que tiene menos poder para defenderse.',
      'El ciberacoso es acoso por teléfono o internet: llega a cualquier hora, lo ven muchas personas y es difícil de borrar.',
      'Si te pasa: no respondas con violencia, guarda la evidencia, bloquea o reporta y cuéntalo a un adulto de confianza. No es tu culpa.',
      'Los testigos tienen mucho poder: no reírse, no reenviar, acompañar a quien sufre y avisar a un adulto.',
    ],
    media: {
      id: 's06-fc-2-testigos', kind: 'animation', title: 'El poder de los testigos', aspect: '16:9', duration: 50,
      alt: 'Animación: un niño recibe burlas en el corredor mientras otros miran; uno a uno, los que miran dejan de reír, se acercan a acompañarlo y una niña va a buscar a la maestra.',
      brief: 'Animación 2D de 50 s, trazos suaves. Corredor de una escuela guatemalteca. Un niño es rodeado por dos compañeros que se burlan; alrededor, seis testigos (niñas y niños de distintos pueblos) ríen y graban con un teléfono. Una voz explica: "La mayoría no agrede… pero mira". Una testigo baja el teléfono, otro deja de reír, dos se acercan al niño y le dicen "vení con nosotros"; una niña va por la maestra. Los agresores se quedan sin público. Cierre en texto: "Sin público, el acoso pierde fuerza". Sin golpes visibles; narración en español, subtítulos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:4.2.1'], ambito: 'convivir',
          prompt: 'Desde hace tres meses, dos compañeros esconden la refacción de Pablo, que es el más pequeño del grado, y se ríen cuando él la busca. ¿Qué crees que es?',
          explain: 'Es **acoso escolar**: se repite, es a propósito y Pablo tiene menos poder para defenderse. Hoy aprenderás a distinguirlo de un simple conflicto.' },
        { options: [
          { id: 'a', text: 'Un juego sin importancia', icon: 'Smile', feedback: 'Un juego es divertido para todos. Aquí solo se ríen quienes esconden la refacción.' },
          { id: 'b', text: 'Algo más serio que se repite y hace daño', icon: 'ShieldCheck' },
          { id: 'c', text: 'Culpa de Pablo por ser pequeño', icon: 'User', feedback: 'Nunca es culpa de quien sufre la violencia.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.1'], ambito: 'conocer', title: 'Conflicto no es lo mismo que acoso',
          prompt: 'Los **conflictos** (desacuerdos) son normales entre personas y se pueden resolver hablando. El **acoso escolar** es distinto: tiene **tres señales**. Toca cada tarjeta.' },
        { icon: 'ShieldCheck', body: 'Si ves las tres señales juntas, no basta con "arreglarse entre ellos": se necesita la **ayuda de un adulto**.', reveal: [
          { icon: 'RefreshCw', front: '1. Se repite', back: 'No es una vez: pasa **muchas veces**, durante semanas o meses.' },
          { icon: 'Target', front: '2. Es a propósito', back: 'Quien agrede **quiere** hacer daño, humillar o dar miedo. No es un accidente.' },
          { icon: 'Scale', front: '3. Hay desigualdad de poder', back: 'Quien sufre tiene **menos fuerza o apoyo**: es más pequeño, está solo, es nuevo o el grupo está en su contra.' },
          { icon: 'MessagesSquare', front: 'En cambio, un conflicto…', back: 'Es un desacuerdo **entre iguales** (por un turno, un lápiz, una regla del juego) que se puede resolver con diálogo.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.1'], prompt: 'Clasifica: ¿es un **conflicto** que se puede resolver hablando, o es **acoso** que necesita ayuda de un adulto?',
          hint: 'Busca las tres señales: ¿se repite?, ¿es a propósito?, ¿uno tiene menos poder?',
          explain: 'Los conflictos entre iguales se resuelven con diálogo. El acoso, con sus tres señales, necesita que intervenga un adulto.' },
        { buckets: [
          { id: 'con', label: 'Conflicto', icon: 'MessagesSquare', color: 'var(--c-ok)' },
          { id: 'aco', label: 'Acoso', icon: 'ShieldCheck', color: 'var(--c-bad)' },
        ], items: [
          { id: 'k1', text: 'Dos amigas discuten un día porque las dos querían ser capitanas', bucket: 'con' },
          { id: 'k2', text: 'Un grupo de sexto le quita el dinero de la refacción a un niño de segundo cada semana', bucket: 'aco' },
          { id: 'k3', text: 'Dos equipos no se ponen de acuerdo sobre si fue gol', bucket: 'con' },
          { id: 'k4', text: 'Desde que llegó, a Lesbia le imitan su forma de hablar todos los días', bucket: 'aco', feedback: 'Se repite, es a propósito y ella es nueva: tiene las tres señales.' },
          { id: 'k5', text: 'Dos compañeros discuten por quién usa primero la computadora', bucket: 'con' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.1'], ambito: 'conocer', title: 'El ciberacoso',
          prompt: 'El **ciberacoso** es acoso por **teléfono o internet**. Tiene sus propias características. Toca cada tarjeta.' },
        { icon: 'Smartphone', body: 'Detrás de cada pantalla hay una persona con sentimientos. Lo que publicas **se queda** y puede llegar a muchos.', reveal: [
          { icon: 'Clock', front: 'Llega a cualquier hora', back: 'No termina al salir de la escuela: sigue en la casa, de noche y los fines de semana.' },
          { icon: 'Users', front: 'Lo ven muchas personas', back: 'Un mensaje o una foto se reenvía en segundos a decenas o cientos de personas.' },
          { icon: 'Lock', front: 'Es difícil de borrar', back: 'Aunque se borre, alguien pudo **guardarlo**. Por eso nunca compartas fotos de otros sin permiso.' },
          { icon: 'ShieldCheck', front: 'Qué hacer si te pasa', back: '**No respondas** con insultos, **guarda la evidencia** (captura de pantalla), **bloquea o reporta** y **cuéntalo** a un adulto de confianza. No es tu culpa.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: el caso del chat',
          prompt: 'Mira cómo Ana y un testigo, Luis, enfrentaron un caso de ciberacoso.' },
        { icon: 'MessageCircle', problem: 'En el chat del grado, alguien crea una encuesta: "¿Quién es la más fea del grado?" y pone la foto de Ana. Varios votan y mandan risas. Ana lo ve en la noche.',
          steps: [
            { text: 'Ana **no responde** con insultos, aunque siente mucha rabia y tristeza.', why: 'Responder con violencia hace crecer el problema y puede meterla en problemas a ella.' },
            { text: 'Ana **guarda la evidencia**: toma capturas de pantalla con la fecha.' },
            { text: 'Ana **se sale del chat** y **se lo cuenta a su mamá** esa misma noche.' },
            { text: 'Luis, que estaba en el chat, **no vota ni reenvía**; le escribe a Ana: "Eso está muy mal, cuenta conmigo", y avisa a la maestra.', why: 'Un testigo que no se ríe y avisa le quita público al acoso.' },
            { text: 'La mamá y la maestra hablan con la dirección; la escuela aplica sus **normas de convivencia** y habla con quienes participaron.' },
          ],
          answer: 'Ana se protegió y **pidió ayuda**; Luis usó su poder de **testigo**. Juntos, con los adultos, detuvieron el ciberacoso.',
          tip: 'No respondo → guardo evidencia → bloqueo o reporto → se lo cuento a un adulto de confianza.' },
      ),
      S.order(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:4.2.1'], prompt: 'Ordena lo que conviene hacer si **te pasa** ciberacoso.',
          hint: 'Primero te proteges sin empeorar las cosas; al final buscas ayuda con los adultos.',
          explain: 'No responder → guardar evidencia → bloquear o reportar → contarlo a un adulto de confianza → buscar juntos apoyo en la escuela.' },
        { labels: { start: 'Primero', end: 'Después' }, items: [
          { id: 'c1', text: 'No responder con insultos ni amenazas', icon: 'VolumeX' },
          { id: 'c2', text: 'Guardar la evidencia con capturas de pantalla', icon: 'Camera' },
          { id: 'c3', text: 'Bloquear o reportar a quien agrede', icon: 'Lock' },
          { id: 'c4', text: 'Contarlo a un adulto de confianza', icon: 'MessageCircle' },
          { id: 'c5', text: 'Buscar juntos el apoyo de la escuela', icon: 'School' },
        ] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:4.2.1'], ambito: 'convivir', prompt: 'Eres testigo. ¿Qué harías tú?' },
        { scene: { icon: 'Smartphone', text: 'Te llega un video donde se burlan de Walter, un compañero, porque se cayó en educación física. Te dicen: "¡Reenvialo a todos, está buenísimo!".' },
          options: [
            { id: 'a', icon: 'Share2', text: 'Reenviarlo: total, ya lo vieron muchos', consequence: 'El video llega a otros grados. Walter no quiere volver a la escuela. Tú fuiste parte de la cadena.', values: ['Indiferencia'], constructive: false },
            { id: 'b', icon: 'VolumeX', text: 'No reenviarlo y pedir en el chat que lo borren', consequence: 'Algunos se molestan, pero otros te apoyan y el video se borra del chat. La cadena se corta contigo.', values: ['Respeto', 'Valentía'], constructive: true },
            { id: 'c', icon: 'HeartHandshake', text: 'No reenviarlo, escribirle a Walter para apoyarlo y avisar a la maestra', consequence: 'Walter se siente acompañado. La maestra habla con el grado sobre el respeto en redes.', values: ['Solidaridad', 'Responsabilidad'], constructive: true },
          ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:4.2.1'], ambito: 'convivir',
          prompt: 'Nidia sufre acoso y le da vergüenza contarlo. ¿Qué **adulto de confianza** puede ayudarla? Marca **todas** las opciones correctas.',
          explain: 'Un adulto de confianza es alguien que te escucha, te cree y puede actuar: familia, docentes, dirección u orientación. Si hay peligro inmediato, se puede llamar a la **Policía Nacional Civil al 110**.' },
        { multiple: true, options: [
          { id: 'a', text: 'Su mamá, su papá o la persona que la cuida', icon: 'Home' },
          { id: 'b', text: 'Su maestra o la directora de la escuela', icon: 'School' },
          { id: 'c', text: 'Un desconocido que conoció en internet', icon: 'Smartphone', feedback: 'Un desconocido de internet no es un adulto de confianza. Busca personas que conoces y que te cuidan.' },
          { id: 'd', text: 'Una tía o un abuelo que la escucha', icon: 'HeartHandshake' },
        ], correct: ['a', 'b', 'd'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.2.1'], prompt: '¿Cuál situación es **acoso escolar** y no un simple conflicto?' },
        { options: [
          { id: 'a', text: 'Todos los días, un grupo le dice apodos a una niña nueva y no la deja entrar al salón' },
          { id: 'b', text: 'Dos amigos discuten una vez sobre las reglas de un juego y luego se ponen de acuerdo' },
          { id: 'c', text: 'Dos equipos no se ponen de acuerdo sobre la hora del partido' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Si sufres ciberacoso, conviene guardar la evidencia y contarlo a un adulto de confianza.', answer: true },
          { text: 'Los testigos no pueden hacer nada para detener el acoso.', answer: false, why: 'Los testigos pueden no reírse, no reenviar, acompañar a quien sufre y avisar a un adulto.' },
          { text: 'El acoso escolar se repite, es a propósito y hay desigualdad de poder.', answer: true },
          { text: 'Si alguien sufre acoso, es porque se lo buscó.', answer: false, why: 'Nunca es culpa de quien sufre la violencia.' },
        ] },
      ),
      cierre({ areas: ['fc'], cnb: ['fc:4.2.1'] },
        ['Reconozco la cultura de paz y la de violencia en mi casa, escuela y comunidad', 'Distingo un conflicto del acoso escolar', 'Sé qué hacer y a quién pedir ayuda ante el acoso y el ciberacoso'],
        ['No reenviaré nada que se burle de otra persona', 'Llamaré a mis compañeros por su nombre, no por apodos', 'Si veo acoso, acompañaré a quien lo sufre y avisaré a un adulto']),
    ],
  }),
];
