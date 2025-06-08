"use client";

import { useState, useEffect } from 'react';

interface CounterProps {
  start?: number;
  end: number;
  duration?: number;
  className?: string;
}

export default function Counter({ 
  start = 0, 
  end, 
  duration = 2000,
  className = ""
}: CounterProps) {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    if (start === end) return;
    
    const difference = end - start;
    const incrementsPerMs = difference / duration;
    
    let timer: NodeJS.Timeout;
    let currentCount = start;
    const startTime = Date.now();
    
    const updateCounter = () => {
      const elapsedTime = Date.now() - startTime;
      
      if (elapsedTime >= duration) {
        setCount(end);
        return;
      }
      
      currentCount = Math.floor(start + (incrementsPerMs * elapsedTime));
      setCount(currentCount);
      
      timer = setTimeout(updateCounter, 16); // ~60fps
    };
    
    timer = setTimeout(updateCounter, 16);
    
    return () => clearTimeout(timer);
  }, [start, end, duration]);
  
  return <span className={className}>{count}</span>;
} 