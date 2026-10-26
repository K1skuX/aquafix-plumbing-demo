import React from 'react';
import { Droplet, Phone, MessageCircle, Mail, MapPin, Clock, ArrowUp, ShieldCheck } from 'lucide-react';
import { PLUMBING_CONFIG, SERVICES } from '../config';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 font-bold text-white text-xl">
              <span className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center text-slate-950">
                <Droplet className="w-5 h-5 fill-slate-950" />
              </span>
              <span>
                AquaFix <span className="text-cyan-400 font-semibold">Plumbing</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional residential and commercial plumbing services. Delivering upfront transparent pricing, meticulous cleanliness, and guaranteed parts and labor.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${PLUMBING_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-lg transition-colors"
                title={`Call ${PLUMBING_CONFIG.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call Us</span>
              </a>

              <a
                href={PLUMBING_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-900/40 rounded-lg transition-colors"
                title="Message on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links / Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Services
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-cyan-400 transition-colors block py-0.5"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Company
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-cyan-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials (Demo)</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#quote" className="hover:text-cyan-400 transition-colors">Get Free Quote</a>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Placeholder Contact
            </p>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  {PLUMBING_CONFIG.address}<br />
                  {PLUMBING_CONFIG.cityStateZip}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${PLUMBING_CONFIG.phoneRaw}`} className="hover:text-white transition-colors">
                  {PLUMBING_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{PLUMBING_CONFIG.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{PLUMBING_CONFIG.operatingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Fictional disclaimer notice card in footer */}
        <div className="my-8 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="font-semibold text-white">Demonstration Notice:</span>
            <span>AquaFix Plumbing is a fictional company template. All phone numbers, addresses, and customer profiles are placeholders.</span>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 shrink-0 font-medium py-1 px-2 rounded hover:bg-slate-800 transition-colors"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AquaFix Plumbing Demo. Created for portfolio and evaluation hosting.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Pure Static HTML / React / Tailwind</span>
            <span aria-hidden="true">·</span>
            <span>No Paid API Keys Required</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
