"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, ShieldCheck, Star, Building2, Radio } from "lucide-react";

export default function MetricsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [membersCount, setMembersCount] = useState(0);
  const [gearCount, setGearCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const steps = 60;
    const memberTarget = 297;
    const gearTarget = 100;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const ease = 1 - Math.pow(1 - progress, 3);

      setMembersCount(Math.round(ease * memberTarget));
      setGearCount(Math.round(ease * gearTarget));

      if (currentStep >= steps) {
        setMembersCount(memberTarget);
        setGearCount(gearTarget);
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isInView]);

  const metrics = [
    {
      id: "members",
      number: `${membersCount}+`,
      title: "Dedicated Members",
      subtitle: "Active lifters forging greatness daily",
      icon: Users,
      badge: "VERIFIED ACTIVE",
      color: "text-white",
    },
    {
      id: "certified",
      number: `${gearCount}%`,
      title: "Kai Greene Certified",
      subtitle: "Official biomechanically approved machinery",
      icon: ShieldCheck,
      badge: "IFBB ENDORSED",
      color: "gold-gradient-text",
    },
    {
      id: "rating",
      number: "5.0 ★",
      title: "Atmosphere Rating",
      subtitle: "Unmatched brotherhood & sound energy",
      icon: Star,
      badge: "GOOGLE VERIFIED",
      color: "text-[#e8c881]",
    },
    {
      id: "facility",
      number: "1ST FLOOR",
      title: "Wright Town Sanctuary",
      subtitle: "Jain Heights, in front of Saptrishi Hospital",
      icon: Building2,
      badge: "PRIME LOCATION",
      color: "silver-gradient-text",
    },
  ];

  return (
    <section ref={ref} className="relative w-full bg-[#121214] py-14 sm:py-20 border-y border-white/5 overflow-hidden">
      {/* Background scanline & telemetry texture */}
      <div className="absolute inset-0 bg-grid-subtle opacity-15 pointer-events-none" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#c5a059]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#e8c881]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header HUD Status Pill */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/5">
          <div className="flex items-center gap-2 text-xs font-tech text-slate-400">
            <Radio className="w-3.5 h-3.5 text-[#c5a059] animate-pulse" />
            <span className="uppercase tracking-wider">PERFORMANCE TELEMETRY</span>
          </div>
          <div className="text-[11px] font-tech text-[#c5a059] uppercase tracking-wider font-semibold">
            FACILITY ID: ML-JBP-01
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#c5a059]/40 transition-all duration-500 group hover:-translate-y-1 bg-[#18181b]/50"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:text-[#c5a059] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-tech font-semibold tracking-wider text-slate-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/10">
                    {m.badge}
                  </span>
                </div>

                <div className={`font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase ${m.color}`}>
                  {m.number}
                </div>

                <div className="text-sm font-tech font-bold text-slate-200 mt-2 uppercase tracking-normal">
                  {m.title}
                </div>

                <div className="text-xs font-body text-slate-400 mt-1 leading-snug">
                  {m.subtitle}
                </div>

                <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-white/20 group-hover:border-[#c5a059] transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
