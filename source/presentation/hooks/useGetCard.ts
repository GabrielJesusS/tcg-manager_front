import { createGetCardUsecase } from "@/factories/createGetCardUsecase";
import { IFetch } from "../@types/IFetch";
import { IPokemonCardResponse } from "../@types/IPokemonCard";
import { useFetch } from "./useFetch";

const getCardUsecase = createGetCardUsecase();

export function useGetCard(
  cardId: string | null
): IFetch<IPokemonCardResponse> {
  const { data, error, mutate } = useFetch<IPokemonCardResponse>({
    name: cardId,
    useCase: async () => await getCardUsecase.execute(cardId as string),
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
