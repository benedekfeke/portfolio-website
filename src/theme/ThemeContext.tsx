import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { flushSync } from 'react-dom';
import { siteStyles, type SiteStyle } from './styles';

const STYLE_KEY = 'portfolio-style';
const THEME_KEY = 'portfolio-theme';

export interface TransitionOrigin {
  x: number;
  y: number;
}

interface ThemeContextValue {
  style: SiteStyle;
  styleIndex: number;
  isDark: boolean;
  nextStyle: (origin?: TransitionOrigin) => void;
  toggleDark: (origin?: TransitionOrigin) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage may be unavailable (private mode); the choice just won't persist.
  }
}

/** Click point of a pointer event, or the element's center for keyboard activation. */
export function originFrom(e: MouseEvent<HTMLElement>): TransitionOrigin {
  if (e.detail > 0) return { x: e.clientX, y: e.clientY };
  const rect = e.currentTarget.getBoundingClientRect();
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

type ViewTransitionStarter = (update: () => void) => unknown;

/** Runs a state update inside a circular View Transition reveal when supported. */
function runTransition(update: () => void, origin?: TransitionOrigin) {
  const start = (document as unknown as { startViewTransition?: ViewTransitionStarter })
    .startViewTransition;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!start || reducedMotion) {
    update();
    return;
  }

  const root = document.documentElement;
  root.style.setProperty('--vt-x', `${origin?.x ?? window.innerWidth / 2}px`);
  root.style.setProperty('--vt-y', `${origin?.y ?? window.innerHeight / 2}px`);
  start.call(document, () => flushSync(update));
}

function decodeImage(src: string): Promise<void> {
  const img = new Image();
  img.src = src;
  const decoded = img.decode().catch(() => undefined);
  // Never hold the transition hostage to a slow network.
  return Promise.race([decoded, new Promise<void>((resolve) => setTimeout(resolve, 400))]);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [styleIndex, setStyleIndex] = useState(() => {
    const index = siteStyles.findIndex((s) => s.id === readStorage(STYLE_KEY));
    return index === -1 ? 0 : index;
  });

  const [isDark, setIsDark] = useState(() => {
    const saved = readStorage(THEME_KEY);
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const style = siteStyles[styleIndex];

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.style = style.id;
    root.classList.toggle('dark', isDark);
    writeStorage(STYLE_KEY, style.id);
    writeStorage(THEME_KEY, isDark ? 'dark' : 'light');
  }, [style.id, isDark]);

  // Warm the portrait cache so switching styles never shows a blank frame.
  useEffect(() => {
    const timer = setTimeout(() => siteStyles.forEach((s) => decodeImage(s.portrait)), 1200);
    return () => clearTimeout(timer);
  }, []);

  const nextStyle = useCallback(
    (origin?: TransitionOrigin) => {
      const next = (styleIndex + 1) % siteStyles.length;
      decodeImage(siteStyles[next].portrait).then(() =>
        runTransition(() => setStyleIndex(next), origin),
      );
    },
    [styleIndex],
  );

  const toggleDark = useCallback((origin?: TransitionOrigin) => {
    runTransition(() => setIsDark((prev) => !prev), origin);
  }, []);

  const value = useMemo(
    () => ({ style, styleIndex, isDark, nextStyle, toggleDark }),
    [style, styleIndex, isDark, nextStyle, toggleDark],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
