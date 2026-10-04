import { useMemo, useRef, useState } from 'react';
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
  const editorRef = useRef<HTMLDivElement>(null);
  const [sel, setSel] = useState<number>(0);
  const locked = status === 'correct' || status === 'revealed';
  const used = (w: string, idx: number) => v.filter((x) => x === w).length > bank.slice(0, idx).filter((x) => x === w).length;

  const put = (w: string) => {
    if (locked) return;
    feedback('drop');
    const n = [...v]; n[sel] = w; onChange(n);
  };
  const clear = () => { if (locked) return; const n = [...v]; n[sel] = null; onChange(n); };
  const wrong = (i: number) => status === 'incorrect' && v[i] !== null && !blanks[i].answers.some((a) => norm(a) === norm(v[i]!));
  // Show the surrounding sentence without leaking an unanswered blank's solution.
  const activePart = parts.findIndex((p) => p.t === 'blank' && p.i === sel);
  const before = parts.slice(0, activePart).map((p) => p.t === 'text' ? p.v : v[p.i] ?? '____').join('');
  const after = parts.slice(activePart + 1).map((p) => p.t === 'text' ? p.v : v[p.i] ?? '____').join('');
  const contextBefore = before.split(/(?<=[.!?\n])\s+/).at(-1) ?? '';
  const contextAfter = after.match(/^[^.!?\n]*[.!?]?/)?.[0] ?? '';
  return (
    <div ref={editorRef} className="ds-stack act-fb-editor" tabIndex={-1}>
      <div className="act-precision__nav">
        <button type="button" className="ds-btn ds-btn--secondary" disabled={sel === 0} onClick={() => setSel(sel - 1)}>Espacio anterior</button>
        <span aria-live="polite">Espacio {sel + 1} de {blanks.length}</span>
        <button type="button" className="ds-btn ds-btn--secondary" disabled={sel === blanks.length - 1} onClick={() => setSel(sel + 1)}>Siguiente espacio</button>
      </div>
      <div className="act-fb__text" aria-label="Contexto del espacio activo">
        {contextBefore}<strong className={`act-fb__slot is-sel${wrong(sel) ? ' is-wrong' : ''}`}>{v[sel] ?? '____'}</strong>{contextAfter}
      </div>
      {wrong(sel) && <p role="status">Revisa este espacio.</p>}
      <div className="act-fb__bank" aria-label="Banco de palabras">
        {bank.map((w, idx) => <button key={idx} type="button" className={`act-token${used(w, idx) ? ' is-used' : ''}`} disabled={locked || used(w, idx)} onClick={() => put(w)}>{w}</button>)}
      </div>
      <button type="button" className="ds-btn ds-btn--ghost" disabled={locked || !v[sel]} onClick={clear}>Vaciar espacio {sel + 1}</button>
      <details><summary>Consultar texto completo</summary><div className="act-fb__text">
        {parts.map((p, k) => p.t === 'text' ? <span key={k} style={{ whiteSpace: 'pre-wrap' }}>{p.v}</span> : <span className="act-fb__slot" key={k}>{v[p.i] ?? `(${p.i + 1}) ____`}</span>)}
      </div></details>
      <details open><summary>Revisar mis respuestas</summary>
        <ol className="act-precision__review">{blanks.map((b) => <li key={b.i}><span>{v[b.i] ?? 'Pendiente'}{wrong(b.i) ? ' · Revisar' : ''}</span><button type="button" className="ds-btn ds-btn--secondary" aria-label={`Editar espacio ${b.i + 1}`} onClick={() => { setSel(b.i); editorRef.current?.scrollIntoView({ block: 'start' }); editorRef.current?.focus({ preventScroll: true }); }}>Editar espacio {b.i + 1}</button></li>)}</ol>
      </details>
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
