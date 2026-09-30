import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 24 · Unidad 3 "Valorando nuestra convivencia"
 * Tema generador: Señales que cuidan la vida
 * Símbolos en mapas, tejidos y calendarios · proporciones y escalas · gestación y prevención de ITS y VIH ·
 * equidad y complementariedad · juego de cooperación-oposición · investigar con fuentes y líderes comunitarios.
 */
export default semana({
  id: 's24',
  unidad: 3,
  semana: 24,
  kind: 'aprendizaje',
  temaGenerador: 'Señales que cuidan la vida',
  title: 'Señales que cuidan la vida',
  subtitle: 'Símbolos, salud, equidad e investigación en la comunidad',
  icon: 'Signpost',
  color: 'var(--area-cnt)',
  contexto: 'En una escuela de Santa Cruz del Quiché, sexto grado prepara la Feria de la Salud y la Cultura. Deben dibujar un croquis para llegar al puesto de salud, explicar qué significan los símbolos de los tejidos, informar con respeto cómo se previenen el VIH y otras infecciones, y entrevistar a una comadrona y a un alcalde comunitario. Esta semana descubrirás que leer bien las señales, las de un mapa, un güipil o un cartel de salud, también es una forma de cuidar la vida y convivir mejor.',
  ejes: ['vida-familiar', 'multiculturalidad', 'equidad', 'seguridad'],
  media: {
    id: 's24-portada', kind: 'video', title: 'La Feria de la Salud y la Cultura', aspect: '16:9', duration: 60,
    alt: 'Estudiantes de una escuela del altiplano preparan carteles de salud, un croquis de su comunidad y una mesa con tejidos y un calendario maya.',
    brief: 'Video o animación 2D de 60 s en una escuela rural de Quiché. Escenas: (1) una niña y un niño dibujan un croquis con rosa de los vientos y símbolos; (2) mesa con un güipil, una pieza de cerámica y una rueda del calendario maya de 260 días; (3) cartel de prevención con íconos de escudo, corazón y manos (sin imágenes de cuerpos); (4) entrevista a una comadrona y a un alcalde comunitario (personajes ilustrados, no personas reales). Sobreimpreso final: "Leer las señales también cuida la vida". Marimba suave de fondo.',
  },
  badge: { id: 'medalla-s24', name: 'Lector de señales', icon: 'Signpost', desc: 'Completaste la semana 24 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's24-d1-simbolos-mapas',
      title: 'Mapas, tejidos y símbolos que hablan',
      icon: 'Map',
      minutes: 14,
      day: 1,
      gancho: 'Si un visitante llega a tu comunidad, ¿cómo le explicarías dónde está el puesto de salud sin acompañarlo?',
      objetivos: ['Leer los símbolos de un mapa o croquis', 'Interpretar símbolos de tejidos y calendarios de nuestra cultura', 'Usar proporciones para calcular distancias con una escala', 'Elegir la posición del papel según la forma del modelo'],
      resumen: [
        'Los mapas y croquis usan símbolos convencionales (río, carretera, iglesia, escuela, hospital) que se explican en la leyenda o simbología.',
        'La rosa de los vientos indica el norte; la escala dice cuántos metros reales representa cada centímetro del dibujo.',
        'Una proporción es una igualdad entre dos razones: si 2 cm son 50 m, 6 cm son 150 m. El término desconocido se encuentra multiplicando en cruz y dividiendo.',
        'Los tejidos, la cerámica y los calendarios mayas transmiten ideas con símbolos; su significado puede variar de un pueblo a otro y se aprende preguntando a quienes los crean.',
      ],
      media: {
        id: 's24-d1-croquis', kind: 'diagram', title: 'Croquis de la comunidad', aspect: '4:3',
        alt: 'Croquis de un pueblo con río, carretera, escuela, iglesia, mercado y puesto de salud, con rosa de los vientos, escala y leyenda.',
        brief: 'Croquis ilustrado de un pueblo del altiplano visto desde arriba, estilo mapa escolar: río azul serpenteante, carretera gris con línea punteada, puente, escuela (ícono de libro), iglesia (cruz), mercado (canasta), puesto de salud (cruz verde), cancha y milpas. Esquina superior derecha: rosa de los vientos con N destacada. Abajo: barra de escala "2 cm = 50 m" y un recuadro de leyenda con cada símbolo y su nombre. Colores planos, líneas limpias, sin nombres de lugares reales.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['l1', 'ccss'], cnb: ['l1:3.3.1'], ambito: 'conocer', title: 'Un mapa es un texto con símbolos',
            prompt: 'Un **croquis** o un **mapa** se "lee" como un texto, pero en lugar de palabras usa **símbolos**. Toca cada tarjeta para descubrir sus partes.' },
          { icon: 'Map', body: 'Sin leyenda, un mapa sería un rompecabezas. Con ella, cualquier persona puede orientarse.', reveal: [
            { icon: 'Compass', front: 'Rosa de los vientos', back: 'Indica los **puntos cardinales**. La N señala el **norte**.' },
            { icon: 'List', front: 'Leyenda o simbología', back: 'Explica qué significa **cada símbolo**: una cruz verde puede ser un puesto de salud; una línea azul, un río.' },
            { icon: 'Ruler', front: 'Escala', back: 'Dice cuánto mide en la **realidad** cada centímetro del dibujo. Por ejemplo: 1 cm = 25 m.' },
            { icon: 'MapPin', front: 'Símbolos convencionales', back: 'Dibujos sencillos que **todos acordamos** leer igual: escuela, iglesia, carretera, puente.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['l1', 'ccss'], cnb: ['l1:3.3.1'], prompt: 'Observa la leyenda del croquis de la feria. Une cada **símbolo** con lo que representa.',
            explain: 'Los colores también comunican: el azul casi siempre representa agua y el verde, vegetación.' },
          { leftTitle: 'Símbolo', rightTitle: 'Significado', pairs: [
            { id: 'rio', left: 'Línea azul ondulada', leftIcon: 'Waves', right: 'Río' },
            { id: 'car', left: 'Línea gris con rayas en medio', leftIcon: 'Route', right: 'Carretera' },
            { id: 'sal', left: 'Cruz verde', leftIcon: 'Plus', right: 'Puesto de salud' },
            { id: 'nor', left: 'Flecha con la letra N', leftIcon: 'Compass', right: 'Dirección del norte' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['mat', 'l1'], cnb: ['mat:4.6.1'], ambito: 'conocer', title: 'La escala es una proporción',
            prompt: 'En el croquis, **2 cm representan 50 m**. ¿Cuántos metros son 6 cm? Para saberlo usamos una **proporción**: dos razones que son iguales.' },
          { icon: 'Calculator', body: '2/50 = 6/**x**. En una proporción, **los productos cruzados son iguales**: 2 × x = 50 × 6. Entonces x = 300 ÷ 2 = **150 m**.', reveal: [
            { icon: 'Scale', front: '¿Qué es una razón?', back: 'Una comparación por división entre dos cantidades: 2 cm **a** 50 m se escribe 2/50.' },
            { icon: 'X', front: 'Multiplicar en cruz', back: 'En a/b = c/d se cumple **a × d = b × c**.' },
            { icon: 'Search', front: 'Término desconocido', back: 'Multiplica los dos números que están en diagonal y **divide** entre el tercero.' },
          ] },
        ),
        S.number(
          { fase: 'construir', areas: ['mat', 'ccss'], cnb: ['mat:4.6.1'], prompt: 'En el mismo croquis (2 cm = 50 m), de la escuela al puesto de salud hay **8 cm**. ¿Cuántos metros hay en la realidad?',
            hint: 'Plantea 2/50 = 8/x y multiplica en cruz.',
            explain: '2 × x = 50 × 8 = 400, así que x = 400 ÷ 2 = 200 m.' },
          { answer: 200, unit: 'm', stimulus: '2 cm → 50 m\n8 cm → ¿? m', misconceptions: [{ value: 400, msg: 'Multiplicaste 50 × 8, pero faltó dividir entre 2.' }, { value: 56, msg: 'No se suman los números: se multiplican en cruz y se divide.' }] },
        ),
        S.sort(
          { fase: 'construir', areas: ['l1', 'art', 'ccss'], cnb: ['l1:3.3.3', 'l1:3.2.4'], ambito: 'conocer',
            prompt: 'Los pueblos de Guatemala también escriben con símbolos en **tejidos**, **cerámica** y **calendarios**. Clasifica dónde se encuentra cada símbolo.',
            hint: 'Piensa en el material: hilo, barro o una cuenta de días.',
            explain: 'Muchas tejedoras explican que el rombo de los güipiles representa el universo y el camino del sol; el calendario sagrado maya (Cholq\'ij) combina 20 días con 13 números para formar 260 días. Los significados pueden cambiar de un pueblo a otro: por eso conviene preguntar a quienes los crean.',
            media: { id: 's24-d1-simbolos', kind: 'image', title: 'Símbolos en hilo, barro y tiempo', aspect: '16:9',
              alt: 'Tres paneles: detalle de un güipil con rombos, una tinaja de barro con líneas en zigzag y una rueda de calendario con 20 signos.',
              brief: 'Ilustración en tres paneles iguales con fondo crema: (1) acercamiento a un güipil de telar de cintura con rombos y figuras de aves en colores rojo, amarillo y morado; (2) tinaja de barro tradicional con bandas de zigzag y puntos pintados; (3) rueda del calendario maya con los 20 glifos de los días alrededor y los números del 1 al 13 en barras y puntos. Rótulos: "Tejido", "Cerámica", "Calendario". Sin reproducir diseños de una sola comunidad identificable; estilo respetuoso, no folclórico.' } },
          { buckets: [
            { id: 'tej', label: 'Tejido', icon: 'Shirt', color: 'var(--area-art)' },
            { id: 'cer', label: 'Cerámica', icon: 'Package', color: 'var(--area-cnt)' },
            { id: 'cal', label: 'Calendario', icon: 'CalendarDays', color: 'var(--area-mat)' },
          ], items: [
            { id: 's1', text: 'Rombos bordados en el pecho de un güipil', bucket: 'tej' },
            { id: 's2', text: 'Figuras de aves en una faja hecha en telar de cintura', bucket: 'tej' },
            { id: 's3', text: 'Bandas en zigzag pintadas en una tinaja de barro', bucket: 'cer' },
            { id: 's4', text: 'Signos de los 20 días del Cholq\'ij', bucket: 'cal', feedback: 'El calendario sagrado de 260 días combina 20 signos de días con los números del 1 al 13.' },
            { id: 's5', text: 'Números en barras y puntos para contar los días', bucket: 'cal' },
          ] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['art', 'mat'], cnb: ['art:3.2.2', 'art:3.2.5'], ambito: 'hacer',
            prompt: 'Para la feria harás una lámina con **técnica mixta** (lana, semillas, papel de colores y crayón) de un **güipil extendido**, que mide 70 cm de ancho y 50 cm de alto. ¿Cómo colocas el papel?',
            explain: 'Antes de dibujar se estudia qué dimensión predomina en el modelo: si es más ancho que alto, el papel va horizontal. Las texturas de la técnica mixta, además, permiten que personas con baja visión "lean" la lámina con las manos.' },
          { options: [
            { id: 'a', text: 'Horizontal, porque el modelo es más ancho que alto', icon: 'Maximize2' },
            { id: 'b', text: 'Vertical, porque así caben más colores', icon: 'FileText', feedback: 'La posición no depende de los colores sino de las dimensiones del modelo: 70 cm de ancho es más que 50 cm de alto.' },
            { id: 'c', text: 'Da igual cómo se coloque', icon: 'RefreshCw', feedback: 'Si lo pones vertical, el güipil quedará pequeño o cortado. Primero se estudian las dimensiones.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.6.1'], prompt: 'Boleto de salida: en la proporción **3/12 = x/36**, ¿cuánto vale x?' },
          { options: [
            { id: 'a', text: '9' },
            { id: 'b', text: '27', feedback: '36 − 12 + 3 no es el método: multiplica 3 × 36 = 108 y divide entre 12.' },
            { id: 'c', text: '144', feedback: '144 es 12 × 12. Recuerda: 3 × 36 ÷ 12.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['l1', 'art'], cnb: ['l1:3.3.1', 'l1:3.3.3', 'l1:3.2.4'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'La leyenda de un mapa explica el significado de cada símbolo.', answer: true },
            { text: 'La rosa de los vientos sirve para medir distancias.', answer: false, why: 'La rosa de los vientos indica las direcciones; las distancias se calculan con la escala.' },
            { text: 'Los símbolos de los tejidos y calendarios transmiten ideas de una cultura.', answer: true },
            { text: 'Un símbolo de un güipil significa exactamente lo mismo en todos los pueblos.', answer: false, why: 'Los significados pueden variar de una comunidad a otra; por eso se pregunta a quienes tejen.' },
          ] },
        ),
        cierre({ areas: ['l1', 'art'], cnb: ['l1:3.2.4'] }, ['Leo los símbolos, la rosa de los vientos y la escala de un croquis', 'Encuentro el término desconocido de una proporción', 'Valoro los símbolos de los tejidos y calendarios de mi cultura'],
          ['Dibujaré un croquis del camino de mi casa a la escuela con leyenda', 'Preguntaré a una tejedora qué significa un símbolo de su güipil', 'Revisaré la escala antes de calcular distancias en un mapa']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's24-d2-vida-prevencion',
      title: 'La vida antes de nacer y cómo protegerla',
      icon: 'HeartPulse',
      minutes: 15,
      day: 2,
      gancho: '¿Cuánto tiempo crees que tarda en nacer un ternero? ¿Y un perrito? ¿Por qué no es igual que en las personas?',
      objetivos: ['Comparar el tiempo de gestación de algunos animales y del ser humano', 'Explicar cómo se transmite y cómo se previene el VIH', 'Ilustrar formas de prevenir las infecciones de transmisión sexual', 'Rechazar la discriminación hacia las personas que viven con VIH'],
      resumen: [
        'La gestación es el tiempo que una cría se desarrolla dentro de su madre. En el ser humano dura unos 9 meses (unas 40 semanas); en el perro unos 2 meses y en el elefante cerca de 22 meses.',
        'Las infecciones de transmisión sexual (ITS) pasan de una persona a otra por contacto sexual; algunas, como el VIH, también por sangre o de la madre al bebé.',
        'El VIH se previene con información, postergando el inicio de las relaciones sexuales, con fidelidad y uso correcto del condón en la vida adulta, sin compartir jeringas ni objetos cortantes, y con control médico en el embarazo.',
        'El VIH NO se transmite por abrazos, besos en la mejilla, compartir platos, baños o piscinas ni por picaduras de zancudo. Discriminar a quien vive con VIH es injusto.',
      ],
      media: {
        id: 's24-d2-gestacion', kind: 'animation', title: 'Relojes de la gestación', aspect: '16:9', duration: 50,
        alt: 'Animación con relojes de arena junto a un conejo, un perro, una vaca, un caballo, un elefante y una mamá embarazada, que se vacían a distintas velocidades.',
        brief: 'Animación 2D de 50 s. En fila aparecen siluetas amables de: coneja, perra, vaca, yegua, elefanta y una mujer embarazada (vestida, de perfil, estilo sencillo). Sobre cada una, un reloj de arena que se vacía mientras un contador marca los meses aproximados: 1, 2, 9, 11, 22 y 9. Narración: "Cada especie tiene su propio tiempo para formarse antes de nacer". Nada de imágenes internas del cuerpo ni partos. Colores pastel, subtítulos en español.',
      },
      steps: [
        S.choice(
          { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:3.2.4'], ambito: 'conocer',
            prompt: 'Haz tu predicción. De estos animales, ¿cuál crees que pasa **más tiempo** formándose dentro de su madre antes de nacer?',
            explain: 'La elefanta tiene la gestación más larga de los mamíferos terrestres: cerca de 22 meses, casi dos años. En general, los animales grandes tienen gestaciones más largas.' },
          { layout: 'grid', options: [
            { id: 'a', text: 'Elefante', icon: 'Mountain' },
            { id: 'b', text: 'Perro', icon: 'Dog', feedback: 'La perra lleva a sus cachorros unos 2 meses: es una de las gestaciones más cortas de la lista.' },
            { id: 'c', text: 'Conejo', icon: 'Carrot', feedback: 'La coneja tiene una gestación de apenas un mes, aproximadamente.' },
            { id: 'd', text: 'Ser humano', icon: 'Baby', feedback: 'El embarazo humano dura unos 9 meses: bastante, pero menos que el del elefante.' },
          ], correct: ['a'] },
        ),
        S.chart(
          { fase: 'construir', areas: ['cnt', 'mat'], cnb: ['cnt:3.2.4'], ambito: 'hacer',
            prompt: 'Construye una gráfica con los **meses aproximados de gestación** de cada especie. Usa la tabla de datos.',
            hint: 'Arrastra cada barra hasta el número de meses de la tabla.',
            explain: 'La gestación del caballo (unos 11 meses) es un poco más larga que la humana, y la del elefante es más del doble. La vaca, que no aparece en la gráfica, tiene una gestación parecida a la humana: unos 9 meses.' },
          { categories: [
            { id: 'con', label: 'Conejo', icon: 'Carrot' },
            { id: 'per', label: 'Perro', icon: 'Dog' },
            { id: 'hum', label: 'Ser humano', icon: 'Baby' },
            { id: 'cab', label: 'Caballo', icon: 'Footprints' },
            { id: 'ele', label: 'Elefante', icon: 'Mountain' },
          ], data: [1, 2, 9, 11, 22], max: 24, step: 1, unit: 'meses', source: 'Gestación aproximada: conejo 1, perro 2, ser humano 9, caballo 11, elefante 22 meses' },
        ),
        S.explain(
          { fase: 'construir', areas: ['cnt', 'l1', 'fc'], cnb: ['cnt:3.5.3', 'l1:4.1.3'], ambito: 'conocer', title: 'Palabras claras para cuidar la vida',
            prompt: 'Para informar en la feria, primero hay que entender el **vocabulario** del tema. Toca cada tarjeta. Si tienes dudas, conversa con tu familia o con tu maestra o maestro.' },
          { icon: 'ShieldCheck', body: 'Hablar de salud con palabras correctas y respetuosas nos ayuda a **protegernos** y a **no discriminar**.', reveal: [
            { icon: 'Users', front: 'ITS', back: '**Infecciones de transmisión sexual**: pasan de una persona a otra por contacto sexual. Muchas no dan síntomas al inicio.' },
            { icon: 'Microscope', front: 'VIH', back: '**Virus de Inmunodeficiencia Humana**: debilita las **defensas** del cuerpo. Se transmite por contacto sexual, por sangre (jeringas compartidas) y de la madre al bebé.' },
            { icon: 'Shield', front: 'Sida', back: 'Etapa avanzada de la infección por VIH, cuando las defensas están muy bajas. Con **tratamiento médico** a tiempo, muchas personas con VIH llevan una vida larga.' },
            { icon: 'Stethoscope', front: 'Prevención', back: 'Acciones para **evitar** una enfermedad antes de que ocurra: informarse, decidir con responsabilidad y acudir al servicio de salud.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:3.5.3', 'fc:2.5.3'], ambito: 'conocer',
            prompt: 'Muchas personas discriminan por **miedo y falta de información**. Clasifica: ¿por cuál de estas vías **sí** puede transmitirse el VIH y por cuál **no**?',
            hint: 'El VIH necesita pasar por sangre, fluidos sexuales o de la madre al bebé. No sobrevive en objetos del día a día.',
            explain: 'Convivir, jugar, abrazar o comer con una persona que vive con VIH no transmite el virus. Saberlo evita que marginemos a alguien injustamente.' },
          { buckets: [
            { id: 'si', label: 'Sí lo transmite', icon: 'AlertTriangle', color: 'var(--area-cnt)' },
            { id: 'no', label: 'No lo transmite', icon: 'Check', color: 'var(--c-ok)' },
          ], items: [
            { id: 'v1', text: 'Compartir jeringas o agujas', icon: 'Syringe', bucket: 'si' },
            { id: 'v2', text: 'Relaciones sexuales sin protección', icon: 'Users', bucket: 'si' },
            { id: 'v3', text: 'De la madre al bebé si no recibe control médico', icon: 'Baby', bucket: 'si' },
            { id: 'v4', text: 'Abrazar o dar la mano', icon: 'Handshake', bucket: 'no' },
            { id: 'v5', text: 'Compartir platos, vasos o el baño', icon: 'Utensils', bucket: 'no' },
            { id: 'v6', text: 'Picaduras de zancudo', icon: 'Bug', bucket: 'no', feedback: 'El VIH no se reproduce en los insectos: los zancudos no lo transmiten.' },
          ] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['cnt', 'art', 'l1'], cnb: ['cnt:3.4.1', 'cnt:3.5.3'], ambito: 'hacer',
            prompt: 'La comisión de salud hará un **cartel**, un **mensaje de radio**, un **mural** y un **folleto** para ilustrar la prevención. Une cada medio con el mensaje que mejor le queda.',
            explain: 'Cada medio tiene fortalezas: la radio llega lejos con la voz, el cartel necesita pocas palabras y un ícono claro, el folleto permite explicar más y el mural invita a toda la comunidad.',
            media: { id: 's24-d2-cartel', kind: 'image', title: 'Cartel de prevención de la feria', aspect: '3:4',
              alt: 'Cartel escolar con un escudo grande, la frase "Infórmate, decide, cuídate" y tres íconos: libro, persona adulta de confianza y puesto de salud.',
              brief: 'Diseño de cartel vertical hecho "a mano" por estudiantes (textura de papel, crayón y recortes). Centro: escudo verde con un corazón. Título: "Infórmate, decide, cuídate". Tres viñetas con ícono: libro ("Busca información correcta"), dos personas conversando ("Pregunta a un adulto de confianza"), cruz verde ("Acude al puesto de salud"). Pie: "Todas y todos merecemos respeto". Sin cuerpos, sin imágenes sexuales, sin marcas.' } },
          { leftTitle: 'Medio', rightTitle: 'Mensaje', pairs: [
            { id: 'car', left: 'Cartel en el corredor', leftIcon: 'FileText', right: '"Infórmate, decide, cuídate" con un escudo' },
            { id: 'rad', left: 'Cápsula en la radio comunitaria', leftIcon: 'Radio', right: 'Una conversación de 30 s entre una enfermera y una joven' },
            { id: 'fol', left: 'Folleto para las familias', leftIcon: 'BookOpen', right: 'Explicación de las formas de transmisión y prevención del VIH' },
            { id: 'mur', left: 'Mural en la pared de la escuela', leftIcon: 'Palette', right: 'Manos de todos los colores que dicen "Aquí no se discrimina"' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'cnt'], cnb: ['fc:2.5.3'], ambito: 'convivir', prompt: '¿Qué harías tú?' },
          { scene: { icon: 'MessageCircle', text: 'En el recreo, alguien dice que no hay que jugar con **Ernesto** porque "un familiar suyo tiene VIH y se puede pegar". Varios se alejan de él.' }, options: [
            { id: 'a', icon: 'EyeOff', text: 'Alejarme también, por si acaso', consequence: 'Ernesto se queda solo y triste. El rumor crece y se basa en información falsa.', values: ['Miedo', 'Indiferencia'], constructive: false },
            { id: 'b', icon: 'BookOpen', text: 'Explicar que el VIH no se transmite jugando ni compartiendo, e invitar a Ernesto a jugar', consequence: 'Algunos compañeros se sorprenden y vuelven a jugar. Ernesto se siente acompañado.', values: ['Solidaridad', 'Información', 'Respeto'], constructive: true },
            { id: 'c', icon: 'Users', text: 'Contarle a la maestra para que el grado converse con información correcta', consequence: 'La maestra organiza una charla con el personal del puesto de salud y el grado aprende a no discriminar.', values: ['Responsabilidad', 'Justicia'], constructive: true },
          ] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.2.4', 'cnt:3.5.3'], prompt: 'Boleto de salida: ¿verdadero o falso?' },
          { statements: [
            { text: 'La gestación humana dura aproximadamente 9 meses.', answer: true },
            { text: 'La gestación del perro es más larga que la del ser humano.', answer: false, why: 'La del perro dura unos 2 meses; la humana, unos 9.' },
            { text: 'No compartir jeringas ni agujas ayuda a prevenir el VIH.', answer: true },
            { text: 'El VIH se transmite al compartir un vaso de agua.', answer: false, why: 'El VIH no se transmite por saliva en objetos, abrazos ni por compartir utensilios.' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt', 'fc'], cnb: ['cnt:3.4.1', 'fc:2.5.3'], prompt: '¿Cuál de estos mensajes para la feria es **correcto y respetuoso**?' },
          { options: [
            { id: 'a', text: '"Infórmate y acude al puesto de salud: prevenir es cuidar tu vida y la de los demás"' },
            { id: 'b', text: '"Aléjate de quienes tienen VIH"', feedback: 'Este mensaje discrimina y es falso: la convivencia diaria no transmite el VIH.' },
            { id: 'c', text: '"Las ITS solo les dan a otras personas, no a nosotros"', feedback: 'Cualquier persona puede adquirir una ITS; por eso la prevención es para todos.' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['cnt', 'fc'], cnb: ['cnt:3.4.1'] }, ['Comparo la gestación de animales y del ser humano', 'Explico cómo se transmite y se previene el VIH', 'Rechazo la discriminación hacia las personas con VIH'],
          ['Conversaré con una persona adulta de confianza sobre lo que aprendí', 'Corregiré con respeto los rumores falsos sobre el VIH', 'Diseñaré un mensaje de prevención para mi escuela']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's24-d3-equidad-juego',
      title: 'Equipo parejo: equidad en casa y en la cancha',
      icon: 'Users',
      minutes: 14,
      day: 3,
      gancho: 'En tu casa, ¿quién cocina, quién lava, quién decide qué se compra? ¿Y si todos ayudaran un poco?',
      objetivos: ['Reconocer relaciones de equidad y complementariedad entre hombres, mujeres, niñas y niños', 'Describir el papel de la persona en las culturas maya, garífuna, xinka y occidental', 'Usar tiempos verbales y adverbios al escribir', 'Aplicar el bote, el pase por arriba del hombro y estrategias de cooperación-oposición'],
      resumen: [
        'Equidad es dar a cada persona lo que necesita para tener las mismas oportunidades; complementariedad es reconocer que hombres, mujeres, niñas y niños se necesitan y aportan distinto.',
        'En muchas comunidades mayas, garífunas y xinkas la persona se entiende como parte de su comunidad y de la naturaleza; en la tradición occidental se destaca a la persona como individuo con derechos. Todas valoran el servicio y la dignidad.',
        'Los verbos cambian según el tiempo: presente (juego), pasado (jugué) y futuro (jugaré). Los adverbios modifican a un verbo, a un adjetivo o a otro adverbio: "corre muy rápido".',
        'En un juego de cooperación-oposición se coopera con el equipo (pasar, apoyar) y se opone al rival (marcar, interceptar).',
      ],
      media: {
        id: 's24-d3-cancha', kind: 'video', title: 'Bote, pase y doble ritmo', aspect: '16:9', duration: 45,
        alt: 'Video de niñas y niños en una cancha escolar practicando bote con cada mano, pase por arriba del hombro con salto y entrada en doble ritmo.',
        brief: 'Video de 45 s, cámara lateral y en cámara lenta, en una cancha de cemento de escuela pública. Equipos mixtos. Muestra: (1) bote con mano derecha, luego izquierda, luego alternando; (2) parada en un tiempo (caen los dos pies a la vez); (3) pase por arriba del hombro con salto, a media altura, a un compañero desmarcado; (4) doble ritmo hacia el aro. Rótulos en pantalla con el nombre de cada técnica. Ropa deportiva sin marcas; rostros no protagonistas.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'fc'], cnb: ['ccss:4.2.4'], ambito: 'convivir', title: 'Equidad y complementariedad',
            prompt: 'Para la feria, las familias ayudan a preparar la comida y los puestos. ¿Cómo repartir el trabajo con **justicia**? Toca cada tarjeta.' },
          { icon: 'Scale', body: 'Una familia o una escuela funciona mejor cuando **todas las personas** aportan y **todas** tienen oportunidades.', reveal: [
            { icon: 'Scale', front: 'Igualdad', back: 'Todas las personas tienen los **mismos derechos**: estudiar, opinar, jugar, decidir.' },
            { icon: 'HandHeart', front: 'Equidad', back: 'Dar a cada quien **lo que necesita** para tener las mismas oportunidades. Por ejemplo, apoyar más a quien apenas aprende a leer.' },
            { icon: 'Puzzle', front: 'Complementariedad', back: 'Hombres, mujeres, niñas y niños **se necesitan**: cada quien aporta algo y juntos forman un todo, como las dos manos.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:4.2.4', 'fc:2.5.3'], ambito: 'convivir',
            prompt: 'Lee cada situación de la organización de la feria. ¿Muestra **equidad** o **inequidad**?',
            explain: 'Cuando las tareas se reparten por costumbre ("eso es de mujeres", "eso es de hombres") y no por capacidad y acuerdo, alguien carga con más trabajo y pierde oportunidades.' },
          { buckets: [
            { id: 'eq', label: 'Equidad', icon: 'Scale', color: 'var(--c-ok)' },
            { id: 'ineq', label: 'Inequidad', icon: 'X', color: 'var(--area-cnt)' },
          ], items: [
            { id: 'e1', text: 'Mamá y papá cocinan juntos y los hijos lavan los trastos', bucket: 'eq' },
            { id: 'e2', text: 'Solo las niñas barren el aula porque "les toca"', bucket: 'ineq', feedback: 'Barrer no depende de ser niña o niño: todos pueden y deben colaborar.' },
            { id: 'e3', text: 'El comité de la feria tiene mujeres y hombres que votan por igual', bucket: 'eq' },
            { id: 'e4', text: 'No dejan exponer a un niño que usa silla de ruedas', bucket: 'ineq', feedback: 'Excluir a alguien por una discapacidad es discriminación. Lo equitativo es preparar una rampa o un espacio accesible.' },
            { id: 'e5', text: 'Los niños más pequeños reparten volantes, tarea adecuada a su edad', bucket: 'eq' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['fc', 'ccss'], cnb: ['fc:3.3.1'], ambito: 'convivir',
            prompt: 'En Guatemala conviven cuatro pueblos. Une cada cultura con un valor que muchas de sus comunidades destacan sobre **el papel de la persona**.',
            explain: 'Son rasgos generales, no reglas: dentro de cada pueblo hay diversidad. Lo común a todos es que la persona tiene dignidad y aporta a los demás.' },
          { leftTitle: 'Cultura', rightTitle: 'Papel de la persona', pairs: [
            { id: 'may', left: 'Maya', leftIcon: 'Sun', right: 'Servir a la comunidad con un cargo, como el de alcalde comunitario o comadrona' },
            { id: 'gar', left: 'Garífuna', leftIcon: 'Drum', right: 'Honrar a los ancestros y mantener viva la comunidad con música, danza e idioma' },
            { id: 'xin', left: 'Xinka', leftIcon: 'Droplets', right: 'Cuidar la tierra y el agua del territorio como bien de todos' },
            { id: 'occ', left: 'Occidental', leftIcon: 'Scale', right: 'Desarrollarse como individuo libre, con derechos y responsabilidades' },
          ] },
        ),
        S.highlight(
          { fase: 'construir', areas: ['l2', 'ef'], cnb: ['l2:5.1.7'], ambito: 'conocer',
            prompt: 'Los **adverbios** dicen cómo, cuándo, dónde o cuánto. Pueden modificar a un verbo ("corre **rápido**"), a un adjetivo ("**muy** alta") o a otro adverbio ("**bastante** bien"). Toca todos los adverbios de la crónica del partido.',
            hint: 'Pregúntate: ¿cómo?, ¿cuándo?, ¿cuánto? Muchos terminan en -mente.',
            explain: '"Hoy" dice cuándo; "rápidamente" y "bien" dicen cómo; "lejos" dice dónde; "muy" modifica al adjetivo "atento"; "bastante" modifica al adverbio "lejos".' },
          { target: 'adverbios', text: '{Hoy} jugamos un partido mixto. Marta botó el balón {rápidamente} con la mano izquierda. Pedro estaba {muy} atento y lanzó {bastante} {lejos}. Al final, todo el equipo cooperó {bien}.' },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l2', 'ef'], cnb: ['l2:5.1.6'], ambito: 'hacer',
            prompt: 'Completa la narración con el verbo en el **tiempo** correcto: pasado (ayer), presente (hoy) o futuro (mañana).',
            explain: 'Las palabras "ayer", "hoy" y "mañana" son pistas del tiempo verbal: practicó (pasado), bota (presente), jugarán (futuro).' },
          { text: 'Ayer Andrea [[practicó]] el pase por arriba del hombro. Hoy Luis [[bota]] el balón con cada mano. Mañana los dos equipos [[jugarán]] la final.',
            distractors: ['practica', 'botó', 'jugaron'] },
        ),
        S.order(
          { fase: 'aplicar', areas: ['ef'], cnb: ['ef:2.1.11', 'ef:2.1.7'], ambito: 'hacer',
            prompt: 'Ordena los pasos de una jugada: **bote con parada de un tiempo** y luego **pase por arriba del hombro con salto** a un compañero desmarcado.',
            explain: 'En la parada de un tiempo los dos pies llegan al suelo a la vez: así puedes pivotar con cualquiera. El pase por arriba del hombro, con salto y a media altura, supera al defensor.' },
          { items: [
            { id: 'p1', text: 'Boto el balón alternando mano derecha e izquierda' },
            { id: 'p2', text: 'Hago la parada de un tiempo: caen los dos pies a la vez' },
            { id: 'p3', text: 'Ya detenido, pivoto y busco con la vista a un compañero sin marca' },
            { id: 'p4', text: 'Salto y llevo el balón por arriba del hombro' },
            { id: 'p5', text: 'Suelto el pase a media altura hacia su pecho' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'fc'], cnb: ['ef:2.1.15', 'ef:2.1.11'], ambito: 'convivir',
            prompt: 'Juego de **cooperación-oposición** "Diez pases" en parejas mixtas contra otra pareja: tu equipo coopera pasando y botando; el rival se opone intentando interceptar. Mide tu pulso antes y después.' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después de "Diez pases"', exercise: { name: 'Bote alternado, pase y desmarque', icon: 'Dumbbell', seconds: 60 } },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss', 'fc'], cnb: ['ccss:4.2.4'], prompt: 'Boleto de salida: ¿qué situación muestra **complementariedad** entre hombres, mujeres, niñas y niños?' },
          { options: [
            { id: 'a', text: 'Toda la familia prepara la venta: unos cocinan, otros atienden y otros llevan las cuentas, y deciden juntos' },
            { id: 'b', text: 'El papá decide todo y los demás obedecen', feedback: 'Si solo una persona decide, no hay complementariedad: faltan las voces de los demás.' },
            { id: 'c', text: 'Las niñas no participan porque "no saben de cuentas"', feedback: 'Es un estereotipo: las niñas pueden llevar cuentas igual que los niños.' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l2', 'ef'], cnb: ['l2:5.1.7', 'l2:5.1.6', 'ef:2.1.15'], prompt: 'En la oración "Mañana **defenderemos muy** bien a los rivales", ¿qué palabras son el **verbo en futuro** y el **adverbio que modifica a otro adverbio**?' },
          { options: [
            { id: 'a', text: '"defenderemos" y "muy"' },
            { id: 'b', text: '"mañana" y "rivales"', feedback: '"Mañana" es un adverbio de tiempo, pero no es verbo; "rivales" es un sustantivo.' },
            { id: 'c', text: '"defenderemos" y "rivales"', feedback: '"Defenderemos" sí es el verbo en futuro, pero "rivales" es un sustantivo. "Muy" modifica al adverbio "bien".' },
          ], correct: ['a'] },
        ),
        cierre({ areas: ['fc', 'ccss', 'ef'], cnb: ['ccss:4.2.4'] }, ['Reconozco la equidad y la complementariedad en mi familia y mi escuela', 'Uso tiempos verbales y adverbios al escribir', 'Coopero con mi equipo y respeto al rival'],
          ['Propondré en casa repartir las tareas de forma justa', 'Practicaré el bote con mi mano menos hábil', 'Invitaré a jugar a quien casi siempre se queda fuera']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's24-d4-investigar-comunidad',
      title: 'Investigar con la comunidad',
      icon: 'Search',
      minutes: 14,
      day: 4,
      gancho: '¿Quién en tu comunidad sabe cosas que no están en ningún libro?',
      objetivos: ['Distinguir tipos de fuentes de información para investigar', 'Reconocer a los líderes y personajes de la comunidad como fuentes valiosas', 'Clasificar inventos de distintas culturas', 'Resolver operaciones combinadas con decimales', 'Leer en inglés un mensaje escrito e identificar opiniones'],
      resumen: [
        'Las fuentes pueden ser documentales (libros, actas), hemerográficas (periódicos, revistas), orales (entrevistas), monumentales (edificios, estelas), iconográficas (fotos, pinturas, tejidos), audiovisuales (videos, radio) y electrónicas (páginas web).',
        'Comadronas, ancianas y ancianos, alcaldes comunitarios, promotores de salud y maestros guardan conocimientos valiosos para investigar.',
        'Los pueblos de Mesoamérica aportaron el cero maya, el calendario, la nixtamalización y la pelota de hule; otras culturas del mundo aportaron la rueda, el papel, la imprenta y las vacunas.',
        'En operaciones combinadas con decimales se resuelve primero lo que está entre paréntesis, luego multiplicaciones y divisiones, y al final sumas y restas.',
      ],
      media: {
        id: 's24-d4-entrevista', kind: 'image', title: 'Una entrevista para aprender', aspect: '4:3',
        alt: 'Dos estudiantes entrevistan a una comadrona en el corredor de su casa; una toma notas y el otro sostiene una grabadora.',
        brief: 'Ilustración cálida estilo libro escolar: corredor de una casa de adobe con tejas, una comadrona mayor con corte y güipil sentada en un banco, sonriente; frente a ella una niña con cuaderno y un niño con una grabadora pequeña. Al fondo, macetas y un perro dormido. Globo de texto: "¿Cómo cuidaban la salud antes?". Personajes ficticios, sin rasgos de personas reales.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'l1'], cnb: ['ccss:5.2.2'], ambito: 'conocer', title: '¿Dónde busca información quien investiga?',
            prompt: 'Para su investigación "¿Cómo ha cambiado el cuidado de la salud en nuestra comunidad?", el grado necesita varias **fuentes**. Toca cada tipo.' },
          { icon: 'Library', body: 'Una buena investigación **combina varias fuentes** y compara lo que dicen.', reveal: [
            { icon: 'FileText', front: 'Documentales', back: 'Libros, actas municipales, registros del puesto de salud.' },
            { icon: 'Newspaper', front: 'Hemerográficas', back: 'Periódicos y revistas, nuevos o antiguos.' },
            { icon: 'Mic', front: 'Orales', back: 'Entrevistas y testimonios de personas de la comunidad.' },
            { icon: 'Landmark', front: 'Monumentales', back: 'Edificios, estelas, templos y sitios arqueológicos.' },
            { icon: 'Image', front: 'Iconográficas', back: 'Fotografías, pinturas, tejidos y dibujos.' },
            { icon: 'Monitor', front: 'Audiovisuales y electrónicas', back: 'Videos, programas de radio y páginas de internet confiables.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['ccss', 'l1'], cnb: ['ccss:5.2.2'], prompt: 'Clasifica cada fuente que encontró el grado.',
            explain: 'Una fotografía antigua del puesto de salud es iconográfica; la entrevista a la comadrona, oral; el libro de actas de la municipalidad, documental.' },
          { buckets: [
            { id: 'doc', label: 'Documental o hemerográfica', icon: 'FileText', color: 'var(--area-l1)' },
            { id: 'oral', label: 'Oral', icon: 'Mic', color: 'var(--area-ccss)' },
            { id: 'ico', label: 'Iconográfica o monumental', icon: 'Image', color: 'var(--area-art)' },
          ], items: [
            { id: 'f1', text: 'Libro de actas de la municipalidad', bucket: 'doc' },
            { id: 'f2', text: 'Periódico de hace 20 años sobre una campaña de vacunación', bucket: 'doc', feedback: 'Los periódicos y revistas son fuentes hemerográficas.' },
            { id: 'f3', text: 'Entrevista a la comadrona del cantón', bucket: 'oral' },
            { id: 'f4', text: 'Testimonio del alcalde comunitario', bucket: 'oral' },
            { id: 'f5', text: 'Fotografía antigua del primer puesto de salud', bucket: 'ico' },
            { id: 'f6', text: 'La iglesia colonial del pueblo', bucket: 'ico', feedback: 'Los edificios antiguos son fuentes monumentales.' },
          ] },
        ),
        S.choice(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:5.2.3'], ambito: 'convivir', prompt: '¿Por qué los **líderes y personajes de la comunidad** son fuentes valiosas para esta investigación? Elige **todas** las correctas.',
            explain: 'Las personas de la comunidad vivieron los cambios, conocen saberes que no están escritos y pueden guiarte hacia otras fuentes. Su testimonio se compara con otras fuentes y se agradece con respeto.' },
          { multiple: true, options: [
            { id: 'a', text: 'Vivieron los cambios y pueden contarlos', icon: 'History' },
            { id: 'b', text: 'Guardan saberes que no están en los libros, como los de las comadronas', icon: 'Brain' },
            { id: 'c', text: 'Pueden recomendar otras personas o documentos', icon: 'Users' },
            { id: 'd', text: 'Siempre tienen la razón y no hace falta comparar', icon: 'X', feedback: 'Toda fuente, incluso la oral, se compara con otras para comprobar la información.' },
          ], correct: ['a', 'b', 'c'] },
        ),
        S.sort(
          { fase: 'construir', areas: ['pyd', 'ccss'], cnb: ['pyd:3.2.1'], ambito: 'emprender',
            prompt: 'En la feria habrá una mesa de **inventos**. Clasifica cada invento según la cultura que lo desarrolló.',
            hint: 'Mesoamérica es la región donde vivieron los mayas, los mexicas y otros pueblos antiguos.',
            explain: 'Muchos inventos siguen en tu vida diaria: la tortilla viene de la nixtamalización; el cuaderno, del papel; y la vacuna que recibiste, de la ciencia médica.',
            media: { id: 's24-d4-inventos', kind: 'image', title: 'Mesa de inventos de la feria', aspect: '16:9',
              alt: 'Mesa con tarjetas ilustradas: un caracol y una concha del cero maya, una olla con maíz y cal, una pelota de hule, una rueda, un rollo de papel, una imprenta antigua y una jeringa de vacuna.',
              brief: 'Ilustración frontal de una mesa escolar con mantel típico y 7 objetos, cada uno con su tarjeta: (1) glifo de concha que representa el cero maya; (2) olla de barro con maíz y cal (nixtamal); (3) pelota de hule negra; (4) rueda de madera antigua; (5) rollo de papel con caracteres chinos genéricos; (6) imprenta de tipos móviles; (7) vial y jeringa de vacuna. Dos colores de tarjetas: verde para Mesoamérica y azul para otras culturas del mundo.' } },
          { buckets: [
            { id: 'meso', label: 'Mesoamérica (incluye a los mayas)', icon: 'Sun', color: 'var(--c-quetzal)' },
            { id: 'mundo', label: 'Otras culturas del mundo', icon: 'Globe', color: 'var(--area-l1)' },
          ], items: [
            { id: 'i1', text: 'El cero en la numeración maya', bucket: 'meso' },
            { id: 'i2', text: 'La nixtamalización del maíz (cocerlo con cal)', bucket: 'meso' },
            { id: 'i3', text: 'Pelotas de hule para el juego de pelota', bucket: 'meso' },
            { id: 'i4', text: 'La rueda para transportar carga (Mesopotamia)', bucket: 'mundo', feedback: 'La rueda se usó para el transporte primero en Mesopotamia, en Asia.' },
            { id: 'i5', text: 'El papel (China)', bucket: 'mundo' },
            { id: 'i6', text: 'La imprenta de tipos móviles (Europa)', bucket: 'mundo' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['mat', 'pyd'], cnb: ['mat:4.5.4'], ambito: 'conocer', title: 'Operaciones combinadas con decimales',
            prompt: 'Para el puesto de la feria compran **3 pliegos de cartulina a Q4.50** y **un marcador de Q6.25**. Pagan con **Q20.00**. ¿Cuánto es el vuelto?' },
          { icon: 'Calculator', body: 'Se escribe: 20.00 − (3 × 4.50 + 6.25). Se resuelve en **orden**:', reveal: [
            { icon: 'ListOrdered', front: '1. Paréntesis: multiplicación', back: '3 × 4.50 = **13.50**' },
            { icon: 'Plus', front: '2. Paréntesis: suma', back: '13.50 + 6.25 = **19.75**' },
            { icon: 'Minus', front: '3. Resta final', back: '20.00 − 19.75 = **Q0.25** de vuelto' },
            { icon: 'Info', front: 'Regla', back: 'Paréntesis → multiplicación y división → suma y resta. Alinea siempre el **punto decimal**.' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat', 'cnt'], cnb: ['mat:4.5.4'], prompt: 'Supongamos que el puesto de salud regala a la feria 2 cajas de 12.5 litros de agua pura y una de 7.5 litros. Se reparte **todo en partes iguales entre 4 mesas**. ¿Cuántos litros recibe cada mesa?',
            hint: 'Primero calcula el total: (2 × 12.5 + 7.5). Después divide entre 4.',
            explain: '2 × 12.5 = 25; 25 + 7.5 = 32.5; 32.5 ÷ 4 = 8.125 litros por mesa.' },
          { answer: 8.125, allowDecimal: true, unit: 'L', stimulus: '(2 × 12.5 + 7.5) ÷ 4', misconceptions: [{ value: 26.875, msg: 'Dividiste solo 7.5 entre 4 y luego sumaste. El paréntesis se resuelve primero.' }, { value: 32.5, msg: 'Ese es el total: falta repartirlo entre las 4 mesas.' }] },
        ),
        S.reading(
          { fase: 'aplicar', areas: ['l3', 'cnt'], cnb: ['l3:3.1.1', 'l3:3.1.3'], ambito: 'conocer', prompt: 'English time! Lee la nota que una voluntaria escribió para la feria y responde. (Instrucciones en español, texto en inglés.)' },
          { genre: 'Note', heading: 'A note from the health volunteer', passage:
            'Dear sixth grade students,\n\nThe Health and Culture Fair is on Friday at 9:00 in the school yard. Please bring your posters and your maps. I think your poster about clean water is very beautiful. In my opinion, the interview with the midwife is the best part of your project.\n\nSee you on Friday!\nMs. Rosa, health volunteer',
            questions: [
              { q: 'Who writes the note? (¿Quién escribe la nota?)', options: [
                { id: 'a', text: 'Ms. Rosa, the health volunteer' }, { id: 'b', text: 'The sixth grade students' }, { id: 'c', text: 'The midwife' },
              ], correct: 'a', why: 'La firma al final de un mensaje indica quién lo envía (el emisor).' },
              { q: 'When and where is the fair? (¿Cuándo y dónde?)', options: [
                { id: 'a', text: 'On Friday at 9:00, in the school yard' }, { id: 'b', text: 'On Monday, at the health post' }, { id: 'c', text: 'On Friday, at the market' },
              ], correct: 'a' },
              { q: 'Which sentence is an OPINION? (¿Cuál es una opinión?)', options: [
                { id: 'a', text: '"The fair is on Friday."' }, { id: 'b', text: '"I think your poster about clean water is very beautiful."' }, { id: 'c', text: '"Please bring your posters."' },
              ], correct: 'b', why: '"I think…" e "In my opinion…" introducen opiniones: lo que alguien piensa.' },
            ] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['ccss', 'l1'], cnb: ['ccss:5.2.2', 'ccss:5.2.3'], prompt: 'Boleto de salida: une cada fuente con su tipo.' },
          { leftTitle: 'Fuente', rightTitle: 'Tipo', pairs: [
            { id: 'a', left: 'Conversación grabada con una anciana de la aldea', leftIcon: 'Mic', right: 'Oral' },
            { id: 'b', left: 'Revista de salud de hace diez años', leftIcon: 'Newspaper', right: 'Hemerográfica' },
            { id: 'c', left: 'Estela maya en un sitio arqueológico', leftIcon: 'Landmark', right: 'Monumental' },
            { id: 'd', left: 'Pintura antigua del mercado del pueblo', leftIcon: 'Image', right: 'Iconográfica' },
          ] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.5.4'], prompt: 'Resuelve la operación combinada.' },
          { answer: 11.5, allowDecimal: true, stimulus: '2.5 + 1.5 × 6', misconceptions: [{ value: 24, msg: 'Sumaste antes de multiplicar. Primero 1.5 × 6 = 9, luego 2.5 + 9.' }] },
        ),
        cierre({ areas: ['ccss', 'pyd'], cnb: ['ccss:5.2.3'] }, ['Distingo tipos de fuentes para investigar', 'Valoro a los líderes y sabios de mi comunidad', 'Resuelvo operaciones combinadas con decimales'],
          ['Entrevistaré a una persona mayor de mi comunidad con respeto y permiso', 'Compararé al menos dos fuentes antes de creer una información', 'Buscaré en mi casa un invento de otra cultura que use a diario']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's24-d5-reto',
      title: 'Reto de la semana 24',
      icon: 'Trophy',
      minutes: 13,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Lector de señales" (70 % o más)'],
      resumen: ['Superé el reto de la semana 24: símbolos, proporciones, gestación, prevención, equidad e investigación.'],
      media: {
        id: 's24-d5-reto', kind: 'image', title: 'Medalla Lector de señales', aspect: '1:1',
        alt: 'Medalla dorada con una rosa de los vientos al centro rodeada de un borde de rombos de güipil.',
        brief: 'Ilustración de medalla circular dorada. Centro: rosa de los vientos con la N resaltada en verde. Borde: franja de rombos al estilo de un tejido de telar de cintura en rojo, amarillo y morado. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024.',
      },
      steps: [
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.6.1'], prompt: 'En un mapa, 1 cm representa 4 km. Dos pueblos están a 7 cm en el mapa. ¿Cuántos kilómetros los separan en la realidad?' },
          { answer: 28, unit: 'km' }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.3.1'], prompt: 'En un croquis, ¿qué parte te indica cuántos metros reales representa cada centímetro?' },
          { options: [{ id: 'a', text: 'La escala' }, { id: 'b', text: 'La rosa de los vientos' }, { id: 'c', text: 'El título' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l1', 'art'], cnb: ['l1:3.3.3', 'l1:3.2.4'], prompt: '¿Cuál es la mejor manera de conocer el significado de los símbolos de un güipil de tu región?' },
          { options: [{ id: 'a', text: 'Preguntar a las tejedoras de la comunidad' }, { id: 'b', text: 'Suponer que significa lo mismo que en cualquier otro pueblo' }, { id: 'c', text: 'Pensar que solo son adornos sin significado' }], correct: ['a'] }),
        S.order({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.2.4'], prompt: 'Ordena de la gestación **más corta** a la **más larga** (aproximada).' },
          { items: [{ id: 'con', text: 'Conejo (1 mes)' }, { id: 'per', text: 'Perro (2 meses)' }, { id: 'hum', text: 'Ser humano (9 meses)' }, { id: 'ele', text: 'Elefante (22 meses)' }], labels: { start: 'Más corta', end: 'Más larga' } }),
        S.tf({ fase: 'comprobar', areas: ['cnt', 'fc'], cnb: ['cnt:3.5.3', 'cnt:3.4.1', 'fc:2.5.3'], prompt: '¿Verdadero o falso?' },
          { statements: [{ text: 'El control médico durante el embarazo ayuda a evitar que el VIH pase de la madre al bebé.', answer: true }, { text: 'Jugar fútbol con una persona que vive con VIH puede contagiarte.', answer: false }, { text: 'Informarse y conversar con adultos de confianza es una forma de prevención.', answer: true }] }),
        S.sort({ fase: 'comprobar', areas: ['ccss', 'fc'], cnb: ['ccss:4.2.4', 'fc:2.5.3'], prompt: '¿Equidad o inequidad?' },
          { buckets: [{ id: 'eq', label: 'Equidad', icon: 'Scale' }, { id: 'in', label: 'Inequidad', icon: 'X' }],
            items: [{ id: 'a', text: 'Hermanos y hermanas se turnan para lavar la ropa', bucket: 'eq' }, { id: 'b', text: 'Solo los hombres pueden opinar en la reunión', bucket: 'in' }, { id: 'c', text: 'Se prepara una rampa para que todos entren al salón', bucket: 'eq' }, { id: 'd', text: 'A la niña garífuna no la dejan hablar de su cultura', bucket: 'in' }] }),
        S.highlight({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.7'], prompt: 'Toca los **adverbios**.' },
          { target: 'adverbios', text: 'Carmen llegó {temprano} y habló {muy} {claramente} en la feria.' }),
        S.fill({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.6'], prompt: 'Completa con el tiempo verbal correcto.' },
          { text: 'El año pasado [[visitamos]] el museo. El próximo año [[visitaremos]] el sitio arqueológico.', distractors: ['visitaré', 'visito'] }),
        S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.15', 'ef:2.1.7'], prompt: 'Tu compañera está marcada y otro compañero está solo cerca del aro. ¿Qué estrategia de cooperación conviene?' },
          { options: [{ id: 'a', text: 'Pasar por arriba del hombro al compañero desmarcado' }, { id: 'b', text: 'Botar sin mirar hasta perder el balón' }, { id: 'c', text: 'Pasar a la compañera marcada' }], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['ccss', 'pyd'], cnb: ['ccss:5.2.2', 'pyd:3.2.1'], prompt: 'Un periódico antiguo que informa sobre la llegada de la primera imprenta a Guatemala es una fuente…' },
          { options: [{ id: 'a', text: 'Hemerográfica' }, { id: 'b', text: 'Oral' }, { id: 'c', text: 'Monumental' }], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 3 (el primer área = área principal) */
  bank: [
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.6.1'], prompt: 'Encuentra el término desconocido: 5/20 = x/48.' },
      { answer: 12 }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.5.4'], prompt: 'Resuelve: (8.4 − 2.4) ÷ 3 + 0.75' },
      { answer: 2.75, allowDecimal: true }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.2.4'], prompt: '¿Qué animal tiene una gestación parecida a la humana, de unos 9 meses?' },
      { options: [{ id: 'a', text: 'La vaca' }, { id: 'b', text: 'La coneja' }, { id: 'c', text: 'La perra' }], correct: ['a'] }),
    S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.5.3'], prompt: '¿Previene el VIH o no?' },
      { buckets: [{ id: 'si', label: 'Previene', icon: 'ShieldCheck' }, { id: 'no', label: 'No previene', icon: 'X' }],
        items: [{ id: 'a', text: 'No compartir jeringas ni objetos cortantes', bucket: 'si' }, { id: 'b', text: 'Control médico en el embarazo', bucket: 'si' }, { id: 'c', text: 'Evitar abrazar a otras personas', bucket: 'no' }, { id: 'd', text: 'Usar repelente contra zancudos', bucket: 'no' }] }),
    S.match({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:3.3.1', 'l1:4.1.3'], prompt: 'Une cada término con su significado.' },
      { pairs: [{ id: 'a', left: 'Leyenda', right: 'Explica los símbolos de un mapa' }, { id: 'b', left: 'Escala', right: 'Relación entre el dibujo y la realidad' }, { id: 'c', left: 'VIH', right: 'Virus que debilita las defensas' }] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.2.3'], prompt: '¿Quién sería una buena fuente oral para investigar cómo se atendían los partos hace 50 años?' },
      { options: [{ id: 'a', text: 'Una comadrona con muchos años de servicio' }, { id: 'b', text: 'Un niño de primer grado' }, { id: 'c', text: 'Un anuncio de televisión' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.5.3'], prompt: 'Alguien dice: "Los de ese pueblo no saben nada". ¿Qué es este comentario?' },
      { options: [{ id: 'a', text: 'Un estereotipo que discrimina' }, { id: 'b', text: 'Un hecho comprobado' }, { id: 'c', text: 'Una forma de equidad' }], correct: ['a'] }),
    S.fill({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.6', 'l2:5.1.7'], prompt: 'Completa con un verbo en futuro y un adverbio.' },
      { text: 'Mañana [[pintaremos]] el mural [[cuidadosamente]].', distractors: ['pintamos', 'cuidadoso'] }),
    S.reading({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:3.1.3', 'l3:3.1.1'], prompt: 'Read and answer.' },
      { passage: 'Hello Pablo! The map of our town is ready. In my opinion, the river symbol is too small. See you tomorrow. — Ana', questions: [
        { q: 'Who receives the message?', options: [{ id: 'a', text: 'Pablo' }, { id: 'b', text: 'Ana' }], correct: 'a' },
        { q: 'What is Ana\'s opinion?', options: [{ id: 'a', text: 'The river symbol is too small' }, { id: 'b', text: 'The map is ready' }], correct: 'a' },
      ] }),
    S.order({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.11', 'ef:2.1.7'], prompt: 'Ordena la jugada.' },
      { items: [{ id: 'a', text: 'Botar alternando las manos' }, { id: 'b', text: 'Parada de un tiempo' }, { id: 'c', text: 'Saltar con el balón arriba del hombro' }, { id: 'd', text: 'Pasar a media altura' }] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:3.2.1'], prompt: '¿Cuál de estos inventos es un aporte de los pueblos mesoamericanos que usas casi todos los días?' },
      { options: [{ id: 'a', text: 'La nixtamalización del maíz para hacer tortillas' }, { id: 'b', text: 'La imprenta de tipos móviles' }, { id: 'c', text: 'La brújula' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.2', 'art:3.2.5'], prompt: 'Vas a representar con técnica mixta una planta de maíz, que es mucho más alta que ancha. ¿Cómo colocas el papel?' },
      { options: [{ id: 'a', text: 'Vertical' }, { id: 'b', text: 'Horizontal' }, { id: 'c', text: 'Da igual' }], correct: ['a'] }),
  ],
});
