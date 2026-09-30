/**
 * Motion system — Socrates Aprende
 *
 * Tres capas:
 *  1. TOKENS   duraciones y curvas (espejo de tokens.css) — nunca números mágicos en componentes.
 *  2. PRESETS  movimientos con nombre (pop, shake, rise…) implementados con Web Animations API.
 *  3. SEMÁNTICA  intención pedagógica → preset (feedback.correct, reward.xp, nav.forward…).
 *     Los componentes piden SEMÁNTICA; así se puede re-afinar el "feel" de toda la app en un lugar.
 *
 * Accesibilidad: si el usuario prefiere movimiento reducido (SO o ajuste de la app), todos los
 * presets degradan a un fundido de opacidad breve o a nada (nunca se pierde información).
 */

export const duration = { instant: 90, fast: 160, base: 240, slow: 420, epic: 900 } as const;
export const easing = {
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  enter: 'cubic-bezier(0, 0, 0, 1)',
  exit: 'cubic-bezier(0.3, 0, 1, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  linear: 'linear',
} as const;

export type DurationToken = keyof typeof duration;
export type EasingToken = keyof typeof easing;

let appReduced = false;
export function setReducedMotion(v: boolean) {
  appReduced = v;
  if (typeof document !== 'undefined') document.documentElement.dataset.motion = v ? 'reduced' : 'full';
}
export function prefersReducedMotion(): boolean {
  if (appReduced) return true;
  return typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export interface Preset {
  keyframes: Keyframe[];
  duration: DurationToken;
  easing: EasingToken;
  /** keyframes alternativos si hay movimiento reducido; null = no animar */
  reduced?: Keyframe[] | null;
  iterations?: number;
}

/** Catálogo de presets. Agregar uno = agregar una entrada; aparece solo en la galería /sistema. */
export const presets = {
  fadeIn: { keyframes: [{ opacity: 0 }, { opacity: 1 }], duration: 'base', easing: 'enter' },
  fadeOut: { keyframes: [{ opacity: 1 }, { opacity: 0 }], duration: 'fast', easing: 'exit' },
  rise: {
    keyframes: [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }],
    duration: 'slow', easing: 'enter', reduced: [{ opacity: 0 }, { opacity: 1 }],
  },
  slideInRight: {
    keyframes: [{ opacity: 0, transform: 'translateX(40px)' }, { opacity: 1, transform: 'none' }],
    duration: 'slow', easing: 'enter', reduced: [{ opacity: 0 }, { opacity: 1 }],
  },
  slideInLeft: {
    keyframes: [{ opacity: 0, transform: 'translateX(-40px)' }, { opacity: 1, transform: 'none' }],
    duration: 'slow', easing: 'enter', reduced: [{ opacity: 0 }, { opacity: 1 }],
  },
  sheetUp: {
    keyframes: [{ transform: 'translateY(100%)' }, { transform: 'none' }],
    duration: 'slow', easing: 'enter', reduced: [{ opacity: 0 }, { opacity: 1 }],
  },
  pop: {
    keyframes: [{ transform: 'scale(1)' }, { transform: 'scale(1.14)', offset: 0.4 }, { transform: 'scale(1)' }],
    duration: 'slow', easing: 'spring', reduced: null,
  },
  popIn: {
    keyframes: [{ opacity: 0, transform: 'scale(0.4)' }, { opacity: 1, transform: 'scale(1)' }],
    duration: 'slow', easing: 'spring', reduced: [{ opacity: 0 }, { opacity: 1 }],
  },
  press: {
    keyframes: [{ transform: 'scale(1)' }, { transform: 'scale(0.94)', offset: 0.35 }, { transform: 'scale(1)' }],
    duration: 'fast', easing: 'standard', reduced: null,
  },
  shake: {
    keyframes: [
      { transform: 'translateX(0)' }, { transform: 'translateX(-9px)' }, { transform: 'translateX(8px)' },
      { transform: 'translateX(-6px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' },
    ],
    duration: 'slow', easing: 'standard', reduced: null,
  },
  wiggle: {
    keyframes: [
      { transform: 'rotate(0)' }, { transform: 'rotate(-6deg)' }, { transform: 'rotate(5deg)' },
      { transform: 'rotate(-3deg)' }, { transform: 'rotate(0)' },
    ],
    duration: 'slow', easing: 'standard', reduced: null,
  },
  glowOk: {
    keyframes: [
      { boxShadow: '0 0 0 0 rgb(31 157 85 / 0.55)' },
      { boxShadow: '0 0 0 14px rgb(31 157 85 / 0)' },
    ],
    duration: 'epic', easing: 'enter', reduced: null,
  },
  pulse: {
    keyframes: [{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }],
    duration: 'epic', easing: 'standard', reduced: null, iterations: Infinity,
  },
  float: {
    keyframes: [{ transform: 'translateY(0)' }, { transform: 'translateY(-6px)' }, { transform: 'translateY(0)' }],
    duration: 'epic', easing: 'standard', reduced: null, iterations: Infinity,
  },
  stamp: {
    keyframes: [
      { opacity: 0, transform: 'scale(2.2) rotate(-12deg)' },
      { opacity: 1, transform: 'scale(0.92) rotate(-4deg)', offset: 0.7 },
      { opacity: 1, transform: 'scale(1) rotate(-4deg)' },
    ],
    duration: 'slow', easing: 'enter', reduced: [{ opacity: 0 }, { opacity: 1 }],
  },
} satisfies Record<string, Preset>;

