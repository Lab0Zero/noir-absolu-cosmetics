"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Ritual {
  step: string;
  title: string;
  description: string;
  product: string;
  duration: string;
}

const rituals: Ritual[] = [
  {
    step: "01",
    title: "Le Nettoyage",
    description:
      "Le Baume Fondant Noir dissout les impuretés en douceur. Texture onctueuse qui se transforme en lait au contact de l'eau.",
    product: "Baume Fondant Noir — 120€",
    duration: "2 min",
  },
  {
    step: "02",
    title: "L'Essence",
    description:
      "L'Essence Blanche prépare la peau à recevoir les soins. Booste l'éclat instantanément grâce au complexe de perles microscopiques.",
    product: "Essence Blanche — 195€",
    duration: "30 sec",
  },
  {
    step: "03",
    title: "Le Sérum",
    description:
      "Le Sérum Noir, notre iconique, pénètre en profondeur. 21 actifs concentrés pour une régénération cellulaire visible en 14 jours.",
    product: "Sérum Noir — 285€",
    duration: "1 min",
  },
  {
    step: "04",
    title: "La Crème",
    description:
      "La Crème Absolue scelle l'hydratation. Texture fondante qui enveloppe la peau d'un voile protecteur invisible.",
    product: "Crème Absolue — 340€",
    duration: "1 min",
  },
];

export default function RitualCarousel() {
  const [active, setActive] = useState(0);
  const ritual = rituals[active];

  return (
    <section id="rituels" className="section-padding">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h6 className="mb-3">Rituel</h6>
            <h2>
              Le rituel<br />
              <span className="italic font-light normal-case tracking-normal">
                en quatre gestes
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps navigation */}
        <ScrollReveal>
          <div className="flex justify-center gap-0 mb-10 sm:mb-12 md:mb-16 border-b border-border">
            {rituals.map((r, i) => (
              <button
                key={r.step}
                onClick={() => setActive(i)}
                className={`relative px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  i === active
                    ? "text-foreground"
                    : "text-foreground-tertiary hover:text-foreground-secondary"
                }`}
              >
                <span className="hidden sm:inline mr-2 text-foreground-muted">{r.step}</span>
                {r.title}
                {i === active && (
                  <motion.div
                    layoutId="ritual-tab"
                    className="absolute bottom-0 left-0 right-0 h-px bg-foreground"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left: text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-baseline gap-4 mb-4 sm:mb-6">
                <span className="text-5xl sm:text-6xl md:text-7xl font-extralight text-foreground/10">
                  {ritual.step}
                </span>
                <h3 className="text-xl sm:text-2xl">{ritual.title}</h3>
              </div>

              <p className="text-foreground-secondary font-light leading-relaxed text-base sm:text-lg max-w-lg">
                {ritual.description}
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                <span className="text-sm font-light text-foreground-secondary">
                  {ritual.product}
                </span>
                <span className="hidden sm:block w-px h-4 bg-border" />
                <span className="text-[11px] uppercase tracking-[0.15em] text-foreground-tertiary">
                  {ritual.duration}
                </span>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className="btn-secondary inline-flex"
                >
                  Commander ce soin
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] bg-background-tertiary overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-[0.15em] text-foreground-tertiary">
                  Étape {ritual.step}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10 md:mt-12">
          {rituals.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-[2px] transition-all duration-400 ${
                i === active
                  ? "w-10 bg-foreground"
                  : "w-4 bg-foreground-muted hover:bg-foreground-tertiary"
              }`}
              aria-label={`Étape ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
