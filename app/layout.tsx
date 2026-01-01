import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carlos MS - Mudas de Seringueira de Alta Qualidade",
  description: "Até 6 mil mudas por viagem com transporte especializado. Entrega garantida em todo o Brasil. Solicite seu Orçamento!",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
