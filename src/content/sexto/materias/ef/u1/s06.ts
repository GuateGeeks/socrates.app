/**
 * Educación Física · Unidad 1 · Semana 6 — Pases con el pie en grupo; prepararse y recuperar la calma.
 * Progresión: pase con la parte interna y externa del pie a distintas distancias, alturas y direcciones,
 * organizados en filas, cruces y movimientos conjuntos → elegir el vestuario adecuado para cada
 * actividad y usar la respiración y la relajación para el equilibrio emocional.
 */
import { lesson, S, cierre } from '../../../../dsl';

function preparedLesson(draft: Parameters<typeof lesson>[0]) {
  const first = draft.steps[0];
  const objective = draft.objetivos?.[0] ?? draft.title;
  const firstIdea = draft.resumen?.[0] ?? objective;
  const secondIdea = draft.resumen?.[1] ?? firstIdea;
  const cnb = [...new Set(draft.steps.flatMap((step) => step.cnb))];
  const normalized = draft.steps.map((step) => (
    step.fase === 'explorar' ? { ...step, fase: 'construir' as const } : step
  ));
  const construction = normalized.filter((step) => step.fase === 'construir');
  const ungraded = new Set(['explain', 'worked-example', 'flashcards', 'short-answer', 'project', 'reflection', 'pulse-lab']);
  const guided = construction.find((step) => !ungraded.has(step.type));
  let building = construction.slice(0, 4);
  if (guided && !building.includes(guided)) building = [...building.slice(0, 3), guided];
  building = building.map((step) => step === guided ? {
    ...step,
    hint: step.hint ?? 'Vuelve al criterio del modelo y descarta una opción a la vez.',
    explain: step.explain ?? firstIdea,
  } : step);
  const compact = [
    ...building,
    ...normalized.filter((step) => step.fase === 'aplicar').slice(0, 2),
    ...normalized.filter((step) => step.fase === 'comprobar'),
    ...normalized.filter((step) => step.fase === 'reflexionar'),
  ];
  return lesson({
    ...draft,
    objetivos: [objective],
    steps: [
      S.explain(
        { fase: 'explorar', areas: first.areas, cnb, ambito: 'conocer', title: 'Activa lo que sabes',
          prompt: `Antes del modelo, recuerda una experiencia relacionada con este resultado: **${objective}**.` },
        { icon: 'Brain', body: 'No se califica: nombra lo que ya sabes y una duda que quieras resolver.' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: first.areas, cnb, ambito: first.ambito ?? 'hacer', title: 'Enfoque y modelo',
          prompt: `Activa lo que sabes y observa cómo se aplica este resultado: **${objective}**.` },
        { icon: draft.icon, problem: firstIdea, steps: [
          { text: `Identifica el criterio central: **${objective}**.` },
          { text: secondIdea },
        ], answer: secondIdea,
          tip: 'Nombra el criterio y comprueba cada dato antes de responder.' },
      ),
      ...compact,
    ],
  });
}

