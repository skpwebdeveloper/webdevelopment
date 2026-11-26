import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG, SERVICES, buildWhatsAppLink } from '../data/siteData';
import { BrandLogo } from './BrandLogo';

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Customer Reviews', href: '#reviews' },
  { label: 'Pricing Plans', href: '#pricing' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03060E] pt-16 pb-24 sm:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-800/80 pb-12 md:grid-cols-12">
          {/* Brand Summary */}
          <div className="md:col-span-4">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white"
            >
              <BrandLogo className="h-8 w-8 shrink-0" />
              <span>{CONTACT_CONFIG.companyName}</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              Modern, mobile-responsive, e-commerce, Python, and AI-powered website development
              services for international clients.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppLink(
                  'Hello Web Development, I would like to discuss a website project.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-800 bg-[#0A1328] px-3.5 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-cyan-400" />
                WhatsApp
              </a>
              <a
                href={CONTACT_CONFIG.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-800 bg-[#0A1328] px-3.5 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400 hover:text-white"
              >
                <span>Fiverr Profile</span>
                <ArrowUpRight className="h-4 w-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-cyan-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Highlights */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white">Our Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {SERVICES.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="transition-colors hover:text-cyan-300">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-2">
            <h3 className="font-display text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <span className="block text-xs text-slate-500">WhatsApp</span>
                <a
                  href={CONTACT_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-tabular text-slate-200 transition-colors hover:text-cyan-400"
                >
                  {CONTACT_CONFIG.whatsappNumber}
                </a>
              </li>
              <li>
                <span className="block text-xs text-slate-500">Fiverr</span>
                <a
                  href={CONTACT_CONFIG.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-200 transition-colors hover:text-cyan-400"
                >
                  <span>skpwebdevelope</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Copyright Bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            &copy; {currentYear} {CONTACT_CONFIG.companyName}. All rights reserved.
          </p>
          <p>International Web Design, E-Commerce, Python &amp; AI Solutions</p>
        </div>
      </div>
    </footer>
  );
}
