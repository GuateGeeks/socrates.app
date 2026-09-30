import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 21 · Unidad 3 "Valorando nuestra convivencia"
 * Tema generador: Juntos ante las fuerzas de la naturaleza
 * Big bang, océanos, ríos y lagos, husos horarios, recursos de los continentes ·
 * células que forman tejidos, reproducción celular, cromosomas sexuales, fracciones ·
 * organismos de ayuda humanitaria, mensajes de emergencia, suma maya, solidaridad y equidad ·
 * etnocentrismo en la historia, derechos y deberes, mensajes persuasivos, paisajes sonoros.
 */
export default semana({
  id: 's21',
  unidad: 3,
  semana: 21,
  kind: 'aprendizaje',
  temaGenerador: 'Juntos ante las fuerzas de la naturaleza',
  title: 'Juntos ante las fuerzas de la naturaleza',
  subtitle: 'Universo, células, ayuda humanitaria y convivencia sin exclusión',
  icon: 'HeartHandshake',
  color: 'var(--area-ccss)',
  contexto: 'Guatemala convive con volcanes, sismos y tormentas tropicales. Cuando la naturaleza golpea, comunidades enteras se organizan: brigadas escolares, bomberos, la Cruz Roja y vecinos que llegan de otros pueblos, e incluso ayuda de países que están en otro huso horario. Esta semana viajarás desde el origen del universo hasta las células de tu cuerpo para descubrir que, como las células en un tejido, las personas somos más fuertes cuando trabajamos juntas y sin excluir a nadie.',
  ejes: ['seguridad', 'vida-ciudadana', 'valores', 'multiculturalidad', 'sostenible'],
  media: {
    id: 's21-portada', kind: 'video', title: 'Cuando la naturaleza golpea, nos organizamos', aspect: '16:9', duration: 60,
    alt: 'Animación que va del universo a la Tierra, luego a una comunidad guatemalteca bajo la lluvia donde vecinos, brigadistas y la Cruz Roja trabajan juntos.',
    brief: 'Animación 2D de 60 s. (1) Un punto de luz se expande en galaxias y estrellas; aparece el Sol y la Tierra con océanos (rótulo: "Hace unos 13,800 millones de años"). (2) Zoom a Centroamérica: una tormenta tropical se forma sobre el océano. (3) Comunidad del altiplano bajo la lluvia: brigada escolar con chalecos, bomberos, voluntarios con el emblema genérico de una cruz roja sobre fondo blanco, vecinos de distintos pueblos cargando víveres en cadena. Relojes de distintos países marcando horas diferentes mientras llega ayuda. Cierre: "Juntos somos más fuertes". Sin imágenes de víctimas ni destrucción explícita. Música de marimba suave.',
  },
  badge: { id: 'medalla-s21', name: 'Brigada solidaria', icon: 'HeartHandshake', desc: 'Completaste la semana 21 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Día 1 ───────────────────────── */
    lesson({
      id: 's21-d1-universo-agua',
      title: 'Del big bang al planeta azul',
      icon: 'Globe',
      minutes: 14,
      day: 1,
      gancho: 'Si ahora es de noche en Guatemala, ¿será de noche también en Japón? ¿Y cuándo empezó todo lo que existe?',
      objetivos: ['Explicar el origen del universo según la teoría del big bang', 'Localizar océanos, mares, ríos y lagos importantes', 'Calcular la hora en otro país usando los husos horarios', 'Describir un mapa en inglés con "There is / There are"'],
      resumen: [
        'Según la teoría del big bang, el universo comenzó hace unos 13,800 millones de años con una gran expansión; la Tierra se formó hace unos 4,500 millones de años.',
        'Los océanos son cinco: Pacífico (el más grande), Atlántico, Índico, Ártico y Antártico o Austral. Ríos como el Nilo y el Amazonas, y lagos como el Titicaca, sostienen la vida de millones de personas.',
        'La Tierra se divide en 24 husos horarios de 15° cada uno; hacia el este la hora es más tarde. Guatemala está en UTC −6: su hora va 6 horas atrasada respecto a Greenwich.',
        'Los recursos de los continentes se clasifican en hídricos, forestales, minerales y energéticos, entre otros.',
      ],
      media: {
        id: 's21-d1-mapa-agua', kind: 'image', title: 'El agua del mundo', aspect: '16:9',
        alt: 'Mapamundi con los cinco océanos rotulados, mares principales y los ríos Nilo, Amazonas, Yangtsé, Danubio y Misisipi, y los lagos Titicaca, Victoria y Atitlán.',
        brief: 'Mapamundi ilustrado en proyección amigable. Océanos rotulados en letras grandes: Pacífico, Atlántico, Índico, Ártico, Antártico (Austral). Mares: Caribe, Mediterráneo. Ríos en azul intenso con su nombre: Amazonas, Misisipi, Nilo, Danubio, Yangtsé. Lagos marcados con un punto: Titicaca, Victoria, Atitlán. Guatemala resaltada. Pequeños íconos de uso humano junto a cada río (pesca, barco, riego). Franja superior con los 24 husos horarios en tonos alternos. Sin fronteras políticas detalladas.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'l1'], cnb: ['cnt:1.1.3'], ambito: 'conocer', title: 'La gran explosión',
            prompt: 'Ya conoces el relato del Génesis y la cosmovisión maya del Popol Wuj. Hoy conocerás la **explicación científica** más aceptada: la teoría del **big bang** (la gran explosión). Toca cada tarjeta.',
            media: { id: 's21-d1-bigbang', kind: 'animation', title: 'Del punto inicial a la Tierra', aspect: '16:9', duration: 50,
              alt: 'Animación que muestra un punto brillante que se expande, forma galaxias, estrellas, el Sol y finalmente la Tierra con océanos.',
              brief: 'Animación 2D de 50 s con línea de tiempo en la parte inferior. (1) Un punto diminuto muy caliente se expande rápidamente (rótulo "Hace unos 13,800 millones de años"). (2) El universo se enfría: aparecen nubes de gas, luego estrellas y galaxias. (3) Nube de gas y polvo gira y forma el Sol y los planetas (rótulo "Hace unos 4,600 millones de años"). (4) La Tierra primitiva, caliente, se enfría; la lluvia forma los océanos. Narración infantil en español con subtítulos. Aclarar en texto: "No fue una explosión en el espacio: fue la expansión del espacio mismo".' } },
          { icon: 'Sparkles', body: 'La ciencia explica el origen del universo con **observaciones y pruebas**. Esta explicación puede convivir con el respeto a las creencias de cada familia.', reveal: [
            { icon: 'CircleDot', front: 'El inicio', back: 'Hace unos **13,800 millones de años**, todo estaba concentrado en un punto muy caliente que comenzó a **expandirse**.' },
            { icon: 'Star', front: 'Estrellas y galaxias', back: 'Al enfriarse, la materia formó **estrellas**, que se agruparon en **galaxias**, como la Vía Láctea.' },
            { icon: 'Earth', front: 'La Tierra', back: 'Hace unos **4,500 millones de años** se formó la Tierra. Al enfriarse, la lluvia llenó los **océanos**.' },
            { icon: 'Telescope', front: '¿Cómo lo sabemos?', back: 'Los telescopios muestran que las galaxias **se siguen alejando**: el universo todavía se expande.' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['cnt', 'l1'], cnb: ['cnt:1.1.3', 'l1:1.3.2'], ambito: 'conocer',
            prompt: 'Ordena los grandes momentos de la historia del universo, del **más antiguo** al **más reciente**.',
            explain: 'Primero la expansión, luego estrellas y galaxias, después el Sol y la Tierra, los océanos y, mucho después, la vida.' },
          { items: [
            { id: 'u1', text: 'Big bang: comienza la expansión del universo' },
            { id: 'u2', text: 'Se forman las primeras estrellas y galaxias' },
            { id: 'u3', text: 'Se forman el Sol y la Tierra' },
            { id: 'u4', text: 'La Tierra se enfría y la lluvia forma los océanos' },
            { id: 'u5', text: 'Aparecen los primeros seres vivos en el agua' },
          ], labels: { start: 'Más antiguo', end: 'Más reciente' } },
        ),
        S.reading(
          { fase: 'construir', areas: ['l2', 'ccss'], cnb: ['l2:3.2.2', 'ccss:1.1.3'], ambito: 'conocer',
            prompt: 'Usa la **lectura rápida**: primero lee solo la primera oración de cada párrafo (suele tener la **idea principal**) y luego busca los detalles (ideas secundarias).' },
          { genre: 'Texto informativo', heading: 'El agua que une a los continentes', passage:
            'Los **océanos** cubren cerca de tres cuartas partes de la Tierra. El más grande es el **Pacífico**, que baña la costa sur de Guatemala. El **Atlántico** separa América de Europa y África; el mar Caribe, que llega a Izabal, es parte de él.\n\nLos **ríos** han sido el centro de grandes civilizaciones. El **Nilo**, en África, permitió la agricultura en el antiguo Egipto. El **Amazonas**, en América del Sur, es el río con más agua del mundo. En Asia, millones de personas viven del **Yangtsé**, y en Europa el **Danubio** atraviesa varios países.\n\nLos **lagos** también sostienen la vida. El **Titicaca**, entre Perú y Bolivia, es uno de los lagos navegables más altos del mundo. En Guatemala, el lago de **Atitlán** da agua, pesca y turismo a los pueblos que lo rodean.',
            questions: [
              { q: '¿Cuál es la idea principal del segundo párrafo?', options: [
                { id: 'a', text: 'Los ríos han sido el centro de grandes civilizaciones' },
                { id: 'b', text: 'El Danubio atraviesa varios países' },
                { id: 'c', text: 'El Pacífico es el océano más grande' },
              ], correct: 'a', why: 'Es la primera oración y resume el párrafo; lo demás son ejemplos (ideas secundarias).' },
              { q: '¿Qué océano baña la costa sur de Guatemala?', options: [
                { id: 'a', text: 'El Pacífico' },
                { id: 'b', text: 'El Atlántico' },
                { id: 'c', text: 'El Índico' },
              ], correct: 'a' },
              { q: '¿Por qué crees que las civilizaciones antiguas nacieron junto a los ríos?', options: [
                { id: 'a', text: 'Porque el agua permitía sembrar, beber, pescar y transportarse' },
                { id: 'b', text: 'Porque los ríos no tenían peces' },
                { id: 'c', text: 'Porque junto a los ríos nunca llueve' },
              ], correct: 'a', why: 'Es una inferencia: el agua es la base de la agricultura y la vida diaria.' },
            ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['ccss', 'pyd'], cnb: ['ccss:2.1.3', 'ccss:1.1.3'], ambito: 'conocer',
            prompt: 'Cada continente cuenta con distintos **tipos de recursos**. Clasifica estos ejemplos.',
            hint: 'Piensa: ¿es agua, es bosque, se extrae de la tierra como mineral, o produce energía?',
            explain: 'Clasificar los recursos ayuda a comparar continentes y a planificar cómo cuidarlos. Muchos países tienen varios tipos a la vez.' },
          { layout: 'grid2', buckets: [
            { id: 'hid', label: 'Hídricos', icon: 'Droplets', color: 'var(--area-l1)' },
            { id: 'for', label: 'Forestales', icon: 'Trees', color: 'var(--c-ok)' },
            { id: 'min', label: 'Minerales', icon: 'Gem', color: 'var(--area-art)' },
            { id: 'ene', label: 'Energéticos', icon: 'Fuel', color: 'var(--area-cnt)' },
          ], items: [
            { id: 'r1', text: 'Río Amazonas (América del Sur)', bucket: 'hid' },
            { id: 'r2', text: 'Lago Victoria (África)', bucket: 'hid' },
            { id: 'r3', text: 'Selva del Congo (África)', bucket: 'for' },
            { id: 'r4', text: 'Bosques de coníferas de Canadá', bucket: 'for' },
            { id: 'r5', text: 'Cobre de Chile', bucket: 'min' },
            { id: 'r6', text: 'Petróleo del golfo Pérsico (Asia)', bucket: 'ene', feedback: 'El petróleo se extrae del subsuelo, pero se usa sobre todo para producir energía: es un recurso energético.' },
          ] },
        ),
        S.explain(
          { fase: 'construir', areas: ['ccss', 'mat'], cnb: ['ccss:1.2.3'], ambito: 'conocer', title: 'Los husos horarios',
            prompt: 'La Tierra gira sobre sí misma en 24 horas. Por eso, cuando en Guatemala es mediodía, en otros países es de noche. Toca cada tarjeta.' },
          { icon: 'Clock', body: 'La Tierra se divide en **24 husos horarios**. Cada uno mide **15°** de longitud (360° ÷ 24 = 15°). El punto de partida es el **meridiano de Greenwich** (UTC 0).', reveal: [
            { icon: 'Sunrise', front: 'Hacia el este', back: 'La hora es **más tarde** (se suma). El Sol sale primero en el este.' },
            { icon: 'Sunset', front: 'Hacia el oeste', back: 'La hora es **más temprano** (se resta).' },
            { icon: 'MapPin', front: 'Guatemala', back: 'Está en **UTC −6**: su hora va 6 horas atrasada respecto a Greenwich. Guatemala no usa horario de verano.' },
            { icon: 'Calculator', front: 'Cómo calcular', back: 'Resta los dos husos. Japón está en UTC +9: 9 − (−6) = **15 horas** más tarde que Guatemala.' },
          ] },
        ),
        S.number(
          { fase: 'aplicar', areas: ['ccss', 'mat'], cnb: ['ccss:1.2.3'], ambito: 'hacer',
            prompt: 'Después de una tormenta, un equipo de rescate de **Japón (UTC +9)** ofrece ayuda. En Guatemala (UTC −6) son las **7:00 de la mañana**. ¿Qué hora es en Japón? (Escribe la hora en formato de 24 horas.)',
            hint: 'Japón está 15 horas más tarde que Guatemala. Si pasas de 24, resta 24 y será el día siguiente.',
            explain: '7 + 15 = 22. En Japón son las 22:00 (10 de la noche) del mismo día. Por eso los equipos internacionales se coordinan pensando en los husos horarios.' },
          { answer: 22, unit: 'horas', stimulus: '7 + 15 = ?', misconceptions: [
            { value: 16, msg: 'Sumaste 9. Recuerda que Guatemala está en −6: la diferencia es 9 − (−6) = 15 horas.' },
            { value: 1, msg: 'Hacia el este la hora es más tarde: hay que sumar, no restar.' },
          ] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l3', 'ccss'], cnb: ['l3:1.1.3'], ambito: 'conocer',
            prompt: 'English time! **Stating the facts**: describe the map. Usa _There is_ para una cosa y _There are_ para varias.',
            explain: 'We say "There **is** an ocean" (one) and "There **are** five oceans" (more than one).',
            media: { id: 's21-d1-map-english', kind: 'image', title: 'World map', aspect: '4:3',
              alt: 'Mapa sencillo con cinco océanos en azul, un río largo en África, un lago en América del Sur y un barco en el océano Pacífico.',
              brief: 'Ilustración plana para describir en inglés: mapamundi simplificado con los cinco océanos en azul (sin nombres escritos dentro), un río largo marcado en África, un lago marcado en América del Sur y un barco pequeño en el océano Pacífico. Colores claros, sin texto dentro de la imagen, íconos grandes.' } },
          { text: 'There [[are]] five oceans on the map.\nThere [[is]] a long river in Africa.\nThere is a [[lake]] in South America.\nThere is a ship in the Pacific [[Ocean]].', distractors: ['am', 'mountain'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.1.3'], prompt: 'Según la teoría del big bang, ¿qué ocurrió hace unos 13,800 millones de años?' },
          { options: [
            { id: 'a', text: 'Comenzó la expansión del universo a partir de un punto muy caliente', icon: 'Sparkles' },
            { id: 'b', text: 'Se formó la Tierra con sus océanos', icon: 'Earth', feedback: 'La Tierra se formó mucho después, hace unos 4,500 millones de años.' },
            { id: 'c', text: 'Aparecieron los primeros seres humanos', icon: 'Users', feedback: 'Los seres humanos aparecieron muchísimo después.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['ccss', 'l2'], cnb: ['ccss:1.1.3', 'ccss:1.2.3', 'ccss:2.1.3'], prompt: 'Boleto de salida: ¿verdadero o falso?' },
          { statements: [
            { text: 'El Pacífico es el océano más grande del mundo.', answer: true },
            { text: 'Hacia el oeste de Guatemala la hora es más tarde.', answer: false, why: 'Hacia el oeste la hora es más temprano; hacia el este, más tarde.' },
            { text: 'El Nilo es un río de África.', answer: true },
            { text: 'El cobre es un recurso forestal.', answer: false, why: 'El cobre se extrae de la tierra: es un recurso mineral.' },
          ] },
        ),
        cierre({ areas: ['cnt', 'ccss'], cnb: ['ccss:1.2.3'] }, ['Explico el origen del universo según el big bang', 'Ubico océanos, ríos y lagos importantes', 'Calculo la hora en otro país con los husos horarios'],
          ['Buscaré en un mapa el océano más cercano a mi comunidad', 'Calcularé qué hora es en el país de un familiar que vive lejos', 'Respetaré las distintas explicaciones del origen del mundo']),
      ],
    }),

    /* ───────────────────────── Día 2 ───────────────────────── */
    lesson({
      id: 's21-d2-celulas-equipo',
      title: 'Células que trabajan en equipo',
      icon: 'Microscope',
      minutes: 15,
      day: 2,
      gancho: 'Eras un bebé de unos 50 cm y ahora mides mucho más. ¿Cómo hizo tu cuerpo para crecer tanto?',
      objetivos: ['Demostrar cómo las células forman tejidos, órganos y organismos', 'Comparar la división de la célula animal y la vegetal', 'Explicar cómo los cromosomas determinan el sexo', 'Multiplicar fracciones'],
      resumen: [
        'Las células se agrupan en tejidos; los tejidos forman órganos; los órganos, sistemas; y los sistemas, un organismo pluricelular.',
        'En la división celular (mitosis) las dos células hijas reciben los mismos cromosomas. La célula animal se divide estrangulándose por el centro; la vegetal forma una placa (tabique) entre las dos nuevas células porque tiene pared celular.',
        'El par de cromosomas 23 determina el sexo: XX es mujer y XY es hombre. El óvulo siempre lleva X; el espermatozoide puede llevar X o Y.',
        'Para multiplicar fracciones se multiplican los numeradores entre sí y los denominadores entre sí: 1/2 × 1/2 = 1/4.',
      ],
      media: {
        id: 's21-d2-niveles', kind: 'diagram', title: 'De la célula al organismo', aspect: '16:9',
        alt: 'Escalera de cinco niveles: una célula muscular, tejido muscular, el corazón, el sistema circulatorio y una niña corriendo.',
        brief: 'Diagrama horizontal con cinco recuadros unidos por flechas: (1) CÉLULA: célula muscular alargada; (2) TEJIDO: muchas células musculares juntas; (3) ÓRGANO: corazón; (4) SISTEMA: sistema circulatorio con corazón y vasos; (5) ORGANISMO: niña guatemalteca corriendo un relevo. Debajo, una segunda fila paralela para una planta de maíz: célula vegetal, tejido de la hoja, hoja, sistema de la planta, milpa completa. Rótulos grandes, colores del área de Ciencias Naturales.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt', 'ef'], cnb: ['cnt:1.2.3', 'ef:1.1.4'], ambito: 'conocer', title: 'Un equipo de billones',
            prompt: 'Tu cuerpo está formado por **billones de células**. Solas no podrían hacer mucho, pero organizadas forman un equipo perfecto. Toca cada nivel.' },
          { icon: 'Microscope', body: 'Como una brigada de emergencia, cada grupo de células tiene una **tarea**.', reveal: [
            { icon: 'CircleDot', front: 'Célula', back: 'La unidad más pequeña de la vida. Ej.: una célula muscular.' },
            { icon: 'Layers', front: 'Tejido', back: 'Muchas células **iguales** que hacen el mismo trabajo. Ej.: tejido muscular, tejido óseo, tejido nervioso.' },
            { icon: 'Heart', front: 'Órgano', back: 'Varios tejidos que trabajan juntos. Ej.: el corazón, una hoja.' },
            { icon: 'Route', front: 'Sistema', back: 'Órganos que cumplen una función. Ej.: el sistema circulatorio.' },
            { icon: 'PersonStanding', front: 'Organismo', back: '¡Tú! Un ser vivo **pluricelular** formado por muchos sistemas.' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.2.3'], ambito: 'conocer',
            prompt: 'Ordena los niveles de organización de una **planta de maíz**, del más pequeño al más grande.',
            explain: 'Las plantas también son organismos pluricelulares: sus células forman tejidos (como el de la hoja), órganos (hoja, raíz, tallo) y sistemas.' },
          { items: [
            { id: 'n1', text: 'Célula vegetal con cloroplastos' },
            { id: 'n2', text: 'Tejido de la hoja' },
            { id: 'n3', text: 'Hoja (órgano)' },
            { id: 'n4', text: 'Sistema de hojas y tallo' },
            { id: 'n5', text: 'Planta de maíz (organismo)' },
          ], labels: { start: 'Más pequeño', end: 'Más grande' } },
        ),
        S.explain(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.3.3'], ambito: 'conocer', title: '¿Cómo se multiplican las células?',
            prompt: 'Creciste porque tus células se **dividen**: una célula se convierte en dos. Este proceso se llama **mitosis**. Compara cómo ocurre en la célula animal y en la vegetal.',
            media: { id: 's21-d2-mitosis', kind: 'animation', title: 'Mitosis animal y vegetal', aspect: '16:9', duration: 45,
              alt: 'Pantalla dividida: a la izquierda una célula animal redonda se estrangula por el centro hasta formar dos; a la derecha una célula vegetal cuadrada forma una pared en medio.',
              brief: 'Animación 2D de 45 s en pantalla dividida. Ambas células muestran primero el núcleo, los cromosomas que se duplican y se separan hacia los extremos (idéntico en las dos). Luego, IZQUIERDA "Célula animal": la membrana se hunde por el centro como un cinturón que aprieta hasta separar dos células redondas. DERECHA "Célula vegetal": aparece una línea (placa celular) en el centro que crece hasta formar una nueva pared entre dos células rectangulares. Rótulos: "Iguales: se duplican los cromosomas" / "Diferente: estrangulamiento vs. placa celular". Narración y subtítulos en español.' } },
          { icon: 'Copy', body: 'En las dos células, primero se **duplican los cromosomas** y luego se reparten: cada célula hija recibe **la misma información** que la célula madre.', reveal: [
            { icon: 'Circle', front: 'Célula animal', back: 'La membrana se **estrangula** por el centro, como un globo que aprietas con un cordón.' },
            { icon: 'Square', front: 'Célula vegetal', back: 'Como tiene **pared celular rígida**, no se puede estrangular: forma una **placa** en el centro que se convierte en una nueva pared.' },
            { icon: 'Check', front: '¿Para qué sirve?', back: 'Para **crecer**, **reparar** heridas y reemplazar células viejas, en animales y plantas.' },
          ] },
        ),
        S.sort(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:1.3.3'], ambito: 'conocer',
            prompt: 'Clasifica cada característica de la división celular.',
            explain: 'Lo esencial es igual en ambas (duplicar y repartir los cromosomas); la diferencia está en cómo se separan las dos células nuevas.' },
          { buckets: [
            { id: 'ani', label: 'Solo célula animal', icon: 'Circle', color: 'var(--area-cnt)' },
            { id: 'veg', label: 'Solo célula vegetal', icon: 'Leaf', color: 'var(--c-quetzal)' },
            { id: 'amb', label: 'En ambas', icon: 'Copy', color: 'var(--area-l1)' },
          ], items: [
            { id: 'm1', text: 'La membrana se estrangula por el centro', bucket: 'ani' },
            { id: 'm2', text: 'Se forma una placa que será la nueva pared', bucket: 'veg' },
            { id: 'm3', text: 'Los cromosomas se duplican antes de dividirse', bucket: 'amb' },
            { id: 'm4', text: 'Las células hijas tienen los mismos cromosomas', bucket: 'amb' },
            { id: 'm5', text: 'Sirve para crecer y reparar tejidos', bucket: 'amb', feedback: 'Las plantas también crecen y cicatrizan gracias a la división celular.' },
          ] },
        ),
        S.fill(
          { fase: 'construir', areas: ['cnt', 'fc'], cnb: ['cnt:1.4.3'], ambito: 'conocer',
            prompt: 'Las personas tenemos **46 cromosomas** (23 pares). Los primeros 22 pares son iguales en hombres y mujeres. El par **23** son los **cromosomas sexuales**. Completa la explicación.',
            explain: 'El sexo biológico se define en la fecundación, según el cromosoma que lleve el espermatozoide. Niñas y niños tienen los mismos derechos y las mismas capacidades para aprender.' },
          { text: 'Las mujeres tienen dos cromosomas [[X]] (XX) y los hombres un cromosoma X y uno [[Y]] (XY). El óvulo de la madre siempre lleva un cromosoma [[X]]. El espermatozoide del padre puede llevar X o Y: si lleva Y, el bebé será [[niño]].',
            distractors: ['Z', 'niña'] },
        ),
        S.slider(
          { fase: 'aplicar', areas: ['mat', 'cnt'], cnb: ['mat:4.4.3', 'cnt:1.4.3'], ambito: 'hacer',
            prompt: 'En cada embarazo, la probabilidad de que el bebé sea niña es **1/2**. Para dos bebés seguidos, la probabilidad de que **ambos** sean niñas es **1/2 × 1/2**. Para multiplicar fracciones: **numerador × numerador** y **denominador × denominador**. Marca el resultado en la barra.',
            hint: '1 × 1 = 1 y 2 × 2 = 4.',
            explain: '1/2 × 1/2 = 1/4. Multiplicar por una fracción menor que 1 da un resultado más pequeño: "la mitad de la mitad" es un cuarto.' },
          { min: 0, max: 1, step: 0.25, answer: 0.25, start: 0, visual: 'fraction', parts: 4, display: 'fraction' },
        ),
        S.pulse(
          { fase: 'aplicar', areas: ['ef', 'cnt'], cnb: ['ef:1.2.3', 'ef:1.3.8', 'ef:1.1.4'], ambito: 'hacer',
            prompt: '¡A moverse! Tus músculos crecieron gracias a millones de divisiones celulares. Haz el **juego del flamenco** (equilibrio en un pie con los brazos abiertos) y luego un **relevo con obstáculos bajos** (mochilas o conos), entregando la estafeta **al frente** y después **por detrás de la cadera**. Mide tu pulso en cada ronda. Piensa: ¿cuánto equilibrio y velocidad tenías cuando estabas en primer grado?' },
          { seconds: 15, rounds: [
            { label: 'En reposo' },
            { label: 'Después del juego del flamenco', exercise: { name: 'Equilibrio en un pie, 20 s con cada pierna', icon: 'Footprints', seconds: 40 } },
            { label: 'Después del relevo con obstáculos', exercise: { name: 'Carrera con obstáculos bajos y entrega de estafeta', icon: 'Timer', seconds: 45 } },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.2.3', 'cnt:1.3.3'], prompt: '¿Qué diferencia hay entre la división de una célula vegetal y la de una célula animal?' },
          { options: [
            { id: 'a', text: 'La vegetal forma una placa que será la nueva pared; la animal se estrangula', icon: 'Leaf' },
            { id: 'b', text: 'Solo la animal duplica sus cromosomas', icon: 'Dna', feedback: 'Las dos duplican sus cromosomas antes de dividirse.' },
            { id: 'c', text: 'La vegetal no se divide nunca', icon: 'X', feedback: 'Las plantas crecen gracias a la división de sus células.' },
          ], correct: ['a'] },
        ),
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.4.3'], prompt: 'Calcula **2/3 × 3/4**. Escribe el resultado como fracción simplificada.' },
          { answer: 1 / 2, allowFraction: true, allowDecimal: true, stimulus: '2/3 × 3/4 = ?', misconceptions: [
            { value: 5 / 7, msg: 'Sumaste numeradores y denominadores. En la multiplicación se multiplican: 2 × 3 y 3 × 4.' },
          ] },
        ),
        cierre({ areas: ['cnt', 'ef'], cnb: ['ef:1.1.4'] }, ['Explico cómo las células forman tejidos, órganos y organismos', 'Comparo la división de la célula animal y la vegetal', 'Explico cómo se determina el sexo con los cromosomas', 'Multiplico fracciones'],
          ['Compararé con fotos cómo ha cambiado mi cuerpo desde que era pequeño', 'Practicaré equilibrio con mi lado no dominante', 'Trataré con respeto e igualdad a niñas y niños']),
      ],
    }),

    /* ───────────────────────── Día 3 ───────────────────────── */
    lesson({
      id: 's21-d3-manos-solidarias',
      title: 'Manos que ayudan',
      icon: 'Handshake',
      minutes: 15,
      day: 3,
      gancho: 'Si una tormenta dejara sin casa a una familia de tu comunidad, ¿quiénes llegarían a ayudar primero?',
      objetivos: ['Identificar organismos que asisten a la población ante desastres', 'Ordenar las instrucciones de un mensaje de emergencia', 'Sumar y restar con números mayas', 'Actuar con solidaridad y equidad al repartir ayuda'],
      resumen: [
        'Ante un desastre ayudan la CONRED (coordina en Guatemala), los bomberos, la Cruz Roja (fundada en 1863 en Suiza) y Médicos Sin Fronteras (fundada en 1971 en Francia), entre otros.',
        'Un mensaje que establece normas dice qué hacer y en qué orden; hay que escucharlo con atención y seguirlo paso a paso.',
        'Para sumar en maya se juntan los símbolos de cada nivel: 5 puntos forman 1 barra, y 20 unidades en un nivel forman 1 punto en el nivel de arriba.',
        'Para restar en maya se quitan símbolos de cada nivel; si no alcanzan, 1 punto del nivel de arriba se cambia por 20 unidades abajo.',
        'La equidad es dar a cada quien según su necesidad; la solidaridad es ayudar sin esperar nada a cambio.',
        'Las familias que dependen de una sola cosecha o viven en zonas de riesgo son más vulnerables; respetar las fuerzas de la naturaleza protege la vida y la producción.',
      ],
      media: {
        id: 's21-d3-acopio', kind: 'image', title: 'Centro de acopio escolar', aspect: '4:3',
        alt: 'Salón escolar convertido en centro de acopio: mesas con víveres ordenados por tipo, carteles con numerales mayas y estudiantes que forman una cadena para pasar cajas.',
        brief: 'Ilustración plana de un salón escolar convertido en centro de acopio tras una tormenta. Mesas rotuladas "Agua", "Granos", "Higiene", "Ropa". Sobre cada mesa, un cartel con la cantidad en numeral maya (puntos y barras). Estudiantes de distintos pueblos (con güipil, camiseta, uniforme) forman una cadena humana pasando cajas. Una voluntaria con chaleco con cruz roja genérica y un bombero conversan con una maestra. Sin logotipos reales ni personas identificables.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['ccss', 'fc'], cnb: ['ccss:1.3.3'], ambito: 'conocer', title: '¿Quiénes llegan a ayudar?',
            prompt: 'Cuando ocurre un desastre, muchas **instituciones y organismos** se coordinan para asistir a la población, en Guatemala y en el mundo. Toca cada tarjeta.' },
          { icon: 'HeartHandshake', body: 'Todos estos organismos siguen un principio: ayudar a las personas **sin importar su origen, idioma o religión**.', reveal: [
            { icon: 'Shield', front: 'CONRED', back: 'Coordinadora Nacional para la Reducción de Desastres de Guatemala: **coordina** la prevención, las alertas y la respuesta.' },
            { icon: 'Flame', front: 'Bomberos', back: 'Rescatan personas, apagan incendios y dan primeros auxilios en las comunidades.' },
            { icon: 'Plus', front: 'Cruz Roja', back: 'Organización humanitaria fundada en **1863** en Suiza. Presente en casi todos los países: primeros auxilios, albergues y búsqueda de familiares.' },
            { icon: 'Stethoscope', front: 'Médicos Sin Fronteras', back: 'Organización fundada en **1971** en Francia. Envía personal de salud a lugares con emergencias, epidemias o conflictos.' },
          ] },
        ),
        S.match(
          { fase: 'construir', areas: ['ccss', 'fc'], cnb: ['ccss:1.3.3'], ambito: 'conocer',
            prompt: 'Une cada situación con el organismo que asistiría **principalmente**.',
            explain: 'Cada organismo tiene una especialidad, pero todos trabajan en equipo durante una emergencia.' },
          { leftTitle: 'Situación', rightTitle: 'Organismo', pairs: [
            { id: 'o1', left: 'Emitir la alerta roja y coordinar la evacuación en Guatemala', leftIcon: 'Megaphone', right: 'CONRED' },
            { id: 'o2', left: 'Atender una epidemia en un campamento de otro país', leftIcon: 'Stethoscope', right: 'Médicos Sin Fronteras' },
            { id: 'o3', left: 'Instalar un albergue y ayudar a encontrar familiares', leftIcon: 'Tent', right: 'Cruz Roja' },
            { id: 'o4', left: 'Rescatar a una persona atrapada por un deslave', leftIcon: 'HardHat', right: 'Bomberos' },
          ] },
        ),
        S.order(
          { fase: 'construir', areas: ['l1', 'ccss'], cnb: ['l1:1.3.2', 'l1:1.3.3'], ambito: 'hacer',
            prompt: 'Escuchas por la radio: _"Atención, comunidad. Se decreta alerta por crecida del río. Primero, conserven la calma. Luego, tomen su mochila de emergencia. Después, desconecten la energía eléctrica. Salgan por la ruta de evacuación señalada y reúnanse en el punto seguro de la escuela."_ ¿Cuál es el **propósito** del mensaje? Establecer normas. Ordena lo que se debe hacer.',
            explain: 'Los mensajes que establecen normas usan palabras de orden como "primero", "luego", "después". Identificar el propósito y la secuencia puede salvar vidas.' },
          { items: [
            { id: 'e1', text: 'Conservar la calma' },
            { id: 'e2', text: 'Tomar la mochila de emergencia' },
            { id: 'e3', text: 'Desconectar la energía eléctrica' },
            { id: 'e4', text: 'Salir por la ruta de evacuación' },
            { id: 'e5', text: 'Reunirse en el punto seguro de la escuela' },
          ], labels: { start: 'Primero', end: 'Al final' } },
        ),
        S.maya(
          { fase: 'construir', areas: ['mat', 'fc'], cnb: ['mat:4.2.7'], ambito: 'hacer',
            prompt: 'El centro de acopio recibió **27 bolsas de maíz** el lunes y **18** el martes. Súmalas en **numeración maya**: junta los puntos y barras de cada nivel; **5 puntos** se cambian por **1 barra**, y cuando en el primer nivel juntas **20**, subes **1 punto** al nivel de los veintes. Construye el total.',
            hint: '27 = 1 veinte + 7, y 18 = 18 unidades. En el nivel de las unidades: 7 + 18 = 25 = 1 veinte + 5.',
            explain: '27 + 18 = 45 = 2 × 20 + 5: dos puntos en el nivel de los veintes y una barra en el de las unidades. Para **restar** se hace al revés: se quitan símbolos de cada nivel, y si en las unidades no alcanzan, se baja 1 punto de los veintes y se cambia por 20 unidades. Ejemplo: 45 − 26 → 25 − 6 = 19 en unidades y 1 − 1 = 0 veintes: quedan 19.' },
          { mode: 'build', target: 45, levels: 2, scaffold: true },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['pyd', 'ccss', 'cnt'], cnb: ['pyd:1.4.2', 'pyd:1.2.3'], ambito: 'emprender',
            prompt: 'Las fuerzas de la naturaleza afectan más a las familias en situación de pobreza, sobre todo a las que viven de una sola actividad económica. Clasifica cada situación.',
            hint: 'Piensa: si llega una tormenta, ¿esta situación hace que la familia pierda más o menos?',
            explain: 'Respetar las fuerzas de la naturaleza (no construir en cauces, cuidar los bosques de las laderas) y diversificar la producción protege la vida y la economía familiar.' },
          { buckets: [
            { id: 'mas', label: 'Aumenta el riesgo', icon: 'TrendingUp', color: 'var(--area-cnt)' },
            { id: 'men', label: 'Reduce el riesgo', icon: 'ShieldCheck', color: 'var(--c-ok)' },
          ], items: [
            { id: 'v1', text: 'Una familia vive solo de la cosecha de maíz y no tiene ahorros', bucket: 'mas' },
            { id: 'v2', text: 'Construir una casa en la orilla de un río', bucket: 'mas' },
            { id: 'v3', text: 'Talar el bosque de la ladera para sembrar', bucket: 'mas' },
            { id: 'v4', text: 'Sembrar varios cultivos y criar gallinas', bucket: 'men', feedback: 'Si se pierde un cultivo, la familia tiene otros ingresos y alimentos.' },
            { id: 'v5', text: 'Hacer barreras vivas y curvas a nivel en la parcela', bucket: 'men' },
            { id: 'v6', text: 'Tener un plan familiar de emergencia', bucket: 'men' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['fc', 'pyd'], cnb: ['fc:1.1.1'], ambito: 'convivir', prompt: 'Tu brigada escolar reparte la ayuda. ¿Qué harías?' },
          { scene: { icon: 'Package', text: 'Hay **30 kits de víveres**. La familia de doña Lucía perdió su casa completa; otras familias solo perdieron parte de su cosecha. Un compañero propone: "Demos exactamente lo mismo a todos, y a la familia que habla otro idioma, al final, si sobra".' }, options: [
            { id: 'a', icon: 'Scale', text: 'Dar lo mismo a todos sin mirar las necesidades', consequence: 'La familia de doña Lucía, que lo perdió todo, no alcanza a cubrir lo básico.', values: ['Igualdad sin equidad'], constructive: false },
            { id: 'b', icon: 'HeartHandshake', text: 'Repartir según la necesidad de cada familia, sin excluir a nadie por su idioma', consequence: 'Todas reciben ayuda y quien más perdió recibe más. La comunidad confía en la brigada.', values: ['Equidad', 'Solidaridad', 'Tolerancia'], constructive: true },
            { id: 'c', icon: 'EyeOff', text: 'Dar primero a mis amigos y conocidos', consequence: 'Otras familias se sienten excluidas y se rompe la confianza.', values: ['Favoritismo'], constructive: false },
          ] },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l3', 'fc'], cnb: ['l3:1.2.1'], ambito: 'convivir',
            prompt: 'English time! En un albergue llegan voluntarios de otros países. Pide ayuda con cortesía usando **Can you…?** (¿Puedes…?).',
            explain: 'We use "Can you…?" to ask for help politely. Add "please" to be even more polite.' },
          { text: '[[Can]] you help me, please?\nCan you [[give]] me some water, please?\nCan you [[carry]] this box?\nYes, I [[can]]!', distractors: ['is', 'eat'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.3.3'], prompt: '¿Qué organismo coordina en Guatemala la prevención y la respuesta ante desastres?' },
          { options: [
            { id: 'a', text: 'La CONRED', icon: 'Shield' },
            { id: 'b', text: 'Médicos Sin Fronteras', icon: 'Stethoscope', feedback: 'MSF envía personal de salud, pero no coordina el sistema nacional de Guatemala.' },
            { id: 'c', text: 'Un equipo de fútbol', icon: 'Users', feedback: 'Pueden ser voluntarios, pero no coordinan la respuesta nacional.' },
          ], correct: ['a'] },
        ),
        S.maya(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.7'], prompt: 'Había **38 botellas de agua** y se entregaron **15**. Resta en maya y construye cuántas quedan.' },
          { mode: 'build', target: 23, levels: 2 },
        ),
        cierre({ areas: ['fc', 'ccss'], cnb: ['fc:1.1.1'] }, ['Nombro organismos que ayudan ante desastres', 'Sigo en orden las instrucciones de un mensaje de emergencia', 'Sumo y resto con números mayas', 'Reparto con equidad y sin excluir'],
          ['Prepararé con mi familia una mochila de emergencia', 'Aprenderé la ruta de evacuación de mi escuela', 'Ayudaré a quien más lo necesite, sin importar su idioma o su origen']),
      ],
    }),

    /* ───────────────────────── Día 4 ───────────────────────── */
    lesson({
      id: 's21-d4-convivir-sin-excluir',
      title: 'Convivir sin excluir',
      icon: 'Users',
      minutes: 15,
      day: 4,
      gancho: '¿Alguna vez alguien pensó que su forma de hablar, vestir o celebrar era "la única correcta"? ¿Qué pasó?',
      objetivos: ['Revisar las consecuencias del etnocentrismo y la intolerancia en la historia', 'Reconocer derechos y deberes que construyen buenas relaciones', 'Identificar palabras persuasivas y el propósito de un mensaje', 'Crear un paisaje sonoro siguiendo instrucciones musicales'],
      resumen: [
        'El etnocentrismo es creer que la propia cultura es superior a las demás. En la historia ha provocado discriminación, segregación y violencia, como el apartheid en Sudáfrica (1948-1994).',
        'Las relaciones de calidad se construyen cuando ejercemos nuestros derechos y cumplimos nuestros deberes.',
        'Los mensajes persuasivos usan palabras como "únete", "debemos", "juntos", "ahora" para convencer. Otros textos narran (cuentan hechos en orden) o describen (dicen cómo es algo).',
        'Un paisaje sonoro representa un lugar o una situación con sonidos organizados en ritmo.',
      ],
      media: {
        id: 's21-d4-mandela', kind: 'image', title: 'Un puente sobre la exclusión', aspect: '16:9',
        alt: 'Ilustración simbólica de personas de distintos colores de piel y vestimentas que cruzan un puente sobre un muro roto.',
        brief: 'Ilustración simbólica, cálida y esperanzadora: un muro gris agrietado con un letrero borroso de "solo para…" que se derrumba; sobre él, un puente de colores por el que caminan juntas personas de distintos pueblos del mundo y de Guatemala (maya, garífuna, xinka, ladina, africana, asiática), niñas y niños, una persona en silla de ruedas. Sin retratos de personas reales, sin violencia. Paleta de atardecer.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['fc', 'ccss'], cnb: ['fc:2.1.2'], ambito: 'convivir', title: 'Cuando una cultura se cree superior',
            prompt: 'Así como en una emergencia necesitamos a todos, en la convivencia diaria nadie sobra. Pero en la historia, muchas veces un grupo se creyó superior a otros. Toca cada tarjeta.' },
          { icon: 'Users', body: 'El **etnocentrismo** es juzgar a otras culturas solo desde la propia y creerla superior. La **intolerancia** es no aceptar a quien piensa o vive distinto.', reveal: [
            { icon: 'Landmark', front: 'Conquista y colonia', back: 'Los conquistadores europeos despreciaron los idiomas y creencias de los pueblos originarios de América y los sometieron.' },
            { icon: 'Slash', front: 'Apartheid', back: 'En Sudáfrica (1948-1994) una ley separaba a las personas por su color de piel. Nelson Mandela luchó contra ella y fue elegido presidente en 1994.' },
            { icon: 'Bus', front: 'Segregación', back: 'En Estados Unidos, las leyes separaban a las personas por su color de piel. En 1955, Rosa Parks se negó a ceder su asiento de autobús a un pasajero blanco. Su valentía impulsó leyes de igualdad.' },
            { icon: 'Scale', front: 'La lección', back: 'La intolerancia genera sufrimiento y divide. El respeto y la igualdad de derechos permiten convivir en paz.' },
          ] },
        ),
        S.reading(
          { fase: 'construir', areas: ['l1', 'fc', 'l2'], cnb: ['l1:1.2.3', 'fc:2.1.2', 'l2:3.2.1'], ambito: 'conocer', prompt: 'Lee el texto y responde.' },
          { genre: 'Relato histórico', heading: 'El hombre que perdonó', passage:
            'En 1948, el gobierno de Sudáfrica aprobó un sistema llamado **apartheid**, que significa "separación". Las personas negras no podían vivir en los mismos barrios, estudiar en las mismas escuelas ni votar como las personas blancas.\n\n**Nelson Mandela** fue un abogado que luchó contra esas leyes injustas. Por eso pasó **27 años en prisión**. Cuando salió, en 1990, no buscó venganza: dialogó con quienes lo habían encarcelado para construir un país donde todas las personas tuvieran los mismos derechos.\n\nEn **1994**, por primera vez, toda la población pudo votar, y Mandela fue elegido presidente. Su ejemplo muestra que el diálogo puede vencer a la intolerancia.',
            questions: [
              { q: '¿Cuál es el propósito principal de este texto?', options: [
                { id: 'a', text: 'Narrar hechos en orden sobre la lucha contra el apartheid' },
                { id: 'b', text: 'Describir cómo es el paisaje de Sudáfrica' },
                { id: 'c', text: 'Dar instrucciones para votar' },
              ], correct: 'a', why: 'El texto cuenta sucesos en orden (1948, prisión, 1990, 1994): es narrativo.' },
              { q: '¿Qué consecuencia tuvo el etnocentrismo en Sudáfrica?', options: [
                { id: 'a', text: 'Leyes que separaban y negaban derechos por el color de piel' },
                { id: 'b', text: 'Que todas las personas votaran desde 1948' },
                { id: 'c', text: 'Que no hubiera escuelas' },
              ], correct: 'a' },
              { q: 'Tu grado investiga "Personas que lucharon contra la discriminación". ¿Te sirve este texto?', options: [
                { id: 'a', text: 'Sí, porque su tema responde directamente a la investigación' },
                { id: 'b', text: 'No, porque habla de otro continente' },
                { id: 'c', text: 'No, porque tiene fechas' },
              ], correct: 'a', why: 'Para seleccionar textos, compara el tema de la lectura con lo que necesitas investigar.' },
            ] },
        ),
        S.highlight(
          { fase: 'construir', areas: ['l1', 'fc'], cnb: ['l1:1.2.1'], ambito: 'conocer',
            prompt: 'La brigada escolar escribió una campaña. Marca las **palabras que buscan persuadir** (convencer para actuar).',
            explain: 'Los verbos que invitan a actuar (únete, participa), las palabras de urgencia (ahora) y de unión (juntos, todos) buscan convencer.' },
          { target: 'palabras persuasivas', text: '¡{Únete} a la brigada solidaria! {Juntos} podemos ayudar a las familias afectadas por la tormenta. {Debemos} actuar {ahora}: cada bolsa de víveres cuenta. {Participa} este viernes en el centro de acopio de la escuela.' },
        ),
        S.sort(
          { fase: 'construir', areas: ['fc', 'l2'], cnb: ['fc:1.3.1'], ambito: 'convivir',
            prompt: 'En el albergue conviven familias de distintos pueblos. Para que las relaciones sean de calidad, todos tienen **derechos** y **deberes**. Clasifica.',
            explain: 'Los derechos y los deberes van juntos: si exijo respeto, también debo respetar.' },
          { buckets: [
            { id: 'der', label: 'Derecho', icon: 'Scale', color: 'var(--area-fc)' },
            { id: 'deb', label: 'Deber', icon: 'ClipboardCheck', color: 'var(--area-pyd)' },
          ], items: [
            { id: 'd1', text: 'Recibir atención de salud sin discriminación', bucket: 'der' },
            { id: 'd2', text: 'Hablar en mi propio idioma', bucket: 'der' },
            { id: 'd3', text: 'Respetar los turnos para recibir alimentos', bucket: 'deb' },
            { id: 'd4', text: 'Mantener limpio el espacio común', bucket: 'deb' },
            { id: 'd5', text: 'Ser tratado con dignidad', bucket: 'der' },
            { id: 'd6', text: 'Respetar las costumbres de las otras familias', bucket: 'deb' },
          ] },
        ),
        S.dilemma(
          { fase: 'aplicar', areas: ['l2', 'fc'], cnb: ['l2:1.3.3'], ambito: 'convivir', prompt: 'En la asamblea del albergue, ¿qué harías?' },
          { scene: { icon: 'MessagesSquare', text: 'En la asamblea se decide el horario de la cocina. **Don Anselmo** propone cocinar temprano por la costumbre de su comunidad; **Mariela** opina distinto y algunos se ríen de la forma de hablar de don Anselmo.' }, options: [
            { id: 'a', icon: 'Smile', text: 'Reírme con los demás', consequence: 'Don Anselmo deja de opinar y su familia se siente excluida.', values: ['Burla'], constructive: false },
            { id: 'b', icon: 'Ear', text: 'Pedir la palabra, decir "respetemos todas las opiniones" y proponer escuchar ambas ideas antes de votar', consequence: 'Se escuchan las dos propuestas y acuerdan dos turnos de cocina. Todos se sienten tomados en cuenta.', values: ['Respeto', 'Diálogo', 'Cortesía'], constructive: true },
            { id: 'c', icon: 'VolumeX', text: 'No decir nada para evitar problemas', consequence: 'La decisión se toma sin escuchar a todos y crece la molestia.', values: ['Indiferencia'], constructive: false },
          ] },
        ),
        S.rhythm(
          { fase: 'aplicar', areas: ['art', 'mat'], cnb: ['art:1.1.3', 'art:1.1.5'], ambito: 'hacer',
            prompt: 'Crea el **paisaje sonoro de una tormenta** para el acto de la brigada. Sigue las instrucciones: compás de **4 tiempos**; incluye una **blanca** (el trueno largo) y al menos una **corchea** (gotas rápidas). Luego tócalo con palmas, golpes en la mesa y chasquidos.',
            hint: 'Blanca = 2 tiempos, negra = 1, corchea = 1/2. La suma debe ser 4.',
            explain: 'Por ejemplo: blanca (trueno) + corchea + corchea (gotas) + negra (viento) = 2 + ½ + ½ + 1 = 4 tiempos.',
            media: { id: 's21-d4-tormenta', kind: 'audio', title: 'Paisaje sonoro: la tormenta', duration: 30,
              alt: 'Grabación de un grupo de niños que imitan una tormenta con palmas, chasquidos, golpes en la mesa y la voz.',
              brief: 'Audio de 30 s grabado con niñas y niños: empieza con chasquidos suaves (llovizna), sigue con palmas sobre los muslos (lluvia fuerte), golpes graves en la mesa (trueno largo) y soplidos (viento), y termina volviendo a chasquidos que se apagan. Pulso constante de 4 tiempos audible. Sin efectos electrónicos ni sonidos de alarma que asusten.' } },
          { beats: 4, allowed: ['blanca', 'negra', 'corchea'], mustInclude: ['blanca', 'corchea'], showFractions: true },
        ),
        S.write(
          { fase: 'aplicar', areas: ['art', 'fc', 'l1'], cnb: ['art:1.2.1', 'fc:2.1.2'], ambito: 'convivir',
            prompt: 'Tu grado organiza un **cine-foro de culturas**. Propón dos videos o grabaciones: uno con música, danza o tradición de **tu comunidad** y otro de **otro país**. Explica qué aprenderían tus compañeros y por qué ayudaría a combatir el etnocentrismo.' },
          { minWords: 35, placeholder: 'De mi comunidad propongo… Del otro país propongo… Aprenderíamos… Ayuda contra el etnocentrismo porque…',
            model: 'De mi comunidad propongo una grabación del baile de la Danza del Venado que hacen en la feria patronal. Del otro país propongo un video de tambores de África occidental. Aprenderíamos que cada pueblo usa la música para celebrar y recordar a sus antepasados. Ayuda contra el etnocentrismo porque descubrimos que ninguna cultura es superior: todas tienen algo valioso que enseñar.',
            rubric: ['Propone una grabación de su comunidad', 'Propone una de otro país', 'Explica qué se aprendería', 'Relaciona la actividad con el respeto a otras culturas'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.1.2'], prompt: '¿Qué es el **etnocentrismo**?' },
          { options: [
            { id: 'a', text: 'Creer que la propia cultura es superior a las demás' },
            { id: 'b', text: 'Conocer y respetar muchas culturas', feedback: 'Eso es interculturalidad, lo contrario del etnocentrismo.' },
            { id: 'c', text: 'Vivir en el centro de una ciudad', feedback: '"Centro" en esta palabra se refiere a poner la propia cultura en el centro de todo.' },
          ], correct: ['a'] },
        ),
        S.tf(
          { fase: 'comprobar', areas: ['l1', 'fc'], cnb: ['l1:1.2.1', 'fc:1.3.1'], prompt: 'Boleto de salida: ¿verdadero o falso?' },
          { statements: [
            { text: '"¡Únete ahora!" es una expresión persuasiva.', answer: true },
            { text: 'Respetar los turnos es un deber que mejora la convivencia.', answer: true },
            { text: 'Un texto que cuenta hechos en orden tiene el propósito de describir.', answer: false, why: 'Contar hechos en orden es narrar; describir es decir cómo es algo.' },
            { text: 'Tener derechos significa que no tengo ningún deber.', answer: false, why: 'Derechos y deberes van juntos.' },
          ] },
        ),
        cierre({ areas: ['fc', 'l2'], cnb: ['l2:1.3.3'] }, ['Explico qué es el etnocentrismo y sus consecuencias', 'Distingo derechos y deberes', 'Reconozco palabras persuasivas', 'Respeto las opiniones de los demás'],
          ['Escucharé con respeto a quien piense distinto', 'Aprenderé algo de una cultura diferente a la mía', 'Invitaré a participar a quien se sienta excluido']),
      ],
    }),

    /* ───────────────────────── Día 5: Reto semanal ───────────────────────── */
    lesson({
      id: 's21-d5-reto',
      title: 'Reto de la semana 21',
      icon: 'Trophy',
      minutes: 13,
      day: 5,
      kind: 'reto',
      objetivos: ['Demostrar lo que aprendiste esta semana', 'Obtener la medalla "Brigada solidaria" (70 % o más)'],
      resumen: ['Superé el reto de la semana 21: universo, células, ayuda humanitaria y convivencia sin exclusión.'],
      media: {
        id: 's21-d5-reto', kind: 'image', title: 'Medalla Brigada solidaria', aspect: '1:1',
        alt: 'Medalla dorada con dos manos entrelazadas sobre un planeta Tierra y pequeñas estrellas alrededor.',
        brief: 'Ilustración de medalla circular dorada con relieve: dos manos de distintos tonos de piel entrelazadas sobre el planeta Tierra, rodeadas de pequeñas estrellas que recuerdan el universo. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024.',
      },
      steps: [
        S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.1.3'], prompt: '¿Qué prueba muestra que el universo todavía se expande?' },
          { options: [{ id: 'a', text: 'Las galaxias se siguen alejando unas de otras' }, { id: 'b', text: 'La Luna cambia de forma cada semana' }, { id: 'c', text: 'Llueve más en invierno' }], correct: ['a'] }),
        S.order({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.2.3'], prompt: 'Ordena los niveles de organización del cuerpo humano, del más pequeño al más grande.' },
          { items: [{ id: 'a', text: 'Célula ósea' }, { id: 'b', text: 'Tejido óseo' }, { id: 'c', text: 'Hueso (órgano)' }, { id: 'd', text: 'Sistema óseo' }, { id: 'e', text: 'Persona (organismo)' }], labels: { start: 'Más pequeño', end: 'Más grande' } }),
        S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.3.3', 'cnt:1.4.3'], prompt: '¿Verdadero o falso?' },
          { statements: [{ text: 'La célula vegetal forma una placa celular al dividirse.', answer: true }, { text: 'El óvulo puede llevar un cromosoma Y.', answer: false }, { text: 'Una persona con cromosomas XY es de sexo masculino.', answer: true }] }),
        S.number({ fase: 'comprobar', areas: ['ccss', 'mat'], cnb: ['ccss:1.2.3'], prompt: 'En Guatemala (UTC −6) son las **10:00**. ¿Qué hora es en un país que está en **UTC −3**? (Escribe solo la hora.)' },
          { answer: 13, unit: 'horas', misconceptions: [{ value: 7, msg: 'Ese país está más al este: su hora es más tarde, hay que sumar 3.' }] }),
        S.match({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.1.3', 'ccss:1.3.3'], prompt: 'Une cada nombre con lo que es.' },
          { pairs: [{ id: 'a', left: 'Amazonas', right: 'Río de América del Sur' }, { id: 'b', left: 'Titicaca', right: 'Lago entre Perú y Bolivia' }, { id: 'c', left: 'Índico', right: 'Océano' }, { id: 'd', left: 'Médicos Sin Fronteras', right: 'Organización de ayuda médica en emergencias' }] }),
        S.maya({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.7'], prompt: 'Suma en maya **33 + 19** y construye el resultado.' },
          { mode: 'build', target: 52, levels: 2 }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.4.3'], prompt: 'Calcula **3/5 × 2/3** y escribe el resultado simplificado.' },
          { answer: 2 / 5, allowFraction: true, allowDecimal: true, stimulus: '3/5 × 2/3 = ?' }),
        S.highlight({ fase: 'comprobar', areas: ['l1', 'l2'], cnb: ['l1:1.2.1', 'l2:3.2.2'], prompt: 'Marca las **palabras persuasivas** del anuncio.' },
          { target: 'palabras persuasivas', text: '¡{Participa} en la jornada de limpieza del río! {Todos} {juntos} cuidamos el agua. La jornada será el sábado a las 8:00.' }),
        S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.2.1', 'l3:1.1.3'], prompt: 'Complete in English.' },
          { text: '[[Can]] you help me, please? There [[are]] three boxes on the table.', distractors: ['Is', 'am'] }),
        S.tf({ fase: 'comprobar', areas: ['fc', 'pyd', 'ef', 'art'], cnb: ['fc:1.1.1', 'pyd:1.4.2', 'ef:1.3.8', 'art:1.1.5'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'La equidad es dar a cada quien según su necesidad.', answer: true },
            { text: 'Una familia que vive de un solo cultivo es menos vulnerable ante una tormenta.', answer: false },
            { text: 'En un relevo, la estafeta se puede entregar al frente o por detrás de la cadera.', answer: true },
            { text: 'Un paisaje sonoro solo se puede hacer con instrumentos comprados.', answer: false },
          ] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 3 (el primer área = área principal) */
  bank: [
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.1.3'], prompt: '¿Hace cuánto tiempo, aproximadamente, se formó la Tierra?' },
      { options: [{ id: 'a', text: 'Hace unos 4,500 millones de años' }, { id: 'b', text: 'Hace unos 2,000 años' }, { id: 'c', text: 'Hace unos 13,800 millones de años' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.2.3'], prompt: '¿Qué es un tejido?' },
      { options: [{ id: 'a', text: 'Un grupo de células iguales que hacen el mismo trabajo' }, { id: 'b', text: 'Un órgano del cuerpo' }, { id: 'c', text: 'Una sola célula' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:1.4.3'], prompt: '¿Qué célula determina si el bebé será niña o niño?' },
      { options: [{ id: 'a', text: 'El espermatozoide, porque puede llevar X o Y' }, { id: 'b', text: 'El óvulo, porque puede llevar X o Y' }, { id: 'c', text: 'Ninguna' }], correct: ['a'] }),
    S.sort({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.1.3'], prompt: 'Clasifica: ¿río o lago?' },
      { buckets: [{ id: 'r', label: 'Río', icon: 'Waves' }, { id: 'l', label: 'Lago', icon: 'Droplet' }],
        items: [{ id: 'a', text: 'Nilo', bucket: 'r' }, { id: 'b', text: 'Victoria', bucket: 'l' }, { id: 'c', text: 'Danubio', bucket: 'r' }, { id: 'd', text: 'Atitlán', bucket: 'l' }] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:1.2.3'], prompt: '¿Cuántos grados de longitud mide cada huso horario?' },
      { options: [{ id: 'a', text: '15°' }, { id: 'b', text: '24°' }, { id: 'c', text: '90°' }], correct: ['a'] }),
    S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.4.3'], prompt: 'Una familia tiene 3/4 de cuerda sembrada; la mitad de eso es frijol. ¿Qué fracción de la cuerda tiene frijol?' },
      { answer: 3 / 8, allowFraction: true, allowDecimal: true, stimulus: '1/2 × 3/4 = ?' }),
    S.maya({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:4.2.7'], prompt: 'Resta en maya **50 − 26** y construye el resultado.' },
      { mode: 'build', target: 24, levels: 2 }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:1.3.3', 'l1:1.2.3'], prompt: '"Primero, apaguen la estufa. Luego, salgan por la puerta principal." ¿Cuál es el propósito de este mensaje?' },
      { options: [{ id: 'a', text: 'Establecer normas: decir qué hacer y en qué orden' }, { id: 'b', text: 'Narrar una historia' }, { id: 'c', text: 'Describir una casa' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:3.2.2', 'l2:3.2.1'], prompt: 'En la lectura rápida, ¿dónde suele estar la idea principal de un párrafo?' },
      { options: [{ id: 'a', text: 'En la primera oración' }, { id: 'b', text: 'En la última palabra' }, { id: 'c', text: 'En los números' }], correct: ['a'] }),
    S.fill({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:1.1.3'], prompt: 'Complete in English.' },
      { text: 'There [[is]] a volcano next to the lake. There [[are]] many trees.', distractors: ['am'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:2.1.2', 'fc:1.3.1'], prompt: '¿Qué consecuencia tuvo el apartheid en Sudáfrica?' },
      { options: [{ id: 'a', text: 'Separó a las personas y les negó derechos por su color de piel' }, { id: 'b', text: 'Dio los mismos derechos a todas las personas' }, { id: 'c', text: 'Creó escuelas para todos por igual' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:1.2.3', 'pyd:1.4.2'], prompt: '¿Qué acción muestra respeto por las fuerzas de la naturaleza y protege la economía familiar?' },
      { options: [{ id: 'a', text: 'No construir en la orilla del río y sembrar varios cultivos' }, { id: 'b', text: 'Talar el bosque de la ladera' }, { id: 'c', text: 'Depender de un solo cultivo' }], correct: ['a'] }),
  ],
});
