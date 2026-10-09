import { lesson, S } from '../../../dsl';
import plan from '../../plan.json';
import cnb from '../../../../cnb/generated/sexto-grado.json';
type UnitTwoArea = 'cnt' | 'ccss' | 'l3' | 'ef';

// Each entry asks about a fresh case, distinct from the worked example and the weekly theme.
const focusedQuestions: Record<string, [string, string, string][]> = {
  'cnt-11': [
    ['Según el Popol Vuh, ¿qué papel tiene la palabra de los creadores antes de que aparezcan montañas y valles?', 'Tepeu y Gucumatz conversan y por su palabra se forma la tierra.', 'La tierra ya estaba formada y los creadores solo le ponen nombres.'],
    ['Una planta acuática forma alimento bajo una lámpara. ¿Qué organelo usa la energía luminosa?', 'El cloroplasto.', 'La mitocondria, que capta la luz directamente.'],
    ['En una camada de gatos aparecen ojos de distintos colores. ¿Qué puede influir en ese rasgo heredado?', 'La información de los genes en su ADN.', 'Solo la cantidad de agua que recibió la madre.'],
  ],
  'cnt-12': [
    ['Un hongo ayuda a una raíz a captar agua y recibe azúcares. ¿Qué relación describe?', 'Mutualismo: ambos organismos se benefician.', 'Comensalismo: solo el hongo se beneficia y la raíz no cambia.'],
    ['Una bacteria y una levadura son unicelulares. ¿Cuál tiene núcleo delimitado?', 'La levadura, que es eucariota.', 'La bacteria, que es procariota.'],
    ['En un ambiente seco sobreviven más plantas con raíces profundas. ¿Qué explica el cambio de frecuencia con generaciones?', 'Una adaptación heredable favorecida por ese ambiente.', 'Cada planta cambió sus genes por necesidad durante su vida.'],
  ],
  'cnt-13': [
    ['Después de comer, el cuerpo regula la glucosa. ¿Qué glándula produce una hormona importante para ello?', 'El páncreas produce insulina.', 'La tiroides produce insulina.'],
    ['En un esquema del aparato reproductor femenino, ¿qué estructura produce óvulos?', 'Los ovarios.', 'El útero.'],
    ['¿Qué dos células se unen durante la fecundación humana?', 'Un óvulo y un espermatozoide.', 'Un óvulo y una célula de la piel.'],
  ],
  'cnt-14': [
    ['Una amiga con VIH comparte mesa y cubiertos con su clase. ¿Hay transmisión por ese contacto?', 'No; compartir mesa y cubiertos no transmite el VIH.', 'Sí; compartir cubiertos puede transmitirlo.'],
    ['Alguien ofrece una sustancia desconocida. ¿Qué decisión cuida tu salud?', 'Rechazarla y acudir a una persona adulta de confianza.', 'Probarla para averiguar si es peligrosa.'],
    ['Una comunidad analiza tráfico de drogas. ¿Qué dos dimensiones debe considerar?', 'Daños a la convivencia y consecuencias legales.', 'Solo los efectos individuales de salud, sin revisar convivencia ni leyes.'],
  ],
  'cnt-15': [
    ['Una comida incluye frijoles y tortilla. ¿Qué función cumplen principalmente las proteínas de los frijoles?', 'Ayudan a construir y reparar tejidos.', 'Aportan solo energía rápida, igual que los carbohidratos.'],
    ['Además de nutrientes, ¿qué componente protector puede aportar la leche materna?', 'Contiene componentes que ayudan a proteger al lactante.', 'Solo aporta energía y no contiene componentes protectores.'],
    ['Una niña quiere más energía para jugar. ¿Qué plan es más equilibrado?', 'Combinar alimentos variados y suficientes según sus necesidades.', 'Comer únicamente un alimento todos los días.'],
  ],
  'cnt-16': [
    ['Una quebrada contaminada riega cultivos y abastece animales. ¿A quién puede afectar?', 'A personas, animales y plantas.', 'Solo a quienes beben el agua, sin efectos en cultivos ni animales.'],
    ['Un barrio quema basura al aire libre. ¿Qué recurso puede deteriorarse?', 'La calidad del aire y la salud respiratoria.', 'Solo el suelo, porque el humo desaparece sin afectar el aire.'],
    ['Una ladera se reforesta. ¿Qué seguimiento hace más probable que sobrevivan los árboles?', 'Elegir especies adecuadas y cuidar agua y suelo después de plantar.', 'Elegir el árbol que crece más rápido y no revisar el sitio.'],
  ],
  'cnt-17': [
    ['Un rumor atribuye todas las muertes locales a una sola causa. ¿Qué se necesita para comprobarlo?', 'Registros confiables de causas durante un período definido.', 'Una anécdota sin fecha ni fuente.'],
    ['Al caminar, los músculos trabajan. ¿De dónde proviene parte de la energía que usan?', 'De la energía química de los alimentos.', 'Solo del aire inhalado, aunque no haya nutrientes.'],
    ['Una estufa de gas calienta agua. ¿Qué ocurre al quemar ese combustible?', 'Libera energía y también gases a la atmósfera.', 'Produce energía sin ninguna emisión.'],
  ],
  'cnt-18': [
    ['Aumentan las emisiones de dióxido de carbono durante décadas. ¿Qué fenómeno puede intensificarse?', 'El calentamiento por efecto invernadero.', 'El enfriamiento global porque el CO₂ deja escapar todo el calor.'],
    ['Al estudiar cómo influye la luz en una planta, ¿qué variable conviene mantener igual?', 'La cantidad de agua, para aislar el efecto de la luz.', 'Todas las variables deben cambiar al mismo tiempo.'],
    ['Dos explicaciones de una inundación discrepan. ¿Qué permite decidir cuál tiene mejor apoyo?', 'Comparar observaciones y pruebas revisables.', 'Elegir la que suena más segura sin revisar datos.'],
  ],
  'ccss-11': [
    ['Para comparar dos continentes, ¿qué datos son útiles?', 'Ubicación, extensión y distribución de población.', 'Solo su superficie, sin considerar ubicación ni habitantes.'],
    ['Un mapa muestra una cordillera y un volcán cerca de poblados. ¿Para qué sirve localizarlos?', 'Para comprender el relieve y posibles riesgos para habitantes.', 'Para concluir que todo el continente tiene el mismo relieve.'],
    ['Una región enfrenta sequías frecuentes. ¿Qué conjunto de datos ayuda a entender su vida económica?', 'Clima, recursos naturales y usos del territorio.', 'Solo la cantidad de habitantes, sin revisar agua ni actividades.'],
  ],
  'ccss-12': [
    ['Guatemala y otro país tienen distintas fuentes de agua. ¿Qué comparación es justa?', 'Revisar cantidad, acceso y uso del recurso en ambos lugares.', 'Suponer que son idénticos por estar en América.'],
    ['Una política protege un bosque pero limita un cultivo. ¿Qué debe evaluarse?', 'Efectos ambientales y sociales para las personas involucradas.', 'Solo la producción del cultivo, sin considerar el bosque ni a la población.'],
    ['Una nueva tecnología acelera cosechas pero aumenta residuos. ¿Qué análisis corresponde?', 'Comparar beneficios, costos y efectos sobre población y ambiente.', 'Afirmar que la tecnología siempre mejora todo.'],
  ],
  'ccss-13': [
    ['Una comunidad produce tejidos para vender. ¿Qué actividad representa?', 'Una actividad productiva y comercial.', 'Solo una actividad cultural, sin producción ni intercambio económico.'],
    ['Un niño trabaja jornadas peligrosas y falta a clase. ¿Qué oportunidad se afecta?', 'Su educación y desarrollo.', 'Solo su tiempo de ocio, sin efectos en educación o salud.'],
    ['Un libro omite a las mujeres de la historia regional. ¿Qué conviene investigar?', 'Sus aportes documentados en distintas culturas americanas.', 'Suponer que no hicieron aportes porque no aparecen en el libro.'],
  ],
  'ccss-14': [
    ['Una carta antigua describe una cosecha. ¿Qué tipo de material puede ser para historiadores?', 'Una fuente escrita que debe situarse en su contexto.', 'Una prueba que explica por sí sola todos los hechos.'],
    ['Dos testigos recuerdan un hecho de forma distinta. ¿Qué hace un investigador?', 'Compara testimonios con otras fuentes y registra discrepancias.', 'Elige el testimonio más detallado sin contrastarlo con nada.'],
    ['Un informe de observación carece de fecha. ¿Qué dato conviene añadir?', 'Cuándo, dónde y cómo se obtuvo la observación.', 'Una opinión presentada como hecho sin fuente.'],
  ],
  'ccss-15': [
    ['Un historiador estudia restos de viviendas antiguas. ¿Qué ciencia auxiliar puede ayudar?', 'La arqueología.', 'La geografía basta para identificar la fecha de cada objeto.'],
    ['Un pueblo antiguo crea canales de riego. ¿Qué aporte se puede analizar?', 'Cómo esa técnica apoyó su organización y producción.', 'Que todos los pueblos antiguos vivían de igual manera.'],
    ['Antes de una revolución hay impuestos desiguales y protestas. ¿Cómo se estudia el proceso?', 'Relacionando causas, grupos sociales y cambios posteriores.', 'Atribuyéndolo a una sola fecha sin contexto.'],
  ],
  'ccss-16': [
    ['En la Revolución Francesa participan grupos con intereses distintos. ¿Qué pregunta ayuda a estudiarlos?', 'Qué exigía cada grupo y qué poder tenía.', 'Qué decisiones tomó solo el rey, sin revisar a los demás grupos.'],
    ['Dos países americanos se independizan en fechas distintas. ¿Qué comparación es válida?', 'Examinar actores y procesos propios de cada país.', 'Afirmar que ambas historias fueron idénticas.'],
    ['Se evalúa un acuerdo de derechos humanos. ¿Qué evidencia importa?', 'Si sus compromisos se cumplen en la práctica.', 'Solo que el acuerdo esté firmado, sin observar su aplicación.'],
  ],
  'ccss-17': [
    ['Trabajadores del siglo XIX forman una asociación. ¿Qué idea expresa esa acción?', 'La organización obrera para defender intereses comunes.', 'Que ninguna persona trabajaba en la industria.'],
    ['Guatemala coopera con otros países en un problema regional. ¿Qué se estudia?', 'Sus relaciones internacionales y responsabilidades compartidas.', 'Solo las decisiones dentro de Guatemala, sin considerar a otros países.'],
    ['Un conflicto armado requiere mediación. ¿Qué puede aportar un organismo internacional?', 'Diálogo y apoyo a la resolución conforme a acuerdos.', 'Eliminar por sí solo todas las causas del conflicto.'],
  ],
  'ccss-18': [
    ['Una familia compara salarios y acceso a servicios. ¿Qué aportan las Ciencias Sociales?', 'Herramientas para analizar datos y condiciones de vida.', 'La garantía de que no existen desigualdades.'],
    ['Dos grupos disputan el uso de un espacio común. ¿Qué primer paso ayuda a negociar?', 'Escuchar necesidades e identificar intereses de ambos.', 'Imponer una decisión antes de escucharlos.'],
    ['Un cartel afirma que un convenio internacional sustituye automáticamente toda norma laboral del país. ¿Qué se debe comprobar?', 'Cómo se relacionan y se aplican ambas reglas.', 'Que los convenios nunca importan en el país.'],
  ],
  'l3-11': [
    ['A picture shows a round red ball beside a small box. Which sentence fits?', 'The round ball is beside the small box.', 'The square ball is inside the large box.'],
    ['Which two words describe shape and size?', 'Round and large.', 'Round and square: both describe size.'],
  ],
  'l3-12': [
    ['A classroom has 500 pencils. How do you say the number?', 'Five hundred.', 'Five thousand.'],
    ['A library has 1,000 books. How do you read the number?', 'One thousand.', 'One hundred.'],
  ],
  'l3-13': [
    ['After reading a story, which sentence is an opinion supported by a reason?', 'I liked it because the ending surprised me.', 'The story has eight pages.'],
    ['Which phrase introduces a respectful opinion?', 'I think the character is brave because she helps others.', 'Everyone must agree with me.'],
  ],
  'l3-14': [
    ['A story begins with a trip and ends at home. Which word introduces the ending?', 'Finally.', 'First.'],
    ['Which order makes sense in a short story?', 'First we packed, next we traveled, finally we arrived.', 'Finally we packed, first we arrived.'],
  ],
  'l3-15': [
    ['Two boxes differ in size. Which sentence compares them?', 'The blue box is bigger than the red box.', 'The blue box is as small as the red box.'],
    ['Which helper verb asks about an action completed last week?', 'Did: What did you read last week?', 'Will: What will you read next week?'],
  ],
  'l3-16': [
    ['Dark clouds appear in a picture. Which prediction uses a visible clue?', 'It will rain because the clouds are dark.', 'It will be sunny because the clouds are dark.'],
    ['A child holds an umbrella under rain clouds. What might happen next?', 'The child will open the umbrella.', 'The child opened the umbrella yesterday.'],
  ],
  'l3-17': [
    ['A supplied biography says a painter studied in Jamaica. Which sentence is a fact?', 'The painter studied in Jamaica.', 'The painter is the best person in the world.'],
    ['How can you discuss a famous person respectfully?', 'Use supplied facts and explain your own opinion.', 'Invent private details to make the story exciting.'],
  ],
  'l3-18': [
    ['Your partner asks, “What do you like to eat?” What is a relevant reply?', 'I like vegetable soup.', 'I like to read stories about soup.'],
    ['What follows a greeting in a short dialogue?', 'A clear question and a relevant answer.', 'Two people speaking at once without listening.'],
  ],
  'ef-11': [
    ['Al flexionar el codo, ¿qué parte del cuerpo cambia el ángulo del brazo?', 'La articulación del codo.', 'Solo la articulación del hombro.'],
    ['Después de correr suavemente, ¿por qué respiras más rápido?', 'Para incorporar más oxígeno mientras circula la sangre.', 'Porque el corazón reemplaza el trabajo de los pulmones.'],
  ],
  'ef-12': [
    ['Una pelota se pasa con la mano menos hábil. ¿Qué objetivo tiene practicar así?', 'Desarrollar coordinación del lado no dominante.', 'Usar ese lado solo cuando el dominante esté cansado.'],
    ['Antes de saltar un obstáculo bajo, ¿qué observas?', 'La distancia, la altura y una zona de llegada libre.', 'Solo la distancia, sin revisar la zona donde caerás.'],
  ],
  'ef-13': [
    ['En un relevo, ¿qué acción facilita recibir la estafeta?', 'Coordinar la entrega y mirar la zona acordada.', 'Acelerar antes de confirmar dónde estará la mano receptora.'],
    ['Una pelota rueda hacia ti. ¿Qué debes ajustar?', 'Tu trayectoria y velocidad para interceptarla con seguridad.', 'Seguir la misma ruta aunque la pelota cambie de dirección.'],
  ],
  'ef-14': [
    ['Una secuencia combina pasos con pulsos musicales. ¿Qué capacidad practicas?', 'Coordinar movimientos con un ritmo.', 'Moverse rápido sin repetir el orden de los pulsos.'],
    ['Quieres lanzar una pelota pequeña. ¿Qué preparación es segura?', 'Comprobar que la zona está libre y acordar una señal.', 'Apuntar al blanco sin revisar si alguien cruza la trayectoria.'],
  ],
  'ef-15': [
    ['Al botar un balón y cambiar de dirección, ¿qué debes controlar?', 'La altura del bote y la dirección de la mano.', 'Mantener la mano inmóvil aunque cambie el recorrido.'],
    ['Una pelota llega a la altura del pecho. ¿Cómo puedes recibirla?', 'Mirándola y amortiguando con ambas manos.', 'Con una mano rígida y sin acompañar el movimiento.'],
  ],
  'ef-16': [
    ['En un juego de orientación, ¿qué regla ayuda a cuidar el equilibrio?', 'Mirar la ruta y respetar los límites del espacio.', 'Elegir la ruta más corta sin revisar los obstáculos.'],
    ['Después de mucho tiempo sentado, ¿qué hábito puede ayudar?', 'Hacer pausas activas suaves y mantener postura cómoda.', 'Hacer una sola sesión intensa y permanecer inmóvil el resto del día.'],
  ],
  'ef-17': [
    ['No entiendes una regla de juego. ¿Qué haces antes de continuar?', 'Pedir aclaración y acordarla con el grupo.', 'Cambiarla a escondidas.'],
    ['Juegan cerca de un jardín. ¿Cómo cuidas el entorno?', 'Marcar límites para no pisar las plantas.', 'Arrancar plantas para ampliar el campo.'],
  ],
  'ef-18': [
    ['Una compañera necesita más tiempo para moverse. ¿Qué ajuste favorece participar?', 'Ofrecer turnos y adaptar una regla acordada por todos.', 'Excluirla del juego.'],
    ['Dos grupos prefieren juegos distintos. ¿Qué solución respeta sus opiniones?', 'Escuchar propuestas y acordar turnos o una variante compartida.', 'Imponer el juego del grupo más grande.'],
  ],
};

