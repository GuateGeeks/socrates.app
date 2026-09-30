/**
 * L2 (español como segundo idioma) · Unidad 1 · Semana 4
 * La voz y el cuerpo comunican: volumen, entonación y fluidez; poemas y rimas con gestos.
 */
import { lesson, S } from '../../../../dsl';

const POEMA = 'Arriba, en el cielo, la nube se estira,\nel viento despeina la milpa que mira.\n\n¡Plin, plin!, cae el agua, gotita a gotita,\ny abre la boca la tierra sequita.\n\nLas hojas del maíz se mecen, se mecen,\nde un lado a otro, felices parecen.\n\nY cuando la lluvia se va por el cerro,\nsale el sol grande… ¡y ladra mi perro!';

export default [
  // ───────────────────────────── Lección 1 ─────────────────────────────
  lesson({
    id: 's04-l2-1',
    title: 'Mi voz comunica: volumen, entonación y fluidez',
    icon: 'Mic',
    minutes: 13,
    gancho: '"Ya llegó." "¿Ya llegó?" "¡Ya llegó!" Son las mismas palabras… ¿por qué dicen cosas distintas?',
    objetivos: [
      'Ajustar el volumen de tu voz al lugar y al público',
      'Usar la entonación de preguntas, exclamaciones y afirmaciones',
      'Leer en voz alta con fluidez, respetando las pausas',
    ],
    resumen: [
      'Volumen: qué tan fuerte hablas. Se ajusta al lugar y a la cantidad de personas que escuchan.',
      'Entonación: la "música" de la voz. En preguntas de sí o no la voz sube al final (¿?); en exclamaciones se dice con fuerza y emoción (¡!); en afirmaciones baja al final (.).',
      'Fluidez: leer o hablar sin cortar las palabras, a una velocidad cómoda, con pausas cortas en las comas y más largas en los puntos.',
    ],
    media: {
      id: 's04-l2-1-tres-voces', kind: 'audio', title: 'Una frase, tres entonaciones', duration: 30,
      alt: 'Una voz dice "Ya llegó" como afirmación, como pregunta y como exclamación; después, una lectura cortada y la misma lectura fluida.',
      brief: 'Audio de 30 s, voz de niña o niño de 11-12 años, español de Guatemala, grabación limpia. Parte 1: "Ya llegó." (tono que baja) — pausa — "¿Ya llegó?" (tono que sube al final) — pausa — "¡Ya llegó!" (alegre, con fuerza). Parte 2: la oración "Mañana, si no llueve, iremos al río con mi abuelo." leída primero sílaba por sílaba, sin pausas correctas; después leída con fluidez, con pausa corta en cada coma y bajando el tono en el punto. Rotular en pantalla (si hay versión visual) la curva de entonación con flechas.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:2.2.1'], ambito: 'conocer',
          prompt: 'Escucha el audio: la misma frase se dice de tres maneras. ¿En cuál la persona **pregunta** si alguien ya llegó?',
          explain: 'En la pregunta la voz **sube al final**. Las palabras son las mismas, pero la **entonación** cambia el mensaje. Hoy aprenderás a usar tu voz para comunicar mejor.' },
        { options: [
          { id: 'a', text: '"Ya llegó." (la voz baja al final)', icon: 'ArrowDown', feedback: 'Cuando la voz baja al final, se está afirmando algo.' },
          { id: 'b', text: '"¿Ya llegó?" (la voz sube al final)', icon: 'ArrowUp' },
          { id: 'c', text: '"¡Ya llegó!" (con fuerza y alegría)', icon: 'PartyPopper', feedback: 'Esa es una exclamación: expresa emoción.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.1'], ambito: 'conocer', title: 'Tres destrezas de la voz',
          prompt: 'Cuando hablas o lees en voz alta, tu voz tiene tres controles, como un radio. Toca cada tarjeta.' },
        { icon: 'Mic', body: 'Una misma información puede entenderse bien o mal según **cómo** la digas.', reveal: [
          { icon: 'Volume2', front: 'Volumen', back: 'Qué tan **fuerte** hablas. Súbelo si el grupo es grande o estás al aire libre; bájalo en la biblioteca, el centro de salud o una conversación cercana. Nunca grites sin necesidad.' },
          { icon: 'Music', front: 'Entonación', back: 'La **"música"** de la voz. **¿Pregunta de sí o no?** → sube al final (en preguntas con qué, quién o dónde, la voz se eleva al inicio). **¡Exclamación!** → fuerza y emoción. **Afirmación.** → baja al final.' },
          { icon: 'Waves', front: 'Fluidez', back: 'Hablar o leer **sin cortar las palabras**, a velocidad cómoda. Pausa **corta** en la coma (,) y **más larga** en el punto (.).' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo Andrea prepara un aviso que leerá en la formación, frente a toda la escuela.' },
        { icon: 'Megaphone', problem: 'Andrea debe leer: _"Compañeros, el viernes habrá feria de ciencias. ¿Ya tienen su experimento? ¡Los esperamos!"_',
          steps: [
            { text: '**Volumen:** es en el patio y hay muchas personas → volumen **alto** y claro, sin gritar.' },
            { text: '**Pausas:** marca con una raya las comas y los puntos: "Compañeros, / el viernes habrá feria de ciencias. // ¿Ya tienen su experimento? // ¡Los esperamos!"', why: 'Una raya = pausa corta; dos rayas = pausa larga.' },
            { text: '**Entonación:** la primera oración baja al final (afirma); la segunda **sube** al final (pregunta de sí o no); la tercera va con **alegría y fuerza** (exclamación).' },
            { text: '**Fluidez:** lo lee en voz alta tres veces, hasta decir cada oración sin trabarse.' },
          ],
          answer: 'Andrea ajustó el **volumen** al patio, marcó las **pausas** y eligió la **entonación** de cada oración.',
          tip: 'Los signos ¿? y ¡! se escriben al inicio y al final en español: te avisan desde el principio cómo leer.' },
      ),
      S.match(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.1'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: une cada oración con la forma de decirla.',
          hint: 'Mira los signos: ¿ ? pide subir al final; ¡ ! pide emoción; el punto pide bajar.',
          explain: 'Los signos de puntuación son instrucciones para tu voz.' },
        { leftTitle: 'Oración', rightTitle: 'Cómo se dice', pairs: [
          { id: 'e1', left: '¿Vienes mañana a la cancha?', leftIcon: 'HelpCircle', right: 'La voz sube al final' },
          { id: 'e2', left: '¡Ganamos el campeonato!', leftIcon: 'Trophy', right: 'Con fuerza y alegría' },
          { id: 'e3', left: 'Mañana hay clases a las siete.', leftIcon: 'Clock', right: 'La voz baja al final' },
          { id: 'e4', left: 'Shh, el bebé está dormido.', leftIcon: 'Moon', right: 'Con volumen muy bajo' },
        ] },
      ),
      S.sort(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.1'], ambito: 'hacer',
          prompt: '¿Qué **volumen** conviene en cada situación?',
          hint: 'Piensa en cuántas personas escuchan, qué tan lejos están y si el lugar pide silencio.',
          explain: 'Ajustar el volumen es una forma de respeto: que te oigan todos, sin molestar a nadie.' },
        { buckets: [
          { id: 'alto', label: 'Alto', icon: 'Volume2', color: 'var(--c-maiz-strong)' },
          { id: 'medio', label: 'Moderado', icon: 'Volume1', color: 'var(--area-l2)' },
          { id: 'bajo', label: 'Bajo', icon: 'VolumeX', color: 'var(--c-ok)' },
        ], items: [
          { id: 'v1', text: 'Dar un aviso en el patio a toda la escuela, sin micrófono', bucket: 'alto' },
          { id: 'v2', text: 'Exponer en tu aula ante tu grado', bucket: 'medio' },
          { id: 'v3', text: 'Preguntar algo en la biblioteca', bucket: 'bajo' },
          { id: 'v4', text: 'Leer un cuento a tres compañeros en tu mesa', bucket: 'medio' },
          { id: 'v5', text: 'Hablar en la sala de espera del centro de salud', bucket: 'bajo' },
          { id: 'v6', text: 'Llamar a tu equipo desde el otro lado de la cancha', bucket: 'alto' },
        ] },
      ),
      S.reading(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.2.1'], ambito: 'hacer', title: 'Lee en voz alta',
          prompt: 'Lee este mensaje **en voz alta** dos veces, como si lo dijeras por la radio de la escuela. Luego responde.' },
        { genre: 'Aviso', heading: 'Radio escolar', passage:
          '¡Buenos días, escuela Tecún Umán! Les habla Diego, de sexto grado.\n\nHoy, a la hora del recreo, el equipo de sexto jugará contra el de quinto. ¿Quién ganará? ¡Vengan a apoyar!\n\nRecuerden: no dejen basura en la cancha, y lleven su botella de agua.',
          questions: [
            { q: '¿Cómo debe decir Diego "¿Quién ganará?"?', options: [
              { id: 'a', text: 'Con tono de pregunta' },
              { id: 'b', text: 'En voz muy baja, como un secreto' },
              { id: 'c', text: 'Sin cambiar la voz' },
            ], correct: 'a', why: 'Los signos ¿? indican una pregunta. Esta no se responde con sí o no, así que la voz sube en "quién" y baja suavemente al final, pero se nota que pregunta.' },
            { q: '¿Dónde debe hacer una pausa **corta** en la última oración?', options: [
              { id: 'a', text: 'Después de "Recuerden:" y de "cancha,"' },
              { id: 'b', text: 'Entre "botella" y "de"' },
              { id: 'c', text: 'En ningún lugar: debe leerla de corrido' },
            ], correct: 'a', why: 'Los dos puntos y la coma piden pausas cortas. Cortar "botella / de agua" rompe la fluidez.' },
            { q: '¿Qué **volumen** conviene si el mensaje sale por los parlantes de toda la escuela?', options: [
              { id: 'a', text: 'Claro y moderado: los parlantes ya aumentan el sonido' },
              { id: 'b', text: 'Gritando lo más fuerte posible' },
              { id: 'c', text: 'Susurrando' },
            ], correct: 'a', why: 'Con micrófono y parlantes no hace falta gritar: basta una voz clara.' },
          ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.2.1'], ambito: 'hacer',
          prompt: 'Tres estudiantes leen la oración _"Cuando llegué a casa, mi abuela estaba tortilleando."_ ¿Quién lee con **fluidez**?',
          explain: 'La fluidez agrupa las palabras con sentido y hace la pausa en la coma, no en cualquier lugar.' },
        { options: [
          { id: 'a', text: 'Luis: "Cuan-do-lle-gué-a-ca-sa-mi-a-bue-la…"', feedback: 'Leer sílaba por sílaba hace que se pierda el sentido.' },
          { id: 'b', text: 'Marta: "Cuando llegué a casa (pausa) mi abuela estaba tortilleando."' },
          { id: 'c', text: 'Beto: "Cuando llegué (pausa) a casa mi abuela (pausa) estaba tortilleando."', feedback: 'Las pausas no coinciden con la coma: corta las ideas en lugares extraños.' },
        ], correct: ['b'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.2.1'], ambito: 'hacer',
          prompt: 'Escribe un aviso corto para la radio de tu escuela (3 oraciones): una **afirmación**, una **pregunta** y una **exclamación**. Después léelo en voz alta tres veces, cuidando volumen, entonación y pausas.' },
        { minWords: 18, placeholder: 'Buenos días, compañeros…',
          model: 'Buenos días, compañeros: el lunes empieza la campaña de reciclaje. ¿Ya separaron las botellas en su casa? ¡Traigan todas las que puedan!',
          rubric: ['Escribí una afirmación, una pregunta y una exclamación', 'Usé los signos ¿? y ¡! al inicio y al final', 'Lo leí en voz alta con la entonación correcta', 'Hice pausas en las comas y los puntos'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.2.1'], prompt: 'Boleto de salida: ¿cómo se dice _"¿Me prestas tu lápiz?"_?' },
        { options: [
          { id: 'a', text: 'La voz sube al final' },
          { id: 'b', text: 'La voz baja al final, como una orden' },
          { id: 'c', text: 'Gritando, con enojo' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.2.1'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'En la coma se hace una pausa corta y en el punto, una más larga.', answer: true },
          { text: 'En la biblioteca conviene hablar con volumen alto.', answer: false, why: 'En la biblioteca se habla bajo para no interrumpir a quienes leen.' },
          { text: 'Leer sílaba por sílaba es leer con fluidez.', answer: false, why: 'La fluidez agrupa las palabras con sentido, sin cortarlas.' },
        ] },
      ),
    ],
  }),

  // ───────────────────────────── Lección 2 ─────────────────────────────
  lesson({
    id: 's04-l2-2',
    title: 'Poemas y rimas con gestos',
    icon: 'PersonStanding',
    minutes: 14,
    gancho: 'Cuando tu abuela cuenta que "el árbol era así de grande", ¿qué hace con los brazos?',
    objetivos: [
      'Reconocer gestos y movimientos que ayudan a interpretar un poema o una rima',
      'Elegir gestos que correspondan al significado de cada verso',
      'Recitar un poema combinando voz y cuerpo',
    ],
    resumen: [
      'Al recitar, el cuerpo también comunica: gestos ilustrativos (muestran tamaño, forma o acción), gestos expresivos (la cara muestra emociones), movimientos de ritmo y desplazamientos.',
      'Cada gesto debe corresponder al significado del verso y hacerse al mismo tiempo que la palabra.',
      'Los gestos ayudan al público a imaginar y a recordar el poema; no deben tapar la cara ni la voz.',
      'Para preparar un poema: léelo y entiéndelo, busca las palabras de acción, elige gestos, ensaya con voz y cuerpo.',
    ],
    media: {
      id: 's04-l2-2-poema-gestos', kind: 'video', title: 'La milpa bajo la lluvia', aspect: '9:16', duration: 55,
      alt: 'Una niña recita el poema "La milpa bajo la lluvia" con gestos: estira los brazos como nube, imita gotas con los dedos y se mece como las hojas del maíz.',
      brief: 'Video vertical de 55 s. Una niña de 11-12 años (ropa sencilla o traje típico, sin logotipos) recita frente a una milpa o un fondo liso el poema completo "La milpa bajo la lluvia" (texto exacto en la lección). Gestos: verso 1, estira los brazos hacia arriba; verso 2, mueve las manos sobre la cabeza como viento; "¡Plin, plin!", toca el aire con los dedos como gotas; "abre la boca la tierra", abre las manos hacia abajo; "se mecen, se mecen", mece el cuerpo de lado a lado; "sale el sol grande", forma un círculo grande con los brazos; "¡y ladra mi perro!", cara de sorpresa y risa. Voz clara, volumen moderado. Subtítulos con el texto del poema.',
    },
    steps: [
      S.choice(
        { fase: 'explorar', areas: ['l2'], cnb: ['l2:2.2.2'], ambito: 'conocer',
          prompt: 'Tu abuelo cuenta: _"¡Y apareció un árbol enorme!"_ ¿Qué gesto ayudaría más a imaginarlo?',
          explain: 'Abrir los brazos muestra el **tamaño**. El cuerpo también cuenta la historia. Hoy aprenderás a interpretar poemas y rimas con gestos y movimientos.' },
        { options: [
          { id: 'a', text: 'Abrir los brazos hacia arriba, bien grandes', icon: 'TreeDeciduous' },
          { id: 'b', text: 'Taparse la cara con las manos', icon: 'EyeOff', feedback: 'Taparse la cara esconde la expresión y la voz; no muestra el tamaño del árbol.' },
          { id: 'c', text: 'Quedarse quieto con las manos en los bolsillos', icon: 'User', feedback: 'Se entiende la frase, pero el cuerpo no ayuda a imaginar nada.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.2'], ambito: 'conocer', title: 'El cuerpo también recita',
          prompt: 'Cuando recitas un poema, cantas o cuentas una rima, puedes usar cuatro tipos de lenguaje corporal. Toca cada tarjeta.' },
        { icon: 'PersonStanding', body: 'Regla de oro: el gesto va **al mismo tiempo** que la palabra y **dice lo mismo** que ella.', reveal: [
          { icon: 'Hand', front: 'Gestos ilustrativos', back: 'Muestran **tamaño, forma o acción**: brazos abiertos = grande; dedos que bajan = lluvia; mano en la frente = buscar a lo lejos.' },
          { icon: 'Smile', front: 'Gestos expresivos', back: 'La **cara** muestra la emoción: sonrisa, sorpresa, tristeza, miedo. Un poema alegre se recita con cara alegre.' },
          { icon: 'Music', front: 'Movimientos de ritmo', back: 'Palmadas, pasos o balanceos que siguen el **ritmo** de los versos. Ayudan a recordar rimas y canciones.' },
          { icon: 'Footprints', front: 'Desplazamientos', back: 'Moverse en el espacio: dar un paso al frente para algo importante, agacharse para algo pequeño, girar.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.2'], ambito: 'conocer', title: 'Lectura',
          prompt: 'Lee el poema en voz alta. Mientras lees, imagina qué gesto harías en cada parte. Luego responde.' },
        { genre: 'Poema', heading: 'La milpa bajo la lluvia', passage: POEMA,
          questions: [
            { q: '¿Qué gesto corresponde a "Las hojas del maíz se mecen, se mecen"?', options: [
              { id: 'a', text: 'Balancear el cuerpo y los brazos de un lado a otro' },
              { id: 'b', text: 'Saltar muy alto' },
              { id: 'c', text: 'Cruzar los brazos y fruncir la cara' },
            ], correct: 'a', why: '"Mecerse" es moverse de un lado a otro: el gesto imita la acción.' },
            { q: '¿Qué emoción debería mostrar la cara en el último verso, "¡y ladra mi perro!"?', options: [
              { id: 'a', text: 'Sorpresa y alegría' },
              { id: 'b', text: 'Tristeza' },
              { id: 'c', text: 'Enojo' },
            ], correct: 'a', why: 'Los signos de exclamación y el final gracioso piden una expresión de sorpresa alegre.' },
            { q: '¿Por qué conviene hacer un gesto en "¡Plin, plin!"?', options: [
              { id: 'a', text: 'Porque imita el sonido y la caída de las gotas, y ayuda a imaginar la lluvia' },
              { id: 'b', text: 'Porque así el poema se termina más rápido' },
              { id: 'c', text: 'Porque en los poemas hay que moverse en todas las palabras' },
            ], correct: 'a', why: 'Los gestos se eligen donde ayudan a entender; no hace falta moverse en cada palabra.' },
          ] },
      ),
      S.match(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.2'], ambito: 'hacer',
          prompt: 'Ahora tú, con ayuda: une cada verso del poema con el gesto que lo interpreta.',
          hint: 'Busca la palabra de acción o de forma en cada verso: estirarse, gotear, sol grande, abrir.',
          explain: 'Los gestos ilustrativos imitan la acción o la forma que nombra el verso.' },
        { leftTitle: 'Verso', rightTitle: 'Gesto', pairs: [
          { id: 'g1', left: '"la nube se estira"', right: 'Estirar los brazos hacia arriba y a los lados' },
          { id: 'g2', left: '"cae el agua, gotita a gotita"', right: 'Bajar los dedos poco a poco, como gotas' },
          { id: 'g3', left: '"y abre la boca la tierra sequita"', right: 'Abrir las manos hacia abajo, como algo que se abre' },
          { id: 'g4', left: '"sale el sol grande"', right: 'Formar un círculo grande con los brazos' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['l2'], cnb: ['l2:2.2.2', 'l2:2.2.1'], ambito: 'hacer', title: 'Ejemplo resuelto',
          prompt: 'Mira cómo Kevin prepara una rima con gestos para el acto del lunes.' },
        { icon: 'Sprout', problem: 'Kevin va a recitar la rima: _"Maíz, maicito, / crece bonito; / con sol y con agua / serás un elotito."_ ¿Cómo planifica sus gestos?',
          steps: [
            { text: 'Lee la rima y la entiende: habla de una planta de maíz que crece hasta dar elote.' },
            { text: 'Busca palabras de acción o forma: **crece**, **sol**, **agua**, **elotito**.' },
            { text: 'Elige un gesto para cada una: "crece" → subir las manos desde el suelo; "sol" → círculo con los brazos; "agua" → dedos como lluvia; "elotito" → mostrar algo pequeño con las dos manos.', why: 'Cada gesto dice lo mismo que la palabra.' },
            { text: 'Ensaya **voz y cuerpo juntos**, con volumen alto (es en el patio) y cara alegre.' },
          ],
          answer: 'Kevin eligió **un gesto por cada palabra clave** y lo ensayó junto con la voz.',
          tip: 'Menos es más: un buen gesto en el momento justo vale más que moverse todo el tiempo.' },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.2.2'], ambito: 'hacer',
          prompt: 'Al recitar un poema con gestos, ¿para qué sirven los movimientos?',
          explain: 'Los gestos refuerzan el significado de las palabras: el público imagina mejor y recuerda más.' },
        { options: [
          { id: 'a', text: 'Para ayudar al público a imaginar y comprender lo que dice el poema' },
          { id: 'b', text: 'Para reemplazar la voz: basta con moverse', feedback: 'En un poema recitado, el gesto acompaña a la voz; no la sustituye.' },
          { id: 'c', text: 'Para distraer al público del poema', feedback: 'Un gesto que distrae está mal elegido: debe decir lo mismo que el verso.' },
        ], correct: ['a'] },
      ),
      S.order(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.2.2'], ambito: 'hacer',
          prompt: 'Ordena los pasos para preparar un poema con gestos.',
          explain: 'Primero se entiende el poema; luego se eligen gestos; al final se ensaya todo junto antes de presentarlo.' },
        { labels: { start: 'Primero', end: 'Al final' }, items: [
          { id: 'p1', text: 'Leer el poema y entender de qué trata', icon: 'BookOpen' },
          { id: 'p2', text: 'Subrayar las palabras de acción, forma o emoción', icon: 'PenLine' },
          { id: 'p3', text: 'Elegir un gesto para cada palabra clave', icon: 'Hand' },
          { id: 'p4', text: 'Ensayar voz y cuerpo juntos varias veces', icon: 'RefreshCw' },
          { id: 'p5', text: 'Presentarlo al público', icon: 'Users' },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['l2'], cnb: ['l2:2.2.2'], ambito: 'hacer',
          prompt: 'Elige una canción, rima o poema corto que conozcas (de la escuela o de tu familia). Copia **dos versos** y escribe **qué gesto** harías en cada uno y **por qué**. Después ensáyalo en voz alta.' },
        { minWords: 25, placeholder: 'Verso 1: … Gesto: …',
          model: 'Verso 1: "Los pollitos dicen pío, pío, pío". Gesto: juntar los dedos y abrirlos como un pico, porque imita a los pollitos. Verso 2: "cuando tienen hambre, cuando tienen frío". Gesto: frotarme la panza y luego abrazarme temblando, porque muestra el hambre y el frío.',
          rubric: ['Copié dos versos', 'Propuse un gesto para cada verso', 'Expliqué por qué el gesto corresponde al significado', 'Lo ensayé con voz y cuerpo'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.2.2'], prompt: 'Boleto de salida: ¿qué gesto interpreta mejor el verso _"las olas del mar suben y bajan"_?' },
        { options: [
          { id: 'a', text: 'Mover las manos hacia arriba y hacia abajo, en ondas' },
          { id: 'b', text: 'Aplaudir tres veces' },
          { id: 'c', text: 'Señalar el piso con cara de enojo' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.2.2'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Un gesto expresivo muestra una emoción con la cara.', answer: true },
          { text: 'El gesto debe hacerse mucho después de decir la palabra.', answer: false, why: 'El gesto va al mismo tiempo que la palabra para reforzarla.' },
          { text: 'Las palmadas que siguen el ritmo de una rima son movimientos de ritmo.', answer: true },
        ] },
      ),
      S.reflect(
        { fase: 'reflexionar', areas: ['l2'], cnb: [], ambito: 'ser', prompt: '¿Cómo te fue esta semana?' },
        { statements: ['Ajusto el volumen de mi voz al lugar', 'Uso la entonación de preguntas y exclamaciones', 'Elijo gestos que corresponden a un poema o rima'],
          commitments: ['Recitaré un poema con gestos para mi familia', 'Leeré en voz alta cinco minutos al día cuidando las pausas', 'Aprenderé una rima o canción de mi comunidad'] },
      ),
    ],
  }),
];
