import { S, cierre, lesson, semana } from '../../dsl';

/**
 * SEMANA 5 · Unidad 1 "Conociendo nuestras raíces"
 * Tema generador: Herencias que nos hacen crecer
 * Lo que heredamos (la agricultura, los aportes de Mesopotamia y Egipto, las máquinas simples, los
 * objetos con historia de la familia) y lo que decidimos hoy para crecer: cuidar la salud, vivir sin
 * drogas, participar en el gobierno escolar e incluir a todas las personas.
 * Cierre: Taller "Un mapa táctil para toda la escuela" (FC · Matemáticas · Artes · L1) y Reto.
 */
export default semana({
  id: 's05',
  unidad: 1,
  semana: 5,
  kind: 'aprendizaje',
  temaGenerador: 'Herencias que nos hacen crecer',
  title: 'Herencias que nos hacen crecer',
  subtitle: 'Enteros y plano cartesiano, primeras civilizaciones, salud sin drogas y participación',
  icon: 'Landmark',
  color: 'var(--area-ccss)',
  contexto: 'La agricultura, el riego, la escritura y el calendario son herencias de pueblos que vivieron hace miles de años; el telar, la olla de barro o la marimba del abuelo son herencias de tu propia familia. Esta semana aprenderás a investigar como las ciencias sociales, a describir con palabras precisas, a usar números bajo cero y el plano cartesiano, a cuidar tu salud frente al VIH y las drogas, y a participar en tu escuela. El viernes, con lo aprendido, diseñarás un mapa táctil para que toda la escuela pueda recorrerse, también con las manos.',
  ejes: ['vida-ciudadana', 'seguridad', 'tecnologia', 'vida-familiar'],
  media: {
    id: 's05-portada', kind: 'animation', title: 'Una línea de herencias', aspect: '16:9', duration: 60,
    alt: 'Línea del tiempo animada que avanza de los canales de Mesopotamia a la imprenta, las carabelas y la fundación de la ONU, y termina en una escuela guatemalteca votando por su gobierno escolar.',
    brief: 'Animación 2D de 60 s tipo línea del tiempo horizontal. Aparecen, en orden: canales de riego entre el Tigris y el Éufrates, una tablilla cuneiforme, el Nilo con un shaduf, una imprenta de tipos móviles, una carabela con brújula y astrolabio, una paloma de la paz sobre el año 1945 (ONU), y al final niñas y niños de una escuela de Guatemala depositando su voto en una urna de cartón para el gobierno escolar. Rótulo final: "¿Qué herencia dejarás tú?". Música suave, sin escenas de guerra ni armas.',
  },
  badge: { id: 'medalla-s05', name: 'Heredero del saber', icon: 'Landmark', desc: 'Completaste la semana 5 y superaste su reto' },
  lessons: [
    /* ───────────────────────── Viernes: Taller interdisciplinario ───────────────────────── */
    lesson({
      id: 's05-d5-taller',
      kind: 'taller',
      day: 5,
      title: 'Un mapa táctil para toda la escuela',
      icon: 'Hand',
      minutes: 18,
      gancho: 'Mateo acaba de llegar a sexto y tiene baja visión. ¿Cómo puede tu grado ayudarle a conocer la escuela sin decidir por él?',
      objetivos: [
        'Seguir los pasos de la participación para resolver una necesidad real de la escuela',
        'Ubicar lugares de la escuela con pares ordenados en el plano cartesiano',
        'Elegir texturas seguras y fáciles de distinguir, y describirlas con palabras precisas',
      ],
      resumen: [
        'Participar bien empieza por informarse: preguntar a la persona qué necesita, en lugar de decidir por ella.',
        'Un plano cartesiano con el origen en un punto conocido (el asta de la bandera) permite ubicar cada lugar con un par ordenado (x, y).',
        'Un mapa táctil usa pocas texturas, muy distintas entre sí, seguras y bien pegadas; su leyenda las describe con palabras connotativas y buena concordancia.',
        'Una propuesta al gobierno escolar dice qué problema resuelve, con qué recursos, cómo se hará y cómo se comprobará que funcionó.',
      ],
      media: {
        id: 's05-taller-portada', kind: 'image', title: 'El patio en un plano', aspect: '16:9',
        alt: 'Plano cuadriculado del patio de una escuela con ejes x e y; el origen está en el asta de la bandera y cada lugar tiene una textura distinta.',
        brief: 'Ilustración cenital de un patio escolar guatemalteco convertido en plano cartesiano: ejes x e y de −5 a 5 cruzándose en el asta de la bandera (origen). Lugares marcados con íconos: Dirección, Aula de sexto, Tienda escolar, Baños, Pila. Cada zona con una textura dibujada distinta (arena en el camino, liso en la cancha, felpa en la grama, aluminio en la pila). En una esquina, manos de un niño recorriendo el mapa. Colores suaves, sin rostros ni marcas.',
      },
      steps: [
        S.choice(
          { fase: 'explorar', areas: ['fc'], cnb: ['fc:3.2.1'], ambito: 'convivir',
            prompt: 'Mateo tiene **baja visión** y aún no conoce la escuela. La comisión de cultura del gobierno escolar quiere ayudarle. Según los **pasos de la participación**, ¿qué conviene hacer **primero**?',
            explain: 'El primer paso es **informarse**. Nadie sabe mejor que Mateo lo que necesita: preguntarle es incluirlo y respetarlo. Después vienen opinar, proponer, actuar y evaluar.' },
          { options: [
            { id: 'a', text: 'Preguntarle a Mateo cómo se orienta y qué le ayudaría', icon: 'MessageCircle' },
            { id: 'b', text: 'Decidir entre todos lo que Mateo necesita, sin molestarlo', icon: 'Users', feedback: 'Decidir por otra persona la deja fuera. Una buena participación incluye a quien le afecta la decisión.' },
            { id: 'c', text: 'Comprar materiales de una vez para no perder tiempo', icon: 'ShoppingCart', feedback: 'Actuar sin informarse puede hacer gastar en algo que no sirve.' },
          ], correct: ['a'] },
        ),
        S.explain(
          { fase: 'construir', areas: ['fc', 'art', 'mat'], cnb: ['fc:3.2.1', 'art:3.2.1', 'mat:1.5.3'], ambito: 'conocer', title: 'El plan del taller',
            prompt: 'Mateo contó que se orienta tocando y contando pasos, y que le serviría un **mapa táctil** del patio. Hoy usarás lo que aprendiste esta semana en tres materias. Toca cada tarjeta.' },
          { icon: 'Map', body: 'Todo mapa táctil necesita **ubicaciones exactas**, **texturas bien elegidas** y una **leyenda clara**.', reveal: [
            { icon: 'Grid3x3', front: 'Matemáticas', back: 'El patio será un **plano cartesiano**: el **asta de la bandera** es el origen (0, 0) y cada lugar tiene su **par ordenado**.' },
            { icon: 'Hand', front: 'Expresión Artística', back: 'Cada zona tendrá una **textura** distinta, segura y bien pegada, con bordes marcados con lana.' },
            { icon: 'PenLine', front: 'Comunicación y Lenguaje', back: 'La **leyenda** describirá cada textura con **palabras connotativas** y buena **concordancia**.' },
            { icon: 'Vote', front: 'Formación Ciudadana', back: 'Al final presentarás una **propuesta** al gobierno escolar para construir el mapa.' },
          ] },
        ),
        S.coord(
          { fase: 'aplicar', areas: ['mat', 'fc'], cnb: ['mat:1.5.3'], ambito: 'hacer',
            prompt: 'Este es el plano del patio (cada cuadro son 5 pasos de Mateo). Mateo pregunta: "¿Qué hay en el punto **(−4, −1)**?". Toca el lugar.',
            hint: 'Desde el asta: primero 4 a la **izquierda** (x negativa) y después 1 hacia **abajo** (y negativa).',
            explain: 'En (−4, −1) está la **tienda escolar**: 4 a la izquierda y 1 abajo del asta. Primero x, después y.' },
          { range: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, markers: [
            { id: 'dir', label: 'Dirección', emoji: '🏫', x: -3, y: 3 },
            { id: 'aula', label: 'Aula de sexto', emoji: '📚', x: 3, y: 3 },
            { id: 'tienda', label: 'Tienda escolar', emoji: '🥪', x: -4, y: -1 },
            { id: 'banos', label: 'Baños', emoji: '🚻', x: 4, y: -2 },
            { id: 'pila', label: 'Pila', emoji: '🚰', x: -1, y: -4 },
          ], task: { kind: 'identify', markerId: 'tienda' } },
        ),
        S.coord(
          { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.5.3'], ambito: 'hacer',
            prompt: 'Falta el **bebedero** nuevo. Está en el punto **(2, −3)**. Colócalo en el plano.',
            hint: 'Parte del origen: 2 a la derecha y 3 hacia abajo.',
            explain: '(2, −3): x = 2 (derecha) e y = −3 (abajo). Queda en el cuadrante IV, cerca de los baños.' },
          { range: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, markers: [
            { id: 'aula', label: 'Aula de sexto', emoji: '📚', x: 3, y: 3 },
            { id: 'banos', label: 'Baños', emoji: '🚻', x: 4, y: -2 },
            { id: 'pila', label: 'Pila', emoji: '🚰', x: -1, y: -4 },
          ], task: { kind: 'place', x: 2, y: -3, emoji: '💧', label: 'Bebedero' } },
        ),
        S.number(
          { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.5.2', 'mat:1.5.3'], ambito: 'hacer',
            prompt: 'Mateo quiere ir de la **tienda escolar** (−4, −1) hacia el lado del **aula de sexto** (3, 3). En el eje x, ¿cuántos cuadros hay entre x = −4 y x = 3?',
            hint: 'De −4 al 0 hay 4 cuadros; del 0 al 3 hay 3. Súmalos.',
            explain: 'Entre un negativo y un positivo se suman sus distancias al cero: 4 + 3 = **7 cuadros** (unos 35 pasos de Mateo).' },
          { answer: 7, unit: 'cuadros', misconceptions: [
            { value: 1, msg: 'Restaste 4 − 3. Como −4 y 3 están a lados distintos del cero, las distancias se suman.' },
            { value: -1, msg: 'Una distancia no es negativa: cuenta los cuadros de −4 a 0 y de 0 a 3.' },
          ] },
        ),
        S.sort(
          { fase: 'aplicar', areas: ['art', 'fc'], cnb: ['art:3.2.1'], ambito: 'hacer',
            prompt: 'La comisión juntó materiales. ¿Cuáles **sirven** para el mapa táctil y cuáles **no**?',
            hint: 'Recuerda las reglas: texturas muy distintas, bien pegadas y nada que corte, pinche o se despegue.',
            explain: 'Un mapa táctil se toca con las yemas de los dedos: todo debe ser **seguro** y quedar **bien pegado**.',
            media: { id: 's05-taller-materiales', kind: 'image', title: 'Materiales para el mapa táctil', aspect: '4:3',
              alt: 'Mesa con materiales reciclados: arena en un frasco, papel aluminio, lana, retazos de felpa, cartulina y, aparte y tachados, tachuelas y trozos de vidrio.',
              brief: 'Fotografía cenital de una mesa escolar con materiales para un mapa táctil: frasco de arena, rollo de papel aluminio, madeja de lana, retazos de felpa, cartulina lisa, goma blanca. En una esquina separada, con una X roja, tachuelas y trozos de vidrio (sin manos cerca). Luz natural, sin marcas.' } },
          { buckets: [
            { id: 'si', label: 'Sirve', icon: 'Check', color: 'var(--c-ok)' },
            { id: 'no', label: 'No sirve', icon: 'X', color: 'var(--c-bad)' },
          ], items: [
            { id: 'm1', text: 'Arena pegada con goma blanca', bucket: 'si' },
            { id: 'm2', text: 'Lana pegada para marcar los bordes', bucket: 'si' },
            { id: 'm3', text: 'Retazo de felpa', bucket: 'si' },
            { id: 'm4', text: 'Tachuelas para marcar los lugares', bucket: 'no', feedback: 'Las tachuelas pinchan: nunca en algo que se toca con los dedos.' },
            { id: 'm5', text: 'Vidrio de botella quebrado', bucket: 'no', feedback: 'El vidrio corta. Busca otro material liso, como papel aluminio.' },
            { id: 'm6', text: 'Arena suelta, sin pegar', bucket: 'no', feedback: 'Se despega y se cae: la textura desaparece y ensucia.' },
          ] },
        ),
        S.match(
          { fase: 'aplicar', areas: ['art'], cnb: ['art:3.2.1'], ambito: 'hacer',
            prompt: 'Asigna una textura a cada zona del patio. Deben parecerse un poco a la zona real y ser **muy distintas entre sí**.',
            explain: 'Rugosa para la tierra, lisa y fría para el agua, suave para la grama y lisa pero firme para el cemento: cuatro sensaciones que los dedos no confunden.' },
          { pairs: [
            { id: 'z1', left: 'Camino de tierra', leftIcon: 'Footprints', right: 'Arena pegada (rugosa)' },
            { id: 'z2', left: 'Pila de agua', leftIcon: 'Droplets', right: 'Papel aluminio alisado (liso y frío)' },
            { id: 'z3', left: 'Jardín con grama', leftIcon: 'Sprout', right: 'Felpa (suave)' },
            { id: 'z4', left: 'Cancha de cemento', leftIcon: 'Square', right: 'Cartulina gruesa (lisa y firme)' },
          ], leftTitle: 'Zona', rightTitle: 'Textura' },
        ),
        S.highlight(
          { fase: 'aplicar', areas: ['l1', 'art'], cnb: ['l1:5.2.2'], ambito: 'hacer',
            prompt: 'Este es el borrador de la **leyenda** que se leerá en voz alta a Mateo. Toca las **palabras connotativas** (las que dicen cómo es cada cosa).',
            hint: 'Pregunta a cada sustantivo: ¿cómo es?',
            explain: 'Rugoso, lisa, fría, suave y gruesa dicen **cómo es** cada textura. "El", "la", "cada" y "tres" solo presentan, señalan o cuentan: son no connotativas.' },
          { target: 'palabras connotativas', text: 'El camino {rugoso} lleva a la pila {lisa} y {fría}. La grama {suave} rodea la cancha. Cada lugar tiene un borde de lana {gruesa} y tres puntos de goma.' },
        ),
        S.fill(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:7.1.2'], ambito: 'hacer',
            prompt: 'Termina la leyenda cuidando la **concordancia de género y número** entre el sustantivo y su adjetivo.',
            explain: 'Los caminos → rugosos (masculino plural); las zonas → suaves (plural); el agua → fría (es femenina aunque lleve "el"); la cancha → lisa.' },
          { text: 'Los caminos [[rugosos]] van a las aulas. Las zonas [[suaves]] son jardines. El agua [[fría]] está en la pila y la cancha [[lisa]] está al centro.', distractors: ['rugoso', 'suave', 'frío', 'liso'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['fc', 'l1'], cnb: ['fc:3.2.2', 'fc:3.2.1'], ambito: 'convivir',
            prompt: 'Escribe tu **propuesta** al gobierno escolar para construir el mapa táctil. Debe pasar las cuatro preguntas: ¿qué **problema real** resuelve?, ¿con qué **recursos**?, ¿**cómo** se hará?, ¿cómo se **comprobará** que funcionó? Usa al menos dos palabras connotativas.' },
          { minWords: 45, placeholder: 'Proponemos…',
            model: 'Proponemos construir un mapa táctil del patio para que Mateo y cualquier persona con baja visión se orienten solos. Usaremos cartón grueso, arena, papel aluminio, felpa y lana que donen las familias. Cada zona tendrá su par ordenado y una textura distinta; la comisión de cultura lo armará en dos viernes. Sabremos que funcionó si Mateo encuentra la tienda y los baños usando el mapa, y le pediremos su opinión para mejorarlo.',
            rubric: ['Nombré un problema real de la escuela', 'Dije con qué recursos y cómo se hará', 'Expliqué cómo se comprobará que funcionó', 'Usé palabras connotativas y buena concordancia'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.2.1'], ambito: 'convivir',
            prompt: 'El mapa ya está en la entrada. ¿Qué acción corresponde al último paso de la participación, **evaluar**?' },
          { options: [
            { id: 'a', text: 'Preguntar a Mateo si el mapa le sirve y corregir lo que no funcione' },
            { id: 'b', text: 'Tomar una foto y no volver a revisarlo' },
            { id: 'c', text: 'Empezar otro proyecto sin terminar este' },
          ], correct: ['a'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.5.3'],
            prompt: 'En el mismo plano, la dirección está en **(−3, 3)**. ¿En qué cuadrante está?' },
          { options: [
            { id: 'i', text: 'Cuadrante I (+, +)' },
            { id: 'ii', text: 'Cuadrante II (−, +)' },
            { id: 'iii', text: 'Cuadrante III (−, −)' },
            { id: 'iv', text: 'Cuadrante IV (+, −)' },
          ], correct: ['ii'] },
        ),
        cierre({ areas: ['fc', 'mat', 'art', 'l1'], cnb: ['fc:3.2.1'] },
          ['Pregunto a las personas qué necesitan antes de decidir', 'Ubico lugares con pares ordenados, también con números negativos', 'Elijo texturas seguras y distintas para un mapa táctil', 'Describo con palabras precisas y buena concordancia'],
          ['Haré el mapa táctil de mi casa o de mi cuarto', 'Llevaré mi propuesta a la comisión de mi grado', 'Preguntaré antes de ayudar a alguien']),
      ],
    }),

    /* ───────────────────────── Viernes: Reto semanal ───────────────────────── */
    lesson({
      id: 's05-d5-reto',
      kind: 'reto',
      day: 5,
      title: 'Reto de la semana 5',
      icon: 'Trophy',
      minutes: 14,
      objetivos: ['Demostrar lo que aprendiste esta semana en tus materias', 'Obtener la medalla "Heredero del saber" (70 % o más)'],
      resumen: ['Superé el reto de la semana 5: enteros, plano cartesiano y series; palabras connotativas y concordancia; VIH y drogas; herramientas de investigación y primeras civilizaciones; inglés y balonmano.'],
      media: {
        id: 's05-d5-reto', kind: 'image', title: 'Medalla Heredero del saber', aspect: '1:1',
        alt: 'Medalla dorada con una mazorca, una tablilla antigua y una urna de votación.',
        brief: 'Ilustración de medalla circular dorada con tres símbolos en relieve: una mazorca de maíz, una tablilla de escritura antigua y una pequeña urna con una papeleta. Cinta con los colores de las áreas del CNB. Fondo transparente, 1024×1024, estilo plano con brillo suave.',
      },
      steps: [
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.5.1'],
          prompt: 'Supongamos que a las 5:00 en Ixchiguán el termómetro marca **−4 °C** y a las 11:00 la temperatura **subió 9 grados**. ¿Qué temperatura marca a las 11:00?' },
          { answer: 5, unit: '°C', allowNegative: true }),
        S.tf({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.5.2'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: '−10 es mayor que −2.', answer: false, why: '−10 está más a la izquierda en la recta: es menor.' },
            { text: '0 es mayor que −7.', answer: true },
            { text: 'Entre −5 y 3 hay 8 espacios en la recta numérica.', answer: true, why: '5 + 3 = 8.' },
          ] }),
        S.number({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:2.1.1'],
          prompt: 'La serie **4, 10, 28, 82, …** sigue la regla "×3, luego −2". ¿Qué número sigue?' },
          { answer: 244 }),
        S.highlight({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.2.2'], prompt: 'Toca las **palabras connotativas**.' },
          { target: 'palabras connotativas', text: 'Mi abuela guarda un telar {antiguo} de madera {oscura} y un perraje {suave} con flores {bordadas}.' }),
        S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.1.2'], prompt: '¿Qué oración tiene **concordancia correcta** y el plural bien escrito?' },
          { options: [
            { id: 'a', text: 'Los jóvenes alegres bailaron en la feria.' },
            { id: 'b', text: 'Los jovenes alegre bailaron en la feria.' },
            { id: 'c', text: 'Las jóvenes alegres bailó en la feria.' },
          ], correct: ['a'] }),
        S.tf({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.5.1'], prompt: '¿Verdadero o falso?' },
          { statements: [
            { text: 'El VIH se puede transmitir al compartir un vaso o dar un abrazo.', answer: false, why: 'El VIH no se transmite por contacto diario: solo por sangre, relaciones sexuales sin protección y de madre a bebé sin tratamiento.' },
            { text: 'El SIDA es la etapa avanzada de la infección por VIH.', answer: true },
            { text: 'Con tratamiento antirretroviral, una persona con VIH puede vivir muchos años.', answer: true },
          ] }),
        S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.1.1'], prompt: 'Clasifica cada droga según su **efecto** en el sistema nervioso.' },
          { buckets: [
            { id: 'dep', label: 'Depresora', icon: 'Moon' },
            { id: 'est', label: 'Estimulante', icon: 'Zap' },
            { id: 'per', label: 'Perturbadora', icon: 'Sparkles' },
          ], items: [
            { id: 'a', text: 'Cafeína', bucket: 'est' },
            { id: 'b', text: 'Alcohol', bucket: 'dep' },
            { id: 'c', text: 'Marihuana', bucket: 'per' },
            { id: 'd', text: 'Cocaína', bucket: 'est' },
          ] }),
        S.match({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.3.1'], prompt: 'Une cada necesidad de investigación con la **herramienta** más adecuada.' },
          { pairs: [
            { id: 'h1', left: 'Saber cuántos de 40 estudiantes caminan a la escuela', right: 'Encuesta' },
            { id: 'h2', left: 'Conocer cómo era la feria del pueblo según una abuela', right: 'Entrevista' },
            { id: 'h3', left: 'Anotar qué hacen los estudiantes en el recreo, con una lista de cotejo', right: 'Observación' },
            { id: 'h4', left: 'Guardar datos de un libro sobre el río Nilo, con su referencia', right: 'Ficha de lectura' },
          ] }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.2.1'], prompt: '¿De qué planta silvestre se domesticó el maíz en Mesoamérica?' },
          { options: [
            { id: 'a', text: 'Del teocintle' },
            { id: 'b', text: 'Del trigo' },
            { id: 'c', text: 'Del frijol' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.3.5', 'ccss:6.3.1'], prompt: 'Cada vez que usas un calendario de **365 días** recuerdas un aporte de…' },
          { options: [
            { id: 'a', text: 'Egipto' },
            { id: 'b', text: 'Mesopotamia' },
            { id: 'c', text: 'Los cazadores y recolectores' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.3'], prompt: 'Choose the correct sentence. (Elige la oración correcta.)' },
          { options: [
            { id: 'a', text: 'My brother plays the drum loudly.' },
            { id: 'b', text: 'My brother play the drum loudly.' },
            { id: 'c', text: 'My brother loudly the drum plays.' },
          ], correct: ['a'] }),
        S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.13'], prompt: 'En balonmano, ¿cuánto tiempo puedes **retener** la pelota en la mano como máximo?' },
          { options: [
            { id: 'a', text: '3 segundos' },
            { id: 'b', text: '10 segundos' },
            { id: 'c', text: 'Todo el tiempo que quieras' },
          ], correct: ['a'] }),
      ],
    }),
  ],

  /* Banco de ítems para la Semana de validación de la Unidad 1 (el primer área = área principal) */
  bank: [
    S.coord({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.5.3'], prompt: 'Coloca la milpa en el punto **(−2, 4)**.' },
      { range: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, task: { kind: 'place', x: -2, y: 4, emoji: '🌽', label: 'Milpa' } }),
    S.choice({ fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.5.1'], prompt: 'Un buzo está a **12 metros bajo el nivel del mar**. ¿Qué número representa su posición?' },
      { options: [{ id: 'a', text: '−12' }, { id: 'b', text: '12' }, { id: 'c', text: '0' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l1'], cnb: ['l1:7.1.2'], prompt: '¿Cuál es el femenino de **el alcalde**?' },
      { options: [{ id: 'a', text: 'la alcaldesa' }, { id: 'b', text: 'la alcalda' }, { id: 'c', text: 'el alcalde mujer' }], correct: ['a'] }),
    S.sort({ fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:4.2.1'], prompt: '¿Factor de **riesgo** o de **protección** frente a las drogas?' },
      { buckets: [{ id: 'r', label: 'Riesgo', icon: 'TriangleAlert' }, { id: 'p', label: 'Protección', icon: 'ShieldCheck' }],
        items: [
          { id: 'a', text: 'Pertenecer a un equipo de fútbol', bucket: 'p' },
          { id: 'b', text: 'Presión de amigos para "probar"', bucket: 'r' },
          { id: 'c', text: 'Una familia que escucha', bucket: 'p' },
          { id: 'd', text: 'Tardes libres sin nada que hacer', bucket: 'r' },
        ] }),
    S.choice({ fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:6.3.1'], prompt: '¿Cómo era el **gobierno** en el antiguo Egipto?' },
      { options: [{ id: 'a', text: 'Autoritario: el faraón concentraba el poder y se decía elegido por los dioses' }, { id: 'b', text: 'Democrático: el pueblo elegía a sus gobernantes cada cuatro años' }, { id: 'c', text: 'No había gobierno: cada familia decidía sola' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.2.1'], prompt: 'Una buena participación es voluntaria, informada, respetuosa y…' },
      { options: [{ id: 'a', text: 'incluye a todas las personas' }, { id: 'b', text: 'la deciden solo los mayores' }, { id: 'c', text: 'se hace sin escuchar a nadie' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['art'], cnb: ['art:3.2.1'], prompt: 'La fotografía de un petate impresa en una revista tiene textura…' },
      { options: [{ id: 'a', text: 'visual: se ve, pero al tocarla el papel es liso' }, { id: 'b', text: 'táctil: se siente como un petate' }, { id: 'c', text: 'no tiene ninguna textura' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:3.2.3'], prompt: 'La **rampa** de la entrada de la escuela, que ayuda a subir una silla de ruedas, es una máquina simple llamada…' },
      { options: [{ id: 'a', text: 'Plano inclinado' }, { id: 'b', text: 'Polea' }, { id: 'c', text: 'Tornillo' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.5'], prompt: 'Tu compañero corre hacia la portería. ¿Dónde lanzas un **pase adelantado**?' },
      { options: [{ id: 'a', text: 'Un poco delante de él, donde estará al llegar la pelota' }, { id: 'b', text: 'Justo donde está ahora' }, { id: 'c', text: 'Detrás de él' }], correct: ['a'] }),
    S.choice({ fase: 'comprobar', areas: ['l2'], cnb: ['l2:1.2.2'], prompt: '"_Hay que tapar las pilas, porque el agua estancada cría zancudos que transmiten el dengue._" ¿Qué intención tiene este mensaje?' },
      { options: [{ id: 'a', text: 'Convencer (argumentar)' }, { id: 'b', text: 'Solo informar un dato' }, { id: 'c', text: 'Contar un cuento' }], correct: ['a'] }),
    S.order({ fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.3'], prompt: 'Ordena para decir: "Ella tiene un perro pequeño".' },
      { items: [{ id: 'a', text: 'She' }, { id: 'b', text: 'has' }, { id: 'c', text: 'a' }, { id: 'd', text: 'small' }, { id: 'e', text: 'dog' }] }),
  ],
});
