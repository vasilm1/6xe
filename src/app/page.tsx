"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Random glitch effect on page load
    const randomGlitch = () => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    };
    
    randomGlitch();
    
    // Occasional random glitches
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        randomGlitch();
      }
    }, 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-black relative">
      {/* Main title with glitch effect */}
      <h1 
        className={`text-9xl font-bold tracking-tighter ${glitchActive ? 'animate-glitch' : ''}`}
        style={{ fontFamily: 'var(--font-rubik-glitch)' }}
      >
        <span className="text-red-600 relative">
          6XE
          <span className="absolute -top-1 -left-1 text-red-700 opacity-30 blur-[1px]">6XE</span>
        </span>
      </h1>
      
      {/* Footer with Twitter link */}
      <div className="fixed bottom-5">
        <Link 
          href="https://twitter.com/6XE" 
          target="_blank"
          className="text-xs text-gray-600 hover:text-red-500 transition-colors duration-300"
          style={{ fontFamily: 'var(--font-orbitron)' }}
        >
          @ 6XE
        </Link>
      </div>
    </main>
  );
}
