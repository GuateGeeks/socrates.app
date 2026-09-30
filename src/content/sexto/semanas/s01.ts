import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 1 · Unidad 1 "Conociendo nuestras raíces"
 * Tema generador: Mi lugar en el planeta
 * Cierre semanal (v3): las 27 lecciones de materia viven en src/content/sexto/materias/<area>/u1/s01.ts.
 * El viernes: Taller "Mi lugar en el planeta en un minuto" (Sociales + L2 + Formación Ciudadana + L1)
 * y Reto semanal.
 */
export default semana({
  id: 's01',
  unidad: 1,
  semana: 1,
  kind: 'aprendizaje',
  temaGenerador: 'Mi lugar en el planeta',
  title: 'Mi lugar en el planeta',
  subtitle: 'Coordenadas y clima, fenómenos naturales, la célula, triángulos y paralelogramos, y tu voz para exponer',
  icon: 'Earth',
  color: 'var(--area-ccss)',
  contexto: 'Desde el volcán más alto de Guatemala hasta la playa del Pacífico hay menos de 150 km, pero el clima cambia muchísimo. Esta semana ubicarás tu lugar con latitud y longitud, descubrirás por qué la altitud cambia el clima y cómo prepararte ante sismos y tormentas. También conocerás relatos y explicaciones sobre el origen de la Tierra, viajarás al interior de la célula, clasificarás triángulos y paralelogramos, leerás tus primeras notas musicales y aprenderás a usar tu voz y tu cuerpo para que el público te escuche. Convivir con solidaridad y conocer tus derechos completan el recorrido.',
  ejes: ['sostenible', 'multiculturalidad', 'vida-ciudadana', 'seguridad'],
  media: {
    id: 's01-portada', kind: 'video', title: 'Guatemala desde el cielo', aspect: '16:9', duration: 60,
    alt: 'Recorrido aéreo desde la costa del Pacífico, pasando por la bocacosta, hasta el altiplano y un volcán.',
    brief: 'Video de 60 s con tomas de dron (o animación 2D) que sube desde la playa de Monterrico hasta el altiplano de Quetzaltenango. Sobreimpresos: altitud aproximada (0 m, 800 m, 2,300 m) y temperatura promedio. Música de marimba suave. Cierre con la pregunta: "¿Dónde está tu lugar en el planeta?".',
  },
  badge: { id: 'medalla-s01', name: 'Explorador del planeta', icon: 'Earth', desc: 'Completaste la semana 1 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Viernes: Taller interdisciplinario ───────────────────────── */
    lesson({
      id: 's01-d5-taller',
      kind: 'taller',
      day: 5,
      title: 'Taller: mi lugar en el planeta en un minuto',
      icon: 'Presentation',
      minutes: 18,
      gancho: 'Si tuvieras solo un minuto para presentar tu lugar ante personas de todo el país, ¿qué dirías primero?',
      objetivos: [
        'Usar coordenadas, altitud y riesgos naturales para describir un lugar real',
        'Separar hechos de opiniones y relacionar las condiciones de un lugar con los derechos humanos',
        'Preparar el guion de una exposición de un minuto que atrape al público',
      ],
      resumen: [
        'Para presentar un lugar sirven datos comprobables: latitud y longitud, altitud, clima y riesgos.',
        'Las condiciones de un lugar (agua, escuela, caminos seguros) muestran qué derechos se cumplen y cuáles faltan.',
        'Ante un desastre, la prevención y la solidaridad protegen a la comunidad.',
        'Una buena exposición tiene un inicio que atrapa, dos o tres ideas con datos y un cierre para recordar, dicho con voz clara y cuerpo expresivo.',
      ],
      media: {
        id: 's01-d5-taller-ficha', kind: 'image', title: 'Ficha de la aldea Loma Linda', aspect: '4:3',
        alt: 'Ilustración de una aldea del altiplano en una ladera, con una escuela en terreno firme, un barranco, un nacimiento de agua y una flecha verde de ruta de evacuación.',
        brief: 'Ilustración plana, colores cálidos, de una aldea ficticia del altiplano guatemalteco: casas de adobe y block en una ladera, un barranco a un lado, milpas, un nacimiento de agua con mujeres y niños acarreando agua en tinajas, una escuela en una parte plana y firme, y señales verdes de "Ruta de evacuación" que llevan a la escuela. Recuadro en una esquina: "Loma Linda · 14.9° N · 91.4° O · 2,000 m". Sin rostros identificables ni texto adicional.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'l1'], cnb: ['ccss:1.2.1', 'l1:2.1.6'], ambito: 'conocer', title: 'Tu misión de hoy',
            prompt: 'Un programa de radio escolar invita a estudiantes de todo el país a presentar **su lugar en el planeta en un minuto**. Hoy practicarás con la ficha de la aldea **Loma Linda** y al final escribirás tu propio guion. Toca cada tarjeta para ver qué usarás de lo que aprendiste esta semana.' },
          { icon: 'Radio', body: 'No aprenderás temas nuevos: vas a **usar** lo que ya sabes para comunicar algo importante.', reveal: [
            { icon: 'Globe', front: 'Sociales', back: 'Latitud, longitud y altitud para **ubicar** el lugar y explicar su **clima**; fenómenos naturales y **prevención**.' },
            { icon: 'MessageCircle', front: 'L2', back: 'Separar **hechos** (se comprueban) de **opiniones** (lo que alguien piensa).' },
            { icon: 'Scale', front: 'Formación Ciudadana', back: 'Relacionar las condiciones del lugar con los **derechos humanos** y actuar con **solidaridad**.' },
            { icon: 'Mic', front: 'Comunicación y Lenguaje', back: 'Un **inicio** que atrape, **voz** y **cuerpo** que mantengan la atención.' },
          ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['ccss'], cnb: ['ccss:1.2.1'], ambito: 'conocer',
            prompt: 'La ficha dice que Loma Linda está cerca de **14.9° de latitud norte** y **91.4° de longitud oeste**. ¿En qué hemisferios está?',
            hint: 'La latitud te dice si está al norte o al sur del ecuador; la longitud, si está al este o al oeste de Greenwich.',
            explain: 'Latitud norte → hemisferio norte. Longitud oeste → hemisferio occidental. Toda Guatemala está en esos dos hemisferios (entre 13° y 18° N, y entre 88° y 92° O).' },
          { options: [
            { id: 'a', text: 'Hemisferio norte y hemisferio occidental (oeste)', icon: 'Compass' },
            { id: 'b', text: 'Hemisferio sur y hemisferio occidental (oeste)', icon: 'Compass', feedback: 'La latitud es **norte**: está arriba del ecuador.' },
            { id: 'c', text: 'Hemisferio norte y hemisferio oriental (este)', icon: 'Compass', feedback: 'La longitud es **oeste**: está a la izquierda del meridiano de Greenwich.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'construir', areas: ['ccss', 'mat'], cnb: ['ccss:1.2.1'], ambito: 'hacer',
            prompt: 'En Puerto San José, casi a 0 m de altitud, la temperatura promedio es de unos **27 °C**. La temperatura baja unos **6 °C por cada 1,000 m** que se sube. ¿Qué temperatura promedio aproximada esperas en Loma Linda, a **2,000 m**?',
            hint: 'Primero calcula cuántos grados baja en 2,000 m (dos veces 6 °C) y luego réstalos a 27 °C.',
            explain: 'En 2,000 m la temperatura baja 6 + 6 = 12 °C. Entonces 27 − 12 = **15 °C**. Por eso Loma Linda es tierra fría aunque Guatemala está en la zona tropical.' },
          { answer: 15, unit: '°C', misconceptions: [
            { value: 21, msg: 'Solo restaste 6 °C. Fíjate: son 2,000 m, así que baja 6 °C dos veces.' },
            { value: 39, msg: 'Al subir, la temperatura **baja**, no sube: hay que restar.' },
          ] },
        ),
        S.reading(
          { fase: 'aplicar', areas: ['ccss', 'fc'], cnb: ['ccss:1.2.1', 'ccss:1.3.1', 'fc:1.2.1'], ambito: 'conocer',
            prompt: 'Lee la ficha completa de Loma Linda y responde.' },
          { genre: 'Ficha informativa', heading: 'Aldea Loma Linda', passage:
            'La aldea Loma Linda está en el altiplano occidental de Guatemala, cerca de **14.9° de latitud norte** y **91.4° de longitud oeste**, a unos **2,000 metros** sobre el nivel del mar. Por su altitud es tierra fría: en diciembre, algunas mañanas el pasto amanece blanco por la escarcha.\n\nEn la aldea viven unas 900 personas. Hay una escuela primaria, pero el instituto más cercano está a dos horas a pie. **Solo 6 de cada 10 casas** tienen agua entubada; las demás familias acarrean agua de un nacimiento.\n\nMuchas casas están construidas en la ladera, a la orilla de un barranco. Hace unos años, las lluvias de una tormenta tropical provocaron un deslave que tapó el camino durante una semana. Desde entonces, el COCODE organizó un plan de emergencia y señalizó una ruta de evacuación hacia la escuela, que está en terreno firme.',
            questions: [
              { q: '¿Por qué Loma Linda es tierra fría si Guatemala está en la zona tropical?', options: [
                { id: 'a', text: 'Porque está a mucha altitud: unos 2,000 metros' },
                { id: 'b', text: 'Porque está muy lejos del ecuador, cerca del polo norte' },
                { id: 'c', text: 'Porque tiene longitud oeste' },
              ], correct: 'a', why: 'A más altitud, menos temperatura. La latitud de Guatemala es tropical, pero las montañas crean tierras frías.' },
              { q: 'Según la ficha, ¿qué hacía **vulnerable** a la aldea ante la tormenta tropical?', options: [
                { id: 'a', text: 'Que la escuela está en terreno firme' },
                { id: 'b', text: 'Que muchas casas están en la ladera, a la orilla de un barranco' },
                { id: 'c', text: 'Que en diciembre cae escarcha' },
              ], correct: 'b', why: 'La tormenta es el fenómeno natural; las casas en laderas y barrancos son la vulnerabilidad que puede convertirlo en desastre.' },
              { q: '¿Qué derecho **no se cumple plenamente** para 4 de cada 10 familias de Loma Linda?', options: [
                { id: 'a', text: 'El derecho al agua potable, que protege la salud y un nivel de vida digno' },
                { id: 'b', text: 'El derecho a tener un nombre' },
                { id: 'c', text: 'El derecho a votar en las elecciones' },
              ], correct: 'a', why: 'Si 6 de cada 10 casas tienen agua entubada, a 4 de cada 10 les falta. Las condiciones concretas de un lugar muestran qué derechos faltan.' },
            ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['l2', 'ccss'], cnb: ['l2:1.2.6'], ambito: 'conocer',
            prompt: 'En tu exposición conviene dejar claro qué es **dato** y qué es **tu opinión**. Clasifica estas frases sobre Loma Linda.',
            hint: 'Pregúntate: ¿se puede comprobar midiendo, contando o consultando una fuente? Busca palabras como "creo", "más bonito", "mejor".',
            explain: 'Los hechos se comprueban (altitud, cantidad de casas con agua). Las opiniones expresan lo que alguien piensa o siente; se pueden decir, pero avisando que son tuyas.' },
          { buckets: [
            { id: 'h', label: 'Hecho', icon: 'BadgeCheck', color: 'var(--c-ok)' },
            { id: 'o', label: 'Opinión', icon: 'MessageCircle', color: 'var(--c-hint)' },
          ], items: [
            { id: 'f1', text: 'Loma Linda está a unos 2,000 metros de altitud.', bucket: 'h' },
            { id: 'f2', text: 'Loma Linda tiene el paisaje más bonito del altiplano.', bucket: 'o', feedback: '"Más bonito" depende del gusto de cada quien.' },
            { id: 'f3', text: 'Seis de cada diez casas tienen agua entubada.', bucket: 'h' },
            { id: 'f4', text: 'Creo que el COCODE debería construir un instituto.', bucket: 'o', feedback: '"Creo que… debería" expresa lo que alguien piensa: es una opinión (¡puede ser una buena propuesta!).' },
            { id: 'f5', text: 'La escuela está en terreno firme.', bucket: 'h' },
            { id: 'f6', text: 'Vivir en tierra fría es aburrido.', bucket: 'o' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:1.3.1'], ambito: 'hacer',
            prompt: 'Se anuncia otra temporada de lluvias fuertes. ¿Qué acciones **reducen el riesgo** para las familias de Loma Linda? Elige todas las correctas.',
            hint: 'Piensa en lo que se prepara **antes** de la emergencia y en lo que reduce la vulnerabilidad.',
            explain: 'Prevenir salva vidas: plan familiar, mochila de emergencia, conocer la ruta de evacuación y seguir las indicaciones de la CONRED. Construir junto al barranco aumenta la vulnerabilidad.' },
          { multiple: true, options: [
            { id: 'a', text: 'Hacer un plan familiar de emergencia y preparar una mochila con agua, linterna y documentos', icon: 'Backpack' },
            { id: 'b', text: 'Practicar la ruta de evacuación hacia la escuela', icon: 'Route' },
            { id: 'c', text: 'Escuchar los avisos de la CONRED por la radio', icon: 'Radio' },
            { id: 'd', text: 'Construir un cuarto nuevo más cerca de la orilla del barranco', icon: 'House', feedback: 'Eso aumenta la vulnerabilidad: las orillas de barrancos se pueden deslavar.' },
            { id: 'e', text: 'Esperar a que el agua suba para decidir qué hacer', icon: 'Hourglass', feedback: 'Decidir en plena emergencia es peligroso: el plan se prepara antes.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'ccss'], cnb: ['fc:1.1.2'], ambito: 'convivir',
            prompt: 'Después de las lluvias, algo le pasa a una familia de tu grado. ¿Qué harías tú?' },
          { scene: { icon: 'CloudRain', text: 'El deslave dañó la cocina de la familia de **Ixchel**. Ella llega a la escuela sin útiles y con la ropa húmeda. Algunos compañeros dicen: "Eso les pasa por vivir en la orilla".' }, options: [
            { id: 'a', icon: 'EyeOff', text: 'No meterme: no es mi problema', consequence: 'Ixchel pasa el día sola y preocupada. Los comentarios siguen y nadie la ayuda.', values: ['Indiferencia'], constructive: false },
            { id: 'b', icon: 'HandHeart', text: 'Proponer al grado juntar útiles y víveres para su familia', consequence: 'En dos días se reúnen cuadernos, lápices, frijol y maíz. Ixchel se siente acompañada y su familia puede reparar la cocina.', values: ['Solidaridad', 'Empatía'], constructive: true },
            { id: 'c', icon: 'MessageCircle', text: 'Explicar a los compañeros que nadie elige vivir en riesgo y que burlarse lastima', consequence: 'Algunos compañeros se disculpan. La maestra aprovecha para hablar de la vulnerabilidad y de cómo ayudar sin juzgar.', values: ['Tolerancia', 'Respeto'], constructive: true },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:2.1.6'], ambito: 'hacer',
            prompt: 'Es hora de preparar la exposición sobre Loma Linda. ¿Cuál **inicio** despierta más la curiosidad del público?',
            hint: 'Recuerda: una pregunta o un dato sorprendente atrapan desde el primer segundo.',
            explain: 'El inicio con pregunta y dato sorprendente despierta la curiosidad: el público quiere saber cómo puede haber escarcha en la zona tropical.' },
          { options: [
            { id: 'a', text: '"Hola. Mi tema es la aldea Loma Linda. Empiezo."', feedback: 'Es correcto, pero no despierta curiosidad: no hay pregunta ni dato sorprendente.' },
            { id: 'b', text: '"¿Sabían que en una aldea de Guatemala, en plena zona tropical, el pasto amanece blanco de escarcha?"' },
            { id: 'c', text: '"Voy a leer todo lo que dice mi hoja, pongan atención."', feedback: 'Leer sin mirar al público hace que se distraiga.' },
          ], correct: ['b'] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['l1', 'ccss'], cnb: ['l1:2.1.6'], ambito: 'hacer',
            prompt: 'Ordena las partes de la exposición de un minuto sobre Loma Linda.',
            hint: 'Una exposición corta tiene inicio (atrapa), desarrollo (2 o 3 ideas) y cierre (una frase para recordar).',
            explain: 'Inicio que atrapa → ubicación y clima → riesgo y cómo se prepara la comunidad → cierre que invita a actuar.' },
          { items: [
            { id: 'i', text: 'Pregunta sorprendente sobre la escarcha en la zona tropical', icon: 'CircleHelp' },
            { id: 'd1', text: 'Dónde está: 14.9° N, 91.4° O, a 2,000 m; por eso es tierra fría', icon: 'MapPin' },
            { id: 'd2', text: 'El riesgo del barranco y el plan de emergencia del COCODE', icon: 'TriangleAlert' },
            { id: 'c', text: 'Cierre: "Conocer tu lugar es el primer paso para cuidarlo"', icon: 'Flag' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.tf(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:2.1.6', 'l1:2.1.4'], ambito: 'hacer',
            prompt: 'Ahora piensa en tu **voz** y tu **cuerpo** al exponer. ¿Verdadero o falso?',
            hint: 'Recuerda los recursos de la voz (volumen, velocidad, pausas) y del cuerpo (mirada, gestos, postura).',
            explain: 'Voz clara, pausas antes de lo importante, mirada repartida y gestos que dicen lo mismo que las palabras mantienen la atención.' },
          { statements: [
            { text: 'Hacer una pausa larga justo antes del dato más importante ayuda a que el público ponga atención.', answer: true },
            { text: 'Para no ponerme nervioso, es mejor mirar solo a una persona todo el tiempo.', answer: false, why: 'La mirada se reparte entre todo el público para que cada persona se sienta incluida.' },
            { text: 'Al decir "la temperatura baja", puedo bajar la mano despacio para mostrarlo.', answer: true },
            { text: 'Si hablo muy rápido, termino antes y el público entiende mejor.', answer: false, why: 'Una velocidad tranquila, con pausas, deja que el público entienda cada idea.' },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l1', 'ccss', 'fc'], cnb: ['l1:2.1.6', 'ccss:1.2.1', 'ccss:1.3.1'], ambito: 'hacer', title: 'Producto: mi guion de un minuto',
            prompt: 'Escribe el guion de **tu** exposición de un minuto: "Mi lugar en el planeta". Habla de tu comunidad (o de Loma Linda si prefieres). Incluye un inicio que atrape, dónde está y cómo es su clima, un riesgo natural y cómo prepararse, y un cierre. Marca con **/** las pausas cortas y con **//** las largas.' },
          { placeholder: '¿Sabían que…? / Mi comunidad está…', minWords: 50,
            model: '¿Sabían que en mi aldea, en plena zona tropical, el pasto amanece blanco de escarcha? // Vivo en Loma Linda, / en el hemisferio norte y occidental, / a unos 2,000 metros de altura. / Por eso es tierra fría. // Nuestro mayor riesgo son los deslaves en época de lluvia, / porque muchas casas están junto al barranco. / Por eso tenemos un plan de emergencia / y una ruta de evacuación hacia la escuela. // Conocer tu lugar es el primer paso para cuidarlo.',
            rubric: [
              'Mi inicio es una pregunta o un dato sorprendente',
              'Digo dónde está mi lugar y explico su clima con la altitud (o la latitud)',
              'Menciono un riesgo natural y una forma de prevenirlo',
              'Uso solo hechos, o aviso cuando algo es mi opinión',
              'Marqué pausas y tengo un cierre fácil de recordar',
            ] },
        ),
        cierre({ areas: ['l1', 'ccss', 'fc'], cnb: ['l1:2.1.6', 'fc:1.1.2'] },
          ['Ubico un lugar con latitud y longitud y explico su clima con la altitud', 'Distingo hechos de opiniones al presentar información', 'Preparo una exposición con inicio, desarrollo y cierre'],
          ['Ensayaré mi exposición frente a mi familia', 'Preguntaré en casa si tenemos un plan de emergencia', 'Averiguaré a qué altitud está mi comunidad']),
      ],
    }),

    /* ───────────────────────── Viernes: Reto semanal ───────────────────────── */
    lesson({
      id: 's01-d5-reto',
      kind: 'reto',
      day: 5,
      title: 'Reto de la semana 1',
      icon: 'Trophy',
      minutes: 14,
      objetivos: ['Demostrar lo que aprendiste esta semana en todas tus materias', 'Obtener la medalla "Explorador del planeta" (70 % o más)'],
      resumen: ['Superé el reto de la semana 1: coordenadas y clima, fenómenos naturales, la célula, triángulos y paralelogramos, música, inglés y convivencia.'],
      media: {
        id: 's01-d5-reto', kind: 'image', title: 'Medalla Explorador del planeta', aspect: '1:1',
        alt: 'Medalla dorada con un globo terráqueo y un quetzal.',
        brief: 'Ilustración de medalla circular dorada con relieve de un globo terráqueo centrado en América y un quetzal estilizado volando alrededor. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024.',
      },
      steps: [
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: 'Dos ángulos de un triángulo miden **52°** y **71°**. ¿Cuánto mide el tercer ángulo?' },
          { answer: 57, unit: '°', misconceptions: [{ value: 123, msg: 'Esa es la suma de los dos ángulos. Réstala a 180°.' }] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.2'], prompt: 'Un paralelogramo tiene lados de **7 cm, 3 cm, 7 cm y 3 cm**, y **ninguno** de sus ángulos es recto. ¿Cómo se llama?' },
          { options: [
            { id: 'a', text: 'Rombo', feedback: 'El rombo tiene los 4 lados iguales.' },
            { id: 'b', text: 'Romboide' },
            { id: 'c', text: 'Rectángulo', feedback: 'El rectángulo tiene 4 ángulos rectos.' },
            { id: 'd', text: 'Cuadrado', feedback: 'El cuadrado tiene 4 lados iguales y 4 ángulos rectos.' },
          ], correct: ['b'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.1.6'], prompt: 'Clasifica cada recurso para mantener la atención del público.' },
          { buckets: [
            { id: 'voz', label: 'De la voz', icon: 'Volume2', color: 'var(--area-l1)' },
            { id: 'cuerpo', label: 'Del cuerpo', icon: 'Hand', color: 'var(--area-ef)' },
            { id: 'cont', label: 'Del contenido', icon: 'Lightbulb', color: 'var(--c-maiz-strong)' },
          ], items: [
            { id: 'r1', text: 'Subir el volumen con emoción en la parte más importante', bucket: 'voz' },
            { id: 'r2', text: 'Hacer una pausa larga antes de un dato', bucket: 'voz' },
            { id: 'r3', text: 'Repartir la mirada entre todo el público', bucket: 'cuerpo' },
            { id: 'r4', text: 'Mostrar con las manos el tamaño de algo', bucket: 'cuerpo' },
            { id: 'r5', text: 'Empezar con una pregunta curiosa', bucket: 'cont' },
            { id: 'r6', text: 'Enseñar un objeto real relacionado con el tema', bucket: 'cont' },
          ] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.2.1'], prompt: 'Une cada organelo de la célula animal con su función.' },
          { leftTitle: 'Organelo', rightTitle: 'Función', pairs: [
            { id: 'rib', left: 'Ribosomas', right: 'Fabrican proteínas' },
            { id: 'lis', left: 'Lisosomas', right: 'Digieren desechos' },
            { id: 'gol', left: 'Aparato de Golgi', right: 'Empaca y envía sustancias' },
            { id: 'ret', left: 'Retículo endoplasmático', right: 'Transporta sustancias dentro de la célula' },
          ] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.1.1'], prompt: 'Sobre los relatos y explicaciones del origen: ¿verdadero o falso?' },
          { statements: [
            { text: 'Según el Popol Vuh, los primeros seres humanos que lograron los creadores fueron hechos de maíz, después de intentarlo con barro y con madera.', answer: true },
            { text: 'Según el relato del Génesis, Dios creó el mundo en seis días y descansó el séptimo.', answer: true },
            { text: 'La ciencia explica que la Tierra se formó hace unos 4,500 años.', answer: false, why: 'Son unos **4,500 millones** de años, no 4,500 años.' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.2.1'], prompt: 'La ciudad de Sídney, en Australia, está cerca de **34° de latitud sur** y **151° de longitud este**. ¿En qué hemisferios está?' },
          { options: [
            { id: 'a', text: 'Norte y occidental' },
            { id: 'b', text: 'Sur y oriental' },
            { id: 'c', text: 'Sur y occidental' },
          ], correct: ['b'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.3.1'], prompt: '¿Cuándo un fenómeno natural, como un sismo, se convierte en un **desastre**?' },
          { options: [
            { id: 'a', text: 'Siempre, en cualquier lugar donde ocurra' },
            { id: 'b', text: 'Cuando afecta a una población vulnerable y causa daños graves' },
            { id: 'c', text: 'Solo cuando ocurre de noche' },
          ], correct: ['b'] },
        ),
        S.fill(
          { fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.1'], prompt: 'Complete in English.' },
          { text: 'The ruler is [[in]] the backpack.\nThe bank is [[between]] the church and the market.\nThe dog is [[behind]] the house.', distractors: ['on', 'under'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.1'], prompt: '¿Cuántos tiempos dura en total este ritmo? **blanca + negra + negra + corchea + corchea**' },
          { answer: 5, unit: 'tiempos', misconceptions: [{ value: 6, msg: 'Cada corchea dura medio tiempo: dos corcheas suman 1 tiempo.' }] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.1.2'], prompt: 'Estás en cuclillas y te levantas estirando las rodillas. ¿Qué movimiento hacen tus rodillas al estirarse?' },
          { options: [
            { id: 'a', text: 'Extensión' },
            { id: 'b', text: 'Flexión' },
            { id: 'c', text: 'Rotación' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.1.2'], prompt: 'Samuel te cuenta cómo celebra su familia una fiesta religiosa distinta de la tuya. ¿Qué respuesta muestra **tolerancia**?' },
          { options: [
            { id: 'a', text: 'Escucharlo con respeto y preguntarle lo que te da curiosidad, aunque tú creas distinto' },
            { id: 'b', text: 'Decirle que su fiesta no tiene sentido' },
            { id: 'c', text: 'Dejar de hablarle porque no piensa como tú' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.2.4'], prompt: 'La maestra empieza: _"Saquen su cuaderno de Matemáticas y ábranlo en una página nueva…"_. ¿Qué es más probable que diga después?' },
          { options: [
            { id: 'a', text: 'Las instrucciones de un ejercicio de Matemáticas' },
            { id: 'b', text: 'Un cuento que empieza "Había una vez…"' },
            { id: 'c', text: 'La receta de los tamales' },
          ], correct: ['a'] },
        ),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 1 (el primer área = área principal) */
  bank: [
    S.tf({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.4'], prompt: 'Sobre figuras congruentes: ¿verdadero o falso?' },
      { statements: [
        { text: 'Si giras un triángulo, el triángulo girado es congruente con el original.', answer: true },
        { text: 'Un rectángulo de 4 cm × 2 cm y otro de 8 cm × 4 cm son congruentes.', answer: false, why: 'Tienen la misma forma, pero distinto tamaño: no son congruentes.' },
        { text: 'Dos figuras congruentes tienen sus ángulos correspondientes iguales.', answer: true },
      ] }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: '¿Pueden 90°, 60° y 40° ser los ángulos de un triángulo?' },
      { options: [
        { id: 'a', text: 'Sí, porque tiene un ángulo recto' },
        { id: 'b', text: 'No, porque suman 190° y los ángulos de un triángulo suman 180°' },
        { id: 'c', text: 'Sí, cualquier trío de ángulos forma un triángulo' },
      ], correct: ['b'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.4.2'], prompt: 'Vas a escribir un correo a la directora para pedir prestada la cancha. ¿Qué **asunto** es el más adecuado?' },
      { options: [
        { id: 'a', text: 'Solicitud de préstamo de la cancha para el viernes' },
        { id: 'b', text: 'hola!!! 😀' },
        { id: 'c', text: 'URGENTE LEA ESTO' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:2.1.4'], prompt: 'En el guion de una exposición aparece la marca **//**. ¿Qué indica?' },
      { options: [
        { id: 'a', text: 'Una pausa larga' },
        { id: 'b', text: 'Que hay que gritar' },
        { id: 'c', text: 'Que esa parte no se dice' },
      ], correct: ['a'] }),
    S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.3.1'], prompt: '¿Dónde está cada estructura?' },
      { buckets: [
        { id: 'an', label: 'Solo célula animal', icon: 'PawPrint' },
        { id: 've', label: 'Solo célula vegetal', icon: 'Leaf' },
        { id: 'am', label: 'En ambas', icon: 'Copy' },
      ], items: [
        { id: 'e1', text: 'Centriolos', bucket: 'an' },
        { id: 'e2', text: 'Vacuola central grande', bucket: 've' },
        { id: 'e3', text: 'Cloroplastos', bucket: 've' },
        { id: 'e4', text: 'Ribosomas', bucket: 'am' },
        { id: 'e5', text: 'Aparato de Golgi', bucket: 'am' },
      ] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.2.1'], prompt: '¿De dónde proviene toda célula?' },
      { options: [
        { id: 'a', text: 'De otra célula' },
        { id: 'b', text: 'Del agua de lluvia' },
        { id: 'c', text: 'Del aire' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.2.1'], prompt: '¿Desde qué línea imaginaria se mide la **longitud**?' },
      { options: [
        { id: 'a', text: 'Desde el meridiano de Greenwich' },
        { id: 'b', text: 'Desde el ecuador' },
        { id: 'c', text: 'Desde el nivel del mar' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.2.1', 'ccss:2.2.1'], prompt: 'Los lugares ubicados **entre los trópicos**, cerca del ecuador, pertenecen a la zona climática…' },
      { options: [
        { id: 'a', text: 'Cálida o tropical' },
        { id: 'b', text: 'Polar' },
        { id: 'c', text: 'Templada' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:1.2.1'], prompt: '¿Qué organización aprobó la Declaración Universal de los Derechos Humanos en 1948?' },
      { options: [
        { id: 'a', text: 'Las Naciones Unidas' },
        { id: 'b', text: 'La municipalidad de cada pueblo' },
        { id: 'c', text: 'Un club deportivo' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.1.1'], prompt: '¿Cuál de estos es un elemento que **determina la pobreza** de una población?' },
      { options: [
        { id: 'a', text: 'La falta de empleo digno y de servicios como agua y salud' },
        { id: 'b', text: 'Que la comunidad celebre muchas fiestas patronales' },
        { id: 'c', text: 'Que la comunidad esté en tierra fría' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:1.1.1'], prompt: 'En clave de sol, ¿qué nota se escribe en la **segunda línea** del pentagrama?' },
      { options: [
        { id: 'a', text: 'Sol' },
        { id: 'b', text: 'Do' },
        { id: 'c', text: 'La' },
      ], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.2.4'], prompt: '¿Cuál es un ejemplo de **equilibrio dinámico**?' },
      { options: [
        { id: 'a', text: 'Caminar sobre una línea pintada en el suelo sin salirte' },
        { id: 'b', text: 'Quedarte quieto parado en un pie' },
        { id: 'c', text: 'Estar sentado en una silla' },
      ], correct: ['a'] }),
  ],
});
