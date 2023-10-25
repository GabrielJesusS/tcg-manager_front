import { IFetch } from "../@types/IFetch";
import { useFetch } from "./useFetch";
import { createGetArticleById } from "@/factories/createGetArticleById";
import { IArticleResponse } from "@/data/remote/responses/ArticleResponse";

const getArticleUseCase = createGetArticleById();

export function useGetArticle(articleId: string | null): IFetch<IArticleResponse> {
  const { data, error, mutate } = useFetch<IArticleResponse>({
    name: articleId ? `article${articleId}` : null,
    useCase: async () => await getArticleUseCase.execute(articleId as string),
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
