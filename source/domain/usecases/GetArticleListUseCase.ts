import { IUsecase } from "@/core/Usecase";
import { IArticleRepository } from "../repositories/IArticleRepository";
import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface IArticleItem {
  id: number;
  content: string;
  created_at: string;
  title: string;
  description: string;
}

interface IArticleListProps {
  data: IArticleItem[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

interface ISearchOnList {
  searchParams?: string;
  page?: number;
  pageSize?: number;
}

export class GetArticleListUseCase implements IUsecase {
  private readonly repository: IArticleRepository;

  constructor(repository: IArticleRepository) {
    this.repository = repository;
  }

  async execute(
    params: ISearchOnList
  ): Promise<TEither<TApplicationError, IArticleListProps>> {
    return await this.repository.getList(params);
  }
}
