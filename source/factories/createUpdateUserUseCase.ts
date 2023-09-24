import { TFactory } from "@/core/Factory";
import { UserRepository } from "@/data/remote/UserRepository";
import { UpdateUserUseCase } from "@/domain/usecases/UpdateUserUseCase";
import { CookieServiceJsCookie } from "@/infra/CookieServiceJsCookie";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createUpdateUserUseCase: TFactory<UpdateUserUseCase> = () => {
  const cookieService = new CookieServiceJsCookie();
  const client = new HttpClientAxios();
  const repository = new UserRepository(client, cookieService);

  return new UpdateUserUseCase(repository);
};
