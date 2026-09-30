import { useCallback, useRef, type PointerEvent as RPointerEvent, type KeyboardEvent as RKeyboardEvent } from 'react';
import { feedback } from '../feedback';

/**
 * Arrastrar y soltar con Pointer Events (touch + mouse + lápiz), sin librerías.
 *
 * Patrón de interacción del sistema: TODO lo arrastrable también funciona con dos toques
 * (tocar objeto → tocar destino). Esto es clave en teléfonos pequeños y para accesibilidad.
 *
 *   const dnd = useDragDrop({ onDrop: (item, zone) => ..., onTap: (item) => ... });
 *   <div {...dnd.draggable('mango')}>🥭</div>
 *   <div data-dropzone="frutas">...</div>
 */
export interface DragDropOptions {
  onDrop(itemId: string, zoneId: string): void;
  onTap?(itemId: string): void;
  disabled?: boolean;
}

const THRESHOLD = 6;

export function useDragDrop({ onDrop, onTap, disabled }: DragDropOptions) {
  const opts = useRef({ onDrop, onTap, disabled });
  opts.current = { onDrop, onTap, disabled };

  const draggable = useCallback((itemId: string) => ({
    'data-drag-id': itemId,
    className: 'ds-draggable',
    onPointerDown(e: RPointerEvent<HTMLElement>) {
      if (opts.current.disabled || e.button !== 0) return;
      const el = e.currentTarget;
      const start = { x: e.clientX, y: e.clientY };
      const rect = el.getBoundingClientRect();
      let ghost: HTMLElement | null = null;
      let hot: Element | null = null;
      el.setPointerCapture(e.pointerId);

      const zoneAt = (x: number, y: number) => document.elementFromPoint(x, y)?.closest('[data-dropzone]') ?? null;

      const move = (ev: PointerEvent) => {
        const dx = ev.clientX - start.x, dy = ev.clientY - start.y;
        if (!ghost && Math.hypot(dx, dy) > THRESHOLD) {
          ghost = el.cloneNode(true) as HTMLElement;
          ghost.classList.add('ds-dragging');
          Object.assign(ghost.style, { left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`, margin: '0' });
          document.body.appendChild(ghost);
          el.style.opacity = '0.3';
          feedback('select');
        }
        if (ghost) {
          ghost.style.left = `${rect.left + dx}px`;
          ghost.style.top = `${rect.top + dy}px`;
          const z = zoneAt(ev.clientX, ev.clientY);
          if (z !== hot) { hot?.classList.remove('ds-drop-hot'); z?.classList.add('ds-drop-hot'); hot = z; }
        }
      };
      const up = (ev: PointerEvent) => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerup', up);
        el.removeEventListener('pointercancel', up);
        hot?.classList.remove('ds-drop-hot');
        el.style.opacity = '';
        if (ghost) {
          ghost.remove();
          const z = ev.type === 'pointerup' ? zoneAt(ev.clientX, ev.clientY) : null;
          const zoneId = z?.getAttribute('data-dropzone');
          if (zoneId) { feedback('drop'); opts.current.onDrop(itemId, zoneId); }
        } else if (ev.type === 'pointerup') {
          opts.current.onTap?.(itemId);
        }
      };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
    },
    onKeyDown(e: RKeyboardEvent<HTMLElement>) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); opts.current.onTap?.(itemId); }
    },
    role: 'button',
    tabIndex: 0,
  }), []);

  return { draggable };
}
