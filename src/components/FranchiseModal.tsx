"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

interface FranchiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FranchiseModal({ isOpen, onClose }: FranchiseModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("₹50L – ₹1Cr");
  const [timeline, setTimeline] = useState("1–3 Months");
  const [experience, setExperience] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const budgetOptions = ["₹25L – ₹50L", "₹50L – ₹1Cr", "₹1Cr – ₹2.5Cr+"];
  const timelineOptions = ["Immediately", "1–3 Months", "3–6 Months"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#c5a059", "#e8c881", "#ffffff"],
      });
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName("");
    setPhone("");
    setCity("");
    setExperience("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="relative w-full max-w-xl my-8 rounded-3xl glass-panel-gold bg-[#151518] border border-[#c5a059]/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(197,160,89,0.25)] z-10"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div>
              <div className="flex items-center gap-2 text-xs font-tech text-[#c5a059] uppercase tracking-wider mb-2 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>EXECUTIVE EXPANSION INQUIRY</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wide">
                OWN A MUSCLE LAB FRANCHISE
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed font-body">
                Connect directly with Harsh Jain and our expansion team. We evaluate partners on vision,
                capital readiness, and commitment to fitness excellence.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-tech text-slate-300 uppercase mb-1.5 font-bold">
                    Investor / Founder Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-sm text-white placeholder-slate-500 font-tech outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase mb-1.5 font-bold">
                      Contact Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-sm text-white placeholder-slate-500 font-tech outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase mb-1.5 font-bold">
                      Target City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Jabalpur / Bhopal"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-sm text-white placeholder-slate-500 font-tech outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Investment Budget Selection */}
                <div>
                  <label className="block text-xs font-tech text-slate-300 uppercase mb-2 font-bold">
                    Planned Investment Budget
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`py-2 px-2 text-center text-xs font-tech font-semibold rounded-xl border transition-all ${
                          budget === b
                            ? "bg-[#c5a059] text-[#121214] border-[#c5a059] shadow-[0_0_12px_rgba(197,160,89,0.4)]"
                            : "bg-white/[0.02] text-slate-300 border-white/15 hover:border-white/30"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline Selection */}
                <div>
                  <label className="block text-xs font-tech text-slate-300 uppercase mb-2 font-bold">
                    Target Deployment Timeline
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timelineOptions.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`py-2 px-2 text-center text-xs font-tech font-semibold rounded-xl border transition-all ${
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
                  <label className="block text-xs font-tech text-slate-300 uppercase mb-1.5 font-bold">
                    Background / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="Tell us about existing commercial holdings or past business management experience..."
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 focus:border-[#c5a059] text-sm text-white placeholder-slate-500 font-tech outline-none resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-xs font-bold font-tech tracking-wider uppercase text-[#121214] bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#c5a059] hover:brightness-110 shadow-[0_0_25px_rgba(197,160,89,0.35)] transition-all flex items-center justify-center gap-2 mt-2 sheen-effect"
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
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#c5a059]/20 border border-[#c5a059] text-[#c5a059] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(197,160,89,0.4)]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-[11px] font-tech text-[#c5a059] uppercase tracking-widest font-bold">
                  DOSSIER TRANSMITTED • ID #ML-FR-{Math.floor(1000 + Math.random() * 9000)}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase mt-1">
                  APPLICATION FILED
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto font-body">
                  Thank you, <span className="text-white font-bold">{fullName}</span>. Harsh Jain and the
                  expansion committee will review your inquiry for{" "}
                  <span className="text-white font-bold">{city}</span> and connect via WhatsApp / Call within 24 hours.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919425410668?text=${encodeURIComponent(
                    `Hello Muscle Lab Fitness! I have submitted a Franchise Inquiry for ${city} with capital allocation of ${budget}. Name: ${fullName}, Phone: ${phone}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-tech text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  Connect on WhatsApp Now
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-tech text-xs font-bold uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
