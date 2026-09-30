# Unit 1 Curriculum Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite Sixth Grade Unit 1 as eight coherent weekly investigations while preserving all CNB coverage, subject lesson counts, and the existing application engine.

**Architecture:** Keep the current content-as-data architecture and the ten subject modules per week. Add executable quality contracts first, then revise one week at a time: subject progressions first, weekly metadata/workshop/challenge second, validation and commit last. Finish by aligning the Unit 1 project and generated validation with the rewritten learning weeks.

**Tech Stack:** TypeScript, React content DSL, Node test runner through `tsx`, existing content validator, Vite, Playwright end-to-end walkthrough.

---

## File Map

- `tests/unit1-redesign.test.ts`: executable contracts for weekly identity, workshop scope, interaction variety, challenge coverage, and concrete-object icons.
- `src/content/sexto/materias/<area>/u1/s01.ts` through `s08.ts`: 80 subject-week modules reviewed and revised in place.
- `src/content/sexto/semanas/s01.ts` through `s08.ts`: weekly metadata, workshop, challenge, and bank.
- `src/content/sexto/semanas/s09.ts`: Unit 1 integrative project aligned after Weeks 1-8 are complete.
- `src/content/sexto/materias/<area>/u1.ts`: subject `hilo` text updated only when the final lesson order changes its stated progression.
- `src/content/sexto/plan.json`: do not regenerate or edit; it remains the source of required CNB content.
- `src/content/sexto/semanas/s10.ts`: does not exist; Week 10 remains generated from Unit 1 banks.

The subject areas used below are `mat`, `l1`, `cnt`, `ccss`, `l2`, `l3`, `fc`, `art`, `ef`, and `pyd`.

### Task 1: Add Unit 1 Quality Contracts

**Files:**
- Create: `tests/unit1-redesign.test.ts`

- [ ] **Step 1: Write the failing contract tests**

```ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WEEKS } from '../src/content/index';

const EXPECTED = [
  [1, 'Nuestro lugar en mapas y palabras', 'Mapa y voz de nuestro lugar'],
  [2, 'Un mercado saludable y respetuoso', 'Un puesto sano y respetuoso'],
  [3, 'Un camino seguro a la escuela', 'Ruta segura a la escuela'],
  [4, 'Crecer, cuidarnos y participar', 'Campaña: crecer con cuidado'],
  [5, 'Una escuela que todas las personas pueden recorrer', 'Mapa táctil para toda la escuela'],
  [6, 'Una refacción nutritiva con recursos locales', 'Una refacción local que nutre'],
  [7, 'Investigamos y protegemos el agua', 'Informe sobre el agua de la comunidad'],
  [8, 'Datos confiables para ahorrar energía', 'Panel de energía de nuestra escuela'],
] as const;

const unitWeeks = WEEKS.filter((week) => week.unidad === 1 && week.kind === 'aprendizaje');

function inspectConcreteIcon(value: unknown, path: string, failures: string[]): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) => inspectConcreteIcon(item, `${path}[${index}]`, failures));
    return;
  }
  if (!value || typeof value !== 'object') return;
  const record = value as Record<string, unknown>;
  const icon = typeof record.icon === 'string' ? record.icon : undefined;
  const words = Object.entries(record)
    .filter(([key, item]) => ['text', 'title', 'front', 'body', 'label'].includes(key) && typeof item === 'string')
    .map(([, item]) => item)
    .join(' ');
  if ((icon === 'Circle' || icon === 'Square') && /tortilla|ventana|panela|pozo|cancha|edificio|herramienta|alimento/i.test(words)) {
    failures.push(`${path}: ${icon} representa "${words}"`);
  }
  Object.entries(record).forEach(([key, item]) => inspectConcreteIcon(item, `${path}.${key}`, failures));
}

test('Unidad 1 usa las ocho investigaciones aprobadas', () => {
  assert.equal(unitWeeks.length, 8);
  for (const [number, title, workshopTitle] of EXPECTED) {
    const week = unitWeeks.find((item) => item.semana === number);
    assert.ok(week, `Falta semana ${number}`);
    assert.equal(week.title, title);
    assert.equal(week.temaGenerador, title);
    assert.equal(week.lessons.find((lesson) => lesson.kind === 'taller')?.title, workshopTitle);
  }
});

test('Unidad 1 limita cada taller a dos, tres o cuatro áreas reales', () => {
  for (const week of unitWeeks) {
    const workshop = week.lessons.find((lesson) => lesson.kind === 'taller');
    assert.ok(workshop, `Semana ${week.semana} sin taller`);
    const areas = new Set(workshop.steps.flatMap((step) => step.areas));
    assert.ok(areas.size >= 2 && areas.size <= 4, `Semana ${week.semana}: taller integra ${areas.size} áreas`);
  }
});

test('Unidad 1 no repite una interacción tres veces seguidas', () => {
  for (const week of unitWeeks) for (const lesson of week.lessons) {
    for (let index = 2; index < lesson.steps.length; index += 1) {
      const types = lesson.steps.slice(index - 2, index + 1).map((step) => step.type);
      assert.ok(new Set(types).size > 1, `${lesson.id}: repite ${types[0]} tres veces`);
    }
  }
});

test('Unidad 1 evalúa al menos seis materias en cada reto', () => {
  for (const week of unitWeeks) {
    const challenge = week.lessons.find((lesson) => lesson.kind === 'reto');
    assert.ok(challenge, `Semana ${week.semana} sin reto`);
    assert.ok(new Set(challenge.steps.map((step) => step.areas[0])).size >= 6, `Semana ${week.semana}: reto con menos de seis materias`);
  }
});

test('Unidad 1 no usa formas genéricas para objetos concretos', () => {
  const failures: string[] = [];
  unitWeeks.forEach((week) => inspectConcreteIcon(week, week.id, failures));
  assert.deepEqual(failures, []);
});
```

- [ ] **Step 2: Run the new tests and confirm the baseline is red**

Run: `npx tsx --test tests/unit1-redesign.test.ts`

Expected: FAIL on current weekly titles and any existing workshop, repetition, or icon violations. Record the failing lesson IDs for the relevant weekly tasks.

- [ ] **Step 3: Run the existing suite to establish an unchanged baseline**

Run: `npm test`

Expected: existing tests pass; the new file fails only because the redesign is not implemented.

- [ ] **Step 4: Commit the contracts**

```bash
git add tests/unit1-redesign.test.ts
git commit -m "test: define Unit 1 redesign contracts"
```

### Tasks 2-9: Rewrite Learning Weeks 1-8

Every weekly task uses the same controlled sequence but has distinct files and outcomes. Review every lesson in the listed subject files. Retain a lesson only when its teaching sequence, examples, interactions, language, icons, and media already satisfy the design specification. Rewrite anything that does not.

For each subject lesson, verify one central idea, explicit teaching before scoring, guided feedback, independent application, two unhinted exit items, and no three consecutive activities of one type. Language examples must share the lesson topic. Mathematics contexts must represent the actual concept. Concrete objects require descriptive icons or media mocks.

#### Task 2: Week 1, Nuestro lugar en mapas y palabras

**Files:**
- Modify: `src/content/sexto/materias/mat/u1/s01.ts`
- Modify: `src/content/sexto/materias/l1/u1/s01.ts`
- Modify: `src/content/sexto/materias/cnt/u1/s01.ts`
- Modify: `src/content/sexto/materias/ccss/u1/s01.ts`
- Modify: `src/content/sexto/materias/l2/u1/s01.ts`
- Modify: `src/content/sexto/materias/l3/u1/s01.ts`
- Modify: `src/content/sexto/materias/fc/u1/s01.ts`
- Modify: `src/content/sexto/materias/art/u1/s01.ts`
- Modify: `src/content/sexto/materias/ef/u1/s01.ts`
- Modify: `src/content/sexto/materias/pyd/u1/s01.ts`
- Modify: `src/content/sexto/semanas/s01.ts`

