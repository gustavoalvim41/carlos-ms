import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    title: string;
  };
  className?: string;
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    title: "Carlos MS",
  },
  className,
  tagline = "Mudas de Seringueira de Alta Qualidade",
  menuItems = [
    {
      title: "Links",
      links: [
        { text: "Nossas Mudas", url: "#nossas" },
        { text: "Como Funciona", url: "#process" },
        { text: "Sobre Nós", url: "#" },
      ],
    },
    {
      title: "FAQ",
      links: [
        { text: "Perguntas Frequentes", url: "#faq" },
      ],
    },
  ],
  copyright = "© 2025 Carlos MS. Todos os direitos reservados.",
}: Footer2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
              <p className="mt-4">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
