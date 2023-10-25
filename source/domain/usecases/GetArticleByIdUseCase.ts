import { IUsecase } from "@/core/Usecase";
import { IArticleRepository } from "../repositories/IArticleRepository";
import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface IArticle {
  id: number;
  content: string;
  created_at: string;
  title: string;
  description: string;
}

export class GetArticleByIdUseCase implements IUsecase {
  constructor(private readonly repository: IArticleRepository) {}

  async execute(id: string): Promise<TEither<TApplicationError, IArticle>> {
    return await this.repository.getById(id);
  }
}
