"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Ingredient {
  name: string;
  origin: string;
  benefit: string;
}

const ingredients: Ingredient[] = [
  {
    name: "Or 24 carats",
    origin: "Suisse",
    benefit: "Régénération cellulaire et éclat incomparable",
  },
  {
    name: "Perle noire de Tahiti",
    origin: "Polynésie française",
    benefit: "Luminosité profonde et protection anti-oxydante",
  },
  {
    name: "Rose de Mai",
    origin: "Grasse, France",
    benefit: "Apaisement et nutrition intense de l'épiderme",
  },
  {
    name: "Acide hyaluronique",
    origin: "Bio-fermentation",
    benefit: "Hydratation en profondeur sur 72 heures",
  },
  {
    name: "Rétinol encapsulé",
    origin: "Laboratoire Paris",
    benefit: "Lissage des rides et renouvellement cutané",
  },
  {
    name: "Beurre de karité",
    origin: "Burkina Faso",
    benefit: "Nutrition suprême et barrière protectrice",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Ingredients() {
  return (
    <section className="section-padding bg-background-dark text-foreground-light grain-overlay frame-dark">
      <div className="container-site relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h6 className="mb-3 text-foreground-tertiary">Ingrédients</h6>
            <h2 className="text-white">
              La noblesse<br />
              <span className="italic font-light normal-case tracking-normal">
                des matières premières
              </span>
            </h2>
            <p className="mt-4 sm:mt-5 text-foreground-tertiary font-light max-w-md mx-auto">
              Chaque ingrédient est sélectionné pour sa pureté et son efficacité prouvée.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="divide-y divide-white/10"
        >
          {ingredients.map((ingredient) => (
            <motion.div
              key={ingredient.name}
              variants={fadeUp}
              className="group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-5 sm:py-6 md:py-8 cursor-default transition-colors duration-300 hover:bg-white/[0.03]"
            >
              <div className="sm:col-span-4 md:col-span-3">
                <h3 className="text-white text-sm sm:text-base tracking-[0.05em] font-normal normal-case group-hover:tracking-[0.08em] transition-all duration-300">
                  {ingredient.name}
                </h3>
              </div>
              <div className="sm:col-span-3 md:col-span-2">
                <p className="text-[11px] uppercase tracking-[0.15em] text-foreground-tertiary">
                  {ingredient.origin}
                </p>
              </div>
              <div className="sm:col-span-5 md:col-span-7">
                <p className="text-sm text-foreground-muted font-light leading-relaxed">
                  {ingredient.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
