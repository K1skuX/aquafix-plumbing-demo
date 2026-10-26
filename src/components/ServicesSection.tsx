import React, { useState } from 'react';
import { ArrowRight, Clock, CheckCircle2, Droplets, Wrench, Flame, Disc, Shield } from 'lucide-react';
import { SERVICES } from '../config';
import { PlumbingService, PlumbingServiceId } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: PlumbingServiceId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | PlumbingServiceId>('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filteredServices =
    activeFilter === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.id === activeFilter);

  const getServiceIcon = (id: PlumbingServiceId) => {
    switch (id) {
      case 'leak-repairs':
        return <Droplets className="w-5 h-5 text-cyan-600" />;
      case 'tap-installation':
        return <Wrench className="w-5 h-5 text-cyan-600" />;
      case 'drain-cleaning':
        return <Disc className="w-5 h-5 text-cyan-600" />;
      case 'pipe-repairs':
        return <Shield className="w-5 h-5 text-cyan-600" />;
      case 'water-heater-installation':
        return <Flame className="w-5 h-5 text-cyan-600" />;
      default:
        return <Wrench className="w-5 h-5 text-cyan-600" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">
            Core Plumbing Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Precision Plumbing Services For Every Fixture & Pipe
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every job includes a licensed technician, diagnostic inspection, upfront guaranteed quote, and a 12-month workmanship warranty. Select any service to request a rapid arrival window.
          </p>
        </div>

        {/* Interactive Filter Tabs (Button-based segmented control) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none" role="tablist" aria-label="Plumbing Service Categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
              activeFilter === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Services ({SERVICES.length})
          </button>
          {SERVICES.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === s.id}
              onClick={() => setActiveFilter(s.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
                activeFilter === s.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => {
            const isMarquee = index === 0 && activeFilter === 'all';
            const isDetailsOpen = expandedService === service.id;

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden ${
                  isMarquee ? 'lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  {/* Service Photo / Visual Header */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={`AquaFix ${service.title} plumbing service`}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-medium bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-slate-200 border border-slate-700/60">
                        {service.timeEstimate}
                      </span>
                      <span className="font-semibold text-cyan-300">Upfront Quote</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
                        {getServiceIcon(service.id)}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {isDetailsOpen ? service.fullDesc : service.shortDesc}
                    </p>

                    <button
                      type="button"
                      onClick={() => setExpandedService(isDetailsOpen ? null : service.id)}
                      className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 transition-colors mb-4 inline-block underline-offset-2 hover:underline"
                    >
                      {isDetailsOpen ? 'Show less description' : 'View service scope details &rarr;'}
                    </button>

                    {/* Highlights Checklist */}
                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      {service.highlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 mt-2">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded-xl transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    <span>Request Quote for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
