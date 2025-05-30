"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-10">

          {/* FOTO NO TOPO */}
          <Image
            src="/logo-01.png"
            alt="Foto topo"
            width={300}         // diminua o valor aqui
            height={180}         // ajuste conforme o aspecto da sua logo
            className="mx-auto mb-4 max-w-[70%] h-auto" // max-w para responsividade, h-auto para manter proporção
            priority
          />

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold py-10">
            <h1>
              Desperte sua
              <span className="text-transparent px-2 bg-gradient-to-r from-[#5d8f6a] to-primary bg-clip-text">
                Beleza 
              </span>
             com naturalidade!
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Procedimentos estéticos com segurança médica, técnica precisa e resultados reais.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button
              asChild
              className="w-5/6 md:w-1/4 font-bold group/arrow"
            >
              <Link href="https://api.whatsapp.com/send?phone=553333312600&text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20consulta%20com%20a%20Dra.Marcele&utm_medium=social&utm_source=heylink.me">
                Entre em contato!
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold shadow-md shadow-primary/30 transition-transform hover:scale-105"
            >
              <Link href="#services">
                Procedimentos
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-xl relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={
              theme === "light"
                ? "/hero-image-dark.png"
                : "hero-image-dark.png"
            }
            alt="Foto marcele portella"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
