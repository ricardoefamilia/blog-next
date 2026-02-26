"use client";

import { loginAction } from "@/actions/login/login-action";
import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";
import clsx from "clsx";
import { LogInIcon } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();

  const initialState = {
    username: "",
    error: "",
    success: false,
  };
  const [state, action, isPending] = useActionState(loginAction, initialState);

  // 🔔 erros
  useEffect(() => {
    if (state.error) {
      toast.dismiss();
      toast.error(state.error);
    }
  }, [state.error]);

  // ✅ sucesso → redirect
  useEffect(() => {
    if (state.success) {
      router.push("/admin/post");
    }
  }, [state.success, router]);

  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        "text-center max-w-sm mt-16 mb-32 mx-auto",
      )}
    >
      <form action={action} className="flex-1 flex flex-col gap-6">
        <InputText
          type="text"
          name="username"
          labelText="Usuário"
          placeholder="Seu usuário"
          disabled={isPending}
          defaultValue={state.username}
        />

        <InputText
          type="password"
          name="password"
          labelText="Senha"
          placeholder="Sua senha"
          disabled={isPending}
        />

        <Button disabled={isPending} type="submit" className="mt-4">
          <LogInIcon />
          Entrar
        </Button>

        {/* {!!state.error && <p className="text-red-600">{state.error}</p>} */}
      </form>
    </div>
  );
}
