import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostFeatured } from "@/components/PostFeatured";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      {/* 🔘 Botão de tema */}
      <ThemeToggleButton />
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

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
