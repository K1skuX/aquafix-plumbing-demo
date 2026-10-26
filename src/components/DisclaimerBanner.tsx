import React, { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { PLUMBING_CONFIG } from '../config';

export const DisclaimerBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Fictional business notice"
      className="bg-slate-900 border-b border-cyan-900/60 text-slate-200 text-xs px-4 py-2 transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
          <p className="truncate sm:text-clip">
            <strong className="font-semibold text-cyan-300">Demonstration Showcase:</strong>{' '}
            {PLUMBING_CONFIG.fictionalDisclaimer}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="p-1 hover:text-white rounded hover:bg-slate-800 transition-colors shrink-0"
          aria-label="Dismiss fictional notice banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
