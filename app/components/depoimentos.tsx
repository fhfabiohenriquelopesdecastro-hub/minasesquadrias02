"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

/*
  ATENÇÃO: Depoimentos são placeholders de demonstração.
  Não publicar em produção sem substituir por avaliações reais e verificáveis da empresa.
  Depoimento fabricado atribuído a um negócio real é risco reputacional e ético.
*/

const depoimentos = [
  {
    nome: "Carlos A.",
    texto:
      "Excelente atendimento desde o orçamento até a instalação. As portas de alumínio ficaram perfeitas, recomendo!",
    estrelas: 5,
  },
  {
    nome: "Mariana S.",
    texto:
      "Contratei para o box do banheiro e a instalação do guarda-corpo. Pontualidade, limpeza e acabamento impecável.",
    estrelas: 5,
  },
  {
    nome: "Ricardo M.",
    texto:
      "Profissionalismo e transparência. O orçamento foi rápido e o resultado superou minhas expectativas.",
    estrelas: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
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

export default function Depoimentos() {
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
            O Que Dizem Nossos Clientes
          </h2>
          <p className="mt-4 text-lg text-[#B8BEC4]">
            Avaliações de quem já contratou nossos serviços
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {depoimentos.map((dep) => (
            <motion.div
              key={dep.nome}
              variants={cardVariants}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < dep.estrelas
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-[#B8BEC4]">
                &ldquo;{dep.texto}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A0A0A]/10 text-sm font-semibold text-[#0A0A0A]">
                  {dep.nome.charAt(0)}
                </div>
                <span className="font-medium text-[#1C1C1C]">{dep.nome}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