const physicalPractices: Record<number, [string, string]> = {
  11: ['De pie o sentado, flexiona y extiende cada brazo lentamente cinco veces; observa qué articulación cambia de ángulo.', 'Camina en tu sitio durante un minuto a ritmo cómodo y compara tu respiración antes y después.'],
  12: ['Pasa un objeto liviano de una mano a otra, primero con tu lado habitual y luego con el otro, sin lanzarlo lejos.', 'Marca en el suelo una línea imaginaria y pasa sobre ella a tu ritmo; ajusta distancia y tiempo sin saltar obstáculos altos.'],
  13: ['Simula la entrega de una estafeta con un lápiz grueso: ofrece y recibe el objeto con cuidado, sin correr.', 'Sigue con la mirada una pelota imaginaria que avanza a dos ritmos y ajusta tus pasos en una zona despejada.'],
  14: ['Sigue cuatro pulsos lentos con pasos o movimientos de brazos y repite la secuencia a otro ritmo cómodo.', 'Lanza una pelota de papel hacia una caja cercana en una zona despejada; observa postura y dirección.'],
  15: ['Si tienes pelota, bótala despacio tres veces y cambia de dirección; si no, simula el gesto con la mano.', 'Recibe una pelota de papel que dejas caer desde poca altura; observa su recorrido y amortigua con ambas manos.'],
  16: ['Traza una ruta corta entre dos puntos sin obstáculos y recórrela despacio, cuidando equilibrio y orientación.', 'Tras estar sentado, levántate si puedes y haz una pausa suave de movilidad; ajusta la postura a lo que te resulte cómodo.'],
  17: ['Propón una regla clara para un juego de movimientos suaves y ensáyalo individualmente durante un minuto.', 'Delimita una zona de juego que no invada plantas ni objetos frágiles y ensaya desplazamientos cuidadosos.'],
  18: ['Adapta un juego de pasos para que pueda hacerse sentado o de pie; practica ambas versiones a ritmo cómodo.', 'Ensaya dos turnos de un juego imaginario con preferencias distintas y representa una solución acordada.'],
};

