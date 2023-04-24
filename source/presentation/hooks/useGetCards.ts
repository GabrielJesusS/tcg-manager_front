import { createGetCardListUsecase } from "@/factories/createGetCardListUsecase";
import { useFetch } from "./useFetch";
import { generateFilterString } from "../utils/generateFilterString";

interface ICardFilter {
  name: string;
  types: string;
  supertype: string;
  subtypes: string;
}


const getCardListUsecase = createGetCardListUsecase();

export const useGetCards = (offsetPage: number, filters: ICardFilter) => {
  const { data, mutate, error, isValidating } = useFetch({
    name: "pokemonCardList",
    useCase: async () =>
      await getCardListUsecase.execute({
        page: offsetPage,
        searchParams: generateFilterString(filters),
      }),
    swr: {
      revalidateOnFocus: false,
    },
  });

  return {
    data,
    mutate,
    error,
    isValidating,
  };
};
