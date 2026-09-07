import { useEffect } from 'react';
import { X, ExternalLink, Github, Calendar, CheckSquare, AlertCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--bg)] border-2 border-[var(--ink)] p-6 sm:p-8 md:p-10 text-[var(--ink)] shadow-[8px_8px_0px_0px_var(--ink)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors cursor-pointer"
          aria-label="Close project preview"
        >
          <X size={20} />
        </button>

        {/* Header Metadata */}
        <div className="meta-label mb-2 text-[var(--accent)] font-bold">
          SYS.SPEC // {project.categoryLabel} — {project.year}
        </div>

        {/* Title */}
        <h2 className="font-syne font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[var(--ink)] mt-1 mb-4 leading-tight">
          {project.title}
        </h2>

        <p className="font-mono text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-2xl mb-6">
          {project.shortDescription}
        </p>

        {/* Media Showcase */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-[var(--surface)] border border-[var(--ink)] mb-6">
          <img
            src={project.imagePlaceholderUrl}
            alt={project.imageAlt}
            className={`w-full h-full ${
              project.objectFit === 'contain'
                ? 'object-contain p-4 bg-[var(--surface)]'
                : 'object-cover'
            } grayscale hover:grayscale-0 transition-all duration-300`}
          />
          {project.isPlaceholder ? (
            <div className="absolute bottom-0 inset-x-0 bg-[var(--ink)] text-[var(--bg)] p-3 text-[0.7rem] font-mono flex items-center justify-between gap-3">
              <span className="flex items-center gap-1.5 font-bold">
                <AlertCircle size={14} className="text-[var(--accent)]" />
                CONCEPT SPECIFICATION
              </span>
              <span className="opacity-80 hidden sm:inline">Production assets will be linked in portfolioData.ts</span>
            </div>
          ) : (
            <div className="absolute bottom-0 inset-x-0 bg-[var(--ink)] text-[var(--bg)] px-3 py-2 text-[0.68rem] font-mono flex items-center justify-between gap-3 border-t border-[var(--ink)]">
              <span className="font-bold flex items-center gap-1.5 text-[var(--accent)]">
                PRODUCTION VERIFIED // {project.year}
              </span>
              <span className="opacity-80 font-mono text-[0.65rem]">{project.clientOrOrg || 'INDEPENDENT REPOSITORY'}</span>
            </div>
          )}
        </div>

        {/* Technical Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-[var(--ink)]">
          <div className="md:col-span-8 space-y-5">
            <div>
              <div className="meta-label mb-2">SYSTEM OVERVIEW</div>
              <p className="font-mono text-xs leading-relaxed text-[var(--ink)] whitespace-pre-line">
                {project.fullOverview}
              </p>
            </div>

            {project.problemStatement && (
              <div>
                <div className="meta-label mb-2">CHALLENGE & SPECIFICATION</div>
                <p className="font-mono text-xs leading-relaxed text-[var(--muted)]">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {project.architectureDetails && project.architectureDetails.length > 0 && (
              <div className="p-4 border border-[var(--ink)] bg-[var(--card-bg)] space-y-3">
                <div className="meta-label text-[var(--accent)] font-bold">
                  CORE SYSTEM PROPERTIES & ARCHITECTURE
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.architectureDetails.map((prop, idx) => (
                    <div key={idx} className="border-b border-[var(--ink)]/30 pb-2 last:border-b-0 last:pb-0">
                      <div className="font-mono text-[0.7rem] font-bold text-[var(--ink)] uppercase">
                        {prop.label}
                      </div>
                      <div className="font-mono text-xs text-[var(--muted)] mt-0.5 leading-relaxed">
                        {prop.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="meta-label mb-2.5">KEY ARCHITECTURAL HIGHLIGHTS</div>
              <ul className="space-y-2">
                {project.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-mono text-xs text-[var(--ink)]">
                    <CheckSquare size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Tech Specs */}
          <div className="md:col-span-4 space-y-5 md:border-l md:border-[var(--ink)] md:pl-6">
            <div>
              <div className="meta-label mb-1.5">ROLE</div>
              <p className="font-mono text-xs font-bold text-[var(--ink)]">{project.role}</p>
            </div>

            <div>
              <div className="meta-label mb-2">TECH STACK</div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[0.65rem] font-mono uppercase px-2 py-0.5 border border-[var(--ink)] bg-[var(--surface)] text-[var(--ink)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--ink)]">
              <div className="meta-label mb-2.5">ARTIFACTS</div>
              <div className="space-y-2 font-mono text-xs">
                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 border border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors group"
                  >
                    <span className="flex items-center gap-1.5 text-[0.7rem] font-bold">
                      <ExternalLink size={13} />
                      Live Application
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-wider text-[var(--accent)] group-hover:text-[var(--bg)] font-bold">
                      [OPEN ↗]
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center justify-between p-2 border border-[var(--ink)] bg-[var(--surface)] text-[var(--muted)]">
                    <span className="flex items-center gap-1.5 text-[0.7rem]">
                      <ExternalLink size={12} />
                      Live Deploy
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-wider">[NOT PUBLIC / LOCAL]</span>
                  </div>
                )}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 border border-[var(--ink)] bg-[var(--bg)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors group"
                  >
                    <span className="flex items-center gap-1.5 text-[0.7rem] font-bold">
                      <Github size={13} />
                      Source Repository
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-wider group-hover:text-[var(--accent)] font-bold">
                      [GITHUB ↗]
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center justify-between p-2 border border-[var(--ink)] bg-[var(--surface)] text-[var(--muted)]">
                    <span className="flex items-center gap-1.5 text-[0.7rem]">
                      <Github size={12} />
                      Source Repo
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-wider">[INTERNAL SPEC]</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-[var(--ink)] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="brutal-btn"
          >
            [CLOSE SPEC]
          </button>
        </div>
      </div>
    </div>
  );
}
