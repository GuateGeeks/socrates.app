/**
 * Expresión Artística · Unidad 1 · Semana 2 — Lecto-escritura musical en la música que escucho.
 * Progresión: del pulso y las figuras (semana 1) al compás (agrupar pulsos con acentos) →
 * la melodía: altura + ritmo; leer y escuchar si sube, baja o se repite (grado conjunto y salto).
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. El compás ───────────────────────── */
  lesson({
    id: 's02-art-1',
    title: 'El compás: los pulsos se agrupan',
    icon: 'Drum',
    minutes: 14,
    gancho: 'En el mercado, la vendedora de tortillas palmea "PLA-pla-pla, PLA-pla-pla". ¿Te has fijado que algunos golpes suenan más fuertes que otros y se repiten cada cierto tiempo?',
    objetivos: [
      'Reconocer el acento y agrupar pulsos en compases de 2, 3 y 4 tiempos',
      'Leer la cifra de compás y las barras de compás',
      'Escribir compases completos con figuras musicales',
    ],
    resumen: [
      'En la música, algunos pulsos suenan más fuertes: son pulsos acentuados. El acento se repite y agrupa los pulsos.',
      'Un compás es un grupo de pulsos que empieza con un acento. Las barras de compás son líneas verticales que separan un compás del siguiente.',
      'La cifra de compás está al inicio: el número de arriba dice cuántos tiempos tiene cada compás (2/4 = 2, 3/4 = 3, 4/4 = 4). El 4 de abajo indica que la negra vale un tiempo.',
      'Una marcha se cuenta en 2 ("UN-dos"); un vals, en 3 ("UN-dos-tres"). Cada compás debe sumar exactamente los tiempos que dice la cifra.',
    ],
    media: {
      id: 's02-art-1-compases', kind: 'animation', title: 'Pulsos que se agrupan', aspect: '16:9', duration: 50,
      alt: 'Una fila de puntos que laten al pulso; algunos crecen y brillan (los acentos). Luego aparecen líneas verticales que separan los grupos de 2, de 3 y de 4 pulsos.',
      brief: 'Animación 2D de 50 s sobre fondo crema. (1) Doce círculos iguales laten en fila al ritmo de un tambor suave. (2) Cada 3 círculos, uno se agranda y se colorea (acento) mientras el tambor suena más fuerte: "UN-dos-tres". (3) Aparecen barras verticales antes de cada acento y el rótulo "compás de 3 tiempos"; al inicio se dibuja la cifra 3/4. (4) Se repite con grupos de 2 (rótulo "marcha") y de 4. Narración en español neutro, voz cálida; subtítulos. Sin marcas ni instrumentos con logotipos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'conocer',
          prompt: 'Escucha los dos fragmentos de marimba y cuenta con la mano. ¿Cuál se cuenta **"UN-dos-tres, UN-dos-tres"**?',
          explain: 'En el segundo fragmento el golpe fuerte vuelve **cada 3 pulsos**, como en un vals. En el primero vuelve cada 2, como en una marcha.',
          media: {
            id: 's02-art-1-marcha-vals', kind: 'audio', title: '¿Marcha o vals?', duration: 30,
            alt: 'Primero una melodía breve de marimba con golpes fuertes cada dos pulsos; después otra con golpes fuertes cada tres pulsos.',
            brief: 'Audio de 30 s con dos piezas ORIGINALES breves para marimba sencilla y bombo suave (no usar obras con derechos). (1) 12 s en compás de 2/4, tempo de marcha (≈100 pulsos por minuto), el bombo marca el primer tiempo de cada compás con claridad. (2) Silencio de 2 s. (3) 12 s en compás de 3/4, tempo de vals (≈120), bombo en el primer tiempo. Sin voz. Mezcla limpia para bocinas de celular.',
          } },
        { options: [
          { id: 'a', text: 'El primer fragmento', icon: 'Footprints', feedback: 'En el primero el golpe fuerte vuelve cada 2 pulsos: "UN-dos, UN-dos", como al marchar.' },
          { id: 'b', text: 'El segundo fragmento', icon: 'Music' },
          { id: 'c', text: 'Ninguno: todos los golpes suenan igual', icon: 'Minus', feedback: 'Escucha otra vez el bombo: hay golpes más fuertes que se repiten.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'conocer', title: 'Acento y compás',
          prompt: 'En casi toda la música, los pulsos no suenan todos iguales: algunos se sienten **más fuertes**. Toca cada tarjeta.' },
        { icon: 'Drum', body: 'Al pulso más fuerte le llamamos **acento**. Como el acento se repite siempre a la misma distancia, los pulsos quedan **agrupados**. Cada grupo es un **compás**.', reveal: [
          { icon: 'Zap', front: 'Acento', back: 'El pulso que se siente más fuerte. Cuando cuentas, lo dices más fuerte: "**UN**-dos-tres".' },
          { icon: 'Layers', front: 'Compás', back: 'Un grupo de pulsos que empieza con un acento. Puede ser de **2**, **3** o **4** tiempos.' },
          { icon: 'Slash', front: 'Barra de compás', back: 'Una **línea vertical** en el pentagrama que separa un compás del siguiente. Al final de la obra hay una **doble barra**.' },
          { icon: 'Footprints', front: 'Marcha y vals', back: 'Una **marcha** se cuenta en 2: "**UN**-dos" (izquierdo-derecho). Un **vals** se cuenta en 3: "**UN**-dos-tres", con un giro suave.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'conocer', title: 'La cifra de compás',
          prompt: 'Al inicio del pentagrama, junto a la clave de sol, hay **dos números**, uno encima del otro. Se llama **cifra de compás**.',
          media: {
            id: 's02-art-1-cifras', kind: 'diagram', title: 'Tres cifras de compás', aspect: '16:9',
            alt: 'Tres pentagramas cortos: uno con cifra 2/4 y compases de dos negras, otro con 3/4 y compases de tres negras, otro con 4/4 y compases de cuatro negras, separados por barras de compás.',
            brief: 'Diagrama escolar en tres filas sobre fondo blanco. Cada fila: clave de sol, cifra de compás grande (2/4, 3/4, 4/4), dos compases con negras en la nota Sol, barras de compás verticales en color y doble barra final. Debajo de cada negra, el número del tiempo (1-2, 1-2-3, 1-2-3-4) con el "1" en negrita y un pequeño signo de acento ">". A la derecha, rótulos: "marcha", "vals", "muchas canciones". Trazo negro grueso, legible en celular.',
          } },
        { icon: 'Music2', body: 'El **número de arriba** dice **cuántos tiempos** tiene cada compás. El **4 de abajo** dice que la **negra vale un tiempo** (como aprendiste la semana pasada).', reveal: [
          { icon: 'Footprints', front: '2/4', back: '**2 tiempos** por compás. Por ejemplo: dos negras, o una blanca. Se usa mucho en marchas.' },
          { icon: 'Music', front: '3/4', back: '**3 tiempos** por compás. Por ejemplo: tres negras, o una blanca y una negra. Es el compás del vals.' },
          { icon: 'Music2', front: '4/4', back: '**4 tiempos** por compás. Por ejemplo: cuatro negras, dos blancas o una redonda. Es el más común en canciones.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto: ¿están completos los compases?',
          prompt: 'Cada compás debe sumar **exactamente** los tiempos de la cifra. Mira cómo se revisa.' },
        { icon: 'Search', problem: 'Una partitura en **3/4** tiene estos compases: **| blanca · negra | negra · dos corcheas · negra | blanca · dos corcheas |** ¿Están bien escritos?',
          steps: [
            { text: 'La cifra es 3/4: cada compás debe sumar **3 tiempos**.' },
            { text: 'Compás 1: blanca (2) + negra (1) = **3** ✔.' },
            { text: 'Compás 2: negra (1) + dos corcheas (½ + ½ = 1) + negra (1) = **3** ✔.', why: 'Dos corcheas juntas duran lo mismo que una negra.' },
            { text: 'Compás 3: blanca (2) + dos corcheas (1) = **3** ✔.' },
          ],
          answer: 'Los tres compases suman 3 tiempos: **están bien escritos**. Se cuentan "**UN**-dos-tres" y el acento cae al inicio de cada compás.',
          tip: 'Si un compás suma más o menos tiempos que la cifra, hay un error: revisa figura por figura.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['art', 'mat'], cnb: ['art:1.1.2'], ambito: 'hacer',
          prompt: 'Ahora tú: la partitura está en **3/4**. Clasifica cada compás como **completo** (suma 3) o **incorrecto**.',
          hint: 'Recuerda: redonda 4, blanca 2, negra 1 y dos corcheas juntas 1.',
          explain: 'Solo los compases que suman exactamente 3 tiempos están completos en 3/4.' },
        { buckets: [
          { id: 'ok', label: 'Completo (3 tiempos)', icon: 'Check', color: 'var(--c-ok)' },
          { id: 'no', label: 'Incorrecto', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'c1', text: 'negra · negra · negra', bucket: 'ok' },
          { id: 'c2', text: 'blanca · negra', bucket: 'ok' },
          { id: 'c3', text: 'blanca · blanca', bucket: 'no', feedback: '2 + 2 = 4 tiempos: le sobra uno para 3/4.' },
          { id: 'c4', text: 'dos corcheas · blanca', bucket: 'ok' },
          { id: 'c5', text: 'redonda', bucket: 'no', feedback: 'La redonda dura 4 tiempos; en 3/4 no cabe.' },
          { id: 'c6', text: 'negra · dos corcheas', bucket: 'no', feedback: '1 + 1 = 2 tiempos: le falta uno.' },
        ] },
      ),
      S.rhythm(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'hacer',
          prompt: 'Compón un compás de **3/4** para un vals de marimba. Debe tener una **blanca**. Tócalo y cuéntalo "**UN**-dos-tres".',
          explain: 'La blanca dura 2 tiempos; te queda 1 tiempo, que puedes llenar con una negra o con dos corcheas.' },
        { beats: 3, allowed: ['blanca', 'negra', 'corchea'], mustInclude: ['blanca'], showFractions: true },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'conocer',
          prompt: 'Escucha: una banda escolar ensaya para el desfile. El bombo suena fuerte en **un pulso sí y otro no**: "**PUM**-pa, **PUM**-pa". ¿Qué cifra de compás le queda mejor?',
          explain: 'El acento vuelve cada **2** pulsos, así que el compás es de 2 tiempos: **2/4**, el compás típico de marcha.',
          media: {
            id: 's02-art-1-banda', kind: 'audio', title: 'La banda ensaya', duration: 15,
            alt: 'Una banda escolar de tambores, redoblantes y liras marcha: el bombo suena fuerte cada dos pulsos.',
            brief: 'Audio de 15 s: grabación o recreación de banda escolar guatemalteca (bombo, redoblantes, liras) tocando una marcha ORIGINAL sencilla en 2/4, tempo ≈110. El bombo acentúa con claridad el primer tiempo de cada compás. Ambiente de patio sin voces reconocibles ni música con derechos.',
          } },
        { options: [
          { id: 'a', text: '2/4' },
          { id: 'b', text: '3/4', feedback: 'En 3/4 el acento vuelve cada 3 pulsos: "UN-dos-tres". Aquí vuelve cada 2.' },
          { id: 'c', text: '4/4', feedback: 'Podría escribirse, pero lo que escuchas es un acento fuerte cada 2 pulsos: el compás natural es 2/4.' },
        ], correct: ['a'] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['art', 'mat'], cnb: ['art:1.1.2'], ambito: 'hacer',
          prompt: 'Un vals de marimba en **3/4** tiene una introducción de **8 compases**. ¿Cuántos **pulsos** dura la introducción?',
          explain: 'Cada compás tiene 3 pulsos: 8 × 3 = **24 pulsos**.' },
        { answer: 24, unit: 'pulsos', misconceptions: [
          { value: 11, msg: 'Sumaste 8 + 3. Cada uno de los 8 compases tiene 3 pulsos: hay que multiplicar.' },
          { value: 32, msg: 'Así sería en 4/4. En 3/4 cada compás tiene 3 pulsos.' },
        ] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'hacer',
          prompt: '**En casa:** conviértete en **detective del compás** con la música que suena en tu casa, en la radio o en la calle.' },
        { goal: 'Descubrir si tres canciones o piezas que escuchas se cuentan en 2, en 3 o en 4.',
          steps: [
            { title: 'Escucha el pulso', detail: 'Elige una canción. Marca el pulso con el pie, sin apurarte.' },
            { title: 'Busca el acento', detail: 'Da una palmada en el pulso que se siente más fuerte y golpes suaves en el pecho en los demás.' },
            { title: 'Cuenta', detail: 'Prueba contar "UN-dos", "UN-dos-tres" o "UN-dos-tres-cuatro". El conteo correcto hace que la palmada caiga siempre en el "UN".' },
            { title: 'Anota', detail: 'Escribe en tu cuaderno el nombre de la pieza (o una descripción), su cifra de compás y un compás de ritmo que escuches.' },
          ],
          evidence: 'Una tabla con 3 piezas, su compás (2/4, 3/4 o 4/4) y un compás de ritmo escrito con figuras.',
          rubric: ['Mantengo el pulso con el pie', 'Encuentro el acento', 'Mis compases escritos suman los tiempos de la cifra'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.2'], prompt: 'En una partitura en **4/4**, ¿cuál compás está **completo**?' },
        { options: [
          { id: 'a', text: 'blanca · negra' },
          { id: 'b', text: 'blanca · negra · negra' },
          { id: 'c', text: 'redonda · negra' },
          { id: 'd', text: 'negra · dos corcheas' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La barra de compás es una línea vertical que separa un compás de otro.', answer: true },
          { text: 'En la cifra 3/4, el número de arriba indica que cada compás tiene 3 tiempos.', answer: true },
          { text: 'El acento es el pulso más suave del compás.', answer: false, why: 'El acento es el pulso que se siente más fuerte; suele ser el primero del compás.' },
          { text: 'Un vals se cuenta "UN-dos".', answer: false, why: 'El vals se cuenta en 3: "UN-dos-tres".' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. La melodía ───────────────────────── */
  lesson({
    id: 's02-art-2',
    title: 'La melodía: sonidos que suben, bajan y se repiten',
    icon: 'Music2',
    minutes: 15,
    gancho: 'Si tarareas una canción que te gusta, tu voz sube y baja como un camino entre montañas. ¿Se podrá dibujar ese camino?',
    objetivos: [
      'Explicar qué es una melodía: sonidos de distinta altura con un ritmo',
      'Reconocer si una melodía sube, baja o se repite, al escucharla y al leerla',
      'Distinguir movimientos por grado conjunto y por salto en el pentagrama',
    ],
    resumen: [
      'Una melodía es una sucesión de sonidos de distinta altura, organizada con un ritmo. Es la parte de la canción que puedes cantar o tararear.',
      'El contorno de una melodía es el "camino" que dibuja: puede subir (ascendente), bajar (descendente) o repetir la misma nota.',
      'Grado conjunto: pasar a la nota vecina (de una línea al espacio de al lado). Salto: pasar a una nota más lejana (de línea a línea o de espacio a espacio, o más).',
      'Para leer una melodía se leen dos cosas a la vez: la altura (dónde está la nota) y la duración (qué figura es).',
    ],
    media: {
      id: 's02-art-2-contorno', kind: 'animation', title: 'El camino de la melodía', aspect: '16:9', duration: 45,
      alt: 'Mientras suena una melodía de marimba, un punto brillante va dejando una línea que sube y baja sobre el pentagrama, como el perfil de una montaña.',
      brief: 'Animación 2D de 45 s. Pentagrama en clave de sol. Suena en marimba la melodía Mi-Mi-Fa-Sol | Sol-Fa-Mi-Re | Do-Do-Re-Mi | Mi-Re-Re (tema del "Himno a la alegría" de Beethoven, dominio público). Cada nota aparece como negra (la penúltima como negra con puntillo opcional; puede simplificarse a negras) y un hilo de color las une, formando un contorno que sube y baja. Al final el hilo se separa del pentagrama y se convierte en la silueta de un volcán y un valle. Rótulos: "sube", "baja", "se repite". Narración breve en español, subtítulos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'conocer',
          prompt: 'Escucha la melodía de flauta. ¿Qué camino dibuja?',
          explain: 'Empieza grave y termina aguda: es una melodía **ascendente**. Hoy aprenderás a reconocer ese camino al oír y al leer.',
          media: {
            id: 's02-art-2-flauta', kind: 'audio', title: 'Una melodía que viaja', duration: 10,
            alt: 'Una flauta dulce toca cinco notas, cada una un poco más aguda que la anterior.',
            brief: 'Audio de 10 s: flauta dulce soprano toca Do-Re-Mi-Fa-Sol en negras, tempo tranquilo (≈80), con un final sostenido en Sol. Sin acompañamiento ni voz. Afinación cuidada.',
          } },
        { options: [
          { id: 'a', text: 'Sube: de grave a agudo', icon: 'TrendingUp' },
          { id: 'b', text: 'Baja: de agudo a grave', icon: 'ArrowDown', feedback: 'Escucha otra vez: la última nota es la más delgada (aguda).' },
          { id: 'c', text: 'Se queda en la misma nota', icon: 'Minus', feedback: 'Cada nota es distinta; fíjate si se vuelven más graves o más agudas.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'conocer', title: '¿Qué es una melodía?',
          prompt: 'Ya conoces el **ritmo** (duraciones) y las **notas** (alturas). Cuando se juntan, nace la **melodía**. Toca cada tarjeta.' },
        { icon: 'Music', body: 'Una **melodía** es una **sucesión de sonidos de distinta altura, organizada con un ritmo**. Es la parte de una canción que puedes cantar o tararear.', reveal: [
          { icon: 'Timer', front: 'Ritmo sin melodía', back: 'Un tambor tocando "ta · ta · ti-ti · ta-a" tiene ritmo, pero todos sus golpes tienen la misma altura.' },
          { icon: 'Music2', front: 'Ritmo + altura', back: 'Si cada golpe es una nota distinta (Do, Re, Mi…), el ritmo se convierte en melodía.' },
          { icon: 'TrendingUp', front: 'Contorno', back: 'Es el "camino" de la melodía: **sube** (ascendente), **baja** (descendente) o **se repite** (misma nota).' },
          { icon: 'Mountain', front: 'Dibujarla', back: 'Si unes las notas del pentagrama con una línea, ves su contorno: parece el perfil de montañas y valles.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'conocer', title: 'Grado conjunto y salto',
          prompt: 'Una melodía puede avanzar **paso a paso** o **saltando**. En el pentagrama se ve fácil.' },
        { icon: 'Footprints', body: 'Recuerda que las notas se escriben en **líneas** y **espacios** que se alternan. Fíjate a dónde va la nota siguiente.', reveal: [
          { icon: 'Footprints', front: 'Grado conjunto', back: 'La nota pasa a su **vecina**: de una línea al espacio de al lado (o al revés). Ejemplo: **Mi → Fa**. Suena "escalonado", fácil de cantar.' },
          { icon: 'Rabbit', front: 'Salto', back: 'La nota pasa a una **más lejana**: de **línea a línea**, de **espacio a espacio** o más. Ejemplo: **Mi → Sol** (1.ª línea → 2.ª línea).' },
          { icon: 'Repeat', front: 'Repetición', back: 'La nota se queda **en el mismo lugar**. Ejemplo: **Sol → Sol**. El contorno queda plano.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto: leer una melodía famosa',
          prompt: 'Esta melodía es del **"Himno a la alegría"**, del compositor alemán Ludwig van Beethoven (más de 200 años de antigüedad). Mira cómo se lee.' },
        { icon: 'Music2', problem: 'En 4/4 hay dos compases de negras: **| Mi · Mi · Fa · Sol | Sol · Fa · Mi · Re |**. ¿Qué camino dibuja y cómo se mueve?',
          steps: [
            { text: 'Ubico las notas (clave de sol): Mi en la 1.ª línea, Fa en el 1.er espacio, Sol en la 2.ª línea y Re debajo de la 1.ª línea.' },
            { text: 'Compás 1: Mi · Mi (**se repite**) · Fa · Sol (**sube** paso a paso).', why: 'Mi → Fa → Sol va de línea a espacio a línea: son notas vecinas, por **grado conjunto**.' },
            { text: 'Compás 2: Sol · Sol (se repite, entre compases) y luego Fa · Mi · Re (**baja** paso a paso).' },
            { text: 'Ritmo: todas son negras, así que cada nota dura 1 tiempo; 4 tiempos por compás ✔.' },
          ],
          answer: 'La melodía **se repite, sube y luego baja**, siempre por **grado conjunto**. Su contorno es como una loma: sube hasta Sol y vuelve a bajar.',
          tip: 'Cántala con los nombres de las notas mientras señalas el pentagrama con el dedo.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'hacer',
          prompt: 'Clasifica cada par de notas: ¿se mueven por **grado conjunto** o por **salto**?',
          hint: 'Si las dos están en líneas (o las dos en espacios), es salto. Si una está en línea y la otra en el espacio vecino, es grado conjunto.',
          explain: 'Do-Re, Sol-La y Si-La son vecinas (grado conjunto). Mi-Sol, Fa-La y Sol-Re se saltan al menos una nota.' },
        { buckets: [
          { id: 'g', label: 'Grado conjunto', icon: 'Footprints', color: 'var(--c-ok)' },
          { id: 's', label: 'Salto', icon: 'Rabbit', color: 'var(--area-art)' },
        ], items: [
          { id: 'p1', text: 'Do → Re', bucket: 'g' },
          { id: 'p2', text: 'Mi → Sol', bucket: 's', feedback: 'Entre Mi y Sol está Fa: se lo saltó.' },
          { id: 'p3', text: 'Sol → La', bucket: 'g' },
          { id: 'p4', text: 'Fa → La', bucket: 's', feedback: 'Fa y La están en espacios (1.º y 2.º): entre ellas está Sol.' },
          { id: 'p5', text: 'Si → La', bucket: 'g' },
          { id: 'p6', text: 'Sol → Re (agudo)', bucket: 's' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'hacer',
          prompt: 'Escucha esta frase de marimba y elige la escritura que le corresponde.',
          explain: 'La frase empieza aguda y baja nota por nota: **Sol · Fa · Mi · Re · Do**. Es **descendente por grado conjunto**.',
          media: {
            id: 's02-art-2-dictado', kind: 'audio', title: 'Dictado melódico', duration: 12,
            alt: 'Una marimba toca cinco notas seguidas, cada una más grave que la anterior; se toca dos veces.',
            brief: 'Audio de 12 s: marimba toca Sol4-Fa4-Mi4-Re4-Do4 en negras (tempo ≈80) y la última nota sostenida; pausa de 2 s y se repite. Sin acompañamiento.',
          } },
        { options: [
          { id: 'a', text: 'Do · Re · Mi · Fa · Sol', feedback: 'Esa melodía sube. Lo que escuchaste empieza agudo y termina grave.' },
          { id: 'b', text: 'Sol · Fa · Mi · Re · Do' },
          { id: 'c', text: 'Sol · Mi · Do · Mi · Sol', feedback: 'Esa melodía salta y vuelve a subir. Lo que escuchaste baja paso a paso.' },
        ], correct: ['b'] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:1.1.2'], ambito: 'hacer',
          prompt: 'Completa la descripción de esta melodía en 3/4: **| Do · Mi · Sol | Sol (blanca) · Sol |** ',
          explain: 'Do → Mi → Sol va de línea adicional a línea a línea: sube **por salto**. Después Sol se **repite**. El primer compás tiene 3 negras (3 tiempos) y el segundo, blanca + negra (3 tiempos).' },
        { text: 'En el primer compás la melodía [[sube|asciende]] por [[salto|saltos]]. En el segundo compás la nota Sol se [[repite]]. Cada compás dura [[3]] tiempos.', distractors: ['baja', 'grado conjunto', '4'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art', 'cnt'], cnb: ['art:1.1.2'], ambito: 'hacer',
          prompt: '**En casa:** construye un **xilófono de botellas** y toca melodías que suben, bajan y se repiten.' },
        { goal: 'Afinar 5 botellas con agua y tocar en ellas una melodía ascendente, una descendente y una con repeticiones.',
          steps: [
            { title: 'Reúne materiales', detail: 'Cinco botellas o frascos de vidrio iguales, agua y una cuchara de metal o un palito. Pide ayuda a una persona adulta y trabaja sobre una mesa firme.' },
            { title: 'Llena en escalera', detail: 'Pon muy poca agua en la primera y cada vez más en las siguientes. Golpea suavemente el cuello: la botella con **más agua suena más grave**.' },
            { title: 'Ordénalas', detail: 'Colócalas de izquierda a derecha, de la más grave (más agua) a la más aguda (menos agua), como en la marimba. Ajusta el agua hasta que suenen parecido a Do-Re-Mi-Fa-Sol (no tiene que ser perfecto).' },
            { title: 'Toca melodías', detail: 'Toca una melodía que suba, una que baje y el inicio del "Himno a la alegría" (Mi Mi Fa Sol · Sol Fa Mi Re).' },
          ],
          evidence: 'Un dibujo de tu xilófono y el contorno de una melodía que inventaste, dibujado como línea de montañas sobre un pentagrama.',
          rubric: ['Mis botellas van de grave a agudo', 'Toco una melodía que sube y otra que baja', 'Explico si mi melodía va por grado conjunto o por salto'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.2'], prompt: '¿Qué movimiento hace la melodía **La → Si → Do**?' },
        { options: [
          { id: 'a', text: 'Sube por grado conjunto' },
          { id: 'b', text: 'Baja por grado conjunto' },
          { id: 'c', text: 'Sube por salto' },
          { id: 'd', text: 'Se repite' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Una melodía combina sonidos de distinta altura con un ritmo.', answer: true },
          { text: 'Pasar de la 1.ª línea a la 2.ª línea es un movimiento por grado conjunto.', answer: false, why: 'Entre dos líneas hay un espacio (una nota) en medio: es un salto.' },
          { text: 'Una melodía descendente va de sonidos agudos a sonidos graves.', answer: true },
        ] },
      ),
      cierre({ areas: ['art'], cnb: ['art:1.1.2'] },
        ['Encuentro el acento y cuento compases de 2, 3 y 4', 'Reviso si un compás suma los tiempos de la cifra', 'Reconozco si una melodía sube, baja o se repite'],
        ['Descubriré el compás de tres canciones', 'Tocaré melodías en mi xilófono de botellas', 'Cantaré con nombres de notas una melodía corta']),
    ],
  }),
];
