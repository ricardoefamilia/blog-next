import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";

export const metadata: Metadata = {
  title: {
    default: "The blog - Este é um blog com Next.js",
    template: "%s | The Blog",
  },
  description: "Essa é a descrição dessa página",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR" className="dark">
      <body>
        <Container>
          <Header />
          <ThemeToggleButton />
          {children}
          <footer>
            <p className="text-6xl font-bold text-center py-8">Footer</p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
