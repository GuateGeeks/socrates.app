# Especificación v3 — Lecciones por materia, Taller interdisciplinario y Reto

Guía obligatoria para quien escribe contenido del ciclo escolar de Sexto. Complementa `docs/ESPECIFICACION_CONTENIDO.md` (actividades, medios, íconos y calidad, secciones 8-11, **siguen vigentes**). Si algo se contradice, manda este documento.

**Principio rector: valor, coherencia y ritmo primero.** La plataforma debe permitir que una niña o un niño aprenda **la mayor parte de lo que pide el CNB directamente en la plataforma**, a su ritmo, con explicaciones completas. Integrar áreas es bueno **solo cuando la conexión es natural**; nunca fuerces un tema dentro de otro. Está bien que una lección sea 100 % de su materia.

## 1. El día y la semana escolar
Cada semana de aprendizaje (semanas 1-8 de cada unidad) tiene:
- **27 lecciones de materia** repartidas por un horario fijo (`src/content/sexto/horario.ts`), 5-6 por día, de **10-15 min** cada una (≈ 60-80 min diarios):

| Materia | id | Lecciones/semana | Días |
|---|---|---|---|
| Matemáticas | `mat` | 5 | L M X J V |
| Comunicación y Lenguaje L1 | `l1` | 5 | L M X J V |
| Ciencias Naturales y Tecnología | `cnt` | 3 | L X V |
| Ciencias Sociales | `ccss` | 3 | L X J |
| L2 (segundo idioma) | `l2` | 2 | M J |
| L3 (inglés) | `l3` | 2 | M J |
| Formación Ciudadana | `fc` | 2 | M V |
| Expresión Artística | `art` | 2 | L J |
| Educación Física | `ef` | 2 | M V |
| Productividad y Desarrollo | `pyd` | 1 | X |

- El **viernes** cierra con el **Taller interdisciplinario** (1 lección) y el **Reto semanal** (evaluación mixta). Ambos viven en el archivo de la semana `src/content/sexto/semanas/sNN.ts`.
- Semana 9 de cada unidad: **Proyecto integrador** (ya existe). Semana 10: **Validación** (se arma sola con los bancos y los boletos de salida de las lecciones de materia).
- El día de cada lección de materia **lo asigna el horario** según su orden: la 1.ª lección de `cnt` de la semana cae lunes, la 2.ª miércoles, la 3.ª viernes. **No pongas `day` en las lecciones de materia.**

## 2. Archivos de materia
Cada materia y unidad tiene un archivo índice `src/content/sexto/materias/<area>/u<N>.ts` (ya existe vacío; **reemplázalo**) que reúne **un archivo por semana** en la carpeta `src/content/sexto/materias/<area>/u<N>/`:

```ts
// src/content/sexto/materias/mat/u1/s01.ts  — lecciones de la semana 1 (en orden)
import { lesson, S } from '../../../../dsl';
export default [
  lesson({ id: 's01-mat-1', ... }),
  lesson({ id: 's01-mat-2', ... }),
  // …5
];

// src/content/sexto/materias/mat/u1.ts  — índice de la unidad
import { materia } from '../../../dsl';
import s01 from './u1/s01';
import s02 from './u1/s02';
// …
export default materia({
  area: 'mat', unidad: 1,
  hilo: 'Una o dos oraciones: el recorrido de la materia en la unidad (qué construye y hacia dónde va).',
  semanas: { 1: s01, 2: s02 /* …las 8 semanas de aprendizaje: U1 1-8, U2 11-18, U3 21-28, U4 31-38 */ },
});
```
Escribe semana por semana (un archivo cada vez) y valida al terminar cada una.
- **id de lección**: `sNN-<area>-<k>` con k = 1..n en orden (p. ej. `s12-cnt-3`). Ids de medios: `sNN-<area>-<k>-<slug>`. Los ids de paso se generan solos.
- Cada semana tiene **exactamente** el número de lecciones de la tabla.
- Campos de cada lección: `id, title, icon, minutes (10-15; máx. 20), gancho, objetivos (2-3), resumen (2-4), media, steps`. `kind`, `area` y `day` se completan solos.
- `title`: nombre concreto del tema ("Triángulos según sus ángulos"), no genérico ("Matemáticas 1").

**Ejemplo de referencia obligatorio: `src/content/sexto/materias/_ejemplo.ts`.** Léelo completo e iguala su nivel.

## 3. Anatomía de una lección de materia (ritmo)
**9 a 14 pasos**, en este orden:
1. `explorar` (1): gancho activo y breve — una predicción, una pregunta de la vida diaria, una observación. Sin penalizar.
2. `construir` (3-6): **enseñanza explícita** y práctica guiada.
   - Al menos **2 pasos de enseñanza** (`S.explain` con tarjetas, `S.reading`, `S.ejemplo` = ejemplo resuelto paso a paso).
   - Definiciones claras, **ejemplos y contraejemplos**, el porqué, errores frecuentes.
   - Práctica guiada **calificada con `hint`** y `explain`, inmediatamente después de enseñar.
