# Unidad 2 de Sexto Primaria

**Fecha:** 2026-10-05
**Alcance:** semanas 11–20, diez materias del CNB.

## Objetivo

Convertir la Unidad 2 al modelo pedagógico y técnico de la Unidad 1: 27 lecciones de materia en total, un taller y un reto en cada una de las semanas 11–18; proyecto integrador de cinco jornadas en la semana 19; validación por áreas y portafolio generados para la semana 20.

## Fuente y cobertura

El material fuente son los diez archivos de dosificación de sexto en `~/Desktop/CNB/base_local_cnb/03_Primaria/`, transcritos en `src/cnb/generated/sexto-grado.json`. `src/content/sexto/plan.json` determina los contenidos exigidos por semana. Cada referencia usa su prefijo de área. Se conservan todos los contenidos asignados a la Unidad 2 y el horario de `src/content/sexto/horario.ts`.

## Diseño de lecciones

Cada materia sigue una progresión propia. Una lección enseña una idea central en 8–20 minutos, mediante Explorar, Construir, Aplicar, Comprobar y, cuando aporta valor, Reflexionar. Incluye enseñanza explícita, ejemplo o modelo, práctica guiada con retroalimentación, aplicación independiente y dos evidencias de salida nuevas sin pistas. Las actividades y los contextos son apropiados para estudiantes de 11–12 años, con ejemplos guatemaltecos verificables y sensibles a la diversidad cultural.

Los medios que aún no existen son maquetas con título, descripción accesible, ficha de producción, dimensiones o duración pertinentes e identificador estable. Se normalizan con `withProductionReadyMedia` como en la Unidad 1.

## Diseño semanal

El tema generador surge de dos a cuatro conexiones reales entre materias. El taller del viernes recupera contenido ya enseñado, desarrolla un producto realizable sin docente ni materiales difíciles de obtener y no introduce contenido curricular nuevo. El reto contiene preguntas nuevas sin pistas de al menos seis materias. El banco aporta ítems nuevos para la validación por áreas.

El proyecto de la semana 19 se desarrolla en cinco sesiones breves, puede completarse individualmente con un caso simulado y reúne los aprendizajes de las ocho semanas. La semana 20 conserva el generador existente de evaluaciones y portafolio.

## Límites y aceptación

Se mantienen el motor, la navegación, el modelo de progreso, el DSL y el catálogo CNB. Se reemplazan las cuatro lecciones integradas antiguas de cada semana de aprendizaje por la estructura de materias, taller y reto. No se altera `plan.json`.

La unidad se acepta cuando `npm run validate -- --unidad=2 --strict`, la comprobación de tipos, las pruebas del contenido y la compilación pasan; se verifican conteos, cobertura semanal y por materia, orden de fases, calidad de medios, ausencia de respuestas ambiguas y funcionamiento del recorrido en móvil.
