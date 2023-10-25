import { IUsecase } from "@/core/Usecase";
import { IArticleRepository } from "../repositories/IArticleRepository";
import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface IArticleCreateParams {
  title: string;
  description: string;
  content: string;
  user: {
    id: number | string;
  };
  uploadImages: Array<{
    identifier?: string;
    string64: string;
    originalName: string;
  }>;
}

export class CreateArticleUseCase implements IUsecase {
  constructor(private readonly articleRepository: IArticleRepository) {}

  async execute(params: IArticleCreateParams): Promise<TEither<TApplicationError, void>> {
    return await this.articleRepository.create(params);
  }
}
