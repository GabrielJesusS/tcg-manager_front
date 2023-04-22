import { createGetSetListUsecase } from "@/factories/createGetSetListUsecase";
import { useFetch } from "./useFetch";
import { IFetch } from "../@types/IFetch";
import { generateFilterString } from "../utils/generateFilterString";

const getSetsUsecase = createGetSetListUsecase();

interface ISetList {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: {
    unlimited?: string;
    expanded?: string;
    standard?: string;
  };
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: {
    symbol: string;
    logo: string;
  };
}

interface ISetResponse {
  data: ISetList[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

interface ICardFilter {
  name: string;
  types: string;
  supertype: string;
  subtypes: string ;
}

export const useGetSets = (
  offset: number,
  searchParams: ICardFilter
): IFetch<ISetResponse> => {
  const { data, error, isLoading, mutate, isValidating } = useFetch({
    name: "get-sets",
    useCase: async () =>
      await getSetsUsecase.execute({ page: offset, searchParams: generateFilterString(searchParams)}),
    swr: {
      revalidateOnFocus: false,
    },
  });

  function update() {
    mutate();
  }

  return { data, error, update, isLoading: (!data && !error) || isValidating };
};
