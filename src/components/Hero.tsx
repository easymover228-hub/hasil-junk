import React, { useState } from 'react';
import {
  Truck,
  ShieldCheck,
  Star,
  Calendar,
  Phone,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Box,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  TRUCK_TIERS,
  SERVICES_DATA,
  REAL_IMAGES,
  getWhatsAppUrl,
} from '../data/junkData';
import { Card3DTilt } from '../features/Card3DTilt';

interface HeroProps {
  onOpenBooking: (prefill?: { service?: string; load?: string; zip?: string }) => void;
  onScrollTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollTo }) => {
  const [selectedService, setSelectedService] = useState('furniture-removal');
  const [selectedLoad, setSelectedLoad] = useState('half-load');

  const selectedServiceObj =
    SERVICES_DATA.find((s) => s.id === selectedService) || SERVICES_DATA[0];
  const selectedTierObj =
    TRUCK_TIERS.find((t) => t.id === selectedLoad) || TRUCK_TIERS[2];

  const whatsappHeroMessage = `Assalam o Alaikum! I need Jeddah Junk Removal Service (${BUSINESS_INFO.whatsapp}) for ${selectedServiceObj.title} (~${selectedTierObj.fraction} / ${selectedTierObj.cubicFeet} cu.ft.). Please share same-day dispatch availability.`;

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white text-slate-900 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200"
    >
      {/* Subtle clean daylight ambient glow */}
      <div className="absolute top-0 left-1/3 w-[42rem] h-[28rem] bg-emerald-50/70 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Unboxed Metadata Line */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 mb-6">
          <span className="text-emerald-700 font-bold">Jeddah Same-Day Hauling Fleet</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-amber-500">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <strong className="text-slate-900 font-mono tabular-nums">4.9 / 5.0</strong>
          </span>
          <span aria-hidden="true">·</span>
          <span>850+ Verified Reviews in Jeddah</span>
          <span aria-hidden="true">·</span>
          <span className="text-emerald-700 font-mono tabular-nums font-bold">
            WhatsApp Direct: {BUSINESS_INFO.whatsapp}
          </span>
        </div>

        {/* 2-Column Split Grid with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Core Proposition & Real Truck Visual */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight text-slate-900 leading-[1.08] text-balance">
                Jeddah{' '}
                <span className="text-emerald-600">
                  Junk Removal Service
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Point to your unwanted furniture, majlis sets, appliances, office equipment, or renovation debris anywhere in Jeddah and our two-man crew handles 100% of the lifting, loading, and broom-swept cleanup. Message us on WhatsApp at{' '}
                <strong className="text-slate-900 font-mono tabular-nums">{BUSINESS_INFO.whatsapp}</strong>{' '}
                for instant dispatch.
              </p>

              {/* Value Capabilities Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                {[
                  'Same-Day across Jeddah',
                  'Licensed & Fully Insured',
                  '70% Donated & Recycled',
                  '2-Man White-Glove Crew',
                  'Broom-Swept Guarantee',
                  'Instant WhatsApp Quotes',
                ].map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold">{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clean Real Hero Team Photograph */}
            <Card3DTilt className="rounded-2xl">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-16/9 bg-slate-100">
                <img
                  src={REAL_IMAGES.heroTeam}
                  alt="Jeddah Junk Removal Service Uniformed Team Ready for Same-Day Dispatch"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-emerald-300">
                      Uniformed & Insured Crew · 16ft High-Capacity Hauler
                    </div>
                    <div className="text-base sm:text-lg font-black text-white">
                      Our Jeddah Junk Removal Team Is Ready for Same-Day Pickup
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onScrollTo('features')}
                    className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
                  >
                    <span>Explore Features</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                  </button>
                </div>
              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Crisp White Instant WhatsApp & Dispatch Configurator */}
          <div className="lg:col-span-5 flex">
            <Card3DTilt className="w-full flex">
              <div className="bg-slate-50 text-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg w-full flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs mb-1">
                      <Truck className="w-4 h-4" />
                      <span>Jeddah Rapid Dispatch & WhatsApp Connect</span>
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                      Request Free On-Site Pickup
                    </h2>
                    <p className="text-xs text-slate-600 mt-1">
                      Select what you need hauled and connect immediately via WhatsApp{' '}
                      <span className="text-emerald-700 font-mono font-bold">{BUSINESS_INFO.whatsapp}</span>{' '}
                      or book your 2-hour arrival window.
                    </p>
                  </div>

                  {/* Service Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      1. What Do You Need Hauled Away?
                    </label>
                    <select
                      id="hero-service-select"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-emerald-500 focus:outline-hidden transition-all"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Volume Selector */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        2. Estimated Truck Space
                      </label>
                      <button
                        type="button"
                        onClick={() => onScrollTo('truck-3d')}
                        className="text-xs text-emerald-700 hover:underline font-semibold cursor-pointer"
                      >
                        Open Capacity Planner →
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {TRUCK_TIERS.slice(0, 3).map((tier) => (
                        <button
                          type="button"
                          key={tier.id}
                          onClick={() => setSelectedLoad(tier.id)}
                          className={`p-2.5 rounded-xl text-center border text-xs transition-all cursor-pointer ${
                            selectedLoad === tier.id
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-black text-slate-900">{tier.fraction}</div>
                          <div className="text-[10px] text-emerald-700 font-mono tabular-nums mt-0.5">
                            {tier.cubicFeet} cu.ft.
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {TRUCK_TIERS.slice(3, 5).map((tier) => (
                        <button
                          type="button"
                          key={tier.id}
                          onClick={() => setSelectedLoad(tier.id)}
                          className={`p-2.5 rounded-xl text-center border text-xs transition-all cursor-pointer ${
                            selectedLoad === tier.id
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-black text-slate-900">{tier.fraction}</div>
                          <div className="text-[10px] text-emerald-700 font-mono tabular-nums mt-0.5">
                            {tier.cubicFeet} cu.ft. ({tier.name})
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selected Load Info Preview */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      <Box className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        <span className="text-slate-500 block text-[11px]">Selected Hauler Capacity</span>
                        <span className="font-bold text-slate-900">
                          {selectedTierObj.name} ({selectedTierObj.pickupLoads})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 mt-6 border-t border-slate-200 space-y-3">
                  <a
                    id="hero-whatsapp-cta"
                    href={getWhatsAppUrl(whatsappHeroMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2.5 transition-all whitespace-nowrap"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>WhatsApp Now · {BUSINESS_INFO.whatsapp}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      id="hero-book-now-button"
                      onClick={() =>
                        onOpenBooking({
                          service: selectedService,
                          load: selectedLoad,
                        })
                      }
                      className="py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      <span>Book Online</span>
                    </button>

                    <a
                      id="hero-call-now-button"
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="py-3 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-900 font-bold text-xs flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                    >
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span className="font-mono tabular-nums">Call {BUSINESS_INFO.phone}</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Send photos on WhatsApp for an instant crew dispatch</span>
                  </div>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Stats Row Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_INFO.stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
