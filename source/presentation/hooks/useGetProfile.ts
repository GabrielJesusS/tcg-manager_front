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
}

export const useGetProfile = (): IFetch<IGetProfile> => {
  const { data, error, mutate } = useFetch({
    name: "GetUserProfile",
    useCase: async () => getProfileUsecase.execute(),
  });

  function update(clear: boolean) {
    if (clear) {
      mutate(undefined);
      return;
    }

    mutate();
  }

  const isLoading = !data && !error;

  return {
    data,
    error,
    update,
    isLoading,
  };
};
