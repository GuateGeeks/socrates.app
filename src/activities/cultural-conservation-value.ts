export interface CulturalPracticeFields {
  culturalPractice: string;
  naturalResource: string;
  beforeAction: string;
  actionReport: string;
  afterAction: string;
}

export interface KnownCulturalPracticeValue extends CulturalPracticeFields {
  mode: 'known-practice';
  text: string;
  checks: boolean[];
  seen: boolean;
  practice?: unknown;
}

export interface ConsultationCulturalPracticeValue {
  mode: 'needs-consultation';
  consultationNote: string;
  text: string;
  checks: boolean[];
  seen: boolean;
}

export type CulturalConservationValue = KnownCulturalPracticeValue | ConsultationCulturalPracticeValue;

export const culturalPracticeFields: Array<[keyof CulturalPracticeFields, string]> = [
  ['culturalPractice', 'Práctica que realmente conozco desde mi familia, comunidad o cultura'],
  ['naturalResource', 'Recurso natural que ayuda a proteger'],
  ['beforeAction', 'Antes'],
  ['actionReport', 'Acción voluntaria que realicé ahora'],
  ['afterAction', 'Después y verificación'],
];

export const culturalWordCount = (value: string) => value.trim().split(/\s+/).filter(Boolean).length;

export function composeKnownCulturalText(value: CulturalPracticeFields): string {
  return culturalPracticeFields.map(([field, label]) => `${label}: ${value[field]}`).join('\n');
}

export function composeConsultationText(note: string): string {
  return `Consulta necesaria: ${note}`;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

export function isKnownCulturalPracticeValue(value: unknown): value is KnownCulturalPracticeValue {
  if (!isObject(value) || value.mode !== 'known-practice' || typeof value.text !== 'string'
    || typeof value.seen !== 'boolean' || !Array.isArray(value.checks)
    || !value.checks.every((check) => typeof check === 'boolean')) return false;
  return culturalPracticeFields.every(([field]) => typeof value[field] === 'string');
}

export function isConsultationCulturalPracticeValue(value: unknown): value is ConsultationCulturalPracticeValue {
  return isObject(value) && value.mode === 'needs-consultation'
    && typeof value.consultationNote === 'string' && typeof value.text === 'string'
    && typeof value.seen === 'boolean' && Array.isArray(value.checks)
    && value.checks.every((check) => typeof check === 'boolean');
}

export function isCulturalConservationAuthoredReady(
  value: unknown,
  rubricLength: number,
  minWords: number,
  consultationMinWords: number,
): value is CulturalConservationValue {
  if (isKnownCulturalPracticeValue(value)) {
    return culturalPracticeFields.every(([field]) => culturalWordCount(value[field]) >= 3)
      && value.text === composeKnownCulturalText(value)
      && culturalWordCount(value.text) >= minWords && value.seen
      && value.checks.length === rubricLength && value.checks.every(Boolean);
  }
  if (isConsultationCulturalPracticeValue(value)) {
    return value.consultationNote.trim().length > 0
      && culturalWordCount(value.consultationNote) >= consultationMinWords
      && value.text === composeConsultationText(value.consultationNote)
      && value.checks.length === 0 && value.seen;
  }
  return false;
}
