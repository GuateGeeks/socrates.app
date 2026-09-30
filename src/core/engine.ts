import type { ActivityDefinition, CheckResult, StepBase, StepStatus } from './types';

/**
 * Máquina de estados de un paso (pura → testeable sin DOM).
 *
 *   answering ──check──▶ correct ──────────────▶ (continuar)
 *       ▲                 incorrect ──retry──┐
 *       └────────────────────────────────────┘
 *                         incorrect ×2 ──reveal──▶ revealed ──▶ (continuar)
 *   (actividades no calificadas) answering ──continue──▶ done
 */
export interface StepState {
  value: unknown;
  status: StepStatus;
  attempt: number;
  /** listo para comprobar/continuar (actividades abiertas lo indican vía api.setReady) */
  ready: boolean;
  result?: CheckResult;
  hintShown: boolean;
}

export type StepAction =
  | { type: 'change'; value: unknown }
  | { type: 'ready'; ready: boolean }
  | { type: 'check'; def: ActivityDefinition; step: StepBase }
  | { type: 'retry' }
  | { type: 'reveal'; def: ActivityDefinition; step: StepBase }
  | { type: 'hint' }
  | { type: 'reset' };

export const REVEAL_AFTER = 2;

export const initialStep = (): StepState => ({ value: undefined, status: 'answering', attempt: 0, ready: false, hintShown: false });

export function stepReducer(s: StepState, a: StepAction): StepState {
  switch (a.type) {
    case 'reset': return initialStep();
    case 'change':
      if (s.status === 'correct' || s.status === 'revealed' || s.status === 'done') return s;
      return { ...s, value: a.value, status: s.status === 'incorrect' ? 'answering' : s.status };
    case 'ready': return s.ready === a.ready ? s : { ...s, ready: a.ready };
    case 'hint': return { ...s, hintShown: true };
    case 'retry': return { ...s, status: 'answering', result: undefined };
    case 'check': {
      if (!a.def.graded || !a.def.check) return { ...s, status: 'done' };
      const result = a.def.check(a.step.props as never, s.value as never);
      return { ...s, status: result.correct ? 'correct' : 'incorrect', attempt: s.attempt + 1, result };
    }
    case 'reveal': {
      const value = a.def.solution ? a.def.solution(a.step.props as never) : s.value;
      return { ...s, value, status: 'revealed' };
    }
  }
}

/** ¿Puede el niño pulsar el botón principal? */
export function canSubmit(def: ActivityDefinition, step: StepBase, s: StepState): boolean {
  if (s.status !== 'answering') return true;
  if (!def.graded) return def.isReady ? def.isReady(step.props, s.value) : s.ready;
  return def.isReady ? def.isReady(step.props, s.value) : s.value !== undefined;
}

/** Resultado del paso para el registro de progreso. */
export function outcomeOf(def: ActivityDefinition, s: StepState) {
  return {
    graded: def.graded,
    correct: def.graded ? s.status === 'correct' : true,
    firstTry: def.graded ? s.status === 'correct' && s.attempt === 1 : true,
    score: def.graded ? (s.status === 'correct' ? s.result?.score ?? 1 : 0) : 1,
    value: !def.graded || s.status === 'correct' || s.status === 'revealed' ? s.value : undefined,
  };
}