export default [
  /* ───────────────────────── 1. Pases con el pie ───────────────────────── */
  preparedLesson({
    id: 's06-ef-1',
    title: 'Pases con el pie: parte interna y externa',
    icon: 'Footprints',
    minutes: 15,
    gancho: 'En una chamusca, algunos pases salen rectos y precisos y otros se curvan hacia un lado. ¿Con qué parte del pie se golpea el balón en cada caso?',
    objetivos: [
      'Pasar el balón con la parte interna y con la parte externa de cada pie',
      'Ajustar el pase a distintas distancias, alturas y direcciones',
      'Organizarse en grupos, filas y cruces para practicar en orden',
    ],
    resumen: [
      'Parte interna (el lado de adentro del pie): pie de apoyo al lado del balón apuntando al objetivo, tobillo firme y pie de golpeo girado hacia afuera. El pase sale recto y preciso; ideal para pases cortos y medios.',
      'Parte externa (el lado de afuera del pie): punta del pie hacia adentro y abajo, se golpea con el borde externo. Sirve para pasar hacia un lado o en diagonal sin girar el cuerpo, y puede dar efecto.',
      'Distancia = fuerza del golpe. Altura: golpear el centro del balón lo manda rasante (por el suelo); golpear la parte baja lo eleva. Dirección: el pie de apoyo y el cuerpo apuntan hacia donde quieres enviarlo.',
      'Organización: en filas, columnas, círculos o parejas; en los cruces, después de pasar te vas al final de la fila contraria. Moverse en conjunto requiere turnos, distancia y señales claras.',
    ],
    media: {
      id: 's06-ef-1-pase-pie', kind: 'video', title: 'Interna y externa', aspect: '9:16', duration: 50,
      alt: 'Primer plano de los pies de una niña: pasa el balón con la parte interna y sale recto a su compañero; luego lo pasa con la parte externa y sale en diagonal hacia un lado.',
      brief: 'Video vertical de 50 s en cancha de tierra o grama. Parte 1 "Parte interna": primer plano a ras de suelo; pie de apoyo junto al balón apuntando al objetivo, pie de golpeo girado, contacto con el borde interno en el centro del balón; toma cenital con flecha recta. Parte 2 "Parte externa": punta del pie hacia adentro, contacto con el borde externo, balón en diagonal; flecha curva. Parte 3 "Altura": golpe al centro (rasante) vs. golpe abajo (elevado). Parte 4: dos filas enfrentadas haciendo cruces (paso y voy al final de la otra fila). Participantes niñas y niños con ropa deportiva, rostros no protagonistas.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:2.1.17'], ambito: 'conocer',
          prompt: 'Quieres pasar el balón a un compañero a 5 pasos, **recto y preciso**. ¿Con qué parte del pie lo golpeas?',
          explain: 'Con la **parte interna** del pie: es la superficie más **ancha y plana**, así que el balón sale recto. La **punta** es muy pequeña y el balón sale sin control.' },
        { options: [
          { id: 'a', text: 'Con la punta del pie', icon: 'ArrowUp', feedback: 'La punta es pequeña: el balón sale fuerte pero sin precisión.' },
          { id: 'b', text: 'Con la parte interna del pie', icon: 'Footprints' },
          { id: 'c', text: 'Con el talón', icon: 'ArrowDown', feedback: 'El talón se usa en jugadas especiales hacia atrás, no para un pase recto.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.17'], ambito: 'hacer', title: 'Dos superficies de contacto',
          prompt: 'Mira el video y toca cada tarjeta. Practica el movimiento **sin balón** primero, con cada pie.' },
        { icon: 'Footprints', body: 'El **pie de apoyo** (el que no golpea) es el "timón": se coloca **al lado del balón** y apunta hacia donde quieres pasar.', reveal: [
          { icon: 'ArrowRight', front: 'Parte interna', back: 'Gira el pie de golpeo **hacia afuera**, tobillo firme, y golpea el **centro** del balón con el lado de adentro. Sale **recto y preciso**. Para pases cortos y medios.' },
          { icon: 'CornerDownRight', front: 'Parte externa', back: 'Apunta la punta del pie **hacia adentro y abajo** y golpea con el **borde de afuera**. Sale **hacia un lado** o en diagonal, sin tener que girar el cuerpo. Puede dar **efecto**.' },
          { icon: 'Hand', front: 'Brazos', back: 'Abre un poco los brazos para mantener el **equilibrio** sobre el pie de apoyo.' },
          { icon: 'RefreshCw', front: 'Con los dos pies', back: 'Practica con el pie **derecho** y con el **izquierdo**. En el juego, el balón no siempre llega a tu pie favorito.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.17'], ambito: 'conocer', title: 'Distancia, altura y dirección',
          prompt: 'Un buen pase llega **a donde quieres**, **a la altura justa** y **con la fuerza justa**. Toca cada tarjeta.' },
        { icon: 'Target', body: 'Tres "controles" del pase: la **fuerza**, el **punto del balón** que golpeas y la **orientación** de tu cuerpo.', reveal: [
          { icon: 'MoveHorizontal', front: 'Distancia', back: 'Más cerca = golpe **suave**. Más lejos = pierna más atrás y golpe **más fuerte**.' },
          { icon: 'ArrowUp', front: 'Altura', back: 'Golpea el **centro** del balón para que vaya **rasante** (por el suelo). Golpea la **parte de abajo** para **elevarlo** por encima de un obstáculo.' },
          { icon: 'Compass', front: 'Dirección', back: 'El **pie de apoyo** y el **pecho** apuntan hacia tu compañero. Con la parte externa puedes enviar hacia un lado sin girarte.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.17'], ambito: 'hacer',
          prompt: 'Une lo que quieres lograr con lo que haces.',
          hint: 'Repasa las tarjetas de superficies y de distancia, altura y dirección.',
          explain: 'Recto y preciso → interna; hacia un lado sin girar → externa; por encima de un obstáculo → golpear abajo; rasante → golpear al centro.' },
        { leftTitle: 'Quiero…', rightTitle: 'Hago…', pairs: [
          { id: 'r', left: 'Un pase corto, recto y preciso', right: 'Golpeo con la parte interna' },
          { id: 'l', left: 'Pasar hacia un lado sin girar el cuerpo', right: 'Golpeo con la parte externa' },
          { id: 'a', left: 'Elevar el balón sobre un obstáculo', right: 'Golpeo la parte baja del balón' },
          { id: 'z', left: 'Que el balón vaya por el suelo', right: 'Golpeo el centro del balón' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.2.4'], ambito: 'convivir', title: 'Organizarnos en grupo',
          prompt: 'Para practicar muchos a la vez **sin chocar**, el grupo se organiza. Toca cada formación.' },
        { icon: 'Users', body: 'Una buena organización da **más turnos** a cada persona, **más seguridad** y menos tiempo perdido.', reveal: [
          { icon: 'AlignJustify', front: 'Filas enfrentadas', back: 'Dos filas, una frente a la otra, a 5-8 pasos. La primera persona de cada fila pasa a la de enfrente.' },
          { icon: 'Shuffle', front: 'Cruce entre grupos', back: 'Después de pasar, **corres al final de la fila contraria**. Así todos cambian de lugar y se practica pasar y moverse.' },
          { icon: 'Circle', front: 'Círculo', back: 'Todos en círculo; quien recibe, pasa a otra persona y dice su nombre. Nadie queda fuera.' },
          { icon: 'Users', front: 'Movimiento conjunto', back: 'Un grupo avanza **junto** (en tríos, por ejemplo) pasándose el balón sin perder la formación. Requiere **turnos**, **distancia** y **señales** claras.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:2.1.17', 'ef:2.2.4'], ambito: 'hacer', title: 'Ejemplo resuelto: el ejercicio de cruces',
          prompt: 'Mira cómo el grupo de Andrea organiza un ejercicio de pases para 10 personas con un solo balón.' },
        { icon: 'Shuffle', problem: 'Hay 10 estudiantes y 1 balón. Quieren practicar pases con la parte interna, a 6 pasos, sin quedarse mucho tiempo esperando.',
          steps: [
            { text: 'Forman **dos filas enfrentadas** de 5 personas, separadas por 6 pasos.' },
            { text: 'La primera de la fila A pasa con la **parte interna** a la primera de la fila B.', why: 'La parte interna da un pase recto y preciso a media distancia.' },
            { text: 'Después de pasar, **corre al final de la fila B** (cruce). La de la fila B controla, pasa a la fila A y corre al final de la fila A.' },
            { text: 'Tras 2 vueltas, cambian a la **parte externa**: pasan en diagonal a una persona que se abre hacia un lado.' },
            { text: 'Al final, cambian el pie: todos usan el pie **no dominante**.' },
          ],
          answer: 'Con **filas enfrentadas y cruces**, 10 personas practican pases con **ambas superficies** y **ambos pies**, siempre en movimiento.',
          tip: 'Quien espera en la fila también participa: anima y dice el nombre de quien va a recibir.' },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.17', 'ef:2.2.4'], ambito: 'hacer',
          prompt: '¡Torneo de pases! Balón o pelota de trapo. **Calentamiento:** trote, rotación de tobillos, rodillas y cadera; 10 toques suaves con la parte interna de cada pie. **Parte principal:** (1) en parejas: 10 pases con parte interna a 3 pasos y 10 a 6 pasos, **5 con cada pie**; (2) 10 pases con parte externa en diagonal; (3) pase elevado por encima de una mochila; (4) en grupo: filas enfrentadas con cruces. **Poco espacio:** pases contra una pared a 2 pasos, alternando pies. **Adaptación:** balón más grande y suave; quien no pueda patear, pasa con la mano o empujando con la silla de ruedas; todos participan en los cruces. **Vuelta a la calma:** estira piernas y toma agua.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después de los pases en parejas', exercise: { name: 'Parte interna y externa, a 3 y 6 pasos', icon: 'Footprints', seconds: 90 } },
          { label: 'Después de las filas con cruces', exercise: { name: 'Pasar y correr a la fila contraria', icon: 'Shuffle', seconds: 90 } },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.17'], ambito: 'hacer',
          prompt: 'Luisa pasa con la parte interna, pero el balón siempre se le va hacia la derecha de su compañero. Su pie de apoyo apunta hacia la derecha. ¿Qué debe corregir?',
          explain: 'El pie de apoyo es el "timón": debe **apuntar al compañero**. Si apunta a otro lado, el balón sigue esa dirección.' },
        { options: [
          { id: 'a', text: 'Colocar el pie de apoyo apuntando a su compañero' },
          { id: 'b', text: 'Golpear con la punta del pie', feedback: 'La punta da menos precisión, no más.' },
          { id: 'c', text: 'Golpear más fuerte', feedback: 'La fuerza cambia la distancia, no la dirección.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.2.4'], ambito: 'convivir',
          prompt: 'En el ejercicio de cruces, varios corren al mismo tiempo a la otra fila y chocan. ¿Qué acuerdo ayuda más?',
          explain: 'Los **turnos** y el **camino acordado** (por ejemplo, correr siempre por fuera, por la derecha) evitan choques en los cruces.' },
        { options: [
          { id: 'a', text: 'Solo corre quien acaba de pasar, siempre por el lado de afuera de las filas' },
          { id: 'b', text: 'Que cada quien corra por donde quiera, más rápido', feedback: 'Sin un camino acordado los choques aumentan.' },
          { id: 'c', text: 'Suspender el ejercicio', feedback: 'Con un buen acuerdo se puede seguir jugando con seguridad.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.17'], prompt: '¿Con qué parte del pie harías cada pase?' },
        { buckets: [
          { id: 'in', label: 'Parte interna', icon: 'ArrowRight', color: 'var(--area-ef)' },
          { id: 'ex', label: 'Parte externa', icon: 'CornerDownRight', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'y1', text: 'Un pase recto y preciso a un compañero a 4 pasos, justo enfrente', bucket: 'in' },
          { id: 'y2', text: 'Un pase en diagonal hacia un lado, sin girar el cuerpo', bucket: 'ex' },
          { id: 'y3', text: 'Un pase corto y seguro en la fila de cruces', bucket: 'in' },
          { id: 'y4', text: 'Un pase hacia afuera mientras corres, sin cambiar tu dirección', bucket: 'ex' },
        ] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.17', 'ef:2.2.4'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Con la parte externa del pie puedes pasar hacia un lado sin girar el cuerpo.', answer: true },
          { text: 'Para elevar el balón se golpea la parte de arriba.', answer: false, why: 'Para elevarlo se golpea la parte de abajo.' },
          { text: 'En un cruce entre filas, después de pasar vas al final de la fila contraria.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Vestuario, respiración y calma ───────────────────────── */
  preparedLesson({
    id: 's06-ef-2',
    title: 'Preparado y en calma: vestuario, respiración y relajación',
    icon: 'Wind',
    minutes: 15,
    gancho: '¿Has intentado correr con zapatos de vestir o con los cordones sueltos? ¿Y te ha pasado que antes de un partido o un examen el corazón te late muy rápido?',
    objetivos: [
      'Aplicar preparación y recuperación seguras en la actividad física',
      'Practicar la respiración abdominal lenta para recuperar la calma',
      'Usar la relajación de tensión y soltura para el equilibrio emocional',
    ],
    resumen: [
      'Vestuario para la actividad física: ropa cómoda y fresca que deje mover el cuerpo, calzado deportivo con suela antideslizante y bien amarrado, cabello recogido y sin aretes, collares ni objetos en los bolsillos.',
      'Según el lugar y el clima: al sol, gorra o sombrero y bloqueador; al frío, varias capas que te puedas quitar; en el monte, pantalón largo, manga larga y botas o zapatos cerrados.',
      'Respiración abdominal lenta: inhala por la nariz inflando el abdomen (4 tiempos) y exhala despacio por la boca (4 a 6 tiempos). Calma el cuerpo y las emociones.',
      'Relajación de tensión y soltura: aprieta un grupo de músculos 5 segundos y suéltalo 10 segundos, notando la diferencia. Ayuda después del ejercicio y en momentos de nervios o enojo.',
    ],
    media: {
      id: 's06-ef-2-respiracion', kind: 'animation', title: 'Respira como un globo', aspect: '16:9', duration: 60,
      alt: 'Una niña acostada con un peluche sobre el abdomen: al inhalar el peluche sube como un globo que se infla; al exhalar despacio, baja. Un contador marca 4 tiempos para inhalar y 6 para exhalar.',
      brief: 'Animación 2D tranquila de 60 s, colores suaves. (1) Una niña acostada boca arriba en un petate con un peluche sobre el abdomen. (2) Un globo dibujado dentro del abdomen se infla al inhalar por la nariz (contador 1-2-3-4) y se desinfla al exhalar por la boca (contador 1-2-3-4-5-6); el peluche sube y baja. (3) Un corazón en una esquina late rápido al inicio y más lento al final (sin cifras). (4) Texto final: "Inhala 4 · Exhala 6". Voz narradora calmada en español, subtítulos. Música ambiental muy suave.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:3.1.6'], ambito: 'conocer',
          prompt: 'Mañana hay clase de Educación Física en la cancha, a pleno sol. ¿Qué te pondrías?',
          explain: 'Ropa **cómoda y fresca**, **tenis bien amarrados** y **gorra**. El vestuario adecuado te protege y te deja moverte con libertad.' },
        { options: [
          { id: 'a', text: 'Ropa cómoda y fresca, tenis bien amarrados y gorra', icon: 'Shirt' },
          { id: 'b', text: 'Pantalón de vestir, zapatos lustrados y reloj', icon: 'Briefcase', feedback: 'Esa ropa limita el movimiento y los zapatos de vestir resbalan.' },
          { id: 'c', text: 'Chancletas para ir más fresco', icon: 'Footprints', feedback: 'Las chancletas se salen y no protegen los pies: aumentan el riesgo de golpes y torceduras.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:3.1.6'], ambito: 'conocer', title: 'El vestuario adecuado',
          prompt: 'La ropa correcta depende de **qué actividad** harás, **dónde** y con **qué clima**. Mira la ilustración y toca cada tarjeta.',
          media: {
            id: 's06-ef-2-vestuario', kind: 'image', title: 'Vestidos para cada actividad', aspect: '16:9',
            alt: 'Tres niñas y niños vestidos para distintas actividades: uno para la cancha al sol con gorra, camiseta holgada y tenis; otra para una mañana fría con capas; otro para una siembra en el monte con pantalón largo, manga larga, sombrero y botas.',
            brief: 'Ilustración en tres paneles con fondo guatemalteco: (1) cancha escolar al sol: gorra, camiseta clara holgada, pantaloneta, tenis amarrados, pachón de agua; (2) mañana fría en el altiplano: camiseta, suéter y chumpa en capas, pants y tenis; (3) jornada de siembra en el monte: sombrero, camisa manga larga, pantalón largo, botas de hule, bloqueador. Un pequeño recuadro tachado con chancletas, collar y zapatos de vestir. Sin marcas visibles en la ropa. Diversidad de pueblos y géneros.',
          } },
        { icon: 'Shirt', body: 'Regla general: **cómodo, seguro y apropiado al clima**. No hace falta ropa cara: basta con que cumpla su función.', reveal: [
          { icon: 'Shirt', front: 'Ropa', back: '**Cómoda y holgada**, de tela que deje pasar el aire (como el algodón). Que no apriete ni se enrede.' },
          { icon: 'Footprints', front: 'Calzado', back: '**Tenis o zapatos deportivos** con suela que no resbale, **bien amarrados**. Nada de chancletas ni zapatos de vestir.' },
          { icon: 'Sun', front: 'Sol y calor', back: 'Gorra o sombrero, **bloqueador** y ropa de colores claros. Lleva **agua**.' },
          { icon: 'Snowflake', front: 'Frío', back: 'Varias **capas** (camiseta, suéter, chumpa) que te puedas quitar al entrar en calor y volver a poner al terminar.' },
          { icon: 'TreePine', front: 'Monte o siembra', back: '**Pantalón largo**, **manga larga** y zapatos cerrados o botas: te protegen de espinas, piedras e insectos.' },
          { icon: 'Gem', front: 'Sin accesorios', back: 'Quítate **aretes, collares, relojes** y saca objetos de los bolsillos. Recoge el cabello largo. Evitas golpes y rasguños.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef', 'cnt'], cnb: ['ef:3.1.2'], ambito: 'ser', title: 'La respiración que calma',
          prompt: 'Cuando haces ejercicio o sientes nervios, respiras rápido y el corazón se acelera. Puedes **ayudar a tu cuerpo a calmarse** con la respiración. Mira la animación y toca cada tarjeta.' },
        { icon: 'Wind', body: 'La respiración **abdominal lenta** usa el **diafragma**, un músculo debajo de los pulmones. Al respirar despacio y profundo, el cuerpo recibe la señal de que puede calmarse.', reveal: [
          { icon: 'Wind', front: 'Inhala', back: 'Por la **nariz**, contando **4**, inflando el **abdomen** como un globo (los hombros no suben).' },
          { icon: 'Hourglass', front: 'Exhala', back: 'Por la **boca**, despacio, contando **4 a 6**, desinflando el globo. Exhalar más largo que inhalar ayuda a calmarse.' },
          { icon: 'Repeat', front: 'Repite', back: 'Haz de **5 a 10** respiraciones. Puedes hacerlo sentado, de pie o acostado.' },
          { icon: 'Heart', front: '¿Cuándo?', back: 'Después del ejercicio, antes de un partido o una prueba, cuando sientes enojo o miedo. Es tu herramienta para el **equilibrio emocional**.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:3.1.2'], ambito: 'ser', title: 'Ejemplo resuelto: la relajación de tensión y soltura',
          prompt: 'Otra técnica: **tensar y soltar** los músculos. Mira cómo la usa Tomás después de un partido en el que se enojó.' },
        { icon: 'Smile', problem: 'Tomás perdió un partido y siente los hombros duros, los puños apretados y la respiración agitada.',
          steps: [
            { text: 'Se sienta cómodo en un lugar tranquilo y hace **3 respiraciones abdominales** lentas.' },
            { text: '**Manos:** aprieta los puños fuerte **5 segundos**… y los **suelta 10 segundos**, notando cómo se aflojan.', why: 'Al sentir la diferencia entre tensión y soltura, el cuerpo aprende a relajarse.' },
            { text: '**Hombros:** los sube hacia las orejas 5 segundos… y los deja caer 10 segundos.' },
            { text: '**Cara:** arruga la cara 5 segundos… y la afloja 10 segundos.' },
            { text: 'Termina con 3 respiraciones más y nota cómo se siente: más tranquilo y listo para hablar de lo que pasó.' },
          ],
          answer: 'Tensar **5 s** y soltar **10 s** cada grupo de músculos, con respiraciones lentas al inicio y al final, ayuda a recuperar la calma.',
          tip: 'Aprieta con fuerza, pero sin dolor. Si algo duele, no lo tenses tanto.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:3.1.6'], ambito: 'conocer',
          prompt: 'Clasifica cada prenda o accesorio para una clase de Educación Física en la cancha.',
          hint: 'Piensa: ¿me deja mover?, ¿me protege?, ¿puede golpearme o hacerme caer?',
          explain: 'Lo adecuado es cómodo, seguro y según el clima. Los accesorios y el calzado inadecuado pueden causar lesiones.' },
        { buckets: [
          { id: 'si', label: 'Adecuado', icon: 'Check', color: 'var(--c-ok)' },
          { id: 'no', label: 'No adecuado', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'v1', text: 'Tenis bien amarrados', bucket: 'si' },
          { id: 'v2', text: 'Collar largo', bucket: 'no' },
          { id: 'v3', text: 'Camiseta de algodón holgada', bucket: 'si' },
          { id: 'v4', text: 'Chancletas', bucket: 'no' },
          { id: 'v5', text: 'Gorra y bloqueador en día de sol', bucket: 'si' },
          { id: 'v6', text: 'Pantalón de vestir ajustado', bucket: 'no' },
        ] },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:3.1.2'], ambito: 'ser',
          prompt: '¡Mide cómo te calmas! **Parte 1:** mide tu pulso en reposo. **Parte 2:** haz 1 minuto de actividad intensa (trote en tu lugar con rodillas arriba y saltos suaves) y mide tu pulso. **Parte 3:** siéntate y haz respiración abdominal (inhala 4, exhala 6) y la relajación de tensión y soltura de manos, hombros y cara; mide otra vez. Observa cómo tu pulso baja. **Poco espacio:** todo en tu lugar. **Adaptación:** la actividad intensa puede ser con los brazos, sentado.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después de la actividad intensa', exercise: { name: 'Trote con rodillas arriba y saltos suaves', icon: 'Activity', seconds: 60 } },
          { label: 'Después de respirar y relajarte', exercise: { name: 'Respiración 4-6 y tensión-soltura', icon: 'Wind', seconds: 90 } },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:3.1.6'], ambito: 'hacer',
          prompt: 'Como preparación para la actividad física del sábado hay una **jornada de siembra** en la montaña: habrá sol, tierra, espinas y piedras. ¿Qué vestuario es adecuado? **Elige todas las correctas.**',
          explain: 'En el monte hay que proteger la piel y los pies: manga y pantalón largos, zapatos cerrados, sombrero y bloqueador. Las chancletas y los shorts dejan la piel expuesta a espinas e insectos.' },
        { multiple: true, options: [
          { id: 'a', text: 'Pantalón largo y camisa de manga larga' },
          { id: 'b', text: 'Botas o zapatos cerrados' },
          { id: 'c', text: 'Sombrero o gorra y bloqueador' },
          { id: 'd', text: 'Chancletas y short', feedback: 'Dejan los pies y las piernas expuestos a espinas, piedras e insectos.' },
        ], correct: ['a', 'b', 'c'] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:3.1.2'], ambito: 'ser',
          prompt: 'Como recuperación emocional antes de volver a la actividad física, ¿qué harías tú?' },
        { scene: { icon: 'Heart', text: 'Faltan 5 minutos para la final del torneo de pases. **Ana** siente el corazón acelerado, las manos sudadas y dice: "Mejor no juego, me voy a equivocar".' }, options: [
          { id: 'a', icon: 'X', text: 'Decirle: "Si tienes miedo, mejor quédate afuera"', consequence: 'Ana se pierde la final y se queda con la idea de que los nervios no se pueden manejar.', values: ['Evitar'], constructive: false },
          { id: 'b', icon: 'Wind', text: 'Invitarla a hacer juntas 5 respiraciones abdominales y a soltar hombros y manos', consequence: 'Ana se calma un poco, siente apoyo y decide jugar. Los nervios no desaparecen del todo, pero ya no la controlan.', values: ['Empatía', 'Autocontrol', 'Compañerismo'], constructive: true },
          { id: 'c', icon: 'MessageCircle', text: 'Recordarle que equivocarse es parte de aprender y que el equipo la apoya', consequence: 'Ana se siente acompañada. Con palabras de apoyo y respiración, la confianza crece.', values: ['Apoyo', 'Respeto'], constructive: true },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:3.1.2'], prompt: 'Durante la recuperación de la actividad física, en la respiración abdominal lenta, ¿qué parte del cuerpo se infla al inhalar?' },
        { options: [
          { id: 'a', text: 'El abdomen' },
          { id: 'b', text: 'Los hombros, que suben hasta las orejas' },
          { id: 'c', text: 'Las mejillas' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:3.1.6', 'ef:3.1.2'], prompt: 'Sobre preparación y recuperación para la actividad física, ¿verdadero o falso?' },
        { statements: [
          { text: 'Para hacer ejercicio conviene quitarse aretes, collares y relojes.', answer: true },
          { text: 'Con frío es mejor usar varias capas de ropa que te puedas quitar.', answer: true },
          { text: 'En la relajación de tensión y soltura se aprieta el músculo hasta que duela.', answer: false, why: 'Se aprieta con fuerza pero sin dolor, y luego se suelta.' },
          { text: 'Exhalar despacio y más largo que la inhalación ayuda a calmarse.', answer: true },
        ] },
      ),
      cierre({ areas: ['ef'], cnb: ['ef:3.1.2'] },
        ['Paso el balón con la parte interna y externa de cada pie', 'Elijo el vestuario adecuado para cada actividad', 'Uso la respiración y la relajación para calmarme'],
        ['Revisaré mi ropa y mis cordones antes de cada clase', 'Practicaré 5 respiraciones lentas antes de dormir', 'Usaré la respiración cuando sienta nervios o enojo']),
    ],
  }),
];
