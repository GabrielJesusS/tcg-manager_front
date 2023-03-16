import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IUsecase } from "@/core/Usecase";
import { ICardRepository } from "../repositories/ICardRepository";

interface ICardListParams {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
}

export class GetCardListUsecase implements IUsecase {
  constructor(private readonly cardRepository: ICardRepository) {}
  execute(): Promise<TEither<TApplicationError, ICardListParams[]>> {
    return this.cardRepository.getList();
  }
}
