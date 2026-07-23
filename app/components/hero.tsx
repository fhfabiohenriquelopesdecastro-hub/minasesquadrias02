import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/brand/hero-cliente.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 text-center">
        <h1 className="hero-fade-in mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Esquadrias e Vidros{" "}
          <span className="text-[#2563EB]">Sob Medida</span> para sua Obra
        </h1>

        <p className="hero-fade-in mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#B8BEC4] sm:text-xl">
          Qualidade, acabamento premium e atendimento personalizado em Ibirité e
          região. Sua obra merece o melhor em esquadrias de alumínio e vidros.
        </p>

        <div className="hero-fade-in mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="inline-flex h-14 w-full items-center justify-center rounded-lg bg-[#2563EB] px-10 text-base font-semibold text-white transition-all hover:bg-[#1d4ed8] hover:shadow-lg sm:w-auto"
          >
            Solicitar Orçamento
          </a>
          <a
            href="https://wa.me/5534996354848"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-10 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* 
        Placeholder de telefone — número genérico de segmento.
        Substituir pelo telefone real da empresa.
      */}
      <a
        href="https://wa.me/5534996354848"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-lg transition-all hover:bg-[#1d4ed8] hover:shadow-xl"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </section>
  );
}
