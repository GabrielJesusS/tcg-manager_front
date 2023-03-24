import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IUsecase } from "@/core/Usecase";
import { ICardRepository } from "../repositories/ICardRepository";

interface IRandomCardResponse {
  id: string;
}

///
export class GetRandomCardUsecase implements IUsecase {
  constructor(private readonly cardRepository: ICardRepository) {}

  execute(): Promise<TEither<TApplicationError, IRandomCardResponse>> {
    return this.cardRepository.getRandom();
  }
}
