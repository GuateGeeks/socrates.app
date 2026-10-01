/**
 * Formación Ciudadana · Unidad 1 · Semana 1 — Mi lugar en el planeta.
 * Progresión: los valores que hacen posible convivir (solidaridad y tolerancia) →
 * los derechos humanos y cómo se viven (o no) en los lugares concretos donde vivimos.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Solidaridad y tolerancia ───────────────────────── */
  lesson({
    id: 's01-fc-1',
    title: 'Convivir con solidaridad y tolerancia',
    icon: 'HeartHandshake',
    minutes: 13,
    gancho: 'Llega a tu grado una compañera nueva que no conoce a nadie. ¿Qué te gustaría que hicieran por ti si fueras ella?',
    objetivos: [
      'Explicar con tus palabras qué son la solidaridad y la tolerancia',
      'Distinguir actitudes que favorecen la convivencia de las que la dañan',
      'Elegir respuestas solidarias y tolerantes en situaciones reales',
    ],
    resumen: [
      'Convivir es vivir junto a otras personas compartiendo espacios, reglas y responsabilidades: en la casa, la escuela y la comunidad.',
      'Solidaridad: apoyar a otras personas, sobre todo a quien lo necesita, sin esperar nada a cambio.',
      'Tolerancia: respetar a las personas y sus ideas, idiomas, costumbres o creencias aunque sean distintas de las mías. Ser tolerante no significa aceptar abusos.',
      'Escuchar, incluir, compartir y reparar el daño favorecen la convivencia; la burla, la exclusión y la indiferencia la dañan.',
    ],
    media: {
      id: 's01-fc-1-convivencia', kind: 'image', title: 'Una escuela que convive', aspect: '16:9',
      alt: 'Patio de una escuela rural guatemalteca: niñas y niños de distintos pueblos comparten la refacción, ayudan a un compañero con muletas y juegan juntos.',
      brief: 'Ilustración plana y cálida de un patio escolar en Guatemala, a media mañana. Escenas pequeñas: (1) una niña con traje maya comparte su refacción con un niño nuevo; (2) dos niños ayudan a un compañero con muletas a subir un escalón; (3) un grupo mixto juega con una pelota; (4) una niña garífuna y un niño ladino conversan sonriendo. Paleta de colores vivos, sin textos ni marcas. Evitar estereotipos: niñas y niños en roles activos por igual.',
    },
    steps: [
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.1.2'], ambito: 'conocer', title: 'Dos valores para vivir juntos',
          prompt: 'Todos los días **convivimos**: compartimos la casa, el aula, la camioneta, el mercado. Para que la convivencia sea buena necesitamos valores. Toca cada tarjeta.' },
        { icon: 'Users', body: 'La **solidaridad** mueve a ayudar; la **tolerancia** mueve a respetar. Las dos juntas hacen que todas las personas se sientan parte del grupo.', reveal: [
          { icon: 'Home', front: 'Convivir', back: 'Vivir **junto a otras personas** compartiendo espacios, reglas y responsabilidades.' },
          { icon: 'HeartHandshake', front: 'Solidaridad', back: 'Apoyar a otros, **sobre todo a quien lo necesita**, sin esperar nada a cambio. Ejemplo: explicar la tarea a un compañero que faltó por enfermedad.' },
          { icon: 'Handshake', front: 'Tolerancia', back: 'Respetar a las personas y sus **ideas, idiomas, costumbres o creencias** aunque sean distintas de las mías. Ejemplo: escuchar con atención a quien piensa diferente.' },
          { icon: 'ShieldCheck', front: 'Lo que la tolerancia NO es', back: 'Tolerar **no** es aguantar golpes, insultos o abusos. Ante un abuso, lo correcto es pedir ayuda a una persona adulta de confianza.' },
        ] },
      ),
      S.choice(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:1.1.2'], ambito: 'convivir',
          prompt: 'Una tormenta tumbó la milpa de la familia de Tomás. Al día siguiente, varios vecinos llegaron con sus azadones a ayudar a resembrar, sin cobrar nada. ¿Cómo se llama esa actitud?',
          explain: 'Ayudar a quien lo necesita, sin esperar pago, es **solidaridad**. Hoy aprenderás este valor y otro que lo acompaña: la **tolerancia**.' },
        { options: [
          { id: 'a', text: 'Solidaridad', icon: 'HeartHandshake' },
          { id: 'b', text: 'Competencia', icon: 'Trophy', feedback: 'En una competencia cada quien busca ganar. Aquí los vecinos trabajan juntos para ayudar.' },
          { id: 'c', text: 'Indiferencia', icon: 'EyeOff', feedback: 'La indiferencia es no hacer nada ante el problema de otro. Los vecinos hicieron lo contrario.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.1.2'], prompt: 'Clasifica cada acción: ¿muestra sobre todo **solidaridad** o **tolerancia**?',
          hint: 'Pregúntate: ¿la persona está **ayudando** a alguien que lo necesita (solidaridad) o está **respetando** una diferencia (tolerancia)?',
          explain: 'Solidaridad = ayudar a quien lo necesita. Tolerancia = respetar lo diferente. Muchas veces aparecen juntas.' },
        { buckets: [
          { id: 'sol', label: 'Solidaridad (ayudar)', icon: 'HeartHandshake', color: 'var(--area-fc)' },
          { id: 'tol', label: 'Tolerancia (respetar)', icon: 'Handshake', color: 'var(--c-ok)' },
        ], items: [
          { id: 's1', text: 'Juntar víveres para una familia que perdió su casa en un deslave', bucket: 'sol' },
          { id: 's2', text: 'Escuchar sin burlarse a un compañero que reza de forma distinta a la tuya', bucket: 'tol' },
          { id: 's3', text: 'Prestar tus colores a quien no pudo comprarlos', bucket: 'sol' },
          { id: 's4', text: 'Respetar que tu amiga hable q’eqchi’ con su abuela durante el recreo', bucket: 'tol', feedback: 'Respetar el idioma de otra persona es tolerancia: su forma de comunicarse es tan valiosa como la tuya.' },
          { id: 's5', text: 'Aceptar que tu equipo eligió otro nombre, aunque tú preferías el tuyo', bucket: 'tol' },
          { id: 's6', text: 'Acompañar a casa a una compañera que se torció el tobillo', bucket: 'sol' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.1.2'], ambito: 'convivir', title: 'Actitudes que construyen y actitudes que dañan',
          prompt: 'Una **actitud** es nuestra forma habitual de reaccionar ante los demás. Algunas actitudes **construyen** la convivencia y otras la **dañan**. Toca cada tarjeta.' },
        { icon: 'Blocks', body: 'Las actitudes se **aprenden**. Por eso también se pueden **cambiar**: nadie nace burlándose, y todos podemos aprender a incluir.', reveal: [
          { icon: 'Ear', front: 'Escuchar', back: 'Dejar hablar al otro y tratar de entender lo que siente. **Construye**.' },
          { icon: 'Users', front: 'Incluir', back: 'Invitar a quien está solo o es nuevo a jugar y a trabajar. **Construye**.' },
          { icon: 'RefreshCw', front: 'Reparar', back: 'Pedir perdón y arreglar el daño cuando nos equivocamos. **Construye**.' },
          { icon: 'Megaphone', front: 'Burlarse', back: 'Reírse del acento, el cuerpo, la ropa o la pobreza de alguien. **Daña**: la persona se siente humillada.' },
          { icon: 'EyeOff', front: 'Ser indiferente', back: 'Ver que alguien sufre y no hacer nada. **Daña**: deja sola a la persona y permite que el problema siga.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.1.2'], prompt: '¿Esta actitud **favorece** o **daña** la convivencia?',
          hint: 'Piensa cómo se sentiría la otra persona. Si se siente respetada o acompañada, la actitud favorece la convivencia.',
          explain: 'Las actitudes que favorecen la convivencia hacen sentir a las personas respetadas e incluidas; las que la dañan las humillan o las dejan solas.' },
        { buckets: [
          { id: 'fav', label: 'Favorece', icon: 'ThumbsUp', color: 'var(--c-ok)' },
          { id: 'dan', label: 'Daña', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'a1', text: 'Poner apodos por el color de piel', bucket: 'dan' },
          { id: 'a2', text: 'Pedir perdón después de empujar sin querer', bucket: 'fav' },
          { id: 'a3', text: 'Reenviar en el chat una foto para burlarse de alguien', bucket: 'dan', feedback: 'La burla en redes también daña, y puede llegar a muchas personas en segundos.' },
          { id: 'a4', text: 'Invitar a jugar a quien siempre se queda solo', bucket: 'fav' },
          { id: 'a5', text: 'Ver que molestan a alguien y reírse con los demás', bucket: 'dan' },
          { id: 'a6', text: 'Turnarse la pelota para que todos jueguen', bucket: 'fav' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.1.2'], ambito: 'convivir', title: 'Ejemplo resuelto: analizar una situación',
          prompt: 'Cuando algo pasa en el grupo, puedes analizarlo con **tres preguntas**. Mira cómo se hace.' },
        { icon: 'Search', problem: 'Llega al grado **Yolanda**, que viene de otra comunidad y habla un idioma distinto al de la mayoría. Algunos compañeros se burlan de su acento cuando lee en voz alta.',
          steps: [
            { text: '**¿Qué está pasando?** Un grupo se burla de Yolanda por su acento.', why: 'Primero describimos los hechos, sin exagerar ni juzgar todavía.' },
            { text: '**¿Cómo se siente cada persona?** Yolanda probablemente siente vergüenza y soledad; quizá ya no quiera leer en voz alta.', why: 'Ponerse en el lugar del otro (empatía) nos ayuda a entender el daño.' },
            { text: '**¿Qué actitud ayudaría?** Tolerancia: respetar su forma de hablar. Solidaridad: acompañarla y pedir a los demás que dejen de burlarse.' },
          ],
          answer: 'La burla daña la convivencia. Una respuesta tolerante y solidaria sería **acompañar a Yolanda, valorar su idioma y pedir con respeto que paren las burlas**.',
          tip: 'Hablar dos idiomas es una riqueza, no un defecto.' },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.1.2'], ambito: 'convivir', prompt: 'Ahora tú. ¿Qué harías?' },
        { scene: { icon: 'Users', text: 'En la refacción, **Marvin** no trajo nada porque en su casa este mes alcanza poco. Dos compañeros empiezan a decir en voz alta: "Marvin siempre anda pidiendo". Él baja la cabeza.' },
          options: [
            { id: 'a', icon: 'EyeOff', text: 'Seguir comiendo como si nada', consequence: 'Marvin se siente solo y avergonzado. Los comentarios siguen al día siguiente.', values: ['Indiferencia'], constructive: false },
            { id: 'b', icon: 'HeartHandshake', text: 'Compartir tu refacción con Marvin sin hacer escándalo', consequence: 'Marvin come algo y se siente acompañado. Otros compañeros también comparten.', values: ['Solidaridad', 'Discreción'], constructive: true },
            { id: 'c', icon: 'Megaphone', text: 'Decir con calma: "No está bien burlarse de nadie por lo que tiene o no tiene"', consequence: 'Los compañeros se quedan pensando y dejan de molestar. La maestra propone una refacción compartida los viernes.', values: ['Respeto', 'Valentía'], constructive: true },
          ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.1.2'], prompt: 'Une cada situación con la actitud que **mejor** ayuda a convivir.',
          explain: 'En cada caso, la mejor actitud es la que respeta la diferencia o apoya a quien lo necesita.' },
        { leftTitle: 'Situación', rightTitle: 'Actitud que ayuda', pairs: [
          { id: 'm1', left: 'Un compañero en silla de ruedas no puede llegar a la cancha', leftIcon: 'PersonStanding', right: 'Buscar juntos una rampa o un juego donde participe' },
          { id: 'm2', left: 'Tu amiga es evangélica y en tu familia son católicos; ella no celebra una fiesta que tú sí', leftIcon: 'BookOpen', right: 'Respetar su creencia sin burlarte' },
          { id: 'm3', left: 'Empujaste sin querer a alguien y se le cayó el cuaderno al charco', leftIcon: 'Droplets', right: 'Pedir perdón y ayudar a secarlo' },
          { id: 'm4', left: 'En el trabajo en grupo, una niña callada no ha dado su opinión', leftIcon: 'MessageCircle', right: 'Preguntarle qué piensa y escucharla' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.1.2'], prompt: 'En el partido, un niño garífuna mete gol y alguien grita un apodo por su color de piel. ¿Qué respuesta muestra **tolerancia y solidaridad**?' },
        { options: [
          { id: 'a', text: 'Reírse, porque "es solo una broma"' },
          { id: 'b', text: 'Decir que ese apodo ofende, felicitar al compañero por su gol y avisar al docente si se repite' },
          { id: 'c', text: 'No decir nada para no meterse en problemas' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.1.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La solidaridad es apoyar a quien lo necesita sin esperar nada a cambio.', answer: true },
          { text: 'Ser tolerante significa aguantar que alguien te golpee.', answer: false, why: 'La tolerancia es respetar diferencias, no aceptar abusos. Ante un abuso se pide ayuda.' },
          { text: 'La indiferencia ante una burla daña la convivencia.', answer: true },
          { text: 'Las actitudes no se pueden cambiar: se nace con ellas.', answer: false, why: 'Las actitudes se aprenden, por eso también se pueden cambiar.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Derechos humanos en espacios concretos ───────────────────────── */
  lesson({
    id: 's01-fc-2',
    title: 'Los derechos humanos en los lugares donde vivimos',
    icon: 'Scale',
    minutes: 15,
    gancho: 'Agua, comida, escuela, un nombre… ¿Son solo cosas que necesitas o son también tus derechos?',
    objetivos: [
      'Explicar qué son los derechos humanos y sus características',
      'Relacionar las condiciones de un lugar (agua, escuela, salud) con los derechos que se cumplen o no',
      'Proponer qué se puede hacer cuando un derecho no se cumple',
    ],
    resumen: [
      'Los derechos humanos son lo que toda persona necesita y merece para vivir con dignidad, solo por ser persona.',
      'Son universales (de todas las personas), inalienables (nadie te los puede quitar) e interdependientes (si falla uno, se afectan otros).',
      'La Declaración Universal de los Derechos Humanos fue aprobada por las Naciones Unidas el 10 de diciembre de 1948. En Guatemala, la Constitución Política de la República también los protege.',
      'Las condiciones de un lugar concreto (agua potable, escuela, centro de salud, trabajo, seguridad) muestran si los derechos se cumplen. El Estado es el principal responsable de garantizarlos; familias y comunidades también participan.',
    ],
    media: {
      id: 's01-fc-2-derechos-lugar', kind: 'animation', title: 'Un derecho, un lugar', aspect: '16:9', duration: 50,
      alt: 'Un mapa ilustrado de una aldea donde se encienden íconos: un chorro de agua, una escuela, un centro de salud y una casa, cada uno con el derecho que representa.',
      brief: 'Animación 2D de 50 s. Vista aérea ilustrada de una aldea guatemalteca con milpas, casas de block y lámina, un río y una carretera de terracería. Aparecen, uno a uno, íconos sobre lugares concretos: chorro de agua → "Derecho al agua y a la salud", escuela → "Derecho a la educación", centro de salud → "Derecho a la salud", mercado y parcela → "Derecho a la alimentación y al trabajo". Luego un lugar sin chorro se marca con un signo de pregunta: "¿Se cumple este derecho aquí?". Narración: "Los derechos humanos se viven en lugares concretos". Subtítulos. Colores planos, sin textos largos.',
    },
    steps: [
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.1'], ambito: 'conocer', title: '¿Qué son los derechos humanos?',
          prompt: 'Los **derechos humanos** son lo que toda persona necesita y merece para vivir con **dignidad**, solo por ser persona. Toca cada tarjeta.' },
        { icon: 'Scale', body: 'No son favores ni premios: **te pertenecen desde que naces**, igual que a cualquier otra persona del mundo.', reveal: [
          { icon: 'Globe', front: 'Universales', back: 'Son de **todas** las personas, sin importar su pueblo, idioma, sexo, religión, edad o si tienen dinero o no.' },
          { icon: 'Lock', front: 'Inalienables', back: '**Nadie te los puede quitar**, ni tú los puedes vender o regalar.' },
          { icon: 'Link', front: 'Interdependientes', back: 'Están conectados: si falla uno, se afectan otros. Sin alimentación, por ejemplo, cuesta aprender.' },
          { icon: 'ScrollText', front: 'Declaración Universal', back: 'Las **Naciones Unidas** la aprobaron el **10 de diciembre de 1948**. Por eso ese día es el Día de los Derechos Humanos.' },
          { icon: 'Landmark', front: 'En Guatemala', back: 'La **Constitución Política de la República** (1985) reconoce derechos como la vida, la libertad, la igualdad, la educación y la salud.' },
        ] },
      ),
      S.choice(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:1.2.1'], ambito: 'conocer',
          prompt: 'Supongamos que en una aldea las niñas y los niños caminan **dos horas** cada mañana para traer agua del río. ¿A qué más crees que afecta esa situación, además de la sed?',
          explain: '¡Muy bien pensado! La falta de agua afecta la salud, el tiempo para estudiar y hasta el juego. Hoy verás que detrás de cada condición de un lugar hay **derechos humanos**.' },
        { options: [
          { id: 'a', text: 'A la salud, al tiempo para estudiar y al descanso', icon: 'Droplets' },
          { id: 'b', text: 'A nada más: solo es un poco de cansancio', icon: 'X', feedback: 'Piensa: si pasas dos horas acarreando agua, ¿a qué hora estudias o juegas? ¿Y si el agua del río no es limpia?' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.1'], prompt: 'Comprueba lo que aprendiste. ¿Verdadero o falso?',
          hint: 'Recuerda las tres características: universales, inalienables e interdependientes.' },
        { statements: [
          { text: 'Los derechos humanos son solo para las personas adultas.', answer: false, why: 'Son universales: también son de las niñas y los niños.' },
          { text: 'Una persona no pierde sus derechos por ser pobre o por hablar otro idioma.', answer: true },
          { text: 'Si alguien no tiene agua limpia, también puede verse afectada su salud.', answer: true, why: 'Los derechos son interdependientes: uno afecta a otro.' },
          { text: 'Los derechos humanos se pueden vender.', answer: false, why: 'Son inalienables: no se venden, no se regalan, no se quitan.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.1'], ambito: 'conocer', prompt: 'Lee con atención. Este texto explica cómo se relacionan los derechos con los **lugares concretos** donde vive la gente.' },
        { genre: 'Texto informativo', heading: 'Los derechos se viven en un lugar',
          passage: 'Los derechos humanos no se quedan en un papel: se viven, o no se viven, en lugares concretos. En la casa, en la escuela, en la calle, en el centro de salud y en el mercado podemos ver si se cumplen.\n\nPor ejemplo, el derecho a la **salud** se cumple mejor cuando hay agua potable, un **ambiente sano** (sin basura ni aguas contaminadas), un centro de salud cercano y alimentos suficientes. El derecho a la **educación** se cumple cuando hay una escuela a una distancia razonable, con maestros, materiales y un ambiente seguro. A esas cosas las llamamos **condiciones sociales**.\n\nCuando en un lugar faltan esas condiciones, las personas no pueden disfrutar plenamente de sus derechos, aunque estén escritos en la ley. El **Estado** es el principal responsable de garantizarlos: debe construir escuelas, llevar servicios de salud y proteger a la población. Las familias y las comunidades también ayudan: organizándose, cuidando lo que tienen y exigiendo con respeto lo que les corresponde.',
          questions: [
            { q: 'Según el texto, ¿qué son las "condiciones sociales"?', options: [
              { id: 'a', text: 'Las cosas que hay en un lugar para que los derechos se cumplan, como agua, escuela o centro de salud' },
              { id: 'b', text: 'Las reglas de un juego' },
              { id: 'c', text: 'El clima de una región' },
            ], correct: 'a' },
            { q: '¿Quién es el principal responsable de garantizar los derechos?', options: [
              { id: 'a', text: 'Cada niño por su cuenta' },
              { id: 'b', text: 'El Estado' },
              { id: 'c', text: 'Nadie' },
            ], correct: 'b', why: 'El texto dice que el Estado es el principal responsable; familias y comunidades también participan.' },
            { q: 'Si un derecho está escrito en la ley pero en tu aldea no hay escuela, ¿qué puedes concluir?', options: [
              { id: 'a', text: 'Que el derecho a la educación no se cumple plenamente en ese lugar' },
              { id: 'b', text: 'Que ese derecho no existe' },
              { id: 'c', text: 'Que no importa, porque ya está escrito' },
            ], correct: 'a', why: 'El derecho existe para todos; lo que falta son las condiciones para vivirlo.' },
          ] },
      ),
      S.match(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.1'], prompt: 'Une cada **condición** de un lugar con el **derecho** que ayuda a cumplir.',
          hint: 'Pregúntate: si esa condición faltara, ¿qué necesidad de la persona quedaría sin atender?',
          explain: 'Cada condición social concreta hace posible un derecho: el agua a la salud, la escuela a la educación, la inscripción a la identidad…' },
        { leftTitle: 'Condición', rightTitle: 'Derecho', pairs: [
          { id: 'c1', left: 'Agua potable en casa', leftIcon: 'Droplets', right: 'Derecho a la salud' },
          { id: 'c2', left: 'Escuela con maestros y libros', leftIcon: 'School', right: 'Derecho a la educación' },
          { id: 'c3', left: 'Inscripción en el RENAP al nacer', leftIcon: 'FileText', right: 'Derecho a un nombre y una identidad' },
          { id: 'c4', left: 'Tortillas, frijol y verduras suficientes', leftIcon: 'Wheat', right: 'Derecho a la alimentación' },
          { id: 'c5', left: 'Calles alumbradas y seguras', leftIcon: 'Lightbulb', right: 'Derecho a la seguridad' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: de la condición al derecho',
          prompt: 'Así se analiza un **lugar concreto** para saber qué derechos se cumplen. Revela cada paso.' },
        { icon: 'MapPin', problem: 'Supongamos que en la Escuela de la aldea Los Pinos **no hay agua en los baños** desde hace tres meses. Las niñas y los niños no pueden lavarse las manos y varios se han enfermado del estómago.',
          steps: [
            { text: '**Describo la condición:** no hay agua en los baños de la escuela.' },
            { text: '**Busco el derecho relacionado:** derecho a la **salud** (se enferman) y, de paso, a la **educación** (faltan a clases por enfermedad).', why: 'Los derechos son interdependientes: uno arrastra a otro.' },
            { text: '**Identifico a los responsables:** el Estado, por medio del Ministerio de Educación y la municipalidad, debe resolver el servicio; la comunidad educativa puede organizarse para pedirlo.' },
            { text: '**Propongo una acción:** el gobierno escolar y la junta de padres escriben una carta respetuosa a la municipalidad, con fotos y fechas, pidiendo la reparación.' },
          ],
          answer: 'En ese lugar el derecho a la salud **no se cumple plenamente**. La comunidad puede **exigirlo con respeto y con datos**.',
          tip: 'Condición → derecho → responsable → acción. Esas cuatro preguntas sirven para analizar cualquier lugar.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.2.1'], prompt: 'En una colonia no pasa el camión de la basura y la gente la tira al río. Los niños que juegan en la orilla se enferman de la piel. ¿Qué **dos** derechos se ven afectados?',
          explain: 'La basura en el río afecta la **salud** de las personas y su derecho a un **ambiente sano**. Votar o tener un nombre no dependen de la basura del río.' },
        { multiple: true, options: [
          { id: 'a', text: 'Derecho a la salud', icon: 'HeartPulse' },
          { id: 'b', text: 'Derecho a un ambiente sano', icon: 'Leaf' },
          { id: 'c', text: 'Derecho a votar', icon: 'Vote', feedback: 'Votar es un derecho de las personas adultas y no tiene relación directa con esta situación.' },
          { id: 'd', text: 'Derecho a tener un nombre', icon: 'FileText', feedback: 'El nombre y la identidad no dependen de la basura del río.' },
        ], correct: ['a', 'b'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.2.1'], prompt: 'Observa cada lugar. ¿El derecho **se cumple** o **no se cumple** plenamente?',
          explain: 'Mira siempre la condición concreta: si falta lo necesario para vivir el derecho, no se cumple plenamente, aunque esté escrito en la ley.' },
        { buckets: [
          { id: 'si', label: 'Se cumple', icon: 'Check', color: 'var(--c-ok)' },
          { id: 'no', label: 'No se cumple plenamente', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'l1', text: 'Un centro de salud abierto, con medicinas, a 15 minutos a pie', bucket: 'si' },
          { id: 'l2', text: 'Una escuela con una sola maestra para seis grados y sin libros', bucket: 'no' },
          { id: 'l3', text: 'Un niño de 11 años que trabaja todo el día y no va a la escuela', bucket: 'no', feedback: 'Se afecta su derecho a la educación, al descanso y al juego.' },
          { id: 'l4', text: 'Una familia inscribe a su bebé en el RENAP y recibe su certificado', bucket: 'si' },
          { id: 'l5', text: 'Un barrio sin alumbrado donde da miedo caminar de noche', bucket: 'no' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.2.1'], ambito: 'hacer',
          prompt: 'Piensa en **un lugar de tu comunidad** (tu escuela, tu calle, el mercado, el centro de salud). Escribe: ¿qué condición observas?, ¿qué derecho se relaciona?, ¿se cumple o no? y ¿qué se podría hacer?' },
        { minWords: 35, placeholder: 'En … observo que… Esto se relaciona con el derecho a…',
          model: 'En mi escuela observo que el techo del aula de cuarto grado gotea cuando llueve y los niños tienen que moverse a una esquina. Esto se relaciona con el derecho a la educación en un ambiente seguro. No se cumple plenamente, porque se pierden clases. Podríamos contar las veces que pasa y pedir, con una carta del gobierno escolar, que la municipalidad repare el techo.',
          rubric: ['Describí una condición concreta de un lugar real', 'Nombré el derecho relacionado', 'Dije si se cumple o no y por qué', 'Propuse una acción respetuosa y posible'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.1'], prompt: 'Una comunidad tiene escuela, pero no tiene centro de salud en 30 kilómetros. ¿Qué derecho **no** se cumple plenamente allí?' },
        { options: [
          { id: 'a', text: 'El derecho a la educación' },
          { id: 'b', text: 'El derecho a la salud' },
          { id: 'c', text: 'El derecho a tener un nombre' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La Declaración Universal de los Derechos Humanos se aprobó en 1948.', answer: true },
          { text: 'Si un derecho está escrito en la ley, siempre se cumple en todos los lugares.', answer: false, why: 'Depende de que existan las condiciones: escuela, agua, salud, seguridad…' },
          { text: 'El Estado es el principal responsable de garantizar los derechos humanos.', answer: true },
        ] },
      ),
      cierre({ areas: ['fc'], cnb: ['fc:1.1.2', 'fc:1.2.1'] },
        ['Explico qué son la solidaridad y la tolerancia', 'Explico qué son los derechos humanos', 'Relaciono las condiciones de un lugar con los derechos que se cumplen o no'],
        ['Incluiré a alguien que esté solo en el recreo', 'Observaré un lugar de mi comunidad y pensaré qué derecho se cumple allí', 'Preguntaré en casa si conocen la Declaración de los Derechos Humanos']),
    ],
  }),
];
