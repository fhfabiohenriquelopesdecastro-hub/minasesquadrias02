import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

/*
  Informações de contato — conteúdo genérico de segmento.
  TODO: Substituir telefone, endereço e horários pelos dados reais da empresa.
*/

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] px-6 py-16 text-[#B8BEC4]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img
              src="/assets/brand/logo-cliente.png"
              alt="Minas Esquadrias"
              className="mb-4 h-20 w-auto rounded object-contain"
            />
            <p className="text-sm leading-relaxed text-[#B8BEC4]/70">
              Fabricação e instalação de esquadrias de alumínio e vidros sob
              medida em Ibirité e região. Qualidade e profissionalismo em cada
              projeto.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
                <span>(31) 99999-9999</span>
              </li>
              <li>
                <a
                  href="https://wa.me/5531999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
                  <span>WhatsApp: (31) 99999-9999</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
                <span>
                  Ibirité, MG
                  {/* 
                    Placeholder de endereço — o endereço completo não foi verificado.
                    Substituir pelo endereço real da empresa.
                  */}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
                <span>Seg–Sex: 07h–18h | Sáb: 07h–12h</span>
              </li>
            </ul>
          </div>

          {/* 
            Mapa — Ibirité/MG (baseado no CNPJ).
            O endereço completo da empresa não foi verificado.
            Substituir pelo embed do endereço real quando confirmado.
          */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Onde Estamos
            </h3>
            <div className="overflow-hidden rounded-lg aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?q=Ibirit%C3%A9+MG+Brazil&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Ibirité, MG"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-[#B8BEC4]/50">
          <p>
            &copy; {new Date().getFullYear()} Minas Esquadrias em Alumínio e
            Vidros LTDA - ME. CNPJ: 26.524.362/0001-75.
          </p>
          <p className="mt-1">
            Site de demonstração — conteúdo genérico de segmento.
          </p>
        </div>
      </div>
    </footer>
  );
}
