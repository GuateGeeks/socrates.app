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
      brief: 'Ilustración en tres paneles con estilo de cómic suave. Panel 1 "Escribo con mis palabras": niña que lee un libro y escribe en su cuaderno. Panel 2 "No invento datos": niño que anota con cuidado los resultados de una encuesta en una tabla, aunque no son los que esperaba (cara pensativa). Panel 3 "Digo de dónde lo saqué": niña que escribe "Fuentes:" al final de su informe. Personajes diversos de Guatemala, fondo de aula. Target: public/media/s08-l1-1-honestidad.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'ser', title: 'La fuente sostiene la confianza',
          prompt: 'Lee este principio antes de decidir cómo usar datos ajenos.' },
        { icon: 'ShieldCheck', body: 'La honestidad intelectual exige conservar el dato, distinguir palabras propias y ajenas, y nombrar la **fuente**.' },
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
        { icon: 'ClipboardCheck', problem: 'Párrafo de Sofía: “El caso registra 12,468 kWh. Según la Ficha A, el valor aproximado es 12,000 kWh. Una lámpara LED siempre elimina por completo el consumo de electricidad”.',
          steps: [
            { text: '**¿Son mis palabras?** Sí, pero las afirmaciones todavía necesitan fuente.' },
            { text: '**¿Dije de dónde sale cada dato?** El redondeo sí; el valor exacto también debe atribuirse a la Ficha A.' },
            { text: '**¿La conclusión respeta la evidencia?** No: una LED sigue usando energía y la palabra “siempre” no está respaldada.' },
            { text: 'Corrige: _Según la Ficha B, una LED de 9 W usa menos potencia que la lámpara de 60 W comparada en el caso simulado._' },
          ],
          answer: 'Ahora el párrafo es honesto: dice qué ideas son de Sofía, cuáles del conserje y cuáles del libro.',
          tip: 'Tres preguntas: ¿son mis palabras?, ¿dije de dónde viene?, ¿el dato es el real?' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'ser', prompt: 'Clasifica cada acción: ¿es **honesta** o **deshonesta**?',
          hint: 'Aplica los tres compromisos: no copiar como propio, no inventar datos, decir de dónde viene.',
          explain: 'Una práctica es honesta cuando conserva los datos, distingue las palabras ajenas y hace visible la fuente; alterar, inventar u ocultar el origen rompe la confianza.' },
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
          prompt: 'La ficha no indica cuánto dinero se ahorró. ¿Qué escribes en el informe?',
          explain: 'Si un dato no aparece, se reconoce el límite. Inventar una cantidad, aunque parezca posible, altera la información.' },
        { options: [
          { id: 'a', text: '“El paquete no informa un ahorro monetario”.' },
          { id: 'b', text: '“Se ahorraron Q500”, porque parece razonable', feedback: 'Sería un dato inventado.' },
          { id: 'c', text: '“Se eliminó todo el gasto de electricidad”', feedback: 'Es una exageración sin respaldo.' },
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
      brief: 'Animación tipográfica de 50 s. Arriba, un libro abierto con la frase resaltada: "En las hidroeléctricas, la fuerza del agua de los ríos hace girar unas máquinas llamadas turbinas." Camino 1 (izquierda): la frase viaja igual al cuaderno, aparecen comillas grandes y una etiqueta "(Ciencias Naturales 6)". Título: CITA TEXTUAL. Camino 2 (derecha): el libro se cierra, la frase se desarma y se rearma: "Según el libro de Ciencias Naturales 6, las hidroeléctricas usan el movimiento del agua de los ríos para mover turbinas." Título: PARÁFRASIS. Narración en español, subtítulos. Target: public/media/s08-l1-2-citar.mp4. Accesibilidad: subtítulos completos, transcripción y pausa suficiente para lectura.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'conocer', title: 'Dos maneras de atribuir',
          prompt: 'Una cita conserva palabras exactas; una paráfrasis conserva la idea con palabras nuevas.' },
        { icon: 'Quote', body: 'La **cita textual** usa comillas y fuente. La **paráfrasis** no usa comillas, pero también nombra la fuente.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'conocer', title: 'Dos formas honestas de usar una fuente',
          prompt: 'Observa la animación y toca cada tarjeta.' },
        { icon: 'Quote', body: 'En las dos formas **siempre** dices de dónde viene la idea.', reveal: [
          { icon: 'Quote', front: 'Cita textual', back: 'Copias las **palabras exactas** entre **comillas** y dices la fuente: _Como explica el libro de Ciencias Naturales 6, "la fuerza del agua de los ríos hace girar unas máquinas llamadas turbinas"._ Úsala solo para frases **cortas** e importantes.' },
          { icon: 'RefreshCw', front: 'Paráfrasis', back: 'Explicas la idea **con tus palabras**, sin comillas, y dices la fuente: _Según el libro de Ciencias Naturales 6, en las hidroeléctricas el agua de los ríos mueve unas máquinas llamadas turbinas._' },
          { icon: 'MessageCircle', front: 'Frases para citar', back: '“Según la Ficha A…”, “Como explica la guía…”, “De acuerdo con el paquete suministrado…”.' },
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
          prompt: 'Completa la **cita textual** de la guía suministrada.',
          hint: 'Una cita textual reproduce palabras exactas entre comillas y nombra la fuente.',
          explain: 'La oración nombra la Ficha B, usa un verbo introductor y conserva las palabras exactas entre comillas.' },
        { text: 'La [[Ficha B]] [[indica]]: "Apaga las luces de espacios vacíos". Las palabras exactas van entre [[comillas]].',
          distractors: ['alcalde', 'inventó', 'paréntesis'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.4', 'l1:8.2.7'], ambito: 'conocer', title: 'La lista de fuentes',
          prompt: 'Al final del informe va la **lista de fuentes**: todas las que usaste, con sus datos. Es la ficha de la semana pasada, puesta en limpio. Toca cada tarjeta.' },
        { icon: 'List', body: 'Una forma sencilla: **Autor (año). _Título_. Editorial o sitio.** Se ordenan alfabéticamente por el autor.', reveal: [
          { icon: 'BookOpen', front: 'Libro', back: 'Autor o institución (año). _Título del libro_. Editorial. Copia los datos reales de la portada y de la página legal de tu libro.' },
          { icon: 'Monitor', front: 'Sitio web', back: 'Nombre de la institución (año). _Título del artículo_. Nombre del sitio. Consultado el 10 de marzo.' },
          { icon: 'FileText', front: 'Ficha suministrada', back: 'Equipo didáctico (2026). _Ficha B: Iluminación y uso racional_. Paquete de aula.' },
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
          { id: 'l3', text: 'Equipo didáctico (2026). Ficha B: Iluminación y uso racional.' },
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
      brief: 'Ilustración de una página de cuaderno escrita a mano, ordenada. Título: "Notas del paquete: uso de lámparas". Tres bloques: "Dato exacto" → "12,468 kWh"; "Comparación" → "LED 9 W / incandescente 60 W"; "Recomendación" → "apagar luces sin uso". En el margen: "Ficha A, caso escolar simulado" y "Ficha B, guía científica suministrada". Una frase exacta entre comillas está marcada con un asterisco. Letra clara. Target: public/media/s08-l1-3-notas.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'conocer', title: 'Notas que responden una pregunta',
          prompt: 'Una nota útil conserva la idea, el dato y la fuente con pocas palabras.' },
        { icon: 'NotebookPen', body: 'Ejemplo: **geotermia = calor bajo tierra → electricidad (Ficha B)**. No copia todo ni pierde la idea central.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'conocer', title: 'Cómo tomar notas',
          prompt: 'Las notas son tu **puente** entre las fuentes y tu informe. Mira la página modelo y toca cada tarjeta.' },
        { icon: 'NotebookPen', body: 'Toma notas **pensando en tus preguntas clave**: si una información no responde a ninguna, no la anotes.', reveal: [
          { icon: 'Key', front: 'Palabras clave', back: 'Escribe sustantivos, verbos y datos importantes, no oraciones completas: _luces vacías → apagar → menos consumo_.' },
          { icon: 'Zap', front: 'Símbolos', back: '**→** produce, lleva a · **=** es igual, significa · **+** además · **≠** es diferente · **c/** cada.' },
          { icon: 'Scissors', front: 'Abreviaturas', back: '_aprox._ (aproximadamente), _pág._ (página), _ej._ (ejemplo), _Guate._ (Guatemala). Usa siempre las mismas.' },
          { icon: 'FolderOpen', front: 'Ordénalas', back: 'Una sección para **cada pregunta clave**. Al margen, la **fuente** y la **página**.' },
          { icon: 'Quote', front: 'Frases exactas', back: 'Si copias una frase porque quieres citarla, ponla **entre comillas** en tus notas. Así, al escribir, sabrás que no son tus palabras.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7', 'l1:8.2.7'], ambito: 'conocer',
          prompt: 'Lee la **Ficha B del paquete de energía suministrado** pensando en esta pregunta: **"¿Qué recomendación está respaldada por la fuente?"**',
          media: {
            id: 's08-l1-3-folleto-audio', kind: 'audio', title: 'Lectura: Iluminación y uso racional', duration: 55,
            alt: 'Voz juvenil que lee la ficha suministrada sobre iluminación y ahorro de energía.',
            brief: 'Audio de 55 s: voz juvenil, español de Guatemala, ritmo pausado, lee exactamente la ficha "Iluminación y uso racional" incluida en la lección. Hace una pausa después de cada dato. Sin música. Target: public/media/s08-l1-3-folleto-audio.mp3. Accesibilidad: transcripción completa visible junto al control y opción de repetir la pista.',
          } },
        { genre: 'Ficha informativa suministrada', heading: 'Ficha B: Iluminación y uso racional', passage:
          'Caso escolar simulado; no describe tu escuela. En una prueba preparada, una lámpara incandescente usó 60 W y una lámpara LED usó 9 W para una iluminación comparable. La potencia indica la rapidez con que un aparato usa energía; no equivale al consumo total de un mes.\n\n' +
          'La guía científica suministrada recomienda apagar las luces de espacios vacíos y aprovechar la luz natural cuando sea suficiente y seguro. También indica que una comparación debe mantener condiciones semejantes y registrar la unidad.\n\n' +
          'Estos datos permiten recomendar revisar qué luces permanecen encendidas sin necesidad. No permiten afirmar cuánto ahorró una escuela real ni prometer una reducción exacta en su recibo.',
          questions: [
            { q: '¿Qué recomendación está respaldada directamente por la ficha?', options: [
              { id: 'a', text: 'Apagar las luces de espacios vacíos' },
              { id: 'b', text: 'Afirmar que la escuela ya redujo su recibo' },
              { id: 'c', text: 'Cambiar todas las instalaciones sin revisión' },
            ], correct: 'a', why: 'La ficha recomienda esa acción y no informa ahorros reales de una escuela.' },
            { q: '¿Qué comparación presenta la prueba preparada?', options: [
              { id: 'a', text: '60 W y 9 W con iluminación comparable' },
              { id: 'b', text: 'Dos recibos reales de la escuela' },
              { id: 'c', text: 'Dos meses con igual consumo' },
            ], correct: 'a', why: 'Son potencias de dos lámparas en un escenario suministrado.' },
            { q: '¿Qué no puede concluirse con estos datos?', options: [
              { id: 'a', text: 'Cuánto ahorró una escuela real' },
              { id: 'b', text: 'Que la unidad registrada es W' },
              { id: 'c', text: 'Que se compararon dos lámparas' },
            ], correct: 'a', why: 'La ficha es simulada y no contiene mediciones ni recibos reales.' },
          ] },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer',
          prompt: 'Toma una **nota guiada**: toca solo la evidencia y el límite que respaldan la recomendación “apagar luces que no se usan”.',
          hint: 'Marca la acción y el límite de lo que los datos permiten afirmar.',
          explain: 'La ficha respalda apagar luces vacías y aclara que no demuestra un ahorro real o exacto.' },
        { target: 'evidencia y límite', text: 'La guía recomienda {apagar las luces de espacios vacíos}. Estos datos {no permiten afirmar cuánto ahorró una escuela real} ni prometer una reducción exacta.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer', title: 'Ejemplo resuelto: de la lectura a la nota',
          prompt: 'Mira cómo Sofía convierte lo que marcó en una nota útil.' },
        { icon: 'NotebookPen', problem: 'Información marcada: “apagar luces de espacios vacíos” y “no permite afirmar un ahorro real”. Dato relacionado: LED 9 W / incandescente 60 W.',
          steps: [
            { text: 'Escribe la pregunta: **¿Qué recomendación respalda la fuente?**' },
            { text: 'Anota con palabras clave: **espacio vacío → apagar luz → evita uso innecesario**.' },
            { text: 'Agrega el dato: **LED 9 W / incand. 60 W (condiciones comparables)**.' },
            { text: 'Registra el límite: **≠ ahorro real medido**.', why: 'Evita convertir un escenario didáctico en un resultado de la escuela.' },
            { text: 'Al margen, cita: **Ficha B, paquete suministrado de energía**.' },
          ],
          answer: 'Luces vacías → apagar → evita uso innecesario · LED 9 W / incand. 60 W · ≠ ahorro real medido (Fuente: Ficha B suministrada)',
          tip: 'Una buena nota se entiende una semana después. Léela en voz alta: si no la entiendes, agrégale una palabra.' },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer', prompt: 'Une cada oración de una fuente con su **nota** abreviada.',
          explain: 'Cada nota conserva los datos esenciales con palabras clave y símbolos.' },
        { leftTitle: 'Oración', rightTitle: 'Nota', pairs: [
          { id: 'n1', left: 'En las hidroeléctricas, el agua de los ríos mueve turbinas que producen electricidad.', right: 'hidroeléctrica: agua ríos → turbinas → electricidad' },
          { id: 'n2', left: 'El bagazo es lo que sobra de la caña de azúcar después de exprimirla.', right: 'bagazo = restos caña exprimida' },
          { id: 'n3', left: 'La ficha simulada registra 12,468 kWh en un mes.', right: 'caso sim.: 12,468 kWh/mes' },
          { id: 'n4', left: 'Los paneles solares y los aerogeneradores usan el sol y el viento.', right: 'solar + viento → paneles y aerogeneradores' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer',
          prompt: 'Toma **notas** de la Ficha B para: **"¿Qué podemos recomendar y qué no podemos afirmar?"** Usa palabras clave, al menos **dos símbolos** y anota la fuente.' },
        { minWords: 15, placeholder: 'Recomendación → …\nLímite ≠ …\nFuente: …',
          model: 'Recomendación → apagar luces en espacios vacíos + usar luz natural segura\ncomparación: 60 W / 9 W con luz comparable\n≠ ahorro real ni reducción exacta del recibo\nFuente: Ficha B, paquete suministrado de energía.',
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
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.7'], prompt: 'En unas notas nuevas, une cada símbolo o abreviatura con su significado.' },
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
      brief: 'Diagrama vertical: a la izquierda, una hoja de cuaderno con notas agrupadas por preguntas 1, 2 y 3; a la derecha, la página del informe con bloques de color: TÍTULO (arriba, centrado), INTRODUCCIÓN (qué investigué, mi pregunta y por qué), DESARROLLO (tres párrafos numerados que reciben flechas desde las notas 1, 2 y 3), CONCLUSIÓN (respuesta a la pregunta y lo aprendido), FUENTES (lista). Etiquetas claras, colores suaves. Target: public/media/s08-l1-4-partes.svg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
    },
    steps: [
      S.reflect(
        { fase: 'explorar', areas: ['l1'], cnb: [], ambito: 'conocer', prompt: 'Antes de leer el modelo, reconoce qué parte de un informe ya puedes identificar.' },
        { statements: ['Distingo un título de un párrafo', 'Busco una fuente antes de confiar en un dato'], commitments: ['Comprobaré cada parte en el modelo suministrado'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'conocer', title: 'Las partes de un informe',
          prompt: 'Un **informe** comunica lo que investigaste de forma ordenada. Mira el diagrama y toca cada parte.' },
        { icon: 'FileText', body: 'El informe responde a tu **pregunta de investigación** con información de tus **fuentes**.', reveal: [
          { icon: 'Heading', front: 'Título', back: 'Breve y claro: "Datos para usar mejor la iluminación". Con nombre, grado y fecha.' },
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
          { icon: 'Target', front: 'Oración principal', back: 'Dice la idea del párrafo, casi siempre al inicio: "El paquete permite recomendar un uso más cuidadoso de la iluminación".' },
          { icon: 'Layers', front: 'Oraciones de apoyo', back: 'Explican la idea con **datos de tus notas** y su fuente: "Según la Ficha B, una lámpara usó 9 W y otra 60 W en condiciones comparables".' },
          { icon: 'Link', front: 'Conectores', back: 'Unen las oraciones: _primero, además, también, por eso, sin embargo, finalmente_.' },
          { icon: 'PenLine', front: 'Borrador', back: 'En el primer borrador **no te detengas** a corregir cada palabra: pon las ideas en orden. Deja espacio entre líneas para corregir después.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'conocer',
          prompt: 'Lee este **primer borrador**, escrito solo con el paquete suministrado. Identifica sus partes y responde.',
          hint: 'Busca introducción, desarrollo, conclusión y fuentes; luego identifica la idea principal y sus apoyos.',
          explain: 'El informe organiza una pregunta y datos atribuidos: la introducción presenta, el desarrollo explica con evidencia, la conclusión responde y la lista identifica las fuentes.' },
        { genre: 'Informe escolar (borrador)', heading: 'Datos para usar mejor la iluminación', passage:
          'Introducción. Este informe responde: ¿qué recomendación de ahorro permite sostener el paquete suministrado? El caso es simulado y no describe nuestra escuela.\n\n' +
          'El paquete presenta datos que deben comunicarse con su contexto. Según la Ficha A, el escenario registra exactamente 12,468 kWh y lo aproxima a 12,000 kWh. Ambos números conservan la unidad y el rótulo de caso simulado.\n\n' +
          'La iluminación ofrece una acción concreta. Según la Ficha B, una lámpara usó 9 W y otra 60 W en condiciones comparables. Además, la guía recomienda apagar luces de espacios vacíos. La ficha no demuestra cuánto ahorró una escuela real.\n\n' +
          'Conclusión. La evidencia permite recomendar apagar luces innecesarias y publicar los datos con fuente, unidad y contexto. No permite prometer una reducción exacta del recibo.\n\n' +
          'Fuentes: Ficha A, escenario escolar simulado. Ficha B, guía de iluminación suministrada.',
          questions: [
            { q: '¿Qué dice la introducción?', options: [
              { id: 'a', text: 'Por qué el tema es importante y cuál es la pregunta de investigación' },
              { id: 'b', text: 'Solo la comparación de lámparas' },
              { id: 'c', text: 'La lista de fuentes' },
            ], correct: 'a', why: 'Presenta el tema, explica por qué importa y formula la pregunta.' },
            { q: '¿Cuál es la **oración principal** del tercer párrafo?', options: [
              { id: 'a', text: 'La iluminación ofrece una acción concreta.' },
              { id: 'b', text: 'Una lámpara usó 9 W.' },
              { id: 'c', text: 'La ficha no demuestra un ahorro real.' },
            ], correct: 'a', why: 'Es la idea general del párrafo; las demás oraciones la apoyan con datos.' },
            { q: '¿Cómo muestra Sofía su **honestidad intelectual** en el borrador?', options: [
              { id: 'a', text: 'Nombra las fichas, conserva unidades y declara que el caso es simulado' },
              { id: 'b', text: 'Escribe todo sin fuentes' },
              { id: 'c', text: 'Inventa datos para que el informe sea más largo' },
            ], correct: 'a', why: 'Nombra las fichas, conserva las unidades, declara el escenario y enumera las fuentes.' },
            { q: '¿Qué parte falta en la versión final?', options: [
              { id: 'a', text: 'Agregar nombre, grado y fecha, y revisar la legibilidad' },
              { id: 'b', text: 'Quitar la conclusión' },
              { id: 'c', text: 'Borrar las fuentes' },
            ], correct: 'a', why: 'La tarea pedía un dibujo, y un informe lleva nombre, grado y fecha. Eso se agrega al editar.' },
          ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer', title: 'Ejemplo resuelto: de la nota al párrafo',
          prompt: 'Mira cómo se compone el tercer párrafo a partir de las notas suministradas.' },
        { icon: 'PenLine', problem: 'Nota: “iluminación → acción concreta · LED 9 W / incand. 60 W (comparable) · apagar luces vacías · ≠ ahorro real (Ficha B)”.',
          steps: [
            { text: 'Escribo la **oración principal**: “La iluminación ofrece una acción concreta”.' },
            { text: 'Convierto el dato en oración: “Según la Ficha B, una lámpara usó 9 W y otra 60 W en condiciones comparables”.' },
            { text: 'Agrego la recomendación con un conector: “**Además**, la guía recomienda apagar luces de espacios vacíos”.' },
            { text: 'Cierro con el límite: “La ficha no demuestra cuánto ahorró una escuela real”.', why: 'Una conclusión honesta no excede la evidencia.' },
          ],
          answer: 'Un párrafo con una idea principal, tres oraciones de apoyo, dos fuentes nombradas y un conector.',
          tip: 'Cada pregunta clave de tus notas = un párrafo del desarrollo.' },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer',
          prompt: 'Ordena las oraciones para formar un **párrafo** sobre el dato exacto y aproximado.',
          explain: 'Primero la oración principal, luego los datos en orden y un conector para cerrar.' },
        { labels: { start: 'Inicio', end: 'Final' }, items: [
          { id: 'd1', text: 'El escenario debe publicar el dato con precisión y contexto.' },
          { id: 'd2', text: 'Según la Ficha A, el valor exacto es 12,468 kWh.' },
          { id: 'd3', text: 'Para una lectura rápida, puede escribirse aproximadamente 12,000 kWh.' },
          { id: 'd4', text: 'Finalmente, ambos valores deben conservar la unidad y el rótulo de caso simulado.' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer',
          prompt: 'Con las Fichas A y B ya suministradas, escribe la **introducción** y **un párrafo de desarrollo**. Incluye “según…”, una unidad y el rótulo de caso simulado. No agregues mediciones, recibos ni entrevistas.' },
        { minWords: 45, placeholder: 'Título: …\nIntroducción breve: …\nDesarrollo (un párrafo): …',
          model: 'Título: Datos para usar mejor la iluminación\nIntroducción: Este informe analiza un caso escolar simulado; no describe nuestra escuela. La pregunta es qué recomendación permite sostener el paquete.\nDesarrollo: Según la Ficha B, una lámpara usó 9 W y otra 60 W bajo condiciones comparables. Además, la guía recomienda apagar las luces de espacios vacíos. Estos datos no muestran cuánto ahorró una escuela real.',
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
      brief: 'Animación 2D de 50 s en cuatro etapas con rótulo: 1) REVISAR: una lupa marca un dato sin fuente y una conclusión exagerada. 2) CORREGIR: un lápiz ajusta concordancia, tildes y la frase “ahorra siempre” por una afirmación respaldada. 3) EDITAR: aparecen título, nombre, fecha, una gráfica pequeña de 9 W y 60 W, el rótulo “caso simulado” y las fuentes. 4) REDACCIÓN FINAL: hoja limpia y legible. Narración en español, subtítulos. Target: public/media/s08-l1-5-revision.mp4. Accesibilidad: subtítulos completos, transcripción y pausa suficiente para lectura.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'conocer', title: 'Primero se revisa el contenido',
          prompt: 'La presentación final viene después de comprobar ideas y fuentes.' },
        { icon: 'Search', body: '**Revisar** comprueba si el informe responde la pregunta y está ordenado; luego se corrige la lengua y al final se edita la presentación.' },
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
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7'], ambito: 'hacer', title: 'Ejemplo resuelto: corregir un párrafo',
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
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.7', 'l1:8.2.7'], ambito: 'hacer',
          prompt: 'Eres editor o editora. Toca las **palabras con error** en este fragmento del informe de Daniela.',
          hint: 'Busca: mayúsculas en nombres propios, concordancia de número (sujeto-verbo, sustantivo-adjetivo) y tildes.',
          explain: 'Correcciones: “segun” → según; “lamparas” → lámparas; “usa” → usan (sujeto plural); “tambien” → también.' },
        { target: 'errores', text: '{segun} la ficha, las {lamparas} comparadas {usa} distinta potencia y {tambien} requieren registrar la unidad.' },
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
          { id: 'e3', text: 'Agregar una gráfica pequeña con título y unidad', bucket: 'edi' },
          { id: 'e4', text: 'Descubrir que un dato no tiene fuente', bucket: 'rev' },
          { id: 'e5', text: 'Cambiar "los niños juega" por "los niños juegan"', bucket: 'cor' },
          { id: 'e6', text: 'Escribir título, nombre, grado y fecha', bucket: 'edi' },
        ] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.7', 'l1:8.2.4'], ambito: 'emprender',
          prompt: 'Cierra el **informe breve de energía** usando solo las dos fichas suministradas en la lección. Trabaja en una hoja o en tu cuaderno; no se requiere entrevista, búsqueda externa ni entrega digital.' },
        { goal: 'Revisar en papel un informe breve que responda una pregunta sobre ahorro de energía con fuentes honestas.',
          steps: [
            { title: 'Completa', detail: 'Escribe una introducción de dos oraciones, un párrafo con dos datos suministrados y una conclusión.' },
            { title: 'Revisa', detail: '¿Responde la pregunta? ¿Cada párrafo tiene una idea? ¿Cada dato ajeno tiene su "según…"? Marca con lápiz lo que haya que arreglar.' },
            { title: 'Corrige', detail: 'Haz tres pasadas: 1) concordancia de género y número y de sujeto con verbo, 2) tildes y mayúsculas, 3) puntos y comas.' },
            { title: 'Edita', detail: 'Agrega título, un esquema sencillo y la lista de las dos fichas suministradas.' },
            { title: 'Redacción final', detail: 'Pásalo en limpio en la misma hoja y comprueba que diga “caso simulado” cuando corresponda.' },
          ],
          evidence: 'Informe breve en papel o cuaderno con introducción, un párrafo, conclusión y dos fuentes suministradas.',
          rubric: [
            'Tiene título, introducción, desarrollo, conclusión y fuentes',
            'Responde la pregunta de investigación con datos de las fuentes',
            'Todas las ideas ajenas están citadas o parafraseadas con su fuente',
            'No tiene errores de concordancia, tildes ni mayúsculas',
            'Está ordenado, cabe en una hoja e incluye un esquema',
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
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.7'], prompt: 'Corrige el borrador eligiendo la forma correcta para cada espacio.' },
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
