import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Clock, Award, Sparkles } from 'lucide-react';
import { PLUMBING_CONFIG } from '../config';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative bg-slate-900 text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle background ambient mesh */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle editorial kicker without pills */}
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
              <span>Licensed Residential & Commercial Plumbers</span>
              <span aria-hidden="true">·</span>
              <span>Metro Area</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.1] mb-5 [text-wrap:balance]">
              Plumbing Problems?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-200">
                We've Got You Covered.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              From emergency leak repairs and stubborn drain blockages to precision tap fitting and tankless water heaters. Enjoy upfront fixed pricing, prompt scheduling, and tidy plumbers who protect your home.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${PLUMBING_CONFIG.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-slate-100 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call {PLUMBING_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={PLUMBING_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-800/80 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                title="Chat with us directly on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="sm:hidden lg:inline">WhatsApp</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-slate-800/90 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Guaranteed Upfront Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Same-Day Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>12-Month Labor Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Resolution Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] group">
              {!imageError ? (
                <img
                  src={PLUMBING_CONFIG.heroImage}
                  alt="AquaFix professional plumber in uniform inspecting residential copper piping with precision wrench"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-800 to-slate-900 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-4">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">AquaFix Certified Plumbers</h3>
                  <p className="text-xs text-slate-400 max-w-xs">
                    Licensed, insured, and background-checked technicians equipped for all pipe, fixture, and drain repairs.
                  </p>
                </div>
              )}

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Bottom card overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 flex items-center justify-between text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
                  <div>
                    <p className="font-semibold text-white">Technicians On Call</p>
                    <p className="text-[11px] text-slate-400">Serving metro neighborhoods today</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onQuoteClick}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-xs transition-colors shrink-0"
                >
                  Book Window &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Feature Strip Below Hero */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">01. Pricing</p>
            <p className="text-sm font-bold text-white">No Hidden Fees</p>
            <p className="text-xs text-slate-400">Fixed quote approved by you before any work starts.</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">02. Safety</p>
            <p className="text-sm font-bold text-white">Fully Certified</p>
            <p className="text-xs text-slate-400">Licensed master plumbers and comprehensive liability cover.</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">03. Cleanliness</p>
            <p className="text-sm font-bold text-white">Spotless Guarantee</p>
            <p className="text-xs text-slate-400">Protective shoe covers, drop mats, and thorough final cleanup.</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">04. Reliability</p>
            <p className="text-sm font-bold text-white">12-Month Warranty</p>
            <p className="text-xs text-slate-400">Every fitted pipe joint and fixture backed in writing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
