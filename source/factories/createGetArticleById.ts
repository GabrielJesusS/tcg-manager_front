import { TFactory } from "@/core/Factory";
import { ArticleRepository } from "@/data/remote/ArticleRepository";
import { GetArticleByIdUseCase } from "@/domain/usecases/GetArticleByIdUseCase";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createGetArticleById: TFactory<GetArticleByIdUseCase> = () => {
  const client = new HttpClientAxios();
  const repository = new ArticleRepository(client);
  return new GetArticleByIdUseCase(repository);
};
