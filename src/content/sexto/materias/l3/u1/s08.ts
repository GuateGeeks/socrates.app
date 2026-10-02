/**
 * L3 (inglés) · Unidad 1 · Semana 8
 * Leer biografías de personas famosas de países donde se habla inglés: Neil Armstrong y
 * Helen Keller. Partes de una biografía, fechas en inglés y una mini-biografía propia.
 */
import { lesson, S } from '../../../../dsl';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's08-l3-1',
    title: 'Reading a biography: Neil Armstrong',
    icon: 'Rocket',
    minutes: 14,
    gancho: 'El 20 de julio de 1969, millones de personas vieron por televisión a un hombre caminar sobre la Luna. ¿Quién era y cómo llegó hasta allí?',
    objetivos: [
      'Reconocer las partes y frases típicas de una biografía en inglés',
    ],
    resumen: [
      'Una biografía cuenta en orden la vida de una persona real: nacimiento, infancia, estudios, logros y, si ya murió, su muerte.',
      'Frases clave: was born in (nació en), grew up (creció), studied (estudió), became (se convirtió en), is famous for (es famoso por), died in (murió en).',
      'Los años se leen en dos partes: 1930 = nineteen thirty, 1969 = nineteen sixty-nine. Del 2000 en adelante: 2012 = twenty twelve.',
      'Neil Armstrong nació en Ohio, Estados Unidos, en 1930, y en 1969 fue la primera persona en caminar sobre la Luna, en la misión Apolo 11.',
    ],
    media: {
      id: 's08-l3-1-moon', kind: 'image', title: 'First steps on the Moon', aspect: '16:9',
      alt: 'Ilustración de un astronauta con traje blanco dejando una huella en el suelo gris de la Luna; al fondo, la Tierra azul en el cielo negro.',
      brief: 'Ilustración (no fotografía, sin rostro visible: el visor del casco es dorado y refleja el paisaje) de un astronauta con traje espacial blanco de la época de 1969 dando un paso sobre el polvo gris de la Luna. En primer plano, una huella de bota muy marcada. Al fondo, el módulo lunar y la Tierra azul y blanca sobre un cielo negro. Una línea de tiempo pequeña en la parte inferior con tres puntos: "1930 – born", "1969 – Moon", "2012 – died". Sin banderas ni logotipos. Target: public/media/s08-l3-1-moon.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'conocer', title: 'Biography fact cards', prompt: 'Read how supplied facts form a biography.' },
        { icon: 'BookOpen', body: 'A biography orders supplied facts with phrases such as **was born**, **studied**, **became** and **died**.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'conocer',
          prompt: 'Un texto empieza así: _"Neil Armstrong **was born** in 1930 in Ohio…"_ ¿Qué tipo de texto crees que es?',
          explain: 'Es una **biografía**: cuenta la vida de una persona real, en orden, desde que nació. "Was born" significa "nació". Hoy leerás una en inglés.' },
        { options: [
          { id: 'a', text: 'Una biografía: la historia de la vida de una persona real', icon: 'User' },
          { id: 'b', text: 'Un cuento de hadas', icon: 'Sparkles', feedback: 'Los cuentos empiezan con "Once upon a time…". Aquí hay un año y un lugar real.' },
          { id: 'c', text: 'Una receta', icon: 'Utensils', feedback: 'Una receta empezaría con ingredientes. Aquí se habla de una persona.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'conocer', title: 'Biography words',
          prompt: 'Las biografías en inglés usan casi siempre las mismas frases, en **pasado**. Toca cada tarjeta.' },
        { icon: 'BookOpen', body: 'Una biografía sigue una **línea de tiempo**: del nacimiento a los logros más importantes.', reveal: [
          { icon: 'Baby', front: 'was born in', back: '**nació en** · _He was born in 1930. She was born in Alabama._' },
          { icon: 'Sprout', front: 'grew up', back: '**creció** (pasado de grow up) · _He grew up in a small town._' },
          { icon: 'GraduationCap', front: 'studied', back: '**estudió** · _He studied engineering._ (ingeniería)' },
          { icon: 'Star', front: 'became', back: '**se convirtió en** (pasado de become) · _He became an astronaut._' },
          { icon: 'Award', front: 'is famous for', back: '**es famoso/a por** · _He is famous for walking on the Moon._' },
          { icon: 'Flower', front: 'died in', back: '**murió en** · _He died in 2012._' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'hacer', title: 'Worked example: reading years',
          prompt: 'En inglés, los años se leen de una forma especial. Mira cómo se hace.' },
        { icon: 'Calendar', problem: '¿Cómo se leen **1930**, **1969** y **2012**?',
          steps: [
            { text: 'Parte el año en dos: 19 | 30. Lee cada parte como número: **nineteen thirty**.', why: 'Es más corto que decir "one thousand nine hundred thirty".' },
            { text: '1969 → 19 | 69 → **nineteen sixty-nine**.' },
            { text: 'Del año 2000 en adelante se usa **twenty** + el resto: 2012 → **twenty twelve** (también se oye "two thousand twelve").' },
          ],
          answer: '1930 = **nineteen thirty** · 1969 = **nineteen sixty-nine** · 2012 = **twenty twelve**',
          tip: 'Parte el año en dos números de dos cifras.' },
      ),
      S.match(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: une cada año escrito con su lectura en inglés.',
          hint: 'Parte cada año en dos: 18 | 80 = eighteen eighty.',
          explain: '1880 = eighteen eighty, 1904 = nineteen oh-four (el 0 se lee "oh"), 1968 = nineteen sixty-eight, 2020 = twenty twenty.' },
        { leftTitle: 'Year', rightTitle: 'We say', pairs: [
          { id: 'y1', left: '1880', right: 'eighteen eighty' },
          { id: 'y2', left: '1904', right: 'nineteen oh-four' },
          { id: 'y3', left: '1968', right: 'nineteen sixty-eight' },
          { id: 'y4', left: '2020', right: 'twenty twenty' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'hacer', title: 'Biography',
          prompt: 'Escucha y lee la biografía de un astronauta famoso de los **Estados Unidos**, un país donde se habla inglés. Pistas: _pilot_ = piloto, _engineer_ = ingeniero, _mission_ = misión, _step_ = paso, _dream_ = soñar.',
          media: { id: 's08-l3-1-armstrong', kind: 'audio', title: 'Neil Armstrong (biography)', duration: 45,
            alt: 'Una voz en inglés lee la biografía de Neil Armstrong.',
            brief: 'Audio de 45 s. Voz adulta, inglés claro y lento, sin música. Leer los años como se escriben en el texto (nineteen thirty, nineteen sixty-nine, twenty twelve). Texto exacto: "Neil Armstrong was an American astronaut. He was born in Ohio, in the United States, in 1930. As a boy, he loved airplanes. He grew up and became a pilot and an engineer. In 1969, he traveled to the Moon on the Apollo 11 mission. On July 20, he became the first person to walk on the Moon. He died in 2012. Today, many children around the world dream of traveling to space, like him." Target: public/media/s08-l3-1-armstrong.mp3. Accesibilidad: transcripción completa disponible después de responder y control para repetir la pista.' } },
        { genre: 'Biography', heading: 'Neil Armstrong', passage:
          'Neil Armstrong was an American astronaut. He was born in Ohio, in the United States, in 1930.\n\nAs a boy, he loved airplanes. He grew up and became a pilot and an engineer.\n\nIn 1969, he traveled to the Moon on the Apollo 11 mission. On July 20, he became the first person to walk on the Moon.\n\nHe died in 2012. Today, many children around the world dream of traveling to space, like him.',
          questions: [
            { q: 'Where was Neil Armstrong born?', options: [
              { id: 'a', text: 'In Ohio, in the United States' },
              { id: 'b', text: 'On the Moon' },
              { id: 'c', text: 'In Guatemala' },
            ], correct: 'a' },
            { q: 'What did he love as a boy?', options: [
              { id: 'a', text: 'Airplanes' },
              { id: 'b', text: 'Football' },
              { id: 'c', text: 'Music' },
            ], correct: 'a' },
            { q: 'Why is he famous?', options: [
              { id: 'a', text: 'He was the first person to walk on the Moon.' },
              { id: 'b', text: 'He built the first airplane.' },
              { id: 'c', text: 'He was a famous singer.' },
            ], correct: 'a' },
            { q: '¿Qué quiere decir la última oración del texto?', options: [
              { id: 'a', text: 'Su logro sigue inspirando a niñas y niños a soñar con el espacio' },
              { id: 'b', text: 'Hoy muchos niños viven en la Luna' },
              { id: 'c', text: 'Nadie volvió a interesarse por el espacio' },
            ], correct: 'a', why: '"Dream of traveling to space, like him": sueñan con viajar al espacio como él. Es una idea que se deduce: su historia inspira.' },
          ] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'hacer',
          prompt: 'Ordena la **línea de tiempo** de la vida de Neil Armstrong.',
          explain: 'Nació (1930) → le encantaban los aviones → fue piloto e ingeniero → caminó en la Luna (1969) → murió (2012).' },
        { labels: { start: 'First', end: 'Last' }, items: [
          { id: 'o1', text: 'He was born in Ohio.', icon: 'Baby' },
          { id: 'o2', text: 'As a boy, he loved airplanes.', icon: 'Plane' },
          { id: 'o3', text: 'He became a pilot and an engineer.', icon: 'GraduationCap' },
          { id: 'o4', text: 'He walked on the Moon.', icon: 'Moon' },
          { id: 'o5', text: 'He died in 2012.', icon: 'Flower' },
        ] },
      ),
      S.number(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'hacer',
          prompt: 'Una maestra dice: _"Apollo 11 landed on the Moon in **nineteen sixty-nine**."_ Escribe el año en números.',
          explain: 'Nineteen (19) + sixty-nine (69) = **1969**.' },
        { answer: 1969, misconceptions: [
          { value: 1996, msg: 'Revisa el orden: primero nineteen (19) y después sixty-nine (69).' },
          { value: 1960, msg: 'Sixty-nine es 69, no 60.' },
        ] },
      ),
      S.fill(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'hacer',
          prompt: 'Completa el resumen de la biografía con las frases clave.',
          explain: 'Was born (nació), became (se convirtió en), is famous for (es famoso por), died (murió).' },
        { text: 'Neil Armstrong [[was born]] in 1930. He [[became]] an astronaut. He [[is famous for]] walking on the Moon. He [[died]] in 2012.', distractors: ['grew', 'studied'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:5.2.2'], prompt: 'Boleto de salida: ¿qué significa _"She **was born** in 1956"_?' },
        { options: [
          { id: 'a', text: 'Ella murió en 1956.' },
          { id: 'b', text: 'Ella nació en 1956.' },
          { id: 'c', text: 'Ella estudió en 1956.' },
        ], correct: ['b'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:5.2.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Una biografía cuenta la vida de una persona real.', answer: true },
          { text: '"Became" significa "nació".', answer: false, why: '"Became" significa "se convirtió en". "Nació" es "was born".' },
          { text: '1930 se lee "nineteen thirty".', answer: true },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's08-l3-2',
    title: 'Helen Keller: a life of courage',
    icon: 'HandHeart',
    minutes: 15,
    gancho: 'Imagina que no puedes ver ni oír. ¿Cómo aprenderías tu primera palabra? Una niña de Estados Unidos lo logró… con la mano.',
    objetivos: [
      'Leer y comprender la biografía de Helen Keller',
    ],
    resumen: [
      'Helen Keller nació en 1880 en Alabama, Estados Unidos. Cuando era bebé, una enfermedad la dejó sin poder ver ni oír.',
      'Su maestra, Anne Sullivan, le enseñó a comunicarse escribiendo letras en la palma de su mano. Su primera palabra fue "water".',
      'En 1904 se graduó de la universidad (Radcliffe College). Escribió libros y viajó por el mundo apoyando a personas con discapacidad. Murió en 1968.',
      'El inglés se habla en muchos países: Estados Unidos, Reino Unido, Canadá, Australia, Irlanda… y en Belice, nuestro vecino.',
    ],
    media: {
      id: 's08-l3-2-water', kind: 'image', title: 'Water!', aspect: '4:3',
      alt: 'Ilustración de una niña de unos 6 años con la mano bajo el chorro de una bomba de agua; su maestra le escribe letras en la otra mano.',
      brief: 'Ilustración cálida estilo libro infantil, época de 1880 (vestidos largos, jardín con una bomba de agua manual). Una niña de unos 6 años con los ojos cerrados y una expresión de descubrimiento pone una mano bajo el chorro de agua; una maestra joven, arrodillada a su lado, le forma letras con los dedos en la palma de la otra mano. Letras W-A-T-E-R flotando suavemente sobre la escena. Ilustración original, no basada en fotografías reales. Target: public/media/s08-l3-2-water.jpg. Accesibilidad: formato final 1600×900 px, contraste alto y descripción alternativa equivalente.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'conocer', title: 'A life in chronological order', prompt: 'Read the supplied chronology before answering.' },
        { icon: 'CalendarDays', body: 'Use the supplied fact card to locate birth, learning, achievements and death before answering about a biography.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'conocer',
          prompt: 'Mira la imagen de la lección. La maestra forma letras en la mano de la niña mientras el agua cae en su otra mano. ¿Qué crees que le está enseñando?',
          explain: 'Le enseña que las letras **W-A-T-E-R** forman el nombre de lo que siente en la mano: **water** (agua). Esa niña era Helen Keller, y hoy leerás su biografía.' },
        { options: [
          { id: 'a', text: 'Que las letras que siente forman la palabra "agua"', icon: 'Droplets' },
          { id: 'b', text: 'A lavarse las manos', icon: 'Hand', feedback: 'Es una buena idea, pero fíjate en las letras que forma la maestra en su mano.' },
          { id: 'c', text: 'A dibujar', icon: 'Pencil', feedback: 'No hay lápiz ni papel: la maestra usa la mano de la niña para formar letras.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'conocer', title: 'English around the world',
          prompt: 'Neil Armstrong y Helen Keller nacieron en los Estados Unidos. Pero el inglés se habla en muchos lugares. Toca cada tarjeta.' },
        { icon: 'Globe', body: 'Aprender inglés te permite leer las historias de personas de muchas culturas… ¡y contar las nuestras!', reveal: [
          { icon: 'Globe', front: 'Países donde es idioma principal', back: 'Estados Unidos, Reino Unido, Canadá (junto con el francés), Australia, Irlanda y Nueva Zelanda, entre otros.' },
          { icon: 'MapPin', front: 'Muy cerca de Guatemala', back: 'En **Belice**, nuestro país vecino, el idioma oficial es el **inglés**, y también se hablan español, kriol, garífuna y idiomas mayas.' },
          { icon: 'Users', front: 'Muchas culturas', back: 'Cada país tiene sus propios personajes famosos: científicos, escritoras, deportistas, artistas. Sus biografías cuentan cómo vivían y qué lograron.' },
        ] },
      ),
      S.cards(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'conocer', title: 'Key words',
          prompt: 'Estas palabras te ayudarán a leer la biografía. Léelas en voz alta y voltea cada tarjeta.' },
        { cards: [
          { icon: 'EyeOff', front: 'blind', back: 'ciega/o: que no puede ver' },
          { icon: 'VolumeX', front: 'deaf', back: 'sorda/o: que no puede oír' },
          { icon: 'Pill', front: 'illness', back: 'enfermedad' },
          { icon: 'Hand', front: 'palm', back: 'palma de la mano' },
          { icon: 'PenLine', front: 'to spell', back: 'deletrear, formar una palabra letra por letra' },
          { icon: 'GraduationCap', front: 'to graduate', back: 'graduarse' },
          { icon: 'HandHeart', front: 'disability', back: 'discapacidad' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'hacer', title: 'Biography',
          prompt: 'Escucha y lee la biografía. Usa las tarjetas si olvidas una palabra.',
          media: { id: 's08-l3-2-keller', kind: 'audio', title: 'Helen Keller (biography)', duration: 55,
            alt: 'Una voz en inglés lee la biografía de Helen Keller.',
            brief: 'Audio de 55 s. Voz adulta femenina, inglés claro y lento, tono cálido, sin música. Leer los años como en inglés (eighteen eighty, eighteen eighty-seven, nineteen oh-four, nineteen sixty-eight). Texto exacto: "Helen Keller was born in 1880 in Alabama, in the United States. When she was a baby, an illness left her blind and deaf. She could not see or hear. In 1887, a teacher named Anne Sullivan came to live with her family. Anne spelled words into Helen\'s palm. One day, Anne put Helen\'s hand under running water and spelled W-A-T-E-R. Helen understood: everything has a name! Helen studied very hard. In 1904, she graduated from college. She wrote books and traveled around the world to help people with disabilities. She died in 1968. Her life shows that courage and good teachers can change the world." Target: public/media/s08-l3-2-keller.mp3. Accesibilidad: transcripción completa disponible después de responder y control para repetir la pista.' } },
        { genre: 'Biography', heading: 'Helen Keller', passage:
          'Helen Keller was born in 1880 in Alabama, in the United States. When she was a baby, an illness left her blind and deaf. She could not see or hear.\n\nIn 1887, a teacher named Anne Sullivan came to live with her family. Anne spelled words into Helen\'s palm. One day, Anne put Helen\'s hand under running water and spelled W-A-T-E-R. Helen understood: everything has a name!\n\nHelen studied very hard. In 1904, she graduated from college. She wrote books and traveled around the world to help people with disabilities. She died in 1968.\n\nHer life shows that courage and good teachers can change the world.',
          questions: [
            { q: 'Where was Helen Keller born?', options: [
              { id: 'a', text: 'In Alabama, in the United States' },
              { id: 'b', text: 'In Ohio' },
              { id: 'c', text: 'In England' },
            ], correct: 'a' },
            { q: 'Who was Anne Sullivan?', options: [
              { id: 'a', text: 'Helen\'s teacher' },
              { id: 'b', text: 'Helen\'s sister' },
              { id: 'c', text: 'A doctor' },
            ], correct: 'a' },
            { q: '¿Qué descubrió Helen el día del agua?', options: [
              { id: 'a', text: 'Que cada cosa tiene un nombre, y que las letras en su mano lo formaban' },
              { id: 'b', text: 'Que ya podía ver' },
              { id: 'c', text: 'Que no le gustaba el agua' },
            ], correct: 'a', why: '"Helen understood: everything has a name!" Descubrió que las palabras nombran las cosas.' },
            { q: '¿Qué enseñanza deja su vida, según el texto?', options: [
              { id: 'a', text: 'Con valentía y buenos maestros se pueden lograr grandes cosas' },
              { id: 'b', text: 'Las personas con discapacidad no pueden estudiar' },
              { id: 'c', text: 'Es mejor no ir a la universidad' },
            ], correct: 'a', why: 'La última oración lo dice: "courage and good teachers can change the world". Helen estudió, se graduó y ayudó a otros.' },
          ] },
      ),
      S.order(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: ordena la línea de tiempo de Helen Keller.',
          hint: 'Mira los años del texto: 1880, 1887, 1904, 1968. El día del agua pasó después de que llegó Anne.',
          explain: 'Nació (1880) → enfermedad cuando era bebé → llegó Anne Sullivan (1887) → aprendió "water" → se graduó (1904) → murió (1968).' },
        { labels: { start: 'First', end: 'Last' }, items: [
          { id: 'o1', text: 'Helen was born in Alabama.', icon: 'Baby' },
          { id: 'o2', text: 'An illness left her blind and deaf.', icon: 'EyeOff' },
          { id: 'o3', text: 'Anne Sullivan came to live with her family.', icon: 'User' },
          { id: 'o4', text: 'Helen learned the word "water".', icon: 'Droplets' },
          { id: 'o5', text: 'She graduated from college.', icon: 'GraduationCap' },
          { id: 'o6', text: 'She died in 1968.', icon: 'Flower' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'hacer', title: 'Worked example: a mini-biography',
          prompt: 'Con las frases de las biografías puedes escribir la historia de alguien que admiras. Mira cómo lo hace Isabel sobre su abuela.' },
        { icon: 'PenLine', problem: 'Isabel quiere escribir una mini-biografía de su abuela Juana, que nació en Totonicapán en 1958, fue maestra y es famosa en su aldea por enseñar a leer a muchos adultos.',
          steps: [
            { text: 'Nacimiento: **My grandmother Juana was born in Totonicapán in 1958.**', why: 'Was born in + lugar + año.' },
            { text: 'Lo que llegó a ser: **She became a teacher.**' },
            { text: 'Por qué es admirada: **She is famous in our village for teaching many adults to read.**' },
            { text: 'Cierre con tu opinión: **I admire her because she is kind and brave.**', why: 'Admire = admirar. Because = porque.' },
          ],
          answer: '**My grandmother Juana was born in Totonicapán in 1958. She became a teacher. She is famous in our village for teaching many adults to read. I admire her because she is kind and brave.**',
          tip: 'Nacimiento → qué llegó a ser → por qué es importante → por qué la admiras.' },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'hacer',
          prompt: 'According to the biography, true or false?' },
        { statements: [
          { text: 'Helen Keller was blind and deaf.', answer: true },
          { text: 'Anne Sullivan spelled words into Helen\'s palm.', answer: true },
          { text: 'Helen never went to college.', answer: false, why: '"In 1904, she graduated from college."' },
          { text: 'Helen helped people with disabilities.', answer: true },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l3'], cnb: ['l3:5.2.2'], ambito: 'hacer',
          prompt: 'Usa esta **fact card suministrada**: Elena Cruz · born in Quetzaltenango, 1986 · became an electrical engineer, 2010 · designed school solar projects · received a teaching award, 2022. Escribe una mini-biografía en inglés de 3 oraciones. No agregues fechas que no aparecen.' },
        { minWords: 20, placeholder: 'Elena Cruz was born... She became... She is known for...',
          model: 'Elena Cruz was born in Quetzaltenango in 1986. She became an electrical engineer in 2010 and designed school solar projects. She received a teaching award in 2022.',
          rubric: ['Uso solo los hechos suministrados', 'Escribo tres oraciones en orden', 'Uso was born y became correctamente'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:5.2.2'], prompt: 'Boleto de salida: ¿quién le enseñó a Helen Keller a comunicarse?' },
        { options: [
          { id: 'a', text: 'Anne Sullivan, su maestra' },
          { id: 'b', text: 'Neil Armstrong' },
          { id: 'c', text: 'Su hermano' },
        ], correct: ['a'] },
      ),
      S.fill(
        { fase: 'comprobar', areas: ['l3'], cnb: ['l3:5.2.2'], prompt: 'Completa en inglés: "Helen Keller nació en 1880. Se graduó de la universidad en 1904."' },
        { text: 'Helen Keller [[was born]] in 1880. She [[graduated]] from college in 1904.', distractors: ['died', 'became'] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l3'], cnb: [], ambito: 'ser', prompt: 'We finished the unit! ¿Cómo te fue?' },
        { statements: ['Leo y comprendo una biografía sencilla en inglés', 'Leo años en inglés', 'Escribo una mini-biografía con was born, became y is famous for', 'En esta unidad aprendí a ubicar cosas, comprar, contar lo que viví, seguir instrucciones y describir el pasado en inglés'],
          commitments: ['Leeré la biografía de otra persona famosa de un país donde se habla inglés', 'Compartiré con mi familia la mini-biografía que escribí', 'Seguiré practicando inglés un poco cada día'] },
      ),
    ],
  }),
];
