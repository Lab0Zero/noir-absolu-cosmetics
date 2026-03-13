"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Le Sérum Noir a transformé ma peau en quelques semaines. La texture est incroyablement fine, et les résultats sont visibles dès le matin.",
    author: "Isabelle M.",
    role: "Paris",
  },
  {
    quote:
      "Je n'avais jamais ressenti une telle différence avec un soin. L'Essence Blanche est devenue indispensable dans mon rituel quotidien.",
    author: "Sophie L.",
    role: "Lyon",
  },
  {
    quote:
      "La Crème Absolue est un chef-d'œuvre de formulation. Mon visage n'a jamais été aussi lumineux, même en hiver.",
    author: "Marie-Claire D.",
    role: "Bordeaux",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding-xl border-y border-border">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h6 className="mb-8 sm:mb-10 md:mb-12">Témoignages</h6>

            <div className="min-h-[200px] sm:min-h-[180px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-snug text-foreground italic">
                    &ldquo;{testimonials[active].quote}&rdquo;
                  </p>
                  <div className="mt-6 sm:mt-8">
                    <p className="text-[11px] uppercase tracking-[0.15em] font-medium">
                      {testimonials[active].author}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-foreground-tertiary mt-1">
                      {testimonials[active].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-3 mt-8 sm:mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-[2px] transition-all duration-400 ${
                    i === active
                      ? "w-10 bg-foreground"
                      : "w-4 bg-foreground-muted hover:bg-foreground-tertiary"
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
