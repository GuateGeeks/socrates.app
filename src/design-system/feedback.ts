/**
 * Retroalimentación multisensorial: sonido (Web Audio sintetizado — cero archivos, funciona offline)
 * y háptica (Vibration API). Igual que el motion system, los componentes piden INTENCIONES.
 */

let ctx: AudioContext | null = null;
let soundOn = true;
let hapticsOn = true;

export function configureFeedback(opts: { sound?: boolean; haptics?: boolean }) {
  if (opts.sound !== undefined) soundOn = opts.sound;
  if (opts.haptics !== undefined) hapticsOn = opts.haptics;
}

function audio(): AudioContext | null {
  if (!soundOn || typeof window === 'undefined') return null;
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  ctx ??= new AC();
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

interface ToneOpts { freq: number; at?: number; dur?: number; type?: OscillatorType; gain?: number; attack?: number }
function tone({ freq, at = 0, dur = 0.18, type = 'sine', gain = 0.18, attack = 0.005 }: ToneOpts) {
  const a = audio(); if (!a) return;
  const t = a.currentTime + at;
  const o = a.createOscillator(); const g = a.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination);
  o.start(t); o.stop(t + dur + 0.02);
}

/** Tecla de marimba: fundamental + parcial 4× (característico de láminas de madera) con caída rápida. */
export function marimba(freq: number, at = 0) {
  tone({ freq, at, dur: 0.55, type: 'sine', gain: 0.28, attack: 0.003 });
  tone({ freq: freq * 4, at, dur: 0.12, type: 'sine', gain: 0.07, attack: 0.002 });
  tone({ freq: freq * 10, at, dur: 0.04, type: 'triangle', gain: 0.02, attack: 0.001 });
}

/** Escala de marimba (Do mayor, octava 4-5) usada por actividades musicales. */
export const MARIMBA_NOTES: { name: string; freq: number }[] = [
  { name: 'Do', freq: 261.63 }, { name: 'Re', freq: 293.66 }, { name: 'Mi', freq: 329.63 },
  { name: 'Fa', freq: 349.23 }, { name: 'Sol', freq: 392.0 }, { name: 'La', freq: 440.0 },
  { name: 'Si', freq: 493.88 }, { name: 'Do²', freq: 523.25 },
];

export const sfx = {
  tap: () => tone({ freq: 660, dur: 0.05, type: 'triangle', gain: 0.06 }),
  select: () => tone({ freq: 880, dur: 0.07, type: 'triangle', gain: 0.08 }),
  drop: () => { tone({ freq: 520, dur: 0.06, type: 'triangle', gain: 0.08 }); tone({ freq: 780, at: 0.05, dur: 0.07, type: 'triangle', gain: 0.07 }); },
  correct: () => { marimba(523.25); marimba(659.25, 0.09); marimba(783.99, 0.18); },
  incorrect: () => { tone({ freq: 220, dur: 0.22, type: 'sine', gain: 0.14 }); tone({ freq: 196, at: 0.12, dur: 0.26, type: 'sine', gain: 0.12 }); },
  hint: () => { tone({ freq: 740, dur: 0.1, gain: 0.07 }); tone({ freq: 988, at: 0.08, dur: 0.12, gain: 0.06 }); },
  complete: () => [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5].forEach((f, i) => marimba(f, i * 0.11)),
  badge: () => [392, 523.25, 659.25, 783.99, 1046.5].forEach((f, i) => marimba(f, i * 0.07)),
  tick: () => tone({ freq: 1200, dur: 0.03, type: 'square', gain: 0.03 }),
} as const;
export type Sfx = keyof typeof sfx;

const patterns = {
  tap: [6],
  select: [10],
  correct: [12, 50, 18],
  incorrect: [40, 60, 40],
  complete: [20, 40, 20, 40, 60],
} as const;
export function haptic(kind: keyof typeof patterns) {
  if (!hapticsOn || typeof navigator === 'undefined' || !('vibrate' in navigator)) return;
  try { navigator.vibrate(patterns[kind] as unknown as number[]); } catch { /* sin soporte */ }
}

/** Intención → sonido + háptica juntos (uso recomendado desde componentes). */
export function feedback(kind: 'tap' | 'select' | 'correct' | 'incorrect' | 'complete' | 'hint' | 'drop' | 'badge') {
  sfx[kind]();
  if (kind === 'tap' || kind === 'select' || kind === 'correct' || kind === 'incorrect' || kind === 'complete') haptic(kind);
  if (kind === 'drop') haptic('select');
}
