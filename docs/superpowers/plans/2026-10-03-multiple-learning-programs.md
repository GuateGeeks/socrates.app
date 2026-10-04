# Multiple Learning Programs Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Add first-run program selection and a Firebase-backed AWS Cloud Practitioner sample while preserving CNB.

**Architecture:** Store program enrollment on the learner profile. Keep CNB's bundled content and progress untouched; load AWS course from a published Firestore document and store AWS progress separately. Route AWS users to dedicated screens.

**Tech Stack:** React, TypeScript, Firebase Authentication and Firestore, Node test runner.

---

### Task 1: Profile and enrollment

**Files:** `src/core/learner-profile.ts`, `src/startup/Onboarding.tsx`, `src/startup/useStartup.ts`, `src/screens/Ajustes.tsx`, `tests/learner-profile.test.ts`

- [x] Add failing tests for required selection, legacy CNB migration, and program switching.
- [x] Run `npx tsx --test tests/learner-profile.test.ts`; confirm the new tests fail for the missing behavior.
- [x] Add typed program IDs, profile migration, selection helper, and selection UI.
- [x] Run the same test; confirm it passes.

### Task 2: Remote AWS content

**Files:** `src/aws/course.ts`, `src/aws/content.ts`, `content/aws-cloud-practitioner.json`, `scripts/publish-aws-course.mjs`, `firestore.rules`, `tests/aws-course.test.ts`

- [x] Add failing parser tests for valid and malformed course documents.
- [x] Run `npx tsx --test tests/aws-course.test.ts`; confirm failure.
- [x] Implement schema validation and Firestore read, author a short sample covering four exam domains, and add an admin publishing script.
- [x] Run the test; confirm it passes.

### Task 3: Independent AWS progress

**Files:** `src/aws/progress.ts`, `src/core/cloud-sync.ts`, `tests/aws-progress.test.ts`

- [x] Add failing tests for recording results without modifying CNB and for choosing the newer valid cloud snapshot.
- [x] Run `npx tsx --test tests/aws-progress.test.ts`; confirm failure.
- [x] Implement local persistence, subscriptions, and separate Firestore state sync.
- [x] Run the test; confirm it passes.

### Task 4: AWS experience and routing

**Files:** `src/App.tsx`, `src/main.tsx`, `src/core/router.ts`, `src/aws/AwsExperience.tsx`, `src/aws/aws.css`, `src/startup/startup.css`

- [x] Add AWS screens for overview, domain/lesson selection, reading, quiz feedback, and profile/settings access.
- [x] Show loading, invalid/unpublished, and retry states.
- [x] Confirm CNB routes remain in the CNB branch.

### Task 5: Verification

- [x] Run `npm test` and `npm run build`.
- [x] Review changed files and Firebase rules; repair any failures.
- [x] Document Firestore publication commands and any deployment limitation.

### Publication gate

- [x] Publish the Firestore rules and the AWS sample document to `socrates-439aa`, then verify a public client read.
