/**
 * Ciencias Naturales y Tecnología · Unidad 1 · Semana 6 — Alimentarnos bien.
 * Progresión: los nutrientes y su función → la leche materna, primer alimento (valor nutritivo
 * y económico) → hábitos nutricionales para prevenir enfermedades (la olla familiar).
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
      'Diferenciar alimento de nutriente',
      'Clasificar los nutrientes (carbohidratos, proteínas, grasas, vitaminas, minerales y agua) y describir su función',
      'Reconocer los nutrientes presentes en comidas guatemaltecas',
    ],
    resumen: [
      'Un alimento es lo que comemos; un nutriente es una sustancia del alimento que el cuerpo usa para vivir.',
      'Carbohidratos (maíz, arroz, papa, pan) y grasas (aguacate, aceite, manías) dan energía. Las proteínas (frijol, huevo, carne, pollo, pescado, leche, queso) construyen y reparan el cuerpo.',
      'Las vitaminas (frutas y verduras) y los minerales (hierro, calcio, yodo) regulan el cuerpo y fortalecen las defensas. El agua transporta nutrientes y regula la temperatura.',
      'Ningún alimento tiene todos los nutrientes: por eso hay que comer variado. Frijol con tortilla forma una combinación de proteínas muy completa.',
    ],
    media: {
      id: 's06-cnt-1-nutrientes', kind: 'diagram', title: 'Nutrientes en la mesa guatemalteca', aspect: '16:9',
      alt: 'Mesa con alimentos guatemaltecos agrupados por color según su nutriente principal: tortillas y papas (carbohidratos), frijoles y huevos (proteínas), aguacate (grasas), frutas y verduras (vitaminas y minerales) y un pichel de agua.',
      brief: 'Ilustración cenital de una mesa guatemalteca sobre un mantel típico. Alimentos agrupados con un aro de color y rótulo: amarillo "Carbohidratos: energía" (tortillas, arroz, papa, pan, elote); rojo "Proteínas: construyen" (frijol negro, huevo, pollo, pescado, queso fresco); verde oscuro "Grasas: energía de reserva" (aguacate, manías, un poco de aceite); naranja y verde claro "Vitaminas y minerales: regulan y protegen" (naranja, mango, guayaba, zanahoria, güisquil, chipilín, hierbamora); azul "Agua". Colores alegres, sin marcas.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer',
          prompt: '¿Por qué no sería sano comer **solo tortillas** todo el día, aunque te llenen?',
          explain: 'La tortilla da mucha **energía** y algo de calcio, pero le faltan otros **nutrientes** que el cuerpo necesita para crecer y defenderse. Ningún alimento los tiene todos.' },
        { options: [
          { id: 'a', text: 'Porque les faltan nutrientes que el cuerpo también necesita', icon: 'Salad' },
          { id: 'b', text: 'Porque las tortillas no tienen nada bueno', icon: 'X', feedback: 'La tortilla es un gran alimento: da energía y, por la cal del nixtamal, calcio. El problema es comer solo eso.' },
          { id: 'c', text: 'Sí sería sano, porque llenan', icon: 'Check', feedback: 'Llenarse no es lo mismo que nutrirse.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer', title: 'Alimentos y nutrientes',
          prompt: 'No es lo mismo un **alimento** que un **nutriente**. Toca las tarjetas.' },
        { icon: 'Utensils', body: 'Los nutrientes se agrupan según su **función**: dar energía, construir el cuerpo o regularlo.', reveal: [
          { icon: 'Carrot', front: 'Alimento', back: 'Lo que comemos o bebemos: una tortilla, un huevo, una naranja.' },
          { icon: 'Sparkles', front: 'Nutriente', back: 'Sustancia **dentro** del alimento que el cuerpo usa: carbohidratos, proteínas, grasas, vitaminas, minerales y agua.' },
          { icon: 'Zap', front: 'Energía', back: '**Carbohidratos** y **grasas**: el "combustible" para moverte, pensar y mantener tu temperatura.' },
          { icon: 'Hammer', front: 'Construcción', back: '**Proteínas**: forman y reparan músculos, piel, sangre y órganos. ¡Clave mientras creces!' },
          { icon: 'Shield', front: 'Regulación y defensa', back: '**Vitaminas** y **minerales**: hacen que el cuerpo funcione bien y fortalecen las defensas.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer', title: 'Los seis nutrientes en tu mesa',
          prompt: 'Observa el diagrama de la lección y toca cada tarjeta para conocer dónde está cada nutriente.' },
        { icon: 'Salad', body: 'Casi todos los alimentos tienen varios nutrientes. Se agrupan por el nutriente **más importante que aportan** a tu dieta (su nutriente principal). Por ejemplo, el frijol tiene muchos carbohidratos, pero es valioso sobre todo por su **proteína**.', reveal: [
          { icon: 'Wheat', front: 'Carbohidratos', back: 'Maíz y tortillas, arroz, papa, yuca, pan, fideos, plátano. Dan energía rápida.' },
          { icon: 'Egg', front: 'Proteínas', back: 'Frijol, huevo, carne, pollo, pescado, leche, queso, incaparina. Construyen el cuerpo.' },
          { icon: 'Droplet', front: 'Grasas', back: 'Aguacate, manías, pepitoria, aceite, crema. Energía de reserva; se necesitan en **poca** cantidad.' },
          { icon: 'Apple', front: 'Vitaminas', back: 'Frutas y verduras: la **vitamina A** (zanahoria, mango, ayote) cuida la vista; la **vitamina C** (naranja, guayaba, limón) las defensas.' },
          { icon: 'Gem', front: 'Minerales', back: '**Hierro** (frijol, hojas verdes como chipilín y hierbamora): sangre sana. **Calcio** (leche, queso, tortilla de maíz con cal): huesos. **Yodo** (sal yodada): tiroides.' },
          { icon: 'Droplets', front: 'Agua', back: 'Más de la mitad de tu cuerpo es agua. Transporta nutrientes, elimina desechos y regula la temperatura.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer',
          prompt: 'Clasifica cada alimento según su **nutriente principal**.',
          hint: 'Granos y tubérculos: carbohidratos. Frijol, huevo y carnes: proteínas. Aguacate y aceite: grasas. Frutas y verduras: vitaminas y minerales.',
          explain: 'El frijol aporta proteína y también hierro; la tortilla, carbohidratos y calcio. Por eso juntos son una gran combinación.' },
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
          hint: 'Energía rápida, construir, reserva, defensas, huesos, transportar.',
          explain: 'Cada nutriente tiene un trabajo distinto: por eso necesitamos de todos.' },
        { leftTitle: 'Nutriente', rightTitle: 'Función', pairs: [
          { id: 'c', left: 'Carbohidratos', leftIcon: 'Wheat', right: 'Dan energía rápida' },
          { id: 'p', left: 'Proteínas', leftIcon: 'Egg', right: 'Construyen y reparan el cuerpo' },
          { id: 'g', left: 'Grasas', leftIcon: 'Droplet', right: 'Guardan energía de reserva' },
          { id: 'v', left: 'Vitamina C', leftIcon: 'Apple', right: 'Fortalece las defensas' },
          { id: 'k', left: 'Calcio', leftIcon: 'Bone', right: 'Forma huesos y dientes fuertes' },
          { id: 'w', left: 'Agua', leftIcon: 'Droplets', right: 'Transporta nutrientes y regula la temperatura' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'hacer', title: 'Ejemplo: los nutrientes de un caldo',
          prompt: 'Mira cómo analizar los nutrientes de una comida completa.' },
        { icon: 'Utensils', problem: 'El almuerzo de la familia de Juana es **caldo de res** con güisquil, zanahoria, papa y elote, **tortillas** y una **naranja** de postre. ¿Qué nutrientes tiene?',
          steps: [
            { text: 'La **carne de res** aporta **proteínas** (y hierro y algo de grasa).' },
            { text: 'La **papa**, el **elote** y las **tortillas** aportan **carbohidratos**.' },
            { text: 'El **güisquil**, la **zanahoria** y la **naranja** aportan **vitaminas y minerales** (vitamina A en la zanahoria, vitamina C en la naranja).' },
            { text: 'El caldo aporta **agua**.', why: 'Revisa si están todos los grupos: energía, construcción y regulación.' },
          ],
          answer: 'Es un almuerzo **variado**: tiene proteínas, carbohidratos, vitaminas, minerales, agua y un poco de grasa.',
          tip: 'Un plato con muchos colores suele tener más variedad de nutrientes.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer',
          prompt: 'En Guatemala se come mucho **frijol con tortilla**. ¿Por qué esta combinación es tan buena?',
          explain: 'Las proteínas del maíz y las del frijol se **complementan**: lo que le falta a una lo aporta la otra. Juntas forman una proteína más completa, y además dan energía, hierro y calcio.' },
        { options: [
          { id: 'a', text: 'Porque sus proteínas se complementan y juntas son más completas', icon: 'Puzzle' },
          { id: 'b', text: 'Porque los dos tienen solo grasa', icon: 'Droplet', feedback: 'Ni el frijol ni la tortilla son alimentos grasosos.' },
          { id: 'c', text: 'Porque así no se necesita comer nada más nunca', icon: 'X', feedback: 'Es una gran base, pero también se necesitan frutas, verduras y otros alimentos.' },
        ], correct: ['a'] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer',
          prompt: 'Clasifica cada situación según el **tipo de función** que más necesita el cuerpo.',
          explain: 'Para correr se necesita energía (carbohidratos); para crecer y sanar una herida, proteínas; para no enfermarse, vitaminas y minerales.' },
        { buckets: [
          { id: 'ene', label: 'Energía (carbohidratos y grasas)', icon: 'Zap', color: 'var(--c-maiz-strong)' },
          { id: 'con', label: 'Construcción (proteínas)', icon: 'Hammer', color: 'var(--c-bad)' },
          { id: 'reg', label: 'Regulación y defensa (vitaminas y minerales)', icon: 'Shield', color: 'var(--c-ok)' },
        ], items: [
          { id: 's1', text: 'Correr una carrera en la feria', bucket: 'ene' },
          { id: 's2', text: 'Crecer durante el estirón de la pubertad', bucket: 'con' },
          { id: 's3', text: 'Evitar resfriados frecuentes', bucket: 'reg' },
          { id: 's4', text: 'Sanar una rodilla raspada', bucket: 'con' },
          { id: 's5', text: 'Tener energía para caminar al campo', bucket: 'ene' },
          { id: 's6', text: 'Ver bien de noche', bucket: 'reg', feedback: 'La vitamina A cuida la vista.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:5.1.1'], ambito: 'conocer',
          prompt: 'Pedro está **pálido y se cansa** muy rápido. El personal de salud le dice que tiene **anemia**. Casi no come frijol ni hojas verdes. ¿Qué mineral le falta probablemente?',
          explain: 'El **hierro** forma parte de la sangre que lleva oxígeno. Sin hierro suficiente aparece la anemia. ¿Recuerdas la uncinaria de la semana 2? También causa anemia.' },
        { options: [
          { id: 'a', text: 'Hierro', icon: 'Gem' },
          { id: 'b', text: 'Yodo', icon: 'Thermometer', feedback: 'El yodo es para la tiroides. La anemia se relaciona con el hierro.' },
          { id: 'c', text: 'Grasas', icon: 'Droplet', feedback: 'Las grasas no son minerales, y no son la causa de la anemia.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.1.1'], prompt: '¿Qué nutriente principal aportan el **frijol** y el **huevo**?' },
        { options: [
          { id: 'a', text: 'Carbohidratos' },
          { id: 'b', text: 'Proteínas' },
          { id: 'c', text: 'Grasas' },
          { id: 'd', text: 'Vitamina C' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Los carbohidratos, como el arroz y la papa, dan energía.', answer: true },
          { text: 'Un solo alimento tiene todos los nutrientes que el cuerpo necesita.', answer: false, why: 'Ningún alimento los tiene todos: por eso hay que comer variado.' },
          { text: 'El calcio ayuda a formar huesos y dientes fuertes.', answer: true },
          { text: 'Las vitaminas se encuentran sobre todo en los aceites.', answer: false, why: 'Se encuentran sobre todo en frutas y verduras.' },
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
      'Explicar los beneficios de la lactancia para el bebé, la madre, la familia y el ambiente',
      'Calcular el valor económico de la lactancia en un caso hipotético',
    ],
    resumen: [
      'La leche materna tiene agua, proteínas, grasas, azúcar de la leche, vitaminas, minerales y defensas, en la cantidad justa para cada etapa del bebé.',
      'Se recomienda dar solo leche materna durante los primeros 6 meses y, después, combinarla con otros alimentos hasta los 2 años o más.',
      'Beneficios: protege al bebé de diarreas e infecciones, está siempre limpia y a buena temperatura, fortalece el vínculo afectivo, ayuda a la madre a recuperarse y no cuesta dinero ni produce basura.',
      'Para amamantar, la madre necesita buena alimentación y el apoyo de su familia y de su trabajo.',
    ],
    media: {
      id: 's06-cnt-2-lactancia', kind: 'image', title: 'El primer alimento', aspect: '4:3',
      alt: 'Ilustración respetuosa de una madre maya sentada, que amamanta a su bebé envuelta en un perraje, mientras el padre les lleva un vaso de agua.',
      brief: 'Ilustración cálida y respetuosa, sin desnudez explícita: una madre guatemalteca con traje (huipil y corte) sentada en su casa, con el bebé en brazos cubierto parcialmente por un perraje mientras lo amamanta; el padre se acerca con un vaso de agua y una refacción, mostrando apoyo. Colores suaves. Rótulo opcional: "Leche materna: alimento, defensa y amor".',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:5.2.1'], ambito: 'conocer',
          prompt: '¿Cuál es el **primer alimento** de los bebés de todos los mamíferos, incluidos los seres humanos?',
          explain: 'La **leche materna**. Las glándulas mamarias (¿recuerdas? son de secreción externa) la producen después del parto, hecha a la medida de cada especie.' },
        { options: [
          { id: 'a', text: 'Agua con azúcar', icon: 'Droplet', feedback: 'El agua con azúcar no nutre a un bebé y puede enfermarlo.' },
          { id: 'b', text: 'La leche de su madre', icon: 'Milk' },
          { id: 'c', text: 'Atol de maíz', icon: 'Wheat', feedback: 'El atol puede darse más adelante, pero el primer alimento es la leche materna.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.2.1'], ambito: 'conocer', title: 'Un alimento completo y vivo',
          prompt: 'La leche materna no es un alimento cualquiera. Toca las tarjetas.' },
        { icon: 'Milk', body: 'Tiene **todos los nutrientes** que el bebé necesita en sus primeros meses y **cambia** a medida que el bebé crece.', reveal: [
          { icon: 'Salad', front: 'Nutrientes justos', back: '**Agua**, **proteínas**, **grasas**, **azúcar de la leche**, **vitaminas** y **minerales**, en la cantidad justa y fácil de digerir.' },
          { icon: 'Shield', front: 'Defensas', back: 'Contiene **anticuerpos**: defensas de la madre que protegen al bebé de **diarreas**, **infecciones respiratorias** y otras enfermedades.' },
          { icon: 'Sunrise', front: 'El calostro', back: 'Es la **primera leche**, espesa y amarillenta, de los primeros días. Aunque es poca, está **llena de defensas**: es como la primera vacuna del bebé.' },
          { icon: 'Droplets', front: 'Sin agua extra', back: 'En los primeros 6 meses, la leche materna ya tiene toda el agua que el bebé necesita, aun en lugares calurosos.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['cnt', 'l1'], cnb: ['cnt:5.2.1'], ambito: 'conocer', title: 'Lectura',
          prompt: 'Lee el texto informativo y responde. Hay preguntas que se responden con el texto y otras en las que debes pensar.',
          hint: 'Busca las palabras clave en cada párrafo: "6 meses", "defensas", "dinero", "madre".' },
        { genre: 'Texto informativo', heading: 'Leche materna: beneficios para todos', passage:
          'La **Organización Mundial de la Salud** recomienda que, durante los **primeros 6 meses**, los bebés reciban **solo leche materna**, y que después se combine con otros alimentos hasta los **2 años o más**.\n\nPara el **bebé**, la leche materna es el alimento perfecto: tiene los nutrientes justos y defensas que lo protegen de diarreas e infecciones. Siempre está **limpia** y a la **temperatura adecuada**. Además, al mamar, el bebé siente el calor y la voz de su madre, y se fortalece el **vínculo afectivo**.\n\nPara la **madre**, amamantar ayuda a que el útero vuelva a su tamaño después del parto y reduce el riesgo de algunas enfermedades, como ciertos tipos de cáncer de mama y de ovario.\n\nPara la **familia**, la leche materna **no cuesta dinero**: no hay que comprar fórmula, pachas ni combustible para hervir agua. Y para el **ambiente**, no produce latas ni envases que se conviertan en basura.\n\nPara que una madre pueda amamantar, necesita **alimentarse bien**, descansar y recibir **apoyo** de su pareja, su familia y su lugar de trabajo. Si una madre no puede amamantar, el personal de salud le indicará cómo alimentar a su bebé.',
          questions: [
            { q: 'Según el texto, ¿hasta qué edad se recomienda dar solo leche materna?', options: [{ id: 'a', text: 'Hasta los 6 meses' }, { id: 'b', text: 'Hasta la primera semana' }, { id: 'c', text: 'Hasta los 5 años, sin otros alimentos' }], correct: 'a' },
            { q: '¿Por qué la leche materna ayuda a la economía de la familia?', options: [{ id: 'a', text: 'Porque se vende en el mercado' }, { id: 'b', text: 'Porque no hay que comprar fórmula, pachas ni combustible' }, { id: 'c', text: 'Porque el bebé come menos' }], correct: 'b' },
            { q: '¿Qué puedes concluir del último párrafo?', options: [{ id: 'a', text: 'Amamantar es solo responsabilidad de la madre' }, { id: 'b', text: 'La familia y el trabajo también ayudan a que la lactancia sea posible' }, { id: 'c', text: 'Las madres que trabajan no pueden amamantar' }], correct: 'b', why: 'El texto dice que la madre necesita apoyo de su pareja, su familia y su trabajo.' },
          ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.2.1'], ambito: 'conocer',
          prompt: 'Clasifica cada beneficio de la lactancia: ¿para **quién** es principalmente?',
          hint: 'Vuelve a leer: hay un párrafo para el bebé, otro para la madre y otro para la familia y el ambiente.',
          explain: 'La lactancia beneficia a todos: al bebé (nutrición y defensas), a la madre (recuperación y salud) y a la familia y el ambiente (ahorro y menos basura).' },
        { buckets: [
          { id: 'beb', label: 'Bebé', icon: 'Baby', color: 'var(--area-cnt)' },
          { id: 'mad', label: 'Madre', icon: 'Heart', color: 'var(--area-art)' },
          { id: 'fam', label: 'Familia y ambiente', icon: 'Home', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'b1', text: 'Recibe defensas contra la diarrea', bucket: 'beb' },
          { id: 'b2', text: 'El útero vuelve más pronto a su tamaño', bucket: 'mad' },
          { id: 'b3', text: 'No hay que gastar en fórmula ni pachas', bucket: 'fam' },
          { id: 'b4', text: 'Digiere con facilidad un alimento siempre limpio', bucket: 'beb' },
          { id: 'b5', text: 'Menor riesgo de algunos tipos de cáncer', bucket: 'mad' },
          { id: 'b6', text: 'No se producen latas ni envases de basura', bucket: 'fam' },
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
      S.ejemplo(
        { fase: 'construir', areas: ['cnt', 'mat'], cnb: ['cnt:5.2.1'], ambito: 'hacer', title: 'Ejemplo: el valor económico de la lactancia',
          prompt: 'Calcula cuánto ahorra una familia. Los precios son **hipotéticos**: cambian según el lugar y el año.' },
        { icon: 'PiggyBank', problem: 'Supongamos que una lata de fórmula cuesta **Q125** y a un bebé le dura **5 días**. ¿Cuánto costaría alimentarlo con fórmula durante **180 días** (unos 6 meses)?',
          steps: [
            { text: 'Latas necesarias: 180 ÷ 5 = **36 latas**.' },
            { text: 'Costo de la fórmula: 36 × Q125 = **Q4,500**.', why: '36 × 100 = 3,600 y 36 × 25 = 900; 3,600 + 900 = 4,500.' },
            { text: 'Además habría que comprar **pachas** y **combustible** para hervir el agua, y es probable que el bebé se enferme más.' },
          ],
          answer: 'En este caso, la lactancia ahorraría **más de Q4,500** en 6 meses, sin contar pachas, combustible ni medicinas.',
          tip: 'La leche materna tiene un gran valor nutritivo **y** económico.' },
      ),
      S.number(
        { fase: 'aplicar', areas: ['cnt', 'mat'], cnb: ['cnt:5.2.1'], ambito: 'hacer',
          prompt: 'Supongamos que en otra familia una lata de fórmula cuesta **Q120** y dura **una semana**. ¿Cuánto gastarían en **26 semanas** (unos 6 meses)?',
          explain: '26 × Q120 = Q3,120. Con lactancia materna, ese dinero se puede usar en la alimentación de la madre y de toda la familia.' },
        { answer: 3120, unit: 'quetzales', misconceptions: [
          { value: 146, msg: 'Sumaste 26 + 120. Cada semana se compra una lata: hay que multiplicar.' },
          { value: 480, msg: 'Eso sería solo un mes (4 semanas). La pregunta es por 26 semanas.' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:5.2.1'], ambito: 'conocer',
          prompt: 'Una vecina dice que el **calostro** "es leche sucia" y que hay que tirarlo. ¿Qué le responderías?',
          explain: 'El calostro es la primera leche y está **llena de defensas**. Es muy valioso para el recién nacido: no se debe tirar.' },
        { options: [
          { id: 'a', text: 'Que tiene razón, porque es amarillento', icon: 'X', feedback: 'Su color amarillento se debe a que es muy rico en defensas y nutrientes.' },
          { id: 'b', text: 'Que es la primera leche, llena de defensas, y es muy buena para el bebé', icon: 'Shield' },
          { id: 'c', text: 'Que es mejor darle agua con azúcar los primeros días', icon: 'Droplet', feedback: 'El agua con azúcar no nutre y puede enfermar al bebé.' },
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
          { id: 'b', text: 'La familia no gasta en fórmula, pachas ni combustible' },
          { id: 'c', text: 'La madre no necesita comer' },
          { id: 'd', text: 'El bebé no necesita vacunas' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'La leche materna contiene defensas que protegen al bebé de infecciones.', answer: true },
          { text: 'Se recomienda dar solo leche materna durante los primeros 6 meses.', answer: true },
          { text: 'A partir del primer mes, el bebé necesita agua con azúcar además de la leche materna.', answer: false, why: 'En los primeros 6 meses la leche materna cubre todas sus necesidades, incluida el agua.' },
          { text: 'Apoyar a una madre que amamanta es tarea solo de ella.', answer: false, why: 'La pareja, la familia y el lugar de trabajo también deben apoyarla.' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 3. Hábitos nutricionales ───────────────────────── */
  lesson({
    id: 's06-cnt-3',
    title: 'Hábitos que nutren y previenen enfermedades',
    icon: 'Apple',
    minutes: 16,
    gancho: 'En el recreo puedes elegir entre una bolsita de frituras con gaseosa o una tortilla con frijol y una fruta. ¿Cuál te sostiene hasta el almuerzo?',
    objetivos: [
      'Usar la olla familiar guatemalteca para planificar una alimentación variada',
      'Explicar cómo los hábitos nutricionales previenen enfermedades',
      'Proponer cambios concretos en tus propios hábitos',
    ],
    resumen: [
      'Un hábito es algo que haces casi todos los días. Los hábitos nutricionales sanos previenen enfermedades como la anemia, la desnutrición, la caries, la obesidad y, más adelante, la diabetes.',
      'La olla familiar de las Guías Alimentarias para Guatemala muestra qué comer más: cereales, granos y tubérculos, verduras y frutas todos los días; leche, huevos y carnes varias veces por semana; azúcares y grasas en poca cantidad.',
      'Hábitos clave: desayunar, comer variado y a sus horas, frutas y verduras diarias, agua pura en lugar de bebidas azucaradas, poca comida chatarra, y lavarse las manos y lavar los alimentos.',
    ],
    media: {
      id: 's06-cnt-3-olla', kind: 'diagram', title: 'La olla familiar guatemalteca', aspect: '1:1',
      alt: 'Una olla de barro dividida en franjas: abajo, la franja más ancha con maíz, frijol, arroz y papa; luego frutas y verduras; más arriba leche, huevos y carnes; y arriba, la franja más pequeña con azúcar y grasas.',
      brief: 'Ilustración de una olla de barro tradicional vista de frente, dividida en franjas horizontales de distinto tamaño, como en las Guías Alimentarias para Guatemala: base ancha "Cereales, granos y tubérculos" (tortillas, frijol, arroz, papa, yuca); siguiente "Hierbas, verduras y frutas" (güisquil, zanahoria, chipilín, naranja, mango); luego "Leche y derivados, huevos" y "Carnes"; y la franja superior, la más angosta, "Azúcares" y "Grasas". Al costado, un vaso de agua y una persona caminando (actividad física). Rótulos grandes; colores de barro y alimentos reales.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:5.3.1'], ambito: 'ser',
          prompt: '¿Cuál refacción te da energía **por más tiempo** y te ayuda a concentrarte en clase?',
          explain: 'La tortilla con frijol y la fruta combinan carbohidratos, proteína, vitaminas y fibra: dan energía **constante**. Las frituras y la gaseosa dan un "subidón" de azúcar y grasa que pasa rápido.' },
        { layout: 'grid', options: [
          { id: 'a', text: 'Frituras de bolsita y una gaseosa', icon: 'CupSoda', feedback: 'Da energía rápida que se acaba pronto, con mucha sal, grasa y azúcar.' },
          { id: 'b', text: 'Tortilla con frijol y una mandarina', icon: 'Apple' },
          { id: 'c', text: 'Solo dulces', icon: 'Candy', feedback: 'El azúcar sola da energía por muy poco tiempo y daña los dientes.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.3.1'], ambito: 'ser', title: '¿Qué es un hábito nutricional?',
          prompt: 'Un **hábito** es algo que haces casi todos los días, casi sin pensarlo. Los hábitos al comer **previenen o provocan** enfermedades. Toca las tarjetas.' },
        { icon: 'CalendarDays', body: 'Lo que comes **una vez** importa poco; lo que comes **cada día** construye tu salud.', reveal: [
          { icon: 'Sunrise', front: 'Desayunar', back: 'Después de dormir, el cuerpo necesita energía. Desayunar ayuda a **concentrarte** y a no llegar con hambre al recreo.' },
          { icon: 'Salad', front: 'Comer variado', back: 'Varios colores y grupos de alimentos cada día: así recibes **todos los nutrientes**.' },
          { icon: 'GlassWater', front: 'Agua pura', back: 'La mejor bebida. Las gaseosas y los jugos de caja tienen **mucha azúcar**.' },
          { icon: 'Hand', front: 'Higiene', back: '**Lavarte las manos** y **lavar los alimentos** evita parásitos y diarreas que roban nutrientes (¡lo viste en la semana 2!).' },
          { icon: 'ShieldCheck', front: 'Prevención', back: 'Estos hábitos previenen **anemia**, **desnutrición**, **caries**, **obesidad** y, a largo plazo, **diabetes**.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.3.1'], ambito: 'conocer', title: 'La olla familiar',
          prompt: 'Las **Guías Alimentarias para Guatemala** usan una **olla de barro** para mostrar cómo combinar los alimentos. Observa el diagrama de la lección y toca las tarjetas, de abajo hacia arriba.' },
        { icon: 'CookingPot', body: 'Mientras **más ancha** es la franja, **más seguido** hay que comer esos alimentos.', reveal: [
          { icon: 'Wheat', front: 'Base: cereales, granos y tubérculos', back: 'Tortilla, frijol, arroz, papa, yuca. **Todos los días**, en cada tiempo de comida.' },
          { icon: 'Carrot', front: 'Hierbas, verduras y frutas', back: 'Güisquil, zanahoria, chipilín, hierbamora, naranja, mango. **Todos los días**, de varios colores.' },
          { icon: 'Egg', front: 'Leche, huevos y carnes', back: 'Leche, queso, huevo, pollo, pescado, carne, hígado. **Varias veces por semana**.' },
          { icon: 'Candy', front: 'Arriba: azúcares y grasas', back: 'Azúcar, dulces, aceite, manteca. En **poca cantidad**: son la franja más pequeña.' },
          { icon: 'Footprints', front: 'Fuera de la olla', back: 'Tomar **agua pura** y hacer **actividad física** todos los días completan el mensaje.' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.3.1'], ambito: 'conocer',
          prompt: 'Según la olla familiar, ¿con qué frecuencia conviene comer cada alimento?',
          hint: 'Base de la olla y verduras: todos los días. Leche, huevo y carnes: varias veces por semana. La punta: poca cantidad.',
          explain: 'La base y las verduras y frutas van todos los días; los alimentos de origen animal, varias veces por semana; azúcares y grasas, poco.' },
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
        { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.3.1'], ambito: 'conocer', title: 'Comida chatarra y bebidas azucaradas',
          prompt: 'Algunos productos llenan pero **nutren poco**. Toca las tarjetas.' },
        { icon: 'CupSoda', body: 'La llamada **comida chatarra** (frituras de bolsita, golosinas, muchas comidas rápidas) tiene **mucha azúcar, grasa o sal** y pocos nutrientes.', reveal: [
          { icon: 'Candy', front: 'Mucha azúcar', back: 'Causa **caries** y aumenta el riesgo de **obesidad** y, con los años, de **diabetes**.' },
          { icon: 'Droplet', front: 'Mucha grasa', back: 'Aporta mucha energía que el cuerpo guarda si no la usa: aumenta el riesgo de **sobrepeso**.' },
          { icon: 'Waves', front: 'Mucha sal', back: 'Con los años puede subir la **presión de la sangre**.' },
          { icon: 'Scale', front: 'Llenar no es nutrir', back: 'Si comes chatarra, **quitas espacio** a los alimentos que sí te nutren. Una persona puede tener sobrepeso y, a la vez, **anemia**.' },
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
      S.chart(
        { fase: 'aplicar', areas: ['cnt', 'mat'], cnb: ['cnt:5.3.1'], ambito: 'hacer',
          prompt: 'Supongamos que **Yesenia** anotó cuántas **porciones de frutas y verduras** comió cada día. Construye la gráfica con sus datos: lunes 3, martes 2, miércoles 5, jueves 4, viernes 1.',
          explain: 'La gráfica muestra que el viernes fue su día más bajo. Registrar lo que comes ayuda a darte cuenta de tus hábitos y a mejorarlos.' },
        { source: 'Registro de Yesenia: porciones de frutas y verduras por día', unit: 'porciones', max: 6, step: 1,
          categories: [
            { id: 'lu', label: 'Lunes', icon: 'Apple' },
            { id: 'ma', label: 'Martes', icon: 'Apple' },
            { id: 'mi', label: 'Miércoles', icon: 'Apple' },
            { id: 'ju', label: 'Jueves', icon: 'Apple' },
            { id: 'vi', label: 'Viernes', icon: 'Apple' },
          ], data: [3, 2, 5, 4, 1] },
      ),
      S.sort(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:5.3.1'], ambito: 'ser',
          prompt: '¿Es un hábito que **previene** enfermedades o uno que **aumenta el riesgo**?',
          explain: 'Los hábitos sanos se construyen con pequeñas decisiones diarias.' },
        { buckets: [
          { id: 'pre', label: 'Previene enfermedades', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          { id: 'rie', label: 'Aumenta el riesgo', icon: 'AlertTriangle', color: 'var(--c-bad)' },
        ], items: [
          { id: 'h1', text: 'Tomar agua pura en lugar de gaseosa', bucket: 'pre' },
          { id: 'h2', text: 'Salir sin desayunar todos los días', bucket: 'rie' },
          { id: 'h3', text: 'Comer frutas de temporada en la refacción', bucket: 'pre' },
          { id: 'h4', text: 'Comer golosinas en lugar del almuerzo', bucket: 'rie' },
          { id: 'h5', text: 'Lavar las verduras antes de prepararlas', bucket: 'pre' },
          { id: 'h6', text: 'Agregar mucha sal a todas las comidas', bucket: 'rie' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['cnt'], cnb: ['cnt:5.3.1'], ambito: 'ser', title: 'Mi plan de hábitos',
          prompt: 'Escribe **tres hábitos** nutricionales que vas a practicar esta semana. Para cada uno, di **cuándo** lo harás y **qué enfermedad** ayuda a prevenir.' },
        { placeholder: '1. Voy a… (cuándo) … porque previene…',
          model: '1. Voy a tomar agua pura en el recreo en lugar de gaseosa, todos los días; previene la caries y el sobrepeso. 2. Voy a comer una fruta en la refacción, de lunes a viernes; sus vitaminas fortalecen mis defensas. 3. Voy a pedir frijol o hojas verdes en el almuerzo por lo menos tres veces esta semana; su hierro previene la anemia.',
          rubric: ['Propone tres hábitos concretos y posibles', 'Dice cuándo practicará cada uno', 'Relaciona cada hábito con una enfermedad que previene'],
          minWords: 30 },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.3.1'], prompt: 'Según la olla familiar, ¿qué alimentos se deben comer en **menor cantidad**?' },
        { options: [
          { id: 'a', text: 'Tortillas y frijol' },
          { id: 'b', text: 'Verduras y frutas' },
          { id: 'c', text: 'Azúcares y grasas' },
          { id: 'd', text: 'Huevos' },
        ], correct: ['c'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.3.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Desayunar ayuda a concentrarte en la escuela.', answer: true },
          { text: 'Las gaseosas son la mejor bebida para hidratarse.', answer: false, why: 'La mejor bebida es el agua pura; las gaseosas tienen mucha azúcar.' },
          { text: 'Lavarse las manos antes de comer también es un hábito que protege la nutrición.', answer: true },
          { text: 'Una persona con sobrepeso no puede tener anemia.', answer: false, why: 'Sí puede: comer mucho no es lo mismo que comer variado.' },
        ] },
      ),
      cierre({ areas: ['cnt'], cnb: [] },
        ['Clasifico los nutrientes y explico su función', 'Explico los beneficios de la lactancia materna', 'Uso la olla familiar para elegir mejor lo que como'],
        ['Cumpliré mi plan de tres hábitos esta semana', 'Compartiré la olla familiar con mi familia']),
    ],
  }),
];
