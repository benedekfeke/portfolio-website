import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';

let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === 'undefined') return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', '');
            sharedObserver?.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
  }
  return sharedObserver;
}

interface RevealProps {
  as?: ElementType;
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  /** Any other attribute is forwarded to the rendered element. */
  [attribute: string]: unknown;
}

/** Fades and lifts its element into place the first time it scrolls into view. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = getObserver();
    if (!observer) {
      el.setAttribute('data-revealed', '');
      return;
    }
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
      {...rest}
    />
  );
}
