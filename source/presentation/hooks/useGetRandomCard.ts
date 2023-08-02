import { createGetCardUsecase } from "@/factories/createGetCardUsecase";
import { createGetRandomCardUsecase } from "@/factories/createGetRandomCardUsecase";
import { IFetch } from "../@types/IFetch";
import { IPokemonCard } from "../@types/IPokemonCard";
import { useFetch } from "./useFetch";

const getCardUsecase = createGetRandomCardUsecase();

interface IRandomCard {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
};

export function useGetRandomCard(): IFetch<IRandomCard> {
  const { data, error, mutate } = useFetch<IRandomCard>({
    name: "randomCard",
    useCase: async () => await getCardUsecase.execute(),
    swr: {
      revalidateOnFocus:false,
      revalidateIfStale: false,
    }
  });

  function update(cleanCache: boolean) {
    if (cleanCache) {
      return mutate(undefined);
    }

    return mutate();
  }

  return {
    data,
    error,
    update,
    isLoading: !data && !error,
  };
}
