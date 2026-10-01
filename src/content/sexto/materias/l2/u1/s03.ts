/**
 * L2 (español como segundo idioma) · Unidad 1 · Semana 3
 * Mensajes sin palabras: señales de la calle y la comunidad; símbolos que describen personas,
 * animales y objetos; información no verbal en noticias y anuncios.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's03-l2-1',
    title: 'Señales de la calle y de mi comunidad',
    icon: 'Signpost',
    minutes: 14,
    gancho: 'Una turista que no habla español maneja por la carretera y ve un octágono rojo. ¿Sabrá qué hacer aunque no lea la palabra?',
    objetivos: ['Interpretar señales comunitarias por su forma, color e ícono para orientar una ruta'],
    resumen: [
      'Las señales se entienden por su forma, su color y su dibujo, aunque no sepas leer el idioma.',
      'Reglamentarias (obligan o prohíben): el ALTO es un octágono rojo; muchas llevan un círculo con borde rojo, y si está tachado, prohíbe.',
      'Preventivas (avisan un peligro): rombo amarillo con dibujo negro, como curva o derrumbe. Informativas (orientan): rectángulos azules para servicios y verdes para destinos.',
      'En escuelas y edificios, las señales verdes muestran la dirección de evacuación designada y el punto de reunión; se siguen atendiendo los riesgos actuales y las instrucciones responsables.',
    ],
    media: {
      id: 's03-l2-1-familias-senales', kind: 'diagram', title: 'Tres familias de señales', aspect: '16:9',
      alt: 'Tres columnas de señales: reglamentarias (alto, ceda el paso, prohibido estacionar), preventivas (curva, derrumbe, animales) e informativas (hospital, teléfono, destino con kilómetros).',
      brief: 'Diagrama plano en tres columnas con encabezado de color. Columna 1 "Reglamentarias – obligan o prohíben": octágono rojo con ALTO, triángulo invertido blanco con borde rojo (Ceda el paso), rectángulo blanco con círculo rojo tachado sobre una E (prohibido estacionar). Columna 2 "Preventivas – avisan un peligro": rombos amarillos con dibujo negro: curva, rocas cayendo (derrumbe), una vaca (animales en la vía). Columna 3 "Informativas – orientan": rectángulos azules con H (hospital) y un teléfono; rectángulo verde con "Antigua Guatemala 25 km" y flecha. Estilo limpio, sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:2.1.5'], ambito: 'conocer', title: 'Las tres familias de señales de tránsito',
          prompt: 'Las señales de tránsito se agrupan en tres familias. **Forma y color** te dicen a cuál pertenece cada una. Toca las tarjetas.' },
        { icon: 'Signpost', body: 'Mira primero el **color** y la **forma**; después, el **dibujo** te dice el detalle.', reveal: [
          { icon: 'Octagon', front: 'Reglamentarias', back: '**Obligan o prohíben.** El ALTO es un octágono rojo; "Ceda el paso", un triángulo con la punta hacia abajo. Muchas tienen un **círculo de borde rojo**; si el dibujo está **tachado**, está prohibido.' },
          { icon: 'Diamond', front: 'Preventivas', back: '**Avisan un peligro** que viene adelante. Son **rombos amarillos** con dibujo negro: curva, derrumbe, animales en la vía, cruce de peatones.' },
          { icon: 'Signpost', front: 'Informativas', back: '**Orientan.** Son rectángulos: **azules** para servicios (hospital, teléfono, gasolinera) y **verdes** para destinos y distancias ("Antigua Guatemala 25 km").' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.1.5'], ambito: 'conocer',
          prompt: 'Una turista que no lee español ve en la esquina un **octágono rojo** (figura de 8 lados). ¿Qué crees que hará?',
          explain: 'El octágono rojo significa **ALTO** en casi todo el mundo. Las señales se entienden por su **forma** y su **color**. Hoy aprenderás a leerlas.' },
        { options: [
          { id: 'a', text: 'Se detendrá por completo', icon: 'Hand' },
          { id: 'b', text: 'Acelerará', icon: 'Car', feedback: 'El rojo casi siempre indica detenerse o prohibición.' },
          { id: 'c', text: 'No sabrá qué hacer porque no lee español', icon: 'HelpCircle', feedback: 'La forma y el color bastan para entender esta señal, aun sin leer la palabra.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.1.5'], ambito: 'conocer', title: 'Señales para ubicar sitios importantes',
          prompt: 'En la escuela, el mercado, el centro de salud o la municipalidad también hay señales. Te ayudan a **encontrar lugares** y muestran la **dirección designada para evacuar**; hay que atender los riesgos actuales y las instrucciones de las autoridades.' },
        { icon: 'MapPin', body: 'Las señales de **emergencia y evacuación** son **verdes con dibujos blancos**: identifican información de seguridad, pero no garantizan que las condiciones del trayecto no hayan cambiado.', reveal: [
          { icon: 'Footprints', front: 'Ruta de evacuación', back: 'Una **persona corriendo** con una **flecha**: indica la dirección designada para evacuar, siempre que no haya un riesgo inmediato y el personal responsable mantenga esa instrucción.' },
          { icon: 'Users', front: 'Punto de reunión', back: 'Cuatro flechas que apuntan hacia un grupo de personas: el lugar designado donde todos se reúnen.' },
          { icon: 'Building2', front: 'Letra H', back: 'Hospital o centro de salud cercano.' },
          { icon: 'Info', front: 'Letra i', back: 'Información: allí puedes preguntar cómo llegar a otros lugares.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.1.5'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: camino a la escuela ves estas señales. Clasifícalas según su familia.',
          hint: 'Rojo u octágono → reglamentaria. Rombo amarillo → preventiva. Rectángulo azul o verde → informativa.',
          explain: 'La forma y el color te dan la familia; el dibujo te da el mensaje exacto.' },
        { buckets: [
          { id: 'reg', label: 'Reglamentaria', icon: 'Octagon', color: 'var(--c-bad)' },
          { id: 'pre', label: 'Preventiva', icon: 'Diamond', color: 'var(--c-maiz-strong)' },
          { id: 'inf', label: 'Informativa', icon: 'Signpost', color: 'var(--area-l2)' },
        ], items: [
          { id: 's1', text: 'Octágono rojo con la palabra ALTO', bucket: 'reg' },
          { id: 's2', text: 'Rombo amarillo con una curva negra', bucket: 'pre' },
          { id: 's3', text: 'Rectángulo azul con una H blanca', bucket: 'inf' },
          { id: 's4', text: 'Círculo rojo con una bicicleta tachada', bucket: 'reg', feedback: 'El círculo rojo tachado prohíbe: no pueden pasar bicicletas.' },
          { id: 's5', text: 'Rombo amarillo con piedras cayendo', bucket: 'pre' },
          { id: 's6', text: 'Rectángulo verde: "Chimaltenango 12 km →"', bucket: 'inf' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.1.5'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo Sebastián usa las señales para llegar a un lugar que no conoce.' },
        { icon: 'Route', problem: 'Sebastián llega en bus a un pueblo nuevo y necesita llevar a su abuela al **centro de salud**. En la esquina ve un poste con dos rectángulos: uno **azul** con una **H** y una flecha **→**, y otro **verde** que dice "Mercado ←". ¿Qué hace?',
          steps: [
            { text: 'Identifica la familia: son rectángulos azul y verde → **informativas**. Lo orientan, no le prohíben nada.' },
            { text: 'Busca el símbolo de lo que necesita: la **H** significa hospital o centro de salud.' },
            { text: 'Sigue la flecha de esa señal: **→** indica que debe ir hacia la **derecha**.', why: 'La flecha de cada señal va con su propio destino; la del mercado apunta al otro lado.' },
            { text: 'En el camino ve un **rombo amarillo** con dos personas caminando: es preventiva, avisa que hay un **cruce de peatones**; camina con cuidado y cruza por allí.' },
          ],
          answer: 'Sebastián va hacia la **derecha**, siguiendo la señal azul con la H, y cruza por el paso de peatones.',
          tip: 'Busca el símbolo del lugar y sigue SU flecha.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.5'], ambito: 'hacer',
          prompt: 'Vas en carro con tu familia hacia Cobán y aparece un **rombo amarillo** con **piedras cayendo** de una ladera. ¿Qué mensaje da?',
          explain: 'Es preventiva: avisa que **puede haber derrumbes** adelante. Hay que ir despacio y con atención, sobre todo en época de lluvia.' },
        { options: [
          { id: 'a', text: 'Precaución: puede haber derrumbes adelante' },
          { id: 'b', text: 'Prohibido tirar piedras', feedback: 'Una prohibición llevaría un círculo rojo tachado, no un rombo amarillo.' },
          { id: 'c', text: 'Hay una mina de piedra para visitar', feedback: 'Los lugares para visitar se indican con señales informativas (rectángulos), no con rombos amarillos.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.5'], ambito: 'hacer',
          prompt: 'Durante un simulacro de sismo en tu escuela, sales del aula y ves en la pared un **rectángulo verde** con una **persona corriendo** y una **flecha hacia la izquierda**. ¿Qué haces?',
          explain: 'Es la señal de **ruta de evacuación**: indica la dirección designada para evacuar. Hay que caminar (sin correr ni empujar) en esa dirección si no hay un riesgo inmediato y seguir las instrucciones del personal responsable.',
          media: { id: 's03-l2-1-evacuacion', kind: 'image', title: 'Pasillo con ruta de evacuación', aspect: '4:3',
            alt: 'Pasillo de una escuela con una señal verde de persona corriendo y flecha hacia la izquierda; al fondo, un patio con la señal de punto de reunión.',
            brief: 'Ilustración de un pasillo de escuela pública guatemalteca (paredes pintadas a media altura, puertas de aulas). En la pared, a la altura de los ojos de un niño, una señal verde rectangular con una figura blanca corriendo hacia una puerta y una flecha blanca hacia la izquierda. Al fondo, a la izquierda, se ve el patio con un poste y la señal verde de punto de reunión (cuatro flechas hacia un grupo de personas). Niñas y niños caminando en fila, tranquilos. Sin texto adicional.' } },
        { options: [
          { id: 'a', text: 'Camino con calma hacia la izquierda si la ruta sigue habilitada y el personal lo indica', icon: 'Footprints' },
          { id: 'b', text: 'Corro hacia la derecha porque es más cerca de mi casa', icon: 'Wind', feedback: 'La flecha marca la dirección de evacuación designada, no una garantía: hay que comprobar los riesgos actuales y atender al personal responsable.' },
          { id: 'c', text: 'Me quedo en el pasillo esperando', icon: 'Clock', feedback: 'La señal pide avanzar hacia la salida y el punto de reunión.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.5'], ambito: 'hacer',
          prompt: 'Piensa en el camino de tu casa a la escuela (o al mercado). Escribe **qué señales** hay o deberían haber y **qué significa cada una**. Menciona al menos dos.' },
        { minWords: 25, placeholder: 'En mi camino hay…',
          model: 'En mi camino hay una señal de ALTO en la esquina de la iglesia: significa que los carros deben detenerse por completo. Más adelante hay un rombo amarillo con dos niños que avisa a los conductores que hay estudiantes cruzando. Frente al mercado debería haber una señal azul con una H que indique dónde está el centro de salud.',
          rubric: ['Menciono al menos dos señales', 'Describo su forma, color o dibujo', 'Explico qué significa cada una', 'Digo dónde está cada señal'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.5'], prompt: 'Boleto de salida: una señal tiene forma de **rombo amarillo**. ¿De qué familia es?' },
        { options: [
          { id: 'a', text: 'Preventiva: avisa un peligro' },
          { id: 'b', text: 'Reglamentaria: obliga o prohíbe' },
          { id: 'c', text: 'Informativa: orienta' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.5'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Una señal azul con una H indica un hospital o centro de salud.', answer: true },
          { text: 'Un círculo rojo con un dibujo tachado significa que eso está permitido.', answer: false, why: 'El dibujo tachado indica prohibición.' },
          { text: 'Las señales de ruta de evacuación son verdes.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's03-l2-2',
    title: 'Símbolos e imágenes que hablan',
    icon: 'Image',
    minutes: 14,
    gancho: 'En una caja de cartón hay un dibujo de una copa quebrada. Nadie escribió nada… pero todos entienden que hay que tener cuidado. ¿Por qué?',
    objetivos: ['Interpretar mensajes públicos no verbales mediante figuras, colores y marcas'],
    resumen: [
      'Un símbolo comunica sin palabras. Para leerlo, observa: la figura (quién o qué), el color, la forma y las marcas (tachado, flechas).',
      'Símbolos que describen personas: baño de mujeres u hombres, persona en silla de ruedas (acceso para personas con discapacidad), asiento para personas mayores o embarazadas.',
      'Símbolos de animales y objetos: perro con dientes (cuidado con el perro), copa quebrada (frágil), flechas en triángulo (reciclable).',
      'En noticias y anuncios: sol, nube, rayo y gotas en un mapa del tiempo; círculo rojo tachado = no hagas eso; rojo = peligro, amarillo = precaución, verde = información de seguridad o permiso según el contexto.',
    ],
    media: {
      id: 's03-l2-2-simbolos', kind: 'diagram', title: 'Símbolos de todos los días', aspect: '1:1',
      alt: 'Cuadrícula de nueve símbolos: baño de mujeres, baño de hombres, silla de ruedas, persona mayor con bastón, perro con dientes, copa quebrada, flechas de reciclaje, sol y nube con rayo.',
      brief: 'Diagrama cuadrado 3×3, estilo pictograma plano, figuras negras o blancas sobre fondos de color suave. Sin palabras, solo un número pequeño en la esquina de cada casilla (1-9): 1 figura con vestido (baño de mujeres), 2 figura con pantalón (baño de hombres), 3 silla de ruedas (accesibilidad), 4 persona mayor con bastón, 5 cabeza de perro mostrando los dientes, 6 copa quebrada, 7 tres flechas en triángulo (reciclaje), 8 sol, 9 nube con rayo y gotas. Líneas gruesas y claras para leerse en pantalla de celular.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:2.1.2'], ambito: 'conocer', title: 'Cómo se lee un símbolo',
          prompt: 'Un **símbolo** (o pictograma) es un dibujo sencillo que comunica una idea **sin palabras**. Lo entienden personas que hablan distintos idiomas. Para leerlo, revisa cuatro cosas.' },
        { icon: 'Eye', body: 'Muchos símbolos **describen** a una persona, un animal o un objeto, y a la vez dan un mensaje sobre él.', reveal: [
          { icon: 'User', front: '1. La figura', back: '¿Quién o qué aparece? Una persona con bastón = persona mayor. Una silla de ruedas = persona con discapacidad. Un perro = un animal.' },
          { icon: 'Palette', front: '2. El color', back: '**Rojo**: peligro o prohibición. **Amarillo**: precaución. **Verde**: información de seguridad o permiso según el contexto. **Azul**: información o servicio.' },
          { icon: 'Slash', front: '3. Las marcas', back: 'Una **línea que tacha** = no se permite. Una **flecha** = dirección. **Líneas de movimiento** = algo se mueve.' },
          { icon: 'MapPin', front: '4. El lugar', back: 'Una figura con vestido en una **puerta** indica baño de mujeres. Una mujer embarazada o una persona con bastón dibujada **junto a un asiento del bus** indica un asiento preferencial para ellas. El lugar completa el mensaje.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.1.2'], ambito: 'conocer',
          prompt: 'En una caja que llega a la tienda hay un dibujo de una **copa quebrada**. ¿Qué mensaje da?',
          explain: 'La copa quebrada es el símbolo de **frágil**: el contenido se puede romper. Un solo dibujo describe el objeto y da una advertencia. Hoy aprenderás a leer símbolos como este.' },
        { options: [
          { id: 'a', text: 'Cuidado: lo que hay dentro se puede romper', icon: 'Package' },
          { id: 'b', text: 'La caja trae copas para una fiesta', icon: 'PartyPopper', feedback: 'Podría traer copas, pero el dibujo de la copa **quebrada** es un aviso de cuidado, no una lista de lo que trae.' },
          { id: 'c', text: 'La caja está vacía', icon: 'Box', feedback: 'No hay ninguna pista de que esté vacía.' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.1.2'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: une cada símbolo con lo que describe y comunica.',
          hint: 'Primero pregúntate quién o qué aparece; después, qué te pide o te avisa.',
          explain: 'Cada símbolo describe a una persona, un animal o un objeto y además da un mensaje.' },
        { leftTitle: 'Símbolo', rightTitle: 'Significa', pairs: [
          { id: 'y1', left: 'Silla de ruedas blanca sobre fondo azul', leftIcon: 'Accessibility', right: 'Acceso para personas con discapacidad' },
          { id: 'y2', left: 'Cabeza de perro mostrando los dientes', leftIcon: 'Dog', right: 'Cuidado con el perro' },
          { id: 'y3', left: 'Tres flechas formando un triángulo', leftIcon: 'Recycle', right: 'Material reciclable' },
          { id: 'y4', left: 'Persona mayor con bastón en un asiento del bus', leftIcon: 'User', right: 'Asiento preferencial para personas mayores' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.1.3'], ambito: 'conocer', title: 'Mensajes sin palabras en noticias y anuncios',
          prompt: 'Los noticieros, los periódicos y los anuncios también usan imágenes para informar rápido. Toca cada ejemplo.' },
        { icon: 'Tv', body: 'Antes de responder qué dice una imagen, pregúntate: **¿qué muestra?, ¿dónde?, ¿qué color o marca tiene?**', reveal: [
          { icon: 'CloudSun', front: 'Mapa del tiempo', back: 'Un **sol** = día despejado. Una **nube con gotas** = lluvia. Una **nube con rayo** = tormenta eléctrica. El dibujo va sobre la región donde ocurrirá.' },
          { icon: 'Ban', front: 'Anuncio con círculo tachado', back: 'Un círculo rojo con una línea sobre un dibujo dice: **no hagas eso**. Ejemplo: una bolsa plástica tachada = no uses bolsas plásticas.' },
          { icon: 'BarChart3', front: 'Íconos que cuentan', back: 'En una noticia, **10 figuritas de persona** con 3 pintadas pueden mostrar "3 de cada 10". Mira qué representa cada figura.' },
          { icon: 'TrendingUp', front: 'Flechas de cambio', back: 'Una flecha **hacia arriba** = sube (precio, temperatura). **Hacia abajo** = baja.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.1.3'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo se lee un mapa del tiempo que no tiene ni una palabra.' },
        { icon: 'Map', problem: 'En el noticiero muestran un mapa de Guatemala **sin palabras**: sobre **Petén** hay una nube con un **rayo** y gotas; sobre **Zacapa**, un **sol** grande. ¿Qué mensaje da?',
          steps: [
            { text: 'Identifico el tipo de imagen: un **mapa del tiempo** en un noticiero. Informa el clima de cada región.' },
            { text: 'Petén: nube + rayo + gotas → **tormenta eléctrica con lluvia**.', why: 'Cada dibujo se suma: el rayo agrega "eléctrica" a la lluvia.' },
            { text: 'Zacapa: sol grande → **día soleado y seco**.' },
            { text: 'Pienso qué significa para la gente: en Petén conviene protegerse de la tormenta; en Zacapa, del sol.' },
          ],
          answer: 'Habrá **tormenta con lluvia en Petén** y **sol en Zacapa**.',
          tip: 'En un mapa, cada dibujo habla del lugar donde está colocado.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.3'], ambito: 'hacer',
          prompt: 'Un anuncio de la municipalidad, sin palabras, muestra una **llave de agua goteando** dentro de un **círculo rojo tachado**. ¿Qué mensaje transmite?',
          explain: 'El círculo rojo tachado prohíbe lo que está dentro: **no dejes la llave goteando**, cuida el agua.' },
        { options: [
          { id: 'a', text: 'No dejes la llave goteando: cuida el agua' },
          { id: 'b', text: 'Aquí venden llaves de agua', feedback: 'Un anuncio de venta no tacharía el producto con un círculo rojo.' },
          { id: 'c', text: 'Abre la llave para que el agua corra', feedback: 'Es lo contrario: la marca tachada indica "no hagas esto".' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.2', 'l2:2.1.3'], ambito: 'hacer',
          prompt: '¿Qué comunica el **color** de cada símbolo? Clasifícalos.',
          explain: 'Rojo = peligro o prohibición; amarillo = precaución; verde = información de seguridad o permiso según el contexto. Este código de colores se usa en señales, anuncios y semáforos.' },
        { buckets: [
          { id: 'r', label: 'Rojo: peligro o prohibido', icon: 'Octagon', color: 'var(--c-bad)' },
          { id: 'a', label: 'Amarillo: precaución', icon: 'TriangleAlert', color: 'var(--c-maiz-strong)' },
          { id: 'v', label: 'Verde: seguridad o permiso', icon: 'ShieldCheck', color: 'var(--c-ok)' },
        ], items: [
          { id: 'c1', text: 'Círculo rojo con un cigarro tachado', bucket: 'r' },
          { id: 'c2', text: 'Triángulo amarillo con un rayo: electricidad', bucket: 'a' },
          { id: 'c3', text: 'Rectángulo verde con una cruz blanca: primeros auxilios', bucket: 'v' },
          { id: 'c4', text: 'Letrero amarillo con una persona resbalando: piso mojado', bucket: 'a' },
          { id: 'c5', text: 'Señal verde de salida de emergencia', bucket: 'v' },
          { id: 'c6', text: 'Círculo rojo con una mano tachada: no tocar', bucket: 'r' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.2'], ambito: 'hacer',
          prompt: 'Tu escuela necesita un símbolo **sin palabras** para decir "No corras en el pasillo". Descríbelo con palabras: ¿qué **figura**, qué **color**, qué **marcas** tendría y **dónde** lo pondrías?' },
        { minWords: 25, placeholder: 'Mi símbolo tendría…',
          model: 'Mi símbolo tendría una figura de niño corriendo, con líneas de movimiento detrás de las piernas. Estaría dentro de un círculo rojo con una línea que lo tacha, porque el rojo tachado significa que no se permite. Lo pondría en la pared del pasillo, a la altura de los ojos de los estudiantes.',
          rubric: ['Describo la figura principal', 'Elijo un color que comunica el mensaje correcto', 'Uso una marca (tachado, flecha…) con sentido', 'Digo dónde lo colocaría'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.2'], prompt: 'Boleto de salida: junto a un asiento del bus está el símbolo de una **mujer embarazada**. ¿Qué significa?' },
        { options: [
          { id: 'a', text: 'Es un asiento preferencial para mujeres embarazadas' },
          { id: 'b', text: 'Solo pueden subir mujeres al bus' },
          { id: 'c', text: 'Adentro venden ropa para bebés' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.3'], prompt: 'En un mapa del tiempo aparece una **nube con gotas** sobre Quetzaltenango y una **flecha azul hacia abajo** junto a un termómetro. ¿Qué informa?' },
        { options: [
          { id: 'a', text: 'Lluvia y bajada de temperatura en Quetzaltenango' },
          { id: 'b', text: 'Sol y mucho calor en Quetzaltenango' },
          { id: 'c', text: 'Que se cayó un termómetro en Quetzaltenango' },
        ], correct: ['a'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l2'], cnb: [], ambito: 'ser', prompt: '¿Cómo te fue esta semana?' },
        { statements: ['Reconozco las familias de señales por su forma y color', 'Interpreto símbolos que describen personas, animales u objetos', 'Leo mensajes sin palabras en mapas y anuncios'],
          commitments: ['Buscaré tres señales en mi comunidad y le explicaré a mi familia qué significan', 'Respetaré las señales de tránsito y de evacuación', 'Revisaré el mapa del tiempo en el noticiero'] },
      ),
    ],
  }),
];
