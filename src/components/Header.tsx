import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

interface HeaderProps {
  activeSection?: string;
}

export function Header({ activeSection = '' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills & Learning', href: '#skills' },
    { label: 'Background', href: '#bio' },
    { label: 'Education', href: '#education' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-site-header"
        className={`sticky top-0 z-40 w-full transition-all duration-250 ${
          scrolled
            ? 'bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--line)] py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
        style={{ paddingInline: 'var(--page-padding)' }}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Personal Identity */}
          <a
            id="brand-logo-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col focus:outline-none"
          >
            <span className="font-medium text-base tracking-tight text-[var(--text)] group-hover:opacity-60 transition-opacity duration-180">
              {personalInfo.name}
            </span>
            <span className="text-xs text-[var(--muted)] tracking-normal hidden sm:inline">
              {personalInfo.role}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-main-nav"
            className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider text-[var(--muted)]"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  id={`nav-link-${link.href.substring(1)}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`transition-all duration-180 hover:text-[var(--text)] relative py-1 ${
                    isActive ? 'text-[var(--text)] font-medium' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--text)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right actions: Theme Toggle + Contact CTA */}
          <div className="flex items-center gap-3 md:gap-5">
            <ThemeToggle />

            <a
              id="header-contact-cta"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="hidden sm:inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium text-[var(--text)] border-b border-[var(--text)] pb-0.5 hover:opacity-60 transition-opacity duration-180"
            >
              <span>Let's talk</span>
              <ArrowUpRight size={13} className="editorial-arrow" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-trigger-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[var(--text)] hover:opacity-60 focus:outline-none transition-opacity"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      <div
        id="mobile-nav-panel"
        data-open={mobileMenuOpen}
        className={`fixed inset-0 z-50 bg-[var(--bg)] transition-all duration-300 md:hidden flex flex-col justify-between p-6 sm:p-8 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        style={{ paddingInline: 'var(--page-padding)' }}
      >
        <div className="flex items-center justify-between border-b border-[var(--line)] pb-5">
          <span className="font-medium text-base text-[var(--text)]">
            {personalInfo.name}
          </span>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              id="mobile-menu-close-btn"
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-[var(--text)] hover:opacity-60 transition-opacity"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <nav className="flex flex-col gap-6 py-10" aria-label="Mobile Navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              id={`mobile-nav-${link.href.substring(1)}`}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              style={{ transitionDelay: `${index * 40}ms` }}
              className="text-3xl sm:text-4xl font-medium tracking-heading text-[var(--text)] hover:opacity-50 transition-opacity duration-180"
            >
              {link.label}
            </a>
          ))}
          <a
            id="mobile-nav-contact"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="text-3xl sm:text-4xl font-medium tracking-heading text-[var(--text)] flex items-center gap-3 pt-4 border-t border-[var(--line)]"
          >
            <span>Let's talk</span>
            <ArrowUpRight size={28} />
          </a>
        </nav>

        <div className="border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)] space-y-2">
          <p className="uppercase tracking-wider">Direct contact</p>
          <p className="text-[var(--text)] font-mono">{personalInfo.email}</p>
          <p>{personalInfo.location}</p>
        </div>
      </div>
    </>
  );
}
