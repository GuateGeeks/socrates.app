import { useRef, useState } from 'react';
import { Icon } from '@/design-system/icons';
import { feedback } from '@/design-system/feedback';
import { AssignmentBoard } from '@/ui/AssignmentBoard';
import { checkPractice, practiceReady, type Practice, type PracticeValue } from './practice';

export function AwsPractice({ practice, onContinue }: { practice: Practice; onContinue(): void }) {
  const initial = (): PracticeValue => ({ assignments: {}, order: practice.flow?.map(step => step.id).reverse() });
  const [value, setValue] = useState<PracticeValue>(initial);
  const [checked, setChecked] = useState(false);
  const [stage, setStage] = useState<'assign' | 'order' | 'review'>('assign');
  const [version, setVersion] = useState(0);
  const [announcement, setAnnouncement] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const resetDialog = useRef<HTMLDialogElement>(null);
  const result = checkPractice(practice, value);
  const locked = checked && result.correct;
  const assigned = practice.items.filter(item => value.assignments?.[item.id]).length;
  const allAssigned = assigned === practice.items.length;
  const changeStage = (next: typeof stage) => {
    setStage(next);
    requestAnimationFrame(() => { heading.current?.focus({ preventScroll: true }); heading.current?.scrollIntoView({ block: 'start', behavior: 'instant' }); });
  };
  const move = (index: number, to: number, control: HTMLElement) => {
    if (locked || !value.order || to < 0 || to >= value.order.length || index === to) return;
    const order = [...value.order];
    const [item] = order.splice(index, 1); order.splice(to, 0, item);
    setValue(current => ({ ...current, order })); setChecked(false);
    setAnnouncement(`Paso movido a la posición ${to + 1}.`);
    requestAnimationFrame(() => {
      const target = control.matches(':disabled') ? control.closest('li')?.querySelector('select') : control;
      target?.focus({ preventScroll: true });
      target?.scrollIntoView({ block: 'center', inline: 'nearest' });
    });
  };
  const resetPractice = () => {
    setValue(initial()); setChecked(false); setVersion(v => v + 1);
    resetDialog.current?.close(); setAnnouncement('Práctica reiniciada.'); changeStage('assign');
  };
  return <section className="aws-practice aws-stack" aria-label="Práctica guiada">
    <header className="aws-title"><span className="aws-kicker">Laboratorio · sin nota</span><h2 ref={heading} tabIndex={-1}>{practice.title}</h2>
      <details className="learning-details"><summary>Consultar el escenario</summary><p>{practice.scenario}</p></details>
    </header>
    {practice.flow && <nav className="learning-toolbar" aria-label="Pasos de la práctica">
      <button className="learning-link" aria-current={stage === 'assign' ? 'step' : undefined} onClick={() => changeStage('assign')}>1. Clasificar</button>
      <button className="learning-link" disabled={!allAssigned} aria-current={stage === 'order' ? 'step' : undefined} onClick={() => changeStage('order')}>2. Ordenar</button>
      <button className="learning-link" disabled={!allAssigned} aria-current={stage === 'review' ? 'step' : undefined} onClick={() => changeStage('review')}>3. Revisar</button>
    </nav>}
    <div hidden={stage === 'order'}>
      <AssignmentBoard key={version} items={practice.items} targets={practice.targets} value={value.assignments ?? {}}
        onChange={assignments => { setValue(current => ({ ...current, assignments })); setChecked(false); }}
        locked={locked} checked={checked} incorrect={result.incorrect} />
    </div>
    {practice.flow && <section hidden={stage === 'assign'} className="aws-flow aws-stack" aria-label="Ordena el recorrido">
      <div className="aws-title"><h3>Ordena el recorrido</h3><p>Usa las flechas o elige una posición.</p></div>
      <ol>{value.order?.map((id, index) => <li key={id}>
        <span className="aws-step-number">{index + 1}</span><span className="ds-grow">{practice.flow!.find(step => step.id === id)!.text}</span>
        <div className="aws-flow__actions"><button type="button" className="aws-icon-button" disabled={locked || index === 0} onClick={event => move(index, index - 1, event.currentTarget)} aria-label={`Subir paso: ${practice.flow!.find(step => step.id === id)!.text}`}><Icon name="ArrowUp" /></button>
          <button type="button" className="aws-icon-button" disabled={locked || index === value.order!.length - 1} onClick={event => move(index, index + 1, event.currentTarget)} aria-label={`Bajar paso: ${practice.flow!.find(step => step.id === id)!.text}`}><Icon name="ArrowDown" /></button>
          <select aria-label={`Posición de ${practice.flow!.find(step => step.id === id)!.text}`} disabled={locked} value={index} onChange={event => move(index, Number(event.target.value), event.currentTarget)}>{value.order!.map((_, position) => <option key={position} value={position}>{position + 1}</option>)}</select>
        </div>
      </li>)}</ol>
    </section>}
    <p className="sr-only" role="status">{announcement}</p>
    {checked && <div className={`aws-feedback${result.correct ? ' is-correct' : ''}`} role="status">
      <strong><Icon name={result.correct ? 'CircleCheck' : 'Lightbulb'} size={20} /> {result.correct ? '¡Lo conectaste todo!' : 'Revisa estas conexiones'}</strong>
      <details><summary>Ver las explicaciones</summary><ul>{practice.items.filter(item => result.correct || result.incorrect.includes(item.id)).map(item => <li key={item.id}><strong>{practice.targets.find(target => target.id === item.target)!.label}:</strong> {item.explanation}</li>)}</ul>
      {practice.flow && (result.correct || !result.flowCorrect) && <p>{practice.flowExplanation}</p>}</details>
      {!result.correct && <p>Edita las respuestas marcadas o cambia el orden y vuelve a comprobar.</p>}
    </div>}
    <div className="aws-actions aws-lesson-actions">
      {locked ? <button className="aws-primary" onClick={onContinue}>Ir a comprobar <Icon name="ArrowRight" size={18} /></button>
        : practice.flow && stage === 'assign' ? <button className="aws-primary" disabled={!allAssigned} onClick={() => changeStage('order')}>Continuar al recorrido <Icon name="ArrowRight" size={18} /></button>
        : practice.flow && stage === 'order' ? <button className="aws-primary" onClick={() => changeStage('review')}>Revisar conexiones <Icon name="ArrowRight" size={18} /></button>
        : <button className="aws-primary" disabled={!practiceReady(practice, value)} onClick={() => { setChecked(true); feedback(result.correct ? 'correct' : 'incorrect'); }}>Comprobar conexiones <Icon name="Check" size={18} /></button>}
      <button className="aws-secondary" onClick={() => { if (assigned || checked || practice.flow) resetDialog.current?.showModal(); else resetPractice(); }}>Reiniciar práctica</button>
    </div>
    <dialog ref={resetDialog} className="aws-reset-dialog" aria-labelledby="aws-reset-title">
      <div className="aws-stack"><h2 id="aws-reset-title">¿Reiniciar la práctica?</h2><p>Se borrarán las conexiones y el orden de este ejercicio.</p><button className="aws-secondary" autoFocus onClick={() => resetDialog.current?.close()}>Seguir practicando</button><button className="aws-primary" onClick={resetPractice}>Sí, reiniciar práctica</button></div>
    </dialog>
  </section>;
}
