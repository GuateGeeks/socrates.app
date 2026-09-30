import { prefersReducedMotion } from '../motion';

const COLORS = ['#f3c94b', '#d6246e', '#1d9bd7', '#8db32c', '#e8782a', '#7d3c98', '#1c9a6b', '#c0283b'];

/** Lluvia de confeti (colores de las áreas del CNB). DOM + WAAPI, sin canvas. */
export function confetti(count = 70) {
  if (typeof document === 'undefined' || prefersReducedMotion()) return;
  const layer = document.createElement('div');
  layer.className = 'ds-confetti';
  layer.setAttribute('aria-hidden', 'true');
  document.body.appendChild(layer);
  const w = innerWidth, h = innerHeight;
  let alive = count;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('i');
    p.style.left = `${Math.random() * w}px`;
    p.style.background = COLORS[i % COLORS.length];
    if (i % 3 === 0) p.style.borderRadius = '50%';
    layer.appendChild(p);
    const drift = (Math.random() - 0.5) * 240;
    const rot = (Math.random() - 0.5) * 1080;
    const a = p.animate(
      [{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: `translate(${drift}px, ${h + 40}px) rotate(${rot}deg)`, opacity: 0.9 }],
      { duration: 1600 + Math.random() * 1400, delay: Math.random() * 300, easing: 'cubic-bezier(.2,.6,.4,1)', fill: 'forwards' },
    );
    a.onfinish = () => { if (--alive === 0) layer.remove(); };
  }
}
