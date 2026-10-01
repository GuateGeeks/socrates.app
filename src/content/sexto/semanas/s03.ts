import { S, lesson, semana } from '../../dsl';

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
          { fase: 'construir', areas: ['l2', 'pyd'], cnb: ['l2:2.1.2', 'pyd:2.3.1'], ambito: 'conocer',
            prompt: 'Recuperación esencial · 1 min. Une cada recurso con el trabajo que permite hacer.',
            hint: 'Piensa qué ayuda a comunicar y qué ayuda a justificar.',
            explain: 'La señal comunica con forma e ícono; la evidencia observable permite justificar un riesgo posible.' },
          { pairs: [
            { id: 'a', left: 'Forma e ícono reconocibles', right: 'Comunicar una indicación breve' },
            { id: 'b', left: 'Evidencia observable', right: 'Sustentar un riesgo posible' },
          ] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.5'], ambito: 'hacer', title: 'Etapa 1: representación de la ruta · 5 min',
            prompt: 'En una hoja, representa una ruta real observada con una persona adulta o usa las dos rutas ficticias de la imagen.' },
          { goal: 'Construir una representación de ruta que otra persona pueda seguir.',
            steps: [
              { title: 'Traza', detail: 'Marca inicio, escuela y una línea continua para el trayecto.' },
              { title: 'Ubica', detail: 'Añade dos referencias visibles y señala un punto que conviene analizar, sin llamar a la ruta “segura”.' },
            ],
            evidence: 'Representación con inicio, escuela, trayecto, dos referencias y un punto para analizar.',
            rubric: ['Otra persona puede seguir el trayecto', 'Solo muestra elementos observados o dados en el caso'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:2.3.1', 'pyd:2.3.2'], ambito: 'emprender', title: 'Etapa 2: un riesgo sustentado · 3 min',
            prompt: 'Junto al punto marcado, escribe una cadena breve: **evidencia → causa → riesgo posible**.' },
          { minWords: 10, placeholder: 'Evidencia: ... Causa: ... Si..., entonces podría...',
            model: 'Evidencia: la curva no tiene acera. Causa: se comparte el espacio con vehículos. Si coinciden, entonces podría haber un acercamiento peligroso.',
            rubric: ['La evidencia es observable y la causa se relaciona con ella', 'El riesgo se expresa como posibilidad condicionada'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['mat', 'art', 'l2'], cnb: ['mat:1.1.11', 'art:2.2.1', 'l2:2.1.2', 'l2:2.1.3'], ambito: 'hacer', title: 'Etapa 3: diseño claro de la señal · 3 min',
            prompt: 'Diseña una señal escolar breve para comunicar una indicación relacionada con el punto analizado.' },
          { goal: 'Diseñar una señal concisa, legible y fácil de reconocer.',
            steps: [
              { title: 'Forma e ícono', detail: 'Traza una forma simétrica sencilla y un ícono grande.' },
              { title: 'Lectura rápida', detail: 'Añade hasta 3 palabras y usa dos colores con contraste.' },
            ],
            evidence: 'Señal con forma simétrica, ícono, hasta 3 palabras y contraste.',
            rubric: ['El mensaje se reconoce con rapidez', 'La forma, el ícono y los colores se distinguen con claridad'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['mat', 'l2', 'art', 'pyd'], cnb: ['mat:1.1.11', 'l2:2.1.5', 'l2:2.1.3', 'art:2.2.1', 'pyd:2.3.1'], ambito: 'emprender', title: 'Etapa 4: integra la propuesta · 2 min',
            prompt: 'Coloca la señal en la representación y escribe una recomendación condicional debajo.' },
          { goal: 'Entregar una propuesta de ruta sustentada y comprensible.',
            steps: [
              { title: 'Vincula', detail: 'Dibuja una línea desde la señal hasta el punto exacto donde propones comunicar el mensaje.' },
              { title: 'Concluye', detail: 'Escribe: “Según estas evidencias, esta ruta podría ser preferible si…”. Añade la condición que debe revisar una persona adulta o autoridad.' },
            ],
            evidence: 'Hoja integrada con representación de ruta, análisis de riesgos, señal y recomendación condicional.',
            rubric: ['La señal está vinculada con un riesgo analizado', 'La conclusión depende de evidencia y condiciones', 'Solicita revisión adulta o de la autoridad responsable'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['pyd', 'l2'], cnb: ['pyd:2.3.1', 'l2:2.1.3'], ambito: 'convivir', title: 'Etapa 5: prueba oral · 1 min',
            prompt: 'Muestra la hoja sin explicarla. Pide a otra persona que señale el trayecto y diga qué comunica la señal. ¿Cuándo puedes pasar a la revisión?' },
          { options: [
            { id: 'a', text: 'Cuando puede seguir la ruta y entiende el mensaje de la señal' },
            { id: 'b', text: 'Cuando necesita que le expliques toda la hoja' },
            { id: 'c', text: 'Cuando mira la hoja sin comprobar el trayecto ni la señal' },
          ], correct: ['a'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['art', 'pyd'], cnb: ['art:2.2.1', 'pyd:2.3.1'], ambito: 'hacer', title: 'Etapa 6: corrige · 1 min',
            prompt: 'Haz una corrección concreta basada en la prueba oral: aclara el trayecto o mejora la señal.' },
          { goal: 'Mejorar la comunicación del producto.',
            steps: [
              { title: 'Localiza', detail: 'Señala el único elemento que la otra persona no entendió.' },
              { title: 'Corrige', detail: 'Cambia un elemento que no se entendió y encierra la mejora.' },
            ],
            evidence: 'Una mejora visible y relacionada con la revisión.',
            rubric: ['La corrección responde a la prueba oral', 'La mejora se puede localizar'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['mat', 'l2', 'art', 'pyd'], cnb: ['mat:1.1.11', 'l2:2.1.5', 'l2:2.1.3', 'art:2.2.1', 'pyd:2.3.1', 'pyd:2.3.2'], ambito: 'emprender', title: 'Producto final: Ruta segura a la escuela · 1 min',
            prompt: 'Antes de entregar, ¿qué lista confirma que la hoja es una propuesta completa para revisión?' },
          { options: [
            { id: 'a', text: 'Ruta legible + una cadena de riesgo + señal clara + recomendación condicional + “Propuesta para revisión”' },
            { id: 'b', text: 'Ruta sin referencias + riesgo sin evidencia + señal sin vínculo' },
            { id: 'c', text: 'Afirmación de que la ruta siempre es segura y permiso para instalar la señal' },
          ], correct: ['a'] },
        ),
        S.reflect(
          { fase: 'reflexionar', areas: ['mat', 'l2', 'art', 'pyd'], cnb: ['mat:1.1.11', 'l2:2.1.5', 'art:2.2.1', 'pyd:2.3.1'], ambito: 'ser',
            prompt: 'Cierre · 2 min. Revisa lo que lograste y elige un compromiso.' },
          { statements: ['Representé una ruta', 'Analicé un riesgo con evidencia', 'Diseñé una señal clara', 'Escribí una recomendación condicional'],
            commitments: ['Observaré el tránsito solo con una persona adulta y desde un lugar apartado', 'Consultaré a la autoridad responsable antes de proponer cambios'] },
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
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.1'], prompt: 'En un modelo se tapa el conducto que lleva la secreción de una glándula sebácea a la superficie. ¿Qué función se interrumpe directamente?' },
          { options: [
            { id: 'a', text: 'La grasa protectora deja de llegar a la superficie de la piel y el cabello' },
            { id: 'b', text: 'La insulina deja de entrar a la sangre para regular el azúcar' },
            { id: 'c', text: 'Las lágrimas dejan de limpiar y proteger los ojos' },
          ], correct: ['a'] },
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
          { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.3'], prompt: 'En una noticia sobre el precio del café aparece un saco, el símbolo Q y una flecha verde hacia arriba. ¿Qué comunica la imagen?' },
          { options: [
            { id: 'a', text: 'El precio del café aumentó' },
            { id: 'b', text: 'El café está prohibido' },
            { id: 'c', text: 'El saco debe colocarse en una repisa alta' },
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
          { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.4.2', 'ef:1.4.12'], prompt: 'Sin palabras, quieres representar un juguete de cuerda que empieza con mucha energía y poco a poco se detiene. ¿Qué secuencia lo comunica mejor?' },
          { options: [
            { id: 'a', text: 'Inicia con movimientos rápidos y cortantes; reduce la velocidad y la energía hasta terminar quieto' },
            { id: 'b', text: 'Mantiene la misma velocidad y energía durante toda la secuencia' },
            { id: 'c', text: 'Empieza inmóvil y termina con movimientos cada vez más rápidos y fuertes' },
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
    S.sort(
      { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.1'], prompt: 'Clasifica cada caso según la vía de secreción descrita.' },
      { buckets: [
        { id: 'int', label: 'Secreción interna (endocrina)', icon: 'HeartPulse' },
        { id: 'ext', label: 'Secreción externa (exocrina)', icon: 'Droplets' },
      ], items: [
        { id: 'a', text: 'El producto entra directamente a la sangre sin pasar por un conducto', bucket: 'int' },
        { id: 'b', text: 'El producto recorre un conducto hasta la superficie de la piel', bucket: 'ext' },
      ] },
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
    S.choice(
      { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.3'], prompt: 'En una noticia sobre asistencia aparecen diez figuras de personas y cuatro están coloreadas. ¿Qué dato comunica la imagen?' },
      { options: [
        { id: 'a', text: 'Cuatro de cada diez personas asistieron' },
        { id: 'b', text: 'Diez de cada cuatro personas asistieron' },
        { id: 'c', text: 'Asistieron catorce personas' },
      ], correct: ['a'] },
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
    S.choice(
      { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.4.14'], prompt: 'Cuatro estudiantes avanzan al compás y empiezan juntos, pero uno queda demasiado cerca de quien va adelante. ¿Qué ajuste permite continuar con control?' },
      { options: [
        { id: 'a', text: 'Conservar distancia con quien va adelante sin dejar de seguir el compás' },
        { id: 'b', text: 'Acelerar para colocarse justo detrás de sus talones' },
        { id: 'c', text: 'Cerrar los ojos y copiar cualquier desplazamiento' },
      ], correct: ['a'] },
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
