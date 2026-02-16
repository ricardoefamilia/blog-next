import "dotenv/config";
import { drizzleDb } from "./index"; // conexão Postgres
import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { postsTable } from "./schemas";
// import { sql } from "drizzle-orm";

async function main() {
  try {
    const jsonPostRepository = new JsonPostRepository();

    const posts = await jsonPostRepository.findAll();

    await drizzleDb.delete(postsTable).execute(); // Limpa a tabela antes de inserir os dados

    await drizzleDb.insert(postsTable).values(
      posts.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        author: post.author,
        excerpt: post.excerpt,
        content: post.content,
        coverImageUrl: post.coverImageUrl,
        published: Boolean(post.published),
        createdAt: new Date(post.createdAt),
        updatedAt: new Date(post.updatedAt),
      })),
    );
    // caso queira atualizar os posts caso o slug já exista, descomente o código abaixo e comente o código acima
    // .onConflictDoUpdate({
    //   target: postsTable.slug,
    //   set: {
    //     title: sql`excluded.title`,
    //     updatedAt: new Date(),
    //   },
    // });
    console.log(`${posts.length} Posts inseridos com sucesso!`);
  } catch (error) {
    console.error("Erro ao inserir posts:", error);
  } finally {
    process.exit(0);
  }
}

main();
