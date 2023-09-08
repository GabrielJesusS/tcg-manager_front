import { createGetCardListUsecase } from "@/factories/createGetCardListUsecase";
import { useInfinite } from "./useInfinite";
import { ICardListResponse } from "@/data/remote/responses/CardListResponse";
import { IInfiniteFetch } from "../@types/IInfiniteFetch";
import { generateFilterString } from "../utils/generateFilterString";
import { OrderByEnum } from "../enums/OrderByEnum";

interface ICardFilter {
  name: string;
  types: string;
  supertype: string;
  subtypes: string;
  "set.id"?: string;
}

interface ICardListKey {
  key: string;
  page: number;
}

const getCardListUsecase = createGetCardListUsecase();

function getKey(params: ICardFilter, order: OrderByEnum) {
  return (index: number, prevData: any): ICardListKey | null => {
    if (prevData && !prevData.data) return null;
    return {
      key: "PokemonCardList" + generateFilterString(params) + order,
      page: index + 1,
    };
  };
}

export const useGetCards = (
  params: ICardFilter,
  order: OrderByEnum
): IInfiniteFetch<ICardListResponse> => {
  const { data, mutate, error, isValidating, setSize, size } =
    useInfinite<ICardListResponse>({
      getKey: getKey(params, order),
      useCase: async (e: ICardListKey) => {
        return await getCardListUsecase.execute({
          page: e.page,
          searchParams: generateFilterString(params),
          orderBy: order,
        });
      },
      swr: {
        revalidateFirstPage: false,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        revalidateOnMount: false
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
