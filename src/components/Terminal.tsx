import React, { useState, useRef, useEffect } from "react";
import CommandLine from "./CommandLine";
import TerminalOutput from "./TerminalOutput";
import { useTerminal } from "../context/useTerminal";

const Terminal: React.FC = () => {
  const { outputHistory, executeCommand, clearTerminal, isTerminalCleared } =
    useTerminal();
  const [showBoot, setShowBoot] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Simulate boot sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoot(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Auto scroll to bottom when new output is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [outputHistory]);

  // Handle clear command
  const handleClear = () => {
    // Use the clearTerminal function from context
    clearTerminal();
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="terminal-window bg-gray-900 border border-gray-700 rounded-md overflow-hidden shadow-2xl">
        {/* Terminal header */}
        <div className="bg-gray-800 border-b border-gray-700 p-2 flex justify-between items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-xs">guest@portfolio:~</div>
          <div className="text-gray-400 text-xs">
            {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* Terminal content */}
        <div
          ref={terminalRef}
          data-theme="pink"
          className="p-4 h-[70vh] overflow-y-auto font-mono text-sm"
        >
          {showBoot ? (
            <BootSequence />
          ) : (
            <>
              {!isTerminalCleared && <TerminalOutput />}
              {isTerminalCleared && (
                <div className="mb-4">
                  <div className="mb-2 text-xl font-bold">
                    Welcome to my terminal portfolio!
                  </div>
                  <div className="mb-4">
                    Type <span className="text-pink-400">'help'</span> to see
                    available commands.
                  </div>
                </div>
              )}
              <CommandLine onExecute={executeCommand} onClear={handleClear} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const BootSequence: React.FC = () => {
  const [bootStage, setBootStage] = useState(0);

  useEffect(() => {
    const stages = [
      { delay: 300, stage: 1 },
      { delay: 600, stage: 2 },
      { delay: 1000, stage: 3 },
      { delay: 1400, stage: 4 },
      { delay: 1700, stage: 5 },
    ];

    stages.forEach(({ delay, stage }) => {
      const timer = setTimeout(() => {
        setBootStage(stage);
      }, delay);

      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <div className="text-pink-400 space-y-1" data-theme="pink">
      {bootStage >= 1 && <div>Initializing system...</div>}
      {bootStage >= 2 && <div>Loading kernel modules...</div>}
      {bootStage >= 3 && <div>Starting portfolio services...</div>}
      {bootStage >= 4 && <div>Establishing secure connection...</div>}
      {bootStage >= 5 && <div>Ready. Starting terminal session...</div>}
    </div>
  );
};

export default Terminal;
