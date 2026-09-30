import { useMemo, useState } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { feedback } from '@/design-system/feedback';
import { shuffled } from './util';

export interface FillBlankProps {
  /** Texto con espacios: [[respuesta]] o [[respuesta|alternativa]]. Admite saltos de línea. */
  text: string;
  /** palabras distractoras extra para el banco */
  distractors?: string[];
}
type FBValue = (string | null)[];

const BLANK = /\[\[([^\]]+)\]\]/g;
export function parseBlanks(text: string) {
  const parts: ({ t: 'text'; v: string } | { t: 'blank'; i: number; answers: string[] })[] = [];
  let last = 0; let i = 0; let m: RegExpExecArray | null;
  BLANK.lastIndex = 0;
  while ((m = BLANK.exec(text))) {
    if (m.index > last) parts.push({ t: 'text', v: text.slice(last, m.index) });
    parts.push({ t: 'blank', i: i++, answers: m[1].split('|').map((s) => s.trim()) });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ t: 'text', v: text.slice(last) });
  return parts;
}
const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ');

function FillBlank({ step, props, value, onChange, status }: ActivityProps<FillBlankProps, FBValue>) {
  const parts = useMemo(() => parseBlanks(props.text), [props.text]);
  const blanks = parts.filter((p) => p.t === 'blank') as { t: 'blank'; i: number; answers: string[] }[];
  const bank = useMemo(() => shuffled([...blanks.map((b) => b.answers[0]), ...(props.distractors ?? [])], step.id), [props.text, props.distractors, step.id]); // eslint-disable-line react-hooks/exhaustive-deps
  const v: FBValue = value ?? blanks.map(() => null);
  const [sel, setSel] = useState<number>(0);
  const locked = status === 'correct' || status === 'revealed';
  const used = (w: string, idx: number) => v.filter((x) => x === w).length > bank.slice(0, idx).filter((x) => x === w).length;

  const put = (w: string) => {
    if (locked) return;
    feedback('drop');
    const n = [...v];
    const target = n[sel] === null ? sel : n.findIndex((x) => x === null);
    n[target === -1 ? sel : target] = w;
    onChange(n);
    const next = n.findIndex((x) => x === null);
    setSel(next === -1 ? sel : next);
  };
  const clear = (i: number) => { if (locked) return; feedback('tap'); const n = [...v]; n[i] = null; onChange(n); setSel(i); };
  const wrong = (i: number) => status === 'incorrect' && v[i] !== null && !blanks[i].answers.some((a) => norm(a) === norm(v[i]!));

  return (
    <div className="ds-stack">
      <div className="act-fb__text">
        {parts.map((p, k) => p.t === 'text'
          ? <span key={k} style={{ whiteSpace: 'pre-wrap' }}>{p.v}</span>
          : (
            <button key={k} type="button" className={`act-fb__slot${sel === p.i && !locked ? ' is-sel' : ''}${v[p.i] ? ' is-filled' : ''}${wrong(p.i) ? ' is-wrong' : ''}${locked ? ' is-right' : ''}`}
              onClick={() => (v[p.i] ? clear(p.i) : setSel(p.i))} aria-label={v[p.i] ? `Espacio ${p.i + 1}: ${v[p.i]} (toca para quitar)` : `Espacio ${p.i + 1} vacío`}>
              {v[p.i] ?? ' '}
            </button>
          ))}
      </div>
      <div className="act-fb__bank" aria-label="Banco de palabras">
        {bank.map((w, idx) => (
          <button key={idx} type="button" className={`act-token${used(w, idx) ? ' is-used' : ''}`} disabled={locked || used(w, idx)} onClick={() => put(w)}>{w}</button>
        ))}
      </div>
      <p className="ds-xs ds-muted ds-center">Toca una palabra para colocarla en el espacio marcado. Toca un espacio lleno para vaciarlo.</p>
    </div>
  );
}

export default defineActivity<FillBlankProps, FBValue>({
  type: 'fill-blank',
  label: 'Completar espacios',
  icon: 'TextCursorInput',
  description: 'Texto con espacios en blanco y banco de palabras (vocabulario, gramática, conceptos, cálculos breves).',
  graded: true,
  Component: FillBlank,
  isReady: (p, v) => !!v && v.length === parseBlanks(p.text).filter((x) => x.t === 'blank').length && v.every((x) => x !== null),
  check(p, v) {
    const blanks = parseBlanks(p.text).filter((x) => x.t === 'blank') as { answers: string[] }[];
    const ok = blanks.filter((b, i) => b.answers.some((a) => norm(a) === norm(v[i] ?? ''))).length;
    return { correct: ok === blanks.length, score: ok / blanks.length, feedback: ok === blanks.length ? undefined : `${blanks.length - ok} ${blanks.length - ok === 1 ? 'espacio no es correcto' : 'espacios no son correctos'} (en rojo).` };
  },
  solution: (p) => (parseBlanks(p.text).filter((x) => x.t === 'blank') as { answers: string[] }[]).map((b) => b.answers[0]),
  validate: (p) => (parseBlanks(p.text).filter((x) => x.t === 'blank').length === 0 ? ['el texto no tiene espacios [[...]]'] : []),
});
