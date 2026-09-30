import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 3 · Unidad 1 "Conociendo nuestras raíces"
 * Tema generador: Mensajes y caminos que nos conectan
 * Cierre semanal (v3): las 27 lecciones de materia viven en src/content/sexto/materias/<area>/u1/s03.ts.
 * El viernes: Taller "Un camino seguro a la escuela" (Productividad + L2 + Matemáticas + Expresión
 * Artística) y Reto semanal.
 */
export default semana({
  id: 's03',
  unidad: 1,
  semana: 3,
  kind: 'aprendizaje',
  temaGenerador: 'Mensajes y caminos que nos conectan',
  title: 'Mensajes y caminos que nos conectan',
  subtitle: 'Caminos antiguos y comercio de Centroamérica, señales y símbolos, teatro, animales y glándulas, simetría, perímetro y cuerpos geométricos',
  icon: 'Route',
  color: 'var(--area-ccss)',
  contexto: 'Hace más de mil años, los mayas construyeron calzadas blancas llamadas sacbeob para unir sus ciudades, y los incas enviaban mensajes con corredores llamados chasquis. Hoy, por las carreteras salen el café y el cardamomo hacia otros continentes, y las señales de tránsito nos hablan sin palabras. Esta semana leerás señales, símbolos y obras de teatro, buscarás información pertinente, contarás tus impresiones en inglés y diseñarás carteles. También clasificarás animales, descubrirás las glándulas que envían mensajes químicos por tu cuerpo, moverás figuras con simetría, traslación y rotación, medirás perímetros y conocerás los cuerpos geométricos. Y pensarás, con otros, cómo resolver problemas de tu comunidad.',
  ejes: ['multiculturalidad', 'equidad', 'trabajo', 'seguridad'],
  media: {
    id: 's03-portada', kind: 'video', title: 'Del sacbé a la carretera', aspect: '16:9', duration: 60,
    alt: 'Animación que transforma una calzada maya blanca entre templos en una carretera moderna con camiones, señales y un puerto.',
    brief: 'Animación 2D de 60 s con transición continua: (1) un sacbé blanco elevado entre templos de la selva de Petén, con mercaderes a pie cargando mecapal; (2) canoas por un río; (3) la escena se transforma en la carretera Interamericana con camiones de carga, señales de tránsito y un bus; (4) llega a un puerto con contenedores. Rótulos: "Ayer", "Hoy". Narración breve: "Los caminos llevan productos, personas y mensajes". Marimba y sonidos de ambiente. Sin marcas comerciales.',
  },
  badge: { id: 'medalla-s03', name: 'Constructor de caminos', icon: 'Route', desc: 'Completaste la semana 3 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Viernes: Taller interdisciplinario ───────────────────────── */
    lesson({
      id: 's03-d5-taller',
      kind: 'taller',
      day: 5,
      title: 'Taller: un camino seguro a la escuela',
      icon: 'Signpost',
      minutes: 19,
      gancho: 'Frente a muchas escuelas pasan carros y motos muy rápido. ¿Cómo podría un grupo de estudiantes ayudar a que cruzar sea seguro?',
      objetivos: [
        'Analizar un problema de la comunidad en un círculo de calidad, con árbol de problemas y PNI',
        'Elegir las señales adecuadas según su forma, color y simetría',
        'Diseñar un cartel que comunique con un ícono, pocas palabras y colores con contraste',
      ],
      resumen: [
        'Un círculo de calidad es un grupo pequeño y voluntario que analiza un problema con datos, propone soluciones y las evalúa.',
        'En el árbol de problemas, las raíces son las causas y las ramas son los efectos: se resuelve atacando las causas. El PNI revisa lo positivo, lo negativo y lo interesante de una propuesta.',
        'Las señales comunican por forma y color: el octágono rojo es ALTO, el rombo amarillo avisa un peligro y el rectángulo verde orienta. Su simetría ayuda a reconocerlas rápido.',
        'Un buen cartel tiene un mensaje principal, un ícono grande, colores con contraste y pocas palabras.',
      ],
      media: {
        id: 's03-d5-taller-cruce', kind: 'image', title: 'El cruce frente a la escuela', aspect: '16:9',
        alt: 'Calle frente a una escuela rural con carros y motos, estudiantes que esperan en la orilla, sin paso de cebra ni señales; en una ventana, un grupo de estudiantes dibuja un árbol en un papelógrafo.',
        brief: 'Ilustración plana en dos planos: al frente, una carretera asfaltada que pasa frente a una escuela pública rural de Guatemala, con un pick-up y una moto a velocidad (líneas de movimiento), estudiantes esperando en la orilla, sin paso de cebra ni señales. Al fondo, por la ventana del aula, seis estudiantes de distintos pueblos alrededor de un papelógrafo con un árbol dibujado (raíces, tronco, ramas). Colores cálidos, sin rostros identificables ni marcas.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'l2', 'ccss'], cnb: ['pyd:2.3.2'], ambito: 'emprender', title: 'Del sacbé a la calle de mi escuela',
            prompt: 'Los mayas unían sus ciudades con **sacbeob**; hoy los caminos llevan personas, productos y mensajes. Pero el camino frente a la escuela de **Aldo** es peligroso: los carros pasan rápido y no hay señales. Su grado decide actuar. Toca cada tarjeta.' },
          { icon: 'Route', body: 'Hoy vas a **usar** lo que aprendiste para proponer una solución real.', reveal: [
            { icon: 'Users', front: 'Productividad', back: 'Formar un **círculo de calidad**, hacer un **árbol de problemas** y revisar la propuesta con un **PNI**.' },
            { icon: 'Signpost', front: 'L2', back: 'Elegir **señales** por su forma y su color.' },
            { icon: 'FlipHorizontal2', front: 'Matemáticas', back: 'Reconocer la **simetría** de las señales.' },
            { icon: 'Palette', front: 'Expresión Artística', back: 'Diseñar un **cartel** con técnica mixta.' },
          ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['pyd'], cnb: ['pyd:2.3.2'], ambito: 'convivir',
            prompt: 'Para analizar el problema, el grado quiere formar un **círculo de calidad**. ¿Cuál grupo cumple con sus características?',
            hint: 'Recuerda: grupo pequeño (de 4 a 8 personas), voluntario y que se reúne con frecuencia.',
            explain: 'Un círculo de calidad es pequeño, voluntario y constante. Tiene quien coordina, quien anota (secretaría) y participantes que opinan por turnos y deciden con datos.' },
          { options: [
            { id: 'a', text: 'Seis estudiantes voluntarios de distintos grados que se reúnen cada semana', icon: 'Users' },
            { id: 'b', text: 'Toda la escuela, unas 300 personas, reunida una vez al año', icon: 'School', feedback: 'Es demasiado grande y poco frecuente para analizar el problema con calma.' },
            { id: 'c', text: 'La directora sola, que decide sin preguntar', icon: 'User', feedback: 'Un círculo de calidad es un **grupo** donde todos opinan.' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:2.3.1'], ambito: 'hacer',
            prompt: 'El tronco del árbol es el problema: **"Cruzar la calle frente a la escuela es peligroso"**. Coloca cada tarjeta en las **raíces** (causas) o en las **ramas** (efectos).',
            hint: 'Pregúntate: ¿esto **provoca** el problema o **sucede por** el problema?',
            explain: 'Las causas (velocidad, falta de señales, cruzar corriendo) son las que hay que atacar. Los efectos muestran por qué vale la pena resolverlo.' },
          { buckets: [
            { id: 'raiz', label: 'Raíces: causas', icon: 'Sprout', color: 'var(--area-pyd)' },
            { id: 'rama', label: 'Ramas: efectos', icon: 'TreeDeciduous', color: 'var(--c-hint)' },
          ], items: [
            { id: 'c1', text: 'Los carros y las motos pasan a mucha velocidad', bucket: 'raiz' },
            { id: 'c2', text: 'No hay señales ni paso de cebra', bucket: 'raiz' },
            { id: 'c3', text: 'Algunos estudiantes cruzan corriendo sin mirar', bucket: 'raiz' },
            { id: 'e1', text: 'Una moto casi atropella a un niño de primero', bucket: 'rama' },
            { id: 'e2', text: 'Las familias están preocupadas y algunas ya no dejan venir solos a sus hijos', bucket: 'rama' },
          ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['l2'], cnb: ['l2:2.1.5'], ambito: 'conocer',
            prompt: 'El círculo pedirá a la municipalidad una señal que **avise a los conductores** que hay niños cerca. ¿Qué tipo de señal es y cómo se ve?',
            hint: 'Hay señales que obligan o prohíben, otras que avisan un peligro y otras que orientan.',
            explain: 'Las señales **preventivas** avisan un peligro: rombo amarillo con dibujo negro. Así el conductor reduce la velocidad antes de llegar.' },
          { options: [
            { id: 'a', text: 'Preventiva: rombo amarillo con dos niños dibujados en negro', icon: 'Diamond' },
            { id: 'b', text: 'Informativa: rectángulo azul con una cama', icon: 'RectangleHorizontal', feedback: 'Las informativas orientan sobre servicios (como un hotel); no avisan peligros.' },
            { id: 'c', text: 'Reglamentaria: octágono rojo con la palabra ALTO', icon: 'Octagon', feedback: 'El ALTO obliga a detenerse siempre; para avisar que hay niños se usa una preventiva.' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.5', 'l2:2.1.2'], ambito: 'conocer',
            prompt: 'El círculo hace un recorrido por el camino a la escuela. Une cada señal que encuentran con su significado.',
            hint: 'Fíjate en la forma, el color y las marcas: tachado = prohibido.',
            explain: 'Forma, color y dibujo bastan para entender una señal, aunque no sepas leer el idioma en que está escrita.' },
          { leftTitle: 'Señal', rightTitle: 'Significado', pairs: [
            { id: 's1', left: 'Octágono rojo con la palabra ALTO', leftIcon: 'Octagon', right: 'Detente por completo' },
            { id: 's2', left: 'Círculo con borde rojo y una persona caminando, tachada', leftIcon: 'Ban', right: 'Prohibido el paso de peatones' },
            { id: 's3', left: 'Rombo amarillo con una curva negra', leftIcon: 'Diamond', right: 'Cuidado: curva peligrosa adelante' },
            { id: 's4', left: 'Rectángulo verde con una persona corriendo hacia una puerta', leftIcon: 'DoorOpen', right: 'Ruta de evacuación' },
          ] },
        ),
        S.tf(
          { fase: 'aplicar', areas: ['mat', 'l2'], cnb: ['mat:1.1.11'], ambito: 'conocer',
            prompt: 'Las señales tienen formas **simétricas** para que se reconozcan rápido desde lejos. ¿Verdadero o falso?',
            hint: 'Un polígono regular tiene tantos ejes de simetría como lados. El rombo tiene 2.',
            explain: 'El octágono regular del ALTO tiene 8 ejes; el rombo de las preventivas, 2 (sus diagonales). Al doblar por un eje, las dos mitades coinciden.' },
          { statements: [
            { text: 'La señal de ALTO, un octágono regular, tiene 8 ejes de simetría.', answer: true },
            { text: 'El rombo de las señales preventivas tiene 4 ejes de simetría.', answer: false, why: 'El rombo tiene 2 ejes: sus dos diagonales. El que tiene 4 es el cuadrado.' },
            { text: 'Si doblas un rombo por una de sus diagonales, las dos mitades coinciden.', answer: true },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['pyd'], cnb: ['pyd:2.3.1'], ambito: 'emprender',
            prompt: 'La propuesta del círculo es: **"Pintar un paso de cebra y formar una patrulla escolar con chalecos en la entrada y la salida"**. Haz su **PNI**: clasifica cada comentario.',
            hint: 'Positivo: una ventaja. Negativo: una desventaja o dificultad. Interesante: una idea nueva o una pregunta que vale la pena explorar.',
            explain: 'El PNI no decide por ti: te ayuda a ver la propuesta completa. Las dificultades (permiso, costo) se pueden planificar antes de empezar.' },
          { buckets: [
            { id: 'p', label: 'Positivo', icon: 'ThumbsUp', color: 'var(--c-ok)' },
            { id: 'n', label: 'Negativo', icon: 'ThumbsDown', color: 'var(--c-hint)' },
            { id: 'i', label: 'Interesante', icon: 'Lightbulb', color: 'var(--c-maiz-strong)' },
          ], items: [
            { id: 'k1', text: 'Los conductores verán claramente dónde cruzan los niños', bucket: 'p' },
            { id: 'k2', text: 'Los estudiantes aprenderán a cruzar con orden', bucket: 'p' },
            { id: 'k3', text: 'La pintura cuesta dinero y hay que pedir permiso a la municipalidad', bucket: 'n' },
            { id: 'k4', text: 'Los patrulleros podrían mojarse en época de lluvia', bucket: 'n' },
            { id: 'k5', text: '¿Y si invitamos a la policía de tránsito a entrenar a la patrulla?', bucket: 'i' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['art', 'l2'], cnb: ['art:2.2.1'], ambito: 'hacer',
            prompt: 'Ahora, el cartel para la entrada de la escuela. ¿Cuál boceto comunicará mejor desde lejos?',
            hint: 'Recuerda: un mensaje principal, un ícono grande, colores con contraste, pocas palabras y espacio libre.',
            explain: 'Desde lejos se entienden el ícono grande y pocas palabras con letras grandes. El contraste (oscuro sobre claro) hace que resalten.' },
          { options: [
            { id: 'a', text: 'Un párrafo de 60 palabras en letra pequeña, con dibujitos alrededor', feedback: 'Nadie lo leerá desde la calle: demasiadas palabras y letras pequeñas.' },
            { id: 'b', text: 'Un ícono grande de un niño cruzando, la frase "¡Mira a los dos lados!" en letras grandes y fondo claro' },
            { id: 'c', text: 'Letras amarillas sobre fondo blanco, sin dibujo', feedback: 'Amarillo sobre blanco casi no tiene contraste: no se lee.' },
          ], correct: ['b'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['art'], cnb: ['art:2.2.1'], ambito: 'hacer',
            prompt: 'Quieres que el ícono y las letras resalten sobre un fondo celeste pintado con acuarela. ¿Qué técnica mixta usas?',
            hint: 'Piensa en qué material rechaza el agua.',
            explain: 'La cera del crayón rechaza el agua: si dibujas primero con crayón y luego pintas encima con acuarela, los trazos quedan limpios y resaltan.' },
          { options: [
            { id: 'a', text: 'Primero dibujo el ícono y las letras con crayón de cera y después pinto el fondo con acuarela' },
            { id: 'b', text: 'Primero pinto con acuarela y, mojado todavía, dibujo encima con pastel', feedback: 'El pastel sobre papel mojado se hace pasta y se mancha.' },
            { id: 'c', text: 'Pinto todo con acuarela, también las letras, con el mismo celeste', feedback: 'Sin contraste, las letras se pierden en el fondo.' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['l2', 'art'], cnb: ['l2:2.1.3'], ambito: 'hacer',
            prompt: 'Los colores también comunican. Une cada mensaje del cartel con el color que mejor lo acompaña.',
            hint: 'Rojo = peligro o prohibido; amarillo = precaución; verde = seguro.',
            explain: 'Usar los colores como en las señales ayuda a que el mensaje se entienda sin leer.' },
          { leftTitle: 'Mensaje', rightTitle: 'Color', pairs: [
            { id: 'm1', left: '"¡No cruces corriendo!"', right: 'Rojo' },
            { id: 'm2', left: '"Precaución: salida de escolares"', right: 'Amarillo' },
            { id: 'm3', left: '"Aquí se cruza seguro"', right: 'Verde' },
          ] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['pyd', 'art', 'l2', 'mat'], cnb: ['pyd:2.3.1', 'pyd:2.3.2', 'art:2.2.1', 'l2:2.1.5'], ambito: 'emprender', title: 'Producto: propuesta y cartel',
            prompt: 'Prepara la propuesta de tu círculo de calidad para un camino seguro a **tu** escuela (o a la de Aldo). Sigue los pasos y autoevalúate.' },
          { goal: 'Presentar a la dirección o al COCODE una propuesta para un camino más seguro a la escuela, con un cartel que la comunique.',
            steps: [
              { title: 'Árbol de problemas', detail: 'Dibuja las raíces (3 causas), el tronco (el problema) y las ramas (2 efectos).' },
              { title: 'Propuesta y PNI', detail: 'Escribe una solución que ataque una causa y haz su PNI en tres columnas.' },
              { title: 'La señal', detail: 'Dibuja la señal que pedirían, con su forma y su color, y escribe qué tipo es (reglamentaria, preventiva o informativa).' },
              { title: 'Boceto', detail: 'Haz un boceto del cartel: un ícono grande, un mensaje de pocas palabras y colores con contraste.' },
              { title: 'Cartel final', detail: 'Termina el cartel con técnica mixta (crayón de cera y acuarela) o con la técnica que tengas en casa.' },
            ],
            evidence: 'El árbol de problemas en tu cuaderno y el cartel terminado.',
            rubric: [
              'Mi árbol separa bien causas y efectos',
              'Mi propuesta ataca una causa y tiene su PNI',
              'La señal que elegí tiene la forma y el color correctos',
              'Mi cartel tiene un ícono grande, pocas palabras y colores con contraste',
            ] },
        ),
        cierre({ areas: ['pyd', 'l2', 'art'], cnb: ['pyd:2.3.1', 'l2:2.1.5'] },
          ['Analizo un problema separando causas y efectos', 'Reconozco las señales por su forma, color y simetría', 'Diseño un cartel que se entiende desde lejos'],
          ['Cruzaré la calle solo por lugares seguros y mirando a los dos lados', 'Propondré en mi grado formar un círculo de calidad', 'Enseñaré a alguien de mi familia qué significan las señales preventivas']),
      ],
    }),

    /* ───────────────────────── Viernes: Reto semanal ───────────────────────── */
    lesson({
      id: 's03-d5-reto',
      kind: 'reto',
      day: 5,
      title: 'Reto de la semana 3',
      icon: 'Trophy',
      minutes: 14,
      objetivos: ['Demostrar lo que aprendiste esta semana en todas tus materias', 'Obtener la medalla "Constructor de caminos" (70 % o más)'],
      resumen: ['Superé el reto de la semana 3: perímetro, movimientos y cuerpos geométricos, teatro, animales y glándulas, caminos antiguos, economía de Centroamérica, inglés, ritmo, arte y respeto a la diversidad.'],
      media: {
        id: 's03-d5-reto', kind: 'image', title: 'Medalla Constructor de caminos', aspect: '1:1',
        alt: 'Medalla dorada con un camino que atraviesa montañas y una señal de tránsito.',
        brief: 'Ilustración de medalla circular dorada con relieve de un sacbé que se convierte en carretera entre montañas, con una pequeña señal preventiva a un lado. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024.',
      },
      steps: [
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.2.1'], prompt: 'Un terreno tiene forma de pentágono irregular. Sus lados miden **12 m, 8 m, 10 m, 9 m y 11 m**. ¿Cuántos metros de alambre se necesitan para darle **una vuelta** completa?' },
          { answer: 50, unit: 'm' },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: 'La manecilla de un reloj apunta al **12** y gira hasta el **3**. ¿Qué movimiento hizo?' },
          { options: [
            { id: 'a', text: 'Una rotación de un cuarto de vuelta (90°)' },
            { id: 'b', text: 'Una rotación de media vuelta (180°)' },
            { id: 'c', text: 'Una traslación' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.1'], prompt: '¿Qué cuerpo geométrico tiene **una** base circular, una superficie curva y **un** vértice?' },
          { options: [
            { id: 'a', text: 'Cono' },
            { id: 'b', text: 'Cilindro' },
            { id: 'c', text: 'Pirámide' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.7'], prompt: 'Lee: **ROSA:** _(Mirando por la ventana, asustada.)_ ¿Quién anda ahí? ¿Qué parte es la **acotación**?' },
          { options: [
            { id: 'a', text: '(Mirando por la ventana, asustada.)' },
            { id: 'b', text: 'ROSA' },
            { id: 'c', text: '¿Quién anda ahí?' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.7'], prompt: 'Une cada tipo de obra dramática con su descripción.' },
          { pairs: [
            { id: 'com', left: 'Comedia', right: 'Situaciones graciosas y final feliz' },
            { id: 'tra', left: 'Tragedia', right: 'Conflicto muy serio que termina en desgracia' },
            { id: 'dra', left: 'Drama', right: 'Mezcla momentos serios y alegres, como la vida real' },
          ] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.1.2'], prompt: 'Clasifica estos animales de Guatemala.' },
          { buckets: [
            { id: 'v', label: 'Vertebrados', icon: 'Bone' },
            { id: 'i', label: 'Invertebrados', icon: 'Bug' },
          ], items: [
            { id: 'a1', text: 'Iguana', bucket: 'v' },
            { id: 'a2', text: 'Sapo', bucket: 'v' },
            { id: 'a3', text: 'Zopilote', bucket: 'v' },
            { id: 'a4', text: 'Cangrejo', bucket: 'i' },
            { id: 'a5', text: 'Caracol', bucket: 'i' },
            { id: 'a6', text: 'Araña', bucket: 'i' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.1'], prompt: '¿Cuál de estas es una glándula de **secreción externa** (exocrina)?' },
          { options: [
            { id: 'a', text: 'Las glándulas sudoríparas' },
            { id: 'b', text: 'La tiroides' },
            { id: 'c', text: 'La hipófisis' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.3.1'], prompt: 'Une cada medio de comunicación o transporte con la cultura antigua que lo usó.' },
          { pairs: [
            { id: 'sac', left: 'Sacbeob: caminos blancos entre ciudades', right: 'Mayas' },
            { id: 'chas', left: 'Chasquis: mensajeros que corrían por relevos', right: 'Incas' },
            { id: 'pap', left: 'Papiro para escribir y barcos por el Nilo', right: 'Egipcios' },
            { id: 'cal', left: 'Calzadas de piedra por todo su imperio', right: 'Romanos' },
          ] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.4.1'], prompt: 'Clasifica cada actividad económica de Centroamérica en su sector.' },
          { buckets: [
            { id: 'p', label: 'Primario', icon: 'Wheat' },
            { id: 's', label: 'Secundario', icon: 'Factory' },
            { id: 't', label: 'Terciario', icon: 'Handshake' },
          ], items: [
            { id: 'e1', text: 'Cosechar cardamomo', bucket: 'p' },
            { id: 'e2', text: 'Pescar camarón en el Pacífico', bucket: 'p' },
            { id: 'e3', text: 'Coser pantalones en una maquila', bucket: 's' },
            { id: 'e4', text: 'Fabricar azúcar en un ingenio', bucket: 's' },
            { id: 'e5', text: 'Guiar turistas en Tikal', bucket: 't' },
            { id: 'e6', text: 'Transportar contenedores al puerto', bucket: 't' },
          ] },
        ),
        S.fill(
          { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.3.3'], prompt: 'Complete the story in the past.' },
          { text: 'Yesterday I [[went]] to Lake Atitlán. I [[saw]] three volcanoes. I [[felt]] very happy!', distractors: ['go', 'see', 'feel'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.3'], prompt: 'A una señora no la dejan entrar a un restaurante porque usa su traje maya. ¿Qué es esto?' },
          { options: [
            { id: 'a', text: 'Discriminación: la tratan peor por su pueblo y su cultura' },
            { id: 'b', text: 'Una regla normal del restaurante' },
            { id: 'c', text: 'Solo una opinión sin consecuencias' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.4.14'], prompt: 'Una secuencia de baile se cuenta en estructuras de **8 tiempos**. Si la repites **3 veces** seguidas, ¿cuántos tiempos cuentas en total?' },
          { answer: 24, unit: 'tiempos' },
        ),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 1 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.11'], prompt: '¿Cuál de estas figuras **no** tiene ningún eje de simetría?' },
      { options: [{ id: 'a', text: 'El romboide' }, { id: 'b', text: 'El cuadrado' }, { id: 'c', text: 'El triángulo equilátero' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.1'], prompt: '¿Cuál de estos cuerpos **no** tiene vértices?' },
      { options: [{ id: 'a', text: 'El cilindro' }, { id: 'b', text: 'El cono' }, { id: 'c', text: 'La pirámide' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.2'], prompt: 'En una caja de zapatos (prisma rectangular), ¿qué caras son congruentes?' },
      { options: [{ id: 'a', text: 'Las caras opuestas, de dos en dos' }, { id: 'b', text: 'Ninguna' }, { id: 'c', text: 'Solo la tapa y un costado' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.3'], prompt: 'Quieres saber qué noticias hubo ayer en tu departamento. ¿Qué material consultas?' },
      { options: [{ id: 'a', text: 'Un periódico' }, { id: 'b', text: 'Un atlas' }, { id: 'c', text: 'Un diccionario' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.7'], prompt: 'En una obra de teatro, ¿cómo se llama la parte en que el conflicto **se resuelve**?' },
      { options: [{ id: 'a', text: 'Desenlace' }, { id: 'b', text: 'Planteamiento' }, { id: 'c', text: 'Nudo' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.2.1'], prompt: '¿Por qué dos hermanos de los mismos padres no son idénticos?' },
      { options: [
        { id: 'a', text: 'Porque cada uno recibe una mezcla distinta de los genes de su madre y de su padre' },
        { id: 'b', text: 'Porque uno tiene ADN y el otro no' },
        { id: 'c', text: 'Porque tienen distinto número de cromosomas' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.1'], prompt: '¿Qué liberan a la sangre las glándulas de **secreción interna**?' },
      { options: [{ id: 'a', text: 'Hormonas' }, { id: 'b', text: 'Sudor' }, { id: 'c', text: 'Lágrimas' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.1'], prompt: '¿Cuál es un efecto de la tecnología en la **economía**?' },
      { options: [
        { id: 'a', text: 'Enviar y recibir dinero por el celular' },
        { id: 'b', text: 'Escuchar música de otros países' },
        { id: 'c', text: 'Aprender una danza por video' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.4.1'], prompt: 'Cuando Guatemala **vende** café a Alemania, está…' },
      { options: [{ id: 'a', text: 'Exportando' }, { id: 'b', text: 'Importando' }, { id: 'c', text: 'Fabricando' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.1.1'], prompt: '¿En qué países viven los pueblos **quechua** y **aymara**?' },
      { options: [{ id: 'a', text: 'Perú y Bolivia' }, { id: 'b', text: 'Guatemala y Belice' }, { id: 'c', text: 'Chile y Paraguay' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.2'], prompt: 'En un asiento del bus ves el símbolo de una persona con bastón y de una mujer embarazada. ¿Qué significa?' },
      { options: [
        { id: 'a', text: 'Es un asiento preferencial para personas mayores o embarazadas' },
        { id: 'b', text: 'Está prohibido sentarse' },
        { id: 'c', text: 'Es el asiento del piloto' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:2.2.1'], prompt: '¿Qué técnica seca da colores suaves que se pueden **difuminar** con el dedo o un algodón?' },
      { options: [{ id: 'a', text: 'El pastel' }, { id: 'b', text: 'El crayón de cera' }, { id: 'c', text: 'La tinta china' }], correct: ['a'] }),
  ],
});
