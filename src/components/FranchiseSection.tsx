"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, ShieldCheck, ArrowRight, Building, Award } from "lucide-react";

interface FranchiseSectionProps {
  onOpenFranchiseModal: () => void;
}

export default function FranchiseSection({ onOpenFranchiseModal }: FranchiseSectionProps) {
  const pillars = [
    {
      title: "Proven Unit Economics",
      stat: "65%+",
      statLabel: "Gross Operating Margin",
      desc: "Robust recurring membership model, premium personal coaching packages, and high member lifetime value (LTV).",
      icon: TrendingUp,
    },
    {
      title: "Certified Equipment Pipeline",
      stat: "100%",
      statLabel: "Kai Greene Approved",
      desc: "Direct access to our certified biomechanical strength machinery supply chain at exclusive franchise bulk pricing.",
      icon: ShieldCheck,
    },
    {
      title: "Turnkey Brand Playbook",
      stat: "90 Days",
      statLabel: "Site-to-Launch Timeline",
      desc: "Architectural blueprints, acoustic design, trainer certification, custom CRM software, and high-impact digital marketing campaigns.",
      icon: Building,
    },
  ];

  return (
    <section id="franchise" className="relative w-full bg-[#121214] py-16 sm:py-28 px-5 sm:px-8 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c5a059]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Executive Banner Card with Metallic Gold Border */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#9ca3af] shadow-[0_0_40px_rgba(197,160,89,0.2)]">
          <div className="rounded-[22px] bg-[#151518] p-6 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none" />
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header Content */}
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-tech font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
                <Sparkles className="w-3.5 h-3.5" />
                EXECUTIVE EXPANSION &amp; PARTNERSHIP
              </div>

              <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight">
                SCALE THE{" "}
                <span className="bg-gradient-to-b from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent drop-shadow-sm">
                  IRON LEGACY
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-lg text-slate-300 font-normal leading-relaxed font-body">
                Partner with Harsh Jain and Jabalpur&apos;s most prestigious fitness brand. Tap into high-ROI
                gym infrastructure, proprietary Kai Greene certified machinery, and battle-tested operational
                playbooks.
              </p>
            </div>

            {/* Value Pillars Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 my-10 pt-4">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#c5a059]/40 transition-all duration-300 group"
                  >
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 w-fit text-[#c5a059] mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="font-display font-bold text-2xl text-white">
                      {p.stat}
                    </div>
                    <div className="text-[10px] font-tech text-[#c5a059] uppercase font-bold tracking-wider mt-0.5">
                      {p.statLabel}
                    </div>
                    <div className="font-tech font-bold text-slate-200 text-sm uppercase mt-3">
                      {p.title}
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed font-body">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Call to Action Strip */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#c5a059] shrink-0" />
                <span className="text-xs sm:text-sm font-tech text-slate-300">
                  Target Locations: Tier-1 &amp; Tier-2 hubs across Madhya Pradesh &amp; Central India.
                </span>
              </div>

              <button
                onClick={onOpenFranchiseModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold font-tech tracking-wider uppercase text-[#121214] bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#c5a059] shadow-[0_0_25px_rgba(197,160,89,0.35)] hover:shadow-[0_0_40px_rgba(197,160,89,0.6)] transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 sheen-effect"
              >
                <span>Inquire For Franchise Opportunity</span>
                <ArrowRight className="w-4 h-4 text-[#121214]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
