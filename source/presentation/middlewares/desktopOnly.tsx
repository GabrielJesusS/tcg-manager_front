import { FC } from "react";
import { useGetMobile } from "../hooks/useGetMobile";
import { AdminDisabled } from "../components/admin/AdminDisabled";

export const desktopOnly = (Component: FC): FC => {
  const comp: FC = (): JSX.Element => {
    const isMobile = useGetMobile();

    
    if(isMobile) return  <AdminDisabled />

    return  <Component />;
  };

  return comp;
};
