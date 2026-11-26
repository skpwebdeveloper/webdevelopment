import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT_CONFIG, buildWhatsAppLink } from '../data/siteData';
import { BrandLogo } from './BrandLogo';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const quoteHref = buildWhatsAppLink(
    'Hello Web Development, I would like to request a free quote for a website project.'
  );

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/15 bg-[#03060E]/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Company Logo + Brand Name (visible on desktop and mobile) */}
        <a
          href="#top"
          className="inline-flex items-center gap-2.5 font-display text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 transition-colors hover:text-cyan-300"
        >
          <BrandLogo className="h-8 w-8 shrink-0" />
          <span>{CONTACT_CONFIG.companyName}</span>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-cyan-300 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors duration-150 hover:bg-cyan-400 whitespace-nowrap shrink-0"
          >
            Get a Free Quote
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-800 bg-[#0A1328] text-slate-200 transition-colors hover:border-cyan-400/60 hover:text-white md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-800/80 bg-[#060C1C] px-4 py-4 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-900 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-900 hover:text-cyan-300"
            >
              Contact
            </a>
            <div className="mt-2 border-t border-slate-800/80 pt-3">
              <a
                href={quoteHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
              >
                Get a Free Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
