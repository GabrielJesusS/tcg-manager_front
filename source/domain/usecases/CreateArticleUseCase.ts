import { IUsecase } from "@/core/Usecase";
import { IArticleRepository } from "../repositories/IArticleRepository";

interface IArticleCreateParams {
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

  async execute(params: IArticleCreateParams): Promise<unknown> {
    return await this.articleRepository.create(params);
  }
}
