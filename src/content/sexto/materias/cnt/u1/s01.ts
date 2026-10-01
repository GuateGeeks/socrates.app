/**
 * Ciencias Naturales y Tecnología · Unidad 1 · Semana 1 — El origen de todo y la célula.
 * Progresión: relatos de origen y explicación científica del universo y la Tierra →
 * la célula animal y sus organelos → semejanzas y diferencias entre célula animal y vegetal.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. ¿Cómo se originó todo? ───────────────────────── */
  lesson({
    id: 's01-cnt-1',
    title: 'El origen del universo y de la Tierra',
    icon: 'Sparkles',
    minutes: 15,
    gancho: 'Una noche sin luna, en el campo, se ven miles de estrellas. ¿Alguna vez te has preguntado cómo empezó todo eso?',
    objetivos: [
      'Narrar el relato judeocristiano de la creación en sus siete días',
      'Reconocer otros relatos de origen, como el del Popol Vuh, y la explicación científica',
      'Distinguir un relato de fe o cultural de una explicación científica, con respeto',
    ],
    resumen: [
      'Una cosmovisión es la manera en que un pueblo entiende el mundo, su origen y el lugar del ser humano en él.',
      'Según el relato judeocristiano del Génesis, Dios creó el mundo en seis días y descansó el séptimo: luz; cielo; tierra, mares y plantas; Sol, Luna y estrellas; peces y aves; animales terrestres y seres humanos.',
      'El Popol Vuh, libro sagrado k\'iche\', narra que los creadores formaron a los primeros seres humanos de barro, luego de madera y por último de maíz.',
      'La ciencia explica que el universo comenzó hace unos 13,800 millones de años (Gran Explosión) y que la Tierra se formó hace unos 4,500 millones de años. Los relatos y la ciencia responden preguntas distintas y se respetan.',
    ],
    media: {
      id: 's01-cnt-1-origenes', kind: 'image', title: 'Tres maneras de contar el origen', aspect: '16:9',
      alt: 'Ilustración dividida en tres paneles: un paisaje luminoso que representa los días de la creación, una escena de maíz y montañas inspirada en el Popol Vuh, y una nube de gas y polvo que forma el Sol y los planetas.',
      brief: 'Ilustración horizontal en tres paneles con el mismo estilo cálido de libro infantil. Panel 1 "Génesis": luz que se abre sobre aguas, luego tierra con plantas, Sol, Luna y estrellas, aves y peces (sin representar a Dios con rostro). Panel 2 "Popol Vuh": montañas de Guatemala, figuras sencillas de barro, de madera y de maíz amarillo y blanco, en colores tierra. Panel 3 "Ciencia": nube de gas y polvo girando que forma el Sol y planetas pequeños, con la Tierra aún roja y caliente. Rótulos breves en cada panel. Respeto total a cada tradición; nada caricaturesco.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:1.1.1'], ambito: 'conocer', title: 'Relatos y explicaciones',
          prompt: 'Antes de conocer los relatos, aprende tres palabras clave. Toca cada tarjeta.' },
        { icon: 'Globe', body: 'Preguntar **"¿de dónde venimos?"** es muy humano. Las respuestas dependen de **para qué** se hace la pregunta.', reveal: [
          { icon: 'Eye', front: 'Cosmovisión', back: 'La **manera en que un pueblo entiende el mundo**: su origen, la naturaleza, lo sagrado y el lugar del ser humano.' },
          { icon: 'BookOpen', front: 'Relato de origen', back: 'Una narración de **fe o de cultura** que explica el comienzo del mundo y enseña **valores**: gratitud, respeto, cuidado de la vida. Se transmite de generación en generación.' },
          { icon: 'Microscope', front: 'Explicación científica', back: 'Una explicación que se construye con **observaciones, mediciones y pruebas**, y que **cambia** si aparecen pruebas nuevas.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.1.1'], ambito: 'conocer',
          prompt: 'Las personas se preguntan desde hace miles de años **cómo empezó el mundo**. ¿Cuántas explicaciones crees que existen?',
          explain: 'Existen **muchas**: cada pueblo tiene su relato de origen, y además la ciencia tiene su propia explicación, basada en pruebas. Hoy conocerás tres.' },
        { options: [
          { id: 'a', text: 'Una sola, la misma en todo el mundo', icon: 'Circle', feedback: 'Cada cultura ha contado el origen a su manera. ¡Hay muchas!' },
          { id: 'b', text: 'Varias: cada pueblo tiene la suya, y la ciencia tiene otra', icon: 'Layers' },
          { id: 'c', text: 'Ninguna: nadie se lo ha preguntado', icon: 'X', feedback: 'Es una de las preguntas más antiguas de la humanidad.' },
        ], correct: ['b'] },
      ),
      S.reading(
        { fase: 'construir', areas: ['cnt', 'l1'], cnb: ['cnt:1.1.1'], ambito: 'conocer', title: 'El relato judeocristiano',
          prompt: 'Lee con atención el relato de la creación según el libro del **Génesis**, que comparten judíos y cristianos.',
          hint: 'Si dudas, vuelve a leer el párrafo de cada día.' },
        { heading: 'La creación en siete días', genre: 'Relato de origen (resumen)',
          passage: 'Según el primer libro de la Biblia, el Génesis, al principio todo estaba vacío y a oscuras, y el espíritu de Dios se movía sobre las aguas.\n\nEl **primer día**, Dios dijo: "Que exista la luz", y separó la luz de la oscuridad: así surgieron el día y la noche. El **segundo día** hizo el firmamento, el cielo, que separó unas aguas de otras. El **tercer día** juntó las aguas en mares, hizo aparecer la tierra seca y la cubrió de plantas y árboles con semilla.\n\nEl **cuarto día** colocó en el cielo el Sol, la Luna y las estrellas para marcar los días, las estaciones y los años. El **quinto día** creó los peces y los animales del agua, y las aves del cielo. El **sexto día** creó los animales de la tierra y, por último, al ser humano, hombre y mujer, y les encargó cuidar la creación.\n\nEl **séptimo día**, Dios descansó. Por eso, para muchas familias creyentes, hay un día de la semana dedicado al descanso y a la oración.',
          questions: [
            { q: '¿Qué fue lo primero que se creó, según el relato?', options: [{ id: 'a', text: 'Los animales' }, { id: 'b', text: 'La luz' }, { id: 'c', text: 'El ser humano' }], correct: 'b', why: 'El primer día: "Que exista la luz".' },
            { q: '¿Qué día aparecen el Sol, la Luna y las estrellas?', options: [{ id: 'a', text: 'El cuarto día' }, { id: 'b', text: 'El primer día' }, { id: 'c', text: 'El séptimo día' }], correct: 'a' },
            { q: 'Según el relato, ¿qué encargo recibe el ser humano?', options: [{ id: 'a', text: 'Dominar a los demás pueblos' }, { id: 'b', text: 'Cuidar la creación' }, { id: 'c', text: 'Contar las estrellas' }], correct: 'b', why: 'El relato enseña un valor: la naturaleza es un regalo que hay que cuidar.' },
          ] },
      ),
      S.order(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.1.1'], ambito: 'conocer',
          prompt: 'Ordena lo que se creó cada día, según el Génesis, del primero al sexto.',
          hint: 'Primero lo que da luz y espacio, luego la tierra con plantas, después los astros y al final los animales y el ser humano.',
          explain: 'Luz (1) → cielo (2) → tierra, mares y plantas (3) → Sol, Luna y estrellas (4) → peces y aves (5) → animales terrestres y seres humanos (6). El séptimo día es de descanso.' },
        { labels: { start: 'Primer día', end: 'Sexto día' }, items: [
          { id: 'd1', text: 'La luz: el día y la noche', icon: 'Sun' },
          { id: 'd2', text: 'El firmamento o cielo', icon: 'Cloud' },
          { id: 'd3', text: 'La tierra seca, los mares y las plantas', icon: 'Sprout' },
          { id: 'd4', text: 'El Sol, la Luna y las estrellas', icon: 'Moon' },
          { id: 'd5', text: 'Los peces y las aves', icon: 'Fish' },
          { id: 'd6', text: 'Los animales terrestres y el ser humano', icon: 'Users' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt', 'ccss'], cnb: ['cnt:1.1.1'], ambito: 'conocer', title: 'Otro relato de Guatemala: el Popol Vuh',
          prompt: 'En Guatemala conviven varias cosmovisiones. El **Popol Vuh** es el libro sagrado del pueblo **maya k\'iche\'**. Toca las tarjetas.' },
        { icon: 'Wheat', body: 'En el Popol Vuh, los creadores **Tepeu** y **Gucumatz**, junto con el **Corazón del Cielo**, formaron la tierra, las montañas y los animales. Luego quisieron crear seres que pudieran hablar, recordar y agradecer.', reveal: [
          { icon: 'Droplets', front: 'Seres de barro', back: 'Se deshacían con el agua y no podían pensar. Los creadores los deshicieron.' },
          { icon: 'TreeDeciduous', front: 'Seres de madera', back: 'Hablaban y se multiplicaban, pero **no tenían corazón ni memoria** y no agradecían. Fueron destruidos.' },
          { icon: 'Wheat', front: 'Seres de maíz', back: 'Con masa de **maíz amarillo y blanco** se formaron los primeros seres humanos verdaderos, capaces de pensar y agradecer. Por eso el maíz es sagrado para muchos pueblos mayas.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.1.1'], ambito: 'conocer',
          prompt: '¿De qué relato es cada idea? Clasifícala.',
          hint: 'Busca pistas: "siete días" es del Génesis; el barro, la madera y el maíz son del Popol Vuh.',
          explain: 'Los dos relatos son distintos, pero comparten algo: explican el origen y enseñan a **agradecer y cuidar** la vida.' },
        { buckets: [
          { id: 'gen', label: 'Génesis (judeocristiano)', icon: 'BookOpen', color: 'var(--area-cnt)' },
          { id: 'pop', label: 'Popol Vuh (maya k\'iche\')', icon: 'Wheat', color: 'var(--c-maiz-strong)' },
          { id: 'amb', label: 'Los dos', icon: 'Copy', color: 'var(--area-ccss)' },
        ], items: [
          { id: 'g1', text: 'La creación ocurre en seis días y el séptimo es de descanso', bucket: 'gen' },
          { id: 'g2', text: 'Los primeros seres humanos verdaderos se forman de maíz', bucket: 'pop' },
          { id: 'g3', text: 'Hubo intentos con barro y con madera', bucket: 'pop' },
          { id: 'g4', text: 'El ser humano, hombre y mujer, se crea el sexto día', bucket: 'gen' },
          { id: 'g5', text: 'Explica el origen del mundo y enseña valores', bucket: 'amb' },
          { id: 'g6', text: 'Se transmite de generación en generación', bucket: 'amb' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.1.1'], ambito: 'conocer', title: 'La explicación de la ciencia',
          prompt: 'Los científicos estudian la luz de las estrellas, las rocas y los meteoritos para reconstruir la historia del universo. Mira la animación y toca las tarjetas.',
          media: { id: 's01-cnt-1-granexplosion', kind: 'animation', title: 'De la Gran Explosión a la Tierra', aspect: '16:9', duration: 50,
            alt: 'Un punto de luz se expande y forma galaxias; en una de ellas una nube de gas y polvo gira y forma el Sol y los planetas; la Tierra pasa de roca ardiente a planeta azul con océanos.',
            brief: 'Animación 2D de 50 s, estilo sencillo y colorido. (1) Un punto brillante se expande: rótulo "Gran Explosión, hace unos 13,800 millones de años". (2) Se forman estrellas y galaxias. (3) Acercamiento a una nube de gas y polvo que gira; en el centro nace el Sol y alrededor se juntan planetas: rótulo "hace unos 4,600 millones de años". (4) La Tierra: roca caliente con volcanes, se enfría, llueve durante mucho tiempo y se forman los océanos: "hace unos 4,500 millones de años". (5) Primeras formas de vida microscópicas en el agua. Narración en español, calmada, con subtítulos. No mezclar con imágenes religiosas.' } },
        { icon: 'Rocket', body: 'La ciencia **no** usa relatos: usa **pruebas**. Por ejemplo, los telescopios muestran que las galaxias se alejan unas de otras, como si todo hubiera empezado en un mismo punto.', reveal: [
          { icon: 'Sparkles', front: 'Gran Explosión', back: 'Hace unos **13,800 millones de años**, el universo era muy pequeño y caliente, y comenzó a **expandirse**. Así se formaron, con el tiempo, las galaxias y las estrellas.' },
          { icon: 'Sun', front: 'Nace el Sol', back: 'Hace unos **4,600 millones de años**, una nube de gas y polvo se juntó por la gravedad: en el centro se formó el **Sol** y alrededor, los planetas.' },
          { icon: 'Earth', front: 'La Tierra', back: 'Se formó hace unos **4,500 millones de años**. Primero era roca ardiente; al enfriarse, la lluvia formó los **océanos**, y allí surgieron los primeros seres vivos, **microscópicos**.' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.1.1'], ambito: 'conocer',
          prompt: 'Según la explicación científica, ordena estos sucesos del **más antiguo** al **más reciente**.',
          explain: 'Primero el universo se expande; luego nacen galaxias y estrellas; después el Sol y la Tierra; la Tierra se enfría y forma océanos, y en el agua aparecen los primeros seres vivos.' },
        { labels: { start: 'Más antiguo', end: 'Más reciente' }, items: [
          { id: 'c1', text: 'El universo comienza a expandirse (Gran Explosión)', icon: 'Sparkles' },
          { id: 'c2', text: 'Se forman las primeras galaxias y estrellas', icon: 'Star' },
          { id: 'c3', text: 'Una nube de gas y polvo forma el Sol y los planetas', icon: 'Sun' },
          { id: 'c4', text: 'La Tierra se enfría y se forman los océanos', icon: 'Waves' },
          { id: 'c5', text: 'Aparecen los primeros seres vivos, microscópicos, en el agua', icon: 'Microscope' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.1.1'], ambito: 'conocer',
          prompt: '¿Es una característica de un **relato de fe o cultural** o de una **explicación científica**?',
          explain: 'La ciencia pregunta **cómo** ocurrieron las cosas y lo comprueba con pruebas. Los relatos de fe y culturales responden sobre todo **por qué** y **para qué** existimos. Muchas personas valoran las dos cosas.' },
        { buckets: [
          { id: 'rel', label: 'Relato de fe o cultural', icon: 'BookOpen', color: 'var(--c-maiz-strong)' },
          { id: 'cie', label: 'Explicación científica', icon: 'Microscope', color: 'var(--area-cnt)' },
        ], items: [
          { id: 'r1', text: 'Se basa en observaciones con telescopios y en mediciones', bucket: 'cie' },
          { id: 'r2', text: 'Enseña a agradecer la vida y a cuidar la naturaleza', bucket: 'rel' },
          { id: 'r3', text: 'Cambia si se descubren pruebas nuevas', bucket: 'cie' },
          { id: 'r4', text: 'Se cuenta en la familia y en las ceremonias de la comunidad', bucket: 'rel' },
          { id: 'r5', text: 'Calcula la edad de la Tierra midiendo rocas y meteoritos', bucket: 'cie' },
          { id: 'r6', text: 'Habla de la relación de las personas con lo sagrado', bucket: 'rel' },
        ] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['cnt', 'fc'], cnb: ['cnt:1.1.1'], ambito: 'convivir',
          prompt: 'Conocer distintas cosmovisiones también es aprender a convivir. ¿Qué harías tú?' },
        { scene: { icon: 'MessagesSquare', text: 'En clase, **Ixchel** cuenta que su abuelo le narra el Popol Vuh, y **Samuel** comparte que en su iglesia leen el Génesis. **Kevin** se ríe y dice: "Eso son cuentos; lo único que vale es la ciencia".' }, options: [
          { id: 'a', icon: 'ThumbsUp', text: 'Reírme con Kevin', consequence: 'Ixchel y Samuel se sienten ofendidos y dejan de participar. Burlarse de las creencias de otras personas divide al grupo.', values: ['Burla'], constructive: false },
          { id: 'b', icon: 'Handshake', text: 'Decir que la ciencia y los relatos responden preguntas distintas, y que todos merecen respeto', consequence: 'El grupo conversa con calma. Kevin entiende que puede valorar la ciencia sin despreciar la fe ni la cultura de los demás.', values: ['Respeto', 'Diálogo'], constructive: true },
          { id: 'c', icon: 'MessageCircle', text: 'Pedir a Ixchel y a Samuel que cuenten más, y a Kevin que explique la Gran Explosión', consequence: 'Todos aprenden algo nuevo: el grupo descubre que escuchar distintas miradas enriquece.', values: ['Curiosidad', 'Interculturalidad'], constructive: true },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.1.1'], prompt: 'Según el relato judeocristiano del Génesis, ¿qué fue creado el **quinto día**?' },
        { options: [
          { id: 'a', text: 'Los peces y las aves' },
          { id: 'b', text: 'La luz' },
          { id: 'c', text: 'El Sol, la Luna y las estrellas' },
          { id: 'd', text: 'El ser humano' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En el Popol Vuh, los primeros seres humanos verdaderos fueron formados de maíz.', answer: true },
          { text: 'Según el Génesis, el séptimo día fue un día de descanso.', answer: true },
          { text: 'Según la ciencia, la Tierra se formó antes que el universo.', answer: false, why: 'El universo comenzó hace unos 13,800 millones de años; la Tierra se formó mucho después, hace unos 4,500 millones.' },
          { text: 'Una explicación científica nunca cambia, aunque aparezcan pruebas nuevas.', answer: false, why: 'La ciencia se corrige y mejora cuando hay pruebas nuevas.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. La célula animal ───────────────────────── */
  lesson({
    id: 's01-cnt-2',
    title: 'La célula animal y sus organelos',
    icon: 'Microscope',
    minutes: 15,
    gancho: 'Un jaguar, una hormiga y tú parecen muy distintos. Si los miraras con un microscopio muy potente, ¿qué encontrarías en los tres?',
    objetivos: [
      'Explicar qué es la célula y por qué es la unidad de la vida',
      'Nombrar las partes de la célula animal y describir la función de cada organelo',
    ],
    resumen: [
      'La célula es la unidad más pequeña con vida. Todos los seres vivos están formados por células, y toda célula proviene de otra célula.',
      'Partes principales: membrana celular (controla lo que entra y sale), citoplasma (medio donde están los organelos) y núcleo (guarda el ADN y dirige la célula).',
      'Organelos: mitocondrias (producen energía), ribosomas (fabrican proteínas), retículo endoplasmático (transporta), aparato de Golgi (empaca y envía), lisosomas (digieren desechos), vacuolas (almacenan) y centriolos (ayudan a dividir la célula).',
    ],
    media: {
      id: 's01-cnt-2-celula-animal', kind: 'diagram', title: 'La célula animal por dentro', aspect: '4:3',
      alt: 'Esquema de una célula animal redondeada, cortada por la mitad, con el núcleo en el centro y los organelos rotulados en el citoplasma.',
      brief: 'Diagrama escolar en colores planos de una célula animal de forma redondeada e irregular, vista en corte. Rotular con líneas guía y letra grande: membrana celular (borde fino azul), citoplasma (celeste claro), núcleo (morado, con nucléolo y ADN como hilos), mitocondrias (naranja, forma de frijol con pliegues), ribosomas (puntitos negros), retículo endoplasmático (pliegues rosados junto al núcleo), aparato de Golgi (sacos amarillos apilados), lisosomas (círculos verdes pequeños), vacuolas pequeñas y par de centriolos. Fondo blanco. Estilo de libro de texto de primaria, sin exceso de detalle.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:1.2.1'], ambito: 'conocer', title: '¿Qué es una célula?',
          prompt: 'La **célula** es la unidad más pequeña que tiene vida: se alimenta, crece, responde y se reproduce. Toca cada tarjeta.' },
        { icon: 'Microscope', body: 'La mayoría de las células mide **menos de una décima de milímetro**: por eso necesitamos un **microscopio** para verlas. Tu cuerpo tiene **billones** de ellas (millones de millones).', reveal: [
          { icon: 'Blocks', front: 'Unidad de la vida', back: '**Todos** los seres vivos están formados por células: algunos por una sola, otros, como tú, por billones.' },
          { icon: 'Copy', front: 'Viene de otra célula', back: 'Toda célula nace de **otra célula** que se divide en dos. Así creces y así se reparan tus heridas.' },
          { icon: 'Layers', front: 'Tres partes principales', back: '**Membrana** (el borde), **citoplasma** (el interior) y **núcleo** (el centro de mando).' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.2.1'], ambito: 'conocer',
          prompt: '¿Qué tienen en común un **jaguar**, una **hormiga** y **tú**?',
          explain: 'Los tres están formados por **células**. La hormiga no tiene huesos y solo el jaguar tiene pelo, pero todos los seres vivos están hechos de células.' },
        { layout: 'grid', options: [
          { id: 'a', text: 'Todos tienen huesos', icon: 'Bone', feedback: 'La hormiga no tiene huesos: tiene un esqueleto externo, duro, por fuera del cuerpo.' },
          { id: 'b', text: 'Todos están formados por células', icon: 'Microscope' },
          { id: 'c', text: 'Todos tienen pelo', icon: 'Cat', feedback: 'Ni la hormiga ni tú tienen el cuerpo cubierto de pelo como el jaguar.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.2.1'], ambito: 'conocer', title: 'Las partes principales',
          prompt: 'Imagina la célula como una **comunidad pequeña**: tiene un cerco con portón, un espacio donde se trabaja y una oficina que da las órdenes. Toca las tarjetas.' },
        { icon: 'Home', body: 'Cada parte tiene una **función** (un trabajo). Si una parte falla, toda la célula sufre.', reveal: [
          { icon: 'Shield', front: 'Membrana celular', back: 'Capa delgada y flexible que rodea la célula. **Controla qué entra y qué sale**: deja pasar agua y nutrientes y saca desechos. Es como el cerco con portón.' },
          { icon: 'Droplets', front: 'Citoplasma', back: 'Sustancia parecida a una **gelatina** que llena la célula. En ella flotan los organelos y ocurren muchas reacciones.' },
          { icon: 'Brain', front: 'Núcleo', back: 'Guarda el **ADN**, la información para construir y hacer funcionar la célula. **Dirige** todas sus actividades, como una oficina central.' },
        ] },
      ),
      S.fill(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.2.1'], ambito: 'conocer',
          prompt: 'Completa la descripción de la célula animal.',
          hint: 'El borde controla el paso; la "gelatina" es el citoplasma; el centro de mando es el núcleo.',
          explain: 'Membrana = controla el paso; citoplasma = medio interno; núcleo = guarda el ADN y dirige.' },
        { text: 'La [[membrana celular]] rodea la célula y controla lo que entra y sale. Adentro está el [[citoplasma]], una sustancia parecida a la gelatina donde flotan los organelos. El [[núcleo]] guarda el [[ADN]] y dirige las actividades de la célula.',
          distractors: ['cloroplasto', 'pared celular'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.2.1'], ambito: 'conocer', title: 'Los organelos: trabajadores de la célula',
          prompt: 'En el citoplasma hay **organelos**: pequeñas estructuras, cada una con un trabajo. Observa el esquema de la lección y toca cada tarjeta.' },
        { icon: 'Factory', body: 'Los organelos trabajan en equipo, como las personas de una panadería: unas hacen la masa, otras hornean, otras empacan y otras limpian.', reveal: [
          { icon: 'Zap', front: 'Mitocondrias', back: 'Transforman los nutrientes de los alimentos en **energía** que la célula usa. Son su "planta de energía".' },
          { icon: 'CircleDot', front: 'Ribosomas', back: 'Puntitos que **fabrican proteínas**, siguiendo las instrucciones del núcleo.' },
          { icon: 'Route', front: 'Retículo endoplasmático', back: 'Red de canales y pliegues que **transporta** sustancias dentro de la célula.' },
          { icon: 'Package', front: 'Aparato de Golgi', back: 'Sacos apilados que **empacan y envían** las sustancias adonde se necesitan, dentro o fuera de la célula.' },
          { icon: 'Recycle', front: 'Lisosomas', back: 'Bolsitas con jugos que **digieren** desechos y partes viejas. Son el "equipo de limpieza".' },
          { icon: 'Archive', front: 'Vacuolas y centriolos', back: 'Las **vacuolas** (pequeñas en la célula animal) **almacenan** agua y sustancias. Los **centriolos** ayudan a la célula a **dividirse** en dos.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.2.1'], ambito: 'conocer',
          prompt: 'Une cada organelo con su función.',
          hint: 'Piensa en la comparación con la panadería: energía, fabricar, transportar, empacar, limpiar.',
          explain: 'Mitocondria = energía; ribosoma = proteínas; retículo = transporte; Golgi = empaque y envío; lisosoma = digestión de desechos; centriolos = división.' },
        { leftTitle: 'Organelo', rightTitle: 'Función', pairs: [
          { id: 'mi', left: 'Mitocondria', leftIcon: 'Zap', right: 'Produce energía a partir de los nutrientes' },
          { id: 'ri', left: 'Ribosoma', leftIcon: 'CircleDot', right: 'Fabrica proteínas' },
          { id: 're', left: 'Retículo endoplasmático', leftIcon: 'Route', right: 'Transporta sustancias por la célula' },
          { id: 'go', left: 'Aparato de Golgi', leftIcon: 'Package', right: 'Empaca y envía sustancias' },
          { id: 'li', left: 'Lisosoma', leftIcon: 'Recycle', right: 'Digiere desechos y partes viejas' },
          { id: 'ce', left: 'Centriolos', leftIcon: 'Copy', right: 'Ayudan a la célula a dividirse' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.2.1'], ambito: 'conocer', title: 'Ejemplo: los organelos en equipo',
          prompt: 'Mira cómo varios organelos trabajan juntos para que una célula fabrique y envíe una sustancia.',
          media: { id: 's01-cnt-2-proteina', kind: 'animation', title: 'El viaje de una proteína', aspect: '16:9', duration: 40,
            alt: 'Animación dentro de una célula animal: una instrucción sale del núcleo, un ribosoma arma una proteína, esta viaja por el retículo, el aparato de Golgi la empaca y una bolsita la saca por la membrana.',
            brief: 'Animación 2D de 40 s con el mismo estilo del esquema de la célula animal. Un "mensaje" (cinta morada) sale del núcleo; un ribosoma sobre el retículo endoplasmático arma una cadena de cuentas (proteína); la cadena viaja por los canales del retículo hasta el aparato de Golgi, que la envuelve en una burbuja; la burbuja llega a la membrana y la proteína sale de la célula. Las mitocondrias brillan cada vez que dan energía. Rótulos grandes en cada organelo; narración en español con subtítulos.' } },
        { icon: 'Factory', problem: 'Las células del estómago fabrican **enzimas digestivas**: proteínas que salen de la célula y ayudan a deshacer la comida. ¿Qué organelos participan y en qué orden?',
          steps: [
            { text: 'El **núcleo** tiene en su ADN la instrucción para fabricar la sustancia y la envía al citoplasma.', why: 'El núcleo dirige: sin su instrucción, no se fabrica nada.' },
            { text: 'Los **ribosomas** fabrican la proteína siguiendo esa instrucción.' },
            { text: 'El **retículo endoplasmático** la transporta por sus canales.' },
            { text: 'El **aparato de Golgi** la empaca en una bolsita y la envía hacia la **membrana**, que la deja salir.' },
            { text: 'Durante todo el proceso, las **mitocondrias** aportan la **energía** necesaria.', why: 'Fabricar, transportar y empacar requiere energía.' },
          ],
          answer: 'Núcleo → ribosomas → retículo endoplasmático → aparato de Golgi → membrana, con energía de las mitocondrias.',
          tip: 'Los organelos no trabajan solos: la célula funciona como un equipo.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.2.1'], ambito: 'conocer',
          prompt: 'Las células de los **músculos de las piernas** de una corredora de maratón necesitan muchísima energía. ¿Qué organelo tendrán en gran cantidad?',
          explain: 'Las células que gastan mucha energía, como las musculares, tienen **muchas mitocondrias**.' },
        { options: [
          { id: 'a', text: 'Mitocondrias', icon: 'Zap' },
          { id: 'b', text: 'Lisosomas', icon: 'Recycle', feedback: 'Los lisosomas digieren desechos; no producen energía.' },
          { id: 'c', text: 'Aparato de Golgi', icon: 'Package', feedback: 'El Golgi empaca y envía sustancias; la energía viene de otro organelo.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.2.1'], ambito: 'conocer',
          prompt: 'Una célula de tu piel fabrica una proteína que la protege. Ordena el recorrido, desde la instrucción hasta que la proteína sale.',
          explain: 'La instrucción sale del núcleo, el ribosoma fabrica, el retículo transporta, el Golgi empaca y la membrana deja salir.' },
        { labels: { start: 'Inicio', end: 'Final' }, items: [
          { id: 'p1', text: 'El núcleo envía la instrucción', icon: 'Brain' },
          { id: 'p2', text: 'Un ribosoma fabrica la proteína', icon: 'CircleDot' },
          { id: 'p3', text: 'El retículo endoplasmático la transporta', icon: 'Route' },
          { id: 'p4', text: 'El aparato de Golgi la empaca', icon: 'Package' },
          { id: 'p5', text: 'La membrana la deja salir de la célula', icon: 'Shield' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.2.1'], ambito: 'conocer',
          prompt: 'Supongamos que en una célula los **lisosomas** dejaran de funcionar. ¿Qué pasaría con más probabilidad?',
          explain: 'Sin su "equipo de limpieza", los desechos y las partes viejas se acumularían y la célula se dañaría.' },
        { options: [
          { id: 'a', text: 'Se acumularían desechos dentro de la célula', icon: 'Trash2' },
          { id: 'b', text: 'La célula dejaría de tener membrana', icon: 'Shield', feedback: 'La membrana no depende de los lisosomas.' },
          { id: 'c', text: 'La célula tendría más energía', icon: 'Zap', feedback: 'La energía la producen las mitocondrias.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.2.1'], prompt: '¿Qué parte de la célula **guarda el ADN y dirige** sus actividades?' },
        { options: [
          { id: 'a', text: 'La membrana celular' },
          { id: 'b', text: 'El núcleo' },
          { id: 'c', text: 'El citoplasma' },
          { id: 'd', text: 'Los ribosomas' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La membrana celular controla qué sustancias entran y salen de la célula.', answer: true },
          { text: 'Los ribosomas se encargan de digerir los desechos de la célula.', answer: false, why: 'Los ribosomas fabrican proteínas; los lisosomas digieren desechos.' },
          { text: 'El aparato de Golgi empaca y envía sustancias.', answer: true },
          { text: 'Una célula puede aparecer de la nada, sin venir de otra célula.', answer: false, why: 'Toda célula proviene de otra célula que se divide.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Célula animal y vegetal ───────────────────────── */
  lesson({
    id: 's01-cnt-3',
    title: 'Célula animal y célula vegetal',
    icon: 'Leaf',
    minutes: 15,
    gancho: 'Una hoja de lechuga fresca cruje y se mantiene firme; tu mejilla es suave y flexible. ¿Tendrá algo que ver con sus células?',
    objetivos: [
      'Identificar las estructuras que comparten la célula animal y la vegetal',
      'Explicar las diferencias: pared celular, cloroplastos, vacuola central y centriolos',
      'Usar esas diferencias para explicar fenómenos cotidianos',
    ],
    resumen: [
      'Ambas células tienen membrana, citoplasma, núcleo, mitocondrias, ribosomas, retículo endoplasmático y aparato de Golgi.',
      'Solo la célula vegetal tiene pared celular (da forma y firmeza), cloroplastos (hacen la fotosíntesis) y una vacuola central grande (guarda agua).',
      'La célula animal tiene centriolos, vacuolas pequeñas y forma redondeada o irregular; la vegetal suele tener forma regular, como un ladrillo.',
    ],
    media: {
      id: 's01-cnt-3-comparacion', kind: 'diagram', title: 'Célula animal y célula vegetal lado a lado', aspect: '16:9',
      alt: 'A la izquierda una célula animal redondeada; a la derecha una célula vegetal rectangular con pared gruesa verde, cloroplastos y una gran vacuola central. Las estructuras compartidas tienen el mismo color en ambas.',
      brief: 'Diagrama escolar comparativo en colores planos. Izquierda: célula animal redondeada (membrana, citoplasma, núcleo, mitocondrias, ribosomas, retículo, Golgi, lisosomas, centriolos). Derecha: célula vegetal con forma de ladrillo: pared celular gruesa verde oscuro por fuera de la membrana, varios cloroplastos verdes ovalados, vacuola central grande celeste que empuja el núcleo hacia un lado, mitocondrias. Estructuras compartidas con el mismo color en ambas células; las exclusivas con un borde de estrella y rótulo en negrita ("solo vegetal", "solo animal"). Letra grande, fondo blanco.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:1.3.1'], ambito: 'conocer', title: 'Lo que comparten',
          prompt: 'Las células de plantas y de animales son **parecidas por dentro**. Toca las tarjetas.' },
        { icon: 'Copy', body: 'Ambas tienen **núcleo** con ADN y los organelos que aprendiste en la lección anterior.', reveal: [
          { icon: 'Shield', front: 'Membrana y citoplasma', back: 'Las dos tienen **membrana celular** que controla el paso de sustancias y **citoplasma** donde flotan los organelos.' },
          { icon: 'Brain', front: 'Núcleo', back: 'Las dos guardan su ADN en un **núcleo** que dirige la célula.' },
          { icon: 'Zap', front: 'Mitocondrias', back: '¡Ojo! Las plantas **también** tienen mitocondrias: necesitan energía para crecer, igual que tú.' },
          { icon: 'Package', front: 'Ribosomas, retículo y Golgi', back: 'Ambas fabrican, transportan y empacan sustancias con los mismos organelos.' },
        ] },
      ),
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:1.3.1'], ambito: 'conocer', title: 'Lo que las hace diferentes',
          prompt: 'Observa el esquema de la lección. La célula vegetal tiene **tres estructuras** que la animal no tiene, y la animal tiene una que la vegetal no. Toca cada tarjeta.' },
        { icon: 'Leaf', body: 'Las plantas **no se mueven** de un lugar a otro y **fabrican su propio alimento** con la luz del Sol. Sus células están preparadas para eso.', reveal: [
          { icon: 'Square', front: 'Pared celular (solo vegetal)', back: 'Capa **rígida** de **celulosa** por fuera de la membrana. Da **forma y firmeza**: por eso un tronco se sostiene de pie. La madera y el papel están hechos de paredes celulares.' },
          { icon: 'Sun', front: 'Cloroplastos (solo vegetal)', back: 'Organelos verdes con **clorofila**. Capturan la luz del Sol y hacen la **fotosíntesis**: fabrican alimento (azúcar) y liberan oxígeno.' },
          { icon: 'Droplet', front: 'Vacuola central (solo vegetal)', back: 'Una bolsa **grande** llena de agua que ocupa casi toda la célula y la mantiene **firme**. En la célula animal las vacuolas son pequeñas.' },
          { icon: 'Circle', front: 'Centriolos y forma (solo animal)', back: 'La célula animal tiene **centriolos** y, sin pared, tiene forma **redondeada o irregular**. La vegetal suele verse como un **ladrillo**.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.3.1'], ambito: 'conocer',
          prompt: 'Usa lo aprendido: ¿por qué una hoja de lechuga fresca se mantiene **firme** y cruje?',
          explain: 'La **pared celular** rígida y la **vacuola** llena de agua ayudan a que la hoja se mantenga firme.' },
        { options: [
          { id: 'a', text: 'Porque sus células tienen una cubierta rígida y mucha agua adentro', icon: 'Droplets' },
          { id: 'b', text: 'Porque tiene huesos muy pequeños', icon: 'Bone', feedback: 'Las plantas no tienen huesos. La firmeza viene de sus células.' },
          { id: 'c', text: 'Porque está fría', icon: 'Snowflake', feedback: 'El frío ayuda a conservarla, pero la firmeza viene de la estructura de sus células.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.3.1'], ambito: 'conocer',
          prompt: 'Clasifica cada estructura: ¿solo en la célula animal, solo en la vegetal o en ambas?',
          hint: 'Solo la vegetal: pared, cloroplastos, vacuola central grande. Solo la animal: centriolos. Lo demás lo comparten.',
          explain: 'Compartidas: membrana, núcleo, mitocondrias, ribosomas. Solo vegetal: pared celular, cloroplastos, vacuola central. Solo animal: centriolos.' },
        { buckets: [
          { id: 'an', label: 'Solo animal', icon: 'Circle', color: 'var(--area-l1)' },
          { id: 've', label: 'Solo vegetal', icon: 'Leaf', color: 'var(--c-ok)' },
          { id: 'am', label: 'Ambas', icon: 'Copy', color: 'var(--area-cnt)' },
        ], items: [
          { id: 's1', text: 'Pared celular', bucket: 've' },
          { id: 's2', text: 'Cloroplastos', bucket: 've' },
          { id: 's3', text: 'Núcleo', bucket: 'am' },
          { id: 's4', text: 'Centriolos', bucket: 'an' },
          { id: 's5', text: 'Mitocondrias', bucket: 'am', feedback: 'Las plantas también necesitan energía: tienen mitocondrias.' },
          { id: 's6', text: 'Vacuola central grande', bucket: 've' },
          { id: 's7', text: 'Membrana celular', bucket: 'am', feedback: 'La célula vegetal también tiene membrana, justo por dentro de la pared.' },
          { id: 's8', text: 'Ribosomas', bucket: 'am' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.3.1'], ambito: 'hacer', title: 'Ejemplo: la lechuga marchita',
          prompt: 'Usa lo que sabes de la célula vegetal para explicar algo que pasa en la cocina.',
          media: { id: 's01-cnt-3-lechuga', kind: 'image', title: 'Antes y después: la hoja en agua', aspect: '4:3',
            alt: 'Dos fotos de una hoja de lechuga: a la izquierda marchita y doblada; a la derecha firme después de estar en un vaso con agua. Debajo, dos células vegetales: una con la vacuola pequeña y otra con la vacuola llena.',
            brief: 'Composición de dos fotografías reales, fondo de mesa de cocina sencilla: (1) hoja de lechuga marchita, caída; (2) la misma hoja firme dentro de un vaso de agua, rótulo "1 hora después". Debajo de cada foto, un dibujo simple de una célula vegetal: vacuola encogida y membrana separada de la pared (marchita) / vacuola grande que empuja contra la pared (firme). Flechas azules de agua entrando. Sin marcas comerciales.' } },
        { icon: 'Salad', problem: 'Una hoja de lechuga se quedó fuera del refrigerador y se **marchitó**. La mamá de Rosa la pone en un vaso con agua fresca y, una hora después, está **firme** otra vez. ¿Por qué?',
          steps: [
            { text: 'La hoja marchita **perdió agua**: las **vacuolas** de sus células se encogieron.', why: 'La vacuola central guarda el agua de la célula vegetal.' },
            { text: 'Sin agua que empuje, las células ya no presionan contra la **pared celular**, y la hoja se dobla.' },
            { text: 'En el vaso, el agua **entra** a las células a través de la pared y de la membrana, y las vacuolas se llenan de nuevo.' },
            { text: 'Las vacuolas llenas empujan contra la pared rígida: la célula se pone **firme**, como un globo inflado dentro de una caja.', why: 'La pared no deja que la célula se estire de más.' },
          ],
          answer: 'La firmeza de la hoja depende de la **vacuola llena de agua** que empuja contra la **pared celular**.',
          tip: 'Pruébalo en casa, con permiso: pon una rama de apio o una hoja marchita en un vaso de agua y obsérvala después de una hora.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.3.1'], ambito: 'conocer',
          prompt: 'Rodrigo dice: "Las plantas no tienen mitocondrias porque ya tienen cloroplastos". ¿Tiene razón?',
          hint: 'Recuerda: ¿qué hace cada organelo? Uno fabrica alimento; el otro saca energía del alimento.',
          explain: 'El **cloroplasto** fabrica el alimento (azúcar) con la luz; la **mitocondria** saca energía de ese alimento. Las plantas necesitan los dos.' },
        { options: [
          { id: 'a', text: 'Sí, los cloroplastos hacen el trabajo de las mitocondrias', feedback: 'Hacen trabajos distintos: fabricar alimento no es lo mismo que obtener energía de él.' },
          { id: 'b', text: 'No: las plantas tienen cloroplastos **y** mitocondrias' },
          { id: 'c', text: 'No: las plantas no tienen ninguno de los dos', feedback: 'Las células de las hojas tienen cloroplastos, y todas las células vegetales tienen mitocondrias.' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.3.1'], ambito: 'hacer',
          prompt: 'Una científica describe lo que vio en el microscopio. ¿Es una célula **animal** o **vegetal**?',
          explain: 'Pared gruesa, forma de ladrillo, granos verdes o una gran vacuola indican célula vegetal. Forma redondeada sin pared indica célula animal.' },
        { layout: 'grid2', buckets: [
          { id: 'an', label: 'Célula animal', icon: 'Circle', color: 'var(--area-l1)' },
          { id: 've', label: 'Célula vegetal', icon: 'Leaf', color: 'var(--c-ok)' },
        ], items: [
          { id: 'm1', text: 'Forma de ladrillo, con muchos granos verdes', bucket: 've' },
          { id: 'm2', text: 'Redondeada, flexible, sin pared', bucket: 'an' },
          { id: 'm3', text: 'Tiene una bolsa de agua que ocupa casi toda la célula', bucket: 've' },
          { id: 'm4', text: 'De la mejilla por dentro, con forma irregular', bucket: 'an' },
          { id: 'm5', text: 'De una hoja de milpa, con cloroplastos', bucket: 've' },
          { id: 'm6', text: 'Tiene centriolos cerca del núcleo', bucket: 'an' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:1.3.1'], ambito: 'conocer',
          prompt: 'En una célula de la **raíz de una zanahoria** hay pared celular y vacuola central, pero **no hay cloroplastos**. ¿Qué concluyes?',
          explain: 'La raíz crece bajo tierra, donde no llega la luz: sus células no necesitan cloroplastos. La **pared celular** y la **vacuola central** muestran que sí es una célula vegetal.' },
        { options: [
          { id: 'a', text: 'Es una célula animal, porque no tiene cloroplastos', feedback: 'Las células animales no tienen pared celular ni vacuola central grande.' },
          { id: 'b', text: 'Es vegetal: la raíz está bajo tierra y no necesita cloroplastos', icon: 'Carrot' },
          { id: 'c', text: 'No es una célula', feedback: 'Tiene pared, vacuola y seguramente núcleo: es una célula.' },
        ], correct: ['b'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['cnt', 'art'], cnb: ['cnt:1.3.1'], ambito: 'hacer', title: 'Reto en casa (opcional)',
          prompt: 'Construye un **modelo** de célula vegetal con materiales que tengas en casa.' },
        { goal: 'Hacer un modelo que muestre las estructuras de la célula vegetal y que puedas explicar a tu familia.',
          steps: [
            { title: 'La pared', detail: 'Usa una caja pequeña de cartón o una bandeja: será la **pared celular**, rígida.' },
            { title: 'La membrana y el citoplasma', detail: 'Pon dentro una bolsa plástica transparente con un poco de agua o gelatina ya fría (pide ayuda a una persona adulta).' },
            { title: 'Los organelos', detail: 'Agrega un globo pequeño o una pelotita como **vacuola central**, una semilla grande como **núcleo**, frijoles verdes o arvejas como **cloroplastos** y granos de maíz como **mitocondrias**.' },
            { title: 'Rótulos', detail: 'Escribe tarjetas con el nombre y la función de cada estructura.' },
          ],
          evidence: 'Una foto o un dibujo del modelo con sus rótulos, y la explicación a alguien de tu familia.',
          rubric: ['Incluye pared, membrana, citoplasma, núcleo, vacuola central, cloroplastos y mitocondrias', 'Cada estructura tiene su nombre y su función', 'Expliqué qué diferencia a esta célula de una animal'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.3.1'], prompt: '¿Qué estructura permite a la célula vegetal **fabricar su alimento** con la luz del Sol?' },
        { options: [
          { id: 'a', text: 'La pared celular' },
          { id: 'b', text: 'El cloroplasto' },
          { id: 'c', text: 'El centriolo' },
          { id: 'd', text: 'El lisosoma' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.3.1', 'cnt:1.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La célula animal tiene pared celular de celulosa.', answer: false, why: 'Solo la célula vegetal tiene pared celular.' },
          { text: 'Tanto la célula animal como la vegetal tienen núcleo y mitocondrias.', answer: true },
          { text: 'La vacuola central grande ayuda a que la planta se mantenga firme.', answer: true },
          { text: 'Las células animales suelen tener forma de ladrillo.', answer: false, why: 'Sin pared, la célula animal tiene forma redondeada o irregular.' },
        ] },
      ),
      cierre({ areas: ['cnt'], cnb: [] },
        ['Explico el origen del universo según distintas cosmovisiones y la ciencia', 'Nombro los organelos de la célula animal y su función', 'Diferencio una célula animal de una vegetal'],
        ['Contaré a mi familia lo que aprendí sobre las células', 'Preguntaré a una persona mayor qué relato de origen conoce']),
    ],
  }),
];
