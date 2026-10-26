"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Zap,
  Gauge,
  CheckCircle2,
  Crosshair,
  Sparkles,
} from "lucide-react";

interface KaiGreeneSectionProps {
  onOpenDayPassModal: () => void;
}

export default function KaiGreeneSection({ onOpenDayPassModal }: KaiGreeneSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"tension" | "load" | "isolation">("tension");
  const [activeBadge, setActiveBadge] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transformations for Kai Greene figure and background mesh
  const kaiY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const kaiScale = useTransform(scrollYProgress, [0.2, 0.6], [0.98, 1.04]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.2, 0.5, 0.2]);

  const specs = {
    tension: {
      title: "Biomechanical Muscle Tension",
      value: "99.4% Peak Torque Retention",
      desc: "Unlike standard commercial gym machines that drop tension at peak contraction, Muscle Lab's Kai Greene certified gear maintains a continuous, ascending torque curve. Every repetition recruits maximum motor units without joint impingement.",
      metrics: [
        { label: "Tension Retention", val: "99.4%" },
        { label: "Joint Compression", val: "-42%" },
        { label: "Motor Unit Recruitment", val: "Maximum" },
      ],
    },
    load: {
      title: "Heavy-Duty Pro Calibration",
      value: "450KG+ Machine Capacity",
      desc: "Engineered with 11-gauge structural steel, industrial self-aligning pillow block bearings, and custom dual-axis pivot points. Built specifically for elite athletes, national competitors, and heavy lifters who demand unbreakable durability.",
      metrics: [
        { label: "Steel Specification", val: "11-Gauge" },
        { label: "Max Plate Load", val: "450 KG" },
        { label: "Tolerance Error", val: "<0.02 mm" },
      ],
    },
    isolation: {
      title: "Hypertrophy Precision Isolation",
      value: "Zero Momentum Cam Angles",
      desc: "Every convergent and divergent machine path is biomechanically aligned to match natural human muscle fiber direction. No momentum cheating, no secondary muscle takeover—pure concentrated hypertrophy on chest, back, and leg days.",
      metrics: [
        { label: "Isolation Factor", val: "10x Superior" },
        { label: "Muscle Activation", val: "Direct Vector" },
        { label: "Mind-Muscle Index", val: "Peak 100%" },
      ],
    },
  };

  const badges = [
    {
      id: 1,
      title: "100% Bio-Mechanically Approved",
      subtitle: "Calibrated to natural human joint mechanics",
      icon: ShieldCheck,
      pos: "top-4 right-1 sm:top-10 sm:right-6 md:right-8",
      color: "border-[#c5a059] text-[#c5a059]",
    },
    {
      id: 2,
      title: "Heavy Duty Pro Equipment",
      subtitle: "Heavy steel plates & unbreakable bearings",
      icon: Gauge,
      pos: "top-1/3 left-1 sm:left-4 md:-left-4",
      color: "border-[#e8c881] text-[#e8c881]",
    },
    {
      id: 3,
      title: "Hypertrophy Engineered",
      subtitle: "Peak mechanical tension at full contraction",
      icon: Sparkles,
      pos: "bottom-16 right-1 sm:bottom-24 sm:right-4 md:right-6",
      color: "border-[#d1d5db] text-[#d1d5db]",
    },
  ];

  return (
    <section
      id="kai-greene"
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#121214] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5"
    >
      {/* Background Lighting and Atmospheric Mesh */}
      <div className="absolute inset-0 bg-grid-subtle opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-[#c5a059]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-[#e8c881]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-[#c5a059] text-xs font-tech font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(197,160,89,0.15)]">
              <Award className="w-4 h-4 text-[#c5a059]" />
              Official IFBB Legend Certification
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-[0.02em] text-white leading-tight">
              CERTIFIED &amp; ENDORSED BY{" "}
              <span className="bg-gradient-to-b from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent drop-shadow-sm">
                KAI GREENE
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 font-tech text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
            <span>GLOBAL STANDARDS IN JABALPUR</span>
          </div>
        </div>

        {/* 2-Column Sticky Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Pinned Narrative & Biomechanical Spec Switcher */}
          <div className="lg:col-span-6 flex flex-col gap-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed font-body">
                Hand-selected, custom-calibrated strength machinery certified by IFBB Pro Legend{" "}
                <span className="text-white font-medium underline decoration-[#c5a059] decoration-2">
                  Kai Greene (@kaigreene)
                </span>
                . Engineered for continuous mechanical tension, anatomical motor recruitment, and elite physique development.
              </p>
            </div>

            {/* Kai Greene Direct Quote Card */}
            <div className="relative glass-panel-gold p-6 sm:p-7 rounded-2xl border border-[#c5a059]/30 bg-gradient-to-br from-[#18181c] to-[#121214] shadow-2xl">
              <div className="absolute -top-3.5 left-6 px-3 py-0.5 rounded-md bg-gradient-to-r from-[#c5a059] to-[#e8c881] text-[#121214] text-[10px] font-tech font-bold uppercase tracking-wider shadow-[0_0_12px_rgba(197,160,89,0.4)]">
                The Champion&apos;s Standard
              </div>

              <blockquote className="italic text-slate-200 text-sm sm:text-base leading-relaxed mt-1 font-body">
                &ldquo;Excellence is never an accident. When you step into Muscle Lab, you enter a sanctuary calibrated
                for champions. The tension curves, the structural steel, the biomechanical precision—this is where world-class
                physiques are forged.&rdquo;
              </blockquote>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-white text-sm uppercase tracking-wider">
                    Kai Greene
                  </div>
                  <div className="text-xs font-tech text-[#c5a059]">
                    Arnold Classic Champion • 3x Mr. Olympia Runner-Up
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#c5a059]/40 overflow-hidden relative">
                  <Image
                    src="/assets/kai-greene-cutout.png"
                    alt="Kai Greene Icon"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Interactive Biomechanics Switcher Tabs */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-tech text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Crosshair className="w-3.5 h-3.5 text-[#c5a059]" />
                  Telemetry Inspector
                </span>
                <span className="text-[10px] font-tech text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20 font-semibold">
                  CERTIFIED GEAR DATA
                </span>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-black/40 rounded-xl border border-white/5">
                {(["tension", "load", "isolation"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-3 text-xs font-tech font-bold uppercase tracking-wider rounded-lg transition-all ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-[#c5a059] to-[#e8c881] text-[#121214] shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab === "tension" ? "Tension" : tab === "load" ? "Load Spec" : "Hypertrophy"}
                  </button>
                ))}
              </div>

              {/* Active Spec Card */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-white text-sm uppercase">
                    {specs[activeTab].title}
                  </h4>
                  <span className="text-xs font-tech text-[#c5a059] font-bold">
                    {specs[activeTab].value}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                  {specs[activeTab].desc}
                </p>

                {/* Micro Metric Pills */}
                <div className="grid grid-cols-3 gap-2.5 pt-3">
                  {specs[activeTab].metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center"
                    >
                      <span className="text-[10px] font-tech text-slate-400 uppercase">
                        {m.label}
                      </span>
                      <span className="text-xs font-tech font-bold text-white mt-1">
                        {m.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Test Equipment CTA */}
            <div>
              <button
                onClick={onOpenDayPassModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold font-tech tracking-wider uppercase text-[#121214] bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#c5a059] shadow-[0_0_25px_rgba(197,160,89,0.35)] hover:shadow-[0_0_35px_rgba(197,160,89,0.6)] transition-all flex items-center justify-center gap-2 sheen-effect"
              >
                <Zap className="w-4 h-4 fill-[#121214]" />
                Test The Gear — Free 1-Day Pass
              </button>
            </div>
          </div>

          {/* Right Column: Kai Greene Parallax Stage with Floating Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[550px] sm:min-h-[700px] lg:min-h-[780px]">
            {/* Glowing Backstage Radial Backdrop */}
            <motion.div
              style={{ opacity: glowOpacity }}
              className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#c5a059]/25 via-[#e8c881]/15 to-transparent blur-[120px] pointer-events-none"
            />

            {/* Concentric Calibration Target Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full border border-dashed border-white/10 animate-spin [animation-duration:90s]" />
              <div className="w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full border border-white/5" />
            </div>

            {/* Floating Kai Greene Cutout with Scroll Parallax */}
            <motion.div
              style={{ y: kaiY, scale: kaiScale }}
              className="relative z-10 w-full max-w-[420px] sm:max-w-[480px] h-[520px] sm:h-[680px] lg:h-[740px] flex items-center justify-center"
            >
              <Image
                src="/assets/kai-greene-cutout.png"
                alt="Kai Greene flexing - Muscle Lab Endorsement"
                fill
                priority
                sizes="(max-width: 640px) 420px, 480px"
                className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] filter contrast-[1.06] saturate-[1.02]"
              />

              {/* Interactive Floating HUD Badges around Kai Greene (Desktop & Tablet) */}
              {badges.map((b) => {
                const IconComponent = b.icon;
                const isHovered = activeBadge === b.id;

                return (
                  <motion.div
                    key={b.id}
                    onHoverStart={() => setActiveBadge(b.id)}
                    onHoverEnd={() => setActiveBadge(null)}
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: b.id * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={`hidden sm:block absolute z-20 ${b.pos} max-w-[220px] md:max-w-[260px] cursor-pointer group`}
                  >
                    <div
                      className={`glass-panel p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 backdrop-blur-2xl ${
                        isHovered
                          ? "border-[#c5a059] bg-[#18181b]/95 shadow-[0_0_25px_rgba(197,160,89,0.3)] scale-105"
                          : "border-white/15 bg-[#121214]/80 hover:border-white/35"
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div
                          className={`p-2 rounded-xl bg-white/5 border ${b.color} group-hover:scale-110 transition-transform`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-display font-bold text-white tracking-wide leading-tight group-hover:text-[#c5a059] transition-colors">
                            {b.title}
                          </div>
                          <div className="text-[10px] font-tech text-slate-400 mt-1 leading-snug">
                            {b.subtitle}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Bottom Holographic Stage Pedestal */}
              <div className="absolute -bottom-4 w-4/5 h-8 bg-gradient-to-t from-[#c5a059]/20 to-transparent rounded-full blur-md" />
            </motion.div>

            {/* Mobile Badges Horizontal Snap Flow (<sm) */}
            <div className="sm:hidden w-full mt-6 z-20">
              <div className="text-[10px] font-tech text-slate-400 uppercase tracking-widest mb-2 flex items-center justify-between px-1">
                <span>IFBB Pro Engineering Standards</span>
                <span className="text-[#c5a059]">Swipe &rarr;</span>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory no-scrollbar -mx-4 px-4">
                {badges.map((b) => {
                  const IconComponent = b.icon;
                  return (
                    <div
                      key={b.id}
                      className="snap-center shrink-0 w-[240px] glass-panel p-3.5 rounded-2xl border border-[#c5a059]/30 bg-[#18181b]/95 shadow-lg"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-xl bg-white/5 border ${b.color} shrink-0`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-display font-bold text-white tracking-wide leading-tight">
                            {b.title}
                          </div>
                          <div className="text-[10px] font-tech text-slate-400 mt-1 leading-snug">
                            {b.subtitle}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
