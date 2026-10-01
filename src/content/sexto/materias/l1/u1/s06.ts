/**
 * Comunicación y Lenguaje L1 · Unidad 1 · Semana 6
 * Hilo de la semana: la estructura que sostiene lo que escribimos. Tres lecciones de gramática
 * sobre la oración bimembre (qué es, cómo encontrar el sujeto, el predicado y su núcleo) y dos
 * lecciones para planificar un trabajo (pasos del plan y cronograma). La semana termina con el
 * plan de la mini-investigación de la unidad, que continúa en las semanas 7 (preguntas y
 * fuentes) y 8 (honestidad intelectual e informe escrito).
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's06-l1-1',
    title: 'La oración: unimembre y bimembre',
    icon: 'AlignJustify',
    minutes: 14,
    gancho: '"¡Buenos días!" y "Las raíces sostienen la tierra" son oraciones. ¿Por qué una se puede partir en dos y la otra no?',
    objetivos: [
      'Analizar la estructura de oraciones unimembres y bimembres',
    ],
    resumen: [
      'Una oración es una palabra o grupo de palabras con sentido completo. Empieza con mayúscula y termina con punto (o con signos de interrogación o exclamación).',
      'La oración unimembre no se puede dividir en sujeto y predicado: ¡Buenos días!, Llueve., ¡Qué calor!',
      'La oración bimembre tiene dos partes: el sujeto (de quién o de qué se habla) y el predicado (lo que se dice del sujeto).',
      'El núcleo del predicado es el verbo: la palabra que expresa la acción o el estado.',
    ],
    media: {
      id: 's06-l1-1-arbol', kind: 'diagram', title: 'La oración es como un árbol', aspect: '4:3',
      alt: 'Un árbol dibujado: en las raíces dice "Sujeto: Las raíces de la ceiba"; en el tronco y la copa dice "Predicado: sostienen la tierra del barranco". El verbo "sostienen" está resaltado en el tronco.',
      brief: 'Diagrama ilustrado de una ceiba con raíces grandes. La oración "Las raíces de la ceiba sostienen la tierra del barranco" está dividida: la parte "Las raíces de la ceiba" escrita sobre las raíces con la etiqueta SUJETO (color azul); "sostienen la tierra del barranco" escrita en el tronco y la copa con la etiqueta PREDICADO (color verde); la palabra "sostienen" resaltada en amarillo con la etiqueta "núcleo: verbo". Una línea vertical separa ambas partes. Letra grande, fondo claro.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'conocer', title: 'Dos clases de oraciones',
          prompt: 'Una **oración** es una palabra o un grupo de palabras con **sentido completo**. Hay oraciones que se pueden partir en dos y otras que no. Toca cada tarjeta.' },
        { icon: 'AlignJustify', body: 'Por escrito, la oración empieza con **mayúscula** y termina con **punto**, o con **signos** de interrogación (¿?) o exclamación (¡!).', reveal: [
          { icon: 'Circle', front: 'Unimembre', back: 'Tiene **un solo miembro**: no se puede dividir en sujeto y predicado. Saludos, exclamaciones y fenómenos del clima: _¡Buenos días!, ¡Qué frío!, Llueve., Gracias._' },
          { icon: 'SplitSquareHorizontal', front: 'Bimembre', back: 'Tiene **dos miembros**: sujeto y predicado. _Las raíces | sostienen la tierra._' },
          { icon: 'User', front: 'Sujeto', back: 'Es **de quién o de qué se habla**. Responde a la pregunta **¿quién?** o **¿qué?** hecha al verbo: ¿qué sostiene la tierra? → _las raíces_.' },
          { icon: 'Zap', front: 'Predicado', back: 'Es **lo que se dice del sujeto**. Su palabra principal (núcleo) es el **verbo**: _sostienen la tierra_.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer', title: 'Ejemplo resuelto: partir una oración en dos',
          prompt: 'Observa el diagrama del árbol y sigue los pasos para separar sujeto y predicado.' },
        { icon: 'Search', problem: 'Oración: "**Las raíces de la ceiba sostienen la tierra del barranco.**"',
          steps: [
            { text: 'Busco el **verbo** (la acción): **sostienen**.' },
            { text: 'Le pregunto al verbo **¿qué sostiene(n)?** → "las raíces de la ceiba". Ese es el **sujeto**.', why: 'Se pregunta ¿quién? para personas y ¿qué? para cosas.' },
            { text: 'Todo lo demás, incluido el verbo, es el **predicado**: "sostienen la tierra del barranco".' },
            { text: 'Compruebo: si cambio el sujeto a singular ("La raíz de la ceiba"), el verbo también cambia ("sostiene").', why: 'El sujeto y el verbo concuerdan en número: es la prueba de que encontré el sujeto correcto.' },
          ],
          answer: '**Sujeto:** Las raíces de la ceiba | **Predicado:** sostienen la tierra del barranco.',
          tip: 'Primero el verbo, después la pregunta ¿quién? o ¿qué?' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'conocer',
          prompt: '¿Cuál de estos grupos de palabras **tiene sentido completo**, es decir, se entiende sin que falte nada?',
          explain: '"Las raíces sostienen la tierra" dice algo completo: sabemos de qué se habla y qué se dice de ello. Las otras opciones dejan la idea a medias.' },
        { options: [
          { id: 'a', text: 'Las raíces de la ceiba', feedback: 'Sabemos de qué se habla, pero no qué pasa con las raíces: está incompleto.' },
          { id: 'b', text: 'Las raíces sostienen la tierra.' },
          { id: 'c', text: 'sostienen la tierra del', feedback: 'Falta saber quién sostiene y "del" queda colgando.' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.6'], prompt: 'Clasifica cada oración: ¿unimembre o bimembre?',
          hint: 'Pregunta: ¿hay alguien o algo de quien se dice una acción? Si sí, es bimembre. Saludos, exclamaciones y "llueve" o "amanece" son unimembres.',
          explain: 'Las bimembres se separan en sujeto y predicado; las unimembres expresan sentido completo sin esa división.' },
        { buckets: [
          { id: 'uni', label: 'Unimembre', icon: 'Circle', color: 'var(--c-maiz-strong)' },
          { id: 'bi', label: 'Bimembre', icon: 'SplitSquareHorizontal', color: 'var(--area-l1)' },
        ], items: [
          { id: 'o1', text: '¡Buenas tardes!', bucket: 'uni' },
          { id: 'o2', text: 'Mi abuela siembra chipilín.', bucket: 'bi' },
          { id: 'o3', text: 'Llueve.', bucket: 'uni', feedback: '"Llueve" tiene sentido completo, pero no hay nadie que haga la acción: es unimembre.' },
          { id: 'o4', text: 'Los pinos crecen en la montaña.', bucket: 'bi' },
          { id: 'o5', text: '¡Qué árbol tan alto!', bucket: 'uni' },
          { id: 'o6', text: 'El viento mueve las hojas.', bucket: 'bi' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.6', 'l1:4.2.1'], ambito: 'conocer',
          prompt: 'Lee este texto expositivo. Además de entenderlo, fíjate en sus oraciones: casi todas son **bimembres**.' },
        { genre: 'Texto expositivo', heading: 'La ceiba: raíces que sostienen', passage:
          'La ceiba es el árbol nacional de Guatemala. Crece en las tierras cálidas del país y puede superar los cuarenta metros de altura. Su tronco es grueso y recto, y sus ramas se abren arriba como una sombrilla.\n\n' +
          'Lo más llamativo de la ceiba está abajo. Sus raíces forman grandes paredes de madera alrededor del tronco. Estas raíces sostienen al árbol durante las tormentas. También agarran la tierra y evitan que la lluvia se la lleve.\n\n' +
          'Para los pueblos mayas, la ceiba es un árbol sagrado. En su visión del mundo, sus raíces llegan al inframundo, su tronco está en la tierra de los humanos y sus ramas tocan el cielo. Por eso, en muchas plazas de pueblos guatemaltecos hay una ceiba en el centro.\n\n' +
          'Sus frutos guardan una fibra blanca y suave, parecida al algodón. Antes, algunas familias la usaban para rellenar almohadas.\n\n' +
          'Cuidar una ceiba es cuidar mucho más que un árbol: es proteger la tierra, el agua y la memoria de un pueblo.',
          questions: [
            { q: '¿Qué hacen las raíces de la ceiba, según el texto?', options: [
              { id: 'a', text: 'Sostienen al árbol y evitan que la lluvia se lleve la tierra' },
              { id: 'b', text: 'Producen una fibra parecida al algodón' },
              { id: 'c', text: 'Tocan el cielo' },
            ], correct: 'a', why: 'Segundo párrafo: "sostienen al árbol durante las tormentas" y "evitan que la lluvia se la lleve".' },
            { q: '¿Por qué crees que hay ceibas en el centro de muchas plazas?', options: [
              { id: 'a', text: 'Porque es un árbol sagrado e importante para la cultura del pueblo' },
              { id: 'b', text: 'Porque es el árbol más pequeño' },
              { id: 'c', text: 'Porque sus frutos se venden en la plaza' },
            ], correct: 'a', why: 'El texto lo relaciona con su valor sagrado para los pueblos mayas ("Por eso…").' },
            { q: 'En la oración "_Estas raíces sostienen al árbol durante las tormentas_", ¿cuál es el sujeto?', options: [
              { id: 'a', text: 'Estas raíces' },
              { id: 'b', text: 'al árbol' },
              { id: 'c', text: 'durante las tormentas' },
            ], correct: 'a', why: '¿Qué sostiene al árbol? → "estas raíces". Si digo "Esta raíz", el verbo cambia a "sostiene".' },
            { q: '¿Qué quiere decir la última oración del texto?', options: [
              { id: 'a', text: 'Que la ceiba tiene valor para la naturaleza y para la cultura' },
              { id: 'b', text: 'Que la ceiba solo sirve para dar sombra' },
              { id: 'c', text: 'Que no hay que tocar las ceibas' },
            ], correct: 'a', why: 'Habla de la tierra y el agua (naturaleza) y de la memoria de un pueblo (cultura).' },
          ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer',
          prompt: '¿Dónde está **bien dividida** la oración en sujeto | predicado?',
          explain: '¿Quién riega el vivero? → "Mi hermana mayor". El predicado es "riega el vivero cada tarde".' },
        { options: [
          { id: 'a', text: 'Mi hermana mayor | riega el vivero cada tarde.' },
          { id: 'b', text: 'Mi hermana | mayor riega el vivero cada tarde.', feedback: '"Mayor" dice cómo es la hermana: pertenece al sujeto.' },
          { id: 'c', text: 'Mi hermana mayor riega | el vivero cada tarde.', feedback: 'El verbo "riega" es el núcleo del predicado: va en el predicado.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer',
          prompt: 'Escribe **tres oraciones bimembres** sobre un árbol o una planta que conozcas. Separa el sujeto del predicado con una barra ( | ). Después escribe **una oración unimembre** que dirías al verla.' },
        { minWords: 25, placeholder: '1. … | …\n2. … | …\n3. … | …\nUnimembre: …',
          model: '1. El aguacate de mi patio | da frutos en verano.\n2. Sus hojas oscuras | dan sombra a las gallinas.\n3. Mi papá | lo sembró hace diez años.\nUnimembre: ¡Qué aguacates tan grandes!',
          rubric: [
            'Escribí tres oraciones con sentido completo',
            'Cada oración tiene sujeto y predicado',
            'Puse la barra entre el sujeto y el predicado',
            'Escribí una oración unimembre (saludo o exclamación)',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.6'], prompt: '¿Cuál es una oración **unimembre**?' },
        { options: [
          { id: 'a', text: '¡Feliz cumpleaños!' },
          { id: 'b', text: 'Los niños cantan en la plaza.' },
          { id: 'c', text: 'La ceiba da sombra.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.6'], prompt: 'En la oración "_El río Motagua desemboca en el mar Caribe_", ¿cuál es la parte llamada **predicado**?' },
        { options: [
          { id: 'a', text: 'desemboca en el mar Caribe' },
          { id: 'b', text: 'El río Motagua' },
          { id: 'c', text: 'el mar Caribe' },
        ], correct: ['a'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's06-l1-2',
    title: 'Detectives del sujeto',
    icon: 'Search',
    minutes: 14,
    gancho: 'En "Mañana regará el vivero doña Juana", ¿quién riega? El sujeto a veces se esconde al final… o ni siquiera aparece.',
    objetivos: [
      'Encontrar el sujeto preguntando ¿quién? o ¿qué? al verbo',
    ],
    resumen: [
      'Para encontrar el sujeto: busca el verbo y pregúntale ¿quién? o ¿qué? Comprueba cambiando el número: si cambia el verbo, encontraste el sujeto.',
      'El sujeto puede ir al inicio, en medio o al final: "Protege el agua el bosque" (el sujeto es el bosque).',
      'Sujeto tácito: no está escrito, pero se sabe por el verbo. "Sembramos pinos" → (nosotros). La oración sigue siendo bimembre.',
      'El núcleo del sujeto es su palabra principal: un sustantivo o un pronombre. En "Los estudiantes de sexto", el núcleo es estudiantes.',
    ],
    media: {
      id: 's06-l1-2-detective', kind: 'animation', title: 'La pregunta que encuentra al sujeto', aspect: '16:9', duration: 45,
      alt: 'Una lupa recorre una oración, se detiene en el verbo, pregunta "¿quién?" y una flecha señala el sujeto, aunque esté al final de la oración.',
      brief: 'Animación 2D de 45 s con una lupa detective. Oración 1: "Mañana regará el vivero doña Juana." La lupa se detiene en "regará" (resaltado amarillo), aparece un globo "¿Quién regará?" y una flecha va hasta "doña Juana" (resaltado azul, etiqueta SUJETO). Luego la prueba: cambia a "doña Juana y don Pedro" y "regará" se transforma en "regarán". Oración 2: "Sembramos pinos." Aparece en gris un "(nosotros)" fantasma con la etiqueta SUJETO TÁCITO. Narración en español, subtítulos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'conocer', title: 'El método del detective',
          prompt: 'Sigue siempre estos tres pasos. Toca cada tarjeta.' },
        { icon: 'Search', body: 'El sujeto y el verbo **concuerdan** en número y persona: esa es la pista más segura.', reveal: [
          { icon: 'Zap', front: '1. Encuentra el verbo', back: 'La palabra que dice la acción o el estado: _regará, crecen, está, sembraron_.' },
          { icon: 'HelpCircle', front: '2. Pregunta ¿quién? o ¿qué?', back: '"¿**Quién** regará?" → doña Juana. "¿**Qué** crece?" → el maíz. La respuesta es el sujeto.' },
          { icon: 'RefreshCw', front: '3. Comprueba', back: 'Cambia el sujeto a plural o singular. Si el **verbo cambia** también, ¡lo encontraste! _doña Juana regará → doña Juana y don Pedro regarán_.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'conocer', title: 'El sujeto escondido y el núcleo',
          prompt: 'Dos ideas más para ser un buen detective. Toca cada tarjeta.' },
        { icon: 'EyeOff', body: 'En español podemos omitir el sujeto porque **el verbo ya dice quién** hace la acción.', reveal: [
          { icon: 'EyeOff', front: 'Sujeto tácito', back: 'No está escrito, pero se sabe por la terminación del verbo: "Sembramos pinos" → (**nosotros**). "¿Viniste temprano?" → (**tú**). La oración **sigue siendo bimembre**.' },
          { icon: 'Eye', front: 'Sujeto expreso', back: 'Sí está escrito en la oración: "**Nosotros** sembramos pinos".' },
          { icon: 'Target', front: 'Núcleo del sujeto', back: 'Es la palabra principal del sujeto: un **sustantivo** o un **pronombre**. En "Los estudiantes de sexto grado", el núcleo es **estudiantes**. Las demás palabras lo acompañan.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer', title: 'Ejemplo resuelto: un sujeto difícil',
          prompt: 'Mira cómo se resuelve un caso con el sujeto al final.' },
        { icon: 'Search', problem: '"**Cada sábado riegan los arbolitos las familias de la aldea.**" ¿Cuál es el sujeto y cuál es su núcleo?',
          steps: [
            { text: 'Verbo: **riegan**.' },
            { text: '¿**Quién** riega? No son "los arbolitos": los arbolitos **reciben** el agua. Riegan **las familias de la aldea**.', why: 'Cuidado: la primera palabra después del verbo no siempre es el sujeto.' },
            { text: 'Compruebo: "Cada sábado riega los arbolitos **la familia** de la aldea". Cambió el verbo (riegan → riega). ✔' },
            { text: 'Núcleo del sujeto: el sustantivo principal es **familias** ("de la aldea" lo acompaña).' },
          ],
          answer: 'Sujeto: **las familias de la aldea** (núcleo: familias). Predicado: **Cada sábado riegan los arbolitos**.',
          tip: 'El predicado puede quedar partido en dos pedazos alrededor del sujeto. ¡Es normal!' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'conocer',
          prompt: 'Lee: "**Mañana regará el vivero doña Juana.**" ¿Quién va a regar?',
          explain: 'Doña Juana es quien riega, aunque esté al final. El sujeto no siempre va al inicio: por eso necesitamos un método para encontrarlo.' },
        { options: [
          { id: 'a', text: 'doña Juana' },
          { id: 'b', text: 'el vivero', feedback: 'El vivero no riega: es lo que se riega.' },
          { id: 'c', text: 'Mañana', feedback: '"Mañana" dice cuándo, no quién.' },
        ], correct: ['a'] },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer',
          prompt: 'Toca el **sujeto** de cada oración. Cada sujeto cuenta como un solo bloque.',
          hint: 'Busca primero el verbo (sembraron, guardan, regará, protege) y pregúntale "¿quién?" o "¿qué?".',
          explain: 'En la tercera y la cuarta oración el sujeto está al final: "doña Juana" riega y "el bosque comunal" protege.' },
        { target: 'sujetos', text: '{Los estudiantes de sexto} sembraron cien pinos. {Las raíces} guardan el agua de la lluvia. Mañana regará el vivero {doña Juana}. Protege el nacimiento {el bosque comunal}.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer',
          prompt: 'En "**Cosechamos el maíz en noviembre**", ¿cuál es el sujeto?',
          hint: 'No hay ninguna persona nombrada. Mira la terminación del verbo "cosech**amos**".',
          explain: '"Cosechamos" termina en -amos: habla de **nosotros**. Es un sujeto tácito.' },
        { options: [
          { id: 'a', text: 'Nosotros (sujeto tácito)' },
          { id: 'b', text: 'el maíz', feedback: 'El maíz no cosecha: es lo que se cosecha.' },
          { id: 'c', text: 'No tiene sujeto: es unimembre', feedback: 'Sí hay alguien que cosecha, aunque no esté escrito: es bimembre con sujeto tácito.' },
        ], correct: ['a'] },
      ),
      S.highlight(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer',
          prompt: 'Toca el **núcleo del sujeto** (solo la palabra principal) en cada oración.',
          explain: 'Núcleos: tejedoras (las tejedoras de Santiago), lluvia (la lluvia de mayo), raíces (las raíces profundas del amate), Ximena (Ximena, mi prima).' },
        { target: 'núcleos del sujeto', text: 'Las {tejedoras} de Santiago venden sus cortes. La {lluvia} de mayo llena los ríos. Las {raíces} profundas del amate rompen la acera. {Ximena}, mi prima, cuida el huerto.' },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer', prompt: 'Cada oración tiene **sujeto tácito**. Une cada una con su sujeto.',
          explain: 'La terminación del verbo revela la persona: -o (yo); -as, -es o -aste, -iste (tú); -amos, -emos, -imos (nosotros); -an, -en o -aron, -ieron (ellos, ellas o ustedes).' },
        { leftTitle: 'Oración', rightTitle: 'Sujeto tácito', pairs: [
          { id: 't1', left: 'Planto un jocote en el patio.', right: 'yo' },
          { id: 't2', left: '¿Trajiste las semillas?', right: 'tú' },
          { id: 't3', left: 'Regamos el huerto por la tarde.', right: 'nosotros' },
          { id: 't4', left: 'Llegaron temprano a la siembra.', right: 'ellos, ellas o ustedes' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.6'], prompt: 'En "_Por la mañana cantan en el árbol unos pájaros amarillos_", ¿cuál es el sujeto?' },
        { options: [
          { id: 'a', text: 'unos pájaros amarillos' },
          { id: 'b', text: 'el árbol' },
          { id: 'c', text: 'Por la mañana' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.6'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En "Escribimos una carta", el sujeto tácito es "nosotros".', answer: true },
          { text: 'El sujeto siempre es la primera palabra de la oración.', answer: false, why: 'Puede ir al inicio, en medio o al final, o no estar escrito (tácito).' },
          { text: 'En "Los perros del vecino ladran", el núcleo del sujeto es "perros".', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 3 ─────────────────────────────
  lesson({
    id: 's06-l1-3',
    title: 'El predicado: el verbo y lo que lo acompaña',
    icon: 'Zap',
    minutes: 13,
    gancho: '"El niño corre." Es una oración completa… pero ¿no te dan ganas de saber dónde, cuándo y por qué corre?',
    objetivos: [
      'Reconocer el verbo como núcleo del predicado',
    ],
    resumen: [
      'El predicado es todo lo que se dice del sujeto. Su núcleo es el verbo conjugado: siembra, corrían, está.',
      'El predicado se amplía con palabras que responden a ¿qué?, ¿dónde?, ¿cuándo?, ¿cómo? o ¿para qué?',
      'El sujeto también se amplía con palabras que dicen cómo es o de quién es (connotativas y no connotativas).',
      'El verbo debe concordar con el sujeto: "Las raíces sostienen", "La raíz sostiene".',
    ],
    media: {
      id: 's06-l1-3-ampliar', kind: 'animation', title: 'Una oración que crece', aspect: '16:9', duration: 40,
      alt: 'La oración "El niño corre" crece con bloques de colores: "de la aldea", "por el camino de tierra", "cada mañana", "para llegar a la escuela".',
      brief: 'Animación tipográfica de 40 s. Empieza con "El niño | corre." (sujeto azul, predicado verde, verbo amarillo). Van entrando bloques con una etiqueta: "de la aldea" se pega al sujeto (¿cuál niño?); luego al predicado "por el camino de tierra" (¿dónde?), "cada mañana" (¿cuándo?), "con su mochila al hombro" (¿cómo?), "para llegar a la escuela" (¿para qué?). Al final se lee la oración completa. Narración en español, subtítulos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'conocer', title: 'El predicado y su núcleo',
          prompt: 'El **predicado** es todo lo que se dice del sujeto. Toca cada tarjeta.' },
        { icon: 'Zap', body: 'Para encontrar el predicado: primero localiza el **sujeto**; todo lo demás es predicado.', reveal: [
          { icon: 'Target', front: 'Núcleo: el verbo', back: 'El núcleo del predicado es el **verbo conjugado**: la palabra que cambia con la persona y el tiempo (_siembro, siembras, sembraron, sembrará_).' },
          { icon: 'Plus', front: 'Lo que lo acompaña', back: 'Palabras que completan la acción y responden a: **¿qué?** (vende _café_), **¿dónde?** (_en Cobán_), **¿cuándo?** (_los sábados_), **¿cómo?** (_con alegría_), **¿para qué?** (_para ayudar a su familia_).' },
          { icon: 'Link', front: 'Concordancia', back: 'El verbo concuerda con el núcleo del sujeto: "**El** maíz **crece**", "**Los** maíces **crecen**".' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer', title: 'Ejemplo resuelto: hacer crecer una oración',
          prompt: 'Una oración mínima tiene sujeto y verbo. Mira cómo se enriquece sin perder claridad.' },
        { icon: 'Sprout', problem: 'Oración mínima: "**El niño corre.**"',
          steps: [
            { text: 'Amplío el **sujeto**: ¿cuál niño? → "El niño **de la aldea**".' },
            { text: 'Amplío el **predicado** con ¿dónde?: "corre **por el camino de tierra**".' },
            { text: 'Agrego ¿cuándo?: "**cada mañana**".' },
            { text: 'Agrego ¿para qué?: "**para llegar a tiempo a la escuela**".', why: 'Cada bloque responde a una pregunta distinta: así la información no se repite.' },
          ],
          answer: '"**El niño de la aldea** | **corre por el camino de tierra cada mañana para llegar a tiempo a la escuela.**"',
          tip: 'No agregues bloques por agregar: cada uno debe decir algo que el lector necesita saber.' },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'conocer',
          prompt: 'Toca la palabra que dice **la acción** en cada oración.',
          explain: 'Esas palabras son **verbos**: el corazón del predicado. Sin verbo, no hay predicado.' },
        { target: 'verbos', text: 'El maíz {crece} alto. Mi tío {vende} café en Cobán. Las nubes {cubren} el volcán.' },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer',
          prompt: 'Toca el **predicado completo** de cada oración (cada predicado es un solo bloque).',
          hint: 'Primero encuentra el sujeto con la pregunta ¿quién? o ¿qué?; el resto es el predicado.',
          explain: 'Predicados: "vende tamales los domingos", "llegó tarde por la lluvia" y "pintan un mural en la escuela".' },
        { target: 'predicados', text: 'Doña Irma {vende tamales los domingos}. El bus de la aldea {llegó tarde por la lluvia}. Los jóvenes del pueblo {pintan un mural en la escuela}.' },
      ),
      S.match(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer', prompt: 'Une cada parte del predicado con la pregunta que responde.',
          hint: 'Haz la pregunta con el verbo: ¿dónde siembra?, ¿cuándo siembra?…' },
        { leftTitle: 'Parte del predicado', rightTitle: 'Responde a…', pairs: [
          { id: 'q1', left: 'Don Mario siembra **frijol**.', right: '¿Qué?' },
          { id: 'q2', left: 'Don Mario siembra **en la ladera**.', right: '¿Dónde?' },
          { id: 'q3', left: 'Don Mario siembra **en mayo**.', right: '¿Cuándo?' },
          { id: 'q4', left: 'Don Mario siembra **con cuidado**.', right: '¿Cómo?' },
          { id: 'q5', left: 'Don Mario siembra **para vender en el mercado**.', right: '¿Para qué?' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.2.6', 'l1:7.1.2'], ambito: 'hacer',
          prompt: 'Completa cada oración con el **verbo** que concuerda con su sujeto.',
          explain: 'Los pinos (plural) → crecen. La raíz (singular) → absorbe. Mis abuelos (plural) → cuentan. El río (singular) → baja.' },
        { text: 'Los pinos [[crecen]] en la montaña. La raíz [[absorbe]] el agua del suelo. Mis abuelos [[cuentan]] historias por la noche. El río [[baja]] crecido en invierno.',
          distractors: ['crece', 'absorben', 'cuenta', 'bajan'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer',
          prompt: 'Ordena los bloques para formar una oración bimembre con sentido: **sujeto** primero, después **verbo** y lo que lo acompaña.',
          explain: '"Las abejas del apiario | llevan el polen de flor en flor durante la mañana."' },
        { labels: { start: 'Inicio', end: 'Final' }, items: [
          { id: 'b1', text: 'Las abejas del apiario' },
          { id: 'b2', text: 'llevan' },
          { id: 'b3', text: 'el polen de flor en flor' },
          { id: 'b4', text: 'durante la mañana.' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer',
          prompt: 'Haz crecer estas dos oraciones mínimas. Amplía el **sujeto** una vez y el **predicado** con al menos **dos** preguntas (¿qué?, ¿dónde?, ¿cuándo?, ¿cómo?, ¿para qué?).\n\n1. "La vecina teje."\n2. "Los árboles protegen."' },
        { minWords: 25, placeholder: '1. …\n2. …',
          model: '1. La vecina de la esquina teje una faja roja en su telar de cintura todas las tardes.\n2. Los árboles del cerro protegen el nacimiento de agua durante la época seca.',
          rubric: [
            'Amplié el sujeto de cada oración',
            'Amplié el predicado con al menos dos preguntas distintas',
            'El verbo concuerda con el sujeto',
            'Las oraciones se entienden y no repiten información',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.6'], prompt: 'En "_La municipalidad y la escuela organizaron la feria_", ¿cuál es el **predicado**?' },
        { options: [
          { id: 'a', text: 'organizaron la feria' },
          { id: 'b', text: 'La municipalidad y la escuela' },
          { id: 'c', text: 'la feria' },
        ], correct: ['a'] },
      ),
      S.highlight(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.6'], prompt: 'Toca el **núcleo del predicado** (el verbo) de cada oración.' },
        { target: 'verbos', text: 'Mi prima Lucía {estudia} en Quetzaltenango. Todos los lunes {limpiamos} el aula. El volcán de Fuego {lanza} ceniza.' },
      ),
    ],
  }),

  // ───────────────────────────── Lección 4 ─────────────────────────────
  lesson({
    id: 's06-l1-4',
    title: 'Planificar antes de trabajar',
    icon: 'ClipboardList',
    minutes: 14,
    gancho: 'Te dejan un trabajo para dentro de tres semanas. ¿Empiezas hoy, la próxima semana… o la noche antes?',
    objetivos: [
      'Explicar por qué conviene planificar un trabajo',
    ],
    resumen: [
      'Planificar es decidir antes de empezar qué vas a hacer, cómo, con qué, quién y cuándo.',
      'Pasos del plan: 1) entender la tarea, 2) escribir el objetivo, 3) dividir en actividades pequeñas, 4) listar los recursos, 5) poner fechas y responsables, 6) revisar el avance.',
      'Un buen objetivo empieza con un verbo y dice qué quieres lograr: "Explicar de dónde viene el agua de la escuela".',
      'Una tarea grande asusta; dividida en pasos pequeños, se puede hacer.',
    ],
    media: {
      id: 's06-l1-4-plan', kind: 'image', title: 'Dos maneras de hacer la tarea', aspect: '16:9',
      alt: 'Dos escenas lado a lado: a la izquierda, un niño angustiado de noche rodeado de papeles; a la derecha, una niña tranquila marcando actividades en una hoja con su plan.',
      brief: 'Ilustración dividida en dos. Izquierda: Mateo, de noche, con una lámpara, cara de angustia, hojas en desorden y un reloj que marca las 11:00. Derecha: Sofía, de día, tranquila, marcando con un cheque la tercera actividad de una tabla titulada "Mi plan" con columnas Actividad / Fecha / Materiales. Estilo cálido de libro de texto, sin marcas comerciales.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'conocer', title: 'Los pasos de un plan de trabajo',
          prompt: '**Planificar** es decidir, antes de empezar, qué harás, cómo, con qué, quién y cuándo. Toca cada paso.' },
        { icon: 'ClipboardList', body: 'Un plan no es un adorno: es un **mapa** que te dice dónde estás y cuánto falta.', reveal: [
          { icon: 'BookOpen', front: '1. Entender la tarea', back: '¿Qué me piden exactamente? ¿Para cuándo? ¿Cómo se entrega? Subraya las palabras clave de las instrucciones.' },
          { icon: 'Target', front: '2. Escribir el objetivo', back: 'Una oración que empieza con un **verbo**: "**Explicar** de dónde viene el agua de la escuela".' },
          { icon: 'ListOrdered', front: '3. Dividir en actividades', back: 'Pasos pequeños y concretos: hacer preguntas, buscar información, entrevistar, escribir, revisar.' },
          { icon: 'Package', front: '4. Listar recursos', back: '¿Qué necesito? Cuaderno, libros, una persona a quien entrevistar, colores, hojas.' },
          { icon: 'CalendarDays', front: '5. Fechas y responsables', back: 'Una fecha para cada actividad y, si es en grupo, **quién** la hará.' },
          { icon: 'ListChecks', front: '6. Revisar el avance', back: 'Marca lo que terminaste. Si te atrasas, ajusta el plan a tiempo.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: el plan de Sofía',
          prompt: 'Así convirtió Sofía las instrucciones en un plan.' },
        { icon: 'ClipboardCheck', problem: 'Tarea: informe de dos páginas con dibujo y fuentes sobre "¿De dónde viene el agua que llega a nuestra escuela?". Entrega: en tres semanas.',
          steps: [
            { text: '**Entender**: subrayo "dos páginas", "un dibujo", "lista de fuentes", "en tres semanas".' },
            { text: '**Objetivo**: "Explicar de dónde viene el agua de la escuela y cómo llega hasta los chorros".', why: 'Empieza con un verbo y dice qué quiero lograr.' },
            { text: '**Actividades**: 1) escribir preguntas, 2) entrevistar al conserje, 3) visitar el tanque, 4) leer sobre el ciclo del agua, 5) escribir el borrador, 6) hacer el dibujo, 7) revisar y pasar en limpio.' },
            { text: '**Recursos**: cuaderno, lápiz, libro de Ciencias, colores, permiso para ver el tanque.' },
            { text: '**Fechas**: semana 1 → actividades 1 a 3; semana 2 → 4 a 6; semana 3 → revisar y entregar.', why: 'Deja la última semana para revisar: siempre surge algo.' },
          ],
          answer: 'Un plan de una página que dice qué hacer cada semana. Sofía solo tiene que seguirlo y marcar lo que termina.',
          tip: 'Si una actividad parece enorme, divídela otra vez.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'conocer',
          prompt: 'La maestra pide un informe para dentro de **tres semanas**. ¿Qué es lo **primero** que conviene hacer?',
          explain: 'Antes de buscar información o escribir, hay que **entender bien la tarea** y hacer un plan. Si no, podrías trabajar mucho… en lo que no te pidieron.' },
        { options: [
          { id: 'a', text: 'Leer bien las instrucciones y hacer un plan', icon: 'ClipboardList' },
          { id: 'b', text: 'Empezar a escribir cualquier cosa para avanzar', icon: 'PenLine', feedback: 'Sin saber bien qué te piden, podrías tener que empezar de nuevo.' },
          { id: 'c', text: 'Esperar a la última semana', icon: 'Hourglass', feedback: 'Así el tiempo no alcanza para buscar, escribir y revisar.' },
        ], correct: ['a'] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'conocer',
          prompt: 'Lee la historia de Sofía y Mateo. Fíjate en **qué hizo diferente** cada uno.' },
        { genre: 'Relato', heading: 'Dos maneras de hacer la tarea', passage:
          'La maestra Elvira anunció: "En tres semanas, cada pareja entregará un informe sobre esta pregunta: ¿De dónde viene el agua que llega a nuestra escuela? Debe tener dos páginas, un dibujo y la lista de fuentes".\n\n' +
          'Mateo pensó: "Tres semanas es muchísimo tiempo". Guardó la hoja de instrucciones en la mochila y se olvidó del asunto.\n\n' +
          'Sofía, en cambio, leyó las instrucciones dos veces y subrayó lo que pedían: dos páginas, un dibujo, lista de fuentes. Luego dividió el trabajo en pasos: hacer preguntas, entrevistar al conserje, visitar el tanque de agua, escribir, revisar y pasar en limpio. Anotó una fecha para cada paso en su cuaderno.\n\n' +
          'Como Sofía y Mateo eran pareja, dos días antes de la entrega ella le preguntó por su parte. Mateo se puso pálido: no había hecho nada. Esa noche se desveló copiando lo que pudo, sin dibujo y sin fuentes.\n\n' +
          'Al final, Sofía entregó su parte completa y le propuso a Mateo algo: "Para el próximo trabajo, hagamos el plan juntos desde el primer día".',
          questions: [
            { q: '¿Qué pedía la maestra en el informe?', options: [
              { id: 'a', text: 'Dos páginas, un dibujo y la lista de fuentes' },
              { id: 'b', text: 'Una maqueta del tanque de agua' },
              { id: 'c', text: 'Una exposición oral' },
            ], correct: 'a', why: 'Está en las instrucciones del primer párrafo, y Sofía lo subrayó.' },
            { q: '¿Qué hizo Sofía con la tarea grande?', options: [
              { id: 'a', text: 'La dividió en pasos pequeños con una fecha para cada uno' },
              { id: 'b', text: 'La hizo toda en una noche' },
              { id: 'c', text: 'Se la dejó toda a Mateo' },
            ], correct: 'a', why: 'Hizo una lista de pasos y anotó una fecha para cada uno: eso es planificar.' },
            { q: '¿Por qué el trabajo de Mateo quedó incompleto?', options: [
              { id: 'a', text: 'Porque no planificó y dejó todo para el final' },
              { id: 'b', text: 'Porque el tema era muy difícil' },
              { id: 'c', text: 'Porque la maestra le dio menos tiempo' },
            ], correct: 'a', why: 'Tenía el mismo tiempo que Sofía, pero no organizó su trabajo.' },
            { q: '¿Qué opinas de la propuesta final de Sofía?', options: [
              { id: 'a', text: 'Es buena: planificar juntos ayuda a que los dos cumplan' },
              { id: 'b', text: 'Es inútil: cada quien debe trabajar solo' },
              { id: 'c', text: 'Es injusta con Mateo' },
            ], correct: 'a', why: 'En un trabajo en pareja, un plan compartido deja claro qué hace cada quien y cuándo.' },
          ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'hacer',
          prompt: 'Ahora tú. ¿Cuál es el **objetivo mejor escrito** para un trabajo sobre las plantas medicinales de tu comunidad?',
          hint: 'Un buen objetivo empieza con un verbo y dice con claridad qué se quiere lograr.',
          explain: 'El objetivo correcto empieza con un verbo (Describir) y dice qué, cuántas y de dónde.' },
        { options: [
          { id: 'a', text: 'Describir tres plantas medicinales que se usan en mi comunidad y para qué sirven.' },
          { id: 'b', text: 'Plantas.', feedback: 'Es solo un tema, no dice qué quieres lograr.' },
          { id: 'c', text: 'Hacer el trabajo bien bonito para sacar buena nota.', feedback: 'Es un deseo, pero no dice qué vas a investigar ni a explicar.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'hacer', prompt: 'Ordena los pasos para planificar un trabajo.',
          explain: 'Entender → objetivo → actividades → recursos → fechas y responsables → revisar el avance.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'p1', text: 'Leer las instrucciones y entender qué me piden' },
          { id: 'p2', text: 'Escribir el objetivo' },
          { id: 'p3', text: 'Dividir el trabajo en actividades pequeñas' },
          { id: 'p4', text: 'Listar los recursos que necesito' },
          { id: 'p5', text: 'Poner fechas y responsables' },
          { id: 'p6', text: 'Revisar el avance y ajustar' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'ser', prompt: '¿Ayuda o estorba al plan de trabajo?',
          explain: 'Planificar implica anticiparse (pedir permisos, repartir tareas) y reservar tiempo para revisar.' },
        { buckets: [
          { id: 'ok', label: 'Ayuda', icon: 'ThumbsUp', color: 'var(--c-ok)' },
          { id: 'no', label: 'Estorba', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'h1', text: 'Pedir con anticipación el permiso para la entrevista', bucket: 'ok' },
          { id: 'h2', text: 'Empezar sin leer las instrucciones', bucket: 'no' },
          { id: 'h3', text: 'Dejar un día libre antes de la entrega para revisar', bucket: 'ok' },
          { id: 'h4', text: 'Que nadie sepa qué le toca en el grupo', bucket: 'no' },
          { id: 'h5', text: 'Marcar en el plan cada actividad terminada', bucket: 'ok' },
          { id: 'h6', text: 'Hacer todo la noche anterior', bucket: 'no' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'emprender',
          prompt: 'Tarea imaginaria: "Preparar una exposición de 3 minutos sobre un árbol de tu comunidad, con un cartel. Entrega: en dos semanas". Escribe tu **plan**: objetivo, al menos **4 actividades**, recursos y en qué semana harás cada actividad.' },
        { minWords: 40, placeholder: 'Objetivo: …\nActividades: 1) … 2) … 3) … 4) …\nRecursos: …\nFechas: …',
          model: 'Objetivo: Explicar cómo es el palo de aguacate de mi casa y para qué lo usamos.\nActividades: 1) Observar el árbol y tomar notas. 2) Preguntar a mi abuela cuándo lo sembraron. 3) Leer sobre el aguacate en el libro de Ciencias. 4) Hacer el cartel con un dibujo. 5) Ensayar la exposición frente a mi familia.\nRecursos: cuaderno, libro de Ciencias, cartulina, colores.\nFechas: semana 1, actividades 1 a 3; semana 2, actividades 4 y 5.',
          rubric: [
            'Mi objetivo empieza con un verbo y dice qué quiero lograr',
            'Escribí al menos cuatro actividades concretas y en orden',
            'Listé los recursos que necesito',
            'Asigné una semana a cada actividad y dejé tiempo para ensayar o revisar',
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.1'], prompt: '¿Qué significa **planificar** un trabajo?' },
        { options: [
          { id: 'a', text: 'Decidir antes de empezar qué haré, cómo, con qué, quién y cuándo' },
          { id: 'b', text: 'Hacer el trabajo lo más rápido posible' },
          { id: 'c', text: 'Copiar el plan de otro compañero' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.1'], prompt: '¿Cuál es un **objetivo** bien escrito?' },
        { options: [
          { id: 'a', text: 'Explicar cómo se prepara el pinol en mi familia.' },
          { id: 'b', text: 'El pinol.' },
          { id: 'c', text: 'Terminar rápido.' },
        ], correct: ['a'] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 5 ─────────────────────────────
  lesson({
    id: 's06-l1-5',
    title: 'El cronograma y el plan de mi investigación',
    icon: 'CalendarDays',
    minutes: 15,
    gancho: 'Si tienes que entregar el viernes de la semana 3, ¿qué día debes terminar el borrador? Un cronograma te lo dice.',
    objetivos: [
      'Organizar las actividades de un trabajo en un cronograma',
    ],
    resumen: [
      'Un cronograma es una tabla que muestra qué actividad se hace en cada fecha o semana.',
      'Se planifica hacia atrás: se parte de la fecha de entrega y se reservan días para revisar, escribir y buscar información.',
      'Cada actividad tiene una fecha; al terminarla se marca. Si hay atraso, se ajusta el cronograma a tiempo.',
      'En las próximas semanas usarás tu plan para hacer preguntas, buscar fuentes y escribir tu informe.',
    ],
    media: {
      id: 's06-l1-5-cronograma', kind: 'diagram', title: 'Un cronograma de tres semanas', aspect: '16:9',
      alt: 'Tabla con actividades en filas y tres semanas en columnas. Casillas coloreadas indican en qué semana se hace cada actividad; una bandera marca la entrega al final de la semana 3.',
      brief: 'Diagrama de un cronograma sencillo tipo tabla. Filas: "Escribir preguntas", "Buscar fuentes", "Entrevistar", "Tomar notas", "Escribir borrador", "Revisar y corregir", "Redacción final". Columnas: Semana 1, Semana 2, Semana 3. Casillas coloreadas en verde (semana 1: preguntas, fuentes; semana 2: entrevistar, notas, borrador; semana 3: revisar, redacción final). Una bandera roja con "Entrega" al final de la semana 3 y una flecha curva hacia atrás con el texto "Planifica desde la entrega hacia atrás". Letra grande.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'conocer', title: '¿Qué es un cronograma?',
          prompt: 'Un **cronograma** es una tabla que muestra **qué** actividad se hace **cuándo**. Observa el diagrama y toca cada tarjeta.' },
        { icon: 'CalendarDays', body: 'La palabra viene del griego: _cronos_ (tiempo) y _grama_ (escrito). Es "el tiempo escrito".', reveal: [
          { icon: 'List', front: 'Filas: actividades', back: 'Cada fila es una actividad concreta: "Entrevistar al conserje", no "hacer cosas".' },
          { icon: 'Calendar', front: 'Columnas: tiempo', back: 'Días o semanas. Se marca la casilla del momento en que se hará cada actividad.' },
          { icon: 'Flag', front: 'Hacia atrás', back: 'Empieza por la **fecha de entrega** y reserva primero el tiempo para **revisar** y **pasar en limpio**. Lo que quede es para buscar y escribir.' },
          { icon: 'ListChecks', front: 'Seguimiento', back: 'Marca ✔ lo que terminaste. Si te atrasas en algo, mueve las demás actividades **antes** de que sea tarde.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto: armar un cronograma hacia atrás',
          prompt: 'Para su siguiente trabajo, Sofía y Mateo hacen el cronograma juntos, como prometieron. Tienen tres semanas. Mira cómo reparten las actividades.' },
        { icon: 'CalendarDays', problem: 'Entrega: viernes de la semana 3. Actividades: preguntas, fuentes, entrevista, notas, borrador, revisión, redacción final.',
          steps: [
            { text: 'Empiezan por el final: **semana 3** → revisar, corregir y redacción final.', why: 'Revisar bien toma tiempo; si lo dejas para el último día, no se hace.' },
            { text: '**Semana 2** → entrevista, notas y borrador (necesitan que ya tengan preguntas y fuentes).' },
            { text: '**Semana 1** → escribir las preguntas y buscar las fuentes.', why: 'Sin preguntas no se sabe qué buscar; por eso van primero.' },
            { text: 'Revisan que ninguna semana quede sobrecargada: 2 actividades, 3 actividades, 2 actividades.' },
          ],
          answer: 'Semana 1: preguntas y fuentes · Semana 2: entrevista, notas y borrador · Semana 3: revisión y redacción final.',
          tip: 'Si una actividad depende de otra, ponla después.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'conocer',
          prompt: 'Tu informe se entrega el **viernes**. Necesitas **un día** para revisar y **un día** para pasarlo en limpio. ¿Cuándo debes tener listo el **borrador**, a más tardar?',
          explain: 'Contando hacia atrás: viernes = entrega; jueves = pasar en limpio; miércoles = revisar. El borrador debe estar listo el **martes**. Planificar hacia atrás evita sorpresas.' },
        { options: [
          { id: 'a', text: 'El martes' },
          { id: 'b', text: 'El jueves', feedback: 'Si terminas el borrador el jueves, no te quedan días para revisar y pasar en limpio.' },
          { id: 'c', text: 'El viernes en la mañana', feedback: '¡Ese día ya se entrega!' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'construir', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'hacer',
          prompt: 'Ordena estas actividades de una investigación en el cronograma, de la primera a la última.',
          hint: 'Pregúntate: ¿qué necesito tener listo antes de poder hacer esta actividad?',
          explain: 'No puedes buscar fuentes sin saber qué preguntar, ni escribir sin notas, ni revisar sin borrador.' },
        { labels: { start: 'Semana 1', end: 'Semana 3' }, items: [
          { id: 'c1', text: 'Escribir las preguntas de investigación' },
          { id: 'c2', text: 'Buscar y elegir las fuentes' },
          { id: 'c3', text: 'Tomar notas de las fuentes' },
          { id: 'c4', text: 'Escribir el borrador' },
          { id: 'c5', text: 'Revisar y corregir' },
          { id: 'c6', text: 'Entregar la redacción final' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'hacer',
          prompt: 'Es jueves de la semana 2 y Mateo no ha hecho la entrevista porque el conserje estuvo enfermo. ¿Qué es lo **mejor**?',
          explain: 'Un cronograma se **ajusta**: busca otra fuente o nueva fecha y mueve lo que depende de ella, sin quitarle el tiempo de revisión.' },
        { options: [
          { id: 'a', text: 'Ajustar el cronograma: pedir la entrevista para el lunes y adelantar el dibujo mientras tanto' },
          { id: 'b', text: 'Abandonar el plan porque ya no sirve', feedback: 'Un atraso no invalida el plan: se ajusta.' },
          { id: 'c', text: 'Inventar lo que habría dicho el conserje', feedback: '¡Nunca! Inventar datos es deshonesto. Lo verás en la semana 8.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.2.6'], ambito: 'hacer',
          prompt: 'Repaso. En la frase del cronograma de Sofía y Mateo "**Entrevistaremos al conserje el martes**", ¿cuál es el sujeto?',
          explain: '"Entrevistaremos" termina en -emos: el sujeto tácito es **nosotros** (Sofía y Mateo).' },
        { options: [
          { id: 'a', text: 'Nosotros (sujeto tácito)' },
          { id: 'b', text: 'el conserje', feedback: 'El conserje es a quien se entrevista, no quien entrevista.' },
          { id: 'c', text: 'el martes', feedback: '"El martes" dice cuándo.' },
        ], correct: ['a'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.1'], ambito: 'emprender',
          prompt: '**Tu mini-investigación de la unidad.** Durante las próximas dos semanas investigarás un tema de tu comunidad y escribirás un informe corto. Hoy harás el plan.' },
        { goal: 'Planificar una investigación sobre un tema de mi comunidad que terminará en un informe escrito de una a dos páginas.',
          steps: [
            { title: 'Elige tu tema', detail: 'Algo que puedas observar o preguntar cerca de ti: el agua de tu comunidad, un árbol o planta útil, un oficio tradicional, una comida típica, una fiesta del pueblo.' },
            { title: 'Escribe tu objetivo', detail: 'Una oración que empiece con un verbo: "Explicar…", "Describir…", "Conocer…".' },
            { title: 'Haz tu lista de actividades', detail: 'Preguntas, fuentes (libros, personas, sitios confiables), notas, borrador, revisión, redacción final.' },
            { title: 'Arma tu cronograma', detail: 'Dos semanas: la primera para preguntas, fuentes y notas; la segunda para borrador, revisión y redacción final.' },
            { title: 'Lista tus recursos', detail: 'Cuaderno, a quién puedes entrevistar (con permiso de tu familia), qué libros tienes a mano.' },
          ],
          evidence: 'Una página del cuaderno con: tema, objetivo, actividades, cronograma y recursos.',
          rubric: [
            'El tema es cercano y se puede investigar',
            'El objetivo empieza con un verbo y es claro',
            'Las actividades están en orden lógico',
            'El cronograma deja tiempo para revisar',
          ] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.1'], prompt: 'Completa la definición.' },
        { text: 'Un [[cronograma]] es una tabla que muestra qué [[actividad]] se hace en cada fecha. Conviene planificar hacia [[atrás]], empezando por la fecha de [[entrega]].',
          distractors: ['diccionario', 'adelante', 'inicio'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.6'], prompt: 'Repaso de la semana. En la oración "_Las fechas del cronograma ayudan a todo el grupo_", ¿cuál es el **sujeto**?' },
        { options: [
          { id: 'a', text: 'Las fechas del cronograma' },
          { id: 'b', text: 'todo el grupo' },
          { id: 'c', text: 'ayudan a todo el grupo' },
        ], correct: ['a'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l1'], cnb: [], ambito: 'ser', prompt: '¿Cómo te fue esta semana?' },
        { statements: [
          'Distingo oraciones unimembres y bimembres',
          'Encuentro el sujeto, aunque esté al final o sea tácito',
          'Reconozco el verbo como núcleo del predicado',
          'Hago un plan y un cronograma para un trabajo',
        ], commitments: [
          'Pegaré el cronograma de mi investigación en un lugar visible',
          'Contaré a mi familia el tema que elegí y pediré permiso para entrevistar a alguien',
          'Marcaré cada actividad cuando la termine',
        ] },
      ),
    ],
  }),
];
