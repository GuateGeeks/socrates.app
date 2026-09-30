import { useEffect, useRef, useState } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Rich } from '@/design-system/components';
import { Glyph } from '@/design-system/icons';
import { feedback } from '@/design-system/feedback';
import { play } from '@/design-system/motion';

/** Ejemplo resuelto paso a paso: el niño revela cada paso (con su "por qué") a su propio ritmo. */
export interface WorkedExampleProps {
  icon?: string;
  /** enunciado del problema o situación */
  problem: string;
  /** pasos de la solución, en orden */
  steps: { text: string; why?: string }[];
  /** respuesta o conclusión final (se muestra al revelar el último paso) */
  answer?: string;
  /** consejo o regla general que se lleva el estudiante */
  tip?: string;
}

function WorkedExample({ props, api }: ActivityProps<WorkedExampleProps, undefined>) {
  const [shown, setShown] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);
  const done = shown >= props.steps.length;
  useEffect(() => { api.setReady(done); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const el = listRef.current?.children[shown - 1] as HTMLElement | undefined;
    if (el) play(el, 'enter.item');
  }, [shown]);
  return (
    <div className="ds-stack">
      <div className="we-problem">
        {props.icon && <Glyph icon={props.icon} size={28} />}
        <div><Rich text={props.problem} /></div>
      </div>
      <ol ref={listRef} className="we-steps">
        {props.steps.slice(0, shown).map((s, i) => (
          <li key={i}>
            <span className="we-num">{i + 1}</span>
            <div><Rich text={s.text} />{s.why && <div className="ds-xs ds-muted we-why"><Rich text={`¿Por qué? ${s.why}`} /></div>}</div>
          </li>
        ))}
      </ol>
      {!done ? (
        <button type="button" className="we-next" onClick={() => { feedback('select'); setShown((n) => n + 1); }}>
          {shown === 0 ? 'Ver el primer paso' : `Siguiente paso (${shown + 1} de ${props.steps.length})`}
        </button>
      ) : (
        <>
          {props.answer && <div className="we-answer"><Glyph icon="BadgeCheck" size={20} /> <Rich text={props.answer} /></div>}
          {props.tip && <div className="we-tip"><Glyph icon="Lightbulb" size={18} /> <Rich text={props.tip} /></div>}
        </>
      )}
    </div>
  );
}

export default defineActivity<WorkedExampleProps, undefined>({
  type: 'worked-example',
  label: 'Ejemplo resuelto',
  icon: 'ListOrdered',
  description: 'Problema resuelto paso a paso: el estudiante revela cada paso y su porqué. Enseñanza explícita antes de practicar.',
  graded: false,
  Component: WorkedExample,
  validate: (p) => [...(!p.problem ? ['problem vacío'] : []), ...(p.steps?.length >= 2 ? [] : ['se necesitan ≥2 pasos'])],
  example: { fase: 'construir', areas: ['mat'], cnb: [], prompt: 'Mira cómo se resuelve.', props: {
    icon: 'Triangle', problem: 'Un triángulo tiene ángulos de 90° y 35°. ¿Cuánto mide el tercero?',
    steps: [{ text: 'Los tres ángulos de un triángulo suman **180°**.' }, { text: 'Sumo los que conozco: 90° + 35° = **125°**.' }, { text: 'Resto: 180° − 125° = **55°**.', why: 'lo que falta para llegar a 180°' }],
    answer: 'El tercer ángulo mide **55°**.', tip: 'Siempre puedes comprobar: 90 + 35 + 55 = 180.' } },
});
