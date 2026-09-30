import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 33 · Unidad 4 "Fortaleciendo nuestro futuro"
 * Tema generador: Reporteros de mi comunidad
 * Formas de registrar el pasado y leyendas · lectura silenciosa e instituciones democráticas ·
 * trabajo en Guatemala con porcentajes y gráficas · biotecnología, glándulas, higiene y feria escolar en video.
 */
export default semana({
  id: 's33',
  unidad: 4,
  semana: 33,
  kind: 'aprendizaje',
  temaGenerador: 'Reporteros de mi comunidad',
  title: 'Reporteros de mi comunidad',
  subtitle: 'Investigar, leer, graficar y grabar lo que somos',
  icon: 'Newspaper',
  color: 'var(--area-ccss)',
  contexto: 'En una escuela de San Juan Comalapa, Chimaltenango, sexto grado formó un "equipo de reporteros" para crear el archivo de su comunidad. Unos recogen leyendas con las abuelas, otros encuestan a las familias sobre su trabajo, otros investigan qué instituciones cuidan la democracia y otros graban la feria escolar de ciencias. Esta semana serás parte del equipo: aprenderás a investigar, a leer mejor, a leer gráficas y a contar con video lo que tu comunidad es.',
  ejes: ['vida-ciudadana', 'multiculturalidad', 'trabajo', 'tecnologia'],
  media: {
    id: 's33-portada', kind: 'video', title: 'El equipo de reporteros', aspect: '16:9', duration: 60,
    alt: 'Niñas y niños de sexto grado entrevistan a una abuela, cuentan resultados de una encuesta, leen en la biblioteca y graban con un celular la feria escolar.',
    brief: 'Video o animación 2D de 60 s en un pueblo del altiplano con murales de colores (inspirado en Comalapa, sin reproducir murales reales). Cuatro escenas: (1) dos estudiantes graban con una grabadora la leyenda que cuenta una abuela con güipil kaqchikel; (2) un grupo hace una encuesta de casa en casa con tabla de apuntes; (3) una niña lee en silencio en la biblioteca y anota ideas; (4) estudiantes graban con celular la feria de ciencias. Sobreimpreso final: "Investigar es cuidar la memoria y construir el futuro". Música de marimba suave. Personajes ficticios, diversidad de género y pueblos, sin marcas.',
  },
  badge: { id: 'medalla-s33', name: 'Reportero comunitario', icon: 'Mic', desc: 'Completaste la semana 33 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's33-d1-huellas-pasado',
      title: 'Las huellas que deja el pasado',
      icon: 'ScrollText',
      minutes: 14,
      day: 1,
      gancho: 'Si tu abuela no hubiera contado nunca sus historias, ¿qué sabrías hoy de tu comunidad de hace 60 años?',
      objetivos: ['Esquematizar cómo registraron su pasado pueblos originarios de distintos continentes', 'Recoger leyendas e historias de tu comunidad', 'Elegir la técnica de investigación social adecuada', 'Relacionar conceptos y sacar conclusiones al comparar'],
      resumen: [
        'Los pueblos originarios registraron su pasado de muchas formas: códices (mayas), quipus de cuerdas y nudos (incas), tradición oral cantada (griots de África occidental), pinturas en roca (pueblos aborígenes de Australia) y huesos inscritos (antigua China).',
        'Las leyendas, cuentos e historias de la comunidad son fuentes orales que ayudan a reconstruir la historia.',
        'Técnicas de investigación social: entrevista (conversar con preguntas preparadas), encuesta (mismas preguntas a muchas personas), observación (mirar y anotar) e historia de vida (relato de la vida de una persona).',
        'Al leer, conecta el concepto principal con conceptos relacionados; al compararlos, puedes sacar conclusiones.',
      ],
      media: {
        id: 's33-d1-registros', kind: 'diagram', title: 'Cinco continentes, cinco formas de recordar', aspect: '16:9',
        alt: 'Mapamundi con cinco íconos: un códice en América, un quipu en los Andes, un griot con instrumento de cuerdas en África, pinturas en roca en Australia y un hueso inscrito en China.',
        brief: 'Infografía sobre un mapamundi simplificado (sin fronteras políticas). En cada región, una viñeta circular: MESOAMÉRICA "Códices mayas" (libro plegado en acordeón con glifos); ANDES "Quipus incas" (cuerdas de colores con nudos); ÁFRICA OCCIDENTAL "Griots: historia cantada" (persona con kora estilizada, sin rasgos reales); AUSTRALIA "Pinturas en roca de pueblos aborígenes" (siluetas de animales en ocre); CHINA ANTIGUA "Huesos con inscripciones" (hueso plano con caracteres). Leyenda abajo: escrito / oral / pintado / con nudos. Estilo plano, colores tierra.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'l1'], cnb: ['ccss:5.1.3'], ambito: 'conocer', title: 'Cada pueblo guarda su memoria',
            prompt: 'No todos los pueblos escribieron con letras. Aun así, **todos** encontraron formas de recordar su historia. Toca cada tarjeta.' },
          { icon: 'History', body: 'Una **fuente histórica** es todo aquello que nos da información del pasado: puede ser **escrita**, **oral**, **pintada** o un **objeto**.', reveal: [
            { icon: 'BookOpen', front: 'América: códices mayas', back: 'Libros plegados en forma de acordeón, pintados con **glifos** sobre papel de corteza. Registraban fechas, astronomía y rituales.' },
            { icon: 'Link', front: 'Andes: quipus incas', back: 'Cuerdas de colores con **nudos**. Según el tipo y la posición del nudo, guardaban cantidades como censos y tributos.' },
            { icon: 'Music', front: 'África: los griots', back: 'En África occidental, los griots **cantan y narran** la historia de familias y reinos, de generación en generación.' },
            { icon: 'Paintbrush', front: 'Oceanía: pinturas en roca', back: 'Los pueblos aborígenes de Australia **pintan en rocas** animales, caminos y relatos desde hace miles de años.' },
            { icon: 'Bone', front: 'Asia: huesos inscritos', back: 'En la antigua China se **grababan caracteres** en huesos y caparazones de tortuga: son de los escritos chinos más antiguos.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['ccss'], cnb: ['ccss:5.1.3'], ambito: 'conocer',
            prompt: 'Completa el **esquema**: une cada pueblo con la forma en que registró su pasado.',
            explain: 'Estas formas son distintas, pero cumplen la misma función: que el conocimiento no se pierda. Todas merecen el mismo respeto.' },
          { leftTitle: 'Pueblo', rightTitle: 'Forma de registro', pairs: [
            { id: 'may', left: 'Mayas (Mesoamérica)', leftIcon: 'Sun', right: 'Códices pintados con glifos' },
            { id: 'inc', left: 'Incas (Andes)', leftIcon: 'Mountain', right: 'Cuerdas con nudos (quipus)' },
            { id: 'gri', left: 'Pueblos de África occidental', leftIcon: 'Drum', right: 'Historia cantada por griots' },
            { id: 'abo', left: 'Pueblos aborígenes de Australia', leftIcon: 'Paintbrush', right: 'Pinturas en roca' },
            { id: 'chi', left: 'Antigua China', leftIcon: 'Bone', right: 'Caracteres grabados en huesos' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'ccss'], cnb: ['ccss:6.1.4', 'l1:4.1.4', 'l1:4.1.5'], ambito: 'conocer',
            prompt: 'Lee en silencio la leyenda que grabaron los reporteros y responde. Fíjate en cómo se **conectan** las ideas.',
            media: { id: 's33-d1-cadejo', kind: 'audio', title: 'La abuela cuenta la leyenda', duration: 70,
              alt: 'Voz de una abuela que narra con calma la leyenda del Cadejo, con sonidos de noche: grillos y viento.',
              brief: 'Audio de 70 s: voz femenina mayor, cálida y pausada, con acento guatemalteco, narra la versión del texto de la leyenda del Cadejo. Fondo nocturno suave (grillos, viento, un perro lejano). Sin música de miedo ni efectos que asusten; el tono es de relato familiar alrededor del fuego. Incluir al inicio: "Esto me lo contaba mi abuelo…".' } },
          { genre: 'Leyenda (fuente oral)', heading: 'El Cadejo', passage:
            '"Esto me lo contaba mi abuelo", dice doña Juana. En muchos pueblos de Guatemala se cuenta que, por las noches, aparece un perro grande de ojos rojos: **el Cadejo**.\n\nDicen que hay dos. El **cadejo blanco** acompaña a quienes caminan solos de noche y los protege hasta llegar a su casa. El **cadejo negro**, en cambio, persigue a quienes andan en malos pasos.\n\nLa leyenda cambia de un pueblo a otro, pero siempre deja una enseñanza: cuidarse en el camino y portarse bien. Por eso, las leyendas no son solo cuentos: nos dicen **cómo pensaba y qué valoraba** la gente de antes.',
            questions: [
              { q: '¿Qué tipo de fuente histórica es esta leyenda?', options: [
                { id: 'a', text: 'Una fuente oral, porque se transmite contándola' },
                { id: 'b', text: 'Un objeto arqueológico' },
                { id: 'c', text: 'Un documento oficial del gobierno' },
              ], correct: 'a', why: 'La leyenda pasa de voz en voz: por eso es una fuente oral.' },
              { q: 'El concepto principal es "leyenda". ¿Qué concepto relacionado aparece en el texto?', options: [
                { id: 'a', text: 'Enseñanza (valores de la gente de antes)' },
                { id: 'b', text: 'Fotosíntesis' },
                { id: 'c', text: 'Porcentaje' },
              ], correct: 'a', why: 'El texto conecta la leyenda con la enseñanza que deja y con lo que valoraba la gente.' },
              { q: 'Al comparar al cadejo blanco con el negro, ¿qué conclusión puedes sacar?', options: [
                { id: 'a', text: 'La leyenda usa dos personajes opuestos para enseñar qué conducta es buena' },
                { id: 'b', text: 'Los dos cadejos hacen exactamente lo mismo' },
                { id: 'c', text: 'La leyenda prueba que los cadejos existen' },
              ], correct: 'a', why: 'Comparar conceptos opuestos (proteger / perseguir) te lleva a la conclusión: la leyenda enseña a portarse bien.' },
            ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['pyd', 'ccss'], cnb: ['pyd:2.2.2'], ambito: 'hacer',
            prompt: 'El equipo de reporteros necesita elegir **técnicas de investigación social**. Clasifica cada situación en la técnica que conviene.',
            hint: 'Pregunta: ¿hablo con UNA persona a fondo, pregunto lo mismo a MUCHAS, o solo MIRO y anoto?',
            explain: 'La entrevista profundiza con una persona; la encuesta junta datos de muchas personas para contarlos; la observación registra lo que ves sin intervenir.' },
          { buckets: [
            { id: 'ent', label: 'Entrevista', icon: 'Mic', color: 'var(--area-l1)' },
            { id: 'enc', label: 'Encuesta', icon: 'ClipboardList', color: 'var(--area-mat)' },
            { id: 'obs', label: 'Observación', icon: 'Eye', color: 'var(--area-cnt)' },
          ], items: [
            { id: 't1', text: 'Conocer cómo era la escuela hace 50 años, según el primer maestro del pueblo', bucket: 'ent' },
            { id: 't2', text: 'Saber en qué trabajan 40 familias del cantón', bucket: 'enc' },
            { id: 't3', text: 'Registrar cuántas personas pasan por el mercado un día de plaza', bucket: 'obs' },
            { id: 't4', text: 'Preguntar a todos los grados qué leyenda conocen', bucket: 'enc' },
            { id: 't5', text: 'Escuchar a una tejedora contar cómo aprendió su oficio', bucket: 'ent', feedback: 'Cuando la persona cuenta su vida completa, también se llama historia de vida, que se hace entrevistando.' },
            { id: 't6', text: 'Anotar qué ocurre durante una procesión sin interrumpir', bucket: 'obs' },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['pyd', 'ccss', 'l1'], cnb: ['pyd:2.2.2', 'ccss:6.1.4'], ambito: 'hacer',
            prompt: 'Vas a **recoger una leyenda** de tu comunidad con una entrevista. Ordena los pasos.',
            explain: 'Pedir permiso y agradecer muestra respeto a quien comparte su memoria. Anotar la fuente (quién, dónde, cuándo) hace que tu registro sea útil para la historia.' },
          { items: [
            { id: 'o1', text: 'Preparar preguntas y pedir permiso a la persona', icon: 'ClipboardList' },
            { id: 'o2', text: 'Escuchar con atención y grabar o anotar el relato', icon: 'Mic' },
            { id: 'o3', text: 'Anotar quién lo contó, dónde y cuándo', icon: 'PenLine' },
            { id: 'o4', text: 'Agradecer y compartir el resultado con la comunidad', icon: 'HeartHandshake' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['ef', 'l1', 'ccss'], cnb: ['ef:1.4.9', 'ccss:6.1.4'], ambito: 'convivir',
            prompt: 'El equipo presentará la leyenda del Cadejo en el acto cívico. ¿Cómo lo hacen?' },
          { scene: { icon: 'Users', text: 'Tienen 3 minutos. **Pedro** quiere leerla rápido en el micrófono. **Ixchel** propone contarla con **gestos y mímica**: una persona narra y el resto actúa sin hablar.' }, options: [
            { id: 'a', icon: 'FileText', text: 'Leerla rápido sin moverse', consequence: 'Se escucha la historia, pero muchos niños pequeños se distraen y no entienden bien.', values: ['Rapidez'], constructive: false },
            { id: 'b', icon: 'PersonStanding', text: 'Narrar y actuar con gestos y mímica, practicando antes', consequence: 'El público ríe y pone atención. Los gestos grandes (caminar asustado, el perro que acompaña) ayudan a entender la historia sin palabras.', values: ['Creatividad', 'Trabajo en equipo', 'Expresión corporal'], constructive: true },
            { id: 'c', icon: 'Smile', text: 'Que cada quien actúe como quiera, sin ensayar', consequence: 'Todos se mueven al mismo tiempo y nadie entiende qué pasa. La mímica necesita acuerdos y práctica.', values: ['Espontaneidad'], constructive: false },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.1.3'], prompt: 'Boleto de salida: ¿qué pueblo registraba cantidades con **cuerdas y nudos**?' },
          { options: [
            { id: 'a', text: 'Los incas, con los quipus', icon: 'Link' },
            { id: 'b', text: 'Los mayas, con los códices', icon: 'BookOpen', feedback: 'Los códices mayas eran libros pintados con glifos, no cuerdas.' },
            { id: 'c', text: 'Los pueblos aborígenes de Australia', icon: 'Paintbrush', feedback: 'Ellos registraron relatos en pinturas sobre roca.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.2.2'], prompt: 'Quieres saber **cuántas familias** de tu aldea tienen huerto. ¿Qué técnica usas?' },
          { options: [
            { id: 'a', text: 'Una encuesta con la misma pregunta a muchas familias', icon: 'ClipboardList' },
            { id: 'b', text: 'Una entrevista larga a una sola persona', icon: 'Mic', feedback: 'Una sola persona no te dice cuántas familias tienen huerto.' },
            { id: 'c', text: 'Inventar el dato', icon: 'X', feedback: 'Un dato inventado no sirve para investigar.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['ccss', 'pyd'], cnb: ['ccss:6.1.4'] }, ['Explico cómo registraron su pasado pueblos de distintos continentes', 'Sé recoger una leyenda con respeto', 'Elijo entre entrevista, encuesta y observación'],
          ['Pediré a un adulto mayor que me cuente una leyenda', 'Anotaré quién me la contó, dónde y cuándo', 'Compartiré la leyenda con mi grado']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's33-d2-lectores-veloces',
      title: 'Leer rápido, investigar mejor',
      icon: 'BookOpen',
      minutes: 14,
      day: 2,
      gancho: '¿Mueves los labios cuando lees en silencio? ¿Regresas a leer la misma línea varias veces?',
      objetivos: ['Mejorar tu lectura silenciosa evitando la subvocalización y la regresión', 'Usar la tecnología para buscar información y comunicarte', 'Juzgar si los datos de una fuente son verdaderos', 'Investigar qué hacen las instituciones que cuidan la democracia'],
      resumen: [
        'Subvocalizar es pronunciar en voz baja o mover los labios al leer; la regresión es regresar sin necesidad a lo ya leído. Ambas hacen lenta la lectura.',
        'Para leer más rápido y entender: lee por grupos de palabras, sigue la línea con la vista y haz preguntas antes de leer.',
        'La tecnología (computadora, celular, correo electrónico, radio comunitaria) sirve para buscar información y comunicarse; hay que revisar quién publica y cuándo.',
        'Instituciones que garantizan la democracia: Tribunal Supremo Electoral (elecciones), Congreso (leyes), Corte de Constitucionalidad (defiende la Constitución), Procurador de los Derechos Humanos y Contraloría General de Cuentas (vigila el uso del dinero público).',
      ],
      media: {
        id: 's33-d2-ojos', kind: 'animation', title: 'Así se mueven tus ojos al leer', aspect: '16:9', duration: 50,
        alt: 'Animación de unos ojos que saltan por grupos de palabras en una línea de texto, comparados con otros que van palabra por palabra y regresan.',
        brief: 'Animación 2D de 50 s. Pantalla dividida: ARRIBA "Lector lento": un punto de mirada avanza palabra por palabra, a veces regresa (flecha roja "regresión") y aparece un globito con labios moviéndose ("subvocalización"). ABAJO "Lector ágil": la mirada salta por grupos de 3-4 palabras (resaltados en amarillo) sin regresar. Cronómetros en cada mitad; el de abajo termina antes. Texto de ejemplo en español sobre el Tribunal Supremo Electoral. Narración infantil y subtítulos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1'], cnb: ['l1:4.1.7'], ambito: 'conocer', title: 'Dos hábitos que frenan tu lectura',
            prompt: 'Los reporteros tienen que leer mucho para investigar. Descubre qué hace lenta la lectura silenciosa y cómo corregirlo.' },
          { icon: 'Eye', body: 'Al leer en silencio, tus **ojos** deben ir más rápido que tu voz. Si "hablas por dentro", lees a la velocidad del habla.', reveal: [
            { icon: 'VolumeX', front: 'Subvocalización', back: 'Pronunciar las palabras en voz baja o **mover los labios**. Solución: pon un dedo sobre tus labios para notar si se mueven y concéntrate en ver las palabras, no en decirlas.' },
            { icon: 'RotateCw', front: 'Regresión', back: '**Volver atrás** sin necesidad. Solución: sigue la línea con una tarjeta que tape lo ya leído.' },
            { icon: 'Layers', front: 'Leer por grupos', back: 'Mira **3 o 4 palabras** a la vez: "el Tribunal Supremo Electoral" es una sola idea.' },
            { icon: 'Search', front: 'Preguntar antes', back: 'Lee el título y pregúntate **qué quieres saber**: así tus ojos buscan la información.' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['l1', 'mat'], cnb: ['l1:4.1.6'], ambito: 'hacer',
            prompt: 'La velocidad lectora se mide en **palabras por minuto**. Supongamos que Andrea leyó en silencio un texto de **360 palabras** en **3 minutos** y lo entendió. ¿Cuántas palabras por minuto leyó?',
            hint: 'Divide las palabras entre los minutos.',
            explain: '360 ÷ 3 = 120 palabras por minuto. Lo importante no es solo la rapidez: también debes entender lo que lees.' },
          { answer: 120, unit: 'palabras por minuto', misconceptions: [{ value: 1080, msg: 'Multiplicaste. Para saber cuántas palabras lee en UN minuto, divide.' }] },
        ),
        S.reading(
          { fase: 'construir', areas: ['fc', 'l1'], cnb: ['fc:3.4.2', 'l1:4.1.6', 'l1:4.1.7'], ambito: 'conocer',
            prompt: 'Lee en silencio **por grupos de palabras**, sin mover los labios y sin regresar. Luego responde.',
            media: { id: 's33-d2-instituciones', kind: 'image', title: 'Instituciones que cuidan la democracia', aspect: '4:3',
              alt: 'Cinco edificios ilustrados, cada uno con un ícono: urna de votación, martillo de juez, libro de leyes, escudo de derechos humanos y lupa sobre monedas.',
              brief: 'Ilustración plana de una "calle de la democracia" con cinco edificios genéricos (NO reproducir fachadas ni logotipos reales), cada uno con un rótulo y un ícono: TRIBUNAL SUPREMO ELECTORAL (urna), CONGRESO DE LA REPÚBLICA (libro de leyes), CORTE DE CONSTITUCIONALIDAD (Constitución con escudo), PROCURADOR DE LOS DERECHOS HUMANOS (mano protegiendo personas), CONTRALORÍA GENERAL DE CUENTAS (lupa sobre monedas). Ciudadanos diversos caminan por la calle. Colores del área de Formación Ciudadana.' } },
          { genre: 'Texto informativo', heading: 'Quién cuida nuestra democracia', passage:
            'En una democracia, el poder no lo tiene una sola persona. Varias **instituciones** se reparten tareas y se vigilan entre sí.\n\nEl **Tribunal Supremo Electoral** organiza las elecciones y cuenta los votos. El **Congreso de la República** hace las leyes y aprueba el presupuesto del país. La **Corte de Constitucionalidad** revisa que ninguna ley ni decisión vaya contra la Constitución.\n\nEl **Procurador de los Derechos Humanos** investiga cuando alguien denuncia que sus derechos no se respetan. La **Contraloría General de Cuentas** vigila cómo se usa el dinero público.\n\nPara saber si una institución **cumple bien** su función, la ciudadanía puede leer sus informes, escuchar a varias fuentes y preguntar a sus representantes.',
            questions: [
              { q: '¿Qué institución organiza las elecciones?', options: [
                { id: 'a', text: 'El Tribunal Supremo Electoral' },
                { id: 'b', text: 'La Contraloría General de Cuentas' },
                { id: 'c', text: 'El Congreso de la República' },
              ], correct: 'a' },
              { q: 'Si una municipalidad gasta mal el dinero de una obra, ¿qué institución lo revisa?', options: [
                { id: 'a', text: 'La Contraloría General de Cuentas' },
                { id: 'b', text: 'El Tribunal Supremo Electoral' },
                { id: 'c', text: 'Ninguna, no se puede revisar' },
              ], correct: 'a', why: 'La Contraloría vigila el uso del dinero público.' },
              { q: '¿Por qué el texto dice que las instituciones "se vigilan entre sí"?', options: [
                { id: 'a', text: 'Para que nadie concentre todo el poder' },
                { id: 'b', text: 'Porque no confían en la ciudadanía' },
                { id: 'c', text: 'Para gastar más dinero' },
              ], correct: 'a', why: 'Repartir y vigilar el poder evita abusos: es una base de la democracia.' },
            ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l2', 'l1'], cnb: ['l2:3.1.6', 'l1:3.4.1'], ambito: 'conocer',
            prompt: 'Los reporteros usan la **tecnología** con dos fines: **buscar información** o **comunicarse**. Clasifica cada uso.',
            explain: 'Una computadora o un celular sirven para ambas cosas. En muchas comunidades, la radio comunitaria y los altoparlantes también son medios importantes para comunicarse.' },
          { buckets: [
            { id: 'bus', label: 'Buscar información', icon: 'Search', color: 'var(--area-l2)' },
            { id: 'com', label: 'Comunicarse', icon: 'MessagesSquare', color: 'var(--area-l1)' },
          ], items: [
            { id: 'u1', text: 'Usar un buscador de internet para conocer el pronóstico del clima', icon: 'Laptop', bucket: 'bus' },
            { id: 'u2', text: 'Enviar un correo electrónico a la municipalidad pidiendo una entrevista', icon: 'Mail', bucket: 'com' },
            { id: 'u3', text: 'Ver un video educativo sobre los quipus', icon: 'Video', bucket: 'bus' },
            { id: 'u4', text: 'Anunciar la feria escolar en la radio comunitaria', icon: 'Radio', bucket: 'com' },
            { id: 'u5', text: 'Consultar una enciclopedia digital en la biblioteca', icon: 'Monitor', bucket: 'bus' },
            { id: 'u6', text: 'Hacer una videollamada con un pariente que vive lejos', icon: 'Smartphone', bucket: 'com' },
          ] },
        ),
        S.tf(
          { fase: 'aplicar', areas: ['l2', 'fc'], cnb: ['l2:3.3.2', 'l2:3.1.6'], ambito: 'conocer',
            prompt: 'Una fuente puede tener datos falsos o viejos. Encuentras estas afirmaciones en internet: ¿son verdaderas o falsas? Usa lo que leíste.',
            explain: 'Antes de creer un dato, compara con otras fuentes confiables y revisa quién lo publica y cuándo. Una página anónima o sin fecha merece más dudas.' },
          { statements: [
            { text: 'Una publicación anónima dice: "El Congreso organiza las elecciones". Este dato es correcto.', answer: false, why: 'Las elecciones las organiza el Tribunal Supremo Electoral.' },
            { text: 'Si dos fuentes confiables dicen lo mismo, el dato es más creíble.', answer: true },
            { text: 'Todo lo que aparece en internet es verdadero.', answer: false, why: 'Cualquiera puede publicar; hay que verificar.' },
            { text: 'Revisar la fecha de una publicación ayuda a saber si el dato está actualizado.', answer: true },
          ] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l3', 'cnt'], cnb: ['l3:3.2.2'], ambito: 'hacer',
            prompt: 'English time! Los reporteros leen el pronóstico del INSIVUMEH (institución que informa sobre el clima en Guatemala) y escriben un **weather report** en inglés. Pronóstico de hoy: **Quetzaltenango** nublado y frío (12 °C); **Escuintla** soleado y caluroso (33 °C); **por la tarde**, lluvia en ambos lugares. Vocabulario: _sunny_ = soleado, _cloudy_ = nublado, _rainy_ = lluvioso, _cold_ = frío, _hot_ = caluroso.',
            explain: 'Un weather report dice el lugar, el estado del cielo y la temperatura: "Today in Quetzaltenango it is cloudy and cold."' },
          { text: 'Good morning! This is the weather report.\nToday in Quetzaltenango it is [[cloudy]] and [[cold]]. The temperature is 12 degrees.\nIn Escuintla it is [[sunny]] and [[hot]]: 33 degrees.\nTake an umbrella: in the afternoon it will be [[rainy]].', distractors: ['snowy', 'windy'] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.4.2'], prompt: 'Boleto de salida: une cada institución con su función.' },
          { leftTitle: 'Institución', rightTitle: 'Función', pairs: [
            { id: 'tse', left: 'Tribunal Supremo Electoral', leftIcon: 'Vote', right: 'Organiza las elecciones' },
            { id: 'con', left: 'Congreso de la República', leftIcon: 'Landmark', right: 'Hace las leyes' },
            { id: 'cgc', left: 'Contraloría General de Cuentas', leftIcon: 'Search', right: 'Vigila el uso del dinero público' },
            { id: 'pdh', left: 'Procurador de los Derechos Humanos', leftIcon: 'ShieldCheck', right: 'Investiga denuncias sobre derechos' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.1.7'], prompt: 'Diego regresa a leer cada línea dos veces, aunque ya la entendió. ¿Qué deficiencia tiene y cómo la corrige?' },
          { options: [
            { id: 'a', text: 'Regresión: seguir la línea con una tarjeta que tape lo leído', icon: 'RotateCw' },
            { id: 'b', text: 'Subvocalización: leer en voz más alta', icon: 'Volume2', feedback: 'La subvocalización es mover los labios; y leer más alto la haría más lenta.' },
            { id: 'c', text: 'No tiene ninguna: así se lee mejor', icon: 'Check', feedback: 'Regresar sin necesidad hace la lectura más lenta sin ayudar a entender.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['l1', 'fc'], cnb: ['l1:4.1.6'] }, ['Leo en silencio sin mover los labios ni regresar', 'Reviso quién publica un dato y cuándo', 'Explico qué hacen las instituciones democráticas'],
          ['Leeré 10 minutos diarios en silencio usando una tarjeta guía', 'Compararé al menos dos fuentes antes de creer un dato', 'Contaré en casa qué hace el Tribunal Supremo Electoral']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's33-d3-trabajo-datos',
      title: 'Datos que hablan del trabajo',
      icon: 'BarChart3',
      minutes: 15,
      day: 3,
      gancho: '¿En qué trabajan las personas adultas de tu casa? ¿Tienen seguro social o vacaciones pagadas?',
      objetivos: ['Identificar actividades y condiciones de trabajo en Guatemala', 'Interpretar información presentada en porcentaje', 'Construir e interpretar gráficas de barras y circulares', 'Describir el perfil de una ciudadana o un ciudadano democrático y solidario'],
      resumen: [
        'En Guatemala se trabaja en agricultura (café, cardamomo, maíz, banano), comercio, construcción, industria, turismo, artesanías y servicios.',
        'Un trabajo formal tiene contrato, salario al menos mínimo, seguro social (IGSS) y prestaciones; en el trabajo informal faltan esas protecciones.',
        'Un porcentaje compara una parte con 100: 20 de 50 familias es el 40 %, porque 20 ÷ 50 = 0.40.',
        'La gráfica de barras compara cantidades; la gráfica circular muestra partes de un total (100 %).',
        'Una ciudadana o un ciudadano democrático se informa, participa, vota, dialoga, respeta la ley y es solidario con su comunidad.',
      ],
      media: {
        id: 's33-d3-oficios', kind: 'image', title: 'Así trabaja Guatemala', aspect: '16:9',
        alt: 'Mosaico de seis escenas: cosecha de café, venta en un mercado, construcción de una casa, taller de tejido, guía de turistas y enfermera en un centro de salud.',
        brief: 'Ilustración en mosaico de 6 viñetas con personajes ficticios de distintos pueblos y géneros: (1) mujer y hombre cortando café en la bocacosta; (2) vendedora en un mercado municipal; (3) albañiles con casco en una construcción; (4) tejedora en telar de cintura; (5) guía de turismo junto a un lago; (6) enfermera en un centro de salud. Bajo cada escena, un ícono de su sector (agricultura, comercio, construcción, artesanía, turismo, servicios). Sin niños trabajando. Estilo plano cálido.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'pyd'], cnb: ['ccss:4.1.4'], ambito: 'conocer', title: 'Trabajo y condiciones de vida',
            prompt: 'El tipo de trabajo y sus **condiciones** influyen en cómo vive una familia: su salud, su vivienda y los estudios de sus hijos. Toca cada tarjeta.' },
          { icon: 'Briefcase', body: 'No basta con tener trabajo: importan las **condiciones** en que se trabaja.', reveal: [
            { icon: 'Wheat', front: 'Actividades de Guatemala', back: '**Agricultura** (café, cardamomo, banano, maíz), **comercio**, **construcción**, **industria** textil y de alimentos, **turismo**, **artesanías** y **servicios**.' },
            { icon: 'FileText', front: 'Trabajo formal', back: 'Tiene **contrato**, salario al menos mínimo, **seguro social (IGSS)**, vacaciones y prestaciones.' },
            { icon: 'Store', front: 'Trabajo informal', back: 'Sin contrato ni seguro social: muchas ventas en la calle, jornadas por día o trabajos temporales. En Guatemala, gran parte de las personas trabaja así.' },
            { icon: 'Backpack', front: 'La niñez', back: 'Las leyes protegen a niñas y niños del **trabajo peligroso**. Tu derecho y tu tarea principal es **estudiar** y jugar.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['ccss', 'pyd'], cnb: ['ccss:4.1.4'],
            prompt: 'Clasifica cada situación: ¿es una condición de trabajo **formal** o **informal**?',
            explain: 'El trabajo informal da ingresos, pero deja a la familia sin protección si hay enfermedad o accidente. Por eso es importante que más empleos sean formales.' },
          { buckets: [
            { id: 'for', label: 'Formal', icon: 'ShieldCheck', color: 'var(--c-ok)' },
            { id: 'inf', label: 'Informal', icon: 'Store', color: 'var(--c-hint)' },
          ], items: [
            { id: 'w1', text: 'Maestra con contrato y afiliada al IGSS', bucket: 'for' },
            { id: 'w2', text: 'Vendedor de elotes en la calle sin registro ni seguro', bucket: 'inf' },
            { id: 'w3', text: 'Operario de fábrica con vacaciones pagadas', bucket: 'for' },
            { id: 'w4', text: 'Jornalero que trabaja por día, sin contrato', bucket: 'inf' },
            { id: 'w5', text: 'Enfermera de hospital con prestaciones', bucket: 'for' },
            { id: 'w6', text: 'Albañil contratado de palabra, sin seguro por accidentes', bucket: 'inf', feedback: 'Sin contrato ni seguro, si se lastima no tiene protección: es informal.' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['mat', 'ccss'], cnb: ['mat:6.2.1', 'ccss:4.1.4'], ambito: 'hacer',
            prompt: 'Supongamos que los reporteros encuestaron a **50 familias** de su cantón sobre el trabajo principal de la familia. Construye la **gráfica de barras** con la tabla.',
            hint: 'Cada marca de la escala vale 2 familias.',
            explain: 'En la gráfica de barras se ve de un vistazo qué actividad es la más común (agricultura) y cuál la menos común (turismo).',
            media: { id: 's33-d3-encuesta', kind: 'video', title: 'Encuesta de casa en casa', aspect: '9:16', duration: 40,
              alt: 'Dos estudiantes tocan una puerta, saludan, hacen una pregunta a una señora y marcan una raya en su tabla de conteo.',
              brief: 'Video vertical de 40 s (o animación) en una calle de adoquín de un pueblo del altiplano: dos estudiantes con gafete de "Reporteros 6.º" saludan con cortesía, preguntan "¿Cuál es el trabajo principal de su familia?" y marcan con rayitas en una tabla de conteo (agricultura, comercio, construcción, artesanía, turismo). Al final, la tabla se transforma en una gráfica de barras animada. Subtítulos, personajes ficticios.' } },
          { source: 'Trabajo principal de 50 familias (datos supuestos)', unit: 'familias', max: 24, step: 2, categories: [
            { id: 'agr', label: 'Agricultura', icon: 'Wheat' },
            { id: 'com', label: 'Comercio', icon: 'Store' },
            { id: 'cons', label: 'Construcción', icon: 'HardHat' },
            { id: 'art', label: 'Artesanía', icon: 'Scissors' },
            { id: 'tur', label: 'Turismo', icon: 'Map' },
          ], data: [20, 12, 8, 6, 4] },
        ),
        S.explain(
          { fase: 'construir', areas: ['mat', 'l2'], cnb: ['mat:6.1.3', 'l2:3.1.5'], ambito: 'conocer', title: 'Leer porcentajes y gráficas circulares',
            prompt: 'Un **porcentaje** dice cuántos de cada **100**. Sirve para comparar grupos de distinto tamaño. Toca cada tarjeta.' },
          { icon: 'Percent', body: 'Parte ÷ total × 100 = porcentaje. En la encuesta: 20 de 50 familias trabajan en agricultura → 20 ÷ 50 = 0.40 → **40 %**.', reveal: [
            { icon: 'PieChart', front: 'Gráfica circular', back: 'El círculo completo es el **100 %**. Cada sector es una parte: 40 % es un poco menos de la mitad.' },
            { icon: 'Percent', front: '50 %, 25 %, 10 %', back: '50 % = la **mitad**; 25 % = la **cuarta parte**; 10 % = **1 de cada 10**.' },
            { icon: 'Info', front: 'Título y fuente', back: 'Lee siempre el **título**, la **fuente** y el **total**: 40 % de 50 familias no es lo mismo que 40 % de 5,000.' },
          ] },
        ),
        S.slider(
          { fase: 'aplicar', areas: ['mat', 'ccss'], cnb: ['mat:6.1.3', 'mat:6.2.1'], ambito: 'hacer',
            prompt: 'En la encuesta, **12 de 50** familias trabajan en **comercio**. Mueve el control hasta el porcentaje que les corresponde en la gráfica circular.',
            hint: 'Divide 12 ÷ 50 o piensa: 50 familias son la mitad de 100, así que duplica.',
            explain: '12 ÷ 50 = 0.24 → 24 %. Truco: como 50 × 2 = 100, basta con duplicar 12.' },
          { min: 0, max: 100, step: 2, start: 50, answer: 24, visual: 'percent', display: 'percent', unit: '%' },
        ),
        S.reading(
          { fase: 'aplicar', areas: ['l2', 'mat', 'ccss'], cnb: ['l2:3.1.5', 'mat:6.1.3'], ambito: 'conocer',
            prompt: 'Interpreta el **material gráfico** que publicó el periódico escolar y responde.' },
          { genre: 'Infografía (descripción)', heading: '¿Cuántas familias tienen seguro social?', passage:
            'Gráfica circular con el título: **"Familias encuestadas con al menos una persona afiliada al IGSS"**. Fuente: encuesta de 6.º grado, 50 familias (datos supuestos).\n\nSector verde: **30 %** — Sí tienen una persona afiliada.\n\nSector naranja: **70 %** — Ninguna persona afiliada.\n\nNota al pie: el IGSS da atención médica y pensión a quienes están afiliados por su trabajo formal.',
            questions: [
              { q: '¿Qué porcentaje de familias NO tiene ninguna persona afiliada al IGSS?', options: [
                { id: 'a', text: '70 %' }, { id: 'b', text: '30 %' }, { id: 'c', text: '100 %' },
              ], correct: 'a' },
              { q: 'Si fueron 50 familias, ¿cuántas SÍ tienen una persona afiliada?', options: [
                { id: 'a', text: '15 familias' }, { id: 'b', text: '30 familias' }, { id: 'c', text: '35 familias' },
              ], correct: 'a', why: '30 % de 50 = 50 × 0.30 = 15.' },
              { q: '¿Qué conclusión se puede sacar de la gráfica?', options: [
                { id: 'a', text: 'La mayoría de las familias encuestadas trabaja sin seguro social' },
                { id: 'b', text: 'Todas las familias de Guatemala tienen IGSS' },
                { id: 'c', text: 'El IGSS no sirve para nada' },
              ], correct: 'a', why: 'El 70 % es más de la mitad. Pero cuidado: es una muestra de 50 familias, no todo el país.' },
            ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'pyd'], cnb: ['fc:3.6.1', 'pyd:2.5.2'], ambito: 'convivir',
            prompt: 'Una ciudadana o un ciudadano que cuida la **democracia participativa** se informa, vota, participa en su comunidad, dialoga, respeta la ley y es solidario. Con los resultados, el equipo presenta un informe al COCODE (Consejo Comunitario de Desarrollo). ¿Qué haces como ciudadana o ciudadano?' },
          { scene: { icon: 'Users', text: 'La encuesta mostró que muchas vendedoras del mercado no tienen dónde dejar a sus hijos pequeños. El COCODE propone un **proyecto comunitario**: una guardería atendida por voluntarios de la comunidad.' }, options: [
            { id: 'a', icon: 'EyeOff', text: 'Decir que ese problema no es tuyo', consequence: 'El proyecto avanza lento porque faltan manos. Las familias que más lo necesitan siguen esperando.', values: ['Indiferencia'], constructive: false },
            { id: 'b', icon: 'HandHeart', text: 'Ofrecer tu ayuda: pintar el lugar y organizar juegos los sábados con tu familia', consequence: 'Tu grado se suma y la guardería abre antes. Las madres pueden trabajar tranquilas.', values: ['Solidaridad', 'Participación', 'Responsabilidad'], constructive: true },
            { id: 'c', icon: 'Megaphone', text: 'Compartir los datos de la encuesta en la radio comunitaria para que más personas ayuden', consequence: 'Más vecinos se enteran y donan materiales. Informar con datos también es participar.', values: ['Participación ciudadana', 'Solidaridad'], constructive: true },
          ] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:6.1.3'], prompt: 'Boleto de salida: en la encuesta, **8 de 50** familias trabajan en construcción. ¿Qué porcentaje es?' },
          { answer: 16, unit: '%', misconceptions: [{ value: 8, msg: '8 es la cantidad de familias; conviértela a "de cada 100".' }] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc', 'ccss'], cnb: ['fc:3.6.1', 'ccss:4.1.4'], prompt: '¿Cuál de estas personas muestra el **perfil de un ciudadano que cuida la democracia participativa**?' },
          { options: [
            { id: 'a', text: 'Don Tomás se informa, vota, asiste a la asamblea comunitaria y respeta las opiniones distintas', icon: 'Vote' },
            { id: 'b', text: 'Don Luis nunca vota porque "nada cambia"', icon: 'X', feedback: 'No participar deja que otros decidan por ti.' },
            { id: 'c', text: 'Doña Rosa solo escucha rumores y no compara fuentes', icon: 'MessageCircle', feedback: 'Un ciudadano democrático se informa con fuentes confiables.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['mat', 'fc', 'pyd'], cnb: ['pyd:2.5.2'] }, ['Identifico actividades y condiciones de trabajo en Guatemala', 'Calculo e interpreto porcentajes', 'Leo gráficas de barras y circulares'],
          ['Preguntaré en casa qué protecciones tiene el trabajo de mi familia', 'Leeré el título y la fuente de cada gráfica que vea', 'Me sumaré a un proyecto solidario de mi comunidad']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's33-d4-feria-ciencia',
      title: 'Ciencia, cuerpo y cámara en la feria',
      icon: 'Video',
      minutes: 15,
      day: 4,
      gancho: '¿Sabías que el maíz que comes hoy es muy distinto del que sembraban los primeros agricultores hace miles de años?',
      objetivos: ['Demostrar cómo los cruces genéticos modifican plantas y animales', 'Ilustrar enfermedades causadas por fallas de las glándulas', 'Describir hábitos de higiene y comportamientos éticos para cuidar el aparato reproductor', 'Grabar y evaluar un montaje audiovisual de la feria'],
      resumen: [
        'Con los cruces genéticos se combinan características de dos plantas o animales; se eligen las crías con las mejores características. Así se obtienen variedades de maíz o frijol más resistentes o nutritivas (biotecnología).',
        'Si una glándula produce poca o mucha hormona aparecen enfermedades: diabetes (páncreas, insulina), bocio e hipotiroidismo (tiroides), gigantismo o enanismo (hipófisis, hormona del crecimiento).',
        'Cuidar el aparato reproductor: baño diario con agua y jabón suave, ropa interior limpia de algodón, cambio frecuente de toalla sanitaria durante la menstruación y consultar al personal de salud si hay dolor o picazón.',
        'Tu cuerpo es tuyo: nadie debe tocar tus partes privadas; respeta a los demás y cuéntale a un adulto de confianza si algo te incomoda.',
        'Un montaje audiovisual se planifica (guion), se graba, se edita y se evalúa con criterios claros.',
      ],
      media: {
        id: 's33-d4-cruce', kind: 'animation', title: 'Un cruce de maíz paso a paso', aspect: '16:9', duration: 60,
        alt: 'Animación: una planta de maíz alta y otra resistente a la sequía se cruzan con polen; nacen plantas y se escoge la que tiene ambas características.',
        brief: 'Animación 2D de 60 s en una parcela de investigación agrícola de Guatemala (técnicos con bata y sombrero, personajes ficticios). Escena 1: planta A (alta, mazorca grande) y planta B (resiste la sequía). Escena 2: una técnica pasa el polen de la espiga de A a los pelos del elote de B con una bolsita de papel. Escena 3: siembran las semillas, nacen varias plantas distintas. Escena 4: se elige la que tiene mazorca grande Y resiste la sequía; rótulo "Nueva variedad mejorada". Narración infantil, subtítulos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'pyd'], cnb: ['cnt:2.2.5'], ambito: 'conocer', title: 'Biotecnología: mejorar con cruces',
            prompt: 'En la feria de ciencias, el stand de 6.º explica cómo se **mejoran** plantas y animales. Toca cada tarjeta.' },
          { icon: 'Dna', body: 'Cada ser vivo hereda **genes** de sus progenitores. Si cruzamos dos plantas con características distintas, algunas de sus crías pueden tener **lo mejor de las dos**.', reveal: [
            { icon: 'Sprout', front: '1. Elegir', back: 'Se eligen dos plantas: una con **mazorca grande** y otra que **resiste la sequía**.' },
            { icon: 'Flower2', front: '2. Cruzar', back: 'Se lleva el **polen** de una planta a la flor de la otra (polinización controlada).' },
            { icon: 'Search', front: '3. Seleccionar', back: 'De las crías, se escogen las que tienen **ambas** características y se vuelven a sembrar varias generaciones.' },
            { icon: 'Wheat', front: 'En Guatemala', back: 'Instituciones agrícolas del país han creado así variedades de **maíz y frijol** más resistentes o con **más hierro y zinc** para combatir la desnutrición.' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.2.5'], ambito: 'hacer',
            prompt: 'Demuestra cómo se obtiene una **variedad mejorada de frijol**. Ordena los pasos del cruce.',
            explain: 'La biotecnología tradicional aprovecha la herencia: cruza, selecciona y repite hasta que la característica deseada se mantiene.' },
          { items: [
            { id: 'c1', text: 'Elegir una planta con mucho hierro y otra que resiste plagas', icon: 'Sprout' },
            { id: 'c2', text: 'Pasar el polen de una flor a la otra', icon: 'Flower2' },
            { id: 'c3', text: 'Sembrar las semillas que resultan del cruce', icon: 'Shovel' },
            { id: 'c4', text: 'Seleccionar las plantas con las dos características', icon: 'Search' },
            { id: 'c5', text: 'Sembrarlas varias generaciones hasta tener una variedad estable', icon: 'RefreshCw' },
          ], labels: { start: 'Inicio', end: 'Variedad nueva' } },
        ),
        S.match(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.5'], ambito: 'conocer',
            prompt: 'El stand de salud **ilustra** enfermedades por **disfunción glandular** (cuando una glándula produce muy poca o demasiada hormona). Une cada enfermedad con su causa.',
            explain: 'En Guatemala la sal se fortifica con yodo para prevenir el bocio. La diabetes se controla con atención médica, alimentación sana y actividad física.',
            media: { id: 's33-d4-glandulas', kind: 'diagram', title: 'Cuando una glándula falla', aspect: '3:4',
              alt: 'Silueta humana con tres glándulas señaladas: hipófisis en la cabeza, tiroides en el cuello y páncreas en el abdomen, cada una con la enfermedad que causa su falla.',
              brief: 'Diagrama educativo con silueta humana neutra (sin rasgos sexuales). Tres glándulas en color: HIPÓFISIS (base del cerebro) → "Poca o mucha hormona del crecimiento: enanismo o gigantismo"; TIROIDES (cuello, forma de mariposa) → "Falta de yodo: bocio (cuello inflamado). Poca hormona: hipotiroidismo"; PÁNCREAS (abdomen) → "Poca insulina: diabetes (azúcar alta en la sangre)". Íconos: salero con yodo junto a la tiroides; manzana y persona caminando junto al páncreas. Sin fotos de pacientes.' } },
          { leftTitle: 'Enfermedad', rightTitle: 'Glándula y causa', pairs: [
            { id: 'dia', left: 'Diabetes', leftIcon: 'Droplet', right: 'Páncreas: produce poca insulina o el cuerpo no la usa bien' },
            { id: 'boc', left: 'Bocio', leftIcon: 'Circle', right: 'Tiroides: crece por falta de yodo' },
            { id: 'gig', left: 'Gigantismo', leftIcon: 'Ruler', right: 'Hipófisis: exceso de hormona del crecimiento' },
            { id: 'hip', left: 'Hipotiroidismo', leftIcon: 'Hourglass', right: 'Tiroides: produce poca hormona y el cuerpo se vuelve lento' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:3.1.4'], ambito: 'ser',
            prompt: 'Cuidar el **aparato reproductor** es parte de cuidar tu salud. Clasifica cada acción como **hábito de higiene**, **comportamiento ético** o algo que **no se debe hacer**.',
            explain: 'La higiene previene infecciones. El respeto y la privacidad protegen a todas las personas. Si algo te duele, te pica o te incomoda, habla con tu familia, tu docente o el personal de salud.' },
          { buckets: [
            { id: 'hig', label: 'Hábito de higiene', icon: 'Droplets', color: 'var(--area-cnt)' },
            { id: 'eti', label: 'Comportamiento ético', icon: 'HeartHandshake', color: 'var(--area-fc)' },
            { id: 'no', label: 'No se debe hacer', icon: 'X', color: 'var(--c-hint)' },
          ], items: [
            { id: 'h1', text: 'Bañarse a diario y lavar la zona íntima externa con agua y jabón suave', bucket: 'hig' },
            { id: 'h2', text: 'Usar ropa interior limpia, de preferencia de algodón, y cambiarla cada día', bucket: 'hig' },
            { id: 'h3', text: 'Durante la menstruación, cambiar la toalla sanitaria varias veces al día', bucket: 'hig' },
            { id: 'h4', text: 'Respetar la privacidad de otros en el baño y el vestidor', bucket: 'eti' },
            { id: 'h5', text: 'Decir "no" y contarle a un adulto de confianza si alguien te toca y te incomoda', bucket: 'eti' },
            { id: 'h6', text: 'Burlarse de los cambios del cuerpo de un compañero', bucket: 'no', feedback: 'Todos cambiamos en la pubertad, a ritmos distintos. La burla lastima.' },
            { id: 'h7', text: 'Prestar o pedir prestada la ropa interior', bucket: 'no', feedback: 'La ropa interior es personal: compartirla puede transmitir hongos e infecciones.' },
          ] },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'art'], cnb: ['ef:1.4.10', 'ef:1.4.11'], ambito: 'hacer',
            prompt: 'La feria cierra con una **rutina gimnástica en parejas** con música de marimba. Practica con un compañero y **atiende los sonidos**: marimba lenta = movimientos amplios en espejo; tambor rápido = trote suave en el lugar; silencio = ¡estatua en equilibrio! Luego mide tu pulso.' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después de la rutina en parejas', exercise: { name: 'Espejo, trote al tambor y estatua en equilibrio', icon: 'Users', seconds: 60 } },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['art', 'ccss'], cnb: ['art:1.2.2'], ambito: 'hacer',
            prompt: 'Con un celular o una cámara de la escuela, el equipo hará un **montaje audiovisual** de 2 minutos sobre la feria y el patrimonio de Comalapa. Ordena el proceso.',
            explain: 'Con el equipo que tengas cerca (celular, grabadora, cámara) puedes valorar el patrimonio cultural: lo importante es planificar y pedir permiso a las personas que aparecen.' },
          { items: [
            { id: 'm1', text: 'Escribir un guion: qué mostrar (murales, tejidos, stands) y en qué orden', icon: 'PenLine' },
            { id: 'm2', text: 'Pedir permiso a las personas antes de grabarlas', icon: 'Handshake' },
            { id: 'm3', text: 'Grabar tomas cortas con buena luz y sin ruido', icon: 'Camera' },
            { id: 'm4', text: 'Seleccionar y unir las mejores tomas, con música y títulos', icon: 'Film' },
            { id: 'm5', text: 'Presentar el video y evaluarlo con una lista de criterios', icon: 'ClipboardCheck' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l3', 'art'], cnb: ['l3:3.2.3'], ambito: 'hacer',
            prompt: 'English time! Escribe un **short report** sobre la feria. Recuerda: para hablar del pasado usamos _was / were_ y verbos en pasado (_visited, danced, learned_).',
            explain: 'Un informe breve dice qué pasó, dónde, cuándo y qué te gustó: "Yesterday we **had** a science fair at school."' },
          { text: 'SCHOOL FAIR REPORT\nYesterday we [[had]] a science fair at school.\nMany families [[visited]] our stands.\nWe [[learned]] about corn and glands.\nAt the end, we [[danced]] to marimba music. It [[was]] a great day!', distractors: ['have', 'is'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.2.5', 'cnt:2.3.5', 'cnt:3.1.4'], prompt: 'Boleto de salida: ¿verdadero o falso?' },
          { statements: [
            { text: 'Al cruzar dos plantas distintas, algunas crías pueden tener características de ambas.', answer: true },
            { text: 'El bocio se relaciona con la falta de yodo y la glándula tiroides.', answer: true },
            { text: 'La diabetes se debe a una falla de la glándula hipófisis.', answer: false, why: 'La diabetes se relaciona con el páncreas y la insulina.' },
            { text: 'Compartir la ropa interior con un amigo es un hábito higiénico.', answer: false, why: 'La ropa interior es personal: compartirla puede transmitir infecciones.' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['art'], cnb: ['art:1.2.4'], prompt: 'Al **evaluar el video** de la feria, ¿qué criterios conviene usar? Elige todos los correctos.' },
          { multiple: true, options: [
            { id: 'a', text: 'Se escucha y se ve con claridad', icon: 'Eye' },
            { id: 'b', text: 'Muestra y valora el patrimonio de la comunidad', icon: 'Landmark' },
            { id: 'c', text: 'Sigue el orden del guion', icon: 'ListOrdered' },
            { id: 'd', text: 'Que dure lo más posible, aunque aburra', icon: 'Timer', feedback: 'Un buen video es breve y claro; durar más no lo hace mejor.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        cierre({ areas: ['cnt', 'art'], cnb: ['art:1.2.4'] }, ['Explico cómo se mejora una planta con cruces', 'Relaciono enfermedades con la glándula que falla', 'Cuido mi higiene y respeto la privacidad de los demás', 'Planifico y evalúo un video'],
          ['Revisaré que la sal de mi casa diga "yodada"', 'Practicaré mis hábitos de higiene cada día', 'Grabaré un video corto sobre algo valioso de mi comunidad']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's33-d5-reto',
      title: 'Reto de la semana 33',
      icon: 'Trophy',
      minutes: 13,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste como reportero de tu comunidad', 'Obtener la medalla "Reportero comunitario" (70 % o más)'],
      resumen: ['Superé el reto de la semana 33: fuentes del pasado, lectura, instituciones, trabajo, porcentajes, glándulas y biotecnología.'],
      media: {
        id: 's33-d5-reto', kind: 'image', title: 'Medalla Reportero comunitario', aspect: '1:1',
        alt: 'Medalla dorada con un micrófono antiguo, una hoja de maíz y un pequeño códice abierto.',
        brief: 'Ilustración de medalla circular dorada 1024×1024 con relieve de un micrófono de radio antiguo al centro, rodeado por una hoja de maíz a la izquierda y un códice plegado a la derecha. Cinta con franjas de los colores de las áreas del CNB. Fondo transparente, sin texto.',
      },
      steps: [
        S.match({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.1.3'], prompt: 'Une cada forma de registrar el pasado con su pueblo.' },
          { pairs: [
            { id: 'q', left: 'Quipus de cuerdas y nudos', right: 'Incas' },
            { id: 'c', left: 'Códices con glifos', right: 'Mayas' },
            { id: 'g', left: 'Historia cantada de generación en generación', right: 'Griots de África occidental' },
          ] }),
        S.choice({ fase: 'comprobar', areas: ['ccss', 'l1'], cnb: ['ccss:6.1.4'], prompt: 'Recoges la leyenda de La Llorona que cuenta tu tío. ¿Qué dato es MÁS importante anotar para que sirva a la historia de tu comunidad?' },
          { options: [
            { id: 'a', text: 'Quién la contó, dónde y cuándo' },
            { id: 'b', text: 'Si te dio miedo o no' },
            { id: 'c', text: 'Nada: las leyendas no sirven para la historia' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.1.7', 'l1:4.1.6'], prompt: 'Mientras lee en silencio, Karla mueve los labios y pronuncia cada palabra. ¿Qué le recomiendas?' },
          { options: [
            { id: 'a', text: 'Evitar la subvocalización y leer por grupos de palabras' },
            { id: 'b', text: 'Leer cada línea dos veces' },
            { id: 'c', text: 'Leer en voz alta siempre' },
          ], correct: ['a'] }),
        S.tf({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:3.3.2', 'l2:3.1.6'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'Un buscador de internet es una fuente tecnológica de consulta.', answer: true },
            { text: 'Un dato sin autor ni fecha es siempre confiable.', answer: false },
            { text: 'Comparar varias fuentes ayuda a comprobar si un dato es verdadero.', answer: true },
          ] }),
        S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.4.2'], prompt: '¿Qué institución revisa que las leyes no vayan contra la Constitución?' },
          { options: [
            { id: 'a', text: 'La Corte de Constitucionalidad' },
            { id: 'b', text: 'El Tribunal Supremo Electoral' },
            { id: 'c', text: 'La Contraloría General de Cuentas' },
          ], correct: ['a'] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:6.1.3', 'mat:6.2.1'], prompt: 'Una gráfica circular muestra que el **25 %** de 40 estudiantes llega a la escuela en bicicleta. ¿Cuántos estudiantes son?' },
          { answer: 10, unit: 'estudiantes' }),
        S.sort({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.1.4'], prompt: '¿Trabajo formal o informal?' },
          { buckets: [{ id: 'f', label: 'Formal', icon: 'ShieldCheck' }, { id: 'i', label: 'Informal', icon: 'Store' }],
            items: [
              { id: 'a', text: 'Cajera con contrato y IGSS', bucket: 'f' },
              { id: 'b', text: 'Vendedora ambulante sin seguro', bucket: 'i' },
              { id: 'c', text: 'Cortador de café pagado por día, sin contrato', bucket: 'i' },
              { id: 'd', text: 'Guardabosques municipal con prestaciones', bucket: 'f' },
            ] }),
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.5'], prompt: 'Una persona tiene el cuello inflamado porque su tiroides creció por falta de yodo. ¿Cómo se llama esta enfermedad?' },
          { options: [
            { id: 'a', text: 'Bocio' },
            { id: 'b', text: 'Diabetes' },
            { id: 'c', text: 'Gigantismo' },
          ], correct: ['a'] }),
        S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.2.2', 'l3:3.2.3'], prompt: 'Complete in English.' },
          { text: 'Today in Cobán it is [[rainy]]. Take an umbrella!\nLast Sunday we [[visited]] the town fair.', distractors: ['sunny', 'visit'] }),
        S.choice({ fase: 'comprobar', areas: ['art', 'pyd'], cnb: ['art:1.2.4', 'art:1.2.2'], prompt: 'Tu equipo ve el video que grabó sobre los tejidos de su comunidad. ¿Qué comentario es una **evaluación** útil?' },
          { options: [
            { id: 'a', text: '"Se ven bien los tejidos, pero el audio de la entrevista tiene mucho ruido: grabemos en un lugar más tranquilo."' },
            { id: 'b', text: '"Está feo."' },
            { id: 'c', text: '"No importa cómo quedó, ya lo grabamos."' },
          ], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 4 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.1.3'], prompt: 'Los pueblos aborígenes de Australia registraron relatos de su pasado principalmente…' },
      { options: [{ id: 'a', text: 'Con pinturas en roca' }, { id: 'b', text: 'Con quipus de nudos' }, { id: 'c', text: 'Con códices de papel de corteza' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.2.2'], prompt: 'Para conocer cómo aprendió su oficio una alfarera de Rabinal, la mejor técnica es…' },
      { options: [{ id: 'a', text: 'Una entrevista (historia de vida)' }, { id: 'b', text: 'Una encuesta a 100 personas' }, { id: 'c', text: 'Contar autos en la calle' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.1.4', 'l1:4.1.5'], prompt: 'En un texto sobre "fuentes históricas" aparecen: leyenda, códice y vasija. ¿Qué conclusión sacas al compararlos?' },
      { options: [{ id: 'a', text: 'Son distintos tipos de fuentes (oral, escrita y material) que informan del pasado' }, { id: 'b', text: 'Solo el códice es una fuente' }, { id: 'c', text: 'No tienen ninguna relación' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['l1', 'mat'], cnb: ['l1:4.1.6'], prompt: 'Supongamos que Mateo leyó en silencio 500 palabras en 4 minutos. ¿Cuántas palabras por minuto leyó?' },
      { answer: 125, unit: 'palabras por minuto' }),
    S.match({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.4.2', 'fc:3.6.1'], prompt: 'Une cada acción con quien la realiza.' },
      { pairs: [
        { id: 'a', left: 'Hacer las leyes', right: 'Congreso de la República' },
        { id: 'b', left: 'Contar los votos de una elección', right: 'Tribunal Supremo Electoral' },
        { id: 'c', left: 'Informarse, votar y participar en la asamblea', right: 'Ciudadanía democrática' },
      ] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:6.1.3'], prompt: 'En una encuesta a 20 familias, 5 se dedican a la artesanía. ¿Qué porcentaje es?' },
      { answer: 25, unit: '%' }),
    S.chart({ fase: 'comprobar', areas: ['mat', 'l2'], cnb: ['mat:6.2.1', 'l2:3.1.5'], prompt: 'Construye la gráfica de barras: medio de transporte de 30 estudiantes (datos supuestos).' },
      { source: 'Cómo llegan a la escuela', unit: 'estudiantes', max: 16, step: 2, categories: [
        { id: 'a', label: 'Caminando', icon: 'Footprints' }, { id: 'b', label: 'Bus', icon: 'Bus' }, { id: 'c', label: 'Bicicleta', icon: 'Bike' },
      ], data: [14, 10, 6] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.2.5'], prompt: 'Un agricultor cruza una vaca que da mucha leche con un toro resistente al calor. ¿Qué busca?' },
      { options: [{ id: 'a', text: 'Crías que den mucha leche y resistan el calor' }, { id: 'b', text: 'Que ninguna cría herede nada' }, { id: 'c', text: 'Cambiar el color del pasto' }], correct: ['a'] }),
    S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.1.4', 'cnt:2.3.5'], prompt: '¿Verdadero o falso?' },
      { statements: [
        { text: 'Si hay picazón o dolor en la zona íntima, conviene consultar al personal de salud.', answer: true },
        { text: 'La insulina la produce la tiroides.', answer: false },
      ] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:1.2.2', 'art:1.2.4'], prompt: '¿Qué debes hacer ANTES de grabar a una tejedora para tu video sobre el patrimonio?' },
      { options: [{ id: 'a', text: 'Pedirle permiso y explicarle para qué es el video' }, { id: 'b', text: 'Grabarla sin que se dé cuenta' }, { id: 'c', text: 'Nada, se puede grabar a cualquiera' }], correct: ['a'] }),
    S.match({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.4.11'], prompt: 'Une cada sonido con el movimiento acordado en la rutina.' },
      { pairs: [
        { id: 'a', left: 'Marimba lenta', right: 'Movimientos amplios en espejo' },
        { id: 'b', left: 'Tambor rápido', right: 'Trote suave en el lugar' },
        { id: 'c', left: 'Silencio', right: 'Estatua en equilibrio' },
      ] }),
    S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.2.2'], prompt: 'Choose the correct weather report for a very hot day in Zacapa.' },
      { options: [{ id: 'a', text: 'Today in Zacapa it is sunny and hot.' }, { id: 'b', text: 'Today in Zacapa it is snowy and cold.' }, { id: 'c', text: 'Today in Zacapa it is hot and snowy.' }], correct: ['a'] }),
  ],
});
