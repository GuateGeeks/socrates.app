import { useId, useRef, useState } from 'react';
import { Icon } from '@/design-system/icons';
import { Rich } from '@/design-system/components';
import type { AwsLesson } from './course';
import { PRACTICES } from './practice';

export function AwsReader({ lesson, hasPractice, onContinue }: { lesson: AwsLesson; hasPractice: boolean; onContinue(): void }) {
  const [index, setIndex] = useState(0);
  const [indexOpen, setIndexOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const indexId = useId();
  const heading = useRef<HTMLHeadingElement>(null);
  const section = lesson.sections[index];
  const services = PRACTICES[lesson.id]?.targets.filter(target => section.body.includes(target.label)) ?? [];
  const selected = services.find(service => service.id === selectedService);
  const choose = (next: number) => {
    setIndex(next); setIndexOpen(false); setSelectedService(null);
    requestAnimationFrame(() => { heading.current?.focus({ preventScroll: true }); heading.current?.scrollIntoView({ block: 'nearest' }); });
  };
  return <div className="aws-reader">
    <div className="aws-reader__navigation">
      <button className="aws-reader__toggle" type="button" aria-expanded={indexOpen} aria-controls={indexId} onClick={() => setIndexOpen(!indexOpen)}>
        <span><small>Concepto {index + 1} de {lesson.sections.length}</small><strong>{section.heading}</strong></span><Icon name="ChevronDown" size={20} />
      </button>
    <nav id={indexId} className={`aws-reader__index${indexOpen ? ' is-open' : ''}`} aria-label="Secciones de la lección">
      <span className="aws-kicker">Tu recorrido</span>
      {lesson.sections.map((item, i) => <button key={item.heading} aria-current={i === index ? 'step' : undefined} onClick={() => choose(i)}>
        <span className="aws-step-number">{i + 1}</span><span>{item.heading}</span>
      </button>)}
    </nav></div>
    <div className="aws-stack">
      <article className="aws-reading-card">
        <div className="aws-section-head"><span className="aws-kicker">Explora un concepto</span><span className="aws-counter">{index + 1} de {lesson.sections.length}</span></div>
        <div className="aws-meter" role="progressbar" aria-label="Posición en la lectura" aria-valuenow={index + 1} aria-valuemin={0} aria-valuemax={lesson.sections.length}><span style={{ width: `${(index + 1) / lesson.sections.length * 100}%` }} /></div>
        <h2 tabIndex={-1} ref={heading}>{section.heading}</h2>
        <div className="aws-reading">{section.body.split(/\n\s*\n/).map((paragraph, i) => <p key={i}><Rich text={paragraph} /></p>)}</div>
        {services.length > 1 && <aside className="aws-service-explorer" aria-label="Explora los servicios">
          <strong>Explora los servicios de este concepto</strong>
          <p>Selecciona un servicio para recordar qué hace.</p>
          <div className="aws-service-explorer__choices">{services.map(service => <button key={service.id} type="button" aria-pressed={selectedService === service.id} onClick={() => setSelectedService(service.id)}>{service.label}</button>)}</div>
          {selected && <p className="aws-service-explorer__detail" role="status"><strong>{selected.label}:</strong> {selected.hint}.</p>}
        </aside>}
        <div className="aws-reader__controls"><button className="aws-secondary" disabled={index === 0} onClick={() => choose(index - 1)}><Icon name="ArrowLeft" size={18} /> Anterior</button>
          {index + 1 < lesson.sections.length ? <button className="aws-primary" onClick={() => choose(index + 1)}>Siguiente <Icon name="ArrowRight" size={18} /></button>
            : <button className="aws-primary" onClick={onContinue}>{hasPractice ? 'Aplicar lo aprendido' : 'Comprobar lo aprendido'} <Icon name="ArrowRight" size={18} /></button>}
        </div>
      </article>
      <details className="aws-full-reading"><summary><Icon name="BookOpenText" size={20} /> Consultar la lección completa</summary><div className="aws-reading">{lesson.sections.map(item => <section key={item.heading}><h3>{item.heading}</h3><p><Rich text={item.body} /></p></section>)}</div></details>
    </div>
  </div>;
}
