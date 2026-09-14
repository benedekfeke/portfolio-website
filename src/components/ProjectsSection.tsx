import { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../types';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-[var(--rule)]">
      <SectionHeader
        index="01"
        eyebrow="SELECTED WORKS"
        title="PROJECTS"
        description="Distributed backends, full-stack platforms and 3D interfaces. Open a project for its architecture breakdown."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, idx) => {
          // The first project leads full-width so an odd count never leaves an orphan card.
          const lead = idx === 0;
          const tagLimit = lead ? 6 : 4;
          const hiddenTags = project.technologies.length - tagLimit;

          return (
            <Reveal
              as="article"
              key={project.id}
              id={`project-card-${project.id}`}
              delay={idx * 80}
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${project.title}`}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className={`glass-card card-interactive facet group flex flex-col ${
                lead ? 'md:col-span-2 md:grid md:grid-cols-[1.3fr_1fr]' : ''
              }`}
            >
              <div className={`editorial-media-container aspect-[16/10] ${lead ? 'md:aspect-auto md:min-h-[320px]' : ''}`}>
                <img
                  src={project.imagePlaceholderUrl}
                  alt={project.imageAlt}
                  className={`editorial-media-img absolute inset-0 w-full h-full ${
                    project.objectFit === 'contain' ? 'object-contain p-4' : 'object-cover'
                  }`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="meta-label mb-3 flex items-center justify-between gap-3">
                  <span>{project.categoryLabel} · {project.year}</span>
                  <ArrowUpRight size={14} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <h3 className="font-syne font-extrabold text-xl xl:text-2xl uppercase tracking-tight text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="font-mono text-xs leading-relaxed text-[var(--muted)] mb-5">
                  {project.shortDescription}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-1.5">
                  {project.technologies.slice(0, tagLimit).map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                  {hiddenTags > 0 && <span className="tag bg-transparent text-[var(--muted)]">+{hiddenTags}</span>}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-auto inline-flex items-center gap-1 meta-label hover:text-[var(--accent)] transition-colors"
                      title="View GitHub repository"
                    >
                      <Github size={12} />
                      <span>Repo</span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
