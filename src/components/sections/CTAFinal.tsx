"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAFinal() {
  return (
    <section id="contact" className="section-padding-xl frame-light">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <h6 className="mb-6 sm:mb-8">Rendez-vous privé</h6>
          <h2 className="max-w-2xl mx-auto">
            Votre diagnostic<br />
            <span className="italic font-light normal-case tracking-normal">
              personnalisé
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-foreground-secondary font-light text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            Nos experts vous accompagnent pour créer votre rituel sur-mesure.
            En boutique ou en visioconférence.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#" className="btn-primary w-full sm:w-auto">
              Prendre rendez-vous
            </Link>
            <Link href="#" className="btn-secondary w-full sm:w-auto">
              Nous contacter
            </Link>
          </div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 sm:mt-16 md:mt-20 flex justify-center"
        >
          <div className="w-px h-16 sm:h-20 bg-border" />
        </motion.div>
      </div>
    </section>
  );
}
