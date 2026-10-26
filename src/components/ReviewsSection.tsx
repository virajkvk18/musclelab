"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Sparkles } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Dr. Aakash Singhania",
      role: "Orthopedic Surgeon & Lifter",
      location: "Wright Town, Jabalpur",
      rating: 5,
      quote:
        "The only gym in Jabalpur where the equipment actually matches the hype. The Kai Greene certified machines hit completely different. Biomechanically, there is zero joint impingement even on max loads.",
      highlight: "Kai Greene Certified Gear",
    },
    {
      name: "Prateek Agrawal",
      role: "Tech Entrepreneur & Member",
      location: "Civil Lines, Jabalpur",
      rating: 5,
      quote:
        "Premium vibe from the moment you walk in. The separate cardio section and thermal sauna make it feel like an ultra-luxury private club. Harsh Jain's attention to detail is evident everywhere.",
      highlight: "Thermal Sauna & Luxury Vibe",
    },
    {
      name: "Ananya Deshmukh",
      role: "Competitive Physique Athlete",
      location: "Napier Town, Jabalpur",
      rating: 5,
      quote:
        "Finally, an unapologetic training sanctuary with dumbbells up to 70KG and serious plate-loaded machinery. The lighting and 10,000-watt sound setup make every session high-voltage.",
      highlight: "Heavy Iron & High Energy",
    },
    {
      name: "Rohan V. Chawla",
      role: "Corporate Executive",
      location: "Wright Town, Jabalpur",
      rating: 5,
      quote:
        "I was tired of overcrowded gyms with broken cables. Muscle Lab's 1st floor facility at Jain Heights has world-class hygiene, seamless biometric access, and coaches who know real science.",
      highlight: "Elite Coaching & Hygiene",
    },
    {
      name: "Vikramaditya Rathore",
      role: "Strength Athlete",
      location: "Vijay Nagar, Jabalpur",
      rating: 5,
      quote:
        "I used to train in Mumbai and Delhi luxury gyms. Muscle Lab brings that exact international standard straight to Jabalpur. Nothing else comes close in Central India.",
      highlight: "International Benchmark",
    },
  ];

  return (
    <section className="relative w-full bg-[#121214] py-16 sm:py-28 px-5 sm:px-8 border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-[#c5a059]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-[#c5a059] text-xs font-tech font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
            <Sparkles className="w-3.5 h-3.5" />
            ATHLETE ENDORSEMENTS &amp; REPUTATION
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
            VERIFIED VOICES OF{" "}
            <span className="bg-gradient-to-b from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent drop-shadow-sm">
              THE SANCTUARY
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm font-tech">
            Rated 5.0★ by competitive lifters, surgeons, and business executives across Jabalpur.
          </p>
        </div>

        {/* Mobile Horizontal Snap Carousel (< md) */}
        <div className="flex md:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar -mx-5 px-5">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="w-[290px] xs:w-[320px] shrink-0 snap-center glass-panel p-5 rounded-3xl border border-white/10 hover:border-[#c5a059]/40 transition-all flex flex-col justify-between bg-[#151518] shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#c5a059]">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#c5a059]" />
                    ))}
                  </div>
                  <span className="text-[9px] font-tech text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    VERIFIED
                  </span>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed italic mb-4 font-body">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-tech font-bold text-white text-xs uppercase tracking-wide">
                    {r.name}
                  </div>
                  <div className="text-[10px] font-body text-slate-400">
                    {r.role}
                  </div>
                  <div className="text-[9px] font-tech text-[#c5a059] mt-0.5">
                    {r.location}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[8px] font-tech text-slate-500 uppercase">
                    HIGHLIGHT
                  </span>
                  <div className="text-[10px] font-tech font-bold text-slate-300">
                    {r.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Guidance Bar */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-2 text-slate-500 font-tech text-[10px] uppercase tracking-widest">
          <span>← Swipe horizontally to read all testimonials →</span>
        </div>

        {/* Desktop Reviews Grid (md+) */}
        <div className="hidden md:block space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col justify-between group bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#c5a059]">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-tech text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      VERIFIED LIFTER
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-6 font-body">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-tech font-bold text-white text-xs uppercase tracking-wide">
                      {r.name}
                    </div>
                    <div className="text-[11px] font-body text-slate-400">
                      {r.role}
                    </div>
                    <div className="text-[10px] font-tech text-[#c5a059] mt-0.5">
                      {r.location}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[9px] font-tech text-slate-500 uppercase">
                      HIGHLIGHT
                    </span>
                    <div className="text-[11px] font-tech font-bold text-slate-300">
                      {r.highlight}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {reviews.slice(3, 5).map((r, idx) => (
              <motion.div
                key={idx + 3}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col justify-between bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-[#c5a059]">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-tech text-slate-400">
                      {r.highlight}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-4 font-body">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-tech">
                  <span className="font-bold text-white">{r.name}</span>
                  <span className="text-slate-400">{r.role} • {r.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
