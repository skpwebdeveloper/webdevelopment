import { Code, Cpu, Layers, ShoppingCart } from 'lucide-react';
import { buildWhatsAppLink } from '../data/siteData';
import { TECH_TOOLS } from './TechToolsIcons';

const CORE_PILLARS = [
  {
    icon: Layers,
    title: 'Modern Frontend Engineering',
    description:
      'Responsive interfaces built with HTML5, CSS3, JavaScript, React, and TypeScript for crisp typography and fast rendering.',
  },
  {
    icon: Code,
    title: 'Python, PHP & Java Backends',
    description:
      'Reliable server architectures, custom web APIs, automated workflows, and scalable business systems.',
  },
  {
    icon: ShoppingCart,
    title: 'High-Converting E-Commerce',
    description:
      'Tailored online stores for watch, jewellery, fashion, clothing, and footwear brands with intuitive product browsing.',
  },
  {
    icon: Cpu,
    title: 'AI & Chatbot Integration',
    description:
      'Smart AI assistants and automated customer support embedded directly into your website to engage international buyers.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-slate-800/80 bg-[#060B1A] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Narrative */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-wide text-cyan-400">
              About My Company
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
              About My Company
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-200">
              Welcome to <strong className="font-semibold text-white">Web Development</strong>.
              We specialize in creating professional, modern and mobile-friendly websites,
              e-commerce stores and AI-powered Python solutions. Our goal is to help businesses
              grow online with attractive designs, smart functionality and reliable development
              services.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-slate-800 pt-6">
              <div>
                <p className="font-mono-tabular text-2xl font-bold text-white">10+</p>
                <p className="mt-0.5 text-xs text-slate-400">Core Web &amp; AI Services</p>
              </div>
              <div className="h-8 w-px bg-slate-800" aria-hidden="true" />
              <div>
                <p className="font-mono-tabular text-2xl font-bold text-white">100%</p>
                <p className="mt-0.5 text-xs text-slate-400">Mobile Responsive Builds</p>
              </div>
              <div className="h-8 w-px bg-slate-800" aria-hidden="true" />
              <div>
                <a
                  href={buildWhatsAppLink(
                    'Hello Web Development, I would like to discuss a custom website for my business.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  Start a Conversation &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right 2x2 Core Capabilities */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 divide-y divide-slate-800/80 rounded-xl border border-slate-800 bg-[#0A1328] sm:grid-cols-2 sm:divide-x sm:divide-y">
              {CORE_PILLARS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-6 sm:p-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-950/50 text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technologies & Tools Stack Showcase */}
        <div className="mt-14 border-t border-slate-800/80 pt-12">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium tracking-wide text-cyan-400">
                Languages, Frameworks &amp; Tools
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                Technologies We Build With
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              HTML5 · CSS3 · JavaScript · React · WordPress · PHP · Python · Java
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {TECH_TOOLS.map((tool) => (
              <div
                key={tool.id}
                className="group flex items-center gap-3.5 rounded-xl border border-slate-800/90 bg-[#0A1328] p-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-cyan-500/50"
              >
                <div className="shrink-0 transition-transform duration-150 group-hover:scale-105">
                  {tool.icon}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-semibold text-white">
                    {tool.name}
                  </p>
                  <p className="truncate text-xs text-slate-400">{tool.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
