"use client";
import { useEffect, useState } from "react";

export default function ScreenFrame() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      // Sample the center of the viewport to detect dark sections
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const el = document.elementFromPoint(centerX, centerY);
      if (!el) return;

      // Walk up the DOM to find the nearest section or element with a background
      let current: Element | null = el;
      while (current && current !== document.body) {
        const bg = window.getComputedStyle(current).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
          // Parse RGB values
          const match = bg.match(/\d+/g);
          if (match) {
            const r = parseInt(match[0]);
            const g = parseInt(match[1]);
            const b = parseInt(match[2]);
            // If luminance is low, it's a dark background
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            setIsDark(luminance < 0.3);
            return;
          }
        }
        current = current.parentElement;
      }
      setIsDark(false);
    };

    checkBackground();
    window.addEventListener("scroll", checkBackground, { passive: true });
    return () => window.removeEventListener("scroll", checkBackground);
  }, []);

  const borderColor = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)";

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none" aria-hidden="true">
      {/* Top */}
      <div
        className="absolute top-0 left-0 right-0 transition-colors duration-700"
        style={{ height: "8px", backgroundColor: borderColor }}
      />
      {/* Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 transition-colors duration-700"
        style={{ height: "8px", backgroundColor: borderColor }}
      />
      {/* Left */}
      <div
        className="absolute top-0 bottom-0 left-0 transition-colors duration-700"
        style={{ width: "8px", backgroundColor: borderColor }}
      />
      {/* Right */}
      <div
        className="absolute top-0 bottom-0 right-0 transition-colors duration-700"
        style={{ width: "8px", backgroundColor: borderColor }}
      />
    </div>
  );
}
