import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { PLUMBING_CONFIG } from '../config';

export const QuickContactFloating: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) {
    return (
      <aside
        aria-label="Contact options"
        className="fixed bottom-4 right-4 z-40"
      >
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/30 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Open contact shortcuts"
          title="Contact AquaFix"
        >
          <Phone className="w-5 h-5" />
        </button>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 p-2 rounded-2xl shadow-xl shadow-slate-950/40"
    >
      {/* Click-to-Call */}
      <a
        href={`tel:${PLUMBING_CONFIG.phoneRaw}`}
        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        title={`Call ${PLUMBING_CONFIG.phoneDisplay}`}
      >
        <Phone className="w-3.5 h-3.5 text-cyan-400" />
        <span className="hidden sm:inline">Call</span>
        <span className="sm:hidden font-mono text-[11px]">{PLUMBING_CONFIG.phoneDisplay}</span>
      </a>

      {/* WhatsApp */}
      <a
        href={PLUMBING_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-800/80 rounded-xl transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Minimize Button */}
      <button
        type="button"
        onClick={() => setCollapsed(true)}
        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        aria-label="Collapse quick contact bar"
        title="Minimize"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
