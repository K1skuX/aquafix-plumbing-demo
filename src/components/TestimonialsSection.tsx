import React from 'react';
import { Star, AlertCircle, Quote } from 'lucide-react';
import { FICTIONAL_TESTIMONIALS } from '../config';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">
            Illustrative Customer Experiences
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Sample Customer Testimonials
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            The following accounts represent realistic residential and commercial service scenarios to demonstrate how customer satisfaction is managed.
          </p>
        </div>

        {/* Clear Fictional Disclaimer Callout */}
        <div className="max-w-3xl mx-auto mb-12 p-3.5 bg-amber-50 border border-amber-200/90 rounded-xl flex items-center gap-3 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" aria-hidden="true" />
          <p>
            <span className="font-bold">Notice:</span> In compliance with truth-in-advertising guidelines, all reviews and customer profiles below are <strong>fictional demonstration mockups</strong> and do not represent verified real-world transactions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FICTIONAL_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star rating representation */}
                  <div className="flex items-center gap-1 text-amber-400" aria-label="5 star demonstration rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Demo Profile
                  </span>
                </div>

                {/* Service Tag */}
                <p className="text-xs font-bold text-cyan-700 mb-3">
                  Service: {item.serviceReceived}
                </p>

                {/* Testimonial Quote */}
                <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-900">{item.clientName}</p>
                <p className="text-xs text-slate-500">{item.neighborhood}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
