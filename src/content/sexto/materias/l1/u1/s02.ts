/**
 * Comunicación y Lenguaje L1 · Unidad 1 · Semana 2
 * Hilo de la semana: leer para aprender en todas las materias (estrategias antes, durante y
 * después de leer; leer problemas; leer datos, listas y tablas) y usar el orden alfabético
 * para encontrar información en diccionarios, glosarios e índices.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's02-l1-1',
    title: 'Leer para aprender: antes, durante y después',
    icon: 'BookOpen',
    minutes: 14,
    gancho: 'Cuando lees un texto de Ciencias para estudiar, ¿lo lees igual que un cuento para divertirte?',
    objetivos: [
      'Usar estrategias antes, durante y después de leer un texto de estudio',
      'Predecir el contenido de un texto a partir del título y las imágenes',
      'Descubrir el significado de palabras nuevas por el contexto',
    ],
    resumen: [
      'Antes de leer: mira el título, los subtítulos y las imágenes; piensa qué sabes del tema y para qué vas a leer.',
      'Durante la lectura: lee por párrafos, detente para comprobar si entiendes y descubre las palabras nuevas por el contexto.',
      'Después de leer: di con tus palabras de qué trató el texto y responde tus preguntas.',
      'El contexto son las palabras que rodean a una palabra desconocida; muchas veces explican su significado.',
    ],
    media: {
      id: 's02-l1-1-panaderia', kind: 'image', title: 'La panadería del mercado', aspect: '16:9',
      alt: 'Una panadera amasa en un puesto del mercado. Al lado, una lupa gigante muestra la masa por dentro: muchas burbujas pequeñas.',
      brief: 'Ilustración cálida de un puesto de pan en un mercado guatemalteco: canastos con pan dulce (conchas, pirujos) y una panadera con delantal amasando. En un círculo tipo lupa, el interior de la masa con burbujas de aire y diminutas células de levadura representadas como puntitos ovalados (estilo didáctico, no realista). Rótulos pequeños: "masa", "burbujas de gas", "levadura". Colores cálidos, sin marcas.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'conocer',
          prompt: 'Vas a leer un texto titulado **"La levadura: una ayudante invisible en la panadería"**. Solo con el título y la imagen, ¿de qué crees que tratará?',
          explain: 'Predecir con el título y las imágenes es una estrategia de lectura: prepara tu mente para lo que vas a leer. Enseguida comprobarás si acertaste.' },
        { options: [
          { id: 'a', text: 'De algo muy pequeño que ayuda a hacer el pan', icon: 'Microscope' },
          { id: 'b', text: 'De cómo vender pan en el mercado', icon: 'Store', feedback: 'La imagen muestra una panadería, pero el título habla de una "ayudante invisible". Algo no se ve…' },
          { id: 'c', text: 'De una panadera que se vuelve invisible', icon: 'EyeOff', feedback: 'Suena a cuento divertido, pero la lupa de la imagen da una pista: es algo diminuto.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'conocer', title: 'Tres momentos de la lectura',
          prompt: 'Las buenas lectoras y los buenos lectores hacen cosas **antes, durante y después** de leer. Toca cada tarjeta.' },
        { icon: 'BookOpen', body: 'Leer para **aprender** (en Ciencias, Sociales o Matemáticas) es un trabajo activo: tu mente pregunta, comprueba y resume.', reveal: [
          { icon: 'Search', front: 'Antes de leer', back: 'Mira el **título**, los **subtítulos** y las **imágenes**. Pregúntate: ¿qué sé de este tema? ¿Para qué voy a leer? ¿De qué tratará?' },
          { icon: 'Eye', front: 'Durante la lectura', back: 'Lee **párrafo por párrafo**. Al terminar cada uno, pregúntate: ¿qué me dijo? Si encuentras una palabra nueva, busca pistas en las palabras que la rodean (el **contexto**).' },
          { icon: 'CheckCircle', front: 'Después de leer', back: 'Di con **tus palabras** de qué trató el texto. Comprueba tu predicción. Responde las preguntas que tenías.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: descubrir una palabra por el contexto',
          prompt: 'Mira cómo Juana descubre qué significa una palabra sin usar el diccionario.' },
        { icon: 'Lightbulb', problem: 'Oración: "La levadura **fermenta** la masa: se alimenta de sus azúcares y suelta un gas que forma burbujas." ¿Qué significa "fermenta"?',
          steps: [
            { text: 'Leo la oración completa y busco pistas cerca de la palabra.' },
            { text: 'Después de los dos puntos (:) el texto **explica** qué pasa: la levadura se alimenta de azúcares y suelta un gas.', why: 'Los dos puntos muchas veces anuncian una explicación.' },
            { text: 'Propongo un significado: "fermentar" es cuando algo diminuto se alimenta de los azúcares y produce gas.' },
            { text: 'Compruebo: cambio la palabra por mi explicación y la oración sigue teniendo sentido.' },
          ],
          answer: '"Fermentar" es transformar una sustancia (como la masa) cuando seres diminutos se alimentan de sus azúcares y producen gas u otras sustancias.',
          tip: 'Pistas de contexto: dos puntos, "es decir", "o sea", comas que explican, ejemplos y palabras contrarias.' },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1', 'cnt'], cnb: ['l1:4.2.1'], ambito: 'conocer',
          prompt: 'Ahora lee el texto completo **párrafo por párrafo**. Al terminar cada uno, detente y piensa: ¿qué me dijo? Luego responde.',
          hint: 'Si una pregunta te cuesta, vuelve al párrafo donde se habla de eso.' },
        { genre: 'Texto expositivo (Ciencias Naturales)', heading: 'La levadura: una ayudante invisible en la panadería', passage:
          'En el mercado, el olor a pan recién horneado llega hasta la calle. Pero pocas personas saben que en cada pan trabajó una ayudante que no se ve a simple vista: la levadura.\n\nLa levadura es un hongo tan pequeño que solo se puede observar con un microscopio. Está formada por una sola célula. La que se compra en las tiendas parece un polvo o una pastita, pero cada granito contiene muchísimas levaduras vivas y dormidas.\n\nCuando la panadera mezcla la levadura con harina, agua y un poco de azúcar, las levaduras despiertan y fermentan la masa: se alimentan de sus azúcares y sueltan un gas llamado dióxido de carbono. El gas forma burbujas que quedan atrapadas en la masa y la hacen crecer. Por eso se deja "reposar" la masa antes de hornearla.\n\nEn el horno, el calor hace que las levaduras mueran, pero las burbujas se quedan. Esos agujeritos que ves cuando partes un pan son la huella de su trabajo.\n\nAsí, gracias a un ser vivo diminuto, el pan queda suave y esponjoso.',
          questions: [
            { q: '¿Qué tipo de ser vivo es la levadura?', options: [
              { id: 'a', text: 'Un hongo formado por una sola célula' },
              { id: 'b', text: 'Una planta pequeña' },
              { id: 'c', text: 'Un tipo de harina' },
            ], correct: 'a', why: 'Segundo párrafo: "La levadura es un hongo… formada por una sola célula".' },
            { q: '¿Por qué se deja "reposar" la masa antes de hornearla?', options: [
              { id: 'a', text: 'Para dar tiempo a que las levaduras produzcan gas y la masa crezca' },
              { id: 'b', text: 'Para que la panadera descanse' },
              { id: 'c', text: 'Para que la masa se enfríe' },
            ], correct: 'a', why: 'El tercer párrafo explica que el gas forma burbujas que hacen crecer la masa; eso toma tiempo.' },
            { q: '¿Qué pasaría si alguien hace pan sin levadura?', options: [
              { id: 'a', text: 'Probablemente quedaría plano y duro, sin agujeritos' },
              { id: 'b', text: 'Quedaría más esponjoso' },
              { id: 'c', text: 'Olería más fuerte' },
            ], correct: 'a', why: 'Es una inferencia: sin levadura no hay gas, sin gas no hay burbujas, y sin burbujas la masa no crece.' },
            { q: '¿Se cumplió la predicción que hiciste al inicio?', options: [
              { id: 'a', text: 'Sí: el texto trata de algo diminuto que ayuda a hacer el pan' },
              { id: 'b', text: 'No: el texto trata de cómo vender pan' },
            ], correct: 'a', why: 'Comprobar la predicción es parte del "después de leer".' },
          ] },
      ),
      S.match(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'hacer', prompt: 'Vocabulario del texto. Une cada palabra con su significado, usando las pistas del contexto.',
          hint: 'Vuelve a leer la oración donde aparece cada palabra.',
          explain: 'Todas estas palabras se explican dentro del mismo texto. Leer con atención al contexto te ahorra tiempo.' },
        { leftTitle: 'Palabra', rightTitle: 'Significado', pairs: [
          { id: 'v1', left: 'microscopio', right: 'Instrumento para ver cosas diminutas' },
          { id: 'v2', left: 'reposar', right: 'Dejar quieta la masa un tiempo' },
          { id: 'v3', left: 'esponjoso', right: 'Suave y lleno de agujeritos' },
          { id: 'v4', left: 'huella', right: 'Señal que queda de algo que pasó' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'hacer', prompt: 'Mañana leerás un texto de Ciencias Sociales para una tarea. Ordena lo que harás.',
          explain: 'Antes (mirar y predecir), durante (leer por partes y resolver dudas), después (resumir y comprobar).' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'o1', text: 'Leo el título y los subtítulos y miro las imágenes' },
          { id: 'o2', text: 'Pienso qué sé del tema y para qué lo voy a leer' },
          { id: 'o3', text: 'Leo párrafo por párrafo y me detengo a comprobar si entiendo' },
          { id: 'o4', text: 'Busco en el contexto el significado de las palabras nuevas' },
          { id: 'o5', text: 'Digo con mis palabras de qué trató y respondo mis preguntas' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'hacer',
          prompt: 'Lee: "Las **artesanas** de San Antonio Aguas Calientes tejen en telar de cintura, es decir, un telar que se ata a la cintura de quien teje." Según el contexto, ¿qué es un **telar de cintura**?',
          explain: 'La expresión "es decir" anuncia una explicación: el propio texto te dice el significado.' },
        { options: [
          { id: 'a', text: 'Un telar que se ata a la cintura de quien teje' },
          { id: 'b', text: 'Un cinturón tejido', feedback: 'Relee lo que viene después de "es decir".' },
          { id: 'c', text: 'Una tienda de tejidos', feedback: 'El texto habla de una herramienta para tejer, no de un lugar.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'hacer',
          prompt: '**Después de leer**: explica con tus palabras, en 2 o 3 oraciones, por qué el pan queda esponjoso. No copies del texto.' },
        { minWords: 20, placeholder: 'El pan queda esponjoso porque…',
          model: 'El pan queda esponjoso porque la levadura, que es un hongo diminuto, se come los azúcares de la masa y suelta un gas. Ese gas hace burbujas que inflan la masa. En el horno las burbujas se quedan y forman los agujeritos.',
          rubric: [
            'Mencioné la levadura y lo que hace',
            'Expliqué el papel del gas o de las burbujas',
            'Lo dije con mis propias palabras',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.1'], prompt: '¿Qué estrategia corresponde al momento **antes de leer**?' },
        { options: [
          { id: 'a', text: 'Mirar el título y las imágenes para predecir de qué trata' },
          { id: 'b', text: 'Resumir el texto con mis palabras' },
          { id: 'c', text: 'Responder las preguntas finales' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.1'], prompt: 'Lee: "El **cayuco**, una pequeña lancha hecha de un solo tronco, cruzaba el lago." ¿Qué es un cayuco?' },
        { options: [
          { id: 'a', text: 'Una lancha pequeña hecha de un tronco' },
          { id: 'b', text: 'Un pez del lago' },
          { id: 'c', text: 'Un árbol que crece junto al agua' },
        ], correct: ['a'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's02-l1-2',
    title: 'Leer un problema paso a paso',
    icon: 'Calculator',
    minutes: 13,
    gancho: 'Muchas veces un problema de Matemáticas sale mal no por la operación, sino porque no se leyó bien. ¿Te ha pasado?',
    objetivos: [
      'Leer un problema identificando la pregunta y los datos',
      'Distinguir los datos necesarios de los que sobran',
      'Reconocer palabras clave que orientan la operación',
    ],
    resumen: [
      'Un problema tiene una situación, datos (números con su significado) y una pregunta.',
      'Primero busca la pregunta: te dice qué tienes que encontrar. Luego elige solo los datos que sirven para responderla.',
      'Algunos problemas traen datos que sobran: léelos, pero no los uses.',
      'Palabras clave como "cada", "en total", "le quedan" o "reparte en partes iguales" dan pistas, pero siempre comprueba que la respuesta tenga sentido.',
    ],
    media: {
      id: 's02-l1-2-puesto', kind: 'image', title: 'El puesto de doña Marta', aspect: '4:3',
      alt: 'Puesto de aguacates en el mercado de Sololá con redes de seis aguacates y un cartel que dice "Red de 6: Q15".',
      brief: 'Ilustración de un puesto de mercado en el altiplano: mesa con redes de aguacates (6 por red, contables), una vendedora con traje de Sololá bordado (representación respetuosa), un cartel escrito a mano "Red de 6: Q15". Al fondo, otros puestos con verduras y el lago de Atitlán lejano. Estilo didáctico, colores vivos, sin marcas.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'conocer',
          prompt: 'Lee el problema: "Doña Marta vende aguacates en el mercado de Sololá. Cada red tiene 6 aguacates y cuesta Q15. Su hijo Tomás tiene 11 años. El sábado vendió 12 redes. ¿Cuánto dinero recibió por las redes?"\n\n¿Qué **pregunta** el problema?',
          explain: 'La pregunta es la parte más importante: te dice qué tienes que encontrar. Todo lo demás se lee pensando en ella.' },
        { options: [
          { id: 'a', text: 'Cuánto dinero recibió por las redes que vendió', icon: 'Coins' },
          { id: 'b', text: 'Cuántos años tiene Tomás', icon: 'User', feedback: 'Ese dato aparece, pero no es lo que se pregunta.' },
          { id: 'c', text: 'Cuántos aguacates tiene una red', icon: 'Package', feedback: 'Eso ya lo dice el problema: es un dato, no la pregunta.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'conocer', title: 'Las partes de un problema',
          prompt: 'Un problema es un texto con una forma especial. Toca cada tarjeta para conocer sus partes.' },
        { icon: 'FileText', body: 'Leer un problema es leer **con lupa**: cada número y cada palabra pueden ser importantes… o pueden sobrar.', reveal: [
          { icon: 'Store', front: 'La situación', back: 'La historia: quién, dónde, qué pasa. Ejemplo: "Doña Marta vende aguacates en el mercado de Sololá".' },
          { icon: 'Hash', front: 'Los datos', back: 'Los **números con su significado**: "6 aguacates por red", "Q15 cada red", "12 redes". Un número sin su significado no sirve.' },
          { icon: 'HelpCircle', front: 'La pregunta', back: 'Lo que tienes que **encontrar**. Suele estar al final y empieza con "¿Cuánto…?", "¿Cuántos…?", "¿Qué…?".' },
          { icon: 'Trash2', front: 'Datos que sobran', back: 'A veces el problema trae información que **no se necesita** para responder, como la edad de Tomás. Se lee, pero no se usa.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1', 'mat'], cnb: ['l1:4.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: leer y resolver el problema de doña Marta',
          prompt: 'Mira cómo se lee el problema en cinco pasos.' },
        { icon: 'Search', problem: '"Doña Marta vende aguacates en el mercado de Sololá. Cada red tiene 6 aguacates y cuesta Q15. Su hijo Tomás tiene 11 años. El sábado vendió 12 redes. ¿Cuánto dinero recibió por las redes?"',
          steps: [
            { text: '**Leo todo** una vez, sin hacer cuentas, para entender la situación.' },
            { text: '**Busco la pregunta**: ¿cuánto dinero recibió por las redes?' },
            { text: '**Elijo los datos que sirven**: Q15 cada red y 12 redes vendidas.', why: 'Para saber el dinero, importa el precio de cada red y cuántas vendió.' },
            { text: '**Descarto lo que sobra**: 6 aguacates por red y 11 años de Tomás no se necesitan para esta pregunta.' },
            { text: '**Decido y resuelvo**: "cada red cuesta Q15" y son 12 redes → 12 × 15 = 180.' },
          ],
          answer: 'Doña Marta recibió **Q180** por las 12 redes.',
          tip: 'Responde siempre con una oración completa que repita la pregunta: así compruebas que respondiste lo que se pedía.' },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'hacer',
          prompt: 'Ahora tú. Toca **solo los datos necesarios** para responder la pregunta.\n\n_Pregunta: ¿Cuántos tamales le sobraron a don Efraín?_',
          hint: 'Para saber cuántos sobraron, necesitas cuántos hizo y cuántos vendió.',
          explain: 'Solo importan los tamales que hizo (80) y los que vendió (65): 80 − 65 = 15. La hora y el precio son datos que sobran para esta pregunta.' },
        { target: 'datos necesarios', text: 'Don Efraín abrió su puesto a las 6 de la mañana. Hizo {80 tamales} de arroz. Cada tamal cuesta Q5. Al mediodía ya había vendido {65 tamales}. ¿Cuántos tamales le sobraron?' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'conocer', prompt: 'Las palabras clave dan pistas sobre la operación. Clasifica cada expresión.',
          hint: 'Piensa en una situación del mercado con cada expresión.',
          explain: 'Las palabras clave orientan, pero no siempre mandan: lee todo el problema y verifica que la operación tenga sentido.' },
        { buckets: [
          { id: 'mas', label: 'Suele indicar juntar (sumar)', icon: 'Plus', color: 'var(--c-ok)' },
          { id: 'men', label: 'Suele indicar quitar o comparar (restar)', icon: 'Minus', color: 'var(--c-maiz-strong)' },
          { id: 'por', label: 'Grupos iguales (multiplicar)', icon: 'X', color: 'var(--area-l1)' },
          { id: 'div', label: 'Repartir (dividir)', icon: 'Slash', color: 'var(--area-mat)' },
        ], items: [
          { id: 'k1', text: '"en total juntó"', bucket: 'mas' },
          { id: 'k2', text: '"¿cuántos le quedan?"', bucket: 'men' },
          { id: 'k3', text: '"cada caja trae 12"', bucket: 'por' },
          { id: 'k4', text: '"se reparte en partes iguales"', bucket: 'div' },
          { id: 'k5', text: '"¿cuántos más tiene Ana que Luis?"', bucket: 'men', feedback: 'Comparar cuántos más tiene uno que otro se resuelve restando.' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['l1', 'mat'], cnb: ['l1:4.2.1'], ambito: 'hacer',
          prompt: 'Lee con cuidado: "En el mercado de San Francisco El Alto, Julia compró 4 costales de maíz. Cada costal pesa 50 libras. Pagó con un billete de Q200 y el viaje en bus duró 2 horas. ¿Cuántas libras de maíz compró en total?"',
          explain: 'Datos necesarios: 4 costales y 50 libras cada uno → 4 × 50 = 200 libras. El billete y el tiempo del viaje sobran.' },
        { answer: 200, unit: 'libras', misconceptions: [
          { value: 54, msg: 'Sumaste 4 + 50. Pero son 4 costales de 50 libras cada uno: son grupos iguales.' },
          { value: 50, msg: '50 libras es lo que pesa un solo costal. Julia compró 4 costales: multiplica.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'hacer',
          prompt: '"Un grupo de 28 estudiantes visitó el mercado. Se organizaron en grupos de 4 para entrevistar a vendedores. Cada grupo hizo 3 preguntas." ¿Qué **pregunta** se puede responder con los datos **"28 estudiantes" y "grupos de 4"**?',
          explain: 'Con 28 estudiantes y grupos de 4 se puede saber cuántos grupos se formaron: 28 ÷ 4 = 7.' },
        { options: [
          { id: 'a', text: '¿Cuántos grupos se formaron?' },
          { id: 'b', text: '¿Cuántas preguntas hizo cada estudiante?', feedback: 'Para eso necesitarías saber cómo se repartieron las preguntas dentro del grupo.' },
          { id: 'c', text: '¿A qué hora llegaron al mercado?', feedback: 'El problema no da ningún dato sobre la hora.' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Todos los números que aparecen en un problema se deben usar.', answer: false, why: 'Algunos problemas traen datos que sobran.' },
          { text: 'La pregunta del problema dice qué tienes que encontrar.', answer: true },
          { text: 'Conviene leer todo el problema antes de empezar a hacer operaciones.', answer: true },
        ] },
      ),
      S.highlight(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.1'], prompt: 'Toca los **datos necesarios** para responder la pregunta.\n\n_Pregunta: ¿Cuánto pagó Luis por las naranjas?_' },
        { target: 'datos necesarios', text: 'Luis tiene 12 años. Compró {3 docenas de naranjas} a {Q10 cada docena}. Llegó al mercado a las 8 de la mañana. ¿Cuánto pagó Luis por las naranjas?' },
      ),
    ],
  }),

  // ───────────────────────────── Lección 3 ─────────────────────────────
  lesson({
    id: 's02-l1-3',
    title: 'Leer para estudiar: datos, listas y tablas',
    icon: 'ClipboardList',
    minutes: 14,
    gancho: 'Si alguien te pregunta qué día hay mercado en Chichicastenango, ¿lees todo un libro o buscas rápido el dato?',
    objetivos: [
      'Localizar datos en textos de estudio de distintas materias',
      'Leer una tabla por filas y columnas',
      'Usar negritas, listas y subtítulos como guías de lectura',
    ],
    resumen: [
      'En los textos de estudio, los subtítulos, las negritas y las listas te guían: te dicen dónde está cada información.',
      'Para buscar un dato no hace falta leer todo con detalle: primero ubica la parte donde está (lectura de búsqueda) y luego lee esa parte con atención.',
      'Una tabla organiza datos en filas (horizontales) y columnas (verticales). El dato está donde se cruzan la fila y la columna que te interesan.',
    ],
    media: {
      id: 's02-l1-3-tabla', kind: 'diagram', title: 'Cómo se lee una tabla', aspect: '16:9',
      alt: 'Tabla de tres columnas (Mercado, Departamento, Días principales) con una fila resaltada en amarillo y una columna resaltada en celeste; en su cruce, una estrella marca el dato buscado.',
      brief: 'Diagrama animable de una tabla sencilla con encabezados "Mercado", "Departamento", "Días principales" y tres filas: Chichicastenango | El Quiché | jueves y domingo; San Francisco El Alto | Totonicapán | viernes; Sololá | Sololá | martes y viernes. Resaltar la fila "Chichicastenango" en amarillo y la columna "Días principales" en celeste; en el cruce, una estrella y el rótulo "¡Aquí está el dato!". Flechas: "fila →", "columna ↓". Estilo plano, legible en teléfono.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'conocer',
          prompt: 'Tienes un libro de Ciencias Sociales de 200 páginas y necesitas saber **en qué departamento está San Francisco El Alto**. ¿Qué haces?',
          explain: 'Para buscar un dato no se lee todo el libro: se usan las guías del texto (índice, subtítulos, negritas, tablas) para ir directo a la parte que sirve.' },
        { options: [
          { id: 'a', text: 'Leo el libro completo desde la página 1', icon: 'BookOpen', feedback: 'Funcionaría… ¡pero tardarías días! Hay formas más rápidas.' },
          { id: 'b', text: 'Busco un subtítulo, una lista o una tabla sobre los municipios o mercados', icon: 'Search' },
          { id: 'c', text: 'Adivino', icon: 'HelpCircle', feedback: 'Adivinar no es investigar. Busca el dato en el texto.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'conocer', title: 'Las guías de un texto de estudio',
          prompt: 'Los textos de estudio tienen **señales** que te ayudan a encontrar la información. Toca cada tarjeta.' },
        { icon: 'Signpost', body: 'Leer para estudiar tiene dos velocidades: **rápida** para ubicar dónde está la información y **lenta** para entenderla bien.', reveal: [
          { icon: 'Heading', front: 'Títulos y subtítulos', back: 'Dividen el texto en partes. Leyéndolos sabes en qué parte está lo que buscas.' },
          { icon: 'Bold', front: 'Negritas', back: 'Las palabras en **negrita** son las más importantes: conceptos, nombres, fechas.' },
          { icon: 'List', front: 'Listas con viñetas', back: 'Presentan varios elementos de forma ordenada: pasos, características, ejemplos.' },
          { icon: 'Table', front: 'Tablas', back: 'Organizan datos en **filas** (horizontales →) y **columnas** (verticales ↓). El dato está en el cruce.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1', 'ccss'], cnb: ['l1:4.2.1'], ambito: 'conocer',
          prompt: 'Lee este texto de Ciencias Sociales. Usa los **subtítulos y la lista** para encontrar rápido cada respuesta.',
          hint: 'Primero mira los subtítulos y decide en qué parte está cada respuesta.' },
        { genre: 'Texto expositivo (Ciencias Sociales)', heading: 'Los mercados de Guatemala', passage:
          '**¿Qué es un día de mercado?**\n\nEn muchos pueblos de Guatemala, el mercado no abre igual todos los días. Hay **días de mercado**, en los que llegan vendedores y compradores de aldeas y municipios cercanos. Esos días, la plaza se llena de colores, voces y olores.\n\n**Algunos mercados conocidos**\n\n• **Chichicastenango** (El Quiché): jueves y domingo.\n• **San Francisco El Alto** (Totonicapán): viernes; es famoso por su gran tamaño.\n• **Sololá** (Sololá): martes y viernes.\n\n**Más que comprar y vender**\n\nEn el mercado también se encuentran familias, se comparten noticias y se hablan distintos idiomas, como el k\'iche\', el kaqchikel y el español. Por eso, el mercado es un lugar de **intercambio cultural**, no solo de productos.',
          questions: [
            { q: '¿Qué días hay mercado en Chichicastenango?', options: [
              { id: 'a', text: 'Jueves y domingo' },
              { id: 'b', text: 'Martes y viernes' },
              { id: 'c', text: 'Solo viernes' },
            ], correct: 'a', why: 'Está en la lista, bajo el subtítulo "Algunos mercados conocidos".' },
            { q: '¿Bajo qué subtítulo buscarías **por qué el mercado es importante para la cultura**?', options: [
              { id: 'a', text: '"Más que comprar y vender"' },
              { id: 'b', text: '"Algunos mercados conocidos"' },
              { id: 'c', text: '"¿Qué es un día de mercado?"' },
            ], correct: 'a', why: 'Ese subtítulo anuncia que el mercado es algo más que un lugar de compras.' },
            { q: 'Según el texto, ¿qué significa que el mercado sea un lugar de **intercambio cultural**?', options: [
              { id: 'a', text: 'Que ahí se comparten noticias, costumbres e idiomas, además de productos' },
              { id: 'b', text: 'Que solo se venden artesanías' },
              { id: 'c', text: 'Que solo llegan turistas' },
            ], correct: 'a', why: 'El último párrafo lo explica: familias que se encuentran, noticias e idiomas.' },
          ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: leer una tabla',
          prompt: 'Supongamos que una escuela anotó los **precios de algunas verduras** en dos mercados. Mira cómo se encuentra un dato.' },
        { icon: 'Table', problem: 'Tabla (datos supuestos):\n\nVerdura | Mercado A | Mercado B\nTomate (libra) | Q5 | Q4\nGüisquil (unidad) | Q2 | Q3\nCebolla (libra) | Q6 | Q6\n\n¿Cuánto cuesta el güisquil en el Mercado B?',
          steps: [
            { text: 'Leo el **título de las columnas**: Verdura, Mercado A, Mercado B.', why: 'Así sé qué información hay en cada columna.' },
            { text: 'Busco la **fila** del güisquil (horizontal →).' },
            { text: 'Busco la **columna** del Mercado B (vertical ↓).' },
            { text: 'Leo el dato donde se **cruzan**: Q3.' },
          ],
          answer: 'El güisquil cuesta **Q3** la unidad en el Mercado B.',
          tip: 'Fila + columna = dato. Pon un dedo en la fila y otro en la columna, y júntalos.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'hacer',
          prompt: 'Con la misma tabla del ejemplo: ¿en qué mercado el **tomate** es más barato?',
          hint: 'Busca la fila del tomate y compara las dos columnas de mercados.',
          explain: 'En la fila del tomate: Mercado A = Q5 y Mercado B = Q4. Es más barato en el B.' },
        { options: [
          { id: 'a', text: 'En el Mercado A' , feedback: 'En el Mercado A cuesta Q5; en el B, Q4.' },
          { id: 'b', text: 'En el Mercado B' },
          { id: 'c', text: 'Cuesta igual en los dos', feedback: 'La que cuesta igual en ambos es la cebolla.' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'hacer', prompt: 'Observa la tabla del diagrama principal (mercados y días). ¿Verdadero o falso?',
          explain: 'Para responder, cruza la fila de cada mercado con la columna "Días principales".' },
        { statements: [
          { text: 'San Francisco El Alto está en Totonicapán.', answer: true },
          { text: 'Sololá tiene mercado los domingos.', answer: false, why: 'En la tabla, Sololá tiene martes y viernes.' },
          { text: 'Los viernes hay mercado tanto en San Francisco El Alto como en Sololá.', answer: true },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.1'], ambito: 'hacer',
          prompt: 'Piensa en el mercado o la tienda más cercana a tu casa. Haz una **tabla pequeña** con tres productos y su precio aproximado (pregunta en casa o recuerda). Usa columnas: Producto | Precio | Unidad (libra, unidad, manojo…). Después escribe una oración sobre algo que notes en tu tabla.' },
        { minWords: 15, placeholder: 'Producto | Precio | Unidad\n… | … | …\n\nOración: …',
          model: 'Producto | Precio | Unidad\nFrijol negro | Q8 | libra\nAguacate | Q5 | unidad\nCilantro | Q2 | manojo\n\nOración: El frijol es el más caro de mi tabla, pero se compra por libra y rinde para varios días.',
          rubric: [
            'Mi tabla tiene títulos en las columnas',
            'Cada fila tiene producto, precio y unidad',
            'Escribí una oración que usa los datos de la tabla',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.1'], prompt: 'En una tabla, ¿dónde está el dato que buscas?' },
        { options: [
          { id: 'a', text: 'Donde se cruzan la fila y la columna que te interesan' },
          { id: 'b', text: 'Siempre en la primera fila' },
          { id: 'c', text: 'Debajo de la tabla, en letra pequeña' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.1'], prompt: 'Un libro de Ciencias Naturales tiene los subtítulos: "Partes de la planta", "Cómo se alimentan las plantas" y "Plantas medicinales de Guatemala". ¿En cuál buscarías qué es la **fotosíntesis**?' },
        { options: [
          { id: 'a', text: '"Cómo se alimentan las plantas"' },
          { id: 'b', text: '"Partes de la planta"' },
          { id: 'c', text: '"Plantas medicinales de Guatemala"' },
        ], correct: ['a'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 4 ─────────────────────────────
  lesson({
    id: 's02-l1-4',
    title: 'El orden alfabético, letra por letra',
    icon: 'ListOrdered',
    minutes: 13,
    gancho: 'En la lista de asistencia de tu grado, ¿por qué hay un orden y no se escriben los nombres como van llegando?',
    objetivos: [
      'Ordenar palabras alfabéticamente comparando la primera, segunda y tercera letra',
      'Ubicar la ñ y los dígrafos ch y ll en el orden alfabético',
      'Reconocer para qué sirve el orden alfabético',
    ],
    resumen: [
      'El abecedario del español tiene 27 letras: a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z.',
      'Para ordenar, compara la primera letra; si es igual, la segunda; si también es igual, la tercera, y así sucesivamente.',
      'La ñ va después de la n. Ch y ll no son letras aparte: "chile" se ordena dentro de la c y "llama" dentro de la l.',
      'Si una palabra es igual al comienzo de otra más larga, la más corta va primero: "sol" antes que "solar".',
    ],
    media: {
      id: 's02-l1-4-abecedario', kind: 'animation', title: 'Letra por letra', aspect: '16:9', duration: 45,
      alt: 'Las palabras "cebolla", "chile" y "cilantro" se comparan letra por letra hasta que queda claro su orden.',
      brief: 'Animación 2D de 45 s. Arriba, el abecedario de 27 letras en una tira. Aparecen tres tarjetas con dibujos: cebolla, cilantro, chile, desordenadas. Todas empiezan con c (la c se ilumina en las tres). Luego se ilumina la segunda letra: e, i, h; en la tira del abecedario se marcan e, h, i y las tarjetas se reacomodan: cebolla, chile, cilantro. Narración: "Si la primera letra es igual, mira la segunda". Final con texto: "La ñ va después de la n. Ch se ordena dentro de la c; ll, dentro de la l".',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:4.2.2'], ambito: 'conocer',
          prompt: 'Quieres ordenar alfabéticamente: **cebolla, cilantro, chile**. Las tres empiezan con **c**. ¿Qué haces?',
          explain: 'Cuando la primera letra es igual, se compara la segunda: e (cebolla), h (chile), i (cilantro). Como en el abecedario va e, luego h, luego i, el orden es: cebolla, chile, cilantro.' },
        { options: [
          { id: 'a', text: 'Miro la segunda letra de cada palabra', icon: 'Search' },
          { id: 'b', text: 'Las ordeno por tamaño, de la más corta a la más larga', icon: 'Ruler', feedback: 'El largo no importa para el orden alfabético.' },
          { id: 'c', text: 'No se pueden ordenar porque empiezan igual', icon: 'X', feedback: 'Sí se pueden: hay que seguir comparando las letras siguientes.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.2'], ambito: 'conocer', title: 'Reglas del orden alfabético',
          prompt: 'Mira la animación y toca cada tarjeta.' },
        { icon: 'ListOrdered', body: 'El **orden alfabético** ordena las palabras según el lugar de sus letras en el abecedario: **a b c d e f g h i j k l m n ñ o p q r s t u v w x y z** (27 letras).', reveal: [
          { icon: 'Hash', front: 'Letra por letra', back: 'Compara la **primera** letra. Si es igual, compara la **segunda**; si también es igual, la **tercera**, y así. Ejemplo: **ma**íz, **me**rcado, **mi**el.' },
          { icon: 'Type', front: 'La ñ', back: 'La **ñ** es una letra propia del español y va **después de la n**: nube, nudo, ñandú.' },
          { icon: 'Link', front: 'Ch y ll', back: 'Son **dígrafos** (dos letras que suenan como un solo sonido), no letras aparte. "Chile" se ordena como c + h: va después de "cebolla" y antes de "cilantro". "Llama" va en la l, después de "lima".' },
          { icon: 'Ruler', front: 'La más corta primero', back: 'Si una palabra es el comienzo de otra, la más corta va primero: **sol**, **sol**ar; **pan**, **pan**adería.' },
          { icon: 'Type', front: 'Las tildes no cuentan', back: 'Al ordenar, "á" cuenta igual que "a": "árbol" va junto a "arbusto" según sus letras.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.2'], ambito: 'hacer', title: 'Ejemplo resuelto: cuando las primeras letras son iguales',
          prompt: 'Mira cómo se ordenan palabras que empiezan igual.' },
        { icon: 'ListOrdered', problem: 'Ordena alfabéticamente: **mango, maíz, manzana, mandarina**.',
          steps: [
            { text: 'Primera letra: todas tienen **m**. Segunda letra: todas tienen **a**. Hay que seguir.' },
            { text: 'Tercera letra: ma**í**z → i; ma**n**go → n; ma**n**zana → n; ma**n**darina → n. La **i** va antes que la **n**, así que **maíz** va primero.', why: 'La tilde no cambia la letra: í cuenta como i.' },
            { text: 'Quedan tres con "man". Cuarta letra: man**g**o → g; man**z**ana → z; man**d**arina → d.' },
            { text: 'Ordeno d, g, z: **mandarina**, **mango**, **manzana**.' },
          ],
          answer: 'maíz, mandarina, mango, manzana',
          tip: 'Avanza una letra a la vez y separa las palabras que ya "ganaron" su lugar.' },
      ),
      S.order(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.2'], ambito: 'hacer', prompt: 'Ahora tú. Ordena alfabéticamente estas palabras del mercado.',
          hint: 'Todas empiezan con p. Mira la segunda letra: a, e, i, l, o… ¿cuál va primero en el abecedario?',
          explain: 'pa (panela), pe (pepino), pi (piña), pl (plátano), po (pollo): a, e, i, l, o.' },
        { labels: { start: 'Primero', end: 'Último' }, items: [
          { id: 'w1', text: 'panela' },
          { id: 'w2', text: 'pepino' },
          { id: 'w3', text: 'piña' },
          { id: 'w4', text: 'plátano' },
          { id: 'w5', text: 'pollo' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.2'], ambito: 'conocer',
          prompt: '¿Cuál es el orden alfabético correcto?',
          hint: 'Recuerda: la ñ va después de la n, y la ll se ordena dentro de la l.',
          explain: 'lima (l-i) va antes que llama (l-l) porque i va antes que l. Luego nube (n) y después ñandú (ñ).' },
        { options: [
          { id: 'a', text: 'lima, llama, nube, ñandú' },
          { id: 'b', text: 'llama, lima, nube, ñandú', feedback: 'Compara la segunda letra: lima tiene i y llama tiene l. La i va antes.' },
          { id: 'c', text: 'lima, llama, ñandú, nube', feedback: 'La ñ va después de la n, no antes.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.2'], ambito: 'hacer', prompt: 'La maestra va a hacer la lista de asistencia. Ordena los apellidos alfabéticamente.',
          explain: 'Chávez (c-h) va antes que Cojtí (c-o). Luego López, Pérez y Tzoc. Así se ordena una lista: por apellido y letra por letra.' },
        { labels: { start: 'Primero', end: 'Último' }, items: [
          { id: 'a1', text: 'Chávez' },
          { id: 'a2', text: 'Cojtí' },
          { id: 'a3', text: 'López' },
          { id: 'a4', text: 'Pérez' },
          { id: 'a5', text: 'Tzoc' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.2'], ambito: 'hacer', prompt: 'Reto: estas palabras comparten muchas letras al inicio. Ordénalas.',
          explain: '"Sol" es la más corta y es el comienzo de las demás: va primero. Luego compara la cuarta letra: sol**a**r (a), sol**d**ado (d), sol**e**dad (e). Orden: sol, solar, soldado, soledad.' },
        { labels: { start: 'Primero', end: 'Último' }, items: [
          { id: 's1', text: 'sol' },
          { id: 's2', text: 'solar' },
          { id: 's3', text: 'soldado' },
          { id: 's4', text: 'soledad' },
        ] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La ñ va antes de la n en el abecedario.', answer: false, why: 'La ñ va después de la n.' },
          { text: '"Chocolate" se ordena dentro de la letra c.', answer: true },
          { text: '"Mar" va antes que "marimba" en orden alfabético.', answer: true },
        ] },
      ),
      S.order(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.2'], prompt: 'Ordena alfabéticamente.' },
        { labels: { start: 'Primero', end: 'Último' }, items: [
          { id: 'c1', text: 'canasta' },
          { id: 'c2', text: 'carbón' },
          { id: 'c3', text: 'chipilín' },
          { id: 'c4', text: 'comal' },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 5 ─────────────────────────────
  lesson({
    id: 's02-l1-5',
    title: 'Diccionarios, glosarios e índices',
    icon: 'Library',
    minutes: 15,
    gancho: 'Un diccionario tiene miles de palabras. ¿Cómo hace alguien para encontrar una en pocos segundos?',
    objetivos: [
      'Usar las palabras guía para encontrar rápido una palabra en el diccionario',
      'Buscar la forma básica de una palabra (singular, masculino, infinitivo)',
      'Elegir el significado adecuado según el contexto y usar glosarios e índices',
    ],
    resumen: [
      'Las palabras guía, arriba de cada página del diccionario, indican la primera y la última palabra de esa página. Tu palabra está ahí si, en orden alfabético, cae entre las dos.',
      'En el diccionario las palabras aparecen en su forma básica: sustantivos y adjetivos en singular y masculino (si tienen), y los verbos en infinitivo (terminados en -ar, -er, -ir).',
      'Muchas palabras tienen varios significados numerados: elige el que tenga sentido en tu oración.',
      'Un glosario es una lista alfabética de palabras difíciles de un libro con su significado; un índice alfabético dice en qué página aparece cada tema.',
    ],
    media: {
      id: 's02-l1-5-palabras-guia', kind: 'image', title: 'Las palabras guía', aspect: '4:3',
      alt: 'Página abierta de un diccionario con dos palabras guía arriba, "mercado" y "mesa", marcadas con círculos, y la entrada "merienda" resaltada en medio de la página.',
      brief: 'Ilustración de una página de diccionario escolar (sin marca ni editorial real). En la parte superior, en negrita, las palabras guía "mercado" (izquierda) y "mesa" (derecha), rodeadas con círculos de color y la etiqueta "palabras guía". En la columna, varias entradas en orden (mercado, merecer, merengue, merienda, mermelada, mes, mesa), con "merienda" resaltada y su definición numerada 1 y 2. Estilo limpio, letra legible.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:4.2.2'], ambito: 'conocer',
          prompt: 'Arriba de una página del diccionario dice **"mercado — mesa"**. ¿Estará en esa página la palabra **"merienda"**?',
          explain: 'Sí. Comparando letra por letra: mer-c (mercado) < mer-i (merienda) < mes (mesa). "Merienda" cae entre las dos palabras guía, así que está en esa página.' },
        { options: [
          { id: 'a', text: 'Sí, porque en orden alfabético está entre "mercado" y "mesa"', icon: 'Check' },
          { id: 'b', text: 'No, porque "merienda" no empieza igual que "mesa"', icon: 'X', feedback: 'No tiene que empezar igual: basta con que quede entre las dos palabras guía.' },
          { id: 'c', text: 'No se puede saber sin leer toda la página', icon: 'HelpCircle', feedback: 'Las palabras guía existen justamente para no tener que leer toda la página.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.2'], ambito: 'conocer', title: 'Tres secretos para usar el diccionario',
          prompt: 'Toca cada tarjeta.' },
        { icon: 'Book', body: 'El diccionario está en **orden alfabético**. Si dominas el orden alfabético, dominas el diccionario.', reveal: [
          { icon: 'Bookmark', front: '1. Palabras guía', back: 'Arriba de cada página aparecen la **primera** y la **última** palabra de esa página. Si tu palabra queda entre las dos, está ahí.' },
          { icon: 'Search', front: '2. La forma básica', back: 'El diccionario no trae todas las formas. Busca: **singular** (tomates → tomate), **masculino** si lo tiene (roja → rojo) y el **infinitivo** de los verbos (vendían → vender; compré → comprar).' },
          { icon: 'ListOrdered', front: '3. El significado correcto', back: 'Muchas palabras tienen **varias acepciones** numeradas (1, 2, 3…). Lee todas y elige la que tiene sentido en tu oración.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.2'], ambito: 'hacer', prompt: 'Une cada palabra de un texto con la forma en que la buscarías en el diccionario.',
          hint: 'Sustantivos y adjetivos: singular (y masculino si lo tienen). Verbos: terminados en -ar, -er o -ir.',
          explain: 'Encontrar la forma básica es el primer paso para usar bien el diccionario.' },
        { leftTitle: 'En el texto', rightTitle: 'En el diccionario', pairs: [
          { id: 'f1', left: 'regatearon', right: 'regatear' },
          { id: 'f2', left: 'canastos', right: 'canasto' },
          { id: 'f3', left: 'maduras', right: 'maduro' },
          { id: 'f4', left: 'vendimos', right: 'vender' },
          { id: 'f5', left: 'pregonaba', right: 'pregonar' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.2'], ambito: 'hacer', title: 'Ejemplo resuelto: elegir la acepción correcta',
          prompt: 'Mira cómo se elige el significado adecuado.' },
        { icon: 'BookOpen', problem: 'Oración: "El vendedor puso la fruta en el **banco** de madera." En el diccionario, "banco" tiene: 1. Asiento largo para varias personas. 2. Empresa que guarda y presta dinero. 3. Conjunto de peces que nadan juntos.',
          steps: [
            { text: 'Leo la oración completa: habla de un vendedor, fruta y madera.' },
            { text: 'Pruebo cada acepción en la oración. "Puso la fruta en la empresa que guarda dinero" no tiene sentido. "En el conjunto de peces", tampoco.' },
            { text: '"Puso la fruta en el asiento largo de madera" sí tiene sentido.', why: 'La acepción correcta es la que encaja con el contexto.' },
          ],
          answer: 'En esta oración, **banco** significa la acepción 1: asiento largo.',
          tip: 'Truco: cambia la palabra por el significado y lee la oración otra vez.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.2'], ambito: 'hacer',
          prompt: 'Ahora tú. "Mi abuela guardó las monedas en su **cartera**." Acepciones: 1. Bolsa pequeña para llevar dinero y documentos. 2. Mochila escolar (en algunos lugares). 3. Cargo de un ministro. ¿Cuál corresponde?',
          hint: 'Prueba cada significado en la oración: ¿dónde se guardan monedas?',
          explain: 'Las monedas se guardan en una bolsa pequeña para dinero: acepción 1.' },
        { options: [
          { id: 'a', text: 'Acepción 1' },
          { id: 'b', text: 'Acepción 2', feedback: 'Una mochila escolar no es lo usual para guardar monedas.' },
          { id: 'c', text: 'Acepción 3', feedback: 'Esa acepción se usa al hablar de gobiernos, no de monedas.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:4.2.2', 'l1:4.2.1'], ambito: 'conocer', title: 'Glosarios e índices',
          prompt: 'El orden alfabético también está **dentro de tus libros**. Toca cada tarjeta.' },
        { icon: 'Library', body: 'Al final de muchos libros de texto hay herramientas ordenadas alfabéticamente para ayudarte a encontrar información.', reveal: [
          { icon: 'List', front: 'Glosario', back: 'Lista de las **palabras difíciles** del libro con su significado, en orden alfabético. Ejemplo: "**fermentar**: transformar una sustancia por la acción de seres diminutos".' },
          { icon: 'Hash', front: 'Índice alfabético', back: 'Lista de **temas o nombres** con las **páginas** donde aparecen. Ejemplo: "levadura, 24, 31".' },
          { icon: 'FileText', front: 'Índice general', back: 'Está al inicio o al final y sigue el **orden de los capítulos**, no el alfabético. Sirve para ver cómo está organizado el libro.' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l1', 'cnt'], cnb: ['l1:4.2.2', 'l1:4.2.1'], ambito: 'hacer', prompt: 'Estás armando el **glosario** de tu cuaderno de Ciencias. Ordena alfabéticamente estas palabras.',
          explain: 'Todas empiezan con letras distintas: b (bacteria), c (célula), h (hongo), l (levadura), m (microscopio). La tilde de "célula" no cambia su lugar.' },
        { labels: { start: 'Primero', end: 'Último' }, items: [
          { id: 'g1', text: 'bacteria' },
          { id: 'g2', text: 'célula' },
          { id: 'g3', text: 'hongo' },
          { id: 'g4', text: 'levadura' },
          { id: 'g5', text: 'microscopio' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:4.2.2'], ambito: 'hacer',
          prompt: 'Buscas **"tejer"** en el diccionario. Tienes tres páginas con estas palabras guía. ¿En cuál está?',
          explain: 'te-j está después de te-c (techo) y antes de te-l (teléfono): página "techo — teléfono".' },
        { options: [
          { id: 'a', text: '"tapete — taza"', feedback: 'Todas esas palabras empiezan con "ta"; "tejer" empieza con "te".' },
          { id: 'b', text: '"techo — teléfono"' },
          { id: 'c', text: '"temblor — tener"', feedback: 'tem… ya está después de tej…: "tejer" quedó en la página anterior.' },
        ], correct: ['b'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.2'], prompt: 'Leíste: "Los niños **recogieron** las mazorcas." ¿Qué palabra buscas en el diccionario?' },
        { options: [
          { id: 'a', text: 'recoger' },
          { id: 'b', text: 'recogieron' },
          { id: 'c', text: 'recogido' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.2'], prompt: 'Las palabras guía de una página son **"lista — lobo"**. ¿Cuál de estas palabras **está** en esa página?' },
        { options: [
          { id: 'a', text: 'llave' },
          { id: 'b', text: 'lima' },
          { id: 'c', text: 'maleta' },
        ], correct: ['a'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l1'], cnb: [], ambito: 'ser', prompt: '¿Cómo te fue esta semana leyendo para aprender?' },
        { statements: [
          'Uso estrategias antes, durante y después de leer',
          'Distingo la pregunta y los datos de un problema',
          'Encuentro datos en listas y tablas',
          'Ordeno palabras alfabéticamente y uso el diccionario',
        ], commitments: [
          'Leeré el título y los subtítulos antes de estudiar',
          'Buscaré en el diccionario una palabra nueva cada día',
          'Haré un glosario en mi cuaderno de Ciencias',
        ] },
      ),
    ],
  }),
];
