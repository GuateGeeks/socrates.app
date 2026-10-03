import { useEffect, useState } from 'react';
import { initializeAnalytics } from '../../firebase';
import { startCloudSession, syncLearnerProfile, type CloudSession } from '@/core/cloud-sync';
import { completeOnboarding, loadLearnerProfile, saveLearnerProfile, type LearnerProfile } from '@/core/learner-profile';
import { updateProgress } from '@/core/progress';

export type StartupView = 'splash' | 'onboarding' | 'app';

export function useStartup() {
  const [profile, setProfile] = useState(() => loadLearnerProfile());
  const [view, setView] = useState<StartupView>('splash');
  const [session, setSession] = useState<CloudSession | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setView(profile.onboardingComplete ? 'app' : 'onboarding'), 650);
    void initializeAnalytics();
    void startCloudSession(profile).then(setSession);
    return () => clearTimeout(timer);
    // Startup intentionally captures the restored profile once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => () => session?.stop(), [session]);

  const updateProfile = (patch: Partial<LearnerProfile>) => {
    setProfile((current) => {
      const next = { ...current, ...patch, updatedAt: Date.now() };
      saveLearnerProfile(next);
      if (session) void syncLearnerProfile(session.uid, next);
      return next;
    });
  };

  const complete = () => {
    const done = completeOnboarding(profile);
    if (!done.onboardingComplete) return;
    saveLearnerProfile(done);
    setProfile(done);
    updateProgress((p) => ({
      ...p,
      profile: { name: done.displayName, avatar: done.avatar },
      settings: { ...p.settings, dailyGoal: done.dailyGoal, theme: done.theme, sound: done.sound, haptics: done.haptics, reducedMotion: done.reducedMotion },
    }));
    if (session) void syncLearnerProfile(session.uid, done);
    setView('app');
  };

  return { view, profile, updateProfile, complete };
}
