/**
 * Expresión Artística · Unidad 1 · Semana 1 — Iniciación a la lecto-escritura musical.
 * Progresión: la duración del sonido y las figuras musicales (pulso, redonda, blanca, negra, corchea)
 * → la altura del sonido: las siete notas, el pentagrama y la clave de sol.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Sonidos largos y cortos ───────────────────────── */
  lesson({
    id: 's01-art-1',
    title: 'Sonidos largos y cortos: las figuras musicales',
    icon: 'Music',
    minutes: 14,
    gancho: 'Cuando alguien toca la marimba, algunas notas suenan cortitas y otras se quedan vibrando un buen rato. ¿Cómo se escribe eso para que otra persona lo pueda tocar igual?',
    objetivos: [
      'Reconocer las cuatro cualidades del sonido',
      'Identificar el pulso y la duración de la redonda, la blanca, la negra y la corchea',
      'Leer y escribir ritmos sencillos contando tiempos',
    ],
    resumen: [
      'El sonido tiene cuatro cualidades: altura (grave o agudo), duración (largo o corto), intensidad (fuerte o suave) y timbre (lo que hace que cada instrumento o voz suene distinto).',
      'El pulso es el latido constante de la música, como el tic-tac de un reloj. Cada golpe de pulso es un tiempo.',
      'Figuras musicales: redonda = 4 tiempos, blanca = 2 tiempos, negra = 1 tiempo, corchea = medio tiempo (dos corcheas duran lo mismo que una negra).',
      'Para leer un ritmo, cuenta los tiempos de cada figura y súmalos; puedes decirlo con sílabas: negra "ta", dos corcheas "ti-ti", blanca "ta-a", redonda "ta-a-a-a".',
    ],
    media: {
      id: 's01-art-1-figuras', kind: 'animation', title: 'Figuras que duran más o menos', aspect: '16:9', duration: 50,
      alt: 'Una marimba toca un pulso constante mientras aparecen la redonda, la blanca, la negra y dos corcheas; cada figura se estira sobre una regla de 4 tiempos para mostrar cuánto dura.',
      brief: 'Animación 2D de 50 s. Arriba, un metrónomo sencillo (sin marca) marca 4 pulsos con un punto que salta. Abajo, una "regla" de 4 casillas iguales rotuladas 1-2-3-4. Aparece la redonda y ocupa las 4 casillas mientras suena una nota larga de marimba; luego dos blancas (2 casillas cada una), cuatro negras (1 casilla) y ocho corcheas (media casilla). Cada figura se dibuja grande en negro sobre fondo crema, con su nombre y su duración ("4 tiempos", "2", "1", "½"). Narración en español neutro, voz cálida; subtítulos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'conocer',
          prompt: 'Escucha los dos sonidos de marimba. Tienen la misma nota y el mismo volumen. ¿En qué se diferencian?',
          explain: 'Uno **dura más** que el otro. La música se escribe con símbolos que dicen, entre otras cosas, **cuánto dura** cada sonido.',
          media: {
            id: 's01-art-1-largo-corto', kind: 'audio', title: 'Dos sonidos: ¿cuál dura más?', duration: 12,
            alt: 'Se escucha la nota Sol en marimba, primero muy corta y luego larga, dejando vibrar la tecla unos cuatro segundos.',
            brief: 'Audio limpio de 12 s: nota Sol4 en marimba de concierto tocada con baqueta suave. (1) Golpe corto apagado con la mano (≈0.5 s). (2) Silencio de 2 s. (3) La misma nota con trémolo suave sostenido ≈4 s, mismo volumen. Sin música de fondo ni voz.',
          } },
        { options: [
          { id: 'a', text: 'Uno es más agudo que el otro', icon: 'ArrowUp', feedback: 'Es la misma nota, así que tienen la misma altura. Escucha cuánto tiempo suena cada uno.' },
          { id: 'b', text: 'Uno dura más que el otro', icon: 'Hourglass' },
          { id: 'c', text: 'Uno es de otro instrumento', icon: 'Guitar', feedback: 'Los dos son de marimba: tienen el mismo timbre.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'conocer', title: 'Las cuatro cualidades del sonido',
          prompt: 'Todo sonido tiene cuatro **cualidades**. Toca cada tarjeta.' },
        { icon: 'Ear', body: 'Los músicos escriben **partituras** para que otras personas toquen una canción igual, aunque nunca la hayan escuchado. Para eso anotan las cualidades del sonido.', reveal: [
          { icon: 'ArrowUpDown', front: 'Altura', back: 'Si el sonido es **grave** (grueso, como un tambor grande) o **agudo** (delgado, como el canto de un pajarito).' },
          { icon: 'Hourglass', front: 'Duración', back: 'Si el sonido es **largo** o **corto**. Hoy aprenderás a escribirla con **figuras musicales**.' },
          { icon: 'Volume2', front: 'Intensidad', back: 'Si el sonido es **fuerte** o **suave**. No es lo mismo que la altura: un sonido agudo puede ser suave.' },
          { icon: 'Guitar', front: 'Timbre', back: 'La "voz" propia de cada instrumento o persona. Por el timbre distingues una marimba de una guitarra aunque toquen la misma nota.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'conocer', title: 'El pulso y las figuras',
          prompt: 'La música tiene un **pulso**: un latido constante, como el tic-tac de un reloj o tu corazón en reposo. Cada golpe de pulso se llama **tiempo**. Las figuras dicen **cuántos tiempos** dura un sonido.',
          media: {
            id: 's01-art-1-tabla-figuras', kind: 'diagram', title: 'Tabla de figuras musicales', aspect: '4:3',
            alt: 'Tabla en forma de árbol: arriba una redonda; debajo dos blancas; debajo cuatro negras; debajo ocho corcheas. A la derecha de cada fila, su duración en tiempos.',
            brief: 'Diagrama escolar en forma de pirámide invertida sobre fondo blanco. Fila 1: una redonda (óvalo hueco sin plica) — "Redonda: 4 tiempos". Fila 2: dos blancas (óvalo hueco con plica) — "Blanca: 2 tiempos". Fila 3: cuatro negras (óvalo relleno con plica) — "Negra: 1 tiempo". Fila 4: ocho corcheas (óvalo relleno con plica y banderita; se pueden unir de dos en dos con barra) — "Corchea: ½ tiempo". Todas las filas miden lo mismo de ancho para mostrar que suman igual. Trazo negro grueso, rótulos grandes legibles en celular.',
          } },
        { icon: 'Timer', body: 'Una figura es un **símbolo de duración**. Mientras más "vacía" y sin adornos, más dura. Toca cada una.', reveal: [
          { icon: 'Circle', front: 'Redonda', back: 'Un óvalo **hueco, sin palito**. Dura **4 tiempos**. Se dice "ta-a-a-a".' },
          { icon: 'CircleDot', front: 'Blanca', back: 'Un óvalo **hueco con palito** (plica). Dura **2 tiempos**: la mitad de la redonda. Se dice "ta-a".' },
          { icon: 'Music2', front: 'Negra', back: 'Un óvalo **relleno con plica**. Dura **1 tiempo**: un pulso. Se dice "ta".' },
          { icon: 'Music', front: 'Corchea', back: 'Como la negra, pero con una **banderita**. Dura **medio tiempo**: dos corcheas llenan un pulso. Se dice "ti-ti".' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'conocer',
          prompt: 'Une cada figura con su duración.',
          hint: 'La redonda es la más larga. Cada figura siguiente dura la mitad de la anterior.',
          explain: 'Redonda 4, blanca 2, negra 1 y corchea ½. Cada figura dura **la mitad** que la anterior.' },
        { leftTitle: 'Figura', rightTitle: 'Duración', pairs: [
          { id: 'r', left: 'Redonda', leftIcon: 'Circle', right: '4 tiempos' },
          { id: 'b', left: 'Blanca', leftIcon: 'CircleDot', right: '2 tiempos' },
          { id: 'n', left: 'Negra', leftIcon: 'Music2', right: '1 tiempo' },
          { id: 'c', left: 'Corchea', leftIcon: 'Music', right: 'Medio tiempo' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto: leer un ritmo',
          prompt: 'Mira cómo se lee un ritmo contando tiempos. Luego lo harás tú.' },
        { icon: 'Music', problem: 'En la pizarra hay este ritmo: **negra · negra · dos corcheas · blanca**. ¿Cuántos tiempos dura en total y cómo se palmea?',
          steps: [
            { text: 'Escribo el valor de cada figura: negra = 1, negra = 1, dos corcheas = ½ + ½ = 1, blanca = 2.' },
            { text: 'Sumo: 1 + 1 + 1 + 2 = **5 tiempos**.', why: 'Las duraciones se suman una tras otra, como pasos en un camino.' },
            { text: 'Lo digo con sílabas mientras marco el pulso con el pie: **"ta · ta · ti-ti · ta-a"**.', why: 'Las sílabas rítmicas ayudan a sentir la duración: "ta-a" se sostiene dos pulsos.' },
            { text: 'Palmeo: un aplauso en cada "ta", dos aplausos rápidos en "ti-ti" y un aplauso que dejo "sonar" dos pulsos en "ta-a".' },
          ],
          answer: 'El ritmo dura **5 tiempos** y se dice **"ta · ta · ti-ti · ta-a"**.',
          tip: 'Mantén el pulso con el pie todo el tiempo: el pie no se apura ni se detiene, aunque las manos hagan figuras distintas.' },
      ),
      S.number(
        { fase: 'construir', areas: ['art', 'mat'], cnb: ['art:1.1.1'], ambito: 'hacer',
          prompt: 'Ahora tú: ¿cuántos tiempos dura este ritmo? **blanca · negra · dos corcheas**',
          hint: 'Blanca = 2, negra = 1 y dos corcheas juntas = 1.',
          explain: '2 + 1 + ½ + ½ = 4. El ritmo dura **4 tiempos**.' },
        { answer: 4, unit: 'tiempos', stimulus: 'ta-a · ta · ti-ti', misconceptions: [
          { value: 5, msg: 'Contaste cada corchea como 1 tiempo. Recuerda: cada corchea dura medio tiempo.' },
          { value: 3, msg: 'Revisa la blanca: dura 2 tiempos, no 1.' },
        ] },
      ),
      S.rhythm(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'hacer',
          prompt: 'Compón un ritmo de **4 tiempos** en la marimba. Debe incluir al menos una **blanca** y una **corchea**. Tócalo y dilo con sílabas.',
          explain: 'Una posibilidad: blanca (2) + negra (1) + dos corcheas (½ + ½) = 4 tiempos: "ta-a · ta · ti-ti". Si usas una corchea, necesitas otra para completar el pulso.' },
        { beats: 4, allowed: ['redonda', 'blanca', 'negra', 'corchea'], mustInclude: ['blanca', 'corchea'], showFractions: true },
      ),
      S.number(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'conocer',
          prompt: 'Una redonda dura 4 tiempos y cada corchea medio tiempo. ¿Cuántas **corcheas** duran lo mismo que **una redonda**?',
          explain: 'En cada tiempo caben 2 corcheas. En 4 tiempos caben 4 × 2 = **8 corcheas**.' },
        { answer: 8, unit: 'corcheas', misconceptions: [
          { value: 4, msg: 'Cuatro negras llenan una redonda; las corcheas son más cortas, así que se necesitan más.' },
          { value: 2, msg: 'Dos corcheas llenan solo una negra (1 tiempo). La redonda dura 4 tiempos.' },
        ] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'hacer',
          prompt: '**En casa:** fabrica una **sonaja** y úsala para tocar ritmos. Así practicarás las figuras toda la semana.' },
        { goal: 'Construir una sonaja con materiales sencillos y tocar con ella tres ritmos de 4 tiempos.',
          steps: [
            { title: 'Reúne materiales', detail: 'Una botella plástica pequeña y limpia con tapa, y un puñito de frijoles, arroz o piedrecitas.' },
            { title: 'Arma tu sonaja', detail: 'Llena la botella hasta un cuarto y ciérrala bien. Prueba: frijoles suenan más grave; arroz, más agudo.' },
            { title: 'Toca el pulso', detail: 'Pon música tranquila o cuenta "1, 2, 3, 4" y agita la sonaja una vez en cada tiempo.' },
            { title: 'Toca tres ritmos', detail: 'Toca "ta · ta · ta · ta", "ta-a · ta-a" y "ti-ti · ta · ta-a". Enséñale uno a alguien de tu familia.' },
          ],
          evidence: 'Un dibujo de tu sonaja y los tres ritmos escritos en tu cuaderno con figuras.',
          rubric: ['Mi sonaja suena y está bien cerrada', 'Mantengo el pulso sin apurarme', 'Toco los ritmos con la duración correcta'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.1'], prompt: '¿Qué figura es un óvalo **hueco con plica** y dura **2 tiempos**?' },
        { options: [
          { id: 'r', text: 'Redonda' },
          { id: 'b', text: 'Blanca' },
          { id: 'n', text: 'Negra' },
          { id: 'c', text: 'Corchea' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'El pulso es un latido constante de la música.', answer: true },
          { text: 'Una negra dura más que una blanca.', answer: false, why: 'La negra dura 1 tiempo y la blanca 2.' },
          { text: 'Dos negras duran lo mismo que una blanca.', answer: true },
          { text: 'La intensidad dice si un sonido es grave o agudo.', answer: false, why: 'Eso es la altura. La intensidad dice si es fuerte o suave.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. El pentagrama y las notas ───────────────────────── */
  lesson({
    id: 's01-art-2',
    title: 'El pentagrama y las siete notas',
    icon: 'Music2',
    minutes: 15,
    gancho: 'La marimba tiene teclas grandes a un lado y pequeñitas al otro. ¿Por qué crees que suenan distinto, y cómo se escribe si una nota es grave o aguda?',
    objetivos: [
      'Distinguir sonidos graves y agudos y ordenar las siete notas musicales',
      'Reconocer las líneas y los espacios del pentagrama',
      'Leer las notas en clave de sol',
    ],
    resumen: [
      'Las siete notas musicales son Do, Re, Mi, Fa, Sol, La y Si. Después de Si vuelve Do, pero más agudo: esa distancia se llama octava.',
      'El pentagrama tiene 5 líneas y 4 espacios que se cuentan de abajo hacia arriba. Mientras más arriba está una nota, más aguda suena.',
      'La clave de sol se enrolla en la 2.ª línea e indica que ahí está la nota Sol.',
      'En clave de sol, las líneas son Mi, Sol, Si, Re, Fa y los espacios Fa, La, Do, Mi. El Do grave se escribe en una línea adicional debajo del pentagrama.',
    ],
    media: {
      id: 's01-art-2-escala', kind: 'video', title: 'La escala de Do en la marimba', aspect: '16:9', duration: 45,
      alt: 'Unas baquetas tocan en una marimba ocho teclas seguidas, de la más grande a la más pequeña, mientras en un pentagrama se ilumina cada nota de Do a Do.',
      brief: 'Video de 45 s. Pantalla dividida: arriba, plano cenital de una marimba de madera (sin marcas) donde unas baquetas tocan Do, Re, Mi, Fa, Sol, La, Si, Do (una nota por segundo) de la tecla larga a la corta; abajo, un pentagrama en clave de sol donde cada nota se ilumina al sonar, con su nombre debajo. Luego la escala descendente. Cierre: rótulo "Más arriba en el pentagrama = más agudo". Narración breve en español, subtítulos.',
    },
    steps: [
      S.sort(
        { fase: 'explorar', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'conocer',
          prompt: 'Antes de leer notas, entrena tu oído. Clasifica cada sonido como **grave** (grueso) o **agudo** (delgado).',
          explain: 'La **altura** del sonido es lo que dice si es grave o agudo. En el pentagrama, los agudos se escriben arriba y los graves abajo.' },
        { buckets: [
          { id: 'g', label: 'Grave', icon: 'ArrowDown', color: 'var(--area-art)' },
          { id: 'a', label: 'Agudo', icon: 'ArrowUp', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'El tun (tambor de madera) grande', icon: 'Drum', bucket: 'g' },
          { id: 'x2', text: 'El canto de un canario', icon: 'Bird', bucket: 'a' },
          { id: 'x3', text: 'Las teclas más largas de la marimba', bucket: 'g', feedback: 'Las teclas largas vibran más lento y suenan más graves.' },
          { id: 'x4', text: 'Un silbato', bucket: 'a' },
          { id: 'x5', text: 'El trueno a lo lejos', icon: 'CloudRain', bucket: 'g' },
          { id: 'x6', text: 'Las teclas más cortas de la marimba', bucket: 'a' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'conocer', title: 'Las siete notas',
          prompt: 'Para nombrar la altura de los sonidos usamos **siete notas**. Se cantan en orden, de la más grave a la más aguda.' },
        { icon: 'Music', body: '**Do · Re · Mi · Fa · Sol · La · Si** … y otra vez **Do**, pero más agudo. Ese nuevo Do está a una **octava** del primero (ocho notas contando las dos puntas). Esta serie ordenada se llama **escala de Do**.', reveal: [
          { icon: 'ArrowUpRight', front: 'Escala ascendente', back: 'Do, Re, Mi, Fa, Sol, La, Si, Do: cada nota es **un poco más aguda** que la anterior.' },
          { icon: 'Repeat', front: 'La octava', back: 'El Do agudo "se parece" al Do grave: suenan como la misma nota en una voz más delgada. Por eso la escala vuelve a empezar.' },
          { icon: 'Piano', front: 'En los instrumentos', back: 'En la marimba y el piano, hacia la **derecha** las notas se vuelven más agudas (teclas más cortas o más a la derecha).' },
        ] },
      ),
      S.order(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'conocer',
          prompt: 'Ordena las notas de la escala, de la **más grave** a la **más aguda**.',
          hint: 'Canta despacio "Do, Re, Mi…" hasta llegar al Do agudo.' },
        { items: [
          { id: 'do', text: 'Do' }, { id: 're', text: 'Re' }, { id: 'mi', text: 'Mi' }, { id: 'fa', text: 'Fa' },
          { id: 'sol', text: 'Sol' }, { id: 'la', text: 'La' }, { id: 'si', text: 'Si' }, { id: 'do2', text: 'Do (agudo)' },
        ], labels: { start: 'Más grave', end: 'Más aguda' } },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'conocer', title: 'El pentagrama y la clave de sol',
          prompt: 'Las notas se escriben sobre el **pentagrama**: cinco líneas horizontales con cuatro espacios entre ellas.',
          media: {
            id: 's01-art-2-pentagrama', kind: 'diagram', title: 'Las notas en clave de sol', aspect: '16:9',
            alt: 'Pentagrama con la clave de sol al inicio. Las líneas están numeradas del 1 al 5 de abajo hacia arriba y los espacios del 1 al 4. Sobre él, las notas de Do grave a Do agudo con su nombre debajo.',
            brief: 'Diagrama horizontal sobre fondo blanco. Pentagrama grande con clave de sol dibujada con claridad: su espiral termina rodeando la 2.ª línea, marcada en color. A la izquierda, números 1-5 junto a las líneas (de abajo hacia arriba) y 1-4 en los espacios, en gris. Sobre el pentagrama, 8 negras en escalera: Do (con línea adicional debajo), Re (bajo la 1.ª línea), Mi (1.ª línea), Fa (1.er espacio), Sol (2.ª línea, resaltada), La (2.º espacio), Si (3.ª línea), Do (3.er espacio). Nombre debajo de cada nota. Flecha a la derecha "más agudo ↑".',
          } },
        { icon: 'Music2', body: 'Las líneas y los espacios se cuentan **de abajo hacia arriba**. Una nota puede ir **en una línea** (la línea la cruza por la mitad) o **en un espacio** (entre dos líneas). **Mientras más arriba, más aguda.**', reveal: [
          { icon: 'AlignJustify', front: '5 líneas y 4 espacios', back: 'La 1.ª línea es la de abajo. El 1.er espacio está entre la 1.ª y la 2.ª línea.' },
          { icon: 'Music', front: 'La clave de sol', back: 'Es el símbolo del inicio. Su espiral se enrolla en la **2.ª línea**: ahí está la nota **Sol**. A partir de Sol se leen las demás.' },
          { icon: 'Minus', front: 'Líneas adicionales', back: 'Para notas más graves o más agudas se dibujan rayitas cortas fuera del pentagrama. El **Do grave** va en una línea adicional **debajo**.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto: leer notas desde Sol',
          prompt: 'Si sabes dónde está Sol, puedes encontrar cualquier nota subiendo o bajando **un escalón** (de línea a espacio o de espacio a línea).' },
        { icon: 'Search', problem: 'Una nota está en la **3.ª línea** y otra en el **1.er espacio**. ¿Qué notas son?',
          steps: [
            { text: 'Parto de la clave de sol: la **2.ª línea es Sol**.' },
            { text: 'Subo un escalón: el **2.º espacio es La**. Subo otro: la **3.ª línea es Si**.', why: 'Cada escalón (línea → espacio → línea) es la nota siguiente de la escala.' },
            { text: 'Ahora bajo desde Sol: un escalón abajo está el **1.er espacio**, que es **Fa**.', why: 'Al bajar, las notas van hacia atrás: Sol, Fa, Mi…' },
          ],
          answer: 'La nota de la 3.ª línea es **Si** y la del 1.er espacio es **Fa**.',
          tip: 'Truco para memorizar: líneas = **Mi, Sol, Si, Re, Fa**; espacios = **Fa, La, Do, Mi**.' },
      ),
      S.fill(
        { fase: 'construir', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'conocer',
          prompt: 'Completa con el nombre de la nota (clave de sol).',
          hint: 'Empieza en Sol (2.ª línea) y sube o baja un escalón a la vez.',
          explain: 'Líneas de abajo arriba: Mi, Sol, Si, Re, Fa. Espacios: Fa, La, Do, Mi.' },
        { text: 'La 1.ª línea es [[Mi]]. La 2.ª línea es [[Sol]]. El 2.º espacio es [[La]]. El 3.er espacio es [[Do]].', distractors: ['Re', 'Si'] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'hacer',
          prompt: 'Une cada lugar del pentagrama (clave de sol) con su nota.',
          explain: '3.ª línea = Si, 4.ª línea = Re, 5.ª línea = Fa, 4.º espacio = Mi, línea adicional abajo = Do.' },
        { leftTitle: 'Lugar', rightTitle: 'Nota', pairs: [
          { id: 'l3', left: '3.ª línea', right: 'Si' },
          { id: 'l4', left: '4.ª línea', right: 'Re' },
          { id: 'l5', left: '5.ª línea', right: 'Fa' },
          { id: 'e4', left: '4.º espacio', right: 'Mi' },
          { id: 'ad', left: 'Línea adicional debajo', right: 'Do' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'conocer',
          prompt: 'Una melodía empieza en la **1.ª línea** y termina en el **4.º espacio**. ¿Qué pasa con el sonido?',
          explain: 'Terminar más arriba en el pentagrama significa que el sonido se vuelve **más agudo**.' },
        { options: [
          { id: 'a', text: 'Se vuelve más agudo', icon: 'ArrowUp' },
          { id: 'b', text: 'Se vuelve más grave', icon: 'ArrowDown', feedback: 'En el pentagrama, subir es ir hacia lo agudo.' },
          { id: 'c', text: 'Se vuelve más fuerte', icon: 'Volume2', feedback: 'La posición en el pentagrama indica altura, no intensidad.' },
        ], correct: ['a'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:1.1.1'], ambito: 'hacer',
          prompt: '**En casa:** arma un **pentagrama de mesa** para practicar la lectura de notas.' },
        { goal: 'Construir un pentagrama con materiales sencillos y escribir en él la escala de Do.',
          steps: [
            { title: 'Dibuja el pentagrama', detail: 'En una hoja o cartón, traza con regla 5 líneas paralelas separadas por un dedo de ancho. Dibuja la clave de sol enrollada en la 2.ª línea.' },
            { title: 'Prepara tus notas', detail: 'Usa 8 frijoles, botones o tapitas como cabezas de nota.' },
            { title: 'Coloca la escala', detail: 'Pon Do en una rayita debajo del pentagrama y sube escalón por escalón hasta el Do del 3.er espacio.' },
            { title: 'Juega con alguien', detail: 'Una persona coloca un frijol y la otra dice el nombre de la nota. Luego canten la escala subiendo y bajando.' },
          ],
          evidence: 'Una foto o dibujo de tu pentagrama con la escala completa y los nombres de las notas.',
          rubric: ['Mi pentagrama tiene 5 líneas y la clave de sol en la 2.ª línea', 'Coloqué las notas en el orden correcto', 'Leo las notas sin contar desde el principio'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.1'], prompt: 'En clave de sol, ¿qué nota está en la **2.ª línea**?' },
        { options: [
          { id: 'a', text: 'Mi' },
          { id: 'b', text: 'Sol' },
          { id: 'c', text: 'Do' },
          { id: 'd', text: 'La' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'El pentagrama tiene 4 líneas y 5 espacios.', answer: false, why: 'Tiene 5 líneas y 4 espacios.' },
          { text: 'Una nota escrita más arriba en el pentagrama suena más aguda.', answer: true },
          { text: 'Después de Si, la escala vuelve a empezar con un Do más agudo.', answer: true },
          { text: 'Las líneas del pentagrama se cuentan de arriba hacia abajo.', answer: false, why: 'Se cuentan de abajo hacia arriba.' },
        ] },
      ),
      cierre({ areas: ['art'], cnb: ['art:1.1.1'] },
        ['Reconozco la duración de la redonda, la blanca, la negra y la corchea', 'Ordeno las siete notas de grave a agudo', 'Leo notas en el pentagrama con clave de sol'],
        ['Practicaré ritmos con mi sonaja', 'Leeré una nota nueva cada día en mi pentagrama', 'Escucharé una canción marcando su pulso con el pie']),
    ],
  }),
];
