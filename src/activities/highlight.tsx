import { useMemo } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { feedback } from '@/design-system/feedback';

export interface HighlightProps {
  /** Texto donde las palabras/frases objetivo van entre llaves: "El {gato} {corre} rápido."
   *  Una frase de varias palabras entre llaves cuenta como un solo elemento. */
  text: string;
  /** etiqueta de lo que se busca, p.ej. "verbos" (se muestra como contador) */
  target?: string;
}
type HLValue = number[];

export function tokenize(text: string) {
  const out: { w: string; target: boolean; tappable: boolean }[] = [];
  const re = /\{([^}]+)\}|([^\s{}]+)|(\s+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m[1]) out.push({ w: m[1], target: true, tappable: true });
    else if (m[2]) out.push({ w: m[2], target: false, tappable: /[\p{L}\p{N}]/u.test(m[2]) });
    else out.push({ w: m[3], target: false, tappable: false });
  }
  return out;
}

function Highlight({ props, value = [], onChange, status }: ActivityProps<HighlightProps, HLValue>) {
  const toks = useMemo(() => tokenize(props.text), [props.text]);
  const locked = status === 'correct' || status === 'revealed';
  const total = toks.filter((t) => t.target).length;
  const toggle = (i: number) => {
    if (locked) return;
    feedback('select');
    onChange(value.includes(i) ? value.filter((x) => x !== i) : [...value, i]);
  };
  return (
    <div className="ds-stack">
      <p className="act-hl">
        {toks.map((t, i) => !t.tappable
          ? <span key={i}>{t.w}</span>
          : (
            <button key={i} type="button" onClick={() => toggle(i)} aria-pressed={value.includes(i)}
              className={`act-hl__w${value.includes(i) ? ' is-on' : ''}${status === 'incorrect' && value.includes(i) && !t.target ? ' is-wrong' : ''}${locked && t.target ? ' is-right' : ''}`}>
              {t.w}
            </button>
          ))}
      </p>
      <p className="ds-xs ds-muted ds-center">Seleccionaste {value.length}{props.target ? ` · busca ${total} ${props.target}` : ''}. Toca de nuevo para quitar.</p>
    </div>
  );
}

export default defineActivity<HighlightProps, HLValue>({
  type: 'highlight',
  label: 'Marcar en el texto',
  icon: 'Highlighter',
  description: 'Tocar palabras o frases de un texto que cumplen un criterio (categorías gramaticales, ideas principales, datos).',
  graded: true,
  Component: Highlight,
  isReady: (_p, v) => !!v && v.length > 0,
  check(p, v) {
    const toks = tokenize(p.text);
    const targets = toks.map((t, i) => (t.target ? i : -1)).filter((i) => i >= 0);
    const hit = targets.filter((i) => v.includes(i)).length;
    const extra = v.filter((i) => !toks[i]?.target).length;
    const ok = hit === targets.length && extra === 0;
    return { correct: ok, score: Math.max(0, (hit - extra) / targets.length), feedback: ok ? undefined : extra ? `Marcaste ${extra} que no ${extra === 1 ? 'corresponde' : 'corresponden'} (en rojo).` : `Te ${targets.length - hit === 1 ? 'falta 1' : `faltan ${targets.length - hit}`}.` };
  },
  solution: (p) => tokenize(p.text).map((t, i) => (t.target ? i : -1)).filter((i) => i >= 0),
  validate: (p) => (tokenize(p.text).some((t) => t.target) ? [] : ['sin objetivos {…} en el texto']),
});
