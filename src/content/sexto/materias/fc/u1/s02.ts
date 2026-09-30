/**
 * Formación Ciudadana · Unidad 1 · Semana 2 — Día de mercado en mi pueblo.
 * Progresión: los derechos específicos de la niñez (Convención y Ley PINA) → analizar con datos
 * la situación de esos derechos y del desarrollo social en Guatemala.
 */
import { cierre, lesson, S } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Derechos de la niñez ───────────────────────── */
  lesson({
    id: 's02-fc-1',
    title: 'Los derechos de la niñez y quién los protege',
    icon: 'Baby',
    minutes: 14,
    gancho: 'Tienes 11 o 12 años. ¿Sabías que hay leyes escritas especialmente para proteger a personas de tu edad?',
    objetivos: [
      'Conocer la Convención sobre los Derechos del Niño y la Ley PINA de Guatemala',
      'Clasificar los derechos de la niñez en supervivencia, desarrollo, protección y participación',
      'Reconocer a quién acudir cuando un derecho de la niñez no se respeta',
    ],
    resumen: [
      'La Convención sobre los Derechos del Niño fue aprobada por las Naciones Unidas el 20 de noviembre de 1989; Guatemala la ratificó en 1990. Protege a toda persona menor de 18 años.',
      'En Guatemala, la Ley de Protección Integral de la Niñez y Adolescencia (Ley PINA, Decreto 27-2003) desarrolla esos derechos.',
      'Los derechos de la niñez se agrupan en: supervivencia (vida, salud, alimentación), desarrollo (educación, juego, cultura), protección (contra la violencia y la explotación) y participación (opinar y ser escuchado).',
      'Si un derecho no se respeta, habla con una persona adulta de confianza. Instituciones como la Procuraduría de los Derechos Humanos y la Procuraduría General de la Nación protegen a la niñez.',
    ],
    media: {
      id: 's02-fc-1-cuatro-grupos', kind: 'diagram', title: 'Cuatro grupos de derechos', aspect: '1:1',
      alt: 'Un círculo dividido en cuatro partes con un niño y una niña al centro: supervivencia, desarrollo, protección y participación, cada una con un ícono y ejemplos.',
      brief: 'Diagrama circular dividido en cuatro cuadrantes de colores suaves, con una niña y un niño guatemaltecos (uno con traje maya, otro con uniforme escolar) al centro. Cuadrantes: "Supervivencia" (ícono de corazón: vida, salud, alimentación), "Desarrollo" (ícono de libro: educación, juego, cultura), "Protección" (ícono de escudo: contra violencia, explotación, abandono), "Participación" (ícono de globo de diálogo: opinar, ser escuchado, reunirse). Textos grandes y cortos, fondo blanco, estilo plano.',
    },
    steps: [
      S.tf(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:1.2.2'], ambito: 'conocer',
          prompt: '¿Qué crees? Responde sin miedo: aún no hemos explicado el tema.',
          explain: 'Hoy verás que la niñez tiene derechos **especiales** además de los derechos humanos de todas las personas, y que en Guatemala existe una ley para protegerlos.' },
        { statements: [
          { text: 'Las niñas y los niños tienen derecho a jugar y descansar.', answer: true },
          { text: 'Los niños solo tienen derechos cuando cumplen 18 años.', answer: false, why: 'Tienen derechos desde que nacen. A los 18 años se adquieren además derechos políticos, como votar.' },
          { text: 'Una niña tiene derecho a dar su opinión sobre lo que le afecta.', answer: true },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.2'], ambito: 'conocer', title: 'Leyes que protegen a la niñez',
          prompt: 'Las niñas, los niños y los adolescentes están creciendo y necesitan **protección especial**. Por eso existen leyes solo para ellos. Toca cada tarjeta.' },
        { icon: 'ScrollText', body: 'Estas leyes no quitan responsabilidades: los derechos van de la mano con **deberes**, como respetar a los demás, estudiar y cuidar lo común.', reveal: [
          { icon: 'Globe', front: 'Convención sobre los Derechos del Niño', back: 'Tratado de las **Naciones Unidas** aprobado el **20 de noviembre de 1989**. Protege a toda persona **menor de 18 años**. Guatemala la ratificó en **1990**.' },
          { icon: 'Landmark', front: 'Ley PINA', back: 'Ley de Protección Integral de la Niñez y Adolescencia, **Decreto 27-2003** del Congreso de Guatemala. Aplica la Convención en nuestro país.' },
          { icon: 'Star', front: 'Interés superior del niño', back: 'Principio clave: en toda decisión que afecte a una niña o un niño, se debe buscar **lo que más le conviene** para su bienestar y desarrollo.' },
          { icon: 'Scale', front: 'No discriminación', back: 'Los derechos son para **toda** la niñez: de cualquier pueblo, idioma, religión, sexo, condición económica o discapacidad.' },
          { icon: 'Phone', front: '¿A quién acudir?', back: 'Primero, a una **persona adulta de confianza** (familia, maestra, directora). Además, la **Procuraduría de los Derechos Humanos** y la **Procuraduría General de la Nación** (por medio de su Procuraduría de la Niñez y la Adolescencia) protegen a la niñez.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.2'], ambito: 'conocer', title: 'Cuatro grupos de derechos',
          prompt: 'Para estudiarlos, los derechos de la niñez se agrupan en **cuatro familias**. Toca cada una.' },
        { icon: 'Layers', body: 'Una pista para recordarlas: **vivir**, **crecer**, **estar a salvo** y **tener voz**.', reveal: [
          { icon: 'HeartPulse', front: 'Supervivencia (vivir)', back: 'Derecho a la **vida**, la **salud**, la **alimentación**, el agua y una vivienda digna.' },
          { icon: 'BookOpen', front: 'Desarrollo (crecer)', back: 'Derecho a la **educación**, al **juego** y el descanso, a la **cultura** y a su propio idioma, a un nombre y una identidad.' },
          { icon: 'Shield', front: 'Protección (estar a salvo)', back: 'Derecho a ser protegido de la **violencia**, el maltrato, el abandono y los **trabajos que dañan** su salud o le impiden estudiar.' },
          { icon: 'MessageCircle', front: 'Participación (tener voz)', back: 'Derecho a **opinar y ser escuchado** en lo que le afecta, a reunirse y a organizarse, por ejemplo en el gobierno escolar.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.2'], prompt: 'Clasifica cada derecho en su familia.',
          hint: 'Usa la pista: vivir (supervivencia), crecer (desarrollo), estar a salvo (protección), tener voz (participación).',
          explain: 'Supervivencia: vivir sano. Desarrollo: crecer y aprender. Protección: estar a salvo del daño. Participación: tener voz.' },
        { layout: 'grid2', buckets: [
          { id: 'sup', label: 'Supervivencia', icon: 'HeartPulse', color: 'var(--c-ok)' },
          { id: 'des', label: 'Desarrollo', icon: 'BookOpen', color: 'var(--c-jade)' },
          { id: 'pro', label: 'Protección', icon: 'Shield', color: 'var(--area-fc)' },
          { id: 'par', label: 'Participación', icon: 'MessageCircle', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'd1', text: 'Recibir vacunas y atención médica', bucket: 'sup' },
          { id: 'd2', text: 'Ir a la escuela', bucket: 'des' },
          { id: 'd3', text: 'No ser golpeado ni humillado', bucket: 'pro' },
          { id: 'd4', text: 'Votar en la elección del gobierno escolar', bucket: 'par' },
          { id: 'd5', text: 'Comer lo suficiente cada día', bucket: 'sup' },
          { id: 'd6', text: 'Jugar y aprender en su propio idioma', bucket: 'des' },
          { id: 'd7', text: 'No hacer trabajos peligrosos', bucket: 'pro', feedback: 'Los trabajos que dañan la salud o impiden estudiar van contra el derecho a la protección.' },
          { id: 'd8', text: 'Dar su opinión en una asamblea de la comunidad', bucket: 'par' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.2'], ambito: 'hacer', title: 'Ejemplo resuelto: ¿qué derecho está en juego?',
          prompt: 'Mira cómo se analiza un caso de la niñez usando lo que aprendiste.' },
        { icon: 'Search', problem: 'Supongamos que **Ana**, de 11 años, dejó la escuela porque su familia la necesita para cuidar a sus hermanos pequeños todo el día mientras sus papás venden en el mercado.',
          steps: [
            { text: '**¿Qué derecho se afecta?** El derecho a la **educación** (familia: desarrollo).' },
            { text: '**¿Hay otro derecho en juego?** El derecho al **juego y al descanso**, porque pasa todo el día trabajando en casa.', why: 'Cuidar hermanos un rato es una responsabilidad familiar; hacerlo todo el día en lugar de estudiar ya afecta sus derechos.' },
            { text: '**¿Qué dice el principio del interés superior?** Hay que buscar la solución que más convenga a Ana: que pueda estudiar.' },
            { text: '**¿Qué se puede hacer?** La maestra puede hablar con la familia y buscar apoyos de la comunidad (por ejemplo, un programa de cuidado infantil o turnos entre familiares).' },
          ],
          answer: 'El caso de Ana afecta sus derechos de **desarrollo**. La solución debe buscar **su interés superior**: que vuelva a estudiar.',
          tip: 'Analizar no es culpar: la familia de Ana también necesita apoyo. Los derechos se cumplen entre todos.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.2'], prompt: 'En una reunión de la comunidad se decide dónde construir un parque infantil, pero **nadie pregunta a las niñas y los niños**. ¿Qué derecho no se está tomando en cuenta?',
          hint: '¿Cuál de las cuatro familias habla de "tener voz"?',
          explain: 'El derecho a **opinar y ser escuchado** (participación). El parque es para la niñez: su opinión importa.' },
        { options: [
          { id: 'a', text: 'Participación: opinar y ser escuchado', icon: 'MessageCircle' },
          { id: 'b', text: 'Supervivencia: alimentación', icon: 'Wheat', feedback: 'La comida no es el tema aquí. Fíjate en quién no fue consultado.' },
          { id: 'c', text: 'Protección contra la violencia', icon: 'Shield', feedback: 'Nadie está en peligro. El problema es que no se escucha a la niñez.' },
        ], correct: ['a'] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.2.2'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
        { scene: { icon: 'Shield', text: 'Tu amigo **Luis** llega varios días con moretones y te cuenta, triste, que en su casa le pegan cuando se equivoca. Te pide que no le digas a nadie.' },
          options: [
            { id: 'a', icon: 'Lock', text: 'Guardar el secreto como te pidió', consequence: 'Luis sigue sufriendo en silencio. Guardar un secreto que hace daño no es ayudar.', values: ['Lealtad mal entendida'], constructive: false },
            { id: 'b', icon: 'HeartHandshake', text: 'Decirle que no es su culpa y acompañarlo a hablar con la maestra o la directora', consequence: 'Una persona adulta de confianza sabe cómo buscar protección para Luis. Él se siente acompañado.', values: ['Solidaridad', 'Protección', 'Valentía'], constructive: true },
            { id: 'c', icon: 'Home', text: 'Contarle a tu mamá, papá o encargado para que te ayuden a saber qué hacer', consequence: 'Un adulto de confianza puede orientar y avisar a quien corresponde. Luis recibe apoyo.', values: ['Responsabilidad', 'Confianza'], constructive: true },
          ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.2.2'], prompt: 'Une cada situación con la **familia de derechos** que se ve afectada.',
          explain: 'Identificar la familia del derecho ayuda a saber qué tipo de apoyo se necesita.' },
        { leftTitle: 'Situación', rightTitle: 'Familia de derechos', pairs: [
          { id: 'x1', left: 'Un bebé no recibió sus vacunas', leftIcon: 'Syringe', right: 'Supervivencia' },
          { id: 'x2', left: 'Un niño trabaja cargando bultos pesados en lugar de estudiar', leftIcon: 'Package', right: 'Protección' },
          { id: 'x3', left: 'En una escuela no dejan que los estudiantes elijan a su gobierno escolar', leftIcon: 'Vote', right: 'Participación' },
          { id: 'x4', left: 'Una niña no tiene libros ni útiles para aprender', leftIcon: 'BookOpen', right: 'Desarrollo' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.2'], prompt: '¿Cómo se llama la ley de Guatemala que protege los derechos de la niñez y la adolescencia?' },
        { options: [
          { id: 'a', text: 'Ley de Protección Integral de la Niñez y Adolescencia (Ley PINA)' },
          { id: 'b', text: 'Ley de Tránsito' },
          { id: 'c', text: 'Declaración de Independencia' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.2'], prompt: 'Clasifica cada derecho en su familia.' },
        { buckets: [
          { id: 'sup', label: 'Supervivencia', icon: 'HeartPulse' },
          { id: 'pro', label: 'Protección', icon: 'Shield' },
          { id: 'par', label: 'Participación', icon: 'MessageCircle' },
        ], items: [
          { id: 'k1', text: 'Tener agua limpia para beber', bucket: 'sup' },
          { id: 'k2', text: 'No sufrir maltrato', bucket: 'pro' },
          { id: 'k3', text: 'Ser escuchado cuando se decide algo que le afecta', bucket: 'par' },
          { id: 'k4', text: 'No ser obligado a trabajar en lugar de estudiar', bucket: 'pro' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Situación de los derechos y desarrollo social ───────────────────────── */
  lesson({
    id: 's02-fc-2',
    title: 'Desarrollo social: ¿se cumplen los derechos en Guatemala?',
    icon: 'TrendingUp',
    minutes: 15,
    gancho: 'En algunas comunidades hay escuela, agua y centro de salud; en otras, faltan. ¿Cómo podemos saber si un país avanza en el cumplimiento de los derechos?',
    objetivos: [
      'Explicar qué es el desarrollo social y cómo se relaciona con los derechos humanos',
      'Analizar datos sencillos para comparar la situación de los derechos en distintos lugares',
      'Reconocer retos reales de Guatemala, como la desnutrición crónica, y quién vigila los derechos',
    ],
    resumen: [
      'El desarrollo social es la mejora de la calidad de vida de toda la población: salud, educación, alimentación, vivienda, empleo y participación. Hay desarrollo social cuando los derechos se vuelven realidad para todos.',
      'Para analizar la situación de un derecho se usan datos (indicadores): cuántas casas tienen agua potable, cuántos niños van a la escuela, etc. Comparar lugares muestra desigualdades (brechas).',
      'Un gran reto de Guatemala es la desnutrición crónica: según la encuesta nacional de salud de 2014-2015, casi la mitad de las niñas y los niños menores de cinco años la padecían. Afecta su salud y su aprendizaje.',
      'La Procuraduría de los Derechos Humanos vigila que se respeten los derechos. El Estado, las comunidades y las familias trabajan juntos para el desarrollo social.',
    ],
    media: {
      id: 's02-fc-2-brecha', kind: 'animation', title: 'Dos aldeas, una brecha', aspect: '16:9', duration: 45,
      alt: 'Dos aldeas lado a lado; en cada una se llenan barras de agua potable, escuela y centro de salud, y se ve que una tiene mucho más que la otra.',
      brief: 'Animación 2D de 45 s. Pantalla dividida: "Aldea A" (con carretera asfaltada) y "Aldea B" (lejana, camino de tierra). Sobre cada aldea suben tres barras con íconos: gota (agua potable), libro (niños en la escuela), cruz (centro de salud cerca). En la Aldea A las barras suben alto; en la B quedan bajas. Aparece una llave de corchete entre las barras con la palabra "brecha". Narración: "Los datos nos ayudan a ver dónde los derechos todavía no se cumplen". Etiqueta visible: "Datos hipotéticos". Sin cifras reales, estilo plano, colores cálidos.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['fc'], cnb: ['fc:1.2.2'], ambito: 'conocer',
          prompt: 'Si quisieras saber si en tu municipio se cumple el derecho a la educación, ¿qué dato te ayudaría **más**?',
          explain: 'Los **datos** (cuántos niños estudian, cuántas casas tienen agua…) permiten analizar la situación de los derechos con hechos, no solo con opiniones.' },
        { options: [
          { id: 'a', text: 'Cuántas niñas y niños en edad escolar van a la escuela', icon: 'School' },
          { id: 'b', text: 'Cuántos equipos de fútbol hay', icon: 'Trophy', feedback: 'Es un dato interesante, pero no dice nada sobre la educación.' },
          { id: 'c', text: 'De qué color están pintadas las escuelas', icon: 'Palette', feedback: 'El color no nos dice si los niños están aprendiendo.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.2'], ambito: 'conocer', title: '¿Qué es el desarrollo social?',
          prompt: 'Un país no se desarrolla solo porque tenga edificios altos. Toca cada tarjeta para entender el **desarrollo social**.' },
        { icon: 'TrendingUp', body: 'Desarrollo social y derechos humanos van juntos: **hay desarrollo social cuando los derechos se cumplen para todas las personas**, no solo para algunas.', reveal: [
          { icon: 'Users', front: 'Desarrollo social', back: 'La mejora de la **calidad de vida de toda la población**: salud, educación, alimentación, vivienda, empleo y participación.' },
          { icon: 'BarChart3', front: 'Indicador', back: 'Un **dato** que muestra cómo está un derecho. Ejemplo: de cada 10 casas, cuántas tienen agua potable.' },
          { icon: 'Scale', front: 'Brecha', back: 'La **diferencia** entre dos grupos o lugares. Ejemplo: entre el área urbana y el área rural, o entre niñas y niños.' },
          { icon: 'Landmark', front: 'Procuraduría de los Derechos Humanos', back: 'Institución creada por la **Constitución de 1985**. El Procurador vigila que el Estado respete los derechos humanos y recibe denuncias.' },
        ] },
      ),
      S.chart(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.2'], ambito: 'hacer',
          prompt: 'Supongamos que un comité revisó **10 casas** en la aldea El Porvenir. Construye la gráfica con estos datos: agua potable **6**, electricidad **8**, casas donde todos los niños van a la escuela **9**, centro de salud a menos de 30 minutos **2**.',
          hint: 'Cada barra sube de 1 en 1. Busca cada dato en la consigna y súbela hasta ese número.',
          explain: 'La barra más baja (centro de salud cercano: 2 de 10) muestra el derecho que **menos** se cumple en esa aldea: la salud.' },
        { categories: [
          { id: 'agua', label: 'Agua potable', icon: 'Droplets', color: 'var(--area-ccss)' },
          { id: 'luz', label: 'Electricidad', icon: 'Zap', color: 'var(--c-maiz-strong)' },
          { id: 'esc', label: 'Escuela', icon: 'School', color: 'var(--c-jade)' },
          { id: 'sal', label: 'Salud cerca', icon: 'Stethoscope', color: 'var(--area-fc)' },
        ], data: [6, 8, 9, 2], max: 10, step: 1, unit: 'casas de 10', source: 'Datos hipotéticos de la aldea El Porvenir' },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.2'], ambito: 'hacer', title: 'Ejemplo resuelto: leer la gráfica como ciudadano',
          prompt: 'Una gráfica no termina en las barras: hay que **interpretarla**. Mira cómo.' },
        { icon: 'BarChart3', problem: 'Con los datos de El Porvenir (agua 6, electricidad 8, escuela 9, salud cercana 2, de 10 casas), ¿qué derecho está en peor situación y qué se puede proponer?',
          steps: [
            { text: '**Busco el dato más bajo:** salud cercana, **2 de 10** casas.' },
            { text: '**Lo traduzco a derechos:** 8 de cada 10 familias no tienen un centro de salud cerca. El **derecho a la salud** no se cumple plenamente.', why: '10 − 2 = 8 familias sin servicio cercano.' },
            { text: '**Comparo:** la escuela (9 de 10) está mucho mejor. Hay una **brecha** entre educación y salud en la aldea.' },
            { text: '**Propongo:** el COCODE puede presentar estos datos a la municipalidad y al Ministerio de Salud para pedir un puesto de salud o jornadas médicas.' },
          ],
          answer: 'El derecho en peor situación es la **salud**. Con los datos, la comunidad puede **pedir soluciones con argumentos**.',
          tip: 'Dato → derecho → comparación → propuesta.' },
      ),
      S.reading(
        { fase: 'construir', areas: ['fc'], cnb: ['fc:1.2.2'], ambito: 'conocer', prompt: 'Lee este texto sobre la situación real de algunos derechos en Guatemala y responde.' },
        { genre: 'Texto informativo', heading: 'Derechos que aún son un reto',
          passage: 'La **Constitución Política de la República de Guatemala** reconoce que todas las personas tienen derecho a la vida, la salud y la educación. Sin embargo, esos derechos no se cumplen igual en todo el país.\n\nUno de los mayores retos es la **desnutrición crónica**: una niña o un niño la padece cuando, por no alimentarse bien durante mucho tiempo, su estatura queda por debajo de la que corresponde a su edad. Según la encuesta nacional de salud de 2014-2015, **casi la mitad** de las niñas y los niños menores de cinco años en Guatemala la padecían. Esto afecta su salud y su aprendizaje durante toda la vida.\n\nTambién hay **brechas**: en muchas comunidades rurales el centro de salud o la escuela quedan a varios kilómetros. Para vigilar que se respeten los derechos existe la **Procuraduría de los Derechos Humanos**. El **desarrollo social** se logra cuando el Estado, las comunidades y las familias trabajan juntos para que los derechos sean una realidad para todos.',
          questions: [
            { q: '¿Qué es la desnutrición crónica, según el texto?', options: [
              { id: 'a', text: 'Tener una estatura menor a la de la edad por no alimentarse bien durante mucho tiempo' },
              { id: 'b', text: 'Comer demasiados dulces un día' },
              { id: 'c', text: 'Una enfermedad que se contagia por el aire' },
            ], correct: 'a' },
            { q: '¿Por qué la desnutrición afecta también el derecho a la educación?', options: [
              { id: 'a', text: 'Porque un niño mal alimentado tiene más dificultad para concentrarse y aprender' },
              { id: 'b', text: 'Porque la comida y la escuela no tienen relación' },
              { id: 'c', text: 'Porque solo afecta a las personas adultas' },
            ], correct: 'a', why: 'Los derechos son interdependientes: sin alimentación adecuada, aprender es más difícil.' },
            { q: '¿Qué institución vigila el respeto de los derechos humanos?', options: [
              { id: 'a', text: 'La Procuraduría de los Derechos Humanos' },
              { id: 'b', text: 'El mercado municipal' },
              { id: 'c', text: 'La liga de fútbol' },
            ], correct: 'a' },
          ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.2.2'], ambito: 'hacer',
          prompt: 'Supongamos que en otra aldea, Las Flores, **7 de cada 10** casas **no** tienen agua potable. En un grupo de **30 casas**, ¿cuántas **sí** tienen agua potable?',
          explain: 'Si 7 de cada 10 no tienen agua, 3 de cada 10 sí tienen. En 30 casas hay 3 grupos de 10: 3 × 3 = 9 casas con agua potable.' },
        { answer: 9, unit: 'casas', misconceptions: [
          { value: 21, msg: '21 son las casas que NO tienen agua (7 × 3). La pregunta es por las que sí tienen.' },
          { value: 3, msg: '3 es por cada 10 casas. Hay 30 casas: son 3 grupos de 10.' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.2.2'], prompt: 'Clasifica: ¿es un **avance** del desarrollo social o un **reto pendiente**?',
          explain: 'Analizar la situación de los derechos es reconocer lo que se ha logrado y lo que falta, sin exagerar ni negar los problemas.' },
        { buckets: [
          { id: 'av', label: 'Avance', icon: 'TrendingUp', color: 'var(--c-ok)' },
          { id: 're', label: 'Reto pendiente', icon: 'Target', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'r1', text: 'Una aldea recibe por primera vez un puesto de salud con enfermera', bucket: 'av' },
          { id: 'r2', text: 'Muchas niñas y niños pequeños con desnutrición crónica', bucket: 're' },
          { id: 'r3', text: 'Escuelas rurales que enseñan en el idioma materno y en español', bucket: 'av' },
          { id: 'r4', text: 'Familias rurales que caminan horas para llegar a un centro de salud', bucket: 're' },
          { id: 'r5', text: 'Un sistema de agua potable construido con la comunidad y la municipalidad', bucket: 'av' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['fc'], cnb: ['fc:1.2.2'], ambito: 'hacer',
          prompt: 'Elige **un derecho de la niñez** y analiza su situación en tu comunidad: ¿qué dato o hecho observas?, ¿es un avance o un reto?, ¿quién debería actuar y qué propones?' },
        { minWords: 35, placeholder: 'Elegí el derecho a… En mi comunidad observo que…',
          model: 'Elegí el derecho a la educación. En mi comunidad observo que casi todos los niños van a la escuela primaria, pero varios jóvenes no siguen el básico porque el instituto queda lejos. Es un avance en primaria y un reto en básico. La municipalidad y el Ministerio de Educación deberían actuar; propongo que el COCODE pida transporte escolar o un instituto por cooperativa más cerca.',
          rubric: ['Elegí un derecho de la niñez', 'Usé un dato o un hecho observado', 'Dije si es un avance o un reto', 'Nombré quién debe actuar y propuse algo posible'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.2'], prompt: '¿Cuál es la mejor definición de **desarrollo social**?' },
        { options: [
          { id: 'a', text: 'La mejora de la calidad de vida de toda la población, cuando los derechos se cumplen para todos' },
          { id: 'b', text: 'Construir muchos edificios altos en la capital' },
          { id: 'c', text: 'Que unas pocas familias tengan mucho dinero' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La desnutrición crónica es uno de los grandes retos para los derechos de la niñez en Guatemala.', answer: true },
          { text: 'Una brecha es la diferencia en la situación de dos lugares o grupos.', answer: true },
          { text: 'En Guatemala todos los derechos se cumplen igual en todas las comunidades.', answer: false, why: 'Todavía hay brechas, por ejemplo entre áreas urbanas y rurales.' },
          { text: 'La Convención sobre los Derechos del Niño protege a toda persona menor de 18 años.', answer: true },
        ] },
      ),
      cierre({ areas: ['fc'], cnb: ['fc:1.2.2'] },
        ['Conozco la Convención sobre los Derechos del Niño y la Ley PINA', 'Clasifico los derechos de la niñez en cuatro familias', 'Analizo con datos si un derecho se cumple en un lugar'],
        ['Contaré a mi familia qué es el interés superior del niño', 'Observaré un dato de mi comunidad (agua, escuela, salud) y lo anotaré', 'Si sé de un niño que sufre, hablaré con una persona adulta de confianza']),
    ],
  }),
];
