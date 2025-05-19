import React from "react";
import { useTerminal } from "../context/useTerminal";
import { MonitorIcon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTerminal();

  const handleThemeChange = () => {
    setTheme(
      theme === "green"
        ? "amber"
        : theme === "amber"
        ? "blue"
        : theme === "blue"
        ? "pink"
        : "green"
    );
  };

  return (
    <button
      onClick={handleThemeChange}
      className="flex items-center px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 text-xs"
      aria-label="Toggle terminal theme"
    >
      <MonitorIcon size={16} className="mr-2" />
      <span>
        {theme === "green"
          ? "GREEN"
          : theme === "amber"
          ? "AMBER"
          : theme === "blue"
          ? "BLUE"
          : "PINK"}
      </span>
    </button>
  );
};

export default ThemeToggle;
