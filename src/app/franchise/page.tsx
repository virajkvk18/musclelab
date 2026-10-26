"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DayPassModal from "@/components/DayPassModal";
import confetti from "canvas-confetti";
import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Building,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  DollarSign,
  Briefcase,
  Layers,
  MessageSquare,
} from "lucide-react";

export default function FranchisePage() {
  const [isDayPassOpen, setIsDayPassOpen] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("₹50 Lakh – ₹1 Crore");
  const [timeline, setTimeline] = useState("1–3 Months");
  const [propertyStatus, setPropertyStatus] = useState("Exploring Commercial Properties");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    "₹25 Lakh – ₹50 Lakh",
    "₹50 Lakh – ₹1 Crore",
    "₹1 Crore – ₹2.5 Crore+",
  ];

  const timelineOptions = ["Immediately (Ready)", "1–3 Months", "3–6 Months"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#c5a059", "#e8c881", "#ffffff"],
      });
    }, 900);
  };

  const googleMapsUrl = "https://maps.app.goo.gl/6RtbrFD79c9cikYP9?g_st=ic";

  return (
    <main className="relative min-h-screen bg-[#121214] text-slate-100 selection:bg-[#c5a059] selection:text-[#121214]">
      {/* Navigation */}
      <Navbar
        onOpenDayPassModal={() => setIsDayPassOpen(true)}
        onOpenFranchiseModal={() => {}}
      />

      {/* Hero Header */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-subtle opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#c5a059]/10 rounded-full blur-[170px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-[#c5a059] text-xs font-tech font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            INSTITUTIONAL EXPANSION &amp; PARTNERSHIP
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white leading-tight">
            SCALE THE <span className="gold-gradient-text">IRON LEGACY</span>
          </h1>

          <p className="mt-6 text-sm sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed font-body">
            Partner with Harsh Jain and the Muscle Lab brand. Deploy high-ROI gym infrastructure,
            turnkey Kai Greene certified equipment, and battle-tested operational playbooks across
            prime Central India locations.
          </p>
        </div>
      </section>

      {/* Financial & Operational Unit Economics Strip */}
      <section className="py-14 bg-[#151518] border-b border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2 bg-[#121214]">
            <div className="flex items-center justify-between">
              <TrendingUp className="w-5 h-5 text-[#c5a059]" />
              <span className="text-[10px] font-tech text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                HIGH RETENTION
              </span>
            </div>
            <div className="font-display font-bold text-2xl text-white">65%+</div>
            <div className="text-xs font-tech text-[#c5a059] uppercase font-bold">
              Gross Operating Margin
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-1 font-body">
              Recurring annual memberships, personal training packages, and supplement retail yields
              industry-leading unit profitability.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2 bg-[#121214]">
            <div className="flex items-center justify-between">
              <ShieldCheck className="w-5 h-5 text-[#e8c881]" />
              <span className="text-[10px] font-tech text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20 font-bold">
                KAI GREENE CERTIFIED
              </span>
            </div>
            <div className="font-display font-bold text-2xl text-white">100%</div>
            <div className="text-xs font-tech text-slate-300 uppercase font-bold">
              Turnkey Equipment Supply
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-1 font-body">
              Direct container supply of biomechanically verified leverage machines, heavy dumbbells,
              and Scandinavian sauna infrastructure.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2 bg-[#121214]">
            <div className="flex items-center justify-between">
              <Building className="w-5 h-5 text-[#d1d5db]" />
              <span className="text-[10px] font-tech text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/10 font-bold">
                ACCELERATED LAUNCH
              </span>
            </div>
            <div className="font-display font-bold text-2xl text-white">90 Days</div>
            <div className="text-xs font-tech text-slate-300 uppercase font-bold">
              Site Selection to Doors Open
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-1 font-body">
              Architectural floor plans, acoustic engineering, trainer recruitment, CRM management,
              and high-converting digital marketing campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & HQ Contact Grid */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form Application */}
          <div className="lg:col-span-7 glass-panel-gold bg-[#151518] p-8 sm:p-12 rounded-3xl border border-[#c5a059]/30 shadow-[0_0_50px_rgba(197,160,89,0.15)] relative">
            {!isSubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-tech text-[#c5a059] uppercase tracking-wider mb-2 font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>CONFIDENTIAL INVESTOR DOSSIER</span>
                </div>

                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide">
                  FRANCHISE APPLICATION
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-body">
                  Please complete the form below. Applications are reviewed directly by Harsh Jain
                  and our executive expansion committee.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase mb-2 font-bold">
                      Applicant Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikramaditya Sharma"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-sm text-white placeholder-slate-500 font-tech outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-tech text-slate-300 uppercase mb-2 font-bold">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-sm text-white placeholder-slate-500 font-tech outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-tech text-slate-300 uppercase mb-2 font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="investor@domain.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-sm text-white placeholder-slate-500 font-tech outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase mb-2 font-bold">
                      Target City / Market *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Jabalpur, Bhopal, Indore, Raipur"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-sm text-white placeholder-slate-500 font-tech outline-none transition-all"
                    />
                  </div>

                  {/* Investment Budget Selector */}
                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase mb-2 font-bold">
                      Planned Capital Investment
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`py-3 px-3 text-center text-xs font-tech font-semibold rounded-xl border transition-all ${
                            budget === b
                              ? "bg-[#c5a059] text-[#121214] border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.4)]"
                              : "bg-white/[0.02] text-slate-300 border-white/15 hover:border-white/30"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Deployment Timeline */}
                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase mb-2 font-bold">
                      Target Timeline
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {timelineOptions.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setTimeline(t)}
                          className={`py-3 px-3 text-center text-xs font-tech font-semibold rounded-xl border transition-all ${
                            timeline === t
                              ? "bg-white text-[#121214] border-white font-bold"
                              : "bg-white/[0.02] text-slate-400 border-white/15 hover:border-white/30"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase mb-2 font-bold">
                      Commercial Space / Business Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Detail any existing commercial real estate holdings (carpet area 5,000–12,000 sq ft) or past business management experience..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#c5a059] text-sm text-white placeholder-slate-500 font-tech outline-none resize-none transition-all font-body"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-xs font-bold font-tech tracking-wider uppercase text-[#121214] bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#c5a059] hover:brightness-110 shadow-[0_0_30px_rgba(197,160,89,0.4)] transition-all flex items-center justify-center gap-2 mt-4 sheen-effect"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-[#121214] border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Dossier...</span>
                      </div>
                    ) : (
                      <>
                        <span>Submit Franchise Application</span>
                        <ArrowRight className="w-4 h-4 text-[#121214]" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Success Screen */
              <div className="text-center py-10 space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#c5a059]/20 border border-[#c5a059] text-[#c5a059] flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(197,160,89,0.4)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-[11px] font-tech text-[#c5a059] uppercase tracking-widest font-bold">
                    LEAD DOSSIER REGISTERED • ID #ML-HQ-{Math.floor(1000 + Math.random() * 9000)}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase mt-2">
                    APPLICATION TRANSMITTED
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-md mx-auto leading-relaxed font-body">
                    Thank you, <span className="text-white font-bold">{name}</span>. Harsh Jain and the
                    franchise expansion committee will review your inquiry for{" "}
                    <span className="text-white font-bold">{city}</span> and reach out directly.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/919425410668?text=${encodeURIComponent(
                      `Hello Harsh Jain! I have submitted a Franchise Inquiry for Muscle Lab in ${city} with capital allocation of ${budget}. Name: ${name}, Phone: ${phone}, Email: ${email}. Looking forward to discussing the expansion.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-tech text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Instant WhatsApp Connect
                  </a>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-tech text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: HQ Contact & Location HUD */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 bg-[#151518]">
              <div>
                <span className="text-xs font-tech text-[#c5a059] uppercase tracking-widest font-bold">
                  FLAGSHIP HEADQUARTERS
                </span>
                <h3 className="font-display font-bold text-xl text-white uppercase mt-1">
                  MUSCLE LAB FITNESS
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-tech text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-bold">1st Floor, Jain Heights</div>
                    <div className="text-slate-400">In Front of Saptrishi Hospital</div>
                    <div className="text-slate-400">Wright Town, Jabalpur, MP 482002</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#e8c881] shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px]">DIRECT HOTLINE</div>
                    <a href="tel:+919425410668" className="text-white font-bold hover:text-[#c5a059]">
                      +91 9425410668
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px]">OPERATING HOURS</div>
                    <div className="text-white font-bold">Mon–Sat: 06:00 AM – 10:30 PM</div>
                    <div className="text-slate-400 text-xs">Sunday: 07:00 AM – 01:00 PM</div>
                  </div>
                </div>
              </div>

              {/* Embedded Dark Map Simulation */}
              <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-white/10 bg-[#0e0e12]">
                <div className="absolute inset-0 bg-grid-subtle opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="p-3 rounded-full bg-[#c5a059] text-[#121214] shadow-[0_0_25px_rgba(197,160,89,0.9)] animate-pulse">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-lg bg-black/90 border border-[#c5a059] text-[10px] font-tech text-white font-bold">
                    JAIN HEIGHTS • WRIGHT TOWN
                  </div>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-tech text-xs font-bold uppercase tracking-wider"
                >
                  <span>Launch Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-[#c5a059]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day Pass Modal */}
      <DayPassModal isOpen={isDayPassOpen} onClose={() => setIsDayPassOpen(false)} />

      {/* Footer */}
      <Footer
        onOpenDayPassModal={() => setIsDayPassOpen(true)}
        onOpenFranchiseModal={() => {}}
      />
    </main>
  );
}
