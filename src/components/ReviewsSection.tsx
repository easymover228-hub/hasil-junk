import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/junkData';
import { Card3DTilt } from '../features/Card3DTilt';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide mb-3">
            <span>Verified Client Feedback</span>
            <span aria-hidden="true">·</span>
            <span>4.9 / 5.0 Average Rating</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight text-balance">
            Trusted By 18,200+ Homeowners & Businesses
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real outcomes from residential villa owners, facility managers, and general contractors who rely on our same-day fleet.
          </p>
        </div>

        {/* 3D Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CUSTOMER_REVIEWS.map((rev) => (
            <Card3DTilt key={rev.id} intensity={6} className="rounded-3xl h-full">
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{rev.date}</span>
                  </div>

                  <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-6">
                    “{rev.comment}”
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-4 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <span>{rev.author}</span>
                      {rev.verified && (
                        <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Verified Client</span>
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {rev.role} · <span className="text-slate-700 font-medium">{rev.service}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
};
