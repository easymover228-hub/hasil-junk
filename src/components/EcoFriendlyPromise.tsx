import React from 'react';
import { Heart, Recycle, Award } from 'lucide-react';
import { REAL_IMAGES } from '../data/junkData';
import { Card3DTilt } from '../features/Card3DTilt';

export const EcoFriendlyPromise: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Copy & Facility Image */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide">
              <span>Jeddah Junk Removal Service</span>
              <span aria-hidden="true">·</span>
              <span>Eco-Sorting & Donation First</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-balance">
              We Donate & Recycle First—Landfills Are Always The Last Resort
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Your unwanted items in Jeddah don’t simply end up in a dump. Up to 70% of every truckload is sorted and routed to local community charities or certified metal and electronics recovery facilities.
            </p>

            <Card3DTilt className="rounded-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-16/9 border border-slate-200 shadow-lg bg-slate-100">
                <img
                  src={REAL_IMAGES.ecoRecycling}
                  alt="Eco-Recycle Transfer Center with Donated Furniture, Sorted Metals, and E-Waste Bays"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-bold text-white">
                  <span>Dedicated Sorting Bays: Furniture · Metals · E-Waste</span>
                  <span className="font-mono tabular-nums text-emerald-300">70% Diverted</span>
                </div>
              </div>
            </Card3DTilt>
          </div>

          {/* Right Cards: 3 Sustainability Pillars (White Theme) */}
          <div className="lg:col-span-6 space-y-4">
            <Card3DTilt className="rounded-2xl">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    01. Community Charity Donations in Jeddah
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Clean, usable sofas, majlis sets, dining tables, wardrobes, and household goods are delivered directly to local charitable organizations supporting families in need.
                  </p>
                </div>
              </div>
            </Card3DTilt>

            <Card3DTilt className="rounded-2xl">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700">
                  <Recycle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    02. Scrap Metal & E-Waste Recovery
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Broken refrigerators, washers, AC units, aluminum, copper, steel, and commercial IT equipment are dismantled and processed through licensed material recovery plants.
                  </p>
                </div>
              </div>
            </Card3DTilt>

            <Card3DTilt className="rounded-2xl">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    03. Green Timber & Organic Mulching
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Palm fronds, garden trimmings, tree branches, and untreated lumber are processed into organic landscaping mulch rather than occupying landfill space.
                  </p>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>
      </div>
    </section>
  );
};
