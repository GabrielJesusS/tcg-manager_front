import { TEither } from "@/core/Either";
import { IUserRepository } from "../repositories/IUserRepository";
import { TApplicationError } from "@/core/Errors";
import { IUsecase } from "@/core/Usecase";

export class SignOutUsecase implements IUsecase {
  constructor(private readonly repository: IUserRepository) {}

  execute(): Promise<TEither<TApplicationError, undefined>> {
    return this.repository.signOut();
  }
}
