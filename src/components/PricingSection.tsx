import { Check, MessageCircle } from 'lucide-react';
import { PRICING_PLANS, buildWhatsAppLink } from '../data/siteData';

export default function PricingSection() {
  return (
    <section id="pricing" className="border-b border-slate-800/80 bg-[#03060E] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-wide text-cyan-400">Pricing Plans</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
            Flexible Packages Built for Every Stage of Growth
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Choose the package that matches your business goals and message us directly on
            WhatsApp to customize your timeline and features.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {PRICING_PLANS.map((plan) => {
            const whatsappHref = buildWhatsAppLink(
              `Hello Web Development, I would like to order the ${plan.name}. Please share pricing and next steps.`
            );

            return (
              <article
                key={plan.id}
                className={`flex flex-col justify-between rounded-xl border p-7 transition-all duration-200 ${
                  plan.featured
                    ? 'border-cyan-500/70 bg-[#0C1833]'
                    : 'border-slate-800 bg-[#0A1328] hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                    {plan.featured && (
                      <span className="text-xs font-semibold text-cyan-400">Recommended</span>
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{plan.tagline}</p>

                  <p className="mt-4 border-t border-slate-800/90 pt-4 text-xs font-medium text-slate-300">
                    {plan.deliveryNote}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-200">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-150 whitespace-nowrap ${
                      plan.featured
                        ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                        : 'border border-slate-700 bg-[#050A17] text-white hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950'
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Get This Package
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
