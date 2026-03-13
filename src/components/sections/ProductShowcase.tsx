"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Product {
  name: string;
  category: string;
  price: string;
  description: string;
}

const products: Product[] = [
  {
    name: "Le Sérum Noir",
    category: "Anti-âge",
    price: "285€",
    description: "Concentré de 21 actifs rares. Régénération cellulaire intense.",
  },
  {
    name: "L'Essence Blanche",
    category: "Éclat",
    price: "195€",
    description: "Éclat immédiat. Complexe de perles et vitamine C pure.",
  },
  {
    name: "La Crème Absolue",
    category: "Hydratation",
    price: "340€",
    description: "Nutrition suprême. Beurre de karité et acide hyaluronique.",
  },
  {
    name: "L'Élixir de Nuit",
    category: "Régénération",
    price: "420€",
    description: "Renouvellement nocturne. Or 24 carats et rétinol encapsulé.",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function ProductShowcase() {
  return (
    <section id="collections" className="section-padding">
      <div className="container-site">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-12 md:mb-16">
            <div>
              <h6 className="mb-3">Collections</h6>
              <h2>Nos créations<br />d&apos;exception</h2>
            </div>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-foreground-secondary hover:text-foreground transition-colors"
            >
              Voir toute la collection
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border"
        >
          {products.map((product) => (
            <motion.div key={product.name} variants={fadeUp}>
              <a href="#" className="group block bg-white p-5 sm:p-6 md:p-8 transition-colors duration-500 hover:bg-background-secondary">
                {/* Image placeholder */}
                <div className="relative overflow-hidden aspect-[3/4] bg-background-tertiary mb-5 sm:mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-foreground-tertiary">
                      {product.name}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                </div>

                {/* Category */}
                <p className="text-[10px] uppercase tracking-[0.2em] text-foreground-tertiary mb-2">
                  {product.category}
                </p>

                {/* Name + Price */}
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-sm tracking-[0.1em]">{product.name}</h3>
                  <span className="text-sm text-foreground-secondary shrink-0">{product.price}</span>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-foreground-secondary leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Link */}
                <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Découvrir</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
