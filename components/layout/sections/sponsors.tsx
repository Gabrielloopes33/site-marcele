"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "Crown",
    name: "CBO (Conselho Brasileiro de Oftalmologia)",
  },
  {
    icon: "Vegan",
    name: "AMB (Associação Médica Brasileira)",
  },
  {
    icon: "Ghost",
    name: "CRM (Conselho Regional de Medicina)",
  },
  {
    icon: "Puzzle",
    name: "SBCP (Sociedade Brasileira de Cirurgia Plástica) – se aplicável",
  },
  {
    icon: "Squirrel",
    name: "Especialização reconhecida pelo MEC",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Selos de Certificação e Associações
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="white"
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
