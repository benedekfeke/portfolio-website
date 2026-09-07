import { useState } from 'react';
import { skillsData, learningData, spokenLanguagesData } from '../data/portfolioData';
import { SkillCategory } from '../types';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');

  const categories: { label: string; value: SkillCategory | 'all' }[] = [
    { label: 'ALL', value: 'all' },
    { label: 'LANGUAGES', value: 'languages' },
    { label: 'BACKEND & APIS', value: 'backend' },
    { label: 'FRONTEND', value: 'frontend' },
    { label: 'DEVOPS & CLOUD', value: 'devops' },
    { label: 'QA & TESTING', value: 'testing' },
    { label: 'NETWORKING & ARCH', value: 'architecture' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 border-b-2 border-[var(--ink)]">
      {/* Section Tag */}
      <div className="meta-label mb-4 text-[var(--accent)] font-bold">
        [02] // PROFICIENCIES & LEARNING
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--ink)]">
        <div>
          <h2 className="text-section-brutal text-[var(--ink)]">
            SKILLS
          </h2>
          <p className="font-mono text-xs md:text-sm text-[var(--muted)] mt-2 max-w-xl">
            Quantitative benchmarks based on verified curriculum, engineering practice, and international QA experience. All proficiencies and categories are declared in <code className="text-[var(--ink)] font-bold">portfolioData.ts</code>.
          </p>
        </div>

        <div className="meta-label text-right shrink-0">
          INDEXED // {skillsData.length} TECHNOLOGIES
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2 py-6 border-b border-[var(--ink)] mb-8">
        <span className="meta-label mr-2 hidden sm:inline">CATEGORY:</span>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              id={`skill-cat-btn-${cat.value}`}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`font-mono text-[0.7rem] uppercase tracking-wider py-1 px-2.5 border transition-colors cursor-pointer ${
                isActive
                  ? 'bg-[var(--ink)] text-[var(--bg)] border-[var(--ink)] font-bold'
                  : 'bg-transparent text-[var(--ink)] border-[var(--ink)] hover:bg-[var(--surface-hover)]'
              }`}
            >
              [{cat.label}]
            </button>
          );
        })}
      </div>

      {/* Skills Grid with Technical Proficiency Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            id={`skill-item-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            className="p-4 border border-[var(--ink)] bg-[var(--card-bg)] hover:border-[var(--accent)] transition-all group"
          >
            {/* Header: Name & Metrics */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs sm:text-sm font-bold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                  {skill.name}
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="meta-label text-[var(--muted)]">
                  [{skill.levelLabel}]
                </span>
                <span className="font-bold text-[var(--ink)]">
                  {skill.proficiency}%
                </span>
              </div>
            </div>

            {/* Proficiency Bar with Brutalist Styling */}
            <div className="w-full h-2.5 bg-[var(--surface)] border border-[var(--ink)] overflow-hidden">
              <div
                className="h-full bg-[var(--ink)] group-hover:bg-[var(--accent)] transition-all duration-500 ease-out"
                style={{ width: `${skill.proficiency}%` }}
                role="progressbar"
                aria-valuenow={skill.proficiency}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} proficiency`}
              />
            </div>

            {/* Note */}
            {skill.note && (
              <p className="mt-2 text-[0.7rem] font-mono text-[var(--muted)] line-clamp-1">
                {skill.note}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Spoken Languages Bar */}
      <div className="mb-16 p-5 border-2 border-[var(--ink)] bg-[var(--card-bg)] shadow-[4px_4px_0px_0px_var(--ink)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[var(--ink)] mb-4">
          <div className="meta-label text-[var(--accent)] font-bold">COMMUNICATION // NATURAL LANGUAGES</div>
          <div className="meta-label">3 SPOKEN LANGUAGES</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {spokenLanguagesData.map((lang) => (
            <div key={lang.language} className="p-3 border border-[var(--ink)] bg-[var(--bg)] flex items-center justify-between">
              <span className="font-mono text-sm font-bold text-[var(--ink)]">{lang.language}</span>
              <span className="font-mono text-xs px-2 py-0.5 border border-[var(--ink)] bg-[var(--surface)] font-bold">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Active Learning & Continuous Improvement */}
      <div className="pt-8 border-t border-[var(--ink)]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="meta-label mb-1 text-[var(--accent)]">ACTIVE STUDY & RESEARCH</div>
            <h3 className="font-syne font-extrabold text-2xl uppercase tracking-tight text-[var(--ink)]">
              CONTINUOUS LEARNING
            </h3>
          </div>
          <div className="meta-label">
            IN PROGRESS // {learningData.length} TOPICS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learningData.map((item) => (
            <div
              key={item.id}
              className="grid-card"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="meta-label text-[var(--accent)] font-bold">
                  {item.area}
                </div>
                <div className="text-[0.65rem] font-mono px-2 py-0.5 border border-[var(--ink)] uppercase">
                  [{item.status}]
                </div>
              </div>

              <h4 className="font-syne font-bold text-lg uppercase text-[var(--ink)] mb-2">
                {item.title}
              </h4>

              <div className="space-y-1.5 pt-3 border-t border-[var(--ink)]">
                <div className="meta-label">KEY TAKEAWAY</div>
                <p className="font-mono text-xs leading-relaxed text-[var(--ink)]">
                  {item.keyTakeaway}
                </p>
                <div className="meta-label pt-2">CORE REFERENCES</div>
                <p className="font-mono text-[0.7rem] text-[var(--muted)]">
                  {item.resources}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
