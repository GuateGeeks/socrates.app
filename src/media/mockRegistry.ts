import type { MediaSlot as Slot, Mission } from '@/core/types';
import { WEEKS, COURSE } from '@/content';
import { MEDIA_ASSETS } from '@/media/assets';

export interface MediaReplacement {
  produced: boolean;
  fileTarget: string;
  registrySnippet: string;
  nextStep: string;
}

export interface MediaBacklogRow {
  slot: Slot;
  semana?: number;
  unidad: number;
  where: string;
  replacement: MediaReplacement;
}

const EXT_BY_KIND: Record<Slot['kind'], string> = {
  image: 'jpg',
  diagram: 'svg',
  video: 'mp4',
  animation: 'mp4',
  audio: 'mp3',
};

function cleanFileId(id: string) {
  return id.replace(/[^a-z0-9-]/gi, '-').toLowerCase();
}

function replacementFor(slot: Slot): MediaReplacement {
  const asset = MEDIA_ASSETS[slot.id];
  const ext = EXT_BY_KIND[slot.kind];
  const filename = `${cleanFileId(slot.id)}.${ext}`;
  const src = `media/${filename}`;
  return {
    produced: Boolean(asset),
    fileTarget: `public/${src}`,
    registrySnippet: `'${slot.id}': { src: '${src}' },`,
    nextStep: asset
      ? `Revisar accesibilidad, credito y subtitulos si aplica para ${slot.title}.`
      : `Producir ${slot.kind} siguiendo la ficha, guardar en public/media/ y registrar el id exacto en src/media/assets.ts.`,
  };
}

function collectFromMission(w: Mission, out: MediaBacklogRow[]) {
  if (w.media) out.push({ slot: w.media, semana: w.semana, unidad: w.unidad, where: `Portada · ${w.title}`, replacement: replacementFor(w.media) });
  for (const l of w.lessons) {
    if (l.media) out.push({ slot: l.media, semana: w.semana, unidad: w.unidad, where: l.title, replacement: replacementFor(l.media) });
    for (const s of l.steps) {
      if (s.media) out.push({ slot: s.media, semana: w.semana, unidad: w.unidad, where: `${l.title} · paso ${s.id}`, replacement: replacementFor(s.media) });
    }
  }
}

export function mediaBacklogRows(): MediaBacklogRow[] {
  const out: MediaBacklogRow[] = [];
  for (const w of [...WEEKS, ...COURSE.missions]) collectFromMission(w, out);
  return out;
}

export function mediaReplacementSummary(rows = mediaBacklogRows()) {
  const produced = rows.filter((r) => r.replacement.produced).length;
  return { total: rows.length, produced, mocked: rows.length - produced, rows };
}
