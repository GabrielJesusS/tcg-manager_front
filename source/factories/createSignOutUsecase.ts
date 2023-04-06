import { TFactory } from "@/core/Factory";
import { UserRepository } from "@/data/remote/UserRepository";
import { SignOutUsecase } from "@/domain/usecases/SignOutUsecase";
import { CookieServiceJsCookie } from "@/infra/CookieServiceJsCookie";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createSignOutUsecase: TFactory<SignOutUsecase> = () => {
  const client = new HttpClientAxios();
  const cookieService = new CookieServiceJsCookie();

  const repository = new UserRepository(client, cookieService);

  return new SignOutUsecase(repository);
};
