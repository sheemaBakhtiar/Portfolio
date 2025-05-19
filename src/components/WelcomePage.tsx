import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface WelcomePageProps {
  onComplete: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // After animation completes, wait a bit and then call onComplete
        setTimeout(onComplete, 1000);
      },
    });

    // Initial state - everything invisible
    gsap.set([textRef.current, nameRef.current], { opacity: 0 });

    // Animation sequence
    tl.to(containerRef.current, {
      backgroundColor: "#111",
      duration: 1.5,
      ease: "power2.inOut",
    })
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.out(1.7)",
      })
      .to(nameRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        delay: 0.3,
      })
      .to([textRef.current, nameRef.current], {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 1.5,
      })
      .to(containerRef.current, {
        opacity: 0,
        duration: 1,
      });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <div ref={textRef} className="text-center">
        <h1 className="text-3xl md:text-5xl text-white font-mono mb-4">
          Hello, I am{" "}
          <span ref={nameRef} className="text-pink-400 font-bold glitch-text">
            Sheema Bakhtiar
          </span>
        </h1>
      </div>
    </div>
  );
};

export default WelcomePage;
