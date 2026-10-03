export function registerServiceWorker(onUpdate: (worker: ServiceWorker) => void = () => {}) {
  if (!('serviceWorker' in navigator) || !location.protocol.startsWith('http') || location.hostname.includes('claude')) return;
  addEventListener('load', () => {
    void navigator.serviceWorker.register('./sw.js').then((registration) => {
      if (registration.waiting) onUpdate(registration.waiting);
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        worker?.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) onUpdate(worker);
        });
      });
    }).catch(() => undefined);
  });
}

export function activateUpdate(worker: ServiceWorker) {
  worker.postMessage('SKIP_WAITING');
  navigator.serviceWorker.addEventListener('controllerchange', () => location.reload(), { once: true });
}
