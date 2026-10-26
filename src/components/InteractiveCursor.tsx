"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
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

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient Metallic Gold Torch Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(197, 160, 89, 0.05), transparent 75%)`,
        }}
      />

      {/* Precision Metallic Reticle Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-[#c5a059]/60"
        animate={{
          x: mousePosition.x - (isHovered ? 20 : 5),
          y: mousePosition.y - (isHovered ? 20 : 5),
          width: isHovered ? 40 : 10,
          height: isHovered ? 40 : 10,
          backgroundColor: isHovered ? "rgba(197, 160, 89, 0.12)" : "#c5a059",
          borderColor: isHovered ? "#e8c881" : "rgba(197, 160, 89, 0.8)",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.4 }}
      />
    </>
  );
}
