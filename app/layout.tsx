import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Minas Esquadrias e Vidros | Esquadrias de Alumínio em Ibirité/MG",
  description:
    "Fabricação e instalação de esquadrias de alumínio e vidros sob medida. Portas, janelas, box, fachadas e muito mais. Solicite seu orçamento.",
  openGraph: {
    title: "Minas Esquadrias e Vidros",
    description:
      "Esquadrias de alumínio e vidros sob medida em Ibirité e região.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`no-js ${archivo.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('no-js')",
          }}
        />
        {/* 
          Schema.org LocalBusiness — dados baseados no CNPJ.
          TODO: Confirmar telefone, endereço e horários reais com a empresa.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Minas Esquadrias em Alumínio e Vidros LTDA - ME",
              description: "Fabricação de esquadrias de metal e vidraçaria",
              foundingDate: "2016-11-11",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ibirité",
                addressRegion: "MG",
                addressCountry: "BR",
              },
              telephone: "+55 31 99999-9999",
              url: "https://minas-esquadrias.vercel.app",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
