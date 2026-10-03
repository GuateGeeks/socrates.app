import { onAuthStateChanged, signInAnonymously, type User } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { onDisconnect, onValue, push, ref, remove, serverTimestamp as rtdbTimestamp, set } from 'firebase/database';
import { auth, firestore, realtime } from '../../firebase';
import { getProgress, importProgress, isValidProgress, subscribe, type Progress } from './progress';
import type { LearnerProfile } from './learner-profile';

export interface CloudProgressSnapshot { schemaVersion: 1; snapshot: Progress; clientUpdatedAt: number }
export interface CloudSession { uid: string; stop(): void }
const LOCAL_UPDATED_KEY = 'socrates.progress.updatedAt';

export function makeCloudSnapshot(snapshot: Progress, clientUpdatedAt = Date.now()): CloudProgressSnapshot {
  return { schemaVersion: 1, snapshot: structuredClone(snapshot), clientUpdatedAt };
}

export function parseCloudSnapshot(value: unknown): CloudProgressSnapshot | null {
  if (!value || typeof value !== 'object') return null;
  const x = value as Partial<CloudProgressSnapshot>;
  return x.schemaVersion === 1 && isValidProgress(x.snapshot)
    && typeof x.clientUpdatedAt === 'number' && Number.isFinite(x.clientUpdatedAt)
    ? x as CloudProgressSnapshot : null;
}

export function chooseSnapshot(local: CloudProgressSnapshot, remote: unknown): CloudProgressSnapshot {
  const valid = parseCloudSnapshot(remote);
  return valid && valid.clientUpdatedAt > local.clientUpdatedAt ? valid : local;
}

async function ensureUser() {
  if (auth.currentUser) return auth.currentUser;
  const restored = await new Promise<User | null>((resolve) => {
    const stop = onAuthStateChanged(auth, (user) => { stop(); resolve(user); });
  });
  return restored ?? (await signInAnonymously(auth)).user;
}

export async function syncLearnerProfile(uid: string, profile: LearnerProfile): Promise<void> {
  await setDoc(doc(firestore, 'users', uid), {
    schemaVersion: 1,
    profile: { displayName: profile.displayName, avatar: profile.avatar, dailyGoal: profile.dailyGoal },
    preferences: { theme: profile.theme, sound: profile.sound, haptics: profile.haptics, reducedMotion: profile.reducedMotion },
    onboarding: { step: profile.onboardingStep, complete: profile.onboardingComplete },
    clientUpdatedAt: profile.updatedAt,
    updatedAt: serverTimestamp(),
  }, { merge: true });
}

export async function startCloudSession(profile: LearnerProfile): Promise<CloudSession | null> {
  try {
    const user = await ensureUser();
    const progressRef = doc(firestore, 'users', user.uid, 'state', 'progress');
    const storedUpdatedAt = Number(localStorage.getItem(LOCAL_UPDATED_KEY));
    const local = makeCloudSnapshot(getProgress(), Number.isFinite(storedUpdatedAt) && storedUpdatedAt > 0 ? storedUpdatedAt : Date.now());
    const remote = await getDoc(progressRef);
    const chosen = chooseSnapshot(local, remote.exists() ? remote.data() : null);
    if (chosen !== local) importProgress(chosen.snapshot);
    localStorage.setItem(LOCAL_UPDATED_KEY, String(chosen.clientUpdatedAt));
    await setDoc(progressRef, { ...chosen, updatedAt: serverTimestamp() }, { merge: true });
    await syncLearnerProfile(user.uid, profile);

    let timer: ReturnType<typeof setTimeout> | undefined;
    const unsubscribeProgress = subscribe(() => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const envelope = makeCloudSnapshot(getProgress());
        localStorage.setItem(LOCAL_UPDATED_KEY, String(envelope.clientUpdatedAt));
        void setDoc(progressRef, { ...envelope, updatedAt: serverTimestamp() }, { merge: true });
      }, 800);
    });

    const connected = ref(realtime, '.info/connected');
    const connection = push(ref(realtime, `presence/${user.uid}`));
    const unsubscribePresence = onValue(connected, (snapshot) => {
      if (snapshot.val() !== true) return;
      void onDisconnect(connection).remove().then(() => set(connection, {
        state: 'online', startedAt: rtdbTimestamp(), lastChanged: rtdbTimestamp(), appVersion: '0.2.0',
      }));
    });
    return { uid: user.uid, stop() { clearTimeout(timer); unsubscribeProgress(); unsubscribePresence(); void remove(connection); } };
  } catch { return null; }
}
