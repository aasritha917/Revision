import { useEffect, useRef, useState } from "react";

export default function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();
    const remaining = delay - (now - lastTimeRef.current);

    const timer = setTimeout(() => {
      setThrottledValue(value);
      lastTimeRef.current = Date.now();
    }, remaining > 0 ? remaining : 0);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return throttledValue;
}
