# De las figuras del CNB al producto

Fuente: [Caracterización del nivel Primario](https://cnbguatemala.org/wiki/Caracterizaci%C3%B3n_del_nivel_Primario#Dise%C3%B1o_del_curr%C3%ADculum). Cada figura de esa página se tradujo en una decisión concreta de la plataforma.

## 1. Diseño del currículum — el **Contexto** al centro
La figura pone el *Contexto* en el centro, conectado con las Competencias Marco, los actores (estudiantes, docentes, comunidad, familias), Áreas/Ejes, Investigación-Planificación y Competencias → Indicadores → Contenidos.

**En la app:**
- Cada misión tiene un bloque **"En tu comunidad"** (`Mission.contexto`) con una situación guatemalteca real: el mercado, el telar de cintura, la marimba, los volcanes, los Acuerdos de Paz.
- Los **Ejes** del currículo se etiquetan por misión (`Mission.ejes`).
- Los actores: vista **Estudiante** (Camino, Logros) y vista **Docente**; los compromisos de cierre involucran a la familia y la comunidad.

## 2. Figuras 1 y 2 — la rueda del **Tema Generador**
Un tema generador en el centro integra todas las áreas; cada área aporta *Contenidos/Competencias* (anillo interno) y se evalúa con *Indicadores de logro* (anillo externo).

**En la app:**
- Cada **misión = un Tema Generador** (`Mission.temaGenerador`) y sus lecciones combinan varias áreas **en el mismo paso** (p.ej. numeración maya = Matemáticas + Ciencias Sociales; marimba = Arte + fracciones + Ed. Física).
- La **rueda interactiva** (`src/ui/TemaWheel.tsx`) recrea la Figura 2 con los mismos colores y el mismo orden de áreas: el anillo interno se enciende si la misión trabaja esa área, el anillo externo **se llena con el dominio del estudiante** en los indicadores de esa área. Al tocar un segmento se listan los indicadores con su nivel.
- En *Logros* la rueda muestra el progreso global del estudiante.
- El validador **exige ≥ 3 áreas por misión**. Resultado actual: todas las misiones integran de 4 a 8 áreas.

## 3. Figuras 3 y 4 — diseño lineal: Competencia → Contenidos (D/P/A) → Indicadores
**En la app:**
- `scripts/build-cnb.mjs` convierte tus archivos de dosificación en un catálogo tipado `Área → Competencia → Indicador → Contenido (+ unidades 1–4)`. El tipo de contenido (declarativo/procedimental/actitudinal) se infiere por el sustantivo inicial (heurística documentada en el script).
- Cada paso referencia ids reales del CNB (`cnb: ['mat:4.1.5']`); el validador rechaza ids inexistentes.
- La **evaluación se registra por indicador de logro** (`Progress.evidence`) con niveles *Por iniciar / En proceso / Logrado / Destacado*.
- La **Vista docente** reproduce la estructura lineal: por área, competencias de grado → indicadores con nivel, cobertura en la plataforma y conteo de contenidos D/P/A.

## 4. Proceso E-A-E, ODEC y Dosificación
- **ODEC Ciclo II** (4 temas) = las 4 **Unidades** del camino: *Conociendo nuestras raíces, Consolidando nuestras relaciones, Valorando nuestra convivencia, Fortaleciendo nuestro futuro*; coinciden con las 4 unidades (~8 semanas) de la dosificación.
- Cada lección recorre **fases** derivadas del ciclo E-A-E y del enfoque constructivista: **Explorar** (saberes previos + gancho) → **Construir** (manipular, descubrir) → **Reto** (aplicar) → **Reflexionar** (autoevaluación + compromiso). La vista docente muestra la distribución.
- **Herramientas de evaluación en el aula**: autoevaluación con escala, dilemas registrados en un diario, evidencia exportable (JSON).

## 5. Perfil de egreso — ámbitos del conocer, ser, hacer, convivir y emprender
Cada paso suma a un **ámbito** (`step.ambito`), visible en *Logros → Mi perfil de egreso*.

## Cobertura actual (Sexto)
**100 %**: los 203 indicadores de logro y los 833 contenidos de la dosificación de Sexto están enseñados o evaluados en al menos un paso interactivo, dentro de la semana que les asigna el plan anual. 40 semanas · 216 lecciones · 2 408 pasos · 335 espacios multimedia. `npm run validate` imprime la cobertura por área.

## 6. Del CNB al ciclo escolar (v2)
- La **dosificación** propone 4 períodos de ~8 semanas: la plataforma los convierte en 4 unidades × (8 semanas de aprendizaje + proyecto + validación) = **40 semanas**.
- `scripts/plan-year.mjs` asigna los 833 contenidos respetando la columna "Unidades" de cada contenido y equilibrando la carga del año (≈ 208 por unidad, ≈ 26 por semana).
- Cada semana tiene su **Tema Generador** (Fig. 1-2) que integra los contenidos de varias áreas asignados a ella.
- **Evaluación** (Fig. 3-4 y Herramientas de evaluación en el aula): boletos de salida, reto semanal, evaluación de unidad por área, autoevaluación, proyecto con rúbrica y portafolio; todo se registra por indicador y por contenido.
