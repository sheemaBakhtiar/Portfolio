import React, { createContext, useState, ReactNode } from "react";
import { commandProcessor } from "../utils/commandProcessor";

export interface TerminalContextType {
  commandHistory: string[];
  outputHistory: Array<{
    command: string;
    output: React.ReactNode;
    isError?: boolean;
  }>;
  currentCommand: string;
  historyIndex: number;
  theme: "green" | "amber" | "blue";
  setCurrentCommand: (command: string) => void;
  setHistoryIndex: (index: number) => void;
  executeCommand: (command: string) => void;
  setTheme: (theme: "green" | "amber" | "blue") => void;
}

export const TerminalContext = createContext<TerminalContextType | undefined>(
  undefined
);

export const TerminalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [outputHistory, setOutputHistory] = useState<
    Array<{
      command: string;
      output: React.ReactNode;
      isError?: boolean;
    }>
  >([
    {
      command: "",
      output: (
        <>
          <div className="mb-2 text-xl font-bold">
            Welcome to my terminal portfolio!
          </div>
          <div className="mb-4">
            Type <span className="text-yellow-400">'help'</span> to see
            available commands.
          </div>
        </>
      ),
    },
  ]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [theme, setTheme] = useState<"green" | "amber" | "blue">("green");

  const executeCommand = (command: string) => {
    if (command.trim() === "") return;

    // Add command to history
    const newHistory = [...commandHistory, command];
    setCommandHistory(newHistory);
    setHistoryIndex(-1);

    // Process command
    const { output, isError } = commandProcessor(command);

    // Add to output history
    setOutputHistory([...outputHistory, { command, output, isError }]);

    // Clear current command
    setCurrentCommand("");
  };

  return (
    <TerminalContext.Provider
      value={{
        commandHistory,
        outputHistory,
        currentCommand,
        historyIndex,
        theme,
        setCurrentCommand,
        setHistoryIndex,
        executeCommand,
        setTheme,
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
};
