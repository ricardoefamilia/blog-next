import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog Next - Este é um blog feito com Next.js",
  description: "Essa é a descrição dessa página",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body>
        <header>
          <h1>Blog Next</h1>
        </header>
        {children}
        <footer>
          <p>Copyright © 2024 - Blog Next</p>
        </footer>
      </body>
    </html>
  );
}
