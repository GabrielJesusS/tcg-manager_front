import { createGetUserByIdUseCase } from "@/factories/createGetUserByIdUseCase";
import { useFetch } from "./useFetch";
import { IFetch } from "../@types/IFetch";

const getUserByIdUseCase = createGetUserByIdUseCase();

interface IGetProfile {
  id: number | string;
  user_name: string;
  name: string;
  email: string;
  experience_level: number;
}

export function useGetUser(userId?: string): IFetch<IGetProfile> {
  const { data, error, mutate } = useFetch<IGetProfile>({
    name: userId ?? null,
    useCase: async () => await getUserByIdUseCase.execute(userId as string),
    shouldFetch: false,
    swr: {
      revalidateOnFocus: false,
    },
  });

  function update(cleanCache: boolean): void {
    if (cleanCache) {
      void mutate(undefined);
      return;
    }

    void mutate();
  }

  return {
    data,
    error,
    update,
    isLoading: !data && !error,
  };
}
