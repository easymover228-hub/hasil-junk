import React, { useState } from 'react';
import {
  Armchair,
  Refrigerator,
  Home,
  Trees,
  Building2,
  HardHat,
  Hammer,
  Tv,
  Check,
  MessageCircle,
  Calendar,
} from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO, getWhatsAppUrl } from '../data/junkData';
import { ServiceCategory } from '../types';
import { Card3DTilt } from '../features/Card3DTilt';

interface ServicesGridProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Armchair: <Armchair className="w-5 h-5 text-emerald-700" />,
  Refrigerator: <Refrigerator className="w-5 h-5 text-emerald-700" />,
  Home: <Home className="w-5 h-5 text-emerald-700" />,
  Trees: <Trees className="w-5 h-5 text-emerald-700" />,
  Building2: <Building2 className="w-5 h-5 text-emerald-700" />,
  HardHat: <HardHat className="w-5 h-5 text-emerald-700" />,
  Hammer: <Hammer className="w-5 h-5 text-emerald-700" />,
  Tv: <Tv className="w-5 h-5 text-emerald-700" />,
};

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide mb-3">
            <span>Jeddah Junk Removal Service</span>
            <span aria-hidden="true">·</span>
            <span>Residential & Commercial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight text-balance">
            What Can We Haul Away For You in Jeddah?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            From a single heavy appliance to an entire villa or corporate warehouse clearance, our uniformed team handles all lifting, dismantling, loading, and eco-friendly disposal.
          </p>

          {/* Interactive Filter Controls */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-2xs">
            {[
              { id: 'all', label: 'All Services (8)' },
              { id: 'residential', label: 'Residential & Villas' },
              { id: 'commercial', label: 'Commercial & Office' },
              { id: 'specialty', label: 'Debris & Demolition' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as ServiceCategory)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === tab.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => (
            <Card3DTilt key={service.id} className="rounded-3xl h-full">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full overflow-hidden">
                <div>
                  {/* Service Visual Header */}
                  <div className="relative aspect-16/9 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                    {/* Icon & Spec Overlay */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                          {iconMap[service.iconName] || (
                            <Armchair className="w-5 h-5 text-emerald-700" />
                          )}
                        </div>
                        <span className="text-[11px] font-semibold text-white">
                          {service.crewSpec}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-slate-900 mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Common Items Accepted */}
                    <div className="border-t border-slate-100 pt-3.5">
                      <span className="text-xs font-bold text-slate-500 block mb-2">
                        Common Items Handled:
                      </span>
                      <div className="grid grid-cols-1 gap-1.5">
                        {service.commonItems.slice(0, 4).map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-slate-700"
                          >
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions: WhatsApp 0575771358 + Book */}
                <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-2.5">
                  <a
                    href={getWhatsAppUrl(
                      `Assalam o Alaikum! I need ${service.title} from Jeddah Junk Removal Service (${BUSINESS_INFO.whatsapp}). Please share availability.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    id={`book-service-${service.id}`}
                    onClick={() => onSelectServiceForBooking(service.id)}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Book Pickup</span>
                  </button>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Direct WhatsApp Photo Quote Banner (Light Theme) */}
        <div className="mt-14 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Have bulky, heavy, or mixed clutter anywhere in Jeddah?
            </h3>
            <p className="text-sm text-slate-600">
              Send a quick smartphone photo on WhatsApp to{' '}
              <strong className="text-emerald-700 font-mono tabular-nums">{BUSINESS_INFO.whatsapp}</strong>{' '}
              or upload it in our booking form for immediate crew dispatch.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl(
                `Assalam o Alaikum! I want to send photos of my items for Jeddah Junk Removal Service (${BUSINESS_INFO.whatsapp}).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Photo to {BUSINESS_INFO.whatsapp}</span>
            </a>
            <button
              type="button"
              onClick={() => onSelectServiceForBooking('custom-quote')}
              className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-bold text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Upload Photos Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
