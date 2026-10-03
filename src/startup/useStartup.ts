import { useEffect, useRef, useState } from 'react';
import type { CloudSession } from '@/core/cloud-sync';
import { completeOnboarding, loadLearnerProfile, saveLearnerProfile, type LearnerProfile } from '@/core/learner-profile';
import { updateProgress } from '@/core/progress';
import { setReducedMotion } from '@/design-system/motion';

export type StartupView = 'splash' | 'onboarding' | 'app';

export function useStartup() {
  const [profile, setProfile] = useState(() => loadLearnerProfile());
  const [view, setView] = useState<StartupView>('splash');
  const [session, setSession] = useState<CloudSession | null>(null);
  const profileRef = useRef(profile);
  useEffect(() => {
    setReducedMotion(profile.reducedMotion);
    if (profile.theme === 'auto') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = profile.theme;
  }, [profile.reducedMotion, profile.theme]);

  useEffect(() => {
    let active = true;
    const timer = setTimeout(() => setView(profileRef.current.onboardingComplete ? 'app' : 'onboarding'), 650);
    const connect = async () => {
      const [{ initializeAnalytics }, { startCloudSession, syncLearnerProfile }] = await Promise.all([import('../../firebase'), import('@/core/cloud-sync')]);
      void initializeAnalytics();
      const next = await startCloudSession(profileRef.current);
      if (!active) { next?.stop(); return; }
      setSession((previous) => { previous?.stop(); return next; });
      if (next) void syncLearnerProfile(next.uid, profileRef.current);
    };
    void connect().catch(() => undefined);
    const retry = () => { if (!session) void connect().catch(() => undefined); };
    window.addEventListener('online', retry);
    return () => { active = false; clearTimeout(timer); window.removeEventListener('online', retry); };
    // Startup intentionally captures the restored profile once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => () => session?.stop(), [session]);

  const updateProfile = (patch: Partial<LearnerProfile>) => {
    setProfile((current) => {
      const next = { ...current, ...patch, updatedAt: Date.now() };
      profileRef.current = next;
      saveLearnerProfile(next);
      return next;
    });
  };

  const complete = () => {
    const done = completeOnboarding(profile);
    if (!done.onboardingComplete) return;
    saveLearnerProfile(done);
    profileRef.current = done;
    setProfile(done);
    updateProgress((p) => ({
      ...p,
      profile: { name: done.displayName, avatar: done.avatar },
      settings: { ...p.settings, dailyGoal: done.dailyGoal, theme: done.theme, sound: done.sound, haptics: done.haptics, reducedMotion: done.reducedMotion },
    }));
    setView('app');
  };

  return { view, profile, updateProfile, complete };
}
