"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Shield,
  ChevronDown,
  Activity,
  Sparkles,
  MapPin,
} from "lucide-react";

interface HeroProps {
  onOpenDayPassModal: () => void;
  onOpenFranchiseModal: () => void;
}

export default function Hero({ onOpenDayPassModal, onOpenFranchiseModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeCamera, setActiveCamera] = useState<string>("/assets/Muscle_Lab_Remix_4K.mp4");

  const videoAngles = [
    { id: "cam-1", label: "CAM 01 // 4K CINEMATIC REMIX", src: "/assets/Muscle_Lab_Remix_4K.mp4" },
    { id: "cam-2", label: "CAM 02 // HEAVY RACK", src: "/assets/facility-video-2.mp4" },
    { id: "cam-3", label: "CAM 03 // PRO GEAR", src: "/assets/facility-video-3.mp4" },
  ];

  // Scroll animations with Apple-tier damping
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headlineScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.94]);
  const headlineY = useTransform(scrollYProgress, [0, 0.6], [0, 60]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      videoRef.current.volume = 0.6;
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const changeAngle = (src: string) => {
    setActiveCamera(src);
    if (videoRef.current) {
      videoRef.current.src = src;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#121214] pt-24 sm:pt-28 pb-14 px-4 sm:px-6"
    >
      {/* Background Video Engine */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={activeCamera}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.18] scale-105 transition-all duration-700"
        />

        {/* Matte Charcoal Vignetting & Grain Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/60 to-[#121214]/85" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
        <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

        {/* Warm Ambient Sheen Lights */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c5a059]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-[#e8c881]/5 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Floating HUD Camera & Audio Controller (Bottom Right) */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-30 flex flex-col items-end gap-2.5">
        {/* Camera Selector HUD */}
        <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-xl glass-panel border border-white/10 backdrop-blur-xl">
          {videoAngles.map((cam) => (
            <button
              key={cam.id}
              onClick={() => changeAngle(cam.src)}
              className={`px-3 py-1 text-[10px] font-tech font-bold rounded-lg transition-all ${
                activeCamera === cam.src
                  ? "bg-gradient-to-r from-[#c5a059] to-[#e8c881] text-[#121214] shadow-[0_0_12px_rgba(197,160,89,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cam.label}
            </button>
          ))}
        </div>

        {/* Media Controls HUD */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="p-3 rounded-xl glass-panel hover:border-[#c5a059]/50 text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg group"
            title={isPlaying ? "Pause Ambient Feed" : "Play Ambient Feed"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-slate-300 group-hover:text-[#c5a059]" />
            ) : (
              <Play className="w-4 h-4 text-[#c5a059] fill-[#c5a059]" />
            )}
          </button>

          <button
            onClick={toggleSound}
            className={`p-3 rounded-xl glass-panel text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg group flex items-center gap-2 ${
              !isMuted ? "border-[#c5a059] bg-[#c5a059]/15" : "hover:border-white/20"
            }`}
            title={isMuted ? "Unmute Ambient Audio" : "Mute Audio"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-white" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#c5a059] animate-pulse" />
            )}
            <span className="text-[10px] font-tech uppercase tracking-wider text-slate-300 pr-1 hidden xs:inline">
              {isMuted ? "Muted" : "Live Sound"}
            </span>
          </button>
        </div>
      </div>

      {/* Main Hero Content Display */}
      <div className="hero-content-stack relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center w-full">
        {/* Constrained Official Logo Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-logo-box relative w-16 h-16 sm:w-20 sm:h-20 mb-2 sm:mb-3"
        >
          <Image
            src="/assets/logo.png"
            alt="Muscle Lab Gym Official Badge"
            fill
            priority
            sizes="96px"
            className="object-contain drop-shadow-[0_0_20px_rgba(197,160,89,0.35)]"
          />
        </motion.div>

        {/* Floating Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full glass-panel border border-[#c5a059]/40 text-slate-200 shadow-[0_0_20px_rgba(197,160,89,0.15)] mb-3 sm:mb-4 max-w-[94vw] sm:max-w-none"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a059]"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-tech font-bold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-slate-200">
            KAI GREENE CERTIFIED • WRIGHT TOWN, JABALPUR
          </span>
        </motion.div>

        {/* 2-Line Headline (Strictly 2 lines on mobile & web) */}
        <motion.div
          style={{
            scale: headlineScale,
            y: headlineY,
            opacity: headlineOpacity,
          }}
          className="w-full max-w-4xl mx-auto px-2"
        >
          <h1 className="hero-two-line-title text-center">
            <span className="hero-line text-slate-100 drop-shadow-sm">
              THE ARCHITECTURE OF
            </span>
            <span className="hero-line bg-gradient-to-b from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent mt-1 sm:mt-2 drop-shadow-[0_4px_25px_rgba(197,160,89,0.35)]">
              ELITE PERFORMANCE
            </span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3.5 sm:mt-5 max-w-lg sm:max-w-xl md:max-w-2xl text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed font-body px-4 text-center"
        >
          Central India&apos;s premier private athletic sanctuary. Equipped with biomechanically perfected,{" "}
          <span className="text-white font-medium underline decoration-[#c5a059] underline-offset-4">
            Kai Greene certified
          </span>{" "}
          machinery, calibrated acoustic energy, and Scandinavian thermal recovery.
        </motion.p>

        {/* Hero Interactive CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4"
        >
          {/* Day Pass Primary CTA */}
          <button
            onClick={onOpenDayPassModal}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold font-tech tracking-[0.06em] uppercase text-[#121214] bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#c5a059] shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:shadow-[0_0_45px_rgba(197,160,89,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 sheen-effect"
          >
            <span className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 fill-[#121214] text-[#121214]" />
              Claim Free VIP Day Pass
            </span>
          </button>

          {/* Inspect Gear Button */}
          <a
            href="#kai-greene"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold font-tech tracking-[0.06em] uppercase text-slate-200 glass-panel border border-white/15 hover:border-[#c5a059] hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            Explore The Sanctuary
          </a>
        </motion.div>

        {/* Live Telemetry HUD Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 sm:mt-10 pt-5 sm:pt-6 border-t border-white/10 max-w-3xl w-full px-3"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-[10px] sm:text-xs font-tech text-slate-400">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-white/5 sm:border-0 sm:p-0 sm:bg-transparent">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400">STATUS:</span>
              <span className="text-white font-bold">OPERATIONAL TODAY</span>
            </div>

            <div className="hidden sm:block text-slate-600">|</div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-white/5 sm:border-0 sm:p-0 sm:bg-transparent">
              <Activity className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="text-slate-400">FLOOR:</span>
              <span className="text-[#e8c881] font-bold">OPTIMAL TRAINING FLOW</span>
            </div>

            <div className="hidden sm:block text-slate-600">|</div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-white/5 sm:border-0 sm:p-0 sm:bg-transparent">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-400">LOCATION:</span>
              <span className="text-white">WRIGHT TOWN, JABALPUR</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#experience"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-6 sm:mt-8 text-slate-500 hover:text-white transition-colors flex flex-col items-center gap-1 group"
          aria-label="Scroll to content"
        >
          <span className="text-[10px] font-tech tracking-widest uppercase opacity-70 group-hover:opacity-100">
            EXPLORE THE SANCTUARY
          </span>
          <ChevronDown className="w-4 h-4 text-[#c5a059]" />
        </motion.a>
      </div>
    </section>
  );
}