3. `aplicar` (2-3): práctica independiente calificada en situaciones reales, cada vez un poco más difícil.
4. `comprobar` (2): **boleto de salida**, calificado, sin `hint`, ítems nuevos que miden lo enseñado **en esta lección**.
5. `reflexionar` (0-1): breve (`S.reflect` o `cierre()`); úsalo en la última lección de la semana de la materia o cuando aporte.

Reglas:
- **Enseña antes de evaluar**: nada en práctica, boleto, reto o banco que no se haya enseñado antes.
- **Autosuficiente**: un niño sin maestro debe poder entender el tema solo con la lección. Si el tema es grande, divídelo en varias lecciones; no lo resumas en una tarjeta.
- **Una idea central por lección.** Mejor 2 lecciones claras que 1 apretada.
- **Progresión**: cada lección se apoya en la anterior; la última lección de la semana de cada materia puede ser de **práctica mixta y repaso espiral** (incluye 1-2 ítems de semanas anteriores).
- Todos los pasos llevan `areas` con **la materia en primer lugar** (`areas[0]` = materia; el validador lo exige). Agrega otras áreas como secundarias **solo** si el paso de verdad las trabaja.
- `cnb`: ids de CONTENIDO (`mat:1.1.1`) de la propia materia que el paso enseña o evalúa de verdad.
- Variedad: no repitas el mismo tipo de actividad más de 2 veces seguidas; usa las actividades manipulativas (polygon, loom, maya, slider, chart, coord, rhythm, recipe, pulse) donde enseñan mejor que una pregunta de opción múltiple.
- Representación visual: no uses `Circle`, `Square` u otra forma abstracta para representar objetos concretos (tortilla, ventana, panela, pozo, cancha, herramienta). Usa un icono Lucide específico (`Pizza`, `AppWindow`, `Package`, `Store`, `School`, `Wheat`, etc.) o agrega un `media` mock con brief claro de la imagen, diagrama o animación que debe reemplazarlo. Las formas geométricas solo deben representar la figura matemática cuando esa figura es el contenido que se enseña.
- Matemáticas: el contexto debe servir al contenido. Usa `coord` para mapas y puntos, `slider` para rectas o termómetros, `polygon` para geometría, `chart` para datos, `recipe` para proporciones y `maya` para numeración maya antes de recurrir a choice. Si haría falta una simulación más compleja, deja un media mock con la animación esperada.
- Lenguaje: vocabulario, lectura, producción escrita y oralidad deben compartir el tema central de la lección. Evita listas de palabras desconectadas del texto, situación o producto de la clase.
- Retroalimentación formativa: `feedback` en distractores y `misconceptions` en `S.number` para errores típicos.
- Duración: estima ~1 min por paso de práctica y ~1.5 min por paso de enseñanza o lectura; `minutes` realista.

## 4. Cobertura y secuencia de la unidad
- `tsx scripts/area-brief.ts <area> <unidad> --material` lista, semana por semana, los **contenidos del plan** asignados a tu materia (con su indicador) y el **material ya escrito** en las semanas integradas (sNN.ts) que trabaja tu materia: reutiliza y mejora lo bueno (explicaciones, contextos, ítems), copiando y adaptando en tu archivo.
- **Todos los contenidos del plan de tu materia en la unidad** deben aparecer en el `cnb` de pasos que los enseñan. El plan sugiere la semana; puedes mover un contenido a otra semana **de la misma unidad** si la secuencia didáctica lo pide (el validador verifica por unidad).
- Si una semana tiene pocos contenidos del plan (p. ej. Matemáticas en unidades 2-4), **profundiza**: más ejemplos, problemas, práctica, cálculo mental, estimación, resolución de problemas y repaso espiral. Si tiene muchos, agrupa contenidos afines en una lección.
- Contenidos actitudinales (valoración, respeto, práctica de…) se trabajan con dilemas, lecturas, reflexión, compromisos y ejemplos, no con una sola tarjeta.

