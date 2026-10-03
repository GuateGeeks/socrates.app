# Arquitectura

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

## Persistencia Firebase y arranque

El arranque pasa por `splash → onboarding → App`. El perfil y cada avance del onboarding se guardan localmente, por lo que Firebase nunca bloquea la entrada. Tras recuperar o crear una sesión anónima, `core/cloud-sync.ts` sincroniza el perfil y una instantánea versionada del progreso en Firestore. Realtime Database contiene únicamente conexiones efímeras de presencia y usa `onDisconnect` para limpiarlas.

Las pantallas no llaman Firebase directamente: `core/progress.ts` conserva su adaptador local síncrono y expone una frontera pequeña para importar/suscribirse a instantáneas. Ante conflicto se elige la instantánea válida más reciente; un empate conserva el estado local. El service worker solo controla recursos del mismo origen y deja las peticiones Firebase fuera de su caché.

## Decisiones
- **React + Vite + TypeScript**, sin librerías de UI/animación: bundle pequeño para teléfonos de gama baja y datos móviles.
- **Router por hash** y **service worker**: funciona en hosting estático, offline, y como archivo único.
- **Contenido como datos**: todo paso es serializable → exportable a CMS/API.
- **Motor puro** (`engine.ts`) separado de la UI → probado con pruebas unitarias.
- **Gancho E2E** `window.__SOCRATES_TEST__` para recorrer todas las lecciones automáticamente.

## v2 · Ciclo escolar completo
```
src/content/sexto/
  plan.json              ← scripts/plan-year.mjs: 833 contenidos → 4 unidades × 8 semanas (respeta la columna "Unidades")
  semanas/sNN.ts         ← 36 semanas escritas (32 de aprendizaje + 4 proyectos) con el DSL
  diagnostico.ts         ← día 0
  extras/                ← misiones destacadas v1, reubicadas como "lecciones extra" en la semana más afín
src/content/assemble.ts  ← arma las 4 Semanas de validación desde los bancos de ítems (bank)
src/content/index.ts     ← Course → Unit → Week (Mission) → Lesson; consultas para las pantallas
```
- **Modos del reproductor** (`LessonPlayer`): `normal` (pistas, reintentos, "ver solución"), `exam` (reto, evaluación, diagnóstico: sin pistas, un intento, resultados por indicador) y `review` (repaso inteligente).
- **Progreso** (`core/progress.ts`): evidencia por indicador **y por contenido**, cola Leitner (`review`), cuaderno (`notebook`), metas diarias, calendario (`schoolWeek`), insignias.
- **Medios** (`ui/MediaSlot.tsx` + `media/assets.ts`): maqueta con ficha de producción hasta que se registre el archivo real.
- **Íconos** (`design-system/icons.tsx`): nombres Lucide en el contenido; `npm run icons` genera el subconjunto usado y la lista que valida el contenido.

## v3 · Día escolar por materias
```
src/content/sexto/
  horario.ts                     ← horario semanal: materia → días (27 lecciones/semana)
  materias/<area>/u<N>.ts        ← lecciones de una materia en una unidad (índice)
  materias/<area>/u<N>/sNN.ts    ← lecciones de esa materia en la semana NN
  materias/_ejemplo.ts           ← lección de referencia para autores
  semanas/sNN.ts                 ← metadatos de la semana + Taller interdisciplinario + Reto + banco
```
- `content/index.ts` fusiona las lecciones de materia con cada semana y les asigna el día según el horario (`diaDe`), ordenando la agenda por día.
- La semana de validación arma **una evaluación por materia** con el banco semanal y los boletos de salida de las lecciones de materia.
- Pantallas: **Hoy** (agenda del día), **Semana** (pestañas lunes-viernes), **Materias** (`#/materias`, `#/materia/:area`: recorrido anual por materia).
- Actividad nueva `worked-example` (`S.ejemplo`): ejemplo resuelto que se revela paso a paso.
- Herramientas de autoría: `scripts/area-brief.ts`, `scripts/week-agenda.ts`; el validador comprueba horario, anatomía de la lección de materia y cobertura del plan por materia y unidad (`--unidad=N --materia=a,b`).
