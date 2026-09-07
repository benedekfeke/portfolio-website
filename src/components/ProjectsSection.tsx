import { useState } from 'react';
import { ArrowUpRight, Filter, ExternalLink, Github, Sparkles } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: { label: string; value: ProjectCategory }[] = [
    { label: 'ALL', value: 'all' },
    { label: 'FULL-STACK', value: 'full-stack' },
    { label: 'FRONTEND', value: 'frontend' },
    { label: 'SYSTEMS', value: 'systems' },
    { label: 'OPEN-SOURCE', value: 'open-source' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 border-b-2 border-[var(--ink)]">
      {/* Section Tag */}
      <div className="meta-label mb-4 text-[var(--accent)] font-bold">
        [01] // SELECTED WORKS
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--ink)]">
        <div>
          <h2 className="text-section-brutal text-[var(--ink)]">
            PROJECTS
          </h2>
          <p className="font-mono text-xs md:text-sm text-[var(--muted)] mt-2 max-w-xl">
            Distributed applications, high-throughput pipelines, and developer tooling. Click any system to inspect architectural blueprints and technical decisions.
          </p>
        </div>

        <div className="meta-label text-right shrink-0">
          COUNT // {filteredProjects.length} OF {projectsData.length}
        </div>
      </div>

      {/* Brutalist Filter Navigation */}
      <div className="flex flex-wrap items-center gap-2 py-6 border-b border-[var(--ink)] mb-8">
        <span className="meta-label mr-2 hidden sm:inline">FILTER:</span>
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              id={`filter-btn-${filter.value}`}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`font-mono text-[0.7rem] uppercase tracking-wider py-1 px-2.5 border transition-colors cursor-pointer ${
                isActive
                  ? 'bg-[var(--ink)] text-[var(--bg)] border-[var(--ink)] font-bold'
                  : 'bg-transparent text-[var(--ink)] border-[var(--ink)] hover:bg-[var(--surface-hover)]'
              }`}
            >
              [{filter.label}]
            </button>
          );
        })}
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            id={`project-card-${project.id}`}
            onClick={() => setSelectedProject(project)}
            className="grid-card group flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--ink)]"
          >
            <div>
              {/* Media Thumbnail Container with Technical Label */}
              <div className="editorial-media-container aspect-[16/9] mb-5 border border-[var(--ink)]">
                <img
                  src={project.imagePlaceholderUrl}
                  alt={project.title}
                  className={`editorial-media-img w-full h-full ${
                    project.objectFit === 'contain'
                      ? 'object-contain p-3 bg-[var(--surface)]'
                      : 'object-cover'
                  } grayscale group-hover:grayscale-0`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-[var(--ink)] text-[var(--bg)] px-2 py-0.5 text-[0.6rem] font-mono uppercase tracking-wider">
                  SYS.ID // {project.id}
                </div>
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-[var(--accent)] text-white px-2 py-0.5 text-[0.6rem] font-mono uppercase font-bold tracking-wider">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Card Meta */}
              <div className="flex items-center justify-between meta-label text-[var(--muted)] mb-2">
                <span>{project.category} // {project.year}</span>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-[var(--accent)] text-[var(--ink)] transition-colors flex items-center gap-1 text-[0.65rem] border border-[var(--ink)] px-1.5 py-0.5 bg-[var(--surface)]"
                      title="View GitHub Repository"
                    >
                      <Github size={11} />
                      <span className="hidden sm:inline">REPO</span>
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-[var(--accent)] text-[var(--ink)] transition-colors flex items-center gap-1 text-[0.65rem] border border-[var(--ink)] px-1.5 py-0.5 bg-[var(--surface)]"
                      title="Open Live Application"
                    >
                      <ExternalLink size={11} />
                      <span className="hidden sm:inline">LIVE</span>
                    </a>
                  )}
                  <span className="group-hover:text-[var(--accent)] transition-colors flex items-center gap-1">
                    SPEC <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-syne font-extrabold text-xl xl:text-2xl uppercase tracking-tight text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-xs leading-relaxed text-[var(--muted)] mb-5 line-clamp-3">
                {project.shortDescription}
              </p>
            </div>

            {/* Bottom Tech Tags */}
            <div className="pt-4 border-t border-[var(--ink)] flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[0.65rem] font-mono uppercase border border-[var(--ink)] px-2 py-0.5 bg-[var(--bg)] text-[var(--ink)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Modal Dialog */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
