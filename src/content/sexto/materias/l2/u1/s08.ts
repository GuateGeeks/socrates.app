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
      S.choice(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'conocer',
          prompt: 'Lee: _"La niña alegre **corre** en el parque."_ ¿Qué trabajo hace la palabra **corre**?',
          explain: '"Corre" dice **qué hace** la niña: es la acción. Las palabras tienen distintos oficios en la oración, y hoy aprenderás a reconocer tres muy importantes.' },
        { options: [
          { id: 'a', text: 'Dice qué hace alguien (una acción)', icon: 'Footprints' },
          { id: 'b', text: 'Nombra a una persona', icon: 'User', feedback: 'La persona es "niña". "Corre" dice lo que ella hace.' },
          { id: 'c', text: 'Dice cómo es algo', icon: 'Palette', feedback: 'La palabra que dice cómo es la niña es "alegre".' },
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
          prompt: 'Completa con el **adjetivo** que concuerda con cada sustantivo.',
          explain: 'Flores (femenino, plural) → rojas. Volcán (masculino, singular) → dormido. Tortillas (femenino, plural) → calientes (sirve igual para masculino y femenino).' },
        { text: 'En el jardín crecen flores [[rojas]]. Desde la escuela se ve un volcán [[dormido]]. Mi mamá sirve tortillas [[calientes]].', distractors: ['rojo', 'dormidos', 'caliente'] },
      ),
      S.highlight(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'hacer',
          prompt: 'Toca todos los **adjetivos** de esta descripción.',
          explain: 'Pequeño, azul, altos, verdes y frescas dicen cómo son el pueblo, el lago, los cerros y las mañanas.' },
        { target: 'adjetivos', text: 'Mi pueblo es {pequeño}. Queda junto a un lago {azul}, entre cerros {altos} y {verdes}. Las mañanas son {frescas} y huele a leña.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'hacer',
          prompt: 'Compara: _"El **baile** de la fiesta fue largo"_ y _"Yo **bailo** en la fiesta."_ ¿Qué clase de palabra es cada una?',
          explain: '"El baile" lleva "el" y nombra algo: sustantivo. "Bailo" dice la acción y cambia con el tiempo (bailé, bailaré): verbo.' },
        { options: [
          { id: 'a', text: '"baile" es sustantivo y "bailo" es verbo' },
          { id: 'b', text: 'Las dos son verbos', feedback: 'Mira la palabra que va antes de "baile": "el". Eso indica sustantivo.' },
          { id: 'c', text: '"baile" es adjetivo y "bailo" es sustantivo', feedback: '"Baile" no dice cómo es algo, y "bailo" es una acción.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.1'], ambito: 'hacer',
          prompt: 'Describe en dos o tres oraciones un lugar que te guste. Usa al menos **dos adjetivos** y **dos verbos**. Al final, escribe cuáles son.' },
        { minWords: 20, placeholder: 'La lámpara eficiente... Adjetivos: ... Verbos: ...',
          model: 'Mi lugar favorito es la cancha de mi aldea. Es grande y polvorienta. Allí juego fútbol y platico con mis amigos. Adjetivos: grande, polvorienta. Verbos: es, juego, platico.',
          rubric: ['Describí un lugar en 2 o 3 oraciones', 'Usé al menos dos adjetivos que concuerdan con su sustantivo', 'Usé al menos dos verbos', 'Identifiqué correctamente mis adjetivos y verbos'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.1'], prompt: 'Boleto de salida: en _"El perro travieso escondió mi zapato"_, ¿cuál es el **adjetivo**?' },
        { options: [
          { id: 'a', text: 'perro' },
          { id: 'b', text: 'travieso' },
          { id: 'c', text: 'escondió' },
          { id: 'd', text: 'zapato' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: '"Alegría" es un sustantivo, porque podemos decir "la alegría".', answer: true },
          { text: '"Las mangos maduras" está bien escrito.', answer: false, why: '"Mango" es masculino: lo correcto es "los mangos maduros".' },
          { text: 'Los verbos cambian según el tiempo: como, comí, comeré.', answer: true },
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
      S.choice(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'conocer',
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
          prompt: 'Ahora tú, con ayuda: une cada sustantivo **individual** con su **colectivo**.',
          hint: 'Piensa: ¿cómo se llama un grupo de muchas ovejas? ¿Y de muchos peces?',
          explain: 'Rebaño (ovejas), enjambre (abejas), cardumen (peces), bosque (árboles), orquesta (músicos).' },
        { leftTitle: 'Individual', rightTitle: 'Colectivo', pairs: [
          { id: 'c1', left: 'oveja', right: 'rebaño' },
          { id: 'c2', left: 'abeja', right: 'enjambre' },
          { id: 'c3', left: 'pez', leftIcon: 'Fish', right: 'cardumen' },
          { id: 'c4', left: 'árbol', leftIcon: 'TreePine', right: 'bosque' },
          { id: 'c5', left: 'músico', leftIcon: 'Music', right: 'orquesta' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'hacer',
          prompt: '¿**Concreto** o **abstracto**? Clasifica cada sustantivo.',
          hint: 'Pregúntate: ¿lo puedo ver, tocar, oír, oler o saborear?',
          explain: 'Concretos: marimba, lluvia, atol, viento. Abstractos: paz, miedo, amistad.' },
        { buckets: [
          { id: 'c', label: 'Concreto', icon: 'Hand', color: 'var(--area-l2)' },
          { id: 'a', label: 'Abstracto', icon: 'Brain', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'marimba', bucket: 'c' },
          { id: 'x2', text: 'paz', bucket: 'a' },
          { id: 'x3', text: 'lluvia', bucket: 'c' },
          { id: 'x4', text: 'miedo', bucket: 'a' },
          { id: 'x5', text: 'atol', bucket: 'c' },
          { id: 'x6', text: 'amistad', bucket: 'a' },
          { id: 'x7', text: 'viento', bucket: 'c', feedback: 'No se ve, pero se siente en la piel y se oye: se percibe con los sentidos. Es concreto.' },
        ] },
      ),
      S.highlight(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'hacer',
          prompt: 'Toca todos los sustantivos **propios** de esta noticia escolar.',
          explain: 'Quiché, Sofía, Tomás, Chichicastenango y Guatemala nombran personas y lugares en particular. "Grado", "escuela", "mercado", "vendedora" y "maestra" son comunes.' },
        { target: 'sustantivos propios', text: 'El sexto grado de una escuela de {Quiché} visitó el mercado de {Chichicastenango}. {Sofía} y {Tomás} entrevistaron a una vendedora de tejidos. La maestra dijo que es uno de los mercados más conocidos de {Guatemala}.' },
      ),
      S.match(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'hacer',
          prompt: 'Un sustantivo puede ser de varias familias a la vez. Une cada uno con el tipo que **mejor lo distingue**.',
          explain: '"Tajumulco" es propio (un volcán en particular). "Enjambre" es colectivo (muchas abejas). "Honestidad" es abstracto (una cualidad). "Termómetro" es concreto (se ve y se toca).' },
        { leftTitle: 'Sustantivo', rightTitle: 'Tipo', pairs: [
          { id: 's1', left: 'Tajumulco', leftIcon: 'MountainSnow', right: 'Propio' },
          { id: 's2', left: 'enjambre', leftIcon: 'Bug', right: 'Colectivo' },
          { id: 's3', left: 'honestidad', leftIcon: 'Heart', right: 'Abstracto' },
          { id: 's4', left: 'termómetro', leftIcon: 'Thermometer', right: 'Concreto' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.2', 'l2:5.1.1', 'l2:5.1.2'], ambito: 'hacer', title: 'Lectura de repaso',
          prompt: 'Lee este texto y responde. Algunas preguntas repasan lo que aprendiste en semanas anteriores.' },
        { genre: 'Texto informativo', heading: 'La cooperativa de Santa Elena', passage:
          'En la aldea Santa Elena, un grupo de familias formó una cooperativa de café. Cada socio cuida su parcela, pero venden la cosecha juntos.\n\nEn diciembre, la cuadrilla de cortadores sube al cerro muy temprano. Llevan canastos y cortan solo los granos rojos y maduros.\n\nDoña Irma, la presidenta, dice: "La confianza entre vecinos es nuestra mayor riqueza". Creo que tiene razón: trabajar unidos da mejores resultados.',
          questions: [
            { q: '¿Qué sustantivo **colectivo** nombra al grupo de personas que corta café?', options: [
              { id: 'a', text: 'cuadrilla' },
              { id: 'b', text: 'canastos' },
              { id: 'c', text: 'cerro' },
            ], correct: 'a', why: 'En singular, "cuadrilla" nombra a un grupo de trabajadores.' },
            { q: '¿Qué sustantivo del último párrafo es **abstracto**?', options: [
              { id: 'a', text: 'confianza' },
              { id: 'b', text: 'vecinos' },
              { id: 'c', text: 'Irma' },
            ], correct: 'a', why: 'La confianza es un sentimiento: no se puede ver ni tocar.' },
            { q: 'En "cortan solo los granos **rojos** y **maduros**", ¿qué clase de palabras son "rojos" y "maduros"?', options: [
              { id: 'a', text: 'Adjetivos: dicen cómo son los granos' },
              { id: 'b', text: 'Verbos: dicen una acción' },
              { id: 'c', text: 'Sustantivos propios' },
            ], correct: 'a', why: 'Responden a "¿cómo son los granos?" y concuerdan con "granos" (masculino, plural).' },
            { q: 'Repaso de la semana 1: "Creo que tiene razón: trabajar unidos da mejores resultados." ¿Es un hecho o una opinión?', options: [
              { id: 'a', text: 'Una opinión: empieza con "Creo que"' },
              { id: 'b', text: 'Un hecho que se puede medir' },
            ], correct: 'a', why: '"Creo que" es una palabra pista de opinión.' },
          ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:5.1.2'], ambito: 'hacer',
          prompt: 'Completa cada oración con el sustantivo **colectivo** correcto.',
          explain: 'Un grupo de ovejas es un rebaño; de peces, un cardumen; de músicos, una orquesta.' },
        { text: 'El pastor lleva su [[rebaño]] al cerro. En el lago nadaba un [[cardumen]] de peces plateados. En el acto cívico tocó la [[orquesta]] de la escuela.', distractors: ['oveja', 'pez', 'músico'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.2'], prompt: 'Boleto de salida: ¿cuál de estos sustantivos es **abstracto**?' },
        { options: [
          { id: 'a', text: 'mesa' },
          { id: 'b', text: 'justicia' },
          { id: 'c', text: 'Petén' },
          { id: 'd', text: 'bosque' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:5.1.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: '"Motagua" es un sustantivo propio y se escribe con mayúscula.', answer: true },
          { text: '"Abeja" es un sustantivo colectivo.', answer: false, why: '"Abeja" nombra a una sola: es individual. El colectivo es "enjambre".' },
          { text: '"Rebaño" es a la vez común, colectivo y concreto.', answer: true },
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
