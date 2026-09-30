import { useState, type CSSProperties } from 'react';
import type { MediaSlot as Slot } from '@/core/types';
import { MEDIA_ASSETS } from '@/media/assets';
import { Icon } from '@/design-system/icons';
import { useProgress } from '@/core/progress';

const KIND: Record<Slot['kind'], { icon: string; label: string }> = {
  image: { icon: 'Image', label: 'Imagen' },
  video: { icon: 'Film', label: 'Video' },
  animation: { icon: 'Sparkles', label: 'Animación' },
  diagram: { icon: 'Shapes', label: 'Diagrama' },
  audio: { icon: 'Headphones', label: 'Audio' },
};
const RATIO: Record<NonNullable<Slot['aspect']>, string> = { '16:9': '16 / 9', '4:3': '4 / 3', '1:1': '1 / 1', '9:16': '9 / 16', '3:4': '3 / 4' };
const fmtDur = (s?: number) => (s ? `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}` : '');

/**
 * Espacio multimedia. Si el recurso ya fue producido (src/media/assets.ts) se muestra;
 * si no, se dibuja una maqueta ilustrada con lo que el niño verá y, en modo productor,
 * la ficha de producción completa.
 */
export function MediaSlot({ slot, color = 'var(--c-jade)', compact }: { slot: Slot; color?: string; compact?: boolean }) {
  const producer = useProgress((p) => p.settings.producerMode);
  const [open, setOpen] = useState(false);
  const asset = MEDIA_ASSETS[slot.id];
  const k = KIND[slot.kind];
  const ratio = slot.kind === 'audio' ? undefined : RATIO[slot.aspect ?? '16:9'];
  const style = { '--mc': color, aspectRatio: compact ? '16 / 7' : ratio } as CSSProperties;

  if (asset) {
    return (
      <figure className="ms-media">
        {slot.kind === 'image' || slot.kind === 'diagram'
          ? <img src={asset.src} alt={slot.alt} style={{ aspectRatio: ratio }} loading="lazy" />
          : slot.kind === 'audio'
            ? <audio controls src={asset.src} aria-label={slot.title} />
            : <video controls playsInline preload="metadata" src={asset.src} poster={asset.poster} style={{ aspectRatio: ratio }} aria-label={slot.alt}>
                {asset.captions && <track kind="captions" src={asset.captions} srcLang="es" default />}
              </video>}
        <figcaption>{slot.title}{asset.credit && <span className="ds-muted"> · {asset.credit}</span>}</figcaption>
      </figure>
    );
  }

  return (
    <figure className={`ms-media ms-media--mock ms-media--${slot.kind}`}>
      <button type="button" className="ms-mock" style={style} onClick={() => setOpen((o) => !o)} aria-expanded={open}
        aria-label={`${k.label}: ${slot.title}. ${slot.alt}`}>
        <span className="ms-mock__pattern" aria-hidden />
        <span className="ms-mock__icon" aria-hidden>
          <Icon name={slot.kind === 'video' || slot.kind === 'animation' ? 'Play' : k.icon} size={compact ? 24 : 34} />
        </span>
        <span className="ms-mock__meta">
          <span className="ms-mock__kind"><Icon name={k.icon} size={14} /> {k.label}{slot.duration ? ` · ${fmtDur(slot.duration)}` : ''}</span>
          <strong>{slot.title}</strong>
        </span>
        <span className="ms-mock__soon">Próximamente</span>
      </button>
      {(open || producer) && (
        <figcaption className="ms-mock__caption">
          <p><strong>Aquí verás:</strong> {slot.alt}</p>
          {producer && <p className="ms-mock__brief"><strong>Ficha de producción ({slot.id}):</strong> {slot.brief}</p>}
        </figcaption>
      )}
    </figure>
  );
}
