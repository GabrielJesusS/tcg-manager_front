import { TFactory } from "@/core/Factory";
import { UserRepository } from "@/data/remote/UserRepository";
import { GetUserProfileUsecase } from "@/domain/usecases/GetProfileUsecase";
import { CookieServiceJsCookie } from "@/infra/CookieServiceJsCookie";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createGetProfileUsecase: TFactory<GetUserProfileUsecase> = () => {
  const client = new HttpClientAxios();
  const cookieService = new CookieServiceJsCookie();
  const repository = new UserRepository(client, cookieService);

  return new GetUserProfileUsecase(repository);
};
