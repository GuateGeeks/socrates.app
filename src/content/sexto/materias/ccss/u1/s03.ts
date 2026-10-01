/**
 * Ciencias Sociales · Unidad 1 · Semana 3 — Caminos, mensajes y comercio.
 * Progresión: cómo se comunicaban y transportaban las culturas antiguas → los cambios tecnológicos de
 * hoy y sus efectos en la cultura, la economía y los valores → qué producen los países de Centroamérica
 * y cómo se conectan con otros continentes.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Comunicación y transporte en culturas antiguas ───────────────────────── */
  lesson({
    id: 's03-ccss-1',
    title: 'Caminos y mensajes de las culturas antiguas',
    icon: 'Route',
    minutes: 14,
    gancho: 'Hoy mandas un mensaje por celular y llega en un segundo. ¿Cómo avisaba un rey maya o inca algo urgente a una ciudad lejana, hace mil años?',
    objetivos: ['Relacionar medios de transporte y comunicación de culturas antiguas con su geografía y necesidades'],
    resumen: [
      'Los mayas construyeron sacbeob (caminos blancos) entre ciudades, navegaron en canoas por ríos y costas, y registraron su historia con escritura jeroglífica en estelas y códices.',
      'Los incas tuvieron una enorme red de caminos, el Qhapaq Ñan; sus mensajeros, los chasquis, corrían por relevos, y registraban datos con quipus (cuerdas con nudos). Usaban llamas para cargar.',
      'En Mesopotamia se inventó la rueda y la escritura cuneiforme; los egipcios navegaron el Nilo y escribieron en papiro; los romanos construyeron calzadas; la Ruta de la Seda unió China con Europa.',
      'Cada cultura usó los medios que su geografía y sus recursos permitían. Comunicarse y transportarse permitió comerciar, gobernar e intercambiar ideas.',
    ],
    media: {
      id: 's03-ccss-1-sacbe', kind: 'image', title: 'Un sacbé maya', aspect: '16:9',
      alt: 'Ilustración de un camino blanco elevado que atraviesa la selva entre dos ciudades mayas; personas caminan con cargas y un mensajero corre.',
      brief: 'Ilustración en perspectiva de un sacbé: calzada blanca, recta y elevada, cubierta de estuco, que cruza la selva de Petén entre dos ciudades mayas con templos al fondo. Personas mayas antiguas caminan con cargas sujetas por mecapal; un mensajero corre adelante. No aparecen caballos, bueyes ni carretas con ruedas (no se usaban en Mesoamérica). Colores naturales, estilo educativo.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:3.3.1'], ambito: 'conocer', title: 'Los mayas: caminos blancos y libros pintados',
          prompt: 'Los mayas vivieron en lo que hoy es Guatemala, el sur de México, Belice y parte de Honduras y El Salvador. Toca cada tarjeta.' },
        { icon: 'Route', body: 'Comerciaban **jade** de la cuenca del Motagua, **obsidiana** del altiplano, **cacao**, **sal** y plumas de quetzal.', reveal: [
          { icon: 'Route', front: 'Sacbé (plural: sacbeob)', back: 'Significa "camino blanco". Calzadas elevadas y cubiertas de estuco blanco que unían edificios y ciudades. En Petén se conocen sacbeob que conectan El Mirador con otras ciudades.' },
          { icon: 'Sailboat', front: 'Canoas', back: 'Hechas de un tronco ahuecado. Navegaban ríos como el **Usumacinta** y el **Pasión**, y las costas del Caribe para comerciar.' },
          { icon: 'ScrollText', front: 'Escritura jeroglífica', back: 'Combinaba signos de palabras y de sílabas. La tallaban en **estelas** de piedra y la pintaban en **códices**, libros de papel de corteza doblados como acordeón.' },
          { icon: 'Footprints', front: 'Mensajeros y cargadores', back: 'Las noticias viajaban con **mensajeros a pie**. Las cargas iban en la espalda, sujetas con el **mecapal**, una técnica que aún se usa hoy.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.3.1'], ambito: 'conocer',
          prompt: 'En la antigua Mesoamérica **no había caballos, bueyes ni burros**. ¿Cómo crees que llevaban las cargas pesadas de una ciudad a otra?',
          explain: 'Las llevaban **personas**, caminando con cargas sujetas por un **mecapal** (una banda en la frente), y por agua en **canoas**. Hoy verás cómo cada cultura resolvió este reto.' },
        { options: [
          { id: 'a', text: 'En carretas jaladas por caballos', icon: 'Truck', feedback: 'Los caballos llegaron a América con los europeos, en el siglo XVI.' },
          { id: 'b', text: 'Cargándolas personas a pie y en canoas por ríos y costas', icon: 'Footprints' },
          { id: 'c', text: 'No transportaban nada', icon: 'X', feedback: 'Sí comerciaban mucho: jade, cacao, obsidiana, sal, plumas y textiles viajaban grandes distancias.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.3.1'], ambito: 'conocer', title: 'Otras culturas, otras soluciones',
          prompt: 'En otras partes del mundo, las culturas antiguas usaron medios distintos según su geografía. Toca cada tarjeta.',
          media: { id: 's03-ccss-1-quipu', kind: 'image', title: 'Un chasqui con su quipu', aspect: '4:3',
            alt: 'Ilustración de un joven mensajero inca que corre por un camino de piedra en la montaña, con un quipu de cuerdas de colores en la mano.',
            brief: 'Ilustración de un chasqui (mensajero inca) corriendo por un tramo de camino empedrado del Qhapaq Ñan en los Andes, con montañas nevadas al fondo y una llama cargada a un lado. En su mano, un quipu: una cuerda principal de la que cuelgan cuerdas de colores con nudos. Un recuadro ampliado explica: "Cada nudo y cada color representa un dato". Estilo educativo, colores naturales.' } },
        { icon: 'Globe', body: 'La **rueda** se inventó en Mesopotamia hace más de 5,000 años. En Mesoamérica se conocía en juguetes, pero no se usó para transportar: no había animales de tiro y el terreno era de selva y montaña.', reveal: [
          { icon: 'Mountain', front: 'Incas (Andes)', back: 'Red de caminos **Qhapaq Ñan**. Los **chasquis** corrían por relevos llevando mensajes. Registraban datos en **quipus**. Las **llamas** cargaban bultos.' },
          { icon: 'Landmark', front: 'Mesopotamia', back: 'Inventaron la **rueda** y la **escritura cuneiforme**, con marcas en forma de cuña sobre tablillas de arcilla.' },
          { icon: 'Sailboat', front: 'Egipto', back: 'El **río Nilo** era su gran camino: barcos de vela y remo. Escribían **jeroglíficos** en **papiro**.' },
          { icon: 'Route', front: 'Roma', back: 'Construyó miles de kilómetros de **calzadas** de piedra para mover ejércitos y comerciantes.' },
          { icon: 'Package', front: 'China', back: 'La **Ruta de la Seda**: caminos de caravanas que llevaban seda, papel y especias hasta Europa. En China se inventó el **papel**.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.3.1'], prompt: 'Une cada cultura con un medio de transporte o comunicación que usó.',
          hint: 'Piensa en su geografía: montañas (incas), selva y ríos (mayas), un gran río en el desierto (Egipto).',
          explain: 'Cada cultura aprovechó lo que tenía: el Nilo para Egipto, las montañas y las llamas para los incas, la selva y los ríos para los mayas.' },
        { leftTitle: 'Cultura', rightTitle: 'Medio', pairs: [
          { id: 'ma', left: 'Mayas', leftIcon: 'Sprout', right: 'Sacbeob y canoas' },
          { id: 'in', left: 'Incas', leftIcon: 'Mountain', right: 'Chasquis y quipus' },
          { id: 'eg', left: 'Egipcios', leftIcon: 'Sun', right: 'Barcos en el Nilo y papiro' },
          { id: 'me', left: 'Mesopotamios', leftIcon: 'Landmark', right: 'La rueda y tablillas de arcilla' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.3.1'], prompt: 'Clasifica: ¿es un medio de **transporte** (mueve personas o cosas) o de **comunicación** (mueve mensajes e información)?',
          explain: 'Algunos medios sirven para las dos cosas: un chasqui transportaba mensajes, y un sacbé servía para que pasaran mensajeros y comerciantes.' },
        { buckets: [
          { id: 'tr', label: 'Transporte', icon: 'Route', color: 'var(--c-maiz-strong)' },
          { id: 'co', label: 'Comunicación', icon: 'MessageCircle', color: 'var(--area-ccss)' },
        ], items: [
          { id: 'x1', text: 'Canoa maya', bucket: 'tr' },
          { id: 'x2', text: 'Estela con jeroglíficos', bucket: 'co' },
          { id: 'x3', text: 'Llama cargada en los Andes', bucket: 'tr' },
          { id: 'x4', text: 'Quipu inca', bucket: 'co' },
          { id: 'x5', text: 'Calzada romana', bucket: 'tr' },
          { id: 'x6', text: 'Códice maya', bucket: 'co' },
        ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.3.1'], ambito: 'conocer',
          prompt: 'Así funcionaba el sistema de relevos de los chasquis. Ordena los pasos.',
          explain: 'Con relevos, ningún mensajero se cansaba demasiado y el mensaje avanzaba rápido, día y noche.' },
        { items: [
          { id: 'c1', text: 'Un funcionario entrega el mensaje o el quipu al primer chasqui' },
          { id: 'c2', text: 'El chasqui corre un tramo corto del camino' },
          { id: 'c3', text: 'Al llegar al siguiente puesto, repite el mensaje a un chasqui descansado' },
          { id: 'c4', text: 'El nuevo chasqui sigue corriendo, y así hasta llegar al destino' },
        ], labels: { start: 'Inicio', end: 'Final' } },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.3.1'], ambito: 'conocer',
          prompt: 'Imagina que eres comerciante maya en Petén y debes llevar muchos costales de cacao a una ciudad lejana que está **río abajo**, a la orilla del gran río Usumacinta. ¿Qué medio te conviene más?',
          explain: 'Por el río, una canoa lleva mucha más carga que una persona a pie y con menos esfuerzo. Por eso los ríos como el Usumacinta y el Pasión fueron grandes rutas de comercio maya.' },
        { options: [
          { id: 'a', text: 'Una canoa por el río, porque lleva más carga con menos esfuerzo', icon: 'Sailboat' },
          { id: 'b', text: 'Una carreta con bueyes', icon: 'Truck', feedback: 'No había bueyes ni caballos en América antes de los europeos.' },
          { id: 'c', text: 'Un chasqui inca', icon: 'Footprints', feedback: 'Los chasquis vivían en los Andes, en América del Sur, muy lejos de Petén.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.3.1'], prompt: '¿Qué era un **sacbé**?' },
        { options: [
          { id: 'a', text: 'Un camino blanco y elevado que unía ciudades mayas' },
          { id: 'b', text: 'Un barco egipcio de vela' },
          { id: 'c', text: 'Una cuerda con nudos para registrar números' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.3.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Los incas usaban llamas para cargar bultos.', answer: true },
          { text: 'Los mayas antiguos transportaban sus cargas en carretas jaladas por caballos.', answer: false, why: 'No había caballos en América antes de la llegada de los europeos.' },
          { text: 'La escritura cuneiforme se hacía sobre tablillas de arcilla.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Cambios tecnológicos y sus efectos ───────────────────────── */
  lesson({
    id: 's03-ccss-2',
    title: 'La tecnología cambia la vida de los pueblos',
    icon: 'Smartphone',
    minutes: 15,
    gancho: 'Tus abuelos escribían cartas que tardaban semanas. Tú haces videollamadas. ¿Qué ganamos con ese cambio? ¿Y qué podríamos perder?',
    objetivos: ['Comparar cambios en los roles familiares, económicos y políticos de las mujeres a través del tiempo y las culturas'],
    resumen: [
      'Un cambio tecnológico es una nueva herramienta o forma de hacer las cosas que transforma la vida de la gente: la imprenta, la electricidad, el automóvil, la radio, internet, el celular.',
      'Efectos en la economía: nuevos trabajos, formas de comprar y vender, envíos de dinero; algunos oficios cambian o desaparecen.',
      'Efectos en la cultura: nuevas formas de comunicarse, aprender y divertirse; las tradiciones pueden difundirse o debilitarse.',
      'Efectos en los valores: la tecnología puede usarse con respeto y responsabilidad, o para dañar (ciberacoso, noticias falsas). La diferencia está en cómo la usamos.',
      'Los roles de las mujeres han variado entre culturas y épocas: han participado en familias, agricultura, comercio, trabajo industrial, educación, movimientos sociales y política, aunque leyes y costumbres limitaron de manera desigual su reconocimiento y sus derechos.',
    ],
    media: {
      id: 's03-ccss-2-linea', kind: 'animation', title: 'De la carta al celular', aspect: '16:9', duration: 45,
      alt: 'Línea del tiempo animada con inventos que cambiaron la comunicación: imprenta, teléfono, radio, televisión, computadora, internet y teléfono inteligente.',
      brief: 'Animación 2D de 45 s. Una línea del tiempo horizontal aparece de izquierda a derecha con íconos: imprenta de tipos móviles (hacia 1450), teléfono (siglo XIX), radio (inicios del siglo XX), televisión (mediados del siglo XX), computadora personal (años ochenta), internet para el público (años noventa), teléfono inteligente (siglo XXI). Debajo, una familia guatemalteca ilustrada cambia: una abuela escribe una carta, luego escucha la radio, y al final una niña hace videollamada con su tío que vive lejos. Narración en español con subtítulos. Sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:3.2.1', 'ccss:4.2.2'], ambito: 'conocer', title: 'Tecnología y roles a través del tiempo',
          prompt: 'Compara cómo distintas tecnologías y condiciones sociales se relacionaron con roles familiares, económicos y políticos de las mujeres en culturas y épocas diferentes.' },
        { icon: 'Cpu', body: 'La comparación histórica evita afirmar que todas las mujeres vivieron lo mismo. Cambiaron las tareas, oportunidades y formas de participación, y también persistieron desigualdades.', reveal: [
          { icon: 'Wheat', front: 'Sociedades agrícolas antiguas', back: 'Las mujeres participaron en agricultura, producción de alimentos, tejidos, comercio y vida familiar; su poder político y reconocimiento variaron entre culturas.' },
          { icon: 'Factory', front: 'Industrialización', back: 'Muchas ingresaron al trabajo fabril remunerado y sostuvieron tareas familiares, a menudo con salarios y derechos desiguales.' },
          { icon: 'Vote', front: 'Siglos XX y XXI', back: 'Movimientos de mujeres impulsaron acceso a educación, voto y cargos públicos; siguen desafíos de representación, cuidados y condiciones laborales.' },
          { icon: 'Factory', front: 'Japón y Corea del Sur', back: 'Usan muchos **robots** en fábricas. Producen más rápido, pero algunos trabajos manuales se reducen y aparecen otros nuevos de programación y mantenimiento.' },
          { icon: 'Smartphone', front: 'Kenia (África)', back: 'Millones de personas **envían y reciben dinero por el celular** sin tener cuenta de banco. Eso ayudó a pequeños comerciantes del campo.' },
          { icon: 'Tractor', front: 'Estados Unidos y Europa', back: 'La **maquinaria agrícola** hace que pocas personas cultiven grandes extensiones; mucha gente dejó el campo para trabajar en ciudades.' },
          { icon: 'Radio', front: 'Guatemala', back: 'Las **radios comunitarias** transmiten en idiomas mayas; hay clases por televisión y radio; las familias reciben **remesas** de parientes en el extranjero y se comunican por videollamada.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.1', 'ccss:4.2.2'], ambito: 'conocer',
          prompt: 'Con ayuda, clasifica evidencias sobre cambios de roles familiares, económicos y políticos de las mujeres a través del tiempo.',
          hint: 'Distingue trabajo y comercio, decisiones públicas y responsabilidades familiares.',
          explain: 'Los roles se superponen y varían por cultura; la clasificación destaca el ámbito principal.' },
        { buckets: [
          { id: 'f', label: 'Familiar', icon: 'House', color: 'var(--c-maiz-strong)' },
          { id: 'e', label: 'Económico', icon: 'Briefcase', color: 'var(--area-ccss)' },
          { id: 'p', label: 'Político', icon: 'Vote', color: 'var(--c-ok)' },
        ], items: [
          { id: 't1', text: 'Trabajo de cuidado compartido en el hogar', bucket: 'f' },
          { id: 't2', text: 'Participación en agricultura, fábricas y comercio', bucket: 'e' },
          { id: 't3', text: 'Organización por el voto y acceso a cargos públicos', bucket: 'p' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.1'], ambito: 'conocer', title: 'Tres tipos de efectos',
          prompt: 'Para analizar un cambio tecnológico, los científicos sociales se preguntan en qué aspectos de la vida influye. Toca cada tarjeta.' },
        { icon: 'Layers', body: 'Un mismo invento puede tener efectos **positivos y negativos** a la vez.', reveal: [
          { icon: 'Coins', front: 'En la economía', back: 'Cómo se produce, se compra, se vende y se trabaja. Ejemplo: un artesano de Totonicapán vende sus tejidos por internet a otros países.' },
          { icon: 'Music', front: 'En la cultura', back: 'Idiomas, costumbres, música, formas de aprender y divertirse. Ejemplo: se graban cuentos en idiomas mayas para que no se olviden; también, música de otros países reemplaza a veces la local.' },
          { icon: 'Scale', front: 'En los valores morales', back: 'Cómo nos tratamos. Ejemplo: respetar la privacidad, no difundir **noticias falsas**, no hacer **ciberacoso** (burlas o amenazas por internet).' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.1'], prompt: 'Clasifica cada efecto de la tecnología: ¿es sobre todo **económico**, **cultural** o de **valores**?',
          hint: 'Dinero y trabajo → economía. Costumbres, idioma y arte → cultura. Cómo tratamos a los demás → valores.',
          explain: 'Separar los efectos ayuda a pensar con orden, aunque en la vida real se mezclan.' },
        { buckets: [
          { id: 'eco', label: 'Economía', icon: 'Coins', color: 'var(--c-maiz-strong)' },
          { id: 'cul', label: 'Cultura', icon: 'Music', color: 'var(--area-ccss)' },
          { id: 'val', label: 'Valores', icon: 'Scale', color: 'var(--c-ok)' },
        ], items: [
          { id: 'e1', text: 'Una tienda de barrio recibe pagos por el celular', bucket: 'eco' },
          { id: 'e2', text: 'Jóvenes suben videos bailando son tradicional', bucket: 'cul' },
          { id: 'e3', text: 'Alguien comparte una foto de un compañero sin permiso', bucket: 'val', feedback: 'Compartir fotos sin permiso irrespeta la privacidad: es un tema de valores.' },
          { id: 'e4', text: 'Una fábrica usa máquinas y necesita menos obreros', bucket: 'eco' },
          { id: 'e5', text: 'Una radio comunitaria transmite noticias en mam', bucket: 'cul' },
          { id: 'e6', text: 'Un grupo decide verificar una noticia antes de reenviarla', bucket: 'val' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['ccss', 'l1'], cnb: ['ccss:3.2.1'], ambito: 'conocer', prompt: 'Lee el caso y responde.' },
        { genre: 'Caso', heading: 'El celular llegó a la aldea', passage:
          'Supongamos que hace unos años llegó la señal de celular a la aldea de doña Marta, en Alta Verapaz. Antes, para saber el precio del cardamomo, ella tenía que viajar hasta el pueblo. Ahora pregunta por mensaje y decide mejor cuándo vender.\n\nSus nietos buscan información para sus tareas y hablan por videollamada con su papá, que trabaja lejos. Pero doña Marta también nota cambios que no le gustan: en la cena, a veces nadie conversa porque todos miran la pantalla, y los niños conocen más canciones de otros países que las de su comunidad.\n\nUn día, a su nieta le llegó un mensaje falso que decía que el agua del pozo estaba envenenada. Antes de reenviarlo, preguntó al comité de agua y descubrió que era mentira.',
          questions: [
            { q: '¿Qué efecto **económico** positivo tuvo el celular para doña Marta?', options: [
              { id: 'a', text: 'Puede conocer el precio del cardamomo sin viajar y vender mejor' },
              { id: 'b', text: 'Sus nietos conocen canciones de otros países' },
              { id: 'c', text: 'En la cena nadie conversa' },
            ], correct: 'a' },
            { q: '¿Qué efecto **cultural** le preocupa a doña Marta?', options: [
              { id: 'a', text: 'Que los niños conozcan menos las canciones de su comunidad' },
              { id: 'b', text: 'Que el precio del cardamomo suba' },
              { id: 'c', text: 'Que la señal sea muy rápida' },
            ], correct: 'a' },
            { q: '¿Qué **valor** practicó la nieta con el mensaje falso?', options: [
              { id: 'a', text: 'La responsabilidad: verificó antes de reenviar' },
              { id: 'b', text: 'La rapidez: lo reenvió a todos de inmediato' },
              { id: 'c', text: 'La indiferencia: no le importó' },
            ], correct: 'a', why: 'Reenviar mentiras puede asustar o dañar a otros. Verificar es usar la tecnología con responsabilidad.' },
          ] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.2.1'], ambito: 'convivir', prompt: 'La tecnología también pone a prueba nuestros valores. ¿Qué harías tú?' },
        { scene: { icon: 'Smartphone', text: 'En el chat del grado alguien sube una foto de un compañero dormido en el bus, con un apodo que se burla de él. Varios ya pusieron caritas de risa.' },
          options: [
            { id: 'a', icon: 'ShieldCheck', text: 'No reacciono con risa, escribo que eso lastima y pido que borren la foto', consequence: 'Otros se animan a apoyar al compañero y la foto se borra. Usaste la tecnología con respeto.', values: ['respeto', 'valentía', 'responsabilidad'], constructive: true },
            { id: 'b', icon: 'MessageCircle', text: 'Le escribo en privado al compañero para apoyarlo y aviso a una persona adulta de confianza', consequence: 'El compañero no se siente solo y un adulto puede ayudar a detener el ciberacoso.', values: ['solidaridad', 'prudencia'], constructive: true },
            { id: 'c', icon: 'Smile', text: 'Pongo una carita de risa, total es solo una broma', consequence: 'Cada reacción hace que la burla crezca. Para el compañero no es broma: es humillación.', values: [], constructive: false },
            { id: 'd', icon: 'Share2', text: 'La reenvío a otro grupo', consequence: 'La foto se difunde más y el daño se multiplica. Compartir contenido sin permiso irrespeta la privacidad.', values: [], constructive: false },
          ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['ccss', 'l1'], cnb: ['ccss:3.2.1', 'ccss:4.2.2'], ambito: 'ser',
          prompt: 'Compara roles de las mujeres en dos épocas o culturas: incluye un cambio familiar, uno económico y uno político, y evita afirmar que todas tuvieron la misma experiencia.' },
        { minWords: 30, placeholder: 'En el primer contexto... En el segundo...', model: 'En sociedades agrícolas las mujeres participaron en familia y producción. Con la industrialización aumentó el trabajo fabril; movimientos posteriores ampliaron voto y cargos, aunque persistieron desigualdades.',
          rubric: ['Comparo dos contextos', 'Incluyo los tres ámbitos', 'Reconozco diversidad y desigualdades'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.1', 'ccss:4.2.2'], prompt: '¿Qué comparación reconoce cambios en roles familiares, económicos y políticos de las mujeres a través del tiempo?' },
        { options: [
          { id: 'a', text: 'Participaron en producción y familias desde épocas antiguas; luego ampliaron trabajo remunerado, educación, voto y cargos, con desigualdades persistentes' },
          { id: 'b', text: 'Las mujeres nunca participaron en la economía antes del siglo XXI' },
          { id: 'c', text: 'Todas las culturas asignaron exactamente los mismos roles' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.1', 'ccss:4.2.2'], prompt: 'Comprueba la evolución de roles familiares, económicos y políticos de las mujeres en culturas y épocas distintas.' },
        { statements: [
          { text: 'Las mujeres participaron en actividades económicas antes de obtener iguales derechos políticos.', answer: true },
          { text: 'La ampliación del voto y la educación eliminó de inmediato toda desigualdad.', answer: false },
          { text: 'Los roles variaron según época, cultura y condición social.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Centroamérica y el mundo ───────────────────────── */
  lesson({
    id: 's03-ccss-3',
    title: 'Centroamérica produce y se conecta con el mundo',
    icon: 'Ship',
    minutes: 15,
    gancho: 'El café que se cultiva en Huehuetenango puede terminar en una taza en Japón, y el celular de tu casa quizá se fabricó en Asia. ¿Cómo viajan los productos entre continentes?',
    objetivos: ['Relacionar sectores productivos, actividades laborales y economía informal en Guatemala y Centroamérica'],
    resumen: [
      'Sector primario: obtiene recursos de la naturaleza (agricultura, ganadería, pesca, minería). Secundario: transforma materias primas (industria, maquilas, construcción). Terciario: ofrece servicios (comercio, transporte, turismo, educación, salud).',
      'Centroamérica exporta café, banano, azúcar, cardamomo, textiles y otros productos; Panamá ofrece el servicio de su canal y Costa Rica fabrica dispositivos médicos.',
      'Exportar es vender a otros países; importar es comprarles. Guatemala importa combustibles, maquinaria, medicinas y aparatos electrónicos.',
      'Los países firman tratados comerciales para facilitar ese intercambio. Estados Unidos es el principal socio comercial de Guatemala; también se comercia con México, Centroamérica, Europa y Asia.',
      'En Guatemala hay trabajo agrícola, industrial, comercial y de servicios con condiciones diversas. La economía informal suele carecer de contrato, registro, prestaciones e ingresos estables; informal no significa necesariamente ilegal.',
    ],
    media: {
      id: 's03-ccss-3-rutas', kind: 'diagram', title: 'Rutas del comercio centroamericano', aspect: '16:9',
      alt: 'Mapamundi centrado en América con flechas que salen de Centroamérica hacia Norteamérica, Europa y Asia llevando café, banano y textiles, y flechas que llegan con combustibles, maquinaria y electrónicos.',
      brief: 'Mapamundi centrado en América. Centroamérica resaltada. Flechas verdes de exportación salen hacia Estados Unidos (café, banano, textiles, azúcar), Europa (café, banano), Asia (café, azúcar) y el mundo árabe (cardamomo). Flechas azules de importación llegan desde Estados Unidos y Asia (combustibles, maquinaria, electrónicos, medicinas). Se marcan puertos: Puerto Quetzal y Santo Tomás de Castilla (Guatemala) y el Canal de Panamá con un barco portacontenedores. Leyenda "exportación" e "importación". Sin cifras ni marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:3.4.1', 'ccss:4.1.1', 'ccss:4.1.5'], ambito: 'conocer', title: 'Sectores y condiciones de trabajo',
          prompt: 'Las **actividades económicas** son las que realizan las personas para producir bienes y servicios. Se agrupan en tres sectores. Toca cada tarjeta.' },
        { icon: 'Factory', body: 'Sigue un producto: el **café** se cultiva (primario), se tuesta y empaca (secundario) y se vende en una cafetería o se transporta (terciario).', reveal: [
          { icon: 'Wheat', front: 'Primario', back: 'Obtiene recursos **de la naturaleza**: agricultura, ganadería, pesca, minería. Ejemplo: cortar café en la finca.' },
          { icon: 'Factory', front: 'Secundario', back: '**Transforma** materias primas en productos: industria, maquilas de ropa, ingenios de azúcar, construcción.' },
          { icon: 'Store', front: 'Terciario', back: 'Ofrece **servicios**: comercio, transporte, turismo, bancos, educación, salud, centros de llamadas.' },
          { icon: 'FileText', front: 'Trabajo formal', back: 'Suele tener registro, contrato, salario acordado y prestaciones; las condiciones concretas varían por actividad.' },
          { icon: 'ShoppingBasket', front: 'Economía informal', back: 'Suele operar sin contrato o registro, con ingresos variables y sin prestaciones. Es un rasgo de las condiciones, no sinónimo de delito.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.4.1'], ambito: 'conocer',
          prompt: 'Guatemala es uno de los mayores productores de **cardamomo** del mundo, pero en Guatemala casi no se consume. ¿Qué crees que se hace con la mayor parte?',
          explain: 'Se **exporta**: se vende a otros países, sobre todo del Oriente Medio y Asia, donde se usa mucho en el café y la comida. El comercio conecta a Alta Verapaz con otros continentes.' },
        { options: [
          { id: 'a', text: 'Se vende a otros países', icon: 'Ship' },
          { id: 'b', text: 'Se guarda en bodegas para siempre', icon: 'Package', feedback: 'Guardarlo no daría ingresos a las familias productoras.' },
          { id: 'c', text: 'Se tira porque no se usa', icon: 'Trash2', feedback: 'Al contrario: es un producto muy valioso para muchas familias de Alta Verapaz.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.4.1'], prompt: 'Clasifica cada actividad en su sector.',
          hint: '¿Saca algo de la naturaleza, lo transforma o presta un servicio a las personas?',
          explain: 'Un ingenio convierte la caña en azúcar (transforma: secundario). Un guía de Tikal no produce un objeto: ofrece un servicio (terciario).' },
        { buckets: [
          { id: 'p', label: 'Primario', icon: 'Wheat', color: 'var(--c-ok)' },
          { id: 's', label: 'Secundario', icon: 'Factory', color: 'var(--c-maiz-strong)' },
          { id: 't', label: 'Terciario', icon: 'Store', color: 'var(--area-ccss)' },
        ], items: [
          { id: 'a1', text: 'Sembrar banano en Izabal', bucket: 'p' },
          { id: 'a2', text: 'Un ingenio que produce azúcar', bucket: 's' },
          { id: 'a3', text: 'Una guía turística en Tikal', bucket: 't' },
          { id: 'a4', text: 'Pescar camarón en el Pacífico', bucket: 'p' },
          { id: 'a5', text: 'Una fábrica que cose ropa para exportar', bucket: 's' },
          { id: 'a6', text: 'Un camión que lleva café al puerto', bucket: 't' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.4.1'], ambito: 'conocer', title: '¿Qué produce cada país de Centroamérica?',
          prompt: 'Los siete países del istmo centroamericano tienen economías parecidas, pero cada uno tiene sus fortalezas. Toca cada tarjeta.' },
        { icon: 'Map', body: 'Casi todos exportan productos **agrícolas**, pero hoy también venden **manufacturas** y **servicios**.', reveal: [
          { icon: 'Coffee', front: 'Guatemala', back: 'Café, banano, azúcar, **cardamomo**, textiles y vestuario, frutas y verduras. También recibe muchas **remesas** y turismo.' },
          { icon: 'Shirt', front: 'El Salvador y Honduras', back: 'Textiles de maquila, café; Honduras también banano, camarón y aceite de palma.' },
          { icon: 'Stethoscope', front: 'Costa Rica', back: '**Dispositivos médicos**, piña, banano y turismo de naturaleza.' },
          { icon: 'Ship', front: 'Panamá', back: 'El **Canal de Panamá** une los océanos Atlántico y Pacífico: cobra por el paso de barcos de todo el mundo. Es un servicio (sector terciario).' },
          { icon: 'Beef', front: 'Nicaragua y Belice', back: 'Nicaragua: carne, café, oro. Belice: azúcar, cítricos y turismo en su arrecife.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.4.1'], ambito: 'conocer', title: 'Exportar, importar y tratados',
          prompt: 'Ningún país produce todo lo que necesita. Por eso **comercia** con otros. Toca cada tarjeta.' },
        { icon: 'Handshake', body: 'Por los puertos de Guatemala (**Puerto Quetzal** en el Pacífico y **Santo Tomás de Castilla** en el Atlántico) salen y entran barcos de todo el mundo.', reveal: [
          { icon: 'Upload', front: 'Exportar', back: '**Vender** productos a otros países. Trae dinero y empleos al país.' },
          { icon: 'Download', front: 'Importar', back: '**Comprar** productos de otros países. Guatemala importa combustibles, maquinaria, medicinas y electrónicos.' },
          { icon: 'ScrollText', front: 'Tratados comerciales', back: 'Acuerdos entre países para facilitar el comercio, por ejemplo bajando impuestos a los productos. Centroamérica tiene tratados con Estados Unidos, México, la Unión Europea y otros.' },
          { icon: 'Earth', front: 'Socios principales', back: '**Estados Unidos** es el principal socio comercial de Guatemala. También son importantes México, los países centroamericanos, la Unión Europea y países de Asia como China.' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.4.1'], prompt: 'Une cada país centroamericano con un producto o servicio que ofrece al mundo.',
          explain: 'Cada país aprovecha su geografía: Panamá su posición entre dos océanos; Guatemala sus suelos y climas variados.' },
        { leftTitle: 'País', rightTitle: 'Producto o servicio', pairs: [
          { id: 'gt', left: 'Guatemala', leftIcon: 'Coffee', right: 'Cardamomo y café' },
          { id: 'pa', left: 'Panamá', leftIcon: 'Ship', right: 'El paso de barcos por su canal' },
          { id: 'cr', left: 'Costa Rica', leftIcon: 'Stethoscope', right: 'Dispositivos médicos y piña' },
          { id: 'bz', left: 'Belice', leftIcon: 'Fish', right: 'Azúcar y turismo en su arrecife' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.4.1', 'ccss:4.1.1', 'ccss:4.1.5'], ambito: 'conocer',
          prompt: 'Una vendedora compra fruta del sector primario y la ofrece sin contrato ni prestaciones, con ingresos que cambian cada día. ¿Cómo se relacionan actividad y condición laboral?',
          explain: 'El comercio pertenece al sector terciario y los rasgos descritos corresponden a economía informal; eso no vuelve deshonesto el trabajo.' },
        { options: [
          { id: 'a', text: 'Sector terciario y economía informal por falta de contrato, prestaciones e ingreso estable' },
          { id: 'b', text: 'Sector primario y trabajo formal por vender un producto agrícola' },
          { id: 'c', text: 'Actividad ilegal únicamente porque el ingreso varía' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.4.1', 'ccss:4.1.1', 'ccss:4.1.5'], prompt: 'Una maquila registrada transforma tela, paga salario y exporta camisas. ¿Qué relación describe actividad y condición de trabajo?' },
        { options: [
          { id: 'a', text: 'Sector secundario, exportación y empleo con rasgos formales' },
          { id: 'b', text: 'Sector primario, importación y economía informal' },
          { id: 'c', text: 'Sector terciario porque toda fábrica presta servicios' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.4.1', 'ccss:4.1.1', 'ccss:4.1.5'], prompt: 'Comprueba sectores productivos, actividades y condiciones de trabajo formal e informal.' },
        { statements: [
          { text: 'Agricultura, industria y servicios pueden tener condiciones laborales distintas.', answer: true },
          { text: 'La economía informal suele carecer de contrato y prestaciones.', answer: true },
          { text: 'Informal significa necesariamente delictivo.', answer: false },
        ] },
      ),
      cierre({ areas: ['ccss'], cnb: [] }, ['Comparo los medios de comunicación y transporte de culturas antiguas', 'Analizo los efectos de la tecnología en la economía, la cultura y los valores', 'Explico qué produce Centroamérica y con quién comercia'],
        ['Revisaré las etiquetas de tres productos de mi casa para ver de qué país vienen', 'Verificaré una noticia antes de compartirla']),
    ],
  }),
];
