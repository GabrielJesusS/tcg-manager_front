import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IUsecase } from "@/core/Usecase";
import { ICardRepository } from "../repositories/ICardRepository";

interface ICardListProps {
  data: ICardItem[]
  page: number
  pageSize: number;
  count: number;
  totalCount: number;
}

interface ICardItem{
  id: string;
  name: string;
  subtypes: string[];
  supertype: string;
  images: {
    small: string;
    large: string;
  };
}

export class GetCardListUsecase implements IUsecase {
  constructor(private readonly cardRepository: ICardRepository) {}
  execute(): Promise<TEither<TApplicationError, ICardListProps>> {
    return this.cardRepository.getList();
  }
}
