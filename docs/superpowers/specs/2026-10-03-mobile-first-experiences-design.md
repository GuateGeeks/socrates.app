# Experiencias mobile first de Socrates Aprende

Fecha: 2026-10-03. Estado: diseño aprobado e implementado; verificación automatizada completada.

La interacción debe mantener la decisión, su contexto y sus controles juntos en el teléfono. La revisión abarca AWS, las 28 actividades registradas de primaria, navegación, formularios y vistas auxiliares. Se conserva el sistema visual existente y la lógica pedagógica de evaluación.

## Evidencia de la auditoría

Inspección de componentes, estilos y pruebas existentes. Mediciones iniciales con Chromium, viewport de 375 × 844, emulación táctil, movimiento reducido y contenido local. Los datos remotos y la sincronización se sustituyeron por fixtures; estas mediciones no prueban comportamiento de Firebase ni de un dispositivo físico.

| Experiencia | Hallazgo | Consecuencia |
| --- | --- | --- |
| Conceptos AWS | Índice de 760 px dentro de 341 px visibles; botones de ancho fijo de 180 px | Conceptos fuera de vista sin un índice completo visible |
| Práctica cloud-value | Siete fichas, banco de 722 px; primera ficha a 905 px y destinos entre 1643 y 2417 px; documento de 2813 px | Seleccionar y colocar exige desplazarse entre regiones distantes |
| Otras prácticas AWS | Documentos de 1743, 2475 y 1871 px para responsabilidad compartida, infraestructura y costos | El problema se repite incluso con tres o cuatro fichas |
| Ordenación CNB | Flechas de 34 × 24 px en CSS | Poco margen para tocar sin equivocarse |
| Clasificación CNB | Banco seguido por categorías; `touch-action: none` en toda la ficha | El arrastre compite con el desplazamiento; las categorías son contenedores sin botón de teclado |
| Emparejamiento | Dos columnas permanentes y asociaciones diferenciadas principalmente por color | Textos largos estrechos y relaciones difíciles de revisar |
| Completar espacios | Banco separado del texto; espacios de 38 px de alto | Contexto y respuesta pueden quedar en pantallas diferentes |
| Navegación CNB | `.chips` y `.daytabs` usan scroll horizontal y ocultan su barra | Filtros o días pueden quedar fuera de vista |
| Año escolar | Documento inicial de 4765 px | Encontrar la semana relevante exige recorrer una lista extensa |
| Docente | Documento inicial de 12947 px | Exceso de información simultánea |
| Medios | Documento inicial de 418488 px con el catálogo local | Renderizado y navegación desproporcionados para móvil |
| Encuesta | Diez preguntas desplegadas; documento de 2835 px | La revisión y el envío quedan alejados del inicio |
| Reproductor CNB | Barra fija de feedback con reserva inferior constante de 200 px | Riesgo de superposición con feedback largo, zoom o teclado; necesita prueba específica |

Fuentes principales: `src/aws/AwsReader.tsx`, `AwsPractice.tsx`, `AwsLessonScreen.tsx`, `aws.css`; `src/activities/*`; `src/design-system/global.css`; `src/screens/*`; `src/startup/Onboarding.tsx`. Una altura larga no implica por sí misma un defecto: el problema prioritario es separar elementos que se necesitan juntos para actuar.

## Alternativas consideradas

1. **Interacciones progresivas y contexto cercano, recomendada.** Una ficha activa, destinos próximos y resumen editable; índices desplegables y navegación explícita. Cambia la estructura de interacción y reduce el esfuerzo de búsqueda.
2. **Panel inferior para cada asignación.** Mantiene el tablero actual y abre destinos al tocar una ficha. Resuelve distancias, pero añade aperturas repetidas y gestión modal a cada decisión. Reservarlo para edición puntual o listas especialmente largas.
3. **Compactar el tablero actual.** Menos márgenes, varias columnas y cabeceras fijas. Es un cambio pequeño, pero sigue separando fichas y destinos; los textos largos vuelven a generar el problema.

## Diseño recomendado

### Lectura y conceptos

