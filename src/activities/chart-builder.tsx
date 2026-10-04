import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as RPointerEvent } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { sfx } from '@/design-system/feedback';
import { fmt } from './util';
import { Glyph } from '@/design-system/icons';

export interface ChartBuilderProps {
  categories: { id: string; label: string; emoji?: string; icon?: string; color?: string }[];
  /** valores objetivo (vienen en la tabla de datos) */
  data: number[];
  max: number;
  step: number;
  unit?: string;
  /** título de la tabla de datos */
  source?: string;
}

function ChartBuilder({ props, value, onChange, status }: ActivityProps<ChartBuilderProps, number[]>) {
  const [active, setActive] = useState(0);
  const vals = value ?? props.categories.map(() => 0);
  const locked = status === 'correct' || status === 'revealed';
  const plotRef = useRef<HTMLDivElement>(null);
  const last = useRef(vals);
  last.current = vals;
  useEffect(() => { if (!value) onChange(vals); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const adjust = (delta: number) => {
    const next = [...vals]; next[active] = Math.min(props.max, Math.max(0, Number((next[active] + delta).toFixed(10))));
    last.current = next; onChange(next);
  };
  const setFromPointer = (i: number, clientY: number) => {
    const r = plotRef.current!.getBoundingClientRect();
    const k = Math.min(1, Math.max(0, (r.bottom - clientY) / r.height));
    const v = Math.round((k * props.max) / props.step) * props.step;
    if (v !== last.current[i]) {
      sfx.tick();
      const n = [...last.current]; n[i] = v; last.current = n; onChange(n);
    }
  };
  const down = (i: number) => (e: RPointerEvent<HTMLDivElement>) => {
    if (locked) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromPointer(i, e.clientY);
  };
  const move = (i: number) => (e: RPointerEvent<HTMLDivElement>) => { if (!locked && e.buttons) setFromPointer(i, e.clientY); };
  const gridLines = Array.from({ length: 5 }, (_, k) => ((k + 1) * props.max) / 5);

  return (
    <div className="ds-stack">
      <div className="act-precision__editor">
        <label>Categoría activa<select value={active} onChange={(e) => setActive(Number(e.target.value))}>{props.categories.map((c, i) => <option key={c.id} value={i}>{c.label}</option>)}</select></label>
        <p>{props.source ?? 'Dato fuente'}: <strong>{fmt(props.data[active])} {props.unit}</strong></p>
        <div className="act-precision__nav">
          <button type="button" className="act-key" aria-label="Disminuir barra" disabled={locked || vals[active] <= 0} onClick={() => adjust(-props.step)}>−</button>
          <output aria-live="polite">Tu barra: {fmt(vals[active])} {props.unit}</output>
          <button type="button" className="act-key" aria-label="Aumentar barra" disabled={locked || vals[active] >= props.max} onClick={() => adjust(props.step)}>+</button>
        </div>
      </div>
      <details><summary>Consultar todos los datos</summary><table className="act-table">
        {props.source && <caption>{props.source}</caption>}
        <tbody>
          {props.categories.map((c, i) => <tr key={c.id}><th><Glyph icon={c.icon} emoji={c.emoji} size={16} /> {c.label}</th><td>{fmt(props.data[i])}{props.unit ? ` ${props.unit}` : ''}</td></tr>)}
        </tbody>
      </table></details>
      <div className="act-chart">
        <div className="act-chart__axis">{[...gridLines].reverse().map((g) => <span key={g}>{fmt(g)}</span>)}<span>0</span></div>
        <div ref={plotRef} className="act-chart__plot">
          {gridLines.map((g) => <i key={g} className="act-chart__grid" style={{ bottom: `${(g / props.max) * 100}%` }} />)}
          {props.categories.map((c, i) => {
            const wrong = status === 'incorrect' && Math.abs(vals[i] - props.data[i]) > props.step / 2;
            return (
              <div key={c.id} className="act-chart__col" onPointerDown={down(i)} onPointerMove={move(i)} role="slider"
                aria-disabled={locked} onFocus={() => setActive(i)} aria-label={c.label} aria-valuemin={0} aria-valuemax={props.max} aria-valuenow={vals[i]} tabIndex={0}
                onKeyDown={(e) => { if (locked) return; const d = e.key === 'ArrowUp' ? props.step : e.key === 'ArrowDown' ? -props.step : 0; if (d) { e.preventDefault(); const n = [...vals]; n[i] = Math.min(props.max, Math.max(0, n[i] + d)); onChange(n); } }}>
                <div className={`act-chart__bar${wrong ? ' is-wrong' : ''}`} style={{ height: `${(vals[i] / props.max) * 100}%`, '--bar': c.color ?? 'var(--area-mat)' } as CSSProperties}>
                  <span>{fmt(vals[i])}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="act-chart__labels">{props.categories.map((c) => <span key={c.id}><Glyph icon={c.icon} emoji={c.emoji} size={16} /><br />{c.label}</span>)}</div>
      <p className="ds-xs ds-muted ds-center">Elige una categoría y ajusta su barra con − y +. También puedes arrastrarla.</p>
    </div>
  );
}

export default defineActivity<ChartBuilderProps, number[]>({
  type: 'chart-builder',
  label: 'Constructor de gráficas',
  icon: 'BarChart3',
  description: 'Construir una gráfica de barras a partir de una tabla de datos (estadística + cualquier área).',
  graded: true,
  Component: ChartBuilder,
  isReady: (_p, v) => !!v && v.some((x) => x > 0),
  check(p, v) {
    const bad = p.data.filter((d, i) => Math.abs(v[i] - d) > p.step / 2).length;
    return { correct: bad === 0, score: (p.data.length - bad) / p.data.length, feedback: bad ? `${bad} ${bad === 1 ? 'barra no coincide' : 'barras no coinciden'} con la tabla.` : undefined };
  },
  solution: (p) => [...p.data],
  validate: (p) => [
    ...(p.data.length !== p.categories.length ? ['data y categories de distinto largo'] : []),
    ...p.data.filter((d) => d % p.step !== 0 || d > p.max).map((d) => `valor ${d} no alcanzable con step/max`),
  ],
});
