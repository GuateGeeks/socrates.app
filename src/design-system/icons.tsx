import type { CSSProperties } from 'react';
import { ICONS } from './icons.generated';

/**
 * Íconos del sistema — Lucide (https://lucide.dev, licencia ISC).
 *
 * El contenido y la interfaz usan NOMBRES de íconos Lucide en PascalCase ("BookOpen", "Calculator").
 * `npm run icons` escanea el código y el contenido y genera `icons.generated.ts` importando SOLO
 * los íconos usados (bundle pequeño para teléfonos). El validador rechaza nombres inexistentes.
 */
export interface IconProps {
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
  /** si se da, el ícono es significativo (role=img); si no, es decorativo */
  label?: string;
}

export function Icon({ name, size = 20, strokeWidth = 2, color = 'currentColor', className, style, label }: IconProps) {
  const C = ICONS[name];
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true };
  if (!C) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} style={style} {...a11y}>
        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2" />
      </svg>
    );
  }
  return <C size={size} strokeWidth={strokeWidth} color={color} className={className} style={style} {...a11y} />;
}

export function hasIcon(name: string) { return name in ICONS; }

/** Ícono Lucide si existe `icon`; si no, el emoji (compatibilidad y contenido lúdico). */
export function Glyph({ icon, emoji, size = 22, className }: { icon?: string; emoji?: string; size?: number; className?: string }) {
  if (icon) return <Icon name={icon} size={size} className={className} />;
  if (emoji) return <span className={className} style={{ fontSize: size * 0.95, lineHeight: 1 }} aria-hidden>{emoji}</span>;
  return null;
}
