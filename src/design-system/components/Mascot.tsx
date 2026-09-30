import { useEffect, useRef } from 'react';
import { play } from '../motion';

export type MascotMood = 'happy' | 'think' | 'cheer' | 'oops' | 'wave';

/**
 * "Tzunún" — mascota original (un colibrí-quetzal estilizado; tz'unun = colibrí en varios idiomas mayas).
 * Dibujada en SVG, sin assets externos. Estados de ánimo = parte del sistema de retroalimentación.
 */
export function Mascot({ mood = 'happy', size = 88, idle = true }: { mood?: MascotMood; size?: number; idle?: boolean }) {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    if (mood === 'cheer') play(ref.current as unknown as Element, 'pop');
    if (mood === 'oops') play(ref.current as unknown as Element, 'wiggle');
  }, [mood]);
  useEffect(() => {
    if (!idle || !ref.current) return;
    const a = play(ref.current as unknown as Element, 'idle.mascot');
    return () => a?.cancel();
  }, [idle]);
  const eye = mood === 'cheer' ? 'M-4 1 Q0 -4 4 1' : mood === 'oops' ? 'M-3 -3 L3 3 M3 -3 L-3 3' : null;
  return (
    <svg ref={ref} width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Tzunún, tu guía">
      {/* cola */}
      <path d="M28 70 Q10 92 4 98 Q20 90 36 76 Z" fill="#1c9a6b" />
      <path d="M32 72 Q22 96 18 100 Q32 90 40 78 Z" fill="#157a55" />
      {/* cuerpo */}
      <ellipse cx="52" cy="58" rx="28" ry="26" fill="#22b07d" />
      <path d="M36 66 Q52 88 70 66 Q66 80 52 82 Q40 80 36 66Z" fill="#d6363f" />
      {/* ala */}
      <path d={mood === 'cheer' || mood === 'wave' ? 'M40 52 Q18 28 30 22 Q44 36 52 52Z' : 'M38 56 Q22 62 26 74 Q40 70 50 60Z'} fill="#178a61" />
      {/* cabeza */}
      <circle cx="62" cy="36" r="20" fill="#22b07d" />
      <path d="M52 18 Q58 6 66 16 Q60 14 56 22Z" fill="#157a55" />
      {/* pico */}
      <path d="M80 36 L97 33 L80 41Z" fill="#f3c94b" />
      {/* ojo */}
      <g transform="translate(68 33)">
        <circle r="6.5" fill="#fff" />
        {eye ? <path d={eye} stroke="#1d2433" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          : <><circle r="3.6" cx={mood === 'think' ? -1.5 : 0.8} cy={mood === 'think' ? -1.8 : 0.4} fill="#1d2433" /><circle r="1.2" cx="1.8" cy="-1.2" fill="#fff" /></>}
      </g>
      {/* mejilla */}
      <circle cx="60" cy="44" r="3.4" fill="#ff8fa3" opacity="0.7" />
      {mood === 'think' && <text x="84" y="16" fontSize="16" fontWeight="900" fill="var(--c-hint)">?</text>}
      {mood === 'cheer' && <text x="80" y="14" fontSize="14">✨</text>}
    </svg>
  );
}
