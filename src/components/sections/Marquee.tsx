"use client";

const words = [
  "Sérum Noir",
  "Essence Blanche",
  "Crème Absolue",
  "Élixir de Nuit",
  "Huile Précieuse",
  "Masque d'Or",
  "Eau de Soin",
  "Baume Réparateur",
];

export default function Marquee() {
  return (
    <section className="py-8 sm:py-12 md:py-16 border-y border-border overflow-hidden">
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-marquee items-center">
          {[...words, ...words, ...words, ...words].map((word, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight uppercase tracking-wider text-foreground/10 whitespace-nowrap px-4 sm:px-6 md:px-8">
                {word}
              </span>
              <span className="text-foreground/10 text-lg">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
