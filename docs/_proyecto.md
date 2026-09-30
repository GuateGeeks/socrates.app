# Socrates Aprende — plataforma interactiva CNB (Sexto Primaria)

Estado (2026-09-26): prototipo funcional en `C:\Users\adawolfs\claude\socrates-app`. React + Vite + TS, PWA mobile-first. 8 misiones, 15 lecciones, 98 pasos, 17 tipos de actividad, 69 indicadores de logro de Sexto cubiertos. Validado: contenido vs CNB, 8 pruebas unitarias, E2E en teléfono y tableta (103 verificaciones).

Siguientes pasos sugeridos: ampliar cobertura (L2, L3, CCSS, FC, PyD son las más bajas), paquetes de contenido en idiomas mayas, StorageAdapter hacia backend de Socrates, pistas adaptativas con RAG usando step.cnb, grados 4.º y 5.º (catálogos ya generados).

## De las figuras del CNB al producto

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
69 indicadores de logro con al menos una actividad interactiva. `npm run validate` imprime la cobertura por área para planificar las siguientes misiones.

## Arquitectura

```
contenido/ (md del CNB) ──build-cnb──▶ src/cnb/generated/*.json ──▶ src/cnb/catalog.ts (lookup por id)
                                                                     ▲
src/content/<grado>/*.ts (misiones, JSON puro vía DSL tipado) ───────┘ referencias cnb:[...]
        │
        ▼
src/core/engine.ts (máquina de estados por paso, pura)  ◀── src/core/registry.ts ◀── src/activities/* (plugins)
        │
        ▼
src/screens/LessonPlayer.tsx ──▶ src/core/progress.ts (XP, racha, estrellas, evidencia por indicador, insignias)
                                         │  StorageAdapter (hoy localStorage → mañana API de Socrates)
                                         ▼
                              Logros · Docente · Rueda del Tema Generador
```

## Capas
| Capa | Responsabilidad | Depende de |
|---|---|---|
| `design-system/` | tokens, motion, sonido, háptica, componentes, drag & drop | nada de dominio |
| `cnb/` | modelo curricular, catálogo generado, áreas/ejes/ámbitos/fases | — |
| `core/` | tipos, registro de actividades, motor, progreso, router, i18n | cnb |
| `activities/` | plugins de interacción | core, design-system |
| `content/` | cursos → misiones → lecciones → pasos (datos) | tipos de actividades |
| `screens/`, `ui/` | pantallas y componentes de dominio | todo lo anterior |

## Puntos de extensión
1. **Nueva actividad**: un archivo con `defineActivity({...})` + una línea en `activities/index.ts`. El reproductor, la galería `/sistema`, el validador y el E2E la descubren solos. Ver `docs/AUTORIA.md`.
2. **Nuevo grado**: `npm run cnb` ya genera los JSON de todos los grados de `contenido/`; registrar el JSON en `cnb/catalog.ts` y crear `content/<grado>/`.
3. **Persistencia en servidor**: implementar `StorageAdapter` (`load/save`) y llamar `setStorageAdapter()`.
4. **Idiomas**: `core/i18n.ts` para interfaz; el contenido se traduce como paquete aparte (K'iche', Kaqchikel, Q'eqchi', Mam…).
5. **IA de Socrates**: el paso tiene `hint`/`explain` estáticos; un servicio RAG puede generar pistas adaptativas usando `step.cnb` como contexto curricular.

## Decisiones
- **React + Vite + TypeScript**, sin librerías de UI/animación: bundle pequeño para teléfonos de gama baja y datos móviles.
- **Router por hash** y **service worker**: funciona en hosting estático, offline, y como archivo único.
- **Contenido como datos**: todo paso es serializable → exportable a CMS/API.
- **Motor puro** (`engine.ts`) separado de la UI → probado con pruebas unitarias.
- **Gancho E2E** `window.__SOCRATES_TEST__` para recorrer todas las lecciones automáticamente.
