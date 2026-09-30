import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 17 · Unidad 2 "Consolidando nuestras relaciones"
 * Tema generador: Hilos que nos conectan con el mundo
 * Energía química e hidrocarburos · causas de mortalidad · ideas del siglo XIX y Reforma Liberal ·
 * Guatemala en el mundo: comercio, organismos internacionales y paz · factorización prima, MCM y MCD ·
 * ecosistemas, patrimonio prehispánico, derechos y responsabilidades ciudadanas.
 */
export default semana({
  id: 's17',
  unidad: 2,
  semana: 17,
  kind: 'aprendizaje',
  temaGenerador: 'Hilos que nos conectan con el mundo',
  title: 'Hilos que nos conectan con el mundo',
  subtitle: 'Energía, comercio, ideas, derechos y números primos',
  icon: 'Ship',
  color: 'var(--area-ccss)',
  contexto: 'Una cooperativa de Alta Verapaz cosecha cardamomo, uno de los productos que Guatemala más vende al mundo. El costal viaja en camión hasta un puerto del Caribe y de ahí cruza el océano. Esta semana seguirás ese viaje para descubrir qué energía mueve el camión, qué ideas del siglo XIX cambiaron el comercio, cómo se relaciona Guatemala con otros países y qué derechos y responsabilidades tenemos como ciudadanos.',
  ejes: ['vida-ciudadana', 'trabajo', 'sostenible', 'multiculturalidad'],
  media: {
    id: 's17-portada', kind: 'video', title: 'El viaje de un costal de cardamomo', aspect: '16:9', duration: 60,
    alt: 'Recorrido de un costal de cardamomo desde un cultivo en la montaña de Alta Verapaz, en camión por la carretera, hasta un barco en el puerto.',
    brief: 'Video (o animación 2D) de 60 s. (1) Mujeres y hombres q\'eqchi\' de una cooperativa cosechan cápsulas verdes de cardamomo en un bosque húmedo con neblina. (2) El cardamomo se seca y se empaca en costales. (3) Un camión lo lleva por la carretera; aparece un ícono de bomba de combustible. (4) En el puerto, una grúa sube contenedores a un barco; sobre el mar se dibujan líneas hacia otros continentes. Texto final: "Hilos que nos conectan con el mundo". Sin marcas, logos ni rostros reales identificables.',
  },
  badge: { id: 'medalla-s17', name: 'Tejedor de conexiones', icon: 'Globe', desc: 'Completaste la semana 17 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's17-d1-energia',
      title: 'Energía: del maíz al motor',
      icon: 'Zap',
      minutes: 14,
      day: 1,
      gancho: 'Tú te mueves gracias a la tortilla; el camión se mueve gracias al diésel. ¿Qué tienen en común?',
      objetivos: ['Describir cómo el alimento guarda energía química', 'Relacionar los hidrocarburos con la energía', 'Expresar un número como producto de factores primos', 'Identificar causas frecuentes de mortalidad y cómo prevenirlas'],
      resumen: [
        'Los alimentos guardan energía química que el cuerpo transforma en movimiento y calor; esa energía viene del Sol, que las plantas captan con la fotosíntesis.',
        'Los hidrocarburos, como el petróleo y el gas natural, están formados por hidrógeno y carbono; al quemarse liberan energía, pero no son renovables y contaminan.',
        'La factorización prima escribe un número como producto de primos: 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5.',
        'Muchas causas frecuentes de muerte, como las infecciones respiratorias, las diarreas o la desnutrición, se pueden prevenir.',
      ],
      media: {
        id: 's17-d1-cadena', kind: 'animation', title: 'La cadena de la energía', aspect: '16:9', duration: 55,
        alt: 'Animación: el Sol ilumina una milpa, el maíz se vuelve tortilla, una niña la come y corre; en paralelo, restos de plantas antiguas se vuelven petróleo que mueve un camión.',
        brief: 'Animación 2D de 55 s en pantalla dividida. Arriba: Sol → milpa (fotosíntesis, destellos) → tortilla → niña que come y corre (rótulo "energía química → movimiento"). Abajo: plantas y microorganismos de hace millones de años se entierran → capas de roca → petróleo → refinería → camión (rótulo "hidrocarburos → movimiento", con humo gris y el texto "CO₂"). Cierre: "Toda la energía viene, de alguna forma, del Sol". Narración en español, subtítulos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'ef'], cnb: ['cnt:7.1.2', 'cnt:7.2.2'], ambito: 'conocer', title: 'Energía guardada',
            prompt: 'La **energía química** está guardada en las sustancias y se libera cuando se transforman. Toca cada tarjeta.' },
          { icon: 'Zap', body: 'Tu cuerpo y un motor hacen algo parecido: **transforman energía química en movimiento y calor**.', reveal: [
            { icon: 'Wheat', front: 'En los alimentos', back: 'Las plantas guardan la energía del **Sol** en azúcares y almidones. Al comer, tu cuerpo la libera en las células para moverte, pensar y crecer. Se mide en **kilocalorías**.' },
            { icon: 'Fuel', front: 'En los hidrocarburos', back: 'El **petróleo** y el **gas natural** son hidrocarburos: sustancias de **hidrógeno y carbono** formadas por restos de seres vivos durante **millones de años**.' },
            { icon: 'Flame', front: 'Al quemarlos', back: 'Liberan mucha energía (calor y movimiento), pero también **dióxido de carbono** y otros gases que contaminan el aire.' },
            { icon: 'Hourglass', front: 'No renovables', back: 'Tardan millones de años en formarse: si los gastamos, **se agotan**. Guatemala produce algo de petróleo en Petén, pero importa la mayor parte de los combustibles que usa.' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['cnt', 'ef'], cnb: ['cnt:7.1.2'],
            prompt: 'Ordena la **cadena de energía** que te permite correr en el recreo.',
            explain: 'La energía del Sol pasa a la planta, del alimento a tu cuerpo, y tus músculos la transforman en movimiento.' },
          { items: [
            { id: 'c1', text: 'El Sol ilumina la milpa' },
            { id: 'c2', text: 'La planta de maíz guarda energía con la fotosíntesis' },
            { id: 'c3', text: 'Comes una tortilla' },
            { id: 'c4', text: 'Tus células liberan la energía química' },
            { id: 'c5', text: 'Tus músculos te permiten correr' },
          ], labels: { start: 'Inicio', end: 'Final' } },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt', 'pyd'], cnb: ['cnt:7.2.2'], ambito: 'conocer',
            prompt: '¿Qué productos y fuentes de energía **vienen de los hidrocarburos**? Clasifícalos.',
            hint: 'Pregúntate si se fabrican a partir del petróleo o del gas natural.',
            explain: 'Gasolina, diésel, gas propano, asfalto y muchos plásticos vienen del petróleo o del gas. La leña, el agua de los ríos y el Sol son otras fuentes de energía.' },
          { buckets: [
            { id: 'hc', label: 'Vienen de hidrocarburos', icon: 'Fuel', color: 'var(--area-cnt)' },
            { id: 'no', label: 'No vienen de hidrocarburos', icon: 'Sun', color: 'var(--c-ok)' },
          ], items: [
            { id: 'h1', text: 'Diésel del camión', icon: 'Truck', bucket: 'hc' },
            { id: 'h2', text: 'Gas propano de la estufa', icon: 'Flame', bucket: 'hc' },
            { id: 'h3', text: 'Bolsa plástica', icon: 'ShoppingBasket', bucket: 'hc', feedback: 'La mayoría de los plásticos se fabrican con derivados del petróleo.' },
            { id: 'h4', text: 'Energía hidroeléctrica', icon: 'Waves', bucket: 'no' },
            { id: 'h5', text: 'Panel solar', icon: 'Sun', bucket: 'no' },
            { id: 'h6', text: 'Leña', icon: 'TreeDeciduous', bucket: 'no', feedback: 'La leña es biomasa: viene de árboles actuales, no de hidrocarburos.' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['mat', 'ef'], cnb: ['mat:4.3.4'], ambito: 'conocer', title: 'El árbol de factores',
            prompt: 'Se recomienda que niñas y niños se muevan al menos **60 minutos al día**. Descompongamos el **60** en **factores primos** con un árbol.',
            media: { id: 's17-d1-arbol-factores', kind: 'diagram', title: 'Árbol de factores de 60', aspect: '1:1',
              alt: 'Árbol de factores: 60 se divide en 6 y 10; 6 en 2 y 3; 10 en 2 y 5. Los primos 2, 3, 2 y 5 están en círculos.',
              brief: 'Diagrama en forma de árbol (ceiba estilizada, trazo limpio): en la copa el 60; ramas hacia 6 y 10; de 6 salen 2 y 3; de 10 salen 2 y 5. Los números primos van dentro de círculos verdes (hojas). Abajo, en la raíz: "60 = 2 × 2 × 3 × 5 = 2² × 3 × 5". Colores de Matemáticas (magenta) y verde.' } },
          { icon: 'TreeDeciduous', body: 'Divide el número en dos factores; sigue dividiendo cada rama hasta que **todas las hojas sean primos**. Luego multiplica las hojas.', reveal: [
            { icon: 'Layers', front: '60', back: '60 = 6 × 10 → 6 = 2 × 3 y 10 = 2 × 5.' },
            { icon: 'Star', front: 'Hojas primas', back: '2, 2, 3 y 5. Entonces **60 = 2 × 2 × 3 × 5**.' },
            { icon: 'Sigma', front: 'Con potencias', back: 'Los factores repetidos se escriben con exponente: **60 = 2² × 3 × 5**.' },
            { icon: 'RefreshCw', front: '¿Y si empiezo distinto?', back: '60 = 4 × 15 = (2 × 2) × (3 × 5). ¡Siempre llegas a los **mismos primos**!' },
          ] },
        ),
        S.fill(
          { fase: 'construir', areas: ['mat'], cnb: ['mat:4.3.4'], ambito: 'hacer',
            prompt: 'Completa la **factorización prima** de 84 y de 90.',
            hint: '84 = 4 × 21. ¿En qué primos se descompone 21?',
            explain: '84 = 2 × 2 × 3 × 7 = 2² × 3 × 7. 90 = 2 × 3 × 3 × 5 = 2 × 3² × 5.' },
          { text: '84 = 2 × 2 × [[3]] × 7\n90 = [[2]] × 3² × 5', distractors: ['4', '9', '21'] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['cnt', 'fc'], cnb: ['cnt:6.5.2'], ambito: 'ser',
            prompt: 'Según datos de salud, entre las **causas frecuentes de muerte** en Guatemala están las infecciones respiratorias, las diarreas, la desnutrición, los accidentes y enfermedades como la diabetes. Muchas se pueden **prevenir**. Une cada causa con una forma de prevenirla.',
            explain: 'Pregunta en el puesto o centro de salud cuáles son las principales causas de mortalidad en **tu** comunidad: pueden cambiar de un lugar a otro.' },
          { leftTitle: 'Causa frecuente', rightTitle: 'Prevención', pairs: [
            { id: 'res', left: 'Neumonía e infecciones respiratorias', leftIcon: 'Wind', right: 'Vacunas y cocinar sin humo dentro de la casa' },
            { id: 'dia', left: 'Enfermedades diarreicas', leftIcon: 'Droplets', right: 'Agua segura y lavado de manos' },
            { id: 'des', left: 'Desnutrición', leftIcon: 'Salad', right: 'Alimentación variada y lactancia materna' },
            { id: 'acc', left: 'Accidentes de tránsito', leftIcon: 'Car', right: 'Casco, cinturón y respetar las señales' },
            { id: 'dbt', left: 'Diabetes', leftIcon: 'HeartPulse', right: 'Actividad física y menos bebidas azucaradas' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.4'], prompt: 'Boleto de salida: ¿cuál es la **factorización prima** de 72?' },
          { options: [
            { id: 'a', text: '2³ × 3²' },
            { id: 'b', text: '8 × 9', feedback: '8 y 9 no son primos: hay que seguir descomponiendo.' },
            { id: 'c', text: '2² × 3³', feedback: '2² × 3³ = 4 × 27 = 108, no 72.' },
            { id: 'd', text: '2 × 36', feedback: '36 no es primo.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.1.2', 'cnt:7.2.2', 'cnt:6.5.2'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'Los alimentos guardan energía química que el cuerpo transforma en movimiento.', answer: true },
            { text: 'El petróleo es un recurso renovable que se forma en pocos años.', answer: false, why: 'Tarda millones de años en formarse: es no renovable.' },
            { text: 'Los hidrocarburos están formados principalmente por hidrógeno y carbono.', answer: true },
            { text: 'Las enfermedades diarreicas no se pueden prevenir.', answer: false, why: 'Se previenen con agua segura, lavado de manos y saneamiento.' },
          ] },
        ),
        cierre({ areas: ['cnt', 'mat'], cnb: ['cnt:7.1.2'] }, ['Explico cómo el alimento se convierte en movimiento', 'Relaciono los hidrocarburos con la energía y la contaminación', 'Descompongo un número en factores primos'],
          ['Me moveré al menos 60 minutos hoy', 'Apagaré aparatos que no uso para ahorrar energía', 'Preguntaré en el puesto de salud qué enfermedades son más frecuentes en mi comunidad']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's17-d2-ideas-xix',
      title: 'Ideas que cambiaron el siglo XIX',
      icon: 'ScrollText',
      minutes: 15,
      day: 2,
      gancho: '¿Sabes por qué el 1 de mayo es el Día del Trabajo? La respuesta está en el siglo XIX.',
      objetivos: ['Identificar el liberalismo económico, el neocolonialismo y la organización obrera', 'Relacionar las ideas liberales con conflictos en Guatemala y el mundo', 'Reconocer influencias políticas en la construcción del Estado', 'Usar sustantivos con sus modificadores y acentuar diptongos, triptongos e hiatos'],
      resumen: [
        'En el siglo XIX surgieron el liberalismo económico (libre comercio y propiedad privada), el neocolonialismo (potencias que dominaban África y Asia) y la organización obrera (sindicatos que pedían derechos laborales).',
        'En Guatemala, liberales y conservadores influyeron en cómo se construyó el Estado. La Reforma Liberal de 1871 trajo café, ferrocarril y educación laica, pero quitó tierras comunales e impuso trabajo forzado a comunidades indígenas.',
        'El sustantivo se acompaña de artículo y adjetivos; el adjetivo tiene grados: positivo, comparativo y superlativo.',
        'El hiato con vocal cerrada tónica lleva tilde (país, economía); en un diptongo de vocal abierta y cerrada, la tilde va en la vocal abierta (camión, adiós).',
      ],
      media: {
        id: 's17-d2-siglo19', kind: 'image', title: 'Un mundo que se transforma', aspect: '16:9',
        alt: 'Collage ilustrado: una fábrica con chimeneas, un tren de vapor cruzando un cafetal y un grupo de trabajadores con un cartel de "8 horas".',
        brief: 'Ilustración estilo grabado antiguo coloreado, en tres franjas: (1) fábrica europea con chimeneas y trabajadores; (2) ferrocarril de vapor atravesando un cafetal de Guatemala con trabajadores indígenas cargando costales; (3) marcha pacífica de obreros y obreras con carteles "8 horas de trabajo, 8 de descanso, 8 para nosotros". Sin personajes históricos reales identificables, sin violencia.',
      },
      steps: [
        S.cards(
          { fase: 'explorar', areas: ['ccss', 'pyd'], cnb: ['ccss:6.6.1'], ambito: 'conocer', title: 'Tres ideas que movieron el mundo',
            prompt: 'Con la Revolución Industrial aparecieron fábricas, trenes y barcos de vapor. También nuevas **ideas políticas y económicas**. Voltea cada tarjeta.' },
          { cards: [
            { icon: 'Store', front: 'Liberalismo económico', back: 'Idea de que el mercado funciona mejor con **libre comercio**, **propiedad privada** y poca intervención del Estado.' },
            { icon: 'Map', front: 'Neocolonialismo', back: 'Potencias europeas dominaron **África y Asia** para obtener materias primas y vender productos. En la Conferencia de Berlín (1884-1885) se repartieron África.' },
            { icon: 'Users', front: 'Organización obrera', back: 'Los trabajadores formaron **sindicatos** para pedir salarios justos y jornadas más cortas.' },
            { icon: 'CalendarDays', front: '1 de mayo', back: 'Recuerda a los trabajadores de Chicago que en **1886** exigieron la jornada de **8 horas**.' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['ccss', 'fc', 'l1'], cnb: ['ccss:6.6.2', 'fc:5.1.2'], ambito: 'conocer',
            prompt: 'Lee cómo las ideas liberales llegaron a Guatemala y responde.' },
          { genre: 'Texto histórico', heading: 'La Reforma Liberal en Guatemala', passage:
            'Después de la independencia, en Guatemala se enfrentaron dos grupos políticos. Los **conservadores**, como Rafael Carrera, querían mantener el poder de la Iglesia y muchas costumbres de la Colonia. Los **liberales** querían separar la Iglesia del Estado, impulsar el libre comercio y la propiedad privada de la tierra.\n\nEn **1871**, los liberales tomaron el poder con Miguel García Granados y Justo Rufino Barrios. Se impulsó el cultivo de **café** para vender a Europa y Estados Unidos, se construyeron el **ferrocarril** y el **telégrafo**, y la educación pública pasó a ser **laica y gratuita**. Muchas fincas de café recibieron inversiones y dueños extranjeros.\n\nPero la reforma también generó **conflictos**. Muchas comunidades indígenas perdieron sus tierras comunales, y se aprobaron leyes que las obligaban a trabajar en las fincas. Algo parecido pasaba en otros continentes: las ideas de libre comercio sirvieron a las potencias para dominar pueblos de África y Asia.',
            questions: [
              { q: '¿Qué querían los liberales?', options: [
                { id: 'a', text: 'Separar la Iglesia del Estado e impulsar el libre comercio' },
                { id: 'b', text: 'Mantener todas las costumbres coloniales' },
                { id: 'c', text: 'Prohibir el café' },
              ], correct: 'a' },
              { q: '¿Qué conflicto provocó la Reforma Liberal en las comunidades indígenas?', options: [
                { id: 'a', text: 'Perdieron tierras comunales y fueron obligadas a trabajar en fincas' },
                { id: 'b', text: 'Recibieron más tierras' },
                { id: 'c', text: 'Ninguno' },
              ], correct: 'a' },
              { q: '¿Qué influencia política ayudó a construir la educación pública actual?', options: [
                { id: 'a', text: 'La idea liberal de una educación laica y gratuita' },
                { id: 'b', text: 'La Conferencia de Berlín' },
                { id: 'c', text: 'Los sindicatos de Chicago' },
              ], correct: 'a', why: 'Las ideas de los grupos políticos quedan en las leyes y en las instituciones del Estado.' },
              { q: '¿Qué opinas: un cambio que trae progreso para unos y pérdidas para otros es justo?', options: [
                { id: 'a', text: 'Un cambio es más justo cuando beneficia a todos y respeta los derechos de cada pueblo' },
                { id: 'b', text: 'Sí, siempre que haya trenes' },
                { id: 'c', text: 'Da igual quién pierda' },
              ], correct: 'a', why: 'El progreso debe respetar los derechos humanos de todas las personas.' },
            ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['fc', 'ccss'], cnb: ['fc:5.1.2', 'ccss:6.6.1'],
            prompt: 'Las **influencias políticas** dieron forma al Estado guatemalteco. Clasifica cada idea según el grupo que la defendía en el siglo XIX.',
            explain: 'Ambos grupos dejaron huella en el Estado: por ejemplo, la educación laica viene de los liberales. Hoy la Constitución de 1985 establece un Estado democrático con separación de poderes.' },
          { buckets: [
            { id: 'lib', label: 'Liberales', icon: 'TrendingUp', color: 'var(--area-ccss)' },
            { id: 'con', label: 'Conservadores', icon: 'Church', color: 'var(--area-fc)' },
          ], items: [
            { id: 'i1', text: 'Separar la Iglesia del Estado', bucket: 'lib' },
            { id: 'i2', text: 'Educación laica y gratuita', bucket: 'lib' },
            { id: 'i3', text: 'Libre comercio y exportación de café', bucket: 'lib' },
            { id: 'i4', text: 'Mantener el poder de la Iglesia en la educación', bucket: 'con' },
            { id: 'i5', text: 'Conservar costumbres de la Colonia', bucket: 'con' },
          ] },
        ),
        S.highlight(
          { fase: 'construir', areas: ['l1', 'ccss'], cnb: ['l1:7.1.1'], ambito: 'conocer',
            prompt: 'El **sustantivo** nombra; lo acompañan el **artículo** (el, la, los, unas…) y el **adjetivo**, que lo describe. Marca los **adjetivos** del texto.',
            hint: 'Pregunta "¿cómo es?" a cada sustantivo: el tren… ¿cómo es?',
            explain: 'Los adjetivos tienen grados: **positivo** (rápido), **comparativo** (más rápido que) y **superlativo** (rapidísimo o el más rápido).' },
          { target: 'adjetivos', text: 'El tren {moderno} cruzaba los cafetales {verdes}. Era {rapidísimo}: más {rápido} que las carretas. Los trabajadores {cansados} cargaban costales {pesados}.' },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['l1', 'l2'], cnb: ['l1:7.2.2'], ambito: 'conocer',
            prompt: 'Dos vocales juntas en la **misma sílaba** forman **diptongo** (in-dus-**tria**); tres, **triptongo** (Pa-ra-**guay**); si se separan en sílabas distintas, es **hiato** (pa-**ís**). Clasifica las palabras.',
            hint: 'Separa en sílabas. Si una vocal cerrada (i, u) lleva tilde junto a una abierta, se rompe el diptongo: es hiato.',
            explain: 'País y economía llevan tilde para marcar el hiato. Camión lleva tilde en la vocal abierta del diptongo por ser aguda terminada en n. Paraguay y buey tienen triptongo (uay, uey) y no llevan tilde.' },
          { buckets: [
            { id: 'dip', label: 'Diptongo', icon: 'Link' },
            { id: 'tri', label: 'Triptongo', icon: 'Layers' },
            { id: 'hia', label: 'Hiato', icon: 'Scissors' },
          ], items: [
            { id: 'd1', text: 'industria', bucket: 'dip' },
            { id: 'd2', text: 'camión', bucket: 'dip', feedback: 'ca-mión: "io" está en la misma sílaba. La tilde va en la vocal abierta (o).' },
            { id: 'd3', text: 'Paraguay', bucket: 'tri' },
            { id: 'd4', text: 'buey', bucket: 'tri' },
            { id: 'd5', text: 'país', bucket: 'hia' },
            { id: 'd6', text: 'economía', bucket: 'hia' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l2', 'ccss'], cnb: ['l2:4.3.1'],
            prompt: 'Una oración se escribe con **mayúscula al principio** y **punto al final**. Selecciona **todas** las oraciones bien escritas para el mural.',
            explain: 'Los nombres propios (Chicago, Guatemala) también llevan mayúscula en cualquier lugar de la oración.' },
          { multiple: true, options: [
            { id: 'a', text: 'Los obreros de Chicago pidieron ocho horas de trabajo.' },
            { id: 'b', text: 'el ferrocarril llegó al puerto', feedback: 'Falta la mayúscula inicial y el punto final.' },
            { id: 'c', text: 'En 1871 comenzó la Reforma Liberal.' },
            { id: 'd', text: 'Guatemala exportaba café a Europa', feedback: 'Falta el punto final.' },
          ], correct: ['a', 'c'] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.6.1', 'ccss:6.6.2'], prompt: 'Boleto de salida: une cada idea con su ejemplo.' },
          { pairs: [
            { id: 'lib', left: 'Liberalismo económico', right: 'Libre comercio y propiedad privada de la tierra' },
            { id: 'neo', left: 'Neocolonialismo', right: 'Potencias europeas se reparten África' },
            { id: 'obr', left: 'Organización obrera', right: 'Sindicatos que piden la jornada de 8 horas' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.2'], prompt: '¿Por qué lleva tilde la palabra **"día"**?' },
          { options: [
            { id: 'a', text: 'Porque la tilde marca el hiato: dí-a', icon: 'Scissors' },
            { id: 'b', text: 'Porque es esdrújula', icon: 'Star', feedback: 'Tiene solo dos sílabas: no puede ser esdrújula.' },
            { id: 'c', text: 'Porque es aguda terminada en vocal', icon: 'Target', feedback: 'La fuerza cae en "dí", la penúltima sílaba.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['ccss', 'fc'], cnb: ['ccss:6.6.2'] }, ['Explico qué fueron el liberalismo, el neocolonialismo y la organización obrera', 'Relaciono la Reforma Liberal con sus beneficios y conflictos', 'Acentúo palabras con diptongo, triptongo e hiato'],
          ['Preguntaré en casa si alguien de mi familia trabajó en una finca', 'Revisaré que mis oraciones tengan mayúscula y punto', 'Valoraré el trabajo de quienes producen lo que consumo']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's17-d3-guatemala-mundo',
      title: 'Guatemala y el mundo: comercio y paz',
      icon: 'Ship',
      minutes: 15,
      day: 3,
      gancho: 'El cardamomo que se cosecha en Alta Verapaz termina en cocinas del otro lado del mundo. ¿Quién gana más en ese viaje?',
      objetivos: ['Identificar las relaciones de Guatemala con otros países y por qué el intercambio puede ser desigual', 'Relacionar a los organismos internacionales con la resolución de conflictos', 'Calcular el MCM y el MCD con factorización prima', 'Conversar sobre personajes famosos de culturas de habla inglesa'],
      resumen: [
        'Guatemala se relaciona con el mundo por el comercio (café, banano, cardamomo, azúcar), los organismos internacionales (ONU, OEA, SICA), la migración y la cultura.',
        'El intercambio es desigual cuando un país vende materias primas baratas y compra productos procesados caros.',
        'La ONU apoyó las negociaciones de paz en Guatemala y verificó los Acuerdos de Paz con la misión MINUGUA (1994-2004).',
        'MCM: multiplica todos los factores primos con su mayor exponente. MCD: multiplica solo los comunes con su menor exponente.',
      ],
      media: {
        id: 's17-d3-mapa', kind: 'image', title: 'Guatemala conectada', aspect: '16:9',
        alt: 'Mapamundi con Guatemala al centro y líneas que la unen con otros continentes, con íconos de café, banano, cardamomo, barcos y sedes de organismos internacionales.',
        brief: 'Mapamundi ilustrado centrado en América, Guatemala resaltada. Líneas curvas salen de Guatemala hacia América del Norte, Europa, Asia y Centroamérica, con íconos: café, banano, cardamomo, azúcar (exportaciones); contenedores y barcos; una paloma (ONU), un círculo de banderas genéricas (OEA/SICA, sin logos oficiales). Leyenda: "Comercio", "Organismos", "Migración y familia". Colores cálidos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'pyd'], cnb: ['ccss:6.6.7'], ambito: 'conocer', title: 'Los hilos de Guatemala',
            prompt: 'Guatemala no está sola: se relaciona con otros países de muchas maneras. Toca cada hilo.' },
          { icon: 'Globe', body: 'Estas relaciones traen oportunidades, pero también retos.', reveal: [
            { icon: 'Ship', front: 'Comercio', back: 'Vende **café, banano, cardamomo, azúcar** y textiles. Compra combustibles, maquinaria y medicinas. Su principal socio comercial es **Estados Unidos**.' },
            { icon: 'Landmark', front: 'Organismos', back: 'Es miembro fundador de la **ONU** (1945) y parte de la **OEA** y del **SICA** (Sistema de la Integración Centroamericana).' },
            { icon: 'Users', front: 'Migración', back: 'Muchas familias tienen parientes en otros países; el dinero que envían (**remesas**) es importante para la economía.' },
            { icon: 'Handshake', front: 'Paz', back: 'La **ONU** acompañó las negociaciones y verificó los Acuerdos de Paz con la misión **MINUGUA** (1994-2004).' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:7.2.2', 'ccss:6.6.7'], ambito: 'conocer',
            prompt: 'Los **organismos internacionales** ayudan a resolver conflictos y proteger los derechos humanos. Une cada uno con su función.',
            explain: 'Estos organismos no reemplazan a los países: facilitan el diálogo, verifican acuerdos y ayudan a las víctimas.' },
          { leftTitle: 'Organismo', rightTitle: 'Función', pairs: [
            { id: 'onu', left: 'ONU (Organización de las Naciones Unidas)', leftIcon: 'Globe', right: 'Mantener la paz mundial y mediar en conflictos armados' },
            { id: 'min', left: 'MINUGUA', leftIcon: 'Search', right: 'Verificar el cumplimiento de los Acuerdos de Paz en Guatemala' },
            { id: 'oea', left: 'OEA (Organización de los Estados Americanos)', leftIcon: 'Flag', right: 'Promover la democracia y el diálogo entre países de América' },
            { id: 'cruz', left: 'Cruz Roja Internacional', leftIcon: 'HeartHandshake', right: 'Dar ayuda humanitaria a personas afectadas por guerras' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['fc', 'mat', 'pyd'], cnb: ['fc:5.1.3'], ambito: 'conocer',
            prompt: 'El **intercambio desigual** ocurre cuando un país vende **materias primas** baratas y compra **productos procesados** caros. **Supongamos** que una cooperativa recibe **Q10** por una libra de café sin tostar, y en otro país esa misma libra, tostada y empacada, se vende en **Q60**. ¿Cuántas **veces** más vale el café procesado?',
            hint: 'Divide el precio del café procesado entre el precio del café sin procesar.',
            explain: '60 ÷ 10 = 6 veces más. El valor que se agrega al tostar, empacar y vender se queda en otro país. Factores del intercambio desigual: vender sin procesar, poca tecnología, depender de pocos productos, precios fijados por mercados internacionales e intermediarios.' },
          { answer: 6, unit: 'veces', misconceptions: [{ value: 50, msg: 'Calculaste la diferencia (60 − 10). La pregunta es cuántas veces más: divide.' }] },
        ),
        S.explain(
          { fase: 'construir', areas: ['mat', 'ccss'], cnb: ['mat:4.3.5'], ambito: 'conocer', title: 'MCM y MCD con factores primos',
            prompt: 'En el puerto, un barco a Europa sale cada **6 días** y uno a Asia cada **8 días**. Si hoy salieron juntos, ¿cuándo vuelven a coincidir? Y la cooperativa quiere empacar **24 kg** de cardamomo y **36 kg** de café en bolsas **iguales y lo más grandes posible**.' },
          { icon: 'Calculator', body: 'Primero factoriza. Luego:', reveal: [
            { icon: 'Ship', front: 'MCM de 6 y 8', back: '6 = 2 × 3 y 8 = 2³. Toma **todos** los primos con su **mayor** exponente: 2³ × 3 = **24**. Los barcos coinciden en 24 días.' },
            { icon: 'Package', front: 'MCD de 24 y 36', back: '24 = 2³ × 3 y 36 = 2² × 3². Toma solo los **comunes** con su **menor** exponente: 2² × 3 = **12**. Bolsas de 12 kg.' },
            { icon: 'Lightbulb', front: '¿Cuál uso?', back: '**MCM**: cuando algo se **repite** y buscas cuándo coincide. **MCD**: cuando **repartes** en partes iguales lo más grandes posible.' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'pyd'], cnb: ['mat:4.3.5'], ambito: 'hacer',
            prompt: 'La cooperativa tiene **18** costales de cardamomo, **24** de café y **30** de frijol. Quiere formar **lotes iguales** (cada lote con la misma cantidad de costales de cada producto), la **mayor cantidad posible de lotes**. ¿Cuántos lotes puede formar?',
            hint: 'Factoriza: 18 = 2 × 3², 24 = 2³ × 3, 30 = 2 × 3 × 5. ¿Qué factores tienen en común los tres?',
            explain: 'MCD(18, 24, 30) = 2 × 3 = 6. Se forman 6 lotes, cada uno con 3 costales de cardamomo, 4 de café y 5 de frijol.' },
          { answer: 6, unit: 'lotes', misconceptions: [{ value: 360, msg: 'Ese es el MCM. Aquí repartes en grupos iguales: busca el MCD.' }, { value: 3, msg: '3 divide a los tres, pero hay un divisor común mayor.' }] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l1', 'pyd'], cnb: ['l1:7.2.1', 'l1:7.2.3'], ambito: 'conocer',
            prompt: 'Palabras del comercio. El **fonema** es el sonido; el **grafema**, la letra que lo representa; el **morfema**, la parte que da significado o marca gramatical. La **raíz** (morfema base) lleva el significado y la **desinencia** (morfema clase) indica género, número, persona o tiempo. Completa.',
            explain: 'En "hilo" hay 4 grafemas (h-i-l-o) pero solo 3 fonemas: /i/ /l/ /o/, porque la h no suena. Con la raíz export- y distintas desinencias creas muchas palabras.' },
          { text: 'La palabra "hilo" tiene [[4]] grafemas y [[3]] fonemas.\nEn "exportadoras", la raíz es [[export]] y la desinencia -as indica femenino y [[plural]].\nCon la raíz export- y la desinencia -amos formo [[exportamos]].',
            distractors: ['5', 'singular', 'exportación'] },
        ),
        S.reading(
          { fase: 'aplicar', areas: ['l3', 'fc'], cnb: ['l3:5.2.3'], ambito: 'convivir',
            prompt: 'English time! Read about two famous people from English-speaking cultures who worked for peace and rights. (Las preguntas están en español.)' },
          { genre: 'Biographies', heading: 'Voices for Peace', passage:
            '**Martin Luther King Jr.** was born in the United States in 1929. He fought for equal rights for African American people. He used **peaceful** protests, not violence. In 1963 he gave a famous speech: "I have a dream". He won the Nobel Peace Prize in 1964.\n\n**Nelson Mandela** was born in South Africa in 1918. He fought against a system that separated people by the color of their skin. He was in prison for 27 years. When he was free, he worked for peace and dialogue. In 1994 he became the president of South Africa.',
            questions: [
              { q: '¿Qué tipo de protestas usó Martin Luther King Jr.?', options: [
                { id: 'a', text: 'Protestas pacíficas' },
                { id: 'b', text: 'Protestas violentas' },
                { id: 'c', text: 'No protestó' },
              ], correct: 'a' },
              { q: '¿Cuántos años estuvo Nelson Mandela en prisión?', options: [
                { id: 'a', text: '27' },
                { id: 'b', text: '1994' },
                { id: 'c', text: '63' },
              ], correct: 'a' },
              { q: '¿Qué tienen en común ambos personajes?', options: [
                { id: 'a', text: 'Lucharon por la igualdad de derechos usando el diálogo y la paz' },
                { id: 'b', text: 'Nacieron en el mismo país' },
                { id: 'c', text: 'Fueron presidentes de Estados Unidos' },
              ], correct: 'a', why: 'Ambos defendieron la igualdad sin importar el color de la piel, con métodos pacíficos.' },
            ] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.5'], prompt: 'Boleto de salida: tres buses salen de la terminal cada **4**, **6** y **10** minutos. Si salen juntos ahora, ¿en cuántos minutos vuelven a salir juntos?' },
          { answer: 60, unit: 'min', misconceptions: [{ value: 2, msg: 'Ese es el MCD. Buscas cuándo coinciden: el MCM.' }, { value: 240, msg: 'Multiplicaste los tres números; busca el mínimo común múltiplo.' }] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['fc', 'ccss'], cnb: ['fc:5.1.3', 'ccss:6.6.7', 'ccss:7.2.2'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'Vender materias primas sin procesar y comprar productos procesados caros puede generar intercambio desigual.', answer: true },
            { text: 'Guatemala es miembro de la ONU desde su fundación en 1945.', answer: true },
            { text: 'MINUGUA fue una misión de la ONU para verificar los Acuerdos de Paz.', answer: true },
            { text: 'Guatemala no tiene relaciones comerciales con otros países.', answer: false, why: 'Exporta café, banano, cardamomo y más, e importa combustibles y maquinaria.' },
          ] },
        ),
        cierre({ areas: ['ccss', 'mat'], cnb: ['ccss:6.6.7'] }, ['Explico cómo se relaciona Guatemala con el mundo', 'Identifico factores del intercambio desigual', 'Calculo el MCM y el MCD con factores primos'],
          ['Revisaré de dónde vienen los productos que usamos en casa', 'Preferiré productos elaborados en Guatemala cuando pueda', 'Contaré en casa quiénes fueron Martin Luther King Jr. y Nelson Mandela']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's17-d4-ecosistemas-juego',
      title: 'Ecosistemas, patrimonio y juego limpio',
      icon: 'Trees',
      minutes: 15,
      day: 4,
      gancho: '¿Qué hay alrededor de tu comunidad: bosque, río, lago, manglar, cafetal? ¿Quién lo cuida?',
      objetivos: ['Ubicar los principales ecosistemas de tu comunidad y del país', 'Formar palabras compuestas y palabras con partes de otras', 'Valorar las obras prehispánicas e identificar derechos y responsabilidades ciudadanas', 'Jugar con autonomía, respetando reglas y ambiente'],
      resumen: [
        'Guatemala tiene selva tropical (Petén), bosque nuboso (Verapaces), bosque seco (valle del Motagua), bosques de pino y encino (altiplano), manglares (costas) y lagos como Atitlán.',
        'Las palabras compuestas unen dos palabras completas (sacapuntas = saca + puntas); otras unen partes de palabras (cantautor = cantante + autor).',
        'Tikal y Quiriguá son Patrimonio de la Humanidad: las obras prehispánicas se admiran y se protegen, nunca se dañan ni se venden.',
        'La ciudadanía se adquiere a los 18 años e incluye derechos (elegir y ser electo) y responsabilidades (respetar las leyes, contribuir con impuestos, cuidar el patrimonio).',
      ],
      media: {
        id: 's17-d4-ecosistemas', kind: 'video', title: 'Guatemala: un país de ecosistemas', aspect: '16:9', duration: 70,
        alt: 'Recorrido por seis ecosistemas guatemaltecos: manglar, bosque seco, bosque nuboso, pinar del altiplano, lago y selva tropical.',
        brief: 'Video de 70 s con tomas de naturaleza (o ilustración animada), 10 s por ecosistema, rótulo con nombre y región: manglar del Pacífico (raíces en el agua, garzas), bosque seco del valle del Motagua (cactus y zopilotes), bosque nuboso de las Verapaces (neblina, musgos, quetzal), bosque de pino y encino del altiplano, lago de Atitlán con volcanes, selva de Petén (ceibas, monos aulladores). Cierre: "¿Cuál está cerca de ti?". Música suave de marimba.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'cnt', 'ccss'], cnb: ['pyd:5.2.1'], ambito: 'conocer', title: 'Los ecosistemas que nos sostienen',
            prompt: 'Un **ecosistema** es un lugar donde seres vivos, clima, agua y suelo se relacionan. Guatemala tiene muchos en poco territorio. Toca cada uno.' },
          { icon: 'Trees', body: 'Los ecosistemas nos dan agua, aire limpio, alimento, madera y medicinas.', reveal: [
            { icon: 'Trees', front: 'Selva tropical', back: 'En **Petén**: árboles altísimos como la ceiba, lluvia abundante, jaguares y guacamayas.' },
            { icon: 'CloudRain', front: 'Bosque nuboso', back: 'En las **Verapaces**: neblina casi todo el año, musgos y helechos. Hogar del **quetzal**.' },
            { icon: 'Sun', front: 'Bosque seco', back: 'En el **valle del Motagua** (Zacapa, El Progreso): poca lluvia, cactus y árboles espinosos.' },
            { icon: 'TreePine', front: 'Bosque de pino y encino', back: 'En el **altiplano**: clima frío, pinos, encinos y pinabetes. Protege nacimientos de agua.' },
            { icon: 'Shell', front: 'Manglar', back: 'En las **costas**: árboles con raíces en agua salada; criadero de peces, cangrejos y camarones.' },
            { icon: 'Waves', front: 'Lagos y ríos', back: 'Como **Atitlán**, **Petén Itzá** e **Izabal**: dan agua, pesca y vida a muchas comunidades.' },
          ] },
        ),
        S.coord(
          { fase: 'construir', areas: ['pyd', 'mat', 'ccss'], cnb: ['pyd:5.2.1'], ambito: 'hacer',
            prompt: 'En este mapa simplificado de Guatemala, cada símbolo es un ecosistema. Toca el ecosistema de **poca lluvia, con cactus y árboles espinosos**.',
            hint: 'Está en el oriente del país, en el valle de un gran río.',
            explain: 'Es el bosque seco del valle del Motagua. Aunque llueve poco, tiene plantas y animales adaptados a la sequía que no viven en otro lugar.' },
          { range: { xmin: 0, xmax: 10, ymin: 0, ymax: 10 }, markers: [
            { id: 'selva', label: 'Selva de Petén', emoji: '🌳', x: 5, y: 8 },
            { id: 'nuboso', label: 'Bosque nuboso', emoji: '☁️', x: 5, y: 5 },
            { id: 'seco', label: 'Bosque seco', emoji: '🌵', x: 8, y: 4 },
            { id: 'pino', label: 'Pino y encino', emoji: '🌲', x: 2, y: 5 },
            { id: 'lago', label: 'Lago', emoji: '💧', x: 3, y: 3 },
            { id: 'manglar', label: 'Manglar', emoji: '🦀', x: 3, y: 1 },
          ], task: { kind: 'identify', markerId: 'seco' } },
        ),
        S.sort(
          { fase: 'construir', areas: ['l2', 'ccss'], cnb: ['l2:4.2.3', 'l2:4.2.4'], ambito: 'conocer',
            prompt: 'Muchas palabras nacen de **unir otras**. Algunas unen **dos palabras completas** (saca + puntas = sacapuntas); otras unen **sílabas o partes** de dos palabras (cant-ante + autor = cantautor). Clasifica.',
            hint: 'Separa la palabra: si ves dos palabras enteras, es compuesta; si ves pedazos, une partes.',
            explain: 'Sacapuntas (saca + puntas), bocacosta (boca + costa), girasol (gira + sol) y ciempiés (cien + pies) unen palabras. Cantautor (cantante + autor), autobús (automóvil + ómnibus) e informática (información + automática) unen partes. Úsalas en oraciones: "En la bocacosta, un cantautor cantó junto a los girasoles".' },
          { buckets: [
            { id: 'comp', label: 'Une dos palabras', icon: 'Link' },
            { id: 'part', label: 'Une partes de palabras', icon: 'Scissors' },
          ], items: [
            { id: 'w1', text: 'sacapuntas', bucket: 'comp' },
            { id: 'w2', text: 'bocacosta', bucket: 'comp' },
            { id: 'w3', text: 'girasol', bucket: 'comp' },
            { id: 'w4', text: 'ciempiés', bucket: 'comp' },
            { id: 'w5', text: 'cantautor', bucket: 'part' },
            { id: 'w6', text: 'autobús', bucket: 'part', feedback: 'Viene de "automóvil" + "ómnibus": une partes de dos palabras.' },
            { id: 'w7', text: 'informática', bucket: 'part' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['art', 'ccss'], cnb: ['art:3.3.4'], ambito: 'ser', title: 'Obras prehispánicas: tesoros de todos',
            prompt: 'Nuestros antepasados crearon obras que el mundo admira. Toca cada tarjeta.',
            media: { id: 's17-d4-estela', kind: 'image', title: 'Estela de Quiriguá', aspect: '3:4',
              alt: 'Estela maya alta de piedra tallada con figuras y glifos, bajo un techo de protección, rodeada de selva.',
              brief: 'Ilustración realista (no fotografía de una pieza específica) de una estela maya de piedra arenisca de unos 7 m, con glifos en los costados y la figura de un gobernante al frente, protegida por un techo de palma. Al pie, una niña y un niño visitantes observando desde detrás de una cuerda de protección (tamaño pequeño, para dar escala). Selva verde alrededor.' } },
          { icon: 'Landmark', body: 'Las obras prehispánicas son **patrimonio cultural**: guardan la historia, el arte y la ciencia de los pueblos mayas.', reveal: [
            { icon: 'Castle', front: 'Tikal', back: 'Gran ciudad maya en Petén. **Patrimonio de la Humanidad** desde 1979.' },
            { icon: 'ScrollText', front: 'Quiriguá', back: 'Famosa por sus **estelas** altísimas con glifos. Patrimonio de la Humanidad desde 1981.' },
            { icon: 'Palette', front: 'San Bartolo', back: 'Murales mayas pintados hace más de 2,000 años en Petén.' },
            { icon: 'Book', front: 'Códice de Dresde', back: 'Libro maya de astronomía que hoy está en **Alemania**: una muestra de los lazos de nuestra historia con el mundo.' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['art', 'ef', 'fc'], cnb: ['art:3.3.4', 'ef:4.1.9'], ambito: 'convivir',
            prompt: 'Tu grado visita un sitio arqueológico. ¿Qué harías?' },
          { scene: { icon: 'Landmark', text: 'Durante el recorrido, un compañero encuentra un pedacito de cerámica antigua en el suelo y quiere llevárselo de recuerdo. Otro quiere subirse a una estela para tomarse una foto.' }, options: [
            { id: 'a', icon: 'Backpack', text: 'Guardarlo en la mochila; nadie se va a dar cuenta', consequence: 'La pieza pierde su contexto y la historia que podía contar. Además, sacar piezas arqueológicas está prohibido.', values: ['Irresponsabilidad'], constructive: false },
            { id: 'b', icon: 'Megaphone', text: 'Pedirle que lo deje donde estaba y avisar al guía; recordarle al otro que no se suba a la estela', consequence: 'El guía agradece y explica que cada pieza ayuda a los arqueólogos. La estela queda protegida.', values: ['Respeto al patrimonio', 'Responsabilidad'], constructive: true },
            { id: 'c', icon: 'Camera', text: 'Proponer tomar la foto desde la cuerda de protección y dibujar la pieza en el cuaderno', consequence: 'Se llevan un recuerdo sin dañar nada, y el dibujo sirve para su exposición.', values: ['Creatividad', 'Cuidado del ambiente'], constructive: true },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['ccss', 'fc', 'ef'], cnb: ['ccss:7.1.4'], ambito: 'convivir',
            prompt: 'Como en el juego, en la vida ciudadana hay **derechos** y **responsabilidades**. Según la Constitución, a los **18 años** se es ciudadano. Clasifica.',
            explain: 'Los derechos se ejercen y las responsabilidades se cumplen. Votar es un derecho y a la vez un deber ciudadano.' },
          { buckets: [
            { id: 'der', label: 'Derecho', icon: 'Scale', color: 'var(--area-fc)' },
            { id: 'res', label: 'Responsabilidad', icon: 'ClipboardCheck', color: 'var(--area-ccss)' },
          ], items: [
            { id: 'r1', text: 'Elegir a las autoridades y ser electo', bucket: 'der' },
            { id: 'r2', text: 'Expresar libremente mis ideas', bucket: 'der' },
            { id: 'r3', text: 'Optar a cargos públicos', bucket: 'der' },
            { id: 'r4', text: 'Respetar y cumplir las leyes', bucket: 'res' },
            { id: 'r5', text: 'Contribuir con impuestos a los gastos públicos', bucket: 'res' },
            { id: 'r6', text: 'Defender y conservar el patrimonio cultural', bucket: 'res' },
          ] },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'fc'], cnb: ['ef:4.1.1', 'ef:4.1.5', 'ef:4.1.9'], ambito: 'hacer',
            prompt: 'Juego de **relevos ecológicos**: en equipos mixtos, acuerden **3 reglas** antes de empezar (p. ej. "no empujar", "esperar tu turno", "recoger la basura del camino"). Cada participante corre, recoge un papel del suelo, lo deposita en el bote correcto y regresa. Hazlo con **confianza** en ti: tú decides cómo moverte. Mide tu pulso antes y después.' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después del relevo ecológico', exercise: { name: 'Relevo: correr, recoger y reciclar', icon: 'Recycle', seconds: 60 } },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['pyd', 'cnt'], cnb: ['pyd:5.2.1'], prompt: 'Boleto de salida: ¿qué ecosistema tiene árboles con raíces en agua salada y sirve de criadero de peces y cangrejos?' },
          { options: [
            { id: 'a', text: 'Manglar', icon: 'Shell' },
            { id: 'b', text: 'Bosque seco', icon: 'Sun', feedback: 'El bosque seco tiene poca agua y cactus.' },
            { id: 'c', text: 'Bosque nuboso', icon: 'CloudRain', feedback: 'El bosque nuboso está en montañas con neblina, lejos del mar.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ccss', 'l2', 'art'], cnb: ['ccss:7.1.4', 'l2:4.2.3', 'art:3.3.4'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'Respetar las leyes es una responsabilidad ciudadana.', answer: true },
            { text: '"Bocacosta" es una palabra compuesta por boca + costa.', answer: true },
            { text: 'Llevarse una pieza arqueológica de recuerdo ayuda a conservar el patrimonio.', answer: false, why: 'Sacar piezas destruye su contexto y está prohibido.' },
            { text: 'En Guatemala se es ciudadano desde los 12 años.', answer: false, why: 'La ciudadanía se adquiere a los 18 años.' },
          ] },
        ),
        cierre({ areas: ['pyd', 'ef'], cnb: ['ef:4.1.5'] }, ['Ubico los principales ecosistemas de Guatemala y de mi comunidad', 'Valoro y cuido las obras prehispánicas', 'Distingo derechos y responsabilidades ciudadanas', 'Juego con confianza respetando reglas y ambiente'],
          ['Investigaré qué ecosistema está más cerca de mi casa', 'Dejaré los lugares naturales más limpios de lo que los encontré', 'Propondré reglas justas antes de cada juego']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's17-d5-reto',
      title: 'Reto de la semana 17',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Tejedor de conexiones" (70 % o más)'],
      resumen: ['Superé el reto de la semana 17: energía, ideas del siglo XIX, Guatemala en el mundo, factores primos y ecosistemas.'],
      media: {
        id: 's17-d5-reto', kind: 'image', title: 'Medalla Tejedor de conexiones', aspect: '1:1',
        alt: 'Medalla dorada con un globo terráqueo envuelto en hilos de colores de tejido maya.',
        brief: 'Ilustración de medalla circular dorada: al centro un globo terráqueo centrado en América, envuelto por hilos de colores que forman un patrón de tejido maya; un pequeño barco en la parte inferior. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024, estilo plano con brillo suave.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.1.2'], prompt: '¿De dónde viene, en origen, la energía química que guarda una tortilla?' },
          { options: [{ id: 'a', text: 'Del Sol, captado por la planta de maíz' }, { id: 'b', text: 'Del comal' }, { id: 'c', text: 'Del petróleo' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.2.2'], prompt: '¿Viene de hidrocarburos?' },
          { buckets: [{ id: 's', label: 'Sí', icon: 'Fuel' }, { id: 'n', label: 'No', icon: 'Sun' }],
            items: [{ id: 'a', text: 'Gasolina', bucket: 's' }, { id: 'b', text: 'Asfalto', bucket: 's' }, { id: 'c', text: 'Energía del viento', bucket: 'n' }, { id: 'd', text: 'Energía solar', bucket: 'n' }] }),
        S.fill({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.4'], prompt: 'Completa la factorización prima de 100.' },
          { text: '100 = [[2]]² × [[5]]²', distractors: ['10', '4'] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.5'], prompt: 'Calcula el **MCD** de 16 y 40.' },
          { answer: 8 }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.5'], prompt: 'Calcula el **MCM** de 9 y 12.' },
          { answer: 36 }),
        S.match({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.6.1', 'ccss:6.6.2', 'ccss:7.2.2'], prompt: 'Une cada término con su descripción.' },
          { pairs: [
            { id: 'a', left: 'Reforma Liberal (1871)', right: 'Impulsó el café y el ferrocarril en Guatemala' },
            { id: 'b', left: 'Neocolonialismo', right: 'Dominio de potencias sobre África y Asia' },
            { id: 'c', left: 'MINUGUA', right: 'Verificó los Acuerdos de Paz' },
          ] }),
        S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.1.3'], prompt: '¿Cuál es un factor del **intercambio desigual** entre países?' },
          { options: [{ id: 'a', text: 'Vender materias primas sin procesar y comprar productos procesados caros' }, { id: 'b', text: 'Procesar y empacar los productos en el propio país' }, { id: 'c', text: 'Vender muchos productos distintos a precios justos' }], correct: ['a'] }),
        S.sort({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.2.2'], prompt: '¿Diptongo o hiato?' },
          { buckets: [{ id: 'd', label: 'Diptongo', icon: 'Link' }, { id: 'h', label: 'Hiato', icon: 'Scissors' }],
            items: [{ id: 'a', text: 'tierra', bucket: 'd' }, { id: 'b', text: 'río', bucket: 'h' }, { id: 'c', text: 'cuidado', bucket: 'd' }, { id: 'e', text: 'maíz', bucket: 'h' }] }),
        S.choice({ fase: 'comprobar', areas: ['pyd', 'cnt'], cnb: ['pyd:5.2.1'], prompt: '¿En qué ecosistema vive el quetzal?' },
          { options: [{ id: 'a', text: 'Bosque nuboso' }, { id: 'b', text: 'Manglar' }, { id: 'c', text: 'Bosque seco' }], correct: ['a'] }),
        S.tf({ fase: 'comprobar', areas: ['l2', 'ccss', 'l3'], cnb: ['l2:4.2.3', 'l2:4.3.1', 'ccss:7.1.4', 'l3:5.2.3'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: '"Girasol" une las palabras gira y sol.', answer: true },
            { text: 'Una oración que afirma algo empieza con mayúscula y termina con punto.', answer: true },
            { text: 'Nelson Mandela fue presidente de Sudáfrica.', answer: true },
            { text: 'Pagar impuestos es un derecho, no una responsabilidad.', answer: false },
          ] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 2 */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:7.2.2'], prompt: '¿De qué elementos están formados principalmente los hidrocarburos?' },
      { options: [{ id: 'a', text: 'Hidrógeno y carbono' }, { id: 'b', text: 'Hierro y oro' }, { id: 'c', text: 'Agua y sal' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:6.5.2'], prompt: '¿Qué ayuda a prevenir las enfermedades diarreicas, una causa frecuente de muerte infantil?' },
      { options: [{ id: 'a', text: 'Agua segura y lavado de manos' }, { id: 'b', text: 'Dormir menos' }, { id: 'c', text: 'Comer más dulces' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.4'], prompt: '¿Cuál es la factorización prima de 45?' },
      { options: [{ id: 'a', text: '3² × 5' }, { id: 'b', text: '9 × 5' }, { id: 'c', text: '3 × 15' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.3.5'], prompt: 'Calcula el **MCD** de 18 y 30.' },
      { answer: 6 }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.6.1'], prompt: '¿Qué recuerda el Día del Trabajo, el 1 de mayo?' },
      { options: [{ id: 'a', text: 'La lucha de trabajadores por la jornada de 8 horas' }, { id: 'b', text: 'La independencia de Centroamérica' }, { id: 'c', text: 'La caída del Muro de Berlín' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.6.7'], prompt: '¿Cuál es un producto que Guatemala vende al mundo?' },
      { options: [{ id: 'a', text: 'Cardamomo' }, { id: 'b', text: 'Hielo polar' }, { id: 'c', text: 'Petróleo de Arabia' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.1.2'], prompt: '¿Qué idea liberal influyó en la educación pública de Guatemala?' },
      { options: [{ id: 'a', text: 'Educación laica y gratuita' }, { id: 'b', text: 'Educación solo para nobles' }, { id: 'c', text: 'Prohibir las escuelas' }], correct: ['a'] }),
    S.fill({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.1.1', 'l1:7.2.3'], prompt: 'Completa con el grado del adjetivo y la raíz.' },
      { text: '"Altísimo" es un adjetivo en grado [[superlativo]].\nEn "trabajadoras", la raíz es [[trabaj]].', distractors: ['comparativo', 'doras'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:4.2.4', 'l2:4.2.3'], prompt: '"Cantautor" se formó uniendo partes de…' },
      { options: [{ id: 'a', text: 'Cantante y autor' }, { id: 'b', text: 'Canto y torre' }, { id: 'c', text: 'Cantar y auto' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:5.2.3'], prompt: 'Martin Luther King Jr. said "I have a dream" in…' },
      { options: [{ id: 'a', text: '1963' }, { id: 'b', text: '1821' }, { id: 'c', text: '2020' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.1.5', 'ef:4.1.1', 'ef:4.1.9'], prompt: '¿Para qué sirven las reglas acordadas antes de un juego?' },
      { options: [{ id: 'a', text: 'Para que todos disfruten, jueguen seguros y se respeten' }, { id: 'b', text: 'Para que gane siempre el mismo equipo' }, { id: 'c', text: 'Para no tener que cuidar el lugar' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:5.2.1'], prompt: '¿Dónde se encuentra el bosque seco en Guatemala?' },
      { options: [{ id: 'a', text: 'En el valle del Motagua' }, { id: 'b', text: 'En la cumbre de los volcanes' }, { id: 'c', text: 'En el centro del lago de Atitlán' }], correct: ['a'] }),
  ],
});
