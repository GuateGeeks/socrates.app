import './mobile-screens.css';
import { useProgress } from '@/core/progress';
import { navigate, type Route } from '@/core/router';
import { allLessons } from '@/content';
import { Card, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';

const MENU: { route: Route; icon: string; title: string; desc: string }[] = [
  { route: { name: 'logros' }, icon: 'Trophy', title: 'Mis logros', desc: 'Insignias, rueda del CNB y perfil de egreso' },
  { route: { name: 'repaso' }, icon: 'RefreshCw', title: 'Repaso inteligente', desc: 'Ejercicios que conviene repasar hoy' },
  { route: { name: 'docente' }, icon: 'GraduationCap', title: 'Vista docente', desc: 'Cobertura del CNB, plan semanal y evidencias' },
  { route: { name: 'medios' }, icon: 'Clapperboard', title: 'Medios por producir', desc: 'Fichas de imágenes, videos y audios' },
  { route: { name: 'sistema' }, icon: 'Palette', title: 'Sistema de diseño', desc: 'Íconos, movimiento, sonidos y actividades' },
  { route: { name: 'ajustes' }, icon: 'Settings', title: 'Ajustes', desc: 'Perfil, calendario, sonido y accesibilidad' },
];

export function Perfil() {
  const p = useProgress((s) => s);
  const ref = useEnter<HTMLDivElement>('enter.screen');
  const total = allLessons().length;
  const done = allLessons().filter((x) => p.lessons[x.lesson.id]).length;
  const avatar = p.profile.avatar && /^[A-Z]/.test(p.profile.avatar) ? p.profile.avatar : 'Bird';
  return (
    <div ref={ref} className="ds-page ds-stack mobile-screen">
      <Card raised>
        <div className="ds-row">
          <span className="pf__avatar"><Icon name={avatar} size={36} /></span>
          <div className="ds-grow">
            <h1 style={{ fontSize: 'var(--fs-xl)' }}>{p.profile.name || 'Estudiante'}</h1>
            <p className="ds-small ds-muted">Sexto Primaria · {done}/{total} lecciones</p>
          </div>
        </div>
        <div className="lc__stats" style={{ marginTop: 12 }}>
          <div className="lc__stat" style={{ borderColor: 'var(--c-maiz-strong)' }}><small>Puntos</small><strong>{p.xp}</strong></div>
          <div className="lc__stat" style={{ borderColor: 'var(--c-bad)' }}><small>Racha</small><strong>{p.streak.count}</strong></div>
          <div className="lc__stat" style={{ borderColor: 'var(--c-ok)' }}><small>Insignias</small><strong>{Object.keys(p.badges).length}</strong></div>
        </div>
      </Card>
      {MENU.map((m) => (
        <Card key={m.title} onClick={() => navigate(m.route)}>
          <div className="ds-row">
            <span className="pf__mi"><Icon name={m.icon} size={22} /></span>
            <div className="ds-grow"><strong>{m.title}</strong><div className="ds-xs ds-muted">{m.desc}</div></div>
            <Icon name="ChevronRight" size={18} />
          </div>
        </Card>
      ))}
    </div>
  );
}
