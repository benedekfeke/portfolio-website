import { ArrowDown, Code2, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero-section"
      className="pb-16 pt-6 xl:pt-10 border-b-2 border-[var(--ink)]"
    >
      {/* Meta header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="meta-label flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
          AVAILABLE FOR HIRE
        </div>
        <div className="meta-label">
          SYS.VER // 2026.9
        </div>
      </div>

      {/* Main Brutalist Display Headline */}
      <h1
        id="hero-display-title"
        className="text-hero-brutal text-[var(--ink)] m-0 select-none"
      >
        ENGINEERED
        <br />
        SIMPLICITY.
      </h1>

      {/* Hero Description & Subtext */}
      <div className="mt-8 max-w-2xl">
        <p className="text-base sm:text-lg md:text-xl font-mono leading-relaxed text-[var(--ink)]">
          {personalInfo.subheadline}
        </p>
        <p className="text-xs font-mono text-[var(--muted)] mt-3">
          Specializing in Go, React, Java, distributed backends, and performance-first architecture.
        </p>
      </div>

      {/* Action buttons & tech pillars */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <button
          id="hero-action-projects"
          type="button"
          onClick={scrollToProjects}
          className="brutal-btn"
        >
          <span>Explore Works</span>
          <ArrowDown size={14} />
        </button>

        <button
          id="hero-action-contact"
          type="button"
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider py-2.5 px-4 border border-[var(--ink)] hover:bg-[var(--surface-hover)] transition-colors text-[var(--ink)] cursor-pointer"
        >
          <span>Initiate Contact</span>
        </button>
      </div>

      {/* Technical metrics / disciplines grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[var(--ink)]">
        <div className="flex items-start gap-3">
          <Terminal size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
          <div>
            <div className="meta-label">ARCHITECTURE</div>
            <div className="text-xs font-mono text-[var(--ink)] mt-0.5">Distributed & Clean Code</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Code2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
          <div>
            <div className="meta-label">INTERFACE</div>
            <div className="text-xs font-mono text-[var(--ink)] mt-0.5">Intuitive and clean User Interface</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Cpu size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
          <div>
            <div className="meta-label">SYSTEMS</div>
            <div className="text-xs font-mono text-[var(--ink)] mt-0.5">Resilient Cloud & CI/CD</div>
          </div>
        </div>
      </div>
    </section>
  );
}
