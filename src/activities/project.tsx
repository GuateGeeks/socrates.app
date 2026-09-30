import { useEffect } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Rich } from '@/design-system/components';
import { Icon } from '@/design-system/icons';
import { feedback } from '@/design-system/feedback';

export interface ProjectProps {
  /** meta del producto a crear */
  goal: string;
  steps: { title: string; detail: string }[];
  /** evidencia a producir (dibujo, cartel, maqueta, entrevista, video…) */
  evidence: string;
  /** criterios de la rúbrica de autoevaluación */
  rubric: string[];
}
interface PValue { done: boolean[]; rubric: (number | null)[] }

const LEVELS = [
  { v: 1, label: 'En proceso', icon: 'Sprout' },
  { v: 2, label: 'Logrado', icon: 'Leaf' },
  { v: 3, label: 'Destacado', icon: 'TreeDeciduous' },
];

function Project({ props, value, onChange, api }: ActivityProps<ProjectProps, PValue>) {
  const v: PValue = value ?? { done: props.steps.map(() => false), rubric: props.rubric.map(() => null) };
  useEffect(() => { api.setReady(v.done.every(Boolean) && v.rubric.every((r) => r !== null)); }, [JSON.stringify(v)]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="ds-stack">
      <div className="act-proj__goal"><Icon name="Target" size={22} /><div><strong>Meta</strong><p className="ds-small"><Rich text={props.goal} /></p></div></div>
      <ol className="act-proj__steps">
        {props.steps.map((s, i) => (
          <li key={i} className={v.done[i] ? 'is-done' : ''}>
            <label className="act-check">
              <input type="checkbox" checked={v.done[i]} onChange={(e) => { feedback(e.target.checked ? 'correct' : 'tap'); const d = [...v.done]; d[i] = e.target.checked; onChange({ ...v, done: d }); }} />
              <span><strong>{s.title}</strong><br /><span className="ds-small ds-muted"><Rich text={s.detail} /></span></span>
            </label>
          </li>
        ))}
      </ol>
      <div className="act-proj__evidence"><Icon name="Camera" size={20} /><span className="ds-small"><strong>Evidencia:</strong> <Rich text={props.evidence} /></span></div>
      <strong>Autoevalúa tu trabajo</strong>
      {props.rubric.map((r, i) => (
        <div key={i} className="act-rate">
          <p className="ds-small"><strong>{r}</strong></p>
          <div className="act-rate__row" role="radiogroup" aria-label={r}>
            {LEVELS.map((l) => (
              <button key={l.v} type="button" role="radio" aria-checked={v.rubric[i] === l.v} className={`act-rate__opt${v.rubric[i] === l.v ? ' is-on' : ''}`}
                onClick={() => { feedback('select'); const n = [...v.rubric]; n[i] = l.v; onChange({ ...v, rubric: n }); }}>
                <Icon name={l.icon} size={22} /><small>{l.label}</small>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default defineActivity<ProjectProps, PValue>({
  type: 'project',
  label: 'Proyecto',
  icon: 'ClipboardList',
  description: 'Guía de proyecto por pasos con evidencia y rúbrica de autoevaluación (proyectos integradores de unidad).',
  graded: false,
  Component: Project,
  validate: (p) => (p.steps.length < 2 || p.rubric.length < 2 ? ['proyecto requiere ≥2 pasos y ≥2 criterios'] : []),
});
