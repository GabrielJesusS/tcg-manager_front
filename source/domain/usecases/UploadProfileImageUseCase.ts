import { IUsecase } from "@/core/Usecase";
import { IUserRepository } from "../repositories/IUserRepository";
import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import { IUserProfileImageResponse } from "@/data/remote/responses/UserProfileImageResponse";

interface IUserProfileImageParams {
  string64: string;
  originalName: string;
  user: {
    id: string;
  };
}

export class UploadProfileImageUseCase implements IUsecase {
  constructor(private readonly repository: IUserRepository) {}

  async execute(
    params: IUserProfileImageParams
  ): Promise<TEither<TApplicationError, IUserProfileImageResponse>> {
    return await this.repository.uploadProfileImage(params);
  }
}
