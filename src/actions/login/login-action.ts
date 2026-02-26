"use server";

import { asyncDelay } from "@/utils/async-delay";
import { createLoginSession, verifyPassword } from "@/lib/login/manage-login";

type LoginActionState = {
  username: string;
  error: string;
  success?: boolean;
};

export async function loginAction(
  state: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  await asyncDelay(2000);

  // Dados que o usuário digitou no form
  const username = formData.get("username")?.toString().trim() || "";
  const password = formData.get("password")?.toString().trim() || "";

  if (!username || !password) {
    return {
      username,
      error: "Digite o usuário e a senha",
    };
  }

  // Aqui eu checaria se o usuário existe na base de dados
  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = await verifyPassword(
    password,
    process.env.LOGIN_PASS || "",
  );

  if (!isUsernameValid || !isPasswordValid) {
    return {
      username,
      error: "Usuário ou senha inválidos",
    };
  }

  await createLoginSession(username);

  return {
    username,
    error: "",
    success: true, // 👈 sinaliza sucesso
  };
}
