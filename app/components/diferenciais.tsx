"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Headset,
  Zap,
  ShieldCheck,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

/*
  Diferenciais listados no AGENTS.md.
  TODO: Confirmar com a empresa se todos se aplicam à operação real.
  "Fabricação própria" tem lastro no CNPJ (atividade: fabricação de esquadrias de metal)
  mas não confirma se a produção é local ou terceirizada.
*/

const diferenciais = [
  {
    icon: Factory,
    title: "Fabricação Própria",
    description:
      "Produzimos sob medida na nossa própria estrutura, garantindo qualidade e prazo.",
  },
  {
    icon: Headset,
    title: "Atendimento Especializado",
    description:
      "Equipe técnica pronta para entender seu projeto e oferecer a melhor solução.",
  },
  {
    icon: Zap,
    title: "Orçamento Rápido",
    description:
      "Solicite seu orçamento e receba uma proposta personalizada em até 24 horas.",
  },
  {
    icon: ShieldCheck,
    title: "Instalação Profissional",
    description:
      "Equipe experiente e capacitada para instalar com segurança e acabamento impecável.",
  },
  {
    icon: Sparkles,
    title: "Excelente Acabamento",
    description:
      "Padrão de qualidade em cada detalhe, do corte à finalização da instalação.",
  },
  {
    icon: BadgeCheck,
    title: "Garantia",
    description:
      "Todos os serviços e produtos contam com garantia para sua tranquilidade.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl">
            Nossos Diferenciais
          </h2>
          <p className="mt-4 text-lg text-[#B8BEC4]">
            Por que escolher a Minas Esquadrias para seu projeto
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {diferenciais.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:border-gray-200 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A0A0A]/5 text-[#0A0A0A] transition-colors group-hover:bg-[#0A0A0A] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#1C1C1C]">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-[#B8BEC4]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
