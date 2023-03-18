import { createGetCardUsecase } from "@/factories/createGetCardUsecase";
import { IFetch } from "../@types/IFetch";
import { IPokemonCard } from "../@types/IPokemonCard";
import { useFetch } from "./useFetch";

const getCardUsecase = createGetCardUsecase();

export function useGetCard(cardId: string | null): IFetch<IPokemonCard> {
  const { data, error, mutate } = useFetch<IPokemonCard>({
    name: cardId,
    useCase: async () => await getCardUsecase.execute(cardId as string),
    shouldFetch: false,
    swr:{
      revalidateOnFocus:false,
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
