import { FC, useEffect } from "react";
import { useGetProfile } from "../hooks/useGetProfile";
import { userDataAtom } from "../store/genericAtoms";
import { useRecoilState } from "recoil";

export const loadUserData = (Component: FC): FC => {
  const comp = (): JSX.Element => {

    const [userData , setUserData ]= useRecoilState(userDataAtom);
    const { data, error, isLoading, update} = useGetProfile();

    console.log(data);

    useEffect(()=>{

        if(data){
            setUserData({...data, })
        }

    },[data, error])
    
    return <Component/>;
  };

  return comp;
};
