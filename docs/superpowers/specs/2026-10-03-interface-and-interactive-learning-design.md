# Interfaz coherente y aprendizaje interactivo

Fecha: 2026-10-03. Estado: alcance aprobado e implementado; validación completada.

## Objetivo

Corregir la legibilidad de los temas claro y oscuro en toda la aplicación y alinear la experiencia AWS con los patrones de aprendizaje de Socrates. El contenido debe invitar a explorar y aplicar conceptos, además de responder preguntas.

## Evidencia del repositorio

- `src/design-system/tokens.css` ya distingue tema automático, claro y oscuro. Su regla de preferencia oscura excluye explícitamente `data-theme="light"`; no hay evidencia suficiente para atribuir el problema únicamente a esa media query.
- `src/aws/aws.css` usa colores fijos para enlaces, selección, iconos y retroalimentación. Una opción seleccionada tiene fondo claro `#fff1df` y hereda texto casi blanco en oscuro. Esa combinación necesita corrección.
- `src/startup/startup.css` fija superficies claras y deja algunos controles nativos sin fondo o color explícitos; pueden mezclarse con el esquema oscuro heredado.
- `useStartup` y `App` escriben ambos el tema en el elemento raíz. El arranque usa el perfil y CNB usa su propia configuración. Hay que comprobar los cambios de programa y la restauración antes de unificar esa responsabilidad.
- `AwsLessonScreen` presenta todos los párrafos y luego una prueba de selección. CNB ya dispone de actividades de asociación, clasificación, ordenamiento, descubrimiento y simulación.
- AWS carga el curso publicado desde Firestore. Cambiar solo el JSON local no cambia las lecciones que ve el usuario.
- La prueba inicial con Playwright no pudo iniciar Chromium por falta de `libnspr4.so`; aún no se ha verificado el renderizado.

## Alternativas

1. **Sistema visual común y recorrido interactivo AWS (recomendado).** Reutilizar tokens, patrones de navegación, feedback y accesibilidad. Mantener los modelos de progreso de cada programa. Resuelve el aspecto visual y el problema pedagógico con cambios acotados.
2. **Corrección de estilos únicamente.** Menor alcance, pero mantendría las lecciones como lectura y cuestionarios.
3. **Motor único para todos los programas.** Compartir también el modelo curricular y de evaluación. Exigiría una migración más amplia de datos y progreso que no es necesaria para esta mejora.

## Diseño propuesto

### Temas y componentes comunes

- Mantener la identidad actual: Nunito, iconos Lucide, superficies redondeadas y acentos de cada programa.
- Centralizar colores de texto, superficies, bordes, selección, foco y feedback. Separar el color de texto de éxito/error del relleno de botones cuando el contraste lo requiera.
- Dar a AWS un acento ámbar con variantes claras y oscuras, usando los mismos radios, espaciados, tamaños de control y estados del resto de la aplicación.
- La elección explícita Claro/Oscuro debe prevalecer sobre el teléfono. Automático debe reaccionar a cambios del sistema.
- Aplicar el tema desde un único responsable para arranque, onboarding y programa activo, conservando las preferencias existentes hasta definir su resolución con pruebas.
- Revisar controles nativos, formularios, ajustes, navegación, tarjetas y actividades. El alcance general es la coherencia visual; no reescribir el currículo CNB.
- Objetivos táctiles de al menos 48 px, foco visible, feedback con texto e iconos, movimiento reducido y barras inferiores que respeten las áreas seguras.

### Navegación y consumo de contenido

- Inicio AWS: progreso, siguiente lección y dominios en tarjetas con jerarquía equivalente al resto de Socrates.
- Lección: título, duración e indicador de etapas **Explorar → Practicar → Comprobar**.
- Explorar: una sección a la vez, índice accesible, anterior/siguiente y posibilidad de consultar el texto completo. Conservar todo el contenido disponible; no generar resúmenes automáticos que puedan cambiar su significado.
- Añadir tarjetas de conceptos y comparaciones donde exista contenido estructurado apropiado. Abrir una tarjeta no contará como dominio de un concepto.
- Practicar: actividad manipulable con instrucciones breves, comprobación, explicación del error y reintento. Todas las operaciones deben poder hacerse con toque y teclado sin depender de arrastrar.
- Comprobar: conservar las preguntas existentes y su puntuación; mostrar resultados y acceso claro a repasar o continuar.
- Permitir volver a Explorar durante la práctica sin perder las respuestas de la sesión. Reiniciar la prueba requiere una acción explícita.

