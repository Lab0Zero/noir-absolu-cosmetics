"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function EditorialDuo() {
  return (
    <section id="soins" className="section-padding bg-background-secondary frame-light">
      <div className="container-site">
        <ScrollReveal>
          <h6 className="mb-6 sm:mb-8 text-center">L&apos;excellence</h6>
        </ScrollReveal>

        {/* First editorial block: image left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <ScrollReveal>
            <div className="relative aspect-[4/5] bg-background-tertiary overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-[0.15em] text-foreground-tertiary">
                  Image éditoriale
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 bg-white">
              <p className="section-label mb-6">Savoir-faire</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl">
                La précision<br />
                <span className="italic font-light normal-case tracking-normal">
                  d&apos;un geste ancestral
                </span>
              </h2>
              <p className="mt-5 sm:mt-6 text-foreground-secondary font-light leading-relaxed max-w-md">
                Chaque formule est le fruit de trois années de recherche.
                Nos maîtres formulateurs sélectionnent les actifs les plus purs,
                issus de terroirs d&apos;exception à travers le monde.
              </p>
              <div className="mt-6 sm:mt-8">
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-300"
                >
                  Explorer notre savoir-faire
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Second editorial block: text left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-px">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 bg-white order-2 md:order-1">
              <p className="section-label mb-6">Engagement</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl">
                Le noir et blanc<br />
                <span className="italic font-light normal-case tracking-normal">
                  de la pureté
                </span>
              </h2>
              <p className="mt-5 sm:mt-6 text-foreground-secondary font-light leading-relaxed max-w-md">
                Notre palette chromatique est un manifeste. Le noir de l&apos;élégance absolue,
                le blanc de la pureté des ingrédients. Rien de superflu.
                L&apos;essentiel, magnifié.
              </p>

              {/* Stats row */}
              <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 border-t border-border pt-6 sm:pt-8">
                {[
                  { value: "97%", label: "Ingrédients naturels" },
                  { value: "21", label: "Actifs par formule" },
                  { value: "3 ans", label: "De recherche" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-foreground-tertiary">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 md:order-2">
            <div className="relative aspect-[4/5] bg-background-tertiary overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-[0.15em] text-foreground-tertiary">
                  Image éditoriale
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
