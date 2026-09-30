import { useEffect, type CSSProperties } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Rich } from '@/design-system/components';
import { sfx } from '@/design-system/feedback';
import { fmt, near } from './util';

export interface SliderProps {
  min: number;
  max: number;
  step: number;
  answer: number;
  tolerance?: number;
  unit?: string;
  start?: number;
  /** visualización que reacciona en vivo al deslizar */
  visual: 'line' | 'thermometer' | 'fraction' | 'percent';
  /** para visual=fraction: número de partes */
  parts?: number;
  ticks?: { value: number; label: string }[];
  stimulus?: string;
  /** cómo mostrar el valor: número, fracción (n/parts) o porcentaje */
  display?: 'number' | 'fraction' | 'percent';
}

const pctOf = (p: SliderProps, v: number) => (v - p.min) / (p.max - p.min);

function Visual({ p, v }: { p: SliderProps; v: number }) {
  const k = pctOf(p, v);
  switch (p.visual) {
    case 'thermometer': {
      const zero = pctOf(p, 0);
      return (
        <svg viewBox="0 0 320 90" className="act-slider__viz" aria-hidden>
          <rect x="20" y="30" width="280" height="26" rx="13" fill="var(--c-surface-2)" stroke="var(--c-line)" strokeWidth="3" />
          <rect x="24" y="34" width={Math.max(0, 272 * k)} height="18" rx="9" fill={v < 0 ? '#3aa7c9' : v > 30 ? '#d9434a' : '#e8782a'} style={{ transition: 'width var(--dur-fast), fill var(--dur-base)' }} />
          <circle cx="20" cy="43" r="20" fill={v < 0 ? '#3aa7c9' : '#e8782a'} />
          <line x1={24 + 272 * zero} x2={24 + 272 * zero} y1="22" y2="64" stroke="var(--c-ink)" strokeWidth="2" strokeDasharray="4 3" />
          <text x={24 + 272 * zero} y="80" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--c-ink-2)">0°</text>
          <text x="300" y="18" textAnchor="end" fontSize="22">{v < 0 ? '🥶' : v > 30 ? '🥵' : '🙂'}</text>
        </svg>
      );
    }
    case 'fraction': {
      const n = p.parts ?? 8; const filled = Math.round(k * n);
      return (
        <div className="act-fracbar" aria-hidden>
          {Array.from({ length: n }, (_, i) => <i key={i} className={i < filled ? 'on' : ''} style={{ transitionDelay: `${i * 12}ms` }} />)}
        </div>
      );
    }
    case 'percent': {
      const r = 60, c = 2 * Math.PI * r;
      return (
        <svg viewBox="0 0 160 160" className="act-slider__pie" aria-hidden>
          <circle cx="80" cy="80" r={r} fill="var(--c-surface-2)" />
          <circle cx="80" cy="80" r={r / 2} fill="none" stroke="var(--area-mat)" strokeWidth={r} strokeDasharray={`${(c / 2) * k} ${c}`} transform="rotate(-90 80 80)" style={{ transition: 'stroke-dasharray var(--dur-fast)' }} />
          <text x="80" y="86" textAnchor="middle" fontSize="22" fontWeight="900" fill="var(--c-ink)">{Math.round(k * 100)}%</text>
        </svg>
      );
    }
    default:
      return (
        <svg viewBox="0 0 320 70" className="act-slider__viz" aria-hidden>
          <line x1="16" x2="304" y1="40" y2="40" stroke="var(--c-ink-2)" strokeWidth="3" strokeLinecap="round" />
          {(p.ticks ?? []).map((t) => { const x = 16 + 288 * pctOf(p, t.value); return <g key={t.value}><line x1={x} x2={x} y1="32" y2="48" stroke="var(--c-ink-2)" strokeWidth="2" /><text x={x} y="66" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--c-ink-2)">{t.label}</text></g>; })}
          <g style={{ transform: `translateX(${288 * k}px)`, transition: 'transform var(--dur-fast) var(--ease-standard)' }}>
            <path d="M16 30 l-9 -16 h18z" fill="var(--c-jade)" />
          </g>
        </svg>
      );
  }
}

function Slider({ props, value, onChange, status }: ActivityProps<SliderProps, number>) {
  const v = value ?? props.start ?? props.min;
  useEffect(() => { if (value === undefined) onChange(v); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const locked = status === 'correct' || status === 'revealed';
  const label = props.display === 'fraction' ? `${Math.round(pctOf(props, v) * (props.parts ?? 8))}/${props.parts ?? 8}`
    : props.display === 'percent' ? `${Math.round(pctOf(props, v) * 100)}%` : `${fmt(v)}${props.unit ? ` ${props.unit}` : ''}`;
  return (
    <div className="ds-stack">
      {props.stimulus && <div className="act-stimulus"><Rich text={props.stimulus} /></div>}
      <div className="act-slider__value" aria-live="polite">{label}</div>
      <Visual p={props} v={v} />
      <input type="range" className="act-range" min={props.min} max={props.max} step={props.step} value={v} disabled={locked}
        style={{ '--k': pctOf(props, v) } as CSSProperties}
        onChange={(e) => { const n = Number(e.target.value); if (n !== v) sfx.tick(); onChange(n); }} aria-label="Valor" />
      <div className="ds-row ds-xs ds-muted" style={{ justifyContent: 'space-between' }}><span>{fmt(props.min)}</span><span>{fmt(props.max)}</span></div>
    </div>
  );
}

export default defineActivity<SliderProps, number>({
  type: 'slider',
  label: 'Deslizador visual',
  icon: 'SlidersHorizontal',
  description: 'Estimar/ubicar valores con retroalimentación visual en vivo: recta numérica, termómetro, barra de fracción, gráfica circular.',
  graded: true,
  Component: Slider,
  isReady: (_p, v) => v !== undefined,
  check(p, v) {
    const ok = near(v, p.answer, p.tolerance ?? p.step / 2);
    return { correct: ok, score: ok ? 1 : Math.max(0, 1 - Math.abs(v - p.answer) / (p.max - p.min)), feedback: ok ? undefined : v > p.answer ? 'Te pasaste un poco, desliza hacia la izquierda.' : 'Te falta, desliza hacia la derecha.' };
  },
  solution: (p) => p.answer,
  validate: (p) => (p.answer < p.min || p.answer > p.max ? ['respuesta fuera de rango'] : []),
});
