"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  pergunta: string;
  resposta: string;
}

const faqs: FaqItem[] = [
  {
    pergunta: "Quanto tempo leva para produzir e instalar?",
    resposta:
      "O prazo varia conforme a complexidade do projeto. Em média, após a visita técnica, a produção leva de 7 a 15 dias úteis, e a instalação é feita em 1 a 2 dias.",
  },
  {
    pergunta: "Vocês atendem em toda a região metropolitana de BH?",
    resposta:
      "Sim, atendemos em Ibirité e toda a região metropolitana de Belo Horizonte. Entre em contato para verificar a disponibilidade para sua localidade.",
  },
  {
    pergunta: "O orçamento é cobrado?",
    resposta:
      "Não. O orçamento é gratuito e sem compromisso. Fazemos a visita técnica e enviamos a proposta sem nenhum custo.",
  },
  {
    pergunta: "Quais formas de pagamento são aceitas?",
    resposta:
      "Aceitamos dinheiro, transferência bancária, PIX e cartões de crédito/débito. Parcelamos no cartão em até 12x.",
  },
  {
    pergunta: "Vocês dão garantia nos serviços?",
    resposta:
      "Sim. Todos os nossos serviços e produtos contam com garantia contra defeitos de fabricação e instalação. Consulte-nos para mais detalhes.",
  },
  {
    pergunta: "Trabalham com perfis de alumínio de qual marca?",
    resposta:
      "Utilizamos perfis de alumínio de fornecedores certificados do mercado, garantindo resistência, durabilidade e acabamento de qualidade.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-[#B8BEC4]">
            Tire suas principais dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-100 transition-colors hover:border-gray-200"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 text-base font-medium text-[#1C1C1C]">
                  {faq.pergunta}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-[#B8BEC4]"
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-gray-50 px-6 py-5 leading-relaxed text-[#B8BEC4]">
                      {faq.resposta}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
