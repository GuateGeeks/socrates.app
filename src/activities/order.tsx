import { useEffect, useMemo, useRef, useState, type PointerEvent as RPointerEvent } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Rich } from '@/design-system/components';
import { flip } from '@/design-system/motion';
import { feedback } from '@/design-system/feedback';
import { Glyph } from '@/design-system/icons';
import { shuffled } from './util';

export interface OrderProps {
  /** en el orden CORRECTO */
  items: { id: string; text: string; emoji?: string; icon?: string }[];
  labels?: { start: string; end: string };
}

function Order({ step, props, value, onChange, status }: ActivityProps<OrderProps, string[]>) {
  const initial = useMemo(() => shuffled(props.items, step.id).map((i) => i.id), [props.items, step.id]);
  useEffect(() => { if (!value) onChange(initial); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const order = value ?? initial;
  const [announcement, announce] = useState('');
  const listRef = useRef<HTMLOListElement>(null);
  const locked = status === 'correct' || status === 'revealed';
  const byId = (id: string) => props.items.find((i) => i.id === id)!;

  const orderRef = useRef(order);
  orderRef.current = order;
  const move = (from: number, to: number, control?: HTMLElement) => {
    const cur = orderRef.current;
    if (to < 0 || to >= cur.length || from === to || locked) return;
    const els = Array.from(listRef.current?.children ?? []) as HTMLElement[];
    const next = [...cur]; const [x] = next.splice(from, 1); next.splice(to, 0, x);
    orderRef.current = next;
    const focused = control ?? document.activeElement as HTMLElement | null;
    flip(els, () => onChange(next));
    announce(`${byId(x).text}: posición ${to + 1} de ${next.length}`);
    requestAnimationFrame(() => {
      if (focused?.isConnected) {
        const target = focused.matches(':disabled') ? focused.closest('li')?.querySelector('select') : focused;
        (target as HTMLElement | null)?.focus({ preventScroll: true });
        if (control) target?.scrollIntoView({ block: 'center', inline: 'nearest' });
      }
    });
    feedback('tap');
  };

  /** Arrastre vertical: al cruzar el centro de un vecino se intercambian (con FLIP). */
  const onPointerDown = (e: RPointerEvent<HTMLElement>, id: string) => {
    if (locked) return;
    const li = e.currentTarget.closest('li') as HTMLElement;
    e.preventDefault();
    li.classList.add('is-lifted');
    const mv = (ev: PointerEvent) => {
      const idx = orderRef.current.indexOf(id);
      const sibs = Array.from(listRef.current!.children) as HTMLElement[];
      const prev = sibs[idx - 1], nxt = sibs[idx + 1];
      if (prev) { const r = prev.getBoundingClientRect(); if (ev.clientY < r.top + r.height / 2) move(idx, idx - 1); }
      if (nxt) { const r = nxt.getBoundingClientRect(); if (ev.clientY > r.top + r.height / 2) move(idx, idx + 1); }
    };
    const up = () => {
      li.classList.remove('is-lifted');
      removeEventListener('pointermove', mv); removeEventListener('pointerup', up); removeEventListener('pointercancel', up);
    };
    addEventListener('pointermove', mv); addEventListener('pointerup', up); addEventListener('pointercancel', up);
  };

  return (
    <div className="ds-stack" style={{ gap: 'var(--sp-2)' }}>
      {props.labels && <div className="ds-xs ds-muted">⬆ {props.labels.start}</div>}
      <ol ref={listRef} className="act-order">
        {order.map((id, i) => {
          const it = byId(id);
          const st = status === 'incorrect' && props.items[i].id !== id ? ' is-wrong' : (status === 'correct' || status === 'revealed') ? ' is-right' : '';
          return (
            <li key={id} className={`act-order__item${st}`}>
              <span className="act-order__handle ds-draggable" onPointerDown={(e) => onPointerDown(e, id)} aria-hidden>⋮⋮</span>
              <span className="act-order__n">{i + 1}</span>
              <Glyph icon={it.icon} emoji={it.emoji} size={22} />
              <span className="ds-grow"><Rich text={it.text} /></span>
              <span className="act-order__btns">
                <button type="button" aria-label="Subir" disabled={locked || i === 0} onClick={(e) => move(i, i - 1, e.currentTarget)}>▲</button>
                <button type="button" aria-label="Bajar" disabled={locked || i === order.length - 1} onClick={(e) => move(i, i + 1, e.currentTarget)}>▼</button>
              </span>
              <label className="act-order__position">Mover a posición
                <select aria-label={`Mover ${it.text} a posición`} value={i} disabled={locked} onChange={(e) => move(i, Number(e.target.value), e.currentTarget)}>
                  {order.map((_, position) => <option key={position} value={position}>{position + 1}</option>)}
                </select>
              </label>
            </li>
          );
        })}
      </ol>
      <p className="ds-xs ds-muted" role="status">{announcement}</p>
      {props.labels && <div className="ds-xs ds-muted">⬇ {props.labels.end}</div>}
    </div>
  );
}

export default defineActivity<OrderProps, string[]>({
  type: 'order',
  label: 'Ordenar secuencia',
  icon: 'ListOrdered',
  description: 'Reordenar pasos, etapas o eventos (arrastrar o con flechas). Líneas de tiempo, procesos, método científico.',
  graded: true,
  Component: Order,
  isReady: (_p, v) => !!v,
  check(p, v) {
    const ok = p.items.every((it, i) => v[i] === it.id);
    const right = p.items.filter((it, i) => v[i] === it.id).length;
    return { correct: ok, score: right / p.items.length, feedback: ok ? undefined : `${right} de ${p.items.length} están en su lugar. Las marcadas en rojo deben moverse.` };
  },
  solution: (p) => p.items.map((i) => i.id),
  validate: (p) => (p.items.length < 3 ? ['se recomiendan ≥3 elementos'] : []),
});
