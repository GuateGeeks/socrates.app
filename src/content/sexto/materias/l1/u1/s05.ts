/**
 * Comunicación y Lenguaje L1 · Unidad 1 · Semana 5
 * Hilo de la semana: las palabras que heredamos y cómo las usamos para describir. Primero, las
 * palabras que caracterizan (connotativas) frente a las que solo nombran o señalan (no
 * connotativas); después, describir con precisión un objeto heredado en la familia. La semana
 * cierra con el género y el número de las palabras y su concordancia, para que las descripciones
 * queden bien escritas.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's05-l1-1',
    title: 'Palabras que nombran y palabras que caracterizan',
    icon: 'Palette',
    minutes: 14,
    gancho: '"Un güipil" o "un güipil rojo, antiguo y suave como la tortilla recién hecha": ¿cuál puedes imaginar mejor?',
    objetivos: [
      'Distinguir las palabras que solo nombran de las que dicen cómo es algo',
      'Reconocer palabras connotativas (adjetivos calificativos) en un texto',
      'Usar palabras connotativas para que una descripción sea más precisa',
    ],
    resumen: [
      'Hay palabras que nombran sin caracterizar: güipil, telar, abuela. Se llaman no connotativas.',
      'Las palabras connotativas señalan las particularidades de lo nombrado: cómo es, de qué color, qué forma, qué textura. Son los adjetivos calificativos: rojo, antiguo, suave.',
      'Para encontrar una palabra connotativa pregunta al sustantivo: ¿cómo es?',
      'Las palabras connotativas hacen que quien lee pueda imaginar exactamente lo que describes.',
    ],
    media: {
      id: 's05-l1-1-guipil', kind: 'image', title: 'El güipil de la abuela', aspect: '4:3',
      alt: 'Ilustración de un güipil tejido extendido sobre una mesa de madera. Alrededor, etiquetas: a la izquierda "güipil", "mesa", "hilo" (palabras que nombran); a la derecha "rojo", "antiguo", "suave", "brillante" (palabras que caracterizan), unidas con flechas a la parte del güipil que describen.',
      brief: 'Ilustración cálida estilo libro de texto: un güipil tejido a mano, con franjas rojas, pájaros y rombos bordados, extendido sobre una mesa de madera junto a una canasta con hilos de colores. Etiquetas en dos colores: en gris, palabras que nombran (güipil, mesa, hilos, canasta); en naranja, palabras que caracterizan (rojo, antiguo, suave, brillante, bordado), cada una con una flecha hacia la parte del objeto. Sin diseños de un pueblo específico copiados de fotos reales; motivo genérico y respetuoso.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'conocer',
          prompt: 'Doña Rosa perdió su morral en el mercado y lo describe a una vendedora. ¿Qué descripción ayuda **más** a encontrarlo?',
          explain: 'La segunda descripción dice **cómo es** el morral: color, material, tamaño y un detalle especial. Esas palabras que caracterizan son el tema de hoy.' },
        { options: [
          { id: 'a', text: '"Perdí un morral."', icon: 'Package', feedback: 'Solo nombra el objeto. En un mercado hay cientos de morrales.' },
          { id: 'b', text: '"Perdí un morral pequeño, de lana azul, con flecos amarillos y una mancha de café."', icon: 'Search' },
          { id: 'c', text: '"Perdí mi cosa de siempre."', icon: 'HelpCircle', feedback: '"Cosa" no nombra con claridad ni dice cómo es.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'conocer', title: 'Nombrar y caracterizar',
          prompt: 'Las palabras hacen trabajos distintos. Unas **nombran** los objetos; otras dicen **cómo son**. Toca cada tarjeta.' },
        { icon: 'Palette', body: 'Regla práctica: pregúntale al sustantivo **¿cómo es?** La palabra que responde es **connotativa**.', reveal: [
          { icon: 'Tag', front: 'Palabras no connotativas', back: '**Nombran** sin caracterizar: _güipil, telar, abuela, maíz, montaña_. Te dicen **qué** es, pero no **cómo** es.' },
          { icon: 'Sparkles', front: 'Palabras connotativas', back: 'Señalan las **particularidades** de lo que se nombra: color, tamaño, forma, textura, edad, carácter. Son los **adjetivos calificativos**: _rojo, antiguo, suave, alegre, redondo_.' },
          { icon: 'Search', front: 'Ejemplo', back: 'En "una olla **negra** y **pesada**", _olla_ nombra; _negra_ y _pesada_ dicen cómo es: son connotativas.' },
          { icon: 'AlertTriangle', front: 'Cuidado', back: 'Una palabra connotativa **acompaña** a un sustantivo o se dice de él: "la olla es **pesada**". Si no puedes preguntar "¿cómo es…?", probablemente no es connotativa.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'conocer',
          prompt: 'Lee esta descripción. Fíjate en cómo las palabras connotativas te ayudan a **ver** el güipil. Luego responde.' },
        { genre: 'Texto descriptivo', heading: 'El güipil de mi abuela', passage:
          'En el baúl de madera de mi abuela Juana hay un güipil que ella tejió cuando tenía quince años. Es un güipil ancho y largo, que le llega casi a las rodillas.\n\n' +
          'La tela es gruesa y un poco áspera por fuera, pero suave por dentro, como una cobija vieja. El color de fondo es rojo oscuro, parecido al de los granos de café maduros. Sobre ese rojo corren franjas amarillas y moradas, y en el pecho hay pájaros pequeños con las alas abiertas.\n\n' +
          'El cuello es redondo y tiene un bordado de hilo brillante que mi abuela compró en el mercado del pueblo. Tiene un remiendo casi invisible en la manga izquierda: un día se le enganchó en un clavo.\n\n' +
          'Cuando mi abuela lo saca del baúl, huele a madera y a hierbas secas. Ella dice que algún día será mío. Yo pienso que no es solo una prenda: es un libro tejido donde están guardados sus años.',
          questions: [
            { q: '¿De qué color es el fondo del güipil?', options: [
              { id: 'a', text: 'Rojo oscuro' }, { id: 'b', text: 'Amarillo' }, { id: 'c', text: 'Morado' },
            ], correct: 'a', why: 'El texto dice: "El color de fondo es rojo oscuro". El amarillo y el morado son de las franjas.' },
            { q: '¿Qué palabras describen la tela por fuera?', options: [
              { id: 'a', text: 'Gruesa y áspera' }, { id: 'b', text: 'Suave y brillante' }, { id: 'c', text: 'Ancha y larga' },
            ], correct: 'a', why: '"Gruesa y un poco áspera por fuera": son palabras connotativas que dicen cómo se siente la tela.' },
            { q: '¿Por qué la autora dice que el güipil es "un libro tejido"?', options: [
              { id: 'a', text: 'Porque guarda recuerdos e historia de la vida de su abuela' },
              { id: 'b', text: 'Porque tiene letras bordadas' },
              { id: 'c', text: 'Porque lo guardan junto a los libros' },
            ], correct: 'a', why: 'Es una comparación: como un libro, el güipil "cuenta" la historia de la abuela (lo tejió joven, lo remendó, lo heredará).' },
            { q: '¿Qué pasaría con el texto si le quitaras todas las palabras connotativas?', options: [
              { id: 'a', text: 'Sabríamos qué objetos hay, pero no podríamos imaginar cómo son' },
              { id: 'b', text: 'Sería igual de claro' },
              { id: 'c', text: 'Ya no tendría sustantivos' },
            ], correct: 'a', why: 'Sin "rojo oscuro", "gruesa", "brillante"… solo quedarían nombres: güipil, tela, cuello, manga.' },
          ] },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'hacer',
          prompt: 'Toca las **palabras connotativas** (las que dicen cómo es algo) en este fragmento del texto.',
          hint: 'Pregunta a cada sustantivo "¿cómo es?": ¿cómo es el cuello?, ¿cómo es el hilo?, ¿cómo son los pájaros?',
          explain: '"Redondo", "brillante", "pequeños" y "abiertas" caracterizan al cuello, al hilo, a los pájaros y a las alas. "Cuello", "hilo" y "pájaros" solo nombran.' },
        { target: 'palabras connotativas', text: 'El cuello es {redondo} y tiene un bordado de hilo {brillante}. En el pecho hay pájaros {pequeños} con las alas {abiertas}.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'hacer', title: 'Ejemplo resuelto: de nombrar a describir',
          prompt: 'Mira cómo una oración que solo nombra se vuelve una descripción precisa.' },
        { icon: 'PenLine', problem: 'Oración inicial: "Mi abuelo tiene una piedra de moler."',
          steps: [
            { text: 'Identifico lo que se nombra: **abuelo**, **piedra de moler**.' },
            { text: 'Le pregunto al objeto **¿cómo es?** Imagino su color, forma, tamaño y textura: gris, lisa, pesada, gastada en el centro.', why: 'Las preguntas por los sentidos te dan palabras connotativas.' },
            { text: 'Elijo las más **precisas** y las uno al sustantivo: "una piedra de moler **gris** y **pesada**".' },
            { text: 'Agrego un detalle **particular** que la haga única: "**gastada** en el centro de tanto moler maíz".', why: 'Las particularidades son justo lo que distingue a ESE objeto de todos los demás.' },
          ],
          answer: '"Mi abuelo tiene una piedra de moler **gris** y **pesada**, **gastada** en el centro de tanto moler maíz."',
          tip: 'No amontones palabras: dos o tres connotativas precisas valen más que diez vagas.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], prompt: 'Clasifica cada palabra: ¿solo **nombra** o **caracteriza**?',
          hint: 'Intenta ponerla después de "una cosa…": "una cosa suave" funciona (caracteriza); "una cosa telar" no (nombra).' },
        { buckets: [
          { id: 'no', label: 'No connotativa (nombra)', icon: 'Tag', color: 'var(--area-l1)' },
          { id: 'si', label: 'Connotativa (caracteriza)', icon: 'Sparkles', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'telar', bucket: 'no' },
          { id: 'x2', text: 'áspero', bucket: 'si' },
          { id: 'x3', text: 'canasta', bucket: 'no' },
          { id: 'x4', text: 'colorido', bucket: 'si' },
          { id: 'x5', text: 'volcán', bucket: 'no' },
          { id: 'x6', text: 'humeante', bucket: 'si', feedback: '"Un volcán humeante": dice cómo está el volcán. Caracteriza.' },
          { id: 'x7', text: 'tamal', bucket: 'no' },
          { id: 'x8', text: 'sabroso', bucket: 'si' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'hacer',
          prompt: 'Completa la descripción de la marimba del abuelo con la palabra connotativa que **mejor** encaja en cada espacio.',
          explain: 'La madera "oscura", las teclas "pulidas" y "largas" y el sonido "alegre": cada palabra dice cómo es una parte distinta de la marimba. Fíjate en que cada palabra concuerda con su sustantivo.' },
        { text: 'La marimba del abuelo es de madera [[oscura]] y tiene las teclas [[pulidas]] por tantos años de uso. Las teclas más [[largas]] dan los sonidos graves. Cuando la tocan en la fiesta, su sonido [[alegre]] llena todo el patio.',
          distractors: ['marimba', 'fiesta', 'triste'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'hacer',
          prompt: 'Piensa en un objeto que tu familia guarda desde hace tiempo (una olla, una herramienta, una foto, una prenda, un mueble). Escríbelo en **3 o 4 oraciones** usando **al menos 5 palabras connotativas**. Subráyalas mentalmente al revisar.' },
        { minWords: 35, placeholder: 'En mi casa guardamos… Es…',
          model: 'En mi casa guardamos el machete antiguo de mi bisabuelo. Tiene la hoja delgada y un poco oxidada en la punta. El mango es de madera clara, liso y gastado por sus manos. Mi papá lo cuida porque dice que con él se abrió la primera milpa de la familia.',
          rubric: [
            'Nombré el objeto con claridad',
            'Usé al menos 5 palabras connotativas',
            'Las palabras connotativas son precisas (no solo "bonito" o "bueno")',
            'Incluí un detalle particular que hace único al objeto',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.2.2'], prompt: 'En la oración "_Las ollas de barro negro hierven sobre el fuego lento_", ¿cuáles son las palabras **connotativas**?' },
        { options: [
          { id: 'a', text: 'negro y lento' },
          { id: 'b', text: 'ollas y barro' },
          { id: 'c', text: 'hierven y fuego' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.2.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La palabra "cántaro" es no connotativa: nombra un objeto sin decir cómo es.', answer: true },
          { text: 'La palabra "resbaloso" es no connotativa.', answer: false, why: '"Resbaloso" dice cómo es algo (un camino resbaloso): es connotativa.' },
          { text: 'Las palabras connotativas ayudan a imaginar las particularidades de lo que se describe.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's05-l1-2',
    title: 'Palabras que señalan, cuentan y dicen de quién es',
    icon: 'Pointer',
    minutes: 13,
    gancho: 'Si alguien te dice "pásame ese", ¿sabes cómo es el objeto? No… pero sí sabes cuál es.',
    objetivos: [
      'Reconocer palabras no connotativas que acompañan al sustantivo: artículos, demostrativos, posesivos, numerales e indefinidos',
      'Diferenciarlas de las palabras connotativas',
      'Combinar ambos tipos para escribir con precisión',
    ],
    resumen: [
      'Algunas palabras acompañan al sustantivo sin decir cómo es: lo presentan (el, una), lo señalan (este, ese, aquel), dicen de quién es (mi, tu, su, nuestro), cuántos son (dos, tercer) o una cantidad imprecisa (algunos, muchos, pocos).',
      'Estas palabras son no connotativas (adjetivos determinativos): identifican al objeto, pero no lo caracterizan.',
      'Las connotativas (calificativos) dicen cómo es: en "mis dos canastas nuevas", mis y dos son no connotativas; nuevas es connotativa.',
    ],
    media: {
      id: 's05-l1-2-senalar', kind: 'animation', title: 'Este, ese, aquel', aspect: '16:9', duration: 40,
      alt: 'Una niña en el patio señala tres cántaros: uno junto a ella (este), otro junto a su hermano (ese) y otro lejos, junto a la pila (aquel).',
      brief: 'Animación 2D de 40 s. Patio de casa rural con pila. Una niña señala tres cántaros a distinta distancia; aparece la palabra "este" junto al que está a su lado, "ese" junto al que está cerca de su hermano y "aquel" junto al lejano. Luego aparecen etiquetas "mi cántaro", "dos cántaros", "algunos cántaros". Cierra con el texto: "Estas palabras señalan, cuentan o dicen de quién es… pero no dicen cómo es". Narración en español, subtítulos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'conocer',
          prompt: 'Tu mamá dice: "**Trae aquella** canasta". ¿Qué información te da la palabra **aquella**?',
          explain: '"Aquella" no dice si la canasta es grande o pequeña, nueva o vieja: solo **señala** cuál es (la que está lejos). Es una palabra no connotativa.' },
        { options: [
          { id: 'a', text: 'Cuál canasta es: la que está lejos', icon: 'Pointer' },
          { id: 'b', text: 'De qué color es la canasta', icon: 'Palette', feedback: '"Aquella" no dice nada del color.' },
          { id: 'c', text: 'Qué tan pesada es', icon: 'Weight', feedback: '"Aquella" no describe el peso.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'conocer', title: 'Palabras que acompañan sin caracterizar',
          prompt: 'Estas palabras van **junto al sustantivo** y lo identifican, pero **no dicen cómo es**. Por eso también son **no connotativas**. Toca cada tarjeta.' },
        { icon: 'Pointer', body: 'En gramática se llaman **adjetivos determinativos** (y artículos). Los calificativos, en cambio, son los **connotativos**.', reveal: [
          { icon: 'Type', front: 'Artículos', back: 'Presentan al sustantivo: _el, la, los, las, un, una, unos, unas_. "**La** tinaja".' },
          { icon: 'Pointer', front: 'Demostrativos', back: 'Señalan la **distancia**: _este_ (cerca de mí), _ese_ (cerca de ti), _aquel_ (lejos de los dos). "**Esa** tinaja".' },
          { icon: 'Key', front: 'Posesivos', back: 'Dicen **de quién es**: _mi, tu, su, nuestro, nuestra_. "**Nuestra** tinaja".' },
          { icon: 'Hash', front: 'Numerales', back: 'Dicen **cuántos** o **en qué orden**: _dos, diez, primer, tercera_. "**Tres** tinajas", "la **primera** tinaja".' },
          { icon: 'Shuffle', front: 'Indefinidos', back: 'Dan una cantidad **no exacta**: _algunos, muchos, pocos, varios, cualquier_. "**Varias** tinajas".' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'hacer', title: 'Ejemplo resuelto: palabra por palabra',
          prompt: 'Analicemos juntos una expresión con palabras de los dos tipos.' },
        { icon: 'Search', problem: 'Expresión: "**aquellas tres canastas nuevas de mi tía**". ¿Qué hace cada palabra que acompaña a "canastas"?',
          steps: [
            { text: 'Busco el sustantivo principal: **canastas** (nombra).' },
            { text: '**aquellas**: señala que están lejos → demostrativo, **no connotativa**.' },
            { text: '**tres**: dice cuántas son → numeral, **no connotativa**.' },
            { text: '**nuevas**: responde a "¿cómo son?" → calificativo, **connotativa**.', why: 'Es la única palabra que dice una característica de las canastas.' },
            { text: '**mi**: dice de quién es la tía → posesivo, **no connotativa**.' },
          ],
          answer: 'Solo **nuevas** es connotativa. _Aquellas, tres_ y _mi_ identifican sin caracterizar.',
          tip: 'Si la palabra responde a ¿cuál?, ¿cuántos? o ¿de quién?, es no connotativa. Si responde a ¿cómo es?, es connotativa.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], prompt: 'Clasifica la palabra destacada en cada expresión.',
          hint: 'Pregunta: ¿responde a "cómo es"? → connotativa. ¿Responde a "cuál, cuántos o de quién"? → no connotativa.' },
        { buckets: [
          { id: 'no', label: 'No connotativa (señala, cuenta, dice de quién)', icon: 'Pointer', color: 'var(--area-l1)' },
          { id: 'si', label: 'Connotativa (dice cómo es)', icon: 'Sparkles', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: '**nuestro** huerto', bucket: 'no' },
          { id: 'x2', text: 'huerto **fértil**', bucket: 'si' },
          { id: 'x3', text: '**cinco** gallinas', bucket: 'no' },
          { id: 'x4', text: 'gallinas **ponedoras**', bucket: 'si', feedback: '"Ponedoras" dice una característica de las gallinas (ponen huevos): es connotativa.' },
          { id: 'x5', text: '**esos** frijoles', bucket: 'no' },
          { id: 'x6', text: 'frijoles **negros**', bucket: 'si' },
          { id: 'x7', text: '**algunas** semillas', bucket: 'no' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'conocer', prompt: 'Une cada palabra destacada con el trabajo que hace.',
          hint: 'Recuerda: demostrativo = distancia; posesivo = dueño; numeral = cantidad exacta u orden; indefinido = cantidad no exacta.' },
        { leftTitle: 'Expresión', rightTitle: 'Tipo', pairs: [
          { id: 'm1', left: '**este** comal', right: 'Demostrativo: señala' },
          { id: 'm2', left: '**tu** sombrero', right: 'Posesivo: dice de quién es' },
          { id: 'm3', left: '**segunda** fila', right: 'Numeral: indica el orden' },
          { id: 'm4', left: '**pocos** elotes', right: 'Indefinido: cantidad no exacta' },
          { id: 'm5', left: '**una** jícara', right: 'Artículo: presenta al sustantivo' },
        ] },
      ),
      S.highlight(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'hacer',
          prompt: 'En este recado, toca **solo** las palabras **no connotativas** que acompañan a un sustantivo (señalan, cuentan o dicen de quién es). No toques los artículos.',
          explain: 'Mis, estas, dos, nuestra y varios identifican sin caracterizar. "Grandes" y "maduros" son connotativas: dicen cómo son.' },
        { target: 'palabras no connotativas', text: 'Abuelita: le dejo {mis} tortillas en {estas} {dos} servilletas. Los aguacates grandes son de {nuestra} vecina y {varios} mangos maduros son para usted.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'hacer',
          prompt: 'Debes escribir en la etiqueta de una caja **cuántos** frascos hay, **de quién** son y **cómo** son. ¿Qué etiqueta lo logra?',
          explain: '"Seis" (cuántos) y "nuestros" (de quién) son no connotativas; "pequeños" y "llenos de miel" dicen cómo son. Las dos clases de palabras trabajan juntas.' },
        { options: [
          { id: 'a', text: 'Seis frascos pequeños de nuestros abuelos, llenos de miel' },
          { id: 'b', text: 'Frascos bonitos', feedback: 'No dice cuántos ni de quién, y "bonitos" es poco preciso.' },
          { id: 'c', text: 'Esos frascos de allá', feedback: 'Solo señala; no dice cuántos, de quién ni cómo son.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'hacer',
          prompt: 'Escribe **dos oraciones** sobre algo que hay en tu casa. En cada una usa **una palabra no connotativa** (este, mi, dos, algunos…) y **una connotativa** (dice cómo es). Después, escribe entre paréntesis cuál es cuál.' },
        { minWords: 16, placeholder: '1. … (no connotativa: … / connotativa: …)\n2. …',
          model: '1. Mi hamaca azul cuelga en el corredor. (no connotativa: mi / connotativa: azul)\n2. Tenemos tres perros juguetones. (no connotativa: tres / connotativa: juguetones)',
          rubric: [
            'Escribí dos oraciones completas',
            'Cada oración tiene una palabra que señala, cuenta o dice de quién es',
            'Cada oración tiene una palabra que dice cómo es',
            'Identifiqué correctamente cuál es cuál',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.2.2'], prompt: 'En "_Aquel volcán humeante_", ¿qué hace la palabra **aquel**?' },
        { options: [
          { id: 'a', text: 'Señala el volcán que está lejos, sin decir cómo es' },
          { id: 'b', text: 'Dice cómo es el volcán' },
          { id: 'c', text: 'Dice de quién es el volcán' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.2.2'], prompt: 'Clasifica cada palabra.' },
        { buckets: [
          { id: 'no', label: 'No connotativa', icon: 'Pointer', color: 'var(--area-l1)' },
          { id: 'si', label: 'Connotativa', icon: 'Sparkles', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'z1', text: 'muchos', bucket: 'no' },
          { id: 'z2', text: 'arrugado', bucket: 'si' },
          { id: 'z3', text: 'nuestras', bucket: 'no' },
          { id: 'z4', text: 'tibio', bucket: 'si' },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 3 ─────────────────────────────
  lesson({
    id: 's05-l1-3',
    title: 'Describir con precisión un objeto heredado',
    icon: 'NotebookPen',
    minutes: 15,
    gancho: '¿Qué dice más: "una comida buena" o "un caldo espeso y humeante que huele a cilantro"?',
    objetivos: [
      'Cambiar palabras vagas por palabras connotativas precisas',
      'Usar los cinco sentidos para encontrar detalles',
      'Escribir una descripción ordenada de un objeto que tiene historia en la familia',
    ],
    resumen: [
      'Las palabras vagas (bonito, bueno, feo, grande) dicen poco. Las precisas (colorido, sabroso, ronco, caudaloso) pintan una imagen.',
      'Para encontrar detalles, recorre los sentidos: ¿cómo se ve?, ¿cómo suena?, ¿a qué huele?, ¿cómo se siente al tocarlo?, ¿a qué sabe?',
      'Una descripción ordenada va de lo general a los detalles y termina con lo que el objeto significa para ti.',
    ],
    media: {
      id: 's05-l1-3-sentidos', kind: 'diagram', title: 'Describir con los cinco sentidos', aspect: '1:1',
      alt: 'Una tinaja de barro en el centro y, alrededor, cinco íconos (ojo, oído, nariz, mano, lengua) con palabras precisas: rojiza, hueca al golpearla, huele a tierra mojada, fresca y rugosa, el agua sabe fresca.',
      brief: 'Diagrama circular: al centro, ilustración de una tinaja de barro rojizo. Alrededor, cinco círculos con íconos simples de los sentidos (ojo, oreja, nariz, mano, boca) y en cada uno dos palabras connotativas: vista "rojiza, panzona"; oído "suena hueca"; olfato "huele a tierra mojada"; tacto "fresca, rugosa"; gusto "el agua sabe fresca". Colores tierra, letra grande, fondo claro.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'conocer',
          prompt: 'Lee estas dos oraciones sobre el mismo día. ¿Cuál te hace **sentir** que estás ahí?',
          explain: 'La segunda usa palabras precisas y de varios sentidos (vista, oído, tacto). La primera usa palabras vagas: "bonito" puede significar mil cosas.' },
        { options: [
          { id: 'a', text: '"Fue un día bonito en el lago."', icon: 'Waves', feedback: '"Bonito" es una palabra vaga: no sabemos qué lo hizo especial.' },
          { id: 'b', text: '"El lago estaba quieto y verde; se oían los remos de una lancha y el sol calentaba mis brazos."', icon: 'Sun' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'conocer', title: 'Palabras vagas y palabras precisas',
          prompt: 'Una **palabra vaga** sirve para casi todo y por eso dice poco. Una **palabra precisa** dice exactamente cómo es algo. Mira el diagrama y toca cada tarjeta.' },
        { icon: 'Target', body: 'Truco: cuando escribas **bonito, bueno, feo** o **grande**, pregúntate "¿en qué sentido?" y cámbiala por una palabra más exacta.', reveal: [
          { icon: 'Eye', front: 'Vista', back: 'Color, forma, tamaño, brillo: _rojizo, alargado, diminuto, reluciente, desteñido_.' },
          { icon: 'Ear', front: 'Oído', back: 'Sonidos: _ronco, agudo, chirriante, silencioso, retumbante_.' },
          { icon: 'Wind', front: 'Olfato', back: 'Olores: _perfumado, ahumado, rancio_; "huele a leña", "huele a lluvia".' },
          { icon: 'Hand', front: 'Tacto', back: 'Textura y temperatura: _áspero, liso, tibio, helado, pegajoso_.' },
          { icon: 'Utensils', front: 'Gusto', back: 'Sabores: _dulce, salado, amargo, picante, sabroso_.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'hacer',
          prompt: 'Cambia cada palabra vaga por una **precisa**. Une cada expresión con la mejor opción.',
          hint: 'Piensa en qué sentido es "bueno" o "grande": ¿el sabor?, ¿el tamaño?, ¿la fuerza del agua?',
          explain: 'Cada palabra precisa aclara en qué sentido algo era "bueno", "grande" o "feo".' },
        { leftTitle: 'Vaga', rightTitle: 'Precisa', pairs: [
          { id: 'v1', left: 'un pan **bueno**', right: 'un pan esponjoso y tibio' },
          { id: 'v2', left: 'un río **grande**', right: 'un río ancho y caudaloso' },
          { id: 'v3', left: 'una voz **fea**', right: 'una voz ronca' },
          { id: 'v4', left: 'un día **feo**', right: 'un día nublado y lluvioso' },
          { id: 'v5', left: 'una tela **bonita**', right: 'una tela bordada y colorida' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'conocer',
          prompt: 'Esta es una **descripción modelo**. Escúchala o léela y fíjate en **el orden**: cómo empieza, qué detalles da y cómo termina.',
          media: {
            id: 's05-l1-3-piedra-audio', kind: 'audio', title: 'Lectura: La piedra de moler de mi bisabuela', duration: 70,
            alt: 'Voz de una niña que lee la descripción con calma, con sonido suave de fondo de una cocina.',
            brief: 'Audio de 70 s: una niña de unos 12 años lee en español de Guatemala, con ritmo pausado y expresivo, el texto "La piedra de moler de mi bisabuela" tal como aparece en la lección. Fondo muy suave de cocina (leña que cruje), sin música que tape la voz.',
          } },
        { genre: 'Texto descriptivo', heading: 'La piedra de moler de mi bisabuela', passage:
          'En un rincón de la cocina de mi casa está la piedra de moler de mi bisabuela Tomasa. Es una piedra gris, rectangular y tan pesada que se necesitan dos personas para moverla. Descansa sobre tres patas cortas, y por eso queda un poco inclinada hacia adelante.\n\n' +
          'Su superficie es lisa y fresca, pero en el centro tiene una curva suave, como una hamaca: es el hueco que dejaron miles de mañanas de moler maíz. A su lado está la mano de moler, un rodillo de piedra más oscuro, tibio cuando alguien lo acaba de usar.\n\n' +
          'Cuando mi mamá muele, la piedra hace un sonido áspero y rítmico, "shhh, shhh", y la cocina se llena del olor dulce del maíz cocido.\n\n' +
          'Casi nadie la usa ya, porque ahora compramos la masa en el molino. Pero nadie en mi familia quiere regalarla. Para nosotros es como tener a la bisabuela en la cocina, trabajando todavía a nuestro lado.',
          questions: [
            { q: '¿Con qué empieza la descripción?', options: [
              { id: 'a', text: 'Dice qué objeto es, dónde está y cómo es en general' },
              { id: 'b', text: 'Cuenta lo que el objeto significa para la familia' },
              { id: 'c', text: 'Describe el sonido que hace' },
            ], correct: 'a', why: 'Empieza por lo general: qué es (piedra de moler), dónde está (la cocina) y su aspecto general (gris, rectangular, pesada).' },
            { q: '¿Qué detalle es una **particularidad** de esta piedra y no de todas?', options: [
              { id: 'a', text: 'Tiene una curva en el centro por tantos años de moler' },
              { id: 'b', text: 'Es de piedra' },
              { id: 'c', text: 'Sirve para moler' },
            ], correct: 'a', why: 'Todas las piedras de moler son de piedra y sirven para moler; la curva gastada es propia de ESTA piedra.' },
            { q: '¿Qué sentidos usa la autora? Elige la respuesta más completa.', options: [
              { id: 'a', text: 'Vista, tacto, oído y olfato' },
              { id: 'b', text: 'Solo la vista' },
              { id: 'c', text: 'Vista y gusto' },
            ], correct: 'a', why: 'Vista (gris, rectangular), tacto (lisa, fresca, tibio), oído (sonido áspero) y olfato (olor dulce del maíz).' },
            { q: '¿Cómo termina la descripción?', options: [
              { id: 'a', text: 'Con lo que el objeto significa para la familia' },
              { id: 'b', text: 'Con el tamaño de la piedra' },
              { id: 'c', text: 'Con instrucciones para moler' },
            ], correct: 'a', why: 'El cierre expresa el valor del objeto: "es como tener a la bisabuela en la cocina".' },
          ] },
      ),
      S.order(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'hacer',
          prompt: 'Ordena las partes de una **descripción** como la que acabas de leer.',
          hint: 'Se va de lo general a lo particular, y se termina con el sentimiento.',
          explain: 'Presentar el objeto → aspecto general → detalles con los sentidos → historia o uso → lo que significa para ti.' },
        { labels: { start: 'Inicio', end: 'Final' }, items: [
          { id: 'o1', text: 'Presento el objeto: qué es y dónde está' },
          { id: 'o2', text: 'Describo su aspecto general: tamaño, forma, color' },
          { id: 'o3', text: 'Agrego detalles con otros sentidos: textura, sonido, olor' },
          { id: 'o4', text: 'Cuento su historia o cómo se usa' },
          { id: 'o5', text: 'Cierro con lo que significa para mí o mi familia' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'hacer', title: 'Ejemplo resuelto: planificar una descripción',
          prompt: 'Antes de escribir, conviene hacer una **lluvia de palabras**. Mira cómo lo hace Andrés.' },
        { icon: 'ClipboardList', problem: 'Andrés quiere describir el sombrero de palma de su abuelo.',
          steps: [
            { text: '**Vista**: ala ancha, color paja, cinta negra desteñida.' },
            { text: '**Tacto**: fibras ásperas, borde deshilachado.', why: 'Tocarlo (o recordarlo) da palabras que la vista no da.' },
            { text: '**Olfato**: huele a sol y a sudor de trabajo en la milpa.' },
            { text: '**Historia**: el abuelo lo usó más de veinte años en la cosecha.' },
            { text: '**Significado**: cuando Andrés se lo pone, se siente grande y cuidado.' },
          ],
          answer: 'Con esa lista, Andrés solo tiene que ordenar sus ideas: general → detalles → historia → significado.',
          tip: 'Una lista por sentidos evita las palabras vagas: ya tienes las precisas antes de empezar.' },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'hacer',
          prompt: 'Completa la descripción del comal de la tía Ruth con la palabra más **precisa** para cada sentido.',
          explain: 'Negro (vista), tibio (tacto), chisporroteo (oído), ahumado (olfato): cada espacio pedía un sentido distinto.' },
        { text: 'El comal de la tía Ruth está [[negro]] de tanto hollín. Aun apagado, se siente [[tibio]] al tocarlo. Cuando cae una gota de agua, se oye un [[chisporroteo]] y la cocina huele a maíz [[ahumado]].',
          distractors: ['bonito', 'bueno', 'grande'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.2.2'], ambito: 'hacer',
          prompt: 'Escribe la **descripción** de un objeto con historia en tu familia (puede ser el mismo de la lección 1). Sigue el orden: presentación → aspecto general → detalles con al menos **tres sentidos** → historia → lo que significa. Evita "bonito", "bueno", "feo" y "grande".' },
        { minWords: 70, placeholder: 'En mi casa hay…',
          model: 'En la pared de la sala de mi casa cuelga el sombrero de palma de mi abuelo Chepe. Es de ala ancha y color paja, con una cinta negra que ya está desteñida. Sus fibras son ásperas y el borde está un poco deshilachado. Si lo acercas a la nariz, todavía huele a sol y a tierra de la milpa. Mi abuelo lo usó más de veinte años para cosechar maíz y frijol. Cuando me lo pongo, me queda flojo y me tapa los ojos, pero me siento grande y protegido, como si él me estuviera cuidando.',
          rubric: [
            'Seguí el orden: presentación, aspecto general, detalles, historia y significado',
            'Usé al menos tres sentidos',
            'Cambié las palabras vagas por palabras precisas',
            'Incluí una particularidad que hace único al objeto',
            'Revisé mayúsculas y puntos',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.2.2'], prompt: '¿Cuál expresión es la más **precisa**?' },
        { options: [
          { id: 'a', text: 'Un atol espeso y tibio con sabor a canela' },
          { id: 'b', text: 'Un atol bueno' },
          { id: 'c', text: 'Un atol muy rico y bonito' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.2.2'], prompt: 'Une cada palabra precisa con el sentido que describe.' },
        { leftTitle: 'Palabra', rightTitle: 'Sentido', pairs: [
          { id: 'c1', left: 'chirriante', right: 'Oído' },
          { id: 'c2', left: 'pegajoso', right: 'Tacto' },
          { id: 'c3', left: 'amargo', right: 'Gusto' },
          { id: 'c4', left: 'desteñido', right: 'Vista' },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 4 ─────────────────────────────
  lesson({
    id: 's05-l1-4',
    title: 'El género de las palabras: masculino y femenino',
    icon: 'Users',
    minutes: 14,
    gancho: 'Se dice "el mapa" aunque termina en -a, y "la mano" aunque termina en -o. ¿Entonces cómo sabemos el género de una palabra?',
    objetivos: [
      'Reconocer el género masculino y femenino de los sustantivos',
      'Formar el femenino de los sustantivos de distintas maneras',
      'Hacer concordar en género el artículo, el sustantivo y el adjetivo',
    ],
    resumen: [
      'Todo sustantivo en español tiene género: masculino (el, un) o femenino (la, una). El artículo es la mejor pista: el mapa, la mano.',
      'El femenino se forma cambiando la terminación (niño/niña, doctor/doctora, alcalde/alcaldesa, rey/reina), con una palabra distinta (padre/madre, caballo/yegua) o solo cambiando el artículo (el estudiante/la estudiante).',
      'Concordancia de género: el artículo y los adjetivos toman el mismo género que el sustantivo: la mano derecha, el mapa antiguo.',
      'Palabras femeninas que empiezan con "a" tónica llevan "el" en singular, pero siguen siendo femeninas: el agua fría, el águila blanca.',
    ],
    media: {
      id: 's05-l1-4-genero', kind: 'diagram', title: 'Cuatro formas de hacer el femenino', aspect: '16:9',
      alt: 'Cuadro de cuatro columnas con ejemplos: cambia la terminación (niño-niña, profesor-profesora), terminación especial (alcalde-alcaldesa, actor-actriz, gallo-gallina), palabra distinta (padre-madre, toro-vaca) y solo cambia el artículo (el estudiante-la estudiante).',
      brief: 'Infografía horizontal en cuatro columnas de colores, cada una con un título y dos o tres pares de dibujos sencillos con su palabra: 1) "Cambia la terminación": niño/niña, profesor/profesora. 2) "Terminación especial": alcalde/alcaldesa, actor/actriz, gallo/gallina. 3) "Palabra distinta": padre/madre, toro/vaca. 4) "Solo cambia el artículo": el estudiante/la estudiante, el artista/la artista. Personajes diversos (maya, garífuna, ladino), sin estereotipos. Letra grande.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'conocer',
          prompt: '¿Cuál expresión está **bien dicha**?',
          explain: '"Mapa" es masculino aunque termine en -a: se dice **el mapa antiguo**. La terminación no siempre indica el género; el artículo sí.' },
        { options: [
          { id: 'a', text: 'el mapa antiguo', icon: 'Map' },
          { id: 'b', text: 'la mapa antigua', icon: 'Map', feedback: 'Suena raro, ¿verdad? "Mapa" es masculino: el mapa.' },
          { id: 'c', text: 'el mapa antigua', icon: 'Map', feedback: 'El artículo y el adjetivo deben tener el mismo género: el mapa antigu**o**.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'conocer', title: '¿Qué es el género?',
          prompt: 'En español, **todos los sustantivos** tienen género: **masculino** o **femenino**. Toca cada tarjeta.' },
        { icon: 'Users', body: 'En las cosas, el género es una marca **de la palabra**, no del objeto: la mesa no es "mujer" ni el lápiz es "hombre".', reveal: [
          { icon: 'Type', front: 'La pista del artículo', back: 'Pon **el** o **la** delante: _el sombrero, la milpa, el día, la mano_. El artículo que suena bien te dice el género.' },
          { icon: 'AlertTriangle', front: 'Terminaciones engañosas', back: 'Muchas palabras en **-o** son masculinas y en **-a** femeninas, pero no todas: _el mapa, el día, el problema, el tema, la mano, la radio_.' },
          { icon: 'Droplet', front: 'El agua, el águila', back: 'Las palabras femeninas que empiezan con **a** o **ha** tónica usan **el** en singular para que suene mejor: _el agua, el águila, el hacha_. Pero siguen siendo **femeninas**: el agua **fría**, las aguas **limpias**.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'conocer', title: 'Cómo se forma el femenino',
          prompt: 'Cuando un sustantivo nombra personas o animales, suele tener forma masculina y femenina. Observa el diagrama y toca cada tarjeta.' },
        { icon: 'Shuffle', body: 'Hay cuatro caminos. Si dudas, consulta el diccionario.', reveal: [
          { icon: 'RefreshCw', front: 'Cambia la terminación', back: '-o → -a: _niño/niña, abuelo/abuela_. Consonante + a: _profesor/profesora, doctor/doctora_. También _presidente/presidenta_.' },
          { icon: 'Sparkles', front: 'Terminación especial', back: '_alcalde/alcaldesa, actor/actriz, rey/reina, gallo/gallina, héroe/heroína_.' },
          { icon: 'Repeat', front: 'Palabra distinta', back: '_padre/madre, hombre/mujer, yerno/nuera, caballo/yegua, toro/vaca_.' },
          { icon: 'Type', front: 'Solo cambia el artículo', back: '_el/la estudiante, el/la artista, el/la joven, el/la guía_. La palabra es igual; el artículo y los adjetivos muestran el género: "la estudiante aplicad**a**".' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto: cambiar una oración a femenino',
          prompt: 'Cuando cambias el género de un sustantivo, **todo lo que lo acompaña** debe cambiar también. Míralo.' },
        { icon: 'RefreshCw', problem: 'Cambia a femenino: "**El nuevo alcalde** saludó a **los artistas invitados**." (Todos los artistas invitados son mujeres).',
          steps: [
            { text: '_alcalde_ tiene terminación especial → **alcaldesa**.' },
            { text: 'Lo que acompaña a alcaldesa cambia: _el nuevo_ → **la nueva**.', why: 'El artículo y el adjetivo concuerdan con el sustantivo.' },
            { text: '_artistas_ no cambia de forma (solo el artículo): **las artistas**.' },
            { text: 'El adjetivo concuerda: _invitados_ → **invitadas**.' },
          ],
          answer: '"**La nueva alcaldesa** saludó a **las artistas invitadas**."',
          tip: 'Busca el sustantivo y luego revisa su "familia": artículo, adjetivos y participios (invitado, elegido…).' },
      ),
      S.match(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'hacer', prompt: 'Une cada masculino con su femenino.',
          hint: 'Algunos cambian la terminación y otros son palabras distintas.' },
        { leftTitle: 'Masculino', rightTitle: 'Femenino', pairs: [
          { id: 'g1', left: 'el yerno', right: 'la nuera' },
          { id: 'g2', left: 'el actor', right: 'la actriz' },
          { id: 'g3', left: 'el gallo', right: 'la gallina' },
          { id: 'g4', left: 'el caballo', right: 'la yegua' },
          { id: 'g5', left: 'el héroe', right: 'la heroína' },
          { id: 'g6', left: 'el tejedor', right: 'la tejedora' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'hacer', prompt: '¿Cómo se forma el femenino de cada palabra?',
          explain: 'Guía y testigo no cambian: solo el artículo. Padre y toro cambian de palabra. Maestro y señor cambian la terminación.' },
        { buckets: [
          { id: 'term', label: 'Cambia la terminación', icon: 'RefreshCw', color: 'var(--area-l1)' },
          { id: 'dist', label: 'Palabra distinta', icon: 'Repeat', color: 'var(--c-maiz-strong)' },
          { id: 'art', label: 'Solo cambia el artículo', icon: 'Type', color: 'var(--c-ok)' },
        ], items: [
          { id: 's1', text: 'maestro', bucket: 'term' },
          { id: 's2', text: 'padre', bucket: 'dist' },
          { id: 's3', text: 'guía', bucket: 'art' },
          { id: 's4', text: 'señor', bucket: 'term' },
          { id: 's5', text: 'toro', bucket: 'dist' },
          { id: 's6', text: 'testigo', bucket: 'art', feedback: 'Se dice "el testigo" y "la testigo": solo cambia el artículo.' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'hacer',
          prompt: 'Completa el texto con la forma que **concuerda en género** con el sustantivo.',
          explain: 'El agua es femenina: "fría". La mano es femenina: "arrugada". El mapa y el día son masculinos: "viejo", "soleado". La guía (mujer): "amable".' },
        { text: 'Mi abuela lava el maíz con el agua [[fría]] del nacimiento. Con la mano [[arrugada]] me muestra un mapa [[viejo]] de la aldea. Era un día [[soleado]] y la guía del grupo, muy [[amable]], nos esperaba.',
          distractors: ['frío', 'arrugado', 'vieja', 'soleada'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'hacer',
          prompt: 'Una de estas oraciones tiene un **error de concordancia de género**. ¿Cuál?',
          explain: '"Problema" es masculino: se dice "**un** problema **serio**". Las otras oraciones concuerdan bien.' },
        { options: [
          { id: 'a', text: 'Tenemos una problema seria con el agua.' },
          { id: 'b', text: 'El águila blanca voló sobre el cerro.', feedback: 'Está bien: "águila" es femenina aunque lleve "el"; por eso "blanca".' },
          { id: 'c', text: 'La joven artista pintó un mural.', feedback: 'Está bien: "joven" y "artista" usan el artículo para marcar el femenino.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.1.2'], prompt: '¿Cuál es el femenino de "**el rey**"?' },
        { options: [
          { id: 'a', text: 'la reina' },
          { id: 'b', text: 'la reya' },
          { id: 'c', text: 'la rey' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.1.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: '"El día" es masculino aunque termine en -a.', answer: true },
          { text: 'Se escribe "el agua frío" porque el artículo es "el".', answer: false, why: '"Agua" es femenina: el agua fría.' },
          { text: 'En "la estudiante", el género se nota por el artículo.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 5 ─────────────────────────────
  lesson({
    id: 's05-l1-5',
    title: 'El número de las palabras y la concordancia',
    icon: 'Layers',
    minutes: 15,
    gancho: 'Un lápiz, dos… ¿lápizes o lápices? Hoy descubrirás las reglas que ordenan el plural.',
    objetivos: [
      'Formar el plural de los sustantivos según su terminación',
      'Escribir bien la tilde al pasar palabras al plural',
      'Hacer concordar en número todas las palabras de una oración',
    ],
    resumen: [
      'Singular = uno; plural = varios. Termina en vocal sin tilde → + s (casa, casas). Termina en consonante → + es (árbol, árboles). Termina en z → cambia a c + es (lápiz, lápices).',
      'Las palabras en -s o -x sin acento en la última sílaba no cambian: el lunes/los lunes, la crisis/las crisis.',
      'Al pasar al plural la tilde puede cambiar: joven → jóvenes, examen → exámenes, canción → canciones.',
      'Concordancia: artículo, sustantivo, adjetivo y verbo van en el mismo número. Si juntas un masculino y un femenino, el adjetivo va en masculino plural: el poncho y la faja son nuevos.',
    ],
    media: {
      id: 's05-l1-5-plural', kind: 'animation', title: 'Del singular al plural', aspect: '16:9', duration: 45,
      alt: 'Palabras que se multiplican: casa se vuelve casas, árbol árboles, lápiz lápices; la z se transforma en c. Luego joven gana una tilde y canción la pierde.',
      brief: 'Animación tipográfica de 45 s. Cada palabra aparece en singular con un dibujo, luego el dibujo se multiplica y la palabra cambia: casa → casas (+s en verde), árbol → árboles (+es en azul), lápiz → lápices (la z se transforma en c, en naranja). Después: joven → jóvenes (aparece la tilde con brillo), canción → canciones (la tilde se desvanece). Cierre: "el lunes / los lunes" sin cambio. Narración en español y subtítulos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'conocer',
          prompt: '¿Cuál es el plural correcto de **lápiz**?',
          explain: 'Las palabras que terminan en **z** cambian la z por **c** y agregan **-es**: lápiz → lápi**ces**. Igual: luz → luces, nariz → narices.' },
        { options: [
          { id: 'a', text: 'lápizes', feedback: 'En español casi nunca se escribe z antes de e: la z cambia a c.' },
          { id: 'b', text: 'lápices' },
          { id: 'c', text: 'lápizs', feedback: 'Después de consonante se agrega -es, y además la z cambia a c.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'conocer', title: 'Reglas para formar el plural',
          prompt: 'El **número** indica si hablamos de **uno** (singular) o de **varios** (plural). Toca cada tarjeta.' },
        { icon: 'Layers', body: 'Fíjate siempre en **cómo termina** la palabra en singular.', reveal: [
          { icon: 'Plus', front: 'Vocal sin tilde → + s', back: '_casa → casas, tortilla → tortillas, milpa → milpas, cerro → cerros, tomate → tomates_.' },
          { icon: 'Plus', front: 'Consonante → + es', back: '_árbol → árboles, reloj → relojes, pared → paredes, flor → flores, tamal → tamales_.' },
          { icon: 'RefreshCw', front: 'Termina en z → ces', back: '_lápiz → lápices, luz → luces, nariz → narices, maíz → maíces_.' },
          { icon: 'Star', front: 'Vocal con tilde', back: 'á, é, ó → + s: _sofá → sofás, café → cafés, dominó → dominós_. í, ú → + es (o + s): _colibrí → colibríes, bambú → bambúes_.' },
          { icon: 'Lock', front: 'No cambian', back: 'Palabras en **-s** o **-x** sin acento en la última sílaba: _el lunes → los lunes, la crisis → las crisis, el tórax → los tórax_. Solo cambia el artículo.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'conocer', title: 'Cuidado con la tilde y con la concordancia',
          prompt: 'Al agregar una sílaba, la palabra cambia de lugar su acento… y a veces gana o pierde la tilde. Toca cada tarjeta.' },
        { icon: 'AlertTriangle', body: 'La sílaba que suena más fuerte **no cambia**; lo que cambia es si necesita tilde según las reglas de acentuación.', reveal: [
          { icon: 'Plus', front: 'Ganan tilde', back: '_joven → jóvenes, examen → exámenes, origen → orígenes_. Al crecer, se vuelven esdrújulas y **todas las esdrújulas llevan tilde**.' },
          { icon: 'Minus', front: 'Pierden tilde', back: '_canción → canciones, camión → camiones, francés → franceses_. Al crecer, se vuelven graves terminadas en -s, que no llevan tilde.' },
          { icon: 'Link', front: 'Concordancia de número', back: 'Artículo, sustantivo, adjetivo y verbo van en el mismo número: "**Las** tortilla**s** calient**es** se **acabaron**".' },
          { icon: 'Users', front: 'Masculino + femenino', back: 'Si el adjetivo se refiere a un masculino y a un femenino juntos, va en **masculino plural**: "el poncho y la faja son **nuevos**".' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto: pasar una oración a plural',
          prompt: 'Mira cómo cambia **cada** palabra que concuerda.' },
        { icon: 'Layers', problem: 'Pasa a plural: "**El joven músico tocó una canción alegre.**"',
          steps: [
            { text: '_El_ → **Los**; _joven_ → **jóvenes** (gana tilde: jó-ve-nes es esdrújula).' },
            { text: '_músico_ termina en vocal → **músicos**.' },
            { text: 'El verbo concuerda con el sujeto: _tocó_ → **tocaron**.', why: 'Si son varios los que tocan, el verbo también va en plural.' },
            { text: '_una canción_ → **unas canciones** (pierde tilde: can-cio-nes es grave terminada en s).' },
            { text: '_alegre_ termina en vocal → **alegres**.' },
          ],
          answer: '"**Los jóvenes músicos tocaron unas canciones alegres.**"',
          tip: 'Al terminar, lee la oración en voz alta: si una palabra "suena sola", no concuerda.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.1.2'], prompt: '¿Cómo se forma el plural de cada palabra?',
          hint: 'Mira la última letra: ¿vocal, consonante o z? Y recuerda las palabras que terminan en -s sin acento en la última sílaba.' },
        { buckets: [
          { id: 's', label: '+ s', icon: 'Plus', color: 'var(--c-ok)' },
          { id: 'es', label: '+ es', icon: 'Plus', color: 'var(--area-l1)' },
          { id: 'ces', label: 'z → ces', icon: 'RefreshCw', color: 'var(--c-maiz-strong)' },
          { id: 'igual', label: 'No cambia', icon: 'Lock', color: 'var(--area-art)' },
        ], items: [
          { id: 'p1', text: 'güipil', bucket: 'es' },
          { id: 'p2', text: 'jícara', bucket: 's' },
          { id: 'p3', text: 'cruz', bucket: 'ces' },
          { id: 'p4', text: 'martes', bucket: 'igual', feedback: 'El martes → los martes: termina en -s y el acento no va en la última sílaba.' },
          { id: 'p5', text: 'volcán', bucket: 'es', feedback: 'Volcán → volcanes (y pierde la tilde).' },
          { id: 'p6', text: 'café', bucket: 's' },
          { id: 'p7', text: 'nuez', bucket: 'ces' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'hacer',
          prompt: 'Escribe el plural correcto. ¡Ojo con las tildes!',
          explain: 'Jóvenes y exámenes ganan tilde (esdrújulas). Canciones y corazones la pierden (graves terminadas en -s). Lápices cambia z por c.' },
        { text: 'un joven → dos [[jóvenes]] · un examen → tres [[exámenes]] · una canción → muchas [[canciones]] · un lápiz → cinco [[lápices]] · un corazón → dos [[corazones]]',
          distractors: ['jovenes', 'examenes', 'canciónes', 'lápizes', 'corazónes'] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'hacer',
          prompt: 'Keila escribió esta nota para el periódico escolar, pero tiene **errores de concordancia**. Léela con ojos de editora y responde.' },
        { genre: 'Nota informativa (borrador)', heading: 'Feria de las herencias en sexto grado', passage:
          'El viernes, las familias de sexto grado trajeron a la escuela objetos antiguos que guardan en sus casas. Había ollas de barro, un telar de cintura y varias fotografías en blanco y negro.\n\n' +
          'Don Efraín mostró unas herramientas oxidado que usaba su padre para trabajar la madera. La señora Marta llevó un güipil y una faja tejidos por su abuela, y explicó que los colores tienen significados especiales para su familia.\n\n' +
          'Los estudiantes escribió fichas para cada objeto. Al final, todos coincidieron en que las cosas viejas también cuentan historias.',
          questions: [
            { q: '¿Qué error hay en "unas herramientas oxidado"?', options: [
              { id: 'a', text: 'El adjetivo debe ir en femenino plural: oxidadas' },
              { id: 'b', text: 'Debe decir "unos herramientas"' },
              { id: 'c', text: 'No hay error' },
            ], correct: 'a', why: '"Herramientas" es femenino plural, así que el adjetivo también: herramientas oxidadas.' },
            { q: '¿Cómo se corrige "Los estudiantes escribió"?', options: [
              { id: 'a', text: 'Los estudiantes escribieron' },
              { id: 'b', text: 'El estudiantes escribió' },
              { id: 'c', text: 'Los estudiante escribió' },
            ], correct: 'a', why: 'El sujeto es plural (los estudiantes), así que el verbo va en plural: escribieron.' },
            { q: '¿Por qué está bien "un güipil y una faja tejidos"?', options: [
              { id: 'a', text: 'Porque cuando un adjetivo se refiere a un masculino y un femenino juntos, va en masculino plural' },
              { id: 'b', text: 'Porque "faja" es masculino' },
              { id: 'c', text: 'Está mal: debería decir "tejidas"' },
            ], correct: 'a', why: 'Güipil (masculino) + faja (femenino) → tejidos (masculino plural).' },
          ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.1.2', 'l1:5.2.2'], ambito: 'hacer',
          prompt: 'Toma **dos oraciones** de la descripción que escribiste en la lección 3 y pásalas a **plural** (imagina que tu familia tiene varios de esos objetos). Revisa artículos, sustantivos, adjetivos, verbos y tildes.' },
        { minWords: 20, placeholder: 'Singular: …\nPlural: …',
          model: 'Singular: El sombrero de palma es de ala ancha y tiene una cinta negra desteñida.\nPlural: Los sombreros de palma son de ala ancha y tienen unas cintas negras desteñidas.',
          rubric: [
            'Cambié a plural todos los artículos y sustantivos',
            'Los adjetivos concuerdan en género y número',
            'Los verbos concuerdan con el sujeto',
            'Revisé las tildes que cambian en plural',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.1.2'], prompt: '¿Qué oración tiene **concordancia correcta**?' },
        { options: [
          { id: 'a', text: 'Las jícaras pintadas estaban sobre la mesa.' },
          { id: 'b', text: 'Las jícaras pintada estaba sobre la mesa.' },
          { id: 'c', text: 'La jícaras pintadas estaban sobre la mesa.' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.1.2'], prompt: 'Completa con el plural correcto.' },
        { text: 'una luz → varias [[luces]] · un origen → muchos [[orígenes]] · el lunes → los [[lunes]] · un camión → dos [[camiones]]',
          distractors: ['luzes', 'origenes', 'luneses', 'camiónes'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l1'], cnb: [], ambito: 'ser', prompt: '¿Cómo te fue esta semana con las palabras?' },
        { statements: [
          'Distingo palabras connotativas y no connotativas',
          'Describo un objeto con palabras precisas y varios sentidos',
          'Formo el femenino y el plural de las palabras',
          'Reviso la concordancia de mis textos',
        ], commitments: [
          'Leeré mi descripción a alguien de mi familia y le preguntaré la historia del objeto',
          'Cuando escriba "bonito" o "bueno", buscaré una palabra más precisa',
          'Revisaré la concordancia de género y número antes de entregar un texto',
        ] },
      ),
    ],
  }),
];
