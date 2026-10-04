import type { ReactElement } from 'react';
import { feedback } from '@/design-system/feedback';

/** Numeral maya (un nivel): concha = 0, punto = 1, barra = 5. */
export function MayaDigit({ d, size = 72, color = 'var(--c-ink)' }: { d: number; size?: number; color?: string }) {
  const w = size, h = size * 0.9;
  if (d === 0) {
    return (
      <svg width={w} height={h} viewBox="0 0 100 90" role="img" aria-label="cero (concha)">
        <ellipse cx="50" cy="50" rx="40" ry="22" fill="#f6e7c8" stroke="#b8894a" strokeWidth="4" />
        <path d="M18 48 Q50 30 82 48 M22 56 Q50 44 78 56 M30 64 Q50 56 70 64" stroke="#b8894a" strokeWidth="3" fill="none" />
      </svg>
    );
  }
  const bars = Math.floor(d / 5), dots = d % 5;
  const barH = 12, gap = 6, dotR = 7;
  const total = (dots ? dotR * 2 + gap : 0) + bars * (barH + gap) - gap;
  let y = (90 - total) / 2;
  const els: ReactElement[] = [];
  if (dots) {
    const span = (dots - 1) * 18;
    for (let i = 0; i < dots; i++) els.push(<circle key={`d${i}`} cx={50 - span / 2 + i * 18} cy={y + dotR} r={dotR} fill={color} />);
    y += dotR * 2 + gap;
  }
  for (let i = 0; i < bars; i++) { els.push(<rect key={`b${i}`} x="10" y={y} width="80" height={barH} rx="6" fill={color} />); y += barH + gap; }
  return <svg width={w} height={h} viewBox="0 0 100 90" role="img" aria-label={`${d}`}>{els}</svg>;
}

/** Descompone n en dígitos base 20 (índice 0 = unidades). */
export function toVigesimal(n: number): number[] {
  if (n === 0) return [0];
  const out: number[] = [];
  while (n > 0) { out.push(n % 20); n = Math.floor(n / 20); }
  return out;
}

/** Teclado numérico grande (evita el teclado del sistema que tapa la pantalla en teléfonos). */
export function NumberPad({ value, onChange, allowDecimal, allowFraction, allowNegative, disabled, unit }: {
  value: string; onChange: (v: string) => void; allowDecimal?: boolean; allowFraction?: boolean; allowNegative?: boolean; disabled?: boolean; unit?: string;
}) {
  const specials = [allowNegative && '±', allowDecimal && '.', allowFraction && '/'].filter(Boolean) as string[];
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', specials[0] ?? '', '0', '⌫'];
  const extra = specials.slice(1);
  const press = (k: string) => {
    if (disabled || !k) return;
    feedback('tap');
    if (k === '⌫') return onChange(value.slice(0, -1));
    if (k === '±') return onChange(value.startsWith('-') ? value.slice(1) : '-' + value);
    if ((k === '.' && value.includes('.')) || (k === '/' && value.includes('/'))) return;
    if (value.length >= 12) return;
    onChange(value + k);
  };
  return (
    <div className="ds-stack" style={{ gap: 'var(--sp-2)' }}>
      <div className="act-display" aria-live="polite"><span className="act-display__number">{value || <span className="ds-muted">?</span>}</span>{unit && <small> {unit}</small>}</div>
      <div className="ds-kbd">
        {keys.map((k, i) => (
          <button key={i} type="button" className="act-key" disabled={disabled || !k} onClick={() => press(k)} aria-label={k === '⌫' ? 'Borrar' : k}>{k}</button>
        ))}
        {extra.map((k) => <button key={k} type="button" className="act-key" disabled={disabled} onClick={() => press(k)}>{k}</button>)}
      </div>
    </div>
  );
}
