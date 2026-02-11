import { useEffect, useState } from "react";
import { THEME, Theme } from "@/constants/theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return THEME.DEFAULT;
    }

    return (localStorage.getItem("theme") as Theme) ?? THEME.DEFAULT;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === THEME.DARK) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return {
    theme,
    setTheme,
    isDark: theme === THEME.DARK,
  };
}
