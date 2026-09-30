import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Rich } from '@/design-system/components';
import { NumberPad } from './shared';
import { fmt, near, parseNumber } from './util';

export interface NumberInputProps {
  answer: number;
  tolerance?: number;
  unit?: string;
  allowDecimal?: boolean;
  allowFraction?: boolean;
  allowNegative?: boolean;
  /** estímulo (tabla, emoji, operación) */
  stimulus?: string;
  /** errores frecuentes → mensaje formativo específico */
  misconceptions?: { value: number; msg: string }[];
}

function NumberInput({ props, value = '', onChange, status }: ActivityProps<NumberInputProps, string>) {
  return (
    <div className="ds-stack">
      {props.stimulus && <div className="act-stimulus"><Rich text={props.stimulus} /></div>}
      <NumberPad value={value} onChange={onChange} unit={props.unit} allowDecimal={props.allowDecimal} allowFraction={props.allowFraction}
        allowNegative={props.allowNegative} disabled={status === 'correct' || status === 'revealed'} />
    </div>
  );
}

export default defineActivity<NumberInputProps, string>({
  type: 'number-input',
  label: 'Respuesta numérica',
  icon: 'Calculator',
  description: 'Teclado numérico propio (enteros, decimales, fracciones, negativos) con detección de errores frecuentes.',
  graded: true,
  Component: NumberInput,
  isReady: (_p, v) => !!v && parseNumber(v) !== null,
  check(p, v) {
    const n = parseNumber(v)!;
    const ok = near(n, p.answer, p.tolerance ?? 1e-6);
    const mis = p.misconceptions?.find((m) => near(m.value, n, p.tolerance ?? 1e-6));
    return { correct: ok, feedback: ok ? undefined : mis?.msg ?? (n > p.answer ? `${fmt(n)} es demasiado.` : `${fmt(n)} es muy poco.`) };
  },
  solution: (p) => String(p.answer),
});
