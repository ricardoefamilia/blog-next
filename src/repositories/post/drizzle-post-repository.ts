import { PostRepository } from "./post-repository";
import { PostModel } from "@/models/post/post-model";
import { drizzleDb } from "@/db/drizzle";
import { PostsTableSelectMode } from "@/db/drizzle/schemas";

export class DrizzlePostRepository implements PostRepository {
  private mapToPostModel(post: PostsTableSelectMode): PostModel {
    return {
      ...post,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    };
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts.map(this.mapToPostModel);
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq, and }) =>
        and(eq(posts.slug, slug), eq(posts.published, true)),
    });

    if (!post) throw new Error("Post não encontrado para slug");

    return this.mapToPostModel(post);
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts.map(this.mapToPostModel);
  }

  async findById(id: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error("Post não encontrado para id");

    return this.mapToPostModel(post);
  }
}
