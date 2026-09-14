import { Reveal } from './Reveal';

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ index, eyebrow, title, description }: SectionHeaderProps) {
  return (
    <Reveal className="mb-10 md:mb-12">
      <div className="meta-label mb-4 flex items-center gap-3 font-bold text-[var(--accent)]">
        <span>[{index}]</span>
        <span className="h-px w-8 bg-current" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-section-brutal text-[var(--ink)]">{title}</h2>
      {description && (
        <p className="mt-3 max-w-xl font-mono text-xs leading-relaxed text-[var(--muted)] md:text-sm">
          {description}
        </p>
      )}
    </Reveal>
  );
}
