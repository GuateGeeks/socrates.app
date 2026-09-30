import sexto from './generated/sexto-grado.json';
import type { AreaId, Competencia, Contenido, GradeCatalog, Indicador } from './model';

/**
 * Catálogo CNB en memoria. Hoy carga Sexto Grado; para agregar grados basta con
 * ejecutar `npm run cnb` y registrar el JSON aquí (o cargarlo bajo demanda con import()).
 */
const catalogs: Record<string, GradeCatalog> = { 'sexto-grado': sexto as GradeCatalog };

export type CnbNode =
  | { kind: 'competencia'; area: AreaId; node: Competencia }
  | { kind: 'indicador'; area: AreaId; node: Indicador; competencia: Competencia }
  | { kind: 'contenido'; area: AreaId; node: Contenido; indicador: Indicador; competencia: Competencia };

const index = new Map<string, CnbNode>();
function build(cat: GradeCatalog) {
  for (const [area, a] of Object.entries(cat.areas) as [AreaId, NonNullable<GradeCatalog['areas'][AreaId]>][]) {
    for (const c of a.competencias) {
      index.set(c.id, { kind: 'competencia', area, node: c });
      for (const i of c.indicadores) {
        index.set(i.id, { kind: 'indicador', area, node: i, competencia: c });
        for (const k of i.contenidos) index.set(k.id, { kind: 'contenido', area, node: k, indicador: i, competencia: c });
      }
    }
  }
}
Object.values(catalogs).forEach(build);

export function getCatalog(grado = 'sexto-grado'): GradeCatalog { return catalogs[grado]; }
export function lookup(id: string): CnbNode | undefined { return index.get(id); }
export function areaOf(id: string): AreaId { return id.split(':')[0] as AreaId; }
export function indicadorText(id: string): string {
  const n = index.get(id); return n ? n.node.text : id;
}
/** Para un id de contenido devuelve su indicador (la evaluación se registra por indicador). */
export function indicadorOf(id: string): string {
  const n = index.get(id);
  if (!n) return id;
  if (n.kind === 'contenido') return n.indicador.id;
  return n.node.id;
}
export function allIds(): IterableIterator<string> { return index.keys(); }
