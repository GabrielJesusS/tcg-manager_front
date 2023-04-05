import { IUsecase } from "@/core/Usecase";
import { IUserRepository } from "../repositories/IUserRepository";
import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";

interface IUserDataProps {
  id: number | string;
  user_name: string;
  name: string;
  email: string;
  experience_level: number;
}

export class GetUserProfileUsecase implements IUsecase {
  constructor(private readonly repository: IUserRepository) {}
  execute(): Promise<TEither<TApplicationError, IUserDataProps>> {
    return this.repository.getProfile();
  }
}
