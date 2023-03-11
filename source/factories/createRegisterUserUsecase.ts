import { TFactory } from "@/core/Factory";
import { UserRepository } from "@/data/remote/UserRepository";
import { RegisterUserUsecase } from "@/domain/usecases/RegisterUserUsecase";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createRegisterUserUsecase: TFactory<RegisterUserUsecase> = () => {
  const client = new HttpClientAxios();
  const cookieService = "";

  const userRepository = new UserRepository(client, cookieService);

  return new RegisterUserUsecase(userRepository);
};
