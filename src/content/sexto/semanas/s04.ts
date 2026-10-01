import { S, lesson, semana } from '../../dsl';

/**
 * SEMANA 4 · Unidad 1
 * Tema generador: Crecer, cuidarnos y participar
 * Las 27 lecciones de materia viven en src/content/sexto/materias/<area>/u1/s04.ts.
 */
export default semana({
  id: 's04',
  unidad: 1,
  semana: 4,
  kind: 'aprendizaje',
  temaGenerador: 'Crecer, cuidarnos y participar',
  title: 'Crecer, cuidarnos y participar',
  subtitle: 'Cambios del cuerpo, cuidado ético, información confiable, liderazgo y participación',
  icon: 'HeartHandshake',
  color: 'var(--area-cnt)',
  contexto: 'Crecer trae cambios corporales, preguntas y nuevas responsabilidades. Esta semana estudiarás la pubertad y el aparato reproductor con lenguaje científico y respetuoso, distinguirás información confiable de rumores y reconocerás cuándo conviene conversar con una persona adulta de confianza o un profesional de salud, sin intentar diagnosticar. También practicarás liderazgos que escuchan, informan y hacen participar; usarás el teatro, la voz, la música y otros saberes para comunicar cuidado. Cada cuerpo cambia a su ritmo: la variación es normal y ninguna diferencia justifica burlas, vergüenza o estereotipos.',
  ejes: ['vida-familiar', 'equidad', 'vida-ciudadana', 'seguridad'],
  media: {
    id: 's04-portada', kind: 'image', title: 'Crecer con información y apoyo', aspect: '16:9',
    alt: 'Estudiantes diversos preparan una campaña escolar con un guion, un cartel de fuentes confiables y una lista de acuerdos de respeto.',
    brief: 'Ilustración educativa luminosa de estudiantes guatemaltecos diversos preparando una campaña en un aula. En la mesa hay un guion teatral, tarjetas con los rótulos "familia", "docente" y "centro de salud", una lista de acuerdos de respeto y materiales de arte. Una docente acompaña sin dominar la actividad. Ropa completa, posturas naturales, sin representar cambios corporales de forma exagerada ni estereotipada, sin marcas.',
  },
  badge: { id: 'medalla-s04', name: 'Comunicador del cuidado', icon: 'HeartHandshake', desc: 'Completaste la semana 4 y superaste su reto' },
  lessons: [
    lesson({
      id: 's04-d5-taller',
      kind: 'taller',
      day: 5,
      title: 'Campaña: crecer con cuidado',
      icon: 'Drama',
      minutes: 19,
      gancho: '¿Cómo puede una escena breve responder una duda sobre crecer sin asustar, avergonzar ni repetir rumores?',
      objetivos: ['Crear una campaña informativa con una escena dramática científicamente correcta, respetuosa y participativa'],
      resumen: [
        'Una campaña de salud usa información comprobable y dice de dónde procede.',
        'Una escena informativa presenta una duda, una respuesta clara y una acción de cuidado.',
        'El lenguaje respetuoso reconoce que cada cuerpo cambia a su ritmo y evita burlas, estereotipos y diagnósticos.',
        'Un liderazgo democrático escucha al equipo, reparte tareas y revisa el producto con criterios comunes.',
      ],
      media: {
        id: 's04-d5-taller-campana', kind: 'image', title: 'Mesa de campaña escolar', aspect: '16:9',
        alt: 'Guion de una escena breve, tarjetas de fuentes confiables, títeres sencillos y una lista de revisión sobre ciencia y respeto.',
        brief: 'Vista cenital de una mesa escolar. Se ven un guion titulado "Crecer con cuidado", dos títeres de papel, tarjetas que dicen "libro de Ciencias", "persona adulta de confianza" y "centro de salud", una nota anónima marcada como rumor, y una lista de revisión con dos casillas: exactitud científica y lenguaje respetuoso. Sin imágenes anatómicas ni marcas comerciales.',
      },
      steps: [
        S.explain(
          { fase: 'explorar', areas: ['cnt'], cnb: ['cnt:2.3.2'], ambito: 'conocer', title: 'Punto de partida · 1 min',
            prompt: 'La campaña no diagnostica ni promete que todos los cuerpos cambian igual. Presenta información general, reconoce la variación normal y orienta a pedir ayuda cuando una duda preocupa.' },
          { icon: 'ShieldCheck', body: 'Una respuesta responsable combina un dato científico sencillo, lenguaje respetuoso y una fuente confiable.', reveal: [
            { icon: 'BookOpenCheck', front: 'Dato', back: 'Debe coincidir con lo estudiado en Ciencias y no convertir una variación normal en un problema.' },
            { icon: 'HeartHandshake', front: 'Respeto', back: 'Habla de personas y cuerpos sin burlas, culpa, vergüenza ni estereotipos.' },
            { icon: 'Stethoscope', front: 'Orientación', back: 'Ante dolor, preocupación o una pregunta personal, recomienda hablar con una persona adulta de confianza o un profesional de salud.' },
          ] },
        ),
        S.project(
          { fase: 'construir', areas: ['cnt', 'l1'], cnb: ['cnt:2.3.2', 'l1:5.1.8'], ambito: 'hacer', title: 'Etapa 1: elige el mensaje · 2 min',
            prompt: 'Elige una sola duda para tu campaña informativa: ritmos distintos de la pubertad, cuidado de la intimidad o cómo pedir información confiable.' },
          { goal: 'Definir una escena dramática informativa con una idea central.',
            steps: [
              { title: 'Formula', detail: 'Escribe la duda en una oración que una persona de sexto podría decir.' },
              { title: 'Enfoca', detail: 'Escribe debajo un único mensaje de cuidado que responderá la escena.' },
            ],
            evidence: 'Una duda clara y un mensaje de cuidado relacionado.',
            rubric: ['La pregunta es apropiada para la edad', 'La escena tendrá una sola idea central'] },
        ),
        S.project(
          { fase: 'construir', areas: ['cnt'], cnb: ['cnt:2.3.2', 'cnt:3.3.1'], ambito: 'conocer', title: 'Etapa 2: verifica la ciencia · 2 min',
            prompt: 'Anota el dato científico que usarás y la fuente confiable que permite comprobarlo.' },
          { goal: 'Sostener la campaña informativa con información verificable.',
            steps: [
              { title: 'Dato', detail: 'Escribe un dato enseñado esta semana, sin añadir diagnósticos ni reglas absolutas.' },
              { title: 'Fuente', detail: 'Nombra el libro o lección de Ciencias y una persona adulta de confianza o profesional de salud a quien se podría consultar.' },
            ],
            evidence: 'Dato científicamente correcto y fuente confiable identificada.',
            rubric: ['El dato tiene exactitud científica', 'La fuente confiable se puede identificar'] },
        ),
        S.write(
          { fase: 'aplicar', areas: ['l1', 'cnt'], cnb: ['l1:5.1.8', 'cnt:2.3.2'], ambito: 'hacer', title: 'Etapa 3: borrador del diálogo · 2 min',
            prompt: 'Escribe cuatro líneas: un personaje plantea la duda; otro responde con el dato; el primero pregunta qué hacer; el segundo orienta sin diagnosticar.' },
          { minWords: 35, placeholder: 'ANA: (con calma) ...\nLUIS: ...\nANA: ...\nLUIS: ...',
            model: 'ANA: (con calma) A mis amigas ya les cambió el cuerpo y a mí todavía no. ¿Eso significa que estoy mal?\nLUIS: No. La pubertad puede empezar a edades diferentes y cada cuerpo lleva su ritmo.\nANA: ¿Con quién puedo aclarar mis dudas?\nLUIS: Puedes hablar con una persona adulta de confianza o con un profesional del centro de salud.',
            rubric: ['El diálogo comunica un dato científico', 'No diagnostica ni presenta un ritmo como el único normal', 'Orienta hacia una fuente confiable'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['l1'], cnb: ['l1:5.1.8'], ambito: 'hacer', title: 'Etapa 4: forma teatral · 2 min',
            prompt: 'Pasa el diálogo a formato de guion y añade dos acotaciones que ayuden a comunicar calma, escucha o respeto.' },
          { goal: 'Convertir el mensaje en una escena dramática clara.',
            steps: [
              { title: 'Formato', detail: 'Pon nombres en MAYÚSCULAS, dos puntos y acotaciones entre paréntesis.' },
              { title: 'Acción', detail: 'Añade un inicio breve, un gesto de escucha y la palabra “Fin”.' },
            ],
            evidence: 'Guion breve listo para representar.',
            rubric: ['El formato permite saber quién habla y qué hace', 'Las acciones apoyan el cuidado'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['fc'], cnb: ['fc:3.1.1'], ambito: 'convivir', title: 'Etapa 5: organiza la participación · 1 min',
            prompt: 'El equipo tiene guionista, dos intérpretes y una persona encargada del sonido. ¿Qué decisión muestra liderazgo democrático?' },
          { options: [
            { id: 'a', text: 'Escuchar preferencias, repartir tareas y acordar cómo revisar el resultado' },
            { id: 'b', text: 'Dejar que una persona elija todos los papeles y prohíba cambios' },
            { id: 'c', text: 'Asignar las tareas más visibles solo a sus amistades' },
          ], correct: ['a'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['art', 'l1'], cnb: ['art:3.1.2', 'l1:5.1.9'], ambito: 'hacer', title: 'Etapa 6: sonido y apoyo visual · 2 min',
            prompt: 'Elige un recurso visual y un sonido breve que ayuden al mensaje sin distraer ni exponer a nadie.' },
          { goal: 'Dar claridad a la escena dramática sin convertir el cuerpo en espectáculo.',
            steps: [
              { title: 'Visual', detail: 'Haz una tarjeta con el mensaje central y un ícono descriptivo, como un libro abierto o manos que apoyan.' },
              { title: 'Sonido', detail: 'Elige una entrada y un cierre de volumen moderado cuyo carácter sea tranquilo y respetuoso.' },
            ],
            evidence: 'Tarjeta legible y decisión musical razonada.',
            rubric: ['El recurso refuerza el mensaje', 'La música y el volumen respetan al público'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['cnt', 'l1'], cnb: ['cnt:2.3.2', 'l1:5.1.8'], ambito: 'conocer', title: 'Etapa 7: ensayo de 45 segundos · 1 min',
            prompt: 'Durante el ensayo la escena tarda dos minutos. ¿Qué ajuste conserva mejor la información importante?' },
          { options: [
            { id: 'a', text: 'Dejar la duda, un dato, una fuente confiable y la orientación final' },
            { id: 'b', text: 'Hablar más rápido y agregar otros tres cambios corporales' },
            { id: 'c', text: 'Quitar la fuente y sustituirla por “lo vi en internet”' },
          ], correct: ['a'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['cnt', 'l1', 'fc'], cnb: ['cnt:2.3.2', 'cnt:3.3.1', 'l1:5.1.8', 'fc:3.1.1'], ambito: 'convivir', title: 'Etapa 8: revisión científica y respetuosa · 1 min',
            prompt: 'Intercambia el guion con otra persona y marca solo dos criterios: exactitud científica y respeto.' },
          { goal: 'Revisar la campaña informativa antes de presentarla.',
            steps: [
              { title: 'Ciencia', detail: 'Comprueba que el dato es científicamente correcto, tiene fuente confiable y no diagnostica.' },
              { title: 'Respeto', detail: 'Comprueba que el lenguaje respetuoso reconoce ritmos distintos y evita burlas, culpa y estereotipos.' },
            ],
            evidence: 'Dos marcas de revisión y una observación concreta.',
            rubric: ['La revisión comprueba exactitud científica', 'La revisión comprueba respeto'] },
        ),
        S.choice(
          { fase: 'aplicar', areas: ['cnt', 'l1'], cnb: ['cnt:2.3.2', 'l1:5.1.8'], ambito: 'hacer', title: 'Etapa 9: decide qué corregir · 1 min',
            prompt: 'La revisión encuentra esta línea: “A los doce años a todos les cambia la voz”. ¿Cuál corrección es más precisa y respetuosa?' },
          { options: [
            { id: 'a', text: 'Durante la pubertad la voz puede cambiar; el momento y la intensidad varían entre personas' },
            { id: 'b', text: 'A los doce años la voz normal siempre se vuelve grave' },
            { id: 'c', text: 'Si no cambia a los doce, la persona tiene una enfermedad' },
          ], correct: ['a'] },
        ),
        S.project(
          { fase: 'aplicar', areas: ['cnt', 'l1', 'art'], cnb: ['cnt:2.3.2', 'l1:5.1.8', 'l1:5.1.9', 'art:3.1.2'], ambito: 'hacer', title: 'Etapa 10: versión final · 1 min',
            prompt: 'Haz una corrección y deja lista la escena con su tarjeta y sonido.' },
          { goal: 'Terminar una escena dramática informativa que pueda presentarse en menos de un minuto.',
            steps: [
              { title: 'Corrige', detail: 'Cambia la línea señalada y encierra la mejora.' },
              { title: 'Integra', detail: 'Coloca juntos guion, tarjeta de fuente y decisión de sonido.' },
            ],
            evidence: 'Campaña informativa revisada y lista para presentar.',
            rubric: ['Mantiene exactitud científica y fuente confiable', 'Usa lenguaje respetuoso', 'La participación del equipo es visible'] },
        ),
        S.reflect(
          { fase: 'reflexionar', areas: ['cnt', 'l1', 'fc', 'art'], cnb: ['cnt:2.3.2', 'l1:5.1.8', 'fc:3.1.1', 'art:3.1.2'], ambito: 'ser',
            prompt: 'Cierre · 2 min. Revisa tu aporte y elige un compromiso para comunicar cuidado.' },
          { statements: ['Comprobé la ciencia', 'Usé lenguaje respetuoso', 'Escuché al equipo', 'Mejoré el producto después de revisarlo'],
            commitments: ['Consultaré una fuente confiable antes de compartir información de salud', 'No haré bromas sobre los cambios del cuerpo', 'Pediré ayuda adulta o profesional ante una preocupación de salud'] },
        ),
      ],
    }),

    lesson({
      id: 's04-d5-reto',
      kind: 'reto',
      day: 5,
      title: 'Reto de la semana 4',
      icon: 'Trophy',
      minutes: 14,
      objetivos: ['Demostrar lo aprendido en las diez áreas de la semana'],
      resumen: ['Resolví situaciones nuevas sobre crecimiento, comunicación, participación, arte, movimiento y producción.'],
      media: {
        id: 's04-d5-reto', kind: 'image', title: 'Medalla Comunicador del cuidado', aspect: '1:1',
        alt: 'Medalla dorada con un libro abierto, dos globos de diálogo y manos que se apoyan.',
        brief: 'Medalla circular dorada. En el centro, un libro abierto con una marca de verificación; detrás, dos globos de diálogo y dos manos que se apoyan. Borde con un patrón geométrico inspirado en tejidos guatemaltecos. Fondo transparente, sin texto ni marcas.',
      },
      steps: [
        S.number(
          { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.4'], prompt: 'Un soporte para carteles es un prisma nonagonal. ¿Cuántos vértices tiene?' },
          { answer: 18, unit: 'vértices' },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: '¿Cuál fragmento combina diálogo y acotación con formato teatral correcto?' },
          { options: [
            { id: 'a', text: 'PAULA: (respira hondo) Voy a pedir ayuda.' },
            { id: 'b', text: 'Paula respiró hondo y dijo que iba a pedir ayuda.' },
            { id: 'c', text: '(PAULA respira hondo: voy a pedir ayuda.)' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:2.3.2'], prompt: 'Clasifica cada afirmación sobre los cambios corporales.' },
          { buckets: [
            { id: 'c', label: 'Científicamente cuidadosa', icon: 'BadgeCheck' },
            { id: 'r', label: 'Rumor o generalización', icon: 'MessageCircleWarning' },
          ], items: [
            { id: 'a', text: 'La pubertad no comienza a la misma edad en todas las personas', bucket: 'c' },
            { id: 'b', text: 'La piel con acné demuestra que alguien no se baña', bucket: 'r' },
            { id: 'd', text: 'Una duda personal de salud puede consultarse con un profesional', bucket: 'c' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.1.1'], prompt: 'Un grupo investiga cómo participan estudiantes de distintas edades en el gobierno escolar. ¿Qué ciencia social estudia principalmente los grupos y sus relaciones?' },
          { options: [
            { id: 'a', text: 'Sociología' },
            { id: 'b', text: 'Arqueología' },
            { id: 'c', text: 'Geografía física' },
          ], correct: ['a'] },
        ),
        S.fill(
          { fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.1'], prompt: 'Complete the caring message with the correctly spelled words.' },
          { text: 'Be [[kind]]. We can [[share]] and help at [[home]].', distractors: ['cind', 'shar', 'hom'] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: 'La coordinadora escucha dos propuestas, publica los costos y luego organiza una votación. ¿Qué rasgo demuestra?' },
          { options: [
            { id: 'a', text: 'Liderazgo democrático con información y participación' },
            { id: 'b', text: 'Liderazgo autoritario porque permite votar' },
            { id: 'c', text: 'Falta de liderazgo porque escucha antes de decidir' },
          ], correct: ['a'] },
        ),
        S.sort(
          { fase: 'comprobar', areas: ['art'], cnb: ['art:3.1.2'], prompt: 'Clasifica decisiones musicales para una campaña escolar.' },
          { buckets: [
            { id: 'a', label: 'Aporta al mensaje', icon: 'Volume2' },
            { id: 'd', label: 'Distrae o falta al respeto', icon: 'VolumeX' },
          ], items: [
            { id: 'm1', text: 'Entrada instrumental breve y de volumen moderado', bucket: 'a' },
            { id: 'm2', text: 'Letra que se burla de los cuerpos de otras personas', bucket: 'd' },
            { id: 'm3', text: 'Cierre tranquilo que permite oír la última orientación', bucket: 'a' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.3'], prompt: 'En un recorrido debes avanzar mientras controlas la pelota con ambas manos. ¿Qué ejecución responde al reto?' },
          { options: [
            { id: 'a', text: 'Botar mientras te desplazas y alternar la mano derecha con la izquierda' },
            { id: 'b', text: 'Sostener la pelota con las dos manos durante todo el recorrido' },
            { id: 'c', text: 'Lanzarla lejos y correr sin mantener el control' },
          ], correct: ['a'] },
        ),
        S.match(
          { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.2.1'], prompt: 'Une cada parte del mensaje oral con la manera de decirla.' },
          { pairs: [
            { id: 'a', left: '¿Dónde puedo preguntar?', right: 'Entonación ascendente de pregunta' },
            { id: 'b', left: 'Cada cuerpo tiene su ritmo.', right: 'Volumen claro y final descendente' },
            { id: 'c', left: '¡Tratémonos con respeto!', right: 'Energía expresiva sin gritar' },
          ] },
        ),
        S.choice(
          { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.5.3'], prompt: 'Antes de recomendar un cultivo nuevo, ¿qué conjunto de datos permite justificar la decisión?' },
          { options: [
            { id: 'a', text: 'Temperatura, lluvias, tipo de suelo, pendiente y disponibilidad de agua' },
            { id: 'b', text: 'Solo el color preferido de quien compra la semilla' },
            { id: 'c', text: 'Únicamente el nombre del terreno' },
          ], correct: ['a'] },
        ),
      ],
    }),
  ],

  bank: [
    S.number(
      { fase: 'comprobar', areas: ['mat'], cnb: ['mat:1.3.4'], prompt: 'Una pirámide decagonal tiene una base de diez lados. ¿Cuántas caras tiene en total?' },
      { answer: 11, unit: 'caras' },
    ),
    S.sort(
      { fase: 'comprobar', areas: ['l1'], cnb: ['l1:5.1.8'], prompt: 'Clasifica cada línea de una escena informativa.' },
      { buckets: [
        { id: 'd', label: 'Diálogo', icon: 'MessageCircle' },
        { id: 'a', label: 'Acotación', icon: 'Drama' },
      ], items: [
        { id: 'x', text: 'JORGE: Podemos consultar el libro de Ciencias.', bucket: 'd' },
        { id: 'y', text: '(Se sientan en círculo y escuchan.)', bucket: 'a' },
      ] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['cnt'], cnb: ['cnt:3.3.1'], prompt: 'Dos personas adultas cuidan a su bebé. ¿Qué decisión muestra paternidad y maternidad responsables?' },
      { options: [
        { id: 'a', text: 'Compartir alimentación, citas de salud, afecto y cuidados según sus posibilidades' },
        { id: 'b', text: 'Dejar todo el cuidado a una sola persona por costumbre' },
        { id: 'c', text: 'Atender únicamente los gastos y no dedicar tiempo ni protección' },
      ], correct: ['a'] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['ccss'], cnb: ['ccss:5.1.4'], prompt: '¿Qué pregunta se puede investigar con observaciones o entrevistas en la comunidad?' },
      { options: [
        { id: 'a', text: '¿Cómo participan las familias en las reuniones del barrio?' },
        { id: 'b', text: '¿Cuál es el mejor color del mundo?' },
        { id: 'c', text: '¿Qué pensará cada persona dentro de veinte años?' },
      ], correct: ['a'] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['l2'], cnb: ['l2:2.2.2'], prompt: 'Al recitar “abro los brazos para recibir ayuda”, ¿qué gesto corresponde al significado?' },
      { options: [
        { id: 'a', text: 'Abrir los brazos al decir “abro”' },
        { id: 'b', text: 'Dar la espalda y taparse la cara' },
        { id: 'c', text: 'Mover los pies sin relación con el verso' },
      ], correct: ['a'] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['l3'], cnb: ['l3:2.2.1'], prompt: 'Choose the correct word: “I have ___ pencils: one for me and one for you.”' },
      { options: [
        { id: 'a', text: 'two' },
        { id: 'b', text: 'to' },
        { id: 'c', text: 'too' },
      ], correct: ['a'] },
    ),
    S.sort(
      { fase: 'comprobar', areas: ['fc'], cnb: ['fc:3.1.1'], prompt: 'Clasifica la evidencia sobre el consejo estudiantil.' },
      { buckets: [
        { id: 'd', label: 'Gestión democrática', icon: 'Vote' },
        { id: 'a', label: 'Gestión autoritaria', icon: 'Gavel' },
      ], items: [
        { id: 'x', text: 'Publica el presupuesto y recibe preguntas', bucket: 'd' },
        { id: 'y', text: 'Cambia las reglas para impedir nuevas candidaturas', bucket: 'a' },
      ] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['art'], cnb: ['art:3.1.2'], prompt: '¿Qué reseña musical expresa una valoración con razones?' },
      { options: [
        { id: 'a', text: 'La elegiría: su tempo moderado deja oír el diálogo y su letra habla de apoyo' },
        { id: 'b', text: 'Es la mejor porque sí' },
        { id: 'c', text: 'Es mala porque no está de moda' },
      ], correct: ['a'] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['ef'], cnb: ['ef:2.1.3'], prompt: '¿Qué distingue una ejecución en suspensión de una ejecución directa por arriba del hombro?' },
      { options: [
        { id: 'a', text: 'Los pies se separan momentáneamente del suelo antes de soltar el implemento' },
        { id: 'b', text: 'El implemento avanza siempre pegado al suelo' },
        { id: 'c', text: 'Se elimina el movimiento del tronco y de las piernas' },
      ], correct: ['a'] },
    ),
    S.choice(
      { fase: 'comprobar', areas: ['pyd'], cnb: ['pyd:2.5.3'], prompt: 'Un suelo deja escapar el agua muy rápido. ¿Qué descripción corresponde?' },
      { options: [
        { id: 'a', text: 'Es arenoso y puede necesitar riego más frecuente' },
        { id: 'b', text: 'Es arcilloso y siempre queda encharcado' },
        { id: 'c', text: 'El tipo de suelo no influye en la producción' },
      ], correct: ['a'] },
    ),
  ],
});
