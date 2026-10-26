"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DayPassModal from "@/components/DayPassModal";
import FranchiseModal from "@/components/FranchiseModal";
import {
  CheckCircle2,
  Sparkles,
  Shield,
  Layers,
  Maximize2,
  Dumbbell,
  Flame,
  Activity,
  Award,
} from "lucide-react";

export default function FacilitiesPage() {
  const [isDayPassOpen, setIsDayPassOpen] = useState(false);
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const zones = [
    {
      id: "strength-floor",
      title: "The Heavy Iron Floor",
      subtitle: "Official Kai Greene Certified Strength Machinery",
      tag: "ZONE 01 // HEAVY RESISTANCE",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470",
      videoSrc: "/assets/facility-video-2.mp4",
      desc: "Constructed with 11-gauge industrial structural steel and zero-friction bearings, our strength floor is hand-selected to deliver relentless resistance curves through every degree of human joint motion.",
      specs: [
        "Heavy Dumbbells reaching up to 70KG pairs",
        "Iso-lateral Converging & Diverging Chest Levers",
        "Dual-Pulley Custom Cable Matrix with Micro-Weights",
        "Olympic Deadlift Platforms with Impact Absorption",
        "Biomechanically Matched Incline & Flat Pressing Benches",
      ],
      stats: [
        { label: "Max Load Capacity", val: "450 KG" },
        { label: "Tension Retention", val: "99.4%" },
        { label: "Certification", val: "Kai Greene IFBB" },
      ],
    },
    {
      id: "dumbbell-arsenal",
      title: "Precision Dumbbell Rack",
      subtitle: "Tournament-Grade Urethane Free Weight Arena",
      tag: "ZONE 02 // DUMBBELL ARSENAL",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470",
      videoSrc: "/assets/facility-video-4.mp4",
      desc: "Our free weight section features custom-forged urethane dumbbells up to 70KG pairs with knurled stainless steel handles. Dual saddle racks ensure zero wait times, even during peak training hours.",
      specs: [
        "Competition Urethane Dumbbells (2.5KG to 70KG)",
        "Zero-Rattle Heavy Saddle Locking Racks",
        "Multi-Angle Adjustable Commercial Benches",
        "Full Chalk Dispenser Support Stations",
      ],
      stats: [
        { label: "Max Pair Weight", val: "70 KG" },
        { label: "Rack Availability", val: "Instant" },
        { label: "Grip Knurling", val: "Medium Aggressive" },
      ],
    },
    {
      id: "cardio-deck",
      title: "High-Octane Cardio Deck",
      subtitle: "Metabolic Conditioning & VO2 Max Suite",
      tag: "ZONE 03 // ENDURANCE TELEMETRY",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1470",
      videoSrc: "/assets/facility-video-3.mp4",
      desc: "Designed to keep endurance athletes and lifters in optimal fat-oxidation zones without sacrificing valuable muscle mass. Acoustically isolated from the main lifting floor for distraction-free pacing.",
      specs: [
        "Curved Manual Self-Powered Treadmills",
        "Heavy-Duty Air Assault Bikes for High-Intensity Sprints",
        "Commercial Stepmill & Stair Climber Stations",
        "Real-Time Biometric Heart Rate HUD Displays",
        "Acoustic Audio Sync for High-BPM Energy",
      ],
      stats: [
        { label: "Fat Burn Factor", val: "2.4x" },
        { label: "Impact Stress", val: "Low-Joint" },
        { label: "Cardio Units", val: "Pro Grade" },
      ],
    },
    {
      id: "thermal-sauna",
      title: "Thermal Sauna & Recovery",
      subtitle: "Scandinavian Dry Heat & Muscular Regeneration",
      tag: "ZONE 04 // EXECUTIVE RECOVERY",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1470",
      videoSrc: "/assets/facility-video-1.mp4",
      desc: "Post-workout recovery is where gains are solidified. Our 85°C Scandinavian sauna increases systemic blood flow, induces heat shock proteins, flushes lactic acid, and promotes profound nervous system relaxation.",
      specs: [
        "Scandinavian Cedar Wood Paneling",
        "Volcanic Rock Stove Calibrated to 85°C (185°F)",
        "Contrast Therapy Shower Suites",
        "High-Flow Purified Hydration Stations",
        "Private Member Recovery Lounges",
      ],
      stats: [
        { label: "Operating Temp", val: "85°C" },
        { label: "Recovery Boost", val: "+38%" },
        { label: "Privacy Level", val: "VIP Exclusive" },
      ],
    },
    {
      id: "power-cages",
      title: "Olympic Power Platforms",
      subtitle: "Heavy Deadlift Drop Core & Competition Cages",
      tag: "ZONE 05 // POWERLIFTING ARENA",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470",
      videoSrc: "/assets/gym-hero.mp4",
      desc: "Constructed for lifters who prioritize heavy multi-joint compounds. 1000KG-rated power cages equipped with safety suspension straps, band pegs, and vibration-absorbing rubberized deadlift drop zones.",
      specs: [
        "1000KG Tested Structural Cages",
        "High-Impact Rubber Deadlift Platforms",
        "Calibrated Olympic Barbell Selection",
        "Competition Steel & Bumper Plate Sets",
      ],
      stats: [
        { label: "Tested Load", val: "1000 KG" },
        { label: "Barbell Caliber", val: "20 KG Olympic" },
        { label: "Vibration Dampening", val: "-92%" },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#121214] text-slate-100 selection:bg-[#c5a059] selection:text-[#121214] overflow-x-hidden">
      {/* Navigation */}
      <Navbar
        onOpenDayPassModal={() => setIsDayPassOpen(true)}
        onOpenFranchiseModal={() => setIsFranchiseOpen(true)}
      />

      {/* Page Hero Header */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-subtle opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c5a059]/10 rounded-full blur-[170px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-[#c5a059] text-xs font-tech font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(197,160,89,0.15)]">
            <Layers className="w-3.5 h-3.5" />
            1ST FLOOR JAIN HEIGHTS • WRIGHT TOWN
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white leading-tight">
            THE ARCHITECTURE OF{" "}
            <span className="bg-gradient-to-b from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent drop-shadow-sm">
              PURE PERFORMANCE
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed font-body">
            Every millimeter of Muscle Lab Fitness is calibrated for maximum biomechanical stimulus,
            zero equipment wait times, and rapid athletic regeneration.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsDayPassOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#e8c881] text-[#121214] font-tech text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(197,160,89,0.35)] active:scale-95 transition-all flex items-center gap-2 sheen-effect"
            >
              <Shield className="w-4 h-4 fill-[#121214]" />
              Claim Free VIP Day Pass
            </button>
            <a
              href="#strength-floor"
              className="px-7 py-3.5 rounded-xl glass-panel text-slate-300 hover:text-white font-tech text-xs font-bold uppercase tracking-wider border border-white/15 hover:border-[#c5a059] transition-all"
            >
              Inspect Facilities Below
            </a>
          </div>
        </div>
      </section>

      {/* Facilities Breakdown List with Pure Y-Axis Scroll Motion (No Horizontal Overflows) */}
      <section className="relative py-16 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {zones.map((zone, idx) => (
          <div
            key={zone.id}
            id={zone.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:col-span-6 relative rounded-3xl overflow-hidden glass-panel border border-white/10 group bg-[#151518] shadow-2xl ${
                idx % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] bg-black/60 overflow-hidden">
                <Image
                  src={zone.image}
                  alt={zone.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.72] contrast-[1.1]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-transparent to-transparent opacity-85" />

                <button
                  onClick={() => setActiveVideoModal(zone.videoSrc)}
                  className="absolute bottom-5 right-5 p-3 rounded-2xl glass-panel border border-white/20 hover:border-[#c5a059] hover:bg-[#c5a059] hover:text-[#121214] text-white transition-all shadow-xl flex items-center gap-2 group/btn"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span className="text-[10px] font-tech uppercase font-bold pr-1">
                    Play Live Stream
                  </span>
                </button>

                <div className="absolute top-4 left-4 px-3 py-1 rounded-xl glass-panel border border-white/20 text-[10px] font-tech font-bold uppercase text-[#FDE08B] backdrop-blur-md">
                  {zone.tag}
                </div>
              </div>
            </motion.div>

            {/* Narrative Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}
            >
              <div>
                <span className="text-xs font-tech text-[#c5a059] uppercase tracking-widest font-bold">
                  PRECISION FACILITY
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase mt-1 leading-tight">
                  {zone.title}
                </h2>
                <div className="text-xs sm:text-sm font-tech text-slate-400 mt-1">
                  {zone.subtitle}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                {zone.desc}
              </p>

              <div className="space-y-2.5 pt-2">
                {zone.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-tech">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                {zone.stats.map((st, stIdx) => (
                  <div key={stIdx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="font-display font-bold text-base text-white">
                      {st.val}
                    </div>
                    <div className="text-[10px] font-tech text-slate-400 uppercase mt-0.5">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* Video Modal Preview */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-[#c5a059]/40 shadow-2xl bg-black">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-black/70 text-white border border-white/20 text-xs font-tech hover:bg-[#c5a059] hover:text-[#121214]"
            >
              CLOSE [ESC]
            </button>
            <video
              src={activeVideoModal}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Modals */}
      <DayPassModal isOpen={isDayPassOpen} onClose={() => setIsDayPassOpen(false)} />
      <FranchiseModal isOpen={isFranchiseOpen} onClose={() => setIsFranchiseOpen(false)} />

      {/* Footer */}
      <Footer
        onOpenFranchiseModal={() => setIsFranchiseOpen(true)}
        onOpenDayPassModal={() => setIsDayPassOpen(true)}
      />
    </main>
  );
}
