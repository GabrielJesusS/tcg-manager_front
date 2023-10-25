import { createGetProfileUsecase } from "@/factories/createGetProfileUsecase";
import { IFetch } from "../@types/IFetch";
import { useFetch } from "./useFetch";

const getProfileUsecase = createGetProfileUsecase();

interface IGetProfile {
  id: number | string;
  user_name: string;
  name: string;
  email: string;
  experience_level: number;
  admin: boolean;
}

export const useGetProfile = (): IFetch<IGetProfile> => {
  const { data, error, mutate } = useFetch({
    name: "GetUserProfile",
    useCase: async () => await getProfileUsecase.execute(),
    swr: {
      shouldRetryOnError: false,
      revalidateIfStale: false,
      revalidateOnFocus: false,
    },
  });

  function update(clear: boolean): void {
    if (clear) {
      void mutate(undefined);
      return;
    }

    void mutate();
  }

  const isLoading = !data && !error;

  return {
    data,
    error,
    update,
    isLoading,
  };
};
