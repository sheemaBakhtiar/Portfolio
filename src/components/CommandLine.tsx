import React, { useState, useEffect, useRef } from "react";
import { useTerminal } from "../context/useTerminal";
import { getCommandSuggestions } from "../utils/commandProcessor";

interface CommandLineProps {
  onExecute: (command: string) => void;
  onClear: () => void;
}

const CommandLine: React.FC<CommandLineProps> = ({ onExecute, onClear }) => {
  const {
    currentCommand,
    setCurrentCommand,
    commandHistory,
    historyIndex,
    setHistoryIndex,
    clearTerminal,
  } = useTerminal();

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount and when component updates
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Update suggestions when command changes
  useEffect(() => {
    const cmdSuggestions = getCommandSuggestions(currentCommand);
    setSuggestions(cmdSuggestions);
    setSelectedSuggestion(0);
  }, [currentCommand]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle keyboard navigation
    switch (e.key) {
      case "Enter":
        if (currentCommand.trim() === "clear") {
          // Use the clearTerminal function from context
          clearTerminal();

          // Clear the input
          setCurrentCommand("");
        } else {
          onExecute(currentCommand);
        }
        setShowSuggestions(false);
        break;

      case "ArrowUp":
        e.preventDefault();
        if (showSuggestions) {
          setSelectedSuggestion((prev) =>
            prev > 0 ? prev - 1 : suggestions.length - 1
          );
        } else if (commandHistory.length > 0) {
          const newIndex =
            historyIndex < commandHistory.length - 1
              ? historyIndex + 1
              : historyIndex;
          setHistoryIndex(newIndex);
          setCurrentCommand(
            commandHistory[commandHistory.length - 1 - newIndex] || ""
          );
        }
        break;

      case "ArrowDown":
        e.preventDefault();
        if (showSuggestions) {
          setSelectedSuggestion((prev) =>
            prev < suggestions.length - 1 ? prev + 1 : 0
          );
        } else if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          setCurrentCommand(
            commandHistory[commandHistory.length - 1 - newIndex] || ""
          );
        } else if (historyIndex === 0) {
          setHistoryIndex(-1);
          setCurrentCommand("");
        }
        break;

      case "Tab":
        e.preventDefault();
        if (suggestions.length > 0) {
          setCurrentCommand(suggestions[selectedSuggestion]);
        }
        break;

      case "Escape":
        setShowSuggestions(false);
        break;

      default:
        // Show suggestions when typing
        if (e.key.length === 1 || e.key === "Backspace") {
          setShowSuggestions(true);
        }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCommand(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentCommand(suggestion);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col mt-2">
      <div className="flex items-center">
        <span className="prompt mr-2">guest@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={currentCommand}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none user-input"
          autoFocus
          aria-label="Command input"
        />
        <span className="cursor"></span>
      </div>

      {/* Command suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="mt-1 bg-gray-800 border border-gray-700 rounded p-1 max-h-32 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <div
              key={suggestion}
              className={`px-2 py-1 cursor-pointer ${
                index === selectedSuggestion ? "bg-gray-700 text-white" : ""
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommandLine;
