"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Phone, MapPin, Sparkles, Shield } from "lucide-react";

interface FooterProps {
  onOpenFranchiseModal?: () => void;
  onOpenDayPassModal?: () => void;
}

export default function Footer({ onOpenFranchiseModal, onOpenDayPassModal }: FooterProps) {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(now.toLocaleTimeString("en-IN", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#0e0e11] border-t border-white/5 pt-16 pb-12 px-5 sm:px-8 text-slate-400 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#c5a059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Tier: Brand, Tagline & Direct CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden p-0.5 border border-[#c5a059]/40 relative shadow-[0_0_15px_rgba(197,160,89,0.25)] shrink-0">
                <Image
                  src="/assets/logo.png"
                  alt="Muscle Lab Official Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white tracking-widest uppercase">
                  MUSCLE LAB FITNESS
                </div>
                <div className="text-xs font-tech text-[#c5a059] tracking-wider uppercase font-semibold">
                  THE IRON SANCTUARY • JABALPUR
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed font-body">
              The Ultimate Iron Sanctuary &amp; High-Performance Training Ground in Wright Town,
              Jabalpur. Official biomechanically perfected equipment certified and endorsed by Kai Greene.
              Founded by Advocate Harsh Jain.
            </p>

            {/* Live IST Telemetry Clock & Coordinates */}
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs font-tech text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>JABALPUR (23.16° N, 79.93° E)</span>
              <span className="text-slate-600">|</span>
              <span className="text-[#c5a059] font-bold">{istTime ? `${istTime} IST` : "LIVE IST"}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-tech text-white uppercase tracking-widest font-bold">
              EXPLORE DIRECTORY
            </div>
            <ul className="space-y-2 text-xs font-tech">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  [ 01 ] Home Deck
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-white transition-colors">
                  [ 02 ] Premium Facilities
                </Link>
              </li>
              <li>
                <Link href="/founder" className="hover:text-white transition-colors">
                  [ 03 ] Founder Profile
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="hover:text-white transition-colors">
                  [ 04 ] Franchise Portal
                </Link>
              </li>
              <li>
                <a href="/#location" className="hover:text-white transition-colors">
                  [ 05 ] Wright Town Facility
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Action Cards */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-tech text-white uppercase tracking-widest font-bold">
              OFFICIAL CHANNELS
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href="https://instagram.com/musclelabjbp"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl glass-panel hover:border-[#c5a059] hover:bg-[#c5a059]/5 transition-all flex items-center justify-between text-slate-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#c5a059] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-xs font-tech">@musclelabjbp</span>
                </div>
                <span className="text-[10px] font-tech text-slate-500 group-hover:text-[#c5a059]">
                  FOLLOW ON IG &rarr;
                </span>
              </a>

              <a
                href="tel:+919425410668"
                className="p-3 rounded-xl glass-panel hover:border-[#c5a059] hover:bg-[#c5a059]/5 transition-all flex items-center justify-between text-slate-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span className="text-xs font-tech">+91 9425410668</span>
                </div>
                <span className="text-[10px] font-tech text-slate-500 group-hover:text-[#c5a059]">
                  DIRECT LINE &rarr;
                </span>
              </a>

              <button
                onClick={onOpenDayPassModal}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#c5a059] text-[#121214] text-xs font-tech font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(197,160,89,0.35)] hover:brightness-110 transition-all flex items-center justify-center gap-2 sheen-effect"
              >
                <Shield className="w-4 h-4 fill-[#121214]" />
                Claim Free Day Pass
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech">
          <div className="text-slate-400 text-center sm:text-left">
            &copy; 2026 Muscle Lab Fitness. All rights reserved. Certified by Kai Greene. Founded by Harsh Jain.
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/franchise"
              className="text-slate-400 hover:text-[#c5a059] transition-colors uppercase tracking-wider"
            >
              Franchise Portal
            </Link>
            <span className="text-slate-600">|</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 group"
              title="Return to top"
            >
              <span className="text-[11px] uppercase tracking-wider font-tech">TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#c5a059]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
