import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

interface IWindowSize {
  height?: number;
  width?: number;
}

export function useWindowSize():IWindowSize {
  const [windowSize, setWindowSize] = useState<IWindowSize>({});
  function handleResize() {
    console.log("dawdiajwodijao")
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });
  }

  const debouncedFunction = useDebounce(handleResize, 2000);

  useEffect(() => {
    window.addEventListener("resize", debouncedFunction);

    debouncedFunction;

    return () => window.removeEventListener("resize", debouncedFunction);
  }, []);
  return windowSize
}
