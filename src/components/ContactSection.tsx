import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  MessageCircle,
  Send,
} from 'lucide-react';
import { CONTACT_CONFIG, SERVICES, buildWhatsAppLink } from '../data/siteData';

interface FormValues {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const INITIAL_FORM: FormValues = {
  name: '',
  email: '',
  service: SERVICES[0].title,
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const [values, setValues] = useState<FormValues>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = (form: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.service.trim()) {
      nextErrors.service = 'Please select the service you require.';
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = 'Please describe your project (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmittedUrl(null);
      return;
    }

    const formattedMessage = [
      'Hello Web Development, I have a new project inquiry:',
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Service Required: ${values.service}`,
      `Message: ${values.message.trim()}`,
    ].join('\n');

    setSubmittedUrl(buildWhatsAppLink(formattedMessage));
  };

  const handleCopyWhatsApp = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_CONFIG.whatsappNumber);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      setCopiedPhone(false);
    }
  };

  return (
    <section id="contact" className="border-b border-slate-800/80 bg-[#060B1A] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Direct Contact Information & Action Buttons */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-wide text-cyan-400">Contact Section</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
              Start Your Project With {CONTACT_CONFIG.companyName}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Reach out directly on WhatsApp or Fiverr for websites, e-commerce stores, and Python
              AI solutions.
            </p>

            <div className="mt-8 divide-y divide-slate-800 rounded-xl border border-slate-800 bg-[#0A1328]">
              {/* WhatsApp Direct */}
              <div className="p-6">
                <p className="text-xs font-medium text-cyan-400">
                  {CONTACT_CONFIG.companyName} · WhatsApp
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={CONTACT_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-tabular text-lg font-semibold text-white transition-colors hover:text-cyan-400"
                  >
                    {CONTACT_CONFIG.whatsappNumber}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyWhatsApp}
                    className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-slate-700 bg-[#050A17] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400 hover:text-white"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={buildWhatsAppLink(
                      'Hello Web Development, I would like to discuss a website or Python AI project.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Now
                  </a>

                  <a
                    href={buildWhatsAppLink(
                      'Hello Web Development, I would like to get a free quote for my website.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-cyan-500/40 bg-[#050A17] px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-cyan-400"
                  >
                    Get a Free Quote
                  </a>
                </div>
              </div>

              {/* Fiverr Profile */}
              <div className="p-6">
                <p className="text-xs font-medium text-cyan-400">Fiverr Profile</p>
                <p className="mt-2 break-all text-sm font-medium text-slate-200">
                  {CONTACT_CONFIG.fiverrUrl}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={CONTACT_CONFIG.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-700 bg-[#050A17] px-4 py-2 text-xs font-semibold text-slate-100 transition-colors hover:border-cyan-400 hover:text-white"
                  >
                    Hire Me on Fiverr
                    <ArrowUpRight className="h-4 w-4 text-cyan-400" />
                  </a>

                  <a
                    href="#contact-form"
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-700 bg-[#050A17] px-4 py-2 text-xs font-semibold text-slate-100 transition-colors hover:border-cyan-400 hover:text-white"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form with WhatsApp Integration */}
          <div id="contact-form" className="lg:col-span-7">
            <div className="rounded-xl border border-slate-800 bg-[#0A1328] p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-white">
                Send a Project Inquiry
              </h3>
              <p className="mt-1.5 text-sm text-slate-400">
                Complete the fields below to prepare your message for instant WhatsApp delivery.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-200"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, name: e.target.value }));
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`mt-2 w-full rounded-lg border bg-[#03060E] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none ${
                        errors.name ? 'border-rose-500' : 'border-slate-700/90'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-slate-200"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="you@company.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`mt-2 w-full rounded-lg border bg-[#03060E] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none ${
                        errors.email ? 'border-rose-500' : 'border-slate-700/90'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Required */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-medium text-slate-200"
                  >
                    Service Required
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={values.service}
                    onChange={(e) => {
                      setValues((prev) => ({ ...prev, service: e.target.value }));
                      if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
                    }}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? 'contact-service-error' : undefined}
                    className={`mt-2 w-full rounded-lg border bg-[#03060E] px-4 py-3 text-sm text-white transition-colors focus:border-cyan-400 focus:outline-none ${
                      errors.service ? 'border-rose-500' : 'border-slate-700/90'
                    }`}
                  >
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Silver Package">Silver Package</option>
                    <option value="Gold Package">Gold Package</option>
                    <option value="Diamond Package">Diamond Package</option>
                    <option value="Custom Project Inquiry">Custom Project Inquiry</option>
                  </select>
                  {errors.service && (
                    <p
                      id="contact-service-error"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-slate-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={(e) => {
                      setValues((prev) => ({ ...prev, message: e.target.value }));
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    placeholder="Tell us about your website goals, pages, store products, or Python AI features..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`mt-2 w-full rounded-lg border bg-[#03060E] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none ${
                      errors.message ? 'border-rose-500' : 'border-slate-700/90'
                    }`}
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <button
                    type="submit"
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-cyan-400"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>

                  {submittedUrl && (
                    <button
                      type="button"
                      onClick={() => {
                        setValues(INITIAL_FORM);
                        setSubmittedUrl(null);
                      }}
                      className="text-xs font-medium text-slate-400 transition-colors hover:text-white"
                    >
                      Clear Form
                    </button>
                  )}
                </div>
              </form>

              {/* Confirmation & Direct WhatsApp Handoff */}
              {submittedUrl && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <div className="flex-1">
                      <h4 className="font-display text-sm font-semibold text-white">
                        Inquiry Ready to Send via WhatsApp
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        Your inquiry for <strong className="text-white">{values.service}</strong>{' '}
                        has been formatted with your name and email. Click below to open WhatsApp
                        with your pre-filled message.
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <a
                          href={submittedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-500"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Open WhatsApp &amp; Send
                        </a>
                        <a
                          href={CONTACT_CONFIG.fiverrUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-700 bg-[#050A17] px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400 hover:text-white"
                        >
                          Or Message on Fiverr
                          <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
