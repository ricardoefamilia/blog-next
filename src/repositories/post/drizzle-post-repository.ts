import { PostRepository } from "./post-repository";
import { PostModel } from "@/models/post/post-model";
import { drizzleDb } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    // const query = drizzleDb.select().from(postsTable);
    // query.where(eq(postsTable.published, true));
    // query.orderBy(desc(postsTable.createdAt));
    console.log("\n", "findAllPublic", "\n");
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    console.log("\n", "findBySlugPublic", "\n");
    const posts = await drizzleDb.query.posts.findFirst({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq, and }) =>
        and(eq(posts.slug, slug), eq(posts.published, true)),
    });

    if (!posts) throw new Error("Post não encontrado para slug");

    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    console.log("\n", "findAll", "\n");
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    if (!posts) throw new Error("Posts não encontrados");

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    console.log("\n", "findById", "\n");
    const posts = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!posts) throw new Error("Post não encontrado para id");

    return posts;
  }
}

// (async () => {
//   const repo = new DrizzlePostRepository();
//   console.log("\n", "findAllPublic", "\n");
//   const postsFindAllPublic = await repo.findAllPublic();
//   postsFindAllPublic.forEach((post) => {
//     console.log(post.slug, post.createdAt, post.published);
//   });

//   console.log("\n", "findBySlugPublic", "\n");
//   const postsFindBySlugPublic = await repo.findBySlugPublic(
//     "dicas-para-manter-a-saude-mental-em-dia",
//   );
//   console.log(postsFindBySlugPublic);

//   console.log("\n", "findAll", "\n");
//   const postsFindAll = await repo.findAll();
//   postsFindAll.forEach((post) => {
//     console.log(post.slug, post.createdAt, post.published);
//   });

//   console.log("\n", "findById", "\n");
//   const postsFindById = await repo.findById(
//     "be3f14a1-0105-4e2e-bfc9-133a05e7bda6",
//   );
//   console.log(postsFindById);
// })();
