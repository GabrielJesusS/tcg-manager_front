import { IUsecase } from "@/core/Usecase";
import { IDeckRepository } from "../repositories/IDeckRepository";
import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface ICreateDeckParams {
  name: string;
  description: string;
  difficulty: number;
  cards: Array<{ card_id: string }>;
  user: {
    id: string;
  };
}

export class CreateDeckUseCase implements IUsecase {
  private readonly repository: IDeckRepository;

  constructor(repository: IDeckRepository) {
    this.repository = repository;
  }

  async execute(
    params: ICreateDeckParams
  ): Promise<TEither<TApplicationError, undefined>> {
    return await this.repository.create(params);
  }
}
