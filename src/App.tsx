import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesAutoSlider } from './features/FeaturesAutoSlider';
import { Interactive3DTruck } from './features/Interactive3DTruck';
import { ServicesGrid } from './components/ServicesGrid';
import { HowItWorks } from './components/HowItWorks';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { EcoFriendlyPromise } from './components/EcoFriendlyPromise';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreaChecker } from './components/ServiceAreaChecker';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    service?: string;
    load?: string;
    zip?: string;
  }>({});

  const handleOpenBooking = (prefill?: {
    service?: string;
    load?: string;
    zip?: string;
  }) => {
    if (prefill) {
      setBookingPrefill(prefill);
    } else {
      setBookingPrefill({});
    }
    setBookingModalOpen(true);
  };

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white pb-14 sm:pb-0">
      {/* Top 3-Zone Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onScrollTo={handleScrollTo}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Hero Section with 3D Showcase & Instant WhatsApp Dispatch */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onScrollTo={handleScrollTo}
        />

        {/* Auto-Sliding 3D Features Showcase (from /src/features/) */}
        <FeaturesAutoSlider
          onOpenBooking={handleOpenBooking}
        />

        {/* Interactive 360° 3D Truck Load Simulator (Zero Pricing) */}
        <Interactive3DTruck
          onBookWithLoad={({ load, itemsSummary }) =>
            handleOpenBooking({
              load,
              service: itemsSummary || 'furniture-removal',
            })
          }
        />

        {/* Full-Service Hauling Capabilities with Images & 3D Tilt Cards */}
        <ServicesGrid
          onSelectServiceForBooking={(serviceId) =>
            handleOpenBooking({ service: serviceId })
          }
        />

        {/* 4-Step How It Works */}
        <HowItWorks
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Before & After Case Studies */}
        <BeforeAfterGallery
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Eco-Friendly / Donation First Transfer Center */}
        <EcoFriendlyPromise />

        {/* Verified Client Reviews */}
        <ReviewsSection />

        {/* Live Dispatch Area Checker */}
        <ServiceAreaChecker
          onBookInZip={(zip) => handleOpenBooking({ zip })}
        />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollTo={handleScrollTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating WhatsApp & Mobile Quick Bar */}
      <FloatingMobileBar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Free On-Site Pickup & WhatsApp Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={bookingPrefill.service}
        initialLoad={bookingPrefill.load}
        initialZip={bookingPrefill.zip}
      />
    </div>
  );
}
