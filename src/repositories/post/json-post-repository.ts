import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json",
);

export class JsonPostRepository implements PostRepository {
  private async readFromDisk() {
    const jsonContent = JSON.parse(
      await readFile(JSON_POSTS_FILE_PATH, "utf-8"),
    );
    const { posts } = jsonContent;
    return { posts };
  }

  async findAll(): Promise<PostModel[]> {
    const { posts } = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find((post) => post.id === id);
    if (!post) {
      throw new Error(`Post ID ${id} NÃO ENCONTRADO!`);
    }
    return post;
  }
}
