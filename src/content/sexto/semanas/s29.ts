import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 29 · Unidad 3 "Valorando nuestra convivencia" · PROYECTO INTEGRADOR
 * Tema generador: Brigada Convivir
 * Integra las semanas 21-28: solidaridad ante las fuerzas de la naturaleza, diversidad que
 * enriquece, medios y equidad, señales que cuidan la vida, salud y memoria, raíces que sostienen
 * la tierra, conexión con el mundo e investigación ciudadana. Cinco comisiones preparan un
 * Plan escolar de convivencia y prevención y lo presentan en una Asamblea comunitaria.
 */
export default semana({
  id: 's29',
  unidad: 3,
  semana: 29,
  kind: 'proyecto',
  temaGenerador: 'Brigada Convivir: comunidad segura y solidaria',
  title: 'Brigada Convivir',
  subtitle: 'Proyecto: un plan escolar de convivencia y prevención',
  icon: 'ShieldCheck',
  color: 'var(--area-fc)',
  contexto: 'En muchas escuelas de Guatemala, cuando llueve fuerte nadie sabe por dónde evacuar, algunos niños se burlan de quien habla otro idioma o tiene una discapacidad, y la basura tapa los desagües. Esta semana tu grado forma la Brigada Convivir: cinco comisiones que preparan un Plan escolar de convivencia y prevención (mapa de rutas seguras, radioteatro contra la discriminación, carteles de salud, vivero y reciclaje, y cuentas claras con una propuesta al COCODE) y lo presentan a las familias en una Asamblea comunitaria.',
  ejes: ['vida-ciudadana', 'seguridad', 'multiculturalidad', 'equidad', 'sostenible'],
  media: {
    id: 's29-portada', kind: 'video', title: 'Así trabaja la Brigada Convivir', aspect: '16:9', duration: 60,
    alt: 'Estudiantes con chalecos de colores recorren la escuela con un croquis, graban un radioteatro, pegan carteles, siembran arbolitos y presentan un plan a sus familias.',
    brief: 'Video de 60 s (animación 2D o dramatización con estudiantes, sin rostros identificables en primer plano). Cinco escenas rápidas, cada una con el nombre de la comisión en pantalla: (1) "Rutas seguras": niñas y niños con chalecos naranja dibujan un croquis y señalan flechas verdes de evacuación; (2) "Voces que incluyen": grabación de un radioteatro con micrófono y cortinas de tela; (3) "Señales que cuidan": carteles de salud con íconos grandes; (4) "Raíces": siembra de arbolitos en un talud y separación de basura; (5) "Cuentas claras": una niña presenta un presupuesto en un pliego. Cierre: asamblea en el patio con familias maya, garífuna, xinka y ladinas, y texto "Convivir es cuidarnos juntos". Música de marimba.',
  },
  badge: { id: 'medalla-s29', name: 'Brigadista de la convivencia', icon: 'ShieldCheck', desc: 'Completaste el proyecto integrador de la Unidad 3' },
  lessons: [
    /* ───────────────────────── Día 1: Planificar e investigar ───────────────────────── */
    lesson({
      id: 's29-d1-planificar',
      title: 'Planificar e investigar',
      icon: 'ClipboardList',
      minutes: 15,
      day: 1,
      kind: 'proyecto',
      gancho: 'Si mañana sonara una alarma en tu escuela, ¿sabrías por dónde salir? ¿Y sabrían todos tus compañeros, incluso quien usa muletas?',
      objetivos: ['Comprender el reto de la Brigada Convivir y su rúbrica', 'Analizar un problema con el árbol del problema', 'Elegir fuentes para investigar la necesidad', 'Organizar comisiones con roles equitativos'],
      resumen: [
        'La Brigada Convivir tiene cinco comisiones: Rutas seguras, Voces que incluyen, Señales que cuidan, Raíces y Cuentas claras.',
        'En el árbol del problema, las raíces son las causas, el tronco es el problema y las ramas son los efectos.',
        'Para investigar se usan fuentes orales (entrevistas), escritas, iconográficas y la observación directa, anotando siempre de dónde viene cada dato.',
        'Un equipo funciona cuando reparte roles con equidad, busca acuerdos y escucha a quien piensa distinto.',
      ],
      media: {
        id: 's29-d1-comisiones', kind: 'diagram', title: 'Las cinco comisiones de la Brigada', aspect: '4:3',
        alt: 'Círculo con cinco sectores de colores, uno por comisión, y en el centro un escudo con dos manos entrelazadas.',
        brief: 'Diagrama circular dividido en 5 sectores con ícono y color: 1 Rutas seguras (mapa y flecha, naranja), 2 Voces que incluyen (micrófono, azul), 3 Señales que cuidan (corazón con cruz, rojo suave), 4 Raíces (arbolito y símbolo de reciclaje, verde), 5 Cuentas claras (calculadora y documento, violeta). Centro: escudo con dos manos de distinto tono de piel entrelazadas y el texto "Plan escolar de convivencia y prevención". Estilo plano, letras grandes legibles en celular.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['fc', 'pyd', 'ccss'], cnb: ['fc:4.3.1', 'pyd:4.3.3'], ambito: 'convivir', title: 'El reto: cuidarnos juntos',
            prompt: 'En ocho semanas estudiaste las fuerzas de la naturaleza, la diversidad, la salud, la memoria, los bosques, el mundo y la investigación ciudadana. Ahora lo pondrás al servicio de tu escuela. Toca cada tarjeta.' },
          { icon: 'ShieldCheck', body: 'Una comunidad convive mejor cuando está **preparada**, **incluye a todas las personas** y **decide con información**.', reveal: [
            { icon: 'Target', front: 'La necesidad', back: 'No hay rutas de evacuación señaladas, hay burlas por el idioma o la discapacidad, basura en los desagües y poca información de salud.' },
            { icon: 'FileText', front: 'El producto', back: 'Un **Plan escolar de convivencia y prevención** con cinco partes, una por comisión.' },
            { icon: 'Users', front: 'El público', back: 'Familias, docentes, estudiantes de otros grados y el COCODE.' },
            { icon: 'Handshake', front: 'El compromiso', back: 'Al final, la asamblea firma un **acuerdo de convivencia** y la escuela adopta el plan.' },
          ] },
        ),
        S.project(
          { fase: 'construir', areas: ['fc', 'pyd', 'l1', 'art', 'ccss'], cnb: ['fc:4.3.1', 'pyd:4.3.3', 'pyd:4.2.1', 'l1:8.3.3', 'art:4.2.1'], ambito: 'emprender',
            prompt: 'Esta es la **guía completa** del proyecto. Léela con tu comisión y vuelve a ella cada día.' },
          { goal: 'Elaborar y presentar a la comunidad un Plan escolar de convivencia y prevención con cinco productos: mapa de rutas seguras, radioteatro contra la discriminación, campaña de carteles de salud, vivero y reciclaje, y un presupuesto transparente con una solicitud al COCODE.',
            steps: [
              { title: '1. Formar comisiones y roles', detail: 'Cinco comisiones de 4 o 5 integrantes con roles rotativos: coordinación, investigación, diseño, producción y vocería. Repartir los roles con equidad entre niñas y niños.' },
              { title: '2. Investigar el problema', detail: 'Hacer el árbol del problema, observar la escuela, entrevistar al menos a 3 personas (conserje, docente, madre o padre de familia, bombero o promotor de salud) y consultar una fuente escrita. Anotar cada fuente.' },
              { title: '3. Diseñar', detail: 'Hacer el FODA de la comisión, un boceto del producto, una gráfica con los datos de la investigación y los cálculos necesarios (escala del croquis, cantidades o presupuesto).' },
              { title: '4. Crear y producir', detail: 'Elaborar el producto con materiales reciclados: croquis con simbología, guion y grabación del radioteatro, carteles, vivero o presupuesto con su solicitud escrita.' },
              { title: '5. Presentar en la Asamblea', detail: 'Cada comisión presenta en 3 minutos: problema, datos, producto y compromiso. Se hace un simulacro de evacuación y se firma el acuerdo de convivencia.' },
              { title: '6. Evaluar y mejorar', detail: 'Analizar los comentarios y datos de la asamblea y del simulacro, escribir un plan de mejora y definir quién dará seguimiento al plan.' },
            ],
            evidence: 'Árbol del problema, registro de entrevistas con sus fuentes, FODA, croquis o boceto, cálculos, producto final (mapa, grabación, carteles, vivero o presupuesto), fotografías de la asamblea y plan de mejora.',
            rubric: [
              'El producto responde a un problema real, demostrado con datos y fuentes',
              'Integra al menos tres áreas (por ejemplo, ciencias, matemáticas y comunicación)',
              'Los cálculos (escala, cantidades, presupuesto) son correctos y están explicados',
              'Incluye a todas las personas: idiomas, discapacidad, género y pueblos',
              'La comisión repartió roles con equidad y resolvió sus desacuerdos dialogando',
              'Propone un compromiso concreto con responsables y fechas',
            ] },
        ),
        S.match(
          { fase: 'construir', areas: ['fc', 'cnt', 'ccss', 'art'], cnb: ['cnt:8.2.3', 'fc:2.5.3', 'cnt:6.3.3', 'fc:3.5.1'], ambito: 'convivir',
            prompt: 'Une cada **comisión** con el **problema** de la escuela que ayuda a resolver.',
            explain: 'Cada comisión usa lo aprendido en la unidad: prevención de desastres, lucha contra la discriminación, salud, reforestación y transparencia.' },
          { leftTitle: 'Comisión', rightTitle: 'Problema', pairs: [
            { id: 'rut', left: 'Rutas seguras', leftIcon: 'Route', right: 'Nadie sabe por dónde evacuar si hay sismo o inundación' },
            { id: 'voc', left: 'Voces que incluyen', leftIcon: 'Mic', right: 'Hay burlas por el idioma, la discapacidad o el origen' },
            { id: 'sen', left: 'Señales que cuidan', leftIcon: 'HeartPulse', right: 'Circulan mitos sobre enfermedades y hábitos poco saludables' },
            { id: 'rai', left: 'Raíces', leftIcon: 'Sprout', right: 'El talud se erosiona y la basura tapa los desagües' },
            { id: 'cue', left: 'Cuentas claras', leftIcon: 'Calculator', right: 'No se sabe cuánto costará el plan ni quién lo apoyará' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['fc', 'cnt', 'ccss'], cnb: ['fc:4.4.1', 'cnt:8.2.3'], ambito: 'conocer',
            prompt: 'La comisión **Rutas seguras** arma su **árbol del problema**: "La escuela no está preparada para una emergencia". Clasifica cada tarjeta.',
            hint: 'Las causas explican por qué ocurre el problema; los efectos son lo que provoca.',
            explain: 'Si atacamos las causas (raíces), el problema y sus efectos disminuyen. Por eso el plan propone señalar rutas, practicar simulacros y mantener limpios los pasillos.' },
          { buckets: [
            { id: 'causa', label: 'Raíces (causas)', icon: 'Sprout', color: 'var(--area-pyd)' },
            { id: 'efecto', label: 'Ramas (efectos)', icon: 'TreeDeciduous', color: 'var(--area-cnt)' },
          ], items: [
            { id: 'c1', text: 'No hay rutas de evacuación señaladas', bucket: 'causa' },
            { id: 'c2', text: 'Nunca se ha hecho un simulacro', bucket: 'causa' },
            { id: 'c3', text: 'Los pasillos están llenos de cajas y pupitres', bucket: 'causa' },
            { id: 'c4', text: 'En una emergencia habría empujones y confusión', bucket: 'efecto' },
            { id: 'c5', text: 'Quien usa muletas podría quedarse atrás', bucket: 'efecto' },
            { id: 'c6', text: 'Las familias sienten miedo de enviar a sus hijas e hijos cuando llueve', bucket: 'efecto' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['ccss', 'l1', 'l2'], cnb: ['ccss:5.2.2', 'l1:8.2.5'], ambito: 'hacer',
            prompt: 'Para investigar, cada comisión necesita **fuentes**. Une cada pregunta con la fuente más útil.',
            explain: 'Las personas de la comunidad son fuentes orales valiosas. Combinar fuentes orales, escritas y la observación hace más confiable la investigación.' },
          { leftTitle: 'Pregunta', rightTitle: 'Fuente', pairs: [
            { id: 'f1', left: '¿Por dónde corre el agua cuando llueve fuerte en la escuela?', leftIcon: 'Eye', right: 'Observación directa en un día de lluvia' },
            { id: 'f2', left: '¿Qué emergencias ha vivido la comunidad?', leftIcon: 'Mic', right: 'Entrevista a vecinas y vecinos mayores' },
            { id: 'f3', left: '¿Cómo se previenen las enfermedades de la temporada de lluvia?', leftIcon: 'Stethoscope', right: 'Entrevista al promotor de salud y folleto del centro de salud' },
            { id: 'f4', left: '¿Qué tan empinada es la ladera junto a la escuela?', leftIcon: 'Map', right: 'Croquis y medición con cinta métrica' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'ef', 'l1'], cnb: ['ef:4.2.9', 'fc:1.1.1'], ambito: 'convivir', prompt: 'Tu comisión reparte los roles. ¿Qué harías tú?' },
          { scene: { icon: 'Users', text: 'En la comisión Voces que incluyen está **Andrés**, que usa silla de ruedas. Alguien dice: "Mejor que Andrés solo mire, para que no se canse". Andrés baja la mirada; a él le encanta hacer voces.' }, options: [
            { id: 'a', icon: 'EyeOff', text: 'No decir nada y seguir repartiendo', consequence: 'Andrés se queda sin rol y la comisión pierde a su mejor voz para el radioteatro.', values: ['Exclusión'], constructive: false },
            { id: 'b', icon: 'MessageCircle', text: 'Preguntarle a Andrés qué rol le gustaría y proponer que sea la voz principal del radioteatro', consequence: 'Andrés elige ser narrador y locutor. Su voz le da vida a la historia y la comisión aprende que decidir por otra persona también es discriminar.', values: ['Inclusión', 'Respeto', 'Equidad'], constructive: true },
            { id: 'c', icon: 'Megaphone', text: 'Regañar en voz alta a quien lo dijo', consequence: 'Se crea tensión y nadie pregunta a Andrés qué quiere hacer.', values: ['Impulsividad'], constructive: false },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l1', 'pyd', 'fc'], cnb: ['l1:8.3.3', 'pyd:4.3.3', 'fc:4.3.1'], ambito: 'emprender',
            prompt: 'Escribe el **plan de tu comisión**: nombre de la comisión, el problema (tronco del árbol), dos causas, el rol de cada integrante y las fuentes que consultarán.' },
          { minWords: 40, placeholder: 'Comisión… Problema… Causas: … Roles: … Fuentes: …',
            model: 'Comisión: Raíces. Problema: el talud junto a la cancha se derrumba poco a poco y la basura tapa los desagües. Causas: cortaron los árboles de la ladera y no hay basureros separados. Roles: Marta coordina, Diego investiga, Yesenia diseña, Kevin produce y yo seré vocera; la coordinación rota cada día. Fuentes: entrevista al guardabosques municipal, observación del talud en un día de lluvia y el libro de Ciencias Naturales.',
            rubric: ['Nombra la comisión y el problema', 'Identifica al menos dos causas', 'Reparte roles con equidad', 'Menciona al menos dos fuentes distintas'] },
        ),
        cierre({ areas: ['fc', 'pyd'], cnb: ['fc:4.3.1'] }, ['Entiendo el reto y la rúbrica de la Brigada', 'Analicé el problema con el árbol del problema', 'Mi comisión repartió roles con equidad e inclusión'],
          ['Haré mi entrevista antes de mañana y anotaré la fuente', 'Observaré mi escuela con ojos de brigadista', 'Preguntaré a mis compañeros qué rol quieren antes de decidir por ellos']),
      ],
    }),

    /* ───────────────────────── Día 2: Diseñar ───────────────────────── */
    lesson({
      id: 's29-d2-disenar',
      title: 'Diseñar el plan',
      icon: 'PenTool',
      minutes: 15,
      day: 2,
      kind: 'proyecto',
      gancho: '¿Cómo dibujas toda tu escuela en una hoja de papel sin que las distancias se vuelvan mentira?',
      objetivos: ['Analizar la comisión con un FODA', 'Organizar en una gráfica los datos de la investigación', 'Calcular distancias reales con la escala del croquis', 'Elegir símbolos claros para el mapa y los carteles'],
      resumen: [
        'El FODA analiza Fortalezas y Debilidades (dentro del grupo) y Oportunidades y Amenazas (fuera del grupo).',
        'Una gráfica de barras muestra de un vistazo los resultados de una encuesta y ayuda a justificar el plan.',
        'La escala de un croquis es una proporción: si 1 cm representa 5 m, 12 cm representan 60 m.',
        'Los mapas y carteles usan símbolos convencionales que todos entienden y una leyenda que los explica.',
      ],
      media: {
        id: 's29-d2-croquis', kind: 'diagram', title: 'Croquis de rutas seguras', aspect: '4:3',
        alt: 'Croquis de una escuela vista desde arriba con aulas, cancha, rampa, flechas verdes de evacuación y un punto de reunión.',
        brief: 'Croquis cenital estilo dibujo escolar sobre papel cuadriculado: 6 aulas en forma de L, dirección, cancha, baños, talud con árboles al norte y portón al sur. Flechas verdes continuas marcan dos rutas de evacuación hacia el "Punto de reunión" en la cancha (símbolo de cuatro flechas hacia un punto). Rampa marcada con el símbolo internacional de accesibilidad. Rosa de los vientos con la N, escala gráfica "1 cm = 5 m" y leyenda con 6 símbolos (ruta, punto de reunión, extintor, botiquín, rampa, zona de riesgo en rojo).',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'fc'], cnb: ['pyd:4.2.1'], ambito: 'emprender', title: 'El FODA de la comisión',
            prompt: 'Antes de diseñar, conviene conocer con qué contamos y qué nos puede afectar. Toca cada letra del **FODA**.' },
          { icon: 'Layers', body: 'Las **F** y **D** están **dentro** del grupo; las **O** y **A** están **fuera**.', reveal: [
            { icon: 'Dumbbell', front: 'Fortalezas', back: 'Lo bueno que tiene el grupo: "Sabemos dibujar croquis y dos compañeras hablan q\'eqchi\' y español".' },
            { icon: 'Puzzle', front: 'Debilidades', back: 'Lo que nos falta: "Nos cuesta hablar en público".' },
            { icon: 'Sunrise', front: 'Oportunidades', back: 'Ayudas de fuera: "Los bomberos pueden venir al simulacro".' },
            { icon: 'CloudRain', front: 'Amenazas', back: 'Riesgos de fuera: "Las lluvias de octubre pueden suspender la asamblea".' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['pyd', 'fc', 'l1'], cnb: ['pyd:4.2.1'], ambito: 'emprender',
            prompt: 'La comisión **Voces que incluyen** hizo su FODA. Clasifica cada idea.',
            hint: 'Primero decide si está dentro o fuera del grupo; luego si ayuda o perjudica.',
            explain: 'Con el FODA, la comisión aprovecha sus fortalezas y oportunidades y prepara soluciones para sus debilidades y amenazas.' },
          { buckets: [
            { id: 'f', label: 'Fortaleza', icon: 'Dumbbell', color: 'var(--c-ok)' },
            { id: 'd', label: 'Debilidad', icon: 'Puzzle', color: 'var(--c-hint)' },
            { id: 'o', label: 'Oportunidad', icon: 'Sunrise', color: 'var(--area-l1)' },
            { id: 'a', label: 'Amenaza', icon: 'CloudRain', color: 'var(--area-cnt)' },
          ], layout: 'grid2', items: [
            { id: 'x1', text: 'Andrés tiene una voz clara y le gusta actuar', bucket: 'f' },
            { id: 'x2', text: 'No tenemos micrófono', bucket: 'd' },
            { id: 'x3', text: 'La radio comunitaria ofreció transmitir el radioteatro', bucket: 'o' },
            { id: 'x4', text: 'Se va la luz con frecuencia y podría fallar la grabación', bucket: 'a' },
            { id: 'x5', text: 'Hablamos tres idiomas dentro de la comisión', bucket: 'f' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['ccss', 'mat', 'fc'], cnb: ['ccss:5.3.3', 'fc:2.5.3'], ambito: 'hacer',
            prompt: 'Supongamos que la comisión preguntó a **60 estudiantes**: "¿Has visto burlas en la escuela por alguno de estos motivos?". Resultados: por el idioma 24, por la forma de hablar o vestir 18, por una discapacidad 12, por otro motivo 6. Construye la gráfica.',
            explain: 'La gráfica muestra que la burla por el idioma es la más frecuente. Esos datos justifican que el radioteatro trate sobre el respeto a los 25 idiomas de Guatemala.' },
          { categories: [
            { id: 'idi', label: 'Idioma', icon: 'Languages', color: 'var(--area-l2)' },
            { id: 'ves', label: 'Forma de hablar o vestir', icon: 'Shirt', color: 'var(--area-art)' },
            { id: 'dis', label: 'Discapacidad', icon: 'PersonStanding', color: 'var(--area-fc)' },
            { id: 'otr', label: 'Otro motivo', icon: 'MessageCircle', color: 'var(--c-hint)' },
          ], data: [24, 18, 12, 6], max: 30, step: 2, unit: 'estudiantes', source: 'Encuesta hipotética de la comisión' },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'l1', 'ccss'], cnb: ['mat:4.6.1', 'l1:3.3.1'], ambito: 'hacer',
            prompt: 'En el croquis de **Rutas seguras**, la escala es **1 cm = 5 m**. La ruta desde el aula de sexto hasta el punto de reunión mide **12 cm** en el papel. ¿Cuántos **metros reales** debe caminar el grupo?',
            hint: 'Plantea la proporción: 1 es a 5 como 12 es a ¿?',
            explain: '1/5 = 12/x → x = 12 × 5 ÷ 1 = 60 m. Conocer la distancia real ayuda a calcular cuánto tarda la evacuación.' },
          { answer: 60, unit: 'metros', stimulus: '1 cm → 5 m   |   12 cm → ? m', misconceptions: [
            { value: 17, msg: 'Sumaste 12 + 5. En una escala se multiplica: cada centímetro vale 5 metros.' },
            { value: 12, msg: 'Esa es la medida en el papel. Falta convertirla con la escala.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['l1', 'art', 'cnt'], cnb: ['l1:3.3.1', 'art:2.2.2'], ambito: 'conocer',
            prompt: 'El croquis y los carteles usarán **símbolos convencionales**. Une cada símbolo con su significado.',
            explain: 'Los símbolos convencionales se entienden aunque alguien no lea español: por eso ayudan a incluir a todas las personas.' },
          { leftTitle: 'Símbolo', rightTitle: 'Significado', pairs: [
            { id: 's1', left: 'Flecha verde con una persona corriendo', leftIcon: 'Route', right: 'Ruta de evacuación' },
            { id: 's2', left: 'Cuatro flechas que apuntan a un punto', leftIcon: 'Target', right: 'Punto de reunión' },
            { id: 's3', left: 'Cruz blanca sobre fondo verde', leftIcon: 'Plus', right: 'Botiquín de primeros auxilios' },
            { id: 's4', left: 'Persona en silla de ruedas', leftIcon: 'PersonStanding', right: 'Acceso para personas con discapacidad' },
            { id: 's5', left: 'Zona sombreada en rojo', leftIcon: 'Triangle', right: 'Zona de riesgo' },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['art', 'pyd', 'l1'], cnb: ['art:2.2.2', 'art:3.2.5', 'pyd:4.2.1'], ambito: 'hacer',
            prompt: 'Describe el **boceto** del producto de tu comisión: qué es, qué símbolos o imágenes usarás, qué dato o gráfica mostrarás y qué materiales reciclados necesitarás. Incluye una fortaleza y una amenaza de tu FODA.',
            media: { id: 's29-d2-bocetos', kind: 'image', title: 'Bocetos de las comisiones', aspect: '16:9',
              alt: 'Cinco bocetos a lápiz sobre una mesa: un croquis, un guion con micrófono, un cartel de salud, un vivero en cajas y una tabla de presupuesto.',
              brief: 'Fotografía o ilustración cenital de una mesa de aula con cinco hojas de boceto a lápiz y colores, cada una con una etiqueta de comisión: croquis con flechas verdes; guion de radioteatro con un micrófono dibujado; cartel "Tomá agua pura" con un vaso grande; vivero en cajas de madera reciclada; tabla de presupuesto con columnas "Material", "Cantidad", "Precio". Alrededor: tijeras de punta roma, goma, cartón y tapitas. Sin rostros.' } },
          { minWords: 40, placeholder: 'Nuestro producto es… Usaremos los símbolos… Mostraremos… Materiales: … Fortaleza: … Amenaza: …',
            model: 'Nuestro producto es un croquis grande de la escuela en cartón reciclado. Usaremos flechas verdes para las rutas, el símbolo del punto de reunión, el de la rampa y zonas rojas para el talud. Mostraremos la distancia real de cada ruta calculada con la escala 1 cm = 5 m. Materiales: cartón de cajas, marcadores y tapitas para los símbolos. Fortaleza: sabemos medir con cinta. Amenaza: si llueve, no podremos medir el patio.',
            rubric: ['Describe el producto con claridad', 'Nombra símbolos o imágenes comprensibles para todos', 'Incluye un dato, gráfica o cálculo', 'Menciona materiales reciclados y una idea del FODA'] },
        ),
        cierre({ areas: ['pyd', 'mat'], cnb: ['pyd:4.2.1'] }, ['Hice el FODA de mi comisión', 'Organicé los datos en una gráfica', 'Calculé distancias reales con la escala', 'Elegí símbolos claros para todas las personas'],
          ['Traeré cartón y materiales reciclados', 'Revisaré mis cálculos con otra comisión', 'Mostraré el boceto a mi familia y anotaré sus sugerencias']),
      ],
    }),

    /* ───────────────────────── Día 3: Crear y producir ───────────────────────── */
    lesson({
      id: 's29-d3-crear',
      title: 'Crear y producir',
      icon: 'Hammer',
      minutes: 15,
      day: 3,
      kind: 'proyecto',
      gancho: '¿Cómo convertir cartón, tapitas, un celular y tu voz en un plan que de verdad proteja a tu escuela?',
      objetivos: ['Producir con seguridad y cuidando el ambiente', 'Calcular un presupuesto con decimales', 'Escribir una solicitud formal al COCODE', 'Grabar un radioteatro con cortinilla musical'],
      resumen: [
        'Producir de forma sostenible es usar materiales reciclados, herramientas seguras y separar los sobrantes.',
        'En un presupuesto se multiplica cantidad × precio y se suman los totales; en operaciones combinadas se resuelve primero la multiplicación.',
        'Una solicitud tiene lugar y fecha, destinatario, saludo, lo que se pide y por qué, despedida y firma.',
        'Un radioteatro cuenta una historia solo con voces, efectos de sonido y música.',
      ],
      media: {
        id: 's29-d3-taller', kind: 'video', title: 'Taller de producción de la Brigada', aspect: '16:9', duration: 50,
        alt: 'Manos de estudiantes pintan flechas en cartón, siembran arbolitos, graban voces con un celular y escriben una carta.',
        brief: 'Video de 50 s con planos cerrados de manos (sin rostros): pintar flechas verdes en cartón reciclado, pegar tapitas como símbolos, llenar bolsas con tierra y sembrar arbolitos de especies nativas, grabar voces con un celular apoyado en un vaso (sin marcas visibles) dentro de una "cabina" hecha con cobijas, escribir a mano una solicitud con la fecha. Sobreimpresos: "Material reciclado", "Tijeras de punta roma", "Separa los sobrantes". Música de marimba suave.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'cnt', 'ef'], cnb: ['pyd:4.3.3', 'cnt:6.3.3', 'ef:3.1.4'], ambito: 'hacer', title: 'Producir con cuidado',
            prompt: 'Hoy se produce. Toca cada tarjeta para trabajar seguros y sin dañar el ambiente.' },
          { icon: 'Recycle', body: 'Un plan de convivencia también convive bien con la naturaleza.', reveal: [
            { icon: 'Scissors', front: 'Herramientas', back: 'Tijeras de punta roma sobre mesa firme; la pala y el azadón, con una persona adulta cerca.' },
            { icon: 'Package', front: 'Materiales', back: 'Cartón, tapitas, telas y botellas reutilizadas en lugar de materiales nuevos.' },
            { icon: 'Sprout', front: 'El talud', back: 'Sembrar especies nativas: sus raíces amarran el suelo y el agua de lluvia se infiltra.' },
            { icon: 'Trash2', front: 'Sobrantes', back: 'Separar orgánico, reciclable y basura; nunca quemarla.' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'pyd', 'fc'], cnb: ['mat:4.5.4', 'mat:5.1.2', 'fc:3.5.1'], ambito: 'hacer',
            prompt: 'La comisión **Cuentas claras** arma el presupuesto. Supongamos que necesitan **4 botes de pintura verde a Q18.50** cada uno y **un rollo de cinta reflectiva de Q12.75**. ¿Cuánto cuesta en total?',
            hint: 'Primero multiplica 4 × 18.50; después suma la cinta.',
            explain: '4 × 18.50 = 74.00; 74.00 + 12.75 = Q86.75. Un presupuesto claro evita sorpresas y permite rendir cuentas.' },
          { answer: 86.75, allowDecimal: true, unit: 'quetzales', stimulus: '4 × 18.50 + 12.75 = ?', misconceptions: [
            { value: 31.25, msg: 'Sumaste un solo bote. Son 4 botes: primero multiplica.' },
            { value: 125, msg: 'Sumaste primero y después multiplicaste. La multiplicación se resuelve antes que la suma.' },
          ] },
        ),
        S.fill(
          { fase: 'construir', areas: ['l2', 'pyd', 'fc'], cnb: ['l2:5.4.2', 'fc:3.5.1'], ambito: 'hacer',
            prompt: 'Completa la **solicitud** que la Brigada enviará al COCODE. Cuida el formato y la cortesía.',
            explain: 'La solicitud dice con claridad qué se pide y por qué, y adjunta el presupuesto: así la comunidad puede revisar en qué se usará el dinero.' },
          { text: 'San Juan, 14 de octubre.\nSeñores del COCODE:\nReciban un [[cordial saludo]] de la Brigada Convivir de sexto grado.\nPor este medio [[solicitamos]] su apoyo con Q86.75 para pintar las rutas de evacuación de la escuela, porque en una emergencia todas las personas deben saber por dónde salir.\nAdjuntamos el [[presupuesto]] con los precios de cada material.\nAgradecemos su atención.\n[[Atentamente]],\nBrigada Convivir',
            distractors: ['exigimos', 'chisme', 'Ahí nos vemos'] },
        ),
        S.order(
          { fase: 'construir', areas: ['art', 'l1', 'fc'], cnb: ['art:4.2.1', 'art:4.2.3'], ambito: 'hacer',
            prompt: 'La comisión **Voces que incluyen** producirá un radioteatro sobre una niña que llega a la escuela hablando solo mam. Ordena los pasos de la producción.',
            explain: 'Un radioteatro se planifica como el teatro, pero todo debe entenderse por el oído: las voces, los efectos y la música cuentan la historia.' },
          { items: [
            { id: 'r1', text: 'Escribir el guion con personajes, diálogos y efectos de sonido' },
            { id: 'r2', text: 'Repartir personajes y ensayar las voces' },
            { id: 'r3', text: 'Preparar la cabina con cobijas para quitar el eco' },
            { id: 'r4', text: 'Grabar escena por escena con la cortinilla musical' },
            { id: 'r5', text: 'Escuchar la grabación y corregir lo que no se entiende' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.rhythm(
          { fase: 'aplicar', areas: ['art', 'mat', 'l1'], cnb: ['art:4.2.1'], ambito: 'hacer',
            prompt: 'Compón la **cortinilla** del radioteatro: un compás de **4 tiempos** con al menos una **negra** y una **corchea**. La tocarán con palmas o marimba entre escena y escena.',
            hint: 'Negra = 1 tiempo; corchea = 1/2; blanca = 2. La suma debe dar 4.',
            explain: 'Por ejemplo: negra + negra + corchea + corchea + negra = 1 + 1 + ½ + ½ + 1 = 4 tiempos.' },
          { beats: 4, allowed: ['blanca', 'negra', 'corchea'], mustInclude: ['negra', 'corchea'], showFractions: true },
        ),
        S.write(
          { fase: 'aplicar', areas: ['art', 'l1', 'fc', 'l2'], cnb: ['art:4.2.1', 'fc:2.5.3', 'fc:2.5.1'], ambito: 'convivir',
            prompt: 'Escribe la **escena central** del radioteatro (4 a 6 líneas): alguien se burla de otra persona por su idioma o una discapacidad y un personaje responde con respeto. Incluye un **efecto de sonido** entre paréntesis.',
            media: { id: 's29-d3-cabina', kind: 'audio', title: 'Muestra de radioteatro', duration: 40,
              alt: 'Grabación de una escena corta con dos voces infantiles, sonido de timbre escolar y una cortinilla de marimba.',
              brief: 'Audio de 40 s: cortinilla de marimba (4 tiempos); efecto de timbre escolar y murmullo de recreo; voz de niña 1: "¿Por qué hablás así? ¡Nadie te entiende!"; pausa; voz de niño 2 (tranquilo): "Ella habla mam, uno de los idiomas de Guatemala. Yo quiero aprender a saludar como ella." Voz de niña 3 (tímida): "Buenos días se dice…" (la frase se desvanece bajo la música, sin pronunciar palabras en mam para evitar errores). Cierre con cortinilla. Voces claras, acento guatemalteco, sin ruido.' } },
          { minWords: 40, placeholder: '(Sonido de…) PERSONAJE 1: … PERSONAJE 2: …',
            model: '(Sonido del timbre del recreo.) BRAYAN: ¡Ja! Ixmucané habla raro, nadie le entiende. IXMUCANÉ: (en voz baja) Hablo mam y también estoy aprendiendo español. LUCÍA: (se acerca) Brayan, en Guatemala se hablan 25 idiomas; burlarse es discriminar. Ixmucané, ¿me enseñas a saludar en mam? BRAYAN: (después de un silencio) Perdón… yo también quiero aprender. (Música de marimba.)',
            rubric: ['Presenta una situación de discriminación sin palabras ofensivas explícitas', 'Un personaje responde con respeto y argumentos', 'Incluye al menos un efecto de sonido entre paréntesis', 'La escena termina con una salida que construye paz'] },
        ),
        cierre({ areas: ['pyd', 'art'], cnb: ['pyd:4.3.3'] }, ['Produje con seguridad y materiales reciclados', 'Calculé el presupuesto con decimales', 'Escribí una solicitud con el formato correcto', 'Grabé o ensayé mi parte del radioteatro'],
          ['Terminaré mi parte del producto', 'Separaré los sobrantes para reciclar', 'Ensayaré mi presentación de 3 minutos']),
      ],
    }),

    /* ───────────────────────── Día 4: Presentar y compartir ───────────────────────── */
    lesson({
      id: 's29-d4-presentar',
      title: 'Presentar en la Asamblea',
      icon: 'Megaphone',
      minutes: 14,
      day: 4,
      kind: 'proyecto',
      gancho: '¿Cómo logras que las familias, los docentes y el COCODE se comprometan con tu plan en solo tres minutos?',
      objetivos: ['Presentar con una apertura interesante, datos y un compromiso', 'Distinguir hechos de opiniones en los mensajes', 'Guiar un simulacro de evacuación con calma', 'Responder con respeto a comentarios que excluyen'],
      resumen: [
        'Una presentación de 3 minutos tiene apertura, problema con datos, producto, compromiso y un cierre que se recuerde.',
        'En la asamblea se comparten hechos comprobados; las opiniones se presentan como opiniones.',
        'En un simulacro se camina sin correr, sin gritar y sin empujar, por la ruta señalada, hasta el punto de reunión, ayudando a quien lo necesite.',
        'Ante un comentario que discrimina se responde con calma, con datos y con respeto.',
      ],
      media: {
        id: 's29-d4-asamblea', kind: 'image', title: 'La Asamblea Convivir', aspect: '16:9',
        alt: 'Patio escolar con familias sentadas, cinco mesas de comisiones y una niña que presenta el croquis de rutas seguras.',
        brief: 'Ilustración amplia de un patio escolar decorado con pliegos: al frente, una niña con güipil señala un croquis grande con flechas verdes; a los lados, cinco mesas rotuladas con el nombre de cada comisión; un niño en silla de ruedas sostiene un micrófono; familias maya, garífuna, xinka y ladinas sentadas en sillas plásticas; una integrante del COCODE toma notas. Manta al fondo: "Acuerdo de convivencia". Colores cálidos, luz de mañana, sin logotipos.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1', 'l2', 'fc'], cnb: ['l1:2.2.3', 'l1:7.3.3'], ambito: 'convivir', title: 'Tres minutos que convencen',
            prompt: 'Cada comisión tiene **3 minutos**. Toca cada momento de la presentación.' },
          { icon: 'Mic', body: 'Mira a las personas, habla despacio y apóyate en tu producto.', reveal: [
            { icon: 'Lightbulb', front: '1. Apertura', back: '"¿Sabían que 24 de 60 estudiantes han visto burlas por el idioma?"' },
            { icon: 'BarChart3', front: '2. Problema con datos', back: 'Mostrar la gráfica o el árbol del problema.' },
            { icon: 'Package', front: '3. Producto', back: 'Enseñar el croquis, el cartel o poner un minuto del radioteatro.' },
            { icon: 'Handshake', front: '4. Compromiso y cierre', back: '"Firmemos juntos el acuerdo: en esta escuela nadie se queda atrás."' },
          ] },
        ),
        S.highlight(
          { fase: 'construir', areas: ['l1', 'l2', 'fc'], cnb: ['l1:7.3.3', 'fc:2.5.3'], ambito: 'conocer',
            prompt: 'La vocería preparó este texto para la asamblea. Marca las **opiniones** (lo que alguien piensa o siente); lo demás son hechos que se pueden comprobar.',
            explain: 'En una asamblea se valen las opiniones, pero hay que distinguirlas de los hechos para decidir bien.' },
          { target: 'opiniones', text: 'La ruta del aula de sexto al punto de reunión mide 60 metros. {Nuestro croquis es el más bonito de todos.} En la encuesta, 24 de 60 estudiantes vieron burlas por el idioma. {Creo que el radioteatro va a cambiar a toda la escuela.} El presupuesto total es de Q86.75. {Los carteles verdes son mucho más alegres que los azules.}' },
        ),
        S.choice(
          { fase: 'construir', areas: ['ef', 'cnt', 'fc'], cnb: ['ef:3.1.4', 'cnt:8.2.3'], ambito: 'hacer',
            prompt: 'Durante la asamblea se hará un **simulacro de evacuación**. ¿Qué acciones son correctas? Elige todas las correctas.',
            explain: 'En un simulacro se practica para que, en una emergencia real, todos sepan qué hacer sin pánico. Ayudar a quien lo necesita es parte del plan.' },
          { multiple: true, options: [
            { id: 'a', text: 'Caminar rápido sin correr por la ruta señalada', icon: 'Footprints' },
            { id: 'b', text: 'Ayudar a quien usa muletas o silla de ruedas por la rampa', icon: 'HandHeart' },
            { id: 'c', text: 'Esperar en el punto de reunión mientras se pasa lista', icon: 'ClipboardCheck' },
            { id: 'd', text: 'Regresar al aula por la mochila', icon: 'Backpack', feedback: 'Nunca se regresa por objetos: la vida vale más que cualquier cosa.' },
            { id: 'e', text: 'Empujar para salir primero', icon: 'X', feedback: 'Empujar provoca caídas y accidentes.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'l1'], cnb: ['ef:3.1.4', 'ef:4.2.9'], ambito: 'ser',
            prompt: 'Practica el **simulacro**: camina rápido sin correr por tu casa o el patio durante 1 minuto hasta un "punto de reunión" y luego respira profundo. Mide tu pulso antes y después, y observa si lograste mantener la calma.' },
          { seconds: 15, rounds: [
            { label: 'Antes del simulacro' },
            { label: 'Después de llegar al punto de reunión', exercise: { name: 'Evacuación caminando sin correr', icon: 'Footprints', seconds: 60 } },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'l1', 'ccss'], cnb: ['fc:2.5.1', 'ccss:3.1.3'], ambito: 'convivir', prompt: 'Durante la asamblea, ¿qué harías tú?' },
          { scene: { icon: 'MessageCircle', text: 'Mientras Andrés presenta el radioteatro, un señor comenta en voz alta: "¿Para qué gastar en rampas? Aquí casi nadie usa silla de ruedas".' }, options: [
            { id: 'a', icon: 'VolumeX', text: 'Ignorar el comentario y seguir', consequence: 'Andrés termina, pero la idea de que la rampa "no importa" se queda en el aire.', values: ['Evasión'], constructive: false },
            { id: 'b', icon: 'HeartHandshake', text: 'Explicar con calma que la rampa también sirve a personas mayores, a quien se lastima un pie y a carretas, y que la accesibilidad es un derecho', consequence: 'El señor asiente y comenta que su mamá ya casi no puede subir gradas. La asamblea aprueba la rampa.', values: ['Respeto', 'Argumentación', 'Inclusión'], constructive: true },
            { id: 'c', icon: 'Megaphone', text: 'Decirle que no sabe nada y que se calle', consequence: 'El ambiente se pone tenso y algunas familias se retiran.', values: ['Irrespeto'], constructive: false },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l1', 'fc', 'pyd'], cnb: ['l1:7.3.3', 'fc:4.3.1', 'pyd:4.3.3'], ambito: 'convivir',
            prompt: 'Escribe el **discurso de cierre** de tu comisión (máximo 60 palabras): recuerda el problema con un dato, di qué logró el producto y propone un compromiso a la asamblea.' },
          { minWords: 30, placeholder: 'Hoy aprendimos que… Con nuestro… Les proponemos que…',
            model: 'Hoy aprendimos que 24 de 60 estudiantes han visto burlas por el idioma. Con nuestro radioteatro mostramos que en Guatemala se hablan 25 idiomas y que cada uno es un tesoro. Les proponemos que, desde mañana, cada grado aprenda un saludo en un idioma distinto y que nadie se ría de cómo habla otra persona. ¿Lo firmamos juntos?',
            rubric: ['Recuerda el problema con un dato', 'Explica qué logró el producto', 'Propone un compromiso concreto', 'Usa un tono respetuoso y un cierre memorable'] },
        ),
        cierre({ areas: ['l1', 'fc'], cnb: ['fc:4.3.1'] }, ['Presenté con apertura, datos y compromiso', 'Distinguí hechos de opiniones', 'Participé en el simulacro con calma', 'Respondí con respeto a comentarios que excluyen'],
          ['Ensayaré mi presentación frente a mi familia', 'Explicaré en casa la ruta de evacuación de mi escuela', 'Defenderé con respeto a quien sea excluido']),
      ],
    }),

    /* ───────────────────────── Día 5: Evaluar y mejorar ───────────────────────── */
    lesson({
      id: 's29-d5-evaluar',
      title: 'Evaluar y mejorar',
      icon: 'ClipboardCheck',
      minutes: 15,
      day: 5,
      kind: 'proyecto',
      gancho: 'La asamblea terminó y el acuerdo se firmó. ¿Cómo sabrás si dentro de un mes la escuela convive mejor?',
      objetivos: ['Analizar los datos del simulacro y de la asamblea', 'Interpretar comentarios para mejorar', 'Repasar las ideas clave de la Unidad 3', 'Escribir un plan de mejora con seguimiento'],
      resumen: [
        'Evaluar con datos (tiempos, conteos, encuestas) y con comentarios permite saber qué funcionó y qué mejorar.',
        'La retroalimentación útil es concreta y respetuosa: "dos estrellas y un deseo".',
        'Un plan de convivencia necesita seguimiento: responsables, fechas y una forma de medir si se cumple.',
      ],
      media: {
        id: 's29-d5-acuerdo', kind: 'image', title: 'El acuerdo de convivencia', aspect: '3:4',
        alt: 'Pliego colgado en la pared con cinco compromisos y muchas firmas y huellas digitales de colores.',
        brief: 'Ilustración vertical de un pliego de papel kraft colgado en el corredor escolar, titulado "Acuerdo de convivencia". Cinco compromisos cortos escritos a mano con íconos (flecha verde, micrófono, corazón, arbolito, calculadora). Abajo, muchas firmas y huellas digitales de pintura de colores (algunas familias firman con huella). Al pie, un calendario con fechas de seguimiento marcadas. Colores cálidos; texto genérico y legible.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['pyd', 'l1'], cnb: ['pyd:4.3.3'], ambito: 'emprender', title: 'Evaluar para mejorar',
            prompt: 'Evaluar no es buscar culpables: es **aprender para mejorar**. Toca cada tarjeta.' },
          { icon: 'Star', body: 'Usen **"dos estrellas y un deseo"**: dos logros y una mejora.', reveal: [
            { icon: 'Timer', front: 'Datos del simulacro', back: '¿Cuántos minutos tardó cada grado en llegar al punto de reunión?' },
            { icon: 'MessagesSquare', front: 'Comentarios', back: 'Lo que dijeron las familias, los docentes y el COCODE.' },
            { icon: 'CalendarDays', front: 'Seguimiento', back: 'Quién revisará el plan, cada cuánto y cómo se medirá.' },
          ] },
        ),
        S.chart(
          { fase: 'construir', areas: ['mat', 'ccss', 'cnt'], cnb: ['ccss:5.3.3', 'cnt:8.2.3'], ambito: 'hacer',
            prompt: 'Supongamos que en el simulacro cada grado tardó estos **segundos** en llegar al punto de reunión: Primero 150, Segundo 120, Tercero 105, Cuarto 90, Quinto 90, Sexto 75. Construye la gráfica.',
            explain: 'Los grados pequeños tardaron más: quizá su aula está lejos o necesitan más práctica. Los datos orientan la mejora: rutas más cortas y más simulacros.' },
          { categories: [
            { id: 'g1', label: 'Primero', icon: 'Baby', color: 'var(--area-l1)' },
            { id: 'g2', label: 'Segundo', icon: 'Backpack', color: 'var(--area-l1)' },
            { id: 'g3', label: 'Tercero', icon: 'Book', color: 'var(--area-mat)' },
            { id: 'g4', label: 'Cuarto', icon: 'BookOpen', color: 'var(--area-mat)' },
            { id: 'g5', label: 'Quinto', icon: 'Notebook', color: 'var(--area-cnt)' },
            { id: 'g6', label: 'Sexto', icon: 'GraduationCap', color: 'var(--area-cnt)' },
          ], data: [150, 120, 105, 90, 90, 75], max: 180, step: 15, unit: 'segundos', source: 'Registro hipotético del simulacro' },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'pyd', 'fc'], cnb: ['l1:7.3.3', 'fc:3.5.1'], ambito: 'emprender', prompt: 'Lee los comentarios del **libro de la asamblea** y responde.' },
          { genre: 'Comentarios', heading: 'Libro de la Asamblea Convivir', passage:
            '"Me gustó que la Brigada mostrara en qué se gastaría cada quetzal. Así da gusto apoyar." — Doña Tomasa, del COCODE.\n\n"El radioteatro me hizo pensar en mi hija, que habla q\'anjob\'al. Gracias por incluirla." — Don Pascual, padre de familia.\n\n"En el simulacro, los de primero se confundieron porque la flecha del corredor estaba muy alta." — Profesora Glenda.\n\n"Los arbolitos del talud necesitan riego en la época seca. ¿Quién se encargará?" — Don Efraín, conserje.',
            questions: [
              { q: '¿Por qué doña Tomasa confió en el plan?', options: [
                { id: 'a', text: 'Porque la Brigada mostró con claridad en qué se gastaría el dinero' },
                { id: 'b', text: 'Porque el croquis era muy grande' },
                { id: 'c', text: 'Porque no se pidió dinero' },
              ], correct: 'a', why: 'La transparencia (mostrar cuánto y en qué se gasta) genera confianza.' },
              { q: '¿Qué mejora concreta sugiere el comentario de la profesora Glenda?', options: [
                { id: 'a', text: 'Colocar las flechas a la altura de los ojos de los más pequeños' },
                { id: 'b', text: 'Eliminar el simulacro' },
                { id: 'c', text: 'Que primero grado no participe' },
              ], correct: 'a' },
              { q: '¿Qué le falta al plan de la comisión Raíces, según don Efraín?', options: [
                { id: 'a', text: 'Definir quién regará los arbolitos en la época seca' },
                { id: 'b', text: 'Comprar más pintura' },
                { id: 'c', text: 'Grabar otro radioteatro' },
              ], correct: 'a', why: 'Un plan necesita responsables y seguimiento para que sus logros duren.' },
            ] },
        ),
        S.cards(
          { fase: 'construir', areas: ['cnt', 'mat', 'ccss', 'fc', 'l1', 'pyd'], cnb: ['cnt:1.2.3', 'cnt:1.5.5', 'cnt:3.4.1', 'mat:4.6.1', 'cnt:6.3.3', 'fc:4.4.1', 'cnt:8.3.2', 'mat:7.1.6'], ambito: 'conocer',
            prompt: 'Antes de la **Semana de validación**, repasa ideas clave de la Unidad 3 que usaste en la Brigada. Intenta responder antes de voltear cada tarjeta.' },
          { cards: [
            { icon: 'Microscope', front: '¿Cómo se organizan las células en un organismo?', back: 'Células → tejidos → órganos → sistemas → organismo.' },
            { icon: 'Leaf', front: '¿Qué es el liquen?', back: 'Una simbiosis: el hongo protege y da humedad; el alga hace fotosíntesis y produce alimento para ambos.' },
            { icon: 'ShieldCheck', front: '¿El VIH se transmite por abrazos o por compartir platos?', back: 'No. Discriminar a quien vive con VIH es injusto; la prevención se basa en información y cuidado.' },
            { icon: 'Map', front: 'Si en un croquis 2 cm son 50 m, ¿cuánto son 6 cm?', back: '150 m. Es una proporción: se multiplica en cruz y se divide.' },
            { icon: 'Trees', front: '¿Por qué reforestar un talud?', back: 'Las raíces amarran el suelo, el agua se infiltra y se evita la erosión y los derrumbes.' },
            { icon: 'TreeDeciduous', front: 'En el árbol del problema, ¿qué son las raíces?', back: 'Las causas. El tronco es el problema y las ramas son los efectos.' },
            { icon: 'Satellite', front: '¿Qué beneficio nos dejó la investigación espacial?', back: 'Satélites para pronosticar el clima, comunicarnos y ubicarnos con GPS, entre otros.' },
            { icon: 'Scale', front: '¿Cuántas onzas tiene una libra?', back: '16 onzas.' },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['pyd', 'fc', 'l1'], cnb: ['pyd:4.3.3', 'fc:4.3.1', 'fc:3.5.1'], ambito: 'emprender',
            prompt: 'Escribe el **plan de mejora** de tu comisión con "dos estrellas y un deseo", y el **seguimiento**: quién revisará el plan, cada cuánto y cómo sabrán si se cumple.' },
          { minWords: 45, placeholder: 'Estrella 1… Estrella 2… Deseo… Seguimiento: …',
            model: 'Estrella 1: todos los grados llegaron al punto de reunión en menos de tres minutos. Estrella 2: el COCODE aprobó los Q86.75 para pintar las rutas. Deseo: bajar las flechas a la altura de los más pequeños y hacer rutas en dos idiomas. Seguimiento: la comisión de gobierno escolar hará un simulacro cada dos meses, anotará los tiempos en una tabla y comparará si bajan; la maestra Glenda revisará que las rutas sigan despejadas cada lunes.',
            rubric: ['Nombra dos logros concretos', 'Propone una mejora basada en datos o comentarios', 'Define responsables, frecuencia y forma de medir', 'Valora el trabajo en equipo y la inclusión'] },
        ),
        cierre({ areas: ['fc', 'pyd'], cnb: ['fc:4.3.1'] }, ['Analicé los resultados con datos y comentarios', 'Propuse mejoras concretas', 'Definí cómo dar seguimiento al plan', 'Integré lo aprendido en la Unidad 3'],
          ['Cumpliré mi parte del acuerdo de convivencia', 'Repasaré las tarjetas antes de la Semana de validación', 'Invitaré a mi familia a revisar la ruta de evacuación de casa']),
      ],
    }),
  ],
});
