import { useInfinite } from "./useInfinite";

import { IInfiniteFetch } from "../@types/IInfiniteFetch";
import { generateFilterString } from "../utils/generateFilterString";
import { OrderByEnum } from "../enums/OrderByEnum";
import { IArticleListResponse } from "@/data/remote/responses/ArticleListResponse";
import { createGetArticleListUseCase } from "@/factories/createGetArticleListUseCase";

interface IArticleFilter {
  name: string;
  types: string;
  supertype: string;
  subtypes: string;
  "set.id"?: string;
}

interface IArticleListKey {
  key: string;
  page: number;
}

const articleListUseCase = createGetArticleListUseCase();

function getKey(params: IArticleFilter, order: OrderByEnum) {
  return (index: number, prevData: any): IArticleListKey | null => {
    if (prevData && !prevData.data) return null;
    return {
      key: "ArticleList" + generateFilterString(params) + order,
      page: index + 1,
    };
  };
}

export const useGetArticles = (
  params: IArticleFilter,
  order: OrderByEnum
): IInfiniteFetch<IArticleListResponse> => {
  const { data, mutate, error, isValidating, setSize, size } =
    useInfinite<IArticleListResponse>({
      getKey: getKey(params, order),
      useCase: async (e: IArticleListKey) => {
        return await articleListUseCase.execute({
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
