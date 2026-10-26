import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Droplet } from 'lucide-react';
import { PLUMBING_CONFIG } from '../config';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
          scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-800' : 'bg-slate-900 border-b border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single text element brand wordmark */}
            <a
              href="#hero"
              className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
              aria-label="AquaFix Plumbing Home"
            >
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-slate-950 shadow-sm shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <Droplet className="w-5 h-5 fill-slate-950 text-slate-950" />
              </span>
              <span>
                AquaFix <span className="text-cyan-400 font-semibold">Plumbing</span>
              </span>
            </a>

            {/* Zone 2: 4-5 single-line clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300" aria-label="Main Navigation">
              <a
                href="#services"
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Services
              </a>
              <a
                href="#why-choose-us"
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Why Choose Us
              </a>
              <a
                href="#how-it-works"
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                FAQ
              </a>
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${PLUMBING_CONFIG.phoneRaw}`}
                className="hidden md:inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 px-2 py-1"
                title={`Call ${PLUMBING_CONFIG.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PLUMBING_CONFIG.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={onQuoteClick}
                className="px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-lg shadow-sm shadow-cyan-400/20 transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Request Free Quote
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={closeMenu}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2 font-bold text-white text-lg">
                  <Droplet className="w-5 h-5 text-cyan-400" />
                  <span>AquaFix Plumbing</span>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mt-6 text-base font-medium text-slate-200" aria-label="Mobile Navigation">
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#why-choose-us"
                  onClick={closeMenu}
                  className="py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                >
                  Why Choose Us
                </a>
                <a
                  href="#how-it-works"
                  onClick={closeMenu}
                  className="py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  onClick={closeMenu}
                  className="py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#faq"
                  onClick={closeMenu}
                  className="py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                >
                  FAQ
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-3">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onQuoteClick();
                }}
                className="w-full py-3 px-4 text-center font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors"
              >
                Request Free Quote
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${PLUMBING_CONFIG.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call Us</span>
                </a>
                <a
                  href={PLUMBING_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800 hover:bg-emerald-900/60 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <p className="text-[11px] text-slate-500 text-center pt-2">
                {PLUMBING_CONFIG.operatingHours}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
