"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Shield,
  Dumbbell,
  Flame,
  Activity,
  Layers,
  Award,
} from "lucide-react";

interface FacilitiesShowcaseProps {
  onOpenDayPassModal?: () => void;
}

export default function FacilitiesShowcase({ onOpenDayPassModal }: FacilitiesShowcaseProps) {
  const bentoFacilities = [
    {
      id: "heavy-iron",
      title: "The Heavy Iron Floor",
      subtitle: "Kai Greene Certified Biomechanical Arsenal",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470",
      tag: "FLAGSHIP ARSENAL",
      colSpan: "md:col-span-8",
      aspect: "min-h-[380px] sm:min-h-[440px]",
      specs: [
        "Plate-Loaded Leverages & Iso-Lateral Presses",
        "11-Gauge Heavy Structural Steel",
        "Zero-Momentum Cam Angles for Pure Tension",
      ],
      telemetry: { val: "450 KG+", label: "Max Load Rating" },
      desc: "Engineered specifically for peak motor unit recruitment and hypertrophic tension. Hand-selected leverage machines personally approved by IFBB Pro Legend Kai Greene.",
      icon: Award,
    },
    {
      id: "dumbbell-arsenal",
      title: "Precision Dumbbell Rack",
      subtitle: "Up to 70KG Competition Weight Pairs",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470",
      tag: "FREE WEIGHT ZONE",
      colSpan: "md:col-span-4",
      aspect: "min-h-[340px] sm:min-h-[440px]",
      specs: [
        "Heavy Pairs Extending to 70 KG",
        "Solid Urethane Non-Slip Knurling",
        "Dual Heavy-Duty Saddle Racks",
      ],
      telemetry: { val: "70 KG", label: "Max Dumbbell Pair" },
      desc: "Unforgiving free-weight arena with tournament-grade urethane dumbbells. Zero waiting for pairs.",
      icon: Dumbbell,
    },
    {
      id: "cardio-deck",
      title: "High-Octane Cardio Deck",
      subtitle: "Metabolic Endurance & Telemetry Suite",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1470",
      tag: "VO2 & FAT BURN",
      colSpan: "md:col-span-4",
      aspect: "min-h-[340px] sm:min-h-[400px]",
      specs: [
        "Curved Manual Self-Powered Treadmills",
        "Commercial Stair Climbers & Stepmills",
        "Real-Time Calorie & Heart Rate HUD",
      ],
      telemetry: { val: "2.4x", label: "Fat Burn Factor" },
      desc: "Calibrated to incinerate body fat while preserving hard-earned muscle mass.",
      icon: Activity,
    },
    {
      id: "sauna-recovery",
      title: "Thermal Sauna & Recovery",
      subtitle: "Scandinavian 85°C Heat Shock Therapy",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1470",
      tag: "EXECUTIVE RECOVERY",
      colSpan: "md:col-span-4",
      aspect: "min-h-[340px] sm:min-h-[400px]",
      specs: [
        "Scandinavian Natural Cedar Paneling",
        "85°C Dry Heat Muscular Regeneration",
        "Post-Workout Contrast Hydrotherapy",
      ],
      telemetry: { val: "85°C", label: "Dry Heat Session" },
      desc: "Induce heat shock proteins, flush lactic acid, and accelerate cellular recovery after grueling sessions.",
      icon: Flame,
    },
    {
      id: "power-cages",
      title: "Olympic Power Platforms",
      subtitle: "Deadlift Drop Core & Heavy Cages",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470",
      tag: "POWERLIFTING CORE",
      colSpan: "md:col-span-4",
      aspect: "min-h-[340px] sm:min-h-[400px]",
      specs: [
        "High-Density Rubber Impact Decks",
        "Commercial Power Cages with Band Pegs",
        "Tournament Steel Olympic Barbells",
      ],
      telemetry: { val: "1000 KG", label: "Platform Rating" },
      desc: "Impact-absorbing competition lifting zones engineered for heavy squats, bench presses, and pulls.",
      icon: Layers,
    },
  ];

  return (
    <section
      id="facilities-showcase"
      className="relative w-full bg-[#121214] py-16 sm:py-28 px-5 sm:px-8 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#c5a059]/5 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#e8c881]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-slate-300 text-xs font-tech font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              LUXURY SANCTUARY ARCHITECTURE
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
              WORLD-CLASS{" "}
              <span className="bg-gradient-to-b from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent drop-shadow-sm">
                FACILITY ZONES
              </span>
            </h2>
            <p className="mt-3 text-slate-400 text-xs sm:text-base max-w-2xl font-body leading-relaxed">
              Every zone is populated with luxury tournament-tier equipment, engineered with zero-friction bearings, and optimized for maximum hypertrophic tension.
            </p>
          </div>

          <Link
            href="/facilities"
            className="inline-flex items-center gap-2 text-xs font-tech font-bold text-[#c5a059] hover:text-[#FDE08B] uppercase tracking-wider group shrink-0"
          >
            <span>Explore All Specialized Zones</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Staggered Bento Grid with Framer Motion Scale-Up (scale: 0.95 -> 1) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {bentoFacilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.95,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1], // Slow, buttery ease curve
                }}
                className={`${fac.colSpan} ${fac.aspect} group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#c5a059]/50 transition-all duration-500 flex flex-col justify-between bg-[#151518] shadow-2xl`}
              >
                {/* Auto-Sourced Luxury Image Background with Slow Scale Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={fac.image}
                    alt={fac.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.62] contrast-[1.12]"
                  />
                  {/* Subtle Gunmetal / Matte Charcoal Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/65 to-[#121214]/25" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#121214]/75 via-transparent to-[#121214]/50" />
                </div>

                {/* Top Badge HUD */}
                <div className="relative z-10 p-5 sm:p-7 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2.5 rounded-xl bg-black/60 border border-white/15 text-[#c5a059] group-hover:border-[#c5a059] group-hover:scale-110 transition-all duration-300 backdrop-blur-md">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-tech font-bold uppercase tracking-wider text-[#FDE08B] px-3 py-1 rounded-full bg-black/60 border border-[#c5a059]/40 backdrop-blur-md shadow-sm">
                      {fac.tag}
                    </span>
                  </div>

                  {/* Telemetry Indicator */}
                  <div className="px-3 py-1 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md text-right">
                    <div className="font-display font-black text-xs sm:text-sm text-white">
                      {fac.telemetry.val}
                    </div>
                    <div className="text-[9px] font-tech text-slate-400 uppercase tracking-wider">
                      {fac.telemetry.label}
                    </div>
                  </div>
                </div>

                {/* Bottom Content Narrative */}
                <div className="relative z-10 p-5 sm:p-7 space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-[#FDE08B] transition-colors leading-snug">
                      {fac.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-tech text-[#c5a059] mt-1 font-medium">
                      {fac.subtitle}
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-body line-clamp-2 sm:line-clamp-none">
                      {fac.desc}
                    </p>
                  </div>

                  {/* Bullet Specs */}
                  <div className="space-y-1.5 pt-1">
                    {fac.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs font-tech text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Bar */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                    <Link
                      href="/facilities"
                      className="text-xs font-tech text-slate-300 hover:text-white uppercase tracking-wider flex items-center gap-1 group/link"
                    >
                      <span>Inspect Gear</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>

                    <button
                      onClick={onOpenDayPassModal}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#e8c881] text-[#121214] font-tech text-xs font-bold uppercase tracking-wider transition-all sheen-effect shadow-[0_0_15px_rgba(197,160,89,0.3)] hover:shadow-[0_0_20px_rgba(197,160,89,0.6)] active:scale-95"
                    >
                      Book Pass
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
