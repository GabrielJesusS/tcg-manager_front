import { useRef } from "react";

export function useDebounce(func: Function, delay: number) {
  const timeOut = useRef<number>();

  function debouncedFunction<T>(args: T) {
    window.clearTimeout(timeOut.current);
    timeOut.current = window.setTimeout(() => {
      func(args);
    }, delay);
  }

  return debouncedFunction;
}