type LessonScenario = [title: string, workedCase: string, workedAnswer: string, transferCase: string, transferAnswer: string];
const lessonScenarios: Record<string, LessonScenario[]> = {
  'cnt-11': [
    ['El cielo y la tierra en el Popol Vuh', 'Una lámina muestra primero cielo y mar en silencio y después la aparición de tierra, montañas y valles. ¿Cómo se explica ese cambio en el Popol Vuh?', 'En esta cosmovisión maya k’iche’ del universo, al principio había cielo y mar en silencio. Tepeu y Gucumatz, junto con el Corazón del Cielo, conversan y por su palabra se forma la tierra; aparecen montañas y valles.', 'Un estudiante dibuja primero personas de maíz y después la formación de tierra y montañas. Explica cómo ordenarías esos momentos del relato y qué había al principio.', 'Primero se describe el cielo y el mar en calma; luego los creadores dan forma a la tierra, montañas, plantas y animales. Mucho después el relato presenta a las personas de maíz.'],
    ['Cloroplastos y fotosíntesis', 'Una hoja recibe luz, agua y aire. ¿Cómo obtiene azúcares?', 'Sus cloroplastos captan luz para fabricar azúcares con agua y dióxido de carbono.', 'Dos plantas reciben igual agua, pero una permanece sin luz durante varios días. Explica qué proceso será más difícil para ella.', 'La fotosíntesis será más difícil porque sus cloroplastos necesitan luz.'],
    ['Funciones celulares y genes', 'Una célula de hoja y una de músculo tienen núcleo y mitocondrias. ¿Qué funciones comparten?', 'Ambas guardan ADN en el núcleo y aprovechan energía en las mitocondrias.', 'Dos plantas emparentadas tienen color de flor diferente. Explica qué información heredada puede influir, sin olvidar que ambas tienen células.', 'Los genes del ADN pueden influir en el color heredado; las dos células comparten estructuras básicas.'],
  ],
  'cnt-12': [
    ['Mutualismo entre especies', 'Una abeja obtiene néctar mientras transporta polen entre flores. ¿Quién gana?', 'La abeja obtiene alimento y la flor recibe ayuda para reproducirse: ambas se benefician.', 'Un ave come frutos y dispersa semillas lejos del árbol. Explica por qué podría ser mutualismo.', 'El ave se alimenta y el árbol puede dispersar sus semillas.'],
    ['Procariotas y eucariotas unicelulares', 'Una muestra tiene una bacteria y una levadura. ¿Qué estructura permite diferenciarlas?', 'La levadura posee núcleo delimitado; la bacteria no.', 'En una gota de agua observas un organismo unicelular con núcleo visible. Clasifícalo y explica la pista.', 'Es eucariota porque su célula tiene núcleo delimitado.'],
    ['Adaptaciones al ambiente', 'En un lugar seco algunas plantas tienen raíces profundas. ¿Qué ventaja pueden darles?', 'Alcanzan agua a mayor profundidad y pueden sobrevivir mejor en ese ambiente.', 'En un bosque oscuro una polilla de color oscuro es menos visible para depredadores. Explica cómo una característica heredable puede favorecerla.', 'El color puede mejorar su supervivencia y transmitirse a descendientes.'],
  ],
  'cnt-13': [
    ['Glándulas y hormonas', 'Después de comer, aumenta la glucosa en sangre. ¿Cómo interviene el páncreas?', 'Libera insulina, una hormona que ayuda a regular la glucosa.', 'Durante el crecimiento, una glándula envía señales a distintas partes del cuerpo. Explica qué viaja como mensaje.', 'Viajan hormonas, sustancias producidas por glándulas que regulan funciones.'],
    ['Órganos reproductores femeninos', 'En un esquema aparece un óvulo que sale de un ovario y entra en una trompa. ¿Qué recorrido muestra?', 'El ovario produce el óvulo y la trompa lo conduce hacia el útero.', 'Ordena con palabras el recorrido de un óvulo desde donde se produce hasta el órgano que puede alojar un embarazo.', 'Sale de un ovario, pasa por una trompa y llega al útero.'],
    ['Fecundación y respeto', 'Un diagrama muestra un espermatozoide que se une con un óvulo. ¿Qué proceso ocurrió?', 'Es la fecundación: unión de las células sexuales masculina y femenina.', 'Una compañera oye que alguien presiona a otra persona para tomar decisiones íntimas. Explica una respuesta respetuosa e informada.', 'Toda decisión requiere consentimiento, ausencia de presión e información confiable.'],
  ],
  'cnt-14': [
    ['Transmisión del VIH sin estigmas', 'Un estudiante teme contagiarse al abrazar a una persona con VIH. ¿Qué aclaras?', 'Abrazar no transmite el VIH; la transmisión requiere determinadas exposiciones a fluidos corporales.', 'Un folleto dice que compartir cubiertos transmite VIH. Corrige la frase y menciona por qué evita estigmas.', 'Compartir cubiertos no transmite VIH; corregirlo evita discriminar a las personas.'],
    ['Drogas y cuidado de la salud', 'Un grupo ofrece un inhalante desconocido a una niña. ¿Qué respuesta protege su salud?', 'Alejarse y pedir apoyo a una persona adulta de confianza.', 'Un amigo siente presión para probar una sustancia. Propón una frase breve para rechazarla y buscar ayuda.', 'Puede decir «No quiero hacerlo» y acudir a una persona adulta confiable.'],
    ['Efectos sociales del tráfico de drogas', 'Una comunidad observa violencia vinculada al tráfico. ¿Qué ámbitos se ven afectados?', 'La seguridad y convivencia, además de las consecuencias legales de esas conductas.', 'Un afiche culpa a toda persona con una adicción de ser traficante. Explica por qué debe corregirse.', 'Tener un problema de salud no equivale a traficar; conviene prevenir y buscar atención sin estigma.'],
  ],
  'cnt-15': [
    ['Funciones de los nutrientes', 'Un almuerzo contiene frijoles, tortilla y verduras. ¿Qué aportan de manera distinta?', 'Frijoles: proteínas; tortilla: carbohidratos; verduras: vitaminas y minerales.', 'Clasifica huevo, arroz y zanahoria por el nutriente que más destaca y explica por qué conviene combinarlos.', 'Huevo aporta proteína, arroz carbohidratos y zanahoria vitaminas; combinarlos diversifica nutrientes.'],
    ['Componentes de la leche materna', 'Una ficha muestra agua, azúcares, grasas y defensas en la leche materna. ¿Es solo alimento energético?', 'No: aporta distintos nutrientes y componentes protectores.', 'El calostro y la leche posterior tienen composiciones distintas. Explica qué idea corrige esto.', 'La composición de la leche materna cambia con la etapa de lactancia.'],
    ['Alimentos para crecer y tener energía', 'Un niño come solo arroz durante días. ¿Qué falta en su plan?', 'Variedad para obtener proteínas, grasas saludables, vitaminas y minerales además de carbohidratos.', 'Diseña una comida sencilla con dos alimentos adicionales a la tortilla y explica qué aportan.', 'Puede sumar frijoles y verduras: proteínas, vitaminas y minerales.'],
  ],
  'cnt-16': [
    ['Una salud conectada con el ambiente', 'Una quebrada contaminada se usa para regar y beber. ¿Quiénes pueden verse afectados?', 'Personas, cultivos y animales que dependen de esa agua.', 'En una comunidad se separan residuos antes de que lleguen a un río. Explica dos beneficios posibles.', 'Puede mejorar la calidad del agua y reducir riesgos para seres humanos y otros seres vivos.'],
    ['Actividades humanas que dañan el ambiente', 'Un barrio quema basura cerca de viviendas. ¿Qué partes del ambiente y de la salud pueden dañarse?', 'El aire se contamina y las personas pueden respirar humo perjudicial.', 'Un taller vierte aceite en un arroyo. Explica un efecto posible y una acción para evitarlo.', 'Puede dañar el agua y los organismos acuáticos; se debe disponer el aceite de forma segura.'],
    ['Reforestación y protección de hábitats', 'Se plantan árboles nativos en una ladera deforestada. ¿Qué más hace falta?', 'Cuidado posterior para que sobrevivan y ayuden al suelo, aire y hábitat.', 'Un poblado se expande sobre un bosque. Propón una decisión que reduzca la pérdida de especies silvestres.', 'Planificar el uso de suelo y conservar áreas de hábitat, además de reforestar con especies apropiadas.'],
  ],
  'cnt-17': [
    ['Cómo estudiar la mortalidad local', 'Una persona afirma que una enfermedad es la principal causa de muerte sin mostrar datos. ¿Qué pedirías?', 'Registros confiables, fechas y población estudiada.', 'Compara dos informes comunitarios de años distintos. Explica por qué no basta contar casos sin considerar población y período.', 'Hay que comparar períodos y población de referencia antes de sacar conclusiones.'],
    ['Energía química de los alimentos', 'Después de desayunar, una niña camina a la escuela. ¿De dónde obtiene el cuerpo energía utilizable?', 'De la energía química almacenada en los alimentos y liberada por procesos celulares.', 'Un deportista come fruta antes de moverse. Explica cómo se relaciona la comida con su actividad.', 'Sus nutrientes aportan energía química que el cuerpo puede aprovechar al moverse.'],
    ['Hidrocarburos y energía', 'Un autobús usa combustible derivado del petróleo. ¿Qué balance observas?', 'La combustión entrega energía al motor y produce emisiones.', 'Compara una estufa de gas con una cocina que usa energía solar. Explica qué fuente emplea hidrocarburos.', 'La estufa de gas usa un hidrocarburo combustible; la cocina solar aprovecha luz.'],
  ],
  'cnt-18': [
    ['Gases de efecto invernadero', 'Una gráfica muestra que aumenta el dióxido de carbono atmosférico. ¿Qué relación climática estudias?', 'Más gases de efecto invernadero pueden retener más calor y favorecer el calentamiento.', 'Una ciudad reduce la quema de combustibles. Explica qué emisión intenta disminuir y por qué.', 'Busca reducir CO₂ y otras emisiones que intensifican el efecto invernadero.'],
    ['Pasos de una investigación', 'Quieres saber si la luz cambia el crecimiento de una planta. ¿Qué pasos seguirías?', 'Observar, proponer una hipótesis, comparar plantas con distinta luz y concluir según resultados.', 'Investiga si dos recipientes con igual semilla y agua crecen distinto con diferente luz. Explica qué variable cambias.', 'Cambias la luz; mantienes iguales las demás condiciones para comparar.'],
    ['Explicar fenómenos con evidencia', 'Dos personas explican una inundación de forma distinta. ¿Qué haría una investigadora?', 'Compararía datos de lluvia, terreno y otras observaciones antes de concluir.', 'Un informe nuevo contradice una explicación previa de un deslave. Explica qué debe hacer la ciencia.', 'Revisar la explicación con las pruebas nuevas y reconocer límites de lo que se sabe.'],
  ],
  'ccss-11': [
    ['Comparar los continentes', 'Un atlas muestra dos continentes con distinta superficie y distribución de habitantes. ¿Qué debes comparar?', 'Ubicación, extensión y población, usando la misma escala y período.', 'Dos mapas usan escalas diferentes y parecen mostrar densidades iguales. Explica qué debes comprobar antes de concluir.', 'Hay que revisar escala, área y datos de población comparables.'],
    ['Relieve, volcanes y recursos', 'Una ciudad está al pie de una montaña volcánica y usa suelo fértil para cultivar. ¿Qué dos relaciones observas?', 'El relieve implica posibles riesgos y el recurso suelo favorece actividades económicas.', 'Un mapa muestra una depresión con agua disponible y poblados cercanos. Explica una ventaja y un riesgo a investigar.', 'El agua puede apoyar agricultura, pero se deben estudiar inundaciones u otros riesgos locales.'],
    ['Climas y peligros geográficos', 'Un mapa de zonas climáticas sitúa una región en clima seco con desiertos. ¿Qué peligro puede afectar a su población?', 'La escasez de agua y los efectos de la sequía.', 'En otra región hay lluvia intensa en laderas. Relaciona clima y relieve con un posible peligro.', 'Lluvia intensa y pendientes pueden favorecer deslaves.'],
  ],
  'ccss-12': [
    ['Recursos de Guatemala y América', 'Dos fichas comparan agua disponible en Guatemala y otro país americano. ¿Qué datos faltan si solo hay un mapa?', 'Cantidad, acceso, uso y población del mismo período.', 'Una tabla muestra bosques en dos países, pero uno mide hectáreas y otro porcentajes. Explica cómo comparar con justicia.', 'Hay que convertir a unidades o proporciones comparables antes de concluir.'],
    ['Ecosistemas y conservación', 'Un bosque conserva agua y sostiene cultivos cercanos. ¿Cómo influye en el desarrollo?', 'Sus servicios ambientales apoyan actividades y bienestar; las políticas pueden protegerlo.', 'Un proyecto económico modifica un humedal. Explica dos criterios que debe revisar una política de conservación.', 'Debe considerar biodiversidad, agua y necesidades de la población afectada.'],
    ['Población y tecnología', 'Una tabla muestra población y acceso a internet en dos regiones. ¿Qué conclusión evitarías?', 'Que una sola cifra explique por completo la calidad de vida.', 'Un sistema agrícola aumenta producción pero consume más energía. Explica cómo evaluar su utilidad.', 'Comparar beneficios, costos y efectos sociales y ambientales.'],
  ],
  'ccss-13': [
    ['Producción y comercio mundial', 'Una región cultiva café y lo vende a otra. ¿Qué actividades aparecen?', 'Producción agrícola y comercio entre territorios.', 'Otra comunidad fabrica textiles y los intercambia. Explica cómo su trabajo se conecta con mercados.', 'Transforma materiales en productos y los comercializa dentro o fuera de su región.'],
    ['Condiciones de vida y trabajo infantil', 'Una niña trabaja largas horas en un espacio peligroso y falta a clases. ¿Qué condición de vida estudiarías?', 'Cómo el trabajo afecta su salud y acceso a la educación.', 'Compara dos barrios: en uno niños asisten a clase; en otro trabajan jornadas extensas. Explica una posible diferencia en oportunidades.', 'El trabajo infantil peligroso puede reducir estudio, descanso y desarrollo.'],
    ['Oportunidades y aportes de las mujeres', 'Un museo habla de comercio antiguo sin mencionar a las artesanas. ¿Qué falta investigar?', 'Los aportes documentados de mujeres a la economía y cultura.', 'Una biografía muestra que una mujer lideró una cooperativa. Explica por qué incluirla cambia la historia que contamos.', 'Hace visible su aporte y ayuda a reconocer oportunidades y barreras sociales.'],
  ],
  'ccss-14': [
    ['Fuentes de la investigación histórica', 'Una carta de 1920 relata una migración. ¿Qué puede aportar y qué límite tiene?', 'Aporta una perspectiva de época, que debe contrastarse con otras fuentes.', 'Un investigador encuentra una fotografía sin fecha. Explica qué dato necesita antes de usarla como prueba.', 'Debe establecer fecha, origen y contexto para interpretarla.'],
    ['Contrastar fuentes de información', 'Dos entrevistas recuerdan de modo distinto la fecha de una fiesta. ¿Qué haces?', 'Comparas testimonios con registros fechados y anotas la discrepancia.', 'Un recorte de periódico contradice un testimonio familiar. Explica cómo investigar sin descartar de inmediato ninguno.', 'Revisas fecha, autor, propósito y otras fuentes para contrastar.'],
    ['Registros y método histórico', 'Una estudiante observa un objeto antiguo y anota forma, material y lugar. ¿Qué hace bien?', 'Registra datos verificables antes de interpretarlos.', 'Redacta un informe corto sobre dos documentos suministrados. Explica qué campos debe incluir.', 'Debe indicar fuente, fecha, observación, comparación y conclusión limitada.'],
  ],
  'ccss-15': [
    ['Ciencias que ayudan a la Historia', 'Se hallan vasijas antiguas y textos de la misma época. ¿Qué disciplinas pueden colaborar?', 'Arqueología para objetos y análisis de fuentes escritas para textos.', 'Un estudio combina mapas viejos y restos de edificios. Explica por qué la Historia trabaja con otras ciencias.', 'Cada disciplina aporta métodos y pruebas diferentes sobre el pasado.'],
    ['Poder y aportes de pueblos antiguos', 'Una ciudad antigua organiza canales de riego y autoridades para repartir agua. ¿Qué relación observas?', 'La organización del poder influye en obras y estructura social.', 'Compara dos pueblos: uno construye caminos y otro usa terrazas de cultivo. Explica cómo estudiarías sus aportes.', 'Examinarías fuentes y cómo cada técnica respondió a necesidades distintas.'],
    ['Colonia y Revolución Francesa', 'Un esquema muestra desigualdad social en América colonial y privilegios del Antiguo Régimen europeo. ¿Qué pregunta histórica cabe?', 'Cómo estructuras de poder distintas produjeron conflictos y cambios.', 'Un texto cuenta protestas por impuestos y demanda de representación en Francia. Explica por qué no debe confundirse con la colonia americana.', 'Son procesos de lugares y actores diferentes que se comparan con contexto.'],
  ],
  'ccss-16': [
    ['Grupos de la Revolución Francesa', 'Un documento menciona nobleza, clero y tercer estado. ¿Qué contraste estudiarías?', 'Sus privilegios, obligaciones e intereses políticos.', 'Un cartel exige representación para quienes pagan impuestos. Relaciónalo con un grupo protagonista.', 'Puede expresar demandas del tercer estado frente a privilegios de otros grupos.'],
    ['Europa e independencias americanas', 'Una idea de soberanía circula de Europa a América. ¿Basta para explicar una independencia?', 'No; se analizan también actores y condiciones locales.', 'Compara dos naciones americanas que se formaron en contextos diferentes. Explica qué debes conservar en la comparación.', 'Sus propios actores, fechas, conflictos y fuentes, sin tratarlas como procesos idénticos.'],
    ['Derechos humanos y final de la Guerra Fría', 'Un acuerdo promete proteger derechos mientras cambia el orden político mundial. ¿Cómo se evalúa?', 'Comparando compromisos con hechos y contexto histórico.', 'Un texto vincula la caída del Muro de Berlín con cambios en Europa oriental. Explica qué proceso más amplio representa.', 'Forma parte del final de la Guerra Fría y de cambios en antiguos países del bloque soviético.'],
  ],
  'ccss-17': [
    ['Ideas del siglo XIX', 'Una fábrica crece mientras trabajadores crean asociaciones. ¿Qué ideas y procesos puedes comparar?', 'Economía liberal, industrialización y organización obrera.', 'Un país poderoso controla comercio sin gobernar formalmente otro territorio. Explica qué término histórico puede ayudar.', 'El neocolonialismo describe formas de dominio económico o político indirecto.'],
    ['Conflictos e interdependencia', 'Una reforma liberal favorece a propietarios pero perjudica a otros grupos. ¿Qué debe estudiar un historiador?', 'Intereses enfrentados y consecuencias en distintos sectores.', 'Guatemala firma cooperación con otro país tras una disputa comercial. Explica qué relación internacional observas.', 'Negociación y vínculos políticos o económicos entre países.'],
    ['Ciudadanía y mediación internacional', 'Dos comunidades reclaman derechos opuestos sobre un espacio. ¿Qué responsabilidad tienen?', 'Participar respetando derechos ajenos y buscar diálogo.', 'Un organismo internacional facilita conversaciones en un conflicto armado. Explica un límite de su papel.', 'Puede apoyar acuerdos, pero las partes deben cumplirlos y atender causas del conflicto.'],
  ],
  'ccss-18': [
    ['Ciencias Sociales para entender problemas', 'Una encuesta muestra diferencias de acceso a agua entre barrios. ¿Cómo ayuda la investigación social?', 'Permite describir patrones y preguntar por sus causas con datos.', 'Un mapa y entrevistas muestran cambios en un mercado local. Explica por qué conviene combinar fuentes.', 'Datos y testimonios aportan perspectivas complementarias sobre la realidad.'],
    ['Negociar un problema complejo', 'Dos grupos quieren usar la cancha a la misma hora. ¿Cuál es un primer paso?', 'Escuchar necesidades y buscar opciones compartidas antes de decidir.', 'Diseña una regla para tres grupos que comparten una biblioteca. Explica cómo comprobarías que es justa.', 'Escucharía a los tres y revisaría si todos tienen acceso razonable.'],
    ['Pobreza y normas laborales', 'Una familia trabaja muchas horas pero no alcanza servicios básicos. ¿Qué aspectos hay que analizar?', 'Ingresos, acceso a servicios, condiciones laborales y causas estructurales.', 'Una propuesta cita un convenio laboral ratificado por Guatemala. Explica cómo revisarías su relación con normas nacionales.', 'Compararía obligaciones del convenio y normas vigentes con fuentes oficiales, sin asumir que son idénticas.'],
  ],
  'l3-11': [
    ['Describe a picture in English', 'A picture shows a child reading beside a tree. Write one clear sentence about what happens.', 'The child is reading beside a tree.', 'A new picture shows two children playing near a small house. Write a sentence with a subject, action and place.', 'Two children are playing near a small house.'],
    ['Shape and size words', 'A drawing shows a large round ball and a small square box. Which words describe each object?', 'The ball is large and round; the box is small and square.', 'A picture shows a short rectangular table and a large circular clock. Describe their size or shape.', 'The table is short and rectangular; the clock is large and round.'],
  ],
  'l3-12': [
    ['Hundreds in English', 'A sign shows 300. How do you say the number in English?', 'Three hundred.', 'A library card says 700 books. Read that number in English.', 'Seven hundred.'],
    ['Numbers to one thousand', 'The price tag shows 950. Read the hundreds, tens and units.', 'Nine hundred and fifty.', 'A school collected 1,000 paper sheets. Say the number in English.', 'One thousand.'],
  ],
  'l3-13': [
    ['Opinion plus reason', 'A short story ends with a surprising rescue. Give an opinion and a reason.', 'I like the story because the rescue surprised me.', 'A new story has a character who shares food. Write an opinion supported by that action.', 'I think the character is kind because she shares food.'],
    ['Respectful reading discussion', 'Two readers disagree about a character. How can one state a different view?', 'I think the character is brave because she asks for help.', 'After reading a supplied paragraph, a partner says it is boring. Offer a different opinion with a reason from the text.', 'I think it is interesting because the mystery is clear.'],
  ],
  'l3-14': [
    ['Sequence words in a story', 'A story says a family packs, travels and arrives. Put the events in order.', 'First they pack, next they travel, finally they arrive.', 'Another story shows a seed planted, watered and grown. Retell it with sequence words.', 'First we plant it, then we water it, finally it grows.'],
    ['Retell a beginning, middle and end', 'A cat is lost, a child looks for it, then finds it. What is the middle event?', 'The child looks for the cat.', 'In a new story a boat leaves, crosses a lake and docks. Write a three part retelling.', 'First the boat leaves, then it crosses the lake, finally it docks.'],
  ],
  'l3-15': [
    ['Compare objects', 'One box is bigger than another. Write a comparison.', 'The blue box is bigger than the red box.', 'A short pencil sits beside a long pencil. Compare their lengths.', 'The long pencil is longer than the short pencil.'],
    ['Do, did and will', 'A sentence asks about yesterday. Which helper verb begins the question?', 'Did: What did you do yesterday?', 'Ask a classmate what they will do tomorrow using the future helper verb.', 'What will you do tomorrow?'],
  ],
  'l3-16': [
    ['Predict from visible clues', 'Dark clouds appear above a child with no umbrella. What might happen?', 'It might rain because dark clouds are gathering.', 'In a new picture a glass is near the edge of a table. Predict what may happen and cite the clue.', 'The glass may fall because it is near the edge.'],
    ['Explain a picture prediction', 'A girl holds a kite while the trees bend in the wind. What might she do?', 'She might fly the kite because it is windy.', 'Another picture shows a boy with boots at a muddy path. Predict his next action from what you see.', 'He may walk on the path because he is wearing boots.'],
  ],
  'l3-17': [
    ['Facts in a short biography', 'A supplied biography says a singer was born in Belize. Which sentence is a fact?', 'She was born in Belize, according to the supplied text.', 'A new fact card says an artist wrote two books. State that fact without adding opinions.', 'The artist wrote two books.'],
    ['Discuss cultural figures respectfully', 'A reader says a writer from Jamaica is the best in the world. What can you ask?', 'Ask for a reason and separate personal opinion from documented facts.', 'A classmate dislikes a public figure from another culture. Respond with a respectful opinion and one supplied fact.', 'I see it differently because the supplied biography describes her community work.'],
  ],
  'l3-18': [
    ['Ask and answer a basic question', 'A partner asks, “What do you like to read?” Give a relevant answer.', 'I like stories about animals.', 'In a new dialogue someone asks, “Where do you live?” Answer with a complete basic sentence.', 'I live in Guatemala.'],
    ['Take turns in a dialogue', 'Two speakers greet and ask about a favorite game. What makes the exchange clear?', 'Each person takes a turn, asks or answers and closes politely.', 'Write two turns after “Hello! What do you like to play?” and finish courteously.', 'I like to play ball. What about you? — I like chess. Goodbye!'],
  ],
  'ef-11': [
    ['Coordinar partes del cuerpo', 'Move one arm while the other remains still, then rotate the trunk gently. What coordination changes?', 'The limbs can act independently while the body axis supports balance.', 'Try raising one knee while seated or standing. Explain which body segments move and which steady you.', 'The hip and leg move; the trunk helps keep balance.'],
    ['Articulaciones, respiración y circulación', 'Bend and straighten the elbow, then walk gently in place. What do the joint and breathing do?', 'The elbow flexes and extends; breathing brings oxygen that blood carries.', 'After a short comfortable movement, observe pulse and breaths. Explain why both may increase.', 'Muscles need more oxygen; breathing and blood circulation respond.'],
  ],
  'ef-12': [
    ['Practicar con el lado menos hábil', 'Pass a soft object from hand to hand. Why practice the less used hand?', 'It develops coordination and control on both sides.', 'Draw a small circle first with one hand and then the other. Explain what practice can improve.', 'Repeated gentle practice can improve control with the less used hand.'],
    ['Espacio, tiempo y velocidad segura', 'Walk a short path around a low marker. Why plan distance and speed first?', 'To adjust movement safely to objects and available space.', 'Create a clear route between two points and move at a comfortable pace. Explain one change you made for an obstacle.', 'I slowed or changed direction before reaching the obstacle.'],
  ],
  'ef-13': [
    ['Relevos y movimientos alternos', 'Simulate handing a paper baton to someone in front. Why agree on the receiving hand?', 'It makes the exchange more coordinated and reduces drops.', 'Without a partner, switch a baton between hands while stepping alternately. Explain the timing you used.', 'I matched each hand change with a deliberate step.'],
    ['Ritmo y trayectorias móviles', 'Step to four slow beats as a ball rolls across your view. What must you adjust?', 'Movement rhythm and direction to follow the changing trajectory.', 'Imagine a ball rolling diagonally rather than straight. Show with gentle steps how your path changes.', 'I turn and time my steps to follow its new diagonal route.'],
  ],
  'ef-14': [
    ['Secuencias de movimiento rítmico', 'Clap or step to a four beat pattern. How do you keep the sequence together?', 'Repeat movements in the same order while following the beat.', 'Create a second four beat pattern seated or standing. Explain how it differs from the first.', 'I changed a movement or speed while keeping a clear rhythm.'],
    ['Lanzar y recibir con seguridad', 'Throw a soft paper ball toward an empty box. What helps with aim and safety?', 'Look at the target, control force and keep the space clear.', 'Pass a soft object around your waist and catch it at a comfortable height. Explain how you control it.', 'I guide it with both hands and look where I will receive it.'],
  ],
  'ef-15': [
    ['Botar y cambiar de dirección', 'Bounce a ball slowly in one spot, then turn. What adjustment keeps control?', 'Change hand position and direction while watching the ball.', 'Move along a clear short path while bouncing or miming a bounce. Explain how you keep a steady rhythm.', 'I adjust the bounce height and move at a pace I can control.'],
    ['Recibir y apuntar con control', 'A soft ball arrives at chest height. How do you receive it before aiming at a target?', 'Watch it, use both hands to cushion it, then choose a safe target.', 'Place a paper ball on the floor and gently kick it toward a wide target. Explain how you kept others safe.', 'I checked a clear route, used little force and aimed away from people.'],
  ],
  'ef-16': [
    ['Exploración y equilibrio en juegos de campo', 'A game asks you to follow three landmarks on a clear route. What skills are involved?', 'Orientation and balance while controlling movement.', 'Design a second route around two safe markers and explain how you know where to turn.', 'I use landmarks and slow down before each turn.'],
    ['Moverse con frecuencia y cuidar la postura', 'After sitting for a long time, a child stands and stretches gently. Why?', 'Short active breaks can reduce sedentary time and allow posture changes.', 'Choose a brief seated or standing movement break. Explain how you avoid strain.', 'I move gently, align my body comfortably and stop if movement hurts.'],
  ],
  'ef-17': [
    ['Moverse con autonomía', 'A student chooses an easier version of a movement and finishes it confidently. What skill appears?', 'Autonomy: adapting movement to one’s abilities and limits.', 'Select between a seated and standing version of a game. Explain why your choice fits you.', 'I chose a version I can perform safely and adjust as I learn.'],
    ['Reglas y cuidado del espacio de juego', 'A group agrees not to step into a garden during a game. What do the rules protect?', 'Fair play and the shared environment.', 'Propose a rule for a game beside trees and explain how it helps everyone enjoy the space.', 'Keep the play area clear of roots and plants so people and habitat stay safe.'],
  ],
  'ef-18': [
    ['Respetar distintas formas de participar', 'Two players prefer different rules and speak different home languages. How can they agree?', 'Listen, explain rules clearly and allow respectful participation.', 'Adapt a game so a player may move seated. Explain why this option is fair.', 'It offers a way to participate while keeping the shared goal.'],
    ['Organizar un juego inclusivo', 'A class plans a game where some children run and others prefer walking. What arrangement works?', 'Agree on roles or versions that include both at a safe pace.', 'Design one rule that gives equal turns to all players regardless of gender or ability.', 'Rotate turns so every participant can try each role.'],
  ],
};

