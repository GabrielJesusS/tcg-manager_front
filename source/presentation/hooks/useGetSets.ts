import { createGetSetListUsecase } from "@/factories/createGetSetListUsecase";
import { IInfiniteFetch } from "../@types/IInfiniteFetch";
import { useInfinite } from "./useInfinite";

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

interface ISetListKey {
  key: string;
  page: number;
}

function getKey() {
  return (index: number, prevData: any): ISetListKey | null => {
    if (prevData && !prevData.data) return null;
    return {
      key: "SetCardList",
      page: index + 1,
    };
  };
}

export const useGetSets = (
): IInfiniteFetch<ISetResponse> => {
  const { data, mutate, error, isValidating, setSize, size } =
    useInfinite<ISetResponse>({
      getKey: getKey(),
      useCase: async (e: ISetListKey) => {
        return await getSetsUsecase.execute({
          page: e.page,
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
