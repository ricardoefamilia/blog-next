import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      {/* 🔘 Botão de tema */}
      <ThemeToggleButton />
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Título do post"
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2026-02-10">
            10/02/2026 17:28
          </time>

          <PostHeading as="h1" url="#">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </PostHeading>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            necessitatibus, soluta inventore, fugit, sed sapiente eius
            consectetur vero numquam odit reprehenderit voluptas in beatae
            laudantium quae dolorum nemo eos! Odit?
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  );
}

// app/page.tsx é o arquivo que representa a página inicial do aplicativo Next.js. é como o index.html em um site tradicional.
// Ele é o ponto de entrada para a aplicação e é renderizado quando os usuários acessam a raiz do site ("/").
// Ele exporta uma função chamada Home, que retorna um elemento JSX contendo um título.
// Quando os usuários acessarem a raiz do site, eles verão a mensagem "Olá, de dentro da page.tsx".
// app/pasta/index.tsx é o arquivo que representa a página inicial da pasta "pasta". Assim serão os demais endpoints.
