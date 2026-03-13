"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
      {/* Background decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-border/30" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-border/30 hidden md:block" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-border/30" />
      </div>

      <div className="container-site text-center relative z-10 pt-20 md:pt-0">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="section-label mb-6 sm:mb-8"
        >
          Paris — Haute Cosmétique
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[900px] mx-auto"
        >
          L&apos;art du soin<br />
          <span className="font-light italic normal-case tracking-normal">sublimé</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 sm:mt-8 text-foreground-secondary text-base sm:text-lg max-w-[480px] mx-auto leading-relaxed font-light"
        >
          Des formules d&apos;exception, conçues dans nos laboratoires parisiens.
          Le luxe à l&apos;état pur.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#collections" className="btn-primary w-full sm:w-auto">
            Découvrir la collection
          </Link>
          <Link href="#maison" className="btn-secondary w-full sm:w-auto">
            Notre maison
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 sm:mt-20 md:mt-28"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground-tertiary">
              Défiler
            </span>
            <div className="w-px h-8 bg-foreground-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
