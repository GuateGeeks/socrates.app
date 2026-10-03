import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, firestore } from '../../firebase';
import { createSurveySubmission, type SurveyAnswers } from './beta-survey';
import { signInAnonymously } from 'firebase/auth';

/** One response per anonymous account; submitting again updates that response. */
export async function submitBetaSurvey(displayName: string, answers: SurveyAnswers): Promise<void> {
  const submission = createSurveySubmission(displayName, answers);
  if (!navigator.onLine) throw new Error('Tu borrador está guardado. Conéctate a internet para enviarlo.');

  await auth.authStateReady();
  const user = auth.currentUser ?? (await signInAnonymously(auth)).user;
  await setDoc(doc(firestore, 'betaSurveyResponses', user.uid), { ...submission, submittedAt: serverTimestamp() });
}
