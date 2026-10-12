import React, { useState, useEffect } from 'react';
import {
  X,
  Upload,
  CheckCircle,
  ShieldCheck,
  Phone,
  Truck,
  Trash2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { SERVICES_DATA, TRUCK_TIERS, BUSINESS_INFO, getWhatsAppUrl } from '../data/junkData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialLoad?: string;
  initialZip?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialLoad,
  initialZip,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    serviceType: initialService || 'furniture-removal',
    loadEstimate: initialLoad || 'half-load',
    preferredDate: '',
    preferredTime: '10:00 AM – 12:00 PM',
    fullName: '',
    phone: '',
    email: '',
    address: '',
    zipCode: initialZip || '',
    notes: '',
    photos: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
    if (initialLoad) {
      setFormData((prev) => ({ ...prev, loadEstimate: initialLoad }));
    }
    if (initialZip) {
      setFormData((prev) => ({ ...prev, zipCode: initialZip }));
    }
    const today = new Date();
    const formatted = today.toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, preferredDate: prev.preferredDate || formatted }));
  }, [initialService, initialLoad, initialZip, isOpen]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesList = Array.from(e.target.files) as File[];
      const newFiles = filesList.map((file) => ({
        name: file.name,
        size: Math.round(file.size / 1024),
        url: URL.createObjectURL(file),
      }));
      setFormData((prev) => ({
        ...prev,
        photos: [...prev.photos, ...newFiles],
      }));
    }
  };

  const handleRemovePhoto = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomCode = 'JED-' + Math.floor(10000 + Math.random() * 90000);
      setBookingRef(randomCode);
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  const selectedServiceTitle =
    SERVICES_DATA.find((s) => s.id === formData.serviceType)?.title || formData.serviceType;
  const selectedTierObj =
    TRUCK_TIERS.find((t) => t.id === formData.loadEstimate) || TRUCK_TIERS[2];

  const whatsappDirectMsg = `Assalam o Alaikum! Jeddah Junk Removal Service (${BUSINESS_INFO.whatsapp}):
Booking Request:
• Service: ${selectedServiceTitle}
• Load Size: ${selectedTierObj.fraction} (${selectedTierObj.name})
• Date & Time: ${formData.preferredDate} (${formData.preferredTime})
• Name: ${formData.fullName || 'Client'}
• Address: ${formData.address || 'Jeddah'} ${formData.zipCode}
• Notes: ${formData.notes || 'None'}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={handleResetAndClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          id="close-booking-modal"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isConfirmed ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Dispatch Window Reserved
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Your Pickup Request Is Confirmed!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Our nearest hauling crew has been notified and will call you 20 minutes prior to arrival. You can also send your live location or photos on WhatsApp at{' '}
                <strong className="text-slate-900 font-mono">{BUSINESS_INFO.whatsapp}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500">Dispatch Reference:</span>
                <span className="font-extrabold text-emerald-700 font-mono">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500">Service Requested:</span>
                <span className="font-bold text-slate-900">{selectedServiceTitle}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500">Estimated Truck Volume:</span>
                <span className="font-bold text-slate-900">
                  {selectedTierObj.fraction} ({selectedTierObj.cubicFeet} cu.ft.)
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500">Arrival Window:</span>
                <span className="font-bold text-slate-900">
                  {formData.preferredDate} · {formData.preferredTime}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Pickup Location:</span>
                <span className="font-bold text-slate-900">
                  {formData.address} {formData.zipCode}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={getWhatsAppUrl(whatsappDirectMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send Details to WhatsApp ({BUSINESS_INFO.whatsapp})</span>
              </a>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 max-h-[88vh] overflow-y-auto">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold mb-1">
                <Truck className="w-4 h-4" />
                <span>Jeddah Junk Removal Service · WhatsApp {BUSINESS_INFO.whatsapp}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Schedule Your Free On-Site Pickup Window
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Reserve a 2-hour arrival window below or message us directly on WhatsApp at{' '}
                <strong className="text-slate-800 font-mono">{BUSINESS_INFO.whatsapp}</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Service
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-hidden"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="custom-quote">Custom / Mixed Property Clutter</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Estimated Truck Volume
                  </label>
                  <select
                    value={formData.loadEstimate}
                    onChange={(e) => setFormData({ ...formData, loadEstimate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-hidden"
                  >
                    {TRUCK_TIERS.map((tier) => (
                      <option key={tier.id} value={tier.id}>
                        {tier.fraction} — {tier.name} ({tier.cubicFeet} cu.ft.)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    2-Hour Arrival Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-hidden"
                  >
                    <option value="08:00 AM – 10:00 AM">08:00 AM – 10:00 AM (Early Morning)</option>
                    <option value="10:00 AM – 12:00 PM">10:00 AM – 12:00 PM (Midday)</option>
                    <option value="12:00 PM – 02:00 PM">12:00 PM – 02:00 PM (Afternoon)</option>
                    <option value="02:00 PM – 04:00 PM">02:00 PM – 04:00 PM (Late Afternoon)</option>
                    <option value="04:00 PM – 06:30 PM">04:00 PM – 06:30 PM (Evening)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Street Address / Location
                  </label>
                  <input
                    type="text"
                    placeholder="Street address, building, or villa number"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-hidden"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Area / Postal Code
                  </label>
                  <input
                    type="text"
                    placeholder="Area or ZIP"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-hidden"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-hidden"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="05XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-hidden"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Photo Upload */}
              <div className="border border-dashed border-slate-300 rounded-2xl p-4 bg-slate-50/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Attach Item Photos (Optional)</span>
                  </span>
                  <span className="text-[11px] text-slate-500">Helps assign the right truck</span>
                </div>

                <input
                  id="junk-photo-input"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label
                  htmlFor="junk-photo-input"
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-200 bg-white hover:border-emerald-400 transition-colors cursor-pointer text-center"
                >
                  <span className="text-xs font-bold text-emerald-700">
                    Click to Select Photos From Phone or Computer
                  </span>
                </label>

                {formData.photos.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {formData.photos.map((photo, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-xs text-slate-700"
                      >
                        <span className="truncate max-w-[140px] font-medium">{photo.name}</span>
                        <button
                          type="button"
                          onClick={() => handleRemovePhoto(i)}
                          className="text-slate-400 hover:text-rose-600 cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Access Notes (Floor, Elevator, Gate Code)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Ground floor garage, service elevator available"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-hidden"
                />
              </div>

              {/* Dual Submit Actions: Confirm Online OR Send via WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  id="modal-confirm-booking-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'Confirming...' : 'Confirm Pickup Slot'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl(whatsappDirectMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp ({BUSINESS_INFO.whatsapp})</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Free On-Site Inspection
                </span>
                <span>·</span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="flex items-center gap-1 font-bold text-slate-700 hover:text-emerald-700"
                >
                  <Phone className="w-3 h-3" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
