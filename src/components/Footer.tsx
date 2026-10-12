import React from 'react';
import { Truck, Phone, Mail, Clock, ShieldCheck, Heart, ArrowUp, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA, getWhatsAppUrl } from '../data/junkData';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">
      {/* Top Pre-Footer Conversion Strip */}
      <div className="bg-emerald-50 border-b border-emerald-200/80 py-10 px-4 sm:px-6 lg:px-8 text-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
              Ready to clear your unwanted junk in Jeddah today?
            </h3>
            <p className="text-slate-600 text-sm font-medium mt-1">
              Message <strong className="text-slate-900">Jeddah Junk Removal Service</strong> on WhatsApp at <strong className="font-mono text-emerald-700">{BUSINESS_INFO.whatsapp}</strong> or book your 2-hour pickup window online.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm transition-colors shadow-md shadow-emerald-600/20 flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp {BUSINESS_INFO.whatsapp}</span>
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Schedule Free Pickup</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content (White Theme) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
                <Truck className="w-5 h-5" />
              </div>
              <span className="text-lg font-black tracking-tight text-slate-900">
                Jeddah Junk Removal Service
              </span>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Your trusted team across all Jeddah districts for fast same-day residential and commercial junk removal, furniture & majlis hauling, appliance removal, office liquidation, and renovation debris clearing.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 font-bold font-mono tabular-nums"
                >
                  WhatsApp: {BUSINESS_INFO.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="hover:text-emerald-700 font-bold font-mono tabular-nums"
                >
                  Direct Call: {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-emerald-700">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Hauling Services in Jeddah
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {SERVICES_DATA.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onScrollTo('services')}
                    className="hover:text-emerald-700 transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('features')}
                  className="hover:text-emerald-700 cursor-pointer"
                >
                  Features Slider
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('truck-3d')}
                  className="hover:text-emerald-700 cursor-pointer"
                >
                  Load Capacity
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('how-it-works')}
                  className="hover:text-emerald-700 cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('before-after')}
                  className="hover:text-emerald-700 cursor-pointer"
                >
                  Transformations
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('reviews')}
                  className="hover:text-emerald-700 cursor-pointer"
                >
                  Verified Reviews
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('faq')}
                  className="hover:text-emerald-700 cursor-pointer"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Safety & Compliance */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Safety & Compliance
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Comprehensive Property Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Uniformed & Insured 2-Person Crews</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>70% Landfill Diversion & Donation First</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Jeddah Junk Removal Service. All rights reserved. WhatsApp Dispatch: {BUSINESS_INFO.whatsapp}.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
