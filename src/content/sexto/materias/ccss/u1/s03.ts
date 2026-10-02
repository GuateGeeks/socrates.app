/** Ciencias Sociales · Unidad 1 · Semana 3. */
import { lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's03-ccss-1', title: 'Rutas que conectan intercambios', icon: 'Route', minutes: 15,
    gancho: 'Los caminos cambian, pero siguen conectando personas, productos e ideas.',
    objetivos: ['Explicar como las rutas conectan intercambios antiguos y actividades productivas centroamericanas actuales con otros continentes'],
    resumen: [
      'Mayas, incas, egipcios y mesopotamicos combinaron caminos, rios, canoas, mensajeros y escritura para comunicar y transportar.',
      'Hoy las actividades productivas centroamericanas incluyen agricultura, industria y servicios.',
      'Rutas terrestres y maritimas conectan productos y servicios de Centroamerica con America del Norte, Europa y Asia.',
      'Comparar antes y hoy muestra una continuidad: las rutas facilitan intercambio, aunque cambien los medios, la escala y los productos.',
    ],
    media: {
      id: 's03-ccss-1-rutas-tiempo', kind: 'diagram', title: 'Rutas e intercambio antes y hoy', aspect: '16:9',
      alt: 'Dos escenas comparan un camino y una canoa antiguos con una carretera y un puerto centroamericanos actuales.',
      brief: 'Diagrama comparativo 1600x900. A la izquierda, sacbe maya, mensajero a pie y canoa con cargas; a la derecha, finca de cafe, fabrica, camion y puerto con rutas hacia America del Norte, Europa y Asia. Flechas rotuladas intercambio de productos e ideas. No incluir caballos ni carretas en la escena maya. Texto grande, alto contraste, iconos ademas de color y orden de lectura accesible.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:3.3.1', 'ccss:3.4.1'], prompt: 'Compara como las rutas conectaron intercambio antes y hoy: medios de culturas antiguas y actividades productivas de Centroamerica vinculadas con otros continentes.' },
        { icon: 'Route', body: 'Los **mayas** usaron sacbeob, canoas, mensajeros y escritura; los **incas**, caminos y chasquis; Egipto aprovecho el Nilo. Hoy **Centroamerica** conecta agricultura, industria y servicios con America del Norte, Europa y Asia mediante carreteras, puertos y rutas maritimas.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.3.1', 'ccss:3.4.1'], title: 'Un mismo problema, medios distintos', prompt: 'Relaciona rutas, comunicacion, transporte e intercambio en culturas antiguas y en la Centroamerica actual.' },
        { icon: 'GitCompare', body: '**Antes:** un sacbe permitia caminar entre ciudades mayas; una canoa transportaba sal o cacao; un mensajero llevaba informacion. **Hoy:** cafe y cardamomo de la agricultura, textiles de la industria y servicios como transporte salen de Centroamerica hacia otros continentes. La continuidad es la conexion para intercambiar; cambian tecnologia, velocidad y escala.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.3.1', 'ccss:3.4.1'], title: 'Modelo de comparacion', prompt: 'Observa como explicar la continuidad entre una ruta antigua y una ruta productiva actual.' },
        { icon: 'Ship', problem: 'Una canoa maya llevaba sal por la costa. Hoy un barco lleva cafe centroamericano hacia Europa.', steps: [{ text: 'Medio antiguo: canoa y ruta costera.' }, { text: 'Actividad actual: agricultura y comercio de cafe por puerto.' }, { text: 'Continuidad: ambas rutas conectan lugares para intercambiar productos.' }, { text: 'Cambio: el barco actual recorre otros continentes con mayor capacidad.' }], answer: 'Las rutas sostienen intercambio en ambos tiempos, con medios y escalas diferentes.' },
      ),
      S.match(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.3.1', 'ccss:3.4.1'], prompt: 'Con ayuda, relaciona cada medio o actividad con la ruta que permite intercambio.', hint: 'Distingue culturas antiguas de actividades centroamericanas actuales.', explain: 'Los medios dependen del tiempo y la geografia, pero todos conectan intercambio.' },
        { pairs: [{ id: 'a', left: 'Canoa maya con cacao', right: 'Rio o costa antigua' }, { id: 'b', left: 'Chasqui inca con mensaje', right: 'Camino andino antiguo' }, { id: 'c', left: 'Cafe de Guatemala hacia Europa', right: 'Carretera, puerto y ruta maritima actual' }, { id: 'd', left: 'Servicio del Canal de Panama', right: 'Conexion oceanica actual' }] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.3.1', 'ccss:3.4.1'], prompt: 'Compara un sacbe maya con una carretera que lleva productos centroamericanos a un puerto.', hint: 'Busca continuidad y cambio.', explain: 'Ambas rutas conectan intercambio; cambian los vehiculos, la capacidad y el alcance.' },
        { options: [{ id: 'a', text: 'Ambas conectan lugares para intercambio, aunque cambian medios y escala' }, { id: 'b', text: 'Solo la carretera moderna conecta personas' }, { id: 'c', text: 'El sacbe llevaba barcos hasta Asia' }], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.3.1', 'ccss:3.4.1'], prompt: 'Explica de forma independiente una continuidad y un cambio: compara un medio maya, inca o egipcio con una ruta actual que conecta agricultura, industria o servicios de Centroamerica con America del Norte, Europa o Asia. Incluye el intercambio que permite.' },
        { minWords: 24, placeholder: 'Antes... Hoy... Continuidad... Cambio...', model: 'Antes, una canoa maya movia sal por la costa. Hoy, rutas y puertos conectan cafe centroamericano con Europa. Ambas permiten intercambio; cambian alcance y capacidad.', rubric: ['Nombre un medio antiguo', 'Relacione actividad y continente actuales', 'Explique continuidad y cambio'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.3.1', 'ccss:3.4.1'], prompt: 'Una ruta lleva textiles de una industria centroamericana por carretera y barco hasta America del Norte. ¿Que comparacion con los mensajeros incas es valida?' },
        { options: [{ id: 'a', text: 'Ambas conexiones trasladan algo entre lugares; hoy cambian medio, carga y distancia' }, { id: 'b', text: 'Los chasquis transportaban contenedores por mar' }, { id: 'c', text: 'Las rutas antiguas no permitian intercambio' }], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.3.1', 'ccss:3.4.1'], prompt: 'Salida: compara rutas e intercambio antes y hoy: un sacbe o canoa maya y una actividad productiva de Centroamerica conectada con Europa u otro continente.' },
        { options: [{ id: 'a', text: 'Hay continuidad al conectar intercambio; agricultura, industria o servicios actuales usan rutas de mayor alcance' }, { id: 'b', text: 'Las culturas antiguas comerciaban por avion con Europa' }, { id: 'c', text: 'Centroamerica actual no intercambia productos con otros continentes' }], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.3.1', 'ccss:3.4.1'], prompt: 'Salida nueva: compara la continuidad de rutas mayas e incas con conexiones actuales de actividades productivas centroamericanas hacia America del Norte, Europa y Asia.' },
        { statements: [{ text: 'Caminos, canoas y mensajeros antiguos apoyaron comunicacion e intercambio.', answer: true }, { text: 'Agricultura, industria y servicios de Centroamerica pueden conectarse con otros continentes mediante rutas actuales.', answer: true }, { text: 'Comparar antes y hoy implica afirmar que medios y escala no cambiaron.', answer: false }] },
      ),
    ],
  }),

  lesson({
    id: 's03-ccss-2', title: 'Actividades y condiciones de trabajo', icon: 'BriefcaseBusiness', minutes: 14,
    gancho: 'Dos personas pueden trabajar en comercio y tener condiciones laborales muy distintas.',
    objetivos: ['Analizar actividades y condiciones de trabajo en Guatemala mediante los rasgos de la economia informal'],
    resumen: [
      'En Guatemala hay trabajo en agricultura, industria, construccion, comercio y servicios.',
      'Las condiciones incluyen horario, seguridad, ingreso, contrato y prestaciones; varian incluso dentro de una misma actividad.',
      'La economia informal suele operar sin registro o contrato laboral, con ingresos variables y sin prestaciones.',
      'Informal no significa necesariamente ilegal ni deshonesto; describe condiciones economicas y laborales.',
    ],
    media: {
      id: 's03-ccss-2-trabajo', kind: 'diagram', title: 'Actividad y condicion laboral', aspect: '16:9',
      alt: 'Cuatro escenas muestran agricultura, fabrica, construccion y venta, junto a criterios de contrato, seguridad, ingreso y prestaciones.',
      brief: 'Diagrama 1600x900 ambientado en Guatemala con cuatro escenas respetuosas: trabajo agricola, fabrica, construccion y venta de mercado. Debajo, tabla de condiciones: contrato, registro, seguridad, ingreso y prestaciones. Aclarar que una imagen no basta para determinar formalidad. Texto grande, alto contraste e iconos ademas de color.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:4.1.1', 'ccss:4.1.5'], prompt: 'Analiza actividades y condiciones de trabajo en Guatemala y distingue rasgos de la economia informal.' },
        { icon: 'BriefcaseBusiness', body: 'Agricultura, fabrica, construccion, comercio y servicios son **actividades**. Contrato, registro, seguridad, salario o ingreso y prestaciones son **condiciones**. En la economia informal suelen faltar registro, contrato y prestaciones, y el ingreso puede variar; informal no significa necesariamente ilegal.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.1.1', 'ccss:4.1.5'], title: 'Dos preguntas diferentes', prompt: 'Distingue que trabajo se realiza y bajo que condiciones se realiza en Guatemala.' },
        { icon: 'ListChecks', body: '**Actividad:** cultivar maiz, coser ropa, construir, vender o transportar. **Condiciones:** horario, riesgos, pago, contrato y prestaciones. Un puesto registrado puede ofrecer contrato y prestaciones; una venta informal puede no tener registro, contrato ni ingreso estable. Se analiza evidencia, no la apariencia de la persona.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.1.1', 'ccss:4.1.5'], title: 'Modelo con evidencia suministrada', prompt: 'Observa como analizar actividad, condiciones y economia informal sin juzgar a quien trabaja.' },
        { icon: 'Store', problem: 'Caso ficticio: Elena vende fruta en Guatemala. Compra su mercaderia, no tiene contrato ni prestaciones y sus ingresos cambian cada dia.', steps: [{ text: 'Actividad: comercio.' }, { text: 'Condiciones: trabajo por cuenta propia, sin contrato ni prestaciones, con ingreso variable.' }, { text: 'Rasgos: corresponden a economia informal.' }, { text: 'Limite: informal no prueba ilegalidad ni falta de honradez.' }], answer: 'La clasificacion usa condiciones suministradas, no prejuicios.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.1.1', 'ccss:4.1.5'], prompt: 'Con ayuda, clasifica datos de trabajo en Guatemala como actividad o condicion.', hint: 'Pregunta si dice que se hace o como se trabaja.', explain: 'Una actividad puede presentarse bajo condiciones distintas.' },
        { buckets: [{ id: 'a', label: 'Actividad', icon: 'Hammer' }, { id: 'c', label: 'Condicion', icon: 'ClipboardCheck' }], items: [{ id: '1', text: 'Cultivar hortalizas', bucket: 'a' }, { id: '2', text: 'Tener contrato escrito', bucket: 'c' }, { id: '3', text: 'Vender en el mercado', bucket: 'a' }, { id: '4', text: 'Recibir prestaciones', bucket: 'c' }] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.1.1', 'ccss:4.1.5'], prompt: 'Un albanil trabaja por proyectos, sin contrato ni prestaciones y con ingreso variable. ¿Que analisis esta respaldado?', hint: 'Usa solo las condiciones descritas.', explain: 'El caso presenta rasgos frecuentes de economia informal; no demuestra ilegalidad.' },
        { options: [{ id: 'a', text: 'Construccion con rasgos informales por contrato, prestaciones e ingreso' }, { id: 'b', text: 'Trabajo ilegal porque no tiene salario fijo' }, { id: 'c', text: 'Agricultura formal porque usa herramientas' }], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:4.1.1', 'ccss:4.1.5'], prompt: 'Analiza este caso ficticio de Guatemala: Tomas presta servicio de reparacion, trabaja sin registro ni contrato, no recibe prestaciones y su ingreso varia. Identifica actividad, condiciones y rasgos de economia informal; aclara por que informal no significa ilegal.' },
        { minWords: 24, placeholder: 'Actividad... Condiciones... Economia informal... Limite...', model: 'La actividad es un servicio de reparacion. La falta de registro, contrato y prestaciones, junto con ingreso variable, son rasgos informales; no prueban ilegalidad.', rubric: ['Identifique la actividad', 'Use cuatro condiciones', 'Evite estigmatizar'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:4.1.1', 'ccss:4.1.5'], prompt: 'Compara dos trabajos en Guatemala: una trabajadora agricola con contrato, salario y prestaciones; y una venta de comida sin registro ni contrato, sin prestaciones y con ingreso variable. ¿Que analisis distingue actividad, condiciones y economia informal?' },
        { options: [{ id: 'a', text: 'Agricultura con condiciones formales; comercio con rasgos informales, sin que informal signifique ilegal' }, { id: 'b', text: 'Ambas actividades son informales porque venden productos' }, { id: 'c', text: 'Tener prestaciones convierte la agricultura en un servicio' }], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.1.1', 'ccss:4.1.5'], prompt: 'Salida: analiza en Guatemala una venta sin registro ni contrato, sin prestaciones y con ingreso variable; compara actividad y condiciones de economia informal.' },
        { options: [{ id: 'a', text: 'Actividad comercial con rasgos informales; estos no prueban que el trabajo sea ilegal' }, { id: 'b', text: 'Actividad agricola formal porque hay productos' }, { id: 'c', text: 'Las condiciones no pueden analizarse' }], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.1.1', 'ccss:4.1.5'], prompt: 'Salida nueva: distingue actividades y condiciones de trabajo en Guatemala y analiza contrato, registro, prestaciones e ingreso en la economia informal.' },
        { statements: [{ text: 'Agricultura, fabrica, construccion, comercio y servicios son actividades laborales.', answer: true }, { text: 'Falta de contrato, registro y prestaciones e ingreso variable son rasgos frecuentes del trabajo informal.', answer: true }, { text: 'Economia informal significa siempre actividad ilegal.', answer: false }] },
      ),
    ],
  }),

  lesson({
    id: 's03-ccss-3', title: 'Roles de las mujeres: cambios y continuidades', icon: 'Users', minutes: 14,
    gancho: 'Las responsabilidades y oportunidades de las mujeres han variado entre sociedades y epocas.',
    objetivos: ['Comparar roles de las mujeres en distintas culturas y epocas en los ambitos familiar, economico y politico'],
    resumen: [
      'Los roles de las mujeres no han sido iguales en todas las culturas, epocas ni grupos sociales.',
      'El ambito familiar incluye cuidado y decisiones del hogar; el economico, produccion, comercio y trabajo remunerado; el politico, autoridad y participacion publica.',
      'Las fuentes muestran tanto continuidades como cambios, pero un ejemplo no representa a todas las mujeres.',
    ],
    media: {
      id: 's03-ccss-3-mujeres', kind: 'diagram', title: 'Roles en tres ambitos', aspect: '16:9',
      alt: 'Una tabla compara roles familiares, economicos y politicos de mujeres en distintas culturas y epocas.',
      brief: 'Diagrama comparativo 1600x900 con tres columnas: familiar, economico y politico. Filas con ejemplos historicos contextualizados y actuales: administracion de hogar, produccion y comercio, autoridad o participacion publica. Incluir nota: los roles variaron segun cultura, epoca y condicion social. Representacion diversa, no estereotipada, texto grande y alto contraste.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:4.2.2'], prompt: 'Compara roles de las mujeres entre culturas y epocas en los ambitos familiar, economico y politico, reconociendo cambios y continuidades.' },
        { icon: 'Users', body: 'En distintas sociedades, las mujeres han cuidado familias, producido alimentos, comerciado, trabajado y participado en decisiones. Las posibilidades cambiaron segun cultura, epoca y condicion social; ningun ejemplo describe a todas.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.2.2'], title: 'Tres ambitos para comparar', prompt: 'Distingue roles familiares, economicos y politicos de las mujeres a traves del tiempo.' },
        { icon: 'Columns3', body: '**Familiar:** cuidado, administracion y decisiones del hogar. **Economico:** agricultura, artesania, comercio, profesiones y trabajo remunerado. **Politico:** autoridad, organizacion y participacion publica. Comparar busca cambios y continuidades, no ordenar culturas como superiores.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.2.2'], title: 'Modelo con dos fichas', prompt: 'Observa una comparacion entre mujeres de culturas y epocas distintas en los tres ambitos.' },
        { icon: 'GitCompare', problem: 'Ficha A: una comerciante maya participaba en produccion y mercado, cuidaba a su familia y podia influir en redes locales. Ficha B: una alcaldesa guatemalteca actual combina trabajo remunerado, responsabilidades familiares compartidas y autoridad politica.', steps: [{ text: 'Familiar: ambas participan, pero hoy puede destacarse responsabilidad compartida.' }, { text: 'Economico: ambas realizan trabajo productivo o comercial.' }, { text: 'Politico: cambia el acceso formal a un cargo electo.' }, { text: 'Limite: dos fichas no representan a todas las mujeres.' }], answer: 'Hay continuidad economica y cambios en formas de participacion politica y familiar.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.2.2'], prompt: 'Con ayuda, organiza ejemplos de roles de mujeres de distintas culturas y epocas por ambito.', hint: 'Pregunta si corresponde al hogar, la produccion e intercambio o la decision publica.', explain: 'Un mismo rol puede relacionarse con mas de un ambito; aqui se usa su funcion principal en la ficha.' },
        { buckets: [{ id: 'f', label: 'Familiar', icon: 'House' }, { id: 'e', label: 'Economico', icon: 'Store' }, { id: 'p', label: 'Politico', icon: 'Landmark' }], items: [{ id: '1', text: 'Administrar alimentos del hogar', bucket: 'f' }, { id: '2', text: 'Vender textiles en un mercado', bucket: 'e' }, { id: '3', text: 'Participar en un consejo comunitario', bucket: 'p' }] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.2.2'], prompt: 'Al comparar roles de mujeres entre culturas y epocas, ¿que conclusion es cuidadosa?', hint: 'Evita convertir un ejemplo en regla universal.', explain: 'Las fuentes permiten observar cambios y continuidades, con diferencias por cultura y condicion social.' },
        { options: [{ id: 'a', text: 'Los roles familiares, economicos y politicos variaron y no fueron iguales para todas' }, { id: 'b', text: 'Todas las mujeres de una epoca tuvieron la misma vida' }, { id: 'c', text: 'Las mujeres nunca participaron en actividades economicas' }], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:4.2.2'], prompt: 'Compara de forma independiente los roles de mujeres de estas dos fichas: una artesana de una cultura antigua produce ceramica, administra alimentos familiares y no ocupa el consejo; una cooperativista actual comparte cuidados, vende productos y representa a su grupo ante el municipio. Explica cambio y continuidad familiar, economica y politica, sin generalizar.' },
        { minWords: 27, placeholder: 'Familiar... Economico... Politico... Cambio y continuidad...', model: 'Ambas participan en familia y produccion. La cooperativista comparte cuidados y tiene representacion politica formal. Es un contraste cuidadoso entre las dos fichas suministradas, no entre todas las mujeres.', rubric: ['Compare los tres ambitos', 'Explique cambio y continuidad', 'Evite generalizaciones'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:4.2.2'], prompt: 'Una fuente historica muestra agricultoras y comerciantes; una actual muestra mujeres en cargos publicos y trabajos diversos. ¿Que comparacion es valida?' },
        { options: [{ id: 'a', text: 'Hay continuidad economica y cambios en oportunidades politicas, con variaciones entre culturas y personas' }, { id: 'b', text: 'La fuente prueba que todas tuvieron los mismos roles familiares' }, { id: 'c', text: 'Solo el presente tiene trabajo realizado por mujeres' }], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.2.2'], prompt: 'Salida: compara roles de mujeres de distintas culturas y epocas en familia, economia y politica mediante cambios y continuidades.' },
        { options: [{ id: 'a', text: 'El trabajo familiar y economico muestra continuidades; la participacion politica presenta cambios, sin representar igual a todas' }, { id: 'b', text: 'Una sola ficha demuestra que todas las culturas asignaron roles identicos' }, { id: 'c', text: 'Los roles economicos nunca se relacionaron con mujeres' }], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.2.2'], prompt: 'Salida nueva: compara cambios y continuidades de roles de las mujeres entre culturas y tiempos en los ambitos familiar, economico y politico.' },
        { statements: [{ text: 'Las mujeres han participado en actividades familiares y economicas en distintas sociedades.', answer: true }, { text: 'Las oportunidades de participacion politica han variado entre culturas y epocas.', answer: true }, { text: 'Un ejemplo permite generalizar la misma experiencia a todas las mujeres.', answer: false }] },
      ),
    ],
  }),
];
