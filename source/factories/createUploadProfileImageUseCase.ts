import { TFactory } from "@/core/Factory";
import { UserRepository } from "@/data/remote/UserRepository";
import { UploadProfileImageUseCase } from "@/domain/usecases/UploadProfileImageUseCase";
import { CookieServiceJsCookie } from "@/infra/CookieServiceJsCookie";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createUploadProfileImageUseCase: TFactory<UploadProfileImageUseCase> =
  () => {
    const client = new HttpClientAxios();
    const cookieService = new CookieServiceJsCookie();
    const repository = new UserRepository(client, cookieService);
    return new UploadProfileImageUseCase(repository);
  };
