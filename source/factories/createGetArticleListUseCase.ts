import { TFactory } from "@/core/Factory";
import { ArticleRepository } from "@/data/remote/ArticleRepository";
import { GetArticleListUseCase } from "@/domain/usecases/GetArticleListUseCase";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createGetArticleListUseCase: TFactory<GetArticleListUseCase> =
  () => {
    const client = new HttpClientAxios();
    const repository = new ArticleRepository(client);
    return new GetArticleListUseCase(repository);
  };
