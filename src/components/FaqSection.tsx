"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes Muscle Lab's equipment Kai Greene certified?",
      a: "Our machinery features custom-calibrated biomechanical strength curves personally endorsed and tested to meet the standards of IFBB Pro Legend Kai Greene. Unlike generic gym machines, the converging and diverging axes maintain uninterrupted mechanical tension through the complete range of motion, reducing joint strain while maximizing muscle fiber recruitment.",
    },
    {
      q: "Are first-time day passes really free?",
      a: "Yes. We believe serious lifters need to experience the difference before committing. You can claim a Free 1-Day VIP Pass directly on this website, which grants you unrestricted floor access to test our plate-loaded machines, heavy dumbbell racks, and cardio zone.",
    },
    {
      q: "What are the gym operating hours and location?",
      a: "Muscle Lab is located on the 1st Floor of Jain Heights, directly in front of Saptrishi Hospital in Wright Town, Jabalpur. We operate Monday through Saturday from 6:00 AM to 10:30 PM, and Sundays from 7:00 AM to 1:00 PM for recovery sessions.",
    },
    {
      q: "Do you offer personalized 1-on-1 coaching and nutrition plans?",
      a: "Absolutely. Our Coaching Lab pairs you with certified strength and physique coaches who build custom hypertrophy periodization protocols, biomechanical form reviews, and metabolic nutrition plans tailored to your specific body recomposition goals.",
    },
    {
      q: "How can I inquire about opening a Muscle Lab franchise?",
      a: "We are actively partnering with visionary entrepreneurs to expand Muscle Lab across Central India. Click the 'Franchise' link or button to submit your target city and investment budget, and Harsh Jain and the executive expansion committee will connect directly.",
    },
    {
      q: "What amenities, lockers, and parking are available?",
      a: "We offer dedicated member parking, elevator access to the 1st floor, secure biometric locker rooms, luxury shower suites, Scandinavian dry heat sauna, hydration bar access, and high-fidelity 10,000-watt sound reinforcement throughout the floor.",
    },
  ];

  return (
    <section id="faq" className="relative w-full bg-[#121214] py-16 sm:py-28 px-5 sm:px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-slate-300 text-xs font-tech font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
            <HelpCircle className="w-3.5 h-3.5 text-[#c5a059]" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
            EVERYTHING YOU NEED{" "}
            <span className="bg-gradient-to-b from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent drop-shadow-sm">
              TO KNOW
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm font-tech">
            Clear answers about training, Kai Greene certified equipment, and our Jabalpur sanctuary.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl transition-all duration-300 overflow-hidden glass-panel border ${
                  isOpen
                    ? "border-[#c5a059]/50 bg-[#18181b]/90 shadow-[0_0_25px_rgba(197,160,89,0.15)]"
                    : "border-white/10 hover:border-white/20 bg-[#151518]/60"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-tech font-bold text-sm sm:text-base text-white tracking-wide">
                    {faq.q}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg border transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? "rotate-180 bg-[#c5a059] text-[#121214] border-[#c5a059]"
                        : "bg-white/5 text-slate-400 border-white/10"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 font-body">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
