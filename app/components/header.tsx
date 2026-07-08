"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center">
          <img
            src="/assets/brand/logo-cliente.png"
            alt="Minas Esquadrias"
            className="h-16 w-auto rounded object-contain"
          />
        </a>

        <a
          href="https://wa.me/5531999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#1d4ed8]"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Fale Conosco</span>
        </a>
      </div>
    </header>
  );
}
