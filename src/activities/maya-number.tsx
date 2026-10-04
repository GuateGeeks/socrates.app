import { useEffect, useRef, useState } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { play } from '@/design-system/motion';
import { feedback } from '@/design-system/feedback';
import { MayaDigit, NumberPad, toVigesimal } from './shared';
import { fmt } from './util';

export interface MayaNumberProps {
  /** build: el niño construye el numeral · read: lee el numeral y escribe el decimal */
  mode: 'build' | 'read';
  target: number;
  /** niveles visibles en modo build (por defecto los necesarios para el objetivo, mínimo 2) */
  levels?: number;
  /** muestra el valor posicional (×1, ×20, ×400…) y el total en vivo — andamiaje que se retira en retos */
  scaffold?: boolean;
  /** usa valores de la Cuenta Larga (1, 20, 360, 7200, 144000) en vez de potencias de 20 */
  longCount?: boolean;
}
type MayaValue = number[] | string;

const POS = [1, 20, 400, 8000, 160000];
const LONG = [1, 20, 360, 7200, 144000];
const LONG_NAMES = ["K'in", 'Winal', 'Tun', "K'atun", "B'ak'tun"];

export const mayaTotal = (digits: number[], longCount?: boolean) => digits.reduce((s, d, i) => s + d * (longCount ? LONG : POS)[i], 0);

function Level({ d, idx, props, onAdd, onClear, locked }: { d: number; idx: number; props: MayaNumberProps; onAdd: (n: number) => void; onClear: () => void; locked: boolean }) {
  const ref = useRef<HTMLButtonElement>(null);
  const prev = useRef(d);
  useEffect(() => { if (d !== prev.current) play(ref.current, d < prev.current && d !== 0 ? 'wiggle' : 'pop'); prev.current = d; }, [d]);
  const unit = (props.longCount ? LONG : POS)[idx];
  return (
    <div className="act-maya__level">
      {props.scaffold && (
        <div className="act-maya__pos">
          <strong>×{fmt(unit)}</strong>
          {props.longCount && <span className="ds-xs">{LONG_NAMES[idx]}</span>}
        </div>
      )}
      <button type="button" ref={ref} className="act-maya__slot" disabled={locked || d === 0} onClick={onClear} aria-label={`Vaciar nivel ${idx + 1}`} title="Vaciar nivel">
        <MayaDigit d={d} size={64} />
      </button>
      <div className="act-maya__btns">
        <button type="button" disabled={locked} onClick={() => onAdd(1)} aria-label={`Agregar punto en nivel ${idx + 1}`}>+ ●</button>
        <button type="button" disabled={locked} onClick={() => onAdd(5)} aria-label={`Agregar barra en nivel ${idx + 1}`}>+ ▬</button>
      </div>
      {props.scaffold && <div className="act-maya__sub ds-xs">{d} × {fmt(unit)} = <strong>{fmt(d * unit)}</strong></div>}
    </div>
  );
}

function MayaNumber({ props, value, onChange, status }: ActivityProps<MayaNumberProps, MayaValue>) {
  const locked = status === 'correct' || status === 'revealed';
  const [msg, setMsg] = useState('');
  if (props.mode === 'read') {
    const digits = toVigesimal(props.target);
    return (
      <div className="ds-stack">
        <div className="act-maya__read">
          {[...digits].reverse().map((d, i) => <div key={i} className="act-maya__slot"><MayaDigit d={d} size={72} /></div>)}
        </div>
        <NumberPad value={typeof value === 'string' ? value : ''} onChange={onChange} disabled={locked} />
      </div>
    );
  }
  const n = props.levels ?? Math.max(2, toVigesimal(props.target).length);
  const digits = Array.isArray(value) ? value : Array(n).fill(0);
  const max = props.longCount ? (i: number) => (i === 1 ? 17 : 19) : () => 19;
  const add = (idx: number, k: number) => {
    const next = [...digits];
    next[idx] += k;
    // Acarreo automático: 20 en un nivel = 1 en el nivel superior (18 winales = 1 tun en cuenta larga)
    let i = idx; let carried = false;
    while (i < n && next[i] > max(i)) {
      const base = max(i) + 1;
      if (i + 1 >= n) { setMsg('¡Ese nivel ya está lleno y no hay nivel superior!'); feedback('incorrect'); return; }
      next[i] -= base; next[i + 1] += 1; carried = true; i++;
    }
    setMsg(carried ? `¡Se llenó! ${props.longCount && idx === 1 ? '18' : '20'} en un nivel = 1 en el nivel de arriba ⬆` : '');
    feedback(carried ? 'correct' : 'tap');
    onChange(next);
  };
  const clear = (idx: number) => { const next = [...digits]; next[idx] = 0; onChange(next); feedback('tap'); };
  const total = mayaTotal(digits, props.longCount);
  return (
    <div className="ds-stack">
      <div className="act-maya__target">Meta: <strong>{fmt(props.target)}</strong>{props.scaffold && <> · Tienes: <strong className={total === props.target ? 'is-ok' : ''}>{fmt(total)}</strong></>}</div>
      <div className="act-maya">
        {[...digits.keys()].reverse().map((i) => (
          <Level key={i} idx={i} d={digits[i]} props={props} onAdd={(k) => add(i, k)} onClear={() => clear(i)} locked={locked} />
        ))}
      </div>
      <p className="ds-xs ds-muted ds-center" aria-live="polite">{msg || 'El nivel de abajo son las unidades. Toca un numeral para borrarlo.'}</p>
    </div>
  );
}

export default defineActivity<MayaNumberProps, MayaValue>({
  type: 'maya-number',
  label: 'Numeración maya',
  icon: 'Shell',
  description: 'Construir o leer numerales mayas vigesimales con acarreo animado; modo Cuenta Larga (calendario).',
  graded: true,
  Component: MayaNumber,
  isReady: (p, v) => (p.mode === 'read' ? typeof v === 'string' && v.length > 0 : Array.isArray(v) && v.some((d) => d > 0)),
  check(p, v) {
    if (p.mode === 'read') {
      const ok = Number(v) === p.target;
      return { correct: ok, feedback: ok ? undefined : 'Multiplica cada nivel por su valor (×1, ×20, ×400) y suma.' };
    }
    const total = mayaTotal(v as number[], p.longCount);
    return { correct: total === p.target, feedback: total > p.target ? `Tu numeral vale ${fmt(total)}: te pasaste.` : `Tu numeral vale ${fmt(total)}: te falta ${fmt(p.target - total)}.` };
  },
  solution(p) {
    if (p.mode === 'read') return String(p.target);
    const units = p.longCount ? LONG : POS;
    const n = p.levels ?? Math.max(2, toVigesimal(p.target).length);
    const out = Array(n).fill(0); let r = p.target;
    for (let i = n - 1; i >= 0; i--) { out[i] = Math.floor(r / units[i]); r -= out[i] * units[i]; }
    return out;
  },
  validate: (p) => (p.target < 0 || p.target >= 3200000 ? ['objetivo fuera de rango (0 a 3,199,999)'] : []),
  example: { fase: 'construir', areas: ['mat', 'ccss'], cnb: ['mat:4.1.5'], prompt: 'Construye el 45', props: { mode: 'build', target: 45, scaffold: true } },
});
