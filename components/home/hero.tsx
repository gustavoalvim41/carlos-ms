import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import mudas from "@/public/mudas.jpeg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-[calc(100dvh-72px)] flex items-center py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge variant="outline">
            🌱 Do viveiro até sua propriedade
            <ArrowUpRight className="ml-2 size-4" />
          </Badge>
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Mudas de Seringueira de Alta Qualidade
          </h1>
          <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
            Até 6 mil mudas por viagem com transporte especializado. Entrega garantida em todo o Brasil.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/https://wa.me/5517988230597?text=Olá! Gostaria de saber valores e disponibilidade de mudas.">Solicitar Orçamento</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="#nossas">
                Saiba mais
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
        <Image
          src={mudas}
          alt="mudas"
          className="max-h-96 w-full rounded-md object-cover"
          loading="eager"
        />
      </div>
      </div>
    </section>
  );
};

export default Hero;