# Firebase, PWA, and First-Start Experience Design

## Summary

Socrates Aprende will gain offline-first Firebase persistence, a production-ready PWA shell, a branded cosmic splash, and a required full-screen first-start setup. The existing lesson and progress systems remain responsive without a network connection. Firebase synchronizes durable learner data when connectivity is available and supplies ephemeral presence separately.

The selected approach is an offline-first Firebase adapter. It preserves the existing `StorageAdapter` boundary instead of making screens or lesson logic depend directly on Firebase.

## Goals

- Initialize Firebase from the project configuration in the root `firebase.ts` file.
- Create an anonymous Firebase Authentication account without adding a login form.
- Store durable learner profile, preferences, onboarding status, and progress in Firestore.
- Use Realtime Database only for connection presence and active-session metadata.
- Keep startup, onboarding, and learning usable while offline.
- Present a polished cosmic splash during local startup.
- Require a resumable full-screen setup before the learner enters the main app for the first time.
- Make the app installable with appropriate icons, metadata, caching, and update behavior.
- Preserve the existing progress API and existing app behavior after startup.

## Non-goals

- Email, password, Google, school, or teacher authentication.
- Cross-device account linking for anonymous learners.
- Teacher/class enrollment, school codes, or administrative dashboards.
- Mirroring all data into both Firebase databases.
- Moving curriculum content into Firebase.
- Replacing the hash router or redesigning existing application screens.

## Startup Experience

The root application will use an explicit startup state machine:

1. Render the splash immediately.
2. Restore the locally cached learner profile and onboarding checkpoint.
3. Initialize Firebase services without blocking local readiness.
4. Restore or create the anonymous Firebase user when a network connection permits it.
5. If onboarding is incomplete, open the full-screen setup at the saved step.
6. If onboarding is complete, enter the existing application.
7. Start background cloud synchronization and Realtime Database presence after identity is available.

The splash must never wait indefinitely for Firebase. Local state controls when the interface becomes usable. A short minimum display interval may be used to avoid a flash, but startup must remain fast and motion must be removed when the operating system or saved preferences request reduced motion.

## Splash Direction

The splash uses a cosmic discovery theme:

- a deep indigo-to-blue background;
- a softly glowing Socrates mark;
- subtle orbiting symbols representing the curriculum;
- a restrained star field or light texture;
- a transition into the existing warm application palette.

The presentation fills the viewport and accounts for mobile safe areas. It must use CSS and lightweight local assets, avoid a network dependency, and expose a static equivalent for reduced-motion users.

## First-Start Setup

The setup is a full-screen, step-based flow with a visible sense of progress. The steps are:

1. **Welcome:** introduce Socrates Aprende and explain that progress is saved automatically.
2. **Learner name:** collect a display name with trimming, a sensible maximum length, and clear validation.
3. **Avatar:** choose from a bundled, inclusive set of local avatar options.
4. **Daily goal:** select a practical daily lesson or time target from predefined options.
5. **Preferences:** choose theme and configure sound, haptics, and reduced motion.
6. **Ready:** summarize the choices, allow navigation back, and enter the application.

Each completed step is persisted locally. Closing and reopening the PWA resumes the setup at the last valid checkpoint. Completion is written locally before navigation into the app and then queued for Firestore synchronization. No network connection is required to finish.

The setup reuses design-system tokens and accessible controls. It supports keyboard navigation, logical focus movement, visible labels, sufficient contrast, touch targets, and `prefers-reduced-motion`. Existing Profile and Settings screens will read and update the same learner profile and preference model after onboarding.

## Module Boundaries

### Firebase initialization

The root `firebase.ts` remains the canonical configuration and initialization module. It exports initialized handles for:

- the Firebase application;
- anonymous authentication;
- Firestore;
- Realtime Database;
- optional Analytics.

Analytics is initialized only in a supported browser environment and failure to initialize it cannot prevent the app from starting. Firebase initialization remains idempotent under development hot reload and test imports.

### Learner profile

A focused core module defines the learner profile, preferences, onboarding state, defaults, validation, serialization, and local persistence. UI components communicate with this module rather than writing storage keys directly.

The profile contains at least:

- schema version;
- display name;
- avatar identifier;
- daily goal;
- theme;
- sound preference;
- haptics preference;
- reduced-motion preference;
- onboarding checkpoint and completion status;
- local and server update timestamps where applicable.

### Progress persistence

The existing `StorageAdapter` remains the persistence seam for curriculum progress. A cloud-aware adapter wraps the established local behavior:

- local loads and saves remain immediate;
- valid local data is never discarded merely because Firebase is unavailable;
- cloud writes are debounced or coalesced to avoid writing on every trivial state mutation;
- server data is validated before being applied;
- synchronization status is observable without coupling lesson screens to Firebase.

### UI orchestration

A startup gate selects between splash, onboarding, and the current `App`. Splash and onboarding components do not own Firebase calls. They act on the profile/startup services through small, testable interfaces.

## Firebase Data Model

Firebase Authentication creates an anonymous user. The UID is the only cloud ownership key.

Firestore stores durable records:

```text
users/{uid}
  schemaVersion
  profile
  preferences
  onboarding
  createdAt
  updatedAt

users/{uid}/state/progress
  schemaVersion
  snapshot
  updatedAt
  clientUpdatedAt
```

The exact progress snapshot follows the existing progress type and is validated before use. Separating the learner document from the larger progress snapshot limits unrelated writes.

Realtime Database stores ephemeral presence only:

```text
presence/{uid}/{connectionId}
  state: "online"
  startedAt
  lastChanged
  appVersion
```

