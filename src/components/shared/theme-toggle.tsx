import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return theme === "dark" ? (
    <Button onClick={() => setTheme("light")} variant="outline" size="icon">
      <Sun />
    </Button>
  ) : (
    <Button onClick={() => setTheme("dark")} variant="outline" size="icon">
      <Moon />
    </Button>
  );
}
