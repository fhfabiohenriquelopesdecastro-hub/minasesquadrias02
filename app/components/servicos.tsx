"use client";

import { motion } from "framer-motion";
import {
  DoorOpen,
  AppWindow,
  ShowerHead,
  Fence,
  Building2,
  Warehouse,
  Scan,
  GlassWater,
} from "lucide-react";

/*
  Lista de serviços — conteúdo genérico de segmento (esquadrias/vidraçaria).
  Confirmar com a empresa se todos os serviços são oferecidos.
*/

const servicos = [
  { icon: DoorOpen, title: "Portas de Alumínio" },
  { icon: AppWindow, title: "Janelas" },
  { icon: ShowerHead, title: "Box para Banheiro" },
  { icon: Fence, title: "Guarda-Corpo" },
  { icon: Building2, title: "Fachadas" },
  { icon: Warehouse, title: "Coberturas" },
  { icon: Scan, title: "Espelhos" },
  { icon: GlassWater, title: "Envidraçamento" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const placeholders = [
  "https://images.unsplash.com/photo-1661958806634-b73ddfbadaea?w=600&q=75",
  "https://images.unsplash.com/photo-1778222413919-0821c825cfaf?w=600&q=75",
  "https://images.unsplash.com/photo-1763485956293-873ea83bf095?w=600&q=75",
  "https://images.unsplash.com/photo-1763116147214-369ad5ce72eb?w=600&q=75",
  "https://images.unsplash.com/photo-1773924624330-7e7cc51d8838?w=600&q=75",
  "https://images.unsplash.com/photo-1762419757238-28ffcd7e034c?w=600&q=75",
  "https://images.unsplash.com/photo-1674480165857-744dbb4c671f?w=600&q=75",
  "https://images.unsplash.com/photo-1774103341340-471f6524f274?w=600&q=75",
];

/*
  Placeholder de fotos — imagens do Unsplash usadas como demonstração.
  SUBSTITUIR POR FOTO REAL DO CLIENTE de cada serviço prestado.
*/

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-[#B8BEC4]">
            Soluções completas em esquadrias de alumínio e vidros
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {servicos.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
              >
                {/* 
                  SUBSTITUIR POR FOTO REAL DO CLIENTE.
                  Imagem placeholder do Unsplash (arquitetura/moderna).
                */}
                <div
                  className="flex aspect-[4/3] items-center justify-center bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${placeholders[index]}')` }}
                >
                  <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/10" />
                  <Icon className="relative h-12 w-12 text-white/60 transition-all duration-300 group-hover:scale-110 group-hover:text-white/90" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-12">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
