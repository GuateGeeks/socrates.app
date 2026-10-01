/**
 * Ciencias Sociales · Unidad 1 · Semana 4 — Trabajo, equidad y la mirada de las Ciencias Sociales.
 * Progresión: el trabajo en Guatemala y sus condiciones (formal e informal) → los roles de la mujer a
 * través del tiempo → qué son las Ciencias Sociales y por qué vale la pena investigar la sociedad.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. El trabajo en Guatemala ───────────────────────── */
  lesson({
    id: 's04-ccss-1',
    title: 'El trabajo en Guatemala: formal e informal',
    icon: 'Briefcase',
    minutes: 15,
    gancho: 'La señora que vende tostadas frente a la escuela y la enfermera del centro de salud trabajan muchas horas. ¿Tienen las mismas condiciones de trabajo?',
    objetivos: [
      "Distinguir el trabajo formal e informal y sus efectos en la calidad de vida",
    ],
    resumen: [
      'En Guatemala se trabaja en la agricultura, el comercio, la industria, la construcción, los servicios y el trabajo en casa. Las condiciones cambian mucho de un trabajo a otro.',
      'Trabajo formal: tiene contrato, salario al menos mínimo, seguro social (IGSS), vacaciones, aguinaldo y Bono 14, y una jornada limitada por la ley.',
      'Economía informal: negocios o empleos sin registro, sin contrato ni seguro social, con ingresos que cambian día a día. En Guatemala la mayoría de las personas trabaja en la economía informal.',
      'El trabajo informal es honrado y necesario, pero deja a las familias sin protección ante una enfermedad, un accidente o la vejez. Las leyes protegen a la niñez: su tarea principal es estudiar y jugar.',
    ],
    media: {
      id: 's04-ccss-1-oficios', kind: 'image', title: 'Un día de trabajo en mi municipio', aspect: '16:9',
      alt: 'Escena ilustrada de un municipio: una vendedora de tostadas, un albañil, una enfermera, un agricultor, un maestro, un piloto de bus y una trabajadora de maquila.',
      brief: 'Ilustración panorámica de la calle principal de un municipio de Guatemala por la mañana. Personajes diversos en su trabajo: una vendedora de tostadas con su canasta frente a una escuela, un albañil en un andamio con casco, una enfermera en la puerta del centro de salud, un agricultor con azadón en una milpa al fondo, un maestro en el aula, un piloto de bus y una trabajadora de maquila con carné. Hombres y mujeres de pueblos maya, garífuna, xinka y ladino, sin estereotipos. Sin logos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:4.1.1'], title: 'Idea central', prompt: 'Cuidar a las personas también exige comprender cómo las condiciones de trabajo afectan la vida familiar.' },
        { icon: 'BookOpenCheck', body: "En Guatemala se trabaja en la agricultura, el comercio, la industria, la construcción, los servicios y el trabajo en casa. Las condiciones cambian mucho de un trabajo a otro." },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.1.1'], ambito: 'conocer',
          prompt: 'Piensa en las personas que trabajan en tu comunidad. Según lo que ya sabes, ¿quiénes crees que tienen **seguro médico del trabajo** y quiénes no?',
          explain: 'Muchas personas trabajan duro, pero no todas tienen las mismas protecciones. Hoy aprenderás a qué se debe esa diferencia.' },
        { buckets: [
          { id: 'si', label: 'Probablemente sí', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          { id: 'no', label: 'Probablemente no', icon: 'ShieldOff', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'o1', text: 'Maestra de una escuela pública', bucket: 'si' },
          { id: 'o2', text: 'Vendedor de helados en el parque', bucket: 'no' },
          { id: 'o3', text: 'Empleado de un banco', bucket: 'si' },
          { id: 'o4', text: 'Señora que lava ropa ajena por día', bucket: 'no' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.1.1'], ambito: 'conocer', title: '¿Dónde y cómo se trabaja en Guatemala?',
          prompt: 'El **trabajo** es la actividad con la que las personas producen bienes o servicios y obtienen ingresos para vivir. Las **condiciones de trabajo** son todo lo que rodea ese trabajo: horario, pago, seguridad, protección. Toca cada tarjeta.' },
        { icon: 'Briefcase', body: 'Las condiciones de trabajo influyen directamente en la **calidad de vida**: alimentación, salud, vivienda y educación de la familia.', reveal: [
          { icon: 'Wheat', front: 'En el campo', back: 'Agricultura propia (milpa, hortalizas) y trabajo en fincas de café, caña o banano. Muchas veces es **temporal**: solo en época de cosecha.' },
          { icon: 'Store', front: 'En el comercio', back: 'Tiendas, mercados, ventas en la calle, supermercados. Hay desde grandes empresas hasta ventas familiares.' },
          { icon: 'Factory', front: 'En la industria y la construcción', back: 'Maquilas, fábricas, ingenios, albañilería. Suelen exigir fuerza y cuidado con la **seguridad**.' },
          { icon: 'Stethoscope', front: 'En los servicios', back: 'Salud, educación, transporte, turismo, bancos, centros de llamadas, trabajo en casas particulares.' },
          { icon: 'Clock', front: 'Condiciones que protege la ley', back: 'La Constitución y el **Código de Trabajo** establecen, entre otras cosas, una jornada diurna de **no más de 8 horas diarias**, un **salario mínimo**, descanso semanal y vacaciones.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.1.5', 'ccss:4.1.1'], ambito: 'conocer', title: 'Economía formal y economía informal',
          prompt: 'Los trabajos se agrupan en dos grandes tipos según si están **registrados y protegidos por la ley** o no. Toca cada tarjeta.',
          media: { id: 's04-ccss-1-comparar', kind: 'diagram', title: 'Formal e informal, lado a lado', aspect: '4:3',
            alt: 'Tabla ilustrada de dos columnas que compara el trabajo formal y el informal: contrato, IGSS, salario, prestaciones e ingresos.',
            brief: 'Diagrama tipo tabla con dos columnas y encabezados ilustrados: "Formal" (una trabajadora con carné y contrato) e "Informal" (un vendedor con su carreta de frutas). Filas con íconos: Contrato (sí / no), Seguro social IGSS (sí / no), Salario mínimo (garantizado / no garantizado), Aguinaldo y Bono 14 (sí / no), Ingresos (fijos / cambian cada día), Registro y pago de impuestos (sí / generalmente no). Colores verde y naranja suaves. Texto grande y claro.' } },
        { icon: 'Scale', body: 'Según encuestas oficiales, **la mayoría** de las personas que trabajan en Guatemala (cerca de 7 de cada 10) lo hace en la **economía informal**.', reveal: [
          { icon: 'FileText', front: 'Trabajo formal', back: 'Tiene **contrato**, está afiliado al **IGSS** (Instituto Guatemalteco de Seguridad Social), recibe al menos el **salario mínimo**, **aguinaldo** (a fin de año), **Bono 14** (en julio) y **vacaciones pagadas**.' },
          { icon: 'ShoppingBasket', front: 'Rasgos de la economía informal', back: '**Sin contrato** ni registro, **sin seguro social**, sin prestaciones, **ingresos variables** (un día se gana y otro no), muchas horas de trabajo y poca protección ante enfermedades o accidentes.' },
          { icon: 'HeartHandshake', front: '¿Es malo trabajar en la informalidad?', back: '**No**: es trabajo honrado que sostiene a millones de familias. El problema es la **falta de protección**. Por eso se buscan formas de que más personas tengan seguro y derechos.' },
          { icon: 'AlertTriangle', front: 'Error frecuente', back: 'Pensar que "informal" es lo mismo que "ilegal". Vender tortillas sin registro es informal, pero no es un delito como robar.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.1.5', 'ccss:4.1.1'], prompt: 'Clasifica cada situación de trabajo.',
          hint: 'Busca las pistas: ¿tiene contrato, IGSS, salario fijo y prestaciones? Entonces es formal.',
          explain: 'La clave de la informalidad es la falta de contrato, de registro y de protección social, no el tipo de oficio.' },
        { buckets: [
          { id: 'for', label: 'Formal', icon: 'FileText', color: 'var(--c-ok)' },
          { id: 'inf', label: 'Informal', icon: 'ShoppingBasket', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 's1', text: 'Carlos es cajero en un supermercado, tiene contrato y carné del IGSS', bucket: 'for' },
          { id: 's2', text: 'Doña Irma vende atol en la esquina; lo que gana cambia cada día', bucket: 'inf' },
          { id: 's3', text: 'Ana es enfermera del hospital nacional y recibe aguinaldo', bucket: 'for' },
          { id: 's4', text: 'Pedro trabaja de albañil por día, sin contrato ni seguro', bucket: 'inf', feedback: 'Si se lastima en la obra, no tiene seguro que lo cubra: es informal.' },
          { id: 's5', text: 'Marta cose ropa en su casa y la vende a sus vecinas sin registro', bucket: 'inf' },
          { id: 's6', text: 'Luis es mecánico en un taller registrado que le paga Bono 14', bucket: 'for' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss', 'mat'], cnb: ['ccss:4.1.5'], ambito: 'hacer', title: 'Ejemplo resuelto: ingresos que cambian',
          prompt: 'Uno de los rasgos de la informalidad es que el ingreso **no es fijo**. Mira este caso con datos hipotéticos.' },
        { icon: 'Wallet', problem: 'Supongamos que don Julio vende elotes. En una semana ganó: lunes Q60, martes Q40, miércoles Q0 (llovió y no salió), jueves Q80 y viernes Q70. Su vecina Rosa gana un salario fijo de Q300 por esa semana. ¿Quién ganó más y qué diferencia importante hay?',
          steps: [
            { text: 'Sumo lo de don Julio: 60 + 40 + 0 + 80 + 70 = **Q250**.' },
            { text: 'Comparo: Rosa ganó Q300, don Julio Q250. Rosa ganó **Q50 más**.' },
            { text: 'Pero la diferencia más importante es otra: el ingreso de don Julio **depende del clima, de su salud y de las ventas**; si se enferma, ese día gana Q0.', why: 'Sin seguro social ni salario fijo, cualquier imprevisto afecta directamente la comida de la familia.' },
          ],
          answer: 'Rosa ganó Q50 más, y además tiene un ingreso **seguro**; el de don Julio es **variable** y sin protección.',
          tip: 'Por eso ahorrar un poco en los días buenos es muy importante en la economía informal.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:4.1.1'], ambito: 'conocer',
          prompt: 'Doña Irma vende atol desde hace 20 años. Se quebró una pierna y no puede trabajar por dos meses. ¿Qué problema de la economía informal enfrenta?',
          explain: 'Sin seguro social ni prestaciones, cuando una persona informal se enferma deja de recibir ingresos y debe pagar sus propias medicinas. Esto afecta la calidad de vida de toda la familia.' },
        { options: [
          { id: 'a', text: 'No tiene seguro social ni ingresos mientras no trabaja', icon: 'ShieldOff' },
          { id: 'b', text: 'El IGSS le pagará su salario completo', icon: 'ShieldCheck', feedback: 'Solo quienes están afiliados al IGSS reciben esa protección. Doña Irma no lo está.' },
          { id: 'c', text: 'Ninguno: podrá tomar vacaciones pagadas', icon: 'Sun', feedback: 'Las vacaciones pagadas son una prestación del trabajo formal.' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:4.1.1', 'ccss:4.1.5'], prompt: 'Analiza cada afirmación sobre el trabajo en Guatemala.',
          explain: 'Las condiciones de trabajo son parte de la calidad de vida: por eso las leyes las protegen.' },
        { statements: [
          { text: 'La jornada ordinaria diurna no debe pasar de 8 horas diarias.', answer: true },
          { text: 'En Guatemala la mayoría de las personas trabaja en la economía formal.', answer: false, why: 'La mayoría trabaja en la economía informal.' },
          { text: 'Vender comida sin registro es informal, pero no es un delito.', answer: true },
          { text: 'Es correcto que un niño deje la escuela para trabajar todo el día.', answer: false, why: 'La niñez tiene derecho a estudiar; el trabajo que le impide estudiar o la pone en peligro está prohibido.' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.1.5'], prompt: '¿Qué rasgo es propio de la **economía informal**?' },
        { options: [
          { id: 'a', text: 'Trabajar sin contrato ni seguro social, con ingresos que cambian' },
          { id: 'b', text: 'Recibir aguinaldo y Bono 14 cada año' },
          { id: 'c', text: 'Estar afiliado al IGSS' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.1.1'], prompt: '¿Cuál es un **derecho** del trabajo formal en Guatemala?' },
        { options: [
          { id: 'a', text: 'Vacaciones pagadas y seguro social' },
          { id: 'b', text: 'Trabajar 14 horas diarias sin descanso' },
          { id: 'c', text: 'Ganar menos del salario mínimo' },
        ], correct: ['a'] },
      ),
    ],
  }),

  /* ───────────────────────── 2. La mujer a través del tiempo ───────────────────────── */
  lesson({
    id: 's04-ccss-2',
    title: 'Los roles de la mujer a través del tiempo',
    icon: 'Users',
    minutes: 15,
    gancho: 'Tu bisabuela quizá no pudo votar ni estudiar. Hoy hay mujeres médicas, alcaldesas, científicas y presidentas. ¿Cómo cambió eso?',
    objetivos: [
      "Comparar los roles de las mujeres a través del tiempo para reconocer avances y desafíos de equidad",
    ],
    resumen: [
      'Las mujeres siempre han trabajado y aportado: en la familia, la producción, el comercio, el arte y el gobierno, aunque muchas veces su trabajo no se reconoció.',
      'En culturas antiguas hubo mujeres gobernantes, como Hatshepsut en Egipto y la Señora Seis Cielo en la ciudad maya de Naranjo (Petén). Pero por siglos, en muchas sociedades, las mujeres no pudieron estudiar, votar ni tener propiedades.',
      'En el siglo XX las mujeres conquistaron el derecho al voto en muchos países; en Guatemala, las mujeres que sabían leer y escribir pudieron votar desde 1945, y el voto se amplió después a todas.',
      'Hoy las mujeres participan en todos los ámbitos, pero siguen desafíos: salarios más bajos por el mismo trabajo, más carga de tareas del hogar y menos cargos de decisión. La equidad se construye compartiendo tareas y oportunidades.',
    ],
    media: {
      id: 's04-ccss-2-linea', kind: 'diagram', title: 'Mujeres en la historia', aspect: '16:9',
      alt: 'Línea del tiempo ilustrada con figuras genéricas de mujeres: una gobernante egipcia, una gobernante maya, una comerciante en un mercado colonial, mujeres votando y una científica actual.',
      brief: 'Línea del tiempo horizontal con cinco viñetas de figuras femeninas ilustradas y genéricas (no retratos): (1) Antiguo Egipto, hacia 1470 a. C.: una gobernante con tocado de faraón, "Hatshepsut gobierna Egipto"; (2) Período Clásico maya, 682 d. C.: una gobernante maya con tocado, "La Señora Seis Cielo gobierna Naranjo, Petén"; (3) época colonial: mujeres que venden en un mercado, "Trabajan, pero no pueden votar"; (4) siglo XX: mujeres en fila con papeletas, "1945: votan en Guatemala las mujeres alfabetas"; (5) hoy: una científica, una alcaldesa y un padre que cocina con su hija, "Roles compartidos". Colores cálidos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:4.2.2'], title: 'Idea central', prompt: 'Participar con equidad requiere reconocer los aportes de las mujeres y cuestionar roles impuestos.' },
        { icon: 'BookOpenCheck', body: "Las mujeres siempre han trabajado y aportado: en la familia, la producción, el comercio, el arte y el gobierno, aunque muchas veces su trabajo no se reconoció." },
      ),
      S.choice(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.2.2'], ambito: 'conocer',
          prompt: 'Una tejedora de Santiago Atitlán se levanta a las 5, prepara el desayuno, lleva a sus hijos a la escuela, teje por horas y vende sus tejidos en el mercado. ¿Trabaja?',
          explain: '¡Sí, y mucho! Cuida la familia (trabajo **familiar**, aunque no se pague) y produce y vende (trabajo **económico**). Durante siglos el trabajo de las mujeres no se reconoció como tal.' },
        { options: [
          { id: 'a', text: 'Sí: hace trabajo del hogar y trabajo que genera ingresos', icon: 'HeartHandshake' },
          { id: 'b', text: 'Solo trabaja cuando vende en el mercado', icon: 'Store', feedback: 'Cuidar la casa y a los hijos también es trabajo, aunque no se pague con dinero.' },
          { id: 'c', text: 'No, porque no tiene jefe', icon: 'X', feedback: 'Trabajar no depende de tener jefe: ella produce tejidos y sostiene a su familia.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.2.2'], ambito: 'conocer', title: 'Tres ámbitos para mirar',
          prompt: 'Para comparar los roles de la mujer en distintas culturas y épocas, los historiadores miran tres **ámbitos**. Toca cada tarjeta.' },
        { icon: 'Layers', body: 'Un **rol** es el papel o las tareas que la sociedad espera de una persona. Los roles **cambian** con el tiempo y entre culturas: no son naturales ni fijos.', reveal: [
          { icon: 'Home', front: 'Ámbito familiar', back: 'Quién cuida a los hijos, cocina, decide en casa, hereda la tierra.' },
          { icon: 'Coins', front: 'Ámbito económico', back: 'Quién trabaja, comercia, tiene propiedades, recibe un salario y cuánto.' },
          { icon: 'Vote', front: 'Ámbito político', back: 'Quién vota, gobierna, participa en las decisiones de la comunidad y del país.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['ccss', 'l1'], cnb: ['ccss:4.2.2'], ambito: 'conocer', prompt: 'Lee este recorrido histórico y responde.' },
        { genre: 'Texto histórico', heading: 'Mujeres que hicieron historia', passage:
          'En el **antiguo Egipto**, las mujeres podían tener propiedades y hacer negocios. Una de ellas, **Hatshepsut**, llegó a gobernar como faraón hace unos 3,500 años.\n\nEntre los **mayas**, las mujeres tejían, hacían cerámica, preparaban el maíz y comerciaban. Algunas fueron gobernantes: la **Señora Seis Cielo** gobernó la ciudad de **Naranjo**, en Petén, desde el año 682. Sus hazañas quedaron talladas en estelas.\n\nDurante siglos, en muchas sociedades de Europa y América, incluida la época colonial en Guatemala, las mujeres trabajaban en el hogar, el campo y los mercados, pero **no podían votar** ni estudiar en la universidad, y muchas no podían decidir sobre sus bienes.\n\nEn el siglo XX, tras muchas luchas, las mujeres conquistaron derechos. **Nueva Zelanda** fue el primer país en darles el voto nacional, en 1893. En **Guatemala**, las mujeres que sabían leer y escribir votaron desde **1945**, y más tarde el voto se amplió a todas. En 1992, la guatemalteca maya k’iche’ **Rigoberta Menchú** recibió el Premio Nobel de la Paz por su defensa de los derechos de los pueblos indígenas.',
          questions: [
            { q: '¿Qué muestra el ejemplo de la Señora Seis Cielo?', options: [
              { id: 'a', text: 'Que entre los mayas antiguos hubo mujeres gobernantes' },
              { id: 'b', text: 'Que las mujeres mayas no podían trabajar' },
              { id: 'c', text: 'Que Naranjo estaba en Egipto' },
            ], correct: 'a' },
            { q: 'Según el texto, ¿en qué ámbito no podían participar muchas mujeres durante la época colonial?', options: [
              { id: 'a', text: 'En el político: no podían votar' },
              { id: 'b', text: 'En el económico: no trabajaban en los mercados' },
              { id: 'c', text: 'En el familiar: no cuidaban a sus hijos' },
            ], correct: 'a' },
            { q: '¿Qué conclusión se puede sacar del texto?', options: [
              { id: 'a', text: 'Los roles de la mujer han cambiado según la época y la cultura, y sus derechos se conquistaron con esfuerzo' },
              { id: 'b', text: 'Las mujeres siempre tuvieron los mismos derechos que los hombres' },
              { id: 'c', text: 'Las mujeres nunca han participado en la historia' },
            ], correct: 'a', why: 'El texto muestra cambios a través del tiempo y mujeres que participaron en todos los ámbitos.' },
          ] },
      ),
      S.order(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.2.2'], ambito: 'conocer',
          prompt: 'Ordena estos hechos del **más antiguo al más reciente**.',
          hint: 'Fíjate en las fechas del texto: "hace unos 3,500 años" es antes de Cristo; luego vienen los años 682, 1893, 1945 y 1992.',
          explain: 'Las fechas a. C. (antes de Cristo) son más antiguas que cualquier fecha d. C.' },
        { items: [
          { id: 'h1', text: 'Hatshepsut gobierna Egipto (hace unos 3,500 años)' },
          { id: 'h2', text: 'La Señora Seis Cielo gobierna Naranjo, Petén (682)' },
          { id: 'h3', text: 'Nueva Zelanda da el voto a las mujeres (1893)' },
          { id: 'h4', text: 'Votan en Guatemala las mujeres alfabetas (1945)' },
          { id: 'h5', text: 'Rigoberta Menchú recibe el Premio Nobel de la Paz (1992)' },
        ], labels: { start: 'Más antiguo', end: 'Más reciente' } },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:4.2.2'], ambito: 'convivir', title: 'Hoy: avances y desafíos',
          prompt: 'Hoy las mujeres son médicas, ingenieras, agricultoras, alcaldesas, diputadas y científicas. Pero la **equidad** (que todos tengan las mismas oportunidades) aún no se ha alcanzado. Toca cada tarjeta.' },
        { icon: 'Scale', body: 'La equidad no es "que las mujeres ganen a los hombres": es que **niñas y niños** tengan las mismas oportunidades y responsabilidades.', reveal: [
          { icon: 'TrendingUp', front: 'Avances', back: 'Derecho a votar y a ser electas, a estudiar en todos los niveles, a tener propiedades y a trabajar en cualquier profesión.' },
          { icon: 'Coins', front: 'Desafío económico', back: 'En muchos países, las mujeres **ganan menos** que los hombres por el mismo trabajo.' },
          { icon: 'Home', front: 'Desafío familiar', back: 'Muchas mujeres trabajan fuera de casa y además hacen **casi todo el trabajo del hogar**, que no se paga.' },
          { icon: 'Vote', front: 'Desafío político', back: 'Hay **pocas mujeres** en cargos de decisión, como alcaldías y congresos, comparado con los hombres.' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:4.2.2'], prompt: 'Clasifica cada situación: ¿en qué **ámbito** ocurre?',
          explain: 'Identificar el ámbito ayuda a pensar qué cambio hace falta: en la casa, en el trabajo o en las decisiones públicas.' },
        { buckets: [
          { id: 'fam', label: 'Familiar', icon: 'Home', color: 'var(--c-ok)' },
          { id: 'eco', label: 'Económico', icon: 'Coins', color: 'var(--c-maiz-strong)' },
          { id: 'pol', label: 'Político', icon: 'Vote', color: 'var(--area-ccss)' },
        ], items: [
          { id: 'r1', text: 'Una mujer es electa alcaldesa de su municipio', bucket: 'pol' },
          { id: 'r2', text: 'En una casa, los hermanos y hermanas lavan los trastos por turnos', bucket: 'fam' },
          { id: 'r3', text: 'Una cooperativa de tejedoras exporta sus productos', bucket: 'eco' },
          { id: 'r4', text: 'Las mujeres obtienen el derecho a votar', bucket: 'pol' },
          { id: 'r5', text: 'Una empresa paga igual a hombres y mujeres por el mismo puesto', bucket: 'eco' },
        ] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['ccss', 'fc'], cnb: ['ccss:4.2.2'], ambito: 'convivir', prompt: 'La equidad empieza en casa y en la escuela. ¿Qué harías tú?' },
        { scene: { icon: 'School', text: 'En la elección de la directiva del grado, un compañero dice: "La presidenta no puede ser una niña, eso es cosa de hombres". Sofía quería postularse.' },
          options: [
            { id: 'a', icon: 'Vote', text: 'Digo que cualquiera puede postularse y apoyo a Sofía si tiene buenas propuestas', consequence: 'La elección se decide por propuestas y no por ser niña o niño. Todos aprenden que el liderazgo no tiene género.', values: ['equidad', 'respeto', 'justicia'], constructive: true },
            { id: 'b', icon: 'MessageCircle', text: 'Propongo que todos los candidatos presenten sus ideas y votemos después de escucharlas', consequence: 'El grupo decide con información. Sofía tiene la misma oportunidad que los demás.', values: ['democracia', 'equidad'], constructive: true },
            { id: 'c', icon: 'EyeOff', text: 'No digo nada, así ha sido siempre', consequence: 'Sofía se retira y el grupo pierde una buena líder. "Así ha sido siempre" no es una razón: los roles cambian.', values: [], constructive: false },
          ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.2.2'], prompt: '¿Qué afirmación sobre los roles de la mujer es correcta?' },
        { options: [
          { id: 'a', text: 'Han cambiado a través del tiempo y entre culturas' },
          { id: 'b', text: 'Son iguales en todas las culturas y épocas' },
          { id: 'c', text: 'Las mujeres nunca han gobernado un pueblo' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:4.2.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En Guatemala, las mujeres que sabían leer y escribir pudieron votar desde 1945.', answer: true },
          { text: 'Que una mujer gane menos por el mismo trabajo es un avance de la equidad.', answer: false, why: 'Es uno de los desafíos pendientes.' },
          { text: 'Votar y ser electa pertenece al ámbito político.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Las Ciencias Sociales ───────────────────────── */
  lesson({
    id: 's04-ccss-3',
    title: 'Las Ciencias Sociales: lupas para entender la sociedad',
    icon: 'Search',
    minutes: 14,
    gancho: '¿Por qué en tu comunidad se habla el idioma que se habla? ¿Por qué el mercado se hace ese día? ¿Por qué muchos jóvenes migran? Para cada pregunta hay una ciencia que ayuda.',
    objetivos: [
      "Elegir Ciencias Sociales pertinentes para investigar preguntas de la comunidad",
    ],
    resumen: [
      'Las Ciencias Sociales estudian a las personas que viven en sociedad: cómo se organizan, cómo cambian y por qué.',
      'Historia (el pasado), geografía (el espacio), economía (producción y reparto de bienes), sociología (grupos y problemas sociales), antropología (culturas), arqueología (restos materiales del pasado), ciencia política (poder y gobierno), demografía (población).',
      'Juntas ayudan a comprender la realidad y a buscar soluciones: un problema como la migración se entiende mejor mirando desde varias ciencias.',
      'Investigar es hacerse preguntas y buscar respuestas con método. Tus inquietudes sobre tu comunidad y tu país también se pueden investigar.',
    ],
    media: {
      id: 's04-ccss-3-lupas', kind: 'animation', title: 'Muchas lupas, un mismo mercado', aspect: '16:9', duration: 45,
      alt: 'Animación de un mercado de pueblo observado con lupas de distintos colores; cada lupa muestra algo diferente: la historia del edificio, los precios, los idiomas, el mapa de dónde vienen los productos.',
      brief: 'Animación 2D de 45 s. Plano general de un mercado de pueblo en Guatemala. Aparecen lupas de colores, una por ciencia, que se posan sobre la escena: Historia (lupa café) muestra una foto antigua del mercado; Geografía (verde) muestra un mapa con flechas de dónde vienen los productos; Economía (amarilla) muestra precios y monedas; Antropología (morada) muestra tejidos, idiomas y comidas; Ciencia política (azul) muestra la municipalidad que organiza el mercado. Al final, todas las lupas se juntan: "Juntas entendemos mejor". Narración en español con subtítulos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ccss'], cnb: ['ccss:5.1.1'], title: 'Idea central', prompt: 'Las Ciencias Sociales ayudan a investigar cómo participa una comunidad y qué barreras enfrenta.' },
        { icon: 'BookOpenCheck', body: "Las Ciencias Sociales estudian a las personas que viven en sociedad: cómo se organizan, cómo cambian y por qué." },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:5.1.1'], ambito: 'conocer', title: 'La familia de las Ciencias Sociales',
          prompt: 'Cada ciencia social mira la sociedad con una **lupa** diferente. Toca cada tarjeta.' },
        { icon: 'Search', body: 'Todas estudian a las personas, pero cada una hace **preguntas distintas**.', reveal: [
          { icon: 'History', front: 'Historia', back: 'Estudia el **pasado** de las sociedades para entender el presente. Pregunta: ¿qué pasó y por qué?' },
          { icon: 'Map', front: 'Geografía', back: 'Estudia el **espacio**: dónde vive la gente, sus recursos, su clima y cómo transforma su territorio.' },
          { icon: 'Coins', front: 'Economía', back: 'Estudia cómo se **producen, intercambian y reparten** los bienes, los servicios y el dinero.' },
          { icon: 'Users', front: 'Sociología', back: 'Estudia los **grupos sociales** y sus problemas: familia, pobreza, migración, violencia, educación.' },
          { icon: 'Palette', front: 'Antropología', back: 'Estudia las **culturas**: idiomas, creencias, costumbres, formas de vida.' },
          { icon: 'Pickaxe', front: 'Arqueología', back: 'Estudia el pasado a través de **restos materiales**: vasijas, herramientas, edificios, como en Tikal o Kaminaljuyú.' },
          { icon: 'Vote', front: 'Ciencia política', back: 'Estudia el **poder**, el gobierno, las leyes y la participación ciudadana.' },
          { icon: 'BarChart3', front: 'Demografía', back: 'Estudia la **población** con números: nacimientos, edades, migraciones.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.2.1'], ambito: 'conocer', title: 'Una pregunta historica: ¿como cambio la forma de vida?',
          prompt: 'Historia y arqueologia comparan evidencias de sociedades cazadoras-recolectoras y agricolas.' },
        { icon: 'History', problem: 'Dos sitios conservan evidencias de formas de vida distintas.', steps: [
          { text: 'Sitio A: campamentos temporales, caza, pesca y recoleccion; muchas familias se desplazaban segun estaciones y recursos.' },
          { text: 'Sitio B: plantas y animales domesticados, aldeas permanentes, granos almacenados y oficios.' },
          { text: 'El cambio de sociedades cazadoras-recolectoras a agricolas fue gradual y distinto en cada region.' },
        ], answer: 'A presenta una forma de vida cazadora-recolectora; B, una forma de vida agricola.' },
      ),
      S.match(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:5.1.1'], prompt: 'Une cada pregunta con la ciencia social que mejor ayuda a responderla.',
          hint: 'Busca la palabra clave: pasado, lugar, dinero, cultura, gobierno.',
          explain: 'Las preguntas son la puerta de toda investigación: primero decidimos qué queremos saber y luego qué ciencia nos ayuda.' },
        { leftTitle: 'Pregunta', rightTitle: 'Ciencia social', pairs: [
          { id: 'q1', left: '¿Cómo era mi municipio hace cien años?', leftIcon: 'History', right: 'Historia' },
          { id: 'q2', left: '¿Por qué hay más casas cerca del río?', leftIcon: 'Map', right: 'Geografía' },
          { id: 'q3', left: '¿Por qué subió el precio del frijol?', leftIcon: 'Coins', right: 'Economía' },
          { id: 'q4', left: '¿Qué significan los diseños del güipil de mi pueblo?', leftIcon: 'Palette', right: 'Antropología' },
          { id: 'q5', left: '¿Cómo se elige a las autoridades del municipio?', leftIcon: 'Vote', right: 'Ciencia política' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:5.3.1'], ambito: 'hacer',
          prompt: 'Relaciona cada herramienta para recoger informacion con la evidencia que produce.',
          hint: 'Observacion registra lo visible; entrevista recoge relatos; encuesta compara respuestas comunes.',
          explain: 'Elegir la herramienta depende de la pregunta y requiere registrar la fuente con honestidad.' },
        { pairs: [
          { id: 'a', left: 'Guia de observacion', right: 'Registro sistematico de lugares, objetos o acciones' },
          { id: 'b', left: 'Entrevista con preguntas abiertas', right: 'Relatos y explicaciones de una persona' },
          { id: 'c', left: 'Encuesta con preguntas comunes', right: 'Respuestas comparables de varias personas' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:5.3.1', 'ccss:5.1.1', 'ccss:8.1.1'], ambito: 'hacer', title: 'Ejemplo: un problema, varias lupas',
          prompt: 'Los problemas reales son complejos. Las Ciencias Sociales ayudan a **comprenderlos** mejor cuando se usan juntas. Mira cómo se analiza uno.' },
        { icon: 'Search', problem: 'En la aldea de Karla, muchos jóvenes se van a trabajar a la ciudad o a otro país. ¿Cómo nos ayudan las Ciencias Sociales a comprenderlo?',
          steps: [
            { text: '**Demografía**: usa una encuesta comun para contar cuántos jóvenes se han ido y de qué edades.' },
            { text: '**Economía**: investiga si hay empleos en la aldea y cuánto pagan comparado con la ciudad.', why: 'La falta de trabajo suele ser una causa importante de la migración.' },
            { text: '**Geografía**: observa si hay caminos, sequías o tierras suficientes para cultivar.' },
            { text: '**Sociología y antropología**: usan entrevistas abiertas para preguntar cómo cambian las familias y las costumbres cuando alguien se va.' },
            { text: '**Historia**: busca desde cuándo ocurre y qué pasó antes en la región.' },
          ],
          answer: 'Con varias lupas entendemos las **causas** y los **efectos** del problema, y podemos proponer mejores soluciones (por ejemplo, proyectos de empleo local o capacitación).',
          tip: 'Comprender primero y opinar después: así trabajan las Ciencias Sociales.' },
      ),
      S.explain(
        { fase: 'construir', areas: ['ccss'], cnb: ['ccss:5.1.4'], ambito: 'ser', title: '¿Por qué vale la pena investigar?',
          prompt: '**Investigar** es buscar respuestas a una pregunta de forma ordenada: observar, preguntar, leer fuentes, registrar datos y sacar conclusiones. Toca cada tarjeta.' },
        { icon: 'Lightbulb', body: 'Tus preguntas sobre tu comunidad y tu país **valen**: muchas investigaciones importantes empezaron con la curiosidad de alguien.', reveal: [
          { icon: 'Lightbulb', front: 'Responde tus inquietudes', back: '¿Por qué mi pueblo se llama así? ¿De dónde viene la fiesta patronal? Investigar te da respuestas con fundamento, no solo rumores.' },
          { icon: 'Users', front: 'Ayuda a la comunidad', back: 'Saber cuántas familias no tienen agua ayuda al COCODE a pedir un proyecto con datos.' },
          { icon: 'Flag', front: 'Ayuda al país', back: 'Los censos, los informes y los estudios de historia permiten tomar mejores decisiones y **recordar** lo que no debe repetirse.' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['ccss'], cnb: ['ccss:6.2.1'], ambito: 'conocer',
          prompt: 'Clasifica evidencias nuevas segun caractericen una sociedad cazadora-recolectora o agricola.' },
        { buckets: [
          { id: 'cr', label: 'Cazadora-recolectora', icon: 'Footprints', color: 'var(--c-maiz-strong)' },
          { id: 'ag', label: 'Agricola', icon: 'Wheat', color: 'var(--c-ok)' },
        ], items: [
          { id: 'i1', text: 'Campamentos temporales y desplazamiento estacional', bucket: 'cr' },
          { id: 'i2', text: 'Caza, pesca y recoleccion de plantas silvestres', bucket: 'cr' },
          { id: 'i3', text: 'Aldeas permanentes junto a campos cultivados', bucket: 'ag' },
          { id: 'i4', text: 'Almacenamiento de granos y oficios especializados', bucket: 'ag' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['ccss', 'l1'], cnb: ['ccss:5.1.4', 'ccss:5.3.1'], ambito: 'ser',
          prompt: 'Escribe una pregunta sobre tu comunidad, la ciencia social pertinente y una herramienta para recoger informacion sin inventar datos.' },
        { minWords: 20, placeholder: 'Investigaria... Usaria...', model: 'Investigaria como cambio el mercado con historia. Usaria entrevistas abiertas a personas voluntarias y registraria cada relato como fuente.',
          rubric: ['Escribo una pregunta clara', 'Nombro una ciencia social adecuada', 'Elijo y justifico una herramienta'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.2.1'], prompt: 'Un sitio presenta casas permanentes, granos cultivados almacenados y herramientas de varios oficios. ¿Que forma de vida indican estas evidencias?' },
        { options: [
          { id: 'a', text: 'Una sociedad agricola con asentamiento y excedentes' },
          { id: 'b', text: 'Una sociedad exclusivamente cazadora-recolectora y movil' },
          { id: 'c', text: 'No permiten distinguir ninguna caracteristica' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.3.1'], prompt: 'Quieres comparar cuantos hogares usan dos rutas y comprender por que prefieren una. ¿Que herramientas recogen ambas clases de informacion?' },
        { options: [
          { id: 'a', text: 'Una encuesta comun para contar y entrevistas abiertas para comprender razones' },
          { id: 'b', text: 'Una opinion personal sin registro' },
          { id: 'c', text: 'Elegir la respuesta antes de preguntar' },
        ], correct: ['a'] },
      ),
      cierre({ areas: ['ccss'], cnb: [] }, ['Distingo el trabajo formal del informal', 'Comparo los roles de la mujer en distintas épocas', 'Sé qué estudia cada ciencia social'],
        ['Preguntaré a una persona de mi familia en qué trabaja y qué condiciones tiene', 'Compartiré en casa una tarea que antes no hacía']),
    ],
  }),
];
