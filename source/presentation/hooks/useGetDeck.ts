import { createGetDeckByIdUseCase } from "@/factories/createGetDeckByIdUseCase";
import { IFetch } from "../@types/IFetch";
import { useFetch } from "./useFetch";
import { IDeckResponse } from "@/data/remote/responses/DeckResponse";

const getDeckUseCase = createGetDeckByIdUseCase();

export function useGetDeck(deckId: string | null): IFetch<IDeckResponse> {
  const { data, error, mutate } = useFetch<IDeckResponse>({
    name: deckId ? `deck${deckId}` : null,
    useCase: async () => await getDeckUseCase.execute(deckId as string),
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
