import { Palette } from 'lucide-react';
import { originFrom, useTheme } from '../theme/ThemeContext';
import { siteStyles } from '../theme/styles';

interface StyleSwitchProps {
  className?: string;
  showText?: boolean;
}

export function StyleSwitch({ className = '', showText = true }: StyleSwitchProps) {
  const { style, styleIndex, nextStyle } = useTheme();
  const next = siteStyles[(styleIndex + 1) % siteStyles.length];

  return (
    <button
      type="button"
      onClick={(e) => nextStyle(originFrom(e))}
      className={`chip-btn ${className}`}
      aria-label={`Current style ${style.name}. Switch to ${next.name}`}
      title={`Style: ${style.name} — next: ${next.name}`}
    >
      <Palette size={13} className="stroke-[1.75]" />
      {showText && <span>{style.name}</span>}
    </button>
  );
}