### Actividades AWS concretas

Preparar una práctica guiada por cada dominio para la primera entrega:

1. Conceptos de nube: clasificar ejemplos de ventajas y modelos de despliegue.
2. Seguridad: distribuir responsabilidades entre AWS y el cliente en un escenario definido.
3. Tecnología: relacionar necesidades de una aplicación con servicios y ordenar un flujo sencillo de solicitud, cómputo y almacenamiento.
4. Costos: relacionar necesidades de un escenario con herramientas de presupuesto, estimación y seguimiento.

Cada práctica tendrá datos explícitos, solución, explicación y validación; no se derivarán asociaciones de distractores de las preguntas. Asignar las actividades a lecciones mediante sus identificadores estables. El resto de las lecciones obtiene desde esta entrega el lector por pasos y el cuestionario mejorado. La expansión de prácticas específicas a cada lección queda fuera de esta primera entrega.

### Componentes y datos

- Extraer de `AwsExperience.tsx` el reproductor de lecciones, el lector por pasos y la práctica guiada para mantener responsabilidades claras.
- Reutilizar los componentes visuales y patrones accesibles existentes. Compartir lógica de actividades solo cuando sus interfaces encajen sin alterar la evaluación CNB.
- Mantener preguntas y secciones del curso publicado como fuente del contenido actual.
- Distribuir inicialmente las prácticas complementarias con la aplicación, vinculadas por ID de lección. Si el curso remoto no contiene ese ID, no mostrar la práctica. Así la mejora puede revisarse sin publicar cambios de contenido en Firestore.
- La puntuación del cuestionario conserva su significado. Las prácticas formativas no sobrescriben mejores resultados ni marcan una lección completa por abrir contenido.
- Conservar la sincronización y los estados de carga, contenido no disponible, error y reintento.

## Validación de aceptación

- Matriz de seis combinaciones: sistema claro/oscuro por aplicación automático/claro/oscuro, incluyendo cambios sin recargar.
- En modo claro explícito, ningún control adopta superficies oscuras por el sistema. En oscuro, opciones seleccionadas, enlaces y mensajes mantienen contraste legible.
- Comprobar contraste de texto normal de al menos 4.5:1, incluyendo selección y feedback.
- Recorrer inicio, onboarding, ajustes, lección y resultados en ambos programas; verificar cambio de programa y persistencia del tema.
- Revisar móvil de 375–390 px, tableta y escritorio: sin desbordamiento horizontal ni contenido oculto por controles inferiores.
- Verificar por interacción real cada nueva práctica: entrada incompleta, error, explicación, reintento y solución correcta; también teclado y movimiento reducido.
- Confirmar que una lección sin práctica complementaria sigue siendo utilizable y que el progreso previo se conserva.
- Ejecutar tests existentes, validación de contenido, TypeScript y build. Añadir pruebas de regresión del tema y pruebas funcionales de las nuevas actividades.
- Resolver las dependencias del navegador antes de declarar verificada la apariencia. La prueba visual móvil real del navegador del usuario puede ser necesaria si hay recoloreado forzado fuera del control CSS.

## Secuencia de ejecución

1. Reproducir y corregir tema y contraste global.
2. Unificar componentes visuales AWS y navegación de lecciones.
3. Añadir el lector por pasos y las cuatro prácticas guiadas.
4. Verificar accesibilidad, regresiones y renderizado en los temas y tamaños descritos.

## Revisión de la propuesta

El alcance distingue cambios generales de interfaz, mejora del lector en todas las lecciones AWS y cuatro prácticas iniciales. No exige migrar progreso ni publicar contenido remoto. La validación en Chromium cubrió explícitamente aplicación clara con sistema oscuro, controles nativos y preferencias persistidas. Se reprodujeron y corrigieron los colores incompatibles de AWS; la verificación en un teléfono físico queda fuera de la emulación realizada.
