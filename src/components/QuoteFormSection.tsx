import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MessageCircle, Clock, RotateCcw } from 'lucide-react';
import { SERVICES, PLUMBING_CONFIG } from '../config';
import { PlumbingServiceId, QuoteFormData } from '../types';

interface QuoteFormSectionProps {
  selectedService: PlumbingServiceId;
  onServiceChange: (service: PlumbingServiceId) => void;
}

export const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({
  selectedService,
  onServiceChange,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phoneNumber: '',
    service: selectedService,
    urgency: 'next-day',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync prop changes to local form state
  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: selectedService }));
  }, [selectedService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (minimum 2 characters).';
    }

    const cleanPhone = formData.phoneNumber.replace(/[^\d+]/g, '');
    if (!cleanPhone || cleanPhone.length < 7) {
      newErrors.phoneNumber = 'Please enter a valid phone number (at least 7 digits).';
    }

    if (!formData.service) {
      newErrors.service = 'Please choose a service.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 8) {
      newErrors.message = 'Please provide a brief description of your plumbing issue (at least 8 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate brief client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 300);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      service: 'leak-repairs',
      urgency: 'next-day',
      message: '',
    });
    setErrors({});
  };

  const getServiceName = (id: PlumbingServiceId): string => {
    if (id === 'general-inquiry') return 'General Plumbing Inquiry';
    const found = SERVICES.find((s) => s.id === id);
    return found ? found.title : id;
  };

  return (
    <section id="quote" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context, Phone, WhatsApp */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">
              Free Transparent Estimates
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 [text-wrap:balance]">
              Request Your Upfront Plumbing Quote
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Tell us what needs attention. We review your request promptly and provide a guaranteed arrival window and upfront fixed pricing.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Prefer speaking with a plumber?</p>
                  <p className="text-base font-bold text-slate-900">{PLUMBING_CONFIG.phoneDisplay}</p>
                </div>
                <a
                  href={`tel:${PLUMBING_CONFIG.phoneRaw}`}
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Call Now</span>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between">
                <div>
                  <p className="text-xs text-emerald-800 font-medium">Quick WhatsApp inquiry?</p>
                  <p className="text-base font-bold text-emerald-950">Send photos & audio</p>
                </div>
                <a
                  href={PLUMBING_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Open WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Response policy */}
            <div className="p-5 rounded-xl bg-slate-900 text-white space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-cyan-400">
                <Clock className="w-4 h-4" />
                <span>Operating Window & Response</span>
              </div>
              <p className="text-slate-300">
                {PLUMBING_CONFIG.operatingHours}. Emergency inquiries for active pipe bursts receive immediate callback within business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Validated Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              {submittedData ? (
                /* Demo Success State */
                <div className="space-y-6" role="status">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Demo Submission Acknowledged
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Thank you, <strong className="text-slate-900">{submittedData.fullName}</strong>. In an active production website, this request would automatically dispatch an SMS alert and ticket to our plumbing team.
                    </p>
                  </div>

                  {/* Submission Summary Table */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2.5">
                    <p className="font-bold text-slate-800 border-b border-slate-200 pb-2">
                      Demo Request Details:
                    </p>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contact Name:</span>
                      <span className="font-semibold text-slate-900">{submittedData.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Phone Number:</span>
                      <span className="font-semibold text-slate-900">{submittedData.phoneNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Selected Service:</span>
                      <span className="font-semibold text-slate-900">{getServiceName(submittedData.service)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Urgency Level:</span>
                      <span className="font-semibold text-slate-900 capitalize">{submittedData.urgency}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-slate-500 block mb-1">Issue Description:</span>
                      <p className="font-medium text-slate-800 italic bg-white p-2 rounded border border-slate-200">
                        "{submittedData.message}"
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-cyan-50 border border-cyan-200 rounded-lg text-xs text-cyan-900">
                    <span className="font-bold">Fictional Notice:</span> This is a demonstration form. No email, SMS, or server message was transmitted, keeping your inputs completely private.
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Demo Quote</span>
                  </button>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-slate-900">Get an Upfront Estimate</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the details below. We never share your phone number.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-slate-800 mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-colors ${
                        errors.fullName
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-slate-300 focus:border-cyan-600 focus:ring-cyan-100'
                      }`}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-xs text-red-600 mt-1 flex items-center gap-1" role="alert">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-xs font-bold text-slate-800 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      placeholder="e.g. (555) 234-5678"
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, phoneNumber: e.target.value });
                        if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-colors ${
                        errors.phoneNumber
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-slate-300 focus:border-cyan-600 focus:ring-cyan-100'
                      }`}
                      aria-invalid={!!errors.phoneNumber}
                      aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                    />
                    {errors.phoneNumber && (
                      <p id="phoneNumber-error" className="text-xs text-red-600 mt-1 flex items-center gap-1" role="alert">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phoneNumber}</span>
                      </p>
                    )}
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label htmlFor="serviceSelect" className="block text-xs font-bold text-slate-800 mb-1.5">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="serviceSelect"
                      value={formData.service}
                      onChange={(e) => {
                        const val = e.target.value as PlumbingServiceId;
                        setFormData({ ...formData, service: val });
                        onServiceChange(val);
                      }}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:border-cyan-600 focus:ring-cyan-100"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                      <option value="general-inquiry">General Plumbing Inspection / Other</option>
                    </select>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Preferred Timeline
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {(
                        [
                          { id: 'urgent', label: 'Urgent (Today)' },
                          { id: 'next-day', label: 'Next 24–48h' },
                          { id: 'routine', label: 'Flexible / Planning' },
                        ] as const
                      ).map((urg) => (
                        <button
                          key={urg.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, urgency: urg.id })}
                          className={`py-2 px-2 text-xs font-medium rounded-lg border transition-all text-center ${
                            formData.urgency === urg.id
                              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {urg.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Problem Description */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-800 mb-1.5">
                      Describe the Issue or Scope <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="e.g. Dripping pipe under the kitchen sink and occasional low water pressure in the bathroom..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-colors resize-y ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-slate-300 focus:border-cyan-600 focus:ring-cyan-100'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-600 mt-1 flex items-center gap-1" role="alert">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-xl shadow-md shadow-cyan-400/20 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-60"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Validating...' : 'Submit Quote Request'}</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      Demo form with real-time client-side validation. No spam, no mock transmission.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
