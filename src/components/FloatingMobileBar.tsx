import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/junkData';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = () => {
  return (
    <>
      {/* Desktop Floating WhatsApp Quick-Connect Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp ${BUSINESS_INFO.whatsapp}`}
        className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-xl shadow-emerald-600/25 border border-emerald-500 transition-transform hover:-translate-y-0.5 whitespace-nowrap"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span>WhatsApp · {BUSINESS_INFO.whatsapp}</span>
      </a>

      {/* Mobile Bottom Action Bar (White Theme, <= 15% viewport height cap compliant) */}
      <aside
        aria-label="Mobile quick actions"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 sm:hidden shadow-lg"
      >
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-black text-xs whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp {BUSINESS_INFO.whatsapp}</span>
          </a>
        </div>
      </aside>
    </>
  );
};
