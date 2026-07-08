import Hero from "@/app/components/hero";
import Diferenciais from "@/app/components/diferenciais";
import Servicos from "@/app/components/servicos";
import Processo from "@/app/components/processo";
import Projetos from "@/app/components/projetos";
import Depoimentos from "@/app/components/depoimentos";
import FAQ from "@/app/components/faq";
import CTA from "@/app/components/cta";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Diferenciais />
      <Servicos />
      <Processo />
      <Projetos />
      <Depoimentos />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
