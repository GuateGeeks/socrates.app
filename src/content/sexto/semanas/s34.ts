import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 34 · Unidad 4 "Fortaleciendo nuestro futuro"
 * Tema generador: Herencias que construyen futuro
 * Comunidad primitiva, aportes de India y China e inventos · Constitución, impuestos y cultura de paz ·
 * familia, equidad de género e ITS · poesía, lenguaje figurado, danza y perspectiva.
 */
export default semana({
  id: 's34',
  unidad: 4,
  semana: 34,
  kind: 'aprendizaje',
  temaGenerador: 'Herencias que construyen futuro',
  title: 'Herencias que construyen futuro',
  subtitle: 'Inventos, leyes, familia, versos y danzas que nos unen',
  icon: 'Landmark',
  color: 'var(--area-fc)',
  contexto: 'En Cobán, Alta Verapaz, la escuela organiza la "Feria de la paz y los inventos". Cada grado muestra algo que la humanidad heredó y que nos ayuda a vivir mejor: inventos de pueblos antiguos, leyes que nos protegen, familias que se cuidan con respeto, poemas en q’eqchi’ y en español, y danzas de Guatemala y del mundo. Esta semana descubrirás que el futuro se construye con lo que heredamos y con lo que decidimos hacer con ello.',
  ejes: ['vida-ciudadana', 'equidad', 'vida-familiar', 'multiculturalidad'],
  media: {
    id: 's34-portada', kind: 'video', title: 'La feria de la paz y los inventos', aspect: '16:9', duration: 60,
    alt: 'Estudiantes recorren stands de una feria escolar: una brújula y papel chino, un cartel de la Constitución, un mural sobre la familia y un grupo que baila con listones.',
    brief: 'Video o animación 2D de 60 s en una escuela de Cobán, con neblina matutina y montañas verdes. Recorrido por 4 stands: (1) "Inventos de la humanidad": papel, brújula, números del 0 al 9; (2) "Leyes que nos protegen": cartel con un libro de la Constitución y monedas que se convierten en escuela y hospital; (3) "Familias que se cuidan": dibujos de familias diversas; (4) presentación de danza con listones de colores. Estudiantes q’eqchi’ y ladinos, niñas y niños por igual. Sobreimpreso: "Lo que heredamos + lo que decidimos = nuestro futuro". Marimba de fondo. Sin marcas ni rostros reales.',
  },
  badge: { id: 'medalla-s34', name: 'Heredero del futuro', icon: 'Key', desc: 'Completaste la semana 34 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's34-d1-inventos',
      title: 'De la comunidad primitiva a los grandes inventos',
      icon: 'Lightbulb',
      minutes: 15,
      day: 1,
      gancho: 'Si en tu grado todo fuera de todos (los lápices, la pelota, la refacción), ¿qué cambiaría si de pronto alguien dijera "esto es solo mío"?',
      objetivos: ['Interpretar cómo la propiedad privada, las clases sociales y el Estado terminaron con la comunidad primitiva', 'Agrupar aportes de India, China y otros pueblos antiguos', 'Describir la evolución de un invento', 'Calcular la diferencia entre el dato más alto y el más bajo'],
      resumen: [
        'En la comunidad primitiva la tierra y las herramientas eran de todos, se trabajaba en grupo y no había clases sociales.',
        'Con la agricultura hubo excedentes; algunos se adueñaron de tierras y bienes (propiedad privada), surgieron clases sociales (propietarios y esclavizados) y el Estado para mantener ese orden: así nació el sistema esclavista.',
        'Aportes antiguos: de la India, los números que usamos del 0 al 9 y el ajedrez; de China, el papel, la brújula, la pólvora y la seda; de Egipto, el papiro y un calendario de 365 días.',
        'Los inventos evolucionan: cada uno se apoya en otros anteriores (escritura → imprenta → teléfono → radio → internet).',
        'La diferencia entre el dato más alto y el más bajo se llama rango: rango = dato mayor − dato menor.',
      ],
      media: {
        id: 's34-d1-comunidad', kind: 'animation', title: 'Del "todo es de todos" al "esto es mío"', aspect: '16:9', duration: 70,
        alt: 'Animación que muestra un grupo que comparte la cosecha, luego unas cercas que dividen la tierra, personas en distintos niveles y un palacio con guardias.',
        brief: 'Animación 2D de 70 s con estilo de libro ilustrado, sin violencia. Escena 1 "Comunidad primitiva": grupo diverso recolecta y reparte frutos en círculo. Escena 2 "Agricultura y excedentes": graneros llenos. Escena 3 "Propiedad privada": aparecen cercas y un rótulo "mío". Escena 4 "Clases sociales": pirámide con propietarios arriba y personas esclavizadas abajo (representadas con dignidad, cargando cestas, sin cadenas ni golpes). Escena 5 "Estado": palacio con leyes escritas y guardias. Narración infantil y subtítulos. Colores tierra.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'fc'], cnb: ['ccss:6.2.4'], ambito: 'conocer', title: 'Cuando todo era de todos',
            prompt: 'Hace miles de años, las personas vivían en **comunidades primitivas**. ¿Qué cambió para que aparecieran ricos, pobres y personas esclavizadas? Toca cada tarjeta.' },
          { icon: 'Users', body: 'La **comunidad primitiva** se desarticuló (se deshizo) por tres cambios que se relacionan entre sí.', reveal: [
            { icon: 'Home', front: 'Comunidad primitiva', back: 'La tierra, el agua y las herramientas eran **de todos**. Se cazaba, recolectaba y repartía en grupo. No había clases sociales.' },
            { icon: 'Lock', front: '1. Propiedad privada', back: 'Con la agricultura sobraban alimentos (**excedentes**). Algunas familias se adueñaron de tierras, ganado y cosechas.' },
            { icon: 'Layers', front: '2. Clases sociales', back: 'Se separaron los **propietarios** de quienes no tenían nada. A prisioneros y deudores se les obligó a trabajar sin libertad: personas **esclavizadas**.' },
            { icon: 'Landmark', front: '3. El Estado', back: 'Los propietarios crearon un **gobierno, leyes y ejército** para proteger sus bienes. Así nació el **sistema esclavista**, como en Egipto, Grecia y Roma.' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['ccss'], cnb: ['ccss:6.2.4'], ambito: 'conocer',
            prompt: 'Ordena cómo pasó la humanidad de la comunidad primitiva al **sistema esclavista**.',
            explain: 'Cada cambio causó el siguiente: los excedentes permitieron acumular; acumular creó desigualdad; y la desigualdad se protegió con el Estado. Hoy los derechos humanos prohíben la esclavitud en todo el mundo.' },
          { items: [
            { id: 'e1', text: 'Todos comparten la tierra y el trabajo', icon: 'Users' },
            { id: 'e2', text: 'La agricultura produce excedentes', icon: 'Wheat' },
            { id: 'e3', text: 'Algunas familias se adueñan de tierras y bienes', icon: 'Lock' },
            { id: 'e4', text: 'Surgen clases sociales: propietarios y esclavizados', icon: 'Layers' },
            { id: 'e5', text: 'Se forma el Estado con leyes y ejército', icon: 'Landmark' },
          ], labels: { start: 'Más antiguo', end: 'Más reciente' } },
        ),
        S.sort(
          { fase: 'construir', areas: ['ccss', 'pyd', 'mat'], cnb: ['ccss:6.3.4'], ambito: 'conocer',
            prompt: 'En la feria, cada stand agrupa los **aportes de los pueblos antiguos**. Coloca cada aporte con el pueblo que lo desarrolló.',
            hint: 'Los números que escribes cada día (0 al 9) se llaman indoarábigos: ¿dónde nacieron?',
            explain: 'Los números indoarábigos nacieron en la India y llegaron a Europa gracias a los árabes. China aportó inventos que cambiaron la comunicación y los viajes.',
            media: { id: 's34-d1-aportes', kind: 'image', title: 'Stand de aportes antiguos', aspect: '4:3',
              alt: 'Mesa de feria con tres carteles: India con los números 0-9 y un tablero de ajedrez; China con papel, brújula y un rollo de seda; Egipto con un papiro y un calendario.',
              brief: 'Ilustración plana de una mesa de feria escolar con tres carteles hechos por estudiantes: INDIA (números 0 1 2 3 4 5 6 7 8 9 grandes y un tablero de ajedrez), CHINA (hoja de papel, brújula antigua con aguja, rollo de seda, cohete de pólvora estilizado), EGIPTO (papiro enrollado y calendario con "365 días"). Mapas pequeños ubicando cada pueblo. Estudiantes ficticios explicando. Colores vivos, sin logotipos.' } },
          { buckets: [
            { id: 'ind', label: 'India', icon: 'Sigma' },
            { id: 'chi', label: 'China', icon: 'Compass' },
            { id: 'egi', label: 'Egipto', icon: 'Triangle' },
          ], items: [
            { id: 'a1', text: 'Los números del 0 al 9 que usamos hoy', bucket: 'ind' },
            { id: 'a2', text: 'El ajedrez (en su forma antigua)', bucket: 'ind' },
            { id: 'a3', text: 'El papel', bucket: 'chi' },
            { id: 'a4', text: 'La brújula', bucket: 'chi' },
            { id: 'a5', text: 'La pólvora', bucket: 'chi' },
            { id: 'a6', text: 'El papiro para escribir', bucket: 'egi' },
            { id: 'a7', text: 'Un calendario de 365 días', bucket: 'egi', feedback: 'Los egipcios observaron el Nilo y el cielo para medir un año de 365 días. Los mayas también calcularon un año de 365 días.' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['pyd', 'l1'], cnb: ['pyd:3.2.2'], ambito: 'conocer',
            prompt: 'Los inventos **evolucionan**: uno se apoya en otro. Ordena la evolución de la **comunicación a distancia**.',
            explain: 'Sin escritura no habría imprenta; sin electricidad no habría teléfono ni radio; y sin todos ellos no existiría internet. Cada invento es una herencia para el siguiente.' },
          { items: [
            { id: 'i1', text: 'Escritura en tablillas y papiros', icon: 'ScrollText' },
            { id: 'i2', text: 'Papel (China)', icon: 'FileText' },
            { id: 'i3', text: 'Imprenta de tipos móviles en Europa (siglo XV)', icon: 'BookOpen' },
            { id: 'i4', text: 'Teléfono (siglo XIX)', icon: 'Phone' },
            { id: 'i5', text: 'Radio (fines del siglo XIX y siglo XX)', icon: 'Radio' },
            { id: 'i6', text: 'Internet y teléfono celular (fines del siglo XX)', icon: 'Smartphone' },
          ], labels: { start: 'Más antiguo', end: 'Más reciente' } },
        ),
        S.explain(
          { fase: 'construir', areas: ['mat', 'pyd'], cnb: ['mat:6.3.1'], ambito: 'conocer', title: '¿Cuánto varían los datos? El rango',
            prompt: 'La comisión de la feria anotó cuántas personas visitaron el stand de inventos cada día (datos supuestos): **lunes 45, martes 62, miércoles 38, jueves 71, viernes 54**.' },
          { icon: 'BarChart3', body: 'El **rango** es la diferencia entre el dato **más alto** y el **más bajo**. Dice qué tan separados están los datos.', reveal: [
            { icon: 'TrendingUp', front: 'Dato más alto', back: 'Jueves: **71** visitantes.' },
            { icon: 'Minus', front: 'Dato más bajo', back: 'Miércoles: **38** visitantes.' },
            { icon: 'Calculator', front: 'Rango', back: '71 − 38 = **33**. Entre el mejor y el peor día hubo 33 visitantes de diferencia.' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['l1', 'ccss', 'pyd'], cnb: ['l1:4.3.4', 'pyd:3.2.2'], ambito: 'conocer',
            prompt: 'Haz una **predicción**. En el siglo XV la imprenta permitió hacer muchas copias de un libro en poco tiempo. ¿Qué resultado era más probable?',
            hint: 'Piensa en qué pasa cuando algo se vuelve más fácil y barato de conseguir.',
            explain: 'Predecir es anticipar resultados usando lo que sabemos. Con libros más baratos, más personas aprendieron a leer y las ideas viajaron más rápido.' },
          { options: [
            { id: 'a', text: 'Más personas tendrían libros y aprenderían a leer', icon: 'BookOpen' },
            { id: 'b', text: 'Se dejaría de escribir para siempre', icon: 'X', feedback: 'Al contrario: se escribió y se leyó mucho más.' },
            { id: 'c', text: 'Los libros serían más caros y escasos', icon: 'Coins', feedback: 'Copiar a mano era lento y caro; la imprenta abarató los libros.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:6.3.1'], prompt: 'Boleto de salida: en la feria se vendieron libras de cardamomo (datos supuestos): **14, 9, 22, 17, 11**. ¿Cuál es el **rango**?' },
          { answer: 13, misconceptions: [{ value: 8, msg: 'Restaste 22 − 14. Busca el dato más bajo de toda la lista: es 9.' }, { value: 31, msg: 'Sumaste. El rango es una resta: mayor − menor.' }] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.2.4'], prompt: '¿Qué tres elementos causaron el paso de la comunidad primitiva al sistema esclavista?' },
          { options: [
            { id: 'a', text: 'La propiedad privada, las clases sociales y el Estado' },
            { id: 'b', text: 'El internet, la radio y el teléfono', feedback: 'Esos inventos son de los últimos 150 años; el esclavismo surgió hace miles de años.' },
            { id: 'c', text: 'La brújula, el papel y la pólvora', feedback: 'Son aportes de China, no las causas del esclavismo.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['ccss', 'pyd'], cnb: ['pyd:3.2.2'] }, ['Explico cómo se desarticuló la comunidad primitiva', 'Agrupo aportes de India, China y Egipto', 'Calculo el rango de un grupo de datos'],
          ['Buscaré en casa un objeto que venga de un invento antiguo', 'Calcularé el rango de las temperaturas de esta semana', 'Valoraré lo que otros pueblos aportaron a mi vida']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's34-d2-leyes-paz',
      title: 'Leyes, impuestos y cultura de paz',
      icon: 'Scale',
      minutes: 14,
      day: 2,
      gancho: 'La escuela, el centro de salud y la carretera de tu comunidad, ¿quién los paga?',
      objetivos: ['Identificar ideas principales, secundarias y relaciones de causa y efecto en textos legales', 'Describir por qué contribuir con impuestos mejora la calidad de vida', 'Argumentar la necesidad de una ciudadanía fundada en la cultura de paz'],
      resumen: [
        'La Constitución Política de la República de Guatemala es la ley más importante; su artículo 1 dice que el Estado se organiza para proteger a la persona y a la familia, y su fin supremo es el bien común.',
        'En un texto legal, la idea principal dice qué se ordena o protege; las secundarias explican detalles. Palabras como "por eso", "porque" y "en consecuencia" marcan causa y efecto.',
        'Contribuir a los gastos públicos es un deber cívico. Con los impuestos (como el IVA, que es el 12 %) el Estado paga escuelas, salud, carreteras y seguridad.',
        'La cultura de paz resuelve los conflictos con diálogo, respeto y justicia, sin violencia.',
      ],
      media: {
        id: 's34-d2-impuestos', kind: 'animation', title: 'El viaje de un quetzal de impuesto', aspect: '16:9', duration: 55,
        alt: 'Animación de una moneda que sale de una compra en una tienda, viaja a una caja común y se convierte en pupitres, medicinas y un puente.',
        brief: 'Animación 2D de 55 s. Una familia compra en una tienda de barrio; en el recibo se ilumina "IVA 12 %". Una moneda brillante sale del recibo, viaja junto con muchas otras a una gran caja rotulada "Presupuesto del Estado" y de ahí se reparte en íconos que se transforman: pupitres y libros (educación), medicinas y vacunas (salud), un puente y una carretera (infraestructura), una patrulla y un semáforo (seguridad). Cierre: "Cuando todos contribuimos, todos ganamos". Narración y subtítulos. Sin marcas comerciales.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['fc', 'l1'], cnb: ['fc:3.6.2'], ambito: 'conocer', title: '¿Quién paga lo que es de todos?',
            prompt: 'Las escuelas públicas, los centros de salud y las carreteras se pagan entre **todas y todos** con los **impuestos**. Toca cada tarjeta.' },
          { icon: 'Landmark', body: 'La Constitución señala como **deber cívico** "contribuir a los gastos públicos, en la forma prescrita por la ley".', reveal: [
            { icon: 'ShoppingCart', front: 'IVA', back: 'Impuesto al Valor Agregado: el **12 %** del precio de lo que compramos. Casi todos lo pagamos al comprar.' },
            { icon: 'Briefcase', front: 'ISR', back: 'Impuesto Sobre la Renta: lo pagan personas y empresas según lo que **ganan**.' },
            { icon: 'FileText', front: 'Pedir factura', back: 'La factura hace que el impuesto que pagaste **llegue al Estado** y no se quede en el camino.' },
            { icon: 'School', front: '¿En qué se usa?', back: 'Educación, salud, carreteras, agua, seguridad y justicia: servicios que mejoran la **calidad de vida**.' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'fc'], cnb: ['l1:4.4.1', 'fc:3.6.2'], ambito: 'conocer',
            prompt: 'Lee estos fragmentos adaptados de la **Constitución Política de la República de Guatemala** y responde.' },
          { genre: 'Texto legal (adaptado)', heading: 'Constitución Política de la República de Guatemala', passage:
            '**Artículo 1. Protección a la persona.** El Estado de Guatemala se organiza para proteger a la persona y a la familia; su fin supremo es la realización del bien común.\n\n**Artículo 135. Deberes y derechos cívicos** (fragmento). Son deberes de los guatemaltecos, entre otros: cumplir y velar porque se cumpla la Constitución; trabajar por el desarrollo cívico, cultural, moral, económico y social de los guatemaltecos; contribuir a los gastos públicos, en la forma prescrita por la ley; obedecer las leyes; y guardar el debido respeto a las autoridades.\n\n**Explicación del equipo de la feria:** el Estado necesita recursos para cumplir su fin, que es el bien común. **Por eso**, contribuir con impuestos es un deber. **En consecuencia**, si muchas personas evaden impuestos, hay menos dinero para escuelas y hospitales.',
            questions: [
              { q: '¿Cuál es la idea principal del artículo 1?', options: [
                { id: 'a', text: 'El Estado existe para proteger a la persona y a la familia y buscar el bien común' },
                { id: 'b', text: 'Las personas deben pagar el IVA' },
                { id: 'c', text: 'Hay que respetar a las autoridades' },
              ], correct: 'a' },
              { q: 'En el artículo 135, "obedecer las leyes" es…', options: [
                { id: 'a', text: 'Una idea secundaria: uno de los deberes de la lista' },
                { id: 'b', text: 'La idea principal de toda la Constitución' },
                { id: 'c', text: 'Una opinión del equipo de la feria' },
              ], correct: 'a', why: 'La idea principal del artículo son los deberes cívicos; cada deber de la lista es un detalle (idea secundaria).' },
              { q: 'Según la explicación, ¿cuál es un EFECTO de que muchas personas evadan impuestos?', options: [
                { id: 'a', text: 'Hay menos dinero para escuelas y hospitales' },
                { id: 'b', text: 'Se construyen más carreteras' },
                { id: 'c', text: 'El Estado protege mejor a la familia' },
              ], correct: 'a', why: '"En consecuencia" anuncia el efecto.' },
            ] },
        ),
        S.highlight(
          { fase: 'construir', areas: ['l1', 'fc'], cnb: ['l1:4.4.1'], ambito: 'conocer',
            prompt: 'En este artículo del **reglamento escolar**, toca las **palabras que marcan causa o efecto**.',
            explain: '"Porque", "por eso", "por lo tanto" y "en consecuencia" conectan una causa con su efecto. Encontrarlas te ayuda a entender por qué existe cada norma.' },
          { target: 'conectores de causa y efecto', text: 'Artículo 7. Cuidado del agua. Los estudiantes cerrarán bien los chorros {porque} el agua es escasa en la época seca. {Por eso}, cada grado nombrará un encargado del agua. Quien encuentre una fuga avisará a la dirección; {por lo tanto}, se podrá reparar pronto. El año pasado se desperdició mucha agua; {en consecuencia}, faltó para limpiar los baños.' },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'fc'], cnb: ['fc:3.6.2'], ambito: 'hacer',
            prompt: 'Supongamos que la escuela compra pintura para el mural de la paz y el precio **sin impuesto** es **Q 250**. El IVA es el **12 %**. ¿Cuántos quetzales de IVA se pagan?',
            hint: '12 % = 12 de cada 100. Calcula 250 × 12 ÷ 100.',
            explain: '250 × 0.12 = 30. Se pagan Q 30 de IVA, y el total es Q 280. Esos Q 30 ayudan a pagar servicios públicos.' },
          { answer: 30, unit: 'quetzales', allowDecimal: true, misconceptions: [{ value: 280, msg: 'Ese es el total con impuesto. La pregunta es solo el IVA.' }, { value: 12, msg: '12 es el porcentaje, no los quetzales. Calcula el 12 % de 250.' }] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'ef'], cnb: ['fc:4.1.1'], ambito: 'convivir',
            prompt: 'Una situación real en la feria. ¿Qué harías para construir **cultura de paz**?' },
          { scene: { icon: 'Users', text: 'En el partido de fútbol de la feria, un jugador del otro grado empuja a **Nicolás**. Algunos de tu equipo gritan: "¡Vamos a desquitarnos!".' }, options: [
            { id: 'a', icon: 'Flame', text: 'Empujar de vuelta para que aprendan', consequence: 'Se arma una pelea, el árbitro suspende el partido y dos niños se lastiman. Nadie gana.', values: ['Venganza'], constructive: false },
            { id: 'b', icon: 'Handshake', text: 'Calmar al equipo, pedir al árbitro que marque la falta y hablar con el otro jugador después', consequence: 'Se marca la falta, el jugador pide disculpas y el partido termina con saludo de manos. La justicia llegó sin violencia.', values: ['Diálogo', 'Justicia', 'Autocontrol'], constructive: true },
            { id: 'c', icon: 'EyeOff', text: 'Irte a tu casa enojado sin decir nada', consequence: 'Te alejas del conflicto, pero queda sin resolver y el enojo sigue. El diálogo también es necesario.', values: ['Evitar el conflicto'], constructive: false },
          ] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['fc', 'l1'], cnb: ['fc:4.1.1'], ambito: 'convivir',
            prompt: 'Escribe un **argumento** para el cartel de la feria: ¿por qué Guatemala necesita una ciudadanía fundada en la **cultura de paz**? Da una razón y un ejemplo.' },
          { minWords: 30, placeholder: 'Guatemala necesita una cultura de paz porque…',
            model: 'Guatemala necesita una ciudadanía fundada en la cultura de paz porque vivió un conflicto armado que causó mucho dolor, y la violencia nunca resuelve los problemas. Por ejemplo, cuando en mi escuela dos grados discuten por la cancha, dialogar y hacer turnos funciona mejor que pelear. Si aprendemos a resolver así los conflictos, construiremos un futuro más justo.',
            rubric: ['Doy una razón clara (uso "porque")', 'Incluyo un ejemplo de mi vida o mi comunidad', 'Propongo el diálogo o una acción sin violencia', 'Cierro con una conclusión'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.6.2'], prompt: 'Boleto de salida: ¿por qué contribuir con impuestos mejora la calidad de vida de la comunidad?' },
          { options: [
            { id: 'a', text: 'Porque con ellos el Estado paga escuelas, salud, carreteras y seguridad' },
            { id: 'b', text: 'Porque así los precios bajan a la mitad', feedback: 'El IVA se suma al precio; no lo baja.' },
            { id: 'c', text: 'Porque el dinero se guarda sin usarse', feedback: 'Los impuestos se usan en servicios públicos para el bien común.' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['l1', 'fc'], cnb: ['l1:4.4.1'], prompt: 'En la norma: "Por la lluvia, el acto se hará en el salón y, en consecuencia, se suspenderá el partido de fútbol", clasifica cada parte.' },
          { buckets: [
            { id: 'cau', label: 'Causa', icon: 'CloudRain' },
            { id: 'efe', label: 'Efecto', icon: 'Target' },
          ], items: [
            { id: 'x1', text: 'Está lloviendo', bucket: 'cau' },
            { id: 'x2', text: 'El acto se hará en el salón', bucket: 'efe' },
            { id: 'x3', text: 'Se suspende el partido de fútbol', bucket: 'efe' },
          ] },
        ),
        cierre({ areas: ['fc', 'l1'], cnb: ['fc:4.1.1'] }, ['Identifico la idea principal y la causa-efecto en un texto legal', 'Explico para qué sirven los impuestos', 'Propongo soluciones pacíficas a los conflictos'],
          ['Pediré factura cuando mi familia compre algo', 'Resolveré mi próximo desacuerdo dialogando', 'Leeré con mi familia el artículo 1 de la Constitución']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's34-d3-familia-equidad',
      title: 'Familias que se cuidan con equidad',
      icon: 'HeartHandshake',
      minutes: 14,
      day: 3,
      gancho: 'En tu casa, ¿quién cocina, quién lava, quién toma decisiones? ¿Podría ser distinto?',
      objetivos: ['Ilustrar hechos que representan la equidad de género', 'Explicar una visión ética del matrimonio y la decisión de tener hijos', 'Describir cómo afectan las infecciones de transmisión sexual a la familia y la sociedad, diferenciando información científica de opiniones', 'Describir a tu familia en inglés'],
      resumen: [
        'Equidad de género es que mujeres y hombres tengan las mismas oportunidades y derechos: estudiar, trabajar, votar, decidir y compartir las tareas del hogar.',
        'Una visión ética del matrimonio se basa en el amor, el respeto, la libertad para decidir y la responsabilidad compartida. En Guatemala, la ley solo permite casarse a partir de los 18 años.',
        'Tener hijos es una decisión responsable de personas adultas, que deben poder cuidarlos, alimentarlos y educarlos.',
        'Las infecciones de transmisión sexual (ITS) afectan la salud de la persona, pueden pasar de la madre al bebé, generan gastos y ausencias en el trabajo, y a veces causan discriminación. Se previenen con información, decisiones responsables y atención médica.',
        'La información científica se basa en estudios y pruebas; una opinión expresa lo que alguien cree.',
      ],
      media: {
        id: 's34-d3-equidad', kind: 'image', title: 'Momentos de equidad', aspect: '16:9',
        alt: 'Tres escenas: una mujer que vota, una niña y un niño que estudian juntos en una computadora, y un padre que cocina mientras la madre revisa tareas con sus hijos.',
        brief: 'Ilustración en tríptico con personajes ficticios de distintos pueblos de Guatemala: (1) "Votar": mujer con güipil deposita su voto en una urna con dedo marcado; (2) "Estudiar": niña y niño en un laboratorio de computación escolar, ambos al teclado; (3) "Compartir el hogar": padre cocinando frijoles en la estufa mientras la madre revisa cuadernos con su hija e hijo. Título arriba: "La equidad se construye todos los días". Estilo cálido y respetuoso, sin estereotipos.',
      },
      steps: [
        S.sort(
          { fase: 'explorar', areas: ['cnt', 'fc'], cnb: ['cnt:3.3.4'], ambito: 'convivir',
            prompt: 'El stand de 6.º quiere **ilustrar eventos que representan la equidad de género**. ¿Cuáles la representan y cuáles no?',
            explain: 'La equidad no es que todos hagan lo mismo, sino que tengan las mismas oportunidades y responsabilidades. Hace varias décadas, las mujeres guatemaltecas aún luchaban por su derecho a votar; hoy es un derecho reconocido para todas y todos.' },
          { buckets: [
            { id: 'si', label: 'Representa equidad', icon: 'Scale', color: 'var(--c-ok)' },
            { id: 'no', label: 'No representa equidad', icon: 'X', color: 'var(--c-hint)' },
          ], items: [
            { id: 'g1', text: 'Una mujer y un hombre reciben el mismo pago por el mismo trabajo', bucket: 'si' },
            { id: 'g2', text: 'Solo los niños pueden jugar fútbol en el recreo', bucket: 'no' },
            { id: 'g3', text: 'Hermanas y hermanos se turnan para lavar los trastos', bucket: 'si' },
            { id: 'g4', text: 'Una comunidad elige a una mujer como alcaldesa comunitaria', bucket: 'si' },
            { id: 'g5', text: 'A una niña no la dejan estudiar "porque se va a casar"', bucket: 'no', feedback: 'Estudiar es un derecho de todas las niñas y los niños.' },
            { id: 'g6', text: 'Un padre lleva a su bebé al control de salud', bucket: 'si' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:3.3.3'], ambito: 'ser', title: 'Una mirada ética al matrimonio y la familia',
            prompt: 'Formar una pareja o una familia es una decisión muy importante. Toca cada tarjeta para conocer qué la hace **ética y responsable**.' },
          { icon: 'Heart', body: 'La ética nos ayuda a decidir lo que es **bueno y justo** para nosotros y para los demás.', reveal: [
            { icon: 'Handshake', front: 'Libertad', back: 'Casarse debe ser una decisión **libre** de las dos personas, sin presión ni obligación.' },
            { icon: 'Scale', front: 'Edad', back: 'En Guatemala, la ley permite casarse solo a partir de los **18 años**. Antes es tiempo de estudiar y crecer.' },
            { icon: 'HeartHandshake', front: 'Respeto e igualdad', back: 'La pareja se trata con **respeto**, sin violencia, y comparte decisiones y tareas.' },
            { icon: 'Baby', front: 'Procreación responsable', back: 'Tener hijos es una decisión de **adultos** que pueden darles amor, alimento, salud y educación. Se **planifica** en pareja y con orientación de salud.' },
          ] },
        ),
        S.tf(
          { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:3.3.3', 'cnt:3.3.4'], ambito: 'ser',
            prompt: '¿Verdadero o falso? Piensa en lo que acabas de aprender.',
            explain: 'Estas ideas te ayudarán a tomar decisiones responsables cuando seas adulto. Si tienes dudas, conversa con tu familia o con tu docente.' },
          { statements: [
            { text: 'Tener un hijo es una decisión que conviene planificar entre personas adultas y responsables.', answer: true },
            { text: 'En un matrimonio ético, solo una persona toma todas las decisiones.', answer: false, why: 'Las decisiones se comparten con respeto e igualdad.' },
            { text: 'En Guatemala, una niña de 14 años puede casarse legalmente.', answer: false, why: 'La ley solo permite el matrimonio a partir de los 18 años.' },
            { text: 'Cuidar a los hijos es responsabilidad de la madre y del padre.', answer: true },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt', 'ccss'], cnb: ['cnt:3.4.2'], ambito: 'conocer',
            prompt: 'Las **infecciones de transmisión sexual (ITS)** son infecciones que pasan de una persona a otra por contacto sexual. Clasifica sus **efectos** según a quién afectan más directamente.',
            explain: 'Las ITS se previenen con información científica, decisiones responsables en la vida adulta y atención médica a tiempo. Muchas tienen tratamiento; por eso es importante acudir al centro de salud sin vergüenza.',
            media: { id: 's34-d3-its', kind: 'diagram', title: 'Efectos de las ITS: persona, familia y sociedad', aspect: '1:1',
              alt: 'Tres círculos concéntricos: en el centro una persona, luego una casa con una familia y afuera una comunidad con un centro de salud.',
              brief: 'Diagrama de tres círculos concéntricos con íconos simples, sin imágenes de cuerpos ni de enfermedades. CENTRO "Persona": corazón con pulso ("salud afectada, dolor, puede afectar la fertilidad"). MEDIO "Familia": casa ("puede pasar de la madre al bebé, gastos en tratamiento, preocupación"). EXTERIOR "Sociedad": edificios y centro de salud ("ausencias en el trabajo y la escuela, gasto público en salud, discriminación que hay que evitar"). Colores suaves, estilo educativo.' } },
          { buckets: [
            { id: 'fam', label: 'Familia', icon: 'Home', color: 'var(--area-cnt)' },
            { id: 'soc', label: 'Sociedad', icon: 'Building2', color: 'var(--area-ccss)' },
          ], items: [
            { id: 'i1', text: 'Una madre embarazada puede transmitir la infección a su bebé si no recibe control médico', bucket: 'fam' },
            { id: 'i2', text: 'La familia gasta dinero en medicinas y viajes al hospital', bucket: 'fam' },
            { id: 'i3', text: 'Aumenta el gasto de los hospitales públicos', bucket: 'soc' },
            { id: 'i4', text: 'Personas enfermas faltan al trabajo y baja la producción', bucket: 'soc' },
            { id: 'i5', text: 'Hay preocupación y tensión en el hogar', bucket: 'fam' },
            { id: 'i6', text: 'Si hay discriminación, las personas no buscan atención y la infección se extiende', bucket: 'soc', feedback: 'La discriminación empeora el problema: tratar con respeto ayuda a que la gente se atienda.' },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['l2', 'cnt'], cnb: ['l2:3.3.3', 'cnt:3.4.2'], ambito: 'conocer',
            prompt: 'En un grupo de mensajes circulan frases sobre la salud. Diferencia la **información científica** de las **opiniones**.',
            hint: 'La información científica se puede comprobar con estudios; las opiniones usan "yo creo", "me parece", "seguro que".',
            explain: 'Ante un tema de salud, busca fuentes científicas: el centro de salud, el Ministerio de Salud o tu docente. Las opiniones sin pruebas pueden causar errores y discriminación.' },
          { buckets: [
            { id: 'cie', label: 'Información científica', icon: 'Microscope', color: 'var(--area-cnt)' },
            { id: 'opi', label: 'Opinión', icon: 'MessageCircle', color: 'var(--c-hint)' },
          ], items: [
            { id: 'f1', text: 'Muchas ITS se pueden detectar con pruebas médicas', bucket: 'cie' },
            { id: 'f2', text: 'Yo creo que eso solo les pasa a otras personas', bucket: 'opi' },
            { id: 'f3', text: 'El control prenatal ayuda a proteger al bebé de algunas infecciones', bucket: 'cie' },
            { id: 'f4', text: 'Me parece que ir al médico da vergüenza', bucket: 'opi' },
            { id: 'f5', text: 'Varias ITS tienen tratamiento si se atienden a tiempo', bucket: 'cie' },
          ] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l3', 'fc'], cnb: ['l3:4.1.1', 'l3:4.1.2'], ambito: 'hacer',
            prompt: 'English time! Lee la **short autobiography** de Ana y complétala. Recuerda: _I am_ (yo soy/estoy), _I have_ (yo tengo), _I like_ (me gusta), _My … is_ (mi … es).',
            explain: 'Una autobiografía corta dice quién eres, dónde vives, cómo es tu familia y qué te gusta. Nota cómo en la familia de Ana todos comparten las tareas.' },
          { text: 'MY FAMILY\nHello! My name [[is]] Ana. I [[am]] eleven years old. I live in Cobán.\nI [[have]] one brother and one sister.\nMy father cooks and my mother fixes the bikes. We all [[help]] at home.\nMy favorite sport is football. I [[like]] to play with my brother.', distractors: ['are', 'has'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.4.2'], prompt: 'Boleto de salida: ¿cuál es un efecto de las ITS en la **sociedad**?' },
          { options: [
            { id: 'a', text: 'Aumenta el gasto en salud pública y hay ausencias en el trabajo' },
            { id: 'b', text: 'Mejora la economía del país', feedback: 'Al contrario: genera gastos y ausencias.' },
            { id: 'c', text: 'Ninguno: solo afectan a una persona', feedback: 'Afectan también a la familia y a la sociedad.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l2', 'cnt'], cnb: ['l2:3.3.3', 'cnt:3.3.4'], prompt: '¿Cuál de estas frases es **información científica** y no una opinión?' },
          { options: [
            { id: 'a', text: 'Las niñas y los niños tienen la misma capacidad para aprender matemáticas' },
            { id: 'b', text: 'Creo que las niñas son mejores para cocinar', feedback: '"Creo que" indica opinión; además es un estereotipo.' },
            { id: 'c', text: 'Me parece que el fútbol es solo para niños', feedback: '"Me parece" indica opinión, y no es equitativa.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['cnt', 'fc'], cnb: ['cnt:3.3.4'] }, ['Reconozco situaciones de equidad de género', 'Explico por qué formar una familia es una decisión responsable de adultos', 'Diferencio información científica de opiniones'],
          ['Compartiré una tarea de casa que antes no hacía', 'Conversaré con un adulto de confianza si tengo dudas sobre mi salud', 'Escribiré en inglés tres frases sobre mi familia']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's34-d4-versos-danzas',
      title: 'Versos, danzas y carteles de la feria',
      icon: 'Music',
      minutes: 15,
      day: 4,
      gancho: '¿Alguna vez dijiste que alguien "es un sol" o que corre "como el viento"? ¡Ya estabas haciendo poesía!',
      objetivos: ['Reconocer verso, estrofa, paralelismo y la función de distintos poemas', 'Usar símiles y metáforas y distinguir fuentes orales y escritas de tu comunidad', 'Practicar danzas y movimientos sincronizados en grupo', 'Dar sensación de espacio a un cartel'],
      resumen: [
        'Un verso es cada línea de un poema; una estrofa es un grupo de versos. El paralelismo repite una idea con otras palabras en versos seguidos; es muy usado en la poesía maya, como en el Popol Wuj.',
        'Los poemas sirven para expresar sentimientos, celebrar, agradecer, recordar y enseñar.',
        'El símil compara usando "como", "parece" o "semejante a"; la metáfora compara sin esas palabras: "tus ojos son luceros".',
        'Fuentes orales: relatos, canciones y rezos que se transmiten de voz en voz. Fuentes escritas: libros, actas, periódicos y documentos.',
        'Para dar sensación de espacio en un cartel: pon lo cercano abajo y más grande, lo lejano arriba y más pequeño, y usa líneas que se juntan hacia un punto.',
      ],
      media: {
        id: 's34-d4-danzas', kind: 'video', title: 'Danzas de Guatemala y del mundo', aspect: '16:9', duration: 75,
        alt: 'Grupos escolares bailan un son con marimba, una punta garífuna con tambores y una danza con listones que forma figuras en el patio.',
        brief: 'Video (o animación) de 75 s en el patio de una escuela: (1) pareja baila son guatemalteco con marimba; (2) grupo garífuna baila punta con tambores; (3) mención con ilustración de danzas del mundo: samba (Brasil) y flamenco (España); (4) cierre: 12 estudiantes con listones de colores forman un círculo, luego una estrella y luego una espiral, sincronizados con la música. Rótulos con el nombre y origen de cada danza. Vestuario respetuoso, personajes ficticios, sin marcas.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l2', 'l1'], cnb: ['l2:5.3.1', 'l2:5.3.2'], ambito: 'conocer', title: '¿Cómo está hecho un poema?',
            prompt: 'El grado q’eqchi’ y el grado de español preparan poemas para la feria. Toca cada tarjeta y conoce las partes y funciones de un poema.' },
          { icon: 'Feather', body: 'Los poemas se escriben en **versos**, no en párrafos, y tienen muchas **funciones**.', reveal: [
            { icon: 'AlignJustify', front: 'Verso', back: 'Cada **línea** del poema.' },
            { icon: 'Layers', front: 'Estrofa', back: 'Un **grupo de versos**, separado de otro por un espacio.' },
            { icon: 'Copy', front: 'Paralelismo', back: 'Decir **la misma idea dos veces** con palabras distintas, en versos seguidos. Es típico de la poesía en idiomas mayas: en el Popol Wuj se nombra a los creadores en parejas, como "Creadores, Formadores".' },
            { icon: 'Sparkles', front: 'Funciones', back: '**Expresar** sentimientos, **celebrar**, **agradecer** o rezar, **recordar** la historia y **enseñar**.' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['l2', 'l1'], cnb: ['l2:5.3.1', 'l2:5.3.2', 'l1:5.3.2'], ambito: 'conocer',
            prompt: 'Lee el poema que escribió el grado para la feria y responde.' },
          { genre: 'Poema', heading: 'Canto a mi montaña', passage:
            'Montaña verde de Cobán,\ncerro que guarda la neblina,\ntu cumbre es un sombrero de nubes,\ntu río canta como una niña.\n\nGracias por el agua clara,\ngracias por el agua limpia,\ngracias por la tierra buena,\ngracias por la tierra viva.',
            questions: [
              { q: '¿Cuántas estrofas y cuántos versos tiene el poema?', options: [
                { id: 'a', text: '2 estrofas y 8 versos' },
                { id: 'b', text: '8 estrofas y 2 versos' },
                { id: 'c', text: '1 estrofa y 4 versos' },
              ], correct: 'a' },
              { q: '"Gracias por el agua clara, / gracias por el agua limpia" es un ejemplo de…', options: [
                { id: 'a', text: 'Paralelismo: repite la idea con otras palabras' },
                { id: 'b', text: 'Una noticia' },
                { id: 'c', text: 'Una receta' },
              ], correct: 'a' },
              { q: '¿Cuál es la función principal de la segunda estrofa?', options: [
                { id: 'a', text: 'Agradecer a la naturaleza' },
                { id: 'b', text: 'Dar instrucciones' },
                { id: 'c', text: 'Informar un dato científico' },
              ], correct: 'a' },
              { q: '"Tu río canta como una niña" es…', options: [
                { id: 'a', text: 'Un símil, porque usa "como"' },
                { id: 'b', text: 'Una metáfora sin palabra de comparación' },
                { id: 'c', text: 'Un dato numérico' },
              ], correct: 'a' },
            ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l1', 'l2'], cnb: ['l1:5.3.2'], ambito: 'conocer',
            prompt: 'Clasifica cada frase: ¿es **símil** (compara con "como", "parece", "semejante a") o **metáfora** (compara sin esas palabras)?',
            hint: 'Busca la palabra "como", "parece" o "semejante". Si no está, es metáfora.',
            explain: 'El símil dice "es como"; la metáfora dice directamente "es". Ambos embellecen el lenguaje y crean imágenes en la mente.' },
          { buckets: [
            { id: 'sim', label: 'Símil', icon: 'Link' },
            { id: 'met', label: 'Metáfora', icon: 'Sparkles' },
          ], items: [
            { id: 's1', text: 'La marimba suena como lluvia sobre el tejado', bucket: 'sim' },
            { id: 's2', text: 'El lago de Atitlán es un espejo azul', bucket: 'met' },
            { id: 's3', text: 'Sus ojos parecen dos granos de café', bucket: 'sim' },
            { id: 's4', text: 'Mi abuela es la raíz de la familia', bucket: 'met' },
            { id: 's5', text: 'El vuelo del quetzal es semejante a una llama verde', bucket: 'sim' },
            { id: 's6', text: 'La neblina es una sábana sobre Cobán', bucket: 'met' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l1', 'ccss'], cnb: ['l1:5.4.1'], ambito: 'conocer',
            prompt: 'Para escribir sus poemas, el grado buscó en las **fuentes de su comunidad**. Clasifícalas en **orales** o **escritas**.',
            explain: 'Las fuentes orales viven en la memoria y la voz de las personas; las escritas se guardan en papel o en digital. Ambas son valiosas para recopilar la tradición.' },
          { buckets: [
            { id: 'ora', label: 'Fuente oral', icon: 'Mic' },
            { id: 'esc', label: 'Fuente escrita', icon: 'FileText' },
          ], items: [
            { id: 'u1', text: 'Canción de cuna que canta la abuela', bucket: 'ora' },
            { id: 'u2', text: 'Libro de actas de la municipalidad', bucket: 'esc' },
            { id: 'u3', text: 'Relato de un anciano sobre la fundación del pueblo', bucket: 'ora' },
            { id: 'u4', text: 'Periódico local antiguo', bucket: 'esc' },
            { id: 'u5', text: 'Oración de agradecimiento en una ceremonia de siembra', bucket: 'ora' },
            { id: 'u6', text: 'Libro de historia de la comunidad escrito por un maestro', bucket: 'esc' },
          ] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['ef', 'art'], cnb: ['ef:1.4.21', 'ef:1.4.19'], ambito: 'convivir',
            prompt: 'En la feria se **promueven danzas populares** de Guatemala y del mundo. Une cada danza con su origen.',
            explain: 'Conocer y bailar danzas de otros pueblos fortalece los valores interculturales: respeto, curiosidad y aprecio por la diversidad.' },
          { leftTitle: 'Danza', rightTitle: 'Origen', pairs: [
            { id: 'son', left: 'Son con marimba', leftIcon: 'Music', right: 'Guatemala (tradición mestiza y maya)' },
            { id: 'pun', left: 'Punta', leftIcon: 'Drum', right: 'Pueblo garífuna de Guatemala y el Caribe' },
            { id: 'sam', left: 'Samba', leftIcon: 'PartyPopper', right: 'Brasil' },
            { id: 'fla', left: 'Flamenco', leftIcon: 'Guitar', right: 'España' },
          ] },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'art'], cnb: ['ef:1.4.15', 'ef:1.4.16', 'ef:1.4.19'], ambito: 'hacer',
            prompt: '¡A bailar! 1) **Disociación**: marcha en tu lugar mientras tus brazos hacen círculos (piernas y brazos con movimientos distintos). 2) Con tu grupo y un **listón o pañuelo**, formen un **círculo**, luego una **estrella**, al ritmo de la música. Respeten los turnos y ayuden a quien le cueste. Mide tu pulso antes y después.' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después de la disociación y las figuras con listones', exercise: { name: 'Marcha con círculos de brazos y figuras en grupo', icon: 'Users', seconds: 60 } },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['art', 'l1'], cnb: ['art:2.2.3'], ambito: 'hacer',
            prompt: 'El grado diseña el **cartel** de la feria: un camino que lleva a la escuela con montañas al fondo. ¿Qué técnicas **aumentan la sensación de espacio**? Elige todas las correctas.',
            explain: 'Nuestro ojo interpreta lo grande y bajo como cercano, y lo pequeño y alto como lejano. Las líneas del camino que se juntan en un punto crean profundidad.',
            media: { id: 's34-d4-perspectiva', kind: 'diagram', title: 'Trucos para dar profundidad', aspect: '4:3',
              alt: 'Cartel con un camino cuyos bordes se juntan en un punto del horizonte, un árbol grande abajo en primer plano y árboles pequeños arriba, cerca de las montañas.',
              brief: 'Diagrama didáctico sobre un cartel de feria: línea de horizonte y un punto de fuga marcados en rojo; los bordes del camino convergen hacia ese punto (líneas punteadas); un árbol grande en la parte INFERIOR con rótulo "primer plano: abajo y grande"; árboles medianos al medio y pequeños ARRIBA cerca de las montañas con rótulo "fondo: arriba y pequeño". Flechas y rótulos en español. Estilo limpio, colores del área de Expresión Artística.' } },
          { multiple: true, options: [
            { id: 'a', text: 'Poner el árbol más cercano en la parte de abajo y más grande', icon: 'TreePine' },
            { id: 'b', text: 'Hacer las montañas lejanas más pequeñas y arriba', icon: 'Mountain' },
            { id: 'c', text: 'Dibujar los bordes del camino juntándose hacia un punto', icon: 'Route' },
            { id: 'd', text: 'Dibujar todo del mismo tamaño y en la misma línea', icon: 'Minus', feedback: 'Así el cartel se ve plano: no hay diferencia entre cerca y lejos.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.fill(
          { fase: 'comprobar', areas: ['l1', 'l2'], cnb: ['l1:5.3.2', 'l2:5.3.1'], prompt: 'Boleto de salida: completa.' },
          { text: 'Cada línea de un poema es un [[verso]]. Un grupo de versos forma una [[estrofa]]. "El volcán es un gigante dormido" es una [[metáfora]]. "El volcán duerme como un gigante" es un [[símil]].', distractors: ['párrafo', 'noticia'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['art'], cnb: ['art:2.2.3'], prompt: 'En un cartel, ¿dónde y cómo dibujas una casa que está **lejos**?' },
          { options: [
            { id: 'a', text: 'Más arriba y más pequeña' },
            { id: 'b', text: 'Abajo y muy grande', feedback: 'Abajo y grande se usa para lo que está cerca.' },
            { id: 'c', text: 'Igual que las cosas cercanas', feedback: 'Si todo es igual, el cartel se ve plano.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['l2', 'ef'], cnb: ['ef:1.4.21'] }, ['Reconozco verso, estrofa y paralelismo', 'Uso símiles y metáforas', 'Bailo coordinando brazos y piernas con mi grupo', 'Doy profundidad a un dibujo'],
          ['Escribiré un poema de dos estrofas con un paralelismo', 'Aprenderé un paso de una danza de otro pueblo', 'Pediré a un familiar una canción o relato de mi comunidad']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's34-d5-reto',
      title: 'Reto de la semana 34',
      icon: 'Trophy',
      minutes: 13,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste sobre herencias que construyen futuro', 'Obtener la medalla "Heredero del futuro" (70 % o más)'],
      resumen: ['Superé el reto de la semana 34: sociedades antiguas, inventos, leyes, impuestos, paz, familia, poesía, danza y perspectiva.'],
      media: {
        id: 's34-d5-reto', kind: 'image', title: 'Medalla Heredero del futuro', aspect: '1:1',
        alt: 'Medalla dorada con una llave antigua cuyo mango tiene forma de paloma y una pequeña brújula.',
        brief: 'Ilustración de medalla circular dorada 1024×1024: al centro una llave antigua cuyo mango es una paloma de la paz; detrás, una brújula estilizada y hojas de cardamomo. Cinta con los colores de las áreas del CNB. Fondo transparente, sin texto.',
      },
      steps: [
        S.order({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.2.4'], prompt: 'Ordena el origen del sistema esclavista.' },
          { items: [
            { id: 'a', text: 'Comunidad primitiva: todo es de todos' },
            { id: 'b', text: 'Aparece la propiedad privada' },
            { id: 'c', text: 'Se forman clases sociales' },
            { id: 'd', text: 'Se crea el Estado' },
          ] }),
        S.match({ fase: 'comprobar', areas: ['ccss', 'pyd'], cnb: ['ccss:6.3.4', 'pyd:3.2.2'], prompt: 'Une cada aporte con el pueblo que lo desarrolló.' },
          { pairs: [
            { id: 'a', left: 'Números del 0 al 9 que usamos hoy', right: 'India' },
            { id: 'b', left: 'Papel y brújula', right: 'China' },
            { id: 'c', left: 'Papiro', right: 'Egipto' },
          ] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:6.3.1'], prompt: 'Temperaturas máximas de una semana en Cobán (°C): 24, 19, 27, 22, 18. ¿Cuál es el rango?' },
          { answer: 9, unit: '°C' }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.4.1'], prompt: 'Una norma dice: "Por la sequía, se racionará el agua; en consecuencia, el chorro se abrirá solo en las mañanas". ¿Cuál es la causa de que se racione el agua?' },
          { options: [{ id: 'a', text: 'La sequía' }, { id: 'b', text: 'Abrir el chorro en las mañanas' }, { id: 'c', text: 'Racionar el agua' }], correct: ['a'] }),
        S.number({ fase: 'comprobar', areas: ['fc', 'mat'], cnb: ['fc:3.6.2'], prompt: 'Supongamos que una bicicleta cuesta Q 1,000 sin impuesto. ¿Cuánto es el IVA del 12 %?' },
          { answer: 120, unit: 'quetzales' }),
        S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:4.1.1'], prompt: '¿Qué acción construye una cultura de paz?' },
          { options: [{ id: 'a', text: 'Dialogar y buscar una solución justa cuando hay un conflicto' }, { id: 'b', text: 'Responder a un insulto con otro insulto' }, { id: 'c', text: 'Ignorar siempre los problemas' }], correct: ['a'] }),
        S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.3.3', 'cnt:3.4.2', 'cnt:3.3.4'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'Las ITS pueden afectar a la familia, por ejemplo, pasando de la madre al bebé.', answer: true },
            { text: 'La equidad de género significa que solo los hombres deciden en casa.', answer: false },
            { text: 'Tener hijos es una decisión responsable de personas adultas.', answer: true },
          ] }),
        S.sort({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.3.2'], prompt: '¿Símil o metáfora?' },
          { buckets: [{ id: 's', label: 'Símil', icon: 'Link' }, { id: 'm', label: 'Metáfora', icon: 'Sparkles' }],
            items: [
              { id: 'a', text: 'La luna es una tortilla de plata', bucket: 'm' },
              { id: 'b', text: 'Corre como un venado', bucket: 's' },
              { id: 'c', text: 'Tu risa parece una campana', bucket: 's' },
            ] }),
        S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.3.1', 'l2:5.3.2'], prompt: '"Somos hijos del maíz, / somos nietos de la milpa" repite la idea con otras palabras. ¿Qué recurso es?' },
          { options: [{ id: 'a', text: 'Paralelismo' }, { id: 'b', text: 'Estrofa' }, { id: 'c', text: 'Rango' }], correct: ['a'] }),
        S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:4.1.1', 'l3:4.1.2'], prompt: 'Complete in English.' },
          { text: 'My name [[is]] Luis. I [[have]] two sisters. I [[like]] basketball.', distractors: ['am', 'has'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 4 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.2.4'], prompt: 'En la comunidad primitiva, la tierra y las herramientas…' },
      { options: [{ id: 'a', text: 'Eran de todos' }, { id: 'b', text: 'Eran de un rey' }, { id: 'c', text: 'Se compraban con dinero' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.3.4'], prompt: '¿Qué pueblo antiguo inventó la pólvora?' },
      { options: [{ id: 'a', text: 'China' }, { id: 'b', text: 'Egipto' }, { id: 'c', text: 'Grecia' }], correct: ['a'] }),
    S.order({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:3.2.2'], prompt: 'Ordena la evolución de estos inventos, del más antiguo al más reciente.' },
      { items: [{ id: 'a', text: 'Imprenta' }, { id: 'b', text: 'Teléfono' }, { id: 'c', text: 'Internet' }] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:6.3.1'], prompt: 'Estaturas (cm) de 5 estudiantes: 138, 152, 145, 131, 149. ¿Cuál es el rango?' },
      { answer: 21, unit: 'cm' }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.6.2'], prompt: '¿Para qué sirve pedir factura al comprar?' },
      { options: [{ id: 'a', text: 'Para que el impuesto pagado llegue al Estado' }, { id: 'b', text: 'Para pagar menos impuestos' }, { id: 'c', text: 'Para nada' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.4.1'], prompt: 'Según el artículo 1 de la Constitución, ¿cuál es el fin supremo del Estado?' },
      { options: [{ id: 'a', text: 'La realización del bien común' }, { id: 'b', text: 'Cobrar impuestos' }, { id: 'c', text: 'Organizar ferias' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:4.3.4'], prompt: 'Si una comunidad siembra árboles en la ladera, ¿qué resultado puedes predecir para la época de lluvias?' },
      { options: [{ id: 'a', text: 'Menos deslaves, porque las raíces sostienen la tierra' }, { id: 'b', text: 'Más deslaves' }, { id: 'c', text: 'Dejará de llover' }], correct: ['a'] }),
    S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.3.4', 'cnt:3.3.3'], prompt: '¿Representa equidad de género o no?' },
      { buckets: [{ id: 's', label: 'Equidad', icon: 'Scale' }, { id: 'n', label: 'No equidad', icon: 'X' }],
        items: [
          { id: 'a', text: 'Niñas y niños eligen libremente su deporte', bucket: 's' },
          { id: 'b', text: 'Solo las mujeres cuidan a los hijos', bucket: 'n' },
          { id: 'c', text: 'La pareja decide junta cuándo tener hijos', bucket: 's' },
        ] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:3.3.3'], prompt: '¿Cuál es información científica?' },
      { options: [{ id: 'a', text: 'Las vacunas han reducido enfermedades como el sarampión' }, { id: 'b', text: 'A mí me parece que las vacunas duelen mucho' }, { id: 'c', text: 'Creo que nadie se enferma' }], correct: ['a'] }),
    S.match({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:1.4.21', 'ef:1.4.15', 'ef:1.4.16'], prompt: 'Une cada término con su significado.' },
      { pairs: [
        { id: 'a', left: 'Punta', right: 'Danza del pueblo garífuna' },
        { id: 'b', left: 'Disociación', right: 'Mover brazos y piernas de forma distinta al mismo tiempo' },
        { id: 'c', left: 'Movimiento sincronizado', right: 'Todo el grupo se mueve igual y al mismo ritmo' },
      ] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:2.2.3'], prompt: '¿Qué técnica crea profundidad en un dibujo de una calle?' },
      { options: [{ id: 'a', text: 'Hacer que los bordes de la calle se junten hacia un punto' }, { id: 'b', text: 'Dibujar todo del mismo tamaño' }, { id: 'c', text: 'Poner lo lejano abajo y grande' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1', 'ccss'], cnb: ['l1:5.4.1'], prompt: '¿Cuál es una fuente ORAL de la comunidad?' },
      { options: [{ id: 'a', text: 'El relato que cuenta un anciano sobre la fundación del pueblo' }, { id: 'b', text: 'El libro de actas municipal' }, { id: 'c', text: 'Un periódico antiguo' }], correct: ['a'] }),
  ],
});
