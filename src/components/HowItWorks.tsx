import React from 'react';
import { CalendarCheck, PhoneCall, HandMetal, HeartHandshake, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/junkData';
import { Card3DTilt } from '../features/Card3DTilt';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      number: '01',
      title: 'WhatsApp or Book Online',
      subtitle: 'Connect in under 60 seconds',
      description: `Message photos to ${BUSINESS_INFO.whatsapp} on WhatsApp or pick your preferred 2-hour arrival window online. Same-day trucks are on standby 7 days a week.`,
      icon: <CalendarCheck className="w-6 h-6 text-emerald-600" />,
      detail: 'Instant dispatch confirmation',
    },
    {
      number: '02',
      title: '20-Minute Pre-Arrival Call',
      subtitle: 'Zero waiting around all day',
      description:
        'Our uniformed two-person team calls you 20 minutes prior to arrival with live GPS routing so you know the exact moment our truck pulls up.',
      icon: <PhoneCall className="w-6 h-6 text-emerald-600" />,
      detail: 'Live GPS fleet tracking',
    },
    {
      number: '03',
      title: 'Point & We Lift Everything',
      subtitle: 'White-glove labor & dismantling',
      description:
        'Simply point to the items. Our crew carries heavy furniture and appliances out from any floor, loads the 16ft box truck, and sweeps the area spotless.',
      icon: <HandMetal className="w-6 h-6 text-emerald-600" />,
      detail: 'Full property protection insured',
    },
    {
      number: '04',
      title: 'Eco-Sorting & Recycling',
      subtitle: 'Donation first, landfill last',
      description:
        'We sort reusable furniture for community charities, route appliances and scrap metal to certified recovery plants, and handle e-waste responsibly.',
      icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
      detail: 'Up to 70% diverted from landfills',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide mb-3">
            <span>Jeddah Junk Removal Service</span>
            <span aria-hidden="true">·</span>
            <span>Streamlined 4-Step Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight text-balance">
            How Jeddah Junk Removal Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Reclaiming your home, garage, or office space takes four effortless steps.
          </p>
        </div>

        {/* 4 Step 3D Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <Card3DTilt key={idx} intensity={8} className="rounded-3xl h-full">
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 h-full flex flex-col justify-between hover:border-emerald-400 transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-black font-mono tabular-nums text-slate-300 group-hover:text-emerald-600 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mb-2.5">
                    {step.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-slate-200/80 text-xs font-bold text-slate-700">
                  ✓ {step.detail}
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-md shadow-emerald-600/20 flex items-center gap-2 transition-all whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Message on WhatsApp · {BUSINESS_INFO.whatsapp}</span>
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Book 2-Hour Arrival Window</span>
          </button>
        </div>
      </div>
    </section>
  );
};
