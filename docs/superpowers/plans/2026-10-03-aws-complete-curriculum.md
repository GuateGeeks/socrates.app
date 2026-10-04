# AWS CLF-C02 Complete Curriculum Implementation Plan

**Goal:** Complete the existing AWS course against all 19 CLF-C02 task statements.

**Architecture:** Keep the version 1 Firestore document and progress storage. Extend question parsing and the existing quiz for multiple-response questions. Replace the sample JSON with a complete task-mapped catalog and verify it before publication.

**Tech Stack:** React, TypeScript, Firebase Firestore, Node test runner.

## Tasks

- [x] Add failing parser and scoring tests for multiple-response questions; implement a small answer helper and schema validation.
- [x] Add failing catalog coverage test for all 19 official task codes and 4 domain weights; author and validate the complete Spanish catalog, retaining the four original lesson IDs.
- [x] Update the quiz to confirm selections, show explained feedback, and guide the student to the next lesson. Remove sample wording and update README.
- [x] Run targeted tests, the full test suite, the catalog dry run, and a production build. Inspect the diff and publication credentials; publish the new document and Hosting release. Verify a public client read and the hosted AWS bundle.
