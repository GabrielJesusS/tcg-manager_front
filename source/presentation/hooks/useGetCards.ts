import { createGetCardListUsecase } from "@/factories/createGetCardListUsecase";
import { useInfinite } from "./useInfinite";
import { ICardListResponse } from "@/data/remote/responses/CardListResponse";
import { IInfiniteFetch } from "../@types/IInfiniteFetch";
import { generateFilterString } from "../utils/generateFilterString";

interface ICardFilter {
  name: string;
  types: string;
  supertype: string;
  subtypes: string;
}

interface ICardListKey {
  key: string;
  page: number;
}

const getCardListUsecase = createGetCardListUsecase();

function getKey(params: ICardFilter) {
  return (index: number, prevData: any): ICardListKey | null => {
    if (prevData && !prevData.data) return null;
    return {
      key: "PokemonCardList" + generateFilterString(params),
      page: index + 1,
    };
  };
}

export const useGetCards = (
  params: ICardFilter
): IInfiniteFetch<ICardListResponse> => {
  
  const { data, mutate, error, isValidating, setSize, size } =
    useInfinite<ICardListResponse>({
      getKey: getKey(params),
      useCase: async (e: ICardListKey) => {
        return await getCardListUsecase.execute({
          page: e.page,
          searchParams: generateFilterString(params),
        });
      },
      swr: {
        revalidateFirstPage: false,
      },
    });

  console.log(data, error);

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
