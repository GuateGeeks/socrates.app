/**
 * L2 (español como segundo idioma) · Unidad 1 · Semana 2
 * Comunicarnos con respeto y comprender instrucciones (con palabras y con dibujos).
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's02-l2-1',
    title: 'Palabras que muestran respeto',
    icon: 'Handshake',
    minutes: 14,
    gancho: 'En el mercado, ¿a quién le venden más rápido y con una sonrisa: al que dice "¡Deme tomates!" o al que dice "Buenos días, doña Juana, ¿me da tomates, por favor"?',
    objetivos: [
      'Usar saludos y expresiones de cortesía en español',
      'Elegir entre usted, tú o vos según la persona',
      'Usar y escribir bien los títulos de respeto (don, doña, Sr., Dra., Lic.…)',
    ],
    resumen: [
      'Expresiones de cortesía: buenos días, por favor, gracias, con permiso, disculpe.',
      'Usamos "usted" con personas mayores, desconocidas o con autoridad; "tú" o "vos" con amistades y familia de confianza.',
      'Títulos: don/doña van antes del nombre (doña Rosa); señor/señora antes del apellido (Sr. López). Las abreviaturas empiezan con mayúscula y llevan punto: Sr., Sra., Dr., Dra., Lic., Licda.',
      'Muchos idiomas mayas tienen sus propias formas de respeto, como los clasificadores personales. Pregunta en tu familia cómo se usan.',
    ],
    media: {
      id: 's02-l2-1-mercado-cortesia', kind: 'video', title: 'Una compra con respeto', aspect: '16:9', duration: 50,
      alt: 'Un niño compra en un puesto de verduras dos veces: primero sin saludar y después con saludo, título y por favor. La vendedora reacciona distinto.',
      brief: 'Video (o animación con personajes) de 50 s en un mercado guatemalteco: puesto de verduras con tomates, güisquiles y hierbas; la vendedora usa corte y güipil (sin identificar una etnia específica de forma estereotipada). Escena 1 (20 s): un niño llega, no saluda y dice "¡Deme una libra de tomates!"; la vendedora lo atiende seria. Escena 2 (20 s): el mismo niño llega, dice "Buenos días, doña Juana. ¿Me da una libra de tomates, por favor?"; ella sonríe y le regala una ramita de cilantro; él dice "Muchas gracias". Cierre (10 s): en pantalla aparecen "Buenos días · por favor · gracias · doña". Sin marcas comerciales.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:1.3.1'], ambito: 'convivir', title: 'Expresiones de cortesía',
          prompt: 'La **cortesía** es tratar a los demás con amabilidad y respeto. En español se nota en ciertas palabras. Toca cada tarjeta.' },
        { icon: 'Smile', body: 'Estas expresiones abren puertas en cualquier lugar: la escuela, el centro de salud, la municipalidad o la tienda.', reveal: [
          { icon: 'Sunrise', front: 'Saludar', back: '**Buenos días** (en la mañana), **buenas tardes** (después del mediodía), **buenas noches** (al oscurecer). Se saluda al llegar, antes de pedir algo.' },
          { icon: 'HandHeart', front: 'Pedir y agradecer', back: '**Por favor** al pedir. **Gracias** o **muchas gracias** al recibir. Se responde: **con gusto** o **de nada**.' },
          { icon: 'Footprints', front: 'Pasar o interrumpir', back: '**Con permiso** para pasar o entrar. **Disculpe** para interrumpir o llamar la atención de alguien.' },
          { icon: 'Users', front: 'Usted, tú o vos', back: '**Usted** con personas mayores, desconocidas o con autoridad: "¿Usted me puede ayudar?". **Tú** o **vos** (muy usado en Guatemala) con amigos y familia de confianza.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.3.1'], ambito: 'convivir',
          prompt: 'Imagina que vas al mercado a comprar. ¿Qué forma de pedir **muestra más respeto**?',
          explain: 'La segunda forma tiene un **saludo**, un **título de respeto** ("doña"), una **pregunta amable** y **"por favor"**. Hoy aprenderás a usar cada una de estas herramientas.' },
        { options: [
          { id: 'a', text: '"¡Deme una libra de tomates!"', icon: 'Megaphone', feedback: 'Se entiende, pero suena a orden. Falta saludo y amabilidad.' },
          { id: 'b', text: '"Buenos días, doña Juana. ¿Me da una libra de tomates, por favor?"', icon: 'Handshake' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.3.1'], ambito: 'convivir', title: 'Títulos de respeto',
          prompt: 'Los **títulos** se ponen antes del nombre o del apellido. Fíjate cuándo van completos y cuándo **abreviados**.' },
        { icon: 'GraduationCap', body: 'Regla de escritura: la **abreviatura** empieza con **mayúscula** y termina con **punto** (Sr., Dra.). Si escribes el título completo dentro de una oración, va con minúscula: "Saludé a **doña** Rosa y al **doctor** Morales".', reveal: [
          { icon: 'User', front: 'don / doña', back: 'Personas adultas, antes del **nombre**: don Pedro, doña Rosa. Dentro de una oración se escriben con minúscula: "Saludé a doña Rosa".' },
          { icon: 'Users', front: 'Sr. / Sra.', back: 'Señor, señora: antes del **apellido**: Sr. López, Sra. Tzoc.' },
          { icon: 'Stethoscope', front: 'Dr. / Dra.', back: 'Doctor, doctora: Dr. Morales, Dra. Xiloj.' },
          { icon: 'Briefcase', front: 'Lic. / Licda.', back: 'Licenciado, licenciada (forma usada en Guatemala): Lic. Ramírez, Licda. Pop.' },
          { icon: 'Languages', front: 'En idiomas mayas', back: 'Varios idiomas mayas usan **clasificadores personales**: palabritas antes del nombre que indican, por ejemplo, si se habla de un hombre, de una mujer o de una persona mayor. **Pregunta en tu familia o comunidad** cómo se dicen en tu idioma.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.3.1'], ambito: 'convivir',
          prompt: 'Ahora tú, con ayuda: une cada situación con la expresión de respeto más adecuada.',
          hint: 'Pregúntate: ¿conozco el nombre o el apellido? ¿Tiene una profesión? ¿Estoy hablando o escribiendo?',
          explain: 'Elegir el título y la expresión correctos demuestra respeto y buena educación. Al escribir se abrevia (Dr. Morales); al hablar se dice completo (licenciada Pop).' },
        { leftTitle: 'Situación', rightTitle: 'Expresión', pairs: [
          { id: 'r1', left: 'Saludas a Rosa, la señora que vende tortillas', leftIcon: 'Store', right: '"Buenos días, doña Rosa."' },
          { id: 'r2', left: 'Escribes una nota al médico Juan Morales', leftIcon: 'Mail', right: '"Estimado Dr. Morales:"' },
          { id: 'r3', left: 'Necesitas pasar entre dos personas que conversan', leftIcon: 'Footprints', right: '"Con permiso."' },
          { id: 'r4', left: 'Interrumpes a la licenciada Pop para preguntar algo', leftIcon: 'Briefcase', right: '"Disculpe, licenciada Pop…"' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.3.1'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo Mario escribe el inicio de una nota respetuosa.' },
        { icon: 'PenLine', problem: 'Mario quiere pedirle a la doctora **Marta Xiloj**, del puesto de salud, que visite su escuela. ¿Cómo empieza su nota?',
          steps: [
            { text: 'Elige un saludo formal para una carta: **Estimada**.', why: 'Es formal y amable. "Estimada" va en femenino porque es una mujer.' },
            { text: 'Agrega el título abreviado: **Dra.**, con mayúscula y punto.' },
            { text: 'Escribe el **apellido**: Xiloj, con mayúscula porque es nombre propio.' },
            { text: 'Termina el saludo de la carta con **dos puntos** (:).', why: 'En español, el saludo de una carta termina con dos puntos, no con coma.' },
          ],
          answer: '**Estimada Dra. Xiloj:**',
          tip: 'Al hablar, di el título completo ("doctora Xiloj"); al escribir, puedes abreviarlo ("Dra. Xiloj").' },
      ),
      S.fill(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:1.3.1'], ambito: 'convivir',
          prompt: 'Completa el diálogo en la municipalidad con expresiones de cortesía.',
          hint: 'Piensa qué se dice al llegar, al pedir algo y al recibir ayuda. La señora es una persona desconocida: se le habla de usted.',
          explain: 'Saludo al llegar, "por favor" al pedir, "usted" con una persona desconocida y "gracias" al final.' },
        { text: 'Lucía: [[Buenas tardes]], señora. ¿Me podría ayudar, [[por favor]]?\nSecretaria: Claro, ¿en qué le ayudo?\nLucía: ¿Sabe [[usted]] dónde entregan los certificados de nacimiento?\nSecretaria: En la ventanilla 3.\nLucía: Muchas [[gracias]].\nSecretaria: Con gusto.', distractors: ['vos', 'Oiga', 'nada'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.3.1'], ambito: 'convivir',
          prompt: '¿Cómo le hablarías a cada persona? Clasifícalas.',
          explain: 'Usamos **usted** para mostrar respeto a personas mayores, desconocidas o con autoridad. Con amistades y familia de confianza usamos **tú** o **vos**. En algunas familias guatemaltecas los hijos hablan de usted a sus padres y abuelos: también está bien.' },
        { buckets: [
          { id: 'u', label: 'Usted (respeto)', icon: 'Crown', color: 'var(--area-l2)' },
          { id: 't', label: 'Tú o vos (confianza)', icon: 'Smile', color: 'var(--c-ok)' },
        ], items: [
          { id: 'p1', text: 'La alcaldesa del municipio', bucket: 'u' },
          { id: 'p2', text: 'Tu mejor amiga', bucket: 't' },
          { id: 'p3', text: 'Un señor que no conoces y te pregunta una dirección', bucket: 'u' },
          { id: 'p4', text: 'Tu primo de 10 años', bucket: 't' },
          { id: 'p5', text: 'El agente de tránsito', bucket: 'u' },
          { id: 'p6', text: 'Tu compañero de pupitre', bucket: 't' },
        ] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['l2', 'fc'], cnb: ['l2:1.3.1'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
        { scene: { icon: 'Store', text: 'En el mercado, doña Candelaria vende tejidos. Ella habla principalmente q’eqchi’ y está aprendiendo español. Un comprador le habla rápido y con prisa, y unos jóvenes se ríen de cómo ella pronuncia algunas palabras.' }, options: [
          { id: 'a', icon: 'EyeOff', text: 'Reírme también para no quedar mal', consequence: 'Doña Candelaria se siente humillada. Burlarse de cómo alguien habla un segundo idioma es una falta de respeto.', values: ['Presión de grupo'], constructive: false },
          { id: 'b', icon: 'HeartHandshake', text: 'Saludarla con respeto, hablarle despacio y ayudar a traducir si ella lo desea', consequence: 'La compra se hace con calma y respeto. Hablar despacio y con amabilidad ayuda a quien aprende un idioma.', values: ['Respeto', 'Solidaridad', 'Interculturalidad'], constructive: true },
          { id: 'c', icon: 'MessageCircle', text: 'Decirles a los jóvenes: "Ella habla dos idiomas; eso tiene mucho mérito"', consequence: 'Algunos jóvenes se quedan pensando. Hablar dos idiomas es un esfuerzo que merece respeto.', values: ['Valentía', 'Respeto a la diversidad'], constructive: true },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:1.3.1'], ambito: 'hacer',
          prompt: '¿En qué oración está **bien escrito** el título abreviado?',
          explain: 'Las abreviaturas de los títulos empiezan con mayúscula y terminan con punto: **Sr.** Cux.' },
        { options: [
          { id: 'a', text: 'Mañana nos visita el Sr. Cux.' },
          { id: 'b', text: 'Mañana nos visita el sr Cux.', feedback: 'Falta la mayúscula y el punto de la abreviatura.' },
          { id: 'c', text: 'Mañana nos visita el SR Cux.', feedback: 'Solo la primera letra va en mayúscula, y lleva punto: Sr.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.3.1'], prompt: 'Boleto de salida: ¿cuál expresión está **bien escrita** y muestra respeto?' },
        { options: [
          { id: 'a', text: 'Buenas tardes, Licda. Pop.' },
          { id: 'b', text: 'buenas tardes, licda pop' },
          { id: 'c', text: 'Oiga, Pop.' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.3.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: '"Don" y "doña" se usan antes del nombre: doña Rosa.', answer: true },
          { text: 'A una persona desconocida y mayor es más respetuoso hablarle de "vos".', answer: false, why: 'Con personas desconocidas o mayores se usa "usted".' },
          { text: '"Con permiso" se dice para pasar entre personas o entrar a un lugar.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's02-l2-2',
    title: 'Sigo instrucciones paso a paso',
    icon: 'ListOrdered',
    minutes: 14,
    gancho: 'Tu tío armó una mesa sin leer las instrucciones… y le sobraron cuatro tornillos. ¿Qué crees que pasó?',
    objetivos: [
      'Reconocer las partes de un texto de instrucciones',
      'Usar las palabras de orden y los verbos que indican qué hacer',
      'Seguir instrucciones escritas o dibujadas en el orden correcto',
    ],
    resumen: [
      'Un instructivo tiene: título (qué vas a lograr), materiales y pasos en orden.',
      'Los pasos usan verbos que indican una acción: lava, corta, mezcla (o lavar, cortar, mezclar).',
      'Las palabras de orden guían la secuencia: primero, después, luego, a continuación, finalmente.',
      'Las instrucciones también pueden darse con dibujos, flechas y números. Lee o mira todo antes de empezar y sigue el orden.',
      'Al preparar alimentos para un puesto: una persona adulta usa el cuchillo, la comida se mantiene tapada y el dinero permanece separado; quien cobra no toca comida y se lava las manos con agua y jabón antes de cambiar de tarea.',
    ],
    media: {
      id: 's02-l2-2-cartel-manos', kind: 'diagram', title: 'Cartel: procedimiento para servir fruta', aspect: '3:4',
      alt: 'Cartel con seis dibujos numerados: separar la caja del alimento, lavarse las manos, una persona adulta corta fruta, tapar los vasos, cobrar sin tocar comida y volver a lavarse antes de servir.',
      brief: 'Ilustración vertical tipo cartel de mercado escolar, estilo plano y claro. Seis viñetas numeradas con flechas y frases breves: (1) caja de dinero lejos de la mesa de alimento y roles de cobro y servicio señalados, (2) manos con agua y jabón, (3) una persona adulta corta fruta con cuchillo y tabla limpios mientras un niño observa a distancia, (4) vasos de fruta cubiertos y una mosca fuera de la tapa, (5) una persona cobra sin tocar la comida, (6) esa persona se lava las manos con agua y jabón antes de pasar a servir. Sin marcas comerciales.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:2.1.1'], ambito: 'conocer', title: 'Las partes de un instructivo',
          prompt: 'Un **instructivo** es un texto que te dice **cómo hacer algo** paso a paso. Toca cada parte.' },
        { icon: 'ClipboardList', body: 'Antes de empezar: **lee o mira todo** una vez. Después, sigue los pasos **uno por uno, en orden**.', reveal: [
          { icon: 'Target', front: 'Título', back: 'Dice qué vas a lograr: "Cómo sembrar frijol en un vaso".' },
          { icon: 'Package', front: 'Materiales', back: 'La lista de lo que necesitas. Reúnelo todo antes de empezar.' },
          { icon: 'ListOrdered', front: 'Pasos numerados', back: 'Cada paso es una acción. El número indica el orden.' },
          { icon: 'Hand', front: 'Verbos de acción', back: 'Indican qué hacer: **lava, corta, dobla, mezcla** (o **lavar, cortar, doblar, mezclar**). Suelen ir al inicio del paso.' },
          { icon: 'ArrowRight', front: 'Palabras de orden', back: '**Primero, después, luego, a continuación, finalmente.** Te ayudan a no perderte.' },
        ] },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.1.1'], ambito: 'conocer',
          prompt: 'Tu tío armó una mesa sin leer las instrucciones y le sobraron cuatro tornillos. ¿Qué error cometió probablemente?',
          explain: 'Las instrucciones sirven si se **leen completas** y se siguen **en orden**. Hoy aprenderás a leerlas y seguirlas como un experto.' },
        { options: [
          { id: 'a', text: 'Se saltó pasos por no leer todo antes de empezar', icon: 'ListChecks' },
          { id: 'b', text: 'La mesa venía con tornillos de sobra a propósito', icon: 'Package', feedback: 'A veces pasa, pero cuatro tornillos de más suelen indicar pasos que faltaron.' },
        ], correct: ['a'] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2', 'cnt'], cnb: ['l2:2.1.1', 'cnt:1.5.3'], ambito: 'hacer', title: 'Ejemplo resuelto: un procedimiento seguro',
          prompt: 'Mira cómo el equipo convierte los dibujos del cartel en instrucciones claras para servir fruta.' },
        { icon: 'ClipboardCheck', problem: 'El puesto necesita evitar que las manos, las moscas, el cuchillo y el dinero contaminen la comida. ¿Cómo escribe el equipo un procedimiento que cualquiera pueda seguir?',
          steps: [
            { text: 'Anota los materiales y organiza dos lugares: la caja del **dinero queda separada** de la comida.', why: 'Preparar materiales y roles antes de empezar evita cruces durante el servicio.' },
            { text: '**Primero**, todas las personas que servirán se lavan las manos con agua y jabón.' },
            { text: '**Después**, una **persona adulta** lava la fruta con agua apta para consumo y la corta con tabla y cuchillo limpios.', why: 'El cuchillo lo maneja una persona adulta.' },
            { text: '**Luego**, se sirve la fruta en recipientes limpios y se mantiene **tapada para protegerla de las moscas**.' },
            { text: '**Finalmente**, una persona cobra y no toca los alimentos. Si cambia de tarea, se **lava otra vez las manos con agua y jabón** antes de servir.', why: 'El dinero permanece lejos de la comida y quien lo toca se limpia las manos antes de manipular alimentos.' },
          ],
          answer: 'El instructivo separa dinero y comida, reserva el cuchillo para una persona adulta, mantiene la fruta tapada y exige manos lavadas antes de tocar alimentos.',
          tip: 'Cada paso empieza con un verbo y deja claro quién realiza la acción.' },
      ),
      S.order(
        { fase: 'construir', areas: ['l2', 'cnt'], cnb: ['l2:2.1.1', 'cnt:1.5.3'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: **ordena el procedimiento** para preparar y servir fruta en el puesto.',
          hint: 'Primero organiza los lugares y lávate las manos. La comida se tapa antes de empezar a cobrar.',
          explain: 'El orden protege la comida: dinero separado → manos lavadas → una persona adulta corta → comida tapada → cobro sin tocar alimentos → nuevo lavado de manos si se cambia de tarea.',
          media: { id: 's02-l2-2-cartel-paso', kind: 'image', title: 'Detalle del cartel', aspect: '4:3',
            alt: 'Las seis viñetas del procedimiento para servir fruta, desordenadas y sin números.',
            brief: 'Las mismas seis viñetas del cartel de procedimiento para servir fruta, sin números y desordenadas en una cuadrícula de 3×2. Cada viñeta conserva sus objetos y acciones, pero no incluye palabras de orden.' } },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'h1', text: 'Separa el dinero de la comida y asigna quién cobra', icon: 'BadgeDollarSign' },
          { id: 'h2', text: 'Lávate las manos con agua y jabón antes de tocar alimentos', icon: 'HandHelping' },
          { id: 'h3', text: 'Pide a una persona adulta que corte la fruta con cuchillo y tabla limpios', icon: 'UtensilsCrossed' },
          { id: 'h4', text: 'Sirve la fruta en recipientes limpios y tápala para protegerla de las moscas', icon: 'Container' },
          { id: 'h5', text: 'Cobra sin tocar la comida y mantén el dinero lejos de los alimentos', icon: 'HandCoins' },
          { id: 'h6', text: 'Si dejas de cobrar para servir, lávate otra vez las manos con agua y jabón', icon: 'RefreshCcw' },
        ] },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.1.1'], ambito: 'hacer',
          prompt: 'Toca las **palabras de orden** de estas instrucciones.',
          hint: 'Son palabras que dicen "cuándo" va cada paso. Hay 4.',
          explain: '"Primero", "después", "luego" y "finalmente" ordenan los pasos. Sin ellas, sería fácil confundirse.' },
        { target: 'palabras de orden', text: 'Cómo hacer un barquito de papel. {Primero}, dobla una hoja por la mitad. {Después}, dobla las dos esquinas de arriba hacia el centro. {Luego}, sube las orillas de abajo. {Finalmente}, abre el centro y aplánalo con cuidado.' },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.1'], ambito: 'hacer', title: 'Lectura',
          prompt: 'Lee este instructivo y responde.' },
        { genre: 'Instructivo', heading: 'Cómo hacer un germinador de frijol', passage:
          'Materiales: un vaso transparente, algodón o papel de cocina, cinco frijoles y agua.\n\n1. Primero, llena el vaso con algodón hasta la mitad.\n\n2. Después, coloca los frijoles entre el algodón y la pared del vaso, para poder verlos.\n\n3. Luego, humedece el algodón con un poco de agua. No lo llenes de agua: solo debe quedar húmedo.\n\n4. A continuación, pon el vaso cerca de una ventana donde entre luz.\n\n5. Finalmente, revisa tus frijoles todos los días y agrega unas gotas de agua si el algodón se seca.',
          questions: [
            { q: '¿Qué debes hacer **inmediatamente después** de colocar los frijoles?', options: [
              { id: 'a', text: 'Humedecer el algodón' },
              { id: 'b', text: 'Poner el vaso cerca de la ventana' },
              { id: 'c', text: 'Llenar el vaso con algodón' },
            ], correct: 'a', why: 'El paso 3, que empieza con "Luego", dice que se humedece el algodón.' },
            { q: '¿Por qué el instructivo dice "No lo llenes de agua"?', options: [
              { id: 'a', text: 'Porque el algodón solo debe quedar húmedo' },
              { id: 'b', text: 'Porque los frijoles necesitan mucha agua' },
              { id: 'c', text: 'Porque el vaso se puede quebrar' },
            ], correct: 'a', why: 'Es una advertencia: aclara cómo hacer bien el paso.' },
            { q: '¿Qué pasaría si alguien pone el vaso en un armario oscuro?', options: [
              { id: 'a', text: 'No estaría siguiendo el paso 4' },
              { id: 'b', text: 'Estaría siguiendo todas las instrucciones' },
              { id: 'c', text: 'Terminaría más rápido el instructivo' },
            ], correct: 'a', why: 'El paso 4 pide un lugar con luz. Saltarse o cambiar un paso puede arruinar el resultado.' },
          ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.1'], ambito: 'hacer',
          prompt: 'El maestro de Educación Física da estas instrucciones: _"Cuando suene el silbato **una vez**, caminen. Cuando suene **dos veces**, deténganse. Cuando suene **tres veces**, siéntense."_ Estás caminando y el silbato suena **dos veces**. ¿Qué haces?',
          explain: 'Dos silbatazos = deténganse. Seguir instrucciones también es escuchar bien cada condición.' },
        { options: [
          { id: 'a', text: 'Me detengo' },
          { id: 'b', text: 'Me siento', feedback: 'Sentarse es con tres silbatazos.' },
          { id: 'c', text: 'Sigo caminando', feedback: 'Caminar es con un silbatazo. Con dos hay que detenerse.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.1.1'], ambito: 'hacer',
          prompt: 'Escribe instrucciones para algo sencillo que sabes hacer (servir un vaso de agua pura, sembrar una semilla, doblar tu ropa…). Usa **3 o 4 pasos**, un **verbo de acción** en cada uno y **palabras de orden**.' },
        { minWords: 25, placeholder: 'Cómo… Primero, …',
          model: 'Cómo doblar una camisa. Primero, extiende la camisa sobre la cama con los botones hacia abajo. Después, dobla las mangas hacia el centro. Luego, dobla la camisa por la mitad, de abajo hacia arriba. Finalmente, guárdala en tu gaveta.',
          rubric: ['Tiene un título que dice qué se va a lograr', 'Cada paso empieza con un verbo de acción', 'Usé al menos tres palabras de orden', 'Los pasos están en el orden correcto'] },
      ),
      S.order(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.1'], prompt: 'Boleto de salida: ordena las instrucciones para sembrar una semilla en una maceta.' },
        { labels: { start: 'Primero', end: 'Finalmente' }, items: [
          { id: 'q1', text: 'Llena la maceta con tierra' },
          { id: 'q2', text: 'Haz un agujerito con el dedo' },
          { id: 'q3', text: 'Pon la semilla y tápala con tierra' },
          { id: 'q4', text: 'Riega con poca agua' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.1.1'], prompt: '¿Cuál es una instrucción **clara** para un instructivo?' },
        { options: [
          { id: 'a', text: 'Después, corta el papel en cuatro partes iguales.' },
          { id: 'b', text: 'El papel es bonito y de colores.' },
          { id: 'c', text: 'Ayer corté papel con mi hermana.' },
        ], correct: ['a'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l2'], cnb: [], ambito: 'ser', prompt: '¿Cómo te fue esta semana?' },
        { statements: ['Uso saludos, "por favor", "gracias" y "con permiso"', 'Escribo bien los títulos abreviados (Sr., Dra., Lic.)', 'Sigo instrucciones escritas o dibujadas en orden'],
          commitments: ['Saludaré con respeto a las personas que me atienden', 'Preguntaré en mi familia cómo se muestra respeto en nuestro idioma', 'Leeré todas las instrucciones antes de empezar una tarea'] },
      ),
    ],
  }),
];
