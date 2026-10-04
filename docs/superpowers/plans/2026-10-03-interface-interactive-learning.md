# Interface and Interactive Learning Implementation Plan

> Execute inline using executing-plans, test-driven-development and verification-before-completion. Design approved on 2026-10-03.

**Goal:** Consistent light/dark presentation and an interactive AWS lesson journey.

**Architecture:** Keep remote course and existing result persistence. Add local, explicitly authored exercises keyed to four existing lesson IDs. Extract lesson, reader and exercise components. Resolve appearance once at the application root using existing program preferences.

**Tech Stack:** React 19, TypeScript, CSS semantic tokens, node:test, Playwright.

## 1. Theme ownership and visual foundation

- [x] Reproduce mixed surfaces using real CSS in Playwright; retain a regression check for selected AWS options and native onboarding fields.
- [x] Move theme/motion/feedback application into `src/design-system/Appearance.tsx`, rendered once from `src/main.tsx`. Remove competing effects from `App.tsx` and `useStartup.ts`.
- [x] Preserve `preferencesForProgram`: profile for onboarding/AWS, CNB settings for CNB. Verify settings still reflect the active preference on reload and program switching.
- [x] Update `tokens.css`, `global.css`, `startup.css` and `aws.css`: distinct foreground/fill colors, theme-aware selection and feedback, explicit native-control surfaces, safe areas, readable text and 48px touch targets.

## 2. Formative activity model

- [x] Add `tests/aws-practice.test.ts`: course references, one practice per domain, incomplete/incorrect/correct classification, duplicate/unknown values, order validation, no mutation.
- [x] Run `node --import tsx --test tests/aws-practice.test.ts` before and after implementation.
- [x] Add `src/aws/practice.ts` with authored assignments for cloud-value, shared-responsibility and cost-tools; service matching and ordering for global-infrastructure. Use IDs, explanatory feedback and independent readiness/correctness functions.

## 3. Interactive components

- [x] Add `AwsPractice.tsx`: select item then destination, accessible reassignment/reset, ordered flow using up/down buttons, check/retry/explanation. Preserve exercise state when consulting the reader. Never save quiz progress from formative actions.
- [x] Add `AwsReader.tsx`: section index, one section at a time, previous/next, full text disclosure, progress and clear transition to practice/check.
- [x] Extract `AwsLessonScreen.tsx` from `AwsExperience.tsx`. Add phase navigation, preserved quiz draft when consulting content, explicit restart, result review. Save one result on quiz completion using existing scoring.
- [x] Align home/domain cards with the lesson journey; expose links to the four guided practices from their domains. Keep lessons without companion activities working.

## 4. Validation and delivery

- [x] Browser check: six system/app theme combinations, real settings changes and reload, 375px/820px/desktop, reduced motion, keyboard, every exercise, unenhanced lesson and quiz scoring.
- [x] Run `npm test`, `npm run build`, `git diff --check` and inspect representative light/dark screenshots.
- [x] Review changes against approved design, update completed checkboxes and report scope and any limitations. No remote content publication required.


## Verification results — 2026-10-03

- `npm test`: all 12 test files passed.
- `npm run test:ui`: six app/system theme combinations; 19 color pairs per combination; four labs with incomplete/incorrect/correct paths; preserved quiz drafts; 100% then 50% attempts preserving the best score; legacy program preferences; CNB screens; 375/820/1280px layouts.
- Chromium screenshots inspected for reader light/dark, guided practice, CNB lesson and survey. Fixed clipped mobile grid children discovered in screenshots, then verified their bounding rectangles.
- `npm run build`: passed, including content validation, TypeScript, Vite and offline asset injection. Existing three CNB metadata warnings and large-bundle warning remain.
- `git diff --check`: passed. Independent review findings (solid badge contrast and deployment-model scenarios) were corrected and re-reviewed.
- This environment required browser libraries extracted under `/tmp/socrates-browser-libs`, passed through `LD_LIBRARY_PATH`, and permission to run Chromium outside the sandbox. No system installation or Firebase publication was performed.
