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
  isTerminalCleared: boolean;
  setCurrentCommand: (command: string) => void;
  setHistoryIndex: (index: number) => void;
  executeCommand: (command: string) => void;
  clearTerminal: () => void;
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
  const [isTerminalCleared, setIsTerminalCleared] = useState(false);

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

  const clearTerminal = () => {
    // Add the clear command to history
    setCommandHistory([...commandHistory, "clear"]);

    // Set the terminal as cleared
    setIsTerminalCleared(true);

    // Reset output history to just the welcome message
    setOutputHistory([
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

    // Reset the cleared state after a short delay
    setTimeout(() => {
      setIsTerminalCleared(false);
    }, 50);
  };

  return (
    <TerminalContext.Provider
      value={{
        commandHistory,
        outputHistory,
        currentCommand,
        historyIndex,
        theme,
        isTerminalCleared,
        setCurrentCommand,
        setHistoryIndex,
        executeCommand,
        clearTerminal,
        setTheme,
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
};
