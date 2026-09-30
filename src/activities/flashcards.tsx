import { useEffect, useState } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Button, Rich } from '@/design-system/components';
import { Icon } from '@/design-system/icons';
import { feedback } from '@/design-system/feedback';
import { play } from '@/design-system/motion';

export interface FlashcardsProps {
  cards: { front: string; back: string; icon?: string; emoji?: string }[];
}
interface FCValue { seen: boolean[]; known: boolean[] }

function Flashcards({ props, value, onChange, api }: ActivityProps<FlashcardsProps, FCValue>) {
  const v: FCValue = value ?? { seen: props.cards.map(() => false), known: props.cards.map(() => false) };
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  useEffect(() => { api.setReady(v.seen.every(Boolean)); }, [v.seen.join()]); // eslint-disable-line react-hooks/exhaustive-deps
  const c = props.cards[i];
  const flip = (e: { currentTarget: HTMLElement }) => {
    feedback('select'); play(e.currentTarget, 'pop'); setFlipped((f) => !f);
    if (!v.seen[i]) { const s = [...v.seen]; s[i] = true; onChange({ ...v, seen: s }); }
  };
  const mark = (known: boolean) => {
    const k = [...v.known]; k[i] = known; onChange({ ...v, known: k });
    setFlipped(false); setI((i + 1) % props.cards.length);
  };
  return (
    <div className="ds-stack">
      <div className="ds-row ds-xs ds-muted" style={{ justifyContent: 'space-between' }}>
        <span>Tarjeta {i + 1} de {props.cards.length}</span>
        <span>Vistas {v.seen.filter(Boolean).length}/{props.cards.length} · Ya las sé {v.known.filter(Boolean).length}</span>
      </div>
      <button type="button" className={`act-fc${flipped ? ' is-back' : ''}`} onClick={flip} aria-label={flipped ? 'Mostrar frente' : 'Voltear tarjeta'}>
        {c.icon ? <Icon name={c.icon} size={40} /> : c.emoji ? <span style={{ fontSize: '2.4rem' }}>{c.emoji}</span> : null}
        <span className="act-fc__txt"><Rich text={flipped ? c.back : c.front} /></span>
        <span className="ds-xs ds-muted">{flipped ? 'Reverso' : 'Toca para voltear'}</span>
      </button>
      <div className="ds-row">
        <Button variant="secondary" block disabled={!flipped} onClick={() => mark(false)}>Repasar</Button>
        <Button variant="ok" block disabled={!flipped} onClick={() => mark(true)}>¡Ya la sé!</Button>
      </div>
    </div>
  );
}

export default defineActivity<FlashcardsProps, FCValue>({
  type: 'flashcards',
  label: 'Tarjetas de memoria',
  icon: 'Layers',
  description: 'Mazo de tarjetas frente/reverso para vocabulario, fechas, fórmulas y conceptos; el niño se autoevalúa.',
  graded: false,
  Component: Flashcards,
  validate: (p) => (p.cards.length < 3 ? ['se recomiendan ≥3 tarjetas'] : []),
});
