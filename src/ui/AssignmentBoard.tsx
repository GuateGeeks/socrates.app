import { useEffect, useId, useRef, useState } from 'react';
import { Rich } from '@/design-system/components';
import { Glyph, Icon } from '@/design-system/icons';
import { feedback } from '@/design-system/feedback';

interface Item { id: string; text: string; icon?: string; emoji?: string }
interface Target { id: string; label: string; hint?: string; icon?: string; emoji?: string }

/** The answer stays with the caller; this component owns only selection and review. */
export function AssignmentBoard({ items, targets, value, onChange, locked = false, checked = false, incorrect = [], oneToOne = false, noun = 'Ficha' }: {
  items: Item[]; targets: Target[]; value: Record<string, string>;
  onChange(value: Record<string, string>): void;
  locked?: boolean; checked?: boolean; incorrect?: string[]; oneToOne?: boolean; noun?: string;
}) {
  const id = useId();
  const [editing, setEditing] = useState<string | null>(null);
  const [review, setReview] = useState(false);
  const [last, setLast] = useState<{ before: Record<string, string>; item: string } | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const work = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const [compactContext, setCompactContext] = useState(false);
  const pending = items.filter(item => !value[item.id]);
  const active = !locked && (items.find(item => item.id === editing) ?? pending[0]);
  const assigned = items.length - pending.length;
  useEffect(() => {
    const element = card.current;
    if (!element) { setCompactContext(false); return; }
    const measure = () => {
      if (element.checkVisibility()) setCompactContext(element.getBoundingClientRect().height > window.innerHeight * .25);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    window.addEventListener('resize', measure);
    measure();
    return () => { observer.disconnect(); window.removeEventListener('resize', measure); };
  }, [active && active.id]);
  const focusWork = () => requestAnimationFrame(() => {
    const element = work.current;
    if (!element?.checkVisibility()) return;
    element.focus({ preventScroll: true });
    element.scrollIntoView({ block: 'nearest', behavior: 'instant' });
  });
  const place = (target: string | null) => {
    if (!active || locked) return;
    const next = { ...value };
    const displaced = oneToOne && target ? items.find(item => item.id !== active.id && value[item.id] === target) : undefined;
    if (displaced) delete next[displaced.id];
    if (target) next[active.id] = target; else delete next[active.id];
    setLast({ before: { ...value }, item: active.id });
    onChange(next);
    setAnnouncement(target ? `${active.text} → ${targets.find(item => item.id === target)?.label}.${displaced ? ` ${displaced.text} queda pendiente.` : ''}` : `${active.text} vuelve a pendientes.`);
    setEditing(null);
    setReview(false);
    feedback('drop');
    focusWork();
  };
  const edit = (item: string) => { setEditing(item); setReview(false); focusWork(); };
  const showReview = review || !active || checked;
  return <div className="assignment-board">
    <div className="learning-toolbar">
      <span className="ds-small" aria-label={`${assigned} de ${items.length} colocadas`}><strong>{assigned}/{items.length}</strong> colocadas</span>
      <button type="button" className="learning-link" aria-expanded={showReview} aria-controls={`${id}-review`} onClick={() => setReview(!showReview)} disabled={!active || checked}>Revisar mis respuestas</button>
    </div>
    <div ref={work} tabIndex={-1} className="assignment-work" aria-label={active ? `${noun} actual` : 'Resumen de respuestas'}>
      {active && <>
        <div ref={card} tabIndex={-1} className={`assignment-active${compactContext ? ' assignment-active--in-flow' : ''}`} aria-live="polite" aria-atomic="true">
          <span className="ds-xs ds-muted">{noun} {items.indexOf(active) + 1} de {items.length}{value[active.id] ? ' · Editando' : ''}</span>
          <p><Glyph icon={active.icon} emoji={active.emoji} size={22} /><Rich text={active.text} /></p>
          {value[active.id] && <span className="ds-small">Destino actual: {targets.find(target => target.id === value[active.id])?.label}</span>}
        </div>
        {compactContext && <button type="button" className="learning-link assignment-context" onClick={() => {
          card.current?.focus({ preventScroll: true });
          card.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
        }}>{noun} {items.indexOf(active) + 1} de {items.length} · Consultar ficha</button>}
        <p className="ds-small ds-muted">{oneToOne ? 'Elige su pareja.' : 'Elige un destino.'}</p>
        <div className="assignment-targets" role="group" aria-label={oneToOne ? 'Parejas disponibles' : 'Destinos disponibles'}>
          {targets.map(target => {
            const previous = oneToOne ? items.find(item => value[item.id] === target.id && item.id !== active.id) : undefined;
            return <button type="button" key={target.id} className="assignment-target" aria-label={`Colocar en ${target.label}`} aria-pressed={value[active.id] === target.id} onClick={() => place(target.id)}>
              <Glyph icon={target.icon} emoji={target.emoji} size={20} /><span><Rich text={target.label} />{previous && <small>Reemplazará la pareja de: {previous.text}</small>}</span>
            </button>;
          })}
        </div>
        {targets.some(target => target.hint) && <details className="learning-details"><summary>Ayuda sobre los destinos</summary>{targets.map(target => <p key={target.id}><strong>{target.label}:</strong> {target.hint}</p>)}</details>}
        {editing && <div className="learning-toolbar">
          <button className="learning-link" type="button" onClick={() => { setEditing(null); focusWork(); }}>Cancelar edición</button>
          {value[active.id] && <button className="learning-link" type="button" onClick={() => place(null)}>Devolver a pendientes</button>}
        </div>}
      </>}
      {!active && <p className="assignment-complete"><Icon name={locked ? 'CircleCheck' : 'ListChecks'} size={22} />{locked ? 'Respuestas comprobadas.' : 'Todo colocado. Revisa tus respuestas antes de comprobar.'}</p>}
    </div>
    <div className="learning-toolbar">
      <p className="ds-small assignment-announcement" role="status">{announcement}</p>
      {last && !locked && <button type="button" className="learning-link" onClick={() => { onChange(last.before); setEditing(last.item); setLast(null); setReview(false); setAnnouncement('Última asignación deshecha.'); focusWork(); }}>Deshacer</button>}
    </div>
    <section id={`${id}-review`} className="assignment-review" hidden={!showReview} aria-label="Tus respuestas">
      {targets.map(target => {
        const group = items.filter(item => value[item.id] === target.id);
        return <details key={target.id} className="learning-details" open={checked || undefined}>
          <summary>{target.label} <span className="ds-muted">({group.length})</span></summary>
          {group.length === 0 && <p className="ds-small ds-muted">Sin fichas.</p>}
          {group.map(item => <div key={item.id} className={`assignment-review-row${checked ? incorrect.includes(item.id) ? ' is-incorrect' : ' is-correct' : ''}`}>
            <span><Rich text={item.text} />{checked && <small><Icon name={incorrect.includes(item.id) ? 'CircleAlert' : 'CircleCheck'} size={16} />{incorrect.includes(item.id) ? 'Revisar esta respuesta' : 'Correcta'}</small>}</span>
            {!locked && <button type="button" className="learning-link" aria-label={`Editar: ${item.text}`} onClick={() => edit(item.id)}>Editar</button>}
          </div>)}
        </details>;
      })}
      {pending.length > 0 && <details className="learning-details"><summary>Pendientes ({pending.length})</summary>{pending.map(item => <div className="assignment-review-row" key={item.id}><span>{item.text}</span><button type="button" className="learning-link" onClick={() => edit(item.id)}>Elegir</button></div>)}</details>}
    </section>
  </div>;
}
