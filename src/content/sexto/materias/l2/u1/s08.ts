/**
 * L2 (español como segundo idioma) · Unidad 1 · Semana 8
 * Las palabras tienen oficio: sustantivo, adjetivo y verbo; y las familias de sustantivos
 * (comunes y propios, individuales y colectivos, concretos y abstractos). Cierre de unidad.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's08-l2-1',
    title: 'Sustantivo, adjetivo y verbo',
    icon: 'Blocks',
    minutes: 14,
    gancho: 'En "La abuela amable teje un güipil", cada palabra hace un trabajo distinto: una nombra, otra describe y otra dice la acción. ¿Cuál es cuál?',
    objetivos: [
      'Clasificar sustantivos, adjetivos y verbos en observaciones y recomendaciones de un panel de energía',
    ],
    resumen: [
      'Sustantivo: nombra personas, animales, lugares, cosas o ideas. Prueba: puedes ponerle "el, la, un, una" delante (la abuela, un güipil).',
      'Adjetivo: dice cómo es el sustantivo. Prueba: responde "¿cómo es?" (amable, colorido). Concuerda con el sustantivo en género y número.',
      'Verbo: dice la acción o el estado. Prueba: cambia con el tiempo (tejo, tejí, tejeré) y con la persona (yo tejo, ella teje).',
      'Una misma palabra puede cambiar de clase según su oficio: "el canto" (sustantivo) / "yo canto" (verbo).',
    ],
    media: {
      id: 's08-l2-1-oficios', kind: 'animation', title: 'Cada palabra tiene su oficio', aspect: '16:9', duration: 45,
      alt: 'Una oración se arma con fichas de colores: los sustantivos en azul, los adjetivos en verde y los verbos en naranja.',
      brief: 'Animación 2D de 45 s. Aparece la oración "La abuela amable teje un güipil colorido" en fichas separadas. Una lupa pasa por cada ficha: "abuela" y "güipil" se pintan de azul con el rótulo "SUSTANTIVO: nombra"; "amable" y "colorido" de verde con "ADJETIVO: dice cómo es"; "teje" de naranja con "VERBO: dice la acción". Luego "teje" cambia a "tejió" y "tejerá" para mostrar que el verbo cambia con el tiempo. Ilustración de una abuela tejiendo en telar de cintura, sin reproducir diseños sagrados específicos. Narración en español de Guatemala con subtítulos. Target: public/media/s08-l2-1-oficios.mp4. Accesibilidad: subtítulos completos, transcripción y pausa suficiente para lectura.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'conocer', title: 'Palabras con oficio en el panel', prompt: 'Lee cómo clasificar palabras de una observación energética.' },
        { icon: 'Tags', body: 'En una observación de energía, el **sustantivo** nombra, el **adjetivo** describe y el **verbo** expresa acción o estado.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'conocer',
          prompt: 'Lee esta observación del panel: _"La lámpara eficiente **ilumina** el aula."_ ¿Qué trabajo hace **ilumina**?',
          explain: '"Ilumina" expresa la acción de la lámpara: es un verbo. En las observaciones del panel, los sustantivos nombran, los adjetivos describen y los verbos expresan acciones o estados.' },
        { options: [
          { id: 'a', text: 'Expresa una acción', icon: 'Zap' },
          { id: 'b', text: 'Nombra el objeto', icon: 'Lightbulb', feedback: 'El sustantivo que nombra el objeto es “lámpara”.' },
          { id: 'c', text: 'Describe el objeto', icon: 'Palette', feedback: 'El adjetivo que describe la lámpara es “eficiente”.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'conocer', title: 'Tres clases de palabras',
          prompt: 'Para reconocer cada clase, usa su **prueba**. Toca cada tarjeta.' },
        { icon: 'Blocks', body: 'Fíjate en el **oficio** de la palabra en la oración: ¿nombra, describe o dice la acción?', reveal: [
          { icon: 'Tag', front: 'Sustantivo', back: '**Nombra** personas, animales, lugares, cosas o ideas: abuela, perro, Cobán, mesa, alegría. **Prueba:** puedes decir "el, la, un, una" delante: la mesa, un perro.' },
          { icon: 'Palette', front: 'Adjetivo', back: '**Dice cómo es** el sustantivo: alto, amable, colorido, dulce. **Prueba:** responde "¿cómo es?". ¿Cómo es el güipil? Colorido.' },
          { icon: 'Zap', front: 'Verbo', back: '**Dice la acción** o el estado: corre, teje, duerme, está. **Prueba:** cambia con el tiempo (tejo, tejí, tejeré) y puedes decir "yo" o "ella" delante.' },
          { icon: 'Languages', front: 'Comparación responsable', back: 'Los idiomas mayas tienen estructuras propias que deben revisarse con materiales validados y hablantes competentes. Esta actividad trabaja únicamente el corpus suministrado en español.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo Lucía analiza una oración aplicando las pruebas.' },
        { icon: 'Search', problem: 'Oración: _"El volcán alto humea en la mañana."_ ¿Cuáles son los sustantivos, el adjetivo y el verbo?',
          steps: [
            { text: '**volcán**: puedo decir "el volcán" y nombra un lugar → **sustantivo**.' },
            { text: '**alto**: ¿cómo es el volcán? Alto → **adjetivo**.', why: 'Acompaña al sustantivo "volcán" y dice cómo es.' },
            { text: '**humea**: puedo cambiarla de tiempo (humeó, humeará) → **verbo**.' },
            { text: '**mañana**: puedo decir "la mañana" → **sustantivo**.', why: '"El" y "la" (artículos) y "en" (preposición) son palabras de enlace: hoy no las clasificamos.' },
          ],
          answer: 'Sustantivos: **volcán, mañana**. Adjetivo: **alto**. Verbo: **humea**.',
          tip: 'Si dudas, prueba: ¿le puedo poner "el/la"? ¿responde "¿cómo es?"? ¿cambia con el tiempo?' },
      ),
      S.sort(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: clasifica cada palabra según su clase.',
          hint: 'Usa las pruebas: "el/la" delante → sustantivo; "¿cómo es?" → adjetivo; cambia con el tiempo → verbo.',
          explain: 'Sustantivos: mercado, tomate, amistad. Adjetivos: maduro, generoso. Verbos: vender, cocinamos.' },
        { buckets: [
          { id: 's', label: 'Sustantivo', icon: 'Tag', color: 'var(--area-l2)' },
          { id: 'a', label: 'Adjetivo', icon: 'Palette', color: 'var(--c-ok)' },
          { id: 'v', label: 'Verbo', icon: 'Zap', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'w1', text: 'mercado', bucket: 's' },
          { id: 'w2', text: 'maduro', bucket: 'a' },
          { id: 'w3', text: 'vender', bucket: 'v' },
          { id: 'w4', text: 'tomate', bucket: 's' },
          { id: 'w5', text: 'generoso', bucket: 'a' },
          { id: 'w6', text: 'cocinamos', bucket: 'v' },
          { id: 'w7', text: 'amistad', bucket: 's', feedback: 'No se toca, pero puedes decir "la amistad": nombra una idea. Es sustantivo.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'conocer', title: 'Dos secretos de las clases de palabras',
          prompt: 'Estas dos ideas te ayudarán a hablar y escribir mejor el español. Toca cada tarjeta.' },
        { icon: 'Key', body: 'El adjetivo es como la sombra del sustantivo: lo sigue en **género** y **número**.', reveal: [
          { icon: 'Link', front: 'Concordancia', back: 'El adjetivo cambia para ir con su sustantivo: **niño alto**, **niña alta**, **niños altos**, **niñas altas**. Error frecuente: "las casas bonito" → lo correcto es **"las casas bonitas"**.' },
          { icon: 'RefreshCw', front: 'La misma palabra, otro oficio', back: '"El **canto** del pájaro" → sustantivo (lleva "el"). "Yo **canto** en el coro" → verbo (dice la acción). Mira siempre el oficio en la oración.' },
        ] },
      ),
      S.highlight(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'hacer',
          prompt: 'Toca todos los **verbos** de este texto.',
          hint: 'Busca las palabras que dicen qué hace alguien. Son 5. Prueba cambiarlas de tiempo.',
          explain: 'Llega, lleva, vende, compran y regresa dicen acciones. Si cambias el tiempo: llegó, llevó, vendió, compraron, regresó.' },
        { target: 'verbos', text: 'El equipo {observa} el medidor del caso, {registra} la unidad, {compara} dos lecturas, {escribe} la fuente y {recomienda} apagar una lámpara innecesaria.' },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'hacer',
          prompt: 'Completa observaciones del panel con el **adjetivo** que concuerda.',
          explain: 'Lámparas (femenino plural) → eficientes; medidor (masculino singular) → visible; lecturas (femenino plural) → comparables.' },
        { text: 'Las lámparas [[eficientes]] iluminan. El medidor [[visible]] registra datos. Las lecturas [[comparables]] usan la misma unidad.', distractors: ['eficiente', 'visibles', 'comparable'] },
      ),
      S.highlight(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'hacer',
          prompt: 'Toca todos los **adjetivos** de esta observación del panel de energía.',
          explain: 'Encendida, vacío, exacta y visible describen lámpara, salón, lectura y fuente.' },
        { target: 'adjetivos', text: 'Una lámpara {encendida} quedó en el salón {vacío}. La lectura {exacta} aparece junto a una fuente {visible}.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'hacer',
          prompt: 'Compara en el panel: _"El **registro** tiene fuente"_ y _"Yo **registro** la medición"_. ¿Qué clase de palabra es cada una?',
          explain: '"El registro" lleva artículo y nombra: sustantivo. "Registro la medición" expresa una acción: verbo.' },
        { options: [
          { id: 'a', text: 'El primer “registro” es sustantivo y el segundo es verbo' },
          { id: 'b', text: 'Las dos son verbos', feedback: 'Mira la palabra que va antes del primer “registro”: “el”. Eso indica sustantivo.' },
          { id: 'c', text: 'El primero es adjetivo y el segundo es sustantivo', feedback: 'El primer “registro” nombra y el segundo expresa la acción de registrar.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'hacer',
          prompt: 'Escribe dos observaciones para un panel de energía. Usa al menos **dos adjetivos** y **dos verbos**; clasifícalos al final.' },
        { minWords: 20, placeholder: 'La lámpara eficiente... Adjetivos: ... Verbos: ...',
          model: 'La lámpara eficiente ilumina el salón. El medidor visible registra una lectura exacta. Adjetivos: eficiente, visible, exacta. Verbos: ilumina, registra.',
          rubric: ['Escribí observaciones del panel de energía', 'Usé dos adjetivos concordantes', 'Usé dos verbos', 'Clasifiqué las palabras correctamente'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.1'], prompt: 'En la observación del panel _"La lectura exacta muestra el consumo"_, ¿cuál es el **adjetivo**?' },
        { options: [
          { id: 'a', text: 'lectura' },
          { id: 'b', text: 'exacta' },
          { id: 'c', text: 'muestra' },
          { id: 'd', text: 'consumo' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.1'], prompt: 'Clasifica palabras de nuevas observaciones del panel de energía: ¿verdadero o falso?' },
        { statements: [
          { text: 'En “las lámparas eficientes”, lámparas es sustantivo y eficientes es adjetivo.', answer: true },
          { text: 'En “el equipo compara lecturas”, compara es un adjetivo.', answer: false, why: '“Compara” expresa la acción: es verbo.' },
          { text: 'En “fuentes visibles”, el adjetivo concuerda en plural con el sustantivo.', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's08-l2-2',
    title: 'Familias de sustantivos',
    icon: 'Tag',
    minutes: 15,
    gancho: '"Pedro", "niño", "grupo" y "amistad" son sustantivos. Pero ¿verdad que no se parecen mucho? Cada uno pertenece a una familia distinta.',
    objetivos: [
      'Clasificar sustantivos de fuentes, mediciones y recomendaciones en tres pares de familias',
    ],
    resumen: [
      'Común: nombra cualquier ser de su clase (río, niña). Propio: nombra a uno en particular y se escribe con mayúscula (Motagua, Rosa).',
      'Individual: nombra a uno solo (oveja). Colectivo: en singular nombra a un grupo (rebaño).',
      'Concreto: se percibe con los sentidos (tortilla, lluvia). Abstracto: nombra ideas o sentimientos que no se tocan (paz, alegría).',
      'Un mismo sustantivo pertenece a varias familias a la vez: "rebaño" es común, colectivo y concreto.',
    ],
    media: {
      id: 's08-l2-2-familias', kind: 'diagram', title: 'Tres parejas de familias', aspect: '16:9',
      alt: 'Tres columnas: común y propio (río / Motagua), individual y colectivo (oveja / rebaño), concreto y abstracto (tortilla / alegría), cada una con un dibujo.',
      brief: 'Infografía horizontal en tres columnas de colores suaves. Columna 1 "¿A cualquiera o a uno en particular?": dibujo de un río genérico con la palabra "río" (común) y el mismo río con un cartel "Motagua" en mayúscula destacada (propio). Columna 2 "¿Uno o un grupo?": una oveja sola "oveja" (individual) y un grupo de ovejas con un pastor "rebaño" (colectivo). Columna 3 "¿Se percibe con los sentidos?": una tortilla humeante con íconos de ojo, mano y nariz "tortilla" (concreto) y dos niños abrazándose con un corazón "alegría" (abstracto). Letras grandes y legibles, fondo claro. Target: public/media/s08-l2-2-familias.svg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'conocer', title: 'Familias de sustantivos del informe', prompt: 'Lee cómo clasificar los sustantivos del corpus energético.' },
        { icon: 'Tags', body: 'Los sustantivos de fuentes, mediciones y recomendaciones pueden ser común o propio, individual o colectivo, concreto o abstracto.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'conocer',
          prompt: 'Tu amigo escribió: _"ayer visité el lago de atitlán con mi prima rosa."_ ¿Qué palabras deberían llevar **mayúscula**?',
          explain: '"Atitlán" y "Rosa" nombran a un lago y a una persona **en particular**: son sustantivos **propios** y se escriben con mayúscula. "Ayer" también, por ir al inicio de la oración. Hoy conocerás las familias de los sustantivos.' },
        { options: [
          { id: 'a', text: 'Ayer, Atitlán y Rosa', icon: 'CaseSensitive' },
          { id: 'b', text: 'Lago y prima', icon: 'Type', feedback: '"Lago" y "prima" pueden nombrar a cualquier lago o prima: no llevan mayúscula.' },
          { id: 'c', text: 'Ninguna', icon: 'X', feedback: 'Los nombres de personas y lugares en particular siempre llevan mayúscula.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'conocer', title: 'Las familias de los sustantivos',
          prompt: 'Los sustantivos se agrupan en **parejas de familias**. Mira el diagrama de la lección y toca cada tarjeta.' },
        { icon: 'Tag', body: 'Para cada pareja hay una pregunta que te ayuda a decidir.', reveal: [
          { icon: 'Users', front: 'Común o propio', back: '**¿Nombra a cualquiera o a uno en particular?** Común: río, ciudad, niña. Propio (con **mayúscula**): Motagua, Antigua Guatemala, Rosa.' },
          { icon: 'Layers', front: 'Individual o colectivo', back: '**¿Nombra a uno o a un grupo?** Individual: oveja, abeja, árbol. Colectivo (grupo, aunque esté en singular): **rebaño**, **enjambre**, **bosque**.' },
          { icon: 'Hand', front: 'Concreto o abstracto', back: '**¿Lo puedo ver, tocar, oír, oler o saborear?** Concreto: tortilla, lluvia, marimba. Abstracto (ideas y sentimientos): **paz, alegría, amistad, honestidad**.' },
          { icon: 'Languages', front: 'Corpus validado', back: 'Para comparar posesión en un idioma maya se necesita una fuente lingüística validada. Aquí no se piden traducciones familiares ni se inventan equivalencias.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo Andrés clasifica un sustantivo en sus tres parejas.' },
        { icon: 'ListChecks', problem: 'Clasifica el sustantivo **enjambre** en las tres parejas de familias.',
          steps: [
            { text: '¿Cualquiera o uno en particular? Puede ser cualquier enjambre y va con minúscula → **común**.' },
            { text: '¿Uno o un grupo? En singular nombra a **muchas abejas** juntas → **colectivo**.', why: 'Su individual es "abeja".' },
            { text: '¿Se percibe con los sentidos? Sí: se ve y se oye su zumbido → **concreto**.' },
          ],
          answer: '**Enjambre** es un sustantivo común, colectivo y concreto.',
          tip: 'Hazte las tres preguntas en orden: particular, grupo, sentidos.' },
      ),
      S.match(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'hacer',
          prompt: 'Con ayuda, une cada sustantivo individual con su colectivo léxico.',
          hint: 'El colectivo es una palabra singular que nombra un grupo.',
          explain: 'Árbol–bosque, abeja–enjambre y oveja–rebaño son pares individual–colectivo.' },
        { leftTitle: 'Individual', rightTitle: 'Colectivo', pairs: [
          { id: 'c1', left: 'árbol', right: 'bosque' },
          { id: 'c2', left: 'abeja', right: 'enjambre' },
          { id: 'c3', left: 'oveja', right: 'rebaño' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'hacer',
          prompt: '¿**Concreto** o **abstracto**? Clasifica sustantivos de fuentes, mediciones y recomendaciones.',
          hint: 'Pregúntate: ¿lo puedo ver, tocar, oír, oler o saborear?',
          explain: 'Medidor, lámpara y ficha se perciben; ahorro, confianza y recomendación nombran ideas.' },
        { buckets: [
          { id: 'c', label: 'Concreto', icon: 'Hand', color: 'var(--area-l2)' },
          { id: 'a', label: 'Abstracto', icon: 'Brain', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'medidor', bucket: 'c' },
          { id: 'x2', text: 'ahorro', bucket: 'a' },
          { id: 'x3', text: 'lámpara', bucket: 'c' },
          { id: 'x4', text: 'confianza', bucket: 'a' },
          { id: 'x5', text: 'ficha', bucket: 'c' },
          { id: 'x6', text: 'recomendación', bucket: 'a' },
        ] },
      ),
      S.highlight(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'hacer',
          prompt: 'En esta nota del panel, toca los sustantivos **propios** que identifican escenario y fuente.',
          explain: 'Escuela Luz y Ficha B identifican un caso y una fuente particulares; lámpara, medición y recomendación son comunes.' },
        { target: 'sustantivos propios', text: 'En el caso simulado {Escuela Luz}, la {Ficha B} informa una medición de lámpara y una recomendación.' },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'hacer',
          prompt: 'Clasifica sustantivos de una fuente, una medición y una recomendación según el tipo que mejor los distingue.',
          explain: 'Ficha A es propio; equipo es colectivo; ahorro es abstracto; medidor es concreto.' },
        { leftTitle: 'Sustantivo', rightTitle: 'Tipo', pairs: [
          { id: 's1', left: 'Ficha A', leftIcon: 'FileText', right: 'Propio' },
          { id: 's2', left: 'equipo', leftIcon: 'Users', right: 'Colectivo' },
          { id: 's3', left: 'ahorro', leftIcon: 'Heart', right: 'Abstracto' },
          { id: 's4', left: 'medidor', leftIcon: 'Gauge', right: 'Concreto' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'hacer', title: 'Corpus del panel de energía',
          prompt: 'Lee la fuente suministrada y clasifica sus sustantivos.' },
        { genre: 'Ficha informativa simulada', heading: 'Fuente, medición y recomendación', passage:
          'Caso escolar simulado; no describe tu escuela. La Ficha C registra una medición de 18 lámparas. El equipo observa el alumbrado y propone una recomendación: apagar lámparas innecesarias. La confianza depende de mostrar la fuente y la unidad.',
          questions: [
            { q: '¿Qué sustantivo **colectivo** nombra al grupo que observa?', options: [
              { id: 'a', text: 'equipo' }, { id: 'b', text: 'fuente' }, { id: 'c', text: 'lámpara' },
            ], correct: 'a', why: 'Equipo, en singular, nombra a varias personas.' },
            { q: '¿Qué sustantivo de la ficha es **abstracto**?', options: [
              { id: 'a', text: 'confianza' }, { id: 'b', text: 'lámparas' }, { id: 'c', text: 'Ficha C' },
            ], correct: 'a', why: 'La confianza es un sentimiento: no se puede ver ni tocar.' },
            { q: '¿Cuál es el sustantivo propio que identifica la fuente?', options: [
              { id: 'a', text: 'Ficha C' }, { id: 'b', text: 'medición' }, { id: 'c', text: 'recomendación' },
            ], correct: 'a', why: 'Ficha C nombra una fuente particular.' },
          ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'hacer',
          prompt: 'Completa las oraciones del panel con el sustantivo correcto para la fuente, la medición y la recomendación.',
          explain: 'La ficha identifica la fuente, el conjunto reúne datos y el ahorro nombra la idea buscada por la recomendación.' },
        { text: 'La [[ficha]] identifica la fuente. El [[conjunto]] reúne mediciones. El [[ahorro]] orienta la recomendación.', distractors: ['lámpara', 'dato', 'medidor'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.2'], prompt: 'En una nueva recomendación del panel, ¿qué sustantivo es **abstracto**?' },
        { options: [
          { id: 'a', text: 'lámpara' },
          { id: 'b', text: 'eficiencia' },
          { id: 'c', text: 'Ficha D' },
          { id: 'd', text: 'medidor' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.2'], prompt: 'Clasifica fuentes, mediciones y recomendaciones de otro panel: ¿verdadero o falso?' },
        { statements: [
          { text: '“Ficha D” es propio porque identifica una fuente particular.', answer: true },
          { text: '“Bosque” es colectivo porque en singular nombra un grupo de árboles.', answer: true },
          { text: '“Recomendación” es concreto porque se puede tocar.', answer: false, why: 'Recomendación nombra una idea; es un sustantivo abstracto.' },
        ] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l2'], cnb: [], ambito: 'ser', prompt: 'Terminamos la unidad. ¿Cómo te fue?' },
        { statements: ['Distingo sustantivos, adjetivos y verbos', 'Hago que el adjetivo concuerde con el sustantivo', 'Reconozco sustantivos comunes, propios, colectivos y abstractos', 'Uso en mi español lo que aprendí en la unidad: escuchar, respetar, leer señales, recitar y hablar con claridad'],
          commitments: ['Revisaré las mayúsculas de los nombres propios cuando escriba', 'Buscaré sustantivos colectivos en lo que leo', 'Le enseñaré a alguien de mi familia las tres pruebas de las clases de palabras'] },
      ),
    ],
  }),
];
