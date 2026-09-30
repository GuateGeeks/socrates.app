import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { feedback } from '@/design-system/feedback';
import { stagger } from '@/design-system/motion';

export interface LoomProps {
  /** mitad izquierda del diseño: filas × (cols/2); valores = índice de color o null */
  half: (number | null)[][];
  palette: string[];
  /** nombre del tejido/motivo para contexto cultural */
  motif?: string;
}
type Grid = (number | null)[][];

const mirrorOf = (half: Grid) => half.map((row) => [...row].reverse());

function Loom({ props, value, onChange, status }: ActivityProps<LoomProps, Grid>) {
  const rows = props.half.length, hc = props.half[0].length;
  const grid: Grid = value ?? props.half.map((r) => r.map(() => null));
  const [color, setColor] = useState(0);
  const locked = status === 'correct' || status === 'revealed';
  const boardRef = useRef<HTMLDivElement>(null);
  const painting = useRef<number | null | undefined>(undefined);

  const paint = (r: number, c: number, forced?: number | null) => {
    if (locked) return;
    const next = grid.map((row) => [...row]);
    const target = forced !== undefined ? forced : next[r][c] === color ? null : color;
    if (next[r][c] === target) return;
    next[r][c] = target;
    painting.current = target;
    feedback('tap');
    onChange(next);
  };
  const cellAt = (x: number, y: number) => {
    const el = document.elementFromPoint(x, y) as HTMLElement | null;
    const d = el?.dataset; return d?.r ? [Number(d.r), Number(d.c)] as const : null;
  };
  const wrong = (r: number, c: number) => status === 'incorrect' && grid[r][c] !== mirrorOf(props.half)[r][c];
  useEffect(() => { if (status === 'correct' && boardRef.current) stagger(boardRef.current.querySelectorAll('.act-loom__cell.right'), 'pop', 8); }, [status]);

  return (
    <div className="ds-stack">
      <div className="act-loom__palette" role="radiogroup" aria-label="Color de hilo">
        {props.palette.map((p, i) => (
          <button key={i} type="button" role="radio" aria-checked={color === i} className={`act-loom__swatch${color === i ? ' is-on' : ''}`}
            style={{ background: p }} onClick={() => { setColor(i); feedback('select'); }} aria-label={`Color ${i + 1}`} />
        ))}
      </div>
      <div ref={boardRef} className="act-loom" style={{ '--cols': hc * 2 } as CSSProperties}
        onPointerMove={(e) => { if (painting.current === undefined || e.buttons === 0) return; const rc = cellAt(e.clientX, e.clientY); if (rc) paint(rc[0], rc[1], painting.current); }}
        onPointerUp={() => { painting.current = undefined; }} onPointerLeave={() => { painting.current = undefined; }}>
        {Array.from({ length: rows }, (_, r) => (
          [...props.half[r].map((v, c) => <div key={`L${r}-${c}`} className="act-loom__cell left" style={{ background: v === null ? undefined : props.palette[v] }} />),
            ...Array.from({ length: hc }, (_, c) => (
              <div key={`R${r}-${c}`} data-r={r} data-c={c} className={`act-loom__cell right${wrong(r, c) ? ' is-wrong' : ''}`}
                style={{ background: grid[r][c] === null ? undefined : props.palette[grid[r][c]!] }}
                onPointerDown={(e) => { (e.target as HTMLElement).releasePointerCapture?.(e.pointerId); paint(r, c); }} />
            ))]
        ))}
        <div className="act-loom__axis" aria-hidden />
      </div>
      <p className="ds-xs ds-muted ds-center">{props.motif ? `${props.motif} · ` : ''}Elige un color y toca (o arrastra) en la mitad derecha. El eje punteado es el espejo.</p>
    </div>
  );
}

export default defineActivity<LoomProps, Grid>({
  type: 'symmetry-loom',
  label: 'Telar de simetría',
  icon: 'Grid3x3',
  description: 'Completar un diseño de tejido por simetría axial (reflexión). Integra geometría, arte y cultura.',
  graded: true,
  Component: Loom,
  isReady: (_p, v) => !!v && v.some((r) => r.some((c) => c !== null)),
  check(p, v) {
    const m = mirrorOf(p.half);
    let bad = 0, total = 0;
    m.forEach((row, r) => row.forEach((c, j) => { total++; if (v[r][j] !== c) bad++; }));
    return { correct: bad === 0, score: (total - bad) / total, feedback: bad ? `${bad} ${bad === 1 ? 'hilo no coincide' : 'hilos no coinciden'} con su reflejo (marcados).` : undefined };
  },
  solution: (p) => mirrorOf(p.half),
  validate: (p) => (p.half.some((r) => r.length !== p.half[0].length) ? ['filas de distinto largo'] : []),
});
