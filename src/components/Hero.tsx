import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { personalInfo, heroFacts } from '../data/portfolioData';
import { Reveal } from './Reveal';

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const adjustFontSize = () => {
      // Reset inline font-size to allow natural CSS clamp computation
      el.style.fontSize = '';

      const parent = el.parentElement;
      if (!parent) return;

      const containerWidth = parent.clientWidth;
      if (!containerWidth) return;

      // Ensure the text fits both within the container and within the viewport horizontally
      const rect = el.getBoundingClientRect();
      const leftOffset = Math.max(rect.left, 0);
      const viewportAvailable = Math.max(180, window.innerWidth - leftOffset - 16);
      const maxAllowedWidth = Math.min(containerWidth, viewportAvailable);

      const currentWidth = el.scrollWidth;

      if (currentWidth > maxAllowedWidth) {
        const computed = window.getComputedStyle(el);
        const currentFontSize = parseFloat(computed.fontSize);
        if (!currentFontSize) return;

        // Proportional scale factor with a 2% buffer for subpixel kerning and letter spacing
        let targetFontSize = Math.floor((currentFontSize * maxAllowedWidth) / currentWidth * 0.98);

        el.style.fontSize = `${targetFontSize}px`;

        // Iterative safeguard: ensure scrollWidth and viewport bounding rect strictly do not overflow
        while (
          (el.scrollWidth > maxAllowedWidth || el.getBoundingClientRect().right > window.innerWidth - 8) &&
          targetFontSize > 14
        ) {
          targetFontSize -= 1;
          el.style.fontSize = `${targetFontSize}px`;
        }
      }
    };

    let frameId: number;
    const triggerAdjust = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(adjustFontSize);
    };

    const resizeObserver = new ResizeObserver(() => {
      triggerAdjust();
    });

    if (el.parentElement) {
      resizeObserver.observe(el.parentElement);
    }
    window.addEventListener('resize', triggerAdjust);

    // Re-run once custom Syne webfont is fully loaded and measured
    if (document.fonts?.ready) {
      document.fonts.ready.then(triggerAdjust);
    }

    triggerAdjust();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', triggerAdjust);
    };
  }, []);

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero-section" className="pb-16 md:pb-24 pt-6 xl:pt-10">
      {/* Meta header */}
      <Reveal className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="meta-label flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
          AVAILABLE FOR HIRE
        </div>
        <div className="meta-label">{personalInfo.role}</div>
      </Reveal>

      {/* Main Brutalist Display Headline */}
      <Reveal delay={80}>
        <h1
          id="hero-display-title"
          ref={titleRef}
          className="text-hero-brutal text-[var(--ink)] m-0 select-none max-w-full"
        >
          <span className="block whitespace-nowrap">ENGINEERED</span>
          <span className="block whitespace-nowrap">SIMPLICITY.</span>
        </h1>
      </Reveal>

      <Reveal delay={160} className="mt-8 max-w-2xl">
        <p className="text-base sm:text-lg md:text-xl font-mono leading-relaxed text-[var(--ink)]">
          {personalInfo.subheadline}
        </p>
      </Reveal>

      <Reveal delay={240} className="mt-10 flex flex-wrap items-center gap-3">
        <button id="hero-action-projects" type="button" onClick={() => scrollTo('#projects')} className="brutal-btn">
          <span>Explore Works</span>
          <ArrowDown size={14} />
        </button>
        <button id="hero-action-contact" type="button" onClick={() => scrollTo('#contact')} className="ghost-btn">
          <span>Get in touch</span>
          <ArrowUpRight size={14} />
        </button>
      </Reveal>

      {/* At-a-glance facts */}
      <Reveal delay={320} className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[var(--rule)]">
        {heroFacts.map((fact) => (
          <div key={fact.label}>
            <div className="meta-label font-bold text-[var(--accent)]">{fact.label}</div>
            <div className="mt-1.5 font-mono text-xs sm:text-sm leading-snug text-[var(--ink)]">{fact.value}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
