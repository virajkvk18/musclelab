"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, ShieldCheck, Award, ArrowUpRight, Sparkles, Shield } from "lucide-react";

interface FounderSectionProps {
  onOpenDayPassModal?: () => void;
}

export default function FounderSection({ onOpenDayPassModal }: FounderSectionProps) {
  const pillars = [
    {
      title: "Legal Precision Meets Iron Discipline",
      desc: "Applying the unwavering ethical rigor of legal practice to biomechanics and facility safety standards.",
      icon: Scale,
    },
    {
      title: "Zero Equipment Compromise",
      desc: "Refusing generic commercial machinery in favor of IFBB Pro certified equipment personally approved by Kai Greene.",
      icon: ShieldCheck,
    },
    {
      title: "Elevating Jabalpur's Athletic Culture",
      desc: "Creating an unapologetic, world-class sanctuary where athletes train with purpose and zero distractions.",
      icon: Award,
    },
  ];

  return (
    <section id="founder" className="relative w-full bg-[#121214] py-16 sm:py-28 px-5 sm:px-8 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#c5a059]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#e8c881]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Top Header Pill */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-[#c5a059] text-xs font-tech font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
            <Sparkles className="w-3.5 h-3.5" />
            VISION &amp; LEADERSHIP
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-[0.02em] text-white leading-tight">
            THE ARCHITECT OF{" "}
            <span className="bg-gradient-to-b from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent drop-shadow-sm">
              THE SANCTUARY
            </span>
          </h2>
        </div>

        {/* Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Side: High-Quality Executive Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#c5a059] via-white/10 to-[#9ca3af]/40 shadow-[0_0_40px_rgba(197,160,89,0.2)]">
              <div className="relative rounded-[22px] bg-[#151518] overflow-hidden aspect-[4/5] sm:aspect-[3/4]">
                <Image
                  src="/assets/founder.svg"
                  alt="Harsh Jain - Advocate & Founder of Muscle Lab Fitness"
                  fill
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-85" />

                {/* Floating Seal HUD Badge */}
                <div className="absolute top-4 left-4 p-2.5 rounded-2xl glass-panel border border-[#c5a059]/40 backdrop-blur-xl flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#c5a059]" />
                  <span className="text-[10px] font-tech font-bold text-white uppercase tracking-wider">
                    ADVOCATE • HIGH COURT
                  </span>
                </div>

                {/* Bottom Card Title Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-panel border border-white/10 backdrop-blur-xl">
                  <div className="font-display font-bold text-lg text-white uppercase tracking-wider">
                    HARSH JAIN
                  </div>
                  <div className="text-xs font-tech text-[#c5a059] font-bold tracking-wider uppercase mt-0.5">
                    Advocate &amp; Founder
                  </div>
                  <div className="text-[10px] font-tech text-slate-400 mt-1">
                    Muscle Lab Fitness • Jabalpur, MP
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Elegant Typography & Leadership Content */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <div>
              <div className="text-xs font-tech text-[#c5a059] uppercase tracking-widest font-bold">
                FOUNDER&apos;S PHILOSOPHY
              </div>
              <h3 className="font-display font-bold text-xl sm:text-3xl text-white uppercase mt-1 leading-snug">
                Harsh Jain | Advocate &amp; Founder
              </h3>
            </div>

            <p className="text-sm sm:text-lg text-slate-300 font-light leading-relaxed font-body">
              &ldquo;Driven by a passion for peak human performance and structural discipline, Harsh Jain
              established Muscle Lab to bridge the gap between premium luxury and raw, heavy-duty training.
              As a practicing advocate and fitness visionary, his meticulous attention to detail ensures
              an uncompromising, elite environment for every member.&rdquo;
            </p>

            <blockquote className="border-l-2 border-[#c5a059] pl-4 sm:pl-5 py-1 text-xs sm:text-sm text-slate-300 italic font-tech">
              &ldquo;Discipline is non-negotiable. Whether drafting a critical legal brief or executing a
              heavy set on calibrated iron, excellence demands absolute structural integrity.&rdquo;
            </blockquote>

            {/* Pillars Grid (Horizontal Snap on Mobile, 3-Col on Desktop) */}
            <div className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-3.5 pt-2 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory no-scrollbar">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="w-[240px] xs:w-[260px] sm:w-auto shrink-0 sm:shrink snap-center p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#c5a059] w-fit mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="font-tech font-bold text-xs text-white uppercase">
                        {item.title}
                      </div>
                    </div>
                    <p className="text-[11px] font-body text-slate-400 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/founder"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-tech text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-white/15 transition-all"
              >
                <span>Read Complete Founder Dossier</span>
                <ArrowUpRight className="w-4 h-4 text-[#c5a059]" />
              </Link>

              <button
                onClick={onOpenDayPassModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#e8c881] text-[#121214] font-tech text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(197,160,89,0.35)] transition-all sheen-effect"
              >
                <Shield className="w-4 h-4 fill-[#121214]" />
                <span>Meet The Team — Day Pass</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
