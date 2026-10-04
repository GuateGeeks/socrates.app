import { ActivityJourney, ActivityReview } from '@/ui/ActivityJourney';
import { useEffect, useState } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Tile } from '@/design-system/components';
import { feedback } from '@/design-system/feedback';
import { Icon } from '@/design-system/icons';

export interface ReflectionProps {
  /** autoevaluación tipo lista de cotejo/escala (Herramientas de evaluación en el aula) */
  statements: string[];
  commitments?: string[];
}
interface ReflectionValue { ratings: (number | null)[]; commitment?: string }

const SCALE = [
  { v: 1, icon: 'Sprout', label: 'Aún no' },
  { v: 2, icon: 'Leaf', label: 'Con ayuda' },
  { v: 3, icon: 'TreeDeciduous', label: '¡Sí, solo!' },
];

function Reflection({ props, value, onChange, api }: ActivityProps<ReflectionProps, ReflectionValue>) {
  const v: ReflectionValue = value ?? { ratings: props.statements.map(() => null) };
  useEffect(() => { api.setReady(v.ratings.every((r) => r !== null) && (!props.commitments || !!v.commitment)); }, [JSON.stringify(v)]); // eslint-disable-line react-hooks/exhaustive-deps
  const [index, setIndex] = useState(0);
  const [review, setReview] = useState(false);
  const [focusOnEntry, setFocusOnEntry] = useState(false);
  const count = props.statements.length + (props.commitments ? 1 : 0);
  if (review) return <ActivityReview items={[
    ...props.statements.map((label, i) => ({ label, answer: SCALE.find(s => s.v === v.ratings[i])?.label ?? 'Sin responder' })),
    ...(props.commitments ? [{ label: 'Mi compromiso', answer: v.commitment ?? 'Sin responder' }] : []),
  ]} onEdit={i => { setIndex(i); setFocusOnEntry(true); setReview(false); }} />;
  return (
    <ActivityJourney focusOnMount={focusOnEntry} index={index} count={count} label="Autoevaluación" onNavigate={setIndex} onReview={() => setReview(true)}>
      {props.statements.map((s, i) => i === index && (
        <div key={i} className="act-rate">
          <p><strong>{s}</strong></p>
          <div className="act-rate__row" role="radiogroup" aria-label={s}>
            {SCALE.map((o) => (
              <button key={o.v} type="button" role="radio" aria-checked={v.ratings[i] === o.v} className={`act-rate__opt${v.ratings[i] === o.v ? ' is-on' : ''}`}
                onClick={() => { feedback('select'); const r = [...v.ratings]; r[i] = o.v; onChange({ ...v, ratings: r }); }}>
                <Icon name={o.icon} size={24} /><small>{o.label}</small>
              </button>
            ))}
          </div>
        </div>
      ))}
      {props.commitments && index === props.statements.length && (
        <>
          <h4>Mi compromiso 🤞</h4>
          {props.commitments.map((c) => <Tile key={c} selected={v.commitment === c} onClick={() => onChange({ ...v, commitment: c })}>{c}</Tile>)}
        </>
      )}
    </ActivityJourney>
  );
}

export default defineActivity<ReflectionProps, ReflectionValue>({
  type: 'reflection',
  label: 'Autoevaluación',
  icon: 'Sparkles',
  description: 'Escala de autoevaluación + compromiso personal (metacognición y ámbito del ser).',
  graded: false,
  Component: Reflection,
});