/** Factory for three or two authored subject lessons; the weekly CNB references stay in plan.json. */
export function makeUnitTwoWeek(area: UnitTwoArea, week: number) {
  const entry = plan.unidades[1].semanas.find((item) => item.semana === week);
  if (!entry?.contenidos) throw new Error(`Falta plan de semana ${week}`);
  const refs = entry.contenidos[area];
  const all = cnb.areas[area].competencias.flatMap((c) => c.indicadores.flatMap((i) => i.contenidos));
  const descriptions = new Map(all.map((item) => [item.id, item.text]));
  const lessonCount = area === 'cnt' || area === 'ccss' ? 3 : 2;
  return Array.from({ length: lessonCount }, (_, index) => {
    const from = Math.floor(index * refs.length / lessonCount);
    const to = Math.floor((index + 1) * refs.length / lessonCount);
    const covered = refs.slice(from, to);
    if (covered.length === 0 && refs.length) covered.push(refs[Math.min(index, refs.length - 1)]);
    const scenario = lessonScenarios[`${area}-${week}`]?.[index];
    if (!scenario) throw new Error(`Falta autoría específica de ${area}, semana ${week}, lección ${index + 1}`);
    const [displayTitle, workedCase, workedAnswer, transferCase, transferAnswer] = scenario;
    const contentDescription = covered.map((ref) => descriptions.get(ref) ?? ref).join(' ');
    const exitQuestion = focusedQuestions[`${area}-${week}`]?.[index];
    if (!exitQuestion) throw new Error(`Falta salida específica de ${area}, semana ${week}, lección ${index + 1}`);
    const [freshQuestion, freshAnswer, freshWrong] = exitQuestion;
    const id = `s${String(week).padStart(2, '0')}-${area}-${index + 1}`;
    const meta = (fase: 'explorar' | 'construir' | 'aplicar' | 'comprobar') => ({ fase, areas: [area], cnb: covered });
    const optionSet = (right: string, wrong: string, correctFirst: boolean) => ({
      options: correctFirst
        ? [{ id: 'a', text: right }, { id: 'b', text: wrong }]
        : [{ id: 'a', text: wrong }, { id: 'b', text: right }],
      correct: [correctFirst ? 'a' : 'b'],
    });
    const firstPosition = (week + index) % 2 === 0;
    return lesson({
      id, title: displayTitle, icon: area === 'ef' ? 'Activity' : area === 'l3' ? 'Languages' : area === 'ccss' ? 'Globe2' : 'FlaskConical',
      minutes: 15, gancho: workedCase,
      objetivos: [`Explicar ${displayTitle.toLowerCase()} mediante un caso concreto.`],
      resumen: [workedAnswer, contentDescription],
      media: {
        id: `${id}-lamina`, kind: 'diagram', title: displayTitle, aspect: '16:9',
        alt: `Lámina de ${displayTitle.toLowerCase()}: ${workedCase}`,
        brief: `Producir diagrama original de 1600×900 px con contraste alto, rótulos grandes y fondo claro. Representar este caso concreto: ${workedCase} Mostrar con flechas o secuencia la explicación: ${workedAnswer} Incluir una leyenda breve y descripción alternativa equivalente. Evitar detalles ajenos al tema y estereotipos. Target: public/media/${id}-lamina.png.`,
      },
      steps: [
        S.explain({ ...meta('explorar'), title: 'Observa el caso', prompt: workedCase },
          { icon: 'Search', body: `Antes de avanzar, identifica qué ocurre en este caso y qué necesitarías explicar. Tema: **${displayTitle}**.` }),
        S.explain({ ...meta('construir'), title: 'Aprende la idea', prompt: `Esta es la idea que necesitarás para explicar el caso.` },
          { icon: 'BookOpen', body: `${workedAnswer} ${contentDescription}` }),
        S.ejemplo({ ...meta('construir'), title: 'Ejemplo resuelto', prompt: 'Sigue el razonamiento paso a paso.' },
          { icon: 'Lightbulb', problem: workedCase, steps: [
            { text: `Identifico lo que pide el caso y la referencia al tema «${displayTitle}».`, why: contentDescription },
            { text: workedAnswer, why: 'Relaciono la pista del caso con la idea estudiada, sin añadir datos que no se dieron.' },
          ], answer: workedAnswer }),
        S.choice({ ...meta('construir'), prompt: `Con ayuda: ¿qué explicación corresponde al caso que acabas de observar?`, hint: `La pista decisiva está en: ${workedCase}`, explain: workedAnswer },
          optionSet(workedAnswer, freshWrong, firstPosition)),
        S.explain({ ...meta('construir'), title: 'Evita una confusión', prompt: 'Compara la idea correcta con un error frecuente.' },
          { icon: 'CircleHelp', body: `La idea que debes conservar es: **${workedAnswer}**. Una explicación errónea sería: «${freshWrong}». Revisa la pista del caso antes de decidir.` }),
        area === 'ef'
          ? S.project({ ...meta('aplicar'), ambito: 'hacer', prompt: `Nuevo caso: ${transferCase} Practica la habilidad a un ritmo cómodo.` }, {
            goal: `Resuelve en movimiento: ${transferCase}`,
            steps: [
              { title: 'Prepara el espacio', detail: 'Despeja un espacio pequeño; evita movimientos que causen dolor. Puedes hacer la versión sentado.' },
              { title: 'Practica', detail: physicalPractices[week][index] },
              { title: 'Observa', detail: `Detente y piensa cómo coordinaste el movimiento. Compara tu conclusión con esta meta: ${transferAnswer}` },
            ], evidence: 'Marca los pasos y autoevalúa tu práctica aquí; no necesitas foto, video ni ayuda de otra persona.',
            rubric: ['Me moví a un ritmo seguro.', `Observé cómo se relaciona la práctica con ${displayTitle.toLowerCase()}.`],
          })
          : S.write({ ...meta('aplicar'), ambito: 'hacer', prompt: `Nuevo caso: ${transferCase} Explica tu conclusión en 10 palabras o más.`, explain: transferAnswer },
            { minWords: 10, model: `${transferCase} ${transferAnswer}`, rubric: ['Usé los datos del caso nuevo.', 'Expliqué la relación con la idea estudiada.'] }),
        ...(area === 'ef' ? [S.choice({ ...meta('aplicar'), prompt: `Después de practicar: ${transferCase} ¿Qué explicación corresponde a tu movimiento?`, explain: transferAnswer },
          optionSet(transferAnswer, freshWrong, !firstPosition))] : []),
        S.choice({ ...meta('comprobar'), prompt: `Boleto de salida 1. ${freshQuestion}` },
          optionSet(freshAnswer, freshWrong, !firstPosition)),
        S.tf({ ...meta('comprobar'), prompt: `Boleto de salida 2. Evalúa estas afirmaciones sobre ${displayTitle.toLowerCase()}.` },
          { statements: firstPosition
            ? [{ text: transferAnswer, answer: true }, { text: freshWrong, answer: false }]
            : [{ text: freshWrong, answer: false }, { text: transferAnswer, answer: true }] }),
      ],
    });
  });
}
