import { TFactory } from "@/core/Factory";
import { SetRepository } from "@/data/remote/SetRepository";
import { GetSetListUsecase } from "@/domain/usecases/GetSetListUsecase";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createGetSetListUsecase: TFactory<GetSetListUsecase> = () => {
  const client = new HttpClientAxios();
  const repository = new SetRepository(client);

  return new GetSetListUsecase(repository);
};
