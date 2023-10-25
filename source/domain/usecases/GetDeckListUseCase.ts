import { IUsecase } from "@/core/Usecase";
import { IDeckRepository } from "../repositories/IDeckRepository";
import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface IDeckItem {
  id: string;
  name: string;
  description: string;
  difficulty: number;
  user: {
    id: string;
    user_name: string;
  };
}

interface IDeckListProps {
  data: IDeckItem[];
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

export class GetDeckListUseCase implements IUsecase {
  constructor(private readonly repository: IDeckRepository) {}

  async execute(
    params: ISearchOnList
  ): Promise<TEither<TApplicationError, IDeckListProps>> {
    return await this.repository.getList(params);
  }
}
