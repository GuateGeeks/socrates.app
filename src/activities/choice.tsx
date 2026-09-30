import { useMemo } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Rich, Tile } from '@/design-system/components';
import { shuffled } from './util';

export interface ChoiceOption { id: string; text: string; emoji?: string; icon?: string; feedback?: string }
export interface ChoiceProps {
  options: ChoiceOption[];
  correct: string[];
  multiple?: boolean;
  shuffle?: boolean;
  layout?: 'list' | 'grid';
  /** estímulo visual grande (emoji o texto corto, p.ej. un numeral) */
  stimulus?: string;
}

function Choice({ step, props, value = [], onChange, status }: ActivityProps<ChoiceProps, string[]>) {
  const opts = useMemo(() => (props.shuffle === false ? props.options : shuffled(props.options, step.id)), [props.options, props.shuffle, step.id]);
  const locked = status === 'correct' || status === 'revealed';
  const toggle = (id: string) => {
    if (locked) return;
    if (props.multiple) onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);
    else onChange([id]);
  };
  return (
    <div className="ds-stack">
      {props.stimulus && <div className="act-stimulus"><Rich text={props.stimulus} /></div>}
      {props.multiple && <p className="ds-xs ds-muted">Puedes elegir varias respuestas.</p>}
      <div className={props.layout === 'grid' ? 'act-grid-2' : 'ds-stack'} style={{ gap: 'var(--sp-3)' }}>
        {opts.map((o) => {
          const sel = value.includes(o.id);
          const st = status === 'incorrect' && sel && !props.correct.includes(o.id) ? 'incorrect'
            : (status === 'correct' || status === 'revealed') && props.correct.includes(o.id) ? 'correct' : undefined;
          return <Tile key={o.id} emoji={o.emoji} icon={o.icon} selected={sel} state={st} onClick={() => toggle(o.id)} disabled={locked}><Rich text={o.text} /></Tile>;
        })}
      </div>
    </div>
  );
}

export default defineActivity<ChoiceProps, string[]>({
  type: 'choice',
  label: 'Opción múltiple',
  icon: 'ListChecks',
  description: 'Una o varias respuestas, con retroalimentación específica por distractor.',
  graded: true,
  Component: Choice,
  isReady: (_p, v) => !!v && v.length > 0,
  check(p, v) {
    const ok = v.length === p.correct.length && v.every((x) => p.correct.includes(x));
    const wrong = p.options.find((o) => v.includes(o.id) && !p.correct.includes(o.id));
    return { correct: ok, score: ok ? 1 : 0, feedback: ok ? undefined : wrong?.feedback ?? (p.multiple ? 'Te falta alguna o sobra alguna opción.' : undefined) };
  },
  solution: (p) => p.correct,
  validate(p) {
    const e: string[] = [];
    if (p.options.length < 2) e.push('menos de 2 opciones');
    for (const c of p.correct) if (!p.options.some((o) => o.id === c)) e.push(`correcta inexistente: ${c}`);
    if (!p.multiple && p.correct.length !== 1) e.push('selección única con ≠1 correcta');
    return e;
  },
  example: { fase: 'aplicar', areas: ['mat'], cnb: ['mat:1.1'], prompt: '¿Qué triángulo tiene un ángulo de 90°?', props: { options: [{ id: 'a', text: 'Rectángulo', emoji: '📐' }, { id: 'b', text: 'Obtusángulo' }], correct: ['a'] } },
});
