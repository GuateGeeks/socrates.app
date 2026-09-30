/**
 * L3 (inglés) · Unidad 1 · Semana 4
 * Cómo se escribe y cómo suena: combinaciones de letras, letras mudas y la "e mágica";
 * palabras que suenan igual y significan distinto (homófonos).
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's04-l3-1',
    title: 'English spelling: letters that surprise',
    icon: 'Volume2',
    minutes: 14,
    gancho: 'En español, "casa" se lee tal como se escribe. En inglés, "knife" (cuchillo) se dice "náif". ¿Dónde quedó la k?',
    objetivos: [
      'Reconocer combinaciones de letras del inglés y cómo suenan: ee, ea, oo, sh, th',
      'Identificar letras mudas y la "e mágica" al final de las palabras',
      'Relacionar la forma escrita, el sonido y el significado de palabras frecuentes',
    ],
    resumen: [
      'En inglés muchas palabras no se pronuncian como se escriben: hay que aprender juntas su forma escrita, su sonido y su significado.',
      'ee y ea suenan como una i larga (tree, eat). oo suena como u (food, school). sh suena como "sh" (fish). th se dice con la lengua entre los dientes (three).',
      'Letras mudas: la k de knife y know, la w de write, la gh de night y light.',
      'E mágica: la e final no suena y hace que la vocal anterior "diga su nombre": cake ("keik"), bike ("baik"), home ("jóum").',
    ],
    media: {
      id: 's04-l3-1-sounds', kind: 'audio', title: 'Spelling and sounds', duration: 50,
      alt: 'Una voz en inglés lee grupos de palabras con el mismo patrón de letras.',
      brief: 'Audio de 50 s. Voz adulta, inglés claro y pausado, sin música. Grupos con 1 s entre palabras y 2 s entre grupos, anunciando el patrón en español antes de cada grupo (voz en español de Guatemala): "ee y ea": "tree, green, eat, tea". "oo": "food, school, moon". "sh": "fish, shop, sheep". "th": "three, thank you, mother". "letras mudas": "knife, know, write, night, light". "e mágica": "cake, bike, home, cute". Al final, par contrastado dos veces: "ship – sheep".',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'conocer',
          prompt: 'La palabra **knife** significa "cuchillo". ¿Cómo crees que se pronuncia?',
          explain: 'Se dice **"náif"**: la **k no suena** y la **e final tampoco**. En inglés la escritura y el sonido no siempre coinciden. Hoy aprenderás los patrones más comunes.' },
        { options: [
          { id: 'a', text: '"ka-ni-fe", letra por letra', icon: 'Type', feedback: 'Así se leería en español. En inglés la k y la e final de esta palabra no suenan.' },
          { id: 'b', text: '"náif"', icon: 'Volume2' },
          { id: 'c', text: '"nifi"', icon: 'Volume', feedback: 'Casi… pero la i de knife suena "ai", como su nombre en inglés.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'conocer', title: 'Letter teams',
          prompt: 'Algunas letras se juntan en equipo y hacen **un solo sonido**. Escucha el audio de la lección, repite y toca cada tarjeta.' },
        { icon: 'Users', body: 'Cuando veas estos equipos de letras, **no las leas por separado**.', reveal: [
          { icon: 'TreePine', front: 'ee / ea', back: 'Suenan como una **i larga**: tr**ee** ("tri"), gr**ee**n, **ea**t ("it"), t**ea** ("ti").' },
          { icon: 'Moon', front: 'oo', back: 'Suena como **u**: f**oo**d ("fud"), sch**oo**l ("skul"), m**oo**n ("mun").' },
          { icon: 'Fish', front: 'sh', back: 'Suena como cuando pides silencio, **"shhh"**: fi**sh**, **sh**op, **sh**eep.' },
          { icon: 'Smile', front: 'th', back: 'Pon la **lengua entre los dientes** y sopla: **th**ree, **th**ank you, mo**th**er.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'conocer', title: 'Silent letters and magic e',
          prompt: 'Algunas letras se escriben **pero no suenan**. Son letras mudas, como la h del español. Toca cada tarjeta.' },
        { icon: 'VolumeX', body: 'Lee siempre con el oído: aprende cómo **suena** cada palabra nueva, no solo cómo se escribe.', reveal: [
          { icon: 'VolumeX', front: 'k muda', back: 'Antes de n: **k**nife ("náif"), **k**now ("nóu"). ' },
          { icon: 'VolumeX', front: 'w muda', back: 'Antes de r: **w**rite ("ráit").' },
          { icon: 'VolumeX', front: 'gh muda', back: 'En -igh: ni**gh**t ("náit"), li**gh**t ("láit").' },
          { icon: 'Sparkles', front: 'La e mágica', back: 'La e final no suena y hace que la vocal anterior diga **su nombre en inglés**: cak**e** ("keik"), bik**e** ("baik"), hom**e** ("jóum"). Compara: **cap** ("kap", gorra) / **cape** ("keip", capa).' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'hacer', title: 'Worked example',
          prompt: 'Mira cómo Rocío descubre cómo leer dos palabras nuevas.' },
        { icon: 'Search', problem: '¿Cómo se leen **sheep** (oveja) y **white** (blanco)?',
          steps: [
            { text: '**sheep**: veo el equipo **sh** → "sh". Veo **ee** → i larga. La p suena normal.', why: 'Los equipos de letras hacen un solo sonido.' },
            { text: 'Junto todo: **"shiip"**, con la i alargada.' },
            { text: '**white**: la **h** casi no se oye después de w; termina en **e mágica** → la i dice su nombre, "ai".', why: 'La e final no suena, pero cambia la vocal anterior.' },
            { text: 'Junto todo: **"uáit"**.' },
          ],
          answer: 'sheep = **"shiip"** · white = **"uáit"**',
          tip: 'Busca primero equipos de letras, letras mudas y e mágica. Luego lee.' },
      ),
      S.match(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: une cada palabra escrita con **cómo suena** y lo que significa.',
          hint: 'Busca los equipos (oo, ee, th) y las letras mudas (k, gh).',
          explain: 'Moon suena "mun" (oo = u). Green, "griin" (ee = i). Know, "nóu" (k muda). Night, "náit" (gh muda). Three, "thri" con la lengua entre los dientes.' },
        { leftTitle: 'Se escribe', rightTitle: 'Suena · significa', pairs: [
          { id: 'm1', left: 'moon', right: '"mun" · luna' },
          { id: 'm2', left: 'green', right: '"griin" · verde' },
          { id: 'm3', left: 'know', right: '"nóu" · saber, conocer' },
          { id: 'm4', left: 'night', right: '"náit" · noche' },
          { id: 'm5', left: 'three', right: '"thri", con la lengua entre los dientes · tres' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'hacer',
          prompt: 'Escucha el audio: ¿qué palabra dice? _Pista: la i larga se escribe **ee**._',
          explain: 'Dijo **sheep** ("shiip", oveja), con i larga. **Ship** ("ship", barco) tiene una i corta. ¡Un sonido cambia el significado!',
          media: { id: 's04-l3-1-sheep', kind: 'audio', title: 'Ship or sheep?', duration: 10,
            alt: 'Una voz en inglés dice: "Look at the sheep."',
            brief: 'Audio de 10 s. Voz adulta, inglés claro, sin música. Texto exacto: "Look at the sheep." (alargar claramente la i larga de sheep). Repetir dos veces con 2 s de pausa.' } },
        { options: [
          { id: 'a', text: 'sheep (oveja)', icon: 'Cloud' },
          { id: 'b', text: 'ship (barco)', icon: 'Ship', feedback: 'Ship tiene una i corta. Lo que se oye es una i larga, "shiip": se escribe con ee.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'hacer',
          prompt: '¿La palabra tiene una **letra muda** (que se escribe pero no suena)?',
          explain: 'Con letra muda: knife (k), write (w), light (gh), bike (e mágica). Sin letra muda: fish, drum, map.' },
        { buckets: [
          { id: 'm', label: 'Tiene letra muda', icon: 'VolumeX' },
          { id: 'n', label: 'Todas suenan', icon: 'Volume2' },
        ], items: [
          { id: 'x1', text: 'knife', bucket: 'm' },
          { id: 'x2', text: 'fish', bucket: 'n', feedback: 'sh es un equipo que suena "sh": no es muda.' },
          { id: 'x3', text: 'write', bucket: 'm' },
          { id: 'x4', text: 'drum', bucket: 'n' },
          { id: 'x5', text: 'light', bucket: 'm' },
          { id: 'x6', text: 'map', bucket: 'n' },
          { id: 'x7', text: 'bike', bucket: 'm', feedback: 'La e final no suena: es una e mágica.' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'hacer',
          prompt: 'Escucha tu voz interior: elige la palabra **bien escrita** para cada oración.',
          explain: 'Aunque suenen "náif", "skul" y "náit", se escriben knife, school y night.' },
        { text: 'The [[knife]] is on the table. I walk to [[school]] every day. The moon shines at [[night]].', distractors: ['nife', 'skul', 'nait'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.1'], prompt: 'Boleto de salida: ¿en qué palabra **no suena** la primera letra?' },
        { options: [
          { id: 'a', text: 'know' },
          { id: 'b', text: 'moon' },
          { id: 'c', text: 'green' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En "food", la oo suena como u.', answer: true },
          { text: 'En "cake", la e final se pronuncia fuerte.', answer: false, why: 'Es una e mágica: no suena, pero hace que la a diga "ei".' },
          { text: '"Sheep" y "ship" significan lo mismo.', answer: false, why: 'Sheep es oveja y ship es barco: la i larga o corta cambia el significado.' },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's04-l3-2',
    title: 'Same sound, different word',
    icon: 'Ear',
    minutes: 14,
    gancho: '"I see the sea." ¿Cuántas veces dice "si"? ¿Y significan lo mismo?',
    objetivos: [
      'Reconocer homófonos: palabras que suenan igual y se escriben distinto',
      'Relacionar cada forma escrita con su significado',
      'Usar el contexto para elegir la palabra correcta al escribir',
    ],
    resumen: [
      'Los homófonos suenan igual pero se escriben distinto y significan cosas distintas: see (ver) / sea (mar).',
      'Otros comunes: two (dos) / to (a, hacia) / too (también), I (yo) / eye (ojo), sun (sol) / son (hijo), eight (ocho) / ate (comí), flower (flor) / flour (harina), hear (oír) / here (aquí).',
      'Al escuchar, el contexto te dice qué significa. Al escribir, elige la forma que corresponde al significado.',
    ],
    media: {
      id: 's04-l3-2-homophones', kind: 'animation', title: 'Twin sounds', aspect: '16:9', duration: 45,
      alt: 'Parejas de palabras que suenan igual aparecen como "gemelos" con dibujos distintos: see con un ojo mirando y sea con olas.',
      brief: 'Animación 2D de 45 s. Pares de "gemelos" (dos burbujas del mismo color que suenan igual). Para cada par se escucha la palabra una vez y aparecen las dos formas escritas con su dibujo: "see" (un ojo) / "sea" (olas del mar Caribe); "sun" (sol) / "son" (un papá con su hijo); "flower" (una flor) / "flour" (un costal de harina); "eight" (el número 8) / "ate" (un niño que terminó su plato); "I" (una niña señalándose) / "eye" (un ojo). Cierra con la oración "I see the sea" y los dibujos correspondientes. Voz en inglés clara, subtítulos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'conocer',
          prompt: 'Lee: _"I **see** the **sea**."_ Las dos palabras en negrita suenan "sii". ¿Qué significa la oración?',
          explain: '**See** = ver y **sea** = mar: "Yo veo el mar". Suenan igual, pero se escriben distinto y significan distinto. Se llaman **homófonos**.' },
        { options: [
          { id: 'a', text: 'Yo veo el mar.', icon: 'Waves' },
          { id: 'b', text: 'Yo veo, veo.', icon: 'Eye', feedback: 'Fíjate: "see" y "sea" se escriben distinto. La segunda significa mar.' },
          { id: 'c', text: 'Sí, sí, el mar.', icon: 'Check', feedback: '"Sí" en inglés es "yes". "See" significa ver.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'conocer', title: 'Homophones',
          prompt: 'Los **homófonos** son palabras que **suenan igual** pero se **escriben distinto** y tienen **otro significado**. En español también hay: "hola" y "ola". Mira la animación y toca cada tarjeta.' },
        { icon: 'Copy', body: 'Para saber cuál es, mira el **significado** que necesita la oración.', reveal: [
          { icon: 'Hash', front: 'two / to / too', back: '**two** = dos (_two dogs_) · **to** = a, hacia (_I go to school_) · **too** = también (_I like mangoes too_).' },
          { icon: 'Eye', front: 'I / eye', back: '**I** = yo (_I am 11_) · **eye** = ojo (_my left eye_).' },
          { icon: 'Sun', front: 'sun / son', back: '**sun** = sol (_the sun is hot_) · **son** = hijo (_Mrs. López has a son_).' },
          { icon: 'Utensils', front: 'eight / ate', back: '**eight** = ocho (_eight apples_) · **ate** = comí (pasado de eat: _I ate a tamal_).' },
          { icon: 'Flower', front: 'flower / flour', back: '**flower** = flor · **flour** = harina (para hacer pan).' },
          { icon: 'Ear', front: 'hear / here', back: '**hear** = oír (_I hear music_) · **here** = aquí (_come here_). Truco: hear lleva **ear** (oreja).' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'hacer', title: 'Worked example',
          prompt: 'Mira cómo Juan elige entre **two**, **to** y **too**.' },
        { icon: 'Search', problem: 'Completa: "I have ___ brothers. We walk ___ school. My sister walks with us ___."',
          steps: [
            { text: 'Primer espacio: dice cuántos hermanos → número → **two**.' },
            { text: 'Segundo espacio: caminamos **hacia** la escuela → **to**.', why: '"To" indica hacia dónde vamos.' },
            { text: 'Tercer espacio: mi hermana camina con nosotros **también** → **too**.', why: '"Too" suele ir al final de la oración.' },
          ],
          answer: 'I have **two** brothers. We walk **to** school. My sister walks with us **too**.',
          tip: 'Pregúntate qué significado necesitas: ¿número, dirección o "también"?' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: completa _"Doña Rosa has a ___. He is ten years old."_',
          hint: '"He is ten years old" habla de una persona. ¿Sol o hijo?',
          explain: '**Son** = hijo. Doña Rosa tiene un hijo de diez años. **Sun** es el sol.' },
        { options: [
          { id: 'a', text: 'son' },
          { id: 'b', text: 'sun', feedback: 'Sun es el sol. La oración habla de alguien de diez años.' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'hacer',
          prompt: 'Une cada palabra con su significado.',
          hint: 'Recuerda las tarjetas: flour lleva "ou" como en "harina para pan".',
          explain: 'Flower = flor, flour = harina, eye = ojo, here = aquí, eight = ocho.' },
        { leftTitle: 'English', rightTitle: 'Español', pairs: [
          { id: 'h1', left: 'flower', right: 'flor' },
          { id: 'h2', left: 'flour', right: 'harina' },
          { id: 'h3', left: 'eye', right: 'ojo' },
          { id: 'h4', left: 'here', right: 'aquí' },
          { id: 'h5', left: 'eight', right: 'ocho' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'hacer',
          prompt: '¿Qué palabra falta en cada oración: **see** (ver) o **sea** (mar)?',
          explain: 'See: I can see the volcano / See you tomorrow! / I see a bird. Sea: fish live in the sea / the Caribbean Sea / we swim in the sea.' },
        { buckets: [
          { id: 'see', label: 'see (ver)', icon: 'Eye' },
          { id: 'sea', label: 'sea (mar)', icon: 'Waves' },
        ], items: [
          { id: 'x1', text: 'I can ___ the volcano.', bucket: 'see' },
          { id: 'x2', text: 'Fish live in the ___.', bucket: 'sea' },
          { id: 'x3', text: '___ you tomorrow!', bucket: 'see', feedback: '"See you tomorrow" = nos vemos mañana. Es el verbo ver.' },
          { id: 'x4', text: 'The Caribbean ___ is blue.', bucket: 'sea' },
          { id: 'x5', text: 'I ___ a bird in the tree.', bucket: 'see' },
          { id: 'x6', text: 'We swim in the ___.', bucket: 'sea' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'hacer',
          prompt: 'Completa la receta de la abuela con el homófono correcto.',
          explain: 'Flour (harina) para el pan, eight (ocho) panes, hear (oír) con los oídos, here (aquí), I (yo) y ate (comí).' },
        { text: 'Grandma uses [[flour]] to make bread. She makes [[eight]] rolls. "Can you [[hear]] me? Come [[here]]!" [[I]] [[ate]] two rolls. Delicious!', distractors: ['flower', 'eye', 'son'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:2.2.1'], ambito: 'hacer',
          prompt: 'Elige una pareja de homófonos (see/sea, sun/son, flower/flour, eight/ate…). Escribe **dos oraciones cortas en inglés**, una con cada palabra.' },
        { minWords: 8, placeholder: 'The sun is… My uncle has a son…',
          model: 'The sun is very hot today. My uncle has a son named Pedro.',
          rubric: ['Escribí dos oraciones en inglés', 'Usé las dos palabras de una pareja de homófonos', 'Cada palabra tiene el significado correcto en su oración'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.1'], prompt: 'Boleto de salida: ¿qué oración está bien escrita?' },
        { options: [
          { id: 'a', text: 'I have too cats.' },
          { id: 'b', text: 'I have two cats.' },
          { id: 'c', text: 'I have to cats.' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: '"Flour" significa harina.', answer: true },
          { text: '"Eye" significa yo.', answer: false, why: '"Eye" es ojo. "Yo" se escribe "I".' },
          { text: '"Hear" y "here" suenan igual.', answer: true },
        ] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l3'], cnb: [], ambito: 'ser', prompt: 'How was your week? ¿Cómo te fue?' },
        { statements: ['Leo equipos de letras como ee, oo, sh y th', 'Reconozco letras mudas y la e mágica', 'Distingo homófonos por su significado y escritura'],
          commitments: ['Cuando aprenda una palabra nueva, aprenderé también cómo suena', 'Haré tarjetas con tres parejas de homófonos', 'Practicaré el sonido th frente a un espejo'] },
      ),
    ],
  }),
];
