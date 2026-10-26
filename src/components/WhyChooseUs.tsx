import React from 'react';
import { DollarSign, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { WHY_CHOOSE_US } from '../config';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <DollarSign key="dollar" className="w-6 h-6 text-cyan-400" />,
    <ShieldCheck key="shield" className="w-6 h-6 text-cyan-400" />,
    <Sparkles key="sparkles" className="w-6 h-6 text-cyan-400" />,
    <Award key="award" className="w-6 h-6 text-cyan-400" />,
  ];

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute -top-32 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              The AquaFix Standard
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight mb-5 [text-wrap:balance]">
              Why Homeowners & Facility Managers Trust Our Team
            </h2>
            <p className="text-base text-slate-300 leading-relaxed mb-8">
              We started AquaFix to eliminate the common pain points of traditional trades: surprise bills, delayed arrivals, messy workspaces, and cut corners. Our standard is simple: clear pricing upfront, respectful service, and plumbing done right the first time.
            </p>

            {/* Quick Proof Box */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-white">Zero Hidden Dispatch Surprises</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    You approve the flat quote before any repair begins. If we encounter unexpected complications, we discuss them first.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-white">Full Floor & Fixture Protection</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Our plumbers wear clean boot covers, roll out heavy neoprene floor runners, and disinfect work surfaces before leaving.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/70 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4">
                    {icons[index % icons.length]}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-700/60 text-xs font-semibold text-cyan-400 flex items-center gap-1.5">
                  <span>Guaranteed Policy</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
