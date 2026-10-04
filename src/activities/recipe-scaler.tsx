import { useEffect, useRef, useState } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { NumberPad } from './shared';
import { fmt, near, parseNumber } from './util';
import { Glyph } from '@/design-system/icons';

export interface RecipeProps {
  dish: string;
  emoji?: string;
  icon?: string;
  baseServings: number;
  targetServings: number;
  ingredients: { name: string; emoji?: string; icon?: string; qty: number; unit: string }[];
  /** índices que el niño debe calcular (los demás se muestran resueltos como ejemplo) */
  ask: number[];
}
type RecipeValue = Record<number, string>;
const scaled = (p: RecipeProps, i: number) => (p.ingredients[i].qty * p.targetServings) / p.baseServings;

function Recipe({ props, value = {}, onChange, status }: ActivityProps<RecipeProps, RecipeValue>) {
  const [sel, setSel] = useState(props.ask[0]);
  const editorRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (status === 'incorrect' && reviewRef.current) reviewRef.current.open = true;
  }, [status]);
  const wrongQuantity = (i: number) => status === 'incorrect' && props.ask.includes(i) && !near(parseNumber(value[i] ?? '') ?? NaN, scaled(props, i), 0.01);
  const edit = (i: number) => {
    setSel(i);
    requestAnimationFrame(() => {
      editorRef.current?.focus({ preventScroll: true });
      editorRef.current?.scrollIntoView({ block: 'center', inline: 'nearest' });
    });
  };
  const locked = status === 'correct' || status === 'revealed';
  const k = props.targetServings / props.baseServings;
  return (
    <div className="ds-stack">
      <div className="act-recipe__head">
        <span className="act-hero" aria-hidden><Glyph icon={props.icon} emoji={props.emoji} size={44} /></span>
        <div><strong>{props.dish}</strong><div className="ds-small ds-muted">Receta para {props.baseServings} → necesitas para <strong>{props.targetServings}</strong> personas</div></div>
      </div>
      <p className="ds-xs ds-muted ds-center">Pista de proporción: {props.baseServings} : {props.targetServings} = cantidad : ? {Number.isInteger(k) ? `(×${k})` : ''}</p>
      <div ref={editorRef} tabIndex={-1} className="act-recipe__active act-stimulus" aria-label={`Ingrediente activo: ${props.ingredients[sel].name}`}>
        <strong>{props.ingredients[sel].name}</strong>
        <p>Base: {fmt(props.ingredients[sel].qty)} {props.ingredients[sel].unit} para {props.baseServings} personas.</p>
        <p>Calcula la cantidad para {props.targetServings} personas.</p>
        {status === 'incorrect' && <p role="status">{wrongQuantity(sel) ? 'Revisa esta cantidad. Usa la misma proporción que el número de personas.' : 'Esta cantidad es correcta.'}</p>}
        {status === 'revealed' && <p>Respuesta mostrada: <strong>{value[sel]} {props.ingredients[sel].unit}</strong></p>}
      </div>
      <div className="act-precision__nav">
        <button type="button" className="ds-btn ds-btn--secondary" aria-label="Ingrediente anterior" disabled={props.ask.indexOf(sel) === 0} onClick={() => setSel(props.ask[props.ask.indexOf(sel) - 1])}>Anterior</button>
        <span>Ingrediente {props.ask.indexOf(sel) + 1} de {props.ask.length}</span>
        <button type="button" className="ds-btn ds-btn--secondary" aria-label="Siguiente ingrediente" disabled={props.ask.indexOf(sel) === props.ask.length - 1} onClick={() => setSel(props.ask[props.ask.indexOf(sel) + 1])}>Siguiente</button>
      </div>
      <NumberPad value={value[sel] ?? ''} onChange={(v) => onChange({ ...value, [sel]: v })} allowDecimal allowFraction disabled={locked} unit={props.ingredients[sel].unit} />
      <details ref={reviewRef}><summary>Consultar receta completa y revisar</summary>
      <table className="act-table act-recipe">
        <thead><tr><th>Ingrediente</th><th>{props.baseServings} pers.</th><th>{props.targetServings} pers.</th></tr></thead>
        <tbody>
          {props.ingredients.map((ing, i) => {
            const asked = props.ask.includes(i);
            const wrong = wrongQuantity(i);
            return (
              <tr key={i} className={asked && sel === i && !locked ? 'is-sel' : ''}>
                <td><Glyph icon={ing.icon} emoji={ing.emoji} size={16} /> {ing.name}</td>
                <td>{fmt(ing.qty)} {ing.unit}</td>
                <td>{wrong && <span className="ds-small">Revisar cantidad</span>}{asked
                  ? <button type="button" className={`act-cellbtn${sel === i ? ' is-on' : ''}${wrong ? ' is-wrong' : ''}`} disabled={locked} onClick={() => edit(i)} aria-label={`Editar ${ing.name}`}>{value[i] || '?'} {ing.unit}</button>
                  : <span className="ds-muted">{fmt(scaled(props, i))} {ing.unit}</span>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </details>
    </div>
  );
}

export default defineActivity<RecipeProps, RecipeValue>({
  type: 'recipe-scaler',
  label: 'Receta proporcional',
  icon: 'Utensils',
  description: 'Regla de tres / proporciones con recetas guatemaltecas (Matemáticas + Nutrición + Productividad).',
  graded: true,
  Component: Recipe,
  isReady: (p, v) => !!v && p.ask.every((i) => parseNumber(v[i] ?? '') !== null),
  check(p, v) {
    const bad = p.ask.filter((i) => !near(parseNumber(v[i])!, scaled(p, i), 0.01));
    const additive = bad.find((i) => near(parseNumber(v[i])!, p.ingredients[i].qty + (p.targetServings - p.baseServings), 0.01));
    return {
      correct: bad.length === 0,
      score: (p.ask.length - bad.length) / p.ask.length,
      feedback: bad.length === 0 ? undefined : additive !== undefined ? 'Sumaste la diferencia de personas. En una proporción se **multiplica** por el mismo factor.' : `Revisa ${bad.length === 1 ? 'la cantidad marcada' : 'las cantidades marcadas'}: todas se multiplican por el mismo número.`,
    };
  },
  solution: (p) => Object.fromEntries(p.ask.map((i) => [i, String(+scaled(p, i).toFixed(3))])),
  validate: (p) => p.ask.filter((i) => !p.ingredients[i]).map((i) => `ask ${i} inexistente`),
});
