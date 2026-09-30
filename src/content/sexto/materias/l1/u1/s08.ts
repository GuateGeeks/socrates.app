/**
 * Comunicación y Lenguaje L1 · Unidad 1 · Semana 8
 * Hilo de la semana: investigar con honestidad y comunicar lo aprendido. Cierra la
 * mini-investigación de la unidad: honestidad intelectual con datos, fuentes y citas; citar y
 * parafrasear; tomar notas; escribir el borrador del informe y llevarlo, mediante revisión,
 * corrección y edición, a su redacción final. La última lección repasa en espiral la unidad.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's08-l1-1',
    title: 'Honestidad intelectual: datos, fuentes y citas',
    icon: 'ShieldCheck',
    minutes: 14,
    gancho: 'Si copias un texto de otra persona y le pones tu nombre, ¿de quién es realmente ese trabajo?',
    objetivos: [
      'Explicar qué es la honestidad intelectual y por qué importa',
      'Reconocer el plagio y la invención o alteración de datos',
      'Tomar decisiones honestas al usar información de otros',
    ],
    resumen: [
      'Honestidad intelectual es decir la verdad sobre de dónde viene lo que sabes y lo que escribes.',
      'Tres compromisos: 1) no presentar como tuyo lo que escribió otra persona (plagio), 2) no inventar ni cambiar datos, 3) decir siempre de dónde tomaste la información (citar la fuente).',
      'Usar ideas de otros está bien, y es parte de investigar, siempre que digas de quién son.',
      'La honestidad hace que los demás confíen en tu trabajo y te permite aprender de verdad.',
    ],
    media: {
      id: 's08-l1-1-honestidad', kind: 'image', title: 'Tres compromisos honestos', aspect: '16:9',
      alt: 'Tres paneles: una niña escribe con sus propias palabras junto a un libro abierto; un niño anota en una tabla los datos reales de una encuesta; una niña escribe al final de su informe la lista de fuentes.',
      brief: 'Ilustración en tres paneles con estilo de cómic suave. Panel 1 "Escribo con mis palabras": niña que lee un libro y escribe en su cuaderno. Panel 2 "No invento datos": niño que anota con cuidado los resultados de una encuesta en una tabla, aunque no son los que esperaba (cara pensativa). Panel 3 "Digo de dónde lo saqué": niña que escribe "Fuentes:" al final de su informe. Personajes diversos de Guatemala, fondo de aula.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'ser',
          prompt: 'Andrea encontró en un libro un párrafo perfecto para su informe. ¿Qué es lo **más honesto**?',
          explain: 'Usar información de otros es parte de investigar. Lo deshonesto es hacerla pasar por tuya. Andrea puede explicarla con sus palabras y decir de qué libro la tomó.' },
        { options: [
          { id: 'a', text: 'Explicar la idea con sus palabras y escribir de qué libro la tomó', icon: 'PenLine' },
          { id: 'b', text: 'Copiarlo tal cual sin decir de dónde es', icon: 'Copy', feedback: 'Eso es presentar como propio el trabajo de otra persona.' },
          { id: 'c', text: 'Cambiar dos palabras para que no se note', icon: 'EyeOff', feedback: 'Cambiar unas palabras no lo vuelve tuyo: sigue siendo copiar sin reconocer al autor.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'ser', title: '¿Qué es la honestidad intelectual?',
          prompt: 'La **honestidad intelectual** es decir la verdad sobre **de dónde viene** lo que sabes y lo que escribes. Mira la imagen y toca cada tarjeta.' },
        { icon: 'ShieldCheck', body: 'Investigar es como una conversación con otras personas que saben: honrarlas es decir sus nombres.', reveal: [
          { icon: 'Copy', front: '1. No plagiar', back: '**Plagio** es presentar como propio lo que escribió, dibujó o descubrió otra persona. Copiar y pegar sin decir de dónde es, es plagio.' },
          { icon: 'BarChart3', front: '2. No inventar ni cambiar datos', back: 'Si tu encuesta dio 12 respuestas, escribes 12, aunque esperabas 20. Inventar o "arreglar" datos engaña a quien lee.' },
          { icon: 'Quote', front: '3. Citar la fuente', back: 'Cada vez que uses información de otra persona o de un libro, **di de dónde la tomaste**: en el texto y en la lista de fuentes.' },
          { icon: 'Heart', front: '¿Por qué importa?', back: 'Respetas el trabajo de otros, los demás pueden **confiar** en ti y, sobre todo, **aprendes** de verdad: copiar no deja nada en tu cabeza.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'ser',
          prompt: 'Lee lo que le pasó a Diego y responde.' },
        { genre: 'Relato', heading: 'Los números de Diego', passage:
          'Diego y su grupo investigaban cuántas familias de su cuadra separan la basura. Preguntaron casa por casa y anotaron las respuestas: de 25 familias, solo 6 separaban la basura.\n\n' +
          '—Seis es muy poquito —dijo Diego—. Si ponemos 20, el cartel se va a ver mejor y la maestra nos va a felicitar.\n\n' +
          'Karla no estuvo de acuerdo:\n\n' +
          '—Si cambiamos el número, el cartel dirá una mentira. Y además, el dato real es importante: muestra que hay que hacer algo.\n\n' +
          'El grupo escribió el dato verdadero: 6 de 25 familias. Debajo agregaron una propuesta: repartir hojas con consejos para separar la basura. Cuando presentaron, la directora les pidió copias del cartel para llevarlas a la reunión de padres. "Gracias a su investigación", dijo, "sabemos que tenemos trabajo por hacer".\n\n' +
          'Diego sonrió. Entendió que un dato honesto, aunque no sea el que uno quiere, puede ser el que más ayuda.',
          questions: [
            { q: '¿Cuántas familias separaban la basura, según la investigación?', options: [
              { id: 'a', text: '6 de 25' }, { id: 'b', text: '20 de 25' }, { id: 'c', text: '25 de 25' },
            ], correct: 'a', why: 'Es el dato real que anotaron al preguntar casa por casa.' },
            { q: '¿Qué quería hacer Diego con el dato?', options: [
              { id: 'a', text: 'Cambiarlo por un número mayor para que el cartel se viera mejor' },
              { id: 'b', text: 'Borrarlo del cartel' },
              { id: 'c', text: 'Preguntar a más familias' },
            ], correct: 'a', why: 'Diego propuso poner 20 en lugar de 6: eso es alterar un dato.' },
            { q: '¿Por qué fue útil que el grupo usara el dato verdadero?', options: [
              { id: 'a', text: 'Porque mostró un problema real y la escuela pudo actuar' },
              { id: 'b', text: 'Porque así el cartel se veía más bonito' },
              { id: 'c', text: 'Porque la maestra no revisa los datos' },
            ], correct: 'a', why: 'La directora usó el dato para trabajar con los padres: un dato falso habría escondido el problema.' },
          ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'hacer', title: 'Ejemplo resuelto: la prueba de honestidad',
          prompt: 'Antes de entregar, Sofía revisa su texto con tres preguntas.' },
        { icon: 'ClipboardCheck', problem: 'Párrafo de Sofía: "El agua de la escuela viene de un nacimiento en el cerro. Según don Rafael, el conserje, el tanque se limpia cada tres meses. El agua potable es aquella que se puede beber sin riesgo para la salud."',
          steps: [
            { text: '**¿Son mis palabras?** La primera oración sí. La tercera la copió del libro de Ciencias.', why: 'Si una oración es igual a la del libro, no es tuya.' },
            { text: '**¿Dije de dónde saqué cada dato?** El dato de la limpieza sí ("según don Rafael"). La definición del libro, no.' },
            { text: '**¿Mis datos son los reales?** Sí: anotó "cada tres meses", tal como dijo don Rafael.' },
            { text: 'Corrige la tercera oración: la pone entre comillas y agrega la fuente: _Según el libro de Ciencias Naturales 6, "el agua potable es aquella que se puede beber sin riesgo para la salud"._' },
          ],
          answer: 'Ahora el párrafo es honesto: dice qué ideas son de Sofía, cuáles del conserje y cuáles del libro.',
          tip: 'Tres preguntas: ¿son mis palabras?, ¿dije de dónde viene?, ¿el dato es el real?' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'ser', prompt: 'Clasifica cada acción: ¿es **honesta** o **deshonesta**?',
          hint: 'Aplica los tres compromisos: no copiar como propio, no inventar datos, decir de dónde viene.' },
        { buckets: [
          { id: 'hon', label: 'Honesta', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          { id: 'des', label: 'Deshonesta', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'h1', text: 'Escribir la lista de fuentes al final del informe', bucket: 'hon' },
          { id: 'h2', text: 'Copiar y pegar un texto de internet con mi nombre', bucket: 'des' },
          { id: 'h3', text: 'Poner entre comillas una frase de un libro y decir de cuál es', bucket: 'hon' },
          { id: 'h4', text: 'Inventar la respuesta de una entrevista que no hice', bucket: 'des' },
          { id: 'h5', text: 'Explicar con mis palabras lo que leí y nombrar la fuente', bucket: 'hon' },
          { id: 'h6', text: 'Redondear 18 respuestas a "casi todos" cuando eran 18 de 40', bucket: 'des', feedback: '18 de 40 es menos de la mitad: decir "casi todos" cambia el sentido del dato.' },
        ] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['l1', 'fc'], cnb: ['l1:8.2.4'], ambito: 'ser', prompt: '¿Qué harías tú?' },
        { scene: { icon: 'Laptop', text: 'Es de noche y el informe es para mañana. En internet encuentras un texto perfecto sobre el tema. Tu compañero **Óscar** dice: "Cópialo y pégalo, nadie se va a dar cuenta".' }, options: [
          { id: 'a', icon: 'Copy', text: 'Copiarlo completo y ponerle mi nombre', consequence: 'La maestra reconoce el texto. Pierdes la confianza del grado y no aprendiste nada.', values: ['deshonestidad'], constructive: false },
          { id: 'b', icon: 'PenLine', text: 'Leerlo, escribir las ideas con mis palabras y anotar de dónde las saqué', consequence: 'Tu informe es más sencillo, pero es tuyo y es honesto. La maestra valora que citaste la fuente.', values: ['honestidad intelectual', 'responsabilidad'], constructive: true },
          { id: 'c', icon: 'Quote', text: 'Copiar solo una frase importante entre comillas, con el nombre del autor y del sitio', consequence: 'Usaste bien una cita: dejaste claro que esas palabras no son tuyas.', values: ['honestidad intelectual', 'respeto al trabajo de otros'], constructive: true },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'ser',
          prompt: 'En tu entrevista, la señora Marta no recordó en qué año se construyó el tanque de agua. ¿Qué escribes en tu informe?',
          explain: 'Si un dato no se sabe, se dice con honestidad y, si es posible, se busca en otra fuente. Inventar un año, aunque "parezca", es alterar la información.' },
        { options: [
          { id: 'a', text: '"La señora Marta no recordó el año; lo consultaré en la municipalidad."' },
          { id: 'b', text: 'Un año que parezca creíble, como 1985', feedback: 'Sería un dato inventado: quien lea creerá algo que no sabes.' },
          { id: 'c', text: '"El tanque se construyó hace muchísimos siglos."', feedback: 'Es una exageración sin fuente.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.4'], prompt: '¿Qué es el **plagio**?' },
        { options: [
          { id: 'a', text: 'Presentar como propio lo que escribió o hizo otra persona' },
          { id: 'b', text: 'Escribir la lista de fuentes' },
          { id: 'c', text: 'Explicar una idea con tus palabras y decir de quién es' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.4'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Usar ideas de otras personas está bien si dices de quién son.', answer: true },
          { text: 'Si un dato no me gusta, puedo cambiarlo un poco.', answer: false, why: 'Cambiar datos es deshonesto: el dato real es el que se escribe.' },
          { text: 'La honestidad intelectual ayuda a que los demás confíen en tu trabajo.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's08-l1-2',
    title: 'Citar y parafrasear',
    icon: 'Quote',
    minutes: 15,
    gancho: 'Hay dos formas honestas de usar lo que dijo otra persona: con sus palabras exactas o con las tuyas. ¿Sabes cuándo usar cada una?',
    objetivos: [
      'Escribir una cita textual con comillas y fuente',
      'Parafrasear una idea con palabras propias sin cambiar su sentido',
      'Escribir la lista de fuentes de un informe',
    ],
    resumen: [
      'Cita textual: copias las palabras exactas entre comillas y dices de quién son. Úsala para frases cortas e importantes.',
      'Paráfrasis: explicas la idea con tus propias palabras y dices de dónde la tomaste. Es la forma más usada en un informe.',
      'Para parafrasear: lee, cierra el libro, escribe lo que entendiste y compara para no cambiar el sentido.',
      'Lista de fuentes (al final): autor, año, título y editorial o sitio de cada fuente usada, en orden alfabético.',
    ],
    media: {
      id: 's08-l1-2-citar', kind: 'animation', title: 'Cita o paráfrasis', aspect: '16:9', duration: 50,
      alt: 'Una frase de un libro se copia entre comillas con una etiqueta de la fuente (cita textual); luego la misma idea se transforma en otras palabras con la etiqueta "Según…" (paráfrasis).',
      brief: 'Animación tipográfica de 50 s. Arriba, un libro abierto con la frase resaltada: "En las hidroeléctricas, la fuerza del agua de los ríos hace girar unas máquinas llamadas turbinas." Camino 1 (izquierda): la frase viaja igual al cuaderno, aparecen comillas grandes y una etiqueta "(Ciencias Naturales 6)". Título: CITA TEXTUAL. Camino 2 (derecha): el libro se cierra, la frase se desarma y se rearma: "Según el libro de Ciencias Naturales 6, las hidroeléctricas usan el movimiento del agua de los ríos para mover turbinas." Título: PARÁFRASIS. Narración en español, subtítulos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'conocer',
          prompt: '¿Para qué sirven las **comillas** (" ") en un informe?',
          explain: 'Las comillas avisan: "estas palabras exactas no son mías". Junto con el nombre de la fuente, forman una **cita textual**.' },
        { options: [
          { id: 'a', text: 'Para mostrar que esas palabras exactas son de otra persona', icon: 'Quote' },
          { id: 'b', text: 'Para decorar el texto', icon: 'Sparkles', feedback: 'Las comillas tienen una función: marcar palabras ajenas.' },
          { id: 'c', text: 'Para que el texto se vea más largo', icon: 'AlignJustify', feedback: 'No: marcan que esas palabras no son tuyas.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'conocer', title: 'Dos formas honestas de usar una fuente',
          prompt: 'Observa la animación y toca cada tarjeta.' },
        { icon: 'Quote', body: 'En las dos formas **siempre** dices de dónde viene la idea.', reveal: [
          { icon: 'Quote', front: 'Cita textual', back: 'Copias las **palabras exactas** entre **comillas** y dices la fuente: _Como explica el libro de Ciencias Naturales 6, "la fuerza del agua de los ríos hace girar unas máquinas llamadas turbinas"._ Úsala solo para frases **cortas** e importantes.' },
          { icon: 'RefreshCw', front: 'Paráfrasis', back: 'Explicas la idea **con tus palabras**, sin comillas, y dices la fuente: _Según el libro de Ciencias Naturales 6, en las hidroeléctricas el agua de los ríos mueve unas máquinas llamadas turbinas._' },
          { icon: 'MessageCircle', front: 'Frases para citar', back: '"Según…", "Como explica…", "De acuerdo con…", "En palabras de…", "Don Rafael contó que…".' },
          { icon: 'AlertTriangle', front: 'Paráfrasis falsa', back: 'Cambiar solo una o dos palabras del original **no** es parafrasear. Hay que reescribir la idea completa.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'hacer', title: 'Ejemplo resuelto: parafrasear en cuatro pasos',
          prompt: 'Mira cómo Mateo parafrasea un fragmento de su fuente sobre la electricidad.' },
        { icon: 'RefreshCw', problem: 'Original (libro de Ciencias Naturales 6): "En algunos ingenios, se quema el bagazo, que es lo que sobra de la caña de azúcar después de exprimirla."',
          steps: [
            { text: '**Leo** el fragmento dos veces hasta entenderlo.' },
            { text: '**Cierro** el libro y me pregunto: ¿qué dice? → que la caña exprimida se usa como combustible.', why: 'Si no ves el original, no puedes copiarlo sin querer.' },
            { text: '**Escribo** con mis palabras: "Los restos de la caña de azúcar, llamados bagazo, se usan como combustible en algunos ingenios".' },
            { text: '**Comparo** con el original: ¿cambié el sentido? No. ¿Copié frases? No. Agrego la fuente al inicio: "Según el libro de Ciencias Naturales 6…".' },
          ],
          answer: '"Según el libro de Ciencias Naturales 6, los restos de la caña de azúcar, llamados bagazo, se usan como combustible en algunos ingenios."',
          tip: 'Una palabra técnica (bagazo, turbina) puedes conservarla: no tiene sinónimo exacto.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'hacer',
          prompt: 'Original: "_Las raíces de la ceiba agarran la tierra y evitan que la lluvia se la lleve._" ¿Cuál es una **buena paráfrasis**?',
          hint: 'Busca la que dice la misma idea con otras palabras, sin cambiar el sentido, y que nombra la fuente.',
          explain: 'La opción correcta reescribe toda la idea, conserva el sentido (las raíces protegen el suelo) y dice la fuente.' },
        { options: [
          { id: 'a', text: 'Según el texto "La ceiba: raíces que sostienen", las raíces de este árbol sujetan el suelo y lo protegen de la erosión que causa la lluvia.' },
          { id: 'b', text: 'Las raíces de la ceiba agarran la tierra y evitan que el agua se la lleve.', feedback: 'Solo cambió "lluvia" por "agua": es casi una copia y no dice la fuente.' },
          { id: 'c', text: 'Según el texto, las raíces de la ceiba hacen que llueva más.', feedback: 'Cambió el sentido: el original no dice eso.' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'hacer',
          prompt: 'Completa la **cita textual** de la entrevista de Sofía.',
          hint: 'Una cita textual lleva las palabras exactas entre comillas y dice quién las dijo.',
          explain: 'La cita dice quién habló (don Rafael, el conserje), usa un verbo para introducirla ("explicó"), dos puntos, y pone las palabras exactas entre comillas.' },
        { text: 'Don Rafael, el [[conserje]] de la escuela, [[explicó]]: "El agua baja del nacimiento por una tubería de dos kilómetros". Las palabras exactas de otra persona van entre [[comillas]].',
          distractors: ['alcalde', 'inventó', 'paréntesis'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.4', 'l1:8.2.7'], ambito: 'conocer', title: 'La lista de fuentes',
          prompt: 'Al final del informe va la **lista de fuentes**: todas las que usaste, con sus datos. Es la ficha de la semana pasada, puesta en limpio. Toca cada tarjeta.' },
        { icon: 'List', body: 'Una forma sencilla: **Autor (año). _Título_. Editorial o sitio.** Se ordenan alfabéticamente por el autor.', reveal: [
          { icon: 'BookOpen', front: 'Libro', back: 'Autor o institución (año). _Título del libro_. Editorial. Copia los datos reales de la portada y de la página legal de tu libro.' },
          { icon: 'Monitor', front: 'Sitio web', back: 'Nombre de la institución (año). _Título del artículo_. Nombre del sitio. Consultado el 10 de marzo.' },
          { icon: 'Mic', front: 'Entrevista', back: 'Rafael López, conserje de la escuela. Entrevista realizada el 12 de marzo.' },
          { icon: 'ListOrdered', front: 'Orden alfabético', back: 'Ordena por la primera palabra de cada fuente (apellido o institución), como en un diccionario.' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'hacer',
          prompt: 'Ordena alfabéticamente esta **lista de fuentes** (son fuentes de ejemplo).',
          explain: 'Se ordena por la primera palabra: Asociación, Instituto, López, Morales.' },
        { labels: { start: 'Primera', end: 'Última' }, items: [
          { id: 'l1', text: 'Asociación de Caficultores (2022). Guía del café de altura.' },
          { id: 'l2', text: 'Instituto de Historia Local (2021). Mi municipio ayer y hoy.' },
          { id: 'l3', text: 'López, Rafael. Entrevista realizada el 12 de marzo.' },
          { id: 'l4', text: 'Morales, Ana (2020). Ciencias Naturales 6.' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'hacer',
          prompt: 'Parafrasea este fragmento con tus palabras y nombra la fuente:\n\n"_Para los pueblos mayas, la ceiba es un árbol sagrado. En su visión del mundo, sus raíces llegan al inframundo, su tronco está en la tierra de los humanos y sus ramas tocan el cielo._" (Texto: "La ceiba: raíces que sostienen").' },
        { minWords: 25, placeholder: 'Según…',
          model: 'Según el texto "La ceiba: raíces que sostienen", los pueblos mayas consideran sagrada a la ceiba porque, en su forma de ver el mundo, une tres niveles: el inframundo, con sus raíces; la tierra donde vivimos, con su tronco; y el cielo, con sus ramas.',
          rubric: [
            'Nombré la fuente ("Según…")',
            'Escribí la idea con mis palabras, no cambiando solo una o dos',
            'No cambié el sentido del original',
            'No usé comillas (porque es paráfrasis)',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.4'], prompt: '¿Cuál es una **cita textual** correcta?' },
        { options: [
          { id: 'a', text: 'Mi abuela Juana dijo: "Tejí este güipil cuando tenía quince años".' },
          { id: 'b', text: 'Tejí este güipil cuando tenía quince años.' },
          { id: 'c', text: 'Alguien dijo algo sobre un güipil.' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.4'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Parafrasear es explicar una idea con tus palabras y decir de dónde la tomaste.', answer: true },
          { text: 'Si cambio una palabra de un texto copiado, ya es una paráfrasis.', answer: false, why: 'Hay que reescribir la idea completa con tus palabras.' },
          { text: 'La lista de fuentes va al final del informe.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 3 ─────────────────────────────
  lesson({
    id: 's08-l1-3',
    title: 'Tomar notas que sirvan',
    icon: 'NotebookPen',
    minutes: 14,
    gancho: 'Si copias toda la página en tu cuaderno, ¿estás tomando notas… o haciendo una fotocopia a mano?',
    objetivos: [
      'Identificar la información que responde a una pregunta clave',
      'Tomar notas breves con palabras clave, abreviaturas y símbolos',
      'Organizar las notas por pregunta clave, con su fuente',
    ],
    resumen: [
      'Tomar notas es escribir, con pocas palabras, solo la información importante que responde a tus preguntas clave.',
      'Técnicas: palabras clave en lugar de oraciones completas, abreviaturas (aprox., pág.) y símbolos (→ produce, = es igual, + además).',
      'Organiza tus notas por pregunta clave y anota siempre la fuente y la página.',
      'Si copias una frase exacta, ponla entre comillas en tus notas para no confundirla después con tus palabras.',
    ],
    media: {
      id: 's08-l1-3-notas', kind: 'image', title: 'Una página de buenas notas', aspect: '3:4',
      alt: 'Página de cuaderno dividida por preguntas clave; debajo de cada una hay pocas palabras, flechas y abreviaturas, y al margen la fuente y la página.',
      brief: 'Ilustración de una página de cuaderno escrita a mano, ordenada. Título: "Notas – ¿De dónde viene el agua de la escuela?". Tres bloques con la pregunta clave subrayada: "1. ¿De dónde sale?" → "nacimiento en el cerro → 2 km tubería"; "2. ¿Se trata?" → "tanque + cloro → mata microbios"; "3. ¿Quién mantiene?" → "comité de agua + conserje, limpieza c/3 meses". En el margen derecho, en otro color: "Entrevista don Rafael 12/3", "Libro CN6 pág. 41". Una frase entre comillas marcada con un asterisco. Letra clara.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'conocer',
          prompt: '¿Cuál es la **mejor nota** sobre esta oración? "_La geotermia aprovecha el calor que hay bajo la tierra cerca de los volcanes para producir electricidad._"',
          explain: 'Una buena nota guarda la idea con pocas palabras y símbolos: "geotermia = calor bajo tierra (volcanes) → electricidad".' },
        { options: [
          { id: 'a', text: 'geotermia = calor bajo tierra (volcanes) → electricidad', icon: 'NotebookPen' },
          { id: 'b', text: 'La geotermia aprovecha el calor que hay bajo la tierra cerca de los volcanes para producir electricidad.', icon: 'Copy', feedback: 'Es una copia completa: tardas más y no te obliga a pensar.' },
          { id: 'c', text: 'volcanes', icon: 'Mountain', feedback: 'Es demasiado corta: después no recordarás qué quería decir.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'conocer', title: 'Cómo tomar notas',
          prompt: 'Las notas son tu **puente** entre las fuentes y tu informe. Mira la página modelo y toca cada tarjeta.' },
        { icon: 'NotebookPen', body: 'Toma notas **pensando en tus preguntas clave**: si una información no responde a ninguna, no la anotes.', reveal: [
          { icon: 'Key', front: 'Palabras clave', back: 'Escribe sustantivos, verbos y datos importantes, no oraciones completas: _tanque + cloro → mata microbios_.' },
          { icon: 'Zap', front: 'Símbolos', back: '**→** produce, lleva a · **=** es igual, significa · **+** además · **≠** es diferente · **c/** cada.' },
          { icon: 'Scissors', front: 'Abreviaturas', back: '_aprox._ (aproximadamente), _pág._ (página), _ej._ (ejemplo), _Guate._ (Guatemala). Usa siempre las mismas.' },
          { icon: 'FolderOpen', front: 'Ordénalas', back: 'Una sección para **cada pregunta clave**. Al margen, la **fuente** y la **página**.' },
          { icon: 'Quote', front: 'Frases exactas', back: 'Si copias una frase porque quieres citarla, ponla **entre comillas** en tus notas. Así, al escribir, sabrás que no son tus palabras.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7', 'l1:4.2.1'], ambito: 'conocer',
          prompt: 'Sofía encontró este texto en un folleto de salud. Léelo pensando en su pregunta clave: **"¿Se trata el agua antes de usarla?"**',
          media: {
            id: 's08-l1-3-folleto-audio', kind: 'audio', title: 'Lectura: El agua segura para beber', duration: 60,
            alt: 'Voz de un joven que lee con claridad el texto del folleto.',
            brief: 'Audio de 60 s: voz juvenil, español de Guatemala, ritmo pausado y claro, lee el texto "El agua segura para beber" tal como aparece en la lección, con una breve pausa entre párrafos. Sin música de fondo.',
          } },
        { genre: 'Folleto informativo', heading: 'El agua segura para beber', passage:
          'El agua puede verse limpia y, aun así, llevar microbios que causan enfermedades del estómago, como la diarrea. Por eso, antes de beberla, es importante que sea agua segura.\n\n' +
          'Muchas comunidades tienen un tanque donde se guarda el agua que viene de un nacimiento o de un pozo. En el tanque se le puede agregar cloro en la cantidad correcta para eliminar los microbios. Esta tarea la hacen personas capacitadas, como los miembros del comité de agua.\n\n' +
          'En casa, si no estamos seguros de que el agua es segura, podemos hervirla: cuando el agua hierve con burbujas grandes durante unos minutos, los microbios mueren. Después se deja enfriar en un recipiente limpio y tapado.\n\n' +
          'También hay que lavar y tapar los recipientes donde guardamos el agua, porque un recipiente sucio puede contaminarla de nuevo.',
          questions: [
            { q: '¿Qué información del folleto responde **directamente** a la pregunta de Sofía?', options: [
              { id: 'a', text: 'En el tanque se agrega cloro para eliminar los microbios' },
              { id: 'b', text: 'La diarrea es una enfermedad del estómago' },
              { id: 'c', text: 'Los recipientes deben estar tapados' },
            ], correct: 'a', why: 'La pregunta es si el agua se trata: el cloro en el tanque es el tratamiento.' },
            { q: '¿Por qué el agua que se ve limpia puede no ser segura?', options: [
              { id: 'a', text: 'Porque puede llevar microbios que no se ven' },
              { id: 'b', text: 'Porque tiene cloro' },
              { id: 'c', text: 'Porque viene de un nacimiento' },
            ], correct: 'a', why: 'Primer párrafo: los microbios no se ven a simple vista.' },
            { q: '¿Quién agrega el cloro al tanque, según el folleto?', options: [
              { id: 'a', text: 'Personas capacitadas, como el comité de agua' },
              { id: 'b', text: 'Cualquier persona que pase' },
              { id: 'c', text: 'Los estudiantes' },
            ], correct: 'a', why: 'El folleto dice que lo hacen personas capacitadas: la cantidad debe ser la correcta.' },
          ] },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer',
          prompt: 'Toca **solo** las partes del texto que Sofía debe anotar para su pregunta "¿Se trata el agua antes de usarla?".',
          hint: 'Busca lo que dice qué se hace con el agua y quién lo hace. Deja fuera lo que no responde la pregunta.',
          explain: 'Lo esencial: se agrega cloro en el tanque, elimina los microbios y lo hace el comité de agua. Lo demás es interesante, pero responde otras preguntas.' },
        { target: 'información para anotar', text: 'Muchas comunidades tienen un tanque donde se guarda el agua. En el tanque {se le puede agregar cloro} en la cantidad correcta {para eliminar los microbios}. Esta tarea la hacen personas capacitadas, como {el comité de agua}.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer', title: 'Ejemplo resuelto: de la lectura a la nota',
          prompt: 'Mira cómo Sofía convierte lo que marcó en una nota útil.' },
        { icon: 'NotebookPen', problem: 'Información marcada: "se le puede agregar cloro", "para eliminar los microbios", "el comité de agua". Además: hervir el agua en casa.',
          steps: [
            { text: 'Escribe la **pregunta clave** como título: **2. ¿Se trata el agua?**' },
            { text: 'Anota con palabras clave y símbolos: **tanque + cloro → elimina microbios**.' },
            { text: 'Agrega quién: **lo hace comité de agua (personas capacitadas)**.' },
            { text: 'Añade un dato relacionado útil: **en casa: hervir unos min. → microbios mueren**.', why: 'Sirve para su conclusión sobre cómo cuidar el agua.' },
            { text: 'Al margen, la fuente: **Folleto "El agua segura para beber", centro de salud**.' },
          ],
          answer: '2. ¿Se trata el agua? → tanque + cloro → elimina microbios · lo hace comité de agua · en casa: hervir unos min. (Fuente: folleto del centro de salud)',
          tip: 'Una buena nota se entiende una semana después. Léela en voz alta: si no la entiendes, agrégale una palabra.' },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer', prompt: 'Une cada oración de una fuente con su **nota** abreviada.',
          explain: 'Cada nota conserva los datos esenciales con palabras clave y símbolos.' },
        { leftTitle: 'Oración', rightTitle: 'Nota', pairs: [
          { id: 'n1', left: 'En las hidroeléctricas, el agua de los ríos mueve turbinas que producen electricidad.', right: 'hidroeléctrica: agua ríos → turbinas → electricidad' },
          { id: 'n2', left: 'El bagazo es lo que sobra de la caña de azúcar después de exprimirla.', right: 'bagazo = restos caña exprimida' },
          { id: 'n3', left: 'El tanque se limpia cada tres meses, según el conserje.', right: 'tanque: limpieza c/3 meses (conserje)' },
          { id: 'n4', left: 'Los paneles solares y los aerogeneradores usan el sol y el viento.', right: 'solar + viento → paneles y aerogeneradores' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer',
          prompt: 'Toma **notas** del folleto "El agua segura para beber" para esta otra pregunta clave: **"¿Cómo podemos cuidar el agua en casa?"**. Usa palabras clave, al menos **dos símbolos** y anota la fuente.' },
        { minWords: 15, placeholder: '¿Cómo cuidar el agua en casa?\n→ …\n→ …\nFuente: …',
          model: '¿Cómo cuidar el agua en casa?\n→ si no es segura: hervir (burbujas grandes, unos min.) → microbios mueren\n→ enfriar en recipiente limpio + tapado\n→ lavar + tapar recipientes (sucio → se contamina)\nFuente: folleto "El agua segura para beber", centro de salud.',
          rubric: [
            'Anoté solo información que responde la pregunta',
            'Usé palabras clave, no oraciones copiadas',
            'Usé al menos dos símbolos (→, +, =)',
            'Escribí la fuente',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.7'], prompt: '¿Qué **no** debe hacerse al tomar notas?' },
        { options: [
          { id: 'a', text: 'Copiar párrafos completos sin comillas' },
          { id: 'b', text: 'Usar símbolos como → o +' },
          { id: 'c', text: 'Anotar la fuente y la página' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.7'], prompt: 'Une cada símbolo o abreviatura con su significado.' },
        { leftTitle: 'Símbolo', rightTitle: 'Significa', pairs: [
          { id: 's1', left: '→', right: 'produce, lleva a' },
          { id: 's2', left: '=', right: 'es igual, significa' },
          { id: 's3', left: 'pág.', right: 'página' },
          { id: 's4', left: 'aprox.', right: 'aproximadamente' },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 4 ─────────────────────────────
  lesson({
    id: 's08-l1-4',
    title: 'El informe: del primer borrador a la composición',
    icon: 'FileText',
    minutes: 15,
    gancho: 'Ya tienes preguntas, fuentes y notas. ¿Cómo se convierten en un texto que otros puedan leer?',
    objetivos: [
      'Reconocer las partes de un informe escrito',
      'Escribir un párrafo con idea principal e ideas de apoyo a partir de las notas',
      'Escribir el primer borrador del informe de la mini-investigación',
    ],
    resumen: [
      'Partes del informe: título, introducción (tema, pregunta y por qué), desarrollo (un párrafo por pregunta clave), conclusión (respuesta y lo aprendido) y lista de fuentes.',
      'Cada párrafo tiene una oración principal (la idea) y oraciones de apoyo (datos de tus notas, con su fuente).',
      'El primer borrador es una versión de trabajo: lo importante es poner las ideas en orden; se corrige después.',
      'Componer es transformar las notas en oraciones completas y unirlas con conectores: primero, además, por eso, finalmente.',
    ],
    media: {
      id: 's08-l1-4-partes', kind: 'diagram', title: 'Las partes de un informe', aspect: '3:4',
      alt: 'Una hoja de informe con cinco bloques de colores: título, introducción, desarrollo con tres párrafos, conclusión y fuentes. Flechas desde las notas del cuaderno hasta los párrafos del desarrollo.',
      brief: 'Diagrama vertical: a la izquierda, una hoja de cuaderno con notas agrupadas por preguntas 1, 2 y 3; a la derecha, la página del informe con bloques de color: TÍTULO (arriba, centrado), INTRODUCCIÓN (qué investigué, mi pregunta y por qué), DESARROLLO (tres párrafos numerados que reciben flechas desde las notas 1, 2 y 3), CONCLUSIÓN (respuesta a la pregunta y lo aprendido), FUENTES (lista). Etiquetas claras, colores suaves.',
    },
    steps: [
      S.order(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'conocer',
          prompt: '¿Recuerdas el camino de tu investigación? Ordena lo que has hecho y lo que falta.',
          explain: 'Ya planificaste, hiciste preguntas, elegiste fuentes y tomaste notas. Hoy toca el **borrador**; la próxima lección, revisar y pasar en limpio.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'r1', text: 'Planificar y hacer el cronograma' },
          { id: 'r2', text: 'Escribir la pregunta y las preguntas clave' },
          { id: 'r3', text: 'Buscar y evaluar fuentes' },
          { id: 'r4', text: 'Tomar notas' },
          { id: 'r5', text: 'Escribir el primer borrador' },
          { id: 'r6', text: 'Revisar, corregir, editar y escribir la redacción final' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'conocer', title: 'Las partes de un informe',
          prompt: 'Un **informe** comunica lo que investigaste de forma ordenada. Mira el diagrama y toca cada parte.' },
        { icon: 'FileText', body: 'El informe responde a tu **pregunta de investigación** con información de tus **fuentes**.', reveal: [
          { icon: 'Heading', front: 'Título', back: 'Breve y claro: "El viaje del agua hasta nuestra escuela". Con tu nombre, grado y fecha.' },
          { icon: 'DoorOpen', front: 'Introducción', back: 'Un párrafo: **qué** investigaste, **tu pregunta** y **por qué** es importante.' },
          { icon: 'Layers', front: 'Desarrollo', back: '**Un párrafo por cada pregunta clave**, con los datos de tus notas y sus fuentes ("según…").' },
          { icon: 'Flag', front: 'Conclusión', back: 'Responde la pregunta en pocas líneas y di **qué aprendiste** o qué propones.' },
          { icon: 'List', front: 'Fuentes', back: 'La lista de todas las fuentes que usaste, en orden alfabético.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'conocer', title: 'Cómo se construye un párrafo',
          prompt: 'Componer es convertir tus notas en **párrafos**. Toca cada tarjeta.' },
        { icon: 'AlignLeft', body: 'Un párrafo = **una idea**. Si cambias de idea, empieza otro párrafo.', reveal: [
          { icon: 'Target', front: 'Oración principal', back: 'Dice la idea del párrafo, casi siempre al inicio: "El agua de la escuela recibe un tratamiento antes de llegar a los chorros".' },
          { icon: 'Layers', front: 'Oraciones de apoyo', back: 'Explican la idea con **datos de tus notas** y su fuente: "Según don Rafael, el comité de agua le agrega cloro en el tanque…".' },
          { icon: 'Link', front: 'Conectores', back: 'Unen las oraciones: _primero, además, también, por eso, sin embargo, finalmente_.' },
          { icon: 'PenLine', front: 'Borrador', back: 'En el primer borrador **no te detengas** a corregir cada palabra: pon las ideas en orden. Deja espacio entre líneas para corregir después.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'conocer',
          prompt: 'Este es el **primer borrador** del informe de Sofía. Identifica sus partes y responde.' },
        { genre: 'Informe escolar (borrador)', heading: 'El viaje del agua hasta nuestra escuela', passage:
          'Introducción. Todos los días usamos el agua de la escuela para lavarnos las manos y limpiar el aula, pero pocos sabemos de dónde viene. Por eso investigué esta pregunta: ¿De dónde viene el agua que llega a nuestra escuela y cómo llega hasta los chorros?\n\n' +
          'El agua viene de un nacimiento que está en el cerro, arriba de la aldea. Según don Rafael, el conserje de la escuela, "el agua baja del nacimiento por una tubería de dos kilómetros". La tubería pasa por la orilla del camino y llega a un tanque grande detrás de la escuela.\n\n' +
          'Antes de llegar a los chorros, el agua recibe un tratamiento. El comité de agua le agrega cloro en el tanque. Según el folleto "El agua segura para beber", el cloro elimina los microbios que causan enfermedades. Además, don Rafael contó que el tanque se limpia cada tres meses.\n\n' +
          'Conclusión. El agua de la escuela hace un largo viaje desde el nacimiento del cerro y se trata con cloro para que sea segura. Aprendí que muchas personas trabajan para que tengamos agua. Propongo que cuidemos los chorros y no desperdiciemos el agua.\n\n' +
          'Fuentes: Folleto "El agua segura para beber", centro de salud. López, Rafael. Entrevista realizada el 12 de marzo.',
          questions: [
            { q: '¿Qué dice la introducción?', options: [
              { id: 'a', text: 'Por qué el tema es importante y cuál es la pregunta de investigación' },
              { id: 'b', text: 'Los datos del cloro' },
              { id: 'c', text: 'La lista de fuentes' },
            ], correct: 'a', why: 'Presenta el tema, explica por qué importa y formula la pregunta.' },
            { q: '¿Cuál es la **oración principal** del tercer párrafo?', options: [
              { id: 'a', text: 'Antes de llegar a los chorros, el agua recibe un tratamiento.' },
              { id: 'b', text: 'Además, don Rafael contó que el tanque se limpia cada tres meses.' },
              { id: 'c', text: 'El comité de agua le agrega cloro en el tanque.' },
            ], correct: 'a', why: 'Es la idea general del párrafo; las demás oraciones la apoyan con datos.' },
            { q: '¿Cómo muestra Sofía su **honestidad intelectual** en el borrador?', options: [
              { id: 'a', text: 'Dice de dónde vienen los datos ("según…") y pone la cita entre comillas' },
              { id: 'b', text: 'Escribe todo sin fuentes' },
              { id: 'c', text: 'Inventa datos para que el informe sea más largo' },
            ], correct: 'a', why: 'Usa "según don Rafael", "según el folleto", comillas en la cita y una lista de fuentes.' },
            { q: '¿Qué parte le falta o debería mejorar Sofía en la versión final?', options: [
              { id: 'a', text: 'Agregar su nombre, grado y fecha, y el dibujo que pedía la maestra' },
              { id: 'b', text: 'Quitar la conclusión' },
              { id: 'c', text: 'Borrar las fuentes' },
            ], correct: 'a', why: 'La tarea pedía un dibujo, y un informe lleva nombre, grado y fecha. Eso se agrega al editar.' },
          ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer', title: 'Ejemplo resuelto: de la nota al párrafo',
          prompt: 'Mira cómo Sofía compuso su tercer párrafo a partir de sus notas.' },
        { icon: 'PenLine', problem: 'Nota: "2. ¿Se trata el agua? → tanque + cloro → elimina microbios · lo hace comité de agua · tanque: limpieza c/3 meses (don Rafael) (Fuente: folleto del centro de salud)".',
          steps: [
            { text: 'Convierto la pregunta en **oración principal**: "Antes de llegar a los chorros, el agua recibe un tratamiento".' },
            { text: 'Paso "tanque + cloro" a una oración completa: "El comité de agua le agrega cloro en el tanque".' },
            { text: 'Agrego el dato del folleto **con su fuente**: "Según el folleto…, el cloro elimina los microbios…".', why: 'Cada dato ajeno lleva su "según…".' },
            { text: 'Uno el último dato con un **conector**: "**Además**, don Rafael contó que el tanque se limpia cada tres meses".' },
          ],
          answer: 'Un párrafo con una idea principal, tres oraciones de apoyo, dos fuentes nombradas y un conector.',
          tip: 'Cada pregunta clave de tus notas = un párrafo del desarrollo.' },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer',
          prompt: 'Ordena las oraciones para formar un **párrafo** del informe de Daniela sobre el panadero.',
          explain: 'Primero la oración principal, luego los datos en orden y un conector para cerrar.' },
        { labels: { start: 'Inicio', end: 'Final' }, items: [
          { id: 'd1', text: 'El día de trabajo de don Julio empieza antes de que salga el sol.' },
          { id: 'd2', text: 'Según él, se levanta a las tres de la mañana para preparar la masa.' },
          { id: 'd3', text: 'Luego deja reposar la masa para que crezca con la levadura.' },
          { id: 'd4', text: 'Finalmente, hornea el pan para que esté listo cuando abren la tienda.' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer',
          prompt: 'Escribe el **primer borrador** de tu informe: la **introducción** y **un párrafo del desarrollo** (a partir de las notas de una de tus preguntas clave). Incluye al menos una fuente con "según…". No te detengas a corregir: ¡eso será en la próxima lección!' },
        { minWords: 70, placeholder: 'Título: …\nIntroducción: …\nDesarrollo (párrafo 1): …',
          model: 'Título: Un día de trabajo del panadero de mi pueblo\nIntroducción: Todas las mañanas mi familia compra pan en la panadería de don Julio, pero nunca me había preguntado cómo lo hace. Por eso investigué: ¿cómo es un día de trabajo de un panadero en mi pueblo? Es importante conocer los oficios de nuestra comunidad y valorar a quienes los hacen.\nDesarrollo: El día de trabajo de don Julio empieza antes de que salga el sol. Según él, se levanta a las tres de la mañana para preparar la masa con harina, agua, sal y levadura. Luego deja reposar la masa para que crezca. Finalmente, hornea el pan para que esté listo cuando abren la tienda a las seis.',
          rubric: [
            'Mi introducción dice qué investigué, mi pregunta y por qué es importante',
            'Mi párrafo tiene una oración principal y oraciones de apoyo',
            'Usé datos de mis notas con su fuente ("según…")',
            'Usé al menos un conector (primero, además, luego, finalmente)',
          ] },
      ),
      S.match(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.7'], prompt: 'Une cada parte del informe con lo que contiene.' },
        { leftTitle: 'Parte', rightTitle: 'Contiene', pairs: [
          { id: 'p1', left: 'Introducción', right: 'El tema, la pregunta y por qué es importante' },
          { id: 'p2', left: 'Desarrollo', right: 'Un párrafo por cada pregunta clave, con datos' },
          { id: 'p3', left: 'Conclusión', right: 'La respuesta a la pregunta y lo aprendido' },
          { id: 'p4', left: 'Fuentes', right: 'La lista de libros, sitios y personas consultadas' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.7'], prompt: '¿Qué es un **primer borrador**?' },
        { options: [
          { id: 'a', text: 'Una primera versión del texto con las ideas en orden, que después se revisa y corrige' },
          { id: 'b', text: 'La versión final, lista para entregar' },
          { id: 'c', text: 'La lista de fuentes' },
        ], correct: ['a'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 5 ─────────────────────────────
  lesson({
    id: 's08-l1-5',
    title: 'Revisar, corregir, editar y entregar',
    icon: 'ClipboardCheck',
    minutes: 15,
    gancho: 'Los escritores profesionales reescriben sus textos varias veces. ¿Por qué tu informe debería salir perfecto a la primera?',
    objetivos: [
      'Distinguir revisar, corregir y editar',
      'Corregir errores de concordancia, ortografía y puntuación en un borrador',
      'Preparar la redacción final del informe con una lista de cotejo',
    ],
    resumen: [
      'Revisar: leer el borrador buscando problemas de contenido (¿responde la pregunta?, ¿está en orden?, ¿tiene fuentes?).',
      'Corregir: arreglar los problemas: ideas poco claras, concordancia, ortografía, mayúsculas y puntuación.',
      'Editar: dar el formato final: título, nombre y fecha, subtítulos, dibujo o esquema, lista de fuentes, letra clara.',
      'Redacción final: la versión limpia que se entrega. Leerla en voz alta ayuda a encontrar los últimos errores.',
    ],
    media: {
      id: 's08-l1-5-revision', kind: 'animation', title: 'Del borrador a la versión final', aspect: '16:9', duration: 50,
      alt: 'Una hoja de borrador con marcas de colores se transforma paso a paso: se marcan problemas, se corrigen, se agrega título y dibujo, y aparece la versión final limpia.',
      brief: 'Animación 2D de 50 s en cuatro etapas con rótulo: 1) REVISAR: una lupa recorre el borrador y marca con círculos naranjas un párrafo desordenado y un dato sin fuente. 2) CORREGIR: un lápiz tacha "los estudiantes escribió" y escribe "escribieron"; agrega una tilde en "jóvenes"; cambia una minúscula por mayúscula. 3) EDITAR: aparecen título centrado, nombre, grado y fecha, un dibujo del tanque de agua y la lista de fuentes. 4) REDACCIÓN FINAL: la hoja limpia brilla. Narración en español, subtítulos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'conocer',
          prompt: 'Terminaste tu borrador. ¿Qué es lo **primero** que conviene hacer?',
          explain: 'Primero se **revisa** el contenido: si el texto no responde la pregunta, de nada sirve tener buena letra. Después se corrige y, al final, se edita.' },
        { options: [
          { id: 'a', text: 'Leerlo completo para ver si responde la pregunta y está en orden', icon: 'Search' },
          { id: 'b', text: 'Pasarlo en limpio con letra bonita', icon: 'PenLine', feedback: 'Si tiene errores de contenido, tendrás que pasarlo en limpio otra vez.' },
          { id: 'c', text: 'Entregarlo así', icon: 'Send', feedback: 'Un borrador siempre tiene cosas por mejorar.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'conocer', title: 'Tres verbos que no son lo mismo',
          prompt: 'Observa la animación y toca cada tarjeta.' },
        { icon: 'ClipboardCheck', body: 'El orden importa: primero lo grande (las ideas), después lo pequeño (las letras), al final la presentación.', reveal: [
          { icon: 'Search', front: 'Revisar', back: 'Leer **buscando problemas**: ¿responde la pregunta?, ¿cada párrafo tiene una idea?, ¿hay datos sin fuente?, ¿algo sobra o falta? Marca, pero todavía no arregles.' },
          { icon: 'Eraser', front: 'Corregir', back: '**Arreglar** lo que marcaste: reescribir ideas poco claras, concordancia de género y número, sujeto y verbo, tildes, mayúsculas, puntos y comas.' },
          { icon: 'Brush', front: 'Editar', back: 'Dar el **formato final**: título, nombre, grado y fecha, subtítulos, dibujo o esquema, lista de fuentes, márgenes y letra clara.' },
          { icon: 'FileCheck', front: 'Redacción final', back: 'La versión **limpia** que entregas. Léela en voz alta una última vez.' },
        ] },
      ),
      S.order(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer',
          prompt: 'Ordena todas las etapas para escribir un informe, desde el principio.',
          hint: 'No puedes corregir algo que todavía no has escrito, ni editar antes de corregir.',
          explain: 'Notas → borrador → revisar → corregir → editar → redacción final.' },
        { labels: { start: 'Inicio', end: 'Final' }, items: [
          { id: 'w1', text: 'Tomar notas durante la investigación' },
          { id: 'w2', text: 'Escribir un primer borrador' },
          { id: 'w3', text: 'Revisar: leer buscando errores e ideas poco claras' },
          { id: 'w4', text: 'Corregir la ortografía y las ideas' },
          { id: 'w5', text: 'Editar: títulos, dibujos y lista de fuentes' },
          { id: 'w6', text: 'Escribir la redacción final' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7', 'l1:7.1.2', 'l1:7.2.6'], ambito: 'hacer', title: 'Ejemplo resuelto: corregir un párrafo',
          prompt: 'Mateo revisó y corrigió un párrafo de su informe sobre la electricidad. Mira cada corrección.' },
        { icon: 'Eraser', problem: 'Borrador: "en guatemala la electricidad se produce de varias forma. Las hidroeléctricas usa la fuerza del agua. Tambien se quema el bagazo de la caña."',
          steps: [
            { text: '"en guatemala" → "**En Guatemala**": mayúscula al inicio de oración y en nombres propios.' },
            { text: '"varias forma" → "varias **formas**": el sustantivo concuerda en número con "varias".', why: 'Concordancia de número (semana 5).' },
            { text: '"Las hidroeléctricas usa" → "Las hidroeléctricas **usan**": el verbo concuerda con el sujeto plural.', why: 'Sujeto y verbo concuerdan (semana 6).' },
            { text: '"Tambien" → "**También**": lleva tilde (aguda terminada en n).' },
            { text: 'Revisión de honestidad: los datos vienen del libro, falta la fuente → agrega "**Según el libro de Ciencias Naturales 6,**" al inicio.' },
          ],
          answer: '"Según el libro de Ciencias Naturales 6, en Guatemala la electricidad se produce de varias formas. Las hidroeléctricas usan la fuerza del agua. También se quema el bagazo de la caña."',
          tip: 'Corrige en varias pasadas, cada vez buscando un solo tipo de error.' },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7', 'l1:7.1.2'], ambito: 'hacer',
          prompt: 'Eres editor o editora. Toca las **palabras con error** en este fragmento del informe de Daniela.',
          hint: 'Busca: mayúsculas en nombres propios, concordancia de número (sujeto-verbo, sustantivo-adjetivo) y tildes.',
          explain: 'Correcciones: "jalapa" → Jalapa (nombre propio); "prepara" → preparan (el sujeto es plural: los panaderos); "dulce" → dulces (panes dulces); "tambien" → también.' },
        { target: 'errores', text: 'En {jalapa} los panaderos {prepara} la masa de madrugada. Venden panes {dulce} y salados, y {tambien} hacen pan de yema para las fiestas.' },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer', prompt: '¿En qué etapa se hace cada tarea?',
          explain: 'Revisar = detectar problemas de contenido. Corregir = arreglar lengua e ideas. Editar = presentación final.' },
        { buckets: [
          { id: 'rev', label: 'Revisar', icon: 'Search', color: 'var(--area-l1)' },
          { id: 'cor', label: 'Corregir', icon: 'Eraser', color: 'var(--c-maiz-strong)' },
          { id: 'edi', label: 'Editar', icon: 'Brush', color: 'var(--c-ok)' },
        ], items: [
          { id: 'e1', text: 'Leer y ver si el texto responde la pregunta', bucket: 'rev' },
          { id: 'e2', text: 'Poner la tilde que falta en "jóvenes"', bucket: 'cor' },
          { id: 'e3', text: 'Agregar un dibujo del tanque de agua', bucket: 'edi' },
          { id: 'e4', text: 'Descubrir que un dato no tiene fuente', bucket: 'rev' },
          { id: 'e5', text: 'Cambiar "los niños juega" por "los niños juegan"', bucket: 'cor' },
          { id: 'e6', text: 'Escribir título, nombre, grado y fecha', bucket: 'edi' },
        ] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.7', 'l1:8.2.4'], ambito: 'emprender',
          prompt: '**Cierra tu mini-investigación.** Termina tu informe siguiendo todas las etapas y compártelo.' },
        { goal: 'Entregar la redacción final de un informe de una a dos páginas que responda a mi pregunta de investigación con fuentes honestas.',
          steps: [
            { title: 'Completa el borrador', detail: 'Escribe los párrafos que faltan del desarrollo (uno por pregunta clave) y la conclusión.' },
            { title: 'Revisa', detail: '¿Responde la pregunta? ¿Cada párrafo tiene una idea? ¿Cada dato ajeno tiene su "según…"? Marca con lápiz lo que haya que arreglar.' },
            { title: 'Corrige', detail: 'Haz tres pasadas: 1) concordancia de género y número y de sujeto con verbo, 2) tildes y mayúsculas, 3) puntos y comas.' },
            { title: 'Edita', detail: 'Agrega título, nombre, grado y fecha, un dibujo o esquema y la lista de fuentes en orden alfabético.' },
            { title: 'Redacción final y presentación', detail: 'Pásalo en limpio, léelo en voz alta y compártelo con tu familia o con la persona que entrevistaste. ¡Agradécele!' },
          ],
          evidence: 'El informe final (en el cuaderno o en hojas) con todas sus partes y la lista de fuentes.',
          rubric: [
            'Tiene título, introducción, desarrollo, conclusión y fuentes',
            'Responde la pregunta de investigación con datos de las fuentes',
            'Todas las ideas ajenas están citadas o parafraseadas con su fuente',
            'No tiene errores de concordancia, tildes ni mayúsculas',
            'Está limpio, ordenado e incluye un dibujo o esquema',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.7'], prompt: 'Agregar título, nombre, fecha, un dibujo y la lista de fuentes es parte de…' },
        { options: [
          { id: 'a', text: 'Editar' },
          { id: 'b', text: 'Tomar notas' },
          { id: 'c', text: 'Planificar' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.7', 'l1:7.1.2', 'l1:5.2.2'], prompt: 'Corrige el borrador eligiendo la forma correcta para cada espacio.' },
        { text: 'Las [[tejedoras]] de la aldea [[venden]] güipiles [[coloridos]] en el mercado de [[Sololá]].',
          distractors: ['tejedora', 'vende', 'colorido', 'sololá'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l1'], cnb: [], ambito: 'ser', prompt: 'Mira hacia atrás: ¡terminaste la unidad 1 de Comunicación y Lenguaje!' },
        { statements: [
          'Cito mis fuentes y no copio el trabajo de otros',
          'Tomo notas breves y organizadas',
          'Escribo un informe con todas sus partes',
          'Reviso, corrijo y edito antes de entregar',
          'Uso lo aprendido en la unidad: hablar en público, leer para aprender, teatro, descripción y gramática',
        ], commitments: [
          'Compartiré mi informe con la persona que me ayudó en la investigación',
          'En mis próximos trabajos de cualquier materia, escribiré la lista de fuentes',
          'Leeré en voz alta mis textos antes de entregarlos',
        ] },
      ),
    ],
  }),
];
