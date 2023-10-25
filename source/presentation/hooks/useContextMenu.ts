import { MutableRefObject, useEffect } from "react";

export function useContextMenu<T extends HTMLElement, U extends HTMLElement>(
  anchor: MutableRefObject<T | null>,
  menu: MutableRefObject<U | null>
): void {
  useEffect(() => {
    if (!anchor.current) return;

    function openMenu(e: Event): void {
      if (!anchor.current || !menu.current) return;
      if (e instanceof MouseEvent) {
        const rect = anchor.current.getBoundingClientRect();
        const rectMenu = menu.current.getBoundingClientRect();
        const windowHalfSize = window.innerWidth / 2;

        const isRight = windowHalfSize > e.clientX;

        const x = e.clientX - rect.left - (isRight ? 0 : rectMenu.width);
        const y = e.clientY - rect.top;

        menu.current.style.left = `${x}px`;
        menu.current.style.top = `${y}px`;
      }
    }

    anchor.current.addEventListener("contextmenu", openMenu);

    return () => {
      if (!anchor.current) return;
      anchor.current.removeEventListener("contextmenu", openMenu);
    };
  });
}
