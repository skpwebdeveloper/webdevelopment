import { useEffect, useState } from 'react';
import { ArrowUp, Briefcase, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG, buildWhatsAppLink } from '../data/siteData';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 280);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      aria-label="Quick contact and navigation actions"
      className="fixed bottom-3 right-3 z-40 flex items-center gap-2 sm:bottom-5 sm:right-5 sm:flex-col sm:items-end"
    >
      {/* WhatsApp Chat */}
      <a
        href={buildWhatsAppLink(
          'Hello Web Development, I would like to chat about a website project.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
        className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-600 px-3.5 text-xs font-semibold text-white shadow-lg shadow-black/40 transition-transform duration-150 hover:-translate-y-0.5 hover:bg-emerald-500 whitespace-nowrap"
      >
        <MessageCircle className="h-4 w-4 shrink-0" />
        <span className="hidden sm:inline">WhatsApp Chat</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>

      {/* Hire Me on Fiverr */}
      <a
        href={CONTACT_CONFIG.fiverrUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hire Me on Fiverr"
        className="inline-flex h-11 items-center gap-2 rounded-lg border border-cyan-500/50 bg-[#0A1328] px-3.5 text-xs font-semibold text-white shadow-lg shadow-black/40 transition-transform duration-150 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 whitespace-nowrap"
      >
        <Briefcase className="h-4 w-4 shrink-0 text-cyan-400" />
        <span className="hidden sm:inline">Hire Me on Fiverr</span>
        <span className="sm:hidden">Fiverr</span>
      </a>

      {/* Back to Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to Top"
        className={`inline-flex h-11 w-11 sm:w-auto items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-[#050A17] sm:px-3.5 text-xs font-medium text-slate-200 shadow-lg shadow-black/40 transition-all duration-150 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-white ${
          showBackToTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-4 w-4 shrink-0" />
        <span className="hidden sm:inline">Back to Top</span>
      </button>
    </div>
  );
}