- [ ] Audit the agenda with `npx tsx scripts/week-agenda.ts 1` and review every listed lesson against the specification.
- [ ] Set `temaGenerador` and `title` to `Nuestro lugar en mapas y palabras`; rewrite `contexto` around locating the community, explaining geographic conditions, and presenting local knowledge.
- [ ] Rewrite the workshop as `Mapa y voz de nuestro lugar`, using two to four of L1, Social Studies, Citizenship, and Art. Its product is an annotated local map plus a short oral presentation.
- [ ] Rewrite the challenge and bank with new items from at least six subjects and no workshop-only knowledge.
- [ ] Run `npx tsx --test --test-name-pattern="Unidad 1" tests/unit1-redesign.test.ts`; Week 1 title/workshop assertions must pass and remaining failures must belong to later weeks.
- [ ] Run `npx tsx scripts/validate-content.ts --unidad=1 --quiet`, `npm test`, and `npx tsc --noEmit`; expect zero new errors.
- [ ] Commit with `git commit -m "feat(content): rewrite Unit 1 week 1"` after staging only the eleven Week 1 files and necessary focused tests.

#### Task 3: Week 2, Un mercado saludable y respetuoso

**Files:**
- Modify: `src/content/sexto/materias/mat/u1/s02.ts`
- Modify: `src/content/sexto/materias/l1/u1/s02.ts`
- Modify: `src/content/sexto/materias/cnt/u1/s02.ts`
- Modify: `src/content/sexto/materias/ccss/u1/s02.ts`
- Modify: `src/content/sexto/materias/l2/u1/s02.ts`
- Modify: `src/content/sexto/materias/l3/u1/s02.ts`
- Modify: `src/content/sexto/materias/fc/u1/s02.ts`
- Modify: `src/content/sexto/materias/art/u1/s02.ts`
- Modify: `src/content/sexto/materias/ef/u1/s02.ts`
- Modify: `src/content/sexto/materias/pyd/u1/s02.ts`
- Modify: `src/content/sexto/semanas/s02.ts`

- [ ] Audit with `npx tsx scripts/week-agenda.ts 2`; review all subject lessons.
- [ ] Set weekly title/topic to `Un mercado saludable y respetuoso`; focus the context on safe food, respectful exchange, local resources, and useful communication.
- [ ] Rewrite the workshop as `Un puesto sano y respetuoso`, integrating Science, Productivity, L2 or L3, and Citizenship. The product is a stand plan with hygiene procedure, respectful service language, and a simple offer.
- [ ] Rewrite challenge and bank; then run the Unit 1 tests, Unit 1 validator, `npm test`, and `npx tsc --noEmit` with the same pass criteria as Task 2.
- [ ] Commit with `git commit -m "feat(content): rewrite Unit 1 week 2"`.

#### Task 4: Week 3, Un camino seguro a la escuela

**Files:**
- Modify: `src/content/sexto/materias/mat/u1/s03.ts`
- Modify: `src/content/sexto/materias/l1/u1/s03.ts`
- Modify: `src/content/sexto/materias/cnt/u1/s03.ts`
- Modify: `src/content/sexto/materias/ccss/u1/s03.ts`
- Modify: `src/content/sexto/materias/l2/u1/s03.ts`
- Modify: `src/content/sexto/materias/l3/u1/s03.ts`
- Modify: `src/content/sexto/materias/fc/u1/s03.ts`
- Modify: `src/content/sexto/materias/art/u1/s03.ts`
- Modify: `src/content/sexto/materias/ef/u1/s03.ts`
- Modify: `src/content/sexto/materias/pyd/u1/s03.ts`
- Modify: `src/content/sexto/semanas/s03.ts`

