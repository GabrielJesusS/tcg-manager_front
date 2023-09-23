import { useEffect, useRef } from "react";

interface IUseIsMountedReturn {
  isMounted: boolean;
}

export function useIsMounted(): IUseIsMountedReturn {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { isMounted: isMounted.current };
}
