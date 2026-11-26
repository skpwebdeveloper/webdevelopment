import {
  BadgeDollarSign,
  Bot,
  Code2,
  Headphones,
  Layout,
  SearchCheck,
  Smartphone,
  Zap,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/siteData';

const FEATURE_ICONS = [
  Layout,
  Smartphone,
  Code2,
  Bot,
  SearchCheck,
  Zap,
  Headphones,
  BadgeDollarSign,
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="border-b border-slate-800/80 bg-[#03060E] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-cyan-400">Why Choose Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
            Engineered for Speed, Clarity &amp; Business Growth
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Every project is built from the ground up to look credible on desktop and mobile while
            delivering fast load times and reliable support.
          </p>
        </div>

        {/* Hairline Architectural Grid (no cloned shadow boxes) */}
        <div className="mt-10 grid grid-cols-1 divide-y divide-slate-800/80 rounded-xl border border-slate-800 bg-[#0A1328] sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = FEATURE_ICONS[idx] ?? Layout;
            return (
              <div
                key={item.number}
                className="flex flex-col justify-between p-6 transition-colors duration-150 hover:bg-[#0F1C3A]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/25 bg-cyan-950/50 text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono-tabular text-xs font-medium text-slate-500">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
