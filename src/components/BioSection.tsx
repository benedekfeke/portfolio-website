import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { personalInfo, milestonesData, editorialPrinciples, bioMetrics } from '../data/portfolioData';
import { originFrom, useTheme } from '../theme/ThemeContext';
import { siteStyles } from '../theme/styles';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function BioSection() {
  const { style, styleIndex, nextStyle } = useTheme();
  const [shiftCount, setShiftCount] = useState(0);
  const next = siteStyles[(styleIndex + 1) % siteStyles.length];

  return (
    <section id="bio" className="py-16 md:py-24 border-t border-[var(--rule)]">
      <SectionHeader index="03" eyebrow="BACKGROUND & PHILOSOPHY" title="BIO" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Portrait — each click moves to the next portrait and restyles the whole site */}
        <Reveal className="lg:col-span-5">
          <div className="portrait-wrap">
            <button
              type="button"
              onClick={(e) => {
                nextStyle(originFrom(e));
                setShiftCount((n) => n + 1);
              }}
              className="portrait-frame facet"
              aria-label={`Portrait in ${style.name} style. Activate to switch the site to ${next.name}.`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {siteStyles.map((s, i) => (
                  <img
                    key={s.id}
                    src={s.portrait}
                    alt={i === styleIndex ? s.portraitAlt : ''}
                    aria-hidden={i !== styleIndex}
                    loading={i === styleIndex ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`portrait-img absolute inset-0 w-full h-full object-cover object-[50%_35%] ${
                      i === styleIndex ? 'is-active' : ''
                    }`}
                  />
                ))}
                {shiftCount > 0 && <span key={shiftCount} className="portrait-sheen" />}
                <span className="portrait-hint">
                  <RefreshCw size={11} />
                  Tap to restyle
                </span>
              </div>
            </button>
          </div>

          <div className="mt-6 flex items-end justify-between gap-4">
            <div aria-live="polite">
              <div className="meta-label">
                Style {String(styleIndex + 1).padStart(2, '0')} / {String(siteStyles.length).padStart(2, '0')}
              </div>
              <div className="font-syne font-extrabold text-xl uppercase leading-tight text-[var(--ink)] mt-1">
                {style.name}
              </div>
              <div className="font-mono text-[0.7rem] text-[var(--muted)]">{style.description}</div>
            </div>
            <div className="flex items-center gap-1.5 pb-1" aria-hidden="true">
              {siteStyles.map((s, i) => (
                <span
                  key={s.id}
                  className={`h-1.5 transition-all duration-300 ${
                    i === styleIndex ? 'w-6 bg-[var(--accent)]' : 'w-1.5 bg-[var(--rule-strong)]'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <Reveal delay={80}>
            <h3 className="font-syne font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[var(--ink)] leading-tight">
              "Software should be engineered with uncompromising simplicity and resilience."
            </h3>
          </Reveal>

          <Reveal delay={140} className="space-y-4 font-mono text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
            {personalInfo.bioSummary.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={200} className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--rule)]">
            {bioMetrics.map((metric, idx) => (
              <div key={metric.label} className="min-w-0">
                <div
                  className={`font-syne font-extrabold text-2xl sm:text-3xl leading-none ${
                    idx === 0 ? 'text-[var(--accent)]' : 'text-[var(--ink)]'
                  }`}
                >
                  {metric.value}
                </div>
                <div className="meta-label mt-2">{metric.label}</div>
              </div>
            ))}
          </Reveal>

          {/* Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            {editorialPrinciples.map((principle, idx) => (
              <Reveal key={principle.title} delay={260 + idx * 60} className="border-t-2 border-[var(--ink)] pt-3">
                <div className="meta-label font-bold text-[var(--accent)]">0{idx + 1}</div>
                <h4 className="font-syne font-bold text-base uppercase leading-tight text-[var(--ink)] mt-1.5">
                  {principle.title}
                </h4>
                <p className="font-mono text-xs leading-relaxed text-[var(--muted)] mt-1.5">{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Trajectory */}
      <div className="mt-16">
        <Reveal className="meta-label mb-6 font-bold text-[var(--accent)]">Trajectory</Reveal>
        <ol className="relative ml-1 space-y-10 border-l border-[var(--rule-strong)]">
          {milestonesData.map((milestone, idx) => (
            <Reveal as="li" key={milestone.role} delay={idx * 80} className="relative pl-6 sm:pl-8">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 bg-[var(--accent)]" aria-hidden="true" />
              <div className="meta-label">{milestone.period}</div>
              <div className="mt-1 font-mono text-sm font-bold text-[var(--ink)]">
                {milestone.role}
                <span className="ml-2 text-xs font-medium text-[var(--accent)]">{milestone.organization}</span>
              </div>
              <p className="mt-2 max-w-2xl font-mono text-xs leading-relaxed text-[var(--muted)]">{milestone.summary}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {milestone.tags.slice(0, 5).map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
