import { useMemo, useState, type CSSProperties } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Rich } from '@/design-system/components';
import { feedback } from '@/design-system/feedback';
import { Glyph } from '@/design-system/icons';
import { shuffled } from './util';

export interface MatchProps {
  pairs: { id: string; left: string; right: string; leftEmoji?: string; rightEmoji?: string; leftIcon?: string; rightIcon?: string }[];
  leftTitle?: string;
  rightTitle?: string;
}
/** leftPairId → rightPairId */
type MatchValue = Record<string, string>;

const PAIR_COLORS = ['#1d9bd7', '#d6246e', '#e8782a', '#8db32c', '#7d3c98', '#eeae1f', '#1c9a6b', '#c0283b'];

function Match({ step, props, value = {}, onChange, status }: ActivityProps<MatchProps, MatchValue>) {
  const [sel, setSel] = useState<string | null>(null);
  const left = useMemo(() => shuffled(props.pairs, step.id + 'L'), [props.pairs, step.id]);
  const right = useMemo(() => shuffled(props.pairs, step.id + 'R'), [props.pairs, step.id]);
  const locked = status === 'correct' || status === 'revealed';
  const colorOf = (leftId: string) => PAIR_COLORS[Object.keys(value).indexOf(leftId) % PAIR_COLORS.length];
  const leftFor = (rightId: string) => Object.keys(value).find((k) => value[k] === rightId);

  const tapLeft = (id: string) => {
    if (locked) return;
    feedback('select');
    if (value[id]) { const n = { ...value }; delete n[id]; onChange(n); setSel(id); return; }
    setSel(sel === id ? null : id);
  };
  const tapRight = (id: string) => {
    if (locked || !sel) return;
    feedback('drop');
    const n = { ...value };
    const prev = leftFor(id); if (prev) delete n[prev];
    n[sel] = id; onChange(n); setSel(null);
  };
  const wrong = (leftId: string) => status === 'incorrect' && value[leftId] && value[leftId] !== leftId;

  return (
    <div className="ds-stack">
      <div className="act-match">
        <div className="ds-stack" style={{ gap: 'var(--sp-2)' }}>
          {props.leftTitle && <div className="ds-section-title">{props.leftTitle}</div>}
          {left.map((p) => (
            <button key={p.id} type="button" className={`act-match__cell${sel === p.id ? ' is-picked' : ''}${value[p.id] ? ' is-linked' : ''}${wrong(p.id) ? ' is-wrong' : ''}`}
              style={value[p.id] ? ({ '--pair': colorOf(p.id) } as CSSProperties) : undefined} onClick={() => tapLeft(p.id)} disabled={locked}>
              <Glyph icon={p.leftIcon} emoji={p.leftEmoji} size={18} /><Rich text={p.left} />
            </button>
          ))}
        </div>
        <div className="ds-stack" style={{ gap: 'var(--sp-2)' }}>
          {props.rightTitle && <div className="ds-section-title">{props.rightTitle}</div>}
          {right.map((p) => {
            const l = leftFor(p.id);
            return (
              <button key={p.id} type="button" className={`act-match__cell${l ? ' is-linked' : ''}${sel ? ' is-target' : ''}${l && wrong(l) ? ' is-wrong' : ''}`}
                style={l ? ({ '--pair': colorOf(l) } as CSSProperties) : undefined} onClick={() => tapRight(p.id)} disabled={locked}>
                <Glyph icon={p.rightIcon} emoji={p.rightEmoji} size={18} /><Rich text={p.right} />
              </button>
            );
          })}
        </div>
      </div>
      <p className="ds-xs ds-muted ds-center">{sel ? 'Ahora toca su pareja en la columna derecha →' : 'Toca un elemento de la izquierda y luego su pareja.'}</p>
    </div>
  );
}

export default defineActivity<MatchProps, MatchValue>({
  type: 'match',
  label: 'Emparejar',
  icon: 'Link',
  description: 'Unir parejas (vocabulario L2/L3, glándula–hormona, causa–efecto, organelo–función).',
  graded: true,
  Component: Match,
  isReady: (p, v) => !!v && Object.keys(v).length === p.pairs.length,
  check(p, v) {
    const right = p.pairs.filter((x) => v[x.id] === x.id).length;
    return { correct: right === p.pairs.length, score: right / p.pairs.length, feedback: right === p.pairs.length ? undefined : `${right} de ${p.pairs.length} parejas correctas.` };
  },
  solution: (p) => Object.fromEntries(p.pairs.map((x) => [x.id, x.id])),
  validate: (p) => (p.pairs.length < 2 ? ['se requieren ≥2 parejas'] : []),
});
