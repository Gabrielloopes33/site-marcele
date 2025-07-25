import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { Fade } from "react-awesome-reveal";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Confiança com base científica",
    description:
      "Tratamentos realizados por médica especialista com profundo conhecimento anatômico e técnico.",
  },
  {
    icon: "LineChart",
    title: "Olhar rejuvenescido",
    description:
      "Cirurgia de pálpebras e procedimentos ao redor dos olhos com resultado natural e expressivo.",
  },
  {
    icon: "Wallet",
    title: "Tecnologia de ponta",
    description:
      "Equipamentos modernos e produtos premium reconhecidos internacionalmente (Allergan, Rennova, Ultraformer, etc).",
  },
  {
    icon: "Sparkle",
    title: "Atendimento humanizado e exclusivo",
    description:
      "Consultas personalizadas com escuta ativa, para entender sua necessidade e indicar o melhor caminho para o seu caso.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <Fade direction="left" delay={200} triggerOnce>
            <h2 className="text-lg text-primary mb-2 tracking-wider">Benefícios para Você</h2>
          </Fade>

          <Fade direction="left" delay={400} triggerOnce>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados naturais com segurança médica e olhar mais jovem
            </h2>
          </Fade>
          
          <Fade direction="left" delay={600} triggerOnce>
            <p className="text-xl text-muted-foreground mb-8">
             Na clínica da Dra. Marcele Portella, cada tratamento é pensado para realçar sua beleza de forma sutil e segura. Unimos tecnologia, conhecimento e cuidado humano para proporcionar transformações que respeitam sua essência.
            </p>
          </Fade>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Fade key={title} direction="up" delay={800 + (index * 150)} triggerOnce>
              <Card
                className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number shadow-md shadow-primary/30 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex justify-between ">
                    <Icon
                      name={icon as keyof typeof icons}
                      size={32}
                      color="hsl(var(--primary))"
                      className="mb-6 text-primary"
                    />
                    <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                      0{index + 1}
                    </span>
                  </div>

                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground">
                  {description}
                </CardContent>
              </Card>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};
