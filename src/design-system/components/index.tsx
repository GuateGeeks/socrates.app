import { forwardRef, useEffect, useLayoutEffect, useRef, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from 'react';
import { play, type PresetName, type Semantic } from '../motion';
import { feedback } from '../feedback';
import { Glyph } from '../icons';

/* ---------------- Hooks de movimiento ---------------- */

/** Anima al montar (y cuando cambia `key`). */
export function useEnter<T extends HTMLElement>(name: PresetName | Semantic = 'enter.screen', key?: unknown, delay = 0) {
  const ref = useRef<T>(null);
  useLayoutEffect(() => { play(ref.current, name, { delay }); }, [key]); // eslint-disable-line react-hooks/exhaustive-deps
  return ref;
}

/** Dispara un preset cuando `trigger` cambia a un valor "truthy". */
export function useMotionOn<T extends HTMLElement>(trigger: unknown, name: PresetName | Semantic) {
  const ref = useRef<T>(null);
  useEffect(() => { if (trigger) play(ref.current, name); }, [trigger]); // eslint-disable-line react-hooks/exhaustive-deps
  return ref;
}

/* ---------------- Button ---------------- */

type BtnVariant = 'primary' | 'secondary' | 'ghost' | 'ok' | 'bad' | 'maiz';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant; size?: 'sm' | 'md' | 'lg'; block?: boolean; icon?: boolean; sound?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', block, icon, sound = true, className = '', onClick, ...rest }, ref,
) {
  const cls = ['ds-btn', variant !== 'primary' && `ds-btn--${variant}`, size !== 'md' && `ds-btn--${size}`, block && 'ds-btn--block', icon && 'ds-btn--icon', className].filter(Boolean).join(' ');
  return <button ref={ref} className={cls} onClick={(e) => { if (sound) feedback('tap'); onClick?.(e); }} {...rest} />;
});

/* ---------------- Card / Chip / Progress ---------------- */

export function Card({ children, raised, onClick, style, className = '' }: { children: ReactNode; raised?: boolean; onClick?: () => void; style?: CSSProperties; className?: string }) {
  const cls = ['ds-card', raised && 'ds-card--raised', onClick && 'ds-card--tap', className].filter(Boolean).join(' ');
  return onClick
    ? <div role="button" tabIndex={0} className={cls} style={style} onClick={onClick} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}>{children}</div>
    : <div className={cls} style={style}>{children}</div>;
}

export function Chip({ color, children, solid, title }: { color?: string; children: ReactNode; solid?: boolean; title?: string }) {
  return <span className={`ds-chip${solid ? ' ds-chip--solid' : ''}`} style={color ? ({ '--chip': color } as CSSProperties) : undefined} title={title}>{children}</span>;
}

export function ProgressBar({ value, color, label }: { value: number; color?: string; label?: string }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div className="ds-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pct)} aria-label={label}>
      <i style={{ width: `${pct}%`, ...(color ? { '--bar': color } : {}) } as CSSProperties} />
    </div>
  );
}

/** Anillo de progreso SVG. */
export function Ring({ value, size = 56, stroke = 7, color = 'var(--c-ok)', children }: { value: number; size?: number; stroke?: number; color?: string; children?: ReactNode }) {
  const r = (size - stroke) / 2; const c = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: size, height: size, flex: 'none' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }} aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--c-surface-2)" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - Math.max(0, Math.min(1, value)))} style={{ transition: 'stroke-dashoffset var(--dur-epic) var(--ease-standard)' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontWeight: 900 }}>{children}</div>
    </div>
  );
}

/* ---------------- Texto enriquecido mínimo ---------------- */
/** **negrita**, _itálica_, saltos de línea. Seguro: no interpreta HTML. */
export function Rich({ text, className }: { text: string; className?: string }) {
  const lines = text.split('\n');
  return (
    <span className={className}>
      {lines.map((line, li) => (
        <span key={li}>
          {line.split(/(\*\*[^*]+\*\*|_[^_]+_)/g).map((seg, i) =>
            seg.startsWith('**') ? <strong key={i}>{seg.slice(2, -2)}</strong>
              : seg.startsWith('_') && seg.endsWith('_') && seg.length > 2 ? <em key={i}>{seg.slice(1, -1)}</em>
                : seg)}
          {li < lines.length - 1 && <br />}
        </span>
      ))}
    </span>
  );
}

/* ---------------- Tile de selección ---------------- */
export function Tile({ selected, state, emoji, icon, children, onClick, disabled, style }: {
  selected?: boolean; state?: 'correct' | 'incorrect'; emoji?: string; icon?: string; children: ReactNode; onClick?: () => void; disabled?: boolean; style?: CSSProperties;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (state === 'incorrect') play(ref.current, 'feedback.incorrect'); if (state === 'correct') play(ref.current, 'feedback.correct'); }, [state]);
  return (
    <button ref={ref} type="button" aria-pressed={!!selected} disabled={disabled} style={style}
      className={`ds-tile${selected ? ' is-selected' : ''}${state ? ` is-${state}` : ''}`}
      onClick={() => { feedback('select'); play(ref.current, 'select'); onClick?.(); }}>
      {(icon || emoji) && <span className="ds-tile__emoji" aria-hidden><Glyph icon={icon} emoji={emoji} size={26} /></span>}
      <span className="ds-grow">{children}</span>
    </button>
  );
}

/* ---------------- Toggle ---------------- */
export function Toggle({ label, checked, onChange, desc }: { label: string; desc?: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="ds-toggle">
      <span><strong>{label}</strong>{desc && <><br /><span className="ds-muted ds-small">{desc}</span></>}</span>
      <input type="checkbox" className="ds-switch" checked={checked} onChange={(e) => onChange(e.target.checked)} />
    </label>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) { return <h3 className="ds-section-title">{children}</h3>; }
