import { useMemo, useState, type CSSProperties } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Rich } from '@/design-system/components';
import { useDragDrop } from '@/design-system/interaction/dnd';
import { feedback } from '@/design-system/feedback';
import { Glyph } from '@/design-system/icons';
import { shuffled } from './util';

export interface SortProps {
  buckets: { id: string; label: string; emoji?: string; icon?: string; color?: string }[];
  items: { id: string; text: string; emoji?: string; icon?: string; bucket: string; feedback?: string }[];
  /** 'grid2' = cubetas en 2 columnas (útil para FODA, célula animal/vegetal…) */
  layout?: 'stack' | 'grid2';
}
type SortValue = Record<string, string>;

function Sort({ step, props, value = {}, onChange, status }: ActivityProps<SortProps, SortValue>) {
  const [picked, setPicked] = useState<string | null>(null);
  const locked = status === 'correct' || status === 'revealed';
  const items = useMemo(() => shuffled(props.items, step.id), [props.items, step.id]);
  const place = (item: string, bucket: string | null) => {
    if (locked) return;
    const next = { ...value };
    if (bucket) next[item] = bucket; else delete next[item];
    onChange(next);
    setPicked(null);
  };
  const dnd = useDragDrop({
    disabled: locked,
    onDrop: (item, zone) => place(item, zone === '__pool' ? null : zone),
    onTap: (item) => {
      // Si ya hay una ficha elegida y se toca una ficha colocada, la elegida va a esa misma categoría.
      if (picked && picked !== item && value[item]) { place(picked, value[item]); return; }
      feedback('select'); setPicked((p) => (p === item ? null : item));
    },
  });
  const pool = items.filter((i) => !value[i.id]);
  const wrong = (id: string) => status === 'incorrect' && value[id] && props.items.find((i) => i.id === id)?.bucket !== value[id];
  const chip = (i: SortProps['items'][number]) => (
    <div key={i.id} {...dnd.draggable(i.id)}
      className={`ds-draggable act-token${picked === i.id ? ' is-picked' : ''}${wrong(i.id) ? ' is-wrong' : ''}${locked ? ' is-locked' : ''}`}
      aria-pressed={picked === i.id} onClick={(e) => e.stopPropagation()}>
      <Glyph icon={i.icon} emoji={i.emoji} size={18} /><Rich text={i.text} />
    </div>
  );
  return (
    <div className="ds-stack">
      <div data-dropzone="__pool" className="act-pool" onClick={() => picked && value[picked] && place(picked, null)}>
        {pool.length ? pool.map(chip) : <span className="ds-muted ds-small">¡Todo clasificado! {locked ? '' : 'Toca una ficha para moverla.'}</span>}
      </div>
      <p className="ds-xs ds-muted ds-center">{picked ? 'Ahora toca la categoría donde va 👇' : 'Arrastra cada ficha o tócala y luego toca su categoría.'}</p>
      <div className={props.layout === 'grid2' ? 'act-grid-2' : 'ds-stack'} style={{ gap: 'var(--sp-3)' }}>
        {props.buckets.map((b) => (
          <div key={b.id} data-dropzone={b.id} className={`act-bucket${picked ? ' is-target' : ''}`}
            style={{ '--bucket': b.color ?? 'var(--c-jade)' } as CSSProperties}
            onClick={() => picked && place(picked, b.id)}>
            <div className="act-bucket__label"><Glyph icon={b.icon} emoji={b.emoji} size={18} /> {b.label}</div>
            <div className="act-bucket__items">{items.filter((i) => value[i.id] === b.id).map(chip)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default defineActivity<SortProps, SortValue>({
  type: 'sort',
  label: 'Clasificar',
  icon: 'LayoutGrid',
  description: 'Arrastrar (o tocar-tocar) fichas a categorías. Sirve para clasificar, FODA, tablas de doble entrada.',
  graded: true,
  Component: Sort,
  isReady: (p, v) => !!v && p.items.every((i) => v[i.id]),
  check(p, v) {
    const bad = p.items.filter((i) => v[i.id] !== i.bucket);
    return {
      correct: bad.length === 0,
      score: (p.items.length - bad.length) / p.items.length,
      feedback: bad.length ? bad[0].feedback ?? `${bad.length === 1 ? 'Una ficha está' : `${bad.length} fichas están`} en la categoría equivocada (marcadas en rojo).` : undefined,
    };
  },
  solution: (p) => Object.fromEntries(p.items.map((i) => [i.id, i.bucket])),
  validate: (p) => p.items.filter((i) => !p.buckets.some((b) => b.id === i.bucket)).map((i) => `ítem ${i.id} → cubeta inexistente ${i.bucket}`),
  example: { fase: 'construir', areas: ['cnt'], cnb: ['cnt:5.1'], prompt: 'Clasifica los alimentos', props: { buckets: [{ id: 'p', label: 'Proteínas', emoji: '🥚' }, { id: 'c', label: 'Carbohidratos', emoji: '🌽' }], items: [{ id: '1', text: 'Frijol', emoji: '🫘', bucket: 'p' }, { id: '2', text: 'Tortilla', emoji: '🫓', bucket: 'c' }] } },
});
