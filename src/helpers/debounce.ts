import { useEffect, useRef } from "react";

const useDebounce = <Func extends (...args: any[]) => void>(
  func: Func,
  delay: number
) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  const debouncedFunction = (...args: any[]) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  };

  return debouncedFunction as Func;
};

export default useDebounce;
