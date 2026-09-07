import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { BioSection } from './components/BioSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('projects');

  useEffect(() => {
    const sectionIds = ['projects', 'skills', 'bio', 'education', 'contact'];
    const mainEl = document.getElementById('main-content');
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const isDesktop = window.innerWidth >= 1024;
    const observer = new IntersectionObserver(observerCallback, {
      root: isDesktop ? mainEl : null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.05
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="layout min-h-screen lg:h-screen lg:overflow-hidden lg:grid lg:grid-cols-[280px_1fr] xl:grid-cols-[310px_1fr] bg-[var(--bg)] text-[var(--ink)]">
      {/* Sidebar (Desktop Fixed Column / Mobile Drawer) */}
      <Sidebar activeSection={activeSection} />

      {/* Main Content Area */}
      <main
        id="main-content"
        className="lg:overflow-y-auto px-6 py-8 sm:px-10 sm:py-12 md:px-12 md:py-16 xl:px-16 xl:py-20 relative w-full"
      >
        <div className="max-w-5xl mx-auto w-full">
          <Hero />
          <ProjectsSection />
          <SkillsSection />
          <BioSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
