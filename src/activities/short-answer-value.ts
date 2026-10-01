export interface ShortAnswerValue { text: string; checks: boolean[]; seen: boolean }

export function isShortAnswerValueReady(value: unknown, rubricLength: number, minWords = 8): value is ShortAnswerValue {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const candidate = value as Partial<ShortAnswerValue>;
  if (typeof candidate.text !== 'string' || candidate.seen !== true || !Array.isArray(candidate.checks)) return false;
  if (candidate.checks.length !== rubricLength || !candidate.checks.every((check) => check === true)) return false;
  const tokens = candidate.text.toLocaleLowerCase('es').match(/[a-záéíóúüñ0-9]+/g) ?? [];
  const requiredVariety = Math.min(4, Math.ceil(minWords / 3));
  return tokens.length >= minWords && new Set(tokens.filter((token) => token.length >= 3)).size >= requiredVariety;
}
