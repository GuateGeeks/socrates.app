/**
 * Ciencias Sociales · Unidad 1 · Semana 2 — Un mercado saludable y respetuoso.
 * Progresion: interpretar indicadores demograficos con cautela → comparar cambios tecnologicos
 * entre paises → participar en la proteccion del patrimonio con respeto a la diversidad.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  lesson({
    id: 's02-ccss-1',
    title: 'Los continentes vistos con indicadores',
    icon: 'ChartNoAxesColumn',
    minutes: 14,
    gancho: 'Un mercado puede necesitar juegos para la ninez o espacios de descanso. ¿Que datos ayudan a decidir sin convertir a millones de personas en un solo estereotipo?',
    objetivos: ['Reflexionar con cautela sobre indicadores demograficos suministrados de los continentes del mundo'],
    resumen: [
      'Los indicadores demograficos describen aspectos de una poblacion, como su tamano relativo y su perfil de edades; ninguno explica por si solo toda la realidad.',
      'Comparar continentes permite formular necesidades posibles, pero los datos redondeados y continentales no describen cada pais, comunidad o persona.',
    ],
    media: {
      id: 's02-ccss-1-indicadores', kind: 'diagram', title: 'Ficha demografica continental', aspect: '16:9',
      alt: 'Tabla didactica fechada en 2024 que compara proporcion aproximada de poblacion mundial y perfil de edad de Africa, Asia, America, Europa y Oceania.',
      brief: 'Diagrama 1600x900 de alto contraste. Tabla titulada "Ficha didactica: referencia 2024" con Africa, Asia, America, Europa y Oceania; mostrar proporciones redondeadas 19%, 59%, 13%, 9% y menos de 1%, y perfiles cualitativos joven, diverso, diverso, mas envejecido y diverso. Incluir en texto grande: "Cifras redondeadas para comparar; no describen cada pais ni sustituyen una fuente actual". Tipografia legible, sin banderas ni fotografias.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:3.1.1'], title: 'Una cifra abre preguntas', prompt: 'Reflexiona sobre indicadores demograficos de Africa, Asia, America, Europa y Oceania. La ficha usa **datos didacticos redondeados con fecha de referencia 2024**: sirven para comparar, pero no representan cada pais ni toda la realidad.' },
        { icon: 'ChartNoAxesColumn', body: 'Un indicador resume una caracteristica de una poblacion. La **proporcion de poblacion mundial** compara tamanos; el **perfil de edad** ayuda a preguntar por escuelas, empleo, salud o cuidados. Una cifra no decide por si sola.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.1.1'], title: 'Paquete de datos suministrado', prompt: 'Compara los cinco continentes y conserva los limites de la ficha antes de inferir necesidades.' },
        { icon: 'TableProperties', body: '**Ficha didactica, referencia 2024, cifras redondeadas:** Asia: cerca de 59% de la poblacion mundial; Africa: 19%; America: 13%; Europa: 9%; Oceania: menos de 1%. En conjunto, Africa presenta un perfil mas joven y Europa uno mas envejecido; Asia, America y Oceania contienen perfiles muy diversos. Los redondeos no deben sumarse como medicion exacta y ningun promedio describe cada pais.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.1.1'], title: 'Modelo de reflexion cauta', prompt: 'Observa como pasar de los indicadores de Africa, Asia, America, Europa y Oceania a una conclusion que reconoce limites.' },
        { icon: 'SearchCheck', problem: '¿Que puede inferirse del perfil joven de Africa y del perfil mas envejecido de Europa?', steps: [
          { text: 'Describo la evidencia: la ficha didactica redondeada de 2024 muestra perfiles de edad diferentes.' },
          { text: 'Formulo necesidades posibles: mas poblacion joven puede aumentar demanda de educacion y empleo; mas personas mayores puede aumentar demanda de salud y cuidados.' },
          { text: 'Marco el limite: Asia, America, Europa, Africa y Oceania contienen paises diversos; el indicador continental no basta para decidir en una comunidad.' },
        ], answer: 'La reflexion compara indicadores, propone preguntas o necesidades y evita afirmar que todas las personas de un continente viven igual.' },
      ),
      S.match(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.1.1'], prompt: 'Guia: relaciona cada lectura de la ficha 2024 sobre Africa, Asia, America, Europa y Oceania con una reflexion demografica cauta.', hint: 'Distingue dato, necesidad posible y limite.', explain: 'Reflexionar no es repetir un porcentaje: es interpretar que podria significar y reconocer lo que no demuestra.' },
        { pairs: [
          { id: 'a', left: 'Asia concentra la mayor proporcion aproximada', right: 'Puede implicar grandes necesidades totales, pero no dice como se distribuyen entre paises' },
          { id: 'b', left: 'Africa tiene un perfil mas joven en conjunto', right: 'Invita a preguntar por educacion y empleo, sin describir igual a cada pais' },
          { id: 'c', left: 'Europa tiene un perfil mas envejecido en conjunto', right: 'Invita a preguntar por salud y cuidados, sin borrar diferencias internas' },
          { id: 'd', left: 'Oceania representa menos de 1% en la ficha', right: 'Una proporcion pequena no vuelve menos importantes sus necesidades' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.1.1'], prompt: 'Con los datos didacticos redondeados de 2024, Africa tiene perfil mas joven, Europa mas envejecido y Asia, America y Oceania son internamente diversas. ¿Que reflexion usa bien los indicadores?', hint: 'Busca una conclusion que proponga necesidades y reconozca limites.', explain: 'Los indicadores orientan preguntas; no prueban que todos los paises o habitantes tengan la misma necesidad.' },
        { options: [
          { id: 'a', text: 'Conviene explorar educacion, empleo y cuidados con datos de cada pais antes de decidir' },
          { id: 'b', text: 'Toda Africa necesita exactamente lo mismo y toda Europa tambien' },
          { id: 'c', text: 'La proporcion de poblacion demuestra la calidad de vida de cada habitante' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.1.1'], prompt: 'Aplicacion independiente. Los datos didacticos redondeados de 2024 comparan Africa, Asia, America, Europa y Oceania por proporcion de poblacion y perfil de edad. ¿Que conclusion reflexiva es valida para planear servicios?', explain: 'Una decision responsable combina el indicador continental con informacion mas cercana y actual.' },
        { options: [
          { id: 'a', text: 'Los perfiles sugieren necesidades posibles, pero hay que consultar datos actuales de cada pais y comunidad' },
          { id: 'b', text: 'El continente con mas poblacion siempre necesita un unico tipo de servicio' },
          { id: 'c', text: 'Los datos continentales permiten describir a cualquier familia sin preguntar nada mas' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.1.1'], prompt: 'Escribe una reflexion de dos oraciones sobre Africa, Asia, America, Europa y Oceania usando un indicador de la ficha didactica 2024: incluye una necesidad posible y un limite de los datos redondeados.' },
        { minWords: 18, placeholder: 'El indicador sugiere... Sin embargo, no basta porque...', model: 'El perfil de edad puede orientar preguntas sobre escuelas o cuidados. Sin embargo, el dato continental redondeado no describe cada pais ni reemplaza informacion local actual.', rubric: ['Use un indicador suministrado', 'Propuse una necesidad o pregunta', 'Reconoci un limite del dato'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.1.1'], prompt: 'Salida. En los datos didacticos redondeados de 2024 sobre proporcion de poblacion y edad, Africa tiene perfil mas joven, Europa mas envejecido y Asia, America y Oceania muestran diversidad interna. ¿Que reflexion sobre necesidades y decisiones respeta el limite del indicador?' },
        { options: [
          { id: 'a', text: 'Puede orientar preguntas sobre educacion o cuidados, pero se necesitan datos actuales de cada pais' },
          { id: 'b', text: 'Permite asignar la misma necesidad a todas las personas del continente' },
          { id: 'c', text: 'Hace innecesario conocer informacion de las comunidades' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.1.1'], prompt: 'Salida nueva. Reflexiona sobre los datos didacticos redondeados de 2024 de Africa, Asia, America, Europa y Oceania: poblacion, perfil de edad, necesidades y limites.' },
        { statements: [
          { text: 'Comparar perfiles de edad puede sugerir preguntas sobre servicios, sin demostrar que todos los paises sean iguales.', answer: true },
          { text: 'Una proporcion continental basta para decidir las necesidades de cada comunidad.', answer: false },
        ] },
      ),
    ],
  }),

  lesson({
    id: 's02-ccss-2',
    title: 'Tecnologia que cambia paises y mercados',
    icon: 'RadioTower',
    minutes: 15,
    gancho: 'Una tecnologia puede abrir ventas y difundir historias, pero tambien crear nuevas responsabilidades. ¿Ocurre igual en paises distintos?',
    objetivos: ['Comparar cambios tecnologicos de Guatemala y Corea del Sur y sus efectos culturales, economicos y en valores sociales'],
    resumen: [
      'Entre las decadas de 1990 y 2020, Guatemala y Corea del Sur ampliaron el uso de redes digitales desde contextos tecnologicos y economicos distintos.',
      'Los cambios tecnologicos pueden transformar cultura y economia; sus efectos sobre privacidad, inclusion, respeto y responsabilidad dependen de decisiones sociales.',
    ],
    media: {
      id: 's02-ccss-2-tecnologia', kind: 'diagram', title: 'Dos trayectorias tecnologicas', aspect: '16:9',
      alt: 'Dos lineas de tiempo comparan cambios tecnologicos de Guatemala y Corea del Sur entre las decadas de 1990 y 2020 y sus efectos culturales, economicos y sociales.',
      brief: 'Diagrama comparativo 1600x900, alto contraste. Linea Guatemala: radio y telefono fijo en los anos 1990 hacia telefonos moviles, mensajeria y pagos digitales en los 2020. Linea Corea del Sur: manufactura y telefonia de los 1990 hacia internet de alta velocidad, automatizacion y servicios digitales en los 2020. Bajo cada linea, tres columnas rotuladas CULTURA, ECONOMIA y VALORES SOCIALES. Texto grande; nota "sintesis didactica de cambios generales; no describe a toda la poblacion".',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:3.2.1'], title: 'Comparar cambio y efecto', prompt: 'Compara como cambiaron tecnologias en **Guatemala** y **Corea del Sur** entre las decadas de 1990 y 2020, y analiza efectos en **cultura, economia y valores sociales** como privacidad, inclusion y responsabilidad.' },
        { icon: 'GitCompareArrows', body: 'Una tecnologia no produce un solo efecto. Hay que preguntar: ¿que se usaba antes?, ¿que se usa despues?, ¿que cambia en la cultura y la economia?, ¿que decisiones de respeto, equidad o privacidad aparecen?' },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.1'], title: 'Dos fichas de pais suministradas', prompt: 'Lee los cambios generales de Guatemala y Corea del Sur y compara efectos culturales, economicos y de valores.' },
        { icon: 'Files', body: '**Guatemala, 1990-2020:** radio y telefono fijo siguieron presentes mientras crecieron celulares, mensajeria y pagos digitales; esto amplio difusion de idiomas y ventas, pero planteo acceso desigual, privacidad y respeto al compartir contenido. **Corea del Sur, 1990-2020:** crecieron internet de alta velocidad, automatizacion y servicios digitales; esto amplio industrias culturales y productividad, pero planteo cambios laborales, proteccion de datos y equidad. Son sintesis generales, no experiencias de toda persona.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.1'], title: 'Modelo comparativo', prompt: 'Observa como comparar Guatemala y Corea del Sur sin aislar la tecnologia de sus efectos culturales, economicos y de valores.' },
        { icon: 'Columns3', problem: '¿Que semejanza y diferencia muestran las fichas?', steps: [
          { text: '**Cambio:** ambos paises ampliaron redes digitales; Corea del Sur tambien extendio fuertemente automatizacion industrial.' },
          { text: '**Cultura:** en Guatemala facilito difusion de idiomas y expresiones locales; en Corea del Sur amplio circulacion de industrias culturales.' },
          { text: '**Economia:** apoyo ventas y pagos en Guatemala, y productividad y servicios digitales en Corea del Sur.' },
          { text: '**Valores sociales:** ambos casos exigen privacidad, inclusion, respeto y responsabilidad; el acceso y los efectos no son iguales.' },
        ], answer: 'La comparacion relaciona antes y despues en dos paises con tres dimensiones de efecto.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.1'], prompt: 'Guia: compara Guatemala y Corea del Sur entre 1990 y 2020. Clasifica efectos del cambio de radio, telefonia, internet y automatizacion en cultura, economia o valores sociales.', hint: 'Pregunta si cambia expresion, produccion/intercambio o convivencia responsable.', explain: 'El mismo cambio puede tocar varias dimensiones; aqui se clasifica su efecto principal.' },
        { buckets: [
          { id: 'c', label: 'Cultura', icon: 'Languages', color: 'var(--area-l1)' },
          { id: 'e', label: 'Economia', icon: 'Store', color: 'var(--c-maiz-strong)' },
          { id: 'v', label: 'Valores sociales', icon: 'Scale', color: 'var(--area-fc)' },
        ], items: [
          { id: 'a', text: 'Difusion digital de idiomas locales en Guatemala', bucket: 'c' },
          { id: 'b', text: 'Automatizacion y productividad en Corea del Sur', bucket: 'e' },
          { id: 'c', text: 'Cuidar privacidad y trato respetuoso en ambos paises', bucket: 'v' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.1'], prompt: 'Al comparar Guatemala y Corea del Sur de 1990 a 2020, ¿que analisis integra cambio tecnologico y efectos culturales, economicos y de valores sociales?', hint: 'La respuesta debe incluir los dos paises y las tres dimensiones.', explain: 'Comparar exige reconocer semejanzas y diferencias, no presentar un ejemplo aislado.' },
        { options: [
          { id: 'a', text: 'Ambos ampliaron redes digitales; cambiaron expresiones culturales y actividades economicas, con retos de privacidad e inclusion' },
          { id: 'b', text: 'Solo Guatemala tuvo cambios y estos fueron unicamente culturales' },
          { id: 'c', text: 'La automatizacion elimina cualquier responsabilidad social' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.2.1'], prompt: 'Aplicacion independiente. Guatemala paso de mayor dependencia de radio y telefono fijo a mas servicios moviles; Corea del Sur amplio internet y automatizacion. ¿Que comparacion relaciona efectos culturales, economicos y de valores sociales?' },
        { options: [
          { id: 'a', text: 'En ambos cambiaron comunicacion y economia; difusion cultural, empleo, privacidad y equidad requieren decisiones distintas segun el contexto' },
          { id: 'b', text: 'En los dos paises toda persona recibio exactamente los mismos beneficios' },
          { id: 'c', text: 'Los cambios tecnologicos no influyen en cultura ni valores' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.2.1'], prompt: 'Escribe una comparacion entre Guatemala y Corea del Sur: un cambio tecnologico entre 1990 y 2020, un efecto cultural, uno economico y una decision de privacidad, inclusion o responsabilidad.' },
        { minWords: 24, placeholder: 'En Guatemala... En Corea del Sur... Ambos...', model: 'Guatemala amplio servicios moviles y Corea del Sur internet y automatizacion. En ambos cambiaron cultura y economia; privacidad e inclusion requieren decisiones responsables segun cada contexto.', rubric: ['Compare dos paises', 'Explique cambio en el tiempo', 'Inclui cultura, economia y valores sociales'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.1'], prompt: 'Salida. Compara Guatemala y Corea del Sur antes y despues de ampliar radio, telefonia, internet o automatizacion. ¿Que opcion evalua efectos en cultura, economia y valores como privacidad e inclusion?' },
        { options: [
          { id: 'a', text: 'Los dos contextos muestran oportunidades culturales y economicas, junto con responsabilidades sociales que no se resuelven solo con tecnologia' },
          { id: 'b', text: 'Un aparato produce los mismos resultados culturales y economicos en cualquier pais' },
          { id: 'c', text: 'La privacidad no tiene relacion con el cambio tecnologico' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.1'], prompt: 'Salida nueva. Compara cambios de internet, telefonia y automatizacion entre 1990 y 2020 en Guatemala y Corea del Sur y sus efectos culturales, economicos y en valores sociales.' },
        { statements: [
          { text: 'En ambos paises las redes digitales abrieron actividades culturales y economicas, con retos de privacidad, inclusion y responsabilidad.', answer: true },
          { text: 'Un ejemplo aislado de Guatemala basta para comparar dos paises y todas las dimensiones.', answer: false },
        ] },
      ),
    ],
  }),

  lesson({
    id: 's02-ccss-3',
    title: 'Una contribucion respetuosa al patrimonio',
    icon: 'Landmark',
    minutes: 15,
    gancho: 'Una ficha para una muestra escolar puede ayudar a conservar una expresion cultural o repetir una falta de respeto. ¿Que debe incluir?',
    objetivos: ['Crear una contribucion breve que promueva la proteccion del patrimonio y practique respeto por diferencias etnicas, culturales y linguisticas'],
    resumen: [
      'Participar en la proteccion, conservacion y desarrollo del patrimonio implica documentar o difundir con permiso, credito y beneficio respetuoso para quienes lo mantienen vivo.',
      'Aceptar, tolerar y respetar diferencias etnicas, culturales y linguisticas exige escuchar nombres propios, evitar burlas y no presentar una cultura como adorno o curiosidad.',
    ],
    media: {
      id: 's02-ccss-3-fichas', kind: 'image', title: 'Fichas para una muestra respetuosa', aspect: '16:9',
      alt: 'Dos fichas modelo muestran un tejido comunitario y un relato oral, con espacios para credito, permiso, accion de conservacion y regla de respeto linguistico.',
      brief: 'Imagen didactica 1600x900 de alto contraste. Dos fichas sin fotografias de personas: A, detalle generico de tejido con campos "nombre dado por la comunidad", "credito a artesanas y artesanos", "permiso" y "accion de conservacion"; B, icono de relato oral con campos "idioma", "persona o comunidad portadora", "permiso para registrar" y "regla de respeto a la pronunciacion". Incluir texto grande: "No inventar significados; preguntar y acreditar". Diseno legible y sin atribuir motivos a una comunidad real.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:3.2.5', 'ccss:3.2.6'], title: 'Patrimonio y diversidad se cuidan juntos', prompt: 'Participa en la **proteccion, conservacion y desarrollo del patrimonio** mediante una contribucion escrita, y practica **aceptacion, tolerancia y respeto** por diferencias etnicas, culturales y linguisticas.' },
        { icon: 'HandHeart', body: 'Promover patrimonio no es copiarlo sin permiso. Una contribucion responsable acredita a la comunidad, evita inventar significados, propone una accion viable y usa nombres e idiomas sin burla ni discriminacion.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.5', 'ccss:3.2.6'], title: 'Paquete suministrado para participar', prompt: 'Elige una ficha y prepara una contribucion para la muestra escolar del mercado. Ambas permiten proteger patrimonio y practicar respeto por diversidad etnica, cultural y linguistica.' },
        { icon: 'Files', body: '**Ficha A, tejido comunitario (escenario):** una asociacion autoriza mostrar una reproduccion didactica si se acredita a las personas artesanas y no se inventa el significado del diseno. **Ficha B, relato oral (escenario):** una familia autoriza citar una frase en su idioma si se escribe el nombre del idioma, se acredita a la familia y nadie imita la pronunciacion para burlarse. En ambos casos, conservar exige permiso, credito y trato digno.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.5', 'ccss:3.2.6'], title: 'Modelo de contribucion', prompt: 'Observa una ficha que participa en la proteccion del patrimonio y practica aceptacion, tolerancia y respeto por diferencias culturales y linguisticas.' },
        { icon: 'FileText', problem: '¿Como presentar la Ficha B sin apropiarse del relato?', steps: [
          { text: 'Credito: "Relato compartido con permiso por la familia del escenario; idioma indicado por ella".' },
          { text: 'Conservacion: "Guardaremos la fuente y no cambiaremos sus palabras sin autorizacion".' },
          { text: 'Respeto: "Escuchamos la pronunciacion sin burlas y aceptamos que otra lengua expresa conocimiento".' },
        ], answer: 'La contribucion promueve patrimonio y convierte el respeto linguistico en una practica observable.' },
      ),
      S.match(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.5', 'ccss:3.2.6'], prompt: 'Guia: relaciona acciones de una contribucion con proteccion del patrimonio y respeto por diferencias etnicas, culturales y linguisticas.', hint: 'Busca permiso, credito, conservacion y trato digno.', explain: 'Participar exige acciones concretas, no solo decir que el patrimonio importa.' },
        { pairs: [
          { id: 'a', left: 'Pedir permiso y acreditar', right: 'Protege la autoria y participacion de la comunidad' },
          { id: 'b', left: 'No inventar un significado', right: 'Respeta el conocimiento cultural de quienes mantienen la expresion' },
          { id: 'c', left: 'Escuchar un idioma sin burlas', right: 'Practica aceptacion, tolerancia y respeto linguistico' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:3.2.5', 'ccss:3.2.6'], prompt: 'Para crear una ficha que promueva proteccion y conservacion del patrimonio y respeto por diversidad etnica, cultural y linguistica, ¿que conjunto de acciones corresponde?', hint: 'La contribucion debe poder usarse en la muestra.', explain: 'Permiso, credito, una accion de cuidado y una regla de respeto vuelven ejecutable la participacion.' },
        { options: [
          { id: 'a', text: 'Acreditar, usar permiso, proponer conservacion y evitar burlas o significados inventados' },
          { id: 'b', text: 'Copiar sin credito y cambiar el nombre del idioma para que sea mas facil' },
          { id: 'c', text: 'Decir que todo patrimonio es igual y no mencionar a quienes lo conservan' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.2.5', 'ccss:3.2.6'], prompt: 'Realiza ahora tu contribucion para la muestra: elige la Ficha A o B y escribe un mensaje breve que promueva proteccion, conservacion o desarrollo del patrimonio. Incluye credito o permiso y una practica de aceptacion, tolerancia y respeto por la diferencia cultural o linguistica.' },
        { minWords: 22, placeholder: 'Ficha elegida... Protegemos este patrimonio al... Mostramos respeto al...', model: 'Ficha B. Conservamos el relato usando solo la parte autorizada y acreditando a la familia del escenario. Respetamos su idioma al nombrarlo correctamente y escuchar sin burlas.', rubric: ['Hice una contribucion completa en la actividad', 'Propuse una accion de proteccion o conservacion', 'Inclui permiso o credito', 'Practique respeto cultural o linguistico'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:3.2.5', 'ccss:3.2.6'], prompt: 'Antes de publicar tu contribucion de patrimonio, elige la revision que demuestra participacion y respeto por diferencias etnicas, culturales y linguisticas.' },
        { options: [
          { id: 'a', text: 'Verificar permiso, credito, accion de conservacion y lenguaje sin burla ni discriminacion' },
          { id: 'b', text: 'Agregar un significado inventado para que la ficha parezca mas interesante' },
          { id: 'c', text: 'Ocultar el idioma y la comunidad para que todas las fichas se vean iguales' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.5', 'ccss:3.2.6'], prompt: 'Salida. ¿Que contribucion participa en proteccion, conservacion y desarrollo del patrimonio y practica aceptacion, tolerancia y respeto por diferencias etnicas, culturales y linguisticas?' },
        { options: [
          { id: 'a', text: 'Una ficha con permiso, credito, accion de cuidado y regla contra burlas o discriminacion' },
          { id: 'b', text: 'Una copia sin fuente que cambia nombres culturales para vender mas' },
          { id: 'c', text: 'Una afirmacion de respeto sin realizar ninguna accion de proteccion' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:3.2.5', 'ccss:3.2.6'], prompt: 'Salida nueva. Evalua una contribucion que promueve proteccion del patrimonio y practica aceptacion, tolerancia y respeto por diversidad etnica, cultural y linguistica.' },
        { statements: [
          { text: 'Acreditar a quienes mantienen una expresion y respetar su idioma son acciones concretas de participacion.', answer: true },
          { text: 'Inventar significados y usar una pronunciacion para burlarse ayuda a conservar el patrimonio.', answer: false },
        ] },
      ),
      cierre(
        { areas: ['ccss'], cnb: ['ccss:3.2.5', 'ccss:3.2.6'] },
        ['Interpreto indicadores sin estereotipos', 'Comparo efectos tecnologicos entre paises', 'Participo en el cuidado respetuoso del patrimonio'],
        ['Acreditare las fuentes culturales', 'Escuchare otros idiomas sin burlas'],
      ),
    ],
  }),
];
