import { IUsecase } from "@/core/Usecase";
import { IUserRepository } from "../repositories/IUserRepository";
import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface IUserUpdateParams {
  id: string;
  user_name: string;
  name: string;
  email: string;
}

export class UpdateUserUseCase implements IUsecase {
  constructor(private readonly repository: IUserRepository) {}

  async execute(
    params: IUserUpdateParams
  ): Promise<TEither<TApplicationError, undefined>> {
    return await this.repository.update(params);
  }
}
