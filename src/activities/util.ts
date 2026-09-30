/** Barajado determinista por semilla (misma lección → mismo orden; evita saltos al re-renderizar). */
export function shuffled<T>(arr: readonly T[], seed: string): T[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  const rand = () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 10000) / 10000; };
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  // evita dejar el orden original (sería "demasiado fácil")
  if (a.length > 2 && a.every((x, i) => x === arr[i])) a.push(a.shift()!);
  return a;
}

export const near = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) <= tol;

/** Formato numérico es-GT: 1,234.5 (Guatemala usa coma de miles y punto decimal). */
export const fmt = (n: number, d = 2) => n.toLocaleString('en-US', { maximumFractionDigits: d });

/** Parseo tolerante de fracciones y decimales: "3/4", "0.75", "1 1/2", "0,75". */
export function parseNumber(s: string): number | null {
  const t = s.trim().replace(',', '.');
  if (!t) return null;
  const mixed = t.match(/^(-?\d+)\s+(\d+)\/(\d+)$/);
  if (mixed) return Number(mixed[1]) + Number(mixed[2]) / Number(mixed[3]);
  const frac = t.match(/^(-?\d+)\/(\d+)$/);
  if (frac) return Number(frac[2]) === 0 ? null : Number(frac[1]) / Number(frac[2]);
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
}
