# Mobile first experiences implementation plan

**Goal:** Implement the approved mobile interaction design across AWS, CNB activities and navigation.
**Architecture:** Shared focused assignment editor and step navigation, controlled answer values, independent adapters retaining existing grading. Mobile layouts are the default; desktop adds space without different answer state.
**Stack:** React 19, TypeScript, existing CSS tokens, Node tests and Playwright.

Work in the current authorized checkout, preserving the user's unrelated .gitignore and onboarding plan changes. No publishing or remote content mutations.

## Tasks

- [x] Shared assignment editor (`src/ui/AssignmentBoard.tsx`, `src/ui/learning.css`) with active item, adjacent destinations, undo, return to pending, grouped editable review, keyboard focus and textual feedback. Integrate `src/activities/sort.tsx` and `src/activities/match.tsx` without changing grading/value formats.
- [x] AWS (`src/aws/AwsReader.tsx`, `AwsPractice.tsx`, `AwsLessonScreen.tsx`, `AwsExperience.tsx`, `aws.css`): expandable concept index, compact lesson header, staged practice, ordering controls, reset confirmation, single sticky primary action, keep answers when consulting content.
- [x] Staged CNB learning: shared stage controls and changes to reading, true-false, reflection, project, leadership-simulation, cultural-conservation-practice, short-answer, worked-example, explain, flashcards and low-activity-mode. Existing completion gates, evidence and timers remain authoritative.
- [x] Precision interactions: order, fill-blank, recipe-scaler, chart-builder, coordinate-map, slider, symmetry-loom, rhythm, polygon-lab, maya-number, number-input and pulse-lab. Keep source data with the active control, large targets, explicit non-drag input, natural scrolling.
- [x] Navigation/catalogs: year/unit/week navigation, curriculum grouping, visible filters, pagination of 20 results for notebook/media/evidence, compact teacher views, staged survey with saved draft, one open gallery activity. Shared responsive CSS for profile, settings, onboarding and choice.
- [x] LessonPlayer: measured actionbar reserve, bounded feedback with explanation in content, focus/scroll on step changes, keyboard/short viewport behavior.
- [x] Browser regression coverage in `tests/mobile-learning.mjs`: active concept selection, classification undo/edit/correct, pair displacement, phase preservation, visible touch geometry, 28 activity gallery, narrow/landscape/zoom layouts and paging. Update existing interface tests for the intentional workflow changes.
- [x] Verify and review: `npm test`, `npm run validate`, `npx tsc --noEmit`, `npm run build`, `npm run test:ui` plus new browser suite. Run Chromium with local library path `/tmp/socrates-browser-libs/root/usr/lib/x86_64-linux-gnu` and sandbox escalation when necessary. Inspect screenshots and changed files. Record remaining physical-device limitations accurately.

## Test-first checks

1. Add browser regression expecting a concept disclosure and only one active assignment, assert it fails on the existing app.
2. Implement the editor and AWS integration; rerun complete assignment lifecycle including incorrect answer, correction and locked state.
3. Each independent activity/navigation task adds focused behavioral checks before implementation where state is changed. Styling-only adjustments use browser geometry rather than implementation-mirroring tests.
4. Run all existing tests after integration, updating selectors only where the approved workflow intentionally changes. Investigate failures before claiming completion.

## Review checkpoints

Review each independent task against its rows in the approved specification and then review state ownership, accessibility, grading invariants and browser behavior. Do not reset answers when changing viewport or local stage. Final review covers the combined diff and unresolved gaps before delivery.


## Completion evidence

- Unit tests: 12 files passed, 0 failed.
- Production build: content validation, TypeScript, Vite and offline shell generation passed.
- Interface suite: theme matrix, four AWS practices, quiz, persistence and responsive checks passed.
- Combined mobile suite: learning/assignment, precision, staged learning and navigation all passed on the final working tree.
- Independent reviews of the three delegated areas and root integration completed; findings corrected with regressions. Phone and 200% text screenshots inspected.
- Existing curriculum reference warnings (3) and bundle-size warning remain documented in the specification. Physical iOS/Android keyboard, safe areas and screen readers were not exercised.
- Changes remain local; no deployment or commit was requested or performed. User .gitignore and onboarding-plan changes preserved.
