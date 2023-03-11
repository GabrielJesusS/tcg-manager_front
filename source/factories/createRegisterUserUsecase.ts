import { TFactory } from "@/core/Factory";
import { UserRepository } from "@/data/remote/UserRepository";
import { RegisterUserUsecase } from "@/domain/usecases/RegisterUserUsecase";
import { CookieServiceJsCookie } from "@/infra/CookieServiceJsCookie";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createRegisterUserUsecase: TFactory<RegisterUserUsecase> = () => {
  const client = new HttpClientAxios();
  const cookieService = new CookieServiceJsCookie();

  const userRepository = new UserRepository(client, cookieService);

  return new RegisterUserUsecase(userRepository);
};
