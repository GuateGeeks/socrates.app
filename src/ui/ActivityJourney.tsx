import { useEffect, useRef, type ReactNode } from 'react';
import { Button, Rich } from '@/design-system/components';

/** Local navigation only: answer values and completion rules belong to each activity. */
export function ActivityJourney({ index, count, label = 'Paso', onNavigate, onReview, canAdvance = true, canReview = true, nextVariant = 'secondary', focusOnMount = false, children }: {
  index: number; count: number; label?: string; onNavigate: (index: number) => void;
  onReview?: () => void; canAdvance?: boolean; canReview?: boolean; nextVariant?: 'primary' | 'secondary'; focusOnMount?: boolean; children: ReactNode;
}) {
  const heading = useRef<HTMLParagraphElement>(null);
  const previous = useRef<number | undefined>(focusOnMount ? undefined : index);
  useEffect(() => {
    if (previous.current !== index) heading.current?.focus();
    previous.current = index;
  }, [index]);
  return <section className="activity-journey ds-stack">
    <p className="ds-small ds-muted" ref={heading} tabIndex={-1} aria-live="polite">{label} {index + 1} de {count}</p>
    {children}
    <nav className="activity-journey__nav" aria-label="Navegación de la actividad">
      {index > 0 && <Button variant="secondary" onClick={() => onNavigate(index - 1)}>Anterior</Button>}
      {index < count - 1 && <Button variant={nextVariant} disabled={!canAdvance} onClick={() => onNavigate(index + 1)}>Siguiente</Button>}
      {onReview && canReview && <Button variant="secondary" onClick={onReview}>Revisar mis respuestas</Button>}
    </nav>
  </section>;
}

export function ActivityReview({ items, onEdit, readOnly = false }: { items: { label: string; answer: string; feedback?: string }[]; onEdit: (index: number) => void; readOnly?: boolean }) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => { heading.current?.focus(); }, []);
  return <section className="activity-journey ds-stack">
    <h3 ref={heading} tabIndex={-1}>Revisar mis respuestas</h3>
    <ol className="activity-journey__review">{items.map((item, i) => <li key={i}>
      <div><strong><Rich text={item.label} /></strong><p><Rich text={item.answer} /></p>{item.feedback && <p className="ds-small"><strong>{item.feedback}</strong></p>}</div>
      <Button variant="secondary" aria-label={`${readOnly ? 'Ver' : 'Editar'} respuesta ${i + 1}`} onClick={() => onEdit(i)}>{readOnly ? 'Ver' : 'Editar'}</Button>
    </li>)}</ol>
  </section>;
}
