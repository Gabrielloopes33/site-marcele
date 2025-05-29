"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Renata M.",
    userName: "Professora Universitária",
    comment:
      "Fiz a cirurgia de pálpebras com a Dra. Marcelle e fiquei impressionada com o cuidado no pré e pós-operatório. O resultado foi leve, natural e me senti rejuvenescida sem perder minha identidade. ",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Carla A.",
    userName: "Publicitária",
    comment:
      "Eu sempre tive receio de fazer botox, mas com a Dra. Marcelle me senti segura. O atendimento é diferenciado, ela explica tudo com muita clareza. Resultado discreto, como eu queria! ",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: " Thaís R.",
    userName: "Gestora de RH",
    comment:
      "O consultório é impecável, o atendimento é de alto padrão. Fiz ultrassom microfocado e preenchimento — o resultado ficou muito natural. Me sinto mais bonita e confiante.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Luciana P.",
    userName: "Gestora de RH",
    comment:
      "Tinha muita insegurança com as marcas no rosto e flacidez. A Dra. Marcelle indicou bioestimuladores e peelings e, em poucas sessões, já vi diferença! O tratamento vale cada centavo.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Fernanda G.",
    userName: "Advogada",
    comment:
      "Fiz fios de PDO e o efeito lifting foi imediato. Adorei o resultado e me senti super acolhida durante todo o processo. Profissional séria, competente e delicada.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Denise C.",
    userName: "Fotógrafa",
    comment:
      "Sou paciente da Dra. Marcelle há 2 anos. Faço manutenção com botox e skinbooster, e não troco por nada. A pele melhora visivelmente e o atendimento é sempre atencioso.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
         Depoimentos
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
         Veja o que os pacientes dizem sobre <br /> a experiência com a Dra. Marcelle
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
