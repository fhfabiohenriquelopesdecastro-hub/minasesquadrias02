"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  Projetos — placeholders de demonstração.
  TODO: Substituir por fotos reais de obras realizadas pela empresa.
*/

interface Projeto {
  id: number;
  titulo: string;
  categoria: string;
  img: string;
}

const categorias = ["Todos", "Residencial", "Comercial", "Fachadas"];

const projetos: Projeto[] = [
  { id: 1, titulo: "Portas de Alumínio", categoria: "Residencial", img: "/assets/work/porta-corredor-01.jpeg" },
  { id: 2, titulo: "Fachada Comercial", categoria: "Fachadas", img: "/assets/work/fachada-comercial-01.jpeg" },
  { id: 3, titulo: "Box Banheiro", categoria: "Residencial", img: "/assets/work/divisoria-vidro-02.jpeg" },
  { id: 4, titulo: "Guarda-Corpo Edifício", categoria: "Comercial", img: "/assets/work/fachada-predio-01.jpeg" },
  { id: 5, titulo: "Envidraçamento Sacada", categoria: "Residencial", img: "/assets/work/janela-esquina-01.jpeg" },
  { id: 6, titulo: "Cobertura Metálica", categoria: "Comercial", img: "/assets/work/estrutura-metalica-01.jpeg" },
  { id: 7, titulo: "Fachada Residencial", categoria: "Fachadas", img: "/assets/work/fachada-residencial-01.jpeg" },
  { id: 8, titulo: "Janelas Panorâmicas", categoria: "Residencial", img: "/assets/work/janela-tijolo-01.jpeg" },
];

export default function Projetos() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos"
      ? projetos
      : projetos.filter((p) => p.categoria === active);

  return (
    <section className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl">
            Projetos Realizados
          </h2>
          <p className="mt-4 text-lg text-[#B8BEC4]">
            Conheça alguns dos nossos trabalhos
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "bg-[#0A0A0A] text-white shadow-md"
                  : "bg-white text-[#1C1C1C] hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((projeto) => (
              <motion.div
                key={projeto.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
              >
                {/* 
                  SUBSTITUIR POR FOTO REAL DO CLIENTE.
                  Imagem placeholder do Unsplash.
                */}
                <div
                  className="flex aspect-[4/3] items-center justify-center bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${projeto.img}')` }}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {projeto.titulo}
                    </h3>
                    <span className="mt-1 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs font-medium text-white/90">
                      {projeto.categoria}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
