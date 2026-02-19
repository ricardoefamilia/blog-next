"use server";

import { logColor } from "@/utils/log-color";
import { asyncDelay } from "@/utils/async-delay";

export async function deletePostAction(id: string) {
  await asyncDelay(2000);
  logColor("" + id);
  return id;
}
