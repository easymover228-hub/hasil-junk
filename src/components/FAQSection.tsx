import React, { useState } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, BUSINESS_INFO, getWhatsAppUrl } from '../data/junkData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide mb-3">
            <span>Jeddah Junk Removal Service</span>
            <span aria-hidden="true">·</span>
            <span>7-Day Dispatch Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Everything you need to know about our same-day scheduling in Jeddah, white-glove crew, and eco-friendly disposal.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all ${
                  isOpen
                    ? 'border-emerald-500 bg-emerald-50/20 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    <p>{item.answer}</p>
                    <div className="mt-3 text-xs font-semibold text-emerald-700">
                      Topic: {item.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp & Hotline Banner (Light Theme) */}
        <div className="mt-12 bg-slate-50 text-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Have a question about a villa, apartment, or office clearance in Jeddah?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Message or call our Jeddah dispatch specialists directly at{' '}
              <strong className="text-emerald-700 font-mono tabular-nums">{BUSINESS_INFO.whatsapp}</strong>.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp {BUSINESS_INFO.whatsapp}</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-900 font-bold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
