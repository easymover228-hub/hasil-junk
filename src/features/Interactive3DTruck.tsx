import React, { useState, useMemo } from 'react';
import {
  Truck,
  Plus,
  Minus,
  Check,
  RefreshCw,
  MessageCircle,
  Calendar,
  Box,
} from 'lucide-react';
import { TRUCK_TIERS, QUICK_CALC_ITEMS, BUSINESS_INFO, REAL_IMAGES, getWhatsAppUrl } from '../data/junkData';

interface Interactive3DTruckProps {
  onBookWithLoad: (details: { load: string; itemsSummary?: string }) => void;
}

export const Interactive3DTruck: React.FC<Interactive3DTruckProps> = ({ onBookWithLoad }) => {
  const [simMode, setSimMode] = useState<'volume' | 'items'>('volume');
  const [selectedTierId, setSelectedTierId] = useState<string>('half-load');
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>({
    sofa: 1,
    refrigerator: 1,
    'boxes-stack': 2,
  });

  const currentTier = useMemo(() => {
    return TRUCK_TIERS.find((t) => t.id === selectedTierId) || TRUCK_TIERS[2];
  }, [selectedTierId]);

  // Backend 3D volumetric spatial calculation engine
  const { totalVolumeUnits, itemsSelectedCount, itemsSummaryList } = useMemo(() => {
    let volume = 0;
    let count = 0;
    const list: string[] = [];

    Object.entries(itemQuantities).forEach(([itemId, rawQty]) => {
      const qty = Number(rawQty);
      if (qty > 0) {
        const item = QUICK_CALC_ITEMS.find((i) => i.id === itemId);
        if (item) {
          volume += item.volumeUnits * qty;
          count += qty;
          list.push(`${qty}x ${item.name}`);
        }
      }
    });

    return {
      totalVolumeUnits: volume,
      itemsSelectedCount: count,
      itemsSummaryList: list.join(', '),
    };
  }, [itemQuantities]);

  const itemFillPercentage = Math.min(100, Math.round((totalVolumeUnits / 450) * 100));
  const activeFillPercentage = simMode === 'volume' ? currentTier.percentage : itemFillPercentage;
  const activeCubicFeet =
    simMode === 'volume' ? currentTier.cubicFeet : Math.min(450, totalVolumeUnits);

  const handleItemCountChange = (itemId: string, delta: number) => {
    setItemQuantities((prev) => {
      const current = prev[itemId] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: next };
    });
  };

  const whatsappSummaryMessage =
    simMode === 'volume'
      ? `Assalam o Alaikum! I need Jeddah Junk Removal Service (${BUSINESS_INFO.whatsapp}). Estimated truck load: ${currentTier.fraction} (${currentTier.name} — ~${currentTier.cubicFeet} cu.ft.). Please share same-day availability.`
      : `Assalam o Alaikum! I need Jeddah Junk Removal Service (${BUSINESS_INFO.whatsapp}). Items to haul: ${itemsSummaryList || 'Custom items'} (~${activeCubicFeet} cu.ft., ${activeFillPercentage}% truck load). Please share availability.`;

  return (
    <section
      id="truck-3d"
      className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide mb-3">
            <span>Jeddah Truck Capacity Planner</span>
            <span aria-hidden="true">·</span>
            <span>16-Foot Heavy Hauler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight text-balance">
            Estimate Your Truck Load Volume
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Select your approximate load size or tap individual household and office items, then send your load list directly to WhatsApp{' '}
            <strong className="text-slate-900 font-mono tabular-nums">{BUSINESS_INFO.whatsapp}</strong> for immediate dispatch in Jeddah.
          </p>

          {/* Interactive Mode Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              type="button"
              onClick={() => setSimMode('volume')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                simMode === 'volume'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Select by Truck Space
            </button>
            <button
              type="button"
              onClick={() => setSimMode('items')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                simMode === 'items'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Select by Specific Items ({itemsSelectedCount})</span>
            </button>
          </div>
        </div>

        {/* Main 2-Column Capacity Planner Grid (Light Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Crisp White Hauler Visual & Capacity Meter */}
          <div className="lg:col-span-7 bg-slate-50 text-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-5">
              {/* Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Truck className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-slate-900">
                    16ft High-Capacity Hauler Bed
                  </span>
                </div>
                <span className="px-3 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono tabular-nums text-emerald-800 font-bold">
                  {activeFillPercentage}% Capacity ({activeCubicFeet} cu.ft.)
                </span>
              </div>

              {/* Real Hauler Photograph */}
              <div className="relative rounded-2xl overflow-hidden aspect-16/9 border border-slate-200 bg-white shadow-xs">
                <img
                  src={REAL_IMAGES.heroTruckClean}
                  alt="Jeddah Junk Removal Service 16ft Hauler Loading Furniture"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-bold">
                    {simMode === 'volume' ? currentTier.name : `${itemsSelectedCount} Selected Items`}
                  </span>
                  <span className="text-emerald-300 font-semibold">
                    {simMode === 'volume' ? currentTier.pickupLoads : `~${activeCubicFeet} Cubic Feet`}
                  </span>
                </div>
              </div>

              {/* Clean Truck Bed Meter */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Front Cab</span>
                  <span className="font-bold text-slate-800">16-Foot Box Bed Volume</span>
                  <span>Rear Liftgate</span>
                </div>
                <div className="h-7 w-full bg-slate-100 rounded-xl overflow-hidden relative flex border border-slate-200">
                  <div className="absolute left-[25%] top-0 bottom-0 w-px bg-slate-300 z-10" />
                  <div className="absolute left-[50%] top-0 bottom-0 w-px bg-slate-300 z-10" />
                  <div className="absolute left-[75%] top-0 bottom-0 w-px bg-slate-300 z-10" />
                  <div
                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-500 transition-all duration-300 flex items-center justify-end pr-2.5"
                    style={{ width: `${Math.max(activeFillPercentage, 8)}%` }}
                  >
                    <span className="text-[11px] font-black text-white font-mono tabular-nums">
                      {activeFillPercentage}%
                    </span>
                  </div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>Min</span>
                  <span>1/4</span>
                  <span>1/2</span>
                  <span>3/4</span>
                  <span>Full (450 cu.ft.)</span>
                </div>
              </div>
            </div>

            {/* Bottom Capacity Spec Strip */}
            <div className="grid grid-cols-3 gap-3 pt-5 mt-5 border-t border-slate-200 text-xs">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Selected Volume</span>
                <span className="font-black text-slate-900 text-sm font-mono tabular-nums">
                  {simMode === 'volume' ? currentTier.fraction : `${activeFillPercentage}% Truck`}
                </span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Pickup Equivalent</span>
                <span className="font-bold text-emerald-700 text-xs sm:text-sm">
                  {simMode === 'volume'
                    ? currentTier.pickupLoads.replace('Equivalent to ', '')
                    : `~${Math.max(1, Math.round(activeCubicFeet / 55))} Pickup Beds`}
                </span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Est. 2-Man Load Time</span>
                <span className="font-bold text-slate-900 text-xs sm:text-sm">
                  {simMode === 'volume' ? currentTier.crewTime : '20 – 45 Mins'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Load Controls & Instant WhatsApp Dispatch */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between space-y-6">
            {simMode === 'volume' ? (
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    1. Choose Truck Load Fraction
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Select your approximate volume below to check truck capacity.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {TRUCK_TIERS.map((tier) => {
                    const isSelected = selectedTierId === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTierId(tier.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer relative ${
                          isSelected
                            ? 'bg-white border-emerald-600 ring-2 ring-emerald-500/20 shadow-sm'
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-emerald-700 font-mono tabular-nums">
                            {tier.fraction}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                        </div>
                        <div className="text-sm font-black text-slate-900 mt-0.5">
                          {tier.name}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 font-mono tabular-nums">
                          {tier.cubicFeet} cu.ft. capacity
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Tier Example Items */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-2.5">
                  <div className="text-xs font-bold text-slate-800">
                    What fits in a {currentTier.fraction} ({currentTier.cubicFeet} cu.ft.)?
                  </div>
                  <p className="text-xs text-slate-600">{currentTier.idealFor}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                    {currentTier.examples.map((ex, i) => (
                      <div key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                        <Box className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      Select Items to Haul
                    </h3>
                    <p className="text-xs text-slate-600">
                      Add items to calculate your total truck volume.
                    </p>
                  </div>
                  {itemsSelectedCount > 0 && (
                    <button
                      type="button"
                      onClick={() => setItemQuantities({})}
                      className="text-xs text-slate-500 hover:text-rose-600 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Clear</span>
                    </button>
                  )}
                </div>

                <div className="space-y-2 max-h-[310px] overflow-y-auto pr-1">
                  {QUICK_CALC_ITEMS.map((item) => {
                    const count = itemQuantities[item.id] || 0;
                    return (
                      <div
                        key={item.id}
                        className={`p-3 rounded-xl border flex items-center justify-between transition-colors ${
                          count > 0
                            ? 'bg-emerald-50/60 border-emerald-300'
                            : 'bg-white border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <span
                            className="w-3 h-3 rounded-sm shrink-0"
                            style={{ backgroundColor: item.color3D }}
                          />
                          <div className="truncate">
                            <div className="text-xs font-bold text-slate-900 truncate">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-slate-500 font-mono tabular-nums">
                              {item.category} · ~{item.volumeUnits} cu.ft.
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleItemCountChange(item.id, -1)}
                            disabled={count === 0}
                            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs ${
                              count > 0
                                ? 'bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 cursor-pointer'
                                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                            }`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-5 text-center text-xs font-black font-mono tabular-nums text-slate-900">
                            {count}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleItemCountChange(item.id, 1)}
                            className="w-7 h-7 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center text-xs cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Direct Conversion CTAs (WhatsApp 0575771358 + Online Booking) */}
            <div className="pt-4 border-t border-slate-200 space-y-2.5">
              <a
                href={getWhatsAppUrl(whatsappSummaryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send Load Details to WhatsApp ({BUSINESS_INFO.whatsapp})</span>
              </a>

              <button
                type="button"
                onClick={() =>
                  onBookWithLoad({
                    load: simMode === 'volume' ? currentTier.id : 'half-load',
                    itemsSummary:
                      simMode === 'volume'
                        ? `${currentTier.fraction} (${currentTier.name})`
                        : itemsSummaryList || 'Custom Item Loadout',
                  })
                }
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Reserve 2-Hour Pickup Window Online</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
