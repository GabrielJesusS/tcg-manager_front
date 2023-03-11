import { TFactory } from "@/core/Factory";
import { UserRepository } from "@/data/remote/UserRepository";
import { AuthUserUsecase } from "@/domain/usecases/AuthUserUsecase";
import { CookieServiceJsCookie } from "@/infra/CookieServiceJsCookie";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createAuthUserUsecase: TFactory<AuthUserUsecase> = () => {
  const client = new HttpClientAxios();
  const cookieService = new CookieServiceJsCookie();
  const userRepository = new UserRepository(client, cookieService);

  return new AuthUserUsecase(userRepository);
};
