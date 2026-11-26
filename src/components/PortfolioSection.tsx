import { useState } from 'react';
import { ArrowUpRight, Check, Eye, MessageCircle, X } from 'lucide-react';
import {
  CONTACT_CONFIG,
  PORTFOLIO_PROJECTS,
  type PortfolioCategory,
  type PortfolioProject,
  buildWhatsAppLink,
} from '../data/siteData';
import { NayabJewelleryCrest } from './BrandLogo';
import ResilientImage from './ResilientImage';

const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'All',
  'Python & AI',
  'Jewellery Stores',
  'Watch Stores',
  'Fashion & Clothing',
  'Business & E-Commerce',
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const visibleProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="border-b border-slate-800/80 bg-[#060B1A] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-cyan-400">
            My Projects &amp; Portfolio
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
            Featured Python AI, Jewellery &amp; E-Commerce Work
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Explore our Python AI automation solutions, Nayab Jewellery e-commerce website, watch
            storefront designs, and modern retail builds.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter portfolio projects by category"
          className="mt-8 flex w-fit max-w-full flex-wrap items-center gap-1.5 rounded-lg border border-slate-800 bg-[#0A1328] p-1.5"
        >
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === category
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-[#0A1328] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-slate-800/80 bg-[#03060E]">
                <ResilientImage
                  src={project.image}
                  alt={project.alt}
                  fallbackTitle={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03060E]/80 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-xs text-slate-400">
                    <span className="font-medium text-cyan-400">{project.category}</span>
                    <span aria-hidden="true"> · </span>
                    <span>{project.techStack.slice(0, 3).join(' · ')}</span>
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">
                    {project.title}
                  </h3>

                  {project.featuredBrandLogo === 'nayab-jewellery' && (
                    <div className="mt-3 flex items-center justify-between rounded-lg border border-amber-500/25 bg-[#070709] px-3 py-2">
                      <NayabJewelleryCrest />
                      <span className="text-[11px] font-medium text-amber-200/80">
                        Reference Brand Logo
                      </span>
                    </div>
                  )}

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-800/80 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-cyan-500 px-3.5 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400 whitespace-nowrap"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    View Project
                  </button>

                  <a
                    href={buildWhatsAppLink(
                      `Hello Web Development, I saw "${project.title}" in your portfolio and want a similar solution.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-1 rounded-lg border border-slate-700 bg-[#050A17] px-3 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400 hover:text-white whitespace-nowrap"
                  >
                    Order Similar
                    <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Project Preview Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-cyan-500/30 bg-[#0A1328]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
              <div>
                <p className="text-xs font-medium text-cyan-400">{selectedProject.category}</p>
                <h3
                  id="portfolio-modal-title"
                  className="mt-0.5 font-display text-lg font-semibold text-white"
                >
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project preview"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-[#050A17] text-slate-300 transition-colors hover:border-cyan-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden border-b border-slate-800 bg-[#03060E]">
              <ResilientImage
                src={selectedProject.image}
                alt={selectedProject.alt}
                fallbackTitle={selectedProject.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              {selectedProject.featuredBrandLogo === 'nayab-jewellery' && (
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-amber-500/30 bg-[#070709] px-4 py-3">
                  <NayabJewelleryCrest />
                  <span className="text-xs text-amber-200/80">
                    Nayab Jewellery Brand Identity &amp; Storefront
                  </span>
                </div>
              )}

              <p className="text-xs text-slate-400">
                Technology Stack: {selectedProject.techStack.join(' · ')}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {selectedProject.summary}
              </p>

              <div className="mt-5 border-t border-slate-800 pt-4">
                <p className="text-xs font-semibold text-white">Key Project Highlights</p>
                <ul className="mt-3 space-y-2">
                  {selectedProject.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <Check className="h-4 w-4 shrink-0 text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-800 pt-5">
                <a
                  href={buildWhatsAppLink(
                    `Hello Web Development, I would like to build a project like "${selectedProject.title}".`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Now
                </a>

                <a
                  href={CONTACT_CONFIG.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-700 bg-[#050A17] px-5 py-2.5 text-xs font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-white"
                >
                  Hire Me on Fiverr
                  <ArrowUpRight className="h-4 w-4 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
