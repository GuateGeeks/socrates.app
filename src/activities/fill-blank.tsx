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
  const current = blanks[sel];
  const choices = useMemo(() => {
    const answer = current.answers[0];
    const alternatives = bank.filter((word) => norm(word) !== norm(answer));
    const distinct = [...new Map(alternatives.map((word) => [norm(word), word])).values()].slice(0, 3);
    return shuffled([answer, ...distinct], `${step.id}-${sel}`);
  }, [bank, current, sel, step.id]);
  const complete = v.length === blanks.length && v.every((answer) => answer !== null);

  const put = (w: string) => {
    if (locked) return;
    feedback('drop');
    const n = [...v]; n[sel] = w; onChange(n);
  };
  const wrong = (i: number) => status === 'incorrect' && v[i] !== null && !blanks[i].answers.some((a) => norm(a) === norm(v[i]!));
  // Show the surrounding sentence without leaking an unanswered blank's solution.
  const activePart = parts.findIndex((p) => p.t === 'blank' && p.i === sel);
  const before = parts.slice(0, activePart).map((p) => p.t === 'text' ? p.v : v[p.i] ?? '____').join('');
  const after = parts.slice(activePart + 1).map((p) => p.t === 'text' ? p.v : v[p.i] ?? '____').join('');
  const contextBefore = before.split(/(?<=[.!?\n])\s+/).at(-1) ?? '';
  const contextAfter = after.match(/^[^.!?\n]*[.!?]?/)?.[0] ?? '';
  return (
    <div ref={editorRef} className="ds-stack act-fb-editor" tabIndex={-1}>
      <p className="ds-small ds-muted act-fb__progress" aria-live="polite">Frase {sel + 1} de {blanks.length}</p>
      <div className="act-fb__text" aria-label="Contexto del espacio activo">
        {contextBefore}<strong className={`act-fb__slot is-sel${wrong(sel) ? ' is-wrong' : ''}`}>{v[sel] ?? '____'}</strong>{contextAfter}
      </div>
      {wrong(sel) && <p role="status">Revisa este espacio.</p>}
      <p className="ds-small ds-muted">Elige la palabra que completa la frase.</p>
      <div className="act-fb__bank" role="group" aria-label={`Opciones para la frase ${sel + 1}`}>
        {choices.map((word) => <button key={word} type="button" className={`act-token${v[sel] === word ? ' is-selected' : ''}`}
          aria-pressed={v[sel] === word} disabled={locked} onClick={() => put(word)}>{word}</button>)}
      </div>
      <nav className="act-fb__nav" aria-label="Frases del ejercicio">
        {sel > 0 && <button type="button" className="ds-btn ds-btn--secondary" onClick={() => setSel(sel - 1)}>Frase anterior</button>}
        {sel < blanks.length - 1 && <button type="button" className="ds-btn ds-btn--primary" disabled={!v[sel]} onClick={() => setSel(sel + 1)}>Siguiente frase</button>}
      </nav>
      {complete && <details><summary>Consultar texto completo</summary>
        <div className="act-fb__text">
          {parts.map((p, k) => p.t === 'text' ? <span key={k} style={{ whiteSpace: 'pre-wrap' }}>{p.v}</span> : <span className="act-fb__slot" key={k}>{v[p.i]}</span>)}
        </div>
        <ol className="act-precision__review">{blanks.map((blank) => <li key={blank.i}>
          <span>{v[blank.i]}{wrong(blank.i) ? ' · Revisar' : ''}</span>
          <button type="button" className="ds-btn ds-btn--secondary" aria-label={`Editar espacio ${blank.i + 1}`} onClick={() => {
            setSel(blank.i); editorRef.current?.scrollIntoView({ block: 'start' }); editorRef.current?.focus({ preventScroll: true });
          }}>Editar espacio {blank.i + 1}</button>
        </li>)}</ol>
      </details>}
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
