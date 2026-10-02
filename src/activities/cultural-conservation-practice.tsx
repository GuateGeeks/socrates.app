import { useId } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps, StepBase } from '@/core/types';
import { Button } from '@/design-system/components';
import { LowActivityPracticeControl, isValidLowActivityPractice, solveLowActivityForTest, type LowActivityModeProps, type LowActivityModeValue } from './low-activity-mode';

export interface CulturalPracticeFields {
  culturalPractice: string;
  naturalResource: string;
  beforeAction: string;
  actionReport: string;
  afterAction: string;
}
export interface CulturalConservationProps {
  minWords?: number;
  rubric: string[];
  example: CulturalPracticeFields;
}
export interface CulturalConservationValue extends CulturalPracticeFields {
  text: string;
  checks: boolean[];
  seen: boolean;
  practice?: LowActivityModeValue;
}

const fields: Array<[keyof CulturalPracticeFields, string]> = [
  ['culturalPractice', 'Práctica que realmente conozco desde mi familia, comunidad o cultura'],
  ['naturalResource', 'Recurso natural que ayuda a proteger'],
  ['beforeAction', 'Antes'],
  ['actionReport', 'Acción voluntaria que realicé ahora'],
  ['afterAction', 'Después y verificación'],
];
const words = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;
const composeText = (value: CulturalPracticeFields) => fields.map(([field, label]) => `${label}: ${value[field]}`).join('\n');

export function isCulturalConservationReady(props: CulturalConservationProps, value: CulturalConservationValue | undefined) {
  return Boolean(value && fields.every(([field]) => words(value[field]) >= 3)
    && words(value.text) >= (props.minWords ?? 24) && value.seen
    && value.checks.length === props.rubric.length && value.checks.every(Boolean)
    && isValidLowActivityPractice(value.practice));
}

function CulturalConservationPractice({ props, value, onChange, status, step, api, attempt }: ActivityProps<CulturalConservationProps, CulturalConservationValue>) {
  const id = useId();
  const current: CulturalConservationValue = value ?? {
    culturalPractice: '', naturalResource: '', beforeAction: '', actionReport: '', afterAction: '',
    text: '', checks: props.rubric.map(() => false), seen: false,
  };
  const updateField = (field: keyof CulturalPracticeFields, next: string) => {
    const updated = { ...current, [field]: next };
    onChange({ ...updated, text: composeText(updated) });
  };
  return (
    <div className="ds-stack act-cultural-practice">
      <p className="ds-small ds-muted">El ejemplo suministrado sirve para aprender, pero no acredita este indicador. Si todavía no conoces una práctica propia, escribe que necesitas consultarla; eso es honesto y queda pendiente de revisión, sin afirmar dominio.</p>
      {fields.map(([field, label], index) => (
        <label key={field} htmlFor={`${id}-${index}`} className="ds-stack" style={{ gap: 4 }}>
          <strong className="ds-small">{label}</strong>
          <textarea id={`${id}-${index}`} className="act-sa" rows={2} value={current[field]}
            onChange={(event) => updateField(field, event.target.value)} />
        </label>
      ))}
      <LowActivityPracticeControl step={{ ...step, type: 'low-activity-mode', props: {} } as StepBase<string, LowActivityModeProps>}
        props={{}} value={current.practice} status={status} attempt={attempt} api={api}
        onChange={(practice) => onChange({ ...current, practice })} />
      {!current.seen ? (
        <Button variant="secondary" disabled={fields.some(([field]) => words(current[field]) < 3)} onClick={() => onChange({ ...current, seen: true })}>
          Revisar criterios antes de entregar
        </Button>
      ) : props.rubric.map((criterion, index) => (
        <label key={criterion} className="act-check">
          <input type="checkbox" checked={current.checks[index]} onChange={(event) => {
            const checks = [...current.checks]; checks[index] = event.target.checked; onChange({ ...current, checks });
          }} />
          <span>{criterion}</span>
        </label>
      ))}
      <p className="ds-xs ds-muted">La evidencia queda pendiente de revisión docente. Repetirás la acción si recargas la página antes de entregarla.</p>
    </div>
  );
}

export default defineActivity<CulturalConservationProps, CulturalConservationValue>({
  type: 'cultural-conservation-practice', label: 'Práctica cultural de conservación', icon: 'Leaf',
  description: 'Evidencia revisable que une procedencia cultural propia, recurso natural y una acción local comprobada.',
  graded: false, recordsEvidence: true, evidenceMode: 'journal-pending-review', Component: CulturalConservationPractice,
  compositeEvidence: true,
  isReady: isCulturalConservationReady,
  testSolve: (props) => {
    const base = { ...props.example };
    return { ...base, text: composeText(base), checks: props.rubric.map(() => true), seen: true, practice: solveLowActivityForTest() };
  },
  validate: (props) => [
    props.rubric.length < 4 ? 'requiere al menos cuatro criterios de revisión' : '',
    fields.some(([field]) => words(props.example[field]) < 3) ? 'el ejemplo de prueba requiere todos los campos' : '',
  ].filter(Boolean),
});
