"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Phone, ArrowUpRight, ChevronRight, Shield } from "lucide-react";

interface NavbarProps {
  onOpenFranchiseModal?: () => void;
  onOpenDayPassModal?: () => void;
}

export default function Navbar({
  onOpenFranchiseModal,
  onOpenDayPassModal,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Facilities", href: "/facilities" },
    { name: "Founder", href: "/founder" },
    { name: "Franchise", href: "/franchise" },
    { name: "Location", href: "/#location" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-500 flex justify-center"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center' }}
    >
      <nav
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
        className={`mx-auto max-w-7xl w-full transition-all duration-500 rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          scrolled
            ? "backdrop-blur-2xl bg-[#121214]/90 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.85)]"
            : "backdrop-blur-md bg-[#18181b]/60 border border-white/5"
        }`}
      >
        {/* Left: Brand Identity with Official Badge */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden p-0.5 border border-[#c5a059]/40 group-hover:border-[#c5a059] transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.2)] shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Muscle Lab Gym Premium Badge"
              width={48}
              height={48}
              priority
              className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xs sm:text-sm tracking-wider uppercase text-white group-hover:text-[#c5a059] transition-colors">
                MUSCLE LAB
              </span>
              <span className="text-[9px] uppercase font-tech tracking-wider px-1.5 py-0.5 rounded bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/30 font-semibold">
                PRO
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-tech text-slate-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
              <span>WRIGHT TOWN • JABALPUR</span>
            </div>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 tracking-wider font-tech uppercase ${
                  isActive
                    ? "text-[#121214] bg-gradient-to-r from-[#c5a059] to-[#e8c881] font-bold shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right: Premium Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Franchise Portal CTA */}
          <Link
            href="/franchise"
            className="group relative px-4 py-2.5 rounded-xl text-xs font-bold font-tech tracking-wider uppercase text-slate-200 border border-white/15 hover:border-[#c5a059] bg-white/[0.03] hover:bg-[#c5a059]/10 transition-all duration-300 sheen-effect"
          >
            <span className="relative z-10 flex items-center gap-1.5 group-hover:text-[#c5a059] transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              Franchise
            </span>
          </Link>

          {/* Claim Day Pass CTA */}
          <button
            onClick={onOpenDayPassModal}
            className="group relative px-5 py-2.5 rounded-xl text-xs font-bold font-tech tracking-wider uppercase text-[#121214] bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.35)] hover:shadow-[0_0_30px_rgba(197,160,89,0.6)] transition-all duration-300 transform active:scale-95 sheen-effect"
          >
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 fill-[#121214] text-[#121214]" />
              Claim Day Pass
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenDayPassModal}
            className="px-3.5 py-2 text-[11px] font-bold font-tech uppercase rounded-xl bg-gradient-to-r from-[#c5a059] to-[#e8c881] text-[#121214] shadow-[0_0_12px_rgba(197,160,89,0.4)] active:scale-95 transition-transform"
          >
            Pass
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-200 hover:text-white bg-white/5 border border-white/10 active:scale-95 transition-transform"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Drawer (Matte Charcoal & Gold) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-3 top-20 bottom-4 z-50 sm:hidden rounded-3xl glass-panel-gold bg-[#141417]/95 border border-[#c5a059]/30 p-6 shadow-2xl backdrop-blur-2xl flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-tech text-slate-400 uppercase tracking-widest">
                  NAVIGATION DIRECTORY
                </span>
                <span className="text-[10px] font-tech text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/30">
                  FLAGSHIP
                </span>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link, idx) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`p-3.5 rounded-2xl text-sm font-display font-bold uppercase tracking-wider flex items-center justify-between transition-all ${
                        isActive
                          ? "bg-[#c5a059]/15 border border-[#c5a059] text-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.2)]"
                          : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-tech text-slate-500 font-normal">
                          0{idx + 1}
                        </span>
                        {link.name}
                      </span>
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Bottom Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/franchise"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-2xl text-xs font-tech font-bold uppercase tracking-wider text-[#c5a059] border border-[#c5a059]/40 bg-[#c5a059]/10 flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <Sparkles className="w-4 h-4" />
                Franchise &amp; Investment Portal
              </Link>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDayPassModal?.();
                }}
                className="w-full py-4 rounded-2xl text-xs font-tech font-bold uppercase tracking-wider text-[#121214] bg-gradient-to-r from-[#c5a059] via-[#e8c881] to-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.4)] flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <Shield className="w-4 h-4 fill-[#121214]" />
                Claim Free VIP Day Pass
              </button>

              <a
                href="tel:+919425410668"
                className="w-full py-2.5 text-center text-xs font-tech text-slate-400 hover:text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                Direct Hotline: +91 9425410668
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
