import type { Lesson } from './types';

/** Pure validation for the narrow preparatory-lesson exception used by the content validator. */
export function preparatoryLessonErrors(lesson: Lesson, followedByAreaEvidence: boolean): string[] {
  if (!lesson.preparatory) return [];
  const errors: string[] = [];
  if (lesson.steps.some((step) => step.cnb.length > 0)) {
    errors.push('una lección preparatoria no puede declarar ninguna referencia CNB');
  }
  if (!followedByAreaEvidence) {
    errors.push(`la preparación debe continuar en una lección posterior con evidencia de ${lesson.area ?? 'su área'}`);
  }
  return errors;
}
