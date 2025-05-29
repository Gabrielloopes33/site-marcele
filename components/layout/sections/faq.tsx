import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "A cirurgia de pálpebras deixa cicatriz visível?",
    answer: "A blefaroplastia é feita em áreas discretas da pálpebra, com pontos finos e cicatrização que tende a ficar praticamente imperceptível com o tempo.",
    value: "item-1",
  },
  {
    question: "O Botox deixa o rosto paralisado?",
    answer:
      "Não! Quando aplicado corretamente, o botox suaviza as expressões mantendo a naturalidade. O segredo está na técnica e na dose ideal para o seu caso.",
    value: "item-2",
  },
  {
    question:
      "O que é ultrassom microfocado e para que serve?",
    answer:
      "É uma tecnologia que estimula a produção de colágeno em camadas profundas da pele, promovendo efeito lifting sem cirurgia. Indicado para flacidez no rosto e pescoço.",
    value: "item-3",
  },
  {
    question: "Qual a diferença entre preenchimento e bioestimulador?",
    answer: "O preenchimento dá volume imediato (como lábios e olheiras), enquanto os bioestimuladores atuam no longo prazo, melhorando textura, firmeza e sustentação da pele.",
    value: "item-4",
  },
  {
    question:
      " Os fios de PDO doem? Como funciona?",
    answer: "É um procedimento minimamente invasivo. Pode causar leve desconforto, mas é feito com anestesia local e recuperação rápida. O efeito lifting é imediato e melhora com o tempo.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Perguntas Frequentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
