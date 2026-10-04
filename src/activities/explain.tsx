import { useEffect, useRef, useState } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Rich } from '@/design-system/components';
import { play, stagger } from '@/design-system/motion';
import { feedback } from '@/design-system/feedback';
import { Glyph } from '@/design-system/icons';

export interface ExplainProps {
  emoji?: string;
  /** ícono Lucide grande (preferido sobre emoji) */
  icon?: string;
  body: string;
  /** tarjetas "toca para descubrir": obligan a interactuar antes de continuar */
  reveal?: { emoji?: string; icon?: string; front: string; back: string }[];
}

function Explain({ props, api }: ActivityProps<ExplainProps, undefined>) {
  const [open, setOpen] = useState<boolean[]>(() => (props.reveal ?? []).map(() => false));
  const [seen, setSeen] = useState<boolean[]>(() => (props.reveal ?? []).map(() => false));
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => { api.setReady(seen.every(Boolean)); }, [seen]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { if (listRef.current) stagger(listRef.current.children, 'enter.item', 70); }, []);
  return (
    <div className="ds-stack activity-journey">
      {(props.icon || props.emoji) && <div className="act-hero" aria-hidden><Glyph icon={props.icon} emoji={props.emoji} size={56} /></div>}
      <p className="act-body"><Rich text={props.body} /></p>
      {props.reveal && (
        <div ref={listRef} className="act-reveal-grid">
          {props.reveal.map((c, i) => (
            <button key={i} type="button" className={`act-flip${open[i] ? ' is-open' : ''}`} aria-expanded={open[i]}
              onClick={(e) => { feedback('select'); play(e.currentTarget, 'pop'); setOpen((o) => o.map((v, j) => (j === i ? !v : v))); setSeen((o) => o.map((v, j) => j === i ? true : v)); }}>
              <span className="act-flip__emoji" aria-hidden>{c.icon || c.emoji ? <Glyph icon={c.icon} emoji={c.emoji} size={30} /> : <Glyph icon="HelpCircle" size={30} />}</span>
              <strong>{c.front}</strong>
              {open[i] ? <span className="act-flip__back"><Rich text={c.back} /></span> : <span className="ds-xs ds-muted">{seen[i] ? 'Volver a consultar' : 'Toca para descubrir'}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default defineActivity<ExplainProps, undefined>({
  type: 'explain',
  label: 'Explicación / Descubre',
  icon: 'Lightbulb',
  description: 'Texto breve con tarjetas "toca para descubrir". Activa saberes previos y contexto.',
  graded: false,
  Component: Explain,
  validate: (p) => (p.body ? [] : ['body vacío']),
  example: { fase: 'explorar', areas: ['ccss'], cnb: [], prompt: '¿Sabías que…?', props: { emoji: '🌽', body: 'Los mayas usaban un sistema **vigesimal**.', reveal: [{ emoji: '•', front: 'Punto', back: 'Vale 1' }, { emoji: '—', front: 'Barra', back: 'Vale 5' }] } },
});
