import React, { useState, useEffect } from 'react';
import { BEFORE_AFTER_PROJECTS, BUSINESS_INFO, getWhatsAppUrl } from '../data/junkData';
import { Clock, MapPin, CheckCircle2, MessageCircle, Calendar, Pause, Play } from 'lucide-react';
import { Card3DTilt } from '../features/Card3DTilt';

interface BeforeAfterGalleryProps {
  onOpenBooking: () => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenBooking }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [viewState, setViewState] = useState<'split' | 'after' | 'before'>('split');

  // 2-second (2000ms) auto-slide across Before & After projects
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BEFORE_AFTER_PROJECTS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeProject = BEFORE_AFTER_PROJECTS[activeIndex] || BEFORE_AFTER_PROJECTS[0];

  return (
    <section
      id="before-after"
      className="py-20 sm:py-28 bg-slate-50 text-slate-900 scroll-mt-16 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide mb-3">
            <span>Jeddah Field Case Studies</span>
            <span aria-hidden="true">·</span>
            <span>2-Second Auto-Sliding Before & After</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight text-balance">
            See The Difference Our Jeddah Crews Make
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            From packed villa garages in Al Rawdah to full apartment and courtyard clearouts across Jeddah, we restore clarity in a single visit.
          </p>

          {/* Interactive Case Study Tabs + 1s Auto-Slide Toggle */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              {BEFORE_AFTER_PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    activeIndex === idx
                      ? 'bg-emerald-600 text-white font-black shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {proj.title}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-emerald-600" />
                  <span>2s Auto-Slide</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-amber-600" />
                  <span>Paused</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Project Feature Card (White Theme) */}
        <Card3DTilt className="rounded-3xl">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            {/* Top Project Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeProject.location}</span>
                  <span aria-hidden="true">·</span>
                  <Clock className="w-3.5 h-3.5" />
                  <span>Completed in {activeProject.timeSpent}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {activeProject.title}
                </h3>
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setViewState('split')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    viewState === 'split'
                      ? 'bg-emerald-600 text-white font-black shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Before & After Split
                </button>
                <button
                  type="button"
                  onClick={() => setViewState('before')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    viewState === 'before'
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Before Only
                </button>
                <button
                  type="button"
                  onClick={() => setViewState('after')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    viewState === 'after'
                      ? 'bg-emerald-600 text-white font-black'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  After Only
                </button>
              </div>
            </div>

            {/* Visual Canvas Area */}
            <div className="mt-6">
              {viewState === 'split' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative rounded-2xl overflow-hidden aspect-16/9 border border-slate-200 bg-slate-100">
                    <img
                      src={activeProject.beforeImage}
                      alt={`${activeProject.title} Before`}
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-black px-3 py-1 rounded-lg shadow-xs">
                      BEFORE · CLUTTER & HAULING
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden aspect-16/9 border-2 border-emerald-500 bg-slate-100">
                    <img
                      src={activeProject.afterImage}
                      alt={`${activeProject.title} After`}
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-lg shadow-md">
                      AFTER · CLEARED & SWEPT
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden aspect-16/9 max-h-[460px] border border-slate-200 bg-slate-100">
                  <img
                    src={
                      viewState === 'before'
                        ? activeProject.beforeImage
                        : activeProject.afterImage
                    }
                    alt={`${activeProject.title} ${viewState}`}
                    loading="eager"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Project Description & Direct CTAs */}
            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeProject.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Scope Handled: {activeProject.itemsRemoved}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={getWhatsAppUrl(
                    `Assalam o Alaikum! I saw your "${activeProject.title}" case study and need Jeddah Junk Removal Service (${BUSINESS_INFO.whatsapp}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp {BUSINESS_INFO.whatsapp}</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Book Cleanout</span>
                </button>
              </div>
            </div>
          </div>
        </Card3DTilt>
      </div>
    </section>
  );
};
