import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 8 · Unidad 1 "Conociendo nuestras raíces"
 * Tema generador: Detectives de la verdad
 * Buscar y comunicar la verdad con honestidad: datos, fuentes y citas; cómo investiga la ciencia;
 * la energía y el calentamiento global vistos desde el espacio; los números de nuestros abuelos;
 * la memoria histórica y los deberes ciudadanos.
 * Cierre: Taller "Periódico mural: la energía de nuestra escuela" (CNT · Matemáticas · L1 · Artes) y Reto.
 */
export default semana({
  id: 's08',
  unidad: 1,
  semana: 8,
  kind: 'aprendizaje',
  temaGenerador: 'Detectives de la verdad',
  title: 'Detectives de la verdad',
  subtitle: 'Aproximación y numerales mayas, informes honestos, energía y clima, impuestos y memoria',
  icon: 'Search',
  color: 'var(--area-ccss)',
  contexto: 'En 2020, Guatemala puso en órbita su primer satélite, el Quetzal-1. Los satélites, los informes y las investigaciones sirven para conocer la verdad, siempre que se usen con honestidad. Esta semana aprenderás a citar y parafrasear, tomar notas y escribir tu informe; conocerás las formas de la energía, el calentamiento global y cómo investiga la ciencia; leerás datos de los problemas del mundo y descubrirás para qué sirven los impuestos. Aproximarás cantidades y contarás con numerales mayas, y recordarás con respeto la memoria del conflicto armado para que no se repita. El viernes publicarás, con datos honestos, un periódico mural sobre la energía de tu escuela.',
  ejes: ['tecnologia', 'sostenible', 'vida-ciudadana', 'multiculturalidad', 'equidad'],
  media: {
    id: 's08-portada', kind: 'video', title: 'Detectives de la verdad', aspect: '16:9', duration: 55,
    alt: 'Una lupa recorre escenas: un satélite sobre Centroamérica, un laboratorio escolar, un tablero con numerales mayas y un grupo de estudiantes entrevistando a una abuela.',
    brief: 'Video animado 2D de 55 s con una lupa como hilo conductor. Escenas: (1) un satélite pequeño tipo cubo (1U) gira sobre Centroamérica y envía datos de nubes a una computadora; (2) estudiantes miden la temperatura de dos frascos al sol (uno tapado con plástico); (3) una niña forma numerales mayas con maíz, palitos y caracoles; (4) estudiantes entrevistan con respeto a una abuela y toman notas; (5) una familia pide factura en una tienda. Texto final: "Investigar con honestidad es buscar la verdad". Sin marcas ni logotipos reales.',
  },
  badge: { id: 'medalla-s08', name: 'Detective de la verdad', icon: 'Search', desc: 'Completaste la semana 8 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Viernes: Taller interdisciplinario ───────────────────────── */
    lesson({
      id: 's08-d5-taller',
      kind: 'taller',
      day: 5,
      title: 'Periódico mural: la energía de nuestra escuela',
      icon: 'Newspaper',
      minutes: 19,
      gancho: '¿Cuánta electricidad usa tu escuela y cuánta se desperdicia? Si lo publicas en un periódico mural, ¿cómo logras que todos confíen en tus datos?',
      objetivos: [
        'Usar las formas de la energía y el ahorro para interpretar datos reales de la escuela',
        'Aproximar cantidades para escribir titulares claros sin cambiar la verdad',
        'Publicar un periódico mural con citas, fuentes y datos honestos',
      ],
      resumen: [
        'Contar focos encendidos en el lugar es investigación de campo; leer el recibo de luz es investigación documental.',
        'Aproximar ayuda a comunicar ("unos 12,000 kWh"), pero el dato exacto y su fuente se conservan.',
        'Ahorrar electricidad ahorra dinero y reduce contaminación: parte de la electricidad se produce quemando combustibles, que aumentan los gases de efecto invernadero.',
        'Un periódico mural confiable tiene título grande, textos breves, citas entre comillas con su autor y la lista de fuentes.',
      ],
      media: {
        id: 's08-taller-portada', kind: 'image', title: 'Nuestro periódico mural', aspect: '16:9',
        alt: 'Periódico mural escolar titulado "La energía de nuestra escuela" con una gráfica, una cita de la directora, consejos de ahorro y una lista de fuentes.',
        brief: 'Ilustración frontal de un periódico mural en una pared de escuela pública guatemalteca. Título grande: "La energía de nuestra escuela". Secciones: un titular con "unos 12,000 kWh al año", una gráfica de barras sencilla de focos encendidos por aula, un recuadro con una cita entre comillas atribuida a "la directora", un dibujo de un foco LED y un Sol con consejos de ahorro, y abajo una "Lista de fuentes". Letras legibles, buen contraste, espacio libre. Dos estudiantes (niña y niño) lo señalan. Sin marcas.',
      },
      steps: [
        S.choice(
          { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:8.1.1'], ambito: 'conocer',
            prompt: 'Para el periódico mural, tu grupo recorrió la escuela durante el recreo y **contó los focos encendidos en aulas vacías**. ¿Qué tipo de investigación hicieron?',
            explain: 'Observar y contar **en el lugar donde ocurre** el fenómeno es investigación **de campo**. Leer el recibo de luz de la escuela sería investigación **documental**.' },
          { options: [
            { id: 'a', text: 'De campo', icon: 'Footprints' },
            { id: 'b', text: 'De laboratorio', icon: 'FlaskConical', feedback: 'No hubo un experimento con condiciones controladas: observaron la escuela tal como es.' },
            { id: 'c', text: 'Documental', icon: 'BookOpen', feedback: 'La documental busca datos en libros, informes o recibos. Ustedes contaron en el lugar.' },
          ], correct: ['a'] },
        ),
        S.explain(
          { fase: 'construir', areas: ['art', 'cnt', 'mat', 'l1'], cnb: ['art:4.3.2'], ambito: 'conocer', title: 'Un periódico mural en el que se puede confiar',
            prompt: 'Sexto grado publicará "La energía de nuestra escuela". Cada sección usa algo que aprendiste esta semana. Toca cada tarjeta.' },
          { icon: 'Newspaper', body: 'Publicar es dar a conocer una investigación. Si los datos no son honestos, el mural **engaña**.', reveal: [
            { icon: 'Zap', front: 'Ciencias Naturales', back: 'Qué **formas de energía** hay en la escuela, cómo **ahorrarla** y qué tiene que ver con el **calentamiento global**.' },
            { icon: 'Calculator', front: 'Matemáticas', back: '**Aproximar** los datos del recibo para escribir titulares claros.' },
            { icon: 'Quote', front: 'Comunicación y Lenguaje', back: '**Citas** entre comillas, datos sin inventar y **lista de fuentes**.' },
            { icon: 'Palette', front: 'Expresión Artística', back: 'Título grande, secciones ordenadas, textos breves, imágenes con pie de foto y buen contraste.' },
          ] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:7.1.1'], ambito: 'hacer',
            prompt: 'Primera sección: "La energía está en todas partes". Une cada escena de la escuela con la **manifestación de energía** que más destaca.',
            explain: 'La luz del foco es energía lumínica; la refacción guarda energía química; el cable del proyector lleva energía eléctrica; el Sol del patio da energía solar (luz y calor).' },
          { pairs: [
            { id: 'e1', left: 'El foco encendido del aula', leftIcon: 'Lightbulb', right: 'Lumínica' },
            { id: 'e2', left: 'La tostada de la refacción', leftIcon: 'Sandwich', right: 'Química' },
            { id: 'e3', left: 'El cable que conecta el proyector', leftIcon: 'Cable', right: 'Eléctrica' },
            { id: 'e4', left: 'El Sol que calienta el patio', leftIcon: 'Sun', right: 'Solar' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'cnt'], cnb: ['mat:4.1.4'], ambito: 'hacer',
            prompt: 'Según los recibos (datos **hipotéticos**), la escuela usó **12,468 kWh** de electricidad el año pasado. Para el titular, **aproxima al millar**.',
            hint: 'Marca la cifra de los millares (2). Mira la de su derecha (4): ¿es 5 o más?',
            explain: 'La cifra a la derecha del millar es 4, menor que 5: el 2 se queda igual y lo demás se vuelve cero. Titular: "La escuela usó **unos 12,000 kWh** al año".' },
          { answer: 12000, unit: 'kWh', misconceptions: [
            { value: 13000, msg: 'Solo se sube cuando la cifra de la derecha es 5 o más; aquí es 4.' },
            { value: 12500, msg: 'Eso es aproximar a la centena. Se pide al millar: todas las cifras a la derecha del millar se vuelven cero.' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat'], cnb: ['mat:4.1.4'], ambito: 'hacer',
            prompt: 'La escuela pagó **Q9,650** de luz en el año (dato hipotético). Aproxima **al millar** para el titular.',
            hint: 'La cifra de los millares es 9 y a su derecha hay un 6. Si sumas 1 a un 9…',
            explain: '6 es mayor que 5, así que el 9 sube: se vuelve 0 y se lleva 1 a la decena de millar. Resultado: **Q10,000**.' },
          { answer: 10000, unit: 'quetzales', misconceptions: [
            { value: 9000, msg: 'La cifra de la derecha es 6 (5 o más): hay que subir.' },
            { value: 9700, msg: 'Eso es aproximar a la centena. Se pide al millar.' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:7.3.1', 'cnt:7.2.1'], ambito: 'conocer',
            prompt: 'Una sección del mural dirá: "Apagar luces también cuida el clima". ¿Por qué es **verdad**?',
            explain: 'Parte de la electricidad se produce en plantas que **queman combustibles**, y quemar combustibles agrega gases de efecto invernadero que aumentan el calentamiento global. Usar menos electricidad reduce esa quema.' },
          { options: [
            { id: 'a', text: 'Porque parte de la electricidad se produce quemando combustibles, que agregan gases de efecto invernadero' },
            { id: 'b', text: 'Porque los focos apagados enfrían el aire del planeta', feedback: 'Un foco apagado no enfría el planeta; lo que cambia es cuánta electricidad hay que producir.' },
            { id: 'c', text: 'No es verdad: la electricidad no tiene relación con el clima', feedback: 'Sí la tiene: producir electricidad con combustibles contamina y calienta el planeta.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.4'], ambito: 'ser',
            prompt: 'Tu grupo contó **23 focos** encendidos en aulas vacías. Un compañero dice: "Pongamos **más de 100**, así el mural impresiona más". ¿Qué es lo **honesto**?',
            explain: 'La honestidad intelectual pide **no inventar ni cambiar datos** y decir cómo se obtuvieron. Un dato exagerado hace que nadie confíe en el mural.' },
          { options: [
            { id: 'a', text: 'Escribir 23 focos y explicar cómo y cuándo se contaron' },
            { id: 'b', text: 'Escribir "más de 100" porque la causa es buena', feedback: 'Aunque la causa sea buena, inventar datos es deshonesto y quita credibilidad.' },
            { id: 'c', text: 'No poner ningún número para no equivocarse', feedback: 'El dato real es valioso: publícalo tal como es.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:8.2.4', 'l1:8.2.7'], ambito: 'hacer',
            prompt: 'La directora les dijo: _Si apagamos las luces en el recreo, el dinero ahorrado servirá para comprar libros._ ¿Cuál es la **cita textual** correcta para el mural?',
            explain: 'La cita textual copia las **palabras exactas entre comillas** y dice **de quién** son.' },
          { options: [
            { id: 'a', text: 'La directora dijo: "Si apagamos las luces en el recreo, el dinero ahorrado servirá para comprar libros".' },
            { id: 'b', text: 'Si apagamos las luces en el recreo, el dinero ahorrado servirá para comprar libros.', feedback: 'Faltan las comillas y el nombre de quien lo dijo: parecería idea del grupo.' },
            { id: 'c', text: 'La directora dijo: "Hay que apagar todo o no habrá libros nunca".', feedback: 'Entre comillas van solo las palabras exactas; aquí se cambiaron.' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['art', 'l1'], cnb: ['art:4.3.2'], ambito: 'hacer',
            prompt: 'Revisen el boceto del mural. ¿Cada decisión **ayuda** a que se lea y se confíe en él, o **estorba**?',
            explain: 'Un periódico mural se lee de pie y de lejos: título grande, textos breves, imágenes con pie de foto, buen contraste y **fuentes** visibles.',
            media: { id: 's08-taller-boceto', kind: 'image', title: 'Boceto del periódico mural', aspect: '4:3',
              alt: 'Boceto a lápiz de un periódico mural dividido en secciones, con notas al margen que señalan título, textos, imágenes y fuentes.',
              brief: 'Dibujo a lápiz sobre papel cuadriculado de un periódico mural en boceto: rectángulo grande con título arriba, cuatro secciones (titular con dato, gráfica de focos, cita, consejos de ahorro) y una franja inferior "Fuentes". Notas al margen escritas a mano con flechas: "¿se lee de lejos?", "pie de foto", "¿de dónde es este dato?". Estilo de cuaderno escolar, sin marcas.' } },
          { buckets: [
            { id: 'ayu', label: 'Ayuda', icon: 'ThumbsUp', color: 'var(--c-ok)' },
            { id: 'est', label: 'Estorba', icon: 'ThumbsDown', color: 'var(--c-bad)' },
          ], items: [
            { id: 'p1', text: 'Título grande que se lee desde lejos', bucket: 'ayu' },
            { id: 'p2', text: 'Cada foto con su pie de foto', bucket: 'ayu' },
            { id: 'p3', text: 'Lista de fuentes al final', bucket: 'ayu' },
            { id: 'p4', text: 'Una página entera de texto con letra pequeña', bucket: 'est' },
            { id: 'p5', text: 'Letras amarillas sobre fondo blanco', bucket: 'est', feedback: 'Hay poco contraste: casi no se lee.' },
            { id: 'p6', text: 'Datos sin decir de dónde salieron', bucket: 'est' },
          ] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['art', 'cnt', 'l1', 'mat'], cnb: ['art:4.3.2', 'cnt:7.2.1'], ambito: 'hacer',
            prompt: 'Publiquen el periódico mural "La energía de nuestra escuela" (en una pared, en un cartel o en tu cuaderno si trabajas desde casa).' },
          { goal: 'Informar a la comunidad escolar cuánta energía se usa y cómo ahorrarla, con datos honestos y fuentes.',
            steps: [
              { title: 'Titular', detail: 'Escribe el dato del recibo aproximado ("unos 12,000 kWh al año") y, en letra pequeña, el dato exacto con su fuente.' },
              { title: 'Nuestra investigación de campo', detail: 'Cuenta cuántos focos encontraron encendidos, en qué aulas y a qué hora. Puedes hacer una gráfica de barras.' },
              { title: 'La voz de la escuela', detail: 'Incluye una cita textual (entre comillas, con el nombre del cargo) de alguien que entrevistaron.' },
              { title: 'Consejos de ahorro', detail: 'Tres consejos: apagar luces y aparatos que no se usan, desconectar cargadores, aprovechar la luz del día o usar focos LED.' },
              { title: 'Fuentes y revisión', detail: 'Lista de fuentes al final. Antes de pegar, revisen ortografía, contraste y que cada dato tenga su fuente.' },
            ],
            evidence: 'Foto o dibujo del periódico mural terminado, con sus cinco secciones.',
            rubric: ['Los datos son reales y dicen de dónde salieron', 'Aproximé bien el dato del titular', 'La cita está entre comillas y dice quién la dijo', 'Se lee de lejos: título grande, textos breves y buen contraste'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.4'],
            prompt: 'Un mes, la escuela usó **1,462 kWh**. Aproxima **a la centena**.' },
          { answer: 1500, unit: 'kWh' },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.2.1'],
            prompt: '¿Cuál de estas acciones **ahorra** energía eléctrica en la escuela?' },
          { options: [
            { id: 'a', text: 'Abrir las cortinas y aprovechar la luz del día' },
            { id: 'b', text: 'Dejar los cargadores conectados todo el fin de semana' },
            { id: 'c', text: 'Encender todas las luces del pasillo en la mañana soleada' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['art', 'cnt', 'mat', 'l1'], cnb: ['art:4.3.2'] },
          ['Reconozco la investigación de campo y la documental', 'Aproximo datos sin cambiar la verdad', 'Cito con comillas y digo mis fuentes', 'Organizo un periódico mural que se lee y se entiende'],
          ['Apagaré luces y aparatos que no se usan en mi casa', 'Revisaré el recibo de luz con mi familia', 'Nunca inventaré un dato para impresionar']),
      ],
    }),

    /* ───────────────────────── Viernes: Reto semanal ───────────────────────── */
    lesson({
      id: 's08-d5-reto',
      kind: 'reto',
      day: 5,
      title: 'Reto de la semana 8',
      icon: 'Trophy',
      minutes: 14,
      objetivos: ['Demostrar lo que aprendiste esta semana en tus materias', 'Obtener la medalla "Detective de la verdad" (70 % o más)'],
      resumen: ['Superé el reto de la semana 8: aproximación y numerales mayas, honestidad y etapas del informe, energía y ciencia, problemas mundiales e impuestos, memoria, biografías y juegos tradicionales.'],
      media: {
        id: 's08-d5-reto', kind: 'image', title: 'Medalla Detective de la verdad', aspect: '1:1',
        alt: 'Medalla con una lupa sobre un numeral maya y un pequeño satélite.',
        brief: 'Ilustración de medalla circular dorada con una lupa que amplía un numeral maya (una barra y tres puntos), y un pequeño satélite tipo cubo en el borde. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024, estilo plano con brillo suave.',
      },
      steps: [
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.4'], prompt: 'Aproxima **7,349,600** a la **unidad de millón**.' },
          { answer: 7000000 }),
        S.maya({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.5'], prompt: 'Lee este numeral maya y escribe su valor en el sistema decimal.' },
          { mode: 'read', target: 87 }),
        S.maya({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.6'], prompt: 'Convierte **1,205** a numeral maya (tres niveles: ×400, ×20 y ×1).' },
          { mode: 'build', target: 1205, levels: 3 }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.4'], prompt: 'Pedro copió un párrafo de un sitio web en su informe, sin comillas y sin decir de dónde lo sacó. ¿Qué hizo?' },
          { options: [
            { id: 'a', text: 'Plagio: presentó como suyo lo que escribió otra persona' },
            { id: 'b', text: 'Una paráfrasis correcta' },
            { id: 'c', text: 'Una cita textual correcta' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.7'], prompt: 'Leer el borrador buscando si responde la pregunta, si está en orden y si tiene fuentes es…' },
          { options: [
            { id: 'a', text: 'Revisar' },
            { id: 'b', text: 'Editar' },
            { id: 'c', text: 'Tomar notas' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.1.1'], prompt: '¿Qué manifestación de energía está guardada en el núcleo de los átomos y hace brillar al Sol?' },
          { options: [
            { id: 'a', text: 'Nuclear' },
            { id: 'b', text: 'Química' },
            { id: 'c', text: 'Eléctrica' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.2.1'], prompt: 'Tres escuelas repiten el mismo experimento y obtienen el mismo resultado. ¿Qué característica del conocimiento científico se muestra?' },
          { options: [
            { id: 'a', text: 'Es demostrable' },
            { id: 'b', text: 'Es una opinión' },
            { id: 'c', text: 'Es un rumor' },
          ], correct: ['a'] }),
        S.number({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.4.1'], prompt: 'Supongamos que una mochila cuesta **Q50 sin IVA**. ¿Cuántos quetzales de IVA (12 %) se pagan?' },
          { answer: 6, unit: 'quetzales' }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.3.1'], prompt: '¿Cuántos **Objetivos de Desarrollo Sostenible** acordaron los países de la ONU en 2015?' },
          { options: [
            { id: 'a', text: '17' },
            { id: 'b', text: '5' },
            { id: 'c', text: '100' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: '¿Cómo se llama el informe que presentó en 1999 la Comisión para el Esclarecimiento Histórico?' },
          { options: [
            { id: 'a', text: '"Guatemala, memoria del silencio"' },
            { id: 'b', text: '"Declaración Universal de los Derechos Humanos"' },
            { id: 'c', text: '"Acuerdo de Paz Firme y Duradera"' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:5.2.2'], prompt: 'Helen Keller was born in **1880**. How do you read that year?' },
          { options: [
            { id: 'a', text: 'eighteen eighty' },
            { id: 'b', text: 'one thousand eighty' },
            { id: 'c', text: 'eighty eighteen' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.2.7'], prompt: '¿Qué habilidad desarrolla sobre todo el juego del **capirucho**?' },
          { options: [
            { id: 'a', text: 'La coordinación ojo-mano y la precisión' },
            { id: 'b', text: 'La resistencia para correr largas distancias' },
            { id: 'c', text: 'La fuerza para jalar en equipo' },
          ], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 1 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.7'], prompt: 'En una serie maya de 100 en 100, ¿qué cambia de un numeral al siguiente?' },
      { options: [{ id: 'a', text: 'Se agrega una barra en el segundo nivel (×20)' }, { id: 'b', text: 'Se agrega un punto en el primer nivel' }, { id: 'c', text: 'Se agrega un caracol' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.1.4'], prompt: 'Estima **312 + 489 + 196** aproximando cada número a la **centena** y sumando.' },
      { answer: 1000 }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:8.2.7'], prompt: 'Al tomar notas, ¿qué es lo más útil?' },
      { options: [{ id: 'a', text: 'Palabras clave organizadas por pregunta, con la fuente y la página' }, { id: 'b', text: 'Copiar el libro completo' }, { id: 'c', text: 'No anotar la fuente para ahorrar tiempo' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:8.3.1'], prompt: '¿Cómo ayudan los satélites cuando se acerca un huracán?' },
      { options: [{ id: 'a', text: 'Siguen su camino y permiten avisar a tiempo a la población' }, { id: 'b', text: 'Lo detienen antes de que llegue' }, { id: 'c', text: 'Hacen que llueva menos' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:8.2.1'], prompt: 'En el procedimiento para resolver problemas, ¿cuál es el **primer** paso?' },
      { options: [{ id: 'a', text: 'Identificar con claridad el problema' }, { id: 'b', text: 'Elegir la solución que yo prefiera' }, { id: 'c', text: 'Evaluar si funcionó' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.2.1'], prompt: '¿Cuál es una forma **respetuosa** de recordar a las víctimas del conflicto armado?' },
      { options: [{ id: 'a', text: 'Escuchar a los mayores y participar en los actos del 25 de febrero' }, { id: 'b', text: 'Decir que eso nunca pasó' }, { id: 'c', text: 'Hacer bromas sobre las víctimas' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.2'], prompt: '¿Cuál de estos sustantivos es **abstracto**?' },
      { options: [{ id: 'a', text: 'valentía' }, { id: 'b', text: 'tortilla' }, { id: 'c', text: 'río' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:4.3.2'], prompt: 'Para la biografía de un marimbista de tu comunidad, ¿cuál es una **fuente primaria**?' },
      { options: [{ id: 'a', text: 'Una entrevista grabada con el propio marimbista' }, { id: 'b', text: 'Un artículo de enciclopedia que resume su vida' }, { id: 'c', text: 'Un comentario sin autor en internet' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.5.2'], prompt: '¿Qué es el **voluntariado**?' },
      { options: [{ id: 'a', text: 'Dar tu tiempo y esfuerzo de forma libre, sin pago, por el bien común' }, { id: 'b', text: 'Un trabajo con salario fijo' }, { id: 'c', text: 'Una tarea obligatoria que pone la escuela como castigo' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.1.12', 'ef:4.2.3'], prompt: 'Eres capitana y debes formar equipos para un partido. ¿Qué haces?' },
      { options: [{ id: 'a', text: 'Contar 1-2 y mezclar niñas y niños con distintas habilidades' }, { id: 'b', text: 'Poner a todos los más rápidos en mi equipo' }, { id: 'c', text: 'Dejar fuera a quien juega menos' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:5.2.2'], prompt: 'Complete: "Neil Armstrong ___ in Ohio in 1930." (Neil Armstrong nació en Ohio en 1930.)' },
      { options: [{ id: 'a', text: 'was born' }, { id: 'b', text: 'is born' }, { id: 'c', text: 'born was' }], correct: ['a'] }),
  ],
});
