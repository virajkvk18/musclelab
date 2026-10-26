"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  ChevronDown,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  onOpenDayPassModal: () => void;
  onOpenFranchiseModal: () => void;
}

// Alternating playlist: current 4K remix + cropped previous sanctuary video
const heroPlaylist = [
  "/assets/Muscle_Lab_Remix_4K.mp4",
  "/assets/gym-hero-cropped.mp4",
];

export default function Hero({ onOpenDayPassModal, onOpenFranchiseModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);

  // Scroll animations with Apple-tier damping
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headlineScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.94]);
  const headlineY = useTransform(scrollYProgress, [0, 0.6], [0, 50]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  // Seamlessly alternating playlist loop: repeats both videos with sound always OFF
  const handleVideoEnded = () => {
    setCurrentVideoIdx((prev) => (prev + 1) % heroPlaylist.length);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.src = heroPlaylist[currentVideoIdx];
    video.muted = true;
    video.playsInline = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, [currentVideoIdx]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#121214] pt-20 sm:pt-24 pb-12 px-4 sm:px-6"
    >
      {/* Background Video Engine - Dual Alternating Video Loop (Sound Always OFF, No Text Banner) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src={heroPlaylist[currentVideoIdx]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.18] scale-105 transition-opacity duration-1000"
        />

        {/* Matte Charcoal Vignetting & Grain Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/60 to-[#121214]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

        {/* Warm Ambient Sheen Lights */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c5a059]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-[#e8c881]/5 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Content Display - Focused, Minimal, High-Impact First View */}
      <div className="hero-content-stack relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center justify-center w-full my-auto">
        {/* Constrained Official Logo Crest with Floating Levitation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-2 sm:mb-3"
        >
          <div className="absolute inset-0 bg-[#c5a059]/25 blur-2xl rounded-full scale-125 pointer-events-none" />
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="hero-logo-box relative w-14 h-14 sm:w-18 sm:h-18"
          >
            <Image
              src="/assets/logo.png"
              alt="Muscle Lab Gym Official Badge"
              fill
              priority
              sizes="80px"
              className="object-contain drop-shadow-[0_0_25px_rgba(197,160,89,0.4)]"
            />
          </motion.div>
        </motion.div>

        {/* Minimal Floating Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/40 text-slate-200 shadow-[0_0_20px_rgba(197,160,89,0.15)] mb-3 sm:mb-4 max-w-[92vw] sm:max-w-none"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a059]"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-tech font-bold tracking-[0.16em] uppercase text-slate-200">
            KAI GREENE CERTIFIED • JABALPUR
          </span>
        </motion.div>

        {/* Strict 2-Line Headline (Hero Focal Point) */}
        <motion.div
          style={{
            scale: headlineScale,
            y: headlineY,
            opacity: headlineOpacity,
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl mx-auto px-2"
        >
          <h1 className="hero-two-line-title text-center">
            <span className="hero-line text-slate-100 drop-shadow-sm">
              THE ARCHITECTURE OF
            </span>
            <span className="hero-line animate-gold-shimmer mt-1 sm:mt-2 drop-shadow-[0_4px_28px_rgba(197,160,89,0.4)]">
              ELITE PERFORMANCE
            </span>
          </h1>
        </motion.div>

        {/* Minimal High-Impact Single-Line Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 sm:mt-4 text-[11px] sm:text-xs md:text-sm text-slate-300 font-medium font-tech tracking-wider uppercase px-4 text-center"
        >
          Central India&apos;s Premier Private Iron Sanctuary
        </motion.p>

        {/* Hero Interactive CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4"
        >
          {/* Day Pass Primary CTA */}
          <button
            onClick={onOpenDayPassModal}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold font-tech tracking-[0.08em] uppercase text-[#121214] bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#c5a059] shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:shadow-[0_0_50px_rgba(197,160,89,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 sheen-effect"
          >
            <span className="flex items-center justify-center gap-2.5">
              <Shield className="w-4 h-4 fill-[#121214] text-[#121214]" />
              Claim Free VIP Day Pass
            </span>
          </button>

          {/* Inspect Gear Button */}
          <a
            href="#sanctuary-details"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold font-tech tracking-[0.08em] uppercase text-slate-200 glass-panel border border-white/15 hover:border-[#c5a059] hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2.5 hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            Explore Sanctuary
          </a>
        </motion.div>

        {/* Subtle Minimal Scroll Cue */}
        <motion.a
          href="#sanctuary-details"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-6 sm:mt-9 text-slate-500 hover:text-white transition-colors flex flex-col items-center gap-1 group"
          aria-label="Scroll to sanctuary details"
        >
          <span className="text-[10px] font-tech tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-4 h-4 text-[#c5a059]" />
        </motion.a>
      </div>
    </section>
  );
}
