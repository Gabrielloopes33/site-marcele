"use client"; 

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
  videoId?: string; // Adicione o id do vídeo do YouTube aqui
}
const serviceList: ServiceProps[] = [
  {
    title: "Aplicação de Toxina Botulínica (Botox) 💉",
    description:
      "Suaviza rugas de expressão, previne marcas futuras e mantém a naturalidade da face.",
    pro: 0,
    videoId: "dQw4w9WgXcQ", // Exemplo, trocar pelo real
  },
  {
    title: "Preenchimento com Ácido Hialurônico 💧 ",
    description:
      "Harmonização facial com reposição de volume, contorno e hidratação profunda da pele.",
    pro: 0,
    videoId: "dQw4w9WgXcQ", // Exemplo, trocar pelo real
  },
  {
    title: "Ultrassom Microfocado 🔬 ",
    description: "Tecnologia não invasiva para efeito lifting e firmeza da pele, estimulando colágeno.",
    pro: 0,
    videoId: "dQw4w9WgXcQ", // Exemplo, trocar pelo real
  },
  {
    title: "Fios de Sustentação PDO 🧵 ",
    description: "Lifting imediato e bioestimulação com fios absorvíveis, ideal para contorno facial.",
    pro: 0,
    videoId: "dQw4w9WgXcQ", // Exemplo, trocar pelo real
  },
    {
    title: "Bioestimuladores, PDRN e Exossomos 💎 ",
    description: "Regeneração celular profunda, melhora da firmeza e qualidade da pele com ativos inovadores.",
    pro: 0,
    videoId: "dQw4w9WgXcQ", // Exemplo, trocar pelo real
  },
      {
    title: "Peelings Médicos e Microagulhamento ✨ ",
    description: "Técnicas que promovem renovação celular, melhoram manchas, textura da pele e estimulam colágeno de forma segura e controlada.",
    pro: 0,
    videoId: "dQw4w9WgXcQ", // Exemplo, trocar pelo real
  },
];

export const ServicesSection = () => {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-4 tracking-wider">
        Serviços
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 ">
        Cuidados médicos e estéticos para <br /> realçar sua beleza com segurança
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-10 ">
        De procedimentos cirúrgicos a tratamentos estéticos minimamente invasivos, a Dra. Marcelle oferece soluções completas para quem busca rejuvenescimento facial com naturalidade, técnica e confiança.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro, videoId }) => (
          <Card
            key={title}
            className="bg-muted/60 h-full relative shadow-md shadow-primary/30 transition-transform hover:scale-105"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
            {videoId && (
              <button
                className="flex items-center gap-2 mt-2 mb-5 ml-4 px-4 py-2 rounded bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition"
                onClick={() => setOpenVideo(videoId)}
              >
                <PlayCircle className="w-5 h-5" />
                Assista o vídeo
              </button>
            )}
          </Card>
        ))}
      </div>

      {/* Modal simples */}
      {openVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-xl w-full relative">
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-primary"
              onClick={() => setOpenVideo(null)}
              aria-label="Fechar"
            >
              ×
            </button>
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${openVideo}`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
