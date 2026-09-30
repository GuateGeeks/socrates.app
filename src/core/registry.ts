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

/** Helper tipado para autores de contenido: step('choice', {...}) */
export type StepOf<D> = D extends ActivityDefinition<infer P, any> ? StepBase<string, P> : never;
