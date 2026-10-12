import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Clock, Truck, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/junkData';

interface ServiceAreaCheckerProps {
  onBookInZip: (zip: string) => void;
}

export const ServiceAreaChecker: React.FC<ServiceAreaCheckerProps> = ({ onBookInZip }) => {
  const [areaQuery, setAreaQuery] = useState('');
  const [checkedResult, setCheckedResult] = useState<{
    query: string;
    estimatedArrival: string;
    depot: string;
  } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = areaQuery.trim();
    if (!clean) return;

    setCheckedResult({
      query: clean,
      estimatedArrival: '45 – 75 Minutes (Same-Day Standby)',
      depot: 'Jeddah Rapid Fleet Hub',
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Explanation */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Jeddah Junk Removal Service · Coverage Area</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-balance">
                Check Instant Same-Day Truck Availability in Jeddah
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We operate GPS-dispatched 16-foot hauling trucks across all North, Central, and South Jeddah districts. Select or type your district below to confirm immediate crew dispatch.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-500">
                <span className="font-bold text-slate-800">Popular Jeddah Hubs:</span>
                {['Al Rawdah', 'Al Salamah', 'Obhur', 'Al Hamra', 'Al Zahra', 'Al Bawadi'].map((hub, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setAreaQuery(hub)}
                    className="underline hover:text-emerald-700 cursor-pointer font-medium"
                  >
                    {hub}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Interactive Search */}
            <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <form onSubmit={handleCheck} className="space-y-4">
                <label className="block text-xs font-bold text-slate-700">
                  Enter Your Jeddah District or Street Name
                </label>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="text"
                    value={areaQuery}
                    onChange={(e) => setAreaQuery(e.target.value)}
                    placeholder="e.g. Al Rawdah, Al Salamah, Obhur, Tahlia St"
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-semibold focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shrink-0 transition-colors whitespace-nowrap"
                  >
                    <Search className="w-4 h-4" />
                    <span>Check Dispatch</span>
                  </button>
                </div>
              </form>

              {checkedResult && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-3">
                  <div className="flex items-center gap-2 font-black text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Same-Day Hauling Fleet Active in {checkedResult.query}!</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-900 pt-2 border-t border-emerald-200">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Dispatch Window: <strong>{checkedResult.estimatedArrival}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Assigned Unit: <strong>{checkedResult.depot}</strong></span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    <a
                      href={getWhatsAppUrl(
                        `Assalam o Alaikum! I checked availability for ${checkedResult.query} in Jeddah (${BUSINESS_INFO.whatsapp}). Please share your next pickup slot.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp {BUSINESS_INFO.whatsapp}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => onBookInZip(checkedResult.query)}
                      className="py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Book Online</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
