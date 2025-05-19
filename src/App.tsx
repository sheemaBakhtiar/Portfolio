import React, { useState, useEffect } from 'react';
import Terminal from './components/Terminal';
import ThemeToggle from './components/ThemeToggle';
import { TerminalProvider } from './context/TerminalContext';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulating loading
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <TerminalProvider>
      <div className="min-h-screen bg-gray-900 text-green-500 font-mono flex flex-col">
        <header className="p-4 flex justify-between items-center border-b border-gray-700">
          <h1 className="text-xl font-bold">terminal_portfolio</h1>
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
    </TerminalProvider>
  );
}

export default App;