import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Code2,
  Cpu,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
} from 'lucide-react';
import { buildWhatsAppLink } from '../data/siteData';
import ResilientImage from './ResilientImage';

type ShowcaseMode = 'studio' | 'python-ai' | 'responsive';

const HERO_PILLARS = [
  {
    index: '01',
    title: 'E-Commerce Storefronts',
    detail: 'Watches, jewellery, fashion & footwear stores',
  },
  {
    index: '02',
    title: 'Python & AI Engineering',
    detail: 'Custom automation, Python APIs & AI chatbots',
  },
  {
    index: '03',
    title: '100% Responsive Design',
    detail: 'Fluid layouts across desktop, tablet & mobile',
  },
  {
    index: '04',
    title: 'Global Client Delivery',
    detail: 'Direct WhatsApp & Fiverr order workflow',
  },
];

export default function Hero() {
  const [showcaseMode, setShowcaseMode] = useState<ShowcaseMode>('studio');

  const whatsappChatUrl = buildWhatsAppLink(
    'Hello Web Development, I would like to discuss a website or Python AI project.'
  );

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-800/80 bg-[#03060E]"
    >
      {/* Technology-related cyan & dark-blue radial glow + subtle matrix grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(30,58,138,0.28),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#22d3ee_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-12 sm:px-6 lg:px-8 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Main Value Proposition & Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="text-xs font-medium tracking-wide text-cyan-400">
              Web Development · Modern E-Commerce &amp; Python AI
            </p>

            <h1
              className="mt-4 font-display font-bold tracking-tight text-white [text-wrap:balance]"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', lineHeight: 1.08 }}
            >
              Professional Web Development &amp; AI Python Solutions
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              We Build Modern Websites, E-Commerce Stores &amp; Intelligent AI-Powered Solutions for
              Your Business.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-150 hover:-translate-y-0.5 hover:bg-cyan-400 whitespace-nowrap shrink-0"
              >
                View My Projects
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-cyan-500/40 bg-[#0A1328] px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-[#0F1C3A] whitespace-nowrap shrink-0"
              >
                <MessageCircle className="h-4 w-4 text-cyan-400" />
                Contact Me on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Technology Showcase featuring uploaded Studio Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:col-span-6"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-cyan-500/20 bg-[#091224]">
              {/* Interactive Preview Mode Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/90 bg-[#060C1B] px-4 py-3">
                <span className="text-xs font-medium text-slate-300">
                  Studio &amp; Technology Showcase
                </span>
                <div
                  role="tablist"
                  aria-label="Preview view switcher"
                  className="flex items-center gap-1 rounded-lg border border-slate-800 bg-[#03060E] p-1"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={showcaseMode === 'studio'}
                    onClick={() => setShowcaseMode('studio')}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      showcaseMode === 'studio'
                        ? 'bg-cyan-500 text-slate-950 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Studio Portrait
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={showcaseMode === 'python-ai'}
                    onClick={() => setShowcaseMode('python-ai')}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      showcaseMode === 'python-ai'
                        ? 'bg-cyan-500 text-slate-950 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Python &amp; AI
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={showcaseMode === 'responsive'}
                    onClick={() => setShowcaseMode('responsive')}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      showcaseMode === 'responsive'
                        ? 'bg-cyan-500 text-slate-950 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Responsive UI
                  </button>
                </div>
              </div>

              {/* Main Visual Frame */}
              <div className="relative flex-1 min-h-[290px] sm:min-h-[340px]">
                {showcaseMode === 'studio' && (
                  <div className="relative h-full w-full">
                    <ResilientImage
                      src="/assets/aistudio/Web_Development_Studio_Portrait_06a0eb80.png"
                      alt="Web Development founder studio portrait with HTML, CSS, JavaScript, React, WordPress, and PHP stack"
                      fallbackTitle="Web Development Studio"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03060E]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-200">
                      <span className="font-medium">
                        Build · Develop · Grow — Responsive &amp; Custom Solutions
                      </span>
                      <span className="font-mono-tabular text-cyan-300">
                        Fast &amp; Secure
                      </span>
                    </div>
                  </div>
                )}

                {showcaseMode === 'python-ai' && (
                  <div className="relative h-full w-full">
                    <ResilientImage
                      src="/assets/aistudio/python-coding-websites_948796c4.jpg"
                      alt="Python AI and automation solutions digital technology graphic"
                      fallbackTitle="Python AI & Automation"
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03060E]/90 via-[#03060E]/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-200">
                      <span className="font-medium">
                        Python Programming · AI Chatbots · Automation
                      </span>
                      <span className="font-mono-tabular text-cyan-300">
                        Smart Business Systems
                      </span>
                    </div>
                  </div>
                )}

                {showcaseMode === 'responsive' && (
                  <div className="flex h-full flex-col justify-between bg-[#060C1C] p-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <div className="flex items-center gap-2.5">
                        <MonitorSmartphone className="h-5 w-5 text-cyan-400" />
                        <span className="font-display text-sm font-semibold text-white">
                          Multi-Device Storefront &amp; AI Architecture
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">Mobile · Tablet · Desktop</span>
                    </div>

                    <div className="my-5 grid grid-cols-12 items-end gap-4">
                      <div className="col-span-8 rounded-lg border border-slate-800 bg-[#03060E] p-3">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <div className="h-2 w-16 rounded bg-cyan-400/90" />
                          <div className="flex gap-1.5">
                            <div className="h-1.5 w-6 rounded bg-slate-700" />
                            <div className="h-1.5 w-6 rounded bg-slate-700" />
                            <div className="h-1.5 w-6 rounded bg-slate-700" />
                          </div>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <div className="h-16 rounded border border-slate-800 bg-[#0D1A35]" />
                          <div className="h-16 rounded border border-slate-800 bg-[#0D1A35]" />
                          <div className="h-16 rounded border border-slate-800 bg-[#0D1A35]" />
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="h-2 w-24 rounded bg-slate-700" />
                          <div className="h-5 w-16 rounded bg-cyan-500" />
                        </div>
                      </div>

                      <div className="col-span-4 rounded-lg border border-cyan-500/40 bg-[#03060E] p-2.5">
                        <div className="mx-auto mb-2 h-1 w-8 rounded bg-slate-700" />
                        <div className="h-12 rounded border border-slate-800 bg-[#0D1A35]" />
                        <div className="mt-2 space-y-1.5">
                          <div className="h-2 w-full rounded bg-slate-700" />
                          <div className="h-2 w-2/3 rounded bg-slate-800" />
                        </div>
                        <div className="mt-2.5 h-4 w-full rounded bg-cyan-500" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 border-t border-slate-800 pt-4 text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Code2 className="h-4 w-4 shrink-0 text-cyan-400" />
                        <span>Clean Code</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Cpu className="h-4 w-4 shrink-0 text-cyan-400" />
                        <span>Python &amp; AI</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-400" />
                        <span>Fast &amp; Secure</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Capability Strip Below Hero Split */}
        <div className="mt-12 grid grid-cols-1 divide-y divide-slate-800/80 border-t border-b border-slate-800/80 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {HERO_PILLARS.map((pillar) => (
            <div key={pillar.index} className="px-0 py-5 sm:px-5 first:sm:pl-0 last:sm:pr-0">
              <div className="flex items-baseline gap-2.5">
                <span className="font-mono-tabular text-xs font-medium text-cyan-400">
                  {pillar.index}
                </span>
                <h2 className="font-display text-sm font-semibold text-white">
                  {pillar.title}
                </h2>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{pillar.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
