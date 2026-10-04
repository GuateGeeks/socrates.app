import { useLayoutEffect } from 'react';
import type { LearnerProfile } from '@/core/learner-profile';
import { useProgress } from '@/core/progress';
import { preferencesForProgram } from '@/core/program-settings';
import { configureFeedback } from './feedback';
import { setReducedMotion } from './motion';

/** One owner for the document appearance, including onboarding and program changes. */
export function Appearance({ profile, onboarding }: { profile: LearnerProfile; onboarding: boolean }) {
  const cnb = useProgress(progress => progress.settings);
  const settings = onboarding ? profile : preferencesForProgram(profile.activeProgram, cnb, profile);
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (settings.theme === 'auto') delete root.dataset.theme;
    else root.dataset.theme = settings.theme;
    setReducedMotion(settings.reducedMotion);
    configureFeedback({ sound: settings.sound, haptics: settings.haptics });
    const system = window.matchMedia('(prefers-color-scheme: dark)');
    const updateBrowserColor = () => {
      const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
      if (meta) meta.content = getComputedStyle(root).getPropertyValue('--c-bg').trim();
    };
    updateBrowserColor();
    system.addEventListener('change', updateBrowserColor);
    return () => system.removeEventListener('change', updateBrowserColor);
  }, [settings.theme, settings.reducedMotion, settings.sound, settings.haptics]);
  return null;
}
