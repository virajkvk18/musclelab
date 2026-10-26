"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, QrCode, Shield, ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface DayPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DayPassModal({ isOpen, onClose }: DayPassModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [slot, setSlot] = useState("Evening Peak (5:00 PM – 10:00 PM)");
  const [goal, setGoal] = useState("Biomechanics Gear Test");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [passId, setPassId] = useState("");

  const slots = [
    "Morning Power (6:00 AM – 10:00 AM)",
    "Mid-Day Focus (11:00 AM – 4:00 PM)",
    "Evening Peak (5:00 PM – 10:00 PM)",
  ];

  const goals = [
    "Biomechanics Gear Test",
    "Heavy Strength & Hypertrophy",
    "Fat Loss & Conditioning",
    "Coaching Consultation",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    const generatedId = `ML-VIP-${Math.floor(1000 + Math.random() * 9000)}`;
    setPassId(generatedId);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#c5a059", "#e8c881", "#ffffff"],
      });
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName("");
    setPhone("");
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
          className="relative w-full max-w-lg my-8 rounded-3xl glass-panel-gold bg-[#151518] border border-[#c5a059]/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(197,160,89,0.25)] z-10"
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
                <span>FREE VIP DAY PASS RESERVATION</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wide">
                EXPERIENCE THE SANCTUARY
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed font-body">
                Test our Kai Greene certified machinery firsthand. Zero obligations, 100% pure iron
                tension. 1st Floor, Jain Heights, Wright Town.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-tech text-slate-300 uppercase mb-1.5 font-bold">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Verma"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-sm text-white placeholder-slate-500 font-tech outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech text-slate-300 uppercase mb-1.5 font-bold">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 94254 10668"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-sm text-white placeholder-slate-500 font-tech outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech text-slate-300 uppercase mb-1.5 font-bold">
                    Select Preferred Training Slot
                  </label>
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 focus:border-[#c5a059] text-xs sm:text-sm text-white font-tech outline-none transition-all"
                  >
                    {slots.map((s) => (
                      <option key={s} value={s} className="bg-[#151518] text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-tech text-slate-300 uppercase mb-1.5 font-bold">
                    Primary Fitness Focus
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {goals.map((g) => (
                      <button
                        type="button"
                        key={g}
                        onClick={() => setGoal(g)}
                        className={`p-2.5 text-left text-xs font-tech rounded-xl border transition-all ${
                          goal === g
                            ? "bg-[#c5a059]/20 border-[#c5a059] text-[#e8c881] shadow-[0_0_10px_rgba(197,160,89,0.3)]"
                            : "bg-white/[0.02] text-slate-400 border-white/10 hover:border-white/20"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-xs font-bold font-tech tracking-wider uppercase text-[#121214] bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#c5a059] shadow-[0_0_25px_rgba(197,160,89,0.35)] transition-all flex items-center justify-center gap-2 mt-2 sheen-effect"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-[#121214] border-t-transparent rounded-full animate-spin" />
                      <span>Generating Pass...</span>
                    </div>
                  ) : (
                    <>
                      <span>Activate Free VIP Day Pass</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Pass Voucher Card */
            <div className="space-y-5 text-center">
              <div className="p-1 rounded-2xl bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#d1d5db]">
                <div className="bg-[#121214] rounded-[14px] p-6 text-left relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <div>
                      <span className="text-[10px] font-tech text-[#c5a059] tracking-widest font-bold">
                        MUSCLE LAB FITNESS • VIP PASS
                      </span>
                      <div className="font-display font-bold text-lg text-white uppercase mt-0.5">
                        {name}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-tech text-slate-400">PASS ID</span>
                      <div className="text-xs font-tech font-bold text-[#c5a059]">{passId}</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs font-tech text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Location:</span>
                      <span className="text-white font-semibold">1st Floor, Jain Heights, Wright Town</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Slot:</span>
                      <span className="text-[#e8c881] font-semibold">{slot}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Status:</span>
                      <span className="text-emerald-400 font-bold">ADMISSION READY</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-dashed border-white/15 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <QrCode className="w-8 h-8 text-white/80" />
                      <div className="text-[9px] font-tech text-slate-400 uppercase">
                        Present at front desk for
                        <br />
                        instant floor admission
                      </div>
                    </div>
                    <span className="text-[10px] font-tech text-white/50">VALID: 48 HOURS</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919425410668?text=${encodeURIComponent(
                    `Hello Muscle Lab Fitness! I have generated my VIP Day Pass ${passId}. Name: ${name}, Slot: ${slot}, Phone: ${phone}. See you at Jain Heights, Wright Town!`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-tech text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  Confirm Pass on WhatsApp
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-tech text-xs font-bold uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
