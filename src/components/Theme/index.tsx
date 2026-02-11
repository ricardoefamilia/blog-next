import { useTheme } from "@/hooks/useTheme";
import clsx from "clsx";

export function ThemeToggleButton() {
  const { theme, setTheme, isDark } = useTheme();

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={clsx(
        "px-4 py-2 rounded transition",
        isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black",
      )}
    >
      {isDark ? "Modo claro" : "Modo escuro"}
    </button>
  );
}