- [ ] Audit with `npx tsx scripts/week-agenda.ts 3`; review all subject lessons.
- [ ] Set weekly title/topic to `Un camino seguro a la escuela`; focus the context on routes, signs, movement, public communication, and problem analysis.
- [ ] Rewrite the workshop as `Ruta segura a la escuela`, integrating Mathematics, L2, Art, and Productivity. The product is a route representation, risk analysis, and clearly designed sign.
- [ ] Rewrite challenge and bank; run the four verification commands from Task 2.
- [ ] Commit with `git commit -m "feat(content): rewrite Unit 1 week 3"`.

#### Task 5: Week 4, Crecer, cuidarnos y participar

**Files:**
- Modify: `src/content/sexto/materias/mat/u1/s04.ts`
- Modify: `src/content/sexto/materias/l1/u1/s04.ts`
- Modify: `src/content/sexto/materias/cnt/u1/s04.ts`
- Modify: `src/content/sexto/materias/ccss/u1/s04.ts`
- Modify: `src/content/sexto/materias/l2/u1/s04.ts`
- Modify: `src/content/sexto/materias/l3/u1/s04.ts`
- Modify: `src/content/sexto/materias/fc/u1/s04.ts`
- Modify: `src/content/sexto/materias/art/u1/s04.ts`
- Modify: `src/content/sexto/materias/ef/u1/s04.ts`
- Modify: `src/content/sexto/materias/pyd/u1/s04.ts`
- Modify: `src/content/sexto/semanas/s04.ts`

- [ ] Audit with `npx tsx scripts/week-agenda.ts 4`; review all subject lessons, with human-readable scientific language for reproductive health.
- [ ] Set weekly title/topic to `Crecer, cuidarnos y participar`; focus the context on bodily change, ethical care, reliable information, leadership, and participation.
- [ ] Rewrite the workshop as `Campaña: crecer con cuidado`, integrating Science, L1, Citizenship, and Art. The product is an informational dramatic scene or campaign reviewed for accuracy and respect.
- [ ] Rewrite challenge and bank; run the four verification commands from Task 2.
- [ ] Commit with `git commit -m "feat(content): rewrite Unit 1 week 4"`.

#### Task 6: Week 5, Una escuela que todas las personas pueden recorrer

**Files:**
- Modify: `src/content/sexto/materias/mat/u1/s05.ts`
- Modify: `src/content/sexto/materias/l1/u1/s05.ts`
- Modify: `src/content/sexto/materias/cnt/u1/s05.ts`
- Modify: `src/content/sexto/materias/ccss/u1/s05.ts`
- Modify: `src/content/sexto/materias/l2/u1/s05.ts`
- Modify: `src/content/sexto/materias/l3/u1/s05.ts`
- Modify: `src/content/sexto/materias/fc/u1/s05.ts`
- Modify: `src/content/sexto/materias/art/u1/s05.ts`
- Modify: `src/content/sexto/materias/ef/u1/s05.ts`
- Modify: `src/content/sexto/materias/pyd/u1/s05.ts`
- Modify: `src/content/sexto/semanas/s05.ts`

- [ ] Audit with `npx tsx scripts/week-agenda.ts 5`; review all subject lessons.
- [ ] Set weekly title/topic to `Una escuela que todas las personas pueden recorrer`; focus the context on coordinates, participation, texture, accessibility, and safe tool use.
- [ ] Rewrite the workshop as `Mapa táctil para toda la escuela`, integrating Mathematics, Art, Citizenship, and Productivity. The product is a coordinate-based tactile plan with a key and accessible route.
- [ ] Rewrite challenge and bank; run the four verification commands from Task 2.
- [ ] Commit with `git commit -m "feat(content): rewrite Unit 1 week 5"`.

#### Task 7: Week 6, Una refacción nutritiva con recursos locales

