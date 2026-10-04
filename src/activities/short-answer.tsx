import { ActivityJourney } from '@/ui/ActivityJourney';
import { useEffect, useId, useRef, useState } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Button, Rich } from '@/design-system/components';
import { feedback } from '@/design-system/feedback';
import { isShortAnswerValueReady, type ShortAnswerValue } from './short-answer-value';

export type { ShortAnswerValue } from './short-answer-value';

export interface ShortAnswerProps {
  placeholder?: string;
  /** respuesta modelo que el estudiante compara con la suya */
  model: string;
  /** criterios de autoevaluación (lista de cotejo) */
  rubric: string[];
  minWords?: number;
}
const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

export function isShortAnswerReady(props: ShortAnswerProps, value: ShortAnswerValue | undefined): boolean {
  return isShortAnswerValueReady(value, props.rubric.length, props.minWords ?? 8);
}

function ShortAnswer({ props, value, onChange, api }: ActivityProps<ShortAnswerProps, ShortAnswerValue>) {
  const v: ShortAnswerValue = value ?? { text: '', checks: props.rubric.map(() => false), seen: false };
  const id = useId();
  const min = props.minWords ?? 8;
  const enough = words(v.text) >= min;
  const ready = isShortAnswerReady(props, v);
  useEffect(() => { api.setReady(ready); }, [ready]); // eslint-disable-line react-hooks/exhaustive-deps
  const [phase, setPhase] = useState(0);
  const input = useRef<HTMLTextAreaElement>(null);
  const previousPhase = useRef(phase);
  useEffect(() => {
    if (phase === 0 && previousPhase.current !== 0) input.current?.focus();
    previousPhase.current = phase;
  }, [phase]);
  const editor = <>
    <label htmlFor={id}>Tu respuesta</label>
    <textarea ref={input} id={id} className="act-sa" rows={5} placeholder={props.placeholder ?? 'Escribe tu respuesta con tus propias palabras…'}
      value={v.text} onChange={(e) => onChange({ ...v, text: e.target.value })} />
    <p className="ds-xs ds-muted">{words(v.text)} palabras {enough ? '✓' : `(mínimo ${min})`}</p>
  </>;
  if (phase === 0) return <div className="activity-journey ds-stack"><h3>Escritura</h3>{editor}
    <Button variant="secondary" disabled={!enough} onClick={() => { feedback('select'); onChange({ ...v, seen: true }); setPhase(1); }}>Comparar con una respuesta modelo</Button>
  </div>;
  return <ActivityJourney focusOnMount index={phase} count={3} onNavigate={setPhase}>
    <h3>{phase === 1 ? 'Comparación' : 'Criterios'}</h3>
    <details open={phase === 1}><summary>Mi respuesta</summary><p><Rich text={v.text} /></p></details>
    <Button variant="secondary" onClick={() => setPhase(0)}>Editar mi respuesta</Button>
    {phase === 1 ? <div className="act-sa__model"><strong>Respuesta modelo</strong><p><Rich text={props.model} /></p></div> : <>
      <details><summary>Consultar respuesta modelo</summary><p><Rich text={props.model} /></p></details>
      <strong>Revisa tu respuesta: ¿cumple con…?</strong>
      {props.rubric.map((r, i) => <label key={i} className="act-check">
        <input type="checkbox" checked={v.checks[i]} onChange={(e) => { const c = [...v.checks]; c[i] = e.target.checked; onChange({ ...v, checks: c }); }} /><span>{r}</span>
      </label>)}
    </>}
  </ActivityJourney>;

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
  testSolve: (props) => {
    const min = props.minWords ?? 8;
    const seed = props.model.trim().split(/\s+/).filter(Boolean);
    const filler = ['Esta', 'evidencia', 'queda', 'guardada', 'para', 'revision'];
    while (seed.length < min) seed.push(filler[seed.length % filler.length]);
    return { text: seed.join(' '), checks: props.rubric.map(() => true), seen: true };
  },
  validate: (p) => (!p.model || p.rubric.length === 0 ? ['requiere model y rubric'] : []),
});
