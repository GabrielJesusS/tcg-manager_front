import { useMemo } from "react";
import { useWindowSize } from "./useWindowSize";

export function useGetMobile(): boolean {
  const windowSize = useWindowSize();

  const isMobile = useMemo(() => {
    if (!windowSize.width) {
      return false;
    }

    return windowSize.width < 1024;
  }, [windowSize]);

  return isMobile;
}