En móvil, reemplazar la tira horizontal por un botón de ancho completo: «Concepto 2 de 6 · Responsabilidad compartida», con indicador de despliegue. Al abrirlo, mostrar todos los títulos en una lista vertical; marcar el actual con texto y estado accesible. Elegir un concepto cierra el índice y lleva el foco al título. Abrir o cerrar sin elegir conserva la lectura actual.

El contenido presenta un concepto cada vez, con Anterior y Siguiente. La lección completa permanece disponible como consulta opcional. En escritorio el mismo índice puede ocupar una columna lateral. No es necesario deslizar para descubrir ningún concepto.

### Clasificación AWS y CNB

Presentar una ficha activa y debajo sus destinos como botones compactos con etiquetas completas. Mostrar «Ficha 3 de 7» y «2 colocadas». Elegir un destino registra la asignación y muestra la siguiente pendiente; anunciar brevemente la acción y ofrecer Deshacer. El progreso de colocación no equivale a aciertos.

Para las prácticas actuales, los destinos tendrán una etiqueta principal y ayuda secundaria desplegable; en 375 × 844 la ficha y los destinos de etiquetas breves deben caber juntos al situar el área de trabajo al inicio. Con zoom, textos extensos o teléfono horizontal, permitir desplazamiento vertical y mantener visible un resumen breve de la ficha. Nunca reducir la tipografía ni recortar texto para cumplir una altura fija.

«Revisar mis respuestas» abre un resumen agrupado por destino, con contador por grupo y filas editables. Editar lleva esa ficha al área de trabajo sin eliminar su asignación hasta elegir un destino nuevo. Permitir cancelar la edición, cambiar de categoría y devolver una ficha a pendientes. Deshacer revierte únicamente la última asignación y su contador.

Al completar las asignaciones, mostrar el resumen y Comprobar. Tras comprobar, señalar los errores con texto e icono además del color; acceso directo «Corregir» a cada ficha. Conservar respuestas correctas. La evaluación sigue siendo global y usa los comprobadores existentes; no revelar aciertos mientras se está asignando.

Para AWS con recorrido adicional, dividir la práctica en «Clasificar», «Ordenar» y «Revisar». Conservar todos los valores al retroceder. El botón final se habilita con las reglas actuales de `practiceReady`; conservar explicaciones, reinicio y paso a comprobación. Reiniciar después de haber trabajado requiere una confirmación accesible.

Escritorio puede mostrar el resumen junto al área activa. Arrastrar es opcional con ratón; el toque y el teclado deben resolver todo el ejercicio. Evitar bloquear el scroll sobre fichas táctiles.

### Emparejar y ordenar

En móvil, emparejar presenta un enunciado activo seguido por todas las parejas candidatas, sin dos columnas estrechas. Las candidatas ya usadas indican su asociación. Reasignar una pareja avisa qué relación se cambia y deja pendiente la anterior, manteniendo la regla uno a uno. El resumen muestra ambos textos de cada relación y un botón Editar.

Ordenar mantiene la secuencia completa, porque comparar el orden forma parte del aprendizaje. Cada fila incluye posición, texto y controles de al menos 44 × 44 px. Para saltos largos, «Mover a posición…» evita decenas de toques. Foco y anuncio siguen al elemento movido. El arrastre, cuando exista, se inicia desde un asa específica.

### Lecturas, preguntas y trabajo por etapas

Lectura comprensiva: fase de lectura y luego una pregunta cada vez, con «Consultar texto» disponible sin perder respuesta ni posición. Verdadero/falso y autoevaluación: una afirmación cada vez, navegación anterior/siguiente y resumen antes de entregar. Las opciones de una misma pregunta siempre se presentan juntas.

Proyectos: separar guía, trabajo y autoevaluación; mostrar avance y dejar consultar instrucciones previas. Simulación de liderazgo: una decisión por etapa y revisión final antes de ejecutar. Práctica cultural: agrupar contexto, acción y revisión manteniendo la ruta honesta de consulta, la evidencia requerida y la validación real de la acción.

No autoavanzar al elegir respuestas de comprobación. El estudiante confirma y puede corregir antes de entregar. Conservar los intentos, requisitos de evidencia, tiempos y condiciones pedagógicas existentes.

### Controles y barra de acción

