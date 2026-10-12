import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Layers,
  Truck,
} from 'lucide-react';
import { FEATURES_SLIDER_DATA } from './featureData';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/junkData';

interface FeaturesAutoSliderProps {
  onOpenBooking: (prefill?: { service?: string }) => void;
}

export const FeaturesAutoSlider: React.FC<FeaturesAutoSliderProps> = ({ onOpenBooking }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const totalSlides = FEATURES_SLIDER_DATA.length;
  // 2-second (2000ms) auto-slide duration
  const SLIDE_DURATION_MS = 2000;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const intervalMs = 50;
    const step = (intervalMs / SLIDE_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          setActiveIndex((current) => (current + 1) % totalSlides);
          return 0;
        }
        return prev + step;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, totalSlides]);

  const activeFeature = FEATURES_SLIDER_DATA[activeIndex] || FEATURES_SLIDER_DATA[0];

  return (
    <section
      id="features"
      className="py-16 sm:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200 scroll-mt-16 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3 min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide">
              <Layers className="w-4 h-4 shrink-0" />
              <span>Jeddah Junk Removal Service</span>
              <span aria-hidden="true">·</span>
              <span>2-Second Auto-Sliding Before & After Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Before & After Hauling Transformations
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              See how our uniformed Jeddah crew clears cluttered garages, furniture, appliances, and debris—with direct WhatsApp dispatch at{' '}
              <strong className="text-emerald-700 font-mono tabular-nums">{BUSINESS_INFO.whatsapp}</strong>.
            </p>
          </div>

          {/* Slider Controls & 2s Auto-Slide Status */}
          <div className="flex items-center gap-3 self-start lg:self-end shrink-0">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-2xs"
              aria-label={isPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Auto-Slide (2s) Active</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Paused</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-white hover:bg-emerald-600 hover:text-white border border-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                aria-label="Previous feature"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-white hover:bg-emerald-600 hover:text-white border border-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                aria-label="Next feature"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Center Active Feature Stage */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg w-full">
          {/* 2-Second Auto-Slide Progress Bar */}
          <div className="h-1.5 w-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-emerald-600 transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Side-by-Side BEFORE & AFTER Real Photographs */}
            <div className="lg:col-span-7 bg-slate-100 p-4 sm:p-6 flex flex-col justify-between gap-4 border-b lg:border-b-0 lg:border-r border-slate-200 min-w-0">
              {/* Top Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-900 flex items-center gap-2 shadow-2xs">
                  <span className="text-emerald-700 font-mono tabular-nums font-bold">
                    {activeFeature.number} / 0{totalSlides}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeFeature.category}</span>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold tracking-tight shadow-xs">
                  Before & After · 2s Auto-Slide
                </div>
              </div>

              {/* Side-by-Side Before & After Images with Explicit Height */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {/* BEFORE IMAGE */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden border border-slate-300 bg-slate-200 shadow-sm">
                  <img
                    key={`before-${activeFeature.id}`}
                    src={activeFeature.beforeImage}
                    alt={`${activeFeature.title} - Before`}
                    className="w-full h-full object-cover object-center block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-900 text-white text-xs font-black tracking-wide shadow-sm">
                    BEFORE
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white">
                    Clutter & Heavy Hauling Stage
                  </div>
                </div>

                {/* AFTER IMAGE */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden border-2 border-emerald-500 bg-slate-200 shadow-sm">
                  <img
                    key={`after-${activeFeature.id}`}
                    src={activeFeature.afterImage}
                    alt={`${activeFeature.title} - After`}
                    className="w-full h-full object-cover object-center block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-black tracking-wide shadow-sm">
                    AFTER
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-emerald-200">
                    Cleared, Sorted & Broom-Swept
                  </div>
                </div>
              </div>

              {/* Bottom Spec Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-3.5 flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-500 font-medium">
                      Jeddah Crew Guarantee
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {activeFeature.metrics}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Crisp White Feature Narrative & Direct WhatsApp / Booking */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white min-w-0">
              <div className="space-y-4">
                <div className="text-xs font-bold text-emerald-700 tracking-wide">
                  {activeFeature.subtitle}
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                  {activeFeature.number}. {activeFeature.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeFeature.description}
                </p>

                {/* Feature Highlights List */}
                <div className="pt-3 space-y-2 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-500">
                    Included With This Service:
                  </div>
                  {activeFeature.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={getWhatsAppUrl(activeFeature.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-600/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                    <span>WhatsApp {BUSINESS_INFO.whatsapp}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenBooking({ service: activeFeature.title })}
                    className="py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Schedule Free Visit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive 6-Feature Before/After Thumbnail Dock (Light Theme) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {FEATURES_SLIDER_DATA.map((feat, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={feat.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`group text-left rounded-2xl overflow-hidden border transition-all cursor-pointer relative min-w-0 ${
                  isCurrent
                    ? 'border-emerald-600 bg-white ring-2 ring-emerald-500/25 shadow-md'
                    : 'border-slate-200 bg-white opacity-85 hover:opacity-100 hover:border-slate-300'
                }`}
              >
                <div className="h-24 w-full overflow-hidden bg-slate-200 relative flex">
                  <div className="w-1/2 h-full relative border-r border-white/60">
                    <img
                      src={feat.beforeImage}
                      alt={`${feat.title} Before`}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                  <div className="w-1/2 h-full relative">
                    <img
                      src={feat.afterImage}
                      alt={`${feat.title} After`}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-white/95 text-[10px] font-mono font-bold text-emerald-700 shadow-2xs">
                    {feat.number} · B/A
                  </span>
                </div>
                <div className="p-2.5">
                  <div className="text-xs font-bold text-slate-900 truncate">
                    {feat.title.replace('Before & After: ', '')}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">
                    {feat.category}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
