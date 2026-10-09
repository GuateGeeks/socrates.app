import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/design-system/icons';
import { feedback } from '@/design-system/feedback';
import type { Practice } from './practice';

type AnswerState = 'answering' | 'correct' | 'incorrect' | 'complete';

/** One decision, one check and one next action, as in the Sexto Primaria lesson player. */
export function AwsPractice({ practice, onContinue }: { practice: Practice; onContinue(): void }) {
  const total = practice.items.length + (practice.flow?.length ?? 0);
  const [index, setIndex] = useState(0);
  const [selection, setSelection] = useState<string | null>(null);
  const [state, setState] = useState<AnswerState>('answering');
  const [attempt, setAttempt] = useState(0);
  const [firstTry, setFirstTry] = useState(0);
  const [solvedFlow, setSolvedFlow] = useState<string[]>([]);
  const question = useRef<HTMLHeadingElement>(null);
  const response = useRef<HTMLDivElement>(null);
  const isFlow = index >= practice.items.length;
  const item = isFlow ? undefined : practice.items[index];
  const flowStep = isFlow ? practice.flow?.[index - practice.items.length] : undefined;
  const targetGroup = practice.targets.find(target => target.id === item?.target)?.group;
  const options = isFlow ? practice.flow?.filter(step => !solvedFlow.includes(step.id)) ?? []
    : practice.targets.filter(target => !targetGroup || target.group === targetGroup);

  useEffect(() => {
    if (state === 'answering') question.current?.focus({ preventScroll: true });
    else if (state === 'correct' || state === 'incorrect') response.current?.focus({ preventScroll: true });
  }, [index, state]);

  const check = () => {
    if (!selection || state !== 'answering') return;
    const correct = selection === (item?.target ?? flowStep?.id);
    if (correct && attempt === 0) setFirstTry(value => value + 1);
    setState(correct ? 'correct' : 'incorrect');
    feedback(correct ? 'correct' : 'incorrect');
  };
  const next = () => {
    if (flowStep) setSolvedFlow(current => [...current, flowStep.id]);
    setSelection(null); setAttempt(0);
    if (index + 1 === total) { setState('complete'); feedback('complete'); }
    else { setIndex(value => value + 1); setState('answering'); }
  };
  const reset = () => {
    setIndex(0); setSelection(null); setState('answering'); setAttempt(0); setFirstTry(0); setSolvedFlow([]);
  };

  if (state === 'complete') return <section className="aws-practice aws-practice-result aws-stack" aria-label="Resultado de la práctica">
    <span className="aws-result__icon"><Icon name="CircleCheck" size={42} /></span>
    <span className="aws-kicker">Práctica terminada</span>
    <h2>{total} de {total} decisiones resueltas</h2>
    <p>{firstTry} {firstTry === 1 ? 'acierto' : 'aciertos'} al primer intento. Ya puedes comprobar lo que aprendiste.</p>
    <button className="aws-primary" onClick={onContinue}>Continuar a las preguntas <Icon name="ArrowRight" size={18} /></button>
    <button className="aws-secondary" onClick={reset}>Practicar de nuevo</button>
  </section>;

  return <section className="aws-practice aws-practice-player" aria-label="Práctica guiada">
    <header className="aws-practice-player__head">
      <span className="aws-kicker">Práctica guiada · sin nota</span>
      <h2>{practice.title}</h2>
      <details className="learning-details"><summary>Consultar el escenario</summary><p>{practice.scenario}</p></details>
    </header>
    <div className="aws-practice-player__progress">
      <span>Decisión {index + 1} de {total}</span>
      <div className="aws-meter" role="progressbar" aria-label="Avance de la práctica" aria-valuenow={index + (state === 'correct' ? 1 : 0)} aria-valuemin={0} aria-valuemax={total}>
        <span style={{ width: `${(index + (state === 'correct' ? 1 : 0)) / total * 100}%` }} />
      </div>
    </div>
    <div className="aws-practice-player__card">
      <span className="aws-kicker">{isFlow ? 'Ordena el recorrido' : 'Elige una respuesta'}</span>
      <h3 ref={question} tabIndex={-1}>{isFlow ? `¿Qué sucede ${['primero', 'después', 'al final'][index - practice.items.length] ?? 'ahora'}?` : '¿Con qué concepto se relaciona?'}</h3>
      {item && <p className="aws-practice-question">{item.text}</p>}
      <div className="aws-practice-choices" role="group" aria-label="Respuestas disponibles">
        {options.map(option => <button key={option.id} type="button" disabled={state !== 'answering'} aria-pressed={selection === option.id}
          className={selection === option.id ? 'is-selected' : ''} onClick={() => { setSelection(option.id); feedback('select'); }}>
          {'icon' in option && <Icon name={option.icon} size={22} />}
          <span>{'label' in option ? option.label : option.text}</span>
        </button>)}
      </div>
      {(state === 'correct' || state === 'incorrect') && <div ref={response} tabIndex={-1} className={`aws-practice-response${state === 'correct' ? ' is-correct' : ' is-incorrect'}`} role="status">
        <strong><Icon name={state === 'correct' ? 'CircleCheck' : 'Lightbulb'} size={20} /> {state === 'correct' ? '¡Muy bien!' : 'Inténtalo de nuevo'}</strong>
        <p>{item?.explanation ?? practice.flowExplanation}</p>
      </div>}
    </div>
    <div className={`aws-practice-player__actions${state === 'correct' ? ' is-correct' : state === 'incorrect' ? ' is-incorrect' : ''}`}>
      {state === 'answering' ? <button className="aws-primary" disabled={!selection} onClick={check}>Comprobar</button>
        : state === 'incorrect' ? <button className="aws-primary" onClick={() => { setSelection(null); setAttempt(value => value + 1); setState('answering'); }}>Volver a intentar</button>
        : <button className="aws-primary" onClick={next}>{index + 1 === total ? 'Ver resultado' : 'Continuar'} <Icon name="ArrowRight" size={18} /></button>}
    </div>
  </section>;
}
