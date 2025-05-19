import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TerminalIcon } from "lucide-react";

interface LandingPageProps {
  onOpenTerminal: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onOpenTerminal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial state
    gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
      opacity: 0,
      y: 20,
    });

    // Animation sequence
    tl.to(containerRef.current, {
      opacity: 1,
      duration: 0.5,
    })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 opacity-0"
    >
      <div className="max-w-3xl text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-green-400 mb-6 font-mono"
        >
          Terminal Portfolio
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-12 font-mono"
        >
          Explore my work and skills through an interactive command-line
          interface
        </p>

        <button
          ref={buttonRef}
          onClick={onOpenTerminal}
          className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-bold rounded-md flex items-center justify-center space-x-2 transition-colors duration-300 mx-auto terminal-button"
        >
          <TerminalIcon size={24} />
          <span>Open Terminal</span>
        </button>
      </div>

      <div className="absolute bottom-8 text-gray-500 font-mono text-sm">
        © {new Date().getFullYear()} Sheema Bakhtiar | All Rights Reserved
      </div>
    </div>
  );
};

export default LandingPage;
