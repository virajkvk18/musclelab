"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import KaiGreeneSection from "@/components/KaiGreeneSection";
import InstagramVideoGrid from "@/components/InstagramVideoGrid";
import FacilitiesShowcase from "@/components/FacilitiesShowcase";
import BentoGrid from "@/components/BentoGrid";
import FounderSection from "@/components/FounderSection";
import ReviewsSection from "@/components/ReviewsSection";
import FranchiseSection from "@/components/FranchiseSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FranchiseModal from "@/components/FranchiseModal";
import DayPassModal from "@/components/DayPassModal";
import { ShieldCheck, Award, Sparkles, Scale, Shield } from "lucide-react";

export default function Home() {
  const [isFranchiseModalOpen, setIsFranchiseModalOpen] = useState(false);
  const [isDayPassModalOpen, setIsDayPassModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#121214] text-slate-100 selection:bg-[#c5a059] selection:text-[#121214]">
      {/* Floating Glassmorphism Navigation Bar */}
      <Navbar
        onOpenFranchiseModal={() => setIsFranchiseModalOpen(true)}
        onOpenDayPassModal={() => setIsDayPassModalOpen(true)}
      />

      {/* Fullscreen Cinematic Hero Section with Multi-Angle Video & Watermark */}
      <Hero
        onOpenDayPassModal={() => setIsDayPassModalOpen(true)}
        onOpenFranchiseModal={() => setIsFranchiseModalOpen(true)}
      />

      {/* The Experience Manifest Strip */}
      <section id="experience" className="relative py-14 sm:py-20 bg-[#151518] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl glass-panel border border-white/5 bg-[#18181c]/60">
              <div className="p-3.5 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] shrink-0">
                <Shield className="w-6 h-6 fill-[#c5a059]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-normal">
                  Architectural Luxury
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed font-body">
                  Matte charcoal surfaces, warm metallic gold accents, calibrated acoustic design, and climate-controlled floors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl glass-panel border border-white/5 bg-[#18181c]/60">
              <div className="p-3.5 rounded-2xl bg-[#e8c881]/10 border border-[#e8c881]/30 text-[#e8c881] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-normal">
                  Certified Biomechanics
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed font-body">
                  Endorsed by IFBB Legend Kai Greene for continuous torque resistance curves, protecting joint health while maximizing load.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl glass-panel border border-white/5 bg-[#18181c]/60">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white shrink-0">
                <Scale className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-normal">
                  Advocate-Led Integrity
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed font-body">
                  Founded by Advocate Harsh Jain. A private iron sanctuary governed by executive discipline, safety, and elite standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Performance Metrics Counter */}
      <MetricsBar />

      {/* The Kai Greene Endorsement Showcase (Parallax Sticky Feature) */}
      <KaiGreeneSection onOpenDayPassModal={() => setIsDayPassModalOpen(true)} />

      {/* NEW: Live from the Sanctuary Instagram Video Grid */}
      <InstagramVideoGrid />

      {/* Ultra-Premium Facilities Showcase */}
      <FacilitiesShowcase onOpenDayPassModal={() => setIsDayPassModalOpen(true)} />

      {/* Gym Experience & Zones Bento Grid */}
      <BentoGrid onOpenDayPassModal={() => setIsDayPassModalOpen(true)} />

      {/* The Founder Profile (Harsh Jain | Advocate & Founder) */}
      <FounderSection onOpenDayPassModal={() => setIsDayPassModalOpen(true)} />

      {/* Verified Client Reviews & Testimonials Marquee */}
      <ReviewsSection />

      {/* Executive Franchise & Expansion Section */}
      <FranchiseSection onOpenFranchiseModal={() => setIsFranchiseModalOpen(true)} />

      {/* Location & Facility Details HUD */}
      <LocationSection />

      {/* Interactive FAQ Accordion */}
      <FaqSection />

      {/* Footer */}
      <Footer
        onOpenFranchiseModal={() => setIsFranchiseModalOpen(true)}
        onOpenDayPassModal={() => setIsDayPassModalOpen(true)}
      />

      {/* Dynamic Popups / Modals */}
      <FranchiseModal
        isOpen={isFranchiseModalOpen}
        onClose={() => setIsFranchiseModalOpen(false)}
      />

      <DayPassModal
        isOpen={isDayPassModalOpen}
        onClose={() => setIsDayPassModalOpen(false)}
      />
    </main>
  );
}
