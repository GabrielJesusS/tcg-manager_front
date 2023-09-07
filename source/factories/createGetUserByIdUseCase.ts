import { TFactory } from "@/core/Factory";
import { UserRepository } from "@/data/remote/UserRepository";
import { GetUserByIdUseCase } from "@/domain/usecases/GetUserByIdUseCase";
import { CookieServiceJsCookie } from "@/infra/CookieServiceJsCookie";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createGetUserByIdUseCase: TFactory<GetUserByIdUseCase> = () => {
  const httpClient = new HttpClientAxios();
  const cookieService = new CookieServiceJsCookie();
  const repository = new UserRepository(httpClient, cookieService);

  return new GetUserByIdUseCase(repository);
};
