import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Portaled to <body> so revealed/transformed ancestors can't trap the fixed overlay.
  return createPortal(
    <div
      id="project-modal-backdrop"
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="modal-panel facet relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--bg)] border border-[var(--rule-strong)] p-6 sm:p-8 md:p-10 text-[var(--ink)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-project-modal-btn"
          type="button"
          onClick={onClose}
          className="chip-btn absolute top-5 right-5 px-2"
          aria-label="Close project details"
        >
          <X size={18} />
        </button>

        <div className="meta-label font-bold text-[var(--accent)] pr-12">
          {project.categoryLabel} · {project.year}
        </div>
        <h2
          id="project-modal-title"
          className="font-syne font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight mt-2 mb-3 leading-tight pr-12"
        >
          {project.title}
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-2xl">
          {project.shortDescription}
        </p>

        {(project.liveDemoUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-2 mt-5">
            {project.liveDemoUrl && (
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="brutal-btn">
                <ExternalLink size={13} />
                <span>Live app</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={project.liveDemoUrl ? 'ghost-btn' : 'brutal-btn'}
              >
                <Github size={13} />
                <span>Source</span>
              </a>
            )}
          </div>
        )}

        <div className="editorial-media-container group aspect-[16/9] mt-6 mb-8">
          <img
            src={project.imagePlaceholderUrl}
            alt={project.imageAlt}
            className={`editorial-media-img absolute inset-0 w-full h-full ${
              project.objectFit === 'contain' ? 'object-contain p-4' : 'object-cover'
            }`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-7">
            <div>
              <div className="meta-label mb-2">Overview</div>
              <p className="font-mono text-xs leading-relaxed whitespace-pre-line">{project.fullOverview}</p>
            </div>

            {project.problemStatement && (
              <div className="border-l-2 border-[var(--accent)] pl-4">
                <div className="meta-label mb-1.5">The challenge</div>
                <p className="font-mono text-xs leading-relaxed text-[var(--muted)]">{project.problemStatement}</p>
              </div>
            )}

            <div>
              <div className="meta-label mb-3">Highlights</div>
              <ul className="space-y-2.5">
                {project.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-mono text-xs leading-relaxed">
                    <ArrowRight size={13} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.architectureDetails && project.architectureDetails.length > 0 && (
              <div>
                <div className="meta-label mb-3">Architecture</div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {project.architectureDetails.map((prop) => (
                    <div key={prop.label}>
                      <dt className="font-mono text-[0.7rem] font-bold uppercase">{prop.label}</dt>
                      <dd className="font-mono text-xs text-[var(--muted)] mt-1 leading-relaxed">{prop.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          <aside className="md:col-span-4 space-y-6 md:border-l md:border-[var(--rule)] md:pl-6">
            <div>
              <div className="meta-label mb-1.5">Role</div>
              <p className="font-mono text-xs font-bold">{project.role}</p>
            </div>
            {project.clientOrOrg && (
              <div>
                <div className="meta-label mb-1.5">Context</div>
                <p className="font-mono text-xs">{project.clientOrOrg}</p>
              </div>
            )}
            <div>
              <div className="meta-label mb-2">Tech stack</div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>,
    document.body,
  );
}
