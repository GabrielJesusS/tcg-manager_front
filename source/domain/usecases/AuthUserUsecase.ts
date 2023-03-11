import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IUsecase } from "@/core/Usecase";
import { IUserRepository } from "../repositories/IUserRepository";

interface AuthUserParams {
  email: string;
  password: string;
}

export class AuthUserUsecase implements IUsecase {
  constructor(private readonly userRepository: IUserRepository) {}

  execute(
    params: AuthUserParams
  ): Promise<TEither<TApplicationError, undefined>> {
    return this.userRepository.auth(params);
  }
}
