import { Icon } from '@/design-system/icons';

export function Splash() {
  return <main className="startup splash" role="status" aria-label="Iniciando Socrates Aprende">
    <div className="splash__stars" aria-hidden />
    <div className="splash__orbit" aria-hidden><Icon name="BookOpen" /><Icon name="Atom" /><Icon name="Sigma" /></div>
    <div className="splash__mark"><Icon name="Sparkles" size={52} /></div>
    <h1>Socrates</h1><p>Aprende. Descubre. Crece.</p>
  </main>;
}
