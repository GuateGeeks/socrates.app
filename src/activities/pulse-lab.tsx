import { useEffect, useRef, useState } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Button, Ring } from '@/design-system/components';
import { feedback } from '@/design-system/feedback';
import { play } from '@/design-system/motion';
import { Glyph } from '@/design-system/icons';

export interface PulseLabProps {
  seconds: number;
  rounds: { label: string; exercise?: { name: string; emoji?: string; icon?: string; seconds: number } }[];
}
type PulseValue = (number | null)[];

function useCountdown(onEnd: () => void) {
  const [left, setLeft] = useState<number | null>(null);
  const end = useRef(onEnd); end.current = onEnd;
  useEffect(() => {
    if (left === null) return;
    if (left <= 0) { end.current(); setLeft(null); return; }
    const t = setTimeout(() => { setLeft((l) => (l === null ? null : l - 1)); if (left <= 4) feedback('tap'); }, 1000);
    return () => clearTimeout(t);
  }, [left]);
  return { left, start: (s: number) => setLeft(s), stop: () => setLeft(null) };
}

function PulseLab({ props, value, onChange, api }: ActivityProps<PulseLabProps, PulseValue>) {
  const vals: PulseValue = value ?? props.rounds.map(() => null);
  const round = vals.findIndex((v) => v === null);
  const r = round === -1 ? null : props.rounds[round];
  const [phase, setPhase] = useState<'ready' | 'exercise' | 'count' | 'enter'>('ready');
  const [taps, setTaps] = useState(0);
  const [exercised, setExercised] = useState(-1);
  const heart = useRef<HTMLButtonElement>(null);
  const mult = 60 / props.seconds;

  const ex = useCountdown(() => { feedback('correct'); setPhase('ready'); });
  const cnt = useCountdown(() => { feedback('complete'); setPhase('enter'); });
  useEffect(() => { api.setReady(vals.every((v) => v !== null)); }, [vals.join(',')]); // eslint-disable-line react-hooks/exhaustive-deps

  const save = (n: number) => { const next = [...vals]; next[round] = n * mult; onChange(next); setTaps(0); setPhase('ready'); };

  if (!r) {
    const max = Math.max(...(vals as number[]), 1);
    return (
      <div className="ds-stack">
        <div className="act-pulse__result">
          {props.rounds.map((rr, i) => (
            <div key={i} className="act-pulse__bar">
              <div className="act-pulse__fill" style={{ height: `${((vals[i] ?? 0) / max) * 100}%` }}><span>{vals[i]}</span></div>
              <small>{rr.label}</small>
            </div>
          ))}
        </div>
        <p className="ds-center"><strong>Latidos por minuto (lpm)</strong> = latidos en {props.seconds} s × {mult}</p>
        <Button variant="secondary" size="sm" onClick={() => onChange(props.rounds.map(() => null))}>Medir otra vez</Button>
      </div>
    );
  }

  return (
    <div className="ds-stack act-pulse">
      <div className="ds-row" style={{ justifyContent: 'center', gap: 6 }}>
        {props.rounds.map((_, i) => <span key={i} className={`act-dot${i < round ? ' done' : i === round ? ' now' : ''}`} />)}
      </div>
      <h3 className="ds-center">{r.label}</h3>

      {phase === 'ready' && (
        <div className="ds-stack">
          {r.exercise && exercised !== round && (
            <Button variant="maiz" block onClick={() => { setExercised(round); setPhase('exercise'); ex.start(r.exercise!.seconds); }}>
              <Glyph icon={r.exercise.icon ?? 'Activity'} emoji={r.exercise.icon ? undefined : r.exercise.emoji} size={20} /> Primero: {r.exercise.name} ({r.exercise.seconds} s)
            </Button>
          )}
          {r.exercise && exercised === round && <p className="ds-center"><strong>¡Bien hecho! 💪 Ahora mide rápido tu pulso.</strong></p>}
          <p className="ds-center ds-muted">Pon dos dedos en tu muñeca o en tu cuello. Cuando estés listo, toca iniciar y <strong>toca el corazón con cada latido</strong>.</p>
          <Button block size="lg" onClick={() => { setTaps(0); setPhase('count'); cnt.start(props.seconds); }}>▶ Iniciar {props.seconds} segundos</Button>
        </div>
      )}

      {phase === 'exercise' && (
        <div className="ds-stack ds-center" style={{ alignItems: 'center' }}>
          <div className="act-hero act-bounce" aria-hidden><Glyph icon={r.exercise!.icon ?? 'PersonStanding'} emoji={r.exercise!.icon ? undefined : r.exercise!.emoji} size={64} /></div>
          <Ring value={(ex.left ?? 0) / r.exercise!.seconds} size={120} stroke={12} color="var(--area-ef)"><span style={{ fontSize: '2rem' }}>{ex.left}</span></Ring>
          <p><strong>{r.exercise!.name}</strong> — ¡tú puedes! Si te sientes mal, detente.</p>
          <Button variant="ghost" size="sm" onClick={() => { ex.stop(); setPhase('ready'); }}>Ya terminé</Button>
        </div>
      )}

      {phase === 'count' && (
        <div className="ds-stack act-pulse__count" style={{ alignItems: 'center' }}>
          <Ring value={(cnt.left ?? 0) / props.seconds} size={96} stroke={10} color="var(--c-bad)"><span style={{ fontSize: '1.6rem' }}>{cnt.left}</span></Ring>
          <button ref={heart} type="button" className="act-heart" onClick={() => { setTaps((t) => t + 1); feedback('tap'); play(heart.current, 'pop'); }} aria-label="Latido">❤️</button>
          <strong style={{ fontSize: 'var(--fs-2xl)' }}>{taps}</strong>
        </div>
      )}

      {phase === 'enter' && (
        <div className="ds-stack" style={{ alignItems: 'center' }}>
          <p className="ds-center">Contaste <strong>{taps}</strong> latidos. Ajusta si te equivocaste:</p>
          <div className="ds-row">
            <button type="button" className="act-key" aria-label="Disminuir latidos" onClick={() => setTaps((t) => Math.max(0, t - 1))}>−</button>
            <strong style={{ fontSize: 'var(--fs-2xl)', minWidth: 60, textAlign: 'center' }}>{taps}</strong>
            <button type="button" className="act-key" aria-label="Aumentar latidos" onClick={() => setTaps((t) => t + 1)}>+</button>
          </div>
          <p className="ds-small ds-muted">{taps} × {mult} = <strong>{taps * mult} lpm</strong></p>
          <Button block onClick={() => save(taps)} disabled={taps === 0}>Guardar medición</Button>
        </div>
      )}
    </div>
  );
}

export default defineActivity<PulseLabProps, PulseValue>({
  type: 'pulse-lab',
  label: 'Laboratorio de pulso',
  icon: 'HeartPulse',
  description: 'Reto de movimiento + medición del pulso antes/después (Ed. Física + Ciencias + Matemáticas). Datos reales del niño.',
  graded: false,
  Component: PulseLab,
});
