"use server";

import { logColor } from "@/utils/log-color";
import { asyncDelay } from "@/utils/async-delay";
import { postRepository } from "@/repositories/post";
import { postsTable } from "@/db/drizzle/schemas";
import { drizzleDb } from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  // TODO: checar login do usuário

  // TODO: remover linhas abaixo
  await asyncDelay(2000);
  logColor("" + id);

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      error: "Post inexistente ou já apagado",
    };
  }

  // TODO: mover este método para o repositório
  await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

  // TODO: revalidateTag ou revalidatePath
  revalidateTag("posts", "max");
  revalidateTag(`posts-${post.slug}`, "max");

  return {
    error: "",
  };
}
