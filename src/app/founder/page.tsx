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
  Scale,
  ShieldCheck,
  Award,
  Sparkles,
  Shield,
  Building2,
  Phone,
} from "lucide-react";

export default function FounderPage() {
  const [isDayPassOpen, setIsDayPassOpen] = useState(false);
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false);

  const milestones = [
    {
      year: "Legal Excellence",
      title: "Practicing Advocate",
      desc: "Built a respected legal practice focusing on structural discipline, ethical defense, and regulatory governance.",
    },
    {
      year: "The Iron Vision",
      title: "Founding Muscle Lab",
      desc: "Identified a massive void in Central India for true luxury, biomechanically calibrated training facilities.",
    },
    {
      year: "Global Standard",
      title: "Kai Greene Certification",
      desc: "Partnered to ensure every piece of machinery met the rigorous standards of IFBB Pro Legend Kai Greene.",
    },
    {
      year: "Future Expansion",
      title: "Franchise Scale",
      desc: "Opening doors for visionary partners to replicate the Muscle Lab iron sanctuary model across Central India.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#121214] text-slate-100 selection:bg-[#c5a059] selection:text-[#121214]">
      {/* Navigation */}
      <Navbar
        onOpenDayPassModal={() => setIsDayPassOpen(true)}
        onOpenFranchiseModal={() => setIsFranchiseOpen(true)}
      />

      {/* Hero Header */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-subtle opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-[#c5a059]/10 rounded-full blur-[170px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-[#c5a059] text-xs font-tech font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            VISION &amp; LEADERSHIP
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white leading-tight">
            MEET THE FOUNDER:{" "}
            <span className="gold-gradient-text">HARSH JAIN</span>
          </h1>

          <p className="mt-4 text-base sm:text-xl font-tech text-slate-300 font-semibold tracking-wider uppercase">
            Advocate &amp; Founder | Muscle Lab Fitness
          </p>
        </div>
      </section>

      {/* Split-Screen Biography & Vision */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authoritative Executive Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#c5a059] via-white/10 to-[#9ca3af] shadow-[0_0_40px_rgba(197,160,89,0.25)]">
              <div className="relative rounded-[22px] bg-[#151518] overflow-hidden aspect-[4/5] sm:aspect-[3/4]">
                <Image
                  src="/assets/founder.svg"
                  alt="Harsh Jain Advocate and Founder"
                  fill
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-85" />

                {/* Floating Seal */}
                <div className="absolute top-4 left-4 p-2.5 rounded-2xl glass-panel border border-[#c5a059]/40 backdrop-blur-xl flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#c5a059]" />
                  <span className="text-[10px] font-tech font-bold text-white uppercase tracking-wider">
                    LEGAL RIGOR • FITNESS VISION
                  </span>
                </div>

                {/* Bottom ID Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-panel border border-white/15 backdrop-blur-xl">
                  <div className="font-display font-bold text-xl text-white uppercase tracking-wider">
                    HARSH JAIN
                  </div>
                  <div className="text-xs font-tech text-[#c5a059] font-bold tracking-wider uppercase mt-0.5">
                    Advocate &amp; Founder
                  </div>
                  <div className="text-[10px] font-tech text-slate-400 mt-1">
                    1st Floor, Jain Heights, Wright Town, Jabalpur
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3 bg-[#151518]">
              <div className="text-xs font-tech text-[#c5a059] uppercase tracking-widest font-bold">
                EXECUTIVE OFFICE
              </div>
              <div className="space-y-2 text-xs font-tech text-slate-300">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#c5a059]" />
                  <span>Jain Heights, Wright Town, Jabalpur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#e8c881]" />
                  <a href="tel:+919425410668" className="hover:text-white underline">
                    +91 9425410668
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-tech text-[#c5a059] uppercase tracking-widest font-bold">
                THE FOUNDER&apos;S MANIFESTO
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase leading-tight">
                BRIDGING THE CHASM BETWEEN RAW IRON AND LUXURY
              </h2>

              <p className="text-sm sm:text-lg text-slate-300 font-light leading-relaxed font-body">
                Driven by a passion for peak human performance and structural discipline, Harsh Jain
                established Muscle Lab to bridge the gap between premium luxury and raw, heavy-duty
                training. As a practicing advocate and fitness visionary, his meticulous attention to detail
                ensures an uncompromising, elite environment for every member.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl glass-panel-gold border border-[#c5a059]/30 bg-gradient-to-br from-[#18181c] to-[#121214] space-y-3">
              <div className="text-xs font-tech text-[#c5a059] uppercase font-bold tracking-wider">
                PERSONAL STATEMENT
              </div>
              <blockquote className="italic text-slate-200 text-xs sm:text-sm leading-relaxed font-body">
                &ldquo;Too many commercial gyms treat fitness like an assembly line—cheap imported
                machines, broken cables, loud ego-driven distractions, and zero respect for proper human
                biomechanics. I built Muscle Lab because the athletes and professionals of Jabalpur deserve
                better. We chose Kai Greene certified gear because greatness does not accept compromises.
                When you train here, you train with absolute purpose.&rdquo;
              </blockquote>
              <div className="pt-2 text-right">
                <span className="font-display font-bold text-white text-sm uppercase">
                  — Harsh Jain
                </span>
              </div>
            </div>

            {/* Core Leadership Pillars */}
            <div className="space-y-4 pt-2">
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide">
                THE THREE COMMANDMENTS OF MUSCLE LAB
              </h3>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-2 bg-[#151518]">
                  <div className="flex items-center gap-2 font-tech font-bold text-sm text-white uppercase">
                    <Scale className="w-4 h-4 text-[#c5a059]" />
                    <span>01. Precision in Every Dimension</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                    Just as legal advocacy requires flawless attention to statutes and arguments,
                    muscle hypertrophy requires exact convergent axis geometry. We calibrated every
                    machine path to the natural human muscle line.
                  </p>
                </div>

                <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-2 bg-[#151518]">
                  <div className="flex items-center gap-2 font-tech font-bold text-sm text-white uppercase">
                    <Award className="w-4 h-4 text-[#e8c881]" />
                    <span>02. Global Equipment Endorsement</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                    Partnering with IFBB Pro Legend Kai Greene was a non-negotiable standard. We didn&apos;t
                    settle for imitation brands; we equipped our Wright Town facility with gear built to
                    endure 450KG+ loads.
                  </p>
                </div>

                <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-2 bg-[#151518]">
                  <div className="flex items-center gap-2 font-tech font-bold text-sm text-white uppercase">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>03. The Uncompromising Member Sanctuary</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                    Zero wait times, dedicated member parking, Scandinavian thermal sauna recovery, and
                    a high-voltage acoustic sound system that keeps the focus razor-sharp.
                  </p>
                </div>
              </div>
            </div>

            {/* Career & Project Milestones */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide">
                THE EXPANSION ROADMAP
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {milestones.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                    <div className="text-[10px] font-tech text-[#c5a059] uppercase font-bold">
                      {m.year}
                    </div>
                    <div className="font-tech font-bold text-xs text-white uppercase">
                      {m.title}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-body">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setIsDayPassOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#e8c881] text-[#121214] font-tech text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(197,160,89,0.35)] active:scale-95 transition-all flex items-center justify-center gap-2 sheen-effect"
              >
                <Shield className="w-4 h-4 fill-[#121214]" />
                Train At Muscle Lab — Free Pass
              </button>

              <button
                onClick={() => setIsFranchiseOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#c5a059]/10 font-tech text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Partner With Harsh Jain
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <DayPassModal isOpen={isDayPassOpen} onClose={() => setIsDayPassOpen(false)} />
      <FranchiseModal isOpen={isFranchiseOpen} onClose={() => setIsFranchiseOpen(false)} />

      {/* Footer */}
      <Footer
        onOpenDayPassModal={() => setIsDayPassOpen(true)}
        onOpenFranchiseModal={() => setIsFranchiseOpen(true)}
      />
    </main>
  );
}
