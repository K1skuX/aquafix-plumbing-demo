/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialsSection } from './components/TestimonialsSection';
import { QuoteFormSection } from './components/QuoteFormSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuickContactFloating } from './components/QuickContactFloating';
import { PlumbingServiceId } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<PlumbingServiceId>('leak-repairs');

  const scrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectService = (serviceId: PlumbingServiceId) => {
    setSelectedService(serviceId);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Disclaimer for Fictional Demonstration Notice */}
      <DisclaimerBanner />

      {/* Primary Top Bar */}
      <Navbar onQuoteClick={scrollToQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onQuoteClick={scrollToQuote} />
        <ServicesSection onSelectService={handleSelectService} />
        <WhyChooseUs />
        <HowItWorks onQuoteClick={scrollToQuote} />
        <TestimonialsSection />
        <QuoteFormSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Action Dock */}
      <QuickContactFloating />
    </div>
  );
}
