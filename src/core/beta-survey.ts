export const SURVEY_VERSION = 1;
export const SURVEY_ROLES = [
  { value: 'student', label: 'Estudiante' },
  { value: 'teacher', label: 'Docente' },
  { value: 'family', label: 'Familiar o encargado' },
  { value: 'other', label: 'Otro' },
] as const;

export const SURVEY_QUESTIONS = [
  { id: 'role', kind: 'choice', label: '¿Desde qué perspectiva estás probando la app?' },
  { id: 'overall', kind: 'rating', label: 'En general, ¿qué tan buena ha sido tu experiencia?', low: 'Muy mala', high: 'Excelente' },
  { id: 'clarity', kind: 'rating', label: '¿Qué tan claras son las explicaciones e instrucciones?', low: 'Nada claras', high: 'Muy claras' },
  { id: 'engagement', kind: 'rating', label: '¿Qué tan interesantes te parecen los temas y ejemplos?', low: 'Nada interesantes', high: 'Muy interesantes' },
  { id: 'difficulty', kind: 'rating', label: '¿Cómo sientes la dificultad de las actividades?', low: 'Muy fáciles', high: 'Muy difíciles' },
  { id: 'visuals', kind: 'rating', label: '¿Qué tan fácil es leer y entender el diseño visual?', low: 'Muy difícil', high: 'Muy fácil' },
  { id: 'navigation', kind: 'rating', label: '¿Qué tan fácil es encontrar lo que quieres hacer?', low: 'Muy difícil', high: 'Muy fácil' },
  { id: 'interactivity', kind: 'rating', label: '¿Cuánto te ayudan las actividades interactivas a aprender?', low: 'Nada', high: 'Mucho' },
  { id: 'bestPart', kind: 'text', label: '¿Qué es lo que más te gustó o te ayudó?' },
  { id: 'firstImprovement', kind: 'text', label: 'Si pudiéramos mejorar una cosa primero, ¿cuál sería?' },
] as const;

export type SurveyRole = typeof SURVEY_ROLES[number]['value'];
export type SurveyQuestionId = typeof SURVEY_QUESTIONS[number]['id'];
export type SurveyRatingId = Extract<typeof SURVEY_QUESTIONS[number], { kind: 'rating' }>['id'];
export function firstSurveyInputId(id: SurveyQuestionId): string {
  return id === 'bestPart' || id === 'firstImprovement' ? `answer-${id}` : `survey-input-${id}`;
}
export function focusSurveyError(root: { getElementById(id: string): { focus?: () => void } | null }, id: SurveyQuestionId): boolean {
  if (!root.getElementById(`survey-error-${id}`)) return false;
  const input = root.getElementById(firstSurveyInputId(id));
  if (!input?.focus) return false;
  input.focus();
  return true;
}
export interface SurveyAnswers {
  role: SurveyRole | '';
  overall: number | null;
  clarity: number | null;
  engagement: number | null;
  difficulty: number | null;
  visuals: number | null;
  navigation: number | null;
  interactivity: number | null;
  bestPart: string;
  firstImprovement: string;
}

export function emptySurveyAnswers(): SurveyAnswers {
  return { role: '', overall: null, clarity: null, engagement: null, difficulty: null,
    visuals: null, navigation: null, interactivity: null, bestPart: '', firstImprovement: '' };
}

const ratingIds: SurveyRatingId[] = ['overall', 'clarity', 'engagement', 'difficulty', 'visuals', 'navigation', 'interactivity'];
const roleValues = SURVEY_ROLES.map((role) => role.value);

export function validateSurveyAnswers(value: SurveyAnswers): SurveyQuestionId[] {
  const errors: SurveyQuestionId[] = [];
  if (!roleValues.includes(value.role as SurveyRole)) errors.push('role');
  for (const id of ratingIds) if (!Number.isInteger(value[id]) || value[id]! < 1 || value[id]! > 5) errors.push(id);
  for (const id of ['bestPart', 'firstImprovement'] as const) {
    if (typeof value[id] !== 'string' || value[id].trim().length < 2 || value[id].trim().length > 500) errors.push(id);
  }
  return errors;
}

export function createSurveySubmission(displayName: string, answers: SurveyAnswers) {
  if (validateSurveyAnswers(answers).length) throw new Error('Completa las diez respuestas antes de enviar.');
  const name = displayName.trim();
  if (!name || name.length > 30) throw new Error('Revisa el nombre de tu perfil en Ajustes antes de enviar.');
  return { version: SURVEY_VERSION, displayName: name,
    answers: { ...answers, bestPart: answers.bestPart.trim(), firstImprovement: answers.firstImprovement.trim() } };
}

const DRAFT_KEY = 'socrates.beta-survey.v1';
export interface SurveyDraft { version: 1; answers: SurveyAnswers; submittedAt: number | null }

export function loadSurveyDraft(): SurveyDraft {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(DRAFT_KEY) ?? 'null');
    if (raw && typeof raw === 'object' && (raw as SurveyDraft).version === 1) {
      const stored = raw as Partial<SurveyDraft>;
      const candidate = { ...emptySurveyAnswers(), ...stored.answers };
      const answers: SurveyAnswers = {
        role: roleValues.includes(candidate.role as SurveyRole) ? candidate.role : '',
        overall: validRating(candidate.overall), clarity: validRating(candidate.clarity),
        engagement: validRating(candidate.engagement), difficulty: validRating(candidate.difficulty),
        visuals: validRating(candidate.visuals), navigation: validRating(candidate.navigation),
        interactivity: validRating(candidate.interactivity),
        bestPart: typeof candidate.bestPart === 'string' ? candidate.bestPart.slice(0, 500) : '',
        firstImprovement: typeof candidate.firstImprovement === 'string' ? candidate.firstImprovement.slice(0, 500) : '',
      };
      return { version: 1, answers, submittedAt: typeof stored.submittedAt === 'number' ? stored.submittedAt : null };
    }
  } catch { /* unavailable or damaged local storage */ }
  return { version: 1, answers: emptySurveyAnswers(), submittedAt: null };
}

function validRating(value: unknown): number | null { return Number.isInteger(value) && Number(value) >= 1 && Number(value) <= 5 ? Number(value) : null; }

export function saveSurveyDraft(draft: SurveyDraft): void {
  try { localStorage.setItem(DRAFT_KEY, JSON.stringify(draft)); } catch { /* unavailable local storage */ }
}
