import { useId } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps, StepBase } from '@/core/types';
import { Button } from '@/design-system/components';
import { LowActivityPracticeControl, isValidLowActivityPractice, solveLowActivityForTest, type LowActivityModeProps, type LowActivityModeValue } from './low-activity-mode';
import {
  composeConsultationText,
  composeKnownCulturalText,
  culturalPracticeFields,
  culturalWordCount,
  isCulturalConservationAuthoredReady,
  isConsultationCulturalPracticeValue,
  isKnownCulturalPracticeValue,
  type CulturalConservationValue,
  type CulturalPracticeFields,
  type ConsultationCulturalPracticeValue,
  type KnownCulturalPracticeValue,
} from './cultural-conservation-value';

export type { CulturalConservationValue, CulturalPracticeFields } from './cultural-conservation-value';

export interface CulturalConservationProps {
  minWords?: number;
  consultationMinWords?: number;
  /** La aplicación principal ejecuta la acción; las salidas solo informan la práctica ya realizada. */
  requiresLiveAction?: boolean;
  rubric: string[];
  example: CulturalPracticeFields;
}

function knownInitial(): KnownCulturalPracticeValue {
  const fields: CulturalPracticeFields = {
    culturalPractice: '', naturalResource: '', beforeAction: '', actionReport: '', afterAction: '',
  };
  return { mode: 'known-practice', ...fields, text: composeKnownCulturalText(fields), checks: [], seen: false };
}

function consultationInitial(): ConsultationCulturalPracticeValue {
  return { mode: 'needs-consultation', consultationNote: '', text: composeConsultationText(''), checks: [], seen: false };
}

export function isCulturalConservationReady(props: CulturalConservationProps, value: unknown): value is CulturalConservationValue {
  if (!isCulturalConservationAuthoredReady(value, props.rubric.length, props.minWords ?? 24, props.consultationMinWords ?? 8)) return false;
  if (value.mode === 'needs-consultation' || props.requiresLiveAction === false) return true;
  return isValidLowActivityPractice(value.practice as LowActivityModeValue | undefined);
}

function CulturalConservationPractice({ props, value, onChange, status, step, api, attempt }: ActivityProps<CulturalConservationProps, CulturalConservationValue>) {
  const id = useId();
  const current = isKnownCulturalPracticeValue(value) || isConsultationCulturalPracticeValue(value) ? value : undefined;
  const selectMode = (mode: CulturalConservationValue['mode']) => onChange(mode === 'known-practice' ? knownInitial() : consultationInitial());
  return (
    <div className="ds-stack act-cultural-practice">
      <fieldset className="act-cultural-practice__mode" disabled={status === 'correct' || status === 'revealed'}>
        <legend className="ds-small"><strong>Elige una ruta honesta</strong></legend>
        <label><input type="radio" name={`${id}-mode`} checked={current?.mode === 'known-practice'} onChange={() => selectMode('known-practice')} /> Conozco una práctica de mi contexto</label>
        <label><input type="radio" name={`${id}-mode`} checked={current?.mode === 'needs-consultation'} onChange={() => selectMode('needs-consultation')} /> Necesito consultar una práctica</label>
      </fieldset>

      {current?.mode === 'known-practice' && (
        <>
          <p className="ds-small ds-muted">Describe solo una práctica que realmente conoces. El ejemplo suministrado enseña, pero no acredita este indicador.</p>
          {culturalPracticeFields.map(([field, label], index) => (
            <label key={field} htmlFor={`${id}-${index}`} className="ds-stack" style={{ gap: 4 }}>
              <strong className="ds-small">{label}</strong>
              <textarea id={`${id}-${index}`} className="act-sa" rows={2} value={current[field]}
                onChange={(event) => {
                  const updated = { ...current, [field]: event.target.value };
                  onChange({ ...updated, text: composeKnownCulturalText(updated) });
                }} />
            </label>
          ))}
          {props.requiresLiveAction !== false && (
            <LowActivityPracticeControl step={{ ...step, type: 'low-activity-mode', props: {} } as StepBase<string, LowActivityModeProps>}
              props={{}} value={current.practice as LowActivityModeValue | undefined} status={status} attempt={attempt} api={api}
              onChange={(practice) => onChange({ ...current, practice })} />
          )}
          {!current.seen ? (
            <Button variant="secondary" disabled={culturalPracticeFields.some(([field]) => culturalWordCount(current[field]) < 3)}
              onClick={() => onChange({ ...current, checks: props.rubric.map(() => false), seen: true })}>
              Revisar criterios antes de entregar
            </Button>
          ) : props.rubric.map((criterion, index) => (
            <label key={criterion} className="act-check">
              <input type="checkbox" checked={current.checks[index] ?? false} onChange={(event) => {
                const checks = props.rubric.map((_, i) => current.checks[i] ?? false);
                checks[index] = event.target.checked;
                onChange({ ...current, checks });
              }} />
              <span>{criterion}</span>
            </label>
          ))}
        </>
      )}

      {current?.mode === 'needs-consultation' && (
        <div className="ds-stack">
          <p className="ds-small ds-muted">Esta ruta te deja continuar sin inventar una práctica. Quedará como <strong>necesita revisión</strong> y no acreditará dominio.</p>
          <label htmlFor={`${id}-consultation`} className="ds-stack" style={{ gap: 4 }}>
            <strong className="ds-small">¿A quién o qué fuente necesitas consultar y por qué?</strong>
            <textarea id={`${id}-consultation`} className="act-sa" rows={3} value={current.consultationNote}
              onChange={(event) => onChange({ ...current, consultationNote: event.target.value, text: composeConsultationText(event.target.value), seen: false })} />
          </label>
          <p className="ds-xs ds-muted">{culturalWordCount(current.consultationNote)} palabras; mínimo {props.consultationMinWords ?? 8}.</p>
          {!current.seen && (
            <Button variant="secondary" disabled={culturalWordCount(current.consultationNote) < (props.consultationMinWords ?? 8)}
              onClick={() => onChange({ ...current, seen: true })}>
              Confirmar que necesito consulta
            </Button>
          )}
        </div>
      )}
      <p className="ds-xs ds-muted">La evidencia queda visible para revisión docente. Si recargas antes de entregar una acción en curso, deberás repetirla.</p>
    </div>
  );
}

export default defineActivity<CulturalConservationProps, CulturalConservationValue>({
  type: 'cultural-conservation-practice', label: 'Práctica cultural de conservación', icon: 'Leaf',
  description: 'Evidencia revisable con una ruta de práctica conocida y una alternativa honesta de consulta.',
  graded: false, recordsEvidence: true, evidenceMode: 'journal-pending-review', Component: CulturalConservationPractice,
  isReady: isCulturalConservationReady,
  isMasteryEligible: (_props, value) => isKnownCulturalPracticeValue(value),
  testSolve: (props) => {
    const base = { ...props.example };
    return {
      mode: 'known-practice', ...base, text: composeKnownCulturalText(base),
      checks: props.rubric.map(() => true), seen: true,
      ...(props.requiresLiveAction === false ? {} : { practice: solveLowActivityForTest() }),
    };
  },
  validate: (props) => [
    props.rubric.length < 4 ? 'requiere al menos cuatro criterios de revisión' : '',
    culturalPracticeFields.some(([field]) => culturalWordCount(props.example[field]) < 3) ? 'el ejemplo de prueba requiere todos los campos' : '',
    props.consultationMinWords !== undefined && props.consultationMinWords < 6 ? 'la consulta requiere al menos seis palabras' : '',
  ].filter(Boolean),
});
