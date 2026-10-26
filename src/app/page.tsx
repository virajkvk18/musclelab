"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
import { ShieldCheck, Award, Sparkles, Scale, Shield, CheckCircle } from "lucide-react";

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
      <section id="experience" className="relative py-16 sm:py-24 bg-[#151518] border-y border-white/5 overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e8c881]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-[#c5a059] text-[11px] font-tech font-bold uppercase tracking-[0.16em] mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              THE MUSCLE LAB STANDARD
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold uppercase text-white tracking-tight"
            >
              ENGINEERED BEYOND{" "}
              <span className="bg-gradient-to-r from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent">
                CONVENTIONAL FITNESS
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3 text-xs sm:text-sm md:text-base text-slate-400 font-body leading-relaxed max-w-2xl mx-auto"
            >
              Every square meter is calibrated for elite discipline, athletic privacy, and uncompromising execution.
            </motion.p>
          </div>

          {/* 3 Structured Manifest Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel border border-white/5 bg-[#18181c]/70 hover:border-[#c5a059]/40 transition-colors duration-300 shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] flex items-center justify-center mb-5">
                  <Shield className="w-6 h-6 fill-[#c5a059]/20 text-[#c5a059]" />
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-tight">
                  Architectural Luxury
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed font-body">
                  Matte charcoal surfaces, warm metallic gold accents, calibrated acoustic design, and climate-controlled floors.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-tech tracking-wider text-[#c5a059] uppercase">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Acoustic & Climate Isolated</span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel border border-white/5 bg-[#18181c]/70 hover:border-[#c5a059]/40 transition-colors duration-300 shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#e8c881]/10 border border-[#e8c881]/30 text-[#e8c881] flex items-center justify-center mb-5">
                  <Award className="w-6 h-6 text-[#e8c881]" />
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-tight">
                  Certified Biomechanics
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed font-body">
                  Endorsed by IFBB Legend Kai Greene for continuous torque resistance curves, protecting joint health while maximizing load.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-tech tracking-wider text-[#e8c881] uppercase">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>IFBB Legend Kai Greene Verified</span>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel border border-white/5 bg-[#18181c]/70 hover:border-[#c5a059]/40 transition-colors duration-300 shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-5">
                  <Scale className="w-6 h-6 text-slate-300" />
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-tight">
                  Advocate-Led Integrity
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed font-body">
                  Founded by Advocate Harsh Jain. A private iron sanctuary governed by executive discipline, safety, and elite standards.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-tech tracking-wider text-slate-300 uppercase">
                <CheckCircle className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Executive Safety Protocols</span>
              </div>
            </motion.div>
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
