/**
 * Expresión Artística · Unidad 1 · Semana 4 — Valoración de la música que se escucha y se consume.
 * Progresión: escuchar con atención y describir lo que oímos (instrumentos, tempo, intensidad, carácter),
 * usando lo aprendido de compás y melodía → elegir con criterio: letras y mensajes, diversidad,
 * respeto por los gustos y cuidado del oído.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Escuchar con atención ───────────────────────── */
  lesson({
    id: 's04-art-1',
    title: 'Escuchar con atención: describir la música',
    icon: 'Headphones',
    minutes: 15,
    gancho: 'Todos los días oyes música: en el bus, en la tienda, en una fiesta. Pero ¿cuántas veces la **escuchas** de verdad, con atención?',
    objetivos: [
      "Describir y valorar una pieza musical mediante escucha atenta y criterios musicales",
    ],
    resumen: [
      'Oír es percibir sonidos sin poner atención; escuchar es poner atención para comprender y disfrutar.',
      'Para describir una pieza, fíjate en: instrumentos y voces (timbre), tempo (rápido o lento), intensidad (fuerte o suave), compás (se cuenta en 2, 3 o 4) y carácter (la emoción que transmite: alegre, solemne, triste, tranquila).',
      'La marimba es el instrumento nacional de Guatemala. En el país conviven muchas músicas: marimba, chirimía y tambor en los bailes tradicionales, tambores garífunas, bandas, rock, pop y más.',
      'Valorar la música es escucharla con respeto, reconocer el trabajo de quien la hace y saber explicar por qué nos gusta o no.',
    ],
    media: {
      id: 's04-art-1-paisaje', kind: 'video', title: 'Músicas de Guatemala', aspect: '16:9', duration: 60,
      alt: 'Un recorrido por escenas musicales: un conjunto de marimba en una feria, músicos de chirimía y tambor en un baile tradicional, tambores garífunas en la playa y una banda escolar.',
      brief: 'Video de 60 s con cuatro escenas de 13 s (recreadas con músicos que dieron su permiso, rostros no protagonistas, sin marcas): (1) marimba de concierto con 4-5 músicos en una feria de pueblo; (2) chirimía y tambor acompañando un baile tradicional frente a un atrio; (3) tambores garífunas y maracas en Livingston, Izabal; (4) banda escolar de percusión y liras. En cada escena aparece un rótulo con el instrumento principal. Música: solo el sonido directo de cada escena (piezas originales o tradicionales de dominio público). Narración breve en español: "En Guatemala suenan muchas músicas".',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['art'], cnb: ['art:3.1.2'], title: 'Idea central', prompt: 'Escuchar con atención ayuda a elegir música que acompañe un mensaje sin tapar las voces.' },
        { icon: 'BookOpenCheck', body: "Oír es percibir sonidos sin poner atención; escuchar es poner atención para comprender y disfrutar." },
      ),
      S.sort(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'ser',
          prompt: 'Piensa en tus días. Clasifica cada situación: ¿estás **oyendo** música de fondo o **escuchándola** con atención?',
          explain: '**Oír** es que el sonido te llegue; **escuchar** es poner atención. Para valorar la música, primero hay que escucharla de verdad.' },
        { buckets: [
          { id: 'o', label: 'Oigo (de fondo)', icon: 'Ear', color: 'var(--c-maiz-strong)' },
          { id: 'e', label: 'Escucho (con atención)', icon: 'Headphones', color: 'var(--area-art)' },
        ], items: [
          { id: 'x1', text: 'La radio suena en la tienda mientras compro pan', bucket: 'o' },
          { id: 'x2', text: 'Cierro los ojos para descubrir qué instrumentos suenan', bucket: 'e' },
          { id: 'x3', text: 'Hay música en la camioneta y voy platicando', bucket: 'o' },
          { id: 'x4', text: 'Repito una canción para aprenderme la letra', bucket: 'e' },
          { id: 'x5', text: 'Cuento el compás de una pieza de marimba', bucket: 'e' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'conocer', title: 'Las cinco preguntas del buen oyente',
          prompt: 'Cuando escuches una pieza con atención, hazte estas **cinco preguntas**. Ya conoces varias palabras de semanas anteriores. Toca cada tarjeta.' },
        { icon: 'Headphones', body: 'Estas preguntas te ayudan a **describir** la música con palabras precisas, no solo "me gusta" o "no me gusta".', reveal: [
          { icon: 'Guitar', front: '¿Qué suena?', back: '**Instrumentos y voces** (el **timbre**): marimba, guitarra, tambor, chirimía, voz de mujer, coro…' },
          { icon: 'Gauge', front: '¿Qué tan rápido?', back: 'El **tempo**: rápido, moderado o lento. Síguelo con el pie: ¿tu pie va de prisa o despacio?' },
          { icon: 'Volume2', front: '¿Fuerte o suave?', back: 'La **intensidad**. Muchas piezas cambian: empiezan suave y crecen, o al revés.' },
          { icon: 'Drum', front: '¿En cuánto se cuenta?', back: 'El **compás**: busca el acento y cuenta en 2, en 3 o en 4.' },
          { icon: 'Smile', front: '¿Qué transmite?', back: 'El **carácter**: alegre, festivo, solemne (serio y respetuoso), triste, tranquilo, misterioso… Es la emoción que provoca.' },
        ] },
      ),
      S.reading(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'conocer',
          prompt: 'Lee sobre la diversidad musical de Guatemala y responde.' },
        { heading: 'Un país con muchas músicas', genre: 'Texto expositivo',
          passage: 'En Guatemala suenan muchas músicas distintas, y todas cuentan algo de quienes las hacen. La **marimba** es el **instrumento nacional**. Es un instrumento de teclas de madera que se golpean con baquetas; debajo de cada tecla hay una caja de resonancia que hace que el sonido crezca. Se toca en ferias, bodas, actos cívicos y fiestas patronales, muchas veces entre varios músicos en un mismo instrumento.\n\nEn muchas comunidades mayas, la **chirimía** (un instrumento de viento de madera) y el **tambor** acompañan los bailes tradicionales y las procesiones. En la costa del Caribe, el pueblo **garífuna** conserva ritmos con **tambores** hechos a mano, maracas y canto en su idioma; su música, su danza y su lengua son reconocidas en el mundo como patrimonio cultural.\n\nTambién escuchamos **bandas** escolares, música de iglesia, rock, pop, reguetón, rap y música de otros países. Valorar la música no significa que todo deba gustarnos. Significa **escuchar con atención**, respetar el trabajo de quienes la crean y ser capaces de **explicar** qué oímos y por qué nos gusta o no.',
          questions: [
            { q: '¿Cuál es el instrumento nacional de Guatemala?', options: [
              { id: 'a', text: 'La chirimía' }, { id: 'b', text: 'La marimba' }, { id: 'c', text: 'El tambor garífuna' },
            ], correct: 'b', why: 'El texto lo dice en el primer párrafo.' },
            { q: '¿Para qué sirve la caja de resonancia debajo de cada tecla?', options: [
              { id: 'a', text: 'Para que el sonido crezca' }, { id: 'b', text: 'Para guardar las baquetas' }, { id: 'c', text: 'Para que la tecla no se mueva' },
            ], correct: 'a' },
            { q: 'Según el texto, ¿qué significa **valorar** la música?', options: [
              { id: 'a', text: 'Que toda la música nos debe gustar' },
              { id: 'b', text: 'Escucharla con atención, respetar a quienes la crean y explicar nuestra opinión' },
              { id: 'c', text: 'Escuchar solo música tradicional' },
            ], correct: 'b', why: 'Valorar no es obligarse a que algo guste: es escuchar con atención y dar razones.' },
          ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto: la ficha de escucha',
          prompt: 'Mira cómo Rosa describe una pieza de marimba usando las cinco preguntas.' },
        { icon: 'ClipboardList', problem: 'Rosa escucha una pieza de marimba en la feria de su pueblo. ¿Cómo la describe con precisión?',
          steps: [
            { text: '**¿Qué suena?** Una marimba grande tocada por varios músicos, y un contrabajo que hace las notas graves.' },
            { text: '**¿Qué tan rápido?** Tempo **rápido**: mi pie casi no alcanza a seguirlo.' },
            { text: '**¿Fuerte o suave?** Empieza **fuerte**, baja en la parte del medio y vuelve a crecer al final.' },
            { text: '**¿En cuánto se cuenta?** Encuentro el acento cada **3** pulsos: "UN-dos-tres".', why: 'Usa lo aprendido sobre compás en la semana 2.' },
            { text: '**¿Qué transmite?** Carácter **festivo y alegre**: da ganas de bailar.' },
            { text: '**Mi opinión con razones:** "Me gusta porque la marimba suena brillante y el cambio de intensidad me sorprendió".' },
          ],
          answer: 'Una buena descripción nombra **instrumentos, tempo, intensidad, compás y carácter**, y da una **opinión con razones**.',
          tip: 'Escucha la misma pieza dos veces: la primera para disfrutar y la segunda para llenar la ficha.' },
      ),
      S.match(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'conocer',
          prompt: 'Une cada palabra con lo que describe.',
          hint: 'Repasa las cinco preguntas del buen oyente.',
          explain: 'Timbre = qué instrumento o voz; tempo = velocidad; intensidad = fuerza; carácter = emoción.' },
        { leftTitle: 'Palabra', rightTitle: 'Describe…', pairs: [
          { id: 't', left: 'Timbre', right: 'Qué instrumento o voz suena' },
          { id: 'v', left: 'Tempo', right: 'Qué tan rápida o lenta es' },
          { id: 'i', left: 'Intensidad', right: 'Si suena fuerte o suave' },
          { id: 'c', left: 'Carácter', right: 'Qué emoción transmite' },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'hacer',
          prompt: 'Escucha el fragmento. ¿Cuál descripción es la más precisa?',
          explain: 'Suena una chirimía con un tambor, a un tempo lento y con un carácter solemne. Una descripción precisa nombra lo que se escucha.',
          media: {
            id: 's04-art-1-chirimia', kind: 'audio', title: 'Chirimía y tambor', duration: 20,
            alt: 'Una chirimía toca una melodía lenta y aguda acompañada por golpes graves y pausados de un tambor.',
            brief: 'Audio de 20 s: chirimía (oboe popular de madera) y tambor de cuero, grabados por intérpretes tradicionales con su permiso, melodía tradicional de dominio público o improvisación en estilo de procesión, tempo lento (≈60), intensidad moderada, carácter solemne. Sin voces. Registrar nombre de la comunidad en los créditos.',
          } },
        { options: [
          { id: 'a', text: 'Chirimía y tambor, tempo lento, carácter solemne' },
          { id: 'b', text: 'Marimba y contrabajo, tempo rápido, carácter festivo', feedback: 'Escucha de nuevo el timbre: es un instrumento de viento, no de teclas.' },
          { id: 'c', text: '"Suena bonito"', feedback: 'Es una opinión válida, pero no describe la música. Usa las cinco preguntas.' },
        ], correct: ['a'] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'hacer',
          prompt: 'Usa el fragmento suministrado de chirimía y tambor. Escribe su **ficha de escucha** con las cinco preguntas y tu **opinión con razones**; no necesitas buscar otra grabación.' },
        { minWords: 40, placeholder: 'Escuché… Suenan… El tempo es… La intensidad… Se cuenta en… Su carácter es… Me gusta porque…',
          model: 'Escuché el fragmento suministrado de chirimía y tambor. La chirimía produce una melodía aguda y el tambor marca golpes graves. El tempo es lento, la intensidad es moderada y se puede contar en dos. Su carácter me parece solemne porque deja pausas amplias. Me gusta porque ambos timbres se distinguen con claridad.',
          rubric: ['Nombra instrumentos o voces', 'Describe tempo e intensidad', 'Dice el compás o intenta contarlo', 'Describe el carácter', 'Da su opinión con al menos una razón'] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'convivir',
          prompt: 'Analiza esta **entrevista ficticia suministrada**. Una entrevista local a una persona mayor es una extensión estrictamente opcional.' },
        { goal: 'Descubrir cómo una persona de otra generación recuerda y valora la música, usando una fuente suministrada.',
          steps: [
            { title: 'Lee la fuente', detail: 'Entrevista ficticia: Rosa, de 68 años, recuerda que de niña oía marimba en la radio y en fiestas; reconoce teclas de madera y un ritmo bailable, y la valora porque reunía a su familia.' },
            { title: 'Recupera respuestas', detail: 'Anota qué música escuchaba Rosa, dónde la oía, qué instrumento nombra y por qué era importante para ella.' },
            { title: 'Compara', detail: 'Compara una respuesta de Rosa con la ficha del fragmento suministrado, sin afirmar que representan a todas las personas mayores.' },
            { title: 'Extensión opcional', detail: 'Solo si tienes acceso y permiso, puedes repetir las preguntas en una entrevista local; esta extensión no es requisito.' },
          ],
          evidence: 'Las cuatro respuestas recuperadas de la fuente suministrada y una comparación respetuosa.',
          rubric: ['Usé solo datos de la entrevista ficticia', 'Recuperé las cuatro respuestas', 'Comparé sin generalizar'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.1.2'], prompt: '¿Cuál es la diferencia entre **oír** y **escuchar** música?' },
        { options: [
          { id: 'a', text: 'Oír es percibir el sonido; escuchar es poner atención para comprenderlo' },
          { id: 'b', text: 'Oír es con audífonos y escuchar es con bocinas' },
          { id: 'c', text: 'No hay diferencia' },
        ], correct: ['a'] },
      ),
      S.match(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.1.2'], prompt: 'Une cada descripción con la palabra que le corresponde.' },
        { pairs: [
          { id: 'a', left: '"Suena una voz de niña y un coro"', right: 'Timbre' },
          { id: 'b', left: '"Va despacio, como caminando en procesión"', right: 'Tempo' },
          { id: 'c', left: '"Me transmite calma y respeto"', right: 'Carácter' },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Elegir con criterio ───────────────────────── */
  lesson({
    id: 's04-art-2',
    title: 'La música que elijo: mensajes, respeto y cuidado del oído',
    icon: 'Music',
    minutes: 15,
    gancho: 'Te sabes de memoria muchas canciones. Pero ¿alguna vez te has detenido a pensar **qué dicen** y **qué te hacen sentir**?',
    objetivos: [
      "Elegir música con criterios de mensaje, respeto y cuidado auditivo",
    ],
    resumen: [
      'La música que consumimos transmite ideas y valores. Por eso conviene escuchar la letra: ¿respeta a las personas o se burla de ellas, promueve la violencia o el cuidado?',
      'Valorar con criterio es dar razones: por su música (ritmo, melodía, instrumentos), por su letra y por lo que nos hace sentir.',
      'Cada persona tiene gustos distintos. Se pueden dar opiniones sin burlarse de lo que le gusta a otra persona. Escuchar músicas de otros pueblos y épocas amplía nuestro mundo.',
      'El oído se daña con sonidos muy fuertes por mucho tiempo. Usa volumen moderado, toma descansos y aléjate de las bocinas en fiestas.',
    ],
    media: {
      id: 's04-art-2-oido', kind: 'animation', title: 'Cómo cuidar tu oído', aspect: '16:9', duration: 45,
      alt: 'Dentro del oído, pequeñas células con forma de pelitos se mueven con el sonido. Con volumen moderado se balancean; con volumen muy fuerte y por mucho tiempo se doblan y se dañan.',
      brief: 'Animación 2D de 45 s, estilo amable, apta para 11-12 años. (1) Una niña con audífonos; zoom a su oído interno: células ciliadas dibujadas como hierbitas que se mecen con ondas suaves (volumen moderado). (2) El volumen sube mucho por largo rato: las hierbitas se doblan y algunas quedan caídas; rótulo "este daño no se recupera". (3) Consejos con íconos: bajar el volumen, descansar los oídos, alejarse de las bocinas, "si alguien a tu lado oye tu música desde tus audífonos, está muy fuerte". Sin cifras de decibeles. Narración en español, subtítulos.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['art'], cnb: ['art:3.1.2'], title: 'Idea central', prompt: 'Antes de usar música en una campaña, revisa su mensaje, el respeto y el cuidado del oído.' },
        { icon: 'BookOpenCheck', body: "La música que consumimos transmite ideas y valores. Por eso conviene escuchar la letra: ¿respeta a las personas o se burla de ellas, promueve la violencia o el cuidado?" },
      ),
      S.choice(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'ser',
          prompt: 'Una canción tiene un ritmo pegajoso, pero su letra se burla de las personas de un pueblo. ¿Qué piensas?',
          explain: 'Una canción es **música y mensaje**. Puede tener un ritmo que nos guste y, aun así, un mensaje que no compartimos. Aprender a notarlo es **valorar con criterio**.' },
        { options: [
          { id: 'a', text: 'Si el ritmo es bueno, la letra no importa', icon: 'Music', feedback: 'El ritmo importa, pero la letra también transmite ideas que repetimos sin darnos cuenta.' },
          { id: 'b', text: 'Puedo reconocer que el ritmo es pegajoso y, a la vez, no estar de acuerdo con su mensaje', icon: 'Scale' },
          { id: 'c', text: 'Toda la música moderna es mala', icon: 'X', feedback: 'Hay música moderna con mensajes muy valiosos. Se trata de escuchar cada canción con atención.' },
        ], correct: ['b'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'conocer', title: 'Tres preguntas para elegir con criterio',
          prompt: 'Además de describir la música (lo que aprendiste el lunes), puedes **valorarla** con estas preguntas. Toca cada tarjeta.' },
        { icon: 'Scale', body: 'Valorar con criterio no es juzgar a las personas por lo que escuchan: es **pensar** sobre lo que tú eliges escuchar y repetir.', reveal: [
          { icon: 'Music', front: '¿Cómo está hecha?', back: 'Su **música**: ritmo, melodía, instrumentos, voces. ¿Es creativa? ¿Está bien tocada? ¿Qué te llama la atención?' },
          { icon: 'MessageCircle', front: '¿Qué dice?', back: 'Su **letra y mensaje**: ¿respeta a mujeres, hombres y pueblos?, ¿habla de amor, de la tierra, de fiesta, de problemas?, ¿promueve la violencia o las drogas?' },
          { icon: 'Heart', front: '¿Qué me provoca?', back: 'Cómo te **hace sentir** y actuar: ¿te anima, te calma, te hace pensar, te hace sentir mal contigo o con otras personas?' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'convivir', title: 'Respeto por los gustos y oídos abiertos',
          prompt: 'En tu grado hay personas que prefieren marimba, otras reguetón, otras música cristiana o rock. ¿Cómo convivir? Toca cada tarjeta.' },
        { icon: 'Users', body: 'Cada persona tiene **derecho a sus gustos**. Lo que sí podemos hacer es opinar con respeto y **conocer más músicas**.', reveal: [
          { icon: 'MessageCircle', front: 'Opinar sin burlarse', back: 'Di "a mí no me gusta porque…" en lugar de "esa música es horrible". Critica la canción, no a la persona.' },
          { icon: 'Globe', front: 'Explorar', back: 'Escucha música de otros pueblos y épocas: marimba, música garífuna, sones, música de otros países. Tu gusto crece cuando conoce más.' },
          { icon: 'HandHeart', front: 'Valorar a quien la hace', back: 'Detrás de cada pieza hay horas de práctica. Aplaude a los músicos de tu comunidad y aprende de ellos.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'hacer', title: 'Ejemplo resuelto: una reseña con criterio',
          prompt: 'Mira cómo Diego valora una canción de moda usando las tres preguntas.' },
        { icon: 'NotebookPen', problem: 'A Diego le encanta una canción muy popular. Su maestra le pide una **reseña** corta con criterio.',
          steps: [
            { text: '**¿Cómo está hecha?** "Tiene un ritmo en 4 muy bailable y un coro fácil de cantar. Usa sonidos electrónicos y una guitarra."' },
            { text: '**¿Qué dice?** "Habla de salir de fiesta. En una parte dice que las mujeres solo sirven para verse bonitas."', why: 'Escuchar la letra con atención revela mensajes que al principio no notamos.' },
            { text: '**¿Qué me provoca?** "Me da energía, pero esa frase no me gusta: mi hermana y mis compañeras son mucho más que eso."' },
            { text: '**Conclusión:** "La música me gusta, pero no comparto parte del mensaje. Cuando la cante, voy a pensar en lo que digo."' },
          ],
          answer: 'Una reseña con criterio **separa la música del mensaje**, da **razones** y termina con una **decisión personal**.',
          tip: 'No hace falta prohibirse canciones: hace falta escuchar con la cabeza, no solo con los pies.' },
      ),
      S.sort(
        { fase: 'construir', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'ser',
          prompt: 'Clasifica cada comentario: ¿muestra una **valoración con criterio** o **no**?',
          hint: 'Una valoración con criterio da razones sobre la música, la letra o lo que provoca, y respeta a las personas.',
          explain: 'Los comentarios con criterio explican por qué y respetan a los demás. Burlarse o seguir la moda sin pensar no es valorar.' },
        { buckets: [
          { id: 'si', label: 'Con criterio', icon: 'ThumbsUp', color: 'var(--c-ok)' },
          { id: 'no', label: 'Sin criterio', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'c1', text: '"Me gusta porque la marimba y el violín dialogan muy bonito"', bucket: 'si' },
          { id: 'c2', text: '"La escucho porque todos la escuchan"', bucket: 'no' },
          { id: 'c3', text: '"El ritmo es bueno, pero la letra se burla de la gente del campo"', bucket: 'si' },
          { id: 'c4', text: '"Lo que tú escuchas es música de abuelitos, ja, ja"', bucket: 'no', feedback: 'Es una burla hacia la persona, no una opinión con razones.' },
          { id: 'c5', text: '"No me gusta mucho, pero reconozco que el grupo toca muy bien"', bucket: 'si' },
        ] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['art', 'fc'], cnb: ['art:3.1.2'], ambito: 'convivir',
          prompt: '¿Qué música elegirían para el acto de la escuela?' },
        { scene: { icon: 'Music', text: 'Tu grado prepara un acto sobre el **cuidado de la tierra**. **Sebastián** propone una canción de moda cuya letra se burla de las mujeres. **Ixchel** propone un son de marimba. **Keyla** propone una canción moderna con un mensaje positivo sobre la naturaleza.' }, options: [
          { id: 'a', icon: 'ThumbsUp', text: 'Usar la canción de moda porque "a todos les gusta"', consequence: 'Algunas compañeras se sienten ofendidas y el mensaje de la canción contradice el acto.', values: ['Consumo sin reflexión'], constructive: false },
          { id: 'b', icon: 'Music', text: 'Usar el son de marimba, que conecta con nuestra identidad', consequence: 'El público reconoce la música y el acto se siente muy nuestro.', values: ['Identidad', 'Valoración cultural'], constructive: true },
          { id: 'c', icon: 'Headphones', text: 'Escuchar juntos las tres opciones, analizar las letras y combinar la marimba con la canción de mensaje positivo', consequence: 'El grupo dialoga, aprende a escuchar con criterio y arma un acto que une tradición y música actual.', values: ['Pensamiento crítico', 'Diálogo', 'Respeto'], constructive: true },
        ] },
      ),
      S.tf(
        { fase: 'aplicar', areas: ['art', 'cnt'], cnb: ['art:3.1.2'], ambito: 'ser',
          prompt: 'Mira la animación sobre el oído. ¿Verdadero o falso?',
          explain: 'Las células del oído que captan el sonido se dañan con volúmenes muy altos por mucho tiempo, y ese daño no se recupera. Cuidar el volumen es parte de disfrutar la música toda la vida.' },
        { statements: [
          { text: 'Escuchar música muy fuerte por mucho tiempo puede dañar el oído para siempre.', answer: true },
          { text: 'Si alguien a tu lado oye la música de tus audífonos, el volumen está bien.', answer: false, why: 'Es señal de que está demasiado fuerte.' },
          { text: 'Tomar descansos y alejarse de las bocinas en una fiesta ayuda a cuidar el oído.', answer: true },
        ] },
      ),
      S.project(
        { fase: 'aplicar', areas: ['art'], cnb: ['art:3.1.2'], ambito: 'ser',
          prompt: 'Arma una **lista de música con criterio** a partir de las tres fichas suministradas. Explorar música local después es opcional.' },
        { goal: 'Valorar tres piezas ficticias descritas en fichas autosuficientes, sin buscar grabaciones.',
          steps: [
            { title: 'Ficha A', detail: 'Son de marimba instrumental, tempo moderado y carácter festivo; no tiene letra.' },
            { title: 'Ficha B', detail: 'Canción ficticia con guitarra, tempo lento y letra respetuosa sobre cuidar un río.' },
            { title: 'Ficha C', detail: 'Canción ficticia de ritmo rápido cuya letra se burla de las personas del campo.' },
            { title: 'Decide', detail: 'Ordena las fichas, marca cuáles usarías en un acto escolar y explica una razón sobre música, mensaje o emoción.' },
          ],
          evidence: 'Tu lista de tres fichas suministradas con una decisión y una razón por cada una.',
          rubric: ['Revisé las tres fichas', 'Di razones sobre música, mensaje o emoción', 'Elegí sin burlarme de otros gustos'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.1.2'], prompt: '¿Qué comentario muestra una **valoración crítica** de una canción?' },
        { options: [
          { id: 'a', text: '"Es la mejor porque es la más famosa"' },
          { id: 'b', text: '"Me gusta su melodía, pero su letra promueve la violencia y no la comparto"' },
          { id: 'c', text: '"Esa música es para gente aburrida"' },
        ], correct: ['b'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['art'], cnb: ['art:3.1.2'], prompt: 'Vas a una fiesta con bocinas muy grandes. ¿Qué haces para cuidar tu oído? Elige todas las correctas.' },
        { multiple: true, options: [
          { id: 'a', text: 'Me alejo de las bocinas' },
          { id: 'b', text: 'Salgo a descansar del ruido de vez en cuando' },
          { id: 'c', text: 'Me pego a la bocina para oír mejor' },
          { id: 'd', text: 'Subo al máximo mis audífonos al volver a casa' },
        ], correct: ['a', 'b'] },
      ),
      cierre({ areas: ['art'], cnb: ['art:3.1.2'] },
        ['Describo una pieza por sus instrumentos, tempo, intensidad, compás y carácter', 'Valoro la música con razones sobre su música, su letra y lo que me provoca', 'Respeto los gustos de otras personas y cuido mi oído'],
        ['Escucharé con atención una pieza nueva cada semana', 'Pondré atención a las letras que canto', 'Mantendré un volumen moderado']),
    ],
  }),
];
