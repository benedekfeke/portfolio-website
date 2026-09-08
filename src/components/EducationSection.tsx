import { GraduationCap, Award, FileText } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 border-b-2 border-[var(--ink)]">
      {/* Section Tag */}
      <div className="meta-label mb-4 text-[var(--accent)] font-bold">
        [04] // ACADEMIC FOUNDATION
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--ink)]">
        <div>
          <h2 className="text-section-brutal text-[var(--ink)]">
            EDUCATION
          </h2>
          <p className="font-mono text-xs md:text-sm text-[var(--muted)] mt-2 max-w-xl">
            Formal theoretical grounding in algorithms, discrete mathematics, distributed systems, and modern software engineering.
          </p>
        </div>

        <div className="meta-label text-right shrink-0">
          ACADEMIC // COMPUTER SCIENCE
        </div>
      </div>

      {/* Education Cards */}
      <div className="space-y-6 pt-2">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="grid-card relative"
          >
            {/* Degree, Institution, Period */}
            <div className="pb-4 mb-4 border-b border-[var(--ink)]">
              <div className="pr-16 sm:pr-28">
                <div className="meta-label text-[var(--accent)] font-bold">
                  {edu.institution} // {edu.location}
                </div>
                <h3 className="font-syne font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-[var(--ink)] mt-1">
                  {edu.degree}
                </h3>
              </div>

              {/* Pinned to top right corner with minimal margin & higher transparency */}
              <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-10 flex flex-wrap items-center justify-end gap-1.5 font-mono text-[0.65rem] sm:text-xs p-1 backdrop-blur-xl bg-[color-mix(in_srgb,var(--card-bg)_10%,transparent)] border border-[var(--ink)]/15 shadow-xs max-w-[65%] sm:max-w-none">
                <span className="px-1.5 py-0.5 border border-[var(--ink)]/30 bg-[color-mix(in_srgb,var(--bg)_15%,transparent)] shrink-0">
                  {edu.period}
                </span>
                {edu.gradeOrHonors && (
                  <span className="px-1.5 py-0.5 bg-[color-mix(in_srgb,var(--ink)_65%,transparent)] text-[var(--bg)] font-bold uppercase shrink-0">
                    {edu.gradeOrHonors}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="font-mono text-xs leading-relaxed text-[var(--muted)] mb-4 max-w-2xl">
              {edu.description}
            </p>

            {/* Thesis */}
            {edu.capstoneOrThesis && (
              <div className="p-3 mb-4 bg-[var(--surface)] border border-[var(--ink)] flex items-start gap-2.5 font-mono text-xs">
                <FileText size={15} className="text-[var(--accent)] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[var(--ink)]">THESIS // </span>
                  <span className="text-[var(--muted)]">{edu.capstoneOrThesis}</span>
                </div>
              </div>
            )}

            {/* Coursework Tags */}
            <div className="pt-2">
              <div className="meta-label mb-2">CURRICULUM & MODULES</div>
              <div className="flex flex-wrap gap-1.5">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-[0.65rem] font-mono uppercase px-2 py-0.5 border border-[var(--ink)] bg-[var(--bg)] text-[var(--ink)]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
