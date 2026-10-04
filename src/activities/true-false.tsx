import { useState } from 'react';
import { ActivityJourney, ActivityReview } from '@/ui/ActivityJourney';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Rich } from '@/design-system/components';
import { feedback } from '@/design-system/feedback';

export interface TrueFalseProps {
  statements: { text: string; answer: boolean; why?: string }[];
}
type TFValue = (boolean | null)[];

function TrueFalse({ props, value, onChange, status }: ActivityProps<TrueFalseProps, TFValue>) {
  const v: TFValue = value ?? props.statements.map(() => null);
  const locked = status === 'correct' || status === 'revealed';
  const set = (i: number, b: boolean) => { if (locked) return; feedback('select'); const n = [...v]; n[i] = b; onChange(n); };
  const [index, setIndex] = useState(0);
  const [review, setReview] = useState(false);
  const [focusOnEntry, setFocusOnEntry] = useState(false);
  if (review) return <ActivityReview readOnly={locked} items={props.statements.map((s, i) => ({ label: s.text, answer: v[i] === null ? 'Sin responder' : v[i] ? 'Verdadero' : 'Falso', feedback: status === 'incorrect' && v[i] !== null && v[i] !== s.answer ? 'Revisar esta respuesta' : undefined }))} onEdit={i => { setIndex(i); setFocusOnEntry(true); setReview(false); }} />;
  return (
    <ActivityJourney focusOnMount={focusOnEntry} index={index} count={props.statements.length} label="Afirmación" onNavigate={setIndex} onReview={() => setReview(true)}>
      {props.statements.map((s, i) => {
        if (i !== index) return null;
        const shown = status !== 'answering' && v[i] !== null;
        const wrong = status === 'incorrect' && v[i] !== null && v[i] !== s.answer;
        const right = (status === 'correct' || status === 'revealed');
        return (
          <div key={i} className={`act-tf${wrong ? ' is-wrong' : ''}${right ? ' is-right' : ''}`}>
            <p className="act-tf__text"><Rich text={s.text} /></p>
            <div className="act-tf__btns" role="radiogroup" aria-label={`Afirmación ${i + 1}`}>
              <button type="button" role="radio" aria-checked={v[i] === true} className={`act-tf__btn t${v[i] === true ? ' is-on' : ''}`} onClick={() => set(i, true)} disabled={locked}>Verdadero</button>
              <button type="button" role="radio" aria-checked={v[i] === false} className={`act-tf__btn f${v[i] === false ? ' is-on' : ''}`} onClick={() => set(i, false)} disabled={locked}>Falso</button>
            </div>
            {shown && right && s.why && <p className="ds-xs ds-muted"><Rich text={s.why} /></p>}
          </div>
        );
      })}
    </ActivityJourney>
  );
}

export default defineActivity<TrueFalseProps, TFValue>({
  type: 'true-false',
  label: 'Verdadero o falso',
  icon: 'ToggleRight',
  description: 'Varias afirmaciones para clasificar como verdaderas o falsas; ideal para validar conceptos y desmontar mitos.',
  graded: true,
  Component: TrueFalse,
  isReady: (p, v) => !!v && v.length === p.statements.length && v.every((x) => x !== null),
  check(p, v) {
    const bad = p.statements.filter((s, i) => v[i] !== s.answer);
    return { correct: bad.length === 0, score: (p.statements.length - bad.length) / p.statements.length, feedback: bad.length ? bad[0].why ?? `${bad.length} ${bad.length === 1 ? 'afirmación está mal marcada' : 'afirmaciones están mal marcadas'}.` : undefined };
  },
  solution: (p) => p.statements.map((s) => s.answer),
  validate: (p) => (p.statements.length < 2 ? ['se requieren ≥2 afirmaciones'] : p.statements.every((s) => s.answer) || p.statements.every((s) => !s.answer) ? ['incluye verdaderas y falsas'] : []),
});
