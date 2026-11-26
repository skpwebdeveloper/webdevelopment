import { useState } from 'react';
import {
  ArrowRight,
  Bot,
  Footprints,
  Gem,
  Layout,
  Shirt,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Terminal,
  Watch,
} from 'lucide-react';
import {
  SERVICES,
  type ServiceCategory,
  type ServiceItem,
  buildWhatsAppLink,
} from '../data/siteData';

const CATEGORIES: ServiceCategory[] = ['All', 'E-Commerce', 'Python & AI', 'Design & Web'];

const ICON_MAP: Record<ServiceItem['iconName'], typeof ShoppingBag> = {
  ShoppingBag,
  Watch,
  Gem,
  Shirt,
  Footprints,
  Smartphone,
  Terminal,
  Sparkles,
  Layout,
  Bot,
};

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('All');

  const filteredServices =
    selectedCategory === 'All'
      ? SERVICES
      : SERVICES.filter((service) => service.category === selectedCategory);

  return (
    <section id="services" className="border-b border-slate-800/80 bg-[#03060E] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wide text-cyan-400">My Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
              Web, E-Commerce &amp; AI Python Development Services
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              Select a specialized service below to start your project directly with Web Development
              on WhatsApp.
            </p>
          </div>

          {/* Interactive Category Filter Control */}
          <div
            role="tablist"
            aria-label="Filter services by category"
            className="flex flex-wrap items-center gap-1.5 rounded-lg border border-slate-800 bg-[#0A1328] p-1"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`min-h-[38px] rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Service Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => {
            const Icon = ICON_MAP[service.iconName];
            const whatsappHref = buildWhatsAppLink(
              `Hello Web Development, I am interested in getting started with: ${service.title}.`
            );

            return (
              <article
                key={service.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-800/90 bg-[#0A1328] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/50"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-500/25 bg-cyan-950/50 text-cyan-400 transition-colors group-hover:border-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="font-mono-tabular text-cyan-400">{service.number}.</span>
                      <span aria-hidden="true">·</span>
                      <span>{service.category}</span>
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-800/80 pt-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] w-full items-center justify-between rounded-lg border border-slate-700/80 bg-[#050A17] px-4 py-2 text-xs font-semibold text-slate-100 transition-colors duration-150 hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 whitespace-nowrap"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
