/**
 * Custom Hook for Counter Animation
 * Provides animated counting functionality for statistics
 */

import { useState, useEffect } from 'react';

interface UseCounterConfig {
  target: number;
  increment: number;
  interval: number;
}

export const useCounter = ({ target, increment, interval }: UseCounterConfig) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    
    const timer = setInterval(() => {
      if (current < target) {
        current += increment;
        setCount(Math.min(current, target));
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target, increment, interval]);

  return count;
};