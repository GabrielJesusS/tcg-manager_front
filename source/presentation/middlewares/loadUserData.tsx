import { FC, useEffect } from "react";
import { useGetProfile } from "../hooks/useGetProfile";
import { userDataAtom } from "../store/genericAtoms";
import { useSetRecoilState } from "recoil";

export const loadUserData = (Component: FC): FC => {
  const comp = (): JSX.Element => {
    const setUserData = useSetRecoilState(userDataAtom);
    const { data, error } = useGetProfile();

    useEffect(() => {
      if (data) {
        setUserData({ ...data });
      }
    }, [data, error]);

    return <Component />;
  };

  return comp;
};
