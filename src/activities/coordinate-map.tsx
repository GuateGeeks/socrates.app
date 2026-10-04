import { useEffect, useRef, type PointerEvent as RPointerEvent } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { feedback } from '@/design-system/feedback';
import { play } from '@/design-system/motion';

export interface CoordMapProps {
  range: { xmin: number; xmax: number; ymin: number; ymax: number };
  markers?: { id: string; label: string; emoji: string; x: number; y: number }[];
  task: { kind: 'place'; x: number; y: number; emoji: string; label: string } | { kind: 'identify'; markerId: string };
}
interface Pt { x: number; y: number }

function Stepper({ label, v, set, min, max, disabled }: { label: string; v: number; set: (n: number) => void; min: number; max: number; disabled: boolean }) {
  return (
    <div className="act-stepper">
      <span className="ds-section-title">{label}</span>
      <div className="ds-row">
        <button type="button" className="act-key" disabled={disabled || v <= min} onClick={() => { feedback('tap'); set(v - 1); }} aria-label={`${label} menos`}>−</button>
        <strong className="act-stepper__v">{v}</strong>
        <button type="button" className="act-key" disabled={disabled || v >= max} onClick={() => { feedback('tap'); set(v + 1); }} aria-label={`${label} más`}>+</button>
      </div>
    </div>
  );
}

