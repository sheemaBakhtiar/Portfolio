import React from "react";
import { useTerminal } from "../context/useTerminal";

const TerminalOutput: React.FC = () => {
  const { outputHistory } = useTerminal();

  return (
    <div className="space-y-4">
      {outputHistory.map((entry, index) => (
        <div key={index} className="terminal-entry">
          {/* Only show command prompt if it's not the welcome message */}
          {entry.command && (
            <div className="flex">
              <span className="prompt mr-2">guest@portfolio:~$</span>
              <span className="user-input">{entry.command}</span>
            </div>
          )}

          {/* Command output with appropriate styling */}
          <div
            className={`pl-4 mt-1 ${
              entry.isError ? "error-text" : "command-output"
            }`}
          >
            {entry.output}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;
