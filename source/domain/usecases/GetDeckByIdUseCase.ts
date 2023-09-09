import { IUsecase } from "@/core/Usecase";
import { IDeckRepository } from "../repositories/IDeckRepository";
import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface ICardDeckInfo {
  id: number;
  card_id: string;
  cardInfo: {
    id: string;
    name: string;
    images: {
      small: string;
      large: string;
    };
  };
}

interface IDeck {
  id: string;
  name: string;
  description: string;
  difficulty: number;
  cards: ICardDeckInfo[];
}

export class GetDeckByIdUseCase implements IUsecase {
  constructor(private readonly repository: IDeckRepository) {}

  async execute(id: string): Promise<TEither<TApplicationError, IDeck>> {
    return await this.repository.getById(id);
  }
}
