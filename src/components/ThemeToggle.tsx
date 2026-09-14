import { Sun, Moon } from 'lucide-react';
import { originFrom, useTheme } from '../theme/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showText?: boolean;
}

export function ThemeToggle({ className = '', showText = true }: ThemeToggleProps) {
  const { isDark, toggleDark } = useTheme();
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      onClick={(e) => toggleDark(originFrom(e))}
      className={`chip-btn ${className}`}
      aria-label={label}
      title={label}
    >
      {isDark ? <Sun size={13} className="stroke-[1.75]" /> : <Moon size={13} className="stroke-[1.75]" />}
      {showText && <span>{isDark ? '[LIGHT]' : '[DARK]'}</span>}
    </button>
  );
}
