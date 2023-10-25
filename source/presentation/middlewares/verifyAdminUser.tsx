import { FC } from "react";
import { useGetProfile } from "../hooks/useGetProfile";
import { Loading } from "../components/common/Loading";
import { useRouter } from "next/router";
export const verifyAdminToken = (Component: FC): FC => {
  const comp = (): JSX.Element => {
    const { replace } = useRouter();
    const { data, error, isLoading } = useGetProfile();

    if (data && !isLoading) {
      if (data.admin) {
        return <Component />;
      }
      void replace("/404");
    }

    if (error && !isLoading) {
      void replace("/");
    }

    return <Loading />;
  };

  return comp;
};
