import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IUsecase } from "@/core/Usecase";
import { IUserRepository } from "../repositories/IUserRepository";

interface IUserRegisterParams {
  userName: string;
  email: string;
  password: string;
}

export class RegisterUserUsecase implements IUsecase {
  constructor(private readonly userRepository: IUserRepository) {}
  execute(
    params: IUserRegisterParams
  ): Promise<TEither<TApplicationError, undefined>> {
    return this.userRepository.create(params);
  }
}