The client observes `.info/connected`, registers `onDisconnect` cleanup, and then marks the current connection online. Presence failures are non-fatal and do not affect learning or durable persistence.

## Synchronization and Conflict Rules

Local data is the immediate source used to render the app. Firestore persistence is enabled where supported, but the application does not rely on that feature alone because its own local progress storage already exists.

When local and server snapshots differ:

1. Reject malformed or unsupported snapshots.
2. Prefer a valid snapshot with the newer logical update timestamp.
3. If timestamps are equal or absent, preserve the local snapshot to avoid surprising rollback.
4. Persist the chosen result locally and schedule it for cloud synchronization.

This is a last-valid-update policy, not field-level collaborative merging. It is appropriate because one anonymous profile is expected to be used primarily on one installation. Anonymous accounts are not promised to transfer between browsers or devices.

Cloud writes retry through Firebase's normal connectivity behavior. The UI may show small, non-blocking states such as saved locally, syncing, or synced; synchronization errors must not interrupt a lesson.

## Security and Firebase Project Configuration

The repository will include Firebase configuration and security rules. Firestore and Realtime Database rules require authentication and restrict access to paths whose UID matches `request.auth.uid` or `auth.uid`. Clients cannot read or write another anonymous learner's data.

Firestore validation rules constrain expected top-level fields and supported schema versions where practical. Realtime Database rules limit presence writes to the authenticated user's subtree. No public curriculum or shared data is introduced by this feature.

Firebase CLI setup will target the existing `socrates-439aa` project through checked-in project aliases/configuration without storing private service-account credentials. The web API key in the supplied client configuration is treated as a public project identifier; authorization depends on Authentication, Security Rules, and appropriate project-level protections.

## PWA Design

The current PWA foundation will be strengthened rather than replaced:

- expand the web manifest with stable app identifiers, display metadata, categories, and shortcuts only where they add real value;
- provide generated PNG icons in required sizes, including a dedicated maskable icon with safe padding;
- add theme, viewport, Apple mobile web app, and icon metadata to the HTML shell;
- provide an offline fallback that remains branded and useful;
- version application-shell caches and remove obsolete cache versions on activation;
- use cache-first for immutable built assets and a navigation strategy that falls back to the app shell;
- avoid intercepting Firebase, analytics, and unrelated cross-origin requests;
- expose service-worker update availability through a small, non-blocking prompt and activate the new version on user confirmation;
- preserve standalone Android/desktop installability and sensible iOS home-screen behavior.

The generated Vite asset graph must be cached safely. The service worker must not hard-code hashed filenames that become stale; the build process will generate or inject the correct precache list.

## Failure Handling

- **Firebase configuration or initialization failure:** record a diagnostic and continue in local-only mode.
- **No network:** allow onboarding and the full learning experience; synchronize later.
- **Anonymous sign-in failure:** keep local data and retry at a later connectivity event or application start.
- **Malformed cloud profile/progress:** ignore it, retain validated local state, and avoid overwriting the cloud record until the conflict is surfaced diagnostically.
- **Firestore write failure:** keep the locally saved snapshot and mark synchronization pending.
- **Presence failure:** ignore for user-facing flow and clean up on the next successful connection.
- **Service-worker installation failure:** keep the normal web app usable and report the issue only in diagnostics.
- **Interrupted onboarding:** resume from the last valid saved step.

## Testing Strategy

### Unit tests

- profile defaults, validation, and schema migration;
- onboarding state transitions and resume behavior;
- profile and progress serialization;
- conflict resolution for local and cloud snapshots;
- adapter behavior when Firebase is absent or fails;
- service-worker registration/update state helpers where isolated logic exists.

### Component/integration tests

- splash-to-onboarding and splash-to-app routing;
- required name validation and step navigation;
- completing onboarding while offline;
- preference application before the main app renders;
- existing Profile and Settings screens updating the shared model;
- synchronization status remaining non-blocking.

### Build and browser verification

- existing unit and content validation suites remain green;
- TypeScript and production Vite builds pass;
- manifest fields and icon files are present in production output;
- a browser can install the app and launch it in standalone mode;
- a previously loaded production build starts offline;
- Firebase requests are not incorrectly cached by the service worker;
- reduced-motion behavior and keyboard navigation are verified;
- Firebase emulator or rules-unit checks verify that users can access only their own Firestore and Realtime Database paths.

## Rollout and Compatibility

Existing learners with local progress but no profile are sent through onboarding without losing progress. On completion, the established local progress snapshot is associated with the newly created anonymous UID and synchronized. The feature does not change curriculum IDs, router URLs, or progress semantics.

If Firebase is temporarily unavailable at rollout, the application behaves as a fully local PWA. Cloud services enhance persistence and presence but never become a prerequisite for opening a lesson.

## Acceptance Criteria

- A fresh installation shows the cosmic splash and then the full-screen setup.
- Setup collects name, avatar, daily goal, theme, sound, haptics, and reduced-motion choices.
- Setup resumes after an interruption and completes without network access.
- A returning learner bypasses setup and reaches the existing app.
- An anonymous Firebase user is created when possible without presenting a login screen.
- Profile, preferences, onboarding completion, and progress synchronize to user-owned Firestore paths.
- Realtime Database presence appears only while the app connection is active and is cleaned up on disconnect.
- A Firebase outage never blocks local startup or progress saving.
- The PWA installs with suitable regular and maskable icons, launches in standalone mode, and reopens offline after a successful load.
- Updates are offered without silently disrupting an active session.
- Security rules prevent one authenticated anonymous user from accessing another user's data.
- Existing tests, type checking, content validation, and production build continue to pass.
