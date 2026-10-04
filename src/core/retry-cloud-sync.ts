/** Keeps a cloud listener connected after transient setup failures. */
export function startRetriedCloudSync(connect: () => Promise<() => void>, retryMs = 15_000): () => void {
  let stopped = false;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let disconnect: (() => void) | undefined;
  const attempt = () => {
    void Promise.resolve().then(connect).then((next) => {
      if (stopped) next();
      else disconnect = next;
    }).catch(() => {
      if (!stopped) timer = setTimeout(attempt, retryMs);
    });
  };
  attempt();
  return () => {
    stopped = true;
    clearTimeout(timer);
    disconnect?.();
  };
}
