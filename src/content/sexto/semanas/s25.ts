import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 25 · Unidad 3 "Valorando nuestra convivencia"
 * Tema generador: Caminar sanos, cuidar la memoria
 * Frutas, hierbas y lactancia · enfermedades de la nutrición y de las drogas · seguridad en la actividad física ·
 * fuentes de la historia, Prehistoria y aportes grecolatinos · patrimonio · grupo juvenil, derechos y transparencia.
 */
export default semana({
  id: 's25',
  unidad: 3,
  semana: 25,
  kind: 'aprendizaje',
  temaGenerador: 'Caminar sanos, cuidar la memoria',
  title: 'Caminar sanos, cuidar la memoria',
  subtitle: 'Nutrición, prevención, historia, patrimonio y participación',
  icon: 'Footprints',
  color: 'var(--area-ccss)',
  contexto: 'El grupo juvenil de una comunidad de Tecpán, Chimaltenango, organiza una caminata al sitio arqueológico de Iximché, antigua capital del pueblo kaqchikel. Para lograrlo deben preparar una refacción saludable, cuidar la seguridad del grupo, investigar la historia del lugar y rendir cuentas claras del dinero que reúnan. Esta semana descubrirás que una comunidad que se cuida, recuerda su historia y decide con transparencia convive mejor.',
  ejes: ['vida-ciudadana', 'multiculturalidad', 'seguridad', 'vida-familiar'],
  media: {
    id: 's25-portada', kind: 'video', title: 'Rumbo a Iximché', aspect: '16:9', duration: 60,
    alt: 'Un grupo de jóvenes camina por un sendero entre milpas y pinos hasta llegar a las plazas y templos de un sitio arqueológico.',
    brief: 'Video o animación 2D de 60 s. Un grupo juvenil mixto (niñas y niños kaqchikeles y ladinos, con chalecos de colores) sale al amanecer de su comunidad, camina por un sendero entre milpas y pinos con mochilas y botellas de agua, hace una pausa para comer fruta y llega a las plazas de piedra y juegos de pelota de un sitio arqueológico del altiplano. Sobreimpresos: "Comemos sano", "Caminamos seguros", "Cuidamos la memoria". Música de marimba y chirimía suave. Sin personas reales identificables ni logotipos.',
  },
  badge: { id: 'medalla-s25', name: 'Caminante de la memoria', icon: 'Footprints', desc: 'Completaste la semana 25 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's25-d1-nutricion',
      title: 'Energía verde para el camino',
      icon: 'Apple',
      minutes: 14,
      day: 1,
      gancho: '¿Qué frutas o hierbas comiste esta semana? ¿Cuántas veces?',
      objetivos: ['Describir los beneficios de frutas, verduras y hierbas, y cuántas comer', 'Explicar cómo la lactancia materna protege la vida de los bebés', 'Reconocer el daño de la desnutrición, la anorexia y la bulimia', 'Resolver problemas con fracciones y decimales', 'Escribir un párrafo con su estructura'],
      resumen: [
        'Frutas, verduras y hierbas aportan vitaminas, minerales, fibra y agua. Se recomienda comer al menos cinco porciones al día, todos los días.',
        'La leche materna protege al bebé de diarreas e infecciones respiratorias; por eso la lactancia reduce las enfermedades y las muertes de bebés.',
        'La desnutrición frena el crecimiento y baja las defensas. La anorexia y la bulimia son trastornos graves de la alimentación que dañan el corazón, los huesos y otros órganos; necesitan ayuda médica y apoyo familiar.',
        'Un párrafo tiene una oración principal, oraciones de apoyo y una oración de cierre; empieza con mayúscula y termina en punto y aparte.',
      ],
      media: {
        id: 's25-d1-canasta', kind: 'image', title: 'Canasta de colores', aspect: '4:3',
        alt: 'Canasta de mercado con frutas, verduras y hierbas guatemaltecas, cada grupo con una etiqueta de su beneficio.',
        brief: 'Fotografía o ilustración realista de una canasta de mimbre sobre un petate en un mercado del altiplano. Contenido: mangos, papaya, naranjas, bananos, zanahorias, güisquil, tomates, manojos de chipilín, hierba mora y bledo. Etiquetas pequeñas: "Vitaminas: defensas", "Fibra: digestión", "Minerales: sangre y huesos", "Agua: hidratación". Luz natural, colores vivos, sin marcas.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'ef'], cnb: ['cnt:5.1.3'], ambito: 'conocer', title: 'Lo que dan frutas, verduras y hierbas',
            prompt: 'Para caminar hasta Iximché se necesita energía y buenas defensas. Toca cada tarjeta y descubre por qué las frutas, verduras y hierbas no pueden faltar.' },
          { icon: 'Salad', body: 'La recomendación es comer **al menos cinco porciones al día** de frutas y verduras, **todos los días**. Una porción es, por ejemplo, una naranja mediana o una taza de verduras cocidas.', reveal: [
            { icon: 'Shield', front: 'Vitaminas', back: 'Fortalecen las **defensas**. La naranja y el mango tienen vitamina C; la zanahoria, vitamina A para la vista.' },
            { icon: 'Leaf', front: 'Hierbas verdes', back: 'El chipilín, la hierba mora y el bledo aportan **hierro y otros minerales** que ayudan a prevenir la anemia.' },
            { icon: 'Wheat', front: 'Fibra', back: 'Ayuda a la **digestión** y da sensación de llenura.' },
            { icon: 'Droplets', front: 'Agua', back: 'La sandía, la papaya y el pepino ayudan a **hidratar** el cuerpo en la caminata.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.1.3'], ambito: 'conocer',
            prompt: 'Clasifica cada alimento de la refacción según su **beneficio principal**.',
            explain: 'Todas las frutas y verduras aportan varias cosas a la vez; aquí elegimos la más destacada de cada una.' },
          { buckets: [
            { id: 'def', label: 'Defensas (vitaminas)', icon: 'Shield', color: 'var(--c-ok)' },
            { id: 'san', label: 'Sangre (hierro)', icon: 'Droplet', color: 'var(--area-cnt)' },
            { id: 'hid', label: 'Hidratación (agua)', icon: 'Droplets', color: 'var(--area-l1)' },
          ], items: [
            { id: 'a1', text: 'Naranja', icon: 'Apple', bucket: 'def' },
            { id: 'a2', text: 'Mango', icon: 'Apple', bucket: 'def' },
            { id: 'a3', text: 'Chipilín', icon: 'Leaf', bucket: 'san' },
            { id: 'a4', text: 'Hierba mora', icon: 'Leaf', bucket: 'san', feedback: 'Las hierbas de hoja verde oscuro son ricas en hierro.' },
            { id: 'a5', text: 'Sandía', icon: 'Droplets', bucket: 'hid' },
            { id: 'a6', text: 'Pepino', icon: 'Carrot', bucket: 'hid' },
          ] },
        ),
        S.recipe(
          { fase: 'construir', areas: ['mat', 'cnt'], cnb: ['mat:5.1.2', 'cnt:5.1.3'], ambito: 'hacer',
            prompt: 'La receta de **ensalada de frutas** es para **6** personas, pero caminarán **9**. Calcula las cantidades.',
            hint: 'De 6 a 9 se multiplica por 1.5 (o por 3/2).',
            explain: 'Multiplicar por 1.5 es sumar la cantidad original y su mitad: 3 tazas + 1.5 = 4.5 tazas.' },
          { dish: 'Ensalada de frutas con limón', icon: 'Apple', baseServings: 6, targetServings: 9, ingredients: [
            { name: 'Mangos', icon: 'Apple', qty: 2, unit: 'mangos' },
            { name: 'Papaya picada', icon: 'Salad', qty: 3, unit: 'tazas' },
            { name: 'Limones', icon: 'Circle', qty: 4, unit: 'limones' },
            { name: 'Miel', icon: 'Droplet', qty: 0.5, unit: 'taza' },
          ], ask: [1, 2, 3] },
        ),
        S.reading(
          { fase: 'construir', areas: ['cnt', 'fc', 'l1'], cnb: ['cnt:5.2.3', 'cnt:5.3.3'], ambito: 'conocer', prompt: 'Lee el texto informativo y responde.',
            media: { id: 's25-d1-lactancia', kind: 'diagram', title: 'Escudos para crecer', aspect: '16:9',
              alt: 'Diagrama con dos columnas: a la izquierda, un bebé protegido por un escudo de leche materna; a la derecha, un niño con talla baja y defensas débiles por desnutrición.',
              brief: 'Infografía en dos columnas, estilo plano amable. Izquierda: mamá indígena cargando a su bebé en perraje (sin mostrar el pecho) y un gran escudo con los textos "Menos diarreas", "Menos infecciones respiratorias", "Crece protegido". Derecha: silueta de un niño junto a una regla de talla, con flechas hacia abajo "Crecimiento", "Defensas", "Energía para aprender" bajo el título "Desnutrición". Pie: "Buena alimentación desde el inicio = más vida". Nada de imágenes de niños enfermos ni cuerpos delgados extremos.' } },
          { genre: 'Texto informativo', heading: 'Nutrición que protege la vida', passage:
            'Durante los primeros seis meses, la **leche materna** es el único alimento que un bebé necesita. Contiene anticuerpos que lo defienden de **diarreas** e **infecciones respiratorias**, que son causas importantes de enfermedad y muerte en bebés. Por eso, donde más bebés reciben lactancia, menos bebés se enferman y mueren.\n\nLa **desnutrición** ocurre cuando el cuerpo no recibe los nutrientes que necesita. En la niñez puede frenar el crecimiento en talla, bajar las defensas y dificultar el aprendizaje. Guatemala tiene una de las tasas de desnutrición crónica infantil más altas de América Latina.\n\nOtras enfermedades relacionadas con la nutrición son la **anorexia** y la **bulimia**. En ellas, la persona tiene una relación dañina con la comida y con su cuerpo: deja de comer o come en exceso y luego intenta eliminar lo que comió. Dañan el corazón, los huesos, los dientes y el estómago. No son un capricho: son enfermedades que necesitan atención médica y el apoyo cariñoso de la familia.',
            questions: [
              { q: '¿Por qué la lactancia materna reduce la mortalidad infantil?', options: [
                { id: 'a', text: 'Porque sus anticuerpos protegen al bebé de diarreas e infecciones' },
                { id: 'b', text: 'Porque hace que el bebé duerma más' },
                { id: 'c', text: 'Porque sustituye las vacunas' },
              ], correct: 'a', why: 'La leche materna protege, pero no reemplaza las vacunas: ambas son necesarias.' },
              { q: '¿Qué consecuencia de la desnutrición menciona el texto?', options: [
                { id: 'a', text: 'Frena el crecimiento en talla' },
                { id: 'b', text: 'Mejora la memoria' },
                { id: 'c', text: 'Aumenta las defensas' },
              ], correct: 'a' },
              { q: 'Si un amigo deja de comer por miedo a engordar, ¿qué es lo mejor que puedes hacer?', options: [
                { id: 'a', text: 'Burlarte para que reaccione' },
                { id: 'b', text: 'Escucharlo con cariño y avisar a un adulto de confianza' },
                { id: 'c', text: 'Guardar el secreto aunque empeore' },
              ], correct: 'b', why: 'Son enfermedades serias: pedir ayuda a un adulto es una forma de cuidar a tu amigo.' },
            ] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['l2', 'cnt'], cnb: ['l2:5.2.2'], ambito: 'hacer',
            prompt: 'Un **párrafo** bien construido tiene una **oración principal** (la idea central), **oraciones de apoyo** y una **oración de cierre**. Ordena este párrafo para el boletín del grupo juvenil.',
            hint: 'La oración principal presenta el tema; la de cierre concluye con "Por eso…".',
            explain: 'Estructura externa: sangría, mayúscula al inicio, punto y seguido entre oraciones y punto y aparte al final. Estructura interna: principal → apoyo → cierre.' },
          { items: [
            { id: 'o1', text: 'Las frutas y hierbas son la mejor refacción para una caminata.' },
            { id: 'o2', text: 'Aportan vitaminas que fortalecen las defensas.' },
            { id: 'o3', text: 'Además, frutas como la sandía ayudan a mantenernos hidratados.' },
            { id: 'o4', text: 'Por eso, en nuestra caminata llevaremos ensalada de frutas en lugar de golosinas.' },
          ], labels: { start: 'Oración principal', end: 'Oración de cierre' } },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'cnt'], cnb: ['mat:5.1.2'], prompt: 'Supongamos que la libra de naranjas cuesta **Q3.50**. El grupo compra **4.5 libras**. ¿Cuánto pagan?',
            hint: 'Multiplica 3.50 × 4.5. Puedes hacerlo como 3.50 × 4 + 3.50 × 0.5.',
            explain: '3.50 × 4 = 14.00 y 3.50 × 0.5 = 1.75. En total, Q15.75.' },
          { answer: 15.75, allowDecimal: true, unit: 'Q', misconceptions: [{ value: 8, msg: 'Sumaste 3.50 + 4.5. Hay que multiplicar el precio por la cantidad de libras.' }, { value: 14, msg: 'Olvidaste la media libra: faltan Q1.75.' }] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.1.3', 'cnt:5.3.3'], prompt: 'Boleto de salida: ¿qué recomendación es correcta?' },
          { options: [
            { id: 'a', text: 'Comer al menos cinco porciones de frutas y verduras todos los días' },
            { id: 'b', text: 'Comer frutas solo cuando estamos enfermos', feedback: 'Las frutas protegen cuando se comen a diario, no solo al enfermar.' },
            { id: 'c', text: 'Dejar de comer para estar más sano', feedback: 'Dejar de comer causa desnutrición y puede ser señal de un trastorno como la anorexia.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['cnt', 'mat'], cnb: ['cnt:5.2.3', 'cnt:5.3.3', 'mat:5.1.2'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'La lactancia materna ayuda a reducir las diarreas en los bebés.', answer: true },
            { text: 'La bulimia es un capricho que se quita solo.', answer: false, why: 'Es una enfermedad que necesita atención médica y apoyo familiar.' },
            { text: '3/4 de 20 mangos son 15 mangos.', answer: true, why: '20 ÷ 4 = 5; 5 × 3 = 15.' },
          ] },
        ),
        cierre({ areas: ['cnt', 'l2'], cnb: ['cnt:5.1.3'] }, ['Explico por qué comer frutas, verduras y hierbas todos los días', 'Reconozco el daño de la desnutrición, la anorexia y la bulimia', 'Escribo párrafos con oración principal, apoyo y cierre'],
          ['Comeré una fruta o verdura más cada día', 'Pediré ayuda a un adulto si alguien que quiero deja de comer', 'Compartiré en casa por qué la lactancia protege a los bebés']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's25-d2-decisiones-seguras',
      title: 'Decisiones que protegen en el camino',
      icon: 'ShieldCheck',
      minutes: 14,
      day: 2,
      gancho: 'Si en una excursión alguien te ofrece un cigarro "para aguantar el frío", ¿qué harías?',
      objetivos: ['Identificar enfermedades que puede causar el consumo de drogas', 'Reconocer causas y efectos en un texto y la estructura de una narración', 'Practicar medidas de seguridad en la actividad física', 'Proponer actividades recreativas de bajo impacto ambiental', 'Usar palabras de orden en inglés'],
      resumen: [
        'El consumo de drogas daña la salud: el tabaco causa cáncer de pulmón y bronquitis; el alcohol daña el hígado (cirrosis); compartir jeringas para inyectarse drogas transmite VIH y hepatitis; los inhalantes dañan el cerebro.',
        'Un texto narrativo cuenta hechos en orden: inicio, nudo y desenlace. Su intención es relatar y entretener, y a veces deja una enseñanza.',
        'Antes de la actividad física: revisar el equipo y el espacio, calentar, llevar agua, usar protección solar y seguir a la persona responsable.',
        'Senderismo, caminatas y paseos en canoa son actividades de bajo impacto ambiental si no dejamos basura ni dañamos plantas y animales.',
      ],
      media: {
        id: 's25-d2-sendero', kind: 'animation', title: 'Un sendero seguro', aspect: '16:9', duration: 45,
        alt: 'Animación de un grupo que revisa su equipo, calienta, camina en fila por un sendero señalizado y recoge su basura.',
        brief: 'Animación 2D de 45 s con estilo de cuaderno ilustrado. Secuencia: (1) lista de equipo que se marca: agua, gorra, bloqueador, botiquín, bolsa para basura; (2) el grupo hace ejercicios de calentamiento; (3) camina en fila por un sendero con rótulos, la guía adelante y otro adulto atrás; (4) una canoa en un lago con todos usando chaleco salvavidas; (5) recogen su basura antes de irse. Textos: "Revisa", "Calienta", "Camina en grupo", "Protégete", "No dejes huella".',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'fc'], cnb: ['cnt:4.1.3'], ambito: 'conocer', title: 'Lo que las drogas le hacen al cuerpo',
            prompt: 'Las **drogas** son sustancias que cambian el funcionamiento del cuerpo y de la mente. Algunas son legales para personas adultas, como el tabaco y el alcohol, pero también causan enfermedades. Toca cada tarjeta.' },
          { icon: 'HeartPulse', body: 'Decir **no** protege tu salud. Si alguien te presiona, aléjate y busca a un adulto de confianza.', reveal: [
            { icon: 'Wind', front: 'Tabaco', back: 'Daña los **pulmones**: causa bronquitis, enfisema y **cáncer de pulmón**.' },
            { icon: 'Droplet', front: 'Alcohol', back: 'Daña el **hígado** (cirrosis) y el cerebro; aumenta los accidentes.' },
            { icon: 'Syringe', front: 'Drogas inyectadas', back: 'Compartir jeringas transmite **VIH** y **hepatitis**.' },
            { icon: 'Brain', front: 'Inhalantes', back: 'Oler pegamento o solventes daña el **cerebro** y los nervios.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:4.1.3'], prompt: 'Une cada consumo con la enfermedad que puede provocar.',
            explain: 'Cada droga afecta con más fuerza a ciertos órganos, pero todas dañan la salud en general.' },
          { leftTitle: 'Consumo', rightTitle: 'Enfermedad posible', pairs: [
            { id: 'tab', left: 'Fumar cigarrillos', leftIcon: 'Wind', right: 'Cáncer de pulmón' },
            { id: 'alc', left: 'Beber alcohol en exceso', leftIcon: 'Droplet', right: 'Cirrosis del hígado' },
            { id: 'iny', left: 'Compartir jeringas', leftIcon: 'Syringe', right: 'VIH y hepatitis' },
            { id: 'inh', left: 'Inhalar pegamento', leftIcon: 'Brain', right: 'Daño en el cerebro' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'cnt', 'fc'], cnb: ['l1:5.1.5', 'l1:4.3.3', 'cnt:4.1.3'], ambito: 'conocer', prompt: 'Lee este relato y responde.' },
          { genre: 'Cuento', heading: 'El frío de la madrugada', passage:
            'Aquella madrugada, el grupo juvenil salió de Tecpán rumbo a Iximché. Hacía tanto frío que a Tono le temblaban las manos.\n\nA medio camino, un muchacho que no era del grupo se acercó y le ofreció un cigarro. "Para que se te quite el frío", le dijo. Tono dudó. Recordó que su abuelo tosía todas las noches desde que fumaba de joven. Entonces respiró hondo y respondió: "No, gracias. Mejor me tomo un atol".\n\nCuando llegaron a la plaza de Iximché, el sol ya calentaba las piedras. Tono compartió su atol con Ixchel y los dos se rieron de lo rojas que tenían las orejas. Esa tarde, Tono le contó a su abuelo que había dicho que no. El abuelo lo abrazó fuerte.',
            questions: [
              { q: '¿Qué ocurre en el **nudo** del cuento?', options: [
                { id: 'a', text: 'El grupo sale de Tecpán' },
                { id: 'b', text: 'Un desconocido le ofrece un cigarro a Tono y él debe decidir' },
                { id: 'c', text: 'El abuelo abraza a Tono' },
              ], correct: 'b', why: 'El nudo es el problema o conflicto; el inicio presenta la situación y el desenlace la resuelve.' },
              { q: '¿Cuál es la **causa** de que Tono dijera que no?', options: [
                { id: 'a', text: 'Recordó que su abuelo tosía desde que fumaba de joven' },
                { id: 'b', text: 'Ya no tenía frío' },
                { id: 'c', text: 'No le gustaba el muchacho' },
              ], correct: 'a' },
              { q: '¿Cuál es la **intención** principal de este texto narrativo?', options: [
                { id: 'a', text: 'Dar instrucciones para una caminata' },
                { id: 'b', text: 'Relatar una historia que deja una enseñanza' },
                { id: 'c', text: 'Vender cigarros' },
              ], correct: 'b' },
            ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['ef', 'cnt'], cnb: ['ef:3.1.4'], ambito: 'hacer',
            prompt: 'Antes de la caminata y del paseo en canoa, el grupo revisa las **medidas de seguridad**. ¿Cada acción es **segura** o **riesgosa**?',
            explain: 'La seguridad se planifica: revisar el equipo, conocer el lugar, calentar e hidratarse evita lesiones y accidentes.' },
          { buckets: [
            { id: 'seg', label: 'Segura', icon: 'ShieldCheck', color: 'var(--c-ok)' },
            { id: 'rie', label: 'Riesgosa', icon: 'AlertTriangle', color: 'var(--area-cnt)' },
          ], items: [
            { id: 'm1', text: 'Usar chaleco salvavidas en la canoa', icon: 'Sailboat', bucket: 'seg' },
            { id: 'm2', text: 'Calentar los músculos antes de caminar', icon: 'PersonStanding', bucket: 'seg' },
            { id: 'm3', text: 'Llevar agua, gorra y bloqueador', icon: 'Sun', bucket: 'seg' },
            { id: 'm4', text: 'Separarse del grupo para tomar un atajo', icon: 'Route', bucket: 'rie', feedback: 'Separarse del grupo en un lugar desconocido puede hacer que te pierdas o te lastimes.' },
            { id: 'm5', text: 'Jugar pelota junto a un barranco', icon: 'Mountain', bucket: 'rie' },
            { id: 'm6', text: 'Usar una canoa con agua adentro sin revisarla', icon: 'Waves', bucket: 'rie' },
          ] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l3', 'ef'], cnb: ['l3:3.3.3'], ambito: 'conocer',
            prompt: 'English time! Completa las instrucciones de seguridad con las palabras de **orden cronológico**: _First_ (primero), _Then_ (luego), _Next_ (después), _Finally_ (al final).',
            explain: 'Estas palabras ordenan las instrucciones en el tiempo, igual que "primero, luego, después, al final" en español.' },
          { text: '[[First]], check your water and your cap. [[Then|Next]], warm up your legs. [[Next|Then]], walk in a line with the guide. [[Finally]], pick up all your trash.',
            distractors: ['Yesterday'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['ef', 'cnt'], cnb: ['ef:2.2.6', 'ef:2.2.2'], ambito: 'hacer',
            prompt: 'Propón una **actividad recreativa** para la llegada a Iximché que use **movimientos coordinados** (saltar, lanzar, girar, equilibrarse) y que sea de **bajo impacto ambiental**. Explica cómo se juega y qué cuidado del lugar incluye.',
            hint: 'Piensa en una ronda, una carrera de relevos en el campo o un juego de equilibrio. No debe dañar las ruinas, las plantas ni dejar basura.' },
          { minWords: 30, placeholder: 'Mi actividad se llama… Se juega así…',
            model: 'Mi actividad se llama "Relevos del quetzal". Se juega en el campo abierto, lejos de los templos. En equipos mixtos, cada persona salta en un pie hasta un cono, gira, y regresa lanzando una pelota de trapo a la siguiente. Al terminar, cada equipo recoge cinco basuras del área verde. Así nos movemos coordinados y cuidamos el lugar.',
            rubric: ['Describe cómo se juega paso a paso', 'Incluye al menos dos movimientos coordinados', 'Explica cómo evitar dañar el lugar (bajo impacto)', 'Menciona una medida de seguridad'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.1.3'], prompt: 'Boleto de salida: ¿qué enfermedades pueden adquirirse al **compartir jeringas** para consumir drogas?' },
          { options: [
            { id: 'a', text: 'VIH y hepatitis' },
            { id: 'b', text: 'Resfriado y gripe', feedback: 'Estas se transmiten por el aire; las jeringas compartidas transmiten infecciones por sangre, como VIH y hepatitis.' },
            { id: 'c', text: 'Caries', feedback: 'Las caries tienen que ver con la higiene de los dientes.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ef', 'l1'], cnb: ['ef:3.1.4', 'ef:2.2.2', 'l1:5.1.5'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'En una canoa siempre se debe usar chaleco salvavidas.', answer: true },
            { text: 'Una caminata es de bajo impacto si dejamos la basura escondida entre las plantas.', answer: false, why: 'Bajo impacto significa no dejar huella: la basura se lleva de regreso.' },
            { text: 'En un texto narrativo, el desenlace es la parte donde se resuelve el problema.', answer: true },
          ] },
        ),
        cierre({ areas: ['cnt', 'ef'], cnb: ['ef:3.1.4'] }, ['Identifico enfermedades causadas por el consumo de drogas', 'Reconozco inicio, nudo y desenlace en un relato', 'Aplico medidas de seguridad en la actividad física'],
          ['Diré "no, gracias" si me ofrecen alguna droga y buscaré a un adulto', 'Revisaré mi equipo y el espacio antes de hacer deporte', 'Traeré de regreso mi basura cuando salga de paseo']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's25-d3-huellas-pasado',
      title: 'Huellas del pasado',
      icon: 'Landmark',
      minutes: 15,
      day: 3,
      gancho: 'Si dentro de 500 años alguien quisiera saber cómo vivías, ¿qué objetos tuyos le servirían?',
      objetivos: ['Describir las fuentes de la historia: documentos y monumentos', 'Explicar cómo se desplazaban los seres humanos en la Prehistoria', 'Identificar aportes de la cultura grecolatina al mundo', 'Valorar y conservar el patrimonio cultural', 'Distinguir la prosa del verso'],
      resumen: [
        'La historia se reconstruye con fuentes: escritas (documentos, periódicos, revistas, cartas) y materiales o monumentales (templos, estelas, plazas, cerámica).',
        'En la Prehistoria los grupos humanos eran nómadas: se desplazaban siguiendo animales y plantas, vivían en cuevas y campamentos. La teoría más aceptada dice que llegaron a América desde Asia por el estrecho de Bering.',
        'Grecia aportó la democracia, la filosofía, el teatro, la geometría y los Juegos Olímpicos; Roma aportó el derecho romano, el latín (de donde viene el español) y el uso del arco en puentes y acueductos.',
        'El patrimonio cultural (sitios, danzas, idiomas, saberes) es de todos: se conserva sin rayar ni llevarse piezas, y transmitiéndolo a las nuevas generaciones.',
        'La prosa se escribe en renglones seguidos; el verso, en líneas cortas que pueden tener ritmo y rima.',
      ],
      media: {
        id: 's25-d3-iximche', kind: 'image', title: 'Plaza de Iximché', aspect: '16:9',
        alt: 'Vista amplia de las plazas de piedra y templos bajos de Iximché rodeados de pinos y cipreses, con visitantes caminando por los senderos.',
        brief: 'Ilustración panorámica realista de un sitio arqueológico del altiplano inspirado en Iximché: plazas cubiertas de grama, templos escalonados de poca altura de piedra clara, un juego de pelota y bosque de pinos alrededor. Visitantes pequeños (familia y grupo escolar) caminando por senderos marcados con cuerdas. Un rótulo genérico "Respeta el patrimonio: no subas ni rayes". Cielo despejado, luz de mañana.',
      },
      steps: [
        S.sort(
          { fase: 'explorar', areas: ['ccss', 'l1'], cnb: ['ccss:6.1.3'], ambito: 'conocer',
            prompt: 'La historia es una ciencia que investiga el pasado con **fuentes**. Clasifica lo que el grupo podría consultar sobre Iximché.',
            hint: '¿Tiene palabras escritas o es una construcción u objeto?',
            explain: 'Las fuentes escritas nos dan relatos y fechas; los monumentos muestran cómo se construía, se organizaba y se creía. Juntas permiten entender mejor el pasado.' },
          { buckets: [
            { id: 'doc', label: 'Fuentes escritas (documentos)', icon: 'ScrollText', color: 'var(--area-l1)' },
            { id: 'mon', label: 'Monumentos y objetos', icon: 'Landmark', color: 'var(--area-ccss)' },
          ], items: [
            { id: 'h1', text: 'Un periódico que informó sobre las excavaciones del sitio', bucket: 'doc' },
            { id: 'h2', text: 'Una revista de historia con artículos sobre los kaqchikeles', bucket: 'doc' },
            { id: 'h3', text: 'Crónicas escritas en la época colonial', bucket: 'doc' },
            { id: 'h4', text: 'Los templos y plazas de piedra', bucket: 'mon' },
            { id: 'h5', text: 'El juego de pelota', bucket: 'mon' },
            { id: 'h6', text: 'Vasijas de cerámica encontradas en el sitio', bucket: 'mon', feedback: 'Los objetos antiguos también son fuentes: nos cuentan qué comían, cómo cocinaban y qué creían.' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['ccss', 'cnt'], cnb: ['ccss:6.2.3'], ambito: 'conocer', title: 'Los primeros caminantes',
            prompt: 'Mucho antes de las ciudades mayas, los seres humanos ya caminaban grandes distancias. Toca cada tarjeta para seguir su viaje en la **Prehistoria**.',
            media: { id: 's25-d3-bering', kind: 'animation', title: 'El largo viaje hacia América', aspect: '16:9', duration: 50,
              alt: 'Mapa animado que muestra grupos humanos cruzando de Asia a América por un puente de tierra y bajando lentamente hacia Centroamérica.',
              brief: 'Animación de mapa de 50 s, estilo papel antiguo. (1) Globo girando hasta mostrar Asia y América casi unidas por Beringia, con hielo alrededor; (2) pequeñas figuras de un grupo nómada con pieles y lanzas siguiendo manadas de animales; (3) flechas punteadas que bajan por América del Norte hasta Centroamérica durante miles de años; (4) cierre en el altiplano de Guatemala con un campamento y una milpa. Texto: "Hace miles de años". Narración sencilla y subtítulos. Sin violencia de cacería explícita.' } },
          { icon: 'Footprints', body: 'Los grupos **nómadas** no tenían casa fija: iban adonde había comida y agua.', reveal: [
            { icon: 'Tent', front: 'Nómadas', back: 'Cazaban, pescaban y **recolectaban** frutos. Vivían en **cuevas** y campamentos.' },
            { icon: 'Snowflake', front: 'Estrecho de Bering', back: 'Según la teoría más aceptada, durante la época de hielo cruzaron de **Asia a América** por un puente de tierra.' },
            { icon: 'Route', front: 'Hacia el sur', back: 'Durante **miles de años** se dispersaron por todo el continente, hasta Centroamérica y América del Sur.' },
            { icon: 'Sprout', front: 'Sedentarios', back: 'Al **cultivar** el maíz y otras plantas, se quedaron en un lugar y formaron aldeas.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['ccss', 'l2'], cnb: ['ccss:6.3.3'], ambito: 'conocer',
            prompt: 'En la antigüedad, Grecia y Roma hicieron aportes que todavía usamos. Une cada aporte con un ejemplo de hoy.',
            explain: 'Grecia (democracia de Atenas, Juegos Olímpicos, teatro) y Roma (latín, derecho, arcos y acueductos) influyeron en todo el mundo, incluso en el idioma que hablas.' },
          { leftTitle: 'Aporte grecolatino', rightTitle: 'Hoy lo vemos en…', pairs: [
            { id: 'dem', left: 'Democracia (Grecia)', leftIcon: 'Vote', right: 'Elegir al gobierno escolar votando' },
            { id: 'oli', left: 'Juegos Olímpicos (Grecia)', leftIcon: 'Medal', right: 'Atletas de muchos países que compiten cada cuatro años' },
            { id: 'lat', left: 'Latín (Roma)', leftIcon: 'Languages', right: 'Muchas palabras del español, como "agua" (de aqua)' },
            { id: 'der', left: 'Derecho romano', leftIcon: 'Gavel', right: 'Leyes escritas que todos deben cumplir' },
            { id: 'arc', left: 'Arco y acueducto (Roma)', leftIcon: 'Landmark', right: 'Puentes y arcos de edificios coloniales' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['art', 'ccss'], cnb: ['art:3.3.1'], ambito: 'conocer',
            prompt: 'El patrimonio también son las **manifestaciones culturales vivas**. Une cada una con su significado o función.',
            explain: 'Cada manifestación cumple una función: recordar a los ancestros, contar la historia o celebrar la identidad de un pueblo.' },
          { leftTitle: 'Manifestación', rightTitle: 'Significado o función', pairs: [
            { id: 'rab', left: 'Rabinal Achí (Baja Verapaz)', leftIcon: 'Drum', right: 'Drama danzado maya que narra un conflicto entre dos pueblos; es patrimonio de la humanidad' },
            { id: 'bar', left: 'Barriletes gigantes (Sumpango y Santiago Sacatepéquez)', leftIcon: 'Wind', right: 'Recordar y honrar a los difuntos el 1 de noviembre' },
            { id: 'yur', left: 'Día del Pueblo Garífuna (26 de noviembre)', leftIcon: 'Ship', right: 'Celebrar la llegada garífuna a Guatemala con música y danza' },
            { id: 'pal', left: 'Palo volador', leftIcon: 'TreePine', right: 'Ceremonia y danza en la que los voladores giran alrededor de un tronco alto' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['art', 'fc', 'ccss'], cnb: ['art:3.3.5', 'art:3.3.2'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
          { scene: { icon: 'Landmark', text: 'En Iximché, un compañero quiere **escribir su nombre** con una piedra en un muro antiguo y llevarse un pedacito de cerámica "de recuerdo".' }, options: [
            { id: 'a', icon: 'EyeOff', text: 'Dejar que lo haga; es solo un pedacito', consequence: 'Si cada visitante hace lo mismo, en pocos años el sitio pierde piezas y muros que nunca se recuperan.', values: ['Indiferencia'], constructive: false },
            { id: 'b', icon: 'Camera', text: 'Proponerle tomar una foto o dibujar la pieza en lugar de llevársela', consequence: 'Tu compañero se queda con un recuerdo sin dañar nada, y la pieza sigue contando su historia a otros.', values: ['Respeto', 'Creatividad', 'Conservación'], constructive: true },
            { id: 'c', icon: 'Users', text: 'Explicarle que el patrimonio es de todos y avisar al guía', consequence: 'El guía explica por qué está prohibido y el grupo entiende que cuidar el sitio es cuidar la memoria del pueblo kaqchikel.', values: ['Responsabilidad', 'Ciudadanía'], constructive: true },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1', 'art'], cnb: ['l1:5.1.6', 'art:3.3.2'], ambito: 'hacer',
            prompt: 'Lee los dos textos que escribió el grupo sobre Iximché. ¿Cuál está escrito en **verso**?\n\n**A.** _Iximché es un sitio arqueológico de Chimaltenango. Tiene plazas, templos y un juego de pelota rodeados de pinos._\n\n**B.** _Piedra antigua, plaza callada, / bajo los pinos duerme tu historia; / te cuido hoy con mi mirada / para que vivas en la memoria._',
            explain: 'El texto B está en verso: líneas cortas separadas (aquí con /), con ritmo y rima (callada-mirada, historia-memoria). El texto A está en prosa: renglones seguidos.' },
          { options: [
            { id: 'b', text: 'El texto B' },
            { id: 'a', text: 'El texto A', feedback: 'El texto A se escribe en renglones seguidos, sin ritmo ni rima: es prosa.' },
            { id: 'c', text: 'Los dos', feedback: 'Solo el B tiene versos con ritmo y rima.' },
          ], correct: ['b'] },
        ),
        S.reading(
          { fase: 'aplicar', areas: ['l3', 'ccss'], cnb: ['l3:3.2.1'], ambito: 'conocer', prompt: 'English time! Lee esta noticia corta y responde.' },
          { genre: 'Short news', heading: 'Students clean an ancient city', passage:
            'TECPÁN — On Saturday, a youth group of 30 students visited Iximché, an ancient Kaqchikel city. They walked 2 kilometers from their town. At the site, they learned about its history and picked up trash near the parking area. "We want to take care of our heritage," said one student.',
            questions: [
              { q: 'How many students visited Iximché?', options: [{ id: 'a', text: '30' }, { id: 'b', text: '2' }, { id: 'c', text: '13' }], correct: 'a' },
              { q: 'What did they do at the site?', options: [{ id: 'a', text: 'They learned about its history and picked up trash' }, { id: 'b', text: 'They played football' }, { id: 'c', text: 'They sold food' }], correct: 'a' },
            ] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.1.3', 'ccss:6.2.3', 'ccss:6.3.3'], prompt: 'Boleto de salida: ¿verdadero o falso?' },
          { statements: [
            { text: 'Un templo antiguo es una fuente de la historia.', answer: true },
            { text: 'Los grupos nómadas vivían siempre en el mismo lugar.', answer: false, why: 'Los nómadas se desplazaban siguiendo los animales y las plantas.' },
            { text: 'La democracia es un aporte de la antigua Grecia.', answer: true },
            { text: 'El español no tiene ninguna relación con el latín.', answer: false, why: 'El español proviene del latín que hablaban los romanos.' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['art', 'l1'], cnb: ['art:3.3.5', 'art:3.3.1'], prompt: '¿Qué acción ayuda a **conservar** el patrimonio cultural guatemalteco?' },
          { options: [
            { id: 'a', text: 'Aprender una danza o un relato de tus abuelos y enseñarlo a otros' },
            { id: 'b', text: 'Llevarse piedras de un sitio arqueológico', feedback: 'Sacar piezas destruye el patrimonio y la información que guarda.' },
            { id: 'c', text: 'Dejar de hablar el idioma de tu familia', feedback: 'Los idiomas también son patrimonio: se conservan usándolos.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['ccss', 'art'], cnb: ['art:3.3.2'] }, ['Distingo fuentes escritas y monumentales de la historia', 'Explico cómo llegaron y se desplazaron los primeros pobladores de América', 'Participo en el cuidado del patrimonio cultural'],
          ['Preguntaré a mi familia por una tradición que debamos conservar', 'Respetaré los sitios arqueológicos que visite', 'Escribiré un verso sobre un lugar histórico de mi región']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's25-d4-grupo-juvenil',
      title: 'Un grupo juvenil con cuentas claras',
      icon: 'Users',
      minutes: 15,
      day: 4,
      gancho: 'Si tu grado junta dinero para una excursión, ¿cómo sabrían todos en qué se gastó?',
      objetivos: ['Describir el papel del grupo juvenil', 'Identificar derechos y obligaciones de la ciudadanía en democracia', 'Revisar la transparencia en el manejo del dinero', 'Resolver problemas con varias operaciones', 'Presentar resultados usando nexos y juzgando qué información es relevante'],
      resumen: [
        'El grupo juvenil es un espacio donde niñas, niños y jóvenes se organizan, desarrollan habilidades, sirven a su comunidad y practican la democracia.',
        'En una democracia, la ciudadanía tiene derechos (opinar, asociarse, elegir y ser electo) y obligaciones (cumplir las leyes, respetar los derechos de otros, contribuir con impuestos).',
        'Transparencia es informar con claridad y a tiempo cuánto dinero entró, en qué se gastó y mostrar los comprobantes. En Guatemala existe una ley de acceso a la información pública.',
        'Para presentar resultados: título, pregunta, cómo se investigó, resultados (tabla o gráfica), conclusiones y fuentes. Las preposiciones y conjunciones (con, para, desde, y, pero, porque) unen las ideas.',
      ],
      media: {
        id: 's25-d4-asamblea', kind: 'image', title: 'Asamblea del grupo juvenil', aspect: '4:3',
        alt: 'Jóvenes reunidos en un salón comunal; la tesorera muestra en un papelógrafo una tabla de ingresos y gastos y todos levantan la mano para votar.',
        brief: 'Ilustración de un salón comunal con sillas plásticas en semicírculo. Al frente, una joven tesorera señala un papelógrafo con la tabla "Ingresos | Gastos | Saldo" y una carpeta de facturas abierta. Participantes diversos (niñas y niños mayas, ladinos y un joven con muletas) levantan la mano. Pared con cartel "Cuentas claras, amistades largas". Estilo plano, colores cálidos, sin logotipos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['fc', 'ccss'], cnb: ['fc:3.3.2'], ambito: 'convivir', title: '¿Para qué sirve un grupo juvenil?',
            prompt: 'El grupo que organiza la caminata a Iximché es un **grupo juvenil**. Toca cada tarjeta para conocer qué gana una persona al participar.' },
          { icon: 'Users', body: 'Un grupo juvenil es una pequeña **escuela de ciudadanía**: se aprende a proponer, decidir y rendir cuentas.', reveal: [
            { icon: 'Sparkles', front: 'Realización personal', back: 'Descubres **talentos**: hablar en público, organizar, dibujar, llevar cuentas.' },
            { icon: 'HeartHandshake', front: 'Servicio', back: 'El grupo **ayuda a la comunidad**: limpiezas, campañas de salud, actividades culturales.' },
            { icon: 'Vote', front: 'Democracia', back: 'Se eligen **directivas**, se vota y se respetan los acuerdos de la mayoría y los derechos de la minoría.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['fc'], cnb: ['fc:3.3.3'], ambito: 'convivir', prompt: 'En un país democrático, ¿cada enunciado es un **derecho** o una **obligación** de la ciudadanía?',
            explain: 'Derechos y obligaciones van juntos: si exijo que respeten mi opinión, también debo respetar la de los demás.' },
          { buckets: [
            { id: 'der', label: 'Derecho', icon: 'Scale', color: 'var(--area-fc)' },
            { id: 'obl', label: 'Obligación', icon: 'ClipboardCheck', color: 'var(--area-ccss)' },
          ], items: [
            { id: 'd1', text: 'Expresar libremente mi opinión', bucket: 'der' },
            { id: 'd2', text: 'Organizarme con otras personas en asociaciones', bucket: 'der' },
            { id: 'd3', text: 'Elegir y ser electo', bucket: 'der' },
            { id: 'd4', text: 'Cumplir las leyes', bucket: 'obl' },
            { id: 'd5', text: 'Respetar los derechos de los demás', bucket: 'obl' },
            { id: 'd6', text: 'Contribuir a los gastos públicos pagando impuestos', bucket: 'obl' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['mat', 'fc'], cnb: ['mat:5.1.1', 'fc:3.5.1'], ambito: 'hacer',
            prompt: 'La tesorera presenta las cuentas de la caminata. Construye la gráfica de **gastos** con los datos de la tabla.',
            hint: 'Cada barra sube de 20 en 20.',
            explain: 'Una gráfica permite que todos vean de un vistazo en qué se usó el dinero. Mostrarla en asamblea es un acto de transparencia.' },
          { categories: [
            { id: 'tra', label: 'Transporte de regreso', icon: 'Bus' },
            { id: 'fru', label: 'Frutas y atol', icon: 'Apple' },
            { id: 'bot', label: 'Botiquín', icon: 'Stethoscope' },
            { id: 'ent', label: 'Entradas', icon: 'Landmark' },
          ], data: [300, 160, 60, 100], max: 320, step: 20, unit: 'Q', source: 'Gastos de la caminata (supuestos): transporte Q300, frutas y atol Q160, botiquín Q60, entradas Q100' },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'fc'], cnb: ['mat:5.1.1', 'fc:3.5.1'], prompt: 'Supongamos que el grupo vendió **125 refacciones a Q6** cada una y recibió una **donación de Q250**. Gastó **Q620** (lo de la gráfica). ¿Cuánto dinero **queda** en caja?',
            hint: 'Tres operaciones: multiplica, suma y luego resta.',
            explain: '125 × 6 = 750; 750 + 250 = 1,000; 1,000 − 620 = Q380. Ese saldo también debe informarse.' },
          { answer: 380, unit: 'Q', misconceptions: [{ value: 130, msg: 'Olvidaste sumar la donación de Q250.' }, { value: 1000, msg: 'Ese es el total de ingresos: falta restar los gastos.' }] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['l1', 'ccss'], cnb: ['l1:4.3.5', 'ccss:5.3.3'], ambito: 'hacer',
            prompt: 'El grupo prepara la **presentación de resultados** de su investigación "¿Cómo vivían los kaqchikeles en Iximché?". Juzga si cada dato es **relevante** para ese propósito o **no relevante**.',
            explain: 'Una información es relevante cuando responde a la pregunta de la investigación. Lo demás puede ser interesante, pero distrae al público.' },
          { buckets: [
            { id: 'rel', label: 'Relevante', icon: 'Target', color: 'var(--c-ok)' },
            { id: 'no', label: 'No relevante', icon: 'X', color: 'var(--area-cnt)' },
          ], items: [
            { id: 'r1', text: 'Iximché fue capital del pueblo kaqchikel', bucket: 'rel' },
            { id: 'r2', text: 'Tenía plazas, templos y juegos de pelota', bucket: 'rel' },
            { id: 'r3', text: 'Las vasijas encontradas muestran cómo cocinaban', bucket: 'rel' },
            { id: 'r4', text: 'El bus de regreso era de color azul', bucket: 'no' },
            { id: 'r5', text: 'A Tono le gusta más el atol que el café', bucket: 'no' },
          ] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l2', 'ccss'], cnb: ['l2:5.2.1', 'ccss:5.3.3'], ambito: 'hacer',
            prompt: 'Completa el párrafo de **conclusiones** con **preposiciones** (con, para, desde) y **conjunciones** (y, pero, porque), que funcionan como nexos entre palabras y oraciones.',
            explain: 'Las preposiciones unen palabras (caminamos desde Tecpán); las conjunciones unen ideas u oraciones (fue difícil, pero valió la pena).' },
          { text: 'Caminamos [[desde]] Tecpán hasta Iximché [[con]] mucho entusiasmo. Aprendimos sobre los kaqchikeles [[y]] limpiamos el área. Fue cansado, [[pero]] valió la pena [[porque]] ahora valoramos más nuestra historia.',
            distractors: ['ante', 'ni'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['pyd', 'mat'], cnb: ['pyd:3.3.1'], ambito: 'emprender',
            prompt: 'El grupo quiere producir **fruta deshidratada** para vender y financiar la próxima caminata. ¿Qué **ventajas** les da usar un **secador solar** en lugar de secar la fruta al aire libre? Elige **todas** las correctas.',
            explain: 'La tecnología bien elegida mejora los procesos productivos: ahorra tiempo, mejora la calidad e higiene y reduce pérdidas.' },
          { multiple: true, options: [
            { id: 'a', text: 'Seca más rápido', icon: 'Timer' },
            { id: 'b', text: 'Protege la fruta del polvo y los insectos', icon: 'ShieldCheck' },
            { id: 'c', text: 'Usa energía del sol, que es gratuita y renovable', icon: 'Sun' },
            { id: 'd', text: 'Hace que la fruta ya no necesite lavarse', icon: 'X', feedback: 'La higiene sigue siendo necesaria: la fruta se lava antes de secarla.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:5.1.2', 'mat:5.1.1'], prompt: 'Boleto de salida: el grupo tenía Q380. Gastó **1/4** en un botiquín para la escuela. ¿Cuánto dinero le **queda**?' },
          { answer: 285, unit: 'Q', misconceptions: [{ value: 95, msg: 'Q95 es lo que se gastó (1/4 de 380). Falta restarlo: 380 − 95.' }] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.5.1', 'fc:3.3.2', 'fc:3.3.3'], prompt: '¿Qué acción muestra **transparencia** en un grupo juvenil?' },
          { options: [
            { id: 'a', text: 'Presentar ingresos, gastos y comprobantes a todos los miembros' },
            { id: 'b', text: 'Que solo la tesorera sepa cuánto dinero hay', feedback: 'Si solo una persona conoce las cuentas, no hay transparencia.' },
            { id: 'c', text: 'Romper las facturas después de comprar', feedback: 'Las facturas son la prueba de cada gasto: deben guardarse.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['fc', 'mat'], cnb: ['fc:3.3.2'] }, ['Explico qué aporta un grupo juvenil', 'Distingo derechos y obligaciones ciudadanas', 'Resuelvo problemas con varias operaciones y presento cuentas claras'],
          ['Llevaré un registro de ingresos y gastos si manejo dinero de un grupo', 'Participaré en un grupo de mi escuela o comunidad', 'Usaré nexos para que mis presentaciones se entiendan mejor']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's25-d5-reto',
      title: 'Reto de la semana 25',
      icon: 'Trophy',
      minutes: 13,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Caminante de la memoria" (70 % o más)'],
      resumen: ['Superé el reto de la semana 25: nutrición, prevención, historia, patrimonio y participación.'],
      media: {
        id: 's25-d5-reto', kind: 'image', title: 'Medalla Caminante de la memoria', aspect: '1:1',
        alt: 'Medalla dorada con huellas de pies que suben hacia un templo escalonado bajo un sol.',
        brief: 'Ilustración de medalla circular dorada con relieve: camino de huellas que sube hacia un templo maya escalonado de poca altura, con un sol radiante detrás y dos pinos a los lados. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.1.3'], prompt: '¿Qué hierba guatemalteca es rica en hierro y ayuda a prevenir la anemia?' },
          { options: [{ id: 'a', text: 'Chipilín' }, { id: 'b', text: 'Café' }, { id: 'c', text: 'Azúcar' }], correct: ['a'] }),
        S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.2.3', 'cnt:5.3.3', 'cnt:4.1.3'], prompt: '¿Verdadero o falso?' },
          { statements: [{ text: 'La lactancia materna protege a los bebés de infecciones.', answer: true }, { text: 'La anorexia es una enfermedad relacionada con la nutrición.', answer: true }, { text: 'Fumar protege los pulmones del frío.', answer: false }] }),
        S.match({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.3.3', 'ccss:6.1.3'], prompt: 'Une cada elemento con lo que corresponde.' },
          { pairs: [{ id: 'a', left: 'Democracia', right: 'Aporte de Grecia' }, { id: 'b', left: 'Latín', right: 'Aporte de Roma' }, { id: 'c', left: 'Estela de piedra', right: 'Fuente monumental' }, { id: 'd', left: 'Periódico antiguo', right: 'Fuente escrita' }] }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.2.3'], prompt: 'Según la teoría más aceptada, ¿por dónde llegaron los primeros pobladores a América?' },
          { options: [{ id: 'a', text: 'Por el estrecho de Bering, desde Asia' }, { id: 'b', text: 'En barcos desde Europa' }, { id: 'c', text: 'Desde Oceanía, en avión' }], correct: ['a'] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:5.1.1'], prompt: 'Venden 80 atoles a Q4 y 50 tamalitos a Q3. Gastan Q210 en ingredientes. ¿Cuánto ganan?' },
          { answer: 260, unit: 'Q' }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:5.1.2'], prompt: 'Una receta usa 0.75 litros de leche. ¿Cuántos litros se necesitan para hacer la receta 4 veces?' },
          { answer: 3, allowDecimal: true, unit: 'L' }),
        S.sort({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.3.3', 'fc:3.5.1'], prompt: '¿Derecho u obligación ciudadana?' },
          { buckets: [{ id: 'd', label: 'Derecho', icon: 'Scale' }, { id: 'o', label: 'Obligación', icon: 'ClipboardCheck' }],
            items: [{ id: 'a', text: 'Asociarme en un grupo juvenil', bucket: 'd' }, { id: 'b', text: 'Cumplir las leyes', bucket: 'o' }, { id: 'c', text: 'Pedir información sobre cómo se usan los fondos públicos', bucket: 'd' }, { id: 'd', text: 'Respetar la opinión de los demás', bucket: 'o' }] }),
        S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.3.3'], prompt: 'Complete in English.' },
          { text: '[[First]], wash the fruit. [[Then]], cut it. [[Finally]], put it in the solar dryer.', distractors: ['Tomorrow'] }),
        S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:3.1.4', 'ef:2.2.2'], prompt: 'Vas a remar en canoa en el lago. ¿Qué es indispensable?' },
          { options: [{ id: 'a', text: 'Chaleco salvavidas y un adulto responsable' }, { id: 'b', text: 'Zapatos de fútbol' }, { id: 'c', text: 'Ir solo para ir más rápido' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l1', 'art'], cnb: ['l1:5.1.5'], prompt: 'Un relato que cuenta cómo un niño resolvió un problema en una excursión es un texto…' },
          { options: [{ id: 'a', text: 'Narrativo' }, { id: 'b', text: 'Instructivo' }, { id: 'c', text: 'Poético en verso' }], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 3 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.1.3'], prompt: '¿Cuántas porciones de frutas y verduras se recomienda comer al día como mínimo?' },
      { options: [{ id: 'a', text: 'Cinco' }, { id: 'b', text: 'Una a la semana' }, { id: 'c', text: 'Ninguna' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.1.3'], prompt: '¿Qué órgano daña principalmente el consumo excesivo de alcohol?' },
      { options: [{ id: 'a', text: 'El hígado' }, { id: 'b', text: 'Las uñas' }, { id: 'c', text: 'El cabello' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:5.3.3'], prompt: '¿Cuál es una consecuencia de la desnutrición en la niñez?' },
      { options: [{ id: 'a', text: 'Frena el crecimiento en talla' }, { id: 'b', text: 'Aumenta las defensas' }, { id: 'c', text: 'Mejora la vista' }], correct: ['a'] }),
    S.order({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.3.3'], prompt: 'Ordena las partes de una presentación de resultados.' },
      { items: [{ id: 'a', text: 'Título y pregunta de investigación' }, { id: 'b', text: 'Cómo investigamos' }, { id: 'c', text: 'Resultados con tabla o gráfica' }, { id: 'd', text: 'Conclusiones' }] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.3.3'], prompt: '¿Qué aporte de la antigua Roma está presente en el idioma que hablas?' },
      { options: [{ id: 'a', text: 'El latín' }, { id: 'b', text: 'El papel' }, { id: 'c', text: 'El cero' }], correct: ['a'] }),
    S.fill({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.2.1', 'l2:5.2.2'], prompt: 'Completa con el nexo correcto.' },
      { text: 'Quería ir a la caminata, [[pero]] estaba enfermo. Me quedé en casa [[porque]] tenía fiebre.', distractors: ['desde'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.3.3'], prompt: '"Llovió mucho; por eso, el río creció." ¿Qué relación hay entre las dos ideas?' },
      { options: [{ id: 'a', text: 'Causa y efecto' }, { id: 'b', text: 'Comparación' }, { id: 'c', text: 'Ninguna' }], correct: ['a'] }),
    S.reading({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.2.1'], prompt: 'Read the news and answer.' },
      { passage: 'ANTIGUA GUATEMALA — Yesterday, 50 volunteers painted the walls of a school. They worked from 8:00 to 12:00.', questions: [
        { q: 'How many volunteers worked?', options: [{ id: 'a', text: '50' }, { id: 'b', text: '12' }], correct: 'a' },
        { q: 'What did they paint?', options: [{ id: 'a', text: 'The walls of a school' }, { id: 'b', text: 'A bus' }], correct: 'a' },
      ] }),
    S.tf({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.2.6', 'ef:3.1.4'], prompt: '¿Verdadero o falso?' },
      { statements: [{ text: 'Revisar el espacio antes de jugar evita accidentes.', answer: true }, { text: 'Una buena actividad recreativa debe dañar las plantas del lugar.', answer: false }] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:3.3.1', 'art:3.3.5'], prompt: '¿Qué función tienen los barriletes gigantes del 1 de noviembre?' },
      { options: [{ id: 'a', text: 'Recordar y honrar a los difuntos' }, { id: 'b', text: 'Anunciar la lluvia' }, { id: 'c', text: 'Vender productos' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.3.2', 'fc:3.5.1'], prompt: '¿Qué hace un grupo juvenil democrático al terminar una actividad con fondos?' },
      { options: [{ id: 'a', text: 'Rinde cuentas a todos sus miembros' }, { id: 'b', text: 'Esconde las facturas' }, { id: 'c', text: 'Deja que una sola persona decida' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:3.3.1'], prompt: '¿Cuál es una ventaja de usar tecnología en un proceso productivo, como un molino de nixtamal?' },
      { options: [{ id: 'a', text: 'Ahorra tiempo y esfuerzo' }, { id: 'b', text: 'Hace el trabajo más lento' }, { id: 'c', text: 'Siempre contamina' }], correct: ['a'] }),
  ],
});
