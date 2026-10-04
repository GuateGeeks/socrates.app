import { readFile } from 'node:fs/promises';
import { applicationDefault, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { parseAwsCourse } from '../src/aws/course';

const path = new URL('../content/aws-cloud-practitioner.json', import.meta.url);
const raw: unknown = JSON.parse(await readFile(path, 'utf8'));
const course = parseAwsCourse(raw);
if (!course) throw new Error('El contenido AWS no cumple el esquema publicado.');

const bytes = Buffer.byteLength(JSON.stringify(course), 'utf8');
if (bytes >= 900_000) throw new Error('El documento supera el margen seguro para Firestore.');

if (!process.argv.includes('--publish')) {
  console.log(`Contenido válido: ${course.domains.length} dominios, ${course.domains.reduce((n, d) => n + d.lessons.length, 0)} lecciones, ${bytes} bytes. Usa --publish para escribir en Firestore.`);
} else {
  const projectId = process.env.GOOGLE_CLOUD_PROJECT;
  if (projectId !== 'socrates-439aa') throw new Error('Define GOOGLE_CLOUD_PROJECT=socrates-439aa para confirmar el proyecto de destino.');
  const app = getApps()[0] ?? initializeApp({ credential: applicationDefault(), projectId });
  await getFirestore(app).doc('programs/aws-cloud-practitioner').set(course);
  console.log(`Curso publicado en ${projectId}/programs/aws-cloud-practitioner.`);
}
