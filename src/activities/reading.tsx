import { useState } from 'react';
import { ActivityJourney, ActivityReview } from '@/ui/ActivityJourney';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Button, Rich, Tile } from '@/design-system/components';

export interface ReadingProps {
  /** título del texto (opcional) */
  heading?: string;
  /** texto de lectura; párrafos separados por línea en blanco */
  passage: string;
  /** tipo de texto (noticia, cuento, instructivo, poema…) — se muestra como etiqueta */
  genre?: string;
  questions: { q: string; options: { id: string; text: string }[]; correct: string; why?: string }[];
}
type ReadingValue = Record<number, string>;

function Reading({ props, value = {}, onChange, status }: ActivityProps<ReadingProps, ReadingValue>) {
  const locked = status === 'correct' || status === 'revealed';
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'reading' | 'questions' | 'review'>('reading');
  const passage = <article className="act-read">
        {props.genre && <span className="act-read__genre">{props.genre}</span>}
        {props.heading && <h3>{props.heading}</h3>}
        {props.passage.split(/\n\s*\n/).map((para, i) => <p key={i}><Rich text={para} /></p>)}
      </article>;
  if (phase === 'reading') return <div className="activity-journey ds-stack">{passage}<Button onClick={() => setPhase('questions')}>Comenzar preguntas</Button></div>;
  if (phase === 'review') return <ActivityReview readOnly={locked} items={props.questions.map((q, i) => ({ label: q.q, answer: q.options.find(o => o.id === value[i])?.text ?? 'Sin responder', feedback: status === 'incorrect' && value[i] !== undefined && value[i] !== q.correct ? 'Revisar esta respuesta' : undefined }))} onEdit={i => { setIndex(i); setPhase('questions'); }} />;
  return (
    <ActivityJourney focusOnMount index={index} count={props.questions.length} label="Pregunta" onNavigate={setIndex} onReview={() => setPhase('review')}>
      <details><summary>Consultar texto</summary>{passage}</details>
      {props.questions.map((q, qi) => qi === index && (
        <div key={qi} className="ds-stack" style={{ gap: 'var(--sp-2)' }}>
          <p><strong>{qi + 1}. <Rich text={q.q} /></strong></p>
          {q.options.map((o) => {
            const sel = value[qi] === o.id;
            const st = status === 'incorrect' && sel && o.id !== q.correct ? 'incorrect' : locked && o.id === q.correct ? 'correct' : undefined;
            return <Tile key={o.id} selected={sel} state={st} disabled={locked} onClick={() => onChange({ ...value, [qi]: o.id })}><Rich text={o.text} /></Tile>;
          })}
          {locked && q.why && <p className="ds-xs ds-muted"><Rich text={q.why} /></p>}
        </div>
      ))}
    </ActivityJourney>
  );
}

export default defineActivity<ReadingProps, ReadingValue>({
  type: 'reading',
  label: 'Lectura comprensiva',
  icon: 'BookOpenText',
  description: 'Texto (noticia, cuento, instructivo, documento) con preguntas literales, inferenciales y críticas.',
  graded: true,
  Component: Reading,
  isReady: (p, v) => !!v && p.questions.every((_, i) => v[i] !== undefined),
  check(p, v) {
    const bad = p.questions.map((q, i) => (v[i] === q.correct ? -1 : i)).filter((i) => i >= 0);
    return { correct: bad.length === 0, score: (p.questions.length - bad.length) / p.questions.length, feedback: bad.length ? `Revisa la pregunta ${bad.map((i) => i + 1).join(' y ')}. Vuelve a leer el texto con atención.` : undefined };
  },
  solution: (p) => Object.fromEntries(p.questions.map((q, i) => [i, q.correct])),
  validate: (p) => p.questions.flatMap((q, i) => (q.options.some((o) => o.id === q.correct) ? [] : [`pregunta ${i + 1}: correcta inexistente`])),
});