**Files:**
- Modify: `src/content/sexto/materias/mat/u1/s06.ts`
- Modify: `src/content/sexto/materias/l1/u1/s06.ts`
- Modify: `src/content/sexto/materias/cnt/u1/s06.ts`
- Modify: `src/content/sexto/materias/ccss/u1/s06.ts`
- Modify: `src/content/sexto/materias/l2/u1/s06.ts`
- Modify: `src/content/sexto/materias/l3/u1/s06.ts`
- Modify: `src/content/sexto/materias/fc/u1/s06.ts`
- Modify: `src/content/sexto/materias/art/u1/s06.ts`
- Modify: `src/content/sexto/materias/ef/u1/s06.ts`
- Modify: `src/content/sexto/materias/pyd/u1/s06.ts`
- Modify: `src/content/sexto/semanas/s06.ts`

- [ ] Audit with `npx tsx scripts/week-agenda.ts 6`; review all subject lessons.
- [ ] Set weekly title/topic to `Una refacción nutritiva con recursos locales`; focus the context on nutrients, local food, comparing sets of options, project planning, and cost.
- [ ] Rewrite the workshop as `Una refacción local que nutre`, integrating Science, Mathematics, L1, and Productivity. The product includes a justified menu, set comparison, simple budget, and project outline.
- [ ] Rewrite challenge and bank; run the four verification commands from Task 2.
- [ ] Commit with `git commit -m "feat(content): rewrite Unit 1 week 6"`.

#### Task 8: Week 7, Investigamos y protegemos el agua

**Files:**
- Modify: `src/content/sexto/materias/mat/u1/s07.ts`
- Modify: `src/content/sexto/materias/l1/u1/s07.ts`
- Modify: `src/content/sexto/materias/cnt/u1/s07.ts`
- Modify: `src/content/sexto/materias/ccss/u1/s07.ts`
- Modify: `src/content/sexto/materias/l2/u1/s07.ts`
- Modify: `src/content/sexto/materias/l3/u1/s07.ts`
- Modify: `src/content/sexto/materias/fc/u1/s07.ts`
- Modify: `src/content/sexto/materias/art/u1/s07.ts`
- Modify: `src/content/sexto/materias/ef/u1/s07.ts`
- Modify: `src/content/sexto/materias/pyd/u1/s07.ts`
- Modify: `src/content/sexto/semanas/s07.ts`

- [ ] Audit with `npx tsx scripts/week-agenda.ts 7`; review all subject lessons.
- [ ] Set weekly title/topic to `Investigamos y protegemos el agua`; focus the context on questions, sources, forest-water relationships, community evidence, cooperation, and peaceful decisions.
- [ ] Rewrite the workshop as `Informe sobre el agua de la comunidad`, integrating L1, Science, Citizenship, and Productivity. The product is an evidence-based report with questions, source judgments, findings, and a feasible action.
- [ ] Rewrite challenge and bank; run the four verification commands from Task 2.
- [ ] Commit with `git commit -m "feat(content): rewrite Unit 1 week 7"`.

#### Task 9: Week 8, Datos confiables para ahorrar energía

**Files:**
- Modify: `src/content/sexto/materias/mat/u1/s08.ts`
- Modify: `src/content/sexto/materias/l1/u1/s08.ts`
- Modify: `src/content/sexto/materias/cnt/u1/s08.ts`
- Modify: `src/content/sexto/materias/ccss/u1/s08.ts`
- Modify: `src/content/sexto/materias/l2/u1/s08.ts`
- Modify: `src/content/sexto/materias/l3/u1/s08.ts`
- Modify: `src/content/sexto/materias/fc/u1/s08.ts`
- Modify: `src/content/sexto/materias/art/u1/s08.ts`
- Modify: `src/content/sexto/materias/ef/u1/s08.ts`
- Modify: `src/content/sexto/materias/pyd/u1/s08.ts`
- Modify: `src/content/sexto/semanas/s08.ts`

