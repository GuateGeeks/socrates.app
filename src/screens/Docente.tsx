import './mobile-screens.css';
import { useMemo, useState } from 'react';
import { useProgress, nivel, NIVEL_LABEL, getProgress, JOURNAL_STATUS_META, reviewJournalEntry, canApproveJournalEntry } from '@/core/progress';
import { navigate } from '@/core/router';
import { AREAS, FASES, WHEEL_CICLO_II, type AreaId, type Fase } from '@/cnb/model';
import { getCatalog, indicadorOf, lookup } from '@/cnb/catalog';
import { COURSE, WEEKS, everyLesson, missionAreas, weekProgress } from '@/content';
import { Button, Card, Chip, ProgressBar, SectionTitle, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';

import { Pagination, PAGE_SIZE, pageOf, useSessionValue, useReturnPosition } from '@/ui/Pagination';

type Tab = 'cobertura' | 'plan' | 'evidencias';

function formatJournal(v: string): string {
  try {
    const o = JSON.parse(v);
    if (o && Array.isArray(o.ratings)) return `Autoevaluación: ${o.ratings.map((r: number | null) => (r === 3 ? 'Sí, solo' : r === 2 ? 'Con ayuda' : r === 1 ? 'Aún no' : '—')).join(' · ')}${o.commitment ? ` · Compromiso: ${o.commitment}` : ''}`;
    if (o && typeof o.text === 'string') return o.text;
    if (o && Array.isArray(o.done)) return `Proyecto: ${o.done.filter(Boolean).length}/${o.done.length} pasos · rúbrica ${o.rubric?.join('-')}`;
    if (Array.isArray(o)) return `Datos: ${o.join(', ')}`;
    return v;
  } catch { return v; }
}

/**
 * Vista docente — Figuras 3 y 4 del CNB (diseño lineal):
 * Área → Competencias de grado → Indicadores de logro → Contenidos (D/P/A), con cobertura,
 * plan de 40 semanas y evidencias del estudiante en este dispositivo.
 */
export function Docente() {
  const p = useProgress((s) => s);
  const ref = useEnter<HTMLDivElement>('enter.screen');
  const cat = getCatalog();
  const [tab, setTab] = useSessionValue<Tab>('teacher-tab', 'cobertura');
  const [area, setArea] = useSessionValue<AreaId>('teacher-area', 'mat');
  const [onlyCovered, setOnlyCovered] = useSessionValue('teacher-only-covered', false);
  const [copied, setCopied] = useState(false);

  const [q, setQ] = useSessionValue('evidence-search', '');
  const [evidenceStatus, setEvidenceStatus] = useSessionValue('evidence-status', 'all');
  const [page, setPage] = useSessionValue('evidence-page', 0);
  const [openGroups, setOpenGroups] = useSessionValue<string[]>('teacher-groups', []);
  useReturnPosition('teacher');
  const journal = Object.entries(p.journal).filter(([key, entry]) =>
    (evidenceStatus === 'all' || entry.status === evidenceStatus) &&
    (!q.trim() || `${key} ${formatJournal(entry.value)} ${entry.cnb.join(' ')}`.toLowerCase().includes(q.trim().toLowerCase())));
  const current = pageOf(page, journal.length);

  const coverage = useMemo(() => {
    const cont = new Map<string, Set<string>>();
    const ind = new Set<string>();
    for (const { mission, lesson } of everyLesson()) for (const s of lesson.steps) for (const r of s.cnb) {
      ind.add(indicadorOf(r));
      if (lookup(r)?.kind === 'contenido') cont.set(r, (cont.get(r) ?? new Set()).add(`S${mission.semana ?? '·'} ${lesson.title}`));
    }
    for (const w of WEEKS) for (const s of w.bank ?? []) for (const r of s.cnb) { ind.add(indicadorOf(r)); if (lookup(r)?.kind === 'contenido') cont.set(r, (cont.get(r) ?? new Set()).add(`S${w.semana} banco`)); }
    return { cont, ind };
  }, []);
  const faseCount = useMemo(() => {
    const c: Record<Fase, number> = { explorar: 0, construir: 0, aplicar: 0, comprobar: 0, reflexionar: 0 };
    for (const { lesson } of everyLesson()) for (const s of lesson.steps) c[s.fase]++;
    return c;
  }, []);
  const totalSteps = Object.values(faseCount).reduce((a, b) => a + b, 0) || 1;
  const areaStats = WHEEL_CICLO_II.map((a) => {
    const comps = cat.areas[a]?.competencias ?? [];
    const inds = comps.flatMap((c) => c.indicadores);
    const conts = inds.flatMap((i) => i.contenidos);
    return { a, inds: inds.length, indCov: inds.filter((i) => coverage.ind.has(i.id)).length, conts: conts.length, contCov: conts.filter((k) => coverage.cont.has(k.id)).length };
  });
  const tot = areaStats.reduce((s, x) => ({ inds: s.inds + x.inds, indCov: s.indCov + x.indCov, conts: s.conts + x.conts, contCov: s.contCov + x.contCov }), { inds: 0, indCov: 0, conts: 0, contCov: 0 });
  const comps = cat.areas[area]?.competencias ?? [];
  const lessonsCount = everyLesson().length;

  const exportData = JSON.stringify({ exportado: new Date().toISOString(), curso: COURSE.id, progreso: getProgress() }, null, 2);
  const download = () => {
    const url = URL.createObjectURL(new Blob([exportData], { type: 'application/json' }));
    const a = document.createElement('a'); a.href = url; a.download = `socrates-progreso-${p.profile.name || 'estudiante'}.json`; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const copy = async () => { try { await navigator.clipboard.writeText(exportData); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* sin permiso */ } };

  return (
    <div ref={ref} className="ds-page ds-stack mobile-screen">
      <div className="ds-row">
        <Button variant="ghost" icon onClick={() => navigate({ name: 'perfil' })} aria-label="Volver"><Icon name="ArrowLeft" /></Button>
        <div>
          <h1>Vista docente</h1>
          <p className="ds-muted ds-small">Currículo Nacional Base · Sexto Grado</p>
        </div>
      </div>

      <div className="lc__stats">
        <div className="lc__stat" style={{ borderColor: 'var(--c-ok)' }}><small>Contenidos</small><strong>{Math.round((tot.contCov / tot.conts) * 100)}%</strong><span className="ds-xs ds-muted">{tot.contCov}/{tot.conts}</span></div>
        <div className="lc__stat" style={{ borderColor: 'var(--c-jade)' }}><small>Indicadores</small><strong>{Math.round((tot.indCov / tot.inds) * 100)}%</strong><span className="ds-xs ds-muted">{tot.indCov}/{tot.inds}</span></div>
        <div className="lc__stat" style={{ borderColor: 'var(--c-maiz-strong)' }}><small>Lecciones</small><strong>{lessonsCount}</strong><span className="ds-xs ds-muted">{totalSteps} actividades</span></div>
      </div>

      <div className="dc__tabs" role="tablist">
        {([['cobertura', 'Cobertura', 'Target'], ['plan', 'Plan semanal', 'CalendarDays'], ['evidencias', 'Evidencias', 'ClipboardList']] as const).map(([k, l, i]) => (
          <button key={k} type="button" role="tab" aria-selected={tab === k} className={tab === k ? 'is-on' : ''} onClick={() => setTab(k)}><Icon name={i} size={16} /> {l}</button>
        ))}
      </div>

      {tab === 'cobertura' && (
        <>
          <Card>
            <SectionTitle>Cobertura por área (contenidos de la dosificación)</SectionTitle>
            <div className="ds-stack" style={{ gap: 8, marginTop: 10 }}>
              {areaStats.map(({ a, conts, contCov, inds, indCov }) => (
                <button key={a} type="button" className={`dc__arearow${area === a ? ' is-on' : ''}`} onClick={() => setArea(a)} title={`Indicadores ${indCov}/${inds}`}>
                  <span className="dc__alabel"><Icon name={AREAS[a].icon} size={15} /> {AREAS[a].corto}</span>
                  <ProgressBar value={conts ? contCov / conts : 0} color={AREAS[a].color} />
                  <small>{contCov}/{conts}</small>
                </button>
              ))}
            </div>
          </Card>
          <Card>
            <SectionTitle>Ciclo E-A-E en las actividades</SectionTitle>
            <div className="ds-row" style={{ flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
              {(Object.keys(FASES) as Fase[]).map((f) => <Chip key={f} color="var(--c-jade)"><Icon name={FASES[f].icon} size={13} /> {FASES[f].nombre}: {Math.round((faseCount[f] / totalSteps) * 100)}%</Chip>)}
            </div>
          </Card>
          <div className="ds-row" style={{ justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: 'var(--fs-lg)' }}><Icon name={AREAS[area].icon} size={18} /> {AREAS[area].nombre}</h2>
            <label className="ds-row ds-small"><input type="checkbox" checked={onlyCovered} onChange={(e) => setOnlyCovered(e.target.checked)} /> Solo cubiertos</label>
          </div>
          {comps.map((c) => {
            const inds = c.indicadores.filter((i) => !onlyCovered || coverage.ind.has(i.id));
            if (!inds.length) return null;
            return (
              <Card key={c.id}>
                <details className="dc__competency" open={openGroups.includes(c.id)} onToggle={event => {
                  const open = event.currentTarget.open;
                  setOpenGroups(previous => open ? previous.includes(c.id) ? previous : [...previous, c.id] : previous.filter(id => id !== c.id));
                }}>
                <summary className="dc__comp"><code>C{c.code}</code> {c.text} <span className="ds-muted">· {inds.length} indicadores</span></summary>
                <ul className="dc__inds">
                  {inds.map((i) => {
                    const lv = nivel(p.evidence[i.id]);
                    return (
                      <li key={i.id}>
                        <div className="ds-row" style={{ alignItems: 'flex-start' }}>
                          <span className={`ms__lv ms__lv--${lv}`}>{NIVEL_LABEL[lv]}</span>
                          <span className="ds-grow ds-small"><code>{i.code}</code> {i.text}</span>
                        </div>
                        <ul className="dc__conts">
                          {i.contenidos.filter((k) => !onlyCovered || coverage.cont.has(k.id)).map((k) => {
                            const where = coverage.cont.get(k.id);
                            return (
                              <li key={k.id} className={where ? 'is-cov' : ''}>
                                <Icon name={where ? 'CircleCheck' : 'Circle'} size={14} color={where ? 'var(--c-ok)' : 'var(--c-ink-3)'} />
                                <span className="ds-xs"><code>{k.code}</code> <span className={`dc__tipo dc__tipo--${k.tipo}`}>{k.tipo.slice(0, 4)}</span> {k.text}{where && <span className="ds-muted"> — {[...where].slice(0, 2).join(' · ')}{where.size > 2 ? ` +${where.size - 2}` : ''}</span>}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
                </details>
              </Card>
            );
          })}
        </>
      )}

      {tab === 'plan' && (
        <Card>
          <SectionTitle>Plan del ciclo escolar</SectionTitle>
          <div className="dc__plan-cards">
            {WEEKS.map(w => {
              const wp = weekProgress(p, w);
              return <button key={w.id} type="button" className="dc__plan-card" onClick={() => navigate({ name: 'mission', missionId: w.id })}>
                <span className="ds-xs ds-muted">Semana {w.semana} · Unidad {w.unidad}{w.kind !== 'aprendizaje' ? ` · ${w.kind === 'proyecto' ? 'Proyecto' : 'Validación'}` : ''}</span>
                <strong>{w.title}</strong>
                <span className="ds-small">{missionAreas(w).map(a => AREAS[a].corto).join(' · ')}</span>
                <span className="ds-xs">{wp.done}/{w.lessons.length} lecciones</span>
                <ProgressBar value={wp.pct} color={w.color} />
              </button>;
            })}
          </div>
        </Card>
      )}

      {tab === 'evidencias' && (
        <>
          <Card>
            <SectionTitle>Diario del estudiante (respuestas abiertas)</SectionTitle>
            <div className="dc__evidence-filters">
              <label>Buscar evidencias<input type="search" className="ds-input" value={q} onChange={event => { setQ(event.target.value); setPage(0); }} /></label>
              <label>Estado de evidencia<select className="ds-input" value={evidenceStatus} onChange={event => { setEvidenceStatus(event.target.value); setPage(0); }}>
                <option value="all">Todos los estados</option>
                {Object.entries(JOURNAL_STATUS_META).map(([value, meta]) => <option key={value} value={value}>{meta.label}</option>)}
              </select></label>
            </div>
            <Pagination page={current} total={journal.length} onChange={setPage} />
            {journal.length === 0 ? <p className="ds-small ds-muted" style={{ marginTop: 8 }}>{Object.keys(p.journal).length ? 'No hay evidencias con estos filtros.' : 'Aún no hay reflexiones, escritos ni decisiones registradas.'}</p> : (
              <ul className="dc__journal">
                {journal.slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE).map(([k, j]) => (
                  <li key={k} className={`dc__journal-entry dc__journal-entry--${j.status}`}>
                    <div className="ds-row dc__journal-head">
                      <code className="ds-xs">{k}</code>
                      <span className="dc__journal-status" role="status">{JOURNAL_STATUS_META[j.status].label}</span>
                    </div>
                    <div className="ds-small dc__journal-response">{formatJournal(j.value)}</div>
                    {j.cnb.length > 0 && (
                      <div className="dc__journal-refs" aria-label="Referencias CNB adjuntas">
                        {j.cnb.map((cnb) => <code key={cnb} className="ds-xs" title={lookup(cnb)?.node.text}>{cnb}</code>)}
                      </div>
                    )}
                    {j.review && (
                      <div className="dc__journal-rubric">
                        <strong className="ds-xs">Lista de cotejo del estudiante</strong>
                        <ul aria-label="Criterios y autoevaluación">
                          {j.review.criteria.map((criterion, index) => (
                            <li key={`${criterion}-${index}`}>
                              <Icon name={j.review!.selfChecks[index] ? 'Check' : 'Minus'} size={14} />
                              <span>{criterion}</span>
                              <span className="sr-only">{j.review!.selfChecks[index] ? 'Marcado por el estudiante' : 'No marcado por el estudiante'}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {j.reviewedAt && <p className="ds-xs ds-muted">Revisada: {j.reviewedAt}</p>}
                    {j.review?.masteryEligible === false && (
                      <p className="ds-xs dc__journal-consultation" role="note">Consulta pendiente: esta entrega permite continuar, pero no puede acreditar dominio hasta presentar una práctica propia revisable.</p>
                    )}
                    {j.status === 'pending-review' && (
                      <div className="ds-row dc__journal-actions" aria-label="Acciones de revisión docente">
                        {canApproveJournalEntry(j) && <Button size="sm" variant="ok" onClick={() => reviewJournalEntry(k, 'approve')}><Icon name="Check" size={16} /> Aprobar</Button>}
                        <Button size="sm" variant="secondary" onClick={() => reviewJournalEntry(k, 'revision')}><Icon name="RotateCcw" size={16} /> Solicitar revisión</Button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </Card>
          <div className="ds-row">
            <Button variant="secondary" onClick={download}><Icon name="Download" size={18} /> Exportar (JSON)</Button>
            <Button variant="secondary" onClick={copy}><Icon name="Copy" size={18} /> {copied ? 'Copiado' : 'Copiar'}</Button>
          </div>
        </>
      )}
    </div>
  );
}
