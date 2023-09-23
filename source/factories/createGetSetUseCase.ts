import { TFactory } from "@/core/Factory";
import { SetRepository } from "@/data/remote/SetRepository";
import { GetSetUsecase } from "@/domain/usecases/GetSetUseCase";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createGetSetUseCase: TFactory<GetSetUsecase> = () => {
  const client = new HttpClientAxios();
  const repository = new SetRepository(client);
  return new GetSetUsecase(repository);
};
