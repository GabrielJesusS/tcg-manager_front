import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IUsecase } from "@/core/Usecase";
import { ICardRepository } from "../repositories/ICardRepository";

interface ICardListProps {
  data: ICardItem[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

interface ICardItem {
  id: string;
  name: string;
  subtypes: string[];
  supertype: string;
  images: {
    small: string;
    large: string;
  };
}

interface ISearchOnList {
  searchParams?: string;
  page?: number;
  pageSize?: number;
  orderBy?: string;
}

export class GetCardListUsecase implements IUsecase {
  constructor(private readonly cardRepository: ICardRepository) {}
  async execute(
    params: ISearchOnList
  ): Promise<TEither<TApplicationError, ICardListProps>> {
    return await this.cardRepository.getList(params);
  }
}
