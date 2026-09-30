import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 13 · Unidad 2 "Consolidando nuestras relaciones"
 * Tema generador: Crecemos juntos con respeto
 * Incluye contenidos sensibles del CNB (aparato reproductor femenino, fecundación, ética en la sexualidad):
 * se tratan con lenguaje científico, respetuoso y apropiado para 11-12 años.
 */
export default semana({
  id: 's13',
  unidad: 2,
  semana: 13,
  kind: 'aprendizaje',
  temaGenerador: 'Crecemos juntos con respeto',
  title: 'Crecemos juntos con respeto',
  subtitle: 'Hormonas, crecer con cuidado, trabajo infantil y voces diversas',
  icon: 'Sprout',
  color: 'var(--area-cnt)',
  contexto: 'Entre los 10 y los 14 años el cuerpo cambia, y también cambian las relaciones con la familia, las amistades y la comunidad. En Guatemala, muchas niñas y niños además trabajan en lugar de estudiar. Esta semana aprenderás cómo funcionan las hormonas y el aparato reproductor, por qué el respeto y el cuidado son la base para crecer, y cómo defender el derecho de toda la niñez a estudiar y a jugar.',
  ejes: ['equidad', 'vida-familiar', 'valores', 'trabajo'],
  media: {
    id: 's13-portada', kind: 'video', title: 'Crecer es un camino compartido', aspect: '16:9', duration: 55,
    alt: 'Ilustraciones animadas de niñas y niños de distintos pueblos de Guatemala que crecen, estudian, juegan y conversan con sus familias.',
    brief: 'Animación 2D de 55 s con estilo cálido: una línea de tiempo muestra a una niña y un niño (de pueblos distintos: maya y garífuna, por ejemplo) creciendo de los 8 a los 13 años; escenas: jugando fútbol, en la escuela, ayudando en casa con tareas adecuadas a su edad, conversando con una abuela y con su mamá, participando en una mesa redonda. Mensaje final en pantalla: "Crecer con respeto, cuidado y derechos". Música suave. Sin representar desnudez ni situaciones de riesgo.',
  },
  badge: { id: 'medalla-s13', name: 'Voz que respeta', icon: 'HeartHandshake', desc: 'Completaste la semana 13 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's13-d1-mensajeros-quimicos',
      title: 'Mensajeros químicos',
      icon: 'Activity',
      minutes: 14,
      day: 1,
      gancho: 'Antes de una carrera o de un examen, ¿has sentido el corazón acelerado y las manos frías? ¿Quién da esa orden en tu cuerpo?',
      objetivos: ['Describir la función de las glándulas y las hormonas que producen', 'Interpretar una infografía (texto ícono-verbal)', 'Usar títulos y subtítulos para encontrar información rápido', 'Entregar y recibir la estafeta en una carrera de relevos'],
      resumen: [
        'Las glándulas endocrinas producen hormonas, mensajeros químicos que viajan por la sangre y regulan el cuerpo.',
        'Hipófisis: hormona del crecimiento y control de otras glándulas. Tiroides: regula la energía del cuerpo. Páncreas: insulina, que regula el azúcar en la sangre. Suprarrenales: adrenalina, para reaccionar ante un peligro.',
        'En la pubertad, los ovarios producen estrógenos y los testículos testosterona: por eso el cuerpo cambia.',
        'Hay distintos tipos de lectura: selectiva, silenciosa, en voz alta, coral, dramatizada, personal, individual y reflexiva.',
        'Los títulos y subtítulos ayudan a decidir si un texto tiene la información que buscas.',
      ],
      media: {
        id: 's13-d1-glandulas', kind: 'diagram', title: 'Las glándulas del cuerpo humano', aspect: '3:4',
        alt: 'Silueta humana de frente con la ubicación de hipófisis, tiroides, suprarrenales, páncreas, ovarios y testículos, cada una con su hormona.',
        brief: 'Diagrama vertical tipo libro de texto: silueta humana neutra (sin rasgos sexuales, de color gris claro) con las glándulas en color y líneas a etiquetas: hipófisis (base del cerebro, "hormona del crecimiento"), tiroides (cuello, "regula la energía"), suprarrenales (sobre los riñones, "adrenalina"), páncreas ("insulina"). Abajo, dos recuadros pequeños separados: "ovarios → estrógenos" y "testículos → testosterona", dibujados como órganos esquemáticos, no anatómicos realistas. Íconos de gotas rojas que indican que las hormonas viajan por la sangre.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'ef'], cnb: ['cnt:2.3.3'], ambito: 'conocer', title: 'Mensajes que viajan por la sangre',
            prompt: 'Tu cuerpo tiene un sistema de **mensajeros químicos**: las **hormonas**. Las producen las **glándulas** y viajan por la sangre hasta donde se necesitan. Toca cada glándula.' },
          { icon: 'Activity', body: 'Las glándulas que envían hormonas a la sangre forman el **sistema endocrino**. Trabaja junto con el sistema nervioso.', reveal: [
            { icon: 'Brain', front: 'Hipófisis', back: 'Pequeña, en la base del cerebro. Produce la **hormona del crecimiento** y da órdenes a otras glándulas.' },
            { icon: 'Thermometer', front: 'Tiroides', back: 'En el cuello. Sus hormonas regulan la **energía** que usa el cuerpo.' },
            { icon: 'Zap', front: 'Suprarrenales', back: 'Sobre los riñones. Producen **adrenalina**: acelera el corazón ante un susto o un reto.' },
            { icon: 'Apple', front: 'Páncreas', back: 'Produce **insulina**, que ayuda a controlar el **azúcar** en la sangre.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.3'], ambito: 'conocer',
            prompt: 'Une cada glándula con la **hormona** que produce y su efecto.',
            hint: 'Los ovarios y los testículos también son glándulas: sus hormonas causan los cambios de la pubertad.',
            explain: 'Cuando empieza la pubertad, la hipófisis envía señales a los ovarios o a los testículos, que producen más hormonas sexuales. Por eso aparecen cambios en el cuerpo, en tiempos distintos para cada persona.' },
          { leftTitle: 'Glándula', rightTitle: 'Hormona y efecto', pairs: [
            { id: 'pan', left: 'Páncreas', leftIcon: 'Apple', right: 'Insulina: regula el azúcar en la sangre' },
            { id: 'sup', left: 'Suprarrenales', leftIcon: 'Zap', right: 'Adrenalina: prepara para reaccionar rápido' },
            { id: 'ova', left: 'Ovarios', leftIcon: 'CircleDot', right: 'Estrógenos: cambios de la pubertad en las niñas' },
            { id: 'tes', left: 'Testículos', leftIcon: 'Circle', right: 'Testosterona: cambios de la pubertad en los niños' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'cnt'], cnb: ['l1:3.3.2', 'l1:4.1.2', 'l1:4.2.4'], ambito: 'conocer',
            prompt: 'Observa la infografía (un **texto ícono-verbal**: une imágenes y palabras). Usa sus **subtítulos** para encontrar rápido cada respuesta: no necesitas leer todo.',
            media: { id: 's13-d1-infografia', kind: 'diagram', title: 'Infografía: la adrenalina en una carrera', aspect: '3:4',
              alt: 'Infografía vertical con cuatro bloques: una niña en la línea de salida, un ícono de glándula sobre el riñón, un corazón acelerado y la niña corriendo.',
              brief: 'Infografía vertical de 4 bloques numerados con subtítulos grandes idénticos al texto de la actividad: (1) "La señal" – niña en la salida de una carrera de relevos, con nube de pensamiento "¡Ya casi!"; (2) "La glándula" – ícono de glándula suprarrenal sobre un riñón con gotitas de adrenalina; (3) "El efecto" – corazón con líneas de velocidad, pulmones abiertos, músculos resaltados; (4) "La calma" – la niña respirando despacio después de correr. Colores vivos, flechas entre bloques, poco texto por bloque.' } },
          { genre: 'Texto ícono-verbal (infografía)', heading: '¿Qué pasa en tu cuerpo antes de una carrera?', passage:
            '**1. La señal.** Tu cerebro percibe un reto: ¡está por empezar la carrera de relevos!\n\n**2. La glándula.** Las glándulas **suprarrenales**, que están sobre los riñones, liberan **adrenalina** a la sangre.\n\n**3. El efecto.** En segundos, el corazón late más rápido, respiras más hondo y los músculos reciben más sangre. Estás listo para correr.\n\n**4. La calma.** Cuando el reto termina, el cuerpo deja de producir tanta adrenalina y poco a poco vuelves a la calma. Respirar despacio ayuda.',
            questions: [
              { q: 'Si solo quieres saber **dónde** está la glándula, ¿qué subtítulo lees?', options: [
                { id: 'a', text: '2. La glándula' },
                { id: 'b', text: '4. La calma' },
                { id: 'c', text: '1. La señal' },
              ], correct: 'a', why: 'Los subtítulos te dicen de qué trata cada bloque: así decides qué parte es pertinente.' },
              { q: 'Según la infografía, ¿qué efecto tiene la adrenalina?', options: [
                { id: 'a', text: 'Acelera el corazón y la respiración' },
                { id: 'b', text: 'Da sueño' },
                { id: 'c', text: 'Hace crecer los huesos' },
              ], correct: 'a' },
              { q: '¿Por qué esta infografía es un texto **ícono-verbal**?', options: [
                { id: 'a', text: 'Porque combina imágenes y palabras para comunicar' },
                { id: 'b', text: 'Porque solo tiene dibujos' },
                { id: 'c', text: 'Porque es un poema' },
              ], correct: 'a' },
            ] },
        ),
        S.match(
          { fase: 'construir', areas: ['l1'], cnb: ['l1:4.1.1'], ambito: 'conocer',
            prompt: 'Hay muchas formas de leer. Une cada **tipo de lectura** con su descripción.',
            explain: 'Elegir el tipo de lectura según tu propósito te hace leer mejor: selectiva para buscar un dato, reflexiva para comprender a fondo.' },
          { leftTitle: 'Tipo de lectura', rightTitle: 'Cómo es', pairs: [
            { id: 'sel', left: 'Selectiva', leftIcon: 'Search', right: 'Buscas solo el dato que necesitas' },
            { id: 'sil', left: 'Silenciosa', leftIcon: 'VolumeX', right: 'Lees con la vista, sin pronunciar' },
            { id: 'cor', left: 'Coral', leftIcon: 'Users', right: 'Un grupo lee en voz alta al mismo tiempo' },
            { id: 'dra', left: 'Dramatizada', leftIcon: 'Mic', right: 'Cada quien da voz a un personaje' },
            { id: 'ref', left: 'Reflexiva', leftIcon: 'Brain', right: 'Lees despacio y te detienes a pensar' },
          ] },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'cnt'], cnb: ['ef:1.3.7', 'cnt:2.3.3'], ambito: 'hacer',
            prompt: '**Carrera de relevos.** Quien recibe corre hacia adelante con el brazo extendido **hacia atrás, a la altura de la cadera**, palma abierta y sin voltear. Quien entrega pone la estafeta (un tubo de cartón) **en la mano, por delante**, y dice "¡ya!". Practica 4 entregas con un compañero o familiar y mide tu pulso: ¿notas la adrenalina?' },
          { seconds: 15, rounds: [
            { label: 'En reposo, antes de la carrera' },
            { label: 'Después de 4 relevos cortos', exercise: { name: 'Relevos con entrega de estafeta', icon: 'Timer', seconds: 45 } },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l2', 'cnt'], cnb: ['l2:1.2.5'], ambito: 'conocer',
            prompt: 'En la radio escuchas: _"La adrenalina nos prepara para reaccionar ante un peligro."_ ¿Con qué **evento de tu vida cotidiana** se relaciona mejor?',
            explain: 'Relacionar lo que escuchas con tu vida te ayuda a comprenderlo y recordarlo.' },
          { options: [
            { id: 'a', text: 'Cuando un perro me ladró de repente y mi corazón se aceleró', icon: 'Dog' },
            { id: 'b', text: 'Cuando dormí la siesta después de almorzar', icon: 'Moon', feedback: 'Al dormir el cuerpo está en calma; la adrenalina actúa ante un reto o un susto.' },
            { id: 'c', text: 'Cuando crecí 5 cm en un año', icon: 'Ruler', feedback: 'El crecimiento se relaciona con la hormona del crecimiento, no con la adrenalina.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['cnt', 'ef'], cnb: ['cnt:2.3.3', 'ef:1.3.7'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'Las hormonas viajan por la sangre.', answer: true },
            { text: 'La insulina la produce la tiroides.', answer: false, why: 'La insulina la produce el páncreas.' },
            { text: 'La hipófisis produce la hormona del crecimiento.', answer: true },
            { text: 'En el relevo, se recibe la estafeta con el brazo hacia adelante, mirando hacia atrás.', answer: false, why: 'Se recibe con el brazo extendido hacia atrás, a la altura de la cadera, mirando hacia adelante.' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.1.1', 'l1:4.2.4'], prompt: 'Buscas en tu libro **qué produce el páncreas**. Solo tienes un minuto. ¿Qué haces?' },
          { options: [
            { id: 'a', text: 'Lectura selectiva: busco el subtítulo "Páncreas" y leo esa parte', icon: 'Search' },
            { id: 'b', text: 'Lectura coral de todo el capítulo con mi grupo', icon: 'Users', feedback: 'La lectura coral es para leer juntos en voz alta, no para buscar rápido un dato.' },
            { id: 'c', text: 'Leo todo el libro desde la primera página', icon: 'Book', feedback: 'Con un propósito tan concreto, conviene usar los subtítulos para ir directo al dato.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['cnt', 'l1'], cnb: ['cnt:2.3.3'] }, ['Explico qué hacen algunas glándulas y hormonas', 'Uso subtítulos para buscar información', 'Recibo la estafeta con la técnica correcta'],
          ['Respiraré despacio cuando sienta nervios', 'Usaré la lectura selectiva para mis tareas', 'Practicaré relevos con mis amigos']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's13-d2-crecer-con-cuidado',
      title: 'Crecer con cuidado',
      icon: 'HeartHandshake',
      minutes: 14,
      day: 2,
      gancho: 'Todas las personas empezamos la vida como una sola célula. ¿Cómo es posible?',
      objetivos: ['Describir la estructura del aparato reproductor femenino', 'Explicar cómo ocurre la fecundación', 'Reconocer el pudor, el respeto a la intimidad y la maternidad y paternidad responsables', 'Participar con respeto en una mesa redonda'],
      resumen: [
        'El aparato reproductor femenino está formado por ovarios (producen óvulos y hormonas), trompas de Falopio (conducen el óvulo), útero (donde se desarrolla el bebé durante el embarazo) y vagina (conducto que comunica el útero con el exterior).',
        'La fecundación es la unión de la célula sexual masculina (espermatozoide) con la célula sexual femenina (óvulo); ocurre en la trompa de Falopio y forma la primera célula de un nuevo ser.',
        'El pudor es cuidar y respetar la intimidad propia y la de las demás personas. Nadie debe tocar tu cuerpo sin tu permiso, y siempre puedes pedir ayuda a una persona adulta de confianza.',
        'La maternidad y la paternidad responsables significan tener hijos cuando se tiene la madurez, la salud y las condiciones para cuidarlos, y compartir esa responsabilidad.',
      ],
      media: {
        id: 's13-d2-aparato-femenino', kind: 'diagram', title: 'Aparato reproductor femenino', aspect: '4:3',
        alt: 'Diagrama esquemático de frente del aparato reproductor femenino interno con ovarios, trompas de Falopio, útero y vagina rotulados.',
        brief: 'Diagrama científico esquemático, como en libros de texto de primaria: vista frontal de los órganos internos únicamente (sin silueta de cuerpo, sin genitales externos, sin desnudez). Colores suaves diferenciados: ovarios (morado), trompas de Falopio (rosado), útero (rosado más oscuro), vagina (lila). Líneas guía a etiquetas grandes con una función breve: "produce óvulos", "conduce el óvulo", "aquí crece el bebé", "comunica con el exterior". Fondo blanco.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'fc'], cnb: ['cnt:3.3.2'], ambito: 'ser', title: 'Hablar de nuestro cuerpo con respeto',
            prompt: 'Hoy estudiaremos cómo se forma una nueva vida. Es un tema **científico** y también **íntimo**: lo trataremos con respeto. Toca cada tarjeta.' },
          { icon: 'HeartHandshake', body: 'Conocer tu cuerpo te ayuda a cuidarlo. Si tienes dudas, conversa con tu familia, tu docente o personal de salud.', reveal: [
            { icon: 'BookOpen', front: 'Usamos nombres científicos', back: 'Decir "ovario" o "útero" es tan normal como decir "pulmón". No hay razón para burlarse.' },
            { icon: 'Lock', front: 'Pudor e intimidad', back: 'El **pudor** es cuidar tu intimidad y respetar la de los demás: no mirar, tocar ni compartir imágenes del cuerpo de otra persona.' },
            { icon: 'ShieldCheck', front: 'Mi cuerpo es mío', back: 'Nadie debe tocar tu cuerpo sin tu permiso. Si algo te incomoda, di **"no"**, aléjate y **cuéntalo** a una persona adulta de confianza.' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.1.2'], ambito: 'conocer', title: 'El aparato reproductor femenino',
            prompt: 'Observa el diagrama de arriba y toca cada órgano para conocer su función.' },
          { icon: 'Microscope', body: 'Sus órganos principales están dentro del abdomen, en la parte baja (pelvis). Empiezan a funcionar en la **pubertad**, gracias a las hormonas.', reveal: [
            { icon: 'CircleDot', front: 'Ovarios', back: 'Son dos. Producen los **óvulos** (células sexuales femeninas) y las hormonas **estrógenos** y **progesterona**.' },
            { icon: 'Route', front: 'Trompas de Falopio', back: 'Dos conductos que llevan el óvulo del ovario al útero. Aquí puede ocurrir la **fecundación**.' },
            { icon: 'Home', front: 'Útero', back: 'Órgano musculoso y hueco donde **se desarrolla el bebé** durante el embarazo.' },
            { icon: 'Link', front: 'Vagina', back: 'Conducto que **comunica el útero con el exterior**. Por ella sale el bebé en el parto natural.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.1.2'], ambito: 'conocer',
            prompt: 'Une cada órgano del aparato reproductor femenino con su función.',
            explain: 'Cada órgano cumple una función distinta, y todos trabajan juntos.' },
          { leftTitle: 'Órgano', rightTitle: 'Función', pairs: [
            { id: 'ova', left: 'Ovarios', leftIcon: 'CircleDot', right: 'Producen óvulos y hormonas' },
            { id: 'tro', left: 'Trompas de Falopio', leftIcon: 'Route', right: 'Conducen el óvulo hacia el útero' },
            { id: 'ute', left: 'Útero', leftIcon: 'Home', right: 'Aloja al bebé durante el embarazo' },
            { id: 'vag', left: 'Vagina', leftIcon: 'Link', right: 'Comunica el útero con el exterior' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.2.2'], ambito: 'conocer',
            prompt: 'Ordena los pasos de la **fecundación** y el inicio del embarazo.',
            hint: 'Primero se libera el óvulo; al final, la nueva célula llega al útero.',
            explain: 'De la unión de dos células sexuales (una de la madre y otra del padre) se forma una sola célula con la información genética de ambos. Esa célula se divide muchas veces hasta formar un bebé, en unos nueve meses.',
            media: { id: 's13-d2-fecundacion', kind: 'animation', title: 'La primera célula', aspect: '16:9', duration: 45,
              alt: 'Animación microscópica: un óvulo avanza por la trompa, un espermatozoide lo alcanza y se une a él; la nueva célula se divide y llega al útero.',
              brief: 'Animación 2D de 45 s a nivel celular, estilo científico y sencillo (sin cuerpos ni órganos externos): (1) óvulo redondo grande sale del ovario hacia la trompa; (2) varios espermatozoides pequeños nadan; uno entra al óvulo (destello suave); rótulo "fecundación"; (3) la nueva célula se divide en 2, 4, 8 células mientras viaja; (4) se implanta en la pared del útero; rótulo "inicio del embarazo". Narración en español, tono tranquilo y respetuoso, con subtítulos.' } },
          { items: [
            { id: 'f1', text: 'El ovario libera un óvulo' },
            { id: 'f2', text: 'El óvulo viaja por la trompa de Falopio' },
            { id: 'f3', text: 'Un espermatozoide se une al óvulo: fecundación' },
            { id: 'f4', text: 'La nueva célula se divide muchas veces' },
            { id: 'f5', text: 'Llega al útero, donde se desarrolla durante unos nueve meses' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['cnt', 'fc', 'l2'], cnb: ['cnt:3.3.2'], ambito: 'ser',
            prompt: 'Clasifica cada acción: ¿muestra **respeto y responsabilidad** con la sexualidad o **no**?',
            explain: 'El pudor y el respeto protegen la dignidad de todas las personas. La maternidad y la paternidad responsables se preparan con madurez, estudio y diálogo con la familia.' },
          { buckets: [
            { id: 'si', label: 'Respeto y responsabilidad', icon: 'ShieldCheck', color: 'var(--c-ok)' },
            { id: 'no', label: 'Falta de respeto', icon: 'X', color: 'var(--c-hint)' },
          ], items: [
            { id: 'r1', text: 'Tocar la puerta antes de entrar al baño o a un cuarto', bucket: 'si' },
            { id: 'r2', text: 'Compartir la foto de un compañero cambiándose de ropa', bucket: 'no', feedback: 'Compartir imágenes íntimas de otra persona viola su intimidad y puede ser un delito.' },
            { id: 'r3', text: 'Preguntar dudas a mamá, papá o personal de salud', bucket: 'si' },
            { id: 'r4', text: 'Burlarse de una compañera porque su cuerpo está cambiando', bucket: 'no' },
            { id: 'r5', text: 'Pensar que tener hijos requiere madurez, salud y condiciones para cuidarlos', bucket: 'si' },
            { id: 'r6', text: 'Decir que cuidar a un bebé es solo tarea de la madre', bucket: 'no', feedback: 'La crianza es responsabilidad compartida de madre y padre.' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'cnt', 'l2'], cnb: ['cnt:3.3.2', 'l2:1.2.1'], ambito: 'convivir', prompt: 'Durante una **mesa redonda** sobre la pubertad, ¿qué harías?' },
          { scene: { icon: 'MessagesSquare', text: 'En la mesa redonda, **Marta** comparte con valentía que tuvo su primera menstruación y que al principio le dio miedo. Dos compañeros se ríen y hacen bromas.' }, options: [
            { id: 'a', icon: 'EyeOff', text: 'Reírme también para no quedar mal', consequence: 'Marta se siente avergonzada y decide no volver a participar. Otros aprenden que es mejor callar sus dudas.', values: ['Falta de empatía'], constructive: false },
            { id: 'b', icon: 'HeartHandshake', text: 'Decir: "La menstruación es algo natural. Gracias, Marta, por contarlo"', consequence: 'Las risas paran. Marta se siente apoyada y otras compañeras se animan a preguntar.', values: ['Respeto', 'Empatía', 'Valentía'], constructive: true },
            { id: 'c', icon: 'Megaphone', text: 'Pedir a la moderadora que recuerde las reglas de respeto', consequence: 'La moderadora recuerda que en la mesa redonda se escucha sin burlas. El diálogo continúa con más confianza.', values: ['Responsabilidad', 'Respeto'], constructive: true },
          ] },
        ),
        S.fill(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.1.2', 'cnt:3.2.2'], prompt: 'Completa con los órganos correctos.' },
          { text: 'Los [[ovarios]] producen los óvulos. La fecundación ocurre en la [[trompa de Falopio]], cuando un [[espermatozoide]] se une al óvulo. El bebé se desarrolla en el [[útero]].',
            distractors: ['estómago', 'pulmón', 'riñón'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt', 'fc'], cnb: ['cnt:3.3.2'], prompt: '¿Qué significa **maternidad y paternidad responsables**?' },
          { options: [
            { id: 'a', text: 'Tener hijos con madurez, salud y condiciones para cuidarlos, compartiendo la responsabilidad', icon: 'HeartHandshake' },
            { id: 'b', text: 'Tener hijos lo antes posible, sin pensar en las condiciones', icon: 'Clock', feedback: 'Un embarazo en la adolescencia tiene más riesgos para la salud y puede limitar los estudios.' },
            { id: 'c', text: 'Que solo la mamá se ocupe de criar', icon: 'User', feedback: 'La responsabilidad es de ambos: madre y padre.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['cnt', 'fc'], cnb: ['cnt:3.3.2'] }, ['Nombro los órganos del aparato reproductor femenino y su función', 'Explico qué es la fecundación', 'Hablo de la sexualidad con respeto'],
          ['Conversaré mis dudas con una persona adulta de confianza', 'Respetaré la intimidad de mis compañeras y compañeros', 'No me reiré de los cambios del cuerpo de nadie']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's13-d3-trabajo-infantil',
      title: 'Estudiar, jugar y soñar: trabajo y comercio',
      icon: 'Backpack',
      minutes: 15,
      day: 3,
      gancho: 'En el mercado, ¿has visto a niños de tu edad vendiendo en lugar de estar en la escuela? ¿Qué oportunidades pierden?',
      objetivos: ['Describir actividades productivas y comerciales de los continentes', 'Estimar resultados y usar estrategias de cálculo mental', 'Explicar qué es el trabajo infantil y cómo limita el desarrollo', 'Investigar un problema social y proponer soluciones'],
      resumen: [
        'Cada continente tiene actividades productivas y comerciales propias: café y soya en América, cacao y minería en África, fabricación de aparatos electrónicos en Asia, industria y turismo en Europa, lana y ganado en Oceanía.',
        'Estimar es calcular un resultado aproximado redondeando; el cálculo mental usa estrategias como redondear y compensar, descomponer o sacar mitades y dobles.',
        'El trabajo infantil es el que priva a niñas y niños de estudiar, jugar o descansar, o pone en riesgo su salud. Según la OIT, en 2020 había aproximadamente 160 millones de niños y niñas en trabajo infantil en el mundo.',
        'Ayudar en casa con tareas adecuadas a tu edad, sin dejar la escuela, no es trabajo infantil.',
        'Para investigar un problema social: define la pregunta, recoge datos, analiza causas y efectos, y propone alternativas.',
      ],
      media: {
        id: 's13-d3-mercado', kind: 'image', title: 'El mercado y el mundo', aspect: '16:9',
        alt: 'Mercado guatemalteco con puestos de café, verduras y ropa, y globos de texto que muestran de qué continente llegan algunos productos.',
        brief: 'Ilustración colorida de un mercado municipal de Guatemala: puestos de café y verduras (América), un puesto de aparatos electrónicos (globo con "Asia"), uno de chocolates (globo "África: cacao"), uno de ropa de lana (globo "Oceanía"). En primer plano, una niña con mochila camino a la escuela junto a su mamá vendedora. Ningún niño trabajando en situación de riesgo. Sin marcas comerciales.',
      },
      steps: [
        S.match(
          { fase: 'explorar', areas: ['ccss', 'pyd'], cnb: ['ccss:3.4.2'], ambito: 'conocer',
            prompt: 'Muchos productos del mercado vienen de otros continentes. Une cada continente con una **actividad productiva o comercial** característica.',
            explain: 'Los continentes comercian entre sí: Guatemala vende café, banano y cardamomo, y compra aparatos, vehículos y combustibles.' },
          { leftTitle: 'Continente', rightTitle: 'Actividad', pairs: [
            { id: 'ame', left: 'América', leftIcon: 'Earth', right: 'Cultivo y exportación de café, banano y soya' },
            { id: 'afr', left: 'África', leftIcon: 'Sun', right: 'Producción de cacao y minería' },
            { id: 'asi', left: 'Asia', leftIcon: 'Cpu', right: 'Fabricación de aparatos electrónicos' },
            { id: 'eur', left: 'Europa', leftIcon: 'Castle', right: 'Industria de vehículos y turismo' },
            { id: 'oce', left: 'Oceanía', leftIcon: 'Shell', right: 'Crianza de ovejas para lana y ganado' },
          ] },
        ),
        S.slider(
          { fase: 'construir', areas: ['mat', 'pyd'], cnb: ['mat:4.2.1'], ambito: 'hacer',
            prompt: 'Doña Irma compra en el mercado: café **Q48**, frijol **Q31** y queso **Q19**. **Estima** el total redondeando cada precio a la decena más cercana.',
            hint: '48 → 50, 31 → 30, 19 → 20.',
            explain: '50 + 30 + 20 = 100. El total exacto es Q98: la estimación está muy cerca y se calcula rápido.' },
          { min: 0, max: 200, step: 10, answer: 100, start: 0, unit: 'Q', visual: 'line',
            ticks: [{ value: 0, label: 'Q0' }, { value: 100, label: 'Q100' }, { value: 200, label: 'Q200' }] },
        ),
        S.explain(
          { fase: 'construir', areas: ['mat'], cnb: ['mat:4.2.2'], ambito: 'conocer', title: 'Trucos de cálculo mental',
            prompt: 'En el mercado se calcula rápido **de cabeza**. Toca cada estrategia.' },
          { icon: 'Brain', body: 'Hay varias formas de llegar al mismo resultado. Elige la que te resulte más fácil.', reveal: [
            { icon: 'RefreshCw', front: 'Redondear y compensar', back: '199 + 57 → 200 + 57 = 257, y le quitas 1 → **256**.' },
            { icon: 'Blocks', front: 'Descomponer', back: '36 × 5 → 30 × 5 = 150 y 6 × 5 = 30 → **180**.' },
            { icon: 'Copy', front: 'Mitad y doble', back: '25 × 16 → 50 × 8 → 100 × 4 = **400**.' },
            { icon: 'Target', front: 'Estimar', back: '398 ÷ 4 → 400 ÷ 4 ≈ **100**. Sirve para saber si un resultado es razonable.' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'pyd'], cnb: ['mat:4.2.2'], ambito: 'hacer',
            prompt: 'Un comerciante vende **25 bolsas** de pan a **Q12** cada una. Calcula **mentalmente** cuánto recibe.',
            hint: 'Mitad y doble: 25 × 12 = 50 × 6.',
            explain: '25 × 12 = 50 × 6 = 300. También: 25 × 4 = 100, y 12 = 3 × 4, así que 100 × 3 = 300.' },
          { answer: 300, unit: 'quetzales', misconceptions: [{ value: 37, msg: 'Sumaste 25 + 12; aquí hay que multiplicar.' }] },
        ),
        S.reading(
          { fase: 'construir', areas: ['ccss', 'fc', 'l1'], cnb: ['ccss:4.1.6', 'ccss:4.1.7', 'ccss:4.1.2'], ambito: 'conocer', prompt: 'Lee el texto y responde.' },
          { genre: 'Texto informativo', heading: 'El trabajo infantil: una deuda con la niñez', passage:
            'El **trabajo infantil** es el que realizan niñas y niños por debajo de la edad permitida, o que les impide estudiar, jugar y descansar, o que pone en riesgo su salud y su seguridad. Según la Organización Internacional del Trabajo (**OIT**), en 2020 había aproximadamente **160 millones** de niñas y niños en trabajo infantil en el mundo, sobre todo en la agricultura.\n\nEn Guatemala también ocurre: en el campo, en mercados, en talleres y en casas particulares. Muchas veces sucede donde las familias tienen pocos ingresos, no hay escuela cerca o los caminos son difíciles. Así, **el lugar donde vivimos y sus condiciones** influyen en las oportunidades de cada niño.\n\nQuien trabaja de niño suele dejar la escuela o aprende menos. De adulto tendrá menos opciones de empleo y salario, y la pobreza puede pasar a la siguiente generación. Por eso la Convención sobre los Derechos del Niño y la ley guatemalteca de Protección Integral de la Niñez y Adolescencia protegen el derecho a la **educación**, al **juego** y a la **salud**.\n\nAyudar en casa con tareas **adecuadas a la edad**, sin dejar de estudiar ni descansar, no es trabajo infantil: es colaborar con la familia.',
            questions: [
              { q: '¿Cuál es la idea principal del texto?', options: [
                { id: 'a', text: 'El trabajo infantil quita oportunidades de desarrollo y hay leyes que protegen a la niñez' },
                { id: 'b', text: 'Todos los niños deben trabajar para ayudar' },
                { id: 'c', text: 'La agricultura es mala' },
              ], correct: 'a' },
              { q: '¿Cómo afecta el trabajo infantil al futuro de una persona?', options: [
                { id: 'a', text: 'Tendrá menos opciones de empleo y salario si deja la escuela' },
                { id: 'b', text: 'Tendrá más tiempo para estudiar' },
                { id: 'c', text: 'No le afecta en nada' },
              ], correct: 'a', why: 'Dejar la escuela limita las oportunidades y puede mantener la pobreza en la siguiente generación.' },
              { q: '¿Qué condición del lugar donde se vive aumenta el riesgo de trabajo infantil?', options: [
                { id: 'a', text: 'Que no haya escuela cercana y las familias tengan pocos ingresos' },
                { id: 'b', text: 'Que haya una biblioteca' },
                { id: 'c', text: 'Que haya un parque' },
              ], correct: 'a' },
            ] },
        ),
        S.chart(
          { fase: 'aplicar', areas: ['pyd', 'mat', 'ccss'], cnb: ['pyd:2.1.1'], ambito: 'emprender',
            prompt: '**Supongamos** que tu grado investigó por qué 20 jóvenes de la comunidad dejaron la escuela. Grafica los resultados de la encuesta (datos inventados para practicar).',
            hint: 'Cada barra sube de 1 en 1. Revisa que el total sea 20.',
            explain: 'Graficar ayuda a ver la causa principal. Con ella se proponen alternativas: becas, transporte escolar, horarios flexibles o apoyo a las familias.' },
          { source: 'Encuesta hipotética: motivos para dejar la escuela (20 respuestas) · Trabajar para ayudar a la familia 9 · Escuela lejana 5 · Falta de dinero para útiles 4 · Otro 2',
            unit: 'jóvenes', max: 10, step: 1,
            categories: [
              { id: 'tra', label: 'Trabajar', icon: 'Briefcase', color: 'var(--area-pyd)' },
              { id: 'lej', label: 'Escuela lejana', icon: 'Route', color: 'var(--area-ccss)' },
              { id: 'uti', label: 'Útiles', icon: 'Backpack', color: 'var(--area-mat)' },
              { id: 'otr', label: 'Otro', icon: 'Circle', color: 'var(--area-l1)' },
            ],
            data: [9, 5, 4, 2] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['pyd', 'fc', 'l1'], cnb: ['pyd:2.1.1', 'ccss:4.1.7'], ambito: 'emprender',
            prompt: 'Con base en la gráfica, escribe **un efecto** del problema y **una alternativa de solución** que tu comunidad o tu escuela podría poner en marcha.' },
          { model: 'Un efecto es que muchos jóvenes pierden la oportunidad de estudiar y después consiguen trabajos con salarios bajos. Una alternativa es que la municipalidad y la escuela organicen becas y un programa de útiles escolares, y que las familias reciban apoyo para que sus hijos no tengan que trabajar.',
            rubric: ['Menciona un efecto del problema', 'Propone una alternativa concreta', 'Dice quién podría realizarla', 'Defiende el derecho a estudiar'],
            minWords: 25, placeholder: 'Un efecto es… Una alternativa es…' },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.1', 'mat:4.2.2'], prompt: 'Calcula mentalmente con la estrategia de **redondear y compensar**: 299 + 146 =' },
          { answer: 445, misconceptions: [{ value: 446, msg: 'Sumaste 300 + 146, pero olvidaste quitar el 1 que agregaste.' }, { value: 444, msg: 'Al compensar, se quita 1 (no 2).' }] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ccss', 'fc'], cnb: ['ccss:4.1.6', 'ccss:4.1.7', 'ccss:3.4.2'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'El trabajo infantil puede impedir que una niña o un niño termine la escuela.', answer: true },
            { text: 'Ayudar a poner la mesa en casa, sin dejar de estudiar, es trabajo infantil.', answer: false, why: 'Las tareas adecuadas a la edad que no impiden estudiar ni descansar son colaboración familiar.' },
            { text: 'Buena parte del cacao del mundo se produce en África.', answer: true },
            { text: 'El trabajo infantil solo existe en Guatemala.', answer: false, why: 'Ocurre en muchos países; la OIT calculó unos 160 millones de casos en el mundo en 2020.' },
          ] },
        ),
        cierre({ areas: ['ccss', 'pyd'], cnb: ['ccss:4.1.7'] }, ['Explico por qué el trabajo infantil limita el desarrollo', 'Estimo y calculo mentalmente', 'Propongo soluciones a un problema social'],
          ['Usaré el cálculo mental cuando acompañe a mi familia al mercado', 'Conversaré en casa sobre la importancia de terminar la escuela', 'Investigaré un problema de mi comunidad con una encuesta sencilla']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's13-d4-voces-diversas',
      title: 'Voces diversas, sin fanatismo',
      icon: 'MessagesSquare',
      minutes: 15,
      day: 4,
      gancho: '¿Te ha pasado que alguien defiende su equipo, su idea o su religión y no deja hablar a nadie más?',
      objetivos: ['Describir aportes de mujeres de distintas culturas de América', 'Identificar consecuencias del fanatismo político, religioso y cultural', 'Aportar información coherente en un debate', 'Opinar en inglés sobre un texto leído', 'Moverte en forma coordinada siguiendo ritmos grabados'],
      resumen: [
        'Mujeres de toda América han hecho grandes aportes: Rigoberta Menchú (Premio Nobel de la Paz 1992), Gabriela Mistral (Premio Nobel de Literatura 1945), Sor Juana Inés de la Cruz (defendió el derecho de las mujeres a estudiar) y María Chinchilla (maestra guatemalteca recordada el Día del Maestro).',
        'El fanatismo es defender una idea de forma ciega, sin aceptar otras opiniones; provoca intolerancia, discriminación, divisiones y hasta violencia.',
        'En un debate o mesa redonda se aportan datos coherentes con el tema, se escucha y se respeta el turno.',
        'In English, we give opinions with "I think…", "In my opinion…" or "I like… because…".',
        'Una colección de música grabada permite a la escuela conservar y compartir su repertorio.',
      ],
      media: {
        id: 's13-d4-mujeres', kind: 'image', title: 'Mujeres que transformaron América', aspect: '16:9',
        alt: 'Cuatro ilustraciones simbólicas: una paloma de la paz con un tejido, un libro de poemas, una pluma antigua y una pizarra escolar.',
        brief: 'Ilustración en 4 paneles SIN retratos de personas reales (usar objetos simbólicos para respetar la norma de no mostrar personas identificables): (1) paloma de la paz sobre un tejido guatemalteco – "Rigoberta Menchú, Guatemala, Nobel de la Paz 1992"; (2) libro abierto con versos y montañas de los Andes – "Gabriela Mistral, Chile, Nobel de Literatura 1945"; (3) pluma y tintero junto a libros antiguos – "Sor Juana Inés de la Cruz, México, siglo XVII"; (4) pizarra con la fecha 25 de junio – "María Chinchilla, maestra, Guatemala". Paleta cálida.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'fc', 'l1'], cnb: ['ccss:4.2.3'], ambito: 'conocer', title: 'Mujeres que transforman',
            prompt: 'En todas las culturas de América, las mujeres han aportado a la ciencia, el arte, la educación y la paz, aunque muchas veces no se les reconoció. Toca cada tarjeta.' },
          { icon: 'Award', body: 'Además de estas mujeres famosas, hay miles de **abuelas, madres, tejedoras, comadronas, maestras y agricultoras** que sostienen la vida y la cultura de sus comunidades.', reveal: [
            { icon: 'Feather', front: 'Rigoberta Menchú Tum', back: 'Mujer maya k\'iche\' de Guatemala. Recibió el **Premio Nobel de la Paz** en 1992 por defender los derechos de los pueblos indígenas.' },
            { icon: 'BookOpen', front: 'Gabriela Mistral', back: 'Poeta y maestra de **Chile**. Primera persona de América Latina en recibir el **Nobel de Literatura** (1945).' },
            { icon: 'PenLine', front: 'Sor Juana Inés de la Cruz', back: 'Escritora de **México** en el siglo XVII. Defendió el derecho de las mujeres a **estudiar**.' },
            { icon: 'School', front: 'María Chinchilla', back: 'Maestra **guatemalteca**. Murió en 1944 durante una manifestación pacífica; el **25 de junio**, Día del Maestro, se le recuerda.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:4.2.3'], ambito: 'conocer',
            prompt: 'Une cada mujer con su aporte.',
            explain: 'Reconocer los aportes de las mujeres es parte de practicar la equidad en la escuela y en la comunidad.' },
          { leftTitle: 'Mujer', rightTitle: 'Aporte', pairs: [
            { id: 'rig', left: 'Rigoberta Menchú', leftIcon: 'Feather', right: 'Defensa de los derechos de los pueblos indígenas' },
            { id: 'gab', left: 'Gabriela Mistral', leftIcon: 'BookOpen', right: 'Poesía y educación en Chile' },
            { id: 'sor', left: 'Sor Juana Inés de la Cruz', leftIcon: 'PenLine', right: 'Derecho de las mujeres a estudiar' },
            { id: 'teje', left: 'Tejedoras mayas', leftIcon: 'Palette', right: 'Conservan diseños y saberes de generación en generación' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['l3', 'art'], cnb: ['l3:3.1.4'], ambito: 'conocer',
            prompt: 'English reading! Read the text about Maya weavers and answer. (_weave_ = tejer, _backstrap loom_ = telar de cintura, _design_ = diseño)' },
          { genre: 'Informative text', heading: 'The Weavers of Guatemala', passage:
            'Weaving is an important tradition in Guatemala. Many Maya women weave huipiles on a **backstrap loom**. Mothers and grandmothers teach their daughters how to weave.\n\nMany designs have a meaning. Some designs show animals, plants or mountains.\n\nToday, some weavers work in cooperatives. They sell their textiles and protect their designs. **I think** their work is amazing because it keeps their culture alive.',
            questions: [
              { q: 'What do many Maya women weave?', options: [
                { id: 'a', text: 'Huipiles' },
                { id: 'b', text: 'Shoes' },
                { id: 'c', text: 'Computers' },
              ], correct: 'a' },
              { q: 'Which sentence is an **opinion**?', options: [
                { id: 'a', text: '"I think their work is amazing."' },
                { id: 'b', text: '"Some designs show animals."' },
                { id: 'c', text: '"They sell their textiles."' },
              ], correct: 'a', why: '"I think…" introduces an opinion: what the writer believes.' },
              { q: 'Which opinion is **respectful and based on the text**?', options: [
                { id: 'a', text: 'In my opinion, cooperatives help weavers because they protect their designs.' },
                { id: 'b', text: 'I think weaving is boring for everybody.' },
                { id: 'c', text: 'Weaving is only for old people.' },
              ], correct: 'a', why: 'A good opinion uses information from the text and gives a reason with "because".' },
            ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'l2'], cnb: ['fc:2.3.2'], ambito: 'convivir',
            prompt: 'El **fanatismo** es defender una idea (política, religiosa, cultural o deportiva) de forma ciega, sin aceptar otras. ¿Qué harías en esta situación?' },
          { scene: { icon: 'Users', text: 'En la refacción, **Diego** dice que solo su religión es buena y que quienes piensan distinto "no deberían estar en la escuela". **Samuel**, que tiene otra fe, se queda callado y triste.' }, options: [
            { id: 'a', icon: 'Megaphone', text: 'Responderle con gritos que su religión es la peor', consequence: 'La discusión se vuelve pelea. Nadie cambia de opinión y el grupo se divide. El fanatismo se contagia.', values: ['Intolerancia'], constructive: false },
            { id: 'b', icon: 'HeartHandshake', text: 'Decir con calma: "Todos tenemos derecho a nuestras creencias; aquí cabemos todos"', consequence: 'Diego se queda pensando. Samuel se siente acompañado. El grupo sigue conversando con respeto.', values: ['Tolerancia', 'Respeto', 'Libertad de religión'], constructive: true },
            { id: 'c', icon: 'MessageCircle', text: 'Invitar a Samuel a contar qué celebra su familia, y a Diego a escuchar', consequence: 'Descubren que ambas familias valoran la solidaridad. Conocer al otro reduce el miedo y el prejuicio.', values: ['Diálogo', 'Interculturalidad'], constructive: true },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['l2', 'fc'], cnb: ['l2:1.2.3', 'l2:1.2.1', 'l2:1.2.5'], ambito: 'convivir',
            prompt: 'En una **mesa redonda** sobre "¿Cómo evitar el fanatismo en la escuela?", ¿qué intervenciones aportan información **coherente** con el tema?',
            explain: 'Aportar con coherencia es hablar del tema, dar razones o ejemplos de la vida cotidiana y respetar el turno. Las burlas y los temas ajenos rompen el diálogo.' },
          { buckets: [
            { id: 'coh', label: 'Aporte coherente', icon: 'Check', color: 'var(--c-ok)' },
            { id: 'nocoh', label: 'No aporta', icon: 'X', color: 'var(--c-hint)' },
          ], items: [
            { id: 'm1', text: '"Cuando mi vecino y mi papá discutieron por política, dejaron de hablarse. El fanatismo divide"', bucket: 'coh' },
            { id: 'm2', text: '"Propongo un día para conocer las costumbres de cada familia"', bucket: 'coh' },
            { id: 'm3', text: '"¿Vieron el partido de ayer? ¡Qué golazo!"', bucket: 'nocoh', feedback: 'Es un tema distinto: no aporta a la discusión.' },
            { id: 'm4', text: '"Tu idea es tonta"', bucket: 'nocoh', feedback: 'Descalificar a una persona no es un argumento.' },
            { id: 'm5', text: '"Escuchar razones de otros nos ayuda a no juzgar"', bucket: 'coh' },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['art', 'l1'], cnb: ['art:1.2.3'], ambito: 'convivir',
            prompt: 'Tu grado va a **recopilar un repertorio grabado** de canciones de la comunidad para la escuela. Ordena los pasos.',
            explain: 'Grabar y escuchar permite analizar y valorar la música. Pedir permiso y anotar los datos respeta a quienes la interpretan.',
            media: { id: 's13-d4-grabacion', kind: 'video', title: '¿Cómo grabar el repertorio de la escuela?', aspect: '9:16', duration: 45,
              alt: 'Tutorial vertical: un teléfono sobre un soporte graba a un grupo que toca marimba; luego se muestra una ficha con título, intérpretes y fecha.',
              brief: 'Video vertical de 45 s en formato tutorial con 5 pasos numerados en pantalla: (1) pedir permiso a los intérpretes; (2) buscar un lugar sin ruido; (3) colocar el teléfono firme a 1-2 m; (4) grabar una prueba y escucharla; (5) llenar una ficha: título, intérpretes, comunidad, fecha. Planos de manos y del instrumento (marimba o guitarra), sin rostros. Rótulos grandes.' } },
          { items: [
            { id: 'g1', text: 'Elegir canciones y pedir permiso a los intérpretes' },
            { id: 'g2', text: 'Buscar un lugar sin ruido' },
            { id: 'g3', text: 'Grabar una prueba y escucharla' },
            { id: 'g4', text: 'Grabar la canción completa' },
            { id: 'g5', text: 'Anotar título, intérpretes y fecha en la ficha del repertorio' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'art'], cnb: ['ef:1.4.6', 'ef:1.4.8', 'ef:1.4.13'], ambito: 'hacer',
            prompt: 'Pon una canción del repertorio grabado. Ronda 1: **ejercicios alternos** (toca rodilla derecha con mano izquierda y viceversa) siguiendo el ritmo, primero **lento** y luego **rápido**. Ronda 2: lanza una pelota de papel a un compañero **que camina** por el espacio: calcula hacia dónde va para que la reciba. Mide tu pulso.' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después de los ejercicios alternos con ritmo', exercise: { name: 'Mano-rodilla contraria, lento y rápido', icon: 'Music', seconds: 40 } },
            { label: 'Después de pases a un compañero en movimiento', exercise: { name: 'Pases a una trayectoria móvil', icon: 'Route', seconds: 40 } },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.3.2'], prompt: '¿Cuáles son **consecuencias** del fanatismo político, religioso o cultural? Elige **todas** las correctas.' },
          { multiple: true, options: [
            { id: 'a', text: 'Intolerancia y discriminación', icon: 'X' },
            { id: 'b', text: 'División de familias y comunidades', icon: 'Users' },
            { id: 'c', text: 'Violencia', icon: 'Flame' },
            { id: 'd', text: 'Más diálogo y respeto', icon: 'Handshake', feedback: 'El fanatismo impide el diálogo; el respeto es lo contrario.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ccss', 'l3', 'art'], cnb: ['ccss:4.2.3', 'l3:3.1.4', 'art:1.2.3'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'Rigoberta Menchú recibió el Premio Nobel de la Paz.', answer: true },
            { text: 'Sor Juana Inés de la Cruz se opuso a que las mujeres estudiaran.', answer: false, why: 'Al contrario: defendió su derecho a estudiar.' },
            { text: '"In my opinion…" is used to give an opinion in English.', answer: true },
            { text: 'Para grabar el repertorio no es necesario pedir permiso a quienes cantan.', answer: false, why: 'Siempre se pide permiso: es una forma de respeto.' },
          ] },
        ),
        cierre({ areas: ['fc', 'l2'], cnb: ['l2:1.2.1'] }, ['Reconozco aportes de mujeres de América', 'Explico las consecuencias del fanatismo', 'Aporto ideas coherentes en un debate'],
          ['Preguntaré a mi mamá o abuela qué saberes aprendió de otras mujeres', 'Respetaré las creencias y opiniones distintas a las mías', 'Ayudaré a grabar una canción de mi comunidad']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's13-d5-reto',
      title: 'Reto de la semana 13',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste sobre crecer con respeto', 'Obtener la medalla "Voz que respeta" (70 % o más)'],
      resumen: ['Superé el reto de la semana 13: hormonas, aparato reproductor, trabajo infantil, cálculo mental y diálogo sin fanatismo.'],
      media: {
        id: 's13-d5-reto', kind: 'image', title: 'Medalla Voz que respeta', aspect: '1:1',
        alt: 'Medalla dorada con dos globos de diálogo entrelazados y un corazón al centro.',
        brief: 'Medalla circular dorada con relieve de dos globos de diálogo de colores distintos que se entrelazan formando un corazón, rodeados de un borde de tejido guatemalteco. Cinta con los colores de las áreas del CNB. Estilo plano con brillo suave, fondo transparente, 1024×1024.',
      },
      steps: [
        S.match({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.3'], prompt: 'Une cada glándula con su hormona.' },
          { pairs: [{ id: 'h', left: 'Hipófisis', right: 'Hormona del crecimiento' }, { id: 'p', left: 'Páncreas', right: 'Insulina' }, { id: 's', left: 'Suprarrenales', right: 'Adrenalina' }] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.1.2'], prompt: '¿Qué órgano del aparato reproductor femenino produce los óvulos?' },
          { options: [{ id: 'a', text: 'Los ovarios' }, { id: 'b', text: 'El útero' }, { id: 'c', text: 'La vagina' }], correct: ['a'] }),
        S.order({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.2.2'], prompt: 'Ordena el proceso.' },
          { items: [{ id: 'a', text: 'Se libera el óvulo' }, { id: 'b', text: 'Un espermatozoide lo fecunda en la trompa' }, { id: 'c', text: 'La nueva célula se divide' }, { id: 'd', text: 'Se desarrolla en el útero' }] }),
        S.choice({ fase: 'comprobar', areas: ['cnt', 'fc'], cnb: ['cnt:3.3.2'], prompt: 'Un compañero quiere compartir en un grupo de chat una foto de otra persona cambiándose de ropa. ¿Qué es lo correcto?' },
          { options: [{ id: 'a', text: 'No compartirla, pedir que la borre y avisar a una persona adulta' }, { id: 'b', text: 'Compartirla porque es una broma' }, { id: 'c', text: 'Guardarla para después' }], correct: ['a'] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.2'], prompt: 'Calcula mentalmente: 25 × 24 =' },
          { answer: 600, misconceptions: [{ value: 49, msg: 'Sumaste; aquí hay que multiplicar.' }] }),
        S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.1'], prompt: '¿Cuál es la mejor **estimación** de 612 − 289?' },
          { options: [{ id: 'a', text: 'Aproximadamente 300' }, { id: 'b', text: 'Aproximadamente 900' }, { id: 'c', text: 'Aproximadamente 30' }], correct: ['a'] }),
        S.tf({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.1.6', 'ccss:4.1.7'], prompt: '¿Verdadero o falso?' },
          { statements: [{ text: 'El trabajo infantil reduce las oportunidades de estudiar.', answer: true }, { text: 'El trabajo infantil no ocurre en ningún país de América.', answer: false }, { text: 'La falta de escuelas cercanas puede aumentar el trabajo infantil.', answer: true }] }),
        S.match({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.1.1'], prompt: 'Une cada tipo de lectura con su uso.' },
          { pairs: [{ id: 's', left: 'Selectiva', right: 'Buscar un dato concreto' }, { id: 'c', left: 'Coral', right: 'Leer en grupo al mismo tiempo' }, { id: 'r', left: 'Reflexiva', right: 'Leer despacio para pensar' }] }),
        S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.3.2'], prompt: '¿Qué actitud ayuda a evitar el fanatismo?' },
          { options: [{ id: 'a', text: 'Escuchar y respetar opiniones distintas' }, { id: 'b', text: 'Creer que solo mi idea vale' }, { id: 'c', text: 'Burlarme de otras creencias' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.2.3'], prompt: '¿Qué mujer chilena fue la primera persona de América Latina en ganar el Nobel de Literatura?' },
          { options: [{ id: 'a', text: 'Gabriela Mistral' }, { id: 'b', text: 'Rigoberta Menchú' }, { id: 'c', text: 'María Chinchilla' }], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 2 */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.3'], prompt: '¿Qué hormona regula el azúcar en la sangre?' },
      { options: [{ id: 'a', text: 'Insulina' }, { id: 'b', text: 'Adrenalina' }, { id: 'c', text: 'Testosterona' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.1.2', 'cnt:3.2.2'], prompt: '¿Dónde ocurre normalmente la fecundación?' },
      { options: [{ id: 'a', text: 'En la trompa de Falopio' }, { id: 'b', text: 'En el estómago' }, { id: 'c', text: 'En el ovario' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.4.2'], prompt: '¿Qué continente destaca por fabricar aparatos electrónicos?' },
      { options: [{ id: 'a', text: 'Asia' }, { id: 'b', text: 'Oceanía' }, { id: 'c', text: 'Antártida' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.1.2', 'ccss:4.1.7'], prompt: 'Una comunidad no tiene escuela cerca y los caminos son difíciles. ¿Cómo afecta esto a la niñez?' },
      { options: [{ id: 'a', text: 'Reduce sus oportunidades de estudiar' }, { id: 'b', text: 'Aumenta sus oportunidades' }, { id: 'c', text: 'No afecta' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.2'], prompt: 'Calcula mentalmente con "descomponer": 42 × 5 =' },
      { answer: 210 }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.1'], prompt: 'Compras 3 cosas de Q29, Q41 y Q19. ¿Cuál es la mejor estimación del total?' },
      { options: [{ id: 'a', text: 'Unos Q90' }, { id: 'b', text: 'Unos Q60' }, { id: 'c', text: 'Unos Q150' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.2.4', 'l1:4.1.2'], prompt: 'Buscas cómo se cuida el agua. ¿Qué subtítulo de un libro es **pertinente**?' },
      { options: [{ id: 'a', text: '"Formas de ahorrar agua en casa"' }, { id: 'b', text: '"Historia del fútbol"' }, { id: 'c', text: '"Recetas de postres"' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.3.2'], prompt: '¿Cuál es un texto **ícono-verbal**?' },
      { options: [{ id: 'a', text: 'Un cartel con imágenes y frases sobre el lavado de manos' }, { id: 'b', text: 'Una novela sin ilustraciones' }, { id: 'c', text: 'Una canción escuchada en la radio' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.1.4'], prompt: 'Which sentence is an opinion?' },
      { options: [{ id: 'a', text: 'I think the huipil is beautiful because of its colors.' }, { id: 'b', text: 'The huipil is made on a loom.' }, { id: 'c', text: 'Weavers sell textiles.' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.3.7'], prompt: 'En una carrera de relevos, ¿cómo se recibe la estafeta?' },
      { options: [{ id: 'a', text: 'Con el brazo extendido hacia atrás, a la altura de la cadera' }, { id: 'b', text: 'Parado y de frente a quien la entrega' }, { id: 'c', text: 'Con los ojos cerrados' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.3.2'], prompt: '¿Qué es el fanatismo?' },
      { options: [{ id: 'a', text: 'Defender una idea de forma ciega sin aceptar otras' }, { id: 'b', text: 'Escuchar con respeto' }, { id: 'c', text: 'Cambiar de opinión con buenas razones' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.1.1'], prompt: '¿Cuál es el primer paso para investigar un problema social de tu comunidad?' },
      { options: [{ id: 'a', text: 'Definir la pregunta o el problema a investigar' }, { id: 'b', text: 'Escribir la conclusión' }, { id: 'c', text: 'Ignorar los datos' }], correct: ['a'] }),
  ],
});
