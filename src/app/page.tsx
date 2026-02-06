import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é a HEADER</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </div>
  );
}

// app/page.tsx é o arquivo que representa a página inicial do aplicativo Next.js. é como o index.html em um site tradicional.
// Ele é o ponto de entrada para a aplicação e é renderizado quando os usuários acessam a raiz do site ("/").
// Ele exporta uma função chamada Home, que retorna um elemento JSX contendo um título.
// Quando os usuários acessarem a raiz do site, eles verão a mensagem "Olá, de dentro da page.tsx".
// app/pasta/index.tsx é o arquivo que representa a página inicial da pasta "pasta". Assim serão os demais endpoints.