export type PresetName = keyof typeof presets;

/** Intenciones pedagógicas → preset. Cambia el "feel" global aquí. */
export const semantic = {
  'feedback.correct': 'pop',
  'feedback.incorrect': 'shake',
  'feedback.hint': 'wiggle',
  'select': 'press',
  'enter.screen': 'rise',
  'enter.step': 'slideInRight',
  'enter.item': 'popIn',
  'reward.badge': 'stamp',
  'attention': 'pulse',
  'idle.mascot': 'float',
} as const satisfies Record<string, PresetName>;
export type Semantic = keyof typeof semantic;

export interface PlayOptions { delay?: number; duration?: DurationToken; iterations?: number }

/** Reproduce un preset (o intención semántica) en un elemento. Devuelve la Animation o null. */
export function play(el: Element | null | undefined, name: PresetName | Semantic, opts: PlayOptions = {}): Animation | null {
  if (!el || typeof (el as HTMLElement).animate !== 'function') return null;
  const presetName = (name in semantic ? semantic[name as Semantic] : name) as PresetName;
  const p: Preset = presets[presetName];
  const reduced = prefersReducedMotion();
  const frames = reduced ? p.reduced === undefined ? p.keyframes : p.reduced : p.keyframes;
  if (!frames) return null;
  return (el as HTMLElement).animate(frames, {
    duration: reduced ? Math.min(duration.fast, duration[opts.duration ?? p.duration]) : duration[opts.duration ?? p.duration],
    easing: easing[p.easing],
    delay: opts.delay ?? 0,
    iterations: reduced ? 1 : opts.iterations ?? p.iterations ?? 1,
    fill: 'both',
  });
}

/** Escalonado: aplica un preset a una lista con retardo incremental (listas, opciones, badges). */
export function stagger(els: ArrayLike<Element>, name: PresetName | Semantic, step = 45) {
  Array.from(els).forEach((el, i) => play(el, name, { delay: i * step }));
}

/** Técnica FLIP para reordenamientos (listas ordenables, cubetas). */
export function flip(els: HTMLElement[], mutate: () => void) {
  const first = new Map(els.map((e) => [e, e.getBoundingClientRect()]));
  mutate();
  if (prefersReducedMotion()) return;
  requestAnimationFrame(() => {
    for (const el of els) {
      const a = first.get(el); if (!a || !el.isConnected) continue;
      const b = el.getBoundingClientRect();
      const dx = a.left - b.left, dy = a.top - b.top;
      if (dx || dy) el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: duration.base, easing: easing.standard });
    }
  });
}

/** Anima un número de `from` a `to` (contadores de XP). */
export function countUp(from: number, to: number, onFrame: (v: number) => void, ms = duration.epic) {
  if (prefersReducedMotion()) { onFrame(to); return () => {}; }
  let raf = 0; const t0 = performance.now();
  const tick = (t: number) => {
    const k = Math.min(1, (t - t0) / ms);
    const e = 1 - Math.pow(1 - k, 3);
    onFrame(Math.round(from + (to - from) * e));
    if (k < 1) raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}
