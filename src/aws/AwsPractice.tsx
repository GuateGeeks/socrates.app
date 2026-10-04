import { useState } from 'react';
import { Icon } from '@/design-system/icons';
import { feedback } from '@/design-system/feedback';
import { checkPractice, practiceReady, type Practice, type PracticeValue } from './practice';

export function AwsPractice({ practice, onContinue }: { practice: Practice; onContinue(): void }) {
  const initial = (): PracticeValue => ({ assignments: {}, order: practice.flow?.map(step => step.id).reverse() });
  const [value, setValue] = useState<PracticeValue>(initial);
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const result = checkPractice(practice, value);
  const locked = checked && result.correct;
  const assigned = practice.items.filter(item => value.assignments?.[item.id]).length;
  const select = (id: string) => { setSelected(current => current === id ? null : id); feedback('select'); };
  const place = (target: string) => {
    if (!selected || locked) return;
    setValue(current => ({ ...current, assignments: { ...current.assignments, [selected]: target } }));
    setAnnouncement(`${practice.items.find(item => item.id === selected)?.text} → ${practice.targets.find(item => item.id === target)?.label}`);
    setSelected(null);
    setChecked(false);
    feedback('drop');
  };
  const move = (index: number, direction: number) => {
    const order = [...value.order!];
    [order[index], order[index + direction]] = [order[index + direction], order[index]];
    setValue(current => ({ ...current, order }));
    setChecked(false);
    setAnnouncement(`Paso movido a la posición ${index + direction + 1}.`);
  };
  const tile = (id: string) => {
    const item = practice.items.find(item => item.id === id)!;
    const target = value.assignments?.[id];
    return <button key={id} type="button" className={`aws-practice-item${selected === id ? ' is-selected' : ''}${checked ? result.incorrect.includes(id) ? ' is-incorrect' : ' is-correct' : ''}`}
      disabled={locked} aria-pressed={selected === id} aria-label={`${target ? 'Mover' : 'Seleccionar'}: ${item.text}`} onClick={() => select(id)}>
      <Icon name={checked ? result.incorrect.includes(id) ? 'CircleAlert' : 'CircleCheck' : selected === id ? 'Hand' : 'GripVertical'} size={18} />
      <span>{item.text}</span>
    </button>;
  };
  return <section className="aws-practice aws-stack" aria-label="Práctica guiada">
    <header className="aws-title"><span className="aws-kicker">Laboratorio de conceptos · sin nota</span><h2>{practice.title}</h2><p>{practice.scenario}</p></header>
    <div className="aws-instruction"><Icon name={locked ? 'CircleCheck' : 'Hand'} size={22} /><p><strong>{locked ? 'Conexiones comprobadas.' : selected ? 'Ahora elige un destino.' : 'Toca una ficha y después su destino.'}</strong><br />{locked ? 'Lee las explicaciones y continúa a la comprobación cuando quieras.' : 'Puedes tocar una ficha colocada para moverla. Con teclado, usa Tab y Enter.'}</p></div>
    <div className="aws-section-head"><h3>Decisiones por organizar</h3><span className="aws-counter">{assigned}/{practice.items.length} colocadas</span></div>
    <div className="aws-practice-pool">{practice.items.filter(item => !value.assignments?.[item.id]).map(item => tile(item.id))}
      {assigned === practice.items.length && <p className="ds-muted ds-small">{locked ? 'Todas las conexiones son correctas.' : 'Todas las fichas tienen un destino. Comprueba cómo las organizaste.'}</p>}
    </div>
    <div className="aws-targets">{practice.targets.map(target => <section className={`aws-target${selected ? ' is-available' : ''}`} key={target.id}>
      <button className="aws-target__head" type="button" aria-label={`Colocar en ${target.label}`} disabled={!selected || locked} onClick={() => place(target.id)}>
        <span className="aws-domain__icon"><Icon name={target.icon} size={22} /></span><span><strong>{target.label}</strong><small>{target.hint}</small></span><Icon name="Plus" size={18} />
      </button>
      <div className="aws-target__items">{practice.items.filter(item => value.assignments?.[item.id] === target.id).map(item => tile(item.id))}
        {!practice.items.some(item => value.assignments?.[item.id] === target.id) && <p className="aws-target__empty">Coloca aquí las fichas relacionadas</p>}
      </div>
    </section>)}</div>
    {practice.flow && <section className="aws-flow aws-stack" aria-label="Ordena el recorrido">
      <div className="aws-title"><h3>Ordena el recorrido</h3><p>Usa las flechas para reconstruir el flujo descrito en el escenario.</p></div>
      <ol>{value.order?.map((id, index) => <li key={id}>
        <span className="aws-step-number">{index + 1}</span><span className="ds-grow">{practice.flow!.find(step => step.id === id)!.text}</span>
        <div className="aws-flow__actions"><button className="aws-icon-button" disabled={locked || index === 0} onClick={() => move(index, -1)} aria-label={`Subir paso: ${practice.flow!.find(step => step.id === id)!.text}`}><Icon name="ArrowUp" /></button>
          <button className="aws-icon-button" disabled={locked || index === value.order!.length - 1} onClick={() => move(index, 1)} aria-label={`Bajar paso: ${practice.flow!.find(step => step.id === id)!.text}`}><Icon name="ArrowDown" /></button></div>
      </li>)}</ol>
    </section>}
    <p className="sr-only" role="status">{announcement}</p>
    {checked && <div className={`aws-feedback${result.correct ? ' is-correct' : ''}`} role="status">
      <strong><Icon name={result.correct ? 'CircleCheck' : 'Lightbulb'} size={20} /> {result.correct ? '¡Lo conectaste todo!' : 'Revisa estas conexiones'}</strong>
      <ul>{practice.items.filter(item => result.correct || result.incorrect.includes(item.id)).map(item => <li key={item.id}><strong>{practice.targets.find(target => target.id === item.target)!.label}:</strong> {item.explanation}</li>)}</ul>
      {practice.flow && (result.correct || !result.flowCorrect) && <p>{practice.flowExplanation}</p>}
      {!result.correct && <p>Mueve las fichas o los pasos que quieras corregir y vuelve a comprobar.</p>}
    </div>}
    <div className="aws-actions">
      {locked ? <button className="aws-primary" onClick={onContinue}>Ir a comprobar <Icon name="ArrowRight" size={18} /></button>
        : <button className="aws-primary" disabled={!practiceReady(practice, value)} onClick={() => { setChecked(true); setSelected(null); feedback(result.correct ? 'correct' : 'incorrect'); }}>Comprobar conexiones <Icon name="Check" size={18} /></button>}
      <button className="aws-secondary" onClick={() => { setValue(initial()); setChecked(false); setSelected(null); setAnnouncement('Práctica reiniciada.'); }}>Reiniciar práctica</button>
    </div>
  </section>;
}
