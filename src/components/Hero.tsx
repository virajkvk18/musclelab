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
  const logoWatermarkY = useTransform(scrollYProgress, [0, 1], [0, -80]);

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
      className="relative min-h-[105vh] w-full flex items-center justify-center overflow-hidden bg-[#121214] pt-28 sm:pt-32 pb-20 px-5 sm:px-8"
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

        {/* Massive Subtle Watermark of Official Logo */}
        <motion.div
          style={{ y: logoWatermarkY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] md:w-[850px] h-[340px] sm:h-[650px] md:h-[850px] pointer-events-none opacity-[0.06] select-none"
        >
          <Image
            src="/assets/logo.png"
            alt="Muscle Lab Logo Watermark"
            fill
            sizes="(max-width: 768px) 340px, 850px"
            className="object-contain filter grayscale contrast-200"
          />
        </motion.div>

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
      <div className="relative z-20 max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Floating Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full glass-panel border border-[#c5a059]/40 text-slate-200 shadow-[0_0_20px_rgba(197,160,89,0.15)] mb-6 sm:mb-8 max-w-[94vw] sm:max-w-none"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a059]"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-tech font-bold tracking-wider uppercase text-slate-200 truncate sm:overflow-visible">
            <span className="hidden sm:inline">KAI GREENE CERTIFIED BIOMECHANICS • 1ST FLOOR JAIN HEIGHTS • WRIGHT TOWN</span>
            <span className="sm:hidden">KAI GREENE CERTIFIED • 1ST FLOOR JAIN HEIGHTS</span>
          </span>
        </motion.div>

        {/* 3D Metallic Gradient Display Headline */}
        <motion.div
          style={{
            scale: headlineScale,
            y: headlineY,
            opacity: headlineOpacity,
          }}
          className="w-full max-w-5xl"
        >
          <h1 className="font-display font-black text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[1.1] sm:leading-[1.02]">
            <span className="bg-gradient-to-b from-[#F3F4F6] via-[#D1D5DB] to-[#9CA3AF] bg-clip-text text-transparent block">
              THE ARCHITECTURE OF
            </span>
            <span className="bg-gradient-to-b from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent block mt-1 drop-shadow-sm drop-shadow-[0_4px_30px_rgba(197,160,89,0.35)]">
              ELITE PERFORMANCE.
            </span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 max-w-2xl sm:max-w-3xl text-sm sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed tracking-normal font-body px-2"
        >
          Central India&apos;s premier private fitness sanctuary. Featuring biomechanically perfected,{" "}
          <span className="text-white font-medium underline decoration-[#c5a059] underline-offset-4">
            Kai Greene certified
          </span>{" "}
          machinery, 10,000-watt acoustic energy, and Scandinavian thermal recovery for discerning athletes.
        </motion.p>

        {/* Hero Interactive CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Day Pass Primary CTA */}
          <button
            onClick={onOpenDayPassModal}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-xl text-xs sm:text-sm font-bold font-tech tracking-wider uppercase text-[#121214] bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#c5a059] shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:shadow-[0_0_45px_rgba(197,160,89,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 sheen-effect"
          >
            <span className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 fill-[#121214] text-[#121214]" />
              Claim Free VIP Day Pass
            </span>
          </button>

          {/* Inspect Gear Button */}
          <a
            href="#kai-greene"
            className="w-full sm:w-auto px-7 sm:px-9 py-4 rounded-xl text-xs sm:text-sm font-semibold font-tech tracking-wider uppercase text-slate-200 glass-panel border border-white/15 hover:border-[#c5a059] hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            Explore The Sanctuary
          </a>
        </motion.div>

        {/* Live Telemetry HUD Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-8 text-xs font-tech text-slate-400 border-t border-white/10 pt-6 max-w-3xl"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400">STATUS:</span>
            <span className="text-white font-bold">OPERATIONAL TODAY</span>
          </div>

          <div className="hidden sm:block text-slate-600">|</div>

          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-[#c5a059]" />
            <span className="text-slate-400">FLOOR DENSITY:</span>
            <span className="text-[#e8c881] font-bold">OPTIMAL TRAINING FLOW</span>
          </div>

          <div className="hidden sm:block text-slate-600">|</div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400">LOCATION:</span>
            <span className="text-white">WRIGHT TOWN, JABALPUR</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#experience"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-8 text-slate-500 hover:text-white transition-colors flex flex-col items-center gap-1 group"
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
