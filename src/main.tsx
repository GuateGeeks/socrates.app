import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './design-system/global.css';
import './activities/activities.css';
import './screens/screens.css';
import { registerAll } from './activities';
import { App } from './App';
import { useStartup } from './startup/useStartup';
import { Splash } from './startup/Splash';
import { Onboarding } from './startup/Onboarding';
import './startup/startup.css';
import { registerServiceWorker } from './pwa/service-worker';
import { Appearance } from './design-system/Appearance';

registerAll();

function Root() {
  const startup = useStartup();
  return <>
    <Appearance profile={startup.profile} onboarding={!startup.profile.onboardingComplete} />
    {startup.view === 'splash' ? <Splash /> : startup.view === 'onboarding'
      ? <Onboarding profile={startup.profile} updateProfile={startup.updateProfile} complete={startup.complete} />
      : <App profile={startup.profile} changeProgram={startup.changeProgram} />}
  </>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);

registerServiceWorker((worker) => window.dispatchEvent(new CustomEvent('socrates:update-ready', { detail: worker })));
