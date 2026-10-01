import type { AreaId } from '@/cnb/model';
import type { ActivityDefinition, StepBase } from './types';

/**
 * Registro de actividades — el punto de extensión principal.
 *
 *   export default defineActivity<MisProps, MiRespuesta>({ type: 'mi-actividad', ... })
 *
 * y agregarla a src/activities/index.ts. Nada más en la app necesita cambiar:
 * el reproductor de lecciones, la galería y el validador la descubren desde aquí.
 */
const registry = new Map<string, ActivityDefinition>();

export function defineActivity<P, A>(def: ActivityDefinition<P, A>): ActivityDefinition<P, A> {
  return def;
}

export function registerActivity(def: ActivityDefinition) {
  if (registry.has(def.type)) throw new Error(`Actividad duplicada: ${def.type}`);
  registry.set(def.type, def);
}

export function getActivity(type: string): ActivityDefinition | undefined {
  return registry.get(type);
}

export function listActivities(): ActivityDefinition[] {
  return [...registry.values()];
}

/** Evidencia evaluable: corrección automática o producción registrada para revisión. */
export function isAssessmentEvidence(step: StepBase, area: AreaId): boolean {
  const def = getActivity(step.type);
  return Boolean(
    step.areas[0] === area
    && (def?.graded || def?.evidenceMode === 'journal-pending-review')
    && step.cnb.some((ref) => ref.startsWith(`${area}:`)),
  );
}

/** Evidencia con corrección automática; nunca incluye diarios pendientes de revisión. */
export function isAutoGradedAssessmentEvidence(step: StepBase, area: AreaId): boolean {
  const def = getActivity(step.type);
  return Boolean(
    step.areas[0] === area
    && def?.graded
    && step.cnb.some((ref) => ref.startsWith(`${area}:`)),
  );
}

/** Producción guardada que requiere revisión humana antes de acreditar logro. */
export function isPendingReviewEvidence(step: StepBase, area: AreaId): boolean {
  const def = getActivity(step.type);
  return Boolean(
    step.areas[0] === area
    && def?.recordsEvidence
    && def.evidenceMode === 'journal-pending-review'
    && step.cnb.some((ref) => ref.startsWith(`${area}:`)),
  );
}

/** Valida evidencia contra el área primaria declarada por el propio paso. */
export function isDeclaredAssessmentEvidence(step: StepBase): boolean {
  const primaryArea = step.areas[0];
  return Boolean(primaryArea && isAssessmentEvidence(step, primaryArea));
}

/** Helper tipado para autores de contenido: step('choice', {...}) */
export type StepOf<D> = D extends ActivityDefinition<infer P, any> ? StepBase<string, P> : never;
