export const PROGRAMS = {
  'cnb-sexto': { title: 'Sexto Primaria', subtitle: 'Currículo Nacional Base de Guatemala', icon: 'BookOpen' },
  'aws-cloud-practitioner': { title: 'AWS Certified Cloud Practitioner', subtitle: 'Preparación para el examen CLF-C02', icon: 'Cloud' },
} as const;

export type ProgramId = keyof typeof PROGRAMS;
export const PROGRAM_IDS = Object.keys(PROGRAMS) as ProgramId[];
export function isProgramId(value: unknown): value is ProgramId {
  return typeof value === 'string' && Object.hasOwn(PROGRAMS, value);
}
