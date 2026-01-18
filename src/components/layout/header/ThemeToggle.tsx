import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../lib/theme/ThemeContext";
import { cn } from "../../../lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "border p-2 rounded-2xl transition-colors duration-300",
        "hover:bg-neutral-100 dark:hover:bg-neutral-900"
      )}
      aria-label="Toggle theme"
      type="button"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
