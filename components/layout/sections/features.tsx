import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { Fade } from "react-awesome-reveal";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Atendimento Humanizado e Moderno",
    description:
      "Cada paciente é único. Por isso, o atendimento é feito de forma personalizada, com escuta ativa e ambiente acolhedor.",
  },
  {
    icon: "BadgeCheck",
    title: "Segurança Médica em Primeiro Lugar",
    description:
      "Todos os procedimentos são realizados com rigor técnico por uma especialista em oftalmologia, oculoplástica e estética médica.",
  },
  {
    icon: "Goal",
    title: "Resultados Naturais e Personalizados",
    description:
      "Nada de exageros. O foco está na harmonia facial, respeitando os traços e objetivos individuais de cada paciente.",
  },
  {
    icon: "PictureInPicture",
    title: "Produtos Premium e Tecnologia Avançada",
    description:
      "Trabalhamos apenas com produtos reconhecidos internacionalmente e tecnologias seguras para melhores resultados e menos tempo de recuperação.",
  },
  {
    icon: "MousePointerClick",
    title: "Avaliações Reais e Resultados Comprovados",
    description:
      "Mais de X pacientes atendidos com segurança, confiança e depoimentos espontâneos sobre o impacto positivo em suas vidas.",
  },
  {
    icon: "Newspaper",
    title: "Localização Estratégica",
    description:
      "Consultório com infraestrutura de alto padrão, fácil acesso e ambiente discreto para seu conforto.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <Fade direction="down" delay={200} triggerOnce>
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Diferenciais
        </h2>
      </Fade>

      <Fade direction="up" delay={400} triggerOnce>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          O que torna a Dra. Marcele Portella única
        </h2>
      </Fade>

      <Fade direction="up" delay={600} triggerOnce>
        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
         A Dra. Marcelle une conhecimento médico profundo, técnicas avançadas e um olhar estético refinado para proporcionar resultados que valorizam sua beleza de forma natural, segura e elegante.
        </h3>
      </Fade>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {featureList.map(({ icon, title, description }, index) => (
          <Fade key={title} direction="up" delay={800 + (index * 100)} triggerOnce>
            <div>
              <Card className="h-full bg-background border-0 shadow-md shadow-primary/30 transition-transform hover:scale-105">
                <CardHeader className="flex justify-center items-center">
                  <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                    <Icon
                      name={icon as keyof typeof icons}
                      size={24}
                      color="hsl(var(--primary))"
                      className="text-primary"
                    />
                  </div>

                  <CardTitle className="text-center">{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground text-center">
                  {description}
                </CardContent>
              </Card>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};
