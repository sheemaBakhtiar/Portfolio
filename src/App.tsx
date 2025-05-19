import React, { useState, useEffect, useRef } from "react";
import Terminal from "./components/Terminal";
import WelcomePage from "./components/WelcomePage";
import LandingPageContent from "./components/LandingPageContent";
import FloatingIcons from "./components/FloatingIcons";
import { TerminalProvider } from "./context/TerminalContext";
import gsap from "gsap";
import "./App.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLanding, setShowLanding] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const terminalContainerRef = useRef<HTMLDivElement>(null);

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
    // First show the terminal (initially with opacity 0)
    setShowTerminal(true);

    // Then animate it in after it's mounted
    setTimeout(() => {
      if (terminalContainerRef.current) {
        // Set initial state
        gsap.set(terminalContainerRef.current, {
          opacity: 0,
          y: 20,
        });

        // Animate in
        gsap.to(terminalContainerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      }
      // Hide the landing page after a slight delay
      setTimeout(() => {
        setShowLanding(false);
      }, 300);
    }, 50);
  };

  const handleBackToLanding = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // Create animation for terminal exit
    if (terminalContainerRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          // After animation completes, update states
          setShowTerminal(false);
          setLoaded(false);
          setShowLanding(true);

          // Add a small delay before showing the landing page
          setTimeout(() => {
            setIsTransitioning(false);
          }, 100);
        },
      });

      // Animate terminal container with a more interesting transition
      tl.to(terminalContainerRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.98,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      // Fallback if ref is not available
      setShowTerminal(false);
      setLoaded(false);
      setShowLanding(true);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }
  };

  return (
    <div className="relative">
      <FloatingIcons />
      <TerminalProvider>
        {showWelcome && <WelcomePage onComplete={handleWelcomeComplete} />}

        {showLanding && (
          <div
            className={`transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <LandingPageContent onOpenTerminal={handleOpenTerminal} />
          </div>
        )}

        {showTerminal && (
          <div
            ref={terminalContainerRef}
            className="min-h-screen bg-gray-900 text-pink-500 font-mono flex flex-col"
          >
            <header className="p-4 flex justify-between items-center border-b border-gray-700">
              <div className="flex items-center">
                <h1 className="text-xl font-bold">terminal_portfolio</h1>
                <button
                  onClick={handleBackToLanding}
                  className="ml-4 px-3 py-1 text-xs bg-gray-800 rounded text-pink-400 transition-all duration-300 transform back-button"
                  aria-label="Return to portfolio landing page"
                >
                  Back to Portfolio
                </button>
              </div>
              <div className="text-gray-400 text-xs">
                {new Date().toLocaleTimeString()}
              </div>
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
    </div>
  );
}

export default App;
