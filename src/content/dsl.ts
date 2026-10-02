/**
 * DSL de autoría: helpers tipados para escribir semanas y lecciones con autocompletado y
 * verificación de tipos por actividad. El resultado es JSON puro (exportable a un CMS).
 *
 *   S.choice({ fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1.1'], prompt: '…' }, { options: [...], correct: ['a'] })
 *
 * Ver docs/AUTORIA.md y docs/ESPECIFICACION_CONTENIDO.md.
 */
import type { AreaUnit, Lesson, Mission, StepBase } from '@/core/types';
import type { ExplainProps } from '@/activities/explain';
import type { WorkedExampleProps } from '@/activities/worked-example';
import type { ChoiceProps } from '@/activities/choice';
import type { SortProps } from '@/activities/sort';
import type { OrderProps } from '@/activities/order';
import type { MatchProps } from '@/activities/match';
import type { MayaNumberProps } from '@/activities/maya-number';
import type { NumberInputProps } from '@/activities/number-input';
import type { SliderProps } from '@/activities/slider';
import type { LoomProps } from '@/activities/symmetry-loom';
import type { PolygonLabProps } from '@/activities/polygon-lab';
import type { CoordMapProps } from '@/activities/coordinate-map';
import type { ChartBuilderProps } from '@/activities/chart-builder';
import type { RhythmProps } from '@/activities/rhythm';
import type { PulseLabProps } from '@/activities/pulse-lab';
import type { DilemmaProps } from '@/activities/dilemma';
import type { RecipeProps } from '@/activities/recipe-scaler';
import type { ReflectionProps } from '@/activities/reflection';
import type { TrueFalseProps } from '@/activities/true-false';
import type { FillBlankProps } from '@/activities/fill-blank';
import type { HighlightProps } from '@/activities/highlight';
import type { ReadingProps } from '@/activities/reading';
import type { ShortAnswerProps } from '@/activities/short-answer';
import type { FlashcardsProps } from '@/activities/flashcards';
import type { ProjectProps } from '@/activities/project';
import type { LowActivityModeProps } from '@/activities/low-activity-mode';

type Meta = Omit<StepBase, 'type' | 'props' | 'id'> & { id?: string };
export type Draft = Omit<StepBase, 'id'> & { id?: string };

const mk = <P>(type: string) => (meta: Meta, props: P): Draft => ({ ...meta, type, props });

export const S = {
  explain: mk<ExplainProps>('explain'),
  ejemplo: mk<WorkedExampleProps>('worked-example'),
  choice: mk<ChoiceProps>('choice'),
  sort: mk<SortProps>('sort'),
  order: mk<OrderProps>('order'),
  match: mk<MatchProps>('match'),
  maya: mk<MayaNumberProps>('maya-number'),
  number: mk<NumberInputProps>('number-input'),
  slider: mk<SliderProps>('slider'),
  loom: mk<LoomProps>('symmetry-loom'),
  polygon: mk<PolygonLabProps>('polygon-lab'),
  coord: mk<CoordMapProps>('coordinate-map'),
  chart: mk<ChartBuilderProps>('chart-builder'),
  rhythm: mk<RhythmProps>('rhythm'),
  pulse: mk<PulseLabProps>('pulse-lab'),
  dilemma: mk<DilemmaProps>('dilemma'),
  recipe: mk<RecipeProps>('recipe-scaler'),
  reflect: mk<ReflectionProps>('reflection'),
  tf: mk<TrueFalseProps>('true-false'),
  fill: mk<FillBlankProps>('fill-blank'),
  highlight: mk<HighlightProps>('highlight'),
  reading: mk<ReadingProps>('reading'),
  write: mk<ShortAnswerProps>('short-answer'),
  cards: mk<FlashcardsProps>('flashcards'),
  project: mk<ProjectProps>('project'),
  lowActivity: mk<LowActivityModeProps>('low-activity-mode'),
};

export function lesson(l: Omit<Lesson, 'steps'> & { steps: Draft[] }): Lesson {
  return { ...l, steps: l.steps.map((s, i) => ({ ...s, id: s.id ?? `${l.id}-${i + 1}` })) };
}

/** Semana (Tema Generador). `bank` = ítems calificados extra para la Semana de validación. */
export function semana(w: Omit<Mission, 'bank'> & { bank?: Draft[] }): Mission {
  const sid = `s${String(w.semana ?? 0).padStart(2, '0')}`;
  return { ...w, bank: (w.bank ?? []).map((s, i) => ({ ...s, id: s.id ?? `${sid}-banco-${i + 1}` })) };
}

/** Compatibilidad con misiones anteriores. */
export function mission(m: Mission): Mission { return m; }

/** Reflexión estándar de cierre (autoevaluación + compromiso), reutilizable. */
export function cierre(meta: Pick<Meta, 'areas' | 'cnb'>, statements: string[], commitments?: string[]): Draft {
  return S.reflect({ fase: 'reflexionar', ambito: 'ser', prompt: '¿Cómo te fue? Sé honesto: aprender es un camino.', ...meta }, { statements, commitments });
}

/**
 * Lecciones de UNA materia en UNA unidad (src/content/sexto/materias/<area>/u<N>.ts).
 *   export default materia({ area: 'mat', unidad: 1, hilo: '…', semanas: { 1: [lesson({...}), …], 2: […] } });
 * El día de cada lección lo asigna el horario (horario.ts); `kind` = 'materia' y `area` se completan solos.
 */
export function materia(u: AreaUnit): AreaUnit {
  const semanas: Record<number, Lesson[]> = {};
  for (const [w, ls] of Object.entries(u.semanas)) semanas[+w] = ls.map((l) => ({ ...l, kind: 'materia', area: u.area }));
  return { ...u, semanas };
}
