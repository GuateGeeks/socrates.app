import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './design-system/global.css';
import './activities/activities.css';
import './screens/screens.css';
import { registerAll } from './activities';
import { App } from './App';

registerAll();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// PWA: offline en escuelas con conectividad intermitente (solo en http/https).
if ('serviceWorker' in navigator && location.protocol.startsWith('http') && !location.hostname.includes('claude')) {
  addEventListener('load', () => { navigator.serviceWorker.register('./sw.js').catch(() => {}); });
}
