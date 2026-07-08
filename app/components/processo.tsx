"use client";

import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, Factory, HardHat } from "lucide-react";

const etapas = [
  {
    icon: MessageCircle,
    title: "Contato",
    description:
      "Você entra em contato pelo WhatsApp, telefone ou formulário e conta sobre seu projeto.",
  },
  {
    icon: ClipboardCheck,
    title: "Visita Técnica",
    description:
      "Vamos até o local para tirar medidas, entender suas necessidades e oferecer a melhor solução.",
  },
  {
    icon: Factory,
    title: "Produção",
    description:
      "Produzimos sob medida na nossa fábrica com matéria-prima de qualidade e acabamento premium.",
  },
  {
    icon: HardHat,
    title: "Instalação",
    description:
      "Equipe especializada realiza a instalação com segurança, precisão e mínimo de sujeira.",
  },
];

export default function Processo() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl">
            Como Funciona
          </h2>
          <p className="mt-4 text-lg text-[#B8BEC4]">
            Da consulta à instalação, um processo simples e transparente
          </p>
        </motion.div>

        <div className="relative grid gap-12 md:grid-cols-4 md:gap-0">
          <div className="absolute left-1/2 top-16 hidden h-0.5 w-[75%] -translate-x-1/2 bg-gray-200 md:block" />

          {etapas.map((etapa, index) => {
            const Icon = etapa.icon;
            return (
              <motion.div
                key={etapa.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#0A0A0A] text-white shadow-lg">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="mt-2 flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-[#0A0A0A]">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1C1C1C]">
                  {etapa.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#B8BEC4]">
                  {etapa.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
