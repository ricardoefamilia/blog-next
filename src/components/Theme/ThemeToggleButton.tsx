"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import clsx from "clsx";

export function ThemeToggleButton() {
  const { isDark, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={clsx(
        "absolute top-4 right-4 px-4 py-2 rounded-md font-medium transition",
        isDark
          ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
          : "bg-slate-200 text-slate-900 hover:bg-slate-300",
      )}
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-slate-800" />
      )}
    </button>
  );
}
