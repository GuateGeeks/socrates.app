import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { chooseAwsProgress, getAwsProgress, importAwsProgress, parseAwsProgress, subscribeAwsProgress } from './progress';

export async function startAwsCloudSync(uid: string): Promise<() => void> {
  const stateRef = doc(firestore, 'users', uid, 'state', 'aws-cloud-practitioner');
  const remote = await getDoc(stateRef);
  const data = remote.exists() ? remote.data() : null;
  const remoteProgress = data?.schemaVersion === 1 ? parseAwsProgress(data.snapshot) : null;
  const local = getAwsProgress();
  const chosen = chooseAwsProgress(local, remoteProgress);
  if (chosen !== local) importAwsProgress(chosen);
  else if (local.updatedAt > 0 && (!remoteProgress || local.updatedAt > remoteProgress.updatedAt)) {
    await setDoc(stateRef, { schemaVersion: 1, snapshot: local, clientUpdatedAt: local.updatedAt });
  }
  let timer: ReturnType<typeof setTimeout> | undefined;
  const unsubscribe = subscribeAwsProgress(() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const snapshot = getAwsProgress();
      void setDoc(stateRef, { schemaVersion: 1, snapshot, clientUpdatedAt: snapshot.updatedAt }).catch(() => undefined);
    }, 800);
  });
  return () => { clearTimeout(timer); unsubscribe(); };
}
