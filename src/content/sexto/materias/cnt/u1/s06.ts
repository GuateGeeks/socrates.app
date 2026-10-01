/**
 * Ciencias Naturales y Tecnología · Unidad 1 · Semana 6 — Alimentarnos bien.
 * Progresión: nutrientes y funciones → lactancia y calostro con apoyo informado →
 * variedad, higiene y decisiones alimentarias adaptables.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Los nutrientes ───────────────────────── */
  lesson({
    id: 's06-cnt-1',
    title: 'Los nutrientes de los alimentos',
    icon: 'Salad',
    minutes: 15,
    gancho: 'Las tortillas son deliciosas y nos dan energía. Pero, ¿qué pasaría si todo el día comieras solo tortillas?',
    objetivos: [
      'Relacionar alimentos cotidianos con sus nutrientes y funciones, distinguiendo alimento de nutriente',
    ],
    resumen: [
      'Un alimento es lo que comemos; un nutriente es una sustancia del alimento que el cuerpo usa para vivir.',
      'Carbohidratos (maíz, arroz, papa, pan) y grasas (aguacate, aceite, manías) dan energía. Las proteínas (frijol, huevo, carne, pollo, pescado, leche, queso) construyen y reparan el cuerpo.',
      'Las vitaminas y los minerales participan en muchos procesos, incluido el funcionamiento inmunitario. El agua transporta sustancias y ayuda a regular la temperatura.',
      'En una refacción o menú escolar, una combinación variada puede ayudar a cubrir distintas funciones y necesidades. Ningún ingrediente de una refacción debe asumirse, por sí solo, como capaz de cubrirlas todas. Este criterio para escolares no se aplica a la recomendación de lactancia materna exclusiva durante los primeros 6 meses, que se explica en la siguiente lección.',
    ],
    media: {
      id: 's06-cnt-1-nutrientes', kind: 'diagram', title: 'Nutrientes en la mesa guatemalteca', aspect: '16:9',
      alt: 'Mesa con alimentos guatemaltecos agrupados por color según su nutriente principal: tortillas y papas (carbohidratos), frijoles y huevos (proteínas), aguacate (grasas), frutas y verduras (vitaminas y minerales) y un pichel de agua.',
      brief: 'Ilustración cenital de una mesa guatemalteca sobre un mantel típico. Alimentos agrupados con un aro de color y rótulo: amarillo "Carbohidratos: energía" (tortillas, arroz, papa, pan, elote); rojo "Proteínas: construyen" (frijol negro, huevo, pollo, pescado, queso fresco); verde oscuro "Grasas: energía de reserva" (aguacate, manías, un poco de aceite); naranja y verde claro "Vitaminas y minerales: apoyan procesos normales" (naranja, mango, guayaba, zanahoria, güisquil, chipilín, hierbamora); azul "Agua". Colores alegres, sin marcas.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer', title: 'Alimentos y nutrientes',
          prompt: 'No es lo mismo un **alimento** que un **nutriente**. Toca las tarjetas.' },
        { icon: 'Utensils', body: 'Los nutrientes se agrupan según su **función**: dar energía, construir el cuerpo o regularlo.', reveal: [
          { icon: 'Carrot', front: 'Alimento', back: 'Lo que comemos o bebemos: una tortilla, un huevo, una naranja.' },
          { icon: 'Sparkles', front: 'Nutriente', back: 'Sustancia **dentro** del alimento que el cuerpo usa: carbohidratos, proteínas, grasas, vitaminas, minerales y agua.' },
          { icon: 'Zap', front: 'Energía', back: '**Carbohidratos** y **grasas**: el "combustible" para moverte, pensar y mantener tu temperatura.' },
          { icon: 'Hammer', front: 'Construcción', back: '**Proteínas**: forman y reparan músculos, piel, sangre y órganos. ¡Clave mientras creces!' },
          { icon: 'Shield', front: 'Procesos del cuerpo', back: '**Vitaminas** y **minerales** participan en la visión, los huesos, la sangre y el funcionamiento inmunitario, entre otros procesos.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer', title: 'Los seis nutrientes en tu mesa',
          prompt: 'Observa el diagrama de la lección y toca cada tarjeta para conocer dónde está cada nutriente.' },
        { icon: 'Salad', body: 'Los alimentos suelen aportar varios nutrientes. En esta actividad se agrupan por un **aporte destacado**, sin afirmar que sea el único ni que tenga la misma importancia para todas las personas.', reveal: [
          { icon: 'Wheat', front: 'Carbohidratos', back: 'Maíz y tortillas, arroz, papa, yuca, pan, fideos, plátano. Dan energía rápida.' },
          { icon: 'Egg', front: 'Proteínas', back: 'Frijol, huevo, carne, pollo, pescado, leche, queso, incaparina. Construyen el cuerpo.' },
          { icon: 'Droplet', front: 'Grasas', back: 'Aguacate, manías, pepitoria y aceites aportan grasas; algunas son esenciales para las células y para absorber ciertas vitaminas.' },
          { icon: 'Apple', front: 'Vitaminas', back: 'Frutas y verduras pueden aportar vitamina A, vitamina C, folato y otras sustancias que participan en distintos procesos.' },
          { icon: 'Gem', front: 'Minerales', back: '**Hierro** participa en la formación normal de glóbulos rojos; **calcio**, en huesos, dientes, músculos y nervios; **yodo**, en el funcionamiento normal de la tiroides. Sus fuentes y cantidades varían.' },
          { icon: 'Droplets', front: 'Agua', back: 'Más de la mitad de tu cuerpo es agua. Transporta nutrientes, elimina desechos y regula la temperatura.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'hacer', title: 'Ejemplo: los nutrientes de un caldo',
          prompt: 'Mira cómo distinguir los alimentos de sus nutrientes y relacionarlos con funciones del cuerpo.' },
        { icon: 'Utensils', problem: 'El almuerzo de la familia de Juana es **caldo de res** con güisquil, zanahoria, papa y elote, **tortillas** y una **naranja** de postre. ¿Qué nutrientes tiene?',
          steps: [
            { text: 'Primero distingo: carne, papa, elote, tortilla, güisquil, zanahoria y naranja son **alimentos**; proteínas, carbohidratos, vitaminas, minerales y agua son **nutrientes**.' },
            { text: 'La **carne de res**, un alimento, aporta **proteínas**, nutrientes que ayudan a construir y reparar tejidos.' },
            { text: 'La **papa**, el **elote** y las **tortillas** son alimentos que aportan **carbohidratos**, nutrientes que dan energía.' },
            { text: 'El **güisquil**, la **zanahoria** y la **naranja** aportan vitaminas y minerales que participan en procesos normales; el caldo aporta agua, que transporta sustancias y regula la temperatura.' },
          ],
          answer: 'Cada alimento puede aportar varios nutrientes; aquí relacionamos aportes destacados con su función sin confundir el alimento con la sustancia que contiene.',
          tip: 'Nombra primero el alimento, después un nutriente que aporta y finalmente una función de ese nutriente.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer',
          prompt: 'Clasifica cada alimento por el **aporte destacado en esta actividad**. Recuerda que también contiene otros nutrientes.',
          hint: 'Compara el aporte que destaca la tabla; no lo confundas con el único aporte.',
          explain: 'El frijol puede destacar por proteína, fibra y hierro; la tortilla, por carbohidratos y calcio si es nixtamalizada. La clasificación simplifica para comparar.' },
        { buckets: [
          { id: 'car', label: 'Carbohidratos', icon: 'Wheat', color: 'var(--c-maiz-strong)' },
          { id: 'pro', label: 'Proteínas', icon: 'Egg', color: 'var(--c-bad)' },
          { id: 'gra', label: 'Grasas', icon: 'Droplet', color: 'var(--area-ccss)' },
          { id: 'vit', label: 'Vitaminas y minerales', icon: 'Apple', color: 'var(--c-ok)' },
        ], items: [
          { id: 'a1', text: 'Tortilla de maíz', bucket: 'car' },
          { id: 'a2', text: 'Frijol negro', bucket: 'pro' },
          { id: 'a3', text: 'Aguacate', bucket: 'gra', feedback: 'El aguacate es una fruta, pero su nutriente principal es la grasa (grasa saludable).' },
          { id: 'a4', text: 'Guayaba', bucket: 'vit' },
          { id: 'a5', text: 'Huevo', bucket: 'pro' },
          { id: 'a6', text: 'Papa', bucket: 'car' },
          { id: 'a7', text: 'Zanahoria', bucket: 'vit' },
          { id: 'a8', text: 'Manías', bucket: 'gra' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer',
          prompt: 'Une cada nutriente con su **función** principal.',
          hint: 'Energía rápida, formar tejidos, reserva, función inmunitaria, huesos, transportar.',
          explain: 'Cada nutriente participa en funciones distintas; una combinación variada puede ayudar a cubrir diferentes necesidades en una refacción escolar.' },
        { leftTitle: 'Nutriente', rightTitle: 'Función', pairs: [
          { id: 'c', left: 'Carbohidratos', leftIcon: 'Wheat', right: 'Dan energía rápida' },
          { id: 'p', left: 'Proteínas', leftIcon: 'Egg', right: 'Construyen y reparan el cuerpo' },
          { id: 'g', left: 'Grasas', leftIcon: 'Droplet', right: 'Guardan energía de reserva' },
          { id: 'v', left: 'Vitamina C', leftIcon: 'Apple', right: 'Participa en el funcionamiento normal del sistema inmunitario' },
          { id: 'k', left: 'Calcio', leftIcon: 'Bone', right: 'Participa en la formación y el mantenimiento normal de huesos y dientes' },
          { id: 'w', left: 'Agua', leftIcon: 'Droplets', right: 'Transporta nutrientes y regula la temperatura' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer',
          prompt: 'Sin pistas, distingue **alimentos** cotidianos de los **nutrientes** que contienen antes de relacionarlos con una función.' },
        { buckets: [
          { id: 'a', label: 'Alimento', icon: 'Utensils', color: 'var(--c-maiz-strong)' },
          { id: 'n', label: 'Nutriente', icon: 'Sparkles', color: 'var(--c-ok)' },
        ], items: [
          { id: 'x1', text: 'Tortilla', bucket: 'a' },
          { id: 'x2', text: 'Huevo', bucket: 'a' },
          { id: 'x3', text: 'Carbohidratos: energía', bucket: 'n' },
          { id: 'x4', text: 'Proteínas: construcción y reparación', bucket: 'n' },
        ] },
      ),
      S.match(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer',
          prompt: 'Sin ayuda, relaciona cada **alimento** con un **nutriente destacado y su función**. Un alimento también puede aportar otros nutrientes.' },
        { leftTitle: 'Alimento', rightTitle: 'Nutriente y función', pairs: [
          { id: 'm1', left: 'Arroz', right: 'Carbohidratos: aportan energía' },
          { id: 'm2', left: 'Huevo', right: 'Proteínas: construyen y reparan tejidos' },
          { id: 'm3', left: 'Aguacate', right: 'Grasas: aportan energía y apoyan la absorción de ciertas vitaminas' },
          { id: 'm4', left: 'Papaya', right: 'Vitaminas y minerales: participan en procesos normales del cuerpo' },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.1.1'], prompt: '¿Qué opción distingue correctamente **alimento**, **nutriente** y **función**?' },
        { options: [
          { id: 'a', text: 'El frijol es un alimento; aporta proteínas, nutrientes que ayudan a construir y reparar tejidos' },
          { id: 'b', text: 'La proteína es un alimento y el frijol es una función' },
          { id: 'c', text: 'El frijol es un nutriente cuya función es llamarse proteína' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.1.1'], prompt: 'Comprueba la relación entre **alimentos**, **nutrientes** y sus **funciones**.' },
        { statements: [
          { text: 'El arroz y la papa son alimentos que pueden aportar carbohidratos, nutrientes que dan energía.', answer: true },
          { text: 'El huevo es un nutriente y la proteína es un alimento.', answer: false, why: 'El huevo es un alimento; la proteína es uno de los nutrientes que puede aportar.' },
          { text: 'La guayaba es un alimento que puede aportar vitaminas y minerales, nutrientes que participan en procesos normales del cuerpo.', answer: true },
          { text: 'En una refacción escolar, se debe asumir que un solo ingrediente cubre todas las funciones y necesidades.', answer: false, why: 'Ningún ingrediente de una refacción debe asumirse, por sí solo, como capaz de cubrir todas las necesidades. Una combinación variada puede ayudar a reunir aportes distintos. Esta afirmación no se refiere a la lactancia materna exclusiva durante los primeros 6 meses.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Lactancia materna ───────────────────────── */
  lesson({
    id: 's06-cnt-2',
    title: 'La leche materna: el primer alimento',
    icon: 'Baby',
    minutes: 15,
    gancho: 'En la semana 3 aprendiste que los mamíferos alimentan a sus crías con leche. ¿Qué tiene de especial la leche materna para un bebé humano?',
    objetivos: [
      'Describir el valor nutritivo de la leche materna y del calostro',
    ],
    resumen: [
      'La leche materna aporta agua, macronutrientes, micronutrientes y anticuerpos; su composición cambia durante la toma y a medida que el bebé crece. El calostro es la primera leche y concentra componentes inmunitarios.',
      'La OMS recomienda lactancia materna exclusiva durante los primeros 6 meses y, desde entonces, alimentos complementarios adecuados y seguros mientras continúa la lactancia hasta los 2 años o más.',
      'La lactancia se asocia con menor riesgo de algunas infecciones y puede reducir ciertos gastos, pero cada situación requiere decisiones informadas, apoyo respetuoso y atención profesional cuando sea necesaria.',
      'La leche humana no requiere compra, aunque amamantar sí requiere tiempo, alimentación, descanso, condiciones dignas y apoyo. Cuando no es posible o no se elige, se necesita orientación segura sin culpa ni estigma.',
    ],
    media: {
      id: 's06-cnt-2-lactancia', kind: 'image', title: 'El primer alimento', aspect: '4:3',
      alt: 'Ilustración respetuosa de una madre maya sentada, que amamanta a su bebé envuelta en un perraje, mientras el padre les lleva un vaso de agua.',
      brief: 'Ilustración cálida y respetuosa, sin desnudez explícita: una madre guatemalteca con traje (huipil y corte) sentada en su casa, con el bebé en brazos cubierto parcialmente por un perraje mientras lo amamanta; el padre se acerca con un vaso de agua y una refacción, mostrando apoyo. Colores suaves. Rótulo opcional: "Leche materna: alimento, defensa y amor".',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:5.2.1'], ambito: 'conocer', title: 'Un alimento completo y vivo',
          prompt: 'La leche materna no es un alimento cualquiera. Toca las tarjetas.' },
        { icon: 'Milk', body: 'La leche materna aporta energía y nutrientes durante los primeros meses y su composición **cambia** durante la toma y con la edad del bebé.', reveal: [
          { icon: 'Salad', front: 'Composición', back: 'Contiene **agua**, proteínas, grasas, lactosa, vitaminas y minerales en proporciones que cambian con el tiempo.' },
          { icon: 'Shield', front: 'Anticuerpos', back: 'Sus anticuerpos y otros componentes inmunitarios se asocian con menor riesgo de diarrea y algunas infecciones respiratorias.' },
          { icon: 'Sunrise', front: 'El calostro', back: 'Es la **primera leche**, espesa y amarillenta, de los primeros días; concentra anticuerpos y otros componentes protectores.' },
          { icon: 'Droplets', front: 'Lactancia exclusiva', back: 'La recomendación general de la OMS para los primeros 6 meses es solo leche materna, sin agua adicional, salvo indicación clínica.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt', 'mat'], cnb: ['cnt:5.2.1'], ambito: 'hacer', title: 'Ejemplo: el valor económico de la lactancia',
          prompt: 'Calcula cuánto ahorra una familia. Los precios son **hipotéticos**: cambian según el lugar y el año.' },
        { icon: 'PiggyBank', problem: 'Supongamos que una lata de fórmula cuesta **Q125** y a un bebé le dura **5 días**. ¿Cuánto costaría alimentarlo con fórmula durante **180 días** (unos 6 meses)?',
          steps: [
            { text: 'Latas necesarias: 180 ÷ 5 = **36 latas**.' },
            { text: 'Costo de la fórmula: 36 × Q125 = **Q4,500**.', why: '36 × 100 = 3,600 y 36 × 25 = 900; 3,600 + 900 = 4,500.' },
            { text: 'También puede haber costos de **pachas**, agua segura y combustible, según la forma de preparación.' },
          ],
          answer: 'En este escenario, comprar la fórmula costaría **Q4,500** en 6 meses, sin contar otros insumos. Los costos y las decisiones reales varían.',
          tip: 'Una comparación económica debe indicar sus supuestos y respetar las necesidades de cada familia.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.2.1'], ambito: 'conocer',
          prompt: '¿Qué alimento producen las glándulas mamarias después del parto para alimentar a las crías de los mamíferos?',
          explain: 'La **leche**. En los seres humanos, la leche materna cambia con el tiempo y aporta nutrición y componentes inmunitarios al bebé.' },
        { options: [
          { id: 'a', text: 'Agua con azúcar', icon: 'Droplet', feedback: 'No es leche ni sustituye una alimentación infantil indicada de forma segura.' },
          { id: 'b', text: 'La leche de su madre', icon: 'Milk' },
          { id: 'c', text: 'Atol de maíz', icon: 'Wheat', feedback: 'No es la sustancia que producen las glándulas mamarias.' },
        ], correct: ['b'] },
      ),
      S.reading(
        { fase: 'construir', areas: ['cnt', 'l1'], cnb: ['cnt:5.2.1'], ambito: 'conocer', title: 'Lectura',
          prompt: 'Lee el texto informativo y responde. Hay preguntas que se responden con el texto y otras en las que debes pensar.',
          hint: 'Busca las palabras clave en cada párrafo: "6 meses", "defensas", "dinero", "madre".' },
        { genre: 'Texto informativo', heading: 'Lactancia con información y apoyo', passage:
          'La **Organización Mundial de la Salud** recomienda lactancia materna exclusiva durante los **primeros 6 meses**. Desde los 6 meses recomienda alimentos complementarios adecuados y seguros, mientras la lactancia continúa hasta los **2 años o más**. Son orientaciones de salud pública; una familia puede necesitar apoyo clínico individual.\n\nLa leche materna aporta nutrientes y componentes inmunitarios, y la lactancia se asocia con menor riesgo de algunas infecciones. Cuando la leche se da directamente del pecho no requiere agua, recipientes ni preparación. La leche humana no se compra, aunque amamantar sí requiere tiempo, alimentación, descanso y condiciones de trabajo favorables.\n\nLa decisión y la experiencia pertenecen a la madre y su familia. El apoyo incluye escuchar, compartir tareas y facilitar atención profesional. Si amamantar no es posible o no se elige, el personal de salud puede orientar una alternativa segura sin culpa ni estigma.',
          questions: [
            { q: 'Según el texto, ¿hasta qué edad se recomienda dar solo leche materna?', options: [{ id: 'a', text: 'Hasta los 6 meses' }, { id: 'b', text: 'Hasta la primera semana' }, { id: 'c', text: 'Hasta los 5 años, sin otros alimentos' }], correct: 'a' },
            { q: '¿Qué matiz económico presenta el texto?', options: [{ id: 'a', text: 'La leche humana no se compra, pero la lactancia requiere tiempo, alimentación y apoyo' }, { id: 'b', text: 'Amamantar elimina todos los gastos familiares' }, { id: 'c', text: 'La fórmula tiene el mismo precio en todo lugar' }], correct: 'a' },
            { q: '¿Qué puedes concluir del último párrafo?', options: [{ id: 'a', text: 'Una sola opción debe imponerse a todas las familias' }, { id: 'b', text: 'Escuchar, compartir tareas y buscar orientación permite apoyar sin juzgar' }, { id: 'c', text: 'Pedir ayuda profesional demuestra fracaso' }], correct: 'b' },
          ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.2.1'], ambito: 'conocer',
          prompt: 'Clasifica cada beneficio de la lactancia: ¿para **quién** es principalmente?',
          hint: 'Vuelve a leer: hay un párrafo para el bebé, otro para la madre y otro para la familia y el ambiente.',
          explain: 'La lactancia puede aportar nutrición y componentes inmunitarios al bebé, apoyar la recuperación materna y reducir algunas compras y residuos. También requiere tiempo, alimentación y apoyo.' },
        { buckets: [
          { id: 'beb', label: 'Bebé', icon: 'Baby', color: 'var(--area-cnt)' },
          { id: 'mad', label: 'Madre', icon: 'Heart', color: 'var(--area-art)' },
          { id: 'fam', label: 'Familia y ambiente', icon: 'Home', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'b1', text: 'Recibe anticuerpos asociados con menor riesgo de algunas infecciones', bucket: 'beb' },
          { id: 'b2', text: 'El útero vuelve más pronto a su tamaño', bucket: 'mad' },
          { id: 'b3', text: 'La leche humana no requiere compra', bucket: 'fam' },
          { id: 'b4', text: 'Al mamar directamente no se requieren agua ni recipientes para preparar la leche', bucket: 'beb' },
          { id: 'b5', text: 'Menor riesgo de algunos tipos de cáncer', bucket: 'mad' },
          { id: 'b6', text: 'Puede reducir el uso de latas y envases', bucket: 'fam' },
        ] },
      ),
      S.match(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.2.1'], ambito: 'conocer',
          prompt: 'Une cada etapa del bebé con su alimentación recomendada.',
          hint: 'Solo leche materna al inicio; después se agregan otros alimentos.',
          explain: 'Primeros días: calostro. Hasta los 6 meses: solo leche materna. De 6 meses a 2 años o más: leche materna más otros alimentos (papillas, frutas machacadas, frijol colado, huevo…).' },
        { leftTitle: 'Etapa', rightTitle: 'Alimentación', pairs: [
          { id: 'e1', left: 'Primeros días de vida', right: 'Calostro, lleno de defensas' },
          { id: 'e2', left: 'Hasta los 6 meses', right: 'Solo leche materna' },
          { id: 'e3', left: 'De 6 meses a 2 años o más', right: 'Leche materna y otros alimentos' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['cnt', 'mat'], cnb: ['cnt:5.2.1'], ambito: 'hacer',
          prompt: 'En un escenario ilustrativo, no un precio actual, una lata de fórmula indicada para un bebé cuesta **Q120** y dura **una semana**. ¿Cuál sería la compra de fórmula en **26 semanas**?',
          explain: '26 × Q120 = Q3,120 en este escenario. Los productos, cantidades y costos reales varían; la fórmula puede ser necesaria o elegida y debe prepararse según indicación sanitaria.' },
        { answer: 3120, unit: 'quetzales', misconceptions: [
          { value: 146, msg: 'Sumaste 26 + 120. Cada semana se compra una lata: hay que multiplicar.' },
          { value: 480, msg: 'Eso sería solo un mes (4 semanas). La pregunta es por 26 semanas.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:5.2.1'], ambito: 'conocer',
          prompt: 'Una persona duda del **calostro** por su color amarillento. ¿Qué respuesta usa evidencia y respeta una decisión informada?',
          explain: 'El calostro es la primera leche y concentra anticuerpos y otros componentes protectores. Una persona profesional de salud puede orientar ante una situación clínica particular.' },
        { options: [
          { id: 'a', text: 'Que el color demuestra que está contaminado', icon: 'X', feedback: 'El color no demuestra contaminación.' },
          { id: 'b', text: 'Que es la primera leche, concentra componentes inmunitarios y puede consultarse al personal de salud', icon: 'Shield' },
          { id: 'c', text: 'Que debe sustituirse automáticamente por agua con azúcar', icon: 'Droplet', feedback: 'Esa sustitución no corresponde a la recomendación general y una duda clínica requiere orientación profesional.' },
        ], correct: ['b'] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['cnt', 'fc'], cnb: ['cnt:5.2.1'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
        { scene: { icon: 'Baby', text: 'La tía de **Karla** tiene un bebé de 3 meses y debe volver a trabajar en el mercado. Quiere seguir dándole leche materna, pero está muy cansada y nadie la ayuda en casa.' }, options: [
          { id: 'a', icon: 'EyeOff', text: 'Pensar que es solo problema de ella', consequence: 'La tía se agota y quizá deje de amamantar antes de tiempo, aunque quería seguir.', values: ['Indiferencia'], constructive: false },
          { id: 'b', icon: 'HeartHandshake', text: 'Proponer en familia turnarse para cocinar, cuidar al bebé y llevarle agua y refacción', consequence: 'La tía descansa mejor y puede seguir amamantando. Todos cuidan al bebé.', values: ['Solidaridad', 'Corresponsabilidad'], constructive: true },
          { id: 'c', icon: 'MessageCircle', text: 'Sugerir que pregunte en el centro de salud cómo seguir amamantando mientras trabaja', consequence: 'Le enseñan a extraer y guardar su leche de forma segura para que otra persona se la dé al bebé.', values: ['Información', 'Cuidado'], constructive: true },
        ] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.2.1'], prompt: '¿Cuál es un beneficio **económico** de la lactancia materna?' },
        { options: [
          { id: 'a', text: 'El bebé duerme más horas' },
          { id: 'b', text: 'La leche humana no requiere compra, aunque amamantar necesita tiempo y apoyo' },
          { id: 'c', text: 'La madre no necesita comer' },
          { id: 'd', text: 'El bebé no necesita vacunas' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La leche materna contiene componentes inmunitarios y se asocia con menor riesgo de algunas infecciones.', answer: true },
          { text: 'Se recomienda dar solo leche materna durante los primeros 6 meses.', answer: true },
          { text: 'La recomendación general indica agua con azúcar además de leche materna desde el primer mes.', answer: false, why: 'La OMS recomienda lactancia materna exclusiva durante los primeros 6 meses, salvo indicación clínica.' },
          { text: 'Apoyar a una madre que amamanta es tarea solo de ella.', answer: false, why: 'La pareja, la familia y el lugar de trabajo también deben apoyarla.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Hábitos nutricionales ───────────────────────── */
  lesson({
    id: 's06-cnt-3',
    title: 'Variedad, higiene y decisiones alimentarias',
    icon: 'Apple',
    minutes: 15,
    gancho: 'Las opciones de refacción cambian según lo disponible. ¿Qué criterios permiten comparar variedad, agua segura, higiene y cantidad de azúcar o sal?',
    objetivos: [
      'Evaluar alimentos y hábitos para una alimentación variada',
    ],
    resumen: [
      'Los patrones de alimentación, la higiene y el acceso influyen en la nutrición y en el riesgo de caries, anemia, malnutrición y enfermedades crónicas; una sola comida no define la salud de una persona.',
      'La olla familiar resume orientaciones generales de Guatemala. Debe interpretarse junto con necesidades personales, cultura, alimentos disponibles, restricciones y orientación profesional cuando corresponda.',
      'Criterios útiles para comparar opciones son variedad, agua segura, higiene y moderación de azúcares libres y sodio, sin convertirlos en juicios sobre las personas o sus recursos.',
    ],
    media: {
      id: 's06-cnt-3-olla', kind: 'diagram', title: 'La olla familiar guatemalteca', aspect: '1:1',
      alt: 'Una olla de barro dividida en franjas: abajo, la franja más ancha con maíz, frijol, arroz y papa; luego frutas y verduras; más arriba leche, huevos y carnes; y arriba, la franja más pequeña con azúcar y grasas.',
      brief: 'Ilustración de una olla de barro tradicional vista de frente, dividida en franjas horizontales de distinto tamaño, como en las Guías Alimentarias para Guatemala: base ancha "Cereales, granos y tubérculos" (tortillas, frijol, arroz, papa, yuca); siguiente "Hierbas, verduras y frutas" (güisquil, zanahoria, chipilín, naranja, mango); luego "Leche y derivados, huevos" y "Carnes"; y la franja superior, la más angosta, "Azúcares" y "Grasas". Al costado, un vaso de agua y una persona caminando (actividad física). Rótulos grandes; colores de barro y alimentos reales.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:5.3.1', 'cnt:6.1.1'], ambito: 'ser', title: 'Hábitos y ambientes que influyen en la salud',
          prompt: 'Un **hábito** es una acción repetida. Los patrones alimentarios y la higiene pueden **reducir o aumentar riesgos**, pero no garantizan un resultado individual. Toca las tarjetas.' },
        { icon: 'CalendarDays', body: 'Para evaluar un patrón se observa el conjunto de decisiones y las condiciones de acceso. Un ambiente sano protege agua y alimentos; uno contaminado presenta humo, basura, aguas residuales u otros riesgos.', reveal: [
          { icon: 'Sunrise', front: 'Regularidad', back: 'Tener opciones regulares de comida puede apoyar energía y atención; los horarios y necesidades varían.' },
          { icon: 'Salad', front: 'Variedad', back: 'Combinar grupos disponibles aumenta la probabilidad de cubrir distintos nutrientes.' },
          { icon: 'GlassWater', front: 'Agua segura', back: 'El agua segura hidrata sin añadir azúcares libres.' },
          { icon: 'Hand', front: 'Higiene', back: '**Lavarse las manos** y manipular alimentos de forma segura reduce el riesgo de infecciones transmitidas por alimentos.' },
          { icon: 'Trees', front: 'Ambiente sano o contaminado', back: 'Un sitio limpio, ventilado y con agua manejada de forma segura reduce exposiciones; basura, humo o aguas residuales indican contaminación que debe atenderse.' },
          { icon: 'ShieldCheck', front: 'Riesgo, no garantía', back: 'Los patrones influyen en riesgos de caries, anemia o enfermedades crónicas junto con muchos otros factores.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.3.1'], ambito: 'conocer', title: 'Productos con mucho azúcar, grasa o sal',
          prompt: 'Algunos productos aportan energía y también bastante azúcar, grasa o sal. Toca las tarjetas.' },
        { icon: 'CupSoda', body: 'Las frituras de bolsita, golosinas y algunas comidas rápidas pueden contener bastante azúcar, grasa o sal. La cantidad y la frecuencia forman parte de la comparación.', reveal: [
          { icon: 'Candy', front: 'Mucho azúcar', back: 'El consumo frecuente de azúcares libres aumenta el riesgo de **caries** y se relaciona con otros riesgos de salud.' },
          { icon: 'Droplet', front: 'Mucha grasa', back: 'Las grasas tienen funciones importantes; algunos productos concentran mucha energía y conviene considerar cantidad y frecuencia.' },
          { icon: 'Waves', front: 'Mucha sal', back: 'Con los años puede subir la **presión de la sangre**.' },
          { icon: 'Scale', front: 'Observar el conjunto', back: 'Una sola comida no define la nutrición. Una persona puede presentar anemia con cuerpos de tamaños distintos.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.3.1'], ambito: 'hacer', title: 'Ejemplo: mejorar un día de comidas',
          prompt: 'Mira cómo se analiza y se mejora el menú de un día, con cambios sencillos y posibles.' },
        { icon: 'ClipboardList', problem: 'Byron no desayuna; en el recreo compra frituras y gaseosa; almuerza arroz con tortillas; y cena pan dulce con café. Siempre tiene sueño en clase. ¿Qué cambios le ayudarían?',
          steps: [
            { text: '**Desayuno**: agregar algo sencillo, como atol de maíz o de incaparina con una tortilla con frijol o huevo.', why: 'Llega con energía y proteína a la escuela.' },
            { text: '**Recreo**: cambiar las frituras y la gaseosa por una fruta y agua pura.', why: 'Menos azúcar y sal; más vitaminas.' },
            { text: '**Almuerzo**: sumar frijol y una verdura (güisquil, hierbas) al arroz y las tortillas.', why: 'Así combina carbohidratos, proteína, vitaminas y minerales.' },
            { text: '**Cena**: cambiar el pan dulce y el café por frijol, tortilla y un vaso de leche o atol.', why: 'El café tiene cafeína, un estimulante que puede quitar el sueño de noche.' },
          ],
          answer: 'Con cambios pequeños, Byron come **variado**, con menos azúcar y más proteína, vitaminas y minerales.',
          tip: 'No se trata de comer caro, sino de **combinar bien** lo que hay en casa.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.3.1'], ambito: 'ser',
          prompt: '¿Cuál opción del escenario ofrece **más variedad de aportes** sin afirmar que sea la única elección posible?',
          explain: 'La tortilla con frijol y mandarina reúne carbohidratos, proteína vegetal, fibra y micronutrientes. La elección real también depende de disponibilidad, porciones, restricciones y preferencias.' },
        { layout: 'grid', options: [
          { id: 'a', text: 'Frituras de bolsita y una gaseosa', icon: 'CupSoda', feedback: 'Puede aportar energía, además de bastante sodio, grasa o azúcares libres, pero ofrece menos variedad en este ejemplo.' },
          { id: 'b', text: 'Tortilla con frijol y una mandarina', icon: 'Apple' },
          { id: 'c', text: 'Solo dulces', icon: 'Candy', feedback: 'Aporta energía y azúcares libres, pero menos variedad de nutrientes en este ejemplo.' },
        ], correct: ['b'] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.3.1'], ambito: 'conocer',
          prompt: 'Según la representación general de la olla familiar, ¿en qué franja aparece cada alimento?',
          hint: 'Base de la olla y verduras: todos los días. Leche, huevo y carnes: varias veces por semana. La punta: poca cantidad.',
          explain: 'La actividad recupera las franjas de la guía. No prescribe el menú de una persona ni supone que todas las opciones estén disponibles.' },
        { buckets: [
          { id: 'dia', label: 'Todos los días', icon: 'Sun', color: 'var(--c-ok)' },
          { id: 'sem', label: 'Varias veces por semana', icon: 'CalendarDays', color: 'var(--area-cnt)' },
          { id: 'poc', label: 'En poca cantidad', icon: 'Minus', color: 'var(--c-bad)' },
        ], items: [
          { id: 'o1', text: 'Tortillas y frijol', bucket: 'dia' },
          { id: 'o2', text: 'Güisquil, zanahoria y hojas verdes', bucket: 'dia' },
          { id: 'o3', text: 'Huevo', bucket: 'sem' },
          { id: 'o4', text: 'Pollo o pescado', bucket: 'sem' },
          { id: 'o5', text: 'Dulces y gaseosas', bucket: 'poc' },
          { id: 'o6', text: 'Frutas como papaya o naranja', bucket: 'dia' },
          { id: 'o7', text: 'Manteca y frituras', bucket: 'poc' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.2.1', 'cnt:6.3.1'], title: 'Alimentos locales, expansión urbana y agua',
          prompt: 'Cuando crece la población, la frontera urbana puede reemplazar bosque o usar espacios inadecuados para vivienda; ese cambio puede aumentar erosión y modificar infiltración según suelo, pendiente y lluvia.' },
        { icon: 'Map', body: 'Conservar vegetación o reforestar sitios adecuados **puede contribuir** a proteger suelo y recursos hídricos, pero plantar árboles no garantiza caudal ni calidad: también influyen clima, geología, extracción, especies y mantenimiento.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.2.1', 'cnt:6.3.1'],
          prompt: 'Clasifica relaciones entre crecimiento de la población, frontera urbana, bosque y protección del agua.',
          hint: 'Distingue presión urbana, acción condicionada y garantía exagerada.',
          explain: 'La expansión puede eliminar cobertura; una reforestación adecuada puede ayudar, sin garantizar resultados.' },
        { buckets: [{ id: 'p', label: 'Presión sobre el territorio', icon: 'Construction' }, { id: 'c', label: 'Protección condicionada', icon: 'Trees' }, { id: 'x', label: 'Afirmación exagerada', icon: 'TriangleAlert' }], items: [
          { id: 'a', text: 'Construir viviendas eliminando bosque y sin ordenar el uso del suelo', bucket: 'p' },
          { id: 'b', text: 'Reforestar un sitio adecuado y dar seguimiento puede ayudar a reducir erosión', bucket: 'c' },
          { id: 'd', text: 'Sembrar cualquier árbol garantiza que nunca faltará agua', bucket: 'x' },
        ] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:5.3.1', 'cnt:6.1.1'], ambito: 'ser',
          prompt: 'Clasifica hábitos y condiciones de un ambiente sano o contaminado, sin prometer resultados individuales.',
          explain: 'Algunos patrones apoyan variedad o seguridad; otros añaden con frecuencia azúcares libres o sodio, omiten comidas o aumentan riesgos. El contexto también importa.' },
        { buckets: [
          { id: 'pre', label: 'Apoya variedad o seguridad', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          { id: 'rie', label: 'Puede aumentar un riesgo', icon: 'AlertTriangle', color: 'var(--c-bad)' },
        ], items: [
          { id: 'h1', text: 'Tomar agua pura en lugar de gaseosa', bucket: 'pre' },
          { id: 'h2', text: 'Salir sin desayunar todos los días', bucket: 'rie' },
          { id: 'h3', text: 'Comer frutas de temporada en la refacción', bucket: 'pre' },
          { id: 'h4', text: 'Comer golosinas en lugar del almuerzo', bucket: 'rie' },
          { id: 'h5', text: 'Lavar las verduras antes de prepararlas', bucket: 'pre' },
          { id: 'h6', text: 'Agregar mucha sal a todas las comidas', bucket: 'rie' },
          { id: 'h7', text: 'Preparar alimentos junto a aguas residuales y basura abierta', bucket: 'rie' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:5.3.1'], ambito: 'ser', title: 'Criterios para una propuesta',
          prompt: 'Escribe **tres criterios adaptables** para comparar una propuesta de refacción. Explica qué información habría que confirmar antes de aplicarla.' },
        { placeholder: '1. Criterio… Información por confirmar…',
          model: '1. Incluir variedad de aportes; confirmar qué alimentos hay. 2. Usar agua y utensilios seguros; confirmar el apoyo adulto disponible. 3. Respetar alergias, intolerancias y decisiones familiares; preguntar antes de sustituir ingredientes.',
          rubric: ['Propone tres criterios observables', 'Reconoce disponibilidad y restricciones', 'Evita prometer resultados individuales'],
          minWords: 30 },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.3.1'], prompt: 'Al evaluar opciones para una **alimentación variada**, ¿qué grupo ocupa la franja **más pequeña** en la representación de la olla familiar?' },
        { options: [
          { id: 'a', text: 'Tortillas y frijol' },
          { id: 'b', text: 'Verduras y frutas' },
          { id: 'c', text: 'Azúcares y grasas' },
          { id: 'd', text: 'Huevos' },
        ], correct: ['c'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.3.1'], prompt: 'Evalúa estos **hábitos** como parte de una alimentación variada. ¿Verdadero o falso?' },
        { statements: [
          { text: 'Desayunar ayuda a concentrarte en la escuela.', answer: true },
          { text: 'Las gaseosas son la mejor bebida para hidratarse.', answer: false, why: 'La mejor bebida es el agua pura; las gaseosas tienen mucha azúcar.' },
          { text: 'Lavarse las manos antes de comer también es un hábito que protege la nutrición.', answer: true },
          { text: 'Una persona con sobrepeso no puede tener anemia.', answer: false, why: 'Sí puede: comer mucho no es lo mismo que comer variado.' },
        ] },
      ),
      cierre({ areas: ['cnt'], cnb: [] },
        ['Clasifico los nutrientes y explico su función', 'Explico los beneficios de la lactancia materna', 'Uso la olla familiar para elegir mejor lo que como'],
        ['Preguntaré por disponibilidad y restricciones antes de proponer cambios', 'Explicaré que la olla familiar ofrece una orientación general adaptable'])
    ],
  }),
];
