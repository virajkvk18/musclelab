"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Smooth spring physics for organic, Apple-tier tracking
  const mouseX = useSpring(-100, { stiffness: 450, damping: 30, mass: 0.4 });
  const mouseY = useSpring(-100, { stiffness: 450, damping: 30, mass: 0.4 });

  useEffect(() => {
    // Disable completely on mobile / touch viewports
    if (typeof window === "undefined") return;

    const checkTouch = () => {
      const isTouch =
        window.matchMedia("(pointer: coarse)").matches ||
        window.innerWidth <= 768;
      setIsTouchDevice(isTouch);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("[role='button']") ||
        target?.tagName === "INPUT" ||
        target?.tagName === "SELECT" ||
        target?.tagName === "TEXTAREA"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", checkTouch);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Ambient Radial Sheen Spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-500"
        style={{
          background: `radial-gradient(550px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(197, 160, 89, 0.04), transparent 75%)`,
        }}
      />

      {/* Dumbbell Icon Cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.4 : 1,
          width: isHovered ? 44 : 32,
          height: isHovered ? 44 : 32,
          backgroundColor: isHovered
            ? "rgba(197, 160, 89, 0.2)"
            : "rgba(18, 18, 20, 0.75)",
          borderColor: isHovered ? "#FDE08B" : "rgba(197, 160, 89, 0.6)",
          boxShadow: isHovered
            ? "0 0 25px rgba(197, 160, 89, 0.6)"
            : "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 30 }}
      >
        <div className="border border-inherit rounded-full w-full h-full flex items-center justify-center backdrop-blur-md">
          {/* Metallic Dumbbell SVG */}
          <svg
            className={`transition-colors duration-300 ${
              isHovered ? "w-5 h-5 text-[#FDE08B]" : "w-4 h-4 text-[#D1D5DB]"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left Plates */}
            <rect x="2" y="7" width="2" height="10" rx="1" fill="currentColor" />
            <rect x="5" y="5" width="2.5" height="14" rx="1" fill="currentColor" />
            {/* Center Bar */}
            <line
              x1="7.5"
              y1="12"
              x2="16.5"
              y2="12"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Right Plates */}
            <rect x="16.5" y="5" width="2.5" height="14" rx="1" fill="currentColor" />
            <rect x="20" y="7" width="2" height="10" rx="1" fill="currentColor" />
          </svg>
        </div>
      </motion.div>
    </>
  );
}
