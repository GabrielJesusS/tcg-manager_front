import { TFactory } from "@/core/Factory";
import { CardRepository } from "@/data/remote/CardRepository";
import { GetCardUsecase } from "@/domain/usecases/GetCardUsecase";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createGetCardUsecase: TFactory<GetCardUsecase> = () => {
  const client = new HttpClientAxios();
  const repository = new CardRepository(client);

  return new GetCardUsecase(repository);
};
