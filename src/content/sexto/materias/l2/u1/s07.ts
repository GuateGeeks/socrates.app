/**
 * L2 (español como segundo idioma) · Unidad 1 · Semana 7
 * Lenguaje para investigar el agua: sílabas y tonicidad; ritmo y rima en poesía ambiental.
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
      'Clasificar vocabulario del agua por separación silábica y sílaba tónica',
    ],
    resumen: [
      'Una sílaba es cada golpe de voz: cau-dal tiene 2. Toda sílaba tiene al menos una vocal.',
      'Ch, ll, rr y qu no se separan. Dos vocales que se dicen en un solo golpe (diptongo) van juntas: a-gua, llu-via.',
      'La sílaba tónica es la que se pronuncia con más fuerza. Cambiarla puede cambiar la palabra: papa / papá.',
      'Aguda: tónica al final (cau-DAL). Llana: en la penúltima (A-gua). Esdrújula: en la antepenúltima (HÍ-dri-co).',
    ],
    media: {
      id: 's07-l2-1-palmadas', kind: 'audio', title: 'Palabras con palmadas', duration: 45,
      alt: 'Una voz dice palabras despacio y da una palmada en cada sílaba; en la sílaba tónica la palmada suena más fuerte.',
      brief: 'Audio de 45 s. Voz adulta femenina, clara y pausada, español de Guatemala. Para cada palabra: decirla completa, separarla con una palmada por sílaba y marcar la tónica con una palmada doble. Guion exacto y orden: "a-gua", "cau-dal", "llu-via", "na-ci-mien-to", "tu-be-rí-a", "hí-dri-co" y "po-ta-bi-li-za-ción". Pausa de 2 s entre palabras. Sin música.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:4.1.6', 'l2:4.1.8'], title: 'Palabras del agua por golpes de voz',
          prompt: 'Cada palabra puede dividirse en sílabas y una recibe mayor intensidad. Esa posición permite clasificarla como aguda, llana o esdrújula.' },
        { icon: 'Waves', body: 'Usaremos palabras de la investigación: **agua, caudal, río, hídrico y nacimiento**.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.6'], ambito: 'conocer',
          prompt: 'Di en voz alta **"caudal"** y da una palmada por cada golpe de voz. ¿Cuántas palmadas diste?',
          explain: '**Cau-dal**: dos golpes de voz. Cada golpe se llama **sílaba**.' },
        { options: [
          { id: 'a', text: '1 palmada', feedback: 'Dilo despacio: cau-dal. Escucharás dos golpes.' },
          { id: 'b', text: '2 palmadas' },
          { id: 'c', text: '6 palmadas', feedback: 'Contaste letras; cuenta golpes de voz.' },
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
        { icon: 'Scissors', problem: '¿Cuántas sílabas tienen **nacimiento** y **agua**?',
          steps: [
            { text: '"Nacimiento": **na – ci – mien – to**. Son **4** golpes.' },
            { text: '"Agua": **a – gua**. Son **2** golpes.' },
            { text: 'En "gua", la **u** y la **a** se dicen en un solo golpe: forman diptongo.', why: 'Contamos sonidos, no letras aisladas.' },
          ],
          answer: '**Na-ci-mien-to** tiene 4 sílabas y **a-gua** tiene 2.',
          tip: 'Cuenta golpes de voz, no letras.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.6'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: di cada palabra con palmadas y colócala según su número de sílabas.',
          hint: 'Recuerda: ll y rr no se separan, y "ua", "ue", "ie" se dicen en un solo golpe.',
          explain: 'río (2) · lluvia, caudal (2) · arroyo (3) · nacimiento (4) · potabilización (6).' },
        { buckets: [
          { id: 'b1', label: '1 sílaba', icon: 'Circle' },
          { id: 'b2', label: '2 sílabas', icon: 'Copy' },
          { id: 'b3', label: '3 sílabas', icon: 'Layers' },
          { id: 'b4', label: '4 sílabas', icon: 'Blocks' },
        ], items: [
          { id: 'w1', text: 'sol', bucket: 'b1' },
          { id: 'w2', text: 'lluvia', bucket: 'b2' },
          { id: 'w3', text: 'caudal', bucket: 'b2' },
          { id: 'w4', text: 'arroyo', bucket: 'b3' },
          { id: 'w5', text: 'hídrico', bucket: 'b3' },
          { id: 'w6', text: 'nacimiento', bucket: 'b4' },
          { id: 'w7', text: 'tubería', bucket: 'b4', feedback: 'Tu-be-rí-a: la tilde separa í-a. Son 4.' },
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
          prompt: 'Ahora tú, con ayuda: **caudal** se separa **cau-dal**. ¿Cuál es su sílaba tónica?',
          hint: 'Dila como si llamaras a alguien: “¡cau-DAAAL!”.',
          explain: 'Cau-**DAL**: la fuerza está en la última sílaba. Es **aguda**.' },
        { options: [
          { id: 'a', text: 'cau', feedback: 'Escucha otra vez dónde cae la mayor fuerza.' },
          { id: 'b', text: 'dal' },
          { id: 'c', text: 'Las dos suenan igual de fuertes', feedback: 'Toda palabra tiene una sílaba tónica.' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.8'], ambito: 'hacer',
          prompt: 'Di cada palabra en voz alta, busca su sílaba tónica y clasifícala.',
          explain: 'Agudas: caudal, manantial. Llanas: agua, lluvia, tubería. Esdrújulas: hídrico, acuífero.' },
        { buckets: [
          { id: 'ag', label: 'Aguda', icon: 'ArrowRight' },
          { id: 'll', label: 'Llana', icon: 'ArrowLeftRight' },
          { id: 'es', label: 'Esdrújula', icon: 'ArrowLeft' },
        ], items: [
          { id: 'x1', text: 'caudal', bucket: 'ag' },
          { id: 'x2', text: 'manantial', bucket: 'ag' },
          { id: 'x3', text: 'captación', bucket: 'ag' },
          { id: 'x4', text: 'agua', bucket: 'll' },
          { id: 'x5', text: 'lluvia', bucket: 'll' },
          { id: 'x6', text: 'tubería', bucket: 'll' },
          { id: 'x7', text: 'hídrico', bucket: 'es' },
          { id: 'x8', text: 'acuífero', bucket: 'es' },
        ] },
      ),
      S.highlight(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.8'], ambito: 'hacer',
          prompt: 'Lee la oración en voz alta. Toca todas las palabras **esdrújulas**.',
          explain: 'Hídrico, acuífero y científico llevan la fuerza en la antepenúltima sílaba.' },
        { target: 'palabras esdrújulas', text: 'El informe {hídrico} describe un {acuífero} con lenguaje {científico}.' },
      ),
      S.number(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.6'], ambito: 'hacer',
          prompt: 'Di con palmadas **potabilización**. ¿Cuántas sílabas tiene?',
          explain: 'Po-ta-bi-li-za-ción: 6 sílabas.' },
        { answer: 6, unit: 'sílabas', misconceptions: [
          { value: 5, msg: 'Pronuncia despacio: po-ta-bi-li-za-ción.' },
          { value: 15, msg: 'Contaste letras. Cuenta golpes de voz.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.8', 'l2:4.1.6'], prompt: 'Boleto de salida: **nacimiento** se separa na-ci-mien-to. ¿Cuál es su sílaba tónica?' },
        { options: [
          { id: 'a', text: 'na' },
          { id: 'b', text: 'ci' },
          { id: 'c', text: 'mien' },
          { id: 'd', text: 'to' },
        ], correct: ['c'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.6', 'l2:4.1.8'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: '"Hídrico" es una palabra esdrújula.', answer: true },
          { text: '"Arroyo" se separa ar-ro-yo.', answer: false, why: 'La rr no se separa: a-rro-yo.' },
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
    gancho: 'El agua tiene pulsos: gota, lluvia, río. ¿Cómo puede un poema convertir esos sonidos en ritmo?',
    objetivos: [
      'Interpretar ritmo y rima en poemas breves sobre el agua',
    ],
    resumen: [
      'Un poema se escribe en versos (cada línea) que se agrupan en estrofas.',
      'La rima es la repetición de sonidos al final de los versos, desde la vocal de la sílaba tónica.',
      'Rima consonante: se repiten vocales y consonantes (caudal / manantial). Rima asonante: solo las vocales (río / limpio).',
      'El ritmo nace de repetir los golpes fuertes de la voz y de hacer una pausa al final de cada verso. Se puede marcar con palmadas.',
    ],
    media: {
      id: 's07-l2-2-recital', kind: 'video', title: 'Recitamos con ritmo', aspect: '16:9', duration: 55,
      alt: 'Una niña recita un poema de dos estrofas; en pantalla se iluminan las palabras que riman y aparece una palmada en cada golpe fuerte.',
      brief: 'Video animado de 55 s. Una niña de 11 años recita el poema "Preguntas al río", con el texto exacto del paso de lectura. Iluminar caudal/manantial y río/limpio; un icono de palmada marca golpes fuertes y las pausas entre versos. Fondo de aula con mapa de microcuenca y fichas de fuentes. Voz clara, español de Guatemala, subtítulos, sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:4.1.4', 'l2:4.1.8'], title: 'El agua también marca ritmo',
          prompt: 'En un poema, los versos se agrupan en estrofas; la repetición de sonidos finales crea rima y las sílabas acentuadas sostienen el ritmo.' },
        { icon: 'AudioLines', body: 'Leeremos poemas del agua para reconocer su forma y preparar una recitación expresiva.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.4'], ambito: 'conocer',
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
        { genre: 'Poema', heading: 'Preguntas al río', passage:
          'Anotamos el caudal,\nbuscamos el manantial,\nla lluvia deja señales\nque aprendemos a observar.\n\nPreguntamos por el río,\nsin decir que siempre es limpio,\ncomparamos nuestras fuentes\ny escribimos lo aprendido.',
          questions: [
            { q: '¿Cuántos versos y cuántas estrofas tiene el poema?', options: [
              { id: 'a', text: '8 versos en 2 estrofas' },
              { id: 'b', text: '2 versos en 8 estrofas' },
              { id: 'c', text: '4 versos en 1 estrofa' },
            ], correct: 'a', why: 'Cada línea es un verso (8 en total) y hay dos grupos de 4 separados por un espacio.' },
            { q: 'En los primeros versos, ¿qué palabras riman y cómo?', options: [
              { id: 'a', text: 'Caudal y manantial, con rima consonante (-al)' },
              { id: 'b', text: 'Lluvia y señales, con rima consonante' },
              { id: 'c', text: 'Río y fuentes, con rima asonante' },
            ], correct: 'a', why: 'Desde la vocal tónica, ambas terminan en "-al".' },
            { q: 'En la segunda estrofa, “río” y “limpio” comparten vocales. ¿Qué tipo de rima es?', options: [
              { id: 'a', text: 'Asonante: se repiten las vocales í-o' },
              { id: 'b', text: 'Consonante: se repite todo' },
              { id: 'c', text: 'No riman' },
            ], correct: 'a', why: 'Desde la vocal tónica, río y limpio comparten í-o, pero no las mismas consonantes.' },
            { q: '¿Qué mensaje quiere dejar el poema?', options: [
              { id: 'a', text: 'Conviene preguntar, comparar fuentes y registrar lo aprendido' },
              { id: 'b', text: 'Todo río es limpio por naturaleza' },
              { id: 'c', text: 'Una observación basta para asegurar la calidad del agua' },
            ], correct: 'a', why: 'El poema presenta preguntas, observaciones y comparación de fuentes sin afirmar algo que no se comprobó.' },
          ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:4.1.4'], ambito: 'hacer', title: 'Marca el ritmo',
          prompt: 'El **ritmo** de un poema es su "pulso": golpes fuertes que se repiten y pausas en el mismo lugar. Mira el video de la lección y recita contigo mismo.' },
        { icon: 'Drum', body: 'Recita "Preguntas al río" siguiendo estos pasos. Hazlo dos veces: la segunda, sin mirar la pantalla.', reveal: [
          { icon: 'Hand', front: '1. Palmadas', back: 'Da una palmada en las sílabas que suenan fuerte: "a-no-**TA**-mos el cau-**DAL**".' },
          { icon: 'Timer', front: '2. Pausas', back: 'Haz una pausa corta al final de cada verso y una pausa más larga entre las dos estrofas.' },
          { icon: 'Volume2', front: '3. Rima', back: 'Pronuncia un poco más claro las palabras que riman (caudal, manantial, río, limpio): son como el eco del poema.' },
          { icon: 'Smile', front: '4. Expresión', back: 'Mira a tu público y usa un volumen que todos escuchen, como practicaste en la semana 4.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.4', 'l2:4.1.8'], ambito: 'hacer',
          prompt: 'Recita en voz alta _"anotamos el caudal"_ dando una palmada en cada **sílaba tónica**. ¿Qué opción marca bien los golpes fuertes (en mayúsculas)?',
          explain: 'A-no-**TA**-mos el cau-**DAL**: las palmadas caen en la sílaba tónica de cada palabra importante. Esos golpes repetidos forman el **ritmo**.' },
        { options: [
          { id: 'a', text: 'a-no-TA-mos el cau-DAL' },
          { id: 'b', text: 'A-no-ta-MOS EL CAU-dal', feedback: 'Di las palabras como las pronuncias normalmente: anotamos es llana y caudal es aguda.' },
          { id: 'c', text: 'a-NO-ta-mos el CAU-dal', feedback: 'Busca la sílaba que realmente recibe la mayor intensidad en cada palabra.' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.4'], ambito: 'hacer',
          prompt: 'Completa la copla para que **rimen los versos 1 y 3**. Luego recítala con palmadas.',
          explain: 'Caudal y manantial riman en "-al" (rima consonante): desde la vocal tónica se repiten vocales y consonantes.' },
        { text: 'Registramos el [[caudal]]; / dibujamos su recorrido; / buscamos el [[manantial]] / y comparamos lo aprendido.', distractors: ['río', 'lluvia', 'fuente'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:4.1.4'], ambito: 'hacer',
          prompt: 'Escribe **cuatro versos** sobre investigar o cuidar el agua. Haz que rimen los versos 2 y 4. Después, nombra el tipo de rima.' },
        { minWords: 16, placeholder: 'Verso 1…\nVerso 2…\nVerso 3…\nVerso 4…\nTipo de rima: …',
          model: 'Preguntamos por el río,\nconsultamos una fuente,\nanotamos cada dato\ny revisamos cuidadosamente.\nTipo de rima: asonante entre fuente y cuidadosamente.',
          rubric: ['Escribí cuatro versos sobre el agua', 'El verso 2 y el verso 4 riman', 'Dije si la rima es consonante o asonante'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.4'], prompt: 'Boleto de salida: ¿qué palabra tiene **rima asonante** con **río**?' },
        { options: [
          { id: 'a', text: 'frío' },
          { id: 'b', text: 'limpio' },
          { id: 'c', text: 'caudal' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.1.4', 'l2:4.1.8'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Una estrofa es un grupo de versos.', answer: true },
          { text: '"Caudal" y "manantial" tienen rima asonante.', answer: false, why: 'Repiten vocales y consonantes (-al): es rima consonante.' },
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
