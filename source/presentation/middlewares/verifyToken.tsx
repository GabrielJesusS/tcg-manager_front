import { FC, useEffect } from "react";
import { useGetProfile } from "../hooks/useGetProfile";
import { userDataAtom } from "../store/genericAtoms";
import { useRecoilState } from "recoil";
import { Loading } from "../components/common/Loading";
import { useRouter } from "next/router";

export const verifyToken = (Component: FC): FC => {
  const comp = (): JSX.Element => {

    const {push} = useRouter(); 
    const { data, error, isLoading, update} = useGetProfile();

    if(data && !isLoading){
        return <Component/>;
    }

    if(error && !isLoading){
        push("/")
    }


    return <Loading/>
  };

  return comp;
};
