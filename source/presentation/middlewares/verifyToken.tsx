import { FC } from "react";

export const verifyToken = (Component: FC): FC => {
  const comp = (): JSX.Element => {




    return <Component/>;
  };

  return comp;
};
