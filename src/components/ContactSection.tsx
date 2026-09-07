import { useState, FormEvent } from 'react';
import { 
  Copy, 
  Check, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  FileDown, 
  Send,
  CheckSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [cvNotice, setCvNotice] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCvClick = () => {
    setCvNotice(true);
    setTimeout(() => setCvNotice(false), 3000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="pt-16 pb-12 border-t-2 border-[var(--ink)]">
      {/* Section Tag */}
      <div className="meta-label mb-4 text-[var(--accent)] font-bold">
        [05] // INITIATE TRANSMISSION
      </div>

      <h2 className="text-section-brutal text-[var(--ink)] mb-8">
        LET'S TALK
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column: Direct Info & Accent Box */}
        <div className="space-y-6">
          <p className="font-mono text-sm sm:text-base leading-relaxed text-[var(--ink)]">
            Open for contract engineering, full-time backend and full-stack positions, or technical architecture consulting.
          </p>

          {/* Accent Box Email */}
          <div
            id="accent-email-box"
            onClick={handleCopyEmail}
            className="accent-box cursor-pointer group flex items-center justify-between transition-all hover:bg-[var(--accent)]"
            title="Click to copy email address"
          >
            <div>
              <div className="text-[0.6rem] uppercase tracking-widest opacity-70 mb-1">DIRECT INBOX</div>
              <div className="font-mono text-xs sm:text-sm font-bold tracking-wider">
                {personalInfo.email}
              </div>
            </div>

            <div className="p-1.5 border border-current">
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </div>
          </div>
          {copied && (
            <div className="meta-label text-[var(--accent)] font-bold">
              // EMAIL COPIED TO CLIPBOARD
            </div>
          )}

          {/* Metadata Specs */}
          <div className="space-y-2.5 font-mono text-xs pt-4 border-t border-[var(--ink)]">
            <div className="flex items-center justify-between py-1 border-b border-[var(--ink)] border-dashed">
              <span className="opacity-70">LOCATION</span>
              <span className="font-bold">{personalInfo.location}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[var(--ink)] border-dashed">
              <span className="opacity-70">AVAILABILITY</span>
              <span className="font-bold text-[var(--accent)]">● READY FOR HIRE</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[var(--ink)] border-dashed">
              <span className="opacity-70">RESPONSE TIME</span>
              <span className="font-bold">&lt; 24 HOURS</span>
            </div>
          </div>

          {/* Outbound Profiles */}
          <div className="pt-2 flex flex-wrap gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--ink)] font-mono text-xs uppercase hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors"
            >
              <Github size={13} />
              <span>GitHub</span>
              <ArrowUpRight size={11} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--ink)] font-mono text-xs uppercase hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors"
            >
              <Linkedin size={13} />
              <span>LinkedIn</span>
              <ArrowUpRight size={11} />
            </a>

            <button
              type="button"
              onClick={handleCvClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--ink)] font-mono text-xs uppercase hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors cursor-pointer"
            >
              <FileDown size={13} />
              <span>CV / Spec</span>
            </button>
          </div>
          {cvNotice && (
            <div className="meta-label text-[var(--accent)] font-bold pt-1">
              // CV AVAILABLE UPON REQUEST &bull; EMAIL {personalInfo.email}
            </div>
          )}
        </div>

        {/* Right Column: Direct Brutalist Form */}
        <div>
          {submitted ? (
            <div className="p-8 border-2 border-[var(--ink)] bg-[var(--card-bg)] text-center space-y-4">
              <CheckSquare size={32} className="mx-auto text-[var(--accent)]" />
              <div className="font-syne font-extrabold text-2xl uppercase tracking-tight text-[var(--ink)]">
                TRANSMISSION LOGGED
              </div>
              <p className="font-mono text-xs text-[var(--muted)] max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name}. Your inquiry has been received. I will review your requirements and respond via {formData.email}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', details: '' });
                }}
                className="brutal-btn mt-4"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder="NAME *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="brutal-input"
                  id="contact-name-input"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="EMAIL *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="brutal-input"
                  id="contact-email-input"
                />
              </div>

              <div>
                <textarea
                  required
                  rows={4}
                  placeholder="PROJECT DETAILS / INQUIRY *"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="brutal-input resize-none"
                  id="contact-details-input"
                />
              </div>

              <button
                type="submit"
                className="brutal-btn w-full justify-center py-3 text-sm"
                id="contact-submit-btn"
              >
                <span>Send Inquiry</span>
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
