# Guía de autoría

## Crear una lección
```ts
// src/content/sexto/m9-mi-mision.ts
import { S, cierre, lesson, mission } from '../dsl';

export default mission({
  id: 'mi-mision', unidad: 2, temaGenerador: 'El agua es vida', title: '…', subtitle: '…', emoji: '💧',
  color: 'var(--area-cnt)', contexto: 'Situación real de la comunidad…', ejes: ['sostenible'],
  badge: { id: 'm-agua', name: 'Guardián del agua', emoji: '💧', desc: '…' },
  lessons: [lesson({ id: 'ciclo-agua', title: 'El ciclo del agua', emoji: '🌧️', minutes: 8, steps: [
    S.explain({ fase: 'explorar', areas: ['cnt', 'l1'], cnb: ['cnt:6.3.1'], prompt: '…' }, { body: '…', reveal: [...] }),
    S.order({ fase: 'construir', areas: ['cnt'], cnb: ['cnt:6.3'], prompt: 'Ordena…', explain: '…' }, { items: [...] }),
    S.number({ fase: 'aplicar', areas: ['mat', 'cnt'], cnb: ['mat:4.5'], prompt: '…' }, { answer: 12.5, allowDecimal: true }),
    cierre({ areas: ['cnt'], cnb: ['cnt:6.4.4'] }, ['Puedo explicar…'], ['Cerraré el chorro…']),
  ] })],
});
```
Luego agrégala a `COURSE.missions` en `src/content/index.ts` y ejecuta `npm run validate`.

**Reglas que verifica el validador:** ids CNB existentes · ≥3 áreas por misión · fases aplicar + reflexionar · `check(solution)` correcto · props válidas por actividad.

**Buenas prácticas:** empieza con un _gancho_ del contexto; usa `hint` (pista sin dar la respuesta) y `explain` (el porqué); agrega `misconceptions` con errores típicos; combina áreas en el mismo paso.

## Crear una actividad
```ts
// src/activities/mi-actividad.tsx
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';

export interface MiProps { objetivo: number }
function Mi({ props, value, onChange, status }: ActivityProps<MiProps, number>) { /* UI */ }

export default defineActivity<MiProps, number>({
  type: 'mi-actividad', label: 'Mi actividad', icon: '✨', description: '…',
  graded: true, Component: Mi,
  isReady: (_p, v) => v !== undefined,
  check: (p, v) => ({ correct: v === p.objetivo, feedback: '…' }),
  solution: (p) => p.objetivo,
  validate: (p) => (p.objetivo < 0 ? ['objetivo negativo'] : []),
});
```
Registrar en `src/activities/index.ts` y (opcional) agregar el helper en `content/dsl.ts`. Usa tokens, `play()`/`feedback()` por intención y `useDragDrop` para arrastrar.

Actividades **abiertas** (`graded: false`) llaman `api.setReady(true)` cuando el niño terminó; su valor se guarda en el diario docente.

## Actividades disponibles (17)
explain · choice · sort · order · match · maya-number · number-input · slider (recta, termómetro, fracción, porcentaje) · symmetry-loom · polygon-lab · coordinate-map · chart-builder · rhythm · pulse-lab · dilemma · recipe-scaler · reflection

## Nuevo grado
`npm run cnb` genera `src/cnb/generated/<grado>.json` para todos los grados en `contenido/`. Registra el JSON en `src/cnb/catalog.ts`, crea `src/content/<grado>/` y un nuevo `Course`.
