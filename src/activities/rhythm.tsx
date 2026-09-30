import { useRef, useState, type CSSProperties } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { feedback, marimba, MARIMBA_NOTES } from '@/design-system/feedback';
import { play } from '@/design-system/motion';

export type Figura = 'redonda' | 'blanca' | 'negra' | 'corchea';
/** duración en tiempos (negra = 1) y como fracción de la redonda */
export const FIGURAS: Record<Figura, { beats: number; frac: string; nombre: string }> = {
  redonda: { beats: 4, frac: '1', nombre: 'Redonda' },
  blanca: { beats: 2, frac: '1/2', nombre: 'Blanca' },
  negra: { beats: 1, frac: '1/4', nombre: 'Negra' },
  corchea: { beats: 0.5, frac: '1/8', nombre: 'Corchea' },
};

export interface RhythmProps {
  beats: number;
  allowed: Figura[];
  /** figuras que deben aparecer al menos una vez */
  mustInclude?: Figura[];
  showFractions?: boolean;
  tempo?: number;
}
interface Nota { f: Figura; note: number }
type RhythmValue = Nota[];

export function NoteGlyph({ f, size = 44 }: { f: Figura; size?: number }) {
  const filled = f === 'negra' || f === 'corchea';
  return (
    <svg width={size * 0.8} height={size} viewBox="0 0 40 50" aria-label={FIGURAS[f].nombre} role="img">
      <ellipse cx="15" cy="40" rx="9" ry="6.5" transform="rotate(-20 15 40)" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="3" />
      {f !== 'redonda' && <line x1="23" y1="38" x2="23" y2="6" stroke="currentColor" strokeWidth="3" />}
      {f === 'corchea' && <path d="M23 6 Q34 14 32 26 Q30 18 23 16" fill="currentColor" />}
    </svg>
  );
}

function Rhythm({ props, value = [], onChange, status }: ActivityProps<RhythmProps, RhythmValue>) {
  const locked = status === 'correct' || status === 'revealed';
  const used = value.reduce((s, n) => s + FIGURAS[n.f].beats, 0);
  const [playing, setPlaying] = useState(-1);
  const barRef = useRef<HTMLDivElement>(null);
  const add = (f: Figura) => {
    if (locked) return;
    if (used + FIGURAS[f].beats > props.beats) { feedback('incorrect'); play(barRef.current, 'feedback.incorrect'); return; }
    const note = value.length % MARIMBA_NOTES.length;
    marimba(MARIMBA_NOTES[note].freq);
    onChange([...value, { f, note }]);
  };
  const cycle = (i: number) => {
    if (locked) return;
    const n = [...value]; n[i] = { ...n[i], note: (n[i].note + 1) % MARIMBA_NOTES.length };
    marimba(MARIMBA_NOTES[n[i].note].freq); onChange(n);
  };
  const playAll = () => {
    const spb = 60 / (props.tempo ?? 96);
    let t = 0;
    value.forEach((n, i) => {
      const at = t;
      marimba(MARIMBA_NOTES[n.note].freq, at);
      setTimeout(() => setPlaying(i), at * 1000);
      t += FIGURAS[n.f].beats * spb;
    });
    setTimeout(() => setPlaying(-1), t * 1000 + 100);
  };
  return (
    <div className="ds-stack">
      <div ref={barRef} className="act-measure" aria-label={`Compás de ${props.beats} tiempos`}>
        <div className="act-measure__fill" style={{ width: `${(used / props.beats) * 100}%` }} />
        <div className="act-measure__notes">
          {value.map((n, i) => (
            <button key={i} type="button" className={`act-measure__note${playing === i ? ' is-playing' : ''}`} onClick={() => cycle(i)}
              style={{ flexGrow: FIGURAS[n.f].beats, '--hue': `${n.note * 40}` } as CSSProperties} aria-label={`${FIGURAS[n.f].nombre} ${MARIMBA_NOTES[n.note].name}`}>
              <NoteGlyph f={n.f} size={36} /><small>{MARIMBA_NOTES[n.note].name}</small>
            </button>
          ))}
        </div>
      </div>
      <div className="ds-row ds-small" style={{ justifyContent: 'space-between' }}>
        <span><strong>{used}</strong> de {props.beats} tiempos{props.showFractions && <> · <strong>{fracStr(used / 4)}</strong> de redonda</>}</span>
        <span className="ds-row" style={{ gap: 6 }}>
          <button type="button" className="ds-btn ds-btn--sm ds-btn--secondary" onClick={playAll} disabled={!value.length}>▶ Tocar</button>
          <button type="button" className="ds-btn ds-btn--sm ds-btn--ghost" onClick={() => onChange(value.slice(0, -1))} disabled={!value.length || locked} aria-label="Quitar última">⌫</button>
        </span>
      </div>
      <div className="act-figs">
        {props.allowed.map((f) => (
          <button key={f} type="button" className="act-fig" onClick={() => add(f)} disabled={locked}>
            <NoteGlyph f={f} />
            <strong>{FIGURAS[f].nombre}</strong>
            <span className="ds-xs">{FIGURAS[f].beats} {FIGURAS[f].beats === 1 ? 'tiempo' : 'tiempos'}{props.showFractions && ` · ${FIGURAS[f].frac}`}</span>
          </button>
        ))}
      </div>
      <p className="ds-xs ds-muted ds-center">Toca una nota del compás para cambiar su tono en la marimba.</p>
    </div>
  );
}

function fracStr(x: number) {
  for (const d of [1, 2, 4, 8]) { const n = x * d; if (Number.isInteger(n)) return d === 1 ? `${n}` : `${n}/${d}`; }
  return x.toFixed(2);
}

export default defineActivity<RhythmProps, RhythmValue>({
  type: 'rhythm',
  label: 'Compás de marimba',
  icon: 'Music',
  description: 'Componer un compás con figuras musicales (fracciones de la redonda) y tocarlo en una marimba sintetizada.',
  graded: true,
  Component: Rhythm,
  isReady: (_p, v) => !!v && v.length > 0,
  check(p, v) {
    const sum = v.reduce((s, n) => s + FIGURAS[n.f].beats, 0);
    const missing = (p.mustInclude ?? []).filter((f) => !v.some((n) => n.f === f));
    const ok = sum === p.beats && missing.length === 0;
    return { correct: ok, feedback: ok ? undefined : sum !== p.beats ? `Tu compás tiene ${sum} tiempos; debe tener exactamente ${p.beats}.` : `Usa al menos una ${missing.map((m) => FIGURAS[m].nombre.toLowerCase()).join(' y una ')}.` };
  },
  solution(p) {
    const out: Nota[] = []; let left = p.beats;
    for (const f of p.mustInclude ?? []) { out.push({ f, note: out.length }); left -= FIGURAS[f].beats; }
    while (left >= 1) { out.push({ f: 'negra', note: out.length % 8 }); left -= 1; }
    if (left === 0.5) out.push({ f: 'corchea', note: out.length % 8 });
    return out;
  },
});
