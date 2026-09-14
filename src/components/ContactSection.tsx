import { useState, FormEvent } from 'react';
import { Copy, Check, ArrowUpRight, Github, Linkedin, FileDown, Send, CheckSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [cvNotice, setCvNotice] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });

  const linkedinUrl =
    personalInfo.linkedin.startsWith('http://') || personalInfo.linkedin.startsWith('https://')
      ? personalInfo.linkedin
      : `https://${personalInfo.linkedin}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCvClick = () => {
    setCvNotice(true);
    setTimeout(() => setCvNotice(false), 3000);
  };

  // No backend: hand the message to the visitor's mail client, pre-filled.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.details}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-[var(--rule)]">
      <SectionHeader index="05" eyebrow="GET IN TOUCH" title="LET'S TALK" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        <Reveal className="space-y-6">
          <p className="font-mono text-sm sm:text-base leading-relaxed text-[var(--ink)]">
            {personalInfo.availability}. The fastest way to reach me is email.
          </p>

          <button
            type="button"
            id="accent-email-box"
            onClick={handleCopyEmail}
            className="accent-box w-full cursor-pointer flex items-center justify-between text-left"
            title="Copy email address"
          >
            <div>
              <div className="text-[0.6rem] uppercase tracking-widest opacity-70 mb-1">
                {copied ? 'Copied to clipboard' : 'Email · click to copy'}
              </div>
              <div className="font-mono text-xs sm:text-sm font-bold tracking-wider break-all">{personalInfo.email}</div>
            </div>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>

          <dl className="space-y-2.5 font-mono text-xs">
            <div className="flex items-center justify-between py-1.5 border-b border-[var(--rule)]">
              <dt className="opacity-70">LOCATION</dt>
              <dd className="font-bold">{personalInfo.location}</dd>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-[var(--rule)]">
              <dt className="opacity-70">AVAILABILITY</dt>
              <dd className="font-bold text-[var(--accent)]">● READY FOR HIRE</dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-2">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="chip-btn">
              <Github size={13} />
              <span>GitHub</span>
              <ArrowUpRight size={11} />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="chip-btn">
              <Linkedin size={13} />
              <span>LinkedIn</span>
              <ArrowUpRight size={11} />
            </a>
            <button type="button" onClick={handleCvClick} className="chip-btn">
              <FileDown size={13} />
              <span>CV</span>
            </button>
          </div>
          {cvNotice && (
            <div className="meta-label font-bold text-[var(--accent)]">
              CV available on request · {personalInfo.email}
            </div>
          )}
        </Reveal>

        <Reveal delay={120}>
          {submitted ? (
            <div className="glass-card facet p-8 text-center space-y-4">
              <CheckSquare size={32} className="mx-auto text-[var(--accent)]" />
              <div className="font-syne font-extrabold text-2xl uppercase tracking-tight text-[var(--ink)]">
                Almost sent
              </div>
              <p className="font-mono text-xs text-[var(--muted)] max-w-sm mx-auto leading-relaxed">
                Thanks, {formData.name}. Your email app should have opened with the message ready. Hit send there, or
                write to {personalInfo.email} directly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', details: '' });
                }}
                className="brutal-btn mt-2"
              >
                Write another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                required
                placeholder="NAME *"
                aria-label="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="brutal-input"
                id="contact-name-input"
              />
              <input
                type="email"
                required
                placeholder="EMAIL *"
                aria-label="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="brutal-input"
                id="contact-email-input"
              />
              <textarea
                required
                rows={5}
                placeholder="WHAT'S ON YOUR MIND? *"
                aria-label="Message"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="brutal-input resize-none"
                id="contact-details-input"
              />
              <button type="submit" className="brutal-btn w-full py-3 text-sm" id="contact-submit-btn">
                <span>Send message</span>
                <Send size={14} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
