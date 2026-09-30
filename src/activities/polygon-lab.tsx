import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { feedback } from '@/design-system/feedback';
import { NumberPad } from './shared';

export interface PolygonLabProps {
  /** polígono sobre el que se pregunta la suma de ángulos interiores */
  sides: number;
  /** mostrar la fórmula/andamiaje junto al dibujo */
  scaffold?: boolean;
  ask: 'sum' | 'triangles' | 'interior-regular';
}
interface LabValue { n: number; answer: string }

const NAMES: Record<number, string> = { 3: 'triángulo', 4: 'cuadrilátero', 5: 'pentágono', 6: 'hexágono', 7: 'heptágono', 8: 'octágono', 9: 'eneágono', 10: 'decágono' };
const TRI_COLORS = ['#f3c94b', '#1d9bd7', '#d6246e', '#8db32c', '#e8782a', '#7d3c98', '#1c9a6b', '#c0283b'];
const expected = (p: PolygonLabProps) => p.ask === 'triangles' ? p.sides - 2 : p.ask === 'sum' ? (p.sides - 2) * 180 : ((p.sides - 2) * 180) / p.sides;

function Lab({ props, value, onChange, status }: ActivityProps<PolygonLabProps, LabValue>) {
  const v: LabValue = value ?? { n: 3, answer: '' };
  const locked = status === 'correct' || status === 'revealed';
  const n = v.n;
  const R = 110, cx = 140, cy = 130;
  const pts = Array.from({ length: n }, (_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    return [cx + R * Math.cos(a), cy + R * Math.sin(a)] as const;
  });
  const tris = Array.from({ length: n - 2 }, (_, i) => [pts[0], pts[i + 1], pts[i + 2]]);
  return (
    <div className="ds-stack">
      <svg viewBox="0 0 280 260" className="act-poly" role="img" aria-label={`${NAMES[n]} dividido en ${n - 2} triángulos`}>
        {tris.map((t, i) => (
          <polygon key={`${n}-${i}`} points={t.map((p) => p.join(',')).join(' ')} fill={TRI_COLORS[i % TRI_COLORS.length]} opacity="0.85"
            stroke="var(--c-surface)" strokeWidth="3" className="act-poly__tri" style={{ animationDelay: `${i * 90}ms` }} />
        ))}
        <polygon points={pts.map((p) => p.join(',')).join(' ')} fill="none" stroke="var(--c-ink)" strokeWidth="4" strokeLinejoin="round" />
        {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={i === 0 ? 8 : 5} fill={i === 0 ? 'var(--c-bad)' : 'var(--c-ink)'} />)}
      </svg>
      <div className="act-poly__controls">
        <button type="button" className="act-key" disabled={n <= 3 || locked} onClick={() => { feedback('tap'); onChange({ ...v, n: n - 1 }); }} aria-label="Menos lados">−</button>
        <div className="ds-center ds-grow">
          <strong style={{ fontSize: 'var(--fs-lg)' }}>{n} lados · {NAMES[n]}</strong>
          <div className="ds-small ds-muted">{props.scaffold ? `${n - 2} ${n === 3 ? 'triángulo' : 'triángulos'} × 180° = ${(n - 2) * 180}°` : `${n - 2} ${n === 3 ? 'triángulo' : 'triángulos'} desde el vértice rojo`}</div>
        </div>
        <button type="button" className="act-key" disabled={n >= 10 || locked} onClick={() => { feedback('tap'); onChange({ ...v, n: n + 1 }); }} aria-label="Más lados">+</button>
      </div>
      <div className="act-stimulus ds-small">
        {props.ask === 'triangles' && <>¿En cuántos triángulos se divide un <strong>{NAMES[props.sides]}</strong> desde un vértice?</>}
        {props.ask === 'sum' && <>¿Cuánto suman los ángulos interiores de un <strong>{NAMES[props.sides]}</strong>?</>}
        {props.ask === 'interior-regular' && <>¿Cuánto mide <strong>cada</strong> ángulo de un {NAMES[props.sides]} <strong>regular</strong>?</>}
      </div>
      <NumberPad value={v.answer} onChange={(a) => onChange({ ...v, answer: a })} unit={props.ask === 'triangles' ? '' : '°'} disabled={locked} />
    </div>
  );
}

export default defineActivity<PolygonLabProps, LabValue>({
  type: 'polygon-lab',
  label: 'Laboratorio de polígonos',
  icon: 'Hexagon',
  description: 'Explora polígonos de 3 a 10 lados, triangulación animada y suma de ángulos interiores.',
  graded: true,
  Component: Lab,
  isReady: (_p, v) => !!v && v.answer.length > 0,
  check(p, v) {
    const ok = Number(v.answer) === expected(p);
    const naive = p.sides * 180;
    return { correct: ok, feedback: ok ? undefined : Number(v.answer) === naive ? `¡Ojo! No son ${p.sides} triángulos: desde un vértice salen ${p.sides - 2}.` : 'Explora con + y − : cuenta los triángulos y multiplica por 180°.' };
  },
  solution: (p) => ({ n: p.sides, answer: String(expected(p)) }),
  validate: (p) => (p.sides < 3 || p.sides > 10 ? ['sides debe estar entre 3 y 10'] : []),
});
