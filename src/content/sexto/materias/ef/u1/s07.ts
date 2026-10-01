/**
 * Educación Física · Unidad 1 · Semana 7 — Juego limpio y tiempo libre activo.
 * Progresión: respetar las normas y las decisiones de árbitros y jueces, y anteponer los intereses
 * del equipo a los personales → organizar la actividad física como disfrute y ocio: planificar una
 * sesión de juego (calentamiento, juego, vuelta a la calma) para la familia o la comunidad.
 */
import { lesson, S, cierre } from '../../../../dsl';

export default [
  /* ───────────────────────── 1. Juego limpio ───────────────────────── */
  lesson({
    id: 's07-ef-1',
    title: 'Juego limpio: reglas, árbitros y equipo',
    icon: 'Handshake',
    minutes: 15,
    gancho: 'Imagina un partido donde nadie respeta las reglas y todos discuten cada decisión del árbitro. ¿Sería divertido jugarlo?',
    objetivos: [
      'Aplicar juego limpio y decisiones cooperativas durante un reto de equipo',
    ],
    resumen: [
      'Las reglas hacen que el juego sea justo, seguro y posible: todos saben qué se vale y qué no.',
      'El árbitro o juez hace cumplir las reglas. Sus decisiones se respetan; si no estás de acuerdo, el capitán puede preguntar con calma y respeto. Nunca se insulta ni se amenaza.',
      'Juego limpio: jugar para ganar sin hacer trampa, ayudar al que se cae, reconocer tus faltas, saludar al rival al final y aceptar el resultado.',
      'Anteponer al equipo: pasar a quien está mejor ubicado, cumplir tu posición, animar a quien se equivoca y celebrar los logros del grupo.',
    ],
    media: {
      id: 's07-ef-1-juego-limpio', kind: 'video', title: 'Momentos de juego limpio', aspect: '16:9', duration: 50,
      alt: 'Escenas de un partido escolar: una niña pasa a un compañero mejor ubicado que anota; un niño ayuda a levantarse a un rival caído; el capitán pregunta con calma a la árbitra; al final ambos equipos se saludan.',
      brief: 'Video de 50 s de un partido escolar mixto de fútbol o balonmano, recreado con estudiantes (rostros no protagonistas). Cuatro momentos con rótulo: (1) "Pienso en el equipo"; (2) "Ayudo al rival"; (3) "Respeto al árbitro"; (4) "Saludo final". Añadir narración breve, subtítulos completos, rótulos grandes y contraste alto. Sin gestos agresivos ni música que cubra las voces.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:4.1.8', 'ef:4.1.4'], title: 'Reglas para cooperar',
          prompt: 'Las reglas, el arbitraje y la comunicación permiten un juego seguro. Cooperar implica pasar, incluir y resolver desacuerdos con calma.' },
        { icon: 'UsersRound', body: 'Practicarás decisiones de equipo en un reto breve inspirado en transportar agua sin derramarla.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.1.8'], ambito: 'convivir',
          prompt: '¿Para qué sirven las **reglas** en un juego?',
          explain: 'Las reglas hacen que el juego sea **justo** (las mismas para todos), **seguro** (evitan golpes y lesiones) y **posible** (todos saben qué hacer). Sin reglas, cada quien jugaría a otra cosa.' },
        { options: [
          { id: 'a', text: 'Para que el juego sea justo, seguro y todos sepan qué se vale', icon: 'Scale' },
          { id: 'b', text: 'Para que siempre gane el más fuerte', icon: 'Dumbbell', feedback: 'Al contrario: las reglas dan las mismas oportunidades a todos.' },
          { id: 'c', text: 'Para que el juego sea aburrido', icon: 'Minus', feedback: 'Las reglas son las que hacen interesante el reto.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.1.8'], ambito: 'convivir', title: 'Reglas, árbitros y jueces',
          prompt: 'Toca cada tarjeta para descubrir cómo funciona el respeto en el deporte.',
          media: {
            id: 's07-ef-1-senas', kind: 'image', title: 'Señales del árbitro', aspect: '4:3',
            alt: 'Una niña árbitra con silbato muestra cuatro señas sencillas: brazo extendido indicando la dirección del saque, brazo arriba para falta, manos girando para pasos y palma abierta hacia abajo para calmar.',
            brief: 'Ilustración horizontal 1600×900 en cuadrícula 2×2 de una niña árbitra escolar con silbato y camiseta de color distinto: (1) brazo extendido: "saque"; (2) brazo arriba: "falta"; (3) antebrazos girando: "pasos"; (4) palmas hacia abajo: "calma". Estilo plano, rótulos grandes y contraste alto. Nota legible: "Las señas oficiales varían según el deporte".',
          } },
        { icon: 'Gavel', body: 'El **árbitro** (en juegos como fútbol o balonmano) o el **juez** (en carreras, saltos o gimnasia) hace cumplir las reglas. Es una persona que también puede equivocarse, pero **sin árbitro no hay juego**.', reveal: [
          { icon: 'Scale', front: 'Las reglas', back: 'Se acuerdan **antes** de jugar y valen **para todos** por igual. Si no te gustan, se proponen cambios **después**, no a mitad del partido.' },
          { icon: 'Flag', front: 'La decisión del árbitro', back: 'Se **respeta**, aunque no estés de acuerdo. El juego sigue. Reclamar con gritos o gestos solo empeora las cosas.' },
          { icon: 'MessageCircle', front: 'Si no estás de acuerdo', back: 'El **capitán** o la capitana pregunta **con calma**: "¿Qué falta marcó?". Se escucha la respuesta y se sigue jugando.' },
          { icon: 'X', front: 'Nunca', back: 'Insultar, amenazar o empujar al árbitro, a los rivales o a tus compañeros. Tampoco fingir faltas para engañar.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.1.4'], ambito: 'convivir', title: 'Primero el equipo',
          prompt: 'En un deporte de equipo, **nadie gana solo**. Toca cada tarjeta.' },
        { icon: 'Users', body: 'Anteponer los intereses del equipo significa elegir **lo que ayuda al grupo**, aunque tú no te luzcas.', reveal: [
          { icon: 'Share2', front: 'Pasar al mejor ubicado', back: 'Si un compañero tiene más posibilidad de anotar, **le pasas**. El gol es de todo el equipo.' },
          { icon: 'MapPin', front: 'Cumplir tu posición', back: 'Si te tocó defender, **defiendes**, aunque quieras atacar. Si todos van a la pelota, el equipo queda desordenado.' },
          { icon: 'HeartHandshake', front: 'Animar', back: 'Cuando alguien se equivoca, lo **animas** ("¡la próxima!") en lugar de reclamarle.' },
          { icon: 'RefreshCw', front: 'Turnos justos', back: 'Todos juegan y todos descansan. Nadie se queda siempre en la banca ni siempre en la cancha.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.1.4', 'ef:4.1.8'], ambito: 'convivir', title: 'Ejemplo resuelto: una jugada con decisiones',
          prompt: 'Mira las decisiones que toma Marcos en el último minuto de un partido de balonmano.' },
        { icon: 'Brain', problem: 'El partido va empatado. Marcos tiene la pelota lejos de la portería y dos defensores enfrente. Su compañera Keyla está libre, cerca del área.',
          steps: [
            { text: 'Marcos quiere anotar para lucirse, pero ve que **Keyla está mejor ubicada**. Le hace un **pase con pique** entre los defensores.', why: 'Anteponer al equipo: la mejor opción para el grupo es la de Keyla.' },
            { text: 'Keyla lanza, pero la árbitra marca **falta de pasos**. El equipo protesta.' },
            { text: 'Marcos, que es capitán, pide calma y pregunta: "¿Cuántos pasos dio?". La árbitra responde: "Cuatro". Marcos acepta y organiza la defensa.', why: 'Respeto a la decisión: se pregunta con calma y el juego sigue.' },
            { text: 'Al final empatan. Los equipos se saludan y Marcos le dice a Keyla: "Buen movimiento; la próxima entra".' },
          ],
          answer: 'Marcos antepone al equipo (pasa al mejor ubicado), respeta al árbitro (pregunta con calma) y anima a su compañera.',
          tip: 'Pregúntate en cada jugada: "¿Qué es lo mejor para mi equipo ahora?".' },
      ),
      S.sort(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:4.1.4', 'ef:4.1.8'], ambito: 'convivir',
          prompt: 'Clasifica cada actitud: ¿es **juego limpio** o **no**?',
          hint: 'Piensa si la actitud respeta las reglas, al árbitro, al rival y al propio equipo.',
          explain: 'El juego limpio respeta las reglas y a las personas, y pone al equipo antes que el lucimiento personal.' },
        { buckets: [
          { id: 'si', label: 'Juego limpio', icon: 'Handshake', color: 'var(--c-ok)' },
          { id: 'no', label: 'No es juego limpio', icon: 'X', color: 'var(--c-maiz-strong)' },
        ], items: [
          { id: 'x1', text: 'Ayudar a levantarse a un rival que se cayó', bucket: 'si' },
          { id: 'x2', text: 'Fingir una falta para engañar al árbitro', bucket: 'no' },
          { id: 'x3', text: 'Pasar a un compañero mejor ubicado', bucket: 'si' },
          { id: 'x4', text: 'Gritarle al árbitro cuando marca en contra', bucket: 'no' },
          { id: 'x5', text: 'Reconocer que tocaste la pelota con la mano', bucket: 'si' },
          { id: 'x6', text: 'Burlarse del equipo que perdió', bucket: 'no' },
        ] },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:4.1.4', 'ef:4.1.8'], ambito: 'convivir',
          prompt: '¡Partido con tarjeta verde! Tras un minuto de calentamiento, jueguen **4 minutos** de fútbol, balonmano o "10 pases". Una persona arbitra los primeros 2 minutos y se realiza **un cambio de árbitro** para los últimos 2. El árbitro puede dar tarjeta verde por ayudar, pasar al mejor ubicado o reconocer una falta. **Poco espacio:** "10 pases". **Adaptación:** los dos turnos arbitrales pueden hacerse de pie o sentados; el resto tendrá otras oportunidades en clases futuras. **Al final:** saludo, estiramiento y agua.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después del calentamiento', exercise: { name: 'Trote y pases', icon: 'Footprints', seconds: 60 } },
          { label: 'Después del partido con una rotación arbitral', exercise: { name: 'Minipartido con tarjeta verde y cambio de árbitro', icon: 'Flag', seconds: 240 } },
        ] },
      ),
      S.dilemma(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:4.1.4', 'ef:4.1.8'], ambito: 'convivir',
          prompt: 'En el torneo de la escuela, ¿qué harías tú?' },
        { scene: { icon: 'Flag', text: 'Faltan dos minutos y tu equipo va perdiendo. La árbitra, una estudiante de quinto grado, no ve que un rival tocó la pelota con la mano. Tus compañeros empiezan a gritarle y uno dice: "¡Vamos a devolverles la trampa!".' }, options: [
          { id: 'a', icon: 'Megaphone', text: 'Unirme a los gritos contra la árbitra', consequence: 'La árbitra se siente humillada, el partido se detiene y el ambiente se vuelve agresivo. Nadie disfruta.', values: ['Enojo sin control'], constructive: false },
          { id: 'b', icon: 'X', text: 'Hacer trampa también para "emparejar"', consequence: 'El error se multiplica: ahora hay dos injusticias y el juego pierde sentido.', values: ['Revancha'], constructive: false },
          { id: 'c', icon: 'Handshake', text: 'Pedir calma, que la capitana pregunte con respeto y seguir jugando con más ganas', consequence: 'La árbitra explica que no lo vio. El equipo se concentra, juega limpio hasta el final y todos terminan orgullosos de su actitud.', values: ['Respeto', 'Autocontrol', 'Juego limpio'], constructive: true },
        ] },
      ),
      S.choice(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:4.1.4'], ambito: 'convivir',
          prompt: 'Eres delantera y tienes el balón. Tu compañero está solo frente a la portería y tú tienes a dos defensores encima. ¿Qué haces?',
          explain: 'Pasar al compañero mejor ubicado es anteponer los intereses del equipo: aumenta la posibilidad de anotar.' },
        { options: [
          { id: 'a', text: 'Le paso a mi compañero, que está mejor ubicado' },
          { id: 'b', text: 'Intento driblar a los dos defensores para lucirme', feedback: 'Es posible, pero es menos probable que funcione y el equipo pierde una buena oportunidad.' },
          { id: 'c', text: 'Me quedo con el balón hasta que se vayan los defensores', feedback: 'Así el equipo pierde tiempo y la oportunidad.' },
        ], correct: ['a'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.1.8'], prompt: 'El árbitro marca una falta que tú crees que no fue. ¿Qué es lo correcto?' },
        { options: [
          { id: 'a', text: 'Respetar la decisión; si hace falta, el capitán pregunta con calma' },
          { id: 'b', text: 'Gritarle hasta que cambie la decisión' },
          { id: 'c', text: 'Salirme del juego enojado' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:4.1.4', 'ef:4.1.8'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Anteponer al equipo significa pasar a quien está mejor ubicado para anotar.', answer: true },
          { text: 'Fingir una falta es una forma válida de ganar.', answer: false, why: 'Es engañar: va contra el juego limpio.' },
          { text: 'Saludar al rival al final del partido es parte del juego limpio.', answer: true },
        ] },
      ),
    ],
  }),

  /* ───────────────────────── 2. Tiempo libre activo ───────────────────────── */
  lesson({
    id: 's07-ef-2',
    title: 'Tiempo libre activo: organizar el juego para disfrutar',
    icon: 'PartyPopper',
    minutes: 15,
    gancho: 'Después de clases y los fines de semana tienes tiempo libre. ¿Cuánto de ese tiempo pasas moviéndote y jugando, y cuánto frente a una pantalla?',
    objetivos: [
      'Organizar una sesión recreativa breve, segura e incluyente',
    ],
    resumen: [
      'El ocio es el tiempo libre que usamos para descansar y disfrutar. Jugar, descansar y recrearse es un derecho de niñas y niños (Convención sobre los Derechos del Niño, artículo 31).',
      'La Organización Mundial de la Salud recomienda que niñas, niños y adolescentes hagan, en promedio, al menos 60 minutos diarios de actividad física moderada a intensa.',
      'Una sesión de juego bien organizada tiene: calentamiento (5 a 10 min), juego principal y vuelta a la calma (estiramiento y agua). Se eligen juegos según el espacio, los materiales y las personas.',
      'La actividad física para disfrutar es incluyente (todos participan), segura (lugar despejado, agua, ropa adecuada) y cuida el ambiente (dejar el lugar limpio).',
    ],
    media: {
      id: 's07-ef-2-tarde', kind: 'image', title: 'Una tarde de juego en la comunidad', aspect: '16:9',
      alt: 'En una cancha de tierra de una aldea, niñas, niños, personas mayores y un niño en silla de ruedas juegan distintos juegos: salta cuerda, pases de pelota, carrera de costales. Un cartel dice "Tarde activa: calentamiento, juegos y calma".',
      brief: 'Ilustración horizontal 1600×900, estilo cuento, de una tarde en una cancha comunitaria de tierra. Estaciones: cuerda, pases de pelota con un niño en silla de ruedas, carrera de costales y tenta. Cartel con texto grande: "Tarde activa: 1. Calentamiento 2. Juegos 3. Calma". Incluir agua y bote de basura. Contraste alto, figuras legibles, diversidad de pueblos y edades sin estereotipos; ropa cotidiana.',
    },
    steps: [
      S.explain(
        { fase: 'explorar', areas: ['ef'], cnb: ['ef:3.2.3'], title: 'Una sesión tiene estructura',
          prompt: 'Calentamiento, juego principal, pausas de hidratación y vuelta a la calma cumplen funciones distintas.' },
        { icon: 'Footprints', body: 'Una propuesta recreativa también adapta espacio, intensidad y reglas para que todas las personas participen.' },
      ),
      S.choice(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:3.2.3'], ambito: 'ser',
          prompt: '¿Cuánta actividad física recomienda la Organización Mundial de la Salud para niñas y niños de tu edad?',
          explain: 'Al menos **60 minutos al día**, en promedio, de actividad moderada a intensa (que te haga respirar más rápido). Pueden sumarse en varios ratos: caminar a la escuela, jugar en el recreo, un partido por la tarde.' },
        { options: [
          { id: 'a', text: 'Al menos 60 minutos al día', icon: 'Clock' },
          { id: 'b', text: '10 minutos a la semana', icon: 'Timer', feedback: 'Es muy poco. La recomendación es diaria y mucho mayor.' },
          { id: 'c', text: 'Solo en la clase de Educación Física', icon: 'School', feedback: 'La clase ayuda, pero no alcanza: el tiempo libre activo es clave.' },
        ], correct: ['a'] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:3.2.3'], ambito: 'conocer', title: 'Moverse para disfrutar',
          prompt: 'La actividad física no es solo para competir o para la clase: también es **disfrute y ocio**. Toca cada tarjeta.' },
        { icon: 'Smile', body: 'El **ocio** es el tiempo libre que usamos para descansar y disfrutar. Jugar, descansar y recrearse es un **derecho** de niñas y niños (Convención sobre los Derechos del Niño, artículo 31).', reveal: [
          { icon: 'HeartPulse', front: 'Para el cuerpo', back: 'Fortalece corazón, músculos y huesos, y ayuda a dormir mejor.' },
          { icon: 'Brain', front: 'Para la mente', back: 'Mejora el ánimo, reduce el estrés y ayuda a concentrarte en tus estudios.' },
          { icon: 'Users', front: 'Para convivir', back: 'Compartir juegos con familia, amigos y vecinos crea confianza y amistad.' },
          { icon: 'Tv', front: 'Pantallas con medida', back: 'Mucho tiempo sentado frente a pantallas quita tiempo al movimiento. Busca el equilibrio: alterna pantalla y juego activo.' },
        ] },
      ),
      S.explain(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:3.2.3'], ambito: 'emprender', title: 'Cómo organizar una sesión de juego',
          prompt: 'Organizar actividad física es como preparar una receta: se necesita un plan. Toca cada paso.' },
        { icon: 'ClipboardList', body: 'Una sesión bien organizada es **segura**, **incluyente** y **divertida** para todas las personas que participan.', reveal: [
          { icon: 'Users', front: '1. ¿Para quiénes?', back: 'Edades, cuántas personas, si alguien necesita adaptaciones. El juego debe ser para **todos**.' },
          { icon: 'MapPin', front: '2. ¿Dónde y con qué?', back: 'Un lugar **despejado y seguro** (patio, cancha, calle cerrada con permiso) y materiales sencillos: pelotas, cuerdas, costales, tiza.' },
          { icon: 'ListOrdered', front: '3. Tres partes', back: '**Calentamiento** (5 a 10 min), **juegos principales** (20-40 min, con turnos y descansos) y **vuelta a la calma** (estiramiento, respiración, agua).' },
          { icon: 'ShieldCheck', front: '4. Seguridad y ambiente', back: 'Agua, ropa adecuada, una persona adulta responsable, y dejar el lugar **limpio** al terminar.' },
        ] },
      ),
      S.ejemplo(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:3.2.3'], ambito: 'emprender', title: 'Ejemplo resuelto: la tarde activa del sábado',
          prompt: 'Mira cómo Rosa organiza una tarde de juego para su familia y sus vecinos.' },
        { icon: 'CalendarDays', problem: 'Rosa quiere organizar una tarde activa de **una hora** para 10 personas de 6 a 70 años, en la cancha de la aldea. Tiene una pelota, una cuerda larga y dos costales.',
          steps: [
            { text: '**Para quiénes:** niñas, niños, jóvenes, su mamá y su abuelo. Elige juegos donde todos puedan participar a su ritmo.' },
            { text: '**Calentamiento (10 min):** caminar en círculo, rotar hombros, rodillas y tobillos, y "sigue al líder" con movimientos suaves.' },
            { text: '**Juegos principales (40 min):** salta cuerda (el abuelo da vuelta a la cuerda y cuenta), carrera de costales en parejas y pases en círculo diciendo nombres. Cada 10 minutos, pausa para tomar agua.', why: 'Cambiar de juego mantiene la diversión; las pausas cuidan a todos.' },
            { text: '**Vuelta a la calma (10 min):** estiramientos y respiración lenta. Cada quien dice qué juego le gustó más.' },
            { text: '**Cierre:** recogen materiales y basura. Acuerdan repetirlo el próximo sábado.' },
          ],
          answer: 'Una sesión de **una hora** con **calentamiento, juegos y vuelta a la calma**, incluyente, segura y cuidando el lugar.',
          tip: 'Pregunta a las personas mayores qué juegos jugaban: ¡pueden enseñarte algunos nuevos!' },
      ),
      S.order(
        { fase: 'construir', areas: ['ef'], cnb: ['ef:3.2.3'], ambito: 'emprender',
          prompt: 'Ordena las partes de una sesión de juego bien organizada.',
          hint: 'Primero se prepara el cuerpo, al final se recupera la calma y se limpia.',
          explain: 'Planificar → calentamiento → juegos con pausas de agua → vuelta a la calma → recoger y limpiar.' },
        { items: [
          { id: 'a', text: 'Planificar: quiénes, dónde y con qué materiales' },
          { id: 'b', text: 'Calentamiento' },
          { id: 'c', text: 'Juegos principales con pausas para tomar agua' },
          { id: 'd', text: 'Vuelta a la calma: estiramiento y respiración' },
          { id: 'e', text: 'Recoger materiales y dejar el lugar limpio' },
        ], labels: { start: 'Primero', end: 'Al final' } },
      ),
      S.number(
        { fase: 'aplicar', areas: ['ef', 'mat'], cnb: ['ef:3.2.3'], ambito: 'ser',
          prompt: 'Supongamos que un día Pedro camina **15 minutos** a la escuela, juega **20 minutos** en el recreo y camina **15 minutos** de regreso. ¿Cuántos minutos **le faltan** para llegar a los 60 minutos recomendados?',
          explain: '15 + 20 + 15 = 50 minutos. 60 − 50 = **10 minutos**. Un juego corto por la tarde completaría la meta.' },
        { answer: 10, unit: 'minutos', misconceptions: [
          { value: 50, msg: '50 son los minutos que ya hizo. La pregunta es cuántos le faltan para 60.' },
          { value: 25, msg: 'Revisa la suma: cuenta las dos caminatas de 15 minutos.' },
        ] },
      ),
      S.pulse(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:3.2.3'], ambito: 'hacer',
          prompt: '¡Prueba una mini sesión para disfrutar! **Calentamiento (1 min):** camina y rota articulaciones. **Juego (2 min):** elige uno que te guste: saltar cuerda, bailar una canción alegre, "sigue al líder" con alguien de tu familia o pases con una pelota. **Vuelta a la calma (1 min):** estira y respira lento. Mide tu pulso en cada parte. **Poco espacio:** baile o salta cuerda imaginaria en tu lugar. **Adaptación:** baile sentado o pases con los brazos.' },
        { seconds: 15, rounds: [
          { label: 'En reposo' },
          { label: 'Después del juego que elegiste', exercise: { name: 'Mi juego favorito', icon: 'PartyPopper', seconds: 120 } },
          { label: 'Después de la vuelta a la calma', exercise: { name: 'Estiramiento y respiración lenta', icon: 'Wind', seconds: 60 } },
        ] },
      ),
      S.write(
        { fase: 'aplicar', areas: ['ef'], cnb: ['ef:3.2.3'], ambito: 'emprender',
          prompt: 'Planifica una sesión breve del caso: calentamiento, un juego, vuelta a la calma, seguridad y adaptación inclusiva.' },
        { minWords: 30, placeholder: 'Calentamiento: … Juego: … Calma: … Seguridad: … Adaptación: …',
          model: 'Mi tarde activa será para mis primos pequeños y mis vecinos, el domingo en el patio de la iglesia, con una pelota, una cuerda y tiza. Calentamiento: caminar en círculo y mover brazos y piernas como animales. Juegos: avioncito dibujado con tiza y "pelota caliente" pasándola en círculo. Vuelta a la calma: estirarnos como árboles y respirar lento. Seguridad: llevaré un garrafón de agua y mi tía nos cuidará. Para que todos participen, los más pequeños lanzarán desde más cerca.',
          rubric: ['Dice para quiénes, dónde y con qué materiales', 'Incluye calentamiento, al menos 2 juegos y vuelta a la calma', 'Tiene una medida de seguridad', 'Propone una forma de incluir a todos'] },
      ),
      S.choice(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:3.2.3'], prompt: '¿Cuál es el orden correcto de una sesión de juego?' },
        { options: [
          { id: 'a', text: 'Calentamiento → juegos → vuelta a la calma' },
          { id: 'b', text: 'Juegos → calentamiento → vuelta a la calma' },
          { id: 'c', text: 'Vuelta a la calma → juegos → calentamiento' },
        ], correct: ['a'] },
      ),
      S.tf(
        { fase: 'comprobar', areas: ['ef'], cnb: ['ef:3.2.3'], prompt: '¿Verdadero o falso?' },
        { statements: [
          { text: 'Jugar y recrearse es un derecho de niñas y niños.', answer: true },
          { text: 'Una actividad para disfrutar debe dejar fuera a quienes juegan más lento.', answer: false, why: 'Debe ser incluyente: se adaptan las reglas para que todos participen.' },
          { text: 'Al terminar la actividad hay que dejar el lugar limpio.', answer: true },
        ] },
      ),
      cierre({ areas: ['ef'], cnb: ['ef:3.2.3'] },
        ['Respeto las reglas y las decisiones de árbitros y jueces', 'Pongo al equipo antes que mi lucimiento personal', 'Organizo una sesión de juego segura e incluyente para disfrutar'],
        ['Daré "tarjetas verdes" de juego limpio a mis compañeros', 'Sumaré 60 minutos de movimiento al día', 'Organizaré una tarde activa con mi familia o mis vecinos']),
    ],
  }),
];
