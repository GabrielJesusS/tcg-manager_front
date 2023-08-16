import { IUsecase } from "@/core/Usecase";
import { ISubtypeRepository } from "../repositories/ISubtypeRepository";
import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface ISubtypeResponse {
  data: string[];
}

export class GetSubtypesUseCase implements IUsecase {
  constructor(private readonly repository: ISubtypeRepository) {}

  async execute(): Promise<TEither<TApplicationError, ISubtypeResponse>> {
    return await this.repository.getList();
  }
}
