"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Brain,
  Activity,
  Users,
  Maximize2,
  Check,
  Shield,
  Layers,
} from "lucide-react";

interface BentoGridProps {
  onOpenDayPassModal: () => void;
}

export default function BentoGrid({ onOpenDayPassModal }: BentoGridProps) {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const zones = [
    {
      id: "heavy-iron",
      title: "Heavy Iron & Leverage Zone",
      subtitle: "Uncompromising Plate-Loaded Machinery",
      span: "lg:col-span-8",
      videoSrc: "/assets/facility-video-2.mp4",
      icon: Dumbbell,
      tag: "FLAGSHIP FLOOR",
      desc: "Massive dedicated heavy dumbbell rack extending up to competition weights, custom calibrated chest and back plate-loaded leverage machines, Olympic deadlift platforms, and power cages. Zero waiting, maximum output.",
      highlights: [
        "Heavy Dumbbells up to 70KG pairs",
        "Converging Plate-Loaded Incline & Flat Chest",
        "Independent Iso-Lateral High & Low Rows",
        "Vibration-Absorbing High-Density Flooring",
      ],
      stats: { primary: "400KG+", label: "Max Load Rating" },
    },
    {
      id: "coaching-lab",
      title: "Personalized Coaching Lab",
      subtitle: "Scientific Hypertrophy & Nutrition",
      span: "lg:col-span-4",
      icon: Brain,
      tag: "1-ON-1 MENTORSHIP",
      desc: "Customized hypertrophy periodization, body recomposition protocols, and tailored nutrition programming built around your metabolic rate. Weekly biometric tracking and biomechanics audit.",
      highlights: [
        "Metabolic & Macro Protocol Design",
        "Form Video Analysis & Biomechanics Check",
        "Competition Prep & Lifestyle Transformations",
      ],
      stats: { primary: "100%", label: "Custom Protocol" },
    },
    {
      id: "cardio-hud",
      title: "High-Intensity Cardio HUD",
      subtitle: "Endurance & Conditioning Suite",
      span: "lg:col-span-4",
      icon: Activity,
      tag: "AEROBIC & VO2",
      desc: "State-of-the-art endurance stations with real-time biometric telemetry tracking. Curved manual treadmills, commercial stairmasters, and assault bikes calibrated to incinerate body fat while preserving lean muscle mass.",
      highlights: [
        "Curved Non-Motorized Treadmills",
        "Commercial Stepmill & Stair Climbers",
        "Real-Time Heart Rate & Calorie HUD",
      ],
      stats: { primary: "2.4x", label: "Fat Burn Efficiency" },
    },
    {
      id: "community-culture",
      title: "Community & Acoustic Energy",
      subtitle: "The Iron Sanctuary Atmosphere",
      span: "lg:col-span-8",
      videoSrc: "/assets/facility-video-1.mp4",
      icon: Users,
      tag: "PRIVATE ATHLETIC CLUB",
      desc: "Step into an electrifying training atmosphere powered by a 10,000-watt acoustic sound architecture, dark luxury lighting, and a focused member community dedicated to daily physical excellence.",
      highlights: [
        "High-Energy Dark Luxury Lighting System",
        "Concert-Grade Acoustic Sound Architecture",
        "Zero-Ego, Executive Training Culture",
        "Chalk Stations & Belt / Strap Support",
      ],
      stats: { primary: "5.0 ★", label: "Culture Rating" },
    },
  ];

  return (
    <section id="zones" className="relative w-full bg-[#121214] py-16 sm:py-28 px-5 sm:px-8 border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#c5a059]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-slate-300 text-xs font-tech font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
            <Layers className="w-3.5 h-3.5 text-[#c5a059]" />
            ZONES &amp; FACILITY ARCHITECTURE
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-[0.02em] text-white leading-tight">
            ENGINEERED ZONES FOR{" "}
            <span className="bg-gradient-to-b from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent drop-shadow-sm">
              PEAK PERFORMANCE
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-xs sm:text-base font-body">
            Every square foot of Muscle Lab is purpose-built to eliminate distractions, maximize
            biomechanical efficiency, and foster unstoppable physical progress.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {zones.map((zone, idx) => {
            const Icon = zone.icon;
            return (
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`${zone.span} group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#c5a059]/40 transition-all duration-500 flex flex-col justify-between bg-[#151518]`}
              >
                {/* Background Video */}
                {zone.videoSrc && (
                  <div className="absolute inset-0 z-0 overflow-hidden opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700">
                    <video
                      src={zone.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-[#151518]/80 to-transparent" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                {/* Card Top Content */}
                <div className="relative z-10 p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2.5 rounded-xl bg-black/60 border border-white/15 text-[#c5a059] group-hover:border-[#c5a059] group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-tech tracking-widest text-[#e8c881] uppercase font-bold px-2 py-0.5 rounded bg-[#c5a059]/10 border border-[#c5a059]/20">
                        {zone.tag}
                      </span>
                    </div>

                    {zone.videoSrc && (
                      <button
                        onClick={() => setActiveVideoModal(zone.videoSrc!)}
                        className="p-2 rounded-lg bg-black/60 hover:bg-[#c5a059] text-white hover:text-[#121214] border border-white/20 transition-all"
                        title="Expand Video Feed"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-[#c5a059] transition-colors">
                    {zone.title}
                  </h3>
                  <div className="text-xs font-tech text-slate-400 mt-1">
                    {zone.subtitle}
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-body">
                    {zone.desc}
                  </p>
                </div>

                {/* Card Bottom Highlights & Stats */}
                <div className="relative z-10 p-6 sm:p-8 pt-0 border-t border-white/5 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4">
                    {zone.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-display font-bold text-2xl text-white">
                        {zone.stats.primary}
                      </div>
                      <div className="text-[10px] font-tech text-slate-400 uppercase">
                        {zone.stats.label}
                      </div>
                    </div>

                    <button
                      onClick={onOpenDayPassModal}
                      className="px-4 py-2 rounded-xl text-xs font-tech font-bold uppercase tracking-wider text-slate-200 border border-white/20 hover:border-[#c5a059] hover:bg-[#c5a059] hover:text-[#121214] transition-all duration-300 flex items-center gap-1.5"
                    >
                      <span>Claim Free Pass</span>
                      <Shield className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

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
    </section>
  );
}