function CoordMap({ props, value, onChange, status }: ActivityProps<CoordMapProps, Pt>) {
  const { xmin, xmax, ymin, ymax } = props.range;
  const W = 320, H = 320, pad = 26;
  const sx = (x: number) => pad + ((x - xmin) / (xmax - xmin)) * (W - 2 * pad);
  const sy = (y: number) => H - pad - ((y - ymin) / (ymax - ymin)) * (H - 2 * pad);
  const svgRef = useRef<SVGSVGElement>(null);
  const pinRef = useRef<SVGGElement>(null);
  const locked = status === 'correct' || status === 'revealed';
  const task = props.task;
  useEffect(() => { if (value) play(pinRef.current as unknown as Element, 'enter.item'); }, [value?.x, value?.y]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { if (task.kind === 'identify' && !value) onChange({ x: 0, y: 0 }); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onTap = (e: RPointerEvent<SVGSVGElement>) => {
    if (locked || task.kind !== 'place') return;
    const r = svgRef.current!.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * W, py = ((e.clientY - r.top) / r.height) * H;
    const x = Math.round(xmin + ((px - pad) / (W - 2 * pad)) * (xmax - xmin));
    const y = Math.round(ymin + ((H - pad - py) / (H - 2 * pad)) * (ymax - ymin));
    if (x < xmin || x > xmax || y < ymin || y > ymax) return;
    feedback('drop'); onChange({ x, y });
  };
  const xs = Array.from({ length: xmax - xmin + 1 }, (_, i) => xmin + i);
  const ys = Array.from({ length: ymax - ymin + 1 }, (_, i) => ymin + i);
  const target = task.kind === 'identify' ? props.markers?.find((m) => m.id === task.markerId) : undefined;
  return (
    <div className="ds-stack">
      <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="act-coord" onPointerDown={onTap} role="img" aria-label="Plano cartesiano">
        <rect x={pad} y={pad} width={W - 2 * pad} height={H - 2 * pad} rx="10" fill="color-mix(in srgb, var(--c-quetzal) 10%, var(--c-surface))" />
        {xs.map((x) => <line key={`x${x}`} x1={sx(x)} x2={sx(x)} y1={pad} y2={H - pad} stroke="var(--c-line)" strokeWidth={x === 0 ? 0 : 1.5} />)}
        {ys.map((y) => <line key={`y${y}`} y1={sy(y)} y2={sy(y)} x1={pad} x2={W - pad} stroke="var(--c-line)" strokeWidth={y === 0 ? 0 : 1.5} />)}
        {xmin <= 0 && xmax >= 0 && <line x1={sx(0)} x2={sx(0)} y1={pad - 6} y2={H - pad + 6} stroke="var(--c-ink)" strokeWidth="2.5" />}
        {ymin <= 0 && ymax >= 0 && <line y1={sy(0)} y2={sy(0)} x1={pad - 6} x2={W - pad + 6} stroke="var(--c-ink)" strokeWidth="2.5" />}
        {xs.filter((x) => x !== 0).map((x) => <text key={`tx${x}`} x={sx(x)} y={Math.min(H - 6, sy(Math.max(ymin, 0)) + 16)} fontSize="11" textAnchor="middle" fontWeight="800" fill="var(--c-ink-2)">{x}</text>)}
        {ys.filter((y) => y !== 0).map((y) => <text key={`ty${y}`} x={Math.max(10, sx(Math.max(xmin, 0)) - 9)} y={sy(y) + 4} fontSize="11" textAnchor="middle" fontWeight="800" fill="var(--c-ink-2)">{y}</text>)}
        {(props.markers ?? []).map((m) => (
          <g key={m.id} transform={`translate(${sx(m.x)} ${sy(m.y)})`}>
            <circle r="15" fill="var(--c-surface)" stroke={target?.id === m.id ? 'var(--c-bad)' : 'var(--c-line)'} strokeWidth="3" />
            <text textAnchor="middle" y="6" fontSize="17">{m.emoji}</text>
          </g>
        ))}
        {value && task.kind === 'identify' && (
          <g opacity="0.9"><line x1={sx(value.x)} x2={sx(value.x)} y1={pad} y2={H - pad} stroke="var(--c-hint)" strokeWidth="2" strokeDasharray="5 4" /><line y1={sy(value.y)} y2={sy(value.y)} x1={pad} x2={W - pad} stroke="var(--c-hint)" strokeWidth="2" strokeDasharray="5 4" /></g>
        )}
        {value && task.kind === 'place' && (
          <g ref={pinRef} style={{ transformOrigin: `${sx(value.x)}px ${sy(value.y)}px` }}>
            <circle cx={sx(value.x)} cy={sy(value.y)} r="16" fill={status === 'incorrect' ? 'var(--c-bad)' : status === 'correct' ? 'var(--c-ok)' : 'var(--c-jade)'} />
            <text x={sx(value.x)} y={sy(value.y) + 6} textAnchor="middle" fontSize="17">{task.emoji}</text>
          </g>
        )}
      </svg>
      {task.kind === 'place' && <div className="act-stimulus ds-center">Coloca {task.emoji} <strong>{task.label}</strong> en <strong>({task.x}, {task.y})</strong>{value && <span className="ds-muted"> · tu punto: ({value.x}, {value.y})</span>}</div>}
      <div className="act-coord__precision">
        <Stepper label="x" v={value?.x ?? Math.max(xmin, Math.min(xmax, 0))} set={(x) => onChange({ x, y: value?.y ?? Math.max(ymin, Math.min(ymax, 0)) })} min={xmin} max={xmax} disabled={locked} />
        <Stepper label="y" v={value?.y ?? Math.max(ymin, Math.min(ymax, 0))} set={(y) => onChange({ x: value?.x ?? Math.max(xmin, Math.min(xmax, 0)), y })} min={ymin} max={ymax} disabled={locked} />
      </div>
    </div>
  );
}

export default defineActivity<CoordMapProps, Pt>({
  type: 'coordinate-map',
  label: 'Plano cartesiano / mapa',
  icon: 'MapPin',
  description: 'Ubicar o identificar pares ordenados (incluye negativos) sobre un mapa. Matemáticas + geografía.',
  graded: true,
  Component: CoordMap,
  isReady: (_p, v) => !!v,
  check(p, v) {
    const t = p.task.kind === 'place' ? p.task : p.markers!.find((m) => m.id === (p.task as { markerId: string }).markerId)!;
    const ok = v.x === t.x && v.y === t.y;
    const swapped = v.x === t.y && v.y === t.x;
    return { correct: ok, feedback: ok ? undefined : swapped ? '¡Invertiste el orden! Primero va x (horizontal), luego y (vertical).' : 'Recuerda: (x, y) = (horizontal, vertical). Cuenta desde el origen (0, 0).' };
  },
  solution(p) {
    const t = p.task.kind === 'place' ? p.task : p.markers!.find((m) => m.id === (p.task as { markerId: string }).markerId)!;
    return { x: t.x, y: t.y };
  },
  validate(p) {
    const e: string[] = [];
    if (p.task.kind === 'identify' && !p.markers?.some((m) => m.id === (p.task as { markerId: string }).markerId)) e.push('markerId inexistente');
    return e;
  },
});
