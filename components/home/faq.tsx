import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  className?: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
  className?: string;
}

const Faq = ({
  heading = "Dúvidas Frequentes",
  items = [
    {
      id: "faq-1",
      question: "Quais tipos de mudas vocês oferecem?",
      answer:
        "Oferecemos mudas de seringueira de alta qualidade, incluindo clones RRIM, RIM e IAC, para atender diferentes necessidades de plantio.",
    },
    {
      id: "faq-2",
      question: "Como posso solicitar um orçamento?",
      answer:
        "Você pode solicitar um orçamento entrando em contato conosco pelo WhatsApp ou pelo formulário em nosso site. Enviamos uma proposta personalizada em até 24 horas, com preços transparentes e todas as condições detalhadas.",
    },
    {
      id: "faq-3",
      question: "Qual é a quantidade máxima de mudas por entrega?",
      answer:
        "Transportamos até 6 mil mudas por viagem, garantindo que cheguem em perfeitas condições na sua propriedade.",
    },
    {
      id: "faq-4",
      question: "Como funciona o transporte das mudas?",
      answer:
        "Preparamos as mudas com todo cuidado e realizamos transporte especializado, garantindo a entrega segura e rápida, para que suas mudas cheguem saudáveis e prontas para o plantio.",
    },
    {
      id: "faq-5",
      question: "Quanto tempo leva para receber minhas mudas?",
      answer:
        "Após a confirmação do pedido e envio da proposta, o transporte é agendado rapidamente. As mudas chegam prontas para plantio sem atrasos, garantindo disponibilidade imediata.",
    },
    {
      id: "faq-6",
      question: "Quais são os benefícios de escolher suas mudas?",
      answer:
        "Nossas mudas de qualidade superior proporcionam economia no longo prazo, maior produtividade, suporte técnico especializado, entrega segura e variedade de clones para diferentes tipos de plantio.",
    },
    {
      id: "faq-7",
      question: "Vocês oferecem suporte após a entrega das mudas?",
      answer:
        "Sim! Estamos sempre disponíveis para tirar dúvidas e fornecer orientação técnica durante o plantio, garantindo que suas mudas se desenvolvam da melhor forma.",
    },
  ],
  className,
}: Faq1Props) => {
  return (
    <section id="faq" className={cn("py-32", className)}>
      <div className="container mx-auto max-w-3xl">
        <h1 className="mb-4 text-center text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq };
