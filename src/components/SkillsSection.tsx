import type { CSSProperties } from 'react';
import { skillsData, learningData, spokenLanguagesData } from '../data/portfolioData';
import { SkillCategory } from '../types';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

type SkillGroup = { value: SkillCategory; label: string };

// Two hand-balanced columns (stacked on mobile) instead of a filterable wall of cards.
const groupColumns: SkillGroup[][] = [
  [
    { value: 'backend', label: 'Backend & APIs' },
    { value: 'languages', label: 'Languages' },
    { value: 'testing', label: 'QA & Testing' },
  ],
  [
    { value: 'devops', label: 'DevOps & Cloud' },
    { value: 'frontend', label: 'Frontend & UI' },
    { value: 'architecture', label: 'Networking, AI & Team' },
  ],
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-[var(--rule)]">
      <SectionHeader
        index="02"
        eyebrow="PROFICIENCIES & LEARNING"
        title="SKILLS"
        description="Grounded in coursework, shipped projects and day-to-day QA work. Hover a skill for details."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {groupColumns.map((column, ci) => (
          <div key={ci} className="space-y-4">
            {column.map((group, gi) => {
              const items = skillsData.filter((s) => s.category === group.value);
              if (items.length === 0) return null;

              return (
                <Reveal key={group.value} delay={(ci + gi) * 70} className="glass-card facet p-5 sm:p-6">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="meta-label font-bold text-[var(--accent)]">{group.label}</h3>
                    <span className="meta-label">{String(items.length).padStart(2, '0')}</span>
                  </div>

                  <ul className="space-y-3.5">
                    {items.map((skill, i) => (
                      <li
                        key={skill.name}
                        className="skill-row"
                        title={skill.note}
                        style={{ '--bar-delay': `${i * 90}ms` } as CSSProperties}
                      >
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="font-mono text-xs font-bold leading-snug text-[var(--ink)]">{skill.name}</span>
                          <span className="meta-label shrink-0">{skill.levelLabel}</span>
                        </div>
                        <div
                          className="skill-track mt-1.5"
                          role="progressbar"
                          aria-valuenow={skill.proficiency}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency`}
                        >
                          <div className="skill-fill" style={{ '--level': `${skill.proficiency}%` } as CSSProperties} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        ))}
      </div>

      {/* Spoken languages */}
      <Reveal className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-5 border-y border-[var(--rule)]">
        <div className="meta-label font-bold text-[var(--accent)] shrink-0">Spoken languages</div>
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {spokenLanguagesData.map((lang) => (
            <li key={lang.language} className="font-mono text-sm text-[var(--ink)]">
              <span className="font-bold">{lang.language}</span>
              <span className="ml-2 text-xs text-[var(--muted)]">{lang.level}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Continuous learning */}
      <div className="mt-16">
        <Reveal className="mb-6">
          <div className="meta-label mb-1 font-bold text-[var(--accent)]">Active study</div>
          <h3 className="font-syne font-extrabold text-2xl uppercase tracking-tight text-[var(--ink)]">
            CONTINUOUS LEARNING
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learningData.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 70} className="glass-card facet p-5">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="meta-label">{item.area}</span>
                <span className="tag">{item.status}</span>
              </div>
              <h4 className="font-syne font-bold text-base sm:text-lg uppercase leading-tight text-[var(--ink)]">
                {item.title}
              </h4>
              <p className="mt-2 font-mono text-xs leading-relaxed text-[var(--muted)]">{item.keyTakeaway}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
