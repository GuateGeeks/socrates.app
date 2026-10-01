/**
 * Ciencias Naturales y Tecnología · Unidad 1 · Semana 5 — Cuidar la salud: prevenir y decidir.
 * Progresión: VIH y SIDA (defensas, transmisión, no discriminación) → las drogas y sus tipos
 * (y su relación con el contagio de enfermedades) → prácticas que favorecen una vida sana
 * libre de drogas (deporte, juego, convivencia, recreación, decir que no).
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. VIH y SIDA ───────────────────────── */
  lesson({
    id: 's05-cnt-1',
    title: 'VIH y SIDA: conocer para prevenir y no discriminar',
    icon: 'Shield',
    minutes: 15,
    gancho: 'Muchas personas usan "VIH" y "SIDA" como si fueran lo mismo, y hay muchos mitos que lastiman a quienes viven con el virus. ¿Qué dice la ciencia?',
    objetivos: ['Explicar qué hace el sistema inmunológico y cómo lo afecta el VIH; diferenciar el VIH del SIDA; distinguir las formas reales de transmisión de los mitos, para prevenir sin discriminar'],
    resumen: [
      'El sistema inmunológico son las defensas del cuerpo: glóbulos blancos que combaten microbios.',
      'El VIH (Virus de Inmunodeficiencia Humana) es el virus que ataca y debilita esas defensas. El SIDA (Síndrome de Inmunodeficiencia Adquirida) es la etapa avanzada de la infección, cuando las defensas están tan bajas que aparecen otras enfermedades.',
      'El VIH se transmite solo por sangre, por relaciones sexuales sin protección y de madre a bebé durante el embarazo, el parto o la lactancia si no hay tratamiento. No se transmite por abrazos, besos en la mejilla, compartir platos, el baño, la piscina ni por zancudos.',
      'Con tratamiento antirretroviral, una persona con VIH puede vivir muchos años y no llegar al SIDA. Solo una prueba de sangre dice si alguien tiene el virus. Discriminar viola los derechos de las personas.',
    ],
    media: {
      id: 's05-cnt-1-defensas', kind: 'animation', title: 'Las defensas y el VIH', aspect: '16:9', duration: 50,
      alt: 'Animación: glóbulos blancos como guardianes vencen a unos microbios; aparece el VIH, entra en algunos guardianes y su número baja poco a poco; con medicamentos, el virus se detiene y los guardianes se recuperan.',
      brief: 'Animación 2D de 50 s, estilo amable (sin sangre ni escenas de enfermedad grave). (1) Glóbulos blancos dibujados como guardianes redondos patrullan la sangre y vencen microbios de colores. (2) Llega el VIH (esfera con puntitos) y entra en algunos guardianes; un contador muestra que su número baja lentamente durante "años". (3) Rótulo "VIH = el virus". (4) Si no hay tratamiento, los guardianes son tan pocos que otros microbios avanzan: rótulo "SIDA = etapa avanzada". (5) Escena alternativa: una persona toma su medicamento diario (pastilla), el virus se frena y los guardianes se recuperan: "Con tratamiento, se puede vivir muchos años". Narración en español con subtítulos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:3.5.1'], ambito: 'conocer',
          prompt: 'Diferencia el virus, la infección y la etapa avanzada antes de analizar casos.' },
        { icon: 'ShieldCheck', body: 'El VIH afecta el sistema de defensas; el SIDA es una etapa avanzada que puede prevenirse con diagnóstico y tratamiento. La convivencia cotidiana no transmite el VIH y nunca justifica discriminar.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.5.1'], ambito: 'conocer',
          prompt: '¿Qué crees? **VIH** y **SIDA**, ¿son lo mismo?',
          explain: 'No son lo mismo. El **VIH** es un **virus**; el **SIDA** es la **etapa avanzada** de la infección. Una persona puede tener VIH durante muchos años sin llegar al SIDA, sobre todo si recibe tratamiento.' },
        { options: [
          { id: 'a', text: 'Sí, son dos nombres para lo mismo', icon: 'Copy', feedback: 'Es un error muy común. Hoy verás la diferencia.' },
          { id: 'b', text: 'No: uno es un virus y el otro una etapa de la infección', icon: 'Layers' },
          { id: 'c', text: 'No sé', icon: 'HelpCircle', feedback: '¡Está bien no saber! Para eso es esta lección.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.5.1'], ambito: 'conocer', title: 'Tus defensas',
          prompt: 'Para entender el VIH, primero conoce a tus **defensas**. Toca las tarjetas.' },
        { icon: 'Shield', body: 'Tu cuerpo tiene un **sistema inmunológico**: un equipo que reconoce y combate a los **microbios** (virus, bacterias, parásitos) que te enferman.', reveal: [
          { icon: 'ShieldCheck', front: 'Glóbulos blancos', back: 'Células de la sangre que funcionan como **guardianes**. Algunos, llamados **linfocitos**, dirigen la defensa.' },
          { icon: 'Bug', front: '¿Qué es un virus?', back: 'Un microbio tan pequeño que solo se ve con microscopios especiales. **No puede reproducirse solo**: entra en una célula y la usa para hacer copias de sí mismo.' },
          { icon: 'Syringe', front: 'Vacunas', back: 'Entrenan a tus defensas para reconocer ciertos microbios. **Contra el VIH todavía no hay vacuna.**' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.5.1'], ambito: 'conocer', title: 'VIH y SIDA no son lo mismo',
          prompt: 'Mira la animación de la lección y toca las tarjetas para diferenciarlos.' },
        { icon: 'Layers', body: 'El VIH ataca justamente a los **linfocitos** que dirigen la defensa. Poco a poco, durante años, las defensas bajan.', reveal: [
          { icon: 'Bug', front: 'VIH', back: '**Virus de Inmunodeficiencia Humana.** Es el **virus**. Una persona con VIH puede verse y sentirse sana durante años.' },
          { icon: 'HeartPulse', front: 'SIDA', back: '**Síndrome de Inmunodeficiencia Adquirida.** Es la **etapa avanzada** de la infección sin tratamiento: las defensas están tan bajas que aparecen otras enfermedades.' },
          { icon: 'Pill', front: 'Tratamiento', back: 'Los medicamentos **antirretrovirales**, tomados todos los días, frenan al virus. Con ellos, una persona con VIH puede vivir muchos años y **no llegar al SIDA**. Aún no hay cura.' },
          { icon: 'TestTube', front: 'La prueba', back: 'La **única** forma de saber si alguien tiene VIH es con una **prueba de sangre** en un servicio de salud. No se sabe "por cómo se ve" una persona.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.5.1'], ambito: 'conocer', title: 'Ejemplo: dos caminos después de la infección',
          prompt: 'Compara qué pasa con y sin tratamiento. Todas las personas del ejemplo son imaginarias.' },
        { icon: 'Route', problem: 'Supongamos que dos personas adultas, **Carlos** y **Sofía**, adquieren el VIH el mismo año. Carlos se hace la prueba y empieza tratamiento; Sofía no se entera. ¿Qué pasa con cada uno?',
          steps: [
            { text: 'Al principio, los dos se sienten **bien**: el virus avanza sin dar señales durante años.', why: 'Por eso la prueba de sangre es tan importante.' },
            { text: '**Carlos** toma sus antirretrovirales todos los días: el virus se frena y sus **defensas se mantienen**.' },
            { text: '**Sofía**, sin tratamiento, pierde defensas poco a poco. Años después, le dan infecciones que su cuerpo ya no puede combatir: llegó a la etapa de **SIDA**.' },
            { text: 'Si Sofía se hace la prueba y empieza tratamiento, sus defensas pueden **recuperarse** en buena parte.', why: 'Nunca es tarde para buscar atención médica.' },
          ],
          answer: 'VIH es el virus; SIDA es la etapa avanzada **sin tratamiento**. La prueba y el tratamiento cambian el camino.',
          tip: 'Las personas con VIH pueden estudiar, trabajar y tener una vida plena. Merecen respeto.' },
      ),
      S.order(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:3.5.1'], ambito: 'conocer',
          prompt: 'Ordena lo que ocurre **sin tratamiento**, desde el contagio hasta el SIDA.',
          hint: 'El virus entra, ataca a los linfocitos, las defensas bajan durante años y al final aparecen otras enfermedades.',
          explain: 'El VIH entra → ataca a los linfocitos → las defensas bajan poco a poco durante años → aparecen otras enfermedades: SIDA.' },
        { labels: { start: 'Contagio', end: 'SIDA' }, items: [
          { id: 'e1', text: 'El VIH entra al cuerpo', icon: 'Bug' },
          { id: 'e2', text: 'El virus ataca a los linfocitos', icon: 'ShieldCheck' },
          { id: 'e3', text: 'Las defensas bajan poco a poco, durante años', icon: 'Clock' },
          { id: 'e4', text: 'Aparecen otras enfermedades: etapa de SIDA', icon: 'HeartPulse' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:3.5.1'], ambito: 'convivir', title: 'Cómo se transmite… y cómo no',
          prompt: 'Conocer las formas **reales** de transmisión protege tu salud y evita la **discriminación**. Toca las tarjetas.',
          media: { id: 's05-cnt-1-transmision', kind: 'diagram', title: 'El VIH: cómo sí y cómo no se transmite', aspect: '16:9',
            alt: 'Infografía en dos columnas: a la izquierda, con marco naranja, tres íconos de las formas de transmisión (jeringa, protección en relaciones sexuales de adultos, madre embarazada con tratamiento); a la derecha, con marco verde, muchas escenas de convivencia que no transmiten el virus.',
            brief: 'Infografía escolar en dos columnas, íconos planos y respetuosos, sin imágenes explícitas. Columna izquierda "SÍ se transmite" (naranja): jeringa y aguja compartidas; un ícono discreto de pareja adulta con el texto "relaciones sexuales sin protección"; madre embarazada con la nota "sin tratamiento". Columna derecha "NO se transmite" (verde): abrazo, apretón de manos, beso en la mejilla, compartir plato y vaso, baño, piscina, zancudo tachado, estornudo. Cierre: "Convivir no contagia. Discriminar sí hace daño". Letra grande.' } },
        { icon: 'Droplet', body: 'El VIH vive en ciertos líquidos del cuerpo, sobre todo la **sangre**. Fuera del cuerpo sobrevive muy poco tiempo.', reveal: [
          { icon: 'Syringe', front: 'Por sangre', back: 'Al **compartir jeringas, agujas** u objetos con sangre, o por transfusiones de sangre que no fueron analizadas.' },
          { icon: 'HeartHandshake', front: 'Relaciones sexuales sin protección', back: 'Es una forma de transmisión entre personas adultas. Por eso la educación y la protección son importantes.' },
          { icon: 'Baby', front: 'De madre a bebé', back: 'Durante el embarazo, el parto o la lactancia, **si no hay tratamiento**. Con tratamiento, el riesgo baja muchísimo.' },
          { icon: 'X', front: 'NO se transmite por…', back: 'Abrazos, dar la mano, besos en la mejilla, compartir platos o vasos, el baño, la piscina, el sudor, las lágrimas, la tos ni la **picadura de zancudos**.' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt', 'fc'], cnb: ['cnt:3.5.1'], ambito: 'convivir',
          prompt: 'Hay muchos mitos sobre el VIH. Clasifica: ¿**sí** puede transmitirlo o **no** lo transmite?',
          explain: 'Convivir, abrazar, jugar o comer con una persona con VIH no transmite el virus. Discriminar a alguien por vivir con VIH viola sus derechos.' },
        { buckets: [
          { id: 'si', label: 'Sí puede transmitir el VIH', icon: 'Droplet', color: 'var(--area-pyd)' },
          { id: 'no', label: 'No transmite el VIH', icon: 'HeartHandshake', color: 'var(--c-ok)' },
        ], items: [
          { id: 'v1', text: 'Dar un abrazo o la mano', bucket: 'no' },
          { id: 'v2', text: 'Compartir vasos, platos o el baño', bucket: 'no' },
          { id: 'v3', text: 'La picadura de un zancudo', bucket: 'no', feedback: 'El VIH no se reproduce en los zancudos: no lo transmiten.' },
          { id: 'v4', text: 'Compartir jeringas o agujas usadas', bucket: 'si' },
          { id: 'v5', text: 'De madre a bebé sin tratamiento médico', bucket: 'si' },
          { id: 'v6', text: 'Jugar fútbol juntos', bucket: 'no' },
          { id: 'v7', text: 'Nadar en la misma piscina', bucket: 'no' },
        ] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['cnt', 'fc'], cnb: ['cnt:3.5.1'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
        { scene: { icon: 'Users', text: 'En la aldea se corre el rumor de que el tío de **Mynor** vive con VIH. Algunos compañeros ya no quieren sentarse con Mynor ni compartir la refacción con él.' }, options: [
          { id: 'a', icon: 'EyeOff', text: 'Alejarme de Mynor "por si acaso"', consequence: 'Mynor se siente solo y humillado. Además, compartir la refacción no transmite el VIH: el miedo nació de un mito.', values: ['Miedo', 'Discriminación'], constructive: false },
          { id: 'b', icon: 'HeartHandshake', text: 'Sentarme con Mynor y explicar a los demás que así no se transmite', consequence: 'Mynor se siente acompañado y algunos compañeros cambian de actitud al conocer la verdad.', values: ['Solidaridad', 'Respeto'], constructive: true },
          { id: 'c', icon: 'Megaphone', text: 'Pedir al docente una charla sobre VIH y no discriminación', consequence: 'El grupo aprende con datos científicos y se frenan los rumores.', values: ['Responsabilidad', 'Información'], constructive: true },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:3.5.1'], ambito: 'hacer',
          prompt: '¿Cuál de estas medidas **sí** ayuda a prevenir la transmisión del VIH por sangre?',
          explain: 'No compartir objetos que pueden tener sangre (jeringas, agujas, navajas de afeitar o cepillos de dientes) evita el contacto con sangre de otra persona.' },
        { options: [
          { id: 'a', text: 'No compartir jeringas, agujas ni navajas de afeitar', icon: 'Syringe' },
          { id: 'b', text: 'No abrazar a personas con VIH', icon: 'X', feedback: 'Los abrazos no transmiten el VIH. Evitar el contacto solo discrimina.' },
          { id: 'c', text: 'Usar repelente contra zancudos', icon: 'Bug', feedback: 'El repelente protege del dengue, pero los zancudos no transmiten el VIH.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.5.1'], prompt: '¿Cuál es la diferencia entre **VIH** y **SIDA**?' },
        { options: [
          { id: 'a', text: 'El VIH es el virus; el SIDA es la etapa avanzada de la infección' },
          { id: 'b', text: 'Son exactamente lo mismo' },
          { id: 'c', text: 'El SIDA es el virus y el VIH es una vacuna' },
          { id: 'd', text: 'El VIH se hereda y el SIDA se adquiere' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.5.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'El VIH ataca las defensas del cuerpo.', answer: true },
          { text: 'Se puede saber si alguien tiene VIH solo con mirarlo.', answer: false, why: 'Solo una prueba de sangre lo dice; muchas personas con VIH se ven sanas.' },
          { text: 'Con tratamiento, una persona con VIH puede vivir muchos años sin llegar al SIDA.', answer: true },
          { text: 'Compartir la refacción con una persona con VIH transmite el virus.', answer: false, why: 'El VIH no se transmite por compartir comida, platos ni vasos.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Las drogas y sus tipos ───────────────────────── */
  lesson({
    id: 's05-cnt-2',
    title: 'Las drogas: qué son y qué tipos hay',
    icon: 'Brain',
    minutes: 15,
    gancho: 'Una taza de café, un cigarro, una cerveza y una pastilla para dormir tomada sin receta. ¿Qué pueden tener en común?',
    objetivos: ['Explicar qué es una droga y qué son la tolerancia y la dependencia; diferenciar los tipos de droga por su situación legal y por su efecto; relacionar el consumo de drogas con el contagio de algunas enfermedades'],
    resumen: [
      'Una droga es una sustancia que, al entrar al cuerpo, cambia el funcionamiento del sistema nervioso y puede causar dependencia (necesidad de seguir consumiéndola).',
      'Por su situación legal: legales (alcohol, tabaco, cafeína y algunos medicamentos que actúan sobre el sistema nervioso, como los tranquilizantes) e ilegales (marihuana, cocaína, entre otras). Que una droga sea legal no significa que sea inofensiva.',
      'Por su efecto: depresoras (hacen más lento el sistema nervioso: alcohol, inhalantes), estimulantes (lo aceleran: nicotina, cafeína, cocaína) y perturbadoras o alucinógenas (alteran la percepción: marihuana, alucinógenos).',
      'El consumo de drogas se relaciona con enfermedades: compartir jeringas transmite VIH y hepatitis; bajo sus efectos se toman decisiones de riesgo; el tabaco y el alcohol dañan pulmones, corazón e hígado.',
    ],
    media: {
      id: 's05-cnt-2-cerebro', kind: 'diagram', title: 'Tres efectos en el sistema nervioso', aspect: '16:9',
      alt: 'Tres velocímetros sobre la silueta de un cerebro: uno con la aguja hacia lo lento (depresoras), otro hacia lo rápido (estimulantes) y otro con la aguja que da vueltas (perturbadoras).',
      brief: 'Infografía de tres paneles con un cerebro esquemático y un velocímetro encima. Panel 1 "Depresoras": aguja hacia la zona lenta (azul); ejemplos en texto: alcohol, inhalantes (pegamentos, solventes). Panel 2 "Estimulantes": aguja hacia la zona rápida (rojo); ejemplos: nicotina del tabaco, cafeína, cocaína. Panel 3 "Perturbadoras o alucinógenas": aguja que gira y colores distorsionados; ejemplos: marihuana, alucinógenos. NO mostrar sustancias, cigarros, jeringas ni personas consumiendo; solo íconos neutros y texto. Colores planos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:4.1.1'], ambito: 'conocer',
          prompt: 'Clasifica las sustancias por su efecto, no solo por su condición legal.' },
        { icon: 'Brain', body: 'Una droga altera funciones del organismo y puede ser depresora, estimulante o perturbadora del sistema nervioso. Que una sustancia sea legal no significa que carezca de riesgos.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.1.1'], ambito: 'conocer',
          prompt: 'El café, un cigarro, una cerveza y una pastilla para dormir tomada sin receta, ¿qué tienen en común?',
          explain: 'Todos contienen sustancias que **cambian cómo funciona el cerebro** y el cuerpo: son **drogas**, aunque sean muy distintas en su efecto y en su peligro.' },
        { options: [
          { id: 'a', text: 'Nada, son cosas totalmente diferentes', icon: 'X', feedback: 'Parecen distintas, pero todas tienen algo en común. Sigue leyendo.' },
          { id: 'b', text: 'Contienen sustancias que cambian cómo funciona el cerebro', icon: 'Brain' },
          { id: 'c', text: 'Todas son alimentos', icon: 'Utensils', feedback: 'No aportan los nutrientes que necesitas para crecer.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.1.1'], ambito: 'conocer', title: '¿Qué es una droga?',
          prompt: 'Una **droga** es una sustancia que, al entrar al cuerpo, **cambia el funcionamiento del sistema nervioso** (el cerebro y los nervios). Toca las tarjetas.' },
        { icon: 'Brain', body: 'El problema principal de las drogas es que el cerebro **se acostumbra** a ellas.', reveal: [
          { icon: 'TrendingUp', front: 'Tolerancia', back: 'Con el uso repetido, el cuerpo necesita **cada vez más** cantidad para sentir el mismo efecto.' },
          { icon: 'Link', front: 'Dependencia', back: 'La persona **siente que necesita** la droga y le cuesta dejarla aunque le haga daño. También se llama **adicción**.' },
          { icon: 'Frown', front: 'Abstinencia', back: 'Malestar físico y emocional que aparece cuando una persona dependiente **deja** de consumir.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.1.1'], ambito: 'conocer', title: 'Clasificar por ley y por efecto',
          prompt: 'Las drogas pueden clasificarse por su situación legal y por **lo que le hacen al sistema nervioso**. Observa el diagrama y toca las tarjetas.' },
        { icon: 'Activity', body: '**Legal no significa inofensiva.** La ley y el efecto responden preguntas distintas.', reveal: [
          { icon: 'Scale', front: 'Situación legal', back: 'Alcohol, tabaco, cafeína y medicamentos recetados son legales bajo condiciones; marihuana y cocaína son ilegales. Un medicamento sin receta o dosis indicada es un uso peligroso.' },
          { icon: 'TrendingDown', front: 'Depresoras', back: 'Lo hacen **más lento**: reflejos lentos, sueño, mala coordinación. Ejemplos: **alcohol** e **inhalantes** (pegamentos, solventes, thinner), muy peligrosos para el cerebro.' },
          { icon: 'Zap', front: 'Estimulantes', back: 'Lo **aceleran**: corazón rápido, nerviosismo, falta de sueño. Ejemplos: **nicotina**, **cafeína** (suave) y **cocaína** (muy peligrosa).' },
          { icon: 'Eye', front: 'Perturbadoras o alucinógenas', back: '**Alteran la percepción**: se ven, oyen o sienten cosas de forma distorsionada. Ejemplos: **marihuana** y alucinógenos.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.1.1'], ambito: 'conocer',
          prompt: 'Diferencia los tipos de droga según su **efecto principal**.',
          hint: '¿Hace más lento, acelera o distorsiona lo que se percibe?',
          explain: 'Depresoras: alcohol e inhalantes. Estimulantes: nicotina, cafeína y cocaína. Perturbadoras: marihuana y alucinógenos.' },
        { buckets: [
          { id: 'dep', label: 'Depresora', icon: 'TrendingDown', color: 'var(--area-ccss)' },
          { id: 'est', label: 'Estimulante', icon: 'Zap', color: 'var(--c-bad)' },
          { id: 'per', label: 'Perturbadora', icon: 'Eye', color: 'var(--area-art)' },
        ], items: [
          { id: 'e1', text: 'Alcohol', bucket: 'dep' },
          { id: 'e2', text: 'Nicotina del tabaco', bucket: 'est' },
          { id: 'e3', text: 'Pegamentos y solventes inhalados', bucket: 'dep', feedback: 'Los inhalantes son depresores y dañan las neuronas.' },
          { id: 'e4', text: 'Cocaína', bucket: 'est' },
          { id: 'e5', text: 'Marihuana', bucket: 'per' },
          { id: 'e6', text: 'Cafeína', bucket: 'est' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.1.1'], ambito: 'conocer', title: 'Ejemplo: cómo se forma una dependencia',
          prompt: 'Sigue paso a paso el caso imaginario de una persona que empieza a fumar.' },
        { icon: 'Link', problem: 'Supongamos que un joven prueba un cigarro "solo una vez" en una fiesta. ¿Cómo puede terminar dependiendo de la nicotina?',
          steps: [
            { text: 'La nicotina llega al cerebro en segundos y produce una sensación breve de alerta.', why: 'Es un estimulante.' },
            { text: 'El joven vuelve a fumar en otras ocasiones. Su cerebro **se acostumbra**: necesita más cigarros para sentir lo mismo (**tolerancia**).' },
            { text: 'Si pasa un tiempo sin fumar, se siente ansioso e irritable (**abstinencia**), y fuma para quitarse ese malestar.' },
            { text: 'Ahora fuma aunque sabe que le hace daño: tiene **dependencia**.', why: 'Por eso es mucho más fácil no empezar que dejarlo.' },
          ],
          answer: 'Primer consumo → uso repetido → **tolerancia** → **abstinencia** al dejarlo → **dependencia**.',
          tip: 'Decir "no" desde el principio es la forma más segura de protegerse.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.1.1'], ambito: 'conocer', title: 'Drogas y contagio de enfermedades',
          prompt: 'Las drogas también se relacionan con **enfermedades que se contagian**. Recuerda lo que aprendiste sobre el VIH. Toca las tarjetas.' },
        { icon: 'HeartPulse', body: 'El daño no es solo para el cerebro: el consumo de drogas abre la puerta a otras enfermedades.', reveal: [
          { icon: 'Syringe', front: 'Jeringas compartidas', back: 'Algunas drogas se inyectan. Compartir jeringas pasa sangre de una persona a otra y transmite **VIH** y **hepatitis B y C**.' },
          { icon: 'AlertTriangle', front: 'Decisiones de riesgo', back: 'Bajo el efecto de las drogas se piensa con menos claridad: aumentan los **accidentes**, la violencia y las conductas que exponen a infecciones.' },
          { icon: 'Wind', front: 'Defensas y órganos dañados', back: 'El **tabaco** daña los pulmones y facilita infecciones respiratorias; el **alcohol** daña el hígado y el corazón.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:4.1.1', 'cnt:3.5.1'], ambito: 'conocer',
          prompt: '¿Por qué el consumo de drogas inyectadas se relaciona con el **VIH** y la **hepatitis**?',
          explain: 'Al compartir jeringas, queda sangre de una persona que pasa a otra. El VIH y la hepatitis B y C se transmiten por sangre.' },
        { options: [
          { id: 'a', text: 'Porque al compartir jeringas pasa sangre de una persona a otra', icon: 'Syringe' },
          { id: 'b', text: 'Porque las drogas son virus', icon: 'Bug', feedback: 'Las drogas son sustancias, no microbios. El riesgo está en la sangre de las jeringas compartidas.' },
          { id: 'c', text: 'Porque cualquier inyección, aun con jeringa nueva, transmite el VIH', icon: 'X', feedback: 'Una jeringa nueva y estéril, usada por personal de salud, no transmite el VIH.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:4.1.1'], ambito: 'hacer',
          prompt: 'Algunos medicamentos también son drogas, y **todos** los medicamentos pueden hacer daño si se usan mal. ¿Es un **uso correcto** o un **mal uso**?',
          explain: 'Los medicamentos se usan solo con indicación del personal de salud, en la dosis y el tiempo indicados, y para la persona a quien se recetaron.' },
        { buckets: [
          { id: 'ok', label: 'Uso correcto', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          { id: 'mal', label: 'Mal uso', icon: 'AlertTriangle', color: 'var(--c-bad)' },
        ], items: [
          { id: 'm1', text: 'Tomar el jarabe que recetó el médico, en la dosis indicada', bucket: 'ok' },
          { id: 'm2', text: 'Tomar las pastillas de un vecino "porque le funcionaron"', bucket: 'mal' },
          { id: 'm3', text: 'Tomar el doble de pastillas para curarse más rápido', bucket: 'mal' },
          { id: 'm4', text: 'Preguntar en el centro de salud antes de tomar algo', bucket: 'ok' },
          { id: 'm5', text: 'Tomar tranquilizantes sin receta para "relajarse"', bucket: 'mal' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.1.1'], prompt: 'La **nicotina** del tabaco es una droga…' },
        { options: [
          { id: 'a', text: 'Ilegal y depresora' },
          { id: 'b', text: 'Legal y estimulante' },
          { id: 'c', text: 'Ilegal y perturbadora' },
          { id: 'd', text: 'Que no afecta al cerebro' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Si una droga es legal, entonces no hace daño.', answer: false, why: 'El alcohol y el tabaco son legales y causan graves daños.' },
          { text: 'El alcohol es una droga depresora.', answer: true },
          { text: 'La tolerancia es necesitar cada vez más cantidad de una droga para sentir el mismo efecto.', answer: true },
          { text: 'Los inhalantes, como pegamentos y solventes, no son drogas.', answer: false, why: 'Son drogas depresoras muy dañinas para el cerebro.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Vida sana libre de drogas ───────────────────────── */
  lesson({
    id: 's05-cnt-3',
    title: 'Una vida sana libre de drogas',
    icon: 'Trophy',
    minutes: 15,
    gancho: 'Un partido de fútbol con amigos, ensayar con la marimba de la escuela, bailar en la feria del pueblo: ¿cómo pueden estas actividades protegerte de las drogas?',
    objetivos: ['Identificar factores de riesgo y de protección frente al consumo de drogas; explicar cómo el deporte, el juego, la convivencia y la recreación favorecen una vida sana; practicar formas asertivas de decir que no y comunicar un mensaje de prevención'],
    resumen: [
      'Los factores de protección (familia que escucha, amistades sanas, deporte, metas, buena autoestima) reducen el riesgo de consumir drogas; los factores de riesgo (presión de grupo, tiempo libre sin actividades, falta de información) lo aumentan.',
      'El deporte y el juego liberan en el cerebro sustancias naturales de bienestar, reducen el estrés, fortalecen la autoestima y crean amistades sanas.',
      'Decir que no de forma asertiva: un "no" claro, una razón corta, proponer otra actividad y retirarse si insisten. Siempre puedes pedir ayuda a una persona adulta de confianza.',
    ],
    media: {
      id: 's05-cnt-3-tiempo-libre', kind: 'video', title: 'Mi tiempo libre, mi mejor decisión', aspect: '16:9', duration: 45,
      alt: 'Video con escenas de jóvenes guatemaltecos jugando fútbol en una cancha de tierra, tocando marimba, bailando en una feria, leyendo en una biblioteca y sembrando en un huerto escolar.',
      brief: 'Video de 45 s con escenas cortas (actores o animación, sin marcas ni personas identificables sin permiso): partido de fútbol en cancha de tierra de una aldea; niñas y niños tocando marimba; baile folclórico en una feria; lectura en la biblioteca municipal; huerto escolar; grupo de scouts o club de ciencias. Texto en pantalla: "Deporte", "Música", "Amistad", "Aprender", "Naturaleza". Cierre: "Vivo sano, vivo libre". Música alegre de marimba, narración en español con subtítulos. No mostrar drogas ni consumo.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:4.2.1'], ambito: 'conocer',
          prompt: 'Compara factores de riesgo y de protección en decisiones cotidianas.' },
        { icon: 'HeartHandshake', body: 'Un factor de riesgo aumenta la posibilidad de daño; uno de protección ayuda a reducirla. Redes de apoyo, información confiable y actividades saludables fortalecen decisiones libres de drogas.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.2.1'], ambito: 'ser',
          prompt: '¿Por qué crees que algunos jóvenes prueban drogas? Elige **todas** las razones que te parezcan reales.',
          explain: 'La curiosidad, la presión del grupo y los problemas emocionales son razones frecuentes. Las drogas **no** mejoran el rendimiento: lo empeoran. Hoy verás qué **protege** a los jóvenes.' },
        { multiple: true, options: [
          { id: 'a', text: 'Por curiosidad', icon: 'HelpCircle' },
          { id: 'b', text: 'Por presión de los amigos, para "encajar"', icon: 'Users' },
          { id: 'c', text: 'Porque se sienten tristes o solos', icon: 'Frown' },
          { id: 'd', text: 'Porque las drogas ayudan a jugar mejor', icon: 'Trophy', feedback: 'Es un mito: las drogas empeoran la coordinación, la respiración y la concentración.' },
        ], correct: ['a', 'b', 'c'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.2.1'], ambito: 'ser', title: 'Riesgo y protección',
          prompt: 'Hay situaciones que **aumentan** el riesgo de consumir drogas y otras que **protegen**. Toca las tarjetas.' },
        { icon: 'Shield', body: 'Nadie está condenado ni totalmente a salvo: lo que haces cada día **suma protección**.', reveal: [
          { icon: 'AlertTriangle', front: 'Factores de riesgo', back: '**Presión de grupo**, mucho **tiempo libre sin actividades**, falta de información, problemas sin hablar, tener drogas al alcance.' },
          { icon: 'ShieldCheck', front: 'Factores de protección', back: '**Familia que escucha**, **amistades sanas**, **deporte**, **metas** y un proyecto de vida, buena **autoestima** y saber **decir que no**.' },
          { icon: 'MessageCircle', front: 'Hablar ayuda', back: 'Contar lo que te preocupa a una **persona adulta de confianza** es un gran factor de protección.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.2.1'], ambito: 'ser',
          prompt: 'Clasifica cada situación: ¿es un factor de **riesgo** o de **protección**?',
          hint: 'Pregúntate: ¿esto acerca o aleja a una persona de las drogas?',
          explain: 'El deporte, la familia que escucha y las metas protegen. La presión de grupo y el tiempo sin actividades aumentan el riesgo.' },
        { buckets: [
          { id: 'rie', label: 'Factor de riesgo', icon: 'AlertTriangle', color: 'var(--c-bad)' },
          { id: 'pro', label: 'Factor de protección', icon: 'ShieldCheck', color: 'var(--c-ok)' },
        ], items: [
          { id: 'f1', text: 'Entrenar en el equipo de básquetbol', bucket: 'pro' },
          { id: 'f2', text: 'Amigos que se burlan si no pruebas algo', bucket: 'rie' },
          { id: 'f3', text: 'Una familia que conversa en la cena', bucket: 'pro' },
          { id: 'f4', text: 'Pasar las tardes solo, sin nada que hacer', bucket: 'rie' },
          { id: 'f5', text: 'Tener una meta y hablar de los problemas con una persona adulta de confianza', bucket: 'pro' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt', 'ef'], cnb: ['cnt:4.2.1'], ambito: 'ser', title: 'Por qué el deporte y el juego protegen',
          prompt: 'Mira el video de la lección. El deporte, el juego, la convivencia y la recreación hacen más que divertirte. Toca las tarjetas.' },
        { icon: 'Trophy', body: 'Estas actividades cuidan tu **cuerpo**, tu **mente** y tus **relaciones**.', reveal: [
          { icon: 'Smile', front: 'Bienestar natural', back: 'Al hacer ejercicio, el cerebro libera **sustancias naturales de bienestar** (como las endorfinas): te sientes bien **sin necesidad de drogas**.' },
          { icon: 'Heart', front: 'Menos estrés', back: 'Correr, bailar o tocar música ayuda a **descargar** la tensión y la tristeza.' },
          { icon: 'Users', front: 'Amistades sanas', back: 'En un equipo, un grupo de danza o un club conoces personas con **metas parecidas** a las tuyas.' },
          { icon: 'Target', front: 'Metas y autoestima', back: 'Entrenar y mejorar te enseña que **puedes lograr cosas** con esfuerzo. Eso fortalece tu autoestima.' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.2.1'], ambito: 'ser',
          prompt: 'Lee lo que le pasó a cada estudiante y únelo con el **beneficio** que muestra.',
          hint: 'Revisa las tarjetas: bienestar natural, menos estrés, amistades sanas, metas y autoestima.',
          explain: 'Ana muestra el bienestar natural del ejercicio; Luis, cómo bailar descarga la tensión; Carmen, las amistades sanas de un equipo; Pedro, cómo una meta lograda con esfuerzo fortalece la autoestima.' },
        { leftTitle: 'Lo que pasó', rightTitle: 'Beneficio', pairs: [
          { id: 'cor', left: 'Después de correr 20 minutos, Ana se siente alegre sin haber tomado nada', leftIcon: 'Footprints', right: 'Bienestar natural (endorfinas)' },
          { id: 'bai', left: 'Luis tuvo un día difícil; baila en la feria y se le pasa el enojo', leftIcon: 'PartyPopper', right: 'Menos estrés' },
          { id: 'fut', left: 'En el equipo de fútbol, Carmen conoció amigas que también quieren seguir estudiando', leftIcon: 'Trophy', right: 'Amistades sanas' },
          { id: 'mar', left: 'Tras meses de ensayo, Pedro tocó su primera pieza completa en la marimba', leftIcon: 'Music', right: 'Metas y autoestima' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt', 'l1'], cnb: ['cnt:4.2.1'], ambito: 'convivir', title: 'Ejemplo: decir que no con asertividad',
          prompt: 'Ser **asertivo** es decir lo que piensas con claridad y respeto, sin agredir ni dejarte presionar. Mira cómo lo hace Rosa.',
          media: { id: 's05-cnt-3-asertiva', kind: 'animation', title: 'Rosa dice que no', aspect: '16:9', duration: 40,
            alt: 'Animación en un cumpleaños: un muchacho mayor insiste en ofrecer algo a Rosa; ella responde con calma, repite su respuesta, propone ir a bailar con sus primas y se aleja sonriendo.',
            brief: 'Animación 2D de 40 s, estilo amable, en un patio decorado para un cumpleaños en una aldea. No mostrar el cigarro encendido ni humo: el muchacho solo extiende la mano con un objeto pequeño difuminado. Burbujas de diálogo: "Dale, solo uno" / Rosa: "No, gracias. No fumo, cuido mis pulmones para el fútbol" / "No seas aburrida" / Rosa: "No, gracias" / Rosa: "Voy a bailar con mis primas". Íconos que aparecen en cada paso: "1. No claro", "2. Razón corta", "3. Repetir", "4. Otra actividad o retirarse". Voces en español con subtítulos.' } },
        { icon: 'Hand', problem: 'En un cumpleaños, un muchacho mayor le ofrece a Rosa un cigarro: "Dale, solo uno, no seas aburrida". ¿Cómo responde Rosa?',
          steps: [
            { text: 'Dice un **"no" claro**, mirándolo a los ojos: "No, gracias".', why: 'Un "no sé" o un "tal vez" invita a insistir.' },
            { text: 'Da una **razón corta**, sin pedir disculpas: "No fumo, cuido mis pulmones para el fútbol".' },
            { text: 'Si insiste, **repite** el mismo mensaje con calma (técnica del "disco rayado").' },
            { text: '**Propone otra actividad** o **se retira**: "Voy a bailar con mis primas". Si alguien la presiona mucho, busca a una **persona adulta de confianza**.', why: 'Alejarse de la presión no es de cobardes: es inteligente.' },
          ],
          answer: '"No, gracias" + una razón corta + repetir si insiste + cambiar de actividad o retirarse.',
          tip: 'Quien de verdad es tu amigo respeta tu decisión.' },
      ),
      S.order(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.2.1'], ambito: 'convivir',
          prompt: 'Ordena los pasos para decir que no de forma asertiva.',
          hint: 'Empieza por el "no" claro y termina alejándote si es necesario.',
          explain: 'No claro → razón corta → repetir si insiste → proponer otra actividad o retirarse.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'n1', text: 'Decir un "no" claro, mirando a los ojos', icon: 'Hand' },
          { id: 'n2', text: 'Dar una razón corta', icon: 'MessageCircle' },
          { id: 'n3', text: 'Repetir el mensaje con calma si insisten', icon: 'RefreshCw' },
          { id: 'n4', text: 'Proponer otra actividad o retirarse', icon: 'Footprints' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt', 'fc'], cnb: ['cnt:4.2.1'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
        { multiple: true, options: [
          { id: 'a', icon: 'Users', text: 'Ir para no quedar mal con el grupo', feedback: 'Ceder a la presión aumenta el riesgo.' },
          { id: 'b', icon: 'Hand', text: 'Decir "no, gracias" y proponer otra celebración' },
          { id: 'c', icon: 'MessageCircle', text: 'Avisar a una persona adulta de confianza' },
        ], correct: ['b', 'c'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.2.1'], prompt: '¿Cuál de estas prácticas favorece una vida sana libre de drogas?' },
        { options: [
          { id: 'a', text: 'Pasar el tiempo libre solo y sin actividades' },
          { id: 'b', text: 'Participar en un equipo deportivo o un grupo de música' },
          { id: 'c', text: 'Hacer lo que el grupo diga para encajar' },
          { id: 'd', text: 'No hablar nunca de los problemas' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Al hacer ejercicio, el cerebro libera sustancias naturales que dan bienestar.', answer: true },
          { text: 'Decir "no, gracias" y retirarse es una forma asertiva de rechazar una droga.', answer: true },
          { text: 'La presión de grupo es un factor de protección.', answer: false, why: 'La presión de grupo es un factor de riesgo.' },
          { text: 'Un verdadero amigo te obliga a probar cosas para demostrar valentía.', answer: false, why: 'Un verdadero amigo respeta tus decisiones.' },
        ] },
      ),
      cierre({ areas: ['cnt'], cnb: [] },
        ['Explico la diferencia entre VIH y SIDA sin discriminar', 'Diferencio los tipos de droga por su efecto y su situación legal', 'Sé decir que no de forma asertiva'],
        ['Usaré mi tiempo libre en actividades sanas', 'Hablaré con una persona adulta de confianza si algo me preocupa', 'Corregiré con respeto los mitos sobre el VIH']),
    ],
  }),
];
