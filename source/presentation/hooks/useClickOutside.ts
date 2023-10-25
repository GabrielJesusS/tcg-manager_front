import { MutableRefObject, useEffect } from "react";

export function useClickOutside<T extends HTMLElement>(
  item: MutableRefObject<T | null>,
  callback: () => void
): void {
  function handleClick({ target }: MouseEvent): void {
    if (item.current && !item.current.contains(target as Node)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleClick);
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mouseup", handleClick);
      document.removeEventListener("mousedown", handleClick);
    };
  });
}