Una sola barra principal de acción durante la lección. En AWS, sustituye a la navegación global mientras se estudia; una salida explícita conduce al dominio. Las etapas Explorar, Practicar y Comprobar siguen accesibles desde una cabecera compacta.

La barra contiene la acción principal y un estado breve. Las explicaciones largas se muestran en el contenido y reciben foco; no convierten la barra en una pared fija que tape la actividad. Reservar espacio según la altura real de la barra. Usar áreas seguras y altura dinámica del viewport. Con teclado abierto o altura reducida, los controles pueden pasar al flujo normal para mantener visible el campo activo.

Mínimo de 44 × 44 px para controles independientes, preferencia de 48 px para acciones frecuentes. En selección de palabras dentro de un texto, conservar la lectura natural, ampliar espaciado y evitar áreas de toque superpuestas. Añadir controles explícitos de precisión para gráficas y coordenadas. La página debe poder desplazarse al comenzar el gesto fuera del asa o superficie de dibujo.

### Navegación y catálogos

En AWS, temario agrupado por dominio con progreso visible, desplegando inicialmente el dominio de la siguiente lección. En primaria, abrir la unidad actual y permitir elegir semana directamente. Al volver de una lección, recuperar el grupo y la posición de navegación de la sesión.

Los filtros breves se distribuyen en filas o cuadrículas; listas extensas usan un selector etiquetado y muestran la selección actual. Los cinco días se muestran con etiquetas cortas y accesibles; en anchos donde no quepan pasan a selector, sin carrusel oculto.

Cuaderno, medios y evidencias usan búsqueda/filtros y páginas de 20 resultados con anterior/siguiente y recuento total. Filtrar reinicia la página. Mantener los filtros al volver desde un detalle. Docente ofrece resumen por área y contenidos desplegables; el plan semanal usa tarjetas en móvil. La galería del sistema abre una actividad a la vez.

Encuesta: agrupar las diez preguntas en tres pasos, conservar borrador y ofrecer revisión final. Un error abre el paso correspondiente y enfoca el campo. Perfil, ajustes, logros y onboarding conservan su organización donde ya es adecuada; ajustar envoltura de filas, etiquetas, blancos táctiles y cabeceras largas.

## Matriz de las 28 actividades

| Actividad | Tratamiento mobile first |
| --- | --- |
| explain | Texto legible y tarjetas desplegables; conservar requisito de descubrirlas todas |
| worked-example | Paso actual destacado, anteriores consultables; evitar acumulación obligatoria |
| choice | Opciones juntas en una columna; cuadrícula solo para contenido breve que quepa |
| sort | Ficha activa, destinos próximos, deshacer y resumen editable |
| order | Secuencia completa, controles amplios y mover a posición |
| match | Enunciado activo, candidatas y resumen textual de parejas |
| maya-number | Mantener niveles y valor posicional; ampliar controles y hacer accesible vaciar |
| number-input | Conservar teclado amplio; cifra y unidad deben envolver sin recorte |
| slider | Conservar rango; agregar menos/más para ajuste exacto |
| symmetry-loom | Paleta y tablero cercanos; selección por celda y controles de fila/columna para mallas densas |
| polygon-lab | Figura compacta, controles y respuesta próximos; consulta del dibujo al escribir |
| coordinate-map | Plano acompañado de controles x/y también al colocar; nunca depender de precisión táctil |
| chart-builder | Categoría activa, dato fuente y menos/más; gráfica completa como vista comparativa |
| rhythm | Evitar compresión ilimitada de notas; edición por nota con resumen de tiempos y reproducción |
| pulse-lab | Mantener fases y botón grande; revisar pantalla horizontal y controles de corrección |
| dilemma | Escenario consultable y consecuencia junto a decisión; cambio de elección accesible |
| recipe-scaler | Ingrediente activo, cantidades base/destino y teclado juntos; tabla completa opcional |
| reflection | Afirmación actual, escala legible, compromiso y revisión final |
| true-false | Una afirmación con ambas respuestas; navegación y revisión sin perder selección |
| fill-blank | Espacio activo y banco próximo; consulta de texto completo y edición explícita |
| highlight | Conservar contexto del párrafo, mejorar separación táctil y estados accesibles |
| reading | Texto consultable y una pregunta a la vez con estado conservado |
| short-answer | Escritura, comparación y criterios por etapas; teclado sin solapamientos |
| flashcards | Conservar una tarjeta por vez; añadir navegación explícita para revisar anteriores |
| project | Guía, ejecución y rúbrica por etapas con avance y consulta |
| low-activity-mode | Resumen de cambios y control actual visibles; detalles antes/después desplegables |
| leadership-simulation | Cuatro decisiones por etapas y revisión antes de ejecutar |
| cultural-conservation-practice | Contexto, acción y criterios por etapas; preservar ambas rutas y evidencia |

