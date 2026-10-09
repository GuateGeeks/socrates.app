import type { MediaSlot, Mission } from '@/core/types';

const VISUAL_DIMENSIONS: Record<NonNullable<MediaSlot['aspect']>, string> = {
  '16:9': '1600x900',
  '4:3': '1200x900',
  '1:1': '1200x1200',
  '9:16': '900x1600',
  '3:4': '900x1200',
};

function productionReadySlot(slot: MediaSlot): MediaSlot {
  const timed = slot.kind === 'audio' || slot.kind === 'video' || slot.kind === 'animation';
  const duration = slot.duration;
  const additions: string[] = [];
  if (timed && duration !== undefined && !/\b\d{1,3}\s*(?:s|segundos?|minutos?)\b/i.test(slot.brief)) {
    additions.push(`Duracion: ${duration} s.`);
  }
  if (!timed && !/\b\d{3,4}\s*[x×]\s*\d{3,4}\b/i.test(slot.brief)) {
    additions.push(`Dimensiones: ${VISUAL_DIMENSIONS[slot.aspect ?? '16:9']}.`);
  }
  const hasAccessibility = /subt[ií]tulos|transcripci[oó]n|guion exacto|sin m[uú]sica|contraste|legible|letra grande|r[oó]tulos grandes|texto grande|sin texto|texto exacto/i.test(slot.brief);
  if (!hasAccessibility) {
    additions.push(timed
      ? `Accesibilidad: ${slot.kind === 'audio'
        ? 'transcripcion del contenido sonoro y guion exacto de las voces, si las hay.'
        : 'subtitulos completos para toda voz y transcripcion audiovisual; rotulos grandes, legibles y de alto contraste.'}`
      : 'Accesibilidad: contraste alto, rotulos grandes y legibles; la descripcion visual debe corresponder exactamente al texto alternativo.');
  }
  return { ...slot, duration, brief: [slot.brief.trim(), ...additions].join(' ') };
}

/** Adds production metadata to media slots without replacing their authored educational brief. */
export function withProductionReadyMedia(mission: Mission): Mission {
  const media = mission.media ? productionReadySlot(mission.media) : undefined;
  const lessons = mission.lessons.map((lesson) => ({
    ...lesson,
    media: lesson.media ? productionReadySlot(lesson.media) : undefined,
    steps: lesson.steps.map((step) => ({
      ...step,
      media: step.media ? productionReadySlot(step.media) : undefined,
    })),
  }));
  const bank = mission.bank?.map((step) => ({
    ...step,
    media: step.media ? productionReadySlot(step.media) : undefined,
  }));
  return { ...mission, media, lessons, bank };
}
