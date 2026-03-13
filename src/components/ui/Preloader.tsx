"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [phase, setPhase] = useState<"cream" | "text" | "exit" | "done">("cream");

  useEffect(() => {
    // Phase 1: cream spreads (0 -> 1.2s)
    // Phase 2: text appears (1.2s -> 2.8s)
    // Phase 3: exit (2.8s -> 3.6s)
    const t1 = setTimeout(() => setPhase("text"), 1200);
    const t2 = setTimeout(() => setPhase("exit"), 2800);
    const t3 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 3600);

    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          {/* SVG cream spread effect */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Cream blob mask — morphing organic shape */}
              <clipPath id="cream-clip">
                <motion.ellipse
                  cx="720"
                  cy="450"
                  initial={{ rx: 0, ry: 0 }}
                  animate={
                    phase === "cream"
                      ? { rx: 120, ry: 80 }
                      : phase === "text"
                        ? { rx: 900, ry: 600 }
                        : { rx: 1200, ry: 800 }
                  }
                  transition={
                    phase === "cream"
                      ? { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }
                      : phase === "text"
                        ? { duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }
                        : { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
                  }
                />
              </clipPath>

              {/* Turbulence filter for organic cream texture */}
              <filter id="cream-texture">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.015"
                  numOctaves="4"
                  seed="3"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="35"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>

            {/* Cream spread — white organic blob */}
            <g filter="url(#cream-texture)" clipPath="url(#cream-clip)">
              <rect width="1440" height="900" fill="#F5F0EB" />
            </g>
          </svg>

          {/* Secondary cream blobs for organic feel */}
          <motion.div
            className="absolute"
            style={{
              width: "60vw",
              height: "60vw",
              maxWidth: "600px",
              maxHeight: "600px",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(245,240,235,0.5) 0%, rgba(245,240,235,0.15) 40%, transparent 70%)",
              filter: "blur(30px)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={
              phase === "cream"
                ? { scale: 0.6, opacity: 0.6 }
                : phase === "text"
                  ? { scale: 2.5, opacity: 0.3 }
                  : { scale: 4, opacity: 0 }
            }
            transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          />

          {/* Smaller satellite cream blobs */}
          {[
            { x: "-15vw", y: "-8vh", delay: 0.3, size: "30vw" },
            { x: "18vw", y: "12vh", delay: 0.5, size: "25vw" },
            { x: "-10vw", y: "15vh", delay: 0.4, size: "20vw" },
          ].map((blob, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: blob.size,
                height: blob.size,
                maxWidth: "300px",
                maxHeight: "300px",
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse, rgba(245,240,235,0.4) 0%, transparent 70%)",
                filter: "blur(25px)",
                x: blob.x,
                y: blob.y,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={
                phase === "cream"
                  ? { scale: 0.4, opacity: 0.5 }
                  : phase === "text"
                    ? { scale: 2, opacity: 0.2 }
                    : { scale: 3, opacity: 0 }
              }
              transition={{
                duration: 1.6,
                delay: blob.delay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          ))}

          {/* "NOIR ABSOLU" text — revealed by the cream */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0 }}
            animate={
              phase === "text" || phase === "exit"
                ? { opacity: 1 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Text with mix-blend-mode to interact with cream */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight uppercase tracking-[0.3em] sm:tracking-[0.4em]"
              style={{
                color: "#0A0A0A",
                mixBlendMode: "difference",
                letterSpacing: "0.4em",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={
                phase === "text" || phase === "exit"
                  ? { y: 0, opacity: 1 }
                  : { y: 20, opacity: 0 }
              }
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              Noir
            </motion.h1>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight uppercase tracking-[0.3em] sm:tracking-[0.4em] mt-1 sm:mt-2"
              style={{
                color: "#0A0A0A",
                mixBlendMode: "difference",
                letterSpacing: "0.4em",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={
                phase === "text" || phase === "exit"
                  ? { y: 0, opacity: 1 }
                  : { y: 20, opacity: 0 }
              }
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              Absolu
            </motion.h1>

            {/* Thin line under the text */}
            <motion.div
              className="mx-auto mt-6 sm:mt-8 bg-current"
              style={{
                height: "1px",
                mixBlendMode: "difference",
                color: "#0A0A0A",
              }}
              initial={{ width: 0 }}
              animate={
                phase === "text" || phase === "exit"
                  ? { width: 80 }
                  : { width: 0 }
              }
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