- [ ] Audit with `npx tsx scripts/week-agenda.ts 8`; review all subject lessons.
- [ ] Set weekly title/topic to `Datos confiables para ahorrar energía`; focus the context on measurement, approximation, energy, honest reporting, visual publication, and conservation action.
- [ ] Rewrite the workshop as `Panel de energía de nuestra escuela`, integrating Mathematics, L1, Science, and Art. The product contains an exact and rounded datum, a source, a clear display, and practical recommendations.
- [ ] Rewrite challenge and bank; run the four verification commands from Task 2. At this point all tests in `tests/unit1-redesign.test.ts` must pass.
- [ ] Commit with `git commit -m "feat(content): rewrite Unit 1 week 8"`.

### Task 10: Align the Unit Project and Generated Validation

**Files:**
- Modify: `src/content/sexto/semanas/s09.ts`
- Modify only if wording is now inaccurate: `src/content/sexto/materias/mat/u1.ts`
- Modify only if wording is now inaccurate: `src/content/sexto/materias/l1/u1.ts`
- Modify only if wording is now inaccurate: `src/content/sexto/materias/cnt/u1.ts`
- Modify only if wording is now inaccurate: `src/content/sexto/materias/ccss/u1.ts`
- Modify only if wording is now inaccurate: `src/content/sexto/materias/l2/u1.ts`
- Modify only if wording is now inaccurate: `src/content/sexto/materias/l3/u1.ts`
- Modify only if wording is now inaccurate: `src/content/sexto/materias/fc/u1.ts`
- Modify only if wording is now inaccurate: `src/content/sexto/materias/art/u1.ts`
- Modify only if wording is now inaccurate: `src/content/sexto/materias/ef/u1.ts`
- Modify only if wording is now inaccurate: `src/content/sexto/materias/pyd/u1.ts`

- [ ] Run `npx tsx scripts/week-agenda.ts 9` and inspect all five project lessons.
- [ ] Rewrite Week 9 as a synthesis of observing the community, collecting reliable evidence, designing an inclusive improvement, communicating it, and reflecting on participation. Reuse skills from Weeks 1-8 without teaching new CNB content.
- [ ] Inspect every subject `hilo`; update only statements contradicted by the final lesson order.
- [ ] Run `npx tsx scripts/validate-content.ts --unidad=1 --quiet`; expect `Contenido válido` and no Unit 1 errors.
- [ ] Run `npm test` and `npx tsc --noEmit`; expect all tests and type checking to pass.
- [ ] Commit with `git commit -m "feat(content): align Unit 1 project and validation"`.

### Task 11: Full Unit 1 Verification

**Files:**
- Modify only for defects found: files already listed in Tasks 1-10.

- [ ] Run `npm run validate`; expect `Contenido válido` and no new warnings caused by Unit 1.
- [ ] Run `npm test`; expect all tests to pass, including all five Unit 1 redesign contracts.
- [ ] Run `npx tsc --noEmit`; expect exit code 0.
- [ ] Run `npm run build`; expect the production build to complete.
- [ ] Run `npm run e2e`; expect all Unit 1 lessons to complete on configured phone and tablet projects without rendering or interaction failures.
- [ ] Use `rg -n "(tortilla|ventana|panela|pozo|cancha).*icon: '(Circle|Square)'|icon: '(Circle|Square)'.*(tortilla|ventana|panela|pozo|cancha)" src/content/sexto/materias/*/u1 src/content/sexto/semanas/s0{1,2,3,4,5,6,7,8}.ts`; expect no matches for concrete-object substitutions.
- [ ] Review `git diff --check` and `git status --short`; confirm only intended Unit 1 files changed and `.gitignore` remains untouched.
- [ ] Commit any verification fixes with `git commit -m "fix(content): resolve Unit 1 verification findings"`; do not create an empty commit when no fixes were required.
