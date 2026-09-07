import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    const mainEl = document.querySelector('#main-content');
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-site-footer"
      className="mt-16 pt-8 pb-12 border-t-2 border-[var(--ink)] font-mono text-xs text-[var(--muted)]"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="font-syne font-bold text-sm uppercase text-[var(--ink)]">
            {personalInfo.name} // TECHNICAL PORTFOLIO
          </div>
          <div className="text-[0.7rem]">
            &copy; {currentYear} · Simply made.
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 p-2 border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors cursor-pointer text-[0.7rem] uppercase tracking-wider"
        >
          <span>[TOP]</span>
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  );
}
