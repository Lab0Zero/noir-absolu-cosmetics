import Link from "next/link";

const footerLinks = {
  Collections: [
    { label: "Le Sérum Noir", href: "#" },
    { label: "L'Essence Blanche", href: "#" },
    { label: "Le Soin Absolu", href: "#" },
  ],
  "La Maison": [
    { label: "Notre Histoire", href: "#" },
    { label: "Savoir-faire", href: "#" },
    { label: "Engagements", href: "#" },
  ],
  Services: [
    { label: "Consultation privée", href: "#" },
    { label: "Diagnostic de peau", href: "#" },
    { label: "Livraison", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background-dark text-foreground-light frame-dark">
      <div className="container-site py-12 sm:py-16 md:py-20 lg:py-28">
        {/* Top: Logo + tagline */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <p className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase">
            Noir Absolu
          </p>
          <p className="mt-4 text-sm text-foreground-tertiary font-light tracking-wide max-w-md">
            L&apos;excellence de la cosmétique française, sublimée par la pureté du noir et du blanc.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid gap-8 sm:gap-10 grid-cols-2 md:grid-cols-4">
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground-tertiary mb-4 sm:mb-6">
                {cat}
              </p>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground-muted hover:text-white transition-colors duration-300 inline-block"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground-tertiary mb-4 sm:mb-6">
              Newsletter
            </p>
            <p className="text-sm text-foreground-muted mb-4">
              Recevez nos dernières créations en avant-première.
            </p>
            <div className="flex border-b border-foreground-tertiary/30">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-transparent text-sm text-white placeholder-foreground-tertiary py-3 w-full outline-none"
              />
              <button className="text-[11px] uppercase tracking-[0.15em] text-foreground-tertiary hover:text-white transition-colors shrink-0 pl-4">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-6 border-t border-foreground-tertiary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-foreground-tertiary tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} Noir Absolu Paris. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-[11px] text-foreground-tertiary hover:text-white transition-colors tracking-wider"
            >
              Mentions légales
            </Link>
            <Link
              href="#"
              className="text-[11px] text-foreground-tertiary hover:text-white transition-colors tracking-wider"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
