import './mobile-screens.css';
import type { CSSProperties } from 'react';
import { useProgress, mastery } from '@/core/progress';
import { AMBITOS, AREAS, WHEEL_CICLO_II, type Ambito, type AreaId } from '@/cnb/model';
import { areaOf } from '@/cnb/catalog';
import { BADGES } from '@/content';
import { Card, ProgressBar, SectionTitle, useEnter } from '@/design-system/components';
import { TemaWheel } from '@/ui/TemaWheel';
import { Icon } from '@/design-system/icons';
import { navigate } from '@/core/router';
import { Button } from '@/design-system/components';

export function Logros() {
  const p = useProgress((s) => s);
  const ref = useEnter<HTMLDivElement>('enter.screen');
  const stars = Object.values(p.lessons).reduce((s, l) => s + l.stars, 0);
  const byArea: Partial<Record<AreaId, number>> = {};
  const counts: Partial<Record<AreaId, number>> = {};
  for (const [id, e] of Object.entries(p.evidence)) {
    const a = areaOf(id); byArea[a] = (byArea[a] ?? 0) + mastery(e); counts[a] = (counts[a] ?? 0) + 1;
  }
  for (const a of Object.keys(byArea) as AreaId[]) byArea[a] = byArea[a]! / counts[a]!;
  const maxAmb = Math.max(1, ...Object.values(p.ambitos));
  return (
    <div ref={ref} className="ds-page ds-stack mobile-screen">
      <div className="ds-row">
        <Button variant="ghost" icon onClick={() => navigate({ name: 'perfil' })} aria-label="Volver"><Icon name="ArrowLeft" /></Button>
        <h1>Mis logros</h1>
      </div>
      <div className="lc__stats">
        <div className="lc__stat" style={{ borderColor: 'var(--c-maiz-strong)' }}><small>Puntos</small><strong>{p.xp}</strong></div>
        <div className="lc__stat" style={{ borderColor: 'var(--c-bad)' }}><small>Racha</small><strong>{p.streak.count}</strong></div>
        <div className="lc__stat" style={{ borderColor: 'var(--c-ok)' }}><small>Estrellas</small><strong>{stars}</strong></div>
      </div>

      <Card raised>
        <SectionTitle>Así avanzo en mis materias</SectionTitle>
        <div className="ms__wheelwrap"><TemaWheel tema={p.profile.name || 'Mi progreso'} active={WHEEL_CICLO_II.filter((a) => p.areasXp[a])} mastery={byArea} size={280} /></div>
        <p className="ds-xs ds-muted ds-center">La rueda crece a medida que aprendes y practicas en cada materia.</p>
      </Card>

      <Card>
        <SectionTitle>Mis habilidades</SectionTitle>
        <div className="ds-stack" style={{ gap: 10, marginTop: 10 }}>
          {(Object.keys(AMBITOS) as Ambito[]).map((k) => (
            <div key={k}>
              <div className="ds-small"><strong><Icon name={AMBITOS[k].icon} size={15} /> {AMBITOS[k].nombre}</strong> <span className="ds-muted ds-xs">· {AMBITOS[k].desc}</span></div>
              <ProgressBar value={(p.ambitos[k] ?? 0) / maxAmb} color="var(--c-jade)" label={AMBITOS[k].nombre} />
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <SectionTitle>Insignias</SectionTitle>
        <div className="lg__badges">
          {Object.entries(BADGES).map(([id, b]) => (
            <div key={id} className="lg__badge" title={b.desc}>
              <div className={`ds-badge-ico${p.badges[id] ? '' : ' is-locked'}`}><Icon name={b.icon} size={28} /></div>
              <small>{b.name}</small>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <SectionTitle>Puntos por área</SectionTitle>
        <div className="ds-stack" style={{ gap: 8, marginTop: 10 }}>
          {WHEEL_CICLO_II.map((a) => (
            <div key={a} className="lg__arearow ds-small">
              <span><Icon name={AREAS[a].icon} size={14} /> {AREAS[a].corto}</span>
              <div className="lg__bar"><i style={{ width: `${Math.min(100, ((p.areasXp[a] ?? 0) / Math.max(1, ...Object.values(p.areasXp))) * 100)}%`, background: AREAS[a].color } as CSSProperties} /></div>
              <strong>{p.areasXp[a] ?? 0}</strong>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
