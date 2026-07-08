"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Transicao() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const bg = useTransform(scrollYProgress, [0, 1], ["#ffffff", "#0A0A0A"]);
  const heading = useTransform(scrollYProgress, [0, 1], ["#0A0A0A", "#ffffff"]);
  const body = useTransform(scrollYProgress, [0, 1], ["#B8BEC4", "#B8BEC4"]);
  const whiteLogoOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, 1, 1]);
  const blackLogoOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [1, 1, 0, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ backgroundColor: bg }}
      className="relative flex min-h-[150vh] items-center justify-center overflow-hidden px-6 py-32"
    >
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="relative mx-auto mb-8 h-20 w-48">
          <motion.img
            src="/assets/brand/logo-preto-transparente.png"
            alt=""
            style={{ opacity: blackLogoOpacity }}
            className="absolute inset-0 h-full w-full object-contain"
            aria-hidden
          />
          <motion.img
            src="/assets/brand/logo-branco-transparente.png"
            alt=""
            style={{ opacity: whiteLogoOpacity }}
            className="absolute inset-0 h-full w-full object-contain"
            aria-hidden
          />
        </div>

        <motion.h2
          style={{ color: heading }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Qualidade que Transforma
        </motion.h2>

        <motion.p
          style={{ color: body }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed"
        >
          Cada projeto é pensado nos mínimos detalhes, do primeiro croqui à
          instalação final. Trabalhamos com materiais certificados e mão de obra
          especializada para entregar resultados que duram.
        </motion.p>
      </div>
    </motion.section>
  );
}
