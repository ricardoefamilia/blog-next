import { PostModel } from "@/models/post/post-model";

export type PublicPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  content: string;
  coverImageUrl: string;
  createdAt: string; // 👈 agora é string
  published: boolean;
};

export const makePartialPublicPost = (
  post?: Partial<PostModel>,
): PublicPost => {
  return {
    id: post?.id ?? "",
    slug: post?.slug ?? "",
    title: post?.title ?? "",
    excerpt: post?.excerpt ?? "",
    author: post?.author ?? "",
    content: post?.content ?? "",
    coverImageUrl: post?.coverImageUrl ?? "",
    createdAt: post?.createdAt ? post.createdAt.toISOString() : "", // 👈 conversão aqui
    published: post?.published ?? false,
  };
};

export const makePublicPostFromDb = (post: PostModel): PublicPost => {
  return makePartialPublicPost(post);
};