## Arquitectura y estado

Crear componentes pequeños compartidos para índice desplegable, navegación entre elementos, editor de asignaciones, resumen de respuestas y barra de acción. Los adaptadores de AWS y CNB mantienen sus propias reglas de evaluación. Evitar un componente universal con excepciones para las 28 actividades.

Los valores de respuestas continúan en los propietarios actuales: `PracticeValue` para AWS y `ActivityProps.value` para CNB. Los nuevos estados de interfaz —elemento activo, grupo abierto y etapa local— no alteran el formato de respuestas ni los resultados guardados. Cambiar ancho u orientación no remonta la actividad ni pierde valores. No prometer recuperación tras recarga para borradores que hoy solo existen en memoria.

Usar botones nativos, etiquetas visibles, `aria-expanded`, `aria-current` y anuncios breves. Si se necesita un diálogo de edición, debe contener el foco, cerrarse con Escape, ofrecer Cancelar y devolver el foco al disparador. Un reinicio limpia también selección, historial de deshacer y estados de revisión.

## Entrega propuesta

1. Base de lección móvil, índice AWS y clasificación compartida: corrige las dos fricciones señaladas.
2. Emparejamiento, ordenación, completar espacios, receta y controles de precisión.
3. Lecturas, actividades por etapas y formularios largos.
4. Catálogos, navegación de ambos programas y controles auxiliares.
5. Verificación integral y documentación de límites observados.

Todos los bloques forman parte del alcance; su separación permite revisar cambios sin mezclar los formatos de respuestas. El alcance no incluye publicar el sitio ni modificar el contenido curricular remoto.

## Criterios de aceptación

- Viewports de 320, 375, 390, 430, 768 y 1280 px; teléfono horizontal de 844 × 390; temas claro y oscuro; movimiento reducido y texto aumentado al 200 %.
- Ningún concepto, filtro esencial o destino exige descubrir un carrusel horizontal.
- En clasificación, llegar a cualquier destino no requiere recorrer las fichas ya colocadas. Completar, editar, devolver a pendientes, deshacer y corregir son posibles con toque y teclado.
- Las prácticas actuales permiten ver ficha y destinos compactos juntos a 375 × 844 al entrar al área de trabajo; para contenidos extensos y zoom se conserva el contexto durante el scroll.
- Revisar una respuesta no cambia otras respuestas silenciosamente. En emparejar, se comunica expresamente la relación desplazada.
- Cada etapa conserva respuestas al consultar contenido, retroceder y cambiar orientación. Comprobar, reintentar y finalizar mantienen puntuación y número de intentos.
- El último elemento y la explicación completa quedan accesibles sin superposición de barra, navegación o teclado.
- Gráficas, coordenadas y ordenación se resuelven sin arrastre. Dibujar no bloquea el desplazamiento fuera del tablero.
- Las pruebas táctiles usan coordenadas visibles y gestos; no aceptan el auto-scroll de Playwright como evidencia de buena interacción.
- Medir límites de elementos además de `scrollWidth`: `overflow-x: clip` no debe esconder controles fuera de pantalla.
- Validar las 28 actividades con contenido real representativo, incluyendo textos extensos y el mayor conjunto disponible de elementos; registrar cuáles tuvieron recorrido funcional completo.
- Ejecutar pruebas unitarias, validación de contenido, TypeScript/build y pruebas de interfaz. La validación de teclado virtual y áreas seguras requiere además comprobación en navegador móvil real.

## Estado de verificación

