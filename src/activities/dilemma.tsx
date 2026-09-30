import { useEffect, useRef } from 'react';
import { defineActivity } from '@/core/registry';
import type { ActivityProps } from '@/core/types';
import { Chip, Rich, Tile } from '@/design-system/components';
import { play } from '@/design-system/motion';
import { Glyph } from '@/design-system/icons';

export interface DilemmaProps {
  scene: { emoji?: string; icon?: string; text: string };
  options: { id: string; emoji?: string; icon?: string; text: string; consequence: string; values: string[]; constructive: boolean }[];
}

/**
 * Dilema / historia ramificada: no hay "incorrecto", hay CONSECUENCIAS.
 * Evalúa lo actitudinal (ámbitos ser/convivir): se registra la elección para diálogo con el docente.
 */
function Dilemma({ props, value, onChange, api }: ActivityProps<DilemmaProps, string>) {
  const chosen = props.options.find((o) => o.text === value);
  const cRef = useRef<HTMLDivElement>(null);
  useEffect(() => { api.setReady(!!chosen); if (chosen) play(cRef.current, 'enter.screen'); }, [chosen?.id]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="ds-stack">
      <div className="act-scene"><span className="act-scene__emoji" aria-hidden><Glyph icon={props.scene.icon} emoji={props.scene.emoji} size={40} /></span><Rich text={props.scene.text} /></div>
      <div className="ds-stack" style={{ gap: 'var(--sp-2)' }}>
        {props.options.map((o) => <Tile key={o.id} emoji={o.emoji} icon={o.icon} selected={chosen?.id === o.id} onClick={() => onChange(o.text)}>{o.text}</Tile>)}
      </div>
      {chosen && (
        <div ref={cRef} className={`act-consequence${chosen.constructive ? ' is-good' : ' is-think'}`}>
          <strong>{chosen.constructive ? '✨ Lo que pasa después…' : '🤔 Lo que pasa después…'}</strong>
          <p><Rich text={chosen.consequence} /></p>
          <div className="ds-row" style={{ flexWrap: 'wrap', gap: 6 }}>{chosen.values.map((v) => <Chip key={v} color={chosen.constructive ? 'var(--c-ok)' : 'var(--c-hint)'}>{v}</Chip>)}</div>
          {!chosen.constructive && <p className="ds-small ds-muted">Puedes explorar otra decisión para comparar.</p>}
        </div>
      )}
    </div>
  );
}

export default defineActivity<DilemmaProps, string>({
  type: 'dilemma',
  label: 'Dilema / decisión',
  icon: 'Compass',
  description: 'Escenario con decisiones y consecuencias (Formación Ciudadana, cultura de paz). Sin respuesta "incorrecta".',
  graded: false,
  Component: Dilemma,
  validate: (p) => (p.options.some((o) => o.constructive) ? [] : ['ninguna opción constructiva']),
});
