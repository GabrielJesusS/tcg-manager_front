import { useCallback } from "react";

export function useLockBody(): (() => void)[] {
  const lock = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const unlock = useCallback(() => {
    document.body.style.overflow = "auto";
  }, []);

  return [lock, unlock];
}