Las mediciones de AWS y pantallas principales se obtuvieron en navegador. La revisión del código y la apertura de un ejemplo representativo en la galería cubren los 28 tipos registrados; el recorrido terminó sin errores de ejecución del navegador. Se midieron controles de 34 × 24 px en ordenación, 64 × 40 px en numeración maya, 76 × 40 px en recetas y espacios de 72 × 38 px. En la galería, proyectos y liderazgo alcanzaron 1630 y 1511 px respectivamente; estas alturas incluyen el contenedor de demostración y no equivalen a medidas del reproductor de lecciones. La auditoría no equivale a haber completado todas las actividades con tacto, teclado, zoom o dispositivos físicos. Estas mediciones corresponden al estado previo a la implementación.


## Implementación y cobertura

Se implementaron el índice de conceptos desplegable, el editor compartido de asignaciones con deshacer y revisión, la práctica AWS por etapas, las actividades CNB progresivas y los controles de precisión. Los catálogos usan páginas de 20 resultados, el temario usa grupos desplegables y la navegación conserva selección y posición durante la sesión. La barra del reproductor reserva su altura medida y presenta las explicaciones largas dentro del contenido.

La revisión encontró y corrigió pérdida de foco al editar respuestas, saltos de ordenación fuera de vista, feedback de recetas poco visible y preferencias iniciales que se perdían cuando cambiaba el progreso. Con texto al 200 %, la navegación de fases envuelve sus etiquetas. Las fichas que superan un cuarto de la altura visible pasan al flujo normal y ofrecen un acceso compacto «Consultar ficha»; los destinos pasan a una columna según el espacio que necesitan sus etiquetas.

| Suite | Cobertura funcional |
| --- | --- |
| `tests/mobile-learning.mjs` | Conceptos, clasificación completa con error/corrección, editar/cancelar/devolver/deshacer, reinicio, consulta entre fases, emparejamiento con desplazamiento anunciado, orden AWS con teclado, destinos sin superposición con texto grande; selección de palabras y consecuencias; apertura de los 28 ejemplos reales |
| `tests/mobile-precision.mjs` | Ordenación y saltos largos, espacios, recetas y corrección, gráficas, coordenadas, ajuste decimal, telar denso, ritmo, numeración maya, números/unidades largos, geometría y pulso con cambio de orientación |
| `tests/mobile-stages.mjs` | Lectura, verdadero/falso, reflexión, proyecto, liderazgo, práctica cultural, respuesta corta, ejemplo resuelto, explicaciones, tarjetas y bajo consumo; conservación de respuestas, foco y temporizador real |
| `tests/mobile-navigation.mjs` | Año/unidad/semana, regreso tras actualizar progreso, cuaderno, medios, docente/evidencias, galería, encuesta/borrador/errores, días, onboarding y preferencias conservadas |
| `tests/interface-e2e.mjs` | Cuatro prácticas AWS, cuestionario, intentos y resultados persistidos, temas y reproductor CNB |

Las matrices automatizadas cubren anchos de 320, 375, 390, 430, 768 y 1280 px, horizontal 844 × 390, temas claro/oscuro y texto al 200 %. Hay verificaciones táctiles por coordenadas y gestos, teclado, límites internos y posición visible de controles. Abrir los 28 ejemplos reales no equivale a completar cada variante curricular: los recorridos funcionales específicos están enumerados por suite arriba.

Las pruebas usan contenido local y sustituyen Firebase, analítica y sincronización remota. No se desplegó el sitio. Queda como comprobación de dispositivo físico el teclado virtual, las áreas seguras y los lectores de pantalla de iOS/Android; la emulación de Chromium no demuestra esos comportamientos.


La compilación y la validación de contenido terminaron correctamente. Persisten tres advertencias curriculares previas por referencias a áreas no declaradas (semanas 13 y 31), y la advertencia de Vite sobre el tamaño del paquete principal; no se modificaron esos contenidos ni la estrategia de carga en este trabajo.


Verificación final: `npm test` (12 archivos, 0 fallos), `npm run build` (incluye contenido y TypeScript), `npm run test:ui` y `npm run test:mobile` terminaron con código 0. Las cuatro suites móviles se ejecutaron juntas después de las últimas correcciones. Se inspeccionaron las capturas de lectura a 375 px, práctica a 375 px y destinos con texto al 200 %. `git diff --check` no reportó errores.
