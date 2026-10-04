import { onAuthStateChanged, signInAnonymously, type User } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { onDisconnect, onValue, push, ref, remove, serverTimestamp as rtdbTimestamp, set } from 'firebase/database';
import { auth, firestore, realtime } from '../../firebase';
import { getProgress, importProgress, isValidProgress, progressUpdatedAt, subscribe, type Progress } from './progress';
import { parseLearnerProfile, saveLearnerProfile, subscribeLearnerProfile, type LearnerProfile } from './learner-profile';
import { startAwsCloudSync } from '@/aws/cloud-progress';
import { startRetriedCloudSync } from './retry-cloud-sync';

export interface CloudProgressSnapshot { schemaVersion: 1; snapshot: Progress; clientUpdatedAt: number }
export interface CloudSession { uid: string; stop(): void }

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
    learnerProfile: profile,
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
    const local = makeCloudSnapshot(getProgress(), progressUpdatedAt());
    const remote = await getDoc(progressRef);
    const remoteValue = remote.exists() ? remote.data() : null;
    const parsedRemote = parseCloudSnapshot(remoteValue);
    const chosen = chooseSnapshot(local, remoteValue);
    if (chosen !== local) importProgress(chosen.snapshot);
    if (!remote.exists() || parsedRemote) await setDoc(progressRef, { ...chosen, updatedAt: serverTimestamp() }, { merge: true });
    const userRef = doc(firestore, 'users', user.uid);
    const cloudUser = await getDoc(userRef);
    const cloudProfile = cloudUser.exists() ? parseLearnerProfile(cloudUser.data().learnerProfile) : null;
    let currentProfile = profile;
    if (cloudProfile && cloudProfile.updatedAt > profile.updatedAt) { currentProfile = cloudProfile; saveLearnerProfile(cloudProfile); }
    else await syncLearnerProfile(user.uid, profile);

    let timer: ReturnType<typeof setTimeout> | undefined;
    const unsubscribeProgress = subscribe(() => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const envelope = makeCloudSnapshot(getProgress());
        void setDoc(progressRef, { ...envelope, updatedAt: serverTimestamp() }, { merge: true });
      }, 800);
    });
    const unsubscribeProfile = subscribeLearnerProfile((next) => { currentProfile = next; void syncLearnerProfile(user.uid, next); });
    if (currentProfile.updatedAt !== profile.updatedAt) await syncLearnerProfile(user.uid, currentProfile);
    const stopAws = startRetriedCloudSync(() => startAwsCloudSync(user.uid));

    const connected = ref(realtime, '.info/connected');
    const connection = push(ref(realtime, `presence/${user.uid}`));
    const unsubscribePresence = onValue(connected, (snapshot) => {
      if (snapshot.val() !== true) return;
      void onDisconnect(connection).remove().then(() => set(connection, {
        state: 'online', startedAt: rtdbTimestamp(), lastChanged: rtdbTimestamp(), appVersion: '0.2.0',
      }));
    });
    return { uid: user.uid, stop() { clearTimeout(timer); unsubscribeProgress(); unsubscribeProfile(); unsubscribePresence(); stopAws(); void remove(connection); } };
  } catch { return null; }
}
