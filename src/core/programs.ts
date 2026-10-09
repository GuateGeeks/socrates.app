export const PROGRAMS = {
  'cnb-sexto': { title: 'Sexto Primaria', subtitle: 'Currículo Nacional Base de Guatemala', icon: 'BookOpen' },
  'aws-cloud-practitioner': { title: 'AWS Certified Cloud Practitioner', subtitle: 'Preparación para el examen CLF-C02', icon: 'Cloud' },
} as const;

export type ProgramId = keyof typeof PROGRAMS;
export const PROGRAM_IDS = Object.keys(PROGRAMS) as ProgramId[];

/** Espacios visibles del catálogo escolar. Solo Sexto tiene contenido y una ruta activa. */
export const SCHOOL_GRADES = [
  { title: '4.º Primaria', available: false },
  { title: '5.º Primaria', available: false },
  { title: PROGRAMS['cnb-sexto'].title, available: true, programId: 'cnb-sexto' },
  { title: '1.º Básico', available: false },
  { title: '2.º Básico', available: false },
  { title: '3.º Básico', available: false },
] as const;
export function isProgramId(value: unknown): value is ProgramId {
  return typeof value === 'string' && Object.hasOwn(PROGRAMS, value);
}
