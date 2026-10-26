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
import {
  ShieldCheck,
  Award,
  Sparkles,
  Scale,
  Shield,
  CheckCircle,
  Activity,
  MapPin,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

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

      {/* On-Scroll Sanctuary Specifications & Live Telemetry Section */}
      <section id="sanctuary-details" className="relative py-12 sm:py-16 bg-[#141417] border-y border-white/5 overflow-hidden">
        {/* Ambient Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c5a059]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          {/* Live Telemetry Capsule Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 sm:mb-14 p-3.5 sm:p-4 rounded-2xl glass-panel border border-white/10 bg-[#18181c]/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-6 text-xs font-tech text-slate-300 px-2 sm:px-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-400 uppercase tracking-wider text-[11px]">STATUS:</span>
                <span className="text-white font-bold tracking-wide">OPERATIONAL TODAY</span>
              </div>

              <div className="hidden md:block text-slate-600">|</div>

              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#c5a059]" />
                <span className="text-slate-400 uppercase tracking-wider text-[11px]">FLOOR:</span>
                <span className="text-[#e8c881] font-bold tracking-wide">OPTIMAL TRAINING FLOW</span>
              </div>

              <div className="hidden md:block text-slate-600">|</div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400 uppercase tracking-wider text-[11px]">LOCATION:</span>
                <span className="text-white tracking-wide">WRIGHT TOWN, JABALPUR</span>
              </div>

              <div className="hidden lg:block text-slate-600">|</div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold tracking-wide text-[11px] uppercase">
                  FREE 1-DAY PASS READY
                </span>
              </div>
            </div>
          </motion.div>

          {/* Section Eyebrow & Title */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/40 text-[#c5a059] text-[10px] sm:text-xs font-tech font-bold uppercase tracking-[0.16em] mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              THE THREE CORE PILLARS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold uppercase text-white tracking-tight"
            >
              ENGINEERED FOR{" "}
              <span className="bg-gradient-to-r from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent">
                UNCOMPROMISED ATHLETES
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-xs sm:text-sm md:text-base text-slate-400 font-body leading-relaxed max-w-xl mx-auto"
            >
              Central India&apos;s foremost private training sanctuary — equipped with certified machinery and tournament-grade iron.
            </motion.p>
          </div>

          {/* 3 Interactive Specification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7 items-stretch">
            {/* Pillar 1 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -7, scale: 1.015 }}
              className="card-specular-highlight gold-glow-hover flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 bg-[#18181c]/70 hover:border-[#c5a059]/60 transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-tech text-[#c5a059] uppercase tracking-wider font-bold mb-1">
                  IFBB LEGEND CERTIFIED
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-tight">
                  Kai Greene Machinery
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed font-body">
                  Endorsed by Kai Greene to guarantee zero joint strain while applying maximum mechanical tension to the target muscle fibers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-tech tracking-wider text-[#c5a059] uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Joint-Strain Curves</span>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -7, scale: 1.015 }}
              className="card-specular-highlight gold-glow-hover flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 bg-[#18181c]/70 hover:border-[#c5a059]/60 transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#e8c881]/10 border border-[#e8c881]/30 text-[#e8c881] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-[#e8c881]" />
                </div>
                <div className="text-[10px] font-tech text-[#e8c881] uppercase tracking-wider font-bold mb-1">
                  CALIBRATED ATMOSPHERE
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-tight">
                  10,000W Acoustic Energy
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed font-body">
                  Engineered acoustic dispersion and calibrated tempo lighting designed to trigger instantaneous athletic focus and rhythm.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-tech tracking-wider text-[#e8c881] uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Isolated Acoustic Architecture</span>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -7, scale: 1.015 }}
              className="card-specular-highlight gold-glow-hover flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 bg-[#18181c]/70 hover:border-[#c5a059]/60 transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Shield className="w-6 h-6 fill-[#c5a059]/20 text-[#c5a059]" />
                </div>
                <div className="text-[10px] font-tech text-[#c5a059] uppercase tracking-wider font-bold mb-1">
                  ADVANCED REJUVENATION
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-tight">
                  Nordic Contrast Suite
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed font-body">
                  Scandinavian infrared dry sauna and cold contrast therapy designed for rapid systemic muscle recovery and cellular repair.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-tech tracking-wider text-[#c5a059] uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Infrared & Cold Contrast</span>
              </div>
            </motion.div>
          </div>

          {/* Reassurance Callout Strip with Modal Trigger */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="card-specular-highlight mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 bg-[#18181c]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-tech font-bold text-white uppercase tracking-wide">
                  Experience The Sanctuary Risk-Free
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-body">
                  Complimentary 1-Day VIP Pass • Zero Commitment • Direct WhatsApp Confirmation
                </div>
              </div>
            </div>

            <motion.button
              onClick={() => setIsDayPassModalOpen(true)}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold font-tech uppercase text-[#121214] bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#c5a059] shadow-[0_0_25px_rgba(197,160,89,0.4)] hover:shadow-[0_0_35px_rgba(197,160,89,0.7)] transition-shadow duration-300 flex items-center gap-2 shrink-0 sheen-effect"
            >
              <span>Claim Free Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

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
              whileHover={{ y: -6, scale: 1.01 }}
              className="card-specular-highlight gold-glow-hover flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel border border-white/5 bg-[#18181c]/70 hover:border-[#c5a059]/50 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
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
              whileHover={{ y: -6, scale: 1.01 }}
              className="card-specular-highlight gold-glow-hover flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel border border-white/5 bg-[#18181c]/70 hover:border-[#c5a059]/50 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#e8c881]/10 border border-[#e8c881]/30 text-[#e8c881] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
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
              whileHover={{ y: -6, scale: 1.01 }}
              className="card-specular-highlight gold-glow-hover flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel border border-white/5 bg-[#18181c]/70 hover:border-[#c5a059]/50 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
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
