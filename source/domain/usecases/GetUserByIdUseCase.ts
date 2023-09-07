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

export class GetUserByIdUseCase implements IUsecase {
  private readonly repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async execute(
    id: string
  ): Promise<TEither<TApplicationError, IUserDataProps>> {
    return await this.repository.getById(id);
  }
}
