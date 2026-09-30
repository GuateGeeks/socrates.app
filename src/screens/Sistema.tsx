import { useReducer, useRef, useState } from 'react';
import { listActivities } from '@/core/registry';
import { canSubmit, initialStep, stepReducer } from '@/core/engine';
import type { ActivityDefinition, StepBase } from '@/core/types';
import { AREAS, WHEEL_CICLO_II } from '@/cnb/model';
import { Button, Card, Chip, ProgressBar, Rich, SectionTitle, Tile, useEnter } from '@/design-system/components';
import { Mascot, type MascotMood } from '@/design-system/components/Mascot';
import { confetti } from '@/design-system/components/Confetti';
import { duration, easing, play, presets, semantic, type Preset, type PresetName } from '@/design-system/motion';
import { feedback, sfx, type Sfx } from '@/design-system/feedback';
import { allLessons } from '@/content';
import { Icon } from '@/design-system/icons';
import { ICON_NAMES } from '@/design-system/icons.generated';

/** Galería viva del sistema de diseño: tokens, movimiento, sonido y catálogo de actividades. */
export function Sistema() {
  const ref = useEnter<HTMLDivElement>('enter.screen');
  const [mood, setMood] = useState<MascotMood>('happy');
  const usage = new Map<string, number>();
  for (const { lesson } of allLessons()) for (const s of lesson.steps) usage.set(s.type, (usage.get(s.type) ?? 0) + 1);
  return (
    <div ref={ref} className="ds-page ds-stack">
      <div>
        <h1>Sistema de diseño</h1>
        <p className="ds-small ds-muted">Tokens, movimiento, retroalimentación y actividades. Todo lo que ves aquí se usa en las lecciones.</p>
      </div>

      <Card>
        <SectionTitle>Color · áreas del CNB (Figura 2)</SectionTitle>
        <div className="sy__swatches">
          {WHEEL_CICLO_II.map((a) => <div key={a}><i style={{ background: AREAS[a].color }} /><small><Icon name={AREAS[a].icon} size={14} /> {AREAS[a].corto}</small><code className="ds-xs">--area-{a}</code></div>)}
          {['--c-maiz', '--c-jade', '--c-ok', '--c-bad', '--c-hint'].map((v) => <div key={v}><i style={{ background: `var(${v})` }} /><code className="ds-xs">{v}</code></div>)}
        </div>
      </Card>

      <Card>
        <SectionTitle>Tipografía y componentes</SectionTitle>
        <div className="ds-stack" style={{ marginTop: 10 }}>
          <h1>Título 1 · Nunito Black</h1><h2>Título 2</h2><p>Texto de lectura con <strong>énfasis</strong>.</p>
          <div className="ds-row" style={{ flexWrap: 'wrap' }}>
            <Button>Primario</Button><Button variant="secondary">Secundario</Button><Button variant="ok">Correcto</Button><Button variant="bad">Error</Button><Button variant="maiz">Maíz</Button><Button disabled>Inactivo</Button>
          </div>
          <Tile icon="Wheat" onClick={() => {}}>Tile de opción</Tile>
          <Tile icon="CircleCheck" state="correct">Tile correcto</Tile>
          <ProgressBar value={0.62} />
          <div className="ds-row" style={{ flexWrap: 'wrap', gap: 6 }}><Chip>Chip</Chip><Chip color="var(--area-mat)" solid>Sólido</Chip></div>
        </div>
      </Card>

      <Card>
        <SectionTitle>Movimiento · presets (toca para reproducir)</SectionTitle>
        <p className="ds-xs ds-muted">Duraciones: {Object.entries(duration).map(([k, v]) => `${k} ${v}ms`).join(' · ')}</p>
        <div className="sy__motion">
          {(Object.keys(presets) as PresetName[]).map((n) => <MotionDemo key={n} name={n} />)}
        </div>
        <SectionTitle>Semántica pedagógica → preset</SectionTitle>
        <div className="ds-row" style={{ flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
          {Object.entries(semantic).map(([k, v]) => <Chip key={k} color="var(--c-hint)">{k} → {v}</Chip>)}
        </div>
        <p className="ds-xs ds-muted" style={{ marginTop: 8 }}>Curvas: {Object.keys(easing).join(', ')}. Con "movimiento reducido" todos degradan a fundidos.</p>
      </Card>

      <Card>
        <SectionTitle>Íconos · Lucide ({ICON_NAMES.length} en uso)</SectionTitle>
        <p className="ds-xs ds-muted">Solo se empaquetan los íconos que usa la app (<code>npm run icons</code>). Trazo de 2 px, cuadrícula de 24 px.</p>
        <div className="sy__icons">
          {ICON_NAMES.map((n) => <div key={n} title={n}><Icon name={n} size={24} /><small>{n}</small></div>)}
        </div>
      </Card>

      <Card>
        <SectionTitle>Sonido y háptica</SectionTitle>
        <div className="ds-row" style={{ flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
          {(Object.keys(sfx) as Sfx[]).map((k) => <Button key={k} size="sm" variant="secondary" sound={false} onClick={() => sfx[k]()}>{k}</Button>)}
          <Button size="sm" variant="maiz" onClick={() => { confetti(); feedback('complete'); }}>🎉 celebración</Button>
        </div>
      </Card>

      <Card>
        <SectionTitle>Mascota · estados</SectionTitle>
        <div className="ds-row" style={{ flexWrap: 'wrap' }}>
          <Mascot mood={mood} size={96} />
          {(['happy', 'think', 'cheer', 'oops', 'wave'] as MascotMood[]).map((m) => <Button key={m} size="sm" variant={m === mood ? 'primary' : 'secondary'} onClick={() => setMood(m)}>{m}</Button>)}
        </div>
      </Card>

      <SectionTitle>Catálogo de actividades ({listActivities().length})</SectionTitle>
      {listActivities().map((d) => <ActivityCard key={d.type} def={d} uses={usage.get(d.type) ?? 0} />)}
    </div>
  );
}

function MotionDemo({ name }: { name: PresetName }) {
  const box = useRef<HTMLButtonElement>(null);
  return (
    <button ref={box} type="button" className="sy__mbox" onClick={() => { const a = play(box.current, name); if (a && (presets[name] as Preset).iterations === Infinity) setTimeout(() => a.cancel(), 2400); }}>
      {name}
    </button>
  );
}

function ActivityCard({ def, uses }: { def: ActivityDefinition; uses: number }) {
  const [open, setOpen] = useState(false);
  const example = def.example ?? findExample(def.type);
  return (
    <Card>
      <div className="ds-row">
        <span className="pf__mi"><Icon name={def.icon} size={22} /></span>
        <div className="ds-grow"><strong>{def.label}</strong> <code className="ds-xs">{def.type}</code><div className="ds-xs ds-muted">{def.description}</div></div>
        <Chip color={def.graded ? 'var(--c-ok)' : 'var(--c-hint)'}>{def.graded ? 'calificada' : 'abierta'} · {uses}×</Chip>
      </div>
      {example && <Button size="sm" variant="secondary" style={{ marginTop: 10 }} onClick={() => setOpen((o) => !o)}>{open ? 'Cerrar' : 'Probar'}</Button>}
      {open && example && <Sandbox def={def} step={{ ...example, id: `demo-${def.type}`, type: def.type }} />}
    </Card>
  );
}

function findExample(type: string): Omit<StepBase, 'id' | 'type'> | undefined {
  for (const { lesson } of allLessons()) { const s = lesson.steps.find((x) => x.type === type); if (s) return s; }
  return undefined;
}

function Sandbox({ def, step }: { def: ActivityDefinition; step: StepBase }) {
  const [s, dispatch] = useReducer(stepReducer, undefined, initialStep);
  const Comp = def.Component;
  return (
    <div className="sy__sandbox ds-stack">
      <p><Rich text={step.prompt} /></p>
      <Comp step={step} props={step.props} value={s.value} onChange={(v: unknown) => dispatch({ type: 'change', value: v })} status={s.status} attempt={s.attempt}
        api={{ submit: () => dispatch({ type: 'check', def, step }), setReady: (r: boolean) => dispatch({ type: 'ready', ready: r }) }} />
      <div className="ds-row">
        <Button size="sm" disabled={!canSubmit(def, step, s)} onClick={() => dispatch(s.status === 'incorrect' ? { type: 'retry' } : { type: 'check', def, step })}>{s.status === 'incorrect' ? 'Reintentar' : 'Comprobar'}</Button>
        <Button size="sm" variant="ghost" onClick={() => dispatch({ type: 'reset' })}>Reiniciar</Button>
        <span className="ds-small">{s.status}{s.result?.feedback ? ` — ${s.result.feedback}` : ''}</span>
      </div>
    </div>
  );
}
