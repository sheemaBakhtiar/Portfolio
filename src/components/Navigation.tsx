import React, { useState, useEffect } from 'react';
import { TerminalIcon } from 'lucide-react';

interface NavigationProps {
  onOpenTerminal: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-green-400 font-bold text-xl">SB</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            Contact
          </button>
          <button
            onClick={onOpenTerminal}
            className="px-3 py-2 bg-green-500 hover:bg-green-600 text-black font-bold rounded-md flex items-center space-x-1 transition-colors duration-300"
          >
            <TerminalIcon size={16} />
            <span>Terminal</span>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <div className="flex flex-col py-4 px-4 space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-green-400 transition-colors text-left py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-green-400 transition-colors text-left py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-green-400 transition-colors text-left py-2"
            >
              Contact
            </button>
            <button
              onClick={onOpenTerminal}
              className="px-3 py-2 bg-green-500 hover:bg-green-600 text-black font-bold rounded-md flex items-center space-x-1 transition-colors duration-300 w-full justify-center"
            >
              <TerminalIcon size={16} />
              <span>Terminal</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
