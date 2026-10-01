import { useEffect, useId } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Button, Rich } from '@/design-system/components';
import { feedback } from '@/design-system/feedback';

export interface ShortAnswerProps {
  placeholder?: string;
  /** respuesta modelo que el estudiante compara con la suya */
  model: string;
  /** criterios de autoevaluación (lista de cotejo) */
  rubric: string[];
  minWords?: number;
}
export interface ShortAnswerValue { text: string; checks: boolean[]; seen: boolean }

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

export function isShortAnswerReady(props: ShortAnswerProps, value: ShortAnswerValue | undefined): boolean {
  if (!value || !value.seen || value.checks.length !== props.rubric.length || !value.checks.every(Boolean)) return false;
  const tokens = value.text.toLocaleLowerCase('es').match(/[a-záéíóúüñ0-9]+/g) ?? [];
  const minWords = props.minWords ?? 8;
  const requiredVariety = Math.min(4, Math.ceil(minWords / 3));
  return tokens.length >= minWords && new Set(tokens.filter((token) => token.length >= 3)).size >= requiredVariety;
}

function ShortAnswer({ props, value, onChange, api }: ActivityProps<ShortAnswerProps, ShortAnswerValue>) {
  const v: ShortAnswerValue = value ?? { text: '', checks: props.rubric.map(() => false), seen: false };
  const id = useId();
  const min = props.minWords ?? 8;
  const enough = words(v.text) >= min;
  const ready = isShortAnswerReady(props, v);
  useEffect(() => { api.setReady(ready); }, [ready]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="ds-stack">
      <label htmlFor={id} className="sr-only">Tu respuesta</label>
      <textarea id={id} className="act-sa" rows={5} placeholder={props.placeholder ?? 'Escribe tu respuesta con tus propias palabras…'}
        value={v.text} onChange={(e) => onChange({ ...v, text: e.target.value })} />
      <div className="ds-row ds-xs ds-muted" style={{ justifyContent: 'space-between' }}>
        <span>{words(v.text)} palabras {enough ? '✓' : `(mínimo ${min})`}</span>
      </div>
      {!v.seen
        ? <Button variant="secondary" disabled={!enough} onClick={() => { feedback('select'); onChange({ ...v, seen: true }); }}>Comparar con una respuesta modelo</Button>
        : (
          <div className="act-sa__model">
            <strong className="ds-small">Respuesta modelo</strong>
            <p className="ds-small"><Rich text={props.model} /></p>
            <strong className="ds-small">Revisa tu respuesta: ¿cumple con…?</strong>
            {props.rubric.map((r, i) => (
              <label key={i} className="act-check">
                <input type="checkbox" checked={v.checks[i]} onChange={(e) => { const c = [...v.checks]; c[i] = e.target.checked; onChange({ ...v, checks: c }); }} />
                <span>{r}</span>
              </label>
            ))}
            <p className="ds-xs ds-muted">Puedes mejorar tu respuesta arriba antes de continuar.</p>
          </div>
        )}
    </div>
  );
}

export default defineActivity<ShortAnswerProps, ShortAnswerValue>({
  type: 'short-answer',
  label: 'Respuesta escrita',
  icon: 'PenLine',
  description: 'Producción escrita breve con respuesta modelo y lista de cotejo para autoevaluarse (se guarda en el diario).',
  graded: false,
  recordsEvidence: true,
  evidenceMode: 'journal-pending-review',
  Component: ShortAnswer,
  isReady: isShortAnswerReady,
  validate: (p) => (!p.model || p.rubric.length === 0 ? ['requiere model y rubric'] : []),
});
