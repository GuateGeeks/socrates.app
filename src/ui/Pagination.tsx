import { useEffect, useRef, useState, type SetStateAction } from 'react';
import { Button } from '@/design-system/components';

export const PAGE_SIZE = 20;
const sessionValues = new Map<string, unknown>();
const positions = new Map<string, number>();

/** Navigation preferences last until this tab reloads; learner data stays in its existing store. */
export function useSessionValue<T>(key: string, initial: T): [T, (value: SetStateAction<T>) => void] {
  const [value, setValue] = useState<T>(() => {
    if (!sessionValues.has(key)) sessionValues.set(key, initial);
    return sessionValues.get(key) as T;
  });
  const update = (next: SetStateAction<T>) => setValue(previous => {
    const result = typeof next === 'function' ? (next as (value: T) => T)(previous) : next;
    sessionValues.set(key, result);
    return result;
  });
  return [value, update];
}

export function useReturnPosition(key: string) {
  useEffect(() => {
    const hash = location.hash;
    const frame = requestAnimationFrame(() => window.scrollTo(0, positions.get(key) ?? 0));
    const remember = () => { if (location.hash === hash) positions.set(key, window.scrollY); };
    window.addEventListener('scroll', remember, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', remember); };
  }, [key]);
}

export function pageOf(page: number, total: number) {
  return Math.min(Math.max(0, page), Math.max(0, Math.ceil(total / PAGE_SIZE) - 1));
}

export function Pagination({ page, total, onChange }: { page: number; total: number; onChange(page: number): void }) {
  const current = pageOf(page, total);
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const status = useRef<HTMLParagraphElement>(null);
  const change = (next: number) => {
    onChange(next);
    // Keep the new result range in view and announce it after a page change.
    requestAnimationFrame(() => status.current?.focus());
  };
  return <nav className="pagination" aria-label="Páginas de resultados">
    <p ref={status} tabIndex={-1} role="status">{total ? current * PAGE_SIZE + 1 : 0}–{Math.min((current + 1) * PAGE_SIZE, total)} de {total} resultados · Página {current + 1} de {pages}</p>
    <div className="pagination__actions">
      <Button variant="secondary" aria-label="Página anterior" disabled={current === 0} onClick={() => change(current - 1)}>Anterior</Button>
      <Button variant="secondary" aria-label="Página siguiente" disabled={current + 1 >= pages} onClick={() => change(current + 1)}>Siguiente</Button>
    </div>
  </nav>;
}
