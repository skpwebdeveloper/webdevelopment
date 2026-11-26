import { ArrowUpRight, Star } from 'lucide-react';
import { CONTACT_CONFIG, TESTIMONIAL_PLACEHOLDERS } from '../data/siteData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="border-b border-slate-800/80 bg-[#060B1A] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wide text-cyan-400">Customer Reviews</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
              Client Feedback &amp; Fiverr Profile Reviews
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              Below are editable sample testimonial placeholders ready to be updated with your real
              customer reviews. Visit Fiverr directly to view live client ratings and feedback.
            </p>
          </div>

          <a
            href={CONTACT_CONFIG.fiverrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-cyan-400 whitespace-nowrap shrink-0"
          >
            View My Fiverr Reviews
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Sample Review Placeholders */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIAL_PLACEHOLDERS.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0A1328] p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{review.placeholderLabel}</span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-300">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-slate-800/80 pt-4">
                <p className="font-display text-sm font-semibold text-white">
                  {review.clientName}
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  {review.projectType} · Editable Placeholder Slot
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
