import { FileText } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-[var(--rule)]">
      <SectionHeader index="04" eyebrow="ACADEMIC FOUNDATION" title="EDUCATION" />

      <div className="space-y-4">
        {educationData.map((edu, idx) => (
          <Reveal
            as="article"
            key={edu.degree}
            delay={idx * 80}
            className="glass-card facet grid grid-cols-1 md:grid-cols-[170px_1fr] gap-3 md:gap-8 p-5 sm:p-6"
          >
            <div className="flex md:flex-col items-center md:items-start gap-2">
              <span className="font-mono text-xs font-bold text-[var(--ink)]">{edu.period}</span>
              {edu.gradeOrHonors && (
                <span className="tag bg-[var(--ink)] text-[var(--bg)]">{edu.gradeOrHonors}</span>
              )}
            </div>

            <div>
              <div className="meta-label font-bold text-[var(--accent)]">
                {edu.institution} · {edu.location}
              </div>
              <h3 className="font-syne font-extrabold text-lg sm:text-xl uppercase tracking-tight text-[var(--ink)] mt-1 leading-tight">
                {edu.degree}
              </h3>
              <p className="font-mono text-xs leading-relaxed text-[var(--muted)] mt-2 max-w-2xl">{edu.description}</p>

              {edu.capstoneOrThesis && (
                <p className="mt-3 flex items-start gap-2 font-mono text-xs text-[var(--ink)]">
                  <FileText size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-bold">Thesis: </span>
                    {edu.capstoneOrThesis}
                  </span>
                </p>
              )}

              <p className="mt-3 font-mono text-[0.7rem] leading-relaxed text-[var(--muted)]">
                {edu.coursework.join(' · ')}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
