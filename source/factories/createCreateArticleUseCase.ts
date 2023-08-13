import { TFactory } from "@/core/Factory";
import { ArticleRepository } from "@/data/remote/ArticleRepository";
import { CreateArticleUseCase } from "@/domain/usecases/CreateArticleUseCase";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createCreateArticleUseCase: TFactory<CreateArticleUseCase> =
  () => {
    const httpClient = new HttpClientAxios();
    const repository = new ArticleRepository(httpClient);

    return new CreateArticleUseCase(repository);
  };
