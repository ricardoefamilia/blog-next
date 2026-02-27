"use server";

import { asyncDelay } from "@/utils/async-delay";
import { deleteLoginSession } from "@/lib/login/manage-login";
import { redirect } from "next/navigation";

export async function logoutAction() {
  await asyncDelay(1000); // Vou manter
  await deleteLoginSession();
  redirect("/");
}
