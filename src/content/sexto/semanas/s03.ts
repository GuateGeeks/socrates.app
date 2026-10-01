import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 3 · Unidad 1
 * Tema generador: Un camino seguro a la escuela
 * Las 27 lecciones de materia viven en src/content/sexto/materias/<area>/u1/s03.ts.
 */
export default semana({
  id: 's03',
  unidad: 1,
  semana: 3,
  kind: 'aprendizaje',
  temaGenerador: 'Un camino seguro a la escuela',
  title: 'Un camino seguro a la escuela',
  subtitle: 'Rutas, señales, movimiento, comunicación pública y análisis de problemas',
  icon: 'Route',
  color: 'var(--area-ccss)',
  contexto: 'Cada trayecto a la escuela combina caminos, cruces, movimiento de personas y vehículos, señales y mensajes públicos. Esta semana estudiarás esos elementos desde distintas áreas: interpretarás señales, representarás desplazamientos, analizarás causas y efectos de problemas cercanos y diseñarás comunicación visual clara. Una ruta no se considera segura solo por dibujarla o verla una vez: cualquier conclusión dependerá de observaciones concretas, de las condiciones del momento y de la revisión de personas adultas y autoridades responsables.',
  ejes: ['multiculturalidad', 'equidad', 'trabajo', 'seguridad'],
  media: {
    id: 's03-portada', kind: 'image', title: 'Caminos hacia la escuela', aspect: '16:9',
    alt: 'Estudiantes observan desde la entrada de una escuela dos rutas posibles, un cruce, una parada de bus y varias señales comunitarias.',
    brief: 'Ilustración educativa de una comunidad guatemalteca vista desde la entrada de una escuela. Dos rutas peatonales conectan viviendas y una parada de bus con la escuela; se distinguen una acera, un cruce visible, una curva, una calle sin acera y señales comunitarias. Una docente acompaña a estudiantes que anotan observaciones desde un lugar apartado del tránsito. Sin marcas comerciales ni afirmaciones visuales de que una ruta sea totalmente segura.',
  },
  badge: { id: 'medalla-s03', name: 'Analista de rutas', icon: 'Route', desc: 'Completaste la semana 3 y superaste su reto' },
  lessons: [
    lesson({
      id: 's03-d5-taller',
      kind: 'taller',
      day: 5,
      title: 'Ruta segura a la escuela',
      icon: 'Signpost',
      minutes: 20,
      gancho: 'Dos caminos llegan a la escuela. ¿Qué evidencias necesitarías antes de recomendar uno?',
      objetivos: ['Elaborar una propuesta de ruta con representación, análisis de riesgos y una señal clara'],
      resumen: [
        'Una representación de ruta muestra inicio, destino, trayecto, referencias y señales.',
        'Un riesgo se analiza con evidencia observable, causas y efectos; no basta una impresión.',
        'La forma simétrica, el ícono simple y el contraste ayudan a reconocer una señal.',
        'La recomendación de una ruta es condicional: depende de las observaciones, el momento y la revisión adulta.',
      ],
      media: {
        id: 's03-d5-taller-rutas', kind: 'image', title: 'Dos rutas para analizar', aspect: '16:9',
        alt: 'Plano sencillo con una casa, una escuela y dos trayectos: uno pasa por una calle con acera y cruce visible; otro, por una curva sin acera.',
        brief: 'Plano cenital sencillo sobre papel cuadriculado. Una casa está abajo y la escuela arriba. Ruta A pasa por tienda, acera y cruce visible. Ruta B es más corta, pero pasa por una curva sin acera. Incluye flecha de orientación, clave con cuatro íconos y espacios en blanco para registrar observaciones. No rotular ninguna ruta como segura o peligrosa.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd'], cnb: ['pyd:2.3.1'], ambito: 'emprender', title: 'Primero, evidencia · 1 min',
            prompt: 'Una ruta **no es segura por definición**. Se analiza con datos del lugar y del momento. Observa solo desde un sitio apartado del tránsito y con una persona adulta; no te acerques a la calle para completar esta actividad.' },
          { icon: 'ClipboardCheck', body: 'Anota únicamente lo que puedes observar: por dónde caminan las personas, dónde cruzan, qué señales existen y qué situaciones cambian con lluvia, oscuridad u hora de entrada.', reveal: [
            { icon: 'Eye', front: 'Evidencia', back: 'Una observación concreta: “no hay acera en la curva” o “el cruce es visible desde ambos lados”.' },
            { icon: 'TriangleAlert', front: 'Riesgo posible', back: 'Una condición que podría causar daño. Se formula con cautela: “si los vehículos no ven el cruce, podría aumentar el riesgo”.' },
            { icon: 'Users', front: 'Revisión', back: 'Una persona adulta y la autoridad responsable deben revisar cualquier propuesta antes de usarla o instalar señales.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['l2'], cnb: ['l2:2.1.2', 'l2:2.1.5'], ambito: 'conocer',
            prompt: 'Recupera Lenguaje 2 · 1 min. Une cada señal con la información que aportaría a una representación de ruta.',
            hint: 'Lee forma, color e ícono; no supongas que una señal elimina el riesgo.',
            explain: 'Las señales reglamentan, previenen u orientan. En la representación muestran información del trayecto, pero las condiciones reales también deben observarse.' },
          { pairs: [
            { id: 'a', left: 'Octágono rojo: ALTO', leftIcon: 'Octagon', right: 'Lugar donde el tránsito debe detenerse' },
            { id: 'b', left: 'Rombo amarillo con escolares', leftIcon: 'Diamond', right: 'Advertencia de presencia frecuente de estudiantes' },
            { id: 'c', left: 'Rectángulo verde con flecha', leftIcon: 'RectangleHorizontal', right: 'Dirección de una ruta indicada' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['pyd'], cnb: ['pyd:2.3.1'], ambito: 'emprender',
            prompt: 'Recupera Productividad · 1 min. Clasifica el análisis del caso de la curva sin acera.',
            hint: 'La causa explica por qué ocurre; el riesgo describe lo que podría suceder; la evidencia es observable.',
            explain: 'Separar evidencia, causa y efecto evita afirmar que algo es seguro o peligroso sin fundamento.' },
          { buckets: [
            { id: 'e', label: 'Evidencia', icon: 'Eye' },
            { id: 'c', label: 'Causa', icon: 'GitBranch' },
            { id: 'r', label: 'Riesgo o efecto posible', icon: 'TriangleAlert' },
          ], items: [
            { id: 'e1', text: 'En la curva no se observa acera', bucket: 'e' },
            { id: 'c1', text: 'Las personas deben caminar cerca del paso de vehículos', bucket: 'c' },
            { id: 'r1', text: 'Si coinciden peatones y vehículos, podría ocurrir un acercamiento peligroso', bucket: 'r' },
          ] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.5'], ambito: 'hacer', title: 'Etapa 1: representación de la ruta · 3 min',
            prompt: 'En una hoja, representa una ruta real observada con una persona adulta o usa las dos rutas ficticias de la imagen.' },
          { goal: 'Construir una representación de ruta que otra persona pueda seguir.',
            steps: [
              { title: 'Traza', detail: 'Marca inicio, escuela y una línea continua para el trayecto.' },
              { title: 'Ubica', detail: 'Añade tres referencias visibles, un cruce y las señales que realmente existan; crea una clave para los íconos.' },
              { title: 'Distingue', detail: 'Usa una flecha para indicar el sentido de avance y rotula Ruta A o Ruta B sin llamarla todavía “segura”.' },
            ],
            evidence: 'Representación de la ruta con inicio, destino, trayecto, tres referencias, cruce, señales y clave.',
            rubric: ['Otra persona puede seguir el trayecto', 'La clave explica cada ícono', 'Solo muestra elementos observados o dados en el caso'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:2.3.1', 'pyd:2.3.2'], ambito: 'emprender', title: 'Etapa 2: análisis de riesgos · 3 min',
            prompt: 'Junto a la ruta, abre una tabla de tres columnas: **evidencia**, **causa** y **riesgo posible**.' },
          { goal: 'Sustentar el análisis de la ruta sin convertir posibilidades en certezas.',
            steps: [
              { title: 'Registra', detail: 'Escribe dos evidencias observables del trayecto o del caso ficticio.' },
              { title: 'Relaciona', detail: 'Para cada evidencia, anota una causa y un efecto posible usando “si… entonces podría…”.' },
              { title: 'Prioriza', detail: 'Marca el riesgo que el círculo de calidad debería consultar primero con una persona adulta o autoridad.' },
            ],
            evidence: 'Dos cadenas completas de evidencia, causa y riesgo posible.',
            rubric: ['Las evidencias se pueden observar', 'Las causas explican las condiciones', 'Los riesgos se expresan como posibilidades condicionadas'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['mat', 'l2'], cnb: ['mat:1.1.11', 'l2:2.1.2', 'l2:2.1.5'], ambito: 'hacer', title: 'Pausa de diseño · 2 min',
            prompt: 'Para un mensaje escolar de orientación, ¿qué boceto ofrece una forma reconocible y permite comprobar simetría?' },
          { options: [
            { id: 'a', text: 'Un rectángulo con flecha central y un eje que divide la forma y el ícono en mitades reflejadas' },
            { id: 'b', text: 'Una mancha irregular sin dirección ni eje identificable' },
            { id: 'c', text: 'Una copia de ALTO para anunciar una actividad escolar' },
          ], correct: ['a'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['mat', 'art', 'l2'], cnb: ['mat:1.1.11', 'art:2.2.1', 'l2:2.1.2', 'l2:2.1.3'], ambito: 'hacer', title: 'Etapa 3: diseño claro de la señal · 3 min',
            prompt: 'Convierte el boceto en una señal de comunicación escolar que pueda entenderse con rapidez.' },
          { goal: 'Diseñar una señal clara con forma reconocible, simetría y recursos visuales aprendidos.',
            steps: [
              { title: 'Forma', detail: 'Elige una forma adecuada, marca un eje de simetría y conserva la misma distancia a ambos lados.' },
              { title: 'Ícono', detail: 'Dibuja un ícono grande y descriptivo del mensaje.' },
              { title: 'Texto y contraste', detail: 'Usa de dos a cinco palabras, letras grandes y colores que contrasten.' },
              { title: 'Técnica', detail: 'Aplica crayón, lápiz, pastel, tinta o técnica mixta según los materiales disponibles.' },
            ],
            evidence: 'Señal terminada con forma y eje de simetría, ícono, texto breve, contraste y técnica gráfica intencional.',
            rubric: ['La forma y el ícono conservan la simetría prevista', 'El texto se lee con rapidez', 'Los colores y la técnica mantienen buen contraste'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['mat', 'l2', 'art', 'pyd'], cnb: ['mat:1.1.11', 'l2:2.1.5', 'l2:2.1.3', 'art:2.2.1', 'pyd:2.3.1'], ambito: 'emprender', title: 'Etapa 5: integra la propuesta · 2 min',
            prompt: 'Coloca la señal en la representación y escribe una recomendación condicional debajo.' },
          { goal: 'Entregar una propuesta de ruta sustentada y comprensible.',
            steps: [
              { title: 'Vincula', detail: 'Dibuja una línea desde la señal hasta el punto exacto donde propones comunicar el mensaje.' },
              { title: 'Concluye', detail: 'Escribe: “Según estas evidencias, esta ruta podría ser preferible si…”. Añade la condición que debe revisar una persona adulta o autoridad.' },
            ],
            evidence: 'Hoja integrada con representación de ruta, análisis de riesgos, señal y recomendación condicional.',
            rubric: ['La señal está vinculada con un riesgo analizado', 'La conclusión depende de evidencia y condiciones', 'Solicita revisión adulta o de la autoridad responsable'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['pyd', 'l2'], cnb: ['pyd:2.3.1', 'l2:2.1.3'], ambito: 'convivir', title: 'Etapa 5: prueba con otra persona · 1 min',
            prompt: 'Muestra la hoja sin explicarla. Pregunta qué ruta entiende, qué riesgo reconoce y qué comunica la señal.' },
          { minWords: 12, placeholder: 'La persona entendió… Todavía preguntó…',
            model: 'La persona entendió la Ruta A y reconoció el riesgo de la curva. Todavía preguntó dónde estaría la señal.',
            rubric: ['Anoté una interpretación y una duda sobre la ruta, el riesgo o la señal'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['art', 'pyd'], cnb: ['art:2.2.1', 'pyd:2.3.1'], ambito: 'hacer', title: 'Etapa 6: corrige · 1 min',
            prompt: 'Haz una corrección concreta basada en la prueba: aclara el trayecto, precisa el riesgo o mejora la señal.' },
          { goal: 'Mejorar la comunicación del producto.',
            steps: [
              { title: 'Elige', detail: 'Decide si la duda exige aclarar el trayecto, precisar el riesgo o mejorar la señal.' },
              { title: 'Corrige', detail: 'Cambia ese elemento y encierra la mejora con una línea punteada.' },
            ],
            evidence: 'Una mejora visible y relacionada con la revisión.',
            rubric: ['La corrección responde a la duda de la persona revisora', 'La mejora se puede localizar en la hoja'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['mat', 'l2', 'art', 'pyd'], cnb: ['mat:1.1.11', 'l2:2.1.5', 'l2:2.1.3', 'art:2.2.1', 'pyd:2.3.1', 'pyd:2.3.2'], ambito: 'emprender', title: 'Producto final: Ruta segura a la escuela · 1 min',
            prompt: 'Revisa que la hoja reúna las cuatro partes y entrégala como propuesta para conversación, no como permiso para cambiar la vía pública.' },
          { goal: 'Presentar una propuesta breve para revisión adulta y comunitaria.',
            steps: [
              { title: 'Verifica el producto', detail: 'Representación de ruta + análisis de riesgos + señal clara + recomendación condicional.' },
              { title: 'Identifica el uso', detail: 'Escribe “Propuesta para revisión” junto al nombre del círculo de calidad.' },
            ],
            evidence: 'Producto final firmado por el círculo de calidad.',
            rubric: ['La ruta se puede seguir', 'El riesgo tiene evidencia', 'La señal es clara y simétrica', 'La recomendación es condicional y pide revisión responsable'] },
        ),
        cierre(
          { areas: ['mat', 'l2', 'art', 'pyd'], cnb: ['mat:1.1.11', 'l2:2.1.5', 'art:2.2.1', 'pyd:2.3.1'] },
          ['Representé una ruta', 'Analicé riesgos con evidencia', 'Diseñé una señal clara', 'Escribí una recomendación condicional'],
          ['Observaré el tránsito solo con una persona adulta y desde un lugar apartado', 'Consultaré a la autoridad responsable antes de proponer cambios'],
        ),
      ],
    }),

    lesson({
      id: 's03-d5-reto',
      kind: 'reto',
      day: 5,
      title: 'Reto de la semana 3',
      icon: 'Trophy',
      minutes: 14,
      objetivos: ['Demostrar lo aprendido en las diez áreas de la semana'],
      resumen: ['Superé un reto nuevo sobre rutas, comunicación, ciencias, sociedad, arte, movimiento y solución de problemas.'],
      media: {
        id: 's03-d5-reto', kind: 'image', title: 'Medalla Analista de rutas', aspect: '1:1',
        alt: 'Medalla dorada con una ruta, una lupa y una señal claramente visible.',
        brief: 'Medalla circular dorada con una ruta entre una casa y una escuela, una lupa sobre un cruce y una señal preventiva. Fondo transparente, sin marcas.',
      },
      steps: [
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.2.1'], prompt: 'Un jardín cuadrilateral junto a la entrada mide **11 m, 13 m, 14 m y 15 m**. ¿Cuántos metros de borde necesita?' },
          { answer: 53, unit: 'm' },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.3'], prompt: 'El consejo estudiantil necesita saber qué institución autoriza cambios en una calle municipal. ¿Qué fuente es más pertinente?' },
          { options: [
            { id: 'a', text: 'La oficina municipal responsable de tránsito o infraestructura' },
            { id: 'b', text: 'Un diccionario de sinónimos' },
            { id: 'c', text: 'Una novela histórica' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.1'], prompt: 'Relaciona cada glándula con la vía por la que libera su producto.' },
          { pairs: [
            { id: 't', left: 'Tiroides', right: 'Hormonas directamente a la sangre' },
            { id: 's', left: 'Salival', right: 'Saliva por un conducto hacia la boca' },
            { id: 'l', left: 'Lagrimal', right: 'Lágrimas por conductos hacia el ojo' },
          ] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.1'], prompt: 'Clasifica el efecto principal de cada tecnología.' },
          { buckets: [
            { id: 'c', label: 'Cultura', icon: 'Languages' },
            { id: 'e', label: 'Economía', icon: 'BadgeDollarSign' },
            { id: 'v', label: 'Valores y convivencia', icon: 'Scale' },
          ], items: [
            { id: 'a', text: 'Una radio comunitaria difunde música en idiomas locales', bucket: 'c' },
            { id: 'b', text: 'Una aplicación permite vender artesanías a otras regiones', bucket: 'e' },
            { id: 'd', text: 'Un grupo acuerda verificar mensajes antes de reenviarlos', bucket: 'v' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.3'], prompt: 'Un anuncio muestra una bicicleta tachada dentro de un círculo rojo. ¿Qué comunica?' },
          { options: [
            { id: 'a', text: 'En ese espacio no se permite circular en bicicleta' },
            { id: 'b', text: 'Hay un taller de bicicletas' },
            { id: 'c', text: 'La ruta es obligatoria para bicicletas' },
          ], correct: ['a'] },
        ),
        S.fill(
          { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.3.3'], prompt: 'Complete the report about yesterday.' },
          { text: 'Yesterday I [[walked]] to the library. I [[saw]] a new sign. I felt [[curious]].', distractors: ['walk', 'see', 'curiosity'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.3'], prompt: 'Alguien afirma: “Las niñas no deben integrar la comisión de tránsito porque no saben dirigir”. ¿Cuál respuesta es crítica y respetuosa?' },
          { options: [
            { id: 'a', text: 'Esa frase generaliza sin pruebas; la capacidad depende de cada persona, no de su sexo' },
            { id: 'b', text: 'Es verdad porque siempre se ha hecho así' },
            { id: 'c', text: 'Mejor no responder para evitar hablar de igualdad' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['art'], cnb: ['art:2.2.1'], prompt: 'Clasifica decisiones para un cartel visible desde varios pasos.' },
          { buckets: [
            { id: 'f', label: 'Favorece la lectura', icon: 'Eye' },
            { id: 'd', label: 'Dificulta la lectura', icon: 'EyeOff' },
          ], items: [
            { id: 'a', text: 'Un ícono grande con contorno oscuro', bucket: 'f' },
            { id: 'b', text: 'Cuatro párrafos en letra pequeña', bucket: 'd' },
            { id: 'c', text: 'Título negro sobre fondo amarillo claro', bucket: 'f' },
            { id: 'e', text: 'Texto celeste sobre fondo celeste', bucket: 'd' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.4.2', 'ef:1.4.12'], prompt: '¿Qué movimiento comunica mejor que una persona busca avanzar con cuidado por un espacio reducido?' },
          { options: [
            { id: 'a', text: 'Pasos cortos y lentos, mirada al frente y trayectoria controlada' },
            { id: 'b', text: 'Saltos amplios y rápidos con los ojos cerrados' },
            { id: 'c', text: 'Carrera veloz en zigzag sin cambiar la mirada' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.3.1'], prompt: 'Analiza la propuesta “pedir iluminación para la parada”.' },
          { buckets: [
            { id: 'p', label: 'Positivo', icon: 'ThumbsUp' },
            { id: 'n', label: 'Negativo', icon: 'ThumbsDown' },
            { id: 'i', label: 'Interesante', icon: 'Lightbulb' },
          ], items: [
            { id: 'a', text: 'Podría mejorar la visibilidad al anochecer', bucket: 'p' },
            { id: 'b', text: 'Requiere autorización, instalación y mantenimiento', bucket: 'n' },
            { id: 'c', text: 'Conviene investigar si funciona con energía solar', bucket: 'i' },
          ] },
        ),
      ],
    }),
  ],

  bank: [
    S.number(
      { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.2.1'], prompt: 'Un patio rectangular mide **18 m** de largo y **11 m** de ancho. ¿Cuál es su perímetro?' },
      { answer: 58, unit: 'm' },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.7'], prompt: '¿Cuál oración funciona como acotación en una obra sobre el camino escolar?' },
      { options: [
        { id: 'a', text: '(Se detiene antes del cruce y mira hacia ambos lados.)' },
        { id: 'b', text: 'MARTA: Esperemos aquí.' },
        { id: 'c', text: 'El narrador cuenta toda la historia.' },
      ], correct: ['a'] },
    ),
    S.fill(
      { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.1'], prompt: 'Completa la clasificación de estas glándulas.' },
      { text: 'La glándula [[sudorípara]] es exocrina; la [[hipófisis]] es endocrina.', distractors: ['tiroides', 'salival'] },
    ),
    S.order(
      { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.4.1'], prompt: 'Ordena el recorrido económico del café centroamericano.' },
      { items: [
        { id: 'a', text: 'Cultivo y cosecha del café' },
        { id: 'b', text: 'Transformación y empaque' },
        { id: 'c', text: 'Transporte al puerto' },
        { id: 'd', text: 'Exportación a otro continente' },
      ], labels: { start: 'Inicio', end: 'Destino' } },
    ),
    S.tf(
      { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.2', 'l2:2.1.5'], prompt: 'Decide si cada interpretación de una señal es correcta.' },
      { statements: [
        { text: 'Un rombo amarillo suele advertir una condición que requiere precaución.', answer: true },
        { text: 'Una flecha de orientación garantiza que todo el trayecto esté libre de riesgos.', answer: false },
      ] },
    ),
    S.reading(
      { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.3.3'], prompt: 'Read Ana’s three-sentence impression.' },
      { genre: 'Short report', heading: 'A different morning', passage: 'This morning I went to school by bus. I saw workers repairing the bridge. I felt surprised.',
        questions: [
          { q: 'How did Ana go to school?', options: [{ id: 'a', text: 'By bus' }, { id: 'b', text: 'On foot' }, { id: 'c', text: 'By bicycle' }], correct: 'a' },
          { q: 'How did she feel?', options: [{ id: 'a', text: 'Surprised' }, { id: 'b', text: 'Angry' }, { id: 'c', text: 'Sleepy' }], correct: 'a' },
        ] },
    ),
    S.match(
      { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.3'], prompt: 'Relaciona cada situación con el concepto más preciso.' },
      { pairs: [
        { id: 'a', left: 'Creer sin pruebas que un pueblo “no trabaja”', right: 'Prejuicio' },
        { id: 'b', left: 'Negar un servicio por el idioma de una persona', right: 'Discriminación' },
        { id: 'c', left: 'Afirmar que todos los integrantes de un grupo son iguales', right: 'Estereotipo' },
      ] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['art'], cnb: ['art:2.2.1'], prompt: 'Quieres que una flecha blanca aparezca sobre un fondo azul de acuarela. ¿Qué procedimiento aprovecha la técnica de reserva?' },
      { options: [
        { id: 'a', text: 'Dibujar primero la flecha con crayón blanco y luego aplicar la acuarela azul' },
        { id: 'b', text: 'Pintar todo de azul y borrar con agua' },
        { id: 'c', text: 'Mezclar pastel seco dentro del vaso de agua' },
      ], correct: ['a'] },
    ),
    S.tf(
      { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.4.1', 'ef:1.4.14'], prompt: 'Decide si cada acción mantiene un patrón de ocho tiempos.' },
      { statements: [
        { text: 'Repetir dos veces una secuencia de cuatro pulsos completa ocho tiempos.', answer: true },
        { text: 'Cambiar el orden de los pasos en cada repetición conserva el mismo patrón.', answer: false },
      ] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.3.1', 'pyd:2.3.2'], prompt: '¿Qué acción corresponde a un círculo de calidad antes de elegir una solución?' },
      { options: [
        { id: 'a', text: 'Reunir evidencias, separar causas y efectos y comparar propuestas' },
        { id: 'b', text: 'Aceptar la primera idea sin escuchar al grupo' },
        { id: 'c', text: 'Instalar cambios en la calle sin consultar a la autoridad' },
      ], correct: ['a'] },
    ),
  ],
});
