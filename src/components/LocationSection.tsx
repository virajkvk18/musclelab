"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Compass,
  ExternalLink,
  Building,
  Car,
  Shield,
} from "lucide-react";

export default function LocationSection() {
  const googleMapsUrl = "https://maps.app.goo.gl/6RtbrFD79c9cikYP9?g_st=ic";

  return (
    <section id="location" className="relative w-full bg-[#121214] py-16 sm:py-28 px-5 sm:px-8 border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-subtle opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#c5a059]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#c5a059]/30 text-slate-300 text-xs font-tech font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
            <Compass className="w-3.5 h-3.5 text-[#c5a059]" />
            FACILITY HEADQUARTERS &amp; HUD
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
            LOCATE THE{" "}
            <span className="bg-gradient-to-b from-[#FDE08B] via-[#C5A059] to-[#8C6D31] bg-clip-text text-transparent drop-shadow-sm">
              SANCTUARY
            </span>
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm font-tech">
            Conveniently situated in the heart of Wright Town, Jabalpur.
          </p>
        </div>

        {/* 2-Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Panel: Address & Direct Contact Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden bg-[#151518]">
            <div className="space-y-6">
              {/* Status Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-tech text-[#c5a059] font-bold uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Jabalpur Flagship
                </span>
                <span className="text-[11px] font-tech text-slate-400">
                  PINCODE: 482002
                </span>
              </div>

              {/* Exact Address */}
              <div className="space-y-2">
                <div className="text-xs font-tech text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#c5a059]" />
                  Exact Facility Address
                </div>
                <div className="font-display font-bold text-lg sm:text-xl text-white leading-snug">
                  1st Floor, Jain Heights,
                  <br />
                  <span className="text-[#e8c881]">In Front of Saptrishi Hospital,</span>
                  <br />
                  Wright Town, Jabalpur, MP 482002
                </div>
              </div>

              {/* Facility Amenities */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5">
                  <Building className="w-4 h-4 text-[#c5a059]" />
                  <span className="text-xs font-tech text-slate-300">1st Floor Elevator</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-[#e8c881]" />
                  <span className="text-xs font-tech text-slate-300">Member Parking</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-tech text-slate-300">6:00 AM – 10:30 PM</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-slate-300" />
                  <span className="text-xs font-tech text-slate-300">Biometric Entry</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919425410668"
                className="flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#e8c881] hover:brightness-110 text-[#121214] font-tech text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all sheen-effect"
              >
                <Phone className="w-4 h-4" />
                Call +91 9425410668
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 px-5 rounded-xl glass-panel hover:bg-white/10 text-white border border-white/15 hover:border-[#c5a059] font-tech text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4 text-[#c5a059]" />
                Open In Maps
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Panel: Map Preview & Operational Hours */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden bg-[#151518]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-tech text-[#c5a059] uppercase tracking-widest font-bold">
                  SATELLITE TELEMETRY // WRIGHT TOWN
                </span>
                <h3 className="font-display font-bold text-lg text-white uppercase mt-0.5">
                  OPERATIONAL HOURS &amp; ACCESS
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-tech font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                FACILITY OPEN TODAY
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="space-y-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-tech text-white font-bold uppercase">
                    Monday – Saturday
                  </span>
                  <span className="text-[10px] font-tech text-slate-400 hidden sm:inline">
                    (Full Floor &amp; Heavy Iron Access)
                  </span>
                </div>
                <span className="text-xs font-tech text-[#c5a059] font-bold">
                  06:00 AM – 10:30 PM
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-tech text-white font-bold uppercase">
                    Sunday
                  </span>
                  <span className="text-[10px] font-tech text-slate-400 hidden sm:inline">
                    (Recovery &amp; Open Training)
                  </span>
                </div>
                <span className="text-xs font-tech text-slate-300 font-bold">
                  07:00 AM – 01:00 PM
                </span>
              </div>
            </div>

            {/* Embedded Dark Map Simulation */}
            <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/10 bg-[#0e0e12] group">
              <div className="absolute inset-0 bg-grid-subtle opacity-30" />

              <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 60 Q 200 80 500 40 T 900 120" stroke="#c5a059" strokeWidth="2" fill="none" strokeDasharray="6 6" />
                <path d="M 120 0 L 180 300" stroke="#475569" strokeWidth="3" fill="none" />
                <path d="M 320 0 L 290 300" stroke="#475569" strokeWidth="4" fill="none" />
                <path d="M 0 160 L 600 180" stroke="#475569" strokeWidth="4" fill="none" />
              </svg>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75"></span>
                  <div className="relative p-2.5 rounded-full bg-[#c5a059] text-[#121214] shadow-[0_0_25px_rgba(197,160,89,0.9)] border-2 border-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2 px-3 py-1 rounded-lg bg-black/90 border border-[#c5a059] text-[10px] font-tech text-white font-bold shadow-xl">
                  MUSCLE LAB • 1ST FLOOR JAIN HEIGHTS
                </div>
              </div>

              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-black/70 border border-white/10 text-[10px] font-tech text-slate-300">
                Opposite: Saptrishi Hospital
              </div>
              <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-black/70 border border-white/10 text-[10px] font-tech text-[#c5a059]">
                Wright Town Main Commercial Road
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-tech text-xs font-bold uppercase tracking-wider"
              >
                <span>Launch Turn-By-Turn In Google Maps</span>
                <ExternalLink className="w-4 h-4 text-[#c5a059]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
