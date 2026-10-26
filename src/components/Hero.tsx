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

export default function Hero({ onOpenDayPassModal, onOpenFranchiseModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef0 = useRef<HTMLVideoElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<0 | 1>(0);

  // Scroll animations with Apple-tier damping
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headlineScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.94]);
  const headlineY = useTransform(scrollYProgress, [0, 0.6], [0, 50]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.15]);

  // Seamless Dual-Video Crossfade Loop: Zero buffering freeze, zero black flicker
  const handleVideo0Ended = () => {
    setActiveVideo(1);
    if (videoRef1.current) {
      videoRef1.current.currentTime = 0;
      videoRef1.current.play().catch(() => {});
    }
  };

  const handleVideo1Ended = () => {
    setActiveVideo(0);
    if (videoRef0.current) {
      videoRef0.current.currentTime = 0;
      videoRef0.current.play().catch(() => {});
    }
  };

  useEffect(() => {
    // Ensure active video is playing smoothly
    if (activeVideo === 0 && videoRef0.current) {
      videoRef0.current.play().catch(() => {});
    } else if (activeVideo === 1 && videoRef1.current) {
      videoRef1.current.play().catch(() => {});
    }
  }, [activeVideo]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#121214] pt-20 sm:pt-24 pb-12 px-4 sm:px-6"
    >
      {/* Background Video Engine - Dual Alternating Crossfade Loop (Sound Always OFF) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Video 0: 4K Sanctuary Showcase */}
        <video
          ref={videoRef0}
          src="/assets/Muscle_Lab_Remix_4K.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleVideo0Ended}
          className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.18] scale-105 transition-opacity duration-1000 ease-in-out ${
            activeVideo === 0 ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Video 1: Cropped Sanctuary Floor Tour */}
        <video
          ref={videoRef1}
          src="/assets/gym-hero-cropped.mp4"
          muted
          playsInline
          onEnded={handleVideo1Ended}
          className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.18] scale-105 transition-opacity duration-1000 ease-in-out ${
            activeVideo === 1 ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Matte Charcoal Vignetting & Grain Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/65 to-[#121214]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

        {/* Warm Ambient Specular Glow Orbs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#c5a059]/12 rounded-full blur-[160px] pointer-events-none animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-10 right-10 w-[480px] h-[320px] bg-[#e8c881]/8 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Content Display - Focused, Minimal, High-Impact First View */}
      <div className="hero-content-stack relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center justify-center w-full my-auto gpu-accel">
        {/* Constrained Official Logo Crest with Floating Levitation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-2 sm:mb-3"
        >
          <div className="absolute inset-0 bg-[#c5a059]/30 blur-2xl rounded-full scale-125 pointer-events-none animate-pulse" />
          <motion.div
            animate={{ y: [0, -5, 0], rotate: [0, 0.4, 0, -0.4, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="hero-logo-box relative w-14 h-14 sm:w-18 sm:h-18"
          >
            <Image
              src="/assets/logo.png"
              alt="Muscle Lab Gym Official Badge"
              fill
              priority
              sizes="80px"
              className="object-contain drop-shadow-[0_0_28px_rgba(197,160,89,0.45)]"
            />
          </motion.div>
        </motion.div>

        {/* Minimal Floating Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/40 text-slate-200 shadow-[0_0_20px_rgba(197,160,89,0.18)] mb-3 sm:mb-4 max-w-[92vw] sm:max-w-none hover:border-[#c5a059]/70 transition-colors"
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
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl mx-auto px-2"
        >
          <h1 className="hero-two-line-title text-center">
            <span className="hero-line text-slate-100 drop-shadow-sm">
              THE ARCHITECTURE OF
            </span>
            <span className="hero-line animate-gold-shimmer mt-1 sm:mt-2 drop-shadow-[0_4px_30px_rgba(197,160,89,0.45)]">
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

        {/* Hero Interactive CTAs with Tactile Spring Micro-Interactions */}
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4"
        >
          {/* Day Pass Primary CTA */}
          <motion.button
            onClick={onOpenDayPassModal}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold font-tech tracking-[0.08em] uppercase text-[#121214] bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#c5a059] shadow-[0_0_30px_rgba(197,160,89,0.45)] hover:shadow-[0_0_55px_rgba(197,160,89,0.8)] transition-shadow duration-300 sheen-effect"
          >
            <span className="flex items-center justify-center gap-2.5">
              <Shield className="w-4 h-4 fill-[#121214] text-[#121214]" />
              Claim Free VIP Day Pass
            </span>
          </motion.button>

          {/* Inspect Gear Button */}
          <motion.a
            href="#sanctuary-details"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold font-tech tracking-[0.08em] uppercase text-slate-200 glass-panel border border-white/15 hover:border-[#c5a059] hover:bg-white/5 transition-colors duration-300 flex items-center justify-center gap-2.5 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            Explore Sanctuary
          </motion.a>
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
          <ChevronDown className="w-4 h-4 text-[#c5a059] group-hover:translate-y-0.5 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}

