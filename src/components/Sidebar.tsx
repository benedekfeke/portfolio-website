import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

interface SidebarProps {
  activeSection: string;
}

export function Sidebar({ activeSection }: SidebarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { num: '01', label: 'PROJECTS', href: '#projects', id: 'projects' },
    { num: '02', label: 'SKILLS', href: '#skills', id: 'skills' },
    { num: '03', label: 'BIO', href: '#bio', id: 'bio' },
    { num: '04', label: 'EDUCATION', href: '#education', id: 'education' },
    { num: '05', label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Header (< lg screens) */}
      <header className="lg:hidden sticky top-0 z-40 w-full bg-[var(--bg)] border-b-2 border-[var(--ink)] px-5 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-syne font-extrabold text-xl tracking-tight uppercase text-[var(--ink)]"
        >
          {personalInfo.name}
        </a>

        <div className="flex items-center gap-3">
          <ThemeToggle showText={false} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--bg)] p-6 flex flex-col justify-between transition-transform duration-200 lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b-2 border-[var(--ink)] pb-4">
          <span className="font-syne font-extrabold text-xl uppercase text-[var(--ink)]">
            {personalInfo.name}
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 border border-[var(--ink)] text-[var(--ink)]"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-5 py-8 font-mono">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-xl text-[var(--ink)] hover:text-[var(--accent)] transition-colors flex items-center gap-3"
            >
              <span className="text-[var(--accent)] font-bold">[{link.num}]</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="border-t-2 border-[var(--ink)] pt-4 space-y-3">
          <div className="meta-label">{personalInfo.location} // REMOTE</div>
          <div className="text-xs font-mono text-[var(--muted)]">{personalInfo.email}</div>
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Desktop Fixed Aside (>= lg screens) */}
      <aside
        id="main-sidebar"
        className="hidden lg:flex flex-col justify-between sticky top-0 h-screen w-[280px] xl:w-[310px] shrink-0 border-r-2 border-[var(--ink)] p-8 xl:p-10 bg-[var(--bg)] select-none"
      >
        {/* Top block */}
        <div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block group"
          >
            <div className="font-syne font-extrabold text-2xl xl:text-[1.75rem] leading-none uppercase text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
              {personalInfo.name}
            </div>
            <div className="meta-label mt-2">
              {personalInfo.role.toUpperCase()}
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3.5 mt-10 xl:mt-12 font-mono text-xs xl:text-sm tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`group flex items-center gap-2.5 py-1.5 px-2 -mx-2 transition-all duration-150 ${
                    isActive
                      ? 'bg-[var(--ink)] text-[var(--bg)] font-bold'
                      : 'text-[var(--ink)] hover:text-[var(--accent)] hover:translate-x-1'
                  }`}
                >
                  <span className={isActive ? 'text-[var(--accent)]' : 'opacity-60'}>
                    [{link.num}]
                  </span>
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom Metadata & Controls */}
        <div className="space-y-4 pt-6 border-t border-[var(--ink)]">
          <div className="flex items-center justify-between">
            <ThemeToggle />
          </div>

          <div className="space-y-1">
            <div className="meta-label">LOCATION</div>
            <div className="text-xs font-mono text-[var(--ink)]">{personalInfo.location} // REMOTE</div>
          </div>

          <div className="space-y-1">
            <div className="meta-label">STATUS</div>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--ink)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>AVAILABLE FOR HIRE</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
