import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';

export const firebaseConfig = {
  apiKey: 'AIzaSyBPgOn-sf5NaZ7AObnxOHGgMUAF4IFQbac',
  authDomain: 'socrates-439aa.firebaseapp.com',
  databaseURL: 'https://socrates-439aa-default-rtdb.firebaseio.com',
  projectId: 'socrates-439aa',
  storageBucket: 'socrates-439aa.firebasestorage.app',
  messagingSenderId: '107554716430',
  appId: '1:107554716430:web:d9d5ca9a92ce4098bb355f',
  measurementId: 'G-BTDXTD5BBJ',
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const realtime = getDatabase(app);

let analyticsPromise: Promise<Analytics | null> | undefined;
export function initializeAnalytics(): Promise<Analytics | null> {
  analyticsPromise ??= (async () => {
    if (typeof window === 'undefined' || !(await isSupported())) return null;
    return getAnalytics(app);
  })().catch(() => null);
  return analyticsPromise;
}
