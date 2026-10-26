"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PreLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if preloader has already run this session
    const hasLoaded = sessionStorage.getItem("musclelab_preloader_run");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("musclelab_preloader_run", "true");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const titleLetters = "MUSCLE LAB".split("");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { ease: [0.76, 0, 0.24, 1], duration: 1 },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#08080a] text-white overflow-hidden pointer-events-auto"
        >
          {/* Subtle Background Radial Gold Glow */}
          <div className="absolute w-[600px] h-[600px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Centered Logo Badge Reveal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-24 h-24 sm:w-28 sm:h-28 mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-[#c5a059]/20 blur-xl animate-pulse" />
            <Image
              src="/assets/logo.png"
              alt="Muscle Lab Logo"
              fill
              priority
              sizes="112px"
              className="object-contain filter drop-shadow-[0_0_20px_rgba(197,160,89,0.5)]"
            />
          </motion.div>

          {/* Letters Tracking-In & Sharp Assembly */}
          <div className="relative flex items-center justify-center overflow-hidden py-2 px-4">
            {titleLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                  x: (index - 4.5) * 22, // Spreads out from center
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: 0, // Assembles together sharply
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.95,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-wider uppercase inline-block ${
                  letter === " " ? "w-3 sm:w-5" : ""
                } bg-gradient-to-b from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(197,160,89,0.45)]`}
              >
                {letter}
              </motion.span>
            ))}

            {/* Metallic Golden Sheen Glint Across Assembled Text */}
            <motion.div
              initial={{ x: "-150%", opacity: 0 }}
              animate={{ x: "250%", opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 1.15,
                duration: 0.9,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none"
            />
          </div>

          {/* Gold Telemetry Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] sm:text-xs font-tech tracking-[0.3em] uppercase text-slate-400">
              PREMIUM FITNESS &amp; WELLNESS • JABALPUR
            </span>

            {/* Glowing Loading Bar Indicator */}
            <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mt-3 relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#c5a059] to-transparent shadow-[0_0_10px_#c5a059]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
