import React from 'react';
import { HOW_IT_WORKS } from '../config';

interface HowItWorksProps {
  onQuoteClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onQuoteClick }) => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">
            Straightforward Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 [text-wrap:balance]">
            How AquaFix Resolves Your Plumbing Issues
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From the initial phone call to the final zero-leak pressure check, our process is structured to give you clarity, speed, and peace of mind.
          </p>
        </div>

        {/* 4 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS.map((step, idx) => (
            <div key={idx} className="relative flex flex-col justify-between">
              <div>
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-black text-cyan-600 tracking-tight">
                    {step.step}
                  </span>
                  <div className="h-px bg-slate-200 flex-1" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-700">Step {idx + 1} of 4</span>
                <span className="text-cyan-700 font-semibold">Zero Guesswork</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick action bar */}
        <div className="mt-14 p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Need a technician dispatched today?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Complete our 1-minute quote form or call our direct line to reserve an arrival slot.
            </p>
          </div>
          <button
            type="button"
            onClick={onQuoteClick}
            className="px-6 py-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            Start Request &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