## 5. Guía por materia
- **Matemáticas**: concreto → pictórico → simbólico. Ejemplos resueltos (`S.ejemplo`) antes de cada procedimiento. Números y situaciones de Guatemala (quetzales, mercado, milpa, medidas locales). Cálculo mental y estimación. Actividades manipulativas (polygon, maya, slider fracciones, chart, coord, recipe).
- **Comunicación y Lenguaje L1**: cada semana combina **lectura** (textos originales escritos por ti, 120-300 palabras, variados: cuento, leyenda, noticia, instructivo, poema, texto expositivo, carta), **gramática/ortografía** con reglas claras y ejemplos, **vocabulario** y **producción escrita** (`S.write` con modelo y rúbrica) y oral. Preguntas literales, inferenciales y críticas.
- **Ciencias Naturales y Tecnología**: fenómeno o pregunta → explicación científica correcta → modelos/diagramas (media) → aplicación en salud, ambiente y tecnología. Experimentos caseros **seguros** descritos paso a paso (sin fuego, químicos peligrosos ni objetos cortantes). Temas de sexualidad y salud: lenguaje científico, respetuoso, apropiado para 11-12 años.
- **Ciencias Sociales**: mapas (`coord`), líneas de tiempo (`order`), fuentes (`reading`), causas y consecuencias. Fechas, lugares e instituciones **verificables**. Perspectiva multicultural (maya, garífuna, xinka, ladina/mestiza).
- **L2**: desarrolla las competencias de L2 del CNB (escuchar, hablar, leer, escribir con distintas intenciones) en contextos **interculturales y bilingües**. Trabaja en español como segundo idioma. Puedes incluir palabras de idiomas mayas **solo si son muy conocidas y seguras** (p. ej. saludos comunes) y siempre como invitación a investigarlas con la familia; los medios de audio en idioma maya llevan en el brief "requiere validación y grabación por hablante nativo".
- **L3 (inglés)**: instrucciones en español, contenido en inglés sencillo y correcto (vocabulario, frases útiles, diálogos cortos, lectura breve). Media de audio para pronunciación (brief con el texto exacto a grabar).
- **Formación Ciudadana**: situaciones de la vida escolar y comunitaria, derechos y responsabilidades, dilemas (`S.dilemma`), Acuerdos de Paz y Constitución con datos exactos.
- **Expresión Artística**: música (`rhythm`, escucha con media de audio), artes visuales (`loom`, color, forma, observación de obras descritas en media), teatro y danza (secuencias, expresión). Incluye **una actividad para hacer en casa** con materiales sencillos.
- **Educación Física**: lecciones **activas**: calentamiento, rutina guiada con `S.pulse` (ejercicios con segundos), técnica explicada paso a paso con media (video/animación), reglas de juego, seguridad e hidratación, y estiramiento. Siempre con alternativas para espacios pequeños y adaptaciones inclusivas.
- **Productividad y Desarrollo**: emprendimiento, trabajo, tecnología, cuidado de recursos, con casos de la comunidad y pequeños planes (`S.project`, `S.write`, `S.chart`).

## 6. Medios
Cada lección tiene `media` principal. Además, al menos **1 de cada 3 lecciones** tiene un paso con `media` propio (diagrama, animación del procedimiento, audio de lectura o pronunciación, video de técnica). Los briefs siguen la sección 8 de `ESPECIFICACION_CONTENIDO.md` y deben poder producirse sin más contexto.

## 7. Cierre semanal (archivo de la semana `sNN.ts`) — lo escriben los integradores
```ts
export default semana({
  id: 'sNN', unidad, semana: NN, kind: 'aprendizaje', temaGenerador, title, subtitle, icon, color, contexto, ejes, media, badge,
  lessons: [ taller, reto ],
  bank: [ 10-12 ítems ],
});
```
- **Taller interdisciplinario** — `lesson({ id: 'sNN-d5-taller', kind: 'taller', day: 5, title, icon, minutes: 15-20, gancho, objetivos, resumen, media, steps })`: 10-14 pasos alrededor del tema generador de la semana, que **usan lo que se aprendió en las lecciones de materia de esa semana** y conectan 2-4 materias **donde la conexión es real** (p. ej. porcentajes con datos de población; ritmo musical y fracciones; lectura de una noticia científica). Termina con un producto o decisión (`write`, `project`, `dilemma`, `chart`) y `cierre()`. No enseña contenidos nuevos.
- **Reto semanal** — `lesson({ id: 'sNN-d5-reto', kind: 'reto', day: 5, title: 'Reto de la semana NN', icon: 'Trophy', minutes: 12-15, objetivos, resumen, media, steps })`: 10-12 ítems calificados, `fase: 'comprobar'`, sin `hint`, **nuevos**, de al menos 6 materias, sobre lo enseñado esa semana en las lecciones de materia.
- **Banco**: 10-12 ítems calificados nuevos, ≥5 materias principales (se usan en la validación de la unidad).
- El tema generador, el título, el contexto y los ejes describen la semana real (ajústalos a lo que enseñan las materias).
- Las 4 lecciones integradas anteriores (`sNN-d1…d4`) **se eliminan**: su buen material ya se reutilizó en las materias o en el taller.

## 8. Herramientas
- `tsx scripts/area-brief.ts <area> <unidad> --material` — contenidos del plan por semana + material existente reutilizable.
- `tsx scripts/week-agenda.ts <semana>` — agenda de la semana por día: título, objetivos, ideas clave y CNB de cada lección (para integradores y revisores).
- (`tsx` = `/home/claude/.npm-global/bin/tsx`)

## 9. Verificación (obligatoria antes de terminar)
```bash
cd /home/claude/socrates-app && /home/claude/.npm-global/bin/tsx scripts/validate-content.ts --unidad=N --materia=<tus áreas> --quiet   # integradores: sin --materia
cd /home/claude && /home/claude/.npm-global/bin/tsc -p tsconfig.content.json
```
Termina solo con **cero errores** en tus archivos. Otros autores trabajan en paralelo en otras materias: ignora errores de archivos que no son tuyos y no los edites; si el validador falla porque otro archivo está a medio escribir, espera 30 s y reintenta.
