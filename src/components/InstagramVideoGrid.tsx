"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Volume2, VolumeX, Maximize2, ShieldCheck, Sparkles } from "lucide-react";

export default function InstagramVideoGrid() {
  const [activeMuted, setActiveMuted] = useState<{ [key: string]: boolean }>({
    "feed-1": true,
    "feed-2": true,
    "feed-3": true,
    "feed-4": true,
  });

  const [activeModalVideo, setActiveModalVideo] = useState<string | null>(null);

  const feeds = [
    {
      id: "feed-1",
      src: "/assets/facility-video-1.mp4",
      label: "HEAVY IRON LEVERAGES",
      tag: "ISO-LATERAL ARSENAL",
      caption: "Continuous ascending resistance curves through full human range of motion.",
    },
    {
      id: "feed-2",
      src: "/assets/facility-video-2.mp4",
      label: "KAI GREENE CERTIFIED",
      tag: "PRO SPECIFICATION",
      caption: "Engineered for 450KG+ loads with zero-friction pivot bearings.",
    },
    {
      id: "feed-3",
      src: "/assets/facility-video-3.mp4",
      label: "ACOUSTIC ARCHITECTURE",
      tag: "CONCERT-GRADE ENERGY",
      caption: "10,000-watt sound reinforcement and dark luxury ambient lighting.",
    },
    {
      id: "feed-4",
      src: "/assets/facility-video-4.mp4",
      label: "METABOLIC LAB",
      tag: "CARDIO TELEMETRY",
      caption: "Curved manual treadmills and isolated VO2 conditioning suites.",
    },
  ];

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMuted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative w-full bg-[#121214] py-16 sm:py-28 px-5 sm:px-8 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#c5a059]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-slate-300 text-xs font-tech font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
              LIVE TELEMETRY FEED
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-slate-200 leading-tight">
              THE SANCTUARY IN MOTION •{" "}
              <span className="bg-gradient-to-b from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent drop-shadow-sm">
                @MUSCLELABJBP
              </span>
            </h2>
            <p className="mt-3 text-slate-400 text-xs sm:text-sm font-tech max-w-xl">
              An authentic window into Jabalpur&apos;s most disciplined private athletic club.
              Uncompromised biomechanics, personal records, and elite training culture.
            </p>
          </div>

          {/* Action: Premium Gold-Outlined Button */}
          <a
            href="https://instagram.com/musclelabjbp"
            target="_blank"
            rel="noreferrer"
            className="group px-6 py-3.5 rounded-xl border border-[#c5a059] hover:bg-gradient-to-r hover:from-[#c5a059] hover:to-[#e8c881] text-[#c5a059] hover:text-[#121214] font-tech text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.2)] hover:shadow-[0_0_25px_rgba(197,160,89,0.5)] flex items-center justify-center gap-2 shrink-0 sheen-effect"
          >
            <span>Follow The Movement</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 4-Column Video Grid (Responsive for Mobile: Smooth Horizontal Snap Flow, Grid on Desktop) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0 snap-x snap-mandatory no-scrollbar">
          {feeds.map((feed, idx) => (
            <motion.div
              key={feed.id}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.9,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-[280px] xs:w-[320px] sm:w-auto shrink-0 sm:shrink snap-center group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#c5a059]/50 transition-all duration-500 flex flex-col aspect-[9/16] bg-[#18181b] shadow-xl"
            >
              {/* Native Looping Video */}
              <video
                src={feed.src}
                autoPlay
                loop
                muted={activeMuted[feed.id]}
                playsInline
                className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.08] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
              />

              {/* Matte Vignetting Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/20 to-transparent opacity-85 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

              {/* Top Bar Badges & Controls */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                <span className="text-[9px] font-tech font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/70 border border-white/15 text-[#e8c881] backdrop-blur-md">
                  {feed.tag}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={(e) => toggleMute(feed.id, e)}
                    className="p-1.5 rounded-lg bg-black/60 hover:bg-[#c5a059] text-white hover:text-[#121214] transition-all backdrop-blur-md border border-white/10"
                    title={activeMuted[feed.id] ? "Unmute Audio" : "Mute Audio"}
                  >
                    {activeMuted[feed.id] ? (
                      <VolumeX className="w-3.5 h-3.5" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveModalVideo(feed.src)}
                    className="p-1.5 rounded-lg bg-black/60 hover:bg-white text-white hover:text-black transition-all backdrop-blur-md border border-white/10"
                    title="Fullscreen Expand"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Bottom Info HUD */}
              <div className="absolute bottom-3 inset-x-3 z-10 space-y-1">
                <div className="text-xs font-display font-bold uppercase text-white tracking-wide">
                  {feed.label}
                </div>
                <p className="text-[11px] font-tech text-slate-300 leading-snug line-clamp-2">
                  {feed.caption}
                </p>
                <div className="pt-1 flex items-center justify-between text-[10px] font-tech text-[#c5a059]">
                  <span>MUSCLE LAB JBP</span>
                  <span>TAP TO ZOOM</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Guidance Bar */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-4 text-slate-500 font-tech text-[10px] uppercase tracking-widest">
          <span>← Swipe horizontally to explore all feeds →</span>
        </div>
      </div>

      {/* Expanded Modal */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
          <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden border border-[#c5a059]/40 shadow-2xl bg-black">
            <button
              onClick={() => setActiveModalVideo(null)}
              className="absolute top-4 right-4 z-10 px-4 py-1.5 rounded-xl bg-black/70 text-white border border-white/20 text-xs font-tech font-bold uppercase hover:bg-[#c5a059] hover:text-[#121214] transition-colors"
            >
              CLOSE [ESC]
            </button>
            <video
              src={activeModalVideo}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
