import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { parseAwsCourse, type AwsCourse } from './course';

export async function loadAwsCourse(): Promise<AwsCourse> {
  const snapshot = await getDoc(doc(firestore, 'programs', 'aws-cloud-practitioner'));
  const course = snapshot.exists() ? parseAwsCourse(snapshot.data()) : null;
  if (!course) throw new Error('El programa AWS aún no tiene contenido publicado.');
  return course;
}
