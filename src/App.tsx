import React, { useState, useEffect } from "react";
import Terminal from "./components/Terminal";
import ThemeToggle from "./components/ThemeToggle";
import WelcomePage from "./components/WelcomePage";
import LandingPageContent from "./components/LandingPageContent";
import { TerminalProvider } from "./context/TerminalContext";
import "./App.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLanding, setShowLanding] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulating loading for terminal
    if (showTerminal) {
      const timer = setTimeout(() => {
        setLoaded(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [showTerminal]);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setShowLanding(true);
  };

  const handleOpenTerminal = () => {
    setShowLanding(false);
    setShowTerminal(true);
  };

  const handleBackToLanding = () => {
    setShowTerminal(false);
    setLoaded(false);
    setShowLanding(true);
  };

  return (
    <TerminalProvider>
      {showWelcome && <WelcomePage onComplete={handleWelcomeComplete} />}

      {showLanding && (
        <LandingPageContent onOpenTerminal={handleOpenTerminal} />
      )}

      {showTerminal && (
        <div className="min-h-screen bg-gray-900 text-green-500 font-mono flex flex-col">
          <header className="p-4 flex justify-between items-center border-b border-gray-700">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">terminal_portfolio</h1>
              <button
                onClick={handleBackToLanding}
                className="ml-4 px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded text-green-400"
              >
                Back to Portfolio
              </button>
            </div>
            <ThemeToggle />
          </header>

          <main className="flex-1 p-4 flex flex-col items-center justify-center">
            {loaded ? (
              <Terminal />
            ) : (
              <div className="animate-pulse">Loading terminal...</div>
            )}
          </main>

          <footer className="p-4 text-xs text-center text-gray-500 border-t border-gray-700">
            © {new Date().getFullYear()} | Type 'help' for available commands
          </footer>
        </div>
      )}
    </TerminalProvider>
  );
}

export default App;
