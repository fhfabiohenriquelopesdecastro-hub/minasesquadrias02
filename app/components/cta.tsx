"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] px-6 py-24 sm:py-32">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Pronto para Transformar sua Obra?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#B8BEC4]">
          Solicite seu orçamento gratuito e sem compromisso. Respondemos em até
          24 horas.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="inline-flex h-14 w-full items-center justify-center rounded-lg bg-[#2563EB] px-10 text-base font-semibold text-white transition-all hover:bg-[#1d4ed8] hover:shadow-lg sm:w-auto"
          >
            Solicitar Orçamento
          </a>
          <a
            href="https://wa.me/5531999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-10 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
