import React, { useState } from 'react';
import { MessageCircle, Calendar, Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/junkData';

interface NavbarProps {
  onOpenBooking: (prefill?: { service?: string; load?: string }) => void;
  onScrollTo: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-6 lg:gap-8 h-16 sm:h-20">
          {/* Zone 1: Single text element Brand Wordmark */}
          <button
            type="button"
            onClick={() => handleNavClick('hero')}
            id="nav-brand-logo"
            className="text-sm sm:text-xl font-black tracking-tight text-slate-900 hover:text-emerald-600 transition-colors truncate cursor-pointer"
          >
            Jeddah Junk Removal Service
          </button>

          {/* Zone 2: 5 Concise Single-Line Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <button
              type="button"
              onClick={() => handleNavClick('features')}
              className="hover:text-slate-900 hover:underline underline-offset-8 decoration-emerald-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Features
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('truck-3d')}
              className="hover:text-slate-900 hover:underline underline-offset-8 decoration-emerald-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Load Capacity
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('services')}
              className="hover:text-slate-900 hover:underline underline-offset-8 decoration-emerald-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('before-after')}
              className="hover:text-slate-900 hover:underline underline-offset-8 decoration-emerald-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Transformations
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('reviews')}
              className="hover:text-slate-900 hover:underline underline-offset-8 decoration-emerald-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Reviews
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-button"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm shadow-emerald-600/20 transition-all whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp {BUSINESS_INFO.whatsapp}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 sm:hidden whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>{BUSINESS_INFO.whatsapp}</span>
            </a>
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 bg-emerald-600 text-white rounded-xl font-bold text-xs text-center whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp {BUSINESS_INFO.whatsapp}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-1.5 py-3 px-3 bg-slate-900 text-white rounded-xl font-bold text-xs text-center cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Schedule Pickup</span>
            </button>
          </div>

          <div className="space-y-1 font-semibold text-slate-700 text-sm border-t border-slate-100 pt-2">
            {[
              { id: 'features', label: 'Auto-Sliding Features' },
              { id: 'truck-3d', label: 'Truck Volume Planner' },
              { id: 'services', label: 'All Hauling Services' },
              { id: 'how-it-works', label: 'How It Works' },
              { id: 'before-after', label: 'Before & After Gallery' },
              { id: 'reviews', label: 'Customer Reviews' },
              { id: 'faq', label: 'Frequently Asked Questions' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Direct Hotline & WhatsApp:</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="text-emerald-700 font-mono font-bold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
