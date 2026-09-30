/**
 * L2 (español como segundo idioma) · Unidad 1 · Semana 7
 * La música de las palabras: separar sílabas al oído, encontrar la sílaba tónica y usarla
 * para descubrir el ritmo y la rima de un poema.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's07-l2-1',
    title: 'Sílabas y sílaba tónica',
    icon: 'Mic',
    minutes: 14,
    gancho: 'No es lo mismo decir "mi papa" que "mi papá". ¡Una sola sílaba más fuerte cambia la papa por tu papá!',
    objetivos: [
      'Separar palabras en sílabas escuchando cada golpe de voz',
      'Encontrar la sílaba tónica: la que suena con más fuerza',
      'Clasificar palabras en agudas, llanas y esdrújulas',
    ],
    resumen: [
      'Una sílaba es cada golpe de voz de una palabra: ma-rim-ba tiene 3. Toda sílaba tiene al menos una vocal.',
      'Ch, ll, rr y qu no se separan (cho-co-la-te, to-rre). Dos vocales que se dicen en un solo golpe (diptongo) van en la misma sílaba: es-cue-la, a-gua.',
      'La sílaba tónica es la que se pronuncia con más fuerza. Cambiarla puede cambiar la palabra: papa / papá.',
      'Aguda: tónica en la última sílaba (can-CIÓN). Llana: en la penúltima (ME-sa). Esdrújula: en la antepenúltima (PÁ-ja-ro).',
    ],
    media: {
      id: 's07-l2-1-palmadas', kind: 'audio', title: 'Palabras con palmadas', duration: 45,
      alt: 'Una voz dice palabras despacio y da una palmada en cada sílaba; en la sílaba tónica la palmada suena más fuerte.',
      brief: 'Audio de 45 s. Voz adulta femenina, clara y pausada, español de Guatemala. Para cada palabra: se dice completa, luego separada en sílabas con una palmada por sílaba, y la palmada de la sílaba tónica suena más fuerte (tambor o palmada doble). Palabras en este orden: "ma-rim-ba", "can-ción", "pá-ja-ro", "cho-co-la-te", "es-cue-la", "pa-pa" y "pa-pá" (marcar bien la diferencia). Pausa de 2 s entre palabras. Sin música de fondo.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:4.1.6'], ambito: 'conocer',
          prompt: 'Di en voz alta **"marimba"** y da una palmada cada vez que abres la boca para un golpe de voz. ¿Cuántas palmadas diste?',
          explain: '**Ma-rim-ba**: tres golpes de voz, tres palmadas. Cada golpe se llama **sílaba**. Hoy aprenderás a separarlas y a encontrar la más fuerte.' },
        { options: [
          { id: 'a', text: '2 palmadas', feedback: 'Dilo más despacio: ma… rim… ba. ¿Cuántos golpes escuchas?' },
          { id: 'b', text: '3 palmadas' },
          { id: 'c', text: '7 palmadas', feedback: 'Marimba tiene 7 letras, pero no damos una palmada por letra, sino por golpe de voz.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.6'], ambito: 'conocer', title: '¿Qué es una sílaba?',
          prompt: 'Una **sílaba** es cada golpe de voz con que pronunciamos una palabra. Escucha el audio de la lección y toca cada tarjeta.' },
        { icon: 'Hand', body: 'Para separar sílabas, **di la palabra despacio y da una palmada en cada golpe**. Luego revisa estas reglas.', reveal: [
          { icon: 'CircleDot', front: 'Siempre hay vocal', back: 'Toda sílaba tiene **al menos una vocal**: **sol** (1 sílaba), **ca-sa** (2), **ma-ri-po-sa** (4).' },
          { icon: 'Link', front: 'Letras que no se separan', back: '**ch, ll, rr** y **qu** son un solo sonido y van juntas: **cho-co-la-te**, **tor-ti-lla**, **pe-rro**, **que-so**.' },
          { icon: 'Layers', front: 'Diptongo', back: 'Cuando la **i** o la **u** van junto a otra vocal y se dicen en **un solo golpe**, quedan en la misma sílaba: **es-cue-la**, **a-gua**, **tie-rra**, **Gua-te-ma-la**.' },
          { icon: 'Info', front: 'Nombres', back: 'Por su número de sílabas, una palabra puede ser **monosílaba** (1: pan), **bisílaba** (2: me-sa), **trisílaba** (3: ca-mi-no) o **polisílaba** (4 o más: com-pu-ta-do-ra).' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.6'], ambito: 'hacer', title: 'Ejemplo resuelto: separar en sílabas',
          prompt: 'Mira cómo Juana separa dos palabras difíciles.' },
        { icon: 'Scissors', problem: '¿Cuántas sílabas tienen **chocolate** y **escuela**?',
          steps: [
            { text: '"Chocolate", despacio y con palmadas: **cho – co – la – te**. Son **4** golpes.', why: 'La ch es un solo sonido: no se separa en c y h.' },
            { text: '"Escuela": **es – cue – la**. Son **3** golpes.' },
            { text: 'Revisa "cue": la **u** y la **e** se dicen en un solo golpe (diptongo), por eso quedan juntas.', why: 'Si las separaras (es-cu-e-la) la palabra sonaría rara, con un golpe de más.' },
          ],
          answer: '**Cho-co-la-te** tiene 4 sílabas y **es-cue-la** tiene 3.',
          tip: 'Cuenta golpes de voz, no letras.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.6'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: di cada palabra con palmadas y colócala según su número de sílabas.',
          hint: 'Recuerda: ll y rr no se separan, y "ua", "ue", "ie" se dicen en un solo golpe.',
          explain: 'pan (1) · me-sa, tie-rra (2) · tor-ti-lla, ca-mi-no (3) · ma-ri-po-sa, a-gua-ca-te (4).' },
        { buckets: [
          { id: 'b1', label: '1 sílaba', icon: 'Circle' },
          { id: 'b2', label: '2 sílabas', icon: 'Copy' },
          { id: 'b3', label: '3 sílabas', icon: 'Layers' },
          { id: 'b4', label: '4 sílabas', icon: 'Blocks' },
        ], items: [
          { id: 'w1', text: 'pan', bucket: 'b1' },
          { id: 'w2', text: 'mesa', bucket: 'b2' },
          { id: 'w3', text: 'tierra', bucket: 'b2', feedback: 'Tie-rra: "ie" es diptongo y la rr no se separa. Son 2.' },
          { id: 'w4', text: 'tortilla', bucket: 'b3' },
          { id: 'w5', text: 'camino', bucket: 'b3' },
          { id: 'w6', text: 'mariposa', bucket: 'b4' },
          { id: 'w7', text: 'aguacate', bucket: 'b4', feedback: 'A-gua-ca-te: "gua" va en un solo golpe. Son 4.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.8'], ambito: 'conocer', title: 'La sílaba tónica',
          prompt: 'En cada palabra hay **una sílaba que suena más fuerte** que las demás: es la **sílaba tónica**. Truco: di la palabra como si llamaras a alguien que está lejos. La sílaba que se alarga y se oye más es la tónica.' },
        { icon: 'Volume2', body: 'Cambiar la sílaba tónica puede cambiar la palabra: **PA-pa** (el tubérculo) / **pa-PÁ** (tu padre). Según **dónde** está la tónica, las palabras tienen nombre.', reveal: [
          { icon: 'ArrowRight', front: 'Aguda', back: 'Tónica en la **última** sílaba: can-**CIÓN**, vol-**CÁN**, pa-**PEL**, re-**LOJ**.' },
          { icon: 'ArrowLeftRight', front: 'Llana (o grave)', back: 'Tónica en la **penúltima**: **ME**-sa, ma-**RIM**-ba, **ÁR**-bol, tor-**TI**-lla.' },
          { icon: 'ArrowLeft', front: 'Esdrújula', back: 'Tónica en la **antepenúltima**: **PÁ**-ja-ro, **MÚ**-si-ca, te-**LÉ**-fo-no. Las esdrújulas **siempre llevan tilde**.' },
          { icon: 'PenLine', front: '¿Y la tilde?', back: 'Cuando una palabra lleva **tilde** (´), esta marca la sílaba tónica. Pero muchas palabras tienen tónica **sin** tilde: **ME**-sa, pa-**PEL**. Por eso hay que **escuchar**.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.8', 'l2:4.1.6'], ambito: 'hacer', title: 'Ejemplo resuelto: encontrar la tónica',
          prompt: 'Mira cómo Mateo encuentra la sílaba tónica y clasifica la palabra.' },
        { icon: 'Search', problem: '¿Cuál es la sílaba tónica de **sábado** y **ventana**? ¿Qué clase de palabras son?',
          steps: [
            { text: 'Separa en sílabas: **sá-ba-do** (3) y **ven-ta-na** (3).', why: 'Primero hay que saber cuántas sílabas hay para poder contarlas desde el final.' },
            { text: 'Di "sábado" como si llamaras de lejos: **SÁ**-ba-do. La fuerza está en "sá", que además lleva tilde.' },
            { text: 'Cuenta desde el final: do (última), ba (penúltima), **sá (antepenúltima)** → **esdrújula**.' },
            { text: 'Di "ventana": ven-**TA**-na. No lleva tilde, pero la fuerza cae en "ta", la **penúltima** → **llana**.', why: 'La tilde no siempre aparece: el oído es tu mejor herramienta.' },
          ],
          answer: '**Sábado** es esdrújula (tónica: sá). **Ventana** es llana (tónica: ta).',
          tip: 'Cuenta siempre las sílabas desde el final de la palabra: última, penúltima, antepenúltima.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.8'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: la palabra **tortilla** se separa **tor-ti-lla**. ¿Cuál es su sílaba tónica?',
          hint: 'Dila como si llamaras a alguien: "¡tor-TIIII-lla!". ¿Dónde se alarga?',
          explain: 'Tor-**TI**-lla: la fuerza está en la penúltima sílaba. Es una palabra **llana**.' },
        { options: [
          { id: 'a', text: 'tor', feedback: 'Si la fuerza estuviera al inicio sonaría "TÓR-ti-lla". Escucha otra vez.' },
          { id: 'b', text: 'ti' },
          { id: 'c', text: 'lla', feedback: 'Sonaría "tor-ti-LLÁ", como aguda. Así no la decimos.' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.8'], ambito: 'hacer',
          prompt: 'Di cada palabra en voz alta, busca su sílaba tónica y clasifícala.',
          explain: 'Agudas: café, Cobán, reloj. Llanas: lápiz, cuaderno, volcanes. Esdrújulas: murciélago, teléfono.' },
        { buckets: [
          { id: 'ag', label: 'Aguda', icon: 'ArrowRight' },
          { id: 'll', label: 'Llana', icon: 'ArrowLeftRight' },
          { id: 'es', label: 'Esdrújula', icon: 'ArrowLeft' },
        ], items: [
          { id: 'x1', text: 'café', bucket: 'ag' },
          { id: 'x2', text: 'Cobán', bucket: 'ag' },
          { id: 'x3', text: 'reloj', bucket: 'ag', feedback: 'Re-LOJ: la fuerza cae al final, aunque no lleva tilde.' },
          { id: 'x4', text: 'lápiz', bucket: 'll' },
          { id: 'x5', text: 'cuaderno', bucket: 'll' },
          { id: 'x6', text: 'volcanes', bucket: 'll', feedback: '"Vol-CÁN" es aguda, pero en plural se dice vol-CA-nes: la tónica pasa a ser la penúltima.' },
          { id: 'x7', text: 'murciélago', bucket: 'es' },
          { id: 'x8', text: 'teléfono', bucket: 'es' },
        ] },
      ),
      S.highlight(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.8'], ambito: 'hacer',
          prompt: 'Lee la oración en voz alta. Toca todas las palabras **esdrújulas**.',
          explain: 'Sábado (SÁ-ba-do), pájaro (PÁ-ja-ro) y música (MÚ-si-ca) llevan la fuerza en la antepenúltima sílaba. Marimba, parque y escuchamos son llanas.' },
        { target: 'palabras esdrújulas', text: 'El {sábado} vimos un {pájaro} en el parque y escuchamos {música} de marimba.' },
      ),
      S.number(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.6'], ambito: 'hacer',
          prompt: 'Di con palmadas el nombre de esta ciudad: **Quetzaltenango**. ¿Cuántas sílabas tiene?',
          explain: 'Quet-zal-te-nan-go: 5 sílabas. La u de "que" no suena, así que "quet" es un solo golpe.' },
        { answer: 5, unit: 'sílabas', misconceptions: [
          { value: 6, msg: 'La u de "que" no se pronuncia: "quet" es un solo golpe de voz. Cuenta otra vez.' },
          { value: 14, msg: 'Contaste letras. Cuenta golpes de voz con palmadas.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.8', 'l2:4.1.6'], prompt: 'Boleto de salida: la palabra **computadora** se separa com-pu-ta-do-ra. ¿Cuál es su sílaba tónica?' },
        { options: [
          { id: 'a', text: 'com' },
          { id: 'b', text: 'ta' },
          { id: 'c', text: 'do' },
          { id: 'd', text: 'ra' },
        ], correct: ['c'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.6', 'l2:4.1.8'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: '"Pájaro" es una palabra esdrújula.', answer: true },
          { text: '"Perro" se separa per-ro.', answer: false, why: 'La rr no se separa: pe-rro.' },
          { text: 'Si una palabra no lleva tilde, no tiene sílaba tónica.', answer: false, why: 'Todas las palabras de dos o más sílabas tienen una sílaba tónica; la tilde solo aparece en algunas.' },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's07-l2-2',
    title: 'Ritmo y rima en la poesía',
    icon: 'Music',
    minutes: 15,
    gancho: 'Las canciones y los poemas se aprenden de memoria más fácil que una lista de compras. ¿Qué tienen que los hace pegajosos?',
    objetivos: [
      'Reconocer versos, estrofas y rima en un poema',
      'Distinguir la rima consonante de la rima asonante',
      'Recitar un poema marcando su ritmo',
    ],
    resumen: [
      'Un poema se escribe en versos (cada línea) que se agrupan en estrofas.',
      'La rima es la repetición de sonidos al final de los versos, desde la vocal de la sílaba tónica.',
      'Rima consonante: se repiten vocales y consonantes (tambor / calor). Rima asonante: solo se repiten las vocales (paz / escuchar).',
      'El ritmo nace de repetir los golpes fuertes de la voz y de hacer una pausa al final de cada verso. Se puede marcar con palmadas.',
    ],
    media: {
      id: 's07-l2-2-recital', kind: 'video', title: 'Recitamos con ritmo', aspect: '16:9', duration: 55,
      alt: 'Una niña recita un poema de dos estrofas; en pantalla se iluminan las palabras que riman y aparece una palmada en cada golpe fuerte.',
      brief: 'Video animado de 55 s. Una niña de unos 11 años, con uniforme escolar, recita frente a su grado el poema "Mural de cuatro pueblos" (texto exacto en el paso de lectura de esta lección). En pantalla aparece el texto verso por verso; las palabras que riman se iluminan del mismo color (tambor/calor en naranja; paz/escuchar en verde) y un ícono de palmada marca los golpes fuertes. Hace una pausa breve al final de cada verso y una más larga entre estrofas. Voz clara, español de Guatemala, subtítulos. Fondo: aula con un mural de colores, sin logotipos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:4.1.4'], ambito: 'conocer',
          prompt: 'Lee en voz alta: _"Canta el río su **canción**…"_ ¿Qué palabra terminaría mejor el siguiente verso para que **suene parecido**?',
          explain: '"Canción" y "corazón" terminan igual: **-ón**. Esa repetición de sonidos se llama **rima**, y es parte de la música de los poemas.' },
        { options: [
          { id: 'a', text: '…y se alegra el corazón.', icon: 'Heart' },
          { id: 'b', text: '…y se alegra la gente.', icon: 'Users', feedback: 'Tiene sentido, pero "canción" y "gente" no suenan parecido al final.' },
          { id: 'c', text: '…y la milpa crece.', icon: 'Sprout', feedback: '"Crece" no repite el sonido final de "canción".' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.4'], ambito: 'conocer', title: 'Las partes de un poema',
          prompt: 'Los poemas tienen su propia forma. Toca cada tarjeta.' },
        { icon: 'Feather', body: 'La **rima** se busca a partir de la **vocal tónica** de la última palabra de cada verso. ¡Por eso aprendiste a encontrar la sílaba tónica!', reveal: [
          { icon: 'AlignJustify', front: 'Verso', back: 'Cada **línea** de un poema. Al recitar, se hace una pequeña pausa al terminar cada verso.' },
          { icon: 'Layers', front: 'Estrofa', back: 'Un **grupo de versos** separado de otro por un espacio en blanco. Es como el párrafo de un poema.' },
          { icon: 'Music2', front: 'Rima consonante', back: 'Desde la vocal tónica se repiten **vocales y consonantes**: tam-**BOR** / ca-**LOR** (-or), **LU**-na / **CU**-na (-una).' },
          { icon: 'Music', front: 'Rima asonante', back: 'Desde la vocal tónica se repiten **solo las vocales**: **PAZ** / escu-**CHAR** (a), **PUE**-blo / **CIE**-lo (e-o).' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.4', 'l2:4.1.8'], ambito: 'hacer', title: 'Ejemplo resuelto: ¿qué tipo de rima?',
          prompt: 'Mira cómo se decide si dos palabras riman y de qué forma.' },
        { icon: 'Search', problem: '¿Riman **montaña** y **caña**? ¿Y **montaña** y **casa**?',
          steps: [
            { text: 'Busca la sílaba tónica: mon-**TA**-ña y **CA**-ña. La vocal tónica de las dos es la **a**.' },
            { text: 'Copia desde esa vocal hasta el final: mont**-aña** y c**-aña**. Son iguales: se repiten vocales (a, a) y consonante (ñ) → **rima consonante**.', why: 'Lo que está antes de la vocal tónica no cuenta.' },
            { text: 'Ahora **CA**-sa: desde la vocal tónica queda **-asa**. Compara con **-aña**: las vocales coinciden (a, a) pero la consonante no (s / ñ) → **rima asonante**.' },
          ],
          answer: '**Montaña / caña**: rima consonante. **Montaña / casa**: rima asonante.',
          tip: 'Tónica → copia hasta el final → compara vocales y consonantes.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.4'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: clasifica cada par de palabras.',
          hint: 'Busca la vocal tónica de cada palabra y copia desde ahí hasta el final. ¿Coincide todo, solo las vocales o nada?',
          explain: 'Consonante: luna/cuna (-una), tambor/calor (-or). Asonante: paz/escuchar (a), pueblo/cielo (e-o). No riman: sol/mesa, río/volcán.' },
        { buckets: [
          { id: 'c', label: 'Rima consonante', icon: 'Music2' },
          { id: 'a', label: 'Rima asonante', icon: 'Music' },
          { id: 'n', label: 'No riman', icon: 'X' },
        ], items: [
          { id: 'p1', text: 'luna / cuna', bucket: 'c' },
          { id: 'p2', text: 'tambor / calor', bucket: 'c' },
          { id: 'p3', text: 'paz / escuchar', bucket: 'a', feedback: 'Desde la vocal tónica: -az y -ar. La vocal a coincide; la consonante no. Es asonante.' },
          { id: 'p4', text: 'pueblo / cielo', bucket: 'a' },
          { id: 'p5', text: 'sol / mesa', bucket: 'n' },
          { id: 'p6', text: 'río / volcán', bucket: 'n' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.4'], ambito: 'hacer', title: 'Lectura',
          prompt: 'Lee el poema en voz alta, con una pausa al final de cada verso. Luego responde.' },
        { genre: 'Poema', heading: 'Mural de cuatro pueblos', passage:
          'Del maíz nació mi pueblo,\ndel mar llegó el tambor,\nla marimba junta a todos\ncon su canto y su calor.\n\nPintemos en la pared\nun quetzal que vuela en paz,\ncon manos de cuatro pueblos\nque se aprenden a escuchar.',
          questions: [
            { q: '¿Cuántos versos y cuántas estrofas tiene el poema?', options: [
              { id: 'a', text: '8 versos en 2 estrofas' },
              { id: 'b', text: '2 versos en 8 estrofas' },
              { id: 'c', text: '4 versos en 1 estrofa' },
            ], correct: 'a', why: 'Cada línea es un verso (8 en total) y hay dos grupos de 4 separados por un espacio.' },
            { q: 'En la primera estrofa, ¿qué palabras riman y cómo?', options: [
              { id: 'a', text: 'Tambor y calor, con rima consonante (-or)' },
              { id: 'b', text: 'Pueblo y todos, con rima consonante' },
              { id: 'c', text: 'Maíz y mar, con rima asonante' },
            ], correct: 'a', why: 'Riman los versos 2 y 4. Desde la vocal tónica, las dos terminan en "-or".' },
            { q: 'En la segunda estrofa riman "paz" y "escuchar". ¿Qué tipo de rima es?', options: [
              { id: 'a', text: 'Asonante: solo se repite la vocal a' },
              { id: 'b', text: 'Consonante: se repite todo' },
              { id: 'c', text: 'No riman' },
            ], correct: 'a', why: '-az y -ar: la vocal coincide, pero la consonante final no.' },
            { q: '¿Qué mensaje quiere dejar el poema?', options: [
              { id: 'a', text: 'Los pueblos de Guatemala pueden convivir en paz y aprender unos de otros' },
              { id: 'b', text: 'La marimba es mejor que el tambor' },
              { id: 'c', text: 'Solo un pueblo debe pintar el mural' },
            ], correct: 'a', why: 'Habla de "manos de cuatro pueblos" que pintan juntas y "se aprenden a escuchar".' },
          ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.4'], ambito: 'hacer', title: 'Marca el ritmo',
          prompt: 'El **ritmo** de un poema es su "pulso": golpes fuertes que se repiten y pausas en el mismo lugar. Mira el video de la lección y recita contigo mismo.' },
        { icon: 'Drum', body: 'Recita "Mural de cuatro pueblos" siguiendo estos pasos. Hazlo dos veces: la segunda, sin mirar la pantalla.', reveal: [
          { icon: 'Hand', front: '1. Palmadas', back: 'Da una palmada en las sílabas que suenan fuerte: "del ma-**ÍZ** na-**CIÓ** mi **PUE**-blo".' },
          { icon: 'Timer', front: '2. Pausas', back: 'Haz una pausa corta al final de cada verso y una pausa más larga entre las dos estrofas.' },
          { icon: 'Volume2', front: '3. Rima', back: 'Pronuncia un poco más claro las palabras que riman (tambor, calor, paz, escuchar): son como el eco del poema.' },
          { icon: 'Smile', front: '4. Expresión', back: 'Mira a tu público y usa un volumen que todos escuchen, como practicaste en la semana 4.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.4', 'l2:4.1.8'], ambito: 'hacer',
          prompt: 'Recita en voz alta el verso _"la marimba junta a todos"_ dando una palmada en cada **sílaba tónica**. ¿Qué opción marca bien los golpes fuertes (en mayúsculas)?',
          explain: 'La ma-**RIM**-ba **JUN**-ta a **TO**-dos: las palmadas caen en la sílaba tónica de cada palabra importante. Esos golpes que se repiten verso tras verso forman el **ritmo** del poema.' },
        { options: [
          { id: 'a', text: 'la ma-RIM-ba JUN-ta a TO-dos' },
          { id: 'b', text: 'LA ma-rim-BA jun-TA a to-DOS', feedback: 'Así las palabras suenan agudas y extrañas: marimBA, junTA. Di cada palabra como la dices normalmente.' },
          { id: 'c', text: 'la MA-rim-ba jun-ta A to-dos', feedback: 'Nadie dice "MÁ-rim-ba": marimba es llana (ma-RIM-ba). Busca la sílaba tónica de cada palabra.' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.4'], ambito: 'hacer',
          prompt: 'Completa la copla con las palabras que **riman** con los versos 2 y 4. Luego recítala con palmadas.',
          explain: 'Color y amor riman en "-or" (rima consonante): desde la vocal tónica se repiten la o y la r. Así los versos 2 y 4 suenan como un eco.' },
        { text: 'Mi abuela teje en su telar / hilos de todo [[color]]; / en cada güipil que borda / deja un poco de su [[amor]].', distractors: ['tela', 'cariño', 'rojo'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.4'], ambito: 'hacer',
          prompt: 'Escribe **cuatro versos** sobre algo de tu comunidad (el mercado, el río, la feria…). Haz que **rimen el verso 2 y el verso 4**. Después, escribe qué tipo de rima usaste.' },
        { minWords: 16, placeholder: 'Verso 1…\nVerso 2…\nVerso 3…\nVerso 4…\nTipo de rima: …',
          model: 'En el mercado del pueblo\nhuele a pan y a café,\nlas señoras venden flores\ny yo compro un güisquil también.\nTipo de rima: asonante, porque "café" y "también" repiten la vocal e, pero no las consonantes.',
          rubric: ['Escribí cuatro versos sobre mi comunidad', 'El verso 2 y el verso 4 riman', 'Dije si la rima es consonante o asonante'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.4'], prompt: 'Boleto de salida: ¿qué palabra tiene **rima asonante** con **luna**?' },
        { options: [
          { id: 'a', text: 'cuna' },
          { id: 'b', text: 'pluma' },
          { id: 'c', text: 'sol' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.4', 'l2:4.1.8'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Una estrofa es un grupo de versos.', answer: true },
          { text: '"Tambor" y "calor" tienen rima asonante.', answer: false, why: 'Repiten vocal y consonante (-or): es rima consonante.' },
          { text: 'Para encontrar la rima, se compara desde la vocal de la sílaba tónica hasta el final.', answer: true },
        ] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l2'], cnb: [], ambito: 'ser', prompt: '¿Cómo te fue esta semana?' },
        { statements: ['Separo palabras en sílabas con palmadas', 'Encuentro la sílaba tónica y sé si la palabra es aguda, llana o esdrújula', 'Reconozco la rima consonante y la asonante', 'Recito un poema marcando el ritmo'],
          commitments: ['Recitaré un poema o una canción a mi familia marcando el ritmo', 'Buscaré rimas en las canciones que escucho', 'Jugaré a separar en sílabas los nombres de mi familia'] },
      ),
    ],
  }),
];
