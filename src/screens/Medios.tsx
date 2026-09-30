import { useMemo, useState } from 'react';
import type { MediaSlot as Slot } from '@/core/types';
import { navigate } from '@/core/router';
import { mediaBacklogRows, type MediaBacklogRow } from '@/media/mockRegistry';
import { Button, Card, Chip, ProgressBar, useEnter } from '@/design-system/components';
import { Icon } from '@/design-system/icons';

const KINDS: Slot['kind'][] = ['video', 'animation', 'image', 'diagram', 'audio'];
const KIND_LABEL: Record<Slot['kind'], string> = { video: 'Video', animation: 'Animacion', image: 'Imagen', diagram: 'Diagrama', audio: 'Audio' };
const KIND_ICON: Record<Slot['kind'], string> = { video: 'Film', animation: 'Sparkles', image: 'Image', diagram: 'Shapes', audio: 'Headphones' };

/** Catalogo de produccion: todos los espacios de imagen/video/audio del año con su ficha. */
export function Medios() {
  const ref = useEnter<HTMLDivElement>('enter.screen');
  const [kind, setKind] = useState<Slot['kind'] | 'all'>('all');
  const [unit, setUnit] = useState<number | 0>(0);
  const [copied, setCopied] = useState('');
  const rows = useMemo(() => mediaBacklogRows(), []);
  const filtered = rows.filter((r) => (kind === 'all' || r.slot.kind === kind) && (!unit || r.unidad === unit));
  const produced = rows.filter((r) => r.replacement.produced).length;
  const minutes = Math.round(rows.filter((r) => r.slot.duration).reduce((s, r) => s + (r.slot.duration ?? 0), 0) / 60);

  const copy = async (what: 'json' | 'csv') => {
    const data = what === 'json'
      ? JSON.stringify(filtered.map((r: MediaBacklogRow) => ({ semana: r.semana, ubicacion: r.where, reemplazo: r.replacement, ...r.slot })), null, 2)
      : ['id,tipo,semana,titulo,duracion_s,formato,ubicacion,archivo_destino,snippet_assets,texto_alternativo,ficha']
        .concat(filtered.map((r) => [
          r.slot.id,
          r.slot.kind,
          r.semana ?? '',
          r.slot.title,
          r.slot.duration ?? '',
          r.slot.aspect ?? '',
          r.where,
          r.replacement.fileTarget,
          r.replacement.registrySnippet,
          r.slot.alt,
          r.slot.brief,
        ].map((x) => `"${String(x).replace(/"/g, '""')}"`).join(','))).join('\n');
    try { await navigator.clipboard.writeText(data); setCopied(what); } catch { setCopied('error'); }
    setTimeout(() => setCopied(''), 2500);
  };

  return (
    <div ref={ref} className="ds-page ds-stack">
      <div className="ds-row">
        <Button variant="ghost" icon onClick={() => navigate({ name: 'perfil' })} aria-label="Volver"><Icon name="ArrowLeft" /></Button>
        <div><h1>Medios por producir</h1><p className="ds-small ds-muted">Fichas de produccion de imagenes, videos, animaciones y audios del año.</p></div>
      </div>
      <Card>
        <div className="ds-row ds-small" style={{ justifyContent: 'space-between' }}><strong>{produced} de {rows.length} producidos</strong><span className="ds-muted">≈ {minutes} min de video/audio</span></div>
        <ProgressBar value={rows.length ? produced / rows.length : 0} />
        <div className="ds-row" style={{ flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
          {KINDS.map((k) => <Chip key={k} color="var(--c-jade)"><Icon name={KIND_ICON[k]} size={13} /> {KIND_LABEL[k]}: {rows.filter((r) => r.slot.kind === k).length}</Chip>)}
        </div>
      </Card>
      <div className="md__filters" role="group" aria-label="Filtros">
        <select className="ds-input" value={kind} onChange={(e) => setKind(e.target.value as Slot['kind'] | 'all')} aria-label="Tipo de medio">
          <option value="all">Todos los tipos</option>
          {KINDS.map((k) => <option key={k} value={k}>{KIND_LABEL[k]}</option>)}
        </select>
        <select className="ds-input" value={unit} onChange={(e) => setUnit(Number(e.target.value))} aria-label="Unidad">
          <option value={0}>Todas las unidades</option>
          {[1, 2, 3, 4].map((u) => <option key={u} value={u}>Unidad {u}</option>)}
        </select>
      </div>
      <div className="ds-row">
        <Button size="sm" variant="secondary" onClick={() => copy('csv')}><Icon name="Copy" size={16} /> {copied === 'csv' ? 'CSV copiado' : 'Copiar CSV'}</Button>
        <Button size="sm" variant="secondary" onClick={() => copy('json')}><Icon name="Copy" size={16} /> {copied === 'json' ? 'JSON copiado' : 'Copiar JSON'}</Button>
        {copied === 'error' && <span className="ds-xs ds-muted">No se pudo copiar en este navegador.</span>}
      </div>
      <p className="ds-xs ds-muted">{filtered.length} espacios</p>
      {filtered.map((r) => (
        <Card key={r.slot.id}>
          <div className="md__row">
            <span className="md__icon"><Icon name={KIND_ICON[r.slot.kind]} size={22} /></span>
            <div className="ds-grow">
              <div className="ds-row" style={{ justifyContent: 'space-between', gap: 8 }}>
                <strong>{r.slot.title}</strong>
                {r.replacement.produced ? <Chip color="var(--c-ok)" solid>Producido</Chip> : <Chip color="var(--c-maiz-strong)">Pendiente</Chip>}
              </div>
              <div className="ds-xs ds-muted">{r.semana ? `Semana ${r.semana} · ` : 'Extra · '}{r.where} · {KIND_LABEL[r.slot.kind]}{r.slot.duration ? ` · ${r.slot.duration}s` : ''}{r.slot.aspect ? ` · ${r.slot.aspect}` : ''}</div>
              <p className="ds-small" style={{ marginTop: 6 }}>{r.slot.brief}</p>
              <p className="ds-xs ds-muted" style={{ marginTop: 4 }}><strong>Reemplazo:</strong> {r.replacement.fileTarget} · <code>{r.replacement.registrySnippet}</code></p>
              <p className="ds-xs ds-muted" style={{ marginTop: 4 }}><strong>Alt:</strong> {r.slot.alt} · <code>{r.slot.id}</code></p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
