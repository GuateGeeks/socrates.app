import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 35 · Unidad 4 "Fortaleciendo nuestro futuro"
 * Tema generador: Nutrir la vida, la memoria y la paz
 * Leche, huevos y carne; medidas y promedio · drogas, VIH, emociones y deporte ·
 * modernización, conflictos mundiales, REMHI/CEH y proyecto de vida · tradiciones, registros y poesía.
 */
export default semana({
  id: 's35',
  unidad: 4,
  semana: 35,
  kind: 'aprendizaje',
  temaGenerador: 'Nutrir la vida, la memoria y la paz',
  title: 'Nutrir la vida, la memoria y la paz',
  subtitle: 'Comer bien, decidir sano, recordar y crear en comunidad',
  icon: 'Sprout',
  color: 'var(--area-cnt)',
  contexto: 'En Huehuetenango, la escuela prepara el "Festival de la vida". En el mercado, las familias compran por libras y por arrobas lo que llevará la refacción; en la cancha se entrena para un torneo sin drogas ni alcohol; en el aula se leen las recomendaciones que Guatemala escribió para no repetir la violencia; y cada grado recopila poemas y relatos de los pueblos mam, q’anjob’al, chuj, akateko, ladino y garífuna. Esta semana aprenderás que una comunidad fuerte se nutre de buena comida, decisiones sanas, memoria y cultura compartida.',
  ejes: ['vida-familiar', 'seguridad', 'multiculturalidad', 'vida-ciudadana'],
  media: {
    id: 's35-portada', kind: 'video', title: 'El Festival de la vida', aspect: '16:9', duration: 60,
    alt: 'Escenas de un festival escolar en Huehuetenango: compra en el mercado con balanza, partido en la cancha, lectura en el aula y presentación de poemas.',
    brief: 'Video o animación 2D de 60 s en Huehuetenango (montañas de los Cuchumatanes al fondo). Escenas: (1) en el mercado, una vendedora pesa queso en una balanza de libras y huevos por docena; (2) en la cancha, niñas y niños practican pases con pique y conducción del balón; un cartel dice "Deporte sí, drogas no"; (3) en el aula, la maestra muestra un libro con la palabra "Memoria" y una paloma; (4) en el escenario, estudiantes con trajes de distintos pueblos recitan un poema. Sobreimpreso: "Una comunidad fuerte se nutre de vida, memoria y paz". Marimba suave, personajes ficticios.',
  },
  badge: { id: 'medalla-s35', name: 'Semilla de paz', icon: 'Sprout', desc: 'Completaste la semana 35 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's35-d1-alimentos-medidas',
      title: 'Leche, huevos y carne: medir para crecer',
      icon: 'Egg',
      minutes: 15,
      day: 1,
      gancho: '¿Cuántas veces a la semana comes huevo, queso o carne? ¿Sabes cuánto pesa una libra de queso?',
      objetivos: ['Describir los beneficios, la cantidad y la frecuencia recomendable de leche, huevos y carne', 'Analizar el impacto social de la desnutrición', 'Estimar y medir con unidades del sistema métrico y del sistema inglés antiguo', 'Calcular el promedio y la moda de un grupo de datos'],
      resumen: [
        'La leche y sus derivados (queso, requesón, yogur) aportan calcio y proteínas para huesos y dientes; conviene consumirlos a diario o casi a diario.',
        'El huevo aporta proteínas de alta calidad y vitaminas; la carne, el pollo, el hígado y el pescado aportan proteínas, hierro y zinc. Se recomiendan varias veces por semana, en porciones del tamaño de la palma de la mano y con poca grasa.',
        'La desnutrición crónica en Guatemala afecta a casi la mitad de niñas y niños menores de 5 años: frena el crecimiento y el aprendizaje, aumenta las enfermedades y limita el desarrollo de todo el país.',
        'Medidas: 1 libra = 16 onzas (unos 454 g); 1 arroba = 25 libras; 1 quintal = 100 libras; 1 kg ≈ 2.2 libras; 1 vara ≈ 84 cm; 1 pulgada ≈ 2.54 cm; 1 galón ≈ 3.8 litros.',
        'Promedio = suma de los datos ÷ cantidad de datos. Moda = el dato que más se repite.',
      ],
      media: {
        id: 's35-d1-mercado', kind: 'image', title: 'En el mercado se mide de muchas formas', aspect: '16:9',
        alt: 'Puesto de mercado con una balanza de libras, un costal rotulado "1 quintal", huevos por docena, un litro de leche y una vara de medir tela.',
        brief: 'Ilustración plana de un mercado municipal de Huehuetenango. En primer plano: vendedora con delantal pesa queso fresco en una balanza de reloj marcada en libras; costal de maíz rotulado "1 quintal = 100 lb"; canasto de huevos con cartel "docena"; botella de leche "1 litro"; galón de agua "1 galón ≈ 3.8 L"; un vendedor de telas mide con una vara de madera ("1 vara ≈ 84 cm"). Etiquetas legibles, colores cálidos, sin marcas.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'pyd'], cnb: ['cnt:5.1.4'], ambito: 'conocer', title: 'Tres alimentos que construyen tu cuerpo',
            prompt: 'La comisión de refacción del festival quiere incluir **leche, huevos y carne**. Toca cada tarjeta para saber qué aportan, cuánto y cada cuánto.' },
          { icon: 'Salad', body: 'Estos alimentos tienen **proteínas**, que construyen y reparan músculos y tejidos. Combínalos con tortilla, frijol, frutas, hierbas y verduras.', reveal: [
            { icon: 'Milk', front: 'Leche y derivados', back: '**Calcio y proteínas** para huesos y dientes fuertes. De preferencia **todos los días**: un vaso de leche, un pedazo de queso o un poco de requesón.' },
            { icon: 'Egg', front: 'Huevos', back: '**Proteínas de alta calidad** y vitaminas. Se pueden comer **varias veces por semana**; son nutritivos y de bajo costo.' },
            { icon: 'Utensils', front: 'Carne, pollo, hígado, pescado', back: '**Proteínas, hierro y zinc**, que previenen la anemia. **Varias veces por semana**, en una porción del tamaño de la **palma de tu mano**, con poca grasa.' },
            { icon: 'ShieldCheck', front: 'Con higiene', back: 'Hierve la leche si no es pasteurizada y cocina bien el huevo y la carne: así evitas infecciones.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.1.4'], ambito: 'conocer',
            prompt: 'Une cada alimento con su **principal beneficio** para la salud.',
            explain: 'Todos aportan proteínas, pero cada uno destaca por algo: la leche por el calcio, la carne y el hígado por el hierro, el huevo por su proteína completa y fácil de conseguir.' },
          { leftTitle: 'Alimento', rightTitle: 'Beneficio principal', pairs: [
            { id: 'lec', left: 'Vaso de leche', leftIcon: 'Milk', right: 'Calcio para huesos y dientes' },
            { id: 'hig', left: 'Hígado de res', leftIcon: 'Utensils', right: 'Mucho hierro contra la anemia' },
            { id: 'hue', left: 'Huevo cocido', leftIcon: 'Egg', right: 'Proteína completa y de bajo costo' },
            { id: 'pes', left: 'Pescado', leftIcon: 'Fish', right: 'Proteínas con grasas saludables' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['cnt', 'ccss', 'mat'], cnb: ['cnt:5.3.4'], ambito: 'conocer',
            prompt: 'Lee el texto y analiza el **impacto social** de los problemas de nutrición.' },
          { genre: 'Texto informativo', heading: 'Cuando falta el alimento, pierde todo el país', passage:
            'La **desnutrición crónica** ocurre cuando un niño o una niña no recibe suficientes nutrientes durante mucho tiempo, sobre todo en sus primeros mil días de vida (desde el embarazo hasta los dos años). Su señal más visible es una **talla baja** para la edad.\n\nEn Guatemala, **casi la mitad** de las niñas y los niños menores de cinco años tiene desnutrición crónica. Es uno de los porcentajes más altos de América, y es más frecuente en zonas rurales y en familias con menos ingresos.\n\nLa desnutrición no afecta solo a una persona. Un niño desnutrido se enferma más, aprende con más dificultad y, de adulto, puede tener menos oportunidades de empleo. Por eso, el país entero pierde: hay más gastos en salud y menos desarrollo. También preocupa el problema contrario: el **sobrepeso**, por comer muchos productos con azúcar, sal y grasa.\n\nMejorar la nutrición es tarea de todos: familias, escuelas, comunidades y el Estado.',
            questions: [
              { q: '¿Cuál es la señal más visible de la desnutrición crónica?', options: [
                { id: 'a', text: 'La talla baja para la edad' },
                { id: 'b', text: 'Tener mucha energía' },
                { id: 'c', text: 'Crecer más rápido' },
              ], correct: 'a' },
              { q: '¿Por qué el texto dice que "pierde todo el país"?', options: [
                { id: 'a', text: 'Porque aumentan los gastos en salud y hay menos desarrollo y oportunidades' },
                { id: 'b', text: 'Porque solo afecta a una persona' },
                { id: 'c', text: 'Porque la comida se vuelve más barata' },
              ], correct: 'a', why: 'El impacto es social: toca la salud, la educación, el empleo y la economía.' },
              { q: 'Si "casi la mitad" de 100 niños tiene desnutrición crónica, ¿aproximadamente cuántos son?', options: [
                { id: 'a', text: 'Cerca de 50' }, { id: 'b', text: 'Cerca de 10' }, { id: 'c', text: 'Cerca de 90' },
              ], correct: 'a' },
            ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['mat', 'ccss'], cnb: ['mat:7.1.1'], ambito: 'conocer', title: 'Medidas del mercado: métrico e inglés antiguo',
            prompt: 'En los mercados de Guatemala conviven **dos sistemas de medida**. Toca cada tarjeta.' },
          { icon: 'Scale', body: 'El **sistema métrico** (gramo, kilogramo, metro, litro) es el oficial y se basa en el 10. Pero en el mercado aún usamos medidas antiguas como la **libra**, la **arroba**, el **quintal** y la **vara**.', reveal: [
            { icon: 'Scale', front: 'Peso', back: '1 libra = **16 onzas** (unos 454 g). 1 arroba = **25 libras**. 1 quintal = **100 libras**. 1 kg ≈ **2.2 libras**.' },
            { icon: 'Ruler', front: 'Longitud', back: '1 vara ≈ **84 cm**. 1 pulgada ≈ **2.54 cm**. 1 pie = **12 pulgadas** (unos 30 cm).' },
            { icon: 'Droplet', front: 'Capacidad', back: '1 litro = **1,000 ml**. 1 galón ≈ **3.8 litros**.' },
            { icon: 'Hand', front: 'Estimar', back: 'Estimar es calcular "a ojo" antes de medir: un huevo pesa unos **50 a 60 g**; un paso largo mide cerca de **1 m**.' },
          ] },
        ),
        S.slider(
          { fase: 'construir', areas: ['mat', 'cnt'], cnb: ['mat:7.1.1'], ambito: 'hacer',
            prompt: '**Convierte**: un costal de maíz trae **1 arroba**. ¿Cuántas **libras** pesa? Mueve el control.',
            hint: 'Recuerda la tarjeta de peso: 4 arrobas forman un quintal de 100 libras.',
            explain: '1 arroba = 25 libras. Por eso 4 arrobas = 100 libras = 1 quintal.' },
          { min: 0, max: 100, step: 5, start: 50, answer: 25, unit: 'libras', visual: 'line', ticks: [{ value: 0, label: '0' }, { value: 50, label: '50 lb' }, { value: 100, label: '1 quintal' }] },
        ),
        S.explain(
          { fase: 'construir', areas: ['mat', 'cnt'], cnb: ['mat:6.4.1'], ambito: 'conocer', title: 'Promedio y moda',
            prompt: 'Supongamos que 10 familias anotaron **cuántas veces comieron huevo** en una semana: **3, 5, 4, 3, 6, 3, 2, 4, 3, 7**.' },
          { icon: 'Sigma', body: 'Dos medidas resumen muchos datos en un solo número.', reveal: [
            { icon: 'Plus', front: 'Promedio (media)', back: 'Suma todo: 3 + 5 + 4 + 3 + 6 + 3 + 2 + 4 + 3 + 7 = **40**. Divide entre 10 datos: 40 ÷ 10 = **4 veces por semana**.' },
            { icon: 'RefreshCw', front: 'Moda', back: 'El dato que **más se repite**: el 3 aparece **4 veces**. La moda es **3**.' },
            { icon: 'Lightbulb', front: '¿Qué nos dice?', back: 'En promedio, estas familias comen huevo 4 veces por semana, pero lo más común es 3 veces.' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'cnt'], cnb: ['mat:7.1.1', 'cnt:5.1.4'], ambito: 'hacer',
            prompt: 'Para la refacción, la comisión compra **3 libras de queso fresco**. La receta de los panes con queso pide las cantidades en **onzas**. ¿Cuántas onzas de queso tienen?',
            hint: '1 libra = 16 onzas.',
            explain: '3 × 16 = 48 onzas. El queso aporta calcio y proteínas a la refacción.' },
          { answer: 48, unit: 'onzas', misconceptions: [{ value: 19, msg: 'Sumaste 3 + 16. Cada libra tiene 16 onzas: multiplica.' }] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:6.4.1'], prompt: 'Boleto de salida: vasos de leche que tomó Sofía cada día de la semana: **2, 1, 2, 3, 2, 0, 4**. ¿Cuál es el **promedio**?' },
          { answer: 2, unit: 'vasos', allowDecimal: true, misconceptions: [{ value: 14, msg: 'Esa es la suma. Ahora divide entre los 7 días.' }] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt', 'mat'], cnb: ['cnt:5.1.4', 'mat:7.1.1'], prompt: '¿Qué afirmación es correcta?' },
          { options: [
            { id: 'a', text: 'La leche aporta calcio, y 1 libra equivale a 16 onzas' },
            { id: 'b', text: 'La carne aporta calcio, y 1 libra equivale a 10 onzas', feedback: 'La carne destaca por el hierro, y la libra tiene 16 onzas.' },
            { id: 'c', text: 'El huevo no tiene proteínas, y 1 quintal son 25 libras', feedback: 'El huevo es rico en proteínas; 25 libras son una arroba.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['cnt', 'mat'], cnb: ['cnt:5.3.4'] }, ['Explico qué aportan la leche, el huevo y la carne', 'Analizo por qué la desnutrición afecta a todo el país', 'Convierto libras, onzas, arrobas y quintales', 'Calculo promedio y moda'],
          ['Revisaré cuántas veces como huevo, leche o carne esta semana', 'Estimaré el peso de tres alimentos antes de pesarlos', 'Calcularé con mi familia el promedio de algo que medimos']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's35-d2-decisiones-sanas',
      title: 'Decisiones sanas, trato digno y deporte',
      icon: 'HeartPulse',
      minutes: 15,
      day: 2,
      gancho: 'Si alguien te ofreciera un cigarro o un trago "para que te veas grande", ¿qué le dirías?',
      objetivos: ['Describir cómo las drogas afectan la salud física y mental', 'Identificar el trato afectivo que merecen las personas con VIH', 'Representar emociones con lenguaje iconográfico', 'Practicar pases con pique, bote, conducción y recepción'],
      resumen: [
        'Las drogas (incluidos el alcohol y el tabaco) dañan la salud física (pulmones, hígado, corazón, cerebro en crecimiento) y la mental (adicción, ansiedad, tristeza, problemas de memoria y concentración).',
        'Compartir jeringas al consumir drogas puede transmitir el VIH y la hepatitis; el alcohol y otras drogas también llevan a tomar decisiones riesgosas.',
        'El VIH NO se transmite por abrazos, besos en la mejilla, compartir platos, baños, útiles ni por picaduras de zancudo. Las personas con VIH merecen respeto, cariño y apoyo; con tratamiento pueden vivir muchos años.',
        'En un cartel, las emociones se expresan con íconos, líneas, formas y colores: curvas hacia arriba y colores cálidos para la alegría; líneas caídas y colores fríos para la tristeza.',
        'Pase por arriba del hombro con pique: brazo atrás, paso con el pie contrario y lanzar hacia el piso para que el bote llegue al compañero.',
      ],
      media: {
        id: 's35-d2-cuerpo', kind: 'diagram', title: 'Lo que las drogas le hacen al cuerpo y a la mente', aspect: '3:4',
        alt: 'Silueta humana con cerebro, pulmones, corazón e hígado señalados, cada uno con el daño que causan las drogas, y a la par un globo de pensamiento con emociones.',
        brief: 'Diagrama educativo con silueta humana neutra de perfil (sin rasgos identificables). Señalar con líneas: CEREBRO "afecta memoria, atención y decisiones; puede causar adicción"; PULMONES "tabaco: tos, asma, cáncer"; CORAZÓN "aumenta la presión"; HÍGADO "alcohol: lo inflama y daña". A la derecha, globo "Salud mental" con íconos: ansiedad, tristeza, aislamiento. Abajo, franja verde "Alternativas: deporte, arte, amistades sanas, pedir ayuda". Sin mostrar drogas, jeringas ni personas consumiendo.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'fc'], cnb: ['cnt:4.1.4'], ambito: 'conocer', title: 'Drogas: un riesgo para cuerpo y mente',
            prompt: 'Una **droga** es una sustancia que cambia cómo funciona el cerebro y el cuerpo. El alcohol y el tabaco también lo son. Toca cada tarjeta.' },
          { icon: 'Brain', body: 'Tu cerebro sigue **desarrollándose** hasta después de los 20 años. Por eso las drogas dañan más a niñas, niños y adolescentes.', reveal: [
            { icon: 'HeartPulse', front: 'Salud física', back: 'Daño a **pulmones** (tabaco), **hígado** (alcohol), **corazón** y **cerebro**. Menos energía para estudiar y hacer deporte.' },
            { icon: 'Brain', front: 'Salud mental', back: '**Adicción** (sentir que no puedes dejarla), ansiedad, tristeza, problemas de **memoria** y **concentración**.' },
            { icon: 'Syringe', front: 'Contagio', back: '**Compartir jeringas** puede transmitir el VIH y la hepatitis. Además, bajo efectos de drogas se toman decisiones riesgosas.' },
            { icon: 'HandHeart', front: 'Pedir ayuda', back: 'Si alguien te ofrece drogas o te preocupa un familiar, **habla con un adulto de confianza**, tu docente o el centro de salud.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.1.4'], ambito: 'conocer',
            prompt: 'Clasifica cada efecto: ¿afecta sobre todo la **salud física** o la **salud mental**?',
            explain: 'Cuerpo y mente están conectados: cuando uno se daña, el otro también sufre. Por eso la mejor decisión es no empezar.' },
          { buckets: [
            { id: 'fis', label: 'Salud física', icon: 'HeartPulse', color: 'var(--area-cnt)' },
            { id: 'men', label: 'Salud mental', icon: 'Brain', color: 'var(--area-l1)' },
          ], items: [
            { id: 'd1', text: 'Tos y dificultad para respirar por fumar', bucket: 'fis' },
            { id: 'd2', text: 'Sentir que no puedes dejar de consumir (adicción)', bucket: 'men' },
            { id: 'd3', text: 'Daño al hígado por el alcohol', bucket: 'fis' },
            { id: 'd4', text: 'Ansiedad y cambios bruscos de ánimo', bucket: 'men' },
            { id: 'd5', text: 'Olvidar lo que se estudió y no poder concentrarse', bucket: 'men' },
            { id: 'd6', text: 'Menos resistencia al correr', bucket: 'fis' },
          ] },
        ),
        S.tf(
          { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:3.5.4'], ambito: 'conocer',
            prompt: 'Sobre el **VIH** circulan muchos mitos. ¿Verdadero o falso?',
            explain: 'El VIH solo se transmite por sangre, relaciones sexuales sin protección y de madre a bebé si no hay control médico. La convivencia diaria NO lo transmite. El miedo sin información lleva a discriminar.' },
          { statements: [
            { text: 'El VIH se transmite al abrazar o saludar de mano.', answer: false, why: 'El contacto diario no transmite el VIH.' },
            { text: 'Compartir el plato o el baño con una persona con VIH no transmite el virus.', answer: true },
            { text: 'Un zancudo puede transmitir el VIH.', answer: false, why: 'Los zancudos no transmiten el VIH.' },
            { text: 'Con tratamiento médico, una persona con VIH puede vivir muchos años y estudiar o trabajar.', answer: true },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['art', 'cnt'], cnb: ['art:2.2.4'], ambito: 'hacer',
            prompt: 'El grado diseña carteles "Deporte sí, drogas no". Une cada **emoción** con el **lenguaje iconográfico** que la representa.',
            explain: 'Los íconos comunican sin palabras: la dirección de las líneas, la forma de la boca y los ojos, y los colores cambian el mensaje de un cartel.',
            media: { id: 's35-d2-emociones', kind: 'image', title: 'Emociones en íconos', aspect: '16:9',
              alt: 'Cuatro caras de íconos: alegría con sonrisa y colores amarillos, tristeza con líneas caídas y azul, enojo con cejas en V y rojo, calma con ojos cerrados y verde.',
              brief: 'Ilustración de 4 íconos grandes estilo pictograma, en fila, cada uno con su fondo de color: ALEGRÍA (boca curva hacia arriba, líneas radiantes, amarillo-naranja), TRISTEZA (cejas y boca caídas, lágrima, azul), ENOJO (cejas en V, líneas en zigzag, rojo), CALMA (ojos cerrados, línea horizontal suave, verde). Debajo, flechas que muestran la dirección de las líneas. Sin texto dentro de las caras.' } },
          { leftTitle: 'Emoción', rightTitle: 'Cómo dibujarla', pairs: [
            { id: 'ale', left: 'Alegría', leftIcon: 'Smile', right: 'Boca curva hacia arriba y colores cálidos' },
            { id: 'tri', left: 'Tristeza', leftIcon: 'CloudRain', right: 'Líneas caídas y colores fríos' },
            { id: 'eno', left: 'Enojo', leftIcon: 'Flame', right: 'Cejas en V y líneas en zigzag rojas' },
            { id: 'cal', left: 'Calma', leftIcon: 'Leaf', right: 'Líneas horizontales suaves y verde' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'cnt'], cnb: ['cnt:3.5.4'], ambito: 'convivir',
            prompt: '¿Qué harías tú?' },
          { scene: { icon: 'Users', text: 'En tu grado se corre el rumor de que la tía de **Fernanda** tiene VIH. Algunos compañeros ya no quieren sentarse con Fernanda ni prestarle sus útiles.' }, options: [
            { id: 'a', icon: 'EyeOff', text: 'Alejarte tú también, "por si acaso"', consequence: 'Fernanda se siente sola y triste. Además, la decisión se basa en un mito: el VIH no se transmite así.', values: ['Miedo sin información'], constructive: false },
            { id: 'b', icon: 'HeartHandshake', text: 'Sentarte con ella y explicar a los demás que el VIH no se transmite por convivir', consequence: 'Fernanda se siente acompañada. Algunos compañeros preguntan a la maestra y aprenden. El rumor pierde fuerza.', values: ['Solidaridad', 'Respeto', 'Valentía'], constructive: true },
            { id: 'c', icon: 'Megaphone', text: 'Pedir a la maestra una charla sobre el VIH y el respeto a la privacidad', consequence: 'El grado aprende datos científicos y entiende que la salud de una familia es un asunto privado. Nadie más es discriminado.', values: ['Respeto', 'Responsabilidad'], constructive: true },
          ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.8', 'ef:2.1.12'], ambito: 'hacer',
            prompt: 'El deporte es una gran alternativa sana. Ordena los pasos del **pase por arriba del hombro con pique**, sobre carrera.',
            explain: 'Practícalo con la mano derecha, luego con la izquierda y después alternándolas. Con pique, el balón debe tocar el piso cerca de dos tercios de la distancia para llegar a la cintura de tu compañero.' },
          { items: [
            { id: 'p1', text: 'Botar el balón mientras avanzas trotando', icon: 'Footprints' },
            { id: 'p2', text: 'Tomar el balón con una mano y llevarlo arriba y atrás del hombro', icon: 'Hand' },
            { id: 'p3', text: 'Dar un paso con el pie contrario a la mano que lanza', icon: 'Footprints' },
            { id: 'p4', text: 'Lanzar hacia el piso para que el pique llegue a tu compañero', icon: 'Target' },
            { id: 'p5', text: 'Repetir con la otra mano y luego alternando', icon: 'RefreshCw' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'cnt'], cnb: ['ef:2.1.16', 'ef:2.1.18'], ambito: 'hacer',
            prompt: 'Circuito de fútbol: 1) **Conduce** el balón con la parte **interna** y luego **externa** de cada pie, alternando, primero quieto y luego avanzando. 2) Tu compañero te lanza el balón: **recíbelo** con la planta, la parte interna, la externa, el frente del pie y el **muslo**, a distintas alturas. Mide tu pulso antes y después.' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después del circuito de conducción y recepción', exercise: { name: 'Conducción con ambos pies y recepción con pie y muslo', icon: 'Footprints', seconds: 90 } },
          ] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.5.4', 'cnt:4.1.4'], prompt: 'Boleto de salida: ¿verdadero o falso?' },
          { statements: [
            { text: 'Las drogas pueden causar adicción, que es un daño a la salud mental.', answer: true },
            { text: 'Hay que alejarse de una persona con VIH para no contagiarse.', answer: false, why: 'La convivencia no transmite el VIH; merece trato afectivo y respeto.' },
            { text: 'El alcohol daña el hígado.', answer: true },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.8'], prompt: 'En el pase por arriba del hombro con la mano **derecha**, ¿con qué pie das el paso?' },
          { options: [
            { id: 'a', text: 'Con el pie izquierdo (el contrario)' },
            { id: 'b', text: 'Con el pie derecho', feedback: 'Dar el paso con el pie del mismo lado quita equilibrio y fuerza.' },
            { id: 'c', text: 'Sin mover los pies', feedback: 'El paso con el pie contrario da fuerza y equilibrio al pase.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['cnt', 'ef'], cnb: ['ef:2.1.12'] }, ['Explico cómo dañan las drogas el cuerpo y la mente', 'Trato con respeto y cariño a las personas con VIH', 'Represento emociones en un cartel', 'Hago pases y recepciones con ambas manos y ambos pies'],
          ['Diré "no, gracias" si me ofrecen alcohol, tabaco u otra droga', 'Practicaré 15 minutos de deporte al día', 'Defenderé a quien sea discriminado por un rumor']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's35-d3-memoria-paz',
      title: 'Un mundo que cambia, una memoria que sana',
      icon: 'Globe',
      minutes: 15,
      day: 3,
      gancho: 'Tus abuelos vivieron sin celular ni internet. ¿Qué cosas cambiaron en el mundo desde que ellos eran niños?',
      objetivos: ['Identificar reformas de modernización en distintos continentes y su relación con la tecnología en América', 'Relacionar conflictos mundiales con Guatemala y valorar las recomendaciones de los informes REMHI y CEH', 'Reconocer aportes de latinoamericanas y latinoamericanos y organizar tu proyecto de vida', 'Usar la tecnología con ética y seguridad'],
      resumen: [
        'Modernizarse fue cambiar con reformas educativas (escuela para todos), fiscales (impuestos para servicios), políticas (constituciones y voto) y económicas (industria y comercio). Ejemplos: la era Meiji en Japón y la Reforma Liberal de 1871 en Guatemala.',
        'En América, la modernización llegó con ferrocarriles, telégrafo, electricidad, el Canal de Panamá y, después, internet.',
        'La Guerra Fría (Estados Unidos contra la Unión Soviética) influyó en América Latina; en Guatemala se relaciona con la caída del gobierno de Jacobo Árbenz en 1954 y con el conflicto armado interno (1960-1996).',
        'Los informes REMHI (1998) y CEH (1999) recomendaron dignificar a las víctimas, buscar a las personas desaparecidas, reparar el daño, educar en derechos humanos y fortalecer la democracia para no repetir la violencia.',
        'Rigoberta Menchú, Miguel Ángel Asturias, Gabriela Mistral y Simón Bolívar son latinoamericanos cuyos aportes inspiran proyectos de vida al servicio de la comunidad.',
      ],
      media: {
        id: 's35-d3-linea', kind: 'diagram', title: 'Línea de tiempo: modernización, conflicto y paz', aspect: '16:9',
        alt: 'Línea de tiempo con hitos: 1868 era Meiji, 1871 Reforma Liberal, 1914 Canal de Panamá, 1947-1991 Guerra Fría, 1954, 1960-1996 conflicto armado, 1996 paz, 1998 REMHI, 1999 CEH.',
        brief: 'Infografía horizontal con dos franjas. ARRIBA "El mundo": 1868 Japón inicia la era Meiji (tren); 1914 se abre el Canal de Panamá (barco); 1947-1991 Guerra Fría (dos bloques enfrentados, sin armas explícitas). ABAJO "Guatemala": 1871 Reforma Liberal (telégrafo y ferrocarril); 1954 cae el gobierno de Árbenz; 1960-1996 conflicto armado interno (franja gris); 1996 firma de la paz (paloma); 1998 informe REMHI "Guatemala: Nunca Más"; 1999 informe CEH "Memoria del Silencio". Colores sobrios, sin imágenes de violencia.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'pyd'], cnb: ['ccss:6.6.4'], ambito: 'conocer', title: '¿Qué es modernizarse?',
            prompt: 'Desde el siglo XIX, muchos países hicieron **reformas** para modernizarse. Toca cada tarjeta.' },
          { icon: 'RefreshCw', body: 'Modernizarse no es solo tener máquinas: es cambiar **cómo se educa, se gobierna, se cobra impuestos y se produce**.', reveal: [
            { icon: 'School', front: 'Reforma educativa', back: 'Escuela pública para más niñas y niños. Ejemplo: **Japón** en la era Meiji (desde 1868) creó un sistema escolar nacional.' },
            { icon: 'Coins', front: 'Reforma fiscal', back: 'Impuestos organizados para pagar servicios públicos, caminos y escuelas.' },
            { icon: 'Vote', front: 'Reforma política', back: '**Constituciones**, división de poderes y ampliación del **voto**, como en muchos países de Europa y América.' },
            { icon: 'Factory', front: 'Reforma económica', back: '**Industria**, bancos y comercio. En Guatemala, la **Reforma Liberal de 1871** impulsó el café, el ferrocarril y el telégrafo, pero con trabajo forzado para muchos campesinos indígenas.' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['ccss', 'pyd'], cnb: ['ccss:6.6.5'], ambito: 'conocer',
            prompt: 'La **tecnología** acompañó la modernización de **América**. Ordena estos avances del más antiguo al más reciente.',
            explain: 'Cada avance acercó a las personas y los mercados: el tren y el telégrafo en el siglo XIX, el canal y la electricidad en el XX, e internet a fines del siglo XX.' },
          { items: [
            { id: 't1', text: 'Telégrafo y primeros ferrocarriles (siglo XIX)', icon: 'Train' },
            { id: 't2', text: 'Apertura del Canal de Panamá (1914)', icon: 'Ship' },
            { id: 't3', text: 'Radio y televisión llegan a muchos hogares (siglo XX)', icon: 'Tv' },
            { id: 't4', text: 'Internet y teléfonos celulares (fines del siglo XX)', icon: 'Smartphone' },
          ], labels: { start: 'Más antiguo', end: 'Más reciente' } },
        ),
        S.reading(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:6.5.4', 'fc:4.5.4'], ambito: 'conocer',
            prompt: 'Lee y relaciona lo que pasaba en el mundo con lo que vivió Guatemala.' },
          { genre: 'Texto informativo', heading: 'Del conflicto mundial a la memoria', passage:
            'Después de la Segunda Guerra Mundial, el mundo se dividió en dos bloques: uno encabezado por **Estados Unidos** y otro por la **Unión Soviética**. A esta rivalidad, que duró de 1947 a 1991, se le llamó **Guerra Fría**.\n\nLa Guerra Fría influyó en América Latina. En Guatemala, en **1954**, el gobierno de Jacobo Árbenz fue derrocado con apoyo de Estados Unidos. En los años siguientes crecieron la desigualdad, la exclusión y la falta de espacios políticos, y comenzó el **conflicto armado interno** (1960-1996), que causó enorme sufrimiento, sobre todo a comunidades indígenas.\n\nDespués de la firma de la paz en 1996, dos informes documentaron lo ocurrido: el **REMHI** "Guatemala: Nunca Más" (1998) y el de la **Comisión para el Esclarecimiento Histórico (CEH)**, "Guatemala: Memoria del Silencio" (1999). Ambos hicieron **recomendaciones**: dignificar y recordar a las víctimas, buscar a las personas desaparecidas, reparar el daño a las familias, enseñar derechos humanos y cultura de paz, y fortalecer las instituciones democráticas.',
            questions: [
              { q: '¿Qué fue la Guerra Fría?', options: [
                { id: 'a', text: 'La rivalidad entre el bloque de Estados Unidos y el de la Unión Soviética' },
                { id: 'b', text: 'Una guerra por el clima frío' },
                { id: 'c', text: 'Un conflicto entre Guatemala y México' },
              ], correct: 'a' },
              { q: '¿Qué relación tiene la Guerra Fría con la historia de Guatemala?', options: [
                { id: 'a', text: 'Influyó en la caída del gobierno de Árbenz en 1954 y en el contexto del conflicto armado' },
                { id: 'b', text: 'Ninguna, Guatemala no fue afectada' },
                { id: 'c', text: 'Provocó la independencia de 1821' },
              ], correct: 'a' },
              { q: '¿Para qué sirven las recomendaciones de los informes?', options: [
                { id: 'a', text: 'Para reparar a las víctimas, recordar la verdad y que la violencia no se repita' },
                { id: 'b', text: 'Para olvidar lo que pasó' },
                { id: 'c', text: 'Para culpar a los estudiantes de hoy' },
              ], correct: 'a', why: 'Recordar con verdad y reparar el daño son pasos para la reconciliación y la paz.' },
            ] },
        ),
        S.match(
          { fase: 'construir', areas: ['fc', 'l1'], cnb: ['fc:5.1.5'], ambito: 'conocer',
            prompt: 'Une a cada persona con su **aporte** a la historia latinoamericana.',
            explain: 'Hombres y mujeres de distintos pueblos y oficios aportaron a la paz, la literatura, la educación y la libertad de América Latina.',
            media: { id: 's35-d3-personajes', kind: 'image', title: 'Voces que inspiran', aspect: '16:9',
              alt: 'Cuatro tarjetas con un símbolo y un nombre cada una: una paloma sobre un güipil, un libro abierto del que salen quetzales, un libro de poemas con un lápiz y un mapa de Sudamérica con una bandera.',
              brief: 'Cuatro tarjetas en estilo grabado en linóleo, SIN rostros ni retratos (solo objetos simbólicos y el nombre escrito): (1) paloma sobre un güipil k’iche’: "Rigoberta Menchú, Nobel de la Paz 1992"; (2) libro abierto del que salen quetzales: "Miguel Ángel Asturias, Nobel de Literatura 1967"; (3) libro de poemas con lápiz y pizarrón escolar: "Gabriela Mistral, Nobel de Literatura 1945"; (4) mapa de Sudamérica con una bandera: "Simón Bolívar, Libertador". Fondo color papel, tipografía clara.' } },
          { leftTitle: 'Persona', rightTitle: 'Aporte', pairs: [
            { id: 'rig', left: 'Rigoberta Menchú (Guatemala)', leftIcon: 'Award', right: 'Premio Nobel de la Paz 1992 por defender los derechos de los pueblos indígenas' },
            { id: 'ast', left: 'Miguel Ángel Asturias (Guatemala)', leftIcon: 'BookOpen', right: 'Premio Nobel de Literatura 1967; escribió inspirado en las leyendas mayas' },
            { id: 'mis', left: 'Gabriela Mistral (Chile)', leftIcon: 'Feather', right: 'Maestra y poeta; primera latinoamericana en ganar el Nobel de Literatura (1945)' },
            { id: 'bol', left: 'Simón Bolívar (Venezuela)', leftIcon: 'Flag', right: 'Dirigió la independencia de varios países de América del Sur' },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['pyd', 'fc'], cnb: ['pyd:3.4.1'], ambito: 'ser',
            prompt: 'La modernización trajo mucha **tecnología**. ¿Cada acción la usa con **ética y seguridad** o **no**?',
            explain: 'Usar la tecnología con ética es respetar a otras personas; con eficiencia es no desperdiciar energía ni recursos; con seguridad es protegerte a ti y a los demás.' },
          { buckets: [
            { id: 'si', label: 'Ética, eficiente y segura', icon: 'ShieldCheck', color: 'var(--c-ok)' },
            { id: 'no', label: 'No es ética ni segura', icon: 'X', color: 'var(--c-hint)' },
          ], items: [
            { id: 'e1', text: 'Pedir permiso antes de publicar la foto de otra persona', bucket: 'si' },
            { id: 'e2', text: 'Compartir tu contraseña con desconocidos', bucket: 'no' },
            { id: 'e3', text: 'Desconectar un aparato eléctrico antes de limpiarlo', bucket: 'si' },
            { id: 'e4', text: 'Dejar la computadora encendida toda la noche sin usarla', bucket: 'no', feedback: 'Desperdicia energía: no es eficiente.' },
            { id: 'e5', text: 'Verificar una noticia antes de reenviarla', bucket: 'si' },
            { id: 'e6', text: 'Burlarse de alguien en un grupo de mensajes', bucket: 'no' },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['fc', 'l1', 'pyd'], cnb: ['fc:5.1.6', 'fc:4.5.4'], ambito: 'ser',
            prompt: 'Inspirándote en las personas que conociste y en las recomendaciones de los informes, escribe tu **proyecto de vida**: una meta **personal**, una **familiar** y una **comunitaria** para los próximos años, y qué harás para lograrlas.' },
          { minWords: 40, placeholder: 'Mi meta personal es… Con mi familia quiero… Para mi comunidad…',
            model: 'Mi meta personal es terminar la secundaria y estudiar para ser enfermera, como mi tía; para lograrlo leeré todos los días. Con mi familia quiero sembrar un huerto para comer más verduras. Para mi comunidad, quiero ayudar a organizar un club de lectura donde también contemos las historias de nuestros abuelos, para que la memoria no se pierda y aprendamos a vivir en paz.',
            rubric: ['Escribo una meta personal, una familiar y una comunitaria', 'Digo qué acciones haré para lograrlas', 'Relaciono mi proyecto con la paz o la memoria de mi comunidad', 'Mis metas son realistas y positivas'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.5.4'], prompt: 'Boleto de salida: ¿cuál es una recomendación de los informes REMHI y CEH para construir la paz?' },
          { options: [
            { id: 'a', text: 'Dignificar a las víctimas, buscar a los desaparecidos y enseñar derechos humanos' },
            { id: 'b', text: 'Prohibir que se hable del pasado', feedback: 'Los informes piden recordar con verdad, no callar.' },
            { id: 'c', text: 'Cerrar las escuelas', feedback: 'Recomiendan lo contrario: educar en paz y derechos humanos.' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.6.4', 'ccss:6.6.5'], prompt: 'Clasifica cada cambio según el tipo de reforma de modernización.' },
          { buckets: [
            { id: 'edu', label: 'Educativa', icon: 'School' },
            { id: 'pol', label: 'Política', icon: 'Vote' },
            { id: 'eco', label: 'Económica y tecnológica', icon: 'Factory' },
          ], items: [
            { id: 'r1', text: 'Crear escuelas públicas en todo el país', bucket: 'edu' },
            { id: 'r2', text: 'Aprobar una constitución con división de poderes', bucket: 'pol' },
            { id: 'r3', text: 'Construir un ferrocarril para exportar café', bucket: 'eco' },
            { id: 'r4', text: 'Ampliar el derecho al voto', bucket: 'pol' },
            { id: 'r5', text: 'Instalar el telégrafo entre ciudades', bucket: 'eco' },
          ] },
        ),
        cierre({ areas: ['fc', 'ccss'], cnb: ['fc:5.1.6'] }, ['Explico qué es modernizarse y doy ejemplos de América', 'Relaciono la Guerra Fría con la historia de Guatemala', 'Valoro las recomendaciones de los informes de memoria', 'Tengo metas para mi proyecto de vida'],
          ['Preguntaré a un adulto mayor qué tecnología llegó cuando era niño', 'Compartiré en casa una recomendación para construir la paz', 'Daré un primer paso hacia mi meta personal esta semana']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's35-d4-voces-versos',
      title: 'Voces y versos de nuestros pueblos',
      icon: 'Feather',
      minutes: 15,
      day: 4,
      gancho: '¿Qué canción, refrán o relato de tu familia te gustaría que no se perdiera nunca?',
      objetivos: ['Interpretar el simbolismo de elementos tradicionales y compilar textos de distintos pueblos sin prejuicios', 'Identificar registros de la lengua e imágenes sensoriales, recursos y ritmo en un poema', 'Completar textos y usar pronombres en inglés', 'Moverte en escena con eficiencia'],
      resumen: [
        'Los elementos tradicionales tienen simbolismo: el maíz representa la vida (en el Popol Wuj los primeros humanos se hacen de maíz); la ceiba une el cielo, la tierra y el inframundo; los barriletes gigantes de Sumpango comunican con los difuntos.',
        'Una antología comunitaria reúne leyendas, canciones, oraciones, recetas y poemas de todos los pueblos, elegidos sin prejuicios ni discriminación.',
        'Registros de la lengua: coloquial (con amistades y familia), literario (poemas y cuentos), técnico o científico (palabras precisas de una ciencia).',
        'Las imágenes sensoriales hacen ver, oír, oler, saborear o tocar; recursos como la personificación dan vida a las cosas. El ritmo depende del número de sílabas y de los acentos.',
        'En inglés, los pronombres sustituyen nombres: Ana → she, Pedro → he, the kite → it, my friends → they.',
      ],
      media: {
        id: 's35-d4-simbolos', kind: 'image', title: 'Símbolos que hablan', aspect: '16:9',
        alt: 'Ilustración con una mazorca de maíz de cuatro colores, una ceiba con raíces y copa enormes, un barrilete gigante y un tambor garífuna.',
        brief: 'Ilustración plana y colorida en cuatro paneles: (1) mazorca con granos amarillos, blancos, rojos y negros; (2) ceiba con raíces profundas y copa al cielo, con tres niveles sugeridos (cielo, tierra, inframundo) con líneas suaves; (3) barrilete gigante circular de papel de china en un cementerio florido de Sumpango, familias mirando; (4) tambor garífuna junto al mar de Livingston. Rótulos: MAÍZ, CEIBA, BARRILETE, TAMBOR. Sin rostros reales identificables.',
      },
      steps: [
        S.match(
          { fase: 'explorar', areas: ['l1', 'ccss'], cnb: ['l1:5.4.3', 'l1:5.4.2'], ambito: 'conocer',
            prompt: 'La antología del festival empieza con los **símbolos** de nuestras culturas. Une cada elemento tradicional con su **simbolismo**.',
            explain: 'Conocer lo que simbolizan los elementos de otras culturas del país nos acerca: el simbolismo se proyecta más allá de un pueblo y enriquece a todos (interculturalidad).' },
          { leftTitle: 'Elemento', rightTitle: 'Simbolismo', pairs: [
            { id: 'mai', left: 'El maíz', leftIcon: 'Wheat', right: 'La vida: en el Popol Wuj los primeros humanos se formaron de maíz' },
            { id: 'cei', left: 'La ceiba', leftIcon: 'TreeDeciduous', right: 'Árbol sagrado que une cielo, tierra e inframundo' },
            { id: 'bar', left: 'Los barriletes gigantes de Sumpango', leftIcon: 'Wind', right: 'Mensajes y comunicación con los seres queridos difuntos' },
            { id: 'tam', left: 'El tambor garífuna', leftIcon: 'Drum', right: 'Memoria africana y caribeña, alegría y resistencia del pueblo garífuna' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['l1', 'pyd', 'fc'], cnb: ['l1:5.4.5', 'l1:5.4.2', 'l1:5.4.4'], ambito: 'hacer',
            prompt: 'Llegaron textos mam, q’anjob’al, chuj, akateko, ladinos y garífunas. Ordena los pasos para **compilar en grupo** la antología de tradiciones.',
            explain: 'Una compilación grupal necesita organización. Al seleccionar, se usan los mismos criterios para todos los textos (calidad, variedad, que sea tradición de la comunidad), sin excluir a nadie por su idioma o su pueblo: eso es seleccionar sin prejuicios ni discriminación.' },
          { items: [
            { id: 'k1', text: 'Repartir tareas: quién recoge leyendas, canciones, recetas y poemas', icon: 'Users' },
            { id: 'k2', text: 'Recoger los textos con las familias y anotar la fuente', icon: 'Mic' },
            { id: 'k2b', text: 'Seleccionar textos de todos los pueblos con los mismos criterios, sin prejuicios', icon: 'Scale' },
            { id: 'k3', text: 'Revisar la ortografía y agregar traducciones al español', icon: 'PenLine' },
            { id: 'k4', text: 'Ordenar por tipo de texto y hacer un índice', icon: 'ListOrdered' },
            { id: 'k5', text: 'Presentar la antología a la comunidad', icon: 'BookOpen' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.sort(
          { fase: 'construir', areas: ['l1', 'cnt'], cnb: ['l1:6.1.3'], ambito: 'conocer',
            prompt: 'En la antología hay textos de distintos **registros de la lengua**. Clasifica cada frase.',
            hint: 'Coloquial = como hablas con tus amigos. Literario = con belleza e imágenes. Técnico = palabras precisas de una ciencia u oficio.',
            explain: 'Elegimos el registro según la situación y la audiencia: no hablamos igual con un amigo que en una exposición de ciencias o en un poema.' },
          { buckets: [
            { id: 'col', label: 'Coloquial', icon: 'MessageCircle' },
            { id: 'lit', label: 'Literario', icon: 'Feather' },
            { id: 'tec', label: 'Técnico o científico', icon: 'FlaskConical' },
          ], items: [
            { id: 'g1', text: '¡Qué chilero quedó el barrilete, vos!', bucket: 'col' },
            { id: 'g2', text: 'La luna peina su cabello de plata sobre el lago', bucket: 'lit' },
            { id: 'g3', text: 'El maíz es una gramínea rica en carbohidratos', bucket: 'tec' },
            { id: 'g4', text: 'Nos vemos al rato en la cancha', bucket: 'col' },
            { id: 'g5', text: 'La ceiba abraza al cielo con sus mil brazos verdes', bucket: 'lit' },
            { id: 'g6', text: 'La fotosíntesis ocurre en los cloroplastos', bucket: 'tec' },
          ] },
        ),
        S.highlight(
          { fase: 'construir', areas: ['l2', 'l1'], cnb: ['l2:5.3.3', 'l2:5.3.4'], ambito: 'conocer',
            prompt: 'En este poema de la antología, toca las **imágenes sensoriales** (lo que se ve, se oye, se huele, se saborea o se toca).',
            explain: '"Olor a tortilla" (olfato), "suena la marimba" (oído), "rojo del atardecer" (vista), "dulce el atol" (gusto) y "tibia la mano" (tacto). La personificación "la marimba ríe" da vida a un objeto.',
            media: { id: 's35-d4-poema', kind: 'audio', title: 'Poema leído en voz alta', duration: 40,
              alt: 'Voz de una niña que lee el poema "Tarde en mi pueblo" con marimba suave de fondo, marcando el ritmo de cada verso.',
              brief: 'Grabación de 40 s: voz de niña de unos 12 años, dicción clara y expresiva, lee el poema "Tarde en mi pueblo" (texto de la actividad). Pausa breve al final de cada verso; subir ligeramente la intensidad en las sílabas acentuadas para que se perciba el ritmo. Marimba muy suave de fondo, sin letra. Sin ecos ni efectos.' } },
          { target: 'imágenes sensoriales', text: 'Tarde en mi pueblo:\nsube el {olor a tortilla},\n{suena la marimba} y ríe,\nel {rojo del atardecer} se enciende,\n{dulce el atol} en el jarro,\n{tibia la mano} de mi abuela.' },
        ),
        S.number(
          { fase: 'aplicar', areas: ['l2', 'art'], cnb: ['l2:5.3.5'], ambito: 'hacer',
            prompt: 'El **ritmo** de un verso depende de cuántas **sílabas** tiene y de dónde cae el **acento**. Aplaude y cuenta las sílabas de este verso: **"La ceiba canta con el viento"**.',
            hint: 'Sepáralo: La-cei-ba-can-ta…',
            explain: 'La / cei / ba / can / ta / con / el / vien / to = 9 sílabas. Al leerlo en voz alta, el acento fuerte cae en "can" y en "vien": ese golpe de voz da el ritmo. En los idiomas mayas, el ritmo también se logra ordenando las palabras según su número de sílabas.' },
          { answer: 9, unit: 'sílabas', misconceptions: [{ value: 5, msg: 'Contaste palabras, no sílabas. Aplaude cada golpe de voz.' }, { value: 8, msg: 'Revisa "cei-ba": son dos sílabas.' }] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l3', 'l1'], cnb: ['l3:4.2.2', 'l3:4.2.3'], ambito: 'hacer',
            prompt: 'English time! Completa el texto sobre el festival. **Sustituye los nombres por pronombres**: _he_ (él), _she_ (ella), _it_ (eso/objeto), _they_ (ellos). Elige también las palabras que faltan.',
            explain: 'Usamos pronombres para no repetir nombres: "Ana makes kites. **She** uses paper." "The kite is big. **It** is red."' },
          { text: 'Ana and Tomás live in Sumpango. [[They]] make giant kites.\nAna paints the paper. [[She]] uses bright colors.\nTomás ties the sticks. [[He]] is very careful.\nThe kite is very [[big]]. [[It]] flies on November 1st.', distractors: ['We', 'small'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['art', 'ef'], cnb: ['art:3.1.3'], ambito: 'hacer',
            prompt: 'El cierre del festival es una **presentación escénica** con poemas y danza. ¿Qué muestra un **movimiento escénico eficiente**? Elige todas las correctas.',
            explain: 'Un buen movimiento escénico se ensaya: todos saben por dónde entrar y salir, usan todo el escenario y se mueven de frente o de perfil al público.' },
          { multiple: true, options: [
            { id: 'a', text: 'Entrar y salir en orden por el lado acordado', icon: 'ListOrdered' },
            { id: 'b', text: 'Colocarse de frente o de perfil al público, no de espaldas', icon: 'Eye' },
            { id: 'c', text: 'Usar todo el espacio del escenario sin chocar', icon: 'Maximize2' },
            { id: 'd', text: 'Quedarse amontonados en una esquina', icon: 'Minus', feedback: 'Así el público no ve a todos y la escena se desordena.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:6.1.3'], prompt: 'Boleto de salida: "La mazorca contiene almidón, una reserva de energía". ¿En qué registro está escrita?' },
          { options: [
            { id: 'a', text: 'Técnico o científico' },
            { id: 'b', text: 'Coloquial', feedback: 'No es como hablas con tus amigos: usa palabras precisas de ciencia.' },
            { id: 'c', text: 'Literario', feedback: 'No busca belleza ni imágenes: informa con precisión.' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.3.3', 'l2:5.3.4'], prompt: 'Clasifica cada imagen sensorial según el sentido que despierta.' },
          { buckets: [
            { id: 'vis', label: 'Vista', icon: 'Eye' },
            { id: 'oid', label: 'Oído', icon: 'Ear' },
            { id: 'olf', label: 'Olfato o gusto', icon: 'Coffee' },
          ], items: [
            { id: 'v1', text: 'El azul profundo del lago', bucket: 'vis' },
            { id: 'v2', text: 'El trueno retumba en la montaña', bucket: 'oid' },
            { id: 'v3', text: 'El aroma del café recién tostado', bucket: 'olf' },
            { id: 'v4', text: 'El canto del cenzontle', bucket: 'oid' },
            { id: 'v5', text: 'Lo salado del mar en los labios', bucket: 'olf' },
          ] },
        ),
        cierre({ areas: ['l1', 'l2'], cnb: ['l1:5.4.5'] }, ['Interpreto símbolos de las culturas de Guatemala', 'Selecciono textos sin prejuicios', 'Reconozco registros e imágenes sensoriales', 'Cuento las sílabas de un verso'],
          ['Recogeré un texto tradicional de mi familia para la antología', 'Escribiré un verso con una imagen sensorial', 'Aprenderé el significado de un símbolo de otro pueblo']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's35-d5-reto',
      title: 'Reto de la semana 35',
      icon: 'Trophy',
      minutes: 14,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste sobre la vida, la memoria y la paz', 'Obtener la medalla "Semilla de paz" (70 % o más)'],
      resumen: ['Superé el reto de la semana 35: nutrición, medidas, promedio, salud, deporte, memoria, modernización y poesía.'],
      media: {
        id: 's35-d5-reto', kind: 'image', title: 'Medalla Semilla de paz', aspect: '1:1',
        alt: 'Medalla dorada con una semilla que brota y cuyas hojas forman una paloma.',
        brief: 'Ilustración de medalla circular dorada 1024×1024: al centro, una semilla de maíz que germina y cuyas dos hojas forman las alas de una paloma. Borde con pequeñas mazorcas y notas musicales. Cinta con los colores de las áreas del CNB. Fondo transparente, sin texto.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.1.4'], prompt: '¿Qué alimento es la mejor fuente de calcio para huesos y dientes?' },
          { options: [{ id: 'a', text: 'Leche o queso' }, { id: 'b', text: 'Aguas gaseosas' }, { id: 'c', text: 'Dulces' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['cnt', 'ccss'], cnb: ['cnt:5.3.4'], prompt: '¿Por qué la desnutrición crónica es un problema de toda la sociedad?' },
          { options: [
            { id: 'a', text: 'Porque afecta la salud, el aprendizaje y las oportunidades, y aumenta los gastos del país' },
            { id: 'b', text: 'Porque solo afecta a una persona' },
            { id: 'c', text: 'Porque hace que los niños crezcan más' },
          ], correct: ['a'] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:7.1.1'], prompt: '¿Cuántas libras hay en 2 quintales de frijol?' },
          { answer: 200, unit: 'libras' }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:6.4.1'], prompt: 'Goles de un equipo en 6 partidos: 2, 1, 3, 1, 4, 1. ¿Cuál es la **moda**?' },
          { answer: 1, unit: 'goles' }),
        S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.1.4', 'cnt:3.5.4'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'El consumo de drogas puede afectar la memoria y la concentración.', answer: true },
            { text: 'El VIH se transmite por compartir un vaso con agua.', answer: false },
            { text: 'Las personas con VIH merecen respeto y cariño.', answer: true },
          ] }),
        S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.16'], prompt: 'Para **conducir** el balón en fútbol alternando los pies, ¿qué partes del pie usas?' },
          { options: [{ id: 'a', text: 'La parte interna y la externa de cada pie' }, { id: 'b', text: 'Solo el talón' }, { id: 'c', text: 'Solo las manos' }], correct: ['a'] }),
        S.match({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:5.1.5'], prompt: 'Une cada persona con su aporte.' },
          { pairs: [
            { id: 'a', left: 'Rigoberta Menchú', right: 'Nobel de la Paz 1992' },
            { id: 'b', left: 'Miguel Ángel Asturias', right: 'Nobel de Literatura 1967' },
            { id: 'c', left: 'Simón Bolívar', right: 'Independencia de países de Sudamérica' },
          ] }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.5.4'], prompt: '¿Qué conflicto mundial se relaciona con la caída del gobierno de Árbenz en 1954?' },
          { options: [{ id: 'a', text: 'La Guerra Fría' }, { id: 'b', text: 'La Revolución Francesa' }, { id: 'c', text: 'La conquista española' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.3.4'], prompt: '"El volcán se pone un sombrero de nubes" da acciones humanas a un objeto. ¿Qué recurso es?' },
          { options: [{ id: 'a', text: 'Personificación' }, { id: 'b', text: 'Registro técnico' }, { id: 'c', text: 'Moda' }], correct: ['a'] }),
        S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.2.3', 'l3:4.2.2'], prompt: 'Complete with the correct pronoun.' },
          { text: 'My grandmother tells stories. [[She]] is very wise.\nMy brothers play football. [[They]] are fast.', distractors: ['He', 'It'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 4 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.1.4'], prompt: '¿Qué mineral aportan la carne y el hígado que ayuda a prevenir la anemia?' },
      { options: [{ id: 'a', text: 'Hierro' }, { id: 'b', text: 'Sal' }, { id: 'c', text: 'Azúcar' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:6.4.1'], prompt: 'Libras de tomate vendidas en 5 días: 10, 12, 8, 14, 6. ¿Cuál es el promedio?' },
      { answer: 10, unit: 'libras' }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:7.1.1'], prompt: '¿Cuántas onzas hay en 2 libras de queso?' },
      { answer: 32, unit: 'onzas' }),
    S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.1.4'], prompt: '¿Efecto de las drogas en la salud física o mental?' },
      { buckets: [{ id: 'f', label: 'Física', icon: 'HeartPulse' }, { id: 'm', label: 'Mental', icon: 'Brain' }],
        items: [{ id: 'a', text: 'Daño a los pulmones', bucket: 'f' }, { id: 'b', text: 'Adicción', bucket: 'm' }, { id: 'c', text: 'Ansiedad', bucket: 'm' }, { id: 'd', text: 'Daño al hígado', bucket: 'f' }] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.5.4'], prompt: '¿Cómo se llama el informe de la CEH publicado en 1999?' },
      { options: [{ id: 'a', text: 'Guatemala: Memoria del Silencio' }, { id: 'b', text: 'Popol Wuj' }, { id: 'c', text: 'Constitución Política' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.6.4'], prompt: 'Crear escuelas públicas en todo el país es un ejemplo de reforma…' },
      { options: [{ id: 'a', text: 'Educativa' }, { id: 'b', text: 'Fiscal' }, { id: 'c', text: 'Militar' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.4.3'], prompt: 'Según el Popol Wuj, ¿de qué se formaron los primeros seres humanos?' },
      { options: [{ id: 'a', text: 'De maíz' }, { id: 'b', text: 'De piedra' }, { id: 'c', text: 'De papel' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:6.1.3'], prompt: '"¡Vos, qué chilero tu barrilete!" está en registro…' },
      { options: [{ id: 'a', text: 'Coloquial' }, { id: 'b', text: 'Científico' }, { id: 'c', text: 'Técnico' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.3.5', 'l2:5.3.3'], prompt: '¿Cuántas sílabas tiene el verso "Canta la lluvia en el tejado"? (no juntes vocales de palabras distintas)' },
      { answer: 10, unit: 'sílabas' }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:2.2.4'], prompt: 'Para expresar alegría en un cartel, ¿qué conviene usar?' },
      { options: [{ id: 'a', text: 'Curvas hacia arriba y colores cálidos' }, { id: 'b', text: 'Líneas caídas y colores grises' }, { id: 'c', text: 'Cejas en V y zigzag rojo' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.12', 'ef:2.1.8'], prompt: 'En el pase con pique, ¿hacia dónde se lanza el balón?' },
      { options: [{ id: 'a', text: 'Hacia el piso, para que rebote y llegue al compañero' }, { id: 'b', text: 'Directo al techo' }, { id: 'c', text: 'Hacia atrás' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:3.4.1'], prompt: '¿Cuál es un uso ético y seguro de la tecnología?' },
      { options: [{ id: 'a', text: 'Verificar una noticia antes de compartirla' }, { id: 'b', text: 'Publicar fotos de otros sin permiso' }, { id: 'c', text: 'Compartir tu contraseña' }], correct: ['a'] }),
  ],
});
