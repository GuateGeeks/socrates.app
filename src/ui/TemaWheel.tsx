import { useEffect, useRef } from 'react';
import { AREAS, WHEEL_CICLO_II, type AreaId } from '@/cnb/model';
import { stagger } from '@/design-system/motion';
import { feedback } from '@/design-system/feedback';
import { Icon } from '@/design-system/icons';

/**
 * Rueda del Tema Generador — reinterpretación interactiva de la Figura No. 2 del CNB.
 *  · Centro: el Tema Generador de la misión.
 *  · Anillo interno (Contenidos/Competencias): encendido si la misión trabaja esa área.
 *  · Anillo externo (Evaluación/Indicadores de logro): se llena con el dominio del estudiante.
 */
const C = 160;
const R0 = 62, R1 = 104, R2 = 150;

function sector(r0: number, r1: number, a0: number, a1: number) {
  const p = (r: number, a: number) => `${C + r * Math.cos(a)} ${C + r * Math.sin(a)}`;
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M${p(r1, a0)} A${r1} ${r1} 0 ${large} 1 ${p(r1, a1)} L${p(r0, a1)} A${r0} ${r0} 0 ${large} 0 ${p(r0, a0)} Z`;
}

function wrap(text: string, max = 14): string[] {
  const words = text.split(' '); const lines: string[] = []; let cur = '';
  for (const w of words) { if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); }
  if (cur) lines.push(cur);
  return lines.slice(0, 4);
}

export function TemaWheel({ tema, active, mastery, selected, onSelect, size = 320 }: {
  tema: string; active: AreaId[]; mastery: Partial<Record<AreaId, number>>; selected?: AreaId | null; onSelect?: (a: AreaId) => void; size?: number;
}) {
  const ref = useRef<SVGGElement>(null);
  useEffect(() => { if (ref.current) stagger(ref.current.children, 'enter.item', 40); }, []);
  const n = WHEEL_CICLO_II.length; const step = (2 * Math.PI) / n; const start = -Math.PI / 2 - step / 2;
  const lines = wrap(tema);
  return (
    <svg viewBox="0 0 320 320" width={size} height={size} className="tw" role="group" aria-label={`Rueda del tema generador: ${tema}`}>
      <g ref={ref}>
        {WHEEL_CICLO_II.map((a, i) => {
          const a0 = start + i * step + 0.012, a1 = start + (i + 1) * step - 0.012, mid = (a0 + a1) / 2;
          const on = active.includes(a); const m = mastery[a] ?? 0; const sel = selected === a;
          const color = AREAS[a].color;
          const ex = C + ((R1 + R2) / 2) * Math.cos(mid), ey = C + ((R1 + R2) / 2) * Math.sin(mid);
          return (
            <g key={a} className={`tw__seg${on ? ' is-on' : ''}${sel ? ' is-sel' : ''}`} style={{ transformOrigin: `${C}px ${C}px` }}
              onClick={() => { if (onSelect) { feedback('select'); onSelect(a); } }} role="button" tabIndex={on ? 0 : -1}
              aria-label={`${AREAS[a].nombre}${on ? `, dominio ${Math.round(m * 100)}%` : ', no incluida'}`}
              onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && onSelect) { e.preventDefault(); onSelect(a); } }}>
              <path d={sector(R0, R1, a0, a1)} fill={color} opacity={on ? 0.95 : 0.14} />
              <path d={sector(R1 + 2, R2, a0, a1)} fill={color} opacity={on ? 0.25 : 0.07} />
              {on && m > 0 && <path d={sector(R1 + 2, R1 + 2 + (R2 - R1 - 2) * m, a0, a1)} fill={color} className="tw__mastery" />}
              <g transform={`translate(${ex - 11} ${ey - 11})`} opacity={on ? 1 : 0.35} color={on ? 'var(--c-ink)' : 'var(--c-ink-3)'}><Icon name={AREAS[a].icon} size={22} strokeWidth={2.2} /></g>
              {sel && <path d={sector(R0 - 2, R2 + 2, a0 - 0.01, a1 + 0.01)} fill="none" stroke="var(--c-ink)" strokeWidth="3" />}
            </g>
          );
        })}
      </g>
      <circle cx={C} cy={C} r={R0 - 4} fill="var(--c-maiz)" stroke="var(--c-maiz-strong)" strokeWidth="3" />
      <text x={C} y={C - 8 - (lines.length - 1) * 8} textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#5a4300" letterSpacing="0.08em">TEMA GENERADOR</text>
      {lines.map((l, i) => <text key={i} x={C} y={C + 8 + i * 15 - (lines.length - 1) * 8} textAnchor="middle" fontSize="12.5" fontWeight="900" fill="#3b2b00">{l}</text>)}
    </svg>
  );
}
