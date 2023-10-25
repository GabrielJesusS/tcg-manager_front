import { useInfinite } from "./useInfinite";

import { IInfiniteFetch } from "../@types/IInfiniteFetch";
import { generateFilterString } from "../utils/generateFilterString";
import { OrderByEnum } from "../enums/OrderByEnum";
import { createGetDeckListUseCase } from "@/factories/createGetDeckListUseCase";
import { IDeckListResponse } from "@/data/remote/responses/DeckListResponse";

interface IDeckFilter {
  name: string;
  types: string;
  supertype: string;
  subtypes: string;
  "set.id"?: string;
}

interface IDeckListKey {
  key: string;
  page: number;
}

const deckListUseCase = createGetDeckListUseCase();

function getKey(params: IDeckFilter, order: OrderByEnum) {
  return (index: number, prevData: any): IDeckListKey | null => {
    if (prevData && !prevData.data) return null;
    return {
      key: "DeckList" + generateFilterString(params) + order,
      page: index + 1,
    };
  };
}

export const useGetDecks = (
  params: IDeckFilter,
  order: OrderByEnum
): IInfiniteFetch<IDeckListResponse> => {
  const { data, mutate, error, isValidating, setSize, size } =
    useInfinite<IDeckListResponse>({
      getKey: getKey(params, order),
      useCase: async (e: IDeckListKey) => {
        return await deckListUseCase.execute({
          page: e.page,
          searchParams: generateFilterString(params),
        });
      },
      swr: {
        revalidateFirstPage: false,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      },
    });

  return {
    data,
    size,
    setSize,
    mutate,
    error,
    isValidating,
    isLoading: !data && !error,
  };
};
