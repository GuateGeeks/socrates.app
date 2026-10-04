import './mobile-screens.css';
import { Pagination, PAGE_SIZE, pageOf, useSessionValue, useReturnPosition } from '@/ui/Pagination';
import { useProgress, removeNote } from '@/core/progress';
import { navigate } from '@/core/router';
import { getMission } from '@/content';
import { Card, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';
import { Mascot } from '@/design-system/components/Mascot';

/** Cuaderno: ideas clave guardadas automáticamente al terminar lecciones y las que el niño marca. */
export function Cuaderno() {
  const notebook = useProgress((p) => p.notebook);
  const ref = useEnter<HTMLDivElement>('enter.screen');
  const [q, setQ] = useSessionValue('notebook-search', '');
  const [page, setPage] = useSessionValue('notebook-page', 0);
  useReturnPosition('notebook');
  const entries = Object.entries(notebook ?? {}).filter(([, n]) => !q || `${n.text} ${n.title}`.toLowerCase().includes(q.toLowerCase()));
  entries.sort((a, b) => (getMission(b[1].missionId)?.semana ?? 0) - (getMission(a[1].missionId)?.semana ?? 0));
  const current = pageOf(page, entries.length);
  const groups = new Map<string, typeof entries>();
  for (const e of entries.slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE)) groups.set(e[1].missionId, [...(groups.get(e[1].missionId) ?? []), e]);
  const ordered = [...groups.entries()].sort((a, b) => (getMission(b[0])?.semana ?? 0) - (getMission(a[0])?.semana ?? 0));

  return (
    <div ref={ref} className="ds-page ds-stack mobile-screen">
      <div>
        <h1>Mi cuaderno</h1>
        <p className="ds-small ds-muted">Las ideas clave de cada lección se guardan aquí. También puedes guardar explicaciones con el botón <Icon name="Bookmark" size={14} />.</p>
      </div>
      <div className="ex__search"><Icon name="Search" size={18} /><input className="ds-input" placeholder="Buscar en mi cuaderno" value={q} onChange={(e) => { setQ(e.target.value); setPage(0); }} aria-label="Buscar en mi cuaderno" /></div>
      <Pagination page={current} total={entries.length} onChange={setPage} />
      {ordered.length === 0 && (
        <Card><div className="ds-row"><Mascot mood="think" size={64} idle={false} /><p className="ds-small">{q ? 'No hay ideas con esta búsqueda.' : 'Tu cuaderno está vacío. Termina tu primera lección y aquí aparecerán tus ideas clave.'}</p></div></Card>
      )}
      {ordered.map(([mid, list]) => {
        const m = getMission(mid);
        return (
          <section key={mid} className="ds-stack" style={{ gap: 'var(--sp-2)' }}>
            <div className="ds-section-title">{m?.semana ? `Semana ${m.semana} · ` : ''}{m?.title ?? mid}</div>
            {list.map(([key, n]) => (
              <Card key={key}>
                <div className="nb__entry">
                  <Icon name="Lightbulb" size={18} color="var(--c-maiz-strong)" />
                  <div className="ds-grow">
                    <p>{n.text.replace(/\*\*/g, '')}</p>
                    <button type="button" className="nb__link" onClick={() => navigate({ name: 'lesson', missionId: n.missionId, lessonId: n.lessonId })}>{n.title} · {n.at}</button>
                  </div>
                  <button type="button" className="nb__del" onClick={() => removeNote(key)} aria-label="Quitar del cuaderno"><Icon name="Trash2" size={16} /></button>
                </div>
              </Card>
            ))}
          </section>
        );
      })}
    </div>
  );
}
