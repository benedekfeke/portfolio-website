import { Camera } from 'lucide-react';
import { personalInfo, milestonesData, editorialPrinciples } from '../data/portfolioData';

export function BioSection() {
  return (
    <section id="bio" className="py-16 md:py-24 border-b-2 border-[var(--ink)]">
      {/* Section Tag */}
      <div className="meta-label mb-4 text-[var(--accent)] font-bold">
        [03] // BACKGROUND & PHILOSOPHY
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--ink)]">
        <div>
          <h2 className="text-section-brutal text-[var(--ink)]">
            BIO
          </h2>
          <p className="font-mono text-xs md:text-sm text-[var(--muted)] mt-2 max-w-xl">
            Software engineer based in Slovakia. Dedicated to robust distributed backends, clean interfaces, and resilient architecture.
          </p>
        </div>

        <div className="meta-label text-right shrink-0">
          OPERATOR // BENEDEK FEKE
        </div>
      </div>

      {/* Main Bio Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b border-[var(--ink)] items-start">
        {/* Left: Portrait Placeholder */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative border-2 border-[var(--ink)] bg-[var(--surface)] p-2 shadow-[6px_6px_0px_0px_var(--ink)]">
            <div className="aspect-[4/5] overflow-hidden border border-[var(--ink)]">
              <img
                src={personalInfo.placeholderPortrait.url}
                alt={personalInfo.placeholderPortrait.alt}
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Technical Caption Box */}
            <div className="mt-2 p-2 bg-[var(--ink)] text-[var(--bg)] font-mono text-[0.65rem] flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-bold">
                <Camera size={12} className="text-[var(--accent)]" />
                PORTRAIT // BENEDEK FEKE
              </span>
              <span>VER. 2026</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[0.65rem] font-mono text-[var(--muted)] px-1">
            <span>LOCATION: {personalInfo.location}</span>
            <span>STATUS: ACTIVE</span>
          </div>
        </div>

        {/* Right: Narrative & Tenets */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-syne font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[var(--ink)] leading-tight">
            "Software should be engineered with uncompromising simplicity and resilience."
          </h3>

          <div className="space-y-4 font-mono text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
            {personalInfo.bioSummary.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Core Metrics in Brutalist Boxes */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-6 border-t border-[var(--ink)]">
            {[
              { value: '3+', label: 'YR.ENG', accent: false },
              { value: '99%', label: 'UPTIME', accent: true },
              { value: 'DEV|OPS|QA', label: 'TRGT', accent: false },
            ].map((metric, idx) => {
              const getFontSize = (val: string) => {
                if (val.length <= 3) return 'text-xl sm:text-2xl';
                if (val.length <= 5) return 'text-base sm:text-xl';
                if (val.length <= 8) return 'text-sm sm:text-base md:text-lg';
                return 'text-xs sm:text-sm md:text-base';
              };

              return (
                <div
                  key={idx}
                  className="p-2 sm:p-3 border border-[var(--ink)] bg-[var(--card-bg)] min-w-0 overflow-hidden flex flex-col justify-between"
                >
                  <div
                    className={`font-syne font-extrabold ${getFontSize(metric.value)} ${
                      metric.accent ? 'text-[var(--accent)]' : 'text-[var(--ink)]'
                    } leading-tight tracking-tight break-all [overflow-wrap:anywhere]`}
                    title={metric.value}
                  >
                    {metric.value}
                  </div>
                  <div className="meta-label mt-1 truncate" title={metric.label}>
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Engineering Principles */}
      <div className="pt-10">
        <div className="meta-label mb-4 text-[var(--accent)] font-bold">
          CORE PRINCIPLES
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {editorialPrinciples.map((principle, idx) => (
            <div
              key={principle.title}
              className="grid-card flex flex-col justify-between"
            >
              <div>
                <div className="meta-label text-[var(--accent)] mb-2">
                  PRIN // 0{idx + 1}
                </div>
                <h4 className="font-syne font-bold text-lg uppercase text-[var(--ink)] mb-2">
                  {principle.title}
                </h4>
                <p className="font-mono text-xs leading-relaxed text-[var(--muted)]">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trajectory & Milestones */}
      <div className="mt-12 pt-8 border-t border-[var(--ink)]">
        <div className="meta-label mb-6">TRAJECTORY & MILESTONES</div>
        <div className="space-y-3 font-mono text-xs">
          {milestonesData.map((milestone, idx) => (
            <div
              key={idx}
              className="p-3.5 border border-[var(--ink)] flex flex-col sm:flex-row sm:items-start justify-between gap-3 hover:bg-[var(--surface-hover)] transition-colors"
            >
              <div className="space-y-1 sm:max-w-md">
                <div className="flex items-center gap-2.5">
                  <span className="bg-[var(--ink)] text-[var(--bg)] px-2 py-0.5 text-[0.65rem] font-bold">
                    {milestone.period}
                  </span>
                  <span className="font-bold text-[var(--ink)]">
                    {milestone.role}
                  </span>
                </div>
                <div className="text-[0.7rem] text-[var(--accent)] font-mono">
                  {milestone.organization}
                </div>
                <p className="text-[0.7rem] text-[var(--muted)] leading-relaxed">
                  {milestone.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 shrink-0">
                {milestone.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.6rem] border border-[var(--ink)] px-1.5 py-0.5 bg-[var(--bg)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
